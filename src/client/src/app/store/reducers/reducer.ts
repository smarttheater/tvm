import { ISearchResult } from '@cinerino/api-abstract-client/lib/service';
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
    qrcodeToken?: {
        token?: string;
        decodeResult?: factory.ownershipInfo.IOwnershipInfo<IScreeningEventReservation>;
        availableReservation?: factory.chevre.reservation.event.ISearchConditions;
        checkTokenActions: ISearchResult<factory.action.check.token.IAction[]>;
        isAvailable: boolean;
        statusCode: number;
    };
    qrcodeTokenList: { token: string; iat: number }[];
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
        case ActionTypes.GetScreeningEventReservations: {
            return { ...state, loading: true };
        }
        case ActionTypes.GetScreeningEventReservationsSuccess: {
            const screeningEventReservations = action.payload.screeningEventReservations;
            return { ...state, loading: false, error: null, screeningEventReservations };
        }
        case ActionTypes.GetScreeningEventReservationsFail: {
            const error = action.payload.error;
            return { ...state, loading: false, error: JSON.stringify(error) };
        }
        case ActionTypes.InitializeQrcodeToken: {
            const qrcodeToken = undefined;
            return { ...state, qrcodeToken };
        }
        case ActionTypes.ConvertQrcodeToToken: {
            return { ...state, loading: true, error: null };
        }
        case ActionTypes.ConvertQrcodeToTokenSuccess: {
            const qrcodeToken = action.payload;
            const qrcodeTokenList = state.qrcodeTokenList;
            if (qrcodeToken.isAvailable
                && qrcodeToken.token !== undefined
                && qrcodeToken.decodeResult !== undefined) {
                qrcodeTokenList.push({
                    token: qrcodeToken.token,
                    iat: (<any>qrcodeToken.decodeResult).iat
                });
            }
            return { ...state, loading: false, error: null, qrcodeToken, qrcodeTokenList };
        }
        case ActionTypes.ConvertQrcodeToTokenFail: {
            const error = action.payload.error;
            return { ...state, loading: false, error: JSON.stringify(error) };
        }
        case ActionTypes.Admission: {
            return { ...state, error: null };
        }
        case ActionTypes.AdmissionSuccess: {
            const token = action.payload.token;
            const iat = action.payload.iat;
            const qrcodeTokenList = state.qrcodeTokenList.filter(qrcode => qrcode.token !== token && qrcode.iat !== iat);
            return { ...state, error: null, qrcodeTokenList };
        }
        case ActionTypes.AdmissionFail: {
            const error = action.payload.error;
            return { ...state, error: JSON.stringify(error) };
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
export const getScreeningEventReservations = (state: IState) => state.screeningEventReservations;
export const getQrcodeToken = (state: IState) => state.qrcodeToken;
export const getQrcodeTokenList = (state: IState) => state.qrcodeTokenList;
