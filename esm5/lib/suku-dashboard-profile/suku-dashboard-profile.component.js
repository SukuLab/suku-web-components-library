/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-dashboard-profile/suku-dashboard-profile.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuDashboardProfileComponent = /** @class */ (function () {
    function SukuDashboardProfileComponent() {
        this.image = 'assets/images/user.png';
        this.icon = 'assets/images/plus-icon.png';
        this.iconOne = 'suku-plus-icon suku-md';
        this.iconTwo = 'suku-plus-icon suku-md';
        this.createNewList = new EventEmitter();
        this.clearBuyInterestStorage = new EventEmitter();
    }
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
                    template: "<div class=\"profileBox\">\n  <div class=\"col-md-12 col-sm-12 text-center\">\n    <img class=\"circle mb-4 mt-4\" id=\"image\" src=\"{{image}}\" alt=\"PROFILE\">\n  </div>\n  <div class=\"col-md-12 col-sm-12 text-center\">\n    <label class=\"userName\">\n      {{ userName }}\n    </label>\n  </div>\n  <div class=\"b-line mt-3 mb-3\"></div>\n  <div class=\"col-sm-12 col-md-12\" id=\"newSellList\">\n    <div class=\"row pointer\">\n      <div class=\"pl-4 pr-4 pb-2 pt-2 col mb-1\">\n        <span (click)=\"createNewList.emit(1)\" class=\"c-pointer row pl-3\">\n          <i class=\"{{iconOne}} {{iconOneCustomClass}}\" id=\"{{iconOneId}}\"></i>\n          <!-- <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\"> -->\n          <span class=\"create-interest-listing c-pointer mt-auto pb-2 mb-auto pl-2\">{{titleOne || 'CREATE\n            NEW LISTING'}} </span>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-12 pb-5\" id=\"newBuyInterest\">\n    <div class=\"row pointer\">\n      <div class=\"pl-4 pb-3 pr-4 pt-2 col mb-2\">\n        <span (click)=\"clearBuyInterestStorage.emit(1)\" class=\"c-pointer row pl-3\">\n          <i class=\"{{iconTwo}} {{iconTwoCustomClass}}\" id=\"{{iconTwoId}}\"></i>\n          <!-- <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\"> -->\n          <span class=\"create-interest-listing c-pointer mt-auto mb-auto pb-2 pl-2 mB-170\">{{titleTwo\n            || 'CREATE NEW INTEREST'}}</span>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.circle{background-color:#f2f2f2;height:150px;width:150px;border-radius:100%}.profileBox{width:200px;height:487px;border-radius:0 0 30px 30px;background-color:#fff;box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.b-line{opacity:.09;border:1px solid #97979796}.userName{font-family:Poppins,sans-serif;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;text-transform:capitalize;word-break:break-all!important}.create-interest-listing{font-family:'Encode sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6;word-break:break-all!important}.default{width:170px;height:274px;box-shadow:0 2px 4px 0 rgba(0,0,0,.03);background-color:#fff}.c-pointer{cursor:pointer!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuDashboardProfileComponent.ctorParameters = function () { return []; };
    SukuDashboardProfileComponent.propDecorators = {
        userName: [{ type: Input, args: ['user-name',] }],
        image: [{ type: Input }],
        icon: [{ type: Input }],
        titleOne: [{ type: Input, args: ['title-one',] }],
        iconOne: [{ type: Input, args: ['icon-one',] }],
        iconOneId: [{ type: Input, args: ['icon-one-id',] }],
        iconOneCustomClass: [{ type: Input, args: ['icon-one-custom-class',] }],
        iconTwo: [{ type: Input, args: ['icon-two',] }],
        iconTwoId: [{ type: Input, args: ['icon-two-id',] }],
        iconTwoCustomClass: [{ type: Input, args: ['icon-two-custom-class',] }],
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
    SukuDashboardProfileComponent.prototype.iconOne;
    /** @type {?} */
    SukuDashboardProfileComponent.prototype.iconOneId;
    /** @type {?} */
    SukuDashboardProfileComponent.prototype.iconOneCustomClass;
    /** @type {?} */
    SukuDashboardProfileComponent.prototype.iconTwo;
    /** @type {?} */
    SukuDashboardProfileComponent.prototype.iconTwoId;
    /** @type {?} */
    SukuDashboardProfileComponent.prototype.iconTwoCustomClass;
    /** @type {?} */
    SukuDashboardProfileComponent.prototype.titleTwo;
    /** @type {?} */
    SukuDashboardProfileComponent.prototype.createNewList;
    /** @type {?} */
    SukuDashboardProfileComponent.prototype.clearBuyInterestStorage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXNoYm9hcmQtcHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kYXNoYm9hcmQtcHJvZmlsZS9zdWt1LWRhc2hib2FyZC1wcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRWxHO0lBbUJFO1FBWlMsVUFBSyxHQUFHLHdCQUF3QixDQUFDO1FBQ2pDLFNBQUksR0FBRyw2QkFBNkIsQ0FBQztRQUUzQixZQUFPLEdBQUcsd0JBQXdCLENBQUM7UUFHbkMsWUFBTyxHQUFHLHdCQUF3QixDQUFDO1FBSWhDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyw0QkFBdUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFakIsZ0RBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBdEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxvaURBQXNEOztpQkFFdkQ7Ozs7OzJCQUVFLEtBQUssU0FBQyxXQUFXO3dCQUNqQixLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSyxTQUFDLFdBQVc7MEJBQ2pCLEtBQUssU0FBQyxVQUFVOzRCQUNoQixLQUFLLFNBQUMsYUFBYTtxQ0FDbkIsS0FBSyxTQUFDLHVCQUF1QjswQkFDN0IsS0FBSyxTQUFDLFVBQVU7NEJBQ2hCLEtBQUssU0FBQyxhQUFhO3FDQUNuQixLQUFLLFNBQUMsdUJBQXVCOzJCQUM3QixLQUFLLFNBQUMsV0FBVztnQ0FDakIsTUFBTSxTQUFDLFlBQVk7MENBQ25CLE1BQU0sU0FBQyxZQUFZOztJQU10QixvQ0FBQztDQUFBLEFBeEJELElBd0JDO1NBbkJZLDZCQUE2Qjs7O0lBQ3hDLGlEQUE2Qjs7SUFDN0IsOENBQTBDOztJQUMxQyw2Q0FBOEM7O0lBQzlDLGlEQUE2Qjs7SUFDN0IsZ0RBQXNEOztJQUN0RCxrREFBZ0M7O0lBQ2hDLDJEQUFtRDs7SUFDbkQsZ0RBQXNEOztJQUN0RCxrREFBZ0M7O0lBQ2hDLDJEQUFtRDs7SUFDbkQsaURBQTZCOztJQUM3QixzREFBeUQ7O0lBQ3pELGdFQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZGFzaGJvYXJkLXByb2ZpbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1kYXNoYm9hcmQtcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZGFzaGJvYXJkLXByb2ZpbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1RGFzaGJvYXJkUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgndXNlci1uYW1lJykgdXNlck5hbWU7XG4gIEBJbnB1dCgpIGltYWdlID0gJ2Fzc2V0cy9pbWFnZXMvdXNlci5wbmcnO1xuICBASW5wdXQoKSBpY29uID0gJ2Fzc2V0cy9pbWFnZXMvcGx1cy1pY29uLnBuZyc7XG4gIEBJbnB1dCgndGl0bGUtb25lJykgdGl0bGVPbmU7XG4gIEBJbnB1dCgnaWNvbi1vbmUnKSBpY29uT25lID0gJ3N1a3UtcGx1cy1pY29uIHN1a3UtbWQnO1xuICBASW5wdXQoJ2ljb24tb25lLWlkJykgaWNvbk9uZUlkO1xuICBASW5wdXQoJ2ljb24tb25lLWN1c3RvbS1jbGFzcycpIGljb25PbmVDdXN0b21DbGFzcztcbiAgQElucHV0KCdpY29uLXR3bycpIGljb25Ud28gPSAnc3VrdS1wbHVzLWljb24gc3VrdS1tZCc7XG4gIEBJbnB1dCgnaWNvbi10d28taWQnKSBpY29uVHdvSWQ7XG4gIEBJbnB1dCgnaWNvbi10d28tY3VzdG9tLWNsYXNzJykgaWNvblR3b0N1c3RvbUNsYXNzO1xuICBASW5wdXQoJ3RpdGxlLXR3bycpIHRpdGxlVHdvO1xuICBAT3V0cHV0KCdhY3Rpb24tb25lJykgY3JlYXRlTmV3TGlzdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgnYWN0aW9uLXR3bycpIGNsZWFyQnV5SW50ZXJlc3RTdG9yYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==