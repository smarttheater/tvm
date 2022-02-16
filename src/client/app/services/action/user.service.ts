import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { StoreService } from '..';
import { UtilService } from '../util.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(
        private translate: TranslateService,
        private utilService: UtilService,
        private storeService: StoreService
    ) {}

    /**
     * 言語更新
     */
    public updateLanguage(language: string) {
        const element = document.querySelector<HTMLSelectElement>('#language');
        if (element !== null) {
            element.value = language;
        }
        this.translate.use(language);
        const html = <HTMLElement>document.querySelector('html');
        html.setAttribute('lang', language);
        moment.locale(language);
        this.storeService.user.updateLanguage({ language });
    }

    /**
     * バージョン確認
     */
    public async checkVersion() {
        const query = `?date=${moment().toISOString()}`;
        const { version } = await this.utilService.getJson<{ version: string }>(
            `/api/version${query}`
        );
        const data = await this.storeService.user.getData();
        if (data.version === undefined) {
            this.storeService.user.setVersion({ version });
        }
        if (data.version !== undefined && data.version !== version) {
            this.storeService.user.setVersion({ version });
            location.reload();
        }
    }
}
