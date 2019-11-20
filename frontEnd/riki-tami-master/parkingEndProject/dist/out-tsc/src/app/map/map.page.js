import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef, NgZone, ViewChild } from '@angular/core';
import { Map1Service } from '../shared/services/map';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ParkingService } from '../shared/services/parking.service';
import { DomSanitizer } from '@angular/platform-browser';
var MapPage = /** @class */ (function () {
    function MapPage(mapService, geolocation, navCtrl, changeDetector, zone, platform, parkingService, router, sanitizer) {
        var _this = this;
        this.mapService = mapService;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.changeDetector = changeDetector;
        this.zone = zone;
        this.platform = platform;
        this.parkingService = parkingService;
        this.router = router;
        this.sanitizer = sanitizer;
        //  ngOnInit(): void {
        //     throw new Error("Method not implemented.");
        //     }
        this.latitude = 32.0775395;
        this.longitude = 34.771829000000025;
        //  latitude = 32.077539500000000;
        // longitude = 34.7718290000000255;
        this.mapType = 'satellite';
        this.parkings = [];
        this.findx = 0;
        this.findy = 0;
        this.first = false;
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp);
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    MapPage.prototype.getSearch = function () {
        var _this = this;
        this.mapService.getStreetAddress(this.searchAddress).subscribe(function (res) {
            console.log(res);
            _this.adressses = JSON.parse(res['_body'])['predictions'].map(function (p) { return p.description; });
        });
    };
    MapPage.prototype.start = function () {
        var _this = this;
        var input = document.getElementById('places').getElementsByTagName('input')[0];
        var autocomplete = new google.maps.places.Autocomplete(input);
        //this.getgeolocation();
        google.maps.event.addListener(autocomplete, 'place_changed', function (plc) {
            _this.place = autocomplete.getPlace();
            _this.findx = _this.place.geometry.location.lat();
            _this.findy = _this.place.geometry.location.lng();
            console.log("findx", _this.findx);
            console.log("findy", _this.findy);
            _this.changeDetector.detectChanges();
            // this.f();
        });
    };
    MapPage.prototype.ionViewWillEnter = function () {
        this.start();
    };
    // f() {
    //   // this.geolocation.getCurrentPosition().then((resp) => {
    //   //   console.log("resp comeeeeeeeeee: ", resp)
    //   // }).catch((error) => {
    //   //   console.log('Error getting location', error);
    //   // });
    //   // let watch = this.geolocation.watchPosition();
    //   // watch.subscribe((data) => {
    //   // });
    // }
    MapPage.prototype.goe = function () {
        var input = document.getElementById('places').getElementsByTagName('input')[0];
        var geocoder = new google.maps.Geocoder();
        console.log("geocoder", geocoder);
        var lng = this.findx;
        var lat = this.findy;
        var latlng = new google.maps.LatLng(lat, lng);
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    //  var address= (results[1].formatted_address);
                    input.value = results[0].formatted_address;
                    // alert(address);
                }
                else {
                    //  alert("No results found");
                }
            }
            else {
                alert("Geocoder failed due to: " + status);
            }
        });
    };
    MapPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        var input = this.theinput;
        var autocomplete = new google.maps.places.Autocomplete(input);
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            _this.place = autocomplete.getPlace();
            _this.findx = _this.place.geometry.location.lat();
            _this.findy = _this.place.geometry.location.lng();
            _this.changeDetector.detectChanges();
        });
    };
    // setting() {
    //   debugger;
    //   //this.navCtrl.(user-setting);
    //   //  this.parkingService.showParkingDetail = user;
    //   //  this.router.navigate(['user-setting']);
    // }
    MapPage.prototype.onClear = function (event) {
    };
    MapPage.prototype.search = function () {
        this.router.navigate(['parking-result', this.findx, this.findy]);
    };
    //   positionPlaceholder()
    //   {
    //    return new Promise(function(resolve, reject) {
    //   resolve('some sucess stuff');
    //   reject('some fail stuff');
    // }
    //    );
    // }
    MapPage.prototype.addUser = function () {
        this.router.navigate(['add-new-user']);
    };
    tslib_1.__decorate([
        ViewChild('inputname'),
        tslib_1.__metadata("design:type", Object)
    ], MapPage.prototype, "theinput", void 0);
    MapPage = tslib_1.__decorate([
        Component({
            selector: 'app-map',
            templateUrl: './map.page.html',
            styleUrls: ['./map.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Map1Service, Geolocation,
            NavController,
            ChangeDetectorRef,
            NgZone,
            Platform,
            ParkingService,
            Router,
            DomSanitizer])
    ], MapPage);
    return MapPage;
}());
export { MapPage };
//# sourceMappingURL=map.page.js.map