/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-progress-bar-type-one/suku-progress-bar-type-one.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuProgressBarTypeOneComponent {
    constructor() {
        this.progressStyleOne = 'progressActive';
        this.progressStyleTwo = 'progressUpcoming';
        this.progressStyleThree = 'progressUpcoming';
        this.progressStyleFour = 'progressUpcoming';
        this.customHeadingOneClass = 'p-xs-0 ';
        this.customHeadingTwoClass = '  p-xs-0';
        this.customHeadingThreeClass = 'p-xs-0';
        this.customHeadingFourClass = 'p-xs-0';
        this.enablePointer = false;
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
        this.progressOneAction = new EventEmitter();
        this.progressTwoAction = new EventEmitter();
        this.progressThreeAction = new EventEmitter();
        this.progressFourAction = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SukuProgressBarTypeOneComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-progress-bar-type-one',
                template: "<table class=\"col-sm-10 offset-sm-1\">\n  <tr class=\"pt-3\">\n    <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\"\n      (click)=\"progressOneAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\"\n      (click)=\"progressTwoAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\"\n      (click)=\"progressThreeAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\"\n      (click)=\"progressFourAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\n    </td>\n  </tr>\n</table>\n<table class=\"col-sm-12 text-center mt-2\">\n  <tr id=\"txt\" class=\"pt-3\">\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelOneId}}\">\n      <span class=\"{{customHeadingOneClass}}\" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressOneAction.emit()\">{{progressBarLabels?.labelOne}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelTwoId}}\">\n      <span class=\"{{customHeadingTwoClass}} \" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressTwoAction.emit()\">{{progressBarLabels?.labelTwo}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelThreeId}}\">\n      <span class=\"{{customHeadingThreeClass}} \" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressThreeAction.emit()\">{{progressBarLabels?.labelThree}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFourId}}\">\n      <span class=\" {{customHeadingFourClass}} \" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressFourAction.emit()\">{{progressBarLabels?.labelFour}}</span>\n    </td>\n  </tr>\n</table>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);.progressActive{width:50px!important;height:50px;color:#fff;background:#a7bf2e;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressTitle{font-family:\"Encode Sans\",sans-serif!important;font-size:12px!important;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.progress-bar-active{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.circleP{background-color:gray;width:50px!important;height:50px!important;border-radius:50%!important}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:15%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.text-bold{color:#000!important;font-weight:700!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center}.checkmark{display:inline-block}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid #d8fc40;border-width:0 3px 3px 0;transform:rotate(45deg)}.c-pointer :hover{cursor:pointer}hr{margin-top:1rem!important;margin-bottom:1rem!important;border:0!important;border-top:1px solid #979797!important;opacity:.2!important}.pr-6{padding-right:5rem}.pl-6{padding-left:4.8rem}@media only screen and (max-width:990px){.progressTitle{font-size:8px!important}.p-xs-0{padding:0!important}}"]
            }] }
];
/** @nocollapse */
SukuProgressBarTypeOneComponent.ctorParameters = () => [];
SukuProgressBarTypeOneComponent.propDecorators = {
    progressStyleOne: [{ type: Input, args: ['progress-style-one',] }],
    progressStyleTwo: [{ type: Input, args: ['progress-style-two',] }],
    progressStyleThree: [{ type: Input, args: ['progress-style-three',] }],
    progressStyleFour: [{ type: Input, args: ['progress-style-four',] }],
    customHeadingOneClass: [{ type: Input, args: ['custom-heading-one-class',] }],
    customHeadingTwoClass: [{ type: Input, args: ['custom-heading-two-class',] }],
    customHeadingThreeClass: [{ type: Input, args: ['custom-heading-three-class',] }],
    customHeadingFourClass: [{ type: Input, args: ['custom-heading-four-class',] }],
    enablePointer: [{ type: Input, args: ['enable-pointer',] }],
    progressBarIconId: [{ type: Input }],
    progressBarTitleId: [{ type: Input }],
    progressOneAction: [{ type: Output }],
    progressTwoAction: [{ type: Output }],
    progressThreeAction: [{ type: Output }],
    progressFourAction: [{ type: Output }]
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
    SukuProgressBarTypeOneComponent.prototype.customHeadingOneClass;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.customHeadingTwoClass;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.customHeadingThreeClass;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.customHeadingFourClass;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.enablePointer;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressBarLabels;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressBarIconId;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressBarTitleId;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressOneAction;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressTwoAction;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressThreeAction;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressFourAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXItdHlwZS1vbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0UsTUFBTSxPQUFPLCtCQUErQjtJQW9DM0M7UUFsQzZCLHFCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3BDLHFCQUFnQixHQUFHLGtCQUFrQixDQUFDO1FBQ3BDLHVCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQ3pDLHNCQUFpQixHQUFHLGtCQUFrQixDQUFDO1FBQ2xDLDBCQUFxQixHQUFHLFNBQVMsQ0FBQztRQUNsQywwQkFBcUIsR0FBRyxVQUFVLENBQUM7UUFDakMsNEJBQXVCLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLDJCQUFzQixHQUFHLFFBQVEsQ0FBQztRQUM3QyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUUvQyxzQkFBaUIsR0FBRztZQUNuQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLFNBQVMsRUFBRSxjQUFjO1NBQ3pCLENBQUM7UUFFRixzQkFBaUIsR0FBRztZQUNuQixTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxVQUFVLEVBQUUsU0FBUztTQUNyQixDQUFDO1FBRUYsdUJBQWtCLEdBQUc7WUFDcEIsVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFlBQVksRUFBRSxxQkFBcUI7WUFDbkMsV0FBVyxFQUFFLFNBQVM7U0FDdEIsQ0FBQztRQUNRLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2Qyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pDLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVqQixRQUFRLEtBQUssQ0FBQzs7O1lBM0NkLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxxMEZBQTBEOzthQUUxRDs7Ozs7K0JBR0MsS0FBSyxTQUFDLG9CQUFvQjsrQkFDMUIsS0FBSyxTQUFDLG9CQUFvQjtpQ0FDMUIsS0FBSyxTQUFDLHNCQUFzQjtnQ0FDNUIsS0FBSyxTQUFDLHFCQUFxQjtvQ0FDM0IsS0FBSyxTQUFDLDBCQUEwQjtvQ0FDaEMsS0FBSyxTQUFDLDBCQUEwQjtzQ0FDaEMsS0FBSyxTQUFDLDRCQUE0QjtxQ0FDbEMsS0FBSyxTQUFDLDJCQUEyQjs0QkFDakMsS0FBSyxTQUFDLGdCQUFnQjtnQ0FRdEIsS0FBSztpQ0FPTCxLQUFLO2dDQU9MLE1BQU07Z0NBQ04sTUFBTTtrQ0FDTixNQUFNO2lDQUNOLE1BQU07Ozs7SUFqQ1AsMkRBQWlFOztJQUNqRSwyREFBbUU7O0lBQ25FLDZEQUF1RTs7SUFDdkUsNERBQXFFOztJQUNyRSxnRUFBcUU7O0lBQ3JFLGdFQUFzRTs7SUFDdEUsa0VBQXdFOztJQUN4RSxpRUFBc0U7O0lBQ3RFLHdEQUErQzs7SUFFL0MsNERBS0U7O0lBQ0YsNERBTUU7O0lBQ0YsNkRBTUU7O0lBQ0YsNERBQWlEOztJQUNqRCw0REFBaUQ7O0lBQ2pELDhEQUFtRDs7SUFDbkQsNkRBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LXByb2dyZXNzLWJhci10eXBlLW9uZScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXByb2dyZXNzLWJhci10eXBlLW9uZS5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVByb2dyZXNzQmFyVHlwZU9uZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KCdwcm9ncmVzcy1zdHlsZS1vbmUnKSBwcm9ncmVzc1N0eWxlT25lID0gJ3Byb2dyZXNzQWN0aXZlJztcblx0QElucHV0KCdwcm9ncmVzcy1zdHlsZS10d28nKSBwcm9ncmVzc1N0eWxlVHdvID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xuXHRASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLXRocmVlJykgcHJvZ3Jlc3NTdHlsZVRocmVlID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xuXHRASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLWZvdXInKSBwcm9ncmVzc1N0eWxlRm91ciA9ICdwcm9ncmVzc1VwY29taW5nJztcblx0QElucHV0KCdjdXN0b20taGVhZGluZy1vbmUtY2xhc3MnKSBjdXN0b21IZWFkaW5nT25lQ2xhc3MgPSAncC14cy0wICc7XG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctdHdvLWNsYXNzJykgY3VzdG9tSGVhZGluZ1R3b0NsYXNzID0gJyAgcC14cy0wJztcblx0QElucHV0KCdjdXN0b20taGVhZGluZy10aHJlZS1jbGFzcycpIGN1c3RvbUhlYWRpbmdUaHJlZUNsYXNzID0gJ3AteHMtMCc7XG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctZm91ci1jbGFzcycpIGN1c3RvbUhlYWRpbmdGb3VyQ2xhc3MgPSAncC14cy0wJztcblx0QElucHV0KCdlbmFibGUtcG9pbnRlcicpIGVuYWJsZVBvaW50ZXIgPSBmYWxzZTtcblxuXHRwcm9ncmVzc0JhckxhYmVscyA9IHtcblx0XHRsYWJlbE9uZTogJ1JFVFJJRVZFIENPTVBBTlkgREFUQScsXG5cdFx0bGFiZWxUd286ICdDT01QQU5ZIElORk8nLFxuXHRcdGxhYmVsVGhyZWU6ICdMSUNFTlNJTkcnLFxuXHRcdGxhYmVsRm91cjogJ0NPTkZJUk1BVElPTidcblx0fTtcblx0QElucHV0KClcblx0cHJvZ3Jlc3NCYXJJY29uSWQgPSB7XG5cdFx0SWNvbk9uZUlkOiAnbGlzdGluZ0RldGFpbHMnLFxuXHRcdEljb25Ud29JZDogJ3Byb2R1Y3REZXRhaWxzJyxcblx0XHRJY29uVGhyZWVJZDogJ3Byb2R1Y3RUcmFjZWFiaWxpdHknLFxuXHRcdEljb25Gb3VySWQ6ICdjb25maXJtJ1xuXHR9O1xuXHRASW5wdXQoKVxuXHRwcm9ncmVzc0JhclRpdGxlSWQgPSB7XG5cdFx0bGFiZWxPbmVJZDogJ2xpc3RpbmdEZXRhaWxzJyxcblx0XHRsYWJlbFR3b0lkOiAncHJvZHVjdERldGFpbHMnLFxuXHRcdGxhYmVsVGhyZWVJZDogJ3Byb2R1Y3RUcmFjZWFiaWxpdHknLFxuXHRcdGxhYmVsRm91cklkOiAnY29uZmlybSdcblx0fTtcblx0QE91dHB1dCgpIHByb2dyZXNzT25lQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgcHJvZ3Jlc3NUd29BY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwcm9ncmVzc1RocmVlQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgcHJvZ3Jlc3NGb3VyQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdG5nT25Jbml0KCkgeyB9XG59XG4iXX0=