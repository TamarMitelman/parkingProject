import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
var AddNewUserPage = /** @class */ (function () {
    // constructor(private formBuilder: FormBuilder) 
    // {
    //  this.userForm = this.formBuilder.group({ 
    //      'phone': ['', Validators.required],
    //      'carNumber': ['', Validators.required]
    //  });
    //  this.userForm.get('phone').disable();
    //  this.userForm.get('carNumber').disable();
    //  }
    function AddNewUserPage() {
    }
    AddNewUserPage.prototype.ngOnInit = function () {
    };
    AddNewUserPage = tslib_1.__decorate([
        Component({
            selector: 'app-add-new-user',
            templateUrl: './add-new-user.page.html',
            styleUrls: ['./add-new-user.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AddNewUserPage);
    return AddNewUserPage;
}());
export { AddNewUserPage };
//# sourceMappingURL=add-new-user.page.js.map