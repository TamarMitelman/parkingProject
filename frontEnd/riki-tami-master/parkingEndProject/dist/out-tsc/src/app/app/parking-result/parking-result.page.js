import * as tslib_1 from "tslib";
import { Component, ViewChild, NgZone, ChangeDetectorRef } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map1Service } from '../shared/services/map';
import { ParkingService } from '../shared/services/parking.service';
import { Router } from '@angular/router';
var ParkingResultPage = /** @class */ (function () {
    function ParkingResultPage(navCtrl, geolocation, zone, platform, mapService, parkingService, router, changeDetector) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.zone = zone;
        this.platform = platform;
        this.mapService = mapService;
        this.parkingService = parkingService;
        this.router = router;
        this.changeDetector = changeDetector;
        this.parkings = [];
        this.first = false;
    }
    ParkingResultPage.prototype.getSearch = function () {
        var _this = this;
        this.mapService.getStreetAddress(this.searchAddress).subscribe(function (res) {
            console.log(res);
            _this.adressses = JSON.parse(res['_body'])['predictions'].map(function (p) { return p.description; });
        });
    };
    ParkingResultPage.prototype.getParkingsSearch = function (segment) {
        var _this = this;
        if (segment == "list") {
            this.parkingService.getParking_Search(1, this.findx, this.findy).subscribe(function (response) {
                console.log(response);
                _this.parkings = response;
            }, function (error) {
                console.log(error);
            });
        }
        else {
            debugger;
            this.parkingService.getParking_Search(1, this.findx, this.findx).subscribe(function (response) {
                console.log(response);
                _this.parkings = response;
            }, function (error) {
                console.log(error);
            });
        }
    };
    ParkingResultPage.prototype.segmentChanged = function (event) {
        console.log(event.target.value);
        if (event.target.value == "list")
            this.getParkingsSearch("list");
        else
            this.getParkingsSearch("map");
    };
    // parkingDetail(parking) {
    //   this.parkingService.showParkingDetail = parking;
    //   this.router.navigate(['parking-detail'])
    // }
    // start(){
    // debugger;
    //   let input = document.getElementById('places').getElementsByTagName('input')[0];
    //   let autocomplete = new google.maps.places.Autocomplete(input);
    //   google.maps.event.addListener(autocomplete, 'place_changed', () => {
    //     this.place = autocomplete.getPlace();
    //     this.findx = this.place.geometry.location.lat();
    //     this.findy = this.place.geometry.location.lng();
    //     this.changeDetector.detectChanges();
    //   }
    //   );
    //  //this.getgeolocation();
    // }
    ParkingResultPage.prototype.getgeolocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            alert(resp.coords.longitude + " " + resp.coords.latitude + "של מיקום נוכחי 1");
            _this.findx = resp.coords.longitude;
            _this.findy = resp.coords.latitude;
            // alert(this.myFind.findx + " " + this.myFind.findy + "של מיקום נוכחי 2");
            _this.goe();
        }, function (err) {
            console.log(' Error : ' + JSON.stringify(err));
        }); //let watch = this.geolocation.watchPosition();
        //  watch.subscribe((data) => {
        // data can be a set of coordinates, or an error (if an error occurred).
        // data.coords.latitude
        // data.coords.longitude
        //  });
    };
    ParkingResultPage.prototype.goe = function () {
        var input = document.getElementById('places').getElementsByTagName('input')[0];
        var geocoder = new google.maps.Geocoder();
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
    tslib_1.__decorate([
        ViewChild('inputname'),
        tslib_1.__metadata("design:type", Object)
    ], ParkingResultPage.prototype, "theinput", void 0);
    ParkingResultPage = tslib_1.__decorate([
        Component({
            selector: 'app-parking-result',
            templateUrl: './parking-result.page.html',
            styleUrls: ['./parking-result.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            Geolocation,
            NgZone,
            Platform,
            Map1Service,
            ParkingService,
            Router,
            ChangeDetectorRef])
    ], ParkingResultPage);
    return ParkingResultPage;
}());
export { ParkingResultPage };
//# sourceMappingURL=parking-result.page.js.map