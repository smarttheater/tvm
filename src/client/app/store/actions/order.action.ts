import { factory } from '@cinerino/sdk';
import { createAction, props } from '@ngrx/store';
const LABEL = '[Order]';

export const remove = createAction(`${LABEL} remove`);

export const setOrder = createAction(
    `${LABEL} setOrder`,
    props<{
        order: factory.order.IOrder;
    }>()
);
