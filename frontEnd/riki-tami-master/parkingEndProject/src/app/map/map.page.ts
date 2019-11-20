import { Component, OnInit, ChangeDetectorRef, NgZone,AfterViewInit, ElementRef,ViewChild} from '@angular/core';

import { Map1Service } from '../shared/services/map';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ParkingService } from '../shared/services/parking.service';
import { DomSanitizer } from '@angular/platform-browser';
//  import { google } from '@agm/core/services/google-maps-types';
import { Parking } from '../shared/classes/parking';
import { HttpErrorResponse } from '@angular/common/http';

import { from } from 'rxjs';
import { promise } from 'protractor';
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage  {
  @ViewChild('inputname') theinput;

//  ngOnInit(): void {
//     throw new Error("Method not implemented.");
//     }

  latitude: any = 32.0775395;
  longitude: any = 34.771829000000025;
  //  latitude = 32.077539500000000;
  // longitude = 34.7718290000000255;
  mapType = 'satellite';
  searchAddress: any;
  adressses: any;
  parkings: Parking[] = [];
  status: string;
findx: number = 0;
  findy: number = 0;
  first = false;
  place: any;
  constructor(public mapService:Map1Service,private geolocation: Geolocation,
        public navCtrl: NavController,
    private changeDetector: ChangeDetectorRef,
    public zone: NgZone,
    public platform: Platform,
      public parkingService: ParkingService,
    public router: Router,
       private sanitizer: DomSanitizer
  ) {
    this.geolocation.getCurrentPosition().then((resp) => {
    
      console.log(resp)
      this.latitude= resp.coords.latitude
      this.longitude= resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  getSearch() {
    this.mapService.getStreetAddress(this.searchAddress).subscribe(res => {
      console.log(res);
      this.adressses = JSON.parse(res['_body'])['predictions'].map(p => p.description)


    })
  }

  start() {
    let input = document.getElementById('places').getElementsByTagName('input')[0];
    let autocomplete = new google.maps.places.Autocomplete(input);
    //this.getgeolocation();
    google.maps.event.addListener(autocomplete, 'place_changed', (plc) => {
      this.place = autocomplete.getPlace();
      this.findx = this.place.geometry.location.lat();
      this.findy = this.place.geometry.location.lng();
      console.log("findx", this.findx);
      console.log("findy", this.findy);
      this.changeDetector.detectChanges();
      // this.f();

    }
    );
  }

  ionViewWillEnter() {
      this.start();
  }

  // f() {
  //   // this.geolocation.getCurrentPosition().then((resp) => {
  //   //   console.log("resp comeeeeeeeeee: ", resp)
  //   // }).catch((error) => {
  //   //   console.log('Error getting location', error);
  //   // });
  //   // let watch = this.geolocation.watchPosition();
  //   // watch.subscribe((data) => {
  //   // });
  // }



  goe() {
  
    let input = document.getElementById('places').getElementsByTagName('input')[0];
    var geocoder = new google.maps.Geocoder();
   console.log("geocoder",geocoder);

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
  // setting() {
  //   debugger;
  //   //this.navCtrl.(user-setting);
  //   //  this.parkingService.showParkingDetail = user;
  //   //  this.router.navigate(['user-setting']);
  // }
  onClear(event){
    
  }

  search()
  {
 
      this.router.navigate(['parking-result',this.findx,this.findy]);
  }
//   positionPlaceholder()
//   {
//    return new Promise(function(resolve, reject) {
//   resolve('some sucess stuff');
//   reject('some fail stuff');
// }
//    );
// }
addUser()
{
  this.router.navigate(['add-new-user']);

}
}




