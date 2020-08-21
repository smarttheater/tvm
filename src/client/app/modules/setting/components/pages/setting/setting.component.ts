import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { CountryISO, NgxIntlTelInputComponent, SearchCountryField, TooltipLabel, } from 'ngx-intl-tel-input';
import { Observable } from 'rxjs';
import { Models } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';
import { ActionService, MasterService, UtilService } from '../../../../../services';
import * as reducers from '../../../../../store/reducers';
import { LibphonenumberFormatPipe } from '../../../../shared/pipes/libphonenumber-format.pipe';

@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
    public settingForm: FormGroup;
    public user: Observable<reducers.IUserState>;
    public master: Observable<reducers.IMasterState>;
    public error: Observable<string | null>;
    public isLoading: Observable<boolean>;
    public posList: { id: string; name: string; typeOf: string; }[];
    public printers = Models.Util.Printer.printers;
    public connectionType = Models.Util.Printer.ConnectionType;
    public viewType = Models.Util.ViewType;
    public theaters: factory.chevre.place.movieTheater.IPlaceWithoutScreeningRoom[];
    public environment = getEnvironment();
    public SearchCountryField = SearchCountryField;
    public TooltipLabel = TooltipLabel;
    public CountryISO = CountryISO;
    @ViewChild('intlTelInput') private intlTelInput: NgxIntlTelInputComponent;

    constructor(
        private formBuilder: FormBuilder,
        private store: Store<reducers.IState>,
        private utilService: UtilService,
        private actionService: ActionService,
        private masterService: MasterService,
        private translate: TranslateService,
        private router: Router
    ) { }

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
            this.theaters = await this.masterService.getTheaters();
            await this.createSettlingForm();
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
        }
        setTimeout(() => {
            if (this.intlTelInput === undefined) {
                return;
            }
            const findResult = this.intlTelInput.allCountries.find(c => c.iso2 === CountryISO.Japan);
            if (findResult === undefined) {
                return;
            }
            findResult.placeHolder = this.translate.instant('form.placeholder.telephone');
        }, 0);
    }

    /**
     * フォーム作成
     */
    private async createSettlingForm() {
        const profile = this.environment.PROFILE;
        this.settingForm = this.formBuilder.group({
            theaterBranchCode: ['', [Validators.required]],
            posId: [''],
            printerType: [Models.Util.Printer.ConnectionType.None],
            printerIpAddress: [''],
            paymentCash: [''],
            paymentCreditcard: [''],
            paymentEmoney: [''],
            paymentCode: [''],
        });
        profile.forEach(p => {
            const validators: ValidatorFn[] = [];
            if (p.required !== undefined && p.required) {
                validators.push(Validators.required);
            }
            if (p.maxLength !== undefined) {
                validators.push(Validators.maxLength(p.maxLength));
            }
            if (p.minLength !== undefined) {
                validators.push(Validators.minLength(p.minLength));
            }
            if (p.pattern !== undefined) {
                validators.push(Validators.pattern(p.pattern));
            }
            if (p.key === 'email') {
                validators.push(Validators.email);
            }
            this.settingForm.addControl(p.key, new FormControl(p.value, validators));
        });
        const user = await this.actionService.user.getData();
        if (user.theater !== undefined) {
            this.settingForm.controls.theaterBranchCode.setValue(user.theater.branchCode);
            this.changePosList();
        }
        if (user.pos !== undefined) {
            this.settingForm.controls.posId.setValue(user.pos.id);
        }
        const customerContact = user.customerContact;
        if (customerContact !== undefined) {
            Object.keys(customerContact).forEach(key => {
                const value = (<any>customerContact)[key];
                if (value === undefined || this.settingForm.controls[key] === undefined) {
                    return;
                }
                if (key === 'telephone') {
                    this.settingForm.controls.telephone
                        .setValue(new LibphonenumberFormatPipe().transform(value));
                    return;
                }
                this.settingForm.controls[key].setValue(value);
            });
        }
        if (user.printer !== undefined) {
            this.settingForm.controls.printerType.setValue(user.printer.connectionType);
            this.settingForm.controls.printerIpAddress.setValue(user.printer.ipAddress);
        }
        if (user.payment !== undefined && user.payment.cash !== undefined) {
            this.settingForm.controls.paymentCash.setValue(user.payment.cash.ipAddress);
        }
        if (user.payment !== undefined && user.payment.creditcard !== undefined) {
            this.settingForm.controls.paymentCreditcard.setValue(user.payment.creditcard.ipAddress);
        }
        if (user.payment !== undefined && user.payment.emoney !== undefined) {
            this.settingForm.controls.paymentEmoney.setValue(user.payment.emoney.ipAddress);
        }
        if (user.payment !== undefined && user.payment.code !== undefined) {
            this.settingForm.controls.paymentCode.setValue(user.payment.code.ipAddress);
        }
        console.log(this.settingForm);
    }

    /**
     * POS変更
     */
    public changePosList() {
        this.settingForm.controls.posId.setValue('');
        const theaterBranchCode = this.settingForm.controls.theaterBranchCode.value;
        if (theaterBranchCode === '') {
            this.posList = [];
            return;
        }
        const findResult = this.theaters.find(t => (t.branchCode === theaterBranchCode));
        if (findResult === undefined) {
            this.posList = [];
            return;
        }
        this.posList = (findResult.hasPOS === undefined) ? [] : findResult.hasPOS;
    }


    /**
     * 設定変更
     */
    public async onSubmit() {
        Object.keys(this.settingForm.controls).forEach((key) => {
            this.settingForm.controls[key].markAsTouched();
        });
        if (this.settingForm.invalid) {
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: this.translate.instant('setting.alert.validation')
            });
            return;
        }
        try {
            const theaterBranchCode = this.settingForm.controls.theaterBranchCode.value;
            const posId = this.settingForm.controls.posId.value;
            const theater = this.theaters.find(t => (t.branchCode === theaterBranchCode));
            if (theater === undefined) {
                throw new Error('theater not found').message;
            }
            const pos = (theater.hasPOS === undefined) ? theater.hasPOS : theater.hasPOS.find(p => p.id === posId);
            const payment = {
                cash: (this.settingForm.controls.paymentCash.value === '')
                    ? undefined
                    : { ipAddress: this.settingForm.controls.paymentCash.value },
                creditcard: (this.settingForm.controls.paymentCreditcard.value === '')
                    ? undefined
                    : { ipAddress: this.settingForm.controls.paymentCreditcard.value },
                emoney: (this.settingForm.controls.paymentEmoney.value === '')
                    ? undefined
                    : { ipAddress: this.settingForm.controls.paymentEmoney.value },
                code: (this.settingForm.controls.paymentCode.value === '')
                    ? undefined
                    : { ipAddress: this.settingForm.controls.paymentCode.value }
            };
            this.actionService.user.updateAll({
                pos,
                theater,
                customerContact: {
                    familyName: (this.settingForm.controls.familyName === undefined)
                        ? undefined : this.settingForm.controls.familyName.value,
                    givenName: (this.settingForm.controls.givenName === undefined)
                        ? undefined : this.settingForm.controls.givenName.value,
                    email: (this.settingForm.controls.email === undefined)
                        ? undefined : this.settingForm.controls.email.value,
                    telephone: (this.settingForm.controls.telephone === undefined)
                        ? undefined : this.settingForm.controls.telephone.value.e164Number,
                    // ? undefined : this.settingForm.controls.telephone.value,
                    age: (this.settingForm.controls.age === undefined)
                        ? undefined : this.settingForm.controls.age.value,
                    address: (this.settingForm.controls.address === undefined)
                        ? undefined : this.settingForm.controls.address.value,
                    gender: (this.settingForm.controls.gender === undefined)
                        ? undefined : this.settingForm.controls.gender.value
                },
                printer: {
                    ipAddress: this.settingForm.controls.printerIpAddress.value,
                    connectionType: this.settingForm.controls.printerType.value
                },
                payment: (payment.cash !== undefined
                    || payment.creditcard !== undefined
                    || payment.emoney !== undefined
                    || payment.code !== undefined) ? payment : undefined
            });
            this.utilService.openAlert({
                title: this.translate.instant('common.complete'),
                body: this.translate.instant('setting.alert.success')
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
            connectionType: this.settingForm.controls.printerType.value,
            ipAddress: this.settingForm.controls.printerIpAddress.value
        };
        try {
            await this.actionService.order.print({ orders: [], printer });
        } catch (error) {
            console.error(error);
            this.utilService.openAlert({
                title: this.translate.instant('common.error'),
                body: `
                <p class="mb-4">${this.translate.instant('setting.alert.print')}</p>
                    <div class="p-3 bg-light-gray select-text">
                    <code>${error}</code>
                </div>`
            });
        }
    }

    /**
     * プリンター変更
     */
    public changePrinterType() {
        if (this.settingForm.controls.printerType.value === Models.Util.Printer.ConnectionType.StarBluetooth) {
            this.settingForm.controls.printerIpAddress.setValue(this.translate.instant('setting.starBluetoothAddress'));
        }
    }

    /**
     * 必須判定
     */
    public isRequired(key: String) {
        if (key === 'theaterBranchCode') {
            return true;
        }
        return this.environment.PROFILE.find(p => p.key === key && p.required) !== undefined;
    }

    /**
     * 購入者情報フォームのコントロールkeyを配列で返却
     */
    public getProfileFormKeys() {
        return Object.keys(this.settingForm.controls).filter(key => {
            return (key !== 'printerType'
            && key !== 'printerIpAddress'
            && !/payment/.test(key));
        });
    }

    /**
     * 追加特性項目取得
     */
    public getAdditionalProperty(key: string) {
        return this.environment.PROFILE.find(p => /additionalProperty/.test(p.key) && p.key === key);
    }

}
