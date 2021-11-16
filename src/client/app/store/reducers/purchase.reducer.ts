import { factory } from '@cinerino/sdk';
import { Action, createReducer, on } from '@ngrx/store';
import { IState } from '.';
import { Functions, Models } from '../..';
import { purchaseAction } from '../actions';

/**
 * IPurchaseState
 */
export interface IPurchaseState {
    /**
     * 販売者
     */
    seller?: factory.chevre.seller.ISeller;
    /**
     * コンテンツ
     */
    creativeWork?: factory.chevre.creativeWork.movie.ICreativeWork;
    /**
     * 施設コンテンツ
     */
    screeningEventSeries?: factory.chevre.event.screeningEventSeries.IEvent;
    /**
     * イベント
     */
    screeningEvent?: factory.chevre.event.screeningEvent.IEvent;
    /**
     * スケジュール日付
     */
    scheduleDate?: string;
    /**
     * 取引
     */
    transaction?: factory.transaction.placeOrder.ITransaction;
    /**
     * スクリーン
     */
    screen?: factory.chevre.place.screeningRoom.IPlace;
    /**
     * 予約
     */
    reservations: Models.Purchase.Reservation.IReservation[];
    /**
     * 仮予約済み
     */
    temporarilyReserved: Models.Purchase.Reservation.ITemporarilyReserved[];
    /**
     * 券種
     */
    screeningEventTicketOffers: factory.chevre.event.screeningEvent.ITicketOffer[];
    /**
     * 座席予約
     */
    authorizeSeatReservation?: factory.action.authorize.offer.seatReservation.IAction<factory.service.webAPI.Identifier.Chevre>;
    /**
     * 座席予約リスト
     */
    authorizeSeatReservations: factory.action.authorize.offer.seatReservation.IAction<factory.service.webAPI.Identifier.Chevre>[];
    /**
     * プロフィール
     */
    profile?: factory.person.IProfile;
    /**
     * クレジットカード決済
     */
    authorizeCreditCardPayments: factory.action.authorize.paymentMethod.any.IAction[];
    /**
     * ムビチケ決済
     */
    authorizeMovieTicketPayments: factory.action.authorize.paymentMethod.any.IAction[];
    /**
     * GMOオブジェクト
     */
    gmoTokenObject?: any;
    /**
     * オーダーカウント
     */
    orderCount: number;
    /**
     * オーダーID
     */
    orderId?: string;
    /**
     * 注文
     */
    order?: factory.order.IOrder;
    /**
     * ムビチケ認証情報リスト
     */
    checkMovieTickets: factory.action.check.paymentMethod.movieTicket.IAction[];
    /**
     * 決済
     */
    authorizeAnyPayments: factory.action.authorize.paymentMethod.any.IAction[];
    /**
     * 支払い方法
     */
    paymentMethod?: {
        typeOf: string;
    };
    /**
     * 使用中ムビチケ
     */
    pendingMovieTickets: Models.Purchase.MovieTicket.IMovieTicket[];
    /**
     * 検索方法
     */
    searchType?: 'movie' | 'event';
    /**
     * プロダクト認証情報リスト
     */
    checkProducts: {
        code: string;
        token: string;
        typeOfGood: factory.product.IProduct;
    }[];
}

export const purchaseInitialState: IPurchaseState = {
    reservations: [],
    temporarilyReserved: [],
    screeningEventTicketOffers: [],
    orderCount: 0,
    checkMovieTickets: [],
    checkProducts: [],
    authorizeSeatReservations: [],
    authorizeMovieTicketPayments: [],
    authorizeCreditCardPayments: [],
    authorizeAnyPayments: [],
    pendingMovieTickets: [],
};

