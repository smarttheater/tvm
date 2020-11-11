import { Injectable } from '@angular/core';
import { factory } from '@cinerino/sdk';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable, race } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Functions, Models } from '../..';
import { getEnvironment } from '../../../environments/environment';
import { orderAction } from '../../store/actions';
import * as reducers from '../../store/reducers';
import { CinerinoService } from '../cinerino.service';
import { EpsonEPOSService } from '../epson-epos.service';
import { StarPrintService } from '../star-print.service';
import { UtilService } from '../util.service';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    public order: Observable<reducers.IOrderState>;
    public error: Observable<string | null>;
    constructor(
        private store: Store<reducers.IState>,
        private actions: Actions,
        private cinerinoService: CinerinoService,
        private utilService: UtilService,
        private starPrintService: StarPrintService,
        private epsonEPOSService: EpsonEPOSService
    ) {
        this.order = this.store.pipe(select(reducers.getOrder));
        this.error = this.store.pipe(select(reducers.getError));
    }

    /**
     * 注文データ取得
     */
    public async getData() {
        return new Promise<reducers.IOrderState>((resolve) => {
            this.order.subscribe((order) => {
                resolve(order);
            }).unsubscribe();
        });
    }

    /**
     * 注文データ削除
     */
    public delete() {
        this.store.dispatch(orderAction.remove());
    }

    /**
     * 注文検索
     */
    public async search(params: factory.order.ISearchConditions) {
        try {
            this.utilService.loadStart({ process: 'orderAction.Search' });
            await this.cinerinoService.getServices();
            const searchResult = await this.cinerinoService.order.search(params);
            this.utilService.loadEnd();
            return searchResult;
        } catch (error) {
            this.utilService.setError(error);
            this.utilService.loadEnd();
            throw error;
        }
    }

    /**
     * 分割検索
     */
    public async splitSearch(params: factory.order.ISearchConditions) {
        try {
            this.utilService.loadStart({ process: 'orderAction.Search' });
            await this.cinerinoService.getServices();
            let orders: factory.order.IOrder[] = [];
            const splitDay = 1;
            const splitCount =
                Math.ceil(moment(params.orderDateThrough).diff(moment(params.orderDateFrom), 'days') / splitDay);
            for (let i = 0; i < splitCount; i++) {
                const limit = 10;
                let page = 1;
                let roop = true;
                const orderDateThrough = moment(params.orderDateThrough).add(-1 * splitDay * i, 'days').toDate();
                const orderDateFrom =
                    (moment(params.orderDateThrough).add(-1 * splitDay * (i + 1), 'days').toDate() > moment(params.orderDateFrom).toDate())
                        ? moment(params.orderDateThrough).add(-1 * splitDay * (i + 1), 'days').toDate()
                        : moment(params.orderDateFrom).toDate();
                while (roop) {
                    params.limit = limit;
                    params.page = page;
                    const searchResult = await this.cinerinoService.order.search({ ...params, orderDateThrough, orderDateFrom });
                    orders = orders.concat(searchResult.data);
                    page++;
                    roop = searchResult.data.length === limit;
                    if (roop) {
                        await Functions.Util.sleep();
                    }
                }
            }
            this.utilService.loadEnd();
            return { data: orders, totalCount: orders.length };
        } catch (error) {
            this.utilService.setError(error);
            this.utilService.loadEnd();
            throw error;
        }
    }

    /**
     * 注文照会
     */
    public async inquiry(params: {
        confirmationNumber: string;
        customer: {
            email?: string;
            telephone?: string;
        }
    }) {
        return new Promise((resolve, reject) => {
            this.store.dispatch(orderAction.inquiry(params));
            const success = this.actions.pipe(
                ofType(orderAction.inquirySuccess.type),
                tap(() => { resolve(); })
            );
            const fail = this.actions.pipe(
                ofType(orderAction.inquiryFail.type),
                tap(() => { this.error.subscribe((error) => { reject(error); }).unsubscribe(); })
            );
            race(success, fail).pipe(take(1)).subscribe();
        });
    }

    /**
     * 注文印刷
     */
    public async print(prams: {
        orders: factory.order.IOrder[];
        printer: Models.Util.Printer.IPrinter;
        pos?: factory.chevre.place.movieTheater.IPOS;
        timeout?: number;
    }) {
        const environment = getEnvironment();
        try {
            const orders = prams.orders;
            const printer = prams.printer;
            const pos = prams.pos;
            if (printer.connectionType === Models.Util.Printer.ConnectionType.None) {
                return;
            }
            if (environment.PRINT_LOADING) {
                this.utilService.loadStart({ process: 'orderAction.Print' });
            }
            await this.cinerinoService.getServices();
            let authorizeOrders: factory.order.IOrder[] = [];
            if (environment.PRINT_QRCODE_TYPE === Models.Order.Print.PrintQrcodeType.None) {
                authorizeOrders = orders;
            } else if (environment.PRINT_QRCODE_TYPE === Models.Order.Print.PrintQrcodeType.Token) {
                for (const order of orders) {
                    authorizeOrders.push(await this.authorizeOwnershipInfos({ order }));
                }
            } else {
                authorizeOrders = orders;
                for (const order of orders) {
                    this.authorizeOwnershipInfos({ order });
                }
            }
            const testFlg = authorizeOrders.length === 0;
            const path = `/ejs/print/ticket.ejs`;
            const url = (testFlg) ? '/default//ejs/print/test.ejs'
                : (await Functions.Util.isFile(`${Functions.Util.getProject().storageUrl}${path}`))
                    ? `${Functions.Util.getProject().storageUrl}${path}`
                    : `/default${path}`;
            const printData = await this.utilService.getText<string>(url);
            const canvasList: HTMLCanvasElement[] = [];
            if (testFlg) {
                const canvas = await Functions.Order.createTestPrintCanvas4Html({ view: <string>printData });
                canvasList.push(canvas);
            } else {
                for (const order of authorizeOrders) {
                    let index = 0;
                    for (const acceptedOffer of order.acceptedOffers) {
                        const qrcode = Functions.Order.createQRCode(
                            acceptedOffer,
                            order,
                            index
                        );
                        const canvas = await Functions.Order.createPrintCanvas4Html({
                            view: <string>printData, order, pos, qrcode, index
                        });
                        canvasList.push(canvas);
                        index++;
                    }
                }
            }
            await this.printProcess({ printer, canvasList, pos });
            if (environment.PRINT_LOADING) {
                this.utilService.loadEnd();
            }
        } catch (error) {
            if (environment.PRINT_LOADING) {
                this.utilService.loadEnd();
            }
            throw error;
        }
    }

    /**
     * 印刷処理
     */
    private async printProcess(params: {
        printer: Models.Util.Printer.IPrinter;
        canvasList: HTMLCanvasElement[];
        pos?: factory.chevre.place.movieTheater.IPOS;
    }) {
        const printer = params.printer;
        const canvasList = params.canvasList;
        const pos = params.pos;
        switch (printer.connectionType) {
            case Models.Util.Printer.ConnectionType.StarBluetooth:
            case Models.Util.Printer.ConnectionType.StarLAN:
                this.starPrintService.initialize({ printer, pos });
                await this.starPrintService.printProcess({ canvasList });
                break;
            case Models.Util.Printer.ConnectionType.Image:
                const domList = canvasList.map(canvas => `<div class="mb-3 p-4 border border-light-gray shadow-sm">
                <img class="w-100" src="${canvas.toDataURL()}" alt="">
                </div>`);
                this.utilService.openAlert({
                    title: '',
                    body: `<div class="px-5">${domList.join('\n')}</div>`
                });
                break;
            case Models.Util.Printer.ConnectionType.EpsonEPOS:
                await this.epsonEPOSService.printer.init({ printer });
                await this.epsonEPOSService.printer.print({ canvasList });
                await this.epsonEPOSService.printer.disconnect();
                break;
            default:
                break;
        }
    }

    /**
     * 注文へ所有権発行
     */
    private async authorizeOwnershipInfos(params: {
        order: factory.order.IOrder;
    }) {
        const order = params.order;
        const result = await Functions.Util.retry<factory.order.IOrder>({
            process: (async () => {
                const orderNumber = order.orderNumber;
                const customer = { telephone: order.customer.telephone };
                const authorizeOrder = await this.cinerinoService.order.authorizeOwnershipInfos({ orderNumber, customer });
                return authorizeOrder;
            }),
            interval: 2000,
            limit: 10
        });
        return result;
    }

    /**
     * 注文承認
     */
    public async authorize(order: factory.order.IOrder) {
        return new Promise<void>((resolve, reject) => {
            this.store.dispatch(orderAction.orderAuthorize({
                orderNumber: order.orderNumber,
                customer: {
                    telephone: order.customer.telephone
                }
            }));
            const success = this.actions.pipe(
                ofType(orderAction.orderAuthorizeSuccess.type),
                tap(() => { resolve(); })
            );

            const fail = this.actions.pipe(
                ofType(orderAction.orderAuthorizeFail.type),
                tap(() => { this.error.subscribe((error) => { reject(error); }).unsubscribe(); })
            );
            race(success, fail).pipe(take(1)).subscribe();
        });
    }

}
