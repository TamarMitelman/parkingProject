import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var CarService = /** @class */ (function () {
    function CarService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = environment.apiEndPoint + "ParkingProject/Car/";
    }
    //  get_user_cars(userId:number):Observable<Car[]>{
    //    return this.httpClient.get<Car[]>(`${this.baseUrl}getUserCars/${userId}`);
    //  }
    CarService.prototype.get_user_cars = function (userId) {
        return this.httpClient.get(this.baseUrl + "getUserCars/" + userId);
    };
    CarService.prototype.add_car = function (newCar) {
        return this.httpClient.post(this.baseUrl + "AddCar", newCar);
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
//# sourceMappingURL=car.service.js.map