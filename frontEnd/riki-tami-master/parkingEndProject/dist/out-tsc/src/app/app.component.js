import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Sim } from '@ionic-native/sim/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, sim, router, launch) {
        var _this = this;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.sim = sim;
        this.router = router;
        this.launch = launch;
        this.initializeApp();
        if (!localStorage.getItem('phone')) {
            this.sim.getSimInfo().then(function (info) {
                console.log('Sim info: ', info.cards[0].phoneNumber);
                localStorage.setItem("phone", info.cards[0].phoneNumber);
                _this.router.navigate(['home']);
            }, function (err) {
                _this.router.navigate(['home']);
            });
        }
        else {
            this.router.navigate(['map']);
            var phone = localStorage.getItem('phone');
        }
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            Sim,
            Router,
            LaunchNavigator])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map