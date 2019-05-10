/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuHeaderComponent {
    constructor() {
        this.titleOne = 'LISTING NAME';
        this.contentOne = 'N/A';
        this.titleTwo = 'SELLER NAME';
        this.contentTwo = 'N/A';
        this.contentTwoCustomClass = "c-pointer";
        this.titleThree = 'TIME REMAINING';
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
                template: "<div class=\"product-boxContent\">\n  <div class=\"col pl-lg-5 pt-3 pb-3\">\n    <div class=\"row\">\n      <div class=\"col pl-lg-5\">\n        <h1 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOneCustomClass\" [style.font-weight]=\"titleOneWeight\"\n          [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\">{{titleOne}}</h1>\n        <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOneCustomClass\" [style.font-weight]=\"contentOneWeight\"\n          [style.color]=\"contentOneColor\" id=\"{{contentOneId}}\">{{contentOne}}</h2>\n      </div>\n      <div class=\"col pl-lg-5\">\n        <h1 [style.font-size.px]=\"titleTwoSize\" [class]=\"titleTwoCustomClass\" [style.font-weight]=\"titleTwoWeight\"\n          [style.color]=\"titleTwoColor\" id=\"{{titleTwoId}}\">{{titleTwo}}</h1>\n        <h2 class=\"c-pointer\" (click)=\"action.emit()\" [style.font-size.px]=\"contentTwoSize\"\n          [class]=\"contentTwoCustomClass\" [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\"\n          id=\"{{contentTwoId}}\">{{contentTwo}}</h2>\n      </div>\n      <div class=\"col pl-lg-5\">\n        <h1 [style.font-size.px]=\"titleThreeSize\" [class]=\"titleThreeCustomClass\" [style.font-weight]=\"titleThreeWeight\"\n          [style.color]=\"titleThreeColor\" id=\"{{titleThreeId}}\">{{titleThree}}</h1>\n        <h2 *ngIf=\"(_enableTimer == 'false')\" [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreeCustomClass\"\n          [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\" id=\"{{contentThreeId}}\">\n          {{contentThree}}\n        </h2>\n        <h2 *ngIf=\"(_enableTimer == 'true')\">\n          <countdown-timer [end]=\"_date\"></countdown-timer>\n        </h2>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.product-boxContent{width:100%;float:left;background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}h1{color:#fafaf8;font-size:17px}h2{color:#f9f9f1bd;font-size:15px}.c-pointer{cursor:pointer;text-transform:capitalize}.c-pointer:hover{color:#fff;text-decoration:underline}.prizeHead{width:100%;float:left;color:#e5e5e5;line-height:1em;margin:0 0 8px}.prizesubHead{width:100%;float:left;font-family:Poppins,sans-serif!important;font-size:15px;color:#e5e5e5;line-height:1em;margin:0 0 12px}.RectangleBorder{background-color:#fff;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);border-radius:0;margin-top:63px!important;padding-right:20px;padding-left:20px}.productName{color:#7f7e7e;font-size:13px}"]
            }] }
];
/** @nocollapse */
SukuHeaderComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtaGVhZGVyL3N1a3UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sbUJBQW1CO0lBMkQvQjtRQXhEUyxhQUFRLEdBQUcsY0FBYyxDQUFDO1FBTzFCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFPbkIsYUFBUSxHQUFHLGFBQWEsQ0FBQztRQU96QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBS25CLDBCQUFxQixHQUFDLFdBQVcsQ0FBQztRQUVsQyxlQUFVLEdBQUcsZ0JBQWdCLENBQUM7UUEyQjdCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFyQmhCLElBQ0ksWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7OztJQUNELElBQUksWUFBWSxDQUFDLEdBQUc7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDbEIsQ0FBQzs7OztJQUNELElBQ0ksV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7OztJQUNELElBQUksV0FBVyxDQUFDLEdBQUc7UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7SUFDekIsQ0FBQzs7OztJQVVELFFBQVE7UUFDUCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOzs7WUFwRUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxhQUFhO2dCQUN2Qiw2eERBQTJDOzthQUUzQzs7Ozs7dUJBSUMsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLO2tDQUNMLEtBQUs7eUJBRUwsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzsrQkFDTCxLQUFLO29DQUNMLEtBQUs7dUJBRUwsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLO2tDQUNMLEtBQUs7eUJBRUwsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzsrQkFDTCxLQUFLO29DQUNMLEtBQUs7eUJBRUwsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzsrQkFDTCxLQUFLO29DQUNMLEtBQUs7MkJBRUwsS0FBSzswQkFPTCxLQUFLOzZCQU9MLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLO2lDQUNMLEtBQUs7c0NBQ0wsS0FBSztxQkFFTCxNQUFNOzs7O0lBekRQLG9DQUFNOztJQUNOLDJDQUFhOztJQUNiLHVDQUFtQzs7SUFDbkMseUNBQW9COztJQUNwQiwyQ0FBc0I7O0lBQ3RCLDRDQUF1Qjs7SUFDdkIsNkNBQXdCOztJQUN4QixrREFBNkI7O0lBRTdCLHlDQUE0Qjs7SUFDNUIsMkNBQXNCOztJQUN0Qiw2Q0FBd0I7O0lBQ3hCLDhDQUF5Qjs7SUFDekIsK0NBQTBCOztJQUMxQixvREFBK0I7O0lBRS9CLHVDQUFrQzs7SUFDbEMseUNBQW9COztJQUNwQiwyQ0FBc0I7O0lBQ3RCLDRDQUF1Qjs7SUFDdkIsNkNBQXdCOztJQUN4QixrREFBNkI7O0lBRTdCLHlDQUE0Qjs7SUFDNUIsMkNBQXNCOztJQUN0Qiw2Q0FBd0I7O0lBQ3hCLDhDQUF5Qjs7SUFDekIsK0NBQTBCOztJQUMxQixvREFBMkM7O0lBRTNDLHlDQUF1Qzs7SUFDdkMsMkNBQXNCOztJQUN0Qiw2Q0FBd0I7O0lBQ3hCLDhDQUF5Qjs7SUFDekIsK0NBQTBCOztJQUMxQixvREFBK0I7O0lBZ0IvQiw2Q0FBd0I7O0lBQ3hCLCtDQUEwQjs7SUFDMUIsZ0RBQTJCOztJQUMzQixpREFBNEI7O0lBQzVCLHNEQUFpQzs7SUFFakMscUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LWhlYWRlcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LWhlYWRlci5jb21wb25lbnQuc2NzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1SGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0X2RhdGU7XG5cdF9lbmFibGVUaW1lcjtcblx0QElucHV0KCkgdGl0bGVPbmUgPSAnTElTVElORyBOQU1FJztcblx0QElucHV0KCkgdGl0bGVPbmVJZDtcblx0QElucHV0KCkgdGl0bGVPbmVTaXplO1xuXHRASW5wdXQoKSB0aXRsZU9uZUNvbG9yO1xuXHRASW5wdXQoKSB0aXRsZU9uZVdlaWdodDtcblx0QElucHV0KCkgdGl0bGVPbmVDdXN0b21DbGFzcztcblxuXHRASW5wdXQoKSBjb250ZW50T25lID0gJ04vQSc7XG5cdEBJbnB1dCgpIGNvbnRlbnRPbmVJZDtcblx0QElucHV0KCkgY29udGVudE9uZVNpemU7XG5cdEBJbnB1dCgpIGNvbnRlbnRPbmVDb2xvcjtcblx0QElucHV0KCkgY29udGVudE9uZVdlaWdodDtcblx0QElucHV0KCkgY29udGVudE9uZUN1c3RvbUNsYXNzO1xuXG5cdEBJbnB1dCgpIHRpdGxlVHdvID0gJ1NFTExFUiBOQU1FJztcblx0QElucHV0KCkgdGl0bGVUd29JZDtcblx0QElucHV0KCkgdGl0bGVUd29TaXplO1xuXHRASW5wdXQoKSB0aXRsZVR3b0NvbG9yO1xuXHRASW5wdXQoKSB0aXRsZVR3b1dlaWdodDtcblx0QElucHV0KCkgdGl0bGVUd29DdXN0b21DbGFzcztcblxuXHRASW5wdXQoKSBjb250ZW50VHdvID0gJ04vQSc7XG5cdEBJbnB1dCgpIGNvbnRlbnRUd29JZDtcblx0QElucHV0KCkgY29udGVudFR3b1NpemU7XG5cdEBJbnB1dCgpIGNvbnRlbnRUd29Db2xvcjtcblx0QElucHV0KCkgY29udGVudFR3b1dlaWdodDtcblx0QElucHV0KCkgY29udGVudFR3b0N1c3RvbUNsYXNzPVwiYy1wb2ludGVyXCI7XG5cblx0QElucHV0KCkgdGl0bGVUaHJlZSA9ICdUSU1FIFJFTUFJTklORyc7XG5cdEBJbnB1dCgpIHRpdGxlVGhyZWVJZDtcblx0QElucHV0KCkgdGl0bGVUaHJlZVNpemU7XG5cdEBJbnB1dCgpIHRpdGxlVGhyZWVDb2xvcjtcblx0QElucHV0KCkgdGl0bGVUaHJlZVdlaWdodDtcblx0QElucHV0KCkgdGl0bGVUaHJlZUN1c3RvbUNsYXNzO1xuXG5cdEBJbnB1dCgpXG5cdGdldCBjb250ZW50VGhyZWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2RhdGU7XG5cdH1cblx0c2V0IGNvbnRlbnRUaHJlZSh2YWwpIHtcblx0XHR0aGlzLl9kYXRlID0gdmFsO1xuXHR9XG5cdEBJbnB1dCgpXG5cdGdldCBlbmFibGVUaW1lcigpIHtcblx0XHRyZXR1cm4gdGhpcy5fZW5hYmxlVGltZXI7XG5cdH1cblx0c2V0IGVuYWJsZVRpbWVyKHZhbCkge1xuXHRcdHRoaXMuX2VuYWJsZVRpbWVyID0gdmFsO1xuXHR9XG5cdEBJbnB1dCgpIGNvbnRlbnRUaHJlZUlkO1xuXHRASW5wdXQoKSBjb250ZW50VGhyZWVTaXplO1xuXHRASW5wdXQoKSBjb250ZW50VGhyZWVDb2xvcjtcblx0QElucHV0KCkgY29udGVudFRocmVlV2VpZ2h0O1xuXHRASW5wdXQoKSBjb250ZW50VGhyZWVDdXN0b21DbGFzcztcblxuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5jb250ZW50VGhyZWUgPSAnTi9BJztcblx0fVxufSJdfQ==