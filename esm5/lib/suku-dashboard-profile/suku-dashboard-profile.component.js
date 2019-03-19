/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<div class=\"profileBox\">\r\n    <div class=\"col-md-12 col-sm-12 text-center\">\r\n      <img class=\"circle mb-4 mt-4\" id=\"image\" src=\"{{image}}\" alt=\"PROFILE\">\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 text-center\">\r\n      <label class=\"userName\">\r\n        <b>{{ userName || 'Emery' }}</b>\r\n      </label>\r\n    </div>\r\n    <div class=\"bLine form-group\"></div>\r\n    <div class=\"col-sm-12 col-md-12\"  id=\"newSellList\">\r\n      <div class=\"row pointer\">\r\n        <div class=\"p-3 col mb-1\" >\r\n        <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\">\r\n        <span class=\"create-interest-listing c-pointer pl-2 pt-3\" (click)=\"createNewList.emit(1)\">{{titleOne || 'CREATE NEW LISTING'}} </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-12 form-group mb-3\"  id=\"newBuyInterest\">\r\n      <div class=\"row pointer\">\r\n        <div class=\"pl-3 pb-3 pr-3 pt-2 col mb-2\" >\r\n        <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\">\r\n        <span class=\"create-interest-listing c-pointer pl-2 pt-3 mB-170\" (click)=\"clearBuyInterestStorage.emit(1)\">{{titleTwo || 'CREATE NEW INTEREST'}}</span>\r\n        </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n",
                    styles: [".box{border-radius:2px;background-color:#fff;box-shadow:0 3px 3px 0 rgba(0,0,0,.09)}.box-title{font-family:Poppins-Regular,Arial;font-size:17px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#1d1d1d}.box-counter{font-size:50px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.6px;text-align:center;color:#a7bf2e}.profileBox{width:200px;border-radius:0 0 30px 30px;background-color:#fff;box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.circle{background-color:gray;height:150px;width:150px;border-radius:100%}.bLine{opacity:.09;border:1px solid #979797}.userName{font-family:Poppins,sans-serif;font-size:20px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;color:var(--black);word-break:break-all!important}.create-interest-listing{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:14px;color:#b6b6b6;line-height:18px;letter-spacing:.01em;word-break:break-all!important}.default{width:170px;height:274px;box-shadow:0 2px 4px 0 rgba(0,0,0,.03);background-color:#fff}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXNoYm9hcmQtcHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kYXNoYm9hcmQtcHJvZmlsZS9zdWt1LWRhc2hib2FyZC1wcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWlCRTtRQVZRLFVBQUssR0FBRyx3QkFBd0IsQ0FBQztRQUNqQyxTQUFJLEdBQUcsNkJBQTZCLENBQUM7UUFHeEIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLDRCQUF1QixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFLbEQsQ0FBQzs7Ozs7SUFKbEIsNENBQUk7Ozs7SUFBSixVQUFLLENBQUM7UUFDTCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDOzs7O0lBSUEsZ0RBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBcEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxpeUNBQXNEOztpQkFFdkQ7Ozs7OzJCQUVFLEtBQUssU0FBQyxXQUFXO3dCQUNsQixLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSyxTQUFDLFdBQVc7MkJBQ2pCLEtBQUssU0FBQyxXQUFXO2dDQUNqQixNQUFNLFNBQUMsWUFBWTswQ0FDbkIsTUFBTSxTQUFDLFlBQVk7O0lBVXJCLG9DQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FqQlksNkJBQTZCOzs7SUFDeEMsaURBQTZCOztJQUM5Qiw4Q0FBMEM7O0lBQzFDLDZDQUE4Qzs7SUFDOUMsaURBQTZCOztJQUM3QixpREFBNkI7O0lBQzdCLHNEQUF5RDs7SUFDekQsZ0VBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LWRhc2hib2FyZC1wcm9maWxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1kYXNoYm9hcmQtcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1kYXNoYm9hcmQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1RGFzaGJvYXJkUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCd1c2VyLW5hbWUnKSB1c2VyTmFtZTtcclxuXHRASW5wdXQoKSBpbWFnZSA9ICdhc3NldHMvaW1hZ2VzL3VzZXIucG5nJztcclxuXHRASW5wdXQoKSBpY29uID0gJ2Fzc2V0cy9pbWFnZXMvcGx1cy1pY29uLnBuZyc7XHJcblx0QElucHV0KCd0aXRsZS1vbmUnKSB0aXRsZU9uZTtcclxuXHRASW5wdXQoJ3RpdGxlLXR3bycpIHRpdGxlVHdvO1xyXG5cdEBPdXRwdXQoJ2FjdGlvbi1vbmUnKSBjcmVhdGVOZXdMaXN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoJ2FjdGlvbi10d28nKSBjbGVhckJ1eUludGVyZXN0U3RvcmFnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHR0ZXN0KGkpIHtcclxuXHRcdGFsZXJ0KGkpO1xyXG5cdH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=