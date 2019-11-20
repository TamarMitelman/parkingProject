import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MapPage } from './map/map.page';
import { ParkingResultPage } from './parking-result/parking-result.page';
import { HomePage } from './home/home.page';
import { Map1Service } from './shared/services/map';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ParkingDetailPage} from '../app/parking-detail/parking-detail.page';
import { UserSettingsPage } from './user-settings/user-settings.page';


@NgModule({
  declarations: [AppComponent,MapPage,ParkingResultPage,HomePage,ParkingDetailPage,UserSettingsPage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    FormsModule,IonicStorageModule.forRoot(),HttpClientModule
  ],
  providers: [
    Geolocation,
    StatusBar,
    LaunchNavigator,
    SplashScreen,
    Map1Service,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
