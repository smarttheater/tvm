import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { getEnvironment } from '../../../../../../environments/environment';
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
        private translate: TranslateService
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
}
