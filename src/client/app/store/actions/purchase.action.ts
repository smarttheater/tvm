import { factory } from '@cinerino/sdk';
import { createAction, props } from '@ngrx/store';
import { Models } from '../..';

const LABEL = '[Purchase]';

export const remove = createAction(`${LABEL} Remove`);

export const unsettledDelete = createAction(`${LABEL} unsettledDelete`);

export const selectScheduleDate = createAction(
    `${LABEL} selectScheduleDate`,
    props<{ scheduleDate: string }>()
);

export const selectCreativeWork = createAction(
    `${LABEL} selectCreativeWork`,
    props<{ creativeWork: factory.chevre.creativeWork.movie.ICreativeWork }>()
);

export const selectScreeningEventSeries = createAction(
    `${LABEL} selectScreeningEventSeries`,
    props<{
        screeningEventSeries: factory.chevre.event.screeningEventSeries.IEvent;
    }>()
);

export const setSeller = createAction(
    `${LABEL} setSeller`,
    props<{
        seller: factory.chevre.seller.ISeller;
    }>()
);

export const setScreeningEvent = createAction(
    `${LABEL} setScreeningEvent`,
    props<{
        screeningEvent: factory.chevre.event.screeningEvent.IEvent;
    }>()
);

export const setTransaction = createAction(
    `${LABEL} setTransaction`,
    props<{
        transaction: factory.transaction.placeOrder.ITransaction;
    }>()
);

export const cancelTransaction = createAction(`${LABEL} cancelTransaction`);

export const setScreeningRoom = createAction(
    `${LABEL} setScreeningRoom`,
    props<{ screeningRoom: factory.chevre.place.screeningRoom.IPlace }>()
);

export const selectSeats = createAction(
    `${LABEL} selectSeats`,
    props<{ seats: Models.Purchase.Reservation.IReservationSeat[] }>()
);

export const cancelSeats = createAction(
    `${LABEL} cancelSeats`,
    props<{ seats: Models.Purchase.Reservation.IReservationSeat[] }>()
);

export const setTicketOffers = createAction(
    `${LABEL} setTicketOffers`,
    props<{
        ticketOffers: factory.chevre.event.screeningEvent.ITicketOffer[];
    }>()
);

export const selectTickets = createAction(
    `${LABEL} selectTickets`,
    props<{ reservations: Models.Purchase.Reservation.IReservation[] }>()
);

export const setAuthorizeSeatReservation = createAction(
    `${LABEL} setAuthorizeSeatReservation`,
    props<{
        authorizeSeatReservation?: factory.action.authorize.offer.seatReservation.IAction<factory.service.webAPI.Identifier.Chevre>;
        authorizeSeatReservations: factory.action.authorize.offer.seatReservation.IAction<factory.service.webAPI.Identifier.Chevre>[];
        pendingMovieTickets: Models.Purchase.MovieTicket.IMovieTicket[];
        temporarilyReserved: Models.Purchase.Reservation.ITemporarilyReserved[];
    }>()
);

export const setProfile = createAction(
    `${LABEL} setProfile`,
    props<{ profile: factory.person.IProfile }>()
);

export const setAuthorizeMovieTicket = createAction(
    `${LABEL} authorizeResults`,
    props<{
        authorizeResults: factory.action.authorize.paymentMethod.any.IAction[];
    }>()
);

export const setCheckMovieTicket = createAction(
    `${LABEL} setCheckMovieTicket`,
    props<{
        checkMovieTicket: factory.action.check.paymentMethod.movieTicket.IAction;
    }>()
);

export const setOrder = createAction(
    `${LABEL} setOrder`,
    props<{ order: factory.order.IOrder }>()
);

export const setAuthorizeAnyPayment = createAction(
    `${LABEL} setAuthorizeAnyPayment`,
    props<{
        authorizeResult: factory.action.authorize.paymentMethod.any.IAction;
    }>()
);

export const setPaymentMethodType = createAction(
    `${LABEL} setPaymentMethodType`,
    props<{
        paymentMethod?: {
            typeOf: string;
        };
    }>()
);

export const selectSearchType = createAction(
    `${LABEL} selectSearchType`,
    props<{
        searchType: 'movie' | 'event';
    }>()
);

export const setOrderId = createAction(
    `${LABEL} setOrderId`,
    props<{ id: string }>()
);

export const setCheckProduct = createAction(
    `${LABEL} setCheckProduct`,
    props<{
        checkProduct: {
            code: string;
            token: string;
            typeOfGood: factory.permit.IPermit;
        };
    }>()
);
