import { Injectable } from '@angular/core';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { StoreService } from '..';
import { Functions, Models } from '../..';
import { getEnvironment } from '../../../environments/environment';
import * as reducers from '../../store/reducers';
import { CinerinoService } from '../cinerino.service';
import { EpsonEPOSService } from '../epson-epos.service';
import { StarPrintService } from '../star-print.service';
import { UtilService } from '../util.service';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    public order: Observable<reducers.IOrderState>;
    public error: Observable<string | null>;
    constructor(
        private store: Store<reducers.IState>,
        private cinerinoService: CinerinoService,
        private utilService: UtilService,
        private starPrintService: StarPrintService,
        private epsonEPOSService: EpsonEPOSService,
        private storeService: StoreService
    ) {
        this.order = this.store.pipe(select(reducers.getOrder));
        this.error = this.store.pipe(select(reducers.getError));
    }

    /**
     * 注文照会
     */
    public async findByConfirmationNumber(params: {
        confirmationNumber: string;
        customer: {
            email?: string;
            telephone?: string;
        };
    }) {
        try {
            const { confirmationNumber, customer } = params;
            this.storeService.util.loadStart({
                process: 'action.Order.search',
            });
            const environment = getEnvironment();
            await this.cinerinoService.getServices();
            const now = (await this.utilService.getServerTime()).date;
            const today = moment(moment(now).format('YYYYMMDD')).toISOString();
            const telephone =
                customer.telephone === undefined
                    ? ''
                    : Functions.Util.formatTelephone(customer.telephone);
            const orderDateFrom = {
                value: environment.INQUIRY_ORDER_DATE_FROM_VALUE,
                unit: environment.INQUIRY_ORDER_DATE_FROM_UNIT,
            };
            const findResult =
                await this.cinerinoService.order.findByConfirmationNumber({
                    confirmationNumber,
                    customer: {
                        telephone,
                    },
                    orderDateFrom: moment(today)
                        .add(orderDateFrom.value, orderDateFrom.unit)
                        .toDate(),
                    orderDateThrough: moment(now).toDate(),
                });
            const order = Array.isArray(findResult)
                ? findResult[0]
                : findResult;
            this.storeService.util.loadEnd();
            return order;
        } catch (error) {
            this.utilService.setError({ error });
            this.storeService.util.loadEnd();
            throw error;
        }
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
            if (
                printer.connectionType ===
                Models.Util.Printer.ConnectionType.None
            ) {
                return;
            }
            if (environment.PRINT_LOADING) {
                this.storeService.util.loadStart({
                    process: 'orderAction.Print',
                });
            }
            await this.cinerinoService.getServices();
            const authorizeOrders: {
                order: factory.order.IOrder;
                code?: string;
            }[] = [];
            if (
                environment.PRINT_QRCODE_TYPE ===
                Models.Order.Print.PrintQrcodeType.None
            ) {
                for (const order of orders) {
                    authorizeOrders.push({ order });
                }
            } else if (
                environment.PRINT_QRCODE_TYPE ===
                Models.Order.Print.PrintQrcodeType.Token
            ) {
                for (const order of orders) {
                    authorizeOrders.push({
                        order,
                        code: await this.authorizeOrder({ order }),
                    });
                }
            } else {
                for (const order of orders) {
                    authorizeOrders.push({ order });
                    this.authorizeOrder({ order });
                }
            }
            const testFlg = authorizeOrders.length === 0;
            const path = `/ejs/print/ticket.ejs`;
            const url = testFlg
                ? '/default//ejs/print/test.ejs'
                : (await Functions.Util.isFile(
                      `${
                          Functions.Util.getProject().storageUrl.application
                      }${path}`
                  ))
                ? `${Functions.Util.getProject().storageUrl.application}${path}`
                : `/default${path}`;
            const printData = await this.utilService.getText<string>(url);
            const canvasList: HTMLCanvasElement[] = [];
            if (testFlg) {
                const canvas = await Functions.Order.createTestPrintCanvas4Html(
                    { view: <string>printData }
                );
                canvasList.push(canvas);
            } else {
                for (const authorizeOrder of authorizeOrders) {
                    let index = 0;
                    for (const acceptedOffer of authorizeOrder.order
                        .acceptedOffers) {
                        const qrcode = Functions.Order.createQRCode({
                            acceptedOffer,
                            order: authorizeOrder.order,
                            index,
                            code: authorizeOrder.code,
                        });
                        const canvas =
                            await Functions.Order.createPrintCanvas4Html({
                                view: <string>printData,
                                order: authorizeOrder.order,
                                pos,
                                qrcode,
                                index,
                            });
                        canvasList.push(canvas);
                        index++;
                    }
                }
            }
            await this.printProcess({ printer, canvasList, pos });
            if (environment.PRINT_LOADING) {
                this.storeService.util.loadEnd();
            }
        } catch (error) {
            if (environment.PRINT_LOADING) {
                this.storeService.util.loadEnd();
            }
            this.utilService.setError({ error });
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
                const domList = canvasList.map(
                    (
                        canvas
                    ) => `<div class="mb-3 p-4 border border-light-gray shadow-sm">
                <img class="w-100" src="${canvas.toDataURL()}" alt="">
                </div>`
                );
                this.utilService.openAlert({
                    title: '',
                    body: `<div class="px-5">${domList.join('\n')}</div>`,
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
    private async authorizeOrder(params: { order: factory.order.IOrder }) {
        const environment = getEnvironment();
        const order = params.order;
        const result = await Functions.Util.retry<string>({
            process: async () => {
                const orderNumber = order.orderNumber;
                const customer = { telephone: order.customer.telephone };
                const { code } = await this.cinerinoService.order.authorize({
                    object: { orderNumber, customer },
                    result: {
                        expiresInSeconds: Number(
                            environment.ORDER_AUTHORIZE_CODE_EXPIRES
                        ),
                    },
                });
                return code;
            },
            interval: 2000,
            limit: 10,
        });
        return result;
    }
}
