import { Injectable } from '@angular/core';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Functions, Models } from '../..';
import { getEnvironment } from '../../../environments/environment';
import { purchaseAction } from '../../store/actions';
import * as reducers from '../../store/reducers';
import { CinerinoService } from '../cinerino.service';
import { UtilService } from '../util.service';
import { ActionStoreService } from './store.service';

@Injectable({
    providedIn: 'root',
})
export class ActionTransactionService {
    public error: Observable<string | null>;
    constructor(
        private store: Store<reducers.IState>,
        private cinerinoService: CinerinoService,
        private utilService: UtilService,
        private storeService: ActionStoreService,
        private translateService: TranslateService
    ) {
        this.error = this.store.pipe(select(reducers.getError));
    }

    /**
     * 取引開始
     */
    public async start(params: {
        pos?: factory.chevre.place.movieTheater.IPOS;
    }) {
        try {
            this.utilService.loadStart({
                process: 'purchaseAction.StartTransaction',
            });
            const environment = getEnvironment();
            const { pos } = params;
            const { seller } = await this.storeService.getPurchaseData();
            if (seller === undefined || seller.id === undefined) {
                throw new Error('seller or seller.id undefined');
            }
            const now = (await this.utilService.getServerTime()).date;
            const agent = {
                identifier: [
                    ...environment.PURCHASE_TRANSACTION_IDENTIFIER,
                    {
                        name: 'userAgent',
                        value:
                            navigator && navigator.userAgent !== undefined
                                ? navigator.userAgent
                                : '',
                    },
                    {
                        name: 'appVersion',
                        value:
                            navigator && navigator.appVersion !== undefined
                                ? navigator.appVersion
                                : '',
                    },
                ],
            };
            if (pos !== undefined) {
                agent.identifier.push({ name: 'posId', value: pos.id });
                agent.identifier.push({ name: 'posName', value: pos.name });
            }
            await this.cinerinoService.getServices();
            const passport = await this.cinerinoService.getPassport({
                scope: `Transaction:PlaceOrder:${seller.id}`,
            });
            const transaction =
                await this.cinerinoService.transaction.placeOrder.start({
                    expires: moment(now)
                        .add(environment.PURCHASE_TRANSACTION_TIME, 'minutes')
                        .toDate(),
                    seller: {
                        typeOf: seller.typeOf,
                        id: seller.id,
                    },
                    object: { passport },
                    agent,
                });
            this.store.dispatch(purchaseAction.setTransaction({ transaction }));
            this.utilService.loadEnd();
        } catch (error) {
            this.utilService.setError(error);
            this.utilService.loadEnd();
            throw error;
        }
    }

    /**
     * 取引中止
     */
    public async cancel() {
        try {
            this.utilService.loadStart({
                process: 'purchaseAction.CancelTransaction',
            });
            const { transaction } = await this.storeService.getPurchaseData();
            if (transaction === undefined) {
                this.utilService.loadEnd();
                return;
            }
            await this.cinerinoService.transaction.placeOrder.cancel({
                id: transaction.id,
            });
            this.store.dispatch(purchaseAction.cancelTransaction());
            this.utilService.loadEnd();
        } catch (error) {
            this.utilService.setError(error);
            this.utilService.loadEnd();
            throw error;
        }
    }

