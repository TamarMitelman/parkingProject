import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddCarPage } from './add-car.page';
var routes = [
    {
        path: '',
        component: AddCarPage
    }
];
var AddCarPageModule = /** @class */ (function () {
    function AddCarPageModule() {
    }
    AddCarPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AddCarPage]
        })
    ], AddCarPageModule);
    return AddCarPageModule;
}());
export { AddCarPageModule };
//# sourceMappingURL=add-car.module.js.map