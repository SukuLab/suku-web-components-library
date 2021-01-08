/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-track-progress-bar/suku-track-progress-bar.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmFjay1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyL3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0UsTUFBTSxPQUFPLDZCQUE2QjtJQXlCeEM7UUF4QjZCLHFCQUFnQixHQUFHLG1CQUFtQixDQUFDO1FBQ3ZDLHFCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ2xDLHVCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQ2pELGVBQVUsR0FBRyxrQkFBa0IsQ0FBQztRQUNoQyxlQUFVLEdBQUcsa0JBQWtCLENBQUM7UUFDOUIsaUJBQVksR0FBRyxpQkFBaUIsQ0FBQztRQUNoQyxpQkFBWSxHQUFHLGNBQWMsQ0FBQztRQUM5QixpQkFBWSxHQUFHLGVBQWUsQ0FBQztRQUM3QixtQkFBYyxHQUFHLGNBQWMsQ0FBQztRQUN4QiwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDM0IsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLDRCQUF1QixHQUFHLEVBQUUsQ0FBQztRQUNqQyx3QkFBbUIsR0FBRyxHQUFHLENBQUM7UUFDMUIsd0JBQW1CLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLDBCQUFxQixHQUFHLEdBQUcsQ0FBQztRQUM5Qix3QkFBbUIsR0FBRyxVQUFVLENBQUM7UUFDNUIsNkJBQXdCLEdBQUcsc0JBQXNCLENBQUM7UUFDeEQsd0JBQW1CLEdBQUcsc0JBQXNCLENBQUM7UUFDN0Msd0JBQW1CLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLHVCQUFrQixHQUFHLGFBQWEsQ0FBQztRQUN6QyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUNyQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLDRqRUFBdUQ7O2FBRXhEOzs7OzsrQkFFRSxLQUFLLFNBQUMsb0JBQW9COytCQUMxQixLQUFLLFNBQUMsb0JBQW9CO2lDQUMxQixLQUFLLFNBQUMsc0JBQXNCO3lCQUM1QixLQUFLLFNBQUMsYUFBYTt5QkFDbkIsS0FBSyxTQUFDLGFBQWE7MkJBQ25CLEtBQUssU0FBQyxlQUFlOzJCQUNyQixLQUFLLFNBQUMsZ0JBQWdCOzJCQUN0QixLQUFLLFNBQUMsZ0JBQWdCOzZCQUN0QixLQUFLLFNBQUMsa0JBQWtCO29DQUN4QixLQUFLLFNBQUMsMEJBQTBCO29DQUNoQyxLQUFLLFNBQUMsMEJBQTBCO3NDQUNoQyxLQUFLLFNBQUMsNEJBQTRCO2tDQUNsQyxLQUFLLFNBQUMsd0JBQXdCO2tDQUM5QixLQUFLLFNBQUMsd0JBQXdCO29DQUM5QixLQUFLLFNBQUMsMEJBQTBCO2tDQUNoQyxLQUFLLFNBQUMsd0JBQXdCO3VDQUM5QixLQUFLLFNBQUMsNkJBQTZCO2tDQUNuQyxLQUFLLFNBQUMsdUJBQXVCO2tDQUM3QixLQUFLLFNBQUMsdUJBQXVCO2lDQUM3QixLQUFLLFNBQUMsc0JBQXNCOzRCQUM1QixLQUFLLFNBQUMsZ0JBQWdCO2dDQUN0QixNQUFNO2dDQUNOLE1BQU07a0NBQ04sTUFBTTs7OztJQXZCUCx5REFBb0U7O0lBQ3BFLHlEQUFpRTs7SUFDakUsMkRBQXVFOztJQUN2RSxtREFBc0Q7O0lBQ3RELG1EQUFzRDs7SUFDdEQscURBQXlEOztJQUN6RCxxREFBdUQ7O0lBQ3ZELHFEQUF3RDs7SUFDeEQsdURBQTJEOztJQUMzRCw4REFBOEQ7O0lBQzlELDhEQUE4RDs7SUFDOUQsZ0VBQWtFOztJQUNsRSw0REFBMkQ7O0lBQzNELDREQUEyRDs7SUFDM0QsOERBQStEOztJQUMvRCw0REFBa0U7O0lBQ2xFLGlFQUF3Rjs7SUFDeEYsNERBQTZFOztJQUM3RSw0REFBc0U7O0lBQ3RFLDJEQUFrRTs7SUFDbEUsc0RBQStDOztJQUMvQywwREFBaUQ7O0lBQ2pELDBEQUFpRDs7SUFDakQsNERBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXRyYWNrLXByb2dyZXNzLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXRyYWNrLXByb2dyZXNzLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtdHJhY2stcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVRyYWNrUHJvZ3Jlc3NCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLW9uZScpIHByb2dyZXNzU3R5bGVPbmUgPSAncHJvZ3Jlc3NDb21wbGV0ZWQnO1xuICBASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLXR3bycpIHByb2dyZXNzU3R5bGVUd28gPSAncHJvZ3Jlc3NBY3RpdmUnO1xuICBASW5wdXQoJ3Byb2dyZXNzLXN0eWxlLXRocmVlJykgcHJvZ3Jlc3NTdHlsZVRocmVlID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xuICBASW5wdXQoJ2hlYWRpbmctb25lJykgaGVhZGluZ09uZSA9ICdTRUxFQ1QgQSBQUk9EVUNUJztcbiAgQElucHV0KCdoZWFkaW5nLXR3bycpIGhlYWRpbmdUd28gPSAnVFJBQ0UgQ09NUE9ORU5UUyc7XG4gIEBJbnB1dCgnaGVhZGluZy10aHJlZScpIGhlYWRpbmdUaHJlZSA9ICdTSE9XIFRSQUNFIFRSRUUnO1xuICBASW5wdXQoJ2hlYWRpbmctb25lLWlkJykgaGVhZGluZ09uZUlkID0gJ2ZpcnN0SGVhZGluZyc7XG4gIEBJbnB1dCgnaGVhZGluZy10d28taWQnKSBoZWFkaW5nVHdvSWQgPSAnc2Vjb25kSGVhZGluZyc7XG4gIEBJbnB1dCgnaGVhZGluZy10aHJlZS1pZCcpIGhlYWRpbmdUaHJlZUlkID0gJ3RoaXJkSGVhZGluZyc7XG4gIEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctb25lLWNsYXNzJykgY3VzdG9tSGVhZGluZ09uZUNsYXNzID0gJyc7XG4gIEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctdHdvLWNsYXNzJykgY3VzdG9tSGVhZGluZ1R3b0NsYXNzID0gJyc7XG4gIEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctdGhyZWUtY2xhc3MnKSBjdXN0b21IZWFkaW5nVGhyZWVDbGFzcyA9ICcnO1xuICBASW5wdXQoJ3Byb2dyZXNzLWJhci1sYWJlbC1vbmUnKSBwcm9ncmVzc0JhckxhYmVsT25lID0gJzEnO1xuICBASW5wdXQoJ3Byb2dyZXNzLWJhci1sYWJlbC10d28nKSBwcm9ncmVzc0JhckxhYmVsVHdvID0gJzInO1xuICBASW5wdXQoJ3Byb2dyZXNzLWJhci1sYWJlbC10aHJlZScpIHByb2dyZXNzQmFyTGFiZWxUaHJlZSA9ICczJztcbiAgQElucHV0KCd0aWNrLXNpZ24tY3VzdG9tLWNsYXNzJykgdGlja1NpZ25DdXN0b21DbGFzcyA9ICd0aWNrU2lnbic7XG4gIEBJbnB1dCgnY3VzdG9tLWhlYWRpbmctY3VzdG9tLWNsYXNzJykgY3VzdG9tSGVhZGluZ0N1c3RvbUNsYXNzID0gJ2NvbC1zbS04IG9mZnNldC1zbS0yJztcbiAgQElucHV0KCdwcm9ncmVzcy1jdXN0b20tY2xhc3MnKSBwcm9ncmVzc0N1c3RvbUNsYXNzID0gJ2NvbC1zbS02IG9mZnNldC1zbS0zJztcbiAgQElucHV0KCdjdXN0b20tcHJvZ3Jlc3MtdGl0bGUnKSBjdXN0b21Qcm9ncmVzc1RpdGxlID0gJ3Byb2dyZXNzVGl0bGUnO1xuICBASW5wdXQoJ2NvbnRlbnQtY3VzdG9tLWNsYXNzJykgY29udGVudEN1c3RvbUNsYXNzID0gJ3RleHQtY2VudGVyJztcbiAgQElucHV0KCdlbmFibGUtcG9pbnRlcicpIGVuYWJsZVBvaW50ZXIgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHByb2dyZXNzT25lQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHJvZ3Jlc3NUd29BY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwcm9ncmVzc1RocmVlQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==