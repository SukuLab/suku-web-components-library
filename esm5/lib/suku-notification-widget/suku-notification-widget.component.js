/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-notification-widget/suku-notification-widget.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuNotificationWidgetComponent = /** @class */ (function () {
    function SukuNotificationWidgetComponent() {
        this.customclass = 'col box pointer text-center';
        this.notificationTitleCustomClass = "box-title";
        this.notificationValueCustomClass = "box-counter";
    }
    /**
     * @return {?}
     */
    SukuNotificationWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuNotificationWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-notification-widget',
                    template: "<div [class]=\"customclass\">\n  <div class=\"col pointer text-center p-0\">\n    <div class=\"pt-4\">\n      <span [class]=\"notificationValueCustomClass\" [style.color]=\"notificationValueColor\"\n        [style.font-size.rem]=\"notificationValueFontSize\">\n        {{ notificationValue > 9 ? ' ' :\n          '0'}}{{ notificationValue === 0 ? 0 :\n          ''}}{{notificationValue}}\n      </span>\n      <p class=\"pb-3 n-m mb-0\">\n        <a [class]=\"notificationTitleCustomClass\" id=\"{{id}}\" [style.font-size.rem]=\"notificationTitleColor\"\n          [style.color]=\"notificationTitleFontSize\">\n          {{notificationTitle || 'review bids' }}\n        </a>\n      </p>\n    </div>\n  </div>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.box{border-radius:2px;background-color:var(--suku-homepage-bg);box-shadow:0 3px 3px 0 rgba(0,0,0,.03);border-left:1px solid #dee2e68a!important;border-bottom:1px solid #dee2e68a!important}.box-title{font-family:var(--suku-primary-font);font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:var(--suku-text-heading);word-break:break-word!important}.box-counter{font-family:var(--suku-primary-font);font-size:50px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.6px;text-align:center;color:var(--suku-primary-color)}.default{width:300px}.n-m{margin-top:-15px}@media (min-width:575.98px){.box{height:145px!important}}@media (min-width:767.98px){.box{height:175px!important}}@media (min-width:991.98px){.box{height:180px!important}}@media (min-width:1199.98px){.box{height:150px!important}}"]
                }] }
    ];
    /** @nocollapse */
    SukuNotificationWidgetComponent.ctorParameters = function () { return []; };
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
    return SukuNotificationWidgetComponent;
}());
export { SukuNotificationWidgetComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ub3RpZmljYXRpb24td2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LW5vdGlmaWNhdGlvbi13aWRnZXQvc3VrdS1ub3RpZmljYXRpb24td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBaUJFO1FBVlMsZ0JBQVcsR0FBRyw2QkFBNkIsQ0FBQztRQUdYLGlDQUE0QixHQUFDLFdBQVcsQ0FBQztRQUN6QyxpQ0FBNEIsR0FBQyxhQUFhLENBQUM7SUFNckUsQ0FBQzs7OztJQUVqQixrREFBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFwQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLHd0QkFBd0Q7O2lCQUV6RDs7Ozs7cUJBRUUsS0FBSzs4QkFDTCxLQUFLO29DQUNOLEtBQUssU0FBQyxvQkFBb0I7b0NBQ3pCLEtBQUssU0FBQyxvQkFBb0I7K0NBQzFCLEtBQUssU0FBQyxpQ0FBaUM7K0NBQ3ZDLEtBQUssU0FBQyxpQ0FBaUM7eUNBQ3ZDLEtBQUssU0FBQywwQkFBMEI7NENBQ2hDLEtBQUssU0FBQyw4QkFBOEI7eUNBQ3BDLEtBQUssU0FBQywwQkFBMEI7NENBQ2hDLEtBQUssU0FBQyw4QkFBOEI7O0lBT3ZDLHNDQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FqQlksK0JBQStCOzs7SUFDMUMsNkNBQVk7O0lBQ1osc0RBQXFEOztJQUN0RCw0REFBK0M7O0lBQzlDLDREQUErQzs7SUFDL0MsdUVBQW1GOztJQUNuRix1RUFBcUY7O0lBQ3JGLGlFQUEwRDs7SUFDMUQsb0VBQWlFOztJQUNqRSxpRUFBMEQ7O0lBQzFELG9FQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LW5vdGlmaWNhdGlvbi13aWRnZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1ub3RpZmljYXRpb24td2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1ub3RpZmljYXRpb24td2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdU5vdGlmaWNhdGlvbldpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlkO1xuICBASW5wdXQoKSBjdXN0b21jbGFzcyA9ICdjb2wgYm94IHBvaW50ZXIgdGV4dC1jZW50ZXInO1xuXHRASW5wdXQoJ25vdGlmaWNhdGlvbi10aXRsZScpIG5vdGlmaWNhdGlvblRpdGxlO1xuICBASW5wdXQoJ25vdGlmaWNhdGlvbi12YWx1ZScpIG5vdGlmaWNhdGlvblZhbHVlO1xuICBASW5wdXQoJ25vdGlmaWNhdGlvbi10aXRsZS1jdXN0b20tY2xhc3MnKSBub3RpZmljYXRpb25UaXRsZUN1c3RvbUNsYXNzPVwiYm94LXRpdGxlXCI7XG4gIEBJbnB1dCgnbm90aWZpY2F0aW9uLXZhbHVlLWN1c3RvbS1jbGFzcycpIG5vdGlmaWNhdGlvblZhbHVlQ3VzdG9tQ2xhc3M9XCJib3gtY291bnRlclwiO1xuICBASW5wdXQoJ25vdGlmaWNhdGlvbi12YWx1ZS1jb2xvcicpIG5vdGlmaWNhdGlvblZhbHVlQ29sb3I7XG4gIEBJbnB1dCgnbm90aWZpY2F0aW9uLXZhbHVlLWZvbnQtc2l6ZScpIG5vdGlmaWNhdGlvblZhbHVlRm9udFNpemU7XG4gIEBJbnB1dCgnbm90aWZpY2F0aW9uLXRpdGxlLWNvbG9yJykgbm90aWZpY2F0aW9uVGl0bGVDb2xvcjtcbiAgQElucHV0KCdub3RpZmljYXRpb24tdGl0bGUtZm9udC1zaXplJykgbm90aWZpY2F0aW9uVGl0bGVGb250U2l6ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==