    /**
     * 取引確定
     */
    public async confirm(params: {
        language: string;
        theater: factory.chevre.place.movieTheater.IPlaceWithoutScreeningRoom;
    }) {
        try {
            this.utilService.loadStart({
                process: 'purchaseAction.ConfirmTransaction',
            });
            const environment = getEnvironment();
            const { theater } = params;
            const language = 'ja';
            const { transaction, authorizeSeatReservations, seller } =
                await this.storeService.getPurchaseData();
            if (
                transaction === undefined ||
                seller === undefined ||
                theater === undefined
            ) {
                throw new Error('transaction or seller or theater undefined');
            }

            const authorizeEventSeatReservations =
                Functions.Purchase.authorizeSeatReservation2Event({
                    authorizeSeatReservations,
                });
            await this.cinerinoService.getServices();

            const email = {
                ...this.createCompleteMailHeader({ theater, language }),
                template: undefined,
            };
            if (environment.PURCHASE_COMPLETE_MAIL_CUSTOM) {
                // 完了メールをカスタマイズ
                const path = `/ejs/mail/complete/${language}.ejs`;
                const url = (await Functions.Util.isFile(
                    `${
                        Functions.Util.getProject().storageUrl.application
                    }${path}`
                ))
                    ? `${
                          Functions.Util.getProject().storageUrl.application
                      }${path}`
                    : `/default${path}`;
                const view = await this.utilService.getText(url);
                email.template = await (<any>window).ejs.render(
                    view,
                    {
                        authorizeSeatReservations:
                            authorizeEventSeatReservations,
                        seller,
                        theater,
                        moment,
                        formatTelephone: Functions.Util.formatTelephone,
                        getItemPrice: Functions.Purchase.getItemPrice,
                        getTicketPrice: Functions.Purchase.getTicketPrice,
                        projectId: Functions.Util.getProject().projectId,
                    },
                    { async: true }
                );
            }
            const result =
                await this.cinerinoService.transaction.placeOrder.confirm({
                    id: transaction.id,
                    sendEmailMessage: true,
                    email,
                });
            const order = result.order;
            try {
                await this.cinerinoService.order.placeOrder({
                    object: {
                        orderNumber: order.orderNumber,
                        confirmationNumber: order.confirmationNumber,
                    },
                    purpose: {
                        typeOf: factory.transactionType.PlaceOrder,
                        id: transaction.id,
                    },
                });
                await this.cinerinoService.delivery.sendOrder({
                    object: {
                        orderNumber: order.orderNumber,
                    },
                });
            } catch (error) {
                console.error(error);
            }

            this.store.dispatch(purchaseAction.setOrder({ order }));
            this.utilService.loadEnd();
        } catch (error) {
            this.utilService.setError(error);
            this.utilService.loadEnd();
            throw error;
        }
    }

    /**
     * 完了メールヘッダー生成
     */
    private createCompleteMailHeader(params: {
        theater: factory.chevre.place.movieTheater.IPlaceWithoutScreeningRoom;
        language: string;
    }) {
        return {
            sender: {
                name:
                    this.translateService.instant(
                        'email.purchase.complete.sender.name'
                    ) === ''
                        ? params.theater.name.ja
                        : this.translateService.instant(
                              'email.purchase.complete.sender.name'
                          ),
                email:
                    this.translateService.instant(
                        'email.purchase.complete.sender.email'
                    ) === ''
                        ? undefined
                        : this.translateService.instant(
                              'email.purchase.complete.sender.email'
                          ),
            },
            toRecipient: {
                name:
                    this.translateService.instant(
                        'email.purchase.complete.toRecipient.name'
                    ) === ''
                        ? undefined
                        : this.translateService.instant(
                              'email.purchase.complete.toRecipient.name'
                          ),
                email:
                    this.translateService.instant(
                        'email.purchase.complete.toRecipient.email'
                    ) === ''
                        ? undefined
                        : this.translateService.instant(
                              'email.purchase.complete.toRecipient.email'
                          ),
            },
            about:
                this.translateService.instant(
                    'email.purchase.complete.about'
                ) === ''
                    ? undefined
                    : this.translateService.instant(
                          'email.purchase.complete.about'
                      ),
        };
    }

    /**
     * プロフィール登録
     */
    public async setProfile(profile: factory.person.IProfile) {
        try {
            this.utilService.loadStart({
                process: 'purchaseAction.SetProfile',
            });
            const { transaction } = await this.storeService.getPurchaseData();
            if (transaction === undefined) {
                throw new Error('transaction undefined');
            }
            await this.cinerinoService.getServices();
            await this.cinerinoService.transaction.placeOrder.setProfile({
                id: transaction.id,
                agent: {
                    ...profile,
                    telephone:
                        profile.telephone === undefined
                            ? undefined
                            : Functions.Util.formatTelephone(profile.telephone),
                },
            });
            this.store.dispatch(purchaseAction.setProfile({ profile }));
            this.utilService.loadEnd();
        } catch (error) {
            this.utilService.setError(error);
            this.utilService.loadEnd();
            throw error;
        }
    }

