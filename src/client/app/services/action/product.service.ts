import { Injectable } from '@angular/core';
import { factory } from '@cinerino/sdk';
import { StoreService } from '..';
import { Functions } from '../..';
import { CinerinoService } from '../cinerino.service';
import { UtilService } from '../util.service';

@Injectable({
    providedIn: 'root',
})
export class ActionProductService {
    constructor(
        private cinerinoService: CinerinoService,
        private utilService: UtilService,
        private storeService: StoreService
    ) {}

    /**
     * 検索
     */
    public async search(params: factory.product.ISearchConditions) {
        try {
            this.storeService.util.loadStart({
                process: 'action.Product.search',
            });
            const limit = 100;
            let page = 1;
            let roop = true;
            let result: (
                | factory.product.IProduct
                | factory.service.paymentService.IService
            )[] = [];
            await this.cinerinoService.getServices();
            while (roop) {
                const searchResult = await this.cinerinoService.product.search({
                    page,
                    limit,
                    ...params,
                });
                result = [...result, ...searchResult.data];
                page++;
                roop = searchResult.data.length === limit;
                if (roop) {
                    await Functions.Util.sleep();
                }
            }
            this.storeService.util.loadEnd();
            return result;
        } catch (error) {
            this.utilService.setError({ error });
            this.storeService.util.loadEnd();
            throw error;
        }
    }

    /**
     * オファー検索
     */
    public async searchOffers(params: {
        itemOffered: { id: string };
        seller?: { id: string };
        availableAtOrFrom?: { id: string };
    }) {
        try {
            this.storeService.util.loadStart({
                process: 'action.Product.searchOffers',
            });
            await this.cinerinoService.getServices();
            const searchResult =
                await this.cinerinoService.product.searchOffers(params);
            this.storeService.util.loadEnd();
            return searchResult;
        } catch (error) {
            this.utilService.setError({ error });
            this.storeService.util.loadEnd();
            throw error;
        }
    }
}
