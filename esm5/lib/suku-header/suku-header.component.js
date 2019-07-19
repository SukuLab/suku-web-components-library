/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuHeaderComponent = /** @class */ (function () {
    function SukuHeaderComponent() {
        this.titleOne = 'LISTING NAME';
        this.contentOne = 'N/A';
        this.titleTwo = 'SELLER NAME';
        this.contentTwo = 'N/A';
        this.contentTwoCustomClass = "c-pointer";
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
                    template: "<div class=\"product-boxContent\">\n  <div class=\"col pl-lg-5 pt-3 pb-3\">\n    <div class=\"row\">\n      <div class=\"col pl-lg-5\">\n        <h1 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOneCustomClass\" [style.font-weight]=\"titleOneWeight\"\n          [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">{{titleOne}}</h1>\n        <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOneCustomClass\" [style.font-weight]=\"contentOneWeight\"\n          [style.color]=\"contentOneColor\" id=\"{{contentOneId}}\">{{contentOne}}</h2>\n      </div>\n      <div class=\"col pl-lg-5\">\n        <h1 [style.font-size.px]=\"titleTwoSize\" [class]=\"titleTwoCustomClass\" [style.font-weight]=\"titleTwoWeight\"\n          [style.color]=\"titleTwoColor\" id=\"{{titleTwoId}}\">{{titleTwo}}</h1>\n        <h2 class=\"c-pointer\" (click)=\"action.emit()\" [style.font-size.px]=\"contentTwoSize\"\n          [class]=\"contentTwoCustomClass\" [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\"\n          id=\"{{contentTwoId}}\">{{contentTwo}}</h2>\n      </div>\n      <div class=\"col pl-lg-5\">\n        <h1 [style.font-size.px]=\"titleThreeSize\" [class]=\"titleThreeCustomClass\" [style.font-weight]=\"titleThreeWeight\"\n          [style.color]=\"titleThreeColor\" id=\"{{titleThreeId}}\">{{titleThree}}</h1>\n        <h2 *ngIf=\"(_enableTimer == 'false')\" [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreeCustomClass\"\n          [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\" id=\"{{contentThreeId}}\">\n          {{contentThree}}\n        </h2>\n        <h2 *ngIf=\"(_enableTimer == 'true')\">\n          <countdown-timer [end]=\"_date\"></countdown-timer>\n        </h2>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.product-boxContent{width:100%;float:left;background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}h1{color:#fafaf8;font-size:17px}h2{color:#f9f9f1bd;font-size:15px}.c-pointer{cursor:pointer;text-transform:capitalize}.c-pointer:hover{color:#fff;text-decoration:underline}.prizeHead{width:100%;float:left;color:#e5e5e5;line-height:1em;margin:0 0 8px}.prizesubHead{width:100%;float:left;font-family:Poppins,sans-serif!important;font-size:15px;color:#e5e5e5;line-height:1em;margin:0 0 12px}.RectangleBorder{background-color:#fff;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);border-radius:0;margin-top:63px!important;padding-right:20px;padding-left:20px}.productName{color:#7f7e7e;font-size:13px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtaGVhZGVyL3N1a3UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWdFQztRQXhEUyxhQUFRLEdBQUcsY0FBYyxDQUFDO1FBTzFCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFPbkIsYUFBUSxHQUFHLGFBQWEsQ0FBQztRQU96QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBS25CLDBCQUFxQixHQUFDLFdBQVcsQ0FBQztRQUVsQyxlQUFVLEdBQUcsZ0JBQWdCLENBQUM7UUEyQjdCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFyQmhCLHNCQUNJLDZDQUFZOzs7O1FBRGhCO1lBRUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ25CLENBQUM7Ozs7O1FBQ0QsVUFBaUIsR0FBRztZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNsQixDQUFDOzs7T0FIQTtJQUlELHNCQUNJLDRDQUFXOzs7O1FBRGY7WUFFQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFDRCxVQUFnQixHQUFHO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLENBQUM7OztPQUhBOzs7O0lBYUQsc0NBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7Z0JBcEVELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsYUFBYTtvQkFDdkIsNnhEQUEyQzs7aUJBRTNDOzs7OzsyQkFJQyxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLO2lDQUNMLEtBQUs7c0NBQ0wsS0FBSzs2QkFFTCxLQUFLOytCQUNMLEtBQUs7aUNBQ0wsS0FBSztrQ0FDTCxLQUFLO21DQUNMLEtBQUs7d0NBQ0wsS0FBSzsyQkFFTCxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLO2lDQUNMLEtBQUs7c0NBQ0wsS0FBSzs2QkFFTCxLQUFLOytCQUNMLEtBQUs7aUNBQ0wsS0FBSztrQ0FDTCxLQUFLO21DQUNMLEtBQUs7d0NBQ0wsS0FBSzs2QkFFTCxLQUFLOytCQUNMLEtBQUs7aUNBQ0wsS0FBSztrQ0FDTCxLQUFLO21DQUNMLEtBQUs7d0NBQ0wsS0FBSzsrQkFFTCxLQUFLOzhCQU9MLEtBQUs7aUNBT0wsS0FBSzttQ0FDTCxLQUFLO29DQUNMLEtBQUs7cUNBQ0wsS0FBSzswQ0FDTCxLQUFLO3lCQUVMLE1BQU07O0lBTVIsMEJBQUM7Q0FBQSxBQXJFRCxJQXFFQztTQWhFWSxtQkFBbUI7OztJQUMvQixvQ0FBTTs7SUFDTiwyQ0FBYTs7SUFDYix1Q0FBbUM7O0lBQ25DLHlDQUFvQjs7SUFDcEIsMkNBQXNCOztJQUN0Qiw0Q0FBdUI7O0lBQ3ZCLDZDQUF3Qjs7SUFDeEIsa0RBQTZCOztJQUU3Qix5Q0FBNEI7O0lBQzVCLDJDQUFzQjs7SUFDdEIsNkNBQXdCOztJQUN4Qiw4Q0FBeUI7O0lBQ3pCLCtDQUEwQjs7SUFDMUIsb0RBQStCOztJQUUvQix1Q0FBa0M7O0lBQ2xDLHlDQUFvQjs7SUFDcEIsMkNBQXNCOztJQUN0Qiw0Q0FBdUI7O0lBQ3ZCLDZDQUF3Qjs7SUFDeEIsa0RBQTZCOztJQUU3Qix5Q0FBNEI7O0lBQzVCLDJDQUFzQjs7SUFDdEIsNkNBQXdCOztJQUN4Qiw4Q0FBeUI7O0lBQ3pCLCtDQUEwQjs7SUFDMUIsb0RBQTJDOztJQUUzQyx5Q0FBdUM7O0lBQ3ZDLDJDQUFzQjs7SUFDdEIsNkNBQXdCOztJQUN4Qiw4Q0FBeUI7O0lBQ3pCLCtDQUEwQjs7SUFDMUIsb0RBQStCOztJQWdCL0IsNkNBQXdCOztJQUN4QiwrQ0FBMEI7O0lBQzFCLGdEQUEyQjs7SUFDM0IsaURBQTRCOztJQUM1QixzREFBaUM7O0lBRWpDLHFDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1oZWFkZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1oZWFkZXIuY29tcG9uZW50LnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdF9kYXRlO1xuXHRfZW5hYmxlVGltZXI7XG5cdEBJbnB1dCgpIHRpdGxlT25lID0gJ0xJU1RJTkcgTkFNRSc7XG5cdEBJbnB1dCgpIHRpdGxlT25lSWQ7XG5cdEBJbnB1dCgpIHRpdGxlT25lU2l6ZTtcblx0QElucHV0KCkgdGl0bGVPbmVDb2xvcjtcblx0QElucHV0KCkgdGl0bGVPbmVXZWlnaHQ7XG5cdEBJbnB1dCgpIHRpdGxlT25lQ3VzdG9tQ2xhc3M7XG5cblx0QElucHV0KCkgY29udGVudE9uZSA9ICdOL0EnO1xuXHRASW5wdXQoKSBjb250ZW50T25lSWQ7XG5cdEBJbnB1dCgpIGNvbnRlbnRPbmVTaXplO1xuXHRASW5wdXQoKSBjb250ZW50T25lQ29sb3I7XG5cdEBJbnB1dCgpIGNvbnRlbnRPbmVXZWlnaHQ7XG5cdEBJbnB1dCgpIGNvbnRlbnRPbmVDdXN0b21DbGFzcztcblxuXHRASW5wdXQoKSB0aXRsZVR3byA9ICdTRUxMRVIgTkFNRSc7XG5cdEBJbnB1dCgpIHRpdGxlVHdvSWQ7XG5cdEBJbnB1dCgpIHRpdGxlVHdvU2l6ZTtcblx0QElucHV0KCkgdGl0bGVUd29Db2xvcjtcblx0QElucHV0KCkgdGl0bGVUd29XZWlnaHQ7XG5cdEBJbnB1dCgpIHRpdGxlVHdvQ3VzdG9tQ2xhc3M7XG5cblx0QElucHV0KCkgY29udGVudFR3byA9ICdOL0EnO1xuXHRASW5wdXQoKSBjb250ZW50VHdvSWQ7XG5cdEBJbnB1dCgpIGNvbnRlbnRUd29TaXplO1xuXHRASW5wdXQoKSBjb250ZW50VHdvQ29sb3I7XG5cdEBJbnB1dCgpIGNvbnRlbnRUd29XZWlnaHQ7XG5cdEBJbnB1dCgpIGNvbnRlbnRUd29DdXN0b21DbGFzcz1cImMtcG9pbnRlclwiO1xuXG5cdEBJbnB1dCgpIHRpdGxlVGhyZWUgPSAnVElNRSBSRU1BSU5JTkcnO1xuXHRASW5wdXQoKSB0aXRsZVRocmVlSWQ7XG5cdEBJbnB1dCgpIHRpdGxlVGhyZWVTaXplO1xuXHRASW5wdXQoKSB0aXRsZVRocmVlQ29sb3I7XG5cdEBJbnB1dCgpIHRpdGxlVGhyZWVXZWlnaHQ7XG5cdEBJbnB1dCgpIHRpdGxlVGhyZWVDdXN0b21DbGFzcztcblxuXHRASW5wdXQoKVxuXHRnZXQgY29udGVudFRocmVlKCkge1xuXHRcdHJldHVybiB0aGlzLl9kYXRlO1xuXHR9XG5cdHNldCBjb250ZW50VGhyZWUodmFsKSB7XG5cdFx0dGhpcy5fZGF0ZSA9IHZhbDtcblx0fVxuXHRASW5wdXQoKVxuXHRnZXQgZW5hYmxlVGltZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2VuYWJsZVRpbWVyO1xuXHR9XG5cdHNldCBlbmFibGVUaW1lcih2YWwpIHtcblx0XHR0aGlzLl9lbmFibGVUaW1lciA9IHZhbDtcblx0fVxuXHRASW5wdXQoKSBjb250ZW50VGhyZWVJZDtcblx0QElucHV0KCkgY29udGVudFRocmVlU2l6ZTtcblx0QElucHV0KCkgY29udGVudFRocmVlQ29sb3I7XG5cdEBJbnB1dCgpIGNvbnRlbnRUaHJlZVdlaWdodDtcblx0QElucHV0KCkgY29udGVudFRocmVlQ3VzdG9tQ2xhc3M7XG5cblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuY29udGVudFRocmVlID0gJ04vQSc7XG5cdH1cbn0iXX0=