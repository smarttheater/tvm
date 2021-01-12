import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { factory } from '@cinerino/sdk';
import * as moment from 'moment';
import { Functions } from '../../../../..';

@Component({
    selector: 'app-purchase-performances',
    templateUrl: './performances.component.html',
    styleUrls: ['./performances.component.scss']
})
export class PurchasePerformancesComponent implements OnInit {

    @Input() public screeningEventsGroup: Functions.Purchase.IScreeningEventsGroup;
    @Input() public animation?: boolean;
    @Output() public select = new EventEmitter<factory.chevre.event.screeningEvent.IEvent>();
    public moment: typeof moment = moment;

    constructor() { }

    public ngOnInit() {
        console.log(this.screeningEventsGroup);
        this.animation = (this.animation === undefined) ? false : this.animation;
    }

}
