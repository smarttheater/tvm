import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Functions, Models } from '../../../../../..';
import { getEnvironment } from '../../../../../../../environments/environment';
import {
    ActionService,
    StoreService,
    UtilService,
} from '../../../../../../services';
import * as reducers from '../../../../../../store/reducers';

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
    selector: 'app-purchase-event-select',
    templateUrl: './purchase-event-select.component.html',
    styleUrls: ['./purchase-event-select.component.scss'],
})
export class PurchaseEventSelectComponent implements OnInit {
    public purchase: Observable<reducers.IPurchaseState>;
    public error: Observable<string | null>;
    public isLoading: Observable<boolean>;
    public moment = moment;
    public environment = getEnvironment();
    public screeningEventTicketOffers: factory.chevre.event.screeningEvent.ITicketOffer[];
    public screeningEvent: factory.event.screeningEvent.IEvent;
    public screeningEventSeats: factory.chevre.place.seat.IPlaceWithOffer[];
    public tickets: factory.chevre.event.screeningEvent.ITicketOffer[];
    public selectedTickets: ISelectedTickets[];
    public getRemainingSeatLength = Functions.Purchase.getRemainingSeatLength;
    public performance: Models.Purchase.Performance;
    public additionalTicketText: string;

    constructor(
        private store: Store<reducers.IState>,
        private router: Router,
        private utilService: UtilService,
        private translate: TranslateService,
        private actionService: ActionService,
        private storeService: StoreService
    ) {}

    public async ngOnInit() {
        this.purchase = this.store.pipe(select(reducers.getPurchase));
        this.error = this.store.pipe(select(reducers.getError));
        this.isLoading = this.store.pipe(select(reducers.getLoading));
        this.tickets = [];
        this.screeningEventSeats = [];
        try {
            const {
                screeningEvent,
                screeningEventTicketOffers,
                authorizeSeatReservations,
            } = await this.storeService.purchase.getData();
            if (authorizeSeatReservations.length > 0) {
                const voidSeatReservation =
                    await this.actionService.transaction.voidSeatReservation({
                        ids: authorizeSeatReservations.map((a) => a.id),
                    });
                this.storeService.purchase.setAuthorizeSeatReservation(
                    voidSeatReservation
                );
            }
            if (screeningEvent === undefined) {
                throw new Error(
                    'screeningEvent or screeningEventTicketOffers undefined'
                );
            }
            this.screeningEvent = screeningEvent;
            this.screeningEventTicketOffers = screeningEventTicketOffers;
            this.screeningEventSeats =
                await this.actionService.event.getScreeningEventSeats();
            this.performance = new Models.Purchase.Performance({
                screeningEvent,
            });
            this.tickets = screeningEventTicketOffers
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
                });
            const selectedTickets: ISelectedTickets[] = [];
            this.tickets.forEach((t) => {
                if (t.id === undefined) {
                    return;
                }
                const addOn: { id: string; count: number }[] = [];
                if (t.addOn !== undefined) {
                    t.addOn.forEach((a) => {
                        if (a.id === undefined) {
                            return;
                        }
                        addOn.push({ id: a.id, count: 0 });
                    });
                }
                selectedTickets.push({ id: t.id, count: 0, addOn });
            });
            this.selectedTickets = selectedTickets;
            this.additionalTicketText = '';
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
        }
    }

    /**
     * 予約可能数計算
     */
    public remainingAttendeeCapacityValue(
        screeningEventTicketOffer: factory.chevre.event.screeningEvent.ITicketOffer
    ) {
        const values = [];
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
        for (let i = 0; i < limit; i++) {
            values.push(i + 1);
        }
        return values;
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
     * 選択チケット取得
     */
    public getSelectTicket(id: string) {
        const findResult = <
            {
                id: string;
                count: number;
                addOn: {
                    id: string;
                }[];
            }
        >this.selectedTickets.find((s) => s.id === id);
        return findResult;
    }

    /**
     * 券種確定
     */
    public async onSubmit() {
        const reservations = this.createReservations();
        const additionalTicketText = this.additionalTicketText;
        try {
            const { screeningEvent } =
                await this.storeService.purchase.getData();
            // チケット枚数上限判定
            const limit =
                screeningEvent === undefined ||
                screeningEvent.offers === undefined ||
                screeningEvent.offers.eligibleQuantity.maxValue === undefined
                    ? Number(this.environment.PURCHASE_ITEM_MAX_LENGTH)
                    : screeningEvent.offers.eligibleQuantity.maxValue;
            if (reservations.length > limit) {
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: this.translate.instant(
                        'purchase.event.select.alert.limit',
                        { value: limit }
                    ),
                });
                return;
            }
            this.screeningEventSeats =
                await this.actionService.event.getScreeningEventSeats();
            if (
                screeningEvent !== undefined &&
                new Models.Purchase.Performance({
                    screeningEvent,
                }).isTicketedSeat()
            ) {
                const remainingSeatLength =
                    Functions.Purchase.getRemainingSeatLength({
                        screeningEventSeats: this.screeningEventSeats,
                        screeningEvent,
                    });
                if (remainingSeatLength < reservations.length) {
                    this.utilService.openAlert({
                        title: this.translate.instant('common.error'),
                        body: this.translate.instant(
                            'purchase.event.select.alert.getScreeningEventSeats'
                        ),
                    });
                    return;
                }
            }
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
            return;
        }

        try {
            const authorizeSeatReservation =
                await this.actionService.transaction.authorizeSeatReservation({
                    reservations,
                    additionalTicketText,
                    screeningEventSeats: this.screeningEventSeats,
                });
            this.storeService.purchase.setAuthorizeSeatReservation(
                authorizeSeatReservation
            );
        } catch (error) {
            console.error(error);
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: `
                <p class="mb-4">${this.translate.instant(
                    'purchase.event.select.alert.temporaryReservation'
                )}</p>
                <div class="p-3 bg-light-gray select-text text-left">
                    <code>${error}</code>
                </div>`,
            });
            return;
        }
        this.router.navigate(['/purchase/payment']);
    }

    /**
     * 戻る
     */
    public async prev() {
        const { authorizeSeatReservations } =
            await this.storeService.purchase.getData();
        if (authorizeSeatReservations.length > 0) {
            await this.actionService.transaction.voidSeatReservation({
                ids: authorizeSeatReservations.map((a) => a.id),
            });
        }
        this.router.navigate(['/purchase/event/schedule']);
    }
}
