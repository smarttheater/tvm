import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Functions, Models } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';
import { ActionService } from '../../../../../services';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-purchase-complete',
    templateUrl: './purchase-complete.component.html',
    styleUrls: ['./purchase-complete.component.scss']
})
export class PurchaseCompleteComponent implements OnInit, OnDestroy {
    public purchase: Observable<reducers.IPurchaseState>;
    public user: Observable<reducers.IUserState>;
    public isLoading: Observable<boolean>;
    public error: Observable<string | null>;
    public moment = moment;
    public viewType = Models.Util.ViewType;
    public environment = getEnvironment();
    public qrcode?: string;
    public paymentMethodType = factory.chevre.paymentMethodType;
    public connectionType = Models.Util.Printer.ConnectionType;
    public createOrderLink = Functions.Order.createOrderLink;
    private timer: any;

    constructor(
        private store: Store<reducers.IState>,
        private router: Router,
        private actionService: ActionService,
    ) { }

    public async ngOnInit() {
        this.purchase = this.store.pipe(select(reducers.getPurchase));
        this.user = this.store.pipe(select(reducers.getUser));
        this.isLoading = this.store.pipe(select(reducers.getLoading));
        this.error = this.store.pipe(select(reducers.getError));
        try {
            const { order } = await this.actionService.purchase.getData();
            if (order === undefined) {
                throw new Error('order not found');
            }
        } catch (error) {
            this.router.navigate(['/error']);
            return;
        }
        if (this.environment.PRINT_SUCCESS_WAIT_TIME === '') {
            return;
        }
        const time = Number(this.environment.PRINT_SUCCESS_WAIT_TIME);
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
