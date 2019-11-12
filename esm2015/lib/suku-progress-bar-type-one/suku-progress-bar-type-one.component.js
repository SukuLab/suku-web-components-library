/**
 * @fileoverview added by tsickle
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
                template: "<table class=\"col-sm-10 offset-sm-1\">\r\n  <tr class=\"pt-3\">\r\n    <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\"\r\n      (click)=\"progressOneAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\r\n      <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\r\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\r\n    </td>\r\n    <td>\r\n      <hr class=\"hrLine\">\r\n    </td>\r\n    <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\"\r\n      (click)=\"progressTwoAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\r\n      <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\r\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\r\n    </td>\r\n    <td>\r\n      <hr class=\"hrLine\">\r\n    </td>\r\n    <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\"\r\n      (click)=\"progressThreeAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\r\n      <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\r\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\r\n    </td>\r\n    <td>\r\n      <hr class=\"hrLine\">\r\n    </td>\r\n    <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\"\r\n      (click)=\"progressFourAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\r\n      <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\r\n      <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\r\n    </td>\r\n  </tr>\r\n</table>\r\n<table class=\"col-sm-12 text-center mt-2\">\r\n  <tr id=\"txt\" class=\"pt-3\">\r\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelOneId}}\">\r\n      <span class=\"{{customHeadingOneClass}}\" [ngClass]=\"{'c-pointer': enablePointer}\"\r\n        (click)=\"progressOneAction.emit()\">{{progressBarLabels?.labelOne}}</span>\r\n    </td>\r\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelTwoId}}\">\r\n      <span class=\"{{customHeadingTwoClass}} \" [ngClass]=\"{'c-pointer': enablePointer}\"\r\n        (click)=\"progressTwoAction.emit()\">{{progressBarLabels?.labelTwo}}</span>\r\n    </td>\r\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelThreeId}}\">\r\n      <span class=\"{{customHeadingThreeClass}} \" [ngClass]=\"{'c-pointer': enablePointer}\"\r\n        (click)=\"progressThreeAction.emit()\">{{progressBarLabels?.labelThree}}</span>\r\n    </td>\r\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFourId}}\">\r\n      <span class=\" {{customHeadingFourClass}} \" [ngClass]=\"{'c-pointer': enablePointer}\"\r\n        (click)=\"progressFourAction.emit()\">{{progressBarLabels?.labelFour}}</span>\r\n    </td>\r\n  </tr>\r\n</table>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXItdHlwZS1vbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sK0JBQStCO0lBb0MzQztRQWxDNkIscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDcEMscUJBQWdCLEdBQUcsa0JBQWtCLENBQUM7UUFDcEMsdUJBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDekMsc0JBQWlCLEdBQUcsa0JBQWtCLENBQUM7UUFDbEMsMEJBQXFCLEdBQUcsU0FBUyxDQUFDO1FBQ2xDLDBCQUFxQixHQUFHLFVBQVUsQ0FBQztRQUNqQyw0QkFBdUIsR0FBRyxRQUFRLENBQUM7UUFDcEMsMkJBQXNCLEdBQUcsUUFBUSxDQUFDO1FBQzdDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRS9DLHNCQUFpQixHQUFHO1lBQ25CLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsUUFBUSxFQUFFLGNBQWM7WUFDeEIsVUFBVSxFQUFFLFdBQVc7WUFDdkIsU0FBUyxFQUFFLGNBQWM7U0FDekIsQ0FBQztRQUVGLHNCQUFpQixHQUFHO1lBQ25CLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFVBQVUsRUFBRSxTQUFTO1NBQ3JCLENBQUM7UUFFRix1QkFBa0IsR0FBRztZQUNwQixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFVBQVUsRUFBRSxnQkFBZ0I7WUFDNUIsWUFBWSxFQUFFLHFCQUFxQjtZQUNuQyxXQUFXLEVBQUUsU0FBUztTQUN0QixDQUFDO1FBQ1Esc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2QyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRWpCLFFBQVEsS0FBSyxDQUFDOzs7WUEzQ2QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLDY2RkFBMEQ7O2FBRTFEOzs7OzsrQkFHQyxLQUFLLFNBQUMsb0JBQW9COytCQUMxQixLQUFLLFNBQUMsb0JBQW9CO2lDQUMxQixLQUFLLFNBQUMsc0JBQXNCO2dDQUM1QixLQUFLLFNBQUMscUJBQXFCO29DQUMzQixLQUFLLFNBQUMsMEJBQTBCO29DQUNoQyxLQUFLLFNBQUMsMEJBQTBCO3NDQUNoQyxLQUFLLFNBQUMsNEJBQTRCO3FDQUNsQyxLQUFLLFNBQUMsMkJBQTJCOzRCQUNqQyxLQUFLLFNBQUMsZ0JBQWdCO2dDQVF0QixLQUFLO2lDQU9MLEtBQUs7Z0NBT0wsTUFBTTtnQ0FDTixNQUFNO2tDQUNOLE1BQU07aUNBQ04sTUFBTTs7OztJQWpDUCwyREFBaUU7O0lBQ2pFLDJEQUFtRTs7SUFDbkUsNkRBQXVFOztJQUN2RSw0REFBcUU7O0lBQ3JFLGdFQUFxRTs7SUFDckUsZ0VBQXNFOztJQUN0RSxrRUFBd0U7O0lBQ3hFLGlFQUFzRTs7SUFDdEUsd0RBQStDOztJQUUvQyw0REFLRTs7SUFDRiw0REFNRTs7SUFDRiw2REFNRTs7SUFDRiw0REFBaUQ7O0lBQ2pELDREQUFpRDs7SUFDakQsOERBQW1EOztJQUNuRCw2REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1wcm9ncmVzcy1iYXItdHlwZS1vbmUuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VQcm9ncmVzc0JhclR5cGVPbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHRASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLW9uZScpIHByb2dyZXNzU3R5bGVPbmUgPSAncHJvZ3Jlc3NBY3RpdmUnO1xyXG5cdEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtdHdvJykgcHJvZ3Jlc3NTdHlsZVR3byA9ICdwcm9ncmVzc1VwY29taW5nJztcclxuXHRASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLXRocmVlJykgcHJvZ3Jlc3NTdHlsZVRocmVlID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xyXG5cdEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtZm91cicpIHByb2dyZXNzU3R5bGVGb3VyID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xyXG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctb25lLWNsYXNzJykgY3VzdG9tSGVhZGluZ09uZUNsYXNzID0gJ3AteHMtMCAnO1xyXG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctdHdvLWNsYXNzJykgY3VzdG9tSGVhZGluZ1R3b0NsYXNzID0gJyAgcC14cy0wJztcclxuXHRASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLXRocmVlLWNsYXNzJykgY3VzdG9tSGVhZGluZ1RocmVlQ2xhc3MgPSAncC14cy0wJztcclxuXHRASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLWZvdXItY2xhc3MnKSBjdXN0b21IZWFkaW5nRm91ckNsYXNzID0gJ3AteHMtMCc7XHJcblx0QElucHV0KCdlbmFibGUtcG9pbnRlcicpIGVuYWJsZVBvaW50ZXIgPSBmYWxzZTtcclxuXHJcblx0cHJvZ3Jlc3NCYXJMYWJlbHMgPSB7XHJcblx0XHRsYWJlbE9uZTogJ1JFVFJJRVZFIENPTVBBTlkgREFUQScsXHJcblx0XHRsYWJlbFR3bzogJ0NPTVBBTlkgSU5GTycsXHJcblx0XHRsYWJlbFRocmVlOiAnTElDRU5TSU5HJyxcclxuXHRcdGxhYmVsRm91cjogJ0NPTkZJUk1BVElPTidcclxuXHR9O1xyXG5cdEBJbnB1dCgpXHJcblx0cHJvZ3Jlc3NCYXJJY29uSWQgPSB7XHJcblx0XHRJY29uT25lSWQ6ICdsaXN0aW5nRGV0YWlscycsXHJcblx0XHRJY29uVHdvSWQ6ICdwcm9kdWN0RGV0YWlscycsXHJcblx0XHRJY29uVGhyZWVJZDogJ3Byb2R1Y3RUcmFjZWFiaWxpdHknLFxyXG5cdFx0SWNvbkZvdXJJZDogJ2NvbmZpcm0nXHJcblx0fTtcclxuXHRASW5wdXQoKVxyXG5cdHByb2dyZXNzQmFyVGl0bGVJZCA9IHtcclxuXHRcdGxhYmVsT25lSWQ6ICdsaXN0aW5nRGV0YWlscycsXHJcblx0XHRsYWJlbFR3b0lkOiAncHJvZHVjdERldGFpbHMnLFxyXG5cdFx0bGFiZWxUaHJlZUlkOiAncHJvZHVjdFRyYWNlYWJpbGl0eScsXHJcblx0XHRsYWJlbEZvdXJJZDogJ2NvbmZpcm0nXHJcblx0fTtcclxuXHRAT3V0cHV0KCkgcHJvZ3Jlc3NPbmVBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIHByb2dyZXNzVHdvQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBwcm9ncmVzc1RocmVlQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBwcm9ncmVzc0ZvdXJBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0Y29uc3RydWN0b3IoKSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7IH1cclxufVxyXG4iXX0=