export function reducer(initialState: IState, action: Action) {
    return createReducer(
        initialState,
        on(purchaseAction.remove, (state) => {
            return {
                ...state,
                purchaseData: {
                    reservations: [],
                    temporarilyReserved: [],
                    screeningEventTicketOffers: [],
                    orderCount: 0,
                    checkMovieTickets: [],
                    checkProducts: [],
                    authorizeSeatReservations: [],
                    authorizeMovieTicketPayments: [],
                    authorizeCreditCardPayments: [],
                    authorizeAnyPayments: [],
                    pendingMovieTickets: [],
                },
            };
        }),
        on(purchaseAction.unsettledDelete, (state) => {
            return {
                ...state,
                purchaseData: {
                    ...state.purchaseData,
                    reservations: [],
                    screeningEvent: undefined,
                    screeningEventTicketOffers: [],
                    authorizeSeatReservation: undefined,
                },
            };
        }),
        on(purchaseAction.setSeller, (state, payload) => {
            const seller = payload.seller;
            return {
                ...state,
                purchaseData: { ...state.purchaseData, seller },
                process: '',
                error: null,
            };
        }),
        on(purchaseAction.selectScheduleDate, (state, payload) => {
            const scheduleDate = payload.scheduleDate;
            return {
                ...state,
                purchaseData: { ...state.purchaseData, scheduleDate },
                process: '',
                error: null,
            };
        }),
        on(purchaseAction.selectCreativeWork, (state, payload) => {
            const creativeWork = payload.creativeWork;
            return {
                ...state,
                purchaseData: { ...state.purchaseData, creativeWork },
                process: '',
                error: null,
            };
        }),
        on(purchaseAction.selectScreeningEventSeries, (state, payload) => {
            const screeningEventSeries = payload.screeningEventSeries;
            return {
                ...state,
                purchaseData: { ...state.purchaseData, screeningEventSeries },
                process: '',
                error: null,
            };
        }),
        on(purchaseAction.setScreeningEvent, (state, payload) => {
            const screeningEvent = payload.screeningEvent;
            return {
                ...state,
                purchaseData: { ...state.purchaseData, screeningEvent },
                process: '',
                error: null,
            };
        }),
        on(purchaseAction.setTransaction, (state, payload) => {
            const transaction = payload.transaction;
            return {
                ...state,
                purchaseData: {
                    ...state.purchaseData,
                    transaction,
                    authorizeAnyPayments: [],
                    authorizeMovieTicketPayments: [],
                    authorizeSeatReservations: [],
                    temporarilyReserved: [],
                    pendingMovieTickets: [],
                    checkMovieTickets: [],
                    checkProducts: [],
                },
                process: '',
                error: null,
            };
        }),
        on(purchaseAction.cancelTransaction, (state) => {
            const transaction = undefined;
            return {
                ...state,
                purchaseData: {
                    ...state.purchaseData,
                    transaction,
                    authorizeAnyPayments: [],
                    authorizeMovieTicketPayments: [],
                    authorizeSeatReservations: [],
                    temporarilyReserved: [],
                    pendingMovieTickets: [],
                    checkMovieTickets: [],
                    checkProducts: [],
                },
                process: '',
            };
        }),
        on(purchaseAction.setScreeningRoom, (state, payload) => {
            const screen = payload.screeningRoom;
            return {
                ...state,
                purchaseData: {
                    ...state.purchaseData,
                    screen,
                },
                process: '',
                error: null,
            };
        }),
        on(purchaseAction.selectSeats, (state, payload) => {
            const reservations = Functions.Util.deepCopy<
                Models.Purchase.Reservation.IReservation[]
            >(state.purchaseData.reservations);
            payload.seats.forEach((seat) => {
                reservations.push({ seat });
            });
            return {
                ...state,
                purchaseData: {
                    ...state.purchaseData,
                    reservations,
                },
                process: '',
                error: null,
            };
        }),
        on(purchaseAction.cancelSeats, (state, payload) => {
            const reservations: Models.Purchase.Reservation.IReservation[] = [];
            const seats = payload.seats;
            state.purchaseData.reservations.forEach((reservation) => {
                const findResult = seats.find((seat) => {
                    return (
                        reservation.seat !== undefined &&
                        reservation.seat.seatNumber === seat.seatNumber &&
                        reservation.seat.seatSection === seat.seatSection
                    );
                });
                if (findResult === undefined) {
                    reservations.push(reservation);
                }
            });
            return {
                ...state,
                purchaseData: {
                    ...state.purchaseData,
                    reservations,
                },
                process: '',
                error: null,
            };
        }),
        on(purchaseAction.setTicketOffers, (state, payload) => {
            const screeningEventTicketOffers = payload.ticketOffers;
            return {
                ...state,
                purchaseData: {
                    ...state.purchaseData,
                    screeningEventTicketOffers,
                },
                process: '',
                error: null,
            };
        }),
        on(purchaseAction.selectTickets, (state, payload) => {
            const reservations: Models.Purchase.Reservation.IReservation[] = [];
            const selectedReservations = payload.reservations;
            state.purchaseData.reservations.forEach((reservation) => {
                const findResult = selectedReservations.find((r) => {
                    return (
                        reservation.seat?.seatNumber === r.seat?.seatNumber &&
                        reservation.seat?.seatRow === r.seat?.seatRow &&
                        reservation.seat?.seatSection === r.seat?.seatSection
                    );
                });
                if (findResult === undefined) {
                    reservations.push(reservation);
                } else {
                    reservations.push(findResult);
                }
            });
            return {
                ...state,
                purchaseData: {
                    ...state.purchaseData,
                    reservations,
                },
            };
        }),
        on(purchaseAction.setAuthorizeSeatReservation, (state, payload) => {
            const {
                authorizeSeatReservation,
                authorizeSeatReservations,
                pendingMovieTickets,
                temporarilyReserved,
            } = payload;
            return {
                ...state,
                purchaseData: {
                    ...state.purchaseData,
                    authorizeSeatReservations,
                    pendingMovieTickets,
                    authorizeSeatReservation:
                        authorizeSeatReservation === undefined
                            ? state.purchaseData.authorizeSeatReservation
                            : authorizeSeatReservation,
                    temporarilyReserved,
                },
                process: '',
                error: null,
            };
        }),
        on(purchaseAction.setProfile, (state, payload) => {
            const profile = payload.profile;
            return {
                ...state,
                purchaseData: {
                    ...state.purchaseData,
                    profile,
                },
                process: '',
                error: null,
            };
        }),
        on(purchaseAction.setAuthorizeMovieTicket, (state, payload) => {
            const authorizeMovieTicketPayments = payload.authorizeResults;
            return {
                ...state,
                purchaseData: {
                    ...state.purchaseData,
                    authorizeMovieTicketPayments,
                },
                process: '',
                error: null,
            };
        }),
        on(purchaseAction.setCheckMovieTicket, (state, payload) => {
            const checkMovieTicket = payload.checkMovieTicket;
            const checkMovieTickets = Functions.Util.deepCopy<
                factory.action.check.paymentMethod.movieTicket.IAction[]
            >(state.purchaseData.checkMovieTickets);
            const sameMovieTicketFilterResults =
                Functions.Purchase.sameMovieTicketFilter({
                    checkMovieTicket,
                    checkMovieTickets,
                });
            if (
                sameMovieTicketFilterResults.length === 0 &&
                Functions.Purchase.isAvailabilityMovieTicket(checkMovieTicket)
            ) {
                checkMovieTickets.push(checkMovieTicket);
            }

            return {
                ...state,
                purchaseData: {
                    ...state.purchaseData,
                    checkMovieTickets,
                },
                process: '',
                error: null,
            };
        }),
        on(purchaseAction.setOrder, (state, payload) => {
            const order = payload.order;
            return {
                ...state,
                purchaseData: {
                    reservations: [],
                    temporarilyReserved: [],
                    screeningEventTicketOffers: [],
                    orderCount: 0,
                    authorizeSeatReservations: [],
                    checkMovieTickets: [],
                    checkProducts: [],
                    authorizeCreditCardPayments: [],
                    authorizeMovieTicketPayments: [],
                    authorizeAnyPayments: [],
                    pendingMovieTickets: [],
                    order,
                },
                process: '',
                error: null,
            };
        }),
        on(purchaseAction.setAuthorizeAnyPayment, (state, payload) => {
            const authorizeAnyPayment = payload.authorizeResult;
            const authorizeAnyPayments = Functions.Util.deepCopy<
                factory.action.authorize.paymentMethod.any.IAction[]
            >(state.purchaseData.authorizeAnyPayments);
            authorizeAnyPayments.push(authorizeAnyPayment);
            return {
                ...state,
                purchaseData: {
                    ...state.purchaseData,
                    authorizeAnyPayments,
                },
                process: '',
                error: null,
            };
        }),
        on(purchaseAction.setPaymentMethodType, (state, payload) => {
            const paymentMethod = payload.paymentMethod;

            return {
                ...state,
                purchaseData: {
                    ...state.purchaseData,
                    paymentMethod,
                },
                process: '',
                error: null,
            };
        }),
        on(purchaseAction.selectSearchType, (state, payload) => {
            return {
                ...state,
                purchaseData: {
                    ...state.purchaseData,
                    searchType: payload.searchType,
                },
            };
        }),
        on(purchaseAction.setOrderId, (state, payload) => {
            return {
                ...state,
                purchaseData: {
                    ...state.purchaseData,
                    orderId: payload.id,
                },
            };
        }),
        on(purchaseAction.setCheckProduct, (state, payload) => {
            // const checkProducts = Functions.Util.deepCopy<
            //     {
            //         code: string;
            //         token: string;
            //         typeOfGood: factory.chevre.product.IProduct;
            //     }[]
            // >(state.purchaseData.checkProducts);
            // const identifier = payload.checkProduct.typeOfGood.identifier;
            // const findResult = state.purchaseData.checkProducts.find(
            //     (c) => c.typeOfGood.identifier === identifier
            // );
            // if (findResult === undefined) {
            //     checkProducts.push(payload.checkProduct);
            // }
            const checkProducts = [payload.checkProduct];
            return {
                ...state,
                purchaseData: {
                    ...state.purchaseData,
                    checkProducts,
                },
                process: '',
                error: null,
            };
        })
    )(initialState, action);
}
