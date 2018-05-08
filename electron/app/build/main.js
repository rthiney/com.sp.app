webpackJsonp([1],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnackbarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SnackbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SnackbarPage = /** @class */ (function () {
    function SnackbarPage(navCtrl, navParams, snackBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.snackBar = snackBar;
    }
    SnackbarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SnackbarPage');
    };
    SnackbarPage.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    SnackbarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-snackbar',template:/*ion-inline-start:"C:\Users\rthiney\source\repos\SP\myCapicitorApp\src\pages\snackbar\snackbar.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Snackbar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n<mat-form-field>\n  <input matInput value="Disco party!" placeholder="Message" #message>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput value="Dance" placeholder="Action" #action>\n</mat-form-field>\n\n<button mat-button (click)="openSnackBar(message.value, action.value)">Show snack-bar</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\rthiney\source\repos\SP\myCapicitorApp\src\pages\snackbar\snackbar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSnackBar */]])
    ], SnackbarPage);
    return SnackbarPage;
}());

//# sourceMappingURL=snackbar.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InputPage = /** @class */ (function () {
    function InputPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InputPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InputPage');
    };
    InputPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-input',template:/*ion-inline-start:"C:\Users\rthiney\source\repos\SP\myCapicitorApp\src\pages\input\input.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Input</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n <form class="example-form">\n  <mat-form-field class="example-full-width">\n    <input matInput placeholder="Favorite food" value="Sushi">\n  </mat-form-field>\n\n  <mat-form-field class="example-full-width">\n    <textarea matInput placeholder="Leave a comment"></textarea>\n  </mat-form-field>\n</form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\rthiney\source\repos\SP\myCapicitorApp\src\pages\input\input.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], InputPage);
    return InputPage;
}());

//# sourceMappingURL=input.js.map

/***/ }),

/***/ 147:
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
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPageModule", function() { return InputPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InputPageModule = /** @class */ (function () {
    function InputPageModule() {
    }
    InputPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__input__["a" /* InputPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__input__["a" /* InputPage */]),
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], InputPageModule);
    return InputPageModule;
}());

//# sourceMappingURL=input.module.js.map

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/input/input.module": [
		148
	],
	"../pages/select/select.module": [
		386,
		0
	],
	"../pages/snackbar/snackbar.module": [
		193
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 192;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarPageModule", function() { return SnackbarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__snackbar__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SnackbarPageModule = /** @class */ (function () {
    function SnackbarPageModule() {
    }
    SnackbarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__snackbar__["a" /* SnackbarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__snackbar__["a" /* SnackbarPage */]),
            ],
        })
    ], SnackbarPageModule);
    return SnackbarPageModule;
}());

