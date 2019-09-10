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
                template: "<div class=\"responsive\">\n  <table class=\"{{progressCustomClass}}\">\n    <tr class=\"pt-3\">\n      <td class=\"{{progressStyleOne}} text-center\" (click)=\"progressOneAction.emit()\"\n        [ngClass]=\"{'c-pointer': enablePointer}\">\n        <i *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"fa fa-check {{tickSignCustomClass}}\"></i>\n        <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">{{progressBarLabelOne}}</span>\n      </td>\n      <td>\n        <hr>\n      </td>\n      <td class=\"{{progressStyleTwo}} text-center\" (click)=\"progressTwoAction.emit()\"\n        [ngClass]=\"{'c-pointer': enablePointer}\">\n        <i *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"fa fa-check {{tickSignCustomClass}}\"></i>\n        <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">{{progressBarLabelTwo}}</span>\n      </td>\n      <td>\n        <hr>\n      </td>\n      <td class=\"{{progressStyleThree}} text-center\" (click)=\"progressThreeAction.emit()\"\n        [ngClass]=\"{'c-pointer': enablePointer}\">\n        <i *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"fa fa-check {{tickSignCustomClass}}\"></i>\n        <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">{{progressBarLabelThree}}</span>\n      </td>\n    </tr>\n  </table>\n</div>\n<table class=\"{{customHeadingCustomClass}} {{contentCustomClass}}\">\n  <tr id=\"txt\">\n    <td class=\"{{customHeadingOneClass}} {{customProgressTitle}} pt-3\" (click)=\"progressOneAction.emit()\"\n      [ngClass]=\"{'c-pointer': enablePointer}\" [id]=\"headingOneId\">\n      {{headingOne}}\n    </td>\n    <td class=\"{{customHeadingTwoClass}} {{customProgressTitle}} pt-3\" (click)=\"progressTwoAction.emit()\"\n      [ngClass]=\"{'c-pointer': enablePointer}\" [id]=\"headingTwoId\">\n      {{headingTwo}}\n    </td>\n    <td class=\"{{customHeadingThreeClass}} {{customProgressTitle}} pt-3\" (click)=\"progressThreeAction.emit()\"\n      [ngClass]=\"{'c-pointer': enablePointer}\" [id]=\"headingThreeId\">\n      {{headingThree}}\n    </td>\n  </tr>\n</table>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.progressActive{width:50px!important;height:50px;color:var(--suku-text-label-two);background:var(--suku-progressbar-active-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressUpcoming{width:50px!important;height:50px!important;color:#a8a6a6;background:var(--suku-progressbar-upcoming-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressCompleted{width:50px!important;height:50px!important;color:var(--suku-text-label-two);background-color:var(--suku-progressbar-completed-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressTitle{font-family:var(--suku-secondary-font);font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--suku-text-label-one)}.tickSign{color:var(--suku-secondary-color)}tr#txt td{width:20%}@media only screen and (max-width:425px){.responsive{margin-left:30px;margin-right:30px}}.c-pointer{cursor:pointer}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmFjay1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyL3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sNkJBQTZCO0lBeUJ4QztRQXhCNkIscUJBQWdCLEdBQUcsbUJBQW1CLENBQUM7UUFDdkMscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDbEMsdUJBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDakQsZUFBVSxHQUFHLGtCQUFrQixDQUFDO1FBQ2hDLGVBQVUsR0FBRyxrQkFBa0IsQ0FBQztRQUM5QixpQkFBWSxHQUFHLGlCQUFpQixDQUFDO1FBQ2hDLGlCQUFZLEdBQUcsY0FBYyxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsZUFBZSxDQUFDO1FBQzdCLG1CQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3hCLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUMzQiwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDekIsNEJBQXVCLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLHdCQUFtQixHQUFHLEdBQUcsQ0FBQztRQUMxQix3QkFBbUIsR0FBRyxHQUFHLENBQUM7UUFDeEIsMEJBQXFCLEdBQUcsR0FBRyxDQUFDO1FBQzlCLHdCQUFtQixHQUFHLFVBQVUsQ0FBQztRQUM1Qiw2QkFBd0IsR0FBRyxzQkFBc0IsQ0FBQztRQUN4RCx3QkFBbUIsR0FBRyxzQkFBc0IsQ0FBQztRQUM3Qyx3QkFBbUIsR0FBRyxlQUFlLENBQUM7UUFDdkMsdUJBQWtCLEdBQUcsYUFBYSxDQUFDO1FBQ3pDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2Qyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsNGpFQUF1RDs7YUFFeEQ7Ozs7OytCQUVFLEtBQUssU0FBQyxvQkFBb0I7K0JBQzFCLEtBQUssU0FBQyxvQkFBb0I7aUNBQzFCLEtBQUssU0FBQyxzQkFBc0I7eUJBQzVCLEtBQUssU0FBQyxhQUFhO3lCQUNuQixLQUFLLFNBQUMsYUFBYTsyQkFDbkIsS0FBSyxTQUFDLGVBQWU7MkJBQ3JCLEtBQUssU0FBQyxnQkFBZ0I7MkJBQ3RCLEtBQUssU0FBQyxnQkFBZ0I7NkJBQ3RCLEtBQUssU0FBQyxrQkFBa0I7b0NBQ3hCLEtBQUssU0FBQywwQkFBMEI7b0NBQ2hDLEtBQUssU0FBQywwQkFBMEI7c0NBQ2hDLEtBQUssU0FBQyw0QkFBNEI7a0NBQ2xDLEtBQUssU0FBQyx3QkFBd0I7a0NBQzlCLEtBQUssU0FBQyx3QkFBd0I7b0NBQzlCLEtBQUssU0FBQywwQkFBMEI7a0NBQ2hDLEtBQUssU0FBQyx3QkFBd0I7dUNBQzlCLEtBQUssU0FBQyw2QkFBNkI7a0NBQ25DLEtBQUssU0FBQyx1QkFBdUI7a0NBQzdCLEtBQUssU0FBQyx1QkFBdUI7aUNBQzdCLEtBQUssU0FBQyxzQkFBc0I7NEJBQzVCLEtBQUssU0FBQyxnQkFBZ0I7Z0NBQ3RCLE1BQU07Z0NBQ04sTUFBTTtrQ0FDTixNQUFNOzs7O0lBdkJQLHlEQUFvRTs7SUFDcEUseURBQWlFOztJQUNqRSwyREFBdUU7O0lBQ3ZFLG1EQUFzRDs7SUFDdEQsbURBQXNEOztJQUN0RCxxREFBeUQ7O0lBQ3pELHFEQUF1RDs7SUFDdkQscURBQXdEOztJQUN4RCx1REFBMkQ7O0lBQzNELDhEQUE4RDs7SUFDOUQsOERBQThEOztJQUM5RCxnRUFBa0U7O0lBQ2xFLDREQUEyRDs7SUFDM0QsNERBQTJEOztJQUMzRCw4REFBK0Q7O0lBQy9ELDREQUFrRTs7SUFDbEUsaUVBQXdGOztJQUN4Riw0REFBNkU7O0lBQzdFLDREQUFzRTs7SUFDdEUsMkRBQWtFOztJQUNsRSxzREFBK0M7O0lBQy9DLDBEQUFpRDs7SUFDakQsMERBQWlEOztJQUNqRCw0REFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS10cmFjay1wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1VHJhY2tQcm9ncmVzc0JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtb25lJykgcHJvZ3Jlc3NTdHlsZU9uZSA9ICdwcm9ncmVzc0NvbXBsZXRlZCc7XG4gIEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtdHdvJykgcHJvZ3Jlc3NTdHlsZVR3byA9ICdwcm9ncmVzc0FjdGl2ZSc7XG4gIEBJbnB1dCgncHJvZ3Jlc3Mtc3R5bGUtdGhyZWUnKSBwcm9ncmVzc1N0eWxlVGhyZWUgPSAncHJvZ3Jlc3NVcGNvbWluZyc7XG4gIEBJbnB1dCgnaGVhZGluZy1vbmUnKSBoZWFkaW5nT25lID0gJ1NFTEVDVCBBIFBST0RVQ1QnO1xuICBASW5wdXQoJ2hlYWRpbmctdHdvJykgaGVhZGluZ1R3byA9ICdUUkFDRSBDT01QT05FTlRTJztcbiAgQElucHV0KCdoZWFkaW5nLXRocmVlJykgaGVhZGluZ1RocmVlID0gJ1NIT1cgVFJBQ0UgVFJFRSc7XG4gIEBJbnB1dCgnaGVhZGluZy1vbmUtaWQnKSBoZWFkaW5nT25lSWQgPSAnZmlyc3RIZWFkaW5nJztcbiAgQElucHV0KCdoZWFkaW5nLXR3by1pZCcpIGhlYWRpbmdUd29JZCA9ICdzZWNvbmRIZWFkaW5nJztcbiAgQElucHV0KCdoZWFkaW5nLXRocmVlLWlkJykgaGVhZGluZ1RocmVlSWQgPSAndGhpcmRIZWFkaW5nJztcbiAgQElucHV0KCdjdXN0b20taGVhZGluZy1vbmUtY2xhc3MnKSBjdXN0b21IZWFkaW5nT25lQ2xhc3MgPSAnJztcbiAgQElucHV0KCdjdXN0b20taGVhZGluZy10d28tY2xhc3MnKSBjdXN0b21IZWFkaW5nVHdvQ2xhc3MgPSAnJztcbiAgQElucHV0KCdjdXN0b20taGVhZGluZy10aHJlZS1jbGFzcycpIGN1c3RvbUhlYWRpbmdUaHJlZUNsYXNzID0gJyc7XG4gIEBJbnB1dCgncHJvZ3Jlc3MtYmFyLWxhYmVsLW9uZScpIHByb2dyZXNzQmFyTGFiZWxPbmUgPSAnMSc7XG4gIEBJbnB1dCgncHJvZ3Jlc3MtYmFyLWxhYmVsLXR3bycpIHByb2dyZXNzQmFyTGFiZWxUd28gPSAnMic7XG4gIEBJbnB1dCgncHJvZ3Jlc3MtYmFyLWxhYmVsLXRocmVlJykgcHJvZ3Jlc3NCYXJMYWJlbFRocmVlID0gJzMnO1xuICBASW5wdXQoJ3RpY2stc2lnbi1jdXN0b20tY2xhc3MnKSB0aWNrU2lnbkN1c3RvbUNsYXNzID0gJ3RpY2tTaWduJztcbiAgQElucHV0KCdjdXN0b20taGVhZGluZy1jdXN0b20tY2xhc3MnKSBjdXN0b21IZWFkaW5nQ3VzdG9tQ2xhc3MgPSAnY29sLXNtLTggb2Zmc2V0LXNtLTInO1xuICBASW5wdXQoJ3Byb2dyZXNzLWN1c3RvbS1jbGFzcycpIHByb2dyZXNzQ3VzdG9tQ2xhc3MgPSAnY29sLXNtLTYgb2Zmc2V0LXNtLTMnO1xuICBASW5wdXQoJ2N1c3RvbS1wcm9ncmVzcy10aXRsZScpIGN1c3RvbVByb2dyZXNzVGl0bGUgPSAncHJvZ3Jlc3NUaXRsZSc7XG4gIEBJbnB1dCgnY29udGVudC1jdXN0b20tY2xhc3MnKSBjb250ZW50Q3VzdG9tQ2xhc3MgPSAndGV4dC1jZW50ZXInO1xuICBASW5wdXQoJ2VuYWJsZS1wb2ludGVyJykgZW5hYmxlUG9pbnRlciA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcHJvZ3Jlc3NPbmVBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwcm9ncmVzc1R3b0FjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHByb2dyZXNzVGhyZWVBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19