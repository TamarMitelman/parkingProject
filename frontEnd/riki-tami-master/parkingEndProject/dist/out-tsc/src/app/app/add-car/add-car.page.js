import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CarService } from '../shared/services/car.service';
import { Car } from '../shared/classes/car';
var AddCarPage = /** @class */ (function () {
    function AddCarPage(carService) {
        this.carService = carService;
        this.car = new Car();
    }
    AddCarPage.prototype.ngOnInit = function () {
        this.car.user_id = 1;
    };
    AddCarPage.prototype.addCar = function () {
        this.carService.add_car(this.car).subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    AddCarPage = tslib_1.__decorate([
        Component({
            selector: 'app-add-car',
            templateUrl: './add-car.page.html',
            styleUrls: ['./add-car.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CarService])
    ], AddCarPage);
    return AddCarPage;
}());
export { AddCarPage };
//# sourceMappingURL=add-car.page.js.map