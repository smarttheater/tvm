import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class PurchasePaymentReceptionComponent implements OnInit, OnDestroy {
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
            } else if (purchase.paymentMethod?.typeOf === this.paymentMethodType.CreditCard) {
                // クレジットカード
                this.utilService.loadEnd();
                await this.creditcard();
            } else if (purchase.paymentMethod?.typeOf === this.paymentMethodType.EMoney) {
                // 電子マネー
                this.utilService.loadEnd();
                await this.eMoney();
            } else if (purchase.paymentMethod?.typeOf === 'Code') {
                // コード
                this.utilService.loadEnd();
                await this.code();
            } else {
                throw new Error('paymentMethod not supported');
            }
        } catch (error) {
            console.error(error);
            this.utilService.loadEnd();
            this.router.navigate(['/stop']);
        }
    }

    public async ngOnDestroy() {
        if (this.epsonEPOSService.cashchanger.isConnected()) {
            await this.endDepositRepay();
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
            const { pendingMovieTickets, paymentMethod, orderId, seller } = await this.actionService.purchase.getData();
            const { customerContact } = await this.actionService.user.getData();
            const profile = customerContact;
            if (profile === undefined
                || seller === undefined) {
                throw new Error('profile or seller undefined');
            }
            if (pendingMovieTickets.length > 0) {
                await this.actionService.purchase.authorizeMovieTicket({ seller });
            }
            if (paymentMethod !== undefined) {
                const additionalProperty: { name: string; value: string; }[] = [];
                if (paymentMethod.typeOf === factory.chevre.paymentMethodType.Cash) {
                    // 現金
                    const deposit = this.getDeposit();
                    additionalProperty.push({ name: 'depositAmount', value: String(deposit) });
                    additionalProperty.push({ name: 'change', value: String(deposit - this.amount) });
                }
                if (orderId !== undefined) {
                    additionalProperty.push({ name: 'orderId', value: orderId });
                }
                await this.actionService.purchase.authorizeAnyPayment({ amount: this.amount, additionalProperty });
            }
            await this.actionService.purchase.registerContact(profile);
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
            return;
        }
        try {
            const { seller } = await this.actionService.purchase.getData();
            const { language } = await this.actionService.user.getData();
            if (seller === undefined) {
                throw new Error('seller undefined');
            }
            await this.actionService.purchase.endTransaction({ seller, language });
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
            return;
        }
        try {
            if (this.epsonEPOSService.cashchanger.isConnected()) {
                this.epsonEPOSService.cashchanger.disconnect();
            }
            const { order } = await this.actionService.purchase.getData();
            const { printer, pos } = await this.actionService.user.getData();
            if (order === undefined
                || printer === undefined) {
                throw new Error('order or printer undefined');
            }
            const orders = [order];
            await this.actionService.order.print({ orders, pos, printer });
        } catch (error) {
            try {
                const { order } = await this.actionService.purchase.getData();
                const { language, pos } = await this.actionService.user.getData();
                if (order === undefined) {
                    throw new Error('order or printer undefined');
                }
                await this.actionService.order.cancel({
                    orders: [order],
                    language,
                    pos,
                });
            } catch (error2) {
                console.error(error2);
            }
            try {
                const { cashchanger } = await this.actionService.user.getData();
                if (cashchanger === undefined) {
                    throw new Error('cashchanger undefined');
                }
                await this.epsonEPOSService.cashchanger.init({
                    ipAddress: cashchanger
                });
            } catch (error2) {
                console.error(error2);
            }
            this.utilService.setError(error);
            this.router.navigate(['/stop']);
            return;
        }
        try {
            const { order } = await this.actionService.purchase.getData();
            if (order === undefined) {
                throw new Error('order undefined');
            }
            const findResult = order.paymentMethods.find(p => p.typeOf === this.paymentMethodType.Cash);
            if (findResult !== undefined) {
                // 入金処理終了
                this.utilService.loadStart({ process: 'load' });
                const { cashchanger } = await this.actionService.user.getData();
                if (cashchanger === undefined) {
                    throw new Error('cashchanger undefined');
                }
                await this.epsonEPOSService.cashchanger.init({
                    ipAddress: cashchanger
                });
                await this.epsonEPOSService.cashchanger.endDeposit({
                    endDepositType: 'DEPOSIT_NOCHANGE'
                });
                const deposit = this.epsonEPOSService.cashchanger.getDeposit();
                const change = deposit.amount - this.amount;
                if (!Number.isNaN(change) && change > 0) {
                    // 現金おつり
                    await this.epsonEPOSService.cashchanger.dispenseChange({ change });
                }
                await this.epsonEPOSService.cashchanger.disconnect();
                this.utilService.loadEnd();
            }
        } catch (error) {
            this.utilService.loadEnd();
            console.error(error);
            this.router.navigate(['/stop']);
            return;
        }
        this.router.navigate(['/purchase/complete']);
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

    /**
     * 現金返金
     */
    private async endDepositRepay() {
        try {
            this.utilService.loadStart({ process: 'load' });
            await this.epsonEPOSService.cashchanger.endDeposit({
                endDepositType: 'DEPOSIT_REPAY'
            });
            await this.epsonEPOSService.cashchanger.disconnect();
            this.utilService.loadEnd();
        } catch (error) {
            this.utilService.loadEnd();
            this.router.navigate(['/stop']);
        }
    }

    public async prev() {
        await this.endDepositRepay();
        this.router.navigate(['/purchase/payment']);
    }
}
