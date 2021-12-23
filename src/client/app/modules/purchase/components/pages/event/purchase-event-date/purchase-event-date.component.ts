import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { getEnvironment } from '../../../../../../../environments/environment';
import { ActionService, UtilService } from '../../../../../../services';
import * as reducers from '../../../../../../store/reducers';

@Component({
    selector: 'app-purchase-event-date',
    templateUrl: './purchase-event-date.component.html',
    styleUrls: ['./purchase-event-date.component.scss'],
})
export class PurchaseEventDateComponent implements OnInit {
    public purchase: Observable<reducers.IPurchaseState>;
    public moment = moment;
    public environment = getEnvironment();
    public scheduleDates: string[];

    constructor(
        private store: Store<reducers.IState>,
        private router: Router,
        private actionService: ActionService,
        private utilService: UtilService
    ) {}

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
            this.scheduleDates = await this.cteateScheduleDate({ theater });
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
        }
    }

    public async cteateScheduleDate(params: {
        theater: factory.chevre.place.movieTheater.IPlaceWithoutScreeningRoom;
    }) {
        const { theater } = params;
        const now = moment(
            (await this.utilService.getServerTime()).date
        ).toDate();
        const today = moment(moment(now).format('YYYYMMDD')).toDate();
        const startFrom = moment(today, 'YYYYMMDD').add(1, 'days').toDate();
        const searchResult =
            await this.actionService.event.searchScreeningEvent({
                superEvent: {
                    locationBranchCodes: [theater.branchCode],
                },
                startFrom,
            });
        const mapResult = searchResult.map((s) =>
            moment(s.startDate).format('YYYY-MM-DD')
        );
        const setResult = Array.from(new Set(mapResult));
        return setResult;
    }

    /**
     * 購入する
     */
    public async toPurchase(scheduleDate: string) {
        this.actionService.purchase.selectScheduleDate(scheduleDate);
        this.router.navigate(['/purchase/event/schedule']);
    }
}
