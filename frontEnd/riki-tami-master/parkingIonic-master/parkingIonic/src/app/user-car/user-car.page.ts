import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { CarService } from '../shared/services/Car.service';
import { Car } from '../shared/classes/car';
import { NavController, NavParams, Platform } from '@ionic/angular';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-car',
  templateUrl: './user-car.page.html',
  styleUrls: ['./user-car.page.scss'],
})
export class UserCarPage implements OnInit {
  fromUser = false;
  answer: boolean = false;
  cars: Car[] = [];
  isfirst=0;

  constructor(public navCtrl: NavController,
    public zone: NgZone,
    public platform: Platform,
    public carService: CarService,
    public router: Router) {
  }

  get_userCars() {
    this.carService.get_user_cars(1).subscribe(
      (response: Car[]) => {
        console.log(response);
        this.cars = response;
        this.cars.forEach(car => {
          car['is_used_now'] = false;
        })
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }
  ngOnInit() {
  }

  checkedCar(event) {
    if(  event.checked=true)
  
   // this.fromUser = !this.fromUser;
  //  if (this.fromUser) {
      this.cars.forEach(car => {   
        console.log("car.car_number" + car.car_number);
        console.log("event.target.value" + event.target.value);

        if (car.car_number != event.target.value)
          car['is_used_now'] = false;
        else car['is_used_now'] = true//event.target.checked;
      })
   // }

  }
  selectCar() {
    console.log(this.cars.values);
  }

}
