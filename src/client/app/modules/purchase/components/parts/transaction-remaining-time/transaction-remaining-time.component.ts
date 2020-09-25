import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import * as moment from 'moment';
import { getEnvironment } from '../../../../../../environments/environment';
import { ActionService } from '../../../../../services';

@Component({
    selector: 'app-transaction-remaining-time',
    templateUrl: './transaction-remaining-time.component.html',
    styleUrls: ['./transaction-remaining-time.component.scss']
})
export class TransactionRemainingTimeComponent implements OnInit, OnDestroy {
    public transaction?: factory.transaction.placeOrder.ITransaction;
    public isExpired: boolean;
    public diff: { hours: string; minutes: string; seconds: string; };
    public timer: any;
    public width: number;
    public environment = getEnvironment();

    constructor(
        private router: Router,
        private actionService: ActionService
    ) { }

    public ngOnInit() {
        this.update();
    }

    public ngOnDestroy() {
        clearTimeout(this.timer);
    }

    private async update() {
        const { transaction } = await this.actionService.purchase.getData();
        if (transaction === undefined) {
            return;
        }
        this.transaction = transaction;
        const now = moment();
        const expires = moment(transaction.expires);
        this.isExpired = expires.diff(now) < 0;
        this.diff = {
            hours: `00${expires.diff(now, 'hours')}`.slice(-2),
            minutes: `00${expires.diff(now, 'minutes') % 60}`.slice(-2),
            seconds: `00${expires.diff(now, 'seconds') % 60 % 60}`.slice(-2)
        };
        this.width = Math.floor(expires.diff(now, 'seconds') / (Number(this.environment.PURCHASE_TRANSACTION_TIME) * 60) * 100);
        if (this.isExpired) {
            this.router.navigate(['/expired']);
        }
        const time = 1000;
        this.timer = setTimeout(() => { this.update(); }, time);
    }

}
