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
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/action/action.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/action/action.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <div class=\"row\">\n    <div class=\"col text-center\">\n      <span [class.disabled]='!leftEnabled' class=\"arrow material-icons\" (click)='previousCard()'>arrow_back</span>\n    </div>\n    <div class=\"col text-center\">\n      <span class=\"name\">{{playerName}}</span>\n    </div>\n    <div class=\"col text-center\">\n      <span [class.disabled]='!rightEnabled' class=\"arrow material-icons\" (click)='nextCard()'>arrow_forward</span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <table mat-table [dataSource]=\"dataSource\">\n      <ng-container matColumnDef=\"predicted\">\n        <th [class.black]=\"gameData.currentStage === GameStages.GUESS_STAGE\" mat-header-cell *matHeaderCellDef>Predicted</th>\n        <td [class.highlight]=\"gameData.currentStage === GameStages.GUESS_STAGE\" mat-cell *matCellDef=\"let element\">{{ element.predicted }}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"got\">\n        <th [class.black]=\"gameData.currentStage === GameStages.GOT_STAGE\" mat-header-cell *matHeaderCellDef>Got</th>\n        <td [class.highlight]=\"gameData.currentStage === GameStages.GOT_STAGE\" mat-cell *matCellDef=\"let element\">{{ element.got }}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"score\">\n        <th mat-header-cell *matHeaderCellDef>Score</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.score }}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"columns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: columns\"></tr>\n    </table>\n  </div>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar [title]='gameData.currentStage === GameStages.GAME_OVER ? \"GAME OVER\" : undefined' [roundNumber]=\"gameData.roundOf\" [roundNumber2]='getRoundNumber2()'></app-navbar>\n<div class=\"container\">\n  <div [ngSwitch]=\"gameData.currentStage\">\n    <div *ngSwitchCase=\"GameStages.ROUND_RESULT_STAGE\">\n      <app-round-end></app-round-end>\n      <div class='buttoncont pt-4 pb-4'>\n        <button (click)='previousStage()' class=\"continue\" mat-raised-button color=\"accent\">BACK</button>\n        <button [disabled]='!isRoundValid()' (click)='nextStage()' class=\"continue\" mat-raised-button color=\"accent\">CONTINUE</button>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"GameStages.FINAL_STAGE\">\n      <app-leaderboard></app-leaderboard>\n      <div *ngIf=\"gameData.currentStage === GameStages.FINAL_STAGE\" class='buttoncont pt-4 container'>\n        <button (click)='gameData.nextRound()' class=\"continue\" mat-raised-button color=\"accent\">CONTINUE</button>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"GameStages.GAME_OVER\">\n      <app-leaderboard title='FINAL SCORES'></app-leaderboard>\n      <div *ngIf=\"gameData.currentStage === GameStages.GAME_OVER\" class='buttoncont'>\n        <button (click)='newGame()' class=\"continue\" mat-raised-button color=\"accent\">NEW GAME</button>\n      </div>\n    </div>\n    <div *ngSwitchDefault>\n      <app-guesses></app-guesses>\n      <app-action (cardChanged)='invalidGuessKeyHandler()'></app-action>\n      <app-key-grid [disabledGuess]='invalidGuessKey' (clicked)='keyClicked($event)'></app-key-grid>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/guesses/guesses.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/guesses/guesses.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card *ngIf=\"roundInformation.length > 0\">\n  <div class=\"row\">\n    <div class=\"col text-center\">\n      <span class='title'>{{getTitle()}}</span>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div *ngFor=\"let roundInfo of roundInformation\" class=\"col center\">\n    <span>{{roundInfo.name}}</span>\n      <br>\n      <span>{{roundInfo.info}}</span>\n    </div>\n  </div>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/key-grid/key-grid.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/key-grid/key-grid.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"grid\">\n    <div *ngFor=\"let btn of buttons; index as i\" class=\"row\">\n      <div *ngFor=\"let rowbtn of buttons; index as j\" class=\"col\">\n        <button [disabled]='i*3+j>gameData.roundOf || disabledGuess === i*3+j' (click)='clicked.emit(i*3+j)' class=\"key-button\" mat-stroked-button>{{i*3+j}}</button>\n      </div>\n    </div>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/leaderboard/leaderboard.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/leaderboard/leaderboard.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col text-center\">\n      <mat-card>\n        <span class=\"title\">{{title}}</span>\n      </mat-card>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <app-score-card\n        primary\n        size=\"1.3em\"\n        rank=\"1\"\n        [name]=\"leader.name\"\n        [score]=\"leader.score\"\n      ></app-score-card>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\" *ngFor=\"let noob of subLeaderboard; index as i\">\n      <app-score-card\n        rank=\"{{ i + 2 }}\"\n        [name]=\"noob.name\"\n        [score]=\"noob.score\"\n      ></app-score-card>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/navbar/navbar.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/navbar/navbar.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" class=\"nav-container\">\n  <div class=\"navigation\">\n    <button mat-mini-fab aria-label=\"menu\">\n      <mat-icon>menu</mat-icon>\n    </button>\n  </div>\n  <span class=\"round\">{{getTitle()}}</span>\n  <span class=\"rightside\"></span>\n</mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/round-card/round-card.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/round-card/round-card.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <div class=\"row\">\n    <div class=\"col text-center\">\n      <span class=\"name\">{{playerName}}</span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <table mat-table [dataSource]=\"dataSource\">\n      <ng-container matColumnDef=\"predicted\">\n        <th mat-header-cell *matHeaderCellDef>Predicted</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.predicted }}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"got\">\n        <th mat-header-cell *matHeaderCellDef>Got</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.got }}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"score\">\n        <th mat-header-cell *matHeaderCellDef>Score</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.score }} ({{element.diff}})</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"correctCount\">\n        <th mat-header-cell *matHeaderCellDef>Correct Count</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.correctCount }}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"columns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: columns\"></tr>\n    </table>\n  </div>\n\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/round-end/round-end.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/round-end/round-end.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col text-center\">\n      <mat-card>\n        <span class=\"title\">Round Results</span>\n      </mat-card>\n    </div>\n  </div>\n  <div *ngIf=\"invalid\" class=\"row\">\n    <div class=\"col\">\n      <mat-card class=\"error-card\">\n        <span>Incorrect scores, someone lied!<br>Find the pizma.</span\n        >\n      </mat-card>\n    </div>\n  </div>\n  <div class=\"row\" *ngFor=\"let result of roundResults\">\n    <div class=\"col\">\n      <app-round-card\n        [playerName]=\"result.name\"\n        [predicted]=\"result.predicted\"\n        [got]=\"result.got\"\n        [score]=\"result.score\"\n        [diff]=\"result.diff\"\n        [correctCount]=\"result.correctCount\"\n      ></app-round-card>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/score-card/score-card.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/score-card/score-card.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card\n  [style.font-size]=\"size\"\n  [class.primary-color-bg]='primary!==undefined'\n  class=\"scorebox\"\n>\n  <span class=\"rank\">{{ rank }}</span>\n  <div class=\"name-score\">\n    <span class=\"name\">{{ name }}</span>\n    <br />\n    <span class=\"score\"\n      >SCORE: <span class=\"score-number\">{{ score }}</span></span\n    >\n  </div>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/bottom/bottom.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/bottom/bottom.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bottom\">\n  <div class=\"container\">\n  <div class=\"row bot-buttons\">\n    <div class=\"col center pl-3\">\n      <button mat-raised-button color=\"accent\" class=\"setup-button\" (click)=\"login.emit()\">LOGIN</button>\n    </div>\n    <div *ngIf=\"stage!=LandingStage.NAME_STAGE\" class=\"col center\">\n      <button mat-raised-button class=\"setup-button\" (click)=\"back.emit()\">BACK</button>\n    </div>\n    <div *ngIf=\"stage!=LandingStage.OPTIONS_STAGE\" class=\"col center pr-3\">\n      <button mat-raised-button color=\"primary\" [disabled]=\"!stageValid\" class=\"setup-button\" (click)=\"continue.emit()\">CONTINUE</button>\n    </div>\n    <div *ngIf=\"stage==LandingStage.OPTIONS_STAGE\" class=\"col center pr-3\">\n      <button routerLink=\"/play\" mat-raised-button color=\"primary\" [disabled]=\"!stageValid\" class=\"setup-button\" (click)=\"startGame.emit()\">START GAME</button>\n    </div>\n  </div>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-top [text]=\"getTopTitle()\"></app-top>\n<div class=\"background\">\n  <div class=\"container\">\n    <div class=\"top-padding\"></div>\n    <div [ngSwitch]=\"currentStage\">\n      <app-names\n        *ngSwitchCase=\"LandingStage.NAME_STAGE\"\n        (isValid)=\"onValidityChange($event)\"\n        [namesList]=\"pregameInfo.names\"\n      ></app-names>\n      <app-options [style]='pregameInfo.style' [bonus]='pregameInfo.bonus' [penalty]='pregameInfo.penalty' *ngSwitchCase=\"LandingStage.OPTIONS_STAGE\"></app-options>\n    </div>\n    <div class=\"bottom-padding\"></div>\n  </div>\n</div>\n<app-bottom\n  (back)=\"handleBack()\"\n  (login)=\"handleLogin()\"\n  (continue)=\"handleContinue()\"\n  (startGame)=\"handleStart()\"\n  [stage]=\"currentStage\"\n  [stageValid]=\"isStageValid\"\n></app-bottom>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/names/names.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/names/names.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <div class=\"row\" *ngFor=\"let name of playerNames.controls; index as i\">\n    <div class=\"col center\">\n      <mat-form-field appearance=\"outline\" color=\"accent\">\n        <mat-label>Player Name</mat-label>\n        <input matInput [formControl]=\"playerNames.controls[i]\" />\n      </mat-form-field>\n      <span\n        class=\"remover\"\n        *ngIf=\"i >= MINIMUM_PLAYERS\"\n        (click)=\"removePlayer(i)\"\n        ><i class=\"material-icons\">highlight_off</i>\n      </span>\n    </div>\n  </div>\n  <div class=\"row lastname\" #lastel *ngIf=\"!isMaxPlayersReached()\">\n    <div class=\"col center\">\n      <mat-form-field\n        appearance=\"outline\"\n        color=\"accent\"\n        (click)=\"addPlayerName()\"\n      >\n        <mat-label>+ Add Another Player</mat-label>\n        <input matInput disabled />\n      </mat-form-field>\n    </div>\n  </div>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/options/options-option/options-option.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/options/options-option/options-option.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <div class=\"row\">\n    <p class=\"options-group\">\n      <span class=\"option-title\">{{name}}</span>\n      <mat-button-toggle-group\n        class=\"option-buttons\"\n        name=\"fontStyle\"\n        aria-label=\"Font Style\"\n        (change)='change($event)'\n      >\n      <mat-button-toggle *ngFor=\"let toggle of toggles\" checked=\"{{curVal===toggle}}\" value=\"{{toggle}}\">{{toggle}}</mat-button-toggle>\n      </mat-button-toggle-group>\n    </p>\n  </div>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/options/options.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/options/options.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-options-option (toggleChange)='bonusChange($event)' name='Bonus Points' [curVal]='bonus' [toggles]=\"bonusOptions\"></app-options-option>\n<app-options-option (toggleChange)='penaltyChange($event)' name='Penalty Points' [curVal]='penalty' [toggles]=\"penaltyOptions\"></app-options-option>\n<app-options-option (toggleChange)='styleChange($event)' name='Play Style' [curVal]='style' [toggles]=\"styleOptions\"></app-options-option>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/top/top.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/top/top.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"top-container\">\n  <div class=\"title-bg\">\n    <div class=\"center pad\">\n      <span class=\"title title-font\" color=\"primary\">\n        {{text}}\n      </span>\n    </div>\n  </div>\n</div>\n");

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

