import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
var HomePage = /** @class */ (function () {
    function HomePage(router, loadingController) {
        this.router = router;
        this.loadingController = loadingController;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        // this.presentLoadingWithOptions();
        setTimeout(function () { _this.router.navigate(['map']); }, 5000);
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, LoadingController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map