import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SettingComponent } from './components/pages/setting/setting.component';
import { InputAppComponent } from './components/parts/input-app/input-app.component';
import { InputCustomerComponent } from './components/parts/input-customer/input-customer.component';
import { InputDeviceComponent } from './components/parts/input-device/input-device.component';
import { SettingRoutingModule } from './setting-routing.module';

@NgModule({
    declarations: [
        SettingComponent,
        InputAppComponent,
        InputCustomerComponent,
        InputDeviceComponent,
    ],
    imports: [CommonModule, SettingRoutingModule, SharedModule],
})
export class SettingModule {}
