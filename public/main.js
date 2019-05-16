(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'filmary-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            entryComponents: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");


var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'register',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__["SignupComponent"]
    }
];


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 20%;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-around;\n  align-items: center;\n}\nheader .logo {\n  font-family: 'Montserrat Alternates', sans-serif;\n  color: #5cffcd;\n  font-size: 3.5em;\n}\nheader .buttons {\n  width: 18em;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-around;\n}\n.buttons .signup-but {\n  background-color:#2a2329;\n  color: white;\n  font-size: 1em;\n  font-weight: bold;\n  width: 8em;\n}\n.buttons .login-but {\n  font-size: 1em;\n  width: 8em;\n}\nsection {\n  background-image: url(\"/images/home-bg.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-flow: column;\n  align-items: flex-end;\n  justify-content: center;\n}\n.motto {\n  margin-right: 10%;\n  padding-bottom: 5%;\n  color: #2a2329;\n}\n.motto h1 {\n  font-size: 3em;\n}\n.motto h2 {\n  font-size: 2em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnREFBZ0Q7RUFDaEQsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBQ0E7RUFDRSw0Q0FBNEM7RUFDNUMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaGVhZGVyIC5sb2dvIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0IEFsdGVybmF0ZXMnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzVjZmZjZDtcbiAgZm9udC1zaXplOiAzLjVlbTtcbn1cbmhlYWRlciAuYnV0dG9ucyB7XG4gIHdpZHRoOiAxOGVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uYnV0dG9ucyAuc2lnbnVwLWJ1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IzJhMjMyOTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiA4ZW07XG59XG4uYnV0dG9ucyAubG9naW4tYnV0IHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHdpZHRoOiA4ZW07XG59XG5zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2ltYWdlcy9ob21lLWJnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1vdHRvIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgY29sb3I6ICMyYTIzMjk7XG59XG4ubW90dG8gaDEge1xuICBmb250LXNpemU6IDNlbTtcbn1cbi5tb3R0byBoMiB7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1 class=\"logo\">filmary</h1>\n  <div class=\"buttons\">\n    <button mat-raised-button class=\"signup-but\" routerLink=\"/register\">Join!</button>\n    <button mat-stroked-button class=\"login-but\" (click)=\"openLogin()\">Sign in</button>\n  </div>\n</header>\n<section class=\"mat-typography\">\n  <div class=\"motto\">\n    <h1>Lights! Camera! Action!</h1>\n    <h2>Now you can have your own film library</h2>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog) {
        this.dialog = dialog;
        this.test = "Test";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.openLogin = function () {
        var loginDialogRef = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], {
            width: '350px'
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-size: 1.5em;\n}\n.sign-up {\n  color: #2a2329;\n}\n.sign-up:hover {\n  cursor: pointer;\n}\nmat-dialog-content {\n  padding-top: 15px;\n}\nmat-dialog-content mat-form-field {\n  width: 100%;\n}\nmat-dialog-actions {\n  display: flex;\n  flex-flow: row;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  height: 80px;\n}\nmat-dialog-actions .forgot-password {\n  margin-right: 5%;\n  text-decoration: none;\n  color: #373e44;\n}\nmat-dialog-actions .forgot-password:hover {\n  color: #5cffcd;\n}\nmat-dialog-actions .login-btn {\n  background-color: #5cffcd;\n  color: #2a2329;\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbi5zaWduLXVwIHtcbiAgY29sb3I6ICMyYTIzMjk7XG59XG4uc2lnbi11cDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm1hdC1kaWFsb2ctY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxubWF0LWRpYWxvZy1jb250ZW50IG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbn1cbm1hdC1kaWFsb2ctYWN0aW9ucyAuZm9yZ290LXBhc3N3b3JkIHtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzM3M2U0NDtcbn1cbm1hdC1kaWFsb2ctYWN0aW9ucyAuZm9yZ290LXBhc3N3b3JkOmhvdmVyIHtcbiAgY29sb3I6ICM1Y2ZmY2Q7XG59XG5tYXQtZGlhbG9nLWFjdGlvbnMgLmxvZ2luLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2ZmY2Q7XG4gIGNvbG9yOiAjMmEyMzI5O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Sign In or <span class=\"sign-up\" (click)=\"router.navigate(['/register']); dialogRef.close();\">Register</span></h1>\n<mat-divider></mat-divider>\n<form #loginForm=\"ngForm\" (ngSubmit)=\"onLogin()\">\n  <mat-dialog-content>\n      <mat-form-field [hideRequiredMarker]=\"true\">\n        <input matInput placeholder=\"Email or username\" [(ngModel)]=\"loginInfo.login\" #login=\"ngModel\"  name=\"login\" required>\n      </mat-form-field>\n      <div *ngIf=\"login.invalid && (login.dirty || login.touched)\"\n    class=\"alert alert-danger\">\n        <div *ngIf=\"login.errors.required\" class=\"required-error\">\n          Email or username is required.\n        </div>\n      </div>\n      <mat-form-field [hideRequiredMarker]=\"true\">\n        <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"loginInfo.password\" #password=\"ngModel\" name=\"password\" required>\n      </mat-form-field>\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n    class=\"alert alert-danger\">\n        <div *ngIf=\"password.errors.required\" class=\"required-error\">\n          Password is required.\n        </div>\n      </div>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <a class=\"forgot-password\" href=\"#\">Forgot password?</a>\n    <button mat-raised-button type=\"submit\" class=\"login-btn\">Login</button>\n  </mat-dialog-actions>\n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/login */ "./src/app/models/login.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(dialogRef, data, router, loginService, authService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.loginService = loginService;
        this.authService = authService;
        this.loginInfo = new _models_login__WEBPACK_IMPORTED_MODULE_4__["Login"]({ login: localStorage.getItem("username") });
    }
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.loginService.loginUser(this.loginInfo).subscribe(function (loginResponse) {
            console.log(loginResponse);
            if (loginResponse.success) {
                _this.authService.login(loginResponse._id, loginResponse.username, loginResponse.token);
                _this.dialogRef.close();
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/api-routes.ts":
/*!**************************************!*\
  !*** ./src/app/models/api-routes.ts ***!
  \**************************************/
/*! exports provided: loginURL, signupURL, userURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginURL", function() { return loginURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupURL", function() { return signupURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userURL", function() { return userURL; });
var loginURL = "api/login-user";
var signupURL = "api/signup-user";
var userURL = "api/user";


/***/ }),

/***/ "./src/app/models/login.ts":
/*!*********************************!*\
  !*** ./src/app/models/login.ts ***!
  \*********************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
var Login = /** @class */ (function () {
    function Login(loginInfo) {
        this.login = loginInfo.login;
        this.password = loginInfo.password;
    }
    return Login;
}());



/***/ }),

