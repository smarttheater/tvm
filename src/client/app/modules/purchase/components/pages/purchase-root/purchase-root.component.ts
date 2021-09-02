import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Models } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';
import { ActionService } from '../../../../../services';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-purchase-root',
    templateUrl: './purchase-root.component.html',
    styleUrls: ['./purchase-root.component.scss'],
})
export class PurchaseRootComponent implements OnInit {
    public purchase: Observable<reducers.IPurchaseState>;
    public user: Observable<reducers.IUserState>;
    public environment = getEnvironment();

    constructor(
        private store: Store<reducers.IState>,
        private actionService: ActionService,
        private router: Router
    ) {}

    public async ngOnInit() {
        this.user = this.store.pipe(select(reducers.getUser));
        this.purchase = this.store.pipe(select(reducers.getPurchase));
        try {
            const purchase = await this.actionService.purchase.getData();
            if (purchase.transaction !== undefined) {
                await this.actionService.transaction.cancel();
            }
            this.actionService.purchase.delete();
            if (this.environment.VIEW_TYPE === Models.Util.ViewType.Cinema) {
                this.router.navigate(['/purchase/cinema']);
                return;
            }
            this.router.navigate(['/purchase/event']);
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
        }
    }
}