    /**
     * 座席仮予約
     */
    public async authorizeSeatReservation(params: {
        reservations: Models.Purchase.Reservation.IReservation[];
        additionalTicketText?: string;
        screeningEventSeats: factory.chevre.place.seat.IPlaceWithOffer[];
    }) {
        try {
            this.utilService.loadStart({
                process: 'purchaseAction.AuthorizeSeatReservation',
            });
            const { additionalTicketText, screeningEventSeats } = params;
            const {
                transaction,
                temporarilyReserved,
                authorizeSeatReservation,
                authorizeSeatReservations,
                pendingMovieTickets,
                screeningEvent,
                screeningEventTicketOffers,
                checkProducts,
            } = await this.storeService.getPurchaseData();
            const actionParams = {
                authorizeSeatReservations: Functions.Util.deepCopy<
                    factory.action.authorize.offer.seatReservation.IAction<factory.service.webAPI.Identifier.Chevre>[]
                >(authorizeSeatReservations),
                pendingMovieTickets:
                    Functions.Util.deepCopy<
                        Models.Purchase.MovieTicket.IMovieTicket[]
                    >(pendingMovieTickets),
                temporarilyReserved:
                    Functions.Util.deepCopy<
                        Models.Purchase.Reservation.ITemporarilyReserved[]
                    >(temporarilyReserved),
            };
            const reservations = params.reservations.map((r) => {
                const defaultTicketOffers = screeningEventTicketOffers.filter(
                    (t) => {
                        return (
                            r.seat === undefined ||
                            t.eligibleSeatingType === undefined ||
                            Functions.Purchase.isEligibleSeatingType({
                                seat: r.seat,
                                eligibleSeatingType: t.eligibleSeatingType,
                            })
                        );
                    }
                );
                return {
                    seat: r.seat,
                    ticket:
                        r.ticket === undefined
                            ? { ticketOffer: defaultTicketOffers[0] }
                            : r.ticket,
                };
            });
            if (transaction === undefined || screeningEvent === undefined) {
                throw new Error('transaction or screeningEvent undefined');
            }
            await this.cinerinoService.getServices();
            if (authorizeSeatReservation !== undefined) {
                await this.cinerinoService.transaction.placeOrder.voidSeatReservation(
                    authorizeSeatReservation
                );
                actionParams.authorizeSeatReservations =
                    actionParams.authorizeSeatReservations.filter(
                        (a) => a.id !== authorizeSeatReservation.id
                    );
                actionParams.pendingMovieTickets =
                    actionParams.pendingMovieTickets.filter(
                        (p) => p.id !== authorizeSeatReservation.id
                    );
                actionParams.temporarilyReserved =
                    actionParams.temporarilyReserved.filter(
                        (t) => t.id !== authorizeSeatReservation.id
                    );
            }
            const availableSeats = Functions.Purchase.selectAvailableSeat({
                reservations,
                screeningEventSeats,
            });
            const isTicketedSeat = new Models.Purchase.Performance({
                screeningEvent,
            }).isTicketedSeat();
            if (
                isTicketedSeat &&
                availableSeats.length !== reservations.length
            ) {
                throw new Error('Out of stock');
            }
            const authorizeResult = <
                factory.action.authorize.offer.seatReservation.IAction<factory.service.webAPI.Identifier.Chevre>
            >await this.cinerinoService.transaction.placeOrder.authorizeSeatReservation(
                {
                    object: {
                        reservationFor: { id: screeningEvent.id },
                        acceptedOffer: reservations.map((r, index) => {
                            if (
                                r.ticket === undefined ||
                                r.ticket.ticketOffer.id === undefined
                            ) {
                                throw new Error(
                                    'ticket or ticket.ticketOffer.id is undefined'
                                );
                            }
                            const reservedTicket = {
                                typeOf: <any>'Ticket',
                                ticketedSeat: isTicketedSeat
                                    ? availableSeats[index]
                                    : undefined,
                            };

                            const subReservation = isTicketedSeat
                                ? availableSeats[index].subReservations.map(
                                      (ticketedSeat) => ({
                                          reservedTicket: {
                                              typeOf: <any>'Ticket',
                                              ticketedSeat,
                                          },
                                      })
                                  )
                                : undefined;

                            const programMembershipUsed = Array.isArray(
                                r.ticket.ticketOffer.eligibleMembershipType
                            )
                                ? checkProducts[0].token
                                : undefined;

                            return {
                                id: r.ticket.ticketOffer.id,
                                addOn:
                                    r.ticket.addOn === undefined
                                        ? undefined
                                        : r.ticket.addOn
                                              .filter((a) => a.id !== undefined)
                                              .map((a) => ({
                                                  id: <string>a.id,
                                              })),
                                additionalProperty: [],
                                itemOffered: {
                                    serviceOutput: {
                                        typeOf: factory.chevre.reservationType
                                            .EventReservation,
                                        additionalProperty:
                                            screeningEvent.workPerformed ===
                                                undefined ||
                                            screeningEvent.workPerformed
                                                .additionalProperty ===
                                                undefined
                                                ? []
                                                : [
                                                      ...screeningEvent.workPerformed.additionalProperty.filter(
                                                          (a) => a.value !== ''
                                                      ),
                                                  ],
                                        additionalTicketText:
                                            additionalTicketText,
                                        reservedTicket,
                                        subReservation,
                                        programMembershipUsed,
                                    },
                                },
                            };
                        }),
                    },
                    purpose: transaction,
                }
            );
            actionParams.authorizeSeatReservations.push(authorizeResult);
            const movieTicketReservations = reservations.filter(
                (r) =>
                    r.ticket !== undefined && r.ticket.movieTicket !== undefined
            );
            if (
                movieTicketReservations.length > 0 &&
                authorizeResult.result !== undefined &&
                authorizeResult.result.responseBody.object.reservations !==
                    undefined
            ) {
                const pendingReservations =
                    authorizeResult.result.responseBody.object.reservations;
                actionParams.pendingMovieTickets.push({
                    id: authorizeResult.id,
                    movieTickets: movieTicketReservations.map((r) => {
                        const pendingReservation = pendingReservations.find(
                            (p) => {
                                return (
                                    p.reservedTicket.ticketedSeat !==
                                        undefined &&
                                    r.seat !== undefined &&
                                    p.reservedTicket.ticketedSeat.seatNumber ===
                                        r.seat.seatNumber &&
                                    p.reservedTicket.ticketedSeat
                                        .seatSection === r.seat.seatSection
                                );
                            }
                        );
                        if (
                            pendingReservation?.reservedTicket.ticketedSeat ===
                                undefined ||
                            r.ticket.movieTicket === undefined
                        ) {
                            throw new Error('pendingReservation is undefined');
                        }
                        const serviceOutput = {
                            reservationFor: {
                                typeOf: <any>factory.eventType.ScreeningEvent,
                                id: pendingReservation.reservationFor.id,
                            },
                            reservedTicket: {
                                ticketedSeat:
                                    pendingReservation.reservedTicket
                                        .ticketedSeat,
                            },
                        };

                        return { ...r.ticket.movieTicket, serviceOutput };
                    }),
                });
            }
            actionParams.temporarilyReserved.push({
                id: authorizeResult.id,
                screeningEvent,
                reservations,
            });
            this.store.dispatch(
                purchaseAction.setAuthorizeSeatReservation({
                    ...actionParams,
                    authorizeSeatReservation: authorizeResult,
                })
            );
            this.utilService.loadEnd();
        } catch (error) {
            this.utilService.setError(error);
            this.utilService.loadEnd();
            throw error;
        }
    }

