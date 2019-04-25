/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuHeaderComponent = /** @class */ (function () {
    function SukuHeaderComponent() {
        this.titleOne = 'LISTING NAME';
        this.contentOne = 'N/A';
        this.titleTwo = 'SELLER NAME';
        this.contentTwo = 'N/A';
        this.titleThree = 'TIME REMAINING';
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
            console.log(val);
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
            console.log(val);
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
                    template: "<div class=\"product-boxContent\">\r\n  <div class=\"col pl-lg-5 pt-3 pb-3\">\r\n    <div class=\"row\">\r\n      <div class=\"col pl-lg-5\">\r\n        <h1>{{titleOne}}</h1>\r\n        <h2>{{contentOne}}</h2>\r\n      </div>\r\n      <div class=\"col pl-lg-5\">\r\n        <h1>{{titleTwo}}</h1>\r\n        <h2 class=\"c-pointer\" (click)=\"action.emit()\">{{contentTwo}}</h2>\r\n      </div>\r\n      <div class=\"col pl-lg-5\">\r\n        <h1>{{titleThree}}</h1>\r\n        <h2 *ngIf=\"(_enableTimer == 'false')\">\r\n          {{contentThree}}\r\n        </h2>\r\n        <h2 *ngIf=\"(_enableTimer == 'true')\">\r\n          <countdown-timer [end]=\"_date\"></countdown-timer>\r\n        </h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".product-boxContent{width:100%;float:left;background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}h1{color:#fafaf8;font-size:17px}h2{color:#f9f9f1bd;font-size:15px}.c-pointer{cursor:pointer;text-transform:capitalize}.c-pointer:hover{color:#fff;text-decoration:underline}.prizeHead{width:100%;float:left;color:#e5e5e5;line-height:1em;margin:0 0 8px}.prizesubHead{width:100%;float:left;font-family:Poppins-Regular,sans-serif!important;font-size:15px;color:#e5e5e5;line-height:1em;margin:0 0 12px}.RectangleBorder{background-color:#fff;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);border-radius:0;margin-top:63px!important;padding-right:20px;padding-left:20px}.productName{color:#7f7e7e;font-size:13px}"]
                }] }
    ];
    /** @nocollapse */
    SukuHeaderComponent.ctorParameters = function () { return []; };
    SukuHeaderComponent.propDecorators = {
        titleOne: [{ type: Input }],
        contentOne: [{ type: Input }],
        titleTwo: [{ type: Input }],
        contentTwo: [{ type: Input }],
        titleThree: [{ type: Input }],
        contentThree: [{ type: Input }],
        enableTimer: [{ type: Input }],
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
    SukuHeaderComponent.prototype.contentOne;
    /** @type {?} */
    SukuHeaderComponent.prototype.titleTwo;
    /** @type {?} */
    SukuHeaderComponent.prototype.contentTwo;
    /** @type {?} */
    SukuHeaderComponent.prototype.titleThree;
    /** @type {?} */
    SukuHeaderComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtaGVhZGVyL3N1a3UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQThCQztRQXRCUyxhQUFRLEdBQUcsY0FBYyxDQUFDO1FBQzFCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsYUFBUSxHQUFHLGFBQWEsQ0FBQztRQUN6QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztRQWlCN0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQWpCaEIsc0JBQ0ksNkNBQVk7Ozs7UUFEaEI7WUFFQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkIsQ0FBQzs7Ozs7UUFDRCxVQUFpQixHQUFHO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDbEIsQ0FBQzs7O09BSkE7SUFLRCxzQkFDSSw0Q0FBVzs7OztRQURmO1lBRUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzFCLENBQUM7Ozs7O1FBQ0QsVUFBZ0IsR0FBRztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLENBQUM7OztPQUpBOzs7O0lBUUQsc0NBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7Z0JBbENELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsYUFBYTtvQkFDdkIsd3ZCQUEyQzs7aUJBRTNDOzs7OzsyQkFJQyxLQUFLOzZCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFRTCxLQUFLO3lCQVFMLE1BQU07O0lBTVIsMEJBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQTlCWSxtQkFBbUI7OztJQUMvQixvQ0FBTTs7SUFDTiwyQ0FBYTs7SUFDYix1Q0FBbUM7O0lBQ25DLHlDQUE0Qjs7SUFDNUIsdUNBQWtDOztJQUNsQyx5Q0FBNEI7O0lBQzVCLHlDQUF1Qzs7SUFpQnZDLHFDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3VrdS1oZWFkZXInLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWhlYWRlci5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtaGVhZGVyLmNvbXBvbmVudC5zY3NzJyBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1SGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRfZGF0ZTtcclxuXHRfZW5hYmxlVGltZXI7XHJcblx0QElucHV0KCkgdGl0bGVPbmUgPSAnTElTVElORyBOQU1FJztcclxuXHRASW5wdXQoKSBjb250ZW50T25lID0gJ04vQSc7XHJcblx0QElucHV0KCkgdGl0bGVUd28gPSAnU0VMTEVSIE5BTUUnO1xyXG5cdEBJbnB1dCgpIGNvbnRlbnRUd28gPSAnTi9BJztcclxuXHRASW5wdXQoKSB0aXRsZVRocmVlID0gJ1RJTUUgUkVNQUlOSU5HJztcclxuXHRASW5wdXQoKVxyXG5cdGdldCBjb250ZW50VGhyZWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0ZTtcclxuXHR9XHJcblx0c2V0IGNvbnRlbnRUaHJlZSh2YWwpIHtcclxuXHRcdGNvbnNvbGUubG9nKHZhbCk7XHJcblx0XHR0aGlzLl9kYXRlID0gdmFsO1xyXG5cdH1cclxuXHRASW5wdXQoKVxyXG5cdGdldCBlbmFibGVUaW1lcigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9lbmFibGVUaW1lcjtcclxuXHR9XHJcblx0c2V0IGVuYWJsZVRpbWVyKHZhbCkge1xyXG5cdFx0Y29uc29sZS5sb2codmFsKTtcclxuXHRcdHRoaXMuX2VuYWJsZVRpbWVyID0gdmFsO1xyXG5cdH1cclxuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmNvbnRlbnRUaHJlZSA9ICdOL0EnO1xyXG5cdH1cclxufVxyXG4iXX0=