/***/ "./src/app/GameStages.ts":
/*!*******************************!*\
  !*** ./src/app/GameStages.ts ***!
  \*******************************/
/*! exports provided: GameStages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameStages", function() { return GameStages; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var GameStages;
(function (GameStages) {
    GameStages[GameStages["GUESS_STAGE"] = 0] = "GUESS_STAGE";
    GameStages[GameStages["GOT_STAGE"] = 1] = "GOT_STAGE";
    GameStages[GameStages["ROUND_RESULT_STAGE"] = 2] = "ROUND_RESULT_STAGE";
    GameStages[GameStages["FINAL_STAGE"] = 3] = "FINAL_STAGE";
    GameStages[GameStages["GAME_OVER"] = 4] = "GAME_OVER";
})(GameStages || (GameStages = {}));


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");





const routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] },
    { path: 'play', component: _game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
        this.title = 'whist-assist-ui';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _landing_top_top_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./landing/top/top.component */ "./src/app/landing/top/top.component.ts");
/* harmony import */ var _landing_bottom_bottom_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./landing/bottom/bottom.component */ "./src/app/landing/bottom/bottom.component.ts");
/* harmony import */ var _landing_names_names_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./landing/names/names.component */ "./src/app/landing/names/names.component.ts");
/* harmony import */ var _landing_options_options_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./landing/options/options.component */ "./src/app/landing/options/options.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _game_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./game/navbar/navbar.component */ "./src/app/game/navbar/navbar.component.ts");
/* harmony import */ var _game_guesses_guesses_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./game/guesses/guesses.component */ "./src/app/game/guesses/guesses.component.ts");
/* harmony import */ var _game_action_action_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./game/action/action.component */ "./src/app/game/action/action.component.ts");
/* harmony import */ var _game_key_grid_key_grid_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./game/key-grid/key-grid.component */ "./src/app/game/key-grid/key-grid.component.ts");
/* harmony import */ var _game_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./game/leaderboard/leaderboard.component */ "./src/app/game/leaderboard/leaderboard.component.ts");
/* harmony import */ var _game_score_card_score_card_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./game/score-card/score-card.component */ "./src/app/game/score-card/score-card.component.ts");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./highlight.directive */ "./src/app/highlight.directive.ts");
/* harmony import */ var _landing_options_options_option_options_option_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./landing/options/options-option/options-option.component */ "./src/app/landing/options/options-option/options-option.component.ts");
/* harmony import */ var _game_round_end_round_end_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./game/round-end/round-end.component */ "./src/app/game/round-end/round-end.component.ts");
/* harmony import */ var _game_round_card_round_card_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./game/round-card/round-card.component */ "./src/app/game/round-card/round-card.component.ts");




































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
            _landing_top_top_component__WEBPACK_IMPORTED_MODULE_20__["TopComponent"],
            _landing_bottom_bottom_component__WEBPACK_IMPORTED_MODULE_21__["BottomComponent"],
            _landing_names_names_component__WEBPACK_IMPORTED_MODULE_22__["NamesComponent"],
            _landing_options_options_component__WEBPACK_IMPORTED_MODULE_23__["OptionsComponent"],
            _game_game_component__WEBPACK_IMPORTED_MODULE_24__["GameComponent"],
            _game_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_25__["NavbarComponent"],
            _game_guesses_guesses_component__WEBPACK_IMPORTED_MODULE_26__["GuessesComponent"],
            _game_action_action_component__WEBPACK_IMPORTED_MODULE_27__["ActionComponent"],
            _game_key_grid_key_grid_component__WEBPACK_IMPORTED_MODULE_28__["KeyGridComponent"],
            _game_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_29__["LeaderboardComponent"],
            _game_score_card_score_card_component__WEBPACK_IMPORTED_MODULE_30__["ScoreCardComponent"],
            _highlight_directive__WEBPACK_IMPORTED_MODULE_31__["HighlightDirective"],
            _landing_options_options_option_options_option_component__WEBPACK_IMPORTED_MODULE_32__["OptionsOptionComponent"],
            _game_round_end_round_end_component__WEBPACK_IMPORTED_MODULE_33__["RoundEndComponent"],
            _game_round_card_round_card_component__WEBPACK_IMPORTED_MODULE_34__["RoundCardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"]
        ],
        exports: [
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/game-data.service.ts":
/*!**************************************!*\
  !*** ./src/app/game-data.service.ts ***!
  \**************************************/
/*! exports provided: GameDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameDataService", function() { return GameDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _GameStages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameStages */ "./src/app/GameStages.ts");



