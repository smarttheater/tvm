import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
    name: 'changeLanguage',
    pure: false,
})
export class ChangeLanguagePipe implements PipeTransform {
    constructor(private translate: TranslateService) {}

    public transform(
        lang?:
            | {
                  ja?: string;
                  en?: string;
                  kr?: string;
              }
            | string
    ) {
        if (lang === undefined || lang === null) {
            return '';
        }
        if (typeof lang === 'string') {
            return lang;
        }
        const currentLang =
            this.translate.currentLang || this.translate.defaultLang;
        if ((<any>lang)[currentLang] !== undefined) {
            return (<any>lang)[currentLang];
        }
        if (lang.en !== undefined) {
            return lang.en;
        }
        if (lang.ja !== undefined) {
            return lang.ja;
        }
        return '';
    }
}
