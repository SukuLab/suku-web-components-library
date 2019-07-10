/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.traceMethodRadio = 'method';
        this.tracetheProductId = '';
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
                    template: "<span [formGroup]=\"form\">\n  <div class=\" product-boxContent\">\n    <div class=\"col-sm-12 prizeHead pl-0\">\n      {{headName}}\n    </div>\n    <div class=\"col-sm-12 prizesubHead pl-0\">\n      {{subHeadName}}\n    </div>\n  </div>\n  <div class=\"col-sm-12 mt-2 pt-4 pb-4 RectangleBorder\">\n    <div class=\"col-sm-12 productName pb-1\">\n      {{name}}\n    </div>\n    <div class=\"col-sm-12 pb-2 pl-3 pt-2 p-0 searchBorderBox\">\n      <input type=\"text\" #search class=\"searchBorderStyles\" formControlName=\"{{control}}\" name=\"{{control}}\"\n      (keyup)=\"searchFun.emit(isSearch)\">\n      <span class=\"m-1\"><i class=\"fa fa-search\" style=\"font-size:22px;color:#b6b6b6;\"></i></span>\n    </div>\n    <p class=\"resultCount\" *ngIf=\"_result == 'true'\">{{productdetails?.length}} products found with the above number.\n    </p>\n    <div *ngIf=\"_visible == 'false'\">\n      <p class=\"responseInfo\" *ngIf=\"productdetails?.length > 0 ? true : false \">please select one</p>\n      <div class=\"heightTab\" id=\"scrollDiv\">\n        <div class=\"col\" *ngFor=\"let products of productdetails\">\n          <mat-radio-button class=\"searchData f13\" value=\"2\" (click)=\"selectproducts.emit(products)\"\n            (click)=\"showSelectedPro(products)\"> {{products?.asset?.description}}<br>\n            {{products?.asset?.name}}<br></mat-radio-button>\n          <hr>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 mb-2 text-center pt-3 mt-3 pb-1\">\n      <span class=\"pt-2\">\n        <a *ngIf=\"_visible == 'true'\" id=\"{{searchId}}\" class=\"trackBtn btn f14\" (click)=\"searchByProduct.emit()\">\n          Search for product </a>\n        <a *ngIf=\"_visible == 'false'\" [ngClass]=\"{'disabled': _disableBtn =='false' }\" id=\"{{tracetheProductId}}\" class=\"trackBtn btn f14\"\n          (click)=\"traceproduct.emit(1)\"> trace the\n          product </a>\n      </span>\n    </div>\n  </div>\n</span>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".product-boxContent{width:100%;float:left;background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}.prizeHead{width:100%;float:left;font-size:15px;color:#e5e5e5;line-height:1em;margin:0 0 8px}.prizesubHead{width:100%;float:left;font-family:Poppins-Regular,sans-serif!important;font-size:15px;color:#e5e5e5;line-height:1em;margin:0 0 12px}.RectangleBorder{background-color:#fff;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);border-radius:0;margin-top:63px!important;padding-right:20px;padding-left:20px}.productName{color:#7f7e7e;font-size:13px}.searchBorderStyles{width:87%;border-width:0}.searchBorderBox{border:1px solid #b6b6b6;border-radius:12px 25.5px 25.5px;font-size:15px;margin-top:7px}.productCount{color:#b6b6b6;font-size:12px}.trackBtn{font-family:\"Encode Sans\",sans-serif;font-size:11px;padding:.55rem .99rem}.trackBtn:hover{color:#fff!important;background:#a7bf2e!important}.trackBtn.disabled:hover{color:#000!important;background:#fff}.pTB11{padding-bottom:8px;padding-top:10px}.searchData{word-break:normal;font-size:13px;color:#b6b6b6;font-family:Poppins,sans-serif!important}.resultCount{color:#898787;font-size:12px;padding-left:13px}.responseInfo{color:#b6b6b6;font-size:12px;padding-left:13px}.heightTab{max-height:230px;overflow-x:hidden}::-webkit-scrollbar-thumb{background:#a7bf2e;border-radius:60px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #a7bf2e;border-radius:60px}.searchData>label{white-space:pre-wrap!important;line-height:normal!important;white-space:pre-wrap}#scrollDiv::-webkit-scrollbar{width:6px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:60px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#a7bf2e!important}.mat-radio-button.mat-accent .mat-radio-inner-circle::before{font-family:\"Font Awesome 5 Free\",sans-serif!important;content:\"\\f058\"!important;display:inline-block!important;vertical-align:middle;font-weight:900;font-size:35px!important;color:#a7bf2e;margin:-7.6px 0 0 -8px!important}.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#fafafa!important}.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:#a7bf2e3a!important}"]
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
        traceMethodRadio: [{ type: Input }],
        tracetheProductId: [{ type: Input }],
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
    SukuProductTraceWidgetComponent.prototype.i;
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
    SukuProductTraceWidgetComponent.prototype.traceMethodRadio;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.tracetheProductId;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.searchFun;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.selectproducts;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.searchByProduct;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.traceproduct;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC9zdWt1LXByb2R1Y3QtdHJhY2Utd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUF1RUU7UUEvREEsUUFBRyxHQUFHLElBQUksQ0FBQztRQUNYLFNBQUksR0FBRyxLQUFLLENBQUM7UUFLYixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBT1IsYUFBUSxHQUFHLGVBQWUsQ0FBQztRQUMzQixjQUFTLEdBQUcsaUJBQWlCLENBQUM7UUFDOUIscUJBQWdCLEdBQUcsUUFBUSxDQUFDO1FBQzVCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQTJDNUIsQ0FBQztJQTFDakIsc0JBQ0ksdURBQVU7Ozs7UUFEZDtZQUVFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDOzs7OztRQUNELFVBQWUsR0FBRztZQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN6QixDQUFDOzs7T0FIQTtJQUlELHNCQUNJLDJEQUFjOzs7O1FBRGxCO1lBRUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7Ozs7O1FBQ0QsVUFBbUIsR0FBRztZQUNwQixJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDOUI7UUFDSCxDQUFDOzs7T0FMQTtJQU9ELHNCQUNJLG1EQUFNOzs7O1FBRFY7WUFFRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7Ozs7UUFDRCxVQUFXLEdBQUc7WUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNyQixDQUFDOzs7T0FIQTs7OztJQUtELHVEQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxzQkFDSSxvREFBTzs7OztRQURYO1lBRUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7Ozs7O1FBRUQsVUFBWSxHQUFHO1lBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDdEIsQ0FBQzs7O09BSkE7Ozs7O0lBTUQseURBQWU7Ozs7SUFBZixVQUFnQixRQUFRO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO0lBQy9CLENBQUM7Ozs7SUFJRCxrREFBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkExRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLHk3REFBeUQ7b0JBRXpELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7O3VCQUVFLEtBQUs7MkJBVUwsS0FBSyxTQUFDLFdBQVc7OEJBQ2pCLEtBQUssU0FBQyxlQUFlO3VCQUNyQixLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLO21DQUNMLEtBQUs7b0NBQ0wsS0FBSzs0QkFDTCxNQUFNO2lDQUNOLE1BQU07a0NBQ04sTUFBTTsrQkFDTixNQUFNOzZCQUNOLEtBQUs7aUNBT0wsS0FBSzt5QkFVTCxLQUFLOzBCQVlMLEtBQUssU0FBQyxTQUFTOztJQWtCbEIsc0NBQUM7Q0FBQSxBQTVFRCxJQTRFQztTQXRFWSwrQkFBK0I7OztJQUMxQywrQ0FBeUI7O0lBQ3pCLDhDQUFXOztJQUNYLCtDQUFhOztJQUNiLG1EQUFTOztJQUNULGdEQUFNOztJQUNOLHNEQUFZOztJQUNaLHVEQUFhOztJQUNiLG1EQUFpQjs7SUFDakIsa0RBQVE7O0lBQ1IsNENBQUU7O0lBQ0YsbURBQTZCOztJQUM3QixzREFBb0M7O0lBQ3BDLCtDQUFjOztJQUNkLGtEQUFpQjs7SUFDakIsbURBQW9DOztJQUNwQyxvREFBdUM7O0lBQ3ZDLDJEQUFxQzs7SUFDckMsNERBQWdDOztJQUNoQyxvREFBeUM7O0lBQ3pDLHlEQUE4Qzs7SUFDOUMsMERBQStDOztJQUMvQyx1REFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXByb2R1Y3QtdHJhY2Utd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtcHJvZHVjdC10cmFjZS13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXByb2R1Y3QtdHJhY2Utd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VQcm9kdWN0VHJhY2VXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG4gIHZhbCA9IHRydWU7XG4gIHZhbDIgPSBmYWxzZTtcbiAgX3Zpc2libGU7XG4gIF9kYXRhO1xuICBfZGlzYWJsZUJ0bjtcbiAgc2VsZWN0ZWRJdGVtO1xuICBpc1NlYXJjaCA9IGZhbHNlO1xuICBfcmVzdWx0O1xuICBpO1xuICBASW5wdXQoJ2hlYWQtbmFtZScpIGhlYWROYW1lO1xuICBASW5wdXQoJ3N1Yi1IZWFkLU5hbWUnKSBzdWJIZWFkTmFtZTtcbiAgQElucHV0KCkgbmFtZTtcbiAgQElucHV0KCkgY29udHJvbDtcbiAgQElucHV0KCkgc2VhcmNoSWQgPSAnc2VhcmNoUHJvZHVjdCc7XG4gIEBJbnB1dCgpIHByb2R1Y3RJZCA9ICd0cmFjZXRoZVByb2R1Y3QnO1xuICBASW5wdXQoKSB0cmFjZU1ldGhvZFJhZGlvID0gJ21ldGhvZCc7XG4gIEBJbnB1dCgpIHRyYWNldGhlUHJvZHVjdElkID0gJyc7XG4gIEBPdXRwdXQoKSBzZWFyY2hGdW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWxlY3Rwcm9kdWN0cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlYXJjaEJ5UHJvZHVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHRyYWNlcHJvZHVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVCdG4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVCdG47XG4gIH1cbiAgc2V0IGRpc2FibGVCdG4odmFsKSB7XG4gICAgdGhpcy5fZGlzYWJsZUJ0biA9IHZhbDtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgcHJvZHVjdGRldGFpbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbiAgc2V0IHByb2R1Y3RkZXRhaWxzKHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBKU09OLnBhcnNlKHZhbCk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlc3VsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0O1xuICB9XG4gIHNldCByZXN1bHQocmVzKSB7XG4gICAgdGhpcy5fcmVzdWx0ID0gcmVzO1xuICB9XG5cbiAgc2VhcmNoRW5hYmxlZCgpIHtcbiAgICB0aGlzLmlzU2VhcmNoID0gIXRoaXMuaXNTZWFyY2g7XG4gIH1cblxuICBASW5wdXQoJ3Zpc2libGUnKVxuICBnZXQgdmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgfVxuXG4gIHNldCB2aXNpYmxlKHZhbCkge1xuICAgIHRoaXMuX3Zpc2libGUgPSB2YWw7XG4gIH1cblxuICBzaG93U2VsZWN0ZWRQcm8obmV3VmFsdWUpIHtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG5ld1ZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG5cbiJdfQ==