let GameDataService = class GameDataService {
    constructor() {
        //TESTING
        // this.options = {  playStyle: '181', bonusAmount: 5 };
        this.players = new Map();
        this.roundPredictions = new Map();
        this.roundGots = new Map();
        this.roundPoints = new Map();
        this.playerNames = [];
        this.currentStage = _GameStages__WEBPACK_IMPORTED_MODULE_2__["GameStages"].GUESS_STAGE;
        this.completedRoundsInRoundOf = 0;
        this.loopDone = false;
    }
    addPlayers(names) {
        for (const name of names) {
            this.playerNames.push(name);
            this.players.set(name, {
                totalScore: 0,
                mistakeCount: 0,
                correctCount: 0
            });
        }
    }
    initGame() {
        this.startingPlayerId = 0;
        this.currentPlayerId = this.startingPlayerId;
        if (this.options.playStyle === '818') {
            this.roundOf = 8;
            this.goingUp = false;
        }
        else {
            this.roundOf = 1;
            this.goingUp = true;
        }
    }
    nextPlayer() {
        this.currentPlayerId = (this.currentPlayerId + 1) % this.playerNames.length;
        if (this.currentPlayerId === 0) { // next stage
            this.currentStage++;
            if (this.currentStage === _GameStages__WEBPACK_IMPORTED_MODULE_2__["GameStages"].FINAL_STAGE) {
                // tslint:disable-next-line:max-line-length
                if ((this.options.playStyle === '181' && this.roundOf === 1 && this.completedRoundsInRoundOf === this.players.size - 1 && this.loopDone)
                    // tslint:disable-next-line:max-line-length
                    || (this.options.playStyle === '818' && this.roundOf === 8 && this.completedRoundsInRoundOf === this.players.size - 1 && this.loopDone)) {
                    this.currentStage = _GameStages__WEBPACK_IMPORTED_MODULE_2__["GameStages"].GAME_OVER;
                }
            }
        }
    }
    setToLastPlayer() {
        this.currentPlayerId = this.playerNames.length - 1;
    }
    addGuess(amount) {
        const onNewestStep = this.isOnNewestStep();
        const playerName = this.playerNames[this.currentPlayerId];
        const got = this.roundGots.get(playerName);
        if (got !== undefined) {
            this.players.get(playerName).totalScore -= this.calculateScore();
        }
        this.roundPredictions.set(playerName, amount);
        if (got !== undefined) {
            this.players.get(playerName).totalScore += this.calculateScore();
        }
        if (onNewestStep) {
            this.nextPlayer();
        }
    }
    addGot(amount) {
        const onNewestStep = this.isOnNewestStep();
        const playerName = this.playerNames[this.currentPlayerId];
        if (!onNewestStep) {
            this.players.get(playerName).totalScore -= this.calculateScore();
        }
        this.roundGots.set(playerName, amount);
        this.players.get(playerName).totalScore += this.calculateScore();
        if (onNewestStep) {
            this.nextPlayer();
        }
    }
    previousPlayer() {
        this.currentPlayerId -= 1;
        if (this.currentPlayerId === -1) {
            this.currentPlayerId = this.playerNames.length - 1;
            this.currentStage--;
        }
    }
    isOnLastStepOfStage() {
        return this.currentPlayerId === this.playerNames.length - 1;
    }
    isOnNewestStep() {
        const stepsTaken = this.roundPredictions.size + this.roundGots.size;
        const curStep = this.currentStage * this.playerNames.length + this.currentPlayerId;
        return stepsTaken === curStep;
    }
    getNewestStage() {
        const stepsTaken = this.roundPredictions.size + this.roundGots.size;
        return Math.floor(stepsTaken / this.playerNames.length);
    }
    calculateScore(playerName) {
        if (playerName === undefined) {
            playerName = this.playerNames[this.currentPlayerId];
        }
        let roundPoints = 0;
        const got = this.roundGots.get(playerName);
        const predicted = this.roundPredictions.get(playerName);
        if (got === predicted) {
            roundPoints += 5 + got;
        }
        else {
            roundPoints -= Math.abs(got - predicted);
        }
        this.roundPoints.set(playerName, roundPoints);
        return roundPoints;
    }
    scoreCompareFunction(playerA, playerB) {
        if (playerA.score > playerB.score) {
            return -1;
        }
        if (playerA.score < playerB.score) {
            return 1;
        }
        return 0;
    }
    getLeaderboard() {
        const leaderboard = [];
        for (const playerName of this.playerNames) {
            leaderboard.push({
                score: this.players.get(playerName).totalScore,
                name: playerName
            });
        }
        leaderboard.sort(this.scoreCompareFunction);
        return leaderboard;
    }
    newGame() {
        this.currentStage = 0;
        this.roundGots.clear();
        this.roundPredictions.clear();
        this.players.clear();
        this.playerNames = [];
        this.roundOf = 1;
        this.loopDone = false;
        this.completedRoundsInRoundOf = 0;
    }
    resortArray() {
        for (let i = 0; i < this.playerNames.length - 1; i++) {
            const temp = this.playerNames[i];
            this.playerNames[i] = this.playerNames[i + 1];
            this.playerNames[i + 1] = temp;
        }
    }
    nextRound() {
        this.currentStage = _GameStages__WEBPACK_IMPORTED_MODULE_2__["GameStages"].GUESS_STAGE;
        this.roundGots.clear();
        this.roundPredictions.clear();
        this.resortArray();
        // this.startingPlayerId = (this.startingPlayerId + 1) % this.playerNames.length;
        this.currentPlayerId = this.startingPlayerId;
        let addingRound = true;
        if (this.roundOf === 1 || this.roundOf === 8) {
            this.completedRoundsInRoundOf++;
            addingRound = false;
            if (this.completedRoundsInRoundOf === this.players.size) {
                addingRound = true;
                this.completedRoundsInRoundOf = 0;
                if (this.roundOf === 1) {
                    this.goingUp = true;
                    if (this.options.playStyle === '818') {
                        this.loopDone = true;
                    }
                    else if (this.loopDone) {
                    }
                }
                else if (this.roundOf === 8) {
                    this.goingUp = false;
                    if (this.options.playStyle === '181') {
                        this.loopDone = true;
                    }
                }
            }
        }
        if (addingRound) {
            this.goingUp ? this.roundOf++ : this.roundOf--;
        }
    }
    getNotViableGuess() {
        let guessSum = 0;
        for (const guess of this.roundPredictions.values()) {
            guessSum += guess;
        }
        const diff = this.roundOf - guessSum;
        if (diff >= 0) {
            return diff;
        }
        return undefined;
    }
    checkRoundValidity() {
        let sum = 0;
        for (const got of this.roundGots.values()) {
            sum += got;
        }
        return sum === this.roundOf;
    }
};
GameDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GameDataService);



