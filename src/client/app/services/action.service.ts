import { Injectable } from '@angular/core';
import { OrderService } from './action/order.service';
import { PurchaseService } from './action/purchase.service';
import { UserService } from './action/user.service';

@Injectable({
    providedIn: 'root'
})
export class ActionService {

    constructor(
        public order: OrderService,
        public purchase: PurchaseService,
        public user: UserService,
    ) { }
}
