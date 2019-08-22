/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuProgressBarTypeOneComponent = /** @class */ (function () {
    function SukuProgressBarTypeOneComponent() {
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
    SukuProgressBarTypeOneComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuProgressBarTypeOneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-progress-bar-type-one',
                    template: "<!-- <div class=\"col p-0 pt-4\">\r\n  <div class=\"col-sm-12 \">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2 pr-0 mnt-0 \">\r\n        <span>\r\n          <h6><b>PROGRESS</b></h6>\r\n        </span>\r\n      </div>\r\n      <div class=\"col-sm-12 \">\r\n        <table class=\"col-sm-12\">\r\n          <tr class=\"pt-3\">\r\n            <td>\r\n              <hr>\r\n            </td>\r\n            <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\"\r\n              (click)=\"progressOneAction.emit()\">\r\n              <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\r\n              <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\r\n            </td>\r\n            <td>\r\n              <hr>\r\n            </td>\r\n            <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\"\r\n              (click)=\"progressTwoAction.emit()\">\r\n              <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\r\n              <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\r\n            </td>\r\n            <td>\r\n              <hr>\r\n            </td>\r\n            <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\"\r\n              (click)=\"progressThreeAction.emit()\">\r\n              <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\r\n              <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\r\n            </td>\r\n            <td>\r\n              <hr>\r\n            </td>\r\n            <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\"\r\n              (click)=\"progressFourAction.emit()\">\r\n              <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\r\n              <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\r\n            </td>\r\n            <td>\r\n              <hr>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"pt-2\">\r\n      <table class=\"col-sm-10 offset-sm-1 text-center\">\r\n        <tr id=\"txt\" class=\"pt-3\">\r\n          <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelOneId}}\">\r\n            <span class=\"{{customHeadingOneClass}} \"\r\n              (click)=\"progressOneAction.emit()\">{{progressBarLabels?.labelOne}}</span>\r\n          </td>\r\n          <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelTwoId}}\">\r\n            <span class=\" {{customHeadingTwoClass}} \"\r\n              (click)=\"progressTwoAction.emit()\">{{progressBarLabels?.labelTwo}}</span>\r\n          </td>\r\n          <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelThreeId}}\">\r\n            <span class=\"  {{customHeadingThreeClass}} \"\r\n              (click)=\"progressThreeAction.emit()\">{{progressBarLabels?.labelThree}}</span>\r\n          </td>\r\n          <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFourId}}\">\r\n            <span class=\" {{customHeadingFourClass}} \"\r\n              (click)=\"progressFourAction.emit()\">{{progressBarLabels?.labelFour}}</span>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n<div [class]=\"customClass\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"row\">\r\n      <div [class]=\"progressBarTitleClass\">\r\n        <span>\r\n          <h6 [style.color]=\"progressBarColor\" [style.font-size.rem]=\"progressBarFontSize\"\r\n            [style.font-weight]=\"progressBarFontWight\">\r\n            <b>{{progressBarTitle}}</b>\r\n          </h6>\r\n        </span>\r\n      </div>\r\n      <div class=\"col-sm-12\">\r\n        <table [class]=\"progressBarNameGridAlign\">\r\n          <tr class=\"pt-3\">\r\n            <td>\r\n              <hr>\r\n            </td>\r\n            <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\">\r\n              <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\" {{checkMarkCustomClass}} pt-2\"></span>\r\n              <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">{{progressBarLabelOne}}</span>\r\n            </td>\r\n            <td>\r\n              <hr>\r\n            </td>\r\n            <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\">\r\n              <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"{{checkMarkCustomClass}} pt-2\"></span>\r\n              <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">{{progressBarLabelTwo}}</span>\r\n            </td>\r\n            <td>\r\n              <hr>\r\n            </td>\r\n            <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\">\r\n              <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"{{checkMarkCustomClass}} pt-2\"></span>\r\n              <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">{{progressBarLabelThree}}</span>\r\n            </td>\r\n            <td>\r\n              <hr>\r\n            </td>\r\n            <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\">\r\n              <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"{{checkMarkCustomClass}} pt-2\"></span>\r\n              <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">{{progressBarLabelFour}}</span>\r\n            </td>\r\n            <td>\r\n              <hr>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"pt-2\">\r\n      <table class=\"{{labelGridCustomClass}} {{lableTextCustomClass}}\">\r\n        <tr id=\"txt\" class=\"pt-3\">\r\n          <td [class]=\"labelTitleCustomClass\" id=\"{{progressBarTitleId?.labelOneId}}\">\r\n            <span class=\"{{customHeadingOneClass}}\"\r\n              (click)=\"progressOneAction.emit()\">{{progressBarLabels?.labelOne}}</span>\r\n          </td>\r\n          <td [class]=\"labelTitleCustomClass\" id=\"{{progressBarTitleId?.labelTwoId}}\">\r\n            <span class=\" {{customHeadingTwoClass}}\"\r\n              (click)=\"progressTwoAction.emit()\">{{progressBarLabels?.labelTwo}}</span>\r\n          </td>\r\n          <td [class]=\"labelTitleCustomClass\" id=\"{{progressBarTitleId?.labelThreeId}}\">\r\n            <span class=\"{{customHeadingThreeClass}}\"\r\n              (click)=\"progressThreeAction.emit()\">{{progressBarLabels?.labelThree}}</span>\r\n          </td>\r\n          <td [class]=\"labelTitleCustomClass\" id=\"{{progressBarTitleId?.labelFourId}}\">\r\n            <span class=\"{{customHeadingFourClass}}\"\r\n              (click)=\"progressFourAction.emit()\">{{progressBarLabels?.labelFour}}</span>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.progressActive{width:50px!important;height:50px;color:var(--suku-text-label-two);background:var(--suku-progressbar-active-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressUpcoming{width:50px!important;height:50px!important;color:var(--suku-text-label-two);background:var(--suku-progressbar-upcoming-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressCompleted{width:50px!important;height:50px!important;color:var(--suku-text-label-two);background-color:var(--suku-progressbar-completed-bg);border-radius:50%!important;font-family:var(--suku-primary-font)}.progressTitle{font-family:var(--suku-secondary-font);font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--suku-text-label-one)}.tickSign{color:var(--suku-secondary-color)}tr#txt td{width:20%}.checkmark{display:inline-block}.checkmark:after{content:'';display:block;width:8px;height:15px;border:solid var(--suku-secondary-color);border-width:0 3px 3px 0;transform:rotate(45deg)}hr{margin-top:1rem!important;margin-bottom:1rem!important;border:0!important;border-top:1px solid #979797!important;opacity:.2!important}.mnt-0{margin-top:-1.1rem}"]
                }] }
    ];
    /** @nocollapse */
    SukuProgressBarTypeOneComponent.ctorParameters = function () { return []; };
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
    return SukuProgressBarTypeOneComponent;
}());
export { SukuProgressBarTypeOneComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXItdHlwZS1vbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWdFQztRQTFEUyxxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUNwQyxxQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztRQUN0Qyx1QkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUN4QyxzQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQztRQUN2QyxzQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQztRQUN2QywwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDM0IsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLDRCQUF1QixHQUFHLEVBQUUsQ0FBQztRQUM3QiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDNUIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBRXJDLHNCQUFpQixHQUFHO1lBQ25CLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsUUFBUSxFQUFFLGNBQWM7WUFDeEIsVUFBVSxFQUFFLFdBQVc7WUFDdkIsU0FBUyxFQUFFLGNBQWM7U0FDekIsQ0FBQztRQUVGLHNCQUFpQixHQUFHO1lBQ25CLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFVBQVUsRUFBRSxTQUFTO1NBQ3JCLENBQUM7UUFFRix1QkFBa0IsR0FBRztZQUNwQixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFVBQVUsRUFBRSxnQkFBZ0I7WUFDNUIsWUFBWSxFQUFFLHFCQUFxQjtZQUNuQyxXQUFXLEVBQUUsU0FBUztTQUN0QixDQUFDO1FBQ08sZ0JBQVcsR0FBRyxjQUFjLENBQUM7UUFDVCxxQkFBZ0IsR0FBRyxVQUFVLENBQUM7UUFLMUIsd0JBQW1CLEdBQUcsR0FBRyxDQUFDO1FBQzFCLHdCQUFtQixHQUFHLEdBQUcsQ0FBQztRQUN4QiwwQkFBcUIsR0FBRyxHQUFHLENBQUM7UUFDN0IseUJBQW9CLEdBQUcsR0FBRyxDQUFDO1FBRTFCLDBCQUFxQixHQUFHLGVBQWUsQ0FBQztRQUN6Qyx5QkFBb0IsR0FBRyxhQUFhLENBQUM7UUFDckMseUJBQW9CLEdBQUcsdUJBQXVCLENBQUM7UUFFMUMsNkJBQXdCLEdBQUcsV0FBVyxDQUFDO1FBRTNDLDBCQUFxQixHQUFHLHFCQUFxQixDQUFDO1FBRS9DLHlCQUFvQixHQUFHLFdBQVcsQ0FBQztRQUUzRCxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6Qyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBR2xDLENBQUM7Ozs7SUFFakIsa0RBQVE7OztJQUFSLGNBQWEsQ0FBQzs7Z0JBbEVkLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsNEJBQTRCO29CQUN0QywrOE5BQTBEOztpQkFFMUQ7Ozs7O21DQUVDLEtBQUs7bUNBQ0wsS0FBSztxQ0FDTCxLQUFLO29DQUNMLEtBQUs7b0NBQ0wsS0FBSzt3Q0FDTCxLQUFLO3dDQUNMLEtBQUs7MENBQ0wsS0FBSzt5Q0FDTCxLQUFLO3lDQUNMLEtBQUs7b0NBQ0wsS0FBSztvQ0FPTCxLQUFLO3FDQU9MLEtBQUs7OEJBT0wsS0FBSzttQ0FDTCxLQUFLLFNBQUMsb0JBQW9CO21DQUMxQixLQUFLLFNBQUMsb0JBQW9CO3NDQUMxQixLQUFLLFNBQUMsd0JBQXdCO3VDQUM5QixLQUFLLFNBQUMseUJBQXlCO3NDQUUvQixLQUFLLFNBQUMsd0JBQXdCO3NDQUM5QixLQUFLLFNBQUMsd0JBQXdCO3dDQUM5QixLQUFLLFNBQUMsMEJBQTBCO3VDQUNoQyxLQUFLLFNBQUMseUJBQXlCO3dDQUUvQixLQUFLLFNBQUMsMEJBQTBCO3VDQUNoQyxLQUFLLFNBQUMseUJBQXlCO3VDQUMvQixLQUFLLFNBQUMseUJBQXlCOzJDQUUvQixLQUFLLFNBQUMsOEJBQThCO3dDQUVwQyxLQUFLLFNBQUMsMEJBQTBCO3VDQUVoQyxLQUFLLFNBQUMseUJBQXlCO29DQUUvQixNQUFNO29DQUNOLE1BQU07c0NBQ04sTUFBTTtxQ0FDTixNQUFNOztJQU1SLHNDQUFDO0NBQUEsQUFuRUQsSUFtRUM7U0E5RFksK0JBQStCOzs7SUFDM0MsMkRBQTZDOztJQUM3QywyREFBK0M7O0lBQy9DLDZEQUFpRDs7SUFDakQsNERBQWdEOztJQUNoRCw0REFBZ0Q7O0lBQ2hELGdFQUFvQzs7SUFDcEMsZ0VBQW9DOztJQUNwQyxrRUFBc0M7O0lBQ3RDLGlFQUFxQzs7SUFDckMsaUVBQXFDOztJQUNyQyw0REFNRTs7SUFDRiw0REFNRTs7SUFDRiw2REFNRTs7SUFDRixzREFBc0M7O0lBQ3RDLDJEQUEyRDs7SUFDM0QsMkRBQThDOztJQUM5Qyw4REFBcUQ7O0lBQ3JELCtEQUF1RDs7SUFFdkQsOERBQTJEOztJQUMzRCw4REFBMkQ7O0lBQzNELGdFQUErRDs7SUFDL0QsK0RBQTZEOztJQUU3RCxnRUFBMkU7O0lBQzNFLCtEQUF1RTs7SUFDdkUsK0RBQWlGOztJQUVqRixtRUFBOEU7O0lBRTlFLGdFQUFpRjs7SUFFakYsK0RBQXFFOztJQUVyRSw0REFBaUQ7O0lBQ2pELDREQUFpRDs7SUFDakQsOERBQW1EOztJQUNuRCw2REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1wcm9ncmVzcy1iYXItdHlwZS1vbmUuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VQcm9ncmVzc0JhclR5cGVPbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVPbmUgPSAncHJvZ3Jlc3NBY3RpdmUnO1xyXG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVUd28gPSAncHJvZ3Jlc3NVcGNvbWluZyc7XHJcblx0QElucHV0KCkgcHJvZ3Jlc3NTdHlsZVRocmVlID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xyXG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVGb3VyID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xyXG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVGaXZlID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xyXG5cdEBJbnB1dCgpIGN1c3RvbUhlYWRpbmdPbmVDbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgpIGN1c3RvbUhlYWRpbmdUd29DbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgpIGN1c3RvbUhlYWRpbmdUaHJlZUNsYXNzID0gJyc7XHJcblx0QElucHV0KCkgY3VzdG9tSGVhZGluZ0ZvdXJDbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgpIGN1c3RvbUhlYWRpbmdGaXZlQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoKVxyXG5cdHByb2dyZXNzQmFyTGFiZWxzID0ge1xyXG5cdFx0bGFiZWxPbmU6ICdSRVRSSUVWRSBDT01QQU5ZIERBVEEnLFxyXG5cdFx0bGFiZWxUd286ICdDT01QQU5ZIElORk8nLFxyXG5cdFx0bGFiZWxUaHJlZTogJ0xJQ0VOU0lORycsXHJcblx0XHRsYWJlbEZvdXI6ICdDT05GSVJNQVRJT04nXHJcblx0fTtcclxuXHRASW5wdXQoKVxyXG5cdHByb2dyZXNzQmFySWNvbklkID0ge1xyXG5cdFx0SWNvbk9uZUlkOiAnbGlzdGluZ0RldGFpbHMnLFxyXG5cdFx0SWNvblR3b0lkOiAncHJvZHVjdERldGFpbHMnLFxyXG5cdFx0SWNvblRocmVlSWQ6ICdwcm9kdWN0VHJhY2VhYmlsaXR5JyxcclxuXHRcdEljb25Gb3VySWQ6ICdjb25maXJtJ1xyXG5cdH07XHJcblx0QElucHV0KClcclxuXHRwcm9ncmVzc0JhclRpdGxlSWQgPSB7XHJcblx0XHRsYWJlbE9uZUlkOiAnbGlzdGluZ0RldGFpbHMnLFxyXG5cdFx0bGFiZWxUd29JZDogJ3Byb2R1Y3REZXRhaWxzJyxcclxuXHRcdGxhYmVsVGhyZWVJZDogJ3Byb2R1Y3RUcmFjZWFiaWxpdHknLFxyXG5cdFx0bGFiZWxGb3VySWQ6ICdjb25maXJtJ1xyXG5cdH07XHJcblx0QElucHV0KCkgY3VzdG9tQ2xhc3MgPSAnY29sIHAtMCBwdC00JztcclxuXHRASW5wdXQoJ3Byb2dyZXNzLWJhci10aXRsZScpIHByb2dyZXNzQmFyVGl0bGUgPSAnUFJPR1JFU1MnO1xyXG5cdEBJbnB1dCgncHJvZ3Jlc3MtYmFyLWNvbG9yJykgcHJvZ3Jlc3NCYXJDb2xvcjtcclxuXHRASW5wdXQoJ3Byb2dyZXNzLWJhci1mb250LXNpemUnKSBwcm9ncmVzc0JhckZvbnRTaXplO1xyXG5cdEBJbnB1dCgncHJvZ3Jlc3MtYmFyLWZvbnQtd2lnaHQnKSBwcm9ncmVzc0JhckZvbnRXaWdodDtcclxuXHJcblx0QElucHV0KCdwcm9ncmVzcy1iYXItbGFiZWwtb25lJykgcHJvZ3Jlc3NCYXJMYWJlbE9uZSA9ICcxJztcclxuXHRASW5wdXQoJ3Byb2dyZXNzLWJhci1sYWJlbC10d28nKSBwcm9ncmVzc0JhckxhYmVsVHdvID0gJzInO1xyXG5cdEBJbnB1dCgncHJvZ3Jlc3MtYmFyLWxhYmVsLVRocmVlJykgcHJvZ3Jlc3NCYXJMYWJlbFRocmVlID0gJzMnO1xyXG5cdEBJbnB1dCgncHJvZ3Jlc3MtYmFyLWxhYmVsLWZvdXInKSBwcm9ncmVzc0JhckxhYmVsRm91ciA9ICc0JztcclxuXHJcblx0QElucHV0KCdsYWJlbC10aXRsZS1jdXN0b20tY2xhc3MnKSBsYWJlbFRpdGxlQ3VzdG9tQ2xhc3MgPSAncHJvZ3Jlc3NUaXRsZSc7XHJcblx0QElucHV0KCdsYWJsZS10ZXh0LWN1c3RvbS1jbGFzcycpIGxhYmxlVGV4dEN1c3RvbUNsYXNzID0gJ3RleHQtY2VudGVyJztcclxuXHRASW5wdXQoJ2xhYmVsLWdyaWQtY3VzdG9tLWNsYXNzJykgbGFiZWxHcmlkQ3VzdG9tQ2xhc3MgPSAnY29sLXNtLTEwIG9mZnNldC1zbS0xJztcclxuXHJcblx0QElucHV0KCdwcm9ncmVzcy1iYXItbmFtZS1ncmlkLWFsaWduJykgcHJvZ3Jlc3NCYXJOYW1lR3JpZEFsaWduID0gJ2NvbC1zbS0xMic7XHJcblxyXG5cdEBJbnB1dCgncHJvZ3Jlc3MtYmFyLXRpdGxlLWNsYXNzJykgcHJvZ3Jlc3NCYXJUaXRsZUNsYXNzID0gJ2NvbC1zbS0yIHByLTAgbW50LTAnO1xyXG5cclxuXHRASW5wdXQoJ2NoZWNrLW1hcmstY3VzdG9tLWNsYXNzJykgY2hlY2tNYXJrQ3VzdG9tQ2xhc3MgPSAnY2hlY2ttYXJrJztcclxuXHJcblx0QE91dHB1dCgpIHByb2dyZXNzT25lQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBwcm9ncmVzc1R3b0FjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgcHJvZ3Jlc3NUaHJlZUFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgcHJvZ3Jlc3NGb3VyQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoKSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7IH1cclxufVxyXG4iXX0=