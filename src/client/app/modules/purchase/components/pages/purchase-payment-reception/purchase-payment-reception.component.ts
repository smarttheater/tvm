import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Functions, Models } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';
import {
    ActionService,
    EpsonEPOSService,
    PaymentService,
    UtilService,
} from '../../../../../services';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-purchase-payment-reception',
    templateUrl: './purchase-payment-reception.component.html',
    styleUrls: ['./purchase-payment-reception.component.scss'],
})
export class PurchasePaymentReceptionComponent implements OnInit, OnDestroy {
    constructor(
        private store: Store<reducers.IState>,
        private router: Router,
        private actionService: ActionService,
        private utilService: UtilService,
        private epsonEPOSService: EpsonEPOSService,
        private paymentService: PaymentService
    ) {}
    public purchase: Observable<reducers.IPurchaseState>;
    public user: Observable<reducers.IUserState>;
    public isLoading: Observable<boolean>;
    public viewType = Models.Util.ViewType;
    public amount: number;
    public environment = getEnvironment();
    public isCash: boolean;

    public async ngOnInit() {
        this.isLoading = this.store.pipe(select(reducers.getLoading));
        this.purchase = this.store.pipe(select(reducers.getPurchase));
        this.user = this.store.pipe(select(reducers.getUser));
        this.amount = 0;
        try {
            this.utilService.loadStart({ process: 'load' });
            this.isCash = false;
            const purchase = await this.actionService.purchase.getData();
            this.amount = Functions.Purchase.getAmount(
                purchase.authorizeSeatReservations
            );
            if (this.amount === 0) {
                await this.onSubmit();
                this.utilService.loadEnd();
                return;
            }
            const paymentMethodType = purchase.paymentMethod?.typeOf;
            if (paymentMethodType === undefined) {
                throw new Error('paymentMethodType === undefined');
            }
            const paymentMethodCode =
                Functions.Payment.findPaymentMethodType2Code({
                    paymentMethodType,
                });
            switch (paymentMethodCode) {
                case Models.Purchase.Payment.PaymentMethodCode.Cash:
                    this.isCash = true;
                    await this.paymentCash();
                    this.utilService.loadEnd();
                    break;
                case Models.Purchase.Payment.PaymentMethodCode.CreditCard:
                    this.utilService.loadEnd();
                    await this.paymentCreditcard();
                    break;
                case Models.Purchase.Payment.PaymentMethodCode.EMoney:
                    this.utilService.loadEnd();
                    await this.paymentEMoney();
                    break;
                case Models.Purchase.Payment.PaymentMethodCode.Code:
                    this.utilService.loadEnd();
                    await this.paymentCode();
                    break;
                default:
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
            try {
                await this.endDepositRepay();
            } catch (error) {
                this.router.navigate(['/stop']);
            }
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
     * 現金決済
     */
    private async paymentCash() {
        const { device } = await this.actionService.user.getData();
        if (device?.cashchanger === undefined) {
            throw new Error('cashchanger undefined');
        }
        await this.epsonEPOSService.cashchanger.init({
            ipAddress: device.cashchanger.ipAddress,
        });
        await this.epsonEPOSService.cashchanger.beginDeposit();
    }

    /**
     * クレジットカード決済
     */
    private async paymentCreditcard() {
        const { transaction } = await this.actionService.purchase.getData();
        const { device, application } = await this.actionService.user.getData();
        if (transaction === undefined || device?.payment === undefined) {
            throw new Error('transaction or payment undefined');
        }
        const timeout = this.getPaymentTimeout({ transaction });
        if (timeout < 0) {
            this.router.navigate(['/expired']);
            return;
        }
        const modal = this.utilService.openStaticModal({
            title: '', // this.translate.instant('purchase.paymentReception.creditcard.title'),
            body: '<img class="w-100" src="/default/images/purchase/payment/reception/creditcard.svg" alt="">',
        });
        try {
            const orderId = Functions.Purchase.createRemiseOrderId(
                application?.pos?.id
            );
            this.actionService.purchase.setOrderId({ id: orderId });
            await this.paymentService.init({
                ipAddress: device?.payment?.ipAddress,
            });
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
                timeout,
            });
            if (
                execResult.FUNC_STATUS ===
                    Models.Purchase.Payment.FUNC_STATUS.APP_CANCEL ||
                execResult.FUNC_STATUS ===
                    Models.Purchase.Payment.FUNC_STATUS.MACHINE_CANCEL ||
                execResult.FUNC_STATUS ===
                    Models.Purchase.Payment.FUNC_STATUS.APP_ERROR
            ) {
                modal.hide();
                this.router.navigate(['/purchase/payment']);
                return;
            }
            if (
                execResult.FUNC_STATUS !==
                Models.Purchase.Payment.FUNC_STATUS.SUCCESS
            ) {
                await this.paymentService.exec({
                    func: Models.Purchase.Payment.FUNC_CODE.CREDITCARD
                        .INTERRUPTION,
                });
                modal.hide();
                throw new Error(JSON.stringify(execResult));
            }
            modal.hide();
            this.onSubmit();
        } catch (error) {
            if (modal !== undefined) {
                modal.hide();
            }
            throw error;
        }
    }

    /**
     * 電子マネー決済
     */
    private async paymentEMoney() {
        const { transaction } = await this.actionService.purchase.getData();
        const { device, application } = await this.actionService.user.getData();
        if (transaction === undefined || device?.payment === undefined) {
            throw new Error('transaction or payment undefined');
        }
        const timeout = this.getPaymentTimeout({ transaction });
        if (timeout < 0) {
            this.router.navigate(['/expired']);
            return;
        }
        const modal = this.utilService.openStaticModal({
            title: '', // this.translate.instant('purchase.paymentReception.eMoney.title'),
            body: '<img class="w-100" src="/default/images/purchase/payment/reception/eMoney.svg" alt="">',
        });
        try {
            const orderId = Functions.Purchase.createRemiseOrderId(
                application?.pos?.id
            );
            this.actionService.purchase.setOrderId({ id: orderId });
            await this.paymentService.init({
                ipAddress: device.payment.ipAddress,
            });
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
                timeout,
            });
            if (
                execResult.FUNC_STATUS ===
                    Models.Purchase.Payment.FUNC_STATUS.APP_CANCEL ||
                execResult.FUNC_STATUS ===
                    Models.Purchase.Payment.FUNC_STATUS.MACHINE_CANCEL ||
                execResult.FUNC_STATUS ===
                    Models.Purchase.Payment.FUNC_STATUS.APP_ERROR
            ) {
                modal.hide();
                this.router.navigate(['/purchase/payment']);
                return;
            }
            if (
                execResult.FUNC_STATUS !==
                Models.Purchase.Payment.FUNC_STATUS.SUCCESS
            ) {
                await this.paymentService.exec({
                    func: Models.Purchase.Payment.FUNC_CODE.EMONEY.INTERRUPTION,
                });
                modal.hide();
                throw new Error(JSON.stringify(execResult));
            }
            modal.hide();
            this.onSubmit();
        } catch (error) {
            if (modal !== undefined) {
                modal.hide();
            }
            throw error;
        }
    }

    /**
     * コード決済
     */
    private async paymentCode() {
        const { transaction } = await this.actionService.purchase.getData();
        const { device, application } = await this.actionService.user.getData();
        if (transaction === undefined || device?.payment === undefined) {
            throw new Error('transaction or payment undefined');
        }
        const timeout = this.getPaymentTimeout({ transaction });
        if (timeout < 0) {
            this.router.navigate(['/expired']);
            return;
        }
        const modal = this.utilService.openStaticModal({
            title: '', // this.translate.instant('purchase.paymentReception.eMoney.title'),
            body: '<img class="w-100" src="/default/images/purchase/payment/reception/eMoney.svg" alt="">',
        });
        try {
            const orderId = Functions.Purchase.createRemiseOrderId(
                application?.pos?.id
            );
            this.actionService.purchase.setOrderId({ id: orderId });
            await this.paymentService.init({
                ipAddress: device.payment.ipAddress,
            });
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
                timeout,
            });
            if (
                execResult.FUNC_STATUS ===
                    Models.Purchase.Payment.FUNC_STATUS.APP_CANCEL ||
                execResult.FUNC_STATUS ===
                    Models.Purchase.Payment.FUNC_STATUS.MACHINE_CANCEL ||
                execResult.FUNC_STATUS ===
                    Models.Purchase.Payment.FUNC_STATUS.APP_ERROR
            ) {
                modal.hide();
                this.router.navigate(['/purchase/payment']);
                return;
            }
            if (
                execResult.FUNC_STATUS !==
                Models.Purchase.Payment.FUNC_STATUS.SUCCESS
            ) {
                await this.paymentService.exec({
                    func: Models.Purchase.Payment.FUNC_CODE.CODE.INTERRUPTION,
                });
                modal.hide();
                throw new Error(JSON.stringify(execResult));
            }
            modal.hide();
            this.onSubmit();
        } catch (error) {
            if (modal !== undefined) {
                modal.hide();
            }
            throw error;
        }
    }

    /**
     * 確定
     */
    public async onSubmit() {
        try {
            const { pendingMovieTickets, paymentMethod, orderId, seller } =
                await this.actionService.purchase.getData();
            const { profile } = await this.actionService.user.getData();
            if (profile === undefined || seller === undefined) {
                throw new Error('profile or seller undefined');
            }
            if (pendingMovieTickets.length > 0) {
                await this.actionService.payment.authorizeMovieTicket();
            }
            if (paymentMethod !== undefined) {
                const paymentMethodType = paymentMethod?.typeOf;
                if (paymentMethodType === undefined) {
                    throw new Error('paymentMethodType === undefined');
                }
                const paymentMethodCode =
                    Functions.Payment.findPaymentMethodType2Code({
                        paymentMethodType,
                    });
                const additionalProperty: { name: string; value: string }[] =
                    [];
                if (
                    paymentMethodCode ===
                    Models.Purchase.Payment.PaymentMethodCode.Cash
                ) {
                    // 現金
                    const deposit = this.getDeposit();
                    additionalProperty.push({
                        name: 'depositAmount',
                        value: String(deposit),
                    });
                    additionalProperty.push({
                        name: 'change',
                        value: String(deposit - this.amount),
                    });
                }
                if (orderId !== undefined) {
                    additionalProperty.push({
                        name: 'orderId',
                        value: orderId,
                    });
                }
                await this.actionService.payment.authorizeAnyPayment({
                    amount: this.amount,
                    additionalProperty,
                });
            }
            await this.actionService.transaction.setProfile(profile);
        } catch (error) {
            console.error(error);
            this.router.navigate(['/stop']);
            return;
        }
        try {
            const { seller } = await this.actionService.purchase.getData();
            const { language, application } =
                await this.actionService.user.getData();
            if (seller === undefined || application?.theater === undefined) {
                throw new Error('seller or theater undefined');
            }
            await this.actionService.transaction.confirm({
                theater: application.theater,
                language,
            });
        } catch (error) {
            console.error(error);
            this.router.navigate(['/stop']);
            return;
        }
        try {
            if (this.epsonEPOSService.cashchanger.isConnected()) {
                this.utilService.loadStart({ process: 'load' });
                await this.epsonEPOSService.cashchanger.disconnect();
                this.utilService.loadEnd();
            }
            const { order } = await this.actionService.purchase.getData();
            const { device, application } =
                await this.actionService.user.getData();
            if (order === undefined || device?.printer === undefined) {
                throw new Error('order or printer undefined');
            }
            const orders = [order];
            await this.actionService.order.print({
                orders,
                pos: application?.pos,
                printer: device.printer,
            });
        } catch (error) {
            try {
                const { order } = await this.actionService.purchase.getData();
                if (order === undefined) {
                    throw new Error('order undefined');
                }
                const findResult = order.paymentMethods.find(
                    (p) =>
                        p.typeOf ===
                        Models.Purchase.Payment.PaymentMethodCode.Cash
                );
                if (findResult !== undefined) {
                    await this.dispenseChange();
                }
            } catch (error2) {
                console.error(error2);
            }
            this.utilService.setError({ error });
            this.router.navigate(['/stop']);
            return;
        }
        try {
            const { order } = await this.actionService.purchase.getData();
            if (order === undefined) {
                throw new Error('order undefined');
            }
            const findResult = order.paymentMethods.find(
                (p) =>
                    p.typeOf === Models.Purchase.Payment.PaymentMethodCode.Cash
            );
            if (findResult !== undefined) {
                await this.dispenseChange();
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
     * おつり処理
     */
    private async dispenseChange() {
        // 入金処理終了
        this.utilService.loadStart({ process: 'load' });
        const { device } = await this.actionService.user.getData();
        if (device?.cashchanger === undefined) {
            throw new Error('cashchanger undefined');
        }
        await this.epsonEPOSService.cashchanger.init({
            ipAddress: device.cashchanger.ipAddress,
        });
        await this.epsonEPOSService.cashchanger.endDeposit({
            endDepositType: 'DEPOSIT_NOCHANGE',
        });
        const deposit = this.epsonEPOSService.cashchanger.getDeposit();
        const change = deposit.amount - this.amount;
        if (!Number.isNaN(change) && change > 0) {
            // 現金おつり
            await this.epsonEPOSService.cashchanger.dispenseChange({
                change,
            });
        }
        await this.epsonEPOSService.cashchanger.disconnect();
        this.utilService.loadEnd();
    }

    /**
     * 決済タイムアウト取得
     */
    private getPaymentTimeout(params: {
        transaction: factory.transaction.placeOrder.ITransaction;
    }) {
        const PAYMENT_NECESSARY_TIME = 20000;
        const expires = moment(params.transaction.expires).add(
            -1 * PAYMENT_NECESSARY_TIME,
            'milliseconds'
        );
        const now = moment();
        const paymentTimeout = Number(this.environment.PAYMENT_TIMEOUT);
        const diff = moment(expires).diff(now, 'milliseconds');
        return diff < paymentTimeout ? diff : paymentTimeout;
    }

    /**
     * 現金返金
     */
    private async endDepositRepay() {
        try {
            this.utilService.loadStart({ process: 'load' });
            await this.epsonEPOSService.cashchanger.endDeposit({
                endDepositType: 'DEPOSIT_REPAY',
            });
            await this.epsonEPOSService.cashchanger.disconnect();
            this.utilService.loadEnd();
        } catch (error) {
            this.utilService.loadEnd();
            throw new Error(error);
        }
    }

    public async prev() {
        try {
            await this.endDepositRepay();
            this.router.navigate(['/purchase/payment']);
        } catch (error) {
            this.router.navigate(['/stop']);
        }
    }
}
