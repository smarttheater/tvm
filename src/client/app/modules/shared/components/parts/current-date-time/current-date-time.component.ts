import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { ActionService, UtilService } from '../../../../../services';

@Component({
    selector: 'app-current-date-time',
    templateUrl: './current-date-time.component.html',
    styleUrls: ['./current-date-time.component.scss'],
})
export class CurrentDateTimeComponent implements OnInit, OnDestroy {
    public timer: any;
    public date: string;
    constructor(
        private translate: TranslateService,
        private utilService: UtilService,
        private actionService: ActionService,
        private router: Router
    ) {}

    public ngOnInit() {
        this.update();
    }

    public ngOnDestroy() {
        clearTimeout(this.timer);
    }

    private update() {
        this.date = moment().format('MM/DD (ddd) HH:mm');
        const time = 1000;
        this.timer = setTimeout(() => {
            this.update();
        }, time);
    }

    public async openInputModal() {
        const { applicationPassword } = await this.actionService.user.getData();
        if (applicationPassword === undefined || applicationPassword === '') {
            return;
        }
        this.utilService.openConfirm({
            title: this.translate.instant('admin.title'),
            body: this.translate.instant('admin.read'),
            code: applicationPassword,
            cb: () => {
                this.router.navigate(['/setting']);
            },
            backdrop: 'static',
        });
    }
}
