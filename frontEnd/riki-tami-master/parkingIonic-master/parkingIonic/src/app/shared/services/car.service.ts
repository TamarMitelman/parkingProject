
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Car } from '../classes/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  showCargDetail:Car;
  baseUrl = `${environment.apiEndPoint}ParkingProject/Car/`

  constructor(private httpClient: HttpClient) { }

  //  get_user_cars(userId:number):Observable<Car[]>{
  //    return this.httpClient.get<Car[]>(`${this.baseUrl}getUserCars/${userId}`);

  //  }
   get_user_cars(userId:number){
    return this.httpClient.get(`${this.baseUrl}getUserCars/${userId}`);

  }
   add_car( newCar:Car){
      return this.httpClient.post(`${this.baseUrl}AddCar`,newCar);
   }
}