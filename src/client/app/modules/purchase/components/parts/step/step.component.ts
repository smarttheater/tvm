import { Component, Input, OnInit } from '@angular/core';
import { getEnvironment } from '../../../../../../environments/environment';

@Component({
    selector: 'app-purchase-step',
    templateUrl: './step.component.html',
    styleUrls: ['./step.component.scss']
})
export class PurchaseStepComponent implements OnInit {
    @Input() public step: number;
    public environment = getEnvironment();

    constructor() { }

    /**
     * 初期化
     */
    public ngOnInit() {
    }

}