//# sourceMappingURL=snackbar.module.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__input_input__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_list__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__snackbar_snackbar__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__input_input__["a" /* InputPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__list_list__["a" /* ListPage */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_6__snackbar_snackbar__["a" /* SnackbarPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\rthiney\source\repos\SP\myCapicitorApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Input" tabIcon="information-circle" ></ion-tab>\n    <ion-tab [root]="tab5Root" tabTitle="List" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tab6Root" tabTitle="Snackbar" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\rthiney\source\repos\SP\myCapicitorApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\rthiney\source\repos\SP\myCapicitorApp\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<mat-tab-group>\n  <mat-tab label="Tab 1">Content 1</mat-tab>\n  <mat-tab label="Tab 2">Content 2</mat-tab>\n</mat-tab-group>\n</ion-content>\n'/*ion-inline-end:"C:\Users\rthiney\source\repos\SP\myCapicitorApp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\rthiney\source\repos\SP\myCapicitorApp\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\rthiney\source\repos\SP\myCapicitorApp\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__capacitor_core__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var Modals = __WEBPACK_IMPORTED_MODULE_1__capacitor_core__["b" /* Plugins */].Modals;
var Toast = __WEBPACK_IMPORTED_MODULE_1__capacitor_core__["b" /* Plugins */].Toast;
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.showAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alertRet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Modals.alert({
                            title: 'Stop',
                            message: 'this is an error'
                        })];
                    case 1:
                        alertRet = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.showConfirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var confirmRet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Modals.confirm({
                            title: 'Confirm',
                            message: 'Are you sure you\'d like to press the red button?'
                        })];
                    case 1:
                        confirmRet = _a.sent();
                        console.log('Confirm ret', confirmRet);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.showPrompt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promptRet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Modals.prompt({
                            title: 'Hello',
                            message: 'What\'s your name?'
                        })];
                    case 1:
                        promptRet = _a.sent();
                        console.log('Prompt ret', promptRet);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.showActions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promptRet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Modals.showActions({
                            title: 'Photo Options',
                            message: 'Select an option to perform',
                            options: [
                                {
                                    title: 'Upload'
                                },
                                {
                                    title: 'Share'
                                },
                                {
                                    title: 'Remove',
                                    style: __WEBPACK_IMPORTED_MODULE_1__capacitor_core__["a" /* ActionSheetOptionStyle */].Destructive
                                }
                            ]
                        })];
                    case 1:
                        promptRet = _a.sent();
                        console.log('You selected', promptRet);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.toaster = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Toast.show({
                            text: 'Hello!'
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\rthiney\source\repos\SP\myCapicitorApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n   <button mat-button icon-right  (click)="showAlert()"  >Show Alert\n    <ion-icon name="alert"></ion-icon>\n   </button>\n<button mat-button>Click me!</button>\n    <button  mat-button  (click)="showConfirm()">Show Confirm</button>\n      <button   mat-button  (click)="showPrompt()">Show  Prompt</button>\n        <button   mat-button (click)="showActions()">Show Actions</button>\n\n        <button mat-button round (click)="toaster()" >Toast</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\rthiney\source\repos\SP\myCapicitorApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\rthiney\source\repos\SP\myCapicitorApp\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n<mat-selection-list #shoes>\n\n  <mat-list-option *ngFor="let shoe of typesOfShoes">\n\n    {{shoe}}\n\n  </mat-list-option>\n\n</mat-selection-list>\n\n\n\n<p>\n\n  Options selected: {{shoes.selectedOptions.selected.length}}\n\n</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\rthiney\source\repos\SP\myCapicitorApp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var SelectPage = /** @class */ (function () {
    function SelectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.animalControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]);
        this.disableSelect = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](false);
        this.pokemonControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.toppings = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.selected = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('valid', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern('valid'),
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.foods = [{
                value: 'steak-0',
                viewValue: 'Steak'
            },
            {
                value: 'pizza-1',
                viewValue: 'Pizza'
            },
            {
                value: 'tacos-2',
                viewValue: 'Tacos'
            }
        ];
        this.animals = [{
                name: 'Dog',
                sound: 'Woof!'
            },
            {
                name: 'Cat',
                sound: 'Meow!'
            },
            {
                name: 'Cow',
                sound: 'Moo!'
            },
            {
                name: 'Fox',
                sound: 'Wa-pa-pa-pa-pa-pa-pow!'
            },
        ];
        this.pokemonGroups = [{
                name: 'Grass',
                pokemon: [{
                        value: 'bulbasaur-0',
                        viewValue: 'Bulbasaur'
                    },
                    {
                        value: 'oddish-1',
                        viewValue: 'Oddish'
                    },
                    {
                        value: 'bellsprout-2',
                        viewValue: 'Bellsprout'
                    }
                ]
            },
            {
                name: 'Water',
                pokemon: [{
                        value: 'squirtle-3',
                        viewValue: 'Squirtle'
                    },
                    {
                        value: 'psyduck-4',
                        viewValue: 'Psyduck'
                    },
                    {
                        value: 'horsea-5',
                        viewValue: 'Horsea'
                    }
                ]
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [{
                        value: 'charmander-6',
                        viewValue: 'Charmander'
                    },
                    {
                        value: 'vulpix-7',
                        viewValue: 'Vulpix'
                    },
                    {
                        value: 'flareon-8',
                        viewValue: 'Flareon'
                    }
                ]
            },
            {
                name: 'Psychic',
                pokemon: [{
                        value: 'mew-9',
                        viewValue: 'Mew'
                    },
                    {
                        value: 'mewtwo-10',
                        viewValue: 'Mewtwo'
                    },
                ]
            }
        ];
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    SelectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectPage');
    };
    SelectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-select',template:/*ion-inline-start:"C:\Users\rthiney\source\repos\SP\myCapicitorApp\src\pages\select\select.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Select</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Basic select\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <mat-form-field>\n\n        <mat-select placeholder="Favorite food">\n\n          <mat-option *ngFor="let food of foods" [value]="food.value">\n\n          {{ food.viewValue }}\n\n          </mat-option>\n\n        </mat-select>\n\n      </mat-form-field>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Select in a form\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <form>\n\n        <mat-form-field>\n\n          <mat-select placeholder="Favorite food" [(ngModel)]="selectedValue" name="food">\n\n          <mat-option *ngFor="let food of foods" [value]="food.value">\n\n          {{food.viewValue}}\n\n          </mat-option>\n\n          </mat-select>\n\n        </mat-form-field>\n\n        <p> Selected value: {{selectedValue}} </p>\n\n      </form>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Select with form field features\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <mat-form-field>\n\n        <mat-select placeholder="Favorite animal" [formControl]="animalControl" required>\n\n          <mat-option>--</mat-option>\n\n          <mat-option *ngFor="let animal of animals" [value]="animal">\n\n          {{animal.name}}\n\n          </mat-option>\n\n        </mat-select>\n\n        <mat-error *ngIf="animalControl.hasError(\'required\')">Please choose an animal</mat-error>\n\n        <mat-hint>{{animalControl.value?.sound}}</mat-hint>\n\n      </mat-form-field>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Disabled select\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>\n\n        <mat-checkbox [formControl]="disableSelect">Disable select</mat-checkbox>\n\n      </p>\n\n      <p>\n\n        <mat-form-field>\n\n          <mat-select placeholder="Choose an option" [disabled]="disableSelect.value">\n\n            <mat-option value="option1">Option 1</mat-option>\n\n            <mat-option value="option2" disabled>Option 2 (disabled)</mat-option>\n\n            <mat-option value="option3">Option 3</mat-option>\n\n          </mat-select>\n\n        </mat-form-field>\n\n      </p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Select with option groups\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <mat-form-field>\n\n        <mat-select placeholder="Pokemon" [formControl]="pokemonControl">\n\n          <mat-option>-- None --</mat-option>\n\n          <mat-optgroup *ngFor="let group of pokemonGroups" [label]="group.name"\n\n          [disabled]="group.disabled">\n\n          <mat-option *ngFor="let pokemon of group.pokemon" [value]="pokemon.value">\n\n          {{ pokemon.viewValue }}\n\n          </mat-option>\n\n          </mat-optgroup>\n\n        </mat-select>\n\n      </mat-form-field>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Select with custom trigger text\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <mat-form-field>\n\n        <mat-select placeholder="Toppings" [formControl]="toppings" multiple>\n\n          <mat-select-trigger>\n\n            {{toppings.value ? toppings.value[0] : \'\'}}\n\n            <span *ngIf="toppings.value?.length > 1" class="example-additional-selection">\n\n            (+{{toppings.value.length - 1}} others)\n\n            </span>\n\n          </mat-select-trigger>\n\n          <mat-option *ngFor="let topping of toppingList" [value]="topping">{{topping}}</mat-option>\n\n        </mat-select>\n\n      </mat-form-field>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Select with a custom ErrorStateMatcher\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <mat-form-field>\n\n        <mat-select placeholder="Choose one" [formControl]="selected" [errorStateMatcher]="matcher">\n\n        <mat-option>Clear</mat-option>\n\n        <mat-option value="valid">Valid option</mat-option>\n\n        <mat-option value="invalid">Invalid option</mat-option>\n\n        </mat-select>\n\n        <mat-hint>Errors appear instantly!</mat-hint>\n\n        <mat-error *ngIf="selected.hasError(\'required\')">You must make a selection</mat-error>\n\n        <mat-error *ngIf="selected.hasError(\'pattern\') && !selected.hasError(\'required\')">\n\n          Your selection is invalid\n\n        </mat-error>\n\n      </mat-form-field>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\rthiney\source\repos\SP\myCapicitorApp\src\pages\select\select.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SelectPage);
    return SelectPage;
}());

