import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Functions } from '../../../../..';
import { ActionService, UtilService } from '../../../../../services';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-purchase-cart',
    templateUrl: './purchase-cart.component.html',
    styleUrls: ['./purchase-cart.component.scss'],
})
export class PurchaseCartComponent implements OnInit, OnChanges {
    @Input() public purchase: reducers.IPurchaseState;
    @Input() public isAmount: boolean;
    @Input() public cancel: boolean;
    public amount: number;
    public moment = moment;
    public getAdditionalProperty = Functions.Purchase.getAdditionalProperty;

    constructor(
        private utilService: UtilService,
        private translate: TranslateService,
        private actionService: ActionService
    ) {}

    public ngOnInit() {}

    public ngOnChanges() {
        this.amount = this.getAmount();
    }

    public getAmount() {
        const {
            authorizeSeatReservations,
            authorizeSeatReservation,
            reservations,
        } = this.purchase;
        if (
            authorizeSeatReservation !== undefined &&
            reservations.length === 0
        ) {
            return Functions.Purchase.getAmount(authorizeSeatReservations);
        }
        let amount = 0;
        authorizeSeatReservations.forEach((a) => {
            const findResult = reservations.find((r) => r.ticket === undefined);
            if (
                a.id === authorizeSeatReservation?.id &&
                findResult !== undefined
            ) {
                return;
            }
            if (a.id === authorizeSeatReservation?.id) {
                reservations.forEach((r) => {
                    r.ticket?.ticketOffer.priceSpecification.priceComponent.forEach(
                        (p) => {
                            amount += p.price;
                        }
                    );
                    r.ticket?.addOn?.forEach((addOn) => {
                        amount +=
                            addOn.priceSpecification?.price === undefined
                                ? 0
                                : addOn.priceSpecification?.price;
                    });
                });
                return;
            }
            amount += a.result === undefined ? 0 : a.result.price;
        });

        return amount;
    }

    /**
     * カート削除確認
     */
    public removeItem(id: string) {
        this.utilService.openConfirm({
            title: this.translate.instant('common.confirm'),
            body: this.translate.instant('purchase.event.cart.confirm.cancel'),
            cb: async () => {
                try {
                    await this.actionService.transaction.voidSeatReservation({
                        ids: [id],
                    });
                } catch (error) {
                    console.error(error);
                    this.utilService.openAlert({
                        title: this.translate.instant('common.error'),
                        body: this.translate.instant(
                            'purchase.event.cart.alert.cancel'
                        ),
                    });
                }
            },
        });
    }
}
