import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
var OrderParkingPage = /** @class */ (function () {
    function OrderParkingPage(platform, navCtrl) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.date = new Date(Date.now());
    }
    OrderParkingPage.prototype.ngOnInit = function () {
    };
    OrderParkingPage.prototype.temp = function (param) {
        alert(param);
    };
    OrderParkingPage.prototype.dateSelected = function (date) {
        console.log(date);
    };
    OrderParkingPage = tslib_1.__decorate([
        Component({
            selector: 'app-order-parking',
            templateUrl: './order-parking.page.html',
            styleUrls: ['./order-parking.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            NavController])
    ], OrderParkingPage);
    return OrderParkingPage;
}());
export { OrderParkingPage };
//# sourceMappingURL=order-parking.page.js.map