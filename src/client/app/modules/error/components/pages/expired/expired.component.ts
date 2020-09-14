import { Component, OnInit } from '@angular/core';
import { ActionService } from '../../../../../services';

@Component({
    selector: 'app-expired',
    templateUrl: './expired.component.html',
    styleUrls: ['./expired.component.scss']
})
export class ExpiredComponent implements OnInit {

    constructor(
        private actionService: ActionService
    ) { }

    public async ngOnInit() {
        try {
            const { payment } = await this.actionService.user.getData();
            if (payment !== undefined
                && payment.cash !== undefined) {
                await this.actionService.purchase.depositRepay({ ipAddress: payment.cash.ipAddress });
            }
        } catch (error) {
            console.error(error);
        }
        this.actionService.purchase.delete();
    }

}
