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
        //let url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+searchPlace+'&key=' + this.google_api_key + '&sessiontoken=1234567890';
        var url1 = "https://www.google.com/maps/embed/v1/undefined?origin=" + searchPlace + "&key= " + this.google_api_key;
        var url = "https://www.google.com/maps/embed/v1/place?key=" + this.google_api_key + "&q= " + searchPlace + " allowfullscreen&output=embed";
        return this.GET(url1);
    };
    Map1Service.prototype.GET = function (url) {
        //  debugger;
        return this.http.get(url);
    };
    Map1Service.prototype.getPosition = function () {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (resp) {
                resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
            }, function (err) {
                reject(err);
            });
        });
    };
    Map1Service.prototype.getPos = function () {
        navigator.geolocation.getCurrentPosition(function (res) {
            console.log(res);
        });
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