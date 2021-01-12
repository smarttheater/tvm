import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Functions, Models } from '../../../../../..';
import { getEnvironment } from '../../../../../../../environments/environment';
import { ActionService, MasterService, UtilService } from '../../../../../../services';

@Component({
    selector: 'app-purchase-cinema-schedule',
    templateUrl: './purchase-cinema-schedule.component.html',
    styleUrls: ['./purchase-cinema-schedule.component.scss']
})
export class PurchaseCinemaScheduleComponent implements OnInit {

    public screeningEventsGroup: Functions.Purchase.IScreeningEventsGroup[];
    public moment = moment;
    public environment = getEnvironment();

    constructor(
        private router: Router,
        private utilService: UtilService,
        private actionService: ActionService,
        private masterService: MasterService,
        private translate: TranslateService,
    ) { }

    /**
     * 初期化
     */
    public async ngOnInit() {
        try {
            const { theater } = await this.actionService.user.getData();
            const { scheduleDate } = await this.actionService.purchase.getData();
            if (scheduleDate === undefined
                || theater === undefined) {
                throw new Error('scheduleDate or theater undefined');
            }

            const screeningEvents = await this.masterService.searchScreeningEvent({
                superEvent: {
                    locationBranchCodes: [theater.branchCode],
                },
                startFrom: moment(scheduleDate).toDate(),
                startThrough: moment(scheduleDate).add(1, 'day').add(-1, 'millisecond').toDate()
            });
            const filterResult = screeningEvents.filter((s) => {
                const performance = new Models.Purchase.Performance(s);
                return !(performance.isSales('end'));
            });
            this.screeningEventsGroup = Functions.Purchase.screeningEvents2ScreeningEventsGroup({
                screeningEvents: filterResult, sortType: 'startDate'
            });
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
}
