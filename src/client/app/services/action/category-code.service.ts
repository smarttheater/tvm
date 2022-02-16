import { Injectable } from '@angular/core';
import { factory } from '@cinerino/sdk';
import { StoreService } from '..';
import { Functions } from '../..';
import { CinerinoService } from '../cinerino.service';
import { UtilService } from '../util.service';

@Injectable({
    providedIn: 'root',
})
export class ActionCategoryCodeService {
    constructor(
        private cinerinoService: CinerinoService,
        private utilService: UtilService,
        private storeService: StoreService
    ) {}

    /**
     * 区分情報取得
     */
    public async search(params: {
        categorySetIdentifier: factory.chevre.categoryCode.CategorySetIdentifier;
    }) {
        try {
            this.storeService.util.loadStart({
                process: 'action.CategoryCode.search',
            });
            const { categorySetIdentifier } = params;
            const limit = 100;
            let page = 1;
            let roop = true;
            let result: factory.chevre.categoryCode.ICategoryCode[] = [];
            await this.cinerinoService.getServices();
            while (roop) {
                const searchResult =
                    await this.cinerinoService.categoryCode.search({
                        limit,
                        page,
                        inCodeSet: {
                            identifier: {
                                $eq: categorySetIdentifier,
                            },
                        },
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
}
