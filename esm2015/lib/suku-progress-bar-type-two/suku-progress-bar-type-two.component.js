/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuProgressBarTypeTwoComponent {
    constructor() {
        this.progressStyleOne = 'progressActive';
        this.progressStyleTwo = 'progressUpcoming';
        this.progressStyleThree = 'progressUpcoming';
        this.progressStyleFour = 'progressUpcoming';
        this.progressStyleFive = 'progressUpcoming';
        this.customHeadingOneClass = '';
        this.customHeadingTwoClass = '';
        this.customHeadingThreeClass = '';
        this.customHeadingFourClass = '';
        this.customHeadingFiveClass = '';
        this.progressBarLabels = {
            labelOne: 'LISTING DETAILS',
            labelTwo: 'PRODUCT DETAILS',
            labelThree: 'PRODUCT TRACEABILITY',
            labelFour: 'TERMS OF SALE',
            labelFive: 'CONFIRM'
        };
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
        this.progressNamesCustomClass = 'col-sm-10 offset-sm-1';
        this.progressLabelOne = '1';
        this.progressLabelTwo = '2';
        this.progressLabelThree = '3';
        this.progressLabelFour = '4';
        this.progressLabelFive = '5';
        this.checkMarkCustomClass = 'checkmark';
        this.progressTextAlignCustomClass = 'text-center';
        this.progressBarLabelCustomClass = 'progressTitle';
        this.labelContentCustomClass = 'text-center';
        this.progressOneAction = new EventEmitter();
        this.progressTwoAction = new EventEmitter();
        this.progressThreeAction = new EventEmitter();
        this.progressFourAction = new EventEmitter();
        this.progressFiveAction = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SukuProgressBarTypeTwoComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-progress-bar-type-two',
                template: "<!-- <table class=\"col-sm-10 offset-sm-1\">\n  <tr class=\"pt-3\">\n    <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\">\n      <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\">\n      <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\">\n      <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\">\n      <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFive}} text-center\" id=\"{{progressBarIconId?.IconFiveId}}\">\n      <span *ngIf=\"(progressStyleFive == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFive == 'progressCompleted')\">5</span>\n    </td>\n  </tr>\n</table>\n<table class=\"col-sm-12 text-center mt-2\">\n  <tr id=\"txt\" class=\"pt-3\">\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelOneId}}\">\n      <span class=\"pl-4 p-xs-0 {{customHeadingOneClass}}\">{{progressBarLabels?.labelOne}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelTwoId}}\">\n      <span class=\"{{customHeadingTwoClass}} pl-4 p-xs-0\">{{progressBarLabels?.labelTwo}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelThreeId}}\">\n      <span class=\"{{customHeadingThreeClass}} p-xs-0\">{{progressBarLabels?.labelThree}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFourId}}\">\n      <span class=\"pr-3 {{customHeadingFourClass}} p-xs-0\">{{progressBarLabels?.labelFour}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFiveId}}\">\n      <span class=\"pr-4 {{customHeadingFiveClass}} p-xs-0\">{{progressBarLabels?.labelFive}}</span>\n    </td>\n  </tr>\n</table> -->\n\n<table [class]=\"progressNamesCustomClass\">\n  <tr class=\"pt-3\">\n    <td class=\"{{progressStyleOne}} {{progressTextAlignCustomClass}}\" id=\"{{progressBarIconId?.IconOneId}}\">\n      <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\" {{checkMarkCustomClass}} pt-2\"></span>\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">{{progressLabelOne}}</span>\n    </td>\n    <td>\n      <hr>\n    </td>\n    <td class=\"{{progressStyleTwo}} {{progressTextAlignCustomClass}}\" id=\"{{progressBarIconId?.IconTwoId}}\">\n      <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\" {{checkMarkCustomClass}} pt-2\"></span>\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">{{progressLabelTwo}}</span>\n    </td>\n    <td>\n      <hr>\n    </td>\n    <td class=\"{{progressStyleThree}} {{progressTextAlignCustomClass}}\" id=\"{{progressBarIconId?.IconThreeId}}\">\n      <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\" {{checkMarkCustomClass}} pt-2\"></span>\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">{{progressLabelThree}}</span>\n    </td>\n    <td>\n      <hr>\n    </td>\n    <td class=\"{{progressStyleFour}} {{progressTextAlignCustomClass}}\" id=\"{{progressBarIconId?.IconFourId}}\">\n      <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\" {{checkMarkCustomClass}} pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">{{progressLabelFour}}</span>\n    </td>\n    <td>\n      <hr>\n    </td>\n    <td class=\"{{progressStyleFive}} {{progressTextAlignCustomClass}}\" id=\"{{progressBarIconId?.IconFiveId}}\">\n      <span *ngIf=\"(progressStyleFive == 'progressCompleted')\" class=\" {{checkMarkCustomClass}} pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFive == 'progressCompleted')\">{{progressLabelFive}}</span>\n    </td>\n  </tr>\n</table>\n<table class=\"col-sm-12 {{labelContentCustomClass}} mt-2\">\n  <tr id=\"txt\" class=\"pt-3\">\n    <td [class]=\"progressBarLabelCustomClass\" id=\"{{progressBarTitleId?.labelOneId}}\">\n      <span class=\"pl-4 p-xs-0 {{customHeadingOneClass}}\"\n        (click)=\"progressOneAction.emit()\">{{progressBarLabels?.labelOne}}</span>\n    </td>\n    <td [class]=\"progressBarLabelCustomClass\" id=\"{{progressBarTitleId?.labelTwoId}}\">\n      <span class=\"{{customHeadingTwoClass}} pl-3 p-xs-0\"\n        (click)=\"progressTwoAction.emit()\">{{progressBarLabels?.labelTwo}}</span>\n    </td>\n    <td [class]=\"progressBarLabelCustomClass\" id=\"{{progressBarTitleId?.labelThreeId}}\">\n      <span class=\"{{customHeadingThreeClass}} p-xs-0\"\n        (click)=\"progressThreeAction.emit()\">{{progressBarLabels?.labelThree}}</span>\n    </td>\n    <td [class]=\"progressBarLabelCustomClass\" id=\"{{progressBarTitleId?.labelFourId}}\">\n      <span class=\"pr-3 {{customHeadingFourClass}} p-xs-0\"\n        (click)=\"progressFourAction.emit()\">{{progressBarLabels?.labelFour}}</span>\n    </td>\n    <td class=\" {{progressBarLabelCustomClass}} p-xs-2\" id=\"{{progressBarTitleId?.labelFiveId}}\">\n      <span class=\"pr-3 {{customHeadingFiveClass}} p-xs-0 p-xs-1\"\n        (click)=\"progressFiveAction.emit()\">{{progressBarLabels?.labelFive}}</span>\n    </td>\n  </tr>\n</table>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.progressActive{width:50px!important;height:50px;color:var(--suku-text-label-two);background:var(--suku-progressbar-active-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressUpcoming{width:50px!important;height:50px!important;color:var(--suku-text-label-two);background:var(--suku-progressbar-upcoming-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressCompleted{width:50px!important;height:50px!important;color:var(--suku-text-label-two);background-color:var(--suku-progressbar-completed-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressTitle{font-family:var(--suku-secondary-font);font-size:12px!important;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--suku-text-label-one)}.progress-bar-active{font-family:var(--suku-secondary-font);font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.tickSign{color:var(--suku-secondary-color)}tr#txt td{width:20%}.starChecked{color:#686868!important}.checkmark{display:inline-block}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid var(--suku-secondary-color);border-width:0 3px 3px 0;transform:rotate(45deg)}hr{margin-top:1rem!important;margin-bottom:1rem!important;border:0!important;border-top:1px solid #979797!important;opacity:.2!important}@media only screen and (max-width:990px){.progressTitle{font-size:8px!important}.p-xs-0{padding:0!important}.p-xs-1{margin-right:21px}}@media only screen and (max-width:425px){.p-xs-1{margin-right:0}.p-xs-2{padding-left:15px}}"]
            }] }
];
/** @nocollapse */
SukuProgressBarTypeTwoComponent.ctorParameters = () => [];
SukuProgressBarTypeTwoComponent.propDecorators = {
    progressStyleOne: [{ type: Input }],
    progressStyleTwo: [{ type: Input }],
    progressStyleThree: [{ type: Input }],
    progressStyleFour: [{ type: Input }],
    progressStyleFive: [{ type: Input }],
    customHeadingOneClass: [{ type: Input }],
    customHeadingTwoClass: [{ type: Input }],
    customHeadingThreeClass: [{ type: Input }],
    customHeadingFourClass: [{ type: Input }],
    customHeadingFiveClass: [{ type: Input }],
    progressBarLabels: [{ type: Input }],
    progressBarIconId: [{ type: Input }],
    progressBarTitleId: [{ type: Input }],
    progressNamesCustomClass: [{ type: Input, args: ['progress-names-custom-class',] }],
    progressLabelOne: [{ type: Input, args: ['progress-label-one',] }],
    progressLabelTwo: [{ type: Input, args: ['progress-label-two',] }],
    progressLabelThree: [{ type: Input, args: ['progress-label-three',] }],
    progressLabelFour: [{ type: Input, args: ['progress-label-four',] }],
    progressLabelFive: [{ type: Input, args: ['progress-label-five',] }],
    checkMarkCustomClass: [{ type: Input, args: ['check-mark-custom-class',] }],
    progressTextAlignCustomClass: [{ type: Input, args: ['progress-text-align-custom-class',] }],
    progressBarLabelCustomClass: [{ type: Input, args: ['progress-bar-label-custom-class',] }],
    labelContentCustomClass: [{ type: Input, args: ['label-content-custom-class',] }],
    progressOneAction: [{ type: Output }],
    progressTwoAction: [{ type: Output }],
    progressThreeAction: [{ type: Output }],
    progressFourAction: [{ type: Output }],
    progressFiveAction: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressStyleOne;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressStyleTwo;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressStyleThree;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressStyleFour;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressStyleFive;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.customHeadingOneClass;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.customHeadingTwoClass;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.customHeadingThreeClass;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.customHeadingFourClass;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.customHeadingFiveClass;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressBarLabels;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressBarIconId;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressBarTitleId;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressNamesCustomClass;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressLabelOne;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressLabelTwo;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressLabelThree;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressLabelFour;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressLabelFive;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.checkMarkCustomClass;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressTextAlignCustomClass;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressBarLabelCustomClass;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.labelContentCustomClass;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressOneAction;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressTwoAction;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressThreeAction;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressFourAction;
    /** @type {?} */
    SukuProgressBarTypeTwoComponent.prototype.progressFiveAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXItdHlwZS10d28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdHdvL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdHdvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sK0JBQStCO0lBeUQzQztRQXhEUyxxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUNwQyxxQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztRQUN0Qyx1QkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUN4QyxzQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQztRQUN2QyxzQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQztRQUN2QywwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDM0IsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLDRCQUF1QixHQUFHLEVBQUUsQ0FBQztRQUM3QiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDNUIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBRXJDLHNCQUFpQixHQUFHO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixVQUFVLEVBQUUsc0JBQXNCO1lBQ2xDLFNBQVMsRUFBRSxlQUFlO1lBQzFCLFNBQVMsRUFBRSxTQUFTO1NBQ3BCLENBQUM7UUFFRixzQkFBaUIsR0FBRztZQUNuQixTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxVQUFVLEVBQUUsYUFBYTtZQUN6QixVQUFVLEVBQUUsU0FBUztTQUNyQixDQUFDO1FBRUYsdUJBQWtCLEdBQUc7WUFDcEIsVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFlBQVksRUFBRSxxQkFBcUI7WUFDbkMsV0FBVyxFQUFFLGFBQWE7WUFDMUIsV0FBVyxFQUFFLFNBQVM7U0FDdEIsQ0FBQztRQUVvQyw2QkFBd0IsR0FBRyx1QkFBdUIsQ0FBQztRQUM1RCxxQkFBZ0IsR0FBRyxHQUFHLENBQUM7UUFDdkIscUJBQWdCLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLHVCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUMxQixzQkFBaUIsR0FBRyxHQUFHLENBQUM7UUFDeEIsc0JBQWlCLEdBQUcsR0FBRyxDQUFDO1FBRXBCLHlCQUFvQixHQUFHLFdBQVcsQ0FBQztRQUUxQixpQ0FBNEIsR0FBRyxhQUFhLENBQUM7UUFFOUMsZ0NBQTJCLEdBQUcsZUFBZSxDQUFDO1FBQ25ELDRCQUF1QixHQUFHLGFBQWEsQ0FBQztRQUduRSxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6Qyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFbEMsQ0FBQzs7OztJQUVqQixRQUFRLEtBQUssQ0FBQzs7O1lBaEVkLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsNEJBQTRCO2dCQUN0Qyx1NUxBQTBEOzthQUUxRDs7Ozs7K0JBRUMsS0FBSzsrQkFDTCxLQUFLO2lDQUNMLEtBQUs7Z0NBQ0wsS0FBSztnQ0FDTCxLQUFLO29DQUNMLEtBQUs7b0NBQ0wsS0FBSztzQ0FDTCxLQUFLO3FDQUNMLEtBQUs7cUNBQ0wsS0FBSztnQ0FDTCxLQUFLO2dDQVFMLEtBQUs7aUNBUUwsS0FBSzt1Q0FTTCxLQUFLLFNBQUMsNkJBQTZCOytCQUNuQyxLQUFLLFNBQUMsb0JBQW9COytCQUMxQixLQUFLLFNBQUMsb0JBQW9CO2lDQUMxQixLQUFLLFNBQUMsc0JBQXNCO2dDQUM1QixLQUFLLFNBQUMscUJBQXFCO2dDQUMzQixLQUFLLFNBQUMscUJBQXFCO21DQUUzQixLQUFLLFNBQUMseUJBQXlCOzJDQUUvQixLQUFLLFNBQUMsa0NBQWtDOzBDQUV4QyxLQUFLLFNBQUMsaUNBQWlDO3NDQUN2QyxLQUFLLFNBQUMsNEJBQTRCO2dDQUdsQyxNQUFNO2dDQUNOLE1BQU07a0NBQ04sTUFBTTtpQ0FDTixNQUFNO2lDQUNOLE1BQU07Ozs7SUF0RFAsMkRBQTZDOztJQUM3QywyREFBK0M7O0lBQy9DLDZEQUFpRDs7SUFDakQsNERBQWdEOztJQUNoRCw0REFBZ0Q7O0lBQ2hELGdFQUFvQzs7SUFDcEMsZ0VBQW9DOztJQUNwQyxrRUFBc0M7O0lBQ3RDLGlFQUFxQzs7SUFDckMsaUVBQXFDOztJQUNyQyw0REFPRTs7SUFDRiw0REFPRTs7SUFDRiw2REFPRTs7SUFFRixtRUFBeUY7O0lBQ3pGLDJEQUFvRDs7SUFDcEQsMkRBQW9EOztJQUNwRCw2REFBd0Q7O0lBQ3hELDREQUFzRDs7SUFDdEQsNERBQXNEOztJQUV0RCwrREFBcUU7O0lBRXJFLHVFQUF3Rjs7SUFFeEYsc0VBQXdGOztJQUN4RixrRUFBNkU7O0lBRzdFLDREQUFpRDs7SUFDakQsNERBQWlEOztJQUNqRCw4REFBbUQ7O0lBQ25ELDZEQUFrRDs7SUFDbEQsNkRBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LXByb2dyZXNzLWJhci10eXBlLXR3bycsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXByb2dyZXNzLWJhci10eXBlLXR3by5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdHdvLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVByb2dyZXNzQmFyVHlwZVR3b0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVPbmUgPSAncHJvZ3Jlc3NBY3RpdmUnO1xuXHRASW5wdXQoKSBwcm9ncmVzc1N0eWxlVHdvID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xuXHRASW5wdXQoKSBwcm9ncmVzc1N0eWxlVGhyZWUgPSAncHJvZ3Jlc3NVcGNvbWluZyc7XG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVGb3VyID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xuXHRASW5wdXQoKSBwcm9ncmVzc1N0eWxlRml2ZSA9ICdwcm9ncmVzc1VwY29taW5nJztcblx0QElucHV0KCkgY3VzdG9tSGVhZGluZ09uZUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIGN1c3RvbUhlYWRpbmdUd29DbGFzcyA9ICcnO1xuXHRASW5wdXQoKSBjdXN0b21IZWFkaW5nVGhyZWVDbGFzcyA9ICcnO1xuXHRASW5wdXQoKSBjdXN0b21IZWFkaW5nRm91ckNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIGN1c3RvbUhlYWRpbmdGaXZlQ2xhc3MgPSAnJztcblx0QElucHV0KClcblx0cHJvZ3Jlc3NCYXJMYWJlbHMgPSB7XG5cdFx0bGFiZWxPbmU6ICdMSVNUSU5HIERFVEFJTFMnLFxuXHRcdGxhYmVsVHdvOiAnUFJPRFVDVCBERVRBSUxTJyxcblx0XHRsYWJlbFRocmVlOiAnUFJPRFVDVCBUUkFDRUFCSUxJVFknLFxuXHRcdGxhYmVsRm91cjogJ1RFUk1TIE9GIFNBTEUnLFxuXHRcdGxhYmVsRml2ZTogJ0NPTkZJUk0nXG5cdH07XG5cdEBJbnB1dCgpXG5cdHByb2dyZXNzQmFySWNvbklkID0ge1xuXHRcdEljb25PbmVJZDogJ2xpc3RpbmdEZXRhaWxzJyxcblx0XHRJY29uVHdvSWQ6ICdwcm9kdWN0RGV0YWlscycsXG5cdFx0SWNvblRocmVlSWQ6ICdwcm9kdWN0VHJhY2VhYmlsaXR5Jyxcblx0XHRJY29uRm91cklkOiAndGVybXNPZlNhbGUnLFxuXHRcdEljb25GaXZlSWQ6ICdjb25maXJtJ1xuXHR9O1xuXHRASW5wdXQoKVxuXHRwcm9ncmVzc0JhclRpdGxlSWQgPSB7XG5cdFx0bGFiZWxPbmVJZDogJ2xpc3RpbmdEZXRhaWxzJyxcblx0XHRsYWJlbFR3b0lkOiAncHJvZHVjdERldGFpbHMnLFxuXHRcdGxhYmVsVGhyZWVJZDogJ3Byb2R1Y3RUcmFjZWFiaWxpdHknLFxuXHRcdGxhYmVsRm91cklkOiAndGVybXNPZlNhbGUnLFxuXHRcdGxhYmVsRml2ZUlkOiAnY29uZmlybSdcblx0fTtcblxuXHRASW5wdXQoJ3Byb2dyZXNzLW5hbWVzLWN1c3RvbS1jbGFzcycpIHByb2dyZXNzTmFtZXNDdXN0b21DbGFzcyA9ICdjb2wtc20tMTAgb2Zmc2V0LXNtLTEnO1xuXHRASW5wdXQoJ3Byb2dyZXNzLWxhYmVsLW9uZScpIHByb2dyZXNzTGFiZWxPbmUgPSAnMSc7XG5cdEBJbnB1dCgncHJvZ3Jlc3MtbGFiZWwtdHdvJykgcHJvZ3Jlc3NMYWJlbFR3byA9ICcyJztcblx0QElucHV0KCdwcm9ncmVzcy1sYWJlbC10aHJlZScpIHByb2dyZXNzTGFiZWxUaHJlZSA9ICczJztcblx0QElucHV0KCdwcm9ncmVzcy1sYWJlbC1mb3VyJykgcHJvZ3Jlc3NMYWJlbEZvdXIgPSAnNCc7XG5cdEBJbnB1dCgncHJvZ3Jlc3MtbGFiZWwtZml2ZScpIHByb2dyZXNzTGFiZWxGaXZlID0gJzUnO1xuXG5cdEBJbnB1dCgnY2hlY2stbWFyay1jdXN0b20tY2xhc3MnKSBjaGVja01hcmtDdXN0b21DbGFzcyA9ICdjaGVja21hcmsnO1xuXG5cdEBJbnB1dCgncHJvZ3Jlc3MtdGV4dC1hbGlnbi1jdXN0b20tY2xhc3MnKSBwcm9ncmVzc1RleHRBbGlnbkN1c3RvbUNsYXNzID0gJ3RleHQtY2VudGVyJztcblxuXHRASW5wdXQoJ3Byb2dyZXNzLWJhci1sYWJlbC1jdXN0b20tY2xhc3MnKSBwcm9ncmVzc0JhckxhYmVsQ3VzdG9tQ2xhc3MgPSAncHJvZ3Jlc3NUaXRsZSc7XG5cdEBJbnB1dCgnbGFiZWwtY29udGVudC1jdXN0b20tY2xhc3MnKSBsYWJlbENvbnRlbnRDdXN0b21DbGFzcyA9ICd0ZXh0LWNlbnRlcic7XG5cblxuXHRAT3V0cHV0KCkgcHJvZ3Jlc3NPbmVBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwcm9ncmVzc1R3b0FjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHByb2dyZXNzVGhyZWVBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwcm9ncmVzc0ZvdXJBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwcm9ncmVzc0ZpdmVBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgfVxufVxuIl19