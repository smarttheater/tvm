import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Functions, Models } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';
import {
    ActionService,
    StoreService,
    UtilService,
} from '../../../../../services';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-purchase-seat',
    template: '',
})
export class PurchaseSeatComponent implements OnInit {
    public purchase: Observable<reducers.IPurchaseState>;
    public user: Observable<reducers.IUserState>;
    public isLoading: Observable<boolean>;
    public viewType = Models.Util.ViewType;
    public environment = getEnvironment();
    public screeningEventSeats: factory.chevre.place.seat.IPlaceWithOffer[];
    public translateName: string;
    public reservationCount: number;
    public Number = Number;
    public outerHeight: number;
    @ViewChild('screenContainer')
    public screenContainer: { nativeElement: HTMLElement };

    constructor(
        private store: Store<reducers.IState>,
        private utilService: UtilService,
        private translate: TranslateService,
        protected router: Router,
        protected actionService: ActionService,
        protected storeService: StoreService
    ) {}

    public async ngOnInit() {
        this.purchase = this.store.pipe(select(reducers.getPurchase));
        this.user = this.store.pipe(select(reducers.getUser));
        this.isLoading = this.store.pipe(select(reducers.getLoading));
        this.translateName =
            this.environment.VIEW_TYPE === 'cinema'
                ? 'purchase.cinema.seat'
                : 'purchase.event.seat';
        this.screeningEventSeats = [];
        this.reservationCount = 0;
        try {
            const { screeningEvent, reservations, seller } =
                await this.storeService.purchase.getData();
            if (screeningEvent === undefined || seller === undefined) {
                this.router.navigate(['/error']);
                return;
            }
            this.reservationCount = reservations.length;
            await this.resetSeats();
            reservations.forEach((r) => {
                if (r.seat === undefined) {
                    return;
                }
                this.selectSeat({
                    seat: r.seat,
                    status: Models.Purchase.Screen.SeatStatus.Default,
                });
            });
            const screeningRooms =
                await this.actionService.place.searchScreeningRooms({
                    branchCode: { $eq: screeningEvent.location.branchCode },
                    containedInPlace: {
                        branchCode: {
                            $eq: screeningEvent.superEvent.location.branchCode,
                        },
                    },
                });
            const screeningRoom = screeningRooms[0];
            if (screeningRoom === undefined) {
                throw new Error('screeningRoom undefined');
            }
            this.storeService.purchase.setScreeningRoom({ screeningRoom });
            this.screeningEventSeats =
                await this.actionService.event.getScreeningEventSeats();
            const ticketOffers =
                await this.actionService.event.searchTicketOffers();
            this.storeService.purchase.setTicketOffers({ ticketOffers });
            this.outerHeight =
                this.screenContainer.nativeElement.clientHeight - 100;
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
        }
    }

