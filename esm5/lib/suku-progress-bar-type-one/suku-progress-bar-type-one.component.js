/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuProgressBarTypeOneComponent = /** @class */ (function () {
    function SukuProgressBarTypeOneComponent() {
        this.progressStyleOne = 'progressActive';
        this.progressStyleTwo = 'progressUpcoming';
        this.progressStyleThree = 'progressUpcoming';
        this.progressStyleFour = 'progressUpcoming';
        this.customHeadingOneClass = '';
        this.customHeadingTwoClass = '';
        this.customHeadingThreeClass = '';
        this.customHeadingFourClass = '';
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
                    template: "<table class=\"col-sm-10 offset-sm-1\">\n  <tr class=\"pt-3\">\n    <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\"\n      (click)=\"progressOneAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\"\n      (click)=\"progressTwoAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\"\n      (click)=\"progressThreeAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\"\n      (click)=\"progressFourAction.emit()\" [ngClass]=\"{'c-pointer': enablePointer}\">\n      <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\n    </td>\n  </tr>\n</table>\n<table class=\"col-sm-12 text-center mt-2\">\n  <tr id=\"txt\" class=\"pt-3\">\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelOneId}}\">\n      <span class=\"pl-4 p-xs-0 {{customHeadingOneClass}}\" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressOneAction.emit()\">{{progressBarLabels?.labelOne}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelTwoId}}\">\n      <span class=\"{{customHeadingTwoClass}} pl-4 p-xs-0\" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressTwoAction.emit()\">{{progressBarLabels?.labelTwo}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelThreeId}}\">\n      <span class=\"{{customHeadingThreeClass}} p-xs-0\" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressThreeAction.emit()\">{{progressBarLabels?.labelThree}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFourId}}\">\n      <span class=\"pr-3 {{customHeadingFourClass}} p-xs-0\" [ngClass]=\"{'c-pointer': enablePointer}\"\n        (click)=\"progressFourAction.emit()\">{{progressBarLabels?.labelFour}}</span>\n    </td>\n  </tr>\n</table>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);.progressActive{width:50px!important;height:50px;color:#fff;background:#a7bf2e;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressTitle{font-family:\"Encode Sans\",sans-serif!important;font-size:12px!important;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.progress-bar-active{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.circleP{background-color:gray;width:50px!important;height:50px!important;border-radius:50%!important}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:20%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.text-bold{color:#000!important;font-weight:700!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center}.checkmark{display:inline-block}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid #d8fc40;border-width:0 3px 3px 0;transform:rotate(45deg)}.c-pointer :hover{cursor:pointer}hr{margin-top:1rem!important;margin-bottom:1rem!important;border:0!important;border-top:1px solid #979797!important;opacity:.2!important}.pr-6{padding-right:5rem}.pl-6{padding-left:4.8rem}@media only screen and (max-width:990px){.progressTitle{font-size:8px!important}.p-xs-0{padding:0!important}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXItdHlwZS1vbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQXlDQztRQWxDNkIscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDcEMscUJBQWdCLEdBQUcsa0JBQWtCLENBQUM7UUFDcEMsdUJBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDekMsc0JBQWlCLEdBQUcsa0JBQWtCLENBQUM7UUFDbEMsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUN6Qiw0QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFDOUIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRS9DLHNCQUFpQixHQUFHO1lBQ25CLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsUUFBUSxFQUFFLGNBQWM7WUFDeEIsVUFBVSxFQUFFLFdBQVc7WUFDdkIsU0FBUyxFQUFFLGNBQWM7U0FDekIsQ0FBQztRQUVGLHNCQUFpQixHQUFHO1lBQ25CLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFVBQVUsRUFBRSxTQUFTO1NBQ3JCLENBQUM7UUFFRix1QkFBa0IsR0FBRztZQUNwQixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFVBQVUsRUFBRSxnQkFBZ0I7WUFDNUIsWUFBWSxFQUFFLHFCQUFxQjtZQUNuQyxXQUFXLEVBQUUsU0FBUztTQUN0QixDQUFDO1FBQ1Esc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2QyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRWpCLGtEQUFROzs7SUFBUixjQUFhLENBQUM7O2dCQTNDZCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsNDJGQUEwRDs7aUJBRTFEOzs7OzttQ0FHQyxLQUFLLFNBQUMsb0JBQW9CO21DQUMxQixLQUFLLFNBQUMsb0JBQW9CO3FDQUMxQixLQUFLLFNBQUMsc0JBQXNCO29DQUM1QixLQUFLLFNBQUMscUJBQXFCO3dDQUMzQixLQUFLLFNBQUMsMEJBQTBCO3dDQUNoQyxLQUFLLFNBQUMsMEJBQTBCOzBDQUNoQyxLQUFLLFNBQUMsNEJBQTRCO3lDQUNsQyxLQUFLLFNBQUMsMkJBQTJCO2dDQUNqQyxLQUFLLFNBQUMsZ0JBQWdCO29DQVF0QixLQUFLO3FDQU9MLEtBQUs7b0NBT0wsTUFBTTtvQ0FDTixNQUFNO3NDQUNOLE1BQU07cUNBQ04sTUFBTTs7SUFJUixzQ0FBQztDQUFBLEFBNUNELElBNENDO1NBdkNZLCtCQUErQjs7O0lBRTNDLDJEQUFpRTs7SUFDakUsMkRBQW1FOztJQUNuRSw2REFBdUU7O0lBQ3ZFLDREQUFxRTs7SUFDckUsZ0VBQThEOztJQUM5RCxnRUFBOEQ7O0lBQzlELGtFQUFrRTs7SUFDbEUsaUVBQWdFOztJQUNoRSx3REFBK0M7O0lBRS9DLDREQUtFOztJQUNGLDREQU1FOztJQUNGLDZEQU1FOztJQUNGLDREQUFpRDs7SUFDakQsNERBQWlEOztJQUNqRCw4REFBbUQ7O0lBQ25ELDZEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1wcm9ncmVzcy1iYXItdHlwZS1vbmUnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1wcm9ncmVzcy1iYXItdHlwZS1vbmUuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LXByb2dyZXNzLWJhci10eXBlLW9uZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VQcm9ncmVzc0JhclR5cGVPbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtb25lJykgcHJvZ3Jlc3NTdHlsZU9uZSA9ICdwcm9ncmVzc0FjdGl2ZSc7XG5cdEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtdHdvJykgcHJvZ3Jlc3NTdHlsZVR3byA9ICdwcm9ncmVzc1VwY29taW5nJztcblx0QElucHV0KCdwcm9ncmVzcy1zdHlsZS10aHJlZScpIHByb2dyZXNzU3R5bGVUaHJlZSA9ICdwcm9ncmVzc1VwY29taW5nJztcblx0QElucHV0KCdwcm9ncmVzcy1zdHlsZS1mb3VyJykgcHJvZ3Jlc3NTdHlsZUZvdXIgPSAncHJvZ3Jlc3NVcGNvbWluZyc7XG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctb25lLWNsYXNzJykgY3VzdG9tSGVhZGluZ09uZUNsYXNzID0gJyc7XG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctdHdvLWNsYXNzJykgY3VzdG9tSGVhZGluZ1R3b0NsYXNzID0gJyc7XG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctdGhyZWUtY2xhc3MnKSBjdXN0b21IZWFkaW5nVGhyZWVDbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLWZvdXItY2xhc3MnKSBjdXN0b21IZWFkaW5nRm91ckNsYXNzID0gJyc7XG5cdEBJbnB1dCgnZW5hYmxlLXBvaW50ZXInKSBlbmFibGVQb2ludGVyID0gZmFsc2U7XG5cblx0cHJvZ3Jlc3NCYXJMYWJlbHMgPSB7XG5cdFx0bGFiZWxPbmU6ICdSRVRSSUVWRSBDT01QQU5ZIERBVEEnLFxuXHRcdGxhYmVsVHdvOiAnQ09NUEFOWSBJTkZPJyxcblx0XHRsYWJlbFRocmVlOiAnTElDRU5TSU5HJyxcblx0XHRsYWJlbEZvdXI6ICdDT05GSVJNQVRJT04nXG5cdH07XG5cdEBJbnB1dCgpXG5cdHByb2dyZXNzQmFySWNvbklkID0ge1xuXHRcdEljb25PbmVJZDogJ2xpc3RpbmdEZXRhaWxzJyxcblx0XHRJY29uVHdvSWQ6ICdwcm9kdWN0RGV0YWlscycsXG5cdFx0SWNvblRocmVlSWQ6ICdwcm9kdWN0VHJhY2VhYmlsaXR5Jyxcblx0XHRJY29uRm91cklkOiAnY29uZmlybSdcblx0fTtcblx0QElucHV0KClcblx0cHJvZ3Jlc3NCYXJUaXRsZUlkID0ge1xuXHRcdGxhYmVsT25lSWQ6ICdsaXN0aW5nRGV0YWlscycsXG5cdFx0bGFiZWxUd29JZDogJ3Byb2R1Y3REZXRhaWxzJyxcblx0XHRsYWJlbFRocmVlSWQ6ICdwcm9kdWN0VHJhY2VhYmlsaXR5Jyxcblx0XHRsYWJlbEZvdXJJZDogJ2NvbmZpcm0nXG5cdH07XG5cdEBPdXRwdXQoKSBwcm9ncmVzc09uZUFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHByb2dyZXNzVHdvQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgcHJvZ3Jlc3NUaHJlZUFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHByb2dyZXNzRm91ckFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgfVxufVxuIl19