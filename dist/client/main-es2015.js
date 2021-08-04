(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/FTz":
/*!***************************************************!*\
  !*** ./src/client/app/models/purchase/payment.ts ***!
  \***************************************************/
/*! exports provided: PaymentMethodType, FUNC_CODE, FUNC_STATUS, JOB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodType", function() { return PaymentMethodType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FUNC_CODE", function() { return FUNC_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FUNC_STATUS", function() { return FUNC_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOB", function() { return JOB; });
/**
 * 決済方法タイプ
 */
var PaymentMethodType;
(function (PaymentMethodType) {
    /**
     * 現金
     */
    PaymentMethodType["Cash"] = "Cash";
    /**
     * クレジットカード
     */
    PaymentMethodType["CreditCard"] = "CreditCard";
    /**
     * 電子マネー
     */
    PaymentMethodType["EMoney"] = "EMoney";
    /**
     * コード決済
     */
    PaymentMethodType["Code"] = "Code";
})(PaymentMethodType || (PaymentMethodType = {}));
/**
 * 機能コード
 */
var FUNC_CODE;
(function (FUNC_CODE) {
    /**
     * 決済端末連携
     */
    let TERMINAL;
    (function (TERMINAL) {
        /**
         * 疎通確認
         */
        TERMINAL["COMMUNICATION"] = "3000";
        /**
         * 選択要求　　　※決済用パラメータ必要
         */
        TERMINAL["CHOICE"] = "3001";
        /**
         * 決済結果取得
         */
        TERMINAL["RESULT"] = "3002";
        /**
         * 中断要求
         */
        TERMINAL["INTERRUPTION"] = "3008";
    })(TERMINAL = FUNC_CODE.TERMINAL || (FUNC_CODE.TERMINAL = {}));
    /**
     * カード決済
     */
    let CREDITCARD;
    (function (CREDITCARD) {
        /**
         * インストール確認
         */
        CREDITCARD["INSTALL"] = "4000";
        /**
         * 決済要求　　　※決済用パラメータ必要
         */
        CREDITCARD["SETTLEMENT"] = "4001";
        /**
         * 決済結果取得
         */
        CREDITCARD["RESULT"] = "4002";
        /**
         * 中断要求
         */
        CREDITCARD["INTERRUPTION"] = "4008";
        /**
         * 状況確認
         */
        CREDITCARD["SITUATION"] = "4100";
    })(CREDITCARD = FUNC_CODE.CREDITCARD || (FUNC_CODE.CREDITCARD = {}));
    /**
     * コード決済
     */
    let CODE;
    (function (CODE) {
        /**
         * インストール確認
         */
        CODE["INSTALL"] = "5000";
        /**
         * 決済要求　　　※決済用パラメータ必要
         */
        CODE["SETTLEMENT"] = "5001";
        /**
         * 決済結果取得
         */
        CODE["RESULT"] = "5002";
        /**
         * 中断要求
         */
        CODE["INTERRUPTION"] = "5008";
    })(CODE = FUNC_CODE.CODE || (FUNC_CODE.CODE = {}));
    /**
     * 電子マネー決済
     */
    let EMONEY;
    (function (EMONEY) {
        /**
         * インストール確認
         */
        EMONEY["INSTALL"] = "6000";
        /**
         * 決済要求　　　※決済用パラメータ必要
         */
        EMONEY["SETTLEMENT"] = "6001";
        /**
         * 決済結果取得
         */
        EMONEY["RESULT"] = "6002";
        /**
         * 中断要求
         */
        EMONEY["INTERRUPTION"] = "6008";
    })(EMONEY = FUNC_CODE.EMONEY || (FUNC_CODE.EMONEY = {}));
})(FUNC_CODE || (FUNC_CODE = {}));
/**
 * 基本部_機能コード応答値
 */
var FUNC_STATUS;
(function (FUNC_STATUS) {
    /**
     * 要求正常終了
     */
    FUNC_STATUS["SUCCESS"] = "0000";
    /**
     * 決済アプリにて取消が行われた
     */
    FUNC_STATUS["APP_CANCEL"] = "0001";
    /**
     * 上位機器より取消が行われた
     */
    FUNC_STATUS["MACHINE_CANCEL"] = "0002";
    /**
     * 決済アプリでエラーが発生
     */
    FUNC_STATUS["APP_ERROR"] = "0009";
    /**
     * 該当の決済データが存在しない
     */
    FUNC_STATUS["NOTFOUND"] = "0010";
    /**
     * 対象の決済アプリがインストールされていない
     */
    FUNC_STATUS["NOT_INSTALLED"] = "1001";
    /**
     * 対象の決済アプリが未処理
     */
    FUNC_STATUS["APP_UNTREATED"] = "1002";
    /**
     * 決済アプリが処理中
     */
    FUNC_STATUS["APP_PROCESSING"] = "1003";
    /**
     * 中断要求の受付成功　　※中断の実施結果は、結果取得の要求で取得
     */
    FUNC_STATUS["INTERRUPTION_SUCCESS"] = "1100";
    /**
     * 中断処理中
     */
    FUNC_STATUS["INTERRUPTION_PROCESSING"] = "1103";
    /**
     * 中断処理失敗
     */
    FUNC_STATUS["INTERRUPTION_FAILURE"] = "1104";
    /**
     * 規定外の機能コードが指定された
     */
    FUNC_STATUS["OUT_OF_REGULATION"] = "8000";
})(FUNC_STATUS || (FUNC_STATUS = {}));
var JOB;
(function (JOB) {
    /**
     * 売上
     */
    JOB["CAPTURE"] = "CAPTURE";
    /**
     * 取消
     */
    JOB["VOID"] = "VOID";
    /**
     * 返品
     */
    JOB["RETURN"] = "RETURN";
})(JOB || (JOB = {}));


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/client/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hataguchi\Desktop\workspace\smarttheater\tvm\src\client\main.ts */"jbcS");


/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1pG9":
/*!*********************************************!*\
  !*** ./src/client/app/models/util/index.ts ***!
  \*********************************************/
/*! exports provided: Language, Printer, Payment, ViewType, Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application */ "AcGN");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _application__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language */ "JXAw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return _language__WEBPACK_IMPORTED_MODULE_1__["Language"]; });

/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment */ "3C8W");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Payment", function() { return _payment__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _printer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./printer */ "yiuv");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Printer", function() { return _printer__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _viewType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewType */ "s2af");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewType", function() { return _viewType__WEBPACK_IMPORTED_MODULE_4__["ViewType"]; });









/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3C8W":
/*!***********************************************!*\
  !*** ./src/client/app/models/util/payment.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "65v5":
/*!**************************************************!*\
  !*** ./src/client/app/models/admission/index.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "ADXf":
/*!************************************************!*\
  !*** ./src/client/environments/environment.ts ***!
  \************************************************/
/*! exports provided: isProduction, getEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProduction", function() { return isProduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnvironment", function() { return getEnvironment; });
/* harmony import */ var _app_functions_util_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/functions/util.function */ "TVqg");

const isProduction = document.querySelector('body.production') !== null;
const defaultEnvironment = {
    production: false,
    APP_TITLE: '',
    PRIMARY_COLOR: '#0175c2',
    ENTRANCE_SERVER_URL: '',
    INSTRUCTION_URL: '',
    ANALYTICS_ID: '',
    GTM_ID: '',
    VIEW_TYPE: 'event',
    STORAGE_NAME: 'TVM-STATE',
    STORAGE_TYPE: 'localStorage',
    BASE_URL: '/purchase/root',
    LANGUAGE: ['ja'],
    PROFILE: [
        {
            key: 'familyName',
            value: '',
            required: true,
            pattern: /^[ァ-ヶー]+$/,
            maxLength: 12,
        },
        {
            key: 'givenName',
            value: '',
            required: true,
            pattern: /^[ァ-ヶー]+$/,
            maxLength: 12,
        },
        { key: 'email', value: '', required: true, maxLength: 50 },
        {
            key: 'telephone',
            value: '',
            required: true,
            maxLength: 15,
            minLength: 9,
        },
    ],
    INPUT_KEYPAD: true,
    PAYMENT_TIMEOUT: '300000',
    REGIGROW_QRCODE: '',
    DISPLAY_TICKETED_SEAT: true,
    PURCHASE_ITEM_MAX_LENGTH: '50',
    PURCHASE_CART: true,
    PURCHASE_TRANSACTION_TIME: '15',
    PURCHASE_TRANSACTION_TIME_DISPLAY: true,
    PURCHASE_TRANSACTION_IDENTIFIER: [],
    PURCHASE_SCHEDULE_DEFAULT_SELECTED_DATE: '0',
    PURCHASE_SCHEDULE_STATUS_THRESHOLD_VALUE: '30',
    PURCHASE_SCHEDULE_STATUS_THRESHOLD_UNIT: '%',
    PURCHASE_SCHEDULE_SORT: 'screeningEventSeries',
    PURCHASE_COMPLETE_MAIL_CUSTOM: true,
    PURCHASE_TERMS: false,
    PURCHASE_WARNING: false,
    INQUIRY_QRCODE: false,
    INQUIRY_PRINT: true,
    INQUIRY_PRINT_WAIT_TIME: '600000',
    INQUIRY_ORDER_DATE_FROM_VALUE: '-3',
    INQUIRY_ORDER_DATE_FROM_UNIT: 'month',
    ORDER_LINK: [],
    ORDER_AUTHORIZE_CODE_EXPIRES: '1814400',
    PRINT_QRCODE_TYPE: 'token',
    PRINT_QRCODE_CUSTOM: '',
    PRINT_LOADING: true,
    PRINT_SUCCESS_WAIT_TIME: '10000',
    ERROR_WAIT_TIME: '10000',
    TOP_IMAGE: '',
};
function getEnvironment() {
    const environment = Object.assign(Object.assign(Object.assign(Object.assign({}, defaultEnvironment), { STORAGE_NAME: Object(_app_functions_util_function__WEBPACK_IMPORTED_MODULE_0__["getProject"])().projectId === ''
            ? 'TVM-STATE'
            : `${Object(_app_functions_util_function__WEBPACK_IMPORTED_MODULE_0__["getProject"])().projectId.toUpperCase()}-TVM-STATE` }), window.environment), { production: document.querySelector('body.production') !== null });
    environment.LANGUAGE = environment.LANGUAGE.map((l) => l === 'zh' ? 'zh-CN' : l);
    return environment;
}


