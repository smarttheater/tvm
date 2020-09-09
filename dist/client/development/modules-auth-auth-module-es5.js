(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"], {
    /***/
    "./app/modules/auth/auth-routing.module.ts":
    /*!*************************************************!*\
      !*** ./app/modules/auth/auth-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: AuthRoutingModule */

    /***/
    function appModulesAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
        return AuthRoutingModule;
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


      var _components_pages_auth_index_auth_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/pages/auth-index/auth-index.component */
      "./app/modules/auth/components/pages/auth-index/auth-index.component.ts");
      /* harmony import */


      var _components_pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/pages/auth-signin/auth-signin.component */
      "./app/modules/auth/components/pages/auth-signin/auth-signin.component.ts");
      /* harmony import */


      var _components_pages_auth_signout_auth_signout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/pages/auth-signout/auth-signout.component */
      "./app/modules/auth/components/pages/auth-signout/auth-signout.component.ts");

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _components_pages_auth_index_auth_index_component__WEBPACK_IMPORTED_MODULE_3__["AuthIndexComponent"]
        }, {
          path: 'signin',
          canActivate: [_canActivates__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
          component: _components_pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_4__["AuthSigninComponent"]
        }, {
          path: 'signout',
          component: _components_pages_auth_signout_auth_signout_component__WEBPACK_IMPORTED_MODULE_5__["AuthSignoutComponent"]
        }]
      }];

      var AuthRoutingModule = function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      };

      AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthRoutingModule
      });
      AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthRoutingModule_Factory(t) {
          return new (t || AuthRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
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
    "./app/modules/auth/auth.module.ts":
    /*!*****************************************!*\
      !*** ./app/modules/auth/auth.module.ts ***!
      \*****************************************/

    /*! exports provided: AuthModule */

    /***/
    function appModulesAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
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


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth-routing.module */
      "./app/modules/auth/auth-routing.module.ts");
      /* harmony import */


      var _components_pages_auth_index_auth_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/pages/auth-index/auth-index.component */
      "./app/modules/auth/components/pages/auth-index/auth-index.component.ts");
      /* harmony import */


      var _components_pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/pages/auth-signin/auth-signin.component */
      "./app/modules/auth/components/pages/auth-signin/auth-signin.component.ts");
      /* harmony import */


      var _components_pages_auth_signout_auth_signout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/pages/auth-signout/auth-signout.component */
      "./app/modules/auth/components/pages/auth-signout/auth-signout.component.ts");

      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthModule, {
          declarations: [_components_pages_auth_index_auth_index_component__WEBPACK_IMPORTED_MODULE_4__["AuthIndexComponent"], _components_pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_5__["AuthSigninComponent"], _components_pages_auth_signout_auth_signout_component__WEBPACK_IMPORTED_MODULE_6__["AuthSignoutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_components_pages_auth_index_auth_index_component__WEBPACK_IMPORTED_MODULE_4__["AuthIndexComponent"], _components_pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_5__["AuthSigninComponent"], _components_pages_auth_signout_auth_signout_component__WEBPACK_IMPORTED_MODULE_6__["AuthSignoutComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./app/modules/auth/components/pages/auth-index/auth-index.component.ts":
    /*!******************************************************************************!*\
      !*** ./app/modules/auth/components/pages/auth-index/auth-index.component.ts ***!
      \******************************************************************************/

    /*! exports provided: AuthIndexComponent */

    /***/
    function appModulesAuthComponentsPagesAuthIndexAuthIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthIndexComponent", function () {
        return AuthIndexComponent;
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


      var _services_cinerino_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../services/cinerino.service */
      "./app/services/cinerino.service.ts");
      /* harmony import */


      var _shared_components_parts_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../shared/components/parts/loading/loading.component */
      "./app/modules/shared/components/parts/loading/loading.component.ts");

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

      var AuthIndexComponent = /*#__PURE__*/function () {
        function AuthIndexComponent(cinerino, router) {
          _classCallCheck(this, AuthIndexComponent);

          this.cinerino = cinerino;
          this.router = router;
          this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["getEnvironment"])();
        }

        _createClass(AuthIndexComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      _context.next = 3;
                      return this.cinerino.getServices();

                    case 3:
                      this.router.navigate([this.environment.BASE_URL]);
                      _context.next = 10;
                      break;

                    case 6:
                      _context.prev = 6;
                      _context.t0 = _context["catch"](0);
                      _context.next = 10;
                      return this.cinerino.signIn();

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 6]]);
            }));
          }
        }]);

        return AuthIndexComponent;
      }();

      AuthIndexComponent.ɵfac = function AuthIndexComponent_Factory(t) {
        return new (t || AuthIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cinerino_service__WEBPACK_IMPORTED_MODULE_3__["CinerinoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AuthIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthIndexComponent,
        selectors: [["app-auth-index"]],
        decls: 1,
        vars: 1,
        consts: [["process", "process.authAction.CheckLogin", 3, "isLoading"]],
        template: function AuthIndexComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isLoading", true);
          }
        },
        directives: [_shared_components_parts_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"]],
        styles: [""]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthIndexComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-auth-index',
            templateUrl: './auth-index.component.html',
            styleUrls: ['./auth-index.component.scss']
          }]
        }], function () {
          return [{
            type: _services_cinerino_service__WEBPACK_IMPORTED_MODULE_3__["CinerinoService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./app/modules/auth/components/pages/auth-signin/auth-signin.component.ts":
    /*!********************************************************************************!*\
      !*** ./app/modules/auth/components/pages/auth-signin/auth-signin.component.ts ***!
      \********************************************************************************/

    /*! exports provided: AuthSigninComponent */

    /***/
    function appModulesAuthComponentsPagesAuthSigninAuthSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthSigninComponent", function () {
        return AuthSigninComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../services */
      "./app/services/index.ts");
      /* harmony import */


      var _store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../store/reducers */
      "./app/store/reducers/index.ts");
      /* harmony import */


      var _shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../shared/components/parts/header/header.component */
      "./app/modules/shared/components/parts/header/header.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../shared/components/parts/footer/footer.component */
      "./app/modules/shared/components/parts/footer/footer.component.ts");
      /* harmony import */


      var _shared_components_parts_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../shared/components/parts/loading/loading.component */
      "./app/modules/shared/components/parts/loading/loading.component.ts");

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

      function AuthSigninComponent_div_2_li_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u9078\u629E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", project_r2.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", project_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "/?projectId=" + project_r2.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function AuthSigninComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u9078\u629E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AuthSigninComponent_div_2_li_7_Template, 10, 4, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var tmp_0_0 = null;
          var currVal_0 = (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, ctx_r0.master)) == null ? null : tmp_0_0.projects;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", currVal_0);
        }
      }

      var AuthSigninComponent = /*#__PURE__*/function () {
        function AuthSigninComponent(store, masterService, utilService, cinerinoService) {
          _classCallCheck(this, AuthSigninComponent);

          this.store = store;
          this.masterService = masterService;
          this.utilService = utilService;
          this.cinerinoService = cinerinoService;
        }

        _createClass(AuthSigninComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var masterData, projects;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.isLoading = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_3__["getLoading"]));
                      this.master = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_3__["getMaster"]));
                      this.projects = [];
                      _context2.next = 5;
                      return this.masterService.getProjects();

                    case 5:
                      this.utilService.loadStart({
                        process: 'load'
                      });
                      _context2.next = 8;
                      return this.masterService.getData();

                    case 8:
                      masterData = _context2.sent;
                      projects = masterData.projects;

                      if (!(projects.length === 1)) {
                        _context2.next = 13;
                        break;
                      }

                      // プロジェクトが一つの場合自動遷移
                      location.href = "/?projectId=".concat(projects[0].id);
                      return _context2.abrupt("return");

                    case 13:
                      this.utilService.loadEnd();

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      _context3.next = 3;
                      return this.cinerinoService.getServices();

                    case 3:
                      _context3.next = 5;
                      return this.cinerinoService.signOut();

                    case 5:
                      _context3.next = 10;
                      break;

                    case 7:
                      _context3.prev = 7;
                      _context3.t0 = _context3["catch"](0);
                      console.error(_context3.t0);

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[0, 7]]);
            }));
          }
        }]);

        return AuthSigninComponent;
      }();

      AuthSigninComponent.ɵfac = function AuthSigninComponent_Factory(t) {
        return new (t || AuthSigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["MasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["CinerinoService"]));
      };

      AuthSigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthSigninComponent,
        selectors: [["app-auth-signin"]],
        decls: 10,
        vars: 7,
        consts: [[3, "isClear"], [1, "contents", "scroll-horizontal"], ["class", "p-3", 4, "ngIf"], [1, "mr-auto"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["process", "process.masterAction.GetProjects", 3, "isLoading"], [1, "p-3"], [1, "text-large", "mb-4", "text-center", "font-weight-bold"], [1, "mb-4", "text-md-center"], [1, "container", "px-0", "mb-4"], [1, "row"], ["class", "col-3 mb-3", 4, "ngFor", "ngForOf"], [1, "col-3", "mb-3"], [1, "card", "h-100"], [1, "card-body"], [1, "d-flex", "align-items-center", "mb-4"], [1, "mr-2"], [1, "logo", 3, "src", "alt"], [1, "font-weight-bold", "text-overflow-ellipsis"], [1, "btn", "btn-primary", "btn-block", "py-3", 3, "href"]],
        template: function AuthSigninComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthSigninComponent_div_2_Template, 9, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthSigninComponent_Template_button_click_6_listener() {
              return ctx.signOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u623B\u308B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-loading", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
          }

          if (rf & 2) {
            var tmp_1_0 = null;
            var currVal_1 = ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.master)) == null ? null : tmp_1_0.projects.length) > 0;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isClear", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, ctx.isLoading));
          }
        },
        directives: [_shared_components_parts_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_components_parts_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _shared_components_parts_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
        styles: [".logo[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n\n.btn-primary.disabled[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n  background-color: #666 !important;\n  border-color: #666 !important;\n  color: #EEE !important;\n}"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthSigninComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-auth-signin',
            templateUrl: './auth-signin.component.html',
            styleUrls: ['./auth-signin.component.scss']
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_2__["MasterService"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_2__["CinerinoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./app/modules/auth/components/pages/auth-signout/auth-signout.component.ts":
    /*!**********************************************************************************!*\
      !*** ./app/modules/auth/components/pages/auth-signout/auth-signout.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: AuthSignoutComponent */

    /***/
    function appModulesAuthComponentsPagesAuthSignoutAuthSignoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthSignoutComponent", function () {
        return AuthSignoutComponent;
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


      var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../services */
      "./app/services/index.ts");
      /* harmony import */


      var _shared_components_parts_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../shared/components/parts/loading/loading.component */
      "./app/modules/shared/components/parts/loading/loading.component.ts");

      var AuthSignoutComponent = /*#__PURE__*/function () {
        function AuthSignoutComponent(router, actionService) {
          _classCallCheck(this, AuthSignoutComponent);

          this.router = router;
          this.actionService = actionService;
        }

        _createClass(AuthSignoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.actionService.order["delete"]();
            this.actionService.purchase["delete"]();
            this.router.navigate(['/']);
          }
        }, {
          key: "selectProject",
          value: function selectProject() {}
        }]);

        return AuthSignoutComponent;
      }();

      AuthSignoutComponent.ɵfac = function AuthSignoutComponent_Factory(t) {
        return new (t || AuthSignoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["ActionService"]));
      };

      AuthSignoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthSignoutComponent,
        selectors: [["app-auth-signout"]],
        decls: 1,
        vars: 1,
        consts: [["process", "process.authAction.Logout", 3, "isLoading"]],
        template: function AuthSignoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isLoading", true);
          }
        },
        directives: [_shared_components_parts_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]],
        styles: [""]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthSignoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-auth-signout',
            templateUrl: './auth-signout.component.html',
            styleUrls: ['./auth-signout.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_2__["ActionService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();