(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-purchase-purchase-module"],{

/***/ "./app/modules/purchase/components/pages/cinema/purchase-cinema-schedule-event/purchase-cinema-schedule-event.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./app/modules/purchase/components/pages/cinema/purchase-cinema-schedule-event/purchase-cinema-schedule-event.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: PurchaseCinemaScheduleEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseCinemaScheduleEventComponent", function() { return PurchaseCinemaScheduleEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../.. */ "./app/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../services */ "./app/services/index.ts");
/* harmony import */ var _shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/parts/header/header.component */ "./app/modules/shared/components/parts/header/header.component.ts");
/* harmony import */ var _parts_step_step_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../parts/step/step.component */ "./app/modules/purchase/components/parts/step/step.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/parts/footer/footer.component */ "./app/modules/shared/components/parts/footer/footer.component.ts");
/* harmony import */ var _parts_transaction_remaining_time_transaction_remaining_time_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../parts/transaction-remaining-time/transaction-remaining-time.component */ "./app/modules/purchase/components/parts/transaction-remaining-time/transaction-remaining-time.component.ts");
/* harmony import */ var _parts_performances_performances_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../parts/performances/performances.component */ "./app/modules/purchase/components/parts/performances/performances.component.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

















function PurchaseCinemaScheduleEventComponent_app_purchase_performances_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-purchase-performances", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function PurchaseCinemaScheduleEventComponent_app_purchase_performances_4_Template_app_purchase_performances_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectSchedule($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screeningEventsGroup", group_r1)("animation", ctx_r0.animations[index_r2]);
} }
class PurchaseCinemaScheduleEventComponent {
    constructor(router, activatedRoute, masterService, actionService, utilService, translate) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.masterService = masterService;
        this.actionService = actionService;
        this.utilService = utilService;
        this.translate = translate;
        this.moment = moment__WEBPACK_IMPORTED_MODULE_3__;
        this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["getEnvironment"])();
    }
    /**
     * 初期化
     */
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.animations = [];
                const { theater } = yield this.actionService.user.getData();
                const { scheduleDate } = yield this.actionService.purchase.getData();
                if (scheduleDate === undefined
                    || theater === undefined) {
                    throw new Error('scheduleDate or theater undefined');
                }
                const workPerformedIdentifier = this.activatedRoute.snapshot.params.identifier;
                const screeningEvents = yield this.masterService.getSchedule({
                    superEvent: {
                        locationBranchCodes: [theater.branchCode],
                        workPerformedIdentifiers: [workPerformedIdentifier]
                    },
                    startFrom: moment__WEBPACK_IMPORTED_MODULE_3__(scheduleDate).toDate(),
                    startThrough: moment__WEBPACK_IMPORTED_MODULE_3__(scheduleDate).add(1, 'day').toDate(),
                    sort: true
                });
                this.screeningEventsGroup = ___WEBPACK_IMPORTED_MODULE_4__["Functions"].Purchase.screeningEvents2ScreeningEventsGroup({ screeningEvents });
                yield this.addAnimationClass();
            }
            catch (error) {
                console.error(error);
                this.router.navigate(['/error']);
            }
        });
    }
    /**
     * スケジュール選択
     */
    selectSchedule(screeningEvent) {
        return __awaiter(this, void 0, void 0, function* () {
            if (screeningEvent.remainingAttendeeCapacity === undefined
                || screeningEvent.remainingAttendeeCapacity === 0) {
                return;
            }
            if (screeningEvent.offers === undefined
                || screeningEvent.offers.itemOffered.serviceOutput === undefined
                || screeningEvent.offers.itemOffered.serviceOutput.reservedTicket === undefined
                || screeningEvent.offers.itemOffered.serviceOutput.reservedTicket.ticketedSeat === undefined) {
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: this.translate.instant('purchase.cinema.schedule.alert.ticketedSeat')
                });
                return;
            }
            try {
                this.actionService.purchase.unsettledDelete();
                yield this.actionService.purchase.getScreeningEvent(screeningEvent);
                const { authorizeSeatReservations } = yield this.actionService.purchase.getData();
                if (authorizeSeatReservations.length > 0) {
                    yield this.actionService.purchase.cancelTemporaryReservations(authorizeSeatReservations);
                }
                this.router.navigate(['/purchase/cinema/seat']);
            }
            catch (error) {
                console.error(error);
                this.router.navigate(['/error']);
                return;
            }
        });
    }
    /**
     * アニメーションクラス追加
     */
    addAnimationClass() {
        return __awaiter(this, void 0, void 0, function* () {
            this.screeningEventsGroup.forEach(() => this.animations.push(false));
            const startTime = 300;
            yield ___WEBPACK_IMPORTED_MODULE_4__["Functions"].Util.sleep(startTime);
            for (let i = 0; i < this.animations.length; i++) {
                const time = 300;
                const target = this.animations.length - i - 1;
                this.animations[target] = true;
                yield ___WEBPACK_IMPORTED_MODULE_4__["Functions"].Util.sleep(time);
            }
        });
    }
}
PurchaseCinemaScheduleEventComponent.ɵfac = function PurchaseCinemaScheduleEventComponent_Factory(t) { return new (t || PurchaseCinemaScheduleEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
PurchaseCinemaScheduleEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseCinemaScheduleEventComponent, selectors: [["app-purchase-cinema-schedule-event"]], decls: 18, vars: 9, consts: [[3, "isClear"], [3, "currentStep"], [1, "contents", "scroll-horizontal"], [1, "p-3"], ["class", "", 3, "screeningEventsGroup", "animation", "select", 4, "ngFor", "ngForOf"], [1, "position-absolute", "d-flex", "align-items-center", "h-100"], [1, "container", "h-100"], [1, "row", "align-items-center", "justify-content-center", "h-100"], [1, "col-3"], ["routerLink", "/purchase/cinema/schedule/movie", 1, "btn", "btn-outline-light", "btn-block", "font-weight-bold", "py-2"], ["disabled", "", 1, "btn", "btn-primary", "btn-block", "font-weight-bold", "py-2"], [1, "", 3, "screeningEventsGroup", "animation", "select"]], template: function PurchaseCinemaScheduleEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-purchase-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PurchaseCinemaScheduleEventComponent_app_purchase_performances_4_Template, 1, 2, "app-purchase-performances", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-transaction-remaining-time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentStep", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.screeningEventsGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 5, "purchase.cinema.scheduleMovie.prev"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 7, "purchase.cinema.scheduleMovie.next"));
    } }, directives: [_shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _parts_step_step_component__WEBPACK_IMPORTED_MODULE_8__["PurchaseStepComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _parts_transaction_remaining_time_transaction_remaining_time_component__WEBPACK_IMPORTED_MODULE_11__["TransactionRemainingTimeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _parts_performances_performances_component__WEBPACK_IMPORTED_MODULE_12__["PurchasePerformancesComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseCinemaScheduleEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-cinema-schedule-event',
                templateUrl: './purchase-cinema-schedule-event.component.html',
                styleUrls: ['./purchase-cinema-schedule-event.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services__WEBPACK_IMPORTED_MODULE_6__["MasterService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_6__["ActionService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_6__["UtilService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./app/modules/purchase/components/pages/cinema/purchase-cinema-schedule-movie/purchase-cinema-schedule-movie.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./app/modules/purchase/components/pages/cinema/purchase-cinema-schedule-movie/purchase-cinema-schedule-movie.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: PurchaseCinemaScheduleMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseCinemaScheduleMovieComponent", function() { return PurchaseCinemaScheduleMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../.. */ "./app/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../services */ "./app/services/index.ts");
/* harmony import */ var _shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/parts/header/header.component */ "./app/modules/shared/components/parts/header/header.component.ts");
/* harmony import */ var _parts_step_step_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../parts/step/step.component */ "./app/modules/purchase/components/parts/step/step.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/parts/footer/footer.component */ "./app/modules/shared/components/parts/footer/footer.component.ts");
/* harmony import */ var _parts_transaction_remaining_time_transaction_remaining_time_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../parts/transaction-remaining-time/transaction-remaining-time.component */ "./app/modules/purchase/components/parts/transaction-remaining-time/transaction-remaining-time.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};















function PurchaseCinemaScheduleMovieComponent_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
} if (rf & 2) {
    const movie_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r3.getAdditionalProperty(movie_r1.additionalProperty, "posterImage") + ")");
} }
const _c0 = function (a0) { return { "not-event not-sales": a0 }; };
function PurchaseCinemaScheduleMovieComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PurchaseCinemaScheduleMovieComponent_div_5_div_6_Template, 1, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("animation", ctx_r0.animations[index_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, !ctx_r0.isSales(movie_r1.identifier)))("routerLink", "/purchase/cinema/schedule/event/" + movie_r1.identifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getAdditionalProperty(movie_r1.additionalProperty, "posterImage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.name);
} }
class PurchaseCinemaScheduleMovieComponent {
    constructor(router, masterService, actionService) {
        this.router = router;
        this.masterService = masterService;
        this.actionService = actionService;
        this.moment = moment__WEBPACK_IMPORTED_MODULE_2__;
        this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["getEnvironment"])();
        this.getAdditionalProperty = ___WEBPACK_IMPORTED_MODULE_3__["Functions"].Purchase.getAdditionalProperty;
    }
    /**
     * 初期化
     */
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.creativeWorks = [];
            this.screeningEvents = [];
            this.animations = [];
            try {
                const { theater } = yield this.actionService.user.getData();
                const { scheduleDate } = yield this.actionService.purchase.getData();
                if (scheduleDate === undefined
                    || theater === undefined) {
                    throw new Error('scheduleDate or theater undefined');
                }
                this.screeningEvents = yield this.masterService.getSchedule({
                    superEvent: {
                        locationBranchCodes: [theater.branchCode],
                    },
                    startFrom: moment__WEBPACK_IMPORTED_MODULE_2__(scheduleDate).toDate(),
                    startThrough: moment__WEBPACK_IMPORTED_MODULE_2__(scheduleDate).add(1, 'day').toDate(),
                });
                const creativeWorks = yield this.masterService.searchMovies({
                    offers: {
                        availableFrom: moment__WEBPACK_IMPORTED_MODULE_2__(scheduleDate).toDate(),
                    },
                });
                this.creativeWorks = creativeWorks.filter(c => this.screeningEvents.find(s => { var _a; return ((_a = s.workPerformed) === null || _a === void 0 ? void 0 : _a.identifier) === c.identifier; }) !== undefined);
                yield this.addAnimationClass();
            }
            catch (error) {
                console.error(error);
                this.router.navigate(['/error']);
            }
        });
    }
    /**
     * アニメーションクラス追加
     */
    addAnimationClass() {
        return __awaiter(this, void 0, void 0, function* () {
            this.creativeWorks.forEach(() => this.animations.push(false));
            const row = 6;
            const startTime = 300;
            yield ___WEBPACK_IMPORTED_MODULE_3__["Functions"].Util.sleep(startTime);
            for (let i = 0; i < this.animations.length; i++) {
                const time = 300;
                const target = this.animations.length - i - 1;
                this.animations[target] = true;
                if (target % row === 0) {
                    yield ___WEBPACK_IMPORTED_MODULE_3__["Functions"].Util.sleep(time);
                }
            }
        });
    }
    /**
     * 販売判定
     */
    isSales(identifier) {
        const findResult = this.screeningEvents.find(s => {
            var _a;
            return (((_a = s.workPerformed) === null || _a === void 0 ? void 0 : _a.identifier) === identifier
                && new ___WEBPACK_IMPORTED_MODULE_3__["Models"].Purchase.Performance(s).isSales());
        });
        return (findResult !== undefined);
    }
}
PurchaseCinemaScheduleMovieComponent.ɵfac = function PurchaseCinemaScheduleMovieComponent_Factory(t) { return new (t || PurchaseCinemaScheduleMovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["ActionService"])); };
PurchaseCinemaScheduleMovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseCinemaScheduleMovieComponent, selectors: [["app-purchase-cinema-schedule-movie"]], decls: 19, vars: 9, consts: [[3, "isClear"], [3, "currentStep"], [1, "contents", "scroll-horizontal"], [1, "container", "p-3"], [1, "row"], ["class", "item mb-3", 3, "ngClass", "animation", "routerLink", 4, "ngFor", "ngForOf"], [1, "position-absolute", "d-flex", "align-items-center", "h-100"], [1, "container", "h-100"], [1, "row", "align-items-center", "justify-content-center", "h-100"], [1, "col-3"], ["routerLink", "/purchase/cinema", 1, "btn", "btn-outline-light", "btn-block", "font-weight-bold", "py-2"], ["disabled", "", 1, "btn", "btn-primary", "btn-block", "font-weight-bold", "py-2"], [1, "item", "mb-3", 3, "ngClass", "routerLink"], [1, "position-relative"], [1, "image"], [1, "poster-title", "d-flex", "align-items-center"], [1, "p-3", "text-white", "text-small"], ["class", "poster", 3, "backgroundImage", 4, "ngIf"], [1, "p-2", "bg-dark", "text-white", "text-overflow-ellipsis", "text-small"], [1, "poster"]], template: function PurchaseCinemaScheduleMovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-purchase-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PurchaseCinemaScheduleMovieComponent_div_5_Template, 9, 9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-transaction-remaining-time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentStep", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.creativeWorks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 5, "purchase.cinema.scheduleMovie.prev"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 7, "purchase.cinema.scheduleMovie.next"));
    } }, directives: [_shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _parts_step_step_component__WEBPACK_IMPORTED_MODULE_7__["PurchaseStepComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _parts_transaction_remaining_time_transaction_remaining_time_component__WEBPACK_IMPORTED_MODULE_10__["TransactionRemainingTimeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: [".item[_ngcontent-%COMP%] {\n  flex: 0 0 16.6%;\n  max-width: 16.6%;\n  padding-right: 15px;\n  padding-left: 15px;\n  position: relative;\n}\n.item.not-sales[_ngcontent-%COMP%]   .position-relative[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n.item.not-sales[_ngcontent-%COMP%]   .position-relative[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #000;\n  opacity: 0.6;\n}\n.item.animation[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  padding-top: calc(100% * 1.41);\n  opacity: 1;\n}\n.item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  transition: opacity 1s;\n  opacity: 0;\n  padding-top: 0;\n  position: relative;\n  background-color: #000;\n  overflow: hidden;\n}\n.item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .poster-no[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: #cbcbcb;\n  background-image: url(/default/images/noimage.png);\n}\n.item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .poster-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.loading[_ngcontent-%COMP%] {\n  opacity: 1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:after {\n  border-radius: 50%;\n  width: 90px;\n  height: 90px;\n}\n.loader[_ngcontent-%COMP%] {\n  position: relative;\n  text-indent: -9999em;\n  border: 3px solid rgba(255, 255, 255, 0.2);\n  border-left-color: #FFF;\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n          animation: load8 1.1s infinite linear;\n}\n@-webkit-keyframes load8 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes load8 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseCinemaScheduleMovieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-cinema-schedule-movie',
                templateUrl: './purchase-cinema-schedule-movie.component.html',
                styleUrls: ['./purchase-cinema-schedule-movie.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_5__["MasterService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_5__["ActionService"] }]; }, null); })();


/***/ }),

/***/ "./app/modules/purchase/components/pages/cinema/purchase-cinema-schedule/purchase-cinema-schedule.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./app/modules/purchase/components/pages/cinema/purchase-cinema-schedule/purchase-cinema-schedule.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: PurchaseCinemaScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseCinemaScheduleComponent", function() { return PurchaseCinemaScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../.. */ "./app/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../services */ "./app/services/index.ts");
/* harmony import */ var _shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/parts/header/header.component */ "./app/modules/shared/components/parts/header/header.component.ts");
/* harmony import */ var _parts_step_step_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../parts/step/step.component */ "./app/modules/purchase/components/parts/step/step.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/parts/footer/footer.component */ "./app/modules/shared/components/parts/footer/footer.component.ts");
/* harmony import */ var _parts_transaction_remaining_time_transaction_remaining_time_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../parts/transaction-remaining-time/transaction-remaining-time.component */ "./app/modules/purchase/components/parts/transaction-remaining-time/transaction-remaining-time.component.ts");
/* harmony import */ var _shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/pipes/change-language.pipe */ "./app/modules/shared/pipes/change-language.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

















function PurchaseCinemaScheduleComponent_div_4_div_3_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const performance_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, performance_r3.screeningEvent.superEvent.headline), "");
} }
function PurchaseCinemaScheduleComponent_div_4_div_3_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const performance_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, performance_r3.screeningEvent.superEvent.description), "");
} }
function PurchaseCinemaScheduleComponent_div_4_div_3_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "common.performance.status.success"), "");
} }
function PurchaseCinemaScheduleComponent_div_4_div_3_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "common.performance.status.warning"), "");
} }
function PurchaseCinemaScheduleComponent_div_4_div_3_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "common.performance.status.danger"), "");
} }
function PurchaseCinemaScheduleComponent_div_4_div_3_div_13_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "common.performance.status.success"), "");
} }
function PurchaseCinemaScheduleComponent_div_4_div_3_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PurchaseCinemaScheduleComponent_div_4_div_3_div_13_div_1_Template, 5, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PurchaseCinemaScheduleComponent_div_4_div_3_div_13_div_2_Template, 5, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PurchaseCinemaScheduleComponent_div_4_div_3_div_13_div_3_Template, 5, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PurchaseCinemaScheduleComponent_div_4_div_3_div_13_div_4_Template, 5, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const performance_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", performance_r3.isSeatStatus("success"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", performance_r3.isSeatStatus("warning"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", performance_r3.isSeatStatus("danger"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", performance_r3.isSeatStatus());
} }
function PurchaseCinemaScheduleComponent_div_4_div_3_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "common.performance.status.endSale"), "");
} }
function PurchaseCinemaScheduleComponent_div_4_div_3_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "common.performance.status.outsideSalesPeriod"), "");
} }
function PurchaseCinemaScheduleComponent_div_4_div_3_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "common.performance.status.success"), "");
} }
function PurchaseCinemaScheduleComponent_div_4_div_3_p_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const performance_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, performance_r3.screeningEvent.location.address), "");
} }
const _c0 = function (a0) { return { "not-event": a0 }; };
function PurchaseCinemaScheduleComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseCinemaScheduleComponent_div_4_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const performance_r3 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.selectSchedule(performance_r3.screeningEvent); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PurchaseCinemaScheduleComponent_div_4_div_3_p_7_Template, 3, 3, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PurchaseCinemaScheduleComponent_div_4_div_3_p_9_Template, 3, 3, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PurchaseCinemaScheduleComponent_div_4_div_3_div_13_Template, 5, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PurchaseCinemaScheduleComponent_div_4_div_3_div_14_Template, 3, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PurchaseCinemaScheduleComponent_div_4_div_3_div_15_Template, 3, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PurchaseCinemaScheduleComponent_div_4_div_3_div_16_Template, 6, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PurchaseCinemaScheduleComponent_div_4_div_3_p_26_Template, 3, 3, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const performance_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, !performance_r3.isSales() || performance_r3.isSeatStatus("danger") || performance_r3.isInfinitetock()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 12, performance_r3.screeningEvent.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", performance_r3.screeningEvent.superEvent.headline && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 14, performance_r3.screeningEvent.superEvent.headline));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", performance_r3.screeningEvent.superEvent.description && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 16, performance_r3.screeningEvent.superEvent.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", performance_r3.isSales() && !performance_r3.isInfinitetock());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", performance_r3.isSales("end"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", performance_r3.isSales("start"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", performance_r3.isSales() && performance_r3.isInfinitetock());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.moment(performance_r3.screeningEvent.startDate).format("HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.moment(performance_r3.screeningEvent.endDate).format("HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 18, performance_r3.screeningEvent.location.address));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 20, performance_r3.screeningEvent.location.name), "");
} }
function PurchaseCinemaScheduleComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PurchaseCinemaScheduleComponent_div_4_div_3_Template, 31, 24, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.moment(group_r1.info.startDate).format("HH"), ":00");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r1.data);
} }
class PurchaseCinemaScheduleComponent {
    constructor(router, utilService, actionService, masterService, translate) {
        this.router = router;
        this.utilService = utilService;
        this.actionService = actionService;
        this.masterService = masterService;
        this.translate = translate;
        this.moment = moment__WEBPACK_IMPORTED_MODULE_3__;
        this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["getEnvironment"])();
    }
    /**
     * 初期化
     */
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { theater } = yield this.actionService.user.getData();
                const { scheduleDate } = yield this.actionService.purchase.getData();
                if (scheduleDate === undefined
                    || theater === undefined) {
                    throw new Error('scheduleDate or theater undefined');
                }
                const screeningEvents = yield this.masterService.getSchedule({
                    superEvent: {
                        locationBranchCodes: [theater.branchCode],
                    },
                    startFrom: moment__WEBPACK_IMPORTED_MODULE_3__(scheduleDate).toDate(),
                    startThrough: moment__WEBPACK_IMPORTED_MODULE_3__(scheduleDate).add(1, 'day').toDate()
                });
                const filterResult = screeningEvents.filter((s) => {
                    const performance = new ___WEBPACK_IMPORTED_MODULE_4__["Models"].Purchase.Performance(s);
                    return !(performance.isSales('end'));
                });
                this.screeningEventsGroup = ___WEBPACK_IMPORTED_MODULE_4__["Functions"].Purchase.screeningEvents2ScreeningEventsGroup({
                    screeningEvents: filterResult, sortType: 'startDate'
                });
            }
            catch (error) {
                console.error(error);
                this.router.navigate(['/error']);
            }
        });
    }
    /**
     * スケジュール選択
     */
    selectSchedule(screeningEvent) {
        return __awaiter(this, void 0, void 0, function* () {
            if (screeningEvent.remainingAttendeeCapacity === undefined
                || screeningEvent.remainingAttendeeCapacity === 0) {
                return;
            }
            if (screeningEvent.offers === undefined
                || screeningEvent.offers.itemOffered.serviceOutput === undefined
                || screeningEvent.offers.itemOffered.serviceOutput.reservedTicket === undefined
                || screeningEvent.offers.itemOffered.serviceOutput.reservedTicket.ticketedSeat === undefined) {
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: this.translate.instant('purchase.cinema.schedule.alert.ticketedSeat')
                });
                return;
            }
            try {
                this.actionService.purchase.unsettledDelete();
                yield this.actionService.purchase.getScreeningEvent(screeningEvent);
                const { authorizeSeatReservations } = yield this.actionService.purchase.getData();
                if (authorizeSeatReservations.length > 0) {
                    yield this.actionService.purchase.cancelTemporaryReservations(authorizeSeatReservations);
                }
                this.router.navigate(['/purchase/cinema/seat']);
            }
            catch (error) {
                console.error(error);
                this.router.navigate(['/error']);
                return;
            }
        });
    }
}
PurchaseCinemaScheduleComponent.ɵfac = function PurchaseCinemaScheduleComponent_Factory(t) { return new (t || PurchaseCinemaScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_6__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
PurchaseCinemaScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseCinemaScheduleComponent, selectors: [["app-purchase-cinema-schedule"]], decls: 18, vars: 9, consts: [[3, "isClear"], [3, "currentStep"], [1, "contents", "scroll-horizontal"], [1, "p-3"], [4, "ngFor", "ngForOf"], [1, "position-absolute", "d-flex", "align-items-center", "h-100"], [1, "container", "h-100"], [1, "row", "align-items-center", "justify-content-center", "h-100"], [1, "col-3"], ["routerLink", "/purchase/cinema", 1, "btn", "btn-outline-light", "btn-block", "font-weight-bold", "py-2"], ["disabled", "", 1, "btn", "btn-primary", "btn-block", "font-weight-bold", "py-2"], [1, "bg-dark", "text-white", "p-3", "mb-3"], ["class", "bg-white p-3 mb-3", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "bg-white", "p-3", "mb-3", 3, "ngClass", "click"], [1, "container", "px-0"], [1, "row", "align-items-center"], [1, "col-6"], [1, "font-weight-bold"], [4, "ngIf"], ["class", "text-small", 4, "ngIf"], [1, "mb-1"], ["class", "status", 4, "ngIf"], [1, "text-large", "font-weight-bold"], [1, "mb-1", "text-small", "screen-name"], ["class", "text-overflow-ellipsis mr-2 mr-md-0 d-inline-block d-md-block", 4, "ngIf"], [1, "text-overflow-ellipsis", "d-inline-block", "d-md-block"], [1, "text-small"], [1, "status"], ["class", "d-flex align-items-center", 4, "ngIf"], [1, "d-flex", "align-items-center"], [1, "text-success", "mr-2"], ["src", "/assets/images/icon/status_success.svg", "alt", ""], [1, "text-warning", "mr-2"], ["src", "/assets/images/icon/status_warning.svg", "alt", ""], [1, "mr-2"], ["src", "/assets/images/icon/status_danger.svg", "alt", ""], ["src", "/assets/images/icon/status_undefined.svg", "alt", ""], [1, "text-overflow-ellipsis", "mr-2", "mr-md-0", "d-inline-block", "d-md-block"]], template: function PurchaseCinemaScheduleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-purchase-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PurchaseCinemaScheduleComponent_div_4_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-transaction-remaining-time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentStep", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.screeningEventsGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 5, "purchase.cinema.scheduleMovie.prev"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 7, "purchase.cinema.scheduleMovie.next"));
    } }, directives: [_shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _parts_step_step_component__WEBPACK_IMPORTED_MODULE_8__["PurchaseStepComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _parts_transaction_remaining_time_transaction_remaining_time_component__WEBPACK_IMPORTED_MODULE_11__["TransactionRemainingTimeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], _shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_12__["ChangeLanguagePipe"]], styles: [".status[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n.status[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseCinemaScheduleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-cinema-schedule',
                templateUrl: './purchase-cinema-schedule.component.html',
                styleUrls: ['./purchase-cinema-schedule.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_6__["UtilService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_6__["ActionService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_6__["MasterService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./app/modules/purchase/components/pages/cinema/purchase-cinema-seat/purchase-cinema-seat.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./app/modules/purchase/components/pages/cinema/purchase-cinema-seat/purchase-cinema-seat.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PurchaseCinemaSeatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseCinemaSeatComponent", function() { return PurchaseCinemaSeatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _purchase_seat_purchase_seat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../purchase-seat/purchase-seat.component */ "./app/modules/purchase/components/pages/purchase-seat/purchase-seat.component.ts");
/* harmony import */ var _shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/parts/header/header.component */ "./app/modules/shared/components/parts/header/header.component.ts");
/* harmony import */ var _parts_step_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../parts/step/step.component */ "./app/modules/purchase/components/parts/step/step.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _parts_seat_info_seat_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../parts/seat-info/seat-info.component */ "./app/modules/purchase/components/parts/seat-info/seat-info.component.ts");
/* harmony import */ var _parts_purchase_info_purchase_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../parts/purchase-info/purchase-info.component */ "./app/modules/purchase/components/parts/purchase-info/purchase-info.component.ts");
/* harmony import */ var _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/parts/footer/footer.component */ "./app/modules/shared/components/parts/footer/footer.component.ts");
/* harmony import */ var _parts_transaction_remaining_time_transaction_remaining_time_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../parts/transaction-remaining-time/transaction-remaining-time.component */ "./app/modules/purchase/components/parts/transaction-remaining-time/transaction-remaining-time.component.ts");
/* harmony import */ var _shared_components_parts_screen_screen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/parts/screen/screen.component */ "./app/modules/shared/components/parts/screen/screen.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-intl-tel-input */ "../../node_modules/ngx-intl-tel-input/__ivy_ngcc__/fesm2015/ngx-intl-tel-input.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};














