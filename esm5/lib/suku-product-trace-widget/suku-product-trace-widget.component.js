/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
var SukuProductTraceWidgetComponent = /** @class */ (function () {
    function SukuProductTraceWidgetComponent() {
        this.val = true;
        this.val2 = false;
        this.isSearch = false;
        this.searchId = 'searchProduct';
        this.productId = 'tracetheProduct';
        this.searchFun = new EventEmitter();
        this.selectproducts = new EventEmitter();
        this.searchByProduct = new EventEmitter();
        this.traceproduct = new EventEmitter();
    }
    Object.defineProperty(SukuProductTraceWidgetComponent.prototype, "disableBtn", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disableBtn;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._disableBtn = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuProductTraceWidgetComponent.prototype, "productdetails", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                this._data = JSON.parse(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuProductTraceWidgetComponent.prototype, "result", {
        get: /**
         * @return {?}
         */
        function () {
            return this._result;
        },
        set: /**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            this._result = res;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SukuProductTraceWidgetComponent.prototype.searchEnabled = /**
     * @return {?}
     */
    function () {
        this.isSearch = !this.isSearch;
    };
    Object.defineProperty(SukuProductTraceWidgetComponent.prototype, "visible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._visible = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} newValue
     * @return {?}
     */
    SukuProductTraceWidgetComponent.prototype.showSelectedPro = /**
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        this.selectedItem = newValue;
    };
    /**
     * @return {?}
     */
    SukuProductTraceWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuProductTraceWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-product-trace-widget',
                    template: "<span [formGroup]=\"form\">\r\n  <div class=\" product-boxContent\">\r\n    <div class=\"col-sm-12 prizeHead pl-0\">\r\n      {{headName}}\r\n    </div>\r\n    <div class=\"col-sm-12 prizesubHead pl-0\">\r\n      {{subHeadName}}\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12 mt-2 pt-4 pb-4 RectangleBorder\">\r\n    <div class=\"col-sm-12 productName pb-3\">\r\n      {{name}}\r\n    </div>\r\n    <div class=\"col-sm-12 pb-2 pl-3 p-0 searchBorderBox\">\r\n      <input type=\"text\" #search class=\"searchBorderStyles\" formControlName=\"{{control}}\" name=\"{{control}}\"\r\n        placeholder=\"search\" (keyup)=\"searchFun.emit(isSearch)\">\r\n      <span class=\"m-1\"><i class=\"fa fa-search\" style=\"font-size:22px;color:#b6b6b6;\"></i></span>\r\n    </div>\r\n    <p class=\"resultCount\" *ngIf=\"_result == 'true'\">{{productdetails?.length}} products found with the above number.\r\n    </p>\r\n    <div *ngIf=\"_visible == 'false'\">\r\n      <p class=\"responseInfo\" *ngIf=\"productdetails?.length > 0 ? true : false \">please select one</p>\r\n      <div class=\"heightTab\" id=\"scrollDiv\">\r\n        <div class=\"col\" *ngFor=\"let products of productdetails;let i=index\">\r\n          <mat-radio-button id = \"productRadio{{i}}\" color=\"primary\" class=\"searchData f13\" value=\"2\" (click)=\"selectproducts.emit(products)\"\r\n            (click)=\"showSelectedPro(products)\">{{products.product.description}}<br>\r\n            {{products.product.name}}<br></mat-radio-button>\r\n          <hr>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12 mb-2 text-center pt-3 mt-3 pb-1\">\r\n      <span class=\"pt-2\">\r\n        <a *ngIf=\"_visible == 'true'\" id=\"{{searchId}}\" class=\"trackBtn btn-info f14\" (click)=\"searchByProduct.emit()\">\r\n          Search for product </a>\r\n        <a *ngIf=\"_visible == 'false'\" [ngClass]=\"{'disabled': _disableBtn =='false' }\" id=\"{{productId}}\" class=\"trackBtn btn-info f14\"\r\n          (click)=\"traceproduct.emit(1)\"> trace the\r\n          product </a>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</span>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".product-boxContent{width:100%;float:left;background:#494848;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:15px 5px 4px 15px;margin:0}.prizeHead{width:100%;float:left;font-size:17px;color:#e5e5e5;line-height:1em;margin:0 0 12px}.prizesubHead{width:100%;float:left;font-family:Poppins-Regular,sans-serif!important;font-size:15px;color:#e5e5e5;line-height:1em;margin:0 0 12px}.RectangleBorder{background-color:#fff;box-shadow:0 -4px 2px 0 rgba(0,0,0,.08);border-radius:0;margin-top:84px!important}.productName{color:#e5e5e5;font-size:13px}.searchBorderBox{border:1px solid #b6b6b6;border-radius:12px 25.5px 25.5px;font-size:15px}.searchBorderStyles{width:87%;padding:5px 0 0;border-width:0}.productCount{color:#b6b6b6;font-size:12px}.trackBtn{font-family:\"Encode Sans\",sans-serif;font-size:15px;padding:.55rem .85rem}.trackBtn:hover{color:#fff!important;background:#a7bf2e!important}.trackBtn.disabled:hover{color:grey!important;background:#a7bf2e!important}.pTB11{padding-bottom:8px;padding-top:10px}.searchData{color:#b6b6b6}.resultCount{color:#e5e5e5;font-size:12px;padding-left:13px}.responseInfo{color:#b6b6b6;font-size:12px;padding-left:13px}.heightTab{max-height:230px;overflow-x:hidden}::-webkit-scrollbar-thumb{background:#a7bf2e;border-radius:60px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #a7bf2e;border-radius:60px}#scrollDiv::-webkit-scrollbar{width:6px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:60px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}"]
                }] }
    ];
    /** @nocollapse */
    SukuProductTraceWidgetComponent.ctorParameters = function () { return []; };
    SukuProductTraceWidgetComponent.propDecorators = {
        form: [{ type: Input }],
        headName: [{ type: Input, args: ['head-name',] }],
        subHeadName: [{ type: Input, args: ['sub-Head-Name',] }],
        name: [{ type: Input }],
        control: [{ type: Input }],
        searchId: [{ type: Input }],
        productId: [{ type: Input }],
        searchFun: [{ type: Output }],
        selectproducts: [{ type: Output }],
        searchByProduct: [{ type: Output }],
        traceproduct: [{ type: Output }],
        disableBtn: [{ type: Input }],
        productdetails: [{ type: Input }],
        result: [{ type: Input }],
        visible: [{ type: Input, args: ['visible',] }]
    };
    return SukuProductTraceWidgetComponent;
}());
export { SukuProductTraceWidgetComponent };
if (false) {
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.form;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.val;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.val2;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype._visible;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype._data;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype._disableBtn;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.selectedItem;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.isSearch;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype._result;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.headName;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.subHeadName;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.name;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.control;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.searchId;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.productId;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.searchFun;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.selectproducts;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.searchByProduct;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.traceproduct;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC9zdWt1LXByb2R1Y3QtdHJhY2Utd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFxRUU7UUE3REEsUUFBRyxHQUFHLElBQUksQ0FBQztRQUNYLFNBQUksR0FBRyxLQUFLLENBQUM7UUFLYixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBT1IsYUFBUSxHQUFHLGVBQWUsQ0FBQztRQUMzQixjQUFTLEdBQUcsaUJBQWlCLENBQUM7UUFDN0IsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0IsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUEyQzVCLENBQUM7SUExQ2pCLHNCQUNJLHVEQUFVOzs7O1FBRGQ7WUFFRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFDRCxVQUFlLEdBQUc7WUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDekIsQ0FBQzs7O09BSEE7SUFJRCxzQkFDSSwyREFBYzs7OztRQURsQjtZQUVFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7OztRQUNELFVBQW1CLEdBQUc7WUFDcEIsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1FBQ0gsQ0FBQzs7O09BTEE7SUFPRCxzQkFDSSxtREFBTTs7OztRQURWO1lBRUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7Ozs7O1FBQ0QsVUFBVyxHQUFHO1lBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDckIsQ0FBQzs7O09BSEE7Ozs7SUFLRCx1REFBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0JBQ0ksb0RBQU87Ozs7UUFEWDtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7OztRQUVELFVBQVksR0FBRztZQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLENBQUM7OztPQUpBOzs7OztJQU1ELHlEQUFlOzs7O0lBQWYsVUFBZ0IsUUFBUTtRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztJQUMvQixDQUFDOzs7O0lBSUQsa0RBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBeEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyx5bEVBQXlEO29CQUV6RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7Ozt1QkFFRSxLQUFLOzJCQVVMLEtBQUssU0FBQyxXQUFXOzhCQUNqQixLQUFLLFNBQUMsZUFBZTt1QkFDckIsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxNQUFNO2lDQUNOLE1BQU07a0NBQ04sTUFBTTsrQkFDTixNQUFNOzZCQUNOLEtBQUs7aUNBT0wsS0FBSzt5QkFVTCxLQUFLOzBCQVlMLEtBQUssU0FBQyxTQUFTOztJQWtCbEIsc0NBQUM7Q0FBQSxBQTFFRCxJQTBFQztTQXBFWSwrQkFBK0I7OztJQUMxQywrQ0FBeUI7O0lBQ3pCLDhDQUFXOztJQUNYLCtDQUFhOztJQUNiLG1EQUFTOztJQUNULGdEQUFNOztJQUNOLHNEQUFZOztJQUNaLHVEQUFhOztJQUNiLG1EQUFpQjs7SUFDakIsa0RBQVE7O0lBRVIsbURBQTZCOztJQUM3QixzREFBb0M7O0lBQ3BDLCtDQUFjOztJQUNkLGtEQUFpQjs7SUFDakIsbURBQW9DOztJQUNwQyxvREFBdUM7O0lBQ3ZDLG9EQUF5Qzs7SUFDekMseURBQThDOztJQUM5QywwREFBK0M7O0lBQy9DLHVEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtcHJvZHVjdC10cmFjZS13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtcHJvZHVjdC10cmFjZS13aWRnZXQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdVByb2R1Y3RUcmFjZVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG4gIHZhbCA9IHRydWU7XHJcbiAgdmFsMiA9IGZhbHNlO1xyXG4gIF92aXNpYmxlO1xyXG4gIF9kYXRhO1xyXG4gIF9kaXNhYmxlQnRuO1xyXG4gIHNlbGVjdGVkSXRlbTtcclxuICBpc1NlYXJjaCA9IGZhbHNlO1xyXG4gIF9yZXN1bHQ7XHJcbiAgLy8gQElucHV0KCkgc2Vhc29ucyA7XHJcbiAgQElucHV0KCdoZWFkLW5hbWUnKSBoZWFkTmFtZTtcclxuICBASW5wdXQoJ3N1Yi1IZWFkLU5hbWUnKSBzdWJIZWFkTmFtZTtcclxuICBASW5wdXQoKSBuYW1lO1xyXG4gIEBJbnB1dCgpIGNvbnRyb2w7XHJcbiAgQElucHV0KCkgc2VhcmNoSWQgPSAnc2VhcmNoUHJvZHVjdCc7XHJcbiAgQElucHV0KCkgcHJvZHVjdElkID0gJ3RyYWNldGhlUHJvZHVjdCc7XHJcbiAgQE91dHB1dCgpIHNlYXJjaEZ1biA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0cHJvZHVjdHMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHNlYXJjaEJ5UHJvZHVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdHJhY2Vwcm9kdWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGRpc2FibGVCdG4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZUJ0bjtcclxuICB9XHJcbiAgc2V0IGRpc2FibGVCdG4odmFsKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlQnRuID0gdmFsO1xyXG4gIH1cclxuICBASW5wdXQoKVxyXG4gIGdldCBwcm9kdWN0ZGV0YWlscygpIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gIH1cclxuICBzZXQgcHJvZHVjdGRldGFpbHModmFsKSB7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIHRoaXMuX2RhdGEgPSBKU09OLnBhcnNlKHZhbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCByZXN1bHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0O1xyXG4gIH1cclxuICBzZXQgcmVzdWx0KHJlcykge1xyXG4gICAgdGhpcy5fcmVzdWx0ID0gcmVzO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoRW5hYmxlZCgpIHtcclxuICAgIHRoaXMuaXNTZWFyY2ggPSAhdGhpcy5pc1NlYXJjaDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgndmlzaWJsZScpXHJcbiAgZ2V0IHZpc2libGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcclxuICB9XHJcblxyXG4gIHNldCB2aXNpYmxlKHZhbCkge1xyXG4gICAgdGhpcy5fdmlzaWJsZSA9IHZhbDtcclxuICB9XHJcblxyXG4gIHNob3dTZWxlY3RlZFBybyhuZXdWYWx1ZSkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBuZXdWYWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19