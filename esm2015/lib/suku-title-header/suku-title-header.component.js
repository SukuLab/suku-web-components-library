/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuTitleHeaderComponent {
    constructor() {
        this.titleOne = 'LISTING NAME';
        this.titleOneCustomClass = 'pop';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuTitleHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-title-header',
                template: "<div class=\"product-boxContent\">\n    <div class=\"col pl-0 pt-3 pb-3\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <h1 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOneCustomClass\" [style.font-weight]=\"titleOneWeight\"\n            [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">{{titleOne}}</h1>\n        </div>\n      </div>\n    </div>\n  </div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.product-boxContent{width:100%;float:left;background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}h1{color:#fafaf8;font-size:17px}.c-pointer{cursor:pointer;text-transform:capitalize}.c-pointer:hover{color:#fff;text-decoration:underline}.RectangleBorder{background-color:#fff;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);border-radius:0;margin-top:63px!important;padding-right:20px;padding-left:20px}.productName{color:#7f7e7e;font-size:13px}.pop{font-family:Poppins,sans-serif!important;font-weight:600;font-size:20px;text-transform:uppercase}"]
            }] }
];
/** @nocollapse */
SukuTitleHeaderComponent.ctorParameters = () => [];
SukuTitleHeaderComponent.propDecorators = {
    titleOne: [{ type: Input }],
    titleOneId: [{ type: Input }],
    titleOneSize: [{ type: Input }],
    titleOneColor: [{ type: Input }],
    titleOneWeight: [{ type: Input }],
    titleOneCustomClass: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuTitleHeaderComponent.prototype.titleOne;
    /** @type {?} */
    SukuTitleHeaderComponent.prototype.titleOneId;
    /** @type {?} */
    SukuTitleHeaderComponent.prototype.titleOneSize;
    /** @type {?} */
    SukuTitleHeaderComponent.prototype.titleOneColor;
    /** @type {?} */
    SukuTitleHeaderComponent.prototype.titleOneWeight;
    /** @type {?} */
    SukuTitleHeaderComponent.prototype.titleOneCustomClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10aXRsZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtdGl0bGUtaGVhZGVyL3N1a3UtdGl0bGUtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHdCQUF3QjtJQU9uQztRQU5RLGFBQVEsR0FBRyxjQUFjLENBQUM7UUFLMUIsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQWZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixtWkFBaUQ7O2FBRWxEOzs7Ozt1QkFFQyxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7a0NBQ0wsS0FBSzs7OztJQUxOLDRDQUFtQzs7SUFDbkMsOENBQW9COztJQUNwQixnREFBc0I7O0lBQ3RCLGlEQUF1Qjs7SUFDdkIsa0RBQXdCOztJQUN4Qix1REFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS10aXRsZS1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS10aXRsZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXRpdGxlLWhlYWRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VUaXRsZUhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIHRpdGxlT25lID0gJ0xJU1RJTkcgTkFNRSc7XG5cdEBJbnB1dCgpIHRpdGxlT25lSWQ7XG5cdEBJbnB1dCgpIHRpdGxlT25lU2l6ZTtcblx0QElucHV0KCkgdGl0bGVPbmVDb2xvcjtcblx0QElucHV0KCkgdGl0bGVPbmVXZWlnaHQ7XG5cdEBJbnB1dCgpIHRpdGxlT25lQ3VzdG9tQ2xhc3MgPSAncG9wJztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=