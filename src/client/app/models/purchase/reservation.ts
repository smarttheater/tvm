import { factory } from '@cinerino/sdk';

export interface IReservation {
    seat?: IReservationSeat;
    ticket?: IReservationTicket;
}

/**
 * IReservationSeat
 */
export interface IReservationSeat
    extends factory.chevre.reservation
        .ISeat<factory.chevre.reservationType.EventReservation> {
    offers?: factory.chevre.place.seat.IOffer[];
}

/**
 * IReservationTicket
 */
export interface IReservationTicket {
    ticketOffer: factory.chevre.event.screeningEvent.ITicketOffer;
    movieTicket?: factory.chevre.paymentMethod.paymentCard.movieTicket.IMovieTicket;
    addOn?: factory.chevre.offer.IOffer[];
}

export interface ITemporarilyReserved {
    reservations: IReservation[];
    screeningEvent?: factory.chevre.event.screeningEvent.IEvent;
    id: string;
}
