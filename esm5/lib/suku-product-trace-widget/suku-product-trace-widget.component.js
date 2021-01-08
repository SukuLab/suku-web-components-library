/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-product-trace-widget/suku-product-trace-widget.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
        this.btnOneAction = new EventEmitter();
        /*  */
        this.btnTwoId = 'traceTheProduct';
        this.btnTwoSize = '';
        this.btnTwoWeight = '600';
        this.btnLabelTwo = 'trace the product';
        this.btnTwoCustomClass = '';
        this.btnTwoAction = new EventEmitter();
        this.messageOne = 'products found with the above number';
        this.messageTwo = 'please select one';
        this.traceMethodRadio = 'method';
        this.tracetheProductId = '';
        this.searchFun = new EventEmitter();
        this.selectproducts = new EventEmitter();
        this.productdetails = [];
    }
    Object.defineProperty(SukuProductTraceWidgetComponent.prototype, "disableBtn", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disableBtn;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._disableBtn = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuProductTraceWidgetComponent.prototype, "result", {
        get: /**
         * @return {?}
         */
        function () {
            return this._result;
        },
        set: /**
         * @param {?} res
         * @return {?}
         */
        function (res) {
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
         */
        function () {
            return this._visible;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
        { type: Component, args: [{
                    selector: 'suku-product-trace-widget',
                    template: "<span [formGroup]=\"form\">\n  <div class=\"product-boxContent col-lg-12\">\n    <div class=\"col-lg-12 traceMethod {{labelOneCustomClass}} pl-0\" [id]=\"labelOneId\">\n      {{labelOne}}\n    </div>\n    <div class=\"col-lg-12 traceSearchType {{labelTwoCustomClass}} pl-0 mb-2\" [id]=\"labelTwoId\">\n      {{labelTwo}}\n    </div>\n  </div>\n  <div class=\"col-sm-12 mt-2 pt-4 pb-4 traceBox {{traceBoxCustomClass}}\">\n    <div class=\"col-sm-12 productName pb-1 {{labelThreeCustomClass}}\" [id]=\"labelThree\">\n      {{labelThree}}\n    </div>\n    <div class=\"col-sm-12 pl-3 pb-2 pt-2 p-0 searchBorderBox\">\n      <input type=\"text\" [id]=\"searchInputId\" class=\"searchbox\" formControlName=\"{{control}}\" name=\"{{control}}\"\n        (keyup)=\"searchFun.emit(isSearch)\" (keyup.enter)=\"btnOneAction.emit()\">\n      <span class=\"float-right pr-3\"><i class=\"fa fa-search {{searchIconCustomClass}}\"></i></span>\n    </div>\n    <p class=\"resultCount\" *ngIf=\"_result == 'true'\">{{productdetails?.length}} {{messageOne}}.\n    </p>\n    <div *ngIf=\"_visible == 'false'\">\n      <p class=\"responseInfo\" *ngIf=\"productdetails?.length > 0 ? true : false \">{{messageTwo}}</p>\n      <div class=\"heightTab\" id=\"scrollDiv\">\n        <mat-radio-group class=\"example-radio-group\" [formControlName]=\"radioFormControl\">\n          <div class=\"col\" *ngFor=\"let products of productdetails;let productIndex=index\">\n            <mat-radio-button class=\"searchData\" [color]=\"color\" (click)=\"selectproducts.emit(products)\"\n              [value]=\"productIndex\" id=\"product{{productIndex}}\">\n              <span class=\"col p-0 product-label\">\n                <p  class=\"mb-1\" [innerHtml]=\"products?.asset?.description\"></p>\n                {{products?.asset?.name}}\n              </span>\n            </mat-radio-button>\n            <hr>\n          </div>\n        </mat-radio-group>\n      </div>\n    </div>\n    <div class=\"col-sm-12 mb-2 text-center pt-3 mt-3 pb-1\">\n      <span class=\"pt-2\">\n        <button *ngIf=\"_visible == 'true'\" class=\"suku-i suku-{{btnType}} {{btnOneCustomClass}}\"\n          [ngClass]=\"{'disabled' : btnOneDisable}\" [disabled]=\"btnOneDisable\" [style.font-size.rem]=\"btnOneSize\"\n          [style.font-weight]=\"btnOneWeight\" [id]=\"btnOneId\" (click)=\"btnOneAction.emit()\">\n          {{btnLabelOne}}\n        </button>\n        <button *ngIf=\"_visible == 'false'\" class=\"suku-i suku-{{btnType}} {{btnTwoCustomClass}}\"\n          [ngClass]=\"{'disabled' : btnTwoDisable}\" [disabled]=\"btnTwoDisable\" [style.font-size.rem]=\"btnTwoSize\"\n          [style.font-weight]=\"btnTwoWeight\" [id]=\"btnTwoId\" (click)=\"btnTwoAction.emit()\">\n          {{btnLabelTwo}}\n        </button>\n      </span>\n    </div>\n  </div>\n</span>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.product-boxContent{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 5px 15px}.traceMethod{font-size:var(--suku-font-size-3);font-family:var(--suku-primary-font);color:var(--suku-text-label-one);line-height:1em;margin:0 0 8px}.traceSearchType{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-3);color:var(--suku-text-label-one);line-height:1em;margin:0 0 12px}.traceBox{background-color:var(--suku-default-bg);box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);border-radius:0;padding-right:20px;padding-left:20px}.productName{color:#7f7e7e;font-size:13px}.searchIcon{font-size:var(--suku-font-size-5);color:var(--suku-text-label-one);color:var(--suku-default-icon-color)}.searchbox{width:85%;border-width:0}.searchbox:focus{outline:0}.product-label{white-space:normal;vertical-align:middle;text-align:justify}@media only screen and (max-width:319px){.searchbox{width:70%}}@media only screen and (max-width:1024px){.searchbox{width:83%}}.searchBorderBox{border:1px solid var(--suku-text-label-one);border-radius:12px 25.5px 25.5px;font-size:15px;margin-top:7px}.productCount{color:var(--suku-text-label-one);font-size:12px}.trackBtn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-1);padding:.55rem .99rem;border-radius:var(--suku-default-button-border-radius);background:var(--suku-primary-color)!important}.trackBtn:focus,.trackBtn:hover{color:#fff!important;font-size:var(--suku-font-size-1);cursor:pointer;background:var(--suku-primary-color)!important}.trackBtn.disabled:hover{color:#000!important;background:var(--suku-default-bg)}.searchData{word-break:normal;font-size:13px;color:var(--suku-text-label-one);font-family:var(--suku-primary-font)}.resultCount{color:#898787;font-size:12px;padding-left:13px}.responseInfo{color:var(--suku-text-label-one);font-size:12px;padding-left:13px}.heightTab{max-height:230px;overflow-x:hidden}::-webkit-scrollbar-thumb{background:var(--suku-primary-color);border-radius:60px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 var(--suku-primary-color);border-radius:60px}.searchData>label{white-space:pre-wrap!important;line-height:normal!important;white-space:pre-wrap}#scrollDiv::-webkit-scrollbar{width:6px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:60px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:var(--suku-primary-color)!important}.mat-radio-button.mat-accent .mat-radio-inner-circle::before{font-family:\"Font Awesome 5 Free\",sans-serif!important;content:\"\\f058\"!important;display:inline-block!important;vertical-align:middle;font-weight:900;font-size:35px!important;color:var(--suku-primary-color);margin:-7.6px 0 0 -8px!important}.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#fafafa!important}.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:var(--suku-primary-color)!important}.suku-i{border:2px solid;border-radius:28px 76px 63px;color:#3e3e3e;font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;padding:.55rem 2rem!important}.suku-i:hover{color:#fff;cursor:pointer}.suku-i:focus{outline:0!important}.suku-i.disabled:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:var(--suku-text-link);cursor:not-allowed}.suku-info{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-text-label-two);color:var(--suku-text-heading)}.suku-info:active,.suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.suku-info.disabled{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:grey}.suku-info.disabled.focus,.suku-info.disabled:focus,.suku-info.disabled:hover,.suku-info[disabled].focus,.suku-info[disabled]:focus,.suku-info[disabled]:hover,fieldset[disabled] .suku-info.focus,fieldset[disabled] .suku-info:focus,fieldset[disabled] .suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff!important;color:grey;outline:0}.suku-info.focus,.suku-info:focus{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.open>.dropdown-toggle .suku-info.focus,.open>.dropdown-toggle .suku-info:focus,.open>.dropdown-toggle.suku-info:hover,.suku-info.active.focus,.suku-info.active:focus,.suku-info.active:hover,.suku-info:active.focus,.suku-info:active:focus,.suku-info:active:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.show>.suku-info.dropdown-toggle,.suku-info:not(:disabled):not(.disabled).active,.suku-info:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}.show>.suku-info.dropdown-toggle:focus,.suku-info.focus,.suku-info:focus,.suku-info:not(:disabled):not(.disabled).active:focus,.suku-info:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}.suku-default{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-bg-secondary);color:var(--suku-text-label-one)}.suku-default:active,.suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.suku-default.disabled{border:2px solid;border-color:var(--suku-text-info);background-color:#fff;color:grey}.suku-default.disabled.focus,.suku-default.disabled:focus,.suku-default.disabled:hover,.suku-default[disabled].focus,.suku-default[disabled]:focus,.suku-default[disabled]:hover,fieldset[disabled] .suku-default.focus,fieldset[disabled] .suku-default:focus,fieldset[disabled] .suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:#fff!important;color:grey}.suku-default.focus,.suku-default:focus{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.open>.dropdown-toggle .suku-default.focus,.open>.dropdown-toggle .suku-default:focus,.open>.dropdown-toggle.suku-default:hover,.suku-default.active.focus,.suku-default.active:focus,.suku-default.active:hover,.suku-default:active.focus,.suku-default:active:focus,.suku-default:active:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff;outline:0}.show>.suku-default.dropdown-toggle,.suku-default:not(:disabled):not(.disabled).active,.suku-default:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-text-info);border-color:var(--suku-text-info)}.suku-default:focus,.suku-info.focus{box-shadow:none!important;outline:0!important}.show>.suku-default.dropdown-toggle:focus,.suku-default:not(:disabled):not(.disabled).active:focus,.suku-default:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuProductTraceWidgetComponent.ctorParameters = function () { return []; };
    SukuProductTraceWidgetComponent.propDecorators = {
        form: [{ type: Input }],
        color: [{ type: Input }],
        labelOne: [{ type: Input, args: ['label-one',] }],
        labelOneId: [{ type: Input, args: ['label-one-id',] }],
        labelOneCustomClass: [{ type: Input, args: ['label-one-custom-class',] }],
        labelTwo: [{ type: Input, args: ['label-two',] }],
        labelTwoId: [{ type: Input, args: ['label-two-id',] }],
        labelTwoCustomClass: [{ type: Input, args: ['label-two-custom-class',] }],
        labelThree: [{ type: Input, args: ['label-three',] }],
        labelThreeId: [{ type: Input, args: ['label-three-id',] }],
        labelThreeCustomClass: [{ type: Input, args: ['label-three-custom-class',] }],
        traceBoxCustomClass: [{ type: Input, args: ['trace-box-custom-class',] }],
        searchInputId: [{ type: Input, args: ['search-input-id',] }],
        searchIconCustomClass: [{ type: Input, args: ['search-icon-custom-class',] }],
        btnOneId: [{ type: Input, args: ['btn-one-id',] }],
        btnOneSize: [{ type: Input, args: ['btn-one-size',] }],
        btnOneWeight: [{ type: Input, args: ['btn-one-weight',] }],
        btnLabelOne: [{ type: Input, args: ['btn-label-one',] }],
        btnType: [{ type: Input, args: ['btn-type',] }],
        btnOneCustomClass: [{ type: Input, args: ['btn-one-custom-class',] }],
        btnOneDisable: [{ type: Input, args: ['btn-one-disable',] }],
        btnOneAction: [{ type: Output }],
        btnTwoId: [{ type: Input, args: ['btn-two-id',] }],
        btnTwoSize: [{ type: Input, args: ['btn-two-size',] }],
        btnTwoWeight: [{ type: Input, args: ['btn-two-weight',] }],
        btnLabelTwo: [{ type: Input, args: ['btn-label-two',] }],
        btnTwoCustomClass: [{ type: Input, args: ['btn-two-custom-class',] }],
        btnTwoDisable: [{ type: Input, args: ['btn-two-disable',] }],
        btnTwoAction: [{ type: Output }],
        messageOne: [{ type: Input, args: ['message-one',] }],
        messageTwo: [{ type: Input, args: ['message-two',] }],
        control: [{ type: Input }],
        radioFormControl: [{ type: Input, args: ['radio-form-control',] }],
        traceMethodRadio: [{ type: Input }],
        tracetheProductId: [{ type: Input }],
        searchFun: [{ type: Output }],
        selectproducts: [{ type: Output }],
        disableBtn: [{ type: Input }],
        productdetails: [{ type: Input }],
        result: [{ type: Input }],
        visible: [{ type: Input, args: ['visible',] }]
    };
    return SukuProductTraceWidgetComponent;
}());
export { SukuProductTraceWidgetComponent };
if (false) {
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.form;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.val;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.val2;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype._visible;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype._data;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype._disableBtn;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.selectedItem;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.isSearch;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype._result;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.i;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.color;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.labelOne;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.labelOneId;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.labelOneCustomClass;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.labelTwo;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.labelTwoId;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.labelTwoCustomClass;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.labelThree;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.labelThreeId;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.labelThreeCustomClass;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.traceBoxCustomClass;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.searchInputId;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.searchIconCustomClass;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.btnOneId;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.btnOneSize;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.btnOneWeight;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.btnLabelOne;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.btnType;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.btnOneCustomClass;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.btnOneDisable;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.btnOneAction;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.btnTwoId;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.btnTwoSize;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.btnTwoWeight;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.btnLabelTwo;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.btnTwoCustomClass;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.btnTwoDisable;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.btnTwoAction;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.messageOne;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.messageTwo;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.control;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.radioFormControl;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.traceMethodRadio;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.tracetheProductId;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.searchFun;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.selectproducts;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.productdetails;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC9zdWt1LXByb2R1Y3QtdHJhY2Utd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxTQUFTLEVBQ1YsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QjtJQTZGRTtRQXJGQSxRQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ1gsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUtiLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHUixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBRUosZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUc1QixlQUFVLEdBQUcsV0FBVyxDQUFDO1FBTXRCLGtCQUFhLEdBQUcsUUFBUSxDQUFDO1FBQ2hCLDBCQUFxQixHQUFHLFlBQVksQ0FBQzs7UUFHbkQsYUFBUSxHQUFHLGtCQUFrQixDQUFDO1FBQzVCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDZCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUN0QixnQkFBVyxHQUFHLG9CQUFvQixDQUFDO1FBQ3hDLFlBQU8sR0FBRyxNQUFNLENBQUM7UUFDTCxzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFFNUMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztRQUV2QixhQUFRLEdBQUcsaUJBQWlCLENBQUM7UUFDM0IsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNkLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsbUJBQW1CLENBQUM7UUFDM0Isc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBRTVD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WSwrQkFBK0I7OztJQUMxQywrQ0FBeUI7O0lBQ3pCLDhDQUFXOztJQUNYLCtDQUFhOztJQUNiLG1EQUFTOztJQUNULGdEQUFNOztJQUNOLHNEQUFZOztJQUNaLHVEQUFhOztJQUNiLG1EQUFpQjs7SUFDakIsa0RBQVE7O0lBQ1IsNENBQUU7O0lBQ0YsZ0RBQTJCOztJQUMzQixtREFBNkI7O0lBQzdCLHFEQUFtRDs7SUFDbkQsOERBQXFEOztJQUNyRCxtREFBNkI7O0lBQzdCLHFEQUFnRDs7SUFDaEQsOERBQXFEOztJQUNyRCxxREFBaUM7O0lBQ2pDLHVEQUFzQzs7SUFDdEMsZ0VBQXlEOztJQUN6RCw4REFBcUQ7O0lBQ3JELHdEQUFtRDs7SUFDbkQsZ0VBQXdFOztJQUd4RSxtREFBbUQ7O0lBQ25ELHFEQUF1Qzs7SUFDdkMsdURBQThDOztJQUM5QyxzREFBMkQ7O0lBQzNELGtEQUFvQzs7SUFDcEMsNERBQXNEOztJQUN0RCx3REFBaUQ7O0lBQ2pELHVEQUE0Qzs7SUFFNUMsbURBQWtEOztJQUNsRCxxREFBdUM7O0lBQ3ZDLHVEQUE4Qzs7SUFDOUMsc0RBQTBEOztJQUMxRCw0REFBc0Q7O0lBQ3RELHdEQUFpRDs7SUFDakQsdURBQTRDOztJQUU1QyxxREFBMEU7O0lBQzFFLHFEQUF1RDs7SUFHdkQsa0RBQWlCOztJQUNqQiwyREFBOEM7O0lBQzlDLDJEQUFxQzs7SUFDckMsNERBQWdDOztJQUNoQyxvREFBeUM7O0lBQ3pDLHlEQUE4Qzs7SUFTOUMseURBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGb3JtR3JvdXBcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXByb2R1Y3QtdHJhY2Utd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtcHJvZHVjdC10cmFjZS13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXByb2R1Y3QtdHJhY2Utd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VQcm9kdWN0VHJhY2VXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG4gIHZhbCA9IHRydWU7XG4gIHZhbDIgPSBmYWxzZTtcbiAgX3Zpc2libGU7XG4gIF9kYXRhO1xuICBfZGlzYWJsZUJ0bjtcbiAgc2VsZWN0ZWRJdGVtO1xuICBpc1NlYXJjaCA9IGZhbHNlO1xuICBfcmVzdWx0O1xuICBpO1xuICBASW5wdXQoKSBjb2xvciA9ICdwcmltYXJ5JztcbiAgQElucHV0KCdsYWJlbC1vbmUnKSBsYWJlbE9uZTtcbiAgQElucHV0KCdsYWJlbC1vbmUtaWQnKSBsYWJlbE9uZUlkID0gJ3RyYWNlTWV0aG9kMSc7XG4gIEBJbnB1dCgnbGFiZWwtb25lLWN1c3RvbS1jbGFzcycpIGxhYmVsT25lQ3VzdG9tQ2xhc3M7XG4gIEBJbnB1dCgnbGFiZWwtdHdvJykgbGFiZWxUd287XG4gIEBJbnB1dCgnbGFiZWwtdHdvLWlkJykgbGFiZWxUd29JZCA9ICdwcm9kdWN0SWQnO1xuICBASW5wdXQoJ2xhYmVsLXR3by1jdXN0b20tY2xhc3MnKSBsYWJlbFR3b0N1c3RvbUNsYXNzO1xuICBASW5wdXQoJ2xhYmVsLXRocmVlJykgbGFiZWxUaHJlZTtcbiAgQElucHV0KCdsYWJlbC10aHJlZS1pZCcpIGxhYmVsVGhyZWVJZDtcbiAgQElucHV0KCdsYWJlbC10aHJlZS1jdXN0b20tY2xhc3MnKSBsYWJlbFRocmVlQ3VzdG9tQ2xhc3M7XG4gIEBJbnB1dCgndHJhY2UtYm94LWN1c3RvbS1jbGFzcycpIHRyYWNlQm94Q3VzdG9tQ2xhc3M7XG4gIEBJbnB1dCgnc2VhcmNoLWlucHV0LWlkJykgc2VhcmNoSW5wdXRJZCA9ICdzZWFyY2gnO1xuICBASW5wdXQoJ3NlYXJjaC1pY29uLWN1c3RvbS1jbGFzcycpIHNlYXJjaEljb25DdXN0b21DbGFzcyA9ICdzZWFyY2hJY29uJztcblxuICAvKiBzdWt1LWJ0biAqL1xuICBASW5wdXQoJ2J0bi1vbmUtaWQnKSBidG5PbmVJZCA9ICdzZWFyY2hGb3JQcm9kdWN0JztcbiAgQElucHV0KCdidG4tb25lLXNpemUnKSBidG5PbmVTaXplID0gJyc7XG4gIEBJbnB1dCgnYnRuLW9uZS13ZWlnaHQnKSBidG5PbmVXZWlnaHQgPSAnNjAwJztcbiAgQElucHV0KCdidG4tbGFiZWwtb25lJykgYnRuTGFiZWxPbmUgPSAnU2VhcmNoIGZvciBwcm9kdWN0JztcbiAgQElucHV0KCdidG4tdHlwZScpIGJ0blR5cGUgPSAnaW5mbyc7XG4gIEBJbnB1dCgnYnRuLW9uZS1jdXN0b20tY2xhc3MnKSBidG5PbmVDdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoJ2J0bi1vbmUtZGlzYWJsZScpIGJ0bk9uZURpc2FibGU6IEJvb2xlYW47XG4gIEBPdXRwdXQoKSBidG5PbmVBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qICAqL1xuICBASW5wdXQoJ2J0bi10d28taWQnKSBidG5Ud29JZCA9ICd0cmFjZVRoZVByb2R1Y3QnO1xuICBASW5wdXQoJ2J0bi10d28tc2l6ZScpIGJ0blR3b1NpemUgPSAnJztcbiAgQElucHV0KCdidG4tdHdvLXdlaWdodCcpIGJ0blR3b1dlaWdodCA9ICc2MDAnO1xuICBASW5wdXQoJ2J0bi1sYWJlbC10d28nKSBidG5MYWJlbFR3byA9ICd0cmFjZSB0aGUgcHJvZHVjdCc7XG4gIEBJbnB1dCgnYnRuLXR3by1jdXN0b20tY2xhc3MnKSBidG5Ud29DdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoJ2J0bi10d28tZGlzYWJsZScpIGJ0blR3b0Rpc2FibGU6IEJvb2xlYW47XG4gIEBPdXRwdXQoKSBidG5Ud29BY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCdtZXNzYWdlLW9uZScpIG1lc3NhZ2VPbmUgPSAncHJvZHVjdHMgZm91bmQgd2l0aCB0aGUgYWJvdmUgbnVtYmVyJztcbiAgQElucHV0KCdtZXNzYWdlLXR3bycpIG1lc3NhZ2VUd28gPSAncGxlYXNlIHNlbGVjdCBvbmUnO1xuXG4gIC8qIHN1a3UtYnRuICovXG4gIEBJbnB1dCgpIGNvbnRyb2w7XG4gIEBJbnB1dCgncmFkaW8tZm9ybS1jb250cm9sJykgcmFkaW9Gb3JtQ29udHJvbDtcbiAgQElucHV0KCkgdHJhY2VNZXRob2RSYWRpbyA9ICdtZXRob2QnO1xuICBASW5wdXQoKSB0cmFjZXRoZVByb2R1Y3RJZCA9ICcnO1xuICBAT3V0cHV0KCkgc2VhcmNoRnVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VsZWN0cHJvZHVjdHMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlQnRuKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlQnRuO1xuICB9XG4gIHNldCBkaXNhYmxlQnRuKHZhbCkge1xuICAgIHRoaXMuX2Rpc2FibGVCdG4gPSB2YWw7XG4gIH1cblxuICBASW5wdXQoKSBwcm9kdWN0ZGV0YWlscyA9IFtdO1xuICBASW5wdXQoKVxuICBnZXQgcmVzdWx0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bHQ7XG4gIH1cbiAgc2V0IHJlc3VsdChyZXMpIHtcbiAgICB0aGlzLl9yZXN1bHQgPSByZXM7XG4gIH1cblxuICBzZWFyY2hFbmFibGVkKCkge1xuICAgIHRoaXMuaXNTZWFyY2ggPSAhdGhpcy5pc1NlYXJjaDtcbiAgfVxuXG4gIEBJbnB1dCgndmlzaWJsZScpXG4gIGdldCB2aXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICB9XG5cbiAgc2V0IHZpc2libGUodmFsKSB7XG4gICAgdGhpcy5fdmlzaWJsZSA9IHZhbDtcbiAgfVxuXG4gIHNob3dTZWxlY3RlZFBybyhuZXdWYWx1ZSkge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbmV3VmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbn1cbiJdfQ==