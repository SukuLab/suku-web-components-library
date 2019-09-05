/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuClaimsWidgetComponent = /** @class */ (function () {
    function SukuClaimsWidgetComponent() {
        this.claims = [
            {
                name: 'Mas fresco',
                verifiable: true
            },
            {
                name: 'Mejor ternura',
                verifiable: false
            },
            {
                name: 'Mejor para ',
                verifiable: false
            }
        ];
        this.claimTitleCustomClass = '';
        this.claimTooltipCustomClass = '';
        this.tooltipInfo = "<span>This claim has an expired endorsement. <a href=\"#\" target=\"_blank\">click here</a> to resend the endorsement request or contact <a href=\"#\" target=\"_blank\">Luther</a><span> to get an updated endorsement.This does not prevent you from self-endorsing this claim or from completing step3.";
    }
    /**
     * @return {?}
     */
    SukuClaimsWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuClaimsWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-claims-widget',
                    template: "<div class=\"col\">\n  <p class=\"col mb-1 pb-2\" *ngFor=\"let claim of claims;let i=index\">\n    <span class=\"row\" [ngClass]=\"{ 'info': !claim?.verifiable}\">\n      <i [ngClass]=\"{'suku-claim-verified-icon': claim?.verifiable, \n    'suku-claim-unverified-icon': !claim?.verifiable }\" class=\"suku-md\"></i>\n      <span class=\"mt-auto mb-auto pl-2 name {{claimTitleCustomClass}}\" id=\"claimTitle{{i}}\">{{claim?.name}}</span>\n      <span class=\"info-box title\" [style.right.rem]=\"positionTooltipRight\" [style.bottom.rem]=\"positionTooltipBottom\">\n        <span id=\"claimTooltip{{i}}\" class=\"{{claimTooltipCustomClass}}\">\n          <span [innerHTML]=\"tooltipInfo\"></span>\n        </span>\n      </span>\n    </span>\n  </p>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.name,.title{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3)}.info:hover .info-box{display:block}.info-box{z-index:100;width:800px;border-radius:6px;word-wrap:break-word;background:#000;display:none;position:absolute;bottom:-20px;right:23rem;text-align:left;padding:20px;font-size:13px;font-family:\"Encode Sans\",sans-serif;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.info-box::after{content:\"\";position:absolute;top:30px;left:-.5%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #191922;font-style:normal;font-stretch:normal;transform:rotate(-90deg)}"]
                }] }
    ];
    /** @nocollapse */
    SukuClaimsWidgetComponent.ctorParameters = function () { return []; };
    SukuClaimsWidgetComponent.propDecorators = {
        claims: [{ type: Input }],
        claimTitleCustomClass: [{ type: Input, args: ['claim-title-custom-class',] }],
        claimTooltipCustomClass: [{ type: Input, args: ['claim-tooltip-custom-class',] }],
        tooltipInfo: [{ type: Input }],
        positionTooltipRight: [{ type: Input, args: ['position-tooltip-right',] }],
        positionTooltipBottom: [{ type: Input, args: ['position-tooltip-bottom',] }]
    };
    return SukuClaimsWidgetComponent;
}());
export { SukuClaimsWidgetComponent };
if (false) {
    /** @type {?} */
    SukuClaimsWidgetComponent.prototype.claims;
    /** @type {?} */
    SukuClaimsWidgetComponent.prototype.claimTitleCustomClass;
    /** @type {?} */
    SukuClaimsWidgetComponent.prototype.claimTooltipCustomClass;
    /** @type {?} */
    SukuClaimsWidgetComponent.prototype.tooltipInfo;
    /** @type {?} */
    SukuClaimsWidgetComponent.prototype.positionTooltipRight;
    /** @type {?} */
    SukuClaimsWidgetComponent.prototype.positionTooltipBottom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jbGFpbXMtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNsYWltcy13aWRnZXQvc3VrdS1jbGFpbXMtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUEwQkU7UUFwQlMsV0FBTSxHQUFHO1lBQ2hCO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixVQUFVLEVBQUUsSUFBSTthQUNqQjtZQUNEO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixVQUFVLEVBQUUsS0FBSzthQUNsQjtZQUNEO2dCQUNFLElBQUksRUFBRSxhQUFhO2dCQUNuQixVQUFVLEVBQUUsS0FBSzthQUNsQjtTQUNGLENBQUM7UUFDaUMsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLDRCQUF1QixHQUFHLEVBQUUsQ0FBQztRQUN6RCxnQkFBVyxHQUFHLDRTQUFvUyxDQUFDO0lBSTVTLENBQUM7Ozs7SUFFakIsNENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBN0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qixnd0JBQWtEOztpQkFFbkQ7Ozs7O3lCQUVFLEtBQUs7d0NBY0wsS0FBSyxTQUFDLDBCQUEwQjswQ0FDaEMsS0FBSyxTQUFDLDRCQUE0Qjs4QkFDbEMsS0FBSzt1Q0FFTCxLQUFLLFNBQUMsd0JBQXdCO3dDQUM5QixLQUFLLFNBQUMseUJBQXlCOztJQU1sQyxnQ0FBQztDQUFBLEFBL0JELElBK0JDO1NBMUJZLHlCQUF5Qjs7O0lBQ3BDLDJDQWFFOztJQUNGLDBEQUE4RDs7SUFDOUQsNERBQWtFOztJQUNsRSxnREFBNFQ7O0lBRTVULHlEQUFzRDs7SUFDdEQsMERBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtY2xhaW1zLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWNsYWltcy13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNsYWltcy13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Q2xhaW1zV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY2xhaW1zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdNYXMgZnJlc2NvJyxcbiAgICAgIHZlcmlmaWFibGU6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdNZWpvciB0ZXJudXJhJyxcbiAgICAgIHZlcmlmaWFibGU6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTWVqb3IgcGFyYSAnLFxuICAgICAgdmVyaWZpYWJsZTogZmFsc2VcbiAgICB9XG4gIF07XG4gIEBJbnB1dCgnY2xhaW0tdGl0bGUtY3VzdG9tLWNsYXNzJykgY2xhaW1UaXRsZUN1c3RvbUNsYXNzID0gJyc7XG4gIEBJbnB1dCgnY2xhaW0tdG9vbHRpcC1jdXN0b20tY2xhc3MnKSBjbGFpbVRvb2x0aXBDdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoKSB0b29sdGlwSW5mbyA9IGA8c3Bhbj5UaGlzIGNsYWltIGhhcyBhbiBleHBpcmVkIGVuZG9yc2VtZW50LiA8YSBocmVmPVwiI1wiIHRhcmdldD1cIl9ibGFua1wiPmNsaWNrIGhlcmU8L2E+IHRvIHJlc2VuZCB0aGUgZW5kb3JzZW1lbnQgcmVxdWVzdCBvciBjb250YWN0IDxhIGhyZWY9XCIjXCIgdGFyZ2V0PVwiX2JsYW5rXCI+THV0aGVyPC9hPjxzcGFuPiB0byBnZXQgYW4gdXBkYXRlZCBlbmRvcnNlbWVudC5UaGlzIGRvZXMgbm90IHByZXZlbnQgeW91IGZyb20gc2VsZi1lbmRvcnNpbmcgdGhpcyBjbGFpbSBvciBmcm9tIGNvbXBsZXRpbmcgc3RlcDMuYDtcbiAgLy8gQElucHV0KCkgdG9vbHRpcEluZm8gPSAnVGhpcyBjbGFpbSBoYXMgYW4gZXhwaXJlZCBlbmRvcnNlbWVudCc7XG4gIEBJbnB1dCgncG9zaXRpb24tdG9vbHRpcC1yaWdodCcpIHBvc2l0aW9uVG9vbHRpcFJpZ2h0O1xuICBASW5wdXQoJ3Bvc2l0aW9uLXRvb2x0aXAtYm90dG9tJykgcG9zaXRpb25Ub29sdGlwQm90dG9tO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==