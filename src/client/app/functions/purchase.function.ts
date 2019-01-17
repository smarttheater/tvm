import { factory } from '@cinerino/api-javascript-client';

export interface IScreeningEventFilm {
    info: factory.chevre.event.screeningEvent.IEvent;
    data: factory.chevre.event.screeningEvent.IEvent[];
}

export interface IGmoTokenObject {
    token: string;
    toBeExpiredAt: string;
    maskedCardNo: string;
    isSecurityCodeSet: boolean;
}

export interface IEventOrder {
    event: factory.chevre.event.screeningEvent.IEvent;
    data: factory.order.IAcceptedOffer<factory.order.IItemOffered>[];
}

/**
 * 作品別イベントへ変換
 */
export function screeningEventsToFilmEvents(params: {
    screeningEvents: factory.chevre.event.screeningEvent.IEvent[]
}) {
    const films: IScreeningEventFilm[] = [];
    const screeningEvents = params.screeningEvents;
    screeningEvents.forEach((screeningEvent) => {
        const registered = films.find((film) => {
            return (film.info.superEvent.id === screeningEvent.superEvent.id);
        });
        if (registered === undefined) {
            films.push({
                info: screeningEvent,
                data: [screeningEvent]
            });
        } else {
            registered.data.push(screeningEvent);
        }
    });

    return films;
}

/**
 * イベント別オーダーへ変換
 */
export function orderToEventOrders(params: {
    order: factory.order.IOrder
}) {
    const results: IEventOrder[] = [];
    const order = params.order;
    order.acceptedOffers.forEach((acceptedOffer) => {
        const registered = results.find((result) => {
            return (result.event.id === acceptedOffer.itemOffered.reservationFor.id);
        });
        if (registered === undefined) {
            results.push({
                event: acceptedOffer.itemOffered.reservationFor,
                data: [acceptedOffer]
            });
        } else {
            registered.data.push(acceptedOffer);
        }
    });

    return results;
}
