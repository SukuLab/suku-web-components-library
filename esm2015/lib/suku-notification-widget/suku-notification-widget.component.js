/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-notification-widget/suku-notification-widget.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuNotificationWidgetComponent {
    constructor() {
        this.customclass = 'col box pointer text-center';
        this.notificationTitleCustomClass = "box-title";
        this.notificationValueCustomClass = "box-counter";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuNotificationWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-notification-widget',
                template: "<div [class]=\"customclass\">\n  <div class=\"col pointer text-center p-0\">\n    <div class=\"pt-4\">\n      <span [class]=\"notificationValueCustomClass\" [style.color]=\"notificationValueColor\"\n        [style.font-size.rem]=\"notificationValueFontSize\">\n        {{ notificationValue > 9 ? ' ' :\n          '0'}}{{ notificationValue === 0 ? 0 :\n          ''}}{{notificationValue}}\n      </span>\n      <p class=\"pb-3 n-m mb-0\">\n        <a [class]=\"notificationTitleCustomClass\" id=\"{{id}}\" [style.font-size.rem]=\"notificationTitleColor\"\n          [style.color]=\"notificationTitleFontSize\">\n          {{notificationTitle || 'review bids' }}\n        </a>\n      </p>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.box{border-radius:2px;background-color:var(--suku-homepage-bg);box-shadow:0 3px 3px 0 rgba(0,0,0,.03);border-left:1px solid #dee2e68a!important;border-bottom:1px solid #dee2e68a!important}.box-title{font-family:var(--suku-primary-font);font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:var(--suku-text-heading);word-break:break-word!important}.box-counter{font-family:var(--suku-primary-font);font-size:50px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.6px;text-align:center;color:var(--suku-primary-color)}.default{width:300px}.n-m{margin-top:-15px}@media (min-width:575.98px){.box{height:145px!important}}@media (min-width:767.98px){.box{height:175px!important}}@media (min-width:991.98px){.box{height:180px!important}}@media (min-width:1199.98px){.box{height:150px!important}}"]
            }] }
];
/** @nocollapse */
SukuNotificationWidgetComponent.ctorParameters = () => [];
SukuNotificationWidgetComponent.propDecorators = {
    id: [{ type: Input }],
    customclass: [{ type: Input }],
    notificationTitle: [{ type: Input, args: ['notification-title',] }],
    notificationValue: [{ type: Input, args: ['notification-value',] }],
    notificationTitleCustomClass: [{ type: Input, args: ['notification-title-custom-class',] }],
    notificationValueCustomClass: [{ type: Input, args: ['notification-value-custom-class',] }],
    notificationValueColor: [{ type: Input, args: ['notification-value-color',] }],
    notificationValueFontSize: [{ type: Input, args: ['notification-value-font-size',] }],
    notificationTitleColor: [{ type: Input, args: ['notification-title-color',] }],
    notificationTitleFontSize: [{ type: Input, args: ['notification-title-font-size',] }]
};
if (false) {
    /** @type {?} */
    SukuNotificationWidgetComponent.prototype.id;
    /** @type {?} */
    SukuNotificationWidgetComponent.prototype.customclass;
    /** @type {?} */
    SukuNotificationWidgetComponent.prototype.notificationTitle;
    /** @type {?} */
    SukuNotificationWidgetComponent.prototype.notificationValue;
    /** @type {?} */
    SukuNotificationWidgetComponent.prototype.notificationTitleCustomClass;
    /** @type {?} */
    SukuNotificationWidgetComponent.prototype.notificationValueCustomClass;
    /** @type {?} */
    SukuNotificationWidgetComponent.prototype.notificationValueColor;
    /** @type {?} */
    SukuNotificationWidgetComponent.prototype.notificationValueFontSize;
    /** @type {?} */
    SukuNotificationWidgetComponent.prototype.notificationTitleColor;
    /** @type {?} */
    SukuNotificationWidgetComponent.prototype.notificationTitleFontSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ub3RpZmljYXRpb24td2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LW5vdGlmaWNhdGlvbi13aWRnZXQvc3VrdS1ub3RpZmljYXRpb24td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTywrQkFBK0I7SUFZMUM7UUFWUyxnQkFBVyxHQUFHLDZCQUE2QixDQUFDO1FBR1gsaUNBQTRCLEdBQUMsV0FBVyxDQUFDO1FBQ3pDLGlDQUE0QixHQUFDLGFBQWEsQ0FBQztJQU1yRSxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLHd0QkFBd0Q7O2FBRXpEOzs7OztpQkFFRSxLQUFLOzBCQUNMLEtBQUs7Z0NBQ04sS0FBSyxTQUFDLG9CQUFvQjtnQ0FDekIsS0FBSyxTQUFDLG9CQUFvQjsyQ0FDMUIsS0FBSyxTQUFDLGlDQUFpQzsyQ0FDdkMsS0FBSyxTQUFDLGlDQUFpQztxQ0FDdkMsS0FBSyxTQUFDLDBCQUEwQjt3Q0FDaEMsS0FBSyxTQUFDLDhCQUE4QjtxQ0FDcEMsS0FBSyxTQUFDLDBCQUEwQjt3Q0FDaEMsS0FBSyxTQUFDLDhCQUE4Qjs7OztJQVRyQyw2Q0FBWTs7SUFDWixzREFBcUQ7O0lBQ3RELDREQUErQzs7SUFDOUMsNERBQStDOztJQUMvQyx1RUFBbUY7O0lBQ25GLHVFQUFxRjs7SUFDckYsaUVBQTBEOztJQUMxRCxvRUFBaUU7O0lBQ2pFLGlFQUEwRDs7SUFDMUQsb0VBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3Utbm90aWZpY2F0aW9uLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LW5vdGlmaWNhdGlvbi13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LW5vdGlmaWNhdGlvbi13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Tm90aWZpY2F0aW9uV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaWQ7XG4gIEBJbnB1dCgpIGN1c3RvbWNsYXNzID0gJ2NvbCBib3ggcG9pbnRlciB0ZXh0LWNlbnRlcic7XG5cdEBJbnB1dCgnbm90aWZpY2F0aW9uLXRpdGxlJykgbm90aWZpY2F0aW9uVGl0bGU7XG4gIEBJbnB1dCgnbm90aWZpY2F0aW9uLXZhbHVlJykgbm90aWZpY2F0aW9uVmFsdWU7XG4gIEBJbnB1dCgnbm90aWZpY2F0aW9uLXRpdGxlLWN1c3RvbS1jbGFzcycpIG5vdGlmaWNhdGlvblRpdGxlQ3VzdG9tQ2xhc3M9XCJib3gtdGl0bGVcIjtcbiAgQElucHV0KCdub3RpZmljYXRpb24tdmFsdWUtY3VzdG9tLWNsYXNzJykgbm90aWZpY2F0aW9uVmFsdWVDdXN0b21DbGFzcz1cImJveC1jb3VudGVyXCI7XG4gIEBJbnB1dCgnbm90aWZpY2F0aW9uLXZhbHVlLWNvbG9yJykgbm90aWZpY2F0aW9uVmFsdWVDb2xvcjtcbiAgQElucHV0KCdub3RpZmljYXRpb24tdmFsdWUtZm9udC1zaXplJykgbm90aWZpY2F0aW9uVmFsdWVGb250U2l6ZTtcbiAgQElucHV0KCdub3RpZmljYXRpb24tdGl0bGUtY29sb3InKSBub3RpZmljYXRpb25UaXRsZUNvbG9yO1xuICBASW5wdXQoJ25vdGlmaWNhdGlvbi10aXRsZS1mb250LXNpemUnKSBub3RpZmljYXRpb25UaXRsZUZvbnRTaXplO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19