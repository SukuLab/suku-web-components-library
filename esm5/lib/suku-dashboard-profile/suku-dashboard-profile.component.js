/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuDashboardProfileComponent = /** @class */ (function () {
    function SukuDashboardProfileComponent() {
        this.image = 'assets/images/user.png';
        this.icon = 'assets/images/plus-icon.png';
        this.createNewList = new EventEmitter();
        this.clearBuyInterestStorage = new EventEmitter();
    }
    /**
     * @param {?} i
     * @return {?}
     */
    SukuDashboardProfileComponent.prototype.test = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        alert(i);
    };
    /**
     * @return {?}
     */
    SukuDashboardProfileComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuDashboardProfileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-dashboard-profile',
                    template: "<div class=\"profileBox\">\n    <div class=\"col-md-12 col-sm-12 text-center\">\n      <img class=\"circle mb-4 mt-4\" id=\"image\" src=\"{{image}}\" alt=\"PROFILE\">\n    </div>\n    <div class=\"col-md-12 col-sm-12 text-center\">\n      <label class=\"userName\">\n        <b>{{ userName || 'Emery' }}</b>\n      </label>\n    </div>\n    <div class=\"bLine form-group\"></div>\n    <div class=\"col-sm-12 col-md-12\"  id=\"newSellList\">\n      <div class=\"row pointer\">\n        <div class=\"p-3 col mb-1\" >\n        <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\">\n        <span class=\"create-interest-listing c-pointer pl-1 pt-3\" (click)=\"createNewList.emit(1)\">{{titleOne || 'CREATE NEW LISTING'}} </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-md-12 form-group\"  id=\"newBuyInterest\">\n      <div class=\"row pointer\">\n        <div class=\"pl-3 pb-3 pr-3 pt-2 col mb-2\" >\n        <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\">\n        <span class=\"create-interest-listing c-pointer pl-1 pt-3 mB-170\" (click)=\"clearBuyInterestStorage.emit(1)\">{{titleTwo || 'CREATE NEW INTEREST'}}</span>\n        </div>\n        </div>\n    </div>\n  </div>\n",
                    styles: [".box{border-radius:2px;background-color:#fff;box-shadow:0 3px 3px 0 rgba(0,0,0,.09)}.box-title{font-family:Poppins-Regular,Arial;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#1d1d1d}.box-counter{font-size:50px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.6px;text-align:center;color:#a7bf2e}.profileBox{width:200px;border-radius:0 0 30px 30px;background-color:#fff;box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.circle{background-color:gray;height:150px;width:150px;border-radius:100%}.bLine{opacity:.09;border:1px solid #979797}.userName{font-family:Poppins,sans-serif;font-size:20px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;color:var(--black);word-break:break-all!important}.create-interest-listing{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:14px;color:#b6b6b6;line-height:18px;letter-spacing:.01em;word-break:break-all!important}.default{width:170px;height:274px;box-shadow:0 2px 4px 0 rgba(0,0,0,.03);background-color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    SukuDashboardProfileComponent.ctorParameters = function () { return []; };
    SukuDashboardProfileComponent.propDecorators = {
        userName: [{ type: Input, args: ['user-name',] }],
        image: [{ type: Input }],
        icon: [{ type: Input }],
        titleOne: [{ type: Input, args: ['title-one',] }],
        titleTwo: [{ type: Input, args: ['title-two',] }],
        createNewList: [{ type: Output, args: ['action-one',] }],
        clearBuyInterestStorage: [{ type: Output, args: ['action-two',] }]
    };
    return SukuDashboardProfileComponent;
}());
export { SukuDashboardProfileComponent };
if (false) {
    /** @type {?} */
    SukuDashboardProfileComponent.prototype.userName;
    /** @type {?} */
    SukuDashboardProfileComponent.prototype.image;
    /** @type {?} */
    SukuDashboardProfileComponent.prototype.icon;
    /** @type {?} */
    SukuDashboardProfileComponent.prototype.titleOne;
    /** @type {?} */
    SukuDashboardProfileComponent.prototype.titleTwo;
    /** @type {?} */
    SukuDashboardProfileComponent.prototype.createNewList;
    /** @type {?} */
    SukuDashboardProfileComponent.prototype.clearBuyInterestStorage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXNoYm9hcmQtcHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kYXNoYm9hcmQtcHJvZmlsZS9zdWt1LWRhc2hib2FyZC1wcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWlCRTtRQVZRLFVBQUssR0FBRyx3QkFBd0IsQ0FBQztRQUNqQyxTQUFJLEdBQUcsNkJBQTZCLENBQUM7UUFHeEIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLDRCQUF1QixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFLbEQsQ0FBQzs7Ozs7SUFKbEIsNENBQUk7Ozs7SUFBSixVQUFLLENBQUM7UUFDTCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDOzs7O0lBSUEsZ0RBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBcEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxzdUNBQXNEOztpQkFFdkQ7Ozs7OzJCQUVFLEtBQUssU0FBQyxXQUFXO3dCQUNsQixLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSyxTQUFDLFdBQVc7MkJBQ2pCLEtBQUssU0FBQyxXQUFXO2dDQUNqQixNQUFNLFNBQUMsWUFBWTswQ0FDbkIsTUFBTSxTQUFDLFlBQVk7O0lBVXJCLG9DQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FqQlksNkJBQTZCOzs7SUFDeEMsaURBQTZCOztJQUM5Qiw4Q0FBMEM7O0lBQzFDLDZDQUE4Qzs7SUFDOUMsaURBQTZCOztJQUM3QixpREFBNkI7O0lBQzdCLHNEQUF5RDs7SUFDekQsZ0VBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWRhc2hib2FyZC1wcm9maWxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZGFzaGJvYXJkLXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWRhc2hib2FyZC1wcm9maWxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdURhc2hib2FyZFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ3VzZXItbmFtZScpIHVzZXJOYW1lO1xuXHRASW5wdXQoKSBpbWFnZSA9ICdhc3NldHMvaW1hZ2VzL3VzZXIucG5nJztcblx0QElucHV0KCkgaWNvbiA9ICdhc3NldHMvaW1hZ2VzL3BsdXMtaWNvbi5wbmcnO1xuXHRASW5wdXQoJ3RpdGxlLW9uZScpIHRpdGxlT25lO1xuXHRASW5wdXQoJ3RpdGxlLXR3bycpIHRpdGxlVHdvO1xuXHRAT3V0cHV0KCdhY3Rpb24tb25lJykgY3JlYXRlTmV3TGlzdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgnYWN0aW9uLXR3bycpIGNsZWFyQnV5SW50ZXJlc3RTdG9yYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHR0ZXN0KGkpIHtcblx0XHRhbGVydChpKTtcblx0fVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19