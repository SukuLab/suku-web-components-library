/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuTrackProgressBarComponent = /** @class */ (function () {
    function SukuTrackProgressBarComponent() {
        this.progressStyleOne = 'progressCompleted';
        this.progressStyleTwo = 'progressActive';
        this.progressStyleThree = 'progressUpcoming';
        this.headingOne = 'SELECT A PRODUCT';
        this.headingTwo = 'TRACE COMPONENTS';
        this.headingThree = 'SHOW TRACE TREE';
        this.headingOneId = 'firstHeading';
        this.headingTwoId = 'secondHeading';
        this.headingThreeId = 'thirdHeading';
        this.customHeadingOneClass = '';
        this.customHeadingTwoClass = '';
        this.customHeadingThreeClass = '';
    }
    /**
     * @return {?}
     */
    SukuTrackProgressBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuTrackProgressBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-track-progress-bar',
                    template: "<table class=\"col-sm-6 offset-sm-3\">\n  <tr class=\"pt-3\">\n    <td class=\"{{progressStyleOne}} text-center\">\n      <i *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleTwo}} text-center\">\n      <i *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleThree}} text-center\">\n      <i *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n    </td>\n  </tr>\n</table>\n<table class=\"col-sm-8 offset-sm-2 text-center\">\n  <tr id=\"txt\">\n    <td class=\"{{customHeadingOneClass}} progressTitle pt-3\">\n      {{headingOne}}\n    </td>\n    <td class=\"{{customHeadingTwoClass}} progressTitle pt-3\">\n      {{headingTwo}}\n    </td>\n    <td class=\"{{customHeadingThreeClass}} progressTitle pt-3\">\n      {{headingThree}}\n    </td>\n  </tr>\n</table>\n",
                    styles: [".Progresscircle{width:50px;height:50px;color:#fff;background:#031103;border-radius:50%}.progressActive{width:50px!important;height:50px;color:#fff;background:#a7bf2e;border-radius:50%!important;font-family:Poppins,sans-serif}.progressUpcoming{width:50px!important;height:50px!important;color:#a8a6a6;background:#757575;border-radius:50%!important;font-family:Poppins,sans-serif}.PRODUCT-1{width:90px;height:24px;font-family:Poppins,sans-serif;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins,sans-serif}.progressTitle{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.progress-bar-active{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.circleP{background-color:gray;width:50px!important;height:50px!important;border-radius:50%!important}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:20%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.tracTraceTxtBold{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}@media only screen and (max-width:425){.p-xs-0{padding:0!important}}"]
                }] }
    ];
    /** @nocollapse */
    SukuTrackProgressBarComponent.ctorParameters = function () { return []; };
    SukuTrackProgressBarComponent.propDecorators = {
        progressStyleOne: [{ type: Input, args: ['progress-style-one',] }],
        progressStyleTwo: [{ type: Input, args: ['progress-style-two',] }],
        progressStyleThree: [{ type: Input, args: ['progress-style-three',] }],
        headingOne: [{ type: Input }],
        headingTwo: [{ type: Input }],
        headingThree: [{ type: Input }],
        headingOneId: [{ type: Input }],
        headingTwoId: [{ type: Input }],
        headingThreeId: [{ type: Input }],
        customHeadingOneClass: [{ type: Input, args: ['custom-heading-one-class',] }],
        customHeadingTwoClass: [{ type: Input, args: ['custom-heading-two-class',] }],
        customHeadingThreeClass: [{ type: Input, args: ['custom-heading-three-class',] }]
    };
    return SukuTrackProgressBarComponent;
}());
export { SukuTrackProgressBarComponent };
if (false) {
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.progressStyleOne;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.progressStyleTwo;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.progressStyleThree;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.headingOne;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.headingTwo;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.headingThree;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.headingOneId;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.headingTwoId;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.headingThreeId;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.customHeadingOneClass;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.customHeadingTwoClass;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.customHeadingThreeClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmFjay1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyL3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFtQkU7UUFiNkIscUJBQWdCLEdBQUcsbUJBQW1CLENBQUM7UUFDdkMscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDbEMsdUJBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDOUQsZUFBVSxHQUFHLGtCQUFrQixDQUFDO1FBQ2hDLGVBQVUsR0FBRyxrQkFBa0IsQ0FBQztRQUNoQyxpQkFBWSxHQUFHLGlCQUFpQixDQUFDO1FBQ2pDLGlCQUFZLEdBQUcsY0FBYyxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsZUFBZSxDQUFDO1FBQy9CLG1CQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ04sMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUN6Qiw0QkFBdUIsR0FBRyxFQUFFLENBQUM7SUFFbEQsQ0FBQzs7OztJQUVqQixnREFBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLG14Q0FBdUQ7O2lCQUV4RDs7Ozs7bUNBRUUsS0FBSyxTQUFDLG9CQUFvQjttQ0FDMUIsS0FBSyxTQUFDLG9CQUFvQjtxQ0FDMUIsS0FBSyxTQUFDLHNCQUFzQjs2QkFDNUIsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7K0JBQ0wsS0FBSzsrQkFDTCxLQUFLO2lDQUNMLEtBQUs7d0NBQ0wsS0FBSyxTQUFDLDBCQUEwQjt3Q0FDaEMsS0FBSyxTQUFDLDBCQUEwQjswQ0FDaEMsS0FBSyxTQUFDLDRCQUE0Qjs7SUFPckMsb0NBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQW5CWSw2QkFBNkI7OztJQUN4Qyx5REFBb0U7O0lBQ3BFLHlEQUFpRTs7SUFDakUsMkRBQXVFOztJQUN2RSxtREFBeUM7O0lBQ3pDLG1EQUF5Qzs7SUFDekMscURBQTBDOztJQUMxQyxxREFBdUM7O0lBQ3ZDLHFEQUF3Qzs7SUFDeEMsdURBQXlDOztJQUN6Qyw4REFBOEQ7O0lBQzlELDhEQUE4RDs7SUFDOUQsZ0VBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS10cmFjay1wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1VHJhY2tQcm9ncmVzc0JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtb25lJykgcHJvZ3Jlc3NTdHlsZU9uZSA9ICdwcm9ncmVzc0NvbXBsZXRlZCc7XG4gIEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtdHdvJykgcHJvZ3Jlc3NTdHlsZVR3byA9ICdwcm9ncmVzc0FjdGl2ZSc7XG4gIEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtdGhyZWUnKSBwcm9ncmVzc1N0eWxlVGhyZWUgPSAncHJvZ3Jlc3NVcGNvbWluZyc7XG4gIEBJbnB1dCgpIGhlYWRpbmdPbmUgPSAnU0VMRUNUIEEgUFJPRFVDVCc7XG4gIEBJbnB1dCgpIGhlYWRpbmdUd28gPSAnVFJBQ0UgQ09NUE9ORU5UUyc7XG4gIEBJbnB1dCgpIGhlYWRpbmdUaHJlZSA9ICdTSE9XIFRSQUNFIFRSRUUnO1xuICBASW5wdXQoKSBoZWFkaW5nT25lSWQgPSAnZmlyc3RIZWFkaW5nJztcbiAgQElucHV0KCkgaGVhZGluZ1R3b0lkID0gJ3NlY29uZEhlYWRpbmcnO1xuICBASW5wdXQoKSBoZWFkaW5nVGhyZWVJZCA9ICd0aGlyZEhlYWRpbmcnO1xuICBASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLW9uZS1jbGFzcycpIGN1c3RvbUhlYWRpbmdPbmVDbGFzcyA9ICcnO1xuICBASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLXR3by1jbGFzcycpIGN1c3RvbUhlYWRpbmdUd29DbGFzcyA9ICcnO1xuICBASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLXRocmVlLWNsYXNzJykgY3VzdG9tSGVhZGluZ1RocmVlQ2xhc3MgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==