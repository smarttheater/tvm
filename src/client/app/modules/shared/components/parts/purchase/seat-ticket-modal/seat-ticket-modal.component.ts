import { Component, Input, OnInit } from '@angular/core';
import { factory } from '@cinerino/sdk';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Functions, Models } from '../../../../../..';

type IMovieTicketTypeChargeSpecification =
    factory.chevre.priceSpecification.IPriceSpecification<factory.chevre.priceSpecificationType.MovieTicketTypeChargeSpecification>;

@Component({
    selector: 'app-purchase-seat-ticket-modal',
    templateUrl: './seat-ticket-modal.component.html',
    styleUrls: ['./seat-ticket-modal.component.scss'],
})
export class PurchaseSeatTicketModalComponent implements OnInit {
    @Input()
    public authorizeSeatReservation: factory.action.authorize.offer.seatReservation.IAction<factory.service.webAPI.Identifier.Chevre>;
    @Input()
    public screeningEventTicketOffers: factory.chevre.event.screeningEvent.ITicketOffer[];
    @Input()
    public checkMovieTickets: factory.action.check.paymentMethod.movieTicket.IAction[];
    @Input() public reservations: Models.Purchase.Reservation.IReservation[];
    @Input() public reservation?: Models.Purchase.Reservation.IReservation;
    @Input()
    public pendingMovieTickets: Models.Purchase.MovieTicket.IMovieTicket[];
    @Input()
    public checkProducts: {
        code: string;
        token: string;
        typeOfGood: factory.permit.IPermit;
    }[];
    @Input() public cb: (
        ticket: Models.Purchase.Reservation.IReservationTicket
    ) => void;
    public tickets: {
        data: Models.Purchase.Reservation.IReservationTicket;
        count: number;
    }[];
    public selectedTicket?: Models.Purchase.Reservation.IReservationTicket;
    public addOnList: string[];

    constructor(public modal: BsModalRef) {}

    public ngOnInit() {
        this.tickets = [];
        this.addOnList = [];
        let movieTickets: {
            data: Models.Purchase.Reservation.IReservationTicket;
            count: number;
        }[] = [];
        this.screeningEventTicketOffers.forEach((ticketOffer) => {
            if (
                this.reservation?.seat !== undefined &&
                ticketOffer.eligibleSeatingType !== undefined &&
                !Functions.Purchase.isEligibleSeatingType({
                    seat: this.reservation.seat,
                    eligibleSeatingType: ticketOffer.eligibleSeatingType,
                })
            ) {
                // 適用座席タイプ違い
                return;
            }

            const movieTicketPriceComponent =
                this.getMovieTicketPriceComponent(ticketOffer);

            if (movieTicketPriceComponent !== undefined) {
                // ムビチケオファー
                const availableMovieTickets =
                    this.getAvailableMovieTickets(ticketOffer);
                if (availableMovieTickets.length === 0) {
                    return;
                }
                movieTickets = [
                    ...movieTickets,
                    ...[
                        {
                            data: availableMovieTickets[0],
                            count: availableMovieTickets.length,
                        },
                    ],
                ];
                return;
            }

            if (ticketOffer.eligibleMembershipType !== undefined) {
                // メンバーシップオファー
                // const isMembership = this.checkProducts.length > 0;
                // if (isMembership) {
                //     this.tickets.push({ ticketOffer });
                // }
                // return;
            }

            // 通常オファー
            this.tickets.push({
                data: { ticketOffer },
                count: 1,
            });
        });

        this.tickets = [...movieTickets, ...this.tickets];
    }

    /**
     * メンバーシップの有無
     */
    public hasMembership() {
        const filterResult = this.checkProducts.filter((p) => {
            return (
                p.typeOfGood.issuedThrough?.serviceType?.inCodeSet
                    .identifier ===
                factory.chevre.categoryCode.CategorySetIdentifier.MembershipType
            );
        });
        return filterResult.length > 0;
    }

    public close(ticket: Models.Purchase.Reservation.IReservationTicket) {
        this.modal.hide();
        this.cb(ticket);
    }

    /**
     * 券種選択
     */
    public selsctTicket(
        ticket: Models.Purchase.Reservation.IReservationTicket
    ) {
        if (
            ticket.ticketOffer.addOn === undefined ||
            ticket.ticketOffer.addOn.length === 0
        ) {
            this.close(ticket);
            return;
        }
        this.selectedTicket = ticket;
    }

