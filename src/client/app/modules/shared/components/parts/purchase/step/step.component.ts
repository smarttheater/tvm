import { Component, Input, OnInit } from '@angular/core';
import { Models } from '../../../../../..';
import { getEnvironment } from '../../../../../../../environments/environment';

@Component({
    selector: 'app-purchase-step',
    templateUrl: './step.component.html',
    styleUrls: ['./step.component.scss'],
})
export class PurchaseStepComponent implements OnInit {
    @Input() public currentStep: number;
    public viewType = Models.Util.ViewType;
    public environment = getEnvironment();
    public steps: number[];

    constructor() {}

    /**
     * 初期化
     */
    public ngOnInit() {
        this.steps =
            this.environment.VIEW_TYPE === this.viewType.Cinema
                ? [1, 2, 3, 4, 5]
                : [1, 2, 3];
    }
}
