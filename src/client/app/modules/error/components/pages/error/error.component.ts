import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getEnvironment } from '../../../../../../environments/environment';
import { ActionService, StoreService } from '../../../../../services';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit, OnDestroy {
    public error: Observable<string | null>;
    public environment = getEnvironment();
    private timer: any;

    constructor(
        private store: Store<reducers.IState>,
        private actionService: ActionService,
        private storeService: StoreService,
        private router: Router
    ) {}

    public async ngOnInit() {
        this.error = this.store.pipe(select(reducers.getError));
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
