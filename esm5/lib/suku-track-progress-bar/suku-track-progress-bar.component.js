/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
        this.progressBarLabelOne = '1';
        this.progressBarLabelTwo = '2';
        this.progressBarLabelThree = '3';
        this.tickSignCustomClass = 'tickSign';
        this.customHeadingCustomClass = 'col-sm-8 offset-sm-2';
        this.progressCustomClass = 'col-sm-6 offset-sm-3';
        this.customProgressTitle = 'progressTitle';
        this.contentCustomClass = 'text-center';
        this.enablePointer = false;
        this.progressOneAction = new EventEmitter();
        this.progressTwoAction = new EventEmitter();
        this.progressThreeAction = new EventEmitter();
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
                    template: "<div class=\"responsive\">\r\n  <table class=\"{{progressCustomClass}}\">\r\n    <tr class=\"pt-3\">\r\n      <td class=\"{{progressStyleOne}} text-center\" (click)=\"progressOneAction.emit()\"\r\n        [ngClass]=\"{'c-pointer': enablePointer}\">\r\n        <i *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"fa fa-check {{tickSignCustomClass}}\"></i>\r\n        <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">{{progressBarLabelOne}}</span>\r\n      </td>\r\n      <td>\r\n        <hr>\r\n      </td>\r\n      <td class=\"{{progressStyleTwo}} text-center\" (click)=\"progressTwoAction.emit()\"\r\n        [ngClass]=\"{'c-pointer': enablePointer}\">\r\n        <i *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"fa fa-check {{tickSignCustomClass}}\"></i>\r\n        <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">{{progressBarLabelTwo}}</span>\r\n      </td>\r\n      <td>\r\n        <hr>\r\n      </td>\r\n      <td class=\"{{progressStyleThree}} text-center\" (click)=\"progressThreeAction.emit()\"\r\n        [ngClass]=\"{'c-pointer': enablePointer}\">\r\n        <i *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"fa fa-check {{tickSignCustomClass}}\"></i>\r\n        <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">{{progressBarLabelThree}}</span>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n<table class=\"{{customHeadingCustomClass}} {{contentCustomClass}}\">\r\n  <tr id=\"txt\">\r\n    <td class=\"{{customHeadingOneClass}} {{customProgressTitle}} pt-3\" (click)=\"progressOneAction.emit()\"\r\n      [ngClass]=\"{'c-pointer': enablePointer}\" [id]=\"headingOneId\">\r\n      {{headingOne}}\r\n    </td>\r\n    <td class=\"{{customHeadingTwoClass}} {{customProgressTitle}} pt-3\" (click)=\"progressTwoAction.emit()\"\r\n      [ngClass]=\"{'c-pointer': enablePointer}\" [id]=\"headingTwoId\">\r\n      {{headingTwo}}\r\n    </td>\r\n    <td class=\"{{customHeadingThreeClass}} {{customProgressTitle}} pt-3\" (click)=\"progressThreeAction.emit()\"\r\n      [ngClass]=\"{'c-pointer': enablePointer}\" [id]=\"headingThreeId\">\r\n      {{headingThree}}\r\n    </td>\r\n  </tr>\r\n</table>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.progressActive{width:50px!important;height:50px;color:var(--suku-text-label-two);background:var(--suku-progressbar-active-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressUpcoming{width:50px!important;height:50px!important;color:#a8a6a6;background:var(--suku-progressbar-upcoming-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressCompleted{width:50px!important;height:50px!important;color:var(--suku-text-label-two);background-color:var(--suku-progressbar-completed-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressTitle{font-family:var(--suku-secondary-font);font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--suku-text-label-one)}.tickSign{color:var(--suku-secondary-color)}tr#txt td{width:20%}@media only screen and (max-width:425px){.responsive{margin-left:30px;margin-right:30px}}.c-pointer{cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    SukuTrackProgressBarComponent.ctorParameters = function () { return []; };
    SukuTrackProgressBarComponent.propDecorators = {
        progressStyleOne: [{ type: Input, args: ['progress-style-one',] }],
        progressStyleTwo: [{ type: Input, args: ['progress-style-two',] }],
        progressStyleThree: [{ type: Input, args: ['progress-style-three',] }],
        headingOne: [{ type: Input, args: ['heading-one',] }],
        headingTwo: [{ type: Input, args: ['heading-two',] }],
        headingThree: [{ type: Input, args: ['heading-three',] }],
        headingOneId: [{ type: Input, args: ['heading-one-id',] }],
        headingTwoId: [{ type: Input, args: ['heading-two-id',] }],
        headingThreeId: [{ type: Input, args: ['heading-three-id',] }],
        customHeadingOneClass: [{ type: Input, args: ['custom-heading-one-class',] }],
        customHeadingTwoClass: [{ type: Input, args: ['custom-heading-two-class',] }],
        customHeadingThreeClass: [{ type: Input, args: ['custom-heading-three-class',] }],
        progressBarLabelOne: [{ type: Input, args: ['progress-bar-label-one',] }],
        progressBarLabelTwo: [{ type: Input, args: ['progress-bar-label-two',] }],
        progressBarLabelThree: [{ type: Input, args: ['progress-bar-label-three',] }],
        tickSignCustomClass: [{ type: Input, args: ['tick-sign-custom-class',] }],
        customHeadingCustomClass: [{ type: Input, args: ['custom-heading-custom-class',] }],
        progressCustomClass: [{ type: Input, args: ['progress-custom-class',] }],
        customProgressTitle: [{ type: Input, args: ['custom-progress-title',] }],
        contentCustomClass: [{ type: Input, args: ['content-custom-class',] }],
        enablePointer: [{ type: Input, args: ['enable-pointer',] }],
        progressOneAction: [{ type: Output }],
        progressTwoAction: [{ type: Output }],
        progressThreeAction: [{ type: Output }]
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
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.progressBarLabelOne;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.progressBarLabelTwo;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.progressBarLabelThree;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.tickSignCustomClass;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.customHeadingCustomClass;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.progressCustomClass;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.customProgressTitle;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.contentCustomClass;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.enablePointer;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.progressOneAction;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.progressTwoAction;
    /** @type {?} */
    SukuTrackProgressBarComponent.prototype.progressThreeAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmFjay1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyL3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQThCRTtRQXhCNkIscUJBQWdCLEdBQUcsbUJBQW1CLENBQUM7UUFDdkMscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDbEMsdUJBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDakQsZUFBVSxHQUFHLGtCQUFrQixDQUFDO1FBQ2hDLGVBQVUsR0FBRyxrQkFBa0IsQ0FBQztRQUM5QixpQkFBWSxHQUFHLGlCQUFpQixDQUFDO1FBQ2hDLGlCQUFZLEdBQUcsY0FBYyxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsZUFBZSxDQUFDO1FBQzdCLG1CQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3hCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUMzQiwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDekIsNEJBQXVCLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLHdCQUFtQixHQUFHLEdBQUcsQ0FBQztRQUMxQix3QkFBbUIsR0FBRyxHQUFHLENBQUM7UUFDeEIsMEJBQXFCLEdBQUcsR0FBRyxDQUFDO1FBQzlCLHdCQUFtQixHQUFHLFVBQVUsQ0FBQztRQUM1Qiw2QkFBd0IsR0FBRyxzQkFBc0IsQ0FBQztRQUN4RCx3QkFBbUIsR0FBRyxzQkFBc0IsQ0FBQztRQUM3Qyx3QkFBbUIsR0FBRyxlQUFlLENBQUM7UUFDdkMsdUJBQWtCLEdBQUcsYUFBYSxDQUFDO1FBQ3pDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2Qyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFakIsZ0RBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBakNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxncEVBQXVEOztpQkFFeEQ7Ozs7O21DQUVFLEtBQUssU0FBQyxvQkFBb0I7bUNBQzFCLEtBQUssU0FBQyxvQkFBb0I7cUNBQzFCLEtBQUssU0FBQyxzQkFBc0I7NkJBQzVCLEtBQUssU0FBQyxhQUFhOzZCQUNuQixLQUFLLFNBQUMsYUFBYTsrQkFDbkIsS0FBSyxTQUFDLGVBQWU7K0JBQ3JCLEtBQUssU0FBQyxnQkFBZ0I7K0JBQ3RCLEtBQUssU0FBQyxnQkFBZ0I7aUNBQ3RCLEtBQUssU0FBQyxrQkFBa0I7d0NBQ3hCLEtBQUssU0FBQywwQkFBMEI7d0NBQ2hDLEtBQUssU0FBQywwQkFBMEI7MENBQ2hDLEtBQUssU0FBQyw0QkFBNEI7c0NBQ2xDLEtBQUssU0FBQyx3QkFBd0I7c0NBQzlCLEtBQUssU0FBQyx3QkFBd0I7d0NBQzlCLEtBQUssU0FBQywwQkFBMEI7c0NBQ2hDLEtBQUssU0FBQyx3QkFBd0I7MkNBQzlCLEtBQUssU0FBQyw2QkFBNkI7c0NBQ25DLEtBQUssU0FBQyx1QkFBdUI7c0NBQzdCLEtBQUssU0FBQyx1QkFBdUI7cUNBQzdCLEtBQUssU0FBQyxzQkFBc0I7Z0NBQzVCLEtBQUssU0FBQyxnQkFBZ0I7b0NBQ3RCLE1BQU07b0NBQ04sTUFBTTtzQ0FDTixNQUFNOztJQU1ULG9DQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0E5QlksNkJBQTZCOzs7SUFDeEMseURBQW9FOztJQUNwRSx5REFBaUU7O0lBQ2pFLDJEQUF1RTs7SUFDdkUsbURBQXNEOztJQUN0RCxtREFBc0Q7O0lBQ3RELHFEQUF5RDs7SUFDekQscURBQXVEOztJQUN2RCxxREFBd0Q7O0lBQ3hELHVEQUEyRDs7SUFDM0QsOERBQThEOztJQUM5RCw4REFBOEQ7O0lBQzlELGdFQUFrRTs7SUFDbEUsNERBQTJEOztJQUMzRCw0REFBMkQ7O0lBQzNELDhEQUErRDs7SUFDL0QsNERBQWtFOztJQUNsRSxpRUFBd0Y7O0lBQ3hGLDREQUE2RTs7SUFDN0UsNERBQXNFOztJQUN0RSwyREFBa0U7O0lBQ2xFLHNEQUErQzs7SUFDL0MsMERBQWlEOztJQUNqRCwwREFBaUQ7O0lBQ2pELDREQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS10cmFjay1wcm9ncmVzcy1iYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXRyYWNrLXByb2dyZXNzLWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS10cmFjay1wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdVRyYWNrUHJvZ3Jlc3NCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtb25lJykgcHJvZ3Jlc3NTdHlsZU9uZSA9ICdwcm9ncmVzc0NvbXBsZXRlZCc7XHJcbiAgQElucHV0KCdwcm9ncmVzcy1zdHlsZS10d28nKSBwcm9ncmVzc1N0eWxlVHdvID0gJ3Byb2dyZXNzQWN0aXZlJztcclxuICBASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLXRocmVlJykgcHJvZ3Jlc3NTdHlsZVRocmVlID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xyXG4gIEBJbnB1dCgnaGVhZGluZy1vbmUnKSBoZWFkaW5nT25lID0gJ1NFTEVDVCBBIFBST0RVQ1QnO1xyXG4gIEBJbnB1dCgnaGVhZGluZy10d28nKSBoZWFkaW5nVHdvID0gJ1RSQUNFIENPTVBPTkVOVFMnO1xyXG4gIEBJbnB1dCgnaGVhZGluZy10aHJlZScpIGhlYWRpbmdUaHJlZSA9ICdTSE9XIFRSQUNFIFRSRUUnO1xyXG4gIEBJbnB1dCgnaGVhZGluZy1vbmUtaWQnKSBoZWFkaW5nT25lSWQgPSAnZmlyc3RIZWFkaW5nJztcclxuICBASW5wdXQoJ2hlYWRpbmctdHdvLWlkJykgaGVhZGluZ1R3b0lkID0gJ3NlY29uZEhlYWRpbmcnO1xyXG4gIEBJbnB1dCgnaGVhZGluZy10aHJlZS1pZCcpIGhlYWRpbmdUaHJlZUlkID0gJ3RoaXJkSGVhZGluZyc7XHJcbiAgQElucHV0KCdjdXN0b20taGVhZGluZy1vbmUtY2xhc3MnKSBjdXN0b21IZWFkaW5nT25lQ2xhc3MgPSAnJztcclxuICBASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLXR3by1jbGFzcycpIGN1c3RvbUhlYWRpbmdUd29DbGFzcyA9ICcnO1xyXG4gIEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctdGhyZWUtY2xhc3MnKSBjdXN0b21IZWFkaW5nVGhyZWVDbGFzcyA9ICcnO1xyXG4gIEBJbnB1dCgncHJvZ3Jlc3MtYmFyLWxhYmVsLW9uZScpIHByb2dyZXNzQmFyTGFiZWxPbmUgPSAnMSc7XHJcbiAgQElucHV0KCdwcm9ncmVzcy1iYXItbGFiZWwtdHdvJykgcHJvZ3Jlc3NCYXJMYWJlbFR3byA9ICcyJztcclxuICBASW5wdXQoJ3Byb2dyZXNzLWJhci1sYWJlbC10aHJlZScpIHByb2dyZXNzQmFyTGFiZWxUaHJlZSA9ICczJztcclxuICBASW5wdXQoJ3RpY2stc2lnbi1jdXN0b20tY2xhc3MnKSB0aWNrU2lnbkN1c3RvbUNsYXNzID0gJ3RpY2tTaWduJztcclxuICBASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLWN1c3RvbS1jbGFzcycpIGN1c3RvbUhlYWRpbmdDdXN0b21DbGFzcyA9ICdjb2wtc20tOCBvZmZzZXQtc20tMic7XHJcbiAgQElucHV0KCdwcm9ncmVzcy1jdXN0b20tY2xhc3MnKSBwcm9ncmVzc0N1c3RvbUNsYXNzID0gJ2NvbC1zbS02IG9mZnNldC1zbS0zJztcclxuICBASW5wdXQoJ2N1c3RvbS1wcm9ncmVzcy10aXRsZScpIGN1c3RvbVByb2dyZXNzVGl0bGUgPSAncHJvZ3Jlc3NUaXRsZSc7XHJcbiAgQElucHV0KCdjb250ZW50LWN1c3RvbS1jbGFzcycpIGNvbnRlbnRDdXN0b21DbGFzcyA9ICd0ZXh0LWNlbnRlcic7XHJcbiAgQElucHV0KCdlbmFibGUtcG9pbnRlcicpIGVuYWJsZVBvaW50ZXIgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcHJvZ3Jlc3NPbmVBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHByb2dyZXNzVHdvQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwcm9ncmVzc1RocmVlQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19