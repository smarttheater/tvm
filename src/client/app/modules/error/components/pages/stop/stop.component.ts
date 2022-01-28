import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getEnvironment } from '../../../../../../environments/environment';
import { ActionService } from '../../../../../services';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-stop',
    templateUrl: './stop.component.html',
    styleUrls: ['./stop.component.scss'],
})
export class StopComponent implements OnInit, OnDestroy {
    public purchase: Observable<reducers.IPurchaseState>;
    public error: Observable<string | null>;
    public environment = getEnvironment();

    constructor(
        private store: Store<reducers.IState>,
        private actionService: ActionService
    ) {}

    public async ngOnInit() {
        this.purchase = this.store.pipe(select(reducers.getPurchase));
        this.error = this.store.pipe(select(reducers.getError));
        try {
            const { device } = await this.actionService.user.getData();
            await this.actionService.payment.voidDevicePayment({
                payment: device?.payment?.ipAddress,
            });
        } catch (error) {
            console.error(error);
        }
        try {
            const { transaction } = await this.actionService.purchase.getData();
            if (transaction !== undefined) {
                await this.actionService.transaction.cancel();
            }
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * 破棄
     */
    public ngOnDestroy() {
        this.actionService.purchase.delete();
    }
}
