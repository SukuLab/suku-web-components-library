/**
 * @fileoverview added by tsickle
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
                    template: "<span [formGroup]=\"form\">\r\n  <div class=\"product-boxContent col-lg-12\">\r\n    <div class=\"col-lg-12 traceMethod {{labelOneCustomClass}} pl-0\" [id]=\"labelOneId\">\r\n      {{labelOne}}\r\n    </div>\r\n    <div class=\"col-lg-12 traceSearchType {{labelTwoCustomClass}} pl-0 mb-2\" [id]=\"labelTwoId\">\r\n      {{labelTwo}}\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12 mt-2 pt-4 pb-4 traceBox {{traceBoxCustomClass}}\">\r\n    <div class=\"col-sm-12 productName pb-1 {{labelThreeCustomClass}}\" [id]=\"labelThree\">\r\n      {{labelThree}}\r\n    </div>\r\n    <div class=\"col-sm-12 pl-3 pb-2 pt-2 p-0 searchBorderBox\">\r\n      <input type=\"text\" [id]=\"searchInputId\" class=\"searchbox\" formControlName=\"{{control}}\" name=\"{{control}}\"\r\n        (keyup)=\"searchFun.emit(isSearch)\" (keyup.enter)=\"btnOneAction.emit()\">\r\n      <span class=\"float-right pr-3\"><i class=\"fa fa-search {{searchIconCustomClass}}\"></i></span>\r\n    </div>\r\n    <p class=\"resultCount\" *ngIf=\"_result == 'true'\">{{productdetails?.length}} {{messageOne}}.\r\n    </p>\r\n    <div *ngIf=\"_visible == 'false'\">\r\n      <p class=\"responseInfo\" *ngIf=\"productdetails?.length > 0 ? true : false \">{{messageTwo}}</p>\r\n      <div class=\"heightTab\" id=\"scrollDiv\">\r\n        <mat-radio-group class=\"example-radio-group\" [formControlName]=\"radioFormControl\">\r\n          <div class=\"col\" *ngFor=\"let products of productdetails;let productIndex=index\">\r\n            <mat-radio-button class=\"searchData\" [color]=\"color\" (click)=\"selectproducts.emit(products)\"\r\n              [value]=\"productIndex\" id=\"product{{productIndex}}\">\r\n              <span class=\"col p-0 product-label\">\r\n                {{products?.asset?.description}}\r\n                <br/>\r\n                {{products?.asset?.name}}\r\n              </span>\r\n            </mat-radio-button>\r\n            <hr>\r\n          </div>\r\n        </mat-radio-group>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12 mb-2 text-center pt-3 mt-3 pb-1\">\r\n      <span class=\"pt-2\">\r\n        <button *ngIf=\"_visible == 'true'\" class=\"suku-i suku-{{btnType}} {{btnOneCustomClass}}\"\r\n          [ngClass]=\"{'disabled' : btnOneDisable}\" [disabled]=\"btnOneDisable\" [style.font-size.rem]=\"btnOneSize\"\r\n          [style.font-weight]=\"btnOneWeight\" [id]=\"btnOneId\" (click)=\"btnOneAction.emit()\">\r\n          {{btnLabelOne}}\r\n        </button>\r\n        <button *ngIf=\"_visible == 'false'\" class=\"suku-i suku-{{btnType}} {{btnTwoCustomClass}}\"\r\n          [ngClass]=\"{'disabled' : btnTwoDisable}\" [disabled]=\"btnTwoDisable\" [style.font-size.rem]=\"btnTwoSize\"\r\n          [style.font-weight]=\"btnTwoWeight\" [id]=\"btnTwoId\" (click)=\"btnTwoAction.emit()\">\r\n          {{btnLabelTwo}}\r\n        </button>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</span>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.product-boxContent{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 5px 15px}.traceMethod{font-size:var(--suku-font-size-3);font-family:var(--suku-primary-font);color:var(--suku-text-label-one);line-height:1em;margin:0 0 8px}.traceSearchType{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-3);color:var(--suku-text-label-one);line-height:1em;margin:0 0 12px}.traceBox{background-color:var(--suku-default-bg);box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);border-radius:0;padding-right:20px;padding-left:20px}.productName{color:#7f7e7e;font-size:13px}.searchIcon{font-size:var(--suku-font-size-5);color:var(--suku-text-label-one);color:var(--suku-default-icon-color)}.searchbox{width:85%;border-width:0}.searchbox:focus{outline:0}.product-label{white-space:normal;vertical-align:middle;text-align:justify}@media only screen and (max-width:319px){.searchbox{width:70%}}@media only screen and (max-width:1024px){.searchbox{width:83%}}.searchBorderBox{border:1px solid var(--suku-text-label-one);border-radius:12px 25.5px 25.5px;font-size:15px;margin-top:7px}.productCount{color:var(--suku-text-label-one);font-size:12px}.trackBtn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-1);padding:.55rem .99rem;border-radius:var(--suku-default-button-border-radius);background:var(--suku-primary-color)!important}.trackBtn:focus,.trackBtn:hover{color:#fff!important;font-size:var(--suku-font-size-1);cursor:pointer;background:var(--suku-primary-color)!important}.trackBtn.disabled:hover{color:#000!important;background:var(--suku-default-bg)}.searchData{word-break:normal;font-size:13px;color:var(--suku-text-label-one);font-family:var(--suku-primary-font)}.resultCount{color:#898787;font-size:12px;padding-left:13px}.responseInfo{color:var(--suku-text-label-one);font-size:12px;padding-left:13px}.heightTab{max-height:230px;overflow-x:hidden}::-webkit-scrollbar-thumb{background:var(--suku-primary-color);border-radius:60px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 var(--suku-primary-color);border-radius:60px}.searchData>label{white-space:pre-wrap!important;line-height:normal!important;white-space:pre-wrap}#scrollDiv::-webkit-scrollbar{width:6px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:60px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:var(--suku-primary-color)!important}.mat-radio-button.mat-accent .mat-radio-inner-circle::before{font-family:\"Font Awesome 5 Free\",sans-serif!important;content:\"\\f058\"!important;display:inline-block!important;vertical-align:middle;font-weight:900;font-size:35px!important;color:var(--suku-primary-color);margin:-7.6px 0 0 -8px!important}.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#fafafa!important}.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:var(--suku-primary-color)!important}.suku-i{border:2px solid;border-radius:28px 76px 63px;color:#3e3e3e;font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;padding:.55rem 2rem!important}.suku-i:hover{color:#fff;cursor:pointer}.suku-i:focus{outline:0!important}.suku-i.disabled:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:var(--suku-text-link);cursor:not-allowed}.suku-info{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-text-label-two);color:var(--suku-text-heading)}.suku-info:active,.suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.suku-info.disabled{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:grey}.suku-info.disabled.focus,.suku-info.disabled:focus,.suku-info.disabled:hover,.suku-info[disabled].focus,.suku-info[disabled]:focus,.suku-info[disabled]:hover,fieldset[disabled] .suku-info.focus,fieldset[disabled] .suku-info:focus,fieldset[disabled] .suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff!important;color:grey;outline:0}.suku-info.focus,.suku-info:focus{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.open>.dropdown-toggle .suku-info.focus,.open>.dropdown-toggle .suku-info:focus,.open>.dropdown-toggle.suku-info:hover,.suku-info.active.focus,.suku-info.active:focus,.suku-info.active:hover,.suku-info:active.focus,.suku-info:active:focus,.suku-info:active:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.show>.suku-info.dropdown-toggle,.suku-info:not(:disabled):not(.disabled).active,.suku-info:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}.show>.suku-info.dropdown-toggle:focus,.suku-info.focus,.suku-info:focus,.suku-info:not(:disabled):not(.disabled).active:focus,.suku-info:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}.suku-default{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-bg-secondary);color:var(--suku-text-label-one)}.suku-default:active,.suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.suku-default.disabled{border:2px solid;border-color:var(--suku-text-info);background-color:#fff;color:grey}.suku-default.disabled.focus,.suku-default.disabled:focus,.suku-default.disabled:hover,.suku-default[disabled].focus,.suku-default[disabled]:focus,.suku-default[disabled]:hover,fieldset[disabled] .suku-default.focus,fieldset[disabled] .suku-default:focus,fieldset[disabled] .suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:#fff!important;color:grey}.suku-default.focus,.suku-default:focus{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.open>.dropdown-toggle .suku-default.focus,.open>.dropdown-toggle .suku-default:focus,.open>.dropdown-toggle.suku-default:hover,.suku-default.active.focus,.suku-default.active:focus,.suku-default.active:hover,.suku-default:active.focus,.suku-default:active:focus,.suku-default:active:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff;outline:0}.show>.suku-default.dropdown-toggle,.suku-default:not(:disabled):not(.disabled).active,.suku-default:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-text-info);border-color:var(--suku-text-info)}.suku-default:focus,.suku-info.focus{box-shadow:none!important;outline:0!important}.show>.suku-default.dropdown-toggle:focus,.suku-default:not(:disabled):not(.disabled).active:focus,.suku-default:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC9zdWt1LXByb2R1Y3QtdHJhY2Utd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFNBQVMsRUFDVixNQUFNLGdCQUFnQixDQUFDO0FBRXhCO0lBNkZFO1FBckZBLFFBQUcsR0FBRyxJQUFJLENBQUM7UUFDWCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBS2IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUdSLFVBQUssR0FBRyxTQUFTLENBQUM7UUFFSixlQUFVLEdBQUcsY0FBYyxDQUFDO1FBRzVCLGVBQVUsR0FBRyxXQUFXLENBQUM7UUFNdEIsa0JBQWEsR0FBRyxRQUFRLENBQUM7UUFDaEIsMEJBQXFCLEdBQUcsWUFBWSxDQUFDOztRQUduRCxhQUFRLEdBQUcsa0JBQWtCLENBQUM7UUFDNUIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNkLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsb0JBQW9CLENBQUM7UUFDeEMsWUFBTyxHQUFHLE1BQU0sQ0FBQztRQUNMLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUU1QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7O1FBRXZCLGFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2QsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDdEIsZ0JBQVcsR0FBRyxtQkFBbUIsQ0FBQztRQUMzQixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFFNUMs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LCtCQUErQjs7O0lBQzFDLCtDQUF5Qjs7SUFDekIsOENBQVc7O0lBQ1gsK0NBQWE7O0lBQ2IsbURBQVM7O0lBQ1QsZ0RBQU07O0lBQ04sc0RBQVk7O0lBQ1osdURBQWE7O0lBQ2IsbURBQWlCOztJQUNqQixrREFBUTs7SUFDUiw0Q0FBRTs7SUFDRixnREFBMkI7O0lBQzNCLG1EQUE2Qjs7SUFDN0IscURBQW1EOztJQUNuRCw4REFBcUQ7O0lBQ3JELG1EQUE2Qjs7SUFDN0IscURBQWdEOztJQUNoRCw4REFBcUQ7O0lBQ3JELHFEQUFpQzs7SUFDakMsdURBQXNDOztJQUN0QyxnRUFBeUQ7O0lBQ3pELDhEQUFxRDs7SUFDckQsd0RBQW1EOztJQUNuRCxnRUFBd0U7O0lBR3hFLG1EQUFtRDs7SUFDbkQscURBQXVDOztJQUN2Qyx1REFBOEM7O0lBQzlDLHNEQUEyRDs7SUFDM0Qsa0RBQW9DOztJQUNwQyw0REFBc0Q7O0lBQ3RELHdEQUFpRDs7SUFDakQsdURBQTRDOztJQUU1QyxtREFBa0Q7O0lBQ2xELHFEQUF1Qzs7SUFDdkMsdURBQThDOztJQUM5QyxzREFBMEQ7O0lBQzFELDREQUFzRDs7SUFDdEQsd0RBQWlEOztJQUNqRCx1REFBNEM7O0lBRTVDLHFEQUEwRTs7SUFDMUUscURBQXVEOztJQUd2RCxrREFBaUI7O0lBQ2pCLDJEQUE4Qzs7SUFDOUMsMkRBQXFDOztJQUNyQyw0REFBZ0M7O0lBQ2hDLG9EQUF5Qzs7SUFDekMseURBQThDOztJQVM5Qyx5REFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEZvcm1Hcm91cFxyXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtcHJvZHVjdC10cmFjZS13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtcHJvZHVjdC10cmFjZS13aWRnZXQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdVByb2R1Y3RUcmFjZVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG4gIHZhbCA9IHRydWU7XHJcbiAgdmFsMiA9IGZhbHNlO1xyXG4gIF92aXNpYmxlO1xyXG4gIF9kYXRhO1xyXG4gIF9kaXNhYmxlQnRuO1xyXG4gIHNlbGVjdGVkSXRlbTtcclxuICBpc1NlYXJjaCA9IGZhbHNlO1xyXG4gIF9yZXN1bHQ7XHJcbiAgaTtcclxuICBASW5wdXQoKSBjb2xvciA9ICdwcmltYXJ5JztcclxuICBASW5wdXQoJ2xhYmVsLW9uZScpIGxhYmVsT25lO1xyXG4gIEBJbnB1dCgnbGFiZWwtb25lLWlkJykgbGFiZWxPbmVJZCA9ICd0cmFjZU1ldGhvZDEnO1xyXG4gIEBJbnB1dCgnbGFiZWwtb25lLWN1c3RvbS1jbGFzcycpIGxhYmVsT25lQ3VzdG9tQ2xhc3M7XHJcbiAgQElucHV0KCdsYWJlbC10d28nKSBsYWJlbFR3bztcclxuICBASW5wdXQoJ2xhYmVsLXR3by1pZCcpIGxhYmVsVHdvSWQgPSAncHJvZHVjdElkJztcclxuICBASW5wdXQoJ2xhYmVsLXR3by1jdXN0b20tY2xhc3MnKSBsYWJlbFR3b0N1c3RvbUNsYXNzO1xyXG4gIEBJbnB1dCgnbGFiZWwtdGhyZWUnKSBsYWJlbFRocmVlO1xyXG4gIEBJbnB1dCgnbGFiZWwtdGhyZWUtaWQnKSBsYWJlbFRocmVlSWQ7XHJcbiAgQElucHV0KCdsYWJlbC10aHJlZS1jdXN0b20tY2xhc3MnKSBsYWJlbFRocmVlQ3VzdG9tQ2xhc3M7XHJcbiAgQElucHV0KCd0cmFjZS1ib3gtY3VzdG9tLWNsYXNzJykgdHJhY2VCb3hDdXN0b21DbGFzcztcclxuICBASW5wdXQoJ3NlYXJjaC1pbnB1dC1pZCcpIHNlYXJjaElucHV0SWQgPSAnc2VhcmNoJztcclxuICBASW5wdXQoJ3NlYXJjaC1pY29uLWN1c3RvbS1jbGFzcycpIHNlYXJjaEljb25DdXN0b21DbGFzcyA9ICdzZWFyY2hJY29uJztcclxuXHJcbiAgLyogc3VrdS1idG4gKi9cclxuICBASW5wdXQoJ2J0bi1vbmUtaWQnKSBidG5PbmVJZCA9ICdzZWFyY2hGb3JQcm9kdWN0JztcclxuICBASW5wdXQoJ2J0bi1vbmUtc2l6ZScpIGJ0bk9uZVNpemUgPSAnJztcclxuICBASW5wdXQoJ2J0bi1vbmUtd2VpZ2h0JykgYnRuT25lV2VpZ2h0ID0gJzYwMCc7XHJcbiAgQElucHV0KCdidG4tbGFiZWwtb25lJykgYnRuTGFiZWxPbmUgPSAnU2VhcmNoIGZvciBwcm9kdWN0JztcclxuICBASW5wdXQoJ2J0bi10eXBlJykgYnRuVHlwZSA9ICdpbmZvJztcclxuICBASW5wdXQoJ2J0bi1vbmUtY3VzdG9tLWNsYXNzJykgYnRuT25lQ3VzdG9tQ2xhc3MgPSAnJztcclxuICBASW5wdXQoJ2J0bi1vbmUtZGlzYWJsZScpIGJ0bk9uZURpc2FibGU6IEJvb2xlYW47XHJcbiAgQE91dHB1dCgpIGJ0bk9uZUFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKiAgKi9cclxuICBASW5wdXQoJ2J0bi10d28taWQnKSBidG5Ud29JZCA9ICd0cmFjZVRoZVByb2R1Y3QnO1xyXG4gIEBJbnB1dCgnYnRuLXR3by1zaXplJykgYnRuVHdvU2l6ZSA9ICcnO1xyXG4gIEBJbnB1dCgnYnRuLXR3by13ZWlnaHQnKSBidG5Ud29XZWlnaHQgPSAnNjAwJztcclxuICBASW5wdXQoJ2J0bi1sYWJlbC10d28nKSBidG5MYWJlbFR3byA9ICd0cmFjZSB0aGUgcHJvZHVjdCc7XHJcbiAgQElucHV0KCdidG4tdHdvLWN1c3RvbS1jbGFzcycpIGJ0blR3b0N1c3RvbUNsYXNzID0gJyc7XHJcbiAgQElucHV0KCdidG4tdHdvLWRpc2FibGUnKSBidG5Ud29EaXNhYmxlOiBCb29sZWFuO1xyXG4gIEBPdXRwdXQoKSBidG5Ud29BY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBJbnB1dCgnbWVzc2FnZS1vbmUnKSBtZXNzYWdlT25lID0gJ3Byb2R1Y3RzIGZvdW5kIHdpdGggdGhlIGFib3ZlIG51bWJlcic7XHJcbiAgQElucHV0KCdtZXNzYWdlLXR3bycpIG1lc3NhZ2VUd28gPSAncGxlYXNlIHNlbGVjdCBvbmUnO1xyXG5cclxuICAvKiBzdWt1LWJ0biAqL1xyXG4gIEBJbnB1dCgpIGNvbnRyb2w7XHJcbiAgQElucHV0KCdyYWRpby1mb3JtLWNvbnRyb2wnKSByYWRpb0Zvcm1Db250cm9sO1xyXG4gIEBJbnB1dCgpIHRyYWNlTWV0aG9kUmFkaW8gPSAnbWV0aG9kJztcclxuICBASW5wdXQoKSB0cmFjZXRoZVByb2R1Y3RJZCA9ICcnO1xyXG4gIEBPdXRwdXQoKSBzZWFyY2hGdW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdHByb2R1Y3RzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGRpc2FibGVCdG4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZUJ0bjtcclxuICB9XHJcbiAgc2V0IGRpc2FibGVCdG4odmFsKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlQnRuID0gdmFsO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgcHJvZHVjdGRldGFpbHMgPSBbXTtcclxuICBASW5wdXQoKVxyXG4gIGdldCByZXN1bHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0O1xyXG4gIH1cclxuICBzZXQgcmVzdWx0KHJlcykge1xyXG4gICAgdGhpcy5fcmVzdWx0ID0gcmVzO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoRW5hYmxlZCgpIHtcclxuICAgIHRoaXMuaXNTZWFyY2ggPSAhdGhpcy5pc1NlYXJjaDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgndmlzaWJsZScpXHJcbiAgZ2V0IHZpc2libGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcclxuICB9XHJcblxyXG4gIHNldCB2aXNpYmxlKHZhbCkge1xyXG4gICAgdGhpcy5fdmlzaWJsZSA9IHZhbDtcclxuICB9XHJcblxyXG4gIHNob3dTZWxlY3RlZFBybyhuZXdWYWx1ZSkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBuZXdWYWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG59XHJcbiJdfQ==