(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-inquiry-inquiry-module"], {
    /***/
    "./app/modules/inquiry/components/pages/inquiry-confirm/inquiry-confirm.component.ts":
    /*!*******************************************************************************************!*\
      !*** ./app/modules/inquiry/components/pages/inquiry-confirm/inquiry-confirm.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: InquiryConfirmComponent */

    /***/
    function appModulesInquiryComponentsPagesInquiryConfirmInquiryConfirmComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InquiryConfirmComponent", function () {
        return InquiryConfirmComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @cinerino/sdk */
      "../../node_modules/@cinerino/sdk/lib/browser.js");
      /* harmony import */


      var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "../../node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../.. */
      "./app/index.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../environments/environment */
      "./environments/environment.ts");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../services */
      "./app/services/index.ts");
      /* harmony import */


      var _store_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../store/reducers */
      "./app/store/reducers/index.ts");
      /* harmony import */


      var _shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../shared/components/parts/header/header.component */
      "./app/modules/shared/components/parts/header/header.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../shared/components/parts/footer/footer.component */
      "./app/modules/shared/components/parts/footer/footer.component.ts");
      /* harmony import */


      var _shared_components_parts_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../shared/components/parts/item-list/item-list.component */
      "./app/modules/shared/components/parts/item-list/item-list.component.ts");
      /* harmony import */


      var _shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../shared/pipes/change-language.pipe */
      "./app/modules/shared/pipes/change-language.pipe.ts");
      /* harmony import */


      var _shared_pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../shared/pipes/format-date.pipe */
      "./app/modules/shared/pipes/format-date.pipe.ts");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      function InquiryConfirmComponent_div_15_p_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var eventOrder_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, eventOrder_r2.event.superEvent.headline), "");
        }
      }

      function InquiryConfirmComponent_div_15_p_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var eventOrder_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, eventOrder_r2.event.superEvent.description));
        }
      }

      function InquiryConfirmComponent_div_15_span_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var eventOrder_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, eventOrder_r2.event.location.address));
        }
      }

      function InquiryConfirmComponent_div_15_span_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \xA0/\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var eventOrder_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "common.duration"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r6.moment.duration(eventOrder_r2.event.workPerformed == null ? null : eventOrder_r2.event.workPerformed.duration).asMinutes(), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "common.date.minute"), " ");
        }
      }

      function InquiryConfirmComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "changeLanguage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InquiryConfirmComponent_div_15_p_6_Template, 3, 3, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "changeLanguage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InquiryConfirmComponent_div_15_p_8_Template, 3, 3, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "changeLanguage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "formatDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "formatDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "changeLanguage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\xA0/\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InquiryConfirmComponent_div_15_span_20_Template, 3, 3, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "changeLanguage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "changeLanguage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, InquiryConfirmComponent_div_15_span_24_Template, 7, 7, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-item-list", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var eventOrder_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, eventOrder_r2.event.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eventOrder_r2.event.superEvent.headline && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 12, eventOrder_r2.event.superEvent.headline));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eventOrder_r2.event.superEvent.description && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 14, eventOrder_r2.event.superEvent.description));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 16, eventOrder_r2.event.startDate, "MM/DD(ddd) HH:mm"), "-", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 19, eventOrder_r2.event.endDate, "HH:mm"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 22, eventOrder_r2.event.superEvent.location.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 24, eventOrder_r2.event.location.address));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 26, eventOrder_r2.event.location.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (eventOrder_r2.event.workPerformed == null ? null : eventOrder_r2.event.workPerformed.duration) && ctx_r0.moment.duration(eventOrder_r2.event.workPerformed == null ? null : eventOrder_r2.event.workPerformed.duration).asMinutes() > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("acceptedOffers", eventOrder_r2.data);
        }
      }

      function InquiryConfirmComponent_button_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InquiryConfirmComponent_button_25_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.print();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var tmp_0_0 = null;
          var currVal_0 = ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r1.order)) == null ? null : tmp_0_0.order.orderStatus) !== ctx_r1.orderStatus.OrderDelivered;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", currVal_0)("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r1.isLoading));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, "inquiry.confirm.next"));
        }
      }

      var InquiryConfirmComponent = /*#__PURE__*/function () {
        function InquiryConfirmComponent(store, router, actionService, utilService, reservationService, translate) {
          _classCallCheck(this, InquiryConfirmComponent);

          this.store = store;
          this.router = router;
          this.actionService = actionService;
          this.utilService = utilService;
          this.reservationService = reservationService;
          this.translate = translate;
          this.moment = moment__WEBPACK_IMPORTED_MODULE_5__;
          this.orderStatus = _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__["factory"].orderStatus;
          this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["getEnvironment"])();
        }

        _createClass(InquiryConfirmComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.eventOrders = [];
            this.order = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getOrder"]));
            this.user = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getUser"]));
            this.isLoading = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getLoading"]));
            this.error = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getError"]));
            this.order.subscribe(function (value) {
              if (value.order === undefined) {
                _this.router.navigate(['/error']);

                return;
              }

              var order = value.order;
              _this.eventOrders = ___WEBPACK_IMPORTED_MODULE_6__["Functions"].Purchase.order2EventOrders({
                order: order
              });
            }).unsubscribe();

            if (this.environment.INQUIRY_PRINT_WAIT_TIME !== '') {
              var time = Number(this.environment.INQUIRY_PRINT_WAIT_TIME);
              this.timer = setTimeout(function () {
                _this.router.navigate(['/inquiry/input']);
              }, time);
            }
          }
          /**
           * 印刷
           */

        }, {
          key: "print",
          value: function print() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var today, limit, findResult, orderData, user, reservationNumbers, searchResult, checkedInResult, orders, pos, printer;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      today = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYYMMDD');
                      limit = moment__WEBPACK_IMPORTED_MODULE_5__(today).add(this.environment.INQUIRY_PRINT_EXPIRED_VALUE, this.environment.INQUIRY_PRINT_EXPIRED_UNIT).format('YYYYMMDD');
                      findResult = this.eventOrders.find(function (o) {
                        return moment__WEBPACK_IMPORTED_MODULE_5__(o.event.startDate).format('YYYYMMDD') < limit;
                      });

                      if (!(findResult !== undefined)) {
                        _context.next = 6;
                        break;
                      }

                      this.utilService.openAlert({
                        title: this.translate.instant('common.error'),
                        body: this.translate.instant('inquiry.confirm.alert.printExpired')
                      });
                      return _context.abrupt("return");

                    case 6:
                      if (this.timer !== undefined) {
                        clearTimeout(this.timer);
                      }

                      _context.prev = 7;
                      _context.next = 10;
                      return this.actionService.order.getData();

                    case 10:
                      orderData = _context.sent;
                      _context.next = 13;
                      return this.actionService.user.getData();

                    case 13:
                      user = _context.sent;

                      if (!(orderData.order === undefined)) {
                        _context.next = 17;
                        break;
                      }

                      this.router.navigate(['/error']);
                      return _context.abrupt("return");

                    case 17:
                      if (!(user.printer === undefined)) {
                        _context.next = 19;
                        break;
                      }

                      throw new Error('printer undefined');

                    case 19:
                      // 二重発券防止
                      reservationNumbers = orderData.order.acceptedOffers.map(function (o) {
                        if (o.itemOffered.typeOf !== _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__["factory"].chevre.reservationType.EventReservation) {
                          return '';
                        }

                        var itemOffered = o.itemOffered;
                        return itemOffered.reservationNumber;
                      });
                      _context.next = 22;
                      return this.reservationService.search({
                        typeOf: _cinerino_sdk__WEBPACK_IMPORTED_MODULE_2__["factory"].chevre.reservationType.EventReservation,
                        reservationNumbers: reservationNumbers
                      });

                    case 22:
                      searchResult = _context.sent;
                      checkedInResult = searchResult.data.filter(function (r) {
                        return r.checkedIn;
                      });

                      if (!(checkedInResult.length > 0)) {
                        _context.next = 27;
                        break;
                      }

                      this.utilService.openAlert({
                        title: this.translate.instant('common.error'),
                        body: this.translate.instant('inquiry.confirm.alert.doubleTicketing')
                      });
                      return _context.abrupt("return");

                    case 27:
                      // 印刷
                      orders = [orderData.order];
                      pos = user.pos;
                      printer = user.printer;
                      _context.next = 32;
                      return this.actionService.order.print({
                        orders: orders,
                        pos: pos,
                        printer: printer
                      });

                    case 32:
                      this.router.navigate(['/inquiry/print']);
                      _context.next = 39;
                      break;

                    case 35:
                      _context.prev = 35;
                      _context.t0 = _context["catch"](7);
                      console.error(_context.t0);
                      this.utilService.openAlert({
                        title: this.translate.instant('common.error'),
                        body: "\n                <p class=\"mb-4\">".concat(this.translate.instant('inquiry.confirm.alert.print'), "</p>\n                    <div class=\"p-3 bg-light-gray select-text\">\n                    <code>").concat(_context.t0, "</code>\n                </div>")
                      });

                    case 39:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[7, 35]]);
            }));
          }
        }]);

        return InquiryConfirmComponent;
      }();

      InquiryConfirmComponent.ɵfac = function InquiryConfirmComponent_Factory(t) {
        return new (t || InquiryConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["ReservationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]));
      };

      InquiryConfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InquiryConfirmComponent,
        selectors: [["app-inquiry-confirm"]],
        decls: 26,
        vars: 12,
        consts: [[3, "isClear"], [1, "contents"], [1, "container", "h-100", "p-3"], [1, "row", "h-100"], [1, "col-3", "h-100"], [1, "bg-dark", "h-100"], [1, "col-6", "mh-100", "scroll-horizontal"], [1, "mb-4", "px-3", "py-2", "bg-white"], [1, "row", "align-items-center"], [1, "col-4"], [1, "col-8", "text-large", "text-info", "font-weight-bold", "text-md-left", "text-right"], ["class", "mb-4 bg-white p-3", 4, "ngFor", "ngForOf"], [1, "col-3", "mh-100", "scroll-horizontal"], [1, "container", "h-100"], [1, "row", "align-items-center", "justify-content-center", "h-100"], [1, "col-3"], ["type", "button", "routerLink", "/inquiry/input", 1, "btn", "btn-outline-light", "btn-block", "font-weight-bold", "py-2"], ["type", "button", "class", "btn btn-primary btn-block font-weight-bold py-2", 3, "disabled", "click", 4, "ngIf"], [1, "mb-4", "bg-white", "p-3"], [1, "mb-3"], [1, "mb-1"], [1, "font-weight-bold", "text-large"], ["class", "text-small", 4, "ngIf"], [1, "text-small", "mb-1"], [1, "theater-name"], [1, "screen-name"], ["class", "mr-2", 4, "ngIf"], [4, "ngIf"], [3, "acceptedOffers"], [1, "text-small"], [1, "mr-2"], [1, "mr-1"], ["type", "button", 1, "btn", "btn-primary", "btn-block", "font-weight-bold", "py-2", 3, "disabled", "click"]],
        template: function InquiryConfirmComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InquiryConfirmComponent_div_15_Template, 27, 28, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, InquiryConfirmComponent_button_25_Template, 5, 9, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_2_0 = null;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isClear", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, "common.confirmationNumber"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, ctx.order)) == null ? null : tmp_2_0.order.confirmationNumber, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.eventOrders);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, "inquiry.confirm.prev"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.environment.INQUIRY_PRINT);
          }
        },
        directives: [_shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_components_parts_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_13__["ItemListComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_14__["ChangeLanguagePipe"], _shared_pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_15__["FormatDatePipe"]],
        styles: [""]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InquiryConfirmComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-inquiry-confirm',
            templateUrl: './inquiry-confirm.component.html',
            styleUrls: ['./inquiry-confirm.component.scss']
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_8__["ActionService"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_8__["ReservationService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./app/modules/inquiry/components/pages/inquiry-input/inquiry-input.component.ts":
    /*!***************************************************************************************!*\
      !*** ./app/modules/inquiry/components/pages/inquiry-input/inquiry-input.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: InquiryInputComponent */

    /***/
    function appModulesInquiryComponentsPagesInquiryInputInquiryInputComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InquiryInputComponent", function () {
        return InquiryInputComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var libphonenumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! libphonenumber-js */
      "../../node_modules/libphonenumber-js/index.es6.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../environments/environment */
      "./environments/environment.ts");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../services */
      "./app/services/index.ts");
      /* harmony import */


      var _store_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../store/reducers */
      "./app/store/reducers/index.ts");
      /* harmony import */


      var _shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../shared/components/parts/header/header.component */
      "./app/modules/shared/components/parts/header/header.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../shared/components/parts/footer/footer.component */
      "./app/modules/shared/components/parts/footer/footer.component.ts");
      /* harmony import */


      var _shared_components_parts_numeric_keypad_numeric_keypad_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../shared/components/parts/numeric-keypad/numeric-keypad.component */
      "./app/modules/shared/components/parts/numeric-keypad/numeric-keypad.component.ts");
      /* harmony import */


      var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-intl-tel-input */
      "../../node_modules/ngx-intl-tel-input/__ivy_ngcc__/fesm2015/ngx-intl-tel-input.js");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      function InquiryInputComponent_app_numeric_keypad_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-numeric-keypad", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InquiryInputComponent_app_numeric_keypad_14_Template_app_numeric_keypad_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.changeConfirmationNumber($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputValue", ctx_r0.inquiryForm.controls.confirmationNumber.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "form.placeholder.confirmationNumber"));
        }
      }

      function InquiryInputComponent_input_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "form.placeholder.confirmationNumber"));
        }
      }

      function InquiryInputComponent_div_16_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "form.validation.required"), "");
        }
      }

      function InquiryInputComponent_div_16_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "form.validation.number"), "");
        }
      }

      function InquiryInputComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InquiryInputComponent_div_16_p_1_Template, 3, 3, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InquiryInputComponent_div_16_p_2_Template, 3, 3, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.inquiryForm.controls.confirmationNumber.errors == null ? null : ctx_r2.inquiryForm.controls.confirmationNumber.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.inquiryForm.controls.confirmationNumber.errors == null ? null : ctx_r2.inquiryForm.controls.confirmationNumber.errors.pattern);
        }
      }

      function InquiryInputComponent_app_numeric_keypad_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-numeric-keypad", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InquiryInputComponent_app_numeric_keypad_21_Template_app_numeric_keypad_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.changeTelephone($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputValue", ctx_r3.inquiryForm.controls.telephone.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "form.placeholder.telephone"));
        }
      }

      function InquiryInputComponent_input_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "form.placeholder.telephone"));
        }
      }

      function InquiryInputComponent_div_23_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "form.validation.required"), "");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          value: a0
        };
      };

      function InquiryInputComponent_div_23_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, "form.validation.minlength", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r13.inquiryForm.controls.telephone.errors == null ? null : ctx_r13.inquiryForm.controls.telephone.errors.minlength.requiredLength)), " ");
        }
      }

      function InquiryInputComponent_div_23_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, "form.validation.maxlength", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r14.inquiryForm.controls.telephone.errors == null ? null : ctx_r14.inquiryForm.controls.telephone.errors.maxlength.requiredLength)), " ");
        }
      }

      function InquiryInputComponent_div_23_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "form.validation.telephone"), "");
        }
      }

      function InquiryInputComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InquiryInputComponent_div_23_p_1_Template, 3, 3, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InquiryInputComponent_div_23_p_2_Template, 3, 6, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InquiryInputComponent_div_23_p_3_Template, 3, 6, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InquiryInputComponent_div_23_p_4_Template, 3, 3, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.inquiryForm.controls.telephone.errors == null ? null : ctx_r5.inquiryForm.controls.telephone.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.inquiryForm.controls.telephone.errors == null ? null : ctx_r5.inquiryForm.controls.telephone.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.inquiryForm.controls.telephone.errors == null ? null : ctx_r5.inquiryForm.controls.telephone.errors.maxlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.inquiryForm.controls.telephone.errors == null ? null : ctx_r5.inquiryForm.controls.telephone.errors.telephone);
        }
      }

      var InquiryInputComponent = /*#__PURE__*/function () {
        function InquiryInputComponent(store, formBuilder, utilService, actionService, router, translate) {
          _classCallCheck(this, InquiryInputComponent);

          this.store = store;
          this.formBuilder = formBuilder;
          this.utilService = utilService;
          this.actionService = actionService;
          this.router = router;
          this.translate = translate;
          this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["getEnvironment"])();
        }

        _createClass(InquiryInputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isLoading = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_8__["getLoading"]));
            this.createInquiryForm();
          }
          /**
           * 照会フォーム作成
           */

        }, {
          key: "createInquiryForm",
          value: function createInquiryForm() {
            var TEL_MAX_LENGTH = 15;
            var TEL_MIN_LENGTH = 9;
            this.inquiryForm = this.formBuilder.group({
              confirmationNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]+$/)]],
              telephone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(TEL_MAX_LENGTH), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(TEL_MIN_LENGTH), function (control) {
                var field = control.root.get('telephone');

                if (field !== null) {
                  if (field.value === '') {
                    return null;
                  }

                  var parsedNumber = new RegExp(/^\+/).test(field.value) ? libphonenumber_js__WEBPACK_IMPORTED_MODULE_5__["parse"](field.value) : libphonenumber_js__WEBPACK_IMPORTED_MODULE_5__["parse"](field.value, 'JP');

                  if (parsedNumber.phone === undefined) {
                    return {
                      telephone: true
                    };
                  }

                  var isValid = libphonenumber_js__WEBPACK_IMPORTED_MODULE_5__["isValidNumber"](parsedNumber);

                  if (!isValid) {
                    return {
                      telephone: true
                    };
                  }
                }

                return null;
              }]]
            });
          }
          /**
           * 照会
           */

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var confirmationNumber, telephone;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      Object.keys(this.inquiryForm.controls).forEach(function (key) {
                        _this2.inquiryForm.controls[key].markAsTouched();
                      });
                      this.inquiryForm.controls.confirmationNumber.setValue(document.getElementById('confirmationNumber').value);
                      this.inquiryForm.controls.telephone.setValue(document.getElementById('telephone').value);

                      if (!this.inquiryForm.invalid) {
                        _context2.next = 5;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 5:
                      _context2.prev = 5;
                      confirmationNumber = this.inquiryForm.controls.confirmationNumber.value;
                      telephone = this.inquiryForm.controls.telephone.value;
                      _context2.next = 10;
                      return this.actionService.order.inquiry({
                        confirmationNumber: confirmationNumber,
                        customer: {
                          telephone: telephone
                        }
                      });

                    case 10:
                      this.router.navigate(['/inquiry/confirm']);
                      _context2.next = 16;
                      break;

                    case 13:
                      _context2.prev = 13;
                      _context2.t0 = _context2["catch"](5);
                      this.utilService.openAlert({
                        title: this.translate.instant('common.error'),
                        body: this.translate.instant('inquiry.input.validation')
                      });

                    case 16:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[5, 13]]);
            }));
          }
          /**
           * 確認番号変更
           */

        }, {
          key: "changeConfirmationNumber",
          value: function changeConfirmationNumber(value) {
            this.inquiryForm.controls.confirmationNumber.setValue(value);
          }
          /**
           * 電話番号変更
           */

        }, {
          key: "changeTelephone",
          value: function changeTelephone(value) {
            this.inquiryForm.controls.telephone.setValue(value);
          }
        }]);

        return InquiryInputComponent;
      }();

      InquiryInputComponent.ɵfac = function InquiryInputComponent_Factory(t) {
        return new (t || InquiryInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_7__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]));
      };

      InquiryInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InquiryInputComponent,
        selectors: [["app-inquiry-input"]],
        decls: 37,
        vars: 23,
        consts: [[3, "formGroup"], [3, "isClear"], [1, "contents"], [1, "container", "h-100", "p-3"], [1, "row", "h-100"], [1, "col-3", "h-100"], [1, "bg-dark", "h-100"], [1, "col-6"], [1, "mb-4"], [1, "inquiry-form", "mx-auto", "p-3", "bg-white"], [1, "form-group"], ["for", "", 1, "mb-2"], ["inputType", "string", 3, "inputValue", "change", 4, "ngIf"], ["type", "text", "class", "form-control", "formControlName", "confirmationNumber", "id", "confirmationNumber", 3, "placeholder", 4, "ngIf"], ["class", "mt-2", 4, "ngIf"], [1, "form-group", "mb-0"], ["inputType", "telephone", 3, "inputValue", "change", 4, "ngIf"], ["type", "password", "class", "form-control", "formControlName", "telephone", "id", "telephone", 3, "placeholder", 4, "ngIf"], [1, "col-3", "mh-100", "scroll-horizontal"], [1, "container", "h-100"], [1, "row", "align-items-center", "justify-content-center", "h-100"], [1, "col-3"], ["type", "button", "routerLink", "/purchase/cinema", 1, "btn", "btn-outline-light", "btn-block", "font-weight-bold", "py-2"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "font-weight-bold", "py-2", 3, "disabled", "click"], ["inputType", "string", 3, "inputValue", "change"], ["type", "text", "formControlName", "confirmationNumber", "id", "confirmationNumber", "readonly", "", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "confirmationNumber", "id", "confirmationNumber", 1, "form-control", 3, "placeholder"], [1, "mt-2"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["inputType", "telephone", 3, "inputValue", "change"], ["type", "password", "formControlName", "telephone", "id", "telephone", "readonly", "", 1, "form-control", 3, "placeholder"], ["type", "password", "formControlName", "telephone", "id", "telephone", 1, "form-control", 3, "placeholder"]],
        template: function InquiryInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InquiryInputComponent_app_numeric_keypad_14_Template, 3, 4, "app-numeric-keypad", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InquiryInputComponent_input_15_Template, 2, 3, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, InquiryInputComponent_div_16_Template, 3, 2, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, InquiryInputComponent_app_numeric_keypad_21_Template, 3, 4, "app-numeric-keypad", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, InquiryInputComponent_input_22_Template, 2, 3, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, InquiryInputComponent_div_23_Template, 5, 4, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InquiryInputComponent_Template_button_click_33_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.inquiryForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isClear", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 13, "common.confirmationNumber"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.environment.INPUT_KEYPAD);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.environment.INPUT_KEYPAD);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inquiryForm.controls.confirmationNumber.invalid && ctx.inquiryForm.controls.confirmationNumber.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 15, "common.telephone"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.environment.INPUT_KEYPAD);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.environment.INPUT_KEYPAD);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inquiryForm.controls.telephone.invalid && ctx.inquiryForm.controls.telephone.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 17, "inquiry.input.prev"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 19, ctx.isLoading));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 21, "inquiry.input.next"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _shared_components_parts_numeric_keypad_numeric_keypad_component__WEBPACK_IMPORTED_MODULE_12__["NumericKeypadComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_13__["NativeElementInjectorDirective"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
        styles: [""]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InquiryInputComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-inquiry-input',
            templateUrl: './inquiry-input.component.html',
            styleUrls: ['./inquiry-input.component.scss']
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_7__["UtilService"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_7__["ActionService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./app/modules/inquiry/components/pages/inquiry-print/inquiry-print.component.ts":
    /*!***************************************************************************************!*\
      !*** ./app/modules/inquiry/components/pages/inquiry-print/inquiry-print.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: InquiryPrintComponent */

    /***/
    function appModulesInquiryComponentsPagesInquiryPrintInquiryPrintComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InquiryPrintComponent", function () {
        return InquiryPrintComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../environments/environment */
      "./environments/environment.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var InquiryPrintComponent = /*#__PURE__*/function () {
        function InquiryPrintComponent(router) {
          _classCallCheck(this, InquiryPrintComponent);

          this.router = router;
          this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["getEnvironment"])();
        }
        /**
         * 初期化
         */


        _createClass(InquiryPrintComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            if (this.environment.INQUIRY_PRINT_SUCCESS_WAIT_TIME === '') {
              return;
            }

            var time = Number(this.environment.INQUIRY_PRINT_SUCCESS_WAIT_TIME);
            this.timer = setTimeout(function () {
              _this3.router.navigate(['/inquiry/input']);
            }, time);
          }
          /**
           * 破棄
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.timer === undefined) {
              return;
            }

            clearTimeout(this.timer);
          }
        }]);

        return InquiryPrintComponent;
      }();

      InquiryPrintComponent.ɵfac = function InquiryPrintComponent_Factory(t) {
        return new (t || InquiryPrintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      InquiryPrintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InquiryPrintComponent,
        selectors: [["app-inquiry-print"]],
        decls: 11,
        vars: 9,
        consts: [[1, "contents-width", "mx-auto", "px-3", "py-5"], [1, "mb-4"], [1, "text-large", "mb-4", "text-center", "font-weight-bold"], [1, "mb-4", "text-md-center", 3, "innerHTML"], [1, "buttons", "mx-auto", "text-center"], ["type", "button", "routerLink", "/inquiry/input", 1, "btn", "btn-primary", "btn-block", "py-3"]],
        template: function InquiryPrintComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "inquiry.print.title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "inquiry.print.read"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, "inquiry.print.prev"), " ");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
        styles: [""]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InquiryPrintComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-inquiry-print',
            templateUrl: './inquiry-print.component.html',
            styleUrls: ['./inquiry-print.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./app/modules/inquiry/inquiry-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./app/modules/inquiry/inquiry-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: InquiryRoutingModule */

    /***/
    function appModulesInquiryInquiryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InquiryRoutingModule", function () {
        return InquiryRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _canActivates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../canActivates */
      "./app/canActivates/index.ts");
      /* harmony import */


      var _shared_components_pages_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/components/pages/base/base.component */
      "./app/modules/shared/components/pages/base/base.component.ts");
      /* harmony import */


      var _components_pages_inquiry_confirm_inquiry_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/pages/inquiry-confirm/inquiry-confirm.component */
      "./app/modules/inquiry/components/pages/inquiry-confirm/inquiry-confirm.component.ts");
      /* harmony import */


      var _components_pages_inquiry_input_inquiry_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/pages/inquiry-input/inquiry-input.component */
      "./app/modules/inquiry/components/pages/inquiry-input/inquiry-input.component.ts");
      /* harmony import */


      var _components_pages_inquiry_print_inquiry_print_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/pages/inquiry-print/inquiry-print.component */
      "./app/modules/inquiry/components/pages/inquiry-print/inquiry-print.component.ts");

      var routes = [{
        path: '',
        component: _shared_components_pages_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"],
        canActivate: [_canActivates__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"], _canActivates__WEBPACK_IMPORTED_MODULE_2__["SettingGuardService"]],
        children: [{
          path: 'input',
          component: _components_pages_inquiry_input_inquiry_input_component__WEBPACK_IMPORTED_MODULE_5__["InquiryInputComponent"]
        }, {
          path: 'confirm',
          component: _components_pages_inquiry_confirm_inquiry_confirm_component__WEBPACK_IMPORTED_MODULE_4__["InquiryConfirmComponent"]
        }, {
          path: 'print',
          component: _components_pages_inquiry_print_inquiry_print_component__WEBPACK_IMPORTED_MODULE_6__["InquiryPrintComponent"]
        }]
      }];

      var InquiryRoutingModule = function InquiryRoutingModule() {
        _classCallCheck(this, InquiryRoutingModule);
      };

      InquiryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: InquiryRoutingModule
      });
      InquiryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function InquiryRoutingModule_Factory(t) {
          return new (t || InquiryRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InquiryRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InquiryRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./app/modules/inquiry/inquiry.module.ts":
    /*!***********************************************!*\
      !*** ./app/modules/inquiry/inquiry.module.ts ***!
      \***********************************************/

    /*! exports provided: InquiryModule */

    /***/
    function appModulesInquiryInquiryModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InquiryModule", function () {
        return InquiryModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./app/modules/shared/shared.module.ts");
      /* harmony import */


      var _components_pages_inquiry_confirm_inquiry_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/pages/inquiry-confirm/inquiry-confirm.component */
      "./app/modules/inquiry/components/pages/inquiry-confirm/inquiry-confirm.component.ts");
      /* harmony import */


      var _components_pages_inquiry_input_inquiry_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/pages/inquiry-input/inquiry-input.component */
      "./app/modules/inquiry/components/pages/inquiry-input/inquiry-input.component.ts");
      /* harmony import */


      var _components_pages_inquiry_print_inquiry_print_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/pages/inquiry-print/inquiry-print.component */
      "./app/modules/inquiry/components/pages/inquiry-print/inquiry-print.component.ts");
      /* harmony import */


      var _inquiry_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./inquiry-routing.module */
      "./app/modules/inquiry/inquiry-routing.module.ts");

      var InquiryModule = function InquiryModule() {
        _classCallCheck(this, InquiryModule);
      };

      InquiryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: InquiryModule
      });
      InquiryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function InquiryModule_Factory(t) {
          return new (t || InquiryModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _inquiry_routing_module__WEBPACK_IMPORTED_MODULE_6__["InquiryRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InquiryModule, {
          declarations: [_components_pages_inquiry_input_inquiry_input_component__WEBPACK_IMPORTED_MODULE_4__["InquiryInputComponent"], _components_pages_inquiry_confirm_inquiry_confirm_component__WEBPACK_IMPORTED_MODULE_3__["InquiryConfirmComponent"], _components_pages_inquiry_print_inquiry_print_component__WEBPACK_IMPORTED_MODULE_5__["InquiryPrintComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _inquiry_routing_module__WEBPACK_IMPORTED_MODULE_6__["InquiryRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InquiryModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_components_pages_inquiry_input_inquiry_input_component__WEBPACK_IMPORTED_MODULE_4__["InquiryInputComponent"], _components_pages_inquiry_confirm_inquiry_confirm_component__WEBPACK_IMPORTED_MODULE_3__["InquiryConfirmComponent"], _components_pages_inquiry_print_inquiry_print_component__WEBPACK_IMPORTED_MODULE_5__["InquiryPrintComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _inquiry_routing_module__WEBPACK_IMPORTED_MODULE_6__["InquiryRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();