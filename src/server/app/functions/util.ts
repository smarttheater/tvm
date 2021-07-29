/**
 * 共通
 * @namespace services.util
 */
import debug = require('debug');
import * as request from 'request';
const log = debug('application:util');

export async function requestAsync<T>(
    url: string,
    options?: request.CoreOptions
) {
    return new Promise<T>((resolve, reject) => {
        log(url, options);
        request(url, options, (error, response, body) => {
            if (error) {
                reject({ error });
                return;
            }
            resolve(<any>{ body, response });
        });
    });
}

/**
 * 環境
 * @memberof services.util
 * @enum ENV
 * @type string
 */
export enum ENV {
    /**
     * 開発
     */
    Development = 'development',
    /**
     * テスト
     */
    Test = 'test',
    /**
     * 本番
     */
    Production = 'production',
}

/**
 * HTMLエスケープ
 * @memberof services.util
 * @function escapeHtml
 * @param {string} str
 * @returns {string}
 */
export function escapeHtml(str: string): string {
    const change = (match: string): string => {
        const changeList: any = {
            '&': '&amp;',
            // tslint:disable-next-line:quotemark
            "'": '&#x27;',
            '`': '&#x60;',
            '"': '&quot;',
            '<': '&lt;',
            '>': '&gt;',
        };

        return changeList[match];
    };

    return str.replace(/[&'`"<>]/g, change);
}

/**
 * カンマ区切りへ変換
 * @memberof services.util
 * @function formatPrice
 * @param {number} price
 * @returns {string}
 */
export function formatPrice(price: number): string {
    return String(price).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}
