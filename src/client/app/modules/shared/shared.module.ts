import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BaseComponent } from './components/pages/base/base.component';
import { AlertModalComponent } from './components/parts/alert-modal/alert-modal.component';
import { CaschcangerCountModalComponent } from './components/parts/caschcanger/count-modal/count-modal.component';
import { ConfirmModalComponent } from './components/parts/confirm-modal/confirm-modal.component';
import { ContentsComponent } from './components/parts/contents/contents.component';
import { CurrentDateTimeComponent } from './components/parts/current-date-time/current-date-time.component';
import { FooterComponent } from './components/parts/footer/footer.component';
import { CheckboxComponent } from './components/parts/form/checkbox/checkbox.component';
import { HeaderComponent } from './components/parts/header/header.component';
import { ItemListComponent } from './components/parts/item-list/item-list.component';
import { LanguageComponent } from './components/parts/language/language.component';
import { LoadingComponent } from './components/parts/loading/loading.component';
import { MembershipCheckModalComponent } from './components/parts/membership/check-modal/check-modal.component';
import { MovieTicketCheckModalComponent } from './components/parts/movie-ticket/check-modal/check-modal.component';
import { NumericKeypadComponent } from './components/parts/numeric-keypad/numeric-keypad.component';
import { PageTitleComponent } from './components/parts/page-title/page-title.component';
import { PrintResultComponent } from './components/parts/print-result/print-result.component';
import { PurchaseEventTicketModalComponent } from './components/parts/purchase/event/ticket-modal/ticket-modal.component';
import { PurchaseSeatTicketModalComponent } from './components/parts/purchase/seat-ticket-modal/seat-ticket-modal.component';
import { QRCodeReaderModalComponent } from './components/parts/qrcode/reader-modal/reader-modal.component';
import { QRCodeViewerModalComponent } from './components/parts/qrcode/viewer-modal/viewer-modal.component';
import { QuantityInputComponent } from './components/parts/quantity-input/quantity-input.component';
import { ReservationDetailModalComponent } from './components/parts/reservation/detail-modal/detail-modal.component';
import { ScreenComponent } from './components/parts/screen/screen.component';
import { StaticModalComponent } from './components/parts/static-modal/static-modal.component';
import { ChangeLanguagePipe } from './pipes/change-language.pipe';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { LibphonenumberFormatPipe } from './pipes/libphonenumber-format.pipe';

const components = [
    BaseComponent,
    ContentsComponent,
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    ScreenComponent,
    ItemListComponent,
    CheckboxComponent,
    CurrentDateTimeComponent,
    PrintResultComponent,
    QuantityInputComponent,
    LanguageComponent,
    PageTitleComponent,
];

const entryComponents = [
    AlertModalComponent,
    ConfirmModalComponent,
    StaticModalComponent,
    MovieTicketCheckModalComponent,
    NumericKeypadComponent,
    PurchaseSeatTicketModalComponent,
    PurchaseEventTicketModalComponent,
    QRCodeReaderModalComponent,
    QRCodeViewerModalComponent,
    ReservationDetailModalComponent,
    CaschcangerCountModalComponent,
    MembershipCheckModalComponent,
];

@NgModule({
    declarations: [
        ...components,
        ...entryComponents,
        LibphonenumberFormatPipe,
        ChangeLanguagePipe,
        FormatDatePipe,
    ],
    entryComponents,
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule,
        ModalModule,
        BsDatepickerModule,
        PaginationModule,
        NgxIntlTelInputModule,
    ],
    exports: [
        ...components,
        ...entryComponents,
        LibphonenumberFormatPipe,
        ChangeLanguagePipe,
        FormatDatePipe,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule,
        ModalModule,
        BsDatepickerModule,
        PaginationModule,
        NgxIntlTelInputModule,
    ],
})
export class SharedModule {}
