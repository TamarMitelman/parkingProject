import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.page.html',
  styleUrls: ['./add-new-user.page.scss'],
})
export class AddNewUserPage implements OnInit {

  userForm:any; 
  // constructor(private formBuilder: FormBuilder) 
  // {
  //  this.userForm = this.formBuilder.group({ 
  //      'phone': ['', Validators.required],
  //      'carNumber': ['', Validators.required]
  //  });
 
  //  this.userForm.get('phone').disable();
  //  this.userForm.get('carNumber').disable();
  //  }
  constructor(){}
  ngOnInit() {
  }
  // edit()
  // {
  //   this.userForm.get('phone').disable();
  //   this.userForm.get('carNumber').disable();
  // }
}
