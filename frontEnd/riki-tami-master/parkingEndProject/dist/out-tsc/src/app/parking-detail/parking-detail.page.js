import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ParkingService } from '../shared/services/parking.service';
import { Router } from '@angular/router';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
var ParkingDetailPage = /** @class */ (function () {
    function ParkingDetailPage(parkingService, router, launchNavigator) {
        this.parkingService = parkingService;
        this.router = router;
        this.launchNavigator = launchNavigator;
        this.start = "";
        this.destination = "Westminster, London, UK";
    }
    // images:string="../image/parking1.jpg"
    ParkingDetailPage.prototype.ngOnInit = function () {
        this.parkingDetails = this.parkingService.showParkingDetail;
    };
    ParkingDetailPage.prototype.orderParking = function () {
        debugger;
        console.log(this.parkingDetails.p_Id);
        this.router.navigate(['order-parking']);
    };
    ParkingDetailPage.prototype.ok = function () {
        var options = {
            start: this.start
        };
        this.launchNavigator.navigate(this.destination, options)
            .then(function (success) { return alert('Launched navigator'); }, function (error) { return alert('Error launching navigator: ' + error); });
    };
    ParkingDetailPage = tslib_1.__decorate([
        Component({
            selector: 'app-parking-detail',
            templateUrl: './parking-detail.page.html',
            styleUrls: ['./parking-detail.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ParkingService,
            Router, LaunchNavigator])
    ], ParkingDetailPage);
    return ParkingDetailPage;
}());
export { ParkingDetailPage };
//# sourceMappingURL=parking-detail.page.js.map