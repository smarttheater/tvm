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
            this.utilService.loadStart({ process: 'load' });
            const purchase = await this.actionService.purchase.getData();
            this.amount = Functions.Purchase.getAmount(purchase.authorizeSeatReservations);
            if (this.amount === 0) {
                await this.onSubmit();
                this.utilService.loadEnd();
                return;
            }
            if (purchase.paymentMethod?.typeOf === this.paymentMethodType.Cash) {
                // 現金
                await this.cash();
                this.utilService.loadEnd();
            }
            if (purchase.paymentMethod?.typeOf === this.paymentMethodType.CreditCard) {
                // クレジットカード
                this.utilService.loadEnd();
                await this.creditcard();
            }
            if (purchase.paymentMethod?.typeOf === this.paymentMethodType.EMoney) {
                // 電子マネー
                this.utilService.loadEnd();
                await this.eMoney();
            }
            if (purchase.paymentMethod?.typeOf === this.paymentMethodType.Others
                && purchase.paymentMethod.category === 'code') {
                // コード
                this.utilService.loadEnd();
                await this.code();
            }
        } catch (error) {
            console.error(error);
            // this.utilService.loadEnd();
            // this.router.navigate(['/error']);
        }
    }

    /**
     * 投入金額取得
     */
    public getDeposit() {
        const deposit = this.epsonEPOSService.cashchanger.getDeposit().amount;
        return deposit;
    }

    /**
     * 現金
     */
    private async cash() {
        const { cashchanger } = await this.actionService.user.getData();
        if (cashchanger === undefined) {
            throw new Error('cashchanger undefined');
        }
        await this.epsonEPOSService.cashchanger.init({
            ipAddress: cashchanger
        });
        await this.epsonEPOSService.cashchanger.endDeposit();
        await this.epsonEPOSService.cashchanger.beginDeposit();
    }

    /**
     * クレジットカード
     */
    private async creditcard() {
        const { transaction } = await this.actionService.purchase.getData();
        const { payment } = await this.actionService.user.getData();
        if (transaction === undefined
            || payment === undefined) {
            throw new Error('transaction or payment undefined');
        }
        const modal = this.utilService.openStaticModal({
            title: '', // this.translate.instant('purchase.paymentReception.creditcard.title'),
            body: '<img class="w-100" src="/default/images/purchase/payment/reception/creditcard.svg" alt="">'
        });
        const orderId = moment().format('YYYYMMDDHHmmsss');
        this.actionService.purchase.setOrderId({ id: orderId });
        await this.paymentService.init({ ipAddress: payment });
        const execResult = await this.paymentService.exec({
            func: Models.Purchase.Payment.FUNC_CODE.CREDITCARD.SETTLEMENT,
            options: {
                JOB: Models.Purchase.Payment.JOB.CAPTURE,
                ORDERID: orderId,
                AMOUNT: String(this.amount),
                // MACHINE_CODE: '',
                // TRANID: '',
                // CANTRANID: ''
            },
            timeout: this.getPaymentTimeout({ transaction })
        });
        if (execResult.FUNC_STATUS === Models.Purchase.Payment.FUNC_STATUS.APP_CANCEL
            || execResult.FUNC_STATUS === Models.Purchase.Payment.FUNC_STATUS.MACHINE_CANCEL) {
            modal.hide();
            this.router.navigate(['/purchase/payment']);
            return;
        }
        if (execResult.FUNC_STATUS !== Models.Purchase.Payment.FUNC_STATUS.SUCCESS) {
            await this.paymentService.exec({
                func: Models.Purchase.Payment.FUNC_CODE.CREDITCARD.INTERRUPTION,
            });
            modal.hide();
            throw new Error(JSON.stringify(execResult));
        }
        modal.hide();
        this.onSubmit();
    }

    /**
     * 電子マネー
     */
    private async eMoney() {
        const { transaction } = await this.actionService.purchase.getData();
        const { payment } = await this.actionService.user.getData();
        if (transaction === undefined
            || payment === undefined) {
            throw new Error('transaction or payment undefined');
        }
        const modal = this.utilService.openStaticModal({
            title: '', // this.translate.instant('purchase.paymentReception.eMoney.title'),
            body: '<img class="w-100" src="/default/images/purchase/payment/reception/eMoney.svg" alt="">'
        });
        const orderId = moment().format('YYYYMMDDHHmmsss');
        this.actionService.purchase.setOrderId({ id: orderId });
        await this.paymentService.init({ ipAddress: payment });
        const execResult = await this.paymentService.exec({
            func: Models.Purchase.Payment.FUNC_CODE.EMONEY.SETTLEMENT,
            options: {
                JOB: Models.Purchase.Payment.JOB.CAPTURE,
                ORDERID: orderId,
                AMOUNT: String(this.amount),
                // MACHINE_CODE: '',
                // TRANID: '',
                // CANTRANID: ''
            },
            timeout: this.getPaymentTimeout({ transaction })
        });
        if (execResult.FUNC_STATUS === Models.Purchase.Payment.FUNC_STATUS.APP_CANCEL
            || execResult.FUNC_STATUS === Models.Purchase.Payment.FUNC_STATUS.MACHINE_CANCEL) {
            modal.hide();
            this.router.navigate(['/purchase/payment']);
            return;
        }
        if (execResult.FUNC_STATUS !== Models.Purchase.Payment.FUNC_STATUS.SUCCESS) {
            await this.paymentService.exec({
                func: Models.Purchase.Payment.FUNC_CODE.EMONEY.INTERRUPTION,
            });
            modal.hide();
            throw new Error(JSON.stringify(execResult));
        }
        modal.hide();
        this.onSubmit();
    }

    /**
     * コード
     */
    private async code() {
        const { transaction } = await this.actionService.purchase.getData();
        const { payment } = await this.actionService.user.getData();
        if (transaction === undefined
            || payment === undefined) {
            throw new Error('transaction or payment undefined');
        }
        const modal = this.utilService.openStaticModal({
            title: '', // this.translate.instant('purchase.paymentReception.eMoney.title'),
            body: '<img class="w-100" src="/default/images/purchase/payment/reception/eMoney.svg" alt="">'
        });
        const orderId = moment().format('YYYYMMDDHHmmsss');
        this.actionService.purchase.setOrderId({ id: orderId });
        await this.paymentService.init({ ipAddress: payment });
        const execResult = await this.paymentService.exec({
            func: Models.Purchase.Payment.FUNC_CODE.CODE.SETTLEMENT,
            options: {
                JOB: Models.Purchase.Payment.JOB.CAPTURE,
                ORDERID: orderId,
                AMOUNT: String(this.amount),
                MACHINE_CODE: '',
                // TRANID: '',
                // CANTRANID: ''
            },
            timeout: this.getPaymentTimeout({ transaction })
        });
        if (execResult.FUNC_STATUS === Models.Purchase.Payment.FUNC_STATUS.APP_CANCEL
            || execResult.FUNC_STATUS === Models.Purchase.Payment.FUNC_STATUS.MACHINE_CANCEL) {
            modal.hide();
            this.router.navigate(['/purchase/payment']);
            return;
        }
        if (execResult.FUNC_STATUS !== Models.Purchase.Payment.FUNC_STATUS.SUCCESS) {
            await this.paymentService.exec({
                func: Models.Purchase.Payment.FUNC_CODE.CODE.INTERRUPTION,
            });
            modal.hide();
            throw new Error(JSON.stringify(execResult));
        }
        modal.hide();
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
                const deposit = this.getDeposit();
                const additionalProperty: { name: string; value: string; }[] = [];
                if (purchase.paymentMethod.typeOf === factory.chevre.paymentMethodType.Cash
                    && deposit !== undefined) {
                    // 現金
                    additionalProperty.push({ name: 'depositAmount', value: String(deposit) });
                    additionalProperty.push({ name: 'change', value: String(deposit - this.amount) });
                }
                if (purchase.orderId !== undefined) {
                    additionalProperty.push({ name: 'orderId', value: purchase.orderId });
                }
                await this.actionService.purchase.authorizeAnyPayment({ amount: this.amount, additionalProperty });
            }
            await this.actionService.purchase.registerContact(profile);
            await this.actionService.purchase.endTransaction({ seller, language: user.language });
            this.utilService.loadStart({ process: 'load' });
            if (purchase.paymentMethod?.typeOf === this.paymentMethodType.Cash) {
                // 現金おつり
                const deposit = this.getDeposit();
                await this.epsonEPOSService.cashchanger.endDeposit();
                if ((deposit - this.amount) > 0) {
                    await this.epsonEPOSService.cashchanger.dispenseChange({ amount: (deposit - this.amount) });
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
            const { cashchanger } = await this.actionService.user.getData();
            if (cashchanger !== undefined) {
                await this.actionService.purchase.depositRepay({ ipAddress: cashchanger });
            }
            this.router.navigate(['/purchase/payment']);
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * 決済タイムアウト取得
     */
    private getPaymentTimeout(params: {
        transaction: factory.transaction.placeOrder.ITransaction;
    }) {
        const expires = params.transaction.expires;
        const now = moment();
        const paymentTimeout = Number(this.environment.PAYMENT_TIMEOUT);
        const diff = moment(expires).diff(now, 'milliseconds');
        return (diff < paymentTimeout) ? diff : paymentTimeout;
    }
}
