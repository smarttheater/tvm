import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CongestionComponent } from './components/pages/congestion/congestion.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ExpiredComponent } from './components/pages/expired/expired.component';
import { MaintenanceComponent } from './components/pages/maintenance/maintenance.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { StopComponent } from './components/pages/stop/stop.component';
import { ErrorRoutingModule } from './error-routing.module';


@NgModule({
  declarations: [
    ErrorComponent,
    ExpiredComponent,
    MaintenanceComponent,
    CongestionComponent,
    NotfoundComponent,
    StopComponent,
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    SharedModule,
  ]
})
export class ErrorModule { }
