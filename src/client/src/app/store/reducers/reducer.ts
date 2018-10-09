import { ISearchResult } from '@cinerino/api-abstract-client/lib/service';
import { ITokenResponse } from '@cinerino/api-abstract-client/lib/service/ownershipInfo';
import { IScreeningEventReservation } from '@cinerino/api-abstract-client/lib/service/reservation';
import { factory } from '@cinerino/api-javascript-client';
import { Actions, ActionTypes } from '../actions';


/**
 * State
 */
export interface IState {
    loading: boolean;
    error: string | null;
    movieTheaters: ISearchResult<factory.organization.movieTheater.IOrganization[]>;
    movieTheater?: factory.organization.movieTheater.IOrganization;
    screeningEvents: ISearchResult<factory.chevre.event.screeningEvent.IEvent[]>;
    screeningEvent?: factory.chevre.event.screeningEvent.IEvent;
    screeningEventReservations: {
        totalCount: number;
        data: IScreeningEventReservation[];
    };
    qrcodeTokenList: {
        token: string;
        reservationByToken: { id: string };
        checkTokenActions: ITokenResponse;
        isAvailable: boolean;
    }[];
}

/**
 * Initial state
 */
export const initialState: IState = {
    loading: false,
    error: null,
    movieTheaters: { totalCount: 0, data: [] },
    screeningEvents: { totalCount: 0, data: [] },
    screeningEventReservations: { totalCount: 0, data: [] },
    qrcodeTokenList: []
};

function getInitialState(): IState {
    const json = localStorage.getItem('state');
    if (json === undefined || json === null) {
        return initialState;
    }
    const data: { App: IState } = JSON.parse(json);
    return data.App;
}

/**
 * Reducer
 * @param state
 * @param action
 */
export function reducer(
    state = getInitialState(),
    action: Actions
): IState {
    switch (action.type) {
        case ActionTypes.Delete: {
            return { ...state };
        }
        case ActionTypes.GetTheaters: {
            return { ...state, loading: true };
        }
        case ActionTypes.GetTheatersSuccess: {
            const movieTheaters = action.payload.movieTheaters;
            return { ...state, loading: false, error: null, movieTheaters };
        }
        case ActionTypes.GetTheatersFail: {
            const error = action.payload.error;
            return { ...state, loading: false, error: JSON.stringify(error) };
        }
        case ActionTypes.SelectTheater: {
            const movieTheater = action.payload.movieTheater;
            return { ...state, loading: false, error: null, movieTheater };
        }
        case ActionTypes.GetScreeningEvents: {
            return { ...state, loading: true };
        }
        case ActionTypes.GetScreeningEventsSuccess: {
            const screeningEvents = action.payload.screeningEvents;
            return { ...state, loading: false, error: null, screeningEvents };
        }
        case ActionTypes.GetScreeningEventsFail: {
            const error = action.payload.error;
            return { ...state, loading: false, error: JSON.stringify(error) };
        }
        case ActionTypes.SelectScreeningEvent: {
            const screeningEvent = action.payload.screeningEvent;
            return { ...state, loading: false, error: null, screeningEvent };
        }
        case ActionTypes.ConvertQrcodeToToken: {
            return { ...state, loading: true, error: null };
        }
        case ActionTypes.ConvertQrcodeToTokenSuccess: {
            const token = action.payload.token;
            const reservationByToken = action.payload.reservationByToken;
            const checkTokenActions = action.payload.checkTokenActions;
            // 利用可能判定
            const availableReservation = state.screeningEventReservations.data
                .filter((r) => r.reservationStatus === factory.chevre.reservationStatusType.ReservationConfirmed)
                .find((r) => r.id === reservationByToken.id);
            const qrcodeTokenList = state.qrcodeTokenList.filter(list => list.reservationByToken.id !== reservationByToken.id);
            qrcodeTokenList.push({ token, reservationByToken, checkTokenActions, isAvailable: (availableReservation !== undefined) });
            return { ...state, loading: false, error: null, qrcodeTokenList };
        }
        case ActionTypes.ConvertQrcodeToTokenFail: {
            const error = action.payload.error;
            return { ...state, loading: false, error: JSON.stringify(error) };
        }
        case ActionTypes.Admission: {
            return { ...state, loading: true, error: null };
        }
        case ActionTypes.AdmissionSuccess: {
            return { ...state, loading: false, error: null };
        }
        case ActionTypes.AdmissionFail: {
            const error = action.payload.error;
            return { ...state, loading: false, error: JSON.stringify(error) };
        }
        default: {
            return state;
        }
    }
}

/**
 * Selectors
 */
export const getLoading = (state: IState) => state.loading;
export const getError = (state: IState) => state.error;
export const getMovieTheaters = (state: IState) => state.movieTheaters;
export const getMovieTheater = (state: IState) => state.movieTheater;
export const getScreeningEvents = (state: IState) => state.screeningEvents;
export const getScreeningEvent = (state: IState) => state.screeningEvent;
