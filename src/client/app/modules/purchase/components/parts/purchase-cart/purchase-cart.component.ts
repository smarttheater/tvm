import { Component, Input, OnInit } from '@angular/core';
import { factory } from '@cinerino/sdk';
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
export class PurchaseCartComponent implements OnInit {
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

    public ngOnInit() {
        this.amount = this.isAmount
            ? Functions.Purchase.getAmount(
                  this.purchase.authorizeSeatReservations
              )
            : 0;
    }

    /**
     * カート削除確認
     */
    public removeItem(
        authorizeSeatReservation: factory.action.authorize.offer.seatReservation.IAction<factory.service.webAPI.Identifier.Chevre>
    ) {
        this.utilService.openConfirm({
            title: this.translate.instant('common.confirm'),
            body: this.translate.instant('purchase.event.cart.confirm.cancel'),
            cb: async () => {
                try {
                    const authorizeSeatReservations = [
                        authorizeSeatReservation,
                    ];
                    await this.actionService.purchase.transaction.voidSeatReservation(
                        { authorizeSeatReservations }
                    );
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
