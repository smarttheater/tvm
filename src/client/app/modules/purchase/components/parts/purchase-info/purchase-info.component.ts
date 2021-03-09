import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Functions } from '../../../../..';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-purchase-info',
    templateUrl: './purchase-info.component.html',
    styleUrls: ['./purchase-info.component.scss']
})
export class PurchaseInfoComponent implements OnInit {
    @Input() public purchase: reducers.IPurchaseState;
    @Input() public isAmount: boolean;
    public image?: string;
    public amount: number;
    public moment = moment;
    public getAdditionalProperty = Functions.Purchase.getAdditionalProperty;

    constructor() { }

    public ngOnInit() {
        this.image = this.purchase.screeningEvent?.workPerformed?.thumbnailUrl;
        this.amount = (this.isAmount)
            ? Functions.Purchase.getAmount(this.purchase.authorizeSeatReservations)
            : 0;
    }



}
