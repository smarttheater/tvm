import { Component, OnInit } from '@angular/core';
import { factory } from '@cinerino/api-abstract-client';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
    ActionService,
    CinerinoService,
    UtilService,
} from '../../../../../services';
import * as reducers from '../../../../../store/reducers';

@Component({
    selector: 'app-auth-signin',
    templateUrl: './auth-signin.component.html',
    styleUrls: ['./auth-signin.component.scss'],
})
export class AuthSigninComponent implements OnInit {
    public isLoading: Observable<boolean>;
    public projects: factory.project.IProject[];

    constructor(
        private store: Store<reducers.IState>,
        private utilService: UtilService,
        private cinerinoService: CinerinoService,
        private actionService: ActionService
    ) {}

    public async ngOnInit() {
        this.isLoading = this.store.pipe(select(reducers.getLoading));
        this.projects = [];
        this.projects = await this.actionService.project.search();
        this.utilService.loadStart({ process: 'load' });
        // if (this.projects.length === 1) {
        //     // プロジェクトが一つの場合自動遷移
        //     location.href = `/?projectId=${this.projects[0].id}`;
        //     return;
        // }
        this.utilService.loadEnd();
    }

    public async signOut() {
        try {
            await this.cinerinoService.getServices();
            await this.cinerinoService.signOut();
        } catch (error) {
            console.error(error);
        }
    }
}