/***/ }),

/***/ "AcGN":
/*!***************************************************!*\
  !*** ./src/client/app/models/util/application.ts ***!
  \***************************************************/
/*! exports provided: ApplicationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationType", function() { return ApplicationType; });
/**
 * 接続の種類
 */
var ApplicationType;
(function (ApplicationType) {
    /**
     * 券売機
     */
    ApplicationType["Tvm"] = "tvm";
    /**
     * 発券機
     */
    ApplicationType["Printer"] = "printer";
})(ApplicationType || (ApplicationType = {}));


/***/ }),

/***/ "EOQ6":
/*!*******************************************************!*\
  !*** ./src/client/app/models/purchase/movieTicket.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "FfyD":
/*!********************************************************!*\
  !*** ./src/client/app/functions/translate.function.ts ***!
  \********************************************************/
/*! exports provided: CustomTranslateHttpLoader, getTranslateModuleConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTranslateHttpLoader", function() { return CustomTranslateHttpLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslateModuleConfig", function() { return getTranslateModuleConfig; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deepmerge */ "PE4B");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "ADXf");
/* harmony import */ var _util_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util.function */ "TVqg");








/**
 * 多言語カスタムローダー
 */
class CustomTranslateHttpLoader {
    constructor(http) {
        this.http = http;
    }
    getTranslation(lang) {
        const suffix = `.json?date=${moment__WEBPACK_IMPORTED_MODULE_3__().toISOString()}`;
        const resources = [
            `/default/i18n/common/${lang}${suffix}`,
            `/default/i18n/mail/${lang}${suffix}`,
            `/default/i18n/contents/${lang}${suffix}`,
            `/default/i18n/${Object(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["getEnvironment"])().VIEW_TYPE}/${lang}${suffix}`,
            `${Object(_util_function__WEBPACK_IMPORTED_MODULE_7__["getProject"])().storageUrl}/i18n/${lang}${suffix}`,
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(resources.map((url) => {
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => {
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
            }));
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            return response.reduce((a, b) => {
                return deepmerge__WEBPACK_IMPORTED_MODULE_2__(a, b);
            });
        }));
    }
}
/**
 * 多言語設定取得
 */
function getTranslateModuleConfig() {
    return {
        loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateLoader"],
            useClass: CustomTranslateHttpLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]]
        }
    };
}


/***/ }),

/***/ "HOUK":
/*!*******************************************!*\
  !*** ./src/client/app/functions/index.ts ***!
  \*******************************************/
/*! exports provided: Purchase, Util, Order, Translate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.function */ "aOf5");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return _order_function__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _purchase_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase.function */ "uOsk");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Purchase", function() { return _purchase_function__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _translate_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translate.function */ "FfyD");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Translate", function() { return _translate_function__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _util_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.function */ "TVqg");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return _util_function__WEBPACK_IMPORTED_MODULE_3__; });







/***/ }),

/***/ "JXAw":
/*!************************************************!*\
  !*** ./src/client/app/models/util/language.ts ***!
  \************************************************/
/*! exports provided: Language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/**
 * 言語
 */
var Language;
(function (Language) {
    Language["en"] = "English";
    Language["en-US"] = "English (American English)";
    Language["en-GB"] = "English (British English\u3001UK English)";
    Language["en-CA"] = "English (Canadian English)";
    Language["en-AU"] = "English (Australian English)";
    Language["fr"] = "French";
    Language["de"] = "German";
    Language["it"] = "Italian";
    Language["ja"] = "\u65E5\u672C\u8A9E";
    Language["ko"] = "\uD55C\uAD6D\uC5B4";
    Language["zh-TW"] = "\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF09";
    Language["zh-CN"] = "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09";
    Language["pt"] = "Portuguese";
    Language["ru"] = "Russian";
})(Language || (Language = {}));


/***/ }),

/***/ "NyCf":
/*!***********************************************!*\
  !*** ./src/client/app/models/order/search.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "PrZj":
/*!****************************************!*\
  !*** ./src/client/app/models/index.ts ***!
  \****************************************/
/*! exports provided: Admission, Reservation, Purchase, Order, Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admission */ "65v5");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Admission", function() { return _admission__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order */ "xA3K");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return _order__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _purchase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purchase */ "RSHH");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Purchase", function() { return _purchase__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _reservation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservation */ "r1OR");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Reservation", function() { return _reservation__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "1pG9");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return _util__WEBPACK_IMPORTED_MODULE_4__; });








/***/ }),

/***/ "RSHH":
/*!*************************************************!*\
  !*** ./src/client/app/models/purchase/index.ts ***!
  \*************************************************/
/*! exports provided: MovieTicket, Payment, Performance, Reservation, Screen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _movieTicket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieTicket */ "EOQ6");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "MovieTicket", function() { return _movieTicket__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment */ "/FTz");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Payment", function() { return _payment__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _performance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./performance */ "f5zA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Performance", function() { return _performance__WEBPACK_IMPORTED_MODULE_2__["Performance"]; });

/* harmony import */ var _reservation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservation */ "eVEq");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Reservation", function() { return _reservation__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screen */ "r4NL");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return _screen__WEBPACK_IMPORTED_MODULE_4__; });








/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-SG": "zavE",
	"./en-SG.js": "zavE",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "TVqg":
/*!***************************************************!*\
  !*** ./src/client/app/functions/util.function.ts ***!
  \***************************************************/
/*! exports provided: formatTelephone, toFull, toHalf, retry, sleep, buildQueryString, iOSDatepickerTapBugFix, string2blob, getParameter, getProject, createRandomString, isFile, deepCopy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTelephone", function() { return formatTelephone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFull", function() { return toFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHalf", function() { return toHalf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retry", function() { return retry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildQueryString", function() { return buildQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iOSDatepickerTapBugFix", function() { return iOSDatepickerTapBugFix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string2blob", function() { return string2blob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameter", function() { return getParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProject", function() { return getProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRandomString", function() { return createRandomString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFile", function() { return isFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepCopy", function() { return deepCopy; });
/* harmony import */ var libphonenumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libphonenumber-js */ "PoRY");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * 電話番号変換
 */
function formatTelephone(telephone, format) {
    if (telephone === undefined) {
        return '';
    }
    const parsedNumber = new RegExp(/^\+/).test(telephone)
        ? libphonenumber_js__WEBPACK_IMPORTED_MODULE_0__["parse"](telephone)
        : libphonenumber_js__WEBPACK_IMPORTED_MODULE_0__["parse"](telephone, 'JP');
    format = format === undefined ? 'International' : format;
    return libphonenumber_js__WEBPACK_IMPORTED_MODULE_0__["format"](parsedNumber, format).replace(/\s/g, '');
}
/**
 * 全角変換
 */
function toFull(value) {
    return value.replace(/[A-Za-z0-9]/g, (s) => {
        return String.fromCharCode(s.charCodeAt(0) + 65248);
    });
}
/**
 * 半角変換
 */
function toHalf(value) {
    return value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
    });
}
/**
 * リトライ
 * @param args
 */
function retry(args) {
    return __awaiter(this, void 0, void 0, function* () {
        let count = 0;
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const timerProcess = () => {
                setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    count++;
                    try {
                        const result = yield args.process();
                        resolve(result);
                    }
                    catch (error) {
                        if (count >= args.limit) {
                            reject(error);
                            return;
                        }
                        timerProcess();
                    }
                }), args.interval);
            };
            try {
                const result = yield args.process();
                resolve(result);
            }
            catch (error) {
                timerProcess();
            }
        }));
    });
}
/**
 * ミリ秒待ち
 * @param time
 */
function sleep(time = 100) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, time);
        });
    });
}
/**
 * クエリストリング変換
 */
