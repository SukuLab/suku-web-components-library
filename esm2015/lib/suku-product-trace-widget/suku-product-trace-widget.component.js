/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class SukuProductTraceWidgetComponent {
    constructor() {
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
    /**
     * @return {?}
     */
    get disableBtn() {
        return this._disableBtn;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set disableBtn(val) {
        this._disableBtn = val;
    }
    /**
     * @return {?}
     */
    get result() {
        return this._result;
    }
    /**
     * @param {?} res
     * @return {?}
     */
    set result(res) {
        this._result = res;
    }
    /**
     * @return {?}
     */
    searchEnabled() {
        this.isSearch = !this.isSearch;
    }
    /**
     * @return {?}
     */
    get visible() {
        return this._visible;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set visible(val) {
        this._visible = val;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    showSelectedPro(newValue) {
        this.selectedItem = newValue;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SukuProductTraceWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-product-trace-widget',
                template: "<span [formGroup]=\"form\">\n  <div class=\"product-boxContent col-lg-12\">\n    <div class=\"col-lg-12 traceMethod {{labelOneCustomClass}} pl-0\" [id]=\"labelOneId\">\n      {{labelOne}}\n    </div>\n    <div class=\"col-lg-12 traceSearchType {{labelTwoCustomClass}} pl-0 mb-2\" [id]=\"labelTwoId\">\n      {{labelTwo}}\n    </div>\n  </div>\n  <div class=\"col-sm-12 mt-2 pt-4 pb-4 traceBox {{traceBoxCustomClass}}\">\n    <div class=\"col-sm-12 productName pb-1 {{labelThreeCustomClass}}\" [id]=\"labelThree\">\n      {{labelThree}}\n    </div>\n    <div class=\"col-sm-12 pl-3 pb-2 pt-2 p-0 searchBorderBox\">\n      <input type=\"text\" [id]=\"searchInputId\" class=\"searchbox\" formControlName=\"{{control}}\" name=\"{{control}}\"\n        (keyup)=\"searchFun.emit(isSearch)\" (keyup.enter)=\"btnOneAction.emit()\">\n      <span class=\"float-right pr-3\"><i class=\"fa fa-search {{searchIconCustomClass}}\"></i></span>\n    </div>\n    <p class=\"resultCount\" *ngIf=\"_result == 'true'\">{{productdetails?.length}} {{messageOne}}.\n    </p>\n    <div *ngIf=\"_visible == 'false'\">\n      <p class=\"responseInfo\" *ngIf=\"productdetails?.length > 0 ? true : false \">{{messageTwo}}</p>\n      <div class=\"heightTab\" id=\"scrollDiv\">\n        <mat-radio-group class=\"example-radio-group\" [formControlName]=\"radioFormControl\">\n          <div class=\"col\" *ngFor=\"let products of productdetails;let productIndex=index\">\n            <mat-radio-button class=\"searchData\" [color]=\"color\" (click)=\"selectproducts.emit(products)\"\n              [value]=\"productIndex\" id=\"product{{productIndex}}\">\n              <span class=\"col p-0 product-label\">\n                {{products?.asset?.description}}\n                <br/>\n                {{products?.asset?.name}}\n              </span>\n            </mat-radio-button>\n            <hr>\n          </div>\n        </mat-radio-group>\n      </div>\n    </div>\n    <div class=\"col-sm-12 mb-2 text-center pt-3 mt-3 pb-1\">\n      <span class=\"pt-2\">\n        <button *ngIf=\"_visible == 'true'\" class=\"suku-i suku-{{btnType}} {{btnOneCustomClass}}\"\n          [ngClass]=\"{'disabled' : btnOneDisable}\" [disabled]=\"btnOneDisable\" [style.font-size.rem]=\"btnOneSize\"\n          [style.font-weight]=\"btnOneWeight\" [id]=\"btnOneId\" (click)=\"btnOneAction.emit()\">\n          {{btnLabelOne}}\n        </button>\n        <button *ngIf=\"_visible == 'false'\" class=\"suku-i suku-{{btnType}} {{btnTwoCustomClass}}\"\n          [ngClass]=\"{'disabled' : btnTwoDisable}\" [disabled]=\"btnTwoDisable\" [style.font-size.rem]=\"btnTwoSize\"\n          [style.font-weight]=\"btnTwoWeight\" [id]=\"btnTwoId\" (click)=\"btnTwoAction.emit()\">\n          {{btnLabelTwo}}\n        </button>\n      </span>\n    </div>\n  </div>\n</span>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.product-boxContent{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 5px 15px}.traceMethod{font-size:var(--suku-font-size-3);font-family:var(--suku-primary-font);color:var(--suku-text-label-one);line-height:1em;margin:0 0 8px}.traceSearchType{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-3);color:var(--suku-text-label-one);line-height:1em;margin:0 0 12px}.traceBox{background-color:var(--suku-default-bg);box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);border-radius:0;padding-right:20px;padding-left:20px}.productName{color:#7f7e7e;font-size:13px}.searchIcon{font-size:var(--suku-font-size-5);color:var(--suku-text-label-one);color:var(--suku-default-icon-color)}.searchbox{width:85%;border-width:0}.searchbox:focus{outline:0}.product-label{white-space:normal;vertical-align:middle;text-align:justify}@media only screen and (max-width:319px){.searchbox{width:70%}}@media only screen and (max-width:1024px){.searchbox{width:83%}}.searchBorderBox{border:1px solid var(--suku-text-label-one);border-radius:12px 25.5px 25.5px;font-size:15px;margin-top:7px}.productCount{color:var(--suku-text-label-one);font-size:12px}.trackBtn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-1);padding:.55rem .99rem;border-radius:var(--suku-default-button-border-radius);background:var(--suku-primary-color)!important}.trackBtn:focus,.trackBtn:hover{color:#fff!important;font-size:var(--suku-font-size-1);cursor:pointer;background:var(--suku-primary-color)!important}.trackBtn.disabled:hover{color:#000!important;background:var(--suku-default-bg)}.searchData{word-break:normal;font-size:13px;color:var(--suku-text-label-one);font-family:var(--suku-primary-font)}.resultCount{color:#898787;font-size:12px;padding-left:13px}.responseInfo{color:var(--suku-text-label-one);font-size:12px;padding-left:13px}.heightTab{max-height:230px;overflow-x:hidden}::-webkit-scrollbar-thumb{background:var(--suku-primary-color);border-radius:60px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 var(--suku-primary-color);border-radius:60px}.searchData>label{white-space:pre-wrap!important;line-height:normal!important;white-space:pre-wrap}#scrollDiv::-webkit-scrollbar{width:6px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:60px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:var(--suku-primary-color)!important}.mat-radio-button.mat-accent .mat-radio-inner-circle::before{font-family:\"Font Awesome 5 Free\",sans-serif!important;content:\"\\f058\"!important;display:inline-block!important;vertical-align:middle;font-weight:900;font-size:35px!important;color:var(--suku-primary-color);margin:-7.6px 0 0 -8px!important}.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#fafafa!important}.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:var(--suku-primary-color)!important}.suku-i{border:2px solid;border-radius:28px 76px 63px;color:#3e3e3e;font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;padding:.55rem 2rem!important}.suku-i:hover{color:#fff;cursor:pointer}.suku-i:focus{outline:0!important}.suku-i.disabled:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:var(--suku-text-link);cursor:not-allowed}.suku-info{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-text-label-two);color:var(--suku-text-heading)}.suku-info:active,.suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.suku-info.disabled{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:grey}.suku-info.disabled.focus,.suku-info.disabled:focus,.suku-info.disabled:hover,.suku-info[disabled].focus,.suku-info[disabled]:focus,.suku-info[disabled]:hover,fieldset[disabled] .suku-info.focus,fieldset[disabled] .suku-info:focus,fieldset[disabled] .suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff!important;color:grey;outline:0}.suku-info.focus,.suku-info:focus{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.open>.dropdown-toggle .suku-info.focus,.open>.dropdown-toggle .suku-info:focus,.open>.dropdown-toggle.suku-info:hover,.suku-info.active.focus,.suku-info.active:focus,.suku-info.active:hover,.suku-info:active.focus,.suku-info:active:focus,.suku-info:active:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.show>.suku-info.dropdown-toggle,.suku-info:not(:disabled):not(.disabled).active,.suku-info:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}.show>.suku-info.dropdown-toggle:focus,.suku-info.focus,.suku-info:focus,.suku-info:not(:disabled):not(.disabled).active:focus,.suku-info:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}.suku-default{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-bg-secondary);color:var(--suku-text-label-one)}.suku-default:active,.suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.suku-default.disabled{border:2px solid;border-color:var(--suku-text-info);background-color:#fff;color:grey}.suku-default.disabled.focus,.suku-default.disabled:focus,.suku-default.disabled:hover,.suku-default[disabled].focus,.suku-default[disabled]:focus,.suku-default[disabled]:hover,fieldset[disabled] .suku-default.focus,fieldset[disabled] .suku-default:focus,fieldset[disabled] .suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:#fff!important;color:grey}.suku-default.focus,.suku-default:focus{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.open>.dropdown-toggle .suku-default.focus,.open>.dropdown-toggle .suku-default:focus,.open>.dropdown-toggle.suku-default:hover,.suku-default.active.focus,.suku-default.active:focus,.suku-default.active:hover,.suku-default:active.focus,.suku-default:active:focus,.suku-default:active:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff;outline:0}.show>.suku-default.dropdown-toggle,.suku-default:not(:disabled):not(.disabled).active,.suku-default:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-text-info);border-color:var(--suku-text-info)}.suku-default:focus,.suku-info.focus{box-shadow:none!important;outline:0!important}.show>.suku-default.dropdown-toggle:focus,.suku-default:not(:disabled):not(.disabled).active:focus,.suku-default:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}"]
            }] }
];
/** @nocollapse */
SukuProductTraceWidgetComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC9zdWt1LXByb2R1Y3QtdHJhY2Utd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFNBQVMsRUFDVixNQUFNLGdCQUFnQixDQUFDO0FBUXhCLE1BQU0sT0FBTywrQkFBK0I7SUF1RjFDO1FBckZBLFFBQUcsR0FBRyxJQUFJLENBQUM7UUFDWCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBS2IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUdSLFVBQUssR0FBRyxTQUFTLENBQUM7UUFFSixlQUFVLEdBQUcsY0FBYyxDQUFDO1FBRzVCLGVBQVUsR0FBRyxXQUFXLENBQUM7UUFNdEIsa0JBQWEsR0FBRyxRQUFRLENBQUM7UUFDaEIsMEJBQXFCLEdBQUcsWUFBWSxDQUFDOztRQUduRCxhQUFRLEdBQUcsa0JBQWtCLENBQUM7UUFDNUIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNkLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsb0JBQW9CLENBQUM7UUFDeEMsWUFBTyxHQUFHLE1BQU0sQ0FBQztRQUNMLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUU1QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7O1FBRXZCLGFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2QsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDdEIsZ0JBQVcsR0FBRyxtQkFBbUIsQ0FBQztRQUMzQixzQkFBaUIsR0FB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Q1QsZ0RBQU07O0lBQ04sc0RBQVk7O0lBQ1osdURBQWE7O0lBQ2IsbURBQWlCOztJQUNqQixrREFBUTs7SUFDUiw0Q0FBRTs7SUFDRixnREFBMkI7O0lBQzNCLG1EQUE2Qjs7SUFDN0IscURBQW1EOztJQUNuRCw4REFBcUQ7O0lBQ3JELG1EQUE2Qjs7SUFDN0IscURBQWdEOztJQUNoRCw4REFBcUQ7O0lBQ3JELHFEQUFpQzs7SUFDakMsdURBQXNDOztJQUN0QyxnRUFBeUQ7O0lBQ3pELDhEQUFxRDs7SUFDckQsd0RBQW1EOztJQUNuRCxnRUFBd0U7O0lBR3hFLG1EQUFtRDs7SUFDbkQscURBQXVDOztJQUN2Qyx1REFBOEM7O0lBQzlDLHNEQUEyRDs7SUFDM0Qsa0RBQW9DOztJQUNwQyw0REFBc0Q7O0lBQ3RELHdEQUFpRDs7SUFDakQsdURBQTRDOztJQUU1QyxtREFBa0Q7O0lBQ2xELHFEQUF1Qzs7SUFDdkMsdURBQThDOztJQUM5QyxzREFBMEQ7O0lBQzFELDREQUFzRDs7SUFDdEQsd0RBQWlEOztJQUNqRCx1REFBNEM7O0lBRTVDLHFEQUEwRTs7SUFDMUUscURBQXVEOztJQUd2RCxrREFBaUI7O0lBQ2pCLDJEQUE4Qzs7SUFDOUMsMkRBQXFDOztJQUNyQyw0REFBZ0M7O0lBQ2hDLG9EQUF5Qzs7SUFDekMseURBQThDOztJQVM5Qyx5REFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEZvcm1Hcm91cFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtcHJvZHVjdC10cmFjZS13aWRnZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtcHJvZHVjdC10cmFjZS13aWRnZXQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3VrdVByb2R1Y3RUcmFjZVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcbiAgdmFsID0gdHJ1ZTtcbiAgdmFsMiA9IGZhbHNlO1xuICBfdmlzaWJsZTtcbiAgX2RhdGE7XG4gIF9kaXNhYmxlQnRuO1xuICBzZWxlY3RlZEl0ZW07XG4gIGlzU2VhcmNoID0gZmFsc2U7XG4gIF9yZXN1bHQ7XG4gIGk7XG4gIEBJbnB1dCgpIGNvbG9yID0gJ3ByaW1hcnknO1xuICBASW5wdXQoJ2xhYmVsLW9uZScpIGxhYmVsT25lO1xuICBASW5wdXQoJ2xhYmVsLW9uZS1pZCcpIGxhYmVsT25lSWQgPSAndHJhY2VNZXRob2QxJztcbiAgQElucHV0KCdsYWJlbC1vbmUtY3VzdG9tLWNsYXNzJykgbGFiZWxPbmVDdXN0b21DbGFzcztcbiAgQElucHV0KCdsYWJlbC10d28nKSBsYWJlbFR3bztcbiAgQElucHV0KCdsYWJlbC10d28taWQnKSBsYWJlbFR3b0lkID0gJ3Byb2R1Y3RJZCc7XG4gIEBJbnB1dCgnbGFiZWwtdHdvLWN1c3RvbS1jbGFzcycpIGxhYmVsVHdvQ3VzdG9tQ2xhc3M7XG4gIEBJbnB1dCgnbGFiZWwtdGhyZWUnKSBsYWJlbFRocmVlO1xuICBASW5wdXQoJ2xhYmVsLXRocmVlLWlkJykgbGFiZWxUaHJlZUlkO1xuICBASW5wdXQoJ2xhYmVsLXRocmVlLWN1c3RvbS1jbGFzcycpIGxhYmVsVGhyZWVDdXN0b21DbGFzcztcbiAgQElucHV0KCd0cmFjZS1ib3gtY3VzdG9tLWNsYXNzJykgdHJhY2VCb3hDdXN0b21DbGFzcztcbiAgQElucHV0KCdzZWFyY2gtaW5wdXQtaWQnKSBzZWFyY2hJbnB1dElkID0gJ3NlYXJjaCc7XG4gIEBJbnB1dCgnc2VhcmNoLWljb24tY3VzdG9tLWNsYXNzJykgc2VhcmNoSWNvbkN1c3RvbUNsYXNzID0gJ3NlYXJjaEljb24nO1xuXG4gIC8qIHN1a3UtYnRuICovXG4gIEBJbnB1dCgnYnRuLW9uZS1pZCcpIGJ0bk9uZUlkID0gJ3NlYXJjaEZvclByb2R1Y3QnO1xuICBASW5wdXQoJ2J0bi1vbmUtc2l6ZScpIGJ0bk9uZVNpemUgPSAnJztcbiAgQElucHV0KCdidG4tb25lLXdlaWdodCcpIGJ0bk9uZVdlaWdodCA9ICc2MDAnO1xuICBASW5wdXQoJ2J0bi1sYWJlbC1vbmUnKSBidG5MYWJlbE9uZSA9ICdTZWFyY2ggZm9yIHByb2R1Y3QnO1xuICBASW5wdXQoJ2J0bi10eXBlJykgYnRuVHlwZSA9ICdpbmZvJztcbiAgQElucHV0KCdidG4tb25lLWN1c3RvbS1jbGFzcycpIGJ0bk9uZUN1c3RvbUNsYXNzID0gJyc7XG4gIEBJbnB1dCgnYnRuLW9uZS1kaXNhYmxlJykgYnRuT25lRGlzYWJsZTogQm9vbGVhbjtcbiAgQE91dHB1dCgpIGJ0bk9uZUFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyogICovXG4gIEBJbnB1dCgnYnRuLXR3by1pZCcpIGJ0blR3b0lkID0gJ3RyYWNlVGhlUHJvZHVjdCc7XG4gIEBJbnB1dCgnYnRuLXR3by1zaXplJykgYnRuVHdvU2l6ZSA9ICcnO1xuICBASW5wdXQoJ2J0bi10d28td2VpZ2h0JykgYnRuVHdvV2VpZ2h0ID0gJzYwMCc7XG4gIEBJbnB1dCgnYnRuLWxhYmVsLXR3bycpIGJ0bkxhYmVsVHdvID0gJ3RyYWNlIHRoZSBwcm9kdWN0JztcbiAgQElucHV0KCdidG4tdHdvLWN1c3RvbS1jbGFzcycpIGJ0blR3b0N1c3RvbUNsYXNzID0gJyc7XG4gIEBJbnB1dCgnYnRuLXR3by1kaXNhYmxlJykgYnRuVHdvRGlzYWJsZTogQm9vbGVhbjtcbiAgQE91dHB1dCgpIGJ0blR3b0FjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoJ21lc3NhZ2Utb25lJykgbWVzc2FnZU9uZSA9ICdwcm9kdWN0cyBmb3VuZCB3aXRoIHRoZSBhYm92ZSBudW1iZXInO1xuICBASW5wdXQoJ21lc3NhZ2UtdHdvJykgbWVzc2FnZVR3byA9ICdwbGVhc2Ugc2VsZWN0IG9uZSc7XG5cbiAgLyogc3VrdS1idG4gKi9cbiAgQElucHV0KCkgY29udHJvbDtcbiAgQElucHV0KCdyYWRpby1mb3JtLWNvbnRyb2wnKSByYWRpb0Zvcm1Db250cm9sO1xuICBASW5wdXQoKSB0cmFjZU1ldGhvZFJhZGlvID0gJ21ldGhvZCc7XG4gIEBJbnB1dCgpIHRyYWNldGhlUHJvZHVjdElkID0gJyc7XG4gIEBPdXRwdXQoKSBzZWFyY2hGdW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWxlY3Rwcm9kdWN0cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVCdG4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVCdG47XG4gIH1cbiAgc2V0IGRpc2FibGVCdG4odmFsKSB7XG4gICAgdGhpcy5fZGlzYWJsZUJ0biA9IHZhbDtcbiAgfVxuXG4gIEBJbnB1dCgpIHByb2R1Y3RkZXRhaWxzID0gW107XG4gIEBJbnB1dCgpXG4gIGdldCByZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdDtcbiAgfVxuICBzZXQgcmVzdWx0KHJlcykge1xuICAgIHRoaXMuX3Jlc3VsdCA9IHJlcztcbiAgfVxuXG4gIHNlYXJjaEVuYWJsZWQoKSB7XG4gICAgdGhpcy5pc1NlYXJjaCA9ICF0aGlzLmlzU2VhcmNoO1xuICB9XG5cbiAgQElucHV0KCd2aXNpYmxlJylcbiAgZ2V0IHZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cblxuICBzZXQgdmlzaWJsZSh2YWwpIHtcbiAgICB0aGlzLl92aXNpYmxlID0gdmFsO1xuICB9XG5cbiAgc2hvd1NlbGVjdGVkUHJvKG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBuZXdWYWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxufVxuIl19