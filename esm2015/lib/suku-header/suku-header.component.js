/**
 * @fileoverview added by tsickle
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
                template: "<div [class]=\"productBoxContentCustomClass\" [style.backgroundColor]=\"productBoxContentBgColor\">\r\n  <div class=\"col pl-lg-5 pt-3 pb-3\">\r\n    <div class=\"row\">\r\n      <div class=\"col pl-lg-3\">\r\n        <h1 [style.font-size.rem]=\"titleOneSize\" [class]=\"titleOneCustomClass\" [style.font-weight]=\"titleOneWeight\"\r\n          [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">{{titleOne}}</h1>\r\n        <h2 [style.font-size.rem]=\"contentOneSize\" [class]=\"contentOneCustomClass\"\r\n          [style.font-weight]=\"contentOneWeight\" [style.color]=\"contentOneColor\" id=\"{{contentOneId}}\">{{contentOne}}\r\n        </h2>\r\n      </div>\r\n      <div class=\"col pl-lg-5\">\r\n        <h1 [style.font-size.rem]=\"titleTwoSize\" [class]=\"titleTwoCustomClass\" [style.font-weight]=\"titleTwoWeight\"\r\n          [style.color]=\"titleTwoColor\" id=\"{{titleTwoId}}\">{{titleTwo}}</h1>\r\n        <h2 (click)=\"action.emit()\" [style.font-size.rem]=\"contentTwoSize\" [class]=\"contentTwoCustomClass\"\r\n          [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\" id=\"{{contentTwoId}}\">{{contentTwo}}\r\n        </h2>\r\n      </div>\r\n      <div class=\"col pl-lg-5\">\r\n        <h1 [style.font-size.rem]=\"titleThreeSize\" [class]=\"titleThreeCustomClass\"\r\n          [style.font-weight]=\"titleThreeWeight\" [style.color]=\"titleThreeColor\" id=\"{{titleThreeId}}\">{{titleThree}}\r\n        </h1>\r\n        <h2 *ngIf=\"(_enableTimer == 'false')\" [style.font-size.rem]=\"contentThreeSize\" [class]=\"contentThreeCustomClass\"\r\n          [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\" id=\"{{contentThreeId}}\">\r\n          {{contentThree}}\r\n        </h2>\r\n        <h2 *ngIf=\"(_enableTimer == 'true')\">\r\n          <countdown-timer [end]=\"_date\"></countdown-timer>\r\n        </h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtaGVhZGVyL3N1a3UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sbUJBQW1CO0lBK0QvQjtRQTVEUyxhQUFRLEdBQUcsY0FBYyxDQUFDO1FBTzFCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFLTywwQkFBcUIsR0FBRyxXQUFXLENBQUM7UUFFOUQsYUFBUSxHQUFHLGFBQWEsQ0FBQztRQU96QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBS08sMEJBQXFCLEdBQUcsV0FBVyxDQUFDO1FBRTlELGVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztRQU9JLGlDQUE0QixHQUFHLG9CQUFvQixDQUFDO1FBc0IxRCw0QkFBdUIsR0FBRyxXQUFXLENBQUM7UUFFakUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQXJCakIsSUFDSSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBQ0QsSUFBSSxZQUFZLENBQUMsR0FBRztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNsQixDQUFDOzs7O0lBQ0QsSUFDSSxXQUFXO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBQ0QsSUFBSSxXQUFXLENBQUMsR0FBRztRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztJQUN6QixDQUFDOzs7O0lBVUQsUUFBUTtRQUNQLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7OztZQXhFRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLGk2REFBMkM7O2FBRTNDOzs7Ozt1QkFJQyxLQUFLO3lCQUNMLEtBQUssU0FBQyxjQUFjOzJCQUNwQixLQUFLLFNBQUMsZ0JBQWdCOzRCQUN0QixLQUFLLFNBQUMsaUJBQWlCOzZCQUN2QixLQUFLLFNBQUMsa0JBQWtCO2tDQUN4QixLQUFLLFNBQUMsd0JBQXdCO3lCQUU5QixLQUFLOzJCQUNMLEtBQUssU0FBQyxnQkFBZ0I7NkJBQ3RCLEtBQUssU0FBQyxrQkFBa0I7OEJBQ3hCLEtBQUssU0FBQyxtQkFBbUI7K0JBQ3pCLEtBQUssU0FBQyxvQkFBb0I7b0NBQzFCLEtBQUssU0FBQywwQkFBMEI7dUJBRWhDLEtBQUs7eUJBQ0wsS0FBSyxTQUFDLGNBQWM7MkJBQ3BCLEtBQUssU0FBQyxnQkFBZ0I7NEJBQ3RCLEtBQUssU0FBQyxpQkFBaUI7NkJBQ3ZCLEtBQUssU0FBQyxrQkFBa0I7a0NBQ3hCLEtBQUssU0FBQyx3QkFBd0I7eUJBRTlCLEtBQUs7MkJBQ0wsS0FBSyxTQUFDLGdCQUFnQjs2QkFDdEIsS0FBSyxTQUFDLGtCQUFrQjs4QkFDeEIsS0FBSyxTQUFDLG1CQUFtQjsrQkFDekIsS0FBSyxTQUFDLG9CQUFvQjtvQ0FDMUIsS0FBSyxTQUFDLDBCQUEwQjt5QkFFaEMsS0FBSzsyQkFDTCxLQUFLLFNBQUMsZ0JBQWdCOzZCQUN0QixLQUFLLFNBQUMsa0JBQWtCOzhCQUN4QixLQUFLLFNBQUMsbUJBQW1COytCQUN6QixLQUFLLFNBQUMsb0JBQW9CO29DQUMxQixLQUFLLFNBQUMsMEJBQTBCOzJDQUVoQyxLQUFLLFNBQUMsa0NBQWtDO3VDQUN4QyxLQUFLLFNBQUMsOEJBQThCOzJCQUdwQyxLQUFLOzBCQU9MLEtBQUs7NkJBT0wsS0FBSyxTQUFDLGtCQUFrQjsrQkFDeEIsS0FBSyxTQUFDLG9CQUFvQjtnQ0FDMUIsS0FBSyxTQUFDLHFCQUFxQjtpQ0FDM0IsS0FBSyxTQUFDLHNCQUFzQjtzQ0FDNUIsS0FBSyxTQUFDLDRCQUE0QjtxQkFFbEMsTUFBTTs7OztJQTdEUCxvQ0FBTTs7SUFDTiwyQ0FBYTs7SUFDYix1Q0FBbUM7O0lBQ25DLHlDQUFrQzs7SUFDbEMsMkNBQXNDOztJQUN0Qyw0Q0FBd0M7O0lBQ3hDLDZDQUEwQzs7SUFDMUMsa0RBQXFEOztJQUVyRCx5Q0FBNEI7O0lBQzVCLDJDQUFzQzs7SUFDdEMsNkNBQTBDOztJQUMxQyw4Q0FBNEM7O0lBQzVDLCtDQUE4Qzs7SUFDOUMsb0RBQXVFOztJQUV2RSx1Q0FBa0M7O0lBQ2xDLHlDQUFrQzs7SUFDbEMsMkNBQXNDOztJQUN0Qyw0Q0FBd0M7O0lBQ3hDLDZDQUEwQzs7SUFDMUMsa0RBQXFEOztJQUVyRCx5Q0FBNEI7O0lBQzVCLDJDQUFzQzs7SUFDdEMsNkNBQTBDOztJQUMxQyw4Q0FBNEM7O0lBQzVDLCtDQUE4Qzs7SUFDOUMsb0RBQXVFOztJQUV2RSx5Q0FBdUM7O0lBQ3ZDLDJDQUFzQzs7SUFDdEMsNkNBQTBDOztJQUMxQyw4Q0FBNEM7O0lBQzVDLCtDQUE4Qzs7SUFDOUMsb0RBQXlEOztJQUV6RCwyREFBK0Y7O0lBQy9GLHVEQUFnRTs7SUFpQmhFLDZDQUEwQzs7SUFDMUMsK0NBQThDOztJQUM5QyxnREFBZ0Q7O0lBQ2hELGlEQUFrRDs7SUFDbEQsc0RBQTJFOztJQUUzRSxxQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3N1a3UtaGVhZGVyJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL3N1a3UtaGVhZGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdF9kYXRlO1xyXG5cdF9lbmFibGVUaW1lcjtcclxuXHRASW5wdXQoKSB0aXRsZU9uZSA9ICdMSVNUSU5HIE5BTUUnO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lLWlkJykgdGl0bGVPbmVJZDtcclxuXHRASW5wdXQoJ3RpdGxlLW9uZS1zaXplJykgdGl0bGVPbmVTaXplO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lLWNvbG9yJykgdGl0bGVPbmVDb2xvcjtcclxuXHRASW5wdXQoJ3RpdGxlLW9uZS13ZWlnaHQnKSB0aXRsZU9uZVdlaWdodDtcclxuXHRASW5wdXQoJ3RpdGxlLW9uZS1jdXN0b20tY2xhc3MnKSB0aXRsZU9uZUN1c3RvbUNsYXNzO1xyXG5cclxuXHRASW5wdXQoKSBjb250ZW50T25lID0gJ04vQSc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS1pZCcpIGNvbnRlbnRPbmVJZDtcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLXNpemUnKSBjb250ZW50T25lU2l6ZTtcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLWNvbG9yJykgY29udGVudE9uZUNvbG9yO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUtd2VpZ2h0JykgY29udGVudE9uZVdlaWdodDtcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLWN1c3RvbS1jbGFzcycpIGNvbnRlbnRPbmVDdXN0b21DbGFzcyA9ICdjLXBvaW50ZXInO1xyXG5cclxuXHRASW5wdXQoKSB0aXRsZVR3byA9ICdTRUxMRVIgTkFNRSc7XHJcblx0QElucHV0KCd0aXRsZS10d28taWQnKSB0aXRsZVR3b0lkO1xyXG5cdEBJbnB1dCgndGl0bGUtdHdvLXNpemUnKSB0aXRsZVR3b1NpemU7XHJcblx0QElucHV0KCd0aXRsZS10d28tY29sb3InKSB0aXRsZVR3b0NvbG9yO1xyXG5cdEBJbnB1dCgndGl0bGUtdHdvLXdlaWdodCcpIHRpdGxlVHdvV2VpZ2h0O1xyXG5cdEBJbnB1dCgndGl0bGUtdHdvLWN1c3RvbS1jbGFzcycpIHRpdGxlVHdvQ3VzdG9tQ2xhc3M7XHJcblxyXG5cdEBJbnB1dCgpIGNvbnRlbnRUd28gPSAnTi9BJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLWlkJykgY29udGVudFR3b0lkO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28tc2l6ZScpIGNvbnRlbnRUd29TaXplO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28tY29sb3InKSBjb250ZW50VHdvQ29sb3I7XHJcblx0QElucHV0KCdjb250ZW50LXR3by13ZWlnaHQnKSBjb250ZW50VHdvV2VpZ2h0O1xyXG5cdEBJbnB1dCgnY29udGVudC10d28tY3VzdG9tLWNsYXNzJykgY29udGVudFR3b0N1c3RvbUNsYXNzID0gJ2MtcG9pbnRlcic7XHJcblxyXG5cdEBJbnB1dCgpIHRpdGxlVGhyZWUgPSAnVElNRSBSRU1BSU5JTkcnO1xyXG5cdEBJbnB1dCgndGl0bGUtdGhyZWUtaWQnKSB0aXRsZVRocmVlSWQ7XHJcblx0QElucHV0KCd0aXRsZS10aHJlZS1zaXplJykgdGl0bGVUaHJlZVNpemU7XHJcblx0QElucHV0KCd0aXRsZS10aHJlZS1jb2xvcicpIHRpdGxlVGhyZWVDb2xvcjtcclxuXHRASW5wdXQoJ3RpdGxlLXRocmVlLXdlaWdodCcpIHRpdGxlVGhyZWVXZWlnaHQ7XHJcblx0QElucHV0KCd0aXRsZS10aHJlZS1jdXN0b20tY2xhc3MnKSB0aXRsZVRocmVlQ3VzdG9tQ2xhc3M7XHJcblxyXG5cdEBJbnB1dCgncHJvZHVjdC1ib3gtY29udGVudC1jdXN0b20tY2xhc3MnKSBwcm9kdWN0Qm94Q29udGVudEN1c3RvbUNsYXNzID0gJ3Byb2R1Y3QtYm94Q29udGVudCc7XHJcblx0QElucHV0KCdwcm9kdWN0LWJveC1jb250ZW50LWJnLWNvbG9yJykgcHJvZHVjdEJveENvbnRlbnRCZ0NvbG9yO1xyXG5cclxuXHJcblx0QElucHV0KClcclxuXHRnZXQgY29udGVudFRocmVlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGU7XHJcblx0fVxyXG5cdHNldCBjb250ZW50VGhyZWUodmFsKSB7XHJcblx0XHR0aGlzLl9kYXRlID0gdmFsO1xyXG5cdH1cclxuXHRASW5wdXQoKVxyXG5cdGdldCBlbmFibGVUaW1lcigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9lbmFibGVUaW1lcjtcclxuXHR9XHJcblx0c2V0IGVuYWJsZVRpbWVyKHZhbCkge1xyXG5cdFx0dGhpcy5fZW5hYmxlVGltZXIgPSB2YWw7XHJcblx0fVxyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZS1pZCcpIGNvbnRlbnRUaHJlZUlkO1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZS1zaXplJykgY29udGVudFRocmVlU2l6ZTtcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY29sb3InKSBjb250ZW50VGhyZWVDb2xvcjtcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtd2VpZ2h0JykgY29udGVudFRocmVlV2VpZ2h0O1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZS1jdXN0b20tY2xhc3MnKSBjb250ZW50VGhyZWVDdXN0b21DbGFzcyA9ICdjLXBvaW50ZXInO1xyXG5cclxuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5jb250ZW50VGhyZWUgPSAnTi9BJztcclxuXHR9XHJcbn0iXX0=