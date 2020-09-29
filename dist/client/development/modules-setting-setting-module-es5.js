(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-setting-setting-module"], {
    /***/
    "./app/modules/setting/components/pages/setting/setting.component.ts":
    /*!***************************************************************************!*\
      !*** ./app/modules/setting/components/pages/setting/setting.component.ts ***!
      \***************************************************************************/

    /*! exports provided: SettingComponent */

    /***/
    function appModulesSettingComponentsPagesSettingSettingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingComponent", function () {
        return SettingComponent;
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


      var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-intl-tel-input */
      "../../node_modules/ngx-intl-tel-input/__ivy_ngcc__/fesm2015/ngx-intl-tel-input.js");
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


      var _shared_pipes_libphonenumber_format_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../shared/pipes/libphonenumber-format.pipe */
      "./app/modules/shared/pipes/libphonenumber-format.pipe.ts");
      /* harmony import */


      var _shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../shared/components/parts/header/header.component */
      "./app/modules/shared/components/parts/header/header.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../shared/components/parts/footer/footer.component */
      "./app/modules/shared/components/parts/footer/footer.component.ts");
      /* harmony import */


      var _shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../shared/pipes/change-language.pipe */
      "./app/modules/shared/pipes/change-language.pipe.ts");

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

      var _c0 = ["intlTelInput"];

      function SettingComponent_form_5_div_2_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var key_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "form.label." + key_r9));
        }
      }

      function SettingComponent_form_5_div_2_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var key_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var tmp_0_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, (tmp_0_0 = ctx_r11.getAdditionalProperty(key_r9)) == null ? null : tmp_0_0.label), "");
        }
      }

      function SettingComponent_form_5_div_2_p_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "form.required"), " ");
        }
      }

      function SettingComponent_form_5_div_2_input_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          var key_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", key_r9)("id", key_r9)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, "form.placeholder." + key_r9));
        }
      }

      function SettingComponent_form_5_div_2_select_8_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "changeLanguage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var theater_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", theater_r25.branchCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, theater_r25.name), "");
        }
      }

      function SettingComponent_form_5_div_2_select_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingComponent_form_5_div_2_select_8_Template_select_change_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r26.changePosList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SettingComponent_form_5_div_2_select_8_option_4_Template, 3, 4, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var key_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", key_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "setting.unselected"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.theaters);
        }
      }

      function SettingComponent_form_5_div_2_select_9_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pos_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pos_r30.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pos_r30.name);
        }
      }

      function SettingComponent_form_5_div_2_select_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SettingComponent_form_5_div_2_select_9_option_4_Template, 2, 2, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var key_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", key_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "setting.unselected"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.posList);
        }
      }

      function SettingComponent_form_5_div_2_input_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          var key_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", key_r9)("id", key_r9)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, "form.placeholder." + key_r9));
        }
      }

      var _c1 = function _c1(a0) {
        return [a0];
      };

      var _c2 = function _c2(a0, a1) {
        return [a0, a1];
      };

      function SettingComponent_form_5_div_2_ngx_intl_tel_input_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-intl-tel-input", 48, 49);
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("preferredCountries", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx_r17.CountryISO.Japan))("enableAutoCountrySelect", false)("enablePlaceholder", true)("searchCountryFlag", true)("searchCountryField", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c2, ctx_r17.SearchCountryField.Iso2, ctx_r17.SearchCountryField.Name))("selectFirstCountry", false)("selectedCountryISO", ctx_r17.CountryISO.Japan)("maxLength", 15)("tooltipField", ctx_r17.TooltipLabel.Name)("phoneValidation", true)("separateDialCode", false);
        }
      }

      function SettingComponent_form_5_div_2_select_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var key_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", key_r9)("id", key_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "form.option.unselected"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, "form.option.man"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, "form.option.woman"));
        }
      }

      function SettingComponent_form_5_div_2_textarea_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "textarea", 53);
        }

        if (rf & 2) {
          var key_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", key_r9)("id", key_r9);
        }
      }

      function SettingComponent_form_5_div_2_div_14_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "form.validation.required"), " ");
        }
      }

      var _c3 = function _c3(a0) {
        return {
          value: a0
        };
      };

      function SettingComponent_form_5_div_2_div_14_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var key_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, "form.validation.maxlength", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx_r37.settingForm.controls[key_r9].errors == null ? null : ctx_r37.settingForm.controls[key_r9].errors.maxlength.requiredLength)), " ");
        }
      }

      function SettingComponent_form_5_div_2_div_14_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "form.validation.email"), " ");
        }
      }

      function SettingComponent_form_5_div_2_div_14_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "form.validation.telephone"), " ");
        }
      }

      function SettingComponent_form_5_div_2_div_14_div_5_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "form.validation.fullKana"), "");
        }
      }

      function SettingComponent_form_5_div_2_div_14_div_5_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "form.validation.lowercaseLetters"), "");
        }
      }

      function SettingComponent_form_5_div_2_div_14_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingComponent_form_5_div_2_div_14_div_5_p_1_Template, 3, 3, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SettingComponent_form_5_div_2_div_14_div_5_p_3_Template, 3, 3, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var key_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var tmp_0_0 = null;
          var currVal_0 = ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r40.user)) == null ? null : tmp_0_0.language) === "ja" && (ctx_r40.settingForm.controls[key_r9].errors == null ? null : ctx_r40.settingForm.controls[key_r9].errors.customPattern);
          var tmp_1_0 = null;
          var currVal_1 = ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r40.user)) == null ? null : tmp_1_0.language) !== "ja" && (ctx_r40.settingForm.controls[key_r9].errors == null ? null : ctx_r40.settingForm.controls[key_r9].errors.customPattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_1);
        }
      }

      function SettingComponent_form_5_div_2_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingComponent_form_5_div_2_div_14_p_1_Template, 3, 3, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SettingComponent_form_5_div_2_div_14_p_2_Template, 3, 6, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SettingComponent_form_5_div_2_div_14_p_3_Template, 3, 3, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SettingComponent_form_5_div_2_div_14_p_4_Template, 3, 3, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SettingComponent_form_5_div_2_div_14_div_5_Template, 5, 6, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var key_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.settingForm.controls[key_r9].errors == null ? null : ctx_r20.settingForm.controls[key_r9].errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.settingForm.controls[key_r9].errors == null ? null : ctx_r20.settingForm.controls[key_r9].errors.maxlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.settingForm.controls[key_r9].errors == null ? null : ctx_r20.settingForm.controls[key_r9].errors.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.settingForm.controls[key_r9].errors == null ? null : ctx_r20.settingForm.controls[key_r9].errors.validatePhoneNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", key_r9 === "familyName" || key_r9 === "givenName");
        }
      }

      function SettingComponent_form_5_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SettingComponent_form_5_div_2_p_3_Template, 3, 3, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SettingComponent_form_5_div_2_p_4_Template, 3, 3, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SettingComponent_form_5_div_2_p_5_Template, 3, 3, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SettingComponent_form_5_div_2_input_7_Template, 2, 5, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SettingComponent_form_5_div_2_select_8_Template, 5, 5, "select", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SettingComponent_form_5_div_2_select_9_Template, 5, 5, "select", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SettingComponent_form_5_div_2_input_10_Template, 2, 5, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SettingComponent_form_5_div_2_ngx_intl_tel_input_11_Template, 2, 16, "ngx-intl-tel-input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SettingComponent_form_5_div_2_select_12_Template, 10, 11, "select", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SettingComponent_form_5_div_2_textarea_13_Template, 1, 2, "textarea", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SettingComponent_form_5_div_2_div_14_Template, 6, 5, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var key_r9 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var tmp_3_0 = null;
          var currVal_3 = key_r9 !== "theaterBranchCode" && key_r9 !== "posId" && key_r9 !== "email" && key_r9 !== "telephone" && key_r9 !== "gender" && ((tmp_3_0 = ctx_r1.getAdditionalProperty(key_r9)) == null ? null : tmp_3_0.inputType) !== "textarea";
          var tmp_9_0 = null;
          var currVal_9 = ((tmp_9_0 = ctx_r1.getAdditionalProperty(key_r9)) == null ? null : tmp_9_0.inputType) === "textarea";

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.getAdditionalProperty(key_r9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.getAdditionalProperty(key_r9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isRequired(key_r9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", key_r9 === "theaterBranchCode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", key_r9 === "posId");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", key_r9 === "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", key_r9 === "telephone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", key_r9 === "gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.settingForm.controls[key_r9].invalid && ctx_r1.settingForm.controls[key_r9].touched);
        }
      }

      function SettingComponent_form_5_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var printer_r46 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", printer_r46.connectionType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, printer_r46.name), "");
        }
      }

      function SettingComponent_form_5_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingComponent_form_5_button_11_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r47.print();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "setting.printer.testPrinting"));
        }
      }

      function SettingComponent_form_5_div_19_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "form.validation.required"), "");
        }
      }

      function SettingComponent_form_5_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingComponent_form_5_div_19_p_1_Template, 3, 3, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.settingForm.controls.printerIpAddress.errors == null ? null : ctx_r4.settingForm.controls.printerIpAddress.errors.required);
        }
      }

      function SettingComponent_form_5_div_34_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "form.validation.required"), "");
        }
      }

      function SettingComponent_form_5_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingComponent_form_5_div_34_p_1_Template, 3, 3, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.settingForm.controls.paymentCash.errors == null ? null : ctx_r5.settingForm.controls.paymentCash.errors.required);
        }
      }

      function SettingComponent_form_5_div_43_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "form.validation.required"), "");
        }
      }

      function SettingComponent_form_5_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingComponent_form_5_div_43_p_1_Template, 3, 3, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.settingForm.controls.paymentCreditcard.errors == null ? null : ctx_r6.settingForm.controls.paymentCreditcard.errors.required);
        }
      }

      function SettingComponent_form_5_div_49_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "form.validation.required"), "");
        }
      }

      function SettingComponent_form_5_div_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingComponent_form_5_div_49_p_1_Template, 3, 3, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.settingForm.controls.paymentEmoney.errors == null ? null : ctx_r7.settingForm.controls.paymentEmoney.errors.required);
        }
      }

      function SettingComponent_form_5_div_55_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "form.validation.required"), "");
        }
      }

      function SettingComponent_form_5_div_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SettingComponent_form_5_div_55_p_1_Template, 3, 3, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.settingForm.controls.paymentCode.errors == null ? null : ctx_r8.settingForm.controls.paymentCode.errors.required);
        }
      }

      function SettingComponent_form_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SettingComponent_form_5_div_2_Template, 15, 11, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingComponent_form_5_Template_select_change_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r54.changePrinterType();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SettingComponent_form_5_option_10_Template, 3, 4, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SettingComponent_form_5_button_11_Template, 3, 3, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SettingComponent_form_5_div_19_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SettingComponent_form_5_div_34_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingComponent_form_5_Template_button_click_35_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r56.connection("Cash");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SettingComponent_form_5_div_43_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, SettingComponent_form_5_div_49_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, SettingComponent_form_5_div_55_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.settingForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.getProfileFormKeys());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 18, "setting.printer.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.printers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.settingForm.controls.printerType.value && ctx_r0.settingForm.controls.printerType.value !== ctx_r0.connectionType.None);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 20, "setting.printer.ipAddress"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.settingForm.controls.printerIpAddress.invalid && ctx_r0.settingForm.controls.printerIpAddress.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 22, "setting.printer.ipAddressDescription"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 24, "setting.payment.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 26, "setting.payment.cash.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.settingForm.controls.paymentCash.invalid && ctx_r0.settingForm.controls.paymentCash.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 28, "setting.connection"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 30, "setting.payment.creditcard.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.settingForm.controls.paymentCreditcard.invalid && ctx_r0.settingForm.controls.paymentCreditcard.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 32, "setting.payment.emoney.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.settingForm.controls.paymentEmoney.invalid && ctx_r0.settingForm.controls.paymentEmoney.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 34, "setting.payment.code.label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.settingForm.controls.paymentCode.invalid && ctx_r0.settingForm.controls.paymentCode.touched);
        }
      }

      var SettingComponent = /*#__PURE__*/function () {
        function SettingComponent(formBuilder, store, utilService, actionService, masterService, translate, router, epsonEPOSService) {
          _classCallCheck(this, SettingComponent);

          this.formBuilder = formBuilder;
          this.store = store;
          this.utilService = utilService;
          this.actionService = actionService;
          this.masterService = masterService;
          this.translate = translate;
          this.router = router;
          this.epsonEPOSService = epsonEPOSService;
          this.printers = ___WEBPACK_IMPORTED_MODULE_6__["Models"].Util.Printer.printers;
          this.connectionType = ___WEBPACK_IMPORTED_MODULE_6__["Models"].Util.Printer.ConnectionType;
          this.viewType = ___WEBPACK_IMPORTED_MODULE_6__["Models"].Util.ViewType;
          this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["getEnvironment"])();
          this.SearchCountryField = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_5__["SearchCountryField"];
          this.TooltipLabel = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_5__["TooltipLabel"];
          this.CountryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_5__["CountryISO"];
        }
        /**
         * 初期化
         */


        _createClass(SettingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.user = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getUser"]));
                      this.error = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getError"]));
                      this.isLoading = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["getLoading"]));
                      this.posList = [];
                      this.theaters = [];
                      _context.prev = 5;
                      _context.next = 8;
                      return this.masterService.getTheaters();

                    case 8:
                      this.theaters = _context.sent;
                      _context.next = 11;
                      return this.createSettlingForm();

                    case 11:
                      _context.next = 17;
                      break;

                    case 13:
                      _context.prev = 13;
                      _context.t0 = _context["catch"](5);
                      console.error(_context.t0);
                      this.router.navigate(['/error']);

                    case 17:
                      setTimeout(function () {
                        if (_this.intlTelInput === undefined) {
                          return;
                        }

                        var findResult = _this.intlTelInput.allCountries.find(function (c) {
                          return c.iso2 === ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_5__["CountryISO"].Japan;
                        });

                        if (findResult === undefined) {
                          return;
                        }

                        findResult.placeHolder = _this.translate.instant('form.placeholder.telephone');
                      }, 0);

                    case 18:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[5, 13]]);
            }));
          }
          /**
           * フォーム作成
           */

        }, {
          key: "createSettlingForm",
          value: function createSettlingForm() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var profile, user, customerContact;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      profile = this.environment.PROFILE;
                      this.settingForm = this.formBuilder.group({
                        theaterBranchCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                        posId: [''],
                        printerType: [___WEBPACK_IMPORTED_MODULE_6__["Models"].Util.Printer.ConnectionType.None],
                        printerIpAddress: [''],
                        paymentCash: [''],
                        paymentCreditcard: [''],
                        paymentEmoney: [''],
                        paymentCode: ['']
                      });
                      profile.forEach(function (p) {
                        var validators = [];

                        if (p.required !== undefined && p.required) {
                          validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                        }

                        if (p.maxLength !== undefined) {
                          validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(p.maxLength));
                        }

                        if (p.minLength !== undefined) {
                          validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(p.minLength));
                        }

                        if (p.pattern !== undefined) {
                          validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(p.pattern));
                        }

                        if (p.key === 'email') {
                          validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email);
                        }

                        _this2.settingForm.addControl(p.key, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](p.value, validators));
                      });
                      _context2.next = 5;
                      return this.actionService.user.getData();

                    case 5:
                      user = _context2.sent;

                      if (user.theater !== undefined) {
                        this.settingForm.controls.theaterBranchCode.setValue(user.theater.branchCode);
                        this.changePosList();
                      }

                      if (user.pos !== undefined) {
                        this.settingForm.controls.posId.setValue(user.pos.id);
                      }

                      customerContact = user.customerContact;

                      if (customerContact !== undefined) {
                        Object.keys(customerContact).forEach(function (key) {
                          var value = customerContact[key];

                          if (value === undefined || _this2.settingForm.controls[key] === undefined) {
                            return;
                          }

                          if (key === 'telephone') {
                            _this2.settingForm.controls.telephone.setValue(new _shared_pipes_libphonenumber_format_pipe__WEBPACK_IMPORTED_MODULE_10__["LibphonenumberFormatPipe"]().transform(value));

                            return;
                          }

                          _this2.settingForm.controls[key].setValue(value);
                        });
                      }

                      if (user.printer !== undefined) {
                        this.settingForm.controls.printerType.setValue(user.printer.connectionType);
                        this.settingForm.controls.printerIpAddress.setValue(user.printer.ipAddress);
                      }

                      if (user.payment !== undefined && user.payment.cash !== undefined) {
                        this.settingForm.controls.paymentCash.setValue(user.payment.cash.ipAddress);
                      }

                      if (user.payment !== undefined && user.payment.creditcard !== undefined) {
                        this.settingForm.controls.paymentCreditcard.setValue(user.payment.creditcard.ipAddress);
                      }

                      if (user.payment !== undefined && user.payment.emoney !== undefined) {
                        this.settingForm.controls.paymentEmoney.setValue(user.payment.emoney.ipAddress);
                      }

                      if (user.payment !== undefined && user.payment.code !== undefined) {
                        this.settingForm.controls.paymentCode.setValue(user.payment.code.ipAddress);
                      }

                      console.log(this.settingForm);

                    case 16:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
          /**
           * POS変更
           */

        }, {
          key: "changePosList",
          value: function changePosList() {
            this.settingForm.controls.posId.setValue('');
            var theaterBranchCode = this.settingForm.controls.theaterBranchCode.value;

            if (theaterBranchCode === '') {
              this.posList = [];
              return;
            }

            var findResult = this.theaters.find(function (t) {
              return t.branchCode === theaterBranchCode;
            });

            if (findResult === undefined) {
              this.posList = [];
              return;
            }

            this.posList = findResult.hasPOS === undefined ? [] : findResult.hasPOS;
          }
          /**
           * 設定変更
           */

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              var theaterBranchCode, posId, theater, pos, payment;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      Object.keys(this.settingForm.controls).forEach(function (key) {
                        _this3.settingForm.controls[key].markAsTouched();
                      });

                      if (!this.settingForm.invalid) {
                        _context3.next = 4;
                        break;
                      }

                      this.utilService.openAlert({
                        title: this.translate.instant('common.error'),
                        body: this.translate.instant('setting.alert.validation')
                      });
                      return _context3.abrupt("return");

                    case 4:
                      _context3.prev = 4;
                      theaterBranchCode = this.settingForm.controls.theaterBranchCode.value;
                      posId = this.settingForm.controls.posId.value;
                      theater = this.theaters.find(function (t) {
                        return t.branchCode === theaterBranchCode;
                      });

                      if (!(theater === undefined)) {
                        _context3.next = 10;
                        break;
                      }

                      throw new Error('theater not found').message;

                    case 10:
                      pos = theater.hasPOS === undefined ? theater.hasPOS : theater.hasPOS.find(function (p) {
                        return p.id === posId;
                      });
                      payment = {
                        cash: this.settingForm.controls.paymentCash.value === '' ? undefined : {
                          ipAddress: this.settingForm.controls.paymentCash.value
                        },
                        creditcard: this.settingForm.controls.paymentCreditcard.value === '' ? undefined : {
                          ipAddress: this.settingForm.controls.paymentCreditcard.value
                        },
                        emoney: this.settingForm.controls.paymentEmoney.value === '' ? undefined : {
                          ipAddress: this.settingForm.controls.paymentEmoney.value
                        },
                        code: this.settingForm.controls.paymentCode.value === '' ? undefined : {
                          ipAddress: this.settingForm.controls.paymentCode.value
                        }
                      };
                      this.actionService.user.updateAll({
                        pos: pos,
                        theater: theater,
                        customerContact: {
                          familyName: this.settingForm.controls.familyName === undefined ? undefined : this.settingForm.controls.familyName.value,
                          givenName: this.settingForm.controls.givenName === undefined ? undefined : this.settingForm.controls.givenName.value,
                          email: this.settingForm.controls.email === undefined ? undefined : this.settingForm.controls.email.value,
                          telephone: this.settingForm.controls.telephone === undefined ? undefined : this.settingForm.controls.telephone.value.e164Number,
                          // ? undefined : this.settingForm.controls.telephone.value,
                          age: this.settingForm.controls.age === undefined ? undefined : this.settingForm.controls.age.value,
                          address: this.settingForm.controls.address === undefined ? undefined : this.settingForm.controls.address.value,
                          gender: this.settingForm.controls.gender === undefined ? undefined : this.settingForm.controls.gender.value
                        },
                        printer: {
                          ipAddress: this.settingForm.controls.printerIpAddress.value,
                          connectionType: this.settingForm.controls.printerType.value
                        },
                        payment: payment.cash !== undefined || payment.creditcard !== undefined || payment.emoney !== undefined || payment.code !== undefined ? payment : undefined
                      });
                      this.utilService.openAlert({
                        title: this.translate.instant('common.complete'),
                        body: this.translate.instant('setting.alert.success')
                      });
                      _context3.next = 19;
                      break;

                    case 16:
                      _context3.prev = 16;
                      _context3.t0 = _context3["catch"](4);
                      console.error(_context3.t0);

                    case 19:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[4, 16]]);
            }));
          }
          /**
           * 印刷
           */

        }, {
          key: "print",
          value: function print() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var printer;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      printer = {
                        connectionType: this.settingForm.controls.printerType.value,
                        ipAddress: this.settingForm.controls.printerIpAddress.value
                      };
                      _context4.prev = 1;
                      _context4.next = 4;
                      return this.actionService.order.print({
                        orders: [],
                        printer: printer
                      });

                    case 4:
                      _context4.next = 10;
                      break;

                    case 6:
                      _context4.prev = 6;
                      _context4.t0 = _context4["catch"](1);
                      console.error(_context4.t0);
                      this.utilService.openAlert({
                        title: this.translate.instant('common.error'),
                        body: "\n                <p class=\"mb-4\">".concat(this.translate.instant('setting.alert.print'), "</p>\n                    <div class=\"p-3 bg-light-gray select-text\">\n                    <code>").concat(_context4.t0, "</code>\n                </div>")
                      });

                    case 10:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[1, 6]]);
            }));
          }
          /**
           * プリンター変更
           */

        }, {
          key: "changePrinterType",
          value: function changePrinterType() {
            if (this.settingForm.controls.printerType.value === ___WEBPACK_IMPORTED_MODULE_6__["Models"].Util.Printer.ConnectionType.StarBluetooth) {
              this.settingForm.controls.printerIpAddress.setValue(this.translate.instant('setting.starBluetoothAddress'));
            }
          }
          /**
           * 必須判定
           */

        }, {
          key: "isRequired",
          value: function isRequired(key) {
            if (key === 'theaterBranchCode') {
              return true;
            }

            return this.environment.PROFILE.find(function (p) {
              return p.key === key && p.required;
            }) !== undefined;
          }
          /**
           * 購入者情報フォームのコントロールkeyを配列で返却
           */

        }, {
          key: "getProfileFormKeys",
          value: function getProfileFormKeys() {
            return Object.keys(this.settingForm.controls).filter(function (key) {
              return key !== 'printerType' && key !== 'printerIpAddress' && !/payment/.test(key);
            });
          }
          /**
           * 追加特性項目取得
           */

        }, {
          key: "getAdditionalProperty",
          value: function getAdditionalProperty(key) {
            return this.environment.PROFILE.find(function (p) {
              return /additionalProperty/.test(p.key) && p.key === key;
            });
          }
        }, {
          key: "connection",
          value: function connection(paymentType) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var ipAddress;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.prev = 0;

                      if (!(paymentType === 'Cash')) {
                        _context5.next = 7;
                        break;
                      }

                      ipAddress = this.settingForm.controls.paymentCash.value;
                      _context5.next = 5;
                      return this.epsonEPOSService.cashchanger.init({
                        ipAddress: ipAddress
                      });

                    case 5:
                      _context5.next = 7;
                      return this.epsonEPOSService.cashchanger.disconnect();

                    case 7:
                      this.utilService.openAlert({
                        title: this.translate.instant('common.complete'),
                        body: this.translate.instant('setting.alert.connection')
                      });
                      _context5.next = 14;
                      break;

                    case 10:
                      _context5.prev = 10;
                      _context5.t0 = _context5["catch"](0);
                      console.error(_context5.t0);
                      this.utilService.openAlert({
                        title: this.translate.instant('common.error'),
                        body: "\n                <div class=\"p-3 bg-light-gray select-text\">\n                    <code>".concat(_context5.t0, "</code>\n                </div>")
                      });

                    case 14:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[0, 10]]);
            }));
          }
        }]);

        return SettingComponent;
      }();

      SettingComponent.ɵfac = function SettingComponent_Factory(t) {
        return new (t || SettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["EpsonEPOSService"]));
      };

      SettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SettingComponent,
        selectors: [["app-setting"]],
        viewQuery: function SettingComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.intlTelInput = _t.first);
          }
        },
        decls: 18,
        vars: 12,
        consts: [[3, "isClear"], [1, "contents", "scroll-horizontal"], [1, "container", "p-3"], [1, "row"], [1, "col-12"], [3, "formGroup", 4, "ngIf"], [1, "container", "h-100"], [1, "row", "align-items-center", "justify-content-center", "h-100"], [1, "col-3"], ["type", "button", 1, "btn", "btn-outline-light", "btn-block", "font-weight-bold", "py-2", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "font-weight-bold", "py-2", 3, "disabled", "click"], [3, "formGroup"], [1, "p-3", "bg-white"], ["class", "form-group row", 4, "ngFor", "ngForOf"], [1, "form-group"], [1, "col-md-4", "py-2", "text-md-right"], [1, "col-md-8"], ["formControlName", "printerType", 1, "form-control", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", "class", "btn btn-sm btn-primary py-2 mt-2", 3, "click", 4, "ngIf"], ["type", "text", "formControlName", "printerIpAddress", "placeholder", "0.0.0.0", 1, "form-control"], ["class", "mt-2", 4, "ngIf"], [1, "text-small", "mt-2"], [1, "row", "align-items-center"], [1, "py-2"], ["type", "text", "formControlName", "paymentCash", "placeholder", "0.0.0.0", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary", "mt-2", 3, "click"], ["type", "text", "formControlName", "paymentCreditcard", "placeholder", "0.0.0.0", 1, "form-control"], ["type", "text", "formControlName", "paymentEmoney", "placeholder", "0.0.0.0", 1, "form-control"], ["type", "text", "formControlName", "paymentCode", "placeholder", "0.0.0.0", 1, "form-control"], [1, "form-group", "row"], [1, "d-inline-flex", "align-items-center"], [4, "ngIf"], ["class", "badge badge-danger ml-2", 4, "ngIf"], ["type", "text", "class", "form-control", 3, "formControlName", "id", "placeholder", 4, "ngIf"], ["class", "form-control", 3, "formControlName", "change", 4, "ngIf"], ["class", "form-control", 3, "formControlName", 4, "ngIf"], ["type", "email", "class", "form-control", 3, "formControlName", "id", "placeholder", 4, "ngIf"], ["inputId", "telephone", "name", "telephone", "formControlName", "telephone", 3, "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "searchCountryFlag", "searchCountryField", "selectFirstCountry", "selectedCountryISO", "maxLength", "tooltipField", "phoneValidation", "separateDialCode", 4, "ngIf"], ["class", "form-control", 3, "formControlName", "id", 4, "ngIf"], ["class", "form-control", "placeholder", "", 3, "formControlName", "id", 4, "ngIf"], [1, "badge", "badge-danger", "ml-2"], ["type", "text", 1, "form-control", 3, "formControlName", "id", "placeholder"], [1, "form-control", 3, "formControlName", "change"], ["value", ""], [3, "value"], [1, "form-control", 3, "formControlName"], ["type", "email", 1, "form-control", 3, "formControlName", "id", "placeholder"], ["inputId", "telephone", "name", "telephone", "formControlName", "telephone", 3, "preferredCountries", "enableAutoCountrySelect", "enablePlaceholder", "searchCountryFlag", "searchCountryField", "selectFirstCountry", "selectedCountryISO", "maxLength", "tooltipField", "phoneValidation", "separateDialCode"], ["intlTelInput", ""], [1, "form-control", 3, "formControlName", "id"], ["value", "man"], ["value", "woman"], ["placeholder", "", 1, "form-control", 3, "formControlName", "id"], [1, "mt-2"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "py-2", "mt-2", 3, "click"]],
        template: function SettingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SettingComponent_form_5_Template, 56, 36, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingComponent_Template_button_click_14_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isClear", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.environment.BASE_URL);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 6, "setting.prev"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 8, ctx.isLoading));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 10, "setting.next"));
          }
        },
        directives: [_shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_5__["NativeElementInjectorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_5__["NgxIntlTelInputComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"], _shared_pipes_change_language_pipe__WEBPACK_IMPORTED_MODULE_14__["ChangeLanguagePipe"]],
        styles: [""]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-setting',
            templateUrl: './setting.component.html',
            styleUrls: ['./setting.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_8__["ActionService"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_8__["MasterService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_8__["EpsonEPOSService"]
          }];
        }, {
          intlTelInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['intlTelInput']
          }]
        });
      })();
      /***/

    },

    /***/
    "./app/modules/setting/setting-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./app/modules/setting/setting-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: SettingRoutingModule */

    /***/
    function appModulesSettingSettingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingRoutingModule", function () {
        return SettingRoutingModule;
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


      var _shared_components_pages_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/components/pages/base/base.component */
      "./app/modules/shared/components/pages/base/base.component.ts");
      /* harmony import */


      var _components_pages_setting_setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/pages/setting/setting.component */
      "./app/modules/setting/components/pages/setting/setting.component.ts");

      var routes = [{
        path: '',
        component: _shared_components_pages_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"],
        children: [{
          path: '',
          component: _components_pages_setting_setting_component__WEBPACK_IMPORTED_MODULE_3__["SettingComponent"]
        }]
      }];

      var SettingRoutingModule = function SettingRoutingModule() {
        _classCallCheck(this, SettingRoutingModule);
      };

      SettingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SettingRoutingModule
      });
      SettingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SettingRoutingModule_Factory(t) {
          return new (t || SettingRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingRoutingModule, [{
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
    "./app/modules/setting/setting.module.ts":
    /*!***********************************************!*\
      !*** ./app/modules/setting/setting.module.ts ***!
      \***********************************************/

    /*! exports provided: SettingModule */

    /***/
    function appModulesSettingSettingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingModule", function () {
        return SettingModule;
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


      var _components_pages_setting_setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/pages/setting/setting.component */
      "./app/modules/setting/components/pages/setting/setting.component.ts");
      /* harmony import */


      var _setting_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./setting-routing.module */
      "./app/modules/setting/setting-routing.module.ts");

      var SettingModule = function SettingModule() {
        _classCallCheck(this, SettingModule);
      };

      SettingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: SettingModule
      });
      SettingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function SettingModule_Factory(t) {
          return new (t || SettingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _setting_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SettingModule, {
          declarations: [_components_pages_setting_setting_component__WEBPACK_IMPORTED_MODULE_3__["SettingComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _setting_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SettingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_components_pages_setting_setting_component__WEBPACK_IMPORTED_MODULE_3__["SettingComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _setting_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();