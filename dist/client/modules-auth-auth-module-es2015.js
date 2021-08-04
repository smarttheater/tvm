(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"],{

/***/ "63k7":
/*!****************************************************!*\
  !*** ./src/client/app/modules/auth/auth.module.ts ***!
  \****************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "eXdM");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ "c+jn");
/* harmony import */ var _components_pages_auth_index_auth_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/auth-index/auth-index.component */ "UUaQ");
/* harmony import */ var _components_pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/auth-signin/auth-signin.component */ "xKsp");
/* harmony import */ var _components_pages_auth_signout_auth_signout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/auth-signout/auth-signout.component */ "jRoE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_components_pages_auth_index_auth_index_component__WEBPACK_IMPORTED_MODULE_3__["AuthIndexComponent"],
        _components_pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_4__["AuthSigninComponent"],
        _components_pages_auth_signout_auth_signout_component__WEBPACK_IMPORTED_MODULE_5__["AuthSignoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();


/***/ }),

/***/ "UUaQ":
/*!*****************************************************************************************!*\
  !*** ./src/client/app/modules/auth/components/pages/auth-index/auth-index.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AuthIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthIndexComponent", function() { return AuthIndexComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../environments/environment */ "ADXf");
/* harmony import */ var _services_cinerino_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/cinerino.service */ "qXkn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_parts_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/parts/loading/loading.component */ "VRkF");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class AuthIndexComponent {
    constructor(cinerino, router) {
        this.cinerino = cinerino;
        this.router = router;
        this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["getEnvironment"])();
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.cinerino.getServices();
                this.router.navigate([this.environment.BASE_URL]);
            }
            catch (error) {
                yield this.cinerino.signIn();
            }
        });
    }
}
AuthIndexComponent.ɵfac = function AuthIndexComponent_Factory(t) { return new (t || AuthIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_cinerino_service__WEBPACK_IMPORTED_MODULE_2__["CinerinoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
AuthIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AuthIndexComponent, selectors: [["app-auth-index"]], decls: 1, vars: 1, consts: [["process", "process.authAction.CheckLogin", 3, "isLoading"]], template: function AuthIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-loading", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoading", true);
    } }, directives: [_shared_components_parts_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWluZGV4LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "c+jn":
/*!************************************************************!*\
  !*** ./src/client/app/modules/auth/auth-routing.module.ts ***!
  \************************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _canActivates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../canActivates */ "064k");
/* harmony import */ var _components_pages_auth_index_auth_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/auth-index/auth-index.component */ "UUaQ");
/* harmony import */ var _components_pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/auth-signin/auth-signin.component */ "xKsp");
/* harmony import */ var _components_pages_auth_signout_auth_signout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/auth-signout/auth-signout.component */ "jRoE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        children: [
            { path: '', component: _components_pages_auth_index_auth_index_component__WEBPACK_IMPORTED_MODULE_2__["AuthIndexComponent"] },
            { path: 'signin', canActivate: [_canActivates__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]], component: _components_pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_3__["AuthSigninComponent"] },
            { path: 'signout', component: _components_pages_auth_signout_auth_signout_component__WEBPACK_IMPORTED_MODULE_4__["AuthSignoutComponent"] }
        ]
    }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "jRoE":
/*!*********************************************************************************************!*\
  !*** ./src/client/app/modules/auth/components/pages/auth-signout/auth-signout.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AuthSignoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignoutComponent", function() { return AuthSignoutComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services */ "BHlQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_parts_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/parts/loading/loading.component */ "VRkF");






class AuthSignoutComponent {
    constructor(router, actionService) {
        this.router = router;
        this.actionService = actionService;
    }
    ngOnInit() {
        this.actionService.order.delete();
        this.actionService.purchase.delete();
        this.router.navigate(['/']);
    }
    selectProject() {
    }
}
AuthSignoutComponent.ɵfac = function AuthSignoutComponent_Factory(t) { return new (t || AuthSignoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["ActionService"])); };
AuthSignoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AuthSignoutComponent, selectors: [["app-auth-signout"]], decls: 1, vars: 1, consts: [["process", "process.authAction.Logout", 3, "isLoading"]], template: function AuthSignoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-loading", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isLoading", true);
    } }, directives: [_shared_components_parts_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXNpZ25vdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "xKsp":
/*!*******************************************************************************************!*\
  !*** ./src/client/app/modules/auth/components/pages/auth-signin/auth-signin.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AuthSigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSigninComponent", function() { return AuthSigninComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services */ "BHlQ");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../store/reducers */ "FZB/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/parts/header/header.component */ "Ide5");
/* harmony import */ var _shared_components_parts_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/parts/page-title/page-title.component */ "lvnI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/parts/footer/footer.component */ "C1lg");
/* harmony import */ var _shared_components_parts_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/parts/loading/loading.component */ "VRkF");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











function AuthSigninComponent_div_3_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u8D77\u52D5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\u8A2D\u5B9A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", project_r2.logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", project_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](project_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "/?projectId=" + project_r2.id, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "/?projectId=" + project_r2.id + "#/setting", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function AuthSigninComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AuthSigninComponent_div_3_li_3_Template, 12, 5, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, ctx_r0.master)) == null ? null : tmp_0_0.projects);
} }
class AuthSigninComponent {
    constructor(store, masterService, utilService, cinerinoService) {
        this.store = store;
        this.masterService = masterService;
        this.utilService = utilService;
        this.cinerinoService = cinerinoService;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.isLoading = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_2__["getLoading"]));
            this.master = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_2__["getMaster"]));
            this.projects = [];
            yield this.masterService.getProjects();
            this.utilService.loadStart({ process: 'load' });
            // const masterData = await this.masterService.getData();
            // const projects = masterData.projects;
            // if (projects.length === 1) {
            //     // プロジェクトが一つの場合自動遷移
            //     location.href = `/?projectId=${projects[0].id}`;
            //     return;
            // }
            this.utilService.loadEnd();
        });
    }
    signOut() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.cinerinoService.getServices();
                yield this.cinerinoService.signOut();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
AuthSigninComponent.ɵfac = function AuthSigninComponent_Factory(t) { return new (t || AuthSigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["CinerinoService"])); };
AuthSigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AuthSigninComponent, selectors: [["app-auth-signin"]], decls: 16, vars: 7, consts: [[3, "topButton"], ["title", "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u9078\u629E"], [1, "contents", "scroll-horizontal"], ["class", "p-3", 4, "ngIf"], [1, "container", "h-100"], [1, "row", "align-items-center", "justify-content-center", "h-100"], [1, "col-3"], ["type", "button", 1, "btn", "btn-custom-secondary", "btn-block", "font-weight-bold", "py-2", 3, "click"], ["type", "button", "disabled", "", 1, "btn", "btn-custom-primary", "btn-block", "font-weight-bold", "py-2"], ["process", "process.masterAction.GetProjects", 3, "isLoading"], [1, "p-3"], [1, "container", "px-0"], [1, "row"], ["class", "col-3 mb-3", 4, "ngFor", "ngForOf"], [1, "col-3", "mb-3"], [1, "card", "h-100"], [1, "card-body"], [1, "d-flex", "align-items-center", "mb-3"], [1, "mr-2"], [1, "logo", 3, "src", "alt"], [1, "text-small", "font-weight-bold", "text-overflow-ellipsis"], [1, "btn", "btn-custom-primary", "px-3", "mr-3", 3, "href"], [1, "btn", "btn-custom-primary", "px-3", 3, "href"]], template: function AuthSigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AuthSigninComponent_div_3_Template, 5, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuthSigninComponent_Template_button_click_9_listener() { return ctx.signOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u30ED\u30B0\u30A2\u30A6\u30C8");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\u6B21\u3078");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "app-loading", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "async");
    } if (rf & 2) {
        let tmp_1_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("topButton", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, ctx.master)) == null ? null : tmp_1_0.projects.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 5, ctx.isLoading));
    } }, directives: [_shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _shared_components_parts_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_5__["PageTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _shared_components_parts_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".logo[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n\n.btn-custom-primary.disabled[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n  background-color: #666 !important;\n  border-color: #666 !important;\n  color: #eee !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXV0aC1zaWduaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQUNKIiwiZmlsZSI6ImF1dGgtc2lnbmluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICAgIHdpZHRoOiAycmVtO1xufVxuXG4uYnRuLWN1c3RvbS1wcmltYXJ5LmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogIzY2NiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module-es2015.js.map