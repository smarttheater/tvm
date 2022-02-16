import { Injectable } from '@angular/core';
import { StoreOrderService } from './store/order.service';
import { StorePurchaseService } from './store/purchase.service';
import { StoreUserService } from './store/user.service';
import { StoreUtilService } from './store/util.service';

@Injectable({
    providedIn: 'root',
})
export class StoreService {
    constructor(
        public purchase: StorePurchaseService,
        public order: StoreOrderService,
        public user: StoreUserService,
        public util: StoreUtilService
    ) {}
}