    /**
     * 座席仮予約取り消し
     */
    public async voidSeatReservation(params: {
        authorizeSeatReservations: factory.action.authorize.offer.seatReservation.IAction<factory.service.webAPI.Identifier.Chevre>[];
    }) {
        try {
            this.utilService.loadStart({
                process: 'purchaseAction.VoidSeatReservation',
            });
            const purchaseData = await this.storeService.getPurchaseData();
            const actionParams = {
                authorizeSeatReservations: Functions.Util.deepCopy<
                    factory.action.authorize.offer.seatReservation.IAction<factory.service.webAPI.Identifier.Chevre>[]
                >(purchaseData.authorizeSeatReservations),
                pendingMovieTickets: Functions.Util.deepCopy<
                    Models.Purchase.MovieTicket.IMovieTicket[]
                >(purchaseData.pendingMovieTickets),
                temporarilyReserved: Functions.Util.deepCopy<
                    Models.Purchase.Reservation.ITemporarilyReserved[]
                >(purchaseData.temporarilyReserved),
            };
            await this.cinerinoService.getServices();
            for (const authorizeSeatReservation of params.authorizeSeatReservations) {
                await this.cinerinoService.transaction.placeOrder.voidSeatReservation(
                    authorizeSeatReservation
                );
                actionParams.authorizeSeatReservations =
                    actionParams.authorizeSeatReservations.filter(
                        (a) => a.id !== authorizeSeatReservation.id
                    );
                actionParams.pendingMovieTickets =
                    actionParams.pendingMovieTickets.filter(
                        (p) => p.id !== authorizeSeatReservation.id
                    );
                actionParams.temporarilyReserved =
                    actionParams.temporarilyReserved.filter(
                        (t) => t.id !== authorizeSeatReservation.id
                    );
            }

            this.store.dispatch(
                purchaseAction.setAuthorizeSeatReservation(actionParams)
            );
            this.utilService.loadEnd();
        } catch (error) {
            this.utilService.setError(error);
            this.utilService.loadEnd();
            throw error;
        }
    }
}