    /**
     * オプション確定
     */
    public selsctOption() {
        if (this.selectedTicket === undefined) {
            this.modal.hide();
            return;
        }
        const addOn: factory.chevre.offer.IOffer[] = [];
        this.addOnList.forEach((id) => {
            if (
                this.selectedTicket === undefined ||
                this.selectedTicket.ticketOffer.addOn === undefined
            ) {
                return;
            }
            const findResult = this.selectedTicket.ticketOffer.addOn.find(
                (a) => a.id === id
            );
            if (findResult === undefined) {
                return;
            }
            addOn.push(findResult);
        });
        this.selectedTicket.addOn = addOn;
        this.close(this.selectedTicket);
    }

    /**
     * オプション選択
     */
    public changeAddOnList(id: string) {
        const findResult = this.addOnList.find((a) => a === id);
        if (findResult === undefined) {
            this.addOnList.push(id);
            return;
        }
        this.addOnList = this.addOnList.filter((a) => a !== id);
    }

    /**
     * ムビチケPriceComponent取得
     */
    private getMovieTicketPriceComponent(
        ticketOffer: factory.chevre.event.screeningEvent.ITicketOffer
    ) {
        const priceComponent = ticketOffer.priceSpecification.priceComponent
            .filter(
                (c) =>
                    c.typeOf ===
                    factory.chevre.priceSpecificationType
                        .MovieTicketTypeChargeSpecification
            )
            .shift();
        return <IMovieTicketTypeChargeSpecification | undefined>priceComponent;
    }

    /**
     * 有効なムビチケオファー取得
     */
    private getAvailableMovieTickets(
        ticketOffer: factory.chevre.event.screeningEvent.ITicketOffer
    ) {
        const movieTickets: Models.Purchase.Reservation.IReservationTicket[] =
            [];
        const movieTicketPriceComponent =
            this.getMovieTicketPriceComponent(ticketOffer);

        if (movieTicketPriceComponent === undefined) {
            return movieTickets;
        }

        // 対象ムビチケ券
        const targetMovieTickets: factory.chevre.paymentMethod.paymentCard.movieTicket.IMovieTicket[] =
            [];
        this.checkMovieTickets.forEach((c) => {
            if (c.result === undefined) {
                return;
            }
            const availabilityMovieTickets = c.result.movieTickets.filter(
                (m) => {
                    return (<any>m).validThrough === undefined;
                }
            );
            availabilityMovieTickets.forEach((m) => {
                if (
                    m.serviceType ===
                    movieTicketPriceComponent.appliesToMovieTicket?.serviceType
                ) {
                    targetMovieTickets.push(m);
                }
            });
        });

        // 選択中の対象ムビチケ券
        const reservations = this.reservations.filter((reservation) => {
            if (
                reservation.ticket === undefined ||
                reservation.ticket.movieTicket === undefined
            ) {
                return false;
            }
            return (
                movieTicketPriceComponent.appliesToMovieTicket?.serviceType ===
                reservation.ticket.movieTicket.serviceType
            );
        });

        // 予約待ちのムビチケ券
        const pendingMovieTickets: factory.chevre.paymentMethod.paymentCard.movieTicket.IMovieTicket[] =
            [];
        this.pendingMovieTickets.forEach((p) => {
            if (p.id === this.authorizeSeatReservation.id) {
                return;
            }
            p.movieTickets.forEach((m) => {
                pendingMovieTickets.push(m);
            });
        });

        targetMovieTickets.forEach((movieTicket) => {
            const reservationsIndex = reservations.findIndex((reservation) => {
                return (
                    reservation.ticket !== undefined &&
                    reservation.ticket.movieTicket !== undefined &&
                    reservation.ticket.movieTicket.identifier ===
                        movieTicket.identifier
                );
            });
            if (reservationsIndex > -1) {
                reservations.splice(reservationsIndex, 1);
                return;
            }
            const pendingMovieTicketsIndex = pendingMovieTickets.findIndex(
                (pendingMovieTicket) => {
                    return (
                        pendingMovieTicket.identifier ===
                            movieTicket.identifier &&
                        pendingMovieTicket.typeOf === movieTicket.typeOf
                    );
                }
            );
            if (pendingMovieTicketsIndex > -1) {
                pendingMovieTickets.splice(pendingMovieTicketsIndex, 1);
                return;
            }
            movieTickets.push({ ticketOffer, movieTicket });
        });

        return movieTickets;
    }
}