function PurchaseCinemaSeatComponent_app_screen_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-screen", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function PurchaseCinemaSeatComponent_app_screen_8_Template_app_screen_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.selectSeat($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, ctx_r0.user)) == null ? null : tmp_0_0.theater.branchCode;
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 8, ctx_r0.purchase)) == null ? null : tmp_1_0.screen.branchCode;
    var tmp_3_0 = null;
    const currVal_3 = (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, ctx_r0.purchase)) == null ? null : tmp_3_0.screen.openSeatingAllowed;
    var tmp_4_0 = null;
    const currVal_4 = (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 12, ctx_r0.purchase)) == null ? null : tmp_4_0.reservations;
    var tmp_5_0 = null;
    const currVal_5 = (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 14, ctx_r0.purchase)) == null ? null : tmp_5_0.authorizeSeatReservation;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theaterCode", currVal_0)("screenCode", currVal_1)("screeningEventSeats", ctx_r0.screeningEventSeats)("openSeatingAllowed", currVal_3)("reservations", currVal_4)("authorizeSeatReservation", currVal_5);
} }
function PurchaseCinemaSeatComponent_div_12_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r7);
} }
const _c0 = function (a0, a1, a2) { return { screeningEvent: a0, screeningEventSeats: a1, authorizeSeatReservations: a2 }; };
function PurchaseCinemaSeatComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PurchaseCinemaSeatComponent_div_12_Template_select_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.selectOpenSeating($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PurchaseCinemaSeatComponent_div_12_option_9_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx_r1.purchase)) == null ? null : tmp_1_0.reservations.length;
    var tmp_2_0 = null;
    const currVal_2 = ctx_r1.remainingAttendeeCapacityValue(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](11, _c0, (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, ctx_r1.purchase)) == null ? null : tmp_2_0.screeningEvent, ctx_r1.screeningEventSeats, (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, ctx_r1.purchase)) == null ? null : tmp_2_0.authorizeSeatReservations));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "purchase.cinema.seat.openSeating"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", currVal_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", currVal_2);
} }
function PurchaseCinemaSeatComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseCinemaSeatComponent_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r2.isLoading));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "purchase.cinema.seat.next"));
} }
function PurchaseCinemaSeatComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseCinemaSeatComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r3.isLoading));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "purchase.cinema.seat.consent"));
} }
class PurchaseCinemaSeatComponent extends _purchase_seat_purchase_seat_component__WEBPACK_IMPORTED_MODULE_1__["PurchaseSeatComponent"] {
    prev() {
        return __awaiter(this, void 0, void 0, function* () {
            const { screeningEvent, searchType } = yield this.actionService.purchase.getData();
            if (screeningEvent === undefined
                || screeningEvent.workPerformed === undefined
                || searchType === undefined) {
                console.error('screeningEvent.workPerformed or searchType undefined');
                this.router.navigate(['/error']);
                return;
            }
            if (searchType === 'event') {
                this.router.navigate([`/purchase/cinema/schedule`]);
                return;
            }
            const identifier = screeningEvent.workPerformed.identifier;
            this.router.navigate([`/purchase/cinema/schedule/event/${identifier}`]);
        });
    }
}
PurchaseCinemaSeatComponent.ɵfac = function PurchaseCinemaSeatComponent_Factory(t) { return ɵPurchaseCinemaSeatComponent_BaseFactory(t || PurchaseCinemaSeatComponent); };
PurchaseCinemaSeatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseCinemaSeatComponent, selectors: [["app-purchase-cinema-seat"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 29, vars: 19, consts: [[3, "isClear"], [3, "currentStep"], [1, "contents"], [1, "container", "h-100", "p-3"], [1, "row", "h-100"], [1, "col-3", "h-100"], [1, "bg-dark", "h-100"], [1, "col-6"], [3, "theaterCode", "screenCode", "screeningEventSeats", "openSeatingAllowed", "reservations", "authorizeSeatReservation", "select", 4, "ngIf"], [1, "mb-4"], ["class", "mb-4", 4, "ngIf"], [1, "col-3", "mh-100", "scroll-horizontal"], [3, "purchase", "isAmount"], [1, "position-absolute", "d-flex", "align-items-center", "h-100"], [1, "container", "h-100"], [1, "row", "align-items-center", "justify-content-center", "h-100"], [1, "col-3"], [1, "btn", "btn-outline-light", "btn-block", "font-weight-bold", "py-2", 3, "click"], ["type", "submit", "class", "btn btn-primary btn-block font-weight-bold py-2", 3, "disabled", "click", 4, "ngIf"], [3, "theaterCode", "screenCode", "screeningEventSeats", "openSeatingAllowed", "reservations", "authorizeSeatReservation", "select"], [1, "d-flex", "align-items-center"], [1, "mr-2"], [1, "form-control", "d-inline-block", "w-auto", 3, "ngModel", "change"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "font-weight-bold", "py-2", 3, "disabled", "click"]], template: function PurchaseCinemaSeatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-purchase-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PurchaseCinemaSeatComponent_app_screen_8_Template, 6, 16, "app-screen", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-seat-info", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PurchaseCinemaSeatComponent_div_12_Template, 12, 15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-purchase-info", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-transaction-remaining-time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseCinemaSeatComponent_Template_button_click_23_listener() { return ctx.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PurchaseCinemaSeatComponent_button_27_Template, 4, 6, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PurchaseCinemaSeatComponent_button_28_Template, 4, 6, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_2_0 = null;
        const currVal_2 = ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, ctx.user)) == null ? null : tmp_2_0.theater) && ctx.screeningEventSeats.length > 0 && ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, ctx.purchase)) == null ? null : tmp_2_0.screen);
        var tmp_3_0 = null;
        const currVal_3 = (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 13, ctx.purchase)) == null ? null : tmp_3_0.screen == null ? null : tmp_3_0.screen.openSeatingAllowed;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentStep", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("purchase", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 15, ctx.purchase))("isAmount", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 17, "purchase.cinema.seat.prev"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.environment.PURCHASE_TERMS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.environment.PURCHASE_TERMS);
    } }, directives: [_shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _parts_step_step_component__WEBPACK_IMPORTED_MODULE_3__["PurchaseStepComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _parts_seat_info_seat_info_component__WEBPACK_IMPORTED_MODULE_5__["SeatInfoComponent"], _parts_purchase_info_purchase_info_component__WEBPACK_IMPORTED_MODULE_6__["PurchaseInfoComponent"], _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _parts_transaction_remaining_time_transaction_remaining_time_component__WEBPACK_IMPORTED_MODULE_8__["TransactionRemainingTimeComponent"], _shared_components_parts_screen_screen_component__WEBPACK_IMPORTED_MODULE_9__["ScreenComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_11__["NativeElementInjectorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], styles: [""] });
const ɵPurchaseCinemaSeatComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PurchaseCinemaSeatComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseCinemaSeatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-cinema-seat',
                templateUrl: './purchase-cinema-seat.component.html',
                styleUrls: ['./purchase-cinema-seat.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/modules/purchase/components/pages/cinema/purchase-cinema-ticket/purchase-cinema-ticket.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./app/modules/purchase/components/pages/cinema/purchase-cinema-ticket/purchase-cinema-ticket.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PurchaseCinemaTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseCinemaTicketComponent", function() { return PurchaseCinemaTicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _purchase_ticket_purchase_ticket_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../purchase-ticket/purchase-ticket.component */ "./app/modules/purchase/components/pages/purchase-ticket/purchase-ticket.component.ts");
/* harmony import */ var _shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/parts/header/header.component */ "./app/modules/shared/components/parts/header/header.component.ts");
/* harmony import */ var _parts_step_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../parts/step/step.component */ "./app/modules/purchase/components/parts/step/step.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _parts_purchase_info_purchase_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../parts/purchase-info/purchase-info.component */ "./app/modules/purchase/components/parts/purchase-info/purchase-info.component.ts");
/* harmony import */ var _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/parts/footer/footer.component */ "./app/modules/shared/components/parts/footer/footer.component.ts");
/* harmony import */ var _parts_transaction_remaining_time_transaction_remaining_time_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../parts/transaction-remaining-time/transaction-remaining-time.component */ "./app/modules/purchase/components/parts/transaction-remaining-time/transaction-remaining-time.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _parts_movie_tickets_movie_tickets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../parts/movie-tickets/movie-tickets.component */ "./app/modules/purchase/components/parts/movie-tickets/movie-tickets.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/pipes/change-language.pipe */ "./app/modules/shared/pipes/change-language.pipe.ts");













function PurchaseCinemaTicketComponent_app_movie_tickets_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-movie-tickets", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function PurchaseCinemaTicketComponent_app_movie_tickets_8_Template_app_movie_tickets_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openMovieTicket($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.purchase)) == null ? null : tmp_0_0.screeningEventTicketOffers;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screeningEventTicketOffers", currVal_0);
} }
function PurchaseCinemaTicketComponent_li_12_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseCinemaTicketComponent_li_12_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const reservation_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.openTicketList(reservation_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "purchase.cinema.ticket.unselected"));
} }
const _c0 = function (a0) { return { value: a0 }; };
function PurchaseCinemaTicketComponent_li_12_button_9_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const priceComponent_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, "common.referenceQuantityValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, priceComponent_r13 == null ? null : priceComponent_r13.referenceQuantity == null ? null : priceComponent_r13.referenceQuantity.value)));
} }
function PurchaseCinemaTicketComponent_li_12_button_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PurchaseCinemaTicketComponent_li_12_button_9_div_1_span_8_Template, 3, 6, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const priceComponent_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, priceComponent_r13.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, priceComponent_r13.price, priceComponent_r13.priceCurrency));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", priceComponent_r13 == null ? null : priceComponent_r13.referenceQuantity == null ? null : priceComponent_r13.referenceQuantity.value);
} }
function PurchaseCinemaTicketComponent_li_12_button_9_div_2_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const addOn_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, "common.referenceQuantityValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, addOn_r16.priceSpecification == null ? null : addOn_r16.priceSpecification.referenceQuantity == null ? null : addOn_r16.priceSpecification.referenceQuantity.value)));
} }
function PurchaseCinemaTicketComponent_li_12_button_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PurchaseCinemaTicketComponent_li_12_button_9_div_2_span_8_Template, 3, 6, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const addOn_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, addOn_r16.priceSpecification.name), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, addOn_r16.priceSpecification.price, addOn_r16.priceSpecification.priceCurrency));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", addOn_r16.priceSpecification == null ? null : addOn_r16.priceSpecification.referenceQuantity == null ? null : addOn_r16.priceSpecification.referenceQuantity.value);
} }
function PurchaseCinemaTicketComponent_li_12_button_9_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reservation_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "modal.purchase.seatTicket.movieTicket.code"), " ", reservation_r4.ticket.movieTicket.identifier, " ");
} }
function PurchaseCinemaTicketComponent_li_12_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseCinemaTicketComponent_li_12_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const reservation_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.openTicketList(reservation_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PurchaseCinemaTicketComponent_li_12_button_9_div_1_Template, 9, 8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PurchaseCinemaTicketComponent_li_12_button_9_div_2_Template, 9, 8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PurchaseCinemaTicketComponent_li_12_button_9_p_4_Template, 3, 4, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reservation_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", reservation_r4.ticket == null ? null : reservation_r4.ticket.ticketOffer.priceSpecification.priceComponent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", reservation_r4.ticket == null ? null : reservation_r4.ticket.addOn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reservation_r4.ticket.movieTicket);
} }
function PurchaseCinemaTicketComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PurchaseCinemaTicketComponent_li_12_button_8_Template, 3, 3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PurchaseCinemaTicketComponent_li_12_button_9_Template, 5, 3, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reservation_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](reservation_r4.seat.seatNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reservation_r4.ticket === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reservation_r4.ticket !== undefined);
} }
class PurchaseCinemaTicketComponent extends _purchase_ticket_purchase_ticket_component__WEBPACK_IMPORTED_MODULE_1__["PurchaseTicketComponent"] {
}
PurchaseCinemaTicketComponent.ɵfac = function PurchaseCinemaTicketComponent_Factory(t) { return ɵPurchaseCinemaTicketComponent_BaseFactory(t || PurchaseCinemaTicketComponent); };
PurchaseCinemaTicketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseCinemaTicketComponent, selectors: [["app-purchase-cinema-ticket"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 31, vars: 21, consts: [[3, "isClear"], [3, "currentStep"], [1, "contents"], [1, "container", "h-100", "p-3"], [1, "row", "h-100"], [1, "col-3", "h-100"], [1, "bg-dark", "h-100"], [1, "col-6", "mh-100", "scroll-horizontal"], [3, "screeningEventTicketOffers", "select", 4, "ngIf"], [1, "py-2", "bg-white"], [4, "ngFor", "ngForOf"], [1, "col-3", "mh-100", "scroll-horizontal"], [3, "purchase", "isAmount"], [1, "position-absolute", "d-flex", "align-items-center", "h-100"], [1, "container", "h-100"], [1, "row", "align-items-center", "justify-content-center", "h-100"], [1, "col-3"], ["routerLink", "/purchase/cinema/seat", 1, "btn", "btn-outline-light", "btn-block", "font-weight-bold", "py-2"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "font-weight-bold", "py-2", 3, "disabled", "click"], [3, "screeningEventTicketOffers", "select"], [1, "container", "px-3", "py-2"], [1, "row", "align-items-center"], [1, "col-2"], [1, "font-weight-bold"], [1, "col-10"], ["type", "button", "class", "btn btn-primary btn-block py-2", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-block border border-primary text-primary bg-white py-2", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "btn-block", "py-2", 3, "click"], ["type", "button", 1, "btn", "btn-block", "border", "border-primary", "text-primary", "bg-white", "py-2", 3, "click"], ["class", "d-flex justify-content-between align-items-center", 4, "ngFor", "ngForOf"], ["class", "text-small text-left", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "w-50", "text-left"], [1, "w-50", "text-right"], [4, "ngIf"], [1, "text-small", "text-left"]], template: function PurchaseCinemaTicketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-purchase-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PurchaseCinemaTicketComponent_app_movie_tickets_8_Template, 2, 3, "app-movie-tickets", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PurchaseCinemaTicketComponent_li_12_Template, 10, 3, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-purchase-info", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-transaction-remaining-time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseCinemaTicketComponent_Template_button_click_27_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_2_0 = null;
        const currVal_2 = (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, ctx.purchase)) == null ? null : tmp_2_0.screeningEventTicketOffers;
        var tmp_3_0 = null;
        const currVal_3 = (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, ctx.purchase)) == null ? null : tmp_3_0.reservations;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentStep", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", currVal_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("purchase", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, ctx.purchase))("isAmount", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 15, "purchase.cinema.ticket.prev"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 17, ctx.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 19, "purchase.cinema.ticket.next"));
    } }, directives: [_shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _parts_step_step_component__WEBPACK_IMPORTED_MODULE_3__["PurchaseStepComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _parts_purchase_info_purchase_info_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseInfoComponent"], _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _parts_transaction_remaining_time_transaction_remaining_time_component__WEBPACK_IMPORTED_MODULE_7__["TransactionRemainingTimeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _parts_movie_tickets_movie_tickets_component__WEBPACK_IMPORTED_MODULE_9__["MovieTicketsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_11__["ChangeLanguagePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [""] });
const ɵPurchaseCinemaTicketComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PurchaseCinemaTicketComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseCinemaTicketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-cinema-ticket',
                templateUrl: './purchase-cinema-ticket.component.html',
                styleUrls: ['./purchase-cinema-ticket.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/modules/purchase/components/pages/cinema/purchase-cinema-top/purchase-cinema-top.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./app/modules/purchase/components/pages/cinema/purchase-cinema-top/purchase-cinema-top.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PurchaseCinemaTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseCinemaTopComponent", function() { return PurchaseCinemaTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-status */ "../../node_modules/http-status/lib/index.js");
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services */ "./app/services/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









class PurchaseCinemaTopComponent {
    constructor(masterService, actionService, router) {
        this.masterService = masterService;
        this.actionService = actionService;
        this.router = router;
    }
    /**
     * 初期化
     */
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { payment } = yield this.actionService.user.getData();
                if (payment !== undefined
                    && payment.cash !== undefined) {
                    yield this.actionService.purchase.depositRepay({ ipAddress: payment.cash.ipAddress });
                }
                yield this.actionService.purchase.cancelTransaction();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    /**
     * 作品からさがす
     */
    searchMovie() {
        return __awaiter(this, void 0, void 0, function* () {
            const scheduleDate = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
            this.actionService.purchase.selectScheduleDate(scheduleDate);
            this.actionService.purchase.selectSearchType({ searchType: 'movie' });
            try {
                yield this.setSeller();
            }
            catch (error) {
                console.error(error);
                this.router.navigate(['/error']);
            }
            try {
                yield this.startTransaction();
                this.router.navigate(['/purchase/cinema/schedule/movie']);
            }
            catch (error) {
                const errorObject = JSON.parse(error);
                if (errorObject.status === http_status__WEBPACK_IMPORTED_MODULE_2__["TOO_MANY_REQUESTS"]) {
                    this.router.navigate(['/congestion']);
                    return;
                }
                if (errorObject.status === http_status__WEBPACK_IMPORTED_MODULE_2__["BAD_REQUEST"]) {
                    this.router.navigate(['/maintenance']);
                    return;
                }
                this.router.navigate(['/error']);
            }
        });
    }
    /**
     * 時間からさがす
     */
    searchEvent() {
        return __awaiter(this, void 0, void 0, function* () {
            const scheduleDate = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
            this.actionService.purchase.selectScheduleDate(scheduleDate);
            this.actionService.purchase.selectSearchType({ searchType: 'event' });
            try {
                yield this.setSeller();
            }
            catch (error) {
                console.error(error);
                this.router.navigate(['/error']);
            }
            try {
                yield this.startTransaction();
                this.router.navigate(['/purchase/cinema/schedule']);
            }
            catch (error) {
                const errorObject = JSON.parse(error);
                if (errorObject.status === http_status__WEBPACK_IMPORTED_MODULE_2__["TOO_MANY_REQUESTS"]) {
                    this.router.navigate(['/congestion']);
                    return;
                }
                if (errorObject.status === http_status__WEBPACK_IMPORTED_MODULE_2__["BAD_REQUEST"]) {
                    this.router.navigate(['/maintenance']);
                    return;
                }
                this.router.navigate(['/error']);
            }
        });
    }
    /**
     * 販売者を設定
     */
    setSeller() {
        return __awaiter(this, void 0, void 0, function* () {
            const { theater } = yield this.actionService.user.getData();
            const { scheduleDate } = yield this.actionService.purchase.getData();
            if (theater === undefined
                || scheduleDate === undefined) {
                throw new Error('theater or scheduleDate undefined');
            }
            const screeningEvents = yield this.masterService.getSchedule({
                superEvent: {
                    locationBranchCodes: [theater.branchCode],
                },
                startFrom: moment__WEBPACK_IMPORTED_MODULE_3__(scheduleDate).toDate(),
                startThrough: moment__WEBPACK_IMPORTED_MODULE_3__(scheduleDate).add(1, 'day').toDate(),
            });
            const screeningEvent = screeningEvents
                .find(s => s.offers !== undefined && s.offers.seller !== undefined && s.offers.seller.id !== undefined);
            if (screeningEvent === undefined
                || screeningEvent.offers === undefined
                || screeningEvent.offers.seller === undefined
                || screeningEvent.offers.seller.id === undefined) {
                throw new Error('screeningEvent.offers.seller === undefined');
            }
            yield this.actionService.purchase.getSeller(screeningEvent.offers.seller.id);
        });
    }
    /**
     * 取引開始
     */
    startTransaction() {
        return __awaiter(this, void 0, void 0, function* () {
            const purchase = yield this.actionService.purchase.getData();
            const user = yield this.actionService.user.getData();
            yield this.actionService.purchase.startTransaction({
                seller: purchase.seller,
                pos: user.pos
            });
        });
    }
}
PurchaseCinemaTopComponent.ɵfac = function PurchaseCinemaTopComponent_Factory(t) { return new (t || PurchaseCinemaTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PurchaseCinemaTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseCinemaTopComponent, selectors: [["app-purchase-cinema-top"]], decls: 15, vars: 9, consts: [[1, "h-100", "d-flex", "align-items-center", "px-4"], [1, "container", "px-0"], [1, "row", "justify-content-center"], [1, "col-4"], ["type", "button", 1, "btn", "btn-primary", "btn-block", "py-5", 3, "click"], ["type", "button", "routerLink", "/inquiry/input", 1, "btn", "btn-primary", "btn-block", "py-5"]], template: function PurchaseCinemaTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseCinemaTopComponent_Template_button_click_4_listener() { return ctx.searchMovie(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseCinemaTopComponent_Template_button_click_8_listener() { return ctx.searchEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, "purchase.cinema.top.movie"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, "purchase.cinema.top.time"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, "purchase.cinema.top.inquiry"), " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseCinemaTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-cinema-top',
                templateUrl: './purchase-cinema-top.component.html',
                styleUrls: ['./purchase-cinema-top.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_4__["MasterService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_4__["ActionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./app/modules/purchase/components/pages/event/purchase-event-schedule/purchase-event-schedule.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./app/modules/purchase/components/pages/event/purchase-event-schedule/purchase-event-schedule.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: PurchaseEventScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseEventScheduleComponent", function() { return PurchaseEventScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http-status */ "../../node_modules/http-status/lib/index.js");
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "../../node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../.. */ "./app/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../services */ "./app/services/index.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../store/reducers */ "./app/store/reducers/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-intl-tel-input */ "../../node_modules/ngx-intl-tel-input/__ivy_ngcc__/fesm2015/ngx-intl-tel-input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _parts_event_performances_confirm_performances_confirm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../parts/event/performances-confirm/performances-confirm.component */ "./app/modules/purchase/components/parts/event/performances-confirm/performances-confirm.component.ts");
/* harmony import */ var _parts_purchase_terms_purchase_terms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../parts/purchase-terms/purchase-terms.component */ "./app/modules/purchase/components/parts/purchase-terms/purchase-terms.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../shared/pipes/format-date.pipe */ "./app/modules/shared/pipes/format-date.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






















const _c0 = ["datepicker"];
const _c1 = function (a0) { return { value: a0 }; };
function PurchaseEventScheduleComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "formatDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, "purchase.event.schedule.selectedDate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, ctx_r1.purchase)) == null ? null : tmp_0_0.scheduleDate, "YYYY/MM/DD (ddd)"))), " ");
} }
function PurchaseEventScheduleComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "purchase.event.schedule.notfound"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PurchaseEventScheduleComponent_app_purchase_event_performances_confirm_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-purchase-event-performances-confirm", 20);
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screeningEventsGroup", group_r7)("readonly", true);
} }
function PurchaseEventScheduleComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-purchase-terms", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx_r4.user)) == null ? null : tmp_1_0.language;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "purchase.event.schedule.terms"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("language", currVal_1);
} }
function PurchaseEventScheduleComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseEventScheduleComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.screeningEventsGroup.length === 0 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r5.isLoading));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "purchase.event.schedule.next"));
} }
function PurchaseEventScheduleComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseEventScheduleComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.screeningEventsGroup.length === 0 || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r6.isLoading));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "purchase.event.schedule.consent"));
} }
const _c2 = function (a3) { return { dateInputFormat: "YYYY/MM/DD", adaptivePosition: true, showWeekNumbers: false, minDate: a3 }; };
class PurchaseEventScheduleComponent {
    constructor(store, router, actionService, masterService, localeService) {
        this.store = store;
        this.router = router;
        this.actionService = actionService;
        this.masterService = masterService;
        this.localeService = localeService;
        this.moment = moment__WEBPACK_IMPORTED_MODULE_4__;
        this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["getEnvironment"])();
    }
    /**
     * 初期化
     */
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.purchase = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getPurchase"]));
            this.user = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getUser"]));
            this.master = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getMaster"]));
            this.error = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getError"]));
            this.isLoading = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getLoading"]));
            this.screeningEventsGroup = [];
            if (this.scheduleDate === undefined) {
                this.scheduleDate = moment__WEBPACK_IMPORTED_MODULE_4__()
                    .add(this.environment.PURCHASE_SCHEDULE_DEFAULT_SELECTED_DATE, 'day')
                    .toDate();
            }
            try {
                if ((yield this.actionService.purchase.getData()).transaction === undefined) {
                    return;
                }
                yield this.actionService.purchase.cancelTransaction();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    /**
     * 破棄
     */
    ngOnDestroy() {
        clearTimeout(this.updateTimer);
    }
    /**
     * 更新
     */
    update() {
        if (this.updateTimer !== undefined) {
            clearTimeout(this.updateTimer);
        }
        const time = 600000; // 10 * 60 * 1000
        this.updateTimer = setTimeout(() => {
            this.selectDate();
        }, time);
    }
    /**
     * 日付選択
     */
    selectDate(date) {
        return __awaiter(this, void 0, void 0, function* () {
            if (date !== undefined && date !== null) {
                this.scheduleDate = date;
            }
            try {
                const user = yield this.actionService.user.getData();
                const theater = user.theater;
                if (theater === undefined) {
                    this.router.navigate(['/error']);
                    return;
                }
                if (this.scheduleDate === undefined || this.scheduleDate === null) {
                    this.scheduleDate = moment__WEBPACK_IMPORTED_MODULE_4__()
                        .add(this.environment.PURCHASE_SCHEDULE_DEFAULT_SELECTED_DATE, 'day')
                        .toDate();
                }
                const scheduleDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.scheduleDate).format('YYYY-MM-DD');
                this.actionService.purchase.selectScheduleDate(scheduleDate);
                this.screeningEvents = yield this.masterService.getSchedule({
                    superEvent: { locationBranchCodes: [theater.branchCode] },
                    startFrom: moment__WEBPACK_IMPORTED_MODULE_4__(scheduleDate).toDate(),
                    startThrough: moment__WEBPACK_IMPORTED_MODULE_4__(scheduleDate).add(1, 'day').toDate(),
                    sort: true
                });
                this.screeningEventsGroup = ___WEBPACK_IMPORTED_MODULE_6__["Functions"].Purchase.screeningEvents2ScreeningEventsGroup({ screeningEvents: this.screeningEvents });
                this.update();
            }
            catch (error) {
                console.error(error);
                this.router.navigate(['/error']);
            }
        });
    }
    /**
     * 次へ
     */
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.actionService.user.getData();
                if (user.theater === undefined) {
                    throw new Error('user.theater === undefined');
                }
                const screeningEvent = this.screeningEvents
                    .find(s => s.offers !== undefined && s.offers.seller !== undefined && s.offers.seller.id !== undefined);
                if (screeningEvent === undefined
                    || screeningEvent.offers === undefined
                    || screeningEvent.offers.seller === undefined
                    || screeningEvent.offers.seller.id === undefined) {
                    throw new Error('screeningEvent.offers.seller === undefined');
                }
                yield this.actionService.purchase.getSeller(screeningEvent.offers.seller.id);
            }
            catch (error) {
                console.error(error);
                this.router.navigate(['/error']);
            }
            try {
                const purchase = yield this.actionService.purchase.getData();
                const user = yield this.actionService.user.getData();
                yield this.actionService.purchase.startTransaction({
                    seller: purchase.seller,
                    pos: user.pos
                });
                this.router.navigate(['/purchase/event/ticket']);
            }
            catch (error) {
                const errorObject = JSON.parse(error);
                if (errorObject.status === http_status__WEBPACK_IMPORTED_MODULE_3__["TOO_MANY_REQUESTS"]) {
                    this.router.navigate(['/congestion']);
                    return;
                }
                if (errorObject.status === http_status__WEBPACK_IMPORTED_MODULE_3__["BAD_REQUEST"]) {
                    this.router.navigate(['/maintenance']);
                    return;
                }
                this.router.navigate(['/error']);
            }
        });
    }
    /**
     * Datepicker言語設定
     */
    setDatePicker() {
        this.user.subscribe((user) => {
            this.localeService.use(user.language);
        }).unsubscribe();
    }
    /**
     * Datepicker開閉
     */
    toggleDatepicker() {
        this.setDatePicker();
        this.datepicker.toggle();
    }
    /**
     * iOS bugfix（2回タップしないと選択できない）
     */
    onShowPicker(container) {
        ___WEBPACK_IMPORTED_MODULE_6__["Functions"].Util.iOSDatepickerTapBugFix(container, [
            this.datepicker
        ]);
    }
}
PurchaseEventScheduleComponent.ɵfac = function PurchaseEventScheduleComponent_Factory(t) { return new (t || PurchaseEventScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsLocaleService"])); };
PurchaseEventScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseEventScheduleComponent, selectors: [["app-purchase-event-schedule"]], viewQuery: function PurchaseEventScheduleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.datepicker = _t.first);
    } }, decls: 23, vars: 18, consts: [[1, "contents-width", "mx-auto", "px-3", "pt-5"], [1, "text-large", "mb-4", "text-center", "font-weight-bold"], [1, "mb-4", "text-md-center", 3, "innerHTML"], [1, "contents-width", "mx-auto", "p-3"], [1, "mb-3"], [1, "input-group"], ["type", "text", "placeholder", "Datepicker", "bsDatepicker", "", "readonly", "", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange", "bsValueChange", "click", "onShown"], ["datepicker", "bsDatepicker"], [1, "input-group-append", "pointer", 3, "click"], [1, "input-group-text"], [1, "fas", "fa-caret-down"], [1, "mb-4"], ["class", "text-primary text-large mb-3", 4, "ngIf"], ["class", "mb-3", 3, "innerHTML", 4, "ngIf"], ["class", "mb-3", 3, "screeningEventsGroup", "readonly", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "buttons", "mx-auto", "text-center"], ["type", "submit", "class", "btn btn-primary btn-block py-3 mb-3", 3, "disabled", "click", 4, "ngIf"], [1, "text-primary", "text-large", "mb-3"], [1, "mb-3", 3, "innerHTML"], [1, "mb-3", 3, "screeningEventsGroup", "readonly"], [3, "language"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "py-3", "mb-3", 3, "disabled", "click"]], template: function PurchaseEventScheduleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PurchaseEventScheduleComponent_Template_input_ngModelChange_9_listener($event) { return ctx.scheduleDate = $event; })("bsValueChange", function PurchaseEventScheduleComponent_Template_input_bsValueChange_9_listener($event) { return ctx.selectDate($event); })("click", function PurchaseEventScheduleComponent_Template_input_click_9_listener() { return ctx.setDatePicker(); })("onShown", function PurchaseEventScheduleComponent_Template_input_onShown_9_listener($event) { return ctx.onShowPicker($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseEventScheduleComponent_Template_div_click_11_listener() { return ctx.toggleDatepicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PurchaseEventScheduleComponent_p_15_Template, 5, 11, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PurchaseEventScheduleComponent_p_17_Template, 2, 3, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PurchaseEventScheduleComponent_app_purchase_event_performances_confirm_18_Template, 1, 2, "app-purchase-event-performances-confirm", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PurchaseEventScheduleComponent_div_19_Template, 7, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PurchaseEventScheduleComponent_button_21_Template, 4, 6, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PurchaseEventScheduleComponent_button_22_Template, 4, 6, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_4_0 = null;
        const currVal_4 = (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 14, ctx.purchase)) == null ? null : tmp_4_0.scheduleDate;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, "purchase.event.schedule.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 12, "purchase.event.schedule.read"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.scheduleDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, ctx.moment().toDate()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screeningEventsGroup.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.screeningEventsGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.environment.PURCHASE_TERMS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.environment.PURCHASE_TERMS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.environment.PURCHASE_TERMS);
    } }, directives: [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_11__["NativeElementInjectorDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _parts_event_performances_confirm_performances_confirm_component__WEBPACK_IMPORTED_MODULE_13__["PurchaseEventPerformancesConfirmComponent"], _parts_purchase_terms_purchase_terms_component__WEBPACK_IMPORTED_MODULE_14__["PurchaseTermsComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"], _shared_pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_16__["FormatDatePipe"]], styles: [".theaters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1rem;\n}\n@media (max-width: 767.98px) {\n  .theaters[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.schedule-slider[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000;\n  opacity: 0.3;\n}\n.schedule-slider[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%], .schedule-slider[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%] {\n  width: 27px;\n  height: 27px;\n  background-image: url(/assets/images/icon/slider_arrow.svg);\n  background-size: 27px;\n  margin-top: -13px;\n}\n.schedule-slider[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%] {\n  right: -38px;\n}\n.schedule-slider[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%] {\n  left: -38px;\n  transform: rotate(180deg);\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseEventScheduleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-event-schedule',
                templateUrl: './purchase-event-schedule.component.html',
                styleUrls: ['./purchase-event-schedule.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_8__["ActionService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_8__["MasterService"] }, { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsLocaleService"] }]; }, { datepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['datepicker', { static: true }]
        }] }); })();


