/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuProgressBarTypeOneComponent {
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
            labelOne: 'RETRIEVE COMPANY DATA',
            labelTwo: 'COMPANY INFO',
            labelThree: 'LICENSING',
            labelFour: 'CONFIRMATION'
        };
        this.progressBarIconId = {
            IconOneId: 'listingDetails',
            IconTwoId: 'productDetails',
            IconThreeId: 'productTraceability',
            IconFourId: 'confirm'
        };
        this.progressBarTitleId = {
            labelOneId: 'listingDetails',
            labelTwoId: 'productDetails',
            labelThreeId: 'productTraceability',
            labelFourId: 'confirm'
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SukuProgressBarTypeOneComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-progress-bar-type-one',
                template: "<div class=\"col p-0 pt-4\">\n  <div class=\"row\">\n    <div class=\"col-sm-2 pr-0 mnt-0 \">\n      <span class=\"progressText \">PROGRESS</span>\n      <hr>\n    </div>\n    <div class=\"col-sm-8 p-0\">\n      <table class=\"col-sm-12\">\n        <tr class=\"pt-3\">\n          <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\">\n            <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n            <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n          </td>\n          <td>\n            <hr>\n          </td>\n          <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\">\n            <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n            <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n          </td>\n          <td>\n            <hr>\n          </td>\n          <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\">\n            <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n            <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n          </td>\n          <td>\n            <hr>\n          </td>\n          <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\">\n            <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n            <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\n          </td>\n        </tr>\n      </table>\n    </div>\n    <div class=\"col-sm-2 pl-0 m-auto\">\n      <hr>\n    </div>\n  </div>\n  <div class=\"col-sm-12\">\n    <table class=\"col-sm-10 offset-sm-1 text-center\">\n      <tr id=\"txt\" class=\"pt-3\">\n        <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelOneId}}\">\n          <span class=\"{{customHeadingOneClass}} pr-5\">{{progressBarLabels?.labelOne}}</span>\n        </td>\n        <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelTwoId}}\">\n          <span class=\"{{customHeadingTwoClass}} pr-3\">{{progressBarLabels?.labelTwo}}</span>\n        </td>\n        <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelThreeId}}\">\n          <span class=\"pl-3 {{customHeadingThreeClass}}\">{{progressBarLabels?.labelThree}}</span>\n        </td>\n        <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFourId}}\">\n          <span class=\"pl-5 {{customHeadingFourClass}}\">{{progressBarLabels?.labelFour}}</span>\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);.Progresscircle{width:50px;height:50px;color:#fff;background:#031103;border-radius:50%}.progressActive{width:50px!important;height:50px;color:#fff;background:#a7bf2e;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressTitle{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:20%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.text-bold{color:#000!important;font-weight:700!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center}.checkmark{display:inline-block}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid #d8fc40;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}hr{margin-top:1rem!important;margin-bottom:1rem!important;border:0!important;border-top:1px solid #979797!important;opacity:.2!important}.pr-6{padding-right:5rem}.pl-6{padding-left:4.8rem}.progressText{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:500;color:#b6b6b6}.mnt-0{margin-top:-1.1rem}"]
            }] }
];
/** @nocollapse */
SukuProgressBarTypeOneComponent.ctorParameters = () => [];
SukuProgressBarTypeOneComponent.propDecorators = {
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
    SukuProgressBarTypeOneComponent.prototype.progressStyleOne;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressStyleTwo;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressStyleThree;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressStyleFour;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressStyleFive;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.customHeadingOneClass;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.customHeadingTwoClass;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.customHeadingThreeClass;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.customHeadingFourClass;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.customHeadingFiveClass;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressBarLabels;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressBarIconId;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressBarTitleId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXItdHlwZS1vbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLCtCQUErQjtJQWdDM0M7UUEvQlMscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDcEMscUJBQWdCLEdBQUcsa0JBQWtCLENBQUM7UUFDdEMsdUJBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDeEMsc0JBQWlCLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUMzQiw0QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFDN0IsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUVyQyxzQkFBaUIsR0FBRztZQUNuQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLFNBQVMsRUFBRSxjQUFjO1NBQ3pCLENBQUM7UUFFRixzQkFBaUIsR0FBRztZQUNuQixTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxVQUFVLEVBQUUsU0FBUztTQUNyQixDQUFDO1FBRUYsdUJBQWtCLEdBQUc7WUFDcEIsVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFlBQVksRUFBRSxxQkFBcUI7WUFDbkMsV0FBVyxFQUFFLFNBQVM7U0FDdEIsQ0FBQztJQUNhLENBQUM7Ozs7SUFFaEIsUUFBUSxLQUFJLENBQUM7OztZQXZDYixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsMHBGQUEwRDs7YUFFMUQ7Ozs7OytCQUVDLEtBQUs7K0JBQ0wsS0FBSztpQ0FDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSztvQ0FDTCxLQUFLO29DQUNMLEtBQUs7c0NBQ0wsS0FBSztxQ0FDTCxLQUFLO3FDQUNMLEtBQUs7Z0NBQ0wsS0FBSztnQ0FPTCxLQUFLO2lDQU9MLEtBQUs7Ozs7SUF4Qk4sMkRBQTZDOztJQUM3QywyREFBK0M7O0lBQy9DLDZEQUFpRDs7SUFDakQsNERBQWdEOztJQUNoRCw0REFBZ0Q7O0lBQ2hELGdFQUFvQzs7SUFDcEMsZ0VBQW9DOztJQUNwQyxrRUFBc0M7O0lBQ3RDLGlFQUFxQzs7SUFDckMsaUVBQXFDOztJQUNyQyw0REFNRTs7SUFDRiw0REFNRTs7SUFDRiw2REFNRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LXByb2dyZXNzLWJhci10eXBlLW9uZScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXByb2dyZXNzLWJhci10eXBlLW9uZS5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LXByb2dyZXNzLWJhci10eXBlLW9uZS5jb21wb25lbnQuc2NzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1UHJvZ3Jlc3NCYXJUeXBlT25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgcHJvZ3Jlc3NTdHlsZU9uZSA9ICdwcm9ncmVzc0FjdGl2ZSc7XG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVUd28gPSAncHJvZ3Jlc3NVcGNvbWluZyc7XG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVUaHJlZSA9ICdwcm9ncmVzc1VwY29taW5nJztcblx0QElucHV0KCkgcHJvZ3Jlc3NTdHlsZUZvdXIgPSAncHJvZ3Jlc3NVcGNvbWluZyc7XG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVGaXZlID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xuXHRASW5wdXQoKSBjdXN0b21IZWFkaW5nT25lQ2xhc3MgPSAnJztcblx0QElucHV0KCkgY3VzdG9tSGVhZGluZ1R3b0NsYXNzID0gJyc7XG5cdEBJbnB1dCgpIGN1c3RvbUhlYWRpbmdUaHJlZUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIGN1c3RvbUhlYWRpbmdGb3VyQ2xhc3MgPSAnJztcblx0QElucHV0KCkgY3VzdG9tSGVhZGluZ0ZpdmVDbGFzcyA9ICcnO1xuXHRASW5wdXQoKVxuXHRwcm9ncmVzc0JhckxhYmVscyA9IHtcblx0XHRsYWJlbE9uZTogJ1JFVFJJRVZFIENPTVBBTlkgREFUQScsXG5cdFx0bGFiZWxUd286ICdDT01QQU5ZIElORk8nLFxuXHRcdGxhYmVsVGhyZWU6ICdMSUNFTlNJTkcnLFxuXHRcdGxhYmVsRm91cjogJ0NPTkZJUk1BVElPTidcblx0fTtcblx0QElucHV0KClcblx0cHJvZ3Jlc3NCYXJJY29uSWQgPSB7XG5cdFx0SWNvbk9uZUlkOiAnbGlzdGluZ0RldGFpbHMnLFxuXHRcdEljb25Ud29JZDogJ3Byb2R1Y3REZXRhaWxzJyxcblx0XHRJY29uVGhyZWVJZDogJ3Byb2R1Y3RUcmFjZWFiaWxpdHknLFxuXHRcdEljb25Gb3VySWQ6ICdjb25maXJtJ1xuXHR9O1xuXHRASW5wdXQoKVxuXHRwcm9ncmVzc0JhclRpdGxlSWQgPSB7XG5cdFx0bGFiZWxPbmVJZDogJ2xpc3RpbmdEZXRhaWxzJyxcblx0XHRsYWJlbFR3b0lkOiAncHJvZHVjdERldGFpbHMnLFxuXHRcdGxhYmVsVGhyZWVJZDogJ3Byb2R1Y3RUcmFjZWFiaWxpdHknLFxuXHRcdGxhYmVsRm91cklkOiAnY29uZmlybSdcblx0fTtcblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdG5nT25Jbml0KCkge31cbn1cbiJdfQ==