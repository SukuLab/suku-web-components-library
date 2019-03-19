/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuProgressBarComponent = /** @class */ (function () {
    function SukuProgressBarComponent() {
        this.progressStyleOne = '';
        this.progressStyleTwo = '';
        this.progressStyleThree = '';
        this.progressStyleFour = '';
        this.progressStyleFive = '';
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
        this.customHeadingOneClass = '';
        this.customHeadingTwoClass = '';
        this.customHeadingThreeClass = '';
        this.customHeadingFourClass = '';
        this.customHeadingFiveClass = '';
    }
    /**
     * @return {?}
     */
    SukuProgressBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuProgressBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-progress-bar',
                    template: "<table class=\"col-sm-10 offset-sm-1\">\n  <tr class=\"pt-3\">\n    <td class=\"{{progressStyleOne}} text-center\">\n      <i *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleTwo}} text-center\">\n    <i *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n    <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n  </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleThree}} text-center\">\n    <i *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n    <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n  </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFour}} text-center\">\n    <i *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n    <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\n  </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFive}} text-center\">\n    <i *ngIf=\"(progressStyleFive == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n    <span *ngIf=\"!(progressStyleFive == 'progressCompleted')\">5</span>\n  </td>\n  </tr>\n</table>\n<table class=\"col-sm-12 text-center\">\n<tr id=\"txt\" class=\"pt-3\">\n\t<td class=\"{{customHeadingOneClass}} progressTitle\">\n\t\t{{headingOne}}\n\t</td>\n\t<td class=\"{{customHeadingTwoClass}} progressTitle\">\n\t\t{{headingTwo}}\n\t</td>\n\t<td class=\"{{customHeadingThreeClass}} progressTitle \">\n\t{{headingThree}}\n\t</td>\n\t<td class=\"{{customHeadingFourClass}} progressTitle\">\n\t{{headingFour}}\n\t</td>\n\t<td class=\"{{customHeadingFiveClass}} progressTitle\">\n\t{{headingFive}}\n\t</td>\n</tr>\n</table>",
                    styles: [".Progresscircle{width:50px;height:50px;color:#fff;background:#031103;border-radius:50%}.progressActive{width:50px!important;height:50px;color:#fff;background:var(--main-color);border-radius:50%!important;font-family:Poppins-Regular}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:Poppins-Regular}.PRODUCT-1{width:90px;height:24px;font-family:Poppins;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins-Regular}.progressTitle{font-family:EncodeSans;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.progress-bar-active{font-family:EncodeSans;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.circleP{width:50px!important;height:50px!important;background:gray;border-radius:50%!important}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:20%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuProgressBarComponent.ctorParameters = function () { return []; };
    SukuProgressBarComponent.propDecorators = {
        progressStyleOne: [{ type: Input, args: ['progress-style-one',] }],
        progressStyleTwo: [{ type: Input, args: ['progress-style-two',] }],
        progressStyleThree: [{ type: Input, args: ['progress-style-three',] }],
        progressStyleFour: [{ type: Input, args: ['progress-style-four',] }],
        progressStyleFive: [{ type: Input, args: ['progress-style-five',] }],
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
        max: [{ type: Input }]
    };
    return SukuProgressBarComponent;
}());
export { SukuProgressBarComponent };
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
    SukuProgressBarComponent.prototype.max;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcHJvZ3Jlc3MtYmFyL3N1a3UtcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUEyQkU7UUFyQjRCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUN0QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDcEIsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUMsZUFBVSxHQUFHLGlCQUFpQixDQUFDO1FBQy9CLGVBQVUsR0FBRyxpQkFBaUIsQ0FBQztRQUMvQixpQkFBWSxHQUFHLHNCQUFzQixDQUFDO1FBQ3RDLGdCQUFXLEdBQUcsZUFBZSxDQUFDO1FBQzlCLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLGlCQUFZLEdBQUcsY0FBYyxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsZUFBZSxDQUFDO1FBQy9CLG1CQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ2hDLGtCQUFhLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLGtCQUFhLEdBQUcsY0FBYyxDQUFDO1FBQ0wsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUN6Qiw0QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFDOUIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztJQUUvQyxDQUFDOzs7O0lBRWpCLDJDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQTlCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsMDhEQUFpRDs7aUJBRWxEOzs7OzttQ0FFQyxLQUFLLFNBQUMsb0JBQW9CO21DQUMxQixLQUFLLFNBQUMsb0JBQW9CO3FDQUMxQixLQUFLLFNBQUMsc0JBQXNCO29DQUM1QixLQUFLLFNBQUMscUJBQXFCO29DQUMzQixLQUFLLFNBQUMscUJBQXFCOzZCQUMzQixLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSzsrQkFDTCxLQUFLO2lDQUNMLEtBQUs7Z0NBQ0wsS0FBSztnQ0FDTCxLQUFLO3dDQUNMLEtBQUssU0FBQywwQkFBMEI7d0NBQ2hDLEtBQUssU0FBQywwQkFBMEI7MENBQ2hDLEtBQUssU0FBQyw0QkFBNEI7eUNBQ2xDLEtBQUssU0FBQywyQkFBMkI7eUNBQ2pDLEtBQUssU0FBQywyQkFBMkI7c0JBQ2pDLEtBQUs7O0lBTVAsK0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQTNCWSx3QkFBd0I7OztJQUNwQyxvREFBbUQ7O0lBQ25ELG9EQUFtRDs7SUFDbkQsc0RBQXVEOztJQUN2RCxxREFBcUQ7O0lBQ3JELHFEQUFxRDs7SUFDckQsOENBQXdDOztJQUN4Qyw4Q0FBd0M7O0lBQ3hDLGdEQUErQzs7SUFDL0MsK0NBQXVDOztJQUN2QywrQ0FBaUM7O0lBQ2pDLGdEQUF1Qzs7SUFDdkMsZ0RBQXdDOztJQUN4QyxrREFBeUM7O0lBQ3pDLGlEQUF5Qzs7SUFDekMsaURBQXdDOztJQUN4Qyx5REFBOEQ7O0lBQzlELHlEQUE4RDs7SUFDOUQsMkRBQWtFOztJQUNsRSwwREFBZ0U7O0lBQ2hFLDBEQUFnRTs7SUFDaEUsdUNBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1wcm9ncmVzcy1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1wcm9ncmVzcy1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VQcm9ncmVzc0JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtb25lJykgcHJvZ3Jlc3NTdHlsZU9uZSA9ICcnO1xuXHRASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLXR3bycpIHByb2dyZXNzU3R5bGVUd28gPSAnJztcblx0QElucHV0KCdwcm9ncmVzcy1zdHlsZS10aHJlZScpIHByb2dyZXNzU3R5bGVUaHJlZSA9ICcnO1xuXHRASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLWZvdXInKSBwcm9ncmVzc1N0eWxlRm91ciA9ICcnO1xuXHRASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLWZpdmUnKSBwcm9ncmVzc1N0eWxlRml2ZSA9ICcnO1xuXHRASW5wdXQoKSBoZWFkaW5nT25lID0gJ0xJU1RJTkcgREVUQUlMUyc7XG5cdEBJbnB1dCgpIGhlYWRpbmdUd28gPSAnUFJPRFVDVCBERVRBSUxTJztcblx0QElucHV0KCkgaGVhZGluZ1RocmVlID0gJ1BST0RVQ1QgVFJBQ0VBQklMSVRZJztcblx0QElucHV0KCkgaGVhZGluZ0ZvdXIgPSAnVEVSTVMgT0YgU0FMRSc7XG5cdEBJbnB1dCgpIGhlYWRpbmdGaXZlID0gJ0NPTkZJUk0nO1xuXHRASW5wdXQoKSBoZWFkaW5nT25lSWQgPSAnZmlyc3RIZWFkaW5nJztcblx0QElucHV0KCkgaGVhZGluZ1R3b0lkID0gJ3NlY29uZEhlYWRpbmcnO1xuXHRASW5wdXQoKSBoZWFkaW5nVGhyZWVJZCA9ICd0aGlyZEhlYWRpbmcnO1xuXHRASW5wdXQoKSBoZWFkaW5nRm91cklkID0gJ2ZvdXJ0aEhlYWRpbmcnO1xuXHRASW5wdXQoKSBoZWFkaW5nRml2ZUlkID0gJ2ZpZnRoSGVhZGluZyc7XG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctb25lLWNsYXNzJykgY3VzdG9tSGVhZGluZ09uZUNsYXNzID0gJyc7XG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctdHdvLWNsYXNzJykgY3VzdG9tSGVhZGluZ1R3b0NsYXNzID0gJyc7XG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctdGhyZWUtY2xhc3MnKSBjdXN0b21IZWFkaW5nVGhyZWVDbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLWZvdXItY2xhc3MnKSBjdXN0b21IZWFkaW5nRm91ckNsYXNzID0gJyc7XG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctZml2ZS1jbGFzcycpIGN1c3RvbUhlYWRpbmdGaXZlQ2xhc3MgPSAnJztcblx0QElucHV0KCkgbWF4O1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==