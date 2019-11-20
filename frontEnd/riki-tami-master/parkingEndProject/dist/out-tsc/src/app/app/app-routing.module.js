import * as tslib_1 from "tslib";
import { ParkingResultPage } from './parking-result/parking-result.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { MapPage } from './map/map.page';
import { HomePage } from './home/home.page';
import { ParkingDetailPage } from './parking-detail/parking-detail.page';
import { UserSettingsPage } from './user-settings/user-settings.page';
var routes = [
    { path: '', redirectTo: 'map', pathMatch: 'full' },
    { path: 'home', component: HomePage },
    { path: 'map', component: MapPage },
    { path: 'parking-result', component: ParkingResultPage },
    { path: 'parking-detail', component: ParkingDetailPage },
    // { path: 'parking-detail', loadChildren: './parking-detail/parking-detail.module#ParkingDetailPageModule' },
    { path: 'user-car', loadChildren: './user-car/user-car.module#UserCarPageModule' },
    { path: 'order-parking', loadChildren: './order-parking/order-parking.module#OrderParkingPageModule' },
    { path: 'add-car', loadChildren: './add-car/add-car.module#AddCarPageModule' },
    { path: 'user-settings', component: UserSettingsPage },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map