import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as moment from 'moment';
import { map, mergeMap } from 'rxjs/operators';
import { Functions } from '../..';
import { getEnvironment } from '../../../environments/environment';
import { CinerinoService, UtilService } from '../../services';
import { orderAction } from '../actions';

/**
 * Order Effects
 */
@Injectable()
export class OrderEffects {

    constructor(
        private actions: Actions,
        private cinerino: CinerinoService,
        private utilService: UtilService,
    ) { }

    /**
     * Cancel
     */
    @Effect()
    public cancel = this.actions.pipe(
        ofType(orderAction.cancel),
        map(action => action),
        mergeMap(async (payload) => {
            const orders = payload.orders;
            const agent = payload.agent;
            try {
                await this.cinerino.getServices();
                for (const order of orders) {
                    const startResult = await this.cinerino.transaction.returnOrder.start({
                        expires: moment().add(30, 'seconds').toDate(),
                        object: {
                            order: {
                                orderNumber: order.orderNumber,
                                customer: {
                                    telephone: order.customer.telephone,
                                }
                            }
                        },
                        agent
                    });
                    await this.cinerino.transaction.returnOrder.confirm({
                        id: startResult.id,
                    });
                }

                return orderAction.cancelSuccess();
            } catch (error) {
                return orderAction.cancelFail({ error: error });
            }
        })
    );

    /**
     * inquiry
     */
    @Effect()
    public inquiry = this.actions.pipe(
        ofType(orderAction.inquiry),
        map(action => action),
        mergeMap(async (payload) => {
            const environment = getEnvironment();
            try {
                await this.cinerino.getServices();
                const now = (await this.utilService.getServerTime()).date;
                const today = moment(moment(now).format('YYYYMMDD')).toISOString();
                const confirmationNumber = payload.confirmationNumber;
                const customer = {
                    telephone: (payload.customer.telephone === undefined)
                        ? '' : Functions.Util.formatTelephone(payload.customer.telephone)
                };
                const orderDateFrom = {
                    value: environment.INQUIRY_ORDER_DATE_FROM_VALUE,
                    unit: environment.INQUIRY_ORDER_DATE_FROM_UNIT
                };
                const params = {
                    confirmationNumber,
                    customer,
                    orderDateFrom: moment(today).add(orderDateFrom.value, orderDateFrom.unit).toDate(),
                    orderDateThrough: moment(now).toDate()
                };
                const order = await this.cinerino.order.findByConfirmationNumber(params);

                return orderAction.inquirySuccess({
                    order: (Array.isArray(order)) ? order[0] : order
                });
            } catch (error) {
                return orderAction.inquiryFail({ error: error });
            }
        })
    );

}
