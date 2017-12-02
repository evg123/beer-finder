webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_beer_beer_detail_beer_detail_component__ = __webpack_require__("../../../../../src/app/components/beer/beer-detail/beer-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_location_location_detail_location_detail_component__ = __webpack_require__("../../../../../src/app/components/location/location-detail/location-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_user_edit_user_edit_component__ = __webpack_require__("../../../../../src/app/components/user/user-edit/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_beer_service_client__ = __webpack_require__("../../../../../src/app/services/beer.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_location_service_client__ = __webpack_require__("../../../../../src/app/services/location.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_beer_beer_search_beer_search_component__ = __webpack_require__("../../../../../src/app/components/beer/beer-search/beer-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_beer_beer_list_beer_list_component__ = __webpack_require__("../../../../../src/app/components/beer/beer-list/beer-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_beer_report_beer_report_beer_component__ = __webpack_require__("../../../../../src/app/components/beer/report-beer/report-beer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_location_location_search_location_search_component__ = __webpack_require__("../../../../../src/app/components/location/location-search/location-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_location_manage_locations_manage_locations_component__ = __webpack_require__("../../../../../src/app/components/location/manage-locations/manage-locations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_location_location_list_location_list_component__ = __webpack_require__("../../../../../src/app/components/location/location-list/location-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_location_new_location_new_location_component__ = __webpack_require__("../../../../../src/app/components/location/new-location/new-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_user_user_search_user_search_component__ = __webpack_require__("../../../../../src/app/components/user/user-search/user-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_user_user_list_user_list_component__ = __webpack_require__("../../../../../src/app/components/user/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_user_user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/components/user/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_location_location_edit_location_edit_component__ = __webpack_require__("../../../../../src/app/components/location/location-edit/location-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_site_site_header_site_header_component__ = __webpack_require__("../../../../../src/app/components/site/site-header/site-header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_beer_beer_detail_beer_detail_component__["a" /* BeerDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_location_location_detail_location_detail_component__["a" /* LocationDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_beer_beer_search_beer_search_component__["a" /* BeerSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_beer_beer_list_beer_list_component__["a" /* BeerListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_beer_report_beer_report_beer_component__["a" /* ReportBeerComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_location_location_search_location_search_component__["a" /* LocationSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_location_manage_locations_manage_locations_component__["a" /* ManageLocationsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_location_location_list_location_list_component__["a" /* LocationListComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_location_new_location_new_location_component__["a" /* NewLocationComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_user_user_search_user_search_component__["a" /* UserSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_user_user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_user_user_edit_user_edit_component__["a" /* UserEditComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_user_user_detail_user_detail_component__["a" /* UserDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_location_location_edit_location_edit_component__["a" /* LocationEditComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_site_site_header_site_header_component__["a" /* SiteHeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* Routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_16__services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_6__services_beer_service_client__["a" /* BeerService */], __WEBPACK_IMPORTED_MODULE_7__services_location_service_client__["a" /* LocationService */], __WEBPACK_IMPORTED_MODULE_8__services_user_service_client__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_user_edit_user_edit_component__ = __webpack_require__("../../../../../src/app/components/user/user-edit/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_beer_beer_detail_beer_detail_component__ = __webpack_require__("../../../../../src/app/components/beer/beer-detail/beer-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_location_location_detail_location_detail_component__ = __webpack_require__("../../../../../src/app/components/location/location-detail/location-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_beer_beer_search_beer_search_component__ = __webpack_require__("../../../../../src/app/components/beer/beer-search/beer-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_location_location_search_location_search_component__ = __webpack_require__("../../../../../src/app/components/location/location-search/location-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_beer_report_beer_report_beer_component__ = __webpack_require__("../../../../../src/app/components/beer/report-beer/report-beer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_location_new_location_new_location_component__ = __webpack_require__("../../../../../src/app/components/location/new-location/new-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_user_search_user_search_component__ = __webpack_require__("../../../../../src/app/components/user/user-search/user-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_user_user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/components/user/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_location_location_edit_location_edit_component__ = __webpack_require__("../../../../../src/app/components/location/location-edit/location-edit.component.ts");















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/search', component: __WEBPACK_IMPORTED_MODULE_12__components_user_user_search_user_search_component__["a" /* UserSearchComponent */] },
    { path: 'user/:userId', component: __WEBPACK_IMPORTED_MODULE_13__components_user_user_detail_user_detail_component__["a" /* UserDetailComponent */] },
    { path: 'user/:userId/edit', component: __WEBPACK_IMPORTED_MODULE_2__components_user_user_edit_user_edit_component__["a" /* UserEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__["a" /* AuthGuard */]], data: { roles: ['user'] } },
    // {path: 'user/:userId/locations', component: ManageLocationsComponent, canActivate: [AuthGuard], data: {roles: ['user']}},
    { path: 'beer/search', component: __WEBPACK_IMPORTED_MODULE_6__components_beer_beer_search_beer_search_component__["a" /* BeerSearchComponent */] },
    { path: 'beer/:bid', component: __WEBPACK_IMPORTED_MODULE_4__components_beer_beer_detail_beer_detail_component__["a" /* BeerDetailComponent */] },
    { path: 'beer/:bid/report', component: __WEBPACK_IMPORTED_MODULE_10__components_beer_report_beer_report_beer_component__["a" /* ReportBeerComponent */] },
    { path: 'location/search', component: __WEBPACK_IMPORTED_MODULE_9__components_location_location_search_location_search_component__["a" /* LocationSearchComponent */] },
    { path: 'location/new', component: __WEBPACK_IMPORTED_MODULE_11__components_location_new_location_new_location_component__["a" /* NewLocationComponent */] },
    { path: 'location/:lid', component: __WEBPACK_IMPORTED_MODULE_5__components_location_location_detail_location_detail_component__["a" /* LocationDetailComponent */] },
    { path: 'location/:lid/edit', component: __WEBPACK_IMPORTED_MODULE_14__components_location_location_edit_location_edit_component__["a" /* LocationEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__["a" /* AuthGuard */]], data: { roles: ['owner'] } },
    { path: 'location/:lid/report', component: __WEBPACK_IMPORTED_MODULE_10__components_beer_report_beer_report_beer_component__["a" /* ReportBeerComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/beer/beer-detail/beer-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/beer/beer-detail/beer-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-site-header [showProfile]=true></app-site-header>\n\n<div *ngIf=\"beer\">\n  <div class=\"container-fluid\">\n    <h1>{{beer.beer_name}}</h1>\n    <h3> by {{beer.brewery.brewery_name}}</h3>\n    <h3>is a {{beer.beer_style}}</h3>\n  </div>\n</div>\n\n<Button class=\"btn btn-block btn-primary\"\n        routerLink=\"/beer/{{bid}}/report\">Report this beer at a location</Button>\n\n<div *ngIf=\"stockList\">\n  <div>\n    <ul class=\"list-group\">\n\n      <div *ngFor=\"let stock of stockList\">\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <a routerLink=\"/location/{{stock.location._id}}\">\n              {{stock.location.name}}\n            </a>\n            <span>\n              {{stock.count}}\n            </span>\n          </div>\n        </li>\n      </div>\n\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/beer/beer-detail/beer-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_beer_service_client__ = __webpack_require__("../../../../../src/app/services/beer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerDetailComponent = (function () {
    function BeerDetailComponent(router, activatedRoute, beerSvc) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.beerSvc = beerSvc;
        this.errorFlag = false;
        this.errorMsg = '';
    }
    BeerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.bid = params['bid'];
        });
        this.beerSvc.findBeerById(this.bid)
            .subscribe(function (data) {
            _this.beer = data.response.beer;
        }, function (error) {
            _this.errorMsg = 'Failed to find beer';
            _this.errorFlag = true;
        });
        this.beerSvc.findStockByBeer(this.bid)
            .subscribe(function (data) {
            _this.stockList = data;
        }, function (error) {
            _this.errorMsg = 'Failed to find beer stock';
            _this.errorFlag = true;
        });
    };
    return BeerDetailComponent;
}());
BeerDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-beer-detail',
        template: __webpack_require__("../../../../../src/app/components/beer/beer-detail/beer-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/beer/beer-detail/beer-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_beer_service_client__["a" /* BeerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_beer_service_client__["a" /* BeerService */]) === "function" && _c || Object])
], BeerDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=beer-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/beer/beer-list/beer-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/beer/beer-list/beer-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <ul class=\"list-group\">\n\n    <div *ngFor=\"let beerRecord of beerList\">\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a routerLink=\"/beer/{{beerRecord.beer.bid}}\">\n            {{beerRecord.beer.beer_name}}\n          </a>\n        </div>\n      </li>\n    </div>\n\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/beer/beer-list/beer-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeerListComponent = (function () {
    function BeerListComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.errorFlag = false;
        this.errorMsg = '';
    }
    BeerListComponent.prototype.ngOnInit = function () {
        this.activatedRoute.params
            .subscribe(function (params) {
        });
    };
    return BeerListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], BeerListComponent.prototype, "beerList", void 0);
BeerListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-beer-list',
        template: __webpack_require__("../../../../../src/app/components/beer/beer-list/beer-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/beer/beer-list/beer-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], BeerListComponent);

var _a, _b;
//# sourceMappingURL=beer-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/beer/beer-search/beer-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/beer/beer-search/beer-search.component.html":
/***/ (function(module, exports) {

module.exports = "<app-site-header [showProfile]=true></app-site-header>\n\n<div class=\"container-fluid row\">\n  <div>\n    <h2>Beer Search</h2>\n    <form #f=\"ngForm\" (ngSubmit)=\"search()\">\n\n      <div class=\"form-group\">\n        <label for=\"query\">Query</label>\n        <input name=\"query\"\n               [(ngModel)]=\"query\"\n               id=\"query\"\n               placeholder=\"query string\"\n               type=\"text\"\n               required\n               class=\"form-control\"/>\n      </div>\n\n      <button class=\"btn btn-primary btn-block\" type=submit>Search</button>\n    </form>\n  </div>\n</div>\n<app-beer-list [beerList]=\"beerList\"></app-beer-list>\n"

/***/ }),

/***/ "../../../../../src/app/components/beer/beer-search/beer-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_beer_service_client__ = __webpack_require__("../../../../../src/app/services/beer.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerSearchComponent = (function () {
    function BeerSearchComponent(router, activatedRoute, beerSvc) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.beerSvc = beerSvc;
        this.errorFlag = false;
        this.errorMsg = '';
    }
    BeerSearchComponent.prototype.ngOnInit = function () {
        this.activatedRoute.params
            .subscribe(function (params) {
        });
    };
    BeerSearchComponent.prototype.search = function () {
        var _this = this;
        this.beerSvc.findBeersByName(this.query)
            .subscribe(function (data) {
            _this.beerList = data.response.beers.items;
        }, function (error) {
            _this.errorMsg = 'Search failed';
            _this.errorFlag = true;
        });
    };
    return BeerSearchComponent;
}());
BeerSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-beer-search',
        template: __webpack_require__("../../../../../src/app/components/beer/beer-search/beer-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/beer/beer-search/beer-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_beer_service_client__["a" /* BeerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_beer_service_client__["a" /* BeerService */]) === "function" && _c || Object])
], BeerSearchComponent);

var _a, _b, _c;
//# sourceMappingURL=beer-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/beer/report-beer/report-beer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/beer/report-beer/report-beer.component.html":
/***/ (function(module, exports) {

module.exports = "<app-site-header [showProfile]=true></app-site-header>\n\n<div class=\"container-fluid\">\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Report a Beer in Stock</h1>\n\n  <form (ngSubmit) = \"report()\" #form=\"ngForm\">\n\n    <input   placeholder=\"Beer\"\n             name=\"beerQuery\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             [disabled]=\"bid\"\n             #beerQuery=\"ngModel\"/>\n    <a (click)=\"searchBeers()\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-search\"></span>\n    </a>\n    <a (click)=\"clearBeer()\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-remove\"></span>\n    </a>\n    <span class=\"help-block alert-danger\" *ngIf=\"!beerQuery.valid && beerQuery.touched\">\n      Please select a beer\n    </span>\n\n    <input   placeholder=\"Location\"\n             name=\"locationQuery\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             [disabled]=\"lid\"\n             #locationQuery=\"ngModel\"/>\n    <a (click)=\"searchLocations()\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-search\"></span>\n    </a>\n    <a (click)=\"clearLocation()\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-remove\"></span>\n    </a>\n    <span class=\"help-block alert-danger\" *ngIf=\"!locationQuery.valid && locationQuery.touched\">\n      Please select a location\n    </span>\n\n    <input   placeholder=\"Count available at this location\"\n             name=\"count\"\n             type=\"number\"\n             class=\"form-control\"\n             ngModel\n             required\n             #count=\"ngModel\"/>\n    <span class=\"help-block alert-danger\" *ngIf=\"!count.valid && count.touched\">\n      Please enter the count available at this location\n    </span>\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!repForm.valid || !bid || !lid\">Report</button>\n\n    <button class=\"btn btn-danger btn-block\"\n            (click)=\"goBack()\">Cancel</button>\n  </form>\n</div>\n\n<div>\n  <ul class=\"list-group\">\n\n    <div *ngFor=\"let beerRecord of beerList\">\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a (click)=\"setBeer(beerRecord.beer.bid)\">\n            {{beerRecord.beer.beer_name}}\n          </a>\n        </div>\n      </li>\n    </div>\n\n  </ul>\n</div>\n\n<div>\n  <ul class=\"list-group\">\n\n    <div *ngFor=\"let location of locationList\">\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a (click)=\"setLocation(location._id)\">\n            {{location.name}}\n          </a>\n        </div>\n      </li>\n    </div>\n\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/beer/report-beer/report-beer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportBeerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_beer_service_client__ = __webpack_require__("../../../../../src/app/services/beer.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_location_service_client__ = __webpack_require__("../../../../../src/app/services/location.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportBeerComponent = (function () {
    function ReportBeerComponent(router, activatedRoute, beerSvc, locSvc) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.beerSvc = beerSvc;
        this.locSvc = locSvc;
        this.errorFlag = false;
        this.errorMsg = '';
        this.bid = null;
        this.lid = null;
        this.beerList = [];
        this.locationList = [];
    }
    ReportBeerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.bid = params['bid'];
            _this.lid = params['lid'];
            // remember where we should return to after we are done
            if (_this.bid) {
                _this.backRoute = '/beer/' + _this.bid;
            }
            else if (_this.lid) {
                _this.backRoute = '/location/' + _this.lid;
            }
            else {
                _this.backRoute = '/';
            }
        });
    };
    ReportBeerComponent.prototype.report = function () {
        var _this = this;
        var stock = {};
        stock.lid = this.lid;
        stock.bid = this.bid;
        stock.count = this.repForm.value.count;
        this.beerSvc.reportBeer(stock)
            .subscribe(function (data) {
            _this.goBack();
        }, function (error) {
            _this.errorMsg = 'Failed to find beer';
            _this.errorFlag = true;
        });
    };
    ReportBeerComponent.prototype.searchBeers = function () {
        var _this = this;
        this.beerList = [];
        this.locationList = [];
        this.beerSvc.findBeersByName(this.repForm.value.beerQuery)
            .subscribe(function (data) {
            _this.beerList = data.response.beers.items;
        }, function (error) {
            _this.errorMsg = 'Search failed';
            _this.errorFlag = true;
        });
    };
    ReportBeerComponent.prototype.searchLocations = function () {
        var _this = this;
        this.beerList = [];
        this.locationList = [];
        this.locSvc.findLocationsByName(this.repForm.value.locationQuery)
            .subscribe(function (data) {
            _this.locationList = data;
        }, function (error) {
            _this.errorMsg = 'Search failed';
            _this.errorFlag = true;
        });
    };
    ReportBeerComponent.prototype.setBeer = function (bid) {
        this.bid = bid;
    };
    ReportBeerComponent.prototype.setLocation = function (lid) {
        this.lid = lid;
    };
    ReportBeerComponent.prototype.clearBeer = function () {
        this.bid = null;
    };
    ReportBeerComponent.prototype.clearLocation = function () {
        this.lid = null;
    };
    ReportBeerComponent.prototype.goBack = function () {
        this.router.navigate([this.backRoute]);
    };
    return ReportBeerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('form'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ReportBeerComponent.prototype, "repForm", void 0);
ReportBeerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-report-beer',
        template: __webpack_require__("../../../../../src/app/components/beer/report-beer/report-beer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/beer/report-beer/report-beer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_beer_service_client__["a" /* BeerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_beer_service_client__["a" /* BeerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_location_service_client__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_location_service_client__["a" /* LocationService */]) === "function" && _e || Object])
], ReportBeerComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=report-beer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-site-header [showProfile]=true></app-site-header>\n\n<div class=\"container-fluid\">\n  <p>\n    <a routerLink=\"/beer/search\">Search Beers</a>\n  </p>\n  <p>\n  <a routerLink=\"/location/search\">Browse Locations</a>\n  </p>\n  <p>\n    <a routerLink=\"/user/search\">Search Users</a>\n  </p>\n  <p>\n  <a routerLink=\"/login\">Login</a>\n  </p>\n  <p>\n  <a routerLink=\"/register\">Register</a>\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/location/location-detail/location-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/location/location-detail/location-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-site-header [showProfile]=true></app-site-header>\n\n<div *ngIf=\"location\">\n  <div class=\"container-fluid\">\n    <h1>{{location.name}}</h1>\n    <h3>{{location.description}}</h3>\n  </div>\n  <Button class=\"btn btn-block btn-primary\"\n          routerLink=\"/location/{{location._id}}/report\">Report a beer at this location</Button>\n</div>\n\n\n<div *ngIf=\"stockList\">\n  <div>\n    <ul class=\"list-group\">\n\n      <div *ngFor=\"let stock of stockList\">\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <a routerLink=\"/beer/{{stock.bid}}\">\n              {{stock.beerName}}\n            </a>\n            <span>\n              {{stock.count}}\n            </span>\n          </div>\n        </li>\n      </div>\n\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/location/location-detail/location-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_location_service_client__ = __webpack_require__("../../../../../src/app/services/location.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationDetailComponent = (function () {
    function LocationDetailComponent(router, activatedRoute, locationSvc) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.locationSvc = locationSvc;
        this.errorFlag = false;
        this.errorMsg = '';
    }
    LocationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.lid = params['lid'];
        });
        this.locationSvc.findLocationById(this.lid)
            .subscribe(function (data) {
            _this.location = data;
        }, function (error) {
            _this.errorMsg = 'Failed to find location';
            _this.errorFlag = true;
        });
        this.locationSvc.findStockByLocation(this.lid)
            .subscribe(function (data) {
            _this.stockList = data;
        }, function (error) {
            _this.errorMsg = 'Failed to find location stock';
            _this.errorFlag = true;
        });
    };
    return LocationDetailComponent;
}());
LocationDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-location-detail',
        template: __webpack_require__("../../../../../src/app/components/location/location-detail/location-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/location/location-detail/location-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_location_service_client__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_location_service_client__["a" /* LocationService */]) === "function" && _c || Object])
], LocationDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=location-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/location/location-edit/location-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/location/location-edit/location-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-site-header [showProfile]=true></app-site-header>\n\n<div class=\"container-fluid row\">\n\n  <form #locForm=\"ngForm\" (submit)=\"update()\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input name=\"name\"\n             ngModel\n             id=\"name\"\n             placeholder=\"Name\"\n             type=\"text\"\n             required\n             #nameLocal=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <span class=\"help-block alert-danger\" *ngIf=\"!nameLocal.valid && nameLocal.touched\">\n      Please enter a name\n    </span>\n\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <textarea name=\"description\"\n                ngModel\n                id=\"description\"\n                placeholder=\"Description\"\n                rows=\"5\"\n                class=\"form-control\"></textarea>\n    </div>\n\n    <button class=\"btn btn-block btn-primary\" type=\"submit\">Create</button>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/location/location-edit/location-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_location_service_client__ = __webpack_require__("../../../../../src/app/services/location.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationEditComponent = (function () {
    function LocationEditComponent(locationSvc, router, activatedRoute) {
        this.locationSvc = locationSvc;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    LocationEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.lid = params['lid'];
        });
        this.locationSvc.findLocationById(this.lid)
            .subscribe(function (data) {
            _this.location = data;
            _this.locForm.value.name = _this.location.name;
        }, function (error) {
            _this.errorMsg = 'Failed to find location';
            _this.errorFlag = true;
        });
    };
    LocationEditComponent.prototype.update = function () {
        var _this = this;
        var location = {};
        location.name = this.locForm.value.name;
        location.description = this.locForm.value.description;
        this.locationSvc.updateLocation(this.lid, location)
            .subscribe(function (data) {
            _this.router.navigate(['location', data._id]);
        }, function (error) {
            _this.errorMsg = 'Failed to create new location';
            _this.errorFlag = true;
        });
    };
    return LocationEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('locForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LocationEditComponent.prototype, "locForm", void 0);
LocationEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-location-edit',
        template: __webpack_require__("../../../../../src/app/components/location/location-edit/location-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/location/location-edit/location-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_location_service_client__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_location_service_client__["a" /* LocationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], LocationEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=location-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/location/location-list/location-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/location/location-list/location-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul class=\"list-group\">\n\n    <div *ngFor=\"let location of locationList\">\n      <li class=\"list-group-item\">\n        <div class=\"row\">\n          <a routerLink=\"/location/{{location._id}}\">\n            {{location.name}}\n          </a>\n        </div>\n      </li>\n    </div>\n\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/location/location-list/location-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationListComponent = (function () {
    function LocationListComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.errorFlag = false;
        this.errorMsg = '';
    }
    LocationListComponent.prototype.ngOnInit = function () {
        this.activatedRoute.params
            .subscribe(function (params) {
        });
    };
    return LocationListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], LocationListComponent.prototype, "locationList", void 0);
LocationListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-location-list',
        template: __webpack_require__("../../../../../src/app/components/location/location-list/location-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/location/location-list/location-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], LocationListComponent);

var _a, _b;
//# sourceMappingURL=location-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/location/location-search/location-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/location/location-search/location-search.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-site-header [showProfile]=true></app-site-header>\n\n<button routerLink=\"/location/new\" class=\"btn btn-primary btn-block\">Register New Location</button>\n\n<div class=\"container-fluid row\">\n  <div>\n    <h2>Location Search</h2>\n    <form #f=\"ngForm\" (ngSubmit)=\"search()\">\n\n      <div class=\"form-group\">\n        <label for=\"query\">Query</label>\n        <input name=\"query\"\n               [(ngModel)]=\"query\"\n               id=\"query\"\n               placeholder=\"query string\"\n               type=\"text\"\n               required\n               class=\"form-control\"/>\n      </div>\n\n      <button class=\"btn btn-primary btn-block\" type=submit>Search</button>\n    </form>\n  </div>\n</div>\n<app-location-list [locationList]=\"locationList\"></app-location-list>\n"

/***/ }),

/***/ "../../../../../src/app/components/location/location-search/location-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_location_service_client__ = __webpack_require__("../../../../../src/app/services/location.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationSearchComponent = (function () {
    function LocationSearchComponent(router, activatedRoute, locSvc) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.locSvc = locSvc;
        this.errorFlag = false;
        this.errorMsg = '';
    }
    LocationSearchComponent.prototype.ngOnInit = function () {
        this.activatedRoute.params
            .subscribe(function (params) {
        });
    };
    LocationSearchComponent.prototype.search = function () {
        var _this = this;
        this.locSvc.findLocationsByName(this.query)
            .subscribe(function (data) {
            _this.results = data;
            _this.locationList = _this.results;
        }, function (error) {
            _this.errorMsg = 'Search failed';
            _this.errorFlag = true;
        });
    };
    return LocationSearchComponent;
}());
LocationSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-location-search',
        template: __webpack_require__("../../../../../src/app/components/location/location-search/location-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/location/location-search/location-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_location_service_client__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_location_service_client__["a" /* LocationService */]) === "function" && _c || Object])
], LocationSearchComponent);

