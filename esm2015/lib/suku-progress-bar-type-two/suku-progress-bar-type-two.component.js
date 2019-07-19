/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
        this.progressOneAction = new EventEmitter();
        this.progressTwoAction = new EventEmitter();
        this.progressThreeAction = new EventEmitter();
        this.progressFourAction = new EventEmitter();
        this.progressFiveAction = new EventEmitter();
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
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);.progressActive{width:50px!important;height:50px;color:#fff;background:#a7bf2e;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressTitle{font-family:\"Encode Sans\",sans-serif!important;font-size:12px!important;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.progress-bar-active{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.circleP{background-color:gray;width:50px!important;height:50px!important;border-radius:50%!important}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:20%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.text-bold{color:#000!important;font-weight:700!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center}.checkmark{display:inline-block}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid #d8fc40;border-width:0 3px 3px 0;transform:rotate(45deg)}hr{margin-top:1rem!important;margin-bottom:1rem!important;border:0!important;border-top:1px solid #979797!important;opacity:.2!important}.pr-6{padding-right:5rem}.pl-6{padding-left:4.8rem}@media only screen and (max-width:990px){.progressTitle{font-size:8px!important}.p-xs-0{padding:0!important}}"]
            }] }
];
/** @nocollapse */
SukuProgressBarTypeTwoComponent.ctorParameters = () => [];
SukuProgressBarTypeTwoComponent.propDecorators = {
    progressStyleOne: [{ type: Input, args: ['progress-style-one',] }],
    progressStyleTwo: [{ type: Input, args: ['progress-style-two',] }],
    progressStyleThree: [{ type: Input, args: ['progress-style-three',] }],
    progressStyleFour: [{ type: Input, args: ['progress-style-four',] }],
    progressStyleFive: [{ type: Input, args: ['progress-style-five',] }],
    customHeadingOneClass: [{ type: Input, args: ['custom-heading-one-class',] }],
    customHeadingTwoClass: [{ type: Input, args: ['custom-heading-two-class',] }],
    customHeadingThreeClass: [{ type: Input, args: ['custom-heading-three-class',] }],
    customHeadingFourClass: [{ type: Input, args: ['custom-heading-four-class',] }],
    customHeadingFiveClass: [{ type: Input, args: ['custom-heading-five-class',] }],
    progressBarLabels: [{ type: Input }],
    progressBarIconId: [{ type: Input }],
    progressBarTitleId: [{ type: Input }],
    progressOneAction: [{ type: Output }],
    progressTwoAction: [{ type: Output }],
    progressThreeAction: [{ type: Output }],
    progressFourAction: [{ type: Output }],
    progressFiveAction: [{ type: Output }]
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
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressOneAction;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressTwoAction;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressThreeAction;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressFourAction;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressFiveAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXItdHlwZS10d28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdHdvL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdHdvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sK0JBQStCO0lBMkMzQztRQTFDNkIscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDcEMscUJBQWdCLEdBQUcsa0JBQWtCLENBQUM7UUFDcEMsdUJBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDekMsc0JBQWlCLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcsa0JBQWtCLENBQUM7UUFDbEMsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUN6Qiw0QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFDOUIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUdoRSxzQkFBaUIsR0FBRztZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsVUFBVSxFQUFFLHNCQUFzQjtZQUNsQyxTQUFTLEVBQUUsZUFBZTtZQUMxQixTQUFTLEVBQUUsU0FBUztTQUNwQixDQUFDO1FBR0Ysc0JBQWlCLEdBQUc7WUFDbkIsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsVUFBVSxFQUFFLGFBQWE7WUFDekIsVUFBVSxFQUFFLFNBQVM7U0FDckIsQ0FBQztRQUdGLHVCQUFrQixHQUFHO1lBQ3BCLFVBQVUsRUFBRSxnQkFBZ0I7WUFDNUIsVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixZQUFZLEVBQUUscUJBQXFCO1lBQ25DLFdBQVcsRUFBRSxhQUFhO1lBQzFCLFdBQVcsRUFBRSxTQUFTO1NBQ3RCLENBQUM7UUFDUSxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6Qyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVqQixRQUFRLEtBQUssQ0FBQzs7O1lBbERkLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QywrcUZBQTBEOzthQUUxRDs7Ozs7K0JBRUMsS0FBSyxTQUFDLG9CQUFvQjsrQkFDMUIsS0FBSyxTQUFDLG9CQUFvQjtpQ0FDMUIsS0FBSyxTQUFDLHNCQUFzQjtnQ0FDNUIsS0FBSyxTQUFDLHFCQUFxQjtnQ0FDM0IsS0FBSyxTQUFDLHFCQUFxQjtvQ0FDM0IsS0FBSyxTQUFDLDBCQUEwQjtvQ0FDaEMsS0FBSyxTQUFDLDBCQUEwQjtzQ0FDaEMsS0FBSyxTQUFDLDRCQUE0QjtxQ0FDbEMsS0FBSyxTQUFDLDJCQUEyQjtxQ0FDakMsS0FBSyxTQUFDLDJCQUEyQjtnQ0FFakMsS0FBSztnQ0FTTCxLQUFLO2lDQVNMLEtBQUs7Z0NBUUwsTUFBTTtnQ0FDTixNQUFNO2tDQUNOLE1BQU07aUNBQ04sTUFBTTtpQ0FDTixNQUFNOzs7O0lBekNQLDJEQUFpRTs7SUFDakUsMkRBQW1FOztJQUNuRSw2REFBdUU7O0lBQ3ZFLDREQUFxRTs7SUFDckUsNERBQXFFOztJQUNyRSxnRUFBOEQ7O0lBQzlELGdFQUE4RDs7SUFDOUQsa0VBQWtFOztJQUNsRSxpRUFBZ0U7O0lBQ2hFLGlFQUFnRTs7SUFFaEUsNERBT0U7O0lBRUYsNERBT0U7O0lBRUYsNkRBT0U7O0lBQ0YsNERBQWlEOztJQUNqRCw0REFBaUQ7O0lBQ2pELDhEQUFtRDs7SUFDbkQsNkRBQWtEOztJQUNsRCw2REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdHdvJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdHdvLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1wcm9ncmVzcy1iYXItdHlwZS10d28uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1UHJvZ3Jlc3NCYXJUeXBlVHdvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCdwcm9ncmVzcy1zdHlsZS1vbmUnKSBwcm9ncmVzc1N0eWxlT25lID0gJ3Byb2dyZXNzQWN0aXZlJztcblx0QElucHV0KCdwcm9ncmVzcy1zdHlsZS10d28nKSBwcm9ncmVzc1N0eWxlVHdvID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xuXHRASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLXRocmVlJykgcHJvZ3Jlc3NTdHlsZVRocmVlID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xuXHRASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLWZvdXInKSBwcm9ncmVzc1N0eWxlRm91ciA9ICdwcm9ncmVzc1VwY29taW5nJztcblx0QElucHV0KCdwcm9ncmVzcy1zdHlsZS1maXZlJykgcHJvZ3Jlc3NTdHlsZUZpdmUgPSAncHJvZ3Jlc3NVcGNvbWluZyc7XG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctb25lLWNsYXNzJykgY3VzdG9tSGVhZGluZ09uZUNsYXNzID0gJyc7XG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctdHdvLWNsYXNzJykgY3VzdG9tSGVhZGluZ1R3b0NsYXNzID0gJyc7XG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctdGhyZWUtY2xhc3MnKSBjdXN0b21IZWFkaW5nVGhyZWVDbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLWZvdXItY2xhc3MnKSBjdXN0b21IZWFkaW5nRm91ckNsYXNzID0gJyc7XG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctZml2ZS1jbGFzcycpIGN1c3RvbUhlYWRpbmdGaXZlQ2xhc3MgPSAnJztcblxuXHRASW5wdXQoKVxuXHRwcm9ncmVzc0JhckxhYmVscyA9IHtcblx0XHRsYWJlbE9uZTogJ0xJU1RJTkcgREVUQUlMUycsXG5cdFx0bGFiZWxUd286ICdQUk9EVUNUIERFVEFJTFMnLFxuXHRcdGxhYmVsVGhyZWU6ICdQUk9EVUNUIFRSQUNFQUJJTElUWScsXG5cdFx0bGFiZWxGb3VyOiAnVEVSTVMgT0YgU0FMRScsXG5cdFx0bGFiZWxGaXZlOiAnQ09ORklSTSdcblx0fTtcblxuXHRASW5wdXQoKVxuXHRwcm9ncmVzc0Jhckljb25JZCA9IHtcblx0XHRJY29uT25lSWQ6ICdsaXN0aW5nRGV0YWlscycsXG5cdFx0SWNvblR3b0lkOiAncHJvZHVjdERldGFpbHMnLFxuXHRcdEljb25UaHJlZUlkOiAncHJvZHVjdFRyYWNlYWJpbGl0eScsXG5cdFx0SWNvbkZvdXJJZDogJ3Rlcm1zT2ZTYWxlJyxcblx0XHRJY29uRml2ZUlkOiAnY29uZmlybSdcblx0fTtcblxuXHRASW5wdXQoKVxuXHRwcm9ncmVzc0JhclRpdGxlSWQgPSB7XG5cdFx0bGFiZWxPbmVJZDogJ2xpc3RpbmdEZXRhaWxzJyxcblx0XHRsYWJlbFR3b0lkOiAncHJvZHVjdERldGFpbHMnLFxuXHRcdGxhYmVsVGhyZWVJZDogJ3Byb2R1Y3RUcmFjZWFiaWxpdHknLFxuXHRcdGxhYmVsRm91cklkOiAndGVybXNPZlNhbGUnLFxuXHRcdGxhYmVsRml2ZUlkOiAnY29uZmlybSdcblx0fTtcblx0QE91dHB1dCgpIHByb2dyZXNzT25lQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgcHJvZ3Jlc3NUd29BY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwcm9ncmVzc1RocmVlQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgcHJvZ3Jlc3NGb3VyQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgcHJvZ3Jlc3NGaXZlQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdG5nT25Jbml0KCkgeyB9XG59XG4iXX0=