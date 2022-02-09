import { Injectable } from '@angular/core';
import { factory } from '@cinerino/sdk';
import { StoreService } from '..';
import { Functions } from '../..';
import { CinerinoService } from '../cinerino.service';
import { UtilService } from '../util.service';

@Injectable({
    providedIn: 'root',
})
export class ActionPlaceService {
    constructor(
        private cinerinoService: CinerinoService,
        private utilService: UtilService,
        private storeService: StoreService
    ) {}

    /**
     * 劇場一覧検索
     */
    public async searchMovieTheaters(
        params?: factory.chevre.place.movieTheater.ISearchConditions
    ) {
        try {
            this.storeService.util.loadStart({
                process: 'action.Place.searchMovieTheaters',
            });
            await this.cinerinoService.getServices();
            const searchResult =
                await this.cinerinoService.place.searchMovieTheaters(
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
     * スクリーン検索
     */
    public async searchScreeningRooms(params: {
        branchCode?: {
            $eq?: string;
        };
        containedInPlace?: {
            branchCode?: {
                $eq?: string;
            };
        };
    }) {
        try {
            this.storeService.util.loadStart({
                process: 'action.Place.searchScreeningRooms',
            });
            const limit = 100;
            let page = 1;
            let roop = true;
            let result: factory.chevre.place.screeningRoom.IPlace[] = [];
            await this.cinerinoService.getServices();
            while (roop) {
                const searchResult =
                    await this.cinerinoService.place.searchScreeningRooms({
                        ...params,
                        page,
                        limit,
                    });
                result = [...result, ...searchResult.data];
                page++;
                roop = searchResult.data.length === limit;
                await Functions.Util.sleep();
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
