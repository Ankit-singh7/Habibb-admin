import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentModeRoutingModule } from './payment-mode-routing.module';
import { PaymentModeComponent } from './payment-mode.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PaymentModeComponent],
  imports: [
    CommonModule,
    FormsModule,
    PaymentModeRoutingModule
  ]
})
export class PaymentModeModule { }
