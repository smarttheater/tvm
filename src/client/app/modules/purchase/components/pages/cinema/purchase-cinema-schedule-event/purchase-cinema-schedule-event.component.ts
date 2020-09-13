import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Functions } from '../../../../../..';
import { getEnvironment } from '../../../../../../../environments/environment';
import { ActionService, MasterService, UtilService } from '../../../../../../services';

@Component({
    selector: 'app-purchase-cinema-schedule-event',
    templateUrl: './purchase-cinema-schedule-event.component.html',
    styleUrls: ['./purchase-cinema-schedule-event.component.scss']
})
export class PurchaseCinemaScheduleEventComponent implements OnInit {

    public moment = moment;
    public environment = getEnvironment();
    public screeningEventsGroup: Functions.Purchase.IScreeningEventsGroup[];
    public animations: boolean[];
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private masterService: MasterService,
        private actionService: ActionService,
        private utilService: UtilService,
        private translate: TranslateService,
    ) { }

    /**
     * 初期化
     */
    public async ngOnInit() {
        try {
            this.animations = [];
            const { theater } = await this.actionService.user.getData();
            const { scheduleDate } = await this.actionService.purchase.getData();
            if (scheduleDate === undefined
                || theater === undefined) {
                throw new Error('scheduleDate or theater undefined');
            }
            const workPerformedIdentifier = this.activatedRoute.snapshot.params.identifier;
            const screeningEvents = await this.masterService.getSchedule({
                superEvent: {
                    locationBranchCodes: [theater.branchCode],
                    workPerformedIdentifiers: [workPerformedIdentifier]
                },
                startFrom: moment(scheduleDate).toDate(),
                startThrough: moment(scheduleDate).add(1, 'day').toDate(),
                sort: true
            });
            this.screeningEventsGroup = Functions.Purchase.screeningEvents2ScreeningEventsGroup({ screeningEvents });
            await this.addAnimationClass();
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
        }

    }

    /**
     * スケジュール選択
     */
    public async selectSchedule(screeningEvent: factory.chevre.event.screeningEvent.IEvent) {
        if (screeningEvent.remainingAttendeeCapacity === undefined
            || screeningEvent.remainingAttendeeCapacity === 0) {
            return;
        }
        if (screeningEvent.offers === undefined
            || screeningEvent.offers.itemOffered.serviceOutput === undefined
            || screeningEvent.offers.itemOffered.serviceOutput.reservedTicket === undefined
            || screeningEvent.offers.itemOffered.serviceOutput.reservedTicket.ticketedSeat === undefined) {
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: this.translate.instant('purchase.cinema.schedule.alert.ticketedSeat')
            });
            return;
        }
        try {
            this.actionService.purchase.unsettledDelete();
            await this.actionService.purchase.getScreeningEvent(screeningEvent);
            const { authorizeSeatReservations } = await this.actionService.purchase.getData();
            if (authorizeSeatReservations.length > 0) {
                await this.actionService.purchase.cancelTemporaryReservations(authorizeSeatReservations);
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
        const startTime = 2000;
        await Functions.Util.sleep(startTime);
        for (let i = 0; i < this.animations.length; i++) {
            const time = 1000;
            const target = this.animations.length - i - 1;
            this.animations[target] = true;
            await Functions.Util.sleep(time);
        }
    }
}
