import { Injectable } from '@angular/core';
import { factory } from '@cinerino/sdk';
import { StoreService } from '..';
import { Functions } from '../..';
import { CinerinoService } from '../cinerino.service';
import { UtilService } from '../util.service';

@Injectable({
    providedIn: 'root',
})
export class ActionCreativeWorkService {
    constructor(
        private cinerinoService: CinerinoService,
        private utilService: UtilService,
        private storeService: StoreService
    ) {}

    /**
     * 作品一覧検索
     */
    public async searchMovies(params: {
        identifier?:
            | string
            | {
                  $eq?: string;
              };
        name?: string;
        datePublishedFrom?: Date;
        datePublishedThrough?: Date;
        offers?: {
            availableFrom?: Date;
            availableThrough?: Date;
        };
    }) {
        try {
            this.storeService.util.loadStart({
                process: 'action.CreativeWork.searchMovies',
            });
            const limit = 100;
            let page = 1;
            let roop = true;
            let result: factory.chevre.creativeWork.movie.ICreativeWork[] = [];
            await this.cinerinoService.getServices();
            while (roop) {
                const searchResult =
                    await this.cinerinoService.creativeWork.searchMovies({
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
            const sortResult = result.sort((a, b) => {
                const KEY_NAME = 'sortNumber';
                const sortNumberA =
                    result
                        .find((s) => s.id === a.id)
                        ?.additionalProperty?.find((p) => p.name === KEY_NAME)
                        ?.value || '0';
                const sortNumberB =
                    result
                        .find((s) => s.id === b.id)
                        ?.additionalProperty?.find((p) => p.name === KEY_NAME)
                        ?.value || '0';
                return Number(sortNumberB) - Number(sortNumberA);
            });
            this.storeService.util.loadEnd();
            return sortResult;
        } catch (error) {
            this.utilService.setError({ error });
            this.storeService.util.loadEnd();
            throw error;
        }
    }
}
