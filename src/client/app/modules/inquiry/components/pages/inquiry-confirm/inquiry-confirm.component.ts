import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Functions } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';
import { OrderService, ReservationService, UserService, UtilService } from '../../../../../services';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-inquiry-confirm',
    templateUrl: './inquiry-confirm.component.html',
    styleUrls: ['./inquiry-confirm.component.scss']
})
export class InquiryConfirmComponent implements OnInit {
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
        private userService: UserService,
        private utilService: UtilService,
        private orderService: OrderService,
        private reservationService: ReservationService,
        private translate: TranslateService
    ) { }

    public ngOnInit() {
        this.eventOrders = [];
        this.order = this.store.pipe(select(reducers.getOrder));
        this.user = this.store.pipe(select(reducers.getUser));
        this.isLoading = this.store.pipe(select(reducers.getLoading));
        this.error = this.store.pipe(select(reducers.getError));
        this.order.subscribe((value) => {
            if (value.order === undefined) {
                this.router.navigate(['/error']);
                return;
            }
            const order = value.order;
            this.eventOrders = Functions.Purchase.order2EventOrders({ order });
        }).unsubscribe();
        if (this.environment.INQUIRY_PRINT_WAIT_TIME !== '') {
            const time = Number(this.environment.INQUIRY_PRINT_WAIT_TIME);
            this.timer = setTimeout(() => {
                this.router.navigate(['/inquiry/input']);
            }, time);
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
        if (this.timer !== undefined) {
            clearTimeout(this.timer);
        }
        try {
            const orderData = await this.orderService.getData();
            const user = await this.userService.getData();
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
            await this.orderService.print({ orders, pos, printer });
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
