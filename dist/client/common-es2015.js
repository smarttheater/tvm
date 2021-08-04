(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "/O2D":
/*!***********************************************************!*\
  !*** ./src/client/app/canActivates/auth-guard.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cinerino_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cinerino.service */ "qXkn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class AuthGuardService {
    constructor(router, cinerino) {
        this.router = router;
        this.cinerino = cinerino;
    }
    /**
     * 認証
     * @method canActivate
     * @returns {Promise<boolean>}
     */
    canActivate() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.cinerino.getServices();
                return true;
            }
            catch (error) {
                console.log('canActivate', error);
                this.router.navigate(['/']);
                return false;
            }
        });
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_cinerino_service__WEBPACK_IMPORTED_MODULE_1__["CinerinoService"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "064k":
/*!**********************************************!*\
  !*** ./src/client/app/canActivates/index.ts ***!
  \**********************************************/
/*! exports provided: AuthGuardService, PurchaseTransactionGuardService, SettingGuardService, ViewTypeGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-guard.service */ "/O2D");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return _auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]; });

/* harmony import */ var _purchase_transaction_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase-transaction-guard.service */ "Yck5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PurchaseTransactionGuardService", function() { return _purchase_transaction_guard_service__WEBPACK_IMPORTED_MODULE_1__["PurchaseTransactionGuardService"]; });

/* harmony import */ var _setting_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting-guard.service */ "ma8r");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingGuardService", function() { return _setting_guard_service__WEBPACK_IMPORTED_MODULE_2__["SettingGuardService"]; });

/* harmony import */ var _view_type_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-type-guard.service */ "pzJT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewTypeGuardService", function() { return _view_type_guard_service__WEBPACK_IMPORTED_MODULE_3__["ViewTypeGuardService"]; });







/***/ }),

/***/ "Yck5":
/*!***************************************************************************!*\
  !*** ./src/client/app/canActivates/purchase-transaction-guard.service.ts ***!
  \***************************************************************************/
/*! exports provided: PurchaseTransactionGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseTransactionGuardService", function() { return PurchaseTransactionGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "BHlQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class PurchaseTransactionGuardService {
    constructor(router, actionService) {
        this.router = router;
        this.actionService = actionService;
    }
    /**
     * 認証
     * @method canActivate
     * @returns {Promise<boolean>}
     */
    canActivate() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transaction = (yield this.actionService.purchase.getData()).transaction;
                if (transaction === undefined) {
                    throw new Error('transaction not found');
                }
                return true;
            }
            catch (error) {
                console.log('canActivate', error);
                this.router.navigate(['/']);
                return false;
            }
        });
    }
}
PurchaseTransactionGuardService.ɵfac = function PurchaseTransactionGuardService_Factory(t) { return new (t || PurchaseTransactionGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__["ActionService"])); };
PurchaseTransactionGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PurchaseTransactionGuardService, factory: PurchaseTransactionGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ma8r":
/*!**************************************************************!*\
  !*** ./src/client/app/canActivates/setting-guard.service.ts ***!
  \**************************************************************/
/*! exports provided: SettingGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingGuardService", function() { return SettingGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/reducers */ "FZB/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






class SettingGuardService {
    constructor(router, store) {
        this.router = router;
        this.store = store;
    }
    /**
     * 認証
     * @method canActivate
     * @returns {Promise<boolean>}
     */
    canActivate() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.user = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_2__["getUser"]));
                const user = yield this.getUser();
                if (user.theater === undefined) {
                    throw new Error('theater not found');
                }
                if (user.customerContact === undefined) {
                    throw new Error('customerContact not found');
                }
                return true;
            }
            catch (error) {
                console.log('canActivate', error);
                this.router.navigate(['/setting']);
                return false;
            }
        });
    }
    getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                this.user.subscribe((user) => {
                    resolve(user);
                }).unsubscribe();
            });
        });
    }
}
SettingGuardService.ɵfac = function SettingGuardService_Factory(t) { return new (t || SettingGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
SettingGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SettingGuardService, factory: SettingGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pzJT":
/*!****************************************************************!*\
  !*** ./src/client/app/canActivates/view-type-guard.service.ts ***!
  \****************************************************************/
/*! exports provided: ViewTypeGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTypeGuardService", function() { return ViewTypeGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "jEx6");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "ADXf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class ViewTypeGuardService {
    constructor(router) {
        this.router = router;
    }
    /**
     * 認証
     * @method canActivate
     * @returns {Promise<boolean>}
     */
    canActivate(_next, state) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const viewType = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["getEnvironment"])().VIEW_TYPE;
                if (state.url.match('/purchase/cinema') !== null && viewType !== ___WEBPACK_IMPORTED_MODULE_1__["Models"].Util.ViewType.Cinema) {
                    throw new Error('viewType not match');
                }
                if (state.url.match('/purchase/event') !== null && viewType !== ___WEBPACK_IMPORTED_MODULE_1__["Models"].Util.ViewType.Event) {
                    throw new Error('viewType not match');
                }
                return true;
            }
            catch (error) {
                console.error('canActivate', error);
                this.router.navigate(['/error']);
                return false;
            }
        });
    }
}
ViewTypeGuardService.ɵfac = function ViewTypeGuardService_Factory(t) { return new (t || ViewTypeGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
ViewTypeGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ViewTypeGuardService, factory: ViewTypeGuardService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map