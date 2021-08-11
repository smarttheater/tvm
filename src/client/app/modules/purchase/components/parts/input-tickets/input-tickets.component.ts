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
    @Input() public paymentServices: factory.service.paymentService.IService[];
    public availablePaymentServices: factory.service.paymentService.IService[];
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
        this.availablePaymentServices = [];
        this.paymentServices.forEach((s) => {
            const isAvailable =
                movieTicketTypeOffers.find((m) => {
                    const findResult = m.priceSpecification.priceComponent.find(
                        (p) =>
                            p.typeOf ===
                                factory.chevre.priceSpecificationType
                                    .UnitPriceSpecification &&
                            p.appliesToMovieTicket?.serviceOutput?.typeOf ===
                                s.serviceType?.codeValue
                    );
                    return findResult !== undefined;
                }) !== undefined;
            if (!isAvailable) {
                return;
            }
            this.availablePaymentServices.push(s);
        });
        this.isMembership =
            Functions.Purchase.getMembershipTypeOffers({
                screeningEventTicketOffers,
            }).length > 0;
    }

    /**
     * ムビチケ認証表示
     */
    public openMovieTicket(paymentMethodType: string) {
        this.modal.show(MovieTicketCheckModalComponent, {
            initialState: {
                paymentMethodType,
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
