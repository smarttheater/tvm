import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getEnvironment } from '../../../../../../environments/environment';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-inquiry-print',
    templateUrl: './inquiry-print.component.html',
    styleUrls: ['./inquiry-print.component.scss']
})
export class InquiryPrintComponent implements OnInit, OnDestroy {
    public order: Observable<reducers.IOrderState>;
    public environment = getEnvironment();
    private timer: any;

    constructor(
        private store: Store<reducers.IState>,
        private router: Router
    ) { }

    /**
     * 初期化
     */
    public ngOnInit() {
        this.order = this.store.pipe(select(reducers.getOrder));
        if (this.environment.PRINT_SUCCESS_WAIT_TIME === '') {
            return;
        }
        const time = Number(this.environment.PRINT_SUCCESS_WAIT_TIME);
        this.timer = setTimeout(() => {
            this.router.navigate(['/']);
        }, time);
    }

    /**
     * 破棄
     */
    public ngOnDestroy() {
        if (this.timer !== undefined) {
            clearTimeout(this.timer);
        }
    }

}
