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
    public data: Observable<reducers.IPurchaseState>;

    constructor(private store: Store<reducers.IState>) {
        this.data = this.store.pipe(select(reducers.getPurchase));
    }

    /**
     * 購入データ取得
     */
    public async getData() {
        return new Promise<reducers.IPurchaseState>((resolve) => {
            this.data
                .subscribe((data) => {
                    resolve(data);
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

    /**
     * イベント設定
     */
    public setScreeningEvent(params: {
        screeningEvent: factory.chevre.event.screeningEvent.IEvent;
    }) {
        this.store.dispatch(purchaseAction.setScreeningEvent(params));
    }

    /**
     * オファー設定
     */
    public setTicketOffers(params: {
        ticketOffers: factory.chevre.event.screeningEvent.ITicketOffer[];
    }) {
        this.store.dispatch(purchaseAction.setTicketOffers(params));
    }

    /**
     * ムビチケ承認設定
     */
    public setAuthorizeMovieTicket(params: {
        authorizeResults: {
            id: string;
            object: {
                typeOf: factory.service.paymentService.PaymentServiceType;
            };
            purpose: factory.action.authorize.paymentMethod.any.IPurpose;
        }[];
    }) {
        this.store.dispatch(purchaseAction.setAuthorizeMovieTicket(params));
    }

    /**
     * ムビチケ認証設定
     */
    public setCheckMovieTicket(params: {
        checkMovieTicket: factory.action.check.paymentMethod.movieTicket.IAction;
    }) {
        this.store.dispatch(purchaseAction.setCheckMovieTicket(params));
    }

    /**
     * プロダクト認証設定
     */
    public setCheckProduct(params: {
        checkProduct: {
            code: string;
            token: string;
            typeOfGood: factory.permit.IPermit;
        };
    }) {
        this.store.dispatch(purchaseAction.setCheckProduct(params));
    }

    /**
     * 決済承認
     */
    public async setAuthorizeAnyPayment(params: {
        authorizeResult: {
            id: string;
            purpose: factory.action.authorize.paymentMethod.any.IPurpose;
        };
    }) {
        this.store.dispatch(purchaseAction.setAuthorizeAnyPayment(params));
    }

    /**
     * 取引設定
     */
    public setTransaction(params: {
        transaction: factory.transaction.placeOrder.ITransaction;
    }) {
        this.store.dispatch(purchaseAction.setTransaction(params));
    }

    /**
     * 取引削除
     */
    public cancelTransaction() {
        this.store.dispatch(purchaseAction.cancelTransaction());
    }

    /**
     * プロフィール設定
     */
    public setProfile(params: { profile: factory.person.IProfile }) {
        this.store.dispatch(purchaseAction.setProfile(params));
    }

    /**
     * 取引更新
     */
    public setOrder(params: { order: factory.order.IOrder }) {
        this.store.dispatch(purchaseAction.setOrder(params));
    }

    /**
     * 座席承認設定
     */
    public setAuthorizeSeatReservation(params: {
        authorizeSeatReservation?: factory.action.authorize.offer.seatReservation.IAction<factory.service.webAPI.Identifier.Chevre>;
        authorizeSeatReservations: factory.action.authorize.offer.seatReservation.IAction<factory.service.webAPI.Identifier.Chevre>[];
        pendingMovieTickets: Models.Purchase.MovieTicket.IMovieTicket[];
        temporarilyReserved: Models.Purchase.Reservation.ITemporarilyReserved[];
    }) {
        this.store.dispatch(purchaseAction.setAuthorizeSeatReservation(params));
    }
}
