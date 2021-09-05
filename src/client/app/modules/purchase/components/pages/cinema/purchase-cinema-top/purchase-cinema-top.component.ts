import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BAD_REQUEST, TOO_MANY_REQUESTS } from 'http-status';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Functions, Models } from '../../../../../..';
import { getEnvironment } from '../../../../../../../environments/environment';
import {
    ActionService,
    EpsonEPOSService,
    MasterService,
    UtilService,
} from '../../../../../../services';
import * as reducers from '../../../../../../store/reducers';

@Component({
    selector: 'app-purchase-cinema-top',
    templateUrl: './purchase-cinema-top.component.html',
    styleUrls: ['./purchase-cinema-top.component.scss'],
})
export class PurchaseCinemaTopComponent implements OnInit {
    public user: Observable<reducers.IUserState>;
    public applicationType = Models.Util.Application.ApplicationType;
    public environment = getEnvironment();

    constructor(
        private store: Store<reducers.IState>,
        private masterService: MasterService,
        private actionService: ActionService,
        private router: Router,
        private utilService: UtilService,
        private translate: TranslateService,
        private epsonEPOSService: EpsonEPOSService
    ) {}

    /**
     * 初期化
     */
    public async ngOnInit() {
        try {
            this.user = this.store.pipe(select(reducers.getUser));
            this.actionService.user.updateLanguage('ja');
            await this.actionService.transaction.cancel();
            this.actionService.purchase.delete();
            if (!this.epsonEPOSService.cashchanger.isConnected()) {
                await this.actionService.user.checkVersion();
            }
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * 作品からさがす
     */
    public async searchMovie() {
        this.actionService.purchase.selectSearchType({ searchType: 'movie' });
        await this.startTransaction({
            routerLink: '/purchase/cinema/schedule/movie',
        });
    }

    /**
     * 時間からさがす
     */
    public async searchEvent() {
        this.actionService.purchase.selectSearchType({ searchType: 'event' });
        await this.startTransaction({
            routerLink: '/purchase/cinema/schedule',
        });
    }

    /**
     * 日付変更
     */
    public async changeDate() {
        this.actionService.purchase.selectSearchType({ searchType: 'movie' });
        await this.startTransaction({ routerLink: '/purchase/cinema/date' });
    }

    /**
     * 取引開始
     */
    public async startTransaction(params: { routerLink: string }) {
        const now = moment().toDate();
        const today = moment(now).format('YYYY-MM-DD');
        this.actionService.purchase.selectScheduleDate(today);
        try {
            const { theater } = await this.actionService.user.getData();
            if (theater === undefined) {
                throw new Error('theater undefined');
            }
            const screeningEvents =
                await this.masterService.searchScreeningEvent({
                    superEvent: {
                        locationBranchCodes: [theater.branchCode],
                    },
                    startFrom: moment(today, 'YYYY-MM-DD').toDate(),
                    offers: {
                        availableFrom: now,
                        availableThrough: now,
                    },
                });
            const screeningEvent = screeningEvents.find(
                (s) =>
                    s.offers !== undefined &&
                    s.offers.seller !== undefined &&
                    s.offers.seller.id !== undefined
            );
            if (
                screeningEvent === undefined ||
                screeningEvent.offers === undefined ||
                screeningEvent.offers.seller === undefined ||
                screeningEvent.offers.seller.id === undefined
            ) {
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: this.translate.instant(
                        'purchase.cinema.schedule.notfound'
                    ),
                });
                return;
            }
            await this.actionService.purchase.getSeller({
                id: screeningEvent.offers.seller.id,
            });
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
            return;
        }
        try {
            const { pos } = await this.actionService.user.getData();
            await this.actionService.transaction.start({ pos });
            const { routerLink } = params;
            this.router.navigate([routerLink]);
        } catch (error) {
            const errorObject = JSON.parse(error);
            if (errorObject.status === TOO_MANY_REQUESTS) {
                this.router.navigate(['/congestion']);
                return;
            }
            if (errorObject.status === BAD_REQUEST) {
                this.router.navigate(['/maintenance']);
                return;
            }
            this.router.navigate(['/error']);
        }
    }

    /**
     * 画像取得
     */
    public getImageUrl() {
        const { storageUrl } = Functions.Util.getProject();
        return `${storageUrl}${this.environment.TOP_IMAGE}`;
    }
}
