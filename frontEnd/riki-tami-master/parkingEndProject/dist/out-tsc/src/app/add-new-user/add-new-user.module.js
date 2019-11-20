import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddNewUserPage } from './add-new-user.page';
var routes = [
    {
        path: '',
        component: AddNewUserPage
    }
];
var AddNewUserPageModule = /** @class */ (function () {
    function AddNewUserPageModule() {
    }
    AddNewUserPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AddNewUserPage]
        })
    ], AddNewUserPageModule);
    return AddNewUserPageModule;
}());
export { AddNewUserPageModule };
//# sourceMappingURL=add-new-user.module.js.map