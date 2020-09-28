import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Functions, Models } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';
import { ActionService, EpsonEPOSService, PaymentService, UtilService, } from '../../../../../services';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-purchase-payment-reception',
    templateUrl: './purchase-payment-reception.component.html',
    styleUrls: ['./purchase-payment-reception.component.scss']
})
export class PurchasePaymentReceptionComponent implements OnInit {
    public purchase: Observable<reducers.IPurchaseState>;
    public user: Observable<reducers.IUserState>;
    public isLoading: Observable<boolean>;
    public paymentMethodType = factory.chevre.paymentMethodType;
    public viewType = Models.Util.ViewType;
    public amount: number;
    public deposit: number;
    public environment = getEnvironment();

    constructor(
        private store: Store<reducers.IState>,
        private router: Router,
        private actionService: ActionService,
        private utilService: UtilService,
        private epsonEPOSService: EpsonEPOSService,
        private paymentService: PaymentService,
    ) { }

    public async ngOnInit() {
        this.isLoading = this.store.pipe(select(reducers.getLoading));
        this.purchase = this.store.pipe(select(reducers.getPurchase));
        this.user = this.store.pipe(select(reducers.getUser));
        this.amount = 0;
        try {
            const purchase = await this.actionService.purchase.getData();
            this.amount = Functions.Purchase.getAmount(purchase.authorizeSeatReservations);
            if (this.amount === 0) {
                await this.onSubmit();
                return;
            }
            if (purchase.paymentMethod?.typeOf === this.paymentMethodType.Cash) {
                // 現金
                await this.cash();
            }
            if (purchase.paymentMethod?.typeOf === this.paymentMethodType.CreditCard) {
                // クレジットカード
                await this.creditcard();
            }
            if (purchase.paymentMethod?.typeOf === this.paymentMethodType.EMoney) {
                // 電子マネー
                await this.eMoney();
            }
            if (purchase.paymentMethod?.typeOf === this.paymentMethodType.Others
                && purchase.paymentMethod.category === 'code') {
                // コード
                await this.code();
            }
        } catch (error) {
            console.error(error);
            // this.router.navigate(['/error']);
        }
    }

    /**
     * 現金
     */
    private async cash() {
        this.deposit = 0;
        const { payment } = await this.actionService.user.getData();
        if (payment === undefined
            || payment.cash === undefined) {
            throw new Error('payment undefined');
        }
        await this.epsonEPOSService.cashchanger.init({
            ipAddress: payment.cash.ipAddress
        });
        await this.epsonEPOSService.cashchanger.endDeposit();
        await this.epsonEPOSService.cashchanger.beginDeposit({
            cb: (amount: number) => {
                this.deposit = amount;
            }
        });
    }

    /**
     * クレジットカード
     */
    private async creditcard() {
        const user = await this.actionService.user.getData();
        if (user.payment === undefined
            || user.payment.creditcard === undefined) {
            throw new Error('payment undefined');
        }
        await this.paymentService.init({
            ipAddress: user.payment.creditcard.ipAddress
        });
        const execResult = await this.paymentService.exec({
            func: Models.Purchase.Payment.FUNC_CODE.CREDITCARD.SETTLEMENT,
            options: {
                JOB: Models.Purchase.Payment.JOB.CAPTURE,
                ORDERID: moment().format('YYYYMMDDHHmmsss'),
                AMOUNT: String(this.amount),
                // MACHINE_CODE: '',
                // TRANID: '',
                // CANTRANID: ''
            }
        });
        if (execResult.FUNC_STATUS === Models.Purchase.Payment.FUNC_STATUS.APP_CANCEL
            || execResult.FUNC_STATUS === Models.Purchase.Payment.FUNC_STATUS.MACHINE_CANCEL) {
            this.router.navigate(['/purchase/payment']);
            return;
        }
        if (execResult.FUNC_STATUS !== Models.Purchase.Payment.FUNC_STATUS.SUCCESS) {
            await this.paymentService.exec({
                func: Models.Purchase.Payment.FUNC_CODE.CREDITCARD.INTERRUPTION,
            });
            throw new Error(JSON.stringify(execResult));
        }
        this.onSubmit();
    }

