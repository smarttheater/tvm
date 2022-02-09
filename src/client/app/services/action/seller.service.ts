import { Injectable } from '@angular/core';
import { factory } from '@cinerino/sdk';
import { StoreService } from '..';
import { CinerinoService } from '../cinerino.service';
import { UtilService } from '../util.service';

@Injectable({
    providedIn: 'root',
})
export class ActionSellerService {
    constructor(
        private cinerinoService: CinerinoService,
        private utilService: UtilService,
        private storeService: StoreService
    ) {}

    /**
     * 販売者一覧検索
     */
    public async search(params?: factory.seller.ISearchConditions) {
        try {
            this.storeService.util.loadStart({
                process: 'action.Seller.search',
            });
            await this.cinerinoService.getServices();
            const searchResult = await this.cinerinoService.seller.search(
                params === undefined ? {} : params
            );
            this.storeService.util.loadEnd();
            return searchResult.data;
        } catch (error) {
            this.utilService.setError({ error });
            this.storeService.util.loadEnd();
            throw error;
        }
    }

    /**
     * 販売者取得
     */
    public async findById(params: { id: string }) {
        try {
            this.storeService.util.loadStart({
                process: 'action.Seller.search',
            });
            await this.cinerinoService.getServices();
            const { id } = params;
            const seller = await this.cinerinoService.seller.findById({ id });
            this.storeService.util.loadEnd();
            return seller;
        } catch (error) {
            this.utilService.setError({ error });
            this.storeService.util.loadEnd();
            throw error;
        }
    }
}
