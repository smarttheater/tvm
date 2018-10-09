import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISearchResult } from '@cinerino/api-abstract-client/lib/service';
import { IScreeningEventReservation } from '@cinerino/api-abstract-client/lib/service/reservation';
import { factory } from '@cinerino/api-javascript-client';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import jsqr from 'jsqr';
import * as moment from 'moment';
import { Observable, race } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import {
    ActionTypes,
    Admission,
    ConvertQrcodeToToken,
    GetScreeningEventReservations,
    InitializeQrcodeToken
} from '../../../store/actions';
import * as reducers from '../../../store/reducers';
import { AlertModalComponent } from '../../parts/alert-modal/alert-modal.component';

@Component({
    selector: 'app-admission',
    templateUrl: './admission.component.html',
    styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit, OnDestroy {
    public screeningEventReservations: Observable<{
        totalCount: number;
        data: IScreeningEventReservation[];
    }>;
    public screeningEvent: Observable<factory.chevre.event.screeningEvent.IEvent | undefined>;
    public qrcodeToken: Observable<{
        token?: string;
        decodeResult?: factory.ownershipInfo.IOwnershipInfo<IScreeningEventReservation>;
        checkTokenActions: ISearchResult<factory.action.check.token.IAction[]>;
        isAvailable: boolean;
        statusCode: number;
    } | undefined>;
    public qrcodeTokenList: Observable<{ token: string; iat: number; }[]>;

    public stream: MediaStream | null;
    public isShowVideo: boolean;
    public video: HTMLVideoElement;
    public scanLoop: any;
    public admissionLoop: any;
    public moment: typeof moment = moment;

    constructor(
        private store: Store<reducers.IState>,
        private actions: Actions,
        private router: Router,
        private modal: NgbModal
    ) { }

    public ngOnInit() {
        this.stream = null;
        this.video = <HTMLVideoElement>document.getElementById('video');
        this.video.width = window.outerWidth;
        this.screeningEventReservations = this.store.pipe(select(reducers.getScreeningEventReservations));
        this.screeningEvent = this.store.pipe(select(reducers.getScreeningEvent));
        this.qrcodeToken = this.store.pipe(select(reducers.getQrcodeToken));
        this.qrcodeTokenList = this.store.pipe(select(reducers.getQrcodeTokenList));
        this.store.dispatch(new InitializeQrcodeToken());
        this.getScreeningEventReservations();
        this.admission();
    }

    public ngOnDestroy() {
        clearInterval(this.scanLoop);
        clearInterval(this.admissionLoop);
    }

    public getScreeningEventReservations() {
        this.screeningEvent.subscribe((screeningEvent) => {
            if (screeningEvent === undefined) {
                this.router.navigate(['/error']);
                return;
            }
            this.store.dispatch(new GetScreeningEventReservations({
                params: {
                    sort: { reservationNumber: factory.chevre.sortType.Ascending },
                    reservationStatuses: [
                        factory.chevre.reservationStatusType.ReservationConfirmed,
                        factory.chevre.reservationStatusType.ReservationCancelled,
                        factory.chevre.reservationStatusType.ReservationHold,
                        factory.chevre.reservationStatusType.ReservationPending
                    ],
                    reservationFor: {
                        typeOf: factory.chevre.eventType.ScreeningEvent,
                        id: screeningEvent.id
                    }
                }
            }));
        }).unsubscribe();

        const success = this.actions.pipe(
            ofType(ActionTypes.GetScreeningEventReservationsSuccess),
            tap(() => {
                this.store.pipe(select(reducers.getScreeningEventReservations)).subscribe((screeningEventReservation) => {
                    console.log(screeningEventReservation);
                }).unsubscribe();
            })
        );

        const fail = this.actions.pipe(
            ofType(ActionTypes.GetScreeningEventReservationsFail),
            tap(() => {
                this.router.navigate(['/error']);
            })
        );
        race(success, fail).pipe(take(1)).subscribe();
    }

    public convertQrcodeToToken(code: string) {
        this.screeningEventReservations.subscribe((screeningEventReservations) => {
            this.store.dispatch(new ConvertQrcodeToToken({ params: { code, screeningEventReservations } }));
        }).unsubscribe();

        const success = this.actions.pipe(
            ofType(ActionTypes.ConvertQrcodeToTokenSuccess),
            tap(() => {
                this.store.pipe(select(reducers.getQrcodeToken)).subscribe((qrcodeToken) => {
                    console.log(qrcodeToken);
                }).unsubscribe();
            })
        );

        const fail = this.actions.pipe(
            ofType(ActionTypes.ConvertQrcodeToTokenFail),
            tap(() => {
                this.openAlert({
                    title: 'エラー',
                    body: '読み込みに失敗しました。'
                });
            })
        );
        race(success, fail).pipe(take(1)).subscribe();
    }

    public admission() {
        const admissionLoopTime = 60000; // 1分に一回
        this.admissionLoop = setInterval(() => {
            this.qrcodeTokenList.subscribe((qrcodeTokenList) => {
                qrcodeTokenList.forEach((qrcodeToken) => {
                    this.store.dispatch(new Admission({ params: qrcodeToken }));
                });
            }).unsubscribe();
        }, admissionLoopTime);

        const success = this.actions.pipe(
            ofType(ActionTypes.AdmissionSuccess),
            tap(() => { })
        );

        const fail = this.actions.pipe(
            ofType(ActionTypes.GetTheatersFail),
            tap(() => { })
        );
        race(success, fail).pipe(take(1)).subscribe();
    }

    public async start() {
        try {
            const constraints = {
                audio: false,
                video: { facingMode: { exact: 'environment' } }
            };
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            this.stream = stream;
            this.video.srcObject = this.stream;
            const scanLoopTime = 500;
            this.scanLoop = setInterval(() => {
                const code = this.scan();
                if (code !== null) {
                    // 読み取り完了
                    this.convertQrcodeToToken(code);
                }
            }, scanLoopTime);
            this.isShowVideo = true;
        } catch (error) {
            console.error(error);
        }
    }

    public stop() {
        if (this.stream === null) {
            return;
        }
        this.stream.getVideoTracks().forEach((track) => {
            track.stop();
        });
        this.stream = null;
        this.isShowVideo = false;
    }

    public scan() {
        if (this.stream === null) {
            return null;
        }
        // キャンバスへ反映
        const canvas = <HTMLCanvasElement>document.getElementById('canvas');
        const context = <CanvasRenderingContext2D>canvas.getContext('2d');
        const width = this.video.offsetWidth;
        const height = this.video.offsetHeight;
        canvas.setAttribute('width', String(width));
        canvas.setAttribute('height', String(height));
        context.drawImage(this.video, 0, 0, width, height);
        // QRコードデコード
        const imageData = context.getImageData(0, 0, width, height);
        const qrcode = jsqr(imageData.data, width, height);
        if (qrcode === null) {
            return null;
        }
        return qrcode.data;
    }

    public openAlert(args: {
        title: string;
        body: string;
    }) {
        const modalRef = this.modal.open(AlertModalComponent, {
            centered: true
        });
        modalRef.componentInstance.title = args.title;
        modalRef.componentInstance.body = args.body;
    }

}
