import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
var Map1Service = /** @class */ (function () {
    function Map1Service(http) {
        this.http = http;
        this.contentHeader = new Headers({ 'Content-Type': 'application/json' });
        this.google_api_key = 'AIzaSyB6XGmiIhsaoXzLTu611HLGNL74ZEWIaSE';
    }
    Map1Service.prototype.getAddress = function (params) {
        var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + params.lat + ',' + params.long;
        return this.GET(url);
    };
    Map1Service.prototype.getStreetAddress = function (searchPlace) {
        var url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + searchPlace + '&key=' + this.google_api_key + '&sessiontoken=1234567890';
        return this.GET(url);
    };
    Map1Service.prototype.GET = function (url) {
        //  debugger;
        return this.http.get(url);
    };
    Map1Service = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], Map1Service);
    return Map1Service;
}());
export { Map1Service };
//# sourceMappingURL=map.js.map