import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { BAD_REQUEST, TOO_MANY_REQUESTS } from 'http-status';
import * as moment from 'moment';
import { ActionService, MasterService } from '../../../../../../services';

@Component({
    selector: 'app-purchase-cinema-top',
    templateUrl: './purchase-cinema-top.component.html',
    styleUrls: ['./purchase-cinema-top.component.scss']
})
export class PurchaseCinemaTopComponent implements OnInit {

    constructor(
        private masterService: MasterService,
        private actionService: ActionService,
        private router: Router,
    ) { }

    /**
     * 初期化
     */
    public async ngOnInit() {
        try {
            const { cashchanger } = await this.actionService.user.getData();
            if (cashchanger !== undefined) {
                await this.actionService.purchase.depositRepay({ ipAddress: cashchanger });
            }
            await this.actionService.purchase.cancelTransaction();
            await this.actionService.user.checkVersion();
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * 作品からさがす
     */
    public async searchMovie() {
        const scheduleDate = moment().format('YYYY-MM-DD');
        this.actionService.purchase.selectScheduleDate(scheduleDate);
        this.actionService.purchase.selectSearchType({ searchType: 'movie' });
        try {
            await this.setSeller();
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
        }
        try {
            await this.startTransaction();
            this.router.navigate(['/purchase/cinema/schedule/movie']);
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
     * 時間からさがす
     */
    public async searchEvent() {
        const scheduleDate = moment().format('YYYY-MM-DD');
        this.actionService.purchase.selectScheduleDate(scheduleDate);
        this.actionService.purchase.selectSearchType({ searchType: 'event' });
        try {
            await this.setSeller();
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
        }
        try {
            await this.startTransaction();
            this.router.navigate(['/purchase/cinema/schedule']);
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
     * 販売者を設定
     */
    public async setSeller() {
        const { theater } = await this.actionService.user.getData();
        const { scheduleDate } = await this.actionService.purchase.getData();
        if (theater === undefined
            || scheduleDate === undefined) {
            throw new Error('theater or scheduleDate undefined');
        }
        const screeningEvents = await this.masterService.getSchedule({
            superEvent: {
                locationBranchCodes: [theater.branchCode],
            },
            startFrom: moment(scheduleDate).toDate(),
            startThrough: moment(scheduleDate).add(1, 'day').toDate(),
        });
        const screeningEvent = screeningEvents
            .find(s => s.offers !== undefined && s.offers.seller !== undefined && s.offers.seller.id !== undefined);
        if (screeningEvent === undefined
            || screeningEvent.offers === undefined
            || screeningEvent.offers.seller === undefined
            || screeningEvent.offers.seller.id === undefined) {
            throw new Error('screeningEvent.offers.seller === undefined');
        }
        await this.actionService.purchase.getSeller(screeningEvent.offers.seller.id);
    }

    /**
     * 取引開始
     */
    public async startTransaction() {
        const purchase = await this.actionService.purchase.getData();
        const user = await this.actionService.user.getData();
        await this.actionService.purchase.startTransaction({
            seller: <factory.chevre.seller.ISeller>purchase.seller,
            pos: user.pos
        });
    }

}
