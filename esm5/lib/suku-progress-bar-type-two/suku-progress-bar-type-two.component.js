/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-progress-bar-type-two/suku-progress-bar-type-two.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXItdHlwZS10d28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdHdvL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdHdvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0U7SUFpREM7UUEzQzZCLHFCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3BDLHFCQUFnQixHQUFHLGtCQUFrQixDQUFDO1FBQ3BDLHVCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQ3pDLHNCQUFpQixHQUFHLGtCQUFrQixDQUFDO1FBQ3ZDLHNCQUFpQixHQUFHLGtCQUFrQixDQUFDO1FBQ2xDLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUMzQiwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDekIsNEJBQXVCLEdBQUcsRUFBRSxDQUFDO1FBQzlCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUM1QiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDdkMsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHL0Msc0JBQWlCLEdBQUc7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFVBQVUsRUFBRSxzQkFBc0I7WUFDbEMsU0FBUyxFQUFFLGVBQWU7WUFDMUIsU0FBUyxFQUFFLFNBQVM7U0FDcEIsQ0FBQztRQUdGLHNCQUFpQixHQUFHO1lBQ25CLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFVBQVUsRUFBRSxhQUFhO1lBQ3pCLFVBQVUsRUFBRSxTQUFTO1NBQ3JCLENBQUM7UUFHRix1QkFBa0IsR0FBRztZQUNwQixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFVBQVUsRUFBRSxnQkFBZ0I7WUFDNUIsWUFBWSxFQUFFLHFCQUFxQjtZQUNuQyxXQUFXLEVBQUUsYUFBYTtZQUMxQixXQUFXLEVBQUUsU0FBUztTQUN0QixDQUFDO1FBQ1Esc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2QyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4Qyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFakIsa0RBQVE7OztJQUFSLGNBQWEsQ0FBQzs7Z0JBbkRkLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsNEJBQTRCO29CQUN0Qyx1aUhBQTBEOztpQkFFMUQ7Ozs7O21DQUVDLEtBQUssU0FBQyxvQkFBb0I7bUNBQzFCLEtBQUssU0FBQyxvQkFBb0I7cUNBQzFCLEtBQUssU0FBQyxzQkFBc0I7b0NBQzVCLEtBQUssU0FBQyxxQkFBcUI7b0NBQzNCLEtBQUssU0FBQyxxQkFBcUI7d0NBQzNCLEtBQUssU0FBQywwQkFBMEI7d0NBQ2hDLEtBQUssU0FBQywwQkFBMEI7MENBQ2hDLEtBQUssU0FBQyw0QkFBNEI7eUNBQ2xDLEtBQUssU0FBQywyQkFBMkI7eUNBQ2pDLEtBQUssU0FBQywyQkFBMkI7Z0NBQ2pDLEtBQUssU0FBQyxnQkFBZ0I7b0NBRXRCLEtBQUs7b0NBU0wsS0FBSztxQ0FTTCxLQUFLO29DQVFMLE1BQU07b0NBQ04sTUFBTTtzQ0FDTixNQUFNO3FDQUNOLE1BQU07cUNBQ04sTUFBTTs7SUFJUixzQ0FBQztDQUFBLEFBcERELElBb0RDO1NBL0NZLCtCQUErQjs7O0lBQzNDLDJEQUFpRTs7SUFDakUsMkRBQW1FOztJQUNuRSw2REFBdUU7O0lBQ3ZFLDREQUFxRTs7SUFDckUsNERBQXFFOztJQUNyRSxnRUFBOEQ7O0lBQzlELGdFQUE4RDs7SUFDOUQsa0VBQWtFOztJQUNsRSxpRUFBZ0U7O0lBQ2hFLGlFQUFnRTs7SUFDaEUsd0RBQStDOztJQUUvQyw0REFPRTs7SUFFRiw0REFPRTs7SUFFRiw2REFPRTs7SUFDRiw0REFBaUQ7O0lBQ2pELDREQUFpRDs7SUFDakQsOERBQW1EOztJQUNuRCw2REFBa0Q7O0lBQ2xELDZEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1wcm9ncmVzcy1iYXItdHlwZS10d28nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1wcm9ncmVzcy1iYXItdHlwZS10d28uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LXByb2dyZXNzLWJhci10eXBlLXR3by5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VQcm9ncmVzc0JhclR5cGVUd29Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLW9uZScpIHByb2dyZXNzU3R5bGVPbmUgPSAncHJvZ3Jlc3NBY3RpdmUnO1xuXHRASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLXR3bycpIHByb2dyZXNzU3R5bGVUd28gPSAncHJvZ3Jlc3NVcGNvbWluZyc7XG5cdEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtdGhyZWUnKSBwcm9ncmVzc1N0eWxlVGhyZWUgPSAncHJvZ3Jlc3NVcGNvbWluZyc7XG5cdEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtZm91cicpIHByb2dyZXNzU3R5bGVGb3VyID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xuXHRASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLWZpdmUnKSBwcm9ncmVzc1N0eWxlRml2ZSA9ICdwcm9ncmVzc1VwY29taW5nJztcblx0QElucHV0KCdjdXN0b20taGVhZGluZy1vbmUtY2xhc3MnKSBjdXN0b21IZWFkaW5nT25lQ2xhc3MgPSAnJztcblx0QElucHV0KCdjdXN0b20taGVhZGluZy10d28tY2xhc3MnKSBjdXN0b21IZWFkaW5nVHdvQ2xhc3MgPSAnJztcblx0QElucHV0KCdjdXN0b20taGVhZGluZy10aHJlZS1jbGFzcycpIGN1c3RvbUhlYWRpbmdUaHJlZUNsYXNzID0gJyc7XG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctZm91ci1jbGFzcycpIGN1c3RvbUhlYWRpbmdGb3VyQ2xhc3MgPSAnJztcblx0QElucHV0KCdjdXN0b20taGVhZGluZy1maXZlLWNsYXNzJykgY3VzdG9tSGVhZGluZ0ZpdmVDbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2VuYWJsZS1wb2ludGVyJykgZW5hYmxlUG9pbnRlciA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpXG5cdHByb2dyZXNzQmFyTGFiZWxzID0ge1xuXHRcdGxhYmVsT25lOiAnTElTVElORyBERVRBSUxTJyxcblx0XHRsYWJlbFR3bzogJ1BST0RVQ1QgREVUQUlMUycsXG5cdFx0bGFiZWxUaHJlZTogJ1BST0RVQ1QgVFJBQ0VBQklMSVRZJyxcblx0XHRsYWJlbEZvdXI6ICdURVJNUyBPRiBTQUxFJyxcblx0XHRsYWJlbEZpdmU6ICdDT05GSVJNJ1xuXHR9O1xuXG5cdEBJbnB1dCgpXG5cdHByb2dyZXNzQmFySWNvbklkID0ge1xuXHRcdEljb25PbmVJZDogJ2xpc3RpbmdEZXRhaWxzJyxcblx0XHRJY29uVHdvSWQ6ICdwcm9kdWN0RGV0YWlscycsXG5cdFx0SWNvblRocmVlSWQ6ICdwcm9kdWN0VHJhY2VhYmlsaXR5Jyxcblx0XHRJY29uRm91cklkOiAndGVybXNPZlNhbGUnLFxuXHRcdEljb25GaXZlSWQ6ICdjb25maXJtJ1xuXHR9O1xuXG5cdEBJbnB1dCgpXG5cdHByb2dyZXNzQmFyVGl0bGVJZCA9IHtcblx0XHRsYWJlbE9uZUlkOiAnbGlzdGluZ0RldGFpbHMnLFxuXHRcdGxhYmVsVHdvSWQ6ICdwcm9kdWN0RGV0YWlscycsXG5cdFx0bGFiZWxUaHJlZUlkOiAncHJvZHVjdFRyYWNlYWJpbGl0eScsXG5cdFx0bGFiZWxGb3VySWQ6ICd0ZXJtc09mU2FsZScsXG5cdFx0bGFiZWxGaXZlSWQ6ICdjb25maXJtJ1xuXHR9O1xuXHRAT3V0cHV0KCkgcHJvZ3Jlc3NPbmVBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwcm9ncmVzc1R3b0FjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHByb2dyZXNzVGhyZWVBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwcm9ncmVzc0ZvdXJBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwcm9ncmVzc0ZpdmVBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7IH1cbn1cbiJdfQ==