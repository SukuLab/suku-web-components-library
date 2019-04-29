/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuProgressBarComponent {
    constructor() {
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
    ngOnInit() { }
}
SukuProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-progress-bar',
                template: "<table class=\"col-sm-10 offset-sm-1\">\n  <tr class=\"pt-3\">\n    <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\">\n      <i *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\">\n      <i *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\">\n      <i *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\">\n      <i *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n      <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFive}} text-center\" id=\"{{progressBarIconId?.IconFiveId}}\">\n      <i *ngIf=\"(progressStyleFive == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n      <span *ngIf=\"!(progressStyleFive == 'progressCompleted')\">5</span>\n    </td>\n  </tr>\n</table>\n<table class=\"col-sm-12 text-center\">\n  <tr id=\"txt\" class=\"pt-3\">\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelOneId}}\">\n      <span class=\"pl-4 {{customHeadingOneClass}}\">{{headingOne}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelTwoId}}\">\n      <span class=\"{{customHeadingTwoClass}} pl-4\">{{headingTwo}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelThreeId}}\">\n      <span class=\"{{customHeadingThreeClass}}\">{{headingThree}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFourId}}\">\n      <span class=\"pr-3 {{customHeadingFourClass}}\">{{headingFour}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFiveId}}\">\n      <span class=\"pr-4 {{customHeadingFiveClass}}\">{{headingFive}}</span>\n    </td>\n  </tr>\n</table>",
                styles: [".Progresscircle{width:50px;height:50px;color:#fff;background:#031103;border-radius:50%}.progressActive{width:50px!important;height:50px;color:#fff;background:var(--main-color);border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:Poppins,sans-serif!important}.PRODUCT-1{width:90px;height:24px;font-family:Poppins,sans-serif!important;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins,sans-serif!important}.progressTitle{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.progress-bar-active{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.circleP{background-color:gray;width:50px!important;height:50px!important;border-radius:50%!important}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:20%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.text-bold{color:#000!important;font-weight:700!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center}"]
            }] }
];
/** @nocollapse */
SukuProgressBarComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcHJvZ3Jlc3MtYmFyL3N1a3UtcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHdCQUF3QjtJQXFDcEM7UUFwQ1MscUJBQWdCLEdBQUcsbUJBQW1CLENBQUM7UUFDdkMscUJBQWdCLEdBQUcsa0JBQWtCLENBQUM7UUFDdEMsdUJBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDeEMsc0JBQWlCLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsZUFBVSxHQUFHLGlCQUFpQixDQUFDO1FBQy9CLGVBQVUsR0FBRyxpQkFBaUIsQ0FBQztRQUMvQixpQkFBWSxHQUFHLHNCQUFzQixDQUFDO1FBQ3RDLGdCQUFXLEdBQUcsZUFBZSxDQUFDO1FBQzlCLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLGlCQUFZLEdBQUcsY0FBYyxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsZUFBZSxDQUFDO1FBQy9CLG1CQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ2hDLGtCQUFhLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLGtCQUFhLEdBQUcsY0FBYyxDQUFDO1FBQ0wsMEJBQXFCLEdBQUcsV0FBVyxDQUFDO1FBQ3BDLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUN6Qiw0QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFDOUIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUVoRSxzQkFBaUIsR0FBRztZQUNuQixTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxVQUFVLEVBQUUsYUFBYTtZQUN6QixVQUFVLEVBQUUsU0FBUztTQUNyQixDQUFDO1FBRUYsdUJBQWtCLEdBQUc7WUFDcEIsVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFlBQVksRUFBRSxxQkFBcUI7WUFDbkMsV0FBVyxFQUFFLGFBQWE7WUFDMUIsV0FBVyxFQUFFLFNBQVM7U0FDdEIsQ0FBQztJQUNhLENBQUM7Ozs7SUFFaEIsUUFBUSxLQUFJLENBQUM7OztZQTVDYixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0Isa2pGQUFpRDs7YUFFakQ7Ozs7OytCQUVDLEtBQUs7K0JBQ0wsS0FBSztpQ0FDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLO29DQUNMLEtBQUssU0FBQywwQkFBMEI7b0NBQ2hDLEtBQUssU0FBQywwQkFBMEI7c0NBQ2hDLEtBQUssU0FBQyw0QkFBNEI7cUNBQ2xDLEtBQUssU0FBQywyQkFBMkI7cUNBQ2pDLEtBQUssU0FBQywyQkFBMkI7Z0NBQ2pDLEtBQUs7aUNBUUwsS0FBSzs7OztJQTVCTixvREFBZ0Q7O0lBQ2hELG9EQUErQzs7SUFDL0Msc0RBQWlEOztJQUNqRCxxREFBZ0Q7O0lBQ2hELHFEQUFnRDs7SUFDaEQsOENBQXdDOztJQUN4Qyw4Q0FBd0M7O0lBQ3hDLGdEQUErQzs7SUFDL0MsK0NBQXVDOztJQUN2QywrQ0FBaUM7O0lBQ2pDLGdEQUF1Qzs7SUFDdkMsZ0RBQXdDOztJQUN4QyxrREFBeUM7O0lBQ3pDLGlEQUF5Qzs7SUFDekMsaURBQXdDOztJQUN4Qyx5REFBdUU7O0lBQ3ZFLHlEQUE4RDs7SUFDOUQsMkRBQWtFOztJQUNsRSwwREFBZ0U7O0lBQ2hFLDBEQUFnRTs7SUFDaEUscURBT0U7O0lBQ0Ysc0RBT0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1wcm9ncmVzcy1iYXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1wcm9ncmVzcy1iYXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVByb2dyZXNzQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgcHJvZ3Jlc3NTdHlsZU9uZSA9ICdwcm9ncmVzc0NvbXBsZXRlZCc7XG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVUd28gPSAncHJvZ3Jlc3NVcGNvbWluZyc7XG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVUaHJlZSA9ICdwcm9ncmVzc1VwY29taW5nJztcblx0QElucHV0KCkgcHJvZ3Jlc3NTdHlsZUZvdXIgPSAncHJvZ3Jlc3NVcGNvbWluZyc7XG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVGaXZlID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xuXHRASW5wdXQoKSBoZWFkaW5nT25lID0gJ0xJU1RJTkcgREVUQUlMUyc7XG5cdEBJbnB1dCgpIGhlYWRpbmdUd28gPSAnUFJPRFVDVCBERVRBSUxTJztcblx0QElucHV0KCkgaGVhZGluZ1RocmVlID0gJ1BST0RVQ1QgVFJBQ0VBQklMSVRZJztcblx0QElucHV0KCkgaGVhZGluZ0ZvdXIgPSAnVEVSTVMgT0YgU0FMRSc7XG5cdEBJbnB1dCgpIGhlYWRpbmdGaXZlID0gJ0NPTkZJUk0nO1xuXHRASW5wdXQoKSBoZWFkaW5nT25lSWQgPSAnZmlyc3RIZWFkaW5nJztcblx0QElucHV0KCkgaGVhZGluZ1R3b0lkID0gJ3NlY29uZEhlYWRpbmcnO1xuXHRASW5wdXQoKSBoZWFkaW5nVGhyZWVJZCA9ICd0aGlyZEhlYWRpbmcnO1xuXHRASW5wdXQoKSBoZWFkaW5nRm91cklkID0gJ2ZvdXJ0aEhlYWRpbmcnO1xuXHRASW5wdXQoKSBoZWFkaW5nRml2ZUlkID0gJ2ZpZnRoSGVhZGluZyc7XG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctb25lLWNsYXNzJykgY3VzdG9tSGVhZGluZ09uZUNsYXNzID0gJ3RleHQtYm9sZCc7XG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctdHdvLWNsYXNzJykgY3VzdG9tSGVhZGluZ1R3b0NsYXNzID0gJyc7XG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctdGhyZWUtY2xhc3MnKSBjdXN0b21IZWFkaW5nVGhyZWVDbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLWZvdXItY2xhc3MnKSBjdXN0b21IZWFkaW5nRm91ckNsYXNzID0gJyc7XG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctZml2ZS1jbGFzcycpIGN1c3RvbUhlYWRpbmdGaXZlQ2xhc3MgPSAnJztcblx0QElucHV0KClcblx0cHJvZ3Jlc3NCYXJJY29uSWQgPSB7XG5cdFx0SWNvbk9uZUlkOiAnbGlzdGluZ0RldGFpbHMnLFxuXHRcdEljb25Ud29JZDogJ3Byb2R1Y3REZXRhaWxzJyxcblx0XHRJY29uVGhyZWVJZDogJ3Byb2R1Y3RUcmFjZWFiaWxpdHknLFxuXHRcdEljb25Gb3VySWQ6ICd0ZXJtc09mU2FsZScsXG5cdFx0SWNvbkZpdmVJZDogJ2NvbmZpcm0nXG5cdH07XG5cdEBJbnB1dCgpXG5cdHByb2dyZXNzQmFyVGl0bGVJZCA9IHtcblx0XHRsYWJlbE9uZUlkOiAnbGlzdGluZ0RldGFpbHMnLFxuXHRcdGxhYmVsVHdvSWQ6ICdwcm9kdWN0RGV0YWlscycsXG5cdFx0bGFiZWxUaHJlZUlkOiAncHJvZHVjdFRyYWNlYWJpbGl0eScsXG5cdFx0bGFiZWxGb3VySWQ6ICd0ZXJtc09mU2FsZScsXG5cdFx0bGFiZWxGaXZlSWQ6ICdjb25maXJtJ1xuXHR9O1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bmdPbkluaXQoKSB7fVxufVxuIl19