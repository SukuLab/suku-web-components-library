/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<div [class]=\"customclass\">\r\n  <div class=\"col box pointer text-center\">\r\n    <div class=\"pt-4 pb-2\">\r\n      <strong>\r\n        <a class=\"box-title\" id=\"{{id}}\">\r\n          {{notificationTitle || 'review bids' }}\r\n        </a>\r\n      </strong>\r\n    </div>\r\n    <div class=\"pb-4\">\r\n      <strong class=\"box-counter\" id=\"{{notificationCount}}\">\r\n        {{ notificationValue > 9 ? ' ' :\r\n        '0'}}{{ notificationValue === 0 ? 0 :\r\n        ''}}{{notificationValue}}\r\n      </strong>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ub3RpZmljYXRpb24td2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LW5vdGlmaWNhdGlvbi13aWRnZXQvc3VrdS1ub3RpZmljYXRpb24td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFXRTtRQUpTLHNCQUFpQixHQUFHLHFCQUFxQixDQUFBO1FBQ3pDLGdCQUFXLEdBQUcsNkJBQTZCLENBQUM7SUFHckMsQ0FBQzs7OztJQUVqQixrREFBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsa2tCQUF3RDs7aUJBRXpEOzs7OztxQkFFRSxLQUFLO29DQUNMLEtBQUs7OEJBQ0wsS0FBSztvQ0FDTixLQUFLLFNBQUMsb0JBQW9CO29DQUMxQixLQUFLLFNBQUMsb0JBQW9COztJQU01QixzQ0FBQztDQUFBLEFBaEJELElBZ0JDO1NBWFksK0JBQStCOzs7SUFDMUMsNkNBQVk7O0lBQ1osNERBQWtEOztJQUNsRCxzREFBcUQ7O0lBQ3RELDREQUErQzs7SUFDL0MsNERBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3Utbm90aWZpY2F0aW9uLXdpZGdldCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3Utbm90aWZpY2F0aW9uLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1ub3RpZmljYXRpb24td2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VOb3RpZmljYXRpb25XaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGlkO1xyXG4gIEBJbnB1dCgpIG5vdGlmaWNhdGlvbkNvdW50ID0gXCJub3RpZmljYXRpb25Db3VudElkXCJcclxuICBASW5wdXQoKSBjdXN0b21jbGFzcyA9ICdjb2wgcC0wIHBvaW50ZXIgdGV4dC1jZW50ZXInO1xyXG5cdEBJbnB1dCgnbm90aWZpY2F0aW9uLXRpdGxlJykgbm90aWZpY2F0aW9uVGl0bGU7XHJcblx0QElucHV0KCdub3RpZmljYXRpb24tdmFsdWUnKSBub3RpZmljYXRpb25WYWx1ZTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==