(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background-grid\">\r\n    <div *ngFor=\"let i of gridCells\" class=\"background-cell-{{i}}\"></div>\r\n</div>\r\n\r\n<div class=\"container\">    \r\n    <app-character></app-character>\r\n    <div class=\"separator\"></div>\r\n    <app-scoreboard></app-scoreboard>\r\n    <div class=\"separator\"></div>\r\n    <app-keyboard></app-keyboard>\r\n    <app-splash-screen></app-splash-screen>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/character/character.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/character/character.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-container\" *ngIf=\"!!character\">\r\n    <div class=\"avatar-container\" (click)=\"toggleInfo()\">\r\n        <img class=\"avatar\" [src]=\"character.image\" />\r\n    </div>\r\n\r\n    <div class=\"click-for-info-link\" (click)=\"toggleInfo()\">\r\n        (Click here or the image to see the info about this character)\r\n    </div>\r\n\r\n    <div class=\"name\">\r\n        {{character.name}}\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"character-info-splash-screen\" *ngIf=\"isInfoVisible\" [@inOutAnimation]>\r\n    <div class=\"generic-info\">\r\n        {{character.gender}} {{character.species}} {{character.type}} from {{character.origin.name}}, was\r\n        last seen in {{character.location.name}}\r\n    </div>\r\n    <div class=\"separator\"></div>\r\n    <div class=\"episodes-info\">\r\n        <div class=\"episodes-info-header\">appears on:</div>\r\n        <div class=\"episode\" *ngFor=\"let episodeInfo of character.episode\">\r\n            {{episodeInfo.episode}}: {{episodeInfo.name}} ({{episodeInfo.air_date}})\r\n        </div>\r\n    </div>\r\n    <div class=\"separator\"></div>\r\n    <div class=\"click-for-info-link\" (click)=\"toggleInfo()\">Close</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fail-status/fail-status.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fail-status/fail-status.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"status\" *ngFor=\"let status of statuses\" [ngClass]=\"{'active': status, 'inactive': !status}\">\n        &times;\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/key/key.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/key/key.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"key\" (click)=\"onClick()\" [ngClass]=\"{'active': isClickable, 'inactive': !isClickable}\">\n    <span>{{letter}}</span>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/keyboard/keyboard.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/keyboard/keyboard.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"keyboard\">\r\n    <app-key *ngFor=\"let letter of letters\" [letter]=\"letter\"></app-key>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/scoreboard/scoreboard.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scoreboard/scoreboard.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"scoreboard-container\">\n        <div class=\"score-container\">\n            <div class=\"score-title\">\n                you\n            </div>\n            <div class=\"score\">\n                <span>{{win}}</span>\n            </div>\n        </div>\n        <div class=\"score-container\">\n            <div class=\"score-title\">\n                cromulons\n            </div>\n            <div class=\"score\">\n                <span>{{lose}}</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"fail-status-container\">\n        <app-fail-status></app-fail-status>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/splash-screen/splash-screen.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/splash-screen/splash-screen.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"isVisible\" [@inOutAnimation]>\n    <div class=\"win\" *ngIf=\"win\">\n        <video poster=\"https://media.giphy.com/media/26gYOXsPBh3qv420E/200_s.gif\" autoplay=\"\" class=\"video\">\n            <source src=\"https://media.giphy.com/media/26gYOXsPBh3qv420E/giphy.mp4\"\n                type=\"video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;\">\n            <img src=\"https://media.giphy.com/media/26gYOXsPBh3qv420E/giphy.gif\"\n                title=\"Your browser does not support the mp4 video codec.\">\n        </video>\n    </div>\n    <div class=\"lose\" *ngIf=\"lose\">\n        <video poster=\"https://media.giphy.com/media/26gZ1Ye2gkRUxtj9u/200_s.gif\" autoplay=\"\" class=\"video\">\n            <source src=\"https://media.giphy.com/media/26gZ1Ye2gkRUxtj9u/giphy.mp4\"\n                type=\"video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;\">\n            <img src=\"https://media.giphy.com/media/26gZ1Ye2gkRUxtj9u/giphy.gif\"\n                title=\"Your browser does not support the mp4 video codec.\">\n        </video>\n    </div>\n    <div class=\"button\" (click)=\"onClick()\">schwift again!</div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 2px solid var(--border-color);\r\n  border-radius: 8px;\r\n  background-color: var(--container-background-color-dark);\r\n  padding: 20px;\r\n  margin: 40px 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQix3REFBd0Q7RUFDeEQsYUFBYTtFQUNiLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRhaW5lci1iYWNrZ3JvdW5kLWNvbG9yLWRhcmspO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'rickmorty';
        this.gridCells = new Array(361);
    }
    ngOnInit() {
        for (let i = 0; i < this.gridCells.length; i++) {
            this.gridCells[i] = Math.floor(Math.random() * 4) + 1;
        }
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _character_character_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./character/character.component */ "./src/app/character/character.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./keyboard/keyboard.component */ "./src/app/keyboard/keyboard.component.ts");
/* harmony import */ var _key_key_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./key/key.component */ "./src/app/key/key.component.ts");
/* harmony import */ var _fail_status_fail_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fail-status/fail-status.component */ "./src/app/fail-status/fail-status.component.ts");
/* harmony import */ var _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scoreboard/scoreboard.component */ "./src/app/scoreboard/scoreboard.component.ts");
/* harmony import */ var _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./splash-screen/splash-screen.component */ "./src/app/splash-screen/splash-screen.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _character_character_component__WEBPACK_IMPORTED_MODULE_4__["CharacterComponent"],
            _keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_6__["KeyboardComponent"],
            _key_key_component__WEBPACK_IMPORTED_MODULE_7__["KeyComponent"],
            _fail_status_fail_status_component__WEBPACK_IMPORTED_MODULE_8__["FailStatusComponent"],
            _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_9__["ScoreboardComponent"],
            _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_10__["SplashScreenComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/character/character.component.css":
/*!***************************************************!*\
  !*** ./src/app/character/character.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-container {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: inherit;\r\n  width: 500px;\r\n  padding: 0 20px;\r\n}\r\n\r\n.top-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.avatar-container {\r\n  position: relative;\r\n  width: 200px;\r\n  height: 200px;\r\n  background: var(--border-color);\r\n  border: 2px solid var(--border-color);\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n}\r\n\r\n.avatar {\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n\r\n.avatar-container img {\r\n  display: block;\r\n  transition: transform 1s;\r\n}\r\n\r\n.avatar-container:hover img {\r\n  transform: scale(1.3);\r\n  transform-origin: 50% 50%;\r\n}\r\n\r\n.name {\r\n  display: flex;\r\n  position: relative;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  height: 75px;\r\n  width: 100%;\r\n  letter-spacing: 6px;\r\n  text-align: center;\r\n}\r\n\r\n.generic-info {\r\n  padding-left: 4px;\r\n}\r\n\r\n.generic-info,\r\n.episodes-info {\r\n  display: flex;\r\n  position: relative;\r\n  width: 100%;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n  font-size: 16px;\r\n  text-transform: lowercase;\r\n}\r\n\r\n.episodes-info {\r\n  position: relative;\r\n  max-height: 100px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.episodes-info-header {\r\n  position: relative;\r\n  width: 100%;\r\n  margin-bottom: 4px;\r\n  padding-left: 4px;\r\n}\r\n\r\n.episode {\r\n  position: relative;\r\n  padding-left: 10px;\r\n}\r\n\r\n.click-for-info-link {\r\n  cursor: pointer;\r\n}\r\n\r\n.character-info-splash-screen {\r\n  position: absolute;\r\n  display: flex;\r\n  left: 50%;\r\n  top: 60%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  align-self: flex-end;\r\n  width: 600px;\r\n  height: 350px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  z-index: 10;\r\n  padding: 16px;\r\n  background-color: var(--container-background-color-dark);\r\n  border: 2px solid var(--border-color);\r\n  border-radius: 8px;\r\n\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyL2NoYXJhY3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUlBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHdEQUF3RDtFQUN4RCxxQ0FBcUM7RUFDckMsa0JBQWtCOztFQUVsQixnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jaGFyYWN0ZXIvY2hhcmFjdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLnRvcC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmF2YXRhci1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uYXZhdGFyLWNvbnRhaW5lciBpbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcclxufVxyXG5cclxuLmF2YXRhci1jb250YWluZXI6aG92ZXIgaW1nIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxufVxyXG5cclxuXHJcblxyXG4ubmFtZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBoZWlnaHQ6IDc1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nZW5lcmljLWluZm8ge1xyXG4gIHBhZGRpbmctbGVmdDogNHB4O1xyXG59XHJcblxyXG4uZ2VuZXJpYy1pbmZvLFxyXG4uZXBpc29kZXMtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcbn1cclxuXHJcbi5lcGlzb2Rlcy1pbmZvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5lcGlzb2Rlcy1pbmZvLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDRweDtcclxufVxyXG5cclxuLmVwaXNvZGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jbGljay1mb3ItaW5mby1saW5rIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXItaW5mby1zcGxhc2gtc2NyZWVuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA2MCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGFpbmVyLWJhY2tncm91bmQtY29sb3ItZGFyayk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/character/character.component.ts":
/*!**************************************************!*\
  !*** ./src/app/character/character.component.ts ***!
  \**************************************************/
/*! exports provided: CharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterComponent", function() { return CharacterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");





let CharacterComponent = class CharacterComponent {
    constructor(apiService, store) {
        this.apiService = apiService;
        this.store = store;
        this.isInfoVisible = false;
        this.randomizedIds = new Array();
        this.character = null;
    }
    ngOnInit() {
        this.getRandomCharacter();
        this.store.lastLetter$.subscribe(_ => this.onKey(_));
        this.store.gameOver$.subscribe(_ => this.onGameOver(_));
        this.store.nextMatch$.subscribe(_ => this.onNextMatch(_));
    }
    getRandomCharacter() {
        const newId = this.getRandomId();
        this.apiService.getRandom(newId).subscribe(_ => {
            const character = _.data.character;
            if (character.species) {
                character.species = character.species.replace(',', '');
            }
            if (character.type) {
                character.type = character.type.replace(',', '');
            }
            this.name = character.name.toLowerCase();
            character.name = this.name.replace(/[a-z]/g, '_');
            this.character = character;
        });
    }
    onKey(letter) {
        if (!!this.character) {
            const letterFound = this.name.indexOf(letter) !== -1;
            let newName = this.character.name;
            if (letterFound) {
                for (let i = 0; i < this.name.length; i++) {
                    if (this.name[i] === letter) {
                        newName = newName.substring(0, i) + letter + newName.substring(i + 1);
                    }
                }
                this.character.name = newName;
                if (newName.indexOf('_') === -1) {
                    this.store.win();
                }
            }
            else {
                this.store.newFailure();
            }
        }
    }
    onGameOver(gameOver) {
        if (gameOver) {
            this.character.name = this.name;
        }
    }
    onNextMatch(nextMatch) {
        if (nextMatch) {
            this.getRandomCharacter();
        }
    }
    toggleInfo() {
        this.isInfoVisible = !this.isInfoVisible;
    }
    getRandomId() {
        let newIdFound = false;
        let newId;
        while (!newIdFound) {
            newId = this.randomize();
            newIdFound = this.randomizedIds.findIndex(_ => _ === newId) === -1;
            if (newIdFound) {
                this.randomizedIds.push(newId);
            }
        }
        return newId;
    }
    randomize() {
        return Math.floor(Math.random() * 493) + 1;
    }
};
CharacterComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] }
];
CharacterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-character',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./character.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/character/character.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('inOutAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ width: 0, height: 0, opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ width: 600, height: 350, opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ width: 600, height: 350, opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ width: 0, height: 0, opacity: 0 }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./character.component.css */ "./src/app/character/character.component.css")).default]
    })
], CharacterComponent);



