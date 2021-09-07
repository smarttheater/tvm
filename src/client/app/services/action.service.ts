import { Injectable } from '@angular/core';
import { ActionEventService } from './action/event.service';
import { OrderService } from './action/order.service';
import { ActionPaymentService } from './action/payment.service';
import { ActionProductService } from './action/product.service';
import { PurchaseService } from './action/purchase.service';
import { ActionStoreService } from './action/store.service';
import { ActionTransactionService } from './action/transaction.service';
import { UserService } from './action/user.service';

@Injectable({
    providedIn: 'root',
})
export class ActionService {
    constructor(
        public order: OrderService,
        public purchase: PurchaseService,
        public user: UserService,
        public store: ActionStoreService,
        public product: ActionProductService,
        public payment: ActionPaymentService,
        public transaction: ActionTransactionService,
        public event: ActionEventService
    ) {}
}
