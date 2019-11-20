import { Component } from '@angular/core';
import { Sim } from '@ionic-native/sim/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private sim: Sim,
    public router: Router,
    private launch:LaunchNavigator
  ) {
    this.initializeApp();
    if (!localStorage.getItem('phone')) {
      this.sim.getSimInfo().then(
        (info) => {
          console.log('Sim info: ', info.cards[0].phoneNumber);
          localStorage.setItem("phone", info.cards[0].phoneNumber);
          this.router.navigate(['home'])
        },
        (err) => {
          this.router.navigate(['home'])
        }
      );
    }
    else{
      this.router.navigate(['map']);
     var phone= localStorage.getItem('phone')
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // navigate(){
  //   this.launch.navigate("London,UK");
  // }
}
