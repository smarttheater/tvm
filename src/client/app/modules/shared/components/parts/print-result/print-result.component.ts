import { Component, Input, OnInit } from '@angular/core';
import { factory } from '@cinerino/sdk';
import { getEnvironment } from '../../../../../../environments/environment';

@Component({
    selector: 'app-print-result',
    templateUrl: './print-result.component.html',
    styleUrls: ['./print-result.component.scss']
})
export class PrintResultComponent implements OnInit {
    @Input() public order: factory.order.IOrder;
    public environment = getEnvironment();


    constructor() { }

    public ngOnInit() {
    }

}
