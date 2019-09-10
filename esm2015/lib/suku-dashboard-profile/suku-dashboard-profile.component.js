/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuDashboardProfileComponent {
    constructor() {
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
    ngOnInit() {
    }
}
SukuDashboardProfileComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-dashboard-profile',
                template: "<div class=\"profileBox\">\n  <div class=\"col-md-12 col-sm-12 text-center\">\n    <img class=\"circle mb-4 mt-4\" id=\"image\" src=\"{{image}}\" alt=\"PROFILE\">\n  </div>\n  <div class=\"col-md-12 col-sm-12 text-center\">\n    <label class=\"userName\">\n      {{ userName }}\n    </label>\n  </div>\n  <div class=\"b-line mt-3 mb-3\"></div>\n  <div class=\"col-sm-12 col-md-12\" id=\"newSellList\">\n    <div class=\"row pointer\">\n      <div class=\"pl-4 pr-4 pb-2 pt-2 col mb-1\">\n        <span (click)=\"createNewList.emit(1)\" class=\"c-pointer row pl-3\">\n          <i class=\"{{iconOne}} {{iconOneCustomClass}}\" id=\"{{iconOneId}}\"></i>\n          <!-- <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\"> -->\n          <span class=\"create-interest-listing c-pointer mt-auto pb-2 mb-auto pl-2\">{{titleOne || 'CREATE\n            NEW LISTING'}} </span>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-12 pb-5\" id=\"newBuyInterest\">\n    <div class=\"row pointer\">\n      <div class=\"pl-4 pb-3 pr-4 pt-2 col mb-2\">\n        <span (click)=\"clearBuyInterestStorage.emit(1)\" class=\"c-pointer row pl-3\">\n          <i class=\"{{iconTwo}} {{iconTwoCustomClass}}\" id=\"{{iconTwoId}}\"></i>\n          <!-- <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\"> -->\n          <span class=\"create-interest-listing c-pointer mt-auto mb-auto pb-2 pl-2 mB-170\">{{titleTwo\n            || 'CREATE NEW INTEREST'}}</span>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.circle{background-color:#f2f2f2;height:150px;width:150px;border-radius:100%}.profileBox{width:200px;height:487px;border-radius:0 0 30px 30px;background-color:#fff;box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.b-line{opacity:.09;border:1px solid #97979796}.userName{font-family:Poppins,sans-serif;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;text-transform:capitalize;word-break:break-all!important}.create-interest-listing{font-family:'Encode sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6;word-break:break-all!important}.default{width:170px;height:274px;box-shadow:0 2px 4px 0 rgba(0,0,0,.03);background-color:#fff}.c-pointer{cursor:pointer!important}"]
            }] }
];
/** @nocollapse */
SukuDashboardProfileComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXNoYm9hcmQtcHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kYXNoYm9hcmQtcHJvZmlsZS9zdWt1LWRhc2hib2FyZC1wcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFPbEcsTUFBTSxPQUFPLDZCQUE2QjtJQWN4QztRQVpTLFVBQUssR0FBRyx3QkFBd0IsQ0FBQztRQUNqQyxTQUFJLEdBQUcsNkJBQTZCLENBQUM7UUFFM0IsWUFBTyxHQUFHLHdCQUF3QixDQUFDO1FBR25DLFlBQU8sR0FBRyx3QkFBd0IsQ0FBQztRQUloQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsNEJBQXVCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLG9pREFBc0Q7O2FBRXZEOzs7Ozt1QkFFRSxLQUFLLFNBQUMsV0FBVztvQkFDakIsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUssU0FBQyxXQUFXO3NCQUNqQixLQUFLLFNBQUMsVUFBVTt3QkFDaEIsS0FBSyxTQUFDLGFBQWE7aUNBQ25CLEtBQUssU0FBQyx1QkFBdUI7c0JBQzdCLEtBQUssU0FBQyxVQUFVO3dCQUNoQixLQUFLLFNBQUMsYUFBYTtpQ0FDbkIsS0FBSyxTQUFDLHVCQUF1Qjt1QkFDN0IsS0FBSyxTQUFDLFdBQVc7NEJBQ2pCLE1BQU0sU0FBQyxZQUFZO3NDQUNuQixNQUFNLFNBQUMsWUFBWTs7OztJQVpwQixpREFBNkI7O0lBQzdCLDhDQUEwQzs7SUFDMUMsNkNBQThDOztJQUM5QyxpREFBNkI7O0lBQzdCLGdEQUFzRDs7SUFDdEQsa0RBQWdDOztJQUNoQywyREFBbUQ7O0lBQ25ELGdEQUFzRDs7SUFDdEQsa0RBQWdDOztJQUNoQywyREFBbUQ7O0lBQ25ELGlEQUE2Qjs7SUFDN0Isc0RBQXlEOztJQUN6RCxnRUFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWRhc2hib2FyZC1wcm9maWxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZGFzaGJvYXJkLXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWRhc2hib2FyZC1wcm9maWxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdURhc2hib2FyZFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ3VzZXItbmFtZScpIHVzZXJOYW1lO1xuICBASW5wdXQoKSBpbWFnZSA9ICdhc3NldHMvaW1hZ2VzL3VzZXIucG5nJztcbiAgQElucHV0KCkgaWNvbiA9ICdhc3NldHMvaW1hZ2VzL3BsdXMtaWNvbi5wbmcnO1xuICBASW5wdXQoJ3RpdGxlLW9uZScpIHRpdGxlT25lO1xuICBASW5wdXQoJ2ljb24tb25lJykgaWNvbk9uZSA9ICdzdWt1LXBsdXMtaWNvbiBzdWt1LW1kJztcbiAgQElucHV0KCdpY29uLW9uZS1pZCcpIGljb25PbmVJZDtcbiAgQElucHV0KCdpY29uLW9uZS1jdXN0b20tY2xhc3MnKSBpY29uT25lQ3VzdG9tQ2xhc3M7XG4gIEBJbnB1dCgnaWNvbi10d28nKSBpY29uVHdvID0gJ3N1a3UtcGx1cy1pY29uIHN1a3UtbWQnO1xuICBASW5wdXQoJ2ljb24tdHdvLWlkJykgaWNvblR3b0lkO1xuICBASW5wdXQoJ2ljb24tdHdvLWN1c3RvbS1jbGFzcycpIGljb25Ud29DdXN0b21DbGFzcztcbiAgQElucHV0KCd0aXRsZS10d28nKSB0aXRsZVR3bztcbiAgQE91dHB1dCgnYWN0aW9uLW9uZScpIGNyZWF0ZU5ld0xpc3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoJ2FjdGlvbi10d28nKSBjbGVhckJ1eUludGVyZXN0U3RvcmFnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=