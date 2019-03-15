/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuProgressBarComponent {
    constructor() {
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
    ngOnInit() {
    }
}
SukuProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-progress-bar',
                template: "<table class=\"col-sm-10 offset-sm-1\">\n  <tr class=\"pt-3\">\n    <td class=\"{{progressStyleOne}} text-center\">\n      <i *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleTwo}} text-center\">\n    <i *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n    <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n  </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleThree}} text-center\">\n    <i *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n    <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n  </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFour}} text-center\">\n    <i *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n    <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\n  </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFive}} text-center\">\n    <i *ngIf=\"(progressStyleFive == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n    <span *ngIf=\"!(progressStyleFive == 'progressCompleted')\">5</span>\n  </td>\n  </tr>\n</table>\n<table class=\"col-sm-12 text-center\">\n<tr id=\"txt\" class=\"pt-3\">\n\t<td class=\"{{customHeadingOneClass}} progressTitle\">\n\t\t{{headingOne}}\n\t</td>\n\t<td class=\"{{customHeadingTwoClass}} progressTitle\">\n\t\t{{headingTwo}}\n\t</td>\n\t<td class=\"{{customHeadingThreeClass}} progressTitle \">\n\t{{headingThree}}\n\t</td>\n\t<td class=\"{{customHeadingFourClass}} progressTitle\">\n\t{{headingFour}}\n\t</td>\n\t<td class=\"{{customHeadingFiveClass}} progressTitle\">\n\t{{headingFive}}\n\t</td>\n</tr>\n</table>",
                styles: [".Progresscircle{width:50px;height:50px;color:#fff;background:#031103;border-radius:50%}.progressActive{width:50px!important;height:50px;color:#fff;background:var(--main-color);border-radius:50%!important;font-family:Poppins-Regular}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:Poppins-Regular}.PRODUCT-1{width:90px;height:24px;font-family:Poppins;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins-Regular}.progressTitle{font-family:EncodeSans;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.progress-bar-active{font-family:EncodeSans;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.circleP{width:50px!important;height:50px!important;background:gray;border-radius:50%!important}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:20%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}"]
            }] }
];
/** @nocollapse */
SukuProgressBarComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcHJvZ3Jlc3MtYmFyL3N1a3UtcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHdCQUF3QjtJQXNCbkM7UUFyQjRCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUN0QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDcEIsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUMsZUFBVSxHQUFHLGlCQUFpQixDQUFDO1FBQy9CLGVBQVUsR0FBRyxpQkFBaUIsQ0FBQztRQUMvQixpQkFBWSxHQUFHLHNCQUFzQixDQUFDO1FBQ3RDLGdCQUFXLEdBQUcsZUFBZSxDQUFDO1FBQzlCLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLGlCQUFZLEdBQUcsY0FBYyxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsZUFBZSxDQUFDO1FBQy9CLG1CQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ2hDLGtCQUFhLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLGtCQUFhLEdBQUcsY0FBYyxDQUFDO1FBQ0wsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUN6Qiw0QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFDOUIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztJQUUvQyxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLDA4REFBaUQ7O2FBRWxEOzs7OzsrQkFFQyxLQUFLLFNBQUMsb0JBQW9COytCQUMxQixLQUFLLFNBQUMsb0JBQW9CO2lDQUMxQixLQUFLLFNBQUMsc0JBQXNCO2dDQUM1QixLQUFLLFNBQUMscUJBQXFCO2dDQUMzQixLQUFLLFNBQUMscUJBQXFCO3lCQUMzQixLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLO29DQUNMLEtBQUssU0FBQywwQkFBMEI7b0NBQ2hDLEtBQUssU0FBQywwQkFBMEI7c0NBQ2hDLEtBQUssU0FBQyw0QkFBNEI7cUNBQ2xDLEtBQUssU0FBQywyQkFBMkI7cUNBQ2pDLEtBQUssU0FBQywyQkFBMkI7a0JBQ2pDLEtBQUs7Ozs7SUFwQk4sb0RBQW1EOztJQUNuRCxvREFBbUQ7O0lBQ25ELHNEQUF1RDs7SUFDdkQscURBQXFEOztJQUNyRCxxREFBcUQ7O0lBQ3JELDhDQUF3Qzs7SUFDeEMsOENBQXdDOztJQUN4QyxnREFBK0M7O0lBQy9DLCtDQUF1Qzs7SUFDdkMsK0NBQWlDOztJQUNqQyxnREFBdUM7O0lBQ3ZDLGdEQUF3Qzs7SUFDeEMsa0RBQXlDOztJQUN6QyxpREFBeUM7O0lBQ3pDLGlEQUF3Qzs7SUFDeEMseURBQThEOztJQUM5RCx5REFBOEQ7O0lBQzlELDJEQUFrRTs7SUFDbEUsMERBQWdFOztJQUNoRSwwREFBZ0U7O0lBQ2hFLHVDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtcHJvZ3Jlc3MtYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1UHJvZ3Jlc3NCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLW9uZScpIHByb2dyZXNzU3R5bGVPbmUgPSAnJztcblx0QElucHV0KCdwcm9ncmVzcy1zdHlsZS10d28nKSBwcm9ncmVzc1N0eWxlVHdvID0gJyc7XG5cdEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtdGhyZWUnKSBwcm9ncmVzc1N0eWxlVGhyZWUgPSAnJztcblx0QElucHV0KCdwcm9ncmVzcy1zdHlsZS1mb3VyJykgcHJvZ3Jlc3NTdHlsZUZvdXIgPSAnJztcblx0QElucHV0KCdwcm9ncmVzcy1zdHlsZS1maXZlJykgcHJvZ3Jlc3NTdHlsZUZpdmUgPSAnJztcblx0QElucHV0KCkgaGVhZGluZ09uZSA9ICdMSVNUSU5HIERFVEFJTFMnO1xuXHRASW5wdXQoKSBoZWFkaW5nVHdvID0gJ1BST0RVQ1QgREVUQUlMUyc7XG5cdEBJbnB1dCgpIGhlYWRpbmdUaHJlZSA9ICdQUk9EVUNUIFRSQUNFQUJJTElUWSc7XG5cdEBJbnB1dCgpIGhlYWRpbmdGb3VyID0gJ1RFUk1TIE9GIFNBTEUnO1xuXHRASW5wdXQoKSBoZWFkaW5nRml2ZSA9ICdDT05GSVJNJztcblx0QElucHV0KCkgaGVhZGluZ09uZUlkID0gJ2ZpcnN0SGVhZGluZyc7XG5cdEBJbnB1dCgpIGhlYWRpbmdUd29JZCA9ICdzZWNvbmRIZWFkaW5nJztcblx0QElucHV0KCkgaGVhZGluZ1RocmVlSWQgPSAndGhpcmRIZWFkaW5nJztcblx0QElucHV0KCkgaGVhZGluZ0ZvdXJJZCA9ICdmb3VydGhIZWFkaW5nJztcblx0QElucHV0KCkgaGVhZGluZ0ZpdmVJZCA9ICdmaWZ0aEhlYWRpbmcnO1xuXHRASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLW9uZS1jbGFzcycpIGN1c3RvbUhlYWRpbmdPbmVDbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLXR3by1jbGFzcycpIGN1c3RvbUhlYWRpbmdUd29DbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLXRocmVlLWNsYXNzJykgY3VzdG9tSGVhZGluZ1RocmVlQ2xhc3MgPSAnJztcblx0QElucHV0KCdjdXN0b20taGVhZGluZy1mb3VyLWNsYXNzJykgY3VzdG9tSGVhZGluZ0ZvdXJDbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLWZpdmUtY2xhc3MnKSBjdXN0b21IZWFkaW5nRml2ZUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIG1heDtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=