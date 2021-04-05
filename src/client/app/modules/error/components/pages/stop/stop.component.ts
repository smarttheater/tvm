import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getEnvironment } from '../../../../../../environments/environment';
import { ActionService, UtilService } from '../../../../../services';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-stop',
    templateUrl: './stop.component.html',
    styleUrls: ['./stop.component.scss']
})
export class StopComponent implements OnInit, OnDestroy {
    public purchase: Observable<reducers.IPurchaseState>;
    public error: Observable<string | null>;
    public environment = getEnvironment();
    public password: string;
    public message: string;

    constructor(
        private store: Store<reducers.IState>,
        private actionService: ActionService,
        private utilService: UtilService,
        private router: Router
    ) { }

    public async ngOnInit() {
        this.purchase = this.store.pipe(select(reducers.getPurchase));
        this.error = this.store.pipe(select(reducers.getError));
        this.password = '';
        this.message = '';
        try {
            const { payment } = await this.actionService.user.getData();
            await this.actionService.purchase.voidPayment({ payment });
        } catch (error) {
            console.error(error);
        }
        try {
            await this.actionService.purchase.cancelTransaction();
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * 破棄
     */
    public ngOnDestroy() {
        this.actionService.purchase.delete();
    }

    /**
     * パスワード確認
     */
    public async checkPassword() {
        if (this.message === 'processing') {
            return;
        }
        if (this.password.length !== 6) {
            this.password = '';
            this.message = 'Incorrect password';
            return;
        }
        try {
            this.message = 'processing';
            await this.utilService.postJson<{ message: string }>(
                '/api/password',
                { password: this.password }
            );
            this.router.navigate(['/setting']);
        } catch (error) {
            console.error(error);
            this.message = `status: ${error.status} statusText: ${error.statusText}`;
            this.password = '';
        }

    }

}