/***/ }),

/***/ "./src/app/fail-status/fail-status.component.css":
/*!*******************************************************!*\
  !*** ./src/app/fail-status/fail-status.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 500px;\r\n}\r\n\r\n.status {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: 0 4px;\r\n  border: 2px solid var(--border-color);\r\n  border-radius: 4px;\r\n  color: var(--font-color);\r\n  font-size: 60px;\r\n}\r\n\r\n.status.active {\r\n  background-color: var(--alert-color);\r\n  -webkit-animation: jiggle .5s;\r\n          animation: jiggle .5s;\r\n  transform-origin: 50% 50%;\r\n}\r\n\r\n.status.inactive {\r\n  background-color: var(--contrast-color);\r\n  opacity: var(--inactive-opacity);\r\n}\r\n\r\n@-webkit-keyframes jiggle {\r\n  0% {\r\n    transform: scale(0);\r\n  }\r\n  90% {\r\n    transform: scale(1.4);\r\n  }\r\n  95% {\r\n    transform: scale(.8);\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@keyframes jiggle {\r\n  0% {\r\n    transform: scale(0);\r\n  }\r\n  90% {\r\n    transform: scale(1.4);\r\n  }\r\n  95% {\r\n    transform: scale(.8);\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFpbC1zdGF0dXMvZmFpbC1zdGF0dXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQWJBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ZhaWwtc3RhdHVzL2ZhaWwtc3RhdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5zdGF0dXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW46IDAgNHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbn1cclxuXHJcbi5zdGF0dXMuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbGVydC1jb2xvcik7XHJcbiAgYW5pbWF0aW9uOiBqaWdnbGUgLjVzO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbn1cclxuXHJcbi5zdGF0dXMuaW5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRyYXN0LWNvbG9yKTtcclxuICBvcGFjaXR5OiB2YXIoLS1pbmFjdGl2ZS1vcGFjaXR5KTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBqaWdnbGUge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgfVxyXG4gIDkwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XHJcbiAgfVxyXG4gIDk1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC44KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/fail-status/fail-status.component.ts":
/*!******************************************************!*\
  !*** ./src/app/fail-status/fail-status.component.ts ***!
  \******************************************************/
