/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class SukuProductTraceWidgetComponent {
    constructor() {
        this.val = true;
        this.val2 = false;
        this.isSearch = false;
        this.searchFun = new EventEmitter();
        this.selectproducts = new EventEmitter();
        this.searchByProduct = new EventEmitter();
        this.traceproduct = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get disableBtn() {
        return this._disableBtn;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set disableBtn(val) {
        this._disableBtn = val;
        console.log("disableBtn", this._disableBtn);
    }
    /**
     * @return {?}
     */
    get productdetails() {
        return this._data;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set productdetails(val) {
        if (val) {
            // this.disableBtn = true;
            console.log("disable", this.disableBtn);
            this._data = JSON.parse(val);
        }
    }
    /**
     * @return {?}
     */
    get result() {
        return this._result;
    }
    /**
     * @param {?} res
     * @return {?}
     */
    set result(res) {
        this._result = res;
        console.log("result", this._result);
    }
    /**
     * @return {?}
     */
    searchEnabled() {
        this.isSearch = !this.isSearch;
        console.log("this.isSearch", this.isSearch);
    }
    /**
     * @return {?}
     */
    searchReset() {
        // if (this.isSearch) {
        // 	this.visible = true;
        // 	console.log("btn", this.disableBtn , "val", this._visible);
        // }
    }
    /**
     * @param {?} val1
     * @param {?} val2
     * @return {?}
     */
    testFun(val1, val2) {
        console.log('val', val1, val2);
        // this.selectProduct.emit(val1, val2);
    }
    /**
     * @return {?}
     */
    get visible() {
        console.log('data', this._visible);
        return this._visible;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set visible(val) {
        this._visible = val;
        console.log('Setting date: ' + val);
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    showSelectedPro(newValue) {
        if (newValue) {
            // this.disableBtn = false;
            console.log("disable", this.disableBtn);
        }
        this.selectedItem = newValue;
        console.log('this.selectedItem', this.selectedItem);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuProductTraceWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-product-trace-widget',
                template: "<span [formGroup]=\"form\">\n  <div class=\" product-boxContent\">\n    <div class=\"col-sm-12 prizeHead pl-0\">\n      {{headName}}\n    </div>\n    <div class=\"col-sm-12 prizesubHead pl-0\">\n      {{subHeadName}}\n    </div>\n  </div>\n  <div class=\"col-sm-12 mt-2 pt-4 pb-4 RectangleBorder\">\n    <div class=\"col-sm-12 productName pb-3\">\n      {{name}}\n    </div>\n    <div class=\"col-sm-12 pb-2 pl-3 p-0 searchBorderBox\">\n      <input type=\"text\" #search class=\"searchBorderStyles\" formControlName=\"{{control}}\" name=\"{{control}}\"\n        placeholder=\"search\" (keyup)=\"searchFun.emit(isSearch)\">\n      <span class=\"m-1\"><i class=\"fa fa-search\" style=\"font-size:22px;color:#b6b6b6;\"></i></span>\n    </div>\n    <p class=\"resultCount\" *ngIf=\"_result == 'true'\">{{productdetails?.length}} products found with the above number.\n    </p>\n    <div *ngIf=\"_visible == 'false'\">\n      <p class=\"responseInfo\" *ngIf=\"productdetails?.length > 0 ? true : false \">please select one</p>\n      <div class=\"heightTab\" id=\"scrollDiv\">\n        <div class=\"col\" *ngFor=\"let products of productdetails\">\n          <mat-radio-button color=\"primary\" class=\"searchData f13\" value=\"2\" (click)=\"selectproducts.emit(products)\"\n            (click)=\"showSelectedPro(products)\">{{products.product.description}}<br>\n            {{products.product.name}}<br></mat-radio-button>\n          <hr>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 mb-2 text-center pt-3 mt-3 pb-1\">\n      <span class=\"pt-2\">\n        <a *ngIf=\"_visible == 'true'\" id=\"searchForProduct\" class=\"trackBtn btn-info f14\" (click)=\"searchByProduct.emit()\">\n          Search for product </a>\n        <a *ngIf=\"_visible == 'false'\" [ngClass]=\"{'disabled': _disableBtn =='false' }\" id=\"tracetheProduct\" class=\"trackBtn btn-info f14\"\n          (click)=\"traceproduct.emit(1)\"> trace the\n          product </a>\n      </span>\n    </div>\n  </div>\n</span>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".product-boxContent{width:100%;float:left;background:#494848;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:15px 5px 4px 15px;margin:0}.prizeHead{width:100%;float:left;font-size:17px;color:#e5e5e5;line-height:1em;margin:0 0 12px}.prizesubHead{width:100%;float:left;font-family:Poppins-Regular,sans-serif!important;font-size:15px;color:#e5e5e5;line-height:1em;margin:0 0 12px}.RectangleBorder{background-color:#fff;box-shadow:0 -4px 2px 0 rgba(0,0,0,.08);border-radius:0;margin-top:84px!important}.productName{color:#e5e5e5;font-size:13px}.searchBorderBox{border:1px solid #b6b6b6;border-radius:12px 25.5px 25.5px;font-size:15px}.searchBorderStyles{width:87%;padding:5px 0 0;border-width:0}.productCount{color:#b6b6b6;font-size:12px}.trackBtn{font-family:\"Encode Sans\",sans-serif;font-size:15px;padding:.55rem .85rem}.trackBtn:hover{color:#fff!important;background:#a7bf2e!important}.trackBtn.disabled:hover{color:grey!important;background:#a7bf2e!important}.pTB11{padding-bottom:8px;padding-top:10px}.searchData{color:#b6b6b6}.resultCount{color:#e5e5e5;font-size:12px;padding-left:13px}.responseInfo{color:#b6b6b6;font-size:12px;padding-left:13px}.heightTab{max-height:230px;overflow-x:hidden}::-webkit-scrollbar-thumb{background:#a7bf2e;border-radius:60px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #a7bf2e;border-radius:60px}#scrollDiv::-webkit-scrollbar{width:6px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:60px;box-shadow:0 0 0 #726868}.scrollbar{float:left;height:390px;overflow-y:scroll}"]
            }] }
];
/** @nocollapse */
SukuProductTraceWidgetComponent.ctorParameters = () => [];
SukuProductTraceWidgetComponent.propDecorators = {
    form: [{ type: Input }],
    headName: [{ type: Input, args: ['head-name',] }],
    subHeadName: [{ type: Input, args: ['sub-Head-Name',] }],
    name: [{ type: Input }],
    control: [{ type: Input }],
    searchFun: [{ type: Output }],
    selectproducts: [{ type: Output }],
    searchByProduct: [{ type: Output }],
    traceproduct: [{ type: Output }],
    disableBtn: [{ type: Input }],
    productdetails: [{ type: Input }],
    result: [{ type: Input }],
    visible: [{ type: Input, args: ['visible',] }]
};
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
    SukuProductTraceWidgetComponent.prototype.searchFun;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.selectproducts;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.searchByProduct;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.traceproduct;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC9zdWt1LXByb2R1Y3QtdHJhY2Utd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRM0MsTUFBTSxPQUFPLCtCQUErQjtJQXFGMUM7UUFuRkEsUUFBRyxHQUFHLElBQUksQ0FBQztRQUNYLFNBQUksR0FBRyxLQUFLLENBQUM7UUFLYixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBT1AsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0IsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFtRTVCLENBQUM7Ozs7SUFsRWpCLElBQ0ksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7OztJQUNELElBQUksVUFBVSxDQUFDLEdBQUc7UUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFDRCxJQUNJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBQ0QsSUFBSSxjQUFjLENBQUMsR0FBRztRQUNwQixJQUFJLEdBQUcsRUFBRTtZQUNQLDBCQUEwQjtZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7OztJQUVELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELElBQUksTUFBTSxDQUFDLEdBQUc7UUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDN0MsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCx1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLCtEQUErRDtRQUMvRCxJQUFJO0lBQ04sQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQix1Q0FBdUM7SUFDekMsQ0FBQzs7OztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxJQUFJLE9BQU8sQ0FBQyxHQUFHO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxRQUFRO1FBQ3RCLElBQUksUUFBUSxFQUFFO1lBQ1osMkJBQTJCO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtTQUN4QztRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFJRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBOUZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxzK0RBQXlEO2dCQUV6RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7O21CQUVFLEtBQUs7dUJBVUwsS0FBSyxTQUFDLFdBQVc7MEJBQ2pCLEtBQUssU0FBQyxlQUFlO21CQUNyQixLQUFLO3NCQUNMLEtBQUs7d0JBQ0wsTUFBTTs2QkFDTixNQUFNOzhCQUNOLE1BQU07MkJBQ04sTUFBTTt5QkFDTixLQUFLOzZCQVFMLEtBQUs7cUJBWUwsS0FBSztzQkEwQkwsS0FBSyxTQUFDLFNBQVM7Ozs7SUFoRWhCLCtDQUF5Qjs7SUFDekIsOENBQVc7O0lBQ1gsK0NBQWE7O0lBQ2IsbURBQVM7O0lBQ1QsZ0RBQU07O0lBQ04sc0RBQVk7O0lBQ1osdURBQWE7O0lBQ2IsbURBQWlCOztJQUNqQixrREFBUTs7SUFFUixtREFBNkI7O0lBQzdCLHNEQUFvQzs7SUFDcEMsK0NBQWM7O0lBQ2Qsa0RBQWlCOztJQUNqQixvREFBeUM7O0lBQ3pDLHlEQUE4Qzs7SUFDOUMsMERBQStDOztJQUMvQyx1REFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXByb2R1Y3QtdHJhY2Utd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtcHJvZHVjdC10cmFjZS13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXByb2R1Y3QtdHJhY2Utd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VQcm9kdWN0VHJhY2VXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG4gIHZhbCA9IHRydWU7XG4gIHZhbDIgPSBmYWxzZTtcbiAgX3Zpc2libGU7XG4gIF9kYXRhO1xuICBfZGlzYWJsZUJ0bjtcbiAgc2VsZWN0ZWRJdGVtO1xuICBpc1NlYXJjaCA9IGZhbHNlO1xuICBfcmVzdWx0O1xuICAvLyBASW5wdXQoKSBzZWFzb25zIDtcbiAgQElucHV0KCdoZWFkLW5hbWUnKSBoZWFkTmFtZTtcbiAgQElucHV0KCdzdWItSGVhZC1OYW1lJykgc3ViSGVhZE5hbWU7XG4gIEBJbnB1dCgpIG5hbWU7XG4gIEBJbnB1dCgpIGNvbnRyb2w7XG4gIEBPdXRwdXQoKSBzZWFyY2hGdW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWxlY3Rwcm9kdWN0cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlYXJjaEJ5UHJvZHVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHRyYWNlcHJvZHVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVCdG4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVCdG47XG4gIH1cbiAgc2V0IGRpc2FibGVCdG4odmFsKSB7XG4gICAgdGhpcy5fZGlzYWJsZUJ0biA9IHZhbDtcbiAgICBjb25zb2xlLmxvZyhcImRpc2FibGVCdG5cIiwgdGhpcy5fZGlzYWJsZUJ0bik7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHByb2R1Y3RkZXRhaWxzKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG4gIHNldCBwcm9kdWN0ZGV0YWlscyh2YWwpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICAvLyB0aGlzLmRpc2FibGVCdG4gPSB0cnVlO1xuICAgICAgY29uc29sZS5sb2coXCJkaXNhYmxlXCIsIHRoaXMuZGlzYWJsZUJ0bilcbiAgICAgIHRoaXMuX2RhdGEgPSBKU09OLnBhcnNlKHZhbCk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlc3VsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0O1xuICB9XG4gIHNldCByZXN1bHQocmVzKSB7XG4gICAgdGhpcy5fcmVzdWx0ID0gcmVzO1xuICAgIGNvbnNvbGUubG9nKFwicmVzdWx0XCIsIHRoaXMuX3Jlc3VsdCk7XG4gIH1cblxuICBzZWFyY2hFbmFibGVkKCkge1xuICAgIHRoaXMuaXNTZWFyY2ggPSAhdGhpcy5pc1NlYXJjaDtcbiAgICBjb25zb2xlLmxvZyhcInRoaXMuaXNTZWFyY2hcIiwgdGhpcy5pc1NlYXJjaClcbiAgfVxuXG4gIHNlYXJjaFJlc2V0KCkge1xuICAgIC8vIGlmICh0aGlzLmlzU2VhcmNoKSB7XG4gICAgLy8gXHR0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgIC8vIFx0Y29uc29sZS5sb2coXCJidG5cIiwgdGhpcy5kaXNhYmxlQnRuICwgXCJ2YWxcIiwgdGhpcy5fdmlzaWJsZSk7XG4gICAgLy8gfVxuICB9XG5cbiAgdGVzdEZ1bih2YWwxLCB2YWwyKSB7XG4gICAgY29uc29sZS5sb2coJ3ZhbCcsIHZhbDEsIHZhbDIpO1xuICAgIC8vIHRoaXMuc2VsZWN0UHJvZHVjdC5lbWl0KHZhbDEsIHZhbDIpO1xuICB9XG5cbiAgQElucHV0KCd2aXNpYmxlJylcbiAgZ2V0IHZpc2libGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2RhdGEnLCB0aGlzLl92aXNpYmxlKTtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgfVxuXG4gIHNldCB2aXNpYmxlKHZhbCkge1xuICAgIHRoaXMuX3Zpc2libGUgPSB2YWw7XG4gICAgY29uc29sZS5sb2coJ1NldHRpbmcgZGF0ZTogJyArIHZhbCk7XG4gIH1cblxuICBzaG93U2VsZWN0ZWRQcm8obmV3VmFsdWUpIHtcbiAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgIC8vIHRoaXMuZGlzYWJsZUJ0biA9IGZhbHNlO1xuICAgICAgY29uc29sZS5sb2coXCJkaXNhYmxlXCIsIHRoaXMuZGlzYWJsZUJ0bilcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBuZXdWYWx1ZTtcbiAgICBjb25zb2xlLmxvZygndGhpcy5zZWxlY3RlZEl0ZW0nLCB0aGlzLnNlbGVjdGVkSXRlbSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==