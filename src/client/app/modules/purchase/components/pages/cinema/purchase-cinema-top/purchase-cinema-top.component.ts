import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ActionService } from '../../../../../../services';

@Component({
    selector: 'app-purchase-cinema-top',
    templateUrl: './purchase-cinema-top.component.html',
    styleUrls: ['./purchase-cinema-top.component.scss']
})
export class PurchaseCinemaTopComponent implements OnInit {

    constructor(
        private actionService: ActionService,
        private router: Router,
    ) { }

    /**
     * 初期化
     */
    public async ngOnInit() {
    }

    /**
     * 作品からさがす
     */
    public searchMovie() {
        const scheduleDate = moment().format('YYYY-MM-DD');
        this.actionService.purchase.selectScheduleDate(scheduleDate);
        this.router.navigate(['/purchase/cinema/schedule/movie']);
    }

}
