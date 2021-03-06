/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-header/suku-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuHeaderComponent {
    constructor() {
        this.titleOne = 'LISTING NAME';
        this.contentOne = 'N/A';
        this.contentOneCustomClass = 'c-pointer';
        this.titleTwo = 'SELLER NAME';
        this.contentTwo = 'N/A';
        this.contentTwoCustomClass = 'c-pointer';
        this.titleThree = 'TIME REMAINING';
        this.productBoxContentCustomClass = 'product-boxContent';
        this.contentThreeCustomClass = 'c-pointer';
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get contentThree() {
        return this._date;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set contentThree(val) {
        this._date = val;
    }
    /**
     * @return {?}
     */
    get enableTimer() {
        return this._enableTimer;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set enableTimer(val) {
        this._enableTimer = val;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.contentThree = 'N/A';
    }
}
SukuHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-header',
                template: "<div [class]=\"productBoxContentCustomClass\" [style.backgroundColor]=\"productBoxContentBgColor\">\n  <div class=\"col pl-lg-5 pt-3 pb-3\">\n    <div class=\"row\">\n      <div class=\"col pl-lg-3\">\n        <h1 [style.font-size.rem]=\"titleOneSize\" [class]=\"titleOneCustomClass\" [style.font-weight]=\"titleOneWeight\"\n          [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">{{titleOne}}</h1>\n        <h2 [style.font-size.rem]=\"contentOneSize\" [class]=\"contentOneCustomClass\"\n          [style.font-weight]=\"contentOneWeight\" [style.color]=\"contentOneColor\" id=\"{{contentOneId}}\">{{contentOne}}\n        </h2>\n      </div>\n      <div class=\"col pl-lg-5\">\n        <h1 [style.font-size.rem]=\"titleTwoSize\" [class]=\"titleTwoCustomClass\" [style.font-weight]=\"titleTwoWeight\"\n          [style.color]=\"titleTwoColor\" id=\"{{titleTwoId}}\">{{titleTwo}}</h1>\n        <h2 (click)=\"action.emit()\" [style.font-size.rem]=\"contentTwoSize\" [class]=\"contentTwoCustomClass\"\n          [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\" id=\"{{contentTwoId}}\">{{contentTwo}}\n        </h2>\n      </div>\n      <div class=\"col pl-lg-5\">\n        <h1 [style.font-size.rem]=\"titleThreeSize\" [class]=\"titleThreeCustomClass\"\n          [style.font-weight]=\"titleThreeWeight\" [style.color]=\"titleThreeColor\" id=\"{{titleThreeId}}\">{{titleThree}}\n        </h1>\n        <h2 *ngIf=\"(_enableTimer == 'false')\" [style.font-size.rem]=\"contentThreeSize\" [class]=\"contentThreeCustomClass\"\n          [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\" id=\"{{contentThreeId}}\">\n          {{contentThree}}\n        </h2>\n        <h2 *ngIf=\"(_enableTimer == 'true')\">\n          <countdown-timer [end]=\"_date\"></countdown-timer>\n        </h2>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.product-boxContent{width:100%;float:left;background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:var(--suku-primary-border-radius);box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}h1{color:#fafaf8;font-size:var(--suku-font-size-5)}h2{color:#f9f9f1bd;font-size:var(--suku-font-size-4)}.c-pointer{cursor:pointer;text-transform:capitalize}.c-pointer:hover{color:var(--suku-text-label-two);text-decoration:underline}"]
            }] }
];
/** @nocollapse */
SukuHeaderComponent.ctorParameters = () => [];
SukuHeaderComponent.propDecorators = {
    titleOne: [{ type: Input }],
    titleOneId: [{ type: Input, args: ['title-one-id',] }],
    titleOneSize: [{ type: Input, args: ['title-one-size',] }],
    titleOneColor: [{ type: Input, args: ['title-one-color',] }],
    titleOneWeight: [{ type: Input, args: ['title-one-weight',] }],
    titleOneCustomClass: [{ type: Input, args: ['title-one-custom-class',] }],
    contentOne: [{ type: Input }],
    contentOneId: [{ type: Input, args: ['content-one-id',] }],
    contentOneSize: [{ type: Input, args: ['content-one-size',] }],
    contentOneColor: [{ type: Input, args: ['content-one-color',] }],
    contentOneWeight: [{ type: Input, args: ['content-one-weight',] }],
    contentOneCustomClass: [{ type: Input, args: ['content-one-custom-class',] }],
    titleTwo: [{ type: Input }],
    titleTwoId: [{ type: Input, args: ['title-two-id',] }],
    titleTwoSize: [{ type: Input, args: ['title-two-size',] }],
    titleTwoColor: [{ type: Input, args: ['title-two-color',] }],
    titleTwoWeight: [{ type: Input, args: ['title-two-weight',] }],
    titleTwoCustomClass: [{ type: Input, args: ['title-two-custom-class',] }],
    contentTwo: [{ type: Input }],
    contentTwoId: [{ type: Input, args: ['content-two-id',] }],
    contentTwoSize: [{ type: Input, args: ['content-two-size',] }],
    contentTwoColor: [{ type: Input, args: ['content-two-color',] }],
    contentTwoWeight: [{ type: Input, args: ['content-two-weight',] }],
    contentTwoCustomClass: [{ type: Input, args: ['content-two-custom-class',] }],
    titleThree: [{ type: Input }],
    titleThreeId: [{ type: Input, args: ['title-three-id',] }],
    titleThreeSize: [{ type: Input, args: ['title-three-size',] }],
    titleThreeColor: [{ type: Input, args: ['title-three-color',] }],
    titleThreeWeight: [{ type: Input, args: ['title-three-weight',] }],
    titleThreeCustomClass: [{ type: Input, args: ['title-three-custom-class',] }],
    productBoxContentCustomClass: [{ type: Input, args: ['product-box-content-custom-class',] }],
    productBoxContentBgColor: [{ type: Input, args: ['product-box-content-bg-color',] }],
    contentThree: [{ type: Input }],
    enableTimer: [{ type: Input }],
    contentThreeId: [{ type: Input, args: ['content-three-id',] }],
    contentThreeSize: [{ type: Input, args: ['content-three-size',] }],
    contentThreeColor: [{ type: Input, args: ['content-three-color',] }],
    contentThreeWeight: [{ type: Input, args: ['content-three-weight',] }],
    contentThreeCustomClass: [{ type: Input, args: ['content-three-custom-class',] }],
    action: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuHeaderComponent.prototype._date;
    /** @type {?} */
    SukuHeaderComponent.prototype._enableTimer;
    /** @type {?} */
    SukuHeaderComponent.prototype.titleOne;
    /** @type {?} */
    SukuHeaderComponent.prototype.titleOneId;
    /** @type {?} */
    SukuHeaderComponent.prototype.titleOneSize;
    /** @type {?} */
    SukuHeaderComponent.prototype.titleOneColor;
    /** @type {?} */
    SukuHeaderComponent.prototype.titleOneWeight;
    /** @type {?} */
    SukuHeaderComponent.prototype.titleOneCustomClass;
    /** @type {?} */
    SukuHeaderComponent.prototype.contentOne;
    /** @type {?} */
    SukuHeaderComponent.prototype.contentOneId;
    /** @type {?} */
    SukuHeaderComponent.prototype.contentOneSize;
    /** @type {?} */
    SukuHeaderComponent.prototype.contentOneColor;
    /** @type {?} */
    SukuHeaderComponent.prototype.contentOneWeight;
    /** @type {?} */
    SukuHeaderComponent.prototype.contentOneCustomClass;
    /** @type {?} */
    SukuHeaderComponent.prototype.titleTwo;
    /** @type {?} */
    SukuHeaderComponent.prototype.titleTwoId;
    /** @type {?} */
    SukuHeaderComponent.prototype.titleTwoSize;
    /** @type {?} */
    SukuHeaderComponent.prototype.titleTwoColor;
    /** @type {?} */
    SukuHeaderComponent.prototype.titleTwoWeight;
    /** @type {?} */
    SukuHeaderComponent.prototype.titleTwoCustomClass;
    /** @type {?} */
    SukuHeaderComponent.prototype.contentTwo;
    /** @type {?} */
    SukuHeaderComponent.prototype.contentTwoId;
    /** @type {?} */
    SukuHeaderComponent.prototype.contentTwoSize;
    /** @type {?} */
    SukuHeaderComponent.prototype.contentTwoColor;
    /** @type {?} */
    SukuHeaderComponent.prototype.contentTwoWeight;
    /** @type {?} */
    SukuHeaderComponent.prototype.contentTwoCustomClass;
    /** @type {?} */
    SukuHeaderComponent.prototype.titleThree;
    /** @type {?} */
    SukuHeaderComponent.prototype.titleThreeId;
    /** @type {?} */
    SukuHeaderComponent.prototype.titleThreeSize;
    /** @type {?} */
    SukuHeaderComponent.prototype.titleThreeColor;
    /** @type {?} */
    SukuHeaderComponent.prototype.titleThreeWeight;
    /** @type {?} */
    SukuHeaderComponent.prototype.titleThreeCustomClass;
    /** @type {?} */
    SukuHeaderComponent.prototype.productBoxContentCustomClass;
    /** @type {?} */
    SukuHeaderComponent.prototype.productBoxContentBgColor;
    /** @type {?} */
    SukuHeaderComponent.prototype.contentThreeId;
    /** @type {?} */
    SukuHeaderComponent.prototype.contentThreeSize;
    /** @type {?} */
    SukuHeaderComponent.prototype.contentThreeColor;
    /** @type {?} */
    SukuHeaderComponent.prototype.contentThreeWeight;
    /** @type {?} */
    SukuHeaderComponent.prototype.contentThreeCustomClass;
    /** @type {?} */
    SukuHeaderComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtaGVhZGVyL3N1a3UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0UsTUFBTSxPQUFPLG1CQUFtQjtJQStEL0I7UUE1RFMsYUFBUSxHQUFHLGNBQWMsQ0FBQztRQU8xQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBS08sMEJBQXFCLEdBQUcsV0FBVyxDQUFDO1FBRTlELGFBQVEsR0FBRyxhQUFhLENBQUM7UUFPekIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUtPLDBCQUFxQixHQUFHLFdBQVcsQ0FBQztRQUU5RCxlQUFVLEdBQUcsZ0JBQWdCLENBQUM7UUFPSSxpQ0FBNEIsR0FBRyxvQkFBb0IsQ0FBQztRQXNCMUQsNEJBQXVCLEdBQUcsV0FBVyxDQUFDO1FBRWpFLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFyQmpCLElBQ0ksWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7OztJQUNELElBQUksWUFBWSxDQUFDLEdBQUc7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDbEIsQ0FBQzs7OztJQUNELElBQ0ksV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7OztJQUNELElBQUksV0FBVyxDQUFDLEdBQUc7UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7SUFDekIsQ0FBQzs7OztJQVVELFFBQVE7UUFDUCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOzs7WUF4RUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixtMkRBQTJDOzthQUUzQzs7Ozs7dUJBSUMsS0FBSzt5QkFDTCxLQUFLLFNBQUMsY0FBYzsyQkFDcEIsS0FBSyxTQUFDLGdCQUFnQjs0QkFDdEIsS0FBSyxTQUFDLGlCQUFpQjs2QkFDdkIsS0FBSyxTQUFDLGtCQUFrQjtrQ0FDeEIsS0FBSyxTQUFDLHdCQUF3Qjt5QkFFOUIsS0FBSzsyQkFDTCxLQUFLLFNBQUMsZ0JBQWdCOzZCQUN0QixLQUFLLFNBQUMsa0JBQWtCOzhCQUN4QixLQUFLLFNBQUMsbUJBQW1COytCQUN6QixLQUFLLFNBQUMsb0JBQW9CO29DQUMxQixLQUFLLFNBQUMsMEJBQTBCO3VCQUVoQyxLQUFLO3lCQUNMLEtBQUssU0FBQyxjQUFjOzJCQUNwQixLQUFLLFNBQUMsZ0JBQWdCOzRCQUN0QixLQUFLLFNBQUMsaUJBQWlCOzZCQUN2QixLQUFLLFNBQUMsa0JBQWtCO2tDQUN4QixLQUFLLFNBQUMsd0JBQXdCO3lCQUU5QixLQUFLOzJCQUNMLEtBQUssU0FBQyxnQkFBZ0I7NkJBQ3RCLEtBQUssU0FBQyxrQkFBa0I7OEJBQ3hCLEtBQUssU0FBQyxtQkFBbUI7K0JBQ3pCLEtBQUssU0FBQyxvQkFBb0I7b0NBQzFCLEtBQUssU0FBQywwQkFBMEI7eUJBRWhDLEtBQUs7MkJBQ0wsS0FBSyxTQUFDLGdCQUFnQjs2QkFDdEIsS0FBSyxTQUFDLGtCQUFrQjs4QkFDeEIsS0FBSyxTQUFDLG1CQUFtQjsrQkFDekIsS0FBSyxTQUFDLG9CQUFvQjtvQ0FDMUIsS0FBSyxTQUFDLDBCQUEwQjsyQ0FFaEMsS0FBSyxTQUFDLGtDQUFrQzt1Q0FDeEMsS0FBSyxTQUFDLDhCQUE4QjsyQkFHcEMsS0FBSzswQkFPTCxLQUFLOzZCQU9MLEtBQUssU0FBQyxrQkFBa0I7K0JBQ3hCLEtBQUssU0FBQyxvQkFBb0I7Z0NBQzFCLEtBQUssU0FBQyxxQkFBcUI7aUNBQzNCLEtBQUssU0FBQyxzQkFBc0I7c0NBQzVCLEtBQUssU0FBQyw0QkFBNEI7cUJBRWxDLE1BQU07Ozs7SUE3RFAsb0NBQU07O0lBQ04sMkNBQWE7O0lBQ2IsdUNBQW1DOztJQUNuQyx5Q0FBa0M7O0lBQ2xDLDJDQUFzQzs7SUFDdEMsNENBQXdDOztJQUN4Qyw2Q0FBMEM7O0lBQzFDLGtEQUFxRDs7SUFFckQseUNBQTRCOztJQUM1QiwyQ0FBc0M7O0lBQ3RDLDZDQUEwQzs7SUFDMUMsOENBQTRDOztJQUM1QywrQ0FBOEM7O0lBQzlDLG9EQUF1RTs7SUFFdkUsdUNBQWtDOztJQUNsQyx5Q0FBa0M7O0lBQ2xDLDJDQUFzQzs7SUFDdEMsNENBQXdDOztJQUN4Qyw2Q0FBMEM7O0lBQzFDLGtEQUFxRDs7SUFFckQseUNBQTRCOztJQUM1QiwyQ0FBc0M7O0lBQ3RDLDZDQUEwQzs7SUFDMUMsOENBQTRDOztJQUM1QywrQ0FBOEM7O0lBQzlDLG9EQUF1RTs7SUFFdkUseUNBQXVDOztJQUN2QywyQ0FBc0M7O0lBQ3RDLDZDQUEwQzs7SUFDMUMsOENBQTRDOztJQUM1QywrQ0FBOEM7O0lBQzlDLG9EQUF5RDs7SUFFekQsMkRBQStGOztJQUMvRix1REFBZ0U7O0lBaUJoRSw2Q0FBMEM7O0lBQzFDLCtDQUE4Qzs7SUFDOUMsZ0RBQWdEOztJQUNoRCxpREFBa0Q7O0lBQ2xELHNEQUEyRTs7SUFFM0UscUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LWhlYWRlcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N1a3UtaGVhZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdF9kYXRlO1xuXHRfZW5hYmxlVGltZXI7XG5cdEBJbnB1dCgpIHRpdGxlT25lID0gJ0xJU1RJTkcgTkFNRSc7XG5cdEBJbnB1dCgndGl0bGUtb25lLWlkJykgdGl0bGVPbmVJZDtcblx0QElucHV0KCd0aXRsZS1vbmUtc2l6ZScpIHRpdGxlT25lU2l6ZTtcblx0QElucHV0KCd0aXRsZS1vbmUtY29sb3InKSB0aXRsZU9uZUNvbG9yO1xuXHRASW5wdXQoJ3RpdGxlLW9uZS13ZWlnaHQnKSB0aXRsZU9uZVdlaWdodDtcblx0QElucHV0KCd0aXRsZS1vbmUtY3VzdG9tLWNsYXNzJykgdGl0bGVPbmVDdXN0b21DbGFzcztcblxuXHRASW5wdXQoKSBjb250ZW50T25lID0gJ04vQSc7XG5cdEBJbnB1dCgnY29udGVudC1vbmUtaWQnKSBjb250ZW50T25lSWQ7XG5cdEBJbnB1dCgnY29udGVudC1vbmUtc2l6ZScpIGNvbnRlbnRPbmVTaXplO1xuXHRASW5wdXQoJ2NvbnRlbnQtb25lLWNvbG9yJykgY29udGVudE9uZUNvbG9yO1xuXHRASW5wdXQoJ2NvbnRlbnQtb25lLXdlaWdodCcpIGNvbnRlbnRPbmVXZWlnaHQ7XG5cdEBJbnB1dCgnY29udGVudC1vbmUtY3VzdG9tLWNsYXNzJykgY29udGVudE9uZUN1c3RvbUNsYXNzID0gJ2MtcG9pbnRlcic7XG5cblx0QElucHV0KCkgdGl0bGVUd28gPSAnU0VMTEVSIE5BTUUnO1xuXHRASW5wdXQoJ3RpdGxlLXR3by1pZCcpIHRpdGxlVHdvSWQ7XG5cdEBJbnB1dCgndGl0bGUtdHdvLXNpemUnKSB0aXRsZVR3b1NpemU7XG5cdEBJbnB1dCgndGl0bGUtdHdvLWNvbG9yJykgdGl0bGVUd29Db2xvcjtcblx0QElucHV0KCd0aXRsZS10d28td2VpZ2h0JykgdGl0bGVUd29XZWlnaHQ7XG5cdEBJbnB1dCgndGl0bGUtdHdvLWN1c3RvbS1jbGFzcycpIHRpdGxlVHdvQ3VzdG9tQ2xhc3M7XG5cblx0QElucHV0KCkgY29udGVudFR3byA9ICdOL0EnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLWlkJykgY29udGVudFR3b0lkO1xuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLXNpemUnKSBjb250ZW50VHdvU2l6ZTtcblx0QElucHV0KCdjb250ZW50LXR3by1jb2xvcicpIGNvbnRlbnRUd29Db2xvcjtcblx0QElucHV0KCdjb250ZW50LXR3by13ZWlnaHQnKSBjb250ZW50VHdvV2VpZ2h0O1xuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLWN1c3RvbS1jbGFzcycpIGNvbnRlbnRUd29DdXN0b21DbGFzcyA9ICdjLXBvaW50ZXInO1xuXG5cdEBJbnB1dCgpIHRpdGxlVGhyZWUgPSAnVElNRSBSRU1BSU5JTkcnO1xuXHRASW5wdXQoJ3RpdGxlLXRocmVlLWlkJykgdGl0bGVUaHJlZUlkO1xuXHRASW5wdXQoJ3RpdGxlLXRocmVlLXNpemUnKSB0aXRsZVRocmVlU2l6ZTtcblx0QElucHV0KCd0aXRsZS10aHJlZS1jb2xvcicpIHRpdGxlVGhyZWVDb2xvcjtcblx0QElucHV0KCd0aXRsZS10aHJlZS13ZWlnaHQnKSB0aXRsZVRocmVlV2VpZ2h0O1xuXHRASW5wdXQoJ3RpdGxlLXRocmVlLWN1c3RvbS1jbGFzcycpIHRpdGxlVGhyZWVDdXN0b21DbGFzcztcblxuXHRASW5wdXQoJ3Byb2R1Y3QtYm94LWNvbnRlbnQtY3VzdG9tLWNsYXNzJykgcHJvZHVjdEJveENvbnRlbnRDdXN0b21DbGFzcyA9ICdwcm9kdWN0LWJveENvbnRlbnQnO1xuXHRASW5wdXQoJ3Byb2R1Y3QtYm94LWNvbnRlbnQtYmctY29sb3InKSBwcm9kdWN0Qm94Q29udGVudEJnQ29sb3I7XG5cblxuXHRASW5wdXQoKVxuXHRnZXQgY29udGVudFRocmVlKCkge1xuXHRcdHJldHVybiB0aGlzLl9kYXRlO1xuXHR9XG5cdHNldCBjb250ZW50VGhyZWUodmFsKSB7XG5cdFx0dGhpcy5fZGF0ZSA9IHZhbDtcblx0fVxuXHRASW5wdXQoKVxuXHRnZXQgZW5hYmxlVGltZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VuYWJsZVRpbWVyO1xuXHR9XG5cdHNldCBlbmFibGVUaW1lcih2YWwpIHtcblx0XHR0aGlzLl9lbmFibGVUaW1lciA9IHZhbDtcblx0fVxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtaWQnKSBjb250ZW50VGhyZWVJZDtcblx0QElucHV0KCdjb250ZW50LXRocmVlLXNpemUnKSBjb250ZW50VGhyZWVTaXplO1xuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY29sb3InKSBjb250ZW50VGhyZWVDb2xvcjtcblx0QElucHV0KCdjb250ZW50LXRocmVlLXdlaWdodCcpIGNvbnRlbnRUaHJlZVdlaWdodDtcblx0QElucHV0KCdjb250ZW50LXRocmVlLWN1c3RvbS1jbGFzcycpIGNvbnRlbnRUaHJlZUN1c3RvbUNsYXNzID0gJ2MtcG9pbnRlcic7XG5cblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmNvbnRlbnRUaHJlZSA9ICdOL0EnO1xuXHR9XG59Il19