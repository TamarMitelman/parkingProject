import { Component, OnInit, ViewChild} from '@angular/core';
import { CarService } from '../shared/services/car.service';
import { Car } from '../shared/classes/car';
import { Router } from '@angular/router';
import { $ } from 'protractor';
// import{OrderParkingPage} from '../order-parking/order-parking.page';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage implements OnInit {


  // @ViewChild("OrderParkingPage") orderParking: OrderParkingPage;

  constructor(    public carService: CarService,
        private router: Router
    ) { }


  ngOnInit() {
    this.carService.newCar.user_id=1;
  
  }
  addNewCar() { 
    this.carService.add_new_car().subscribe(
      (response) => {
        console.log(response);
        alert("הרכב נוסף בהצלחה");
      },
      (error) => {
        console.log(error);
      }
    )
  }

  precedingPage()
  {
    // console.log(this.orderParking.addCar);
    // this.orderParking.addCar=this.carService.newCar;
    // console.log(this.orderParking.addCar);
    this.router.navigate(['order-parking']);
  }

  // OnInputChange(){
  //   console.log(document.getElementById('inputText').getElementsByTagName('input')[0].value);
  //   // document.getElementById("inputText").onkeyup(function(){
  //     if(document.getElementById('inputText').getElementsByTagName('input')[0].value>"1"&&document.getElementById('inputText').getElementsByTagName('input')[0].value<="9")
  //       document.getElementById('inputText').getElementsByTagName('input')[0].value= document.getElementById('inputText').getElementsByTagName('input')[0].value;
  //       else   document.getElementById('inputText').getElementsByTagName('input')[0].value= document.getElementById('inputText').getElementsByTagName('input')[0].value.slice(1);
  //   // })
  // }
  
  OnInputChange(){
      if(this.carService.newCar.car_number[this.carService.newCar.car_number.length-1]>="0"&&this.carService.newCar.car_number[this.carService.newCar.car_number.length-1]<="9")
        this.carService.newCar.car_number= this.carService.newCar.car_number;
else  this.carService.newCar.car_number= this.carService.newCar.car_number.substring(0,this.carService.newCar.car_number.length-1);

 
  }

 

}
