/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-claims-widget/suku-claims-widget.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuClaimsWidgetComponent = /** @class */ (function () {
    function SukuClaimsWidgetComponent() {
        this.claims = [
            {
                name: 'Mas fresco',
                verifiable: true,
                tooltipInfo: '',
                description: ["Optimiza el rendimiento animal", "Apoya la retención de minerales"]
            },
            {
                name: 'Mejor ternura',
                verifiable: false,
                tooltipInfo: 'claimEndorseExpired_Lbl',
                description: ["Optimiza el rendimiento animal", "Apoya la retención de minerales"]
            },
            {
                name: 'Mejor para ',
                verifiable: false,
                tooltipInfo: 'claimEndorseExpired_Lbl',
                description: ["Optimiza el rendimiento animal", "Apoya la retención de minerales"]
            }
        ];
        this.claimTitleCustomClass = '';
        this.claimTooltipCustomClass = '';
        this.tooltipInfo = "claimEndorseExpired_Lbl <a href=\"#\" target=\"_blank\">click here</a> to resend the endorsement request or contact <a href=\"#\" target=\"_blank\">Luke</a><span> to get an updated endorsement.This does not prevent you from self-endorsing this claim or from completing step3.";
        this.action = new EventEmitter();
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
                    template: "<div class=\"col\">\n  <p class=\"col mb-1 pb-2\" *ngFor=\"let claim of claims;let i=index\">\n    <span class=\"row\" [ngClass]=\"{ 'info': !claim?.verifiable}\">\n      <div class=\"col row\">\n        <div class=\"\">\n          <i [ngClass]=\"{'suku-claim-verified-icon': claim?.verifiable, \n        'suku-claim-unverified-icon': !claim?.verifiable }\" class=\"suku-md\"></i>\n        </div>\n        <div class=\"pt-1\" *ngIf=!(claim?.verifiable)>\n          <span class=\"mt-auto mb-auto pl-2 name {{claimTitleCustomClass}}\" id=\"claimTitle{{i}}\">{{claim?.name}}</span>\n        </div>\n        <div class=\"pt-1\" *ngIf= claim?.verifiable >\n          <span *ngIf= !(claim?.url) class=\"mt-auto mb-auto pl-2 name {{claimTitleCustomClass}}\" id=\"claimTitle{{i}}\">{{claim?.name}}</span>\n          <span *ngIf= claim?.url class=\"mt-auto mb-auto pl-2 name {{claimTitleCustomClass}}\" id=\"claimTitle{{i}}\">\n          <a class=\"suku-link c-pointer\" href=\"{{claim?.url}}\" target=\"_blank\">{{claim?.name}}</a></span>\n        </div>\n        <div class=\"pl-3\">\n          <span class=\"info-box title maxWidth\" [style.right.rem]=\"positionTooltipRight\"\n            [style.bottom.rem]=\"positionTooltipBottom\">\n            <span id=\"claimTooltip{{i}}\" class=\"{{claimTooltipCustomClass}}\">\n              <span>{{claim?.tooltipInfo | translate}}</span>\n            </span>\n          </span>\n        </div>\n      </div>\n    </span>\n    <span *ngIf=\"claim?.description\">\n      <ul *ngFor=\"let item of claim?.description\">\n        <li class=\"claimDescription\">{{item}}</li>\n      </ul>\n    </span>\n  </p>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.name,.title{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3)}.info:hover .info-box{display:block}.maxWidth{max-width:75%}.info-box{z-index:100;width:inherit;border-radius:6px;word-wrap:break-word;background:#000;display:none;position:absolute;bottom:0;text-align:left;padding:20px;font-size:13px;font-family:\"Encode Sans\",sans-serif;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.info-box::after{content:\"\";position:absolute;left:-.5%;top:2rem;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #191922;font-style:normal;font-stretch:normal;transform:rotate(-90deg)}.claimDescription{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3)}ul{list-style-type:circle}.c-pointer{cursor:pointer!important}.suku-link{color:#1d1d1d;text-decoration:underline}"]
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
        positionTooltipBottom: [{ type: Input, args: ['position-tooltip-bottom',] }],
        action: [{ type: Output }]
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
    /** @type {?} */
    SukuClaimsWidgetComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jbGFpbXMtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNsYWltcy13aWRnZXQvc3VrdS1jbGFpbXMtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0U7SUFpQ0U7UUEzQlMsV0FBTSxHQUFHO1lBQ2hCO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsV0FBVyxFQUFFLEVBQUU7Z0JBQ2YsV0FBVyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUsaUNBQWlDLENBQUM7YUFDbkY7WUFDRDtnQkFDRSxJQUFJLEVBQUUsZUFBZTtnQkFDckIsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFdBQVcsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLGlDQUFpQyxDQUFDO2FBQ25GO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxXQUFXLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSxpQ0FBaUMsQ0FBQzthQUNuRjtTQUNGLENBQUM7UUFDaUMsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLDRCQUF1QixHQUFHLEVBQUUsQ0FBQztRQUN6RCxnQkFBVyxHQUFHLHFSQUE2USxDQUFDO1FBSTNSLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFakIsNENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBcENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qiw2bkRBQWtEOztpQkFFbkQ7Ozs7O3lCQUVFLEtBQUs7d0NBb0JMLEtBQUssU0FBQywwQkFBMEI7MENBQ2hDLEtBQUssU0FBQyw0QkFBNEI7OEJBQ2xDLEtBQUs7dUNBRUwsS0FBSyxTQUFDLHdCQUF3Qjt3Q0FDOUIsS0FBSyxTQUFDLHlCQUF5Qjt5QkFDL0IsTUFBTTs7SUFNVCxnQ0FBQztDQUFBLEFBdENELElBc0NDO1NBakNZLHlCQUF5Qjs7O0lBQ3BDLDJDQW1CRTs7SUFDRiwwREFBOEQ7O0lBQzlELDREQUFrRTs7SUFDbEUsZ0RBQXFTOztJQUVyUyx5REFBc0Q7O0lBQ3RELDBEQUF3RDs7SUFDeEQsMkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWNsYWltcy13aWRnZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1jbGFpbXMtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1jbGFpbXMtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUNsYWltc1dpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNsYWltcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnTWFzIGZyZXNjbycsXG4gICAgICB2ZXJpZmlhYmxlOiB0cnVlLFxuICAgICAgdG9vbHRpcEluZm86ICcnLFxuICAgICAgZGVzY3JpcHRpb246IFtcIk9wdGltaXphIGVsIHJlbmRpbWllbnRvIGFuaW1hbFwiLCBcIkFwb3lhIGxhIHJldGVuY2nDs24gZGUgbWluZXJhbGVzXCJdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTWVqb3IgdGVybnVyYScsXG4gICAgICB2ZXJpZmlhYmxlOiBmYWxzZSxcbiAgICAgIHRvb2x0aXBJbmZvOiAnY2xhaW1FbmRvcnNlRXhwaXJlZF9MYmwnLFxuICAgICAgZGVzY3JpcHRpb246IFtcIk9wdGltaXphIGVsIHJlbmRpbWllbnRvIGFuaW1hbFwiLCBcIkFwb3lhIGxhIHJldGVuY2nDs24gZGUgbWluZXJhbGVzXCJdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTWVqb3IgcGFyYSAnLFxuICAgICAgdmVyaWZpYWJsZTogZmFsc2UsXG4gICAgICB0b29sdGlwSW5mbzogJ2NsYWltRW5kb3JzZUV4cGlyZWRfTGJsJyxcbiAgICAgIGRlc2NyaXB0aW9uOiBbXCJPcHRpbWl6YSBlbCByZW5kaW1pZW50byBhbmltYWxcIiwgXCJBcG95YSBsYSByZXRlbmNpw7NuIGRlIG1pbmVyYWxlc1wiXVxuICAgIH1cbiAgXTtcbiAgQElucHV0KCdjbGFpbS10aXRsZS1jdXN0b20tY2xhc3MnKSBjbGFpbVRpdGxlQ3VzdG9tQ2xhc3MgPSAnJztcbiAgQElucHV0KCdjbGFpbS10b29sdGlwLWN1c3RvbS1jbGFzcycpIGNsYWltVG9vbHRpcEN1c3RvbUNsYXNzID0gJyc7XG4gIEBJbnB1dCgpIHRvb2x0aXBJbmZvID0gYGNsYWltRW5kb3JzZUV4cGlyZWRfTGJsIDxhIGhyZWY9XCIjXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Y2xpY2sgaGVyZTwvYT4gdG8gcmVzZW5kIHRoZSBlbmRvcnNlbWVudCByZXF1ZXN0IG9yIGNvbnRhY3QgPGEgaHJlZj1cIiNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5MdWtlPC9hPjxzcGFuPiB0byBnZXQgYW4gdXBkYXRlZCBlbmRvcnNlbWVudC5UaGlzIGRvZXMgbm90IHByZXZlbnQgeW91IGZyb20gc2VsZi1lbmRvcnNpbmcgdGhpcyBjbGFpbSBvciBmcm9tIGNvbXBsZXRpbmcgc3RlcDMuYDtcbiAgLy8gQElucHV0KCkgdG9vbHRpcEluZm8gPSAnVGhpcyBjbGFpbSBoYXMgYW4gZXhwaXJlZCBlbmRvcnNlbWVudCc7XG4gIEBJbnB1dCgncG9zaXRpb24tdG9vbHRpcC1yaWdodCcpIHBvc2l0aW9uVG9vbHRpcFJpZ2h0O1xuICBASW5wdXQoJ3Bvc2l0aW9uLXRvb2x0aXAtYm90dG9tJykgcG9zaXRpb25Ub29sdGlwQm90dG9tO1xuICBAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==