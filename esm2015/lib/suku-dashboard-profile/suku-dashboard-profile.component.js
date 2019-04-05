/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuDashboardProfileComponent {
    constructor() {
        this.image = 'assets/images/user.png';
        this.icon = 'assets/images/plus-icon.png';
        this.createNewList = new EventEmitter();
        this.clearBuyInterestStorage = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuDashboardProfileComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-dashboard-profile',
                template: "<div class=\"profileBox\">\r\n  <div class=\"col-md-12 col-sm-12 text-center\">\r\n    <img class=\"circle mb-4 mt-4\" id=\"image\" src=\"{{image}}\" alt=\"PROFILE\">\r\n  </div>\r\n  <div class=\"col-md-12 col-sm-12 text-center\">\r\n    <label class=\"userName\">\r\n      {{ userName }}\r\n    </label>\r\n  </div>\r\n  <div class=\"b-line mt-3 mb-3\"></div>\r\n  <div class=\"col-sm-12 col-md-12\" id=\"newSellList\">\r\n    <div class=\"row pointer\">\r\n      <div class=\"p-4 col mb-1\">\r\n        <span (click)=\"createNewList.emit(1)\" class=\"c-pointer\">\r\n          <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\">\r\n          <span class=\"create-interest-listing c-pointer pl-3 pt-3\" >{{titleOne || 'CREATE\r\n            NEW LISTING'}} </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12 col-md-12 pb-5\" id=\"newBuyInterest\">\r\n    <div class=\"row pointer\">\r\n      <div class=\"pl-4 pb-3 pr-4 pt-2 col mb-2\">\r\n        <span (click)=\"clearBuyInterestStorage.emit(1)\" class=\"c-pointer\">\r\n          <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\">\r\n          <span class=\"create-interest-listing c-pointer pl-3 pt-3 mB-170\">{{titleTwo\r\n            || 'CREATE NEW INTEREST'}}</span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [".circle{background-color:#f2f2f2;height:150px;width:150px;border-radius:100%}.profileBox{width:200px;height:487px;border-radius:0 0 30px 30px;background-color:#fff;box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.b-line{opacity:.09;border:1px solid #97979796}.userName{font-family:Poppins,sans-serif;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;text-transform:capitalize;word-break:break-all!important}.create-interest-listing{font-family:'Encode sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6;word-break:break-all!important}.default{width:170px;height:274px;box-shadow:0 2px 4px 0 rgba(0,0,0,.03);background-color:#fff}.c-pointer{cursor:pointer!important}"]
            }] }
];
/** @nocollapse */
SukuDashboardProfileComponent.ctorParameters = () => [];
SukuDashboardProfileComponent.propDecorators = {
    userName: [{ type: Input, args: ['user-name',] }],
    image: [{ type: Input }],
    icon: [{ type: Input }],
    titleOne: [{ type: Input, args: ['title-one',] }],
    titleTwo: [{ type: Input, args: ['title-two',] }],
    createNewList: [{ type: Output, args: ['action-one',] }],
    clearBuyInterestStorage: [{ type: Output, args: ['action-two',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXNoYm9hcmQtcHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kYXNoYm9hcmQtcHJvZmlsZS9zdWt1LWRhc2hib2FyZC1wcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sNkJBQTZCO0lBUXhDO1FBTlEsVUFBSyxHQUFHLHdCQUF3QixDQUFDO1FBQ2pDLFNBQUksR0FBRyw2QkFBNkIsQ0FBQztRQUd4QixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsNEJBQXVCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLHUyQ0FBc0Q7O2FBRXZEOzs7Ozt1QkFFRSxLQUFLLFNBQUMsV0FBVztvQkFDbEIsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUssU0FBQyxXQUFXO3VCQUNqQixLQUFLLFNBQUMsV0FBVzs0QkFDakIsTUFBTSxTQUFDLFlBQVk7c0NBQ25CLE1BQU0sU0FBQyxZQUFZOzs7O0lBTm5CLGlEQUE2Qjs7SUFDOUIsOENBQTBDOztJQUMxQyw2Q0FBOEM7O0lBQzlDLGlEQUE2Qjs7SUFDN0IsaURBQTZCOztJQUM3QixzREFBeUQ7O0lBQ3pELGdFQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1kYXNoYm9hcmQtcHJvZmlsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZGFzaGJvYXJkLXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZGFzaGJvYXJkLXByb2ZpbGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdURhc2hib2FyZFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgndXNlci1uYW1lJykgdXNlck5hbWU7XHJcblx0QElucHV0KCkgaW1hZ2UgPSAnYXNzZXRzL2ltYWdlcy91c2VyLnBuZyc7XHJcblx0QElucHV0KCkgaWNvbiA9ICdhc3NldHMvaW1hZ2VzL3BsdXMtaWNvbi5wbmcnO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lJykgdGl0bGVPbmU7XHJcblx0QElucHV0KCd0aXRsZS10d28nKSB0aXRsZVR3bztcclxuXHRAT3V0cHV0KCdhY3Rpb24tb25lJykgY3JlYXRlTmV3TGlzdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCdhY3Rpb24tdHdvJykgY2xlYXJCdXlJbnRlcmVzdFN0b3JhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=