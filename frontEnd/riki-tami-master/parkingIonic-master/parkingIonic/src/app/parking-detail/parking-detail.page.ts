import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../shared/services/parking.service';
import { Parking } from '../shared/classes/parking';

@Component({
  selector: 'app-parking-detail',
  templateUrl: './parking-detail.page.html',
  styleUrls: ['./parking-detail.page.scss'],
})
export class ParkingDetailPage implements OnInit {
  constructor(// public parkingService: ParkingService
    ) { }
  showParking:Parking;
  ngOnInit() {
  }
  showParkingDetail(){
 //this.showParking=this.parkingService.showParkingDetail;
}
}





