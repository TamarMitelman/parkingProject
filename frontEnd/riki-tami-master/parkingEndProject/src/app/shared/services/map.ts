import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { from, Observable, Observer } from 'rxjs';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class Map1Service {
  app: any;
  google_api_key: any;

  contentHeader: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(public http: HttpClient) {
    this.google_api_key = 'AIzaSyB6XGmiIhsaoXzLTu611HLGNL74ZEWIaSE';
  }

  getAddress(params) {
    let url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + params.lat + ',' + params.long;
    return this.GET(url);
  }

  getStreetAddress(searchPlace) {
    //let url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+searchPlace+'&key=' + this.google_api_key + '&sessiontoken=1234567890';
    let url1 = "https://www.google.com/maps/embed/v1/undefined?origin=" + searchPlace + "&key= " + this.google_api_key;
    let url = "https://www.google.com/maps/embed/v1/place?key=" + this.google_api_key + "&q= " + searchPlace + " allowfullscreen&output=embed"
    return this.GET(url1);
  }

  GET(url) {
    //  debugger;
    return this.http.get(url);
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });

  }

  getPos() {
    navigator.geolocation.getCurrentPosition(res => {
      console.log(res)
    })
  }

}

