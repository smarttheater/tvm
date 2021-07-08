/**
 * NgModule
 */
import { NgModule } from '@angular/core';
import {
    BrowserModule,
    HammerModule,
    HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { Functions } from '.';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { HammerConfig } from './models/util/hammer';
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { StoreModule } from './store.module';
import { CoreStoreModule } from './store/core/store';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HammerModule,
        AppRoutingModule,
        StoreModule,
        CoreStoreModule,
        CoreModule,
        SharedModule,
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot(),
        PaginationModule.forRoot(),
        TranslateModule.forRoot(Functions.Translate.getTranslateModuleConfig()),
    ],
    providers: [
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: HammerConfig,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
