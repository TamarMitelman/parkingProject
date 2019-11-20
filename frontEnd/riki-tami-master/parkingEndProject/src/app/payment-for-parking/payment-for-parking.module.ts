import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxPayPalModule } from 'ngx-paypal';
import { IonicModule } from '@ionic/angular';

import { PaymentForParkingPage } from './payment-for-parking.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentForParkingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: []
})
export class PaymentForParkingPageModule {}
