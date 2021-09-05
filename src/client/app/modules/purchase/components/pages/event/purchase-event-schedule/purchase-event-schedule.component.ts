import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { Functions, Models } from '../../../../../..';
import { getEnvironment } from '../../../../../../../environments/environment';
import {
    ActionService,
    MasterService,
    UtilService,
} from '../../../../../../services';
import * as reducers from '../../../../../../store/reducers';
import { PurchaseEventTicketModalComponent } from '../../../../../shared/components/parts/purchase/event/ticket-modal/ticket-modal.component';

@Component({
    selector: 'app-purchase-event-schedule',
    templateUrl: './purchase-event-schedule.component.html',
    styleUrls: ['./purchase-event-schedule.component.scss'],
})
export class PurchaseEventScheduleComponent implements OnInit {
    public purchase: Observable<reducers.IPurchaseState>;
    public user: Observable<reducers.IUserState>;
    public master: Observable<reducers.IMasterState>;
    public error: Observable<string | null>;
    public isLoading: Observable<boolean>;
    public screeningEventsGroup: Functions.Purchase.IScreeningEventsGroup[];
    public screeningEventSeries: factory.chevre.event.screeningEventSeries.IEvent[];
    public moment = moment;
    public environment = getEnvironment();
    public screeningEventSeats: factory.chevre.place.seat.IPlaceWithOffer[];
    public videoFormatTypes: factory.chevre.categoryCode.ICategoryCode[];
    public animations: boolean[];

    constructor(
        private store: Store<reducers.IState>,
        private router: Router,
        private utilService: UtilService,
        private translate: TranslateService,
        private actionService: ActionService,
        private masterService: MasterService,
        private modal: BsModalService
    ) {}

    public async ngOnInit() {
        this.purchase = this.store.pipe(select(reducers.getPurchase));
        this.user = this.store.pipe(select(reducers.getUser));
        this.master = this.store.pipe(select(reducers.getMaster));
        this.error = this.store.pipe(select(reducers.getError));
        this.isLoading = this.store.pipe(select(reducers.getLoading));
        this.actionService.purchase.unsettledDelete();
        this.screeningEventsGroup = [];
        this.videoFormatTypes = [];
        this.animations = [];
        try {
            const user = await this.actionService.user.getData();
            const purchase = await this.actionService.purchase.getData();
            const theater = user.theater;
            const scheduleDate = purchase.scheduleDate;
            if (theater === undefined || scheduleDate === undefined) {
                throw new Error('scheduleDate or theater undefined');
            }
            this.videoFormatTypes = await this.masterService.searchCategoryCode(
                {
                    categorySetIdentifier:
                        factory.chevre.categoryCode.CategorySetIdentifier
                            .VideoFormatType,
                }
            );
            this.screeningEventSeries =
                await this.masterService.searchScreeningEventSeries({
                    workPerformed: {
                        identifiers: [],
                    },
                    location: {
                        branchCode: {
                            $eq: theater.branchCode,
                        },
                    },
                });
            const screeningEvents =
                await this.masterService.searchScreeningEvent({
                    superEvent: { locationBranchCodes: [theater.branchCode] },
                    startFrom: moment(scheduleDate).toDate(),
                    startThrough: moment(scheduleDate)
                        .add(1, 'day')
                        .add(-1, 'millisecond')
                        .toDate(),
                    screeningEventSeries: this.screeningEventSeries,
                });
            const now = moment(
                (await this.utilService.getServerTime()).date
            ).toDate();
            this.screeningEventsGroup =
                Functions.Purchase.screeningEvents2ScreeningEventSeries({
                    screeningEvents,
                    now,
                });
            await this.addAnimationClass();
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
        }
    }