/***/ }),

/***/ "./app/modules/purchase/components/pages/event/purchase-event-seat-ticket/purchase-event-seat-ticket.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./app/modules/purchase/components/pages/event/purchase-event-seat-ticket/purchase-event-seat-ticket.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: PurchaseEventSeatTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseEventSeatTicketComponent", function() { return PurchaseEventSeatTicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _purchase_ticket_purchase_ticket_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../purchase-ticket/purchase-ticket.component */ "./app/modules/purchase/components/pages/purchase-ticket/purchase-ticket.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-intl-tel-input */ "../../node_modules/ngx-intl-tel-input/__ivy_ngcc__/fesm2015/ngx-intl-tel-input.js");
/* harmony import */ var _parts_purchase_info_purchase_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../parts/purchase-info/purchase-info.component */ "./app/modules/purchase/components/parts/purchase-info/purchase-info.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _parts_movie_tickets_movie_tickets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../parts/movie-tickets/movie-tickets.component */ "./app/modules/purchase/components/parts/movie-tickets/movie-tickets.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/pipes/change-language.pipe */ "./app/modules/shared/pipes/change-language.pipe.ts");











function PurchaseEventSeatTicketComponent_app_movie_tickets_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-movie-tickets", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function PurchaseEventSeatTicketComponent_app_movie_tickets_6_Template_app_movie_tickets_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openMovieTicket($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.purchase)) == null ? null : tmp_0_0.screeningEventTicketOffers;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screeningEventTicketOffers", currVal_0);
} }
function PurchaseEventSeatTicketComponent_li_10_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseEventSeatTicketComponent_li_10_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const reservation_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.openTicketList(reservation_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "purchase.event.seatTicket.unselected"));
} }
const _c0 = function (a0) { return { value: a0 }; };
function PurchaseEventSeatTicketComponent_li_10_button_9_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const priceComponent_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, "common.referenceQuantityValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, priceComponent_r13 == null ? null : priceComponent_r13.referenceQuantity == null ? null : priceComponent_r13.referenceQuantity.value)));
} }
function PurchaseEventSeatTicketComponent_li_10_button_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PurchaseEventSeatTicketComponent_li_10_button_9_div_1_span_8_Template, 3, 6, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const priceComponent_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, priceComponent_r13.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, priceComponent_r13.price, priceComponent_r13.priceCurrency));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", priceComponent_r13 == null ? null : priceComponent_r13.referenceQuantity == null ? null : priceComponent_r13.referenceQuantity.value);
} }
function PurchaseEventSeatTicketComponent_li_10_button_9_div_2_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const addOn_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, "common.referenceQuantityValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, addOn_r16.priceSpecification == null ? null : addOn_r16.priceSpecification.referenceQuantity == null ? null : addOn_r16.priceSpecification.referenceQuantity.value)));
} }
function PurchaseEventSeatTicketComponent_li_10_button_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PurchaseEventSeatTicketComponent_li_10_button_9_div_2_span_8_Template, 3, 6, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const addOn_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, addOn_r16.priceSpecification.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, addOn_r16.priceSpecification.price, addOn_r16.priceSpecification.priceCurrency));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", addOn_r16.priceSpecification == null ? null : addOn_r16.priceSpecification.referenceQuantity == null ? null : addOn_r16.priceSpecification.referenceQuantity.value);
} }
function PurchaseEventSeatTicketComponent_li_10_button_9_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reservation_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "modal.purchase.seatTicket.movieTicket.code"), " ", reservation_r4.ticket.movieTicket.identifier, " ");
} }
function PurchaseEventSeatTicketComponent_li_10_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseEventSeatTicketComponent_li_10_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const reservation_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.openTicketList(reservation_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PurchaseEventSeatTicketComponent_li_10_button_9_div_1_Template, 9, 8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PurchaseEventSeatTicketComponent_li_10_button_9_div_2_Template, 9, 8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PurchaseEventSeatTicketComponent_li_10_button_9_p_4_Template, 3, 4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reservation_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", reservation_r4.ticket == null ? null : reservation_r4.ticket.ticketOffer.priceSpecification.priceComponent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", reservation_r4.ticket == null ? null : reservation_r4.ticket.addOn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reservation_r4.ticket.movieTicket);
} }
function PurchaseEventSeatTicketComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PurchaseEventSeatTicketComponent_li_10_button_8_Template, 3, 3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PurchaseEventSeatTicketComponent_li_10_button_9_Template, 5, 3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reservation_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "common.seat"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", reservation_r4.seat.seatNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reservation_r4.ticket === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reservation_r4.ticket !== undefined);
} }
class PurchaseEventSeatTicketComponent extends _purchase_ticket_purchase_ticket_component__WEBPACK_IMPORTED_MODULE_1__["PurchaseTicketComponent"] {
}
PurchaseEventSeatTicketComponent.ɵfac = function PurchaseEventSeatTicketComponent_Factory(t) { return ɵPurchaseEventSeatTicketComponent_BaseFactory(t || PurchaseEventSeatTicketComponent); };
PurchaseEventSeatTicketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseEventSeatTicketComponent, selectors: [["app-purchase-event-seat-ticket"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 27, vars: 29, consts: [[1, "contents-width", "mx-auto", "px-3", "py-5"], [1, "text-large", "mb-4", "text-center", "font-weight-bold"], [1, "mb-4", "text-md-center", 3, "innerHTML"], [3, "screeningEventTicketOffers", "select", 4, "ngIf"], [1, "mb-4"], [1, "d-flex", "flex-wrap"], [4, "ngFor", "ngForOf"], [1, "mb-4", "additional-ticket-text"], [1, "py-1", "px-2", 3, "ngModel", "ngModelChange"], [3, "purchase", "isAmount"], [1, "buttons", "mx-auto", "text-center"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "py-3", "mb-3", 3, "disabled", "click"], ["type", "button", "routerLink", "/purchase/event/seat", 1, "btn", "btn-outline-primary", "btn-block", "py-3"], [3, "screeningEventTicketOffers", "select"], [1, "bg-white", "p-3", "m-2"], [1, "mb-2", "font-weight-bold", "text-large"], [1, "mr-2"], ["type", "button", "class", "btn btn-primary btn-block py-3", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-block border border-primary text-primary bg-white py-3", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "btn-block", "py-3", 3, "click"], ["type", "button", 1, "btn", "btn-block", "border", "border-primary", "text-primary", "bg-white", "py-3", 3, "click"], ["class", "d-flex justify-content-between align-items-center", 4, "ngFor", "ngForOf"], ["class", "text-small text-left", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "w-50", "text-left"], [1, "w-50", "text-right"], [4, "ngIf"], [1, "text-small", "text-left"]], template: function PurchaseEventSeatTicketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PurchaseEventSeatTicketComponent_app_movie_tickets_6_Template, 2, 3, "app-movie-tickets", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PurchaseEventSeatTicketComponent_li_10_Template, 10, 6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PurchaseEventSeatTicketComponent_Template_textarea_ngModelChange_16_listener($event) { return ctx.additionalTicketText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-purchase-info", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseEventSeatTicketComponent_Template_button_click_20_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_2_0 = null;
        const currVal_2 = (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 15, ctx.purchase)) == null ? null : tmp_2_0.screeningEventTicketOffers;
        var tmp_3_0 = null;
        const currVal_3 = (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 17, ctx.purchase)) == null ? null : tmp_3_0.reservations;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 11, "purchase.event.seatTicket.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 13, "purchase.event.seatTicket.read"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", currVal_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 19, "common.additionalTicketText"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.additionalTicketText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("purchase", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 21, ctx.purchase))("isAmount", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 23, ctx.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 25, "purchase.event.seatTicket.next"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 27, "purchase.event.seatTicket.prev"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_4__["NativeElementInjectorDirective"], _parts_purchase_info_purchase_info_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseInfoComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _parts_movie_tickets_movie_tickets_component__WEBPACK_IMPORTED_MODULE_7__["MovieTicketsComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_9__["ChangeLanguagePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".movieticket[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .movieticket[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media (max-width: 767.98px) {\n  .movieticket[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .movieticket[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nul.d-flex[_ngcontent-%COMP%] {\n  margin: -0.5rem;\n}\nul.d-flex[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media (max-width: 767.98px) {\n  ul.d-flex[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"] });
const ɵPurchaseEventSeatTicketComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PurchaseEventSeatTicketComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseEventSeatTicketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-event-seat-ticket',
                templateUrl: './purchase-event-seat-ticket.component.html',
                styleUrls: ['./purchase-event-seat-ticket.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/modules/purchase/components/pages/event/purchase-event-seat/purchase-event-seat.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./app/modules/purchase/components/pages/event/purchase-event-seat/purchase-event-seat.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: PurchaseEventSeatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseEventSeatComponent", function() { return PurchaseEventSeatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _purchase_seat_purchase_seat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../purchase-seat/purchase-seat.component */ "./app/modules/purchase/components/pages/purchase-seat/purchase-seat.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _parts_seat_info_seat_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../parts/seat-info/seat-info.component */ "./app/modules/purchase/components/parts/seat-info/seat-info.component.ts");
/* harmony import */ var _parts_purchase_info_purchase_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../parts/purchase-info/purchase-info.component */ "./app/modules/purchase/components/parts/purchase-info/purchase-info.component.ts");
/* harmony import */ var _shared_components_parts_screen_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/parts/screen/screen.component */ "./app/modules/shared/components/parts/screen/screen.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-intl-tel-input */ "../../node_modules/ngx-intl-tel-input/__ivy_ngcc__/fesm2015/ngx-intl-tel-input.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










function PurchaseEventSeatComponent_app_screen_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-screen", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function PurchaseEventSeatComponent_app_screen_8_Template_app_screen_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectSeat($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, ctx_r0.user)) == null ? null : tmp_0_0.theater.branchCode;
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 8, ctx_r0.purchase)) == null ? null : tmp_1_0.screen.branchCode;
    var tmp_3_0 = null;
    const currVal_3 = (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, ctx_r0.purchase)) == null ? null : tmp_3_0.screen.openSeatingAllowed;
    var tmp_4_0 = null;
    const currVal_4 = (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 12, ctx_r0.purchase)) == null ? null : tmp_4_0.reservations;
    var tmp_5_0 = null;
    const currVal_5 = (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 14, ctx_r0.purchase)) == null ? null : tmp_5_0.authorizeSeatReservation;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theaterCode", currVal_0)("screenCode", currVal_1)("screeningEventSeats", ctx_r0.screeningEventSeats)("openSeatingAllowed", currVal_3)("reservations", currVal_4)("authorizeSeatReservation", currVal_5);
} }
function PurchaseEventSeatComponent_div_12_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r5);
} }
const _c0 = function (a0, a1, a2) { return { screeningEvent: a0, screeningEventSeats: a1, authorizeSeatReservations: a2 }; };
function PurchaseEventSeatComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PurchaseEventSeatComponent_div_12_Template_select_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.selectOpenSeating($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PurchaseEventSeatComponent_div_12_option_9_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx_r1.purchase)) == null ? null : tmp_1_0.reservations.length;
    var tmp_2_0 = null;
    const currVal_2 = ctx_r1.remainingAttendeeCapacityValue(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](11, _c0, (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, ctx_r1.purchase)) == null ? null : tmp_2_0.screeningEvent, ctx_r1.screeningEventSeats, (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, ctx_r1.purchase)) == null ? null : tmp_2_0.authorizeSeatReservations));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "purchase.event.seat.openSeating"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", currVal_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", currVal_2);
} }
class PurchaseEventSeatComponent extends _purchase_seat_purchase_seat_component__WEBPACK_IMPORTED_MODULE_1__["PurchaseSeatComponent"] {
    prev() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const authorizeSeatReservation = (yield this.actionService.purchase.getData()).authorizeSeatReservation;
                if (authorizeSeatReservation !== undefined) {
                    yield this.actionService.purchase.cancelTemporaryReservations([authorizeSeatReservation]);
                }
                this.router.navigate(['/purchase/event/ticket']);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
PurchaseEventSeatComponent.ɵfac = function PurchaseEventSeatComponent_Factory(t) { return ɵPurchaseEventSeatComponent_BaseFactory(t || PurchaseEventSeatComponent); };
PurchaseEventSeatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseEventSeatComponent, selectors: [["app-purchase-event-seat"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 25, vars: 27, consts: [[1, "contents-width", "mx-auto", "px-3", "py-5"], [1, "text-large", "mb-4", "text-center", "font-weight-bold"], [1, "mb-4", "text-md-center", 3, "innerHTML"], [1, "row"], [1, "col-lg-9"], ["class", "mb-3", 3, "theaterCode", "screenCode", "screeningEventSeats", "openSeatingAllowed", "reservations", "authorizeSeatReservation", "select", 4, "ngIf"], [1, "mb-4"], ["class", "mb-4", 4, "ngIf"], [1, "col-lg-3"], [3, "purchase", "isAmount"], [1, "buttons", "mx-auto", "text-center"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "py-3", "mb-3", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-block", "py-3", 3, "click"], [1, "mb-3", 3, "theaterCode", "screenCode", "screeningEventSeats", "openSeatingAllowed", "reservations", "authorizeSeatReservation", "select"], [1, "d-flex", "align-items-center"], [1, "mr-2"], [1, "form-control", "d-inline-block", "w-auto", 3, "ngModel", "change"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function PurchaseEventSeatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PurchaseEventSeatComponent_app_screen_8_Template, 6, 16, "app-screen", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-seat-info", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PurchaseEventSeatComponent_div_12_Template, 12, 15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-purchase-info", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseEventSeatComponent_Template_button_click_18_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseEventSeatComponent_Template_button_click_22_listener() { return ctx.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_2_0 = null;
        const currVal_2 = ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 13, ctx.user)) == null ? null : tmp_2_0.theater) && ctx.screeningEventSeats.length > 0 && ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 15, ctx.purchase)) == null ? null : tmp_2_0.screen);
        var tmp_3_0 = null;
        const currVal_3 = (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 17, ctx.purchase)) == null ? null : tmp_3_0.screen == null ? null : tmp_3_0.screen.openSeatingAllowed;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, "purchase.event.seat.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 11, "purchase.event.seat.read"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("purchase", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 19, ctx.purchase))("isAmount", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 21, ctx.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 23, "purchase.event.seat.next"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 25, "purchase.event.seat.prev"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _parts_seat_info_seat_info_component__WEBPACK_IMPORTED_MODULE_3__["SeatInfoComponent"], _parts_purchase_info_purchase_info_component__WEBPACK_IMPORTED_MODULE_4__["PurchaseInfoComponent"], _shared_components_parts_screen_screen_component__WEBPACK_IMPORTED_MODULE_5__["ScreenComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_7__["NativeElementInjectorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [""] });
const ɵPurchaseEventSeatComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PurchaseEventSeatComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseEventSeatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-event-seat',
                templateUrl: './purchase-event-seat.component.html',
                styleUrls: ['./purchase-event-seat.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/modules/purchase/components/pages/event/purchase-event-ticket/purchase-event-ticket.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./app/modules/purchase/components/pages/event/purchase-event-ticket/purchase-event-ticket.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: PurchaseEventTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseEventTicketComponent", function() { return PurchaseEventTicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "../../node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../.. */ "./app/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../services */ "./app/services/index.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../store/reducers */ "./app/store/reducers/index.ts");
/* harmony import */ var _shared_components_parts_purchase_event_ticket_modal_ticket_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/parts/purchase/event/ticket-modal/ticket-modal.component */ "./app/modules/shared/components/parts/purchase/event/ticket-modal/ticket-modal.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _parts_performances_performances_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../parts/performances/performances.component */ "./app/modules/purchase/components/parts/performances/performances.component.ts");
/* harmony import */ var _shared_components_parts_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/parts/item-list/item-list.component */ "./app/modules/shared/components/parts/item-list/item-list.component.ts");
/* harmony import */ var _shared_pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/pipes/format-date.pipe */ "./app/modules/shared/pipes/format-date.pipe.ts");
/* harmony import */ var _shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/pipes/change-language.pipe */ "./app/modules/shared/pipes/change-language.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






















function PurchaseEventTicketComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "formatDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r0.purchase)) == null ? null : tmp_0_0.scheduleDate, "YYYY/MM/DD (ddd)"), " ");
} }
function PurchaseEventTicketComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "purchase.event.ticket.notfound"), " ");
} }
function PurchaseEventTicketComponent_app_purchase_performances_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-purchase-performances", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function PurchaseEventTicketComponent_app_purchase_performances_10_Template_app_purchase_performances_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.selectSchedule($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("screeningEventsGroup", group_r5);
} }
function PurchaseEventTicketComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "purchase.event.cart.notfound"));
} }
function PurchaseEventTicketComponent_div_17_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authorizeSeatReservation_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, authorizeSeatReservation_r8.object.event.superEvent.headline), "");
} }
function PurchaseEventTicketComponent_div_17_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authorizeSeatReservation_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, authorizeSeatReservation_r8.object.event.superEvent.description));
} }
function PurchaseEventTicketComponent_div_17_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authorizeSeatReservation_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, authorizeSeatReservation_r8.object.event.location.address));
} }
function PurchaseEventTicketComponent_div_17_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0/\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authorizeSeatReservation_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "common.duration"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r12.moment.duration(authorizeSeatReservation_r8.object.event.workPerformed == null ? null : authorizeSeatReservation_r8.object.event.workPerformed.duration).asMinutes(), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "common.date.minute"), " ");
} }
function PurchaseEventTicketComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseEventTicketComponent_div_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const authorizeSeatReservation_r8 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.removeItem(authorizeSeatReservation_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PurchaseEventTicketComponent_div_17_p_9_Template, 3, 3, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PurchaseEventTicketComponent_div_17_p_11_Template, 3, 3, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "formatDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "formatDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u00A0/\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PurchaseEventTicketComponent_div_17_span_23_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PurchaseEventTicketComponent_div_17_span_27_Template, 7, 7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-item-list", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authorizeSeatReservation_r8 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 10, authorizeSeatReservation_r8.object.event.name), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", authorizeSeatReservation_r8.object.event.superEvent.headline && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, authorizeSeatReservation_r8.object.event.superEvent.headline));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", authorizeSeatReservation_r8.object.event.superEvent.description && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 14, authorizeSeatReservation_r8.object.event.superEvent.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 16, authorizeSeatReservation_r8.object.event.startDate, "MM/DD(ddd) HH:mm"), "-", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 19, authorizeSeatReservation_r8.object.event.endDate, "HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 22, authorizeSeatReservation_r8.object.event.superEvent.location.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 24, authorizeSeatReservation_r8.object.event.location.address));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 26, authorizeSeatReservation_r8.object.event.location.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (authorizeSeatReservation_r8.object.event.workPerformed == null ? null : authorizeSeatReservation_r8.object.event.workPerformed.duration) && ctx_r4.moment.duration(authorizeSeatReservation_r8.object.event.workPerformed == null ? null : authorizeSeatReservation_r8.object.event.workPerformed.duration).asMinutes() > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("authorizeSeatReservations", authorizeSeatReservation_r8 == null ? null : authorizeSeatReservation_r8.result == null ? null : authorizeSeatReservation_r8.result.responseBody.object.reservations);
} }
class PurchaseEventTicketComponent {
    constructor(store, router, utilService, translate, actionService, masterService, modal) {
        this.store = store;
        this.router = router;
        this.utilService = utilService;
        this.translate = translate;
        this.actionService = actionService;
        this.masterService = masterService;
        this.modal = modal;
        this.moment = moment__WEBPACK_IMPORTED_MODULE_4__;
        this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["getEnvironment"])();
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.purchase = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getPurchase"]));
            this.user = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getUser"]));
            this.master = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getMaster"]));
            this.error = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getError"]));
            this.isLoading = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getLoading"]));
            this.actionService.purchase.unsettledDelete();
            this.screeningEventsGroup = [];
            this.purchase.subscribe((purchase) => {
                if (purchase.transaction === undefined) {
                    this.router.navigate(['/error']);
                    return;
                }
                this.getSchedule();
            }).unsubscribe();
        });
    }
    ngOnDestroy() {
        clearTimeout(this.updateTimer);
    }
    /**
     * 更新
     */
    update() {
        if (this.updateTimer !== undefined) {
            clearTimeout(this.updateTimer);
        }
        const time = 600000; // 10 * 60 * 1000
        this.updateTimer = setTimeout(() => {
            this.getSchedule();
        }, time);
    }
    /**
     * スケジュール取得
     */
    getSchedule() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.actionService.user.getData();
                const purchase = yield this.actionService.purchase.getData();
                const theater = user.theater;
                const scheduleDate = purchase.scheduleDate;
                if (theater === undefined || scheduleDate === undefined) {
                    throw new Error('theater === undefined || scheduleDate === undefined').message;
                }
                const screeningEvents = yield this.masterService.getSchedule({
                    superEvent: { locationBranchCodes: [theater.branchCode] },
                    startFrom: moment__WEBPACK_IMPORTED_MODULE_4__(scheduleDate).toDate(),
                    startThrough: moment__WEBPACK_IMPORTED_MODULE_4__(scheduleDate).add(1, 'day').toDate(),
                    sort: true
                });
                this.screeningEventsGroup = ___WEBPACK_IMPORTED_MODULE_6__["Functions"].Purchase.screeningEvents2ScreeningEventsGroup({ screeningEvents });
                this.update();
            }
            catch (error) {
                console.error(error);
                this.router.navigate(['/error']);
            }
        });
    }
    /**
     * スケジュール選択
     */
    selectSchedule(screeningEvent) {
        return __awaiter(this, void 0, void 0, function* () {
            const purchase = yield this.actionService.purchase.getData();
            if (purchase.seller === undefined) {
                this.router.navigate(['/error']);
                return;
            }
            if (purchase.authorizeSeatReservations.length > 0
                && Number(this.environment.PURCHASE_ITEM_MAX_LENGTH) === 1) {
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: this.translate.instant('purchase.event.ticket.alert.cart')
                });
                return;
            }
            try {
                yield this.actionService.purchase.getScreeningEvent(screeningEvent);
                this.screeningEventSeats = yield this.actionService.purchase.getScreeningEventSeats();
                yield this.actionService.purchase.getTicketList({ seller: purchase.seller });
                yield this.actionService.purchase.getScreen({
                    branchCode: { $eq: screeningEvent.location.branchCode },
                    containedInPlace: {
                        branchCode: { $eq: screeningEvent.superEvent.location.branchCode }
                    }
                });
                this.openTicketList();
            }
            catch (error) {
                console.error(error);
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: ''
                });
            }
        });
    }
    /**
     * 券種表示
     */
    openTicketList() {
        return __awaiter(this, void 0, void 0, function* () {
            const purchase = yield this.actionService.purchase.getData();
            const screeningEvent = purchase.screeningEvent;
            const screeningEventTicketOffers = purchase.screeningEventTicketOffers;
            const screeningEventSeats = this.screeningEventSeats;
            const screen = purchase.screen;
            if (screeningEvent === undefined || screen === undefined) {
                return;
            }
            const performance = new ___WEBPACK_IMPORTED_MODULE_6__["Models"].Purchase.Performance(screeningEvent);
            if (!performance.isInfinitetock()
                && !screen.openSeatingAllowed
                && performance.isTicketedSeat()) {
                // 座席選択あり
                this.router.navigate(['/purchase/event/seat']);
                return;
            }
            // 座席選択なし
            this.modal.show(_shared_components_parts_purchase_event_ticket_modal_ticket_modal_component__WEBPACK_IMPORTED_MODULE_10__["PurchaseEventTicketModalComponent"], {
                class: 'modal-dialog-centered modal-lg',
                backdrop: 'static',
                initialState: {
                    screeningEventTicketOffers,
                    screeningEventSeats,
                    screeningEvent,
                    cb: (params) => {
                        this.selectTicket(params);
                    }
                }
            });
        });
    }
    /**
     * 券種選択
     */
    selectTicket(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const reservations = params.reservations;
            const additionalTicketText = params.additionalTicketText;
            if (reservations.length > Number(this.environment.PURCHASE_ITEM_MAX_LENGTH)) {
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: this.translate.instant('purchase.event.ticket.alert.limit', { value: this.environment.PURCHASE_ITEM_MAX_LENGTH })
                });
                return;
            }
            try {
                this.screeningEventSeats = yield this.actionService.purchase.getScreeningEventSeats();
                const purchase = yield this.actionService.purchase.getData();
                if (purchase.screeningEvent !== undefined
                    && new ___WEBPACK_IMPORTED_MODULE_6__["Models"].Purchase.Performance(purchase.screeningEvent).isTicketedSeat()) {
                    const remainingSeatLength = ___WEBPACK_IMPORTED_MODULE_6__["Functions"].Purchase.getRemainingSeatLength({
                        screeningEventSeats: this.screeningEventSeats,
                        screeningEvent: purchase.screeningEvent
                    });
                    if (remainingSeatLength < reservations.length) {
                        this.utilService.openAlert({
                            title: this.translate.instant('common.error'),
                            body: this.translate.instant('purchase.event.ticket.alert.getScreeningEventSeats')
                        });
                        return;
                    }
                }
            }
            catch (error) {
                console.error(error);
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: ''
                });
            }
            try {
                yield this.actionService.purchase.temporaryReservation({
                    reservations,
                    additionalTicketText,
                    screeningEventSeats: this.screeningEventSeats
                });
                this.utilService.openAlert({
                    title: this.translate.instant('common.complete'),
                    body: this.translate.instant('purchase.event.ticket.success.temporaryReservation')
                });
                this.actionService.purchase.unsettledDelete();
            }
            catch (error) {
                console.error(error);
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: `
                <p class="mb-4">${this.translate.instant('purchase.event.ticket.alert.temporaryReservation')}</p>
                <div class="p-3 bg-light-gray select-text text-left">
                    <code>${error}</code>
                </div>`
                });
            }
        });
    }
    /**
     * 券種確定
     */
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            const purchase = yield this.actionService.purchase.getData();
            const authorizeSeatReservations = purchase.authorizeSeatReservations;
            // チケット未選択判定
            if (authorizeSeatReservations.length === 0) {
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: this.translate.instant('purchase.event.ticket.alert.unselected')
                });
                return;
            }
            // チケット枚数上限判定
            let itemCount = 0;
            authorizeSeatReservations.forEach(a => itemCount += a.object.acceptedOffer.length);
            if (itemCount > Number(this.environment.PURCHASE_ITEM_MAX_LENGTH)) {
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: this.translate.instant('purchase.event.ticket.alert.limit', { value: Number(this.environment.PURCHASE_ITEM_MAX_LENGTH) })
                });
                return;
            }
            this.router.navigate(['/purchase/confirm']);
        });
    }
    /**
     * カート削除確認
     */
    removeItem(authorizeSeatReservation) {
        this.utilService.openConfirm({
            title: this.translate.instant('common.confirm'),
            body: this.translate.instant('purchase.event.cart.confirm.cancel'),
            cb: () => __awaiter(this, void 0, void 0, function* () {
                try {
                    const authorizeSeatReservations = [authorizeSeatReservation];
                    yield this.actionService.purchase.cancelTemporaryReservations(authorizeSeatReservations);
                }
                catch (error) {
                    console.error(error);
                    this.router.navigate(['/error']);
                }
            })
        });
    }
}
PurchaseEventTicketComponent.ɵfac = function PurchaseEventTicketComponent_Factory(t) { return new (t || PurchaseEventTicketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"])); };
PurchaseEventTicketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseEventTicketComponent, selectors: [["app-purchase-event-ticket"]], decls: 27, vars: 29, consts: [[1, "contents-width", "mx-auto", "px-3", "py-5"], [1, "text-large", "mb-4", "text-center", "font-weight-bold"], [1, "mb-4", "text-md-center", 3, "innerHTML"], [1, "mb-4"], ["class", "text-primary text-large mb-3", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], ["class", "mb-3", 3, "screeningEventsGroup", "select", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "mb-4 bg-white p-3 position-relative", 4, "ngFor", "ngForOf"], [1, "buttons", "mx-auto", "text-center"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "py-3", "mb-3", 3, "disabled", "click"], ["type", "button", "routerLink", "/purchase/event/schedule", 1, "btn", "btn-outline-primary", "btn-block", "py-3"], [1, "text-primary", "text-large", "mb-3"], [1, "mb-3"], [1, "mb-3", 3, "screeningEventsGroup", "select"], [1, "text-md-center"], [1, "mb-4", "bg-white", "p-3", "position-relative"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "mb-1"], [1, "font-weight-bold", "text-large", "pr-3"], ["class", "text-small", 4, "ngIf"], [1, "text-small", "mb-1"], [1, "theater-name"], [1, "screen-name"], ["class", "mr-2", 4, "ngIf"], [3, "authorizeSeatReservations"], [1, "text-small"], [1, "mr-2"], [1, "mr-1"]], template: function PurchaseEventTicketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PurchaseEventTicketComponent_p_7_Template, 4, 6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PurchaseEventTicketComponent_p_9_Template, 3, 3, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PurchaseEventTicketComponent_app_purchase_performances_10_Template, 1, 1, "app-purchase-performances", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PurchaseEventTicketComponent_div_15_Template, 4, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PurchaseEventTicketComponent_div_17_Template, 30, 28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseEventTicketComponent_Template_button_click_20_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_2_0 = null;
        const currVal_2 = (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 15, ctx.purchase)) == null ? null : tmp_2_0.scheduleDate;
        var tmp_6_0 = null;
        const currVal_6 = ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 19, ctx.purchase)) == null ? null : tmp_6_0.authorizeSeatReservations.length) === 0;
        var tmp_7_0 = null;
        const currVal_7 = (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 21, ctx.purchase)) == null ? null : tmp_7_0.authorizeSeatReservations;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 11, "purchase.event.ticket.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 13, "purchase.event.ticket.read"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screeningEventsGroup.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.screeningEventsGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 17, "purchase.event.cart.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", currVal_7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 23, ctx.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 25, "purchase.event.cart.next"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 27, "purchase.event.ticket.prev"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _parts_performances_performances_component__WEBPACK_IMPORTED_MODULE_12__["PurchasePerformancesComponent"], _shared_components_parts_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_13__["ItemListComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _shared_pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_14__["FormatDatePipe"], _shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_15__["ChangeLanguagePipe"]], styles: [".close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseEventTicketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-event-ticket',
                templateUrl: './purchase-event-ticket.component.html',
                styleUrls: ['./purchase-event-ticket.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_8__["UtilService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_8__["ActionService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_8__["MasterService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "./app/modules/purchase/components/pages/purchase-base/purchase-base.component.ts":
/*!****************************************************************************************!*\
  !*** ./app/modules/purchase/components/pages/purchase-base/purchase-base.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PurchaseBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseBaseComponent", function() { return PurchaseBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../store/reducers */ "./app/store/reducers/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_parts_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/parts/loading/loading.component */ "./app/modules/shared/components/parts/loading/loading.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








class PurchaseBaseComponent {
    constructor(store, changeDetectorRef) {
        this.store = store;
        this.changeDetectorRef = changeDetectorRef;
    }
    ngOnInit() {
        this.isLoading = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_2__["getLoading"]));
        this.process = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_2__["getProcess"]));
        this.purchase = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_2__["getPurchase"]));
    }
    ngAfterViewChecked() {
        this.changeDetectorRef.detectChanges();
    }
    ngOnDestroy() {
        this.isLoading.subscribe().unsubscribe();
        this.process.subscribe().unsubscribe();
        this.purchase.subscribe().unsubscribe();
    }
}
PurchaseBaseComponent.ɵfac = function PurchaseBaseComponent_Factory(t) { return new (t || PurchaseBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PurchaseBaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseBaseComponent, selectors: [["app-purchase-base"]], decls: 4, vars: 6, consts: [[3, "isLoading", "process"]], template: function PurchaseBaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.isLoading))("process", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.process));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _shared_components_parts_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseBaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-base',
                templateUrl: './purchase-base.component.html',
                styleUrls: ['./purchase-base.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./app/modules/purchase/components/pages/purchase-complete/purchase-complete.component.ts":
/*!************************************************************************************************!*\
  !*** ./app/modules/purchase/components/pages/purchase-complete/purchase-complete.component.ts ***!
  \************************************************************************************************/
/*! exports provided: PurchaseCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseCompleteComponent", function() { return PurchaseCompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cinerino/sdk */ "../../node_modules/@cinerino/sdk/lib/browser.js");
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../.. */ "./app/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../services */ "./app/services/index.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../store/reducers */ "./app/store/reducers/index.ts");
/* harmony import */ var _shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/parts/header/header.component */ "./app/modules/shared/components/parts/header/header.component.ts");
/* harmony import */ var _parts_step_step_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../parts/step/step.component */ "./app/modules/purchase/components/parts/step/step.component.ts");
/* harmony import */ var _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/parts/footer/footer.component */ "./app/modules/shared/components/parts/footer/footer.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



















class PurchaseCompleteComponent {
    constructor(store, router, actionService, utilService, translate, epsonEPOSService) {
        this.store = store;
        this.router = router;
        this.actionService = actionService;
        this.utilService = utilService;
        this.translate = translate;
        this.epsonEPOSService = epsonEPOSService;
        this.moment = moment__WEBPACK_IMPORTED_MODULE_5__;
        this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["getEnvironment"])();
        this.paymentMethodType = _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__["factory"].chevre.paymentMethodType;
        this.getCustomPaymentMethodTypeName = ___WEBPACK_IMPORTED_MODULE_6__["Functions"].Purchase.getCustomPaymentMethodTypeName;
        this.connectionType = ___WEBPACK_IMPORTED_MODULE_6__["Models"].Util.Printer.ConnectionType;
        this.createOrderLink = ___WEBPACK_IMPORTED_MODULE_6__["Functions"].Order.createOrderLink;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.eventOrders = [];
            this.purchase = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getPurchase"]));
            this.user = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getUser"]));
            this.isLoading = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getLoading"]));
            this.error = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getError"]));
            let order;
            try {
                const purchaseData = yield this.actionService.purchase.getData();
                if (purchaseData.order === undefined) {
                    throw new Error('order not found').message;
                }
                order = purchaseData.order;
                this.eventOrders = ___WEBPACK_IMPORTED_MODULE_6__["Functions"].Purchase.order2EventOrders({ order });
                this.print();
            }
            catch (error) {
                this.router.navigate(['/error']);
                return;
            }
        });
    }
    /**
     * 印刷
     */
    print() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const purchase = yield this.actionService.purchase.getData();
                const user = yield this.actionService.user.getData();
                if (purchase.order === undefined
                    || user.printer === undefined) {
                    throw new Error('printer undefined');
                }
                const orders = [purchase.order];
                const pos = user.pos;
                const printer = user.printer;
                yield this.actionService.order.print({ orders, pos, printer });
            }
            catch (error) {
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: `
                <p class="mb-4">${this.translate.instant('purchase.complete.alert.print')}</p>
                    <div class="p-3 bg-light-gray select-text">
                    <code>${error}</code>
                </div>`
                });
            }
        });
    }
    test() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.utilService.loadStart({ process: 'load' });
                // デモ用
                const purchase = yield this.actionService.purchase.getData();
                if (((_a = purchase.order) === null || _a === void 0 ? void 0 : _a.paymentMethods.find(p => p.typeOf === this.paymentMethodType.Cash)) !== undefined) {
                    // 現金
                    const paymentMethod = (_b = purchase.order) === null || _b === void 0 ? void 0 : _b.paymentMethods.find(p => p.typeOf === this.paymentMethodType.Cash);
                    if (paymentMethod === undefined
                        || ((_c = paymentMethod.totalPaymentDue) === null || _c === void 0 ? void 0 : _c.value) === undefined) {
                        return;
                    }
                    const user = yield this.actionService.user.getData();
                    if (user.payment === undefined
                        || user.payment.cash === undefined) {
                        throw new Error('payment undefined');
                    }
                    yield this.epsonEPOSService.cashchanger.init({ ipAddress: user.payment.cash.ipAddress });
                    yield this.epsonEPOSService.cashchanger.dispenseChange({ amount: paymentMethod.totalPaymentDue.value });
                    yield this.epsonEPOSService.cashchanger.disconnect();
                }
                this.utilService.loadEnd();
            }
            catch (error) {
                console.error(error);
                this.utilService.loadEnd();
            }
        });
    }
}
PurchaseCompleteComponent.ɵfac = function PurchaseCompleteComponent_Factory(t) { return new (t || PurchaseCompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["EpsonEPOSService"])); };
PurchaseCompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseCompleteComponent, selectors: [["app-purchase-complete"]], decls: 19, vars: 11, consts: [[3, "isClear"], [3, "currentStep"], [1, "contents"], [1, "container", "h-100", "p-3"], [1, "row", "h-100"], [1, "col-3", "h-100"], [1, "bg-dark", "h-100"], [1, "col-6"], [1, "text-large", "mb-4", "text-center", "font-weight-bold"], [1, "mb-4", "text-md-center", 3, "innerHTML"], [1, "col-3"], [1, "mr-auto"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function PurchaseCompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-purchase-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseCompleteComponent_Template_button_click_16_listener() { return ctx.test(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u8FD4\u91D1\uFF08\u30C7\u30E2\u7528\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentStep", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, "purchase.complete.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, "purchase.complete.read"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 9, ctx.isLoading));
    } }, directives: [_shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _parts_step_step_component__WEBPACK_IMPORTED_MODULE_11__["PurchaseStepComponent"], _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseCompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-complete',
                templateUrl: './purchase-complete.component.html',
                styleUrls: ['./purchase-complete.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_8__["ActionService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_8__["UtilService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_8__["EpsonEPOSService"] }]; }, null); })();


/***/ }),

/***/ "./app/modules/purchase/components/pages/purchase-confirm/purchase-confirm.component.ts":
/*!**********************************************************************************************!*\
  !*** ./app/modules/purchase/components/pages/purchase-confirm/purchase-confirm.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PurchaseConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseConfirmComponent", function() { return PurchaseConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cinerino/sdk */ "../../node_modules/@cinerino/sdk/lib/browser.js");
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../.. */ "./app/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services */ "./app/services/index.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../store/reducers */ "./app/store/reducers/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_parts_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/parts/item-list/item-list.component */ "./app/modules/shared/components/parts/item-list/item-list.component.ts");
/* harmony import */ var _parts_purchase_warning_purchase_warning_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../parts/purchase-warning/purchase-warning.component */ "./app/modules/purchase/components/parts/purchase-warning/purchase-warning.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/pipes/change-language.pipe */ "./app/modules/shared/pipes/change-language.pipe.ts");
/* harmony import */ var _shared_pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/pipes/format-date.pipe */ "./app/modules/shared/pipes/format-date.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



















function PurchaseConfirmComponent_div_7_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authorizeSeatReservation_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, authorizeSeatReservation_r6.object.event.superEvent.headline), "");
} }
function PurchaseConfirmComponent_div_7_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authorizeSeatReservation_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, authorizeSeatReservation_r6.object.event.superEvent.description));
} }
function PurchaseConfirmComponent_div_7_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authorizeSeatReservation_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, authorizeSeatReservation_r6.object.event.location.address));
} }
function PurchaseConfirmComponent_div_7_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0/\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authorizeSeatReservation_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "common.duration"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r10.moment.duration(authorizeSeatReservation_r6.object.event.workPerformed == null ? null : authorizeSeatReservation_r6.object.event.workPerformed.duration).asMinutes(), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "common.date.minute"), " ");
} }
function PurchaseConfirmComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PurchaseConfirmComponent_div_7_p_6_Template, 3, 3, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PurchaseConfirmComponent_div_7_p_8_Template, 3, 3, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "formatDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "formatDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u00A0/\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PurchaseConfirmComponent_div_7_span_20_Template, 3, 3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PurchaseConfirmComponent_div_7_span_24_Template, 7, 7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-item-list", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authorizeSeatReservation_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, authorizeSeatReservation_r6.object.event.name), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", authorizeSeatReservation_r6.object.event.superEvent.headline && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 12, authorizeSeatReservation_r6.object.event.superEvent.headline));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", authorizeSeatReservation_r6.object.event.superEvent.description && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 14, authorizeSeatReservation_r6.object.event.superEvent.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 16, authorizeSeatReservation_r6.object.event.startDate, "MM/DD(ddd) HH:mm"), "-", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 19, authorizeSeatReservation_r6.object.event.endDate, "HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 22, authorizeSeatReservation_r6.object.event.superEvent.location.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 24, authorizeSeatReservation_r6.object.event.location.address));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 26, authorizeSeatReservation_r6.object.event.location.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (authorizeSeatReservation_r6.object.event.workPerformed == null ? null : authorizeSeatReservation_r6.object.event.workPerformed.duration) && ctx_r0.moment.duration(authorizeSeatReservation_r6.object.event.workPerformed == null ? null : authorizeSeatReservation_r6.object.event.workPerformed.duration).asMinutes() > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("authorizeSeatReservations", authorizeSeatReservation_r6 == null ? null : authorizeSeatReservation_r6.result == null ? null : authorizeSeatReservation_r6.result.responseBody.object.reservations);
} }
function PurchaseConfirmComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-purchase-warning", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_1_0 = null;
    const currVal_1 = (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx_r1.user)) == null ? null : tmp_1_0.language;
    var tmp_2_0 = null;
    const currVal_2 = (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, ctx_r1.purchase)) == null ? null : tmp_2_0.screeningEvent;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "purchase.confirm.warning"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("language", currVal_1)("screeningEvent", currVal_2);
} }
function PurchaseConfirmComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseConfirmComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r2.isLoading));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "purchase.confirm.next"));
} }
function PurchaseConfirmComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchaseConfirmComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r3.isLoading));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "purchase.confirm.consent"));
} }
function PurchaseConfirmComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "purchase.confirm.prev"));
} }
function PurchaseConfirmComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "purchase.confirm.prev"));
} }
class PurchaseConfirmComponent {
    constructor(store, router, actionService) {
        this.store = store;
        this.router = router;
        this.actionService = actionService;
        this.moment = moment__WEBPACK_IMPORTED_MODULE_4__;
        this.paymentMethodType = _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__["factory"].chevre.paymentMethodType;
        this.viewType = ___WEBPACK_IMPORTED_MODULE_5__["Models"].Util.ViewType;
        this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["getEnvironment"])();
        this.getCustomPaymentMethodTypeName = ___WEBPACK_IMPORTED_MODULE_5__["Functions"].Purchase.getCustomPaymentMethodTypeName;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.purchase = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_8__["getPurchase"]));
            this.isLoading = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_8__["getLoading"]));
            this.user = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_8__["getUser"]));
            this.amount = 0;
            this.depositAmount = 0;
            try {
                const purchase = yield this.actionService.purchase.getData();
                this.amount = ___WEBPACK_IMPORTED_MODULE_5__["Functions"].Purchase.getAmount(purchase.authorizeSeatReservations);
            }
            catch (error) {
                console.error(error);
                this.router.navigate(['/error']);
            }
        });
    }
    /**
     * 確定
     */
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.amount > 0) {
                this.router.navigate(['/purchase/payment']);
                return;
            }
            const purchaseData = yield this.actionService.purchase.getData();
            const userData = yield this.actionService.user.getData();
            const profile = userData.customerContact;
            const seller = purchaseData.seller;
            if (profile === undefined
                || seller === undefined) {
                this.router.navigate(['/error']);
                return;
            }
            try {
                if (purchaseData.pendingMovieTickets.length > 0) {
                    yield this.actionService.purchase.authorizeMovieTicket({ seller });
                }
                yield this.actionService.purchase.authorizeAnyPayment({ amount: this.amount });
                yield this.actionService.purchase.registerContact(profile);
                yield this.actionService.purchase.endTransaction({ seller, language: userData.language });
                this.router.navigate(['/purchase/complete']);
            }
            catch (error) {
                console.error(error);
                this.router.navigate(['/error']);
            }
        });
    }
}
PurchaseConfirmComponent.ɵfac = function PurchaseConfirmComponent_Factory(t) { return new (t || PurchaseConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["ActionService"])); };
PurchaseConfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseConfirmComponent, selectors: [["app-purchase-confirm"]], decls: 24, vars: 21, consts: [[1, "contents-width", "mx-auto", "px-3", "py-5"], [1, "mb-4"], [1, "text-large", "mb-4", "text-center", "font-weight-bold"], [1, "mb-4", "text-md-center", 3, "innerHTML"], ["class", "mb-4 bg-white p-3", 4, "ngFor", "ngForOf"], [1, "bg-white", "px-3", "mb-4"], [1, "overflow-hidden"], [1, "py-3", "row", "align-items-center"], [1, "mb-2", "mb-md-0", "col-md-4"], [1, "col-md-8", "font-weight-bold", "text-large", "text-info"], [4, "ngIf"], [1, "buttons", "mx-auto", "text-center"], ["type", "submit", "class", "btn btn-primary btn-block py-3 mb-3", 3, "disabled", "click", 4, "ngIf"], [1, "mb-4", "bg-white", "p-3"], [1, "mb-3"], [1, "mb-1"], [1, "font-weight-bold", "text-large"], ["class", "text-small", 4, "ngIf"], [1, "text-small", "mb-1"], [1, "theater-name"], [1, "screen-name"], ["class", "mr-2", 4, "ngIf"], [3, "authorizeSeatReservations"], [1, "text-small"], [1, "mr-2"], [1, "mr-1"], [3, "language", "screeningEvent"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "py-3", "mb-3", 3, "disabled", "click"], ["type", "button", "routerLink", "/purchase/cinema/ticket", 1, "btn", "btn-outline-primary", "btn-block", "py-3"], ["type", "button", "routerLink", "/purchase/event/ticket", 1, "btn", "btn-outline-primary", "btn-block", "py-3"]], template: function PurchaseConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PurchaseConfirmComponent_div_7_Template, 27, 28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PurchaseConfirmComponent_div_18_Template, 8, 9, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PurchaseConfirmComponent_button_20_Template, 4, 6, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PurchaseConfirmComponent_button_21_Template, 4, 6, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PurchaseConfirmComponent_div_22_Template, 4, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PurchaseConfirmComponent_div_23_Template, 4, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_2_0 = null;
        const currVal_2 = (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 14, ctx.purchase)) == null ? null : tmp_2_0.authorizeSeatReservations;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, "purchase.confirm.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 12, "purchase.confirm.read"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", currVal_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 16, "common.amount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 18, ctx.amount, "JPY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.environment.PURCHASE_WARNING);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.environment.PURCHASE_WARNING);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.environment.PURCHASE_WARNING);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.environment.VIEW_TYPE === ctx.viewType.Cinema);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.environment.VIEW_TYPE === ctx.viewType.Event);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_components_parts_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_10__["ItemListComponent"], _parts_purchase_warning_purchase_warning_component__WEBPACK_IMPORTED_MODULE_11__["PurchaseWarningComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"], _shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_13__["ChangeLanguagePipe"], _shared_pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_14__["FormatDatePipe"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseConfirmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-confirm',
                templateUrl: './purchase-confirm.component.html',
                styleUrls: ['./purchase-confirm.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_7__["ActionService"] }]; }, null); })();


/***/ }),

