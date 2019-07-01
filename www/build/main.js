webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(15);
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
    function TabsPage(events) {
        var _this = this;
        this.events = events;
        // tab0Root = HomePage
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.events.subscribe('tab_changed_1', function () {
            _this.tabs.select(1);
        });
        //  this.events.subscribe('tab_changed_0',()=>{
        //   this.tabs.select(0);
        //  })
        this.events.subscribe('tab_changed_2', function () {
            _this.tabs.select(2);
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Tabs */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Tabs */])
    ], TabsPage.prototype, "tabs", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/pipo/Desktop/Archive/src/pages/tabs/tabs.html"*/'<ion-tabs color="xam" tabsLayout="icon-end">\n  <!-- <ion-tab [root]="tab0Root" tabTitle="Main"></ion-tab> -->\n  <!-- <ion-tab [root]="tab1Root" tabTitle="Locals" tabIcon="md-people" ></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Me" tabIcon="md-person"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Chats" tabIcon="md-chatboxes"></ion-tab> -->\n  <ion-tab [root]="tab1Root" tabTitle="LOCALS" ></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="ME" ></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="CHAT" tabIcon="ios-chatbubbles-outline" class="tabs-icon-top tabs-positive"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/pipo/Desktop/Archive/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Events */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_app__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_global_variable__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_util__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_storage__ = __webpack_require__(128);
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
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams, appProvider, storage, util, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appProvider = appProvider;
        this.storage = storage;
        this.util = util;
        this.db = db;
        this.countryList = [];
        this.user = __WEBPACK_IMPORTED_MODULE_3__global_global_variable__["a" /* GlobalVariables */].user;
        this.pictures = [];
        if (!this.user['pictures']) {
            this.user['pictures'] = '';
        }
        else {
            this.pictures = this.user['pictures'].split('|');
        }
    }
    EditProfilePage.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var filePath = 'users/' + file['name'];
        var ref = this.storage.ref(filePath);
        var task = ref.put(file);
        this.util.presentLoading();
        task.then(function (res) {
            _this.storage.ref(filePath).getDownloadURL().subscribe(function (data) {
                if (data) {
                    _this.user['pictures'] += data + '|';
                }
                _this.util.stopLoading();
            });
        }, function (err) { return _this.util.stopLoading(); });
    };
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
        this.itemsCollection = this.db.collection('users');
        this.user = this.navParams.get('user') || this.user;
    };
    EditProfilePage.prototype.onItemSelected = function (ev) {
        console.log(ev);
        this.user['country'] = ev;
    };
    EditProfilePage.prototype.save = function () {
        var _this = this;
        this.util.presentLoading();
        this.itemsCollection.doc(this.user['base64']).update(this.user).then(function (res) {
            __WEBPACK_IMPORTED_MODULE_3__global_global_variable__["a" /* GlobalVariables */].user = _this.user;
            _this.util.setLocal('user', _this.user);
            _this.util.stopLoading();
        }, function (err) { return _this.util.stopLoading(); });
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"/Users/pipo/Desktop/Archive/src/pages/edit-profile/edit-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Edit Profile</ion-title>\n    <ion-buttons right>\n      <button ion-button clear (tap)="save()">\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="uploads">\n    <img *ngIf="!user[\'pictures\']" [src]="user[\'picture\']" alt="">\n    <ion-slides *ngIf="user[\'pictures\']" pager="true">\n      <ng-container *ngFor="let pic of pictures">\n        <ion-slide *ngIf="pic.length>0">\n          <img [src]="pic" alt="">\n        </ion-slide>\n      </ng-container>\n    </ion-slides>\n    <div class="upload-btn-wrapper">\n      <button class="btn">Upload a photo</button>\n      <input type="file" (change)="uploadFile($event)">\n    </div>\n  </div>\n  <div class="country">\n    <p *ngIf="user[\'country\']">Country</p>\n    <ion-auto-complete [useIonInput]="true" [options]="{placeholder:\'Countries\'}"\n      (itemSelected)="onItemSelected($event)" [dataProvider]="appProvider">\n    </ion-auto-complete>\n  </div>\n  <ion-item>\n    <ion-label floating>City</ion-label>\n    <ion-input [(ngModel)]="user[\'city\']"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Language 1</ion-label>\n    <ion-input [(ngModel)]="user[\'language1\']"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Language 2</ion-label>\n    <ion-input [(ngModel)]="user[\'language2\']"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Language 3</ion-label>\n    <ion-input [(ngModel)]="user[\'language3\']"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Language 4</ion-label>\n    <ion-input [(ngModel)]="user[\'language4\']"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Guide Fee</ion-label>\n    <ion-input [(ngModel)]="user[\'guide_fee\']"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Meet at Airport?</ion-label>\n    <ion-toggle [(ngModel)]="user[\'meet_at_airport\']"></ion-toggle>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Introduction</ion-label>\n    <ion-textarea rows="3" [(ngModel)]="user[\'introduction\']"></ion-textarea>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/pipo/Desktop/Archive/src/pages/edit-profile/edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_fire_storage__["a" /* AngularFireStorage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByPipe = /** @class */ (function () {
    function FilterByPipe() {
    }
    FilterByPipe_1 = FilterByPipe;
    FilterByPipe.isFoundOnWalking = function (value, key) {
        var walker = value;
        var found = false;
        do {
            if (walker.hasOwnProperty(key) ||
                Object.getOwnPropertyDescriptor(walker, key)) {
                found = true;
                break;
            }
        } while ((walker = Object.getPrototypeOf(walker)));
        return found;
    };
    FilterByPipe.isNumber = function (value) {
        return !isNaN(parseInt(value, 10)) && isFinite(value);
    };
    /**
     * Checks function's value if type is function otherwise same value
     */
    FilterByPipe.getValue = function (value) {
        return typeof value === 'function' ? value() : value;
    };
    FilterByPipe.prototype.filterByString = function (filter) {
        if (filter) {
            filter = filter.toLowerCase();
        }
        return function (value) {
            return !filter ||
                (value ? ('' + value).toLowerCase().indexOf(filter) !== -1 : false);
        };
    };
    FilterByPipe.prototype.filterByBoolean = function (filter) {
        return function (value) { return Boolean(value) === filter; };
    };
    FilterByPipe.prototype.filterByObject = function (filter) {
        var _this = this;
        return function (value) {
            for (var key in filter) {
                if (key === '$or') {
                    if (!_this.filterByOr(filter.$or)(FilterByPipe_1.getValue(value))) {
                        return false;
                    }
                    continue;
                }
                if (!value || !FilterByPipe_1.isFoundOnWalking(value, key)) {
                    return false;
                }
                if (!_this.isMatching(filter[key], FilterByPipe_1.getValue(value[key]))) {
                    return false;
                }
            }
            return true;
        };
    };
    FilterByPipe.prototype.isMatching = function (filter, val) {
        val = val.toLowerCase();
        switch (typeof filter) {
            case 'boolean':
                return this.filterByBoolean(filter)(val);
            case 'string':
                return this.filterByString(filter)(val);
            case 'object':
                return this.filterByObject(filter)(val);
        }
        return this.filterDefault(filter)(val);
    };
    /**
     * Filter value by $or
     */
    FilterByPipe.prototype.filterByOr = function (filter) {
        var _this = this;
        return function (value) {
            var length = filter.length;
            var arrayComparison = function (i) { return value.indexOf(filter[i]) !== -1; };
            var otherComparison = function (i) { return _this.isMatching(filter[i], value); };
            var comparison = Array.isArray(value)
                ? arrayComparison
                : otherComparison;
            for (var i = 0; i < length; i++) {
                if (comparison(i)) {
                    return true;
                }
            }
            return false;
        };
    };
    /**
     * Default filterDefault function
     */
    FilterByPipe.prototype.filterDefault = function (filter) {
        return function (value) { return filter === undefined || filter == value; };
    };
    FilterByPipe.prototype.transform = function (array, filter) {
        if (!array) {
            return array;
        }
        switch (typeof filter) {
            case 'boolean':
                return array.filter(this.filterByBoolean(filter));
            case 'string':
                if (FilterByPipe_1.isNumber(filter)) {
                    return array.filter(this.filterDefault(filter));
                }
                return array.filter(this.filterByString(filter));
            case 'object':
                return array.filter(this.filterByObject(filter));
            case 'function':
                return array.filter(filter);
        }
        return array.filter(this.filterDefault(filter));
    };
    FilterByPipe = FilterByPipe_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'filterBy',
            pure: false
        })
    ], FilterByPipe);
    return FilterByPipe;
    var FilterByPipe_1;
}());