/*! exports provided: FailStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailStatusComponent", function() { return FailStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/store.service */ "./src/app/services/store.service.ts");



let FailStatusComponent = class FailStatusComponent {
    constructor(store) {
        this.store = store;
        this.maximumFails = 9;
        this.statuses = new Array(this.maximumFails);
    }
    ngOnInit() {
        this.store.fails$.subscribe(_ => {
            if (_ < this.maximumFails) {
                this.statuses[_ - 1] = true;
            }
            else if (_ === this.maximumFails) {
                this.statuses[_ - 1] = true;
                this.store.gameOver();
            }
            else {
                this.store.gameOver();
            }
        });
        this.store.nextMatch$.subscribe(_ => this.onNextMatch(_));
    }
    onNextMatch(nextMatch) {
        if (nextMatch) {
            this.statuses = new Array(this.maximumFails);
        }
    }
};
FailStatusComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
];
FailStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fail-status',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fail-status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fail-status/fail-status.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fail-status.component.css */ "./src/app/fail-status/fail-status.component.css")).default]
    })
], FailStatusComponent);



/***/ }),

/***/ "./src/app/key/key.component.css":
/*!***************************************!*\
  !*** ./src/app/key/key.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".key {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: 4px;\r\n  border: 2px solid var(--border-color);\r\n  border-radius: 4px;\r\n  text-transform: capitalize;\r\n  color: var(--container-background-color-dark);\r\n  font-size: 26px;\r\n  font-weight: bold;\r\n}\r\n\r\n.key.active {\r\n  cursor: pointer;\r\n  background-color: var(--container-background-color-light);\r\n}\r\n\r\n.key.inactive {\r\n  cursor: default;\r\n  background-color: var(--contrast-color);\r\n  opacity: var(--inactive-opacity);\r\n  -webkit-animation: jump 2s;\r\n          animation: jump 2s;\r\n}\r\n\r\n@-webkit-keyframes jump {\r\n  0% {\r\n    transform: rotate(-15deg);\r\n  }\r\n  5% {\r\n    transform: rotate(15deg);\r\n  }\r\n  10% {\r\n    transform: rotate(-15deg);\r\n  }\r\n  15% {\r\n    transform: rotate(15deg);\r\n  }\r\n  20% {\r\n    transform: rotate(0) translateY(0%) scale(1, 1);\r\n  }\r\n  25% {\r\n    transform: translateY(0%) scale(1.2, 0.75);\r\n  }\r\n  50% {\r\n    transform: translateY(-50%) scale(1, 1);\r\n  }\r\n  70% {\r\n    transform: translateY(0%) scale(1.05, 0.85);\r\n  }\r\n  75% {\r\n    transform: translateY(0%) scale(1, 0.9);\r\n  }\r\n  80% {\r\n    transform: translateY(0%) scale(1, 1);\r\n  }\r\n  85% {\r\n    transform: rotate(-15deg);\r\n  }\r\n  90% {\r\n    transform: rotate(15deg);\r\n  }\r\n  95% {\r\n    transform: rotate(-15deg);\r\n  }\r\n  100% {\r\n    transform: rotate(15deg);\r\n  }\r\n}\r\n\r\n@keyframes jump {\r\n  0% {\r\n    transform: rotate(-15deg);\r\n  }\r\n  5% {\r\n    transform: rotate(15deg);\r\n  }\r\n  10% {\r\n    transform: rotate(-15deg);\r\n  }\r\n  15% {\r\n    transform: rotate(15deg);\r\n  }\r\n  20% {\r\n    transform: rotate(0) translateY(0%) scale(1, 1);\r\n  }\r\n  25% {\r\n    transform: translateY(0%) scale(1.2, 0.75);\r\n  }\r\n  50% {\r\n    transform: translateY(-50%) scale(1, 1);\r\n  }\r\n  70% {\r\n    transform: translateY(0%) scale(1.05, 0.85);\r\n  }\r\n  75% {\r\n    transform: translateY(0%) scale(1, 0.9);\r\n  }\r\n  80% {\r\n    transform: translateY(0%) scale(1, 1);\r\n  }\r\n  85% {\r\n    transform: rotate(-15deg);\r\n  }\r\n  90% {\r\n    transform: rotate(15deg);\r\n  }\r\n  95% {\r\n    transform: rotate(-15deg);\r\n  }\r\n  100% {\r\n    transform: rotate(15deg);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2V5L2tleS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLDZDQUE2QztFQUM3QyxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLGVBQWU7RUFDZix1Q0FBdUM7RUFDdkMsZ0NBQWdDO0VBQ2hDLDBCQUFrQjtVQUFsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsK0NBQStDO0VBQ2pEO0VBQ0E7SUFDRSwwQ0FBMEM7RUFDNUM7RUFDQTtJQUNFLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsMkNBQTJDO0VBQzdDO0VBQ0E7SUFDRSx1Q0FBdUM7RUFDekM7RUFDQTtJQUNFLHFDQUFxQztFQUN2QztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBM0NBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLCtDQUErQztFQUNqRDtFQUNBO0lBQ0UsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSx1Q0FBdUM7RUFDekM7RUFDQTtJQUNFLDJDQUEyQztFQUM3QztFQUNBO0lBQ0UsdUNBQXVDO0VBQ3pDO0VBQ0E7SUFDRSxxQ0FBcUM7RUFDdkM7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAva2V5L2tleS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmtleSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogNHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGNvbG9yOiB2YXIoLS1jb250YWluZXItYmFja2dyb3VuZC1jb2xvci1kYXJrKTtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5rZXkuYWN0aXZlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGFpbmVyLWJhY2tncm91bmQtY29sb3ItbGlnaHQpO1xyXG59XHJcblxyXG4ua2V5LmluYWN0aXZlIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udHJhc3QtY29sb3IpO1xyXG4gIG9wYWNpdHk6IHZhcigtLWluYWN0aXZlLW9wYWNpdHkpO1xyXG4gIGFuaW1hdGlvbjoganVtcCAycztcclxufVxyXG5cclxuQGtleWZyYW1lcyBqdW1wIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xyXG4gIH1cclxuICA1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XHJcbiAgfVxyXG4gIDEwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xyXG4gIH1cclxuICAxNSUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCkgdHJhbnNsYXRlWSgwJSkgc2NhbGUoMSwgMSk7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHNjYWxlKDEuMiwgMC43NSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMSwgMSk7XHJcbiAgfVxyXG4gIDcwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHNjYWxlKDEuMDUsIDAuODUpO1xyXG4gIH1cclxuICA3NSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSBzY2FsZSgxLCAwLjkpO1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSBzY2FsZSgxLCAxKTtcclxuICB9XHJcbiAgODUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcbiAgfVxyXG4gIDkwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XHJcbiAgfVxyXG4gIDk1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/key/key.component.ts":
/*!**************************************!*\
  !*** ./src/app/key/key.component.ts ***!
  \**************************************/
