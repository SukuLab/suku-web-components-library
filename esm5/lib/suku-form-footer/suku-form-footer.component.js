/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-form-footer/suku-form-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuFormFooterComponent = /** @class */ (function () {
    function SukuFormFooterComponent() {
        this.btnOneLabel = 'cancel';
        this.btnOneId = 'primary';
        this.btnOneSize = '';
        this.btnOneColor = '';
        this.btnOneWeight = '400';
        this.btnOneCustomClass = '';
        this.btnOneVisible = 'true';
        this.btnOneAction = new EventEmitter();
        this.btnTwoLabel = 'save as draft';
        this.btnTwoId = 'primary';
        this.btnTwoSize = '';
        this.btnTwoColor = '';
        this.btnTwoWeight = '400';
        this.btnTwoVisible = 'true';
        this.btnTwoCustomClass = '';
        this.btnTwoAction = new EventEmitter();
        this.btnThreeLabel = 'back';
        this.btnThreeId = 'primary';
        this.btnThreeSize = '';
        this.btnThreeColor = '';
        this.btnThreeWeight = '600';
        this.btnThreeVisible = 'true';
        this.btnThreeCustomClass = '';
        this.btnThreeAction = new EventEmitter();
        this.btnFourLabel = 'back';
        this.btnFourId = 'primary';
        this.btnFourSize = '';
        this.btnFourColor = '';
        this.btnFourWeight = '600';
        this.btnFourVisible = 'true';
        this.btnFourCustomClass = '';
        this.btnFourAction = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'suku-form-footer',
                    template: " <div class=\"form-footer col-xl-12 col-lg-12 col-md-12\">\n   <div class=\"row\">\n     <div class=\"col-lg-6 col-md-12 align-items-center d-flex pl-lg-4 pr-lg-0\">\n       <div class=\"col-xl-12 col-md-12 col-lg-12\">\n         <div class=\"row\">\n           <div class=\"text-xs-center align-items-center d-flex w-xs-100 p-xs-2\" *ngIf=\"btnOneVisible\">\n             <span class=\"pl-lg-3 default-btn c-pointer text-xs-center {{btnOneCustomClass}}\" [id]=\"btnOneId\"\n               [style.font-size.rem]=\"btnOneSize\" [style.color]=\"btnOneColor\" [style.font-weight]=\"btnOneWeight\"\n               (click)=\"btnOneAction.emit()\">\n               {{btnOneLabel}}\n             </span>\n           </div>\n           <div class=\"pl-lg-4 text-xs-center align-items-center d-flex w-xs-100 p-xs-2\" *ngIf=\"btnTwoVisible\">\n             <span class=\"default-btn c-pointer text-xs-center {{btnTwoCustomClass}}\" [id]=\"btnTwoId\"\n               [style.font-size.rem]=\"btnTwoSize\" [style.color]=\"btnTwoColor\" [style.font-weight]=\"btnTwoWeight\"\n               (click)=\"btnTwoAction.emit()\">\n               {{btnTwoLabel}}\n             </span>\n           </div>\n         </div>\n       </div>\n     </div>\n     <div class=\"text-center col-md-12 col-lg-6 col-sm-12 content-end d-flex pl-5 pr-5\">\n       <div class=\"row\">\n         <div class=\"pt-4 pb-4 pl-lg-4 pr-lg-3 d-flex justify-content-end w-xs-100\" *ngIf=\"btnThreeVisible\">\n           <button type=\"button\" class=\"suku-p suku-{{btnThreeType}} {{btnThreeCustomClass}} w-xs-100\"\n             [ngClass]=\"{'disabled' : btnThreeDisableValue}\" [style.font-size.rem]=\"btnThreeSize\"\n             [style.color]=\"btnThreeColor\" [style.font-weight]=\"btnThreeWeight\" [disabled]=\"btnThreeDisableValue\"\n             [id]=\"btnThreeId\" (click)=\"btnThreeAction.emit()\">\n             {{btnThreeLabel}}\n           </button>\n         </div>\n         <div class=\"pt-4 pb-4 pl-lg-4 pr-lg-3 w-xs-100\" *ngIf=\"btnFourVisible\">\n           <button type=\"button\" class=\"suku-p suku-{{btnFourType}} {{btnFourCustomClass}} w-xs-100\"\n             [ngClass]=\"{'disabled' : btnFourDisableValue}\" [style.font-size.rem]=\"btnFourSize\"\n             [style.color]=\"btnFourColor\" [style.font-weight]=\"btnFourWeight\" [disabled]=\"btnFourDisableValue\"\n             [id]=\"btnFourId\" (click)=\"btnFourAction.emit()\">\n             {{btnFourLabel}}\n           </button>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.form-footer{background-color:var(--suku-bg-secondary)}.suku-p{border:2px solid var(--suku-primary-color);background-color:var(--suku-bg-secondary);color:var(--suku-text-label-two);font-family:var(--suku-secondary-font);font-weight:600;font-size:var(--suku-font-size-3);padding:12px 30px;border-radius:12px 28px 23px 30px;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.25px;text-align:center}.suku-p:focus{outline:0!important;box-shadow:none!important}.suku-primary:hover{cursor:pointer!important;background-color:var(--suku-primary-color)!important;color:var(--suku-text-label-two)}.suku-primary:focus{color:var(--suku-text-label-two);background-color:var(--suku-primary-color);outline:0!important;box-shadow:none!important}.suku-p.disabled:hover{border:2px solid var(--suku-primary-color);background-color:var(--suku-bg-secondary);color:var(--suku-text-heading);cursor:not-allowed;opacity:.65}.suku-primary.disabled{background-color:var(--suku-bg-secondary);opacity:.65;color:grey}.suku-primary.disabled.focus,.suku-primary.disabled:focus,.suku-primary.disabled:hover,.suku-primary[disabled].focus,.suku-primary[disabled]:focus,.suku-primary[disabled]:hover,fieldset[disabled] .suku-primary.focus,fieldset[disabled] .suku-primary:focus,fieldset[disabled] .suku-primary:hover{background-color:var(--suku-bg-secondary)!important;color:grey;opacity:.65}.suku-primary.focus,.suku-primary:focus{background-color:var(--suku-primary-color);color:var(--suku-text-label-two)}.open>.dropdown-toggle .suku-primary.focus,.open>.dropdown-toggle .suku-primary:focus,.open>.dropdown-toggle.suku-primary:hover,.suku-primary.active.focus,.suku-primary.active:focus,.suku-primary.active:hover,.suku-primary:active.focus,.suku-primary:active:focus,.suku-primary:active:hover{background-color:var(--suku-primary-color);color:var(--suku-text-label-two)}.show>.suku-primary.dropdown-toggle,.suku-primary:not(:disabled):not(.disabled).active,.suku-primary:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}.suku-default{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-bg-secondary);color:var(--suku-text-label-one)}.suku-default:hover{cursor:pointer!important;border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:var(--suku-text-label-two)}.suku-default:active{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:var(--suku-text-label-two)}.suku-default .disabled{background-color:var(--suku-text-info);border-color:var(--suku-text-info);opacity:.65}.suku-default.disabled:hover{border:2px solid var(--suku-primary-color);background-color:var(--suku-bg-secondary);color:var(--suku-text-heading);opacity:.65}.suku-default.disabled{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-link);color:grey;opacity:.65}.suku-default.disabled.focus,.suku-default.disabled:focus,.suku-default.disabled:hover,.suku-default[disabled].focus,.suku-default[disabled]:focus,.suku-default[disabled]:hover,fieldset[disabled] .suku-default.focus,fieldset[disabled] .suku-default:focus,fieldset[disabled] .suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-link);color:grey;cursor:not-allowed!important;opacity:.65}.suku-default.focus,.suku-default:focus{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.open>.dropdown-toggle .suku-default.focus,.open>.dropdown-toggle .suku-default:focus,.open>.dropdown-toggle.suku-default:hover,.suku-default.active.focus,.suku-default.active:focus,.suku-default.active:hover,.suku-default:active.focus,.suku-default:active:focus,.suku-default:active:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.show>.suku-default.dropdown-toggle,.suku-default:not(:disabled):not(.disabled).active,.suku-default:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-text-info);border-color:var(--suku-text-info)}.show>.suku-default.dropdown-toggle:focus,.suku-default.focus,.suku-default:focus,.suku-default:not(:disabled):not(.disabled).active:focus,.suku-default:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}.default-btn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;word-break:break-word;color:var(--suku-text-label-two)}.c-pointer:hover{cursor:pointer;text-decoration:underline!important}@media (min-width:425px){.content-end{justify-content:flex-end!important}}@media (max-width:768px){.text-xs-center{text-align:center;justify-content:center!important}.content-end{justify-content:center!important}.w-xs-100{width:100%!important}.p-xs-2{padding:.5rem}}"]
                }] }
    ];
    /** @nocollapse */
    SukuFormFooterComponent.ctorParameters = function () { return []; };
    SukuFormFooterComponent.propDecorators = {
        btnOneLabel: [{ type: Input, args: ['btn-one-label',] }],
        btnOneId: [{ type: Input, args: ['btn-one-id',] }],
        btnOneSize: [{ type: Input, args: ['btn-one-size',] }],
        btnOneColor: [{ type: Input, args: ['btn-one-color',] }],
        btnOneWeight: [{ type: Input, args: ['btn-one-weight',] }],
        btnOneCustomClass: [{ type: Input, args: ['btn-one-custom-class',] }],
        btnOneVisible: [{ type: Input, args: ['btn-one-visible',] }],
        btnOneAction: [{ type: Output }],
        btnTwoLabel: [{ type: Input, args: ['btn-two-label',] }],
        btnTwoId: [{ type: Input, args: ['btn-two-id',] }],
        btnTwoSize: [{ type: Input, args: ['btn-two-size',] }],
        btnTwoColor: [{ type: Input, args: ['btn-two-color',] }],
        btnTwoWeight: [{ type: Input, args: ['btn-two-weight',] }],
        btnTwoVisible: [{ type: Input, args: ['btn-two-visible',] }],
        btnTwoCustomClass: [{ type: Input, args: ['btn-Two-custom-class',] }],
        btnTwoAction: [{ type: Output }],
        btnThreeLabel: [{ type: Input, args: ['btn-three-label',] }],
        btnThreeId: [{ type: Input, args: ['btn-three-id',] }],
        btnThreeSize: [{ type: Input, args: ['btn-three-size',] }],
        btnThreeColor: [{ type: Input, args: ['btn-three-color',] }],
        btnThreeWeight: [{ type: Input, args: ['btn-three-weight',] }],
        btnThreeVisible: [{ type: Input, args: ['btn-three-visible',] }],
        btnThreeCustomClass: [{ type: Input, args: ['btn-three-custom-class',] }],
        btnThreeDisableValue: [{ type: Input, args: ['btn-three-disable-value',] }],
        btnThreeAction: [{ type: Output }],
        btnFourLabel: [{ type: Input, args: ['btn-four-label',] }],
        btnFourId: [{ type: Input, args: ['btn-four-id',] }],
        btnFourSize: [{ type: Input, args: ['btn-four-size',] }],
        btnFourColor: [{ type: Input, args: ['btn-four-color',] }],
        btnFourWeight: [{ type: Input, args: ['btn-four-weight',] }],
        btnFourVisible: [{ type: Input, args: ['btn-four-visible',] }],
        btnFourCustomClass: [{ type: Input, args: ['btn-four-custom-class',] }],
        btnFourDisableValue: [{ type: Input, args: ['btn-four-disable-value',] }],
        btnFourAction: [{ type: Output }],
        btnThreeType: [{ type: Input, args: ['btn-three-type',] }],
        btnFourType: [{ type: Input, args: ['btn-four-type',] }]
    };
    return SukuFormFooterComponent;
}());
export { SukuFormFooterComponent };
if (false) {
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnOneLabel;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnOneId;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnOneSize;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnOneColor;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnOneWeight;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnOneCustomClass;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnOneVisible;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnOneAction;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnTwoLabel;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnTwoId;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnTwoSize;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnTwoColor;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnTwoWeight;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnTwoVisible;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnTwoCustomClass;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnTwoAction;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnThreeLabel;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnThreeId;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnThreeSize;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnThreeColor;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnThreeWeight;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnThreeVisible;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnThreeCustomClass;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnThreeDisableValue;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnThreeAction;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnFourLabel;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnFourId;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnFourSize;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnFourColor;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnFourWeight;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnFourVisible;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnFourCustomClass;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnFourDisableValue;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnFourAction;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnThreeType;
    /** @type {?} */
    SukuFormFooterComponent.prototype.btnFourType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mb3JtLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1mb3JtLWZvb3Rlci9zdWt1LWZvcm0tZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0U7SUE4Q0U7UUF4Q3dCLGdCQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzFCLGFBQVEsR0FBRyxTQUFTLENBQUM7UUFDbkIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNmLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ2Ysc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwQixnQkFBVyxHQUFHLGVBQWUsQ0FBQztRQUNqQyxhQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDZixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNoQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNwQixrQkFBYSxHQUFHLE1BQU0sQ0FBQztRQUNsQixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWxCLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBQzFCLGVBQVUsR0FBRyxTQUFTLENBQUM7UUFDckIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDakIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdEIsb0JBQWUsR0FBRyxNQUFNLENBQUM7UUFDcEIsd0JBQW1CLEdBQUcsRUFBRSxD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b25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZm9ybS1mb290ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1mb3JtLWZvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZm9ybS1mb290ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Rm9ybUZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnYnRuLW9uZS1sYWJlbCcpIGJ0bk9uZUxhYmVsID0gJ2NhbmNlbCc7XG4gIEBJbnB1dCgnYnRuLW9uZS1pZCcpIGJ0bk9uZUlkID0gJ3ByaW1hcnknO1xuICBASW5wdXQoJ2J0bi1vbmUtc2l6ZScpIGJ0bk9uZVNpemUgPSAnJztcbiAgQElucHV0KCdidG4tb25lLWNvbG9yJykgYnRuT25lQ29sb3IgPSAnJztcbiAgQElucHV0KCdidG4tb25lLXdlaWdodCcpIGJ0bk9uZVdlaWdodCA9ICc0MDAnO1xuICBASW5wdXQoJ2J0bi1vbmUtY3VzdG9tLWNsYXNzJykgYnRuT25lQ3VzdG9tQ2xhc3MgPSAnJztcbiAgQElucHV0KCdidG4tb25lLXZpc2libGUnKSBidG5PbmVWaXNpYmxlID0gJ3RydWUnO1xuICBAT3V0cHV0KCkgYnRuT25lQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgnYnRuLXR3by1sYWJlbCcpIGJ0blR3b0xhYmVsID0gJ3NhdmUgYXMgZHJhZnQnO1xuICBASW5wdXQoJ2J0bi10d28taWQnKSBidG5Ud29JZCA9ICdwcmltYXJ5JztcbiAgQElucHV0KCdidG4tdHdvLXNpemUnKSBidG5Ud29TaXplID0gJyc7XG4gIEBJbnB1dCgnYnRuLXR3by1jb2xvcicpIGJ0blR3b0NvbG9yID0gJyc7XG4gIEBJbnB1dCgnYnRuLXR3by13ZWlnaHQnKSBidG5Ud29XZWlnaHQgPSAnNDAwJztcbiAgQElucHV0KCdidG4tdHdvLXZpc2libGUnKSBidG5Ud29WaXNpYmxlID0gJ3RydWUnO1xuICBASW5wdXQoJ2J0bi1Ud28tY3VzdG9tLWNsYXNzJykgYnRuVHdvQ3VzdG9tQ2xhc3MgPSAnJztcbiAgQE91dHB1dCgpIGJ0blR3b0FjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoJ2J0bi10aHJlZS1sYWJlbCcpIGJ0blRocmVlTGFiZWwgPSAnYmFjayc7XG4gIEBJbnB1dCgnYnRuLXRocmVlLWlkJykgYnRuVGhyZWVJZCA9ICdwcmltYXJ5JztcbiAgQElucHV0KCdidG4tdGhyZWUtc2l6ZScpIGJ0blRocmVlU2l6ZSA9ICcnO1xuICBASW5wdXQoJ2J0bi10aHJlZS1jb2xvcicpIGJ0blRocmVlQ29sb3IgPSAnJztcbiAgQElucHV0KCdidG4tdGhyZWUtd2VpZ2h0JykgYnRuVGhyZWVXZWlnaHQgPSAnNjAwJztcbiAgQElucHV0KCdidG4tdGhyZWUtdmlzaWJsZScpIGJ0blRocmVlVmlzaWJsZSA9ICd0cnVlJztcbiAgQElucHV0KCdidG4tdGhyZWUtY3VzdG9tLWNsYXNzJykgYnRuVGhyZWVDdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoJ2J0bi10aHJlZS1kaXNhYmxlLXZhbHVlJykgYnRuVGhyZWVEaXNhYmxlVmFsdWU6IEJvb2xlYW47XG4gIEBPdXRwdXQoKSBidG5UaHJlZUFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoJ2J0bi1mb3VyLWxhYmVsJykgYnRuRm91ckxhYmVsID0gJ2JhY2snO1xuICBASW5wdXQoJ2J0bi1mb3VyLWlkJykgYnRuRm91cklkID0gJ3ByaW1hcnknO1xuICBASW5wdXQoJ2J0bi1mb3VyLXNpemUnKSBidG5Gb3VyU2l6ZSA9ICcnO1xuICBASW5wdXQoJ2J0bi1mb3VyLWNvbG9yJykgYnRuRm91ckNvbG9yID0gJyc7XG4gIEBJbnB1dCgnYnRuLWZvdXItd2VpZ2h0JykgYnRuRm91cldlaWdodCA9ICc2MDAnO1xuICBASW5wdXQoJ2J0bi1mb3VyLXZpc2libGUnKSBidG5Gb3VyVmlzaWJsZSA9ICd0cnVlJztcbiAgQElucHV0KCdidG4tZm91ci1jdXN0b20tY2xhc3MnKSBidG5Gb3VyQ3VzdG9tQ2xhc3MgPSAnJztcbiAgQElucHV0KCdidG4tZm91ci1kaXNhYmxlLXZhbHVlJykgYnRuRm91ckRpc2FibGVWYWx1ZTogQm9vbGVhbjtcbiAgQE91dHB1dCgpIGJ0bkZvdXJBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCdidG4tdGhyZWUtdHlwZScpIGJ0blRocmVlVHlwZSA9ICdwcmltYXJ5JztcbiAgQElucHV0KCdidG4tZm91ci10eXBlJykgYnRuRm91clR5cGUgPSAncHJpbWFyeSc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19