/***/ }),

/***/ "./src/app/game/action/action.component.css":
/*!**************************************************!*\
  !*** ./src/app/game/action/action.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n  table-layout: fixed;\n\n}\nmat-card {\n  margin-top: 10px;\n}\n.name {\n  font-size: 1.3em;\n}\n.arrow {\n  font-size: 2em;\n  color: #2196f3;\n}\n.disabled {\n  color: gray;\n}\n.mat-column-predicted {\n  text-align: center;\n  border-right-width: 1px;\n  border-right-style: solid;\n  border-right-color: rgba(0,0,0,0.12);\n  padding-left: 0!important;\n}\n.mat-column-got {\n  text-align: center;\n  border-right-width: 1px;\n  border-right-style: solid;\n  border-right-color: rgba(0,0,0,0.12);\n}\n.mat-column-score {\n  text-align: center;\n  padding-right: 0!important;\n}\n.highlight {\n  background-color:#ffc1067a;\n}\n.black {\n  color:black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9hY3Rpb24vYWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1COztBQUVyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2FjdGlvbi9hY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG5cbn1cbm1hdC1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5uYW1lIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cbi5hcnJvdyB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogIzIxOTZmMztcbn1cbi5kaXNhYmxlZCB7XG4gIGNvbG9yOiBncmF5O1xufVxuLm1hdC1jb2x1bW4tcHJlZGljdGVkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLDAuMTIpO1xuICBwYWRkaW5nLWxlZnQ6IDAhaW1wb3J0YW50O1xufVxuLm1hdC1jb2x1bW4tZ290IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLDAuMTIpO1xufVxuLm1hdC1jb2x1bW4tc2NvcmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDAhaW1wb3J0YW50O1xufVxuLmhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6I2ZmYzEwNjdhO1xufVxuLmJsYWNrIHtcbiAgY29sb3I6YmxhY2s7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/game/action/action.component.ts":
/*!*************************************************!*\
  !*** ./src/app/game/action/action.component.ts ***!
  \*************************************************/
/*! exports provided: ActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionComponent", function() { return ActionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var src_app_game_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/game-data.service */ "./src/app/game-data.service.ts");
/* harmony import */ var src_app_GameStages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/GameStages */ "./src/app/GameStages.ts");





let ActionComponent = class ActionComponent {
    constructor(gameData) {
        this.gameData = gameData;
        this.GameStages = src_app_GameStages__WEBPACK_IMPORTED_MODULE_4__["GameStages"];
        this.tableData = [
            { predicted: '', got: '', score: '' }
        ];
        this.columns = ['predicted', 'got', 'score'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
        this.leftEnabled = false;
        this.rightEnabled = true;
        this.cardChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.updateCard();
    }
    highlightColumn() {
    }
    updateArrows() {
        this.leftEnabled = this.gameData.currentPlayerId !== 0 || this.gameData.currentStage !== 0;
        this.rightEnabled = !this.gameData.isOnNewestStep();
    }
    updateCard() {
        this.updateArrows();
        this.playerName = this.gameData.playerNames[this.gameData.currentPlayerId];
        const prediction = this.gameData.roundPredictions.get(this.playerName);
        console.log(this.playerName + ' prediction ', prediction);
        if (prediction !== undefined) {
            console.log(this.playerName + ' prediction ', prediction.toString());
            this.tableData[0].predicted = prediction.toString();
        }
        else {
            this.tableData[0].predicted = '';
        }
        const got = this.gameData.roundGots.get(this.playerName);
        if (got !== undefined) {
            this.tableData[0].got = got.toString();
        }
        else {
            this.tableData[0].got = '';
        }
        const score = this.gameData.players.get(this.playerName).totalScore;
        if (score !== undefined) {
            this.tableData[0].score = score.toString();
        }
    }
    previousCard() {
        if (this.leftEnabled) {
            this.gameData.previousPlayer();
            this.updateCard();
        }
        this.cardChanged.emit();
    }
    nextCard() {
        if (this.rightEnabled) {
            this.gameData.nextPlayer();
            this.updateCard();
        }
        this.cardChanged.emit();
    }
};
ActionComponent.ctorParameters = () => [
    { type: src_app_game_data_service__WEBPACK_IMPORTED_MODULE_3__["GameDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ActionComponent.prototype, "cardChanged", void 0);
ActionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-action',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./action.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/action/action.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./action.component.css */ "./src/app/game/action/action.component.css")).default]
    })
], ActionComponent);



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding-top: 10px;\n}\napp-action {\n  padding-top: 20px;\n}\n.top-padding {\n  padding-top: 20px;\n  margin-top: 20px;\n}\n.continue {\n  -webkit-box-flex:1;\n          flex:1;\n  margin-left:10px;\n  margin-right: 10px;\n}\n.full {\n  width: 100%;\n}\n.buttoncont {\n  display: -webkit-box;\n  display: flex;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQU07VUFBTixNQUFNO0VBQ04sZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuYXBwLWFjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLnRvcC1wYWRkaW5nIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uY29udGludWUge1xuICBmbGV4OjE7XG4gIG1hcmdpbi1sZWZ0OjEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnV0dG9uY29udCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _guesses_guesses_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guesses/guesses.component */ "./src/app/game/guesses/guesses.component.ts");
/* harmony import */ var _action_action_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action/action.component */ "./src/app/game/action/action.component.ts");
/* harmony import */ var _game_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game-data.service */ "./src/app/game-data.service.ts");
/* harmony import */ var _GameStages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GameStages */ "./src/app/GameStages.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let GameComponent = class GameComponent {
    constructor(gameData, router) {
        this.gameData = gameData;
        this.router = router;
        this.GameStages = _GameStages__WEBPACK_IMPORTED_MODULE_5__["GameStages"];
    }
    ngOnInit() {
        /*
          TESTING
        */
        this.gameData.initGame();
        // this.gameData.addPlayers(['Paulius', 'Ignas', 'Ioan']);
        // this.gameData.currentStage = GameStages.FINAL_STAGE;
        console.log(this.gameData.options);
    }
    newGame() {
        this.gameData.newGame();
        this.router.navigate(['/']);
    }
    updateCardsWithGuess() {
        if (this.gameData.getNewestStage() === _GameStages__WEBPACK_IMPORTED_MODULE_5__["GameStages"].GUESS_STAGE) {
            this.guessComponent.updatePredictions();
        }
        else if (this.gameData.getNewestStage() === _GameStages__WEBPACK_IMPORTED_MODULE_5__["GameStages"].GOT_STAGE) {
            this.guessComponent.updateScores();
        }
        this.actionComponent.updateCard();
    }
    updateCardsWithGot() {
        this.guessComponent.updateScores();
        this.actionComponent.updateCard();
    }
    keyClicked(key) {
        switch (this.gameData.currentStage) {
            case _GameStages__WEBPACK_IMPORTED_MODULE_5__["GameStages"].GUESS_STAGE:
                this.gameData.addGuess(key);
                this.updateCardsWithGuess();
                this.invalidGuessKeyHandler();
                break;
            case _GameStages__WEBPACK_IMPORTED_MODULE_5__["GameStages"].GOT_STAGE:
                this.gameData.addGot(key);
                this.updateCardsWithGot();
                break;
        }
    }
    invalidGuessKeyHandler() {
        if (this.gameData.isOnLastStepOfStage()) {
            this.invalidGuessKey = this.gameData.getNotViableGuess();
        }
        else {
            this.invalidGuessKey = undefined;
        }
        console.log('last step? ', this.gameData.isOnLastStepOfStage());
    }
    isRoundValid() {
        return this.gameData.checkRoundValidity();
    }
    previousStage() {
        if (this.gameData.currentStage !== 0) {
            this.gameData.setToLastPlayer();
            this.gameData.currentStage--;
        }
    }
    nextStage() {
        if (this.gameData.currentStage !== _GameStages__WEBPACK_IMPORTED_MODULE_5__["GameStages"].FINAL_STAGE) {
            this.gameData.currentStage++;
        }
    }
    getRoundNumber2() {
        return this.gameData.roundOf === 1 || this.gameData.roundOf === 8 ? this.gameData.completedRoundsInRoundOf + 1 : undefined;
    }
};
GameComponent.ctorParameters = () => [
    { type: _game_data_service__WEBPACK_IMPORTED_MODULE_4__["GameDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_guesses_guesses_component__WEBPACK_IMPORTED_MODULE_2__["GuessesComponent"], { static: false })
], GameComponent.prototype, "guessComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_action_action_component__WEBPACK_IMPORTED_MODULE_3__["ActionComponent"], { static: false })
], GameComponent.prototype, "actionComponent", void 0);
GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")).default]
    })
], GameComponent);