/***/ "./app/modules/purchase/components/pages/purchase-payment-reception/purchase-payment-reception.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./app/modules/purchase/components/pages/purchase-payment-reception/purchase-payment-reception.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: PurchasePaymentReceptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasePaymentReceptionComponent", function() { return PurchasePaymentReceptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cinerino/sdk */ "../../node_modules/@cinerino/sdk/lib/browser.js");
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../.. */ "./app/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services */ "./app/services/index.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../store/reducers */ "./app/store/reducers/index.ts");
/* harmony import */ var _shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/parts/header/header.component */ "./app/modules/shared/components/parts/header/header.component.ts");
/* harmony import */ var _parts_step_step_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../parts/step/step.component */ "./app/modules/purchase/components/parts/step/step.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _parts_purchase_info_purchase_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../parts/purchase-info/purchase-info.component */ "./app/modules/purchase/components/parts/purchase-info/purchase-info.component.ts");
/* harmony import */ var _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/parts/footer/footer.component */ "./app/modules/shared/components/parts/footer/footer.component.ts");
/* harmony import */ var _parts_transaction_remaining_time_transaction_remaining_time_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../parts/transaction-remaining-time/transaction-remaining-time.component */ "./app/modules/purchase/components/parts/transaction-remaining-time/transaction-remaining-time.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




















function PurchasePaymentReceptionComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "common.amount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 8, ctx_r0.amount, "JPY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, "purchase.paymentReception.cash.deposit"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 13, ctx_r0.deposit, "JPY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 16, "purchase.paymentReception.cash.change"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 18, ctx_r0.deposit - ctx_r0.amount, "JPY"));
} }
function PurchasePaymentReceptionComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function PurchasePaymentReceptionComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function PurchasePaymentReceptionComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchasePaymentReceptionComponent_ng_container_20_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchasePaymentReceptionComponent_ng_container_20_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, "purchase.paymentReception.cash.prev"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, ctx_r3.isLoading) || ctx_r3.amount > ctx_r3.deposit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, "purchase.paymentReception.cash.next"));
} }
function PurchasePaymentReceptionComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function PurchasePaymentReceptionComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
class PurchasePaymentReceptionComponent {
    constructor(store, router, actionService, utilService, epsonEPOSService, paymentService) {
        this.store = store;
        this.router = router;
        this.actionService = actionService;
        this.utilService = utilService;
        this.epsonEPOSService = epsonEPOSService;
        this.paymentService = paymentService;
        this.paymentMethodType = _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__["factory"].chevre.paymentMethodType;
        this.viewType = ___WEBPACK_IMPORTED_MODULE_5__["Models"].Util.ViewType;
        this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["getEnvironment"])();
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            this.isLoading = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_8__["getLoading"]));
            this.purchase = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_8__["getPurchase"]));
            this.user = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_8__["getUser"]));
            this.amount = 0;
            try {
                const purchase = yield this.actionService.purchase.getData();
                this.amount = ___WEBPACK_IMPORTED_MODULE_5__["Functions"].Purchase.getAmount(purchase.authorizeSeatReservations);
                if (this.amount === 0) {
                    yield this.onSubmit();
                    return;
                }
                if (((_a = purchase.paymentMethod) === null || _a === void 0 ? void 0 : _a.typeOf) === this.paymentMethodType.Cash) {
                    // 現金
                    yield this.cash();
                }
                if (((_b = purchase.paymentMethod) === null || _b === void 0 ? void 0 : _b.typeOf) === this.paymentMethodType.CreditCard) {
                    // クレジットカード
                    yield this.creditcard();
                }
                if (((_c = purchase.paymentMethod) === null || _c === void 0 ? void 0 : _c.typeOf) === this.paymentMethodType.EMoney) {
                    // 電子マネー
                    yield this.eMoney();
                }
                if (((_d = purchase.paymentMethod) === null || _d === void 0 ? void 0 : _d.typeOf) === this.paymentMethodType.Others
                    && purchase.paymentMethod.category === 'code') {
                    // コード
                    yield this.code();
                }
            }
            catch (error) {
                console.error(error);
                // this.router.navigate(['/error']);
            }
        });
    }
    /**
     * 現金
     */
    cash() {
        return __awaiter(this, void 0, void 0, function* () {
            this.deposit = 0;
            const { payment } = yield this.actionService.user.getData();
            if (payment === undefined
                || payment.cash === undefined) {
                throw new Error('payment undefined');
            }
            yield this.epsonEPOSService.cashchanger.init({
                ipAddress: payment.cash.ipAddress
            });
            yield this.epsonEPOSService.cashchanger.endDeposit();
            yield this.epsonEPOSService.cashchanger.beginDeposit({
                cb: (amount) => {
                    this.deposit = amount;
                }
            });
        });
    }
    /**
     * クレジットカード
     */
    creditcard() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.actionService.user.getData();
            if (user.payment === undefined
                || user.payment.creditcard === undefined) {
                throw new Error('payment undefined');
            }
            yield this.paymentService.init({
                ipAddress: user.payment.creditcard.ipAddress
            });
            const execResult = yield this.paymentService.exec({
                func: ___WEBPACK_IMPORTED_MODULE_5__["Models"].Purchase.Payment.FUNC_CODE.CREDITCARD.SETTLEMENT,
                options: {
                    JOB: ___WEBPACK_IMPORTED_MODULE_5__["Models"].Purchase.Payment.JOB.CAPTURE,
                    ORDERID: moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYYMMDDHHmmsss'),
                    AMOUNT: String(this.amount),
                }
            });
            if (execResult.FUNC_STATUS === ___WEBPACK_IMPORTED_MODULE_5__["Models"].Purchase.Payment.FUNC_STATUS.APP_CANCEL
                || execResult.FUNC_STATUS === ___WEBPACK_IMPORTED_MODULE_5__["Models"].Purchase.Payment.FUNC_STATUS.MACHINE_CANCEL) {
                this.router.navigate(['/purchase/payment']);
                return;
            }
            if (execResult.FUNC_STATUS !== ___WEBPACK_IMPORTED_MODULE_5__["Models"].Purchase.Payment.FUNC_STATUS.SUCCESS) {
                yield this.paymentService.exec({
                    func: ___WEBPACK_IMPORTED_MODULE_5__["Models"].Purchase.Payment.FUNC_CODE.CREDITCARD.INTERRUPTION,
                });
                throw new Error(JSON.stringify(execResult));
            }
            this.onSubmit();
        });
    }
    /**
     * 電子マネー
     */
    eMoney() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.actionService.user.getData();
            if (user.payment === undefined
                || user.payment.emoney === undefined) {
                throw new Error('payment undefined');
            }
            yield this.paymentService.init({
                ipAddress: user.payment.emoney.ipAddress
            });
            const execResult = yield this.paymentService.exec({
                func: ___WEBPACK_IMPORTED_MODULE_5__["Models"].Purchase.Payment.FUNC_CODE.EMONEY.SETTLEMENT,
                options: {
                    JOB: ___WEBPACK_IMPORTED_MODULE_5__["Models"].Purchase.Payment.JOB.CAPTURE,
                    ORDERID: moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYYMMDDHHmmsss'),
                    AMOUNT: String(this.amount),
                }
            });
            if (execResult.FUNC_STATUS === ___WEBPACK_IMPORTED_MODULE_5__["Models"].Purchase.Payment.FUNC_STATUS.APP_CANCEL
                || execResult.FUNC_STATUS === ___WEBPACK_IMPORTED_MODULE_5__["Models"].Purchase.Payment.FUNC_STATUS.MACHINE_CANCEL) {
                this.router.navigate(['/purchase/payment']);
                return;
            }
            if (execResult.FUNC_STATUS !== ___WEBPACK_IMPORTED_MODULE_5__["Models"].Purchase.Payment.FUNC_STATUS.SUCCESS) {
                yield this.paymentService.exec({
                    func: ___WEBPACK_IMPORTED_MODULE_5__["Models"].Purchase.Payment.FUNC_CODE.EMONEY.INTERRUPTION,
                });
                throw new Error(JSON.stringify(execResult));
            }
            this.onSubmit();
        });
    }
    /**
     * コード
     */
    code() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.actionService.user.getData();
            if (user.payment === undefined
                || user.payment.code === undefined) {
                throw new Error('payment undefined');
            }
            yield this.paymentService.init({
                ipAddress: user.payment.code.ipAddress
            });
            const execResult = yield this.paymentService.exec({
                func: ___WEBPACK_IMPORTED_MODULE_5__["Models"].Purchase.Payment.FUNC_CODE.CODE.SETTLEMENT,
                options: {
                    JOB: ___WEBPACK_IMPORTED_MODULE_5__["Models"].Purchase.Payment.JOB.CAPTURE,
                    ORDERID: moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYYMMDDHHmmsss'),
                    AMOUNT: String(this.amount),
                    MACHINE_CODE: '',
                }
            });
            if (execResult.FUNC_STATUS === ___WEBPACK_IMPORTED_MODULE_5__["Models"].Purchase.Payment.FUNC_STATUS.APP_CANCEL
                || execResult.FUNC_STATUS === ___WEBPACK_IMPORTED_MODULE_5__["Models"].Purchase.Payment.FUNC_STATUS.MACHINE_CANCEL) {
                this.router.navigate(['/purchase/payment']);
                return;
            }
            if (execResult.FUNC_STATUS !== ___WEBPACK_IMPORTED_MODULE_5__["Models"].Purchase.Payment.FUNC_STATUS.SUCCESS) {
                yield this.paymentService.exec({
                    func: ___WEBPACK_IMPORTED_MODULE_5__["Models"].Purchase.Payment.FUNC_CODE.CODE.INTERRUPTION,
                });
                throw new Error(JSON.stringify(execResult));
            }
            this.onSubmit();
        });
    }
    /**
     * 確定
     */
    onSubmit() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const purchase = yield this.actionService.purchase.getData();
                const user = yield this.actionService.user.getData();
                const profile = user.customerContact;
                const seller = purchase.seller;
                if (profile === undefined
                    || seller === undefined) {
                    throw new Error('profile or seller undefined');
                }
                if (purchase.pendingMovieTickets.length > 0) {
                    yield this.actionService.purchase.authorizeMovieTicket({ seller });
                }
                if (purchase.paymentMethod !== undefined) {
                    yield this.actionService.purchase.authorizeAnyPayment({ amount: this.amount });
                }
                yield this.actionService.purchase.registerContact(profile);
                yield this.actionService.purchase.endTransaction({ seller, language: user.language });
                this.utilService.loadStart({ process: 'load' });
                if (((_a = purchase.paymentMethod) === null || _a === void 0 ? void 0 : _a.typeOf) === this.paymentMethodType.Cash) {
                    // 現金
                    yield this.epsonEPOSService.cashchanger.endDeposit();
                    if ((this.deposit - this.amount) > 0) {
                        yield this.epsonEPOSService.cashchanger.dispenseChange({ amount: (this.deposit - this.amount) });
                    }
                    yield this.epsonEPOSService.cashchanger.disconnect();
                }
                this.router.navigate(['/purchase/complete']);
                this.utilService.loadEnd();
            }
            catch (error) {
                this.utilService.loadStart({ process: 'load' });
                yield this.epsonEPOSService.cashchanger.endDepositRepay();
                yield this.epsonEPOSService.cashchanger.disconnect();
                this.utilService.loadEnd();
                console.error(error);
                this.router.navigate(['/error']);
            }
        });
    }
    /**
     * 決済選択へ戻る
     */
    prev() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { payment } = yield this.actionService.user.getData();
                if (payment !== undefined
                    && payment.cash !== undefined) {
                    yield this.actionService.purchase.depositRepay({ ipAddress: payment.cash.ipAddress });
                }
                this.router.navigate(['/purchase/payment']);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
PurchasePaymentReceptionComponent.ɵfac = function PurchasePaymentReceptionComponent_Factory(t) { return new (t || PurchasePaymentReceptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["EpsonEPOSService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["PaymentService"])); };
PurchasePaymentReceptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchasePaymentReceptionComponent, selectors: [["app-purchase-payment-reception"]], decls: 26, vars: 24, consts: [[3, "isClear"], [3, "currentStep"], [1, "contents"], [1, "container", "h-100", "p-3"], [1, "row", "h-100"], [1, "col-3", "h-100"], [1, "bg-dark", "h-100"], [1, "col-6"], [4, "ngIf"], [1, "col-3", "mh-100", "scroll-horizontal"], [3, "purchase", "isAmount"], [1, "position-absolute", "d-flex", "align-items-center", "h-100"], [1, "bg-white", "px-3", "mb-4"], [1, "overflow-hidden"], [1, "py-3", "row", "align-items-center", "border-bottom", "border-gray"], [1, "mb-2", "mb-md-0", "col-md-4"], [1, "col-md-8"], [1, "py-3", "row", "align-items-center"], [1, "mr-auto"], [1, "container", "h-100"], [1, "row", "align-items-center", "justify-content-center", "h-100"], [1, "col-3"], ["type", "button", 1, "btn", "btn-outline-light", "btn-block", "font-weight-bold", "py-2", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "font-weight-bold", "py-2", 3, "disabled", "click"]], template: function PurchasePaymentReceptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-purchase-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PurchasePaymentReceptionComponent_ng_container_8_Template, 24, 21, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PurchasePaymentReceptionComponent_ng_container_10_Template, 2, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PurchasePaymentReceptionComponent_ng_container_12_Template, 2, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-purchase-info", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-transaction-remaining-time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PurchasePaymentReceptionComponent_ng_container_20_Template, 12, 9, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PurchasePaymentReceptionComponent_ng_container_22_Template, 1, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PurchasePaymentReceptionComponent_ng_container_24_Template, 1, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_2_0 = null;
        const currVal_2 = ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 10, ctx.purchase)) == null ? null : tmp_2_0.paymentMethod == null ? null : tmp_2_0.paymentMethod.typeOf) === ctx.paymentMethodType.Cash;
        var tmp_3_0 = null;
        const currVal_3 = ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 12, ctx.purchase)) == null ? null : tmp_3_0.paymentMethod == null ? null : tmp_3_0.paymentMethod.typeOf) === ctx.paymentMethodType.CreditCard;
        var tmp_4_0 = null;
        const currVal_4 = ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 14, ctx.purchase)) == null ? null : tmp_4_0.paymentMethod == null ? null : tmp_4_0.paymentMethod.typeOf) === ctx.paymentMethodType.EMoney;
        var tmp_7_0 = null;
        const currVal_7 = ((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 18, ctx.purchase)) == null ? null : tmp_7_0.paymentMethod == null ? null : tmp_7_0.paymentMethod.typeOf) === ctx.paymentMethodType.Cash;
        var tmp_8_0 = null;
        const currVal_8 = ((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 20, ctx.purchase)) == null ? null : tmp_8_0.paymentMethod == null ? null : tmp_8_0.paymentMethod.typeOf) === ctx.paymentMethodType.CreditCard;
        var tmp_9_0 = null;
        const currVal_9 = ((tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 22, ctx.purchase)) == null ? null : tmp_9_0.paymentMethod == null ? null : tmp_9_0.paymentMethod.typeOf) === ctx.paymentMethodType.EMoney;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentStep", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("purchase", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 16, ctx.purchase))("isAmount", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_9);
    } }, directives: [_shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _parts_step_step_component__WEBPACK_IMPORTED_MODULE_10__["PurchaseStepComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _parts_purchase_info_purchase_info_component__WEBPACK_IMPORTED_MODULE_12__["PurchaseInfoComponent"], _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _parts_transaction_remaining_time_transaction_remaining_time_component__WEBPACK_IMPORTED_MODULE_14__["TransactionRemainingTimeComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchasePaymentReceptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-payment-reception',
                templateUrl: './purchase-payment-reception.component.html',
                styleUrls: ['./purchase-payment-reception.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_7__["ActionService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_7__["UtilService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_7__["EpsonEPOSService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_7__["PaymentService"] }]; }, null); })();


/***/ }),

/***/ "./app/modules/purchase/components/pages/purchase-payment/purchase-payment.component.ts":
/*!**********************************************************************************************!*\
  !*** ./app/modules/purchase/components/pages/purchase-payment/purchase-payment.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PurchasePaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasePaymentComponent", function() { return PurchasePaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cinerino/sdk */ "../../node_modules/@cinerino/sdk/lib/browser.js");
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../.. */ "./app/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services */ "./app/services/index.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../store/reducers */ "./app/store/reducers/index.ts");
/* harmony import */ var _shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/parts/header/header.component */ "./app/modules/shared/components/parts/header/header.component.ts");
/* harmony import */ var _parts_step_step_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../parts/step/step.component */ "./app/modules/purchase/components/parts/step/step.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _parts_purchase_info_purchase_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../parts/purchase-info/purchase-info.component */ "./app/modules/purchase/components/parts/purchase-info/purchase-info.component.ts");
/* harmony import */ var _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/parts/footer/footer.component */ "./app/modules/shared/components/parts/footer/footer.component.ts");
/* harmony import */ var _parts_transaction_remaining_time_transaction_remaining_time_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../parts/transaction-remaining-time/transaction-remaining-time.component */ "./app/modules/purchase/components/parts/transaction-remaining-time/transaction-remaining-time.component.ts");
/* harmony import */ var _shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/pipes/change-language.pipe */ "./app/modules/shared/pipes/change-language.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





















