import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/services/car.service';
import { Car } from '../shared/classes/car';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage implements OnInit {

  car:Car=new Car();
  constructor(    public carService: CarService,) { }

  ngOnInit() {
    this.car.user_id=1;
  }
  addCar() {
    
    this.carService.add_car(this.car).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