/***/ }),

/***/ "./src/app/game/guesses/guesses.component.css":
/*!****************************************************!*\
  !*** ./src/app/game/guesses/guesses.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  font-size: 1.3em;\n}\nhr {\n  margin-top: .5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9ndWVzc2VzL2d1ZXNzZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9ndWVzc2VzL2d1ZXNzZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG5ociB7XG4gIG1hcmdpbi10b3A6IC41cmVtO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/game/guesses/guesses.component.ts":
/*!***************************************************!*\
  !*** ./src/app/game/guesses/guesses.component.ts ***!
  \***************************************************/
/*! exports provided: GuessesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuessesComponent", function() { return GuessesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_game_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/game-data.service */ "./src/app/game-data.service.ts");
/* harmony import */ var src_app_GameStages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/GameStages */ "./src/app/GameStages.ts");




let GuessesComponent = class GuessesComponent {
    constructor(gameData) {
        this.gameData = gameData;
        this.roundInformation = [];
    }
    ngOnInit() {
    }
    getTitle() {
        switch (this.gameData.getNewestStage()) {
            case src_app_GameStages__WEBPACK_IMPORTED_MODULE_3__["GameStages"].GUESS_STAGE:
                return 'PREDICTIONS';
            case src_app_GameStages__WEBPACK_IMPORTED_MODULE_3__["GameStages"].GOT_STAGE:
                return 'ROUND SCORES';
        }
    }
    updatePredictions() {
        this.roundInformation = [];
        for (const playerName of this.gameData.roundPredictions.keys()) {
            this.roundInformation.push({
                name: playerName,
                info: this.gameData.roundPredictions.get(playerName).toString()
            });
        }
    }
    updateScores() {
        this.roundInformation = [];
        for (const playerName of this.gameData.roundGots.keys()) {
            let points = this.gameData.roundPoints.get(playerName).toString();
            points = +points >= 0 ? '+' + points : points;
            const info = this.gameData.roundPredictions.get(playerName).toString() + ' | '
                + this.gameData.roundGots.get(playerName).toString() + ' | '
                + this.gameData.players.get(playerName).totalScore.toString()
                + ' (' + points + ')';
            this.roundInformation.push({
                name: playerName,
                info
            });
        }
    }
};
GuessesComponent.ctorParameters = () => [
    { type: src_app_game_data_service__WEBPACK_IMPORTED_MODULE_2__["GameDataService"] }
];
GuessesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guesses',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./guesses.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/guesses/guesses.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./guesses.component.css */ "./src/app/game/guesses/guesses.component.css")).default]
    })
], GuessesComponent);



/***/ }),

/***/ "./src/app/game/key-grid/key-grid.component.css":
/*!******************************************************!*\
  !*** ./src/app/game/key-grid/key-grid.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid {\n  position: absolute;\n  bottom: 1vh;\n  left: 19vw;\n  right: 19vw;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.key-button {\n  font-size: 2em;\n  min-width: 20vw !important;\n  min-height: 10vh !important;\n}\n\n.col {\n  padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9rZXktZ3JpZC9rZXktZ3JpZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2dhbWUva2V5LWdyaWQva2V5LWdyaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDF2aDtcbiAgbGVmdDogMTl2dztcbiAgcmlnaHQ6IDE5dnc7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5rZXktYnV0dG9uIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1pbi13aWR0aDogMjB2dyAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAxMHZoICFpbXBvcnRhbnQ7XG59XG4uY29sIHtcbiAgcGFkZGluZzogMDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/game/key-grid/key-grid.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/game/key-grid/key-grid.component.ts ***!
  \*****************************************************/
/*! exports provided: KeyGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyGridComponent", function() { return KeyGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_game_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/game-data.service */ "./src/app/game-data.service.ts");



let KeyGridComponent = class KeyGridComponent {
    constructor(gameData) {
        this.gameData = gameData;
        this.buttons = new Array(3);
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
};
KeyGridComponent.ctorParameters = () => [
    { type: src_app_game_data_service__WEBPACK_IMPORTED_MODULE_2__["GameDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], KeyGridComponent.prototype, "disabledGuess", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], KeyGridComponent.prototype, "clicked", void 0);
KeyGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-key-grid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./key-grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/key-grid/key-grid.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./key-grid.component.css */ "./src/app/game/key-grid/key-grid.component.css")).default]
    })
], KeyGridComponent);



/***/ }),

/***/ "./src/app/game/leaderboard/leaderboard.component.css":
/*!************************************************************!*\
  !*** ./src/app/game/leaderboard/leaderboard.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-center {\n  text-align: center;\n}\n.title {\n  font-size: 1.3em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9sZWFkZXJib2FyZC9sZWFkZXJib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGl0bGUge1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/game/leaderboard/leaderboard.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/game/leaderboard/leaderboard.component.ts ***!
  \***********************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_game_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/game-data.service */ "./src/app/game-data.service.ts");
/* harmony import */ var src_app_GameStages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/GameStages */ "./src/app/GameStages.ts");




let LeaderboardComponent = class LeaderboardComponent {
    constructor(gameData) {
        this.gameData = gameData;
        this.title = 'LEADERBOARD';
        this.GameStages = src_app_GameStages__WEBPACK_IMPORTED_MODULE_3__["GameStages"];
    }
    ngOnInit() {
        const leaderboard = this.gameData.getLeaderboard();
        this.subLeaderboard = leaderboard.slice(1);
        this.leader = leaderboard[0];
    }
};
LeaderboardComponent.ctorParameters = () => [
    { type: src_app_game_data_service__WEBPACK_IMPORTED_MODULE_2__["GameDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LeaderboardComponent.prototype, "title", void 0);
LeaderboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-leaderboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leaderboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/leaderboard/leaderboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leaderboard.component.css */ "./src/app/game/leaderboard/leaderboard.component.css")).default]
    })
], LeaderboardComponent);



/***/ }),

