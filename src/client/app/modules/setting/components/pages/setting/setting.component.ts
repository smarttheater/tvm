import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { Models } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';
import {
    ActionService,
    CinerinoService,
    EpsonEPOSService,
    MasterService,
    PaymentService,
    UtilService,
} from '../../../../../services';
import * as reducers from '../../../../../store/reducers';
import { CaschcangerCountModalComponent } from '../../../../shared/components/parts/caschcanger/count-modal/count-modal.component';

@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
    public user: Observable<reducers.IUserState>;
    public master: Observable<reducers.IMasterState>;
    public error: Observable<string | null>;
    public isLoading: Observable<boolean>;
    public posList: { id: string; name: string; typeOf: string }[];
    public theaters: factory.chevre.place.movieTheater.IPlaceWithoutScreeningRoom[];
    public environment = getEnvironment();
    public inputData: {
        app: {
            theater?: factory.chevre.place.movieTheater.IPlaceWithoutScreeningRoom;
            pos?: factory.chevre.place.movieTheater.IPOS;
            applicationType?: Models.Util.Application.ApplicationType;
            applicationPassword?: string;
        };
        device: {
            printerType?: Models.Util.Printer.ConnectionType;
            printerIpAddress?: string;
            cashchanger?: string;
            payment?: string;
        };
        profile?: factory.person.IProfile;
    };
    public appForm: FormGroup;
    public deviceForm: FormGroup;
    public profileForm: FormGroup;

    constructor(
        public epsonEPOSService: EpsonEPOSService,
        private store: Store<reducers.IState>,
        private utilService: UtilService,
        private actionService: ActionService,
        private masterService: MasterService,
        private translate: TranslateService,
        private router: Router,
        private paymentService: PaymentService,
        private cinerinoService: CinerinoService,
        private modal: BsModalService
    ) {}

    /**
     * 初期化
     */
    public async ngOnInit() {
        this.user = this.store.pipe(select(reducers.getUser));
        this.error = this.store.pipe(select(reducers.getError));
        this.isLoading = this.store.pipe(select(reducers.getLoading));
        this.posList = [];
        this.theaters = [];
        try {
            this.theaters = await this.masterService.searchMovieTheaters();
            const {
                theater,
                pos,
                applicationType,
                applicationPassword,
                printer,
                cashchanger,
                payment,
                customerContact,
            } = await this.actionService.user.getData();
            this.inputData = {
                app: {
                    theater,
                    pos,
                    applicationType,
                    applicationPassword,
                },
                device: {
                    printerType: printer?.connectionType,
                    printerIpAddress: printer?.ipAddress,
                    cashchanger,
                    payment,
                },
                profile: customerContact,
            };
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
        }
        try {
            const { cashchanger } = await this.actionService.user.getData();
            if (cashchanger !== undefined) {
                await this.epsonEPOSService.cashchanger.init({
                    ipAddress: cashchanger,
                });
                await this.epsonEPOSService.cashchanger.endDeposit({
                    endDepositType: 'DEPOSIT_REPAY',
                });
                await this.epsonEPOSService.cashchanger.disconnect();
            }
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * 設定変更
     */
    public async onSubmit() {
        Object.keys(this.appForm.controls).forEach((key) => {
            this.appForm.controls[key].markAsTouched();
        });
        Object.keys(this.deviceForm.controls).forEach((key) => {
            this.deviceForm.controls[key].markAsTouched();
        });
        Object.keys(this.profileForm.controls).forEach((key) => {
            this.profileForm.controls[key].markAsTouched();
        });
        if (
            this.appForm.invalid ||
            this.deviceForm.invalid ||
            this.profileForm.invalid
        ) {
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: this.translate.instant('setting.alert.validation'),
            });
            return;
        }
        try {
            const theaterId = this.appForm.controls.theaterId.value;
            const posId = this.appForm.controls.posId.value;
            const theater = this.theaters.find((t) => t.id === theaterId);
            if (theater === undefined) {
                throw new Error('theater not found');
            }
            const pos =
                theater.hasPOS === undefined
                    ? theater.hasPOS
                    : theater.hasPOS.find((p) => p.id === posId);
            this.actionService.user.updateAll({
                pos,
                theater,
                profile: {
                    familyName:
                        this.profileForm.controls.familyName === undefined
                            ? undefined
                            : this.profileForm.controls.familyName.value,
                    givenName:
                        this.profileForm.controls.givenName === undefined
                            ? undefined
                            : this.profileForm.controls.givenName.value,
                    email:
                        this.profileForm.controls.email === undefined
                            ? undefined
                            : this.profileForm.controls.email.value,
                    telephone:
                        this.profileForm.controls.telephone === undefined
                            ? undefined
                            : this.profileForm.controls.telephone.value
                                  .e164Number,
                    // ? undefined : this.settingForm.controls.telephone.value,
                    age:
                        this.profileForm.controls.age === undefined
                            ? undefined
                            : this.profileForm.controls.age.value,
                    address:
                        this.profileForm.controls.address === undefined
                            ? undefined
                            : this.profileForm.controls.address.value,
                    gender:
                        this.profileForm.controls.gender === undefined
                            ? undefined
                            : this.profileForm.controls.gender.value,
                },
                printer: {
                    ipAddress: this.deviceForm.controls.printerIpAddress.value,
                    connectionType: this.deviceForm.controls.printerType.value,
                },
                cashchanger:
                    this.deviceForm.controls.cashchanger.value === undefined
                        ? undefined
                        : this.deviceForm.controls.cashchanger.value,
                payment:
                    this.deviceForm.controls.payment.value === undefined
                        ? undefined
                        : this.deviceForm.controls.payment.value,
                applicationType: this.appForm.controls.applicationType.value,
                applicationPassword:
                    this.appForm.controls.applicationPassword.value,
            });
            this.utilService.openAlert({
                title: this.translate.instant('common.complete'),
                body: this.translate.instant('setting.alert.success'),
            });
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * 印刷
     */
    public async print() {
        const printer = {
            connectionType: this.deviceForm.controls.printerType.value,
            ipAddress: this.deviceForm.controls.printerIpAddress.value,
        };
        try {
            await this.actionService.order.print({ orders: [], printer });
        } catch (error) {
            console.error(error);
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: `
                <p class="mb-4">${this.translate.instant(
                    'setting.alert.print'
                )}</p>
                    <div class="p-3 bg-light-gray select-text">
                    <code>${
                        JSON.stringify(error) === '{}'
                            ? error
                            : JSON.stringify(error)
                    }</code>
                </div>`,
            });
        }
    }

    /**
     * 釣銭機連携
     */
    public async cashchanger(
        method:
            | 'endDeposit'
            | 'connect'
            | 'readCounts'
            | 'collectAll'
            | 'collectPart'
    ) {
        try {
            const ipAddress = this.deviceForm.controls.cashchanger.value;
            if (method === 'connect') {
                await this.epsonEPOSService.cashchanger.init({ ipAddress });
                await this.epsonEPOSService.cashchanger.disconnect();
                this.utilService.openAlert({
                    title: this.translate.instant('common.complete'),
                    body: this.translate.instant('setting.alert.connection'),
                });
            }
            if (method === 'endDeposit') {
                await this.epsonEPOSService.cashchanger.init({ ipAddress });
                await this.epsonEPOSService.cashchanger.endDeposit({
                    endDepositType: 'DEPOSIT_REPAY',
                });
                await this.epsonEPOSService.cashchanger.disconnect();
            }
            if (method === 'readCounts') {
                await this.epsonEPOSService.cashchanger.init({ ipAddress });
                const counts =
                    await this.epsonEPOSService.cashchanger.readCounts();
                await this.epsonEPOSService.cashchanger.disconnect();
                console.log('counts', counts);
                this.modal.show(CaschcangerCountModalComponent, {
                    initialState: {
                        counts,
                    },
                    class: 'modal-dialog-centered',
                });
            }
            if (method === 'collectAll' || method === 'collectPart') {
                this.utilService.openConfirm({
                    title: this.translate.instant('common.confirm'),
                    body: this.translate.instant('setting.confirm.collect'),
                    cb: async () => {
                        try {
                            const collectType =
                                method === 'collectAll'
                                    ? 'ALL_CASH'
                                    : 'PART_OF_CASH';
                            await this.epsonEPOSService.cashchanger.init({
                                ipAddress,
                            });
                            await this.epsonEPOSService.cashchanger.collect({
                                collectType,
                            });
                            await this.epsonEPOSService.cashchanger.disconnect();
                        } catch (error) {
                            console.error(error);
                            this.utilService.openAlert({
                                title: this.translate.instant('common.error'),
                                body: '',
                                error:
                                    JSON.stringify(error) === '{}'
                                        ? error
                                        : JSON.stringify(error),
                            });
                        }
                    },
                });
            }
        } catch (error) {
            console.error(error);
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: '',
                error:
                    JSON.stringify(error) === '{}'
                        ? error
                        : JSON.stringify(error),
            });
        }
    }

    /**
     * 決済端末連携
     */
    public async payment() {
        try {
            const ipAddress = this.deviceForm.controls.payment.value;
            await this.paymentService.init({ ipAddress });
            const execREsult = await this.paymentService.exec({
                func: Models.Purchase.Payment.FUNC_CODE.TERMINAL.COMMUNICATION,
            });
            console.log(execREsult);
            this.utilService.openAlert({
                title: this.translate.instant('common.complete'),
                body: this.translate.instant('setting.alert.connection'),
            });
        } catch (error) {
            console.error(error);
            const message = error.message === undefined ? error : error.message;
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: `
                <div class="p-3 bg-light-gray select-text">
                    <code>${message}</code>
                </div>`,
            });
        }
    }

    /**
     * サインアウト
     */
    public async signOut() {
        try {
            await this.cinerinoService.getServices();
            await this.cinerinoService.signOut();
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * リロード
     */
    public reload() {
        location.reload();
    }
}
