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
import { ParkingDetailPage } from '../app/parking-detail/parking-detail.page';
import { UserSettingsPage } from './user-settings/user-settings.page';
// import { DatePickerModule } from 'ionic4-date-picker';
// import { CalendarModule } from 'ionic3-calendar-en';
import { NgCalendarModule } from 'ionic2-calendar';
import { SafeUrlPipe } from './safe-url.pipe';
import { AgmCoreModule } from '@agm/core';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { Sim } from '@ionic-native/sim/ngx';
import { PaymentForParkingPage } from './payment-for-parking/payment-for-parking.page';
import { NgxPayPalModule } from 'ngx-paypal';
@NgModule({
  declarations: [AppComponent, MapPage, ParkingResultPage, HomePage, ParkingDetailPage, UserSettingsPage,PaymentForParkingPage, SafeUrlPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,NgxPayPalModule,
    FormsModule, IonicStorageModule.forRoot(), HttpClientModule, NgCalendarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6XGmiIhsaoXzLTu611HLGNL74ZEWIaSE'
    })
  ],
  providers: [
    Geolocation,
    StatusBar,
    LaunchNavigator,
    SplashScreen,
    Map1Service,
    ,
    Sim,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
