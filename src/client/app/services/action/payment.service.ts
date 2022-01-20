import { Injectable } from '@angular/core';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { Functions, Models } from '../..';
import { purchaseAction } from '../../store/actions';
import * as reducers from '../../store/reducers';
import { CinerinoService } from '../cinerino.service';
import { PaymentService } from '../payment.service';
import { UtilService } from '../util.service';
import { ActionStoreService } from './store.service';

@Injectable({
    providedIn: 'root',
})
export class ActionPaymentService {
    public error: Observable<string | null>;
    constructor(
        private store: Store<reducers.IState>,
        private cinerinoService: CinerinoService,
        private utilService: UtilService,
        private storeService: ActionStoreService,
        private paymentService: PaymentService
    ) {
        this.error = this.store.pipe(select(reducers.getError));
    }

    /**
     * ムビチケ承認
     */
    public async authorizeMovieTicket() {
        try {
            this.utilService.loadStart({
                process: 'purchaseAction.AuthorizeMovieTicket',
            });
            const {
                authorizeMovieTicketPayments,
                transaction,
                pendingMovieTickets,
                temporarilyReserved,
                seller,
            } = await this.storeService.getPurchaseData();
            if (transaction === undefined || seller === undefined) {
                throw new Error('transaction or seller undefined');
            }
            if (authorizeMovieTicketPayments.length > 0) {
                for (const authorizeMovieTicketPayment of authorizeMovieTicketPayments) {
                    await this.cinerinoService.payment.voidTransaction(
                        authorizeMovieTicketPayment
                    );
                }
            }
            const authorizeResults: factory.action.authorize.paymentMethod.any.IAction[] =
                [];
            for (const temporarilyReservation of temporarilyReserved) {
                const movieTickets =
                    Functions.Purchase.createMovieTicketsFromAuthorizeSeatReservation(
                        {
                            temporarilyReservation,
                            pendingMovieTickets,
                            seller,
                        }
                    );
                const movieTicketIdentifiers: {
                    identifier: string;
                    movieTickets: factory.chevre.paymentMethod.paymentCard.movieTicket.IMovieTicket[];
                }[] = [];
                movieTickets.forEach((movieTicket) => {
                    const findResult = movieTicketIdentifiers.find(
                        (movieTicketIdentifier) => {
                            return (
                                movieTicketIdentifier.identifier ===
                                movieTicket.identifier
                            );
                        }
                    );
                    if (findResult === undefined) {
                        movieTicketIdentifiers.push({
                            identifier: movieTicket.identifier,
                            movieTickets: [movieTicket],
                        });
                        return;
                    }
                    findResult.movieTickets.push(movieTicket);
                });
                for (const movieTicketIdentifier of movieTicketIdentifiers) {
                    const authorizeResult =
                        await this.cinerinoService.payment.authorizeMovieTicket(
                            {
                                object: {
                                    typeOf: factory.action.authorize
                                        .paymentMethod.any.ResultType.Payment,
                                    amount: 0,
                                    movieTickets:
                                        movieTicketIdentifier.movieTickets,
                                    paymentMethod:
                                        movieTicketIdentifier.movieTickets[0]
                                            .typeOf,
                                },
                                purpose: transaction,
                            }
                        );
                    authorizeResults.push(authorizeResult);
                }
            }
            this.store.dispatch(
                purchaseAction.setAuthorizeMovieTicket({ authorizeResults })
            );
            this.utilService.loadEnd();
        } catch (error) {
            this.utilService.setError({ error });
            this.utilService.loadEnd();
            throw error;
        }
    }

    /**
     * ムビチケ認証
     */
    public async checkMovieTicket(params: {
        movieTicket: {
            code: string;
            password: string;
        };
        paymentMethodType: string;
    }) {
        try {
            this.utilService.loadStart({
                process: 'purchaseAction.CheckMovieTicket',
            });
            const movieTickets = [
                {
                    typeOf: params.paymentMethodType,
                    identifier: params.movieTicket.code, // 購入管理番号
                    accessCode: params.movieTicket.password, // PINコード
                },
            ];
            const { transaction, screeningEvent } =
                await this.storeService.getPurchaseData();
            if (
                transaction === undefined ||
                transaction.seller.id === undefined ||
                screeningEvent === undefined
            ) {
                throw new Error(
                    'transaction or transaction.seller.id or screeningEvent undefined'
                );
            }
            const checkMovieTicket =
                await this.cinerinoService.payment.checkMovieTicket({
                    typeOf: movieTickets[0].typeOf,
                    movieTickets: movieTickets.map((movieTicket) => {
                        return {
                            ...movieTicket,
                            project: screeningEvent.project,
                            serviceType: '', // 情報空でよし
                            serviceOutput: {
                                reservationFor: {
                                    typeOf: screeningEvent.typeOf,
                                    id: screeningEvent.id,
                                },
                                reservedTicket: {
                                    ticketedSeat: {
                                        typeOf: factory.chevre.placeType.Seat,
                                        seatingType: '', // 情報空でよし
                                        seatNumber: '', // 情報空でよし
                                        seatRow: '', // 情報空でよし
                                        seatSection: '', // 情報空でよし
                                    },
                                },
                            },
                        };
                    }),
                    seller: {
                        typeOf: transaction.seller.typeOf,
                        id: transaction.seller.id,
                    },
                });

            this.store.dispatch(
                purchaseAction.setCheckMovieTicket({ checkMovieTicket })
            );
            this.utilService.loadEnd();
            return checkMovieTicket;
        } catch (error) {
            this.utilService.setError({ error });
            this.utilService.loadEnd();
            throw error;
        }
    }

