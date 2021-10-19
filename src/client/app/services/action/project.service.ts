import { Injectable } from '@angular/core';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Functions } from '../..';
import * as reducers from '../../store/reducers';
import { CinerinoService } from '../cinerino.service';
import { UtilService } from '../util.service';

@Injectable({
    providedIn: 'root',
})
export class ActionProjectService {
    public error: Observable<string | null>;
    constructor(
        private store: Store<reducers.IState>,
        private cinerinoService: CinerinoService,
        private utilService: UtilService
    ) {
        this.error = this.store.pipe(select(reducers.getError));
    }

    /**
     * プロジェクト一覧取得
     */
    public async search() {
        try {
            this.utilService.loadStart({
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

            this.utilService.loadEnd();
            return result;
        } catch (error) {
            this.utilService.setError(error);
            this.utilService.loadEnd();
            throw error;
        }
    }
}
