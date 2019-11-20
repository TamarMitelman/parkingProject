import { Component, OnInit } from '@angular/core';
import {Platform, NavController} from '@ionic/angular';

@Component({
  selector: 'app-order-parking',
  templateUrl: './order-parking.page.html',
  styleUrls: ['./order-parking.page.scss'],
})
export class OrderParkingPage implements OnInit {
  datePicker: any;
  startDate: any;
  newEventForm: any;

  date = new Date(Date.now());

  constructor(    public platform: Platform,
    public navCtrl: NavController
    ) { }

  ngOnInit() {
  }

  temp(param){
    alert(param);
    }

    dateSelected(date)
    {
      console.log(date);
    }
  // onDateClick(e: Event) {
  //   console.log('NewEventPage#onDateClick');

  //   if (this.platform.is('cordova')) {
  //     this.datePicker.show({
  //       date: new Date(),
  //       mode: 'datetime',
  //       allowOldDates: false
  //     }).then(
  //       date => {
  //         console.log('Picked date ', date);
  //         this.startDate = moment(date);
  //         this.newEventForm.get('date').setValue(moment(date).format('LLLL'));
  //       },
  //       err => console.log('Error occurred while getting date: ', err)
  //     );
  //   } else {
  //     let tmp = new Date();
  //     this.startDate = moment(tmp);
  //     this.newEventForm.get('date').setValue(moment(tmp).format('LLLL'));
  //   }
  // }
}