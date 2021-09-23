import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { factory } from '@cinerino/sdk';
import * as moment from 'moment';
import { Functions, Models } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';

@Component({
    selector: 'app-purchase-performances',
    templateUrl: './performances.component.html',
    styleUrls: ['./performances.component.scss'],
})
export class PurchasePerformancesComponent implements OnInit {
    @Input()
    public screeningEventsGroup: Functions.Purchase.IScreeningEventsGroup;
    @Input()
    public screeningEventSeries: factory.chevre.event.screeningEventSeries.IEvent;
    @Input()
    public videoFormatTypes: factory.chevre.categoryCode.ICategoryCode[];
    @Input() public animation?: boolean;
    @Output() public select =
        new EventEmitter<factory.chevre.event.screeningEvent.IEvent>();
    public moment = moment;
    public viewType = Models.Util.ViewType;
    public environment = getEnvironment();

    constructor() {}

    public ngOnInit() {
        this.animation = this.animation === undefined ? false : this.animation;
    }

    public getVideoFormatType(code: string) {
        return this.videoFormatTypes.find((v) => v.codeValue === code);
    }
}
