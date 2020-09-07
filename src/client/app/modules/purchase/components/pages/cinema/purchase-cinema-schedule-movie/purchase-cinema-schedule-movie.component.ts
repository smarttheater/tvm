import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import * as moment from 'moment';
import { getEnvironment } from '../../../../../../../environments/environment';
import { ActionService, MasterService } from '../../../../../../services';

@Component({
    selector: 'app-purchase-cinema-schedule-movie',
    templateUrl: './purchase-cinema-schedule-movie.component.html',
    styleUrls: ['./purchase-cinema-schedule-movie.component.scss']
})
export class PurchaseCinemaScheduleMovieComponent implements OnInit {

    public moment = moment;
    public environment = getEnvironment();
    public creativeWorks: factory.chevre.creativeWork.movie.ICreativeWork[];
    public screeningEvents: factory.chevre.event.screeningEvent.IEvent[];

    constructor(
        private router: Router,
        private masterService: MasterService,
        private actionService: ActionService
    ) { }

    /**
     * 初期化
     */
    public async ngOnInit() {
        this.creativeWorks = [];
        this.screeningEvents = [];
        try {
            const { theater } = await this.actionService.user.getData();
            const { scheduleDate } = await this.actionService.purchase.getData();
            if (scheduleDate === undefined
                || theater === undefined) {
                throw new Error('scheduleDate or theater undefined');
            }
            this.screeningEvents = await this.masterService.getSchedule({
                superEvent: {
                    locationBranchCodes: [theater.branchCode],
                },
                startFrom: moment(scheduleDate).toDate(),
                startThrough: moment(scheduleDate).add(1, 'day').toDate()
            });
            const creativeWorks = await this.masterService.searchMovies({
                offers: {
                    availableFrom: moment(scheduleDate).toDate(),
                    // availableThrough: moment(scheduleDate).add(1, 'day').toDate()
                },
                // datePublishedFrom: moment(scheduleDate).toDate(),
                datePublishedThrough: moment(scheduleDate).add(1, 'day').toDate()
            });
            this.creativeWorks = creativeWorks.filter(c =>
                this.screeningEvents.find(s =>
                    s.workPerformed?.identifier === c.identifier) !== undefined);
        } catch (error) {
            this.router.navigate(['/error']);
        }

    }

}
