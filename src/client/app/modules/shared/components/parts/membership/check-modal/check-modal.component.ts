import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { getEnvironment } from '../../../../../../../environments/environment';
import { ActionService, StoreService } from '../../../../../../services';
import * as reducers from '../../../../../../store/reducers';

@Component({
    selector: 'app-membership-check-modal',
    templateUrl: './check-modal.component.html',
    styleUrls: ['./check-modal.component.scss'],
})
export class MembershipCheckModalComponent implements OnInit {
    @Input() public paymentMethodType: string;
    public purchase: Observable<reducers.IPurchaseState>;
    public isLoading: Observable<boolean>;
    public inputForm: FormGroup;
    public errorMessage: string;
    public isSuccess: boolean;
    public successMessage: string;
    public inputCode: string;
    public environment = getEnvironment();
    constructor(
        public modal: BsModalRef,
        private store: Store<reducers.IState>,
        private formBuilder: FormBuilder,
        private translate: TranslateService,
        private actionService: ActionService,
        private storeService: StoreService
    ) {}

    public ngOnInit() {
        this.errorMessage = '';
        this.successMessage = '';
        this.inputCode = '';
        this.isLoading = this.store.pipe(select(reducers.getLoading));
        this.purchase = this.store.pipe(select(reducers.getPurchase));
        this.createForm();
    }

    @HostListener('document:keypress', ['$event'])
    public handleKeyboardEvent(event: KeyboardEvent) {
        const KEY_ENTER = 'Enter';
        const KEY_ESCAPE = 'Escape';
        if (event.key === KEY_ENTER && this.inputCode.length > 0) {
            // 読み取り完了
            const separation = 10;
            const code = this.inputCode.slice(0, separation);
            const password = this.inputCode.slice(
                separation,
                this.inputCode.length
            );
            this.inputForm.controls.code.setValue(code);
            this.inputForm.controls.password.setValue(password);
            this.inputCode = '';
        } else if (event.key !== KEY_ESCAPE) {
            this.inputCode += event.key;
        }
    }

    public createForm() {
        const CODE_MAX_LENGTH = 30;
        const PASSWORD_MAX_LENGTH = 30;
        this.inputForm = this.formBuilder.group({
            code: [
                '',
                [
                    Validators.required,
                    Validators.maxLength(CODE_MAX_LENGTH),
                    Validators.pattern(/^[0-9a-zA-Z]+$/),
                ],
            ],
            password: [
                '',
                [
                    Validators.required,
                    Validators.maxLength(PASSWORD_MAX_LENGTH),
                    Validators.pattern(/^[0-9a-zA-Z]+$/),
                ],
            ],
        });
    }

    /**
     * onSubmit
     */
    public async onSubmit() {
        Object.keys(this.inputForm.controls).forEach((key) => {
            this.inputForm.controls[key].markAsTouched();
        });
        this.inputForm.controls.code.setValue(
            (<HTMLInputElement>document.getElementById('code')).value
        );
        this.inputForm.controls.password.setValue(
            (<HTMLInputElement>document.getElementById('password')).value
        );

        if (this.inputForm.invalid) {
            return;
        }
        this.errorMessage = '';
        this.successMessage = '';
        try {
            const checkProduct = await this.actionService.payment.checkProduct({
                identifier: this.inputForm.controls.code.value,
                accessCode: this.inputForm.controls.password.value,
                issuedThrough: { id: 'xxx' },
            });
            this.storeService.purchase.setCheckProduct({ checkProduct });
            this.createForm();
            this.successMessage = this.translate.instant(
                'modal.membership.check.success'
            );
            this.isSuccess = true;
        } catch (error) {
            console.error(error);
            this.isSuccess = false;
            this.errorMessage = this.translate.instant(
                'modal.membership.check.alert.error'
            );
        }
    }

    public changeCode(value: string) {
        this.inputForm.controls.code.setValue(value);
    }

    public changePassword(value: string) {
        this.inputForm.controls.password.setValue(value);
    }
}
