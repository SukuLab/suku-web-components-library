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
                    template: "<div class=\"product-boxContent\">\n  <div class=\"col pl-lg-5 pt-3 pb-3\">\n    <div class=\"row\">\n      <div class=\"col pl-lg-5\">\n        <h1 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOneCustomClass\" [style.font-weight]=\"titleOneWeight\"\n          [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">{{titleOne}}</h1>\n        <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOneCustomClass\" [style.font-weight]=\"contentOneWeight\"\n          [style.color]=\"contentOneColor\" id=\"{{contentOneId}}\">{{contentOne}}</h2>\n      </div>\n      <div class=\"col pl-lg-5\">\n        <h1 [style.font-size.px]=\"titleTwoSize\" [class]=\"titleTwoCustomClass\" [style.font-weight]=\"titleTwoWeight\"\n          [style.color]=\"titleTwoColor\" id=\"{{titleTwoId}}\">{{titleTwo}}</h1>\n        <h2 class=\"c-pointer\" (click)=\"action.emit()\" [style.font-size.px]=\"contentTwoSize\"\n          [class]=\"contentTwoCustomClass\" [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\"\n          id=\"{{contentTwoId}}\">{{contentTwo}}</h2>\n      </div>\n      <div class=\"col pl-lg-5\">\n        <h1 [style.font-size.px]=\"titleThreeSize\" [class]=\"titleThreeCustomClass\" [style.font-weight]=\"titleThreeWeight\"\n          [style.color]=\"titleThreeColor\" id=\"{{titleThreeId}}\">{{titleThree}}</h1>\n        <h2 *ngIf=\"(_enableTimer == 'false')\" [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreeCustomClass\"\n          [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\" id=\"{{contentThreeId}}\">\n          {{contentThree}}\n        </h2>\n        <h2 *ngIf=\"(_enableTimer == 'true')\">\n          <countdown-timer [end]=\"_date\"></countdown-timer>\n        </h2>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: [".product-boxContent{width:100%;float:left;background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}h1{color:#fafaf8;font-size:17px}h2{color:#f9f9f1bd;font-size:15px}.c-pointer{cursor:pointer;text-transform:capitalize}.c-pointer:hover{color:#fff;text-decoration:underline}.prizeHead{width:100%;float:left;color:#e5e5e5;line-height:1em;margin:0 0 8px}.prizesubHead{width:100%;float:left;font-family:Poppins-Regular,sans-serif!important;font-size:15px;color:#e5e5e5;line-height:1em;margin:0 0 12px}.RectangleBorder{background-color:#fff;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);border-radius:0;margin-top:63px!important;padding-right:20px;padding-left:20px}.productName{color:#7f7e7e;font-size:13px}"]
                }] }
    ];
    /** @nocollapse */
    SukuHeaderComponent.ctorParameters = function () { return []; };
    SukuHeaderComponent.propDecorators = {
        titleOne: [{ type: Input }],
        titleOneId: [{ type: Input }],
        titleOneSize: [{ type: Input }],
        titleOneColor: [{ type: Input }],
        titleOneWeight: [{ type: Input }],
        titleOneCustomClass: [{ type: Input }],
        contentOne: [{ type: Input }],
        contentOneId: [{ type: Input }],
        contentOneSize: [{ type: Input }],
        contentOneColor: [{ type: Input }],
        contentOneWeight: [{ type: Input }],
        contentOneCustomClass: [{ type: Input }],
        titleTwo: [{ type: Input }],
        titleTwoId: [{ type: Input }],
        titleTwoSize: [{ type: Input }],
        titleTwoColor: [{ type: Input }],
        titleTwoWeight: [{ type: Input }],
        titleTwoCustomClass: [{ type: Input }],
        contentTwo: [{ type: Input }],
        contentTwoId: [{ type: Input }],
        contentTwoSize: [{ type: Input }],
        contentTwoColor: [{ type: Input }],
        contentTwoWeight: [{ type: Input }],
        contentTwoCustomClass: [{ type: Input }],
        titleThree: [{ type: Input }],
        titleThreeId: [{ type: Input }],
        titleThreeSize: [{ type: Input }],
        titleThreeColor: [{ type: Input }],
        titleThreeWeight: [{ type: Input }],
        titleThreeCustomClass: [{ type: Input }],
        contentThree: [{ type: Input }],
        enableTimer: [{ type: Input }],
        contentThreeId: [{ type: Input }],
        contentThreeSize: [{ type: Input }],
        contentThreeColor: [{ type: Input }],
        contentThreeWeight: [{ type: Input }],
        contentThreeCustomClass: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtaGVhZGVyL3N1a3UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWtFQztRQTFEUyxhQUFRLEdBQUcsY0FBYyxDQUFDO1FBTzFCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFPbkIsYUFBUSxHQUFHLGFBQWEsQ0FBQztRQU96QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBT25CLGVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztRQTZCN0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQXZCaEIsc0JBQ0ksNkNBQVk7Ozs7UUFEaEI7WUFFQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkIsQ0FBQzs7Ozs7UUFDRCxVQUFpQixHQUFHO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDbEIsQ0FBQzs7O09BSkE7SUFLRCxzQkFDSSw0Q0FBVzs7OztRQURmO1lBRUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzFCLENBQUM7Ozs7O1FBQ0QsVUFBZ0IsR0FBRztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLENBQUM7OztPQUpBOzs7O0lBY0Qsc0NBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7Z0JBdEVELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsYUFBYTtvQkFDdkIsNnhEQUEyQzs7aUJBRTNDOzs7OzsyQkFJQyxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLO2lDQUNMLEtBQUs7c0NBQ0wsS0FBSzs2QkFFTCxLQUFLOytCQUNMLEtBQUs7aUNBQ0wsS0FBSztrQ0FDTCxLQUFLO21DQUNMLEtBQUs7d0NBQ0wsS0FBSzsyQkFFTCxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLO2lDQUNMLEtBQUs7c0NBQ0wsS0FBSzs2QkFFTCxLQUFLOytCQUNMLEtBQUs7aUNBQ0wsS0FBSztrQ0FDTCxLQUFLO21DQUNMLEtBQUs7d0NBQ0wsS0FBSzs2QkFFTCxLQUFLOytCQUNMLEtBQUs7aUNBQ0wsS0FBSztrQ0FDTCxLQUFLO21DQUNMLEtBQUs7d0NBQ0wsS0FBSzsrQkFFTCxLQUFLOzhCQVFMLEtBQUs7aUNBUUwsS0FBSzttQ0FDTCxLQUFLO29DQUNMLEtBQUs7cUNBQ0wsS0FBSzswQ0FDTCxLQUFLO3lCQUVMLE1BQU07O0lBTVIsMEJBQUM7Q0FBQSxBQXZFRCxJQXVFQztTQWxFWSxtQkFBbUI7OztJQUMvQixvQ0FBTTs7SUFDTiwyQ0FBYTs7SUFDYix1Q0FBbUM7O0lBQ25DLHlDQUFvQjs7SUFDcEIsMkNBQXNCOztJQUN0Qiw0Q0FBdUI7O0lBQ3ZCLDZDQUF3Qjs7SUFDeEIsa0RBQTZCOztJQUU3Qix5Q0FBNEI7O0lBQzVCLDJDQUFzQjs7SUFDdEIsNkNBQXdCOztJQUN4Qiw4Q0FBeUI7O0lBQ3pCLCtDQUEwQjs7SUFDMUIsb0RBQStCOztJQUUvQix1Q0FBa0M7O0lBQ2xDLHlDQUFvQjs7SUFDcEIsMkNBQXNCOztJQUN0Qiw0Q0FBdUI7O0lBQ3ZCLDZDQUF3Qjs7SUFDeEIsa0RBQTZCOztJQUU3Qix5Q0FBNEI7O0lBQzVCLDJDQUFzQjs7SUFDdEIsNkNBQXdCOztJQUN4Qiw4Q0FBeUI7O0lBQ3pCLCtDQUEwQjs7SUFDMUIsb0RBQStCOztJQUUvQix5Q0FBdUM7O0lBQ3ZDLDJDQUFzQjs7SUFDdEIsNkNBQXdCOztJQUN4Qiw4Q0FBeUI7O0lBQ3pCLCtDQUEwQjs7SUFDMUIsb0RBQStCOztJQWtCL0IsNkNBQXdCOztJQUN4QiwrQ0FBMEI7O0lBQzFCLGdEQUEyQjs7SUFDM0IsaURBQTRCOztJQUM1QixzREFBaUM7O0lBRWpDLHFDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1oZWFkZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1oZWFkZXIuY29tcG9uZW50LnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdF9kYXRlO1xuXHRfZW5hYmxlVGltZXI7XG5cdEBJbnB1dCgpIHRpdGxlT25lID0gJ0xJU1RJTkcgTkFNRSc7XG5cdEBJbnB1dCgpIHRpdGxlT25lSWQ7XG5cdEBJbnB1dCgpIHRpdGxlT25lU2l6ZTtcblx0QElucHV0KCkgdGl0bGVPbmVDb2xvcjtcblx0QElucHV0KCkgdGl0bGVPbmVXZWlnaHQ7XG5cdEBJbnB1dCgpIHRpdGxlT25lQ3VzdG9tQ2xhc3M7XG5cblx0QElucHV0KCkgY29udGVudE9uZSA9ICdOL0EnO1xuXHRASW5wdXQoKSBjb250ZW50T25lSWQ7XG5cdEBJbnB1dCgpIGNvbnRlbnRPbmVTaXplO1xuXHRASW5wdXQoKSBjb250ZW50T25lQ29sb3I7XG5cdEBJbnB1dCgpIGNvbnRlbnRPbmVXZWlnaHQ7XG5cdEBJbnB1dCgpIGNvbnRlbnRPbmVDdXN0b21DbGFzcztcblxuXHRASW5wdXQoKSB0aXRsZVR3byA9ICdTRUxMRVIgTkFNRSc7XG5cdEBJbnB1dCgpIHRpdGxlVHdvSWQ7XG5cdEBJbnB1dCgpIHRpdGxlVHdvU2l6ZTtcblx0QElucHV0KCkgdGl0bGVUd29Db2xvcjtcblx0QElucHV0KCkgdGl0bGVUd29XZWlnaHQ7XG5cdEBJbnB1dCgpIHRpdGxlVHdvQ3VzdG9tQ2xhc3M7XG5cblx0QElucHV0KCkgY29udGVudFR3byA9ICdOL0EnO1xuXHRASW5wdXQoKSBjb250ZW50VHdvSWQ7XG5cdEBJbnB1dCgpIGNvbnRlbnRUd29TaXplO1xuXHRASW5wdXQoKSBjb250ZW50VHdvQ29sb3I7XG5cdEBJbnB1dCgpIGNvbnRlbnRUd29XZWlnaHQ7XG5cdEBJbnB1dCgpIGNvbnRlbnRUd29DdXN0b21DbGFzcztcblxuXHRASW5wdXQoKSB0aXRsZVRocmVlID0gJ1RJTUUgUkVNQUlOSU5HJztcblx0QElucHV0KCkgdGl0bGVUaHJlZUlkO1xuXHRASW5wdXQoKSB0aXRsZVRocmVlU2l6ZTtcblx0QElucHV0KCkgdGl0bGVUaHJlZUNvbG9yO1xuXHRASW5wdXQoKSB0aXRsZVRocmVlV2VpZ2h0O1xuXHRASW5wdXQoKSB0aXRsZVRocmVlQ3VzdG9tQ2xhc3M7XG5cblx0QElucHV0KClcblx0Z2V0IGNvbnRlbnRUaHJlZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fZGF0ZTtcblx0fVxuXHRzZXQgY29udGVudFRocmVlKHZhbCkge1xuXHRcdGNvbnNvbGUubG9nKHZhbCk7XG5cdFx0dGhpcy5fZGF0ZSA9IHZhbDtcblx0fVxuXHRASW5wdXQoKVxuXHRnZXQgZW5hYmxlVGltZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VuYWJsZVRpbWVyO1xuXHR9XG5cdHNldCBlbmFibGVUaW1lcih2YWwpIHtcblx0XHRjb25zb2xlLmxvZyh2YWwpO1xuXHRcdHRoaXMuX2VuYWJsZVRpbWVyID0gdmFsO1xuXHR9XG5cdEBJbnB1dCgpIGNvbnRlbnRUaHJlZUlkO1xuXHRASW5wdXQoKSBjb250ZW50VGhyZWVTaXplO1xuXHRASW5wdXQoKSBjb250ZW50VGhyZWVDb2xvcjtcblx0QElucHV0KCkgY29udGVudFRocmVlV2VpZ2h0O1xuXHRASW5wdXQoKSBjb250ZW50VGhyZWVDdXN0b21DbGFzcztcblxuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5jb250ZW50VGhyZWUgPSAnTi9BJztcblx0fVxufSJdfQ==