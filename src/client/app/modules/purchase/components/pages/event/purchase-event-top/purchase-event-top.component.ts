import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { TranslateService } from '@ngx-translate/core';
import { BAD_REQUEST, TOO_MANY_REQUESTS } from 'http-status';
import * as moment from 'moment';
import { Functions } from '../../../../../..';
import { getEnvironment } from '../../../../../../../environments/environment';
import { ActionService, EpsonEPOSService, MasterService, UtilService } from '../../../../../../services';

@Component({
    selector: 'app-purchase-event-top',
    templateUrl: './purchase-event-top.component.html',
    styleUrls: ['./purchase-event-top.component.scss']
})
export class PurchaseEventTopComponent implements OnInit {
    public environment = getEnvironment();

    constructor(
        private masterService: MasterService,
        private actionService: ActionService,
        private router: Router,
        private utilService: UtilService,
        private translate: TranslateService,
        private epsonEPOSService: EpsonEPOSService,
    ) { }

    /**
     * 初期化
     */
    public async ngOnInit() {
        try {
            this.actionService.user.updateLanguage('ja');
            await this.actionService.purchase.cancelTransaction();
            this.actionService.purchase.delete();
            if (!this.epsonEPOSService.cashchanger.isConnected()) {
                await this.actionService.user.checkVersion();
            }
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * 購入する
     */
    public async toPurchase() {
        await this.startTransaction({ routerLink: '/purchase/event/schedule' });
    }

    /**
     * 日付変更
     */
    public async changeDate() {
        await this.startTransaction({ routerLink: '/purchase/event/date' });
    }

    /**
     * 取引開始
     */
    public async startTransaction(params: { routerLink: string; }) {
        const now = moment().toDate();
        const today = moment(now).format('YYYY-MM-DD');
        this.actionService.purchase.selectScheduleDate(today);
        try {
            const { theater } = await this.actionService.user.getData();
            if (theater === undefined) {
                throw new Error('theater undefined');
            }
            const screeningEvents = await this.masterService.searchScreeningEvent({
                superEvent: {
                    locationBranchCodes: [theater.branchCode],
                },
                startFrom: moment(today, 'YYYY-MM-DD').toDate(),
                offers: {
                    availableFrom: now,
                    availableThrough: now
                }
            });
            const screeningEvent = screeningEvents
                .find(s => s.offers !== undefined && s.offers.seller !== undefined && s.offers.seller.id !== undefined);
            if (screeningEvent === undefined
                || screeningEvent.offers === undefined
                || screeningEvent.offers.seller === undefined
                || screeningEvent.offers.seller.id === undefined) {
                    this.utilService.openAlert({
                        title: this.translate.instant('common.error'),
                        body: this.translate.instant('purchase.event.schedule.notfound')
                    });
                    return;
            }
            await this.actionService.purchase.getSeller(screeningEvent.offers.seller.id);
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
            return;
        }
        try {
            const purchase = await this.actionService.purchase.getData();
            const user = await this.actionService.user.getData();
            await this.actionService.purchase.startTransaction({
                seller: <factory.chevre.seller.ISeller>purchase.seller,
                pos: user.pos
            });
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
     * 表示判定
     */
    public isDisplay(value: string) {
        const findResult = this.environment.TOP_MENU.find(t => t === value);
        return findResult !== undefined;
    }

    /**
     * 画像取得
     */
    public getImageUrl() {
        const { storageUrl } = Functions.Util.getProject();
        return `${storageUrl}${this.environment.TOP_IMAGE}`;
    }

}