function buildQueryString(data) {
    let key, value, type, i, max;
    const encode = encodeURIComponent;
    let query = '';
    for (key of Object.keys(data)) {
        value = data[key];
        type =
            typeof value === 'object' && value instanceof Array
                ? 'array'
                : typeof value;
        switch (type) {
            case 'undefined':
                break;
            case 'array':
                // 配列
                for (i = 0, max = value.length; i < max; i++) {
                    query += key + '[]';
                    query += '=';
                    query += encode(value[i]);
                    query += '&';
                }
                query = query.substr(0, query.length - 1);
                break;
            case 'object':
                // ハッシュ
                for (i of Object.keys(value)) {
                    if (value[i] === undefined || value[i] === '') {
                        break;
                    }
                    query += key + '[' + i + ']';
                    query += '=';
                    query += encode(value[i]);
                    query += '&';
                }
                query = query.substr(0, query.length - 1);
                break;
            default:
                if (value === '') {
                    break;
                }
                query += key;
                query += '=';
                query += encode(value);
                break;
        }
        query += '&';
    }
    query = query.substr(0, query.length - 1);
    return query;
}
/**
 * iOS bugfix（2回タップしないと選択できない）
 */
function iOSDatepickerTapBugFix(container, datepickerDirectives) {
    const dayHoverHandler = container.dayHoverHandler;
    const hoverWrapper = (event) => {
        const { cell, isHovered } = event;
        if (isHovered &&
            !!navigator.platform &&
            /iPad|iPhone|iPod/.test(navigator.platform) &&
            'ontouchstart' in window) {
            datepickerDirectives.forEach((d) => d._datepickerRef.instance.daySelectHandler(cell));
        }
        return dayHoverHandler(event);
    };
    container.dayHoverHandler = hoverWrapper;
}
/**
 * ストリーミングダウンロード
 */
// export async function streamingDownload<T>(stream: ReadableStream<T>) {
//     const reader = stream.getReader();
//     const decoder = new TextDecoder();
//     let streamText = '';
//     return new Promise<string>(async (resolve, reject) => {
//         try {
//             const readChunk = async (chunk: { done: boolean; value: any; }) => {
//                 if (chunk.done) {
//                     resolve(streamText);
//                     return;
//                 }
//                 streamText += decoder.decode(chunk.value);
//                 await readChunk(await reader.read());
//             };
//             await readChunk(await reader.read());
//         } catch (error) {
//             reject(error);
//         }
//     });
// }
/**
 * 文字列をBLOB変換
 */
function string2blob(value, options) {
    const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
    return new Blob([bom, value], options);
}
/**
 * パラメータ取得
 */
function getParameter() {
    const result = {};
    const params = location.search.replace('?', '').split('&');
    for (let i = 0; i < params.length; i++) {
        const param = params[i].split('=');
        const key = param[0];
        const value = param[1];
        if (key && value) {
            result[key] = value;
        }
    }
    return result;
}
/**
 * プロジェクト情報取得
 */
function getProject() {
    const project = sessionStorage.getItem('PROJECT');
    const defaultProject = { projectId: '', projectName: '', storageUrl: '' };
    if (project === null || project === '') {
        return defaultProject;
    }
    return Object.assign(Object.assign({}, defaultProject), JSON.parse(project));
}
/**
 * ランダム英数字生成
 */
function createRandomString(length, regExp) {
    const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.replace(regExp, '');
    let result = '';
    for (let i = 0; i < length; i++) {
        result += str[Math.floor(Math.random() * str.length)];
    }
    return result;
}
/**
 * ファイル存在判定
 */
function isFile(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const fetchResult = yield fetch(url, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'charset=utf-8',
            },
        });
        return fetchResult.ok;
    });
}
/**
 * オブジェクトディープコピー
 */
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}


/***/ }),

/***/ "a59p":
/*!***********************************************!*\
  !*** ./src/client/app/models/order/action.ts ***!
  \***********************************************/
/*! exports provided: OrderActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderActions", function() { return OrderActions; });
var OrderActions;
(function (OrderActions) {
    /**
     * キャンセル
     */
    OrderActions["Cancel"] = "Cancel";
    /**
     * 印刷
     */
    OrderActions["Print"] = "Print";
})(OrderActions || (OrderActions = {}));


/***/ }),

/***/ "aOf5":
/*!****************************************************!*\
  !*** ./src/client/app/functions/order.function.ts ***!
  \****************************************************/
/*! exports provided: createPrintCanvas4Html, createTestPrintCanvas4Html, createCustomQRCode, createQRCode, createCooperationQRCode, getTransactionAgentIdentifier, order2report, input2OrderSearchCondition, createOrderLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPrintCanvas4Html", function() { return createPrintCanvas4Html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTestPrintCanvas4Html", function() { return createTestPrintCanvas4Html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCustomQRCode", function() { return createCustomQRCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQRCode", function() { return createQRCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCooperationQRCode", function() { return createCooperationQRCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransactionAgentIdentifier", function() { return getTransactionAgentIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "order2report", function() { return order2report; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input2OrderSearchCondition", function() { return input2OrderSearchCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOrderLink", function() { return createOrderLink; });
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cinerino/sdk */ "Hxur");
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cinerino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "wOnQ");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qrcode */ "0FX9");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "ADXf");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models */ "PrZj");
/* harmony import */ var _purchase_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchase.function */ "uOsk");
/* harmony import */ var _util_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util.function */ "TVqg");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








/**
 * 印刷イメージ作成
 */
function createPrintCanvas4Html(params) {
    return __awaiter(this, void 0, void 0, function* () {
        // QR描画
        if (params.qrcode !== undefined) {
            params.qrcode = yield qrcode__WEBPACK_IMPORTED_MODULE_3__["toDataURL"](params.qrcode);
        }
        const template = yield window.ejs.render(params.view, Object.assign(Object.assign({ moment: moment__WEBPACK_IMPORTED_MODULE_2__ }, params), { storageUrl: Object(_util_function__WEBPACK_IMPORTED_MODULE_7__["getProject"])().storageUrl }), { async: true });
        const div = document.createElement('div');
        div.className = 'position-absolute';
        div.style.top = '-9999px';
        div.innerHTML = template;
        document.body.appendChild(div);
        const canvas = yield html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(div, { width: div.clientWidth, scale: 1 });
        div.remove();
        return canvas;
    });
}
/**
 * テスト印刷用イメージ作成
 */
function createTestPrintCanvas4Html(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const view = params.view;
        const template = yield window.ejs.render(view, { moment: moment__WEBPACK_IMPORTED_MODULE_2__ }, { async: true });
        const div = document.createElement('div');
        div.className = 'position-absolute';
        div.style.top = '-9999px';
        div.innerHTML = template;
        document.body.appendChild(div);
        const canvas = yield html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(div, { width: div.clientWidth, scale: 1 });
        div.remove();
        return canvas;
    });
}
/**
 * カスタムQR作成
 */
function createCustomQRCode(params) {
    let result = params.qrcode;
    const order = params.order;
    const itemOffered = params.itemOffered;
    const index = params.index;
    result = result
        .replace(/\{\{ orderDate \| YYMMDD \}\}/g, moment__WEBPACK_IMPORTED_MODULE_2__(order.orderDate).format('YYMMDD'));
    result = result
        .replace(/\{\{ confirmationNumber \}\}/g, order.confirmationNumber);
    result = result
        .replace(/\{\{ confirmationNumber \| [0-9] \}\}/g, (match) => {
        const digit = Number(match.replace(/\{\{ confirmationNumber \| ([0-9]) \}\}/, '$1'));
        return `000000000${order.confirmationNumber}`.slice(-1 * digit);
    });
    result = result
        .replace(/\{\{ index \}\}/g, String(index));
    result = result
        .replace(/\{\{ index \| [0-9] \}\}/g, (match) => {
        const digit = Number(match.replace(/\{\{ index \| ([0-9]) \}\}/, '$1'));
        return `000000000${String(index)}`.slice(-1 * digit);
    });
    result = result
        .replace(/\{\{ orderNumber \}\}/g, order.orderNumber);
    result = result
        .replace(/\{\{ startDate \| YYMMDD \}\}/g, moment__WEBPACK_IMPORTED_MODULE_2__(itemOffered.reservationFor.startDate).format('YYMMDD'));
    return result;
}
/**
 * QR作成
 */
