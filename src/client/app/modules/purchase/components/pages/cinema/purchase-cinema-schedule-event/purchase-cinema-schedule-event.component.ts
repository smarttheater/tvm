import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Functions } from '../../../../../..';
import { getEnvironment } from '../../../../../../../environments/environment';
import {
    ActionService,
    MasterService,
    UtilService,
} from '../../../../../../services';

@Component({
    selector: 'app-purchase-cinema-schedule-event',
    templateUrl: './purchase-cinema-schedule-event.component.html',
    styleUrls: ['./purchase-cinema-schedule-event.component.scss'],
})
export class PurchaseCinemaScheduleEventComponent implements OnInit {
    public moment = moment;
    public environment = getEnvironment();
    public screeningEventsGroup: Functions.Purchase.IScreeningEventsGroup[];
    public screeningEventSeries: factory.chevre.event.screeningEventSeries.IEvent[];
    public animations: boolean[];
    public videoFormatTypes: factory.chevre.categoryCode.ICategoryCode[];
    constructor(
        private router: Router,
        private masterService: MasterService,
        private actionService: ActionService,
        private utilService: UtilService,
        private translate: TranslateService
    ) {}

    /**
     * 初期化
     */
    public async ngOnInit() {
        try {
            this.videoFormatTypes = [];
            this.screeningEventSeries = [];
            this.screeningEventsGroup = [];
            this.animations = [];
            const { theater } = await this.actionService.user.getData();
            const { scheduleDate, creativeWork } =
                await this.actionService.purchase.getData();
            if (
                scheduleDate === undefined ||
                theater === undefined ||
                creativeWork === undefined
            ) {
                throw new Error(
                    'scheduleDate or creativeWork or theater undefined'
                );
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
                        identifiers: [creativeWork.identifier],
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
                        workPerformedIdentifiers: [creativeWork.identifier],
                    },
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
            const screeningEventSeries = this.getScreeningEventSeries(
                screeningEvent.superEvent.id
            );
            if (screeningEventSeries === undefined) {
                throw new Error('screeningEventSeries === undefined');
            }
            this.actionService.purchase.unsettledDelete();
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