    /**
     * スケジュール選択
     */
    public async selectSchedule(
        screeningEvent: factory.event.screeningEvent.IEvent
    ) {
        const purchase = await this.actionService.purchase.getData();
        if (purchase.seller === undefined) {
            this.router.navigate(['/error']);
            return;
        }
        if (
            purchase.authorizeSeatReservations.length > 0 &&
            Number(this.environment.PURCHASE_ITEM_MAX_LENGTH) === 1
        ) {
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: this.translate.instant(
                    'purchase.event.schedule.alert.cart'
                ),
            });
            return;
        }
        try {
            await this.actionService.event.getScreeningEvent(screeningEvent);
            this.screeningEventSeats =
                await this.actionService.event.getScreeningEventSeats();
            await this.actionService.event.searchTicketOffers();
            await this.actionService.purchase.getScreeningRoom({
                branchCode: { $eq: screeningEvent.location.branchCode },
                containedInPlace: {
                    branchCode: {
                        $eq: screeningEvent.superEvent.location.branchCode,
                    },
                },
            });
            this.openTicketList();
        } catch (error) {
            console.error(error);
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: '',
            });
        }
    }

    /**
     * 券種表示
     */
    private async openTicketList() {
        const purchase = await this.actionService.purchase.getData();
        const screeningEvent = purchase.screeningEvent;
        const screeningEventTicketOffers = purchase.screeningEventTicketOffers;
        const screeningEventSeats = this.screeningEventSeats;
        const screen = purchase.screen;
        if (screeningEvent === undefined || screen === undefined) {
            return;
        }
        const performance = new Models.Purchase.Performance({ screeningEvent });
        const isInfinitetock = performance.isInfinitetock();
        const isTicketedSeat = performance.isTicketedSeat();
        const isOpenSeatingAllowed =
            screen.openSeatingAllowed === undefined
                ? false
                : screen.openSeatingAllowed;
        const movieTicketTypeOffers =
            Functions.Purchase.getMovieTicketTypeOffers({
                screeningEventTicketOffers,
            });
        const membershipTypeOffers = Functions.Purchase.getMembershipTypeOffers(
            {
                screeningEventTicketOffers,
            }
        );
        const isOpenModal =
            (isInfinitetock && !isOpenSeatingAllowed) ||
            (!isTicketedSeat && !isOpenSeatingAllowed) ||
            (isOpenSeatingAllowed &&
                movieTicketTypeOffers.length === 0 &&
                membershipTypeOffers.length === 0);
        if (!this.environment.PURCHASE_CART) {
            // カート機能なし
            this.router.navigate(['/purchase/event/select']);
            return;
        }
        if (isOpenModal) {
            // 座席選択なし
            this.modal.show(PurchaseEventTicketModalComponent, {
                class: 'modal-dialog-centered modal-xl',
                backdrop: 'static',
                initialState: {
                    screeningEventTicketOffers,
                    screeningEventSeats,
                    screeningEvent,
                    cb: (params: {
                        reservations: Models.Purchase.Reservation.IReservation[];
                        additionalTicketText?: string;
                    }) => {
                        this.selectTicket(params);
                    },
                },
            });
            return;
        }
        // 座席選択あり
        this.router.navigate(['/purchase/event/seat']);
    }

    /**
     * 券種選択
     */
    private async selectTicket(params: {
        reservations: Models.Purchase.Reservation.IReservation[];
        additionalTicketText?: string;
    }) {
        const reservations = params.reservations;
        const additionalTicketText = params.additionalTicketText;
        if (
            reservations.length >
            Number(this.environment.PURCHASE_ITEM_MAX_LENGTH)
        ) {
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: this.translate.instant(
                    'purchase.event.schedule.alert.limit',
                    { value: this.environment.PURCHASE_ITEM_MAX_LENGTH }
                ),
            });
            return;
        }
        try {
            this.screeningEventSeats =
                await this.actionService.event.getScreeningEventSeats();
            const { screeningEvent } =
                await this.actionService.purchase.getData();
            if (
                screeningEvent !== undefined &&
                new Models.Purchase.Performance({
                    screeningEvent,
                }).isTicketedSeat()
            ) {
                const remainingSeatLength =
                    Functions.Purchase.getRemainingSeatLength({
                        screeningEventSeats: this.screeningEventSeats,
                        screeningEvent: screeningEvent,
                    });
                if (remainingSeatLength < reservations.length) {
                    this.utilService.openAlert({
                        title: this.translate.instant('common.error'),
                        body: this.translate.instant(
                            'purchase.event.schedule.alert.getScreeningEventSeats'
                        ),
                    });
                    return;
                }
            }
        } catch (error) {
            console.error(error);
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: '',
            });
        }

        try {
            await this.actionService.transaction.authorizeSeatReservation({
                reservations,
                additionalTicketText,
                screeningEventSeats: this.screeningEventSeats,
            });
            this.utilService.openAlert({
                title: this.translate.instant('common.complete'),
                body: this.translate.instant(
                    'purchase.event.schedule.success.temporaryReservation'
                ),
            });
            this.actionService.purchase.unsettledDelete();
        } catch (error) {
            console.error(error);
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: `
                <p class="mb-4">${this.translate.instant(
                    'purchase.event.schedule.alert.temporaryReservation'
                )}</p>
                <div class="p-3 bg-light-gray select-text text-left">
                    <code>${error}</code>
                </div>`,
            });
        }
    }

    /**
     * 券種確定
     */
    public async onSubmit() {
        const { authorizeSeatReservations } =
            await this.actionService.purchase.getData();
        // チケット未選択判定
        if (authorizeSeatReservations.length === 0) {
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: this.translate.instant(
                    'purchase.event.schedule.alert.unselected'
                ),
            });
            return;
        }
        // チケット枚数上限判定
        let itemCount = 0;
        authorizeSeatReservations.forEach(
            (a) => (itemCount += a.object.acceptedOffer.length)
        );
        if (itemCount > Number(this.environment.PURCHASE_ITEM_MAX_LENGTH)) {
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: this.translate.instant(
                    'purchase.event.schedule.alert.limit',
                    { value: Number(this.environment.PURCHASE_ITEM_MAX_LENGTH) }
                ),
            });
            return;
        }
        this.router.navigate(['/purchase/payment']);
    }

    /**
     * アニメーションクラス追加
     */
    public async addAnimationClass() {
        this.screeningEventsGroup.forEach(() => this.animations.push(false));
        const startTime = 300;
        await Functions.Util.sleep(startTime);
        for (let i = 0; i < this.animations.length; i++) {
            const time = 300;
            const target = this.animations.length - i - 1;
            this.animations[target] = true;
            await Functions.Util.sleep(time);
        }
    }

    /**
     * 施設コンテンツ取得
     */
    public getScreeningEventSeries(id: string) {
        return this.screeningEventSeries.find((s) => s.id === id);
    }
}