function createQRCode(params) {
    const { acceptedOffer, order, index, code } = params;
    if (acceptedOffer.itemOffered.typeOf !== _cinerino_sdk__WEBPACK_IMPORTED_MODULE_0__["factory"].chevre.reservationType.EventReservation) {
        return undefined;
    }
    let result;
    const itemOffered = acceptedOffer.itemOffered;
    const environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["getEnvironment"])();
    if (environment.PRINT_QRCODE_TYPE === _models__WEBPACK_IMPORTED_MODULE_5__["Order"].Print.PrintQrcodeType.None) {
        // なし
        result = undefined;
    }
    else if (environment.PRINT_QRCODE_TYPE === _models__WEBPACK_IMPORTED_MODULE_5__["Order"].Print.PrintQrcodeType.Token) {
        // トークン
        result = `${itemOffered.id}@${code}`;
    }
    else if (environment.PRINT_QRCODE_TYPE === _models__WEBPACK_IMPORTED_MODULE_5__["Order"].Print.PrintQrcodeType.Custom) {
        // カスタム文字列
        result = createCustomQRCode({
            qrcode: environment.PRINT_QRCODE_CUSTOM,
            order,
            itemOffered,
            index
        });
    }
    const additionalProperty = (itemOffered.reservationFor.workPerformed !== undefined
        && itemOffered.reservationFor.workPerformed.additionalProperty !== undefined
        && itemOffered.reservationFor.workPerformed.additionalProperty.length > 0)
        ? itemOffered.reservationFor.workPerformed.additionalProperty :
        (itemOffered.additionalProperty !== undefined
            && itemOffered.additionalProperty.length > 0) ?
            itemOffered.additionalProperty
            : undefined;
    if (additionalProperty !== undefined) {
        // 追加特性のqrcodeがfalseの場合QR非表示
        const isDisplayQrcode = additionalProperty.find(a => a.name === 'qrcode');
        if (isDisplayQrcode !== undefined && isDisplayQrcode.value === 'false') {
            result = undefined;
        }
    }
    return result;
}
/**
 * 連携用QR作成
 */
function createCooperationQRCode(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const order = params.order;
        const qrcodeText = params.qrcodeText;
        const canvas = document.createElement('canvas');
        const text = qrcodeText
            .replace(/\{\{ orderNumber \}\}/g, order.orderNumber)
            .replace(/\{\{ price \}\}/g, String(order.price));
        return new Promise((resolve, reject) => {
            qrcode__WEBPACK_IMPORTED_MODULE_3__["toCanvas"](canvas, text).then(() => {
                resolve(canvas.toDataURL());
            }).catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    });
}
/**
 * 取引追加情報取得
 */
function getTransactionAgentIdentifier(order, key) {
    if (order.customer.identifier === undefined || typeof order.customer.identifier === 'string') {
        return;
    }
    return order.customer.identifier.find(i => i.name === key);
}
/**
 * 注文データCSV変換
 */
function order2report(orders) {
    const data = [];
    orders.forEach((order) => {
        order.acceptedOffers.forEach((acceptedOffer) => {
            if (acceptedOffer.itemOffered.typeOf !== _cinerino_sdk__WEBPACK_IMPORTED_MODULE_0__["factory"].chevre.reservationType.EventReservation) {
                return;
            }
            const itemOffered = acceptedOffer.itemOffered;
            const customData = {
                orderDate: order.orderDate,
                orderDateJST: moment__WEBPACK_IMPORTED_MODULE_2__(order.orderDate).format('YYYY/MM/DD/HH:mm'),
                orderNumber: order.orderNumber,
                orderStatus: order.orderStatus,
                dateReturnedJST: (order.dateReturned === undefined)
                    ? undefined
                    : moment__WEBPACK_IMPORTED_MODULE_2__(order.dateReturned).format('YYYY/MM/DD/HH:mm'),
                confirmationNumber: order.confirmationNumber,
                price: order.price,
                seller: order.seller,
                paymentMethodsNames: order.paymentMethods.map(m => m.name).join(','),
                customer: Object.assign(Object.assign({}, order.customer), { formatTelephone: Object(_util_function__WEBPACK_IMPORTED_MODULE_7__["formatTelephone"])(order.customer.telephone), pos: {
                        name: (getTransactionAgentIdentifier(order, 'posName') === undefined)
                            ? { name: '', value: '' }
                            : getTransactionAgentIdentifier(order, 'posName')
                    }, liny: {
                        id: (getTransactionAgentIdentifier(order, 'linyId') === undefined)
                            ? { name: '', value: '' }
                            : getTransactionAgentIdentifier(order, 'linyId')
                    } }),
                itemOffered: {
                    id: itemOffered.id,
                    price: Object(_purchase_function__WEBPACK_IMPORTED_MODULE_6__["getItemPrice"])({ priceComponents: acceptedOffer.priceSpecification.priceComponent }),
                    reservedTicket: itemOffered.reservedTicket,
                    reservationFor: Object.assign(Object.assign({}, itemOffered.reservationFor), { startDateJST: moment__WEBPACK_IMPORTED_MODULE_2__(itemOffered.reservationFor.startDate).format('YYYY/MM/DD/HH:mm') })
                }
            };
            data.push(customData);
        });
    });
    return data;
}
/**
 * 入力データを検索条件へ変換
 */
function input2OrderSearchCondition(params) {
    const input = params.input;
    const theater = params.theater;
    const page = params.page;
    const limit = params.limit;
    const identifiers = [];
    if (input.posId !== '') {
        identifiers.push({ name: 'posId', value: input.posId });
    }
    const result = {
        customer: {
            // email: (input.customer.email === '') ? undefined : input.customer.email,
            // telephone: (input.customer.telephone === '') ? undefined : input.customer.telephone,
            // familyName: (input.customer.familyName === '') ? undefined : input.customer.familyName,
            // givenName: (input.customer.givenName === '') ? undefined : input.customer.givenName,
            email: {
                $eq: (input.customer.email === '') ? undefined : input.customer.email,
            },
            telephone: (input.customer.telephone === '') ? undefined : input.customer.telephone,
            familyName: {
                $eq: (input.customer.familyName === '') ? undefined : input.customer.familyName,
            },
            givenName: {
                $eq: (input.customer.givenName === '') ? undefined : input.customer.givenName,
            },
            identifiers
        },
        orderStatuses: (input.orderStatus === '')
            ? undefined : [input.orderStatus],
        orderDateFrom: (input.orderDateFrom === undefined)
            ? undefined
            : moment__WEBPACK_IMPORTED_MODULE_2__(moment__WEBPACK_IMPORTED_MODULE_2__(input.orderDateFrom).format('YYYYMMDD')).toDate(),
        orderDateThrough: (input.orderDateThrough === undefined)
            ? undefined
            : moment__WEBPACK_IMPORTED_MODULE_2__(moment__WEBPACK_IMPORTED_MODULE_2__(input.orderDateThrough).format('YYYYMMDD')).add(1, 'day').add(-1, 'millisecond').toDate(),
        confirmationNumbers: (input.confirmationNumber === '')
            ? undefined : [input.confirmationNumber],
        orderNumbers: (input.orderNumber === '')
            ? undefined : [input.orderNumber],
        paymentMethods: (input.paymentMethodType === '')
            ? undefined : { typeOfs: [input.paymentMethodType] },
        acceptedOffers: {
            itemOffered: {
                reservationFor: {
                    inSessionFrom: (input.eventStartDateFrom === undefined)
                        ? undefined
                        : moment__WEBPACK_IMPORTED_MODULE_2__(moment__WEBPACK_IMPORTED_MODULE_2__(input.eventStartDateFrom).format('YYYYMMDD')).toDate(),
                    inSessionThrough: (input.eventStartDateThrough === undefined)
                        ? undefined
                        : moment__WEBPACK_IMPORTED_MODULE_2__(moment__WEBPACK_IMPORTED_MODULE_2__(input.eventStartDateThrough)
                            .format('YYYYMMDD')).add(1, 'day').add(-1, 'millisecond').toDate(),
                    superEvent: {
                        location: { branchCodes: (theater === undefined) ? [] : [theater.branchCode] }
                    }
                }
            }
        },
        limit,
        page,
        sort: { orderDate: _cinerino_sdk__WEBPACK_IMPORTED_MODULE_0__["factory"].sortType.Descending }
    };
    return result;
}
/**
 * 注文連携リンク作成
 */
function createOrderLink(order, link) {
    const params = [];
    link.params.forEach(p => {
        const value = (p.value === undefined) ? order[p.key] : p.value;
        params.push(`${p.key}=${value}`);
    });
    return (params.length > 0) ? `${link.url}?${params.join('&')}` : link.url;
}


/***/ }),

/***/ "eVEq":
/*!*******************************************************!*\
  !*** ./src/client/app/models/purchase/reservation.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "f5zA":
/*!*******************************************************!*\
  !*** ./src/client/app/models/purchase/performance.ts ***!
  \*******************************************************/
/*! exports provided: Performance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Performance", function() { return Performance; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "ADXf");


/**
 * Performance
 */
