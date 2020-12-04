import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { getEnvironment } from '../../../../../../../environments/environment';
import { ActionService } from '../../../../../../services';
import * as reducers from '../../../../../../store/reducers';

@Component({
    selector: 'app-purchase-cinema-date',
    templateUrl: './purchase-cinema-date.component.html',
    styleUrls: ['./purchase-cinema-date.component.scss']
})
export class PurchaseCinemaDateComponent implements OnInit {
    public purchase: Observable<reducers.IPurchaseState>;
    public moment = moment;
    public environment = getEnvironment();
    public scheduleDates: string[];

    constructor(
        private store: Store<reducers.IState>,
        private router: Router,
        private actionService: ActionService,
    ) { }

    /**
     * 初期化
     */
    public async ngOnInit() {
        this.purchase = this.store.pipe(select(reducers.getPurchase));
        try {
            this.scheduleDates = [];
            const { theater } = await this.actionService.user.getData();
            if (theater === undefined) {
                throw new Error('theater undefined');
            }
            this.scheduleDates = this.cteateScheduleDate({ theater });
            await this.actionService.purchase.getPreScheduleDates({ theater });
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
        }
    }

    public cteateScheduleDate(params: {
        theater: factory.chevre.place.movieTheater.IPlaceWithoutScreeningRoom;
    }) {
        const { theater } = params;
        const now = moment().toDate();
        const today = moment(moment(now).format('YYYYMMDD')).toDate();
        if (theater.offers === undefined
            || theater.offers.availabilityStartsGraceTime === undefined
            || theater.offers.availabilityStartsGraceTime.value === undefined
            || theater.offers.availabilityStartsGraceTime.unitCode !== factory.chevre.unitCode.Day) {
            return [];
        }
        const limitDate = moment(today).add(theater.offers.availabilityStartsGraceTime.value * -1, 'days');
        const limit = limitDate.diff(moment(today), 'days');
        const result = [];
        for (let i = 0; i < limit; i++) {
            const date = moment(moment(today).add(i + 1, 'day')).format('YYYY-MM-DD');
            result.push(date);
        }
        return result;
    }

    /**
     * 作品からさがす
     */
    public async searchMovie(scheduleDate: string) {
        this.actionService.purchase.selectScheduleDate(scheduleDate);
        this.actionService.purchase.selectSearchType({ searchType: 'movie' });
        this.router.navigate(['/purchase/cinema/schedule/movie']);
    }
}
