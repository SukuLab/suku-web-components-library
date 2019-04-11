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
                template: "<div class=\"profileBox\">\n  <div class=\"col-md-12 col-sm-12 text-center\">\n    <img class=\"circle mb-4 mt-4\" id=\"image\" src=\"{{image}}\" alt=\"PROFILE\">\n  </div>\n  <div class=\"col-md-12 col-sm-12 text-center\">\n    <label class=\"userName\">\n      {{ userName }}\n    </label>\n  </div>\n  <div class=\"b-line mt-3 mb-3\"></div>\n  <div class=\"col-sm-12 col-md-12\" id=\"newSellList\">\n    <div class=\"row pointer\">\n      <div class=\"p-4 col mb-1\">\n        <span (click)=\"createNewList.emit(1)\" class=\"c-pointer\">\n          <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\">\n          <span class=\"create-interest-listing c-pointer pl-3 pt-3\" >{{titleOne || 'CREATE\n            NEW LISTING'}} </span>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-12 pb-5\" id=\"newBuyInterest\">\n    <div class=\"row pointer\">\n      <div class=\"pl-4 pb-3 pr-4 pt-2 col mb-2\">\n        <span (click)=\"clearBuyInterestStorage.emit(1)\" class=\"c-pointer\">\n          <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\">\n          <span class=\"create-interest-listing c-pointer pl-3 pt-3 mB-170\">{{titleTwo\n            || 'CREATE NEW INTEREST'}}</span>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXNoYm9hcmQtcHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kYXNoYm9hcmQtcHJvZmlsZS9zdWt1LWRhc2hib2FyZC1wcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sNkJBQTZCO0lBUXhDO1FBTlEsVUFBSyxHQUFHLHdCQUF3QixDQUFDO1FBQ2pDLFNBQUksR0FBRyw2QkFBNkIsQ0FBQztRQUd4QixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsNEJBQXVCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNsRCxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLHV5Q0FBc0Q7O2FBRXZEOzs7Ozt1QkFFRSxLQUFLLFNBQUMsV0FBVztvQkFDbEIsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUssU0FBQyxXQUFXO3VCQUNqQixLQUFLLFNBQUMsV0FBVzs0QkFDakIsTUFBTSxTQUFDLFlBQVk7c0NBQ25CLE1BQU0sU0FBQyxZQUFZOzs7O0lBTm5CLGlEQUE2Qjs7SUFDOUIsOENBQTBDOztJQUMxQyw2Q0FBOEM7O0lBQzlDLGlEQUE2Qjs7SUFDN0IsaURBQTZCOztJQUM3QixzREFBeUQ7O0lBQ3pELGdFQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1kYXNoYm9hcmQtcHJvZmlsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWRhc2hib2FyZC1wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1kYXNoYm9hcmQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VEYXNoYm9hcmRQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCd1c2VyLW5hbWUnKSB1c2VyTmFtZTtcblx0QElucHV0KCkgaW1hZ2UgPSAnYXNzZXRzL2ltYWdlcy91c2VyLnBuZyc7XG5cdEBJbnB1dCgpIGljb24gPSAnYXNzZXRzL2ltYWdlcy9wbHVzLWljb24ucG5nJztcblx0QElucHV0KCd0aXRsZS1vbmUnKSB0aXRsZU9uZTtcblx0QElucHV0KCd0aXRsZS10d28nKSB0aXRsZVR3bztcblx0QE91dHB1dCgnYWN0aW9uLW9uZScpIGNyZWF0ZU5ld0xpc3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoJ2FjdGlvbi10d28nKSBjbGVhckJ1eUludGVyZXN0U3RvcmFnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=