import { ParkingResultPage } from './parking-result/parking-result.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MapPage } from './map/map.page';
import { HomePage } from './home/home.page';
import { ParkingDetailPage } from './parking-detail/parking-detail.page';
import { UserSettingsPage } from './user-settings/user-settings.page';
import { OrderParkingPage } from './order-parking/order-parking.page';
import{AddNewUserPage} from './add-new-user/add-new-user.page';
import {PaymentForParkingPage}from './payment-for-parking/payment-for-parking.page';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: 'map', pathMatch: 'full' },
  { path: 'home', component:HomePage},
  { path: 'map', component:MapPage },
  { path: 'parking-result/:findx/:findy', component:ParkingResultPage },
  { path: 'parking-detail', component:ParkingDetailPage },
  // { path: 'parking-detail', loadChildren: './parking-detail/parking-detail.module#ParkingDetailPageModule' },
  { path: 'user-car', loadChildren: './user-car/user-car.module#UserCarPageModule' },
  { path: 'order-parking',loadChildren: './order-parking/order-parking.module#OrderParkingPageModule' },
  { path: 'add-car', loadChildren: './add-car/add-car.module#AddCarPageModule' },
  { path: 'user-settings', component:UserSettingsPage },
  { path: 'payment-for-parking', component:PaymentForParkingPage },
  { path: 'finish', loadChildren: './finish/finish.module#FinishPageModule' },
  // { path: 'add-new-user', loadChildren: './add-new-user/add-new-user.module#AddNewUserPageModule' },
 // { path: 'add-new-user', component:AddNewUserPage },

  // { path: 'user-settings', loadChildren: './user-settings/user-settings.module#UserSettingsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
