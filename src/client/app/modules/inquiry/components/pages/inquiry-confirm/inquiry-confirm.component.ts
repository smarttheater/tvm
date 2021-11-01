import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Functions } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';
import { ActionService, UtilService } from '../../../../../services';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-inquiry-confirm',
    templateUrl: './inquiry-confirm.component.html',
    styleUrls: ['./inquiry-confirm.component.scss'],
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
        private translate: TranslateService
    ) {}

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
            const order = orderData.order;
            const orders = [order];
            const pos = user.pos;
            const printer = user.printer;
            const now = (await this.utilService.getServerTime(true)).date;
            const today = moment(now).format('YYYYMMDD');
            const eventOrders = Functions.Purchase.order2EventOrders({ order });
            const findResult = eventOrders.find((o) => {
                const startDate = moment(o.event.startDate).format('YYYYMMDD');
                return startDate !== today;
            });
            const process = async () => {
                // 処理
                if (this.timer !== undefined) {
                    clearTimeout(this.timer);
                }

                await this.actionService.order.print({ orders, pos, printer });
                this.router.navigate(['/inquiry/print']);
            };

            if (findResult !== undefined) {
                this.utilService.openConfirm({
                    title: this.translate.instant('common.confirm'),
                    body: this.translate.instant(
                        'inquiry.confirm.confirm.printExpired'
                    ),
                    cb: async () => {
                        try {
                        } catch (error2) {
                            console.error(error2);
                            this.router.navigate(['/error']);
                        }
                        await process();
                    },
                });
                return;
            }
            await process();
        } catch (error) {
            console.error(error);
            this.router.navigate(['/stop']);
        }
    }
}
