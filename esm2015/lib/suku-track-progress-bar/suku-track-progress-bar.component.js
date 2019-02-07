/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuTrackProgressBarComponent {
    constructor() {
        this.progressStyleOne = 'progressCompleted';
        this.progressStyleTwo = 'progressActive';
        this.progressStyleThree = 'progressUpcoming';
        this.headingOne = 'SELECT A PRODUCT';
        this.headingTwo = 'TRACE COMPONENTS';
        this.headingThree = 'SHOW TRACE';
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
    ngOnInit() {
    }
}
SukuTrackProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-track-progress-bar',
                template: "<table class=\"col-sm-6 offset-sm-3\">\r\n  <tr class=\"pt-3\">\r\n    <td class=\"{{progressStyleOne}} text-center\">\r\n      <i *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\r\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\r\n    </td>\r\n    <td>\r\n      <hr class=\"hrLine\">\r\n    </td>\r\n    <td class=\"{{progressStyleTwo}} text-center\">\r\n      <i *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\r\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\r\n    </td>\r\n    <td>\r\n      <hr class=\"hrLine\">\r\n    </td>\r\n    <td class=\"{{progressStyleThree}} text-center\">\r\n      <i *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"fa fa-check tickSign\"></i>\r\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\r\n    </td>\r\n  </tr>\r\n</table>\r\n<table class=\"col-sm-8 offset-sm-2 text-center\">\r\n  <tr id=\"txt\">\r\n    <td class=\"{{customHeadingOneClass}} progressTitle pt-3\">\r\n      {{headingOne}}\r\n    </td>\r\n    <td class=\"{{customHeadingTwoClass}} progressTitle pt-3\">\r\n      {{headingTwo}}\r\n    </td>\r\n    <td class=\"{{customHeadingThreeClass}} progressTitle pt-3\">\r\n      {{headingThree}}\r\n    </td>\r\n  </tr>\r\n</table>\r\n",
                styles: [".Progresscircle{width:50px;height:50px;color:#fff;background:#031103;border-radius:50%}.progressActive{width:50px!important;height:50px;color:#fff;background:#a7bf2e;border-radius:50%!important;font-family:Poppins,sans-serif}.progressUpcoming{width:50px!important;height:50px!important;color:#fff;background:#757575;border-radius:50%!important;font-family:Poppins,sans-serif}.PRODUCT-1{width:90px;height:24px;font-family:Poppins,sans-serif;font-size:17px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6}.progressCompleted{width:50px!important;height:50px!important;color:#fff;background-color:#1c1c1c;border-radius:50%!important;font-family:Poppins,sans-serif}.progressTitle{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.progress-bar-active{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.circleP{background-color:gray;width:50px!important;height:50px!important;border-radius:50%!important}.tableMar{margin-top:1%;margin-bottom:4%}.tickSign{color:#d8fc40}tr#txt td{width:20%}.starChecked{color:#686868!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.tracTraceTxtBold{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}"]
            }] }
];
/** @nocollapse */
SukuTrackProgressBarComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmFjay1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyL3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLDZCQUE2QjtJQWN4QztRQWI2QixxQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQztRQUN2QyxxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUNsQyx1QkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM5RCxlQUFVLEdBQUcsa0JBQWtCLENBQUM7UUFDaEMsZUFBVSxHQUFHLGtCQUFrQixDQUFDO1FBQ2hDLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBQzVCLGlCQUFZLEdBQUcsY0FBYyxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsZUFBZSxDQUFDO1FBQy9CLG1CQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ04sMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUN6Qiw0QkFBdUIsR0FBRyxFQUFFLENBQUM7SUFFbEQsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyx5MUNBQXVEOzthQUV4RDs7Ozs7K0JBRUUsS0FBSyxTQUFDLG9CQUFvQjsrQkFDMUIsS0FBSyxTQUFDLG9CQUFvQjtpQ0FDMUIsS0FBSyxTQUFDLHNCQUFzQjt5QkFDNUIsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7b0NBQ0wsS0FBSyxTQUFDLDBCQUEwQjtvQ0FDaEMsS0FBSyxTQUFDLDBCQUEwQjtzQ0FDaEMsS0FBSyxTQUFDLDRCQUE0Qjs7OztJQVhuQyx5REFBb0U7O0lBQ3BFLHlEQUFpRTs7SUFDakUsMkRBQXVFOztJQUN2RSxtREFBeUM7O0lBQ3pDLG1EQUF5Qzs7SUFDekMscURBQXFDOztJQUNyQyxxREFBdUM7O0lBQ3ZDLHFEQUF3Qzs7SUFDeEMsdURBQXlDOztJQUN6Qyw4REFBOEQ7O0lBQzlELDhEQUE4RDs7SUFDOUQsZ0VBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS10cmFjay1wcm9ncmVzcy1iYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VUcmFja1Byb2dyZXNzQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLW9uZScpIHByb2dyZXNzU3R5bGVPbmUgPSAncHJvZ3Jlc3NDb21wbGV0ZWQnO1xyXG4gIEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtdHdvJykgcHJvZ3Jlc3NTdHlsZVR3byA9ICdwcm9ncmVzc0FjdGl2ZSc7XHJcbiAgQElucHV0KCdwcm9ncmVzcy1zdHlsZS10aHJlZScpIHByb2dyZXNzU3R5bGVUaHJlZSA9ICdwcm9ncmVzc1VwY29taW5nJztcclxuICBASW5wdXQoKSBoZWFkaW5nT25lID0gJ1NFTEVDVCBBIFBST0RVQ1QnO1xyXG4gIEBJbnB1dCgpIGhlYWRpbmdUd28gPSAnVFJBQ0UgQ09NUE9ORU5UUyc7XHJcbiAgQElucHV0KCkgaGVhZGluZ1RocmVlID0gJ1NIT1cgVFJBQ0UnO1xyXG4gIEBJbnB1dCgpIGhlYWRpbmdPbmVJZCA9ICdmaXJzdEhlYWRpbmcnO1xyXG4gIEBJbnB1dCgpIGhlYWRpbmdUd29JZCA9ICdzZWNvbmRIZWFkaW5nJztcclxuICBASW5wdXQoKSBoZWFkaW5nVGhyZWVJZCA9ICd0aGlyZEhlYWRpbmcnO1xyXG4gIEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctb25lLWNsYXNzJykgY3VzdG9tSGVhZGluZ09uZUNsYXNzID0gJyc7XHJcbiAgQElucHV0KCdjdXN0b20taGVhZGluZy10d28tY2xhc3MnKSBjdXN0b21IZWFkaW5nVHdvQ2xhc3MgPSAnJztcclxuICBASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLXRocmVlLWNsYXNzJykgY3VzdG9tSGVhZGluZ1RocmVlQ2xhc3MgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=