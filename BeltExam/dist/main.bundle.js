webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var new_component_1 = __webpack_require__("./src/app/new/new.component.ts");
var details_component_1 = __webpack_require__("./src/app/details/details.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var page_not_found_component_1 = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
var routes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'new', component: new_component_1.NewComponent },
    { path: 'details/:id', component: details_component_1.DetailsComponent },
    { path: 'edit/:id', component: edit_component_1.EditComponent },
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}!</h1>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.title = 'Pet Shelter';
    }
    AppComponent.prototype.ngOnInit = function () {
        this._route.params.subscribe(function (params) { return console.log(params['id']); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var page_not_found_component_1 = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var new_component_1 = __webpack_require__("./src/app/new/new.component.ts");
var details_component_1 = __webpack_require__("./src/app/details/details.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                page_not_found_component_1.PageNotFoundComponent,
                dashboard_component_1.DashboardComponent,
                new_component_1.NewComponent,
                details_component_1.DetailsComponent,
                edit_component_1.EditComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>These pets are looking for a home!</h3>\n\n<a [routerLink]=\"['/new']\">Add a pet to the shelter</a>\n\n<table>\n    <thead>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Actions</th>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let pet of pets\">\n            <td>{{pet.name}}</td>\n            <td>{{pet.type}}</td>\n            <td><button [routerLink]=\"['/details', pet._id]\">Details</button></td>\n            <td><button [routerLink]=\"['/edit', pet._id]\">Edit</button></td>\n        </tr>\n    </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_httpService) {
        this._httpService = _httpService;
        this.pets = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getPetsThroughService();
    };
    DashboardComponent.prototype.getPetsThroughService = function () {
        var _this = this;
        console.log('getting pets');
        var observable = this._httpService.getPets();
        observable.subscribe(function (data) {
            console.log('pets', data);
            _this.pets = data['pets'];
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/details/details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/dashboard']\">Home</a>\n\n<h3>Details about {{pet.name}}</h3>\n<table>\n    <tr>\n        <td><strong>Pet type:</strong></td>\n        <td>{{pet.type}}</td>\n    </tr>\n    <tr>\n        <td><strong>Description:</strong></td>\n        <td>{{pet.description}}</td>\n    </tr>\n    <tr>\n        <td><strong>Skill:</strong></td>\n        <td>{{pet.skills}}</td>\n    </tr>\n    <tr>\n        <td><strong>Pet Likes:</strong></td>\n        <td>{{pet.likes}}</td>\n    </tr>\n</table>\n<button *ngIf=\"!liked\" (click)=\"likePetThroughService()\">Like this pet</button>\n<button (click)=\"deletePetThroughService()\">Adopt this pet</button>"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.liked = false;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log('pet id :', params['id']);
            _this.getPetThroughService(params['id']);
        });
    };
    DetailsComponent.prototype.getPetThroughService = function (id) {
        var _this = this;
        console.log('getting pet');
        var observable = this._httpService.getPet(id);
        observable.subscribe(function (data) {
            console.log(data);
            if (data['errorMsg']) {
                _this._router.navigate(["/dashboard"]);
            }
            _this.pet = data['pet'];
        });
    };
    DetailsComponent.prototype.likePetThroughService = function () {
        var _this = this;
        console.log('likeing pet');
        var observable = this._httpService.likePet(this.pet);
        observable.subscribe(function (data) {
            console.log(data);
            _this.liked = true;
            _this.getPetThroughService(data['pet']);
        });
    };
    DetailsComponent.prototype.deletePetThroughService = function () {
        var _this = this;
        console.log('deleteing pet');
        var observable = this._httpService.deletePet(this.pet);
        observable.subscribe(function (data) {
            console.log(data);
            _this._router.navigate(["/dashboard"]);
        });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-details',
            template: __webpack_require__("./src/app/details/details.component.html"),
            styles: [__webpack_require__("./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;


/***/ }),

/***/ "./src/app/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Edit this pet</h3>\n<form (submit)=\"updateThroughService()\">\n    <label for=\"editPet.name\">Pet Name:\n        <br>\n        <input type=\"text\" name=\"editPet.name\" id=\"editPet-name\" [(ngModel)]=\"editPet.name\" required minlength=\"3\" #name=\"ngModel\">\n        <p *ngIf=\"errorMsg\">{{errorMsg}}</p>\n    </label>\n    <br>\n    <p style=\"color:red\" *ngIf=\"name.errors && name.errors.minlength\">Type needs to be longer</p>\n    <label for=\"editPet.type\">Pet Type:\n        <br>\n        <input type=\"text\" name=\"editPet.type\" id=\"editPet-type\" [(ngModel)]=\"editPet.type\" required minlength=\"3\" #type=\"ngModel\">\n    </label>\n    <br>\n    <p style=\"color:red\" *ngIf=\"type.errors && type.errors.minlength\">Last Name needs to be longer</p>\n    <label for=\"editPet.description\">Pet Description:\n        <br>\n        <input type=\"description\" name=\"editPet.description\" id=\"editPet-description\" [(ngModel)]=\"editPet.description\" required minlength=\"3\"\n            #description=\"ngModel\">\n    </label>\n    <br>\n    <div style=\"color:red\" *ngIf=\"description.errors && description.errors.minlength\">Description needs to be longer</div>\n    <label for=\"editPet.skills\">Pet Skills:\n        <br>\n        <ul>\n            <label for=\"skills[0]\">Skill 1:\n                <input type=\"skills[0]\" name=\"editPet.skills[0]\" id=\"editPet-skills[0]\" [(ngModel)]=\"editPet.skills[0]\" #skills[0]=\"ngModel\">\n            </label>\n            <br>\n            <label for=\"skills[1]\">Skill 2:\n                <input type=\"skills[1]\" name=\"editPet.skills[1]\" id=\"editPet-skills[1]\" [(ngModel)]=\"editPet.skills[1]\" #skills[1]=\"ngModel\">\n            </label>\n            <br>\n            <label for=\"skills[2]\">Skill 3:\n                <input type=\"skills[2]\" name=\"editPet.skills[2]\" id=\"editPet-skills[2]\" [(ngModel)]=\"editPet.skills[2]\" #skills[2]=\"ngModel\">\n            </label>\n            <br>\n        </ul>\n    </label>\n    <br>\n    <input *ngIf=\"name.valid && type.valid && description.valid\" type=\"submit\" value=\"Edit Pet\" id=\"editPet-btn\">\n</form>\n<button [routerLink]=\"['/dashboard']\">Cancel</button>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log('pet id :', params['id']);
            _this.getPetThroughService(params['id']);
        });
    };
    EditComponent.prototype.updateThroughService = function () {
        var _this = this;
        console.log('updating pet');
        var observable = this._httpService.update(this.editPet);
        observable.subscribe(function (data) {
            console.log('updated', data);
            if (data['err']) {
                _this.errorMsg = 'we already have a pet with this name in our shelter. sorry you pet cant come in.';
            }
            else {
                console.log(data['pet']['_id']);
                _this._router.navigate(["/details/" + data['pet']]);
            }
        });
    };
    EditComponent.prototype.getPetThroughService = function (id) {
        var _this = this;
        console.log('getting pet');
        var observable = this._httpService.getPet(id);
        observable.subscribe(function (data) {
            console.log(data);
            if (data['errorMsg']) {
                _this._router.navigate(["/dashboard"]);
            }
            _this.editPet = data['pet'];
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.add = function (newPet) {
        console.log('adding pet in service');
        return this._http.post('/addPet', newPet);
    };
    HttpService.prototype.getPets = function () {
        console.log('getting pets in service');
        return this._http.get('/allPets');
    };
    HttpService.prototype.getPet = function (id) {
        console.log('getting pet in service', id);
        return this._http.post('/getPet', { _id: id });
    };
    HttpService.prototype.likePet = function (pet) {
        console.log('likeing pet in service', pet);
        return this._http.post('/likePet', pet);
    };
    HttpService.prototype.update = function (editPet) {
        console.log('updateing pet in service');
        return this._http.post('/updatePet', editPet);
    };
    HttpService.prototype.deletePet = function (pet) {
        console.log('deleteing pet in service');
        return this._http.post('/deletePet', pet);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/new/new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Know of a pet needing a home?</h3>\n<form (submit)=\"addThroughService()\">\n    <label for=\"newPet.name\">Pet Name: <br>\n        <input type=\"text\" name=\"newPet.name\" id=\"newPet-name\" [(ngModel)]=\"newPet.name\" required minlength=\"3\"\n            #name=\"ngModel\"><p *ngIf=\"errorMsg\">{{errorMsg}}</p>\n    </label>\n    <br>\n    <p style=\"color:red\" *ngIf=\"name.errors && name.errors.minlength\">Type needs to be longer</p>\n    <label for=\"newPet.type\">Pet Type: <br>\n        <input type=\"text\" name=\"newPet.type\" id=\"newPet-type\" [(ngModel)]=\"newPet.type\" required minlength=\"3\"\n            #type=\"ngModel\">\n    </label>\n    <br>\n    <p style=\"color:red\" *ngIf=\"type.errors && type.errors.minlength\">Last Name needs to be longer</p>\n    <label for=\"newPet.description\">Pet Description: <br>\n        <input type=\"description\" name=\"newPet.description\" id=\"newPet-description\" [(ngModel)]=\"newPet.description\" required minlength=\"3\" #description=\"ngModel\">\n    </label>\n    <br>\n    <div style=\"color:red\" *ngIf=\"description.errors && description.errors.minlength\">Description needs to be longer</div>\n    <label for=\"newPet.skills\">Pet Skills: <br>\n        <ul>\n            <label for=\"skills[0]\">Skill 1:\n                <input type=\"skills[0]\" name=\"newPet.skills[0]\" id=\"newPet-skills[0]\" [(ngModel)]=\"newPet.skills[0]\" #skills[0]=\"ngModel\">\n            </label><br>\n            <label for=\"skills[1]\">Skill 2:\n                <input type=\"skills[1]\" name=\"newPet.skills[1]\" id=\"newPet-skills[1]\" [(ngModel)]=\"newPet.skills[1]\" #skills[1]=\"ngModel\">\n            </label><br>\n            <label for=\"skills[2]\">Skill 3:\n                <input type=\"skills[2]\" name=\"newPet.skills[2]\" id=\"newPet-skills[2]\" [(ngModel)]=\"newPet.skills[2]\" #skills[2]=\"ngModel\">\n            </label><br>\n        </ul>\n    </label>\n    <br>\n    <input *ngIf=\"name.valid && type.valid && description.valid\" type=\"submit\" value=\"Add Pet\" id=\"newPet-btn\">\n</form>\n<button [routerLink]=\"['/dashboard']\">Cancel</button>"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.newPet = {
            name: '',
            type: '',
            description: '',
            skills: ['', '', ''],
        };
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent.prototype.addThroughService = function () {
        var _this = this;
        console.log('adding pet');
        var observable = this._httpService.add(this.newPet);
        observable.subscribe(function (data) {
            console.log('added', data);
            if (data['error']) {
                _this.errorMsg = 'we already have a pet with this name in our shelter. sorry you pet cant come in.';
            }
            else {
                _this._router.navigate(['/dashboard']);
            }
        });
    };
    NewComponent = __decorate([
        core_1.Component({
            selector: 'app-new',
            template: __webpack_require__("./src/app/new/new.component.html"),
            styles: [__webpack_require__("./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.Router])
    ], NewComponent);
    return NewComponent;
}());
exports.NewComponent = NewComponent;


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map