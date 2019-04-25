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
                    template: "<table class=\"col-sm-10 offset-sm-1\">\r\n  <tr class=\"pt-3\">\r\n    <td class=\"{{progressStyleOne}} text-center\">\r\n      <i *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\r\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\r\n    </td>\r\n    <td>\r\n      <hr class=\"hrLine\">\r\n    </td>\r\n    <td class=\"{{progressStyleTwo}} text-center\">\r\n    <i *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\r\n    <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\r\n  </td>\r\n    <td>\r\n      <hr class=\"hrLine\">\r\n    </td>\r\n    <td class=\"{{progressStyleThree}} text-center\">\r\n    <i *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\r\n    <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\r\n  </td>\r\n    <td>\r\n      <hr class=\"hrLine\">\r\n    </td>\r\n    <td class=\"{{progressStyleFour}} text-center\">\r\n    <i *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\r\n    <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\r\n  </td>\r\n    <td>\r\n      <hr class=\"hrLine\">\r\n    </td>\r\n    <td class=\"{{progressStyleFive}} text-center\">\r\n    <i *ngIf=\"(progressStyleFive == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\r\n    <span *ngIf=\"!(progressStyleFive == 'progressCompleted')\">5</span>\r\n  </td>\r\n  </tr>\r\n</table>\r\n<table class=\"col-sm-12 text-center\">\r\n<tr id=\"txt\" class=\"pt-3\">\r\n\t<td class=\"{{customHeadingOneClass}} progressTitle\">\r\n\t\t{{headingOne}}\r\n\t</td>\r\n\t<td class=\"{{customHeadingTwoClass}} progressTitle\">\r\n\t\t{{headingTwo}}\r\n\t</td>\r\n\t<td class=\"{{customHeadingThreeClass}} progressTitle \">\r\n\t{{headingThree}}\r\n\t</td>\r\n\t<td class=\"{{customHeadingFourClass}} progressTitle\">\r\n\t{{headingFour}}\r\n\t</td>\r\n\t<td class=\"{{customHeadingFiveClass}} progressTitle\">\r\n\t{{headingFive}}\r\n\t</td>\r\n</tr>\r\n</table>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcHJvZ3Jlc3MtYmFyL3N1a3UtcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUEyQkU7UUFyQjRCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUN0QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDcEIsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUMsZUFBVSxHQUFHLGlCQUFpQixDQUFDO1FBQy9CLGVBQVUsR0FBRyxpQkFBaUIsQ0FBQztRQUMvQixpQkFBWSxHQUFHLHNCQUFzQixDQUFDO1FBQ3RDLGdCQUFXLEdBQUcsZUFBZSxDQUFDO1FBQzlCLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLGlCQUFZLEdBQUcsY0FBYyxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsZUFBZSxDQUFDO1FBQy9CLG1CQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ2hDLGtCQUFhLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLGtCQUFhLEdBQUcsY0FBYyxDQUFDO1FBQ0wsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUN6Qiw0QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFDOUIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztJQUUvQyxDQUFDOzs7O0lBRWpCLDJDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQTlCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0Isc2pFQUFpRDs7aUJBRWxEOzs7OzttQ0FFQyxLQUFLLFNBQUMsb0JBQW9CO21DQUMxQixLQUFLLFNBQUMsb0JBQW9CO3FDQUMxQixLQUFLLFNBQUMsc0JBQXNCO29DQUM1QixLQUFLLFNBQUMscUJBQXFCO29DQUMzQixLQUFLLFNBQUMscUJBQXFCOzZCQUMzQixLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSzsrQkFDTCxLQUFLO2lDQUNMLEtBQUs7Z0NBQ0wsS0FBSztnQ0FDTCxLQUFLO3dDQUNMLEtBQUssU0FBQywwQkFBMEI7d0NBQ2hDLEtBQUssU0FBQywwQkFBMEI7MENBQ2hDLEtBQUssU0FBQyw0QkFBNEI7eUNBQ2xDLEtBQUssU0FBQywyQkFBMkI7eUNBQ2pDLEtBQUssU0FBQywyQkFBMkI7c0JBQ2pDLEtBQUs7O0lBTVAsK0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQTNCWSx3QkFBd0I7OztJQUNwQyxvREFBbUQ7O0lBQ25ELG9EQUFtRDs7SUFDbkQsc0RBQXVEOztJQUN2RCxxREFBcUQ7O0lBQ3JELHFEQUFxRDs7SUFDckQsOENBQXdDOztJQUN4Qyw4Q0FBd0M7O0lBQ3hDLGdEQUErQzs7SUFDL0MsK0NBQXVDOztJQUN2QywrQ0FBaUM7O0lBQ2pDLGdEQUF1Qzs7SUFDdkMsZ0RBQXdDOztJQUN4QyxrREFBeUM7O0lBQ3pDLGlEQUF5Qzs7SUFDekMsaURBQXdDOztJQUN4Qyx5REFBOEQ7O0lBQzlELHlEQUE4RDs7SUFDOUQsMkRBQWtFOztJQUNsRSwwREFBZ0U7O0lBQ2hFLDBEQUFnRTs7SUFDaEUsdUNBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1wcm9ncmVzcy1iYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXByb2dyZXNzLWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdVByb2dyZXNzQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLW9uZScpIHByb2dyZXNzU3R5bGVPbmUgPSAnJztcclxuXHRASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLXR3bycpIHByb2dyZXNzU3R5bGVUd28gPSAnJztcclxuXHRASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLXRocmVlJykgcHJvZ3Jlc3NTdHlsZVRocmVlID0gJyc7XHJcblx0QElucHV0KCdwcm9ncmVzcy1zdHlsZS1mb3VyJykgcHJvZ3Jlc3NTdHlsZUZvdXIgPSAnJztcclxuXHRASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLWZpdmUnKSBwcm9ncmVzc1N0eWxlRml2ZSA9ICcnO1xyXG5cdEBJbnB1dCgpIGhlYWRpbmdPbmUgPSAnTElTVElORyBERVRBSUxTJztcclxuXHRASW5wdXQoKSBoZWFkaW5nVHdvID0gJ1BST0RVQ1QgREVUQUlMUyc7XHJcblx0QElucHV0KCkgaGVhZGluZ1RocmVlID0gJ1BST0RVQ1QgVFJBQ0VBQklMSVRZJztcclxuXHRASW5wdXQoKSBoZWFkaW5nRm91ciA9ICdURVJNUyBPRiBTQUxFJztcclxuXHRASW5wdXQoKSBoZWFkaW5nRml2ZSA9ICdDT05GSVJNJztcclxuXHRASW5wdXQoKSBoZWFkaW5nT25lSWQgPSAnZmlyc3RIZWFkaW5nJztcclxuXHRASW5wdXQoKSBoZWFkaW5nVHdvSWQgPSAnc2Vjb25kSGVhZGluZyc7XHJcblx0QElucHV0KCkgaGVhZGluZ1RocmVlSWQgPSAndGhpcmRIZWFkaW5nJztcclxuXHRASW5wdXQoKSBoZWFkaW5nRm91cklkID0gJ2ZvdXJ0aEhlYWRpbmcnO1xyXG5cdEBJbnB1dCgpIGhlYWRpbmdGaXZlSWQgPSAnZmlmdGhIZWFkaW5nJztcclxuXHRASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLW9uZS1jbGFzcycpIGN1c3RvbUhlYWRpbmdPbmVDbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctdHdvLWNsYXNzJykgY3VzdG9tSGVhZGluZ1R3b0NsYXNzID0gJyc7XHJcblx0QElucHV0KCdjdXN0b20taGVhZGluZy10aHJlZS1jbGFzcycpIGN1c3RvbUhlYWRpbmdUaHJlZUNsYXNzID0gJyc7XHJcblx0QElucHV0KCdjdXN0b20taGVhZGluZy1mb3VyLWNsYXNzJykgY3VzdG9tSGVhZGluZ0ZvdXJDbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctZml2ZS1jbGFzcycpIGN1c3RvbUhlYWRpbmdGaXZlQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoKSBtYXg7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=