/*! exports provided: KeyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyComponent", function() { return KeyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/store.service */ "./src/app/services/store.service.ts");



let KeyComponent = class KeyComponent {
    constructor(store) {
        this.store = store;
        this.isClickable = true;
    }
    ngOnInit() {
        this.store.gameOver$.subscribe(_ => this.onGameOver(_));
        this.store.win$.subscribe(_ => this.onWin(_));
        this.store.nextMatch$.subscribe(_ => this.onNextMatch(_));
    }
    onClick() {
        if (this.isClickable) {
            this.store.lastLetter = this.letter;
            this.isClickable = false;
        }
    }
    onGameOver(gameOver) {
        if (gameOver) {
            this.isClickable = false;
        }
    }
    onWin(win) {
        if (win) {
            this.isClickable = false;
        }
    }
    onNextMatch(nextMatch) {
        if (nextMatch) {
            this.isClickable = true;
        }
    }
};
KeyComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], KeyComponent.prototype, "letter", void 0);
KeyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-key',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./key.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/key/key.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./key.component.css */ "./src/app/key/key.component.css")).default]
    })
], KeyComponent);



/***/ }),

/***/ "./src/app/keyboard/keyboard.component.css":
/*!*************************************************!*\
  !*** ./src/app/keyboard/keyboard.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".keyboard {\r\n    position: relative;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: row;\r\n    width: 500px;\r\n    max-height: 250px; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2V5Ym9hcmQva2V5Ym9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9rZXlib2FyZC9rZXlib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmtleWJvYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHg7IFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/keyboard/keyboard.component.ts":
/*!************************************************!*\
  !*** ./src/app/keyboard/keyboard.component.ts ***!
  \************************************************/
