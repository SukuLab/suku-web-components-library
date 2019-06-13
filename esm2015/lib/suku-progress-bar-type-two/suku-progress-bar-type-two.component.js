/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuProgressBarTypeTwoComponent {
    constructor() {
        this.progressStyleOne = 'progressActive';
        this.progressStyleTwo = 'progressUpcoming';
        this.progressStyleThree = 'progressUpcoming';
        this.progressStyleFour = 'progressUpcoming';
        this.progressStyleFive = 'progressUpcoming';
        this.customHeadingOneClass = '';
        this.customHeadingTwoClass = '';
        this.customHeadingThreeClass = '';
        this.customHeadingFourClass = '';
        this.customHeadingFiveClass = '';
        this.progressBarLabels = {
            labelOne: 'LISTING DETAILS',
            labelTwo: 'PRODUCT DETAILS',
            labelThree: 'PRODUCT TRACEABILITY',
            labelFour: 'TERMS OF SALE',
            labelFive: 'CONFIRM'
        };
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
    ngOnInit() { }
}
SukuProgressBarTypeTwoComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-progress-bar-type-two',
                template: "<table class=\"col-sm-10 offset-sm-1\">\n  <tr class=\"pt-3\">\n    <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\">\n      <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\">\n      <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\">\n      <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\">\n      <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFive}} text-center\" id=\"{{progressBarIconId?.IconFiveId}}\">\n      <span *ngIf=\"(progressStyleFive == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFive == 'progressCompleted')\">5</span>\n    </td>\n  </tr>\n</table>\n<table class=\"col-sm-12 text-center mt-2\">\n  <tr id=\"txt\" class=\"pt-3\">\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelOneId}}\">\n      <span class=\"pl-4 p-xs-0 {{customHeadingOneClass}}\">{{progressBarLabels?.labelOne}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelTwoId}}\">\n      <span class=\"{{customHeadingTwoClass}} pl-4 p-xs-0\">{{progressBarLabels?.labelTwo}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelThreeId}}\">\n      <span class=\"{{customHeadingThreeClass}} p-xs-0\">{{progressBarLabels?.labelThree}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFourId}}\">\n      <span class=\"pr-3 {{customHeadingFourClass}} p-xs-0\">{{progressBarLabels?.labelFour}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFiveId}}\">\n      <span class=\"pr-4 {{customHeadingFiveClass}} p-xs-0\">{{progressBarLabels?.labelFive}}</span>\n    </td>\n  </tr>\n</table>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);.progressActive{width:50px!important;height:50px;color:#fff;background:#a7bf2e;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressTitle{font-family:\"Encode Sans\",sans-serif!important;font-size:12px!important;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.progress-bar-active{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.circleP{background-color:gray;width:50px!important;height:50px!important;border-radius:50%!important}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:20%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.text-bold{color:#000!important;font-weight:700!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center}.checkmark{display:inline-block}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid #d8fc40;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}hr{margin-top:1rem!important;margin-bottom:1rem!important;border:0!important;border-top:1px solid #979797!important;opacity:.2!important}.pr-6{padding-right:5rem}.pl-6{padding-left:4.8rem}@media only screen and (max-width:990px){.progressTitle{font-size:8px!important}.p-xs-0{padding:0!important}}"]
            }] }
];
/** @nocollapse */
SukuProgressBarTypeTwoComponent.ctorParameters = () => [];
SukuProgressBarTypeTwoComponent.propDecorators = {
    progressStyleOne: [{ type: Input }],
    progressStyleTwo: [{ type: Input }],
    progressStyleThree: [{ type: Input }],
    progressStyleFour: [{ type: Input }],
    progressStyleFive: [{ type: Input }],
    customHeadingOneClass: [{ type: Input }],
    customHeadingTwoClass: [{ type: Input }],
    customHeadingThreeClass: [{ type: Input }],
    customHeadingFourClass: [{ type: Input }],
    customHeadingFiveClass: [{ type: Input }],
    progressBarLabels: [{ type: Input }],
    progressBarIconId: [{ type: Input }],
    progressBarTitleId: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressStyleOne;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressStyleTwo;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressStyleThree;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressStyleFour;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressStyleFive;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.customHeadingOneClass;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.customHeadingTwoClass;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.customHeadingThreeClass;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.customHeadingFourClass;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.customHeadingFiveClass;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressBarLabels;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressBarIconId;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressBarTitleId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXItdHlwZS10d28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdHdvL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdHdvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLCtCQUErQjtJQW1DM0M7UUFsQ1MscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDcEMscUJBQWdCLEdBQUcsa0JBQWtCLENBQUM7UUFDdEMsdUJBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDeEMsc0JBQWlCLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUMzQiw0QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFDN0IsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUVyQyxzQkFBaUIsR0FBRztZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsVUFBVSxFQUFFLHNCQUFzQjtZQUNsQyxTQUFTLEVBQUUsZUFBZTtZQUMxQixTQUFTLEVBQUUsU0FBUztTQUNwQixDQUFDO1FBRUYsc0JBQWlCLEdBQUc7WUFDbkIsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsVUFBVSxFQUFFLGFBQWE7WUFDekIsVUFBVSxFQUFFLFNBQVM7U0FDckIsQ0FBQztRQUVGLHVCQUFrQixHQUFHO1lBQ3BCLFVBQVUsRUFBRSxnQkFBZ0I7WUFDNUIsVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixZQUFZLEVBQUUscUJBQXFCO1lBQ25DLFdBQVcsRUFBRSxhQUFhO1lBQzFCLFdBQVcsRUFBRSxTQUFTO1NBQ3RCLENBQUM7SUFDYSxDQUFDOzs7O0lBRWhCLFFBQVEsS0FBSSxDQUFDOzs7WUExQ2IsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLCtxRkFBMEQ7O2FBRTFEOzs7OzsrQkFFQyxLQUFLOytCQUNMLEtBQUs7aUNBQ0wsS0FBSztnQ0FDTCxLQUFLO2dDQUNMLEtBQUs7b0NBQ0wsS0FBSztvQ0FDTCxLQUFLO3NDQUNMLEtBQUs7cUNBQ0wsS0FBSztxQ0FDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBUUwsS0FBSztpQ0FRTCxLQUFLOzs7O0lBMUJOLDJEQUE2Qzs7SUFDN0MsMkRBQStDOztJQUMvQyw2REFBaUQ7O0lBQ2pELDREQUFnRDs7SUFDaEQsNERBQWdEOztJQUNoRCxnRUFBb0M7O0lBQ3BDLGdFQUFvQzs7SUFDcEMsa0VBQXNDOztJQUN0QyxpRUFBcUM7O0lBQ3JDLGlFQUFxQzs7SUFDckMsNERBT0U7O0lBQ0YsNERBT0U7O0lBQ0YsNkRBT0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1wcm9ncmVzcy1iYXItdHlwZS10d28nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1wcm9ncmVzcy1iYXItdHlwZS10d28uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1wcm9ncmVzcy1iYXItdHlwZS10d28uY29tcG9uZW50LnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVByb2dyZXNzQmFyVHlwZVR3b0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVPbmUgPSAncHJvZ3Jlc3NBY3RpdmUnO1xuXHRASW5wdXQoKSBwcm9ncmVzc1N0eWxlVHdvID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xuXHRASW5wdXQoKSBwcm9ncmVzc1N0eWxlVGhyZWUgPSAncHJvZ3Jlc3NVcGNvbWluZyc7XG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVGb3VyID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xuXHRASW5wdXQoKSBwcm9ncmVzc1N0eWxlRml2ZSA9ICdwcm9ncmVzc1VwY29taW5nJztcblx0QElucHV0KCkgY3VzdG9tSGVhZGluZ09uZUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIGN1c3RvbUhlYWRpbmdUd29DbGFzcyA9ICcnO1xuXHRASW5wdXQoKSBjdXN0b21IZWFkaW5nVGhyZWVDbGFzcyA9ICcnO1xuXHRASW5wdXQoKSBjdXN0b21IZWFkaW5nRm91ckNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIGN1c3RvbUhlYWRpbmdGaXZlQ2xhc3MgPSAnJztcblx0QElucHV0KClcblx0cHJvZ3Jlc3NCYXJMYWJlbHMgPSB7XG5cdFx0bGFiZWxPbmU6ICdMSVNUSU5HIERFVEFJTFMnLFxuXHRcdGxhYmVsVHdvOiAnUFJPRFVDVCBERVRBSUxTJyxcblx0XHRsYWJlbFRocmVlOiAnUFJPRFVDVCBUUkFDRUFCSUxJVFknLFxuXHRcdGxhYmVsRm91cjogJ1RFUk1TIE9GIFNBTEUnLFxuXHRcdGxhYmVsRml2ZTogJ0NPTkZJUk0nXG5cdH07XG5cdEBJbnB1dCgpXG5cdHByb2dyZXNzQmFySWNvbklkID0ge1xuXHRcdEljb25PbmVJZDogJ2xpc3RpbmdEZXRhaWxzJyxcblx0XHRJY29uVHdvSWQ6ICdwcm9kdWN0RGV0YWlscycsXG5cdFx0SWNvblRocmVlSWQ6ICdwcm9kdWN0VHJhY2VhYmlsaXR5Jyxcblx0XHRJY29uRm91cklkOiAndGVybXNPZlNhbGUnLFxuXHRcdEljb25GaXZlSWQ6ICdjb25maXJtJ1xuXHR9O1xuXHRASW5wdXQoKVxuXHRwcm9ncmVzc0JhclRpdGxlSWQgPSB7XG5cdFx0bGFiZWxPbmVJZDogJ2xpc3RpbmdEZXRhaWxzJyxcblx0XHRsYWJlbFR3b0lkOiAncHJvZHVjdERldGFpbHMnLFxuXHRcdGxhYmVsVGhyZWVJZDogJ3Byb2R1Y3RUcmFjZWFiaWxpdHknLFxuXHRcdGxhYmVsRm91cklkOiAndGVybXNPZlNhbGUnLFxuXHRcdGxhYmVsRml2ZUlkOiAnY29uZmlybSdcblx0fTtcblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdG5nT25Jbml0KCkge31cbn1cbiJdfQ==