/**
 * main
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as chroma from 'chroma-js';
import 'hammerjs';
import * as momentTimezone from 'moment-timezone';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { jaLocale } from 'ngx-bootstrap/locale';
import { Functions } from './app';
import { getEnvironment, IEnvironment } from './environments/environment';

async function main() {
    // タイムゾーン設定
    momentTimezone.tz.setDefault('Asia/Tokyo');
    momentTimezone.locale('ja');

    // 言語設定
    defineLocale('ja', jaLocale);

    setDocumentEvent();

    // パラメータ設定
    const params = Functions.Util.getParameter<{
        projectId?: string;
    }>();

    // プロジェクト設定
    const space = localStorage.getItem('');
    if (space !== null) {
        // 無効なストレージ削除
        localStorage.removeItem('');
    }
    if (params.projectId !== undefined || location.hash === '#/auth/signin') {
        sessionStorage.removeItem('PROJECT');
    }
    const projectId =
        params.projectId === undefined
            ? Functions.Util.getProject().projectId === ''
                ? undefined
                : Functions.Util.getProject().projectId
            : params.projectId;
    if (projectId === undefined && location.hash !== '#/auth/signin') {
        location.href = '/#/auth/signin';
        location.reload();
        return;
    }
    const config = await setProject({ projectId });
    if (Functions.Util.getProject().storageUrl.application === undefined) {
        return;
    }
    await setProjectConfig({
        storageUrl: Functions.Util.getProject().storageUrl.application,
        gtmId: config.gtmId,
        analyticsId: config.analyticsId,
    });
}

/**
 * プロジェクト情報設定
 */
async function setProject(params: { projectId?: string }) {
    const fetchResult = await fetch('/api/project', {
        method: 'POST',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(params),
    });
    if (!fetchResult.ok) {
        throw new Error(
            JSON.stringify({
                status: fetchResult.status,
                statusText: fetchResult.statusText,
            })
        );
    }
    const result: {
        projectId: string;
        projectName?: string;
        storageUrl: {
            application: string;
            common: string;
        };
        env: string;
        gtmId?: string;
        analyticsId?: string;
    } = await fetchResult.json();
    sessionStorage.setItem(
        'PROJECT',
        JSON.stringify({
            projectId: result.projectId,
            projectName: result.projectName,
            storageUrl: result.storageUrl,
        })
    );
    document.body.classList.add(result.env);
    return result;
}

/**
 * プロジェクトごとのアプリケーション設定
 */
async function setProjectConfig(params: {
    storageUrl: string;
    gtmId?: string;
    analyticsId?: string;
}) {
    const { storageUrl, gtmId, analyticsId } = params;
    const now = momentTimezone().toISOString();
    // 設定読み込み
    const fetchResult = await fetch(
        `${storageUrl}/js/environment.js?=date${now}`,
        {
            method: 'GET',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
        }
    );
    if (fetchResult.ok) {
        (<any>window).eval(await fetchResult.text());
    } else {
        (<any>window).environment = {};
    }

    // GTM_ID, ANALYTICS_IDを設定
    const { GTM_ID, ANALYTICS_ID } = <IEnvironment>(<any>window).environment;
    (<IEnvironment>(<any>window).environment).GTM_ID =
        (GTM_ID === undefined || GTM_ID === '') && gtmId !== undefined
            ? gtmId
            : GTM_ID;
    (<IEnvironment>(<any>window).environment).ANALYTICS_ID =
        (ANALYTICS_ID === undefined || ANALYTICS_ID === '') &&
        analyticsId !== undefined
            ? analyticsId
            : ANALYTICS_ID;

    const environment = getEnvironment();
    // 色設定
    await applyColor({ primaryColor: environment.PRIMARY_COLOR });
    // スタイル設定
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = `${storageUrl}/css/style.css?=date${now}`;
    style.onerror = function () {
        this.href = `/default/css/style.css?=date${now}`;
    };
    document.head.appendChild(style);
    // ファビコン設定
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/x-icon"';
    favicon.href = (await Functions.Util.isFile(`${storageUrl}/favicon.ico`))
        ? `${storageUrl}/favicon.ico`
        : '/default/favicon.ico';
    document.head.appendChild(favicon);

    // タイトル設定
    document.title = environment.APP_TITLE;
    // GTM設定
    if (environment.GTM_ID) {
        (function (w, d, s, l, i) {
            (<any>w)[l] = (<any>w)[l] || [];
            (<any>w)[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js',
            });
            const f = d.getElementsByTagName(s)[0];
            const j = d.createElement(s),
                dl = l !== 'dataLayer' ? '&l=' + l : '';
            (<any>j).async = true;
            (<any>j).src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            (<any>f).parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', environment.GTM_ID);
    }
    if (environment.production) {
        enableProdMode();
    }
}

/**
 * 色設定
 */
function applyColor(params: { primaryColor: string }) {
    const { primaryColor } = params;
    const style = document.createElement('style');
    style.id = 'applyColor';
    style.innerHTML = `
.wrapper .bg-primary {
    background-color: ${primaryColor} !important;
}
.wrapper .text-primary {
    color: ${primaryColor} !important;
}
.wrapper .border-primary {
    border-color: ${primaryColor} !important;
}
.btn-custom-primary {
    background: linear-gradient(
        0deg,
        ${primaryColor} 0%,
        ${chroma(primaryColor).brighten(1)} 100%
    );
    border: 2px solid ${primaryColor};
    color: #fff;
}
    `;
    document.head.appendChild(style);
}

/**
 * documentイベント設定
 */
function setDocumentEvent() {
    const marchiTap = (event: TouchEvent) => {
        if (event.touches.length >= 2) {
            event.preventDefault();
        }
    };
    const options = { passive: false };
    document.documentElement.addEventListener('touchstart', marchiTap, options);
    let time = 0;
    const doubleTap = (event: TouchEvent) => {
        try {
            if (event.target === null) {
                return;
            }
            const target =
                (<HTMLElement>event.target).tagName.toUpperCase() === 'I'
                    ? (<HTMLElement>event.target).parentElement
                    : <HTMLElement>event.target;
            if (
                target !== null &&
                (target.id === 'currentDateTime' ||
                    target.tagName.toUpperCase() === 'BUTTON' ||
                    target.tagName.toUpperCase() === 'INPUT' ||
                    target.tagName.toUpperCase() === 'A')
            ) {
                return;
            }
        } catch (error) {
            console.error(error);
        }
        const now = new Date().getTime();
        if (now - time < 350) {
            event.preventDefault();
        }
        time = now;
    };
    if (
        /iPad|Macintosh/i.test(navigator.userAgent) &&
        'ontouchend' in document
    ) {
        document.documentElement.addEventListener('touchend', doubleTap, false);
    }
}

main()
    .then(async () => {
        const { AppModule } = await import('./app/app.module');
        platformBrowserDynamic().bootstrapModule(AppModule);
    })
    .catch((error) => {
        console.error(error);
    });
