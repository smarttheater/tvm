import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PurchaseCinemaDateComponent } from './components/pages/cinema/purchase-cinema-date/purchase-cinema-date.component';
import { PurchaseCinemaScheduleEventComponent } from './components/pages/cinema/purchase-cinema-schedule-event/purchase-cinema-schedule-event.component';
import { PurchaseCinemaScheduleMovieComponent } from './components/pages/cinema/purchase-cinema-schedule-movie/purchase-cinema-schedule-movie.component';
import { PurchaseCinemaScheduleComponent } from './components/pages/cinema/purchase-cinema-schedule/purchase-cinema-schedule.component';
import { PurchaseCinemaSeatComponent } from './components/pages/cinema/purchase-cinema-seat/purchase-cinema-seat.component';
import { PurchaseCinemaTicketComponent } from './components/pages/cinema/purchase-cinema-ticket/purchase-cinema-ticket.component';
import { PurchaseCinemaTopComponent } from './components/pages/cinema/purchase-cinema-top/purchase-cinema-top.component';
import { PurchaseEventDateComponent } from './components/pages/event/purchase-event-date/purchase-event-date.component';
import { PurchaseEventScheduleComponent } from './components/pages/event/purchase-event-schedule/purchase-event-schedule.component';
import { PurchaseEventSeatComponent } from './components/pages/event/purchase-event-seat/purchase-event-seat.component';
import { PurchaseEventSelectComponent } from './components/pages/event/purchase-event-select/purchase-event-select.component';
import { PurchaseEventTicketComponent } from './components/pages/event/purchase-event-ticket/purchase-event-ticket.component';
import { PurchaseEventTopComponent } from './components/pages/event/purchase-event-top/purchase-event-top.component';
import { PurchaseBaseComponent } from './components/pages/purchase-base/purchase-base.component';
import { PurchaseCompleteComponent } from './components/pages/purchase-complete/purchase-complete.component';
import { PurchasePaymentReceptionComponent } from './components/pages/purchase-payment-reception/purchase-payment-reception.component';
import { PurchasePaymentComponent } from './components/pages/purchase-payment/purchase-payment.component';
import { PurchaseRootComponent } from './components/pages/purchase-root/purchase-root.component';
import { PurchaseSeatComponent } from './components/pages/purchase-seat/purchase-seat.component';
import { PurchaseTicketComponent } from './components/pages/purchase-ticket/purchase-ticket.component';
import { InputTicketsComponent } from './components/parts/input-tickets/input-tickets.component';
import { PurchasePerformanceComponent } from './components/parts/performance/performance.component';
import { PurchasePerformancesComponent } from './components/parts/performances/performances.component';
import { PurchaseCartComponent } from './components/parts/purchase-cart/purchase-cart.component';
import { PurchaseInfoComponent } from './components/parts/purchase-info/purchase-info.component';
import { PurchaseTermsComponent } from './components/parts/purchase-terms/purchase-terms.component';
import { PurchaseWarningComponent } from './components/parts/purchase-warning/purchase-warning.component';
import { SeatInfoComponent } from './components/parts/seat-info/seat-info.component';
import { PurchaseStepComponent } from './components/parts/step/step.component';
import { TransactionRemainingTimeComponent } from './components/parts/transaction-remaining-time/transaction-remaining-time.component';
import { PurchaseRoutingModule } from './purchase-routing.module';

@NgModule({
    declarations: [
        PurchaseBaseComponent,
        PurchaseRootComponent,
        PurchaseCinemaSeatComponent,
        PurchaseCinemaTicketComponent,
        PurchaseEventTicketComponent,
        PurchasePaymentComponent,
        PurchasePaymentReceptionComponent,
        PurchaseCompleteComponent,
        PurchaseCinemaScheduleComponent,
        PurchaseEventScheduleComponent,
        PurchasePerformanceComponent,
        PurchasePerformancesComponent,
        PurchaseInfoComponent,
        PurchaseTermsComponent,
        PurchaseWarningComponent,
        TransactionRemainingTimeComponent,
        PurchaseEventSeatComponent,
        PurchaseEventTicketComponent,
        PurchaseTicketComponent,
        PurchaseSeatComponent,
        SeatInfoComponent,
        PurchaseCinemaScheduleMovieComponent,
        PurchaseCinemaScheduleEventComponent,
        PurchaseCinemaTopComponent,
        PurchaseCinemaDateComponent,
        PurchaseStepComponent,
        InputTicketsComponent,
        PurchaseEventTopComponent,
        PurchaseEventDateComponent,
        PurchaseCartComponent,
        PurchaseEventSelectComponent,
    ],
    imports: [CommonModule, PurchaseRoutingModule, SharedModule],
})
export class PurchaseModule {}
