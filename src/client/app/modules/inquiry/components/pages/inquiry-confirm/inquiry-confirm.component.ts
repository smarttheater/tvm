import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Functions } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';
import { ActionService, ReservationService, UtilService } from '../../../../../services';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-inquiry-confirm',
    templateUrl: './inquiry-confirm.component.html',
    styleUrls: ['./inquiry-confirm.component.scss']
})
export class InquiryConfirmComponent implements OnInit, OnDestroy {
    public order: Observable<reducers.IOrderState>;
    public user: Observable<reducers.IUserState>;
    public isLoading: Observable<boolean>;
    public error: Observable<string | null>;
    public moment: typeof moment = moment;
    public eventOrders: Functions.Purchase.IEventOrder[];
    public orderStatus: typeof factory.orderStatus = factory.orderStatus;
    public environment = getEnvironment();
    private timer: any;

    constructor(
        private store: Store<reducers.IState>,
        private router: Router,
        private actionService: ActionService,
        private utilService: UtilService,
        private reservationService: ReservationService,
        private translate: TranslateService
    ) { }

    public async ngOnInit() {
        this.eventOrders = [];
        this.order = this.store.pipe(select(reducers.getOrder));
        this.user = this.store.pipe(select(reducers.getUser));
        this.isLoading = this.store.pipe(select(reducers.getLoading));
        this.error = this.store.pipe(select(reducers.getError));
        const { order } = await this.actionService.order.getData();
        if (order === undefined) {
            this.router.navigate(['/error']);
            return;
        }
        this.eventOrders = Functions.Purchase.order2EventOrders({ order });
        if (this.environment.INQUIRY_PRINT_WAIT_TIME !== '') {
            const time = Number(this.environment.INQUIRY_PRINT_WAIT_TIME);
            this.timer = setTimeout(() => {
                this.router.navigate(['/']);
            }, time);
        }
    }

    /**
     * 破棄
     */
    public ngOnDestroy() {
        if (this.timer !== undefined) {
            clearTimeout(this.timer);
        }
    }

    /**
     * 印刷
     */
    public async print() {
        const today = moment().format('YYYYMMDD');
        const limit = moment(today)
            .add(this.environment.INQUIRY_PRINT_EXPIRED_VALUE, this.environment.INQUIRY_PRINT_EXPIRED_UNIT)
            .format('YYYYMMDD');
        const findResult = this.eventOrders.find(o => moment(o.event.startDate).format('YYYYMMDD') < limit);
        if (findResult !== undefined) {
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: this.translate.instant('inquiry.confirm.alert.printExpired')
            });
            return;
        }
        try {
            const orderData = await this.actionService.order.getData();
            const user = await this.actionService.user.getData();
            if (orderData.order === undefined) {
                this.router.navigate(['/error']);
                return;
            }
            if (user.printer === undefined) {
                throw new Error('printer undefined');
            }
            // 二重発券防止
            const reservationNumbers = orderData.order.acceptedOffers.map((o) => {
                if (o.itemOffered.typeOf !== factory.chevre.reservationType.EventReservation) {
                    return '';
                }
                const itemOffered = <factory.chevre.reservation.IReservation<
                    factory.chevre.reservationType.EventReservation
                >>o.itemOffered;
                return itemOffered.reservationNumber;
            });
            const searchResult = await this.reservationService.search({
                typeOf: factory.chevre.reservationType.EventReservation,
                reservationNumbers
            });
            const checkedInResult = searchResult.data.filter(r => r.checkedIn);
            if (checkedInResult.length > 0) {
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: this.translate.instant('inquiry.confirm.alert.doubleTicketing')
                });
                return;
            }
            // 印刷
            const orders = [orderData.order];
            const pos = user.pos;
            const printer = user.printer;
            await this.actionService.order.print({ orders, pos, printer });
            this.router.navigate(['/inquiry/print']);
        } catch (error) {
            console.error(error);
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: `
                <p class="mb-4">${this.translate.instant('inquiry.confirm.alert.print')}</p>
                    <div class="p-3 bg-light-gray select-text">
                    <code>${error}</code>
                </div>`
            });
        }
    }

}
