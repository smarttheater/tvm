import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISearchResult } from '@cinerino/api-abstract-client/lib/service';
import { factory } from '@cinerino/api-javascript-client';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable, race } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import {
    ActionTypes,
    GetScreeningEvents,
    GetTheaters,
    InitializeQrcodeToken,
    InitializeQrcodeTokenList,
    SelectScreeningEvent
} from '../../../store/actions';
import * as reducers from '../../../store/reducers';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
    public screeningEvents: Observable<ISearchResult<factory.chevre.event.screeningEvent.IEvent[]>>;
    public movieTheaters: Observable<ISearchResult<factory.organization.movieTheater.IOrganization[]>>;
    public theaterCode: string;
    public dates: string[];
    public date: string;
    public moment: typeof moment = moment;

    constructor(
        private store: Store<reducers.IState>,
        private actions: Actions,
        private router: Router
    ) { }

    public ngOnInit() {
        this.screeningEvents = this.store.pipe(select(reducers.getScreeningEvents));
        this.movieTheaters = this.store.pipe(select(reducers.getMovieTheaters));
        this.dates = [];
        for (let i = 0; i < 7; i++) {
            this.dates.push(moment().add(i, 'days').format('YYYYMMDD'));
        }
        this.date = this.dates[0];
        this.getTheaters();
    }

    public getTheaters() {
        this.store.dispatch(new GetTheaters({ params: {} }));

        const success = this.actions.pipe(
            ofType(ActionTypes.GetTheatersSuccess),
            tap(() => {
                this.store.pipe(select(reducers.getMovieTheaters)).subscribe((movieTheaters) => {
                    this.theaterCode = movieTheaters.data[0].location.branchCode;
                    this.getScreeningEvents();
                }).unsubscribe();
            })
        );

        const fail = this.actions.pipe(
            ofType(ActionTypes.GetTheatersFail),
            tap(() => {
                this.router.navigate(['/error']);
            })
        );
        race(success, fail).pipe(take(1)).subscribe();
    }

    public getScreeningEvents() {
        this.store.dispatch(new GetScreeningEvents({
            params: {
                endFrom: (this.date === moment().format('YYYYMMDD'))
                    ? moment().toDate()
                    : moment(this.date).toDate(),
                endThrough: moment(this.date).add(1, 'days').toDate(),
                superEvent: {
                    locationBranchCodes: [this.theaterCode]
                },
                sort: {
                    doorTime: factory.sortType.Ascending
                }
            }
        }));

        const success = this.actions.pipe(
            ofType(ActionTypes.GetScreeningEventsSuccess),
            tap(() => { })
        );

        const fail = this.actions.pipe(
            ofType(ActionTypes.GetScreeningEventsFail),
            tap(() => {
                this.router.navigate(['/error']);
            })
        );
        race(success, fail).pipe(take(1)).subscribe();
    }

    public select(screeningEvent: factory.chevre.event.screeningEvent.IEvent) {
        this.store.dispatch(new SelectScreeningEvent({ screeningEvent }));
        this.store.dispatch(new InitializeQrcodeToken());
        this.store.dispatch(new InitializeQrcodeTokenList());
        this.router.navigate(['/admission']);
    }

}
