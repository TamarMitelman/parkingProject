import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../shared/services/parking.service';
import { CarService } from '../shared/services/Car.service';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-for-parking',
  templateUrl: './payment-for-parking.page.html',
  styleUrls: ['./payment-for-parking.page.scss'],
})
export class PaymentForParkingPage implements OnInit {

  moneyForPayment:number;
  public payPalConfig?: IPayPalConfig;
  showSuccess: boolean;

  constructor(public carService:CarService,
   public parkingService:ParkingService,
   public router:Router
  // private payPal: PayPal
    ) { }

  ngOnInit() {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'sb',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
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
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
    this.Calculate_money_for_payment();
  }

  Calculate_money_for_payment()
  {
    var start= this.carService.car_in_parking.c_date_start;
    var end= this.carService.car_in_parking.c_date_end;
    let difference =Math.abs(new Date(start).getTime() - new Date(end).getTime());
    var differenceInHours = difference/3600000;
    this.moneyForPayment=this.parkingService.showParkingDetail.p_PricesHour*differenceInHours;
    console.log(this.moneyForPayment);
    
  }
  pay()
  {
   this.router.navigate(['finish']);
  }
  
}