class Performance {
    constructor(params) {
        this.screeningEvent = params.screeningEvent;
        this.now = (params.now === undefined) ? moment__WEBPACK_IMPORTED_MODULE_0__().toDate() : params.now;
    }
    /**
     * 販売判定
     */
    isSales(status) {
        const screeningEvent = this.screeningEvent;
        const offers = screeningEvent.offers;
        if (offers === undefined) {
            return false;
        }
        const now = moment__WEBPACK_IMPORTED_MODULE_0__(this.now).unix();
        const validFrom = moment__WEBPACK_IMPORTED_MODULE_0__(offers.validFrom).unix();
        const validThrough = moment__WEBPACK_IMPORTED_MODULE_0__(offers.validThrough).unix();
        let result = false;
        switch (status) {
            case 'start':
                result = now < validFrom;
                break;
            case 'end':
                result = validThrough < now;
                break;
            default:
                result = (validFrom < now && now < validThrough);
                break;
        }
        return result;
    }
    /**
     * 座席ステータス判定
     */
    isSeatStatus(status) {
        const screeningEvent = this.screeningEvent;
        const environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["getEnvironment"])();
        const limitSeatNumber = (screeningEvent.workPerformed === undefined
            || screeningEvent.workPerformed.additionalProperty === undefined)
            ? undefined : screeningEvent.workPerformed.additionalProperty.find(a => a.name === 'limitSeatNumber');
        let remainingAttendeeCapacity = screeningEvent.remainingAttendeeCapacity;
        let maximumAttendeeCapacity = screeningEvent.maximumAttendeeCapacity;
        if (remainingAttendeeCapacity === undefined || maximumAttendeeCapacity === undefined) {
            return status === undefined;
        }
        if (limitSeatNumber !== undefined && maximumAttendeeCapacity > Number(limitSeatNumber.value)) {
            // 作品追加特性（limitSeatNumber）で座席数制御
            remainingAttendeeCapacity = (remainingAttendeeCapacity < (maximumAttendeeCapacity - Number(limitSeatNumber.value)))
                ? 0 : remainingAttendeeCapacity - (maximumAttendeeCapacity - Number(limitSeatNumber.value));
            maximumAttendeeCapacity = Number(limitSeatNumber.value);
        }
        let result = false;
        const unit = environment.PURCHASE_SCHEDULE_STATUS_THRESHOLD_UNIT;
        const value = Number(environment.PURCHASE_SCHEDULE_STATUS_THRESHOLD_VALUE);
        if (unit === '%') {
            switch (status) {
                case 'success':
                    result = (remainingAttendeeCapacity !== 0
                        && Math.floor(remainingAttendeeCapacity / maximumAttendeeCapacity * 100) >= value);
                    break;
                case 'warning':
                    result = (remainingAttendeeCapacity !== 0
                        && Math.floor(remainingAttendeeCapacity / maximumAttendeeCapacity * 100) < value
                        && remainingAttendeeCapacity > 0);
                    break;
                case 'danger':
                    result = remainingAttendeeCapacity === 0;
                    break;
                default:
                    break;
            }
            return result;
        }
        else if (unit === 'count') {
            switch (status) {
                case 'success':
                    result = (remainingAttendeeCapacity !== 0
                        && remainingAttendeeCapacity >= value);
                    break;
                case 'warning':
                    result = (remainingAttendeeCapacity !== 0
                        && remainingAttendeeCapacity < value
                        && remainingAttendeeCapacity > 0);
                    break;
                case 'danger':
                    result = remainingAttendeeCapacity === 0;
                    break;
                default:
                    break;
            }
            return result;
        }
        else {
            return false;
        }
    }
    /**
     * 座席あり判定
     */
    isTicketedSeat() {
        const screeningEvent = this.screeningEvent;
        return (screeningEvent.offers !== undefined
            && screeningEvent.offers.itemOffered.serviceOutput !== undefined
            && screeningEvent.offers.itemOffered.serviceOutput.reservedTicket !== undefined
            && screeningEvent.offers.itemOffered.serviceOutput.reservedTicket.ticketedSeat !== undefined);
    }
    /**
     * 在庫無限判定
     */
    isInfinitetock() {
        const screeningEvent = this.screeningEvent;
        return (screeningEvent.maximumAttendeeCapacity === undefined);
    }
    /**
     * 開場判定
     */
    isOpenDoor(status) {
        const now = moment__WEBPACK_IMPORTED_MODULE_0__(this.now).unix();
        const doorTime = moment__WEBPACK_IMPORTED_MODULE_0__(this.screeningEvent.doorTime).unix();
        const startDate = moment__WEBPACK_IMPORTED_MODULE_0__(this.screeningEvent.startDate).unix();
        let result;
        switch (status) {
            case 'before':
                result = now < doorTime;
                break;
            case 'after':
                result = startDate < now;
                break;
            default:
                result = (doorTime < now
                    && now < startDate);
                break;
        }
        return result;
    }
    /**
     * 上映判定
     */
    isScreening(status) {
        const now = moment__WEBPACK_IMPORTED_MODULE_0__(this.now).unix();
        const startDate = moment__WEBPACK_IMPORTED_MODULE_0__(this.screeningEvent.startDate).unix();
        const endDate = moment__WEBPACK_IMPORTED_MODULE_0__(this.screeningEvent.endDate).unix();
        let result;
        switch (status) {
            case 'before':
                result = now < startDate;
                break;
            case 'after':
                result = endDate < now;
                break;
            default:
                result = (startDate < now
                    && now < endDate);
                break;
        }
        return result;
    }
}


/***/ }),

/***/ "jEx6":
/*!*********************************!*\
  !*** ./src/client/app/index.ts ***!
  \*********************************/
/*! exports provided: Functions, Models */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "HOUK");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Functions", function() { return _functions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "PrZj");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Models", function() { return _models__WEBPACK_IMPORTED_MODULE_1__; });





/***/ }),

/***/ "jbcS":
/*!****************************!*\
  !*** ./src/client/main.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment-timezone */ "f0Wu");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "U9ZV");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/locale */ "RWcO");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app */ "jEx6");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./environments/environment */ "ADXf");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * main
 */







function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // タイムゾーン設定
        moment_timezone__WEBPACK_IMPORTED_MODULE_3__["tz"].setDefault('Asia/Tokyo');
        moment_timezone__WEBPACK_IMPORTED_MODULE_3__["locale"]('ja');
        // 言語設定
        Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_4__["defineLocale"])('ja', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_5__["jaLocale"]);
        // パラメータ設定
        const params = _app__WEBPACK_IMPORTED_MODULE_6__["Functions"].Util.getParameter();
        // プロジェクト設定
        const space = localStorage.getItem('');
        if (space !== null) {
            // 無効なストレージ削除
            localStorage.removeItem('');
        }
        if (params.projectId !== undefined || location.hash === '#/auth/signin') {
            sessionStorage.removeItem('PROJECT');
        }
        const projectId = params.projectId === undefined
            ? _app__WEBPACK_IMPORTED_MODULE_6__["Functions"].Util.getProject().projectId === ''
                ? undefined
                : _app__WEBPACK_IMPORTED_MODULE_6__["Functions"].Util.getProject().projectId
            : params.projectId;
        if (projectId === undefined && location.hash !== '#/auth/signin') {
            location.href = '/#/auth/signin';
            location.reload();
            return;
        }
        const config = yield setProject({ projectId });
        if (_app__WEBPACK_IMPORTED_MODULE_6__["Functions"].Util.getProject().storageUrl === undefined) {
            return;
        }
        yield setProjectConfig({
            storageUrl: _app__WEBPACK_IMPORTED_MODULE_6__["Functions"].Util.getProject().storageUrl,
            gtmId: config.gtmId,
            analyticsId: config.analyticsId,
        });
    });
}
/**
 * プロジェクト情報設定
 */
function setProject(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const fetchResult = yield fetch('/api/project', {
            method: 'POST',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(params),
        });
        if (!fetchResult.ok) {
            throw new Error(JSON.stringify({
                status: fetchResult.status,
                statusText: fetchResult.statusText,
            }));
        }
        const result = yield fetchResult.json();
        sessionStorage.setItem('PROJECT', JSON.stringify({
            projectId: result.projectId,
            projectName: result.projectName,
            storageUrl: result.storageUrl,
        }));
        const script = document.createElement('script');
        script.src = result.gmoTokenUrl;
        document.body.appendChild(script);
        document.body.classList.add(result.env);
        return result;
    });
}
/**
 * プロジェクトごとのアプリケーション設定
 */
function setProjectConfig(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { storageUrl, gtmId, analyticsId } = params;
        const now = moment_timezone__WEBPACK_IMPORTED_MODULE_3__().toISOString();
        // 設定読み込み
        const fetchResult = yield fetch(`${storageUrl}/js/environment.js?=date${now}`, {
            method: 'GET',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
        });
        if (fetchResult.ok) {
            window.eval(yield fetchResult.text());
        }
        else {
            window.environment = {};
        }
        // GTM_ID, ANALYTICS_IDを設定
        const { GTM_ID, ANALYTICS_ID } = window.environment;
        window.environment.GTM_ID =
            (GTM_ID === undefined || GTM_ID === '') && gtmId !== undefined
                ? gtmId
                : GTM_ID;
        window.environment.ANALYTICS_ID =
            (ANALYTICS_ID === undefined || ANALYTICS_ID === '') &&
                analyticsId !== undefined
                ? analyticsId
                : ANALYTICS_ID;
        const environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["getEnvironment"])();
        // 色設定
        yield applyColor({ primaryColor: environment.PRIMARY_COLOR });
        // スタイル設定
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = `${storageUrl}/css/style.css?=date${now}`;
        style.onerror = function () {
            this.href = `/default/css/style.css?=date${now}`;
        };
        document.head.appendChild(style);
        // ファビコン設定
        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.type = 'image/x-icon"';
        favicon.href = (yield _app__WEBPACK_IMPORTED_MODULE_6__["Functions"].Util.isFile(`${storageUrl}/favicon.ico`))
            ? `${storageUrl}/favicon.ico`
            : '/default/favicon.ico';
        document.head.appendChild(favicon);
        // タイトル設定
        document.title = environment.APP_TITLE;
        // GTM設定
        if (environment.GTM_ID) {
            (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js',
                });
                const f = d.getElementsByTagName(s)[0];
                const j = d.createElement(s), dl = l !== 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', environment.GTM_ID);
        }
        if (environment.production) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
        }
    });
}
/**
 * 色設定
 */
