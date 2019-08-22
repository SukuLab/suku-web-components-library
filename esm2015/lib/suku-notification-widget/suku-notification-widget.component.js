/**
 * @fileoverview added by tsickle
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
                template: "<div [class]=\"customclass\">\r\n  <div class=\"col pointer text-center p-0\">\r\n    <div class=\"pt-4\">\r\n      <span [class]=\"notificationValueCustomClass\" [style.color]=\"notificationValueColor\"\r\n        [style.font-size.rem]=\"notificationValueFontSize\">\r\n        {{ notificationValue > 9 ? ' ' :\r\n          '0'}}{{ notificationValue === 0 ? 0 :\r\n          ''}}{{notificationValue}}\r\n      </span>\r\n      <p class=\"pb-3 n-m mb-0\">\r\n        <a [class]=\"notificationTitleCustomClass\" id=\"{{id}}\" [style.font-size.rem]=\"notificationTitleColor\"\r\n          [style.color]=\"notificationTitleFontSize\">\r\n          {{notificationTitle || 'review bids' }}\r\n        </a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.box{border-radius:2px;background-color:var(--suku-homepage-bg);box-shadow:0 3px 3px 0 rgba(0,0,0,.03);border-left:1px solid #dee2e68a!important;border-bottom:1px solid #dee2e68a!important}.box-title{font-family:var(--suku-primary-font);font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:var(--suku-text-heading);word-break:break-word!important}.box-counter{font-family:var(--suku-primary-font);font-size:50px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.6px;text-align:center;color:var(--suku-primary-color)}.default{width:300px}.n-m{margin-top:-15px}@media (min-width:575.98px){.box{height:145px!important}}@media (min-width:767.98px){.box{height:175px!important}}@media (min-width:991.98px){.box{height:180px!important}}@media (min-width:1199.98px){.box{height:150px!important}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ub3RpZmljYXRpb24td2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LW5vdGlmaWNhdGlvbi13aWRnZXQvc3VrdS1ub3RpZmljYXRpb24td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLCtCQUErQjtJQVkxQztRQVZTLGdCQUFXLEdBQUcsNkJBQTZCLENBQUM7UUFHWCxpQ0FBNEIsR0FBQyxXQUFXLENBQUM7UUFDekMsaUNBQTRCLEdBQUMsYUFBYSxDQUFDO0lBTXJFLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsMHZCQUF3RDs7YUFFekQ7Ozs7O2lCQUVFLEtBQUs7MEJBQ0wsS0FBSztnQ0FDTixLQUFLLFNBQUMsb0JBQW9CO2dDQUN6QixLQUFLLFNBQUMsb0JBQW9COzJDQUMxQixLQUFLLFNBQUMsaUNBQWlDOzJDQUN2QyxLQUFLLFNBQUMsaUNBQWlDO3FDQUN2QyxLQUFLLFNBQUMsMEJBQTBCO3dDQUNoQyxLQUFLLFNBQUMsOEJBQThCO3FDQUNwQyxLQUFLLFNBQUMsMEJBQTBCO3dDQUNoQyxLQUFLLFNBQUMsOEJBQThCOzs7O0lBVHJDLDZDQUFZOztJQUNaLHNEQUFxRDs7SUFDdEQsNERBQStDOztJQUM5Qyw0REFBK0M7O0lBQy9DLHVFQUFtRjs7SUFDbkYsdUVBQXFGOztJQUNyRixpRUFBMEQ7O0lBQzFELG9FQUFpRTs7SUFDakUsaUVBQTBEOztJQUMxRCxvRUFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1ub3RpZmljYXRpb24td2lkZ2V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1ub3RpZmljYXRpb24td2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LW5vdGlmaWNhdGlvbi13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdU5vdGlmaWNhdGlvbldpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaWQ7XHJcbiAgQElucHV0KCkgY3VzdG9tY2xhc3MgPSAnY29sIGJveCBwb2ludGVyIHRleHQtY2VudGVyJztcclxuXHRASW5wdXQoJ25vdGlmaWNhdGlvbi10aXRsZScpIG5vdGlmaWNhdGlvblRpdGxlO1xyXG4gIEBJbnB1dCgnbm90aWZpY2F0aW9uLXZhbHVlJykgbm90aWZpY2F0aW9uVmFsdWU7XHJcbiAgQElucHV0KCdub3RpZmljYXRpb24tdGl0bGUtY3VzdG9tLWNsYXNzJykgbm90aWZpY2F0aW9uVGl0bGVDdXN0b21DbGFzcz1cImJveC10aXRsZVwiO1xyXG4gIEBJbnB1dCgnbm90aWZpY2F0aW9uLXZhbHVlLWN1c3RvbS1jbGFzcycpIG5vdGlmaWNhdGlvblZhbHVlQ3VzdG9tQ2xhc3M9XCJib3gtY291bnRlclwiO1xyXG4gIEBJbnB1dCgnbm90aWZpY2F0aW9uLXZhbHVlLWNvbG9yJykgbm90aWZpY2F0aW9uVmFsdWVDb2xvcjtcclxuICBASW5wdXQoJ25vdGlmaWNhdGlvbi12YWx1ZS1mb250LXNpemUnKSBub3RpZmljYXRpb25WYWx1ZUZvbnRTaXplO1xyXG4gIEBJbnB1dCgnbm90aWZpY2F0aW9uLXRpdGxlLWNvbG9yJykgbm90aWZpY2F0aW9uVGl0bGVDb2xvcjtcclxuICBASW5wdXQoJ25vdGlmaWNhdGlvbi10aXRsZS1mb250LXNpemUnKSBub3RpZmljYXRpb25UaXRsZUZvbnRTaXplO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==