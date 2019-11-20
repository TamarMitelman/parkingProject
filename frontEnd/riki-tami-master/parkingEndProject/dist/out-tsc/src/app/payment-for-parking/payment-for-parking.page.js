import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ParkingService } from '../shared/services/parking.service';
import { CarService } from '../shared/services/Car.service';
import { Router } from '@angular/router';
var PaymentForParkingPage = /** @class */ (function () {
    function PaymentForParkingPage(carService, parkingService, router
    // private payPal: PayPal
    ) {
        this.carService = carService;
        this.parkingService = parkingService;
        this.router = router;
    }
    PaymentForParkingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.payPalConfig = {
            currency: 'EUR',
            clientId: 'sb',
            createOrderOnClient: function (data) { return ({
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        amount: {
                            currency_code: 'EUR',
                            value: '9.99',
                            breakdown: {
                                item_total: {
                                    currency_code: 'EUR',
                                    value: '9.99'
                                }
                            }
                        },
                        items: [
                            {
                                name: 'Enterprise Subscription',
                                quantity: '1',
                                category: 'DIGITAL_GOODS',
                                unit_amount: {
                                    currency_code: 'EUR',
                                    value: '9.99',
                                },
                            }
                        ]
                    }
                ]
            }); },
            advanced: {
                commit: 'true'
            },
            style: {
                label: 'paypal',
                layout: 'vertical'
            },
            onApprove: function (data, actions) {
                console.log('onApprove - transaction was approved, but not authorized', data, actions);
                actions.order.get().then(function (details) {
                    console.log('onApprove - you can get full order details inside onApprove: ', details);
                });
            },
            onClientAuthorization: function (data) {
                console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
                _this.showSuccess = true;
            },
            onCancel: function (data, actions) {
                console.log('OnCancel', data, actions);
            },
            onError: function (err) {
                console.log('OnError', err);
            },
            onClick: function (data, actions) {
                console.log('onClick', data, actions);
            },
        };
        this.Calculate_money_for_payment();
    };
    PaymentForParkingPage.prototype.Calculate_money_for_payment = function () {
        debugger;
        var start = this.carService.car_in_parking.c_date_start;
        var end = this.carService.car_in_parking.c_date_end;
        var difference = Math.abs(new Date(start).getTime() - new Date(end).getTime());
        var differenceInHours = difference / 3600000;
        this.moneyForPayment = this.parkingService.showParkingDetail.p_PricesHour * differenceInHours;
        console.log(this.moneyForPayment);
    };
    PaymentForParkingPage.prototype.pay = function () {
        this.router.navigate(['finish']);
    };
    PaymentForParkingPage = tslib_1.__decorate([
        Component({
            selector: 'app-payment-for-parking',
            templateUrl: './payment-for-parking.page.html',
            styleUrls: ['./payment-for-parking.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CarService,
            ParkingService,
            Router
            // private payPal: PayPal
        ])
    ], PaymentForParkingPage);
    return PaymentForParkingPage;
}());
export { PaymentForParkingPage };
//# sourceMappingURL=payment-for-parking.page.js.map