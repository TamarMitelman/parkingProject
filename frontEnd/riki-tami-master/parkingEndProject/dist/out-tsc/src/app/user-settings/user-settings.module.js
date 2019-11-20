import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserSettingsPage } from './user-settings.page';
var routes = [
    {
        path: '',
        component: UserSettingsPage
    }
];
var UserSettingsPageModule = /** @class */ (function () {
    function UserSettingsPageModule() {
    }
    UserSettingsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UserSettingsPage]
        })
    ], UserSettingsPageModule);
    return UserSettingsPageModule;
}());
export { UserSettingsPageModule };
//# sourceMappingURL=user-settings.module.js.map