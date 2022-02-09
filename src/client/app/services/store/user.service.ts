import { Injectable } from '@angular/core';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Models } from '../..';
import { userAction } from '../../store/actions';
import * as reducers from '../../store/reducers';

@Injectable({
    providedIn: 'root',
})
export class StoreUserService {
    public data: Observable<reducers.IUserState>;

    constructor(private store: Store<reducers.IState>) {
        this.data = this.store.pipe(select(reducers.getUser));
    }

    /**
     * ユーザーデータ取得
     */
    public async getData() {
        return new Promise<reducers.IUserState>((resolve) => {
            this.data
                .subscribe((data) => {
                    resolve(data);
                })
                .unsubscribe();
        });
    }

    /**
     * ユーザーデータ削除
     */
    public remove() {
        this.store.dispatch(userAction.remove());
    }

    /**
     * すべて更新
     */
    public update(params: {
        application: {
            theater: factory.chevre.place.movieTheater.IPlaceWithoutScreeningRoom;
            pos?: factory.chevre.place.movieTheater.IPOS;
            applicationType: Models.Util.Application.ApplicationType;
            applicationPassword?: string;
        };
        device: {
            printer: Models.Util.Printer.IPrinter;
            cashchanger?: {
                ipAddress: string;
            };
            payment?: {
                ipAddress: string;
            };
        };
        profile: factory.person.IProfile;
    }) {
        this.store.dispatch(userAction.update(params));
    }

    /**
     * 言語更新
     */
    public updateLanguage(params: { language: string }) {
        this.store.dispatch(userAction.updateLanguage(params));
    }

    /**
     * バージョン確認
     */
    public async setVersion(params: { version: string }) {
        this.store.dispatch(userAction.setVersion(params));
    }
}
