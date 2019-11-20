import * as tslib_1 from "tslib";
import { Component, ViewChild, NgZone, ChangeDetectorRef } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map1Service } from '../shared/services/map';
import { ParkingService } from '../shared/services/parking.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
var ParkingResultPage = /** @class */ (function () {
    // @ViewChild('myNav') nav: NavController
    // public rootPage: any = ParkingResultPage;
    function ParkingResultPage(navCtrl, geolocation, zone, platform, mapService, parkingService, router, changeDetector, sanitizer, activatedRoute) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.zone = zone;
        this.platform = platform;
        this.mapService = mapService;
        this.parkingService = parkingService;
        this.router = router;
        this.changeDetector = changeDetector;
        this.sanitizer = sanitizer;
        this.activatedRoute = activatedRoute;
        this.latitude = 32.077539500000000;
        this.longitude = 34.7718290000000255;
        this.mapType = 'satellite';
        this.parkings = [];
        this.first = false;
        this.choosenMap = false;
        this.orderBy = "orderByDistance";
    }
    ParkingResultPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (p) {
            _this.findx = p['findx'] || '';
            _this.latitude = Number(p['findx']);
            _this.longitude = Number(p['findy']);
            _this.findy = p['findy'];
            if (_this.findx != null && _this.findy != null) {
                console.log("findx", _this.findy);
                _this.ngAfterViewInit();
                _this.getParkingsSearch();
            }
        });
    };
    ParkingResultPage.prototype.ngAfterViewInit = function () {
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
    ParkingResultPage.prototype.getParkingsSearch = function () {
        var _this = this;
        // this.choosenMap = false;
        console.log(this.findx);
        console.log(this.findy);
        this.parkingService.getParking_Search(1, this.findx, this.findy, this.orderBy).subscribe(function (response) {
            console.log(response);
            _this.parkings = response;
        }, function (error) {
            console.log(error);
        });
    };
    ParkingResultPage.prototype.parkingDetail = function (parking) {
        this.parkingService.showParkingDetail = parking;
        this.router.navigate(['parking-detail']);
    };
    ParkingResultPage.prototype.orderParking = function ($event, parking) {
        $event.stopPropagation();
        this.parkingService.showParkingDetail = parking;
        this.router.navigate(['order-parking']);
    };
    ParkingResultPage.prototype.orderByDistance = function () {
        this.orderBy = "orderByDistance";
        this.getParkingsSearch();
    };
    ParkingResultPage.prototype.orderByCost = function () {
        this.orderBy = "orderByCost";
        this.getParkingsSearch();
    };
    ParkingResultPage.prototype.orderByFull = function () {
        this.orderBy = "orderByFull";
        this.getParkingsSearch();
    };
    tslib_1.__decorate([
        ViewChild('inputname'),
        tslib_1.__metadata("design:type", Object)
    ], ParkingResultPage.prototype, "theinput", void 0);
    ParkingResultPage = tslib_1.__decorate([
        Component({
            selector: 'app-parking-result',
            templateUrl: './parking-result.page.html',
            // template: '<ion-nav #myNav [root]="rootPage"></ion-nav>',
            styleUrls: ['./parking-result.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            Geolocation,
            NgZone,
            Platform,
            Map1Service,
            ParkingService,
            Router,
            ChangeDetectorRef,
            DomSanitizer,
            ActivatedRoute])
    ], ParkingResultPage);
    return ParkingResultPage;
}());
export { ParkingResultPage };
//# sourceMappingURL=parking-result.page.js.map