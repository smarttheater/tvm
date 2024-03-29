import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import * as moment from 'moment';
import { Functions } from '../../../../../..';
import { getEnvironment } from '../../../../../../../environments/environment';
import {
    ActionService,
    StoreService,
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
        private actionService: ActionService,
        private utilService: UtilService,
        private storeService: StoreService
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
            const { application } = await this.storeService.user.getData();
            const { scheduleDate, creativeWork } =
                await this.storeService.purchase.getData();
            if (
                scheduleDate === undefined ||
                application?.theater === undefined ||
                creativeWork === undefined
            ) {
                throw new Error(
                    'scheduleDate or creativeWork or theater undefined'
                );
            }
            this.videoFormatTypes =
                await this.actionService.categoryCode.search({
                    categorySetIdentifier:
                        factory.chevre.categoryCode.CategorySetIdentifier
                            .VideoFormatType,
                });
            this.screeningEventSeries =
                await this.actionService.event.searchScreeningEventSeries({
                    workPerformed: {
                        identifiers: [creativeWork.identifier],
                    },
                    location: {
                        branchCode: {
                            $eq: application.theater.branchCode,
                        },
                    },
                });
            const screeningEvents =
                await this.actionService.event.searchScreeningEvent({
                    superEvent: {
                        locationBranchCodes: [application.theater.branchCode],
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
                (await this.utilService.getServerTime(true)).date
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
        try {
            const screeningEventSeries = this.getScreeningEventSeries(
                screeningEvent.superEvent.id
            );
            if (screeningEventSeries === undefined) {
                throw new Error('screeningEventSeries === undefined');
            }
            this.storeService.purchase.unsettledDelete();
            this.storeService.purchase.setScreeningEventSeries(
                screeningEventSeries
            );
            const screeningEventResult =
                await this.actionService.event.findById(screeningEvent);
            this.storeService.purchase.setScreeningEvent({
                screeningEvent: screeningEventResult,
            });
            const { authorizeSeatReservations } =
                await this.storeService.purchase.getData();
            if (authorizeSeatReservations.length > 0) {
                const voidSeatReservation =
                    await this.actionService.transaction.voidSeatReservation({
                        ids: authorizeSeatReservations.map((a) => a.id),
                    });
                this.storeService.purchase.setAuthorizeSeatReservation(
                    voidSeatReservation
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