//# sourceMappingURL=select.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(273);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_input_input_module__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_pro__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_pro___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ionic_pro__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_list_list__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_snackbar_snackbar_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_snackbar_snackbar__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_input_input__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_select_select__ = __webpack_require__(259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















__WEBPACK_IMPORTED_MODULE_5__ionic_pro__["Pro"].init('9f8872c9', {
    appVersion: '0.0.1'
});
var MyErrorHandler = /** @class */ (function () {
    function MyErrorHandler(injector) {
        try {
            this.ionicErrorHandler = injector.get(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */]);
        }
        catch (e) {
            // Unable to get the IonicErrorHandler provider, ensure
            // IonicErrorHandler has been added to the providers list below
        }
    }
    MyErrorHandler.prototype.handleError = function (err) {
        __WEBPACK_IMPORTED_MODULE_5__ionic_pro__["Pro"].monitoring.handleNewError(err);
        // Remove this if you want to disable Ionic's auto exception handling
        // in development mode.
        this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
    };
    MyErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Injector */]])
    ], MyErrorHandler);
    return MyErrorHandler;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_list_list__["a" /* ListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/input/input.module#InputPageModule', name: 'InputPage', segment: 'input', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select/select.module#SelectPageModule', name: 'SelectPage', segment: 'select', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/snackbar/snackbar.module#SnackbarPageModule', name: 'SnackbarPage', segment: 'snackbar', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__pages_input_input_module__["InputPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_snackbar_snackbar_module__["SnackbarPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["F" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["B" /* MatStepperModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_select_select__["a" /* SelectPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_input_input__["a" /* InputPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_snackbar_snackbar__["a" /* SnackbarPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */],
                [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* ErrorHandler */], useClass: MyErrorHandler }]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\rthiney\source\repos\SP\myCapicitorApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\rthiney\source\repos\SP\myCapicitorApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[260]);
//# sourceMappingURL=main.js.map