function applyColor(params) {
    const { primaryColor } = params;
    const style = document.createElement('style');
    style.id = 'applyColor';
    style.innerHTML = `
.btn-custom-primary,
.btn-outline-primary:hover,
.btn-outline-primary:active,
header::after,
.wrapper .bg-primary { background-color: ${primaryColor} !important; }

.btn-custom-primary,
.btn-outline-primary,
.wrapper .border-primary { border-color: ${primaryColor} !important; }

.btn-outline-primary,
.wrapper .text-primary { color: ${primaryColor} !important; }

.btn-outline-primary:hover,
.btn-outline-primary:active { color: #FFF !important; }
    `;
    // document.head.appendChild(style);
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    const { AppModule } = yield __webpack_require__.e(/*! import() | app-app-module */ "app-app-module").then(__webpack_require__.bind(null, /*! ./app/app.module */ "aJAS"));
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(AppModule);
}))
    .catch((error) => {
    console.error(error);
});


/***/ }),

/***/ "lPri":
/*!**********************************************!*\
  !*** ./src/client/app/models/order/print.ts ***!
  \**********************************************/
/*! exports provided: PrintQrcodeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintQrcodeType", function() { return PrintQrcodeType; });
/**
 * QRコード文字列
 */
var PrintQrcodeType;
(function (PrintQrcodeType) {
    PrintQrcodeType["None"] = "None";
    PrintQrcodeType["Token"] = "token";
    PrintQrcodeType["Custom"] = "Custom";
})(PrintQrcodeType || (PrintQrcodeType = {}));


/***/ }),

/***/ "r1OR":
/*!****************************************************!*\
  !*** ./src/client/app/models/reservation/index.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "r4NL":
/*!**************************************************!*\
  !*** ./src/client/app/models/purchase/screen.ts ***!
  \**************************************************/
/*! exports provided: SeatStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeatStatus", function() { return SeatStatus; });
var SeatStatus;
(function (SeatStatus) {
    SeatStatus["Disabled"] = "disabled";
    SeatStatus["Default"] = "default";
    SeatStatus["Active"] = "active";
})(SeatStatus || (SeatStatus = {}));


/***/ }),

/***/ "ry5r":
/*!*************************************************!*\
  !*** ./src/client/app/models/order/download.ts ***!
  \*************************************************/
/*! exports provided: CsvFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvFormat", function() { return CsvFormat; });
var CsvFormat;
(function (CsvFormat) {
    CsvFormat["Default"] = "Default";
    CsvFormat["Custom"] = "Custom";
})(CsvFormat || (CsvFormat = {}));


/***/ }),

/***/ "s2af":
/*!************************************************!*\
  !*** ./src/client/app/models/util/viewType.ts ***!
  \************************************************/
/*! exports provided: ViewType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewType", function() { return ViewType; });
var ViewType;
(function (ViewType) {
    /**
     * 映画用
     */
    ViewType["Cinema"] = "cinema";
    /**
     * イベント用
     */
    ViewType["Event"] = "event";
})(ViewType || (ViewType = {}));


/***/ }),

/***/ "uOsk":
/*!*******************************************************!*\
  !*** ./src/client/app/functions/purchase.function.ts ***!
  \*******************************************************/
/*! exports provided: screeningEvents2ScreeningEventSeries, sameMovieTicketFilter, isAvailabilityMovieTicket, createMovieTicketsFromAuthorizeSeatReservation, getTicketPrice, getItemPrice, movieTicketAuthErroCodeToMessage, getAmount, order2EventOrders, authorizeSeatReservation2Event, getRemainingSeatLength, isEligibleSeatingType, getEmptySeat, selectAvailableSeat, getMovieTicketTypeOffers, getAdditionalProperty, createRemiseOrderId, getMembershipTypeOffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screeningEvents2ScreeningEventSeries", function() { return screeningEvents2ScreeningEventSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sameMovieTicketFilter", function() { return sameMovieTicketFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAvailabilityMovieTicket", function() { return isAvailabilityMovieTicket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMovieTicketsFromAuthorizeSeatReservation", function() { return createMovieTicketsFromAuthorizeSeatReservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTicketPrice", function() { return getTicketPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemPrice", function() { return getItemPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movieTicketAuthErroCodeToMessage", function() { return movieTicketAuthErroCodeToMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAmount", function() { return getAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "order2EventOrders", function() { return order2EventOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authorizeSeatReservation2Event", function() { return authorizeSeatReservation2Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRemainingSeatLength", function() { return getRemainingSeatLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEligibleSeatingType", function() { return isEligibleSeatingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmptySeat", function() { return getEmptySeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAvailableSeat", function() { return selectAvailableSeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieTicketTypeOffers", function() { return getMovieTicketTypeOffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdditionalProperty", function() { return getAdditionalProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRemiseOrderId", function() { return createRemiseOrderId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMembershipTypeOffers", function() { return getMembershipTypeOffers; });
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cinerino/sdk */ "Hxur");
/* harmony import */ var _cinerino_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cinerino_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "ADXf");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "PrZj");




/**
 * 施設コンテンツごとのグループへ変換
 */
function screeningEvents2ScreeningEventSeries(params) {
    const environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["getEnvironment"])();
    const result = [];
    const { screeningEvents, now } = params;
    screeningEvents.forEach((screeningEvent) => {
        const registered = result.find((data) => {
            const sortType = params.sortType === undefined
                ? environment.PURCHASE_SCHEDULE_SORT
                : params.sortType;
            if (sortType === 'screeningEventSeries') {
                return (data.screeningEvent.superEvent.id ===
                    screeningEvent.superEvent.id);
            }
            else if (sortType === 'screen') {
                return (data.screeningEvent.location.branchCode ===
                    screeningEvent.location.branchCode);
            }
            else {
                return (moment__WEBPACK_IMPORTED_MODULE_1__(data.screeningEvent.startDate).format('HH') ===
                    moment__WEBPACK_IMPORTED_MODULE_1__(screeningEvent.startDate).format('HH'));
            }
        });
        const performance = new _models__WEBPACK_IMPORTED_MODULE_3__["Purchase"].Performance({ screeningEvent, now });
        if (registered === undefined) {
            result.push({
                screeningEvent,
                data: [performance],
            });
        }
        else {
            registered.data.push(performance);
        }
    });
    return result;
}
/**
 * ムビチケ検索
 */
function sameMovieTicketFilter(params) {
    const { checkMovieTicket, checkMovieTickets } = params;
    if (checkMovieTicket.result === undefined ||
        checkMovieTicket.result.purchaseNumberAuthResult.knyknrNoInfoOut ===
            null ||
        checkMovieTicket.result.purchaseNumberAuthResult.knyknrNoInfoOut[0]
            .ykknInfo === null) {
        return [];
    }
    const result = [];
    checkMovieTickets.forEach((action) => {
        if (action.result === undefined ||
            action.result.purchaseNumberAuthResult.knyknrNoInfoOut === null ||
            action.result.purchaseNumberAuthResult.knyknrNoInfoOut[0]
                .ykknInfo === null) {
            return;
        }
        if (checkMovieTicket.result === undefined ||
            action.result.movieTickets[0].identifier !==
                checkMovieTicket.result.movieTickets[0].identifier) {
            return;
        }
        result.push(action);
    });
    return result;
}
/**
 * ムビチケ有効
 */
function isAvailabilityMovieTicket(checkMovieTicket) {
    return (checkMovieTicket.result !== undefined &&
        checkMovieTicket.result.purchaseNumberAuthResult.knyknrNoInfoOut !==
            null &&
        checkMovieTicket.result.purchaseNumberAuthResult.knyknrNoInfoOut[0]
            .ykknInfo !== null);
}
/**
 *  予約情報からムビチケ情報作成
 */
