import { Injectable } from '@angular/core';
import { ActionCategoryCodeService } from './action/category-code.service';
import { ActionCreativeWorkService } from './action/creative-work.service';
import { ActionEventService } from './action/event.service';
import { OrderService } from './action/order.service';
import { ActionPaymentService } from './action/payment.service';
import { ActionPlaceService } from './action/place.service';
import { ActionProductService } from './action/product.service';
import { ActionProjectService } from './action/project.service';
import { PurchaseService } from './action/purchase.service';
import { ActionSellerService } from './action/seller.service';
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
        public event: ActionEventService,
        public seller: ActionSellerService,
        public place: ActionPlaceService,
        public creativeWork: ActionCreativeWorkService,
        public categoryCode: ActionCategoryCodeService,
        public project: ActionProjectService
    ) {}
}
