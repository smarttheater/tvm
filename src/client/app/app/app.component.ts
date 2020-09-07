/**
 * AppComponent
 */
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { getEnvironment } from '../../environments/environment';

declare const ga: Function;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    public environment = getEnvironment();

    constructor(
        private router: Router,
        private translate: TranslateService
    ) { }

    /**
     * 初期化
     * @method ngOnInit
     */
    public ngOnInit() {
        this.changeViewport();
        this.locales();
        if (this.environment.ANALYTICS_ID !== '') {
            this.analytics();
        }
    }

    @HostListener('window:resize', ['$event'])
    public onResize() {
        this.changeViewport();
    }

    public changeViewport() {
        const base = 1920;
        const scale = window.innerWidth / base;
        // const viewport = 'width=device-width, initial-scale=' + scale + ', maximum-scale=1, user-scalable=no, minimal-ui';
        // document.querySelector('meta[name=viewport]').setAttribute('content', viewport);
        document.body.style.transform = 'scale(' + scale + ')';
        document.body.style.opacity = '1';
    }

    /**
     * 言語設定
     */
    private locales() {
        this.translate.addLangs(this.environment.LANGUAGE);
        this.translate.setDefaultLang('ja');
    }

    /**
     * Googleアナリティクス pageview イベント
     */
    private analytics() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // Googleアナリティクス pageview
                try {
                    ga('create', this.environment.ANALYTICS_ID, 'auto');
                    ga('set', 'page', event.urlAfterRedirects);
                    ga('send', 'pageview');
                } catch (err) {
                    console.log(err);
                }
            }
        });
    }
}
