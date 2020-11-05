import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getEnvironment } from '../../../../../../environments/environment';
import { ActionService } from '../../../../../services';

@Component({
    selector: 'app-expired',
    templateUrl: './expired.component.html',
    styleUrls: ['./expired.component.scss']
})
export class ExpiredComponent implements OnInit, OnDestroy {
    public environment = getEnvironment();
    private timer: any;

    constructor(
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
