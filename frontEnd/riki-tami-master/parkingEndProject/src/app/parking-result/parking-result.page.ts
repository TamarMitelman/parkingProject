import { Component, ViewChild, NgZone, ChangeDetectorRef, OnInit } from '@angular/core';
import { NavController, NavParams, Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map1Service } from '../shared/services/map';
import { ParkingService } from '../shared/services/parking.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Parking } from '../shared/classes/parking';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

//import { Calendar } from '@ionic-native/calendar';
declare var google: any;

@Component({
  selector: 'app-parking-result',
  templateUrl: './parking-result.page.html',
  // template: '<ion-nav #myNav [root]="rootPage"></ion-nav>',
  styleUrls: ['./parking-result.page.scss'],
})
export class ParkingResultPage {
  @ViewChild('inputname') theinput;

  latitude = 32.077539500000000;
  longitude = 34.7718290000000255;
  mapType = 'satellite';
  searchAddress: any;
  adressses: any;
  parkings: Parking[] = [];
  status: string;
  findx: number;
  findy: number;
  first = false;
  place: any;
  choosenMap: boolean = false;
  orderBy:string="orderByDistance";
  // @ViewChild('myNav') nav: NavController
  // public rootPage: any = ParkingResultPage;


  constructor(public navCtrl: NavController,
    private geolocation: Geolocation,
    public zone: NgZone,
    public platform: Platform,
    public mapService: Map1Service,
    public parkingService: ParkingService,
    public router: Router,
    private changeDetector: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute
  ) {
  } 

 
   ngOnInit(){
    this.activatedRoute.params.subscribe(p => {
      this.findx = p['findx'] || '';
      this.latitude=Number( p['findx']) ;
      this.longitude=Number(p['findy']) ;
      this.findy=p['findy'];
      if (this.findx !=null &&this.findy!=null) {
console.log("findx",this.findy);
this.ngAfterViewInit();
this.getParkingsSearch();
  }
})   
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

  getParkingsSearch() {
        // this.choosenMap = false;
        console.log(this.findx);
        console.log(this.findy);
        this.parkingService.getParking_Search(1,this.findx,this.findy,this.orderBy).subscribe(
          (response: Parking[]) => {
            console.log(response);
            this.parkings = response;
          },
                (error: HttpErrorResponse) => {
                  console.log(error);
               }
              
           )
      }
  parkingDetail(parking) {
    this.parkingService.showParkingDetail = parking;
    this.router.navigate(['parking-detail'])
  }
  orderParking($event,parking)
  {
    $event.stopPropagation();
    this.parkingService.showParkingDetail = parking;
    this.router.navigate(['order-parking']);
  }

  orderByDistance()
  {
    this.orderBy="orderByDistance";
   this.getParkingsSearch();
  }
  orderByCost(){
    this.orderBy="orderByCost";
   this.getParkingsSearch();
  }
  orderByFull(){
    this.orderBy="orderByFull";
  this. getParkingsSearch();
  }

}

