import { Injectable } from '@angular/core';
import { factory } from '@cinerino/sdk';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable, race } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Functions, Models } from '../..';
import { getEnvironment } from '../../../environments/environment';
import { purchaseAction } from '../../store/actions';
import * as reducers from '../../store/reducers';
import { CinerinoService } from '../cinerino.service';
import { EpsonEPOSService } from '../epson-epos.service';
import { UtilService } from '../util.service';

@Injectable({
    providedIn: 'root'
})
export class PurchaseService {
    public purchase: Observable<reducers.IPurchaseState>;
    public error: Observable<string | null>;

    constructor(
        private actions: Actions,
        private store: Store<reducers.IState>,
        private utilService: UtilService,
        private cinerinoService: CinerinoService,
        private epsonEPOSService: EpsonEPOSService
    ) {
        this.purchase = this.store.pipe(select(reducers.getPurchase));
        this.error = this.store.pipe(select(reducers.getError));
    }

    /**
     * 購入データ取得
     */
    public async getData() {
        return new Promise<reducers.IPurchaseState>((resolve) => {
            this.purchase.subscribe((purchase) => {
                resolve(purchase);
            }).unsubscribe();
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
    public getSeller(id: string) {
        return new Promise<void>((resolve, reject) => {
            this.store.dispatch(purchaseAction.getSeller({ id }));
            const success = this.actions.pipe(
                ofType(purchaseAction.getSellerSuccess.type),
                tap(() => { resolve(); })
            );
            const fail = this.actions.pipe(
                ofType(purchaseAction.getSellerFail.type),
                tap(() => { this.error.subscribe((error) => { reject(error); }).unsubscribe(); })
            );
            race(success, fail).pipe(take(1)).subscribe();
        });
    }

    /**
     * スケジュール日選択
     */
    public selectScheduleDate(scheduleDate: string) {
        this.store.dispatch(purchaseAction.selectScheduleDate({ scheduleDate }));
    }

    /**
     * コンテンツ選択
     */
    public selectCreativeWork(creativeWork: factory.chevre.creativeWork.movie.ICreativeWork) {
        this.store.dispatch(purchaseAction.selectCreativeWork({ creativeWork }));
    }

    /**
     * 施設コンテンツ選択
     */
    public selectScreeningEventSeries(screeningEventSeries: factory.chevre.event.screeningEventSeries.IEvent) {
        this.store.dispatch(purchaseAction.selectScreeningEventSeries({ screeningEventSeries }));
    }

    /**
     * イベント取得
     */
    public async getScreeningEvent(screeningEvent: factory.chevre.event.screeningEvent.IEvent) {
        return new Promise<void>((resolve, reject) => {
            this.store.dispatch(purchaseAction.getScreeningEvent({ screeningEvent }));
            const success = this.actions.pipe(
                ofType(purchaseAction.getScreeningEventSuccess.type),
                tap(() => { resolve(); })
            );
            const fail = this.actions.pipe(
                ofType(purchaseAction.getScreeningEventFail.type),
                tap(() => { this.error.subscribe((error) => { reject(error); }).unsubscribe(); })
            );
            race(success, fail).pipe(take(1)).subscribe();
        });
    }

    /**
     * 取引開始
     */
    public async startTransaction(params: {
        seller: factory.chevre.seller.ISeller;
        pos?: factory.chevre.place.movieTheater.IPOS;
    }) {
        const seller = params.seller;
        const pos = params.pos;
        if (seller.id === undefined) {
            throw new Error('seller.id undefined');
        }
        const environment = getEnvironment();
        const now = (await this.utilService.getServerTime()).date;
        const identifier = [
            ...environment.PURCHASE_TRANSACTION_IDENTIFIER,
            { name: 'userAgent', value: (navigator && navigator.userAgent !== undefined) ? navigator.userAgent : '' },
            { name: 'appVersion', value: (navigator && navigator.appVersion !== undefined) ? navigator.appVersion : '' }
        ];
        if (pos !== undefined) {
            identifier.push({ name: 'posId', value: pos.id });
            identifier.push({ name: 'posName', value: pos.name });
        }
        return new Promise<void>((resolve, reject) => {
            this.store.dispatch(purchaseAction.startTransaction({
                expires: moment(now).add(environment.PURCHASE_TRANSACTION_TIME, 'minutes').toDate(),
                seller: { typeOf: params.seller.typeOf, id: <string>seller.id },
                object: {},
                agent: { identifier }
            }));
            const success = this.actions.pipe(
                ofType(purchaseAction.startTransactionSuccess.type),
                tap(() => { resolve(); })
            );
            const fail = this.actions.pipe(
                ofType(purchaseAction.startTransactionFail.type),
                tap(() => { this.error.subscribe((error) => { reject(error); }).unsubscribe(); })
            );
            race(success, fail).pipe(take(1)).subscribe();
        });
    }

    /**
     * 取引中止
     */
    public async cancelTransaction() {
        const { transaction } = await this.getData();
        return new Promise<void>((resolve) => {
            if (transaction === undefined) {
                resolve();
                return;
            }
            this.store.dispatch(purchaseAction.cancelTransaction({ transaction }));
            const success = this.actions.pipe(
                ofType(purchaseAction.cancelTransactionSuccess.type),
                tap(() => { resolve(); })
            );
            const fail = this.actions.pipe(
                ofType(purchaseAction.cancelTransactionFail.type),
                tap(() => { resolve(); })
            );
            race(success, fail).pipe(take(1)).subscribe();
        });
    }

    /**
     * 先行販売日取得
     */
    public async getPreScheduleDates(params: {
        theater: factory.chevre.place.movieTheater.IPlaceWithoutScreeningRoom;
    }) {
        try {
            this.utilService.loadStart({ process: 'purchaseAction.GetPreScheduleDates' });
            const { theater } = params;
            if (theater === undefined
                || theater.offers === undefined
                || theater.offers.availabilityStartsGraceTime === undefined
                || theater.offers.availabilityStartsGraceTime.value === undefined
                || theater.offers.availabilityStartsGraceTime.unitCode === undefined
                || theater.offers.availabilityStartsGraceTime.unitCode === undefined) {
                this.utilService.loadEnd();
                return [];
            }
            const { value, unitCode } = theater.offers.availabilityStartsGraceTime;
            const availabilityStartsGraceTime: {
                value: number;
                unit: 'day' | 'year' | 'second'
            } = {
                value: value * -1 + 1,
                unit: (unitCode === factory.chevre.unitCode.Day) ? 'day'
                    : (unitCode === factory.chevre.unitCode.Ann) ? 'year'
                        : (unitCode === factory.chevre.unitCode.Sec) ? 'second'
                            : 'second'
            };
            const superEvent = {
                ids: [],
                locationBranchCodes: (theater.branchCode === undefined) ? [] : [theater.branchCode],
                workPerformedIdentifiers: []
            };
            await this.cinerinoService.getServices();
            const now = moment((await this.utilService.getServerTime()).date).toDate();
            const today = moment(moment().format('YYYYMMDD')).toDate();
            const limit = 100;
            let page = 1;
            let roop = true;
            let screeningEvents: factory.chevre.event.screeningEvent.IEvent[] = [];
            while (roop) {
                const searchResult = await this.cinerinoService.event.search({
                    page,
                    limit,
                    typeOf: factory.chevre.eventType.ScreeningEvent,
                    eventStatuses: [factory.chevre.eventStatusType.EventScheduled],
                    superEvent: superEvent,
                    startFrom: moment(today, 'YYYYMMDD')
                        .add(availabilityStartsGraceTime.value, availabilityStartsGraceTime.unit)
                        .toDate(),
                    offers: {
                        validFrom: now,
                        validThrough: now,
                        availableFrom: now,
                        availableThrough: now
                    }
                });
                screeningEvents = screeningEvents.concat(searchResult.data);
                page++;
                roop = searchResult.data.length === limit;
                if (roop) {
                    await Functions.Util.sleep();
                }
            }
            const sheduleDates: string[] = [];
            screeningEvents.forEach((screeningEvent) => {
                const date = moment(screeningEvent.startDate).format('YYYYMMDD');
                const findResult = sheduleDates.find(s => s === date);
                if (findResult === undefined) {
                    sheduleDates.push(date);
                }
            });
            this.utilService.loadEnd();
            return sheduleDates;
        } catch (error) {
            this.utilService.setError(error);
            this.utilService.loadEnd();
            throw error;
        }
    }

    /**
     * スクリーン取得
     */
    public getScreen(params: {
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
        return new Promise<void>((resolve, reject) => {
            this.store.dispatch(purchaseAction.getScreen(params));
            const success = this.actions.pipe(
                ofType(purchaseAction.getScreenSuccess.type),
                tap(() => { resolve(); })
            );
            const fail = this.actions.pipe(
                ofType(purchaseAction.getScreenFail.type),
                tap(() => { this.error.subscribe((error) => { reject(error); }).unsubscribe(); })
            );
            race(success, fail).pipe(take(1)).subscribe();
        });
    }

    /**
     * 空席情報取得
     */
    public async getScreeningEventSeats() {
        try {
            this.utilService.loadStart({ process: 'purchaseAction.GetScreeningEventSeats' });
            const purchase = await this.getData();
            if (purchase.screeningEvent === undefined) {
                throw new Error('purchase.screeningEvent === undefined');
            }
            const screeningEvent = purchase.screeningEvent;
            const limit = 100;
            let page = 1;
            let roop = true;
            let result: factory.chevre.place.seat.IPlaceWithOffer[] = [];
            if (!new Models.Purchase.Performance(screeningEvent).isTicketedSeat()) {
                this.utilService.loadEnd();
                return result;
            }
            await this.cinerinoService.getServices();
            while (roop) {
                const searchResult = await this.cinerinoService.event.searchSeats({
                    event: { id: screeningEvent.id },
                    page,
                    limit
                });
                result = [...result, ...searchResult.data];
                page++;
                roop = searchResult.data.length === limit;
                if (roop) {
                    await Functions.Util.sleep();
                }
            }
            this.utilService.loadEnd();
            return result;
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
     * 券種一覧取得
     */
    public async getTicketList(params: {
        seller: factory.chevre.seller.ISeller
    }) {
        const purchase = await this.getData();
        return new Promise<void>((resolve, reject) => {
            const screeningEvent = purchase.screeningEvent;
            if (screeningEvent === undefined) {
                reject();
                return;
            }
            this.store.dispatch(purchaseAction.getTicketList({ screeningEvent, seller: params.seller }));
            const success = this.actions.pipe(
                ofType(purchaseAction.getTicketListSuccess.type),
                tap(() => { resolve(); })
            );
            const fail = this.actions.pipe(
                ofType(purchaseAction.getTicketListFail.type),
                tap(() => { this.error.subscribe((error) => { reject(error); }).unsubscribe(); })
            );
            race(success, fail).pipe(take(1)).subscribe();
        });
    }

    /**
     * チケット選択
    */
    public selectTickets(reservations: Models.Purchase.Reservation.IReservation[]) {
        this.store.dispatch(purchaseAction.selectTickets({ reservations }));
    }

    /**
     * 座席仮予約
     */
    public async temporaryReservation(params: {
        reservations: Models.Purchase.Reservation.IReservation[];
        additionalTicketText?: string;
        screeningEventSeats: factory.chevre.place.seat.IPlaceWithOffer[];
    }) {
        const additionalTicketText = params.additionalTicketText;
        const reservations = params.reservations;
        const purchase = await this.getData();
        return new Promise<void>((resolve, reject) => {
            const transaction = purchase.transaction;
            const screeningEvent = purchase.screeningEvent;
            const screeningEventSeats = params.screeningEventSeats;
            if (transaction === undefined || screeningEvent === undefined) {
                reject();
                return;
            }
            const authorizeSeatReservation = purchase.authorizeSeatReservation;
            this.store.dispatch(purchaseAction.temporaryReservation({
                reservations: reservations.map((reservation) => {
                    return {
                        seat: reservation.seat,
                        ticket: (reservation.ticket === undefined)
                            ? { ticketOffer: purchase.screeningEventTicketOffers[0] }
                            : reservation.ticket
                    };
                }),
                transaction,
                screeningEvent,
                authorizeSeatReservation,
                screeningEventSeats,
                additionalTicketText
            }));
            const success = this.actions.pipe(
                ofType(purchaseAction.temporaryReservationSuccess.type),
                tap(() => { resolve(); })
            );

            const fail = this.actions.pipe(
                ofType(purchaseAction.temporaryReservationFail.type),
                tap(() => { this.error.subscribe((error) => { reject(error); }).unsubscribe(); })
            );
            race(success, fail).pipe(take(1)).subscribe();
        });
    }

    /**
     * 座席仮予約取り消し
     */
    public async cancelTemporaryReservations(
        authorizeSeatReservations: factory.action.authorize.offer.seatReservation.IAction<factory.service.webAPI.Identifier.Chevre>[]
    ) {
        return new Promise<void>((resolve, reject) => {
            this.store.dispatch(purchaseAction.cancelTemporaryReservations({ authorizeSeatReservations }));
            const success = this.actions.pipe(
                ofType(purchaseAction.cancelTemporaryReservationsSuccess.type),
                tap(() => { resolve(); })
            );
            const fail = this.actions.pipe(
                ofType(purchaseAction.cancelTemporaryReservationsFail.type),
                tap(() => { this.error.subscribe((error) => { reject(error); }).unsubscribe(); })
            );
            race(success, fail).pipe(take(1)).subscribe();
        });
    }

    /**
     * 購入者情報登録
     */
    public async registerContact(contact: factory.person.IProfile) {
        const purchase = await this.getData();
        const transaction = purchase.transaction;
        return new Promise<void>((resolve, reject) => {
            if (transaction === undefined) {
                reject();
                return;
            }
            this.store.dispatch(purchaseAction.registerContact({ transaction, contact }));
            const success = this.actions.pipe(
                ofType(purchaseAction.registerContactSuccess.type),
                tap(() => { resolve(); })
            );
            const fail = this.actions.pipe(
                ofType(purchaseAction.registerContactFail.type),
                tap(() => { this.error.subscribe((error) => { reject(error); }).unsubscribe(); })
            );
            race(success, fail).pipe(take(1)).subscribe();
        });
    }

    /**
     * クレジットカード承認
     */
    public authorizeCreditCard() {

    }

    /**
     * ムビチケ承認
     */
    public async authorizeMovieTicket(params: {
        seller: factory.chevre.seller.ISeller
    }) {
        const purchase = await this.getData();
        return new Promise<void>((resolve, reject) => {
            if (purchase.transaction === undefined) {
                reject();
                return;
            }
            this.store.dispatch(purchaseAction.authorizeMovieTicket({
                transaction: purchase.transaction,
                authorizeMovieTicketPayments: purchase.authorizeMovieTicketPayments,
                authorizeSeatReservations: purchase.authorizeSeatReservations,
                pendingMovieTickets: purchase.pendingMovieTickets,
                seller: params.seller
            }));
            const success = this.actions.pipe(
                ofType(purchaseAction.authorizeMovieTicketSuccess.type),
                tap(() => { resolve(); })
            );
            const fail = this.actions.pipe(
                ofType(purchaseAction.authorizeMovieTicketFail.type),
                tap(() => { this.error.subscribe((error) => { reject(error); }).unsubscribe(); })
            );
            race(success, fail).pipe(take(1)).subscribe();
        });
    }

    /**
     * ムビチケ認証
     */
    public async checkMovieTicket(params: {
        movieTicket: { code: string; password: string; };
        paymentMethodType: factory.paymentMethodType
    }) {
        const movieTicket = params.movieTicket;
        const paymentMethodType = params.paymentMethodType;
        const { transaction, screeningEvent } = await this.getData();
        return new Promise<void>((resolve, reject) => {
            if (transaction === undefined
                || screeningEvent === undefined) {
                reject();
                return;
            }
            this.store.dispatch(purchaseAction.checkMovieTicket({
                transaction,
                screeningEvent,
                movieTickets: [{
                    typeOf: paymentMethodType,
                    identifier: movieTicket.code, // 購入管理番号
                    accessCode: movieTicket.password // PINコード
                }]
            }));
            const success = this.actions.pipe(
                ofType(purchaseAction.checkMovieTicketSuccess.type),
                tap(() => { resolve(); })
            );
            const fail = this.actions.pipe(
                ofType(purchaseAction.checkMovieTicketFail.type),
                tap(() => { this.error.subscribe((error) => { reject(error); }).unsubscribe(); })
            );
            race(success, fail).pipe(take(1)).subscribe();
        });
    }

    /**
     * 取引確定
     */
    public async endTransaction(params: {
        seller: factory.chevre.seller.ISeller;
        language: string;
    }) {
        const purchase = await this.getData();
        const seller = params.seller;
        const language = params.language;
        return new Promise<void>((resolve, reject) => {
            if (purchase.transaction === undefined) {
                reject();
                return;
            }
            const transaction = purchase.transaction;
            const authorizeSeatReservations = purchase.authorizeSeatReservations;
            this.store.dispatch(purchaseAction.endTransaction({
                transaction, authorizeSeatReservations, seller, language
            }));
            const success = this.actions.pipe(
                ofType(purchaseAction.endTransactionSuccess.type),
                tap(() => { resolve(); })
            );
            const fail = this.actions.pipe(
                ofType(purchaseAction.endTransactionFail.type),
                tap(() => { this.error.subscribe((error) => { reject(error); }).unsubscribe(); })
            );
            race(success, fail).pipe(take(1)).subscribe();
        });
    }

    /**
     * GMOトークン作成
     */
    public createGmoTokenObject() {

    }

    /**
     * 決済情報承認
     */
    public async authorizeAnyPayment(params: {
        amount: number;
        additionalProperty?: { name: string; value: any; }[]
    }) {
        const { amount, additionalProperty } = params;
        const purchase = await this.getData();
        return new Promise<void>((resolve, reject) => {
            if (purchase.transaction === undefined || purchase.paymentMethod === undefined) {
                reject();
                return;
            }
            const transaction = purchase.transaction;
            this.store.dispatch(purchaseAction.authorizeAnyPayment({
                transaction: transaction,
                paymentMethod: purchase.paymentMethod.typeOf,
                amount,
                additionalProperty
            }));
            const success = this.actions.pipe(
                ofType(purchaseAction.authorizeAnyPaymentSuccess.type),
                tap(() => { resolve(); })
            );
            const fail = this.actions.pipe(
                ofType(purchaseAction.authorizeAnyPaymentFail.type),
                tap(() => { this.error.subscribe((error) => { reject(error); }).unsubscribe(); })
            );
            race(success, fail).pipe(take(1)).subscribe();
        });
    }

    /**
     * 決済方法取得
     */
    public selectPaymentMethodType(params: {
        typeOf: factory.chevre.paymentMethodType;
        category?: string;
    }) {
        this.store.dispatch(purchaseAction.selectPaymentMethodType(params));
    }

    /**
     * 検索方法選択
     */
    public selectSearchType(params: {
        searchType: 'movie' | 'event';
    }) {
        this.store.dispatch(purchaseAction.selectSearchType(params));
    }

    /**
     * オーダーIDを設定
     */
    public setOrderId(params: {
        id: string;
    }) {
        this.store.dispatch(purchaseAction.setOrderId(params));
    }

    /**
     * 預金返済
     */
    public async depositRepay(_params: { ipAddress: string; }) {
        try {
            this.utilService.loadStart({ process: 'load' });
            const { paymentMethod } = await this.getData();
            if (paymentMethod?.typeOf === factory.chevre.paymentMethodType.Cash) {
                await this.epsonEPOSService.cashchanger.endDepositRepay();
                await this.epsonEPOSService.cashchanger.disconnect();
            }
            this.utilService.loadEnd();
        } catch (error) {
            console.error(error);
            this.utilService.loadEnd();
            throw error;
        }
    }
}
