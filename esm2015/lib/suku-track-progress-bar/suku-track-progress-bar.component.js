/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuTrackProgressBarComponent {
    constructor() {
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
    ngOnInit() {
    }
}
SukuTrackProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-track-progress-bar',
                template: "<div class=\"responsive\">\r\n  <table class=\"{{progressCustomClass}}\">\r\n    <tr class=\"pt-3\">\r\n      <td class=\"{{progressStyleOne}} text-center\" (click)=\"progressOneAction.emit()\"\r\n        [ngClass]=\"{'c-pointer': enablePointer}\">\r\n        <i *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"fa fa-check {{tickSignCustomClass}}\"></i>\r\n        <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">{{progressBarLabelOne}}</span>\r\n      </td>\r\n      <td>\r\n        <hr>\r\n      </td>\r\n      <td class=\"{{progressStyleTwo}} text-center\" (click)=\"progressTwoAction.emit()\"\r\n        [ngClass]=\"{'c-pointer': enablePointer}\">\r\n        <i *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"fa fa-check {{tickSignCustomClass}}\"></i>\r\n        <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">{{progressBarLabelTwo}}</span>\r\n      </td>\r\n      <td>\r\n        <hr>\r\n      </td>\r\n      <td class=\"{{progressStyleThree}} text-center\" (click)=\"progressThreeAction.emit()\"\r\n        [ngClass]=\"{'c-pointer': enablePointer}\">\r\n        <i *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"fa fa-check {{tickSignCustomClass}}\"></i>\r\n        <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">{{progressBarLabelThree}}</span>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n<table class=\"{{customHeadingCustomClass}} {{contentCustomClass}}\">\r\n  <tr id=\"txt\">\r\n    <td class=\"{{customHeadingOneClass}} {{customProgressTitle}} pt-3\" (click)=\"progressOneAction.emit()\"\r\n      [ngClass]=\"{'c-pointer': enablePointer}\" [id]=\"headingOneId\">\r\n      {{headingOne}}\r\n    </td>\r\n    <td class=\"{{customHeadingTwoClass}} {{customProgressTitle}} pt-3\" (click)=\"progressTwoAction.emit()\"\r\n      [ngClass]=\"{'c-pointer': enablePointer}\" [id]=\"headingTwoId\">\r\n      {{headingTwo}}\r\n    </td>\r\n    <td class=\"{{customHeadingThreeClass}} {{customProgressTitle}} pt-3\" (click)=\"progressThreeAction.emit()\"\r\n      [ngClass]=\"{'c-pointer': enablePointer}\" [id]=\"headingThreeId\">\r\n      {{headingThree}}\r\n    </td>\r\n  </tr>\r\n</table>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.progressActive{width:50px!important;height:50px;color:var(--suku-text-label-two);background:var(--suku-progressbar-active-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressUpcoming{width:50px!important;height:50px!important;color:#a8a6a6;background:var(--suku-progressbar-upcoming-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressCompleted{width:50px!important;height:50px!important;color:var(--suku-text-label-two);background-color:var(--suku-progressbar-completed-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressTitle{font-family:var(--suku-secondary-font);font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--suku-text-label-one)}.tickSign{color:var(--suku-secondary-color)}tr#txt td{width:20%}@media only screen and (max-width:425px){.responsive{margin-left:30px;margin-right:30px}}.c-pointer{cursor:pointer}"]
            }] }
];
/** @nocollapse */
SukuTrackProgressBarComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmFjay1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyL3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sNkJBQTZCO0lBeUJ4QztRQXhCNkIscUJBQWdCLEdBQUcsbUJBQW1CLENBQUM7UUFDdkMscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDbEMsdUJBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDakQsZUFBVSxHQUFHLGtCQUFrQixDQUFDO1FBQ2hDLGVBQVUsR0FBRyxrQkFBa0IsQ0FBQztRQUM5QixpQkFBWSxHQUFHLGlCQUFpQixDQUFDO1FBQ2hDLGlCQUFZLEdBQUcsY0FBYyxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsZUFBZSxDQUFDO1FBQzdCLG1CQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3hCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUMzQiwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDekIsNEJBQXVCLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLHdCQUFtQixHQUFHLEdBQUcsQ0FBQztRQUMxQix3QkFBbUIsR0FBRyxHQUFHLENBQUM7UUFDeEIsMEJBQXFCLEdBQUcsR0FBRyxDQUFDO1FBQzlCLHdCQUFtQixHQUFHLFVBQVUsQ0FBQztRQUM1Qiw2QkFBd0IsR0FBRyxzQkFBc0IsQ0FBQztRQUN4RCx3QkFBbUIsR0FBRyxzQkFBc0IsQ0FBQztRQUM3Qyx3QkFBbUIsR0FBRyxlQUFlLENBQUM7UUFDdkMsdUJBQWtCLEdBQUcsYUFBYSxDQUFDO1FBQ3pDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2Qyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsZ3BFQUF1RDs7YUFFeEQ7Ozs7OytCQUVFLEtBQUssU0FBQyxvQkFBb0I7K0JBQzFCLEtBQUssU0FBQyxvQkFBb0I7aUNBQzFCLEtBQUssU0FBQyxzQkFBc0I7eUJBQzVCLEtBQUssU0FBQyxhQUFhO3lCQUNuQixLQUFLLFNBQUMsYUFBYTsyQkFDbkIsS0FBSyxTQUFDLGVBQWU7MkJBQ3JCLEtBQUssU0FBQyxnQkFBZ0I7MkJBQ3RCLEtBQUssU0FBQyxnQkFBZ0I7NkJBQ3RCLEtBQUssU0FBQyxrQkFBa0I7b0NBQ3hCLEtBQUssU0FBQywwQkFBMEI7b0NBQ2hDLEtBQUssU0FBQywwQkFBMEI7c0NBQ2hDLEtBQUssU0FBQyw0QkFBNEI7a0NBQ2xDLEtBQUssU0FBQyx3QkFBd0I7a0NBQzlCLEtBQUssU0FBQyx3QkFBd0I7b0NBQzlCLEtBQUssU0FBQywwQkFBMEI7a0NBQ2hDLEtBQUssU0FBQyx3QkFBd0I7dUNBQzlCLEtBQUssU0FBQyw2QkFBNkI7a0NBQ25DLEtBQUssU0FBQyx1QkFBdUI7a0NBQzdCLEtBQUssU0FBQyx1QkFBdUI7aUNBQzdCLEtBQUssU0FBQyxzQkFBc0I7NEJBQzVCLEtBQUssU0FBQyxnQkFBZ0I7Z0NBQ3RCLE1BQU07Z0NBQ04sTUFBTTtrQ0FDTixNQUFNOzs7O0lBdkJQLHlEQUFvRTs7SUFDcEUseURBQWlFOztJQUNqRSwyREFBdUU7O0lBQ3ZFLG1EQUFzRDs7SUFDdEQsbURBQXNEOztJQUN0RCxxREFBeUQ7O0lBQ3pELHFEQUF1RDs7SUFDdkQscURBQXdEOztJQUN4RCx1REFBMkQ7O0lBQzNELDhEQUE4RDs7SUFDOUQsOERBQThEOztJQUM5RCxnRUFBa0U7O0lBQ2xFLDREQUEyRDs7SUFDM0QsNERBQTJEOztJQUMzRCw4REFBK0Q7O0lBQy9ELDREQUFrRTs7SUFDbEUsaUVBQXdGOztJQUN4Riw0REFBNkU7O0lBQzdFLDREQUFzRTs7SUFDdEUsMkRBQWtFOztJQUNsRSxzREFBK0M7O0lBQy9DLDBEQUFpRDs7SUFDakQsMERBQWlEOztJQUNqRCw0REFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS10cmFjay1wcm9ncmVzcy1iYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VUcmFja1Byb2dyZXNzQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLW9uZScpIHByb2dyZXNzU3R5bGVPbmUgPSAncHJvZ3Jlc3NDb21wbGV0ZWQnO1xyXG4gIEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtdHdvJykgcHJvZ3Jlc3NTdHlsZVR3byA9ICdwcm9ncmVzc0FjdGl2ZSc7XHJcbiAgQElucHV0KCdwcm9ncmVzcy1zdHlsZS10aHJlZScpIHByb2dyZXNzU3R5bGVUaHJlZSA9ICdwcm9ncmVzc1VwY29taW5nJztcclxuICBASW5wdXQoJ2hlYWRpbmctb25lJykgaGVhZGluZ09uZSA9ICdTRUxFQ1QgQSBQUk9EVUNUJztcclxuICBASW5wdXQoJ2hlYWRpbmctdHdvJykgaGVhZGluZ1R3byA9ICdUUkFDRSBDT01QT05FTlRTJztcclxuICBASW5wdXQoJ2hlYWRpbmctdGhyZWUnKSBoZWFkaW5nVGhyZWUgPSAnU0hPVyBUUkFDRSBUUkVFJztcclxuICBASW5wdXQoJ2hlYWRpbmctb25lLWlkJykgaGVhZGluZ09uZUlkID0gJ2ZpcnN0SGVhZGluZyc7XHJcbiAgQElucHV0KCdoZWFkaW5nLXR3by1pZCcpIGhlYWRpbmdUd29JZCA9ICdzZWNvbmRIZWFkaW5nJztcclxuICBASW5wdXQoJ2hlYWRpbmctdGhyZWUtaWQnKSBoZWFkaW5nVGhyZWVJZCA9ICd0aGlyZEhlYWRpbmcnO1xyXG4gIEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctb25lLWNsYXNzJykgY3VzdG9tSGVhZGluZ09uZUNsYXNzID0gJyc7XHJcbiAgQElucHV0KCdjdXN0b20taGVhZGluZy10d28tY2xhc3MnKSBjdXN0b21IZWFkaW5nVHdvQ2xhc3MgPSAnJztcclxuICBASW5wdXQoJ2N1c3RvbS1oZWFkaW5nLXRocmVlLWNsYXNzJykgY3VzdG9tSGVhZGluZ1RocmVlQ2xhc3MgPSAnJztcclxuICBASW5wdXQoJ3Byb2dyZXNzLWJhci1sYWJlbC1vbmUnKSBwcm9ncmVzc0JhckxhYmVsT25lID0gJzEnO1xyXG4gIEBJbnB1dCgncHJvZ3Jlc3MtYmFyLWxhYmVsLXR3bycpIHByb2dyZXNzQmFyTGFiZWxUd28gPSAnMic7XHJcbiAgQElucHV0KCdwcm9ncmVzcy1iYXItbGFiZWwtdGhyZWUnKSBwcm9ncmVzc0JhckxhYmVsVGhyZWUgPSAnMyc7XHJcbiAgQElucHV0KCd0aWNrLXNpZ24tY3VzdG9tLWNsYXNzJykgdGlja1NpZ25DdXN0b21DbGFzcyA9ICd0aWNrU2lnbic7XHJcbiAgQElucHV0KCdjdXN0b20taGVhZGluZy1jdXN0b20tY2xhc3MnKSBjdXN0b21IZWFkaW5nQ3VzdG9tQ2xhc3MgPSAnY29sLXNtLTggb2Zmc2V0LXNtLTInO1xyXG4gIEBJbnB1dCgncHJvZ3Jlc3MtY3VzdG9tLWNsYXNzJykgcHJvZ3Jlc3NDdXN0b21DbGFzcyA9ICdjb2wtc20tNiBvZmZzZXQtc20tMyc7XHJcbiAgQElucHV0KCdjdXN0b20tcHJvZ3Jlc3MtdGl0bGUnKSBjdXN0b21Qcm9ncmVzc1RpdGxlID0gJ3Byb2dyZXNzVGl0bGUnO1xyXG4gIEBJbnB1dCgnY29udGVudC1jdXN0b20tY2xhc3MnKSBjb250ZW50Q3VzdG9tQ2xhc3MgPSAndGV4dC1jZW50ZXInO1xyXG4gIEBJbnB1dCgnZW5hYmxlLXBvaW50ZXInKSBlbmFibGVQb2ludGVyID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHByb2dyZXNzT25lQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwcm9ncmVzc1R3b0FjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHJvZ3Jlc3NUaHJlZUFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==