/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @param {?} i
     * @return {?}
     */
    test(i) {
        alert(i);
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
                template: "<div class=\"profileBox\">\n    <div class=\"col-md-12 col-sm-12 text-center\">\n      <img class=\"circle mb-4 mt-4\" id=\"image\" src=\"{{image}}\" alt=\"PROFILE\">\n    </div>\n    <div class=\"col-md-12 col-sm-12 text-center\">\n      <label class=\"userName\">\n        <b>{{ userName || 'Emery' }}</b>\n      </label>\n    </div>\n    <div class=\"bLine form-group\"></div>\n    <div class=\"col-sm-12 col-md-12\"  id=\"newSellList\">\n      <div class=\"row pointer\">\n        <div class=\"p-3 col mb-1\" >\n        <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\">\n        <span class=\"create-interest-listing c-pointer pl-1 pt-3\" (click)=\"createNewList.emit(1)\">{{titleOne || 'CREATE NEW LISTING'}} </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 col-md-12 form-group\"  id=\"newBuyInterest\">\n      <div class=\"row pointer\">\n        <div class=\"pl-3 pb-3 pr-3 pt-2 col mb-2\" >\n        <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\">\n        <span class=\"create-interest-listing c-pointer pl-1 pt-3 mB-170\" (click)=\"clearBuyInterestStorage.emit(1)\">{{titleTwo || 'CREATE NEW INTEREST'}}</span>\n        </div>\n        </div>\n    </div>\n  </div>\n",
                styles: [".box{border-radius:2px;background-color:#fff;box-shadow:0 3px 3px 0 rgba(0,0,0,.09)}.box-title{font-family:Poppins-Regular,Arial;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;text-align:center;color:#1d1d1d}.box-counter{font-size:50px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.6px;text-align:center;color:#a7bf2e}.profileBox{width:200px;border-radius:0 0 30px 30px;background-color:#fff;box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.circle{background-color:gray;height:150px;width:150px;border-radius:100%}.bLine{opacity:.09;border:1px solid #979797}.userName{font-family:Poppins,sans-serif;font-size:20px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;color:var(--black);word-break:break-all!important}.create-interest-listing{font-family:abelregular,Arial,Helvetica,sans-serif;font-size:14px;color:#b6b6b6;line-height:18px;letter-spacing:.01em;word-break:break-all!important}.default{width:170px;height:274px;box-shadow:0 2px 4px 0 rgba(0,0,0,.03);background-color:#fff}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXNoYm9hcmQtcHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kYXNoYm9hcmQtcHJvZmlsZS9zdWt1LWRhc2hib2FyZC1wcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sNkJBQTZCO0lBWXhDO1FBVlEsVUFBSyxHQUFHLHdCQUF3QixDQUFDO1FBQ2pDLFNBQUksR0FBRyw2QkFBNkIsQ0FBQztRQUd4QixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsNEJBQXVCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUtsRCxDQUFDOzs7OztJQUpsQixJQUFJLENBQUMsQ0FBQztRQUNMLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7Ozs7SUFJQSxRQUFRO0lBQ1IsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxzdUNBQXNEOzthQUV2RDs7Ozs7dUJBRUUsS0FBSyxTQUFDLFdBQVc7b0JBQ2xCLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLLFNBQUMsV0FBVzt1QkFDakIsS0FBSyxTQUFDLFdBQVc7NEJBQ2pCLE1BQU0sU0FBQyxZQUFZO3NDQUNuQixNQUFNLFNBQUMsWUFBWTs7OztJQU5uQixpREFBNkI7O0lBQzlCLDhDQUEwQzs7SUFDMUMsNkNBQThDOztJQUM5QyxpREFBNkI7O0lBQzdCLGlEQUE2Qjs7SUFDN0Isc0RBQXlEOztJQUN6RCxnRUFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZGFzaGJvYXJkLXByb2ZpbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1kYXNoYm9hcmQtcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZGFzaGJvYXJkLXByb2ZpbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1RGFzaGJvYXJkUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgndXNlci1uYW1lJykgdXNlck5hbWU7XG5cdEBJbnB1dCgpIGltYWdlID0gJ2Fzc2V0cy9pbWFnZXMvdXNlci5wbmcnO1xuXHRASW5wdXQoKSBpY29uID0gJ2Fzc2V0cy9pbWFnZXMvcGx1cy1pY29uLnBuZyc7XG5cdEBJbnB1dCgndGl0bGUtb25lJykgdGl0bGVPbmU7XG5cdEBJbnB1dCgndGl0bGUtdHdvJykgdGl0bGVUd287XG5cdEBPdXRwdXQoJ2FjdGlvbi1vbmUnKSBjcmVhdGVOZXdMaXN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCdhY3Rpb24tdHdvJykgY2xlYXJCdXlJbnRlcmVzdFN0b3JhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHRlc3QoaSkge1xuXHRcdGFsZXJ0KGkpO1xuXHR9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=