//# sourceMappingURL=filter-by.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_app__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { GlobalVariables } from '../../global/global_variable';


/**
 * Generated class for the ChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatsPage = /** @class */ (function () {
    function ChatsPage(navCtrl, navParams, db, util, appProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.util = util;
        this.appProvider = appProvider;
        this.message = '';
        this.receiver = {};
        this.user = {};
        this.msgList = [];
        this.receiver = Object.assign({}, this.navParams.get('receiver'));
        this.user = Object.assign({}, this.navParams.get('user'));
        this.appProvider.addChageHistory(this.user['base64'], this.receiver).then(function () {
            console.log('save chat');
        });
    }
    ChatsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ChatsPage');
        this.itemsCollection = this.db.collection('chats');
        this.itemsCollection.doc(this.util.getChatId(this.user['base64'], this.receiver['base64'])).collection("chats", function (ref) { return ref.orderBy('date'); }).snapshotChanges().subscribe(function (data) {
            _this.msgList = [];
            data.forEach(function (doc) {
                var chat = doc.payload.doc.data();
                chat['id'] = doc.payload.doc.id;
                _this.msgList.push(chat);
            });
        });
    };
    ChatsPage.prototype.submitChat = function () {
        var _this = this;
        if (this.message != '') {
            this.appProvider.submitChat(this.user['base64'], this.receiver['base64'], this.message).then(function () {
                _this.content.scrollToBottom();
            });
            this.message = '';
        }
    };
    ChatsPage.prototype.getChatList = function () {
        var _this = this;
        this.appProvider.getChatList(this.user['base64'], this.receiver['base64']).then(function (chats) {
            _this.msgList = chats;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], ChatsPage.prototype, "content", void 0);
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chats',template:/*ion-inline-start:"/Users/pipo/Desktop/Archive/src/pages/chats/chats.html"*/'<!--\n  Generated template for the ChatsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{receiver[\'name\']}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="message-wrap">\n    <div *ngFor="let msg of msgList" class="message" [class.left]=" msg[\'sender\'] === receiver[\'base64\'] "\n      [class.right]=" msg[\'sender\'] === user[\'base64\'] ">\n      <img class="user-img" [src]="receiver[\'picture\']" alt="" *ngIf="msg[\'sender\'] === receiver[\'base64\']">\n      <img class="user-img" [src]="user[\'picture\']" alt=""  *ngIf="msg[\'sender\'] === user[\'base64\']">\n      <ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner>\n      <div class="msg-detail">\n        <div class="msg-info">\n          <p>\n            {{msg.userName}}&nbsp;&nbsp;&nbsp;{{msg.date|date:\'MMM dd, yyyy hh:mm aa\'}}</p>\n        </div>\n        <div class="msg-content">\n          <span class="triangle"></span>\n          <p class="line-breaker ">{{msg.message}}</p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-10>\n        <ion-textarea [(ngModel)]="message" rows="2" placeholder="Message"></ion-textarea>\n      </ion-col>\n      <ion-col col-2>\n        <button (tap)="submitChat()" ion-button small>Send</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/pipo/Desktop/Archive/src/pages/chats/chats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_app__["a" /* AppProvider */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 252:
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
webpackEmptyAsyncContext.id = 252;

/***/ }),

/***/ 292:
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
webpackEmptyAsyncContext.id = 292;

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global_variable__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__homestay_detail_homestay_detail__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_firestore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_navigation_nav_params__ = __webpack_require__(26);
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
    function AboutPage(navCtrl, navParams, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.homestayList = [];
        this.user = __WEBPACK_IMPORTED_MODULE_2__global_global_variable__["a" /* GlobalVariables */].user;
        if (this.navParams.get('user')) {
            this.user = this.navParams.get('user');
        }
        this.itemsCollection = this.db.collection('homestays');
        this.itemsCollection.doc(this.user['base64']).collection("items").snapshotChanges().subscribe(function () {
            _this.getHomeStayList();
        });
    }
    AboutPage.prototype.editProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile__["a" /* EditProfilePage */], { user: this.user });
    };
    AboutPage.prototype.viewDetail = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__homestay_detail_homestay_detail__["a" /* HomestayDetailPage */], { homestay: item });
    };
    AboutPage.prototype.getHomeStayList = function () {
        var _this = this;
        this.homestayList = [];
        this.itemsCollection.doc(this.user['base64']).collection('items').get().subscribe(function (snap) {
            snap.forEach(function (doc) {
                var obj = doc.data();
                obj['id'] = doc.id;
                _this.homestayList.push(obj);
            });
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/pipo/Desktop/Archive/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar color="color-header">\n    <ion-title>\n      FACE TRIP\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4 text-center>\n            <img [src]="user[\'picture\']+\'?type=normal\'" alt="">\n          </ion-col>\n          <ion-col col-8>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <b>{{user[\'name\']}}</b>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span>{{user[\'city\']}}, {{user[\'country\']}}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="langs">{{user[\'language1\']}}</span>\n                  <span class="langs">{{user[\'language2\']}}</span>\n                  <span class="langs">{{user[\'language3\']}}</span>\n                  <span class="langs">{{user[\'language4\']}}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span>Fee: </span> <span class="label">{{user[\'guide_fee\']? user[\'guide_fee\'] : \'Free\'}}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span>{{user[\'meet_at_airport\'] ? \'Meet at Airport\': \'Not meet at Airport\'}}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  {{user[\'introduction\']}}\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col text-right style="justify-content: flex-end">\n            <button clear ion-button (tap)="editProfile()">Edit</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-list>\n    <ion-item-divider>\n      Homestay\n    </ion-item-divider>\n    <ion-item *ngFor="let item of homestayList" (tap)="viewDetail(item)">\n      <ion-thumbnail item-start>\n        <img [src]="item[\'picture\']">\n      </ion-thumbnail>\n      <h3>{{item[\'location\']}}</h3>\n      <p><span>Price:</span> {{item[\'price\']}}</p>\n      <p> <span>Wifi:</span> {{item[\'wifi\']?\'Yes\': \'No\'}}</p>\n      <p> <span>Breakfast:</span> {{item[\'breakfast\']?\'Yes\': \'No\'}}</p>\n      <p>{{item[\'description\']}}</p>\n    </ion-item>\n  </ion-list>\n  <ion-fab right bottom *ngIf="homestayList.length==0">\n    <button (tap)="viewDetail()" ion-fab color="primary">\n      <ion-icon name="md-add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pipo/Desktop/Archive/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_loading_loading_controller__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_modal_modal_controller__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toast_toast_controller__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the UtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UtilProvider = /** @class */ (function () {
    function UtilProvider(loadingCtrl, alertCtrl, toastCtrl, events, storage, modalCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
    }
    UtilProvider.prototype.showToast = function (message) {
        var _this = this;
        return new Promise(function (resolve) {
            var toast = _this.toastCtrl.create({
                message: message,
                duration: 3000,
                position: 'top'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        });
    };
    /**
     * Show Loading
     *
     *
     * @memberOf HelpToolProvider
     */
    UtilProvider.prototype.presentLoading = function (content) {
        if (content === void 0) { content = 'Data loading...'; }
        this.loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: content
        });
        this.loader.present();
    };
    /**
     * Stop Show Loading
     *
     *
     * @memberOf HelpToolProvider
     */
    UtilProvider.prototype.stopLoading = function () {
        this.loader.dismiss();
    };
    UtilProvider.prototype.setLocal = function (key, value) {
        return this.storage.set(key, value);
    };
    UtilProvider.prototype.getLocal = function (key) {
        return this.storage.get(key);
    };
    UtilProvider.prototype.clearLocal = function () {
        return this.storage.clear();
    };
    /**
   * show modal
   * @param component
   * @param data
   */
    UtilProvider.prototype.showModal = function (component, data, cssClass) {
        var _this = this;
        if (cssClass === void 0) { cssClass = 'full'; }
        return new Promise(function (resolve) {
            var modal = null;
            var opts = {};
            if (cssClass) {
                opts['cssClass'] = cssClass;
            }
            modal = _this.modalCtrl.create(component, data, opts);
            modal.onDidDismiss(function (_data) {
                resolve(_data);
            });
            modal.present();
        });
    };
    UtilProvider.prototype.showAlert = function (title, subTitle) {
        this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['Close']
        }).present();
    };
    UtilProvider.prototype.confirm = function (title, subTitle) {
        var _this = this;
        return new Promise(function (resolve) {
            var alert = _this.alertCtrl.create({
                title: title,
                message: subTitle,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            resolve('no');
                        }
                    },
                    {
                        text: 'Remove',
                        handler: function () {
                            resolve('yes');
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    UtilProvider.prototype.showConfirm = function (title, subTitle) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.alertCtrl.create({
                title: title,
                subTitle: subTitle,
                inputs: [
                    {
                        name: 'amount',
                        placeholder: 'Amount that you have',
                        type: 'number'
                    },
                    {
                        name: 'invested',
                        placeholder: 'Total invested (optional)',
                        type: 'number'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function (data) {
                            resolve();
                        }
                    },
                    {
                        text: 'Add',
                        handler: function (data) {
                            resolve(data);
                        }
                    }
                ]
            }).present();
        });
    };
    UtilProvider.prototype.mapCMCToCPC = function (coinmarketcap, cryptocompare) {
        if (!coinmarketcap)
            return null;
        //Convert an object with keys into an array of objects
        cryptocompare = Object.keys(cryptocompare).map(function (i) { return cryptocompare[i]; });
        var ignoreSpaceRegex = /\s/g, nonAlphaNumericRegex = /\W+/g;
        var map = {}, symbol1, name1, symbol2, name2, reduced;
        //Loop through every item in coinmarketcap
        //Note that symbols such as BTM, KNC will be repeated multiple times
        //Get the symbol of the current coin on coinmarketcap
        symbol1 = coinmarketcap.symbol;
        name1 = coinmarketcap.name.trim().replace(ignoreSpaceRegex, "").toLowerCase();
        // if(coinmarketcap[i].rank < 700){
        //Loop through every item on cryptocompare
        for (var j = cryptocompare.length - 1; j >= 0; j--) {
            //Get the symbol of the current coin on cryptocompare
            symbol2 = cryptocompare[j].Symbol;
            reduced = symbol2.replace(nonAlphaNumericRegex, "");
            name2 = cryptocompare[j].CoinName.trim().replace(ignoreSpaceRegex, "").toLowerCase();
            if (reduced.indexOf(symbol1) >= 0 && name1 === name2) {
                map[symbol1] = symbol2;
            }
            if (symbol1.toLowerCase() == 'trx') {
                if (symbol2.toLowerCase() == 'trx') {
                    map[symbol1] = symbol2;
                }
            }
        }
        return map;
    };
    UtilProvider.prototype.ValidURL = function (str) {
        var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        var regexp = new RegExp(expression);
        return regexp.test(str);
    };
    UtilProvider.prototype.extractUrl = function (str) {
        return str.match(/(https?:\/\/[^ ]*)/)[0];
    };
    UtilProvider.prototype.removeSpecialChar = function (str) {
        return str.replace(/[^a-zA-Z0-9]/g, '_');
    };
    UtilProvider.prototype.scrollTo = function (element, to, duration) {
        var start = element.scrollTop, change = to - start, currentTime = 0, increment = 20;
        var easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1)
                return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
        var animateScroll = function () {
            currentTime += increment;
            var val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    };
    UtilProvider.prototype.registerEvent = function (name, callback) {
        // this.events.unsubscribe(name);
        this.events.subscribe(name, callback);
    };
    UtilProvider.prototype.publishEvent = function (name, params) {
        this.events.publish(name, params);
    };
    UtilProvider.prototype.generateEmail = function () {
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = 'cust_';
        for (var ii = 0; ii < 8; ii++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return (string + '@gmail.com');
    };
    UtilProvider.prototype.getChatId = function (id1, id2) {
        var chatId = '';
        if (id1 < id2) {
            chatId = id1 + id2;
        }
        else {
            chatId = id2 + id1;
        }
        return chatId;
    };
    UtilProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toast_toast_controller__["a" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_modal_modal_controller__["a" /* ModalController */]])
    ], UtilProvider);
    return UtilProvider;
}());

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomestayDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_storage__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_global_variable__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_util__ = __webpack_require__(35);
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
 * Generated class for the HomestayDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomestayDetailPage = /** @class */ (function () {
    function HomestayDetailPage(navCtrl, navParams, util, storage, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.util = util;
        this.storage = storage;
        this.db = db;
        this.user = __WEBPACK_IMPORTED_MODULE_4__global_global_variable__["a" /* GlobalVariables */].user;
        this.homeStay = {};
        this.pictures = [];
        this.homeStay = Object.assign({}, this.navParams.get('homestay'));
        if (!this.homeStay['pictures']) {
            this.homeStay['pictures'] = '';
        }
        else {
            this.pictures = this.homeStay['pictures'].split('|');
        }
    }
    HomestayDetailPage.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var filePath = 'uploads/' + file['name'];
        var ref = this.storage.ref(filePath);
        var task = ref.put(file);
        this.util.presentLoading();
        task.then(function (res) {
            _this.storage.ref(filePath).getDownloadURL().subscribe(function (data) {
                if (data) {
                    _this.homeStay['picture'] = data;
                    _this.homeStay['pictures'] += data + '|';
                }
                _this.util.stopLoading();
            });
        }, function (err) { return _this.util.stopLoading(); });
    };
    HomestayDetailPage.prototype.ionViewDidLoad = function () {
        this.itemsCollection = this.db.collection('homestays');
        console.log('ionViewDidLoad HomestayDetailPage');
    };
    HomestayDetailPage.prototype.submitHomeStay = function () {
        var _this = this;
        this.util.presentLoading();
        var userRef = this.itemsCollection.doc(this.user['base64']);
        if (this.homeStay['id']) {
            userRef.collection("items").doc(this.homeStay['id']).update(this.homeStay).then(function (data) {
                console.log(data);
                _this.util.stopLoading();
            }, function (err) { _this.util.stopLoading(); });
        }
        else {
            userRef.collection("items").add(this.homeStay).then(function (data) {
                console.log(data);
                _this.util.stopLoading();
                _this.navCtrl.pop();
            }, function (err) { _this.util.stopLoading(); });
        }
    };
    HomestayDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-homestay-detail',template:/*ion-inline-start:"/Users/pipo/Desktop/Archive/src/pages/homestay-detail/homestay-detail.html"*/'<!--\n  Generated template for the HomestayDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Detail</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="uploads">\n    <img *ngIf="!homeStay[\'pictures\']" [src]="homeStay[\'picture\']" alt="">\n    <ion-slides *ngIf="homeStay[\'pictures\']" pager="true">\n      <ng-container *ngFor="let pic of pictures">\n        <ion-slide *ngIf="pic.length>0">\n          <img [src]="pic" alt="">\n        </ion-slide>\n      </ng-container>\n    </ion-slides>\n    <div class="upload-btn-wrapper">\n      <button class="btn">Upload a photo</button>\n      <input type="file" (change)="uploadFile($event)">\n    </div>\n  </div>\n  <ion-item>\n    <ion-label floating>Location</ion-label>\n    <ion-input [(ngModel)]="homeStay[\'location\']"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Daily Price</ion-label>\n    <ion-input type="number" [(ngModel)]="homeStay[\'price\']"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Wifi</ion-label>\n    <ion-toggle [(ngModel)]="homeStay[\'wifi\']"></ion-toggle>\n  </ion-item>\n  <ion-item>\n    <ion-label>Breakfast</ion-label>\n    <ion-toggle [(ngModel)]="homeStay[\'breakfast\']"></ion-toggle>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Description</ion-label>\n    <ion-textarea [(ngModel)]="homeStay[\'description\']" rows="4"></ion-textarea>\n  </ion-item>\n  <button [disabled]="!homeStay[\'picture\']" ion-button color="primary" full (tap)="submitHomeStay()">Submit</button>\n</ion-content>\n'/*ion-inline-end:"/Users/pipo/Desktop/Archive/src/pages/homestay-detail/homestay-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], HomestayDetailPage);
    return HomestayDetailPage;
}());

//# sourceMappingURL=homestay-detail.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_app__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_global_variable__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chats_chats__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_params__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_util__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_filter_by_filter_by__ = __webpack_require__(221);
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
    function ContactPage(navCtrl, navParams, util, zone, appProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.util = util;
        this.zone = zone;
        this.appProvider = appProvider;
        this.country = '';
        this.language = '';
        this.chatHistory = [];
        this.onlineUsers = [];
        this.countryCount = 0;
        this.chatHistorySearch = [];
        this.util.presentLoading();
        this.appProvider.getOnlineUsers().then(function (data) {
            _this.onlineUsers = data;
            _this.appProvider.getChatHistory(__WEBPACK_IMPORTED_MODULE_3__global_global_variable__["a" /* GlobalVariables */].user['base64']).then(function (data) {
                _this.chatHistory = data;
                _this.searchChatHistory();
                _this.chatHistory.map(function (item) {
                    if (_this.checkOnline(item)) {
                        item['online'] = true;
                    }
                });
                _this.util.stopLoading();
            }, function () { return _this.util.stopLoading(); });
        });
    }
    ContactPage.prototype.checkOnline = function (_item) {
        var filter = this.onlineUsers.filter(function (item) {
            return _item['base64'] == item['base64'];
        });
        return filter.length > 0;
    };
    ContactPage.prototype.ionViewDidEnter = function () {
        var receiver = Object.assign({}, __WEBPACK_IMPORTED_MODULE_3__global_global_variable__["a" /* GlobalVariables */].selectedUser);
        if (receiver && receiver['base64']) {
            __WEBPACK_IMPORTED_MODULE_3__global_global_variable__["a" /* GlobalVariables */].selectedUser = {};
            this.goToChat(receiver);
        }
    };
    ContactPage.prototype.goToChat = function (user) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chats_chats__["a" /* ChatsPage */], { receiver: user, user: __WEBPACK_IMPORTED_MODULE_3__global_global_variable__["a" /* GlobalVariables */].user });
    };
    ContactPage.prototype.onSearchClearCountry = function () {
        this.country = '';
        this.searchChatHistory();
    };
    ContactPage.prototype.onSearchClearLanguage = function () {
        this.language = '';
        this.searchChatHistory();
    };
    ContactPage.prototype.searchChatHistory = function () {
        var filterBy = new __WEBPACK_IMPORTED_MODULE_7__pipes_filter_by_filter_by__["a" /* FilterByPipe */]();
        var filter = filterBy.transform(this.chatHistory, {
            country: this.country,
            languages: this.language
        });
        this.chatHistorySearch = filter;
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/pipo/Desktop/Archive/src/pages/contact/contact.html"*/'<ion-header color="color-header">\n  <ion-navbar color="color-header">\n    <ion-title>\n        FACE TRIP\n    </ion-title>\n  </ion-navbar>\n  <div class="searchbox">\n    <ion-searchbar  [(ngModel)]="country" (ionClear)="onSearchClearCountry()" (search)="searchChatHistory()" [placeholder]="\'Vietnam\'+\'(\'+countryCount+\')\'" mode="ios"></ion-searchbar>\n    <ion-searchbar [(ngModel)]="language"  (ionClear)="onSearchClearLanguage()"  (search)="searchChatHistory()" placeholder="Languages" mode="ios"></ion-searchbar>\n    <button ion-button clear icon-only color="light" (tap)="searchChatHistory()">\n      <ion-icon name="md-search"></ion-icon>\n    </button>\n   </div>\n</ion-header>\n\n<ion-content>\n   <ion-list>\n      <ion-item (tap)="goToChat(item)" *ngFor="let item of chatHistorySearch">\n        <ion-avatar item-start>\n          <img [src]="item[\'picture\']">\n        </ion-avatar>\n        <h2>{{item[\'name\']}}</h2>\n        <button item-end ion-button round [color]="item[\'online\']? \'secondary\' : \'_gray\'"></button>\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/pipo/Desktop/Archive/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_params__["a" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_app__["a" /* AppProvider */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global_variable__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_app__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_util__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_platform_platform__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chats_chats__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__local_detail_local_detail__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__popup_popup__ = __webpack_require__(363);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { AboutPage } from '../about/about';





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, events, appProvider, util, platform, modalCtrl) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.appProvider = appProvider;
        this.util = util;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.country = '';
        this.language = '';
        this.user = __WEBPACK_IMPORTED_MODULE_2__global_global_variable__["a" /* GlobalVariables */].user;
        this.localList = [];
        this.countryCount = 0;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.searchLocal();
    };
    HomePage.prototype.searchLocal = function () {
        var _this = this;
        this.util.presentLoading();
        this.countryCount = 0;
        this.appProvider.searchLocal(this.country, this.language).then(function (res) {
            _this.localList = res;
            var filter = _this.localList.filter(function (item) {
                return item['country'].toLowerCase().indexOf('vietnam') >= 0;
            });
            _this.countryCount = filter.length;
            _this.util.stopLoading();
        });
    };
    HomePage.prototype.onSearchClearCountry = function () {
        var _this = this;
        this.country = '';
        this.util.presentLoading();
        this.appProvider.searchLocal(this.country, this.language).then(function (res) {
            _this.localList = res;
            _this.util.stopLoading();
        });
    };
    HomePage.prototype.onSearchClearLanguage = function () {
        var _this = this;
        this.language = '';
        this.util.presentLoading();
        this.appProvider.searchLocal(this.country, this.language).then(function (res) {
            _this.localList = res;
            _this.util.stopLoading();
        });
    };
    HomePage.prototype.viewDetail = function (user) {
        __WEBPACK_IMPORTED_MODULE_2__global_global_variable__["a" /* GlobalVariables */].selectedUser = user;
        // this.events.publish('tab_changed_1');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__local_detail_local_detail__["a" /* LocalDetailPage */], { user: user });
    };
    HomePage.prototype.openBrowser = function (fb_id) {
        if (this.platform.is('cordova')) {
            cordova.InAppBrowser.open('https://fb.com/' + fb_id, '_blank', 'location=yes');
        }
    };
    HomePage.prototype.askLocals = function () {
        var selectedUser = this.localList.filter(function (item) { return item['checked'] == true; });
        var listCheck = [];
        selectedUser.map(function (item) {
            listCheck.push(item);
        });
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__popup_popup__["a" /* PopupPage */], { device: listCheck, user: this.user });
        modal.present();
    };
    HomePage.prototype.goToChat = function (user) {
        __WEBPACK_IMPORTED_MODULE_2__global_global_variable__["a" /* GlobalVariables */].selectedUser = user;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chats_chats__["a" /* ChatsPage */], { receiver: user, user: this.user });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/pipo/Desktop/Archive/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="color-header">\n    <ion-title>\n      FACE TRIP\n    </ion-title>\n  </ion-navbar>\n  <div class="searchbox">\n    <ion-searchbar  [(ngModel)]="country" (ionClear)="onSearchClearCountry()" (search)="searchLocal()" [placeholder]="\'Vietnam\'+\'(\'+countryCount+\')\'" mode="ios"></ion-searchbar>\n    <ion-searchbar [(ngModel)]="language"  (ionClear)="onSearchClearLanguage()"  (search)="searchLocal()" placeholder="Languages" mode="ios"></ion-searchbar>\n    <button ion-button clear icon-only color="light" (tap)="searchLocal()">\n      <ion-icon name="md-search"></ion-icon>\n    </button>\n  </div>\n\n</ion-header>\n<ion-content>\n    <button ion-button icon-right (tap)="askLocals()" color="danger">\n       Ask Locals\n      <ion-icon name="md-chatboxes"></ion-icon>\n    </button>\n    <ion-card *ngFor="let user of localList">\n    <ion-card-content>\n\n      <ion-grid>\n        <ion-row >\n          <ion-col col-3 text-center>\n            <ion-checkbox [(ngModel)]="user[\'checked\']"></ion-checkbox>\n            <img [src]="user[\'picture\']+\'?type=normal\'" alt="" (tap)="viewDetail(user)">\n          </ion-col>\n          <ion-col col-9 (tap)="viewDetail(user)">\n            <ion-grid>\n              <ion-row>\n                <ion-col col-4>\n                  <b>{{user[\'name\']}}</b>\n                </ion-col>\n                <ion-col col-4><span>{{user[\'city\']}}, {{user[\'country\']}}</span></ion-col>\n                <ion-col col-2 text-center>\n                  <ion-icon name ="ios-home"></ion-icon>\n                </ion-col>\n                <ion-col col-2>\n                    {{user[\'guide_fee\']? user[\'guide_fee\'] : \'Free\'}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-8>\n                  <span class="langs">{{user[\'language1\']}}</span>\n                  <span class="langs">{{user[\'language2\']}}</span>\n                  <span class="langs">{{user[\'language3\']}}</span>\n                  <span class="langs">{{user[\'language4\']}}</span>\n                </ion-col>\n                <ion-col col-2 text-center>$10</ion-col>\n                <ion-col col-2></ion-col>\n              </ion-row>\n\n            </ion-grid>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pipo/Desktop/Archive/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_platform_platform__["a" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global_variable__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_params__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__homestay_view_homestay_view__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_app_app__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_util_util__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomestayDetailPage } from '../homestay-detail/homestay-detail';





var LocalDetailPage = /** @class */ (function () {
    function LocalDetailPage(navCtrl, platform, navParams, db, events, util, appProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.db = db;
        this.events = events;
        this.util = util;
        this.appProvider = appProvider;
        this.homestayList = [];
        this.user = __WEBPACK_IMPORTED_MODULE_2__global_global_variable__["a" /* GlobalVariables */].selectedUser;
        this.reviews = [];
        this.comment = '';
        this.pictures = [];
        if (this.navParams.get('user')) {
            this.user = this.navParams.get('user');
            __WEBPACK_IMPORTED_MODULE_2__global_global_variable__["a" /* GlobalVariables */].selectedUser = this.user;
        }
        this.user = __WEBPACK_IMPORTED_MODULE_2__global_global_variable__["a" /* GlobalVariables */].selectedUser;
        if (!this.user['pictures']) {
            this.user['pictures'] = '';
        }
        else {
            this.pictures = this.user['pictures'].split('|');
        }
        this.itemsCollection = this.db.collection('homestays');
        this.itemsCollection.doc(this.user['base64']).collection("items").snapshotChanges().subscribe(function () {
            _this.getHomeStayList();
        });
        //   this.events.publish('tab_changed_1');
        // }
    }
    LocalDetailPage.prototype.ionViewDidEnter = function () {
        // this.user = GlobalVariables.selectedUser;
        // if(!this.user['base64'])
        // {
        //   this.back();
        //   return;
        // }else{
        //   this.itemsCollection = this.db.collection<any>('homestays');
        //   this.itemsCollection.doc(this.user['base64']).collection("items").snapshotChanges().subscribe(()=>{
        //     this.getHomeStayList();
        //   })
        //   this.events.publish('tab_changed_1');
        // }
    };
    LocalDetailPage.prototype.editProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile__["a" /* EditProfilePage */], { user: this.user });
    };
    LocalDetailPage.prototype.viewDetail = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__homestay_view_homestay_view__["a" /* HomestayViewPage */], { homestay: item });
    };
    LocalDetailPage.prototype.getHomeStayList = function () {
        var _this = this;
        this.homestayList = [];
        this.itemsCollection.doc(this.user['base64']).collection('items').get().subscribe(function (snap) {
            snap.forEach(function (doc) {
                var obj = doc.data();
                obj['id'] = doc.id;
                if (_this.homestayList.length <= 0) {
                    _this.homestayList.push(obj);
                }
            });
            _this.getHomestayReviews();
        });
    };
    LocalDetailPage.prototype.goToChat = function () {
        __WEBPACK_IMPORTED_MODULE_2__global_global_variable__["a" /* GlobalVariables */].selectedUser = this.user;
        this.events.publish('tab_changed_2');
        // this.navCtrl.setRoot(ContactPage, {receiver: this.user, user: GlobalVariables.user});
    };
    LocalDetailPage.prototype.getPictures = function (strs) {
        return strs.split('|');
    };
    LocalDetailPage.prototype.back = function () {
        this.events.publish('tab_changed_0');
    };
    LocalDetailPage.prototype.openBrowser = function (fb_id) {
        if (this.platform.is('cordova')) {
            cordova.InAppBrowser.open('https://fb.com/' + fb_id, '_blank', 'location=yes');
        }
    };
    LocalDetailPage.prototype.getHomestayReviews = function () {
        var _this = this;
        this.appProvider.getHomestayReviews(this.homestayList[0]).then(function (data) {
            _this.reviews = data;
        });
    };
    LocalDetailPage.prototype.addReview = function () {
        var _this = this;
        if (this.comment != '') {
            this.util.presentLoading('Submitting review...');
            this.appProvider.addReview(this.user, this.homestayList[0], this.comment).then(function () {
                _this.util.stopLoading();
                _this.getHomestayReviews();
            });
        }
        else {
            this.util.showAlert('Notice', 'Please input your review first!');
        }
    };
    LocalDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-local-detail',template:/*ion-inline-start:"/Users/pipo/Desktop/Archive/src/pages/local-detail/local-detail.html"*/'<ion-header>\n  <ion-navbar color="color-header">\n    <!-- <ion-buttons left>\n        <button (tap)="back()" ion-button icon-only clear>\n          <ion-icon name="md-arrow-back"></ion-icon>\n        </button>\n      </ion-buttons> -->\n    <ion-title>\n      FACE TRIP\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-8>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <b>{{user[\'name\']}}</b>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span>{{user[\'city\']}}, {{user[\'country\']}}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="langs">{{user[\'language1\']}}</span>\n                  <span class="langs">{{user[\'language2\']}}</span>\n                  <span class="langs">{{user[\'language3\']}}</span>\n                  <span class="langs">{{user[\'language4\']}}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="label">Fee: </span> <span>{{user[\'guide_fee\']? user[\'guide_fee\'] : \'Free\'}}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span>{{user[\'meet_at_airport\'] ? \'Meet at Airport\': \'Not meet at Airport\'}}</span>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col text-right style="justify-content: flex-end">\n            <button (tap)="openBrowser(user[\'fb_id\'])" color="facebook" ion-button icon-only clear>\n              <ion-icon name="logo-facebook"></ion-icon>\n            </button>\n            <button (tap)="goToChat()" color="_gray" ion-button icon-only clear>\n              <ion-icon name="md-chatboxes"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <img *ngIf="!user[\'pictures\']" [src]="user[\'picture\']+\'?type=normal\'" alt="">\n      <ion-slides *ngIf="user[\'pictures\']" pager="true">\n        <ng-container *ngFor="let pic of pictures">\n          <ion-slide *ngIf="pic.length>0">\n            <img [src]="pic" alt="">\n          </ion-slide>\n        </ng-container>\n      </ion-slides>\n      <p padding>{{user[\'introduction\']}}</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-list>\n    <ion-item-divider>\n      Homestay\n    </ion-item-divider>\n  </ion-list>\n  <div class="homestay" *ngFor="let homeStay of homestayList">\n    <div class="uploads">\n      <img *ngIf="!homeStay[\'pictures\']" [src]="homeStay[\'picture\']" alt="">\n      <ion-slides *ngIf="homeStay[\'pictures\']" pager="true">\n        <ng-container *ngFor="let pic of getPictures(homeStay[\'pictures\'])">\n          <ion-slide>\n            <img [src]="pic" alt="">\n          </ion-slide>\n        </ng-container>\n      </ion-slides>\n    </div>\n    <ion-grid class="homestay-desc">\n      <ion-row>\n        <ion-col>Locaiton</ion-col>\n        <ion-col>{{homeStay[\'location\']}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Daily Price</ion-col>\n        <ion-col>{{homeStay[\'price\']|currency:\'USD\'}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Wifi</ion-col>\n        <ion-col>{{homeStay[\'wifi\']? \'Yes\': \'No\'}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Breakfast</ion-col>\n        <ion-col>{{homeStay[\'breakfast\'] ? \'Yes\': \'No\'}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <p>{{homeStay[\'description\']}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item-divider>Reviews</ion-item-divider>\n    <ion-list>\n      <ion-item *ngFor="let review of reviews;">\n        <ion-avatar item-start>\n          <img [src]="review[\'picture\']">\n        </ion-avatar>\n        <h2>{{review[\'name\']}}</h2>\n        <p>{{review[\'review\']}}</p>\n      </ion-item>\n    </ion-list>\n    <p>Write your Review</p>\n    <ion-textarea placeholder="Write your comment for this homestay" [(ngModel)]="comment" rows="4"></ion-textarea>\n    <button (tap)="addReview()" ion-button small>Submit</button>\n    <br>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pipo/Desktop/Archive/src/pages/local-detail/local-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_app_app__["a" /* AppProvider */]])
    ], LocalDetailPage);
    return LocalDetailPage;
}());

