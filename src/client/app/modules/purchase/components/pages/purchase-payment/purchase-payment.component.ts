import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Functions, Models } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';
import {
    ActionService,
    EpsonEPOSService,
    UtilService,
} from '../../../../../services';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-purchase-payment',
    templateUrl: './purchase-payment.component.html',
    styleUrls: ['./purchase-payment.component.scss'],
})
export class PurchasePaymentComponent implements OnInit {
    public isLoading: Observable<boolean>;
    public purchase: Observable<reducers.IPurchaseState>;
    public user: Observable<reducers.IUserState>;
    public payments: {
        paymentAccepted: factory.chevre.seller.IPaymentAccepted;
        categoryCode: factory.chevre.categoryCode.ICategoryCode;
        image?: string;
    }[];
    public viewType = Models.Util.ViewType;
    public environment = getEnvironment();
    public amount: number;

    constructor(
        private store: Store<reducers.IState>,
        private router: Router,
        private utilService: UtilService,
        private actionService: ActionService,
        private translate: TranslateService,
        private epsonEPOSService: EpsonEPOSService
    ) {}

    public async ngOnInit() {
        this.isLoading = this.store.pipe(select(reducers.getLoading));
        this.purchase = this.store.pipe(select(reducers.getPurchase));
        this.user = this.store.pipe(select(reducers.getUser));
        this.amount = 0;
        this.payments = [];
        try {
            const { cashchanger, payment } =
                await this.actionService.user.getData();
            const { authorizeSeatReservations, seller } =
                await this.actionService.purchase.getData();
            if (seller === undefined || seller.paymentAccepted === undefined) {
                throw new Error('seller or seller.paymentAccepted undefined');
            }
            this.amount = Functions.Purchase.getAmount(
                authorizeSeatReservations
            );
            const paymentAccepted = seller.paymentAccepted.filter((p) => {
                const { paymentMethodType } = p;
                const paymentMethodCode =
                    Functions.Payment.findPaymentMethodType2Code({
                        paymentMethodType,
                    });
                return (
                    (paymentMethodCode ===
                        Models.Purchase.Payment.PaymentMethodCode.Cash &&
                        cashchanger) ||
                    (paymentMethodCode ===
                        Models.Purchase.Payment.PaymentMethodCode.CreditCard &&
                        payment) ||
                    (paymentMethodCode ===
                        Models.Purchase.Payment.PaymentMethodCode.EMoney &&
                        payment) ||
                    (paymentMethodCode ===
                        Models.Purchase.Payment.PaymentMethodCode.Code &&
                        payment)
                );
            });
            const categoryCodePayment =
                await this.actionService.categoryCode.search({
                    categorySetIdentifier:
                        factory.chevre.categoryCode.CategorySetIdentifier
                            .PaymentMethodType,
                });
            paymentAccepted.forEach((p) => {
                const categoryCode = categoryCodePayment.find(
                    (c) => c.codeValue === p.paymentMethodType
                );
                if (categoryCode === undefined) {
                    return;
                }
                const imageTable = [
                    {
                        code: Models.Purchase.Payment.PaymentMethodCode.Cash,
                        image: '/default/images/purchase/payment/icon/cash.svg',
                    },
                    {
                        code: Models.Purchase.Payment.PaymentMethodCode
                            .CreditCard,
                        image: '/default/images/purchase/payment/icon/creditcard.svg',
                    },
                    {
                        code: Models.Purchase.Payment.PaymentMethodCode.EMoney,
                        image: '/default/images/purchase/payment/icon/eMoney.svg',
                    },
                    {
                        code: Models.Purchase.Payment.PaymentMethodCode.Code,
                        image: '/default/images/purchase/payment/icon/code.svg',
                    },
                ];

                this.payments.push({
                    paymentAccepted: p,
                    categoryCode,
                    image: imageTable.find(({ code }) => {
                        const { paymentMethodType } = p;
                        const paymentMethodCode =
                            Functions.Payment.findPaymentMethodType2Code({
                                paymentMethodType,
                            });
                        return code === paymentMethodCode;
                    })?.image,
                });
            });
            this.actionService.purchase.setPaymentMethodType({});
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
        }
    }

    /**
     * 決済方法選択
     */
    public async selectPaymentMethodType(typeOf: string) {
        try {
            if (this.epsonEPOSService.cashchanger.isConnected()) {
                return;
            }
            const seller = (await this.actionService.purchase.getData()).seller;
            if (seller === undefined || seller.paymentAccepted === undefined) {
                throw new Error(
                    'seller is undefined or paymentAccepted is undefined'
                );
            }
            const findResult = seller.paymentAccepted.find(
                (paymentAccepted) =>
                    paymentAccepted.paymentMethodType === typeOf
            );
            if (findResult === undefined) {
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: this.translate.instant(
                        'purchase.payment.alert.notCompatible'
                    ),
                });
                return;
            }
            this.actionService.purchase.setPaymentMethodType({
                paymentMethod: { typeOf },
            });
            this.router.navigate(['/purchase/payment/reception']);
        } catch (error) {
            this.router.navigate(['/error']);
            console.error(error);
        }
    }
}
