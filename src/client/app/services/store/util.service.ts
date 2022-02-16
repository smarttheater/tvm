import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { utilAction } from '../../store/actions';
import * as reducers from '../../store/reducers';

@Injectable({
    providedIn: 'root',
})
export class StoreUtilService {
    constructor(private store: Store<reducers.IState>) {}

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
    public setError(params: any) {
        this.store.dispatch(utilAction.setError(params));
    }
}
