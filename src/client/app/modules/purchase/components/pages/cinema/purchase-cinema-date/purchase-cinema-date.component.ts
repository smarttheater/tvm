import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { getEnvironment } from '../../../../../../../environments/environment';

@Component({
    selector: 'app-purchase-cinema-date',
    templateUrl: './purchase-cinema-date.component.html',
    styleUrls: ['./purchase-cinema-date.component.scss']
})
export class PurchaseCinemaDateComponent implements OnInit {
    public moment = moment;
    public environment = getEnvironment();

    constructor() { }

    /**
     * 初期化
     */
    public async ngOnInit() {
    }
}
