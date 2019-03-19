/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuNotificationWidgetComponent = /** @class */ (function () {
    function SukuNotificationWidgetComponent() {
        this.notificationCount = "notificationCountId";
        this.customclass = 'col p-0 pointer text-center';
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
                    template: "<div [class]=\"customclass\">\n  <div class=\"col box pointer text-center\">\n    <div class=\"pt-4 pb-2\">\n      <strong>\n        <a class=\"box-title\" id=\"{{id}}\">\n          {{notificationTitle || 'review bids' }}\n        </a>\n      </strong>\n    </div>\n    <div class=\"pb-4\">\n      <strong class=\"box-counter\" id=\"{{notificationCount}}\">\n        {{ notificationValue > 9 ? ' ' :\n        '0'}}{{ notificationValue === 0 ? 0 :\n        ''}}{{notificationValue}}\n      </strong>\n    </div>\n  </div>\n</div>\n",
                    styles: [".box{border-radius:2px;background-color:#fff;box-shadow:0 3px 3px 0 rgba(0,0,0,.09)}.box-title{font-family:Poppins-Regular,sans-serif;font-size:17px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#1d1d1d}.box-counter{font-size:50px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.6px;text-align:center;color:#a7bf2e}.default{width:300px}"]
                }] }
    ];
    /** @nocollapse */
    SukuNotificationWidgetComponent.ctorParameters = function () { return []; };
    SukuNotificationWidgetComponent.propDecorators = {
        id: [{ type: Input }],
        notificationCount: [{ type: Input }],
        customclass: [{ type: Input }],
        notificationTitle: [{ type: Input, args: ['notification-title',] }],
        notificationValue: [{ type: Input, args: ['notification-value',] }]
    };
    return SukuNotificationWidgetComponent;
}());
export { SukuNotificationWidgetComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ub3RpZmljYXRpb24td2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LW5vdGlmaWNhdGlvbi13aWRnZXQvc3VrdS1ub3RpZmljYXRpb24td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFXRTtRQUpTLHNCQUFpQixHQUFHLHFCQUFxQixDQUFBO1FBQ3pDLGdCQUFXLEdBQUcsNkJBQTZCLENBQUM7SUFHckMsQ0FBQzs7OztJQUVqQixrREFBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsOGhCQUF3RDs7aUJBRXpEOzs7OztxQkFFRSxLQUFLO29DQUNMLEtBQUs7OEJBQ0wsS0FBSztvQ0FDTixLQUFLLFNBQUMsb0JBQW9CO29DQUMxQixLQUFLLFNBQUMsb0JBQW9COztJQU01QixzQ0FBQztDQUFBLEFBaEJELElBZ0JDO1NBWFksK0JBQStCOzs7SUFDMUMsNkNBQVk7O0lBQ1osNERBQWtEOztJQUNsRCxzREFBcUQ7O0lBQ3RELDREQUErQzs7SUFDL0MsNERBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3Utbm90aWZpY2F0aW9uLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LW5vdGlmaWNhdGlvbi13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LW5vdGlmaWNhdGlvbi13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Tm90aWZpY2F0aW9uV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaWQ7XG4gIEBJbnB1dCgpIG5vdGlmaWNhdGlvbkNvdW50ID0gXCJub3RpZmljYXRpb25Db3VudElkXCJcbiAgQElucHV0KCkgY3VzdG9tY2xhc3MgPSAnY29sIHAtMCBwb2ludGVyIHRleHQtY2VudGVyJztcblx0QElucHV0KCdub3RpZmljYXRpb24tdGl0bGUnKSBub3RpZmljYXRpb25UaXRsZTtcblx0QElucHV0KCdub3RpZmljYXRpb24tdmFsdWUnKSBub3RpZmljYXRpb25WYWx1ZTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=