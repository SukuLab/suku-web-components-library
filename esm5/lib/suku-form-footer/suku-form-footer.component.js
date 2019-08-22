/**
 * @fileoverview added by tsickle
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
                    template: " <div class=\"form-footer col-xl-12 col-lg-12 col-md-12\">\r\n   <div class=\"row\">\r\n     <div class=\"col-lg-6 col-md-12 align-items-center d-flex pl-lg-4 pr-lg-0\">\r\n       <div class=\"col-xl-12 col-md-12 col-lg-12\">\r\n         <div class=\"row\">\r\n           <div class=\"text-xs-center align-items-center d-flex w-xs-100 p-xs-2\" *ngIf=\"btnOneVisible\">\r\n             <span class=\"pl-lg-3 default-btn c-pointer text-xs-center {{btnOneCustomClass}}\" [id]=\"btnOneId\"\r\n               [style.font-size.rem]=\"btnOneSize\" [style.color]=\"btnOneColor\" [style.font-weight]=\"btnOneWeight\"\r\n               (click)=\"btnOneAction.emit()\">\r\n               {{btnOneLabel}}\r\n             </span>\r\n           </div>\r\n           <div class=\"pl-lg-4 text-xs-center align-items-center d-flex w-xs-100 p-xs-2\" *ngIf=\"btnTwoVisible\">\r\n             <span class=\"default-btn c-pointer text-xs-center {{btnTwoCustomClass}}\" [id]=\"btnTwoId\"\r\n               [style.font-size.rem]=\"btnTwoSize\" [style.color]=\"btnTwoColor\" [style.font-weight]=\"btnTwoWeight\"\r\n               (click)=\"btnTwoAction.emit()\">\r\n               {{btnTwoLabel}}\r\n             </span>\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n     <div class=\"text-center col-md-12 col-lg-6 col-sm-12 content-end d-flex pl-5 pr-5\">\r\n       <div class=\"row\">\r\n         <div class=\"pt-4 pb-4 pl-lg-4 pr-lg-3 d-flex justify-content-end w-xs-100\" *ngIf=\"btnThreeVisible\">\r\n           <button type=\"button\" class=\"suku-p suku-{{btnThreeType}} {{btnThreeCustomClass}} w-xs-100\"\r\n             [ngClass]=\"{'disabled' : btnThreeDisableValue}\" [style.font-size.rem]=\"btnThreeSize\"\r\n             [style.color]=\"btnThreeColor\" [style.font-weight]=\"btnThreeWeight\" [disabled]=\"btnThreeDisableValue\"\r\n             [id]=\"btnThreeId\" (click)=\"btnThreeAction.emit()\">\r\n             {{btnThreeLabel}}\r\n           </button>\r\n         </div>\r\n         <div class=\"pt-4 pb-4 pl-lg-4 pr-lg-3 w-xs-100\" *ngIf=\"btnFourVisible\">\r\n           <button type=\"button\" class=\"suku-p suku-{{btnFourType}} {{btnFourCustomClass}} w-xs-100\"\r\n             [ngClass]=\"{'disabled' : btnFourDisableValue}\" [style.font-size.rem]=\"btnFourSize\"\r\n             [style.color]=\"btnFourColor\" [style.font-weight]=\"btnFourWeight\" [disabled]=\"btnFourDisableValue\"\r\n             [id]=\"btnFourId\" (click)=\"btnFourAction.emit()\">\r\n             {{btnFourLabel}}\r\n           </button>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n </div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.form-footer{background-color:var(--suku-bg-secondary)}.suku-p{border:2px solid var(--suku-primary-color);background-color:var(--suku-bg-secondary);color:var(--suku-text-label-two);font-family:var(--suku-secondary-font);font-weight:600;font-size:var(--suku-font-size-3);padding:12px 30px;border-radius:12px 28px 23px 30px;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.25px;text-align:center}.suku-p:focus{outline:0!important;box-shadow:none!important}.suku-primary:hover{cursor:pointer!important;background-color:var(--suku-primary-color)!important;color:var(--suku-text-label-two)}.suku-primary:focus{color:var(--suku-text-label-two);background-color:var(--suku-primary-color);outline:0!important;box-shadow:none!important}.suku-p.disabled:hover{border:2px solid var(--suku-primary-color);background-color:var(--suku-bg-secondary);color:var(--suku-text-heading);cursor:not-allowed;opacity:.65}.suku-primary.disabled{background-color:var(--suku-bg-secondary);opacity:.65;color:grey}.suku-primary.disabled.focus,.suku-primary.disabled:focus,.suku-primary.disabled:hover,.suku-primary[disabled].focus,.suku-primary[disabled]:focus,.suku-primary[disabled]:hover,fieldset[disabled] .suku-primary.focus,fieldset[disabled] .suku-primary:focus,fieldset[disabled] .suku-primary:hover{background-color:var(--suku-bg-secondary)!important;color:grey;opacity:.65}.suku-primary.focus,.suku-primary:focus{background-color:var(--suku-primary-color);color:var(--suku-text-label-two)}.open>.dropdown-toggle .suku-primary.focus,.open>.dropdown-toggle .suku-primary:focus,.open>.dropdown-toggle.suku-primary:hover,.suku-primary.active.focus,.suku-primary.active:focus,.suku-primary.active:hover,.suku-primary:active.focus,.suku-primary:active:focus,.suku-primary:active:hover{background-color:var(--suku-primary-color);color:var(--suku-text-label-two)}.show>.suku-primary.dropdown-toggle,.suku-primary:not(:disabled):not(.disabled).active,.suku-primary:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}.suku-default{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-bg-secondary);color:var(--suku-text-label-one)}.suku-default:hover{cursor:pointer!important;border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:var(--suku-text-label-two)}.suku-default:active{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:var(--suku-text-label-two)}.suku-default .disabled{background-color:var(--suku-text-info);border-color:var(--suku-text-info);opacity:.65}.suku-default.disabled:hover{border:2px solid var(--suku-primary-color);background-color:var(--suku-bg-secondary);color:var(--suku-text-heading);opacity:.65}.suku-default.disabled{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-link);color:grey;opacity:.65}.suku-default.disabled.focus,.suku-default.disabled:focus,.suku-default.disabled:hover,.suku-default[disabled].focus,.suku-default[disabled]:focus,.suku-default[disabled]:hover,fieldset[disabled] .suku-default.focus,fieldset[disabled] .suku-default:focus,fieldset[disabled] .suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-link);color:grey;cursor:not-allowed!important;opacity:.65}.suku-default.focus,.suku-default:focus{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.open>.dropdown-toggle .suku-default.focus,.open>.dropdown-toggle .suku-default:focus,.open>.dropdown-toggle.suku-default:hover,.suku-default.active.focus,.suku-default.active:focus,.suku-default.active:hover,.suku-default:active.focus,.suku-default:active:focus,.suku-default:active:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.show>.suku-default.dropdown-toggle,.suku-default:not(:disabled):not(.disabled).active,.suku-default:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-text-info);border-color:var(--suku-text-info)}.show>.suku-default.dropdown-toggle:focus,.suku-default.focus,.suku-default:focus,.suku-default:not(:disabled):not(.disabled).active:focus,.suku-default:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}.default-btn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;word-break:break-word;color:var(--suku-text-label-two)}.c-pointer:hover{cursor:pointer;text-decoration:underline!important}@media (min-width:425px){.content-end{justify-content:flex-end!important}}@media (max-width:768px){.text-xs-center{text-align:center;justify-content:center!important}.content-end{justify-content:center!important}.w-xs-100{width:100%!important}.p-xs-2{padding:.5rem}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mb3JtLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1mb3JtLWZvb3Rlci9zdWt1LWZvcm0tZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQThDRTtRQXhDd0IsZ0JBQVcsR0FBRyxRQUFRLENBQUM7UUFDMUIsYUFBUSxHQUFHLFNBQVMsQ0FBQztRQUNuQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDaEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDZixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUIsa0JBQWEsR0FBRyxNQUFNLENBQUM7UUFDdkMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXBCLGdCQUFXLEdBQUcsZUFBZSxDQUFDO1FBQ2pDLGFBQVEsR0FBRyxTQUFTLENBQUM7UUFDbkIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNmLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBQ2xCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUM1QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbEIsa0JBQWEsR0FBRyxNQUFNLENBQUM7UUFDMUIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUNyQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNqQixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNsQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN0QixvQkFBZSxHQUFHLE1BQU0sQ0FBQztRQUNwQix3QkFBbUIsR0FBRyxFQUFFLENB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bmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1mb3JtLWZvb3RlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZm9ybS1mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZm9ybS1mb290ZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUZvcm1Gb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgnYnRuLW9uZS1sYWJlbCcpIGJ0bk9uZUxhYmVsID0gJ2NhbmNlbCc7XHJcbiAgQElucHV0KCdidG4tb25lLWlkJykgYnRuT25lSWQgPSAncHJpbWFyeSc7XHJcbiAgQElucHV0KCdidG4tb25lLXNpemUnKSBidG5PbmVTaXplID0gJyc7XHJcbiAgQElucHV0KCdidG4tb25lLWNvbG9yJykgYnRuT25lQ29sb3IgPSAnJztcclxuICBASW5wdXQoJ2J0bi1vbmUtd2VpZ2h0JykgYnRuT25lV2VpZ2h0ID0gJzQwMCc7XHJcbiAgQElucHV0KCdidG4tb25lLWN1c3RvbS1jbGFzcycpIGJ0bk9uZUN1c3RvbUNsYXNzID0gJyc7XHJcbiAgQElucHV0KCdidG4tb25lLXZpc2libGUnKSBidG5PbmVWaXNpYmxlID0gJ3RydWUnO1xyXG4gIEBPdXRwdXQoKSBidG5PbmVBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBJbnB1dCgnYnRuLXR3by1sYWJlbCcpIGJ0blR3b0xhYmVsID0gJ3NhdmUgYXMgZHJhZnQnO1xyXG4gIEBJbnB1dCgnYnRuLXR3by1pZCcpIGJ0blR3b0lkID0gJ3ByaW1hcnknO1xyXG4gIEBJbnB1dCgnYnRuLXR3by1zaXplJykgYnRuVHdvU2l6ZSA9ICcnO1xyXG4gIEBJbnB1dCgnYnRuLXR3by1jb2xvcicpIGJ0blR3b0NvbG9yID0gJyc7XHJcbiAgQElucHV0KCdidG4tdHdvLXdlaWdodCcpIGJ0blR3b1dlaWdodCA9ICc0MDAnO1xyXG4gIEBJbnB1dCgnYnRuLXR3by12aXNpYmxlJykgYnRuVHdvVmlzaWJsZSA9ICd0cnVlJztcclxuICBASW5wdXQoJ2J0bi1Ud28tY3VzdG9tLWNsYXNzJykgYnRuVHdvQ3VzdG9tQ2xhc3MgPSAnJztcclxuICBAT3V0cHV0KCkgYnRuVHdvQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoJ2J0bi10aHJlZS1sYWJlbCcpIGJ0blRocmVlTGFiZWwgPSAnYmFjayc7XHJcbiAgQElucHV0KCdidG4tdGhyZWUtaWQnKSBidG5UaHJlZUlkID0gJ3ByaW1hcnknO1xyXG4gIEBJbnB1dCgnYnRuLXRocmVlLXNpemUnKSBidG5UaHJlZVNpemUgPSAnJztcclxuICBASW5wdXQoJ2J0bi10aHJlZS1jb2xvcicpIGJ0blRocmVlQ29sb3IgPSAnJztcclxuICBASW5wdXQoJ2J0bi10aHJlZS13ZWlnaHQnKSBidG5UaHJlZVdlaWdodCA9ICc2MDAnO1xyXG4gIEBJbnB1dCgnYnRuLXRocmVlLXZpc2libGUnKSBidG5UaHJlZVZpc2libGUgPSAndHJ1ZSc7XHJcbiAgQElucHV0KCdidG4tdGhyZWUtY3VzdG9tLWNsYXNzJykgYnRuVGhyZWVDdXN0b21DbGFzcyA9ICcnO1xyXG4gIEBJbnB1dCgnYnRuLXRocmVlLWRpc2FibGUtdmFsdWUnKSBidG5UaHJlZURpc2FibGVWYWx1ZTogQm9vbGVhbjtcclxuICBAT3V0cHV0KCkgYnRuVGhyZWVBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBJbnB1dCgnYnRuLWZvdXItbGFiZWwnKSBidG5Gb3VyTGFiZWwgPSAnYmFjayc7XHJcbiAgQElucHV0KCdidG4tZm91ci1pZCcpIGJ0bkZvdXJJZCA9ICdwcmltYXJ5JztcclxuICBASW5wdXQoJ2J0bi1mb3VyLXNpemUnKSBidG5Gb3VyU2l6ZSA9ICcnO1xyXG4gIEBJbnB1dCgnYnRuLWZvdXItY29sb3InKSBidG5Gb3VyQ29sb3IgPSAnJztcclxuICBASW5wdXQoJ2J0bi1mb3VyLXdlaWdodCcpIGJ0bkZvdXJXZWlnaHQgPSAnNjAwJztcclxuICBASW5wdXQoJ2J0bi1mb3VyLXZpc2libGUnKSBidG5Gb3VyVmlzaWJsZSA9ICd0cnVlJztcclxuICBASW5wdXQoJ2J0bi1mb3VyLWN1c3RvbS1jbGFzcycpIGJ0bkZvdXJDdXN0b21DbGFzcyA9ICcnO1xyXG4gIEBJbnB1dCgnYnRuLWZvdXItZGlzYWJsZS12YWx1ZScpIGJ0bkZvdXJEaXNhYmxlVmFsdWU6IEJvb2xlYW47XHJcbiAgQE91dHB1dCgpIGJ0bkZvdXJBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBJbnB1dCgnYnRuLXRocmVlLXR5cGUnKSBidG5UaHJlZVR5cGUgPSAncHJpbWFyeSc7XHJcbiAgQElucHV0KCdidG4tZm91ci10eXBlJykgYnRuRm91clR5cGUgPSAncHJpbWFyeSc7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=