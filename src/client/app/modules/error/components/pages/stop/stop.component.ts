import { Component, OnDestroy, OnInit } from '@angular/core';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Functions, Models } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';
import { ActionService, PaymentService } from '../../../../../services';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-stop',
    templateUrl: './stop.component.html',
    styleUrls: ['./stop.component.scss']
})
export class StopComponent implements OnInit, OnDestroy {
    public purchase: Observable<reducers.IPurchaseState>;
    public error: Observable<string | null>;
    public environment = getEnvironment();

    constructor(
        private store: Store<reducers.IState>,
        private actionService: ActionService,
        private paymentService: PaymentService,
    ) { }

    public async ngOnInit() {
        this.purchase = this.store.pipe(select(reducers.getPurchase));
        const { paymentMethod } = await this.actionService.purchase.getData();
        if (paymentMethod?.typeOf === factory.chevre.paymentMethodType.Cash) {
            await this.voidCash();
        }
        if (paymentMethod?.typeOf === factory.chevre.paymentMethodType.CreditCard) {
            await this.voidCreditCard();
        }
        this.error = this.store.pipe(select(reducers.getError));
        try {
            await this.actionService.purchase.cancelTransaction();
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

    /**
     * 現金返金
     */
    public async voidCash() {
        try {
            const { cashchanger } = await this.actionService.user.getData();
            if (cashchanger === undefined) {
                return;
            }
            await this.actionService.purchase.depositRepay({ ipAddress: cashchanger });
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * クレジットカード取消
     */
    public async voidCreditCard() {
        try {
            const { payment } = await this.actionService.user.getData();
            const { authorizeSeatReservations, orderId } = await this.actionService.purchase.getData();
            if (payment === undefined
                || orderId === undefined) {
                return;
            }
            const amount = Functions.Purchase.getAmount(authorizeSeatReservations);
            await this.paymentService.init({ ipAddress: payment });
            const execResult = await this.paymentService.exec({
                func: Models.Purchase.Payment.FUNC_CODE.CREDITCARD.SETTLEMENT,
                options: {
                    JOB: Models.Purchase.Payment.JOB.VOID,
                    ORDERID: orderId,
                    AMOUNT: String(amount),
                },
            });
            if (execResult.FUNC_STATUS !== Models.Purchase.Payment.FUNC_STATUS.SUCCESS) {
                await this.paymentService.exec({
                    func: Models.Purchase.Payment.FUNC_CODE.CREDITCARD.INTERRUPTION,
                });
                throw new Error(JSON.stringify(execResult));
            }
        } catch (error) {
            console.error(error);
        }
    }

}
