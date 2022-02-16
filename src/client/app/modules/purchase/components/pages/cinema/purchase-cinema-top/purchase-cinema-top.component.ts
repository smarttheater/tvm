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
    StoreService,
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
        private actionService: ActionService,
        private router: Router,
        private utilService: UtilService,
        private translate: TranslateService,
        private epsonEPOSService: EpsonEPOSService,
        private storeService: StoreService
    ) {}

    /**
     * 初期化
     */
    public async ngOnInit() {
        try {
            this.user = this.store.pipe(select(reducers.getUser));
            this.actionService.user.updateLanguage('ja');
            await this.actionService.transaction.cancel();
            this.storeService.purchase.cancelTransaction();
            this.storeService.purchase.remove();
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
        this.storeService.purchase.setSearchType({ searchType: 'movie' });
        await this.startTransaction({
            routerLink: '/purchase/cinema/schedule/movie',
        });
    }

    /**
     * 時間からさがす
     */
    public async searchEvent() {
        this.storeService.purchase.setSearchType({ searchType: 'event' });
        await this.startTransaction({
            routerLink: '/purchase/cinema/schedule',
        });
    }

    /**
     * 日付変更
     */
    public async changeDate() {
        this.storeService.purchase.setSearchType({ searchType: 'movie' });
        await this.startTransaction({ routerLink: '/purchase/cinema/date' });
    }

    /**
     * 取引開始
     */
    public async startTransaction(params: { routerLink: string }) {
        const now = moment().toDate();
        const today = moment(now).format('YYYY-MM-DD');
        this.storeService.purchase.setScheduleDate({ scheduleDate: today });
        try {
            const { application } = await this.storeService.user.getData();
            if (application?.theater === undefined) {
                throw new Error('theater undefined');
            }
            const screeningEvents =
                await this.actionService.event.searchScreeningEvent({
                    superEvent: {
                        locationBranchCodes: [application.theater.branchCode],
                    },
                    startFrom: moment(today, 'YYYY-MM-DD').toDate(),
                    roop: false,
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
            const seller = await this.actionService.seller.findById({
                id: screeningEvent.offers.seller.id,
            });
            this.storeService.purchase.setSeller({ seller });
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
            return;
        }
        try {
            const { application } = await this.storeService.user.getData();
            const transaction = await this.actionService.transaction.start({
                pos: application?.pos,
            });
            this.storeService.purchase.setTransaction({ transaction });
            const { routerLink } = params;
            this.router.navigate([routerLink]);
        } catch (error) {
            console.error(error);
            try {
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
            } catch (error2) {
                console.error(error2);
                this.router.navigate(['/error']);
            }
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
