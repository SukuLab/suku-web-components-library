/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuProgressBarTypeOneComponent {
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
            labelOne: 'RETRIEVE COMPANY DATA',
            labelTwo: 'COMPANY INFO',
            labelThree: 'LICENSING',
            labelFour: 'CONFIRMATION'
        };
        this.progressBarIconId = {
            IconOneId: 'listingDetails',
            IconTwoId: 'productDetails',
            IconThreeId: 'productTraceability',
            IconFourId: 'confirm'
        };
        this.progressBarTitleId = {
            labelOneId: 'listingDetails',
            labelTwoId: 'productDetails',
            labelThreeId: 'productTraceability',
            labelFourId: 'confirm'
        };
        this.customClass = 'col p-0 pt-4';
        this.progressBarTitle = 'PROGRESS';
        this.progressBarLabelOne = '1';
        this.progressBarLabelTwo = '2';
        this.progressBarLabelThree = '3';
        this.progressBarLabelFour = '4';
        this.labelTitleCustomClass = 'progressTitle';
        this.lableTextCustomClass = 'text-center';
        this.labelGridCustomClass = 'col-sm-10 offset-sm-1';
        this.progressBarNameGridAlign = 'col-sm-12';
        this.progressBarTitleClass = 'col-sm-2 pr-0 mnt-0';
        this.checkMarkCustomClass = 'checkmark';
        this.progressOneAction = new EventEmitter();
        this.progressTwoAction = new EventEmitter();
        this.progressThreeAction = new EventEmitter();
        this.progressFourAction = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SukuProgressBarTypeOneComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-progress-bar-type-one',
                template: "<!-- <div class=\"col p-0 pt-4\">\r\n  <div class=\"col-sm-12 \">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2 pr-0 mnt-0 \">\r\n        <span>\r\n          <h6><b>PROGRESS</b></h6>\r\n        </span>\r\n      </div>\r\n      <div class=\"col-sm-12 \">\r\n        <table class=\"col-sm-12\">\r\n          <tr class=\"pt-3\">\r\n            <td>\r\n              <hr>\r\n            </td>\r\n            <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\"\r\n              (click)=\"progressOneAction.emit()\">\r\n              <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\r\n              <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\r\n            </td>\r\n            <td>\r\n              <hr>\r\n            </td>\r\n            <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\"\r\n              (click)=\"progressTwoAction.emit()\">\r\n              <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\r\n              <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\r\n            </td>\r\n            <td>\r\n              <hr>\r\n            </td>\r\n            <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\"\r\n              (click)=\"progressThreeAction.emit()\">\r\n              <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\r\n              <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\r\n            </td>\r\n            <td>\r\n              <hr>\r\n            </td>\r\n            <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\"\r\n              (click)=\"progressFourAction.emit()\">\r\n              <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\r\n              <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\r\n            </td>\r\n            <td>\r\n              <hr>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"pt-2\">\r\n      <table class=\"col-sm-10 offset-sm-1 text-center\">\r\n        <tr id=\"txt\" class=\"pt-3\">\r\n          <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelOneId}}\">\r\n            <span class=\"{{customHeadingOneClass}} \"\r\n              (click)=\"progressOneAction.emit()\">{{progressBarLabels?.labelOne}}</span>\r\n          </td>\r\n          <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelTwoId}}\">\r\n            <span class=\" {{customHeadingTwoClass}} \"\r\n              (click)=\"progressTwoAction.emit()\">{{progressBarLabels?.labelTwo}}</span>\r\n          </td>\r\n          <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelThreeId}}\">\r\n            <span class=\"  {{customHeadingThreeClass}} \"\r\n              (click)=\"progressThreeAction.emit()\">{{progressBarLabels?.labelThree}}</span>\r\n          </td>\r\n          <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFourId}}\">\r\n            <span class=\" {{customHeadingFourClass}} \"\r\n              (click)=\"progressFourAction.emit()\">{{progressBarLabels?.labelFour}}</span>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n<div [class]=\"customClass\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"row\">\r\n      <div [class]=\"progressBarTitleClass\">\r\n        <span>\r\n          <h6 [style.color]=\"progressBarColor\" [style.font-size.rem]=\"progressBarFontSize\"\r\n            [style.font-weight]=\"progressBarFontWight\">\r\n            <b>{{progressBarTitle}}</b>\r\n          </h6>\r\n        </span>\r\n      </div>\r\n      <div class=\"col-sm-12\">\r\n        <table [class]=\"progressBarNameGridAlign\">\r\n          <tr class=\"pt-3\">\r\n            <td>\r\n              <hr>\r\n            </td>\r\n            <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\">\r\n              <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\" {{checkMarkCustomClass}} pt-2\"></span>\r\n              <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">{{progressBarLabelOne}}</span>\r\n            </td>\r\n            <td>\r\n              <hr>\r\n            </td>\r\n            <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\">\r\n              <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"{{checkMarkCustomClass}} pt-2\"></span>\r\n              <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">{{progressBarLabelTwo}}</span>\r\n            </td>\r\n            <td>\r\n              <hr>\r\n            </td>\r\n            <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\">\r\n              <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"{{checkMarkCustomClass}} pt-2\"></span>\r\n              <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">{{progressBarLabelThree}}</span>\r\n            </td>\r\n            <td>\r\n              <hr>\r\n            </td>\r\n            <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\">\r\n              <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"{{checkMarkCustomClass}} pt-2\"></span>\r\n              <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">{{progressBarLabelFour}}</span>\r\n            </td>\r\n            <td>\r\n              <hr>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"pt-2\">\r\n      <table class=\"{{labelGridCustomClass}} {{lableTextCustomClass}}\">\r\n        <tr id=\"txt\" class=\"pt-3\">\r\n          <td [class]=\"labelTitleCustomClass\" id=\"{{progressBarTitleId?.labelOneId}}\">\r\n            <span class=\"{{customHeadingOneClass}}\"\r\n              (click)=\"progressOneAction.emit()\">{{progressBarLabels?.labelOne}}</span>\r\n          </td>\r\n          <td [class]=\"labelTitleCustomClass\" id=\"{{progressBarTitleId?.labelTwoId}}\">\r\n            <span class=\" {{customHeadingTwoClass}}\"\r\n              (click)=\"progressTwoAction.emit()\">{{progressBarLabels?.labelTwo}}</span>\r\n          </td>\r\n          <td [class]=\"labelTitleCustomClass\" id=\"{{progressBarTitleId?.labelThreeId}}\">\r\n            <span class=\"{{customHeadingThreeClass}}\"\r\n              (click)=\"progressThreeAction.emit()\">{{progressBarLabels?.labelThree}}</span>\r\n          </td>\r\n          <td [class]=\"labelTitleCustomClass\" id=\"{{progressBarTitleId?.labelFourId}}\">\r\n            <span class=\"{{customHeadingFourClass}}\"\r\n              (click)=\"progressFourAction.emit()\">{{progressBarLabels?.labelFour}}</span>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.progressActive{width:50px!important;height:50px;color:var(--suku-text-label-two);background:var(--suku-progressbar-active-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressUpcoming{width:50px!important;height:50px!important;color:var(--suku-text-label-two);background:var(--suku-progressbar-upcoming-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressCompleted{width:50px!important;height:50px!important;color:var(--suku-text-label-two);background-color:var(--suku-progressbar-completed-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressTitle{font-family:var(--suku-secondary-font);font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--suku-text-label-one)}.tickSign{color:var(--suku-secondary-color)}tr#txt td{width:20%}.checkmark{display:inline-block}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid var(--suku-secondary-color);border-width:0 3px 3px 0;transform:rotate(45deg)}hr{margin-top:1rem!important;margin-bottom:1rem!important;border:0!important;border-top:1px solid #979797!important;opacity:.2!important}.mnt-0{margin-top:-1.1rem}"]
            }] }
];
/** @nocollapse */
SukuProgressBarTypeOneComponent.ctorParameters = () => [];
SukuProgressBarTypeOneComponent.propDecorators = {
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
    customClass: [{ type: Input }],
    progressBarTitle: [{ type: Input, args: ['progress-bar-title',] }],
    progressBarColor: [{ type: Input, args: ['progress-bar-color',] }],
    progressBarFontSize: [{ type: Input, args: ['progress-bar-font-size',] }],
    progressBarFontWight: [{ type: Input, args: ['progress-bar-font-wight',] }],
    progressBarLabelOne: [{ type: Input, args: ['progress-bar-label-one',] }],
    progressBarLabelTwo: [{ type: Input, args: ['progress-bar-label-two',] }],
    progressBarLabelThree: [{ type: Input, args: ['progress-bar-label-Three',] }],
    progressBarLabelFour: [{ type: Input, args: ['progress-bar-label-four',] }],
    labelTitleCustomClass: [{ type: Input, args: ['label-title-custom-class',] }],
    lableTextCustomClass: [{ type: Input, args: ['lable-text-custom-class',] }],
    labelGridCustomClass: [{ type: Input, args: ['label-grid-custom-class',] }],
    progressBarNameGridAlign: [{ type: Input, args: ['progress-bar-name-grid-align',] }],
    progressBarTitleClass: [{ type: Input, args: ['progress-bar-title-class',] }],
    checkMarkCustomClass: [{ type: Input, args: ['check-mark-custom-class',] }],
    progressOneAction: [{ type: Output }],
    progressTwoAction: [{ type: Output }],
    progressThreeAction: [{ type: Output }],
    progressFourAction: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressStyleOne;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressStyleTwo;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressStyleThree;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressStyleFour;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressStyleFive;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.customHeadingOneClass;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.customHeadingTwoClass;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.customHeadingThreeClass;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.customHeadingFourClass;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.customHeadingFiveClass;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressBarLabels;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressBarIconId;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressBarTitleId;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.customClass;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressBarTitle;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressBarColor;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressBarFontSize;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressBarFontWight;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressBarLabelOne;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressBarLabelTwo;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressBarLabelThree;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressBarLabelFour;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.labelTitleCustomClass;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.lableTextCustomClass;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.labelGridCustomClass;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressBarNameGridAlign;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressBarTitleClass;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.checkMarkCustomClass;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressOneAction;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressTwoAction;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressThreeAction;
    /** @type {?} */
    SukuProgressBarTypeOneComponent.prototype.progressFourAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXItdHlwZS1vbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sK0JBQStCO0lBMkQzQztRQTFEUyxxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUNwQyxxQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztRQUN0Qyx1QkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUN4QyxzQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQztRQUN2QyxzQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQztRQUN2QywwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDM0IsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLDRCQUF1QixHQUFHLEVBQUUsQ0FBQztRQUM3QiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDNUIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBRXJDLHNCQUFpQixHQUFHO1lBQ25CLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsUUFBUSxFQUFFLGNBQWM7WUFDeEIsVUFBVSxFQUFFLFdBQVc7WUFDdkIsU0FBUyxFQUFFLGNBQWM7U0FDekIsQ0FBQztRQUVGLHNCQUFpQixHQUFHO1lBQ25CLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFVBQVUsRUFBRSxTQUFTO1NBQ3JCLENBQUM7UUFFRix1QkFBa0IsR0FBRztZQUNwQixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFVBQVUsRUFBRSxnQkFBZ0I7WUFDNUIsWUFBWSxFQUFFLHFCQUFxQjtZQUNuQyxXQUFXLEVBQUUsU0FBUztTQUN0QixDQUFDO1FBQ08sZ0JBQVcsR0FBRyxjQUFjLENBQUM7UUFDVCxxQkFBZ0IsR0FBRyxVQUFVLENBQUM7UUFLMUIsd0JBQW1CLEdBQUcsR0FBRyxDQUFDO1FBQzFCLHdCQUFtQixHQUFHLEdBQUcsQ0FBQztRQUN4QiwwQkFBcUIsR0FBRyxHQUFHLENBQUM7UUFDN0IseUJBQW9CLEdBQUcsR0FBRyxDQUFDO1FBRTFCLDBCQUFxQixHQUFHLGVBQWUsQ0FBQztRQUN6Qyx5QkFBb0IsR0FBRyxhQUFhLENBQUM7UUFDckMseUJBQW9CLEdBQUcsdUJBQXVCLENBQUM7UUFFMUMsNkJBQXdCLEdBQUcsV0FBVyxDQUFDO1FBRTNDLDBCQUFxQixHQUFHLHFCQUFxQixDQUFDO1FBRS9DLHlCQUFvQixHQUFHLFdBQVcsQ0FBQztRQUUzRCxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6Qyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBR2xDLENBQUM7Ozs7SUFFakIsUUFBUSxLQUFLLENBQUM7OztZQWxFZCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsKzhOQUEwRDs7YUFFMUQ7Ozs7OytCQUVDLEtBQUs7K0JBQ0wsS0FBSztpQ0FDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSztvQ0FDTCxLQUFLO29DQUNMLEtBQUs7c0NBQ0wsS0FBSztxQ0FDTCxLQUFLO3FDQUNMLEtBQUs7Z0NBQ0wsS0FBSztnQ0FPTCxLQUFLO2lDQU9MLEtBQUs7MEJBT0wsS0FBSzsrQkFDTCxLQUFLLFNBQUMsb0JBQW9COytCQUMxQixLQUFLLFNBQUMsb0JBQW9CO2tDQUMxQixLQUFLLFNBQUMsd0JBQXdCO21DQUM5QixLQUFLLFNBQUMseUJBQXlCO2tDQUUvQixLQUFLLFNBQUMsd0JBQXdCO2tDQUM5QixLQUFLLFNBQUMsd0JBQXdCO29DQUM5QixLQUFLLFNBQUMsMEJBQTBCO21DQUNoQyxLQUFLLFNBQUMseUJBQXlCO29DQUUvQixLQUFLLFNBQUMsMEJBQTBCO21DQUNoQyxLQUFLLFNBQUMseUJBQXlCO21DQUMvQixLQUFLLFNBQUMseUJBQXlCO3VDQUUvQixLQUFLLFNBQUMsOEJBQThCO29DQUVwQyxLQUFLLFNBQUMsMEJBQTBCO21DQUVoQyxLQUFLLFNBQUMseUJBQXlCO2dDQUUvQixNQUFNO2dDQUNOLE1BQU07a0NBQ04sTUFBTTtpQ0FDTixNQUFNOzs7O0lBdkRQLDJEQUE2Qzs7SUFDN0MsMkRBQStDOztJQUMvQyw2REFBaUQ7O0lBQ2pELDREQUFnRDs7SUFDaEQsNERBQWdEOztJQUNoRCxnRUFBb0M7O0lBQ3BDLGdFQUFvQzs7SUFDcEMsa0VBQXNDOztJQUN0QyxpRUFBcUM7O0lBQ3JDLGlFQUFxQzs7SUFDckMsNERBTUU7O0lBQ0YsNERBTUU7O0lBQ0YsNkRBTUU7O0lBQ0Ysc0RBQXNDOztJQUN0QywyREFBMkQ7O0lBQzNELDJEQUE4Qzs7SUFDOUMsOERBQXFEOztJQUNyRCwrREFBdUQ7O0lBRXZELDhEQUEyRDs7SUFDM0QsOERBQTJEOztJQUMzRCxnRUFBK0Q7O0lBQy9ELCtEQUE2RDs7SUFFN0QsZ0VBQTJFOztJQUMzRSwrREFBdUU7O0lBQ3ZFLCtEQUFpRjs7SUFFakYsbUVBQThFOztJQUU5RSxnRUFBaUY7O0lBRWpGLCtEQUFxRTs7SUFFckUsNERBQWlEOztJQUNqRCw0REFBaUQ7O0lBQ2pELDhEQUFtRDs7SUFDbkQsNkRBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LXByb2dyZXNzLWJhci10eXBlLW9uZScsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LXByb2dyZXNzLWJhci10eXBlLW9uZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1UHJvZ3Jlc3NCYXJUeXBlT25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBwcm9ncmVzc1N0eWxlT25lID0gJ3Byb2dyZXNzQWN0aXZlJztcclxuXHRASW5wdXQoKSBwcm9ncmVzc1N0eWxlVHdvID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xyXG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVUaHJlZSA9ICdwcm9ncmVzc1VwY29taW5nJztcclxuXHRASW5wdXQoKSBwcm9ncmVzc1N0eWxlRm91ciA9ICdwcm9ncmVzc1VwY29taW5nJztcclxuXHRASW5wdXQoKSBwcm9ncmVzc1N0eWxlRml2ZSA9ICdwcm9ncmVzc1VwY29taW5nJztcclxuXHRASW5wdXQoKSBjdXN0b21IZWFkaW5nT25lQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoKSBjdXN0b21IZWFkaW5nVHdvQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoKSBjdXN0b21IZWFkaW5nVGhyZWVDbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgpIGN1c3RvbUhlYWRpbmdGb3VyQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoKSBjdXN0b21IZWFkaW5nRml2ZUNsYXNzID0gJyc7XHJcblx0QElucHV0KClcclxuXHRwcm9ncmVzc0JhckxhYmVscyA9IHtcclxuXHRcdGxhYmVsT25lOiAnUkVUUklFVkUgQ09NUEFOWSBEQVRBJyxcclxuXHRcdGxhYmVsVHdvOiAnQ09NUEFOWSBJTkZPJyxcclxuXHRcdGxhYmVsVGhyZWU6ICdMSUNFTlNJTkcnLFxyXG5cdFx0bGFiZWxGb3VyOiAnQ09ORklSTUFUSU9OJ1xyXG5cdH07XHJcblx0QElucHV0KClcclxuXHRwcm9ncmVzc0Jhckljb25JZCA9IHtcclxuXHRcdEljb25PbmVJZDogJ2xpc3RpbmdEZXRhaWxzJyxcclxuXHRcdEljb25Ud29JZDogJ3Byb2R1Y3REZXRhaWxzJyxcclxuXHRcdEljb25UaHJlZUlkOiAncHJvZHVjdFRyYWNlYWJpbGl0eScsXHJcblx0XHRJY29uRm91cklkOiAnY29uZmlybSdcclxuXHR9O1xyXG5cdEBJbnB1dCgpXHJcblx0cHJvZ3Jlc3NCYXJUaXRsZUlkID0ge1xyXG5cdFx0bGFiZWxPbmVJZDogJ2xpc3RpbmdEZXRhaWxzJyxcclxuXHRcdGxhYmVsVHdvSWQ6ICdwcm9kdWN0RGV0YWlscycsXHJcblx0XHRsYWJlbFRocmVlSWQ6ICdwcm9kdWN0VHJhY2VhYmlsaXR5JyxcclxuXHRcdGxhYmVsRm91cklkOiAnY29uZmlybSdcclxuXHR9O1xyXG5cdEBJbnB1dCgpIGN1c3RvbUNsYXNzID0gJ2NvbCBwLTAgcHQtNCc7XHJcblx0QElucHV0KCdwcm9ncmVzcy1iYXItdGl0bGUnKSBwcm9ncmVzc0JhclRpdGxlID0gJ1BST0dSRVNTJztcclxuXHRASW5wdXQoJ3Byb2dyZXNzLWJhci1jb2xvcicpIHByb2dyZXNzQmFyQ29sb3I7XHJcblx0QElucHV0KCdwcm9ncmVzcy1iYXItZm9udC1zaXplJykgcHJvZ3Jlc3NCYXJGb250U2l6ZTtcclxuXHRASW5wdXQoJ3Byb2dyZXNzLWJhci1mb250LXdpZ2h0JykgcHJvZ3Jlc3NCYXJGb250V2lnaHQ7XHJcblxyXG5cdEBJbnB1dCgncHJvZ3Jlc3MtYmFyLWxhYmVsLW9uZScpIHByb2dyZXNzQmFyTGFiZWxPbmUgPSAnMSc7XHJcblx0QElucHV0KCdwcm9ncmVzcy1iYXItbGFiZWwtdHdvJykgcHJvZ3Jlc3NCYXJMYWJlbFR3byA9ICcyJztcclxuXHRASW5wdXQoJ3Byb2dyZXNzLWJhci1sYWJlbC1UaHJlZScpIHByb2dyZXNzQmFyTGFiZWxUaHJlZSA9ICczJztcclxuXHRASW5wdXQoJ3Byb2dyZXNzLWJhci1sYWJlbC1mb3VyJykgcHJvZ3Jlc3NCYXJMYWJlbEZvdXIgPSAnNCc7XHJcblxyXG5cdEBJbnB1dCgnbGFiZWwtdGl0bGUtY3VzdG9tLWNsYXNzJykgbGFiZWxUaXRsZUN1c3RvbUNsYXNzID0gJ3Byb2dyZXNzVGl0bGUnO1xyXG5cdEBJbnB1dCgnbGFibGUtdGV4dC1jdXN0b20tY2xhc3MnKSBsYWJsZVRleHRDdXN0b21DbGFzcyA9ICd0ZXh0LWNlbnRlcic7XHJcblx0QElucHV0KCdsYWJlbC1ncmlkLWN1c3RvbS1jbGFzcycpIGxhYmVsR3JpZEN1c3RvbUNsYXNzID0gJ2NvbC1zbS0xMCBvZmZzZXQtc20tMSc7XHJcblxyXG5cdEBJbnB1dCgncHJvZ3Jlc3MtYmFyLW5hbWUtZ3JpZC1hbGlnbicpIHByb2dyZXNzQmFyTmFtZUdyaWRBbGlnbiA9ICdjb2wtc20tMTInO1xyXG5cclxuXHRASW5wdXQoJ3Byb2dyZXNzLWJhci10aXRsZS1jbGFzcycpIHByb2dyZXNzQmFyVGl0bGVDbGFzcyA9ICdjb2wtc20tMiBwci0wIG1udC0wJztcclxuXHJcblx0QElucHV0KCdjaGVjay1tYXJrLWN1c3RvbS1jbGFzcycpIGNoZWNrTWFya0N1c3RvbUNsYXNzID0gJ2NoZWNrbWFyayc7XHJcblxyXG5cdEBPdXRwdXQoKSBwcm9ncmVzc09uZUFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgcHJvZ3Jlc3NUd29BY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIHByb2dyZXNzVGhyZWVBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIHByb2dyZXNzRm91ckFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkgeyB9XHJcbn1cclxuIl19