/***/ "./src/app/game/navbar/navbar.component.css":
/*!**************************************************!*\
  !*** ./src/app/game/navbar/navbar.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-container {\n  display: -webkit-box;\n  display: flex;\n}\n.round {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: center;\n  font-family: bebas;\n  font-size: 40px;\n  padding-top: 4px;\n}\n.navigation {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.rightside {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7QUFDZjtBQUNBO0VBQ0UsbUJBQU87VUFBUCxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBTztVQUFQLE9BQU87QUFDVDtBQUNBO0VBQ0UsbUJBQU87VUFBUCxPQUFPO0FBQ1QiLCJmaWxlIjoic3JjL2FwcC9nYW1lL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5yb3VuZCB7XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IGJlYmFzO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG4ubmF2aWdhdGlvbiB7XG4gIGZsZXg6IDE7XG59XG4ucmlnaHRzaWRlIHtcbiAgZmxleDogMTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/game/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/game/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    getTitle() {
        if (this.title === undefined) {
            let title = 'Round of ' + this.roundNumber;
            if (this.roundNumber2 !== undefined) {
                title += '(' + this.roundNumber2 + ')';
            }
            return title;
        }
        else {
            return this.title;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavbarComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavbarComponent.prototype, "roundNumber", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavbarComponent.prototype, "roundNumber2", void 0);
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/game/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/game/round-card/round-card.component.css":
/*!**********************************************************!*\
  !*** ./src/app/game/round-card/round-card.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n  table-layout: fixed;\n\n}\nmat-card {\n  margin-top: 10px;\n}\n.name {\n  font-size: 1.3em;\n}\n.mat-column-predicted {\n  text-align: center;\n  border-right-width: 1px;\n  border-right-style: solid;\n  border-right-color: rgba(0,0,0,0.12);\n  padding-left: 0!important;\n}\n.mat-column-got {\n  text-align: center;\n  border-right-width: 1px;\n  border-right-style: solid;\n  border-right-color: rgba(0,0,0,0.12);\n}\n.mat-column-score {\n  text-align: center;\n  border-right-width: 1px;\n  border-right-style: solid;\n  border-right-color: rgba(0,0,0,0.12);\n}\n.mat-column-correctCount {\n  text-align: center;\n  padding-right: 0!important;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9yb3VuZC1jYXJkL3JvdW5kLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7O0FBRXJCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9nYW1lL3JvdW5kLWNhcmQvcm91bmQtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcblxufVxubWF0LWNhcmQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm5hbWUge1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuLm1hdC1jb2x1bW4tcHJlZGljdGVkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLDAuMTIpO1xuICBwYWRkaW5nLWxlZnQ6IDAhaW1wb3J0YW50O1xufVxuLm1hdC1jb2x1bW4tZ290IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLDAuMTIpO1xufVxuLm1hdC1jb2x1bW4tc2NvcmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmlnaHQtY29sb3I6IHJnYmEoMCwwLDAsMC4xMik7XG59XG4ubWF0LWNvbHVtbi1jb3JyZWN0Q291bnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDAhaW1wb3J0YW50O1xufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/game/round-card/round-card.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/game/round-card/round-card.component.ts ***!
  \*********************************************************/
/*! exports provided: RoundCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundCardComponent", function() { return RoundCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");



let RoundCardComponent = class RoundCardComponent {
    constructor() {
        this.tableData = [
            { predicted: '', got: '', score: '', diff: '', correctCount: '', name: '' }
        ];
        this.columns = ['predicted', 'got', 'score', 'correctCount'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
    }
    ngOnInit() {
        this.tableData[0].predicted = this.predicted;
        this.tableData[0].score = this.score;
        this.tableData[0].correctCount = this.correctCount;
        this.tableData[0].got = this.got;
        this.tableData[0].diff = +this.diff >= 0 ? '+' + this.diff : this.diff;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RoundCardComponent.prototype, "playerName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RoundCardComponent.prototype, "predicted", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RoundCardComponent.prototype, "score", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RoundCardComponent.prototype, "diff", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RoundCardComponent.prototype, "got", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RoundCardComponent.prototype, "correctCount", void 0);
RoundCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-round-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./round-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/round-card/round-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./round-card.component.css */ "./src/app/game/round-card/round-card.component.css")).default]
    })
], RoundCardComponent);



/***/ }),

/***/ "./src/app/game/round-end/round-end.component.css":
/*!********************************************************!*\
  !*** ./src/app/game/round-end/round-end.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-center {\n  text-align: center;\n}\n.title {\n  font-size: 1.3em;\n}\n.error-card {\n  background-color: #f44336;\n  text-align: center;\n}\nmat-card {\n  margin-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9yb3VuZC1lbmQvcm91bmQtZW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9yb3VuZC1lbmQvcm91bmQtZW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGl0bGUge1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuLmVycm9yLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/game/round-end/round-end.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/game/round-end/round-end.component.ts ***!
  \*******************************************************/
/*! exports provided: RoundEndComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundEndComponent", function() { return RoundEndComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_game_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/game-data.service */ "./src/app/game-data.service.ts");



let RoundEndComponent = class RoundEndComponent {
    constructor(gameData) {
        this.gameData = gameData;
        this.roundResults = [];
        this.invalid = false;
    }
    ngOnInit() {
        for (const name of this.gameData.playerNames) {
            this.roundResults.push({
                name,
                predicted: this.gameData.roundPredictions.get(name).toString(),
                got: this.gameData.roundGots.get(name).toString(),
                score: this.gameData.players.get(name).totalScore.toString(),
                correctCount: this.gameData.players.get(name).correctCount.toString(),
                diff: this.gameData.roundPoints.get(name).toString()
            });
        }
        this.invalid = !this.gameData.checkRoundValidity();
    }
};
RoundEndComponent.ctorParameters = () => [
    { type: src_app_game_data_service__WEBPACK_IMPORTED_MODULE_2__["GameDataService"] }
];
RoundEndComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-round-end',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./round-end.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/round-end/round-end.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./round-end.component.css */ "./src/app/game/round-end/round-end.component.css")).default]
    })
], RoundEndComponent);



/***/ }),

/***/ "./src/app/game/score-card/score-card.component.css":
/*!**********************************************************!*\
  !*** ./src/app/game/score-card/score-card.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scorebox {\n  display: -webkit-box;\n  display: flex;\n  text-align: center;\n  margin-top: 20px;\n}\n.rank {\n  -webkit-box-flex: 1;\n          flex: 1;\n  font-size: 2em;\n}\n.name-score {\n  -webkit-box-flex: 2;\n          flex: 2;\n}\n.name {\n  font-size:1.4em;\n}\n.score{\n  font-size: 1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9zY29yZS1jYXJkL3Njb3JlLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFPO1VBQVAsT0FBTztFQUNQLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1CQUFPO1VBQVAsT0FBTztBQUNUO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9zY29yZS1jYXJkL3Njb3JlLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY29yZWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5yYW5rIHtcbiAgZmxleDogMTtcbiAgZm9udC1zaXplOiAyZW07XG59XG4ubmFtZS1zY29yZSB7XG4gIGZsZXg6IDI7XG59XG4ubmFtZSB7XG4gIGZvbnQtc2l6ZToxLjRlbTtcbn1cbi5zY29yZXtcbiAgZm9udC1zaXplOiAxZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/game/score-card/score-card.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/game/score-card/score-card.component.ts ***!
  \*********************************************************/
/*! exports provided: ScoreCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreCardComponent", function() { return ScoreCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScoreCardComponent = class ScoreCardComponent {
    constructor() { }
    getSize() {
        console.log('size', this.rank);
        if (this.rank === 1) {
            return '1.3em';
        }
        else if (this.rank < 3) {
            return '0.9em';
        }
        else {
            return '0.7em';
        }
    }
    ngOnInit() {
        console.log('PRIMARY:', this.primary !== undefined);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScoreCardComponent.prototype, "rank", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScoreCardComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScoreCardComponent.prototype, "score", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScoreCardComponent.prototype, "size", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScoreCardComponent.prototype, "primary", void 0);
ScoreCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-score-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./score-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/score-card/score-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./score-card.component.css */ "./src/app/game/score-card/score-card.component.css")).default]
    })
], ScoreCardComponent);



/***/ }),

/***/ "./src/app/highlight.directive.ts":
/*!****************************************!*\
  !*** ./src/app/highlight.directive.ts ***!
  \****************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HighlightDirective = class HighlightDirective {
    constructor(el) {
        el.nativeElement.style.backgroundColor = '#ffc107';
    }
};
HighlightDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appHighlight]'
    })
], HighlightDirective);



/***/ }),

