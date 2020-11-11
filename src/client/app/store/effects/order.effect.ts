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
                const confirmationNumber = Number(payload.confirmationNumber);
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

    /**
     * orderAuthorize
     */
    @Effect()
    public orderAuthorize = this.actions.pipe(
        ofType(orderAction.orderAuthorize),
        map(action => action),
        mergeMap(async (payload) => {
            try {
                const params = Object.assign({ personId: 'me' }, payload);
                await this.cinerino.getServices();
                const order = await this.cinerino.order.authorizeOwnershipInfos(params);
                return orderAction.orderAuthorizeSuccess({ order });
            } catch (error) {
                return orderAction.orderAuthorizeFail({ error: error });
            }
        })
    );

}