//# sourceMappingURL=local-detail.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomestayViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_storage__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_global_variable__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_util__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_app__ = __webpack_require__(38);
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
 * Generated class for the HomestayViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomestayViewPage = /** @class */ (function () {
    function HomestayViewPage(navCtrl, navParams, util, events, appProvider, storage, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.util = util;
        this.events = events;
        this.appProvider = appProvider;
        this.storage = storage;
        this.db = db;
        this.rating = 4;
        this.user = __WEBPACK_IMPORTED_MODULE_4__global_global_variable__["a" /* GlobalVariables */].user;
        this.homeStay = {};
        this.reviews = [];
        this.comment = '';
        this.pictures = [];
        events.subscribe('star-rating:changed', function (starRating) {
            console.log(starRating);
            _this.rating = starRating;
        });
        this.homeStay = Object.assign({}, this.navParams.get('homestay'));
        if (this.homeStay['pictures']) {
            this.pictures = this.homeStay['pictures'].split('|');
        }
    }
    HomestayViewPage.prototype.uploadFile = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var filePath = 'uploads/' + file['name'];
        var ref = this.storage.ref(filePath);
        var task = ref.put(file);
        task.then(function (res) {
            _this.storage.ref(filePath).getDownloadURL().subscribe(function (data) {
                if (data) {
                    _this.homeStay['picture'] = data;
                }
            });
        });
    };
    HomestayViewPage.prototype.ionViewDidLoad = function () {
        this.itemsCollection = this.db.collection('homestays');
        console.log('ionViewDidLoad HomestayDetailPage');
        this.getHomestayReviews();
    };
    HomestayViewPage.prototype.submitHomeStay = function () {
        var _this = this;
        this.util.presentLoading();
        var userRef = this.itemsCollection.doc(this.user['base64']);
        if (this.homeStay['id']) {
            userRef.collection("items").doc(this.homeStay['id']).update(this.homeStay).then(function (data) {
                console.log(data);
                _this.util.stopLoading();
            }, function (err) { _this.util.stopLoading(); });
        }
        else {
            userRef.collection("items").add(this.homeStay).then(function (data) {
                console.log(data);
                _this.util.stopLoading();
            }, function (err) { _this.util.stopLoading(); });
        }
    };
    HomestayViewPage.prototype.getHomestayReviews = function () {
        var _this = this;
        this.appProvider.getHomestayReviews(this.homeStay).then(function (data) {
            _this.reviews = data;
        });
    };
    HomestayViewPage.prototype.addReview = function () {
        var _this = this;
        if (this.comment != '') {
            this.util.presentLoading('Submitting review...');
            this.appProvider.addReview(this.user, this.homeStay, this.comment).then(function () {
                _this.util.stopLoading();
                _this.getHomestayReviews();
            });
        }
        else {
            this.util.showAlert('Notice', 'Please input your review first!');
        }
    };
    HomestayViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-homestay-view',template:/*ion-inline-start:"/Users/pipo/Desktop/Archive/src/pages/homestay-view/homestay-view.html"*/'<!--\n  Generated template for the HomestayDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Detail</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="uploads">\n    <img *ngIf="!homeStay[\'pictures\']" [src]="homeStay[\'picture\']" alt="">\n    <ion-slides *ngIf="homeStay[\'pictures\']">\n      <ng-container *ngFor="let pic of pictures">\n        <ion-slide>\n          <img [src]="pic" alt="">\n        </ion-slide>\n      </ng-container>\n\n    </ion-slides>\n  </div>\n  <ion-grid class="homestay-desc">\n    <ion-row>\n      <ion-col>Locaiton</ion-col>\n      <ion-col>{{homeStay[\'location\']}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Daily Price</ion-col>\n      <ion-col>{{homeStay[\'price\']|currency:\'USD\'}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Wifi</ion-col>\n      <ion-col>{{homeStay[\'wifi\']? \'Yes\': \'No\'}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Breakfast</ion-col>\n      <ion-col>{{homeStay[\'breakfast\'] ? \'Yes\': \'No\'}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p>{{homeStay[\'description\']}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-item lines="none">\n            <ionic3-star-rating \n              activeIcon = "ios-star"\n              defaultIcon = "ios-star-outline"\n              activeColor = "#488aff" \n              defaultColor = "red"\n              readonly="false"\n              [rating]="rating">\n            </ionic3-star-rating>\n               Selected rating: {{rating}}\n        </ion-item>\n\n    </ion-row>\n  </ion-grid>\n  <ion-item-divider>Reviews</ion-item-divider>\n  <ion-list>\n    <ion-item *ngFor="let review of reviews;">\n      <ion-avatar item-start>\n        <img [src]="review[\'picture\']">\n      </ion-avatar>\n      <h2>{{review[\'name\']}}</h2>\n      <p>{{review[\'review\']}}</p>\n    </ion-item>\n  </ion-list>\n  <p>Write your Review</p>\n  <ion-textarea placeholder="Write your comment for this homestay" [(ngModel)]="comment" rows="4"></ion-textarea>\n  <button (tap)="addReview()" ion-button small>Submit</button>\n  <br>\n</ion-content>\n'/*ion-inline-end:"/Users/pipo/Desktop/Archive/src/pages/homestay-view/homestay-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_storage__["a" /* AngularFireStorage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], HomestayViewPage);
    return HomestayViewPage;
}());

//# sourceMappingURL=homestay-view.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_app__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { GlobalVariables } from '../../global/global_variable';


var PopupPage = /** @class */ (function () {
    function PopupPage(navCtrl, navParams, viewCtrl, db, util, appProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.util = util;
        this.appProvider = appProvider;
        this.toastCtrl = toastCtrl;
        this.message = '';
        this.receiver = {};
        this.myUser = {};
        this.msgList = [];
    }
    PopupPage.prototype.ionViewWillEnter = function () {
        this.listUser = this.navParams.get('device');
        this.myUser = this.navParams.get('user');
    };
    PopupPage.prototype.clickSend = function () {
        if (this.message != '') {
            var i = 0;
            while (i < this.listUser.length) {
                // console.log(this.listUser);
                // console.log(this.listUser[i].name);
                // console.log(this.listUser[i].base64);
                this.appProvider.submitChat(this.myUser['base64'], this.listUser[i].base64, this.message);
                i += 1;
            }
            this.message = '';
            this.presentToast('successfully');
            this.viewCtrl.dismiss();
        }
    };
    PopupPage.prototype.clickClose = function () {
        this.viewCtrl.dismiss();
    };
    PopupPage.prototype.presentToast = function (data) {
        var toast = this.toastCtrl.create({
            message: data,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], PopupPage.prototype, "content", void 0);
    PopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popup',template:/*ion-inline-start:"/Users/pipo/Desktop/Archive/src/pages/popup/popup.html"*/'<ion-content>\n  <h2>Message</h2>\n  <div *ngFor="let user of listUser; let i = index">\n    <h4 *ngIf="listUser.length == 1">To: {{user.name}}</h4>\n    <h4 *ngIf="i==0 && listUser.length > 1 ">To: {{user.name}} and {{listUser.length-1}} users</h4>\n\n  </div>\n  <ion-textarea rows="4" [(ngModel)]="message" placeholder="Message"></ion-textarea>\n\n  <div class="bt-popup">\n    <button ion-button color="primary" (click)="clickSend()">SEND</button>\n    <button ion-button color="primary" (click)="clickClose()">CLOSE</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/pipo/Desktop/Archive/src/pages/popup/popup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], PopupPage);
    return PopupPage;
}());

//# sourceMappingURL=popup.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_util__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_firestore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_global_variable__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_app_app__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_select_country_select_country__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { User } from '../../models/user';


//import { EditProfilePage } from '../edit-profile/edit-profile';

var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, util, db, zone, appProvider, af_auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.util = util;
        this.db = db;
        this.zone = zone;
        this.appProvider = appProvider;
        this.af_auth = af_auth;
        this.countries = [];
        this.country = null;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LoginPage');
        this.itemsCollection = this.db.collection('users');
        this.util.presentLoading();
        this.getCountryList().then(function () {
            _this.util.stopLoading();
        });
    };
    LoginPage.prototype.getCountryList = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appProvider.getContryList().subscribe(function (data) {
                if (data) {
                    _this.countries = data;
                    __WEBPACK_IMPORTED_MODULE_7__global_global_variable__["a" /* GlobalVariables */].countries = data;
                }
                resolve();
            }, function (err) { return resolve(); });
        });
    };
    LoginPage.prototype.facebookLogin = function () {
        var _this = this;
        facebookConnectPlugin.login(["public_profile", "email"], function (obj) {
            _this.util.presentLoading();
            var facebookCredential = __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.auth.FacebookAuthProvider
                .credential(obj.authResponse.accessToken);
            _this.af_auth.auth.signInWithCredential(facebookCredential).then(function (res) {
                var obj = res.toJSON();
                var user = {};
                user['email'] = obj['email'];
                user['name'] = obj['displayName'];
                user['picture'] = obj['photoURL'];
                user['base64'] = btoa(user['email']);
                user['fb_id'] = obj['providerData'][0]['uid'];
                user['online'] = true;
                __WEBPACK_IMPORTED_MODULE_7__global_global_variable__["a" /* GlobalVariables */].user = user;
                var docRef = _this.itemsCollection.doc(user['base64']);
                docRef.get().subscribe(function (doc) {
                    if (!doc.exists) {
                        _this.itemsCollection.doc(user['base64']).set(user).then(function () {
                            _this.util.setLocal('user', user);
                        });
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_7__global_global_variable__["a" /* GlobalVariables */].user = doc.data();
                        _this.util.setLocal('user', doc.data());
                    }
                    _this.util.stopLoading();
                    if (__WEBPACK_IMPORTED_MODULE_7__global_global_variable__["a" /* GlobalVariables */].user['country'] && __WEBPACK_IMPORTED_MODULE_7__global_global_variable__["a" /* GlobalVariables */].user['country'] != '') {
                        _this.zone.run(function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                        });
                    }
                    else {
                        _this.util.showModal(__WEBPACK_IMPORTED_MODULE_9__components_select_country_select_country__["a" /* SelectCountryComponent */]).then(function (data) {
                            console.log(data);
                        });
                    }
                });
            });
        }, function (fail) {
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/pipo/Desktop/Archive/src/pages/login/login.html"*/'<ion-content>\n  <div class="login-wrap">\n    <h1>FACE TRIP</h1>\n    <button round full color="facebook" ion-button icon-left (tap)="facebookLogin()">\n      <ion-icon name="logo-facebook"></ion-icon>\n      Facebook\n    </button>\n    \n    <p text-center>Login or Register using your Facebook account</p>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/pipo/Desktop/Archive/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_8__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCountryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_util__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_global_variable__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_controller__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_app_app__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { AppProvider } from '../../providers/app/app';







/**
 * Generated class for the SelectCountryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SelectCountryComponent = /** @class */ (function () {
    function SelectCountryComponent(util, AppPro, navCtrl, zone, db, viewCtrl) {
        this.util = util;
        this.AppPro = AppPro;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.db = db;
        this.viewCtrl = viewCtrl;
        this.country = '';
        this.user = __WEBPACK_IMPORTED_MODULE_4__global_global_variable__["a" /* GlobalVariables */].user;
        this.countryList = [];
        this.itemsCollection = this.db.collection('users');
        this.getCountryList();
    }
    SelectCountryComponent.prototype.onItemSelected = function (ev) {
        this.country = ev;
    };
    SelectCountryComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SelectCountryComponent.prototype.getCountryList = function () {
        var _this = this;
        this.util.presentLoading();
        this.AppPro.getContryList().subscribe(function (data) {
            _this.countryList = data;
            _this.util.stopLoading();
        });
    };
    SelectCountryComponent.prototype.save = function () {
        var _this = this;
        if (!this.country) {
            this.util.showAlert('Notice', 'Please select country first');
        }
        else {
            this.user['country'] = this.country;
            __WEBPACK_IMPORTED_MODULE_4__global_global_variable__["a" /* GlobalVariables */].user['country'] = this.country;
            this.util.presentLoading();
            this.itemsCollection.doc(this.user['base64']).update(this.user).then(function () {
                _this.util.stopLoading();
                _this.viewCtrl.dismiss().then(function () {
                    _this.zone.run(function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]);
                    });
                });
            });
        }
    };
    SelectCountryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'select-country',template:/*ion-inline-start:"/Users/pipo/Desktop/Archive/src/components/select-country/select-country.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button clear (tap)="dismiss()">\n        Cancel\n      </button>\n    </ion-buttons>\n    <ion-title text-center>Select Country</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="login-wrap">\n    <h1>Select Your Country</h1>\n\n    <ion-select  [(ngModel)]="country" (ngModelChange)="onItemSelected($event)" placeholder="choose country">\n      <ion-option [value]="country[\'name\']" *ngFor="let item of countryList">{{item[\'name\']}}</ion-option>\n    </ion-select>\n    <button [disabled]="!country" round full color="primary" ion-button icon-left (tap)="save()">\n      Submit\n    </button>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/pipo/Desktop/Archive/src/components/select-country/select-country.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_controller__["a" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], SelectCountryComponent);
    return SelectCountryComponent;
}());

//# sourceMappingURL=select-country.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVariables; });
var GlobalVariables = /** @class */ (function () {
    function GlobalVariables() {
    }
    GlobalVariables.user = {};
    GlobalVariables.selectedUser = {};
    GlobalVariables.countries = [];
    return GlobalVariables;
}());

//# sourceMappingURL=global_variable.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(484);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_filter_by_filter_by__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_global_variable__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AppProvider = /** @class */ (function () {
    function AppProvider(http, db) {
        this.http = http;
        this.db = db;
        console.log('Hello AppProvider Provider');
        this.localCollections = this.db.collection('users');
        this.homestayCollections = this.db.collection('homestays');
        this.chatCollections = this.db.collection('chats');
        this.chatHistoryCollections = this.db.collection('chatHistory');
        this.reviewCollections = this.db.collection('reviews');
    }
    AppProvider.prototype.getResults = function (keyword) {
        return this.http.get("https://restcountries.eu/rest/v1/name/" + keyword).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (result) {
            return result.filter(function (item) { return item.name.toLowerCase().startsWith(keyword.toLowerCase()); }).map(function (i) { return i.name; });
        }));
    };
    AppProvider.prototype.getContryList = function () {
        return this.http.get('https://restcountries.eu/rest/v2/all');
    };
    AppProvider.prototype.searchLocal = function (country, language) {
        var _this = this;
        return new Promise(function (resolve) {
            var rs = [];
            var filterBy = new __WEBPACK_IMPORTED_MODULE_3__pipes_filter_by_filter_by__["a" /* FilterByPipe */]();
            _this.localCollections.get().subscribe(function (snap) {
                snap.forEach(function (doc) {
                    var docData = doc.data();
                    docData['country'] = docData['country'] || '';
                    docData['languages'] = docData['language1'] + "," + docData['language2'] + "," + docData['language3'] + "," + docData['language4'];
                    if (docData['base64'] != __WEBPACK_IMPORTED_MODULE_4__global_global_variable__["a" /* GlobalVariables */].user['base64']) {
                        rs.push(docData);
                    }
                });
                var filter = filterBy.transform(rs, {
                    country: country,
                    languages: language
                });
                resolve(filter);
            }, function () { return resolve(); });
        });
    };
    AppProvider.prototype.addReview = function (user, homestay, review) {
        return this.reviewCollections.doc(homestay['id']).collection('items').add({
            name: user['name'],
            picture: user['picture'],
            review: review
        });
    };
    AppProvider.prototype.getHomestayReviews = function (homestay) {
        var _this = this;
        return new Promise(function (resolve) {
            var rs = [];
            _this.reviewCollections.doc(homestay['id']).collection('items').get().subscribe(function (snap) {
                snap.forEach(function (doc) {
                    var docData = doc.data();
                    docData['id'] = doc.id;
                    rs.push(docData);
                });
                resolve(rs);
            }, function (err) { return resolve([]); });
        });
    };
    AppProvider.prototype.getChatList = function (id1, id2) {
        var _this = this;
        var chatId = '';
        if (id1 < id2) {
            chatId = id1 + id2;
        }
        else {
            chatId = id2 + id1;
        }
        return new Promise(function (resolve) {
            var rs = [];
            _this.chatCollections.doc(chatId).collection('items', function (ref) { return ref.orderBy('date'); }).get().subscribe(function (snap) {
                snap.forEach(function (doc) {
                    var docData = doc.data();
                    docData['id'] = doc.id;
                    rs.push(docData);
                });
                resolve(rs);
            }, function (err) { return resolve(rs); });
        });
    };
    AppProvider.prototype.addChageHistory = function (userId, partner) {
        return this.chatHistoryCollections.doc(userId).collection('items').doc(partner['base64']).set(partner);
    };
    AppProvider.prototype.getChatHistory = function (userID) {
        var _this = this;
        return new Promise(function (resolve) {
            var rs = [];
            _this.chatHistoryCollections.doc(userID).collection('items').get().subscribe(function (snap) {
                snap.forEach(function (doc) {
                    var docData = doc.data();
                    docData['id'] = doc.id;
                    rs.push(docData);
                });
                resolve(rs);
            }, function (err) { return resolve(); });
        });
    };
    AppProvider.prototype.submitChat = function (id1, id2, message) {
        var chatId = '';
        if (id1 < id2) {
            chatId = id1 + id2;
        }
        else {
            chatId = id2 + id1;
        }
        return this.chatCollections.doc(chatId).collection('chats').add({
            sender: id1,
            receiver: id2,
            message: message,
            date: new Date().getTime()
        });
    };
    AppProvider.prototype.getOnlineUsers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var rs = [];
            _this.localCollections.get().subscribe(function (snap) {
                snap.forEach(function (doc) {
                    var docData = doc.data();
                    docData['id'] = doc.id;
                    if (docData['online'] == true) {
                        rs.push(docData);
                    }
                });
                resolve(rs);
            }, function (err) { return resolve(); });
        });
    };
    AppProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], AppProvider);
    return AppProvider;
}());

