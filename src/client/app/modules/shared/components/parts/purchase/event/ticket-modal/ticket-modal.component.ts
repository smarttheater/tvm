import { Component, Input, OnInit } from '@angular/core';
import { factory } from '@cinerino/sdk';
import * as moment from 'moment';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Functions, Models } from '../../../../../../..';
import { getEnvironment } from '../../../../../../../../environments/environment';

type IMovieTicketTypeChargeSpecification =
    factory.chevre.priceSpecification.IPriceSpecification<factory.chevre.priceSpecificationType.MovieTicketTypeChargeSpecification>;

interface ISelectedTickets {
    id: string;
    count: number;
    addOn: {
        id: string;
        count: number;
    }[];
}

@Component({
    selector: 'app-purchase-event-ticket-modal',
    templateUrl: './ticket-modal.component.html',
    styleUrls: ['./ticket-modal.component.scss'],
})
export class PurchaseEventTicketModalComponent implements OnInit {
    @Input()
    public screeningEventTicketOffers: factory.chevre.event.screeningEvent.ITicketOffer[];
    @Input()
    public screeningEventSeats: factory.chevre.place.seat.IPlaceWithOffer[];
    @Input() public screeningEvent: factory.event.screeningEvent.IEvent;
    @Input() public cb: (params: {
        reservations: Models.Purchase.Reservation.IReservation[];
        additionalTicketText?: string;
    }) => void;
    public tickets: {
        offer: factory.chevre.event.screeningEvent.ITicketOffer;
        capacityValue: number;
    }[];
    public selectedTickets: ISelectedTickets[];
    public moment = moment;
    public getRemainingSeatLength = Functions.Purchase.getRemainingSeatLength;
    public performance: Models.Purchase.Performance;
    public additionalTicketText: string;
    public environment = getEnvironment();

    constructor(public modal: BsModalRef) {}

    /**
     * 初期化
     */
    public ngOnInit() {
        this.performance = new Models.Purchase.Performance({
            screeningEvent: this.screeningEvent,
        });
        this.tickets = [];
        this.tickets = this.screeningEventTicketOffers
            .filter((ticketOffer) => {
                const movieTicketTypeChargeSpecification = <
                    IMovieTicketTypeChargeSpecification
                >ticketOffer.priceSpecification.priceComponent.find(
                    (c) =>
                        c.typeOf ===
                        factory.chevre.priceSpecificationType
                            .MovieTicketTypeChargeSpecification
                );
                return movieTicketTypeChargeSpecification === undefined;
            })
            .filter((ticketOffer) => {
                return ticketOffer.eligibleMembershipType === undefined;
            })
            .map((ticketOffer) => {
                return {
                    offer: ticketOffer,
                    capacityValue:
                        this.remainingAttendeeCapacityValue(ticketOffer).length,
                };
            });
        const selectedTickets: ISelectedTickets[] = [];
        this.tickets.forEach((t) => {
            if (t.offer.id === undefined) {
                return;
            }
            const addOn: { id: string; count: number }[] = [];
            if (t.offer.addOn !== undefined) {
                t.offer.addOn.forEach((a) => {
                    if (a.id === undefined) {
                        return;
                    }
                    addOn.push({ id: a.id, count: 0 });
                });
            }
            selectedTickets.push({ id: t.offer.id, count: 0, addOn });
        });
        this.selectedTickets = selectedTickets;
        this.additionalTicketText = '';
    }

    /**
     * 予約可能数計算
     */
    public remainingAttendeeCapacityValue(
        screeningEventTicketOffer: factory.chevre.event.screeningEvent.ITicketOffer
    ) {
        const screeningEvent = this.screeningEvent;
        const screeningEventSeats = this.screeningEventSeats;
        let limit = Number(this.environment.PURCHASE_ITEM_MAX_LENGTH);
        if (
            screeningEvent.offers !== undefined &&
            screeningEvent.offers.eligibleQuantity.maxValue !== undefined &&
            limit > screeningEvent.offers.eligibleQuantity.maxValue
        ) {
            limit = screeningEvent.offers.eligibleQuantity.maxValue;
        }
        if (
            screeningEvent.remainingAttendeeCapacity !== undefined &&
            limit > screeningEvent.remainingAttendeeCapacity
        ) {
            limit = screeningEvent.remainingAttendeeCapacity;
        }
        if (
            new Models.Purchase.Performance({ screeningEvent }).isTicketedSeat()
        ) {
            // イベント全体の残席数計算
            const screeningEventLimit =
                Functions.Purchase.getRemainingSeatLength({
                    screeningEvent,
                    screeningEventSeats,
                });
            if (limit > screeningEventLimit) {
                limit = screeningEventLimit;
            }
            // 券種ごとの残席数で計算
            if (
                screeningEvent.aggregateOffer !== undefined &&
                screeningEvent.aggregateOffer.offers !== undefined
            ) {
                const findResult = screeningEvent.aggregateOffer.offers.find(
                    (o) => o.id === screeningEventTicketOffer.id
                );
                if (
                    findResult !== undefined &&
                    findResult.remainingAttendeeCapacity !== undefined &&
                    limit > findResult.remainingAttendeeCapacity
                ) {
                    limit = findResult.remainingAttendeeCapacity;
                }
            }
        }
        return [...Array(limit)].map((_, i) => i + 1);
    }

    /**
     * アドオン予約可能数計算
     */
    public remainingAttendeeCapacityAddOnValue(
        screeningEventTicketOffer: factory.chevre.event.screeningEvent.ITicketOffer
    ) {
        const id = screeningEventTicketOffer.id;
        const findResult = this.selectedTickets.find((s) => s.id === id);
        if (findResult === undefined) {
            return [];
        }
        return [...Array(findResult.count)].map((_, i) => i + 1);
    }

    /**
     * 予約チケット作成
     */
    public createReservations() {
        const reservations: Models.Purchase.Reservation.IReservation[] = [];
        this.selectedTickets.forEach((t) => {
            const count = t.count;
            for (let i = 0; i < count; i++) {
                const findResult = this.screeningEventTicketOffers.find(
                    (s) => s.id === t.id
                );
                const addOn: factory.chevre.offer.IOffer[] = [];
                if (findResult === undefined) {
                    break;
                }
                t.addOn.forEach((a) => {
                    if (findResult.addOn === undefined) {
                        return;
                    }
                    const findAddOnResult = findResult.addOn.find(
                        (a2) => a2.id === a.id && i < a.count
                    );
                    if (findAddOnResult === undefined) {
                        return;
                    }
                    addOn.push(findAddOnResult);
                });

                reservations.push({
                    ticket: { ticketOffer: findResult, addOn },
                });
            }
        });
        return reservations;
    }

    /**
     * 券種数量変更
     */
    public changeSelect(id: string, count: number) {
        const findResult = this.selectedTickets.find((s) => s.id === id);
        if (findResult === undefined) {
            return;
        }
        findResult.count = count;
        findResult.addOn.forEach((a) => {
            if (a.count > count) {
                a.count = count;
            }
        });
    }

    /**
     * 閉じる
     */
    public close() {
        this.modal.hide();
        const reservations = this.createReservations();
        const additionalTicketText = this.additionalTicketText;
        this.cb({ reservations, additionalTicketText });
    }
}