var _a, _b, _c;
//# sourceMappingURL=location-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/location/manage-locations/manage-locations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/location/manage-locations/manage-locations.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  manage-locations works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/location/manage-locations/manage-locations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageLocationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageLocationsComponent = (function () {
    function ManageLocationsComponent() {
    }
    ManageLocationsComponent.prototype.ngOnInit = function () {
    };
    return ManageLocationsComponent;
}());
ManageLocationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-manage-locations',
        template: __webpack_require__("../../../../../src/app/components/location/manage-locations/manage-locations.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/location/manage-locations/manage-locations.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ManageLocationsComponent);

//# sourceMappingURL=manage-locations.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/location/new-location/new-location.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/location/new-location/new-location.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-site-header [showProfile]=true></app-site-header>\n\n<div class=\"container-fluid row\">\n\n  <form #locForm=\"ngForm\" (submit)=\"create()\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input name=\"name\"\n             ngModel\n             id=\"name\"\n             placeholder=\"Name\"\n             type=\"text\"\n             required\n             #nameLocal=\"ngModel\"\n             class=\"form-control\"/>\n    </div>\n    <span class=\"help-block alert-danger\" *ngIf=\"!nameLocal.valid && nameLocal.touched\">\n      Please enter a name\n    </span>\n\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <textarea name=\"description\"\n                ngModel\n                id=\"description\"\n                placeholder=\"Description\"\n                rows=\"5\"\n                class=\"form-control\"></textarea>\n    </div>\n\n    <button class=\"btn btn-block btn-primary\" type=\"submit\">Create</button>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/location/new-location/new-location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_location_service_client__ = __webpack_require__("../../../../../src/app/services/location.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewLocationComponent = (function () {
    function NewLocationComponent(locationService, router, activatedRoute) {
        this.locationService = locationService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    NewLocationComponent.prototype.ngOnInit = function () {
        this.activatedRoute.params
            .subscribe(function (params) {
        });
    };
    NewLocationComponent.prototype.create = function () {
        var _this = this;
        var location = {};
        location.name = this.locForm.value.name;
        location.description = this.locForm.value.description;
        this.locationService.createLocation(location)
            .subscribe(function (data) {
            _this.router.navigate(['location', data._id]);
        }, function (error) {
            _this.errorMsg = 'Failed to create new location';
            _this.errorFlag = true;
        });
    };
    return NewLocationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('locForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], NewLocationComponent.prototype, "locForm", void 0);
NewLocationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-new-location',
        template: __webpack_require__("../../../../../src/app/components/location/new-location/new-location.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/location/new-location/new-location.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_location_service_client__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_location_service_client__["a" /* LocationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], NewLocationComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=new-location.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/site/site-header/site-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/site/site-header/site-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a routerLink=\"/\" class=\"navbar-brand thick\">\n        <b>Beer Finder</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-header pull-right\">\n      <a class=\"navbar-brand thin\">\n        {{tags}}\n      </a>\n    </p>\n\n    <p class=\"navbar-text pull-right\">\n      <button [routerLink]=profileLink\n              class=\"navbar-link icon-button\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </button>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/site/site-header/site-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SiteHeaderComponent = (function () {
    function SiteHeaderComponent(router, activatedRoute, sharedService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.errorFlag = false;
        this.errorMsg = '';
    }
    SiteHeaderComponent.prototype.ngOnInit = function () {
        var userId;
        this.activatedRoute.params
            .subscribe(function (params) {
            userId = params['userId'];
        });
        var user = this.sharedService.user;
        console.log(user);
        if (user) {
            this.profileLink = '/user/' + user._id;
            if (user.admin) {
                this.tags += '*ADMIN*';
            }
        }
        else {
            this.profileLink = '/login';
        }
    };
    return SiteHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], SiteHeaderComponent.prototype, "showProfile", void 0);
SiteHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-site-header',
        template: __webpack_require__("../../../../../src/app/components/site/site-header/site-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/site/site-header/site-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object])
], SiteHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=site-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-site-header [showProfile]=true></app-site-header>\n\n<div class=\"container-fluid\">\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n\n    <input   placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"\n             autocomplete=\"off\"\n             autocapitalize=\"none\"/>\n    <span class=\"help-block alert-danger\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username\n    </span>\n\n    <input   placeholder=\"password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\"/>\n    <span class=\"help-block alert-danger\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password\n    </span>\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Login</button>\n\n    <button class=\"btn btn-success btn-block\"\n            type=\"submit\"\n            [routerLink]=\"['/register']\">Register</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(userService, sharedService, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.router = router;
        // properties
        this.errorFlag = false;
        this.errorMsg = '';
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // fetching data from loginForm
        var username = this.loginForm.value.username;
        var password = this.loginForm.value.password;
        this.userService.login(username, password)
            .subscribe(function (data) {
            if (!data) {
                _this.errorMsg = 'Invalid username or password';
                _this.errorFlag = true;
                return;
            }
            _this.sharedService.user = data;
            _this.user = _this.sharedService.user;
            _this.router.navigate(['/user/' + _this.user._id]);
        }, function (error) {
            _this.errorMsg = 'Login failed';
            _this.errorFlag = true;
        });
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-site-header [showProfile]=true></app-site-header>\n\n<div class=\"container-fluid\">\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Register</h1>\n\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n\n    <input placeholder=\"username\"\n           name=\"username\"\n           type=\"text\"\n           class=\"form-control\"\n           ngModel\n           #username=\"ngModel\"\n           required\n           autocomplete=\"off\"\n           autocapitalize=\"none\"/>\n    <span class=\"help-block alert-danger\" *ngIf=\"!username.valid && username.touched\">\n      Please enter a username\n    </span>\n\n    <input placeholder=\"password\"\n           name=\"password\"\n           type=\"password\"\n           class=\"form-control\"\n           ngModel\n           required\n           #password=\"ngModel\"/>\n    <span class=\"help-block alert-danger\" *ngIf=\"!password.valid && password.touched\">\n      Please enter a password\n    </span>\n\n    <input placeholder=\"verify password\"\n           name=\"verifyPassword\"\n           type=\"password\"\n           class=\"form-control\"\n           ngModel\n           required\n           #verifyPassword=\"ngModel\"/>\n    <span class=\"help-block alert-danger\"\n          *ngIf=\"(!verifyPassword.valid || password.value !== verifyPassword.value) && verifyPassword.touched\">\n      Please enter matching password\n    </span>\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid || password.value !== verifyPassword.value\">Register</button>\n\n    <button class=\"btn btn-danger btn-block\"\n            type=\"submit\"\n            [routerLink]=\"['/login']\">Cancel</button>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(userService, sharedService, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.router = router;
        this.errorMsg = '';
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.userExists = function (username) {
        this.userService.findUserByUsername(username)
            .subscribe(function (data) {
            return !!data;
        }, function (error) {
            return false;
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.loginForm.value.password !== this.loginForm.value.verifyPassword) {
            this.errorMsg = 'Passwords do not match';
            this.errorFlag = true;
            return;
        }
        if (this.userExists(this.loginForm.value.username)) {
            this.errorMsg = 'User already exists';
            this.errorFlag = true;
            return;
        }
        this.user = {};
        var username = this.loginForm.value.username;
        var password = this.loginForm.value.password;
        this.userService.register(username, password)
            .subscribe(function (data) {
            _this.router.navigate(['/user/' + _this.sharedService.user._id]);
        }, function (error) {
            _this.errorMsg = 'Failed to create new user';
            _this.errorFlag = true;
        });
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "loginForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user-detail/user-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-site-header [showProfile]=true></app-site-header>\n\n<div *ngIf=\"user\">\n  <h1>{{user.username}}</h1>\n  <h3>{{user.firstName}}</h3>\n  <h3>{{user.lastName}}</h3>\n  <h3>{{user.email}}</h3>\n\n  <app-location-list [locationList]=\"user.locations\"></app-location-list>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailComponent = (function () {
    function UserDetailComponent(router, activatedRoute, userSvc) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userSvc = userSvc;
        this.errorFlag = false;
        this.errorMsg = '';
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId;
        this.activatedRoute.params
            .subscribe(function (params) {
            userId = params['userId'];
        });
        this.userSvc.findUserById(userId)
            .subscribe(function (data) {
            _this.user = data;
        }, function (error) {
            _this.errorMsg = 'Failed to find location';
            _this.errorFlag = true;
        });
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-detail',
        template: __webpack_require__("../../../../../src/app/components/user/user-detail/user-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user-detail/user-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], UserDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=user-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user-edit/user-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user-edit/user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-site-header [showProfile]=true></app-site-header>\n\n<div class=\"container\">\n\n  <form #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input name=\"username\"\n             [(ngModel)]=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"username\"\n             placeholder=\"walice\"\n             readonly\n             required\n             (focus)=\"setUpdated(false)\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input name=\"email\"\n             [(ngModel)]=\"email\"\n             #emailLocal=\"ngModel\"\n             type=\"email\"\n             class=\"form-control\"\n             id=\"email\"\n             [email]=\"email !== ''\"\n             placeholder=\"alice.wonderland@unicorn.com\"\n             (focus)=\"setUpdated(false)\">\n    </div>\n    <span class=\"help-block alert-danger\" *ngIf=\"!emailLocal.valid && emailLocal.touched\">\n      Please enter a valid email address\n    </span>\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input name=\"firstName\"\n             [(ngModel)]=\"firstName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"first-name\"\n             placeholder=\"Alice\"\n             (focus)=\"setUpdated(false)\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input name=\"lastName\"\n             [(ngModel)]=\"lastName\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"last-name\"\n             placeholder=\"Wonderland\"\n             (focus)=\"setUpdated(false)\">\n    </div>\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"button\"\n            routerLink=\"/locations\">Manage Locations</button>\n\n    <a class=\"btn btn-danger btn-block \"\n       (click)=\"logout()\">Logout</a>\n  </form>\n\n  <div *ngIf=\"updated\"\n       class=\"alert alert-success\">\n    Update Saved\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user-edit/user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserEditComponent = (function () {
    function UserEditComponent(userService, sharedService, router, activatedRoute) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        // properties
        this.errorFlag = false;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
        this.userId = this.user._id;
        this.username = this.user.username;
        this.email = this.user.email ? this.user.email : '';
        this.firstName = this.user.firstName;
        this.lastName = this.user.lastName;
        this.updated = false;
    };
    UserEditComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    UserEditComponent.prototype.update = function () {
        var _this = this;
        var updatedUser = {};
        updatedUser.firstName = this.loginForm.value.firstName;
        updatedUser.lastName = this.loginForm.value.lastName;
        updatedUser.email = this.loginForm.value.email;
        this.userService.updateUser(this.userId, updatedUser)
            .subscribe(function (data) {
            _this.router.navigate(['/user/' + _this.userId]);
            _this.updated = true;
        }, function (error) {
            _this.errorMsg = 'Failed to update user';
            _this.errorFlag = true;
        });
    };
    UserEditComponent.prototype.setUpdated = function (value) {
        this.updated = value;
    };
    return UserEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], UserEditComponent.prototype, "loginForm", void 0);
UserEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-edit',
        template: __webpack_require__("../../../../../src/app/components/user/user-edit/user-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user-edit/user-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], UserEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = (function () {
    function UserListComponent(router, activatedRoute, userSvc) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userSvc = userSvc;
        this.errorFlag = false;
        this.errorMsg = '';
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.activatedRoute.params
            .subscribe(function (params) {
        });
    };
    return UserListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], UserListComponent.prototype, "locationList", void 0);
UserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-list',
        template: __webpack_require__("../../../../../src/app/components/user/user-list/user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user-list/user-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], UserListComponent);

var _a, _b, _c;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user-search/user-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user-search/user-search.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-site-header [showProfile]=true></app-site-header>\n\n<div class=\"container-fluid row\">\n  <div>\n    <h2>User Search</h2>\n    <form #f=\"ngForm\" (ngSubmit)=\"search()\">\n\n      <div class=\"form-group\">\n        <label for=\"query\">Query</label>\n        <input name=\"query\"\n               [(ngModel)]=\"query\"\n               id=\"query\"\n               placeholder=\"query string\"\n               type=\"text\"\n               required\n               class=\"form-control\"/>\n      </div>\n\n      <button class=\"btn btn-primary btn-block\" type=submit>Search</button>\n    </form>\n  </div>\n</div>\n\n<div *ngIf=\"userList\">\n  <div>\n    <ul class=\"list-group\">\n\n      <div *ngFor=\"let user of userList\">\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <a routerLink=\"/user/{{user._id}}\">\n              {{user.username}}\n            </a>\n          </div>\n        </li>\n      </div>\n\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user-search/user-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserSearchComponent = (function () {
    function UserSearchComponent(router, activatedRoute, userSvc) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userSvc = userSvc;
        this.errorFlag = false;
        this.errorMsg = '';
    }
    UserSearchComponent.prototype.ngOnInit = function () {
        this.activatedRoute.params
            .subscribe(function (params) {
        });
    };
    UserSearchComponent.prototype.search = function () {
        var _this = this;
        this.userSvc.searchUsers(this.query)
            .subscribe(function (data) {
            _this.userList = data;
        }, function (error) {
            _this.errorMsg = 'Search failed';
            _this.errorFlag = true;
        });
    };
    return UserSearchComponent;
}());
UserSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-search',
        template: __webpack_require__("../../../../../src/app/components/user/user-search/user-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user-search/user-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], UserSearchComponent);

var _a, _b, _c;
//# sourceMappingURL=user-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route) {
        if ('user' in route.data.roles) {
            var userId = route.params.userId;
            return this.userService.canAccessUser(userId);
        }
        else if ('owner' in route.data.roles) {
            var locId = route.params.locId;
            return this.userService.canAccessLocation(locId);
        }
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/beer.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BeerService = (function () {
    function BeerService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].serverBaseUrl;
    }
    BeerService.prototype.findBeersByName = function (query) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */]();
        params.set('query', query);
        var requestOpts = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({
            search: params
        });
        return this._http.get(this.baseUrl + '/api/beer', requestOpts)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    BeerService.prototype.findBeerById = function (beerId) {
        return this._http.get(this.baseUrl + '/api/beer/' + beerId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    BeerService.prototype.updateBeer = function (beerId, beer) {
        return this._http.put(this.baseUrl + '/api/beer/' + beerId, beer)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    BeerService.prototype.deleteBeer = function (beerId) {
        return this._http.delete(this.baseUrl + '/api/beer/' + beerId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    BeerService.prototype.findStockByBeer = function (bid) {
        return this._http.get(this.baseUrl + '/api/beer/' + bid + '/stock')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    BeerService.prototype.reportBeer = function (stock) {
        return this._http.post(this.baseUrl + '/api/beer/' + stock.lid + '/report', stock)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return BeerService;
}());
BeerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], BeerService);

var _a;
//# sourceMappingURL=beer.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/location.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationService = (function () {
    function LocationService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverBaseUrl;
    }
    LocationService.prototype.createLocation = function (location) {
        return this._http.post(this.baseUrl + '/api/loc', location)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    LocationService.prototype.findLocationsByName = function (query) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.set('query', query);
        var requestOpts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            search: params
        });
        return this._http.get(this.baseUrl + '/api/loc', requestOpts)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    LocationService.prototype.findLocationById = function (locationId) {
        return this._http.get(this.baseUrl + '/api/loc/' + locationId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    LocationService.prototype.updateLocation = function (locationId, location) {
        return this._http.put(this.baseUrl + '/api/loc/' + locationId, location)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    LocationService.prototype.deleteLocation = function (locationId) {
        return this._http.delete(this.baseUrl + '/api/loc/' + locationId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    LocationService.prototype.findStockByLocation = function (locationId) {
        return this._http.get(this.baseUrl + '/api/loc/' + locationId + '/stock')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return LocationService;
}());
LocationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], LocationService);

var _a;
//# sourceMappingURL=location.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        this.user = '';
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// injecting service into module
var UserService = (function () {
    function UserService(_http, sharedService, router) {
        this._http = _http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverBaseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
            'searchUsers': this.searchUsers,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser,
            'canAccessUser': this.canAccessUser,
            'canAccessLocation': this.canAccessLocation,
            'login': this.login,
            'logout': this.logout,
            'register': this.register,
        };
    }
    UserService.prototype.canAccessUser = function (userId) {
        var _this = this;
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user; // setting user so as to share with all components
            }
            else if (user.admin || user._id === userId) {
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.canAccessLocation = function (locId) {
        var _this = this;
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user; // setting user so as to share with all components
            }
            else if (user.admin || locId in user.locations) {
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        var body = {
            username: username,
            password: password
        };
        return this._http.post(this.baseUrl + '/api/login', body, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (res) {
            var data = res;
        });
    };
    UserService.prototype.register = function (username, password) {
        this.options.withCredentials = true;
        var user = {
            username: username,
            password: password
        };
        return this._http.post(this.baseUrl + '/api/register', user, this.options)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.createUser = function (user) {
        return this._http.post(this.baseUrl + '/api/user', user)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.set('username', username);
        var requestOpts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            search: params
        });
        return this._http.get(this.baseUrl + '/api/user', requestOpts)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.searchUsers = function (userQuery) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.set('query', userQuery);
        var requestOpts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({
            search: params
        });
        return this._http.get(this.baseUrl + '/api/user/search', requestOpts)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.set('username', username);
        params.set('password', password);
        var requestOpts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        requestOpts.params = params;
        return this._http.get(this.baseUrl + '/api/user/', requestOpts)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this._http.put(this.baseUrl + '/api/user/' + userId, user)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    serverBaseUrl: '',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map