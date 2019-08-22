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
                    template: "<!-- <div class=\"col p-0 pt-4\">\n  <div class=\"col-sm-12 \">\n    <div class=\"row\">\n      <div class=\"col-sm-2 pr-0 mnt-0 \">\n        <span>\n          <h6><b>PROGRESS</b></h6>\n        </span>\n      </div>\n      <div class=\"col-sm-12 \">\n        <table class=\"col-sm-12\">\n          <tr class=\"pt-3\">\n            <td>\n              <hr>\n            </td>\n            <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\"\n              (click)=\"progressOneAction.emit()\">\n              <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n              <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">1</span>\n            </td>\n            <td>\n              <hr>\n            </td>\n            <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\"\n              (click)=\"progressTwoAction.emit()\">\n              <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n              <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">2</span>\n            </td>\n            <td>\n              <hr>\n            </td>\n            <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\"\n              (click)=\"progressThreeAction.emit()\">\n              <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n              <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">3</span>\n            </td>\n            <td>\n              <hr>\n            </td>\n            <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\"\n              (click)=\"progressFourAction.emit()\">\n              <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"checkmark pt-2\"></span>\n              <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">4</span>\n            </td>\n            <td>\n              <hr>\n            </td>\n          </tr>\n        </table>\n      </div>\n    </div>\n    <div class=\"pt-2\">\n      <table class=\"col-sm-10 offset-sm-1 text-center\">\n        <tr id=\"txt\" class=\"pt-3\">\n          <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelOneId}}\">\n            <span class=\"{{customHeadingOneClass}} \"\n              (click)=\"progressOneAction.emit()\">{{progressBarLabels?.labelOne}}</span>\n          </td>\n          <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelTwoId}}\">\n            <span class=\" {{customHeadingTwoClass}} \"\n              (click)=\"progressTwoAction.emit()\">{{progressBarLabels?.labelTwo}}</span>\n          </td>\n          <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelThreeId}}\">\n            <span class=\"  {{customHeadingThreeClass}} \"\n              (click)=\"progressThreeAction.emit()\">{{progressBarLabels?.labelThree}}</span>\n          </td>\n          <td class=\"progressTitle\" id=\"{{progressBarTitleId?.labelFourId}}\">\n            <span class=\" {{customHeadingFourClass}} \"\n              (click)=\"progressFourAction.emit()\">{{progressBarLabels?.labelFour}}</span>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div> -->\n\n\n<div [class]=\"customClass\">\n  <div class=\"col-sm-12\">\n    <div class=\"row\">\n      <div [class]=\"progressBarTitleClass\">\n        <span>\n          <h6 [style.color]=\"progressBarColor\" [style.font-size.rem]=\"progressBarFontSize\"\n            [style.font-weight]=\"progressBarFontWight\">\n            <b>{{progressBarTitle}}</b>\n          </h6>\n        </span>\n      </div>\n      <div class=\"col-sm-12\">\n        <table [class]=\"progressBarNameGridAlign\">\n          <tr class=\"pt-3\">\n            <td>\n              <hr>\n            </td>\n            <td class=\"{{progressStyleOne}} text-center\" id=\"{{progressBarIconId?.IconOneId}}\">\n              <span *ngIf=\"(progressStyleOne == 'progressCompleted')\" class=\" {{checkMarkCustomClass}} pt-2\"></span>\n              <span *ngIf=\"!(progressStyleOne == 'progressCompleted')\">{{progressBarLabelOne}}</span>\n            </td>\n            <td>\n              <hr>\n            </td>\n            <td class=\"{{progressStyleTwo}} text-center\" id=\"{{progressBarIconId?.IconTwoId}}\">\n              <span *ngIf=\"(progressStyleTwo == 'progressCompleted')\" class=\"{{checkMarkCustomClass}} pt-2\"></span>\n              <span *ngIf=\"!(progressStyleTwo == 'progressCompleted')\">{{progressBarLabelTwo}}</span>\n            </td>\n            <td>\n              <hr>\n            </td>\n            <td class=\"{{progressStyleThree}} text-center\" id=\"{{progressBarIconId?.IconThreeId}}\">\n              <span *ngIf=\"(progressStyleThree == 'progressCompleted')\" class=\"{{checkMarkCustomClass}} pt-2\"></span>\n              <span *ngIf=\"!(progressStyleThree == 'progressCompleted')\">{{progressBarLabelThree}}</span>\n            </td>\n            <td>\n              <hr>\n            </td>\n            <td class=\"{{progressStyleFour}} text-center\" id=\"{{progressBarIconId?.IconFourId}}\">\n              <span *ngIf=\"(progressStyleFour == 'progressCompleted')\" class=\"{{checkMarkCustomClass}} pt-2\"></span>\n              <span *ngIf=\"!(progressStyleFour == 'progressCompleted')\">{{progressBarLabelFour}}</span>\n            </td>\n            <td>\n              <hr>\n            </td>\n          </tr>\n        </table>\n      </div>\n    </div>\n    <div class=\"pt-2\">\n      <table class=\"{{labelGridCustomClass}} {{lableTextCustomClass}}\">\n        <tr id=\"txt\" class=\"pt-3\">\n          <td [class]=\"labelTitleCustomClass\" id=\"{{progressBarTitleId?.labelOneId}}\">\n            <span class=\"{{customHeadingOneClass}}\"\n              (click)=\"progressOneAction.emit()\">{{progressBarLabels?.labelOne}}</span>\n          </td>\n          <td [class]=\"labelTitleCustomClass\" id=\"{{progressBarTitleId?.labelTwoId}}\">\n            <span class=\" {{customHeadingTwoClass}}\"\n              (click)=\"progressTwoAction.emit()\">{{progressBarLabels?.labelTwo}}</span>\n          </td>\n          <td [class]=\"labelTitleCustomClass\" id=\"{{progressBarTitleId?.labelThreeId}}\">\n            <span class=\"{{customHeadingThreeClass}}\"\n              (click)=\"progressThreeAction.emit()\">{{progressBarLabels?.labelThree}}</span>\n          </td>\n          <td [class]=\"labelTitleCustomClass\" id=\"{{progressBarTitleId?.labelFourId}}\">\n            <span class=\"{{customHeadingFourClass}}\"\n              (click)=\"progressFourAction.emit()\">{{progressBarLabels?.labelFour}}</span>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9ncmVzcy1iYXItdHlwZS1vbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWdFQztRQTFEUyxxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUNwQyxxQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztRQUN0Qyx1QkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUN4QyxzQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQztRQUN2QyxzQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQztRQUN2QywwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDM0IsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLDRCQUF1QixHQUFHLEVBQUUsQ0FBQztRQUM3QiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDNUIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBRXJDLHNCQUFpQixHQUFHO1lBQ25CLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsUUFBUSxFQUFFLGNBQWM7WUFDeEIsVUFBVSxFQUFFLFdBQVc7WUFDdkIsU0FBUyxFQUFFLGNBQWM7U0FDekIsQ0FBQztRQUVGLHNCQUFpQixHQUFHO1lBQ25CLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFVBQVUsRUFBRSxTQUFTO1NBQ3JCLENBQUM7UUFFRix1QkFBa0IsR0FBRztZQUNwQixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFVBQVUsRUFBRSxnQkFBZ0I7WUFDNUIsWUFBWSxFQUFFLHFCQUFxQjtZQUNuQyxXQUFXLEVBQUUsU0FBUztTQUN0QixDQUFDO1FBQ08sZ0JBQVcsR0FBRyxjQUFjLENBQUM7UUFDVCxxQkFBZ0IsR0FBRyxVQUFVLENBQUM7UUFLMUIsd0JBQW1CLEdBQUcsR0FBRyxDQUFDO1FBQzFCLHdCQUFtQixHQUFHLEdBQUcsQ0FBQztRQUN4QiwwQkFBcUIsR0FBRyxHQUFHLENBQUM7UUFDN0IseUJBQW9CLEdBQUcsR0FBRyxDQUFDO1FBRTFCLDBCQUFxQixHQUFHLGVBQWUsQ0FBQztRQUN6Qyx5QkFBb0IsR0FBRyxhQUFhLENBQUM7UUFDckMseUJBQW9CLEdBQUcsdUJBQXVCLENBQUM7UUFFMUMsNkJBQXdCLEdBQUcsV0FBVyxDQUFDO1FBRTNDLDBCQUFxQixHQUFHLHFCQUFxQixDQUFDO1FBRS9DLHlCQUFvQixHQUFHLFdBQVcsQ0FBQztRQUUzRCxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6Qyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBR2xDLENBQUM7Ozs7SUFFakIsa0RBQVE7OztJQUFSLGNBQWEsQ0FBQzs7Z0JBbEVkLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxxcU5BQTBEOztpQkFFMUQ7Ozs7O21DQUVDLEtBQUs7bUNBQ0wsS0FBSztxQ0FDTCxLQUFLO29DQUNMLEtBQUs7b0NBQ0wsS0FBSzt3Q0FDTCxLQUFLO3dDQUNMLEtBQUs7MENBQ0wsS0FBSzt5Q0FDTCxLQUFLO3lDQUNMLEtBQUs7b0NBQ0wsS0FBSztvQ0FPTCxLQUFLO3FDQU9MLEtBQUs7OEJBT0wsS0FBSzttQ0FDTCxLQUFLLFNBQUMsb0JBQW9CO21DQUMxQixLQUFLLFNBQUMsb0JBQW9CO3NDQUMxQixLQUFLLFNBQUMsd0JBQXdCO3VDQUM5QixLQUFLLFNBQUMseUJBQXlCO3NDQUUvQixLQUFLLFNBQUMsd0JBQXdCO3NDQUM5QixLQUFLLFNBQUMsd0JBQXdCO3dDQUM5QixLQUFLLFNBQUMsMEJBQTBCO3VDQUNoQyxLQUFLLFNBQUMseUJBQXlCO3dDQUUvQixLQUFLLFNBQUMsMEJBQTBCO3VDQUNoQyxLQUFLLFNBQUMseUJBQXlCO3VDQUMvQixLQUFLLFNBQUMseUJBQXlCOzJDQUUvQixLQUFLLFNBQUMsOEJBQThCO3dDQUVwQyxLQUFLLFNBQUMsMEJBQTBCO3VDQUVoQyxLQUFLLFNBQUMseUJBQXlCO29DQUUvQixNQUFNO29DQUNOLE1BQU07c0NBQ04sTUFBTTtxQ0FDTixNQUFNOztJQU1SLHNDQUFDO0NBQUEsQUFuRUQsSUFtRUM7U0E5RFksK0JBQStCOzs7SUFDM0MsMkRBQTZDOztJQUM3QywyREFBK0M7O0lBQy9DLDZEQUFpRDs7SUFDakQsNERBQWdEOztJQUNoRCw0REFBZ0Q7O0lBQ2hELGdFQUFvQzs7SUFDcEMsZ0VBQW9DOztJQUNwQyxrRUFBc0M7O0lBQ3RDLGlFQUFxQzs7SUFDckMsaUVBQXFDOztJQUNyQyw0REFNRTs7SUFDRiw0REFNRTs7SUFDRiw2REFNRTs7SUFDRixzREFBc0M7O0lBQ3RDLDJEQUEyRDs7SUFDM0QsMkRBQThDOztJQUM5Qyw4REFBcUQ7O0lBQ3JELCtEQUF1RDs7SUFFdkQsOERBQTJEOztJQUMzRCw4REFBMkQ7O0lBQzNELGdFQUErRDs7SUFDL0QsK0RBQTZEOztJQUU3RCxnRUFBMkU7O0lBQzNFLCtEQUF1RTs7SUFDdkUsK0RBQWlGOztJQUVqRixtRUFBOEU7O0lBRTlFLGdFQUFpRjs7SUFFakYsK0RBQXFFOztJQUVyRSw0REFBaUQ7O0lBQ2pELDREQUFpRDs7SUFDakQsOERBQW1EOztJQUNuRCw2REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtcHJvZ3Jlc3MtYmFyLXR5cGUtb25lLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1wcm9ncmVzcy1iYXItdHlwZS1vbmUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1UHJvZ3Jlc3NCYXJUeXBlT25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgcHJvZ3Jlc3NTdHlsZU9uZSA9ICdwcm9ncmVzc0FjdGl2ZSc7XG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVUd28gPSAncHJvZ3Jlc3NVcGNvbWluZyc7XG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVUaHJlZSA9ICdwcm9ncmVzc1VwY29taW5nJztcblx0QElucHV0KCkgcHJvZ3Jlc3NTdHlsZUZvdXIgPSAncHJvZ3Jlc3NVcGNvbWluZyc7XG5cdEBJbnB1dCgpIHByb2dyZXNzU3R5bGVGaXZlID0gJ3Byb2dyZXNzVXBjb21pbmcnO1xuXHRASW5wdXQoKSBjdXN0b21IZWFkaW5nT25lQ2xhc3MgPSAnJztcblx0QElucHV0KCkgY3VzdG9tSGVhZGluZ1R3b0NsYXNzID0gJyc7XG5cdEBJbnB1dCgpIGN1c3RvbUhlYWRpbmdUaHJlZUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIGN1c3RvbUhlYWRpbmdGb3VyQ2xhc3MgPSAnJztcblx0QElucHV0KCkgY3VzdG9tSGVhZGluZ0ZpdmVDbGFzcyA9ICcnO1xuXHRASW5wdXQoKVxuXHRwcm9ncmVzc0JhckxhYmVscyA9IHtcblx0XHRsYWJlbE9uZTogJ1JFVFJJRVZFIENPTVBBTlkgREFUQScsXG5cdFx0bGFiZWxUd286ICdDT01QQU5ZIElORk8nLFxuXHRcdGxhYmVsVGhyZWU6ICdMSUNFTlNJTkcnLFxuXHRcdGxhYmVsRm91cjogJ0NPTkZJUk1BVElPTidcblx0fTtcblx0QElucHV0KClcblx0cHJvZ3Jlc3NCYXJJY29uSWQgPSB7XG5cdFx0SWNvbk9uZUlkOiAnbGlzdGluZ0RldGFpbHMnLFxuXHRcdEljb25Ud29JZDogJ3Byb2R1Y3REZXRhaWxzJyxcblx0XHRJY29uVGhyZWVJZDogJ3Byb2R1Y3RUcmFjZWFiaWxpdHknLFxuXHRcdEljb25Gb3VySWQ6ICdjb25maXJtJ1xuXHR9O1xuXHRASW5wdXQoKVxuXHRwcm9ncmVzc0JhclRpdGxlSWQgPSB7XG5cdFx0bGFiZWxPbmVJZDogJ2xpc3RpbmdEZXRhaWxzJyxcblx0XHRsYWJlbFR3b0lkOiAncHJvZHVjdERldGFpbHMnLFxuXHRcdGxhYmVsVGhyZWVJZDogJ3Byb2R1Y3RUcmFjZWFiaWxpdHknLFxuXHRcdGxhYmVsRm91cklkOiAnY29uZmlybSdcblx0fTtcblx0QElucHV0KCkgY3VzdG9tQ2xhc3MgPSAnY29sIHAtMCBwdC00Jztcblx0QElucHV0KCdwcm9ncmVzcy1iYXItdGl0bGUnKSBwcm9ncmVzc0JhclRpdGxlID0gJ1BST0dSRVNTJztcblx0QElucHV0KCdwcm9ncmVzcy1iYXItY29sb3InKSBwcm9ncmVzc0JhckNvbG9yO1xuXHRASW5wdXQoJ3Byb2dyZXNzLWJhci1mb250LXNpemUnKSBwcm9ncmVzc0JhckZvbnRTaXplO1xuXHRASW5wdXQoJ3Byb2dyZXNzLWJhci1mb250LXdpZ2h0JykgcHJvZ3Jlc3NCYXJGb250V2lnaHQ7XG5cblx0QElucHV0KCdwcm9ncmVzcy1iYXItbGFiZWwtb25lJykgcHJvZ3Jlc3NCYXJMYWJlbE9uZSA9ICcxJztcblx0QElucHV0KCdwcm9ncmVzcy1iYXItbGFiZWwtdHdvJykgcHJvZ3Jlc3NCYXJMYWJlbFR3byA9ICcyJztcblx0QElucHV0KCdwcm9ncmVzcy1iYXItbGFiZWwtVGhyZWUnKSBwcm9ncmVzc0JhckxhYmVsVGhyZWUgPSAnMyc7XG5cdEBJbnB1dCgncHJvZ3Jlc3MtYmFyLWxhYmVsLWZvdXInKSBwcm9ncmVzc0JhckxhYmVsRm91ciA9ICc0JztcblxuXHRASW5wdXQoJ2xhYmVsLXRpdGxlLWN1c3RvbS1jbGFzcycpIGxhYmVsVGl0bGVDdXN0b21DbGFzcyA9ICdwcm9ncmVzc1RpdGxlJztcblx0QElucHV0KCdsYWJsZS10ZXh0LWN1c3RvbS1jbGFzcycpIGxhYmxlVGV4dEN1c3RvbUNsYXNzID0gJ3RleHQtY2VudGVyJztcblx0QElucHV0KCdsYWJlbC1ncmlkLWN1c3RvbS1jbGFzcycpIGxhYmVsR3JpZEN1c3RvbUNsYXNzID0gJ2NvbC1zbS0xMCBvZmZzZXQtc20tMSc7XG5cblx0QElucHV0KCdwcm9ncmVzcy1iYXItbmFtZS1ncmlkLWFsaWduJykgcHJvZ3Jlc3NCYXJOYW1lR3JpZEFsaWduID0gJ2NvbC1zbS0xMic7XG5cblx0QElucHV0KCdwcm9ncmVzcy1iYXItdGl0bGUtY2xhc3MnKSBwcm9ncmVzc0JhclRpdGxlQ2xhc3MgPSAnY29sLXNtLTIgcHItMCBtbnQtMCc7XG5cblx0QElucHV0KCdjaGVjay1tYXJrLWN1c3RvbS1jbGFzcycpIGNoZWNrTWFya0N1c3RvbUNsYXNzID0gJ2NoZWNrbWFyayc7XG5cblx0QE91dHB1dCgpIHByb2dyZXNzT25lQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgcHJvZ3Jlc3NUd29BY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwcm9ncmVzc1RocmVlQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgcHJvZ3Jlc3NGb3VyQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgfVxufVxuIl19