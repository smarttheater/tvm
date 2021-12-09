import { Injectable } from '@angular/core';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as reducers from '../../store/reducers';
import { CinerinoService } from '../cinerino.service';
import { UtilService } from '../util.service';

@Injectable({
    providedIn: 'root',
})
export class ActionSellerService {
    public error: Observable<string | null>;
    constructor(
        private store: Store<reducers.IState>,
        private cinerinoService: CinerinoService,
        private utilService: UtilService
    ) {
        this.error = this.store.pipe(select(reducers.getError));
    }

    /**
     * 販売者一覧検索
     */
    public async search(params?: factory.seller.ISearchConditions) {
        try {
            this.utilService.loadStart({
                process: 'action.Seller.search',
            });
            await this.cinerinoService.getServices();
            const searchResult = await this.cinerinoService.seller.search(
                params === undefined ? {} : params
            );
            this.utilService.loadEnd();
            return searchResult.data;
        } catch (error) {
            this.utilService.setError({ error });
            this.utilService.loadEnd();
            throw error;
        }
    }
}
