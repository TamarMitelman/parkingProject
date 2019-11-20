import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController,ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common'; 
import { CarService } from '../shared/services/Car.service';
import { ParkingService } from '../shared/services/parking.service';
import { Car } from '../shared/classes/car';
import { HttpErrorResponse } from '@angular/common/http';
import{Car_in_parking} from '../shared/classes/car_in_parking';
import { forEach } from '@angular/router/src/utils/collection';
import { of, from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { getNgModuleDef } from '@angular/core/src/render3/definition';
import { Parking } from '../app/shared/classes/parking';
import { AddCarPage } from '../add-car/add-car.page';

@Component({
  selector: 'app-order-parking',
  templateUrl: './order-parking.page.html',
  styleUrls: ['./order-parking.page.scss'],
})
export class OrderParkingPage implements OnInit {
  event = {
    // title: '',
    // desc: '',
    startTime: '',
    endTime: ''
    // allDay: false
  };
 minDate = new Date().toISOString();
 maxDate="2024-08-04";
  eventSource = [];
  viewTitle;
  car:string;
  parkingId:number;
  parkingName:string;
  carNumber:string='';
  show:boolean=false;
  for_few_days:boolean;
  ifAddCar:boolean=false;
  addCar:Car=new Car();
  
  value;
  items=[];

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
 
  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  cars: Car[];
  
  constructor(public alertCtrl: AlertController,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public carService: CarService,
    public parkingService: ParkingService,
    public modalController: ModalController,
     @Inject(LOCALE_ID)
      private locale: string,
      ) { }
 
  ngOnInit() {
    this.activatedRoute.params.subscribe(p => {
      this.parkingId =this.parkingService.showParkingDetail.p_Id ;
      this.parkingName=this.parkingService.showParkingDetail.p_Name;
      this.for_few_days=this.parkingService.showParkingDetail.p_For_few_days;
    }
    )
    this.resetEvent();
    this.get_userCars();
    this.addCar=this.carService.newCar;
  }

  resetEvent() {
    this.event = {
     // title: '',
     // desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
     // allDay: false
    };
  }

  get_userCars() {
    this.carService.get_user_cars(1).subscribe(
      (response: Car[]) => {
        console.log(response);
        this.cars = response;
      },
       (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }

  // Create the right event format and reload source
  addEvent() {
  //  debugger;
  

    let eventCopy = {
     // title: this.event.title,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime)
      //allDay: this.event.allDay,
    //  desc: this.event.desc
    }
 
   
    this.eventSource.push(eventCopy);
  //  this.myCal.loadEvents();
    this.resetEvent();

    

    for(let item of this.cars)
       if(item.car_number==this.car)
       {
        this.carService.car_in_parking.c_car_id=item.id_car;
      }
    this.carService.car_in_parking.c_date_start=eventCopy.startTime;
    this.carService.car_in_parking.c_date_end=eventCopy.endTime;
    this.carService.car_in_parking.c_parkingId=this.parkingId;
    
    //this.add_car_to_parking();
    this.check_if_can_parking();
  }

  choosAnother(){
 
    console.log(this.car);
    if(this.car=="אחר")
      {
        console.log("dfgh")
        this.show=true;
        alert("dfhgj");
      }
 //   this.router.navigateByUrl('/add-car');
 //   this.presentConfirm();
  }
check_if_can_parking()
{

  this.carService.check_can_parking().subscribe(
    (response) => {
      console.log(response);
    //  this.presentConfirm();
     if(response=="ניתן לתפוס חניה")
        this.router.navigate(['payment-for-parking']);
    else this.presentAlert(response);
    },
    (error) => {
      console.log(error);
    }
  )
}
/////////////////////////////////////////////////////////
Cancel(){
  console.log("יציאה");
  //this.router.navigateByUrl("/parking-result")
   }
NevigateByWaze()
  {
    console.log("מנתב ליעד");
  }

  async presentConfirm() {
  let alert =await  this.alertCtrl.create({
     header: ' WAZE',
    message: '?האם אתה מעונין בניתוב לחניון',
    buttons: [
      {
        text: 'יציאה',
        role: 'cancel',
        handler: () => {
        this.Cancel();
        }
      },
      {
        text: 'ניתוב לחניון',
        handler: () => {
          this.NevigateByWaze();
        }
      }
    ]
  });
 await alert.present();
  }

  
async presentAlert(message) {
  const alert = await this.alertCtrl.create({
    header: 'הודעת שגיאה',
    subHeader:message,
    message: 'אין  אפשרות לתפוס חניה',
    buttons: ['אישור']
  });

  await alert.present();
}
addNewCar(){
this.ifAddCar=true;
//this.presentModal();
this.router.navigate(['add-car']);
}



// async presentModal() {
//   debugger;
//   const modal = await this.modalController.create({
//     component: AddCarPage
//   });
//   return await modal.present();
// }
}