/*! exports provided: KeyboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardComponent", function() { return KeyboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let KeyboardComponent = class KeyboardComponent {
    constructor() {
        this.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
            'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
            'y', 'z'];
    }
    ngOnInit() {
    }
};
KeyboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-keyboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./keyboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/keyboard/keyboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./keyboard.component.css */ "./src/app/keyboard/keyboard.component.css")).default]
    })
], KeyboardComponent);



/***/ }),

/***/ "./src/app/scoreboard/scoreboard.component.css":
/*!*****************************************************!*\
  !*** ./src/app/scoreboard/scoreboard.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 500px;\r\n  background-color: var(--container-background-color-dark);\r\n}\r\n\r\n.scoreboard-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.fail-status-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.score-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 150px;\r\n  margin: 0 6px;\r\n  border: 2px solid var(--border-color);\r\n  border-radius: 8px;\r\n}\r\n\r\n.score-title {\r\n  text-transform: capitalize;\r\n  font-size: 24px;\r\n}\r\n\r\n.score {\r\n  font-size: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NvcmVib2FyZC9zY29yZWJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2NvcmVib2FyZC9zY29yZWJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGFpbmVyLWJhY2tncm91bmQtY29sb3ItZGFyayk7XHJcbn1cclxuXHJcbi5zY29yZWJvYXJkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZhaWwtc3RhdHVzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zY29yZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBtYXJnaW46IDAgNnB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uc2NvcmUtdGl0bGUge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLnNjb3JlIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/scoreboard/scoreboard.component.ts":
/*!****************************************************!*\
  !*** ./src/app/scoreboard/scoreboard.component.ts ***!
  \****************************************************/