    /**
     * プロダクト認証
     */
    public async checkProduct(params: {
        input: {
            identifier: string;
            accessCode: string;
        };
    }) {
        try {
            this.utilService.loadStart({
                process: 'purchaseAction.CheckProduct',
            });
            await this.cinerinoService.getServices();
            const { code } = await this.cinerinoService.serviceOutput.authorize(
                {
                    object: params.input,
                }
            );
            const { token } = await this.cinerinoService.token.getToken({
                code,
            });
            const { typeOfGood } = jwtDecode<{
                typeOfGood: factory.permit.IPermit;
            }>(token);
            const checkProduct = {
                code,
                token,
                typeOfGood,
            };
            this.store.dispatch(
                purchaseAction.setCheckProduct({ checkProduct })
            );
            this.utilService.loadEnd();
            return checkProduct;
        } catch (error) {
            this.utilService.setError({ error });
            this.utilService.loadEnd();
            throw error;
        }
    }

    /**
     * 対面決済承認
     */
    public async authorizeAnyPayment(params: {
        amount: number;
        additionalProperty?: { name: string; value: any }[];
    }) {
        try {
            this.utilService.loadStart({
                process: 'purchaseAction.AuthorizeAnyPayment',
            });
            const { amount, additionalProperty } = params;
            const { transaction, paymentMethod } =
                await this.storeService.getPurchaseData();
            if (transaction === undefined || paymentMethod === undefined) {
                throw new Error('transaction undefined');
            }
            const typeOf =
                factory.action.authorize.paymentMethod.any.ResultType.Payment;
            await this.cinerinoService.getServices();
            const authorizeResult =
                await this.cinerinoService.payment.authorizeAnyPayment({
                    object: {
                        typeOf,
                        paymentMethod: paymentMethod.typeOf,
                        amount,
                        additionalProperty,
                    },
                    purpose: {
                        typeOf: transaction.typeOf,
                        id: transaction.id,
                    },
                });
            this.store.dispatch(
                purchaseAction.setAuthorizeAnyPayment({ authorizeResult })
            );
            this.utilService.loadEnd();
        } catch (error) {
            this.utilService.setError({ error });
            this.utilService.loadEnd();
            throw error;
        }
    }

    /**
     * 端末での決済取り消し
     */
    public async voidDevicePayment(params: { payment?: string }) {
        const { payment } = params;
        const { authorizeSeatReservations, orderId, paymentMethod } =
            await this.storeService.getPurchaseData();
        if (
            payment === undefined ||
            orderId === undefined ||
            paymentMethod === undefined
        ) {
            return;
        }
        const amount = Functions.Purchase.getAmount(authorizeSeatReservations);
        await this.paymentService.init({ ipAddress: payment });
        const paymentMethodCode = Functions.Payment.findPaymentMethodType2Code({
            paymentMethodType: paymentMethod.typeOf,
        });
        if (
            paymentMethodCode ===
            Models.Purchase.Payment.PaymentMethodCode.CreditCard
        ) {
            const execResult = await this.paymentService.exec({
                func: Models.Purchase.Payment.FUNC_CODE.CREDITCARD.SETTLEMENT,
                options: {
                    JOB: Models.Purchase.Payment.JOB.VOID,
                    ORDERID: orderId,
                    AMOUNT: String(amount),
                },
            });
            if (
                execResult.FUNC_STATUS !==
                Models.Purchase.Payment.FUNC_STATUS.SUCCESS
            ) {
                await this.paymentService.exec({
                    func: Models.Purchase.Payment.FUNC_CODE.CREDITCARD
                        .INTERRUPTION,
                });
                throw new Error(JSON.stringify(execResult));
            }
        }
        if (
            paymentMethodCode ===
            Models.Purchase.Payment.PaymentMethodCode.EMoney
        ) {
            const execResult = await this.paymentService.exec({
                func: Models.Purchase.Payment.FUNC_CODE.EMONEY.SETTLEMENT,
                options: {
                    JOB: Models.Purchase.Payment.JOB.VOID,
                    ORDERID: orderId,
                    AMOUNT: String(amount),
                },
            });
            if (
                execResult.FUNC_STATUS !==
                Models.Purchase.Payment.FUNC_STATUS.SUCCESS
            ) {
                await this.paymentService.exec({
                    func: Models.Purchase.Payment.FUNC_CODE.EMONEY.INTERRUPTION,
                });
                throw new Error(JSON.stringify(execResult));
            }
        }
        if (
            paymentMethodCode === Models.Purchase.Payment.PaymentMethodCode.Code
        ) {
            const execResult = await this.paymentService.exec({
                func: Models.Purchase.Payment.FUNC_CODE.CODE.SETTLEMENT,
                options: {
                    JOB: Models.Purchase.Payment.JOB.VOID,
                    ORDERID: orderId,
                    AMOUNT: String(amount),
                },
            });
            if (
                execResult.FUNC_STATUS !==
                Models.Purchase.Payment.FUNC_STATUS.SUCCESS
            ) {
                await this.paymentService.exec({
                    func: Models.Purchase.Payment.FUNC_CODE.CODE.INTERRUPTION,
                });
                throw new Error(JSON.stringify(execResult));
            }
        }
    }
}
