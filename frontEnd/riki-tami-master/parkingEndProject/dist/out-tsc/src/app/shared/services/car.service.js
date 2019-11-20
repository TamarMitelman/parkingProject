import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Car } from '../classes/car';
import { Car_in_parking } from 'src/app/shared/classes/car_in_parking';
var CarService = /** @class */ (function () {
    function CarService(httpClient) {
        this.httpClient = httpClient;
        this.newCar = new Car();
        this.car_in_parking = new Car_in_parking();
        this.baseUrl = environment.apiEndPoint + "ParkingProject/Car/";
        this.newbaseUrl = environment.apiEndPoint + "api/Car_in_Parking/";
    }
    //  get_user_cars(userId:number):Observable<Car[]>{
    //    return this.httpClient.get<Car[]>(`${this.baseUrl}getUserCars/${userId}`);
    //  }
    CarService.prototype.get_user_cars = function (userId) {
        return this.httpClient.get(this.baseUrl + "getUserCars/" + userId);
    };
    CarService.prototype.add_new_car = function () {
        return this.httpClient.post(this.baseUrl + "AddCar", this.newCar);
    };
    CarService.prototype.add_car_parking = function (carInParking) {
        return this.httpClient.post(this.newbaseUrl + "AddCar", carInParking);
    };
    CarService.prototype.check_can_parking = function () {
        return this.httpClient.post(this.newbaseUrl + "CheckIfOkToParking", this.car_in_parking);
    };
    CarService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CarService);
    return CarService;
}());
export { CarService };
//# sourceMappingURL=Car.service.js.map