/*! exports provided: ScoreboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreboardComponent", function() { return ScoreboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/store.service */ "./src/app/services/store.service.ts");



let ScoreboardComponent = class ScoreboardComponent {
    constructor(store) {
        this.store = store;
        this.win = 0;
        this.lose = 0;
    }
    ngOnInit() {
        this.store.gameOver$.subscribe(_ => this.onGameOver(_));
        this.store.win$.subscribe(_ => this.onWin(_));
    }
    onGameOver(gameOver) {
        if (gameOver) {
            this.lose++;
        }
    }
    onWin(win) {
        if (win) {
            this.win++;
        }
    }
};
ScoreboardComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
];
ScoreboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scoreboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scoreboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/scoreboard/scoreboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scoreboard.component.css */ "./src/app/scoreboard/scoreboard.component.css")).default]
    })
], ScoreboardComponent);



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApiService = class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiEndpoint = 'https://rickandmortyapi.com/graphql';
    }
    getRandom(id) {
        return this.httpClient.get(this.buildQuery(id));
    }
    buildQuery(id) {
        return `${this.apiEndpoint}?query=`
            + `{character(id:${id}){name,species,type,gender,origin{name},location{name},image,episode{name,episode,air_date}}}`;
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/services/store.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/store.service.ts ***!
  \*******************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let StoreService = class StoreService {
    constructor() {
        this._lastLetter$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.lastLetter$ = this._lastLetter$.asObservable();
        this._fails$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.fails$ = this._fails$.asObservable();
        this._gameOver$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.gameOver$ = this._gameOver$.asObservable();
        this._win$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.win$ = this._win$.asObservable();
        this._nextMatch$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.nextMatch$ = this._nextMatch$.asObservable();
    }
    get lastLetter() {
        return this._lastLetter$.getValue();
    }
    set lastLetter(lastLetter) {
        this._lastLetter$.next(lastLetter);
    }
    newFailure() {
        this._fails$.next(this._fails$.getValue() + 1);
    }
    gameOver() {
        this._gameOver$.next(true);
    }
    win() {
        this._win$.next(true);
    }
    nextMatch() {
        this._fails$.next(0);
        this._nextMatch$.next(true);
    }
};
StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StoreService);