    /**
     * 座席選択
     */
    public async selectSeat(data: {
        seat: Models.Purchase.Reservation.IReservationSeat;
        status: Models.Purchase.Screen.SeatStatus;
    }) {
        const { screeningEvent, reservations } =
            await this.storeService.purchase.getData();
        if (data.status === Models.Purchase.Screen.SeatStatus.Default) {
            if (
                screeningEvent !== undefined &&
                screeningEvent.offers !== undefined &&
                screeningEvent.offers.eligibleQuantity.maxValue !== undefined &&
                reservations.length >=
                    screeningEvent.offers.eligibleQuantity.maxValue
            ) {
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: this.translate.instant(
                        `${this.translateName}.alert.limit`,
                        {
                            value: screeningEvent.offers.eligibleQuantity
                                .maxValue,
                        }
                    ),
                });
                return;
            }
            this.storeService.purchase.setSeats({ seats: [data.seat] });
        } else {
            this.storeService.purchase.removeSeats({ seats: [data.seat] });
        }
    }

    /**
     * 全席選択解除
     */
    public async resetSeats() {
        const seats: Models.Purchase.Reservation.IReservationSeat[] = [];
        const purchase = await this.storeService.purchase.getData();
        purchase.reservations.forEach((reservation) => {
            if (reservation.seat === undefined) {
                return;
            }
            seats.push(reservation.seat);
        });
        this.storeService.purchase.removeSeats({ seats });
    }

    /**
     * 自由席予約可能数計算
     */
    public remainingAttendeeCapacityValue(params: {
        screeningEventSeats: factory.chevre.place.seat.IPlaceWithOffer[];
        screeningEvent: factory.chevre.event.screeningEvent.IEvent;
        reservations: Models.Purchase.Reservation.IReservation[];
    }) {
        const { screeningEventSeats, screeningEvent, reservations } = params;
        const values = [];
        let limit = Number(this.environment.PURCHASE_ITEM_MAX_LENGTH);
        if (
            screeningEvent.offers !== undefined &&
            screeningEvent.offers.eligibleQuantity.maxValue !== undefined &&
            limit > screeningEvent.offers.eligibleQuantity.maxValue
        ) {
            limit = screeningEvent.offers.eligibleQuantity.maxValue;
        }
        if (
            new Models.Purchase.Performance({ screeningEvent }).isTicketedSeat()
        ) {
            // イベント全体の残席数計算
            const screeningEventLimit =
                Functions.Purchase.getRemainingSeatLength({
                    screeningEventSeats,
                    screeningEvent,
                }) + reservations.length;
            if (limit > screeningEventLimit) {
                limit = screeningEventLimit;
            }
        }
        for (let i = 0; i < limit; i++) {
            values.push(i + 1);
        }
        return values;
    }

    /**
     * 自由席選択
     */
    public async selectOpenSeating() {
        const { reservations } = await this.storeService.purchase.getData();
        this.screeningEventSeats =
            await this.actionService.event.getScreeningEventSeats();
        const screeningEventSeats = this.screeningEventSeats;
        const seats = Functions.Purchase.getEmptySeat({
            reservations,
            screeningEventSeats,
        });
        await this.resetSeats();
        const selectSeats: Models.Purchase.Reservation.IReservationSeat[] = [];
        for (let i = 0; i < Number(this.reservationCount); i++) {
            const seat =
                seats[i] === undefined
                    ? {
                          seatNumber: String(i + 1),
                          seatRow: '',
                          seatSection: '',
                          typeOf: <any>factory.placeType.Seat,
                      }
                    : seats[i];
            selectSeats.push(seat);
        }
        this.storeService.purchase.setSeats({ seats: selectSeats });
    }

    /**
     * onSubmit
     */
    public async onSubmit() {
        const { screeningEventTicketOffers, screen } =
            await this.storeService.purchase.getData();
        try {
            if (screeningEventTicketOffers.length === 0) {
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: this.translate.instant(
                        `${this.translateName}.alert.ticketNotfound`
                    ),
                });
                return;
            }
            if (screen !== undefined && screen.openSeatingAllowed) {
                // 自由席
                await this.selectOpenSeating();
            }
            const { reservations } = await this.storeService.purchase.getData();
            const authorizeSeatReservation =
                await this.actionService.transaction.authorizeSeatReservation({
                    reservations,
                    screeningEventSeats: this.screeningEventSeats,
                });
            this.storeService.purchase.setAuthorizeSeatReservation(
                authorizeSeatReservation
            );
            const navigate =
                this.environment.VIEW_TYPE === 'cinema'
                    ? '/purchase/cinema/ticket'
                    : '/purchase/event/ticket';
            this.router.navigate([navigate]);
        } catch (error) {
            if (screen !== undefined && screen.openSeatingAllowed) {
                // 自由席
                await this.resetSeats();
            }
            console.error(error);
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: `<p class="mb-4">${this.translate.instant(
                    `${this.translateName}.alert.temporaryReservation`
                )}</p>
                <div class="p-3 bg-light-gray select-text">
                <code>${
                    JSON.stringify(error) === '{}'
                        ? error
                        : JSON.stringify(error)
                }</code>
            </div>`,
            });
        }
    }
}
