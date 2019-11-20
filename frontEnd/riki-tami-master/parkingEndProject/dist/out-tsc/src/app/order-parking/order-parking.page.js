import * as tslib_1 from "tslib";
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CarService } from '../shared/services/Car.service';
import { ParkingService } from '../shared/services/parking.service';
import { Car } from '../shared/classes/car';
import { Router, ActivatedRoute } from '@angular/router';
var OrderParkingPage = /** @class */ (function () {
    function OrderParkingPage(alertCtrl, router, activatedRoute, carService, parkingService, modalController, locale) {
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.carService = carService;
        this.parkingService = parkingService;
        this.modalController = modalController;
        this.locale = locale;
        this.event = {
            // title: '',
            // desc: '',
            startTime: '',
            endTime: ''
            // allDay: false
        };
        this.minDate = new Date().toISOString();
        this.maxDate = "2024-08-04";
        this.eventSource = [];
        this.carNumber = '';
        this.show = false;
        this.ifAddCar = false;
        this.addCar = new Car();
        this.items = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
        };
    }
    OrderParkingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (p) {
            _this.parkingId = _this.parkingService.showParkingDetail.p_Id;
            _this.parkingName = _this.parkingService.showParkingDetail.p_Name;
            _this.for_few_days = _this.parkingService.showParkingDetail.p_For_few_days;
        });
        this.resetEvent();
        this.get_userCars();
        this.addCar = this.carService.newCar;
    };
    OrderParkingPage.prototype.resetEvent = function () {
        this.event = {
            // title: '',
            // desc: '',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
        };
    };
    OrderParkingPage.prototype.get_userCars = function () {
        var _this = this;
        this.carService.get_user_cars(1).subscribe(function (response) {
            console.log(response);
            _this.cars = response;
        }, function (error) {
            console.log(error);
        });
    };
    // Create the right event format and reload source
    OrderParkingPage.prototype.addEvent = function () {
        //  debugger;
        var eventCopy = {
            // title: this.event.title,
            startTime: new Date(this.event.startTime),
            endTime: new Date(this.event.endTime)
            //allDay: this.event.allDay,
            //  desc: this.event.desc
        };
        this.eventSource.push(eventCopy);
        //  this.myCal.loadEvents();
        this.resetEvent();
        for (var _i = 0, _a = this.cars; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.car_number == this.car) {
                this.carService.car_in_parking.c_car_id = item.id_car;
            }
        }
        this.carService.car_in_parking.c_date_start = eventCopy.startTime;
        this.carService.car_in_parking.c_date_end = eventCopy.endTime;
        this.carService.car_in_parking.c_parkingId = this.parkingId;
        //this.add_car_to_parking();
        this.check_if_can_parking();
    };
    OrderParkingPage.prototype.choosAnother = function () {
        console.log(this.car);
        if (this.car == "אחר") {
            console.log("dfgh");
            this.show = true;
            alert("dfhgj");
        }
        //   this.router.navigateByUrl('/add-car');
        //   this.presentConfirm();
    };
    OrderParkingPage.prototype.check_if_can_parking = function () {
        var _this = this;
        this.carService.check_can_parking().subscribe(function (response) {
            console.log(response);
            //  this.presentConfirm();
            if (response == "ניתן לתפוס חניה")
                _this.router.navigate(['payment-for-parking']);
            else
                _this.presentAlert(response);
        }, function (error) {
            console.log(error);
        });
    };
    /////////////////////////////////////////////////////////
    OrderParkingPage.prototype.Cancel = function () {
        console.log("יציאה");
        //this.router.navigateByUrl("/parking-result")
    };
    OrderParkingPage.prototype.NevigateByWaze = function () {
        console.log("מנתב ליעד");
    };
    OrderParkingPage.prototype.presentConfirm = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: ' WAZE',
                            message: '?האם אתה מעונין בניתוב לחניון',
                            buttons: [
                                {
                                    text: 'יציאה',
                                    role: 'cancel',
                                    handler: function () {
                                        _this.Cancel();
                                    }
                                },
                                {
                                    text: 'ניתוב לחניון',
                                    handler: function () {
                                        _this.NevigateByWaze();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderParkingPage.prototype.presentAlert = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'הודעת שגיאה',
                            subHeader: message,
                            message: 'אין  אפשרות לתפוס חניה',
                            buttons: ['אישור']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderParkingPage.prototype.addNewCar = function () {
        this.ifAddCar = true;
        //this.presentModal();
        this.router.navigate(['add-car']);
    };
    tslib_1.__decorate([
        ViewChild(CalendarComponent),
        tslib_1.__metadata("design:type", CalendarComponent)
    ], OrderParkingPage.prototype, "myCal", void 0);
    OrderParkingPage = tslib_1.__decorate([
        Component({
            selector: 'app-order-parking',
            templateUrl: './order-parking.page.html',
            styleUrls: ['./order-parking.page.scss'],
        }),
        tslib_1.__param(6, Inject(LOCALE_ID)),
        tslib_1.__metadata("design:paramtypes", [AlertController,
            Router,
            ActivatedRoute,
            CarService,
            ParkingService,
            ModalController, String])
    ], OrderParkingPage);
    return OrderParkingPage;
}());
export { OrderParkingPage };
//# sourceMappingURL=order-parking.page.js.map