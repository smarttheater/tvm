import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';
import { ActionService, StoreService } from '../../../../../services';

@Component({
    selector: 'app-expired',
    templateUrl: './expired.component.html',
    styleUrls: ['./expired.component.scss'],
})
export class ExpiredComponent implements OnInit, OnDestroy {
    public environment = getEnvironment();
    private timer: any;

    constructor(
        private actionService: ActionService,
        private storeService: StoreService,
        private router: Router
    ) {}

    public async ngOnInit() {
        try {
            const { device } = await this.storeService.user.getData();
            await this.actionService.payment.voidDevicePayment({
                payment: device?.payment?.ipAddress,
            });
        } catch (error) {
            console.error(error);
            this.router.navigate(['/stop']);
            return;
        }
        try {
            const { transaction } = await this.storeService.purchase.getData();
            if (transaction !== undefined) {
                await this.actionService.transaction.cancel();
                this.storeService.purchase.cancelTransaction();
            }
        } catch (error) {
            console.error(error);
        }
        this.storeService.purchase.remove();
        if (this.environment.ERROR_WAIT_TIME === '') {
            return;
        }
        const time = Number(this.environment.ERROR_WAIT_TIME);
        this.timer = setTimeout(() => {
            this.router.navigate(['/']);
        }, time);
    }

    /**
     * 破棄
     */
    public ngOnDestroy() {
        if (this.timer !== undefined) {
            clearTimeout(this.timer);
        }
    }
}
