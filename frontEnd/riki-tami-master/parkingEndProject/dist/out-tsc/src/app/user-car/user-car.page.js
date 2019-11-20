import * as tslib_1 from "tslib";
import { Component, NgZone } from '@angular/core';
import { CarService } from '../shared/services/Car.service';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
var UserCarPage = /** @class */ (function () {
    function UserCarPage(navCtrl, zone, platform, carService, router) {
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.platform = platform;
        this.carService = carService;
        this.router = router;
        this.fromUser = false;
        this.answer = false;
        this.cars = [];
        this.isfirst = 0;
    }
    UserCarPage.prototype.ngOnInit = function () {
    };
    UserCarPage.prototype.get_userCars = function () {
        var _this = this;
        this.carService.get_user_cars(1).subscribe(function (response) {
            console.log(response);
            _this.cars = response;
            _this.cars.forEach(function (car) {
                car['is_used_now'] = false;
            });
        }, function (error) {
            console.log(error);
        });
    };
    UserCarPage.prototype.checkedCar = function (event) {
        if (event.checked = true)
            // this.fromUser = !this.fromUser;
            //  if (this.fromUser) {
            this.cars.forEach(function (car) {
                console.log("car.car_number" + car.car_number);
                console.log("event.target.value" + event.target.value);
                if (car.car_number != event.target.value)
                    car['is_used_now'] = false;
                else
                    car['is_used_now'] = true; //event.target.checked;
            });
        // }
    };
    UserCarPage.prototype.selectCar = function () {
        console.log(this.cars.values);
    };
    UserCarPage = tslib_1.__decorate([
        Component({
            selector: 'app-user-car',
            templateUrl: './user-car.page.html',
            styleUrls: ['./user-car.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            NgZone,
            Platform,
            CarService,
            Router])
    ], UserCarPage);
    return UserCarPage;
}());
export { UserCarPage };
//# sourceMappingURL=user-car.page.js.map