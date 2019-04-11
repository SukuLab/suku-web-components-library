/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuNotificationWidgetComponent {
    constructor() {
        this.customclass = 'col box pointer text-center';
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
                template: "<div [class]=\"customclass\">\n  <div class=\"col pointer text-center p-0\">\n    <div class=\"pt-4\">\n      <span class=\"box-counter\">\n        {{ notificationValue > 9 ? ' ' :\n        '0'}}{{ notificationValue === 0 ? 0 :\n        ''}}{{notificationValue}}\n      </span>\n      <p class=\"pb-3 n-m mb-0\">\n        <a class=\"box-title\" id=\"{{id}}\">\n          {{notificationTitle || 'review bids' }}\n        </a>\n      </p>\n    </div>\n  </div>\n</div>",
                styles: [".box{border-radius:2px;background-color:#fff;box-shadow:0 3px 3px 0 rgba(0,0,0,.03);border-left:1px solid #dee2e68a!important;border-bottom:1px solid #dee2e68a!important}.box-title{font-family:Poppins,sans-serif;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#1d1d1d;word-break:break-word!important}.box-counter{font-family:Poppins,sans-serif;font-size:50px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.6px;text-align:center;color:#a7bf2e}.default{width:300px}.n-m{margin-top:-15px}@media (min-width:575.98px){.box{height:145px!important}}@media (min-width:767.98px){.box{height:175px!important}}@media (min-width:991.98px){.box{height:180px!important}}@media (min-width:1199.98px){.box{height:150px!important}}"]
            }] }
];
/** @nocollapse */
SukuNotificationWidgetComponent.ctorParameters = () => [];
SukuNotificationWidgetComponent.propDecorators = {
    id: [{ type: Input }],
    customclass: [{ type: Input }],
    notificationTitle: [{ type: Input, args: ['notification-title',] }],
    notificationValue: [{ type: Input, args: ['notification-value',] }]
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ub3RpZmljYXRpb24td2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LW5vdGlmaWNhdGlvbi13aWRnZXQvc3VrdS1ub3RpZmljYXRpb24td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLCtCQUErQjtJQUsxQztRQUhTLGdCQUFXLEdBQUcsNkJBQTZCLENBQUM7SUFHckMsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLDhkQUF3RDs7YUFFekQ7Ozs7O2lCQUVFLEtBQUs7MEJBQ0wsS0FBSztnQ0FDTixLQUFLLFNBQUMsb0JBQW9CO2dDQUMxQixLQUFLLFNBQUMsb0JBQW9COzs7O0lBSDFCLDZDQUFZOztJQUNaLHNEQUFxRDs7SUFDdEQsNERBQStDOztJQUMvQyw0REFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1ub3RpZmljYXRpb24td2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3Utbm90aWZpY2F0aW9uLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3Utbm90aWZpY2F0aW9uLXdpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VOb3RpZmljYXRpb25XaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpZDtcbiAgQElucHV0KCkgY3VzdG9tY2xhc3MgPSAnY29sIGJveCBwb2ludGVyIHRleHQtY2VudGVyJztcblx0QElucHV0KCdub3RpZmljYXRpb24tdGl0bGUnKSBub3RpZmljYXRpb25UaXRsZTtcblx0QElucHV0KCdub3RpZmljYXRpb24tdmFsdWUnKSBub3RpZmljYXRpb25WYWx1ZTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=