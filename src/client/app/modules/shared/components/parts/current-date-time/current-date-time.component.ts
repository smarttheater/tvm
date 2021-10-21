import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { getEnvironment } from '../../../../../../environments/environment';
import { ActionService, UtilService } from '../../../../../services';

@Component({
    selector: 'app-current-date-time',
    templateUrl: './current-date-time.component.html',
    styleUrls: ['./current-date-time.component.scss'],
})
export class CurrentDateTimeComponent implements OnInit, OnDestroy {
    public environment = getEnvironment();
    public date: string;
    private timer: any;
    private countTimer: any;
    private count: number;
    constructor(
        private translate: TranslateService,
        private utilService: UtilService,
        private actionService: ActionService,
        private router: Router
    ) {}

    public ngOnInit() {
        this.count = 0;
        this.update();
    }

    public ngOnDestroy() {
        if (this.timer !== undefined) {
            clearTimeout(this.timer);
        }
        if (this.countTimer !== undefined) {
            clearTimeout(this.countTimer);
        }
    }

    private update() {
        this.date = moment().format('MM/DD (ddd) HH:mm');
        const time = 1000;
        this.timer = setTimeout(() => {
            this.update();
        }, time);
    }

    public async openInputModal() {
        const transitionCount = Number(
            this.environment.SETTING_TRANSITION_COUNT
        );
        const transitionLimitTime = Number(
            this.environment.SETTING_TRANSITION_LIMIT_TIME
        );
        if (this.count === 0) {
            this.countTimer = setTimeout(() => {
                this.count = 0;
            }, transitionLimitTime);
        }
        this.count++;
        if (this.count < transitionCount) {
            return;
        }
        if (this.countTimer !== undefined) {
            clearTimeout(this.countTimer);
        }
        this.count = 0;
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