function PurchasePaymentComponent_div_8_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchasePaymentComponent_div_8_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.selectPaymentMethodType(ctx_r8.paymentMethodType.Cash); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "common.paymentMethodType.cash.label"));
} }
function PurchasePaymentComponent_div_8_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchasePaymentComponent_div_8_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.selectPaymentMethodType(ctx_r10.paymentMethodType.CreditCard); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "common.paymentMethodType.creditCard.label"));
} }
function PurchasePaymentComponent_div_8_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchasePaymentComponent_div_8_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.selectPaymentMethodType(ctx_r12.paymentMethodType.EMoney); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "common.paymentMethodType.eMoney.label"));
} }
function PurchasePaymentComponent_div_8_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchasePaymentComponent_div_8_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const custom_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.selectPaymentMethodType(ctx_r15.paymentMethodType.Others, custom_r14.category); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const custom_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, custom_r14.name));
} }
function PurchasePaymentComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PurchasePaymentComponent_div_8_button_3_Template, 4, 3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PurchasePaymentComponent_div_8_button_5_Template, 4, 3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PurchasePaymentComponent_div_8_button_7_Template, 4, 3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PurchasePaymentComponent_div_8_div_8_Template, 5, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isDisplay(ctx_r0.paymentMethodType.Cash));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isDisplay(ctx_r0.paymentMethodType.CreditCard));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isDisplay(ctx_r0.paymentMethodType.EMoney));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.environment.PAYMENT_METHOD_CUSTOM);
} }
function PurchasePaymentComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, "purchase.payment.next"));
} }
function PurchasePaymentComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "purchase.payment.prev"));
} }
function PurchasePaymentComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "purchase.payment.prev"));
} }
class PurchasePaymentComponent {
    constructor(store, router, utilService, actionService, translate) {
        this.store = store;
        this.router = router;
        this.utilService = utilService;
        this.actionService = actionService;
        this.translate = translate;
        this.paymentMethodType = _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__["factory"].chevre.paymentMethodType;
        this.viewType = ___WEBPACK_IMPORTED_MODULE_5__["Models"].Util.ViewType;
        this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["getEnvironment"])();
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.purchase = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_8__["getPurchase"]));
            this.user = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_8__["getUser"]));
            this.amount = 0;
            try {
                const purchase = yield this.actionService.purchase.getData();
                this.amount = ___WEBPACK_IMPORTED_MODULE_5__["Functions"].Purchase.getAmount(purchase.authorizeSeatReservations);
            }
            catch (error) {
                console.error(error);
                this.router.navigate(['/error']);
            }
        });
    }
    /**
     * 決済方法選択
     */
    selectPaymentMethodType(typeOf, category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const seller = (yield this.actionService.purchase.getData()).seller;
                if (seller === undefined
                    || seller.paymentAccepted === undefined) {
                    throw new Error('seller is undefined or paymentAccepted is undefined');
                }
                const findResult = seller.paymentAccepted
                    .find(paymentAccepted => paymentAccepted.paymentMethodType === typeOf);
                if (findResult === undefined) {
                    this.utilService.openAlert({
                        title: this.translate.instant('common.error'),
                        body: this.translate.instant('purchase.payment.alert.notCompatible')
                    });
                    return;
                }
                this.actionService.purchase.selectPaymentMethodType({ typeOf, category });
                this.router.navigate(['/purchase/payment/reception']);
            }
            catch (error) {
                this.router.navigate(['/error']);
                console.error(error);
            }
        });
    }
    /**
     * 表示判定
     */
    isDisplay(paymentMethodType) {
        const findResult = this.environment.PAYMENT_METHOD_TO_USE.find(p => p === paymentMethodType);
        return (findResult !== undefined);
    }
}
PurchasePaymentComponent.ɵfac = function PurchasePaymentComponent_Factory(t) { return new (t || PurchasePaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
PurchasePaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchasePaymentComponent, selectors: [["app-purchase-payment"]], decls: 25, vars: 13, consts: [[3, "isClear"], [3, "currentStep"], [1, "contents"], [1, "container", "h-100", "p-3"], [1, "row", "h-100"], [1, "col-3", "h-100"], [1, "bg-dark", "h-100"], [1, "col-6"], ["class", "container px-0", 4, "ngIf"], [1, "col-3", "mh-100", "scroll-horizontal"], [3, "purchase", "isAmount"], [1, "position-absolute", "d-flex", "align-items-center", "h-100"], [1, "container", "h-100"], [1, "row", "align-items-center", "justify-content-center", "h-100"], [1, "col-3"], [4, "ngIf"], ["type", "submit", "disabled", "", 1, "btn", "btn-primary", "btn-block", "font-weight-bold", "py-2"], [1, "container", "px-0"], [1, "row"], [1, "col-6", "mb-3"], ["type", "button", "class", "btn btn-primary btn-block py-3", 3, "click", 4, "ngIf"], ["class", "col-6 mb-3", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", "btn-block", "py-3", 3, "click"], [1, "row", "justify-content-center"], ["type", "button", "routerLink", "/purchase/payment/reception", 1, "btn", "btn-primary", "btn-block", "py-3"], ["type", "button", "routerLink", "/purchase/cinema/ticket", 1, "btn", "btn-outline-light", "btn-block", "font-weight-bold", "py-2"], ["type", "button", "routerLink", "/purchase/event/ticket", 1, "btn", "btn-outline-light", "btn-block", "font-weight-bold", "py-2"]], template: function PurchasePaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-purchase-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PurchasePaymentComponent_div_8_Template, 9, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PurchasePaymentComponent_div_9_Template, 7, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-purchase-info", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-transaction-remaining-time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PurchasePaymentComponent_div_19_Template, 4, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PurchasePaymentComponent_div_20_Template, 4, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentStep", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.amount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.amount === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("purchase", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, ctx.purchase))("isAmount", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.environment.VIEW_TYPE === ctx.viewType.Cinema);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.environment.VIEW_TYPE === ctx.viewType.Event);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 11, "purchase.payment.next"));
    } }, directives: [_shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _parts_step_step_component__WEBPACK_IMPORTED_MODULE_10__["PurchaseStepComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _parts_purchase_info_purchase_info_component__WEBPACK_IMPORTED_MODULE_12__["PurchaseInfoComponent"], _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _parts_transaction_remaining_time_transaction_remaining_time_component__WEBPACK_IMPORTED_MODULE_14__["TransactionRemainingTimeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_15__["ChangeLanguagePipe"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchasePaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-payment',
                templateUrl: './purchase-payment.component.html',
                styleUrls: ['./purchase-payment.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_7__["UtilService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_7__["ActionService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./app/modules/purchase/components/pages/purchase-root/purchase-root.component.ts":
/*!****************************************************************************************!*\
  !*** ./app/modules/purchase/components/pages/purchase-root/purchase-root.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PurchaseRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseRootComponent", function() { return PurchaseRootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../.. */ "./app/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services */ "./app/services/index.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../store/reducers */ "./app/store/reducers/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











class PurchaseRootComponent {
    constructor(store, actionService, router) {
        this.store = store;
        this.actionService = actionService;
        this.router = router;
        this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["getEnvironment"])();
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.user = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["getUser"]));
            this.purchase = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["getPurchase"]));
            try {
                const purchase = yield this.actionService.purchase.getData();
                if (purchase.transaction !== undefined) {
                    yield this.actionService.purchase.cancelTransaction();
                }
                this.actionService.purchase.delete();
                if (this.environment.VIEW_TYPE === ___WEBPACK_IMPORTED_MODULE_3__["Models"].Util.ViewType.Cinema) {
                    this.router.navigate(['/purchase/cinema']);
                    return;
                }
                this.router.navigate(['/purchase/event/schedule']);
            }
            catch (error) {
                console.error(error);
                this.router.navigate(['/error']);
            }
        });
    }
}
PurchaseRootComponent.ɵfac = function PurchaseRootComponent_Factory(t) { return new (t || PurchaseRootComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_5__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PurchaseRootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseRootComponent, selectors: [["app-purchase-root"]], decls: 0, vars: 0, template: function PurchaseRootComponent_Template(rf, ctx) { }, styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseRootComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-root',
                templateUrl: './purchase-root.component.html',
                styleUrls: ['./purchase-root.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _services__WEBPACK_IMPORTED_MODULE_5__["ActionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./app/modules/purchase/components/pages/purchase-seat/purchase-seat.component.ts":
/*!****************************************************************************************!*\
  !*** ./app/modules/purchase/components/pages/purchase-seat/purchase-seat.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PurchaseSeatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseSeatComponent", function() { return PurchaseSeatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cinerino/sdk */ "../../node_modules/@cinerino/sdk/lib/browser.js");
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../.. */ "./app/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _models_purchase_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../models/purchase/screen */ "./app/models/purchase/screen.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../services */ "./app/services/index.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../store/reducers */ "./app/store/reducers/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};















class PurchaseSeatComponent {
    constructor(store, utilService, translate, router, actionService) {
        this.store = store;
        this.utilService = utilService;
        this.translate = translate;
        this.router = router;
        this.actionService = actionService;
        this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["getEnvironment"])();
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.purchase = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getPurchase"]));
            this.user = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getUser"]));
            this.isLoading = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getLoading"]));
            this.translateName = (this.environment.VIEW_TYPE === 'cinema')
                ? 'purchase.cinema.seat' : 'purchase.event.seat';
            this.screeningEventSeats = [];
            try {
                const purchase = yield this.actionService.purchase.getData();
                const screeningEvent = purchase.screeningEvent;
                const seller = purchase.seller;
                if (screeningEvent === undefined || seller === undefined) {
                    this.router.navigate(['/error']);
                    return;
                }
                const reservations = purchase.reservations;
                yield this.resetSeats();
                reservations.forEach(r => {
                    if (r.seat === undefined) {
                        return;
                    }
                    this.selectSeat({ seat: r.seat, status: ___WEBPACK_IMPORTED_MODULE_5__["Models"].Purchase.Screen.SeatStatus.Default });
                });
                yield this.actionService.purchase.getScreen({
                    branchCode: { $eq: screeningEvent.location.branchCode },
                    containedInPlace: {
                        branchCode: { $eq: screeningEvent.superEvent.location.branchCode }
                    }
                });
                this.screeningEventSeats = yield this.actionService.purchase.getScreeningEventSeats();
                yield this.actionService.purchase.getTicketList({ seller });
            }
            catch (error) {
                console.error(error);
                this.router.navigate(['/error']);
            }
        });
    }
    /**
     * 座席選択
     */
    selectSeat(data) {
        if (data.status === _models_purchase_screen__WEBPACK_IMPORTED_MODULE_7__["SeatStatus"].Default) {
            this.actionService.purchase.selectSeats([data.seat]);
        }
        else {
            this.actionService.purchase.cancelSeats([data.seat]);
        }
    }
    /**
     * 全席選択
     */
    allSelectSeats() {
        return __awaiter(this, void 0, void 0, function* () {
            const seats = [];
            const purchase = yield this.actionService.purchase.getData();
            const screeningEventSeats = this.screeningEventSeats;
            screeningEventSeats.forEach((s) => {
                if (s.offers === undefined
                    || s.offers[0].availability !== _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__["factory"].chevre.itemAvailability.InStock
                    || s.containedInPlace === undefined) {
                    return;
                }
                seats.push({
                    typeOf: s.typeOf,
                    seatingType: (s.seatingType === undefined)
                        ? '' : s.seatingType,
                    seatNumber: s.branchCode,
                    seatRow: '',
                    seatSection: (s.containedInPlace.branchCode === undefined) ? '' : s.containedInPlace.branchCode,
                    offers: s.offers
                });
            });
            if (purchase.authorizeSeatReservation !== undefined
                && purchase.authorizeSeatReservation.result !== undefined
                && purchase.authorizeSeatReservation.result.responseBody.object.reservations !== undefined) {
                purchase.authorizeSeatReservation.result.responseBody.object.reservations.forEach((r) => {
                    if (r.reservedTicket.ticketedSeat === undefined) {
                        return;
                    }
                    seats.push(r.reservedTicket.ticketedSeat);
                });
            }
            this.actionService.purchase.selectSeats(seats);
        });
    }
    /**
     * 全席選択解除
     */
    resetSeats() {
        return __awaiter(this, void 0, void 0, function* () {
            const seats = [];
            const purchase = yield this.actionService.purchase.getData();
            purchase.reservations.forEach((reservation) => {
                if (reservation.seat === undefined) {
                    return;
                }
                seats.push(reservation.seat);
            });
            this.actionService.purchase.cancelSeats(seats);
        });
    }
    /**
     * 自由席予約可能数計算
     */
    remainingAttendeeCapacityValue(params) {
        const screeningEventSeats = params.screeningEventSeats;
        const screeningEvent = params.screeningEvent;
        const values = [];
        if (screeningEvent === undefined) {
            return values;
        }
        let limit = Number(this.environment.PURCHASE_ITEM_MAX_LENGTH);
        if (new ___WEBPACK_IMPORTED_MODULE_5__["Models"].Purchase.Performance(screeningEvent).isTicketedSeat()) {
            // イベント全体の残席数計算
            const screeningEventLimit = ___WEBPACK_IMPORTED_MODULE_5__["Functions"].Purchase.getRemainingSeatLength({
                screeningEventSeats, screeningEvent
            });
            if (limit > screeningEventLimit) {
                limit = screeningEventLimit;
            }
        }
        for (let i = 0; i < limit; i++) {
            values.push(i + 1);
        }
        return values;
    }
    /**
     * 自由席選択
     */
    selectOpenSeating(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (event.target === null) {
                return;
            }
            const purchaseData = yield this.actionService.purchase.getData();
            const value = Number(event.target.value);
            const reservations = purchaseData.reservations;
            const screeningEventSeats = this.screeningEventSeats;
            const seats = ___WEBPACK_IMPORTED_MODULE_5__["Functions"].Purchase.getEmptySeat({ reservations, screeningEventSeats });
            yield this.resetSeats();
            const selectSeats = [];
            for (let i = 0; i < value; i++) {
                selectSeats.push(seats[i]);
            }
            this.actionService.purchase.selectSeats(selectSeats);
        });
    }
    /**
     * onSubmit
     */
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            const purchase = yield this.actionService.purchase.getData();
            const reservations = purchase.reservations;
            const screeningEventTicketOffers = purchase.screeningEventTicketOffers;
            if (reservations.length === 0) {
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: this.translate.instant(`${this.translateName}.alert.unselected`)
                });
                return;
            }
            if (reservations.length > Number(this.environment.PURCHASE_ITEM_MAX_LENGTH)) {
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: this.translate.instant(`${this.translateName}.alert.limit`, { value: this.environment.PURCHASE_ITEM_MAX_LENGTH })
                });
                return;
            }
            if (screeningEventTicketOffers.length === 0) {
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: this.translate.instant(`${this.translateName}.alert.ticketNotfound`)
                });
                return;
            }
            try {
                yield this.actionService.purchase.temporaryReservation({
                    reservations,
                    screeningEventSeats: this.screeningEventSeats
                });
                const navigate = (this.environment.VIEW_TYPE === 'cinema')
                    ? '/purchase/cinema/ticket'
                    : '/purchase/event/seat/ticket';
                this.router.navigate([navigate]);
            }
            catch (error) {
                console.error(error);
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: `<p class="mb-4">${this.translate.instant(`${this.translateName}.alert.temporaryReservation`)}</p>
                <div class="p-3 bg-light-gray select-text">
                <code>${error}</code>
            </div>`
                });
            }
        });
    }
}
PurchaseSeatComponent.ɵfac = function PurchaseSeatComponent_Factory(t) { return new (t || PurchaseSeatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["ActionService"])); };
PurchaseSeatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseSeatComponent, selectors: [["app-purchase-seat"]], decls: 0, vars: 0, template: function PurchaseSeatComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseSeatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-seat',
                template: ''
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _services__WEBPACK_IMPORTED_MODULE_8__["UtilService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_8__["ActionService"] }]; }, null); })();


/***/ }),

/***/ "./app/modules/purchase/components/pages/purchase-ticket/purchase-ticket.component.ts":
/*!********************************************************************************************!*\
  !*** ./app/modules/purchase/components/pages/purchase-ticket/purchase-ticket.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PurchaseTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseTicketComponent", function() { return PurchaseTicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cinerino/sdk */ "../../node_modules/@cinerino/sdk/lib/browser.js");
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "../../node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../.. */ "./app/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../services */ "./app/services/index.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../store/reducers */ "./app/store/reducers/index.ts");
/* harmony import */ var _shared_components_parts_movie_ticket_check_modal_check_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/parts/movie-ticket/check-modal/check-modal.component */ "./app/modules/shared/components/parts/movie-ticket/check-modal/check-modal.component.ts");
/* harmony import */ var _shared_components_parts_purchase_seat_ticket_modal_seat_ticket_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/parts/purchase/seat-ticket-modal/seat-ticket-modal.component */ "./app/modules/shared/components/parts/purchase/seat-ticket-modal/seat-ticket-modal.component.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


















class PurchaseTicketComponent {
    constructor(store, router, modal, actionService, utilService, translate) {
        this.store = store;
        this.router = router;
        this.modal = modal;
        this.actionService = actionService;
        this.utilService = utilService;
        this.translate = translate;
        this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["getEnvironment"])();
    }
    ngOnInit() {
        this.purchase = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getPurchase"]));
        this.user = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getUser"]));
        this.isLoading = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getLoading"]));
        this.translateName = (this.environment.VIEW_TYPE === 'cinema')
            ? 'purchase.cinema.ticket' : 'purchase.event.seatTicket';
        this.additionalTicketText = '';
    }
    /**
     * 確定
     */
    onSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            const purchase = yield this.actionService.purchase.getData();
            const transaction = purchase.transaction;
            const screeningEvent = purchase.screeningEvent;
            const reservations = purchase.reservations;
            if (transaction === undefined
                || screeningEvent === undefined) {
                this.router.navigate(['/error']);
                return;
            }
            const unselectedReservations = reservations.filter((reservation) => {
                return (reservation.ticket === undefined);
            });
            if (unselectedReservations.length > 0) {
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: this.translate.instant(`${this.translateName}.alert.unselected`)
                });
                return;
            }
            const validResult = reservations.filter((reservation) => {
                if (reservation.ticket === undefined) {
                    return false;
                }
                const priceComponent = reservation.ticket.ticketOffer.priceSpecification.priceComponent;
                const UnitPriceSpecification = _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__["factory"].chevre.priceSpecificationType.UnitPriceSpecification;
                const unitPriceSpecifications = priceComponent.filter(p => p.typeOf === UnitPriceSpecification);
                const filterResult = reservations.filter((targetReservation) => {
                    return (reservation.ticket !== undefined
                        && targetReservation.ticket !== undefined
                        && reservation.ticket.ticketOffer.id === targetReservation.ticket.ticketOffer.id);
                });
                const findResult = unitPriceSpecifications.find((unitPriceSpecification) => {
                    const value = (unitPriceSpecification.typeOf === UnitPriceSpecification
                        && unitPriceSpecification.referenceQuantity.value !== undefined)
                        ? unitPriceSpecification.referenceQuantity.value : 1;
                    return (filterResult.length % value !== 0);
                });
                return (findResult !== undefined);
            });
            if (validResult.length > 0) {
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: this.translate.instant(`${this.translateName}.alert.ticketCondition`)
                });
                return;
            }
            try {
                const additionalTicketText = this.additionalTicketText;
                const screeningEventSeats = yield this.actionService.purchase.getScreeningEventSeats();
                yield this.actionService.purchase.temporaryReservation({
                    reservations,
                    additionalTicketText,
                    screeningEventSeats
                });
                const navigate = (this.environment.VIEW_TYPE === 'cinema')
                    ? '/purchase/payment'
                    : '/purchase/event/ticket';
                this.router.navigate([navigate]);
            }
            catch (error) {
                console.error(error);
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: `
                <p class="mb-4">${this.translate.instant(`${this.translateName}.alert.temporaryReservation`)}</p>
                <div class="p-3 bg-light-gray select-text text-left">
                    <code>${error}</code>
                </div>`
                });
            }
        });
    }
    /**
     * 券種一覧表示
     */
    openTicketList(reservation) {
        return __awaiter(this, void 0, void 0, function* () {
            const purchase = yield this.actionService.purchase.getData();
            this.modal.show(_shared_components_parts_purchase_seat_ticket_modal_seat_ticket_modal_component__WEBPACK_IMPORTED_MODULE_11__["PurchaseSeatTicketModalComponent"], {
                class: 'modal-dialog-centered modal-lg',
                initialState: {
                    authorizeSeatReservation: purchase.authorizeSeatReservation,
                    screeningEventTicketOffers: purchase.screeningEventTicketOffers,
                    checkMovieTicketActions: purchase.checkMovieTicketActions,
                    reservations: purchase.reservations,
                    reservation: reservation,
                    pendingMovieTickets: purchase.pendingMovieTickets,
                    cb: (ticket) => {
                        if (reservation === undefined) {
                            const reservations = ___WEBPACK_IMPORTED_MODULE_6__["Functions"].Util.deepCopy(purchase.reservations);
                            reservations.forEach(r => r.ticket = ticket);
                            this.actionService.purchase.selectTickets(reservations);
                            return;
                        }
                        this.actionService.purchase.selectTickets([Object.assign(Object.assign({}, reservation), { ticket })]);
                    }
                },
            });
        });
    }
    /**
     * ムビチケ認証表示
     */
    openMovieTicket(paymentMethodType) {
        this.modal.show(_shared_components_parts_movie_ticket_check_modal_check_modal_component__WEBPACK_IMPORTED_MODULE_10__["MovieTicketCheckModalComponent"], {
            initialState: {
                paymentMethodType
            },
            class: 'modal-dialog-centered'
        });
    }
}
PurchaseTicketComponent.ɵfac = function PurchaseTicketComponent_Factory(t) { return new (t || PurchaseTicketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
PurchaseTicketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseTicketComponent, selectors: [["app-purchase-ticket"]], decls: 0, vars: 0, template: function PurchaseTicketComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseTicketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-ticket',
                template: ''
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_8__["ActionService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_8__["UtilService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./app/modules/purchase/components/parts/event/performances-confirm/performances-confirm.component.ts":
/*!************************************************************************************************************!*\
  !*** ./app/modules/purchase/components/parts/event/performances-confirm/performances-confirm.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: PurchaseEventPerformancesConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseEventPerformancesConfirmComponent", function() { return PurchaseEventPerformancesConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../.. */ "./app/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/pipes/change-language.pipe */ "./app/modules/shared/pipes/change-language.pipe.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");







function PurchaseEventPerformancesConfirmComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.screeningEventsGroup.info.superEvent.headline), "");
} }
function PurchaseEventPerformancesConfirmComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.screeningEventsGroup.info.superEvent.description));
} }
function PurchaseEventPerformancesConfirmComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "common.duration"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.moment.duration(ctx_r2.screeningEventsGroup.info.workPerformed == null ? null : ctx_r2.screeningEventsGroup.info.workPerformed.duration).asMinutes(), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "common.date.minute"), "");
} }
function PurchaseEventPerformancesConfirmComponent_div_13_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PurchaseEventPerformancesConfirmComponent_div_13_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PurchaseEventPerformancesConfirmComponent_div_13_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PurchaseEventPerformancesConfirmComponent_div_13_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PurchaseEventPerformancesConfirmComponent_div_13_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PurchaseEventPerformancesConfirmComponent_div_13_div_4_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PurchaseEventPerformancesConfirmComponent_div_13_div_4_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PurchaseEventPerformancesConfirmComponent_div_13_div_4_div_3_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PurchaseEventPerformancesConfirmComponent_div_13_div_4_div_4_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const performance_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", performance_r4.isSeatStatus("success"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", performance_r4.isSeatStatus("warning"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", performance_r4.isSeatStatus("danger"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", performance_r4.isSeatStatus());
} }
function PurchaseEventPerformancesConfirmComponent_div_13_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PurchaseEventPerformancesConfirmComponent_div_13_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "purchase.event.schedule.status.endSale"), "");
} }
function PurchaseEventPerformancesConfirmComponent_div_13_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "purchase.event.schedule.status.outsideSalesPeriod"), "");
} }
const _c0 = function (a0) { return { "text-dark-gray": a0 }; };
function PurchaseEventPerformancesConfirmComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PurchaseEventPerformancesConfirmComponent_div_13_div_4_Template, 5, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PurchaseEventPerformancesConfirmComponent_div_13_div_5_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PurchaseEventPerformancesConfirmComponent_div_13_div_6_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PurchaseEventPerformancesConfirmComponent_div_13_div_7_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const performance_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, !performance_r4.isSales() || performance_r4.isSeatStatus("danger")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r3.moment(performance_r4.screeningEvent.startDate).format("HH:mm"), "-", ctx_r3.moment(performance_r4.screeningEvent.endDate).format("HH:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", performance_r4.isSales() && !performance_r4.isInfinitetock());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", performance_r4.isSales() && performance_r4.isInfinitetock());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", performance_r4.isSales("end"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", performance_r4.isSales("start"));
} }
class PurchaseEventPerformancesConfirmComponent {
    constructor() {
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moment = moment__WEBPACK_IMPORTED_MODULE_1__;
    }
    ngOnInit() { }
}
PurchaseEventPerformancesConfirmComponent.ɵfac = function PurchaseEventPerformancesConfirmComponent_Factory(t) { return new (t || PurchaseEventPerformancesConfirmComponent)(); };
PurchaseEventPerformancesConfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseEventPerformancesConfirmComponent, selectors: [["app-purchase-event-performances-confirm"]], inputs: { screeningEventsGroup: "screeningEventsGroup", readonly: "readonly" }, outputs: { select: "select" }, decls: 14, vars: 13, consts: [[1, "bg-gray", "p-3"], [1, "mb-2"], [1, "font-weight-bold", "text-large"], ["class", "text-small", 4, "ngIf"], [1, "d-flex", "align-items-center"], ["class", "text-small ml-auto", 4, "ngIf"], [1, "p-3", "bg-white", "d-flex", "flex-wrap"], ["class", "performance my-2", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "text-small"], [1, "text-small", "ml-auto"], [1, "mr-1"], [1, "performance", "my-2", 3, "ngClass"], [1, "mr-2", "font-weight-bold"], ["class", "status", 4, "ngIf"], ["class", "status text-x-small", 4, "ngIf"], [1, "status"], [4, "ngIf"], ["class", "d-flex justify-content-around align-items-center", 4, "ngIf"], ["src", "/assets/images/icon/status_success.svg", "alt", ""], [1, "d-flex", "justify-content-around", "align-items-center"], ["src", "/assets/images/icon/status_warning.svg", "alt", ""], ["src", "/assets/images/icon/status_danger_color.svg", "alt", ""], ["src", "/assets/images/icon/status_undefined.svg", "alt", ""], [1, "status", "text-x-small"]], template: function PurchaseEventPerformancesConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "changeLanguage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PurchaseEventPerformancesConfirmComponent_p_6_Template, 3, 3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "changeLanguage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PurchaseEventPerformancesConfirmComponent_p_8_Template, 3, 3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "changeLanguage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PurchaseEventPerformancesConfirmComponent_div_11_Template, 6, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PurchaseEventPerformancesConfirmComponent_div_13_Template, 8, 9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx.screeningEventsGroup.info.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screeningEventsGroup.info.superEvent.headline && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, ctx.screeningEventsGroup.info.superEvent.headline));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screeningEventsGroup.info.superEvent.description && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 11, ctx.screeningEventsGroup.info.superEvent.description));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.screeningEventsGroup.info.workPerformed == null ? null : ctx.screeningEventsGroup.info.workPerformed.duration) && ctx.moment.duration(ctx.screeningEventsGroup.info.workPerformed == null ? null : ctx.screeningEventsGroup.info.workPerformed.duration).asMinutes() > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("not-event", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.screeningEventsGroup.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_4__["ChangeLanguagePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.performance[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n@media (max-width: 767.98px) {\n  .performance[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n.status[_ngcontent-%COMP%] {\n  line-height: 15px;\n}\n\n.status[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseEventPerformancesConfirmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-event-performances-confirm',
                templateUrl: './performances-confirm.component.html',
                styleUrls: ['./performances-confirm.component.scss']
            }]
    }], function () { return []; }, { screeningEventsGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./app/modules/purchase/components/parts/movie-tickets/movie-tickets.component.ts":
/*!****************************************************************************************!*\
  !*** ./app/modules/purchase/components/parts/movie-tickets/movie-tickets.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MovieTicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieTicketsComponent", function() { return MovieTicketsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cinerino/sdk */ "../../node_modules/@cinerino/sdk/lib/browser.js");
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cinerino_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../.. */ "./app/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../models */ "./app/models/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









function MovieTicketsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieTicketsComponent_div_0_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.select.emit(ctx_r3.paymentMethodType.MovieTicket); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "common.paymentMethodType.movieTicket.use"));
} }
function MovieTicketsComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieTicketsComponent_div_0_div_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.select.emit(ctx_r5.paymentMethodType.MGTicket); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "common.paymentMethodType.mgTicket.use"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, "common.paymentMethodType.mgTicket.label"));
} }
function MovieTicketsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieTicketsComponent_div_0_div_1_Template, 7, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieTicketsComponent_div_0_div_2_Template, 9, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isMovieTicket);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isMGTicket);
} }
class MovieTicketsComponent {
    constructor() {
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.paymentMethodType = _cinerino_sdk__WEBPACK_IMPORTED_MODULE_1__["factory"].paymentMethodType;
        this.moment = moment__WEBPACK_IMPORTED_MODULE_2__;
        this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["getEnvironment"])();
        this.viewType = _models__WEBPACK_IMPORTED_MODULE_5__["Util"].ViewType;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const screeningEventTicketOffers = this.screeningEventTicketOffers;
            const movieTicketTypeOffers = ___WEBPACK_IMPORTED_MODULE_3__["Functions"].Purchase.getMovieTicketTypeOffers({ screeningEventTicketOffers });
            this.isMovieTicket = (movieTicketTypeOffers.find(m => {
                const findResult = m.priceSpecification.priceComponent.find(p => {
                    var _a, _b;
                    return (p.typeOf === _cinerino_sdk__WEBPACK_IMPORTED_MODULE_1__["factory"].chevre.priceSpecificationType.UnitPriceSpecification
                        && ((_b = (_a = p.appliesToMovieTicket) === null || _a === void 0 ? void 0 : _a.serviceOutput) === null || _b === void 0 ? void 0 : _b.typeOf) === _cinerino_sdk__WEBPACK_IMPORTED_MODULE_1__["factory"].chevre.paymentMethodType.MovieTicket);
                });
                return findResult !== undefined;
            }) !== undefined);
            this.isMGTicket = (movieTicketTypeOffers.find(m => {
                const findResult = m.priceSpecification.priceComponent.find(p => {
                    var _a, _b;
                    return (p.typeOf === _cinerino_sdk__WEBPACK_IMPORTED_MODULE_1__["factory"].chevre.priceSpecificationType.UnitPriceSpecification
                        && ((_b = (_a = p.appliesToMovieTicket) === null || _a === void 0 ? void 0 : _a.serviceOutput) === null || _b === void 0 ? void 0 : _b.typeOf) === _cinerino_sdk__WEBPACK_IMPORTED_MODULE_1__["factory"].chevre.paymentMethodType.MGTicket);
                });
                return findResult !== undefined;
            }) !== undefined);
        });
    }
}
MovieTicketsComponent.ɵfac = function MovieTicketsComponent_Factory(t) { return new (t || MovieTicketsComponent)(); };
MovieTicketsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieTicketsComponent, selectors: [["app-movie-tickets"]], inputs: { screeningEventTicketOffers: "screeningEventTicketOffers" }, outputs: { select: "select" }, decls: 1, vars: 1, consts: [["class", "mb-4 container bg-white", 4, "ngIf"], [1, "mb-4", "container", "bg-white"], ["class", "py-3 row align-items-center movieticket", 4, "ngIf"], ["class", "py-3 row align-items-center mgticket", 4, "ngIf"], [1, "py-3", "row", "align-items-center", "movieticket"], [1, "col-12", "col-md-6", "mb-2", "mb-md-0"], [1, "col-12", "col-md-6"], ["type", "button", 1, "btn", "btn-block", "bg-white", "border", "border-gray", "py-3", 3, "click"], ["src", "/assets/images/mvtk.svg", "height", "34", "alt", ""], [1, "py-3", "row", "align-items-center", "mgticket"], [1, "font-weight-bold", "text-large"]], template: function MovieTicketsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieTicketsComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMovieTicket || ctx.isMovieTicket);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieTicketsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-tickets',
                templateUrl: './movie-tickets.component.html',
                styleUrls: ['./movie-tickets.component.scss']
            }]
    }], function () { return []; }, { screeningEventTicketOffers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./app/modules/purchase/components/parts/performance/performance.component.ts":
/*!************************************************************************************!*\
  !*** ./app/modules/purchase/components/parts/performance/performance.component.ts ***!
  \************************************************************************************/
/*! exports provided: PurchasePerformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasePerformanceComponent", function() { return PurchasePerformanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../.. */ "./app/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/pipes/change-language.pipe */ "./app/modules/shared/pipes/change-language.pipe.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








function PurchasePerformanceComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.performance.screeningEvent.location.address), "");
} }
function PurchasePerformanceComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "common.performance.status.success"), "");
} }
function PurchasePerformanceComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "common.performance.status.warning"), "");
} }
function PurchasePerformanceComponent_div_15_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "common.performance.status.danger"), "");
} }
function PurchasePerformanceComponent_div_15_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "common.performance.status.success"), "");
} }
function PurchasePerformanceComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PurchasePerformanceComponent_div_15_div_1_Template, 5, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PurchasePerformanceComponent_div_15_div_2_Template, 5, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PurchasePerformanceComponent_div_15_div_3_Template, 5, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PurchasePerformanceComponent_div_15_div_4_Template, 5, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.performance.isSeatStatus("success"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.performance.isSeatStatus("warning"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.performance.isSeatStatus("danger"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.performance.isSeatStatus());
} }
function PurchasePerformanceComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "common.performance.status.endSale"), "");
} }
function PurchasePerformanceComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "common.performance.status.outsideSalesPeriod"), "");
} }
function PurchasePerformanceComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "common.performance.status.success"), "");
} }
const _c0 = function (a0, a1) { return { "bg-white": a0, "bg-dark-gray text-light-gray not-event": a1 }; };
class PurchasePerformanceComponent {
    constructor() {
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moment = moment__WEBPACK_IMPORTED_MODULE_1__;
        this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["getEnvironment"])();
        this.viewType = ___WEBPACK_IMPORTED_MODULE_2__["Models"].Util.ViewType;
    }
    ngOnInit() {
    }
}
PurchasePerformanceComponent.ɵfac = function PurchasePerformanceComponent_Factory(t) { return new (t || PurchasePerformanceComponent)(); };
PurchasePerformanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchasePerformanceComponent, selectors: [["app-purchase-performance"]], inputs: { performance: "performance" }, outputs: { select: "select" }, decls: 19, vars: 16, consts: [[1, "mx-0", "border", "boder-gray", "p-2", "align-items-center", "pointer", "h-100", 3, "ngClass", "click"], [1, "mb-1", "text-center"], [1, "font-weight-bold"], [1, "text-small"], [1, "mb-1", "text-center", "text-small", "screen-name", "text-overflow-ellipsis"], ["class", "mr-2 d-inline-block", 4, "ngIf"], [1, "d-inline-block"], [1, "text-center", "text-small"], ["class", "status", 4, "ngIf"], [1, "mr-2", "d-inline-block"], [1, "status"], ["class", "d-flex justify-content-center align-items-center", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "text-success", "mr-2"], ["src", "/assets/images/icon/status_success.svg", "alt", ""], [1, "text-warning", "mr-2"], ["src", "/assets/images/icon/status_warning.svg", "alt", ""], [1, "mr-2"], ["src", "/assets/images/icon/status_danger.svg", "alt", ""], ["src", "/assets/images/icon/status_undefined.svg", "alt", ""]], template: function PurchasePerformanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchasePerformanceComponent_Template_div_click_0_listener() { return ctx.select.emit(ctx.performance.screeningEvent); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PurchasePerformanceComponent_p_9_Template, 3, 3, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "changeLanguage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "changeLanguage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PurchasePerformanceComponent_div_15_Template, 5, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PurchasePerformanceComponent_div_16_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PurchasePerformanceComponent_div_17_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PurchasePerformanceComponent_div_18_Template, 6, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c0, ctx.performance.isSales() && !ctx.performance.isSeatStatus("danger"), !ctx.performance.isSales() || ctx.performance.isSeatStatus("danger") || ctx.performance.isInfinitetock() && ctx.environment.VIEW_TYPE === ctx.viewType.Cinema));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.moment(ctx.performance.screeningEvent.startDate).format("HH:mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.moment(ctx.performance.screeningEvent.endDate).format("HH:mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, ctx.performance.screeningEvent.location.address));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, ctx.performance.screeningEvent.location.name), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.performance.isSales() && !ctx.performance.isInfinitetock());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.performance.isSales("end"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.performance.isSales("start"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.performance.isSales() && ctx.performance.isInfinitetock());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_5__["ChangeLanguagePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".status[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n.status[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchasePerformanceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-performance',
                templateUrl: './performance.component.html',
                styleUrls: ['./performance.component.scss']
            }]
    }], function () { return []; }, { performance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./app/modules/purchase/components/parts/performances/performances.component.ts":
/*!**************************************************************************************!*\
  !*** ./app/modules/purchase/components/parts/performances/performances.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PurchasePerformancesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasePerformancesComponent", function() { return PurchasePerformancesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../.. */ "./app/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _performance_performance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../performance/performance.component */ "./app/modules/purchase/components/parts/performance/performance.component.ts");
/* harmony import */ var _shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/pipes/change-language.pipe */ "./app/modules/shared/pipes/change-language.pipe.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








function PurchasePerformancesComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.screeningEventsGroup.info.superEvent.headline), "");
} }
function PurchasePerformancesComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.screeningEventsGroup.info.superEvent.description));
} }
function PurchasePerformancesComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.screeningEventsGroup.info.workPerformed == null ? null : ctx_r2.screeningEventsGroup.info.workPerformed.contentRating);
} }
function PurchasePerformancesComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "common.dubbing"));
} }
function PurchasePerformancesComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "common.subtitles"));
} }
function PurchasePerformancesComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "common.duration"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r5.moment.duration(ctx_r5.screeningEventsGroup.info.workPerformed == null ? null : ctx_r5.screeningEventsGroup.info.workPerformed.duration).asMinutes(), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "common.date.minute"), " ");
} }
function PurchasePerformancesComponent_ul_16_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-purchase-performance", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function PurchasePerformancesComponent_ul_16_li_1_Template_app_purchase_performance_select_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.select.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const performance_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("performance", performance_r8);
} }
function PurchasePerformancesComponent_ul_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PurchasePerformancesComponent_ul_16_li_1_Template, 2, 1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.screeningEventsGroup.data);
} }
class PurchasePerformancesComponent {
    constructor() {
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moment = moment__WEBPACK_IMPORTED_MODULE_1__;
    }
    ngOnInit() {
        this.animation = (this.animation === undefined) ? false : this.animation;
    }
}
PurchasePerformancesComponent.ɵfac = function PurchasePerformancesComponent_Factory(t) { return new (t || PurchasePerformancesComponent)(); };
PurchasePerformancesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchasePerformancesComponent, selectors: [["app-purchase-performances"]], inputs: { screeningEventsGroup: "screeningEventsGroup", animation: "animation" }, outputs: { select: "select" }, decls: 17, vars: 14, consts: [[1, ""], [1, "p-2", "bg-gray"], [1, "mb-2"], [1, "font-weight-bold"], [4, "ngIf"], ["class", "text-small", 4, "ngIf"], [1, "d-flex", "align-items-center"], ["class", "text-small bg-dark-gray text-white py-1 px-3 mr-2", 4, "ngIf"], ["class", "text-small ml-auto", 4, "ngIf"], [1, "container", "px-0", "py-2"], ["class", "row animation", 4, "ngIf"], [1, "text-small"], [1, "text-small", "bg-dark-gray", "text-white", "py-1", "px-3", "mr-2"], [1, "text-small", "ml-auto"], [1, "mr-1"], [1, "row", "animation"], ["class", "px-2 my-2", 4, "ngFor", "ngForOf"], [1, "px-2", "my-2"], [1, "mb-3", 3, "performance", "select"]], template: function PurchasePerformancesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "changeLanguage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PurchasePerformancesComponent_p_6_Template, 3, 3, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "changeLanguage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PurchasePerformancesComponent_p_8_Template, 3, 3, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "changeLanguage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PurchasePerformancesComponent_div_11_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PurchasePerformancesComponent_div_12_Template, 3, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PurchasePerformancesComponent_div_13_Template, 3, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PurchasePerformancesComponent_div_14_Template, 6, 7, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PurchasePerformancesComponent_ul_16_Template, 2, 1, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, ctx.screeningEventsGroup.info.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screeningEventsGroup.info.superEvent.headline && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, ctx.screeningEventsGroup.info.superEvent.headline));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screeningEventsGroup.info.superEvent.description && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 12, ctx.screeningEventsGroup.info.superEvent.description));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screeningEventsGroup.info.workPerformed == null ? null : ctx.screeningEventsGroup.info.workPerformed.contentRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screeningEventsGroup.info.superEvent.dubLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screeningEventsGroup.info.superEvent.subtitleLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.screeningEventsGroup.info.workPerformed == null ? null : ctx.screeningEventsGroup.info.workPerformed.duration) && ctx.moment.duration(ctx.screeningEventsGroup.info.workPerformed == null ? null : ctx.screeningEventsGroup.info.workPerformed.duration).asMinutes() > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.animation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _performance_performance_component__WEBPACK_IMPORTED_MODULE_4__["PurchasePerformanceComponent"]], pipes: [_shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_5__["ChangeLanguagePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex: 0 0 20%;\n  max-width: 20%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.animation[_ngcontent-%COMP%] {\n  -webkit-animation: fadeIn 1s both;\n          animation: fadeIn 1s both;\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchasePerformancesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-performances',
                templateUrl: './performances.component.html',
                styleUrls: ['./performances.component.scss']
            }]
    }], function () { return []; }, { screeningEventsGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./app/modules/purchase/components/parts/purchase-info/purchase-info.component.ts":
/*!****************************************************************************************!*\
  !*** ./app/modules/purchase/components/parts/purchase-info/purchase-info.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PurchaseInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseInfoComponent", function() { return PurchaseInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../.. */ "./app/index.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../store/reducers */ "./app/store/reducers/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_parts_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/parts/item-list/item-list.component */ "./app/modules/shared/components/parts/item-list/item-list.component.ts");
/* harmony import */ var _shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/pipes/change-language.pipe */ "./app/modules/shared/pipes/change-language.pipe.ts");
/* harmony import */ var _shared_pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/pipes/format-date.pipe */ "./app/modules/shared/pipes/format-date.pipe.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










function PurchaseInfoComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r0.image + ")");
} }
function PurchaseInfoComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} }
function PurchaseInfoComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.purchase.screeningEvent == null ? null : ctx_r2.purchase.screeningEvent.superEvent.headline), "");
} }
function PurchaseInfoComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.purchase.screeningEvent == null ? null : ctx_r3.purchase.screeningEvent.superEvent.description));
} }
function PurchaseInfoComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r4.purchase.screeningEvent == null ? null : ctx_r4.purchase.screeningEvent.location.address));
} }
function PurchaseInfoComponent_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r5.amount, "JPY"));
} }
function PurchaseInfoComponent_p_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A5-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PurchaseInfoComponent {
    constructor() {
        this.moment = moment__WEBPACK_IMPORTED_MODULE_1__;
        this.getAdditionalProperty = ___WEBPACK_IMPORTED_MODULE_2__["Functions"].Purchase.getAdditionalProperty;
    }
    ngOnInit() {
        var _a, _b;
        const additionalProperty = (_b = (_a = this.purchase.screeningEvent) === null || _a === void 0 ? void 0 : _a.workPerformed) === null || _b === void 0 ? void 0 : _b.additionalProperty;
        this.image = ___WEBPACK_IMPORTED_MODULE_2__["Functions"].Purchase.getAdditionalProperty(additionalProperty, 'posterImage');
        this.amount = (this.isAmount)
            ? ___WEBPACK_IMPORTED_MODULE_2__["Functions"].Purchase.getAmount(this.purchase.authorizeSeatReservations)
            : 0;
    }
}
PurchaseInfoComponent.ɵfac = function PurchaseInfoComponent_Factory(t) { return new (t || PurchaseInfoComponent)(); };
PurchaseInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseInfoComponent, selectors: [["app-purchase-info"]], inputs: { purchase: "purchase", isAmount: "isAmount" }, decls: 31, vars: 31, consts: [[1, "bg-white", "p-3"], [1, "container", "px-0", "mb-2"], [1, "row"], [1, "col-4"], [1, "image"], ["class", "poster", 3, "backgroundImage", 4, "ngIf"], ["class", "poster-no", 4, "ngIf"], [1, "col-8"], [1, "font-weight-bold", "text-small"], ["class", "text-small", 4, "ngIf"], [1, "screen-name", "text-small", "font-weight-bold"], ["class", "mr-2", 4, "ngIf"], [3, "reservations"], [1, "d-flex", "justify-content-between"], ["class", "font-weight-bold", 4, "ngIf"], [1, "poster"], [1, "poster-no"], [1, "text-small"], [1, "mr-2"], [1, "font-weight-bold"]], template: function PurchaseInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PurchaseInfoComponent_div_5_Template, 1, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PurchaseInfoComponent_div_6_Template, 1, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "changeLanguage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PurchaseInfoComponent_p_11_Template, 3, 3, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "changeLanguage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PurchaseInfoComponent_p_13_Template, 3, 3, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "changeLanguage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "formatDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "formatDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PurchaseInfoComponent_span_20_Template, 3, 3, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "changeLanguage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "changeLanguage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-item-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PurchaseInfoComponent_p_29_Template, 3, 4, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PurchaseInfoComponent_p_30_Template, 2, 0, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, ctx.purchase.screeningEvent == null ? null : ctx.purchase.screeningEvent.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.purchase.screeningEvent == null ? null : ctx.purchase.screeningEvent.superEvent.headline) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 15, ctx.purchase.screeningEvent == null ? null : ctx.purchase.screeningEvent.superEvent.headline));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.purchase.screeningEvent == null ? null : ctx.purchase.screeningEvent.superEvent.description) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 17, ctx.purchase.screeningEvent == null ? null : ctx.purchase.screeningEvent.superEvent.description));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 19, ctx.purchase.screeningEvent == null ? null : ctx.purchase.screeningEvent.startDate, "YYYY/MM/DD(ddd) HH:mm"), "-", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 22, ctx.purchase.screeningEvent == null ? null : ctx.purchase.screeningEvent.endDate, "HH:mm"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 25, ctx.purchase.screeningEvent == null ? null : ctx.purchase.screeningEvent.location.address));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 27, ctx.purchase.screeningEvent == null ? null : ctx.purchase.screeningEvent.location.name), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reservations", ctx.purchase.reservations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 29, "common.amount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAmount);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_parts_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_5__["ItemListComponent"]], pipes: [_shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_6__["ChangeLanguagePipe"], _shared_pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_7__["FormatDatePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.image[_ngcontent-%COMP%] {\n  padding-top: calc(100% * 1.41);\n  background-color: #000;\n  position: relative;\n}\n\n.image[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.image[_ngcontent-%COMP%]   .poster-no[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: #cbcbcb;\n  background-image: url(/default/images/noimage.png);\n}\n\n.loading[_ngcontent-%COMP%] {\n  opacity: 1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:after {\n  border-radius: 50%;\n  width: 90px;\n  height: 90px;\n}\n\n.loader[_ngcontent-%COMP%] {\n  position: relative;\n  text-indent: -9999em;\n  border: 3px solid rgba(255, 255, 255, 0.2);\n  border-left-color: #FFF;\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n          animation: load8 1.1s infinite linear;\n}\n\n@-webkit-keyframes load8 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes load8 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-info',
                templateUrl: './purchase-info.component.html',
                styleUrls: ['./purchase-info.component.scss']
            }]
    }], function () { return []; }, { purchase: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./app/modules/purchase/components/parts/purchase-terms/purchase-terms.component.ts":
/*!******************************************************************************************!*\
  !*** ./app/modules/purchase/components/parts/purchase-terms/purchase-terms.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PurchaseTermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseTermsComponent", function() { return PurchaseTermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cinerino/sdk */ "../../node_modules/@cinerino/sdk/lib/browser.js");
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cinerino_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../.. */ "./app/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services */ "./app/services/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class PurchaseTermsComponent {
    constructor(utilService) {
        this.utilService = utilService;
        this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["getEnvironment"])();
    }
    ngOnInit() {
    }
    ngOnChanges() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const path = `/ejs/purchase/terms/${this.language}.ejs`;
                const url = (yield ___WEBPACK_IMPORTED_MODULE_2__["Functions"].Util.isFile(`${___WEBPACK_IMPORTED_MODULE_2__["Functions"].Util.getProject().storageUrl}${path}`))
                    ? `${___WEBPACK_IMPORTED_MODULE_2__["Functions"].Util.getProject().storageUrl}${path}`
                    : `/default${path}`;
                const view = yield this.utilService.getText(url);
                this.terms = window.ejs.render(view, {
                    screeningEvent: this.screeningEvent
                });
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
PurchaseTermsComponent.ɵfac = function PurchaseTermsComponent_Factory(t) { return new (t || PurchaseTermsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["UtilService"])); };
PurchaseTermsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseTermsComponent, selectors: [["app-purchase-terms"]], inputs: { language: "language", screeningEvent: "screeningEvent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[1, "border", "bg-white", "p-3", "text-small", "scroll-vertical", "border", 3, "innerHTML"]], template: function PurchaseTermsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.terms, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: [".scroll-vertical[_ngcontent-%COMP%] {\n  max-height: 150px;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseTermsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-terms',
                templateUrl: './purchase-terms.component.html',
                styleUrls: ['./purchase-terms.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }]; }, { language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], screeningEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./app/modules/purchase/components/parts/purchase-warning/purchase-warning.component.ts":
/*!**********************************************************************************************!*\
  !*** ./app/modules/purchase/components/parts/purchase-warning/purchase-warning.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PurchaseWarningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseWarningComponent", function() { return PurchaseWarningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cinerino/sdk */ "../../node_modules/@cinerino/sdk/lib/browser.js");
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cinerino_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../.. */ "./app/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services */ "./app/services/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class PurchaseWarningComponent {
    constructor(utilService) {
        this.utilService = utilService;
        this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["getEnvironment"])();
    }
    ngOnInit() {
    }
    ngOnChanges() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const path = `/ejs/purchase/warning/${this.language}.ejs`;
                const url = (yield ___WEBPACK_IMPORTED_MODULE_2__["Functions"].Util.isFile(`${___WEBPACK_IMPORTED_MODULE_2__["Functions"].Util.getProject().storageUrl}${path}`))
                    ? `${___WEBPACK_IMPORTED_MODULE_2__["Functions"].Util.getProject().storageUrl}${path}`
                    : `/default${path}`;
                const view = yield this.utilService.getText(url);
                this.warning = window.ejs.render(view, {
                    screeningEvent: this.screeningEvent
                });
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
PurchaseWarningComponent.ɵfac = function PurchaseWarningComponent_Factory(t) { return new (t || PurchaseWarningComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["UtilService"])); };
PurchaseWarningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseWarningComponent, selectors: [["app-purchase-warning"]], inputs: { language: "language", screeningEvent: "screeningEvent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[1, "border", "bg-white", "p-3", "text-small", "scroll-vertical", "border", 3, "innerHTML"]], template: function PurchaseWarningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.warning, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: [".scroll-vertical[_ngcontent-%COMP%] {\n  max-height: 150px;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseWarningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-warning',
                templateUrl: './purchase-warning.component.html',
                styleUrls: ['./purchase-warning.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }]; }, { language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], screeningEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./app/modules/purchase/components/parts/seat-info/seat-info.component.ts":
/*!********************************************************************************!*\
  !*** ./app/modules/purchase/components/parts/seat-info/seat-info.component.ts ***!
  \********************************************************************************/
/*! exports provided: SeatInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeatInfoComponent", function() { return SeatInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



class SeatInfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
SeatInfoComponent.ɵfac = function SeatInfoComponent_Factory(t) { return new (t || SeatInfoComponent)(); };
SeatInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SeatInfoComponent, selectors: [["app-seat-info"]], decls: 23, vars: 12, consts: [[1, "bg-white", "px-3", "py-2"], [1, "container"], [1, "row", "align-items-center", "text-small"], [1, "d-flex", "align-items-center", "col-6", "col-md-3"], [1, "seat"], [1, "seat", "active"], [1, "seat", "disabled"], [1, "seat", "space", "disabled"]], template: function SeatInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "purchase.seat.normal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 6, "purchase.seat.active"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 8, "purchase.seat.disabled"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 10, "purchase.seat.space"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.seat[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 50px;\n  border: 3px solid #9a9a9b;\n  border-radius: 15px 15px 0 0;\n  transform: scale(0.5);\n}\n\n.seat.active[_ngcontent-%COMP%] {\n  color: #FFF;\n  background-color: #258ac3;\n  border-color: #258ac3;\n}\n\n.seat.disabled[_ngcontent-%COMP%] {\n  color: #FFF;\n  background-color: #9a9a9b;\n  border-color: #9a9a9b;\n  cursor: default;\n}\n\n.seat.space.disabled[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  background-color: #333;\n  border-color: #333;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeatInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-seat-info',
                templateUrl: './seat-info.component.html',
                styleUrls: ['./seat-info.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./app/modules/purchase/components/parts/step/step.component.ts":
/*!**********************************************************************!*\
  !*** ./app/modules/purchase/components/parts/step/step.component.ts ***!
  \**********************************************************************/
/*! exports provided: PurchaseStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseStepComponent", function() { return PurchaseStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





function PurchaseStepComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx_r0.currentStep !== step_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("0", step_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, "purchase.cinema.step." + step_r1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", ctx_r0.currentStep === step_r1)("d-flex", ctx_r0.currentStep !== step_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 0", step_r1, " ");
} }
class PurchaseStepComponent {
    constructor() {
        this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["getEnvironment"])();
    }
    /**
     * 初期化
     */
    ngOnInit() {
        this.steps = [1, 2, 3, 4, 5];
    }
}
PurchaseStepComponent.ɵfac = function PurchaseStepComponent_Factory(t) { return new (t || PurchaseStepComponent)(); };
PurchaseStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PurchaseStepComponent, selectors: [["app-purchase-step"]], inputs: { currentStep: "currentStep" }, decls: 2, vars: 1, consts: [[1, "d-flex", "align-items-center", "h-100"], ["class", "step px-0 h-100", 4, "ngFor", "ngForOf"], [1, "step", "px-0", "h-100"], [1, "px-4", "bg-white", "h-100"], [1, "text-x-large", "font-weight-bold", "mr-2"], [1, "text-x-small", 3, "innerHtml"], [1, "px-4", "h-100", "align-items-center"]], template: function PurchaseStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PurchaseStepComponent_li_1_Template, 9, 11, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.steps);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-purchase-step',
                templateUrl: './step.component.html',
                styleUrls: ['./step.component.scss']
            }]
    }], function () { return []; }, { currentStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./app/modules/purchase/components/parts/transaction-remaining-time/transaction-remaining-time.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./app/modules/purchase/components/parts/transaction-remaining-time/transaction-remaining-time.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: TransactionRemainingTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionRemainingTimeComponent", function() { return TransactionRemainingTimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "../../node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./environments/environment.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services */ "./app/services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










function TransactionRemainingTimeComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "common.timeLimit"), " ", ctx_r0.diff.hours, ":", ctx_r0.diff.minutes, ":", ctx_r0.diff.seconds, "\n");
} }
class TransactionRemainingTimeComponent {
    constructor(router, actionService) {
        this.router = router;
        this.actionService = actionService;
        this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["getEnvironment"])();
    }
    ngOnInit() {
        this.update();
    }
    ngOnDestroy() {
        clearTimeout(this.timer);
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            const { transaction } = yield this.actionService.purchase.getData();
            if (transaction === undefined) {
                return;
            }
            this.transaction = transaction;
            const now = moment__WEBPACK_IMPORTED_MODULE_2__();
            const expires = moment__WEBPACK_IMPORTED_MODULE_2__(transaction.expires);
            this.isExpired = expires.diff(now) < 0;
            this.diff = {
                hours: `00${expires.diff(now, 'hours')}`.slice(-2),
                minutes: `00${expires.diff(now, 'minutes') % 60}`.slice(-2),
                seconds: `00${expires.diff(now, 'seconds') % 60 % 60}`.slice(-2)
            };
            this.width = Math.floor(expires.diff(now, 'seconds') / (Number(this.environment.PURCHASE_TRANSACTION_TIME) * 60) * 100);
            if (this.isExpired) {
                this.router.navigate(['/expired']);
            }
            const time = 1000;
            this.timer = setTimeout(() => { this.update(); }, time);
        });
    }
}
TransactionRemainingTimeComponent.ɵfac = function TransactionRemainingTimeComponent_Factory(t) { return new (t || TransactionRemainingTimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["ActionService"])); };
TransactionRemainingTimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionRemainingTimeComponent, selectors: [["app-transaction-remaining-time"]], decls: 1, vars: 1, consts: [["class", "text-white position-relative", 4, "ngIf"], [1, "text-white", "position-relative"]], template: function TransactionRemainingTimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TransactionRemainingTimeComponent_p_0_Template, 3, 6, "p", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.transaction);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".parent[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  height: 6px;\n}\n\n.expired[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.cover[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0.5;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionRemainingTimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transaction-remaining-time',
                templateUrl: './transaction-remaining-time.component.html',
                styleUrls: ['./transaction-remaining-time.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_4__["ActionService"] }]; }, null); })();


/***/ }),

