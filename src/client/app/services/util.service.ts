import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../modules/shared/components/parts/alert-modal/alert-modal.component';
import { ConfirmModalComponent } from '../modules/shared/components/parts/confirm-modal/confirm-modal.component';
import { StaticModalComponent } from '../modules/shared/components/parts/static-modal/static-modal.component';
import { utilAction } from '../store/actions';
import * as reducers from '../store/reducers';

@Injectable({
    providedIn: 'root',
})
export class UtilService {
    constructor(
        private modal: BsModalService,
        private http: HttpClient,
        private store: Store<reducers.IState>
    ) {}

    public openStaticModal(args: { title: string; body: string }) {
        const title = args.title;
        const body = args.body;
        const modalRef = this.modal.show(StaticModalComponent, {
            initialState: { title, body },
            backdrop: 'static',
            class: 'modal-dialog-centered modal-lg ',
        });
        return modalRef;
    }

    /**
     * 警告モーダル表示
     */
    public openAlert(params: {
        title: string;
        body: string;
        error?: string;
        className?: string;
        backdrop?: boolean | 'static';
    }) {
        const { title, body, error, className, backdrop } = params;
        const modalRef = this.modal.show(AlertModalComponent, {
            initialState: { title, body, error },
            backdrop: backdrop === undefined ? true : backdrop,
            class:
                className === undefined
                    ? 'modal-dialog-centered modal-lg'
                    : className,
        });
        return modalRef;
    }

    /**
     * 確認モーダル表示
     */
    public openConfirm(params: {
        title: string;
        body: string;
        code?: string;
        cb: Function;
        className?: string;
        backdrop?: boolean | 'static';
    }) {
        const { title, body, code, cb, className, backdrop } = params;
        const modalRef = this.modal.show(ConfirmModalComponent, {
            initialState: { title, body, code, cb },
            backdrop: backdrop === undefined ? true : backdrop,
            class:
                className === undefined
                    ? 'modal-dialog-centered modal-lg'
                    : className,
        });
        return modalRef;
    }

    /**
     * サーバータイム取得
     */
    public async getServerTime() {
        const result = await this.http
            .get<{ date: string }>('/api/serverTime')
            .toPromise();

        return result;
    }

    /**
     * json取得
     */
    public async getJson<T>(
        url: string,
        options?: {
            headers?:
                | HttpHeaders
                | {
                      [header: string]: string | string[];
                  };
            observe?: 'body';
            params?:
                | HttpParams
                | {
                      [param: string]: string | string[];
                  };
            reportProgress?: boolean;
            responseType?: 'json';
            withCredentials?: boolean;
        }
    ) {
        const result = await this.http.get<T>(url, options).toPromise();

        return result;
    }

    /**
     * json送信
     */
    public async postJson<T>(
        url: string,
        body: any,
        options?: {
            headers?:
                | HttpHeaders
                | {
                      [header: string]: string | string[];
                  };
            observe?: 'body';
            params?:
                | HttpParams
                | {
                      [param: string]: string | string[];
                  };
            reportProgress?: boolean;
            responseType?: 'json';
            withCredentials?: boolean;
        }
    ) {
        const result = await this.http.post<T>(url, body, options).toPromise();

        return result;
    }

    /**
     * text取得
     */
    public async getText<T>(
        url: string,
        options?: {
            headers?:
                | HttpHeaders
                | {
                      [header: string]: string | string[];
                  };
            observe?: 'body';
            params?:
                | HttpParams
                | {
                      [param: string]: string | string[];
                  };
            reportProgress?: boolean;
            responseType?: 'json';
            withCredentials?: boolean;
        }
    ) {
        const result = await this.http
            .get<T>(url, { ...options, responseType: <any>'text' })
            .toPromise();

        return result;
    }

    /**
     * 暗号化
     */
    public async encryptionEncode(encyptText: string) {
        const encryptedResult = await this.http
            .post<{ salt: string; iv: string; encrypted: string }>(
                '/api/encryption/encode',
                { encyptText }
            )
            .toPromise();
        return encryptedResult;
    }

    /**
     * 復号化
     */
    public async encryptionDecode(encryptedResult: {
        salt: string;
        iv: string;
        encrypted: string;
    }) {
        const decryptedResult = await this.http
            .post<{ decrypted: string }>('/api/encryption/decode', {
                salt: encryptedResult.salt,
                iv: encryptedResult.iv,
                encrypted: encryptedResult.encrypted,
            })
            .toPromise();
        return decryptedResult;
    }

    /**
     * ローディング開始
     */
    public loadStart(params: { process: string }) {
        this.store.dispatch(utilAction.loadStart(params));
    }

    /**
     * ローディング終了
     */
    public loadEnd() {
        this.store.dispatch(utilAction.loadEnd());
    }

    /**
     * エラー設定
     */
    public setError(error: any) {
        this.store.dispatch(utilAction.setError({ error }));
    }
}
