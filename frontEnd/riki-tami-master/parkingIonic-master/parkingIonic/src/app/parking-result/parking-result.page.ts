import { Component, EventEmitter, ViewChild, ElementRef, NgZone, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams, Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Observable } from 'rxjs/Observable';
import { Map1Service } from '../shared/services/map';
import { ParkingService } from '../shared/services/parking.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Parking } from '../shared/classes/parking';
import { Router } from '@angular/router';
import { Routes } from '@angular/router';

//import { Calendar } from '@ionic-native/calendar';
declare var google: any;

@Component({
  selector: 'app-parking-result',
  templateUrl: './parking-result.page.html',
  styleUrls: ['./parking-result.page.scss'],
})

export class ParkingResultPage {
  @ViewChild('inputname') theinput;


  searchAddress: string;
  adressses: any;
  parkings: Parking[] = [];
  status: string;
  findx: number;
  findy: number;
  first = false;
  place: any;
  constructor(public navCtrl: NavController,
  
    public geolocation: Geolocation,
    public zone: NgZone,
    public platform: Platform,
    public mapService: Map1Service,
    public parkingService: ParkingService,
    public router: Router,
    private changeDetector: ChangeDetectorRef
  )  {
    }
  getSearch() {
    this.mapService.getStreetAddress(this.searchAddress).subscribe(res => {
      console.log(res);
      this.adressses = JSON.parse(res['_body'])['predictions'].map(p => p.description)


    })
  }
  getParkingsSearch(segment: string) {
    if (segment == "list") {
      this.parkingService.getParking_Search(1, this.findx, this.findy).subscribe(
        (response: Parking[]) => {
          console.log(response);
          this.parkings = response;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    }
    else {
      debugger;
      this.parkingService.getParking_Search(1,11,11).subscribe(
        (response: Parking[]) => {
          console.log(response);
          this.parkings = response;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )

      debugger;
    }

  }
  segmentChanged(event) {
    console.log(event.target.value);
    if (event.target.value == "list")
      this.getParkingsSearch("list");
    else this.getParkingsSearch("map");

  }

  // parkingDetail(parking) {
  //   this.parkingService.showParkingDetail = parking;
  //   this.router.navigate(['parking-detail'])
  // }

start(){
debugger;
  let input = document.getElementById('places').getElementsByTagName('input')[0];
  let autocomplete = new google.maps.places.Autocomplete(input);
  google.maps.event.addListener(autocomplete, 'place_changed', () => {
    this.place = autocomplete.getPlace();
    this.findx = this.place.geometry.location.lat();
    this.findy = this.place.geometry.location.lng();
    this.changeDetector.detectChanges();
  }
  );
 //this.getgeolocation();
}
getgeolocation() {

  this.geolocation.getCurrentPosition().then((resp) => {
    alert(resp.coords.longitude + " " + resp.coords.latitude + "של מיקום נוכחי 1");
    this.findx = resp.coords.longitude;
    this.findy = resp.coords.latitude;
    // alert(this.myFind.findx + " " + this.myFind.findy + "של מיקום נוכחי 2");
    this.goe();
  }, err => {
    console.log(' Error : ' + JSON.stringify(err));
  });    //let watch = this.geolocation.watchPosition();
  //  watch.subscribe((data) => {
  // data can be a set of coordinates, or an error (if an error occurred).
  // data.coords.latitude
  // data.coords.longitude
  //  });

}
goe() {
  let input = document.getElementById('places').getElementsByTagName('input')[0];
  var geocoder = new google.maps.Geocoder();

  var lng = this.findx;
  var lat = this.findy;

  var latlng = new google.maps.LatLng(lat, lng);
  geocoder.geocode({ 'latLng': latlng }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {

        //  var address= (results[1].formatted_address);
        input.value = results[0].formatted_address;
        // alert(address);
      } else {
        //  alert("No results found");
      }
    } else {
      alert("Geocoder failed due to: " + status);
    }
  });
}

ngAfterViewInit() {
  debugger;
  let input =this.theinput as HTMLInputElement;
  let autocomplete = new google.maps.places.Autocomplete(input);
  google.maps.event.addListener(autocomplete, 'place_changed', () => {
    this.place = autocomplete.getPlace();
    this.findx = this.place.geometry.location.lat();
    this.findy = this.place.geometry.location.lng();
    this.changeDetector.detectChanges();
  }
  );
}

}

