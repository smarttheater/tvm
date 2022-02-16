import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../../../../services';

@Component({
    selector: 'app-auth-signout',
    templateUrl: './auth-signout.component.html',
    styleUrls: ['./auth-signout.component.scss'],
})
export class AuthSignoutComponent implements OnInit {
    constructor(private router: Router, private storeService: StoreService) {}

    public ngOnInit() {
        this.storeService.order.remove();
        this.storeService.purchase.remove();
        this.router.navigate(['/']);
    }

    public selectProject() {}
}
