import { Component, Input, OnInit } from '@angular/core';
import { getEnvironment } from '../../../../../../environments/environment';

@Component({
    selector: 'app-purchase-step',
    templateUrl: './step.component.html',
    styleUrls: ['./step.component.scss']
})
export class PurchaseStepComponent implements OnInit {
    @Input() public currentStep: number;
    public environment = getEnvironment();
    public steps: number[];

    constructor() { }

    /**
     * 初期化
     */
    public ngOnInit() {
        this.steps = [1, 2, 3, 4, 5];
    }

}
