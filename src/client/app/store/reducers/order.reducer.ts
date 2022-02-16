import { factory } from '@cinerino/sdk';
import { Action, createReducer, on } from '@ngrx/store';
import { IState } from '.';
import { orderAction } from '../actions';

export interface IOrderState {
    order?: factory.order.IOrder;
}

export const orderInitialState: IOrderState = {};

export function reducer(initialState: IState, action: Action) {
    return createReducer(
        initialState,
        on(orderAction.remove, (state) => {
            return { ...state, orderData: {} };
        }),
        on(orderAction.setOrder, (state, payload) => {
            const order = payload.order;
            return {
                ...state,
                orderData: { ...state.orderData, order },
                loading: false,
                process: '',
                error: null,
            };
        })
    )(initialState, action);
}
