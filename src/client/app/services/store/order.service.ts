import { Injectable } from '@angular/core';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { orderAction } from '../../store/actions';
import * as reducers from '../../store/reducers';

@Injectable({
    providedIn: 'root',
})
export class StoreOrderService {
    public order: Observable<reducers.IOrderState>;
    constructor(private store: Store<reducers.IState>) {
        this.order = this.store.pipe(select(reducers.getOrder));
    }

    /**
     * 注文データ取得
     */
    public async getData() {
        return new Promise<reducers.IOrderState>((resolve) => {
            this.order
                .subscribe((order) => {
                    resolve(order);
                })
                .unsubscribe();
        });
    }

    /**
     * 注文データ削除
     */
    public remove() {
        this.store.dispatch(orderAction.remove());
    }

    /**
     * 注文
     */
    public async setOrder(params: { order: factory.order.IOrder }) {
        this.store.dispatch(orderAction.setOrder(params));
    }
}
