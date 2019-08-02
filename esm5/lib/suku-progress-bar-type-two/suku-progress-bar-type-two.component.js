/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuProgressBarTypeTwoComponent = /** @class */ (function () {
    function SukuProgressBarTypeTwoComponent() {
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
        this.enablePointer = false;
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
    SukuProgressBarTypeTwoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuProgressBarTypeTwoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-progress-bar-type-two',
                    template: "<table class=\"col-sm-10 offset-sm-1\">\n  <tr class=\"pt-3\">\n    <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\"\n      (click)=\"progressOneAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\"\n      (click)=\"progressTwoAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\"\n      (click)=\"progressThreeAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\"\n      (click)=\"progressFourAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFive}} text-center\" id=\"{{progressBarIconId?.IconFiveId}}\"\n      (click)=\"progressFiveAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleFive == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFive == 'progressCompleted')\">5</span>\n    </td>\n  </tr>\n</table>\n<table class=\"col-sm-12 text-center mt-2\">\n  <tr id=\"txt\" class=\"pt-3\">\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelOneId}}\">\n      <span class=\"pl-4 p-xs-0 {{customHeadingOneClass}}\" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressOneAction.emit()\">{{progressBarLabels?.labelOne}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelTwoId}}\">\n      <span class=\"{{customHeadingTwoClass}} pl-4 p-xs-0\" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressTwoAction.emit()\">{{progressBarLabels?.labelTwo}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelThreeId}}\">\n      <span class=\"{{customHeadingThreeClass}} p-xs-0\" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressThreeAction.emit()\">{{progressBarLabels?.labelThree}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFourId}}\">\n      <span class=\"pr-3 {{customHeadingFourClass}} p-xs-0\" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressFourAction.emit()\">{{progressBarLabels?.labelFour}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFiveId}}\">\n      <span class=\"pr-4 {{customHeadingFiveClass}} p-xs-0\" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressFiveAction.emit()\">{{progressBarLabels?.labelFive}}</span>\n    </td>\n  </tr>\n</table>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);.progressActive{width:50px!important;height:50px;color:#fff;background:#a7bf2e;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressTitle{font-family:\"Encode Sans\",sans-serif!important;font-size:12px!important;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.progress-bar-active{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.circleP{background-color:gray;width:50px!important;height:50px!important;border-radius:50%!important}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:20%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.text-bold{color:#000!important;font-weight:700!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center}.checkmark{display:inline-block}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid #d8fc40;border-width:0 3px 3px 0;transform:rotate(45deg)}.c-pointer :hover{cursor:pointer}hr{margin-top:1rem!important;margin-bottom:1rem!important;border:0!important;border-top:1px solid #979797!important;opacity:.2!important}.pr-6{padding-right:5rem}.pl-6{padding-left:4.8rem}@media only screen and (max-width:990px){.progressTitle{font-size:8px!important}.p-xs-0{padding:0!important}}"]
                }] }
    ];
    /** @nocollapse */
    SukuProgressBarTypeTwoComponent.ctorParameters = function () { return []; };
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
        enablePointer: [{ type: Input, args: ['enable-pointer',] }],
        progressBarLabels: [{ type: Input }],
        progressBarIconId: [{ type: Input }],
        progressBarTitleId: [{ type: Input }],
        progressOneAction: [{ type: Output }],
        progressTwoAction: [{ type: Output }],
        progressThreeAction: [{ type: Output }],
        progressFourAction: [{ type: Output }],
        progressFiveAction: [{ type: Output }]
    };
    return SukuProgressBarTypeTwoComponent;
}());
export { SukuProgressBarTypeTwoComponent };
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
    SukuProgressBarTypeTwoComponent.prototype.enablePointer;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXItdHlwZS10d28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdHdvL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdHdvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWlEQztRQTNDNkIscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDcEMscUJBQWdCLEdBQUcsa0JBQWtCLENBQUM7UUFDcEMsdUJBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDekMsc0JBQWlCLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcsa0JBQWtCLENBQUM7UUFDbEMsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUN6Qiw0QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFDOUIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUN2QyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUcvQyxzQkFBaUIsR0FBRztZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsVUFBVSxFQUFFLHNCQUFzQjtZQUNsQyxTQUFTLEVBQUUsZUFBZTtZQUMxQixTQUFTLEVBQUUsU0FBUztTQUNwQixDQUFDO1FBR0Ysc0JBQWlCLEdBQUc7WUFDbkIsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsVUFBVSxFQUFFLGFBQWE7WUFDekIsVUFBVSxFQUFFLFNBQVM7U0FDckIsQ0FBQztRQUdGLHVCQUFrQixHQUFHO1lBQ3BCLFVBQVUsRUFBRSxnQkFBZ0I7WUFDNUIsVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixZQUFZLEVBQUUscUJBQXFCO1lBQ25DLFdBQVcsRUFBRSxhQUFhO1lBQzFCLFdBQVcsRUFBRSxTQUFTO1NBQ3RCLENBQUM7UUFDUSxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6Qyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVqQixrREFBUTs7O0lBQVIsY0FBYSxDQUFDOztnQkFuRGQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLHVpSEFBMEQ7O2lCQUUxRDs7Ozs7bUNBRUMsS0FBSyxTQUFDLG9CQUFvQjttQ0FDMUIsS0FBSyxTQUFDLG9CQUFvQjtxQ0FDMUIsS0FBSyxTQUFDLHNCQUFzQjtvQ0FDNUIsS0FBSyxTQUFDLHFCQUFxQjtvQ0FDM0IsS0FBSyxTQUFDLHFCQUFxQjt3Q0FDM0IsS0FBSyxTQUFDLDBCQUEwQjt3Q0FDaEMsS0FBSyxTQUFDLDBCQUEwQjswQ0FDaEMsS0FBSyxTQUFDLDRCQUE0Qjt5Q0FDbEMsS0FBSyxTQUFDLDJCQUEyQjt5Q0FDakMsS0FBSyxTQUFDLDJCQUEyQjtnQ0FDakMsS0FBSyxTQUFDLGdCQUFnQjtvQ0FFdEIsS0FBSztvQ0FTTCxLQUFLO3FDQVNMLEtBQUs7b0NBUUwsTUFBTTtvQ0FDTixNQUFNO3NDQUNOLE1BQU07cUNBQ04sTUFBTTtxQ0FDTixNQUFNOztJQUlSLHNDQUFDO0NBQUEsQUFwREQsSUFvREM7U0EvQ1ksK0JBQStCOzs7SUFDM0MsMkRBQWlFOztJQUNqRSwyREFBbUU7O0lBQ25FLDZEQUF1RTs7SUFDdkUsNERBQXFFOztJQUNyRSw0REFBcUU7O0lBQ3JFLGdFQUE4RDs7SUFDOUQsZ0VBQThEOztJQUM5RCxrRUFBa0U7O0lBQ2xFLGlFQUFnRTs7SUFDaEUsaUVBQWdFOztJQUNoRSx3REFBK0M7O0lBRS9DLDREQU9FOztJQUVGLDREQU9FOztJQUVGLDZEQU9FOztJQUNGLDREQUFpRDs7SUFDakQsNERBQWlEOztJQUNqRCw4REFBbUQ7O0lBQ25ELDZEQUFrRDs7SUFDbEQsNkRBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LXByb2dyZXNzLWJhci10eXBlLXR3bycsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXByb2dyZXNzLWJhci10eXBlLXR3by5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdHdvLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVByb2dyZXNzQmFyVHlwZVR3b0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtb25lJykgcHJvZ3Jlc3NTdHlsZU9uZSA9ICdwcm9ncmVzc0FjdGl2ZSc7XG5cdEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtdHdvJykgcHJvZ3Jlc3NTdHlsZVR3byA9ICdwcm9ncmVzc1VwY29taW5nJztcblx0QElucHV0KCdwcm9ncmVzcy1zdHlsZS10aHJlZScpIHByb2dyZXNzU3R5bGVUaHJlZSA9ICdwcm9ncmVzc1VwY29taW5nJztcblx0QElucHV0KCdwcm9ncmVzcy1zdHlsZS1mb3VyJykgcHJvZ3Jlc3NTdHlsZUZvdXIgPSAncHJvZ3Jlc3NVcGNvbWluZyc7XG5cdEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtZml2ZScpIHByb2dyZXNzU3R5bGVGaXZlID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xuXHRASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLW9uZS1jbGFzcycpIGN1c3RvbUhlYWRpbmdPbmVDbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLXR3by1jbGFzcycpIGN1c3RvbUhlYWRpbmdUd29DbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLXRocmVlLWNsYXNzJykgY3VzdG9tSGVhZGluZ1RocmVlQ2xhc3MgPSAnJztcblx0QElucHV0KCdjdXN0b20taGVhZGluZy1mb3VyLWNsYXNzJykgY3VzdG9tSGVhZGluZ0ZvdXJDbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLWZpdmUtY2xhc3MnKSBjdXN0b21IZWFkaW5nRml2ZUNsYXNzID0gJyc7XG5cdEBJbnB1dCgnZW5hYmxlLXBvaW50ZXInKSBlbmFibGVQb2ludGVyID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0cHJvZ3Jlc3NCYXJMYWJlbHMgPSB7XG5cdFx0bGFiZWxPbmU6ICdMSVNUSU5HIERFVEFJTFMnLFxuXHRcdGxhYmVsVHdvOiAnUFJPRFVDVCBERVRBSUxTJyxcblx0XHRsYWJlbFRocmVlOiAnUFJPRFVDVCBUUkFDRUFCSUxJVFknLFxuXHRcdGxhYmVsRm91cjogJ1RFUk1TIE9GIFNBTEUnLFxuXHRcdGxhYmVsRml2ZTogJ0NPTkZJUk0nXG5cdH07XG5cblx0QElucHV0KClcblx0cHJvZ3Jlc3NCYXJJY29uSWQgPSB7XG5cdFx0SWNvbk9uZUlkOiAnbGlzdGluZ0RldGFpbHMnLFxuXHRcdEljb25Ud29JZDogJ3Byb2R1Y3REZXRhaWxzJyxcblx0XHRJY29uVGhyZWVJZDogJ3Byb2R1Y3RUcmFjZWFiaWxpdHknLFxuXHRcdEljb25Gb3VySWQ6ICd0ZXJtc09mU2FsZScsXG5cdFx0SWNvbkZpdmVJZDogJ2NvbmZpcm0nXG5cdH07XG5cblx0QElucHV0KClcblx0cHJvZ3Jlc3NCYXJUaXRsZUlkID0ge1xuXHRcdGxhYmVsT25lSWQ6ICdsaXN0aW5nRGV0YWlscycsXG5cdFx0bGFiZWxUd29JZDogJ3Byb2R1Y3REZXRhaWxzJyxcblx0XHRsYWJlbFRocmVlSWQ6ICdwcm9kdWN0VHJhY2VhYmlsaXR5Jyxcblx0XHRsYWJlbEZvdXJJZDogJ3Rlcm1zT2ZTYWxlJyxcblx0XHRsYWJlbEZpdmVJZDogJ2NvbmZpcm0nXG5cdH07XG5cdEBPdXRwdXQoKSBwcm9ncmVzc09uZUFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHByb2dyZXNzVHdvQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgcHJvZ3Jlc3NUaHJlZUFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHByb2dyZXNzRm91ckFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHByb2dyZXNzRml2ZUFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgfVxufVxuIl19