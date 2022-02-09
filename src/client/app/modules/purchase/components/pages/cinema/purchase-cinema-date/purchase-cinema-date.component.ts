import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { getEnvironment } from '../../../../../../../environments/environment';
import {
    ActionService,
    StoreService,
    UtilService,
} from '../../../../../../services';
import * as reducers from '../../../../../../store/reducers';

@Component({
    selector: 'app-purchase-cinema-date',
    templateUrl: './purchase-cinema-date.component.html',
    styleUrls: ['./purchase-cinema-date.component.scss'],
})
export class PurchaseCinemaDateComponent implements OnInit {
    public purchase: Observable<reducers.IPurchaseState>;
    public moment = moment;
    public environment = getEnvironment();
    public scheduleDates: string[];
    public preScheduleDates: string[];

    constructor(
        private store: Store<reducers.IState>,
        private router: Router,
        private actionService: ActionService,
        private storeService: StoreService,
        private utilService: UtilService
    ) {}

    /**
     * 初期化
     */
    public async ngOnInit() {
        this.purchase = this.store.pipe(select(reducers.getPurchase));
        try {
            this.scheduleDates = [];
            this.preScheduleDates = [];
            const { application } = await this.storeService.user.getData();
            if (application?.theater === undefined) {
                throw new Error('theater undefined');
            }
            this.scheduleDates = await this.cteateScheduleDate({
                theater: application.theater,
                pre: false,
            });
            this.preScheduleDates = await this.cteateScheduleDate({
                theater: application.theater,
                pre: true,
            });
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
        }
    }

    public async cteateScheduleDate(params: {
        theater: factory.chevre.place.movieTheater.IPlaceWithoutScreeningRoom;
        pre: boolean;
    }) {
        const { theater, pre } = params;
        if (
            theater.offers === undefined ||
            theater.offers.availabilityStartsGraceTime === undefined ||
            theater.offers.availabilityStartsGraceTime.value === undefined ||
            theater.offers.availabilityStartsGraceTime.unitCode !==
                factory.chevre.unitCode.Day
        ) {
            return [];
        }
        const { value, unitCode } = theater.offers.availabilityStartsGraceTime;
        const availabilityStartsGraceTime: {
            value: number;
            unit: 'day' | 'year' | 'second';
        } = {
            value: typeof value === 'number' ? value * -1 + 1 : 9999,
            unit:
                unitCode === factory.chevre.unitCode.Day
                    ? 'day'
                    : unitCode === factory.chevre.unitCode.Ann
                    ? 'year'
                    : unitCode === factory.chevre.unitCode.Sec
                    ? 'second'
                    : 'second',
        };
        const now = moment(
            (await this.utilService.getServerTime()).date
        ).toDate();
        const today = moment(moment(now).format('YYYYMMDD')).toDate();
        const startFrom = pre
            ? moment(today, 'YYYYMMDD')
                  .add(
                      availabilityStartsGraceTime.value,
                      availabilityStartsGraceTime.unit
                  )
                  .toDate()
            : moment(today, 'YYYYMMDD').add(1, 'days').toDate();
        const startThrough = pre
            ? undefined
            : moment(today, 'YYYYMMDD')
                  .add(
                      availabilityStartsGraceTime.value,
                      availabilityStartsGraceTime.unit
                  )
                  .add(-1, 'milliseconds')
                  .toDate();
        const searchResult =
            await this.actionService.event.searchScreeningEvent({
                superEvent: {
                    locationBranchCodes: [theater.branchCode],
                },
                startFrom,
                startThrough,
            });
        const mapResult = searchResult.map((s) =>
            moment(s.startDate).format('YYYY-MM-DD')
        );
        const setResult = Array.from(new Set(mapResult));
        return setResult;
    }

    /**
     * 作品からさがす
     */
    public async searchMovie(scheduleDate: string) {
        this.storeService.purchase.setScheduleDate({ scheduleDate });
        this.storeService.purchase.setSearchType({ searchType: 'movie' });
        this.router.navigate(['/purchase/cinema/schedule/movie']);
    }
}
