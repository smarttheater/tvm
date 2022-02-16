import { Injectable } from '@angular/core';
import { factory } from '@cinerino/sdk';
import { StoreService } from '..';
import { Functions } from '../..';
import { CinerinoService } from '../cinerino.service';
import { UtilService } from '../util.service';

@Injectable({
    providedIn: 'root',
})
export class ActionProjectService {
    constructor(
        private cinerinoService: CinerinoService,
        private utilService: UtilService,
        private storeService: StoreService
    ) {}

    /**
     * プロジェクト一覧取得
     */
    public async search() {
        try {
            this.storeService.util.loadStart({
                process: 'action.Project.search',
            });
            await this.cinerinoService.getServices();
            const limit = 100;
            let page = 1;
            let roop = true;
            let result: factory.project.IProject[] = [];
            while (roop) {
                const searchResult = await this.cinerinoService.project.search({
                    page,
                    limit,
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
