import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Functions, Models } from '../../../../../..';
import { getEnvironment } from '../../../../../../../environments/environment';
import {
    ActionService,
    MasterService,
    UtilService,
} from '../../../../../../services';

@Component({
    selector: 'app-purchase-cinema-schedule',
    templateUrl: './purchase-cinema-schedule.component.html',
    styleUrls: ['./purchase-cinema-schedule.component.scss'],
})
export class PurchaseCinemaScheduleComponent implements OnInit {
    public creativeWorks: factory.chevre.creativeWork.movie.ICreativeWork[];
    public screeningEventsGroup: Functions.Purchase.IScreeningEventsGroup[];
    public screeningEventSeries: factory.chevre.event.screeningEventSeries.IEvent[];
    public videoFormatTypes: factory.chevre.categoryCode.ICategoryCode[];
    public contentRatingTypes: factory.chevre.categoryCode.ICategoryCode[];
    public moment = moment;
    public environment = getEnvironment();

    constructor(
        private router: Router,
        private utilService: UtilService,
        private actionService: ActionService,
        private masterService: MasterService,
        private translate: TranslateService
    ) {}

    /**
     * 初期化
     */
    public async ngOnInit() {
        try {
            this.videoFormatTypes = [];
            this.contentRatingTypes = [];
            this.screeningEventSeries = [];
            this.screeningEventsGroup = [];
            this.creativeWorks = [];
            const { theater } = await this.actionService.user.getData();
            const { scheduleDate } =
                await this.actionService.purchase.getData();
            if (scheduleDate === undefined || theater === undefined) {
                throw new Error('scheduleDate or theater undefined');
            }
            this.contentRatingTypes =
                await this.masterService.searchCategoryCode({
                    categorySetIdentifier:
                        factory.chevre.categoryCode.CategorySetIdentifier
                            .ContentRatingType,
                });
            this.videoFormatTypes = await this.masterService.searchCategoryCode(
                {
                    categorySetIdentifier:
                        factory.chevre.categoryCode.CategorySetIdentifier
                            .VideoFormatType,
                }
            );
            this.creativeWorks = await this.masterService.searchMovies({
                offers: {
                    availableFrom: moment(scheduleDate).toDate(),
                },
            });
            this.screeningEventSeries =
                await this.masterService.searchScreeningEventSeries({
                    workPerformed: {
                        identifiers: this.creativeWorks.map(
                            (c) => c.identifier
                        ),
                    },
                    location: {
                        branchCode: {
                            $eq: theater.branchCode,
                        },
                    },
                });
            const screeningEvents =
                await this.masterService.searchScreeningEvent({
                    superEvent: {
                        locationBranchCodes: [theater.branchCode],
                    },
                    startFrom: moment(scheduleDate).toDate(),
                    startThrough: moment(scheduleDate)
                        .add(1, 'day')
                        .add(-1, 'millisecond')
                        .toDate(),
                });
            const filterResult = screeningEvents.filter((s) => {
                const performance = new Models.Purchase.Performance({
                    screeningEvent: s,
                });
                return !performance.isSales('end');
            });
            const now = moment(
                (await this.utilService.getServerTime()).date
            ).toDate();
            this.screeningEventsGroup =
                Functions.Purchase.screeningEvents2ScreeningEventSeries({
                    screeningEvents: filterResult,
                    sortType: 'startDate',
                    now,
                });
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
        }
    }
    /**
     * スケジュール選択
     */
    public async selectSchedule(
        screeningEvent: factory.chevre.event.screeningEvent.IEvent
    ) {
        if (
            screeningEvent.remainingAttendeeCapacity === undefined ||
            screeningEvent.remainingAttendeeCapacity === 0
        ) {
            return;
        }
        if (
            screeningEvent.offers === undefined ||
            screeningEvent.offers.itemOffered.serviceOutput === undefined ||
            screeningEvent.offers.itemOffered.serviceOutput.reservedTicket ===
                undefined ||
            screeningEvent.offers.itemOffered.serviceOutput.reservedTicket
                .ticketedSeat === undefined
        ) {
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: this.translate.instant(
                    'purchase.cinema.schedule.alert.ticketedSeat'
                ),
            });
            return;
        }
        try {
            if (screeningEvent.workPerformed?.identifier === undefined) {
                throw new Error('workPerformed.identifier === undefined');
            }
            const creativeWork = this.getCreativeWorks(
                screeningEvent.workPerformed?.identifier
            );
            const screeningEventSeries = this.getScreeningEventSeries(
                screeningEvent.superEvent.id
            );
            if (
                creativeWork === undefined ||
                screeningEventSeries === undefined
            ) {
                throw new Error(
                    'creativeWork or screeningEventSeries === undefined'
                );
            }
            this.actionService.purchase.unsettledDelete();
            this.actionService.purchase.selectCreativeWork(creativeWork);
            this.actionService.purchase.selectScreeningEventSeries(
                screeningEventSeries
            );
            await this.actionService.purchase.event.getScreeningEvent(
                screeningEvent
            );
            const { authorizeSeatReservations } =
                await this.actionService.purchase.getData();
            if (authorizeSeatReservations.length > 0) {
                await this.actionService.purchase.transaction.voidSeatReservation(
                    { authorizeSeatReservations }
                );
            }
            this.router.navigate(['/purchase/cinema/seat']);
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
            return;
        }
    }

    /**
     * 施設コンテンツ取得
     */
    public getScreeningEventSeries(id: string) {
        return this.screeningEventSeries.find((s) => s.id === id);
    }

    /**
     * コンテンツ取得
     */
    public getCreativeWorks(identifier: string) {
        return this.creativeWorks.find((c) => c.identifier === identifier);
    }

    /**
     * 上映方式区分取得
     */
    public getVideoFormatType(code: string) {
        return this.videoFormatTypes.find((v) => v.codeValue === code);
    }

    /**
     * レイティング区分取得
     */
    public getContentRatingType(code?: string) {
        return this.contentRatingTypes.find((c) => c.codeValue === code);
    }
}
