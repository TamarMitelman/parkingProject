
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Car } from '../classes/car';
import { Car_in_parking } from 'src/app/shared/classes/car_in_parking';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  newCar:Car=new Car();
  car_in_parking:Car_in_parking=new Car_in_parking();
  showCargDetail:Car;
  baseUrl = `${environment.apiEndPoint}ParkingProject/Car/`
  newbaseUrl=`${environment.apiEndPoint}api/Car_in_Parking/`
  constructor(private httpClient: HttpClient) { }

  //  get_user_cars(userId:number):Observable<Car[]>{
  //    return this.httpClient.get<Car[]>(`${this.baseUrl}getUserCars/${userId}`);

  //  }
   get_user_cars(userId:number){
    return this.httpClient.get(`${this.baseUrl}getUserCars/${userId}`);

  }
  add_new_car(){
      return this.httpClient.post(`${this.baseUrl}AddCar`,this.newCar);
   }


    add_car_parking(carInParking:Car_in_parking) {
     return this.httpClient.post(`${this.newbaseUrl}AddCar`,carInParking);
   }

   check_can_parking() {
    return this.httpClient.post(`${this.newbaseUrl}CheckIfOkToParking`,this.car_in_parking);
  }
}