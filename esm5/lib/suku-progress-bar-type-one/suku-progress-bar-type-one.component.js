/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-progress-bar-type-one/suku-progress-bar-type-one.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuProgressBarTypeOneComponent = /** @class */ (function () {
    function SukuProgressBarTypeOneComponent() {
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
    SukuProgressBarTypeOneComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuProgressBarTypeOneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-progress-bar-type-one',
                    template: "<table class=\"col-sm-10 offset-sm-1\">\n  <tr class=\"pt-3\">\n    <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\"\n      (click)=\"progressOneAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\"\n      (click)=\"progressTwoAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\"\n      (click)=\"progressThreeAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\"\n      (click)=\"progressFourAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\n    </td>\n  </tr>\n</table>\n<table class=\"col-sm-12 text-center mt-2\">\n  <tr id=\"txt\" class=\"pt-3\">\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelOneId}}\">\n      <span class=\"{{customHeadingOneClass}}\" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressOneAction.emit()\">{{progressBarLabels?.labelOne}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelTwoId}}\">\n      <span class=\"{{customHeadingTwoClass}} \" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressTwoAction.emit()\">{{progressBarLabels?.labelTwo}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelThreeId}}\">\n      <span class=\"{{customHeadingThreeClass}} \" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressThreeAction.emit()\">{{progressBarLabels?.labelThree}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFourId}}\">\n      <span class=\" {{customHeadingFourClass}} \" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressFourAction.emit()\">{{progressBarLabels?.labelFour}}</span>\n    </td>\n  </tr>\n</table>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);.progressActive{width:50px!important;height:50px;color:#fff;background:#a7bf2e;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressTitle{font-family:\"Encode Sans\",sans-serif!important;font-size:12px!important;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.progress-bar-active{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.circleP{background-color:gray;width:50px!important;height:50px!important;border-radius:50%!important}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:15%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.text-bold{color:#000!important;font-weight:700!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center}.checkmark{display:inline-block}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid #d8fc40;border-width:0 3px 3px 0;transform:rotate(45deg)}.c-pointer :hover{cursor:pointer}hr{margin-top:1rem!important;margin-bottom:1rem!important;border:0!important;border-top:1px solid #979797!important;opacity:.2!important}.pr-6{padding-right:5rem}.pl-6{padding-left:4.8rem}@media only screen and (max-width:990px){.progressTitle{font-size:8px!important}.p-xs-0{padding:0!important}}"]
                }] }
    ];
    /** @nocollapse */
    SukuProgressBarTypeOneComponent.ctorParameters = function () { return []; };
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
    return SukuProgressBarTypeOneComponent;
}());
export { SukuProgressBarTypeOneComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXItdHlwZS1vbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0U7SUF5Q0M7UUFsQzZCLHFCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3BDLHFCQUFnQixHQUFHLGtCQUFrQixDQUFDO1FBQ3BDLHVCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQ3pDLHNCQUFpQixHQUFHLGtCQUFrQixDQUFDO1FBQ2xDLDBCQUFxQixHQUFHLFNBQVMsQ0FBQztRQUNsQywwQkFBcUIsR0FBRyxVQUFVLENBQUM7UUFDakMsNEJBQXVCLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLDJCQUFzQixHQUFHLFFBQVEsQ0FBQztRQUM3QyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUUvQyxzQkFBaUIsR0FBRztZQUNuQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLFNBQVMsRUFBRSxjQUFjO1NBQ3pCLENBQUM7UUFFRixzQkFBaUIsR0FBRztZQUNuQixTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxVQUFVLEVBQUUsU0FBUztTQUNyQixDQUFDO1FBRUYsdUJBQWtCLEdBQUc7WUFDcEIsVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFlBQVksRUFBRSxxQkFBcUI7WUFDbkMsV0FBVyxFQUFFLFNBQVM7U0FDdEIsQ0FBQztRQUNRLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2Qyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pDLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVqQixrREFBUTs7O0lBQVIsY0FBYSxDQUFDOztnQkEzQ2QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLHEwRkFBMEQ7O2lCQUUxRDs7Ozs7bUNBR0MsS0FBSyxTQUFDLG9CQUFvQjttQ0FDMUIsS0FBSyxTQUFDLG9CQUFvQjtxQ0FDMUIsS0FBSyxTQUFDLHNCQUFzQjtvQ0FDNUIsS0FBSyxTQUFDLHFCQUFxQjt3Q0FDM0IsS0FBSyxTQUFDLDBCQUEwQjt3Q0FDaEMsS0FBSyxTQUFDLDBCQUEwQjswQ0FDaEMsS0FBSyxTQUFDLDRCQUE0Qjt5Q0FDbEMsS0FBSyxTQUFDLDJCQUEyQjtnQ0FDakMsS0FBSyxTQUFDLGdCQUFnQjtvQ0FRdEIsS0FBSztxQ0FPTCxLQUFLO29DQU9MLE1BQU07b0NBQ04sTUFBTTtzQ0FDTixNQUFNO3FDQUNOLE1BQU07O0lBSVIsc0NBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQXZDWSwrQkFBK0I7OztJQUUzQywyREFBaUU7O0lBQ2pFLDJEQUFtRTs7SUFDbkUsNkRBQXVFOztJQUN2RSw0REFBcUU7O0lBQ3JFLGdFQUFxRTs7SUFDckUsZ0VBQXNFOztJQUN0RSxrRUFBd0U7O0lBQ3hFLGlFQUFzRTs7SUFDdEUsd0RBQStDOztJQUUvQyw0REFLRTs7SUFDRiw0REFNRTs7SUFDRiw2REFNRTs7SUFDRiw0REFBaUQ7O0lBQ2pELDREQUFpRDs7SUFDakQsOERBQW1EOztJQUNuRCw2REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1wcm9ncmVzcy1iYXItdHlwZS1vbmUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1UHJvZ3Jlc3NCYXJUeXBlT25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLW9uZScpIHByb2dyZXNzU3R5bGVPbmUgPSAncHJvZ3Jlc3NBY3RpdmUnO1xuXHRASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLXR3bycpIHByb2dyZXNzU3R5bGVUd28gPSAncHJvZ3Jlc3NVcGNvbWluZyc7XG5cdEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtdGhyZWUnKSBwcm9ncmVzc1N0eWxlVGhyZWUgPSAncHJvZ3Jlc3NVcGNvbWluZyc7XG5cdEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtZm91cicpIHByb2dyZXNzU3R5bGVGb3VyID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xuXHRASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLW9uZS1jbGFzcycpIGN1c3RvbUhlYWRpbmdPbmVDbGFzcyA9ICdwLXhzLTAgJztcblx0QElucHV0KCdjdXN0b20taGVhZGluZy10d28tY2xhc3MnKSBjdXN0b21IZWFkaW5nVHdvQ2xhc3MgPSAnICBwLXhzLTAnO1xuXHRASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLXRocmVlLWNsYXNzJykgY3VzdG9tSGVhZGluZ1RocmVlQ2xhc3MgPSAncC14cy0wJztcblx0QElucHV0KCdjdXN0b20taGVhZGluZy1mb3VyLWNsYXNzJykgY3VzdG9tSGVhZGluZ0ZvdXJDbGFzcyA9ICdwLXhzLTAnO1xuXHRASW5wdXQoJ2VuYWJsZS1wb2ludGVyJykgZW5hYmxlUG9pbnRlciA9IGZhbHNlO1xuXG5cdHByb2dyZXNzQmFyTGFiZWxzID0ge1xuXHRcdGxhYmVsT25lOiAnUkVUUklFVkUgQ09NUEFOWSBEQVRBJyxcblx0XHRsYWJlbFR3bzogJ0NPTVBBTlkgSU5GTycsXG5cdFx0bGFiZWxUaHJlZTogJ0xJQ0VOU0lORycsXG5cdFx0bGFiZWxGb3VyOiAnQ09ORklSTUFUSU9OJ1xuXHR9O1xuXHRASW5wdXQoKVxuXHRwcm9ncmVzc0Jhckljb25JZCA9IHtcblx0XHRJY29uT25lSWQ6ICdsaXN0aW5nRGV0YWlscycsXG5cdFx0SWNvblR3b0lkOiAncHJvZHVjdERldGFpbHMnLFxuXHRcdEljb25UaHJlZUlkOiAncHJvZHVjdFRyYWNlYWJpbGl0eScsXG5cdFx0SWNvbkZvdXJJZDogJ2NvbmZpcm0nXG5cdH07XG5cdEBJbnB1dCgpXG5cdHByb2dyZXNzQmFyVGl0bGVJZCA9IHtcblx0XHRsYWJlbE9uZUlkOiAnbGlzdGluZ0RldGFpbHMnLFxuXHRcdGxhYmVsVHdvSWQ6ICdwcm9kdWN0RGV0YWlscycsXG5cdFx0bGFiZWxUaHJlZUlkOiAncHJvZHVjdFRyYWNlYWJpbGl0eScsXG5cdFx0bGFiZWxGb3VySWQ6ICdjb25maXJtJ1xuXHR9O1xuXHRAT3V0cHV0KCkgcHJvZ3Jlc3NPbmVBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwcm9ncmVzc1R3b0FjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHByb2dyZXNzVGhyZWVBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwcm9ncmVzc0ZvdXJBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7IH1cbn1cbiJdfQ==