/***/ "./app/modules/purchase/purchase-routing.module.ts":
/*!*********************************************************!*\
  !*** ./app/modules/purchase/purchase-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PurchaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseRoutingModule", function() { return PurchaseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _canActivates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../canActivates */ "./app/canActivates/index.ts");
/* harmony import */ var _components_pages_cinema_purchase_cinema_schedule_event_purchase_cinema_schedule_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/cinema/purchase-cinema-schedule-event/purchase-cinema-schedule-event.component */ "./app/modules/purchase/components/pages/cinema/purchase-cinema-schedule-event/purchase-cinema-schedule-event.component.ts");
/* harmony import */ var _components_pages_cinema_purchase_cinema_schedule_movie_purchase_cinema_schedule_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/cinema/purchase-cinema-schedule-movie/purchase-cinema-schedule-movie.component */ "./app/modules/purchase/components/pages/cinema/purchase-cinema-schedule-movie/purchase-cinema-schedule-movie.component.ts");
/* harmony import */ var _components_pages_cinema_purchase_cinema_schedule_purchase_cinema_schedule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/cinema/purchase-cinema-schedule/purchase-cinema-schedule.component */ "./app/modules/purchase/components/pages/cinema/purchase-cinema-schedule/purchase-cinema-schedule.component.ts");
/* harmony import */ var _components_pages_cinema_purchase_cinema_seat_purchase_cinema_seat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/cinema/purchase-cinema-seat/purchase-cinema-seat.component */ "./app/modules/purchase/components/pages/cinema/purchase-cinema-seat/purchase-cinema-seat.component.ts");
/* harmony import */ var _components_pages_cinema_purchase_cinema_ticket_purchase_cinema_ticket_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/cinema/purchase-cinema-ticket/purchase-cinema-ticket.component */ "./app/modules/purchase/components/pages/cinema/purchase-cinema-ticket/purchase-cinema-ticket.component.ts");
/* harmony import */ var _components_pages_cinema_purchase_cinema_top_purchase_cinema_top_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/cinema/purchase-cinema-top/purchase-cinema-top.component */ "./app/modules/purchase/components/pages/cinema/purchase-cinema-top/purchase-cinema-top.component.ts");
/* harmony import */ var _components_pages_event_purchase_event_schedule_purchase_event_schedule_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/event/purchase-event-schedule/purchase-event-schedule.component */ "./app/modules/purchase/components/pages/event/purchase-event-schedule/purchase-event-schedule.component.ts");
/* harmony import */ var _components_pages_event_purchase_event_seat_ticket_purchase_event_seat_ticket_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/event/purchase-event-seat-ticket/purchase-event-seat-ticket.component */ "./app/modules/purchase/components/pages/event/purchase-event-seat-ticket/purchase-event-seat-ticket.component.ts");
/* harmony import */ var _components_pages_event_purchase_event_seat_purchase_event_seat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/event/purchase-event-seat/purchase-event-seat.component */ "./app/modules/purchase/components/pages/event/purchase-event-seat/purchase-event-seat.component.ts");
/* harmony import */ var _components_pages_event_purchase_event_ticket_purchase_event_ticket_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/event/purchase-event-ticket/purchase-event-ticket.component */ "./app/modules/purchase/components/pages/event/purchase-event-ticket/purchase-event-ticket.component.ts");
/* harmony import */ var _components_pages_purchase_base_purchase_base_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/purchase-base/purchase-base.component */ "./app/modules/purchase/components/pages/purchase-base/purchase-base.component.ts");
/* harmony import */ var _components_pages_purchase_complete_purchase_complete_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pages/purchase-complete/purchase-complete.component */ "./app/modules/purchase/components/pages/purchase-complete/purchase-complete.component.ts");
/* harmony import */ var _components_pages_purchase_confirm_purchase_confirm_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages/purchase-confirm/purchase-confirm.component */ "./app/modules/purchase/components/pages/purchase-confirm/purchase-confirm.component.ts");
/* harmony import */ var _components_pages_purchase_payment_reception_purchase_payment_reception_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/purchase-payment-reception/purchase-payment-reception.component */ "./app/modules/purchase/components/pages/purchase-payment-reception/purchase-payment-reception.component.ts");
/* harmony import */ var _components_pages_purchase_payment_purchase_payment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pages/purchase-payment/purchase-payment.component */ "./app/modules/purchase/components/pages/purchase-payment/purchase-payment.component.ts");
/* harmony import */ var _components_pages_purchase_root_purchase_root_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pages/purchase-root/purchase-root.component */ "./app/modules/purchase/components/pages/purchase-root/purchase-root.component.ts");





















const routes = [
    {
        path: '',
        component: _components_pages_purchase_base_purchase_base_component__WEBPACK_IMPORTED_MODULE_13__["PurchaseBaseComponent"],
        canActivate: [_canActivates__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"], _canActivates__WEBPACK_IMPORTED_MODULE_2__["SettingGuardService"]],
        children: [
            { path: 'root', component: _components_pages_purchase_root_purchase_root_component__WEBPACK_IMPORTED_MODULE_18__["PurchaseRootComponent"] },
            {
                path: 'cinema',
                canActivate: [_canActivates__WEBPACK_IMPORTED_MODULE_2__["ViewTypeGuardService"]],
                children: [
                    { path: '', component: _components_pages_cinema_purchase_cinema_top_purchase_cinema_top_component__WEBPACK_IMPORTED_MODULE_8__["PurchaseCinemaTopComponent"] },
                    { path: 'schedule', component: _components_pages_cinema_purchase_cinema_schedule_purchase_cinema_schedule_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseCinemaScheduleComponent"] },
                    { path: 'schedule/movie', component: _components_pages_cinema_purchase_cinema_schedule_movie_purchase_cinema_schedule_movie_component__WEBPACK_IMPORTED_MODULE_4__["PurchaseCinemaScheduleMovieComponent"] },
                    { path: 'schedule/event/:identifier', component: _components_pages_cinema_purchase_cinema_schedule_event_purchase_cinema_schedule_event_component__WEBPACK_IMPORTED_MODULE_3__["PurchaseCinemaScheduleEventComponent"] },
                    { path: 'seat', component: _components_pages_cinema_purchase_cinema_seat_purchase_cinema_seat_component__WEBPACK_IMPORTED_MODULE_6__["PurchaseCinemaSeatComponent"] },
                    { path: 'ticket', component: _components_pages_cinema_purchase_cinema_ticket_purchase_cinema_ticket_component__WEBPACK_IMPORTED_MODULE_7__["PurchaseCinemaTicketComponent"] },
                ]
            },
            {
                path: 'event',
                canActivate: [_canActivates__WEBPACK_IMPORTED_MODULE_2__["ViewTypeGuardService"]],
                children: [
                    { path: 'ticket', component: _components_pages_event_purchase_event_ticket_purchase_event_ticket_component__WEBPACK_IMPORTED_MODULE_12__["PurchaseEventTicketComponent"] },
                    { path: 'schedule', component: _components_pages_event_purchase_event_schedule_purchase_event_schedule_component__WEBPACK_IMPORTED_MODULE_9__["PurchaseEventScheduleComponent"] },
                    {
                        path: 'seat',
                        canActivate: [_canActivates__WEBPACK_IMPORTED_MODULE_2__["ViewTypeGuardService"]],
                        children: [
                            { path: '', component: _components_pages_event_purchase_event_seat_purchase_event_seat_component__WEBPACK_IMPORTED_MODULE_11__["PurchaseEventSeatComponent"] },
                            { path: 'ticket', component: _components_pages_event_purchase_event_seat_ticket_purchase_event_seat_ticket_component__WEBPACK_IMPORTED_MODULE_10__["PurchaseEventSeatTicketComponent"] }
                        ]
                    },
                ]
            },
            { path: 'payment', canActivate: [_canActivates__WEBPACK_IMPORTED_MODULE_2__["PurchaseTransactionGuardService"]], component: _components_pages_purchase_payment_purchase_payment_component__WEBPACK_IMPORTED_MODULE_17__["PurchasePaymentComponent"] },
            { path: 'payment/reception', canActivate: [_canActivates__WEBPACK_IMPORTED_MODULE_2__["PurchaseTransactionGuardService"]], component: _components_pages_purchase_payment_reception_purchase_payment_reception_component__WEBPACK_IMPORTED_MODULE_16__["PurchasePaymentReceptionComponent"] },
            { path: 'confirm', canActivate: [_canActivates__WEBPACK_IMPORTED_MODULE_2__["PurchaseTransactionGuardService"]], component: _components_pages_purchase_confirm_purchase_confirm_component__WEBPACK_IMPORTED_MODULE_15__["PurchaseConfirmComponent"] },
            { path: 'complete', component: _components_pages_purchase_complete_purchase_complete_component__WEBPACK_IMPORTED_MODULE_14__["PurchaseCompleteComponent"] }
        ]
    }
];
class PurchaseRoutingModule {
}
PurchaseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PurchaseRoutingModule });
PurchaseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PurchaseRoutingModule_Factory(t) { return new (t || PurchaseRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PurchaseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PurchaseRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/modules/purchase/purchase.module.ts":
/*!*************************************************!*\
  !*** ./app/modules/purchase/purchase.module.ts ***!
  \*************************************************/
/*! exports provided: PurchaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseModule", function() { return PurchaseModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./app/modules/shared/shared.module.ts");
/* harmony import */ var _components_pages_cinema_purchase_cinema_schedule_event_purchase_cinema_schedule_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/cinema/purchase-cinema-schedule-event/purchase-cinema-schedule-event.component */ "./app/modules/purchase/components/pages/cinema/purchase-cinema-schedule-event/purchase-cinema-schedule-event.component.ts");
/* harmony import */ var _components_pages_cinema_purchase_cinema_schedule_movie_purchase_cinema_schedule_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/cinema/purchase-cinema-schedule-movie/purchase-cinema-schedule-movie.component */ "./app/modules/purchase/components/pages/cinema/purchase-cinema-schedule-movie/purchase-cinema-schedule-movie.component.ts");
/* harmony import */ var _components_pages_cinema_purchase_cinema_schedule_purchase_cinema_schedule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/cinema/purchase-cinema-schedule/purchase-cinema-schedule.component */ "./app/modules/purchase/components/pages/cinema/purchase-cinema-schedule/purchase-cinema-schedule.component.ts");
/* harmony import */ var _components_pages_cinema_purchase_cinema_seat_purchase_cinema_seat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/cinema/purchase-cinema-seat/purchase-cinema-seat.component */ "./app/modules/purchase/components/pages/cinema/purchase-cinema-seat/purchase-cinema-seat.component.ts");
/* harmony import */ var _components_pages_cinema_purchase_cinema_ticket_purchase_cinema_ticket_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/cinema/purchase-cinema-ticket/purchase-cinema-ticket.component */ "./app/modules/purchase/components/pages/cinema/purchase-cinema-ticket/purchase-cinema-ticket.component.ts");
/* harmony import */ var _components_pages_cinema_purchase_cinema_top_purchase_cinema_top_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/cinema/purchase-cinema-top/purchase-cinema-top.component */ "./app/modules/purchase/components/pages/cinema/purchase-cinema-top/purchase-cinema-top.component.ts");
/* harmony import */ var _components_pages_event_purchase_event_schedule_purchase_event_schedule_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/event/purchase-event-schedule/purchase-event-schedule.component */ "./app/modules/purchase/components/pages/event/purchase-event-schedule/purchase-event-schedule.component.ts");
/* harmony import */ var _components_pages_event_purchase_event_seat_ticket_purchase_event_seat_ticket_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/event/purchase-event-seat-ticket/purchase-event-seat-ticket.component */ "./app/modules/purchase/components/pages/event/purchase-event-seat-ticket/purchase-event-seat-ticket.component.ts");
/* harmony import */ var _components_pages_event_purchase_event_seat_purchase_event_seat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/event/purchase-event-seat/purchase-event-seat.component */ "./app/modules/purchase/components/pages/event/purchase-event-seat/purchase-event-seat.component.ts");
/* harmony import */ var _components_pages_event_purchase_event_ticket_purchase_event_ticket_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/event/purchase-event-ticket/purchase-event-ticket.component */ "./app/modules/purchase/components/pages/event/purchase-event-ticket/purchase-event-ticket.component.ts");
/* harmony import */ var _components_pages_purchase_base_purchase_base_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/purchase-base/purchase-base.component */ "./app/modules/purchase/components/pages/purchase-base/purchase-base.component.ts");
/* harmony import */ var _components_pages_purchase_complete_purchase_complete_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pages/purchase-complete/purchase-complete.component */ "./app/modules/purchase/components/pages/purchase-complete/purchase-complete.component.ts");
/* harmony import */ var _components_pages_purchase_confirm_purchase_confirm_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages/purchase-confirm/purchase-confirm.component */ "./app/modules/purchase/components/pages/purchase-confirm/purchase-confirm.component.ts");
/* harmony import */ var _components_pages_purchase_payment_reception_purchase_payment_reception_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/purchase-payment-reception/purchase-payment-reception.component */ "./app/modules/purchase/components/pages/purchase-payment-reception/purchase-payment-reception.component.ts");
/* harmony import */ var _components_pages_purchase_payment_purchase_payment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pages/purchase-payment/purchase-payment.component */ "./app/modules/purchase/components/pages/purchase-payment/purchase-payment.component.ts");
/* harmony import */ var _components_pages_purchase_root_purchase_root_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pages/purchase-root/purchase-root.component */ "./app/modules/purchase/components/pages/purchase-root/purchase-root.component.ts");
/* harmony import */ var _components_pages_purchase_seat_purchase_seat_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pages/purchase-seat/purchase-seat.component */ "./app/modules/purchase/components/pages/purchase-seat/purchase-seat.component.ts");
/* harmony import */ var _components_pages_purchase_ticket_purchase_ticket_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/purchase-ticket/purchase-ticket.component */ "./app/modules/purchase/components/pages/purchase-ticket/purchase-ticket.component.ts");
/* harmony import */ var _components_parts_event_performances_confirm_performances_confirm_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/parts/event/performances-confirm/performances-confirm.component */ "./app/modules/purchase/components/parts/event/performances-confirm/performances-confirm.component.ts");
/* harmony import */ var _components_parts_movie_tickets_movie_tickets_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/parts/movie-tickets/movie-tickets.component */ "./app/modules/purchase/components/parts/movie-tickets/movie-tickets.component.ts");
/* harmony import */ var _components_parts_performance_performance_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/parts/performance/performance.component */ "./app/modules/purchase/components/parts/performance/performance.component.ts");
/* harmony import */ var _components_parts_performances_performances_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/parts/performances/performances.component */ "./app/modules/purchase/components/parts/performances/performances.component.ts");
/* harmony import */ var _components_parts_purchase_info_purchase_info_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/parts/purchase-info/purchase-info.component */ "./app/modules/purchase/components/parts/purchase-info/purchase-info.component.ts");
/* harmony import */ var _components_parts_purchase_terms_purchase_terms_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/parts/purchase-terms/purchase-terms.component */ "./app/modules/purchase/components/parts/purchase-terms/purchase-terms.component.ts");
/* harmony import */ var _components_parts_purchase_warning_purchase_warning_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/parts/purchase-warning/purchase-warning.component */ "./app/modules/purchase/components/parts/purchase-warning/purchase-warning.component.ts");
/* harmony import */ var _components_parts_seat_info_seat_info_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/parts/seat-info/seat-info.component */ "./app/modules/purchase/components/parts/seat-info/seat-info.component.ts");
/* harmony import */ var _components_parts_step_step_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/parts/step/step.component */ "./app/modules/purchase/components/parts/step/step.component.ts");
/* harmony import */ var _components_parts_transaction_remaining_time_transaction_remaining_time_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/parts/transaction-remaining-time/transaction-remaining-time.component */ "./app/modules/purchase/components/parts/transaction-remaining-time/transaction-remaining-time.component.ts");
/* harmony import */ var _purchase_routing_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./purchase-routing.module */ "./app/modules/purchase/purchase-routing.module.ts");

































class PurchaseModule {
}
PurchaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PurchaseModule });
PurchaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PurchaseModule_Factory(t) { return new (t || PurchaseModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _purchase_routing_module__WEBPACK_IMPORTED_MODULE_31__["PurchaseRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PurchaseModule, { declarations: [_components_pages_purchase_base_purchase_base_component__WEBPACK_IMPORTED_MODULE_13__["PurchaseBaseComponent"],
        _components_pages_purchase_root_purchase_root_component__WEBPACK_IMPORTED_MODULE_18__["PurchaseRootComponent"],
        _components_pages_cinema_purchase_cinema_seat_purchase_cinema_seat_component__WEBPACK_IMPORTED_MODULE_6__["PurchaseCinemaSeatComponent"],
        _components_pages_cinema_purchase_cinema_ticket_purchase_cinema_ticket_component__WEBPACK_IMPORTED_MODULE_7__["PurchaseCinemaTicketComponent"],
        _components_pages_event_purchase_event_ticket_purchase_event_ticket_component__WEBPACK_IMPORTED_MODULE_12__["PurchaseEventTicketComponent"],
        _components_pages_purchase_payment_purchase_payment_component__WEBPACK_IMPORTED_MODULE_17__["PurchasePaymentComponent"],
        _components_pages_purchase_payment_reception_purchase_payment_reception_component__WEBPACK_IMPORTED_MODULE_16__["PurchasePaymentReceptionComponent"],
        _components_pages_purchase_confirm_purchase_confirm_component__WEBPACK_IMPORTED_MODULE_15__["PurchaseConfirmComponent"],
        _components_pages_purchase_complete_purchase_complete_component__WEBPACK_IMPORTED_MODULE_14__["PurchaseCompleteComponent"],
        _components_pages_cinema_purchase_cinema_schedule_purchase_cinema_schedule_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseCinemaScheduleComponent"],
        _components_pages_event_purchase_event_schedule_purchase_event_schedule_component__WEBPACK_IMPORTED_MODULE_9__["PurchaseEventScheduleComponent"],
        _components_parts_performance_performance_component__WEBPACK_IMPORTED_MODULE_23__["PurchasePerformanceComponent"],
        _components_parts_performances_performances_component__WEBPACK_IMPORTED_MODULE_24__["PurchasePerformancesComponent"],
        _components_parts_event_performances_confirm_performances_confirm_component__WEBPACK_IMPORTED_MODULE_21__["PurchaseEventPerformancesConfirmComponent"],
        _components_parts_purchase_info_purchase_info_component__WEBPACK_IMPORTED_MODULE_25__["PurchaseInfoComponent"],
        _components_parts_purchase_terms_purchase_terms_component__WEBPACK_IMPORTED_MODULE_26__["PurchaseTermsComponent"],
        _components_parts_purchase_warning_purchase_warning_component__WEBPACK_IMPORTED_MODULE_27__["PurchaseWarningComponent"],
        _components_parts_transaction_remaining_time_transaction_remaining_time_component__WEBPACK_IMPORTED_MODULE_30__["TransactionRemainingTimeComponent"],
        _components_pages_event_purchase_event_seat_purchase_event_seat_component__WEBPACK_IMPORTED_MODULE_11__["PurchaseEventSeatComponent"],
        _components_pages_event_purchase_event_seat_ticket_purchase_event_seat_ticket_component__WEBPACK_IMPORTED_MODULE_10__["PurchaseEventSeatTicketComponent"],
        _components_pages_purchase_ticket_purchase_ticket_component__WEBPACK_IMPORTED_MODULE_20__["PurchaseTicketComponent"],
        _components_pages_purchase_seat_purchase_seat_component__WEBPACK_IMPORTED_MODULE_19__["PurchaseSeatComponent"],
        _components_parts_seat_info_seat_info_component__WEBPACK_IMPORTED_MODULE_28__["SeatInfoComponent"],
        _components_pages_cinema_purchase_cinema_schedule_movie_purchase_cinema_schedule_movie_component__WEBPACK_IMPORTED_MODULE_4__["PurchaseCinemaScheduleMovieComponent"],
        _components_pages_cinema_purchase_cinema_schedule_event_purchase_cinema_schedule_event_component__WEBPACK_IMPORTED_MODULE_3__["PurchaseCinemaScheduleEventComponent"],
        _components_pages_cinema_purchase_cinema_top_purchase_cinema_top_component__WEBPACK_IMPORTED_MODULE_8__["PurchaseCinemaTopComponent"],
        _components_parts_step_step_component__WEBPACK_IMPORTED_MODULE_29__["PurchaseStepComponent"],
        _components_parts_movie_tickets_movie_tickets_component__WEBPACK_IMPORTED_MODULE_22__["MovieTicketsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _purchase_routing_module__WEBPACK_IMPORTED_MODULE_31__["PurchaseRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PurchaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_pages_purchase_base_purchase_base_component__WEBPACK_IMPORTED_MODULE_13__["PurchaseBaseComponent"],
                    _components_pages_purchase_root_purchase_root_component__WEBPACK_IMPORTED_MODULE_18__["PurchaseRootComponent"],
                    _components_pages_cinema_purchase_cinema_seat_purchase_cinema_seat_component__WEBPACK_IMPORTED_MODULE_6__["PurchaseCinemaSeatComponent"],
                    _components_pages_cinema_purchase_cinema_ticket_purchase_cinema_ticket_component__WEBPACK_IMPORTED_MODULE_7__["PurchaseCinemaTicketComponent"],
                    _components_pages_event_purchase_event_ticket_purchase_event_ticket_component__WEBPACK_IMPORTED_MODULE_12__["PurchaseEventTicketComponent"],
                    _components_pages_purchase_payment_purchase_payment_component__WEBPACK_IMPORTED_MODULE_17__["PurchasePaymentComponent"],
                    _components_pages_purchase_payment_reception_purchase_payment_reception_component__WEBPACK_IMPORTED_MODULE_16__["PurchasePaymentReceptionComponent"],
                    _components_pages_purchase_confirm_purchase_confirm_component__WEBPACK_IMPORTED_MODULE_15__["PurchaseConfirmComponent"],
                    _components_pages_purchase_complete_purchase_complete_component__WEBPACK_IMPORTED_MODULE_14__["PurchaseCompleteComponent"],
                    _components_pages_cinema_purchase_cinema_schedule_purchase_cinema_schedule_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseCinemaScheduleComponent"],
                    _components_pages_event_purchase_event_schedule_purchase_event_schedule_component__WEBPACK_IMPORTED_MODULE_9__["PurchaseEventScheduleComponent"],
                    _components_parts_performance_performance_component__WEBPACK_IMPORTED_MODULE_23__["PurchasePerformanceComponent"],
                    _components_parts_performances_performances_component__WEBPACK_IMPORTED_MODULE_24__["PurchasePerformancesComponent"],
                    _components_parts_event_performances_confirm_performances_confirm_component__WEBPACK_IMPORTED_MODULE_21__["PurchaseEventPerformancesConfirmComponent"],
                    _components_parts_purchase_info_purchase_info_component__WEBPACK_IMPORTED_MODULE_25__["PurchaseInfoComponent"],
                    _components_parts_purchase_terms_purchase_terms_component__WEBPACK_IMPORTED_MODULE_26__["PurchaseTermsComponent"],
                    _components_parts_purchase_warning_purchase_warning_component__WEBPACK_IMPORTED_MODULE_27__["PurchaseWarningComponent"],
                    _components_parts_transaction_remaining_time_transaction_remaining_time_component__WEBPACK_IMPORTED_MODULE_30__["TransactionRemainingTimeComponent"],
                    _components_pages_event_purchase_event_seat_purchase_event_seat_component__WEBPACK_IMPORTED_MODULE_11__["PurchaseEventSeatComponent"],
                    _components_pages_event_purchase_event_seat_ticket_purchase_event_seat_ticket_component__WEBPACK_IMPORTED_MODULE_10__["PurchaseEventSeatTicketComponent"],
                    _components_pages_purchase_ticket_purchase_ticket_component__WEBPACK_IMPORTED_MODULE_20__["PurchaseTicketComponent"],
                    _components_pages_purchase_seat_purchase_seat_component__WEBPACK_IMPORTED_MODULE_19__["PurchaseSeatComponent"],
                    _components_parts_seat_info_seat_info_component__WEBPACK_IMPORTED_MODULE_28__["SeatInfoComponent"],
                    _components_pages_cinema_purchase_cinema_schedule_movie_purchase_cinema_schedule_movie_component__WEBPACK_IMPORTED_MODULE_4__["PurchaseCinemaScheduleMovieComponent"],
                    _components_pages_cinema_purchase_cinema_schedule_event_purchase_cinema_schedule_event_component__WEBPACK_IMPORTED_MODULE_3__["PurchaseCinemaScheduleEventComponent"],
                    _components_pages_cinema_purchase_cinema_top_purchase_cinema_top_component__WEBPACK_IMPORTED_MODULE_8__["PurchaseCinemaTopComponent"],
                    _components_parts_step_step_component__WEBPACK_IMPORTED_MODULE_29__["PurchaseStepComponent"],
                    _components_parts_movie_tickets_movie_tickets_component__WEBPACK_IMPORTED_MODULE_22__["MovieTicketsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _purchase_routing_module__WEBPACK_IMPORTED_MODULE_31__["PurchaseRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);