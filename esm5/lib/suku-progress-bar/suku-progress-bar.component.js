/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuProgressBarComponent = /** @class */ (function () {
    function SukuProgressBarComponent() {
        this.progressStyleOne = 'progressCompleted';
        this.progressStyleTwo = 'progressUpcoming';
        this.progressStyleThree = 'progressUpcoming';
        this.progressStyleFour = 'progressUpcoming';
        this.progressStyleFive = 'progressUpcoming';
        this.headingOne = 'LISTING DETAILS';
        this.headingTwo = 'PRODUCT DETAILS';
        this.headingThree = 'PRODUCT TRACEABILITY';
        this.headingFour = 'TERMS OF SALE';
        this.headingFive = 'CONFIRM';
        this.headingOneId = 'firstHeading';
        this.headingTwoId = 'secondHeading';
        this.headingThreeId = 'thirdHeading';
        this.headingFourId = 'fourthHeading';
        this.headingFiveId = 'fifthHeading';
        this.customHeadingOneClass = 'text-bold';
        this.customHeadingTwoClass = '';
        this.customHeadingThreeClass = '';
        this.customHeadingFourClass = '';
        this.customHeadingFiveClass = '';
        this.progressBarIconId = {
            IconOneId: 'listingDetails',
            IconTwoId: 'productDetails',
            IconThreeId: 'productTraceability',
            IconFourId: 'termsOfSale',
            IconFiveId: 'confirm'
        };
        this.progressBarTitleId = {
            labelOneId: 'listingDetails',
            labelTwoId: 'productDetails',
            labelThreeId: 'productTraceability',
            labelFourId: 'termsOfSale',
            labelFiveId: 'confirm'
        };
    }
    /**
     * @return {?}
     */
    SukuProgressBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuProgressBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-progress-bar',
                    template: "<table class=\"col-sm-10 offset-sm-1\">\n  <tr class=\"pt-3\">\n    <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\">\n      <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\">\n      <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\">\n      <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\">\n      <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFive}} text-center\" id=\"{{progressBarIconId?.IconFiveId}}\">\n      <span *ngIf=\"(progressStyleFive == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFive == 'progressCompleted')\">5</span>\n    </td>\n  </tr>\n</table>\n<table class=\"col-sm-12 text-center\">\n  <tr id=\"txt\" class=\"pt-3\">\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelOneId}}\">\n      <span class=\"pl-4 {{customHeadingOneClass}}\">{{headingOne}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelTwoId}}\">\n      <span class=\"{{customHeadingTwoClass}} pl-4\">{{headingTwo}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelThreeId}}\">\n      <span class=\"{{customHeadingThreeClass}}\">{{headingThree}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFourId}}\">\n      <span class=\"pr-3 {{customHeadingFourClass}}\">{{headingFour}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFiveId}}\">\n      <span class=\"pr-4 {{customHeadingFiveClass}}\">{{headingFive}}</span>\n    </td>\n  </tr>\n</table>",
                    styles: [".Progresscircle{width:50px;height:50px;color:#fff;background:#031103;border-radius:50%}.progressActive{width:50px!important;height:50px;color:#fff;background:var(--main-color);border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:Poppins,sans-serif!important}.PRODUCT-1{width:90px;height:24px;font-family:Poppins,sans-serif!important;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressTitle{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.progress-bar-active{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.circleP{background-color:gray;width:50px!important;height:50px!important;border-radius:50%!important}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:20%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.text-bold{color:#000!important;font-weight:700!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center}.checkmark{display:inline-block}.checkmark:after{content:'';display:block;width:8px;height:15px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}hr{margin-top:1rem!important;margin-bottom:1rem!important;border:0!important;border-top:1px solid #979797!important;opacity:.2!important}.pr-6{padding-right:5rem}.pl-6{padding-left:5rem}"]
                }] }
    ];
    /** @nocollapse */
    SukuProgressBarComponent.ctorParameters = function () { return []; };
    SukuProgressBarComponent.propDecorators = {
        progressStyleOne: [{ type: Input }],
        progressStyleTwo: [{ type: Input }],
        progressStyleThree: [{ type: Input }],
        progressStyleFour: [{ type: Input }],
        progressStyleFive: [{ type: Input }],
        headingOne: [{ type: Input }],
        headingTwo: [{ type: Input }],
        headingThree: [{ type: Input }],
        headingFour: [{ type: Input }],
        headingFive: [{ type: Input }],
        headingOneId: [{ type: Input }],
        headingTwoId: [{ type: Input }],
        headingThreeId: [{ type: Input }],
        headingFourId: [{ type: Input }],
        headingFiveId: [{ type: Input }],
        customHeadingOneClass: [{ type: Input, args: ['custom-heading-one-class',] }],
        customHeadingTwoClass: [{ type: Input, args: ['custom-heading-two-class',] }],
        customHeadingThreeClass: [{ type: Input, args: ['custom-heading-three-class',] }],
        customHeadingFourClass: [{ type: Input, args: ['custom-heading-four-class',] }],
        customHeadingFiveClass: [{ type: Input, args: ['custom-heading-five-class',] }],
        progressBarIconId: [{ type: Input }],
        progressBarTitleId: [{ type: Input }]
    };
    return SukuProgressBarComponent;
}());
export { SukuProgressBarComponent };
if (false) {
    /** @type {?} */
    SukuProgressBarComponent.prototype.progressStyleOne;
    /** @type {?} */
    SukuProgressBarComponent.prototype.progressStyleTwo;
    /** @type {?} */
    SukuProgressBarComponent.prototype.progressStyleThree;
    /** @type {?} */
    SukuProgressBarComponent.prototype.progressStyleFour;
    /** @type {?} */
    SukuProgressBarComponent.prototype.progressStyleFive;
    /** @type {?} */
    SukuProgressBarComponent.prototype.headingOne;
    /** @type {?} */
    SukuProgressBarComponent.prototype.headingTwo;
    /** @type {?} */
    SukuProgressBarComponent.prototype.headingThree;
    /** @type {?} */
    SukuProgressBarComponent.prototype.headingFour;
    /** @type {?} */
    SukuProgressBarComponent.prototype.headingFive;
    /** @type {?} */
    SukuProgressBarComponent.prototype.headingOneId;
    /** @type {?} */
    SukuProgressBarComponent.prototype.headingTwoId;
    /** @type {?} */
    SukuProgressBarComponent.prototype.headingThreeId;
    /** @type {?} */
    SukuProgressBarComponent.prototype.headingFourId;
    /** @type {?} */
    SukuProgressBarComponent.prototype.headingFiveId;
    /** @type {?} */
    SukuProgressBarComponent.prototype.customHeadingOneClass;
    /** @type {?} */
    SukuProgressBarComponent.prototype.customHeadingTwoClass;
    /** @type {?} */
    SukuProgressBarComponent.prototype.customHeadingThreeClass;
    /** @type {?} */
    SukuProgressBarComponent.prototype.customHeadingFourClass;
    /** @type {?} */
    SukuProgressBarComponent.prototype.customHeadingFiveClass;
    /** @type {?} */
    SukuProgressBarComponent.prototype.progressBarIconId;
    /** @type {?} */
    SukuProgressBarComponent.prototype.progressBarTitleId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcHJvZ3Jlc3MtYmFyL3N1a3UtcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUEwQ0M7UUFwQ1MscUJBQWdCLEdBQUcsbUJBQW1CLENBQUM7UUFDdkMscUJBQWdCLEdBQUcsa0JBQWtCLENBQUM7UUFDdEMsdUJBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDeEMsc0JBQWlCLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsZUFBVSxHQUFHLGlCQUFpQixDQUFDO1FBQy9CLGVBQVUsR0FBRyxpQkFBaUIsQ0FBQztRQUMvQixpQkFBWSxHQUFHLHNCQUFzQixDQUFDO1FBQ3RDLGdCQUFXLEdBQUcsZUFBZSxDQUFDO1FBQzlCLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLGlCQUFZLEdBQUcsY0FBYyxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsZUFBZSxDQUFDO1FBQy9CLG1CQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ2hDLGtCQUFhLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLGtCQUFhLEdBQUcsY0FBYyxDQUFDO1FBQ0wsMEJBQXFCLEdBQUcsV0FBVyxDQUFDO1FBQ3BDLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUN6Qiw0QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFDOUIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUVoRSxzQkFBaUIsR0FBRztZQUNuQixTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxVQUFVLEVBQUUsYUFBYTtZQUN6QixVQUFVLEVBQUUsU0FBUztTQUNyQixDQUFDO1FBRUYsdUJBQWtCLEdBQUc7WUFDcEIsVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFlBQVksRUFBRSxxQkFBcUI7WUFDbkMsV0FBVyxFQUFFLGFBQWE7WUFDMUIsV0FBVyxFQUFFLFNBQVM7U0FDdEIsQ0FBQztJQUNhLENBQUM7Ozs7SUFFaEIsMkNBQVE7OztJQUFSLGNBQVksQ0FBQzs7Z0JBNUNiLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixrakZBQWlEOztpQkFFakQ7Ozs7O21DQUVDLEtBQUs7bUNBQ0wsS0FBSztxQ0FDTCxLQUFLO29DQUNMLEtBQUs7b0NBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSzsrQkFDTCxLQUFLO2lDQUNMLEtBQUs7Z0NBQ0wsS0FBSztnQ0FDTCxLQUFLO3dDQUNMLEtBQUssU0FBQywwQkFBMEI7d0NBQ2hDLEtBQUssU0FBQywwQkFBMEI7MENBQ2hDLEtBQUssU0FBQyw0QkFBNEI7eUNBQ2xDLEtBQUssU0FBQywyQkFBMkI7eUNBQ2pDLEtBQUssU0FBQywyQkFBMkI7b0NBQ2pDLEtBQUs7cUNBUUwsS0FBSzs7SUFXUCwrQkFBQztDQUFBLEFBN0NELElBNkNDO1NBeENZLHdCQUF3Qjs7O0lBQ3BDLG9EQUFnRDs7SUFDaEQsb0RBQStDOztJQUMvQyxzREFBaUQ7O0lBQ2pELHFEQUFnRDs7SUFDaEQscURBQWdEOztJQUNoRCw4Q0FBd0M7O0lBQ3hDLDhDQUF3Qzs7SUFDeEMsZ0RBQStDOztJQUMvQywrQ0FBdUM7O0lBQ3ZDLCtDQUFpQzs7SUFDakMsZ0RBQXVDOztJQUN2QyxnREFBd0M7O0lBQ3hDLGtEQUF5Qzs7SUFDekMsaURBQXlDOztJQUN6QyxpREFBd0M7O0lBQ3hDLHlEQUF1RTs7SUFDdkUseURBQThEOztJQUM5RCwyREFBa0U7O0lBQ2xFLDBEQUFnRTs7SUFDaEUsMERBQWdFOztJQUNoRSxxREFPRTs7SUFDRixzREFPRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LXByb2dyZXNzLWJhcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXByb2dyZXNzLWJhci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LXByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1UHJvZ3Jlc3NCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKSBwcm9ncmVzc1N0eWxlT25lID0gJ3Byb2dyZXNzQ29tcGxldGVkJztcblx0QElucHV0KCkgcHJvZ3Jlc3NTdHlsZVR3byA9ICdwcm9ncmVzc1VwY29taW5nJztcblx0QElucHV0KCkgcHJvZ3Jlc3NTdHlsZVRocmVlID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xuXHRASW5wdXQoKSBwcm9ncmVzc1N0eWxlRm91ciA9ICdwcm9ncmVzc1VwY29taW5nJztcblx0QElucHV0KCkgcHJvZ3Jlc3NTdHlsZUZpdmUgPSAncHJvZ3Jlc3NVcGNvbWluZyc7XG5cdEBJbnB1dCgpIGhlYWRpbmdPbmUgPSAnTElTVElORyBERVRBSUxTJztcblx0QElucHV0KCkgaGVhZGluZ1R3byA9ICdQUk9EVUNUIERFVEFJTFMnO1xuXHRASW5wdXQoKSBoZWFkaW5nVGhyZWUgPSAnUFJPRFVDVCBUUkFDRUFCSUxJVFknO1xuXHRASW5wdXQoKSBoZWFkaW5nRm91ciA9ICdURVJNUyBPRiBTQUxFJztcblx0QElucHV0KCkgaGVhZGluZ0ZpdmUgPSAnQ09ORklSTSc7XG5cdEBJbnB1dCgpIGhlYWRpbmdPbmVJZCA9ICdmaXJzdEhlYWRpbmcnO1xuXHRASW5wdXQoKSBoZWFkaW5nVHdvSWQgPSAnc2Vjb25kSGVhZGluZyc7XG5cdEBJbnB1dCgpIGhlYWRpbmdUaHJlZUlkID0gJ3RoaXJkSGVhZGluZyc7XG5cdEBJbnB1dCgpIGhlYWRpbmdGb3VySWQgPSAnZm91cnRoSGVhZGluZyc7XG5cdEBJbnB1dCgpIGhlYWRpbmdGaXZlSWQgPSAnZmlmdGhIZWFkaW5nJztcblx0QElucHV0KCdjdXN0b20taGVhZGluZy1vbmUtY2xhc3MnKSBjdXN0b21IZWFkaW5nT25lQ2xhc3MgPSAndGV4dC1ib2xkJztcblx0QElucHV0KCdjdXN0b20taGVhZGluZy10d28tY2xhc3MnKSBjdXN0b21IZWFkaW5nVHdvQ2xhc3MgPSAnJztcblx0QElucHV0KCdjdXN0b20taGVhZGluZy10aHJlZS1jbGFzcycpIGN1c3RvbUhlYWRpbmdUaHJlZUNsYXNzID0gJyc7XG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctZm91ci1jbGFzcycpIGN1c3RvbUhlYWRpbmdGb3VyQ2xhc3MgPSAnJztcblx0QElucHV0KCdjdXN0b20taGVhZGluZy1maXZlLWNsYXNzJykgY3VzdG9tSGVhZGluZ0ZpdmVDbGFzcyA9ICcnO1xuXHRASW5wdXQoKVxuXHRwcm9ncmVzc0Jhckljb25JZCA9IHtcblx0XHRJY29uT25lSWQ6ICdsaXN0aW5nRGV0YWlscycsXG5cdFx0SWNvblR3b0lkOiAncHJvZHVjdERldGFpbHMnLFxuXHRcdEljb25UaHJlZUlkOiAncHJvZHVjdFRyYWNlYWJpbGl0eScsXG5cdFx0SWNvbkZvdXJJZDogJ3Rlcm1zT2ZTYWxlJyxcblx0XHRJY29uRml2ZUlkOiAnY29uZmlybSdcblx0fTtcblx0QElucHV0KClcblx0cHJvZ3Jlc3NCYXJUaXRsZUlkID0ge1xuXHRcdGxhYmVsT25lSWQ6ICdsaXN0aW5nRGV0YWlscycsXG5cdFx0bGFiZWxUd29JZDogJ3Byb2R1Y3REZXRhaWxzJyxcblx0XHRsYWJlbFRocmVlSWQ6ICdwcm9kdWN0VHJhY2VhYmlsaXR5Jyxcblx0XHRsYWJlbEZvdXJJZDogJ3Rlcm1zT2ZTYWxlJyxcblx0XHRsYWJlbEZpdmVJZDogJ2NvbmZpcm0nXG5cdH07XG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRuZ09uSW5pdCgpIHt9XG59XG4iXX0=