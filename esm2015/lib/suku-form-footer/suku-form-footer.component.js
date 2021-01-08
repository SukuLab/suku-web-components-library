/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-form-footer/suku-form-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuFormFooterComponent {
    constructor() {
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
    ngOnInit() {
    }
}
SukuFormFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-form-footer',
                template: " <div class=\"form-footer col-xl-12 col-lg-12 col-md-12\">\n   <div class=\"row\">\n     <div class=\"col-lg-6 col-md-12 align-items-center d-flex pl-lg-4 pr-lg-0\">\n       <div class=\"col-xl-12 col-md-12 col-lg-12\">\n         <div class=\"row\">\n           <div class=\"text-xs-center align-items-center d-flex w-xs-100 p-xs-2\" *ngIf=\"btnOneVisible\">\n             <span class=\"pl-lg-3 default-btn c-pointer text-xs-center {{btnOneCustomClass}}\" [id]=\"btnOneId\"\n               [style.font-size.rem]=\"btnOneSize\" [style.color]=\"btnOneColor\" [style.font-weight]=\"btnOneWeight\"\n               (click)=\"btnOneAction.emit()\">\n               {{btnOneLabel}}\n             </span>\n           </div>\n           <div class=\"pl-lg-4 text-xs-center align-items-center d-flex w-xs-100 p-xs-2\" *ngIf=\"btnTwoVisible\">\n             <span class=\"default-btn c-pointer text-xs-center {{btnTwoCustomClass}}\" [id]=\"btnTwoId\"\n               [style.font-size.rem]=\"btnTwoSize\" [style.color]=\"btnTwoColor\" [style.font-weight]=\"btnTwoWeight\"\n               (click)=\"btnTwoAction.emit()\">\n               {{btnTwoLabel}}\n             </span>\n           </div>\n         </div>\n       </div>\n     </div>\n     <div class=\"text-center col-md-12 col-lg-6 col-sm-12 content-end d-flex pl-5 pr-5\">\n       <div class=\"row\">\n         <div class=\"pt-4 pb-4 pl-lg-4 pr-lg-3 d-flex justify-content-end w-xs-100\" *ngIf=\"btnThreeVisible\">\n           <button type=\"button\" class=\"suku-p suku-{{btnThreeType}} {{btnThreeCustomClass}} w-xs-100\"\n             [ngClass]=\"{'disabled' : btnThreeDisableValue}\" [style.font-size.rem]=\"btnThreeSize\"\n             [style.color]=\"btnThreeColor\" [style.font-weight]=\"btnThreeWeight\" [disabled]=\"btnThreeDisableValue\"\n             [id]=\"btnThreeId\" (click)=\"btnThreeAction.emit()\">\n             {{btnThreeLabel}}\n           </button>\n         </div>\n         <div class=\"pt-4 pb-4 pl-lg-4 pr-lg-3 w-xs-100\" *ngIf=\"btnFourVisible\">\n           <button type=\"button\" class=\"suku-p suku-{{btnFourType}} {{btnFourCustomClass}} w-xs-100\"\n             [ngClass]=\"{'disabled' : btnFourDisableValue}\" [style.font-size.rem]=\"btnFourSize\"\n             [style.color]=\"btnFourColor\" [style.font-weight]=\"btnFourWeight\" [disabled]=\"btnFourDisableValue\"\n             [id]=\"btnFourId\" (click)=\"btnFourAction.emit()\">\n             {{btnFourLabel}}\n           </button>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.form-footer{background-color:var(--suku-bg-secondary)}.suku-p{border:2px solid var(--suku-primary-color);background-color:var(--suku-bg-secondary);color:var(--suku-text-label-two);font-family:var(--suku-secondary-font);font-weight:600;font-size:var(--suku-font-size-3);padding:12px 30px;border-radius:12px 28px 23px 30px;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.25px;text-align:center}.suku-p:focus{outline:0!important;box-shadow:none!important}.suku-primary:hover{cursor:pointer!important;background-color:var(--suku-primary-color)!important;color:var(--suku-text-label-two)}.suku-primary:focus{color:var(--suku-text-label-two);background-color:var(--suku-primary-color);outline:0!important;box-shadow:none!important}.suku-p.disabled:hover{border:2px solid var(--suku-primary-color);background-color:var(--suku-bg-secondary);color:var(--suku-text-heading);cursor:not-allowed;opacity:.65}.suku-primary.disabled{background-color:var(--suku-bg-secondary);opacity:.65;color:grey}.suku-primary.disabled.focus,.suku-primary.disabled:focus,.suku-primary.disabled:hover,.suku-primary[disabled].focus,.suku-primary[disabled]:focus,.suku-primary[disabled]:hover,fieldset[disabled] .suku-primary.focus,fieldset[disabled] .suku-primary:focus,fieldset[disabled] .suku-primary:hover{background-color:var(--suku-bg-secondary)!important;color:grey;opacity:.65}.suku-primary.focus,.suku-primary:focus{background-color:var(--suku-primary-color);color:var(--suku-text-label-two)}.open>.dropdown-toggle .suku-primary.focus,.open>.dropdown-toggle .suku-primary:focus,.open>.dropdown-toggle.suku-primary:hover,.suku-primary.active.focus,.suku-primary.active:focus,.suku-primary.active:hover,.suku-primary:active.focus,.suku-primary:active:focus,.suku-primary:active:hover{background-color:var(--suku-primary-color);color:var(--suku-text-label-two)}.show>.suku-primary.dropdown-toggle,.suku-primary:not(:disabled):not(.disabled).active,.suku-primary:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}.suku-default{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-bg-secondary);color:var(--suku-text-label-one)}.suku-default:hover{cursor:pointer!important;border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:var(--suku-text-label-two)}.suku-default:active{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:var(--suku-text-label-two)}.suku-default .disabled{background-color:var(--suku-text-info);border-color:var(--suku-text-info);opacity:.65}.suku-default.disabled:hover{border:2px solid var(--suku-primary-color);background-color:var(--suku-bg-secondary);color:var(--suku-text-heading);opacity:.65}.suku-default.disabled{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-link);color:grey;opacity:.65}.suku-default.disabled.focus,.suku-default.disabled:focus,.suku-default.disabled:hover,.suku-default[disabled].focus,.suku-default[disabled]:focus,.suku-default[disabled]:hover,fieldset[disabled] .suku-default.focus,fieldset[disabled] .suku-default:focus,fieldset[disabled] .suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-link);color:grey;cursor:not-allowed!important;opacity:.65}.suku-default.focus,.suku-default:focus{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.open>.dropdown-toggle .suku-default.focus,.open>.dropdown-toggle .suku-default:focus,.open>.dropdown-toggle.suku-default:hover,.suku-default.active.focus,.suku-default.active:focus,.suku-default.active:hover,.suku-default:active.focus,.suku-default:active:focus,.suku-default:active:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.show>.suku-default.dropdown-toggle,.suku-default:not(:disabled):not(.disabled).active,.suku-default:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-text-info);border-color:var(--suku-text-info)}.show>.suku-default.dropdown-toggle:focus,.suku-default.focus,.suku-default:focus,.suku-default:not(:disabled):not(.disabled).active:focus,.suku-default:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}.default-btn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;word-break:break-word;color:var(--suku-text-label-two)}.c-pointer:hover{cursor:pointer;text-decoration:underline!important}@media (min-width:425px){.content-end{justify-content:flex-end!important}}@media (max-width:768px){.text-xs-center{text-align:center;justify-content:center!important}.content-end{justify-content:center!important}.w-xs-100{width:100%!important}.p-xs-2{padding:.5rem}}"]
            }] }
];
/** @nocollapse */
SukuFormFooterComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mb3JtLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1mb3JtLWZvb3Rlci9zdWt1LWZvcm0tZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0UsTUFBTSxPQUFPLHVCQUF1QjtJQXlDbEM7UUF4Q3dCLGdCQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzFCLGFBQVEsR0FBRyxTQUFTLENBQUM7UUFDbkIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNmLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ2Ysc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwQixnQkFBVyxHQUFHLGVBQWUsQ0FBQztRQUNqQyxhQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDZixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNoQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNwQixrQkFBYSxHQUFHLE1BQU0sQ0FBQztRQUNsQixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWxCLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBQzFCLGVBQVUsR0FBRyxTQUFTLENBQUM7UUFDckIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDakIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdEIsb0JBQWUsR0FBRyxNQUFNLENBQUM7UUFDcEIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBRWhELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyQixpQkFBWSxHQUFHLE1BQU0sQ0FBQztRQUN6QixjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsTUFBTSxDQUFDO1FBQ25CLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUU5QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEIsaUJBQVksR0FBRyxTQUFTLENBQUM7UUFDMUIsZ0JBQVcsR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qiw0K0VBQWdEOzthQUVqRDs7Ozs7MEJBRUUsS0FBSyxTQUFDLGVBQWU7dUJBQ3JCLEtBQUssU0FBQyxZQUFZO3lCQUNsQixLQUFLLFNBQUMsY0FBYzswQkFDcEIsS0FBSyxTQUFDLGVBQWU7MkJBQ3JCLEtBQUssU0FBQyxnQkFBZ0I7Z0NBQ3RCLEtBQUssU0FBQyxzQkFBc0I7NEJBQzVCLEtBQUssU0FBQyxpQkFBaUI7MkJBQ3ZCLE1BQU07MEJBRU4sS0FBSyxTQUFDLGVBQWU7dUJBQ3JCLEtBQUssU0FBQyxZQUFZO3lCQUNsQixLQUFLLFNBQUMsY0FBYzswQkFDcEIsS0FBSyxTQUFDLGVBQWU7MkJBQ3JCLEtBQUssU0FBQyxnQkFBZ0I7NEJBQ3RCLEtBQUssU0FBQyxpQkFBaUI7Z0NBQ3ZCLEtBQUssU0FBQyxzQkFBc0I7MkJBQzVCLE1BQU07NEJBRU4sS0FBSyxTQUFDLGlCQUFpQjt5QkFDdkIsS0FBSyxTQUFDLGNBQWM7MkJBQ3BCLEtBQUssU0FBQyxnQkFBZ0I7NEJBQ3RCLEtBQUssU0FBQyxpQkFBaUI7NkJBQ3ZCLEtBQUssU0FBQyxrQkFBa0I7OEJBQ3hCLEtBQUssU0FBQyxtQkFBbUI7a0NBQ3pCLEtBQUssU0FBQyx3QkFBd0I7bUNBQzlCLEtBQUssU0FBQyx5QkFBeUI7NkJBQy9CLE1BQU07MkJBRU4sS0FBSyxTQUFDLGdCQUFnQjt3QkFDdEIsS0FBSyxTQUFDLGFBQWE7MEJBQ25CLEtBQUssU0FBQyxlQUFlOzJCQUNyQixLQUFLLFNBQUMsZ0JBQWdCOzRCQUN0QixLQUFLLFNBQUMsaUJBQWlCOzZCQUN2QixLQUFLLFNBQUMsa0JBQWtCO2lDQUN4QixLQUFLLFNBQUMsdUJBQXVCO2tDQUM3QixLQUFLLFNBQUMsd0JBQXdCOzRCQUM5QixNQUFNOzJCQUVOLEtBQUssU0FBQyxnQkFBZ0I7MEJBQ3RCLEtBQUssU0FBQyxlQUFlOzs7O0lBdkN0Qiw4Q0FBK0M7O0lBQy9DLDJDQUEwQzs7SUFDMUMsNkNBQXVDOztJQUN2Qyw4Q0FBeUM7O0lBQ3pDLCtDQUE4Qzs7SUFDOUMsb0RBQXNEOztJQUN0RCxnREFBaUQ7O0lBQ2pELCtDQUE0Qzs7SUFFNUMsOENBQXNEOztJQUN0RCwyQ0FBMEM7O0lBQzFDLDZDQUF1Qzs7SUFDdkMsOENBQXlDOztJQUN6QywrQ0FBOEM7O0lBQzlDLGdEQUFpRDs7SUFDakQsb0RBQXNEOztJQUN0RCwrQ0FBNEM7O0lBRTVDLGdEQUFpRDs7SUFDakQsNkNBQThDOztJQUM5QywrQ0FBMkM7O0lBQzNDLGdEQUE2Qzs7SUFDN0MsaURBQWtEOztJQUNsRCxrREFBcUQ7O0lBQ3JELHNEQUEwRDs7SUFDMUQsdURBQWdFOztJQUNoRSxpREFBOEM7O0lBRTlDLCtDQUErQzs7SUFDL0MsNENBQTRDOztJQUM1Qyw4Q0FBeUM7O0lBQ3pDLCtDQUEyQzs7SUFDM0MsZ0RBQWdEOztJQUNoRCxpREFBbUQ7O0lBQ25ELHFEQUF3RDs7SUFDeEQsc0RBQThEOztJQUM5RCxnREFBNkM7O0lBRTdDLCtDQUFrRDs7SUFDbEQsOENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWZvcm0tZm9vdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZm9ybS1mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWZvcm0tZm9vdGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUZvcm1Gb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ2J0bi1vbmUtbGFiZWwnKSBidG5PbmVMYWJlbCA9ICdjYW5jZWwnO1xuICBASW5wdXQoJ2J0bi1vbmUtaWQnKSBidG5PbmVJZCA9ICdwcmltYXJ5JztcbiAgQElucHV0KCdidG4tb25lLXNpemUnKSBidG5PbmVTaXplID0gJyc7XG4gIEBJbnB1dCgnYnRuLW9uZS1jb2xvcicpIGJ0bk9uZUNvbG9yID0gJyc7XG4gIEBJbnB1dCgnYnRuLW9uZS13ZWlnaHQnKSBidG5PbmVXZWlnaHQgPSAnNDAwJztcbiAgQElucHV0KCdidG4tb25lLWN1c3RvbS1jbGFzcycpIGJ0bk9uZUN1c3RvbUNsYXNzID0gJyc7XG4gIEBJbnB1dCgnYnRuLW9uZS12aXNpYmxlJykgYnRuT25lVmlzaWJsZSA9ICd0cnVlJztcbiAgQE91dHB1dCgpIGJ0bk9uZUFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoJ2J0bi10d28tbGFiZWwnKSBidG5Ud29MYWJlbCA9ICdzYXZlIGFzIGRyYWZ0JztcbiAgQElucHV0KCdidG4tdHdvLWlkJykgYnRuVHdvSWQgPSAncHJpbWFyeSc7XG4gIEBJbnB1dCgnYnRuLXR3by1zaXplJykgYnRuVHdvU2l6ZSA9ICcnO1xuICBASW5wdXQoJ2J0bi10d28tY29sb3InKSBidG5Ud29Db2xvciA9ICcnO1xuICBASW5wdXQoJ2J0bi10d28td2VpZ2h0JykgYnRuVHdvV2VpZ2h0ID0gJzQwMCc7XG4gIEBJbnB1dCgnYnRuLXR3by12aXNpYmxlJykgYnRuVHdvVmlzaWJsZSA9ICd0cnVlJztcbiAgQElucHV0KCdidG4tVHdvLWN1c3RvbS1jbGFzcycpIGJ0blR3b0N1c3RvbUNsYXNzID0gJyc7XG4gIEBPdXRwdXQoKSBidG5Ud29BY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCdidG4tdGhyZWUtbGFiZWwnKSBidG5UaHJlZUxhYmVsID0gJ2JhY2snO1xuICBASW5wdXQoJ2J0bi10aHJlZS1pZCcpIGJ0blRocmVlSWQgPSAncHJpbWFyeSc7XG4gIEBJbnB1dCgnYnRuLXRocmVlLXNpemUnKSBidG5UaHJlZVNpemUgPSAnJztcbiAgQElucHV0KCdidG4tdGhyZWUtY29sb3InKSBidG5UaHJlZUNvbG9yID0gJyc7XG4gIEBJbnB1dCgnYnRuLXRocmVlLXdlaWdodCcpIGJ0blRocmVlV2VpZ2h0ID0gJzYwMCc7XG4gIEBJbnB1dCgnYnRuLXRocmVlLXZpc2libGUnKSBidG5UaHJlZVZpc2libGUgPSAndHJ1ZSc7XG4gIEBJbnB1dCgnYnRuLXRocmVlLWN1c3RvbS1jbGFzcycpIGJ0blRocmVlQ3VzdG9tQ2xhc3MgPSAnJztcbiAgQElucHV0KCdidG4tdGhyZWUtZGlzYWJsZS12YWx1ZScpIGJ0blRocmVlRGlzYWJsZVZhbHVlOiBCb29sZWFuO1xuICBAT3V0cHV0KCkgYnRuVGhyZWVBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCdidG4tZm91ci1sYWJlbCcpIGJ0bkZvdXJMYWJlbCA9ICdiYWNrJztcbiAgQElucHV0KCdidG4tZm91ci1pZCcpIGJ0bkZvdXJJZCA9ICdwcmltYXJ5JztcbiAgQElucHV0KCdidG4tZm91ci1zaXplJykgYnRuRm91clNpemUgPSAnJztcbiAgQElucHV0KCdidG4tZm91ci1jb2xvcicpIGJ0bkZvdXJDb2xvciA9ICcnO1xuICBASW5wdXQoJ2J0bi1mb3VyLXdlaWdodCcpIGJ0bkZvdXJXZWlnaHQgPSAnNjAwJztcbiAgQElucHV0KCdidG4tZm91ci12aXNpYmxlJykgYnRuRm91clZpc2libGUgPSAndHJ1ZSc7XG4gIEBJbnB1dCgnYnRuLWZvdXItY3VzdG9tLWNsYXNzJykgYnRuRm91ckN1c3RvbUNsYXNzID0gJyc7XG4gIEBJbnB1dCgnYnRuLWZvdXItZGlzYWJsZS12YWx1ZScpIGJ0bkZvdXJEaXNhYmxlVmFsdWU6IEJvb2xlYW47XG4gIEBPdXRwdXQoKSBidG5Gb3VyQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgnYnRuLXRocmVlLXR5cGUnKSBidG5UaHJlZVR5cGUgPSAncHJpbWFyeSc7XG4gIEBJbnB1dCgnYnRuLWZvdXItdHlwZScpIGJ0bkZvdXJUeXBlID0gJ3ByaW1hcnknO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==