function createMovieTicketsFromAuthorizeSeatReservation(params) {
    const results = [];
    const { authorizeSeatReservation, pendingMovieTickets, seller } = params;
    if (authorizeSeatReservation.result === undefined) {
        return [];
    }
    const pendingReservations = authorizeSeatReservation.result.responseBody.object.reservations;
    pendingReservations.forEach((pendingReservation) => {
        if (pendingReservation.price === undefined ||
            typeof pendingReservation.price === 'number') {
            return;
        }
        const findMovieTicketTypeChargeSpecification = pendingReservation.price.priceComponent.find((p) => p.typeOf ===
            _cinerino_sdk__WEBPACK_IMPORTED_MODULE_0__["factory"].chevre.priceSpecificationType
                .MovieTicketTypeChargeSpecification);
        if (findMovieTicketTypeChargeSpecification === undefined) {
            return;
        }
        const findPendingMovieTicket = pendingMovieTickets.find((pendingMovieTicket) => {
            return pendingMovieTicket.id === authorizeSeatReservation.id;
        });
        if (findPendingMovieTicket === undefined) {
            return;
        }
        const findReservation = findPendingMovieTicket.movieTickets.find((movieTicket) => {
            const seatNumber = movieTicket.serviceOutput.reservedTicket.ticketedSeat
                .seatNumber;
            const seatSection = movieTicket.serviceOutput.reservedTicket.ticketedSeat
                .seatSection;
            return (pendingReservation.reservedTicket.ticketedSeat !==
                undefined &&
                seatNumber ===
                    pendingReservation.reservedTicket.ticketedSeat
                        .seatNumber &&
                seatSection ===
                    pendingReservation.reservedTicket.ticketedSeat
                        .seatSection);
        });
        if (findReservation === undefined) {
            return;
        }
        results.push({
            typeOf: findReservation.typeOf,
            identifier: findReservation.identifier,
            accessCode: findReservation.accessCode,
            serviceType: findReservation.serviceType,
            serviceOutput: findReservation.serviceOutput,
            project: seller.project,
        });
    });
    return results;
}
/**
 * 券種金額取得
 * @deprecated 非推奨（廃止予定）
 */
function getTicketPrice(ticket) {
    const result = {
        unitPriceSpecification: 0,
        videoFormatCharge: 0,
        soundFormatCharge: 0,
        movieTicketTypeCharge: 0,
        total: 0,
        single: 0,
    };
    if (ticket.priceSpecification === undefined) {
        return result;
    }
    const priceComponent = ticket.priceSpecification.priceComponent;
    const priceSpecificationType = _cinerino_sdk__WEBPACK_IMPORTED_MODULE_0__["factory"].chevre.priceSpecificationType;
    const unitPriceSpecifications = priceComponent.filter((s) => s.typeOf === priceSpecificationType.UnitPriceSpecification);
    const movieTicketTypeCharges = priceComponent.filter((s) => s.typeOf ===
        priceSpecificationType.MovieTicketTypeChargeSpecification);
    result.unitPriceSpecification += unitPriceSpecifications[0].price;
    movieTicketTypeCharges.forEach((movieTicketTypeCharge) => {
        result.movieTicketTypeCharge += movieTicketTypeCharge.price;
    });
    result.total =
        result.unitPriceSpecification +
            result.videoFormatCharge +
            result.soundFormatCharge +
            result.movieTicketTypeCharge;
    const unitPriceSpecification = unitPriceSpecifications[0];
    if (unitPriceSpecification.typeOf ===
        priceSpecificationType.UnitPriceSpecification) {
        const referenceQuantityValue = unitPriceSpecification.referenceQuantity.value === undefined
            ? 1
            : unitPriceSpecification.referenceQuantity.value;
        result.single = result.total / referenceQuantityValue;
    }
    return result;
}
/**
 * アイテム金額取得
 */
function getItemPrice(params) {
    let price = 0;
    // 券種価格
    const priceComponents = params.priceComponents;
    if (priceComponents === undefined) {
        return price;
    }
    const priceSpecificationType = _cinerino_sdk__WEBPACK_IMPORTED_MODULE_0__["factory"].chevre.priceSpecificationType;
    priceComponents.forEach((p) => {
        if (p.typeOf === priceSpecificationType.UnitPriceSpecification) {
            const value = p.referenceQuantity.value
                ? p.referenceQuantity.value
                : 1;
            price += p.price / value;
            return;
        }
        price += p.price;
    });
    // 座席価格
    const seat = params.seat;
    if (seat === undefined || seat.offers === undefined) {
        return price;
    }
    seat.offers.forEach((o) => {
        if (o.priceSpecification === undefined) {
            return;
        }
        o.priceSpecification.priceComponent.forEach((p) => (price += p.price));
    });
    return price;
}
/**
 * ムビチケ認証購入管理番号無効事由区分変換
 */
function movieTicketAuthErroCodeToMessage(code) {
    const table = [
        { code: '01', ja: '存在無', en: 'no existence' },
        { code: '02', ja: 'PINｺｰﾄﾞ必須', en: 'PIN code required' },
        {
            code: '03',
            ja: 'PINｺｰﾄﾞ認証ｴﾗｰ',
            en: 'PIN code authentication error',
        },
        { code: '04', ja: '作品不一致', en: 'Work disagreement' },
        { code: '05', ja: '未ｱｸﾃｨﾍﾞｰﾄ', en: 'unactivated' },
        {
            code: '06',
            ja: '選択興行対象外',
            en: 'Not eligible for selection box',
        },
        { code: '07', ja: '有効期限切れ', en: 'expired' },
        {
            code: '08',
            ja: '座席予約期間外',
            en: 'outside the seat reservation period',
        },
        { code: '09', ja: 'その他', en: 'other' },
        {
            code: '11',
            ja: '座席予約開始前',
            en: 'Before starting seat reservation',
        },
        {
            code: '12',
            ja: '仮お直り購入番号数不一致',
            en: 'temporary redemption purchase number mismatch',
        },
    ];
    const findResult = table.find((data) => data.code === code);
    return findResult === undefined
        ? { ja: 'その他', en: 'other' }
        : { ja: findResult.ja, en: findResult.en };
}
/**
 * 予約金額取得
 */
function getAmount(authorizeSeatReservations) {
    const amounts = authorizeSeatReservations.map((reservations) => reservations.result === undefined ? 0 : reservations.result.price);
    let amount = 0;
    amounts.forEach((a) => {
        amount += a;
    });
    return amount;
}
/**
 * イベント別オーダーへ変換
 */
function order2EventOrders(params) {
    const results = [];
    const order = params.order;
    order.acceptedOffers.forEach((acceptedOffer) => {
        if (acceptedOffer.itemOffered.typeOf !==
            _cinerino_sdk__WEBPACK_IMPORTED_MODULE_0__["factory"].chevre.reservationType.EventReservation) {
            return;
        }
        const itemOffered = acceptedOffer.itemOffered;
        const registered = results.find((result) => {
            return result.event.id === itemOffered.reservationFor.id;
        });
        if (registered === undefined) {
            results.push({
                event: itemOffered.reservationFor,
                data: [acceptedOffer],
            });
        }
        else {
            registered.data.push(acceptedOffer);
        }
    });
    // 公開日順（降順）へソート
    const sortResult = results.sort((a, b) => {
        if (a.event.workPerformed === undefined ||
            a.event.workPerformed.datePublished === undefined) {
            return 1;
        }
        if (b.event.workPerformed === undefined ||
            b.event.workPerformed.datePublished === undefined) {
            return -1;
        }
        const unixA = moment__WEBPACK_IMPORTED_MODULE_1__(a.event.workPerformed.datePublished).unix();
        const unixB = moment__WEBPACK_IMPORTED_MODULE_1__(b.event.workPerformed.datePublished).unix();
        if (unixA > unixB) {
            return -1;
        }
        if (unixA < unixB) {
            return 1;
        }
        return 0;
    });
    return sortResult;
}
/**
 * 座席予約をイベントごとに変換
 */
function authorizeSeatReservation2Event(params) {
    const results = [];
    const authorizeSeatReservations = params.authorizeSeatReservations;
    authorizeSeatReservations.forEach((authorizeSeatReservation) => {
        if (authorizeSeatReservation.result === undefined) {
            return;
        }
        const reservations = authorizeSeatReservation.result.responseBody.object.reservations;
        if (reservations === undefined) {
            return;
        }
        reservations.forEach((reservation) => {
            const registered = results.find((result) => {
                return result.event.id === reservation.reservationFor.id;
            });
            if (registered === undefined) {
                results.push({
                    event: reservation.reservationFor,
                    reservations: [reservation],
                });
            }
            else {
                registered.reservations.push(reservation);
            }
        });
    });
    return results;
}
/**
 * 残席数取得
 */
function getRemainingSeatLength(params) {
    const screeningEventSeats = params.screeningEventSeats;
    const screeningEvent = params.screeningEvent;
    let result = 0;
    const limitSeatNumber = screeningEvent.workPerformed === undefined ||
        screeningEvent.workPerformed.additionalProperty === undefined
        ? undefined
        : screeningEvent.workPerformed.additionalProperty.find((a) => a.name === 'limitSeatNumber');
    const filterResult = screeningEventSeats.filter((s) => {
        if (limitSeatNumber !== undefined) {
            // 作品追加特性（limitSeatNumber）で座席数制御
            return (s.offers !== undefined &&
                s.offers[0].availability ===
                    _cinerino_sdk__WEBPACK_IMPORTED_MODULE_0__["factory"].chevre.itemAvailability.InStock &&
                Number(s.branchCode) <= Number(limitSeatNumber.value));
        }
        return (s.offers !== undefined &&
            s.offers[0].availability === _cinerino_sdk__WEBPACK_IMPORTED_MODULE_0__["factory"].chevre.itemAvailability.InStock);
    });
    result += filterResult.length;
    const reservationCount = screeningEventSeats.filter((s) => {
        return (s.offers !== undefined &&
            s.offers[0].availability ===
                _cinerino_sdk__WEBPACK_IMPORTED_MODULE_0__["factory"].chevre.itemAvailability.OutOfStock);
    }).length;
    if (screeningEvent.maximumAttendeeCapacity !== undefined &&
        result > screeningEvent.maximumAttendeeCapacity - reservationCount) {
        result = screeningEvent.maximumAttendeeCapacity - reservationCount;
    }
    return result;
}
/**
 * 適用座席タイプ判定
 */
