/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-header/suku-header.component.ts
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
                    template: "<div [class]=\"productBoxContentCustomClass\" [style.backgroundColor]=\"productBoxContentBgColor\">\n  <div class=\"col pl-lg-5 pt-3 pb-3\">\n    <div class=\"row\">\n      <div class=\"col pl-lg-3\">\n        <h1 [style.font-size.rem]=\"titleOneSize\" [class]=\"titleOneCustomClass\" [style.font-weight]=\"titleOneWeight\"\n          [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">{{titleOne}}</h1>\n        <h2 [style.font-size.rem]=\"contentOneSize\" [class]=\"contentOneCustomClass\"\n          [style.font-weight]=\"contentOneWeight\" [style.color]=\"contentOneColor\" id=\"{{contentOneId}}\">{{contentOne}}\n        </h2>\n      </div>\n      <div class=\"col pl-lg-5\">\n        <h1 [style.font-size.rem]=\"titleTwoSize\" [class]=\"titleTwoCustomClass\" [style.font-weight]=\"titleTwoWeight\"\n          [style.color]=\"titleTwoColor\" id=\"{{titleTwoId}}\">{{titleTwo}}</h1>\n        <h2 (click)=\"action.emit()\" [style.font-size.rem]=\"contentTwoSize\" [class]=\"contentTwoCustomClass\"\n          [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\" id=\"{{contentTwoId}}\">{{contentTwo}}\n        </h2>\n      </div>\n      <div class=\"col pl-lg-5\">\n        <h1 [style.font-size.rem]=\"titleThreeSize\" [class]=\"titleThreeCustomClass\"\n          [style.font-weight]=\"titleThreeWeight\" [style.color]=\"titleThreeColor\" id=\"{{titleThreeId}}\">{{titleThree}}\n        </h1>\n        <h2 *ngIf=\"(_enableTimer == 'false')\" [style.font-size.rem]=\"contentThreeSize\" [class]=\"contentThreeCustomClass\"\n          [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\" id=\"{{contentThreeId}}\">\n          {{contentThree}}\n        </h2>\n        <h2 *ngIf=\"(_enableTimer == 'true')\">\n          <countdown-timer [end]=\"_date\"></countdown-timer>\n        </h2>\n      </div>\n    </div>\n  </div>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtaGVhZGVyL3N1a3UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0U7SUFvRUM7UUE1RFMsYUFBUSxHQUFHLGNBQWMsQ0FBQztRQU8xQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBS08sMEJBQXFCLEdBQUcsV0FBVyxDQUFDO1FBRTlELGFBQVEsR0FBRyxhQUFhLENBQUM7UUFPekIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUtPLDBCQUFxQixHQUFHLFdBQVcsQ0FBQztRQUU5RCxlQUFVLEdBQUcsZ0JBQWdCLENBQUM7UUFPSSxpQ0FBNEIsR0FBRyxvQkFBb0IsQ0FBQztRQXNCMUQsNEJBQXVCLEdBQUcsV0FBVyxDQUFDO1FBRWpFLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFyQmpCLHNCQUNJLDZDQUFZOzs7O1FBRGhCO1lBRUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ25CLENBQUM7Ozs7O1FBQ0QsVUFBaUIsR0FBRztZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNsQixDQUFDOzs7T0FIQTtJQUlELHNCQUNJLDRDQUFXOzs7O1FBRGY7WUFFQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFDRCxVQUFnQixHQUFHO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLENBQUM7OztPQUhBOzs7O0lBYUQsc0NBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7Z0JBeEVELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsYUFBYTtvQkFDdkIsbTJEQUEyQzs7aUJBRTNDOzs7OzsyQkFJQyxLQUFLOzZCQUNMLEtBQUssU0FBQyxjQUFjOytCQUNwQixLQUFLLFNBQUMsZ0JBQWdCO2dDQUN0QixLQUFLLFNBQUMsaUJBQWlCO2lDQUN2QixLQUFLLFNBQUMsa0JBQWtCO3NDQUN4QixLQUFLLFNBQUMsd0JBQXdCOzZCQUU5QixLQUFLOytCQUNMLEtBQUssU0FBQyxnQkFBZ0I7aUNBQ3RCLEtBQUssU0FBQyxrQkFBa0I7a0NBQ3hCLEtBQUssU0FBQyxtQkFBbUI7bUNBQ3pCLEtBQUssU0FBQyxvQkFBb0I7d0NBQzFCLEtBQUssU0FBQywwQkFBMEI7MkJBRWhDLEtBQUs7NkJBQ0wsS0FBSyxTQUFDLGNBQWM7K0JBQ3BCLEtBQUssU0FBQyxnQkFBZ0I7Z0NBQ3RCLEtBQUssU0FBQyxpQkFBaUI7aUNBQ3ZCLEtBQUssU0FBQyxrQkFBa0I7c0NBQ3hCLEtBQUssU0FBQyx3QkFBd0I7NkJBRTlCLEtBQUs7K0JBQ0wsS0FBSyxTQUFDLGdCQUFnQjtpQ0FDdEIsS0FBSyxTQUFDLGtCQUFrQjtrQ0FDeEIsS0FBSyxTQUFDLG1CQUFtQjttQ0FDekIsS0FBSyxTQUFDLG9CQUFvQjt3Q0FDMUIsS0FBSyxTQUFDLDBCQUEwQjs2QkFFaEMsS0FBSzsrQkFDTCxLQUFLLFNBQUMsZ0JBQWdCO2lDQUN0QixLQUFLLFNBQUMsa0JBQWtCO2tDQUN4QixLQUFLLFNBQUMsbUJBQW1CO21DQUN6QixLQUFLLFNBQUMsb0JBQW9CO3dDQUMxQixLQUFLLFNBQUMsMEJBQTBCOytDQUVoQyxLQUFLLFNBQUMsa0NBQWtDOzJDQUN4QyxLQUFLLFNBQUMsOEJBQThCOytCQUdwQyxLQUFLOzhCQU9MLEtBQUs7aUNBT0wsS0FBSyxTQUFDLGtCQUFrQjttQ0FDeEIsS0FBSyxTQUFDLG9CQUFvQjtvQ0FDMUIsS0FBSyxTQUFDLHFCQUFxQjtxQ0FDM0IsS0FBSyxTQUFDLHNCQUFzQjswQ0FDNUIsS0FBSyxTQUFDLDRCQUE0Qjt5QkFFbEMsTUFBTTs7SUFNUiwwQkFBQztDQUFBLEFBekVELElBeUVDO1NBcEVZLG1CQUFtQjs7O0lBQy9CLG9DQUFNOztJQUNOLDJDQUFhOztJQUNiLHVDQUFtQzs7SUFDbkMseUNBQWtDOztJQUNsQywyQ0FBc0M7O0lBQ3RDLDRDQUF3Qzs7SUFDeEMsNkNBQTBDOztJQUMxQyxrREFBcUQ7O0lBRXJELHlDQUE0Qjs7SUFDNUIsMkNBQXNDOztJQUN0Qyw2Q0FBMEM7O0lBQzFDLDhDQUE0Qzs7SUFDNUMsK0NBQThDOztJQUM5QyxvREFBdUU7O0lBRXZFLHVDQUFrQzs7SUFDbEMseUNBQWtDOztJQUNsQywyQ0FBc0M7O0lBQ3RDLDRDQUF3Qzs7SUFDeEMsNkNBQTBDOztJQUMxQyxrREFBcUQ7O0lBRXJELHlDQUE0Qjs7SUFDNUIsMkNBQXNDOztJQUN0Qyw2Q0FBMEM7O0lBQzFDLDhDQUE0Qzs7SUFDNUMsK0NBQThDOztJQUM5QyxvREFBdUU7O0lBRXZFLHlDQUF1Qzs7SUFDdkMsMkNBQXNDOztJQUN0Qyw2Q0FBMEM7O0lBQzFDLDhDQUE0Qzs7SUFDNUMsK0NBQThDOztJQUM5QyxvREFBeUQ7O0lBRXpELDJEQUErRjs7SUFDL0YsdURBQWdFOztJQWlCaEUsNkNBQTBDOztJQUMxQywrQ0FBOEM7O0lBQzlDLGdEQUFnRDs7SUFDaEQsaURBQWtEOztJQUNsRCxzREFBMkU7O0lBRTNFLHFDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1oZWFkZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LWhlYWRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRfZGF0ZTtcblx0X2VuYWJsZVRpbWVyO1xuXHRASW5wdXQoKSB0aXRsZU9uZSA9ICdMSVNUSU5HIE5BTUUnO1xuXHRASW5wdXQoJ3RpdGxlLW9uZS1pZCcpIHRpdGxlT25lSWQ7XG5cdEBJbnB1dCgndGl0bGUtb25lLXNpemUnKSB0aXRsZU9uZVNpemU7XG5cdEBJbnB1dCgndGl0bGUtb25lLWNvbG9yJykgdGl0bGVPbmVDb2xvcjtcblx0QElucHV0KCd0aXRsZS1vbmUtd2VpZ2h0JykgdGl0bGVPbmVXZWlnaHQ7XG5cdEBJbnB1dCgndGl0bGUtb25lLWN1c3RvbS1jbGFzcycpIHRpdGxlT25lQ3VzdG9tQ2xhc3M7XG5cblx0QElucHV0KCkgY29udGVudE9uZSA9ICdOL0EnO1xuXHRASW5wdXQoJ2NvbnRlbnQtb25lLWlkJykgY29udGVudE9uZUlkO1xuXHRASW5wdXQoJ2NvbnRlbnQtb25lLXNpemUnKSBjb250ZW50T25lU2l6ZTtcblx0QElucHV0KCdjb250ZW50LW9uZS1jb2xvcicpIGNvbnRlbnRPbmVDb2xvcjtcblx0QElucHV0KCdjb250ZW50LW9uZS13ZWlnaHQnKSBjb250ZW50T25lV2VpZ2h0O1xuXHRASW5wdXQoJ2NvbnRlbnQtb25lLWN1c3RvbS1jbGFzcycpIGNvbnRlbnRPbmVDdXN0b21DbGFzcyA9ICdjLXBvaW50ZXInO1xuXG5cdEBJbnB1dCgpIHRpdGxlVHdvID0gJ1NFTExFUiBOQU1FJztcblx0QElucHV0KCd0aXRsZS10d28taWQnKSB0aXRsZVR3b0lkO1xuXHRASW5wdXQoJ3RpdGxlLXR3by1zaXplJykgdGl0bGVUd29TaXplO1xuXHRASW5wdXQoJ3RpdGxlLXR3by1jb2xvcicpIHRpdGxlVHdvQ29sb3I7XG5cdEBJbnB1dCgndGl0bGUtdHdvLXdlaWdodCcpIHRpdGxlVHdvV2VpZ2h0O1xuXHRASW5wdXQoJ3RpdGxlLXR3by1jdXN0b20tY2xhc3MnKSB0aXRsZVR3b0N1c3RvbUNsYXNzO1xuXG5cdEBJbnB1dCgpIGNvbnRlbnRUd28gPSAnTi9BJztcblx0QElucHV0KCdjb250ZW50LXR3by1pZCcpIGNvbnRlbnRUd29JZDtcblx0QElucHV0KCdjb250ZW50LXR3by1zaXplJykgY29udGVudFR3b1NpemU7XG5cdEBJbnB1dCgnY29udGVudC10d28tY29sb3InKSBjb250ZW50VHdvQ29sb3I7XG5cdEBJbnB1dCgnY29udGVudC10d28td2VpZ2h0JykgY29udGVudFR3b1dlaWdodDtcblx0QElucHV0KCdjb250ZW50LXR3by1jdXN0b20tY2xhc3MnKSBjb250ZW50VHdvQ3VzdG9tQ2xhc3MgPSAnYy1wb2ludGVyJztcblxuXHRASW5wdXQoKSB0aXRsZVRocmVlID0gJ1RJTUUgUkVNQUlOSU5HJztcblx0QElucHV0KCd0aXRsZS10aHJlZS1pZCcpIHRpdGxlVGhyZWVJZDtcblx0QElucHV0KCd0aXRsZS10aHJlZS1zaXplJykgdGl0bGVUaHJlZVNpemU7XG5cdEBJbnB1dCgndGl0bGUtdGhyZWUtY29sb3InKSB0aXRsZVRocmVlQ29sb3I7XG5cdEBJbnB1dCgndGl0bGUtdGhyZWUtd2VpZ2h0JykgdGl0bGVUaHJlZVdlaWdodDtcblx0QElucHV0KCd0aXRsZS10aHJlZS1jdXN0b20tY2xhc3MnKSB0aXRsZVRocmVlQ3VzdG9tQ2xhc3M7XG5cblx0QElucHV0KCdwcm9kdWN0LWJveC1jb250ZW50LWN1c3RvbS1jbGFzcycpIHByb2R1Y3RCb3hDb250ZW50Q3VzdG9tQ2xhc3MgPSAncHJvZHVjdC1ib3hDb250ZW50Jztcblx0QElucHV0KCdwcm9kdWN0LWJveC1jb250ZW50LWJnLWNvbG9yJykgcHJvZHVjdEJveENvbnRlbnRCZ0NvbG9yO1xuXG5cblx0QElucHV0KClcblx0Z2V0IGNvbnRlbnRUaHJlZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fZGF0ZTtcblx0fVxuXHRzZXQgY29udGVudFRocmVlKHZhbCkge1xuXHRcdHRoaXMuX2RhdGUgPSB2YWw7XG5cdH1cblx0QElucHV0KClcblx0Z2V0IGVuYWJsZVRpbWVyKCkge1xuXHRcdHJldHVybiB0aGlzLl9lbmFibGVUaW1lcjtcblx0fVxuXHRzZXQgZW5hYmxlVGltZXIodmFsKSB7XG5cdFx0dGhpcy5fZW5hYmxlVGltZXIgPSB2YWw7XG5cdH1cblx0QElucHV0KCdjb250ZW50LXRocmVlLWlkJykgY29udGVudFRocmVlSWQ7XG5cdEBJbnB1dCgnY29udGVudC10aHJlZS1zaXplJykgY29udGVudFRocmVlU2l6ZTtcblx0QElucHV0KCdjb250ZW50LXRocmVlLWNvbG9yJykgY29udGVudFRocmVlQ29sb3I7XG5cdEBJbnB1dCgnY29udGVudC10aHJlZS13ZWlnaHQnKSBjb250ZW50VGhyZWVXZWlnaHQ7XG5cdEBJbnB1dCgnY29udGVudC10aHJlZS1jdXN0b20tY2xhc3MnKSBjb250ZW50VGhyZWVDdXN0b21DbGFzcyA9ICdjLXBvaW50ZXInO1xuXG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5jb250ZW50VGhyZWUgPSAnTi9BJztcblx0fVxufSJdfQ==