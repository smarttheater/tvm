import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getEnvironment } from '../../../../../../environments/environment';
import { ActionService } from '../../../../../services';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {
    public error: Observable<string | null>;
    public environment = getEnvironment();
    private timer: any;

    constructor(
        private store: Store<reducers.IState>,
        private actionService: ActionService,
        private router: Router
    ) { }

    public async ngOnInit() {
        try {
            const { cashchanger } = await this.actionService.user.getData();
            if (cashchanger !== undefined) {
                await this.actionService.purchase.depositRepay({ ipAddress: cashchanger });
            }
        } catch (error) {
            console.error(error);
        }
        this.error = this.store.pipe(select(reducers.getError));
        this.actionService.purchase.delete();
        if (this.environment.ERROR_WAIT_TIME === '') {
            return;
        }
        const time = Number(this.environment.ERROR_WAIT_TIME);
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
