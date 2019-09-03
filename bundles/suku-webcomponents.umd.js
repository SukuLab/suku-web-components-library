(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/elements'), require('@angular/common'), require('ngx-countdown-timer'), require('@angular/material/dialog'), require('d3'), require('ngx-quill'), require('moment'), require('ng-pick-datetime'), require('@angular/forms'), require('@angular/material'), require('rxjs'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('suku-webcomponents', ['exports', '@angular/elements', '@angular/common', 'ngx-countdown-timer', '@angular/material/dialog', 'd3', 'ngx-quill', 'moment', 'ng-pick-datetime', '@angular/forms', '@angular/material', 'rxjs', '@angular/core'], factory) :
    (factory((global['suku-webcomponents'] = {}),global.ng.elements,global.ng.common,global.ngxCountdownTimer,global.ng.material.dialog,global.d3,global.ngxQuill,global._moment,global.ngPickDatetime,global.ng.forms,global.ng.material,global.rxjs,global.ng.core));
}(this, (function (exports,elements,common,ngxCountdownTimer,i1,d3,ngxQuill,_moment,ngPickDatetime,forms,material,rxjs,i0) { 'use strict';

    var _moment__default = 'default' in _moment ? _moment['default'] : _moment;

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
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuFormFooterComponent = /** @class */ (function () {
        function SukuFormFooterComponent() {
            this.btnOneLabel = 'cancel';
            this.btnOneId = 'primary';
            this.btnOneSize = '';
            this.btnOneColor = '';
            this.btnOneWeight = '400';
            this.btnOneCustomClass = '';
            this.btnOneVisible = 'true';
            this.btnOneAction = new i0.EventEmitter();
            this.btnTwoLabel = 'save as draft';
            this.btnTwoId = 'primary';
            this.btnTwoSize = '';
            this.btnTwoColor = '';
            this.btnTwoWeight = '400';
            this.btnTwoVisible = 'true';
            this.btnTwoCustomClass = '';
            this.btnTwoAction = new i0.EventEmitter();
            this.btnThreeLabel = 'back';
            this.btnThreeId = 'primary';
            this.btnThreeSize = '';
            this.btnThreeColor = '';
            this.btnThreeWeight = '600';
            this.btnThreeVisible = 'true';
            this.btnThreeCustomClass = '';
            this.btnThreeAction = new i0.EventEmitter();
            this.btnFourLabel = 'back';
            this.btnFourId = 'primary';
            this.btnFourSize = '';
            this.btnFourColor = '';
            this.btnFourWeight = '600';
            this.btnFourVisible = 'true';
            this.btnFourCustomClass = '';
            this.btnFourAction = new i0.EventEmitter();
            this.btnThreeType = 'primary';
            this.btnFourType = 'primary';
        }
        /**
         * @return {?}
         */
        SukuFormFooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuFormFooterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-form-footer',
                        template: " <div class=\"form-footer col-xl-12 col-lg-12 col-md-12\">\n   <div class=\"row\">\n     <div class=\"col-lg-6 col-md-12 align-items-center d-flex pl-lg-4 pr-lg-0\">\n       <div class=\"col-xl-12 col-md-12 col-lg-12\">\n         <div class=\"row\">\n           <div class=\"text-xs-center align-items-center d-flex w-xs-100 p-xs-2\" *ngIf=\"btnOneVisible\">\n             <span class=\"pl-lg-3 default-btn c-pointer text-xs-center {{btnOneCustomClass}}\" [id]=\"btnOneId\"\n               [style.font-size.rem]=\"btnOneSize\" [style.color]=\"btnOneColor\" [style.font-weight]=\"btnOneWeight\"\n               (click)=\"btnOneAction.emit()\">\n               {{btnOneLabel}}\n             </span>\n           </div>\n           <div class=\"pl-lg-4 text-xs-center align-items-center d-flex w-xs-100 p-xs-2\" *ngIf=\"btnTwoVisible\">\n             <span class=\"default-btn c-pointer text-xs-center {{btnTwoCustomClass}}\" [id]=\"btnTwoId\"\n               [style.font-size.rem]=\"btnTwoSize\" [style.color]=\"btnTwoColor\" [style.font-weight]=\"btnTwoWeight\"\n               (click)=\"btnTwoAction.emit()\">\n               {{btnTwoLabel}}\n             </span>\n           </div>\n         </div>\n       </div>\n     </div>\n     <div class=\"text-center col-md-12 col-lg-6 col-sm-12 content-end d-flex pl-5 pr-5\">\n       <div class=\"row\">\n         <div class=\"pt-4 pb-4 pl-lg-4 pr-lg-3 d-flex justify-content-end w-xs-100\" *ngIf=\"btnThreeVisible\">\n           <button type=\"button\" class=\"suku-p suku-{{btnThreeType}} {{btnThreeCustomClass}} w-xs-100\"\n             [ngClass]=\"{'disabled' : btnThreeDisableValue}\" [style.font-size.rem]=\"btnThreeSize\"\n             [style.color]=\"btnThreeColor\" [style.font-weight]=\"btnThreeWeight\" [disabled]=\"btnThreeDisableValue\"\n             [id]=\"btnThreeId\" (click)=\"btnThreeAction.emit()\">\n             {{btnThreeLabel}}\n           </button>\n         </div>\n         <div class=\"pt-4 pb-4 pl-lg-4 pr-lg-3 w-xs-100\" *ngIf=\"btnFourVisible\">\n           <button type=\"button\" class=\"suku-p suku-{{btnFourType}} {{btnFourCustomClass}} w-xs-100\"\n             [ngClass]=\"{'disabled' : btnFourDisableValue}\" [style.font-size.rem]=\"btnFourSize\"\n             [style.color]=\"btnFourColor\" [style.font-weight]=\"btnFourWeight\" [disabled]=\"btnFourDisableValue\"\n             [id]=\"btnFourId\" (click)=\"btnFourAction.emit()\">\n             {{btnFourLabel}}\n           </button>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.form-footer{background-color:var(--suku-bg-secondary)}.suku-p{border:2px solid var(--suku-primary-color);background-color:var(--suku-bg-secondary);color:var(--suku-text-label-two);font-family:var(--suku-secondary-font);font-weight:600;font-size:var(--suku-font-size-3);padding:12px 30px;border-radius:12px 28px 23px 30px;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.25px;text-align:center}.suku-p:focus{outline:0!important;box-shadow:none!important}.suku-primary:hover{cursor:pointer!important;background-color:var(--suku-primary-color)!important;color:var(--suku-text-label-two)}.suku-primary:focus{color:var(--suku-text-label-two);background-color:var(--suku-primary-color);outline:0!important;box-shadow:none!important}.suku-p.disabled:hover{border:2px solid var(--suku-primary-color);background-color:var(--suku-bg-secondary);color:var(--suku-text-heading);cursor:not-allowed;opacity:.65}.suku-primary.disabled{background-color:var(--suku-bg-secondary);opacity:.65;color:grey}.suku-primary.disabled.focus,.suku-primary.disabled:focus,.suku-primary.disabled:hover,.suku-primary[disabled].focus,.suku-primary[disabled]:focus,.suku-primary[disabled]:hover,fieldset[disabled] .suku-primary.focus,fieldset[disabled] .suku-primary:focus,fieldset[disabled] .suku-primary:hover{background-color:var(--suku-bg-secondary)!important;color:grey;opacity:.65}.suku-primary.focus,.suku-primary:focus{background-color:var(--suku-primary-color);color:var(--suku-text-label-two)}.open>.dropdown-toggle .suku-primary.focus,.open>.dropdown-toggle .suku-primary:focus,.open>.dropdown-toggle.suku-primary:hover,.suku-primary.active.focus,.suku-primary.active:focus,.suku-primary.active:hover,.suku-primary:active.focus,.suku-primary:active:focus,.suku-primary:active:hover{background-color:var(--suku-primary-color);color:var(--suku-text-label-two)}.show>.suku-primary.dropdown-toggle,.suku-primary:not(:disabled):not(.disabled).active,.suku-primary:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}.suku-default{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-bg-secondary);color:var(--suku-text-label-one)}.suku-default:hover{cursor:pointer!important;border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:var(--suku-text-label-two)}.suku-default:active{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:var(--suku-text-label-two)}.suku-default .disabled{background-color:var(--suku-text-info);border-color:var(--suku-text-info);opacity:.65}.suku-default.disabled:hover{border:2px solid var(--suku-primary-color);background-color:var(--suku-bg-secondary);color:var(--suku-text-heading);opacity:.65}.suku-default.disabled{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-link);color:grey;opacity:.65}.suku-default.disabled.focus,.suku-default.disabled:focus,.suku-default.disabled:hover,.suku-default[disabled].focus,.suku-default[disabled]:focus,.suku-default[disabled]:hover,fieldset[disabled] .suku-default.focus,fieldset[disabled] .suku-default:focus,fieldset[disabled] .suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-link);color:grey;cursor:not-allowed!important;opacity:.65}.suku-default.focus,.suku-default:focus{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.open>.dropdown-toggle .suku-default.focus,.open>.dropdown-toggle .suku-default:focus,.open>.dropdown-toggle.suku-default:hover,.suku-default.active.focus,.suku-default.active:focus,.suku-default.active:hover,.suku-default:active.focus,.suku-default:active:focus,.suku-default:active:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.show>.suku-default.dropdown-toggle,.suku-default:not(:disabled):not(.disabled).active,.suku-default:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-text-info);border-color:var(--suku-text-info)}.show>.suku-default.dropdown-toggle:focus,.suku-default.focus,.suku-default:focus,.suku-default:not(:disabled):not(.disabled).active:focus,.suku-default:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}.default-btn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;word-break:break-word;color:var(--suku-text-label-two)}.c-pointer:hover{cursor:pointer;text-decoration:underline!important}@media (min-width:425px){.content-end{justify-content:flex-end!important}}@media (max-width:768px){.text-xs-center{text-align:center;justify-content:center!important}.content-end{justify-content:center!important}.w-xs-100{width:100%!important}.p-xs-2{padding:.5rem}}"]
                    }] }
        ];
        /** @nocollapse */
        SukuFormFooterComponent.ctorParameters = function () { return []; };
        SukuFormFooterComponent.propDecorators = {
            btnOneLabel: [{ type: i0.Input, args: ['btn-one-label',] }],
            btnOneId: [{ type: i0.Input, args: ['btn-one-id',] }],
            btnOneSize: [{ type: i0.Input, args: ['btn-one-size',] }],
            btnOneColor: [{ type: i0.Input, args: ['btn-one-color',] }],
            btnOneWeight: [{ type: i0.Input, args: ['btn-one-weight',] }],
            btnOneCustomClass: [{ type: i0.Input, args: ['btn-one-custom-class',] }],
            btnOneVisible: [{ type: i0.Input, args: ['btn-one-visible',] }],
            btnOneAction: [{ type: i0.Output }],
            btnTwoLabel: [{ type: i0.Input, args: ['btn-two-label',] }],
            btnTwoId: [{ type: i0.Input, args: ['btn-two-id',] }],
            btnTwoSize: [{ type: i0.Input, args: ['btn-two-size',] }],
            btnTwoColor: [{ type: i0.Input, args: ['btn-two-color',] }],
            btnTwoWeight: [{ type: i0.Input, args: ['btn-two-weight',] }],
            btnTwoVisible: [{ type: i0.Input, args: ['btn-two-visible',] }],
            btnTwoCustomClass: [{ type: i0.Input, args: ['btn-Two-custom-class',] }],
            btnTwoAction: [{ type: i0.Output }],
            btnThreeLabel: [{ type: i0.Input, args: ['btn-three-label',] }],
            btnThreeId: [{ type: i0.Input, args: ['btn-three-id',] }],
            btnThreeSize: [{ type: i0.Input, args: ['btn-three-size',] }],
            btnThreeColor: [{ type: i0.Input, args: ['btn-three-color',] }],
            btnThreeWeight: [{ type: i0.Input, args: ['btn-three-weight',] }],
            btnThreeVisible: [{ type: i0.Input, args: ['btn-three-visible',] }],
            btnThreeCustomClass: [{ type: i0.Input, args: ['btn-three-custom-class',] }],
            btnThreeDisableValue: [{ type: i0.Input, args: ['btn-three-disable-value',] }],
            btnThreeAction: [{ type: i0.Output }],
            btnFourLabel: [{ type: i0.Input, args: ['btn-four-label',] }],
            btnFourId: [{ type: i0.Input, args: ['btn-four-id',] }],
            btnFourSize: [{ type: i0.Input, args: ['btn-four-size',] }],
            btnFourColor: [{ type: i0.Input, args: ['btn-four-color',] }],
            btnFourWeight: [{ type: i0.Input, args: ['btn-four-weight',] }],
            btnFourVisible: [{ type: i0.Input, args: ['btn-four-visible',] }],
            btnFourCustomClass: [{ type: i0.Input, args: ['btn-four-custom-class',] }],
            btnFourDisableValue: [{ type: i0.Input, args: ['btn-four-disable-value',] }],
            btnFourAction: [{ type: i0.Output }],
            btnThreeType: [{ type: i0.Input, args: ['btn-three-type',] }],
            btnFourType: [{ type: i0.Input, args: ['btn-four-type',] }]
        };
        return SukuFormFooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuFormFooterModule = /** @class */ (function () {
        function SukuFormFooterModule(injector) {
            this.injector = injector;
        }
        /**
         * @return {?}
         */
        SukuFormFooterModule.prototype.ngDoBootstrap = /**
         * @return {?}
         */
            function () {
                var e_1, _a;
                /** @type {?} */
                var elements$$1 = [
                    [SukuFormFooterComponent, 'suku-form-footer']
                ];
                try {
                    for (var elements_1 = __values(elements$$1), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                        var _b = __read(elements_1_1.value, 2), component = _b[0], name_1 = _b[1];
                        /** @type {?} */
                        var el = elements.createCustomElement(component, { injector: this.injector });
                        customElements.define(name_1, el);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return))
                            _a.call(elements_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        SukuFormFooterModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            SukuFormFooterComponent
                        ],
                        entryComponents: [
                            SukuFormFooterComponent
                        ],
                        exports: [
                            SukuFormFooterComponent
                        ]
                    },] }
        ];
        /** @nocollapse */
        SukuFormFooterModule.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        return SukuFormFooterModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuACHSettingsComponent = /** @class */ (function () {
        function SukuACHSettingsComponent() {
            this.title = 'Payment Portal';
            this.titleId = 'paymentPortal';
            this.titleCustomClass = '';
            this.subTitle = 'ACH Settings';
            this.subTitleId = 'ACHSettings';
            this.subTitleCustomClass = '';
            this.labelOne = 'Payment profile status:';
            this.labelOneCustomClass = '';
            this.labelOneId = '';
            this.labelTwo = 'Beneficial Owner';
            this.labelTwoCustomClass = '';
            this.labelTwoId = 'Beneficial Owner';
            this.labelThree = 'Status:';
            this.labelThreeCustomClass = '';
            this.labelThreeId = 'Beneficial Owner';
            this.labelFour = ' Documentation Upload Needed';
            this.labelFourCustomClass = '';
            this.labelFourCustomClassId = 'Documentation Upload';
            this.labelFive = 'Note: Document verification may take 2-3 business days to get verified.';
            this.labelFiveCustomClass = '';
            this.labelFiveId = '';
            this.labelSix = 'Please setup your ACH payment profile below';
            this.labelSixCustomClass = '';
            this.labelSixId = '';
            this.labelSeven = 'Document Status:';
            this.labelSevenCustomClass = '';
            this.labelSevenId = '';
            this.labelEight = 'Upload Document';
            this.labelEightCustomClass = '';
            this.labelEightId = 'upload';
            this.labelNine = 'Beneficial Owners:';
            this.labelNineCustomClass = '';
            this.labelNineId = 'upload';
            this.subContentCustomClass = '';
            this.subContentId = 'unverified';
            this.subContent = 'unverified';
            this.buttonLabel = 'Setup ACH Payments';
            this.buttonLabelId = 'setupACHPayments';
            this.paymentButtonId = 'SetupACHPayments';
            this.subtitleId = 'subtitleId';
            this.action = new i0.EventEmitter();
            this.upload = new i0.EventEmitter();
            this.selected = [];
            this.toggle = [];
        }
        Object.defineProperty(SukuACHSettingsComponent.prototype, "beneficialOwnerStatus", {
            get: /**
             * @return {?}
             */ function () {
                return this._beneficialOwnerStatus;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._beneficialOwnerStatus = val;
                if (val) {
                    this.labelSix = 'Please upload beneficial owner documents below';
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuACHSettingsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.documentStatus) {
                    for (var j = 0; j < this.documentStatus.length; j++) {
                        this.toggle[j] = false;
                    }
                    this.toggle[0] = true;
                }
            };
        /**
         * @return {?}
         */
        SukuACHSettingsComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.selected[0] = null;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        SukuACHSettingsComponent.prototype.uploadDoc = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this.upload.emit(val);
            };
        /**
         * @param {?} docType
         * @return {?}
         */
        SukuACHSettingsComponent.prototype.getDocTypeString = /**
         * @param {?} docType
         * @return {?}
         */
            function (docType) {
                switch (docType) {
                    case 'idcard':
                        return 'Government Issued ID';
                    case 'passport':
                        return 'Passport';
                    case 'license':
                        return "Driver's License";
                    default:
                        return docType;
                }
            };
        /**
         * @param {?} failureType
         * @return {?}
         */
        SukuACHSettingsComponent.prototype.getDocFailureString = /**
         * @param {?} failureType
         * @return {?}
         */
            function (failureType) {
                switch (failureType) {
                    case 'ScanNotReadable':
                        return 'Scan Not Readable';
                    case 'ScanNotUploaded':
                        return 'Scan Not Uploaded';
                    case 'ScanIdTypeNotSupported':
                        return 'ID Type Not Supported';
                    case 'ScanNameMismatch':
                        return 'Name Mismatch';
                    default:
                        return failureType;
                }
            };
        /**
         * @param {?} i
         * @return {?}
         */
        SukuACHSettingsComponent.prototype.active = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                this.selected[i] = i;
                this.toggle[i] = !this.toggle[i];
                if (this.documentStatus) {
                    for (var j = 0; j < this.documentStatus.length; j++) {
                        if (i != j) {
                            this.selected[j] = null;
                        }
                    }
                }
                if (!this.toggle[i]) {
                    this.selected[i] = null;
                }
                else {
                    if (this.documentStatus) {
                        for (var j = 0; j < this.documentStatus.length; j++) {
                            if (i != j) {
                                this.toggle[j] = false;
                            }
                        }
                    }
                }
            };
        SukuACHSettingsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-ach-setting',
                        template: "<div class=\"col poppinsFont p-0\">\n  <div class=\"col-sm-12 text-center\">\n    <span class=\"title {{titleCustomClass}}\" id=\"{{titleId}}\">{{title}}</span>\n  </div>\n  <div class=\"col-sm-12 mt-4\">\n    <div class=\"form-group col-xs-12 col achsetting-box p-3\">\n      <div class=\"col-sm-12 text-center encode-font\">\n        <div class=\"col\">\n          <span class=\"text-center subTitle {{subTitleCustomClass}}\" id=\"{{subtitleId}}\">{{subTitle}}</span>\n          <br>\n          <p class=\"text-center mt-2 mb-2 text-capitalize\">\n            <span [class]=\"labelOneCustomClass\" [id]=\"labelOneId\"></span>{{labelOne}}\n            <span [class]=\"subContentCustomClass\"\n              [ngClass]=\"{'statusVerified': subContent == 'verified', 'status': subContent !== 'verified'}\"\n              [id]=\"subContentId\" class=\"text-bold\">{{subContent}}</span>\n          </p>\n          <p class=\"text-center mt-2 mb-2\" *ngIf=\"_beneficialOwnerStatus\" id=\"beneficial-owner-status\">\n            <span [class]=\"labelTwoCustomClass\" [id]=\"labelTwoId\">{{labelTwo}} </span>\n            <span [class]=\"labelThreeCustomClass\" [id]=\"labelThreeId\">{{labelThree}}</span>\n            <span class=\"statusUnverified {{labelFourCustomClass}}\" id=\"labelFourId\">{{labelFour}}</span>\n          </p>\n          <p class=\"text-center encode-font mb-2 {{labelFiveCustomClass}}\" [id]=\"labelFiveId\"\n            *ngIf=\"subContent == 'document'\">{{labelFive}}</p>\n        </div>\n      </div>\n      <div class=\"col-sm-12 text-center mt-2\">\n        <i> <span class=\"f12 {{labelSixCustomClass}}\" [id]=\"labelSixId\">{{labelSix}} </span>\n        </i>\n      </div>\n      <div class=\"col plc-5 prc-5 pb-2 pt-2\" *ngIf=\"subContent == 'document'\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <p class=\"doclabel mt-4 {{labelSevenCustomClass}}\" *ngIf=\"documentStatus?.length > 0\" [id]=\"labelSevenId\">\n              <b>{{labelSeven}}</b></p>\n          </div>\n          <div class=\"col mt-3 mb-3 text-right pr-sm-4 mr-sm-1\" *ngIf=\"documentStatus?.length > 0\">\n            <span class=\"secondary-btn c-pointer\">\n              <a class=\"secondary-btn c-pointer {{labelEightCustomClass}}\" [id]=\"labelEightId\" (click)=\"action.emit()\">\n                {{labelEight}}\n              </a>\n            </span>\n          </div>\n        </div>\n        <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of documentStatus;let imageIndex = index;\">\n          <div class=\"row p-2\">\n            <div class=\"col\">\n              <p class=\"mb-0 pb-1\" id=\"docLabelOne{{imageIndex}}\">{{doc?.labelOne || 'Doc Type:'}}</p>\n              <p class=\"mb-0\" id=\"docType{{imageIndex}}\"><b>{{doc?.type}}</b></p>\n            </div>\n            <div class=\"col\">\n              <p class=\"mb-0 pb-1\" id=\"docLabelTwo{{imageIndex}}\">{{doc?.labelTwo || 'Status:'}}</p>\n              <p class=\"mb-0\" id=\"docStatus{{imageIndex}}\"><b>{{doc?.status}}</b></p>\n            </div>\n            <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\n            <div class=\"col\" *ngIf=\"doc?.failureReason\">\n              <p class=\"mb-0 pb-1\" id=\"docLabelThree{{imageIndex}}\">{{doc?.labelThree || 'Failure Reason:'}}</p>\n              <p class=\"mb-0\" id=\"doFailureReasons{{imageIndex}}\"><b>{{doc?.failureReason}}</b></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col pb-4\" id=\"beneficialOwnerBlock\">\n        <div class=\"col pl-4 pr-4\">\n          <p class=\"doclabel mt-4 {{labelNineCustomClass}}\" *ngIf=\"_beneficialOwnerStatus\" [id]=\"labelNineId\">\n            <b>{{labelNine}}</b></p>\n        </div>\n        <div class=\"col pl-sm-4 mb-3\" *ngFor=\"let user of _beneficialOwnerStatus;let i = index;\">\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\n            (click)=\"active(i)\">\n            <div class=\"row\">\n              <label class=\"m-2 pl-3 owner c-pointer\">\n                Beneficial Owner {{i+1}}\n              </label>\n              <label class=\"d-flex justify-content-end col p-0 c-pointer\">\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\n                </span>\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\n                </span>\n              </label>\n            </div>\n          </div>\n\n          <div class=\"col collapse p-0\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\"\n            id=\"ownerBlock{{i}}\">\n            <div class=\"col\">\n              <div class=\"row p-2\">\n                <div class=\"col-12 col-lg-4\">\n                  <p class=\"mb-0 pb-1\" id=\"userLabelOne{{i}}\">{{ user?.labelOne || \"Beneficial Owner Name:\"}}</p>\n                  <p class=\"mb-0\" id=\"userFirstName{{i}}\"><b>{{user?.firstName}}</b></p>\n                </div>\n                <div class=\"col-12 col-lg-4\">\n                  <p class=\"mb-0 pb-1\" id=\"userLabelTwo{{i}}\">{{ user?.labelTwo || 'Status:'}}</p>\n                  <p class=\"mb-0\" id=\"userVerificationStatus{{i}}\"><b>{{user?.verificationStatus}}</b></p>\n                </div>\n                <div class=\"col-12 col-lg-4\" *ngIf=\"user?.verificationStatus == 'document'\">\n                  <div class=\"col d-flex justify-content-center mt-3 mb-3\">\n                    <button class=\"suku suku-info\" (click)=\"uploadDoc(user)\"\n                      id=\"uploadBeneficialDocument{{i}}\">{{ user?.labelThree || 'Upload Document'}}</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col pl-4 pr-4 pb-2 pt-1\" *ngIf=\"user?.verificationStatus == 'document'\">\n              <p class=\"doclabel mt-4\" *ngIf=\"user?.data?.length > 0 \"><b>Document Status:</b></p>\n              <div class=\"col document pl-sm-4 mb-3\" *ngFor=\"let doc of user?.data;let statusIndex = index;\">\n                <div class=\"row p-2\">\n                  <div class=\"col\">\n                    <p class=\"mb-0 pb-1\" id=\"docBeneficialLabelOne{{statusIndex}}\">{{ doc.labelOne || 'Doc Type:'}}</p>\n                    <p class=\"mb-0\" id=\"docBeneficialDocType{{statusIndex}}\"><b>{{getDocTypeString(doc?.type)}}</b></p>\n                  </div>\n                  <div class=\"col\">\n                    <p class=\"mb-0 pb-1\" id=\"docBeneficialLabelTwo{{statusIndex}}\">{{ doc.labelTwo || 'Status:'}}</p>\n                    <p class=\"mb-0\" id=\"docBeneficialStatus{{statusIndex}}\"><b>{{doc?.status}}</b></p>\n                  </div>\n                  <div class=\"col\" *ngIf=\"!doc?.failureReason\"></div>\n                  <div class=\"col\" *ngIf=\"doc?.failureReason\">\n                    <p class=\"mb-0 pb-1\" id=\"docBeneficialLabelThree{{statusIndex}}\">\n                      {{ doc.labelThree || 'Failure-Reason:'}}</p>\n                    <p class=\"mb-0\" id=\"docBeneficialFailureStatus{{statusIndex}}\">\n                      <b>{{getDocFailureString(doc?.failureReason)}}</b></p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12 mt-2 mb-4 text-center\" *ngIf=\"(subContent == 'not complete' ) || (subContent != 'verified' ) && (documentStatus?.length == 0 &&\n         (subContent == 'document'))\">\n        <button class=\"suku textBold\" id=\"{{buttonLabelId}}\" (click)=\"action.emit()\">{{buttonLabel}}</button>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.redText{color:red;font-size:var(--suku-font-size-2)}.f12{font-size:var(--suku-font-size-2)}.textBold{font-weight:700}.achsetting-box{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.poppinsFont,.title{font-family:var(--suku-primary-font)}.owner{font-family:var(--suku-primary-font);font-size:1rem}@media (max-width:320px){.owner{font-size:.75rem;padding:.3rem 0!important;margin:.45rem!important}}.font20{font-size:25px}.subTitle{font-weight:700!important;font-family:var(--suku-primary-font)}.statusUnverified{color:red;letter-spacing:.3px}.statusVerified{color:#99c002!important;letter-spacing:.3px}.docLabel{font-family:var(--suku-primary-font)!important;letter-spacing:.1px}.document{background-color:#e0e0e059!important;color:rgba(0,0,0,.87)!important;border-radius:0!important;border-left:3px solid!important;border-color:var(--suku-primary-color)!important;min-height:40px!important}#document p{font-size:1.5rem}@media screen and (max-width:575px){#document p{font-size:1.4rem}}.card-line{background-color:#fff;color:#2c2727;height:46px;border-radius:2px;letter-spacing:.5px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2);border-top:3px solid #bfd131c9}.display-2{font-size:6.2rem!important;line-height:1.5!important}.icon{font-size:1.5rem!important;color:#ccda5c!important}.suku{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:var(--suku-primary-font);font-size:1.3rem}.suku-info{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff;color:#00000099}.suku-info:active,.suku-info:hover{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:var(--suku-primary-color);color:#fff}.suku-info.disabled{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff;color:grey}.suku-info.disabled.focus,.suku-info.disabled:focus,.suku-info.disabled:hover,.suku-info[disabled].focus,.suku-info[disabled]:focus,.suku-info[disabled]:hover,fieldset[disabled] .suku-info.focus,fieldset[disabled] .suku-info:focus,fieldset[disabled] .suku-info:hover{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info.focus,.suku-info:focus{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:var(--suku-primary-color);color:#fff;box-shadow:none!important}.open>.dropdown-toggle .suku-info.focus,.open>.dropdown-toggle .suku-info:focus,.open>.dropdown-toggle.suku-info:hover,.suku-info.active.focus,.suku-info.active:focus,.suku-info.active:hover,.suku-info:active.focus,.suku-info:active:focus,.suku-info:active:hover{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:var(--suku-primary-color);color:#fff;box-shadow:none!important}.upload-suku{color:#000;font-weight:900;font-family:var(--suku-primary-font);font-size:1.3rem;border-bottom:3px solid var(--suku-primary-color)}.secondary-btn{font-family:var(--suku-primary-font);font-size:14px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important;border-bottom:3.5px solid var(--suku-primary-color)}.secondary-btn:hover{cursor:pointer!important}.encode-font{font-family:var(--suku-secondary-font)}.plc-5{padding-left:2.35rem!important}.prc-5{padding-right:2rem!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuACHSettingsComponent.ctorParameters = function () { return []; };
        SukuACHSettingsComponent.propDecorators = {
            title: [{ type: i0.Input }],
            titleId: [{ type: i0.Input }],
            titleCustomClass: [{ type: i0.Input }],
            subTitle: [{ type: i0.Input }],
            subTitleId: [{ type: i0.Input }],
            subTitleCustomClass: [{ type: i0.Input }],
            labelOne: [{ type: i0.Input }],
            labelOneCustomClass: [{ type: i0.Input }],
            labelOneId: [{ type: i0.Input }],
            labelTwo: [{ type: i0.Input }],
            labelTwoCustomClass: [{ type: i0.Input }],
            labelTwoId: [{ type: i0.Input }],
            labelThree: [{ type: i0.Input }],
            labelThreeCustomClass: [{ type: i0.Input }],
            labelThreeId: [{ type: i0.Input }],
            labelFour: [{ type: i0.Input }],
            labelFourCustomClass: [{ type: i0.Input }],
            labelFourCustomClassId: [{ type: i0.Input }],
            labelFive: [{ type: i0.Input }],
            labelFiveCustomClass: [{ type: i0.Input }],
            labelFiveId: [{ type: i0.Input }],
            labelSix: [{ type: i0.Input }],
            labelSixCustomClass: [{ type: i0.Input }],
            labelSixId: [{ type: i0.Input }],
            labelSeven: [{ type: i0.Input }],
            labelSevenCustomClass: [{ type: i0.Input }],
            labelSevenId: [{ type: i0.Input }],
            labelEight: [{ type: i0.Input }],
            labelEightCustomClass: [{ type: i0.Input }],
            labelEightId: [{ type: i0.Input }],
            labelNine: [{ type: i0.Input }],
            labelNineCustomClass: [{ type: i0.Input }],
            labelNineId: [{ type: i0.Input }],
            subContentCustomClass: [{ type: i0.Input }],
            subContentId: [{ type: i0.Input }],
            subContent: [{ type: i0.Input }],
            buttonLabel: [{ type: i0.Input }],
            buttonLabelId: [{ type: i0.Input }],
            paymentButtonId: [{ type: i0.Input }],
            subtitleId: [{ type: i0.Input }],
            action: [{ type: i0.Output }],
            upload: [{ type: i0.Output }],
            beneficialOwnerStatus: [{ type: i0.Input }],
            documentStatus: [{ type: i0.Input }]
        };
        return SukuACHSettingsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuAchSettingModule = /** @class */ (function () {
        function SukuAchSettingModule(injector) {
            var e_1, _a;
            this.injector = injector;
            /** @type {?} */
            var elements$$1 = [
                [SukuACHSettingsComponent, 'suku-ach-setting']
            ];
            try {
                for (var elements_1 = __values(elements$$1), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                    var _b = __read(elements_1_1.value, 2), component = _b[0], name_1 = _b[1];
                    /** @type {?} */
                    var el = elements.createCustomElement(component, { injector: this.injector });
                    customElements.define(name_1, el);
                }
            }
            catch (e_1_1) {
                e_1 = { error: e_1_1 };
            }
            finally {
                try {
                    if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return))
                        _a.call(elements_1);
                }
                finally {
                    if (e_1)
                        throw e_1.error;
                }
            }
        }
        /**
         * @return {?}
         */
        SukuAchSettingModule.prototype.ngDoBoostrap = /**
         * @return {?}
         */
            function () { };
        SukuAchSettingModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [SukuACHSettingsComponent],
                        entryComponents: [SukuACHSettingsComponent]
                    },] }
        ];
        /** @nocollapse */
        SukuAchSettingModule.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        return SukuAchSettingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuAddWidgetComponent = /** @class */ (function () {
        function SukuAddWidgetComponent() {
            this.id = 'addWidget';
            this.size = '0.9';
            this.color = '';
            this.weight = '500';
            this.customClass = 'pl-3 mt-auto mb-auto';
            this.icon = 'suku-plus-icon';
            this.iconId = 'plusIcon';
            this.iconCustomClass = 'suku-xs';
            this.widgetCustomClass = 'col';
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuAddWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuAddWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-add-widget',
                        template: "<div [class]=\"widgetCustomClass\"  (click)=\"action.emit()\">\n  <span class=\"row mb-1 mt-1\">\n    <i class=\"{{icon}} icon {{iconCustomClass}}\" [id]=\"iconId\"></i>\n    <h2 [style.font-size.rem]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\"\n      [style.color]=\"color\">\n      <ng-content></ng-content>\n    </h2>\n  </span>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-ternary-font);font-size:var(--suku-font-size-2);font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:var(--suku-text-label-one);position:absolute;display:inline;word-break:break-all!important;margin-left:25px;padding-top:.8%;cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        SukuAddWidgetComponent.ctorParameters = function () { return []; };
        SukuAddWidgetComponent.propDecorators = {
            id: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            customClass: [{ type: i0.Input }],
            icon: [{ type: i0.Input, args: ['icon',] }],
            iconId: [{ type: i0.Input, args: ['icon-id',] }],
            iconCustomClass: [{ type: i0.Input, args: ['icon-custom-class',] }],
            widgetCustomClass: [{ type: i0.Input, args: ['widget-custom-class',] }],
            action: [{ type: i0.Output }]
        };
        return SukuAddWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuAddIconWidgetModule = /** @class */ (function () {
        function SukuAddIconWidgetModule(injector) {
            this.injector = injector;
        }
        /**
         * @return {?}
         */
        SukuAddIconWidgetModule.prototype.ngDoBoostrap = /**
         * @return {?}
         */
            function () {
                var e_1, _a;
                /** @type {?} */
                var elements$$1 = [
                    [SukuAddWidgetComponent, 'suku-add-widget']
                ];
                try {
                    for (var elements_1 = __values(elements$$1), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                        var _b = __read(elements_1_1.value, 2), component = _b[0], name_1 = _b[1];
                        /** @type {?} */
                        var el = elements.createCustomElement(component, { injector: this.injector });
                        customElements.define(name_1, el);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return))
                            _a.call(elements_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        SukuAddIconWidgetModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [SukuAddWidgetComponent],
                        entryComponents: [SukuAddWidgetComponent],
                        exports: [SukuAddWidgetComponent]
                    },] }
        ];
        /** @nocollapse */
        SukuAddIconWidgetModule.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        return SukuAddIconWidgetModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuBidTagComponent = /** @class */ (function () {
        function SukuBidTagComponent() {
            this.prize = '$100';
            this.prizeSize = '50';
            this.prizeWeight = '500';
            this.prizeColor = 'white';
            this.prizeCustomClass = 'mb-0';
            this.prizeId = 'prize';
            this.unit = '/ UNIT';
            this.unitSize = '14';
            this.unitWeight = '500';
            this.unitColor = 'white';
            this.unitCustomClass = 'mt-3 pt-5 mb-0 ml-3';
            this.unitId = 'unit';
            this.qContent = '100 cases / box: 200 boxes';
            this.qSize = '15';
            this.qWeight = '500';
            this.qColor = 'white';
            this.qCustomClass = '';
            this.quantityId = 'quantity';
            this.pContent = '$40,000 total (80,000 SUKU)';
            this.pSize = '15';
            this.pWeight = '500';
            this.pColor = 'white';
            this.pCustomClass = 'mt-1 pb-2';
            this.totalPrizeId = 'totalPrice';
            this.bidtagclass = 'col p-2 suku-big-tag pl-4';
        }
        /**
         * @return {?}
         */
        SukuBidTagComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuBidTagComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-bid-tag',
                        template: "<div class=\"{{bidtagclass}}\">\n  <div class=\"col\">\n    <span class=\"row pr-1 pl-3\">\n      <h1 [style.font-size.px]=\"prizeSize\" [class]=\"prizeCustomClass\" [style.font-weight]=\"prizeWeight\"\n        [style.color]=\"prizeColor\" [id]=\"prizeId\">\n        {{prize}}\n      </h1>\n      <h2 [style.font-size.px]=\"unitSize\" [class]=\"unitCustomClass\" [id]=\"unitId\" [style.font-weight]=\"unitWeight\"\n        [style.color]=\"unitColor\">\n        {{unit}}\n      </h2>\n    </span>\n    <span>\n      <h1 [style.font-size.px]=\"qSize\" [class]=\"qCustomClass\" [style.font-weight]=\"qWeight\" [style.color]=\"qColor\"\n        [id]=\"quantityId\">\n        {{qContent}}\n      </h1>\n      <h1 [style.font-size.px]=\"pSize\" [class]=\"pCustomClass\" [style.font-weight]=\"pWeight\" [style.color]=\"pColor\"\n        [id]=\"totalPrizeId\">\n        {{pContent}}\n      </h1>\n    </span>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-big-tag{background-color:var(--suku-bg-ternary);border-radius:var(--suku-primary-border-radius);border-left:6px solid;border-color:var(--suku-primary-color)}.suku-big-tag-org{background-color:var(--suku-bg-ternary);border-radius:var(--suku-primary-border-radius);border-left:6px solid #000}h1{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:400!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important}h2{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:var(--suku-text-label-one);word-break:break-word!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuBidTagComponent.ctorParameters = function () { return []; };
        SukuBidTagComponent.propDecorators = {
            prize: [{ type: i0.Input }],
            prizeSize: [{ type: i0.Input }],
            prizeWeight: [{ type: i0.Input }],
            prizeColor: [{ type: i0.Input }],
            prizeCustomClass: [{ type: i0.Input }],
            prizeId: [{ type: i0.Input }],
            unit: [{ type: i0.Input }],
            unitSize: [{ type: i0.Input }],
            unitWeight: [{ type: i0.Input }],
            unitColor: [{ type: i0.Input }],
            unitCustomClass: [{ type: i0.Input }],
            unitId: [{ type: i0.Input }],
            qContent: [{ type: i0.Input }],
            qSize: [{ type: i0.Input }],
            qWeight: [{ type: i0.Input }],
            qColor: [{ type: i0.Input }],
            qCustomClass: [{ type: i0.Input }],
            quantityId: [{ type: i0.Input }],
            pContent: [{ type: i0.Input }],
            pSize: [{ type: i0.Input }],
            pWeight: [{ type: i0.Input }],
            pColor: [{ type: i0.Input }],
            pCustomClass: [{ type: i0.Input }],
            totalPrizeId: [{ type: i0.Input }],
            bidtagclass: [{ type: i0.Input }]
        };
        return SukuBidTagComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuBidTagModule = /** @class */ (function () {
        function SukuBidTagModule(injector) {
            var e_1, _a;
            this.injector = injector;
            /** @type {?} */
            var elements$$1 = [
                [SukuBidTagComponent, 'suku-bid-tag']
            ];
            try {
                for (var elements_1 = __values(elements$$1), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                    var _b = __read(elements_1_1.value, 2), component = _b[0], name_1 = _b[1];
                    /** @type {?} */
                    var el = elements.createCustomElement(component, { injector: this.injector });
                    customElements.define(name_1, el);
                }
            }
            catch (e_1_1) {
                e_1 = { error: e_1_1 };
            }
            finally {
                try {
                    if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return))
                        _a.call(elements_1);
                }
                finally {
                    if (e_1)
                        throw e_1.error;
                }
            }
        }
        /**
         * @return {?}
         */
        SukuBidTagModule.prototype.ngDoBoostrap = /**
         * @return {?}
         */
            function () { };
        SukuBidTagModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [SukuBidTagComponent],
                        entryComponents: [SukuBidTagComponent],
                        exports: [SukuBidTagComponent]
                    },] }
        ];
        /** @nocollapse */
        SukuBidTagModule.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        return SukuBidTagModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuInfoButtonComponent = /** @class */ (function () {
        function SukuInfoButtonComponent() {
            this.size = '';
            this.weight = '600';
            this.type = 'info';
            this.btnType = 'submit';
            this.customClass = '';
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuInfoButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuInfoButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-info-button',
                        template: "<button class=\"suku-i suku-{{type}} {{customClass}}\" type=\"{{btnType}}\" [ngClass]=\"{'disabled' : disableValue}\"\n  [disabled]=\"disableValue\" [style.font-size.rem]=\"size\" [style.font-weight]=\"weight\" [id]=\"id\" (click)=\"action.emit()\">\n  <ng-content></ng-content>\n</button>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-i{border:2px solid;border-radius:28px 76px 63px;color:#3e3e3e;font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;padding:.55rem 2rem}.suku-i:hover{color:#fff;cursor:pointer}.suku-i:focus{outline:0!important}.suku.disabled:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:var(--suku-text-link);cursor:not-allowed}.suku-info{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-default-bg);color:var(--suku-text-heading)}.suku-info:active,.suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.suku-info.disabled{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:grey}.suku-info.disabled.focus,.suku-info.disabled:focus,.suku-info.disabled:hover,.suku-info[disabled].focus,.suku-info[disabled]:focus,.suku-info[disabled]:hover,fieldset[disabled] .suku-info.focus,fieldset[disabled] .suku-info:focus,fieldset[disabled] .suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:grey;cursor:not-allowed}.suku-info.focus,.suku-info:focus{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.open>.dropdown-toggle .suku-info.focus,.open>.dropdown-toggle .suku-info:focus,.open>.dropdown-toggle.suku-info:hover,.suku-info.active.focus,.suku-info.active:focus,.suku-info.active:hover,.suku-info:active.focus,.suku-info:active:focus,.suku-info:active:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.show>.suku-info.dropdown-toggle,.suku-info:not(:disabled):not(.disabled).active,.suku-info:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}.show>.suku-info.dropdown-toggle:focus,.suku-info.focus,.suku-info:focus,.suku-info:not(:disabled):not(.disabled).active:focus,.suku-info:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}.suku-default{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-default-bg);color:var(--suku-text-heading)}.suku-default:active,.suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.suku-default.disabled{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#c4c4c4;opacity:.7}.suku-default.disabled.focus,.suku-default.disabled:focus,.suku-default.disabled:hover,.suku-default[disabled].focus,.suku-default[disabled]:focus,.suku-default[disabled]:hover,fieldset[disabled] .suku-default.focus,fieldset[disabled] .suku-default:focus,fieldset[disabled] .suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#c4c4c4;opacity:.7;cursor:not-allowed}.suku-default.focus,.suku-default:focus{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.open>.dropdown-toggle .suku-default.focus,.open>.dropdown-toggle .suku-default:focus,.open>.dropdown-toggle.suku-default:hover,.suku-default.active.focus,.suku-default.active:focus,.suku-default.active:hover,.suku-default:active.focus,.suku-default:active:focus,.suku-default:active:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.show>.suku-default.dropdown-toggle,.suku-default:not(:disabled):not(.disabled).active,.suku-default:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-text-info);border-color:var(--suku-text-info)}.show>.suku-default.dropdown-toggle:focus,.suku-default.focus,.suku-default:focus,.suku-default:not(:disabled):not(.disabled).active:focus,.suku-default:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}.w-80{width:80%!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuInfoButtonComponent.ctorParameters = function () { return []; };
        SukuInfoButtonComponent.propDecorators = {
            id: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            btnType: [{ type: i0.Input, args: ['btn-type',] }],
            customClass: [{ type: i0.Input, args: ['custom-class',] }],
            disableValue: [{ type: i0.Input, args: ['disable-value',] }],
            action: [{ type: i0.Output }]
        };
        return SukuInfoButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuPrimaryButtonComponent = /** @class */ (function () {
        function SukuPrimaryButtonComponent() {
            this.id = 'primary';
            this.size = '1';
            this.color = '';
            this.weight = '600';
            this.customClass = '';
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuPrimaryButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuPrimaryButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-primary-button',
                        template: "<button class=\"suku-p suku-primary c-pointer {{customClass}}\" [ngClass]=\"{'disabled' : disableValue}\"\n  [style.font-size.rem]=\"size\" [style.color]=\"color\" [style.font-weight]=\"weight\" [disabled]=\"disableValue\" [id]=\"id\"\n  (click)=\"action.emit()\">\n  <ng-content></ng-content>\n</button>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-p{border:2px solid var(--suku-primary-color);background-color:var(--suku-bg-secondary);color:var(--suku-text-label-two);font-family:var(--suku-secondary-font);font-weight:600;font-size:14px;padding:1rem 2rem;border-radius:12px 28px 23px 30px;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.25px;text-align:center}.suku-p:hover{cursor:pointer;background-color:var(--suku-primary-color)!important;color:var(--suku-text-label-two)}.suku-p:focus{color:var(--suku-text-label-two);background-color:var(--suku-primary-color)!important;outline:0!important;box-shadow:none!important}.suku-p.disabled:hover{border:2px solid!important;background-color:var(--suku-bg-ternary);color:#1d1d1d;cursor:not-allowed}.suku-primary.disabled{background-color:var(--suku-bg-ternary);color:grey;opacity:.65}.suku-primary.disabled.focus,.suku-primary.disabled:focus,.suku-primary.disabled:hover,.suku-primary[disabled].focus,.suku-primary[disabled]:focus,.suku-primary[disabled]:hover,fieldset[disabled] .suku-primary.focus,fieldset[disabled] .suku-primary:focus,fieldset[disabled] .suku-primary:hover{background-color:var(--suku-bg-ternary)!important;color:grey}.suku-primary.focus,.suku-primary:focus{background-color:var(--suku-primary-color);color:var(--suku-text-label-two)}.open>.dropdown-toggle .suku-primary.focus,.open>.dropdown-toggle .suku-primary:focus,.open>.dropdown-toggle.suku-primary:hover,.suku-primary.active.focus,.suku-primary.active:focus,.suku-primary.active:hover,.suku-primary:active.focus,.suku-primary:active:focus,.suku-primary:active:hover{background-color:var(--suku-primary-color);color:var(--suku-text-label-two)}.show>.suku-primary.dropdown-toggle,.suku-primary:not(:disabled):not(.disabled).active,.suku-primary:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}"]
                    }] }
        ];
        /** @nocollapse */
        SukuPrimaryButtonComponent.ctorParameters = function () { return []; };
        SukuPrimaryButtonComponent.propDecorators = {
            id: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            disableValue: [{ type: i0.Input, args: ['disable-value',] }],
            customClass: [{ type: i0.Input, args: ['custom-class',] }],
            action: [{ type: i0.Output }]
        };
        return SukuPrimaryButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuSecondaryButtonComponent = /** @class */ (function () {
        function SukuSecondaryButtonComponent() {
            this.size = 1.5;
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuSecondaryButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuSecondaryButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-secondary-button',
                        template: "<span class=\"secondary-btn c-pointer {{customClass}}\" [id]=\"id\" [style.font-weight]=\"weight\" [style.color]=\"color\"\n  [style.font-size.rem]=\"size\" (click)=\"action.emit()\">\n  <ng-content></ng-content>\n</span>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.secondary-btn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:var(--suku-text-heading);border-bottom:3.5px solid;border-color:var(--suku-primary-color);word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        SukuSecondaryButtonComponent.ctorParameters = function () { return []; };
        SukuSecondaryButtonComponent.propDecorators = {
            id: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            customClass: [{ type: i0.Input, args: ['custom-class',] }],
            action: [{ type: i0.Output }]
        };
        return SukuSecondaryButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuDefaultButtonComponent = /** @class */ (function () {
        function SukuDefaultButtonComponent() {
            this.id = 'deafultButton';
            this.size = '1';
            this.color = 'white';
            this.weight = '500';
            this.customClass = '';
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuDefaultButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuDefaultButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-default-button',
                        template: "<p class=\"default-btn c-pointer {{customClass}}\" [id]=\"id\" [style.font-size.rem]=\"size\" [style.color]=\"color\"\n  [style.font-weight]=\"weight\" (click)=\"action.emit()\">\n  <ng-content></ng-content>\n</p>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.default-btn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;word-break:break-word}.c-pointer:hover{cursor:pointer;text-decoration:underline!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuDefaultButtonComponent.ctorParameters = function () { return []; };
        SukuDefaultButtonComponent.propDecorators = {
            id: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            customClass: [{ type: i0.Input, args: ['custom-class',] }],
            action: [{ type: i0.Output }]
        };
        return SukuDefaultButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuHomepageButtonComponent = /** @class */ (function () {
        function SukuHomepageButtonComponent() {
            this.sendRoutePath = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuHomepageButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        SukuHomepageButtonComponent.prototype.onClick = /**
         * @return {?}
         */
            function () {
                console.log('this.buttonData.path', this.buttonData.path);
                if (!this.buttonData.disabled) {
                    this.sendRoutePath.emit(this.buttonData.path);
                }
            };
        SukuHomepageButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-homepage-button',
                        template: "<div class=\"button-container d-flex flex-column align-items-center \">\n  <div class=\"suku-button d-flex justify-content-center align-items-center {{sukuButtonCustomClass}}\"\n    *ngIf=\"!(buttonData.disabled == null)\" [ngClass]=\"{\n      'disabled': buttonData.disabled\n    }\" (click)=\"onClick()\" id=\"{{buttonData?.id}}\">\n    <i class=\"{{iconCustomClass}}\" [ngClass]=\"[buttonData.icon, 'icon']\"></i>\n  </div>\n  <div class=\"suku-button-text text-center mt-3\" *ngIf=\"!(buttonData.disabled == null)\">\n    <h3 class=\"button-title {{titleCustomClass}}\">{{buttonData.title}}</h3>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.button-container{width:106.4px;font-family:var(--suku-primary-font);font-weight:700}.suku-button{height:80px;width:80px;background:var(--suku-button-default-bg);color:var(--suku-secondary-color);cursor:pointer!important;box-shadow:0 3px 3px 0 rgba(0,0,0,.5);transition:.1s ease-in-out;border-radius:12px 28px}.suku-button:hover{box-shadow:0 4px 3px 0 rgba(0,0,0,.5);transform:translateY(-3px)}.suku-button:active{box-shadow:0 4px 3px 0 rgba(0,0,0,.5);transform:translateY(-1px);transition:none}.disabled{background:var(--suku-button-disabled-bg);color:var(--suku-icon-disabled-bg);cursor:default}.disabled:active,.disabled:hover{box-shadow:0 3px 3px 0 rgba(0,0,0,.5);transform:translateY(0)}.icon{font-size:40px}.button-title{font-size:14px;font-weight:700}"]
                    }] }
        ];
        /** @nocollapse */
        SukuHomepageButtonComponent.ctorParameters = function () { return []; };
        SukuHomepageButtonComponent.propDecorators = {
            titleId: [{ type: i0.Input, args: ['title-id',] }],
            titleCustomClass: [{ type: i0.Input, args: ['title-custom-class',] }],
            iconCustomClass: [{ type: i0.Input, args: ['icon-custom-class',] }],
            sukuButtonCustomClass: [{ type: i0.Input, args: ['suku-button-custom-class',] }],
            buttonData: [{ type: i0.Input, args: ['button-data',] }],
            sendRoutePath: [{ type: i0.Output, args: ['send-route-path',] }]
        };
        return SukuHomepageButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuButtonsModule = /** @class */ (function () {
        function SukuButtonsModule(injector) {
            this.injector = injector;
        }
        /**
         * @return {?}
         */
        SukuButtonsModule.prototype.ngDoBootstrap = /**
         * @return {?}
         */
            function () {
                var e_1, _a;
                /** @type {?} */
                var elements$$1 = [
                    [SukuInfoButtonComponent, 'suku-info-button'],
                    [SukuPrimaryButtonComponent, 'suku-primary-button'],
                    [SukuSecondaryButtonComponent, 'suku-secondary-button'],
                    [SukuDefaultButtonComponent, 'suku-default-button'],
                    [SukuHomepageButtonComponent, 'suku-homepage-button']
                ];
                try {
                    for (var elements_1 = __values(elements$$1), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                        var _b = __read(elements_1_1.value, 2), component = _b[0], name_1 = _b[1];
                        /** @type {?} */
                        var el = elements.createCustomElement(component, { injector: this.injector });
                        customElements.define(name_1, el);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return))
                            _a.call(elements_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        SukuButtonsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            SukuInfoButtonComponent,
                            SukuPrimaryButtonComponent,
                            SukuSecondaryButtonComponent,
                            SukuDefaultButtonComponent,
                            SukuHomepageButtonComponent
                        ],
                        entryComponents: [
                            SukuInfoButtonComponent,
                            SukuPrimaryButtonComponent,
                            SukuSecondaryButtonComponent,
                            SukuDefaultButtonComponent,
                            SukuHomepageButtonComponent
                        ],
                        exports: [
                            SukuInfoButtonComponent,
                            SukuPrimaryButtonComponent,
                            SukuSecondaryButtonComponent,
                            SukuDefaultButtonComponent,
                            SukuHomepageButtonComponent
                        ]
                    },] }
        ];
        /** @nocollapse */
        SukuButtonsModule.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        return SukuButtonsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuLoaderComponent = /** @class */ (function () {
        function SukuLoaderComponent(dialogCustomRef, data) {
            this.dialogCustomRef = dialogCustomRef;
            this.data = data;
            this.waitingMessage = 'please wait...';
            this.lodingDescription = 'The document you are downloading is being authenticated against the SUKU Blockchain.';
            this.loadingMessage = 'Please wait momentarily while this process completes...';
            this.dialogData = {
                'logo': '../../../assets/icons/icon-96x96.png',
                'logoCustomClass': '',
                'logoId': 'loaderIcon',
                'icon': 'fa fa-spinner fa-spin',
                'iconCustomClass': 'icon',
                'iconId': 'questionIcon',
                'titleOne': 'please wait...',
                'titleOneId': 'confirmation',
                'titleOneCustomClass': '',
                'titleTwo': 'The document you are downloading is being authenticated against the SUKU Blockchain.',
                'titleTwoId': '',
                'titleTwoCustomClass': '',
                'titleThree': 'Please wait momentarily while this process completes...',
                'titleThreeId': '',
                'titleThreeCustomClass': '',
                'titleBoxCustomClass': ''
            };
        }
        /**
         * @return {?}
         */
        SukuLoaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var e_1, _a;
                console.log('Current data', this.data);
                try {
                    for (var _b = __values(Object.keys(this.data)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        if (this.data[key]) {
                            console.log(this.data[key], key);
                            this.dialogData[key] = this.data[key];
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                console.log('dialogData', this.dialogData);
            };
        /**
         * @return {?}
         */
        SukuLoaderComponent.prototype.cancel = /**
         * @return {?}
         */
            function () {
                this.dialogCustomRef.close(false);
            };
        /**
         * @return {?}
         */
        SukuLoaderComponent.prototype.submit = /**
         * @return {?}
         */
            function () {
                this.dialogCustomRef.close(true);
            };
        SukuLoaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-loader',
                        template: "<div class=\"col p-0\">\n  <div class=\"col text-center\">\n    <div class=\"row justify-content-center\">\n      <div class=\"dialog-title-box {{dialogData?.titleBoxCustomClass}}\">\n        <div class=\"col\">\n          <div class=\"row\">\n            <div class=\"col pt-3\">\n              <img class=\"logo {{dialogData?.logoCustomClass}}\" [id]=\"dialogData?.iconId\" [src]=\"dialogData?.logo\"\n                class=\"mb-3\" aria-hidden=\"true\" />\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col pb-3 pt-3\">\n              <span id=\"{{ dialogData?.titleOneId }}\" class=\"title pb-1 mt-3 mb-3 {{dialogData?.titleOneCustomClass}}\">\n                {{ dialogData?.titleOne }}\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<mat-dialog-content class=\"mat-typography\">\n  <div class=\"col p-0\">\n    <h2 class=\"col maincontent pt-3 text-center {{dialogData?.titleTwoCustomClass}}\" id=\"{{ dialogData?.titleTwoId }}\">\n      {{ dialogData?.titleTwo }}\n    </h2>\n    <h2 class=\" col subcontent mb-2 text-center {{dialogData?.titleThreeCustomClass}}\"\n      id=\"{{ dialogData?.titleThreeId }}\">\n      <div class=\"col spinnerStyle text-center\">\n        <i class=\"{{dialogData?.icon}} icon {{dialogData?.iconCustomClass}}\" [id]=\"dialogData?.iconId\"></i>\n      </div>\n    </h2>\n  </div>\n  <div class=\"col\">\n    <h2 class=\"col subcontent pt-2 pb-3 text-center {{dialogData?.titleThreeCustomClass}}\"\n      id=\"{{ dialogData?.titleThreeId }}\">\n      {{ dialogData?.titleThree }}\n    </h2>\n  </div>\n</mat-dialog-content>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.dialog-title-box{width:100%;float:left;background-image:linear-gradient(to bottom,rgba(101,102,243,.06),rgba(101,102,243,.06)),radial-gradient(circle at 50% 0,#3a3a3a,#000);border-radius:0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);color:var(--suku-text-label-two);font-size:20px;font-weight:300}.icon{font-size:50px;color:var(--suku-primary-color)}.width100{width:100%}.maincontent{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);letter-spacing:.4px;font-weight:700}.subcontent{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);letter-spacing:.4px;font-weight:300}::ng-deep mat-dialog-container{padding:0!important;overflow:hidden!important}:host ::ng-deep mat-dialog-content{max-height:91%!important;overflow-y:none!important;margin:0!important;height:100%!important}:host ::ng-deep mat-dialog-actions{margin:5px 10px!important}/deep/div ::-webkit-scrollbar{width:4px!important}/deep/div ::-webkit-scrollbar-track{background:rgba(0,0,0,.1)}/deep/div ::-webkit-scrollbar-thumb{background:rgba(0,0,0,.8)}.spinnerStyle{font-size:50px;padding-top:20px;padding-bottom:20px}.w-70{min-width:70%}"]
                    }] }
        ];
        /** @nocollapse */
        SukuLoaderComponent.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        SukuLoaderComponent.propDecorators = {
            waitingMessage: [{ type: i0.Input, args: ['waiting-message',] }],
            lodingDescription: [{ type: i0.Input, args: ['loding-description',] }],
            loadingMessage: [{ type: i0.Input, args: ['loading-message',] }],
            dialogData: [{ type: i0.Input }]
        };
        return SukuLoaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuLoaderModule = /** @class */ (function () {
        function SukuLoaderModule() {
        }
        SukuLoaderModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule, i1.MatDialogModule
                        ],
                        declarations: [SukuLoaderComponent],
                        entryComponents: [SukuLoaderComponent]
                    },] }
        ];
        return SukuLoaderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuConfirmationComponent = /** @class */ (function () {
        function SukuConfirmationComponent(dialogCustomRef, data) {
            this.dialogCustomRef = dialogCustomRef;
            this.data = data;
            this.dialogData = {
                'icon': 'fa fa-question',
                'iconCustomClass': '',
                'iconId': 'questionIcon',
                'titleOne': 'Test',
                'titleOneId': 'confirmation',
                'titleOneCustomClass': '',
                'titleTwo': '',
                'titleTwoId': '',
                'titleTwoCustomClass': '',
                'titleThree': '',
                'titleThreeId': '',
                'titleThreeCustomClass': '',
                'titleBoxCustomClass': '',
                'buttonLableOne': 'Cancel',
                'buttonLableOneId': '',
                'buttonLableTwo': 'Submit',
                'buttonLableTwoId': '',
                'buttonCustomClass': ''
            };
        }
        /**
         * @return {?}
         */
        SukuConfirmationComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var e_1, _a;
                try {
                    for (var _b = __values(Object.keys(this.data)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        if (this.data[key]) {
                            this.dialogData[key] = this.data[key];
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        /**
         * @return {?}
         */
        SukuConfirmationComponent.prototype.cancel = /**
         * @return {?}
         */
            function () {
                this.dialogCustomRef.close(false);
            };
        /**
         * @return {?}
         */
        SukuConfirmationComponent.prototype.submit = /**
         * @return {?}
         */
            function () {
                this.dialogCustomRef.close(true);
            };
        SukuConfirmationComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-confirmation',
                        template: "<div class=\"col p-0\">\n  <div class=\"col text-center\">\n    <div class=\"row justify-content-center\">\n      <div class=\"dialog-title-box {{dialogData?.titleBoxCustomClass}}\">\n        <div class=\"col\">\n          <div class=\"row\">\n            <div class=\"col pt-3\">\n              <i class=\"{{dialogData?.icon}} icon {{dialogData?.iconCustomClass}}\" [id]=\"dialogData?.iconId\"></i>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col pb-3 pt-3\">\n              <span id=\"{{ dialogData?.titleOneId }}\" class=\"title pb-1 mt-3 mb-3 {{dialogData?.titleOneCustomClass}}\">\n                {{ dialogData?.titleOne }}\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<mat-dialog-content class=\"mat-typography\">\n  <div class=\"col p-0\">\n    <h2 class=\"col maincontent pt-4 mb-1 text-center {{dialogData?.titleTwoCustomClass}}\"\n      id=\"{{ dialogData?.titleTwoId }}\">\n      {{ dialogData?.titleTwo }}\n    </h2>\n    <h2 class=\" col subcontent mb-2 text-center {{dialogData?.titleThreeCustomClass}}\"\n      id=\"{{ dialogData?.titleThreeId }}\">\n      {{ dialogData?.titleThree }}\n    </h2>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <div class=\"col text-center pb-3\">\n    <div class=\"row\">\n      <div class=\"col-lg-5 offset-lg-1 col-sm-6 pt-3 justify-content-center\">\n        <button type=\"button\" id=\"{{ dialogData?.buttonLableOneId }}\"\n          class=\"btn btn-default center-block w-70 {{dialogData?.buttonCustomClass}}\" mat-dialog-close\n          (click)=\"cancel()\" tabindex=\"-1\">\n          {{ dialogData?.buttonLableOne }}\n        </button>\n      </div>\n      <div class=\"col-lg-5 col-sm-6 pt-3 justify-content-center\">\n        <button type=\"button\" tabindex=\"1\" (click)=\"submit()\" id=\"{{ dialogData?.buttonLableTwoId }}\" mat-dialog-close\n          class=\"btn btn-info center-block w-70 {{dialogData?.buttonCustomClass}}\">\n          {{ dialogData?.buttonLableTwo }}\n        </button>\n      </div>\n    </div>\n  </div>\n</mat-dialog-actions>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.dialog-title-box{width:100%;float:left;background-image:linear-gradient(to bottom,rgba(101,102,243,.06),rgba(101,102,243,.06)),radial-gradient(circle at 50% 0,#3a3a3a,#000);border-radius:0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);margin:0}.title{font-family:var(--suku-primary-font);color:#fff!important;font-size:20px;font-weight:300}.icon{font-size:50px;color:#a7bf2e}.width100{width:100%}.maincontent{font-family:var(--suku-primary-font);font-size:17px;letter-spacing:.4px;font-weight:700}.subcontent{font-family:var(--suku-primary-font);font-size:17px;letter-spacing:.4px;font-weight:300}::ng-deep mat-dialog-container{padding:0!important;overflow:hidden!important}:host ::ng-deep mat-dialog-content{max-height:91%!important;overflow-y:none!important;margin:0!important;height:100%!important}:host ::ng-deep mat-dialog-actions{margin:5px 10px!important}/deep/div ::-webkit-scrollbar{width:4px!important}/deep/div ::-webkit-scrollbar-track{background:rgba(0,0,0,.1)}/deep/div ::-webkit-scrollbar-thumb{background:rgba(0,0,0,.8)}.w-70{min-width:70%}"]
                    }] }
        ];
        /** @nocollapse */
        SukuConfirmationComponent.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        SukuConfirmationComponent.propDecorators = {
            dialogData: [{ type: i0.Input }]
        };
        return SukuConfirmationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuModalModule = /** @class */ (function () {
        function SukuModalModule() {
        }
        SukuModalModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule, i1.MatDialogModule
                        ],
                        declarations: [SukuConfirmationComponent],
                        entryComponents: [SukuConfirmationComponent]
                    },] }
        ];
        return SukuModalModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuConfirmationModalComponent = /** @class */ (function () {
        function SukuConfirmationModalComponent(dialogCustomRef, data) {
            this.dialogCustomRef = dialogCustomRef;
            this.data = data;
            this.dialogData = {
                'imgSrc': '',
                'imgId': '',
                'icon': '',
                'iconId': 'suku-icon',
                'iconCustomClass': 'suku-xl',
                'message': '',
                'description': '',
                'loader': 'disable',
                'buttonText': '',
                'messageCustomClass': '',
                'descriptionCustomClass': '',
                'buttonCustomClass': '',
                'messageId': '',
                'buttonId': '',
            };
        }
        /**
         * @return {?}
         */
        SukuConfirmationModalComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.data.modalData) {
                    this.data.modalData.subscribe(( /**
                     * @param {?} val
                     * @return {?}
                     */function (val) {
                        var e_1, _a;
                        console.log('data--', val);
                        if (val) {
                            try {
                                for (var _b = __values(Object.keys(val)), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    var key = _c.value;
                                    if (val[key]) {
                                        _this.dialogData[key] = val[key];
                                    }
                                }
                            }
                            catch (e_1_1) {
                                e_1 = { error: e_1_1 };
                            }
                            finally {
                                try {
                                    if (_c && !_c.done && (_a = _b.return))
                                        _a.call(_b);
                                }
                                finally {
                                    if (e_1)
                                        throw e_1.error;
                                }
                            }
                        }
                    }));
                }
            };
        /**
         * @return {?}
         */
        SukuConfirmationModalComponent.prototype.close = /**
         * @return {?}
         */
            function () {
                this.dialogCustomRef.close(true);
            };
        SukuConfirmationModalComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-confirmation-modal',
                        template: "  <div class=\"text-center p-0\">\n    <div class=\"col text-center\">\n      <div class=\"row justify-content-center\">\n        <div class=\"modalproduct-boxContent\">\n          <div class=\"col pl-lg-4 pt-1 pb-2\">\n            <div class=\"row\">\n              <div class=\"col mt-2 mb-2\">\n                <div class=\"col mb-3\">\n                  <img [src]=\"dialogData?.imgSrc\" id=\"{{dialogData?.imgId}}\" *ngIf=\"dialogData?.imgSrc\" />\n                  <i class=\"{{dialogData?.icon}} {{dialogData?.iconCustomClass}}\" id=\"{{dialogData?.iconId}}\"\n                    *ngIf=\"dialogData?.icon\"></i>\n                </div>\n                <span id=\"{{ dialogData?.messageId }}\"\n                  class=\"modalcolor {{ dialogData?.messageCustomClass }} pb-1 mt-3 mb-3\">\n                  {{ dialogData?.message }}\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <h2 class=\"col-sm-10 modalFontStyle mt-4 mb-2 text-center {{ dialogData?.descriptionCustomClass }}\">\n          {{ dialogData?.description }}\n        </h2>\n        <div class=\"col-sm-12 pt-2 d-flex justify-content-center\" *ngIf=\"(dialogData?.loader == 'enable')\">\n          <mat-spinner diameter=\"45\"></mat-spinner>\n        </div>\n      </div>\n    </div>\n    <div class=\"col text-center p-3\">\n      <div class=\"row mb-3 mt-3\">\n        <div class=\"col-lg-4 col-md-6 offset-md-3 offset-sm-4\t col-sm-4 col-xs-10 offset-lg-4 pl-lg-0 pr-lg-0\">\n          <button tabindex=\"1\" (click)=\"close()\" [disabled]=\"(dialogData?.loader == 'enable')\"\n            id=\"{{ dialogData?.buttonId }}\"\n            class=\"btn btn-info center-block width100 {{ dialogData?.buttonCustomClass }}\">\n            {{ dialogData?.buttonText }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border-color:var(--suku-primary-border-color)!important;background-color:#fff;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.modalcolor{font-family:Poppins,sans-serif!important;color:#fff!important;font-size:20px;font-weight:300}.modalFontStyle{font-family:Poppins,sans-serif!important;font-size:17px;letter-spacing:.4px;font-weight:700;color:#1c1c1c!important}.width100{width:100%}.errorMsg{font-family:\"Encode Sans\",sans-serif!important;color:#e53935;font-size:75%}.btn-info{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:a7bf2e;color:#000}.modalproduct-boxContent{width:100%;float:left;background-image:linear-gradient(to bottom,rgba(101,102,243,.06),rgba(101,102,243,.06)),radial-gradient(circle at 50% 0,#3a3a3a,#000);box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 15px;margin:0}.bgWhite{background-color:#fff!important}::ng-deep mat-dialog-container{padding:0!important;overflow:hidden!important}:host ::ng-deep mat-dialog-content{max-height:91%!important;overflow-y:none!important;margin:0!important;height:100%!important}:host ::ng-deep mat-dialog-actions{margin:5px 10px!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuConfirmationModalComponent.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        SukuConfirmationModalComponent.propDecorators = {
            dialogData: [{ type: i0.Input }]
        };
        return SukuConfirmationModalComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuAddLicenseModalComponent = /** @class */ (function () {
        // @Input('enable-required-validator-for-control-one')
        // set enableRequiredValidatorForControlOne(val) {
        //   if (val) {
        //     this.controlOne.setValidators(Validators.required);
        //     this.controlOne.updateValueAndValidity();
        //   }
        // }
        // @Input('enable-pattern-for-control-one')
        // set enablePatternValidatorsForControlOne(val) {
        //   if (val) {
        //     this.controlOne.setValidators(Validators.pattern(this.dialogData.controlOnePattern));
        //     this.controlOne.updateValueAndValidity();
        //   }
        // }
        // @Input('enable-required-validator-for-control-two')
        // set enableRequiredValidatorForControlTwo(val) {
        //   if (val) {
        //     this.controlTwo.setValidators(Validators.required);
        //     this.controlTwo.updateValueAndValidity();
        //   }
        // }
        // @Input('enable-pattern-for-control-two')
        // set enableRequiredValidatorsForDateControlOne(val) {
        //   if (val) {
        //     this.dateControlOne.setValidators(Validators.required);
        //     this.dateControlOne.updateValueAndValidity();
        //   }
        // }
        // @Input('enable-required-validator-for-dateControl-one')
        // set enableRequiredValidatorForDateControlTwo(val) {
        //   if (val) {
        //     this.dateControlTwo.setValidators(Validators.required);
        //     this.dateControlTwo.updateValueAndValidity();
        //   }
        // }
        function SukuAddLicenseModalComponent(snackBar, dialogCustomRef, data) {
            this.snackBar = snackBar;
            this.dialogCustomRef = dialogCustomRef;
            this.data = data;
            this.formSumitAttempt = false;
            this.mulFiles = [];
            this.imagePreviewUrls = [];
            // uploadFiles = []; 
            this.dialogData = {
                controlOne: 'controlOne',
                controlTwo: 'controlTwo',
                dateControlOne: 'dateControlOne',
                dateControlTwo: 'dateControlTwo',
                'controlOnePatternEnabled': '',
                'controlTwoPatternEnabled': '',
                controlOneRequired: '',
                controlTwoRequired: '',
                controlTwoRequiredd: '',
                dateControlOneRequired: '',
                dateControlTwoRequired: '',
                'controlOnePattern': '',
                'controlTwoPattern': '',
                'title': 'Licence and Registration',
                'subTitle': 'Enter your license details here',
                'controlHint': 'Example: 123456789a12345',
                'hintClass': '',
                'headerCutomStyle': '',
                'startDateMaxDate': '',
                'endDateMaxDate': '',
                'startDateMinDate': '',
                'endDateMinDate': '',
                'controlOneId': 'licenseName',
                controlTwoId: 'licenseNumber',
                dateControlOneId: 'startDate',
                dateControlTwoId: 'endDate',
                controlTwoToolTip: 'The format should be 123456789a12345',
                controlOnePlaceholder: 'License Name',
                controlTwoPlaceholder: 'License Number',
                dateControlOnePlaceholder: 'Licence Issue Date',
                dateControlTwoPlaceholder: 'Licence Expiry Date(Optional)',
                controlOneRquiredErrorMsg: 'Cannot be blank.',
                controlTwoRquiredErrorMsg: 'Cannot be blank.',
                controlTwoPatternErrorMsg: 'Invalid Licence number',
                dateControlOneRquiredErrorMsg: 'Cannot be blank.',
                dateControlTwoRquiredErrorMsg: 'Cannot be blank.',
                acceptDocment: 'application/msword, text/plain, application/pdf, image/*',
                uploadImg: 'http://34.217.89.204/assets/images/fileUpload.png',
                uploadTitle: ' Upload Licence',
                fileListTitle: 'Uploaded Documents',
                fileInputId: 'file-input',
                filesArray: [],
                fileRemoveBtnTxt: 'Delete',
                fileRemoveBtnId: 'fileDelete',
                uploadImgAltTxt: '',
                cancelBtnText: 'Cancel',
                submitBtnTxt: 'Add License',
                submitBtnCustomClass: '',
                cancelBtnCustomClass: '',
            };
            this.controlOne = new forms.FormControl('');
            this.controlTwo = new forms.FormControl('');
            this.dateControlOne = new forms.FormControl('');
            this.dateControlTwo = new forms.FormControl('');
        }
        /**
         * @return {?}
         */
        SukuAddLicenseModalComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var e_1, _a;
                try {
                    for (var _b = __values(Object.keys(this.data)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        if (this.data[key]) {
                            this.dialogData[key] = this.data[key];
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                if (this.dialogData.controlOneRequired) {
                    this.controlOne.setValidators(forms.Validators.required);
                    this.controlOne.updateValueAndValidity();
                }
                if (this.dialogData.controlTwoRequired) {
                    this.controlTwo.setValidators(forms.Validators.required);
                    this.controlTwo.updateValueAndValidity();
                }
                if (this.dialogData.dateControlOneRequired) {
                    this.dateControlOne.setValidators(forms.Validators.required);
                    this.dateControlOne.updateValueAndValidity();
                }
                if (this.dialogData.dateControlTwoRequired) {
                    this.dateControlTwo.setValidators(forms.Validators.required);
                    this.dateControlTwo.updateValueAndValidity();
                }
                if (this.dialogData.controlTwoPatternEnabled && this.dialogData.controlTwoRequired) {
                    this.controlTwo.setValidators([forms.Validators.required, forms.Validators.pattern(this.dialogData.controlTwoPattern)]);
                    this.controlTwo.updateValueAndValidity();
                }
                // if (this.dialogData.controlOnePatternEnabled) {
                //   this.controlOne.setValidators(Validators.pattern(this.dialogData.controlOnePattern));
                //   this.controlOne.updateValueAndValidity();
                // }
                console.log('this.dialogData', this.dialogData);
                this._subscriptionOne = this.controlOne.valueChanges.subscribe(( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) {
                    if (value) {
                        _this.controlOneValue = value;
                    }
                }));
                this._subscriptionTwo = this.controlTwo.valueChanges.subscribe(( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) {
                    if (value) {
                        _this.controlTwoValue = value;
                    }
                }));
                this._subscriptionThree = this.dateControlOne.valueChanges.subscribe(( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) {
                    if (value) {
                        _this.dateControlOneValue = value;
                    }
                }));
                this._subscriptionFour = this.dateControlTwo.valueChanges.subscribe(( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) {
                    if (value) {
                        _this.dateControlTwoValue = value;
                    }
                }));
                // this._subscribeFiles = this.getUploadedFiles().subscribe(value => {
                //     if (value) {
                //       this.uploadFiles = value;
                //     } else {
                //       // this.usernameControl.
                //     }
                // })
            };
        /**
         * @return {?}
         */
        SukuAddLicenseModalComponent.prototype.addLicense = /**
         * @return {?}
         */
            function () {
                if (this.controlOne.invalid || this.controlTwo.invalid ||
                    this.dateControlOne.invalid || this.dateControlTwo.invalid) {
                    this.snackBar.open('Please fill all the mandatory fields.', 'close', {
                        verticalPosition: 'top',
                        horizontalPosition: 'right',
                        duration: 5000
                    });
                }
                else {
                    /** @type {?} */
                    var reqObj = {
                        license: {
                            licenseName: this.controlOneValue,
                            licenseNumber: this.controlTwoValue,
                            startDate: this.dateControlOneValue,
                            endDate: this.dateControlTwoValue,
                            files: this.mulFiles
                        }
                    };
                    this.dialogCustomRef.close(reqObj);
                }
            };
        /**
         * @return {?}
         */
        SukuAddLicenseModalComponent.prototype.closeDialog = /**
         * @return {?}
         */
            function () {
                this.dialogCustomRef.close(false);
            };
        /**
         * @param {?} e
         * @return {?}
         */
        SukuAddLicenseModalComponent.prototype.startUpload = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                var _this = this;
                /** @type {?} */
                var maxFileSize = 10097152;
                /** @type {?} */
                var currentFileSize;
                if (e.target.files && e.target.files.length > 0) {
                    var _loop_1 = function () {
                        /** @type {?} */
                        var file = e.target.files[i];
                        currentFileSize = file.size;
                        console.log('file.type', file.type);
                        if (currentFileSize <= maxFileSize &&
                            (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg' || file.type == '.pdf' ||
                                file.type == 'application/rtf' || file.type == 'application/msword' ||
                                file.type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.type == 'application/pdf')) {
                            this_1.mulFiles.push(e.target.files[i]);
                            /** @type {?} */
                            var reader = new FileReader();
                            reader.onload = ( /**
                             * @param {?} e
                             * @return {?}
                             */function (e) {
                                _this.imagePreviewUrls.push({ file: e.target.result, name: file.name });
                            });
                            reader.readAsDataURL(file);
                        }
                        else {
                            this_1.snackBar.open('Upload Word, Image or PDF format of your License, Size should be below 10MB.', 'close', {
                                verticalPosition: 'top',
                                horizontalPosition: 'right',
                                duration: 5000
                            });
                        }
                    };
                    var this_1 = this;
                    for (var i = 0; i < e.target.files.length; i++) {
                        _loop_1();
                    }
                }
            };
        /**
         * @param {?} param
         * @return {?}
         */
        SukuAddLicenseModalComponent.prototype.removeFile = /**
         * @param {?} param
         * @return {?}
         */
            function (param) {
                this.mulFiles.splice(param, 1);
                console.log('param', param);
                this.imagePreviewUrls.splice(param, 1);
                console.log('param url', param);
            };
        /**
         * @param {?} file
         * @return {?}
         */
        SukuAddLicenseModalComponent.prototype.downloadDoc = /**
         * @param {?} file
         * @return {?}
         */
            function (file) {
                console.log("this si what i am doing ", file);
                /** @type {?} */
                var name = file.name;
                /** @type {?} */
                var uri = file.file;
                /** @type {?} */
                var downloadLink = document.createElement("a");
                downloadLink.href = uri;
                downloadLink.download = name;
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            };
        /**
         * @param {?} msg
         * @return {?}
         */
        SukuAddLicenseModalComponent.prototype.snackbar = /**
         * @param {?} msg
         * @return {?}
         */
            function (msg) {
                this.snackBar.open(msg, 'close', {
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    duration: 3500
                });
            };
        SukuAddLicenseModalComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-add-license-modal',
                        template: " <div>\n    <div class=\"col-sm-12  card-header {{ dialogData?.headerCutomStyle }}\">\n        <div class=\"col-sm-12\">\n          <h1 class=\"headerFont\">{{dialogData?.title}}</h1>\n          <p>{{dialogData?.subTitle}}</p>\n        </div>\n      </div>\n      <div class=\"modal-body col-sm-12\">\n          <div>\n          \t  <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\"\n              dialogData-parent=\"#accordionExample\">\n              <div>\n                <div class=\"pL\">\n                <div class=\"col-sm-12 mT-7\">\n                  <div class=\"row\">\n                    <mat-form-field class=\"col-sm-6\">\n                        <input matInput placeholder=\"{{ dialogData?.controlOnePlaceholder }}\"  [formControl]=\"controlOne\" name=\"{{dialogData?.controlOne}}\" id=\"{{ dialogData?.controlOneId }}\">\n                        <mat-error *ngIf=\"controlOne.hasError('required')\">\n                            {{ dialogData?.controlOneRquiredErrorMsg }}\n                          </mat-error>\n                    </mat-form-field>\n                    <div class=\"col-sm-6 p-0\">\n                    <mat-form-field class=\"col-12 \">\n                      <input matInput placeholder=\"{{dialogData?.controlTwoPlaceholder}}\" \n                        [formControl]=\"controlTwo\" id=\"{{ dialogData?.controlTwoId }}\"\n                        name=\"{{dialogData?.controlTwo}}\" #tooltip=\"matTooltip\"\n                        matTooltip=\"{{ dialogData?.controlTwoToolTip }}\">\n                      <mat-error *ngIf=\"controlTwo.hasError('required')\">\n                          \t{{ dialogData?.controlTwoRquiredErrorMsg }}\n                      </mat-error>\n                      <mat-error *ngIf=\"controlTwo.hasError('pattern')\">\n                            {{ dialogData?.controlTwoPatternErrorMsg }}\n                      </mat-error>\n                    </mat-form-field>\n                    <div >\n                    <p class=\"pl-4 {{ dialogData?.hintClass }}\">{{ dialogData?.controlHint }}</p>\n                  </div>\n                  </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 mT-7\">\n                  <div class=\"row\">\n                    <mat-form-field  class=\"col-sm-6\">\n                      <mat-label>{{ dialogData?.dateControlOnePlaceholder }}</mat-label>\n                      <input matInput [matDatepicker]=\"picker1\" [formControl]=\"dateControlOne\" \n                       id=\"{{ dialogData?.dateControlOneId }}\"   #checkin1 name=\"{{ dialogData?.dateControlOne }}\" [min]=\"dialogData?.startDateMinDate\"  [max]=\"dialogData?.startDateMaxDate\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker1></mat-datepicker>\n                      <mat-error *ngIf=\"dateControlOne.hasError('required')\">\n                            {{ dialogData?.dateControlOneRquiredErrorMsg }}\n                      </mat-error>\n                    </mat-form-field>\n                    <mat-form-field  class=\"col-sm-6\">\n                      <mat-label>{{ dialogData?.dateControlTwoPlaceholder }}</mat-label>\n                      <input matInput [matDatepicker]=\"picker2\" id=\"{{ dialogData?.dateControlTwoId }}\" name=\"{{dialogData?.dateControlTwo}}\"\n                        #checkout1 [formControl]=\"dateControlTwo\"   [min]=\"dialogData?.endDateMinDate\" [max]=\"dialogData?.endDateMaxDate\" >\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker2 color=\"primary\"></mat-datepicker>\n                      <mat-error *ngIf=\"dateControlTwo.hasError('required')\">\n                            {{ dialogData?.dateControlTwoRquiredErrorMsg }}\n                      </mat-error>\n                    </mat-form-field>                           \n                    <div class=\"col-sm-12 pL\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                       <aside >{{ dialogData?.uploadTitle }}</aside>\n                         <div class=\" form-group\">\n                          <input   #fileInput (change)=\"startUpload($event);\"\n                           accept=\"{{ dialogData?.acceptDocment }}\"  id=\"{{ dialogData?.fileInputId }}\"\n                            type=\"file\" style=\"display: none\" />\n                        </div>\n                        <div class=\"bT text-center\">\n                        <a (click)=\"fileInput.click()\"><img [src]=\"dialogData?.uploadImg\" alt=\"{{ dialogData?.uploadImgAltTxt }}\" \n                          width=\"90px\" height=\"100px\"></a>\n                      </div>\n                      </div>\n                      <div class=\"col-sm-9\">\n                      <aside>{{ dialogData?.fileListTitle }}</aside>\n                        <mat-chip-list>\n                          <mat-chip class=\"whiteSpace\" *ngFor=\"let file of imagePreviewUrls;let docIndex = index;\"> <br>\n                            <mat-icon matChipRemove (click)=\"downloadDoc(file)\" matTooltip=\"Download\">\n                                save_alt\n                              </mat-icon>\n                            <mat-icon  id=\"{{ dialogData?.fileRemoveBtnId }}\" matChipRemove matTooltip=\"Delete\" (click)=\"removeFile(docIndex)\">clear\n                            </mat-icon>\n                            <span> {{file.name}}</span>\n                          </mat-chip>\n                        </mat-chip-list>\n                      </div>\n                     </div>\n                  </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div>\n          </div>\n          <div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 mt-5 mb-5\">\n          <div class=\"row  d-flex justify-content-around\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-end\n            mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2\">\n                <button  type=\"button\" (click)=\"closeDialog()\"\n                  class=\"btn btn-secondary btn-default btn-lg col-lg-6 col-md-6 {{ dialogData?.cancelBtnCustomClass }}\">{{ dialogData?.cancelBtnText }}</button>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n                <button type=\"button\" class=\"btn btn-info btn btn-info btn-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 {{ dialogData?.submitBtnCustomClass }}\" (click)=\"addLicense();\">{{ dialogData?.submitBtnTxt }}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n </div>\n",
                        styles: [".btn-info{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000}.headerFont{font-family:Poppins,sans-serif;letter-spacing:0;margin-top:8px;color:#aba4a4e0;font-size:2.5rem}.pointer{cursor:pointer}.bT{border:2px solid #e6e1e18c!important;background-color:#f7f3f354!important;margin-right:24px}.card-header{background-color:#272727;box-shadow:0 1px 1px rgba(0,0,0,.5);color:#fff}.licNum{position:absolute;top:44px;right:267px;font-size:12px;margin-left:50px;color:#000000ad;font-family:'Encode Sans',sans-serif!important}::ng-deep mat-dialog-container{padding:0!important;overflow:hidden!important}:host ::ng-deep mat-dialog-content{max-height:91%!important;overflow-y:none!important;margin:0!important;height:100%!important}:host ::ng-deep mat-dialog-actions{margin:5px 10px!important}.btn-default{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#fff;color:#000}.btn-default:hover{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#757575;color:#fff}.btn-default:click{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#757575!important;color:#fff}.btn-default:active{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#757575;color:#fff}.bgWhite{background-color:#fff!important}.btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info:click{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e!important;color:#fff}.btn-info:active{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:grey}.whiteSpace{white-space:nowrap}"]
                    }] }
        ];
        /** @nocollapse */
        SukuAddLicenseModalComponent.ctorParameters = function () {
            return [
                { type: material.MatSnackBar },
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        SukuAddLicenseModalComponent.propDecorators = {
            dialogData: [{ type: i0.Input }]
        };
        return SukuAddLicenseModalComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuModalService = /** @class */ (function () {
        /*  */
        function SukuModalService(dialogService) {
            this.dialogService = dialogService;
            this.confirmationDialogClose = true;
            this.onDialogClose = new i0.EventEmitter();
            /*  */
            this.bSubject = new rxjs.BehaviorSubject('');
            this.confirmationDialogHeight = 'auto';
            this.confirmationDialogWidth = '500px';
        }
        /**
         * @param {?=} data
         * @return {?}
         */
        SukuModalService.prototype.openConfirmationDialog = /**
         * @param {?=} data
         * @return {?}
         */
            function (data) {
                var _this = this;
                /** @type {?} */
                var dialogRef = this.dialogService.open(SukuConfirmationComponent, {
                    width: this.confirmationDialogWidth,
                    height: this.confirmationDialogHeight,
                    disableClose: this.confirmationDialogClose,
                    data: {
                        icon: data ? data.icon : '',
                        iconCustomClass: data ? data.iconCustomClass : '',
                        iconId: data ? data.iconId : '',
                        titleOne: data ? data.titleOne : '',
                        titleOneId: data ? data.titleOneId : '',
                        titleTwo: data ? data.titleTwo : '',
                        titleTwoId: data ? data.titleOneId : '',
                        titleThree: data ? data.titleThree : '',
                        titleThreeId: data ? data.titleThreeId : '',
                        buttonLableOne: data ? data.buttonLableOne : '',
                        buttonLableOneId: data ? data.buttonLableOneId : '',
                        buttonLableTwo: data ? data.buttonLableTwo : '',
                        buttonLableTwoId: data ? data.buttonLableTwoId : '',
                        buttonCustomClass: data ? data.buttonCustomClass : ''
                    }
                });
                dialogRef.afterClosed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    _this.onDialogClose.emit(result);
                }));
            };
        /**
         * @param {?=} data
         * @return {?}
         */
        SukuModalService.prototype.openConfirmationModalDialog = /**
         * @param {?=} data
         * @return {?}
         */
            function (data) {
                var _this = this;
                this.bSubject.next(data);
                if (data.openDialog) {
                    /** @type {?} */
                    var dialogRef = this.dialogService.open(SukuConfirmationModalComponent, {
                        width: this.confirmationDialogWidth,
                        height: this.confirmationDialogHeight,
                        disableClose: this.confirmationDialogClose,
                        data: {
                            modalData: this.bSubject
                        }
                    });
                    console.log('dialogRef.componentInstance.data', dialogRef.componentInstance.data);
                    dialogRef.afterClosed().subscribe(( /**
                     * @param {?} result
                     * @return {?}
                     */function (result) {
                        _this.onDialogClose.emit(result);
                    }));
                }
            };
        /**
         * @param {?=} data
         * @return {?}
         */
        SukuModalService.prototype.openLicenseModalDialogDialog = /**
         * @param {?=} data
         * @return {?}
         */
            function (data) {
                var _this = this;
                /** @type {?} */
                var dialogRef = this.dialogService.open(SukuAddLicenseModalComponent, {
                    width: 'auto',
                    height: 'auto',
                    disableClose: this.confirmationDialogClose,
                    data: {
                        controlOne: data ? data.controlOne : '',
                        controlTwo: data ? data.controlTwo : '',
                        dateControlOne: data ? data.dateControlOne : '',
                        controlTwoRequiredd: data ? data.controlTwoRequiredd : '',
                        dateControlTwo: data ? data.dateControlTwo : '',
                        'controlOneRequired': data ? data.controlOneRequired : '',
                        controlTwoRequired: data ? data.controlTwoRequired : '',
                        dateControlOneRequired: data ? data.dateControlOneRequired : '',
                        dateControlTwoRequired: data ? data.dateControlTwoRequired : '',
                        'controlOnePatternEnabled': data ? data.controlOnePatternEnabled : '',
                        'controlTwoPatternEnabled': data ? data.controlTwoPatternEnabled : '',
                        'controlOnePattern': data ? data.controlOnePattern : '',
                        'controlTwoPattern': data ? data.controlTwoPattern : '',
                        'title': data ? data.title : '',
                        'subTitle': data ? data.subTitle : '',
                        'controlHint': data ? data.controlHint : '',
                        'hintClass': data ? data.hintClass : '',
                        'headerCutomStyle': data ? data.headerCutomStyle : '',
                        'startDateMaxDate': data ? data.startDateMaxDate : '',
                        'endDateMaxDate': data ? data.endDateMaxDate : '',
                        'startDateMinDate': data ? data.startDateMinDate : '',
                        'endDateMinDate': data ? data.endDateMinDate : '',
                        'controlOneId': data ? data.controlOneId : '',
                        controlTwoId: data ? data.controlTwoId : '',
                        dateControlOneId: data ? data.dateControlOneId : '',
                        dateControlTwoId: data ? data.dateControlTwoId : '',
                        controlTwoToolTip: data ? data.controlTwoToolTip : '',
                        controlOnePlaceholder: data ? data.controlOnePlaceholder : '',
                        controlTwoPlaceholder: data ? data.controlTwoPlaceholder : '',
                        dateControlOnePlaceholder: data ? data.dateControlOnePlaceholder : '',
                        dateControlTwoPlaceholder: data ? data.dateControlTwoPlaceholder : '',
                        controlOneRquiredErrorMsg: data ? data.controlOneRquiredErrorMsg : '',
                        controlTwoRquiredErrorMsg: data ? data.controlTwoRquiredErrorMsg : '',
                        controlTwoPatternErrorMsg: data ? data.controlTwoPatternErrorMsg : '',
                        dateControlOneRquiredErrorMsg: data ? data.dateControlOneRquired : '',
                        dateControlTwoRquiredErrorMsg: data ? data.dateControlTwoRquiredErrorMsg : '',
                        acceptDocment: data ? data.acceptDocment : '',
                        uploadImg: data ? data.uploadImg : '',
                        uploadTitle: data ? data.uploadTitle : '',
                        fileListTitle: data ? data.fileListTitle : '',
                        fileInputId: data ? data.fileInputId : '',
                        filesArray: data ? data.filesArray : '',
                        fileRemoveBtnTxt: data ? data.fileRemoveBtnTxt : '',
                        fileRemoveBtnId: data ? data.fileRemoveBtnId : '',
                        uploadImgAltTxt: data ? data.uploadImgAltTxt : '',
                        cancelBtnText: data ? data.cancelBtnText : '',
                        submitBtnTxt: data ? data.submitBtnTxt : '',
                        submitBtnCustomClass: data ? data.submitBtnCustomClass : '',
                        cancelBtnCustomClass: data ? data.cancelBtnCustomClass : '',
                    }
                });
                dialogRef.afterClosed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    _this.onDialogClose.emit(result);
                }));
            };
        SukuModalService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SukuModalService.ctorParameters = function () {
            return [
                { type: material.MatDialog }
            ];
        };
        /** @nocollapse */ SukuModalService.ngInjectableDef = i0.defineInjectable({ factory: function SukuModalService_Factory() { return new SukuModalService(i0.inject(i1.MatDialog)); }, token: SukuModalService, providedIn: "root" });
        return SukuModalService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuDropZoneDirective = /** @class */ (function () {
        function SukuDropZoneDirective() {
            this.dropped = new i0.EventEmitter();
            this.hovered = new i0.EventEmitter();
        }
        /**
         * @param {?} $event
         * @return {?}
         */
        SukuDropZoneDirective.prototype.onDrop = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                $event.preventDefault();
                this.dropped.emit($event.dataTransfer.files);
                this.hovered.emit(false);
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        SukuDropZoneDirective.prototype.onDragOver = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                $event.preventDefault();
                this.hovered.emit(true);
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        SukuDropZoneDirective.prototype.onDragLeave = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                $event.preventDefault();
                this.hovered.emit(false);
            };
        SukuDropZoneDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[dropZone]'
                    },] }
        ];
        /** @nocollapse */
        SukuDropZoneDirective.ctorParameters = function () { return []; };
        SukuDropZoneDirective.propDecorators = {
            dropped: [{ type: i0.Output }],
            hovered: [{ type: i0.Output }],
            onDrop: [{ type: i0.HostListener, args: ['drop', ['$event'],] }],
            onDragOver: [{ type: i0.HostListener, args: ['dragover', ['$event'],] }],
            onDragLeave: [{ type: i0.HostListener, args: ['dragleave', ['$event'],] }]
        };
        return SukuDropZoneDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuFileUploadComponent = /** @class */ (function () {
        function SukuFileUploadComponent(snackBar) {
            this.snackBar = snackBar;
            this.enableContainer = false;
            this.titleId = 'heading';
            this.titleColor = '#747470eb';
            this.titleWeight = '600';
            this.customClass = 'pt-4';
            this.dropZoneHeight = '12';
            this.dropZoneWidth = 'auto';
            this.imgHeight = '55';
            this.imgWidth = '';
            this.imgSrc = '';
            this.icon = 'suku-upload-icon';
            this.iconId = '';
            this.iconCustomClass = '';
            this.fileInputId = 'file';
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuFileUploadComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} event
         * @return {?}
         */
        SukuFileUploadComponent.prototype.toggleHover = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.isHovering = event;
                console.log('event', event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        SukuFileUploadComponent.prototype.startUpload = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var maxFileSize = 9999999;
                if (event.length > 0) {
                    for (var i = 0; i < event.length; i++) {
                        if (event[i].type == 'image/jpeg' || event[i].type == 'image/png' || event[i].type == 'image/jpg' ||
                            event[i].type == 'application/pdf') {
                            if (event[i].size <= maxFileSize) {
                                console.log('event', event[i]);
                                /** @type {?} */
                                var e = event[i];
                                this.action.emit(e);
                                (( /** @type {?} */(document.getElementById('file')))).value = '';
                            }
                            else {
                                this.snackbar('The file size cannot exceed 10 MB');
                            }
                        }
                        else {
                            this.snackbar('The file type jpg/jpeg/png/pdf files are allowed!');
                        }
                    }
                }
            };
        /**
         * @param {?} e
         * @return {?}
         */
        SukuFileUploadComponent.prototype.upload = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                console.log('file-upload');
                (( /** @type {?} */(document.getElementById('file')))).click();
                e.stopPropagation();
            };
        /**
         * @param {?} msg
         * @return {?}
         */
        SukuFileUploadComponent.prototype.snackbar = /**
         * @param {?} msg
         * @return {?}
         */
            function (msg) {
                this.snackBar.open(msg, 'close', {
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    duration: 3500
                });
            };
        SukuFileUploadComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-file-upload',
                        template: "<div class=\"col\">\n  <div class=\"col text-center p-0\" [ngClass]=\"{'upload-container': enableContainer}\">\n    <div class=\"text-center col-sm-12 p-4\">\n      <div class=\"dropzone\" dropZone [style.width.rem]=\"dropZoneWidth\" (hovered)=\"toggleHover($event)\"\n        (dropped)=\"startUpload($event)\" [class.hovering]=\"isHovering\" (click)=\"upload($event)\">\n        <h1 class=\" title {{customClass}}\" [style.font-size.rem]=\"titleSize\" [style.font-weight]=\"titleWeight\"\n          [style.color]=\"titleColor\" [id]=\"titleId\">Verify the authenticity of a document by uploading it here</h1>\n        <div class=\"file\">\n          <label class=\"file-label\" [style.height.rem]=\"dropZoneHeight\">\n            <span class=\"file-cta\">\n              <span class=\"file-icon\">\n                <img class=\"mt-5\" *ngIf=\"imgSrc\" [style.height.%]=\"imgHeight\" [style.width.%]=\"imgWidth\"\n                  [src]=\"imgSrc\" />\n                <i class=\"mt-5 {{icon}} {{iconCustomClass}}\" *ngIf=\"icon\" id=\"{{iconId}}\"></i>\n              </span>\n            </span>\n          </label>\n        </div>\n        <input class=\"file-input\" [id]=\"fileInputId\" type=\"file\" (change)=\"startUpload($event.target.files)\">\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.upload-container{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}h1{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-4);font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important;overflow:hidden;text-overflow:ellipsis!important;white-space:normal}.file-wrapper{cursor:pointer;display:inline-block;overflow:hidden;position:relative}.file-wrapper input{cursor:pointer;font-size:100px;-moz-opacity:.01;opacity:.01;position:absolute;right:0;top:0}.file-wrapper .button{border:solid 2px var(--suku-default-border-color);border-radius:28px 76px 63px;color:#000;cursor:pointer;display:inline-block;font-weight:700;margin-right:5px;padding:4px 18px}.dropzone{display:flex;align-items:center;justify-content:center;flex-direction:column;font-weight:200;height:30%;border:2px dashed var(--suku-default-border-color);border-radius:3px;background-color:#eaeaea5e;margin:1rem}.dropzone.hovering{border:2px solid var(--suku-default-border-color)}.dropzone .file-label{position:relative;z-index:2;display:flex}.file-icon{font-size:4em}.file-input{visibility:hidden;z-index:-20!important;pointer-events:none}"]
                    }] }
        ];
        /** @nocollapse */
        SukuFileUploadComponent.ctorParameters = function () {
            return [
                { type: material.MatSnackBar }
            ];
        };
        SukuFileUploadComponent.propDecorators = {
            enableContainer: [{ type: i0.Input, args: ['enable-container',] }],
            titleId: [{ type: i0.Input, args: ['title-Id',] }],
            titleSize: [{ type: i0.Input, args: ['title-size',] }],
            titleColor: [{ type: i0.Input, args: ['title-color',] }],
            titleWeight: [{ type: i0.Input, args: ['title-weight',] }],
            customClass: [{ type: i0.Input, args: ['custom-class',] }],
            dropZoneHeight: [{ type: i0.Input, args: ['drop-zone-height',] }],
            dropZoneWidth: [{ type: i0.Input, args: ['drop-zone-width',] }],
            imgHeight: [{ type: i0.Input, args: ['img-height',] }],
            imgWidth: [{ type: i0.Input, args: ['img-width',] }],
            imgSrc: [{ type: i0.Input, args: ['img-src',] }],
            icon: [{ type: i0.Input, args: ['icon',] }],
            iconId: [{ type: i0.Input, args: ['icon-id',] }],
            iconCustomClass: [{ type: i0.Input, args: ['icon-custom-class',] }],
            fileInputId: [{ type: i0.Input, args: ['file-input-id',] }],
            action: [{ type: i0.Output }]
        };
        return SukuFileUploadComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuFileUploadModule = /** @class */ (function () {
        function SukuFileUploadModule() {
        }
        SukuFileUploadModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [SukuFileUploadComponent, SukuDropZoneDirective],
                        exports: [SukuFileUploadComponent]
                    },] }
        ];
        return SukuFileUploadModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuFundingSourceComponent = /** @class */ (function () {
        function SukuFundingSourceComponent() {
            this.fundingDetails = [];
            this.iconClass = 'icon';
            this.fundingSourceLabel = {
                labelOne: 'Funding Sources',
                labelOneId: 'fundingSources',
                labelTwo: 'Default Funding Sources:',
                labelTwoId: 'defaultFundingSources:',
                labelThree: 'Current Funding Sources',
                labelThreeId: 'currentFundingSources',
                labelFour: 'No Funding Source Added!',
                labelFourId: 'noFundingSourceAdded!',
                labelFive: 'Default',
                labelFiveId: 'Default'
            };
            this.fundingSourceWidgetLabel = {
                labelOne: 'ACH Wallet',
                labelOneId: 'ACHWallet',
                labelTwo: 'Balance:',
                labelTwoId: 'Balance:'
            };
            this.fundingSourceWidgetButtonLabel = {
                labelOne: 'Remove',
                labelOneId: 'Remove',
                labelTwo: 'Make Default:',
                labelTwoId: 'Make Default:',
                labelThree: 'Transfer Balance',
                labelThreeId: 'Make Default:'
            };
            this.contentOne = '';
            /* output--actions */
            this.removeDefault = new i0.EventEmitter();
            this.makeDefaultAction = new i0.EventEmitter();
            this.removeSourceAction = new i0.EventEmitter();
            this.transferFundAction = new i0.EventEmitter();
            this.addSource = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuFundingSourceComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuFundingSourceComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-funding-source',
                        template: "<div class=\"d-flex col pt-5 p-0\">\r\n  <div class=\"col-sm-12 p-0\">\r\n    <!-- loader -start -->\r\n    <div class=\"col d-flex Rectangle-2 pt-5 mt-lg-4 mb-3\" *ngIf=\"!(fundingDetails?.length > 0)\">\r\n      <div class=\"col-sm-12 p-3\">\r\n        <div class=\"col-sm-12 d-flex justify-content-center\">\r\n          <mat-spinner diameter=\"55\"></mat-spinner>\r\n        </div>\r\n        <div class=\"mt-4 pb-3 col-sm-12 text-center\">\r\n          <span id=\"loading\">Please wait...</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- loader -end -->\r\n    <!-- fs-header-start -->\r\n    <div class=\"col-sm-12 pt-2 pb-2 funding-box-widget p-0\" *ngIf=\"(fundingDetails?.length > 0)\">\r\n      <div class=\"col-sm-12 pt-3 pb-3\">\r\n        <div class=\"col\">\r\n          <div class=\"col-sm-12\">\r\n            <h1 class=\"title\">{{fundingSourceLabel?.labelOne}}<span class=\"pl-3 c-pointer\"\r\n                id=\"{{fundingSourceLabel?.labelOneId}}\" (click)=\"addSource.emit()\">\r\n                <img src=\"../assets/images/plus_circle.png\" [class]=\"iconClass\" class=\"icon\" width=\"25px\" height=\"25px\"\r\n                  alt=\"plus-icon\">\r\n              </span>\r\n            </h1>\r\n          </div>\r\n          <div class=\"col-sm-12\">\r\n            <h2>{{fundingSourceLabel?.labelTwo}}<span class=\"pl-lg-2 pop-light\"\r\n                id=\"{{fundingSourceLabel?.labelTwoId}}\">{{contentOne || 'N/A'}}</span></h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- fs-header-end -->\r\n    <div class=\"col-sm-12 box-shadows d-flex p-0\" *ngIf=\"(fundingDetails?.length > 0)\">\r\n      <div class=\"row flex\">\r\n        <div class=\"col\">\r\n          <div class=\"col-sm-12 pt-4 pl-lg-5 pr-lg-0 pb-2\">\r\n            <p class=\"sub-title pt-3 pl-5\" [style.font-weight]=\"700\" *ngIf=\"contentOne\"\r\n              id=\"{{fundingSourceLabel?.labelThreeId}}\">\r\n              {{fundingSourceLabel?.labelThree}}\r\n            </p>\r\n            <p class=\"sub-title pt-3 pl-5\" [style.font-weight]=\"700\" *ngIf=\"!contentOne\"\r\n              id=\"{{fundingSourceLabel?.labelFourId}}\">\r\n              {{fundingSourceLabel?.labelFour}}\r\n            </p>\r\n          </div>\r\n          <div class=\"col-sm-12 pl-lg-5 pr-lg-5 pb-5\">\r\n            <div class=\"col\">\r\n              <div class=\"col-sm-12 pl-lg-5 pr-lg-5\">\r\n                <div class=\"col-lg-4 col-sm-12 pt-4 pl-lg-0 pr-lg-0\" *ngIf=\"contentOne\">\r\n                  <p class=\"pop f16 text-center mb-0\" id=\"{{fundingSourceLabel?.labelFiveId}}\">\r\n                    {{fundingSourceLabel?.labelFive}}\r\n                  </p>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <!-- funding-source-widget -->\r\n                  <div class=\"col-sm-12 col-lg-4 pl-lg-5 pr-lg-3 pb-3 pt-3 p-xs-0 mb-4 custom-width\"\r\n                    *ngFor=\"let item of fundingDetails; let in = index;\">\r\n                    <div class=\"col pr-lg-0 pl-lg-1 p-xs-0\">\r\n                      <div class=\"card pl-3\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"col-sm-12\">\r\n                            <p class=\"text-white mb-1 source-title\" *ngIf=\"!item?.balance\">{{item?.name || 'N/A'}}</p>\r\n                            <p class=\"text-white mb-1 source-title\" *ngIf=\"item?.balance\">\r\n                              {{fundingSourceWidgetLabel?.labelOne}}</p>\r\n                            <p class=\"text-white content-font\" *ngIf=\"!item?.balance\">\r\n                              XXXXXX{{ (item?.id) ? (item.id | slice:-4) : 'N/A'}}\r\n                            </p>\r\n                            <p class=\"text-white\" *ngIf=\"item?.balance\"><span\r\n                                class=\"pop f16\">{{fundingSourceWidgetLabel?.labelTwo}}</span>\r\n                              <span class=\"content-font\"> ${{item?.balance}}</span></p>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                          <!-- remove-fs-action -->\r\n                          <div class=\"col pl-5 pr-5 pb-3\" *ngIf=\"item?.defaultAccount\">\r\n                            <button type=\"button\" class=\"btn-lg btn-block btn-default\"\r\n                              (click)=\"removeSourceAction.emit(item);\"\r\n                              id=\"{{fundingSourceWidgetButtonLabel?.labelOneId}}\">{{fundingSourceWidgetButtonLabel?.labelOne}}</button>\r\n                          </div>\r\n                          <!-- default-fs-action -->\r\n                          <div class=\"col pl-5 pr-5 pb-3\" *ngIf=\"!item?.defaultAccount && !item?.balance\">\r\n                            <button type=\"button\" class=\"btn-lg btn-block btn-default\"\r\n                              (click)=\"makeDefaultAction.emit(item);\"\r\n                              id=\"{{fundingSourceWidgetButtonLabel?.labelTwoId}}\">{{fundingSourceWidgetButtonLabel?.labelTwo}}</button>\r\n                          </div>\r\n                          <!-- transfer-balance-action -->\r\n                          <div class=\"col pl-5 pr-5 pb-3\" *ngIf=\"item?.balance\">\r\n                            <button type=\"button\" class=\"btn-lg btn-block\"\r\n                              [ngClass]=\"{'btn-default': item?.defaultAccount, 'btn': !item?.defaultAccount}\"\r\n                              (click)=\"transferFundAction.emit();\"\r\n                              id=\"{{fundingSourceWidgetButtonLabel?.labelThreeId}}\">{{fundingSourceWidgetButtonLabel?.labelThree}}</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- fs-widget-end -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{background-color:#fff;font-size:12px!important;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;background-color:#a7bf2e}.btn:focus{border:2px solid #a7bf2e;background-color:#a7bf2e;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border-color:var(--suku-secondary-border-color)!important;font-size:12px!important;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.title{color:#fafaf8;font-size:28px;font-family:var(--suku-primary-font);font-weight:200!important}.funding-box-widget{width:100%;float:left;background:#2f2e2e;border-left:5px solid var(--suku-primary-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}.card-body{padding:0}.card{background:#2f2e2e;border-left:5px solid var(--suku-primary-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:20px 5px 0 15px;margin:0;color:#fff;height:160px}.card::after{background:linear-gradient(to right,rgba(255,255,255,0) 0,rgba(255,255,255,0) 77%,rgba(255,255,255,0) 92%,rgba(255,255,255,0) 100%);left:50px}.card-footer{padding:.2rem 1.25rem;background-color:#2f2e2e!important;border-top:none!important}.icon:hover{vertical-align:middle;border-style:none;width:26px;box-shadow:2px 2px 5px 0 rgba(0,0,0,.25);box-shadow:2px 2px 5px 0 #000;border-radius:27px;height:26px}h1{color:#fafaf8;font-size:24px;font-family:var(--suku-primary-font);font-weight:200!important}h2{color:#ccc;font-size:15px;font-family:var(--suku-primary-font);font-weight:600;letter-spacing:.15px}.source-title{font-family:var(--suku-primary-font);font-weight:700;font-size:15px!important}.pop-light{font-family:var(--suku-primary-font);font-weight:200!important;font-size:16px}.c-pointer{cursor:pointer;text-transform:capitalize}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:#fff}.pop{font-family:var(--suku-primary-font);font-weight:800}.sub-title{font-family:var(--suku-primary-font);font-weight:700;font-size:22px!important}.flex{margin-left:0;flex:0 0 100%;max-width:100%}.f16{font-size:16px}.content-font{font-family:var(--suku-primary-font);font-weight:200!important}.btn-default{border:1px solid #e9e9e900;border-radius:28px 76px 63px;background-color:#e9e9e9bd;color:#000;padding:.675rem .75rem;font-family:var(--suku-primary-font);font-weight:700}.btn-default:hover{border-radius:28px 76px 63px;padding:.675rem .75rem;font-size:12px;font-family:var(--suku-primary-font);font-weight:700;color:#fff}.btn{border:solid 1px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:var(--suku-primary-color);color:#fff;padding:.675rem .75rem;font-family:var(--suku-primary-font);font-weight:600}.btn:hover{border:solid 1px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:var(--suku-primary-color);color:#2f2e2e}.btn:focus{border:solid 1px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:var(--suku-primary-color);color:#000}.icon-size{font-size:74px!important;color:#a6bf2e}@media only screen and (max-width:768px){.content-font,.source-title{font-size:14px!important}.sub-title{font-size:18px!important}}@media only screen and (max-width:568px){.pl-xs-0{padding-left:0!important}.pr-xs-0{padding-right:0!important}.p-xs-0{padding:0!important}}@media only screen and (max-width:1100px){.custom-width{max-width:100%!important;flex:0 0 50%}}@media only screen and (max-width:992px){.custom-width{flex:0 0 100%;max-width:100%}}"]
                    }] }
        ];
        /** @nocollapse */
        SukuFundingSourceComponent.ctorParameters = function () { return []; };
        SukuFundingSourceComponent.propDecorators = {
            fundingDetails: [{ type: i0.Input }],
            iconClass: [{ type: i0.Input }],
            fundingSourceLabel: [{ type: i0.Input }],
            fundingSourceWidgetLabel: [{ type: i0.Input }],
            fundingSourceWidgetButtonLabel: [{ type: i0.Input }],
            contentOne: [{ type: i0.Input }],
            labelOneId: [{ type: i0.Input }],
            labelOneSize: [{ type: i0.Input }],
            labelOneColor: [{ type: i0.Input }],
            labelOneWeight: [{ type: i0.Input }],
            labelOneCustomClass: [{ type: i0.Input }],
            removeDefault: [{ type: i0.Output }],
            makeDefaultAction: [{ type: i0.Output }],
            removeSourceAction: [{ type: i0.Output }],
            transferFundAction: [{ type: i0.Output }],
            addSource: [{ type: i0.Output }]
        };
        return SukuFundingSourceComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuTransactionHistoryComponent = /** @class */ (function () {
        function SukuTransactionHistoryComponent() {
            this.transactionHistory = 'Transaction History';
            this.transactionDetailsId = 'transactionDetailsId';
            this.customClass = 'historyWidget p-4 pt-2 pb-3 text-white text-center ';
            this.tableBgColor = 'tableBg mb-0 pl-4 pr-5';
            this.transactionHistoryTittle = 'pop text-center mb-0';
            this.bgCustomClass = 'box-shadows mb-3 p-0';
            this.spinnerCustomClass = 'justify-content-center';
            this.spinnerRadius = '65';
            this.spinnerColor = 'primary';
            this.loadingCustomClass = 'mt-4 pb-3 col-sm-12 text-center';
            this.loaderMessage = 'Please wait... ';
            this.tableHeaderCustomClass = 'text-center';
            this.tableBodyCustomClass = 'text-left';
            this.buttonCustomClass = 'btn  btnCancel';
            this.typeId = 'typeId';
            this.myAccountId = 'myAccountId';
            this.counterPartyId = 'counterPartyId';
            this.amountId = 'AmountId';
            this.statusId = 'statusId';
            this.dateCreatedId = 'dateCreatedId';
            this.paymentManagementId = 'paymentManagementId';
            this.action = new i0.EventEmitter();
            this.cancelBtnLabel = 'Cancel';
            this.cancelId = 'cancelId';
            this.transactionDetails = [];
        }
        /**
         * @return {?}
         */
        SukuTransactionHistoryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.heading = {
                    type: 'Type',
                    myAccount: 'My Account',
                    counterparty: 'Counterparty',
                    amount: 'Amount',
                    status: 'Status',
                    dateInitiated: 'Initiated On',
                    dateCreated: 'Completed On',
                    paymentManagement: 'Payment Management'
                };
            };
        SukuTransactionHistoryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-transaction-history',
                        template: "<div class=\"col d-flex p-0\">\n  <div class=\"col-12 p-0\">\n    <div class=\"col-sm-12 {{customClass}}\">\n      <p [class]=\"transactionHistoryTittle\">{{transactionHistory | uppercase}}</p>\n    </div>\n    <div class=\"col-sm-12 table-responsive {{bgCustomClass}}\" id=\"transactionTable\">\n      <div class=\"col-sm-12 p-5\" *ngIf=\"!transactionDetails\">\n        <div class=\"col-sm-12 d-flex {{spinnerCustomClass}}\">\n          <mat-spinner color=\"{{spinnerColor}}\" diameter=\"{{spinnerRadius}}\"></mat-spinner>\n        </div>\n        <div [class]=\"loadingCustomClass\">\n          <span [style.font-size.rem]=\"loadingSize\" id=\"loading\" [style.color]=\"loadingColor\"\n            [style.font-weight]=\"loadingWeight\">{{loaderMessage}}</span>\n        </div>\n      </div>\n      <table class=\"col-sm-12 table table-striped {{tableBgColor}} responsive\" *ngIf=\"transactionDetails\"\n        id=\"transactionHisTable\">\n        <thead>\n          <tr>\n            <th scope=\"col\" [class]=\"tableHeaderCustomClass\" id=\"{{typeId}}\">{{heading.type}}</th>\n            <th scope=\"col\" [class]=\"tableHeaderCustomClass\" id=\"{{myAccountId}}\">{{heading.myAccount}}</th>\n            <th scope=\"col\" [class]=\"tableHeaderCustomClass\" id=\"{{counterPartyId}}\">{{heading.counterparty}}</th>\n            <th scope=\"col\" [class]=\"tableHeaderCustomClass\" id=\"{{amountId}}\">{{heading.amount}}</th>\n            <th scope=\"col\" [class]=\"tableHeaderCustomClass\" id=\"{{statusId}}\">{{heading.status}}</th>\n            <th scope=\"col\" [class]=\"tableHeaderCustomClass\" id=\"{{dateCreatedId}}\">{{heading.dateInitiated}}</th>\n            <th scope=\"col\" [class]=\"tableHeaderCustomClass\" id=\"{{dateCreatedId}}\">{{heading.dateCreated}}</th>\n            <th scope=\"col\" [class]=\"tableHeaderCustomClass\" id=\"{{paymentManagementId}}\">{{heading.paymentManagement}}\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr id=\"{{transactionDetailsId}}\" *ngFor=\"let transaction of transactionDetails\">\n            <td scope=\"row\"\n              class=\" {{tableBodyCustomClass}} {{( (transaction?.type) == 'outgoing') ? 'outgoing' : 'incoming'}}\">\n              <span class=\"pl-4\">{{transaction?.type || 'Not available'}}</span></td>\n            <td scope=\"row\" [class]=\"tableBodyCustomClass\"><span\n                class=\"pl-4\">{{transaction?.accountName || 'Not available'}}</span>\n            </td>\n            <td scope=\"row\" [class]=\"tableBodyCustomClass\"><span\n                class=\"pl-4\">{{transaction?.counterParty || 'Not available'}}</span>\n            </td>\n            <td scope=\"row\" [class]=\"tableBodyCustomClass\"><span\n                class=\"pl-4\">${{transaction?.amount || 'Not available'}}</span></td>\n            <td scope=\"row\"\n              class=\" {{tableBodyCustomClass}} {{( (transaction.status) == 'Failed') ? 'falied' : 'incoming'}}\">\n              <span class=\"pl-4\">{{transaction?.status || 'Not available'}}</span></td>\n            <td scope=\"row\" [class]=\"tableBodyCustomClass\"><span\n                class=\"pl-4\">{{transaction?.created | date:'d MMM yyyy h:mm:s a'  || 'Not available'}}</span>\n            </td>\n            <td scope=\"row\" [class]=\"tableBodyCustomClass\"><span class=\"pl-4\">\n                {{(transaction?.completedOn | date:'d MMM yyyy h:mm:s a') || 'Not available'}}</span>\n            </td>\n            <td [class]=\"tableBodyCustomClass\"><button id=\"{{cancelId}}\" *ngIf=\"transaction?.status=='pending'\"\n                (click)=\"action.emit(transaction);\" [class]=\"buttonCustomClass\">{{cancelBtnLabel}}</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{background-color:#fff;color:#000;font-size:12px!important;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.cancelText{font-size:12px;color:var(--suku-warning-color)}.outgoing{color:var(--suku-warning-color)}.incoming{color:var(--suku-filter-label-selected)}.falied{color:var(--suku-warning-color)}.defaultDiv{background-color:var(--suku-secondary-color);border-radius:30px}.responsive{overflow-x:auto}.mT-35{margin-top:18%}#transactionTable{max-height:287px;overflow-x:auto;overflow-y:auto}#transactionHisTable{white-space:nowrap}.fontPoppins{font-family:var(--suku-primary-font)!important}.btn{border:solid 2px var(--suku-primary-border-color);border-radius:28px 76px 63px;background-color:var(--suku-homepage-bg);color:var(--suku-filter-label-selected);padding:.375rem .75rem;font-weight:700;font-family:var(--suku-primary-font)!important}.btnCancel{border:solid 2px var(--suku-primary-border-color);border-radius:28px 76px 63px;background-color:var(--suku-homepage-bg);color:var(--suku-warning-color);padding:.475rem 2.95rem;font-size:10px;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:solid 2px var(--suku-primary-border-color);border-radius:28px 76px 63px;background-color:var(--suku-primary-color);color:var(--suku-text-label-two)}.btn:focus{outline:0!important;box-shadow:none!important;color:var(--suku-filter-label-selected)}.tableBg{background-color:var(--suku-homepage-bg)}.pT-5{padding-top:2%}.historyWidget{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:var(--suku-homepage-bg)}.pop{font-family:var(--suku-primary-font);font-weight:600;font-size:20px}.table{font-family:var(--suku-primary-font)}td{border:none}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.03)}::-webkit-scrollbar{width:3px;height:3px}::-webkit-scrollbar:vertical{width:3px!important}::-webkit-scrollbar-track{-webkit-box-shadow:inset 10px 5px 6px #27272f36;border-radius:10px;box-shadow:inset 10px 5px 6px #27272f36}::-webkit-scrollbar-thumb{border-radius:32px;box-shadow:0 0 0 #000;-webkit-box-shadow:inset 28px 28px 28px 28px #2b30348f}"]
                    }] }
        ];
        /** @nocollapse */
        SukuTransactionHistoryComponent.ctorParameters = function () { return []; };
        SukuTransactionHistoryComponent.propDecorators = {
            transactionHistory: [{ type: i0.Input, args: ['transaction-history',] }],
            transactionDetailsId: [{ type: i0.Input, args: ['transaction-details-id',] }],
            heading: [{ type: i0.Input }],
            customClass: [{ type: i0.Input, args: ['custom-class',] }],
            tableBgColor: [{ type: i0.Input, args: ['table-bg-color',] }],
            transactionHistoryTittle: [{ type: i0.Input, args: ['transaction-history-tittle',] }],
            bgCustomClass: [{ type: i0.Input, args: ['bg-custom-class',] }],
            spinnerCustomClass: [{ type: i0.Input, args: ['spinner-custom-class',] }],
            spinnerRadius: [{ type: i0.Input, args: ['spinner-radius',] }],
            spinnerColor: [{ type: i0.Input, args: ['spinner-color',] }],
            loadingCustomClass: [{ type: i0.Input, args: ['loading-custom-class',] }],
            loaderMessage: [{ type: i0.Input, args: ['loader-message',] }],
            loadingColor: [{ type: i0.Input, args: ['loading-color',] }],
            loadingSize: [{ type: i0.Input, args: ['loading-size',] }],
            loadingWeight: [{ type: i0.Input, args: ['loading-weight',] }],
            tableHeaderCustomClass: [{ type: i0.Input, args: ['table-header-custom-class',] }],
            tableBodyCustomClass: [{ type: i0.Input, args: ['table-body-custom-class',] }],
            buttonCustomClass: [{ type: i0.Input, args: ['button-custom-class',] }],
            typeId: [{ type: i0.Input, args: ['type-id',] }],
            myAccountId: [{ type: i0.Input, args: ['my-account-id',] }],
            counterPartyId: [{ type: i0.Input, args: ['counter-party-id',] }],
            amountId: [{ type: i0.Input, args: ['amount-id',] }],
            statusId: [{ type: i0.Input, args: ['status-id',] }],
            dateCreatedId: [{ type: i0.Input, args: ['date-created-id',] }],
            paymentManagementId: [{ type: i0.Input, args: ['payment-management-Id',] }],
            action: [{ type: i0.Output }],
            cancelBtnLabel: [{ type: i0.Input, args: ['cancel-btn-label',] }],
            cancelId: [{ type: i0.Input, args: ['cancel-id',] }],
            transactionDetails: [{ type: i0.Input }]
        };
        return SukuTransactionHistoryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuAddIconComponent = /** @class */ (function () {
        function SukuAddIconComponent() {
            this.id = 'addNewSellListing';
            this.icon = 'suku-plus-icon';
            this.customClass = 'add-widget c-pointer';
            this.iconId = 'icon';
            this.iconCustomClass = 'suku-md';
        }
        /**
         * @return {?}
         */
        SukuAddIconComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuAddIconComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-add-icon',
                        template: "<div class=\"d-flex\">\n  <div class=\"add-btn mt-1\">\n    <span>\n      <i class=\"{{icon}} {{iconCustomClass}}\" [id]=\"iconId\" [style.color]=\"iconColor\"></i>\n      <span [style.font-size.px]=\"size\" [style.color]=\"color\" [class]=\"customClass\" [style.font-weight]=\"weight\">\n        <ng-content></ng-content>\n      </span>\n    </span>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.c-pointer{cursor:pointer!important}.add-widget{font-family:var(--suku-ternary-font);font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:var(--suku-text-label-one)!important;text-decoration:underline;text-transform:uppercase}.add-btn{width:100%;float:left}.add-btn span{width:100px;height:33px;float:left;font-family:var(--suku-ternary-font);text-transform:uppercase;line-height:32px;text-align:left;text-decoration:none;position:relative;padding:0 0 0 20px}.add-btn span i{float:none;display:inline-block;vertical-align:middle;text-align:center;line-height:31px;border-radius:33px;position:absolute;top:0;left:0;z-index:10}.add-btn a:hover{text-decoration:underline}"]
                    }] }
        ];
        /** @nocollapse */
        SukuAddIconComponent.ctorParameters = function () { return []; };
        SukuAddIconComponent.propDecorators = {
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            icon: [{ type: i0.Input }],
            customClass: [{ type: i0.Input }],
            iconId: [{ type: i0.Input }],
            iconColor: [{ type: i0.Input }],
            iconCustomClass: [{ type: i0.Input }]
        };
        return SukuAddIconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuAddressWidgetComponent = /** @class */ (function () {
        function SukuAddressWidgetComponent() {
            this.id = '';
            this.size = '0.9';
            this.color = '#3e3e3e';
            this.weight = '500';
            this.customClass = 'pl-3 mt-auto mb-auto';
            this.icon = 'suku-map-pin';
            this.iconId = 'phoneIcon';
            this.iconCustomClass = 'custom-icon';
            this.widgetCustomClass = 'col';
        }
        /**
         * @return {?}
         */
        SukuAddressWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuAddressWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-address-widget',
                        template: "<div [class]=\"widgetCustomClass\">\n  <span class=\"row mb-1 mt-1\">\n    <i class=\"{{icon}} icon {{iconCustomClass}}\" [id]=\"iconId\"></i>\n    <h2 [style.font-size.rem]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\"\n      [style.color]=\"color\">\n      <ng-content></ng-content>\n    </h2>\n  </span>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:var(--suku-text-label-one);position:absolute;display:inline;word-break:break-all!important;margin-left:14px;padding-top:3px}.custom-icon{height:2em!important;width:2em!important;background-size:1.2em!important;margin:.1em}"]
                    }] }
        ];
        /** @nocollapse */
        SukuAddressWidgetComponent.ctorParameters = function () { return []; };
        SukuAddressWidgetComponent.propDecorators = {
            id: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            customClass: [{ type: i0.Input }],
            icon: [{ type: i0.Input, args: ['icon',] }],
            iconId: [{ type: i0.Input, args: ['icon-id',] }],
            iconCustomClass: [{ type: i0.Input, args: ['icon-custom-class',] }],
            widgetCustomClass: [{ type: i0.Input, args: ['widget-custom-class',] }]
        };
        return SukuAddressWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuBeneficialOwnerComponent = /** @class */ (function () {
        function SukuBeneficialOwnerComponent(snackBar) {
            this.snackBar = snackBar;
            this.title = 'Beneficial Owners';
            this.titleClass = 'mb-3 mt-5 ';
            this.titleCustomClass = '';
            this.titleid = '';
            this.titleWeight = '';
            this.titleColor = '';
            this.titleSize = '';
            this.control = '';
            this.content = "I, Daisy, hereby certify, to the best of my knowledge, that the\n  information provided above is complete and correct.";
            this.type = 'info';
            this.btnOne = 'Submit Beneficial Owner';
            this.btnOneId = 'submitBeneficialOwner';
            this.btnOneCustomClass = '';
            this.btnOneDisable = false;
            this.btnTwo = 'Agree & Continue';
            this.btnTwoCustomClass = '';
            this.btnTwoId = 'agreeBtn';
            this.btnTwoDisable = false;
            this.labelOne = 'Add New Beneficial Owner';
            this.labelOneId = 'addOwner';
            this.countrySelect = new i0.EventEmitter();
            this.stateSelect = new i0.EventEmitter();
            this.upload = new i0.EventEmitter();
            this.submitOwner = new i0.EventEmitter();
            this.add = new i0.EventEmitter();
            this.submitData = new i0.EventEmitter();
            this.verify = new i0.EventEmitter();
            this.selected = [];
            this.toggle = [];
        }
        /**
         * @return {?}
         */
        SukuBeneficialOwnerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.formValid = true;
                for (var j = 0; j < this.form.get(this.arrayControlName)['controls'].length; j++) {
                    this.toggle[j] = false;
                }
                this.selected[0] = 0;
                this.toggle[0] = true;
                this.btnTwoDisable = true;
            };
        /**
         * @param {?} i
         * @return {?}
         */
        SukuBeneficialOwnerComponent.prototype.active = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                this.selected[i] = i;
                this.toggle[i] = !this.toggle[i];
                for (var j = 0; j < this.form.get(this.arrayControlName)['controls'].length; j++) {
                    if (i != j) {
                        this.selected[j] = null;
                    }
                }
                if (!this.toggle[i]) {
                    this.selected[i] = null;
                }
                else {
                    for (var j = 0; j < this.form.get(this.arrayControlName)['controls'].length; j++) {
                        if (i != j) {
                            this.toggle[j] = false;
                        }
                    }
                }
            };
        /**
         * @return {?}
         */
        SukuBeneficialOwnerComponent.prototype.action = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var controlName = this.control;
                if (this.form.get(controlName).value) {
                    this.btnTwoDisable = false;
                    this.verify.emit();
                }
                else {
                    this.btnTwoDisable = true;
                }
            };
        /**
         * @param {?} val
         * @param {?} i
         * @return {?}
         */
        SukuBeneficialOwnerComponent.prototype.countrySelectAction = /**
         * @param {?} val
         * @param {?} i
         * @return {?}
         */
            function (val, i) {
                if (val) {
                    /** @type {?} */
                    var data = {
                        countryDetails: JSON.parse(val),
                        index: i
                    };
                    this.countrySelect.emit(data);
                }
            };
        /**
         * @return {?}
         */
        SukuBeneficialOwnerComponent.prototype.agree = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var formData = this.form.value;
                this.submitOwner.emit(formData);
            };
        /**
         * @param {?} msg
         * @return {?}
         */
        SukuBeneficialOwnerComponent.prototype.snackbar = /**
         * @param {?} msg
         * @return {?}
         */
            function (msg) {
                this.snackBar.open(msg, 'close', {
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    duration: 3500
                });
            };
        SukuBeneficialOwnerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-beneficial-owner',
                        template: "<form [formGroup]=\"form\">\n  <div class=\"col\">\n    <label class=\"titleClass\">\n      <strong [style.font-size.px]=\"titleSize\" [class]=\"titleCustomClass\" id=\"{{titleid}}\"\n        [style.font-weight]=\"titleWeight\" [style.color]=\"titleColor\">{{title}}</strong>\n    </label>\n    <div class=\"col bg pl-5 pr-5 pt-5 pb-3 mb-5\">\n      <div class=\"col p-0\" formArrayName=\"{{arrayControlName}}\" id=\"beneficialOwnerBlock\">\n        <div class=\"col p-0\" *ngFor=\"let detail of form.get(arrayControlName)['controls']; let i=index\"\n          [formGroupName]=\"i\">\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\n            (click)=\"active(i)\">\n            <div class=\"row\">\n              <label class=\"m-2 pl-3 owner c-pointer\">\n                Beneficial Owner {{i+1}}\n              </label>\n              <label class=\"d-flex justify-content-end col pl-0 c-pointer\">\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\n                </span>\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\n                </span>\n              </label>\n            </div>\n          </div>\n          <div class=\"col mt-4 collapse\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\"\n            id=\"ownerBlock{{i}}\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"First Name\" id=\"firstname\" formControlName=\"firstName\" name=\"firstName\">\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Last Name\" id=\"lastname\" formControlName=\"lastName\" name=\"lastName\">\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field>\n                  <input matInput [matDatepicker]=\"myDatepicker\" id=\"dob\" placeholder=\"Date of birth\"\n                    formControlName=\"dateOfBirth\" name=\"dateOfBirth\">\n                  <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n                  <mat-datepicker #myDatepicker></mat-datepicker>\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"SSN\" id=\"ssn\" formControlName=\"ssn\" name=\"ssn\">\n                  <mat-hint>hint: 1234-12-123</mat-hint>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"col p-0\" formGroupName=\"address\">\n              <div class=\"col p-0\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Address 1\" id=\"address1\" formControlName=\"address1\" name=\"address1\">\n                </mat-form-field>\n              </div>\n              <div class=\"col p-0\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Address 2\" id=\"address2\" formControlName=\"address2\" name=\"address2\">\n                </mat-form-field>\n              </div>\n              <div class=\"col p-0\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <mat-select #t (selectionChange)=\"countrySelectAction(t.value,i)\" id=\"country\"\n                        formControlName=\"country\" name=\"country\" placeholder=\"country\">\n                        <mat-option value=\"\">Select Country</mat-option>\n                        <mat-option *ngFor=\"let item of countriesList; let i = index\" value=\"{{ item | json }}\">\n                          {{ item.countryName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <mat-select #s (selectionChange)=\"stateSelect.emit(s.value)\" formControlName=\"stateProvinceRegion\"\n                        id=\"stateProvinceRegion\" name=\"stateProvinceRegion\" placeholder=\"state\">\n                        <mat-option value=\"\">Select State</mat-option>\n                        <mat-option *ngFor=\"let item of statesList; let i = index\" value=\"{{ item.stateShortName  }}\">{{\n                          item.stateName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <input matInput placeholder=\"City\" id=\"city\" formControlName=\"city\" name=\"city\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <input matInput #postalcode maxlength=\"5\" placeholder=\"Postal Code\" id=\"postalCode\"\n                        formControlName=\"postalCode\" name=\"postalCode\">\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col mt-5 mb-3\">\n        <div class=\"row\">\n          <div class=\"col mt-3 mb-2\">\n            <span class=\"add d-flex c-pointer\" id=\"labelOneId\" (click)=\"add.emit()\">\n              <i class=\"fa fa-plus-circle pr-3 add-icon\"></i>\n              <span class=\"mt-1\">{{labelOne}}</span></span>\n          </div>\n          <div class=\"col d-flex justify-content-end  mt-3 mb-3 pr-sm-3 mr-sm-2\">\n            <button class=\"suku-i suku-{{type}} {{btnOneCustomClass}}\" [id]=\"btnOneId\"\n              [ngClass]=\"{'disabled': btnOneDisable}\" (click)=\"agree()\" [disabled]=\"btnOneDisable\">{{btnOne}}</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"col mt-5\">\n          <div class=\"row\">\n            <span class=\"pt-1\">\n              <mat-checkbox color=\"primary\" type=\"checkbox\" (change)=\"action()\" id=\"agree\" formControlName=\"{{control}}\"\n                name=\"{{control}}\">\n              </mat-checkbox>\n            </span>\n            <span class=\"col terms\" id=\"content\">{{content}}\n            </span>\n          </div>\n        </div>\n        <div class=\"col d-flex justify-content-center mt-4 mb-3\">\n          <button class=\"suku-i suku-{{type}} {{btnTwoCustomClass}}\" [id]=\"btnTwoId\"\n            [ngClass]=\"{'disabled': btnTwoDisable}\" (click)=\"submitData.emit()\"\n            [disabled]=\"btnTwoDisable\">{{btnTwo}}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}:root{font-size:17px!important}.bg{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.terms{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-5)}label{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-6);font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px}.owner{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-4);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px}.card-line{background-color:var(--suku-default-bg);color:#2c2727;height:46px;border-radius:2px;letter-spacing:.5px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2);border-top:3px solid #bfd131c9}.fullwidth{width:100%}.c-pointer{cursor:pointer}.icon{font-size:var(--suku-font-size-8);color:#ccda5c!important}.add-icon{font-size:var(--suku-font-size-10);color:var(--suku-primary-color)}.add{font-family:var(--suku-primary-font);font-weight:800}.suku-i{border:2px solid;border-radius:28px 76px 63px;color:#3e3e3e;font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;padding:.55rem 2rem!important}.suku-i:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff!important;cursor:pointer}.suku-i:focus{outline:0!important}.suku.disabled:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:var(--suku-text-link);cursor:not-allowed}.suku-info{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-text-label-two);color:var(--suku-text-heading)}.suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color)!important;color:#fff!important}.suku-info:active{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.suku-info.disabled{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff!important;color:grey!important}.suku-info.disabled.focus,.suku-info.disabled:focus,.suku-info.disabled:hover,.suku-info[disabled].focus,.suku-info[disabled]:focus,.suku-info[disabled]:hover,fieldset[disabled] .suku-info.focus,fieldset[disabled] .suku-info:focus,fieldset[disabled] .suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:grey}.suku-info.focus,.suku-info:focus{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.open>.dropdown-toggle .suku-info.focus,.open>.dropdown-toggle .suku-info:focus,.open>.dropdown-toggle.suku-info:hover,.suku-info.active.focus,.suku-info.active:focus,.suku-info.active:hover,.suku-info:active.focus,.suku-info:active:focus,.suku-info:active:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.show>.suku-info.dropdown-toggle,.suku-info:not(:disabled):not(.disabled).active,.suku-info:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}.show>.suku-info.dropdown-toggle:focus,.suku-info.focus,.suku-info:focus,.suku-info:not(:disabled):not(.disabled).active:focus,.suku-info:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}.suku-default{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-bg-secondary);color:var(--suku-text-label-one)}.suku-default:active,.suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.suku-default.disabled{border:2px solid;border-color:var(--suku-text-info);background-color:#fff;color:grey}.suku-default.disabled.focus,.suku-default.disabled:focus,.suku-default.disabled:hover,.suku-default[disabled].focus,.suku-default[disabled]:focus,.suku-default[disabled]:hover,fieldset[disabled] .suku-default.focus,fieldset[disabled] .suku-default:focus,fieldset[disabled] .suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:#fff!important;color:grey}.suku-default.focus,.suku-default:focus{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.open>.dropdown-toggle .suku-default.focus,.open>.dropdown-toggle .suku-default:focus,.open>.dropdown-toggle.suku-default:hover,.suku-default.active.focus,.suku-default.active:focus,.suku-default.active:hover,.suku-default:active.focus,.suku-default:active:focus,.suku-default:active:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.show>.suku-default.dropdown-toggle,.suku-default:not(:disabled):not(.disabled).active,.suku-default:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-text-info);border-color:var(--suku-text-info)}.show>.suku-default.dropdown-toggle:focus,.suku-default.focus,.suku-default:focus,.suku-default:not(:disabled):not(.disabled).active:focus,.suku-default:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}.disabled:hover{cursor:not-allowed!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuBeneficialOwnerComponent.ctorParameters = function () {
            return [
                { type: material.MatSnackBar }
            ];
        };
        SukuBeneficialOwnerComponent.propDecorators = {
            form: [{ type: i0.Input }],
            title: [{ type: i0.Input }],
            titleClass: [{ type: i0.Input }],
            titleCustomClass: [{ type: i0.Input }],
            titleid: [{ type: i0.Input }],
            titleWeight: [{ type: i0.Input }],
            titleColor: [{ type: i0.Input }],
            titleSize: [{ type: i0.Input }],
            countriesList: [{ type: i0.Input }],
            statesList: [{ type: i0.Input }],
            formValid: [{ type: i0.Input }],
            control: [{ type: i0.Input }],
            arrayControlName: [{ type: i0.Input }],
            content: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            btnOne: [{ type: i0.Input, args: ['btn-one',] }],
            btnOneId: [{ type: i0.Input, args: ['btn-one-id',] }],
            btnOneCustomClass: [{ type: i0.Input, args: ['btn-one-custom-class',] }],
            btnOneDisable: [{ type: i0.Input, args: ['btn-one-disable',] }],
            btnTwo: [{ type: i0.Input, args: ['btn-two',] }],
            btnTwoCustomClass: [{ type: i0.Input, args: ['btn-two-custom-class',] }],
            btnTwoId: [{ type: i0.Input, args: ['btn-two-id',] }],
            btnTwoDisable: [{ type: i0.Input, args: ['btn-two-disable',] }],
            labelOne: [{ type: i0.Input, args: ['label-one',] }],
            labelOneId: [{ type: i0.Input, args: ['label-one-id',] }],
            countrySelect: [{ type: i0.Output }],
            stateSelect: [{ type: i0.Output }],
            upload: [{ type: i0.Output }],
            submitOwner: [{ type: i0.Output }],
            add: [{ type: i0.Output }],
            submitData: [{ type: i0.Output }],
            verify: [{ type: i0.Output }]
        };
        return SukuBeneficialOwnerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuBidInfoComponent = /** @class */ (function () {
        function SukuBidInfoComponent() {
            this.bids = '374';
            this.bidSize = '17';
            this.bidColor = 'black';
            this.bidWeight = '600';
            this.bidCustomClass = '';
            this.bidHeadingCustomClass = '';
            this.percentcustomClass = '';
            this.percentageHeadingcustomClass = '';
            this.bidHeading = 'bids';
            this.bidHeadingSize = '14';
            this.bidHeadingColor = 'black';
            this.bidHeadingWeight = '500';
            this.id = 'bidInfo';
            this.percent = '10%';
            this.percentSize = '17';
            this.percentColor = 'black';
            this.percentWeight = '600';
            this.percentHeading = 'fulfill';
            this.percentHeadingSize = '14';
            this.percentHeadingColor = 'black';
            this.percentHeadingWeight = '500';
        }
        /**
         * @return {?}
         */
        SukuBidInfoComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuBidInfoComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-bid-info',
                        template: "<span class=\"row\">\n  <span class=\"m-2 mr-3\">\n    <h1 [style.font-size.px]=\"bidSize\" [class]=\"bidCustomClass\" [style.font-weight]=\"bidWeight\" [style.color]=\"bidColor\"\n      id=\"{{id}}\">\n      {{bids}}\n    </h1>\n    <h2 [style.font-size.px]=\"bidHeadingSize\" [class]=\"bidHeadingCustomClass\" id=\"{{id}}\" [style.font-weight]=\"bidHeadingWeight\"\n      [style.color]=\"bidHeadingColor\">\n      {{bidHeading}}\n    </h2>\n  </span>\n  <span class=\"m-2 mr-3\">\n    <h1 [style.font-size.px]=\"percentSize\" [class]=\"percentcustomClass\" [style.font-weight]=\"percentWeight\"\n      [style.color]=\"percentColor\" id=\"{{id}}\">\n      {{percent}}\n    </h1>\n    <h2 [style.font-size.px]=\"percentHeadingSize\" [class]=\"percentageHeadingcustomClass\" id=\"{{id}}\"\n      [style.font-weight]=\"percentHeadingWeight\" [style.color]=\"percentHeadingColor\">\n      {{percentHeading}}\n    </h2>\n  </span>\n</span>",
                        styles: ["h1{font-family:Poppins,sans-serif;font-size:20px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-all!important}h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuBidInfoComponent.ctorParameters = function () { return []; };
        SukuBidInfoComponent.propDecorators = {
            bids: [{ type: i0.Input }],
            bidSize: [{ type: i0.Input, args: ['bid-size',] }],
            bidColor: [{ type: i0.Input, args: ['bid-color',] }],
            bidWeight: [{ type: i0.Input, args: ['bid-weight',] }],
            bidCustomClass: [{ type: i0.Input, args: ['bid-customclass',] }],
            bidHeadingCustomClass: [{ type: i0.Input, args: ['bid-headingcustomclass',] }],
            percentcustomClass: [{ type: i0.Input, args: ['percent-customclass',] }],
            percentageHeadingcustomClass: [{ type: i0.Input, args: ['percent-headingcustomclass',] }],
            bidHeading: [{ type: i0.Input, args: ['bid-heading',] }],
            bidHeadingSize: [{ type: i0.Input, args: ['bid-heding-size',] }],
            bidHeadingColor: [{ type: i0.Input, args: ['bid-heading-color',] }],
            bidHeadingWeight: [{ type: i0.Input, args: ['bid-heading-weight',] }],
            id: [{ type: i0.Input }],
            percent: [{ type: i0.Input }],
            percentSize: [{ type: i0.Input, args: ['percentage-size',] }],
            percentColor: [{ type: i0.Input, args: ['percentage-color',] }],
            percentWeight: [{ type: i0.Input, args: ['percentage-weight',] }],
            percentHeading: [{ type: i0.Input, args: ['percentage-heading',] }],
            percentHeadingSize: [{ type: i0.Input, args: ['percentage-heading-size',] }],
            percentHeadingColor: [{ type: i0.Input, args: ['percentage-heading-color',] }],
            percentHeadingWeight: [{ type: i0.Input, args: ['percentage-heading-weight',] }]
        };
        return SukuBidInfoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuLargeBidTagComponent = /** @class */ (function () {
        function SukuLargeBidTagComponent() {
            this.priceFontSize = '50px';
            this.priceFontColor = '#ffffff';
            this.listFontColor = '';
            this.listFontSize = '16';
            this.totalPriceLabel = 'Total Price';
            this.quantityLabel = 'Quantity';
            this.minQtyLabel = '';
            this.productPrice = 50;
            this.productTotalPrice = '50';
            this.productQuantity = 1;
            this.paymentMethod = 'USD';
            this.priceFontWeight = 100;
        }
        /**
         * @return {?}
         */
        SukuLargeBidTagComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuLargeBidTagComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-bid-tag-type-two',
                        template: "<aside>\n  <div class=\"prize\"> <span [style.color]=\"priceFontColor\" [style.font-size.px]=\"priceFontSize\"\n      [style.font-weight]=\"priceFontWeight\"> {{(paymentMethod == 'USD') ? '$': ''}}{{productPrice}}</span>\n    <sub>{{(paymentMethod != 'USD') ? paymentMethod : ''}} / UNIT</sub>\n  </div>\n  <ul class=\"bulletPoint\" [style.color]=\"listFontColor\" [style.font-size.px]=\"listFontSize\"\n    [style.font-weight]=\"listFontWeight\">\n    <li>{{totalPriceLabel}}: {{(paymentMethod == 'USD') ? '$': ''}}{{productTotalPrice}}\n      {{(paymentMethod != 'USD') ? paymentMethod : ''}}</li>\n    <li>{{quantityLabel}}: {{productQuantity}}</li>\n    <li *ngIf=\"minQtyLabel\">{{minQtyLabel}}: {{minimumQuantity}}</li>\n  </ul>\n</aside>",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);aside{width:100%;float:left;background:#353a3e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:17px 30px;margin:0 0 18px}aside:last-child{margin-bottom:0}aside .prize{width:100%;float:left;font-family:Poppins,sans-serif!important;font-size:50px;color:#fff;line-height:1em;margin:0 0 12px}aside .prize sub{font-size:38%;color:rgba(255,255,255,.5);top:-2px}aside ul{width:100%;float:left;font-family:Poppins,sans-serif!important;padding:0;margin:0}aside ul li{width:100%;float:left;color:rgba(255,255,255,.5);letter-spacing:.02em;padding:0 0 4px;margin:0}.bulletPoint li{list-style-type:none}"]
                    }] }
        ];
        /** @nocollapse */
        SukuLargeBidTagComponent.ctorParameters = function () { return []; };
        SukuLargeBidTagComponent.propDecorators = {
            priceFontSize: [{ type: i0.Input }],
            priceFontColor: [{ type: i0.Input }],
            listFontColor: [{ type: i0.Input }],
            listFontSize: [{ type: i0.Input }],
            totalPriceLabel: [{ type: i0.Input }],
            quantityLabel: [{ type: i0.Input }],
            minQtyLabel: [{ type: i0.Input }],
            productPrice: [{ type: i0.Input }],
            productTotalPrice: [{ type: i0.Input }],
            productQuantity: [{ type: i0.Input }],
            minimumQuantity: [{ type: i0.Input }],
            paymentMethod: [{ type: i0.Input }],
            priceFontWeight: [{ type: i0.Input }],
            listFontWeight: [{ type: i0.Input }]
        };
        return SukuLargeBidTagComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuBidWidgetTagComponent = /** @class */ (function () {
        function SukuBidWidgetTagComponent() {
            this.paymentMethod = 'USD';
            this.productPrice = 50;
            this.productTotalPrice = '50';
            this.productQuantity = 1;
            this.paymentTerms = 1;
            this.deliveryTerms = 1;
            this.paymentMethodLabel = 'Payment method';
            this.paymentTermsLabel = 'Payment time frame';
            this.deliveryTermsLabel = 'Delivery terms';
            this.totalPriceLabel = 'Total Price';
            this.quantityLabel = 'Quantity';
            this.minQtyLabel = '';
            this.titleText = 'Original Ask';
            this.documents = [];
            this.customClass = 'col p-0';
            this.priceFontSize = '50px';
            this.priceFontColor = '#ffffff';
            this.listFontColor = '';
            this.listFontSize = '1.5';
            this.bidTitleFontColor = '';
            this.bidTitleFontSize = '';
            this.bidDetailFontColor = '';
            this.bidDetailFontSize = '';
            this.priceFontWeight = '';
            this.listFontWeight = '';
            this.bidTitleFontWeight = '';
            this.bidDetailFontWeight = '';
            this.titleFontColor = '';
            this.titleFontSize = '';
            this.titleFontWeight = '';
            this.productPaymentCustomClass = 'productPayment';
            this.bidDetailCustomClass = 'bid-details';
            this.articleAlignmentCustomClass = 'article';
        }
        /**
         * @return {?}
         */
        SukuBidWidgetTagComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuBidWidgetTagComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-bid-widget',
                        template: "<div [class]=\"customClass\">\n    <div class=\"{{articleAlignmentCustomClass}} selected\">\n      <div class=\"title-txt\" [style.color]=\"titleFontColor\" [style.font-size.rem]=\"titleFontSize\"\n        [style.font-weight]=\"titleFontWeight\">{{titleText}}</div>\n      <aside [style.backgroundColor]=\"asideBgColor\">\n        <div class=\"prize\"> <span [style.color]=\"priceFontColor\" [style.font-size.rem]=\"priceFontSize\"\n            [style.font-weight]=\"priceFontWeight\"> {{(paymentMethod == 'USD') ? '$': ''}}{{productPrice}}</span>\n          <sub>{{(paymentMethod != 'USD') ? paymentMethod : ''}} / UNIT</sub>\n        </div>\n        <ul class=\"bulletPoint\" [style.color]=\"listFontColor\" [style.font-size.rem]=\"listFontSize\"\n          [style.font-weight]=\"listFontWeight\">\n          <li>{{totalPriceLabel}}: {{(paymentMethod == 'USD') ? '$': ''}}{{productTotalPrice}}\n            {{(paymentMethod != 'USD') ? paymentMethod : ''}}</li>\n          <li>{{quantityLabel}}: {{productQuantity}}</li>\n          <li *ngIf=\"minQtyLabel\">{{minQtyLabel}}: {{minimumQuantity}}</li>\n        </ul>\n      </aside>\n      <div class=\"list\">\n        <ul class=\"pl-4 {{productPaymentCustomClass}}\">\n          <li>\n            <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\"\n              [style.font-size.rem]=\"bidTitleFontSize\">{{paymentMethodLabel}}:</span>\n            <span class=\"{{bidDetailCustomClass}} ml-2\" [style.font-weight]=\"bidDetailFontWeight\" [style.color]=\"bidDetailFontColor\"\n              [style.font-size.rem]=\"bidDetailFontSize\"> {{paymentMethod}}</span>\n          </li>\n          <li>\n            <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\"\n              [style.font-size.rem]=\"bidTitleFontSize\">{{paymentTermsLabel}}:</span>\n            <span class=\"{{bidDetailCustomClass}} ml-2\" [style.font-weight]=\"bidDetailFontWeight\" [style.color]=\"bidDetailFontColor\"\n              [style.font-size.rem]=\"bidDetailFontSize\"> {{paymentTerms}}</span>\n          </li>\n          <li>\n            <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\"\n              [style.font-size.rem]=\"bidTitleFontSize\">{{deliveryTermsLabel}}:</span>\n            <span class=\"{{bidDetailCustomClass}} ml-2\" [style.font-weight]=\"bidDetailFontWeight\" [style.color]=\"bidDetailFontColor\"\n              [style.font-size.rem]=\"bidDetailFontSize\"> {{deliveryTerms}} {{ deliveryTerms > 1 ? '\n                days' : ' day'}}</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.article{float:left}.article .title-txt{font-size:14px!important;width:100%;float:left;color:var(--suku-text-heading);padding:0 0 12px}.article aside{width:100%;float:left;background:var(--suku-bg-ternary);border-left:5px solid #0c0a0a;border-radius:var(--suku-primary-border-radius);padding:17px 30px;margin:0 0 18px}.article aside:last-child{margin-bottom:0}.article aside .prize{width:100%;float:left;font-family:var(--suku-primary-font);font-size:50px;color:var(--suku-text-label-two);line-height:1em;margin:0 0 12px}.article aside .prize sub{font-size:38%;color:rgba(255,255,255,.5);top:-2px}.article aside ul{width:100%;float:left;font-family:var(--suku-primary-font);padding:0;margin:0}.article aside ul li{width:100%;float:left;color:rgba(255,255,255,.5);letter-spacing:.02em;padding:0 0 4px;margin:0}.article aside ul li:last-child{padding-bottom:0}.article aside ul li:before{display:none}.article .list{width:100%;float:left;border-bottom:1px solid rgba(0,0,0,.1);padding:0 0 20px}.article .list ul li{color:var(--suku-filter-label-selected)}.article.selected aside{border-left-color:var(--suku-primary-border-color)}.article-out{width:100%;float:left;margin:0 0 0 35px}@media (max-width:991px){.article{width:44%;margin:0 3% 50px}.article aside{padding:25px;margin:0 0 18px}.article-out{width:106%;margin:0 -3% -50px;height:100%}}@media (max-width:767px){.article{width:100%;margin:0 0 35px}.article aside{border-radius:0 25px 0 0;padding:20px}.article aside .prize{font-size:40px}.article aside ul{width:100%;float:left;padding:0;margin:0}.article .list{padding:0 0 20px}.article-out{width:100%;margin:0 0 -35px;height:100%}}.bulletPoint li{list-style-type:none}.productPayment{font-family:var(--suku-secondary-font);font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:var(--suku-text-link)}.bid-title{font-family:var(--suku-secondary-font);font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:var(--suku-text-label-one);text-transform:uppercase}.bid-details{font-family:var(--suku-secondary-font);font-size:14px;font-weight:50px;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:var(--suku-text-link)}ul{list-style:none}ul li::before{content:\"\\2022\";color:#dedede;font-weight:700;font-size:16px;display:inline-block;width:1em}.default{width:350px}"]
                    }] }
        ];
        /** @nocollapse */
        SukuBidWidgetTagComponent.ctorParameters = function () { return []; };
        SukuBidWidgetTagComponent.propDecorators = {
            paymentMethod: [{ type: i0.Input, args: ['payment-method',] }],
            productPrice: [{ type: i0.Input, args: ['product-price',] }],
            productTotalPrice: [{ type: i0.Input, args: ['product-total-price',] }],
            productQuantity: [{ type: i0.Input, args: ['product-quantity',] }],
            minimumQuantity: [{ type: i0.Input, args: ['minimum-quantity',] }],
            paymentTerms: [{ type: i0.Input, args: ['payment-terms',] }],
            deliveryTerms: [{ type: i0.Input, args: ['delivery-terms',] }],
            paymentMethodLabel: [{ type: i0.Input, args: ['payment-method-label',] }],
            paymentTermsLabel: [{ type: i0.Input, args: ['payment-terms-label',] }],
            deliveryTermsLabel: [{ type: i0.Input, args: ['delivery-terms-label',] }],
            totalPriceLabel: [{ type: i0.Input, args: ['total-price-label',] }],
            quantityLabel: [{ type: i0.Input, args: ['quantity-label',] }],
            minQtyLabel: [{ type: i0.Input, args: ['min-qtylabel',] }],
            titleText: [{ type: i0.Input, args: ['title-text',] }],
            documents: [{ type: i0.Input }],
            customClass: [{ type: i0.Input, args: ['custom-class',] }],
            priceFontSize: [{ type: i0.Input, args: ['price-font-size',] }],
            priceFontColor: [{ type: i0.Input, args: ['price-font-color',] }],
            listFontColor: [{ type: i0.Input, args: ['list-font-color',] }],
            listFontSize: [{ type: i0.Input, args: ['list-font-size',] }],
            bidTitleFontColor: [{ type: i0.Input, args: ['bid-title-font-color',] }],
            bidTitleFontSize: [{ type: i0.Input, args: ['bid-title-font-size',] }],
            bidDetailFontColor: [{ type: i0.Input, args: ['bid-detail-font-color',] }],
            bidDetailFontSize: [{ type: i0.Input, args: ['bid-detail-font-size',] }],
            priceFontWeight: [{ type: i0.Input, args: ['price-font-weight',] }],
            listFontWeight: [{ type: i0.Input, args: ['list-font-weight',] }],
            bidTitleFontWeight: [{ type: i0.Input, args: ['bid-title-font-weight',] }],
            bidDetailFontWeight: [{ type: i0.Input, args: ['bid-detail-font-weight',] }],
            titleFontColor: [{ type: i0.Input, args: ['title-font-color',] }],
            titleFontSize: [{ type: i0.Input, args: ['title-font-size',] }],
            titleFontWeight: [{ type: i0.Input, args: ['title-font-weight',] }],
            asideBgColor: [{ type: i0.Input, args: ['aside-bg-Color',] }],
            productPaymentCustomClass: [{ type: i0.Input, args: ['product-payment-custom-class',] }],
            bidDetailCustomClass: [{ type: i0.Input, args: ['bid-details-custom-class',] }],
            articleAlignmentCustomClass: [{ type: i0.Input, args: ['article-alignment-custom-class',] }]
        };
        return SukuBidWidgetTagComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuCardLineTypeOneComponent = /** @class */ (function () {
        function SukuCardLineTypeOneComponent() {
            this.bgColor = '';
            this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
            this.chatReadIcon = 'suku-chat-read-icon';
            this.chatUnreadIcon = 'suku-chat-unread-icon';
            this.chatReadIconId = 'suku-chat-read-icon';
            this.chatUnreadIconId = 'suku-chat-unread-icon';
            this.customClass = '';
            this.customImgclass = '';
            this.customIconClass = 'text-center suku-xl';
            this.imageColSize = 'col-sm-1 pt-1 pl-2';
            this.txtcolsize = 'col-sm-6  pt-2 mt-1';
            this.txtTwocolsize = 'col-sm-2 pt-2 pl-2 mt-1';
            this.txtThreecolsize = 'col-sm-3 pt-2 mt-1';
            this.titleOne = 'Title One';
            this.titleOneColor = 'black';
            this.titleOneWeight = '600';
            this.titleOneSize = '14';
            this.titleOnecustomclass = '';
            this.contentOne = '$100';
            this.contentOneColor = '#3e3e3e';
            this.contentOneWeight = '500';
            this.contentOneSize = '14';
            this.contentOnecustomclass = '';
            this.contentTwo = 'John Smith';
            this.contentTwoColor = '#3e3e3e';
            this.contentTwoWeight = '500';
            this.contentTwoSize = '14';
            this.contentTwocustomclass = 'user';
            this.subTitleTwo = 'SOLD BY';
            this.subTitleTwoColor = '#b6b6b6';
            this.subTitleTwoWeight = '500';
            this.subTitleTwoSize = '12';
            this.subTitleTwocustomclass = '';
            this.subTitleThree = 'EXPIRY DATE';
            this.subTitleThreecolor = '#b6b6b6';
            this.subTitleThreeWeight = '500';
            this.subTitleThreeSize = '12';
            this.subTitleThreeClass = '';
            this.contentThree = '28 Nov 2018';
            this.contentThreeColor = '#3e3e3e';
            this.contentThreeWeight = '500';
            this.contentThreeSize = '14';
            this.contentThreecustomclass = '';
            this.imgCustomClass = 'img-width';
            this.action = new i0.EventEmitter();
            this.userAction = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuCardLineTypeOneComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        SukuCardLineTypeOneComponent.prototype.cardAction = /**
         * @return {?}
         */
            function () {
                this.action.emit();
            };
        /**
         * @param {?} e
         * @return {?}
         */
        SukuCardLineTypeOneComponent.prototype.contentAction = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                this.userAction.emit();
                e.stopPropagation();
            };
        SukuCardLineTypeOneComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-card-line-type-one',
                        template: "<div class=\"col p-0\" (click)=\"cardAction()\">\r\n  <div class=\"row card-line-bg p-3 m-3 {{customClass}}\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img class=\"customclass {{imgCustomClass}}\" src=\"{{image}}\" alt=\"card-img\">\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus == 'read'\">\r\n      <i class=\"{{customIconClass}} {{chatReadIcon}}\" id=\"{{chatReadIconId}}\"></i>\r\n      <!-- <img [class]=\"customIconClass\" src=\"{{chatUnreadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\"> -->\r\n    </div>\r\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus == 'unRead'\">\r\n      <i class=\"{{customIconClass}} {{chatUnreadIcon}}\" id=\"{{chatUnreadIconId}}\"></i>\r\n      <!-- <img [class]=\"customIconClass\" src=\"{{chatReadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\"> -->\r\n    </div>\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\r\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div [class]=\"txtTwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"\r\n        [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\" (click)=\"contentAction($event)\"\r\n        [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtThreecolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"\r\n        [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"\r\n        [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n    </div>\r\n  </div>\r\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:var(--suku-text-label-one);word-break:break-word!important}.img-width{width:55px;height:46px}.card-line-bg{background-color:var(--suku-homepage-bg);box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.c-pointer,.user{cursor:pointer}.user:hover{color:var(--suku-filter-label-selected)!important;font-weight:700!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuCardLineTypeOneComponent.ctorParameters = function () { return []; };
        SukuCardLineTypeOneComponent.propDecorators = {
            bgColor: [{ type: i0.Input, args: ['bg-color',] }],
            image: [{ type: i0.Input }],
            chatReadIcon: [{ type: i0.Input, args: ['chat-read-icon',] }],
            chatUnreadIcon: [{ type: i0.Input, args: ['chat-unread-icon',] }],
            chatReadIconId: [{ type: i0.Input, args: ['chat-read-icon-id',] }],
            chatUnreadIconId: [{ type: i0.Input, args: ['chat-unread-icon-id',] }],
            msgStatus: [{ type: i0.Input, args: ['msg-status',] }],
            customClass: [{ type: i0.Input, args: ['custom-class',] }],
            customImgclass: [{ type: i0.Input, args: ['custom-img-class',] }],
            customIconClass: [{ type: i0.Input, args: ['custom-icon-class',] }],
            imageColSize: [{ type: i0.Input, args: ['image-col-size',] }],
            txtcolsize: [{ type: i0.Input, args: ['txt-col-size',] }],
            txtTwocolsize: [{ type: i0.Input, args: ['txt-two-col-size',] }],
            txtThreecolsize: [{ type: i0.Input, args: ['txt-three-col-size',] }],
            titleOne: [{ type: i0.Input, args: ['title-one',] }],
            titleOneColor: [{ type: i0.Input, args: ['title-one-color',] }],
            titleOneWeight: [{ type: i0.Input, args: ['title-one-weight',] }],
            titleOneSize: [{ type: i0.Input, args: ['title-one-size',] }],
            titleOnecustomclass: [{ type: i0.Input, args: ['title-one-customclass',] }],
            contentOne: [{ type: i0.Input, args: ['content-one',] }],
            contentOneColor: [{ type: i0.Input, args: ['content-one-color',] }],
            contentOneWeight: [{ type: i0.Input, args: ['content-one-weight',] }],
            contentOneSize: [{ type: i0.Input, args: ['content-one-size',] }],
            contentOnecustomclass: [{ type: i0.Input, args: ['content-one-customclass',] }],
            contentTwo: [{ type: i0.Input, args: ['content-two',] }],
            contentTwoColor: [{ type: i0.Input, args: ['content-two-color',] }],
            contentTwoWeight: [{ type: i0.Input, args: ['content-two-weight',] }],
            contentTwoSize: [{ type: i0.Input, args: ['content-two-size',] }],
            contentTwocustomclass: [{ type: i0.Input, args: ['content-two-customclass',] }],
            subTitleTwo: [{ type: i0.Input, args: ['sub-title-two',] }],
            subTitleTwoColor: [{ type: i0.Input, args: ['sub-title-two-color',] }],
            subTitleTwoWeight: [{ type: i0.Input, args: ['sub-title-two-weight',] }],
            subTitleTwoSize: [{ type: i0.Input, args: ['sub-title-two-size',] }],
            subTitleTwocustomclass: [{ type: i0.Input, args: ['sub-title-two-customclass',] }],
            subTitleThree: [{ type: i0.Input, args: ['sub-title-three',] }],
            subTitleThreecolor: [{ type: i0.Input, args: ['sub-title-three-color',] }],
            subTitleThreeWeight: [{ type: i0.Input, args: ['sub-title-three-weight',] }],
            subTitleThreeSize: [{ type: i0.Input, args: ['sub-title-three-size',] }],
            subTitleThreeClass: [{ type: i0.Input, args: ['sub-title-threeclass',] }],
            contentThree: [{ type: i0.Input, args: ['content-three',] }],
            contentThreeColor: [{ type: i0.Input, args: ['content-three-color',] }],
            contentThreeWeight: [{ type: i0.Input, args: ['content-three-widget',] }],
            contentThreeSize: [{ type: i0.Input, args: ['content-three-size',] }],
            contentThreecustomclass: [{ type: i0.Input, args: ['content-three-customclass',] }],
            imgCustomClass: [{ type: i0.Input, args: ['img-custom-class',] }],
            action: [{ type: i0.Output }],
            userAction: [{ type: i0.Output }]
        };
        return SukuCardLineTypeOneComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuCardLineTypeTwoComponent = /** @class */ (function () {
        function SukuCardLineTypeTwoComponent() {
            this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
            this.bgColor = '';
            this.iconOne = 'suku-chat-read-icon';
            this.iconTwo = 'suku-chat-unread-icon';
            this.customClass = '';
            this.customImgclass = '';
            this.customIconClass = 'text-center suku-xl';
            this.imageColSize = 'col-sm-1 pt-1 pl-2';
            this.iconOneId = 'iconOneId';
            this.iconTwoId = 'iconTwoId';
            this.txtcolsize = 'col-sm-5 pl-sm-5 pt-2 mt-1';
            this.txttwocolsize = 'col-sm-2 pl-lg-0 pr-lg-2 pt-2 mt-1';
            this.txtthreecolsize = 'col pt-2 mt-1';
            this.titleOne = 'Title One';
            this.iconOneInfo = 'icon info One';
            this.iconTwoInfo = 'icon info Two';
            this.titleOneColor = 'black';
            this.titleOneWeight = '600';
            this.titleOneSize = '14';
            this.titleOnecustomclass = '';
            this.contentOne = '$100';
            this.contentOneColor = '#3e3e3e';
            this.contentOneWeight = '500';
            this.contentOneSize = '14';
            this.contentOnecustomclass = '';
            this.contentTwo = 'N/A';
            this.contentTwoColor = '#3e3e3e';
            this.contentTwoWeight = '500';
            this.contentTwoSize = '14';
            this.contentTwocustomclass = 'user';
            this.subTitleTwo = 'SOLD BY';
            this.subTitleTwoColor = '#b6b6b6';
            this.subTitleTwoWeight = '500';
            this.subTitleTwoSize = '12';
            this.subTitleTwocustomclass = '';
            this.subTitleThree = 'TOTAL PRICE';
            this.subTitleThreecolor = '#b6b6b6';
            this.subTitleThreeWeight = '500';
            this.subTitleThreeSize = '12';
            this.subTitleThreeClass = '';
            this.contentThree = 'N/A';
            this.contentThreeColor = '#3e3e3e';
            this.contentThreeWeight = '500';
            this.contentThreeSize = '14';
            this.contentThreecustomclass = '';
            this.userAction = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuCardLineTypeTwoComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuCardLineTypeTwoComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-card-line-type-two',
                        template: "<div class=\"col p-0\">\r\n  <div class=\"row card-line-bg p-3 m-2 {{customClass}}\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img [class]=\"customImgclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n      <span class=\"tipTool\">\r\n        <span class=\"tipTooltext\">\r\n          <span class=\"uncheckedTextContent\">{{iconOneInfo}}</span>\r\n        </span>\r\n        <i class=\"{{customIconClass}} {{iconOne}}\" id=\"{{iconOneId}}\"></i>\r\n        <!-- <img [class]=\"customIconClass\" [src]=\"iconOne\" [id]=\"iconOneId\" alt=\"card-img\" width=\"50px\" height=\"50px\"> -->\r\n      </span>\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n      <span class=\"tipTool\">\r\n        <span class=\"tipTooltext\">\r\n          <span class=\"uncheckedTextContent\">{{iconTwoInfo}}</span>\r\n        </span>\r\n        <i class=\"{{customIconClass}} {{iconTwo}}\" id=\"{{iconTwoId}}\"></i>\r\n        <!-- <img [class]=\"customIconClass\" [src]=\"iconTwo\" [id]=\"iconTwoId\" alt=\"card-img\" width=\"50px\" height=\"50px\"> -->\r\n      </span>\r\n    </div>\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\r\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div [class]=\"txttwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"\r\n        [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" (click)=\"userAction.emit()\" [class]=\"contentTwocustomclass\"\r\n        [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtthreecolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"\r\n        [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"\r\n        [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n    </div>\r\n  </div>\r\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:var(--suku-text-label-one);word-break:break-word!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}.tipTool{position:relative;display:inline-block;height:0;text-align:center;border-radius:15px;background-color:#d8d8d8a8 transparent;font-size:18px;color:#757575;font-weight:700;font-style:italic;font-stretch:normal;letter-spacing:.5px}.tipTool .tipTooltext{visibility:hidden;width:-webkit-max-content;width:-moz-max-content;width:max-content;background-color:#000000eb;text-align:left;border-radius:6px;padding:15px 18px;position:absolute;z-index:1;bottom:150%;left:70%;margin-left:-60px;font-style:normal;font-stretch:normal;font-size:13px;font-family:var(--suku-secondary-font);font-weight:500;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.tipTool .tipTooltext::after{content:\"\";position:absolute;top:100%;left:37.5%;margin-left:0;border-width:5px;border-style:solid;border-color:#191922 transparent transparent;font-style:normal;font-stretch:normal}.tipTool:hover .tipTooltext{visibility:visible}.user{cursor:pointer!important}.user:hover{color:#000!important;font-weight:700!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuCardLineTypeTwoComponent.ctorParameters = function () { return []; };
        SukuCardLineTypeTwoComponent.propDecorators = {
            image: [{ type: i0.Input }],
            bgColor: [{ type: i0.Input }],
            iconOne: [{ type: i0.Input, args: ['icon-one',] }],
            iconTwo: [{ type: i0.Input, args: ['icon-two',] }],
            msgStatus: [{ type: i0.Input, args: ['msg-status',] }],
            customClass: [{ type: i0.Input, args: ['custom-class',] }],
            customImgclass: [{ type: i0.Input, args: ['customImgclass',] }],
            customIconClass: [{ type: i0.Input, args: ['custom-icon-class',] }],
            imageColSize: [{ type: i0.Input, args: ['image-col-size',] }],
            iconOneId: [{ type: i0.Input, args: ['icon-one-id',] }],
            iconTwoId: [{ type: i0.Input, args: ['icon-two-id',] }],
            txtcolsize: [{ type: i0.Input }],
            txttwocolsize: [{ type: i0.Input }],
            txtthreecolsize: [{ type: i0.Input }],
            titleOne: [{ type: i0.Input, args: ['title-one',] }],
            iconOneInfo: [{ type: i0.Input, args: ['icon-info-one',] }],
            iconTwoInfo: [{ type: i0.Input, args: ['icon-info-two',] }],
            titleOneColor: [{ type: i0.Input, args: ['title-one-color',] }],
            titleOneWeight: [{ type: i0.Input, args: ['title-one-weight',] }],
            titleOneSize: [{ type: i0.Input, args: ['title-one-size',] }],
            titleOnecustomclass: [{ type: i0.Input, args: ['title-one-customclass',] }],
            contentOne: [{ type: i0.Input, args: ['content-one',] }],
            contentOneColor: [{ type: i0.Input, args: ['content-one-color',] }],
            contentOneWeight: [{ type: i0.Input, args: ['content-one-weight',] }],
            contentOneSize: [{ type: i0.Input, args: ['content-one-size',] }],
            contentOnecustomclass: [{ type: i0.Input, args: ['content-one-customclass',] }],
            contentTwo: [{ type: i0.Input, args: ['content-two',] }],
            contentTwoColor: [{ type: i0.Input, args: ['content-two-color',] }],
            contentTwoWeight: [{ type: i0.Input, args: ['content-two-weight',] }],
            contentTwoSize: [{ type: i0.Input, args: ['content-two-size',] }],
            contentTwocustomclass: [{ type: i0.Input, args: ['content-two-customclass',] }],
            subTitleTwo: [{ type: i0.Input, args: ['sub-title-two',] }],
            subTitleTwoColor: [{ type: i0.Input, args: ['sub-title-two-color',] }],
            subTitleTwoWeight: [{ type: i0.Input, args: ['sub-title-two-weight',] }],
            subTitleTwoSize: [{ type: i0.Input, args: ['sub-title-two-size',] }],
            subTitleTwocustomclass: [{ type: i0.Input, args: ['sub-title-two-customclass',] }],
            subTitleThree: [{ type: i0.Input, args: ['sub-title-three',] }],
            subTitleThreecolor: [{ type: i0.Input, args: ['sub-title-three-color',] }],
            subTitleThreeWeight: [{ type: i0.Input, args: ['sub-title-three-weight',] }],
            subTitleThreeSize: [{ type: i0.Input, args: ['sub-title-three-size',] }],
            subTitleThreeClass: [{ type: i0.Input, args: ['sub-title-threeclass',] }],
            contentThree: [{ type: i0.Input, args: ['content-three',] }],
            contentThreeColor: [{ type: i0.Input, args: ['content-three-color',] }],
            contentThreeWeight: [{ type: i0.Input, args: ['content-three-widget',] }],
            contentThreeSize: [{ type: i0.Input, args: ['content-three-size',] }],
            contentThreecustomclass: [{ type: i0.Input, args: ['content-three-customclass',] }],
            userAction: [{ type: i0.Output }]
        };
        return SukuCardLineTypeTwoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuCardLineComponent = /** @class */ (function () {
        function SukuCardLineComponent() {
            this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
            this.chatReadIcon = '../assets/images/chat_read.png';
            this.chatUnreadIcon = '../assets/images/chat_unread.png';
            this.msgStatus = 'unRead';
            this.customclass = '';
            this.customIconclass = 'text-center';
            this.bgColor = '';
            this.imageColSize = 'col-sm-1 pt-1 pl-2';
            this.txtcolsize = 'col-sm-5 pl-4 pt-2 mt-1';
            this.txttwocolsize = 'col-sm-2 pt-2 mt-1';
            this.txtthreecolsize = 'col-sm-3 pt-2 mt-1';
            this.titleOne = 'Title One';
            this.titleOneColor = 'black';
            this.titleOneWeight = '600';
            this.titleOneSize = '14';
            this.titleOnecustomclass = '';
            this.contentOne = '$100';
            this.contentOneColor = '#3e3e3e';
            this.contentOneWeight = '500';
            this.contentOneSize = '14';
            this.contentOnecustomclass = '';
            this.contentTwo = 'John Smith';
            this.contentTwoColor = '#3e3e3e';
            this.contentTwoWeight = '500';
            this.contentTwoSize = '14';
            this.contentTwocustomclass = '';
            this.subTitleTwo = 'SOLD BY';
            this.subTitleTwoColor = '#b6b6b6';
            this.subTitleTwoWeight = '500';
            this.subTitleTwoSize = '12';
            this.subTitleTwocustomclass = '';
            this.subTitleThree = 'EXPIRY DATE';
            this.subTitleThreecolor = '#b6b6b6';
            this.subTitleThreeWeight = '500';
            this.subTitleThreeSize = '12';
            this.subTitleThreeClass = '';
            this.contentThree = '28 Nov 2018';
            this.contentThreeColor = '#3e3e3e';
            this.contentThreeWeight = '500';
            this.contentThreeSize = '14';
            this.contentThreecustomclass = '';
        }
        /**
         * @return {?}
         */
        SukuCardLineComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuCardLineComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-card-line',
                        template: "<div class=\"col p-0\">\n  <div class=\"row card-line-bg p-3 m-3 c-pointer\" [style.background-color]=\"bgColor\">\n    <div [class]=\"imageColSize\">\n      <img [class]=\"customclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\n    </div>\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus=='read'\">\n      <img [class]=\"customIconclass\" src=\"{{chatReadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\n    </div>\n    <div class=\"col-sm-1\" *ngIf=\"msgStatus=='unRead'\">\n      <img [class]=\"customIconclass\" src=\"{{chatUnreadIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\n    </div>\n    <div [class]=\"txtcolsize\">\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\"  [style.font-weight]=\"titleOneWeight\"\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\"  [style.font-weight]=\"contentOneWeight\" [style.color]=\"contentOneColor\">{{contentOne}}</h2>\n    </div>\n    <div [class]=\"txttwocolsize\">\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"  [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\"  [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\n    </div>\n    <div [class]=\"txtthreecolsize\">\n        <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"  [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\n        <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"  [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\n      </div>\n  </div>\n</div>\n",
                        styles: ["h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        SukuCardLineComponent.ctorParameters = function () { return []; };
        SukuCardLineComponent.propDecorators = {
            image: [{ type: i0.Input }],
            chatReadIcon: [{ type: i0.Input, args: ['char-read-icon',] }],
            chatUnreadIcon: [{ type: i0.Input, args: ['char-unread-icon',] }],
            msgStatus: [{ type: i0.Input, args: ['msg-status',] }],
            customclass: [{ type: i0.Input, args: ['customclass',] }],
            customIconclass: [{ type: i0.Input, args: ['custom-iconclass',] }],
            bgColor: [{ type: i0.Input }],
            interest: [{ type: i0.Input }],
            imageColSize: [{ type: i0.Input }],
            txtcolsize: [{ type: i0.Input }],
            txttwocolsize: [{ type: i0.Input }],
            txtthreecolsize: [{ type: i0.Input }],
            titleOne: [{ type: i0.Input, args: ['title-one',] }],
            titleOneColor: [{ type: i0.Input, args: ['title-one-color',] }],
            titleOneWeight: [{ type: i0.Input, args: ['title-one-weight',] }],
            titleOneSize: [{ type: i0.Input, args: ['title-one-size',] }],
            titleOnecustomclass: [{ type: i0.Input, args: ['title-one-customclass',] }],
            contentOne: [{ type: i0.Input, args: ['content-one',] }],
            contentOneColor: [{ type: i0.Input, args: ['content-one-color',] }],
            contentOneWeight: [{ type: i0.Input, args: ['content-one-weight',] }],
            contentOneSize: [{ type: i0.Input, args: ['content-one-size',] }],
            contentOnecustomclass: [{ type: i0.Input, args: ['content-one-customclass',] }],
            contentTwo: [{ type: i0.Input, args: ['content-two',] }],
            contentTwoColor: [{ type: i0.Input, args: ['content-two-color',] }],
            contentTwoWeight: [{ type: i0.Input, args: ['content-two-weight',] }],
            contentTwoSize: [{ type: i0.Input, args: ['content-two-size',] }],
            contentTwocustomclass: [{ type: i0.Input, args: ['content-two-customclass',] }],
            subTitleTwo: [{ type: i0.Input, args: ['sub-title-two',] }],
            subTitleTwoColor: [{ type: i0.Input, args: ['sub-title-two-color',] }],
            subTitleTwoWeight: [{ type: i0.Input, args: ['sub-title-two-weight',] }],
            subTitleTwoSize: [{ type: i0.Input, args: ['sub-title-two-size',] }],
            subTitleTwocustomclass: [{ type: i0.Input, args: ['sub-title-two-customclass',] }],
            subTitleThree: [{ type: i0.Input, args: ['sub-title-three',] }],
            subTitleThreecolor: [{ type: i0.Input, args: ['sub-title-three-color',] }],
            subTitleThreeWeight: [{ type: i0.Input, args: ['sub-title-three-weight',] }],
            subTitleThreeSize: [{ type: i0.Input, args: ['sub-title-three-size',] }],
            subTitleThreeClass: [{ type: i0.Input, args: ['sub-title-threeclass',] }],
            contentThree: [{ type: i0.Input, args: ['content-three',] }],
            contentThreeColor: [{ type: i0.Input, args: ['content-three-color',] }],
            contentThreeWeight: [{ type: i0.Input, args: ['content-three-widget',] }],
            contentThreeSize: [{ type: i0.Input, args: ['content-three-size',] }],
            contentThreecustomclass: [{ type: i0.Input, args: ['content-three-customclass',] }]
        };
        return SukuCardLineComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuCardTitleComponent = /** @class */ (function () {
        function SukuCardTitleComponent() {
            this.cardTitleName = 'INTEREST NAME';
            this.cardTitleId = 'heading';
            this.cardTitlesize = '12';
            this.cardTitlecolor = '#b6b6b6';
            this.cardContentName = 'Spring Cases';
            this.cardContentId = 'Content';
            this.cardContentsize = '17';
            this.cardContentcolor = '#1d1d1d';
            this.cardContentweight = '700';
            this.customTitleClass = 'primary';
            this.customContentClass = 'secondary';
            this.contentTypeArray = false;
            this.displayKey = '';
            this.iconColor = 'black';
            this.iconFontSize = '';
            this.enableInfoTooltip = '';
            this.tooltipInfo = '';
            this.tooltiptextCustomclass = '';
        }
        /**
         * @return {?}
         */
        SukuCardTitleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuCardTitleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-card-title',
                        template: "<div class=\"product-title\">\n  <h1 [style.font-size.px]=\"cardTitlesize\" class=\"{{customTitleClass}}\" [style.color]=\"cardTitlecolor\"\n    id=\"{{cardTitleId}}\">\n    <span class=\"mt-auto mb-auto\">\n      {{cardTitleName}}\n    </span>\n    <span class=\"tipTool\" [style.left.rem]=\"positionTooltip\" *ngIf=\"(enableInfoTooltip == 'true')\">\n      <span class=\"tipTooltext {{tooltiptextCustomclass}}\" [style.left.rem]=\"positionTopTooltext\"\n        [style.bottom.rem]=\"positionBtmTooltext\">\n        <span>{{tooltipInfo}}</span>\n      </span>\n      <i class=\"fa fa-info-circle infoIcon\" [style.color]=\"iconColor\" [style.font-size.rem]=\"iconFontSize\"></i>\n    </span>\n  </h1>\n  <section *ngIf=\"!contentTypeArray\">\n    <h2 [style.font-size.px]=\"cardContentsize\" class=\"{{customContentClass}}\" id=\"{{cardContentId}}\"\n      [style.font-weight]=\"cardContentweight\" [style.color]=\"cardContentcolor\">\n      {{cardContentName}}\n    </h2>\n  </section>\n  <section *ngIf=\"contentTypeArray\">\n    <h2 *ngFor=\"let item of cardContentName;let i=index\" [style.font-size.px]=\"cardContentsize\"\n      class=\"{{customContentClass}} mb-0\" id=\"{{cardContentId}}\" [style.font-weight]=\"cardContentweight\"\n      [style.color]=\"cardContentcolor\">\n      {{ displayKey  ? item[displayKey] : (item | titlecase)}}\n    </h2>\n  </section>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.primary{font-family:var(--suku-secondary-font);font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:0;color:var(--suku-text-label-one);margin-bottom:1px}.secondary{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:900;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d}.type-1{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-5);font-weight:900;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px}.homepage-section{font-family:Poppins,sans-serif}.title{font-size:23px;font-weight:700}.italic{font-weight:400}.info{text-align:center;height:23px;width:23px;border-radius:100px;position:absolute}.info:hover .info-box{display:block}.info-box{z-index:100;width:300px;border-radius:6px;word-wrap:break-word;background:#000;display:none;position:relative;bottom:-10px;right:100%;text-align:left;padding:20px;font-size:13px;font-family:\"Encode Sans\",sans-serif;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.info-box::after{content:\"\";position:absolute;top:-10px;left:35px;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #191922;font-style:normal;font-stretch:normal}.infoIcon{font-size:20px}.tipTool{position:relative;display:inline-block;height:0;text-align:center;border-radius:15px;background-color:#d8d8d8a8 transparent;font-size:18px;color:#757575;font-weight:700;font-style:italic;font-stretch:normal;letter-spacing:.5px}.tipTool .tipTooltext{visibility:hidden;background-color:#000000eb;text-align:left;border-radius:6px;padding:15px 18px;position:absolute;z-index:1;bottom:-75px;left:-2.6rem;margin-left:-60px;font-style:normal;font-stretch:normal;font-size:13px;font-family:var(--suku-secondary-font);font-weight:500;line-height:1.45;letter-spacing:.4px;color:#b6b6b6;width:250px}.tipTool .tipTooltext::after{content:\"\";position:absolute;top:-9px;left:42.5%;margin-left:0;border-width:5px;border-style:solid;border-color:#191922 transparent transparent;font-style:normal;font-stretch:normal;transform:rotate(-180deg)}.tipTool:hover .tipTooltext{visibility:visible}.tooltip-info-content{font-family:var(--suku-secondary-font)}"]
                    }] }
        ];
        /** @nocollapse */
        SukuCardTitleComponent.ctorParameters = function () { return []; };
        SukuCardTitleComponent.propDecorators = {
            cardTitleName: [{ type: i0.Input, args: ['card-title-name',] }],
            cardTitleId: [{ type: i0.Input, args: ['card-title-id',] }],
            cardTitlesize: [{ type: i0.Input, args: ['card-title-size',] }],
            cardTitlecolor: [{ type: i0.Input, args: ['card-title-color',] }],
            cardTitleweight: [{ type: i0.Input, args: ['card-title-weight',] }],
            cardContentName: [{ type: i0.Input, args: ['card-content-name',] }],
            cardContentId: [{ type: i0.Input, args: ['card-content-id',] }],
            cardContentsize: [{ type: i0.Input, args: ['card-content-size',] }],
            cardContentcolor: [{ type: i0.Input, args: ['card-content-color',] }],
            cardContentweight: [{ type: i0.Input, args: ['card-content-weight',] }],
            customTitleClass: [{ type: i0.Input, args: ['custom-title-class',] }],
            customContentClass: [{ type: i0.Input, args: ['custom-content-class',] }],
            contentTypeArray: [{ type: i0.Input, args: ['content-type-array',] }],
            displayKey: [{ type: i0.Input, args: ['display-key',] }],
            iconColor: [{ type: i0.Input, args: ['icon-color',] }],
            iconFontSize: [{ type: i0.Input, args: ['icon-font-size',] }],
            enableInfoTooltip: [{ type: i0.Input, args: ['enable-info-tooltip',] }],
            tooltipInfo: [{ type: i0.Input, args: ['tooltip-info',] }],
            tooltiptextCustomclass: [{ type: i0.Input, args: ['tooltiptext-customclass',] }],
            positionTooltip: [{ type: i0.Input, args: ['position-tooltip',] }],
            positionTopTooltext: [{ type: i0.Input, args: ['position-top-tooltext',] }],
            positionBtmTooltext: [{ type: i0.Input, args: ['position-btn-tooltext',] }]
        };
        return SukuCardTitleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScrollToBottomDirective = /** @class */ (function () {
        function ScrollToBottomDirective(_el) {
            this._el = _el;
        }
        /**
         * @return {?}
         */
        ScrollToBottomDirective.prototype.scrollToBottom = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var el = this._el.nativeElement;
                el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight);
            };
        ScrollToBottomDirective.decorators = [
            { type: i0.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[scrollToBottom]'
                    },] }
        ];
        /** @nocollapse */
        ScrollToBottomDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        return ScrollToBottomDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuChatWidgetComponent = /** @class */ (function () {
        function SukuChatWidgetComponent() {
            this._imgPlaceholder = '../assets/images/group.svg';
            this._userImg = '../assets/images/group.svg';
            this._toUserImg = '../assets/images/group.svg';
            this.chat = {
                labelOne: 'Negotiation Chat Box',
                labelOneId: 'negotiationChatBox',
                labelTwo: 'Chatting with:',
                labelTwoId: 'chattingWith'
            };
            this.toUserName = 'N/A';
            this.toUserNameId = 'touserName';
            this.chatStatus = false;
            this.messageData = [];
            this.sendMessageIconSrc = '../assets/images/send-message-icon.png';
            this.sendmessage = new i0.EventEmitter();
            this.userAction = new i0.EventEmitter();
        }
        Object.defineProperty(SukuChatWidgetComponent.prototype, "userImg", {
            get: /**
             * @return {?}
             */ function () {
                return this._userImg;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._userImg = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SukuChatWidgetComponent.prototype, "toUserImg", {
            get: /**
             * @return {?}
             */ function () {
                return this._userImg;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._toUserImg = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SukuChatWidgetComponent.prototype, "chkmessageStatus", {
            get: /**
             * @return {?}
             */ function () {
                return this._chkmessageStatus;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._chkmessageStatus = val;
                if (this._chkmessageStatus) {
                    this.scrollToBottom();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} event
         * @return {?}
         */
        SukuChatWidgetComponent.prototype.scrollHandler = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this._initialScrollHeight.scrollHeight - event.target.scrollTop > 390) {
                    this._showScrollDownIcon = true; // enable scrollToBottomOnClik()
                    console.log('true');
                }
                else {
                    this._showScrollDownIcon = false;
                }
            };
        /**
         * @return {?}
         */
        SukuChatWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.messageData.length > 0) {
                    this._messageObj = {
                        message: this.messageData[0].message,
                        timestamp: this.messageData[0].dateTime,
                        userId: this.messageData[0].sender.userId,
                        sender: {
                            userId: this.messageData[0].sender.userId,
                            userName: this.messageData[0].sender.userName
                        },
                        receiver: {
                            userId: this.messageData[0].receiver.userId,
                            userName: this.messageData[0].receiver.userName
                        }
                    };
                }
                this._initialScrollHeight = document.querySelector('.chatBox');
                this._oldMessage = this.messageData;
                this.scrollToBottom();
            };
        /**
         * @return {?}
         */
        SukuChatWidgetComponent.prototype.action = /**
         * @return {?}
         */
            function () {
                if (this.messageData) {
                    this.userAction.emit(this.messageData[0].receiver);
                }
            };
        /**
         * @param {?} val
         * @return {?}
         */
        SukuChatWidgetComponent.prototype.sendMessage = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                console.log('test-send', val);
                this.sendmessage.emit(val);
                this.scrollToBottom();
            };
        /**
         * @return {?}
         */
        SukuChatWidgetComponent.prototype.scrollToBottom = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var someElement = document.querySelector('.chatBox');
                console.log('sd', someElement.scrollTop);
                /** @type {?} */
                var duration = 300;
                this.animateScroll(duration);
            };
        /**
         * @param {?} duration
         * @return {?}
         */
        SukuChatWidgetComponent.prototype.animateScroll = /**
         * @param {?} duration
         * @return {?}
         */
            function (duration) {
                /** @type {?} */
                var someElement = document.getElementById('scrollDiv');
                /** @type {?} */
                var start = someElement.scrollTop;
                /** @type {?} */
                var end = someElement.scrollHeight;
                /** @type {?} */
                var change = end - start;
                /** @type {?} */
                var increment = 20;
                /**
                 * @param {?} currentTime
                 * @param {?} startPos
                 * @param {?} changePos
                 * @param {?} delay
                 * @return {?}
                 */
                function easeInOut(currentTime, startPos, changePos, delay) {
                    currentTime /= delay / 2;
                    if (currentTime < 1) {
                        return changePos / 2 * currentTime * currentTime + startPos;
                    }
                    currentTime -= 1;
                    return -changePos / 2 * (currentTime * (currentTime - 2) - 1) + start;
                }
                /**
                 * @param {?} elapsedTime
                 * @return {?}
                 */
                function animate(elapsedTime) {
                    elapsedTime += increment;
                    /** @type {?} */
                    var position = easeInOut(elapsedTime, start, change, duration);
                    someElement.scrollTop = position;
                    if (elapsedTime < duration) {
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            animate(elapsedTime);
                        }), increment);
                    }
                }
                animate(0);
            };
        SukuChatWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-chat-widget',
                        template: "<div class=\"col p-0\" [ngClass]=\"{'disabled': chatStatus }\">\n  <div class=\"col p-0\">\n    <div class=\"col-sm-12 chat-header p-3\">\n      <div class=\"col p-0\">\n        <div class=\"col p-0\">\n          <div class=\"col-sm-12\">\n            <h1 class=\"title\" id=\"{{chat?.labelOneId}}\">{{chat?.labelOne}}\n            </h1>\n          </div>\n          <div class=\"col-sm-12\">\n            <h2 id=\"{{chat?.labelTwoId}}\">{{chat?.labelTwo}}\n              <span class=\"pl-lg-2 pop-bold\" (click)=\"action()\" id=\"{{toUserNameId}}\">{{toUserName || 'N/A'}}</span>\n            </h2>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group box-shadows col-xs-12 col-sm-12 p-0\">\n      <!-- auto scroll  `scrollMe [scrollTop]=scrollMe.scrollHeight` disabled  -->\n      <div id=\"scrollDiv\" class=\"chatBox p-1\"  (scroll)=\"scrollHandler($event)\">\n        <div class=\"blockChat\" *ngFor=\"let item of messageData; let i=index\" scrollToBottom>\n          <div class=\"col d-flex\" [class.messageContainerRgt]=\"item?.userId == item?.sender?.userId\"\n            [class.messageContainerLft]=\"item?.userId != item?.sender?.userId\">\n            <div class=\"messageStyle mb-1\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\">\n              <span class=\"mcb-10 p-2 align-end\"\n                [ngClass]=\"{'order-last ml-2': item?.userId == item?.sender?.userId, 'mr-2': item?.userId != item?.sender?.userId }\">\n                <img [src]=\"((item?.userId == item?.sender?.userId)? _userImg : _toUserImg) || _imgPlaceholder\"\n                  alt=\"Avatar\" class=\"user-icon\">\n              </span>\n              <span class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\"\n                class=\"msg-content hoverable\">\n                <div class=\"d-flex\" [class.rightFloat]=\"item?.userId == item?.sender?.userId\" id=\"messageBlock\">\n                  <span class=\"mb-0\" id=\"chatMessage{{i}}\">\n                    <p class=\"p-2 mb-0 mct-12 \"\n                      [ngClass]=\"{'senderColor': item?.userId == item?.sender?.userId, 'receiverColor': item?.userId != item?.sender?.userId }\">\n                      <span class=\"chatMessage\">{{item?.message}}</span>\n                    </p>\n                  </span>\n                </div>\n                <p class=\"mb-0\" id=\"timeStamp\"\n                  [ngClass]=\"{ 'float-right': item?.userId == item?.sender?.userId, 'float-left': item?.userId != item?.sender?.userId }\">\n                  {{item?.timestamp | date:'medium'}}</p>\n              </span>\n            </div>  \n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <!-- to scroll down -->\n        <div id=\"ScrollDownbutton\" (click)=\"scrollToBottom()\" *ngIf=\"_showScrollDownIcon\">\n          <button class=\"scrollDown\"><span class=\"fa fa-angle-double-down scroll-down-icon mt-1\"></span></button>\n        </div>\n        <div class=\"row p-3 bg-light\">\n          <div style=\"text-align: center;\" class=\"col-lg-10 col-sm-10 col-10 pl-1 pr-1\">\n            <input class=\"form-control\" [disabled]=\"chatStatus\" [ngClass]=\"{'disabled': chatStatus }\" autofocus=\"autofocus\" #messageValue\n              type=\"text\" name=\"message \" id=\"message\" placeholder=\"type message here... \"\n              (keyup.enter)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n          </div>\n          <div class=\"col-sm-2 col-2 p-xs-0 mx-auto f22 c-pointer\" [ngClass]=\"{'disabled': chatStatus }\"\n            (click)=\"sendMessage(messageValue?.value);messageValue.value = ''\">\n            <img [src]=\"sendMessageIconSrc\" alt=\"send-icon\" class=\"rotateIcon\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.title{color:#fafaf8;font-size:26px;font-family:var(--suku-primary-font);font-weight:200!important}h1{color:#fafaf8;font-size:var(--suku-font-size-5);font-family:var(--suku-primary-font);font-weight:200!important}h2{color:var(--suku-text-sub-heading);font-size:var(--suku-font-size-3);font-family:var(--suku-primary-font);font-weight:200;letter-spacing:.15px}.source-title{font-family:var(--suku-primary-font);font-weight:700;font-size:var(--suku-font-size-3)}.pop-bold{font-family:var(--suku-primary-font);font-weight:600!important;font-size:var(--suku-font-size-5)}.pop-bold:hover{text-decoration:underline;cursor:pointer}.c-pointer{cursor:pointer;text-transform:capitalize}.f22{font-size:22px}.borderChat{height:400.59306px;margin-bottom:25px;border-top:4px solid var(--suku-primary-color);border-bottom:4px solid var(--suku-primary-color)}.chat-header{background:#2f2e2e;border-left:5px solid var(--suku-primary-color);border-radius:0 40px 0 0;padding:10px 5px 0 15px;margin:0}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:#fff}.user-icon{vertical-align:middle;width:40px;height:40px;border-radius:50%}.messageStyle{display:flex;width:100%}.chatBox{height:300px!important;overflow-x:hidden!important}.chatMessage,.msg-content{font-family:var(--suku-primary-font);font-weight:400;font-size:var(--suku-font-size-3)}.bg-light{background-color:#f2f2f2!important}.rightFloat{justify-content:flex-end!important}.mct-12{margin-top:12px}.mcb-10{margin-bottom:10px}.align-end{align-self:flex-end}.senderColor{background-color:var(--suku-primary-color)!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:right;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.receiverColor{background-color:#2f2e2e!important;border-radius:.8rem;color:#fff;padding-left:.75rem!important;padding-right:.75rem!important;float:left;box-shadow:0 5px 20px -15px rgba(0,0,0,.8)}.form-control{background:#fff;font-size:13px}.form-control:focus{background-color:#fff!important;border-color:none;outline:0;box-shadow:none!important}#timeStamp{color:#716868;font-family:var(--suku-primary-font);font-size:10px;padding-top:.3rem;padding-left:.45rem;padding-right:.45rem;opacity:0;z-index:10;line-height:15px}.messageContainerRgt{float:right!important;width:80%}.messageContainerLft{float:left!important;width:80%}#messageBlock:hover+#timeStamp{opacity:1;background-color:#efeeee;color:#726868;border-radius:5px}.rotateIcon{width:34px;height:34px;transform:rotate(45deg)}::-webkit-scrollbar-thumb{background:#726868;border-radius:6px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #726868;border-radius:6px}#scrollDiv::-webkit-scrollbar{width:8px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:6px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}::-webkit-scrollbar-track{-webkit-box-shadow:inset 10px 5px 6px #f2f2f2;border-radius:0!important;box-shadow:inset 10px 5px 6px #f2f2f2!important}.scrollDown{color:#716868;padding:5px;width:35px;height:35px;border-radius:50%;text-decoration:none;-moz-border-radius:50%;-webkit-border-radius:50%;transition:.3s;border:none;background:0 0}.scrollDown:hover{cursor:pointer}.scroll-down-icon{font-size:17px;color:#716868;transition:.3s}.scrollDown:hover>.scroll-down-icon{transition:.5s;font-size:18px}button:focus{outline:0}#ScrollDownbutton{position:absolute;right:3px;bottom:78px}#ScrollDownbutton:hover{position:absolute;right:3px;bottom:70px;transition:.5s}@media only screen and (max-width:425){.p-xs-0{padding:0!important}}"]
                    }] }
        ];
        /** @nocollapse */
        SukuChatWidgetComponent.ctorParameters = function () { return []; };
        SukuChatWidgetComponent.propDecorators = {
            scroll: [{ type: i0.ViewChild, args: [ScrollToBottomDirective,] }],
            chat: [{ type: i0.Input }],
            toUserName: [{ type: i0.Input }],
            toUserNameId: [{ type: i0.Input }],
            chatStatus: [{ type: i0.Input }],
            messageData: [{ type: i0.Input }],
            sendMessageIconSrc: [{ type: i0.Input }],
            userImg: [{ type: i0.Input }],
            toUserImg: [{ type: i0.Input }],
            chkmessageStatus: [{ type: i0.Input }],
            sendmessage: [{ type: i0.Output }],
            userAction: [{ type: i0.Output }],
            scrollHandler: [{ type: i0.HostListener, args: ['scroll', ['$event'],] }]
        };
        return SukuChatWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuCreateCustomerComponent = /** @class */ (function () {
        function SukuCreateCustomerComponent(fb) {
            this.fb = fb;
            this.countrySelect = new i0.EventEmitter();
            this.submitData = new i0.EventEmitter();
            this.onSubmit = new i0.EventEmitter();
            this.stateSelect = new i0.EventEmitter();
            this.industryTypeFun = new i0.EventEmitter();
            this.businessTypeFun = new i0.EventEmitter();
        }
        Object.defineProperty(SukuCreateCustomerComponent.prototype, "ssnLimit", {
            get: /**
             * @return {?}
             */ function () {
                return this._ssnLimit;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                console.log(val);
                this._ssnLimit = val;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuCreateCustomerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.DwollaTOSformValid = true;
                this.CitizensReserveTOSformValid = true;
                this.validateType = true;
                this.getControl = this.form.get(this.formArrayNameValue)['controls'][0];
                this.GetFormattedDate();
            };
        /**
         * @param {?} val
         * @return {?}
         */
        SukuCreateCustomerComponent.prototype.countrySelectAction = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                if (val) {
                    /** @type {?} */
                    var data = {
                        countryDetails: JSON.parse(val)
                    };
                    this.countrySelect.emit(data);
                }
            };
        /**
         * @param {?} val
         * @return {?}
         */
        SukuCreateCustomerComponent.prototype.industryTypeFunAction = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                if (val) {
                    /** @type {?} */
                    var data = {
                        industryType: JSON.parse(val)
                    };
                    this.industryTypeFun.emit(data);
                }
            };
        /**
         * @param {?} val
         * @return {?}
         */
        SukuCreateCustomerComponent.prototype.businessTypeFunAction = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                console.log("value", val);
                this.validateTypeFun(val);
            };
        /**
         * @param {?} type
         * @return {?}
         */
        SukuCreateCustomerComponent.prototype.validateTypeFun = /**
         * @param {?} type
         * @return {?}
         */
            function (type) {
                /** @type {?} */
                var typevalue = type;
                if (typevalue == 'soleProprietorship') {
                    this.validateType = true;
                }
                else {
                    this.validateType = false;
                }
            };
        /**
         * @return {?}
         */
        SukuCreateCustomerComponent.prototype.action1 = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var controlName1 = this.CRDwollaTOSControl;
                if (this.form.get(controlName1).value) {
                    this.CitizensReserveTOSformValid = false;
                }
                else {
                    this.CitizensReserveTOSformValid = true;
                }
            };
        /**
         * @return {?}
         */
        SukuCreateCustomerComponent.prototype.GetFormattedDate = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var todayTime = new Date();
                /** @type {?} */
                var year = (todayTime.getFullYear());
                /** @type {?} */
                var LeapYear = year % 4;
                if (LeapYear == 0) {
                    // This is Leap Year
                    this.currentDate = new Date().setDate(todayTime.getDate() - 6575);
                }
                else {
                    // This is not leap year
                    this.currentDate = new Date().setDate(todayTime.getDate() - 6574);
                    console.log("cxcxcxcx" + this.currentDate);
                }
                this.maxDate = new Date(this.currentDate).toISOString();
            };
        SukuCreateCustomerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-create-customer',
                        template: "<form [formGroup]=\"form\">\n  <div class=\"form-group col-sm-12 col-md-12 col-lg-12\">\n    <div class=\"col-sm-12 col-xs-12 text-center\">\n    </div>\n  </div>\n  <br>\n  <div class=\"col-sm-12 pL0 textdev\">\n    <span class=\"Account-Setup\">Customer Creation</span>\n  </div>\n  <br>\n  <div class=\"col Rectangle-2\" id=\"createCustomer\"> \n    <div formArrayName=\"{{formArrayNameValue}}\">\n      <div class=\"form-group col-xs-12 col-sm-12 col-md-12 col-lg-12\"\n        *ngFor=\"let detail of form.get(formArrayNameValue)['controls']; let i=index\" [formGroupName]=\"i\">\n        <div class=\"col-sm-10 col-xs-12 offset-sm-1\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 p-0 mt-sm-5\">\n              <div class=\"col-sm-12 pt-3\">\n                <span class=\"header pL30\">Business Information</span>\n              </div>\n              <div class=\"col-sm-12 pt-2\">\n                <span class=\"hide-details pL30\">ACCOUNT ADMIN</span>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"firstName\" formControlName=\"firstName\" id=\"firstName\"\n                      placeholder=\"First name\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('firstName').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['firstName'])\">\n                        Invalid firstName\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"lastName\" formControlName=\"lastName\" id=\"lastName\"\n                      placeholder=\"Last name\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('lastName').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['lastName'])\">\n                        Invalid lastName\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"email\" formControlName=\"email\" id=\"email\" placeholder=\"e-mail\">\n                  </mat-form-field>\n\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('email').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['email'])\">\n                        Invalid email\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"address1\" formControlName=\"address1\" id=\"address1\"\n                      placeholder=\"Address\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('address1').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['address1'])\">\n                        Invalid Address\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"city\" formControlName=\"city\" id=\"city\" placeholder=\"City\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('city').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['city'])\">\n                        Invalid City\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"state\" formControlName=\"state\" id=\"state\" placeholder=\"State\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('state').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['state'])\">\n                        Invalid State\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"postalCode\" formControlName=\"postalCode\" id=\"postalCode\"\n                      placeholder=\"Postal-code\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('postalCode').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['postalCode'])\">\n                        Invalid postalCode\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"col-sm-6 p-0\">\n                  <span class=\"hide-details\">INDUSTRY</span>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <mat-select id=\"type\" #x (selectionChange)=\"industryTypeFunAction(x.value)\" formControlName=\"type\"\n                      name=\"type\" placeholder=\"Industry type\">\n                      <mat-option value=\"\">Select Industry</mat-option>\n                      <mat-option *ngFor=\"let industry of industryTypeValue; let i = index\" value=\"{{industry | json}}\">\n                        {{industry.name}}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <mat-select id=\"businessClassification\" formControlName=\"businessClassification\"\n                      name=\"businessClassification\" placeholder=\"Business Classification\">\n                      <mat-option value=\"\">Select business Classification</mat-option>\n                      <mat-option *ngFor=\"let businessClassification of businessClassificationValue ; let i = index\"\n                        value=\"{{businessClassification.id}}\">\n                        {{businessClassification.name}}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" id=\"businessName\" formControlName=\"businessName\" name=\"businessName\"\n                      placeholder=\"Business name\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('businessName').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['businessName'])\">\n                        Invalid Business Name\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <mat-select id=\"businessType\" #z (selectionChange)=\"businessTypeFunAction(z.value)\"\n                      formControlName=\"businessType\" name=\"businessType\" placeholder=\"Business type\">\n                      <mat-option value=\"\">Select businessType</mat-option>\n                      <mat-option *ngFor=\"let business of businessTypeValue ; let i = index\" value=\"{{business.value}}\">\n                        {{business.name}}</mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"ein\" formControlName=\"ein\" id=\"ein\" placeholder=\"EIN\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('ein').touched\">\n                      <span *ngIf=\"getControl.hasError('pattern',['ein'])\">\n                        Invalid EIN\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n            </div>\n            <!-- controller -->\n            <div class=\"col-sm-6 p-0 mt-sm-5\" formGroupName=\"controller\">\n              <div class=\"col-sm-12 pb-5 pt-3\">\n                <span class=\"header pL30\">Controller Information</span>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" [readonly]=\"validateType\" name=\"firstName\" formControlName=\"firstName\"\n                      id=\"firstName\" placeholder=\"First name\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('controller').get('firstName').touched\">\n                      <span *ngIf=\"getControl.get('controller').hasError('pattern',['firstName'])\">\n                        Invalid FirstName\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" [readonly]=\"validateType\" name=\"lastName\" formControlName=\"lastName\"\n                      id=\"lastName\" placeholder=\"Last name\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('controller').get('lastName').touched\">\n                      <span *ngIf=\"getControl.get('controller').hasError('pattern',['lastName'])\">\n                        Invalid LastName\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" [readonly]=\"validateType\" name=\"title\" formControlName=\"title\"\n                      id=\"title\" placeholder=\"Title\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('controller').get('title').touched\">\n                      <span *ngIf=\"getControl.get('controller').hasError('pattern',['title'])\">\n                        Invalid title\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput [matDatepicker]=\"picker\" [max]=\"maxDate\" placeholder=\"Date of Birth\"\n                      id=\"dateOfBirth\" formControlName=\"dateOfBirth\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"col-sm-12 form-group\">\n                <div class=\"col flexCol p-0\">\n                  <mat-form-field>\n                    <input matInput type=\"text\" name=\"ssn\" formControlName=\"ssn\" id=\"ssn\" [placeholder]=\"_ssnLimit\">\n                  </mat-form-field>\n                  <mat-error>\n                    <span *ngIf=\"getControl.get('controller').get('ssn').touched\">\n                      <span *ngIf=\"getControl.get('controller').hasError('pattern',['ssn'])\">\n                        Invalid SSN\n                      </span>\n                    </span>\n                  </mat-error>\n                </div>\n              </div>\n              <div class=\"col-sm-12 \">\n                <div class=\"col-sm-6 p-0\">\n                  <span class=\"hide-details \">ADDRESS</span>\n                </div>\n              </div>\n              <div formGroupName=\"address\">\n                <div class=\"col-sm-12 form-group\">\n                  <div class=\"col flexCol p-0\">\n                    <mat-form-field>\n                      <input matInput type=\"text\" [readonly]=\"validateType\" name=\"address1\" formControlName=\"address1\"\n                        id=\"address1\" placeholder=\"Address-1\">\n                    </mat-form-field>\n                    <mat-error>\n                      <span *ngIf=\"getControl.get('controller').get('address').get('address1').touched\">\n                        <span *ngIf=\"getControl.get('controller').get('address').hasError('pattern',['address1'])\">\n                          Invalid address1\n                        </span>\n                      </span>\n                    </mat-error>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 form-group\">\n                  <div class=\"col flexCol p-0\">\n                    <mat-form-field>\n                      <input matInput type=\"text\" [readonly]=\"validateType\" name=\"address2\" formControlName=\"address2\"\n                        id=\"address2\" placeholder=\"Address-2\">\n                    </mat-form-field>\n                    <mat-error>\n                      <span *ngIf=\"getControl.get('controller').get('address').get('address2').touched\">\n                        <span *ngIf=\"getControl.get('controller').get('address').hasError('pattern',['address2'])\">\n                          Invalid address2\n                        </span>\n                      </span>\n                    </mat-error>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 form-group\">\n                  <div class=\"col flexCol p-0\">\n                    <mat-form-field>\n                      <mat-select #t (selectionChange)=\"countrySelectAction(t.value)\" name=\"country\"\n                        formControlName=\"country\" id=\"country\" placeholder=\"Country\">\n                        <mat-option *ngFor=\"let item of countriesList; let i = index\" value=\"{{item | json}}\">\n                          {{item.countryName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 form-group\">\n                  <div class=\"col flexCol p-0\">\n                    <mat-form-field>\n                      <mat-select name=\"stateProvinceRegion\" formControlName=\"stateProvinceRegion\"\n                        id=\"stateProvinceRegion\" placeholder=\"State\">\n                        <mat-option *ngFor=\"let item of statesList; let i = index\" value=\"{{ item.stateShortName }}\">{{\n                          item.stateName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 form-group\">\n                  <div class=\"col flexCol p-0\">\n                    <mat-form-field>\n                      <input matInput type=\"text\" [readonly]=\"validateType\" name=\"city\" formControlName=\"city\" id=\"city\"\n                        placeholder=\"City\">\n                    </mat-form-field>\n                    <mat-error>\n                      <span *ngIf=\"getControl.get('controller').get('address').get('city').touched\">\n                        <span *ngIf=\"getControl.get('controller').get('address').hasError('pattern',['city'])\">\n                          Invalid city\n                        </span>\n                      </span>\n                    </mat-error>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 form-group\">\n                  <div class=\"col flexCol p-0\">\n                    <mat-form-field>\n                      <input matInput type=\"text\" [readonly]=\"validateType\" name=\"postalCode\"\n                        formControlName=\"postalCode\" id=\"postalCode\" placeholder=\"Postal-code\">\n                    </mat-form-field>\n                    <mat-error>\n                      <span *ngIf=\"getControl.get('controller').get('address').get('postalCode').touched\">\n                        <span *ngIf=\"getControl.get('controller').get('address').hasError('pattern',['postalCode'])\">\n                          Invalid postalCode\n                        </span>\n                      </span>\n                    </mat-error>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group col-xs-12 col-sm-10 offset-sm-1 p-0\">\n      <div class=\" col pt-4 col-xs-12\">\n        <span>\n          <mat-checkbox color=\"primary\" type=\"checkbox\" (change)=\"action1()\" id=\"{{CRDwollaTOSControl}}\"\n            formControlName=\"{{CRDwollaTOSControl}}\" name=\"{{CRDwollaTOSControl}}\">\n          </mat-checkbox>\n        </span>\n        <span class=\"col terms f15\">I agree to Citizen Reserve's\n          <a class=\"link ws\" href=\"https://citizensreserve.com/terms\" target=\"_blank\">Terms of Service</a>\n          and\n          <a class=\"link ws\" href=\"https://citizensreserve.com/privacy\" target=\"_blank\">Privacy Policy</a>\n          , as well as our payment partner Dwolla's\n          <a href=\"https://www.dwolla.com/legal/tos/\" target=\"_blank\">Terms of Service </a> and\n          <a href=\"https://www.dwolla.com/legal/privacy/\" target=\"_blank\"> Privacy Policy.</a>\n        </span>\n      </div>\n      <div class=\"col d-flex justify-content-center mt-4 mb-3  pB40\">\n        <button class=\"btn btn-info\" [disabled]=\"CitizensReserveTOSformValid\"\n          [ngClass]=\"{'disabled': CitizensReserveTOSformValid}\" (click)=\"submitData.emit(); onSubmit.emit();\">Agree\n          & Continue</button>\n      </div>\n    </div>\n  </div>\n</form>",
                        styles: [".logo{position:absolute;font-size:50px;opacity:0;right:0;top:0}.hide-details{font-family:'Encode Sans',sans-serif!important;font-size:15px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px;color:#1d1d1d}.pB40{padding-bottom:40px}.hide-details1{font-family:'Encode Sans',sans-serif!important;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px;color:#1d1d1d}.pL43{padding-left:43px}.logoDiv{position:relative;overflow:hidden;margin-top:15px}.f60{font-size:60px;color:#000}.padLft{padding-left:4px}#snackbar{visibility:hidden;min-width:250px;margin-left:-125px;background-color:#333;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;left:50%;bottom:30px;font-size:17px}#snackbar.show{visibility:visible;-webkit-animation:.5s fadein,.5s 2.5s fadeout;animation:.5s fadein,.5s 2.5s fadeout}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}#successfull{visibility:hidden;min-width:250px;margin-left:-125px;background-color:#4cca1a;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;left:50%;bottom:30px;font-size:17px}#successfull.show{visibility:visible;-webkit-animation:.5s fadein,.5s 2.5s fadeout;animation:.5s fadein,.5s 2.5s fadeout}.padLeft{padding-left:19px}.marginBoth{margin-top:0;margin-bottom:0}.circle{width:60px;height:60px;color:#fff;background:#031103;border-radius:50%}.progressText{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;color:#b6b6b6}.Setup-marketplace-in{width:249px;height:24px;font-family:Poppins-Regular,sans-serif;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;color:var(--black);margin-left:2%}.-Fill-out-preferenc{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#3e3e3e}.lastDiv{margin-bottom:14%}.lastELem{margin-bottom:1%}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}.trMar{padding-top:3%}.progressTxt{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:1;text-align:center;color:#b6b6b6}.divMarBtm{margin-bottom:3%}.intText{font-family:'Encode Sans',sans-serif!important;font-size:15px;font-weight:500;text-align:center;color:#b6b6b6;margin-bottom:0}.txtFlow{word-wrap:break-word;overflow-wrap:break-word;white-space:pre-wrap}.pL0R0{padding-right:15px;padding-left:15px}.pL0{padding-left:0}.Account-Setup{font-family:Poppins,sans-serif;font-size:21px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#1c1c1c;color:var(--black)}.border_bottom{border-bottom:2px solid #a7bf2e}.cancel{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#000}.zeplin_button{width:81px;height:40px;color:#fff;border:2px solid #757575;background-color:#757575}.btn_zep:hover{background-color:#a7bf2e}.zeplin_button1{width:81px;height:40px;color:#000;border:2px solid #757575;background-color:#272727}.btn_zep1:hover{background-color:#757575}@media screen and (max-width:700px){.Rectangle-10{width:100%;height:100%;background-color:#272727}}@media screen and (max-width:800px){.pL25{padding-left:25px}.pL0R0{padding-left:0;padding-right:0}}@media screen and (max-width:1500px){.pL0R0one{padding-left:15px;padding-right:15px}}@media screen and (min-width:500px){.Rectangle-10{width:100%;height:84px;background-color:#272727}.pL124,.pL128{padding-left:10px}.top_mrg_list_respo{padding-top:20px}.txt_aln_res{text-align:right}.res-pad{padding-left:0;padding-right:20px}.pT30{padding-top:30px}.mT27{margin-top:24px}.pL25{padding-left:0}.pR64L0{padding-right:64px;padding-left:0}.pL0R0{padding-right:0;padding-left:0}.pL0R0one{padding-left:0;padding-right:0}}.pL39{padding-left:82px}.pL-15{padding-left:15px}.pR10{padding-right:5px}.pL15{padding-left:41px}.pR28{padding-right:86px}.pR15{padding-right:46px}@media (max-width:430px){.confirmTxt,.progressTxt{padding-left:0;padding-right:0}.pL40{padding-left:10px}.pL16{padding-left:0}.pr15,.pr28{padding-right:0}}.pT6{padding-top:6px}.pT28{padding-top:28px}.pL20{padding-left:4px}.pT5{padding-top:13px}.REVIEW-BIDS{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#f3eeee}.pT16{padding-top:16px}.Spring-Cases{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:2;letter-spacing:.1px;color:#757575}.pT3B3{padding-top:3px;padding-bottom:3px}.paddingLeft27{padding-left:27px;padding-right:28px}@media (max-width:430px){.paddingLeft27{padding-left:18px;padding-right:23px}}.pB25{padding-bottom:25px}.mL29{margin-left:29px}.progressWidth{width:20%}.mL28{margin-left:28px}.pL31{padding-left:23px}.pR46{padding-right:20px}.pR68{padding-right:38px}.pR82{padding-right:73px}@media screen and (max-width:1024px){.mL29{margin-left:0}.progressWidth{width:20%}.mL28{margin-left:-6px}.pL31{padding-left:0}.pR46{padding-right:0;padding-left:0}.pR68{padding-right:4px}.pR82{padding-right:0}}.pL-250{padding-left:250px}.mL-120{margin-left:120px}.Dashboard{font-family:Poppins,sans-serif!important;font-size:22px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6}.product-list2 .article .product-img{width:255px;height:158px;float:left;text-align:center;line-height:158px;border:1px solid #f4f4f4;box-shadow:rgba(0,0,0,.05) 0 0 2px;position:relative;margin:0 -255px 0 0;z-index:10}.pB-56{padding-bottom:56px}.pL40{padding-left:40px}.Bheight{height:261px}.bgColor{background-color:#9ea6af;box-shadow:rgba(0,0,0,.05) 0 0 2px}.card-header{margin-bottom:17px;background-color:#9ea6af;border-radius:0 0 5px 6px;box-shadow:0 1px 1px rgba(0,0,0,.5);color:#fff}.headerFont{font-family:Poppins-Regular,sans-serif;letter-spacing:0}.pL-30{padding-left:30px}.header{font-family:'Encode Sans',sans-serif;font-size:20px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important}.pT-20{padding-left:41px;padding-top:21px;padding-right:0}.pB-37{padding-bottom:37px}.line{max-height:50px}.pL186{padding-left:186px}.Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05);font-size:12px!important}.btn-agree{color:#fff;background-color:#747474;border-radius:45px;padding:15px 40px;border:0;cursor:pointer;font-weight:700}.btn-agree:hover{background-color:#5a5a5a;cursor:pointer}.disabled{background-color:#757575;cursor:not-allowed!important}.pL100{padding-left:100px}.pT9{padding-top:9px}.pT25{padding-top:25px}.pL63{padding-left:64px}.f15{font-size:15px}.terms{font-family:'Encode Sans'}.display-2{font-size:5.2rem!important;line-height:1.5!important}.border-dot{border-style:dashed!important;border-color:#6a68689e;border-radius:1px;border-width:2px}.upload{opacity:0;width:277px!important;position:relative;height:120px}.upload:hover{cursor:pointer!important}.upload-icon{position:absolute}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.5rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.add{font-family:Poppins,sans-serif!important;font-size:1.7rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px;color:#ccda5c}.add:hover{font-weight:600}#createCustomer /deep/.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1rem!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuCreateCustomerComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder }
            ];
        };
        SukuCreateCustomerComponent.propDecorators = {
            form: [{ type: i0.Input }],
            formArrayNameValue: [{ type: i0.Input }],
            countriesList: [{ type: i0.Input }],
            statesList: [{ type: i0.Input }],
            CRDwollaTOSControl: [{ type: i0.Input }],
            CitizensReserveTOScontrol: [{ type: i0.Input }],
            countrySelect: [{ type: i0.Output }],
            submitData: [{ type: i0.Output }],
            onSubmit: [{ type: i0.Output }],
            stateSelect: [{ type: i0.Output }],
            industryTypeFun: [{ type: i0.Output }],
            businessTypeFun: [{ type: i0.Output }],
            businessTypeValue: [{ type: i0.Input }],
            industryTypeValue: [{ type: i0.Input }],
            businessClassificationValue: [{ type: i0.Input }],
            ssnLimit: [{ type: i0.Input }]
        };
        return SukuCreateCustomerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuCreationCustomerFileuploadComponent = /** @class */ (function () {
        function SukuCreationCustomerFileuploadComponent(snackBar) {
            this.snackBar = snackBar;
            this.docType = [];
            this.fileArrayList = [];
            this.title = 'Document upload:';
            this.OnFileChange = new i0.EventEmitter();
            this.submitData = new i0.EventEmitter();
        }
        Object.defineProperty(SukuCreationCustomerFileuploadComponent.prototype, "classification", {
            get: /**
             * @return {?}
             */ function () {
                return this._classification;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                console.log(val);
                this._classification = val;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuCreationCustomerFileuploadComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                console.log('suku-creation-customer-fileupload');
                this.docType = [
                    {
                        name: 'passport',
                        value: 'passport'
                    },
                    {
                        name: 'license',
                        value: 'license'
                    },
                    {
                        name: 'idCard',
                        value: 'idCard'
                    }
                ];
            };
        /**
         * @param {?} val
         * @return {?}
         */
        SukuCreationCustomerFileuploadComponent.prototype.imageType = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this.documentType = val;
                console.log('val', val);
                if (val) {
                    this.uploadType = val;
                }
            };
        /**
         * @param {?} e
         * @return {?}
         */
        SukuCreationCustomerFileuploadComponent.prototype.fileupload = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                console.log(e);
                if (this._classification == 'business') {
                    this.documentType = true;
                    this.uploadType = 'other';
                }
                if (this.documentType) {
                    /** @type {?} */
                    var files = e.target.files;
                    /** @type {?} */
                    var maxFileSize = 9999999;
                    /** @type {?} */
                    var currentFileSize = void 0;
                    /** @type {?} */
                    var file = e.target.files[0];
                    currentFileSize = file.size;
                    if (currentFileSize <= maxFileSize) {
                        if (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg' || file.type == 'application/pdf') {
                            if (e.target.files && e.target.files.length > 0) {
                                for (var i = 0; i < e.target.files.length; i++) {
                                    /** @type {?} */
                                    var file_1 = e.target.files[i];
                                    /** @type {?} */
                                    var docType = this.uploadType;
                                    /** @type {?} */
                                    var data = {
                                        file: file_1,
                                        documentType: docType
                                    };
                                    this.fileArrayList.push(file_1);
                                    console.log("this.fileArrayList", this.fileArrayList);
                                    this.OnFileChange.emit(data);
                                    currentFileSize = file_1.size;
                                }
                                e.target.value = '';
                            }
                        }
                        else {
                            this.snackbar('The file type jpg/jpeg/png/pdf files are allowed!');
                        }
                    }
                    else {
                        this.snackbar('The file size cannot exceed 10 MB');
                    }
                }
                else {
                    this.snackbar('Please select document type.');
                }
            };
        /**
         * @param {?} msg
         * @return {?}
         */
        SukuCreationCustomerFileuploadComponent.prototype.snackbar = /**
         * @param {?} msg
         * @return {?}
         */
            function (msg) {
                this.snackBar.open(msg, 'close', {
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    duration: 3500
                });
            };
        SukuCreationCustomerFileuploadComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-creation-customer-fileupload',
                        template: "<div class=\"col p-0\">\n  <label class=\"titleClass\"><strong>{{title}}</strong></label>\n  <div class=\"col Rectangle-2 d-flex\">\n    <div class=\"col p-3\">\n      <div class=\"col p-3 mt-3 col-12 noPadding \">\n        <div class=\"col\">\n          <div class=\"col flexCol p-0\">\n            <div class=\"col-sm-10 f14\">\n              <span class=\"poppins\" *ngIf=\"!(_classification == 'business')\">For Controller Verification:</span>\n              <span class=\"poppins\" *ngIf=\"(_classification == 'business')\">For Business Verification:</span>\n            </div>\n            <div class=\"col-sm-12 preFont\">\n              <div *ngIf=\"!(_classification == 'business')\" class=\"pl-2\">\n                <p class=\"mB-0 Spring-Cases txtFlow\">\n                  Please submit verification documentation.\n                  Files must be either a .jpg, .jpeg, .png, or .pdf up to 10MB in size.*\n                </p>\n                Allowed Documents:\n                <ul class=\"pl-5 ml-2\">\n                  <li>Unexpired Passport</li>\n                  <li>Unexpired driver's license</li>\n                  <li>Other unexpired Government Issued ID card</li>\n                </ul>\n              </div>\n              <div *ngIf=\"(_classification == 'business')\" class=\"pl-2\">\n                <p class=\"mB-0 Spring-Cases txtFlow\">\n                  Please submit verification documentation.\n                  Files must be either a .jpg, .jpeg, .png, or .pdf up to 10MB in size.*\n                </p>\n                <ul class=\"pl-5 ml-2\">\n                  <li>Partnership, General Partnership: EIN Letter (IRS-issued SS4 confirmation letter).</li>\n                  <li>(Limited Liability Corporation (LLC), Corporation: EIN Letter (IRS-issued SS4 confirmation\n                    letter).</li>\n                  <li class=\"text-justify\">Sole Proprietorship: One or more of the following, as applicable to your sole\n                    proprietorship: Fictitious Business Name Statement; Certificate of Assumed Name; Business License;\n                    Sales/Use Tax License; Registration of Trade Name; EIN documentation (IRS-issued SS4 confirmation\n                    letter); Color copy of a valid government-issued photo ID (e.g., a driver's license, passport, or\n                    state ID card).\n                    Other business documents that are applicable includes any US government entity (federal, state,\n                    local) issued business formation or licensing exhibiting the name of the business enrolling with\n                    Dwolla, or; Any business formation documents exhibiting the name of the business entity in addition\n                    to being filed and stamped by a US government entity. Examples include:</li>\n                  <li>Filed and stamped Articles of Organization or Incorporation</li>\n                  <li>Sales/Use Tax License</li>\n                  <li>Business License</li>\n                  <li>Certificate of Good Standing</li>\n                </ul>\n              </div>\n              <div class=\"col mt-3 mb-3 p-0\" *ngIf=\"fileArrayList?.length > 0\">\n                <p class=\"poppins\">Document uploaded list:</p>\n                <ul class=\"pl-5 ml-2\">\n                  <li *ngFor=\"let file of fileArrayList\"><i>{{file?.name}}</i></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"col-sm-4 offset-sm-8 p-0\">\n            <mat-form-field class=\"col p-0\" *ngIf=\"_classification == 'controller'\">\n              <mat-select placeholder=\"type of Document\" id=\"uploadDoc\" #types\n                (selectionChange)=\"imageType(types.value)\">\n                <mat-option *ngFor=\"let type of docType\" [value]=\"type.value\">\n                  {{type.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div class=\"col flexCol p-0\">\n            <div\n              class=\"col-sm-4 offset-sm-8 border-dot rounded-0 bg-light d-flex justify-content-center text-center p-4\">\n              <div class=\"col-sm-5 col-4 p-5 m-4\">\n                <a onclick=\"document.getElementById('myFileInput').click()\"\n                  class=\" fa fa-cloud-upload upload-icon f60 text-muted center-block\" id=\"saleTwoUpload\" style=\"width: 100%\">\n                </a>\n                <input type=\"file\" class=\"upload\" placeholder={{imagepath}} id=\"myFileInput\" accept=\".pdf,.jpg, .jpeg, .png\"\n                  name=\"uploadDocument[]\" #fileInput (change)=\"fileupload($event)\" multiple=\"true\" />\n              </div>\n              <div class=\"col-sm-8 err_style \" *ngIf=\"showPdfErrorMsg\" id=\"uploadcanExceed\">The file type\n                pdf/doc/docx\n                files\n                are allowed! </div>\n              <div class=\"col-sm-8 err_style \" *ngIf=\"showMessage\" id=\"uploadcanExceed\">The file size cannot exceed\n                10\n                MB</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"col d-flex justify-content-center mt-4 mb-3\">\n              <button class=\"btn btn-info\" (click)=\"submitData.emit(); \">Agree & Continue</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{font-size:12px!important;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.display-2{font-size:5.2rem!important;line-height:1.5!important}.border-dot{border-style:dashed!important;border-color:#6a68689e;border-radius:1px;border-width:2px}.upload{opacity:0;width:277px!important;position:relative;height:120px}.upload:hover{cursor:pointer!important}.upload-icon{position:absolute;top:0;left:0}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:var(--suku-primary-font)}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.disabled{cursor:not-allowed!important}.add{font-family:var(--suku-primary-font);font-size:1.7rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px;color:#ccda5c}.add:hover{font-weight:600}.docText{font-family:var(--suku-primary-font);letter-spacing:.1px}label.titleClass{font-family:var(--suku-primary-font);font-size:20px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px}.preFont{font-family:var(--suku-secondary-font);letter-spacing:.1px;font-size:14px}.Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.f60{font-size:60px}"]
                    }] }
        ];
        /** @nocollapse */
        SukuCreationCustomerFileuploadComponent.ctorParameters = function () {
            return [
                { type: material.MatSnackBar }
            ];
        };
        SukuCreationCustomerFileuploadComponent.propDecorators = {
            title: [{ type: i0.Input }],
            classification: [{ type: i0.Input }],
            OnFileChange: [{ type: i0.Output }],
            submitData: [{ type: i0.Output }]
        };
        return SukuCreationCustomerFileuploadComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuDashboardProfileComponent = /** @class */ (function () {
        function SukuDashboardProfileComponent() {
            this.image = 'assets/images/user.png';
            this.icon = 'assets/images/plus-icon.png';
            this.iconOne = 'suku-plus-icon suku-md';
            this.iconTwo = 'suku-plus-icon suku-md';
            this.createNewList = new i0.EventEmitter();
            this.clearBuyInterestStorage = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuDashboardProfileComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuDashboardProfileComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-dashboard-profile',
                        template: "<div class=\"profileBox\">\n  <div class=\"col-md-12 col-sm-12 text-center\">\n    <img class=\"circle mb-4 mt-4\" id=\"image\" src=\"{{image}}\" alt=\"PROFILE\">\n  </div>\n  <div class=\"col-md-12 col-sm-12 text-center\">\n    <label class=\"userName\">\n      {{ userName }}\n    </label>\n  </div>\n  <div class=\"b-line mt-3 mb-3\"></div>\n  <div class=\"col-sm-12 col-md-12\" id=\"newSellList\">\n    <div class=\"row pointer\">\n      <div class=\"pl-4 pr-4 pb-2 pt-2 col mb-1\">\n        <span (click)=\"createNewList.emit(1)\" class=\"c-pointer row pl-3\">\n          <i class=\"{{iconOne}} {{iconOneCustomClass}}\" id=\"{{iconOneId}}\"></i>\n          <!-- <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\"> -->\n          <span class=\"create-interest-listing c-pointer mt-auto pb-2 mb-auto pl-2\">{{titleOne || 'CREATE\n            NEW LISTING'}} </span>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-12 pb-5\" id=\"newBuyInterest\">\n    <div class=\"row pointer\">\n      <div class=\"pl-4 pb-3 pr-4 pt-2 col mb-2\">\n        <span (click)=\"clearBuyInterestStorage.emit(1)\" class=\"c-pointer row pl-3\">\n          <i class=\"{{iconTwo}} {{iconTwoCustomClass}}\" id=\"{{iconTwoId}}\"></i>\n          <!-- <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\"> -->\n          <span class=\"create-interest-listing c-pointer mt-auto mb-auto pb-2 pl-2 mB-170\">{{titleTwo\n            || 'CREATE NEW INTEREST'}}</span>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.circle{background-color:#f2f2f2;height:150px;width:150px;border-radius:100%}.profileBox{width:200px;height:487px;border-radius:0 0 30px 30px;background-color:#fff;box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.b-line{opacity:.09;border:1px solid #97979796}.userName{font-family:Poppins,sans-serif;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;text-transform:capitalize;word-break:break-all!important}.create-interest-listing{font-family:'Encode sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6;word-break:break-all!important}.default{width:170px;height:274px;box-shadow:0 2px 4px 0 rgba(0,0,0,.03);background-color:#fff}.c-pointer{cursor:pointer!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuDashboardProfileComponent.ctorParameters = function () { return []; };
        SukuDashboardProfileComponent.propDecorators = {
            userName: [{ type: i0.Input, args: ['user-name',] }],
            image: [{ type: i0.Input }],
            icon: [{ type: i0.Input }],
            titleOne: [{ type: i0.Input, args: ['title-one',] }],
            iconOne: [{ type: i0.Input, args: ['icon-one',] }],
            iconOneId: [{ type: i0.Input, args: ['icon-one-id',] }],
            iconOneCustomClass: [{ type: i0.Input, args: ['icon-one-custom-class',] }],
            iconTwo: [{ type: i0.Input, args: ['icon-two',] }],
            iconTwoId: [{ type: i0.Input, args: ['icon-two-id',] }],
            iconTwoCustomClass: [{ type: i0.Input, args: ['icon-two-custom-class',] }],
            titleTwo: [{ type: i0.Input, args: ['title-two',] }],
            createNewList: [{ type: i0.Output, args: ['action-one',] }],
            clearBuyInterestStorage: [{ type: i0.Output, args: ['action-two',] }]
        };
        return SukuDashboardProfileComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuDropdownComponent = /** @class */ (function () {
        // @Input() icon = 'suku-arrow-icon';
        // @Input('icon-custom-class') iconCustomClass = 'arrow-icon';
        function SukuDropdownComponent() {
            this.control = 'productTraceability';
            this.data = [];
            this.keyValue = 'productName';
            this.displayKey = 'productName';
            this.placeholder = 'select product from this listing';
            this.selectId = 'sttProductTraceability';
            this.errorMsg = 'Cannot be blank';
            this.customSelectClass = '';
            this.icon = 'suku-dropdown-icon';
            this.iconCustomClass = 'arrow-icon';
            this.iconId = 'arrow';
            this.select = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuDropdownComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} field
         * @return {?}
         */
        SukuDropdownComponent.prototype.isFieldValid = /**
         * @param {?} field
         * @return {?}
         */
            function (field) {
                return ((!this.form.get(field).valid && this.form.get(field).touched) ||
                    (this.form.get(field).untouched && this.formSumitAttempt));
            };
        SukuDropdownComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-dropdown',
                        template: "<span [formGroup]=\"form\">\n  <mat-form-field class=\"col p-0\">\n    <mat-select id=\"{{selectId}}\" [class]=\"customSelectClass\" #selector formControlName=\"{{control}}\"\n      (selectionChange)=\"select.emit(selector.value)\" [placeholder]=\"placeholder\">\n      <mat-option *ngFor=\"let item of data;let i=index\" value=\"{{item[keyValue]}}\" id=\"option{{i}}\">\n        {{item[displayKey]}}\n      </mat-option>\n    </mat-select>\n    <span id=\"dropdown-arrow-icon\" matSuffix>\n      <mat-icon>\n        <span>\n          <i [id]=\"iconId\" class=\"{{iconCustomClass}} {{icon}}\"></i>\n          <!-- <img [id]=\"iconId\" class=\"{{iconCustomClass}}\" height=\"23\" src=\"{{icon}}\" width=\"20\"> -->\n        </span>\n      </mat-icon>\n    </span>\n    <mat-error>\n      <span class=\"err_style\">\n        <span *ngIf=\"form.hasError('required',[control])\" id=\"countryReq\">{{errorMsg}}</span>\n      </span>\n    </mat-error>\n  </mat-form-field>\n</span>",
                        styles: ["::ng-deep .mat-select-arrow{border:0!important;-webkit-appearance:none;-moz-appearance:none}:host ::ng-deep.mat-select-trigger{height:1.7em!important;padding-bottom:.5em!important}:host ::ng-deep .mat-form-field-suffix{top:9px!important}.mat-select-panel{margin-left:10px!important}.mat-select-panel:focus,.mat-select-trigger:focus{outline:0!important}::ng-deep mat-select:focus{outline:0!important}.arrow-icon{font-size:2.5em}"]
                    }] }
        ];
        /** @nocollapse */
        SukuDropdownComponent.ctorParameters = function () { return []; };
        SukuDropdownComponent.propDecorators = {
            form: [{ type: i0.Input }],
            control: [{ type: i0.Input }],
            data: [{ type: i0.Input }],
            keyValue: [{ type: i0.Input }],
            displayKey: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            formSumitAttempt: [{ type: i0.Input }],
            selectId: [{ type: i0.Input }],
            errorMsg: [{ type: i0.Input }],
            customSelectClass: [{ type: i0.Input }],
            icon: [{ type: i0.Input }],
            iconCustomClass: [{ type: i0.Input, args: ['icon-custom-class',] }],
            iconId: [{ type: i0.Input, args: ['icon-id',] }],
            select: [{ type: i0.Output }]
        };
        return SukuDropdownComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuDwollaFundingAgreementComponent = /** @class */ (function () {
        function SukuDwollaFundingAgreementComponent() {
            this.title = 'Funding Source Agreement';
            this.titleClass = 'mb-3 mt-5 ';
            this.titleid = '';
            this.titleWeight = '';
            this.titleColor = '';
            this.titleSize = '';
            this.checkBoxId = 'checkAgreement';
            this.content = ' I agree that future payments to daisy will be processed by the Dwolla payment system from the selected account above. In order to cancel this authorization, I will change my payment settings within my emery account.';
            this.contentId = 'termsID';
            this.contentSize = '15';
            this.btnTextSize = '1.5';
            this.submit = new i0.EventEmitter();
            this.verify = new i0.EventEmitter();
            this.formValid = true;
        }
        /**
         * @return {?}
         */
        SukuDwollaFundingAgreementComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        SukuDwollaFundingAgreementComponent.prototype.action = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var controlName = this.control;
                if (this.form.get(controlName).value) {
                    this.formValid = false;
                    this.verify.emit();
                }
                else {
                    this.formValid = true;
                }
            };
        /**
         * @return {?}
         */
        SukuDwollaFundingAgreementComponent.prototype.agree = /**
         * @return {?}
         */
            function () {
                console.log(this.form);
                this.submit.emit(this.form);
            };
        SukuDwollaFundingAgreementComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-dwolla-funding-agreement',
                        template: "<div class=\"col p-4\" [formGroup]=\"form\">\n  <label [style.font-size.px]=\"titleSize\" [class]=\"titleClass\" id=\"{{titleid}}\" [style.font-weight]=\"titleWeight\"\n    [style.color]=\"titleColor\">{{title}}</label>\n  <div class=\"col bg p-4\">\n    <div class=\"col mt-4 mb-3\">\n      <mat-checkbox color=\"primary\" formControlName=\"{{control}}\" type=\"checkbox\" (change)=\"action()\"\n        id=\"{{checkBoxId}}\">\n      </mat-checkbox>\n      <span class=\"col-sm-12 terms\" [style.font-size.px]=\"contentSize\" id=\"{{contentId}}\">\n        {{content}}\n      </span>\n    </div>\n    <div class=\"col d-flex justify-content-center mt-5 mb-3\">\n      <button class=\"suku suku-info\" [ngClass]=\"{'disabled': formValid}\" (click)=\"agree()\"\n        [style.font-size.rem]=\"btnTextSize\" [disabled]=\"formValid\">Agree & Continue</button>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.terms{font-family:var(--suku-secondary-font);font-size:15px}.bg{border-radius:0 0 41px 41px;background-color:var(--suku-default-bg);box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}label{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-6);font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px;color:#1d1d1d}.suku{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:var(--suku-primary-font);font-size:1.5rem}.suku-info{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff;color:#00000099}.suku-info:active,.suku-info:hover{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:var(--suku-primary-color);color:#fff}.suku-info.disabled{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff;color:grey}.suku-info.disabled.focus,.suku-info.disabled:focus,.suku-info.disabled:hover,.suku-info[disabled].focus,.suku-info[disabled]:focus,.suku-info[disabled]:hover,fieldset[disabled] .suku-info.focus,fieldset[disabled] .suku-info:focus,fieldset[disabled] .suku-info:hover{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info.focus,.suku-info:focus{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:var(--suku-primary-color);color:#fff;box-shadow:none!important}.open>.dropdown-toggle .suku-info.focus,.open>.dropdown-toggle .suku-info:focus,.open>.dropdown-toggle.suku-info:hover,.suku-info.active.focus,.suku-info.active:focus,.suku-info.active:hover,.suku-info:active.focus,.suku-info:active:focus,.suku-info:active:hover{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:var(--suku-primary-color);color:#fff;box-shadow:none!important}.disabled{cursor:not-allowed!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuDwollaFundingAgreementComponent.ctorParameters = function () { return []; };
        SukuDwollaFundingAgreementComponent.propDecorators = {
            form: [{ type: i0.Input }],
            title: [{ type: i0.Input }],
            titleClass: [{ type: i0.Input }],
            titleid: [{ type: i0.Input }],
            titleWeight: [{ type: i0.Input }],
            titleColor: [{ type: i0.Input }],
            titleSize: [{ type: i0.Input }],
            control: [{ type: i0.Input }],
            checkBoxId: [{ type: i0.Input }],
            content: [{ type: i0.Input }],
            contentId: [{ type: i0.Input }],
            contentSize: [{ type: i0.Input }],
            btnTextSize: [{ type: i0.Input, args: [' btn-text-size',] }],
            submit: [{ type: i0.Output }],
            verify: [{ type: i0.Output }]
        };
        return SukuDwollaFundingAgreementComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuDwollaFundingSourceComponent = /** @class */ (function () {
        function SukuDwollaFundingSourceComponent(snackBar) {
            this.snackBar = snackBar;
            this.enable = {
                button: false
            };
            this.action = new i0.EventEmitter();
        }
        Object.defineProperty(SukuDwollaFundingSourceComponent.prototype, "iavToken", {
            get: /**
             * @return {?}
             */ function () {
                return this._iavToken;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._iavToken = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SukuDwollaFundingSourceComponent.prototype, "validResponse", {
            get: /**
             * @return {?}
             */ function () {
                return this._validResponse;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._validResponse = val;
                console.log('_validResponse', this._validResponse);
                if (this._validResponse) {
                    this.getDwollaHtml();
                }
                else {
                    this.snackbar('Please wait...');
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuDwollaFundingSourceComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        SukuDwollaFundingSourceComponent.prototype.getDwollaHtml = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._iavToken) {
                    if (document.getElementById('iavContainer')) {
                        /** @type {?} */
                        var list = document.getElementById('iavContainer');
                        while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild);
                        }
                    }
                    console.log('triggered', this._iavToken);
                    dwolla.configure('sandbox');
                    dwolla.iav.start(this._iavToken, {
                        container: 'iavContainer',
                        stylesheets: ['https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext'],
                        microDeposits: true,
                        backButton: true,
                        fallbackToMicroDeposits: true
                    }, ( /**
                     * @param {?} err
                     * @param {?} res
                     * @return {?}
                     */function (err, res) {
                        console.log('Error: ' + JSON.stringify(err) + ' -- Response: ' + JSON.stringify(res));
                        if (res) {
                            /** @type {?} */
                            var checkResponse = res['_links']['funding-source'].href;
                            if (checkResponse) {
                                _this.enable.button = true;
                            }
                            else {
                                _this.enable.button = false;
                            }
                        }
                    }));
                }
                else {
                    this.snackbar('Please try after sometime.');
                }
            };
        /**
         * @param {?} msg
         * @return {?}
         */
        SukuDwollaFundingSourceComponent.prototype.snackbar = /**
         * @param {?} msg
         * @return {?}
         */
            function (msg) {
                this.snackBar.open(msg, 'close', {
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    duration: 3000
                });
            };
        SukuDwollaFundingSourceComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-dwolla-funding-source',
                        template: "<div class=\"col p-2\">\n  <div id=\"mainContainer\">\n    <p class=\"mt-2 note pl-3 text-center\"><b>Note:</b> Adding a funding resource requires a third-party UI, which may\n      take a few moments to load.</p>\n  </div>\n  <div class=\"col pt-3 pb-2 bg m-3\">\n    <div id=\"iavContainer\"></div>\n    <div class=\"col text-center pb-4\">\n      <button class=\"suku-button\" (click)=\"action.emit()\" *ngIf=\"enable?.button \">Return to Funding Sources</button>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-button{cursor:pointer;border:2px solid!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:var(--suku-primary-font);letter-spacing:1px}.suku-button:hover{cursor:pointer;border:2px solid!important;padding:10px 32px!important;background-color:var(--suku-primary-color)!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:var(--suku-primary-font);letter-spacing:1px}.suku-button:focus{box-shadow:none!important;outline:0!important}.dwolla-iav-link{font-weight:400;color:var(--suku-primary-color)!important;font-family:var(--suku-primary-font);letter-spacing:.2px}.dwolla-iav-button{cursor:pointer;border:2px solid!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:var(--suku-primary-font);letter-spacing:1px}.dwolla-iav-back-button{width:auto!important;cursor:pointer;border:2px solid!important;padding:10px 32px!important;background-color:#fff!important;color:#0000009c!important;border-radius:29px 77px 61px!important;font-weight:900!important;font-family:var(--suku-primary-font);letter-spacing:1.1px}.bg{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}"]
                    }] }
        ];
        /** @nocollapse */
        SukuDwollaFundingSourceComponent.ctorParameters = function () {
            return [
                { type: material.MatSnackBar }
            ];
        };
        SukuDwollaFundingSourceComponent.propDecorators = {
            iavToken: [{ type: i0.Input, args: ['iav-token',] }],
            validResponse: [{ type: i0.Input }],
            action: [{ type: i0.Output }]
        };
        return SukuDwollaFundingSourceComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuFiltersComponent = /** @class */ (function () {
        function SukuFiltersComponent() {
            this.size = '18';
            this.filterOnChange = new i0.EventEmitter();
            this.applyFilter = new i0.EventEmitter();
            this.selectAll = new i0.EventEmitter();
            this.deselectAll = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuFiltersComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuFiltersComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-filters',
                        template: "<div class=\"side-bar\" [formGroup]=\"form\">\n  <div class=\"filter-title\">\n    <a class=\"collapsed f30\" data-toggle=\"collapse\" href=\".collapse-filter\"></a>\n  </div>\n  <div class=\"collapse-filter collapse\" id=\"collapse-filter\">\n    <div class=\"box\">\n      <div class=\"filter-list\">\n        <h2 [style.font-size.px]=\"size\" class=\"unreadNotifications\">{{filterHeading}}</h2>\n        <div class=\"options pl-3\">\n          <div *ngFor=\"let status of statusTypesDynamic; let l = index\">\n            <mat-checkbox *ngIf=\"!status?.label\" color=\"primary\" [checked]=\"status.checked\"\n              (change)=\"(status.checked = $event.checked); filterOnChange.emit($event);\">\n              {{status.displayName}}</mat-checkbox>\n            <div *ngIf=\"status?.label\" class=\"mat-checkbox-label pb-2\">\n              {{status.displayName}}\n            </div>\n            <div class=\"p-0\">\n              <div class=\"col-sm-12 pl-3\" *ngFor=\"let subStatus of status.sub; let sk = index\">\n                <mat-checkbox [checked]=\"subStatus.checked\"\n                  (change)=\"(subStatus.checked = $event.checked); filterOnChange.emit($event);\" color=\"primary\">\n                  {{subStatus.displayName}}</mat-checkbox>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"p-3 mt-4 mb-1\">\n          <h3 class=\"filterSubHeading\">{{filterSubHeading}}</h3>\n          <div class=\"pb-0 mt-3\">From</div>\n          <mat-form-field class=\"p-0 col-sm-12\">\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" id=\"fromDateMyPro\"\n              formControlName=\"fromDate\" name=\"fromDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n          <div class=\"mt-3 pb-0\">To</div>\n          <mat-form-field class=\"p-0 col-sm-12\">\n            <input matInput formControlName=\"tillDate\" [matDatepicker]=\"picker1\" placeholder=\"Choose a date\"\n              id=\"tillDateMyPro\" name=\"tillDate\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n            <mat-datepicker #picker1></mat-datepicker>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"p-3 pb-4 pl-5 pr-5\">\n        <button type=\"button\" class=\" btn btn-info btn-lg btn-block\" (click)=\"applyFilter.emit()\">Apply Date Filters\n        </button>\n      </div>\n      <div class=\"filter-links\">\n        <p>\n          <a (click)=\"selectAll.emit();\">select all</a>\n          <a (click)=\"deselectAll.emit();\">clear all</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{font-size:12px!important;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;background-color:#a7bf2e}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.side-bar{width:100%;float:left;padding:0 15px 0 0}.side-bar .filter-title{color:#c5af79}.side-bar .filter-title a{color:#b6b6b6;text-decoration:none}.side-bar .box{width:100%;float:left;background:#fff;box-shadow:rgba(0,0,0,.07) 0 10px 20px;border-radius:0 0 30px 30px;padding:25px 0 15px}.side-bar .box .filter-list{width:100%;float:left;padding:0 20px}.side-bar .box .filter-list:last-child{padding-bottom:0}.side-bar .box .filter-list h2{font-family:var(--suku-primary-font);font-size:15px!important;color:#b6b6b6;border-bottom:1px solid #ececec;padding:0 0 15px;margin:0 0 15px}.side-bar .box .filter-links{width:100%;float:left;border-top:1px solid #ececec;padding:10px 0 0 30px}.side-bar .box .filter-links p{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);line-height:14px;text-transform:lowercase;padding:0}.side-bar .box .filter-links p a{color:#1d1d1d;text-decoration:underline;margin:0 15px 0 0}.side-bar .box .filter-links p a:hover{color:#02b3e3}.side-bar .box .add-btn{width:100%;float:left;padding:0 20px 20px}.side-bar .collapse{width:100%;float:left;margin:0;padding:0}@media (min-width:992px){.side-bar .filter-title a{pointer-events:none}.side-bar .collapse-filter{height:auto!important;display:block!important;overflow:visible!important;visibility:visible!important}}@media (max-width:991px){.side-bar{padding:0;margin:0 0 30px}.side-bar .filter-title{height:auto;line-height:normal;border-bottom:1px solid #ccc;padding:0 0 15px}.side-bar .filter-title a{width:100%;float:left;font-size:16px;text-transform:uppercase;text-decoration:none;position:relative;margin:0;padding:0}.side-bar .filter-title a:before{content:\"\\f056\";float:right;font-weight:300;font-size:20px;color:#c5af79;position:absolute;top:0;right:0}.side-bar .filter-title a.collapsed:before{content:\"\\f055\"}.side-bar .collapse-filter{width:100%;float:left;margin:0;padding:0}.mat-form-field{display:flow-root}.btn{font-size:10px!important;padding:5px!important}}.btn-p{border:solid 2px var(--suku-primary-color);border-radius:10px 20px 15px;background-color:#343a40!important;color:#fff;font-family:var(--suku-secondary-font);font-weight:600;font-size:14px;padding:.75rem 2.1rem}.btn-p:hover{border:solid 2px var(--suku-primary-color);background-color:var(--suku-primary-color)}.btn-primary:hover{border:2px solid var(--suku-primary-color);background-color:var(--suku-primary-color)}.btn-p:hover{border:2px solid var(--suku-primary-color);border-radius:10px 20px 15px;background-color:var(--suku-primary-color)!important;color:#fff}.btn-p-p.disabled:hover{border:2px solid!important;border-radius:10px 20px 15px;background-color:#fff;color:#1d1d1d}.zeplin_button{height:40px;color:#f2f2f2;border:solid 2px var(--suku-primary-color);background-color:#272727!important}.zeplin_button:hover{background-color:var(--suku-primary-color)!important}.zeplin_button1{height:40px;color:#f2f2f2!important;border:2px solid #757575a6!important;background-color:#272727!important}.btn_zep1:hover{background-color:#757575a6!important}.REVIEW-BIDS{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:300;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#fff}.btn-primary{border:solid 2px var(--suku-primary-color);border-radius:10px 20px 15px}.btn-primary:active,.btn-primary:hover{border:solid 2px var(--suku-primary-color);border-radius:10px 20px 15px;background-color:var(--suku-primary-color);color:#fff}.btn-primary.disabled{border:solid 2px var(--suku-primary-color);border-radius:10px 20px 15px;background-color:#fff;color:grey}.btn-primary.disabled.focus,.btn-primary.disabled:focus,.btn-primary.disabled:hover,.btn-primary[disabled].focus,.btn-primary[disabled]:focus,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary.focus,fieldset[disabled] .btn-primary:focus,fieldset[disabled] .btn-primary:hover{border:solid 2px var(--suku-primary-color);border-radius:10px 20px 15px;background-color:#fff!important;color:grey}.btn-primary.focus,.btn-primary:focus{border:solid 2px var(--suku-primary-color);border-radius:10px 20px 15px;background-color:var(--suku-primary-color);color:#fff}.btn-primary.active.focus,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active.focus,.btn-primary:active:focus,.btn-primary:active:hover,.open>.dropdown-toggle .btn-primary.focus,.open>.dropdown-toggle .btn-primary:focus,.open>.dropdown-toggle.btn-primary:hover{border:solid 2px var(--suku-primary-color);border-radius:10px 20px 15px;background-color:var(--suku-primary-color);color:#fff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}.btn-primary.focus,.btn-primary:focus,.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem var(--suku-primary-color)}.btn{border:solid 2px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:#fff;color:#000;font-family:'Encode Sans',sans-serif;font-weight:600;padding:.55rem .85rem}.btn:hover{border:solid 2px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:var(--suku-primary-color);color:#fff}.btn.disabled:hover{border:2px solid!important;border-radius:28px 76px 63px;background-color:#fff;color:#000}.btn-info{border:solid 2px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:#fff;color:#000}.btn-info:active,.btn-info:hover{border:solid 2px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:var(--suku-primary-color);color:#fff}.btn-info.disabled{border:solid 2px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:solid 2px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:#fff!important;color:grey}.btn-info.focus,.btn-info:focus{border:solid 2px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:var(--suku-primary-color);color:#fff}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:solid 2px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:var(--suku-primary-color);color:#fff}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}.btn-info.focus,.btn-info:focus,.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem var(--suku-primary-color)}.default-btn{font-family:'Encode Sans',sans-serif;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#fff!important}.secondary-btn{font-family:'Encode Sans',sans-serif;font-size:14px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important;border-bottom:3.5px solid var(--suku-primary-color)}.clearAll{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:#1d1d1d;text-decoration:underline;text-transform:uppercase}.filterSubHeading{font-size:16px;font-family:Roboto,\"Helvetica Neue\",sans-serif;letter-spacing:.2px}/deep/.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:0!important;border-style:solid;border-color:#5c4a4aa6}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none;border:1px solid #757575a6}.mat-checkbox-frame,/deep/.mat-checkbox-background{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none;border:1px solid #757575a6}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:0!important;border-style:solid;border-color:#757575a6}/deep/.mat-checkbox-checked.mat-primary .mat-checkbox-background{background-color:#fff}/deep/.mat-checkbox-checkmark-path{stroke:#0f0f0f!important}/deep/.mat-checkbox-checked .mat-checkbox-layout .mat-checkbox-label{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;letter-spacing:.2px;color:#000!important}/deep/.mat-checkbox-layout .mat-checkbox-label{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;letter-spacing:.2px;color:#757575a6!important}.mat-checkbox-label{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;letter-spacing:.2px}"]
                    }] }
        ];
        /** @nocollapse */
        SukuFiltersComponent.ctorParameters = function () { return []; };
        SukuFiltersComponent.propDecorators = {
            form: [{ type: i0.Input }],
            filterHeading: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            filterSubHeading: [{ type: i0.Input }],
            statusTypesDynamic: [{ type: i0.Input }],
            filterOnChange: [{ type: i0.Output }],
            applyFilter: [{ type: i0.Output }],
            selectAll: [{ type: i0.Output }],
            deselectAll: [{ type: i0.Output }]
        };
        return SukuFiltersComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuHeaderComponent = /** @class */ (function () {
        function SukuHeaderComponent() {
            this.titleOne = 'LISTING NAME';
            this.contentOne = 'N/A';
            this.contentOneCustomClass = 'c-pointer';
            this.titleTwo = 'SELLER NAME';
            this.contentTwo = 'N/A';
            this.contentTwoCustomClass = 'c-pointer';
            this.titleThree = 'TIME REMAINING';
            this.productBoxContentCustomClass = 'product-boxContent';
            this.contentThreeCustomClass = 'c-pointer';
            this.action = new i0.EventEmitter();
        }
        Object.defineProperty(SukuHeaderComponent.prototype, "contentThree", {
            get: /**
             * @return {?}
             */ function () {
                return this._date;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._date = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SukuHeaderComponent.prototype, "enableTimer", {
            get: /**
             * @return {?}
             */ function () {
                return this._enableTimer;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._enableTimer = val;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.contentThree = 'N/A';
            };
        SukuHeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-header',
                        template: "<div [class]=\"productBoxContentCustomClass\" [style.backgroundColor]=\"productBoxContentBgColor\">\n  <div class=\"col pl-lg-5 pt-3 pb-3\">\n    <div class=\"row\">\n      <div class=\"col pl-lg-3\">\n        <h1 [style.font-size.rem]=\"titleOneSize\" [class]=\"titleOneCustomClass\" [style.font-weight]=\"titleOneWeight\"\n          [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">{{titleOne}}</h1>\n        <h2 [style.font-size.rem]=\"contentOneSize\" [class]=\"contentOneCustomClass\"\n          [style.font-weight]=\"contentOneWeight\" [style.color]=\"contentOneColor\" id=\"{{contentOneId}}\">{{contentOne}}\n        </h2>\n      </div>\n      <div class=\"col pl-lg-5\">\n        <h1 [style.font-size.rem]=\"titleTwoSize\" [class]=\"titleTwoCustomClass\" [style.font-weight]=\"titleTwoWeight\"\n          [style.color]=\"titleTwoColor\" id=\"{{titleTwoId}}\">{{titleTwo}}</h1>\n        <h2 (click)=\"action.emit()\" [style.font-size.rem]=\"contentTwoSize\" [class]=\"contentTwoCustomClass\"\n          [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\" id=\"{{contentTwoId}}\">{{contentTwo}}\n        </h2>\n      </div>\n      <div class=\"col pl-lg-5\">\n        <h1 [style.font-size.rem]=\"titleThreeSize\" [class]=\"titleThreeCustomClass\"\n          [style.font-weight]=\"titleThreeWeight\" [style.color]=\"titleThreeColor\" id=\"{{titleThreeId}}\">{{titleThree}}\n        </h1>\n        <h2 *ngIf=\"(_enableTimer == 'false')\" [style.font-size.rem]=\"contentThreeSize\" [class]=\"contentThreeCustomClass\"\n          [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\" id=\"{{contentThreeId}}\">\n          {{contentThree}}\n        </h2>\n        <h2 *ngIf=\"(_enableTimer == 'true')\">\n          <countdown-timer [end]=\"_date\"></countdown-timer>\n        </h2>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.product-boxContent{width:100%;float:left;background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:var(--suku-primary-border-radius);box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}h1{color:#fafaf8;font-size:var(--suku-font-size-5)}h2{color:#f9f9f1bd;font-size:var(--suku-font-size-4)}.c-pointer{cursor:pointer;text-transform:capitalize}.c-pointer:hover{color:var(--suku-text-label-two);text-decoration:underline}"]
                    }] }
        ];
        /** @nocollapse */
        SukuHeaderComponent.ctorParameters = function () { return []; };
        SukuHeaderComponent.propDecorators = {
            titleOne: [{ type: i0.Input }],
            titleOneId: [{ type: i0.Input, args: ['title-one-id',] }],
            titleOneSize: [{ type: i0.Input, args: ['title-one-size',] }],
            titleOneColor: [{ type: i0.Input, args: ['title-one-color',] }],
            titleOneWeight: [{ type: i0.Input, args: ['title-one-weight',] }],
            titleOneCustomClass: [{ type: i0.Input, args: ['title-one-custom-class',] }],
            contentOne: [{ type: i0.Input }],
            contentOneId: [{ type: i0.Input, args: ['content-one-id',] }],
            contentOneSize: [{ type: i0.Input, args: ['content-one-size',] }],
            contentOneColor: [{ type: i0.Input, args: ['content-one-color',] }],
            contentOneWeight: [{ type: i0.Input, args: ['content-one-weight',] }],
            contentOneCustomClass: [{ type: i0.Input, args: ['content-one-custom-class',] }],
            titleTwo: [{ type: i0.Input }],
            titleTwoId: [{ type: i0.Input, args: ['title-two-id',] }],
            titleTwoSize: [{ type: i0.Input, args: ['title-two-size',] }],
            titleTwoColor: [{ type: i0.Input, args: ['title-two-color',] }],
            titleTwoWeight: [{ type: i0.Input, args: ['title-two-weight',] }],
            titleTwoCustomClass: [{ type: i0.Input, args: ['title-two-custom-class',] }],
            contentTwo: [{ type: i0.Input }],
            contentTwoId: [{ type: i0.Input, args: ['content-two-id',] }],
            contentTwoSize: [{ type: i0.Input, args: ['content-two-size',] }],
            contentTwoColor: [{ type: i0.Input, args: ['content-two-color',] }],
            contentTwoWeight: [{ type: i0.Input, args: ['content-two-weight',] }],
            contentTwoCustomClass: [{ type: i0.Input, args: ['content-two-custom-class',] }],
            titleThree: [{ type: i0.Input }],
            titleThreeId: [{ type: i0.Input, args: ['title-three-id',] }],
            titleThreeSize: [{ type: i0.Input, args: ['title-three-size',] }],
            titleThreeColor: [{ type: i0.Input, args: ['title-three-color',] }],
            titleThreeWeight: [{ type: i0.Input, args: ['title-three-weight',] }],
            titleThreeCustomClass: [{ type: i0.Input, args: ['title-three-custom-class',] }],
            productBoxContentCustomClass: [{ type: i0.Input, args: ['product-box-content-custom-class',] }],
            productBoxContentBgColor: [{ type: i0.Input, args: ['product-box-content-bg-color',] }],
            contentThree: [{ type: i0.Input }],
            enableTimer: [{ type: i0.Input }],
            contentThreeId: [{ type: i0.Input, args: ['content-three-id',] }],
            contentThreeSize: [{ type: i0.Input, args: ['content-three-size',] }],
            contentThreeColor: [{ type: i0.Input, args: ['content-three-color',] }],
            contentThreeWeight: [{ type: i0.Input, args: ['content-three-weight',] }],
            contentThreeCustomClass: [{ type: i0.Input, args: ['content-three-custom-class',] }],
            action: [{ type: i0.Output }]
        };
        return SukuHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuHeadingComponent = /** @class */ (function () {
        function SukuHeadingComponent() {
            this.id = 'heading';
        }
        /**
         * @return {?}
         */
        SukuHeadingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuHeadingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-heading',
                        template: "<h1 [style.font-size.px]=\"size\" [class]=\"customClass\" [style.font-weight]=\"weight\" [style.color]=\"color\" [id]=\"id\">\n  <ng-content></ng-content>\n</h1>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h1{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important;overflow:hidden;text-overflow:ellipsis!important;white-space:nowrap}"]
                    }] }
        ];
        /** @nocollapse */
        SukuHeadingComponent.ctorParameters = function () { return []; };
        SukuHeadingComponent.propDecorators = {
            id: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            customClass: [{ type: i0.Input, args: ['custom-class',] }]
        };
        return SukuHeadingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuHomeItalicHeadingComponent = /** @class */ (function () {
        function SukuHomeItalicHeadingComponent() {
        }
        /**
         * @return {?}
         */
        SukuHomeItalicHeadingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuHomeItalicHeadingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-home-italic-heading',
                        template: "<h5 [style.font-size.px]=\"size\" [style.color]=\"color\" [class]=\"customClass\" [style.font-weight]=\"weight\">\n  <ng-content></ng-content>\n</h5>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h5{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-3);font-weight:400;font-style:italic!important;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#646469;word-break:break-all!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuHomeItalicHeadingComponent.ctorParameters = function () { return []; };
        SukuHomeItalicHeadingComponent.propDecorators = {
            id: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            customClass: [{ type: i0.Input, args: ['custom-class',] }]
        };
        return SukuHomeItalicHeadingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuHomeWidgetComponent = /** @class */ (function () {
        function SukuHomeWidgetComponent() {
            this.color = '#f1f4f5';
            this.bgColor = '#76767b';
            this.routerLink = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuHomeWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuHomeWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-home-widget',
                        template: "<div class=\"col widget\" [style.background-color]=\"bgColor\" [style.color]=\"color\" (click)=\"routerLink.emit()\">\n  <label class=\"pt-2 pb-2 c-pointer\" [id]=\"id\">\n    <ng-content></ng-content>\n  </label>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.widget{font-family:var(--suku-secondary-font);border-radius:6px 20px 20px;font-size:var(--suku-font-size-5);float:left;width:150px;height:63px;word-break:break-word!important}.c-pointer{cursor:pointer!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuHomeWidgetComponent.ctorParameters = function () { return []; };
        SukuHomeWidgetComponent.propDecorators = {
            id: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            bgColor: [{ type: i0.Input }],
            routerLink: [{ type: i0.Output }]
        };
        return SukuHomeWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuHomepageSectionComponent = /** @class */ (function () {
        function SukuHomepageSectionComponent() {
            this.sendRoutePath = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuHomepageSectionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} string
         * @return {?}
         */
        SukuHomepageSectionComponent.prototype.onSendRoutePath = /**
         * @param {?} string
         * @return {?}
         */
            function (string) {
                this.sendRoutePath.emit(string);
            };
        SukuHomepageSectionComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-homepage-section',
                        template: "<section class=\"homepage-section\">\r\n  <div class=\"header row ml-3 ml-sm-5\">\r\n    <div class=\"title mt-3\">{{sectionData.header}}</div>\r\n    <div class=\"mt-3 d-flex pr-5\">\r\n      <span class=\"title ml-2 italic font-italic\"> {{sectionData.subheader}}</span>\r\n      <div class=\"ml-2 info\">\r\n        <i class=\"fas fa-info\"></i>\r\n        <div class=\"info-box\">{{sectionData.info}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row m-3 d-flex justify-content-around\">\r\n    <div class=\"justify-content-center d-flex mt-3 mt-md-5 col-lg-2 col-md-6 col-12\"\r\n      *ngFor=\"let button of sectionData.buttons\">\r\n      <suku-homepage-button [button-data]=\"button\" (send-route-path)=\"onSendRoutePath($event)\"></suku-homepage-button>\r\n    </div>\r\n  </div>\r\n</section>",
                        styles: [".homepage-section{font-family:Poppins,sans-serif}.title{font-size:23px;font-weight:700}.italic{font-weight:400}.info{text-align:center;height:23px;width:23px;border-radius:100px;background:#303030;color:#d8f40b}.info:hover .info-box{display:block}.info-box{z-index:100;width:300px;border-radius:6px;word-wrap:break-word;background:#000;display:none;position:relative;bottom:-10px;right:23px;text-align:left;padding:20px;font-size:13px;font-family:\"Encode Sans\",sans-serif;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.info-box::after{content:\"\";position:absolute;top:-10px;left:35px;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #191922;font-style:normal;font-stretch:normal}"]
                    }] }
        ];
        /** @nocollapse */
        SukuHomepageSectionComponent.ctorParameters = function () { return []; };
        SukuHomepageSectionComponent.propDecorators = {
            sectionData: [{ type: i0.Input }],
            sendRoutePath: [{ type: i0.Output }]
        };
        return SukuHomepageSectionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuHomepageButton = /** @class */ (function () {
        function SukuHomepageButton(values) {
            if (values === void 0) {
                values = {};
            }
            Object.assign(this, values);
        }
        return SukuHomepageButton;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuHomepageSection = /** @class */ (function () {
        function SukuHomepageSection(values) {
            if (values === void 0) {
                values = {};
            }
            Object.assign(this, values);
        }
        return SukuHomepageSection;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var sukuHomepageData = [
        new SukuHomepageSection({
            header: 'SUKU Core Applications',
            subheader: '',
            info: 'SUKU Core Applications offer the primary feature set on the SUKU Platform. Click any of the icons below to open that SUKU Core Application.',
            buttons: [
                new SukuHomepageButton({
                    title: 'Marketplace',
                    icon: 'fas fa-shopping-cart',
                    path: '/marketplaceDashboard',
                    disabled: false,
                    id: 'Marketplace'
                }),
                new SukuHomepageButton({
                    title: 'Track & Trace',
                    icon: 'fas fa-link',
                    path: '/traceProductSearch',
                    disabled: false,
                    id: 'trackAndTrace'
                }),
                new SukuHomepageButton({
                    title: 'Document Authenticator',
                    icon: 'far fa-file-code',
                    path: '/documentAuth',
                    disabled: false,
                    id: 'documentAuthenticator'
                }),
                new SukuHomepageButton({
                    title: 'Payment Portal',
                    icon: 'fas fa-sliders-h',
                    path: '/paymentPortal',
                    disabled: false,
                    id: 'paymentPortal'
                }),
                new SukuHomepageButton({
                    title: 'Governance',
                    icon: 'fas fa-landmark',
                    path: '/governance',
                    disabled: false,
                    id: 'governance'
                })
            ]
        }),
        new SukuHomepageSection({
            header: 'SUKU Applications and Services',
            subheader: ' - Coming Soon',
            info: 'SUKU Applications and Services provide additional functionality and features, which typically leverage the the SUKU Core. We expect these Applications and Services to be built by 3rd parties and by the SUKU Team. These features are coming soon!',
            buttons: [
                new SukuHomepageButton({
                    title: 'Inventory Management',
                    icon: 'fas fa-box-open',
                    path: '/',
                    disabled: true,
                    id: 'inventoryManagement'
                }),
                new SukuHomepageButton({
                    title: 'Warehouse Management',
                    icon: 'fas fa-dolly',
                    path: '/',
                    disabled: true,
                    id: 'warehouseManagement'
                }),
                new SukuHomepageButton({
                    title: 'Insurance',
                    icon: 'fas fa-shield-alt',
                    path: '/',
                    disabled: true,
                    id: 'insurance'
                }),
                new SukuHomepageButton({
                    title: 'Quorum Block Explorer',
                    icon: 'fas fa-cubes',
                    path: '/',
                    disabled: true,
                    id: 'quorumBlockExplorer'
                }),
                new SukuHomepageButton({
                    title: 'Dummy',
                    icon: 'fas fa-plus',
                    path: '/',
                    disabled: null,
                    id: 'dummy'
                })
            ]
        })
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuHomepageComponent = /** @class */ (function () {
        function SukuHomepageComponent() {
            this.sendRoutePath = new i0.EventEmitter();
            this.homepageData = sukuHomepageData;
            console.log('homepageData', this.homepageData);
        }
        /**
         * @return {?}
         */
        SukuHomepageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} string
         * @return {?}
         */
        SukuHomepageComponent.prototype.onSendRoutePath = /**
         * @param {?} string
         * @return {?}
         */
            function (string) {
                this.sendRoutePath.emit(string);
            };
        SukuHomepageComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-homepage',
                        template: "<div class=\"homepage col-md-10 col-12 m-auto\">\r\n  <div *ngFor=\"let section of homepageData\">\r\n    <suku-homepage-section (sendRoutePath)=\"onSendRoutePath($event)\" [sectionData]=\"section\"></suku-homepage-section>\r\n  </div>\r\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.homepage{padding:30px 0 40px;font-family:var(--suku-primary-font);background:var(--suku-homepage-bg);box-shadow:0 12px 14px 0 rgba(0,0,0,.05);border-radius:var(--suku-secondary-border-radius)}"]
                    }] }
        ];
        /** @nocollapse */
        SukuHomepageComponent.ctorParameters = function () { return []; };
        SukuHomepageComponent.propDecorators = {
            sendRoutePath: [{ type: i0.Output }]
        };
        return SukuHomepageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuImageWidgetComponent = /** @class */ (function () {
        function SukuImageWidgetComponent() {
            this.imageSrc = '';
        }
        /**
         * @return {?}
         */
        SukuImageWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuImageWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-image-widget',
                        template: "<div class=\"product-img imgBorder\" [ngClass]=\"{'shine': !imageSrc}\">\n  <img *ngIf=\"imageSrc\" src=\"{{imageSrc}}\"\n      class=\"ImgRes rounded-0 center\" alt=\"product-01\" />\n  </div>",
                        styles: [".product-img{min-height:158px;width:256px;float:left;text-align:center;line-height:158px;position:relative;z-index:10}.ImgRes{max-width:100%;max-height:140px}.imgBorder{border:1px solid #f2f2f2!important}.center{text-align:center}@-webkit-keyframes placeholderShimmer{0%{background-position:-468px 0}100%{background-position:468px 0}}@keyframes placeholderShimmer{0%{background-position:-468px 0}100%{background-position:468px 0}}.shine{background:0 0/800px 200px no-repeat #f6f7f8;background-image:linear-gradient(to right,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);display:inline-block;position:relative;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeholderShimmer;animation-name:placeholderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear}"]
                    }] }
        ];
        /** @nocollapse */
        SukuImageWidgetComponent.ctorParameters = function () { return []; };
        SukuImageWidgetComponent.propDecorators = {
            imageSrc: [{ type: i0.Input }]
        };
        return SukuImageWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuInlineDropdownComponent = /** @class */ (function () {
        function SukuInlineDropdownComponent() {
            this.size = '14';
            this.color = '#757575';
            this.weight = '600';
            this.id = '';
            this.customclass = 'row';
            this.customcontentclass = 'pr-2 c-pointer';
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuInlineDropdownComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuInlineDropdownComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-inline-dropdown',
                        template: "<span (click)=\"action.emit()\" [class]=\"customclass\">\n  <h2 [style.font-size.px]=\"size\" [class]=\"customcontentclass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\n    <ng-content></ng-content>\n  </h2>\n  <i class=\"fa fa-chevron-circle-down f17 c-pointer\" style=\"color:#a7bf2e\"></i>\n</span>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:var(--suku-text-label-one);word-break:break-all!important}h2:hover{color:#a8a8a8!important}.f17{font-size:var(--suku-font-size-5)}.c-pointer{cursor:pointer!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuInlineDropdownComponent.ctorParameters = function () { return []; };
        SukuInlineDropdownComponent.propDecorators = {
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            customclass: [{ type: i0.Input }],
            customcontentclass: [{ type: i0.Input }],
            action: [{ type: i0.Output }]
        };
        return SukuInlineDropdownComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuLinkComponent = /** @class */ (function () {
        function SukuLinkComponent() {
            this.customClass = '';
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuLinkComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuLinkComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-link',
                        template: "<span [style.font-size.px]=\"size\" [style.color]=\"color\" (click)=\"action.emit()\" class=\"suku-link c-pointer {{customClass}}\"\n  [style.font-weight]=\"weight\">\n  <ng-content></ng-content>\n</span>\n",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.c-pointer{cursor:pointer!important}.suku-link{font-family:var(--suku-ternary-font);font-size:var(--suku-font-size-2);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:#1d1d1d;text-decoration:underline;text-transform:uppercase}"]
                    }] }
        ];
        /** @nocollapse */
        SukuLinkComponent.ctorParameters = function () { return []; };
        SukuLinkComponent.propDecorators = {
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            customClass: [{ type: i0.Input, args: ['custom-class',] }],
            action: [{ type: i0.Output }]
        };
        return SukuLinkComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuLoaderService = /** @class */ (function () {
        function SukuLoaderService(dialogService) {
            this.dialogService = dialogService;
            this.loaderDialogClose = true;
            this.onDialogClose = new i0.EventEmitter();
            this.loaderDialogHeight = '420px';
            this.loaderDialogWidth = '42%';
        }
        /**
         * @param {?=} data
         * @return {?}
         */
        SukuLoaderService.prototype.openLoader = /**
         * @param {?=} data
         * @return {?}
         */
            function (data) {
                var _this = this;
                if (data) {
                    /** @type {?} */
                    var dialogRef = this.dialogService.open(SukuLoaderComponent, {
                        width: this.loaderDialogWidth,
                        height: this.loaderDialogHeight,
                        disableClose: this.loaderDialogClose,
                        data: {
                            logo: data ? data.icon : '',
                            logoCustomClass: data ? data.iconCustomClass : '',
                            logoId: data ? data.iconId : '',
                            icon: data ? data.icon : '',
                            iconCustomClass: data ? data.iconCustomClass : '',
                            iconId: data ? data.iconId : '',
                            titleOne: data ? data.titleOne : '',
                            titleOneId: data ? data.titleOneId : '',
                            titleTwo: data ? data.titleTwo : '',
                            titleTwoId: data ? data.titleOneId : '',
                            titleThree: data ? data.titleThree : '',
                            titleThreeId: data ? data.titleThreeId : ''
                        }
                    });
                    dialogRef.afterClosed().subscribe(( /**
                     * @param {?} result
                     * @return {?}
                     */function (result) {
                        _this.onDialogClose.emit(result);
                    }));
                }
                else {
                    this.dialogService.closeAll();
                }
            };
        SukuLoaderService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SukuLoaderService.ctorParameters = function () {
            return [
                { type: material.MatDialog }
            ];
        };
        /** @nocollapse */ SukuLoaderService.ngInjectableDef = i0.defineInjectable({ factory: function SukuLoaderService_Factory() { return new SukuLoaderService(i0.inject(i1.MatDialog)); }, token: SukuLoaderService, providedIn: "root" });
        return SukuLoaderService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuMailWidgetComponent = /** @class */ (function () {
        function SukuMailWidgetComponent() {
            // @Input() name = 'dconway@vairog.com';
            this.id = 'suku-mail-widget';
            this.size = '0.9';
            this.color = '#0f0f0f';
            this.weight = '';
            this.customClass = 'pl-3 pt-0 mb-1';
            this.icon = 'suku-mail-icon';
            this.iconId = 'mailIcon';
            this.iconCustomClass = '';
            this.imageWidth = 'img-width';
            this.widgetCustomClass = 'col mt-2';
        }
        /**
         * @return {?}
         */
        SukuMailWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuMailWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-mail-widget',
                        template: "<div class=\"{{widgetCustomClass}}\">\n  <span class=\"row pb-1\">\n    <i class=\"{{icon}} {{iconCustomClass}}\" [id]=\"iconId\"></i>\n    <h2 [style.font-size.rem]=\"size\" class=\"{{customClass}}\" id=\"{{id}}\" [style.font-weight]=\"weight\"\n      [style.color]=\"color\">\n      <ng-content></ng-content>\n    </h2>\n  </span>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:var(--suku-text-label-one);word-break:break-all!important;display:inline;position:absolute;margin-left:14px;padding-top:3px}.icon{width:25px}"]
                    }] }
        ];
        /** @nocollapse */
        SukuMailWidgetComponent.ctorParameters = function () { return []; };
        SukuMailWidgetComponent.propDecorators = {
            id: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            customClass: [{ type: i0.Input }],
            icon: [{ type: i0.Input }],
            iconId: [{ type: i0.Input, args: ['icon-id',] }],
            iconCustomClass: [{ type: i0.Input, args: ['icon-custom-class',] }],
            imageWidth: [{ type: i0.Input }],
            widgetCustomClass: [{ type: i0.Input, args: ['widget-custom-class',] }]
        };
        return SukuMailWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuMatchChipComponent = /** @class */ (function () {
        function SukuMatchChipComponent() {
            this.image = '../../assets/images/manageTrack.png';
            this.imgId = 'img-id';
            this.match = new i0.EventEmitter();
            this.userAction = new i0.EventEmitter();
            this.customclass = 'col p-0';
            this.listNameSize = '16';
            this.listWeight = '600';
            this.listColor = 'black';
            this.listName = 'Super Computer';
            this.listCustomClass = '';
            this.prize = '10 SUKU';
            this.prizeSize = '14';
            this.prizeWeight = '500';
            this.prizeColor = '#3e3e3e';
            this.prizeCustomClass = 'mb-0 pt-2';
            this.date = 'LISTING EXPIRATION DATE';
            this.dateSize = '12';
            this.dateWeight = '500';
            this.dateColor = '#b6b6b6';
            this.dateCustomClass = '';
            this.dateV = '28 Nov 2018';
            this.dateVSize = '14';
            this.dateVWeight = '500';
            this.dateVColor = '#3e3e3e';
            this.dateVCustomClass = '';
            this.sell = 'SOLD BY';
            this.sellSize = '12';
            this.sellWeight = '500';
            this.sellColor = '#b6b6b6';
            this.sellCustomClass = '';
            this.sellV = 'John Smith';
            this.sellVSize = '14';
            this.sellVWeight = '500';
            this.sellVColor = '#3e3e3e';
            this.sellVCustomClass = 'c-pointer';
            this.id = 'suku-match-chip';
            this.sellerid = '0';
        }
        /**
         * @return {?}
         */
        SukuMatchChipComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuMatchChipComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-match-chip',
                        template: "<div [class]=\"customclass\">\r\n  <div class=\"col p-0\">\r\n    <div class=\"col-sm-12 p-0 bg-white text-center col-xs-12 match-chip-shadow rounded-0\">\r\n      <a id=\"match-chip\">\r\n        <img (click)=\"match.emit()\" src=\"{{image}}\" id=\"listImg{{imgId}}\" class=\"m-1 p-2 pt-3 pb-3 c-pointer\"\r\n          width=\"90%\" height=\"120px\" alt=\"Image\" />\r\n      </a>\r\n      <br>\r\n      <div class=\"col-sm-12 p-0 pl-3 pr-3 border-top-box pt-4 text-center \">\r\n        <h2 [style.font-size.px]=\"listNameSize\" [class]=\"listCustomClass\" id=\"{{id}}\" [style.font-weight]=\"listWeight\"\r\n          [style.color]=\"listColor\">\r\n          {{listName}}\r\n        </h2>\r\n        <h2 [style.font-size.px]=\"prizeSize\" [class]=\"prizeCustomClass\" id=\"{{id}}\" [style.font-weight]=\"prizeWeight\"\r\n          [style.color]=\"prizeColor\">\r\n          {{prize}}\r\n        </h2>\r\n        <div class=\"pt-4\">\r\n          <h2 [style.font-size.px]=\"dateSize\" [class]=\"dateCustomClass\" id=\"{{id}}\" [style.font-weight]=\"dateWeight\"\r\n            [style.color]=\"dateColor\">\r\n            {{date}}\r\n          </h2>\r\n          <h2 [style.font-size.px]=\"dateVSize\" [class]=\"dateVCustomClass\" id=\"{{id}}\" [style.font-weight]=\"dateVWeight\"\r\n            [style.color]=\"dateVColor\">\r\n            {{dateV}}\r\n          </h2>\r\n        </div>\r\n        <div class=\"pt-3 pb-3\">\r\n          <h2 [style.font-size.px]=\"sellSize\" [class]=\"sellCustomClass\" id=\"{{id}}\" [style.font-weight]=\"sellWeight\"\r\n            [style.color]=\"sellColor\">\r\n            {{sell}}\r\n          </h2>\r\n          <h2 (click)=\"userAction.emit()\" [style.font-size.px]=\"sellVSize\" [class]=\"sellVCustomClass\"\r\n            id=\"sellerName{{sellerid}}\" [style.font-weight]=\"sellVWeight\" [style.color]=\"sellVColor\">\r\n            {{sellV}}\r\n          </h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.border-top-box{border-top:1px solid #dee2e670!important}.match-chip-shadow{box-shadow:0 2px 4px 0 rgba(0,0,0,.05);height:340px}.default{width:200px}h2{font-family:var(--suku-secondary-font);font-size:14px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;word-break:break-word!important;margin-bottom:0!important}.c-pointer{cursor:pointer!important}.c-pointer:hover{font-weight:900!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuMatchChipComponent.ctorParameters = function () { return []; };
        SukuMatchChipComponent.propDecorators = {
            image: [{ type: i0.Input }],
            imgId: [{ type: i0.Input }],
            match: [{ type: i0.Output }],
            userAction: [{ type: i0.Output }],
            customclass: [{ type: i0.Input }],
            listNameSize: [{ type: i0.Input }],
            listWeight: [{ type: i0.Input }],
            listColor: [{ type: i0.Input }],
            listName: [{ type: i0.Input }],
            listCustomClass: [{ type: i0.Input }],
            prize: [{ type: i0.Input }],
            prizeSize: [{ type: i0.Input }],
            prizeWeight: [{ type: i0.Input }],
            prizeColor: [{ type: i0.Input }],
            prizeCustomClass: [{ type: i0.Input }],
            date: [{ type: i0.Input }],
            dateSize: [{ type: i0.Input }],
            dateWeight: [{ type: i0.Input }],
            dateColor: [{ type: i0.Input }],
            dateCustomClass: [{ type: i0.Input }],
            dateV: [{ type: i0.Input }],
            dateVSize: [{ type: i0.Input }],
            dateVWeight: [{ type: i0.Input }],
            dateVColor: [{ type: i0.Input }],
            dateVCustomClass: [{ type: i0.Input }],
            sell: [{ type: i0.Input }],
            sellSize: [{ type: i0.Input }],
            sellWeight: [{ type: i0.Input }],
            sellColor: [{ type: i0.Input }],
            sellCustomClass: [{ type: i0.Input }],
            sellV: [{ type: i0.Input }],
            sellVSize: [{ type: i0.Input }],
            sellVWeight: [{ type: i0.Input }],
            sellVColor: [{ type: i0.Input }],
            sellVCustomClass: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            sellerid: [{ type: i0.Input }]
        };
        return SukuMatchChipComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuNavSubmenuComponent = /** @class */ (function () {
        function SukuNavSubmenuComponent() {
            this.subMenuList = [];
            this.subMenuList = [
                {
                    name: 'Listings & Bids',
                    path: 'pathOne',
                    id: 1
                },
                {
                    name: 'Negotiations',
                    path: 'pathTwo',
                    id: 2
                },
                {
                    name: 'Purchase Orders',
                    path: 'pathThree',
                    id: 3
                },
                {
                    name: 'Transactions',
                    path: 'pathFour',
                    id: 4
                }
            ];
        }
        /**
         * @param {?} event
         * @param {?} newValue
         * @return {?}
         */
        SukuNavSubmenuComponent.prototype.subMenuSelected = /**
         * @param {?} event
         * @param {?} newValue
         * @return {?}
         */
            function (event, newValue) {
                console.log(newValue);
                this.selectedItem = newValue;
            };
        SukuNavSubmenuComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-nav-submenu',
                        template: "<div class=\"header-main\">\n  <div class=\"sub-menu-bar navBarRes\" *ngIf=\"true\">\n    <div class=\"container\">\n      <div class=\"sub-menu\">\n        <nav>\n          <ul class=\"mt-2 pt-1\" id=\"subMenu\">\n            <li [ngClass]=\"{'active': selectedItem == item}\"\n              (click)=\"subMenuSelected($event, item);\" *ngFor=\"let item of subMenuList\" >\n              <a class=\"c-pointer\">{{ item.name }} {{item.path}}</a>\n            </li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n  </div>\n</div>\n",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.header-main .sub-menu-bar{width:100%;height:62px;float:left;background:#2b3034;position:relative}.header-main .sub-menu{float:left}.header-main .sub-menu nav{float:left;padding:0;margin:0}.header-main .sub-menu nav ul{height:47px;float:left;padding:0;margin:0}.header-main .sub-menu nav ul li{height:30px;float:left;font-family:var(--suku-primary-font);font-size:15px;color:rgba(255,255,255,.5);line-height:2px;letter-spacing:.01em;position:relative;padding:0;border-radius:15px 50px 50px;margin:0 10px 0 0}.header-main .sub-menu nav ul li:before{display:none}.header-main .sub-menu nav ul li a{height:30px;float:left;color:rgba(255,255,255,.5);text-decoration:none;position:relative;padding:22px 37px 20px;border-radius:28px 76px 63px;font-family:var(--suku-primary-font)}.header-main .sub-menu nav ul li a:before{content:\"\";width:0;height:0;transition:.5s;background:0 0;border-radius:0;position:absolute;top:0;opacity:0}.header-main .sub-menu nav ul li a:after{content:\"\";width:0;height:0;transition:.5s;background:0 0;border-radius:15px 50px 50px;position:absolute;top:0;opacity:0}.header-main .sub-menu nav ul li.active a,.header-main .sub-menu nav ul li:hover a{color:#fff!important;background:#17181a!important}.header-main .sub-menu nav ul li.active a:after,.header-main .sub-menu nav ul li.active a:before,.header-main .sub-menu nav ul li:hover a:after,.header-main .sub-menu nav ul li:hover a:before{opacity:1;border-radius:15px 50px 50px}.sub-menu-style{background:#2b3034;color:#fff}ul#subMenu{list-style:none}.c-pointer{cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        SukuNavSubmenuComponent.ctorParameters = function () { return []; };
        SukuNavSubmenuComponent.propDecorators = {
            subMenuList: [{ type: i0.Input }]
        };
        return SukuNavSubmenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuNotificationPanelComponent = /** @class */ (function () {
        function SukuNotificationPanelComponent() {
            this.title = 'Dashboard';
            this.customclass = 'col p-0 box pointer text-center';
            this.notificationArray = [];
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuNotificationPanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuNotificationPanelComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-notification-panel',
                        template: "  <label class=\"title\">{{title}}</label>\n  <div class=\"d-md-flex mb-5 flex-md-row\">\n    <div [class]=\"customclass\" *ngFor=\"let item of notificationArray;let i=index\" (click)=\"action.emit(item?.id)\"\n      id=\"notification{{item?.id}}\">\n      <div class=\"col pointer text-center p-0\">\n        <div class=\"pt-4\">\n          <span class=\"box-counter\" id=\"notificationValue{{i}}\">\n            {{ (item?.value > 9) ? '' : '0' }}{{ (item?.value == 0) ? 00 : item?.value }}\n          </span>\n          <p class=\"pb-4 n-m mb-0\">\n            <a class=\"box-title\" id=\"notificationTitle{{i}}\">\n              {{item?.name  || 'N/A' }}\n            </a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.box{border-radius:2px;background-color:var(--suku-default-bg);box-shadow:0 3px 3px 0 rgba(0,0,0,.03);border-left:1px solid #dee2e68a!important;border-bottom:1px solid #dee2e68a!important;cursor:pointer!important}.box-title{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:var(--suku-text-heading);word-break:break-word!important}.box-counter{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-11);font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.6px;text-align:center;color:var(--suku-primary-color)}.default{width:300px}.n-m{margin-top:-15px}.title{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:var(--suku-text-label-one)}@media (min-width:575.98px){.box{height:145px!important}}@media (min-width:767.98px){.box{height:175px!important}}@media (min-width:991.98px){.box{height:170px!important}}@media (min-width:1199.98px){.box{height:140px!important}.box-title{font-size:15px!important}}@media (min-width:1400px){.box-title{font-size:17px!important}}"]
                    }] }
        ];
        /** @nocollapse */
        SukuNotificationPanelComponent.ctorParameters = function () { return []; };
        SukuNotificationPanelComponent.propDecorators = {
            title: [{ type: i0.Input }],
            customclass: [{ type: i0.Input }],
            notificationArray: [{ type: i0.Input }],
            action: [{ type: i0.Output }]
        };
        return SukuNotificationPanelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuNotificationWidgetComponent = /** @class */ (function () {
        function SukuNotificationWidgetComponent() {
            this.customclass = 'col box pointer text-center';
            this.notificationTitleCustomClass = "box-title";
            this.notificationValueCustomClass = "box-counter";
        }
        /**
         * @return {?}
         */
        SukuNotificationWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuNotificationWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-notification-widget',
                        template: "<div [class]=\"customclass\">\n  <div class=\"col pointer text-center p-0\">\n    <div class=\"pt-4\">\n      <span [class]=\"notificationValueCustomClass\" [style.color]=\"notificationValueColor\"\n        [style.font-size.rem]=\"notificationValueFontSize\">\n        {{ notificationValue > 9 ? ' ' :\n          '0'}}{{ notificationValue === 0 ? 0 :\n          ''}}{{notificationValue}}\n      </span>\n      <p class=\"pb-3 n-m mb-0\">\n        <a [class]=\"notificationTitleCustomClass\" id=\"{{id}}\" [style.font-size.rem]=\"notificationTitleColor\"\n          [style.color]=\"notificationTitleFontSize\">\n          {{notificationTitle || 'review bids' }}\n        </a>\n      </p>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.box{border-radius:2px;background-color:var(--suku-homepage-bg);box-shadow:0 3px 3px 0 rgba(0,0,0,.03);border-left:1px solid #dee2e68a!important;border-bottom:1px solid #dee2e68a!important}.box-title{font-family:var(--suku-primary-font);font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:var(--suku-text-heading);word-break:break-word!important}.box-counter{font-family:var(--suku-primary-font);font-size:50px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.6px;text-align:center;color:var(--suku-primary-color)}.default{width:300px}.n-m{margin-top:-15px}@media (min-width:575.98px){.box{height:145px!important}}@media (min-width:767.98px){.box{height:175px!important}}@media (min-width:991.98px){.box{height:180px!important}}@media (min-width:1199.98px){.box{height:150px!important}}"]
                    }] }
        ];
        /** @nocollapse */
        SukuNotificationWidgetComponent.ctorParameters = function () { return []; };
        SukuNotificationWidgetComponent.propDecorators = {
            id: [{ type: i0.Input }],
            customclass: [{ type: i0.Input }],
            notificationTitle: [{ type: i0.Input, args: ['notification-title',] }],
            notificationValue: [{ type: i0.Input, args: ['notification-value',] }],
            notificationTitleCustomClass: [{ type: i0.Input, args: ['notification-title-custom-class',] }],
            notificationValueCustomClass: [{ type: i0.Input, args: ['notification-value-custom-class',] }],
            notificationValueColor: [{ type: i0.Input, args: ['notification-value-color',] }],
            notificationValueFontSize: [{ type: i0.Input, args: ['notification-value-font-size',] }],
            notificationTitleColor: [{ type: i0.Input, args: ['notification-title-color',] }],
            notificationTitleFontSize: [{ type: i0.Input, args: ['notification-title-font-size',] }]
        };
        return SukuNotificationWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuPaymentPortalHelpComponent = /** @class */ (function () {
        function SukuPaymentPortalHelpComponent() {
            this.title = 'Payments Help Page';
            this.titleId = 'paymentsHelpPage';
            this.titleCustomClass = '';
            this.subTitle = 'ACH PAYMENTS';
            this.subTitleId = 'achPayment';
            this.subTitleCustomClass = '';
            this.descriptionCustomClass = '';
            this.descriptionId = '';
            this.icon = 'fa fa-plus-circle';
            this.iconId = 'fa-plus-circle';
            this.labelOne = 'Add New Beneficial Owner';
            this.labelOneId = 'addNewBeneficialOwner';
            this.labelOneCustomClass = '';
            this.add = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuPaymentPortalHelpComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuPaymentPortalHelpComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-payment-portal-help',
                        template: "<div class=\"col-12 text-left border d-flex Rectangle-2 p-3 bgWhite\">\n  <div class=\"col-12 m-3 pl-2 pr-2\">\n    <p class=\"title {{titleCustomClass}}\" [id]=\"titleId\">{{title}}</p>\n    <b class=\"text-black {{subTitleCustomClass}}\" [id]=\"subTitleId\">{{subTitle}}</b>\n    <div class=\"col-12 text-left p-0 help-Content mb-5 {{descriptionCustomClass}}\" [id]=\"descriptionId\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"col mt-2 mb-2 p-0 pt-3\">\n      <span class=\"add-owner c-pointer {{labelOneCustomClass}}\" [id]=\"labelOneId\" (click)=\"add.emit()\">\n        <i class=\"{{icon}} pr-3 icon\" [id]=\"iconId\"></i>{{labelOne}}</span>\n    </div>\n  </div>\n</div>\n\n\n<!-- old code data -->\n<!-- <p>The SUKU Platform utilizes a payment provider, Dwolla, to enable ACH Payments. Please reach out to the SUKU\n    help mailbox at support@suku.world if you have any questions regarding payments.</p>\n  <b>What is Dwolla?</b>\n  <p>Dwolla is a powerful payments platform that securely connects to bank or credit union accounts to enable the\n    transfer of money for any individual or organization in the U.S.</p>\n\n  <b>Why is my transaction still pending?</b>\n  <p>A bank or credit union transaction usually takes 3\u20134 business days to complete via the Automated Clearing House\n    network (ACH) used by banks to transfer funds. Please note that transfers take longer to complete if over a\n    weekend or a holiday.</p>\n\n  <b>Why did the transaction fail?</b>\n  <p>Sometimes transactions to or from a bank or credit union can fail. Here are a few reasons why a transaction can\n    fail:</p>\n  <ul>\n    <li>Insufficient funds: There are insufficient funds in the sending bank or credit union account to complete the\n      transaction.</li>\n    <li>Frozen account: A bank or credit union account has been frozen.</li>\n    <li>Other reasons: A bank or credit union rejects the transaction for some other reason.</li>\n  </ul>\n  <p>If a transaction fails, please contact your bank or credit union to check on the status of your account. Then\n    either re-initiate the transaction or ask your financial institution why the transaction may not be processed.\n  </p>\n\n  <b>Why am I being asked for more documentation?</b>\n  <p>If we ask for a photo ID:</p>\n  <p>Additional information is needed to verify your identity. Please upload one of the following forms of\n    identification: An unexpired, current, state-issued driver\u2019s license or identification card OR An unexpired,\n    current U.S. passport</p>\n\n  <p>If we ask for a bank statement:</p>\n  <p>Additional information is needed to verify that you are an authorized signer on your connected bank or credit\n    union account. Please upload a copy of a recent statement.</p>\n\n  <b>How does Dwolla protect customers\u2019 data?</b>\n  <p>At Dwolla, we take protecting data seriously. Dwolla maintains compliance with the SOC 2 framework. This\n    framework provides an independent, third-party assurance that we are taking the appropriate steps to protect our\n    systems and your data. Learn more about Dwolla\u2019s security practices <a\n      href=\"https://www.dwolla.com/security/\" target=\"_blank\">here</a>.</p>\n       -->",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.help-Content{font-family:var(--suku-secondary-font);font-size:15px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--suku-text-label-one)}.bgWhite{background-color:#fff}.linkA{cursor:pointer}.title{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important;overflow:hidden;text-overflow:ellipsis!important;white-space:nowrap}.add-owner{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important;overflow:hidden;text-overflow:ellipsis!important;white-space:nowrap}.icon{color:var(--suku-primary-color);font-size:var(--suku-font-size-6)}"]
                    }] }
        ];
        /** @nocollapse */
        SukuPaymentPortalHelpComponent.ctorParameters = function () { return []; };
        SukuPaymentPortalHelpComponent.propDecorators = {
            title: [{ type: i0.Input }],
            titleId: [{ type: i0.Input }],
            titleCustomClass: [{ type: i0.Input }],
            subTitle: [{ type: i0.Input, args: ['sub-title',] }],
            subTitleId: [{ type: i0.Input, args: ['sub-title-id',] }],
            subTitleCustomClass: [{ type: i0.Input, args: ['sub-title-custom-class',] }],
            descriptionCustomClass: [{ type: i0.Input, args: ['description-custom-class',] }],
            descriptionId: [{ type: i0.Input, args: ['description-Id',] }],
            icon: [{ type: i0.Input }],
            iconId: [{ type: i0.Input, args: ['icon-id',] }],
            labelOne: [{ type: i0.Input, args: ['label-one',] }],
            labelOneId: [{ type: i0.Input, args: ['label-one-id',] }],
            labelOneCustomClass: [{ type: i0.Input, args: ['label-one-custom-class',] }],
            add: [{ type: i0.Output }]
        };
        return SukuPaymentPortalHelpComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuPhoneWidgetComponent = /** @class */ (function () {
        function SukuPhoneWidgetComponent() {
            this.id = '';
            this.size = '0.9';
            this.color = '#3e3e3e';
            this.weight = '500';
            this.customClass = 'pl-3 mt-auto mb-auto';
            this.icon = 'suku-phone-icon';
            this.iconId = 'phoneIcon';
            this.iconCustomClass = 'icon';
            this.widgetCustomClass = 'col';
        }
        /**
         * @return {?}
         */
        SukuPhoneWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuPhoneWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-phone-widget',
                        template: "<div class=\"{{widgetCustomClass}}\">\n  <span class=\"row pb-1\">\n    <i class=\"{{icon}} {{iconCustomClass}}\" [id]=\"iconId\"></i>\n    <h2 [style.font-size.rem]=\"size\" class=\"{{customClass}}\" id=\"{{id}}\" [style.font-weight]=\"weight\"\n      [style.color]=\"color\">\n      <ng-content></ng-content>\n    </h2>\n  </span>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:var(--suku-text-label-one);position:absolute;display:inline;margin-left:14px;padding-top:3px;word-break:break-word!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuPhoneWidgetComponent.ctorParameters = function () { return []; };
        SukuPhoneWidgetComponent.propDecorators = {
            id: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            customClass: [{ type: i0.Input }],
            icon: [{ type: i0.Input, args: ['icon',] }],
            iconId: [{ type: i0.Input, args: ['icon-id',] }],
            iconCustomClass: [{ type: i0.Input, args: ['icon-custom-class',] }],
            widgetCustomClass: [{ type: i0.Input, args: ['widget-custom-class',] }]
        };
        return SukuPhoneWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuProductTraceWidgetComponent = /** @class */ (function () {
        function SukuProductTraceWidgetComponent() {
            this.val = true;
            this.val2 = false;
            this.isSearch = false;
            this.color = 'primary';
            this.labelOneId = 'traceMethod1';
            this.labelTwoId = 'productId';
            this.searchInputId = 'search';
            this.searchIconCustomClass = 'searchIcon';
            /* suku-btn */
            this.btnOneId = 'searchForProduct';
            this.btnOneSize = '';
            this.btnOneWeight = '600';
            this.btnLabelOne = 'Search for product';
            this.btnType = 'info';
            this.btnOneCustomClass = '';
            this.btnOneAction = new i0.EventEmitter();
            /*  */
            this.btnTwoId = 'traceTheProduct';
            this.btnTwoSize = '';
            this.btnTwoWeight = '600';
            this.btnLabelTwo = 'trace the product';
            this.btnTwoCustomClass = '';
            this.btnTwoAction = new i0.EventEmitter();
            this.messageOne = 'products found with the above number';
            this.messageTwo = 'please select one';
            this.traceMethodRadio = 'method';
            this.tracetheProductId = '';
            this.searchFun = new i0.EventEmitter();
            this.selectproducts = new i0.EventEmitter();
            this.productdetails = [];
        }
        Object.defineProperty(SukuProductTraceWidgetComponent.prototype, "disableBtn", {
            get: /**
             * @return {?}
             */ function () {
                return this._disableBtn;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._disableBtn = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SukuProductTraceWidgetComponent.prototype, "result", {
            get: /**
             * @return {?}
             */ function () {
                return this._result;
            },
            set: /**
             * @param {?} res
             * @return {?}
             */ function (res) {
                this._result = res;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuProductTraceWidgetComponent.prototype.searchEnabled = /**
         * @return {?}
         */
            function () {
                this.isSearch = !this.isSearch;
            };
        Object.defineProperty(SukuProductTraceWidgetComponent.prototype, "visible", {
            get: /**
             * @return {?}
             */ function () {
                return this._visible;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._visible = val;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} newValue
         * @return {?}
         */
        SukuProductTraceWidgetComponent.prototype.showSelectedPro = /**
         * @param {?} newValue
         * @return {?}
         */
            function (newValue) {
                this.selectedItem = newValue;
            };
        /**
         * @return {?}
         */
        SukuProductTraceWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuProductTraceWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-product-trace-widget',
                        template: "<span [formGroup]=\"form\">\n  <div class=\"product-boxContent col-lg-12\">\n    <div class=\"col-lg-12 traceMethod {{labelOneCustomClass}} pl-0\" [id]=\"labelOneId\">\n      {{labelOne}}\n    </div>\n    <div class=\"col-lg-12 traceSearchType {{labelTwoCustomClass}} pl-0 mb-2\" [id]=\"labelTwoId\">\n      {{labelTwo}}\n    </div>\n  </div>\n  <div class=\"col-sm-12 mt-2 pt-4 pb-4 traceBox {{traceBoxCustomClass}}\">\n    <div class=\"col-sm-12 productName pb-1 {{labelThreeCustomClass}}\" [id]=\"labelThree\">\n      {{labelThree}}\n    </div>\n    <div class=\"col-sm-12 pl-3 pb-2 pt-2 p-0 searchBorderBox\">\n      <input type=\"text\" [id]=\"searchInputId\" class=\"searchbox\" formControlName=\"{{control}}\" name=\"{{control}}\"\n        (keyup)=\"searchFun.emit(isSearch)\" (keyup.enter)=\"btnOneAction.emit()\">\n      <span class=\"float-right pr-3\"><i class=\"fa fa-search {{searchIconCustomClass}}\"></i></span>\n    </div>\n    <p class=\"resultCount\" *ngIf=\"_result == 'true'\">{{productdetails?.length}} {{messageOne}}.\n    </p>\n    <div *ngIf=\"_visible == 'false'\">\n      <p class=\"responseInfo\" *ngIf=\"productdetails?.length > 0 ? true : false \">{{messageTwo}}</p>\n      <div class=\"heightTab\" id=\"scrollDiv\">\n        <mat-radio-group class=\"example-radio-group\" [formControlName]=\"radioFormControl\">\n          <div class=\"col\" *ngFor=\"let products of productdetails;let productIndex=index\">\n            <mat-radio-button class=\"searchData\" [color]=\"color\" (click)=\"selectproducts.emit(products)\"\n              [value]=\"productIndex\" id=\"product{{productIndex}}\">\n              <span class=\"col p-0 product-label\">\n                {{products?.asset?.description}}\n                <br/>\n                {{products?.asset?.name}}\n              </span>\n            </mat-radio-button>\n            <hr>\n          </div>\n        </mat-radio-group>\n      </div>\n    </div>\n    <div class=\"col-sm-12 mb-2 text-center pt-3 mt-3 pb-1\">\n      <span class=\"pt-2\">\n        <button *ngIf=\"_visible == 'true'\" class=\"suku-i suku-{{btnType}} {{btnOneCustomClass}}\"\n          [ngClass]=\"{'disabled' : btnOneDisable}\" [disabled]=\"btnOneDisable\" [style.font-size.rem]=\"btnOneSize\"\n          [style.font-weight]=\"btnOneWeight\" [id]=\"btnOneId\" (click)=\"btnOneAction.emit()\">\n          {{btnLabelOne}}\n        </button>\n        <button *ngIf=\"_visible == 'false'\" class=\"suku-i suku-{{btnType}} {{btnTwoCustomClass}}\"\n          [ngClass]=\"{'disabled' : btnTwoDisable}\" [disabled]=\"btnTwoDisable\" [style.font-size.rem]=\"btnTwoSize\"\n          [style.font-weight]=\"btnTwoWeight\" [id]=\"btnTwoId\" (click)=\"btnTwoAction.emit()\">\n          {{btnLabelTwo}}\n        </button>\n      </span>\n    </div>\n  </div>\n</span>",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.product-boxContent{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 5px 15px}.traceMethod{font-size:var(--suku-font-size-3);font-family:var(--suku-primary-font);color:var(--suku-text-label-one);line-height:1em;margin:0 0 8px}.traceSearchType{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-3);color:var(--suku-text-label-one);line-height:1em;margin:0 0 12px}.traceBox{background-color:var(--suku-default-bg);box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);border-radius:0;padding-right:20px;padding-left:20px}.productName{color:#7f7e7e;font-size:13px}.searchIcon{font-size:var(--suku-font-size-5);color:var(--suku-text-label-one);color:var(--suku-default-icon-color)}.searchbox{width:85%;border-width:0}.searchbox:focus{outline:0}.product-label{white-space:normal;vertical-align:middle;text-align:justify}@media only screen and (max-width:319px){.searchbox{width:70%}}@media only screen and (max-width:1024px){.searchbox{width:83%}}.searchBorderBox{border:1px solid var(--suku-text-label-one);border-radius:12px 25.5px 25.5px;font-size:15px;margin-top:7px}.productCount{color:var(--suku-text-label-one);font-size:12px}.trackBtn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-1);padding:.55rem .99rem;border-radius:var(--suku-default-button-border-radius);background:var(--suku-primary-color)!important}.trackBtn:focus,.trackBtn:hover{color:#fff!important;font-size:var(--suku-font-size-1);cursor:pointer;background:var(--suku-primary-color)!important}.trackBtn.disabled:hover{color:#000!important;background:var(--suku-default-bg)}.searchData{word-break:normal;font-size:13px;color:var(--suku-text-label-one);font-family:var(--suku-primary-font)}.resultCount{color:#898787;font-size:12px;padding-left:13px}.responseInfo{color:var(--suku-text-label-one);font-size:12px;padding-left:13px}.heightTab{max-height:230px;overflow-x:hidden}::-webkit-scrollbar-thumb{background:var(--suku-primary-color);border-radius:60px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 var(--suku-primary-color);border-radius:60px}.searchData>label{white-space:pre-wrap!important;line-height:normal!important;white-space:pre-wrap}#scrollDiv::-webkit-scrollbar{width:6px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:60px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:var(--suku-primary-color)!important}.mat-radio-button.mat-accent .mat-radio-inner-circle::before{font-family:\"Font Awesome 5 Free\",sans-serif!important;content:\"\\f058\"!important;display:inline-block!important;vertical-align:middle;font-weight:900;font-size:35px!important;color:var(--suku-primary-color);margin:-7.6px 0 0 -8px!important}.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#fafafa!important}.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:var(--suku-primary-color)!important}.suku-i{border:2px solid;border-radius:28px 76px 63px;color:#3e3e3e;font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;padding:.55rem 2rem!important}.suku-i:hover{color:#fff;cursor:pointer}.suku-i:focus{outline:0!important}.suku-i.disabled:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:var(--suku-text-link);cursor:not-allowed}.suku-info{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-text-label-two);color:var(--suku-text-heading)}.suku-info:active,.suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.suku-info.disabled{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:grey}.suku-info.disabled.focus,.suku-info.disabled:focus,.suku-info.disabled:hover,.suku-info[disabled].focus,.suku-info[disabled]:focus,.suku-info[disabled]:hover,fieldset[disabled] .suku-info.focus,fieldset[disabled] .suku-info:focus,fieldset[disabled] .suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff!important;color:grey;outline:0}.suku-info.focus,.suku-info:focus{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.open>.dropdown-toggle .suku-info.focus,.open>.dropdown-toggle .suku-info:focus,.open>.dropdown-toggle.suku-info:hover,.suku-info.active.focus,.suku-info.active:focus,.suku-info.active:hover,.suku-info:active.focus,.suku-info:active:focus,.suku-info:active:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.show>.suku-info.dropdown-toggle,.suku-info:not(:disabled):not(.disabled).active,.suku-info:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}.show>.suku-info.dropdown-toggle:focus,.suku-info.focus,.suku-info:focus,.suku-info:not(:disabled):not(.disabled).active:focus,.suku-info:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}.suku-default{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-bg-secondary);color:var(--suku-text-label-one)}.suku-default:active,.suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.suku-default.disabled{border:2px solid;border-color:var(--suku-text-info);background-color:#fff;color:grey}.suku-default.disabled.focus,.suku-default.disabled:focus,.suku-default.disabled:hover,.suku-default[disabled].focus,.suku-default[disabled]:focus,.suku-default[disabled]:hover,fieldset[disabled] .suku-default.focus,fieldset[disabled] .suku-default:focus,fieldset[disabled] .suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:#fff!important;color:grey}.suku-default.focus,.suku-default:focus{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.open>.dropdown-toggle .suku-default.focus,.open>.dropdown-toggle .suku-default:focus,.open>.dropdown-toggle.suku-default:hover,.suku-default.active.focus,.suku-default.active:focus,.suku-default.active:hover,.suku-default:active.focus,.suku-default:active:focus,.suku-default:active:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff;outline:0}.show>.suku-default.dropdown-toggle,.suku-default:not(:disabled):not(.disabled).active,.suku-default:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-text-info);border-color:var(--suku-text-info)}.suku-default:focus,.suku-info.focus{box-shadow:none!important;outline:0!important}.show>.suku-default.dropdown-toggle:focus,.suku-default:not(:disabled):not(.disabled).active:focus,.suku-default:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuProductTraceWidgetComponent.ctorParameters = function () { return []; };
        SukuProductTraceWidgetComponent.propDecorators = {
            form: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            labelOne: [{ type: i0.Input, args: ['label-one',] }],
            labelOneId: [{ type: i0.Input, args: ['label-one-id',] }],
            labelOneCustomClass: [{ type: i0.Input, args: ['label-one-custom-class',] }],
            labelTwo: [{ type: i0.Input, args: ['label-two',] }],
            labelTwoId: [{ type: i0.Input, args: ['label-two-id',] }],
            labelTwoCustomClass: [{ type: i0.Input, args: ['label-two-custom-class',] }],
            labelThree: [{ type: i0.Input, args: ['label-three',] }],
            labelThreeId: [{ type: i0.Input, args: ['label-three-id',] }],
            labelThreeCustomClass: [{ type: i0.Input, args: ['label-three-custom-class',] }],
            traceBoxCustomClass: [{ type: i0.Input, args: ['trace-box-custom-class',] }],
            searchInputId: [{ type: i0.Input, args: ['search-input-id',] }],
            searchIconCustomClass: [{ type: i0.Input, args: ['search-icon-custom-class',] }],
            btnOneId: [{ type: i0.Input, args: ['btn-one-id',] }],
            btnOneSize: [{ type: i0.Input, args: ['btn-one-size',] }],
            btnOneWeight: [{ type: i0.Input, args: ['btn-one-weight',] }],
            btnLabelOne: [{ type: i0.Input, args: ['btn-label-one',] }],
            btnType: [{ type: i0.Input, args: ['btn-type',] }],
            btnOneCustomClass: [{ type: i0.Input, args: ['btn-one-custom-class',] }],
            btnOneDisable: [{ type: i0.Input, args: ['btn-one-disable',] }],
            btnOneAction: [{ type: i0.Output }],
            btnTwoId: [{ type: i0.Input, args: ['btn-two-id',] }],
            btnTwoSize: [{ type: i0.Input, args: ['btn-two-size',] }],
            btnTwoWeight: [{ type: i0.Input, args: ['btn-two-weight',] }],
            btnLabelTwo: [{ type: i0.Input, args: ['btn-label-two',] }],
            btnTwoCustomClass: [{ type: i0.Input, args: ['btn-two-custom-class',] }],
            btnTwoDisable: [{ type: i0.Input, args: ['btn-two-disable',] }],
            btnTwoAction: [{ type: i0.Output }],
            messageOne: [{ type: i0.Input, args: ['message-one',] }],
            messageTwo: [{ type: i0.Input, args: ['message-two',] }],
            control: [{ type: i0.Input }],
            radioFormControl: [{ type: i0.Input, args: ['radio-form-control',] }],
            traceMethodRadio: [{ type: i0.Input }],
            tracetheProductId: [{ type: i0.Input }],
            searchFun: [{ type: i0.Output }],
            selectproducts: [{ type: i0.Output }],
            disableBtn: [{ type: i0.Input }],
            productdetails: [{ type: i0.Input }],
            result: [{ type: i0.Input }],
            visible: [{ type: i0.Input, args: ['visible',] }]
        };
        return SukuProductTraceWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuProfileHeaderComponent = /** @class */ (function () {
        function SukuProfileHeaderComponent() {
            /* profile--widget --start */
            this.fullStars = 0;
            this.fullStarsArray = [];
            this.halfStar = 0;
            this.emptyStars = 0;
            this.emptyStarsArray = [];
            this.profileImage = '../../assets/images/browser.png';
            this.userName = 'Suku';
            this.nameWeight = '400';
            this.nameCustomClass = 'text-white mb-4 res-color pl-2 text-capitalize';
            this.nameSize = '33.4';
            this.accountType = 'Manufacturer';
            this.accountWeight = '400';
            this.accountCustomClass = 'pl-2 res-color';
            this.accountSize = '17';
            this.accountColor = 'rgba(255, 255, 255, 0.67)';
            this.accountId = 'accountId';
            this.ratingCustomClass = 'pl-2 mb-2 pt-3';
            this.rateDetails = '';
            this.rateDetailColor = '#757575';
            this.ratingDetailWeight = '400';
            this.rateDetailSize = '14';
            this.rateDetailsCustomClass = 'pl-2 mt-1';
            this.rateDetailsId = '';
            this.actionOne = new i0.EventEmitter();
            this.actionTwo = new i0.EventEmitter();
            this.rating = new i0.EventEmitter();
            /* edit-password--visibility */
            this.subHeadingOne = 'edit account';
            this.subHeadingOneId = 'editAccount';
            this.subHeadingTwo = 'change password';
            this.subHeadingTwoId = 'changePassword';
            this.editvisibility = true;
            this.changePasswordvisibility = true;
            /* suku-mail-widget */
            this.mail = 'dconway@suku.com';
            this.mailTxtSize = '13';
            this.mailTextColor = '#3e3e3e';
            this.mailWeight = '500';
            this.mailcustomClass = 'pt-2 pl-4 d-flex align-items-center';
            this.mailId = 'mail';
            this.mailIcon = '';
            this.mailIconClass = '';
            this.iconOneId = 'mail';
            this.iconOne = 'suku-mail-icon';
            this.iconOneCustomClass = 'mt-2';
            /* suku-phone-widget */
            this.number = 'N/A';
            this.phnumberSize = '13';
            this.phnumberColor = '#3e3e3e';
            this.phnumberWeight = '500';
            this.phnumberCustomClass = 'pl-4 mt-1 mb-1  d-flex align-items-center';
            this.phNumberIcon = '';
            this.phoneId = '';
            this.iconTwoId = 'phone';
            this.iconTwo = 'suku-phone-icon';
            this.iconTwoCustomClass = 'mt-2';
            /* suku-address-widget */
            this.addressIcon = '';
            this.address = '9315 NW 112TH AVE';
            this.addressSize = '13';
            this.addressColor = '#3e3e3e';
            this.addressWeight = '500';
            this.addressId = '';
            this.addressCustomClass = 'pt-2 pl-4 d-flex align-items-center';
            this.iconThreeId = 'address';
            this.iconThree = 'suku-map-pin-icon';
            this.iconThreeCustomClass = 'mt-2';
            /* sam-bardge */
            this.samBadgeIcon = '';
            this.samBadgeClass = '';
            this.samIconAction = new i0.EventEmitter();
            this.iconFourId = 'address';
            this.iconFour = 'suku-sam-badge-icon';
            this.iconFourCustomClass = 'mt-1 suku-lg';
        }
        Object.defineProperty(SukuProfileHeaderComponent.prototype, "ratingValue", {
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this.fullStars = Math.round(val);
                this.fullStarsArray = Array(this.fullStars).fill(1);
                this.halfStar = this.fullStars < val ? 1 : 0;
                this.emptyStars = 5 - this.fullStars - this.halfStar;
                this.emptyStarsArray = Array(this.emptyStars).fill(1);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuProfileHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        SukuProfileHeaderComponent.prototype.editAccount = /**
         * @return {?}
         */
            function () {
                this.actionOne.emit();
            };
        /**
         * @return {?}
         */
        SukuProfileHeaderComponent.prototype.changePass = /**
         * @return {?}
         */
            function () {
                this.actionTwo.emit();
            };
        SukuProfileHeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-profile-header',
                        template: "<div class=\"col p-0 bgColor\">\n  <div class=\"col-sm-12 pt1 pt-top\">\n    <div class=\"col pl-lg-5\">\n      <div class=\"row\">\n        <div class=\"col mt-4 p-md-0 pl-lg-2\">\n          <div class=\"col-sm-8 pt-2 col-md-12 col-lg-12\">\n            <div class=\"row\">\n              <div class=\"col-sm-5 col-md-5\">\n                <img [src]=\"profileImage\" class=\"rounded-circle img-circle\" alt=\"profile\" width=\"150\" height=\"150\">\n              </div>\n              <div class=\"col-sm-7 pl-lg-1 col-md-7\" id=\"profileDetails\">\n                <h1 [style.font-size.px]=\"nameSize\" [class]=\"nameCustomClass\" [style.font-weight]=\"nameWeight\"\n                  [style.color]=\"nameColor\" id=\"{{userNameId}}\">\n                  {{userName}}\n                </h1>\n                <span>\n                  <div class=\"pt-2 pl-1\" *ngIf=\"ratingPrivacy\">\n                    <span class=\"fa fa-star fullStar f22\" *ngFor=\"let star of fullStarsArray\"> </span>\n                    <span class=\"fa fa-star-half halfStarLeft f22\" *ngIf=\"halfStar == 1\"> </span>\n                    <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight f22\" *ngIf=\"halfStar == 1\"> </span>\n                    <span class=\"fa fa-star emptyStar f22\" *ngFor=\"let star of emptyStarsArray\"> </span>\n                  </div>\n                </span>\n                <h2 [style.font-size.px]=\"rateDetailSize\" *ngIf=\"ratingPrivacy\" [class]=\"rateDetailsCustomClass\"\n                  id=\"{{rateDetailsId}}\" [style.font-weight]=\"ratingDetailWeight\" [style.color]=\"rateDetailColor\">\n                  {{rateDetails}}\n                </h2>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-7 col-md-12 col-lg-6 pl-lg-0\">\n          <div class=\"col-sm-12 pt-lg-0 pl-lg-0\" id=\"detailsBlock\">\n            <div class=\"col-sm-12 pt-lg-5 pl-lg-0 p-xs-2\" id=\"editsBlock\">\n              <div class=\"col-sm-12 pt-lg-4\" [ngClass]=\"{'mb-lg-5': !editvisibility }\" id=\"editBlock\"\n                [style.visibility]=\"editvisibility\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12 col-lg-4 offset-lg-4 text-lg-right col-md-3 text-md-center col-xs-12 p-xs-0\"\n                    *ngIf=\"editvisibility\">\n                    <a class=\"profilePercentage colorGrey\" id=\"{{subHeadingOneId}}\"\n                      [style.visibility]=\"editvisibility ? 'visible' : 'hidden'\"\n                      (click)=\"editAccount()\">{{subHeadingOne}}</a>\n                  </div>\n                  <div class=\"col-sm-3 col-md-3 p-md-0 col-lg-4 text-lg-center col-xs-12 p-xs-0\"\n                    *ngIf=\"changePasswordvisibility\">\n                    <a class=\" profilePercentage colorGrey\" id=\"{{subHeadingTwoId}}\"\n                      [style.visibility]=\"changePasswordvisibility ? 'visible' : 'hidden'\"\n                      (click)=\"changePass()\">{{subHeadingTwo}}</a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-12 pt-3 mt-2 pl-md-0\">\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div>\n                      <span class=\"row pb-2\">\n                        <img [src]=\"mailIcon\" [class]=\"mailIconClass\" *ngIf=\"mailIcon\">\n                        <i class=\"{{iconOne}} {{iconOneCustomClass}}\" id=\"iconOneId\" *ngIf=\"iconOne\"></i>\n                        <h2 [style.font-size.px]=\"mailTxtSize\" [class]=\"mailcustomClass\" id=\"{{mailId}}\"\n                          [style.font-weight]=\"mailWeight\" [style.color]=\"mailTextColor\">\n                          {{mail}}\n                        </h2>\n                      </span>\n                    </div>\n                    <div class=\"pt-2 pb-2\">\n                      <span class=\"row pb-2\">\n                        <img [src]=\"phNumberIcon\" height=\"20px\" class=\"mt-1\">\n                        <i class=\"{{iconTwo}} {{iconTwoCustomClass}}\" id=\"iconTwoId\" *ngIf=\"iconTwo\"></i>\n                        <h2 [style.font-size.px]=\"phnumberSize\" [class]=\"phnumberCustomClass\" id=\"{{phoneId}}\"\n                          [style.font-weight]=\"phnumberWeight\" [style.color]=\"phnumberColor\">\n                          {{number}}\n                        </h2>\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-6 pr-2\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-8\">\n                        <span class=\"row pb-2\">\n                          <img [src]=\"addressIcon\">\n                          <i class=\"{{iconThree}} {{iconThreeCustomClass}}\" id=\"iconThreeId\" *ngIf=\"iconThree\"></i>\n                          <h2 [style.font-size.px]=\"addressSize\" [class]=\"addressCustomClass\" id=\"{{addressId}}\"\n                            [style.font-weight]=\"addressWeight\" [style.color]=\"addressColor\">\n                            {{address}}\n                          </h2>\n                        </span>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <a id=\"editProfCont\" (click)=\"samIconAction.emit()\" [hidden]=\"!editvisibility\">\n                          <i class=\"{{iconFour}} {{iconFourCustomClass}}\" id=\"iconFourId\" *ngIf=\"iconFour\"></i>\n                          <img [src]=\"samBadgeIcon\" alt=\"sam badge\" [class]=\"samBadgeClass\" height=\"50px\" width=\"50px\"  *ngIf=\"samBadgeIcon\">\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);#privacy{flex-grow:1}.bgColor{background-color:#fff;box-shadow:3px -4px 0 3px rgba(0,0,0,.01);border-radius:70px 70px 0 0}.bgColor:before{content:\"\";position:absolute;width:100%;height:202px;border-radius:70px 70px 0 0;background-image:radial-gradient(circle at 50% 0,#3a3a3a,#000),linear-gradient(rgba(101,102,243,.06),rgba(101,102,243,.06))}.colorGrey{color:rgba(255,255,255,.67)!important}@media only screen and (max-width:800px){.colorGrey{color:#000!important}}.border,.border-top{border:1px solid #e9e9e9bf!important}@media only screen and (min-width:1500px){.p-auto{padding-right:3rem!important}}@media only screen and (min-width:1024px){.pt-top{padding-top:94px!important}}@media only screen and (max-width:1024px){.tab-size{flex:auto;max-width:100%}.mbc-auto,.mc-auto{margin:auto!important}.pt-top{padding-top:41px!important}.bgColor:before{height:148px!important}}@media only screen and (max-width:768px){.bgColor:before{height:122px!important}.pt-top{padding-top:10px!important}}.profilePercentage{font-family:\"Encode Sans\",sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#fff}.emptyStar{color:#e1e1e1;margin:4px}.fullStar{color:#898989;margin:4px}.halfStarLeft{color:#898989;position:relative;left:1px}.halfStarRight{color:#e1e1e1;position:relative;right:1px}.profileBox{width:187.656px;border-radius:0 0 30px 30px;background-color:#fff;box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.img-circle{height:150px;width:150px;border-radius:100%;background-color:#fff!important}.bLine{opacity:.09;border:1px solid #979797}.userName{font-family:Poppins,sans-serif!important;font-size:20px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;color:var(--black);word-break:break-all!important}.create-interest-listing{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:14px;color:#b6b6b6;line-height:18px;letter-spacing:.01em;word-break:break-all!important}@media only screen and (max-width:500px){h1,h2{color:#000!important}}h1{font-family:Poppins,sans-serif!important;font-size:33.4px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.5px}h2{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;word-break:break-all!important}@media only screen and (max-width:1024px){h2{font-size:10px!important}}@media only screen and (max-width:568px){h2{font-size:13px!important}.res-color{color:#000!important}.p-xs-0{padding:0}.p-xs-2{padding:0 0 0 .2rem}}.f22{font-size:22px}"]
                    }] }
        ];
        /** @nocollapse */
        SukuProfileHeaderComponent.ctorParameters = function () { return []; };
        SukuProfileHeaderComponent.propDecorators = {
            profileImage: [{ type: i0.Input }],
            userName: [{ type: i0.Input, args: ['user-name',] }],
            nameWeight: [{ type: i0.Input }],
            nameCustomClass: [{ type: i0.Input }],
            nameSize: [{ type: i0.Input }],
            nameColor: [{ type: i0.Input }],
            userNameId: [{ type: i0.Input }],
            accountType: [{ type: i0.Input, args: ['account-type',] }],
            accountWeight: [{ type: i0.Input }],
            accountCustomClass: [{ type: i0.Input }],
            accountSize: [{ type: i0.Input }],
            accountColor: [{ type: i0.Input }],
            accountId: [{ type: i0.Input }],
            ratingCustomClass: [{ type: i0.Input }],
            rateDetails: [{ type: i0.Input }],
            rateDetailColor: [{ type: i0.Input }],
            ratingDetailWeight: [{ type: i0.Input }],
            rateDetailSize: [{ type: i0.Input }],
            rateDetailsCustomClass: [{ type: i0.Input }],
            ratingPrivacy: [{ type: i0.Input }],
            rateDetailsId: [{ type: i0.Input }],
            actionOne: [{ type: i0.Output }],
            actionTwo: [{ type: i0.Output }],
            rating: [{ type: i0.Output }],
            customClass: [{ type: i0.Input }],
            ratingValue: [{ type: i0.Input }, { type: i0.Input, args: ['rating-value',] }],
            subHeadingOne: [{ type: i0.Input }],
            subHeadingOneId: [{ type: i0.Input }],
            subHeadingTwo: [{ type: i0.Input }],
            subHeadingTwoId: [{ type: i0.Input }],
            editvisibility: [{ type: i0.Input }],
            changePasswordvisibility: [{ type: i0.Input }],
            mail: [{ type: i0.Input }],
            mailTxtSize: [{ type: i0.Input }],
            mailTextColor: [{ type: i0.Input }],
            mailWeight: [{ type: i0.Input }],
            mailcustomClass: [{ type: i0.Input }],
            mailId: [{ type: i0.Input }],
            mailIcon: [{ type: i0.Input }],
            mailIconClass: [{ type: i0.Input }],
            iconOneId: [{ type: i0.Input, args: ['icon-one-id',] }],
            iconOne: [{ type: i0.Input, args: ['icon-one',] }],
            iconOneCustomClass: [{ type: i0.Input, args: ['icon-one-custom-class',] }],
            number: [{ type: i0.Input }],
            phnumberSize: [{ type: i0.Input }],
            phnumberColor: [{ type: i0.Input }],
            phnumberWeight: [{ type: i0.Input }],
            phnumberCustomClass: [{ type: i0.Input }],
            phNumberIcon: [{ type: i0.Input }],
            phoneId: [{ type: i0.Input }],
            iconTwoId: [{ type: i0.Input, args: ['icon-two-id',] }],
            iconTwo: [{ type: i0.Input, args: ['icon-two',] }],
            iconTwoCustomClass: [{ type: i0.Input, args: ['icon-two-custom-class',] }],
            addressIcon: [{ type: i0.Input }],
            address: [{ type: i0.Input }],
            addressSize: [{ type: i0.Input }],
            addressColor: [{ type: i0.Input }],
            addressWeight: [{ type: i0.Input }],
            addressId: [{ type: i0.Input }],
            addressCustomClass: [{ type: i0.Input }],
            iconThreeId: [{ type: i0.Input, args: ['icon-three-id',] }],
            iconThree: [{ type: i0.Input, args: ['icon-three',] }],
            iconThreeCustomClass: [{ type: i0.Input, args: ['icon-three-custom-class',] }],
            samBadgeIcon: [{ type: i0.Input }],
            samBadgeClass: [{ type: i0.Input }],
            samIconAction: [{ type: i0.Output }],
            iconFourId: [{ type: i0.Input, args: ['icon-four-id',] }],
            iconFour: [{ type: i0.Input, args: ['icon-four',] }],
            iconFourCustomClass: [{ type: i0.Input, args: ['icon-four-custom-class',] }]
        };
        return SukuProfileHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuProfileWidgetComponent = /** @class */ (function () {
        function SukuProfileWidgetComponent() {
            this.image = '../../assets/images/browser.png';
            this.userName = 'Vairog';
            this.nameWeight = '400';
            this.nameCustomClass = 'mb-0 mt-1 pl-1';
            this.nameSize = '';
            this.accountType = 'Manufacturer';
            this.accountWeight = '400';
            this.accountCustomClass = 'pl-2';
            this.accountSize = '';
            this.accountColor = '';
            this.ratingCustomClass = 'pl-2 mb-2 pt-3 mt-4';
            this.rateDetails = 'based on 14 rating';
            this.rateColor = '';
            this.ratingWeight = '400';
            this.rDustomClass = 'pl-2';
            this.id = '';
            this.subCustomClass = 'profileBox';
            this.mainCustomClass = 'col-sm-12 col-md-6 col-lg-3 ml-2 mt-1 p-0';
            this._rate = 5;
            this.rating = new i0.EventEmitter();
            this.fullStars = 0;
            this.fullStarsArray = [];
            this.halfStar = 0;
            this.emptyStars = 0;
            this.emptyStarsArray = [];
            this.action = new i0.EventEmitter();
        }
        Object.defineProperty(SukuProfileWidgetComponent.prototype, "ratingValue", {
            set: /**
             * @param {?} ratingValue
             * @return {?}
             */ function (ratingValue) {
                this.fullStars = Math.round(ratingValue);
                this.fullStarsArray = Array(this.fullStars).fill(1);
                this.halfStar = (this.fullStars < ratingValue) ? 1 : 0;
                this.emptyStars = 5 - this.fullStars - this.halfStar;
                this.emptyStarsArray = Array(this.emptyStars).fill(1);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuProfileWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuProfileWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-profile-widget',
                        template: "<div [class]=\"mainCustomClass\">\n  <div class=\"row d-flex justify-content-start {{subCustomClass}}\">\n    <img src=\"{{image}}\" class=\"rounded-circle image mt-2 \" alt=\"profile\">\n    <div class=\"mL\">\n      <h1 [style.font-size.rem]=\"nameSize\" class=\"{{nameCustomClass}}} userName pl-2\" [style.font-weight]=\"nameWeight\"\n        [style.color]=\"nameColor\" id=\"{{id}}\">\n        {{userName}}\n      </h1>\n      <h2 [style.font-size.rem]=\"accountSize\" class=\"{{accountCustomClass}} accountType\" id=\"{{id}}\"\n        [style.font-weight]=\"accountWeight\" [style.color]=\"accountColor\">\n        {{accountType}}\n      </h2>\n      <div class=\"pt-3\">\n        <span (change)=\"action.emit()\">\n          <span class=\"fa fa-star fullStar pl-2\" *ngFor=\"let star of fullStarsArray\"> </span>\n          <span class=\"fa fa-star-half halfStarLeft\" *ngIf=\"halfStar == 1\"> </span>\n          <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight\" *ngIf=\"halfStar == 1\"> </span>\n          <span class=\"fa fa-star emptyStar\" *ngFor=\"let star of emptyStarsArray\"> </span>\n        </span>\n      </div>\n      <h2 [style.font-size.rem]=\"accountSize\" class=\"{{rDustomClass}} ratingDetails\" id=\"{{id}}\"\n        [style.font-weight]=\"ratingWeight\" [style.color]=\"rateColor\">\n        {{rateDetails}}\n      </h2>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.emptyStar{color:var(--suku-star-empty-bg);margin:4px;font-size:var(--suku-star-size)}.fullStar{color:var(--suku-star-full-bg);margin:4px;font-size:var(--suku-star-size)}.halfStarLeft{color:var(--suku-star-full-bg);position:relative;left:1px;font-size:var(--suku-star-size)}.halfStarRight{color:var(--suku-star-empty-bg);position:relative;right:1px;font-size:var(--suku-star-size)}.profileBox{background-color:var(--suku-profile-bg-color);box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.mL{margin-left:40px!important}.circle{height:150px;width:150px;border-radius:100%}.rounded-circle{background-color:#000;width:150px;height:150px}.userName{font-family:var(--suku-primary-font);font-size:1.8rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:var(--suku-text-label-two);word-break:break-all!important}.accountType{font-family:var(--suku-primary-font);font-size:1.1rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:var(--suku-profile-text-one);word-break:break-all!important}.ratingValue{font-family:var(--suku-primary-font);font-size:25px;color:var(--suku-text-info);font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;word-break:break-all!important}.ratingDetails{font-family:var(--suku-primary-font);color:var(--suku-profile-text-two);font-size:.8rem;font-weight:700;word-break:break-all!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuProfileWidgetComponent.ctorParameters = function () { return []; };
        SukuProfileWidgetComponent.propDecorators = {
            image: [{ type: i0.Input }],
            userName: [{ type: i0.Input, args: ['user-name',] }],
            nameWeight: [{ type: i0.Input, args: ['name-weight',] }],
            nameCustomClass: [{ type: i0.Input, args: ['name-custom-class',] }],
            nameSize: [{ type: i0.Input, args: ['name-size',] }],
            nameColor: [{ type: i0.Input, args: ['name-color',] }],
            accountType: [{ type: i0.Input, args: ['account-type',] }],
            accountWeight: [{ type: i0.Input, args: ['account-weight',] }],
            accountCustomClass: [{ type: i0.Input, args: ['account-custom-class',] }],
            accountSize: [{ type: i0.Input, args: ['account-size',] }],
            accountColor: [{ type: i0.Input, args: ['account-color',] }],
            ratingCustomClass: [{ type: i0.Input, args: ['rating-custom-class',] }],
            rateDetails: [{ type: i0.Input, args: ['rate-details',] }],
            rateColor: [{ type: i0.Input, args: ['rate-color',] }],
            ratingWeight: [{ type: i0.Input, args: ['rating-weight',] }],
            rDustomClass: [{ type: i0.Input, args: ['r-dustom-class',] }],
            id: [{ type: i0.Input }],
            subCustomClass: [{ type: i0.Input, args: ['sub-custom-class',] }],
            mainCustomClass: [{ type: i0.Input, args: ['main-custom-class',] }],
            rating: [{ type: i0.Output }],
            customClass: [{ type: i0.Input }],
            action: [{ type: i0.Output }],
            ratingValue: [{ type: i0.Input, args: ['rating-value',] }]
        };
        return SukuProfileWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuProgressBarTypeOneComponent = /** @class */ (function () {
        function SukuProgressBarTypeOneComponent() {
            this.progressStyleOne = 'progressActive';
            this.progressStyleTwo = 'progressUpcoming';
            this.progressStyleThree = 'progressUpcoming';
            this.progressStyleFour = 'progressUpcoming';
            this.customHeadingOneClass = 'p-xs-0 ';
            this.customHeadingTwoClass = '  p-xs-0';
            this.customHeadingThreeClass = 'p-xs-0';
            this.customHeadingFourClass = 'p-xs-0';
            this.enablePointer = false;
            this.progressBarLabels = {
                labelOne: 'RETRIEVE COMPANY DATA',
                labelTwo: 'COMPANY INFO',
                labelThree: 'LICENSING',
                labelFour: 'CONFIRMATION'
            };
            this.progressBarIconId = {
                IconOneId: 'listingDetails',
                IconTwoId: 'productDetails',
                IconThreeId: 'productTraceability',
                IconFourId: 'confirm'
            };
            this.progressBarTitleId = {
                labelOneId: 'listingDetails',
                labelTwoId: 'productDetails',
                labelThreeId: 'productTraceability',
                labelFourId: 'confirm'
            };
            this.progressOneAction = new i0.EventEmitter();
            this.progressTwoAction = new i0.EventEmitter();
            this.progressThreeAction = new i0.EventEmitter();
            this.progressFourAction = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuProgressBarTypeOneComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuProgressBarTypeOneComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-progress-bar-type-one',
                        template: "<table class=\"col-sm-10 offset-sm-1\">\n  <tr class=\"pt-3\">\n    <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\"\n      (click)=\"progressOneAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\"\n      (click)=\"progressTwoAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\"\n      (click)=\"progressThreeAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\"\n      (click)=\"progressFourAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\n    </td>\n  </tr>\n</table>\n<table class=\"col-sm-12 text-center mt-2\">\n  <tr id=\"txt\" class=\"pt-3\">\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelOneId}}\">\n      <span class=\"{{customHeadingOneClass}}\" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressOneAction.emit()\">{{progressBarLabels?.labelOne}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelTwoId}}\">\n      <span class=\"{{customHeadingTwoClass}} \" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressTwoAction.emit()\">{{progressBarLabels?.labelTwo}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelThreeId}}\">\n      <span class=\"{{customHeadingThreeClass}} \" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressThreeAction.emit()\">{{progressBarLabels?.labelThree}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFourId}}\">\n      <span class=\" {{customHeadingFourClass}} \" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressFourAction.emit()\">{{progressBarLabels?.labelFour}}</span>\n    </td>\n  </tr>\n</table>",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);.progressActive{width:50px!important;height:50px;color:#fff;background:#a7bf2e;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressTitle{font-family:\"Encode Sans\",sans-serif!important;font-size:12px!important;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.progress-bar-active{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.circleP{background-color:gray;width:50px!important;height:50px!important;border-radius:50%!important}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:15%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.text-bold{color:#000!important;font-weight:700!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center}.checkmark{display:inline-block}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid #d8fc40;border-width:0 3px 3px 0;transform:rotate(45deg)}.c-pointer :hover{cursor:pointer}hr{margin-top:1rem!important;margin-bottom:1rem!important;border:0!important;border-top:1px solid #979797!important;opacity:.2!important}.pr-6{padding-right:5rem}.pl-6{padding-left:4.8rem}@media only screen and (max-width:990px){.progressTitle{font-size:8px!important}.p-xs-0{padding:0!important}}"]
                    }] }
        ];
        /** @nocollapse */
        SukuProgressBarTypeOneComponent.ctorParameters = function () { return []; };
        SukuProgressBarTypeOneComponent.propDecorators = {
            progressStyleOne: [{ type: i0.Input, args: ['progress-style-one',] }],
            progressStyleTwo: [{ type: i0.Input, args: ['progress-style-two',] }],
            progressStyleThree: [{ type: i0.Input, args: ['progress-style-three',] }],
            progressStyleFour: [{ type: i0.Input, args: ['progress-style-four',] }],
            customHeadingOneClass: [{ type: i0.Input, args: ['custom-heading-one-class',] }],
            customHeadingTwoClass: [{ type: i0.Input, args: ['custom-heading-two-class',] }],
            customHeadingThreeClass: [{ type: i0.Input, args: ['custom-heading-three-class',] }],
            customHeadingFourClass: [{ type: i0.Input, args: ['custom-heading-four-class',] }],
            enablePointer: [{ type: i0.Input, args: ['enable-pointer',] }],
            progressBarIconId: [{ type: i0.Input }],
            progressBarTitleId: [{ type: i0.Input }],
            progressOneAction: [{ type: i0.Output }],
            progressTwoAction: [{ type: i0.Output }],
            progressThreeAction: [{ type: i0.Output }],
            progressFourAction: [{ type: i0.Output }]
        };
        return SukuProgressBarTypeOneComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuProgressBarTypeTwoComponent = /** @class */ (function () {
        function SukuProgressBarTypeTwoComponent() {
            this.progressStyleOne = 'progressActive';
            this.progressStyleTwo = 'progressUpcoming';
            this.progressStyleThree = 'progressUpcoming';
            this.progressStyleFour = 'progressUpcoming';
            this.progressStyleFive = 'progressUpcoming';
            this.customHeadingOneClass = '';
            this.customHeadingTwoClass = '';
            this.customHeadingThreeClass = '';
            this.customHeadingFourClass = '';
            this.customHeadingFiveClass = '';
            this.enablePointer = false;
            this.progressBarLabels = {
                labelOne: 'LISTING DETAILS',
                labelTwo: 'PRODUCT DETAILS',
                labelThree: 'PRODUCT TRACEABILITY',
                labelFour: 'TERMS OF SALE',
                labelFive: 'CONFIRM'
            };
            this.progressBarIconId = {
                IconOneId: 'listingDetails',
                IconTwoId: 'productDetails',
                IconThreeId: 'productTraceability',
                IconFourId: 'termsOfSale',
                IconFiveId: 'confirm'
            };
            this.progressBarTitleId = {
                labelOneId: 'listingDetails',
                labelTwoId: 'productDetails',
                labelThreeId: 'productTraceability',
                labelFourId: 'termsOfSale',
                labelFiveId: 'confirm'
            };
            this.progressOneAction = new i0.EventEmitter();
            this.progressTwoAction = new i0.EventEmitter();
            this.progressThreeAction = new i0.EventEmitter();
            this.progressFourAction = new i0.EventEmitter();
            this.progressFiveAction = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuProgressBarTypeTwoComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuProgressBarTypeTwoComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-progress-bar-type-two',
                        template: "<table class=\"col-sm-10 offset-sm-1\">\n  <tr class=\"pt-3\">\n    <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\"\n      (click)=\"progressOneAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\"\n      (click)=\"progressTwoAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\"\n      (click)=\"progressThreeAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\"\n      (click)=\"progressFourAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFive}} text-center\" id=\"{{progressBarIconId?.IconFiveId}}\"\n      (click)=\"progressFiveAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleFive == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFive == 'progressCompleted')\">5</span>\n    </td>\n  </tr>\n</table>\n<table class=\"col-sm-12 text-center mt-2\">\n  <tr id=\"txt\" class=\"pt-3\">\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelOneId}}\">\n      <span class=\"pl-4 p-xs-0 {{customHeadingOneClass}}\" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressOneAction.emit()\">{{progressBarLabels?.labelOne}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelTwoId}}\">\n      <span class=\"{{customHeadingTwoClass}} pl-4 p-xs-0\" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressTwoAction.emit()\">{{progressBarLabels?.labelTwo}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelThreeId}}\">\n      <span class=\"{{customHeadingThreeClass}} p-xs-0\" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressThreeAction.emit()\">{{progressBarLabels?.labelThree}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFourId}}\">\n      <span class=\"pr-3 {{customHeadingFourClass}} p-xs-0\" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressFourAction.emit()\">{{progressBarLabels?.labelFour}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFiveId}}\">\n      <span class=\"pr-4 {{customHeadingFiveClass}} p-xs-0\" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressFiveAction.emit()\">{{progressBarLabels?.labelFive}}</span>\n    </td>\n  </tr>\n</table>",
                        styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);.progressActive{width:50px!important;height:50px;color:#fff;background:#a7bf2e;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressTitle{font-family:\"Encode Sans\",sans-serif!important;font-size:12px!important;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.progress-bar-active{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.circleP{background-color:gray;width:50px!important;height:50px!important;border-radius:50%!important}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:20%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.text-bold{color:#000!important;font-weight:700!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center}.checkmark{display:inline-block}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid #d8fc40;border-width:0 3px 3px 0;transform:rotate(45deg)}.c-pointer :hover{cursor:pointer}hr{margin-top:1rem!important;margin-bottom:1rem!important;border:0!important;border-top:1px solid #979797!important;opacity:.2!important}.pr-6{padding-right:5rem}.pl-6{padding-left:4.8rem}@media only screen and (max-width:990px){.progressTitle{font-size:8px!important}.p-xs-0{padding:0!important}}"]
                    }] }
        ];
        /** @nocollapse */
        SukuProgressBarTypeTwoComponent.ctorParameters = function () { return []; };
        SukuProgressBarTypeTwoComponent.propDecorators = {
            progressStyleOne: [{ type: i0.Input, args: ['progress-style-one',] }],
            progressStyleTwo: [{ type: i0.Input, args: ['progress-style-two',] }],
            progressStyleThree: [{ type: i0.Input, args: ['progress-style-three',] }],
            progressStyleFour: [{ type: i0.Input, args: ['progress-style-four',] }],
            progressStyleFive: [{ type: i0.Input, args: ['progress-style-five',] }],
            customHeadingOneClass: [{ type: i0.Input, args: ['custom-heading-one-class',] }],
            customHeadingTwoClass: [{ type: i0.Input, args: ['custom-heading-two-class',] }],
            customHeadingThreeClass: [{ type: i0.Input, args: ['custom-heading-three-class',] }],
            customHeadingFourClass: [{ type: i0.Input, args: ['custom-heading-four-class',] }],
            customHeadingFiveClass: [{ type: i0.Input, args: ['custom-heading-five-class',] }],
            enablePointer: [{ type: i0.Input, args: ['enable-pointer',] }],
            progressBarLabels: [{ type: i0.Input }],
            progressBarIconId: [{ type: i0.Input }],
            progressBarTitleId: [{ type: i0.Input }],
            progressOneAction: [{ type: i0.Output }],
            progressTwoAction: [{ type: i0.Output }],
            progressThreeAction: [{ type: i0.Output }],
            progressFourAction: [{ type: i0.Output }],
            progressFiveAction: [{ type: i0.Output }]
        };
        return SukuProgressBarTypeTwoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuRadioButtonComponent = /** @class */ (function () {
        function SukuRadioButtonComponent() {
            this.control = 'traceabilityProduct';
            this.content = 'using an id';
            this.contentCustomClass = 'traceSelectedProd';
            this.radioButtonId = 'sukuRadioButton';
            this.color = 'primary';
            this.value = 1;
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuRadioButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @return {?}
         */
        SukuRadioButtonComponent.prototype.buttonAction = /**
         * @return {?}
         */
            function () {
                this.action.emit();
            };
        SukuRadioButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-radio-button',
                        template: "<span [formGroup]=\"form\">\n  <mat-radio-group formControlName=\"{{control}}\" name=\"{{control}}\">\n    <mat-radio-button type=\"radio\" (click)=\"buttonAction()\" class=\"radio-inline thisProductInfoLabel\"\n      [id]=\"radioButtonId\" [color]=\"color\" [value]=\"value\">\n      <span [class]=\"contentCustomClass\">{{content}}</span>\n    </mat-radio-button>\n  </mat-radio-group>\n</span>",
                        styles: [".thisProductInfoLabel{font-family:'Encode Sans',sans-serif;font-size:14px;font-style:normal;font-stretch:normal;line-height:2;letter-spacing:-.4px;color:#1c1c1c}.radio-inline{margin-top:0!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuRadioButtonComponent.ctorParameters = function () { return []; };
        SukuRadioButtonComponent.propDecorators = {
            form: [{ type: i0.Input }],
            control: [{ type: i0.Input }],
            content: [{ type: i0.Input }],
            contentCustomClass: [{ type: i0.Input }],
            radioButtonId: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            value: [{ type: i0.Input }],
            action: [{ type: i0.Output }]
        };
        return SukuRadioButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuRatingCardLineComponent = /** @class */ (function () {
        function SukuRatingCardLineComponent() {
            this.fullStars = 0;
            this.fullStarsArray = [];
            this.halfStar = 0;
            this.emptyStars = 0;
            this.emptyStarsArray = [];
            this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
            this.iconOne = '';
            this.iconTwo = '';
            this.customclass = '';
            this.customImgclass = 'img-res';
            this.customIconclass = 'text-center';
            this.bgColor = '';
            this.imageColSize = 'col-sm-1 p-0';
            this.txtcolsize = 'col-sm-3 col-xs-12 pl-lg-2 pr-2 pt-1 mt-1';
            this.txttwocolsize = 'col-sm-3 pt-2';
            this.txtthreecolsize = 'col-sm-2 pt-2';
            this.titleOne = 'Title One';
            this.titleOneColor = 'black';
            this.titleOneWeight = '600';
            this.titleOneSize = '14';
            this.titleOnecustomclass = '';
            this.ratingTitle = 'RATING RECEIVED';
            this.ratingtitleColor = '#b6b6b6';
            this.ratingtitleWeight = '500';
            this.ratingtitleSize = '12';
            this.ratingtitlecustomclass = '';
            this.contentOne = '$100';
            this.contentOneColor = '#3e3e3e';
            this.contentOneWeight = '500';
            this.contentOneSize = '14';
            this.contentOnecustomclass = '';
            this.contentTwo = 'John Smith';
            this.contentTwoColor = '#3e3e3e';
            this.contentTwoWeight = '500';
            this.contentTwoSize = '14';
            this.contentTwocustomclass = 'user';
            this.subTitleTwo = 'SOLD BY';
            this.subTitleTwoColor = '#b6b6b6';
            this.subTitleTwoWeight = '500';
            this.subTitleTwoSize = '12';
            this.subTitleTwocustomclass = '';
            this.subTitleThree = 'TOTAL PRICE';
            this.subTitleThreecolor = '#b6b6b6';
            this.subTitleThreeWeight = '500';
            this.subTitleThreeSize = '12';
            this.subTitleThreeClass = '';
            this.contentThree = '28 Nov 2018';
            this.contentThreeColor = '#3e3e3e';
            this.contentThreeWeight = '500';
            this.contentThreeSize = '14';
            this.contentThreecustomclass = '';
            this.action = new i0.EventEmitter();
            this.userAction = new i0.EventEmitter();
        }
        Object.defineProperty(SukuRatingCardLineComponent.prototype, "ratingValue", {
            set: /**
             * @param {?} ratingValue
             * @return {?}
             */ function (ratingValue) {
                console.log('ra', this.ratingValue);
                this.fullStars = Math.round(ratingValue);
                this.fullStarsArray = Array(this.fullStars).fill(1);
                this.halfStar = this.fullStars < ratingValue ? 1 : 0;
                this.emptyStars = 5 - this.fullStars - this.halfStar;
                this.emptyStarsArray = Array(this.emptyStars).fill(1);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuRatingCardLineComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuRatingCardLineComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-rating-card-line',
                        template: "<div class=\"col p-0\">\r\n  <div class=\"row card-line-bg p-3 m-3 {{customclass}}\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img [class]=\"customImgclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\r\n    </div>\r\n    <span class=\"col d-lg-flex d-md-flex p-0 pt-1\">\r\n      <div [class]=\"txtcolsize\">\r\n        <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\r\n          [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n        <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\r\n          [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n      </div>\r\n      <div class=\"col-sm-4 d-flex pt-2 flex-column\" (click)=\"action.emit()\" *ngIf=\"true\">\r\n        <h2 [style.font-size.px]=\"ratingtitleSize\" [class]=\"ratingtitlecustomclass\"\r\n          [style.font-weight]=\"ratingtitleWeight\" [style.color]=\"ratingtitleColor\">{{ratingTitle}}</h2>\r\n        <p class=\"mb-0\">\r\n          <span class=\"starSize\">\r\n            <div class=\"pl-1\">\r\n              <span class=\"suku-star-icon fullStar starSize\" *ngFor=\"let star of fullStarsArray\"> </span>\r\n              <span class=\"fa fa-star-half halfStarLeft starSize\" *ngIf=\"halfStar == 1\"> </span>\r\n              <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight starSize\" *ngIf=\"halfStar == 1\"> </span>\r\n              <span class=\"suku-star-empty-icon emptyStar starSize\" *ngFor=\"let star of emptyStarsArray\"> </span>\r\n            </div>\r\n          </span>\r\n        </p>\r\n      </div>\r\n      <div [class]=\"txttwocolsize\">\r\n        <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"\r\n          [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n        <h2 [style.font-size.px]=\"contentTwoSize\" (click)=\"userAction.emit()\" [class]=\"contentTwocustomclass\"\r\n          [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n      </div>\r\n      <div [class]=\"txtthreecolsize\">\r\n        <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"\r\n          [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n        <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"\r\n          [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n      </div>\r\n    </span>\r\n  </div>\r\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:var(--suku-text-label-one);word-break:break-word!important}.card-line-bg{background-color:var(--suku-default-bg);box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}.starSize{font-size:var(--suku-star-size)!important}.img-res{height:auto;max-width:100%;max-height:100%;padding:6px 5px}.emptyStar{color:var(--suku-star-empty-bg);margin-right:5px}.fullStar{color:var(--suku-star-full-bg);margin-right:5px}.halfStarLeft{color:var(--suku-star-full-bg);position:relative;left:1px}.halfStarRight{color:var(--suku-star-empty-bg);position:relative;right:1px}.f20{font-size:20px}.user{cursor:pointer}.user:hover{color:#000!important;font-weight:700!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuRatingCardLineComponent.ctorParameters = function () { return []; };
        SukuRatingCardLineComponent.propDecorators = {
            image: [{ type: i0.Input }],
            iconOne: [{ type: i0.Input, args: ['icon-one',] }],
            iconTwo: [{ type: i0.Input, args: ['icon-two',] }],
            msgStatus: [{ type: i0.Input, args: ['msg-status',] }],
            customclass: [{ type: i0.Input, args: ['customclass',] }],
            customImgclass: [{ type: i0.Input, args: ['customImgclass',] }],
            customIconclass: [{ type: i0.Input, args: ['custom-iconclass',] }],
            bgColor: [{ type: i0.Input }],
            interest: [{ type: i0.Input }],
            imageColSize: [{ type: i0.Input }],
            txtcolsize: [{ type: i0.Input }],
            txttwocolsize: [{ type: i0.Input }],
            txtthreecolsize: [{ type: i0.Input }],
            titleOne: [{ type: i0.Input, args: ['title-one',] }],
            titleOneColor: [{ type: i0.Input, args: ['title-one-color',] }],
            titleOneWeight: [{ type: i0.Input, args: ['title-one-weight',] }],
            titleOneSize: [{ type: i0.Input, args: ['title-one-size',] }],
            titleOnecustomclass: [{ type: i0.Input, args: ['title-one-customclass',] }],
            ratingTitle: [{ type: i0.Input, args: ['rating-title',] }],
            ratingtitleColor: [{ type: i0.Input, args: ['rating-title-color',] }],
            ratingtitleWeight: [{ type: i0.Input, args: ['rating-title-weight',] }],
            ratingtitleSize: [{ type: i0.Input, args: ['rating-title-size',] }],
            ratingtitlecustomclass: [{ type: i0.Input, args: ['rating-title-customclass',] }],
            contentOne: [{ type: i0.Input, args: ['content-one',] }],
            contentOneColor: [{ type: i0.Input, args: ['content-one-color',] }],
            contentOneWeight: [{ type: i0.Input, args: ['content-one-weight',] }],
            contentOneSize: [{ type: i0.Input, args: ['content-one-size',] }],
            contentOnecustomclass: [{ type: i0.Input, args: ['content-one-customclass',] }],
            contentTwo: [{ type: i0.Input, args: ['content-two',] }],
            contentTwoColor: [{ type: i0.Input, args: ['content-two-color',] }],
            contentTwoWeight: [{ type: i0.Input, args: ['content-two-weight',] }],
            contentTwoSize: [{ type: i0.Input, args: ['content-two-size',] }],
            contentTwocustomclass: [{ type: i0.Input, args: ['content-two-customclass',] }],
            subTitleTwo: [{ type: i0.Input, args: ['sub-title-two',] }],
            subTitleTwoColor: [{ type: i0.Input, args: ['sub-title-two-color',] }],
            subTitleTwoWeight: [{ type: i0.Input, args: ['sub-title-two-weight',] }],
            subTitleTwoSize: [{ type: i0.Input, args: ['sub-title-two-size',] }],
            subTitleTwocustomclass: [{ type: i0.Input, args: ['sub-title-two-customclass',] }],
            subTitleThree: [{ type: i0.Input, args: ['sub-title-three',] }],
            subTitleThreecolor: [{ type: i0.Input, args: ['sub-title-three-color',] }],
            subTitleThreeWeight: [{ type: i0.Input, args: ['sub-title-three-weight',] }],
            subTitleThreeSize: [{ type: i0.Input, args: ['sub-title-three-size',] }],
            subTitleThreeClass: [{ type: i0.Input, args: ['sub-title-threeclass',] }],
            contentThree: [{ type: i0.Input, args: ['content-three',] }],
            contentThreeColor: [{ type: i0.Input, args: ['content-three-color',] }],
            contentThreeWeight: [{ type: i0.Input, args: ['content-three-widget',] }],
            contentThreeSize: [{ type: i0.Input, args: ['content-three-size',] }],
            contentThreecustomclass: [{ type: i0.Input, args: ['content-three-customclass',] }],
            action: [{ type: i0.Output }],
            userAction: [{ type: i0.Output }],
            customRatingclass: [{ type: i0.Input }],
            ratingValue: [{ type: i0.Input, args: ['rating-value',] }]
        };
        return SukuRatingCardLineComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuRatingStarComponent = /** @class */ (function () {
        function SukuRatingStarComponent() {
            this._rate = 0;
            this.fullStars = 0;
            this.fullStarsArray = [];
            this.halfStar = 0;
            this.emptyStars = 0;
            this.emptyStarsArray = [];
            this.action = new i0.EventEmitter();
        }
        Object.defineProperty(SukuRatingStarComponent.prototype, "ratingValue", {
            set: /**
             * @param {?} ratingValue
             * @return {?}
             */ function (ratingValue) {
                this.fullStars = Math.round(ratingValue);
                this.fullStarsArray = Array(this.fullStars).fill(1);
                this.halfStar = (this.fullStars < ratingValue) ? 1 : 0;
                this.emptyStars = 5 - this.fullStars - this.halfStar;
                this.emptyStarsArray = Array(this.emptyStars).fill(1);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuRatingStarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SukuRatingStarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-rating-star',
                        template: "<span (change)=\"action.emit()\">\n  <div class=\"{{customClass}}\">\n    <span class=\"suku-star-icon fullStar\" *ngFor=\"let star of fullStarsArray\"> </span>\n    <span class=\"fa fa-star-half halfStarLeft\" *ngIf=\"halfStar == 1\"> </span>\n    <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight\" *ngIf=\"halfStar == 1\"> </span>\n    <span class=\"suku-star-empty-icon emptyStar\" *ngFor=\"let star of emptyStarsArray\"> </span>\n  </div>\n</span>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.emptyStar{color:var(--suku-star-empty-bg);margin:3px;font-size:var(--suku-star-size)}.fullStar{color:var(--suku-star-full-bg);margin:3px;font-size:var(--suku-star-size)}.halfStarLeft{color:var(--suku-star-full-bg);position:relative;left:1px;font-size:var(--suku-star-size)}.halfStarRight{color:var(--suku-star-empty-bg);position:relative;right:1px;font-size:var(--suku-star-size)}"]
                    }] }
        ];
        /** @nocollapse */
        SukuRatingStarComponent.ctorParameters = function () { return []; };
        SukuRatingStarComponent.propDecorators = {
            action: [{ type: i0.Output }],
            customClass: [{ type: i0.Input, args: ['custom-class',] }],
            ratingValue: [{ type: i0.Input, args: ['rating-value',] }]
        };
        return SukuRatingStarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuResponseComponent = /** @class */ (function () {
        function SukuResponseComponent() {
            this.customClass = 'filterResult text-center col p-0';
            this.title = 'No results found';
            this.titleId = 'noResultsFound';
            this.titleSize = '2';
            this.titleColor = 'black';
            this.titleWeight = '300';
            this.description = 'Try changing your filter settings on the left to see a different set of results.';
            this.descriptionId = 'description';
            this.descriptionSize = '18';
            this.descriptionColor = '#979797';
            this.descriptionWeight = '400';
            this.bgColor = '';
            this.imgCustomClass = 'imgCustomClass mb-4 mt-4';
            this.sukuResponseLogo = '';
            this.icon = 'suku-no-data-search-icon';
            this.iconId = 'suku-no-data-search-icon';
            this.iconCustomClass = '';
            this.subCustomClass = 'col-lg-5 p-0 col-sm-12 justify-content-center mx-auto';
        }
        SukuResponseComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-response',
                        template: "<div class=\"{{customClass}} filterResult text-center col p-0\" [style.background-color]=\"bgColor\">\n  <div [class]=\"subCustomClass\">\n    <p class=\"response-title {{titleCustomClass}} mb-1\" id=\"{{titleId}}\" [style.font-size.rem]=\"titleSize\"\n      [style.color]=\"titleColor\" [style.font-weight]=\"titleWeight\">{{title}}</p>\n    <img [src]=\"sukuResponseLogo\" [class]=\"imgCustomClass\" alt=\"no-data-search-icon\" *ngIf=\"sukuResponseLogo\">\n    <i class=\"{{icon}} {{iconCustomClass}} icon-1x m-2\" *ngIf=\"icon\" id=\"{{iconId}}\"></i>\n    <p class=\"text-justify text-center mx-auto description {{descriptionCustomClass}}\" id=\"{{descriptionId}}\"\n      [style.font-size.res]=\"descriptionSize\" [style.color]=\"descriptionColor\" [style.font-weight]=\"descriptionWeight\">\n      {{description}}</p>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.filterResult{margin-top:170px}.response-title{font-family:var(--suku-primary-font);font-weight:300}.description{font-family:var(--suku-primary-font);color:#979797;width:350px}.imgCustomClass{height:70px;width:70px}.icon-1x{font-size:4em}"]
                    }] }
        ];
        SukuResponseComponent.propDecorators = {
            customClass: [{ type: i0.Input, args: ['custom-class',] }],
            title: [{ type: i0.Input }],
            titleId: [{ type: i0.Input, args: ['title-id',] }],
            titleSize: [{ type: i0.Input, args: ['title-size',] }],
            titleColor: [{ type: i0.Input, args: ['title-color',] }],
            titleWeight: [{ type: i0.Input, args: ['title-weight',] }],
            titleCustomClass: [{ type: i0.Input, args: ['title-custom-class',] }],
            description: [{ type: i0.Input }],
            descriptionId: [{ type: i0.Input, args: ['description-id',] }],
            descriptionSize: [{ type: i0.Input, args: ['description-size',] }],
            descriptionColor: [{ type: i0.Input, args: ['description-color',] }],
            descriptionWeight: [{ type: i0.Input, args: ['description-weight',] }],
            descriptionCustomClass: [{ type: i0.Input, args: ['description-custom-class',] }],
            bgColor: [{ type: i0.Input, args: ['bg-color',] }],
            imgCustomClass: [{ type: i0.Input, args: ['img-custom-class',] }],
            sukuResponseLogo: [{ type: i0.Input, args: ['suku-response-logo',] }],
            icon: [{ type: i0.Input, args: ['icon',] }],
            iconId: [{ type: i0.Input, args: ['icon-id',] }],
            iconCustomClass: [{ type: i0.Input, args: ['icon-custom-class',] }],
            subCustomClass: [{ type: i0.Input, args: ['sub-custom-class',] }]
        };
        return SukuResponseComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuSearchInputComponent = /** @class */ (function () {
        function SukuSearchInputComponent() {
            this.icon = '../../assets/images/search-icon.svg';
            this.customClass = 'c-pointer default';
            this.iconCustomClass = 'float-right c-pointer searchIcon';
            this.iconId = 'searchIcon';
            this.placeholder = 'search partners';
            this.searchOnType = new i0.EventEmitter();
            this.searchOnEnter = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuSearchInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuSearchInputComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-search-input',
                        template: "<div [formGroup]=\"form\">\n  <div id=\"search_container\" class=\"col p-0 d-flex mt-1 {{customClass}}\">\n    <input type=\"text\" autocomplete=\"off\" id=\"search\" class=\"stretch\" formControlName=\"{{control}}\" name=\"{{control}}\"\n      (keyup)=\"searchOnType.emit()\" (keyup.enter)=\"searchOnEnter.emit()\" placeholder=\"{{placeholder}}\">\n    <img src=\"{{icon}}\" [class]=\"iconCustomClass\" [id]=\"iconId\" (click)=\"searchOnEnter.emit();searchOnType.emit()\">\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}#search_container{border-radius:var(--suku-search-border-radius)}.stretch{flex-grow:1;border:2px solid var(--suku-text-label-three);border-radius:var(--suku-search-border-radius)}.default{width:245px}.c-pointer{cursor:pointer!important}input#search{height:40px;font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:500;font-style:normal;font-stretch:normal;line-height:1;letter-spacing:-.4px;padding-right:33px;padding-left:15px;position:relative;width:80%}input:focus{outline:0!important}::-webkit-input-placeholder{color:#3e3e3e;font-size:var(--suku-font-size-3)}::-moz-placeholder{color:#3e3e3e;font-size:var(--suku-font-size-3)}:-ms-input-placeholder{color:#3e3e3e;font-size:var(--suku-font-size-3)}::-ms-input-placeholder{color:#3e3e3e;font-size:var(--suku-font-size-3)}::placeholder{color:#3e3e3e;font-size:var(--suku-font-size-3)}.searchIcon{position:absolute;width:17px;top:10px;right:10px;margin:1px;background:var(--suku-homepage-bg)}"]
                    }] }
        ];
        /** @nocollapse */
        SukuSearchInputComponent.ctorParameters = function () { return []; };
        SukuSearchInputComponent.propDecorators = {
            form: [{ type: i0.Input }],
            control: [{ type: i0.Input }],
            icon: [{ type: i0.Input }],
            customClass: [{ type: i0.Input, args: ['custom-class',] }],
            iconCustomClass: [{ type: i0.Input, args: ['icon-custom-class',] }],
            iconId: [{ type: i0.Input, args: ['icon-id',] }],
            placeholder: [{ type: i0.Input, args: ['placeholder',] }],
            searchOnType: [{ type: i0.Output }],
            searchOnEnter: [{ type: i0.Output }]
        };
        return SukuSearchInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuSelectInputComponent = /** @class */ (function () {
        function SukuSelectInputComponent() {
            this.name = 'ADD INTEREST';
            this.keyValue = 'value';
            this.displayKey = 'name';
            this.titleText = 'Sort by';
            this.placeHolder = 'Choose sort method';
            this.imgheight = '18';
            this.imgwidth = '20';
            this.imgurl = '';
            this.imageCustomClass = '';
            this.icon = 'suku-arrow-icon';
            this.iconId = '';
            this.iconCustomClass = '';
            this.sort = new i0.EventEmitter();
            this.options = [
                {
                    name: 'Matches-Low to High',
                    value: '0'
                },
                {
                    name: 'Matches-High to Low',
                    value: '1'
                },
                {
                    name: 'Z to A',
                    value: '2'
                },
                {
                    name: 'A to Z',
                    value: '3'
                }
            ];
        }
        /**
         * @return {?}
         */
        SukuSelectInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuSelectInputComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-select-input',
                        template: "<div class=\"form-group\">\n  <div class=\"select-out input-group\">\n    <label for=\"select\" id=\"sortBy\" class=\"sort-by col-sm-2 p-0 m-auto mb-0 mr-3\">{{titleText}}</label>\n    <span class=\"{{customclass}} p-xs-0\">\n      <select class=\"optionsBox form-control fcontrol mt-1\" id=\"interestTwo\" name=\"sort\" #addRe (change)=\"sort.emit(addRe.value)\">\n        <option id=\"default\" value=\"default\" disabled>{{placeHolder}}</option>\n        <option *ngFor=\"let option of options;let i=index\" id=\"{{option[keyValue]}}\" value=\"{{option[keyValue]}}\">{{option[displayKey]}}</option>\n      </select>\n        <i class=\"{{icon}} {{iconCustomClass}} dropdown-icon\" id=\"{{iconId}}\" *ngIf=\"icon\" ></i>\n      </span>\n      <img class=\"{{imageCustomClass}}\" [height]=\"imgheight\"  [src]=\"imgurl\" [width]=\"imgwidth\" *ngIf=\"imgurl\">\n  </div>\n</div>\n",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.sort-by{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-3);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:var(--suku-text-label-one);text-transform:uppercase}.optionsBox{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#000;height:44px!important;text-transform:lowercase;border:1px solid rgba(151,151,151,.23);background-color:#fff}.optionsBox:focus{background-color:#fff!important}.default{width:281px}select+img.image{float:right;margin-top:-30px;margin-right:5px;pointer-events:none;background-color:#fff;padding-right:5px}select+i.dropdown-icon{float:right;margin-top:-30px;margin-right:4px;pointer-events:none;font-size:large}select:focus{background-color:#fff!important;outline:0!important}@media (max-width:486px){.p-xs-0{padding:0}}select::-ms-expand{display:none}select{-moz-appearance:none;-webkit-appearance:none;appearance:none}"]
                    }] }
        ];
        /** @nocollapse */
        SukuSelectInputComponent.ctorParameters = function () { return []; };
        SukuSelectInputComponent.propDecorators = {
            name: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            customclass: [{ type: i0.Input }],
            keyValue: [{ type: i0.Input }],
            displayKey: [{ type: i0.Input }],
            titleText: [{ type: i0.Input }],
            placeHolder: [{ type: i0.Input }],
            imgheight: [{ type: i0.Input }],
            imgwidth: [{ type: i0.Input }],
            imgurl: [{ type: i0.Input }],
            imageCustomClass: [{ type: i0.Input, args: ['image-custom-class',] }],
            icon: [{ type: i0.Input, args: ['icon',] }],
            iconId: [{ type: i0.Input, args: ['icon-id',] }],
            iconCustomClass: [{ type: i0.Input, args: ['icon-custom-class',] }],
            sort: [{ type: i0.Output }],
            options: [{ type: i0.Input }]
        };
        return SukuSelectInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuShippingInfoWidgetComponent = /** @class */ (function () {
        function SukuShippingInfoWidgetComponent() {
            this.widgetTitle = 'Shipping Information';
            this.widgetTitleColor = '';
            this.widgetTitleWeight = '';
            this.widgetTitleSize = '';
            this.widgetTitlecustomclass = '';
            this.widgetTitleid = '';
            this.shippingaddressCustomClass = '';
            this.firstName = '';
            this.secondName = '';
            this.addressOne = '';
            this.addressTwo = '';
            this.city = '';
            this.state = '';
            this.zip = '';
            this.country = '';
        }
        /**
         * @return {?}
         */
        SukuShippingInfoWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuShippingInfoWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-shipping-info-widget',
                        template: "<div class=\"headingStyle\" [style.font-size.px]=\"widgetTitleSize\" [class]=\"widgetTitlecustomclass\" id=\"{{widgetTitleid}}\"\n  [style.font-weight]=\"widgetTitleWeight\" [style.color]=\"widgetTitleColor\">{{widgetTitle}} </div>\n<div class=\"article mb-3 p-0 pt-3\">\n  <div class=\"col-sm-12 col-xs-12 border\">\n    <div class=\"col-sm-12 col-xs-12 pt-3 p-2\">\n      <div class=\"font_weight contentStyle shipping-address\" [class]=\"shippingaddressCustomClass\">\n        <p class=\"mb-1\"><span>{{firstName || 'no data'}}</span>\n          <span class=\"ml-2\">{{secondName}}</span></p>\n        <p class=\"mb-1\">{{addressOne}}</p>\n        <p class=\"mb-1\">{{addressTwo}}</p>\n        <p class=\"mb-1\"><span>{{city}}</span><span class=\"ml-2\">{{state}}</span><span class=\"ml-2\">\n            {{zip}}</span></p>\n        <p class=\"mb-1\">{{country}}</p>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.headingStyle{font-family:var(--suku-primary-font);padding-bottom:9px}.contentStyle{padding-top:15px}.marginBottom22{margin-bottom:22px}.shipping-address{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#020202d9;margin-bottom:1px;text-transform:capitalize}.article{width:100%;float:left}"]
                    }] }
        ];
        /** @nocollapse */
        SukuShippingInfoWidgetComponent.ctorParameters = function () { return []; };
        SukuShippingInfoWidgetComponent.propDecorators = {
            widgetTitle: [{ type: i0.Input }],
            widgetTitleColor: [{ type: i0.Input }],
            widgetTitleWeight: [{ type: i0.Input }],
            widgetTitleSize: [{ type: i0.Input }],
            widgetTitlecustomclass: [{ type: i0.Input }],
            widgetTitleid: [{ type: i0.Input }],
            shippingaddressCustomClass: [{ type: i0.Input }],
            firstName: [{ type: i0.Input }],
            secondName: [{ type: i0.Input }],
            addressOne: [{ type: i0.Input }],
            addressTwo: [{ type: i0.Input }],
            city: [{ type: i0.Input }],
            state: [{ type: i0.Input }],
            zip: [{ type: i0.Input }],
            country: [{ type: i0.Input }]
        };
        return SukuShippingInfoWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuShippingWidgetComponent = /** @class */ (function () {
        function SukuShippingWidgetComponent() {
            this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
            this.amountPaid = '../assets/img/paid amount.png';
            this.amountUnPaid = '../assets/img/unpaid.png';
            this.unShippedIcon = '../assets/img/un shipped.png';
            this.shippedIcon = '../assets/img/shipped.png';
            this.msgPaymentStatus = 'Paid';
            this.msgShipmentStatus = 'shipped';
            this.customclass = 'customclass imgsize';
            this.customIconclass = 'text-right';
            this.bgColor = '';
            this.imageColSize = ' col-sm-1 flex pt-1 pl-2';
            this.txtcolsize = 'txtcolsize col-sm-4 pl-4 pt-2 mt-1';
            this.txttwocolsize = 'col-sm-2 pt-2 mt-1';
            this.txtthreecolsize = 'col-sm-3 pt-2 mt-1';
            this.titleOne = 'Title One';
            this.titleOneColor = 'black';
            this.titleOneWeight = '600';
            this.titleOneSize = '14';
            this.titleOnecustomclass = '';
            this.contentOne = '$100';
            this.contentOneColor = '#3e3e3e';
            this.contentOneWeight = '500';
            this.contentOneSize = '14';
            this.contentOnecustomclass = '';
            this.contentTwo = 'John Smith';
            this.contentTwoColor = '#3e3e3e';
            this.contentTwoWeight = '500';
            this.contentTwoSize = '14';
            this.contentTwocustomclass = '';
            this.subTitleTwo = 'SOLD BY';
            this.subTitleTwoColor = '#b6b6b6';
            this.subTitleTwoWeight = '500';
            this.subTitleTwoSize = '12';
            this.subTitleTwocustomclass = '';
            this.subTitleThree = 'EXPIRY DATE';
            this.subTitleThreecolor = '#b6b6b6';
            this.subTitleThreeWeight = '500';
            this.subTitleThreeSize = '12';
            this.subTitleThreeClass = '';
            this.contentThree = '28 Nov 2018';
            this.contentThreeColor = '#3e3e3e';
            this.contentThreeWeight = '500';
            this.contentThreeSize = '14';
            this.contentThreecustomclass = '';
        }
        /**
         * @return {?}
         */
        SukuShippingWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuShippingWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-shipping-widget',
                        template: "<div class=\"col p-0\">\n  <div class=\"row card-line-bg p-3 m-3 c-pointer center\" [style.background-color]=\"bgColor\">\n    <div [class]=\"imageColSize\">\n      <img [class]=\"customclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\n    </div>\n      <div *ngIf=\"msgPaymentStatus=='Paid'\" class=\"padlf\">\n        <img [class]=\"customIconclass\" src=\"{{amountPaid}}\" alt=\"amount-paid\" width=\"50px\" height=\"50px\">\n      </div>\n      <div *ngIf=\"msgPaymentStatus=='unPaid'\" class=\"padlf\">\n        <img [class]=\"customIconclass\" src=\"{{amountUnPaid}}\" alt=\"amount-unpaid\" width=\"50px\" height=\"50px\">\n      </div>\n      <div *ngIf=\"msgShipmentStatus=='shipped'\">\n        <img [class]=\"customIconclass\" src=\"{{shippedIcon}}\" alt=\"Shipped\" width=\"50px\" height=\"50px\">\n      </div>\n      <div *ngIf=\"msgShipmentStatus=='unShipped'\">\n        <img [class]=\"customIconclass\" src=\"{{unShippedIcon}}\" alt=\"unshipped\" width=\"50px\" height=\"50px\">\n      </div>\n    <div [class]=\"txtcolsize\">\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\n    </div>\n    <div [class]=\"txttwocolsize\">\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\" [style.font-weight]=\"subTitleTwoWeight\"\n        [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\" [style.font-weight]=\"contentTwoWeight\"\n        [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\n    </div>\n    <div [class]=\"txtthreecolsize\">\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\" [style.font-weight]=\"subTitleThreeWeight\"\n        [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\" [style.font-weight]=\"contentThreeWeight\"\n        [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}@media only screen and (max-width:500px){.center{text-align:center}.imgsize{height:100px;width:100px}.padlf{padding-left:30%}}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        SukuShippingWidgetComponent.ctorParameters = function () { return []; };
        SukuShippingWidgetComponent.propDecorators = {
            image: [{ type: i0.Input }],
            amountPaid: [{ type: i0.Input, args: ['paid-icon',] }],
            amountUnPaid: [{ type: i0.Input, args: ['unpaid-icon',] }],
            unShippedIcon: [{ type: i0.Input, args: ['unshipped-icon',] }],
            shippedIcon: [{ type: i0.Input, args: ['shipped-icon',] }],
            msgPaymentStatus: [{ type: i0.Input, args: ['msg-Payment-Status',] }],
            msgShipmentStatus: [{ type: i0.Input, args: ['msg-Shipment-Status',] }],
            customclass: [{ type: i0.Input, args: ['customclass',] }],
            customIconclass: [{ type: i0.Input, args: ['custom-iconclass',] }],
            bgColor: [{ type: i0.Input }],
            interest: [{ type: i0.Input }],
            imageColSize: [{ type: i0.Input }],
            txtcolsize: [{ type: i0.Input }],
            txttwocolsize: [{ type: i0.Input }],
            txtthreecolsize: [{ type: i0.Input }],
            titleOne: [{ type: i0.Input, args: ['title-one',] }],
            titleOneColor: [{ type: i0.Input, args: ['title-one-color',] }],
            titleOneWeight: [{ type: i0.Input, args: ['title-one-weight',] }],
            titleOneSize: [{ type: i0.Input, args: ['title-one-size',] }],
            titleOnecustomclass: [{ type: i0.Input, args: ['title-one-customclass',] }],
            contentOne: [{ type: i0.Input, args: ['content-one',] }],
            contentOneColor: [{ type: i0.Input, args: ['content-one-color',] }],
            contentOneWeight: [{ type: i0.Input, args: ['content-one-weight',] }],
            contentOneSize: [{ type: i0.Input, args: ['content-one-size',] }],
            contentOnecustomclass: [{ type: i0.Input, args: ['content-one-customclass',] }],
            contentTwo: [{ type: i0.Input, args: ['content-two',] }],
            contentTwoColor: [{ type: i0.Input, args: ['content-two-color',] }],
            contentTwoWeight: [{ type: i0.Input, args: ['content-two-weight',] }],
            contentTwoSize: [{ type: i0.Input, args: ['content-two-size',] }],
            contentTwocustomclass: [{ type: i0.Input, args: ['content-two-customclass',] }],
            subTitleTwo: [{ type: i0.Input, args: ['sub-title-two',] }],
            subTitleTwoColor: [{ type: i0.Input, args: ['sub-title-two-color',] }],
            subTitleTwoWeight: [{ type: i0.Input, args: ['sub-title-two-weight',] }],
            subTitleTwoSize: [{ type: i0.Input, args: ['sub-title-two-size',] }],
            subTitleTwocustomclass: [{ type: i0.Input, args: ['sub-title-two-customclass',] }],
            subTitleThree: [{ type: i0.Input, args: ['sub-title-three',] }],
            subTitleThreecolor: [{ type: i0.Input, args: ['sub-title-three-color',] }],
            subTitleThreeWeight: [{ type: i0.Input, args: ['sub-title-three-weight',] }],
            subTitleThreeSize: [{ type: i0.Input, args: ['sub-title-three-size',] }],
            subTitleThreeClass: [{ type: i0.Input, args: ['sub-title-threeclass',] }],
            contentThree: [{ type: i0.Input, args: ['content-three',] }],
            contentThreeColor: [{ type: i0.Input, args: ['content-three-color',] }],
            contentThreeWeight: [{ type: i0.Input, args: ['content-three-widget',] }],
            contentThreeSize: [{ type: i0.Input, args: ['content-three-size',] }],
            contentThreecustomclass: [{ type: i0.Input, args: ['content-three-customclass',] }]
        };
        return SukuShippingWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuSocialIconsComponent = /** @class */ (function () {
        function SukuSocialIconsComponent() {
            this.socialIcons = [
                {
                    icon: 'fa fa-twitter',
                    path: 'https://twitter.com/login',
                    id: 'twitter'
                },
                {
                    icon: 'fa fa-facebook',
                    path: 'https://www.facebook.com/',
                    id: 'facebook'
                },
                {
                    icon: 'fa fa-linkedin',
                    path: 'https://in.linkedin.com/',
                    id: 'linkedin'
                },
                {
                    icon: 'fa fa-instagram',
                    path: 'https://www.instagram.com/',
                    id: 'instagram'
                }
            ];
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuSocialIconsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} e
         * @return {?}
         */
        SukuSocialIconsComponent.prototype.sendRoutePath = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                this.action.emit(e);
            };
        SukuSocialIconsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-social-icons',
                        template: "<ul id=\"socialIcon\" class=\"icon-effect icon-effect-1a\">\n  <li class=\"mrc-2\" *ngFor=\"let icon of socialIcons;let i=index\">\n    <a class=\"icon\" id=\"icon?.id\" href=\"{{icon?.path}}\" target=\"_blank\"><i [ngClass]=\"icon?.icon\"></i></a>\n  </li>\n</ul>",
                        styles: ["ul{list-style:none;padding:0!important}ul>li{display:inline;padding:0!important;margin-right:10px}.icon{display:inline-block;position:relative;z-index:0;width:39px;height:39px;border-radius:50%;font-size:20px!important;line-height:42px;text-align:center;box-shadow:0 2px 2px 0 rgba(0,0,0,.1);background-color:#fff}.icon:after{position:absolute;width:100%;height:100%;border-radius:50%;content:'';box-sizing:content-box}.icon-effect .icon{transition:.5s}.icon-effect .icon:after{top:-7px;left:-7px;box-shadow:0 0 0 3px #caec1c;color:#fff;transition:.5s;transform:scale(.9);opacity:0;padding:6.9px 7.1px 8px}.icon-effect-1a .icon:hover{background-color:#caec1c;color:#fff;cursor:pointer!important}.icon-effect-1a .icon:hover:after{transform:scale(.9);opacity:1}.mrc-2{margin-right:2rem!important}@media only screen and (min-width:1440px){.mrc-2{margin-right:3.2rem!important}}@media only screen and (min-width:1640px){.mrc-2{margin-right:3.8rem!important}}@media only screen and (min-width:1800px){.mrc-2{margin-right:4.5rem!important}}"]
                    }] }
        ];
        /** @nocollapse */
        SukuSocialIconsComponent.ctorParameters = function () { return []; };
        SukuSocialIconsComponent.propDecorators = {
            socialIcons: [{ type: i0.Input }],
            action: [{ type: i0.Output }]
        };
        return SukuSocialIconsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuStarBadgeComponent = /** @class */ (function () {
        function SukuStarBadgeComponent() {
            this.icon = '../assets/images/star.svg';
            this.alt = 'star-image';
            this.badgeCustomClass = '';
            this.badgeId = 'badgeValue';
        }
        /**
         * @return {?}
         */
        SukuStarBadgeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuStarBadgeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-star-badge',
                        template: "<div class=\"star-badge\">\n  <img [src]=\"icon\" [alt]=\"alt\" height=\"37px\" id=\"star-image\">\n  <h2 class=\"star-badge-content text-center {{badgeCustomClass}}\" [id]=\"badgeId\">\n    <ng-content></ng-content>\n  </h2>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.star-badge{position:relative!important;width:26px}.star-badge-content{position:absolute!important;top:13px;left:6px;width:100%;font-size:var(--suku-font-size-2);color:var(--suku-secondary-color)}h2{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px}"]
                    }] }
        ];
        /** @nocollapse */
        SukuStarBadgeComponent.ctorParameters = function () { return []; };
        SukuStarBadgeComponent.propDecorators = {
            icon: [{ type: i0.Input }],
            alt: [{ type: i0.Input }],
            badgeCustomClass: [{ type: i0.Input, args: ['badge-custom-class',] }],
            badgeId: [{ type: i0.Input, args: ['badge-id',] }]
        };
        return SukuStarBadgeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuSubHeadingComponent = /** @class */ (function () {
        function SukuSubHeadingComponent() {
            this.id = 'heading';
        }
        /**
         * @return {?}
         */
        SukuSubHeadingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuSubHeadingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-sub-heading',
                        template: "<h2 [style.font-size.px]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\n  <ng-content></ng-content>\n</h2>\n",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:var(--suku-text-label-one);word-break:break-word!important;overflow:hidden;white-space:nowrap;text-overflow:ellipsis!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuSubHeadingComponent.ctorParameters = function () { return []; };
        SukuSubHeadingComponent.propDecorators = {
            id: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            weight: [{ type: i0.Input }],
            customClass: [{ type: i0.Input, args: ['custom-class',] }]
        };
        return SukuSubHeadingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuTermsAndConditionsComponent = /** @class */ (function () {
        function SukuTermsAndConditionsComponent(fb) {
            this.fb = fb;
            this.checkBoxColor = 'primary';
            this.title = 'Contract Terms & Conditions';
            this.description = 'I Accept the terms and conditions and authorize this transaction.';
            this.descriptionCustomClass = 'termsAndConditions';
            this.linkCustomClass = 'link';
            this.linkOne = 'https://www.suku.world/terms';
            this.linkTwo = 'https://www.suku.world/privacy';
            this.linkOneTitle = 'Terms';
            this.linkTwoTitle = 'Privacy';
            this.control = 'contractTerms';
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuTermsAndConditionsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.termsandcondition = this.fb.group({
                    'contractTerms': false
                });
            };
        /**
         * @return {?}
         */
        SukuTermsAndConditionsComponent.prototype.action1 = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var data = this.termsandcondition.value.contractTerms;
                this.action.emit(data);
            };
        SukuTermsAndConditionsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-terms-and-conditions',
                        template: "<form [formGroup]=\"termsandcondition\">\n  <div class=\" d-flex flex-column\">\n    <div class=\"pb-2\" [style.color]=\"titleColor\" [style.font-weight]=\"titleWeight\"\n      [style.font-size.rem]=\"titleSize\">\n      <b>{{title}}</b></div>\n    <div class=\"d-flex flex-row\">\n      <mat-checkbox color=\"{{checkBoxColor}}\" type=\"checkbox\" #t (change)=\"action1()\" id=\"contractTerms\"\n        formControlName=\"{{control}}\" name=\"{{control}}\" class=\"mT\">\n      </mat-checkbox>\n      <span class=\"col {{descriptionCustomClass}} pl-2 pr-0\"> {{description}}\n        <a class=\"{{linkCustomClass}} ws\" href=\"{{linkOne}}\" target=\"_blank\">{{linkOneTitle}}</a>\n        <a class=\"{{linkCustomClass}} ws\" href=\"{{linkTwo}}\" target=\"_blank\">{{linkTwoTitle}}</a>\n      </span>\n    </div>\n  </div>\n</form> ",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.link{color:var(--suku-text-info);text-decoration:underline;margin-left:5px;margin-right:5px}.ws{white-space:pre}.termsAndConditions{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-4);font-weight:500;font-style:normal;font-stretch:normal;letter-spacing:.4px;color:var(--suku-text-info);word-break:break-word!important}.mT{margin-top:2px!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuTermsAndConditionsComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder }
            ];
        };
        SukuTermsAndConditionsComponent.propDecorators = {
            checkBoxColor: [{ type: i0.Input, args: ['check-box-color',] }],
            title: [{ type: i0.Input, args: ['title',] }],
            titleColor: [{ type: i0.Input, args: ['title-color',] }],
            titleSize: [{ type: i0.Input, args: ['title-size',] }],
            titleWeight: [{ type: i0.Input, args: ['title-weight',] }],
            description: [{ type: i0.Input, args: ['description',] }],
            descriptionCustomClass: [{ type: i0.Input, args: ['description-custom-class',] }],
            linkCustomClass: [{ type: i0.Input, args: ['link-custom-class',] }],
            linkOne: [{ type: i0.Input, args: ['link-one',] }],
            linkTwo: [{ type: i0.Input, args: ['link-two',] }],
            linkOneTitle: [{ type: i0.Input, args: ['link-name-one',] }],
            linkTwoTitle: [{ type: i0.Input, args: ['link-name-two',] }],
            control: [{ type: i0.Input }],
            action: [{ type: i0.Output }]
        };
        return SukuTermsAndConditionsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuTitleHeaderComponent = /** @class */ (function () {
        function SukuTitleHeaderComponent() {
            this.titleOneColor = 'white';
            this.titleOneCustomClass = '';
        }
        /**
         * @return {?}
         */
        SukuTitleHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuTitleHeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-title-header',
                        template: "<div class=\"header\">\n  <div class=\"col pt-4 pb-4\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{titleOneCustomClass}}\"\n          [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">\n          <ng-content></ng-content>\n        </h1>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.header{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);font-weight:600;font-size:var(--suku-font-size-6);text-transform:uppercase}"]
                    }] }
        ];
        /** @nocollapse */
        SukuTitleHeaderComponent.ctorParameters = function () { return []; };
        SukuTitleHeaderComponent.propDecorators = {
            titleOneId: [{ type: i0.Input, args: ['title-one-id',] }],
            titleOneSize: [{ type: i0.Input, args: ['title-one-size',] }],
            titleOneColor: [{ type: i0.Input, args: ['title-one-color',] }],
            titleOneWeight: [{ type: i0.Input, args: ['title-one-weight',] }],
            titleOneCustomClass: [{ type: i0.Input, args: ['title-one-custom-class',] }]
        };
        return SukuTitleHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuTrackProgressBarComponent = /** @class */ (function () {
        function SukuTrackProgressBarComponent() {
            this.progressStyleOne = 'progressCompleted';
            this.progressStyleTwo = 'progressActive';
            this.progressStyleThree = 'progressUpcoming';
            this.headingOne = 'SELECT A PRODUCT';
            this.headingTwo = 'TRACE COMPONENTS';
            this.headingThree = 'SHOW TRACE TREE';
            this.headingOneId = 'firstHeading';
            this.headingTwoId = 'secondHeading';
            this.headingThreeId = 'thirdHeading';
            this.customHeadingOneClass = '';
            this.customHeadingTwoClass = '';
            this.customHeadingThreeClass = '';
            this.progressBarLabelOne = '1';
            this.progressBarLabelTwo = '2';
            this.progressBarLabelThree = '3';
            this.tickSignCustomClass = 'tickSign';
            this.customHeadingCustomClass = 'col-sm-8 offset-sm-2';
            this.progressCustomClass = 'col-sm-6 offset-sm-3';
            this.customProgressTitle = 'progressTitle';
            this.contentCustomClass = 'text-center';
            this.enablePointer = false;
            this.progressOneAction = new i0.EventEmitter();
            this.progressTwoAction = new i0.EventEmitter();
            this.progressThreeAction = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuTrackProgressBarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuTrackProgressBarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-track-progress-bar',
                        template: "<div class=\"responsive\">\n  <table class=\"{{progressCustomClass}}\">\n    <tr class=\"pt-3\">\n      <td class=\"{{progressStyleOne}} text-center\" (click)=\"progressOneAction.emit()\"\n        [ngClass]=\"{'c-pointer': enablePointer}\">\n        <i *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"fa fa-check {{tickSignCustomClass}}\"></i>\n        <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">{{progressBarLabelOne}}</span>\n      </td>\n      <td>\n        <hr>\n      </td>\n      <td class=\"{{progressStyleTwo}} text-center\" (click)=\"progressTwoAction.emit()\"\n        [ngClass]=\"{'c-pointer': enablePointer}\">\n        <i *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"fa fa-check {{tickSignCustomClass}}\"></i>\n        <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">{{progressBarLabelTwo}}</span>\n      </td>\n      <td>\n        <hr>\n      </td>\n      <td class=\"{{progressStyleThree}} text-center\" (click)=\"progressThreeAction.emit()\"\n        [ngClass]=\"{'c-pointer': enablePointer}\">\n        <i *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"fa fa-check {{tickSignCustomClass}}\"></i>\n        <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">{{progressBarLabelThree}}</span>\n      </td>\n    </tr>\n  </table>\n</div>\n<table class=\"{{customHeadingCustomClass}} {{contentCustomClass}}\">\n  <tr id=\"txt\">\n    <td class=\"{{customHeadingOneClass}} {{customProgressTitle}} pt-3\" (click)=\"progressOneAction.emit()\"\n      [ngClass]=\"{'c-pointer': enablePointer}\" [id]=\"headingOneId\">\n      {{headingOne}}\n    </td>\n    <td class=\"{{customHeadingTwoClass}} {{customProgressTitle}} pt-3\" (click)=\"progressTwoAction.emit()\"\n      [ngClass]=\"{'c-pointer': enablePointer}\" [id]=\"headingTwoId\">\n      {{headingTwo}}\n    </td>\n    <td class=\"{{customHeadingThreeClass}} {{customProgressTitle}} pt-3\" (click)=\"progressThreeAction.emit()\"\n      [ngClass]=\"{'c-pointer': enablePointer}\" [id]=\"headingThreeId\">\n      {{headingThree}}\n    </td>\n  </tr>\n</table>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.progressActive{width:50px!important;height:50px;color:var(--suku-text-label-two);background:var(--suku-progressbar-active-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressUpcoming{width:50px!important;height:50px!important;color:#a8a6a6;background:var(--suku-progressbar-upcoming-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressCompleted{width:50px!important;height:50px!important;color:var(--suku-text-label-two);background-color:var(--suku-progressbar-completed-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressTitle{font-family:var(--suku-secondary-font);font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--suku-text-label-one)}.tickSign{color:var(--suku-secondary-color)}tr#txt td{width:20%}@media only screen and (max-width:425px){.responsive{margin-left:30px;margin-right:30px}}.c-pointer{cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        SukuTrackProgressBarComponent.ctorParameters = function () { return []; };
        SukuTrackProgressBarComponent.propDecorators = {
            progressStyleOne: [{ type: i0.Input, args: ['progress-style-one',] }],
            progressStyleTwo: [{ type: i0.Input, args: ['progress-style-two',] }],
            progressStyleThree: [{ type: i0.Input, args: ['progress-style-three',] }],
            headingOne: [{ type: i0.Input, args: ['heading-one',] }],
            headingTwo: [{ type: i0.Input, args: ['heading-two',] }],
            headingThree: [{ type: i0.Input, args: ['heading-three',] }],
            headingOneId: [{ type: i0.Input, args: ['heading-one-id',] }],
            headingTwoId: [{ type: i0.Input, args: ['heading-two-id',] }],
            headingThreeId: [{ type: i0.Input, args: ['heading-three-id',] }],
            customHeadingOneClass: [{ type: i0.Input, args: ['custom-heading-one-class',] }],
            customHeadingTwoClass: [{ type: i0.Input, args: ['custom-heading-two-class',] }],
            customHeadingThreeClass: [{ type: i0.Input, args: ['custom-heading-three-class',] }],
            progressBarLabelOne: [{ type: i0.Input, args: ['progress-bar-label-one',] }],
            progressBarLabelTwo: [{ type: i0.Input, args: ['progress-bar-label-two',] }],
            progressBarLabelThree: [{ type: i0.Input, args: ['progress-bar-label-three',] }],
            tickSignCustomClass: [{ type: i0.Input, args: ['tick-sign-custom-class',] }],
            customHeadingCustomClass: [{ type: i0.Input, args: ['custom-heading-custom-class',] }],
            progressCustomClass: [{ type: i0.Input, args: ['progress-custom-class',] }],
            customProgressTitle: [{ type: i0.Input, args: ['custom-progress-title',] }],
            contentCustomClass: [{ type: i0.Input, args: ['content-custom-class',] }],
            enablePointer: [{ type: i0.Input, args: ['enable-pointer',] }],
            progressOneAction: [{ type: i0.Output }],
            progressTwoAction: [{ type: i0.Output }],
            progressThreeAction: [{ type: i0.Output }]
        };
        return SukuTrackProgressBarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuGalleryComponent = /** @class */ (function () {
        function SukuGalleryComponent() {
            this.gallery = [];
            this.size = 'default';
            this.galleryId = 'demo';
            this.prevBtnVisible = true;
            this.nextBtnVisible = true;
            this.autoplay = false;
        }
        /**
         * @return {?}
         */
        SukuGalleryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} i
         * @param {?} position
         * @return {?}
         */
        SukuGalleryComponent.prototype.active = /**
         * @param {?} i
         * @param {?} position
         * @return {?}
         */
            function (i, position) {
                var _this = this;
                console.log(i);
                this.videoElement.nativeElement.pause();
                this.autoplay = false;
                this.gallery.forEach(( /**
                 * @param {?} element
                 * @param {?} index
                 * @return {?}
                 */function (element, index) {
                    if (position == 'prev') {
                        if (i > 0) {
                            if (index == i - 1) {
                                if (i != 0) {
                                    element.checked = true;
                                }
                            }
                            else {
                                if (i != 0) {
                                    element.checked = false;
                                }
                            }
                            console.log('ele', i, position, element);
                        }
                    }
                    if (position == 'next') {
                        if (index == i + 1) {
                            if (i < _this.gallery.length - 1) {
                                element.checked = true;
                            }
                        }
                        else {
                            if (i < _this.gallery.length - 1) {
                                element.checked = false;
                            }
                        }
                        console.log('ele', i, position, element);
                    }
                }));
            };
        /**
         * @param {?} e
         * @return {?}
         */
        SukuGalleryComponent.prototype.preview = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                console.log('link', e);
                /** @type {?} */
                var modal = document.getElementById('myGalleryModal');
                /** @type {?} */
                var modalImg = ( /** @type {?} */(document.getElementById('img01')));
                /** @type {?} */
                var modalVid = ( /** @type {?} */(document.getElementById('vid')));
                modal.style.display = 'block';
                if (e.type == 'image') {
                    modalImg.src = e.link;
                    modalImg.style.display = 'block';
                    modalVid.style.display = 'none';
                }
                else {
                    modalVid.style.display = 'block';
                    modalImg.style.display = 'none';
                    modalVid.src = e.link;
                }
            };
        /**
         * @return {?}
         */
        SukuGalleryComponent.prototype.closeModal = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var modal = document.getElementById('myGalleryModal');
                modal.style.display = 'none';
            };
        /**
         * @return {?}
         */
        SukuGalleryComponent.prototype.start = /**
         * @return {?}
         */
            function () {
            };
        SukuGalleryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-gallery',
                        template: "<!-- <div class=\"imgcontainer\">\n  <div *ngFor=\"let item of gallery;let i= index\">\n    <input type=\"radio\" id=\"i{{1}}\" name=\"images\" [checked]='item?.checked' />\n    <div class=\"slide_img text-center\" [ngClass]=\"{'checked': item?.checked }\" id=\"item{{i}}\">\n      <img class=\"pic\" (click)=\"preview(item)\" *ngIf=\"item?.type == 'image'\" src=\"{{item?.link}}\">\n      <video #video class=\"vid\" (click)=\"preview(item)\" *ngIf=\"item?.type == 'video'\" width=\"85%\" height=\"100%\"\n        src=\"{{item?.link}}\" controls>\n        Your browser does not support the video tag.\n      </video>\n      <label class=\"prev\" *ngIf=\"prevBtnVisible\" (click)=\"active(i,'prev')\" for=\"i{{i}}\"><span class=\"icon-left\">\n          <i class=\"fa fa-chevron-left icon-control-l\"></i>\n        </span></label>\n      <label class=\"next\" *ngIf=\"nextBtnVisible\" (click)=\"active(i,'next')\" for=\"i{{i}}\"><span class=\"icon-right\">\n          <i class=\"fa fa-chevron-right icon-control-r\"></i>\n        </span></label>\n    </div>\n  </div>\n</div> -->\n<!-- pop-view Modal -->\n<div id=\"myGalleryModal\" class=\"modal\">\n  <span class=\"close\" (click)=\"closeModal()\">&times;</span>\n  <img class=\"modal-content\" id=\"img01\">\n  <video #video width=\"85%\" height=\"100%\" id=\"vid\" class=\"text-center m-auto\" controls>\n    Your browser does not support the video tag.\n  </video>\n</div>\n\n\n<div [id]=\"galleryId\" class=\"carousel slide p-1\" data-ride=\"carousel\" data-interval=\"false\" data-wrap=\"false\">\n  <!-- The slideshow -->\n  <div class=\"carousel-inner\" [ngClass]=\"{'default-container': size == 'default'}\" [style.height.rem]=\"carouselHeight\"\n    [style.width.rem]=\"carouselWidth\">\n    <div class=\"carousel-item\" [ngClass]=\"{'active': item?.checked }\" *ngFor=\"let item of gallery;let i= index\">\n      <div class=\"text-center\" [ngClass]=\"{'slide_img' :item?.type == 'image', 'slide_vid' :item?.type == 'video' }\"\n        id=\"item{{i}}\">\n        <img class=\"pic\" [style.height.rem]=\"imgHeight\" [style.width.rem]=\"imgWidth\"\n          [ngClass]=\"{'default-pic': size == 'default'}\" (click)=\"preview(item)\" *ngIf=\"item?.type == 'image'\"\n          src=\"{{item?.link}}\">\n        <video #video class=\"vid\" [style.height.rem]=\"vidHeight\" [style.width.rem]=\"vidWidth\"\n          [ngClass]=\"{'default-vid': size == 'default'}\" (click)=\"preview(item)\" *ngIf=\"item?.type == 'video'\"\n          width=\"95%\" height=\"100%\" src=\"{{item?.link}}\" controls>\n          Your browser does not support the video tag.\n        </video>\n      </div>\n    </div>\n    <!-- Left and right controls -->\n    <a class=\"carousel-control-prev\" href=\"#{{galleryId}}\" data-slide=\"prev\" *ngIf=\"(gallery?.length > 1)\">\n      <span class=\"carousel-control-prev-icon {{controlPrevIconCustomClass}}\">\n      </span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#{{galleryId}}\" data-slide=\"next\" *ngIf=\"(gallery?.length > 1)\">\n      <span class=\"carousel-control-next-icon {{controlNextIconCustomClass}}\">\n      </span>\n    </a>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.pic:hover{cursor:pointer}.vid{padding:4% 4% 2%}.slide_vid{margin:4% auto;position:relative;width:87%}#myImg{border-radius:5px;cursor:pointer;transition:.3s}#myImg:hover{opacity:.7}.modal{display:none;position:fixed;z-index:500;padding-top:100px;left:0;top:0;width:100%;overflow:auto;background-color:rgba(0,0,0,.9);height:100vh;justify-content:center;align-items:center}.modal-content{margin:auto;display:block;align-items:center;width:80%;max-width:65vh}#caption{display:block;width:80%;max-width:700px;text-align:center;color:#ccc;height:150px}#caption,.modal-content{-webkit-animation-name:zoom;animation-name:zoom;-webkit-animation-duration:.6s;animation-duration:.6s}@-webkit-keyframes zoom{from{transform:scale(0)}to{transform:scale(1)}}@keyframes zoom{from{transform:scale(0)}to{transform:scale(1)}}.close{position:absolute;top:15px;right:35px;color:#f1f1f1;font-size:40px;font-weight:700;transition:.3s}.close:focus,.close:hover{color:#a5a0a0;text-decoration:none;cursor:pointer}@media only screen and (max-width:700px){.modal-content{width:100%}.carousel{display:flex;justify-content:center}}.carousel-inner{position:relative;width:100%;overflow:hidden;height:14.5rem;background:#fff;box-shadow:0 2px 3px -2px #00000f4f;border:1px solid #f2f2f2;border-radius:8px 25px}.carousel-control-next-icon,.carousel-control-prev-icon{background-image:none!important;width:auto!important;height:inherit!important}.carousel-control-prev-icon{margin-right:.5rem}.carousel-control-next-icon{margin-left:.1rem}.carousel-control-next-icon:after{text-align:center;content:'\\f054';font-family:FontAwesome;color:var(--suku-primary-color);background-size:50% 50%;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;height:30px;width:30px}.carousel-control-prev-icon:after{content:'\\f053';font-family:FontAwesome;color:var(--suku-primary-color);background-size:50% 50%;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;height:30px;width:30px}.default-container{height:190px;width:300px}.default-pic{height:162px!important}.default-vid{height:155px!important}.slide_img{margin:5% auto;position:relative;width:70%}.pic{background-size:contain;border-radius:5px;margin:auto;width:100%;height:12rem;z-index:99}"]
                    }] }
        ];
        /** @nocollapse */
        SukuGalleryComponent.ctorParameters = function () { return []; };
        SukuGalleryComponent.propDecorators = {
            gallery: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            galleryId: [{ type: i0.Input, args: ['gallery-id',] }],
            carouselHeight: [{ type: i0.Input, args: ['carousel-height',] }],
            carouselWidth: [{ type: i0.Input, args: ['carousel-width',] }],
            imgHeight: [{ type: i0.Input, args: ['img-height',] }],
            imgWidth: [{ type: i0.Input, args: ['img-width',] }],
            vidHeight: [{ type: i0.Input, args: ['vid-height',] }],
            vidWidth: [{ type: i0.Input, args: ['vid-width',] }],
            controlNextIconCustomClass: [{ type: i0.Input, args: ['control-next-icon-customclass',] }],
            controlPrevIconCustomClass: [{ type: i0.Input, args: ['control-prev-icon-customclass',] }],
            videoElement: [{ type: i0.ViewChild, args: ['video',] }]
        };
        return SukuGalleryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuTreeComponent = /** @class */ (function () {
        function SukuTreeComponent() {
            this.action = new i0.EventEmitter();
            this.boxWidth = 183;
            this.boxHeight = 55;
            this.margin = {
                top: 50,
                right: 5,
                bottom: 50,
                left: 5
            };
            this.width = 1060 - this.margin.left - this.margin.right;
            this.height = 510 - this.margin.top - this.margin.bottom;
            this.childCount = 0;
            this.max = 0;
            this.maxHeight = 0;
        }
        /**
         * @return {?}
         */
        SukuTreeComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (this.treeDataFromApi) {
                    if (document.getElementById('tree')) {
                        /** @type {?} */
                        var list = document.getElementById('tree');
                        while (list.hasChildNodes()) {
                            list.removeChild(list.firstChild);
                        }
                        this.width = 0;
                        this.height = 0;
                        this.max = 0;
                        this.maxHeight = 0;
                    }
                    this.constructTree();
                    console.log('tree called');
                }
            };
        /**
         * @return {?}
         */
        SukuTreeComponent.prototype.constructTree = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var treeData = this.treeDataFromApi;
                this.root = treeData[0];
                this.tree = d3.layout.tree().separation(( /**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */function (a, b) { return (a.parent === b.parent ? 5 : 5.25); })).children(( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                    return d.relations;
                }));
                /** @type {?} */
                var nodes = this.tree.nodes(this.root).reverse();
                if (this.relation == 1) {
                    nodes.forEach(( /**
                     * @param {?} d
                     * @return {?}
                     */function (d) {
                        if (d.depth > _this.max) {
                            _this.max = d.depth;
                            console.log("depth", _this.max);
                        }
                        if (d.children) {
                            if (d.children.length > _this.maxHeight) {
                                _this.maxHeight = d.children.length;
                            }
                        }
                    }));
                    this.width = (this.max + 1) * 320 - this.margin.left - this.margin.right;
                    this.height = (this.maxHeight + 1) * 155 - this.margin.top - this.margin.bottom;
                }
                else {
                    nodes.forEach(( /**
                     * @param {?} d
                     * @return {?}
                     */function (d) {
                        if (d.depth > _this.max) {
                            _this.max = d.depth;
                        }
                        if (d.children) {
                            if (d.children.length > _this.maxHeight) {
                                _this.maxHeight = d.children.length;
                            }
                        }
                    }));
                    this.width = (this.max + 1) * 270 - this.margin.left - this.margin.right;
                    this.height = (this.maxHeight + 1) * 155 - this.margin.top - this.margin.bottom;
                }
                console.log('width', this.width, this.maxHeight);
                this.i = 0;
                this.j = 0;
                this.testd = 0;
                if (treeData) {
                    this.tree = d3.layout
                        .tree()
                        .separation(( /**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */function (a, b) { return (a.parent === b.parent ? 5 : 5.25); }))
                        .children(( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                        return d.relations;
                    }))
                        .size([this.height, this.width]);
                    this.svg = d3.select('#tree')
                        .insert('p')
                        .attr('id', 'treedata')
                        .attr('width', this.width + this.margin.right + this.margin.left)
                        .attr('height', this.height + this.margin.top + this.margin.bottom)
                        .append('svg')
                        .attr('width', this.width + this.margin.right + this.margin.left)
                        .attr('height', this.height + this.margin.top + this.margin.bottom)
                        .append('g')
                        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
                    this.root = treeData[0];
                    this.drawTree();
                }
            };
        /**
         * @return {?}
         */
        SukuTreeComponent.prototype.drawTree = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var nodes = this.tree.nodes(this.root).reverse();
                /** @type {?} */
                var links = this.tree.links(nodes);
                if (this.relation == 1) {
                    nodes.forEach(( /**
                     * @param {?} d
                     * @return {?}
                     */function (d) {
                        if (_this.max == 0) {
                            d.y = _this.width - (_this.max + 1) * 220 - d.depth * -270; // reverse tree
                        }
                        else {
                            d.y = _this.width - (_this.max + 1) * 250 - d.depth * -270; // reverse tree
                        }
                    }));
                }
                else {
                    nodes.forEach(( /**
                     * @param {?} d
                     * @return {?}
                     */function (d) {
                        d.y = _this.width - 109 - d.depth * 270; // reverse tree
                    }));
                }
                /** @type {?} */
                var node = this.svg.selectAll('g.node').data(nodes, ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                    return d.id || (d.id = ++_this.i); // assign id to nodes
                }));
                /** @type {?} */
                var nodeEnter = node.enter().append('g').attr('class', 'node').attr('transform', ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                    return 'translate(' + d.y + ',' + d.x + ')'; // append g with class attr
                }));
                // append line into svg
                node
                    .append('line')
                    .style('stroke', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    console.log('d', d);
                    if (d.depth === 0) {
                        return '#6f3bda';
                    }
                    else {
                        if (_this.relation == 1) {
                            return '#3fdbef';
                        }
                        else {
                            return '#b8ce2b';
                        }
                    }
                }))
                    .attr('x1', -(this.boxWidth / 2))
                    .attr('y1', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    if (d.assetName.length > 50) {
                        return -(_this.boxHeight / 2);
                    }
                    if (d.assetName.length > 23) {
                        return -(_this.boxHeight / 2);
                    }
                    if (d.assetName.length > 0) {
                        return -(_this.boxHeight / 2);
                    }
                }))
                    .attr('x2', -(this.boxWidth / 2))
                    .attr('y2', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    if (d.assetName.length > 50) {
                        return _this.boxHeight / 2 + 30;
                    }
                    if (d.assetName.length > 40) {
                        return _this.boxHeight / 2 + 30;
                    }
                    if (d.assetName.length > 23) {
                        return _this.boxHeight / 2 + 10;
                    }
                    if (d.assetName.length > 0) {
                        return _this.boxHeight / 2;
                    }
                }))
                    .attr('stroke-width', '10');
                // append rect into svg
                node
                    .append('rect')
                    .attr({
                    x: -(this.boxWidth / 2),
                    y: -(this.boxHeight / 2),
                    width: this.boxWidth,
                    height: ( /**
                     * @param {?} d
                     * @return {?}
                     */function (d) {
                        if (d.assetName.length > 40) {
                            return _this.boxHeight + 30;
                        }
                        else if (d.assetName.length > 23) {
                            return _this.boxHeight + 10;
                        }
                        else {
                            return _this.boxHeight;
                        }
                    })
                })
                    .attr('fill', 'white')
                    .attr('stroke-width', '.5')
                    .attr('stroke', '#c2c1c1ab');
                node.insert('g', 'g').attr('class', 'dot');
                // append dots to rect
                this.svg
                    .selectAll('g.dot')
                    .insert('circle')
                    .attr('r', 2.2)
                    .attr('cx', 65)
                    .attr('cy', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    if (d.assetName.length > 50) {
                        return 50;
                    }
                    if (d.assetName.length > 40) {
                        return 48;
                    }
                    else if (d.assetName.length > 23) {
                        return 28;
                    }
                    else {
                        return 17;
                    }
                }))
                    .attr('fill', '#b6b6b6');
                this.svg
                    .selectAll('g.dot')
                    .insert('circle')
                    .attr('r', 2.2)
                    .attr('cx', 72)
                    .attr('cy', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    if (d.assetName.length > 50) {
                        return 50;
                    }
                    if (d.assetName.length > 40) {
                        return 48;
                    }
                    else if (d.assetName.length > 23) {
                        return 28;
                    }
                    else {
                        return 17;
                    }
                }))
                    .attr('fill', '#b6b6b6');
                this.svg
                    .selectAll('g.dot')
                    .insert('circle')
                    .attr('r', 2.2)
                    .attr('cx', 79)
                    .attr('cy', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    if (d.assetName.length > 50) {
                        return 50;
                    }
                    if (d.assetName.length > 40) {
                        return 48;
                    }
                    else if (d.assetName.length > 23) {
                        return 28;
                    }
                    else {
                        return 17;
                    }
                }))
                    .attr('fill', '#b6b6b6');
                this.svg
                    .selectAll('g.dot')
                    .insert('rect')
                    .attr('class', 'dot')
                    .attr('x', '60')
                    .attr('y', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    if (d.assetName.length > 50) {
                        return 45;
                    }
                    if (d.assetName.length > 40) {
                        return 30;
                    }
                    if (d.assetName.length > 23) {
                        return 23;
                    }
                    if (d.assetName.length > 0) {
                        return 15;
                    }
                }))
                    .attr('id', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    return 'asset' + ++_this.j;
                }))
                    .attr('height', '10')
                    .attr('width', '25')
                    .attr('fill', 'transparent')
                    .on('click', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    console.log(d);
                    if (d.uid) {
                        _this.dataUID = d.uid;
                        _this.action.emit(d.uid);
                    }
                }));
                this.svgNOde = node
                    .append('text')
                    .attr('x', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    return -(_this.boxWidth / 10) - 65;
                }))
                    .attr('y', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    return -(_this.boxWidth / 35);
                }))
                    .style('text-anchor', 'middle')
                    .style('fill', '#aaaaaa')
                    .attr('font-family', 'sans-serif')
                    .text(( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    return d.assetName;
                }))
                    .call(( /**
             * @param {?} text
             * @param {?} width
             * @return {?}
             */function wrap(text, width) {
                    text.each(( /**
                     * @return {?}
                     */function () {
                        console.log('word tezt infor each', d3.select(this));
                        // tslint:disable-next-line:prefer-const
                        // tslint:disable-next-line:no-shadowed-variable
                        /** @type {?} */
                        var text = d3.select(this);
                        /** @type {?} */
                        var words = text.text().split(/\s+/).reverse();
                        /** @type {?} */
                        var word;
                        /** @type {?} */
                        var line = [];
                        /** @type {?} */
                        var lineNumber = 0;
                        /** @type {?} */
                        var lineHeight = 1.3;
                        // ems
                        /** @type {?} */
                        var x = text.attr('x');
                        /** @type {?} */
                        var y = text.attr('y');
                        /** @type {?} */
                        var dy = 0;
                        // parseFloat(text.attr("dy")),
                        /** @type {?} */
                        var tspan = text.text(null).append('tspan').attr('x', x).attr('y', y).attr('dy', dy + 'em').style('text-anchor', 'start');
                        while ((word = words.pop())) {
                            console.log('word', word);
                            line.push(word);
                            tspan.text(line.join(' '));
                            if (tspan.node().getComputedTextLength() > 170) {
                                line.pop();
                                tspan.text(line.join(' '));
                                line = [word];
                                tspan = text
                                    .append('tspan')
                                    .attr('x', x)
                                    .attr('y', y)
                                    .attr('dy', ++lineNumber * lineHeight + dy + 'em')
                                    .style('text-anchor', 'start')
                                    .text(word);
                            }
                        }
                    }));
                }));
                /** @type {?} */
                var link = this.svg.selectAll('path.link').data(links, ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                    _this.data = d;
                    return d.target.id;
                }));
                // append link into svg
                link
                    .enter()
                    .insert('path', 'g')
                    .attr('class', 'link')
                    .attr('fill', 'none')
                    .attr('stroke', '#c2c1c1')
                    .attr('stroke-width', '2')
                    .attr('shape-rendering', 'geometricPrecision ')
                    .attr('d', ( /**
             * @param {?} d
             * @return {?}
             */function (d) {
                    /** @type {?} */
                    var sourceX = d.source.x;
                    /** @type {?} */
                    var sourceY = d.source.y + _this.boxWidth / 2;
                    /** @type {?} */
                    var targetX = d.target.x;
                    /** @type {?} */
                    var targetY = d.target.y - _this.boxWidth / 2;
                    return ('M' +
                        sourceY +
                        ',' +
                        sourceX +
                        'H' +
                        (sourceY + (targetY - sourceY) / 2) +
                        'V' +
                        targetX +
                        'H' +
                        targetY);
                }));
            };
        /**
         * @param {?} val
         * @return {?}
         */
        SukuTreeComponent.prototype.actionFun = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this.action.emit(val);
            };
        SukuTreeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-tree',
                        template: "<div id=\"tree\"></div>\n<!-- [ngClass]=\"{'treeRtl': relation == 0, 'treeltr': relation == 1}\" -->",
                        styles: ["/deep/.node text{font-size:16px;font-family:'Encode Sans',sans-serif;fill:#aaa}/deep/#tree{width:100%;overflow-x:scroll!important;direction:rtl!important}/deep/svg{overflow-x:scroll!important}/deep/rect.dot{cursor:pointer!important}"]
                    }] }
        ];
        SukuTreeComponent.propDecorators = {
            treeDataFromApi: [{ type: i0.Input, args: ['tree-data',] }],
            relation: [{ type: i0.Input }],
            action: [{ type: i0.Output }]
        };
        return SukuTreeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuCheckboxComponent = /** @class */ (function () {
        function SukuCheckboxComponent() {
            this.checkboxId = 'suku-checkbox';
            this.customClass = '';
            this.color = 'primary';
            this.labelPosition = 'after';
            this.checkBoxControl = new forms.FormControl();
            this.action = new i0.EventEmitter();
        }
        Object.defineProperty(SukuCheckboxComponent.prototype, "checked", {
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val) {
                    this.checkBoxControl.patchValue(val);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SukuCheckboxComponent.prototype, "disabled", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                console.log(value);
                if (value) {
                    this.checkBoxControl.disable();
                }
                else {
                    this.checkBoxControl.enable();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuCheckboxComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._subscription = this.checkBoxControl.valueChanges.subscribe(( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) {
                    _this.action.emit(value);
                    console.log('checkBoxControl', value);
                }));
            };
        /**
         * @return {?}
         */
        SukuCheckboxComponent.prototype.ngDestroy = /**
         * @return {?}
         */
            function () {
                this._subscription.unsubscribe();
            };
        SukuCheckboxComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-checkbox',
                        template: "<mat-checkbox [color]=\"color\" [id]=\"checkboxId\" [formControl]=\"checkBoxControl\" [(indeterminate)]=\"indeterminate\"\n  [labelPosition]=\"labelPosition\"><span class=\"suku-checkbox {{customClass}}\">\n    <ng-content></ng-content>\n  </span>\n</mat-checkbox>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-checkbox{font-family:var(--suku-primary-font);font-weight:500;font-size:var(--suku-font-size-3);color:var(--suku-text-label-one);letter-spacing:0;word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        SukuCheckboxComponent.ctorParameters = function () { return []; };
        SukuCheckboxComponent.propDecorators = {
            checkboxId: [{ type: i0.Input, args: ['checkbox-id',] }],
            customClass: [{ type: i0.Input, args: ['custom-class',] }],
            color: [{ type: i0.Input }],
            control: [{ type: i0.Input }],
            checked: [{ type: i0.Input }],
            indeterminate: [{ type: i0.Input }],
            labelPosition: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            action: [{ type: i0.Output }]
        };
        return SukuCheckboxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Error when invalid control is dirty, touched, or submitted.
     */
    var /**
     * Error when invalid control is dirty, touched, or submitted.
     */ MyErrorStateMatcher = /** @class */ (function () {
        function MyErrorStateMatcher() {
        }
        /**
         * @param {?} control
         * @param {?} form
         * @return {?}
         */
        MyErrorStateMatcher.prototype.isErrorState = /**
         * @param {?} control
         * @param {?} form
         * @return {?}
         */
            function (control, form) {
                return !!(control && control.invalid && (control.dirty || control.touched));
            };
        return MyErrorStateMatcher;
    }());
    var SukuUserInputComponent = /** @class */ (function () {
        function SukuUserInputComponent() {
            this.usernameControl = new forms.FormControl('');
            this.color = 'primary';
            this.placeholder = 'Username';
            this.enableUserIcon = true;
            this.errorMessageOne = 'cannot be blank.';
            this.errorMessageTwo = '';
            this.errorMessageThree = '';
            this.errorMessageFour = '';
            this.action = new i0.EventEmitter();
            this.email = new forms.FormControl('', [forms.Validators.required, forms.Validators.email]);
            this.matcher = new MyErrorStateMatcher();
        }
        Object.defineProperty(SukuUserInputComponent.prototype, "enableRequiredValidator", {
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                console.log('enableRequiredValidator', val);
                if (val) {
                    this.usernameControl.setValidators(forms.Validators.required);
                    this.usernameControl.updateValueAndValidity();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SukuUserInputComponent.prototype, "enablePatternValidators", {
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val) {
                    this.usernameControl.setValidators(forms.Validators.pattern(this.pattern));
                    this.usernameControl.updateValueAndValidity();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SukuUserInputComponent.prototype, "enableMaxLenValidators", {
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                console.log('enableMaxValidator', val);
                if (val) {
                    this.usernameControl.setValidators(forms.Validators.maxLength(val));
                    this.usernameControl.updateValueAndValidity();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SukuUserInputComponent.prototype, "enableMinLenValidators", {
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                console.log('enableMinValidator', val);
                if (val) {
                    this.usernameControl.setValidators(forms.Validators.minLength(val));
                    this.usernameControl.updateValueAndValidity();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuUserInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._subscription = this.usernameControl.valueChanges.subscribe(( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) {
                    if (value) {
                        _this.action.emit(value);
                    }
                    console.log('usernameControl', _this.usernameControl);
                }));
            };
        /**
         * @return {?}
         */
        SukuUserInputComponent.prototype.getErrorMessage = /**
         * @return {?}
         */
            function () {
                return this.usernameControl.hasError('required') ? 'You must enter a value' :
                    this.usernameControl.hasError('minlength') ? 'username should be more than 2 letters' :
                        '';
            };
        /**
         * @return {?}
         */
        SukuUserInputComponent.prototype.ngDestroy = /**
         * @return {?}
         */
            function () {
                this._subscription.unsubscribe();
            };
        SukuUserInputComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-user-input',
                        template: "<mat-form-field [class]=\"customClass\" [color]=\"color\">\n  <span matPrefix class=\"mr-2\" *ngIf=\"enableUserIcon\">\n    <mat-icon class=\"material-icons\">account_circle</mat-icon>\n  </span>\n  <input matInput [placeholder]=\"placeholder\" [formControl]=\"usernameControl\" name=\"usernameControl\">\n  <mat-error *ngIf=\"usernameControl.invalid\">{{getErrorMessage()}}</mat-error>\n  <mat-error *ngIf=\"usernameControl.hasError('required')\">\n    {{errorMessageOne}}\n  </mat-error>\n  <mat-error *ngIf=\"usernameControl.hasError('pattern') && !usernameControl.hasError('required')\">\n    {{errorMessageTwo}}\n  </mat-error>\n  <mat-error *ngIf=\"usernameControl.hasError('maxLength')\">\n    {{errorMessageThree}}\n  </mat-error>\n  <mat-error *ngIf=\"usernameControl.hasError('minlength')\">\n    {{errorMessageFour}}\n  </mat-error>\n</mat-form-field>",
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.input-full-width{width:100%}::ng-deep .mat-input-element{padding:1%!important}.material-icons{font-size:var(--suku-font-size-6)}.mat-form-field.ng-dirty.ng-invalid .mat-form-field-underline{background-color:red}.mat-form-field.ng-dirty.ng-invalid .mat-form-field-label{color:red}"]
                    }] }
        ];
        /** @nocollapse */
        SukuUserInputComponent.ctorParameters = function () { return []; };
        SukuUserInputComponent.propDecorators = {
            pattern: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            customClass: [{ type: i0.Input, args: ['custom-class',] }],
            enableUserIcon: [{ type: i0.Input, args: ['enable-user-icon',] }],
            errorMessageOne: [{ type: i0.Input, args: ['error-message-one',] }],
            errorMessageTwo: [{ type: i0.Input, args: ['error-message-two',] }],
            errorMessageThree: [{ type: i0.Input, args: ['error-message-three',] }],
            errorMessageFour: [{ type: i0.Input, args: ['error-message-four',] }],
            enableRequiredValidator: [{ type: i0.Input, args: ['enable-required-validator',] }],
            enablePatternValidators: [{ type: i0.Input, args: ['enable-pattern-validator',] }],
            enableMaxLenValidators: [{ type: i0.Input, args: ['enable-max-len-validator',] }],
            enableMinLenValidators: [{ type: i0.Input, args: ['enable-min-len-validator',] }],
            action: [{ type: i0.Output }]
        };
        return SukuUserInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuWysiwygEditorComponent = /** @class */ (function () {
        function SukuWysiwygEditorComponent() {
            this.control = 'productTraceability';
            this.placeholder = 'Enter text';
            this.moduleConfig = {
                toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    [{ header: 1 }, { header: 2 }],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    [{ script: 'sub' }, { script: 'super' }],
                    [{ indent: '-1' }, { indent: '+1' }],
                    [{ direction: 'rtl' }],
                    // [ { size: [ 'small', false, 'large', 'huge' ] } ], // custom dropdown
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    [{ color: [] }, { background: [] }],
                    [{ font: [] }],
                    [{ align: [] }],
                    ['clean'] // remove formatting button
                ]
            };
        }
        /**
         * @return {?}
         */
        SukuWysiwygEditorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} data
         * @return {?}
         */
        SukuWysiwygEditorComponent.prototype.onContentChanged = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                console.log(data.html);
            };
        SukuWysiwygEditorComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-wysiwyg-editor',
                        template: "<span [formGroup]=\"form\">\n  <quill-editor [modules]=\"moduleConfig\" \n  placeholder=\"{{placeholder}}\" formControlName=\"{{control}}\" [(ngModel)]=\"htmlQuillContent\" (onContentChanged)=\"onContentChanged($event)\">\n  </quill-editor>\n</span>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SukuWysiwygEditorComponent.ctorParameters = function () { return []; };
        SukuWysiwygEditorComponent.propDecorators = {
            form: [{ type: i0.Input }],
            control: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }]
        };
        return SukuWysiwygEditorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuProfileImageIconComponent = /** @class */ (function () {
        function SukuProfileImageIconComponent() {
            this.alternativeText = 'profileImage';
            this.height = '50';
            this.width = '50';
            this.image = '../../assets/images/browser.png';
            this.customClass = 'img-circle';
        }
        /**
         * @return {?}
         */
        SukuProfileImageIconComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuProfileImageIconComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-profile-image-icon',
                        template: "<img alt=\"{{alternativeText}}\" class=\"{{customClass}}\" height=\"{{height}}\" width=\"{{width}}\" src=\"{{image}}\">\n<!-- <img src=\"{{image}}\" class=\" img-circle\" alt=\"profile\" width=\"150\" height=\"150\"> -->",
                        styles: [".img-circle{display:inline-block;position:relative;z-index:0;line-height:42px;text-align:center;box-shadow:0 2px 2px 0 rgba(0,0,0,.1);background-color:#fff}"]
                    }] }
        ];
        /** @nocollapse */
        SukuProfileImageIconComponent.ctorParameters = function () { return []; };
        SukuProfileImageIconComponent.propDecorators = {
            alternativeText: [{ type: i0.Input }],
            height: [{ type: i0.Input }],
            width: [{ type: i0.Input }],
            image: [{ type: i0.Input }],
            customClass: [{ type: i0.Input }]
        };
        return SukuProfileImageIconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuGalleryUploadComponent = /** @class */ (function () {
        function SukuGalleryUploadComponent() {
            this.gallery = [];
            this.size = 'default';
            this.galleryId = 'demo';
            this.loader = false;
            this.deleteImage = new i0.EventEmitter();
            this.upload = new i0.EventEmitter();
            this.clear = new i0.EventEmitter();
            this.prevBtnVisible = true;
            this.nextBtnVisible = true;
            this.autoplay = false;
        }
        /**
         * @return {?}
         */
        SukuGalleryUploadComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} i
         * @param {?} position
         * @return {?}
         */
        SukuGalleryUploadComponent.prototype.active = /**
         * @param {?} i
         * @param {?} position
         * @return {?}
         */
            function (i, position) {
                var _this = this;
                console.log(i);
                this.videoElement.nativeElement.pause();
                this.autoplay = false;
                this.gallery.forEach(( /**
                 * @param {?} element
                 * @param {?} index
                 * @return {?}
                 */function (element, index) {
                    if (position == 'prev') {
                        if (i > 0) {
                            if (index == i - 1) {
                                if (i != 0) {
                                    element.checked = true;
                                }
                            }
                            else {
                                if (i != 0) {
                                    element.checked = false;
                                }
                            }
                            console.log('ele', i, position, element);
                        }
                    }
                    if (position == 'next') {
                        if (index == i + 1) {
                            if (i < _this.gallery.length - 1) {
                                element.checked = true;
                            }
                        }
                        else {
                            if (i < _this.gallery.length - 1) {
                                element.checked = false;
                            }
                        }
                        console.log('ele', i, position, element);
                    }
                }));
            };
        /**
         * @param {?} e
         * @return {?}
         */
        SukuGalleryUploadComponent.prototype.preview = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                console.log('link', e);
                /** @type {?} */
                var modal = document.getElementById('myGalleryModal');
                /** @type {?} */
                var modalImg = ( /** @type {?} */(document.getElementById('img01')));
                /** @type {?} */
                var modalVid = ( /** @type {?} */(document.getElementById('vid')));
                modal.style.display = 'block';
                if (e.type == 'image') {
                    modalImg.src = e.link;
                    modalImg.style.display = 'block';
                    modalVid.style.display = 'none';
                }
                else {
                    modalVid.style.display = 'block';
                    modalImg.style.display = 'none';
                    modalVid.src = e.link;
                }
            };
        /**
         * @return {?}
         */
        SukuGalleryUploadComponent.prototype.closeModal = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var modal = document.getElementById('myGalleryModal');
                modal.style.display = 'none';
            };
        /**
         * @return {?}
         */
        SukuGalleryUploadComponent.prototype.start = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} e
         * @return {?}
         */
        SukuGalleryUploadComponent.prototype.onFileChange = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                console.log("img--", e.target.files);
                this.upload.emit(e.target.files);
                (( /** @type {?} */(document.getElementById('uploadGallery')))).value = '';
            };
        SukuGalleryUploadComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-gallery-upload',
                        template: "<!-- pop-view Modal -->\n<div class=\"col p-0\">\n  <div id=\"myGalleryModal\" class=\"modal\">\n    <span class=\"close\" (click)=\"closeModal()\">&times;</span>\n    <img class=\"modal-content\" id=\"img01\">\n    <video #video width=\"85%\" height=\"100%\" id=\"vid\" class=\"text-center m-auto\" controls>\n      Your browser does not support the video tag.\n    </video>\n  </div>\n  <div [id]=\"galleryId\" class=\"carousel slide p-0\" data-ride=\"carousel\" data-interval=\"false\" data-wrap=\"false\"\n    [style.height.rem]=\"carouselHeight\" [style.width.rem]=\"carouselWidth\">\n    <div *ngIf=\"!(gallery.length > 0) && !loader\"\n      class=\"col-sm-12 pt-5 pb-5 text-center carousel-inner default-container\"\n      onclick=\"document.getElementById('uploadGallery').click()\" [style.height.rem]=\"carouselHeight\"\n      [style.width.rem]=\"carouselWidth\">\n      <img src=\"../../assets/images/defaultImg.png\" width=\"80px\" alt=\"product-01\" height=\"80px\">\n    </div>\n    <div *ngIf=\"loader\" class=\"col-sm-12 pt-5 pb-5 text-center carousel-inner default-container\"\n      [style.height.rem]=\"carouselHeight\" [style.width.rem]=\"carouselWidth\">\n      <div class=\"col-sm-12 pt-5 d-flex justify-content-center\">\n        <mat-spinner diameter=\"45\"></mat-spinner>\n      </div>\n    </div>\n    <input type=\"file\" id=\"uploadGallery\" accept=\"image/x-png,image/jpeg,image/jpg\" name=\"uploadDocument\" multiple\n      (change)=\"onFileChange($event)\">\n    <!-- The slideshow -->\n    <div class=\"carousel-inner\" *ngIf=\"(gallery.length > 0) && !loader\"\n      [ngClass]=\"{'default-container': size == 'default'}\" [style.height.rem]=\"carouselHeight\"\n      [style.width.rem]=\"carouselWidth\">\n      <div class=\"carousel-item\" [ngClass]=\"{'active': item?.checked }\" *ngFor=\"let item of gallery;let i= index\">\n        <div class=\"text-center\" [ngClass]=\"{'slide_img' :item?.type == 'image', 'slide_vid' :item?.type == 'video' }\"\n          id=\"item{{i}}\">\n          <div class=\"col p-0\">\n            <i class=\" f16 fa fa-close\" (click)=\"deleteImage.emit(item)\"></i>\n          </div>\n          <img class=\"pic\" [style.height.rem]=\"imgHeight\" [style.width.rem]=\"imgWidth\"\n            [ngClass]=\"{'default-pic': size == 'default'}\" (click)=\"preview(item)\" *ngIf=\"item?.type == 'image'\"\n            src=\"{{item?.link}}\">\n          <video #video class=\"vid\" [style.height.rem]=\"vidHeight\" [style.width.rem]=\"vidWidth\"\n            [ngClass]=\"{'default-vid': size == 'default'}\" (click)=\"preview(item)\" *ngIf=\"item?.type == 'video'\"\n            width=\"95%\" height=\"100%\" src=\"{{item?.link}}\" controls>\n            Your browser does not support the video tag.\n          </video>\n        </div>\n      </div>\n      <!-- Left and right controls -->\n      <a class=\"carousel-control-prev\" href=\"#{{galleryId}}\" data-slide=\"prev\" *ngIf=\"(gallery?.length > 1)\">\n        <span class=\"carousel-control-prev-icon {{controlPrevIconCustomClass}}\">\n        </span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#{{galleryId}}\" data-slide=\"next\" *ngIf=\"(gallery?.length > 1)\">\n        <span class=\"carousel-control-next-icon {{controlNextIconCustomClass}}\">\n        </span>\n      </a>\n    </div>\n  </div>\n  <div class=\"col pt-2\">\n    <div class=\"row\">\n      <div class=\"col pr-0\">\n        <a onclick=\"document.getElementById('uploadGallery').click()\" id=\"saleTwoUpload\" (change)=\"onFileChange($event)\"\n          class=\"productInfoLabel pr-5\">Upload\n          Image\n        </a>\n      </div>\n      <div class=\"col text-right\">\n        <a (click)=\"clear.emit()\" id=\"clearAll\" class=\"productInfoLabel\">Clear All\n        </a>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: [".pic:hover{cursor:pointer}.vid{padding:4% 4% 2%}.slide_vid{margin:4% auto;position:relative;width:87%}#myImg{border-radius:5px;cursor:pointer;transition:.3s}#myImg:hover{opacity:.7}.modal{display:none;position:fixed;z-index:500;padding-top:100px;left:0;top:0;width:100%;overflow:auto;background-color:rgba(0,0,0,.9);height:100vh;justify-content:center;align-items:center}.modal-content{margin:auto;display:block;align-items:center;width:80%;max-width:65vh}#caption{display:block;width:80%;max-width:700px;text-align:center;color:#ccc;height:150px}#caption,.modal-content{-webkit-animation-name:zoom;animation-name:zoom;-webkit-animation-duration:.6s;animation-duration:.6s}@-webkit-keyframes zoom{from{transform:scale(0)}to{transform:scale(1)}}@keyframes zoom{from{transform:scale(0)}to{transform:scale(1)}}.close{position:absolute;top:15px;right:35px;color:#f1f1f1;font-size:40px;font-weight:700;transition:.3s}.close:focus,.close:hover{color:#a5a0a0;text-decoration:none;cursor:pointer}@media only screen and (max-width:700px){.modal-content{width:100%}.carousel{display:flex;justify-content:center}}.carousel-inner{position:relative;width:100%;overflow:hidden;height:14.5rem;background:#f8f8f8;box-shadow:0 2px 3px -2px #00000f4f;border:1px solid #f2f2f2}.carousel-control-next-icon,.carousel-control-prev-icon{background-image:none!important;width:auto!important;height:inherit!important}.carousel-control-prev-icon{margin-right:.5rem}.carousel-control-next-icon{margin-left:.1rem}.carousel-control-next-icon:after{text-align:center;content:'\\f054';font-family:FontAwesome;color:#a7bf2e;background-size:50% 50%;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;height:30px;width:30px}.carousel-control-prev-icon:after{content:'\\f053';font-family:FontAwesome;color:#a7bf2e;background-size:50% 50%;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;height:30px;width:30px}.default-container{height:190px;width:300px}.default-pic{height:162px!important}.default-vid{height:155px!important}.slide_img{margin:5% auto;position:relative;width:70%}.pic{background-size:contain;border-radius:5px;margin:auto;width:100%;height:12rem;z-index:99}.f16{font-size:1.3rem;position:absolute;top:-7px;right:-8px;z-index:100;background:#fff;padding:.5rem .65rem;border-radius:50%;cursor:pointer;box-shadow:0 0 4px 1px #cacacaad}input[type=file]{display:none}.productInfoLabel{height:22px;font-family:\"Encode Sans\",sans-serif;font-size:15px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px;color:rgba(117,117,117,.67);text-decoration:underline!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuGalleryUploadComponent.ctorParameters = function () { return []; };
        SukuGalleryUploadComponent.propDecorators = {
            gallery: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            galleryId: [{ type: i0.Input, args: ['gallery-id',] }],
            carouselHeight: [{ type: i0.Input, args: ['carousel-height',] }],
            carouselWidth: [{ type: i0.Input, args: ['carousel-width',] }],
            imgHeight: [{ type: i0.Input, args: ['img-height',] }],
            imgWidth: [{ type: i0.Input, args: ['img-width',] }],
            vidHeight: [{ type: i0.Input, args: ['vid-height',] }],
            vidWidth: [{ type: i0.Input, args: ['vid-width',] }],
            loader: [{ type: i0.Input, args: ['loader',] }],
            controlNextIconCustomClass: [{ type: i0.Input, args: ['control-next-icon-customclass',] }],
            controlPrevIconCustomClass: [{ type: i0.Input, args: ['control-prev-icon-customclass',] }],
            videoElement: [{ type: i0.ViewChild, args: ['video',] }],
            deleteImage: [{ type: i0.Output }],
            upload: [{ type: i0.Output }],
            clear: [{ type: i0.Output }]
        };
        return SukuGalleryUploadComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuChipListComponent = /** @class */ (function () {
        function SukuChipListComponent() {
            this.DocumentList = [];
            this.actionOne = new i0.EventEmitter();
            this.actionTwo = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuChipListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} val
         * @return {?}
         */
        SukuChipListComponent.prototype.downloadDoc = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this.actionOne.emit(val);
            };
        /**
         * @param {?} val
         * @return {?}
         */
        SukuChipListComponent.prototype.deleteDoc = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this.actionTwo.emit(val);
            };
        SukuChipListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-chip-list',
                        template: "<div class=\"col\">\n  <mat-chip-list>\n    <mat-chip class=\"whiteSpace\" *ngFor=\"let doc of DocumentList;let docIndex = index;\"> <br>\n      <mat-icon matChipRemove (click)=\"downloadDoc(doc)\" matTooltip=\"Download\">\n        save_alt\n      </mat-icon>\n      <mat-icon matChipRemove matTooltip=\"Delete\" (click)=\"deleteDoc(doc)\">clear\n      </mat-icon>\n      <span> {{doc.name}}</span>\n    </mat-chip>\n  </mat-chip-list>\n</div>",
                        styles: [".whiteSpace{white-space:nowrap}"]
                    }] }
        ];
        /** @nocollapse */
        SukuChipListComponent.ctorParameters = function () { return []; };
        SukuChipListComponent.propDecorators = {
            DocumentList: [{ type: i0.Input, args: ['document-list',] }],
            actionOne: [{ type: i0.Output, args: ['action-one',] }],
            actionTwo: [{ type: i0.Output, args: ['action-two',] }]
        };
        return SukuChipListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuDateTimePickerComponent = /** @class */ (function () {
        function SukuDateTimePickerComponent() {
            this.control = 'controlName';
            this.placeholder = 'Date picker';
            this.dateId = 'datepicker';
            this.errorMsg = 'Cannot be blank';
            this.dateSelect = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        SukuDateTimePickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} field
         * @return {?}
         */
        SukuDateTimePickerComponent.prototype.isFieldValid = /**
         * @param {?} field
         * @return {?}
         */
            function (field) {
                return ((!this.form.get(field).valid && this.form.get(field).touched) ||
                    (this.form.get(field).untouched && this.formSumitAttempt));
            };
        /**
         * @param {?} val
         * @return {?}
         */
        SukuDateTimePickerComponent.prototype.selectedDate = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                console.log('this is value ', val._selected);
                /** @type {?} */
                var selectedDate = val._selected;
                this.dateSelect.emit(selectedDate);
            };
        SukuDateTimePickerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-date-time-picker',
                        template: "<div class=\"col flex\" [formGroup]=\"form\">\n  <mat-form-field class=\"col p-0\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <owl-date-time  #picker (afterPickerClosed)=\"selectedDate(picker)\"  [startAt]=\"startAt\" ></owl-date-time>\n    <input matInput id=\"{{dateId}}\" formControlName=\"{{control}}\" placeholder=\"{{placeholder}}\" [min]=\"min\"\n      [max]=\"max\" [owlDateTimeTrigger]=\"picker\" [owlDateTime]=\"picker\">\n    <mat-error>\n      <span class=\"err_style\">\n        <span *ngIf=\"form.hasError('required',[control])\" id=\"errorMsg{{dateId}}\">{{errorMsg}}</span>\n      </span>\n    </mat-error>\n  </mat-form-field>\n</div>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SukuDateTimePickerComponent.ctorParameters = function () { return []; };
        SukuDateTimePickerComponent.propDecorators = {
            form: [{ type: i0.Input }],
            control: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input, args: ['place-holder',] }],
            dateId: [{ type: i0.Input, args: ['id',] }],
            max: [{ type: i0.Input, args: ['max-date',] }],
            min: [{ type: i0.Input, args: ['min-date',] }],
            startAt: [{ type: i0.Input, args: ['start-date',] }],
            formSumitAttempt: [{ type: i0.Input }],
            errorMsg: [{ type: i0.Input }],
            dateSelect: [{ type: i0.Output }]
        };
        return SukuDateTimePickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuIconWidgetComponent = /** @class */ (function () {
        function SukuIconWidgetComponent() {
            this.icon = 'suku-shipped-icon';
            this.iconId = 'suku-shipped-icon';
            this.iconInfo = 'suku-shipped-icon';
            this.iconInfoCustomClass = 'suku-shipped-icon';
            this.customIconClass = 'suku-xl';
        }
        /**
         * @return {?}
         */
        SukuIconWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuIconWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-icon-widget',
                        template: "<div class=\"col\">\n  <span class=\"tipTool\" [style.left.rem]=\"positionTooltip\">\n    <span class=\"tipTooltext\" [style.left.rem]=\"positionTooltext\">\n      <span>{{iconInfo}}</span>\n    </span>\n    <i class=\"{{customIconClass}} {{icon}}\" id=\"{{iconId}}\"></i>\n    <!-- <img [class]=\"customIconClass\" [src]=\"iconOne\" [id]=\"iconOneId\" alt=\"card-img\" width=\"50px\" height=\"50px\"> -->\n  </span>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.c-pointer{cursor:pointer}.tipTool{position:relative;display:inline-block;height:0;text-align:center;border-radius:15px;background-color:#d8d8d8a8 transparent;font-size:18px;color:#757575;font-weight:700;font-style:italic;font-stretch:normal;letter-spacing:.5px}.tipTool .tipTooltext{visibility:hidden;width:-webkit-max-content;width:-moz-max-content;width:max-content;background-color:#000000eb;text-align:left;border-radius:6px;padding:15px 18px;position:absolute;z-index:1;bottom:150%;left:50%;margin-left:-60px;font-style:normal;font-stretch:normal;font-size:13px;font-family:var(--suku-secondary-font);font-weight:500;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.tipTool .tipTooltext::after{content:\"\";position:absolute;top:100%;left:36.5%;margin-left:0;border-width:5px;border-style:solid;border-color:#191922 transparent transparent;font-style:normal;font-stretch:normal}.tipTool:hover .tipTooltext{visibility:visible}.tooltip-info-content{font-family:var(--suku-secondary-font)}"]
                    }] }
        ];
        /** @nocollapse */
        SukuIconWidgetComponent.ctorParameters = function () { return []; };
        SukuIconWidgetComponent.propDecorators = {
            icon: [{ type: i0.Input }],
            iconId: [{ type: i0.Input, args: ['icon-id',] }],
            iconInfo: [{ type: i0.Input, args: ['icon-info',] }],
            positionTooltip: [{ type: i0.Input, args: ['position-tooltip',] }],
            positionTooltext: [{ type: i0.Input, args: ['position-tooltext',] }],
            iconInfoCustomClass: [{ type: i0.Input, args: ['icon-info-custom-class',] }],
            customIconClass: [{ type: i0.Input, args: ['custom-icon-class',] }]
        };
        return SukuIconWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuDropdownWfcComponent = /** @class */ (function () {
        function SukuDropdownWfcComponent() {
            this.dropdownControl = new forms.FormControl('');
            this.color = 'primary';
            this.data = [];
            this.keyValue = 'productName';
            this.displayKey = 'productName';
            this.placeholder = 'select product from this listing';
            this.selectId = 'sttProductTraceability';
            this.errorMsg = 'Cannot be blank';
            this.customSelectClass = '';
            this.icon = 'suku-dropdown-icon';
            this.iconCustomClass = 'arrow-icon';
            this.iconId = 'arrow';
            this.select = new i0.EventEmitter();
            this.valueChange = new i0.EventEmitter();
        }
        Object.defineProperty(SukuDropdownWfcComponent.prototype, "value", {
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                console.log('val', val);
                if (val) {
                    this.dropdownControl.patchValue(val);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SukuDropdownWfcComponent.prototype, "enableRequiredValidator", {
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                console.log('enableRequiredValidator', val);
                if (val) {
                    this.dropdownControl.setValidators(forms.Validators.required);
                    this.dropdownControl.updateValueAndValidity();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuDropdownWfcComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuDropdownWfcComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-dropdown-wfc',
                        template: "<span>\n  <mat-form-field class=\"col p-0\">\n    <mat-select id=\"{{selectId}}\" [class]=\"customSelectClass\" #selector [formControl]=\"dropdownControl\"\n      name=\"dropdownControl\" (selectionChange)=\"select.emit(dropdownControl);\" [placeholder]=\"placeholder\">\n      <mat-option *ngFor=\"let item of data;let i=index\" value=\"{{item[keyValue]}}\" id=\"option{{i}}\">\n        {{item[displayKey]}}\n      </mat-option>\n    </mat-select>\n    <span matSuffix>\n      <mat-icon>\n        <span>\n          <i [id]=\"iconId\" class=\"{{iconCustomClass}} dropdown-icon {{icon}}\"></i>\n        </span>\n      </mat-icon>\n    </span>\n    <mat-error *ngIf=\"dropdownControl.hasError('required')\">\n      {{errorMsg}}\n    </mat-error>\n  </mat-form-field>\n</span>",
                        styles: [":host ::ng-deep.mat-select-trigger{height:1.7em!important;padding-bottom:.5em!important}::ng-deep .mat-select-arrow{border:0!important;-webkit-appearance:none;-moz-appearance:none}.mat-select-panel{margin-left:10px!important}.mat-select-panel:focus,.mat-select-trigger:focus{outline:0!important}.mat-select-arrow+i.dropdown-icon{float:right;margin-top:-30px;margin-right:4px;pointer-events:none;font-size:large}::ng-deep mat-select:focus{outline:0!important}.arrow-icon{font-size:2.5em}"]
                    }] }
        ];
        /** @nocollapse */
        SukuDropdownWfcComponent.ctorParameters = function () { return []; };
        SukuDropdownWfcComponent.propDecorators = {
            pattern: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            data: [{ type: i0.Input }],
            keyValue: [{ type: i0.Input }],
            displayKey: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            formSumitAttempt: [{ type: i0.Input }],
            selectId: [{ type: i0.Input }],
            errorMsg: [{ type: i0.Input }],
            customSelectClass: [{ type: i0.Input }],
            icon: [{ type: i0.Input }],
            iconCustomClass: [{ type: i0.Input, args: ['icon-custom-class',] }],
            iconId: [{ type: i0.Input, args: ['icon-id',] }],
            value: [{ type: i0.Input }],
            select: [{ type: i0.Output }],
            valueChange: [{ type: i0.Output }],
            enableRequiredValidator: [{ type: i0.Input, args: ['enable-required-validator',] }]
        };
        return SukuDropdownWfcComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuDateComponent = /** @class */ (function () {
        function SukuDateComponent() {
            this.dateId = 'dateId';
        }
        /**
         * @return {?}
         */
        SukuDateComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.fontFamily == 'secondary') {
                    this.fontFamilyClass = 'sukuSecondaryFont';
                }
                else {
                    this.fontFamilyClass = 'sukuPrimaryFont';
                }
            };
        SukuDateComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-date',
                        template: "<span [style.font-size.px]=\"fontSize\" [style.font-weight]=\"fontWeight\" [style.color]=\"fontColor\" id=\"{{dateId}}\" class=\"{{fontFamilyClass}}\">\n  {{dateString | date: 'MMM-d-y hh:mm a'}}\n</span>\n",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.sukuPrimaryFont{font-family:var(--suku-primary-font)!important}.sukuSecondaryFont{font-family:var(--suku-secondary-font)!important}"]
                    }] }
        ];
        /** @nocollapse */
        SukuDateComponent.ctorParameters = function () { return []; };
        SukuDateComponent.propDecorators = {
            dateString: [{ type: i0.Input }],
            fontSize: [{ type: i0.Input }],
            fontWeight: [{ type: i0.Input }],
            dateId: [{ type: i0.Input }],
            fontFamily: [{ type: i0.Input }],
            fontFamilyClass: [{ type: i0.Input }],
            fontColor: [{ type: i0.Input }]
        };
        return SukuDateComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuLoginComponent = /** @class */ (function () {
        function SukuLoginComponent(snackBar) {
            this.snackBar = snackBar;
            this._enableRequiredValidator = new rxjs.BehaviorSubject('');
            this.color = 'primary';
            this.usernameControl = new forms.FormControl('');
            this.placeholderOne = 'Username';
            this.userNameId = 'Username';
            this.passwordControl = new forms.FormControl('');
            this.placeholderTwo = 'Password';
            this.passwordId = 'password';
            this.enableUserIcon = true;
            this.errorMessageOne = 'cannot be blank.';
            this.errorMessageTwo = 'cannot be blank.';
            this.errorMessageThree = '';
            this.errorMessageFour = '';
            this.snackbarMessage = 'Invalid Input.';
            this.formSubmit = new i0.EventEmitter();
        }
        Object.defineProperty(SukuLoginComponent.prototype, "enableRequiredValidator", {
            get: /**
             * @return {?}
             */ function () {
                console.log('_enableRequiredValidator', this._enableRequiredValidator);
                return this._enableRequiredValidator.value;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                console.log('enableRequiredValidator', val);
                if (val === 'true') {
                    /** @type {?} */
                    var data = val.toString();
                    this._enableRequiredValidator.next(data);
                    this.usernameControl.setValidators(forms.Validators.required);
                    this.usernameControl.updateValueAndValidity();
                    this.passwordControl.setValidators(forms.Validators.required);
                    this.passwordControl.updateValueAndValidity();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SukuLoginComponent.prototype, "value", {
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                console.log('val', val);
                if (val.username && val.password) {
                    this.usernameControl.patchValue(val.username);
                    this.passwordControl.patchValue(val.password);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuLoginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} e
         * @return {?}
         */
        SukuLoginComponent.prototype.remeberMeAction = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                this.remeberMeValue = e;
            };
        /**
         * @return {?}
         */
        SukuLoginComponent.prototype.onSubmit = /**
         * @return {?}
         */
            function () {
                if (this._enableRequiredValidator.value == 'true') {
                    if (this.usernameControl.value && this.passwordControl.value) {
                        /** @type {?} */
                        var data = {
                            username: this.usernameControl.value,
                            password: this.passwordControl.value,
                            rememberMe: this.remeberMeValue
                        };
                        console.log(data);
                        this.formSubmit.emit(data);
                    }
                    else {
                        this.snackbar(this.snackbarMessage);
                    }
                }
                else {
                    /** @type {?} */
                    var data = {
                        username: this.usernameControl.value,
                        password: this.passwordControl.value,
                        rememberMe: this.remeberMeValue
                    };
                    console.log(data);
                    this.formSubmit.emit(data);
                }
            };
        /**
         * @param {?} msg
         * @return {?}
         */
        SukuLoginComponent.prototype.snackbar = /**
         * @param {?} msg
         * @return {?}
         */
            function (msg) {
                this.snackBar.open(msg, 'close', {
                    verticalPosition: 'bottom',
                    horizontalPosition: 'right',
                    duration: 3500
                });
            };
        SukuLoginComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-login',
                        template: "<form autocomplete=\"off\">\n  <div class=\"col\">\n    <div class=\"col-sm-12\">\n      <div class=\"form-group col pl-lg-5 pr-lg-5 p-xs-0\">\n        <div class=\" col-xs-12 col-sm-12 pl-lg-5 pr-lg-5 p-xs-0\">\n          <div class=\"col pl-lg-5 pr-lg-5 p-xs-0\">\n            <div class=\"col pl-lg-4 pr-lg-4 p-xs-0\">\n              <div class=\"col-xs-12 f14 pb-lg-3 p-0 col-sm-12 p-xs-0\">\n                <div class=\"col text-center\">\n                  <p class=\"login\">Login</p>\n                </div>\n                <div class=\"col pl-lg-1 pr-lg-1\">\n                  <div class=\"col-sm-6 p-5 col-xs-12 offset-sm-3 Rectangle-2 mb-9\">\n                    <div class=\"col pt-2\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-10 col-md-12 col-sm-12 col-12 pl-lg-4 pr-lg-4 p-md-0\">\n                          <mat-form-field class=\"col-lg-12 col-12\" id=\"UsernameIcon\">\n                            <span matPrefix class=\"mr-2\">\n                              <mat-icon>account_circle</mat-icon>\n                            </span>\n                            <input matInput matInput autofocus type=\"text\" [id]=\"userNameId\"\n                              [placeholder]=\"placeholderOne\" [formControl]=\"usernameControl\" name=\"usernameControl\">\n                            <mat-error *ngIf=\"usernameControl.hasError('required')\">\n                              {{errorMessageOne}}\n                            </mat-error>\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-2 col-md-4 d-flex align-items-center\"></div>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-10 col-md-12 col-sm-12 col-xs-12 pl-lg-4 pr-lg-4 p-md-0\">\n                          <mat-form-field class=\"col-lg-12 col-12\" id=\"lockIcon\">\n                            <span matPrefix class=\"mr-2\">\n                              <mat-icon>lock</mat-icon>\n                            </span>\n                            <input matInput autocomplete=\"off\" [placeholder]=\"placeholderTwo\" type=\"password\"\n                              [type]=\"hide ? 'text' : 'password'\" [id]=\"passwordId\" [formControl]=\"passwordControl\"\n                              name=\"passwordControl\">\n                            <mat-error *ngIf=\"passwordControl.hasError('required')\">\n                              {{errorMessageTwo}}\n                            </mat-error>\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-2 col-md-12 d-flex align-items-center text-xs-item-center pl-0 pr-3\">\n                          <div class=\"row c-pointer\" (click)=\"hide =! hide\">\n                            <mat-icon class=\"toggle-password\">\n                              {{hide ? 'visibility_off' : 'visibility'}}</mat-icon><span\n                              class=\"pl-2 view\">{{hide ? 'Hide' : 'View'}}</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                      <div class=\"row\">\n                        <div class=\"col-12 col-sm-10 offset-sm-1 mb-1\">\n                          <div class=\"row\">\n                            <div class=\"text-center col-sm-12 col-xs-6 pt-3 pb-3\">\n                              <suku-checkbox checkbox-id=\"remeberMe\" [checked]=\"remeberMeChecked\"\n                                (action)=\"remeberMeAction($event)\">Remember Me?</suku-checkbox>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"col\">\n                        <div class=\"col-lg-7 col-12 pb-3 justify-content-center m-auto\">\n                          <suku-info-button custom-class=\"w-100\" (click)=\"onSubmit();\" id=\"accountLogin\">LOGIN\n                          </suku-info-button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>",
                        styles: [".Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.border-top{border-top:.51px solid #676767ba!important}.help{font-size:18px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;text-align:right;color:#fff}.login{font-family:Poppins-light,sans-serif!important;font-size:30px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#fff}.view{font-family:'Encode Sans',sans-serif}.remeberMe{font-family:Poppins,sans-serif;color:rgba(117,117,117,.37)!important;font-weight:500;font-size:14px;letter-spacing:0}.suku-logo{width:100px;height:60px;-o-object-fit:contain;object-fit:contain}.hr{width:85%;opacity:.1;border:.91px solid #979797;margin-top:.75rem!important}@media (max-width:768px){.p-xs-0{padding:0}.text-xs-item-center{justify-content:center}}.c-pointer{cursor:pointer}:host ::ng-deep .mat-form-field-prefix,:host ::ng-deep .mat-form-field-suffix{align-self:flex-end}"]
                    }] }
        ];
        /** @nocollapse */
        SukuLoginComponent.ctorParameters = function () {
            return [
                { type: material.MatSnackBar }
            ];
        };
        SukuLoginComponent.propDecorators = {
            color: [{ type: i0.Input }],
            placeholderOne: [{ type: i0.Input, args: ['placeholder-one',] }],
            userNameId: [{ type: i0.Input, args: ['user-name-id',] }],
            placeholderTwo: [{ type: i0.Input, args: ['placeholder-two',] }],
            passwordId: [{ type: i0.Input, args: ['password-id',] }],
            customClass: [{ type: i0.Input, args: ['custom-class',] }],
            enableUserIcon: [{ type: i0.Input, args: ['enable-user-icon',] }],
            errorMessageOne: [{ type: i0.Input, args: ['error-message-one',] }],
            errorMessageTwo: [{ type: i0.Input, args: ['error-message-two',] }],
            errorMessageThree: [{ type: i0.Input, args: ['error-message-three',] }],
            errorMessageFour: [{ type: i0.Input, args: ['error-message-four',] }],
            remeberMeChecked: [{ type: i0.Input, args: ['remeberMeChecked',] }],
            snackbarMessage: [{ type: i0.Input, args: ['snackbar-message',] }],
            enableRequiredValidator: [{ type: i0.Input, args: ['enable-required-validator',] }],
            value: [{ type: i0.Input }],
            formSubmit: [{ type: i0.Output }]
        };
        return SukuLoginComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuProgressBarTypeThreeComponent = /** @class */ (function () {
        function SukuProgressBarTypeThreeComponent() {
            this.statusKey = ['inProgress', 'inComplete', 'complete'];
            this.steps = [
                {
                    '_order': 1,
                    'step': {
                        'facility': {
                            '_id': '082721c3e14d1d7c062ee158',
                            'name': 'Finca Nueva'
                        },
                        'description': 'At Finca Nueva, we raise the healthiest, happiest cattle.',
                        'facilityType': 'Producer',
                        'templateLocator': '8fe2a17eeab6ea096210205f',
                        'inputs': [
                            {
                                'assetId': 'f3122dfe6a015dd7cac477fe',
                                'timestamp': '2019-07-02T08:14:27.307Z',
                                'attestedBy': '1b5151760a12352333748894'
                            }
                        ],
                        'outputs': [
                            {
                                'assetId': '2ab8b31fb08a1236a83c495a',
                                'timestamp': '2019-07-02T08:14:27.307Z',
                                'attestedBy': '2a6b57f3a123d3b41e410795'
                            }
                        ]
                    }
                },
                {
                    'order': 10,
                    'step': {
                        'facility': {
                            '_id': 'dacc5fd46f386e7cd10a7f1d',
                            'name': 'Esmeralda'
                        },
                        'description': 'At Esmeralda, we are here to process your goods.',
                        'facilityType': 'Processor',
                        'templateLocator': 'dba2424a243d8b6b2a4f1410',
                        'inputs': [
                            {
                                'assetId': '69b4edb0f32a8ccfaf562645',
                                'timestamp': '2019-07-02T08:14:27.307Z',
                                'attestedBy': '6aba2bdb1a123fa2d6972277'
                            }
                        ],
                        'outputs': [
                            {
                                'assetId': '2969713e87e448e71dce795f',
                                'timestamp': '2019-07-02T08:14:27.307Z',
                                'attestedBy': '6aba2bda123b1fa2d6972277'
                            }
                        ]
                    }
                },
                {
                    'order': 20,
                    'step': {
                        'facility': {
                            '_id': 'aa8e71b242ddac8cbeedeb81',
                            'name': 'Sasmar'
                        },
                        'description': 'At Sasmar, we are here to move your goods.',
                        'facilityType': 'Logistics',
                        'templateLocator': '95c5e8ac473c4315f546ae39',
                        'inputs': [
                            {
                                'assetId': '6893733cadef0c3cc831953d',
                                'timestamp': '2019-07-02T08:14:27.307Z',
                                'attestedBy': '6aba2ba123db1fa2d6972277'
                            }
                        ],
                        'outputs': [
                            {
                                'assetId': 'c03bed502f70eda2587fa88e',
                                'timestamp': '2019-07-02T08:14:27.307Z',
                                'attestedBy': '6aba2bda123b1fa2d6972277'
                            }
                        ]
                    }
                },
                {
                    'order': 30,
                    'step': {
                        'facility': {
                            '_id': '2153ec1c6a99eb8ed6525926',
                            'name': 'Cedicar'
                        },
                        'description': 'At Cedicar, we are here to distribute your goods correctly.',
                        'facilityType': 'Distributor',
                        'templateLocator': 'bc15408ae4a9b7fe10aaff56',
                        'inputs': [
                            {
                                'assetId': '7a3c779e8297ca6c3cdbdb2e',
                                'timestamp': '2019-07-02T08:14:27.307Z',
                                'attestedBy': '6aba2ba123db1fa2d6972277'
                            }
                        ],
                        'outputs': [
                            {
                                'assetId': '17cd5c76c1865613b37c7e37',
                                'timestamp': '2019-07-02T08:14:27.307Z',
                                'attestedBy': '6aba2ba123db1fa2d6972277'
                            }
                        ]
                    }
                },
                {
                    'order': 40,
                    'step': {
                        'facility': {
                            '_id': '3021c8b0b062fc85cd0e8c5d',
                            'name': 'Wong'
                        },
                        'description': 'We are proud to sell healthy food products for a great price!',
                        'facilityType': 'Supermarket',
                        'templateLocator': '28c1849161583c73d38d76a7',
                        'inputs': [
                            {
                                'assetId': '0df488a27a1231f293ea47c3',
                                'timestamp': '2019-07-02T08:14:27.307Z',
                                'attestedBy': '6aba2ba123db1fa2d6972277'
                            }
                        ],
                        'outputs': [
                            {
                                'assetId': '67e7dff46a1231e9e505dcc8',
                                'timestamp': '2019-07-02T08:14:27.307Z',
                                'attestedBy': '6aba2ba123db1fa2d6972277'
                            },
                            {
                                'assetId': '67e7dff46a1231e9e505dcc7'
                            }
                        ]
                    }
                }
            ];
            this.iconInfo = 'suku-shipped-icon';
            this.iconInfoCustomClass = 'suku-shipped-icon';
            this.customIconClass = 'suku-xl';
        }
        Object.defineProperty(SukuProgressBarTypeThreeComponent.prototype, "data", {
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val) {
                    if (val.length == 0) {
                        /** @type {?} */
                        var data = '1';
                        document.documentElement.style.setProperty('--suku-progress-bar-count', data);
                    }
                    else {
                        console.log('val.length.toString()', val.length.toString());
                        /** @type {?} */
                        var data = val.length.toString();
                        document.documentElement.style.setProperty('--suku-progress-bar-count', data);
                    }
                    this.progressBarData = val;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuProgressBarTypeThreeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuProgressBarTypeThreeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-progress-bar-type-three',
                        template: "<div class=\"col-12\">\n  <ul class=\"progressbar\">\n    <li [ngClass]=\"{ 'active' : (data?.status == statusKey[0]), \n    'completed' : (data?.status == statusKey[2]), 'toolTip': (data?.status == statusKey[1]) }\" *ngFor=\"let data of\n    progressBarData;let i\n    =index\">\n      <!-- <span class=\"tipTool\" [style.left.rem]=\"positionTooltip\"> -->\n      <span class=\"tipTooltext\" [style.left.rem]=\"positionTooltext\">\n        <span>{{iconInfo}}</span>\n      </span>\n      <span *ngIf=\"(data?.status == statusKey[2])\" class=\"checkmark\"></span>\n      {{data?.name}}\n      <!-- </span> -->\n    </li>\n  </ul>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.progressActive{width:50px!important;height:50px;color:#fff;background:var(--suku-primary-color);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:var(--suku-primary-font)}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:var(--suku-primary-font)}.container{width:100%;position:absolute;z-index:1}.progressbar li{float:left;width:calc(82%/var(--suku-progress-bar-count));position:relative;text-align:center}.progressbar li:before{content:\"\";content:counter(step);counter-increment:step;width:50px;height:50px;display:block;margin:0 auto 10px;border-radius:50%;line-height:50px;background:#757575;color:#fff;text-align:center;font-weight:400;font-size:14px;font-family:var(--suku-primary-font)}.progressbar{counter-reset:step}.progressbar li:after{content:'';position:absolute;width:100%;height:1px;color:#fff;background:#b3b3b3;top:25px;left:-50%;z-index:-1}.progressbar li.active:before{color:#fff;background:var(--suku-primary-color)}.progressbar li.completed:before{color:#fff;background-color:#1c1c1c}.progressbar li.active+li:after,.progressbar li.completed+li:after{background-color:#b3b3b3}.progressbar li:first-child:after{content:none}li{list-style:none;font-family:var(--suku-secondary-font);font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.checkmark{position:absolute;top:20%;right:44.5%;z-index:5;background:#1c1c1c;width:12px;height:21px}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid #d8fc40;border-width:0 3px 3px 0;transform:rotate(45deg)}.tipTool{position:relative;display:inline-block;height:0;text-align:center;border-radius:15px;background-color:#d8d8d8a8 transparent;font-size:18px;color:#757575;font-weight:700;font-style:italic;font-stretch:normal;letter-spacing:.5px}.tipTooltext{visibility:hidden;width:-webkit-max-content;width:-moz-max-content;width:max-content;background-color:#000000eb;text-align:left;border-radius:6px;padding:15px 18px;position:absolute;z-index:1;bottom:110%;left:51%;margin-left:-60px;font-style:normal;font-stretch:normal;font-size:13px;font-family:var(--suku-secondary-font);font-weight:500;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.tipTooltext::after{content:\"\";position:absolute;top:100%;left:36.5%;margin-left:0;border-width:5px;border-style:solid;border-color:#191922 transparent transparent;font-style:normal;font-stretch:normal}li:hover::before .tipTooltext{visibility:visible}.tooltip-info-content{font-family:var(--suku-secondary-font)}"]
                    }] }
        ];
        /** @nocollapse */
        SukuProgressBarTypeThreeComponent.ctorParameters = function () { return []; };
        SukuProgressBarTypeThreeComponent.propDecorators = {
            statusKey: [{ type: i0.Input, args: ['status-Key',] }],
            data: [{ type: i0.Input }],
            iconInfo: [{ type: i0.Input, args: ['icon-info',] }],
            positionTooltip: [{ type: i0.Input, args: ['position-tooltip',] }],
            positionTooltext: [{ type: i0.Input, args: ['position-tooltext',] }],
            iconInfoCustomClass: [{ type: i0.Input, args: ['icon-info-custom-class',] }],
            customIconClass: [{ type: i0.Input, args: ['custom-icon-class',] }]
        };
        return SukuProgressBarTypeThreeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuDisplayTableComponent = /** @class */ (function () {
        function SukuDisplayTableComponent() {
            this.headerContent = 'cjkcsnns sjkcs jkkjs kjkjd kjdfkjdf jkdf';
            this.titleOneColor = 'white';
            this.titleOneCustomClass = '';
            this.titleContent = 'No-Data';
            this.headerSize = '14px';
            this.dataSize = '12px';
        }
        Object.defineProperty(SukuDisplayTableComponent.prototype, "tableData", {
            get: /**
             * @return {?}
             */ function () {
                return this._tableData;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._tableData = val;
                if (this._tableData[0]) {
                    this.tableDataKey = Object.keys(this._tableData[0]);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SukuDisplayTableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuDisplayTableComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-display-table',
                        template: "<div class=\"col content\">\n  <div class=\"header\">\n    <div class=\"col pt-4 pb-4\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <h1 [style.font-size.px]=\"titleOneSize\" class=\"title mt-auto mb-0 {{titleOneCustomClass}}\"\n            [style.font-weight]=\"titleOneWeight\" [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">\n            {{titleContent}}\n          </h1>\n        </div>\n      </div>\n    </div>\n  </div>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th [style.color]=\"headerColor\"  [style.font-size.px]=\"headerSize\"   [style.font-weight]=\"headerWeight\" *ngFor=\"let header of header;\" id=\"{{header.id}}\">{{header.title}}</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of tableData;\">\n        <td *ngFor=\"let key of tableDataKey;\" [style.color]=\"dataColor\"  [style.font-size.px]=\"dataSize\"   [style.font-weight]=\"dataWeight\">\n          <span>{{data[key]}}</span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.header{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);font-weight:600;font-size:var(--suku-font-size-6);text-transform:uppercase}"]
                    }] }
        ];
        /** @nocollapse */
        SukuDisplayTableComponent.ctorParameters = function () { return []; };
        SukuDisplayTableComponent.propDecorators = {
            header: [{ type: i0.Input, args: ['table-header',] }],
            headerContent: [{ type: i0.Input, args: ['table-header-content',] }],
            tableData: [{ type: i0.Input, args: ['table-data',] }],
            titleOneId: [{ type: i0.Input, args: ['title-one-id',] }],
            titleOneSize: [{ type: i0.Input, args: ['title-one-size',] }],
            titleOneColor: [{ type: i0.Input, args: ['title-one-color',] }],
            titleOneWeight: [{ type: i0.Input, args: ['title-one-weight',] }],
            titleOneCustomClass: [{ type: i0.Input, args: ['title-one-custom-class',] }],
            titleContent: [{ type: i0.Input, args: ['title-one-Content',] }],
            headerSize: [{ type: i0.Input, args: ['header-size',] }],
            headerColor: [{ type: i0.Input, args: ['header-color',] }],
            headerWeight: [{ type: i0.Input, args: ['header-weight',] }],
            dataSize: [{ type: i0.Input, args: ['data-size',] }],
            dataColor: [{ type: i0.Input, args: ['data-color',] }],
            dataWeight: [{ type: i0.Input, args: ['data-weight',] }]
        };
        return SukuDisplayTableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuUsernameIconWidgetComponent = /** @class */ (function () {
        function SukuUsernameIconWidgetComponent() {
            this.customClass = 'img-circle';
        }
        /**
         * @return {?}
         */
        SukuUsernameIconWidgetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuUsernameIconWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-username-icon-widget',
                        template: "<img alt=\"{{alternativeText}}\" class=\"{{customClass}}\" height=\"{{height}}\" width=\"{{width}}\" src=\"{{image}}\"><span class=\"title\">{{welcomeTitle}}</span>",
                        styles: [".img-circle{display:inline-block;position:relative;z-index:0;line-height:42px;text-align:center;box-shadow:0 2px 2px 0 rgba(0,0,0,.1);background-color:#fff;border-radius:50%}.title{font-size:27px;border-bottom:2px solid #c3cfd9;display:inline-block;margin-left:5px;vertical-align:bottom}"]
                    }] }
        ];
        /** @nocollapse */
        SukuUsernameIconWidgetComponent.ctorParameters = function () { return []; };
        SukuUsernameIconWidgetComponent.propDecorators = {
            alternativeText: [{ type: i0.Input, args: ['image-text',] }],
            height: [{ type: i0.Input, args: ['image-height',] }],
            width: [{ type: i0.Input, args: ['image-width',] }],
            image: [{ type: i0.Input, args: ['image-src',] }],
            customClass: [{ type: i0.Input, args: ['image-style',] }],
            welcomeTitle: [{ type: i0.Input, args: ['image-title',] }]
        };
        return SukuUsernameIconWidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuNavBarComponent = /** @class */ (function () {
        function SukuNavBarComponent() {
            this.navbarOpen = false;
            this.panelOpenState = false;
            this.isActive = false;
            this.userIcon = '../../../assets/img/avatar-icon.svg';
            this.UserName = 'Abigail';
            this.navbarBgColor = 'bgcolor';
            this.subMenuList = [];
            this.logoCustomClass = 'img-width';
            this.nameCustomClass = '';
            this.data = {
                logo: 'assets/images/Suku_Logo_white.png',
                Username: 'Navbar',
                companyName: 'Microsoft',
                bellIcon: '../../../assets/img/alarm-icon.svg',
                bellIconId: 'notificationIcon',
                notificationCount: 2,
                notificationCountId: 'notificationCount',
                submenu: [
                    {
                        name: 'Buy',
                        subMenu: true,
                        visible: false,
                        id: 'collapseOne',
                        subMenuData: [
                            {
                                name: 'Listings & Bids',
                                path: 'pathOne',
                                id: 1
                            },
                            {
                                name: 'Negotiations',
                                path: 'pathTwo',
                                id: 2
                            },
                            {
                                name: 'PurchaseOrders',
                                path: 'pathThree',
                                id: 3
                            },
                            {
                                name: 'Transactions',
                                path: 'pathFour',
                                id: 4
                            }
                        ]
                    },
                    {
                        name: 'Sell',
                        subMenu: true,
                        visible: false,
                        id: 'collapseOne',
                        subMenuData: [
                            {
                                name: 'Buy-Sell-Price',
                                path: 'pathOne',
                                id: 1
                            },
                            {
                                name: 'BuyProducts',
                                path: 'pathTwo',
                                id: 2
                            },
                            {
                                name: 'BuyPurchaseOrders',
                                path: 'pathThree',
                                id: 3
                            },
                            {
                                name: 'BuyTransactions',
                                path: 'pathFour',
                                id: 4
                            }
                        ]
                    },
                    {
                        name: 'Transaction',
                        subMenu: true,
                        visible: true,
                        subMenuData: [
                            {
                                name: 'Listings & Bids',
                                path: 'pathOne',
                                id: 1
                            },
                            {
                                name: 'Negotiations',
                                path: 'pathTwo',
                                id: 2
                            },
                            {
                                name: 'PurchaseOrders',
                                path: 'pathThree',
                                id: 3
                            },
                            {
                                name: 'Transactions',
                                path: 'pathFour',
                                id: 4
                            }
                        ]
                    },
                    {
                        name: 'Logout',
                        subMenu: false
                    },
                    {
                        name: 'Help',
                        subMenu: false
                    }
                ]
            };
        }
        /**
         * @return {?}
         */
        SukuNavBarComponent.prototype.toggleNavbar = /**
         * @return {?}
         */
            function () {
                this.navbarOpen = !this.navbarOpen;
            };
        /**
         * @param {?} names
         * @return {?}
         */
        SukuNavBarComponent.prototype.isActiveFun = /**
         * @param {?} names
         * @return {?}
         */
            function (names) {
                return this.selected === names;
            };
        /**
         * @param {?} names
         * @return {?}
         */
        SukuNavBarComponent.prototype.toggle = /**
         * @param {?} names
         * @return {?}
         */
            function (names) {
                console.log('names', names);
                this.selected = '';
                this.isActive = true;
                this.selected = names;
                this.data.submenu.forEach(( /**
                 * @param {?} element
                 * @return {?}
                 */function (element) {
                    if (names == element) {
                        console.log('element', element);
                        element.visible = true;
                    }
                    else {
                        element.visible = false;
                    }
                }));
                this.collpose = names.id;
                console.log('element1', this.collpose);
            };
        /**
         * @param {?} name
         * @return {?}
         */
        SukuNavBarComponent.prototype.select = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                this.selected1 = name;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        SukuNavBarComponent.prototype.isActive2 = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return this.selected1 === name;
            };
        SukuNavBarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-nav-bar',
                        template: "<nav class=\"navbar navbar-expand-lg {{navbarBgColor}} {{navbarCustomClass}} bg-dark navbar-light navbar1\">\n  <div>\n    <a title=\"SUKU\">\n      <img [src]=\"data?.logo\" alt=\"brand-SUKU\" class=\"btLine {{logoCustomClass}}\" />\n    </a>\n  </div>\n  <div class=\"collapse navbar-collapse justify-content-end mr-5\" id=\"navbarNav\">\n    <div *ngFor=\"let names of data.submenu\" class=\"responseTab\">\n      <ul class=\"navbar-nav\">\n        <li class=\"pT\" (click)=\"toggle(names)\">\n          <a [ngClass]=\"{'active': isActiveFun(names)}\" class=\"{{nameCustomClass}}\">\n            {{names.name | uppercase}}\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row d-flex justify-content-around ml-lg-5\">\n    <a class=\"align-items-end d-flex\">\n      <i><img id=\"notificationBell\" src=\"{{data?.bellIcon}}\" id=\"{{data?.bellIconId}}\"></i>\n      <span class=\"count\" id=\"{{data?.notificationCountId}}\">{{data?.notificationCount}}</span>\n    </a>\n    <li class=\"iconColor\"><img [src]=\"userIcon\"></li>\n    <li class=\"userColor\" [style.color]=\"userNameColor\" [style.font-weight]=\"userNameFontWeight\"\n      [style.font-size.rem]=\"userNameFontSize\">{{UserName}}</li>\n  </div>\n</nav>\n<div *ngIf=\"isActive\">\n  <div *ngFor=\"let names of data.submenu\">\n    <div class=\"mobResponse1\" *ngIf=\"names?.visible\">\n      <div class=\"bgColor1 col-sm-12 wrapper {{submenuCustomClass}}\" *ngIf=\"names?.subMenu\">\n        <li *ngFor=\"let name of names?.subMenuData\" class=\"line\" (click)=\"select(name)\"\n          [ngClass]=\"{'active1': isActive2(name)}\">\n          <a>{{name.name}}</a>\n        </li>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Response -->\n<nav class=\"navbar navbar-expand-lg navbar-dark  mobResponse responseColor\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\" id=\"accordion\">\n      <div *ngFor=\"let names of data.submenu;  let i = index\">\n        <span id=\"buy{{i}}\" class=\"nav-item nav-link\" data-toggle=\"collapse\" attr.data-target=\"#collapseOne{{i}}\">\n          <ul class=\"navbar-nav\">\n            <li class=\"pT\" (click)=\"toggle(names)\">\n              <a class=\"subMenuBgStyle\">{{names.name | uppercase}} <i class=\"fa fa-arrow-down flRight\"\n                  *ngIf=\"names.subMenu===true\"></i></a>\n            </li>\n          </ul>\n          <div attr.id=\"collapseOne{{i}}\" class=\"panel-collapse panel panel-default collapse in\" role=\"tabpanel\"\n            aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n            <div *ngIf=\"isActive\">\n              <div *ngFor=\"let names of data.submenu\">\n                <div *ngIf=\"names?.visible\">\n                  <div class=\"bgColor1 col-sm-12 wrapper\" *ngIf=\"names?.subMenu\">\n                    <li *ngFor=\"let name of names?.subMenuData\" class=\"line\">\n                      <a>{{name.name}}</a>\n                    </li>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </span>\n      </div>\n    </ul>\n  </div>\n</nav>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}nav ul li{font-size:18px;cursor:pointer;font-family:var(--suku-primary-font);letter-spacing:-.3px;color:rgba(255,255,255,.5);letter-spacing:-.4px}.img-width{width:125px}.btLine{margin-left:59px}.iconColor{color:var(--suku-text-label-two);font-size:19px;cursor:pointer;font-family:var(--suku-primary-font);letter-spacing:-.3px;letter-spacing:-.4px;padding-top:40px;margin-right:7px!important}.userColor{color:var(--suku-text-label-two);font-size:15px;cursor:pointer;font-family:var(--suku-primary-font);letter-spacing:-.3px;letter-spacing:-.4px;padding-top:45px;margin-right:40px}.pT{padding-top:40px;padding-left:2rem}.bgColor1{background:var(--suku-bg-secondary);color:var(--suku-text-label-two);padding-left:60px;padding-right:60px}.bgcolor{background:-webkit-radial-gradient(circle,#303038,#07070f)}li{list-style:none}.wrapper{display:-ms-grid;display:grid;grid-auto-rows:auto;grid-template-columns:repeat(auto-fill,minmax(24%,1fr));grid-row-gap:.5em;grid-column-gap:.5em;text-align:center;border:1px solid #4c4848;font-family:var(--suku-primary-font);height:60px;align-items:center}.wrapper li{align-items:center!important;font-size:15px;font-family:var(--suku-primary-font);letter-spacing:-.3px;color:rgba(255,255,255,.5);letter-spacing:-.4px;cursor:pointer;text-align:center;padding:10px;margin-left:20px;margin-right:20px;word-break:break-all!important}.wrapper li:hover{color:#fff;background:#17181a;border-radius:15px 50px 50px}.active1{border-radius:15px 50px 50px!important;background:#17181a!important;color:#fff!important}.active,ul li a:hover{border-bottom:4px solid var(--suku-secondary-color);padding-bottom:11px;color:var(--suku-text-label-two)}.navbar1{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:.5rem 1rem}.responseColor{background-color:#343a40!important}@media only screen and (max-width:768px) and (min-width:320px){.wrapper{display:-ms-grid;display:grid;-ms-grid-rows:auto;grid-template-rows:auto;grid-template-columns:repeat(auto-fill,minmax(100%,1fr))!important;grid-row-gap:.1em;grid-column-gap:.1em;text-align:center;border:none!important;font-family:var(--suku-primary-font);height:auto!important}.pT{padding-top:10px!important;padding-left:0!important}nav ul li{font-size:15px!important;cursor:pointer;font-family:Poppins,sans-serif;letter-spacing:-.3px;color:rgba(255,255,255,.5);letter-spacing:-.4px;border-bottom:2px solid rgba(0,0,0,.08)!important}.bgColor1{background:#696767a1;color:var(--suku-text-label-two);padding-left:0!important;padding-right:0!important;border-left:20px;border-bottom-left-radius:8px;border-bottom-right-radius:8px}.pT a:hover{border-bottom:0 solid!important;padding-bottom:0!important;color:var(--suku-text-label-two)}.btLine{margin-left:0!important}.userColor{margin-right:6px!important}.wrapper li{padding:3px!important;margin-left:0;margin-right:0;align-items:left;text-align:left}.wrapper li:hover{border-radius:0!important;color:#fff;background:0 0!important}.mobResponse{display:block!important}.mobResponse1{display:none}.useralign{text-align:end!important}}.flRight{float:right;color:#d6d6d6}@media (max-width:1440px){.mobResponse{display:none}}@media (min-width:1440px){.mobResponse{display:none}}@media only screen and (max-width:1440px) and (min-width:1440px){.mobResponse{display:none}}.count{width:20px;height:20px;float:left;font-size:11px;color:#000;line-height:20px;letter-spacing:-.04em;text-align:center;background:#d8fc40;border-radius:360px;position:relative;top:-15px;right:12px}"]
                    }] }
        ];
        /** @nocollapse */
        SukuNavBarComponent.ctorParameters = function () { return []; };
        SukuNavBarComponent.propDecorators = {
            userIcon: [{ type: i0.Input, args: ['user-icon',] }],
            UserName: [{ type: i0.Input, args: ['User-name',] }],
            userNameColor: [{ type: i0.Input, args: ['user-name-color',] }],
            userNameFontWeight: [{ type: i0.Input, args: ['user-name-font-weight',] }],
            userNameFontSize: [{ type: i0.Input, args: ['user-name-font-size',] }],
            navbarBgColor: [{ type: i0.Input, args: ['navbar-bg-color',] }],
            subMenuList: [{ type: i0.Input }],
            navbarCustomClass: [{ type: i0.Input, args: ['navbar-custom-class',] }],
            submenuCustomClass: [{ type: i0.Input, args: ['submenu-custom-class',] }],
            logoCustomClass: [{ type: i0.Input, args: ['logo-custom-class',] }],
            nameCustomClass: [{ type: i0.Input, args: ['name-custom-class',] }],
            data: [{ type: i0.Input }]
        };
        return SukuNavBarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuUserDetailsComponent = /** @class */ (function () {
        function SukuUserDetailsComponent() {
            this.widgetTitle = 'User Information';
            this.widgetTitleColor = '';
            this.widgetTitleWeight = '';
            this.widgetTitleSize = '';
            this.widgetTitlecustomclass = '';
            this.widgetTitleid = '';
            this.shippingaddressCustomClass = '';
        }
        /**
         * @return {?}
         */
        SukuUserDetailsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SukuUserDetailsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'suku-user-details',
                        template: "<div class=\"headingStyle\" [style.font-size.px]=\"widgetTitleSize\" [class]=\"widgetTitlecustomclass\" id=\"{{widgetTitleid}}\"\n  [style.font-weight]=\"widgetTitleWeight\" [style.color]=\"widgetTitleColor\">{{widgetTitle}} </div>\n<div class=\"article mb-3 p-0 pt-3\">\n  <div class=\"col-sm-12 col-xs-12 border\">\n    <div class=\"col-sm-12 col-xs-12 pt-3 p-2\">\n      <div class=\"font_weight contentStyle shipping-address\" [class]=\"shippingaddressCustomClass\">\n        <p class=\"mb-1\"><span>{{fullName}}</span></p>\n        <p class=\"mb-1\">{{email}}</p>\n        <p class=\"mb-1\">{{phoneNumber}}</p>\n        <p class=\"mb-1\">{{fullAddress}}</p>\n    </div>\n  </div>\n</div>",
                        styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.headingStyle{font-family:var(--suku-primary-font);padding-bottom:9px}.contentStyle{padding-top:15px}.marginBottom22{margin-bottom:22px}.shipping-address{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#020202d9;margin-bottom:1px;text-transform:capitalize}.article{width:100%;float:left}"]
                    }] }
        ];
        /** @nocollapse */
        SukuUserDetailsComponent.ctorParameters = function () { return []; };
        SukuUserDetailsComponent.propDecorators = {
            widgetTitle: [{ type: i0.Input }],
            widgetTitleColor: [{ type: i0.Input }],
            widgetTitleWeight: [{ type: i0.Input }],
            widgetTitleSize: [{ type: i0.Input }],
            widgetTitlecustomclass: [{ type: i0.Input }],
            widgetTitleid: [{ type: i0.Input }],
            shippingaddressCustomClass: [{ type: i0.Input }],
            email: [{ type: i0.Input }],
            phoneNumber: [{ type: i0.Input }],
            fullName: [{ type: i0.Input }],
            fullAddress: [{ type: i0.Input }],
            firstName: [{ type: i0.Input }],
            secondName: [{ type: i0.Input }],
            addressOne: [{ type: i0.Input }],
            addressTwo: [{ type: i0.Input }],
            city: [{ type: i0.Input }],
            state: [{ type: i0.Input }],
            zip: [{ type: i0.Input }],
            country: [{ type: i0.Input }]
        };
        return SukuUserDetailsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SukuWebcomponentsModule = /** @class */ (function () {
        function SukuWebcomponentsModule() {
        }
        SukuWebcomponentsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            SukuCardLineComponent,
                            SukuDashboardProfileComponent,
                            SukuHeadingComponent,
                            SukuHomeItalicHeadingComponent,
                            SukuHomeWidgetComponent,
                            SukuInlineDropdownComponent,
                            SukuMailWidgetComponent,
                            SukuMatchChipComponent,
                            SukuNotificationWidgetComponent,
                            SukuProgressBarTypeOneComponent,
                            SukuProgressBarTypeTwoComponent,
                            SukuSubHeadingComponent,
                            SukuLinkComponent,
                            SukuSelectInputComponent,
                            SukuNavSubmenuComponent,
                            SukuBidInfoComponent,
                            SukuPhoneWidgetComponent,
                            SukuAddressWidgetComponent,
                            SukuSearchInputComponent,
                            SukuProfileWidgetComponent,
                            SukuStarBadgeComponent,
                            SukuFiltersComponent,
                            SukuTrackProgressBarComponent,
                            SukuProductTraceWidgetComponent,
                            SukuTreeComponent,
                            SukuCardTitleComponent,
                            SukuRatingStarComponent,
                            SukuShippingWidgetComponent,
                            SukuResponseComponent,
                            SukuTransactionHistoryComponent,
                            SukuFundingSourceComponent,
                            SukuCreateCustomerComponent,
                            SukuBeneficialOwnerComponent,
                            SukuDwollaFundingAgreementComponent,
                            SukuDwollaFundingSourceComponent,
                            SukuCreationCustomerFileuploadComponent,
                            SukuPaymentPortalHelpComponent,
                            SukuTermsAndConditionsComponent,
                            SukuCardLineTypeOneComponent,
                            SukuCardLineTypeTwoComponent,
                            SukuRatingCardLineComponent,
                            SukuNotificationPanelComponent,
                            SukuAddIconComponent,
                            SukuHomepageComponent,
                            SukuHomepageSectionComponent,
                            SukuProfileHeaderComponent,
                            SukuSocialIconsComponent,
                            SukuRadioButtonComponent,
                            SukuDropdownComponent,
                            SukuHeaderComponent,
                            SukuTitleHeaderComponent,
                            SukuShippingInfoWidgetComponent,
                            SukuImageWidgetComponent,
                            SukuChatWidgetComponent,
                            ScrollToBottomDirective,
                            SukuLargeBidTagComponent,
                            SukuBidWidgetTagComponent,
                            SukuGalleryComponent,
                            SukuCheckboxComponent,
                            SukuUserInputComponent,
                            SukuWysiwygEditorComponent,
                            SukuProfileImageIconComponent,
                            SukuConfirmationModalComponent,
                            SukuAddLicenseModalComponent,
                            SukuGalleryUploadComponent,
                            SukuChipListComponent,
                            SukuDateTimePickerComponent,
                            SukuIconWidgetComponent,
                            SukuDropdownWfcComponent,
                            SukuDateComponent,
                            SukuLoginComponent,
                            SukuProgressBarTypeThreeComponent,
                            SukuDisplayTableComponent,
                            SukuUsernameIconWidgetComponent,
                            SukuNavBarComponent,
                            SukuUserDetailsComponent
                        ],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            ngxCountdownTimer.CountdownTimerModule,
                            material.MatAutocompleteModule,
                            material.MatBadgeModule,
                            material.MatBottomSheetModule,
                            material.MatButtonModule,
                            material.MatButtonToggleModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            material.MatChipsModule,
                            material.MatDatepickerModule,
                            material.MatDialogModule,
                            material.MatDividerModule,
                            material.MatExpansionModule,
                            material.MatGridListModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            material.MatListModule,
                            material.MatMenuModule,
                            material.MatNativeDateModule,
                            material.MatPaginatorModule,
                            material.MatProgressBarModule,
                            material.MatProgressSpinnerModule,
                            material.MatRadioModule,
                            material.MatRippleModule,
                            material.MatSelectModule,
                            material.MatSidenavModule,
                            material.MatSliderModule,
                            material.MatSlideToggleModule,
                            material.MatSnackBarModule,
                            material.MatSortModule,
                            material.MatStepperModule,
                            material.MatTableModule,
                            material.MatTabsModule,
                            material.MatToolbarModule,
                            material.MatTooltipModule,
                            SukuModalModule,
                            SukuAchSettingModule,
                            SukuAddIconWidgetModule,
                            SukuBidTagModule,
                            SukuButtonsModule,
                            SukuFormFooterModule,
                            SukuLoaderModule,
                            SukuFileUploadModule,
                            ngxQuill.QuillModule,
                            ngPickDatetime.OwlDateTimeModule,
                            ngPickDatetime.OwlNativeDateTimeModule
                        ],
                        providers: [SukuModalService, SukuLoaderService],
                        exports: [
                            SukuCardLineComponent,
                            SukuDashboardProfileComponent,
                            SukuHeadingComponent,
                            SukuHomeItalicHeadingComponent,
                            SukuHomeWidgetComponent,
                            SukuInlineDropdownComponent,
                            SukuMailWidgetComponent,
                            SukuMatchChipComponent,
                            SukuNotificationWidgetComponent,
                            SukuProgressBarTypeOneComponent,
                            SukuProgressBarTypeTwoComponent,
                            SukuSubHeadingComponent,
                            SukuLinkComponent,
                            SukuSelectInputComponent,
                            SukuNavSubmenuComponent,
                            SukuBidInfoComponent,
                            SukuPhoneWidgetComponent,
                            SukuAddressWidgetComponent,
                            SukuSearchInputComponent,
                            SukuProfileWidgetComponent,
                            SukuStarBadgeComponent,
                            SukuFiltersComponent,
                            SukuTrackProgressBarComponent,
                            SukuProductTraceWidgetComponent,
                            SukuTreeComponent,
                            SukuCardTitleComponent,
                            SukuRatingStarComponent,
                            SukuShippingWidgetComponent,
                            SukuResponseComponent,
                            SukuTransactionHistoryComponent,
                            SukuFundingSourceComponent,
                            SukuCreateCustomerComponent,
                            SukuBeneficialOwnerComponent,
                            SukuDwollaFundingAgreementComponent,
                            SukuDwollaFundingSourceComponent,
                            SukuCreationCustomerFileuploadComponent,
                            SukuPaymentPortalHelpComponent,
                            SukuTermsAndConditionsComponent,
                            SukuCardLineTypeOneComponent,
                            SukuCardLineTypeTwoComponent,
                            SukuRatingCardLineComponent,
                            SukuNotificationPanelComponent,
                            SukuAddIconComponent,
                            SukuHomepageComponent,
                            SukuHomepageSectionComponent,
                            SukuProfileHeaderComponent,
                            SukuSocialIconsComponent,
                            SukuRadioButtonComponent,
                            SukuDropdownComponent,
                            SukuHeaderComponent,
                            SukuTitleHeaderComponent,
                            SukuShippingInfoWidgetComponent,
                            SukuImageWidgetComponent,
                            SukuChatWidgetComponent,
                            ScrollToBottomDirective,
                            SukuLargeBidTagComponent,
                            SukuGalleryComponent,
                            SukuCheckboxComponent,
                            SukuUserInputComponent,
                            SukuButtonsModule,
                            SukuBidWidgetTagComponent,
                            SukuAddIconWidgetModule,
                            SukuFileUploadModule,
                            SukuModalModule,
                            SukuWysiwygEditorComponent,
                            SukuProfileImageIconComponent,
                            SukuConfirmationModalComponent,
                            SukuAddLicenseModalComponent,
                            SukuGalleryUploadComponent,
                            SukuChipListComponent,
                            SukuDateTimePickerComponent,
                            SukuIconWidgetComponent,
                            SukuDropdownWfcComponent,
                            SukuDateComponent,
                            SukuLoginComponent,
                            SukuProgressBarTypeThreeComponent,
                            SukuDisplayTableComponent,
                            SukuUsernameIconWidgetComponent,
                            SukuNavBarComponent,
                            SukuUserDetailsComponent
                        ],
                        entryComponents: [SukuConfirmationModalComponent, SukuAddLicenseModalComponent],
                        schemas: [],
                    },] }
        ];
        return SukuWebcomponentsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var suku = {
        name: 'suku',
        properties: {
            '--suku-primary-font': "'Poppins', sans-serif",
            '--suku-secondary-font': "'Encode Sans', sans-serif",
            '--suku-ternary-font': "'abelregular', sans-serif",
            '--suku-primary-color': '#a7bf2e',
            '--suku-secondary-color': '#d8fc40',
            '--suku-warning-color': '#FF0000',
            '--suku-bg-primary': '#2f2e2e',
            '--suku-bg-secondary': '#272727',
            '--suku-bg-ternary': '#35393e',
            '--suku-homepage-bg': '#ffffff',
            '--suku-button-default-bg': '#303030',
            '--suku-button-disabled-bg': '#d9d9d9',
            '--suku-icon-disabled-color': '#7f7f7f',
            '--suku-default-icon-color': '#b6b6b6',
            '--suku-text-heading': '#1d1d1d',
            '--suku-text-sub-heading': '#cccccc',
            '--suku-text-label-one': '#b6b6b6',
            '--suku-text-label-two': '#ffffff',
            '--suku-text-label-three': '#f2f2f2',
            '--suku-text-link': '#3e3e3e',
            '--suku-text-info': '#757575',
            '--suku-primary-border-color': '#a7bf2e',
            '--suku-default-border-color': '#e2e2e2',
            '--suku-secondary-border-color': '#757575',
            '--suku-primary-border-radius': '0 40px 0 0',
            '--suku-secondary-border-radius': '0px 0px 41px 41px',
            '--suku-search-border-radius': '10px 18px 18px 16px',
            '--suku-default-border-radius': '0px',
            '--suku-default-button-border-radius': '28px 76px 63px',
            '--suku-star-empty-bg': '#e1e1e1',
            '--suku-star-full-bg': 'rgb(137, 137, 137)',
            '--suku-star-size': '20px',
            '--suku-filter-bg': '#ffffff',
            '--suku-default-bg': '#ffffff',
            '--suku-filter-label': '#b6b6b6',
            '--suku-filter-label-selected': 'black',
            '--suku-progressbar-active-bg': '#a7bf2e',
            '--suku-progressbar-upcoming-bg': '#757575',
            '--suku-progressbar-completed-bg': '#1c1c1c',
            '--suku-profile-bg-color': '#b6b6b6',
            '--suku-profile-text-one': '#dcd8d8f0',
            '--suku-profile-text-two': '#504e4e',
            '--suku-font-size-1': '11px',
            // 0.75rem
            '--suku-font-size-2': '12px',
            // 0.875rem
            '--suku-font-size-3': '14px',
            // 1.0625rem
            '--suku-font-size-4': '15px',
            // 1.0625remm
            '--suku-font-size-5': '17px',
            // 1.25rem
            '--suku-font-size-6': '20px',
            // 1.5rem
            '--suku-font-size-7': '22px',
            // 1.625rem
            '--suku-font-size-8': '24px',
            // 1.625rem
            '--suku-font-size-9': '26px',
            // 1.875rem
            '--suku-font-size-10': '30px',
            // 1.875rem
            '--suku-font-size-11': '50px',
        }
    };
    /** @type {?} */
    var dark = {
        name: 'dark',
        properties: {
            '--suku-primary-font': "'Poppins', sans-serif",
            '--suku-secondary-font': "'Encode Sans', sans-serif",
            '--suku-ternary-font': "'\"abelregular\", sans-serif",
            '--suku-primary-color': '#363b4e',
            '--suku-secondary-color': '#d8fc40',
            '--suku-warning-color': '#FF0000',
            '--suku-bg-primary': '#363b4e',
            '--suku-bg-secondary': '#272727',
            '--suku-bg-ternary': '#35393e',
            '--suku-homepage-bg': '#ffffff',
            '--suku-button-default-bg': '#303030',
            '--suku-button-disabled-bg': '#d9d9d9',
            '--suku-icon-disabled-color': '#7f7f7f',
            '--suku-default-icon-color': '#b6b6b6',
            '--suku-text-heading': '#1d1d1d',
            '--suku-text-sub-heading': '#f2f2f2',
            '--suku-text-label-one': '#b6b6b6',
            '--suku-text-label-two': '#ffffff',
            '--suku-text-label-three': '#f2f2f2',
            '--suku-text-link': '#3e3e3e',
            '--suku-text-info': '#757575',
            '--suku-primary-border-color': '#f2f2f2',
            '--suku-secondary-border-color': '#757575',
            '--suku-primary-border-radius': '0',
            '--suku-secondary-border-radius': '0px 0px 41px 41px',
            '--suku-default-border-radius': '0px 20px 15px',
            '--suku-default-button-border-radius': '28px 76px 63px',
            '--suku-search-border-radius': '10px 18px 18px 16px',
            '--suku-star-empty-bg': '#e1e1e1',
            '--suku-star-full-bg': 'rgb(137, 137, 137)',
            '--suku-star-size': '20px',
            '--suku-filter-bg': 'black',
            '--suku-filter-label': '#b6b6b6',
            '--suku-filter-label-selected': '#ffffff',
            '--suku-progressbar-inprogress-bg': '#a7bf2e',
            '--suku-progressbar-upcoming-bg': '#757575',
            '--suku-progressbar-completed-bg': '#1c1c1c',
            '--suku-submenu-bg-color': '',
            '--suku-font-size-1': '0.75rem',
            // 12px	- 0.75rem
            '--suku-font-size-2': '0.875rem',
            // 14px	0.875rem
            '--suku-font-size-3': '1.06rem',
            // 17px	1.0625rem
            '--suku-font-size-4': '1.25rem',
            // 20px	1.25rem
            '--suku-font-size-5': '1.5rem',
            //  24px	1.5rem
            '--suku-font-size-6': '1.625rem',
            // 26px	1.625rem
            '--suku-font-size-7': '1.8rem',
            //  30px	1.875rem
            '--suku-font-size-8': '2rem',
            //  32px	1.875rem
            '--suku-font-size-10': '3rem',
            // 30px	1.875rem
            '--suku-font-size-11': '3.5rem' // 50px	1.875rem
        }
    };
    /** @type {?} */
    var light = {
        name: 'light',
        properties: {
            '--suku-primary-font': "'Source Sans Pro', sans-serif",
            '--suku-secondary-font': "SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace",
            '--suku-ternary-font': "'\"abelregular\", sans-serif",
            '--suku-primary-color': '#a7bf2e',
            '--suku-secondary-color': '#b3b3b3',
            '--suku-warning-color': '#FF0000',
            '--suku-bg-primary': '#a6c36f',
            '--suku-bg-secondary': '#282828',
            '--suku-bg-ternary': '#35393e',
            '--suku-homepage-bg': '#ffffff',
            '--suku-button-default-bg': '#303030',
            '--suku-button-disabled-bg': '#d9d9d9',
            '--suku-icon-disabled-color': '#7f7f7f',
            '--suku-default-icon-color': '#b6b6b6',
            '--suku-text-heading': '#1d1d1d',
            '--suku-text-sub-heading': '#1d1d1d',
            '--suku-text-label-one': '#b6b6b6',
            '--suku-text-label-two': 'black',
            '--suku-text-label-three': '#f2f2f2',
            '--suku-text-link': '#3e3e3e',
            '--suku-text-info': '#757575',
            '--suku-primary-border-color': '#151515',
            '--suku-secondary-border-color': '#757575',
            '--suku-primary-border-radius': '0px 15px 10px 0px',
            '--suku-secondary-border-radius': '0px 0px 41px 41px',
            '--suku-default-border-radius': '10px 10px 20px 5px',
            '--suku-default-button-border-radius': '28px 76px 63px',
            '--suku-search-border-radius': '10px 18px 18px 16px',
            '--suku-filter-bg': 'black',
            '--suku-filter-label': '#b6b6b6',
            '--suku-filter-label-selected': '#ffffff',
            '--suku-progressbar-active-bg': '#a7bf2e',
            '--suku-progressbar-upcoming-bg': '#757575',
            '--suku-progressbar-completed-bg': '#1c1c1c',
            '--suku-font-size-1': '0.75rem',
            // 12px	- 0.75rem
            '--suku-font-size-2': '0.875rem',
            // 14px	0.875rem
            '--suku-font-size-3': '1.06rem',
            // 17px	1.0625rem
            '--suku-font-size-4': '1.25rem',
            // 20px	1.25rem
            '--suku-font-size-5': '1.5rem',
            //  24px	1.5rem
            '--suku-font-size-6': '1.625rem',
            // 26px	1.625rem
            '--suku-font-size-7': '1.8rem',
            //  30px	1.875rem
            '--suku-font-size-8': '2rem',
            //  32px	1.875rem
            '--suku-font-size-10': '3rem',
            // 30px	1.875rem
            '--suku-font-size-11': '3.5rem' // 50px	1.875rem
        }
    };
    var SukuWebcomponentsService = /** @class */ (function () {
        function SukuWebcomponentsService() {
            this.active = suku;
        }
        /**
         * @return {?}
         */
        SukuWebcomponentsService.prototype.setLightTheme = /**
         * @return {?}
         */
            function () {
                this.setActiveTheme(light);
            };
        /**
         * @return {?}
         */
        SukuWebcomponentsService.prototype.setDarkTheme = /**
         * @return {?}
         */
            function () {
                this.setActiveTheme(dark);
            };
        /**
         * @return {?}
         */
        SukuWebcomponentsService.prototype.setSukuTheme = /**
         * @return {?}
         */
            function () {
                console.log('suku');
                this.setActiveTheme(suku);
            };
        /**
         * @private
         * @param {?} theme
         * @return {?}
         */
        SukuWebcomponentsService.prototype.setActiveTheme = /**
         * @private
         * @param {?} theme
         * @return {?}
         */
            function (theme) {
                var _this = this;
                this.active = theme;
                Object.keys(this.active.properties).forEach(( /**
                 * @param {?} property
                 * @return {?}
                 */function (property) {
                    document.documentElement.style.setProperty(property, _this.active.properties[property]);
                }));
            };
        SukuWebcomponentsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SukuWebcomponentsService.ctorParameters = function () { return []; };
        /** @nocollapse */ SukuWebcomponentsService.ngInjectableDef = i0.defineInjectable({ factory: function SukuWebcomponentsService_Factory() { return new SukuWebcomponentsService(); }, token: SukuWebcomponentsService, providedIn: "root" });
        return SukuWebcomponentsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.SukuFormFooterModule = SukuFormFooterModule;
    exports.SukuAchSettingModule = SukuAchSettingModule;
    exports.SukuAddIconWidgetModule = SukuAddIconWidgetModule;
    exports.SukuBidTagModule = SukuBidTagModule;
    exports.SukuButtonsModule = SukuButtonsModule;
    exports.SukuLoaderModule = SukuLoaderModule;
    exports.SukuModalModule = SukuModalModule;
    exports.SukuModalService = SukuModalService;
    exports.SukuFileUploadModule = SukuFileUploadModule;
    exports.SukuWebcomponentsModule = SukuWebcomponentsModule;
    exports.suku = suku;
    exports.dark = dark;
    exports.light = light;
    exports.SukuWebcomponentsService = SukuWebcomponentsService;
    exports.SukuLoaderService = SukuLoaderService;
    exports.ɵb = SukuACHSettingsComponent;
    exports.ɵcd = SukuAddIconComponent;
    exports.ɵcy = SukuAddLicenseModalComponent;
    exports.ɵc = SukuAddWidgetComponent;
    exports.ɵbe = SukuAddressWidgetComponent;
    exports.ɵbt = SukuBeneficialOwnerComponent;
    exports.ɵbc = SukuBidInfoComponent;
    exports.ɵcq = SukuLargeBidTagComponent;
    exports.ɵd = SukuBidTagComponent;
    exports.ɵcr = SukuBidWidgetTagComponent;
    exports.ɵh = SukuDefaultButtonComponent;
    exports.ɵi = SukuHomepageButtonComponent;
    exports.ɵe = SukuInfoButtonComponent;
    exports.ɵf = SukuPrimaryButtonComponent;
    exports.ɵg = SukuSecondaryButtonComponent;
    exports.ɵbz = SukuCardLineTypeOneComponent;
    exports.ɵca = SukuCardLineTypeTwoComponent;
    exports.ɵn = SukuCardLineComponent;
    exports.ɵbm = SukuCardTitleComponent;
    exports.ɵcp = ScrollToBottomDirective;
    exports.ɵco = SukuChatWidgetComponent;
    exports.ɵct = SukuCheckboxComponent;
    exports.ɵda = SukuChipListComponent;
    exports.ɵcx = SukuConfirmationModalComponent;
    exports.ɵk = SukuConfirmationComponent;
    exports.ɵbs = SukuCreateCustomerComponent;
    exports.ɵbw = SukuCreationCustomerFileuploadComponent;
    exports.ɵo = SukuDashboardProfileComponent;
    exports.ɵdb = SukuDateTimePickerComponent;
    exports.ɵde = SukuDateComponent;
    exports.ɵdh = SukuDisplayTableComponent;
    exports.ɵdd = SukuDropdownWfcComponent;
    exports.ɵcj = SukuDropdownComponent;
    exports.ɵbu = SukuDwollaFundingAgreementComponent;
    exports.ɵbv = SukuDwollaFundingSourceComponent;
    exports.ɵm = SukuDropZoneDirective;
    exports.ɵl = SukuFileUploadComponent;
    exports.ɵbi = SukuFiltersComponent;
    exports.ɵa = SukuFormFooterComponent;
    exports.ɵbr = SukuFundingSourceComponent;
    exports.ɵcz = SukuGalleryUploadComponent;
    exports.ɵcs = SukuGalleryComponent;
    exports.ɵck = SukuHeaderComponent;
    exports.ɵp = SukuHeadingComponent;
    exports.ɵq = SukuHomeItalicHeadingComponent;
    exports.ɵr = SukuHomeWidgetComponent;
    exports.ɵcf = SukuHomepageSectionComponent;
    exports.ɵce = SukuHomepageComponent;
    exports.ɵdc = SukuIconWidgetComponent;
    exports.ɵcn = SukuImageWidgetComponent;
    exports.ɵs = SukuInlineDropdownComponent;
    exports.ɵz = SukuLinkComponent;
    exports.ɵj = SukuLoaderComponent;
    exports.ɵdf = SukuLoginComponent;
    exports.ɵt = SukuMailWidgetComponent;
    exports.ɵu = SukuMatchChipComponent;
    exports.ɵdj = SukuNavBarComponent;
    exports.ɵbb = SukuNavSubmenuComponent;
    exports.ɵcc = SukuNotificationPanelComponent;
    exports.ɵv = SukuNotificationWidgetComponent;
    exports.ɵbx = SukuPaymentPortalHelpComponent;
    exports.ɵbd = SukuPhoneWidgetComponent;
    exports.ɵbk = SukuProductTraceWidgetComponent;
    exports.ɵcg = SukuProfileHeaderComponent;
    exports.ɵcw = SukuProfileImageIconComponent;
    exports.ɵbg = SukuProfileWidgetComponent;
    exports.ɵw = SukuProgressBarTypeOneComponent;
    exports.ɵdg = SukuProgressBarTypeThreeComponent;
    exports.ɵx = SukuProgressBarTypeTwoComponent;
    exports.ɵci = SukuRadioButtonComponent;
    exports.ɵcb = SukuRatingCardLineComponent;
    exports.ɵbn = SukuRatingStarComponent;
    exports.ɵbp = SukuResponseComponent;
    exports.ɵbf = SukuSearchInputComponent;
    exports.ɵba = SukuSelectInputComponent;
    exports.ɵcm = SukuShippingInfoWidgetComponent;
    exports.ɵbo = SukuShippingWidgetComponent;
    exports.ɵch = SukuSocialIconsComponent;
    exports.ɵbh = SukuStarBadgeComponent;
    exports.ɵy = SukuSubHeadingComponent;
    exports.ɵby = SukuTermsAndConditionsComponent;
    exports.ɵcl = SukuTitleHeaderComponent;
    exports.ɵbj = SukuTrackProgressBarComponent;
    exports.ɵbq = SukuTransactionHistoryComponent;
    exports.ɵbl = SukuTreeComponent;
    exports.ɵdk = SukuUserDetailsComponent;
    exports.ɵcu = SukuUserInputComponent;
    exports.ɵdi = SukuUsernameIconWidgetComponent;
    exports.ɵcv = SukuWysiwygEditorComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=suku-webcomponents.umd.js.map