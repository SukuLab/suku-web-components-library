/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuACHSettingsComponent {
    constructor() {
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
    ngOnInit() {
    }
}
SukuACHSettingsComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-ach-setting',
                template: "<div class=\"col poppinsFont p-0\">\r\n  <div class=\"col-sm-12 text-center\">\r\n    <span class=\"font20\" id=\"{{titleId}}\">{{title}}</span>\r\n  </div>\r\n  <div class=\"col-sm-12 mt-4\">\r\n    <div class=\"form-group col-xs-12 col Rectangle-2 p-3\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <div class=\"col\">\r\n          <span class=\"text-center subTitle\" id=\"{{subtitleId}}\"> {{subTitle}}</span>\r\n          <br>\r\n          <p class=\"text-center mt-2 mb-2\" id=\"{{subContentId}}\">Customer status: <b class=\"status\">{{subContent}}</b></p>\r\n        </div>\r\n        <span class=\"redText\" id=\"{{upperTextId}}\">{{upperText}}</span>\r\n      </div>\r\n      <div class=\"col-sm-12 text-center mt-2\">\r\n        <i> <span class=\"font12\" id=\"{{lowerTextId}}\">{{lowerText}} </span> </i>\r\n      </div>\r\n      <div class=\"col-sm-12 mt-4 mb-3 text-center\">\r\n        <button class=\" btn textBold\" id=\"{{paymentButtonId}}\" (click)=\"action.emit()\">{{SetupACHPaymentsBtnText}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [".redText{color:red;font-size:12px}.font12{font-size:12px}.textBold{font-weight:700}.Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.poppinsFont{font-family:Poppins}.btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.775rem 1.85rem;font-size:12px;font-weight:700;font-family:Poppins}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{outline:0!important;box-shadow:none!important}.font20{font-size:25px}.subTitle{font-weight:700!important;font-family:Poppins,sans-serif!important}.status{color:red}"]
            }] }
];
/** @nocollapse */
SukuACHSettingsComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hY2hzZXR0aW5ncy9zdWt1LWFjaHNldHRpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sd0JBQXdCO0lBZW5DO1FBZFEsVUFBSyxHQUFHLGlCQUFpQixDQUFDO1FBQzFCLFlBQU8sR0FBRyxnQkFBZ0IsQ0FBQztRQUMzQixhQUFRLEdBQUcsZUFBZSxDQUFDO1FBQzNCLGVBQVUsR0FBRyxjQUFjLENBQUM7UUFDNUIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUMxQixpQkFBWSxHQUFHLGFBQWEsQ0FBQztRQUM3Qiw0QkFBdUIsR0FBRyxvQkFBb0IsQ0FBQztRQUMvQyxvQkFBZSxHQUFHLGtCQUFrQixDQUFDO1FBQ3JDLGNBQVMsR0FBRyw2Q0FBNkMsQ0FBQztRQUMxRCxjQUFTLEdBQUcsa0NBQWtDLENBQUM7UUFDL0MsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDNUIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUN6QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDRrQ0FBZ0Q7O2FBRWpEOzs7OztvQkFFQyxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSztzQ0FDTCxLQUFLOzhCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3FCQUNMLE1BQU07Ozs7SUFiUCx5Q0FBbUM7O0lBQ25DLDJDQUFvQzs7SUFDcEMsNENBQW9DOztJQUNwQyw4Q0FBcUM7O0lBQ3JDLDhDQUFtQzs7SUFDbkMsZ0RBQXNDOztJQUN0QywyREFBd0Q7O0lBQ3hELG1EQUE4Qzs7SUFDOUMsNkNBQW1FOztJQUNuRSw2Q0FBd0Q7O0lBQ3hELCtDQUFxQzs7SUFDckMsK0NBQXFDOztJQUNyQyw4Q0FBbUM7O0lBQ25DLDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1hY2gtc2V0dGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtYWNoc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtYWNoc2V0dGluZ3MuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUFDSFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuIEBJbnB1dCgpIHRpdGxlID0gJyBQYXltZW50IFBvcnRhbCc7XHJcbiBASW5wdXQoKSB0aXRsZUlkID0gJyBwYXltZW50UG9ydGFsJztcclxuIEBJbnB1dCgpIHN1YlRpdGxlID0gJyBBQ0ggU2V0dGluZ3MnO1xyXG4gQElucHV0KCkgc3ViVGl0bGVJZCA9ICcgQUNIU2V0dGluZ3MnO1xyXG4gQElucHV0KCkgc3ViQ29udGVudCA9ICd1bnZlcmlmaWVkJztcclxuIEBJbnB1dCgpIHN1YkNvbnRlbnRJZCA9ICcgdW52ZXJpZmllZCc7XHJcbiBASW5wdXQoKSBTZXR1cEFDSFBheW1lbnRzQnRuVGV4dCA9ICdTZXR1cCBBQ0ggUGF5bWVudHMnO1xyXG4gQElucHV0KCkgcGF5bWVudEJ1dHRvbklkID0gJ1NldHVwQUNIUGF5bWVudHMnO1xyXG4gQElucHV0KCkgbG93ZXJUZXh0ID0gJ3BsZWFzZSBzZXR1cCB5b3VyIEFDSCBwYXltZW50IHByb2ZpbGUgYmVsb3cnO1xyXG4gQElucHV0KCkgdXBwZXJUZXh0ID0gJ0FDSCBQYXltZW50IFByb2ZpbGUgTm90IENvbXBsZXRlJztcclxuIEBJbnB1dCgpIHVwcGVyVGV4dElkID0gJ3VwcGVyVGV4dElkJztcclxuIEBJbnB1dCgpIGxvd2VyVGV4dElkID0gJ2xvd2VyVGV4dElkJztcclxuIEBJbnB1dCgpIHN1YnRpdGxlSWQgPSAnc3VidGl0bGVJZCc7XHJcbiBAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19