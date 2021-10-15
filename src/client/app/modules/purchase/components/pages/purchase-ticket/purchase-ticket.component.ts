import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { Models } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';
import {
    IReservation,
    IReservationTicket,
} from '../../../../../models/purchase/reservation';
import { ActionService, UtilService } from '../../../../../services';
import * as reducers from '../../../../../store/reducers';
import { PurchaseSeatTicketModalComponent } from '../../../../shared/components/parts/purchase/seat-ticket-modal/seat-ticket-modal.component';

@Component({
    selector: 'app-purchase-ticket',
    template: '',
})
export class PurchaseTicketComponent implements OnInit {
    public purchase: Observable<reducers.IPurchaseState>;
    public user: Observable<reducers.IUserState>;
    public isLoading: Observable<boolean>;
    public additionalTicketText: string;
    public viewType = Models.Util.ViewType;
    public environment = getEnvironment();
    public translateName: string;
    public isSelectedTicket: boolean;
    public movieTicketPaymentMethods?: {
        paymentService: factory.service.paymentService.IService;
        paymentMethodType: factory.chevre.categoryCode.ICategoryCode;
    }[];

    constructor(
        private store: Store<reducers.IState>,
        private router: Router,
        private modal: BsModalService,
        private actionService: ActionService,
        private utilService: UtilService,
        private translate: TranslateService
    ) {}

    public async ngOnInit() {
        this.purchase = this.store.pipe(select(reducers.getPurchase));
        this.user = this.store.pipe(select(reducers.getUser));
        this.isLoading = this.store.pipe(select(reducers.getLoading));
        const paymentMethods: {
            paymentService: factory.service.paymentService.IService;
            paymentMethodType: factory.chevre.categoryCode.ICategoryCode;
        }[] = [];
        this.translateName =
            this.environment.VIEW_TYPE === 'cinema'
                ? 'purchase.cinema.ticket'
                : 'purchase.event.ticket';
        this.additionalTicketText = '';
        this.isSelectedTicket =
            (await this.getUnselectedTicketReservations()).length === 0;
        const { seller } = await this.actionService.purchase.getData();
        if (seller === undefined) {
            throw new Error('seller undefined');
        }
        const paymentMethodTypes = await this.actionService.categoryCode.search(
            {
                categorySetIdentifier:
                    factory.categoryCode.CategorySetIdentifier
                        .PaymentMethodType,
            }
        );
        const products = await this.actionService.product.search({
            typeOf: {
                $eq: factory.service.paymentService.PaymentServiceType
                    .MovieTicket,
            },
        });
        products.forEach((p) => {
            if (
                p.typeOf !==
                    factory.service.paymentService.PaymentServiceType
                        .MovieTicket ||
                p.provider === undefined
            ) {
                return;
            }
            const findResult = p.provider.find(
                (provider) => provider.id === seller.id
            );
            const paymentMethodType = paymentMethodTypes.find(
                (t) => t.codeValue === p.serviceType?.codeValue
            );
            if (findResult === undefined || paymentMethodType === undefined) {
                return;
            }
            paymentMethods.push({
                paymentService: p,
                paymentMethodType,
            });
        });
        this.movieTicketPaymentMethods = paymentMethods;
    }

    /**
     * 券種未選択の予約取得
     */
    public async getUnselectedTicketReservations() {
        const { reservations } = await this.actionService.purchase.getData();
        return reservations.filter((reservation) => {
            return reservation.ticket === undefined;
        });
    }

    /**
     * 確定
     */
    public async onSubmit() {
        const { reservations } = await this.actionService.purchase.getData();
        const validResult = reservations.filter((reservation) => {
            if (reservation.ticket === undefined) {
                return false;
            }
            const priceComponent =
                reservation.ticket.ticketOffer.priceSpecification
                    .priceComponent;
            const UnitPriceSpecification =
                factory.chevre.priceSpecificationType.UnitPriceSpecification;
            const unitPriceSpecifications = priceComponent.filter(
                (p) => p.typeOf === UnitPriceSpecification
            );
            const filterResult = reservations.filter((targetReservation) => {
                return (
                    reservation.ticket !== undefined &&
                    targetReservation.ticket !== undefined &&
                    reservation.ticket.ticketOffer.id ===
                        targetReservation.ticket.ticketOffer.id
                );
            });
            const findResult = unitPriceSpecifications.find(
                (unitPriceSpecification) => {
                    const value =
                        unitPriceSpecification.typeOf ===
                            UnitPriceSpecification &&
                        unitPriceSpecification.referenceQuantity.value !==
                            undefined
                            ? unitPriceSpecification.referenceQuantity.value
                            : 1;

                    return filterResult.length % value !== 0;
                }
            );

            return findResult !== undefined;
        });
        if (validResult.length > 0) {
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: this.translate.instant(
                    `${this.translateName}.alert.ticketCondition`
                ),
            });
            return;
        }
        try {
            const additionalTicketText = this.additionalTicketText;
            const screeningEventSeats =
                await this.actionService.event.getScreeningEventSeats();
            await this.actionService.transaction.authorizeSeatReservation({
                reservations,
                additionalTicketText,
                screeningEventSeats,
            });
            const navigate =
                this.environment.VIEW_TYPE === 'cinema'
                    ? '/purchase/payment'
                    : '/purchase/event/schedule';
            this.router.navigate([navigate]);
        } catch (error) {
            console.error(error);
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: `
                <p class="mb-4">${this.translate.instant(
                    `${this.translateName}.alert.temporaryReservation`
                )}</p>
                <div class="p-3 bg-light-gray select-text text-left">
                    <code>${
                        JSON.stringify(error) === '{}'
                            ? error
                            : JSON.stringify(error)
                    }</code>
                </div>`,
            });
        }
    }

    /**
     * 券種一覧表示
     */
    public async openTicketList(reservation?: IReservation) {
        const {
            authorizeSeatReservation,
            screeningEventTicketOffers,
            checkMovieTickets,
            checkProducts,
            reservations,
            pendingMovieTickets,
        } = await this.actionService.purchase.getData();
        this.modal.show(PurchaseSeatTicketModalComponent, {
            class: 'modal-dialog-centered',
            initialState: {
                authorizeSeatReservation,
                screeningEventTicketOffers,
                checkMovieTickets,
                checkProducts,
                reservations,
                reservation,
                pendingMovieTickets,
                cb: async (ticket: IReservationTicket) => {
                    this.actionService.purchase.selectTickets([
                        { ...reservation, ticket },
                    ]);
                    this.isSelectedTicket =
                        (await this.getUnselectedTicketReservations())
                            .length === 0;
                },
            },
        });
    }
}
