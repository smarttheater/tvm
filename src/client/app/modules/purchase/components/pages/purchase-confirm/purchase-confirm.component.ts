import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/api-javascript-client';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Functions, Models } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';
import { PurchaseService, UserService } from '../../../../../services';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-purchase-confirm',
    templateUrl: './purchase-confirm.component.html',
    styleUrls: ['./purchase-confirm.component.scss']
})
export class PurchaseConfirmComponent implements OnInit {
    public purchase: Observable<reducers.IPurchaseState>;
    public isLoading: Observable<boolean>;
    public user: Observable<reducers.IUserState>;
    public moment = moment;
    public paymentMethodType = factory.paymentMethodType;
    public viewType = Models.Util.ViewType;
    public depositAmount: number;
    public amount: number;
    public environment = getEnvironment();
    public getCustomPaymentMethodTypeName = Functions.Purchase.getCustomPaymentMethodTypeName;

    constructor(
        private store: Store<reducers.IState>,
        private router: Router,
        private purchaseService: PurchaseService,
        private userService: UserService,
    ) { }

    public async ngOnInit() {
        this.purchase = this.store.pipe(select(reducers.getPurchase));
        this.isLoading = this.store.pipe(select(reducers.getLoading));
        this.user = this.store.pipe(select(reducers.getUser));
        this.amount = 0;
        this.depositAmount = 0;
        try {
            const purchase = await this.purchaseService.getData();
            this.amount = Functions.Purchase.getAmount(purchase.authorizeSeatReservations);
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
        }
    }

    /**
     * 確定
     */
    public async onSubmit() {
        if (this.amount > 0) {
            this.router.navigate(['/purchase/payment']);
            return;
        }
        const purchaseData = await this.purchaseService.getData();
        const userData = await this.userService.getData();
        const profile = userData.customerContact;
        const seller = purchaseData.seller;
        if (profile === undefined
            || seller === undefined) {
            this.router.navigate(['/error']);
            return;
        }
        try {
            if (purchaseData.pendingMovieTickets.length > 0) {
                await this.purchaseService.authorizeMovieTicket({ seller });
            }
            await this.purchaseService.authorizeAnyPayment({ amount: this.amount });
            await this.purchaseService.registerContact(profile);
            await this.purchaseService.endTransaction({ seller, language: userData.language });
            this.router.navigate(['/purchase/complete']);
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
        }
    }

}
