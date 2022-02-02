/* eslint-disable @typescript-eslint/no-empty-interface */
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { getEnvironment } from '../../../../../environments/environment';
import * as rootReducers from '../../../reducers';

/**
 * Root state
 */
// tslint:disable-next-line:no-empty-interface
export interface IState {}

/**
 * Reducers
 */
export const reducers: ActionReducerMap<IState> = {};

export function main(reducer: ActionReducer<IState>) {
    return (state: any, action: any) => {
        const newState = <{ App: rootReducers.IState }>reducer(state, action);
        logger(newState, action);
        storageSync(newState);
        return newState;
    };
}

/**
 * Logger
 */
export function logger(newState: { App: rootReducers.IState }, action: any) {
    const environment = getEnvironment();
    if (!environment.production) {
        console.log('logger action', action);
        console.log('logger newState', newState);
    }
}

/**
 * storageSync
 */
export function storageSync(state: { App: rootReducers.IState }) {
    if (
        state === undefined ||
        state === null ||
        Object.keys(state).length === 0
    ) {
        return;
    }
    const sessionData = {
        App: {
            purchaseData: state.App.purchaseData,
            orderData: state.App.orderData,
        },
    };
    sessionStorage.setItem('SESSION_STATE', JSON.stringify(sessionData));
    const environment = getEnvironment();
    const saveData = {
        App: {
            ...state.App,
            purchaseData: undefined,
            orderData: undefined,
            reservationData: undefined,
            admissionData: undefined,
        },
    };
    window[environment.STORAGE_TYPE].setItem(
        environment.STORAGE_NAME,
        JSON.stringify(saveData)
    );
}

/**
 * Meta reducer
 */
export const metaReducers: MetaReducer<IState>[] = [main];
