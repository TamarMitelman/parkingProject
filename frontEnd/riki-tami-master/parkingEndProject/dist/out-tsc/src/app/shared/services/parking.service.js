import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var ParkingService = /** @class */ (function () {
    function ParkingService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = environment.apiEndPoint + "ParkingProject/Parking/";
    }
    //מחזיר רשימת חניונים באזור היעד
    ParkingService.prototype.getParking_Search = function (userId, lat, lon, orderBy) {
        return this.httpClient.get(this.baseUrl + "GetParking_Search/" + userId + "/" + lat + "/" + lon + "/" + orderBy + "/");
    };
    ParkingService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ParkingService);
    return ParkingService;
}());
export { ParkingService };
//# sourceMappingURL=parking.service.js.map