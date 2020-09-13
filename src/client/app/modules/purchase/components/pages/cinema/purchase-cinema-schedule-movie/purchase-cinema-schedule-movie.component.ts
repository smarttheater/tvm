import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import * as moment from 'moment';
import { Functions, Models } from '../../../../../..';
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
    public animations: boolean[];
    public getAdditionalProperty = Functions.Purchase.getAdditionalProperty;

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
        this.animations = [];
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
                startThrough: moment(scheduleDate).add(1, 'day').toDate(),
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
            await this.addAnimationClass();
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
        }

    }

    /**
     * アニメーションクラス追加
     */
    public async addAnimationClass() {
        this.creativeWorks.forEach(() => this.animations.push(false));
        const row = 6;
        const startTime = 2000;
        await Functions.Util.sleep(startTime);
        for (let i = 0; i < this.animations.length; i++) {
            const time = 1000;
            const target = this.animations.length - i - 1;
            this.animations[target] = true;
            if (target % row === 0) {
                await Functions.Util.sleep(time);
            }
        }
    }

    /**
     * 販売判定
     */
    public isSales(identifier: string) {
        const findResult = this.screeningEvents.find(s => {
            return (s.workPerformed?.identifier === identifier
                && new Models.Purchase.Performance(s).isSales());
        });
        return (findResult !== undefined);
    }

}
