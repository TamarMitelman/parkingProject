import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Parking } from '../classes/parking';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  showParkingDetail:Parking;
  baseUrl = `${environment.apiEndPoint}ParkingProject/Parking/`

  constructor(private httpClient: HttpClient) { }

  //מחזיר רשימת חניונים באזור היעד
  getParking_Search(userId:number,lat:number,lon:number,orderBy:string):Observable<Parking[]>{
    return this.httpClient.get<Parking[]>(`${this.baseUrl}GetParking_Search/${userId}/${lat}/${lon}/${orderBy}/`);
  }
  
}
