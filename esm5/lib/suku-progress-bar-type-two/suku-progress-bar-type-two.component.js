/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuProgressBarTypeTwoComponent = /** @class */ (function () {
    function SukuProgressBarTypeTwoComponent() {
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
    SukuProgressBarTypeTwoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuProgressBarTypeTwoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-progress-bar-type-two',
                    template: "<!-- <table class=\"col-sm-10 offset-sm-1\">\n  <tr class=\"pt-3\">\n    <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\">\n      <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\">\n      <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\">\n      <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\">\n      <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\n    </td>\n    <td>\n      <hr class=\"hrLine\">\n    </td>\n    <td class=\"{{progressStyleFive}} text-center\" id=\"{{progressBarIconId?.IconFiveId}}\">\n      <span *ngIf=\"(progressStyleFive == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFive == 'progressCompleted')\">5</span>\n    </td>\n  </tr>\n</table>\n<table class=\"col-sm-12 text-center mt-2\">\n  <tr id=\"txt\" class=\"pt-3\">\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelOneId}}\">\n      <span class=\"pl-4 p-xs-0 {{customHeadingOneClass}}\">{{progressBarLabels?.labelOne}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelTwoId}}\">\n      <span class=\"{{customHeadingTwoClass}} pl-4 p-xs-0\">{{progressBarLabels?.labelTwo}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelThreeId}}\">\n      <span class=\"{{customHeadingThreeClass}} p-xs-0\">{{progressBarLabels?.labelThree}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFourId}}\">\n      <span class=\"pr-3 {{customHeadingFourClass}} p-xs-0\">{{progressBarLabels?.labelFour}}</span>\n    </td>\n    <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFiveId}}\">\n      <span class=\"pr-4 {{customHeadingFiveClass}} p-xs-0\">{{progressBarLabels?.labelFive}}</span>\n    </td>\n  </tr>\n</table> -->\n\n<table [class]=\"progressNamesCustomClass\">\n  <tr class=\"pt-3\">\n    <td class=\"{{progressStyleOne}} {{progressTextAlignCustomClass}}\" id=\"{{progressBarIconId?.IconOneId}}\">\n      <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\" {{checkMarkCustomClass}} pt-2\"></span>\n      <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">{{progressLabelOne}}</span>\n    </td>\n    <td>\n      <hr>\n    </td>\n    <td class=\"{{progressStyleTwo}} {{progressTextAlignCustomClass}}\" id=\"{{progressBarIconId?.IconTwoId}}\">\n      <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\" {{checkMarkCustomClass}} pt-2\"></span>\n      <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">{{progressLabelTwo}}</span>\n    </td>\n    <td>\n      <hr>\n    </td>\n    <td class=\"{{progressStyleThree}} {{progressTextAlignCustomClass}}\" id=\"{{progressBarIconId?.IconThreeId}}\">\n      <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\" {{checkMarkCustomClass}} pt-2\"></span>\n      <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">{{progressLabelThree}}</span>\n    </td>\n    <td>\n      <hr>\n    </td>\n    <td class=\"{{progressStyleFour}} {{progressTextAlignCustomClass}}\" id=\"{{progressBarIconId?.IconFourId}}\">\n      <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\" {{checkMarkCustomClass}} pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">{{progressLabelFour}}</span>\n    </td>\n    <td>\n      <hr>\n    </td>\n    <td class=\"{{progressStyleFive}} {{progressTextAlignCustomClass}}\" id=\"{{progressBarIconId?.IconFiveId}}\">\n      <span *ngIf=\"(progressStyleFive == 'progressCompleted')\" class=\" {{checkMarkCustomClass}} pt-2\"></span>\n      <span *ngIf=\"!(progressStyleFive == 'progressCompleted')\">{{progressLabelFive}}</span>\n    </td>\n  </tr>\n</table>\n<table class=\"col-sm-12 {{labelContentCustomClass}} mt-2\">\n  <tr id=\"txt\" class=\"pt-3\">\n    <td [class]=\"progressBarLabelCustomClass\" id=\"{{progressBarTitleId?.labelOneId}}\">\n      <span class=\"pl-4 p-xs-0 {{customHeadingOneClass}}\"\n        (click)=\"progressOneAction.emit()\">{{progressBarLabels?.labelOne}}</span>\n    </td>\n    <td [class]=\"progressBarLabelCustomClass\" id=\"{{progressBarTitleId?.labelTwoId}}\">\n      <span class=\"{{customHeadingTwoClass}} pl-3 p-xs-0\"\n        (click)=\"progressTwoAction.emit()\">{{progressBarLabels?.labelTwo}}</span>\n    </td>\n    <td [class]=\"progressBarLabelCustomClass\" id=\"{{progressBarTitleId?.labelThreeId}}\">\n      <span class=\"{{customHeadingThreeClass}} p-xs-0\"\n        (click)=\"progressThreeAction.emit()\">{{progressBarLabels?.labelThree}}</span>\n    </td>\n    <td [class]=\"progressBarLabelCustomClass\" id=\"{{progressBarTitleId?.labelFourId}}\">\n      <span class=\"pr-3 {{customHeadingFourClass}} p-xs-0\"\n        (click)=\"progressFourAction.emit()\">{{progressBarLabels?.labelFour}}</span>\n    </td>\n    <td class=\" {{progressBarLabelCustomClass}} p-xs-2\" id=\"{{progressBarTitleId?.labelFiveId}}\">\n      <span class=\"pr-3 {{customHeadingFiveClass}} p-xs-0 p-xs-1\"\n        (click)=\"progressFiveAction.emit()\">{{progressBarLabels?.labelFive}}</span>\n    </td>\n  </tr>\n</table>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.progressActive{width:50px!important;height:50px;color:var(--suku-text-label-two);background:var(--suku-progressbar-active-bg);border-radius:50%!important;font-family:var(--suku-primary-font)!important}.progressUpcoming{width:50px!important;height:50px!important;color:var(--suku-text-label-two);background:var(--suku-progressbar-upcoming-bg);border-radius:50%!important;font-family:var(--suku-primary-font)!important}.progressCompleted{width:50px!important;height:50px!important;color:var(--suku-text-label-two);background-color:var(--suku-progressbar-completed-bg);border-radius:50%!important;font-family:var(--suku-primary-font)!important}.progressTitle{font-family:var(--suku-secondary-font)!important;font-size:12px!important;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--suku-text-label-one)}.progress-bar-active{font-family:var(--suku-secondary-font)!important;font-size:12px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--black)}.tickSign{color:var(--suku-secondary-color)}tr#txt td{width:20%}.starChecked{color:#686868!important}.checkmark{display:inline-block}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid var(--suku-secondary-color);border-width:0 3px 3px 0;transform:rotate(45deg)}hr{margin-top:1rem!important;margin-bottom:1rem!important;border:0!important;border-top:1px solid #979797!important;opacity:.2!important}@media only screen and (max-width:990px){.progressTitle{font-size:8px!important}.p-xs-0{padding:0!important}.p-xs-1{margin-right:21px}}@media only screen and (max-width:425px){.p-xs-1{margin-right:0}.p-xs-2{padding-left:15px}}"]
                }] }
    ];
    /** @nocollapse */
    SukuProgressBarTypeTwoComponent.ctorParameters = function () { return []; };
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
    return SukuProgressBarTypeTwoComponent;
}());
export { SukuProgressBarTypeTwoComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXItdHlwZS10d28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdHdvL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdHdvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQThEQztRQXhEUyxxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUNwQyxxQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztRQUN0Qyx1QkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUN4QyxzQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQztRQUN2QyxzQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQztRQUN2QywwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDM0IsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLDRCQUF1QixHQUFHLEVBQUUsQ0FBQztRQUM3QiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDNUIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBRXJDLHNCQUFpQixHQUFHO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixVQUFVLEVBQUUsc0JBQXNCO1lBQ2xDLFNBQVMsRUFBRSxlQUFlO1lBQzFCLFNBQVMsRUFBRSxTQUFTO1NBQ3BCLENBQUM7UUFFRixzQkFBaUIsR0FBRztZQUNuQixTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxVQUFVLEVBQUUsYUFBYTtZQUN6QixVQUFVLEVBQUUsU0FBUztTQUNyQixDQUFDO1FBRUYsdUJBQWtCLEdBQUc7WUFDcEIsVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFlBQVksRUFBRSxxQkFBcUI7WUFDbkMsV0FBVyxFQUFFLGFBQWE7WUFDMUIsV0FBVyxFQUFFLFNBQVM7U0FDdEIsQ0FBQztRQUVvQyw2QkFBd0IsR0FBRyx1QkFBdUIsQ0FBQztRQUM1RCxxQkFBZ0IsR0FBRyxHQUFHLENBQUM7UUFDdkIscUJBQWdCLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLHVCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUMxQixzQkFBaUIsR0FBRyxHQUFHLENBQUM7UUFDeEIsc0JBQWlCLEdBQUcsR0FBRyxDQUFDO1FBRXBCLHlCQUFvQixHQUFHLFdBQVcsQ0FBQztRQUUxQixpQ0FBNEIsR0FBRyxhQUFhLENBQUM7UUFFOUMsZ0NBQTJCLEdBQUcsZUFBZSxDQUFDO1FBQ25ELDRCQUF1QixHQUFHLGFBQWEsQ0FBQztRQUduRSxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6Qyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFbEMsQ0FBQzs7OztJQUVqQixrREFBUTs7O0lBQVIsY0FBYSxDQUFDOztnQkFoRWQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLHU1TEFBMEQ7O2lCQUUxRDs7Ozs7bUNBRUMsS0FBSzttQ0FDTCxLQUFLO3FDQUNMLEtBQUs7b0NBQ0wsS0FBSztvQ0FDTCxLQUFLO3dDQUNMLEtBQUs7d0NBQ0wsS0FBSzswQ0FDTCxLQUFLO3lDQUNMLEtBQUs7eUNBQ0wsS0FBSztvQ0FDTCxLQUFLO29DQVFMLEtBQUs7cUNBUUwsS0FBSzsyQ0FTTCxLQUFLLFNBQUMsNkJBQTZCO21DQUNuQyxLQUFLLFNBQUMsb0JBQW9CO21DQUMxQixLQUFLLFNBQUMsb0JBQW9CO3FDQUMxQixLQUFLLFNBQUMsc0JBQXNCO29DQUM1QixLQUFLLFNBQUMscUJBQXFCO29DQUMzQixLQUFLLFNBQUMscUJBQXFCO3VDQUUzQixLQUFLLFNBQUMseUJBQXlCOytDQUUvQixLQUFLLFNBQUMsa0NBQWtDOzhDQUV4QyxLQUFLLFNBQUMsaUNBQWlDOzBDQUN2QyxLQUFLLFNBQUMsNEJBQTRCO29DQUdsQyxNQUFNO29DQUNOLE1BQU07c0NBQ04sTUFBTTtxQ0FDTixNQUFNO3FDQUNOLE1BQU07O0lBS1Isc0NBQUM7Q0FBQSxBQWpFRCxJQWlFQztTQTVEWSwrQkFBK0I7OztJQUMzQywyREFBNkM7O0lBQzdDLDJEQUErQzs7SUFDL0MsNkRBQWlEOztJQUNqRCw0REFBZ0Q7O0lBQ2hELDREQUFnRDs7SUFDaEQsZ0VBQW9DOztJQUNwQyxnRUFBb0M7O0lBQ3BDLGtFQUFzQzs7SUFDdEMsaUVBQXFDOztJQUNyQyxpRUFBcUM7O0lBQ3JDLDREQU9FOztJQUNGLDREQU9FOztJQUNGLDZEQU9FOztJQUVGLG1FQUF5Rjs7SUFDekYsMkRBQW9EOztJQUNwRCwyREFBb0Q7O0lBQ3BELDZEQUF3RDs7SUFDeEQsNERBQXNEOztJQUN0RCw0REFBc0Q7O0lBRXRELCtEQUFxRTs7SUFFckUsdUVBQXdGOztJQUV4RixzRUFBd0Y7O0lBQ3hGLGtFQUE2RTs7SUFHN0UsNERBQWlEOztJQUNqRCw0REFBaUQ7O0lBQ2pELDhEQUFtRDs7SUFDbkQsNkRBQWtEOztJQUNsRCw2REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdHdvJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtdHdvLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1wcm9ncmVzcy1iYXItdHlwZS10d28uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1UHJvZ3Jlc3NCYXJUeXBlVHdvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgcHJvZ3Jlc3NTdHlsZU9uZSA9ICdwcm9ncmVzc0FjdGl2ZSc7XG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVUd28gPSAncHJvZ3Jlc3NVcGNvbWluZyc7XG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVUaHJlZSA9ICdwcm9ncmVzc1VwY29taW5nJztcblx0QElucHV0KCkgcHJvZ3Jlc3NTdHlsZUZvdXIgPSAncHJvZ3Jlc3NVcGNvbWluZyc7XG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVGaXZlID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xuXHRASW5wdXQoKSBjdXN0b21IZWFkaW5nT25lQ2xhc3MgPSAnJztcblx0QElucHV0KCkgY3VzdG9tSGVhZGluZ1R3b0NsYXNzID0gJyc7XG5cdEBJbnB1dCgpIGN1c3RvbUhlYWRpbmdUaHJlZUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIGN1c3RvbUhlYWRpbmdGb3VyQ2xhc3MgPSAnJztcblx0QElucHV0KCkgY3VzdG9tSGVhZGluZ0ZpdmVDbGFzcyA9ICcnO1xuXHRASW5wdXQoKVxuXHRwcm9ncmVzc0JhckxhYmVscyA9IHtcblx0XHRsYWJlbE9uZTogJ0xJU1RJTkcgREVUQUlMUycsXG5cdFx0bGFiZWxUd286ICdQUk9EVUNUIERFVEFJTFMnLFxuXHRcdGxhYmVsVGhyZWU6ICdQUk9EVUNUIFRSQUNFQUJJTElUWScsXG5cdFx0bGFiZWxGb3VyOiAnVEVSTVMgT0YgU0FMRScsXG5cdFx0bGFiZWxGaXZlOiAnQ09ORklSTSdcblx0fTtcblx0QElucHV0KClcblx0cHJvZ3Jlc3NCYXJJY29uSWQgPSB7XG5cdFx0SWNvbk9uZUlkOiAnbGlzdGluZ0RldGFpbHMnLFxuXHRcdEljb25Ud29JZDogJ3Byb2R1Y3REZXRhaWxzJyxcblx0XHRJY29uVGhyZWVJZDogJ3Byb2R1Y3RUcmFjZWFiaWxpdHknLFxuXHRcdEljb25Gb3VySWQ6ICd0ZXJtc09mU2FsZScsXG5cdFx0SWNvbkZpdmVJZDogJ2NvbmZpcm0nXG5cdH07XG5cdEBJbnB1dCgpXG5cdHByb2dyZXNzQmFyVGl0bGVJZCA9IHtcblx0XHRsYWJlbE9uZUlkOiAnbGlzdGluZ0RldGFpbHMnLFxuXHRcdGxhYmVsVHdvSWQ6ICdwcm9kdWN0RGV0YWlscycsXG5cdFx0bGFiZWxUaHJlZUlkOiAncHJvZHVjdFRyYWNlYWJpbGl0eScsXG5cdFx0bGFiZWxGb3VySWQ6ICd0ZXJtc09mU2FsZScsXG5cdFx0bGFiZWxGaXZlSWQ6ICdjb25maXJtJ1xuXHR9O1xuXG5cdEBJbnB1dCgncHJvZ3Jlc3MtbmFtZXMtY3VzdG9tLWNsYXNzJykgcHJvZ3Jlc3NOYW1lc0N1c3RvbUNsYXNzID0gJ2NvbC1zbS0xMCBvZmZzZXQtc20tMSc7XG5cdEBJbnB1dCgncHJvZ3Jlc3MtbGFiZWwtb25lJykgcHJvZ3Jlc3NMYWJlbE9uZSA9ICcxJztcblx0QElucHV0KCdwcm9ncmVzcy1sYWJlbC10d28nKSBwcm9ncmVzc0xhYmVsVHdvID0gJzInO1xuXHRASW5wdXQoJ3Byb2dyZXNzLWxhYmVsLXRocmVlJykgcHJvZ3Jlc3NMYWJlbFRocmVlID0gJzMnO1xuXHRASW5wdXQoJ3Byb2dyZXNzLWxhYmVsLWZvdXInKSBwcm9ncmVzc0xhYmVsRm91ciA9ICc0Jztcblx0QElucHV0KCdwcm9ncmVzcy1sYWJlbC1maXZlJykgcHJvZ3Jlc3NMYWJlbEZpdmUgPSAnNSc7XG5cblx0QElucHV0KCdjaGVjay1tYXJrLWN1c3RvbS1jbGFzcycpIGNoZWNrTWFya0N1c3RvbUNsYXNzID0gJ2NoZWNrbWFyayc7XG5cblx0QElucHV0KCdwcm9ncmVzcy10ZXh0LWFsaWduLWN1c3RvbS1jbGFzcycpIHByb2dyZXNzVGV4dEFsaWduQ3VzdG9tQ2xhc3MgPSAndGV4dC1jZW50ZXInO1xuXG5cdEBJbnB1dCgncHJvZ3Jlc3MtYmFyLWxhYmVsLWN1c3RvbS1jbGFzcycpIHByb2dyZXNzQmFyTGFiZWxDdXN0b21DbGFzcyA9ICdwcm9ncmVzc1RpdGxlJztcblx0QElucHV0KCdsYWJlbC1jb250ZW50LWN1c3RvbS1jbGFzcycpIGxhYmVsQ29udGVudEN1c3RvbUNsYXNzID0gJ3RleHQtY2VudGVyJztcblxuXG5cdEBPdXRwdXQoKSBwcm9ncmVzc09uZUFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHByb2dyZXNzVHdvQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgcHJvZ3Jlc3NUaHJlZUFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHByb2dyZXNzRm91ckFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHByb2dyZXNzRml2ZUFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdG5nT25Jbml0KCkgeyB9XG59XG4iXX0=