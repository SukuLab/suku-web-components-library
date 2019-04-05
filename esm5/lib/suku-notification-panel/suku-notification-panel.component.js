/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuNotificationPanelComponent = /** @class */ (function () {
    function SukuNotificationPanelComponent() {
        this.title = 'Dashboard';
        this.customclass = 'col p-0 box pointer text-center';
        this.notificationArray = [];
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuNotificationPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuNotificationPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-notification-panel',
                    template: "  <label class=\"title\">{{title}}</label>\r\n  <div class=\"d-md-flex mb-5 flex-md-row\">\r\n    <div [class]=\"customclass\" *ngFor=\"let item of notificationArray;let i=index\" (click)=\"action.emit(item?.id)\"\r\n      id=\"notification{{item?.id}}\">\r\n      <div class=\"col pointer text-center p-0\">\r\n        <div class=\"pt-4\">\r\n          <span class=\"box-counter\" id=\"notificationValue{{i}}\">\r\n            {{ (item?.value > 9) ? '' : '0' }}{{ (item?.value == 0) ? 00 : item?.value }}\r\n          </span>\r\n          <p class=\"pb-4 n-m mb-0\">\r\n            <a class=\"box-title\" id=\"notificationTitle{{i}}\">\r\n              {{item?.name  || 'N/A' }}\r\n            </a>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>",
                    styles: [".box{border-radius:2px;background-color:#fff;box-shadow:0 3px 3px 0 rgba(0,0,0,.03);border-left:1px solid #dee2e68a!important;border-bottom:1px solid #dee2e68a!important;cursor:pointer!important}.box-title{font-family:Poppins,sans-serif;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#1d1d1d;word-break:break-word!important}.box-counter{font-family:Poppins,sans-serif;font-size:50px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.6px;text-align:center;color:#a7bf2e}.default{width:300px}.n-m{margin-top:-15px}.title{font-family:Poppins,sans-serif!important;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6}@media (min-width:575.98px){.box{height:145px!important}}@media (min-width:767.98px){.box{height:175px!important}}@media (min-width:991.98px){.box{height:170px!important}}@media (min-width:1199.98px){.box{height:140px!important}.box-title{font-size:15px!important}}@media (min-width:1400px){.box-title{font-size:17px!important}}"]
                }] }
    ];
    /** @nocollapse */
    SukuNotificationPanelComponent.ctorParameters = function () { return []; };
    SukuNotificationPanelComponent.propDecorators = {
        title: [{ type: Input }],
        customclass: [{ type: Input }],
        notificationArray: [{ type: Input }],
        action: [{ type: Output }]
    };
    return SukuNotificationPanelComponent;
}());
export { SukuNotificationPanelComponent };
if (false) {
    /** @type {?} */
    SukuNotificationPanelComponent.prototype.title;
    /** @type {?} */
    SukuNotificationPanelComponent.prototype.customclass;
    /** @type {?} */
    SukuNotificationPanelComponent.prototype.notificationArray;
    /** @type {?} */
    SukuNotificationPanelComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ub3RpZmljYXRpb24tcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utbm90aWZpY2F0aW9uLXBhbmVsL3N1a3Utbm90aWZpY2F0aW9uLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQVdDO1FBTFMsVUFBSyxHQUFHLFdBQVcsQ0FBQztRQUNwQixnQkFBVyxHQUFHLGlDQUFpQyxDQUFDO1FBQ2hELHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN0QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV2QixDQUFDOzs7O0lBRWhCLGlEQUFROzs7SUFBUixjQUFZLENBQUM7O2dCQWJiLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxxeEJBQXVEOztpQkFFdkQ7Ozs7O3dCQUVDLEtBQUs7OEJBQ0wsS0FBSztvQ0FDTCxLQUFLO3lCQUNMLE1BQU07O0lBTVIscUNBQUM7Q0FBQSxBQWZELElBZUM7U0FWWSw4QkFBOEI7OztJQUMxQywrQ0FBNkI7O0lBQzdCLHFEQUF5RDs7SUFDekQsMkRBQWdDOztJQUNoQyxnREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3N1a3Utbm90aWZpY2F0aW9uLXBhbmVsJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1ub3RpZmljYXRpb24tcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LW5vdGlmaWNhdGlvbi1wYW5lbC5jb21wb25lbnQuc2NzcycgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdU5vdGlmaWNhdGlvblBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSB0aXRsZSA9ICdEYXNoYm9hcmQnO1xyXG5cdEBJbnB1dCgpIGN1c3RvbWNsYXNzID0gJ2NvbCBwLTAgYm94IHBvaW50ZXIgdGV4dC1jZW50ZXInO1xyXG5cdEBJbnB1dCgpIG5vdGlmaWNhdGlvbkFycmF5ID0gW107XHJcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcblxyXG59XHJcbiJdfQ==