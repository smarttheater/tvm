import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Functions, Models } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';
import { ActionService } from '../../../../../services';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
    public language: string;
    public user: Observable<reducers.IUserState>;
    public environment = getEnvironment();

    constructor(
        private store: Store<reducers.IState>,
        private translate: TranslateService,
        private actionService: ActionService
    ) { }

    public ngOnInit() {
        this.user = this.store.pipe(select(reducers.getUser));
        this.user.subscribe((user) => {
            this.language = user.language;
            this.translate.use(this.language);
            const html = <HTMLElement>document.querySelector('html');
            html.setAttribute('lang', this.language);
        }).unsubscribe();
    }

    public changeLanguage() {
        this.translate.use(this.language);
        const language = this.language;
        this.actionService.user.updateLanguage(language);
    }

    public getLanguageName(key: string) {
        return (<any>Models.Util.Language)[key];
    }

}
