import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Models } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';

@Component({
    selector: 'app-input-device',
    templateUrl: './input-device.component.html',
    styleUrls: ['./input-device.component.scss'],
})
export class InputDeviceComponent implements OnInit, OnDestroy {
    public environment = getEnvironment();
    public formGroup: FormGroup;
    public subscription?: Subscription;
    public connectionType = Models.Util.Printer.ConnectionType;
    public printers = Models.Util.Printer.printers;
    @Input() public data: {
        printerType?: Models.Util.Printer.ConnectionType;
        printerIpAddress?: string;
        cashchanger?: string;
        payment?: string;
    };
    @Input() public isConnected: boolean;
    @Output() public valueChanges = new EventEmitter<FormGroup>();
    @Output() public print = new EventEmitter<void>();
    @Output() public payment = new EventEmitter<void>();
    @Output() public cashchanger = new EventEmitter<
        'endDeposit' | 'connect' | 'readCounts' | 'collectAll' | 'collectPart'
    >();

    constructor(
        private formBuilder: FormBuilder,
        private translate: TranslateService
    ) {}

    public ngOnInit() {
        this.formGroup = this.createForm();
        const { printerType, printerIpAddress, cashchanger, payment } =
            this.data;
        if (printerType !== undefined) {
            this.formGroup.controls.printerType.setValue(printerType);
            this.formGroup.controls.printerIpAddress.setValue(printerIpAddress);
        }
        if (cashchanger !== undefined) {
            this.formGroup.controls.cashchanger.setValue(cashchanger);
        }
        if (payment !== undefined) {
            this.formGroup.controls.payment.setValue(payment);
        }
        this.valueChanges.emit(this.formGroup);
        this.subscription = this.formGroup.valueChanges.subscribe(() => {
            this.valueChanges.emit(this.formGroup);
        });
    }

    public ngOnDestroy() {
        if (this.subscription === undefined) {
            return;
        }
        this.subscription.unsubscribe();
    }

    /**
     * フォーム作成
     */
    private createForm() {
        const formGroup = this.formBuilder.group({
            printerType: [Models.Util.Printer.ConnectionType.None],
            printerIpAddress: [''],
            cashchanger: [''],
            payment: [''],
        });

        return formGroup;
    }

    /**
     * 必須判定
     */
    public isRequired(key: String) {
        return (
            this.environment.PROFILE.find(
                (p) => p.key === key && p.required
            ) !== undefined
        );
    }

    /**
     * 購入者情報フォームのコントロールkeyを配列で返却
     */
    public getProfileFormKeys() {
        return Object.keys(this.formGroup.controls);
    }

    /**
     * プロフィール項目取得
     */
    public getProfileProperty(key: string) {
        return this.environment.PROFILE.find((p) => p.key === key);
    }

    /**
     * 追加特性項目取得
     */
    public getAdditionalProperty(key: string) {
        return this.environment.PROFILE.find(
            (p) => /additionalProperty/.test(p.key) && p.key === key
        );
    }

    /**
     * プリンター変更
     */
    public changePrinterType() {
        if (
            this.formGroup.controls.printerType.value ===
            Models.Util.Printer.ConnectionType.StarBluetooth
        ) {
            this.formGroup.controls.printerIpAddress.setValue(
                this.translate.instant('setting.starBluetoothAddress')
            );
        }
    }
}
