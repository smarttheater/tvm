import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { factory } from '@cinerino/sdk';
import { Subscription } from 'rxjs';
import { Models } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';

@Component({
    selector: 'app-input-app',
    templateUrl: './input-app.component.html',
    styleUrls: ['./input-app.component.scss'],
})
export class InputAppComponent implements OnInit, OnDestroy {
    public environment = getEnvironment();
    public formGroup: FormGroup;
    public subscription?: Subscription;
    public posList: factory.chevre.place.movieTheater.IPOS[];
    public applicationType = Models.Util.Application.ApplicationType;
    @Input() public data: {
        theater?: factory.chevre.place.movieTheater.IPlaceWithoutScreeningRoom;
        pos?: factory.chevre.place.movieTheater.IPOS;
        applicationType?: Models.Util.Application.ApplicationType;
        applicationPassword?: string;
    };
    @Input()
    public theaters: factory.chevre.place.movieTheater.IPlaceWithoutScreeningRoom[];
    @Output() public valueChanges = new EventEmitter<FormGroup>();

    constructor(private formBuilder: FormBuilder) {}

    public ngOnInit() {
        this.posList = [];
        this.formGroup = this.createForm();
        const { theater, pos, applicationPassword } = this.data;
        if (theater !== undefined) {
            this.formGroup.controls.theaterId.setValue(theater.id);
            this.changeTheater();
        }
        if (pos !== undefined) {
            this.formGroup.controls.posId.setValue(pos.id);
        }
        const applicationType =
            this.data.applicationType === undefined
                ? this.applicationType.Tvm
                : this.data.applicationType;
        this.formGroup.controls.applicationType.setValue(applicationType);
        if (applicationPassword !== undefined) {
            this.formGroup.controls.applicationPassword.setValue(
                applicationPassword
            );
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
            theaterId: ['', [Validators.required]],
            posId: [''],
            applicationType: [''],
            applicationPassword: [''],
        });

        return formGroup;
    }

    /**
     * 必須判定
     */
    public isRequired(key: String) {
        if (key === 'theaterId') {
            return true;
        }
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

    public changeTheater() {
        this.formGroup.controls.posId.setValue('');
        const theaterId = this.formGroup.controls.theaterId.value;
        const findResult = this.theaters.find((t) => t.id === theaterId);
        if (theaterId === '' || findResult === undefined) {
            this.posList = [];
            return;
        }
        this.posList = findResult.hasPOS === undefined ? [] : findResult.hasPOS;
    }
}
