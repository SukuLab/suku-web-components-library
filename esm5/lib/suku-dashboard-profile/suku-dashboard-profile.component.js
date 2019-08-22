/**
 * @fileoverview added by tsickle
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
                    template: "<div class=\"profileBox\">\r\n  <div class=\"col-md-12 col-sm-12 text-center\">\r\n    <img class=\"circle mb-4 mt-4\" id=\"image\" src=\"{{image}}\" alt=\"PROFILE\">\r\n  </div>\r\n  <div class=\"col-md-12 col-sm-12 text-center\">\r\n    <label class=\"userName\">\r\n      {{ userName }}\r\n    </label>\r\n  </div>\r\n  <div class=\"b-line mt-3 mb-3\"></div>\r\n  <div class=\"col-sm-12 col-md-12\" id=\"newSellList\">\r\n    <div class=\"row pointer\">\r\n      <div class=\"pl-4 pr-4 pb-2 pt-2 col mb-1\">\r\n        <span (click)=\"createNewList.emit(1)\" class=\"c-pointer row pl-3\">\r\n          <i class=\"{{iconOne}} {{iconOneCustomClass}}\" id=\"{{iconOneId}}\"></i>\r\n          <!-- <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\"> -->\r\n          <span class=\"create-interest-listing c-pointer mt-auto pb-2 mb-auto pl-2\">{{titleOne || 'CREATE\r\n            NEW LISTING'}} </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12 col-md-12 pb-5\" id=\"newBuyInterest\">\r\n    <div class=\"row pointer\">\r\n      <div class=\"pl-4 pb-3 pr-4 pt-2 col mb-2\">\r\n        <span (click)=\"clearBuyInterestStorage.emit(1)\" class=\"c-pointer row pl-3\">\r\n          <i class=\"{{iconTwo}} {{iconTwoCustomClass}}\" id=\"{{iconTwoId}}\"></i>\r\n          <!-- <img src=\"{{icon}}\" alt=\"icon\" height=\"33px\" width=\"33px\"> -->\r\n          <span class=\"create-interest-listing c-pointer mt-auto mb-auto pb-2 pl-2 mB-170\">{{titleTwo\r\n            || 'CREATE NEW INTEREST'}}</span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.circle{background-color:#f2f2f2;height:150px;width:150px;border-radius:100%}.profileBox{width:200px;height:487px;border-radius:0 0 30px 30px;background-color:#fff;box-shadow:0 6px 8px 0 rgba(0,0,0,.09)}.b-line{opacity:.09;border:1px solid #97979796}.userName{font-family:Poppins,sans-serif;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d;text-transform:capitalize;word-break:break-all!important}.create-interest-listing{font-family:'Encode sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6;word-break:break-all!important}.default{width:170px;height:274px;box-shadow:0 2px 4px 0 rgba(0,0,0,.03);background-color:#fff}.c-pointer{cursor:pointer!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXNoYm9hcmQtcHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kYXNoYm9hcmQtcHJvZmlsZS9zdWt1LWRhc2hib2FyZC1wcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFbEc7SUFtQkU7UUFaUyxVQUFLLEdBQUcsd0JBQXdCLENBQUM7UUFDakMsU0FBSSxHQUFHLDZCQUE2QixDQUFDO1FBRTNCLFlBQU8sR0FBRyx3QkFBd0IsQ0FBQztRQUduQyxZQUFPLEdBQUcsd0JBQXdCLENBQUM7UUFJaEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLDRCQUF1QixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVqQixnREFBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLHdtREFBc0Q7O2lCQUV2RDs7Ozs7MkJBRUUsS0FBSyxTQUFDLFdBQVc7d0JBQ2pCLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLLFNBQUMsV0FBVzswQkFDakIsS0FBSyxTQUFDLFVBQVU7NEJBQ2hCLEtBQUssU0FBQyxhQUFhO3FDQUNuQixLQUFLLFNBQUMsdUJBQXVCOzBCQUM3QixLQUFLLFNBQUMsVUFBVTs0QkFDaEIsS0FBSyxTQUFDLGFBQWE7cUNBQ25CLEtBQUssU0FBQyx1QkFBdUI7MkJBQzdCLEtBQUssU0FBQyxXQUFXO2dDQUNqQixNQUFNLFNBQUMsWUFBWTswQ0FDbkIsTUFBTSxTQUFDLFlBQVk7O0lBTXRCLG9DQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FuQlksNkJBQTZCOzs7SUFDeEMsaURBQTZCOztJQUM3Qiw4Q0FBMEM7O0lBQzFDLDZDQUE4Qzs7SUFDOUMsaURBQTZCOztJQUM3QixnREFBc0Q7O0lBQ3RELGtEQUFnQzs7SUFDaEMsMkRBQW1EOztJQUNuRCxnREFBc0Q7O0lBQ3RELGtEQUFnQzs7SUFDaEMsMkRBQW1EOztJQUNuRCxpREFBNkI7O0lBQzdCLHNEQUF5RDs7SUFDekQsZ0VBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1kYXNoYm9hcmQtcHJvZmlsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZGFzaGJvYXJkLXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZGFzaGJvYXJkLXByb2ZpbGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdURhc2hib2FyZFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgndXNlci1uYW1lJykgdXNlck5hbWU7XHJcbiAgQElucHV0KCkgaW1hZ2UgPSAnYXNzZXRzL2ltYWdlcy91c2VyLnBuZyc7XHJcbiAgQElucHV0KCkgaWNvbiA9ICdhc3NldHMvaW1hZ2VzL3BsdXMtaWNvbi5wbmcnO1xyXG4gIEBJbnB1dCgndGl0bGUtb25lJykgdGl0bGVPbmU7XHJcbiAgQElucHV0KCdpY29uLW9uZScpIGljb25PbmUgPSAnc3VrdS1wbHVzLWljb24gc3VrdS1tZCc7XHJcbiAgQElucHV0KCdpY29uLW9uZS1pZCcpIGljb25PbmVJZDtcclxuICBASW5wdXQoJ2ljb24tb25lLWN1c3RvbS1jbGFzcycpIGljb25PbmVDdXN0b21DbGFzcztcclxuICBASW5wdXQoJ2ljb24tdHdvJykgaWNvblR3byA9ICdzdWt1LXBsdXMtaWNvbiBzdWt1LW1kJztcclxuICBASW5wdXQoJ2ljb24tdHdvLWlkJykgaWNvblR3b0lkO1xyXG4gIEBJbnB1dCgnaWNvbi10d28tY3VzdG9tLWNsYXNzJykgaWNvblR3b0N1c3RvbUNsYXNzO1xyXG4gIEBJbnB1dCgndGl0bGUtdHdvJykgdGl0bGVUd287XHJcbiAgQE91dHB1dCgnYWN0aW9uLW9uZScpIGNyZWF0ZU5ld0xpc3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgnYWN0aW9uLXR3bycpIGNsZWFyQnV5SW50ZXJlc3RTdG9yYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19