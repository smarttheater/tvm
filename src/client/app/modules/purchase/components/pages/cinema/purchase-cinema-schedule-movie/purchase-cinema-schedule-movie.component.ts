import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import * as moment from 'moment';
import { Functions, Models } from '../../../../../..';
import { getEnvironment } from '../../../../../../../environments/environment';
import { ActionService, UtilService } from '../../../../../../services';

@Component({
    selector: 'app-purchase-cinema-schedule-movie',
    templateUrl: './purchase-cinema-schedule-movie.component.html',
    styleUrls: ['./purchase-cinema-schedule-movie.component.scss'],
})
export class PurchaseCinemaScheduleMovieComponent implements OnInit {
    public moment = moment;
    public environment = getEnvironment();
    public creativeWorks: factory.chevre.creativeWork.movie.ICreativeWork[];
    public screeningEvents: factory.chevre.event.screeningEvent.IEvent[];
    public animations: boolean[];
    public getAdditionalProperty = Functions.Purchase.getAdditionalProperty;
    public contentRatingTypes: factory.chevre.categoryCode.ICategoryCode[];
    public now: Date;

    constructor(
        private router: Router,
        private actionService: ActionService,
        private utilService: UtilService
    ) {}

    /**
     * 初期化
     */
    public async ngOnInit() {
        this.creativeWorks = [];
        this.screeningEvents = [];
        this.animations = [];
        try {
            const { application } = await this.actionService.user.getData();
            const { scheduleDate } =
                await this.actionService.purchase.getData();
            if (
                scheduleDate === undefined ||
                application?.theater === undefined
            ) {
                throw new Error('scheduleDate or theater undefined');
            }
            this.now = moment(
                (await this.utilService.getServerTime(true)).date
            ).toDate();
            this.contentRatingTypes =
                await this.actionService.categoryCode.search({
                    categorySetIdentifier:
                        factory.chevre.categoryCode.CategorySetIdentifier
                            .ContentRatingType,
                });
            this.screeningEvents =
                await this.actionService.event.searchScreeningEvent({
                    superEvent: {
                        locationBranchCodes: [application.theater.branchCode],
                    },
                    startFrom: moment(scheduleDate).toDate(),
                    startThrough: moment(scheduleDate)
                        .add(1, 'day')
                        .add(-1, 'millisecond')
                        .toDate(),
                });
            const creativeWorks =
                await this.actionService.creativeWork.searchMovies({
                    offers: {
                        availableFrom: moment(scheduleDate).toDate(),
                    },
                });
            this.creativeWorks = creativeWorks.filter(
                (c) =>
                    this.screeningEvents.find(
                        (s) => s.workPerformed?.identifier === c.identifier
                    ) !== undefined
            );
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
        const startTime = 300;
        await Functions.Util.sleep(startTime);
        for (let i = 0; i < this.animations.length; i++) {
            const time = 300;
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
        const findResult = this.screeningEvents.find((s) => {
            return (
                s.workPerformed?.identifier === identifier &&
                new Models.Purchase.Performance({
                    screeningEvent: s,
                    now: this.now,
                }).isSales()
            );
        });
        return findResult !== undefined;
    }

    /**
     * レイティング区分取得
     */
    public getContentRatingType(code?: string) {
        return this.contentRatingTypes.find((c) => c.codeValue === code);
    }

    public selectCreativeWork(
        creativeWork: factory.chevre.creativeWork.movie.ICreativeWork
    ) {
        this.actionService.purchase.selectCreativeWork(creativeWork);
        this.router.navigate(['/purchase/cinema/schedule/event']);
    }
}
