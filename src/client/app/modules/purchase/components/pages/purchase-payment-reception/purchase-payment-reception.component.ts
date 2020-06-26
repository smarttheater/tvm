import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/api-javascript-client';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Functions, Models } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';
import { EpsonEPOSService, PurchaseService, UserService, } from '../../../../../services';
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
    public paymentMethodType = factory.paymentMethodType;
    public viewType = Models.Util.ViewType;
    public amount: number;
    public deposit: number;
    public environment = getEnvironment();

    constructor(
        private store: Store<reducers.IState>,
        private router: Router,
        private userService: UserService,
        private purchaseService: PurchaseService,
        private epsonEPOSService: EpsonEPOSService,
    ) { }

    public async ngOnInit() {
        this.isLoading = this.store.pipe(select(reducers.getLoading));
        this.purchase = this.store.pipe(select(reducers.getPurchase));
        this.user = this.store.pipe(select(reducers.getUser));
        this.amount = 0;
        try {
            const purchase = await this.purchaseService.getData();
            this.amount = Functions.Purchase.getAmount(purchase.authorizeSeatReservations);
            if (purchase.paymentMethod?.typeOf === this.paymentMethodType.Cash) {
                // 現金
                this.deposit = 0;
                const user = await this.userService.getData();
                if (user.printer === undefined) {
                    throw new Error('printer undefined');
                }
                await this.epsonEPOSService.cashchanger.init({ printer: user.printer });
                await this.epsonEPOSService.cashchanger.endDeposit();
                await this.epsonEPOSService.cashchanger.beginDeposit({
                    cb: (amount: number) => {
                        this.deposit = amount;
                    }
                });
            }
        } catch (error) {
            console.error(error);
            // this.router.navigate(['/error']);
        }
    }

    /**
     * 確定
     */
    public async onSubmit() {
        const purchaseData = await this.purchaseService.getData();
        const userData = await this.userService.getData();
        const profile = userData.customerContact;
        const seller = purchaseData.seller;
        const paymentMethod = purchaseData.paymentMethod;
        if (paymentMethod === undefined
            || profile === undefined
            || seller === undefined) {
            throw new Error('paymentMethod or profile or seller undefined');
        }
        try {
            if (purchaseData.pendingMovieTickets.length > 0) {
                await this.purchaseService.authorizeMovieTicket({ seller });
            }
            await this.purchaseService.authorizeAnyPayment({ amount: this.amount });
            await this.purchaseService.registerContact(profile);
            await this.purchaseService.endTransaction({ seller, language: userData.language });
            await this.epsonEPOSService.cashchanger.endDeposit();
            if ((this.deposit - this.amount) > 0) {
                await this.epsonEPOSService.cashchanger.dispenseChange({ amount: (this.deposit - this.amount) });
            }
            this.router.navigate(['/purchase/complete']);
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
            this.epsonEPOSService.cashchanger.endDepositRepay();
        }
    }
}
