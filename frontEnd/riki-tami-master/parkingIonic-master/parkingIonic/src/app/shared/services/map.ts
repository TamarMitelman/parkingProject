import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { from } from 'rxjs';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class Map1Service {
  app: any;
  google_api_key: any;

  contentHeader: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: HttpClient) {
    this.google_api_key = 'AIzaSyB6XGmiIhsaoXzLTu611HLGNL74ZEWIaSE';
  }

  getAddress(params) {
    let url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + params.lat + ',' + params.long;
    return this.GET(url);
  }

  getStreetAddress(searchPlace) {
    let url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+searchPlace+'&key=' + this.google_api_key + '&sessiontoken=1234567890';
    return this.GET(url);
  }

  GET(url) {
  //  debugger;
    return this.http.get(url);
  }

}

