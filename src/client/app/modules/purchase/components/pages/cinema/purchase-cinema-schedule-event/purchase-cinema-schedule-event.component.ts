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
                startThrough: moment(scheduleDate).add(1, 'day').toDate()
            });
            this.screeningEventsGroup = Functions.Purchase.screeningEvents2ScreeningEventSeries({ screeningEvents });
        } catch (error) {
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
            await this.actionService.purchase.getScreeningEvent(screeningEvent);
            if (screeningEvent.offers.seller === undefined
                || screeningEvent.offers.seller.id === undefined) {
                throw new Error('screeningEvent.offers.seller or screeningEvent.offers.seller.id undefined');
            }
            await this.actionService.purchase.getSeller(screeningEvent.offers.seller.id);
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
            return;
        }
    }

}
