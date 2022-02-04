import { Injectable } from '@angular/core';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Models } from '../..';
import { purchaseAction } from '../../store/actions';
import * as reducers from '../../store/reducers';

@Injectable({
    providedIn: 'root',
})
export class StorePurchaseService {
    public purchase: Observable<reducers.IPurchaseState>;

    constructor(private store: Store<reducers.IState>) {
        this.purchase = this.store.pipe(select(reducers.getPurchase));
    }

    /**
     * 購入データ取得
     */
    public async getData() {
        return new Promise<reducers.IPurchaseState>((resolve) => {
            this.purchase
                .subscribe((purchase) => {
                    resolve(purchase);
                })
                .unsubscribe();
        });
    }

    /**
     * 購入データ削除
     */
    public remove() {
        this.store.dispatch(purchaseAction.remove());
    }

    /**
     * 購入一時データ削除
     */
    public unsettledDelete() {
        this.store.dispatch(purchaseAction.unsettledDelete());
    }

    /**
     * 販売者取得
     */
    public async setSeller(params: { seller: factory.chevre.seller.ISeller }) {
        this.store.dispatch(purchaseAction.setSeller(params));
    }

    /**
     * スケジュール日選択
     */
    public setScheduleDate(params: { scheduleDate: string }) {
        this.store.dispatch(purchaseAction.selectScheduleDate(params));
    }

    /**
     * コンテンツ選択
     */
    public setCreativeWork(params: {
        creativeWork: factory.chevre.creativeWork.movie.ICreativeWork;
    }) {
        this.store.dispatch(purchaseAction.selectCreativeWork(params));
    }

    /**
     * 施設コンテンツ選択
     */
    public setScreeningEventSeries(
        screeningEventSeries: factory.chevre.event.screeningEventSeries.IEvent
    ) {
        this.store.dispatch(
            purchaseAction.selectScreeningEventSeries({ screeningEventSeries })
        );
    }

    /**
     * スクリーン取得
     */
    public async setScreeningRoom(params: {
        screeningRoom: factory.place.screeningRoom.IPlace;
    }) {
        this.store.dispatch(purchaseAction.setScreeningRoom(params));
    }

    /**
     * 座席選択
     */
    public setSeats(params: {
        seats: Models.Purchase.Reservation.IReservationSeat[];
    }) {
        this.store.dispatch(purchaseAction.selectSeats(params));
    }

    /**
     * 座席選択解除
     */
    public removeSeats(params: {
        seats: Models.Purchase.Reservation.IReservationSeat[];
    }) {
        this.store.dispatch(purchaseAction.cancelSeats(params));
    }

    /**
     * チケット選択
     */
    public setTickets(params: {
        reservations: Models.Purchase.Reservation.IReservation[];
    }) {
        this.store.dispatch(purchaseAction.selectTickets(params));
    }

    /**
     * 決済方法設定
     */
    public setPaymentMethodType(params: {
        paymentMethod?: { typeOf: string };
    }) {
        this.store.dispatch(purchaseAction.setPaymentMethodType(params));
    }

    /**
     * 検索方法選択
     */
    public setSearchType(params: { searchType: 'movie' | 'event' }) {
        this.store.dispatch(purchaseAction.selectSearchType(params));
    }

    /**
     * オーダーIDを設定
     */
    public setOrderId(params: { id: string }) {
        this.store.dispatch(purchaseAction.setOrderId(params));
    }
}
