import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { getEnvironment } from '../../../../../../environments/environment';
import { ActionService, UtilService } from '../../../../../services';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @Input() public topButton?: boolean;
    @Input() public languageSelect?: boolean;
    public language: string;
    public user: Observable<reducers.IUserState>;
    public environment = getEnvironment();

    constructor(
        private store: Store<reducers.IState>,
        private translate: TranslateService,
        private utilService: UtilService,
        private actionService: ActionService,
        private router: Router
    ) {}

    public ngOnInit() {
        this.topButton = this.topButton === undefined ? true : this.topButton;
        this.languageSelect =
            this.languageSelect === undefined ? false : this.languageSelect;
        this.user = this.store.pipe(select(reducers.getUser));
        this.user
            .subscribe((user) => {
                this.language = user.language;
                this.translate.use(this.language);
                const html = <HTMLElement>document.querySelector('html');
                html.setAttribute('lang', this.language);
            })
            .unsubscribe();
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