function isEligibleSeatingType(params) {
    const seat = params.seat;
    const eligibleSeatingType = params.eligibleSeatingType;
    const filterResult = eligibleSeatingType.filter((e) => {
        if (Array.isArray(seat.seatingType)) {
            return (seat.seatingType.find((s) => e.codeValue === s) !== undefined);
        }
        return e.codeValue === seat.seatingType;
    });
    return filterResult.length === eligibleSeatingType.length;
}
/**
 * 空席取得
 */
function getEmptySeat(params) {
    const reservations = params.reservations;
    const screeningEventSeats = params.screeningEventSeats;
    const seats = [];
    screeningEventSeats.forEach((s) => {
        const section = s.containedInPlace === undefined ||
            s.containedInPlace.branchCode === undefined
            ? ''
            : s.containedInPlace.branchCode;
        const selectedSeat = reservations.find((r) => {
            return (r.seat !== undefined &&
                r.seat.seatNumber === s.branchCode &&
                r.seat.seatSection === section);
        });
        if ((s.offers === undefined ||
            s.offers[0].availability !==
                _cinerino_sdk__WEBPACK_IMPORTED_MODULE_0__["factory"].chevre.itemAvailability.InStock) &&
            selectedSeat === undefined) {
            // 在庫なし
            return;
        }
        seats.push({
            typeOf: s.typeOf,
            seatingType: s.seatingType,
            seatNumber: s.branchCode,
            seatRow: '',
            seatSection: section,
        });
    });
    return seats;
}
/**
 * 予約可能席取得
 */
function selectAvailableSeat(params) {
    const reservations = params.reservations;
    const screeningEventSeats = params.screeningEventSeats;
    const seats = getEmptySeat({ reservations, screeningEventSeats });
    const availableSeats = [];
    reservations.forEach((r) => {
        const findReservationSeat = seats.find((s) => {
            const findReservedSeat = availableSeats.find((a) => {
                const findSubReservedSeat = a.subReservations.find((sub) => sub.seatNumber === s.seatNumber &&
                    sub.seatSection === s.seatSection);
                if (findSubReservedSeat !== undefined) {
                    // サブ予約済み座席
                    return true;
                }
                return (a.seatNumber === s.seatNumber &&
                    a.seatSection === s.seatSection);
            });
            if (findReservedSeat !== undefined) {
                // 予約済み座席
                return false;
            }
            if (r.ticket !== undefined &&
                r.ticket.ticketOffer.eligibleSeatingType !== undefined &&
                !isEligibleSeatingType({
                    seat: s,
                    eligibleSeatingType: r.ticket.ticketOffer.eligibleSeatingType,
                })) {
                // 適用座席タイプ違い
                return false;
            }
            if (r.seat !== undefined) {
                // 座席選択済みの場合予約中の座席を選択
                return (r.seat.seatNumber === s.seatNumber &&
                    r.seat.seatSection === s.seatSection);
            }
            return true;
        });
        if (findReservationSeat === undefined) {
            // 予約可能席なし
            return;
        }
        if (r.ticket === undefined ||
            r.ticket.ticketOffer.eligibleSubReservation === undefined) {
            // サブ予約なし
            availableSeats.push(Object.assign(Object.assign({}, findReservationSeat), { subReservations: [] }));
            return;
        }
        // サブ予約分取得
        const subReservations = [];
        r.ticket.ticketOffer.eligibleSubReservation.forEach((e) => {
            for (let i = 0; i < e.amountOfThisGood; i++) {
                const subReservation = seats.find((s) => {
                    const findReservedSeat = availableSeats.find((a) => {
                        const findSubReservedSeat = a.subReservations.find((sub) => sub.seatNumber === s.seatNumber &&
                            sub.seatSection === s.seatSection);
                        if (findSubReservedSeat !== undefined) {
                            // サブ予約済み座席
                            return true;
                        }
                        return (a.seatNumber === s.seatNumber &&
                            a.seatSection === s.seatSection);
                    });
                    if (findReservedSeat !== undefined) {
                        // 予約済み座席
                        return false;
                    }
                    const findSubReservationSeat = subReservations.find((sub) => sub.seatNumber === s.seatNumber &&
                        sub.seatSection === s.seatSection);
                    if (findSubReservationSeat !== undefined) {
                        // サブ予約中座席
                        return false;
                    }
                    if (findReservationSeat.seatNumber === s.seatNumber &&
                        findReservationSeat.seatSection === s.seatSection) {
                        // 予約中座席
                        return false;
                    }
                    if (Array.isArray(s.seatingType) &&
                        s.seatingType.find((t) => t === e.typeOfGood.seatingType) === undefined) {
                        // 適用座席タイプ違い
                        return false;
                    }
                    if (!Array.isArray(s.seatingType) &&
                        s.seatingType !== e.typeOfGood.seatingType) {
                        // 適用座席タイプ違い
                        return false;
                    }
                    if (r.seat !== undefined) {
                        // 座席選択済みの場合予約中の座席以外を選択
                        return !(r.seat.seatNumber === s.seatNumber &&
                            r.seat.seatSection === s.seatSection);
                    }
                    return true;
                });
                if (subReservation === undefined) {
                    return;
                }
                subReservations.push(subReservation);
            }
        });
        availableSeats.push(Object.assign(Object.assign({}, findReservationSeat), { subReservations }));
    });
    return availableSeats;
}
/**
 * ムビチケオファー取得
 */
function getMovieTicketTypeOffers(params) {
    const screeningEventTicketOffers = params.screeningEventTicketOffers;
    const result = screeningEventTicketOffers.filter((offer) => {
        const movieTicketTypeChargeSpecifications = offer.priceSpecification.priceComponent.filter((priceComponent) => {
            return (priceComponent.typeOf ===
                _cinerino_sdk__WEBPACK_IMPORTED_MODULE_0__["factory"].chevre.priceSpecificationType
                    .MovieTicketTypeChargeSpecification);
        });
        return movieTicketTypeChargeSpecifications.length > 0;
    });
    return result;
}
/**
 * 追加特性取得
 */
function getAdditionalProperty(additionalProperty, key) {
    if (additionalProperty === undefined) {
        return;
    }
    const target = additionalProperty.find((a) => a.name === key);
    if (target === undefined) {
        return;
    }
    return target.value;
}
/**
 * オーダーID生成 (Remise)
 */
function createRemiseOrderId(prefix) {
    const id = prefix === undefined
        ? `${moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYYMMDDHHmmsss')}`
        : `${prefix}${moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYYMMDDHHmmsss')}`;
    return id;
}
/**
 * メンバーシップオファー取得
 */
function getMembershipTypeOffers(params) {
    const screeningEventTicketOffers = params.screeningEventTicketOffers;
    const result = screeningEventTicketOffers.filter((o) => {
        return o.eligibleMembershipType !== undefined;
    });
    return result;
}


/***/ }),

/***/ "xA3K":
/*!**********************************************!*\
  !*** ./src/client/app/models/order/index.ts ***!
  \**********************************************/
/*! exports provided: Action, Print, Search, Download */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "a59p");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return _action__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _download__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download */ "ry5r");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Download", function() { return _download__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./print */ "lPri");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Print", function() { return _print__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ "NyCf");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _search__WEBPACK_IMPORTED_MODULE_3__; });







/***/ }),

/***/ "yiuv":
/*!***********************************************!*\
  !*** ./src/client/app/models/util/printer.ts ***!
  \***********************************************/
/*! exports provided: ConnectionType, printers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionType", function() { return ConnectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printers", function() { return printers; });
/**
 * 接続の種類
 */
var ConnectionType;
(function (ConnectionType) {
    /**
     * なし
     */
    ConnectionType["None"] = "None";
    /**
     * 画像
     */
    ConnectionType["Image"] = "Image";
    /**
     * スター精密 LAN接続
     */
    ConnectionType["StarLAN"] = "StarLAN";
    /**
     * スター精密 Bluetooth接続
     */
    ConnectionType["StarBluetooth"] = "StarBluetooth";
    /**
     * Epson ePOS
     */
    ConnectionType["EpsonEPOS"] = "EpsonEPOS";
})(ConnectionType || (ConnectionType = {}));
/**
 * プリンター一覧
 */
const printers = [
    {
        connectionType: ConnectionType.None,
        name: 'setting.device.printType.none',
    },
    {
        connectionType: ConnectionType.Image,
        name: 'setting.device.printType.image',
    },
    {
        connectionType: ConnectionType.StarLAN,
        name: 'setting.device.printType.starLAN',
    },
    {
        connectionType: ConnectionType.StarBluetooth,
        name: 'setting.device.printType.starBluetooth',
    },
    {
        connectionType: ConnectionType.EpsonEPOS,
        name: 'setting.device.printType.epsonEPOS',
    },
];


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map