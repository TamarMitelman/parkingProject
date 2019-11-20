import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PaymentForParkingPage } from './payment-for-parking.page';
var routes = [
    {
        path: '',
        component: PaymentForParkingPage
    }
];
var PaymentForParkingPageModule = /** @class */ (function () {
    function PaymentForParkingPageModule() {
    }
    PaymentForParkingPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
            ],
            declarations: []
        })
    ], PaymentForParkingPageModule);
    return PaymentForParkingPageModule;
}());
export { PaymentForParkingPageModule };
//# sourceMappingURL=payment-for-parking.module.js.map