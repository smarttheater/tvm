import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as decode from 'jwt-decode';
import { map, mergeMap } from 'rxjs/operators';
import { CinerinoService } from '../../services/cinerino.service';
import {
    ActionTypes,
    Admission,
    AdmissionFail,
    AdmissionSuccess,
    ConvertQrcodeToToken,
    ConvertQrcodeToTokenFail,
    ConvertQrcodeToTokenSuccess,
    GetScreeningEventReservations,
    GetScreeningEventReservationsFail,
    GetScreeningEventReservationsSuccess,
    GetScreeningEvents,
    GetScreeningEventsFail,
    GetScreeningEventsSuccess,
    GetTheaters,
    GetTheatersFail,
    GetTheatersSuccess
} from '../actions';

/**
 * Effects
 */
@Injectable()
export class Effects {

    constructor(
        private actions: Actions,
        private cinerino: CinerinoService,
    ) { }

    /**
     * getTheaters
     */
    @Effect()
    public getTheaters = this.actions.pipe(
        ofType<GetTheaters>(ActionTypes.GetTheaters),
        map(action => action.payload),
        mergeMap(async (payload) => {
            // console.log(payload);
            try {
                await this.cinerino.getServices();
                const movieTheaters = await this.cinerino.organization.searchMovieTheaters(payload.params);
                return new GetTheatersSuccess({ movieTheaters });
            } catch (error) {
                return new GetTheatersFail({ error: error });
            }
        })
    );

    /**
     * getScreeningEvents
     */
    @Effect()
    public getScreeningEvents = this.actions.pipe(
        ofType<GetScreeningEvents>(ActionTypes.GetScreeningEvents),
        map(action => action.payload),
        mergeMap(async (payload) => {
            // console.log(payload);
            try {
                await this.cinerino.getServices();
                const screeningEvents = await this.cinerino.event.searchScreeningEvents(payload.params);
                return new GetScreeningEventsSuccess({ screeningEvents });
            } catch (error) {
                return new GetScreeningEventsFail({ error: error });
            }
        })
    );

    /**
     * getScreeningEventReservations
     */
    @Effect()
    public getScreeningEventReservations = this.actions.pipe(
        ofType<GetScreeningEventReservations>(ActionTypes.GetScreeningEventReservations),
        map(action => action.payload),
        mergeMap(async (payload) => {
            // console.log(payload);
            try {
                await this.cinerino.getServices();
                const screeningEventReservations = await this.cinerino.reservation.searchScreeningEventReservations(payload.params);
                return new GetScreeningEventReservationsSuccess({ screeningEventReservations });
            } catch (error) {
                return new GetScreeningEventReservationsFail({ error: error });
            }
        })
    );

    /**
     * convertQrcodeToToken
     */
    @Effect()
    public convertQrcodeToToken = this.actions.pipe(
        ofType<ConvertQrcodeToToken>(ActionTypes.ConvertQrcodeToToken),
        map(action => action.payload),
        mergeMap(async (payload) => {
            // console.log(payload);
            try {
                await this.cinerino.getServices();
                const { token } = await this.cinerino.admin.ownershipInfo.getToken(payload.params);
                const decodeResult = decode<any>(token);
                const reservationByToken = <{ id: string }>decodeResult.typeOfGood;
                const checkTokenActions = await this.cinerino.admin.ownershipInfo.searchCheckTokenActions({ id: decodeResult.id });
                return new ConvertQrcodeToTokenSuccess({ token, reservationByToken, checkTokenActions });
            } catch (error) {
                return new ConvertQrcodeToTokenFail({ error: error });
            }
        })
    );

    /**
     * Admission
     */
    @Effect()
    public Admission = this.actions.pipe(
        ofType<Admission>(ActionTypes.Admission),
        map(action => action.payload),
        mergeMap(async (payload) => {
            // console.log(payload);
            try {
                await this.cinerino.getServices();
                this.cinerino.reservation.findScreeningEventReservationByToken(payload.params);
                return new AdmissionSuccess();
            } catch (error) {
                return new AdmissionFail({ error: error });
            }
        })
    );
}
