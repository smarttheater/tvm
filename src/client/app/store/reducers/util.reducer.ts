import { Action, createReducer, on } from '@ngrx/store';
import { IState } from '.';
import { utilAction } from '../actions';

export function reducer(initialState: IState, action: Action) {
    return createReducer(
        initialState,
        on(utilAction.loadStart, (state, payload) => {
            const process = payload === undefined ? 'load' : payload.process;
            return { ...state, loading: true, process };
        }),
        on(utilAction.loadEnd, (state) => {
            return { ...state, loading: false, process: '' };
        }),
        on(utilAction.setError, (state, payload) => {
            return {
                ...state,
                error:
                    payload.error === undefined
                        ? JSON.stringify(payload)
                        : JSON.stringify({
                              ...payload.error,
                              message: payload.error.message,
                          }),
            };
        })
    )(initialState, action);
}
