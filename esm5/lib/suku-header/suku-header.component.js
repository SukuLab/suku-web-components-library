/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuHeaderComponent = /** @class */ (function () {
    function SukuHeaderComponent() {
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
    Object.defineProperty(SukuHeaderComponent.prototype, "contentThree", {
        get: /**
         * @return {?}
         */
        function () {
            return this._date;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._date = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuHeaderComponent.prototype, "enableTimer", {
        get: /**
         * @return {?}
         */
        function () {
            return this._enableTimer;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._enableTimer = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SukuHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.contentThree = 'N/A';
    };
    SukuHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-header',
                    template: "<div [class]=\"productBoxContentCustomClass\" [style.backgroundColor]=\"productBoxContentBgColor\">\r\n  <div class=\"col pl-lg-5 pt-3 pb-3\">\r\n    <div class=\"row\">\r\n      <div class=\"col pl-lg-3\">\r\n        <h1 [style.font-size.rem]=\"titleOneSize\" [class]=\"titleOneCustomClass\" [style.font-weight]=\"titleOneWeight\"\r\n          [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">{{titleOne}}</h1>\r\n        <h2 [style.font-size.rem]=\"contentOneSize\" [class]=\"contentOneCustomClass\"\r\n          [style.font-weight]=\"contentOneWeight\" [style.color]=\"contentOneColor\" id=\"{{contentOneId}}\">{{contentOne}}\r\n        </h2>\r\n      </div>\r\n      <div class=\"col pl-lg-5\">\r\n        <h1 [style.font-size.rem]=\"titleTwoSize\" [class]=\"titleTwoCustomClass\" [style.font-weight]=\"titleTwoWeight\"\r\n          [style.color]=\"titleTwoColor\" id=\"{{titleTwoId}}\">{{titleTwo}}</h1>\r\n        <h2 (click)=\"action.emit()\" [style.font-size.rem]=\"contentTwoSize\" [class]=\"contentTwoCustomClass\"\r\n          [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\" id=\"{{contentTwoId}}\">{{contentTwo}}\r\n        </h2>\r\n      </div>\r\n      <div class=\"col pl-lg-5\">\r\n        <h1 [style.font-size.rem]=\"titleThreeSize\" [class]=\"titleThreeCustomClass\"\r\n          [style.font-weight]=\"titleThreeWeight\" [style.color]=\"titleThreeColor\" id=\"{{titleThreeId}}\">{{titleThree}}\r\n        </h1>\r\n        <h2 *ngIf=\"(_enableTimer == 'false')\" [style.font-size.rem]=\"contentThreeSize\" [class]=\"contentThreeCustomClass\"\r\n          [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\" id=\"{{contentThreeId}}\">\r\n          {{contentThree}}\r\n        </h2>\r\n        <h2 *ngIf=\"(_enableTimer == 'true')\">\r\n          <countdown-timer [end]=\"_date\"></countdown-timer>\r\n        </h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.product-boxContent{width:100%;float:left;background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:var(--suku-primary-border-radius);box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}h1{color:#fafaf8;font-size:var(--suku-font-size-5)}h2{color:#f9f9f1bd;font-size:var(--suku-font-size-4)}.c-pointer{cursor:pointer;text-transform:capitalize}.c-pointer:hover{color:var(--suku-text-label-two);text-decoration:underline}"]
                }] }
    ];
    /** @nocollapse */
    SukuHeaderComponent.ctorParameters = function () { return []; };
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
    return SukuHeaderComponent;
}());
export { SukuHeaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtaGVhZGVyL3N1a3UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQW9FQztRQTVEUyxhQUFRLEdBQUcsY0FBYyxDQUFDO1FBTzFCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFLTywwQkFBcUIsR0FBRyxXQUFXLENBQUM7UUFFOUQsYUFBUSxHQUFHLGFBQWEsQ0FBQztRQU96QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBS08sMEJBQXFCLEdBQUcsV0FBVyxDQUFDO1FBRTlELGVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztRQU9JLGlDQUE0QixHQUFHLG9CQUFvQixDQUFDO1FBc0IxRCw0QkFBdUIsR0FBRyxXQUFXLENBQUM7UUFFakUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQXJCakIsc0JBQ0ksNkNBQVk7Ozs7UUFEaEI7WUFFQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkIsQ0FBQzs7Ozs7UUFDRCxVQUFpQixHQUFHO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLENBQUM7OztPQUhBO0lBSUQsc0JBQ0ksNENBQVc7Ozs7UUFEZjtZQUVDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMxQixDQUFDOzs7OztRQUNELFVBQWdCLEdBQUc7WUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDekIsQ0FBQzs7O09BSEE7Ozs7SUFhRCxzQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOztnQkF4RUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxhQUFhO29CQUN2QixpNkRBQTJDOztpQkFFM0M7Ozs7OzJCQUlDLEtBQUs7NkJBQ0wsS0FBSyxTQUFDLGNBQWM7K0JBQ3BCLEtBQUssU0FBQyxnQkFBZ0I7Z0NBQ3RCLEtBQUssU0FBQyxpQkFBaUI7aUNBQ3ZCLEtBQUssU0FBQyxrQkFBa0I7c0NBQ3hCLEtBQUssU0FBQyx3QkFBd0I7NkJBRTlCLEtBQUs7K0JBQ0wsS0FBSyxTQUFDLGdCQUFnQjtpQ0FDdEIsS0FBSyxTQUFDLGtCQUFrQjtrQ0FDeEIsS0FBSyxTQUFDLG1CQUFtQjttQ0FDekIsS0FBSyxTQUFDLG9CQUFvQjt3Q0FDMUIsS0FBSyxTQUFDLDBCQUEwQjsyQkFFaEMsS0FBSzs2QkFDTCxLQUFLLFNBQUMsY0FBYzsrQkFDcEIsS0FBSyxTQUFDLGdCQUFnQjtnQ0FDdEIsS0FBSyxTQUFDLGlCQUFpQjtpQ0FDdkIsS0FBSyxTQUFDLGtCQUFrQjtzQ0FDeEIsS0FBSyxTQUFDLHdCQUF3Qjs2QkFFOUIsS0FBSzsrQkFDTCxLQUFLLFNBQUMsZ0JBQWdCO2lDQUN0QixLQUFLLFNBQUMsa0JBQWtCO2tDQUN4QixLQUFLLFNBQUMsbUJBQW1CO21DQUN6QixLQUFLLFNBQUMsb0JBQW9CO3dDQUMxQixLQUFLLFNBQUMsMEJBQTBCOzZCQUVoQyxLQUFLOytCQUNMLEtBQUssU0FBQyxnQkFBZ0I7aUNBQ3RCLEtBQUssU0FBQyxrQkFBa0I7a0NBQ3hCLEtBQUssU0FBQyxtQkFBbUI7bUNBQ3pCLEtBQUssU0FBQyxvQkFBb0I7d0NBQzFCLEtBQUssU0FBQywwQkFBMEI7K0NBRWhDLEtBQUssU0FBQyxrQ0FBa0M7MkNBQ3hDLEtBQUssU0FBQyw4QkFBOEI7K0JBR3BDLEtBQUs7OEJBT0wsS0FBSztpQ0FPTCxLQUFLLFNBQUMsa0JBQWtCO21DQUN4QixLQUFLLFNBQUMsb0JBQW9CO29DQUMxQixLQUFLLFNBQUMscUJBQXFCO3FDQUMzQixLQUFLLFNBQUMsc0JBQXNCOzBDQUM1QixLQUFLLFNBQUMsNEJBQTRCO3lCQUVsQyxNQUFNOztJQU1SLDBCQUFDO0NBQUEsQUF6RUQsSUF5RUM7U0FwRVksbUJBQW1COzs7SUFDL0Isb0NBQU07O0lBQ04sMkNBQWE7O0lBQ2IsdUNBQW1DOztJQUNuQyx5Q0FBa0M7O0lBQ2xDLDJDQUFzQzs7SUFDdEMsNENBQXdDOztJQUN4Qyw2Q0FBMEM7O0lBQzFDLGtEQUFxRDs7SUFFckQseUNBQTRCOztJQUM1QiwyQ0FBc0M7O0lBQ3RDLDZDQUEwQzs7SUFDMUMsOENBQTRDOztJQUM1QywrQ0FBOEM7O0lBQzlDLG9EQUF1RTs7SUFFdkUsdUNBQWtDOztJQUNsQyx5Q0FBa0M7O0lBQ2xDLDJDQUFzQzs7SUFDdEMsNENBQXdDOztJQUN4Qyw2Q0FBMEM7O0lBQzFDLGtEQUFxRDs7SUFFckQseUNBQTRCOztJQUM1QiwyQ0FBc0M7O0lBQ3RDLDZDQUEwQzs7SUFDMUMsOENBQTRDOztJQUM1QywrQ0FBOEM7O0lBQzlDLG9EQUF1RTs7SUFFdkUseUNBQXVDOztJQUN2QywyQ0FBc0M7O0lBQ3RDLDZDQUEwQzs7SUFDMUMsOENBQTRDOztJQUM1QywrQ0FBOEM7O0lBQzlDLG9EQUF5RDs7SUFFekQsMkRBQStGOztJQUMvRix1REFBZ0U7O0lBaUJoRSw2Q0FBMEM7O0lBQzFDLCtDQUE4Qzs7SUFDOUMsZ0RBQWdEOztJQUNoRCxpREFBa0Q7O0lBQ2xELHNEQUEyRTs7SUFFM0UscUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LWhlYWRlcicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LWhlYWRlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1SGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRfZGF0ZTtcclxuXHRfZW5hYmxlVGltZXI7XHJcblx0QElucHV0KCkgdGl0bGVPbmUgPSAnTElTVElORyBOQU1FJztcclxuXHRASW5wdXQoJ3RpdGxlLW9uZS1pZCcpIHRpdGxlT25lSWQ7XHJcblx0QElucHV0KCd0aXRsZS1vbmUtc2l6ZScpIHRpdGxlT25lU2l6ZTtcclxuXHRASW5wdXQoJ3RpdGxlLW9uZS1jb2xvcicpIHRpdGxlT25lQ29sb3I7XHJcblx0QElucHV0KCd0aXRsZS1vbmUtd2VpZ2h0JykgdGl0bGVPbmVXZWlnaHQ7XHJcblx0QElucHV0KCd0aXRsZS1vbmUtY3VzdG9tLWNsYXNzJykgdGl0bGVPbmVDdXN0b21DbGFzcztcclxuXHJcblx0QElucHV0KCkgY29udGVudE9uZSA9ICdOL0EnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUtaWQnKSBjb250ZW50T25lSWQ7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS1zaXplJykgY29udGVudE9uZVNpemU7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS1jb2xvcicpIGNvbnRlbnRPbmVDb2xvcjtcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLXdlaWdodCcpIGNvbnRlbnRPbmVXZWlnaHQ7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS1jdXN0b20tY2xhc3MnKSBjb250ZW50T25lQ3VzdG9tQ2xhc3MgPSAnYy1wb2ludGVyJztcclxuXHJcblx0QElucHV0KCkgdGl0bGVUd28gPSAnU0VMTEVSIE5BTUUnO1xyXG5cdEBJbnB1dCgndGl0bGUtdHdvLWlkJykgdGl0bGVUd29JZDtcclxuXHRASW5wdXQoJ3RpdGxlLXR3by1zaXplJykgdGl0bGVUd29TaXplO1xyXG5cdEBJbnB1dCgndGl0bGUtdHdvLWNvbG9yJykgdGl0bGVUd29Db2xvcjtcclxuXHRASW5wdXQoJ3RpdGxlLXR3by13ZWlnaHQnKSB0aXRsZVR3b1dlaWdodDtcclxuXHRASW5wdXQoJ3RpdGxlLXR3by1jdXN0b20tY2xhc3MnKSB0aXRsZVR3b0N1c3RvbUNsYXNzO1xyXG5cclxuXHRASW5wdXQoKSBjb250ZW50VHdvID0gJ04vQSc7XHJcblx0QElucHV0KCdjb250ZW50LXR3by1pZCcpIGNvbnRlbnRUd29JZDtcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLXNpemUnKSBjb250ZW50VHdvU2l6ZTtcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLWNvbG9yJykgY29udGVudFR3b0NvbG9yO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28td2VpZ2h0JykgY29udGVudFR3b1dlaWdodDtcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLWN1c3RvbS1jbGFzcycpIGNvbnRlbnRUd29DdXN0b21DbGFzcyA9ICdjLXBvaW50ZXInO1xyXG5cclxuXHRASW5wdXQoKSB0aXRsZVRocmVlID0gJ1RJTUUgUkVNQUlOSU5HJztcclxuXHRASW5wdXQoJ3RpdGxlLXRocmVlLWlkJykgdGl0bGVUaHJlZUlkO1xyXG5cdEBJbnB1dCgndGl0bGUtdGhyZWUtc2l6ZScpIHRpdGxlVGhyZWVTaXplO1xyXG5cdEBJbnB1dCgndGl0bGUtdGhyZWUtY29sb3InKSB0aXRsZVRocmVlQ29sb3I7XHJcblx0QElucHV0KCd0aXRsZS10aHJlZS13ZWlnaHQnKSB0aXRsZVRocmVlV2VpZ2h0O1xyXG5cdEBJbnB1dCgndGl0bGUtdGhyZWUtY3VzdG9tLWNsYXNzJykgdGl0bGVUaHJlZUN1c3RvbUNsYXNzO1xyXG5cclxuXHRASW5wdXQoJ3Byb2R1Y3QtYm94LWNvbnRlbnQtY3VzdG9tLWNsYXNzJykgcHJvZHVjdEJveENvbnRlbnRDdXN0b21DbGFzcyA9ICdwcm9kdWN0LWJveENvbnRlbnQnO1xyXG5cdEBJbnB1dCgncHJvZHVjdC1ib3gtY29udGVudC1iZy1jb2xvcicpIHByb2R1Y3RCb3hDb250ZW50QmdDb2xvcjtcclxuXHJcblxyXG5cdEBJbnB1dCgpXHJcblx0Z2V0IGNvbnRlbnRUaHJlZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRlO1xyXG5cdH1cclxuXHRzZXQgY29udGVudFRocmVlKHZhbCkge1xyXG5cdFx0dGhpcy5fZGF0ZSA9IHZhbDtcclxuXHR9XHJcblx0QElucHV0KClcclxuXHRnZXQgZW5hYmxlVGltZXIoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZW5hYmxlVGltZXI7XHJcblx0fVxyXG5cdHNldCBlbmFibGVUaW1lcih2YWwpIHtcclxuXHRcdHRoaXMuX2VuYWJsZVRpbWVyID0gdmFsO1xyXG5cdH1cclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtaWQnKSBjb250ZW50VGhyZWVJZDtcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtc2l6ZScpIGNvbnRlbnRUaHJlZVNpemU7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlLWNvbG9yJykgY29udGVudFRocmVlQ29sb3I7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlLXdlaWdodCcpIGNvbnRlbnRUaHJlZVdlaWdodDtcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY3VzdG9tLWNsYXNzJykgY29udGVudFRocmVlQ3VzdG9tQ2xhc3MgPSAnYy1wb2ludGVyJztcclxuXHJcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuY29udGVudFRocmVlID0gJ04vQSc7XHJcblx0fVxyXG59Il19