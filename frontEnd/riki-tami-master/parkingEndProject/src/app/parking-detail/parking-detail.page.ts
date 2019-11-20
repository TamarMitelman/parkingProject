import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../shared/services/parking.service';
import { Parking } from '../shared/classes/parking';
import { ok } from 'assert';
import { Router } from '@angular/router';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

@Component({
  selector: 'app-parking-detail',
  templateUrl: './parking-detail.page.html',
  styleUrls: ['./parking-detail.page.scss'],
})


export class ParkingDetailPage implements OnInit {
  destination:string;
  start:string;

  constructor( public parkingService: ParkingService,
    private router:Router,private launchNavigator: LaunchNavigator
    ) { 
      this.start = "";
      this.destination = "Westminster, London, UK";
    }
    parkingDetails:Parking;
    // images:string="../image/parking1.jpg"

  ngOnInit() {
    this.parkingDetails=this.parkingService.showParkingDetail;
  }
  orderParking()
  {
    console.log(this.parkingDetails.p_Id);
    this.router.navigate(['order-parking']);
  }

  ok()
  {
    let options: LaunchNavigatorOptions = {
      start: this.start
  };

  this.launchNavigator.navigate(this.destination, options)
      .then(
          success => alert('Launched navigator'),
          error => alert('Error launching navigator: ' + error)
      );
  }



}





