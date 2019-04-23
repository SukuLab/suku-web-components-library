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
        console.log(val);
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
        console.log(val);
        this._enableTimer = val;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-header',
                template: "<div class=\"product-boxContent\">\n  <div class=\"col pl-lg-5 pt-3 pb-3\">\n    <div class=\"row\">\n      <div class=\"col pl-lg-5\">\n        <h1>{{titleOne}}</h1>\n        <h2>{{contentOne}}</h2>\n      </div>\n      <div class=\"col pl-lg-5\">\n        <h1>{{titleTwo}}</h1>\n        <h2 class=\"c-pointer\" (click)=\"action.emit()\">{{contentTwo}}</h2>\n      </div>\n      <div class=\"col pl-lg-5\">\n        <h1>{{titleThree}}</h1>\n        <h2 *ngIf=\"(_enableTimer == 'false')\">\n          {{contentThree}}\n        </h2>\n        <h2 *ngIf=\"(_enableTimer == 'true')\">\n          <countdown-timer [end]=\"_date\"></countdown-timer>\n        </h2>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: [".product-boxContent{width:100%;float:left;background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}h1{color:#fafaf8;font-size:17px}h2{color:#f9f9f1bd;font-size:15px}.c-pointer{cursor:pointer;text-transform:capitalize}.c-pointer:hover{color:#fff;text-decoration:underline}.prizeHead{width:100%;float:left;color:#e5e5e5;line-height:1em;margin:0 0 8px}.prizesubHead{width:100%;float:left;font-family:Poppins-Regular,sans-serif!important;font-size:15px;color:#e5e5e5;line-height:1em;margin:0 0 12px}.RectangleBorder{background-color:#fff;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);border-radius:0;margin-top:63px!important;padding-right:20px;padding-left:20px}.productName{color:#7f7e7e;font-size:13px}"]
            }] }
];
/** @nocollapse */
SukuHeaderComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtaGVhZGVyL3N1a3UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sbUJBQW1CO0lBeUIvQjtRQXRCUyxhQUFRLEdBQUcsY0FBYyxDQUFDO1FBQzFCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsYUFBUSxHQUFHLGFBQWEsQ0FBQztRQUN6QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztRQWlCN0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQWpCaEIsSUFDSSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBQ0QsSUFBSSxZQUFZLENBQUMsR0FBRztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFDRCxJQUNJLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFDRCxJQUFJLFdBQVcsQ0FBQyxHQUFHO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7SUFDekIsQ0FBQzs7OztJQUlELFFBQVE7SUFDUixDQUFDOzs7WUFqQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxhQUFhO2dCQUN2Qiw0c0JBQTJDOzthQUUzQzs7Ozs7dUJBSUMsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBUUwsS0FBSztxQkFRTCxNQUFNOzs7O0lBdkJQLG9DQUFNOztJQUNOLDJDQUFhOztJQUNiLHVDQUFtQzs7SUFDbkMseUNBQTRCOztJQUM1Qix1Q0FBa0M7O0lBQ2xDLHlDQUE0Qjs7SUFDNUIseUNBQXVDOztJQWlCdkMscUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LWhlYWRlcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LWhlYWRlci5jb21wb25lbnQuc2NzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1SGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0X2RhdGU7XG5cdF9lbmFibGVUaW1lcjtcblx0QElucHV0KCkgdGl0bGVPbmUgPSAnTElTVElORyBOQU1FJztcblx0QElucHV0KCkgY29udGVudE9uZSA9ICdOL0EnO1xuXHRASW5wdXQoKSB0aXRsZVR3byA9ICdTRUxMRVIgTkFNRSc7XG5cdEBJbnB1dCgpIGNvbnRlbnRUd28gPSAnTi9BJztcblx0QElucHV0KCkgdGl0bGVUaHJlZSA9ICdUSU1FIFJFTUFJTklORyc7XG5cdEBJbnB1dCgpXG5cdGdldCBjb250ZW50VGhyZWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2RhdGU7XG5cdH1cblx0c2V0IGNvbnRlbnRUaHJlZSh2YWwpIHtcblx0XHRjb25zb2xlLmxvZyh2YWwpO1xuXHRcdHRoaXMuX2RhdGUgPSB2YWw7XG5cdH1cblx0QElucHV0KClcblx0Z2V0IGVuYWJsZVRpbWVyKCkge1xuXHRcdHJldHVybiB0aGlzLl9lbmFibGVUaW1lcjtcblx0fVxuXHRzZXQgZW5hYmxlVGltZXIodmFsKSB7XG5cdFx0Y29uc29sZS5sb2codmFsKTtcblx0XHR0aGlzLl9lbmFibGVUaW1lciA9IHZhbDtcblx0fVxuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxufVxuIl19