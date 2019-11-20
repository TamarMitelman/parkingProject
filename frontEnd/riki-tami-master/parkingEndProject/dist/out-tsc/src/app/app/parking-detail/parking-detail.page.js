import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var ParkingDetailPage = /** @class */ (function () {
    function ParkingDetailPage( // public parkingService: ParkingService
    ) {
    }
    ParkingDetailPage.prototype.ngOnInit = function () {
    };
    ParkingDetailPage.prototype.showParkingDetail = function () {
        //this.showParking=this.parkingService.showParkingDetail;
    };
    ParkingDetailPage = tslib_1.__decorate([
        Component({
            selector: 'app-parking-detail',
            templateUrl: './parking-detail.page.html',
            styleUrls: ['./parking-detail.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ParkingDetailPage);
    return ParkingDetailPage;
}());
export { ParkingDetailPage };
//# sourceMappingURL=parking-detail.page.js.map