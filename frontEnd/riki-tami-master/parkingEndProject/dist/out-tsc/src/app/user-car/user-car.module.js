import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserCarPage } from './user-car.page';
var routes = [
    {
        path: '',
        component: UserCarPage
    }
];
var UserCarPageModule = /** @class */ (function () {
    function UserCarPageModule() {
    }
    UserCarPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UserCarPage]
        })
    ], UserCarPageModule);
    return UserCarPageModule;
}());
export { UserCarPageModule };
//# sourceMappingURL=user-car.module.js.map