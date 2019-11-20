import { NgModule } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OrderParkingPage } from './order-parking.page';
import { NgCalendarModule } from 'ionic2-calendar';
//import { AddCarPageModule } from '../add-car/add-car.module';


const routes: Routes = [
  {
    path: '',
    component: OrderParkingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCalendarModule,
   // AddCarPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderParkingPage]
})
export class OrderParkingPageModule {
  myDate:Date;
  myTime:Time;
}
