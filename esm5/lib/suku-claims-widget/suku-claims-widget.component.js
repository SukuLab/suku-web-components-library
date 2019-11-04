/**
 * @fileoverview added by tsickle
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
                    template: "<div class=\"col\">\n  <p class=\"col mb-1 pb-2\" *ngFor=\"let claim of claims;let i=index\">\n    <span class=\"row\" [ngClass]=\"{ 'info': !claim?.verifiable}\">\n      <div class=\"col row\">\n        <div class=\"\">\n          <i [ngClass]=\"{'suku-claim-verified-icon': claim?.verifiable, \n        'suku-claim-unverified-icon': !claim?.verifiable }\" class=\"suku-md\"></i>\n        </div>\n        <div class=\"pt-1\" *ngIf=!(claim?.verifiable)>\n          <span class=\"mt-auto mb-auto pl-2 name {{claimTitleCustomClass}}\" id=\"claimTitle{{i}}\">{{claim?.name}}</span>\n        </div>\n        <div class=\"pt-1\" *ngIf= claim?.verifiable >\n          <span *ngIf= !(claim?.url) class=\"mt-auto mb-auto pl-2 name {{claimTitleCustomClass}}\" id=\"claimTitle{{i}}\">{{claim?.name}}</span>\n          <span *ngIf= claim?.url (click)=\"action.emit(claim?.url)\" class=\"suku-link c-pointer mt-auto mb-auto pl-2 name {{claimTitleCustomClass}}\" id=\"claimTitle{{i}}\">{{claim?.name}} verf</span>\n        </div>\n        <div class=\"pl-3\">\n          <span class=\"info-box title maxWidth\" [style.right.rem]=\"positionTooltipRight\"\n            [style.bottom.rem]=\"positionTooltipBottom\">\n            <span id=\"claimTooltip{{i}}\" class=\"{{claimTooltipCustomClass}}\">\n              <span>{{claim?.tooltipInfo | translate}}</span>\n            </span>\n          </span>\n        </div>\n      </div>\n    </span>\n    <span *ngIf=\"claim?.description\">\n      <ul *ngFor=\"let item of claim?.description\">\n        <li class=\"claimDescription\">{{item}}</li>\n      </ul>\n    </span>\n  </p>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.name,.title{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3)}.info:hover .info-box{display:block}.maxWidth{max-width:75%}.info-box{z-index:100;width:inherit;border-radius:6px;word-wrap:break-word;background:#000;display:none;position:absolute;bottom:0;text-align:left;padding:20px;font-size:13px;font-family:\"Encode Sans\",sans-serif;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.info-box::after{content:\"\";position:absolute;left:-.5%;top:2rem;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #191922;font-style:normal;font-stretch:normal;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.claimDescription{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3)}ul{list-style-type:circle}.c-pointer{cursor:pointer!important}.suku-link{color:#1d1d1d;text-decoration:underline}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jbGFpbXMtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNsYWltcy13aWRnZXQvc3VrdS1jbGFpbXMtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWlDRTtRQTNCUyxXQUFNLEdBQUc7WUFDaEI7Z0JBQ0UsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixXQUFXLEVBQUUsRUFBRTtnQkFDZixXQUFXLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSxpQ0FBaUMsQ0FBQzthQUNuRjtZQUNEO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixVQUFVLEVBQUUsS0FBSztnQkFDakIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsV0FBVyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUsaUNBQWlDLENBQUM7YUFDbkY7WUFDRDtnQkFDRSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFdBQVcsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLGlDQUFpQyxDQUFDO2FBQ25GO1NBQ0YsQ0FBQztRQUNpQywwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDekIsNEJBQXVCLEdBQUcsRUFBRSxDQUFDO1FBQ3pELGdCQUFXLEdBQUcscVJBQTZRLENBQUM7UUFJM1IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVqQiw0Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFwQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLCtsREFBa0Q7O2lCQUVuRDs7Ozs7eUJBRUUsS0FBSzt3Q0FvQkwsS0FBSyxTQUFDLDBCQUEwQjswQ0FDaEMsS0FBSyxTQUFDLDRCQUE0Qjs4QkFDbEMsS0FBSzt1Q0FFTCxLQUFLLFNBQUMsd0JBQXdCO3dDQUM5QixLQUFLLFNBQUMseUJBQXlCO3lCQUMvQixNQUFNOztJQU1ULGdDQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FqQ1kseUJBQXlCOzs7SUFDcEMsMkNBbUJFOztJQUNGLDBEQUE4RDs7SUFDOUQsNERBQWtFOztJQUNsRSxnREFBcVM7O0lBRXJTLHlEQUFzRDs7SUFDdEQsMERBQXdEOztJQUN4RCwyQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtY2xhaW1zLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWNsYWltcy13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNsYWltcy13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Q2xhaW1zV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY2xhaW1zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdNYXMgZnJlc2NvJyxcbiAgICAgIHZlcmlmaWFibGU6IHRydWUsXG4gICAgICB0b29sdGlwSW5mbzogJycsXG4gICAgICBkZXNjcmlwdGlvbjogW1wiT3B0aW1pemEgZWwgcmVuZGltaWVudG8gYW5pbWFsXCIsIFwiQXBveWEgbGEgcmV0ZW5jacOzbiBkZSBtaW5lcmFsZXNcIl1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdNZWpvciB0ZXJudXJhJyxcbiAgICAgIHZlcmlmaWFibGU6IGZhbHNlLFxuICAgICAgdG9vbHRpcEluZm86ICdjbGFpbUVuZG9yc2VFeHBpcmVkX0xibCcsXG4gICAgICBkZXNjcmlwdGlvbjogW1wiT3B0aW1pemEgZWwgcmVuZGltaWVudG8gYW5pbWFsXCIsIFwiQXBveWEgbGEgcmV0ZW5jacOzbiBkZSBtaW5lcmFsZXNcIl1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdNZWpvciBwYXJhICcsXG4gICAgICB2ZXJpZmlhYmxlOiBmYWxzZSxcbiAgICAgIHRvb2x0aXBJbmZvOiAnY2xhaW1FbmRvcnNlRXhwaXJlZF9MYmwnLFxuICAgICAgZGVzY3JpcHRpb246IFtcIk9wdGltaXphIGVsIHJlbmRpbWllbnRvIGFuaW1hbFwiLCBcIkFwb3lhIGxhIHJldGVuY2nDs24gZGUgbWluZXJhbGVzXCJdXG4gICAgfVxuICBdO1xuICBASW5wdXQoJ2NsYWltLXRpdGxlLWN1c3RvbS1jbGFzcycpIGNsYWltVGl0bGVDdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoJ2NsYWltLXRvb2x0aXAtY3VzdG9tLWNsYXNzJykgY2xhaW1Ub29sdGlwQ3VzdG9tQ2xhc3MgPSAnJztcbiAgQElucHV0KCkgdG9vbHRpcEluZm8gPSBgY2xhaW1FbmRvcnNlRXhwaXJlZF9MYmwgPGEgaHJlZj1cIiNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5jbGljayBoZXJlPC9hPiB0byByZXNlbmQgdGhlIGVuZG9yc2VtZW50IHJlcXVlc3Qgb3IgY29udGFjdCA8YSBocmVmPVwiI1wiIHRhcmdldD1cIl9ibGFua1wiPkx1a2U8L2E+PHNwYW4+IHRvIGdldCBhbiB1cGRhdGVkIGVuZG9yc2VtZW50LlRoaXMgZG9lcyBub3QgcHJldmVudCB5b3UgZnJvbSBzZWxmLWVuZG9yc2luZyB0aGlzIGNsYWltIG9yIGZyb20gY29tcGxldGluZyBzdGVwMy5gO1xuICAvLyBASW5wdXQoKSB0b29sdGlwSW5mbyA9ICdUaGlzIGNsYWltIGhhcyBhbiBleHBpcmVkIGVuZG9yc2VtZW50JztcbiAgQElucHV0KCdwb3NpdGlvbi10b29sdGlwLXJpZ2h0JykgcG9zaXRpb25Ub29sdGlwUmlnaHQ7XG4gIEBJbnB1dCgncG9zaXRpb24tdG9vbHRpcC1ib3R0b20nKSBwb3NpdGlvblRvb2x0aXBCb3R0b207XG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19