/***/ }),

/***/ "./src/app/splash-screen/splash-screen.component.css":
/*!***********************************************************!*\
  !*** ./src/app/splash-screen/splash-screen.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  position: absolute;\r\n  display: flex;\r\n  left: 50%;\r\n  top: 60%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  align-self: flex-end;\r\n  width: 600px;\r\n  height: 375px;\r\n  overflow: hidden;\r\n  z-index: 10;\r\n  background-color: var(--container-background-color-dark);\r\n  border: 2px solid var(--border-color);\r\n  border-radius: 8px;\r\n  padding: 16px;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.video {\r\n  width: 480px;\r\n  height: 270px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.button {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-transform: capitalize;\r\n  color: var(--font-color);\r\n  border: 2px solid var(--border-color);\r\n  border-radius: 50px;\r\n  cursor: pointer;\r\n  height: 50px;\r\n  width: 250px;\r\n  font-size: 26px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BsYXNoLXNjcmVlbi9zcGxhc2gtc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx3REFBd0Q7RUFDeEQscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zcGxhc2gtc2NyZWVuL3NwbGFzaC1zY3JlZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDYwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIGhlaWdodDogMzc1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB6LWluZGV4OiAxMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250YWluZXItYmFja2dyb3VuZC1jb2xvci1kYXJrKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4udmlkZW8ge1xyXG4gIHdpZHRoOiA0ODBweDtcclxuICBoZWlnaHQ6IDI3MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/splash-screen/splash-screen.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/splash-screen/splash-screen.component.ts ***!
  \**********************************************************/
/*! exports provided: SplashScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenComponent", function() { return SplashScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");




let SplashScreenComponent = class SplashScreenComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.gameOver$.subscribe(_ => this.onGameOver(_));
        this.store.win$.subscribe(_ => this.onWin(_));
    }
    onClick() {
        this.lose = false;
        this.win = false;
        this.isVisible = false;
        this.store.nextMatch();
    }
    onGameOver(gameOver) {
        if (gameOver) {
            this.lose = true;
            this.isVisible = true;
        }
    }
    onWin(win) {
        if (win) {
            this.win = true;
            this.isVisible = true;
        }
    }
};
SplashScreenComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
];
SplashScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-splash-screen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./splash-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/splash-screen/splash-screen.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('inOutAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ width: 0, height: 0, opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ width: 600, height: 375, opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ width: 600, height: 375, opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ width: 0, height: 0, opacity: 0 }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./splash-screen.component.css */ "./src/app/splash-screen/splash-screen.component.css")).default]
    })
], SplashScreenComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\z_workspace\rickmorty\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map