    /**
     * 電子マネー
     */
    private async eMoney() {
        const user = await this.actionService.user.getData();
        if (user.payment === undefined
            || user.payment.emoney === undefined) {
            throw new Error('payment undefined');
        }
        await this.paymentService.init({
            ipAddress: user.payment.emoney.ipAddress
        });
        const execResult = await this.paymentService.exec({
            func: Models.Purchase.Payment.FUNC_CODE.EMONEY.SETTLEMENT,
            options: {
                JOB: Models.Purchase.Payment.JOB.CAPTURE,
                ORDERID: moment().format('YYYYMMDDHHmmsss'),
                AMOUNT: String(this.amount),
                // MACHINE_CODE: '',
                // TRANID: '',
                // CANTRANID: ''
            }
        });
        if (execResult.FUNC_STATUS === Models.Purchase.Payment.FUNC_STATUS.APP_CANCEL
            || execResult.FUNC_STATUS === Models.Purchase.Payment.FUNC_STATUS.MACHINE_CANCEL) {
            this.router.navigate(['/purchase/payment']);
            return;
        }
        if (execResult.FUNC_STATUS !== Models.Purchase.Payment.FUNC_STATUS.SUCCESS) {
            await this.paymentService.exec({
                func: Models.Purchase.Payment.FUNC_CODE.EMONEY.INTERRUPTION,
            });
            throw new Error(JSON.stringify(execResult));
        }
        this.onSubmit();
    }

    /**
     * コード
     */
    private async code() {
        const user = await this.actionService.user.getData();
        if (user.payment === undefined
            || user.payment.code === undefined) {
            throw new Error('payment undefined');
        }
        await this.paymentService.init({
            ipAddress: user.payment.code.ipAddress
        });
        const execResult = await this.paymentService.exec({
            func: Models.Purchase.Payment.FUNC_CODE.CODE.SETTLEMENT,
            options: {
                JOB: Models.Purchase.Payment.JOB.CAPTURE,
                ORDERID: moment().format('YYYYMMDDHHmmsss'),
                AMOUNT: String(this.amount),
                MACHINE_CODE: '',
                // TRANID: '',
                // CANTRANID: ''
            }
        });
        if (execResult.FUNC_STATUS === Models.Purchase.Payment.FUNC_STATUS.APP_CANCEL
            || execResult.FUNC_STATUS === Models.Purchase.Payment.FUNC_STATUS.MACHINE_CANCEL) {
            this.router.navigate(['/purchase/payment']);
            return;
        }
        if (execResult.FUNC_STATUS !== Models.Purchase.Payment.FUNC_STATUS.SUCCESS) {
            await this.paymentService.exec({
                func: Models.Purchase.Payment.FUNC_CODE.CODE.INTERRUPTION,
            });
            throw new Error(JSON.stringify(execResult));
        }
        this.onSubmit();
    }

    /**
     * 確定
     */
    public async onSubmit() {
        try {
            const purchase = await this.actionService.purchase.getData();
            const user = await this.actionService.user.getData();
            const profile = user.customerContact;
            const seller = purchase.seller;
            if (profile === undefined
                || seller === undefined) {
                throw new Error('profile or seller undefined');
            }
            if (purchase.pendingMovieTickets.length > 0) {
                await this.actionService.purchase.authorizeMovieTicket({ seller });
            }
            if (purchase.paymentMethod !== undefined) {
                await this.actionService.purchase.authorizeAnyPayment({ amount: this.amount });
            }
            await this.actionService.purchase.registerContact(profile);
            await this.actionService.purchase.endTransaction({ seller, language: user.language });
            this.utilService.loadStart({ process: 'load' });
            if (purchase.paymentMethod?.typeOf === this.paymentMethodType.Cash) {
                // 現金
                await this.epsonEPOSService.cashchanger.endDeposit();
                if ((this.deposit - this.amount) > 0) {
                    await this.epsonEPOSService.cashchanger.dispenseChange({ amount: (this.deposit - this.amount) });
                }
                await this.epsonEPOSService.cashchanger.disconnect();
            }
            this.router.navigate(['/purchase/complete']);
            this.utilService.loadEnd();
        } catch (error) {
            this.utilService.loadStart({ process: 'load' });
            await this.epsonEPOSService.cashchanger.endDepositRepay();
            await this.epsonEPOSService.cashchanger.disconnect();
            this.utilService.loadEnd();
            console.error(error);
            this.router.navigate(['/error']);
        }
    }

    /**
     * 決済選択へ戻る
     */
    public async prev() {
        try {
            const { payment } = await this.actionService.user.getData();
            if (payment !== undefined
                && payment.cash !== undefined) {
                await this.actionService.purchase.depositRepay({ ipAddress: payment.cash.ipAddress });
            }
            this.router.navigate(['/purchase/payment']);
        } catch (error) {
            console.error(error);
        }
    }
}
