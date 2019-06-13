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
                    template: "  <label class=\"title\">{{title}}</label>\n  <div class=\"d-md-flex mb-5 flex-md-row\">\n    <div [class]=\"customclass\" *ngFor=\"let item of notificationArray;let i=index\" (click)=\"action.emit(item?.id)\"\n      id=\"notification{{item?.id}}\">\n      <div class=\"col pointer text-center p-0\">\n        <div class=\"pt-4\">\n          <span class=\"box-counter\" id=\"notificationValue{{i}}\">\n            {{ (item?.value > 9) ? '' : '0' }}{{ (item?.value == 0) ? 00 : item?.value }}\n          </span>\n          <p class=\"pb-4 n-m mb-0\">\n            <a class=\"box-title\" id=\"notificationTitle{{i}}\">\n              {{item?.name  || 'N/A' }}\n            </a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.box{border-radius:2px;background-color:#fff;box-shadow:0 3px 3px 0 rgba(0,0,0,.03);border-left:1px solid #dee2e68a!important;border-bottom:1px solid #dee2e68a!important;cursor:pointer!important}.box-title{font-family:Poppins,sans-serif!important;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#1d1d1d;word-break:break-word!important}.box-counter{font-family:Poppins,sans-serif!important;font-size:50px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.6px;text-align:center;color:#a7bf2e}.default{width:300px}.n-m{margin-top:-15px}.title{font-family:Poppins,sans-serif!important;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6}@media (min-width:575.98px){.box{height:145px!important}}@media (min-width:767.98px){.box{height:175px!important}}@media (min-width:991.98px){.box{height:170px!important}}@media (min-width:1199.98px){.box{height:140px!important}.box-title{font-size:15px!important}}@media (min-width:1400px){.box-title{font-size:17px!important}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ub3RpZmljYXRpb24tcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utbm90aWZpY2F0aW9uLXBhbmVsL3N1a3Utbm90aWZpY2F0aW9uLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQVdDO1FBTFMsVUFBSyxHQUFHLFdBQVcsQ0FBQztRQUNwQixnQkFBVyxHQUFHLGlDQUFpQyxDQUFDO1FBQ2hELHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN0QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV2QixDQUFDOzs7O0lBRWhCLGlEQUFROzs7SUFBUixjQUFZLENBQUM7O2dCQWJiLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxtdkJBQXVEOztpQkFFdkQ7Ozs7O3dCQUVDLEtBQUs7OEJBQ0wsS0FBSztvQ0FDTCxLQUFLO3lCQUNMLE1BQU07O0lBTVIscUNBQUM7Q0FBQSxBQWZELElBZUM7U0FWWSw4QkFBOEI7OztJQUMxQywrQ0FBNkI7O0lBQzdCLHFEQUF5RDs7SUFDekQsMkRBQWdDOztJQUNoQyxnREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3Utbm90aWZpY2F0aW9uLXBhbmVsJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3Utbm90aWZpY2F0aW9uLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3Utbm90aWZpY2F0aW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VOb3RpZmljYXRpb25QYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIHRpdGxlID0gJ0Rhc2hib2FyZCc7XG5cdEBJbnB1dCgpIGN1c3RvbWNsYXNzID0gJ2NvbCBwLTAgYm94IHBvaW50ZXIgdGV4dC1jZW50ZXInO1xuXHRASW5wdXQoKSBub3RpZmljYXRpb25BcnJheSA9IFtdO1xuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRuZ09uSW5pdCgpIHt9XG5cbn1cbiJdfQ==