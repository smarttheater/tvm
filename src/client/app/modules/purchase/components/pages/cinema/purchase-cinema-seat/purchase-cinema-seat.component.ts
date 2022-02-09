import { Component } from '@angular/core';
import { PurchaseSeatComponent } from '../../purchase-seat/purchase-seat.component';

@Component({
    selector: 'app-purchase-cinema-seat',
    templateUrl: './purchase-cinema-seat.component.html',
    styleUrls: ['./purchase-cinema-seat.component.scss'],
})
export class PurchaseCinemaSeatComponent extends PurchaseSeatComponent {
    public async prev() {
        const { screeningEvent, searchType } =
            await this.storeService.purchase.getData();
        if (
            screeningEvent === undefined ||
            screeningEvent.workPerformed === undefined ||
            searchType === undefined
        ) {
            console.error(
                'screeningEvent.workPerformed or searchType undefined'
            );
            this.router.navigate(['/error']);
            return;
        }
        if (searchType === 'event') {
            this.router.navigate([`/purchase/cinema/schedule`]);
            return;
        }
        this.router.navigate([`/purchase/cinema/schedule/event`]);
    }
}
