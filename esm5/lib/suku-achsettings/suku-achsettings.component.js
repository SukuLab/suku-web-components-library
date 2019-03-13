/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuACHSettingsComponent = /** @class */ (function () {
    function SukuACHSettingsComponent() {
        this.title = ' Payment Portal';
        this.titleId = ' paymentPortal';
        this.subTitle = ' ACH Settings';
        this.subTitleId = ' ACHSettings';
        this.subContent = 'unverified';
        this.subContentId = ' unverified';
        this.SetupACHPaymentsBtnText = 'Setup ACH Payments';
        this.paymentButtonId = 'SetupACHPayments';
        this.lowerText = 'please setup your ACH payment profile below';
        this.upperText = 'ACH Payment Profile Not Complete';
        this.upperTextId = 'upperTextId';
        this.lowerTextId = 'lowerTextId';
        this.subtitleId = 'subtitleId';
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuACHSettingsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuACHSettingsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-ach-setting',
                    template: "<div class=\"col poppinsFont p-0\">\r\n  <div class=\"col-sm-12 text-center\">\r\n    <span class=\"font20\" id=\"{{titleId}}\">{{title}}</span>\r\n  </div>\r\n  <div class=\"col-sm-12 mt-4\">\r\n    <div class=\"form-group col-xs-12 col Rectangle-2 p-3\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <div class=\"col\">\r\n          <span class=\"text-center subTitle\" id=\"{{subtitleId}}\"> {{subTitle}}</span>\r\n          <br>\r\n          <p class=\"text-center mt-2 mb-2\" id=\"{{subContentId}}\">Customer status: <b class=\"status\">{{subContent}}</b></p>\r\n        </div>\r\n        <span class=\"redText\" id=\"{{upperTextId}}\">{{upperText}}</span>\r\n      </div>\r\n      <div class=\"col-sm-12 text-center mt-2\">\r\n        <i> <span class=\"font12\" id=\"{{lowerTextId}}\">{{lowerText}} </span> </i>\r\n      </div>\r\n      <div class=\"col-sm-12 mt-4 mb-3 text-center\">\r\n        <button class=\" btn textBold\" id=\"{{paymentButtonId}}\" (click)=\"action.emit()\">{{SetupACHPaymentsBtnText}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".redText{color:red;font-size:12px}.font12{font-size:12px}.textBold{font-weight:700}.Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.poppinsFont{font-family:Poppins}.btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.775rem 1.85rem;font-size:12px;font-weight:700;font-family:Poppins}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{outline:0!important;box-shadow:none!important}.font20{font-size:25px}.subTitle{font-weight:700!important;font-family:Poppins,sans-serif!important}.status{color:red}"]
                }] }
    ];
    /** @nocollapse */
    SukuACHSettingsComponent.ctorParameters = function () { return []; };
    SukuACHSettingsComponent.propDecorators = {
        title: [{ type: Input }],
        titleId: [{ type: Input }],
        subTitle: [{ type: Input }],
        subTitleId: [{ type: Input }],
        subContent: [{ type: Input }],
        subContentId: [{ type: Input }],
        SetupACHPaymentsBtnText: [{ type: Input }],
        paymentButtonId: [{ type: Input }],
        lowerText: [{ type: Input }],
        upperText: [{ type: Input }],
        upperTextId: [{ type: Input }],
        lowerTextId: [{ type: Input }],
        subtitleId: [{ type: Input }],
        action: [{ type: Output }]
    };
    return SukuACHSettingsComponent;
}());
export { SukuACHSettingsComponent };
if (false) {
    /** @type {?} */
    SukuACHSettingsComponent.prototype.title;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.titleId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.subTitle;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.subTitleId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.subContent;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.subContentId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.SetupACHPaymentsBtnText;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.paymentButtonId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.lowerText;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.upperText;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.upperTextId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.lowerTextId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.subtitleId;
    /** @type {?} */
    SukuACHSettingsComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hY2hzZXR0aW5ncy9zdWt1LWFjaHNldHRpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQW9CRTtRQWRRLFVBQUssR0FBRyxpQkFBaUIsQ0FBQztRQUMxQixZQUFPLEdBQUcsZ0JBQWdCLENBQUM7UUFDM0IsYUFBUSxHQUFHLGVBQWUsQ0FBQztRQUMzQixlQUFVLEdBQUcsY0FBYyxDQUFDO1FBQzVCLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFDMUIsaUJBQVksR0FBRyxhQUFhLENBQUM7UUFDN0IsNEJBQXVCLEdBQUcsb0JBQW9CLENBQUM7UUFDL0Msb0JBQWUsR0FBRyxrQkFBa0IsQ0FBQztRQUNyQyxjQUFTLEdBQUcsNkNBQTZDLENBQUM7UUFDMUQsY0FBUyxHQUFHLGtDQUFrQyxDQUFDO1FBQy9DLGdCQUFXLEdBQUcsYUFBYSxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsYUFBYSxDQUFDO1FBQzVCLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFDekIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVqQiwyQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkF2QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDRrQ0FBZ0Q7O2lCQUVqRDs7Ozs7d0JBRUMsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7MENBQ0wsS0FBSztrQ0FDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxNQUFNOztJQU1SLCtCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FwQlksd0JBQXdCOzs7SUFDcEMseUNBQW1DOztJQUNuQywyQ0FBb0M7O0lBQ3BDLDRDQUFvQzs7SUFDcEMsOENBQXFDOztJQUNyQyw4Q0FBbUM7O0lBQ25DLGdEQUFzQzs7SUFDdEMsMkRBQXdEOztJQUN4RCxtREFBOEM7O0lBQzlDLDZDQUFtRTs7SUFDbkUsNkNBQXdEOztJQUN4RCwrQ0FBcUM7O0lBQ3JDLCtDQUFxQzs7SUFDckMsOENBQW1DOztJQUNuQywwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtYWNoLXNldHRpbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWFjaHNldHRpbmdzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWFjaHNldHRpbmdzLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VBQ0hTZXR0aW5nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiBASW5wdXQoKSB0aXRsZSA9ICcgUGF5bWVudCBQb3J0YWwnO1xyXG4gQElucHV0KCkgdGl0bGVJZCA9ICcgcGF5bWVudFBvcnRhbCc7XHJcbiBASW5wdXQoKSBzdWJUaXRsZSA9ICcgQUNIIFNldHRpbmdzJztcclxuIEBJbnB1dCgpIHN1YlRpdGxlSWQgPSAnIEFDSFNldHRpbmdzJztcclxuIEBJbnB1dCgpIHN1YkNvbnRlbnQgPSAndW52ZXJpZmllZCc7XHJcbiBASW5wdXQoKSBzdWJDb250ZW50SWQgPSAnIHVudmVyaWZpZWQnO1xyXG4gQElucHV0KCkgU2V0dXBBQ0hQYXltZW50c0J0blRleHQgPSAnU2V0dXAgQUNIIFBheW1lbnRzJztcclxuIEBJbnB1dCgpIHBheW1lbnRCdXR0b25JZCA9ICdTZXR1cEFDSFBheW1lbnRzJztcclxuIEBJbnB1dCgpIGxvd2VyVGV4dCA9ICdwbGVhc2Ugc2V0dXAgeW91ciBBQ0ggcGF5bWVudCBwcm9maWxlIGJlbG93JztcclxuIEBJbnB1dCgpIHVwcGVyVGV4dCA9ICdBQ0ggUGF5bWVudCBQcm9maWxlIE5vdCBDb21wbGV0ZSc7XHJcbiBASW5wdXQoKSB1cHBlclRleHRJZCA9ICd1cHBlclRleHRJZCc7XHJcbiBASW5wdXQoKSBsb3dlclRleHRJZCA9ICdsb3dlclRleHRJZCc7XHJcbiBASW5wdXQoKSBzdWJ0aXRsZUlkID0gJ3N1YnRpdGxlSWQnO1xyXG4gQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==