/***/ "./src/app/models/signup.ts":
/*!**********************************!*\
  !*** ./src/app/models/signup.ts ***!
  \**********************************/
/*! exports provided: Signup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup", function() { return Signup; });
var Signup = /** @class */ (function () {
    function Signup(signupInfo) {
        this.username = signupInfo.username;
        this.email = signupInfo.email;
        this.password = signupInfo.password;
        this.name = signupInfo.name;
        this.birthDate = signupInfo.birthDate;
        this.gender = signupInfo.gender;
        this.nationality = signupInfo.nationality;
    }
    return Signup;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");



var AuthService = /** @class */ (function () {
    function AuthService() {
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
    }
    AuthService.prototype.login = function (_id, username, token) {
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('_user', _id);
        localStorage.setItem('username', username);
        localStorage.setItem('token', token);
    };
    AuthService.prototype.logout = function () {
        localStorage.setItem("isLoggedIn", "false");
        localStorage.removeItem("_user");
        localStorage.removeItem("username");
        localStorage.removeItem("token");
    };
    AuthService.prototype.checkExpToken = function () {
        var token = localStorage.getItem("token");
        return this.jwtHelper.isTokenExpired(token);
    };
    AuthService.prototype.isLoggedIn = function () {
        var status = false;
        if (localStorage.getItem("isLoggedIn") == "true" && !this.checkExpToken()) {
            status = true;
        }
        else {
            status = false;
        }
        return status;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _models_api_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/api-routes */ "./src/app/models/api-routes.ts");






var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.loginURL = _models_api_routes__WEBPACK_IMPORTED_MODULE_5__["loginURL"];
        this.signupURL = _models_api_routes__WEBPACK_IMPORTED_MODULE_5__["signupURL"];
        this.userURL = _models_api_routes__WEBPACK_IMPORTED_MODULE_5__["userURL"];
        this.userSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]());
        this.currentUser$ = this.userSource$.asObservable();
    }
    // this method change the user to all components
    LoginService.prototype.changeUser = function (user) {
        this.userSource$.next(user);
    };
    LoginService.prototype.getUser = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Authentication": localStorage.getItem("token")
            })
        };
        return this.http.get(this.userURL + "/" + localStorage.getItem("_user"), httpOptions);
    };
    LoginService.prototype.loginUser = function (loginInfo) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("" + this.loginURL, loginInfo, httpOptions);
    };
    LoginService.prototype.createUser = function (signupInfo) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("" + this.signupURL, signupInfo, httpOptions);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #2a2329;\n}\nmat-card {\n  width: 30%;\n}\nmat-card-title {\n  font-size: 1.6em!important;\n  color: #2a2329;\n}\nmat-card-subtitle {\n  font-size: 1.1em;\n}\nmat-card-content {\n  width: 100%;\n  padding-top: 5%;\n}\nform {\n  width: 100%;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n}\n.form-data {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  width: 100%;\n}\nmat-card-content mat-form-field {\n  width: 47.5%;\n}\nmat-card-content .email-confirmation, .password-confirmation {\n  width: 47.5%;\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-start;\n}\n.alert-danger {\n  font-size: 11px;\n  color: red;\n  margin-top: 5%;\n}\n.email-confirmation mat-form-field, .password-confirmation mat-form-field {\n  width: 100%;\n}\n.gender-group {\n  width: 100%;\n}\n.gender-group mat-radio-group {\n  margin: 2.5% 0;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-around;\n}\n.sign-in {\n  color: #5cffcd;\n}\n.sign-in:hover {\n  cursor: pointer;\n}\n.signup-btn {\n  margin-top: 5%;\n  background-color: #5cffcd;\n  color: #2a2329;\n  font-weight: bold;\n  width: 40%;\n}\n/* Material */\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\n}\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: #5cffcd;\n}\n::ng-deep .mat-input-element {\n  caret-color: #5cffcd;\n}\n::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #5cffcd;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGNBQWM7QUFDaEI7QUFDQztFQUNDLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyMzI5O1xufVxubWF0LWNhcmQge1xuICB3aWR0aDogMzAlO1xufVxubWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuNmVtIWltcG9ydGFudDtcbiAgY29sb3I6ICMyYTIzMjk7XG59XG5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5tYXQtY2FyZC1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9ybS1kYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbn1cbm1hdC1jYXJkLWNvbnRlbnQgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogNDcuNSU7XG59XG5tYXQtY2FyZC1jb250ZW50IC5lbWFpbC1jb25maXJtYXRpb24sIC5wYXNzd29yZC1jb25maXJtYXRpb24ge1xuICB3aWR0aDogNDcuNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uYWxlcnQtZGFuZ2VyIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbiAuZW1haWwtY29uZmlybWF0aW9uIG1hdC1mb3JtLWZpZWxkLCAucGFzc3dvcmQtY29uZmlybWF0aW9uIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZ2VuZGVyLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZ2VuZGVyLWdyb3VwIG1hdC1yYWRpby1ncm91cCB7XG4gIG1hcmdpbjogMi41JSAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uc2lnbi1pbiB7XG4gIGNvbG9yOiAjNWNmZmNkO1xufVxuLnNpZ24taW46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2lnbnVwLWJ0biB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNmZmNkO1xuICBjb2xvcjogIzJhMjMyOTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiA0MCU7XG59XG4vKiBNYXRlcmlhbCAqL1xuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogIzVjZmZjZDtcbn1cbjo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQge1xuICBjYXJldC1jb2xvcjogIzVjZmZjZDtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6ICM1Y2ZmY2Q7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <mat-card class=\"mat-elevation-z5\">\n    <mat-card-header>\n      <mat-card-title>\n        Register\n      </mat-card-title>\n      <mat-card-subtitle>\n        Create new user account\n      </mat-card-subtitle>\n    </mat-card-header>\n    <mat-divider [inset]=\"true\"></mat-divider>\n    <mat-card-content>\n      <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSignup()\">\n        <div class=\"form-data\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Username</mat-label>\n            <input matInput formControlName=\"username\" name=\"username\" placeholder=\"Username\">\n          </mat-form-field>\n          <mat-form-field class=\"birth-date\" appearance=\"outline\">\n            <mat-label>Birth Date</mat-label>\n            <input matInput [max]=\"maxDate\"  [matDatepicker]=\"birthDate\" placeholder=\"Birth Date\" id=\"birthDate\" formControlName=\"birthDate\" name=\"birthDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"birthDate\"></mat-datepicker-toggle>\n            <mat-datepicker #birthDate startView=\"multi-year\"></mat-datepicker>\n          </mat-form-field>\n          <!--<mat-form-field appearance=\"outline\">\n            <mat-label>Name</mat-label>\n            <input matInput formControlName=\"name\" name=\"name\" placeholder=\"Name\">\n          </mat-form-field>-->\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Email</mat-label>\n            <input matInput formControlName=\"email\" name=\"email\" placeholder=\"Email\">\n          </mat-form-field>\n          <div class=\"email-confirmation\">\n            <mat-form-field appearance=\"outline\">\n              <mat-label>Confirm Email</mat-label>\n              <input matInput formControlName=\"confirmEmail\" name=\"confirmEmail\" placeholder=\"Confirm Email\">\n              <div *ngIf=\"signupForm.errors?.emailConfirmation\" class=\"alert alert-danger\">\n                Email doesn't match\n              </div>\n            </mat-form-field>\n          </div>\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Password</mat-label>\n            <input matInput type=\"password\" formControlName=\"password\" name=\"password\" placeholder=\"Password\">\n          </mat-form-field>\n          <div class=\"password-confirmation\">\n            <mat-form-field appearance=\"outline\">\n              <mat-label>Confirm Password</mat-label>\n              <input matInput type=\"password\" formControlName=\"confirmPassword\" name=\"confirmPassword\" placeholder=\"Confirm Password\">\n              <div *ngIf=\"signupForm.errors?.passwordConfirmation\" class=\"alert alert-danger\">\n                Password doesn't match\n              </div>\n            </mat-form-field>\n          </div>\n          <!--<mat-form-field appearance=\"outline\">\n            <mat-label>Nationality</mat-label>\n            <mat-select formControlName=\"nationality\" name=\"nationality\" placeholder=\"Nationality\">\n             <mat-option *ngFor=\"let nation of nations\" [value]=\"nation\">\n               {{nation}}\n             </mat-option>\n           </mat-select>\n          </mat-form-field>\n          <div class=\"gender-group\">\n            <mat-radio-group formControlName=\"gender\" name=\"gender\">\n              <mat-radio-button value=\"1\">Male</mat-radio-button>\n              <mat-radio-button value=\"2\">Female</mat-radio-button>\n              <mat-radio-button value=\"3\">Other</mat-radio-button>\n            </mat-radio-group>\n          </div>-->\n        </div>\n        <p>\n          Do you already have an account? <span class=\"sign-in\" (click)=\"signIn()\">Sign In</span>\n        </p>\n        <button mat-raised-button type=\"submit\" class=\"signup-btn\">Ready to go! </button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</section>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _validators_email_confirmation_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validators/email-confirmation.directive */ "./src/app/validators/email-confirmation.directive.ts");
