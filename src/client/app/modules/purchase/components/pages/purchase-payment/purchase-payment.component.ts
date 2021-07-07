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
    MasterService,
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
    public paymentMethodType = factory.chevre.paymentMethodType;
    public customPaymentMethodType = Models.Purchase.Payment.PaymentMethodType;
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
        private masterService: MasterService,
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
                return (
                    (p.paymentMethodType ===
                        Models.Purchase.Payment.PaymentMethodType.Cash &&
                        cashchanger) ||
                    (p.paymentMethodType ===
                        factory.chevre.paymentMethodType.CreditCard &&
                        payment) ||
                    (p.paymentMethodType ===
                        Models.Purchase.Payment.PaymentMethodType.EMoney &&
                        payment) ||
                    (p.paymentMethodType ===
                        Models.Purchase.Payment.PaymentMethodType.Code &&
                        payment)
                );
            });
            const categoryCodePayment =
                await this.masterService.searchCategoryCode({
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
                        paymentMethodType: this.customPaymentMethodType.Cash,
                        image: '/default/images/purchase/payment/icon/cash.svg',
                    },
                    {
                        paymentMethodType: this.paymentMethodType.CreditCard,
                        image: '/default/images/purchase/payment/icon/creditcard.svg',
                    },
                    {
                        paymentMethodType: this.customPaymentMethodType.EMoney,
                        image: '/default/images/purchase/payment/icon/eMoney.svg',
                    },
                    {
                        paymentMethodType: this.customPaymentMethodType.Code,
                        image: '/default/images/purchase/payment/icon/code.svg',
                    },
                ];

                this.payments.push({
                    paymentAccepted: p,
                    categoryCode,
                    image: imageTable.find(
                        (i) => i.paymentMethodType === p.paymentMethodType
                    )?.image,
                });
            });
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
        }
    }

    /**
     * 決済方法選択
     */
    public async selectPaymentMethodType(
        typeOf: factory.chevre.paymentMethodType,
        category?: string
    ) {
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
            this.actionService.purchase.selectPaymentMethodType({
                typeOf,
                category,
            });
            this.router.navigate(['/purchase/payment/reception']);
        } catch (error) {
            this.router.navigate(['/error']);
            console.error(error);
        }
    }
}
