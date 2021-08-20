import { Component, Input, OnInit } from '@angular/core';
import { factory } from '@cinerino/sdk';
import * as moment from 'moment';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Functions } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';
import * as Models from '../../../../../models';
import { MembershipCheckModalComponent } from '../../../../shared/components/parts/membership/check-modal/check-modal.component';
import { MovieTicketCheckModalComponent } from '../../../../shared/components/parts/movie-ticket/check-modal/check-modal.component';

@Component({
    selector: 'app-input-tickets',
    templateUrl: './input-tickets.component.html',
    styleUrls: ['./input-tickets.component.scss'],
})
export class InputTicketsComponent implements OnInit {
    @Input()
    public screeningEventTicketOffers: factory.chevre.event.screeningEvent.ITicketOffer[];
    @Input() public movieTicketPaymentMethods: {
        paymentService: factory.service.paymentService.IService;
        paymentMethodType: factory.chevre.categoryCode.ICategoryCode;
    }[];
    public availableMovieTicketpaymentMethods: {
        paymentService: factory.service.paymentService.IService;
        paymentMethodType: factory.chevre.categoryCode.ICategoryCode;
    }[];
    public isMembership: boolean;
    public moment = moment;
    public environment = getEnvironment();
    public viewType = Models.Util.ViewType;

    constructor(private modal: BsModalService) {}

    public async ngOnInit() {
        const screeningEventTicketOffers = this.screeningEventTicketOffers;
        const movieTicketTypeOffers =
            Functions.Purchase.getMovieTicketTypeOffers({
                screeningEventTicketOffers,
            });
        this.availableMovieTicketpaymentMethods = [];
        this.movieTicketPaymentMethods.forEach((p) => {
            const isAvailable =
                movieTicketTypeOffers.find((m) => {
                    const findResult = m.priceSpecification.priceComponent.find(
                        (c) =>
                            c.typeOf ===
                                factory.chevre.priceSpecificationType
                                    .UnitPriceSpecification &&
                            c.appliesToMovieTicket?.serviceOutput?.typeOf ===
                                p.paymentMethodType.codeValue
                    );
                    return findResult !== undefined;
                }) !== undefined;
            if (!isAvailable) {
                return;
            }
            this.availableMovieTicketpaymentMethods.push(p);
        });
        this.isMembership =
            Functions.Purchase.getMembershipTypeOffers({
                screeningEventTicketOffers,
            }).length > 0;
    }

    /**
     * ムビチケ認証表示
     */
    public openMovieTicket(codeValue: string) {
        this.modal.show(MovieTicketCheckModalComponent, {
            initialState: {
                codeValue,
            },
            class: 'modal-dialog-centered',
        });
    }

    /**
     * メンバーシップ認証表示
     */
    public openMembership() {
        this.modal.show(MembershipCheckModalComponent, {
            initialState: {},
            class: 'modal-dialog-centered',
        });
    }
}