/***/ "./src/app/landing/LandingEnum.ts":
/*!****************************************!*\
  !*** ./src/app/landing/LandingEnum.ts ***!
  \****************************************/
/*! exports provided: LandingStage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingStage", function() { return LandingStage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var LandingStage;
(function (LandingStage) {
    LandingStage[LandingStage["NAME_STAGE"] = 0] = "NAME_STAGE";
    LandingStage[LandingStage["OPTIONS_STAGE"] = 1] = "OPTIONS_STAGE";
})(LandingStage || (LandingStage = {}));


/***/ }),

/***/ "./src/app/landing/bottom/bottom.component.css":
/*!*****************************************************!*\
  !*** ./src/app/landing/bottom/bottom.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bottom {\n  position: fixed;\n  bottom: 0;\n  background-color: #f5f5f5;\n  width: 100%;\n  box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.02), 0 0px 5.3px rgba(0, 0, 0, 0.028),\n  0 0px 10px rgba(0, 0, 0, 0.035), 0 0px 17.9px rgba(0, 0, 0, 0.042),\n  0 0px 33.4px rgba(0, 0, 0, 0.05), 0 0px 80px rgba(0, 0, 0, 0.07);\n}\n.bot-buttons {\n  padding-top: 4vh;\n  padding-bottom: 4vh;\n}\n.col {\n  padding-left: 0!important;\n  padding-right: 0!important;\n}\n.container {\n  padding-right: 20px;\n  padding-left: 20px;\n}\n.setup-button {\n  width: 10em;\n  height: 3.3em;\n  width: 8em;\n}\n/* For Desktop */\n@media only screen and (min-width: 768px) {\n .bottom {\n  left: var(--side-padding);\n  right: var(--side-padding);\n  width: auto;\n }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9ib3R0b20vYm90dG9tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULHlCQUF5QjtFQUN6QixXQUFXO0VBQ1g7O2tFQUVnRTtBQUNsRTtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixVQUFVO0FBQ1o7QUFDQSxnQkFBZ0I7QUFDaEI7Q0FDQztFQUNDLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsV0FBVztDQUNaO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2JvdHRvbS9ib3R0b20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMiksIDAgMHB4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wMjgpLFxuICAwIDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wMzUpLCAwIDBweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA0MiksXG4gIDAgMHB4IDMzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4wNyk7XG59XG4uYm90LWJ1dHRvbnMge1xuICBwYWRkaW5nLXRvcDogNHZoO1xuICBwYWRkaW5nLWJvdHRvbTogNHZoO1xufVxuLmNvbCB7XG4gIHBhZGRpbmctbGVmdDogMCFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5zZXR1cC1idXR0b24ge1xuICB3aWR0aDogMTBlbTtcbiAgaGVpZ2h0OiAzLjNlbTtcbiAgd2lkdGg6IDhlbTtcbn1cbi8qIEZvciBEZXNrdG9wICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gLmJvdHRvbSB7XG4gIGxlZnQ6IHZhcigtLXNpZGUtcGFkZGluZyk7XG4gIHJpZ2h0OiB2YXIoLS1zaWRlLXBhZGRpbmcpO1xuICB3aWR0aDogYXV0bztcbiB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/landing/bottom/bottom.component.ts":
/*!****************************************************!*\
  !*** ./src/app/landing/bottom/bottom.component.ts ***!
  \****************************************************/
/*! exports provided: BottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomComponent", function() { return BottomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _LandingEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LandingEnum */ "./src/app/landing/LandingEnum.ts");



let BottomComponent = class BottomComponent {
    constructor() {
        this.LandingStage = _LandingEnum__WEBPACK_IMPORTED_MODULE_2__["LandingStage"];
        this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.login = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.continue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.startGame = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BottomComponent.prototype, "stage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BottomComponent.prototype, "stageValid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BottomComponent.prototype, "back", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BottomComponent.prototype, "login", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BottomComponent.prototype, "continue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BottomComponent.prototype, "startGame", void 0);
BottomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bottom',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bottom.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/bottom/bottom.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bottom.component.css */ "./src/app/landing/bottom/bottom.component.css")).default]
    })
], BottomComponent);



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  width: 100%;\n  height: 100%;\n  background-color: white;\n}\n.bottom-padding {\n  height: 16vh;\n}\n.top-padding {\n  padding-top: 30vh;\n}\n/* For Desktop */\n@media only screen and (min-width: 768px) {\n  .container {\n    padding-left: var(--side-padding);\n    padding-right: var(--side-padding);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQSxnQkFBZ0I7QUFDaEI7RUFDRTtJQUNFLGlDQUFpQztJQUNqQyxrQ0FBa0M7RUFDcEM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5ib3R0b20tcGFkZGluZyB7XG4gIGhlaWdodDogMTZ2aDtcbn1cbi50b3AtcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiAzMHZoO1xufVxuLyogRm9yIERlc2t0b3AgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlLXBhZGRpbmcpO1xuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXNpZGUtcGFkZGluZyk7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _LandingEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LandingEnum */ "./src/app/landing/LandingEnum.ts");
/* harmony import */ var _names_names_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./names/names.component */ "./src/app/landing/names/names.component.ts");
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options/options.component */ "./src/app/landing/options/options.component.ts");
/* harmony import */ var _game_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../game-data.service */ "./src/app/game-data.service.ts");






let LandingComponent = class LandingComponent {
    constructor(gameData) {
        this.gameData = gameData;
        this.LandingStage = _LandingEnum__WEBPACK_IMPORTED_MODULE_2__["LandingStage"]; // For HTML to recognise the enum
        this.pregameInfo = {
            names: [],
            style: '181',
            bonus: '5',
            penalty: '5'
        };
        this.currentStage = _LandingEnum__WEBPACK_IMPORTED_MODULE_2__["LandingStage"].NAME_STAGE;
        this.isStageValid = false;
    }
    onValidityChange(isValid) {
        this.isStageValid = isValid;
    }
    getTopTitle() {
        if (this.currentStage === _LandingEnum__WEBPACK_IMPORTED_MODULE_2__["LandingStage"].NAME_STAGE) {
            return 'PLAYER NAMES';
        }
        else if (this.currentStage === _LandingEnum__WEBPACK_IMPORTED_MODULE_2__["LandingStage"].OPTIONS_STAGE) {
            return 'EXTRA OPTIONS';
        }
    }
    handleBack() {
        this.currentStage--;
        const options = this.optionsComponent.getOptions();
        this.pregameInfo.bonus = options.bonus;
        this.pregameInfo.style = options.style;
        this.pregameInfo.penalty = options.penalty;
    }
    handleLogin() {
    }
    handleContinue() {
        this.currentStage++;
        this.pregameInfo.names = this.namesComponent.getNamesList();
    }
    handleStart() {
        const options = this.optionsComponent.getOptions();
        this.gameData.options = {
            bonusAmount: +options.bonus,
            penaltyAmount: +options.penalty,
            playStyle: options.style
        };
        this.gameData.addPlayers(this.pregameInfo.names);
        this.gameData.initGame();
    }
};
LandingComponent.ctorParameters = () => [
    { type: _game_data_service__WEBPACK_IMPORTED_MODULE_5__["GameDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_names_names_component__WEBPACK_IMPORTED_MODULE_3__["NamesComponent"], { static: false })
], LandingComponent.prototype, "namesComponent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_options_options_component__WEBPACK_IMPORTED_MODULE_4__["OptionsComponent"], { static: false })
], LandingComponent.prototype, "optionsComponent", void 0);
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html")).default,
        providers: [],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")).default]
    })
], LandingComponent);



/***/ }),

