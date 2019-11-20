import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CarService } from '../shared/services/car.service';
import { Router } from '@angular/router';
// import{OrderParkingPage} from '../order-parking/order-parking.page';
var AddCarPage = /** @class */ (function () {
    // @ViewChild("OrderParkingPage") orderParking: OrderParkingPage;
    function AddCarPage(carService, router) {
        this.carService = carService;
        this.router = router;
    }
    AddCarPage.prototype.ngOnInit = function () {
        this.carService.newCar.user_id = 1;
    };
    AddCarPage.prototype.addNewCar = function () {
        this.carService.add_new_car().subscribe(function (response) {
            console.log(response);
            alert("הרכב נוסף בהצלחה");
        }, function (error) {
            console.log(error);
        });
    };
    AddCarPage.prototype.precedingPage = function () {
        // console.log(this.orderParking.addCar);
        // this.orderParking.addCar=this.carService.newCar;
        // console.log(this.orderParking.addCar);
        this.router.navigate(['order-parking']);
    };
    // OnInputChange(){
    //   console.log(document.getElementById('inputText').getElementsByTagName('input')[0].value);
    //   // document.getElementById("inputText").onkeyup(function(){
    //     if(document.getElementById('inputText').getElementsByTagName('input')[0].value>"1"&&document.getElementById('inputText').getElementsByTagName('input')[0].value<="9")
    //       document.getElementById('inputText').getElementsByTagName('input')[0].value= document.getElementById('inputText').getElementsByTagName('input')[0].value;
    //       else   document.getElementById('inputText').getElementsByTagName('input')[0].value= document.getElementById('inputText').getElementsByTagName('input')[0].value.slice(1);
    //   // })
    // }
    AddCarPage.prototype.OnInputChange = function () {
        if (this.carService.newCar.car_number[this.carService.newCar.car_number.length - 1] >= "0" && this.carService.newCar.car_number[this.carService.newCar.car_number.length - 1] <= "9")
            this.carService.newCar.car_number = this.carService.newCar.car_number;
        else
            this.carService.newCar.car_number = this.carService.newCar.car_number.substring(0, this.carService.newCar.car_number.length - 1);
    };
    AddCarPage = tslib_1.__decorate([
        Component({
            selector: 'app-add-car',
            templateUrl: './add-car.page.html',
            styleUrls: ['./add-car.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CarService,
            Router])
    ], AddCarPage);
    return AddCarPage;
}());
export { AddCarPage };
//# sourceMappingURL=add-car.page.js.map