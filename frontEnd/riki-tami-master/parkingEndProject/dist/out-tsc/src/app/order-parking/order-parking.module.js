import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OrderParkingPage } from './order-parking.page';
import { NgCalendarModule } from 'ionic2-calendar';
//import { AddCarPageModule } from '../add-car/add-car.module';
var routes = [
    {
        path: '',
        component: OrderParkingPage
    }
];
var OrderParkingPageModule = /** @class */ (function () {
    function OrderParkingPageModule() {
    }
    OrderParkingPageModule = tslib_1.__decorate([
        NgModule({
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
    ], OrderParkingPageModule);
    return OrderParkingPageModule;
}());
export { OrderParkingPageModule };
//# sourceMappingURL=order-parking.module.js.map