/***/ "./src/app/landing/names/names.component.css":
/*!***************************************************!*\
  !*** ./src/app/landing/names/names.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".name {\n  font-size: 2em;\n}\n.remover {\n  position: absolute;\n  margin-top: 20px;\n  margin-left: 10px;\n  color: rgba(255, 0, 0, 0.38);\n}\n.remover :hover {\n  cursor: pointer;\n}\n.lastname :hover {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9uYW1lcy9uYW1lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9uYW1lcy9uYW1lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hbWUge1xuICBmb250LXNpemU6IDJlbTtcbn1cbi5yZW1vdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjM4KTtcbn1cbi5yZW1vdmVyIDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sYXN0bmFtZSA6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/landing/names/names.component.ts":
/*!**************************************************!*\
  !*** ./src/app/landing/names/names.component.ts ***!
  \**************************************************/
/*! exports provided: NamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamesComponent", function() { return NamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let NamesComponent = class NamesComponent {
    constructor() {
        this.MINIMUM_PLAYERS = 3;
        this.MAXIMUM_PLAYERS = 6;
        this.full = false;
        this.isValid = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.playerNames = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(this.MAXIMUM_PLAYERS)]);
    }
    ngOnDestroy() {
        this.validSub.unsubscribe();
    }
    ngOnInit() {
        if (this.namesList !== undefined && this.namesList.length !== 0) {
            for (const name of this.namesList) {
                this.addPlayerName(name);
            }
        }
        else {
            for (let i = 0; i < this.MINIMUM_PLAYERS; i++) {
                this.addPlayerName();
            }
        }
        this.validSub = this.playerNames.statusChanges.subscribe((val) => this.isValid.emit(val === 'VALID'));
    }
    addPlayerName(name = '') {
        this.playerNames.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
    }
    isMaxPlayersReached() {
        return this.playerNames.length === this.MAXIMUM_PLAYERS;
    }
    removePlayer(index) {
        this.playerNames.removeAt(index);
    }
    getNamesList() {
        const namesList = [];
        for (const control of this.playerNames.controls) {
            namesList.push(control.value);
        }
        return namesList;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NamesComponent.prototype, "isValid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NamesComponent.prototype, "namesList", void 0);
NamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-names',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./names.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/names/names.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./names.component.css */ "./src/app/landing/names/names.component.css")).default]
    })
], NamesComponent);



/***/ }),

/***/ "./src/app/landing/options/options-option/options-option.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/landing/options/options-option/options-option.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".options-group {\n  font-size: 1.3em;\n  width: 100%;\n}\n.option-buttons {\n  float:right;\n}\nmat-card {\n  margin-top: 15px;\n}\n.option-title {\n  position: absolute;\n  padding-top: 9px;\n}\np {\n  margin-bottom: 0;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9vcHRpb25zL29wdGlvbnMtb3B0aW9uL29wdGlvbnMtb3B0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL29wdGlvbnMvb3B0aW9ucy1vcHRpb24vb3B0aW9ucy1vcHRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcHRpb25zLWdyb3VwIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ub3B0aW9uLWJ1dHRvbnMge1xuICBmbG9hdDpyaWdodDtcbn1cbm1hdC1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5vcHRpb24tdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctdG9wOiA5cHg7XG59XG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/landing/options/options-option/options-option.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/landing/options/options-option/options-option.component.ts ***!
  \****************************************************************************/
/*! exports provided: OptionsOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsOptionComponent", function() { return OptionsOptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OptionsOptionComponent = class OptionsOptionComponent {
    constructor() {
        this.toggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    change(e) {
        this.toggleChange.emit(e);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], OptionsOptionComponent.prototype, "toggleChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OptionsOptionComponent.prototype, "toggles", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OptionsOptionComponent.prototype, "curVal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OptionsOptionComponent.prototype, "name", void 0);
OptionsOptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-options-option',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./options-option.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/options/options-option/options-option.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./options-option.component.css */ "./src/app/landing/options/options-option/options-option.component.css")).default]
    })
], OptionsOptionComponent);



/***/ }),

/***/ "./src/app/landing/options/options.component.css":
/*!*******************************************************!*\
  !*** ./src/app/landing/options/options.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/landing/options/options.component.ts":
/*!******************************************************!*\
  !*** ./src/app/landing/options/options.component.ts ***!
  \******************************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OptionsComponent = class OptionsComponent {
    constructor() {
        this.bonusOptions = ['5', '10'];
        this.penaltyOptions = ['0', '5', '10'];
        this.styleOptions = ['181', '818'];
    }
    getOptions() {
        return { style: this.style, bonus: this.bonus, penalty: this.penalty };
    }
    bonusChange(e) {
        this.bonus = e.value;
    }
    styleChange(e) {
        this.style = e.value;
    }
    penaltyChange(e) {
        this.penalty = e.value;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OptionsComponent.prototype, "style", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OptionsComponent.prototype, "bonus", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OptionsComponent.prototype, "penalty", void 0);
OptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-options',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./options.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/options/options.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./options.component.css */ "./src/app/landing/options/options.component.css")).default]
    })
], OptionsComponent);



/***/ }),

/***/ "./src/app/landing/top/top.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/top/top.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  font-size: 4em;\n  color: #2a2b2a;\n}\n.title-bg {\n  background-color: #ffc107;\n  box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.02), 0 0px 5.3px rgba(0, 0, 0, 0.028),\n    0 0px 10px rgba(0, 0, 0, 0.035), 0 0px 17.9px rgba(0, 0, 0, 0.042),\n    0 0px 33.4px rgba(0, 0, 0, 0.05), 0 0px 80px rgba(0, 0, 0, 0.07);\n\n  width: 100%;\n}\n.center {\n  text-align: center;\n}\n.pad {\n  padding-top: 7vh;\n  padding-bottom: 7vh;\n}\n.top-container {\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  right: 0;\n}\n/* For Desktop */\n@media only screen and (min-width: 768px) {\n  .top-container {\n    position: fixed;\n    z-index: 1;\n    left: var(--side-padding);\n    right: var(--side-padding);\n  }\n  .pad {\n    padding-top: 9vh;\n    padding-bottom: 9vh;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy90b3AvdG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCOztvRUFFa0U7O0VBRWxFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLE9BQU87RUFDUCxRQUFRO0FBQ1Y7QUFDQSxnQkFBZ0I7QUFDaEI7RUFDRTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy90b3AvdG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICBmb250LXNpemU6IDRlbTtcbiAgY29sb3I6ICMyYTJiMmE7XG59XG4udGl0bGUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xuICBib3gtc2hhZG93OiAwIDBweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDIpLCAwIDBweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDI4KSxcbiAgICAwIDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wMzUpLCAwIDBweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA0MiksXG4gICAgMCAwcHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcblxuICB3aWR0aDogMTAwJTtcbn1cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGFkIHtcbiAgcGFkZGluZy10b3A6IDd2aDtcbiAgcGFkZGluZy1ib3R0b206IDd2aDtcbn1cblxuLnRvcC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLyogRm9yIERlc2t0b3AgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnRvcC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGxlZnQ6IHZhcigtLXNpZGUtcGFkZGluZyk7XG4gICAgcmlnaHQ6IHZhcigtLXNpZGUtcGFkZGluZyk7XG4gIH1cbiAgLnBhZCB7XG4gICAgcGFkZGluZy10b3A6IDl2aDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOXZoO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/landing/top/top.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/top/top.component.ts ***!
  \**********************************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopComponent = class TopComponent {
    constructor() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TopComponent.prototype, "text", void 0);
TopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/top/top.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top.component.css */ "./src/app/landing/top/top.component.css")).default]
    })
], TopComponent);



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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pauliuskuzmickas/programming/whist-assist-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map