/* harmony import */ var _validators_password_confirmation_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validators/password-confirmation.directive */ "./src/app/validators/password-confirmation.directive.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _models_signup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/signup */ "./src/app/models/signup.ts");









var SignupComponent = /** @class */ (function () {
    function SignupComponent(dialog, loginService, router) {
        this.dialog = dialog;
        this.loginService = loginService;
        this.router = router;
        this.nations = [];
        this.maxDate = new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate()); // max checkout
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            confirmEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            birthDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            nationality: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        }, { validators: [_validators_email_confirmation_directive__WEBPACK_IMPORTED_MODULE_5__["confirmEmailValidator"], _validators_password_confirmation_directive__WEBPACK_IMPORTED_MODULE_6__["confirmPasswordValidator"]] });
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.onSignup = function () {
        var _this = this;
        var signupInfo = new _models_signup__WEBPACK_IMPORTED_MODULE_8__["Signup"]({
            username: this.signupForm.value.username,
            email: this.signupForm.value.email,
            password: this.signupForm.value.password,
            name: this.signupForm.value.name,
            gender: this.signupForm.value.gender,
            birthDate: this.signupForm.value.birthDate,
            nationality: this.signupForm.value.nationality
        });
        this.loginService.createUser(signupInfo)
            .subscribe(function (res) {
            localStorage.setItem("username", res.login);
            _this.router.navigate(["/dashboard"]);
        });
    };
    SignupComponent.prototype.signIn = function () {
        this.router.navigate(["/dashboard"]);
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/validators/email-confirmation.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/validators/email-confirmation.directive.ts ***!
  \************************************************************/
/*! exports provided: confirmEmailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmEmailValidator", function() { return confirmEmailValidator; });
// City must match cities list
var confirmEmailValidator = function (control) {
    var email = control.get('email');
    var confirmEmail = control.get('confirmEmail');
    return email.value && confirmEmail.value && email.value !== confirmEmail.value ? { 'emailConfirmation': true } : null;
};


/***/ }),

/***/ "./src/app/validators/password-confirmation.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/validators/password-confirmation.directive.ts ***!
  \***************************************************************/
/*! exports provided: confirmPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmPasswordValidator", function() { return confirmPasswordValidator; });
// City must match cities list
var confirmPasswordValidator = function (control) {
    var password = control.get('password');
    var confirmPassword = control.get('confirmPassword');
    return password.value && confirmPassword.value && password.value !== confirmPassword.value ? { 'passwordConfirmation': true } : null;
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sebasgb/Teleco4/SDySW/filmary/filmary-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map