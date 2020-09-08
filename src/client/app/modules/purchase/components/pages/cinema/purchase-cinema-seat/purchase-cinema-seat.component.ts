import { Component } from '@angular/core';
import { PurchaseSeatComponent } from '../../purchase-seat/purchase-seat.component';

@Component({
    selector: 'app-purchase-cinema-seat',
    templateUrl: './purchase-cinema-seat.component.html',
    styleUrls: ['./purchase-cinema-seat.component.scss']
})
export class PurchaseCinemaSeatComponent extends PurchaseSeatComponent {
    public async prev() {
        const { screeningEvent } = await this.actionService.purchase.getData();
        if (screeningEvent === undefined
            || screeningEvent.workPerformed === undefined) {
            this.router.navigate(['/error']);
            return;
        }
        const identifier = screeningEvent.workPerformed.identifier;
        console.log(`/purchase/cinema/schedule/event/${identifier}`);
        this.router.navigate([`/purchase/cinema/schedule/event/${identifier}`]);
    }
}
