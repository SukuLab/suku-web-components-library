/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuNotificationWidgetComponent {
    constructor() {
        this.notificationCount = "notificationCountId";
        this.customclass = 'col p-0 pointer text-center';
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
                template: "<div [class]=\"customclass\">\r\n  <div class=\"col box pointer text-center\">\r\n    <div class=\"pt-4 pb-2\">\r\n      <strong>\r\n        <a class=\"box-title\" id=\"{{id}}\">\r\n          {{notificationTitle || 'review bids' }}\r\n        </a>\r\n      </strong>\r\n    </div>\r\n    <div class=\"pb-4\">\r\n      <strong class=\"box-counter\" id=\"{{notificationCount}}\">\r\n        {{ notificationValue > 9 ? ' ' :\r\n        '0'}}{{ notificationValue === 0 ? 0 :\r\n        ''}}{{notificationValue}}\r\n      </strong>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".box{border-radius:2px;background-color:#fff;box-shadow:0 3px 3px 0 rgba(0,0,0,.09)}.box-title{font-family:Poppins-Regular,sans-serif;font-size:17px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#1d1d1d}.box-counter{font-size:50px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.6px;text-align:center;color:#a7bf2e}.default{width:300px}"]
            }] }
];
/** @nocollapse */
SukuNotificationWidgetComponent.ctorParameters = () => [];
SukuNotificationWidgetComponent.propDecorators = {
    id: [{ type: Input }],
    notificationCount: [{ type: Input }],
    customclass: [{ type: Input }],
    notificationTitle: [{ type: Input, args: ['notification-title',] }],
    notificationValue: [{ type: Input, args: ['notification-value',] }]
};
if (false) {
    /** @type {?} */
    SukuNotificationWidgetComponent.prototype.id;
    /** @type {?} */
    SukuNotificationWidgetComponent.prototype.notificationCount;
    /** @type {?} */
    SukuNotificationWidgetComponent.prototype.customclass;
    /** @type {?} */
    SukuNotificationWidgetComponent.prototype.notificationTitle;
    /** @type {?} */
    SukuNotificationWidgetComponent.prototype.notificationValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ub3RpZmljYXRpb24td2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LW5vdGlmaWNhdGlvbi13aWRnZXQvc3VrdS1ub3RpZmljYXRpb24td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLCtCQUErQjtJQU0xQztRQUpTLHNCQUFpQixHQUFHLHFCQUFxQixDQUFBO1FBQ3pDLGdCQUFXLEdBQUcsNkJBQTZCLENBQUM7SUFHckMsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLGtrQkFBd0Q7O2FBRXpEOzs7OztpQkFFRSxLQUFLO2dDQUNMLEtBQUs7MEJBQ0wsS0FBSztnQ0FDTixLQUFLLFNBQUMsb0JBQW9CO2dDQUMxQixLQUFLLFNBQUMsb0JBQW9COzs7O0lBSjFCLDZDQUFZOztJQUNaLDREQUFrRDs7SUFDbEQsc0RBQXFEOztJQUN0RCw0REFBK0M7O0lBQy9DLDREQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LW5vdGlmaWNhdGlvbi13aWRnZXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LW5vdGlmaWNhdGlvbi13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3Utbm90aWZpY2F0aW9uLXdpZGdldC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1Tm90aWZpY2F0aW9uV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpZDtcclxuICBASW5wdXQoKSBub3RpZmljYXRpb25Db3VudCA9IFwibm90aWZpY2F0aW9uQ291bnRJZFwiXHJcbiAgQElucHV0KCkgY3VzdG9tY2xhc3MgPSAnY29sIHAtMCBwb2ludGVyIHRleHQtY2VudGVyJztcclxuXHRASW5wdXQoJ25vdGlmaWNhdGlvbi10aXRsZScpIG5vdGlmaWNhdGlvblRpdGxlO1xyXG5cdEBJbnB1dCgnbm90aWZpY2F0aW9uLXZhbHVlJykgbm90aWZpY2F0aW9uVmFsdWU7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=