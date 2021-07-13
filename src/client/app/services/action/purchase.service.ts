import { Injectable } from '@angular/core';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Models } from '../..';
import { purchaseAction } from '../../store/actions';
import * as reducers from '../../store/reducers';
import { CinerinoService } from '../cinerino.service';
import { UtilService } from '../util.service';
import { ActionEventService } from './purchase/event.service';
import { ActionPaymentService } from './purchase/payment.service';
import { ActionTransactionService } from './purchase/transaction.service';

@Injectable({
    providedIn: 'root',
})
export class PurchaseService {
    public purchase: Observable<reducers.IPurchaseState>;
    public error: Observable<string | null>;

    constructor(
        private store: Store<reducers.IState>,
        private utilService: UtilService,
        private cinerinoService: CinerinoService,
        public payment: ActionPaymentService,
        public transaction: ActionTransactionService,
        public event: ActionEventService
    ) {
        this.purchase = this.store.pipe(select(reducers.getPurchase));
        this.error = this.store.pipe(select(reducers.getError));
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
    public delete() {
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
    public async getSeller(params: { id: string }) {
        try {
            this.utilService.loadStart({
                process: 'purchaseAction.GetSeller',
            });
            await this.cinerinoService.getServices();
            const { id } = params;
            const seller = await this.cinerinoService.seller.findById({ id });
            this.store.dispatch(purchaseAction.setSeller({ seller }));
            this.utilService.loadEnd();
        } catch (error) {
            this.utilService.setError(error);
            this.utilService.loadEnd();
            throw error;
        }
    }

    /**
     * スケジュール日選択
     */
    public selectScheduleDate(scheduleDate: string) {
        this.store.dispatch(
            purchaseAction.selectScheduleDate({ scheduleDate })
        );
    }

    /**
     * コンテンツ選択
     */
    public selectCreativeWork(
        creativeWork: factory.chevre.creativeWork.movie.ICreativeWork
    ) {
        this.store.dispatch(
            purchaseAction.selectCreativeWork({ creativeWork })
        );
    }

    /**
     * 施設コンテンツ選択
     */
    public selectScreeningEventSeries(
        screeningEventSeries: factory.chevre.event.screeningEventSeries.IEvent
    ) {
        this.store.dispatch(
            purchaseAction.selectScreeningEventSeries({ screeningEventSeries })
        );
    }

    /**
     * スクリーン取得
     */
    public async getScreeningRoom(params: {
        limit?: number;
        page?: number;
        branchCode?: {
            $eq?: string;
        };
        containedInPlace?: {
            branchCode?: {
                $eq?: string;
            };
        };
    }) {
        try {
            this.utilService.loadStart({
                process: 'purchaseAction.GetScreeningRoom',
            });
            await this.cinerinoService.getServices();
            const searchResult = (
                await this.cinerinoService.place.searchScreeningRooms(params)
            ).data;
            this.store.dispatch(
                purchaseAction.setScreeningRoom({
                    screeningRoom: searchResult[0],
                })
            );
            this.utilService.loadEnd();
        } catch (error) {
            this.utilService.setError(error);
            this.utilService.loadEnd();
            throw error;
        }
    }

    /**
     * 座席選択
     */
    public selectSeats(seats: Models.Purchase.Reservation.IReservationSeat[]) {
        this.store.dispatch(purchaseAction.selectSeats({ seats }));
    }

    /**
     * 座席選択解除
     */
    public cancelSeats(seats: Models.Purchase.Reservation.IReservationSeat[]) {
        this.store.dispatch(purchaseAction.cancelSeats({ seats }));
    }

    /**
     * チケット選択
     */
    public selectTickets(
        reservations: Models.Purchase.Reservation.IReservation[]
    ) {
        this.store.dispatch(purchaseAction.selectTickets({ reservations }));
    }

    /**
     * クレジットカード承認
     */
    public authorizeCreditCard() {}

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
    public selectSearchType(params: { searchType: 'movie' | 'event' }) {
        this.store.dispatch(purchaseAction.selectSearchType(params));
    }

    /**
     * オーダーIDを設定
     */
    public setOrderId(params: { id: string }) {
        this.store.dispatch(purchaseAction.setOrderId(params));
    }
}
