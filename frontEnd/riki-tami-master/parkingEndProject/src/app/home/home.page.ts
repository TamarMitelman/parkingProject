import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router:Router,public loadingController: LoadingController) {}

  ngOnInit(){
   // this.presentLoadingWithOptions();
   setTimeout(()=>{  this.router.navigate(['map'])},5000);
  }

  // async presentLoadingWithOptions() {
  //   const loading = await this.loadingController.create({
  //     spinner: null,
  //     duration: 3000,
  //     message: 'Please wait...',
  //     translucent: true,
  //     cssClass: 'custom-class custom-loading'
  //   });
  //   return await loading.present();
    
  // }
  // next(){
  //   this.router.navigate(['map'])
  // }
}
