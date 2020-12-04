import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService, PurchaseTransactionGuardService, SettingGuardService, ViewTypeGuardService } from '../../canActivates';
import { PurchaseCinemaDateComponent } from './components/pages/cinema/purchase-cinema-date/purchase-cinema-date.component';
import { PurchaseCinemaScheduleEventComponent } from './components/pages/cinema/purchase-cinema-schedule-event/purchase-cinema-schedule-event.component';
import { PurchaseCinemaScheduleMovieComponent } from './components/pages/cinema/purchase-cinema-schedule-movie/purchase-cinema-schedule-movie.component';
import { PurchaseCinemaScheduleComponent } from './components/pages/cinema/purchase-cinema-schedule/purchase-cinema-schedule.component';
import { PurchaseCinemaSeatComponent } from './components/pages/cinema/purchase-cinema-seat/purchase-cinema-seat.component';
import { PurchaseCinemaTicketComponent } from './components/pages/cinema/purchase-cinema-ticket/purchase-cinema-ticket.component';
import { PurchaseCinemaTopComponent } from './components/pages/cinema/purchase-cinema-top/purchase-cinema-top.component';
import { PurchaseEventScheduleComponent } from './components/pages/event/purchase-event-schedule/purchase-event-schedule.component';
import { PurchaseEventSeatTicketComponent } from './components/pages/event/purchase-event-seat-ticket/purchase-event-seat-ticket.component';
import { PurchaseEventSeatComponent } from './components/pages/event/purchase-event-seat/purchase-event-seat.component';
import { PurchaseEventTicketComponent } from './components/pages/event/purchase-event-ticket/purchase-event-ticket.component';
import { PurchaseBaseComponent } from './components/pages/purchase-base/purchase-base.component';
import { PurchaseCompleteComponent } from './components/pages/purchase-complete/purchase-complete.component';
import { PurchaseConfirmComponent } from './components/pages/purchase-confirm/purchase-confirm.component';
import { PurchasePaymentReceptionComponent } from './components/pages/purchase-payment-reception/purchase-payment-reception.component';
import { PurchasePaymentComponent } from './components/pages/purchase-payment/purchase-payment.component';
import { PurchaseRootComponent } from './components/pages/purchase-root/purchase-root.component';


const routes: Routes = [
  {
    path: '',
    component: PurchaseBaseComponent,
    canActivate: [AuthGuardService, SettingGuardService],
    children: [
      { path: 'root', component: PurchaseRootComponent },
      {
        path: 'cinema',
        canActivate: [ViewTypeGuardService],
        children: [
          { path: '', component: PurchaseCinemaTopComponent },
          { path: 'date', component: PurchaseCinemaDateComponent },
          { path: 'schedule', component: PurchaseCinemaScheduleComponent },
          { path: 'schedule/movie', component: PurchaseCinemaScheduleMovieComponent },
          { path: 'schedule/event/:identifier', component: PurchaseCinemaScheduleEventComponent },
          { path: 'seat', component: PurchaseCinemaSeatComponent },
          { path: 'ticket', component: PurchaseCinemaTicketComponent },
        ]
      },
      {
        path: 'event',
        canActivate: [ViewTypeGuardService],
        children: [
          { path: 'ticket', component: PurchaseEventTicketComponent },
          { path: 'schedule', component: PurchaseEventScheduleComponent },
          {
            path: 'seat',
            canActivate: [ViewTypeGuardService],
            children: [
              { path: '', component: PurchaseEventSeatComponent },
              { path: 'ticket', component: PurchaseEventSeatTicketComponent }
            ]
          },
        ]
      },
      { path: 'payment', canActivate: [PurchaseTransactionGuardService], component: PurchasePaymentComponent },
      { path: 'payment/reception', canActivate: [PurchaseTransactionGuardService], component: PurchasePaymentReceptionComponent },
      { path: 'confirm', canActivate: [PurchaseTransactionGuardService], component: PurchaseConfirmComponent },
      { path: 'complete', component: PurchaseCompleteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