//# sourceMappingURL=app.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic2_auto_complete__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_util_util__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_fire__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_fire_auth__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_fire_firestore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_edit_profile_edit_profile__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_app_app__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_homestay_detail_homestay_detail__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_fire_storage__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_pipes_module__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_local_detail_local_detail__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_homestay_view_homestay_view__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_chats_chats__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_components_module__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_popup_popup__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ionic3_star_rating__ = __webpack_require__(639);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















//import { Observable } from 'rxjs';











var firebaseConfig = {
    apiKey: "AIzaSyBvEJmRrEhzkoirQaTTJEYLnVLVZZ6urHM",
    authDomain: "facetriper.firebaseio.com",
    databaseURL: "https://facetriper.firebaseio.com",
    projectId: "facetriper",
    storageBucket: "facetriper.appspot.com",
    messagingSenderId: "443594649686"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_homestay_detail_homestay_detail__["a" /* HomestayDetailPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_local_detail_local_detail__["a" /* LocalDetailPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_homestay_view_homestay_view__["a" /* HomestayViewPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_popup_popup__["a" /* PopupPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_28_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: false,
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '_facetrip',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_17__angular_fire_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_fire_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic2_auto_complete__["a" /* AutoCompleteModule */],
                __WEBPACK_IMPORTED_MODULE_26__components_components_module__["a" /* ComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_homestay_detail_homestay_detail__["a" /* HomestayDetailPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_local_detail_local_detail__["a" /* LocalDetailPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_homestay_view_homestay_view__["a" /* HomestayViewPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_popup_popup__["a" /* PopupPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_util_util__["a" /* UtilProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_app_app__["a" /* AppProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_app__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_global_variable__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_firestore__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_util_util__ = __webpack_require__(35);
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
    function MyApp(platform, statusBar, splashScreen, util, appProvider, db) {
        var _this = this;
        this.util = util;
        this.appProvider = appProvider;
        this.db = db;
        this.countryList = [];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            _this.getCountryList().then(function () { });
            _this.itemsCollections = _this.db.collection('users');
            _this.util.getLocal('user').then(function (user) {
                if (user) {
                    _this.itemsCollections.doc(btoa(user['email'])).get().subscribe(function (snap) {
                        splashScreen.hide();
                        if (snap.exists) {
                            __WEBPACK_IMPORTED_MODULE_7__global_global_variable__["a" /* GlobalVariables */].user = snap.data();
                            var usr = snap.data();
                            usr['online'] = true;
                            _this.itemsCollections.doc(__WEBPACK_IMPORTED_MODULE_7__global_global_variable__["a" /* GlobalVariables */].user['base64']).update(usr).then(function () {
                            });
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
                        }
                        else {
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                        }
                    });
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                }
            });
        });
    }
    MyApp.prototype.getCountryList = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appProvider.getContryList().subscribe(function (data) {
                if (data) {
                    _this.countryList = data;
                    __WEBPACK_IMPORTED_MODULE_7__global_global_variable__["a" /* GlobalVariables */].countries = data;
                }
                resolve();
            }, function (err) { return resolve(); });
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/pipo/Desktop/Archive/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/pipo/Desktop/Archive/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_app_app__["a" /* AppProvider */], __WEBPACK_IMPORTED_MODULE_8__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter_filter__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_by_filter_by__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__filter_filter__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_2__filter_by_filter_by__["a" /* FilterByPipe */]
            ],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__filter_filter__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_2__filter_by_filter_by__["a" /* FilterByPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, filter, isAnd) {
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter);
            if (isAnd) {
                return items.filter(function (item) {
                    return filterKeys_1.reduce(function (memo, keyName) {
                        return (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "";
                    }, true);
                });
            }
            else {
                return items.filter(function (item) {
                    return filterKeys_1.some(function (keyName) {
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === "";
                    });
                });
            }
        }
        else {
            return items;
        }
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select_country_select_country__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_auto_complete__ = __webpack_require__(368);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__select_country_select_country__["a" /* SelectCountryComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_3_ionic2_auto_complete__["a" /* AutoCompleteModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_1__select_country_select_country__["a" /* SelectCountryComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__select_country_select_country__["a" /* SelectCountryComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ })

},[373]);
//# sourceMappingURL=main.js.map