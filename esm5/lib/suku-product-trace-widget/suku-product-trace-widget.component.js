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
            console.log("disableBtn", this._disableBtn);
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
                // this.disableBtn = true;
                console.log("disable", this.disableBtn);
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
            console.log("result", this._result);
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
        console.log("this.isSearch", this.isSearch);
    };
    /**
     * @return {?}
     */
    SukuProductTraceWidgetComponent.prototype.searchReset = /**
     * @return {?}
     */
    function () {
        // if (this.isSearch) {
        // 	this.visible = true;
        // 	console.log("btn", this.disableBtn , "val", this._visible);
        // }
    };
    /**
     * @param {?} val1
     * @param {?} val2
     * @return {?}
     */
    SukuProductTraceWidgetComponent.prototype.testFun = /**
     * @param {?} val1
     * @param {?} val2
     * @return {?}
     */
    function (val1, val2) {
        console.log('val', val1, val2);
        // this.selectProduct.emit(val1, val2);
    };
    Object.defineProperty(SukuProductTraceWidgetComponent.prototype, "visible", {
        get: /**
         * @return {?}
         */
        function () {
            console.log('data', this._visible);
            return this._visible;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._visible = val;
            console.log('Setting date: ' + val);
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
        if (newValue) {
            // this.disableBtn = false;
            console.log("disable", this.disableBtn);
        }
        this.selectedItem = newValue;
        console.log('this.selectedItem', this.selectedItem);
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
                    template: "<span [formGroup]=\"form\">\n  <div class=\" product-boxContent\">\n    <div class=\"col-sm-12 prizeHead pl-0\">\n      {{headName}}\n    </div>\n    <div class=\"col-sm-12 prizesubHead pl-0\">\n      {{subHeadName}}\n    </div>\n  </div>\n  <div class=\"col-sm-12 mt-2 pt-4 pb-4 RectangleBorder\">\n    <div class=\"col-sm-12 productName pb-3\">\n      {{name}}\n    </div>\n    <div class=\"col-sm-12 pb-2 pl-3 p-0 searchBorderBox\">\n      <input type=\"text\" #search class=\"searchBorderStyles\" formControlName=\"{{control}}\" name=\"{{control}}\"\n        placeholder=\"search\" (keyup)=\"searchFun.emit(isSearch)\">\n      <span class=\"m-1\"><i class=\"fa fa-search\" style=\"font-size:22px;color:#b6b6b6;\"></i></span>\n    </div>\n    <p class=\"resultCount\" *ngIf=\"_result == 'true'\">{{productdetails?.length}} products found with the above number.\n    </p>\n    <div *ngIf=\"_visible == 'false'\">\n      <p class=\"responseInfo\" *ngIf=\"productdetails?.length > 0 ? true : false \">please select one</p>\n      <div class=\"heightTab\" id=\"scrollDiv\">\n        <div class=\"col\" *ngFor=\"let products of productdetails\">\n          <mat-radio-button color=\"primary\" class=\"searchData f13\" value=\"2\" (click)=\"selectproducts.emit(products)\"\n            (click)=\"showSelectedPro(products)\">{{products.product.description}}<br>\n            {{products.product.name}}<br></mat-radio-button>\n          <hr>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 mb-2 text-center pt-3 mt-3 pb-1\">\n      <span class=\"pt-2\">\n        <a *ngIf=\"_visible == 'true'\" id=\"searchForProduct\" class=\"trackBtn btn-info f14\" (click)=\"searchByProduct.emit()\">\n          Search for product </a>\n        <a *ngIf=\"_visible == 'false'\" [ngClass]=\"{'disabled': _disableBtn =='false' }\" id=\"tracetheProduct\" class=\"trackBtn btn-info f14\"\n          (click)=\"traceproduct.emit(1)\"> trace the\n          product </a>\n      </span>\n    </div>\n  </div>\n</span>",
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
    SukuProductTraceWidgetComponent.prototype.searchFun;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.selectproducts;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.searchByProduct;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.traceproduct;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC9zdWt1LXByb2R1Y3QtdHJhY2Utd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUEyRkU7UUFuRkEsUUFBRyxHQUFHLElBQUksQ0FBQztRQUNYLFNBQUksR0FBRyxLQUFLLENBQUM7UUFLYixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBT1AsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0IsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFtRTVCLENBQUM7SUFsRWpCLHNCQUNJLHVEQUFVOzs7O1FBRGQ7WUFFRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFDRCxVQUFlLEdBQUc7WUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLENBQUM7OztPQUpBO0lBS0Qsc0JBQ0ksMkRBQWM7Ozs7UUFEbEI7WUFFRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7Ozs7UUFDRCxVQUFtQixHQUFHO1lBQ3BCLElBQUksR0FBRyxFQUFFO2dCQUNQLDBC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dCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtcHJvZHVjdC10cmFjZS13aWRnZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtcHJvZHVjdC10cmFjZS13aWRnZXQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3VrdVByb2R1Y3RUcmFjZVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcbiAgdmFsID0gdHJ1ZTtcbiAgdmFsMiA9IGZhbHNlO1xuICBfdmlzaWJsZTtcbiAgX2RhdGE7XG4gIF9kaXNhYmxlQnRuO1xuICBzZWxlY3RlZEl0ZW07XG4gIGlzU2VhcmNoID0gZmFsc2U7XG4gIF9yZXN1bHQ7XG4gIC8vIEBJbnB1dCgpIHNlYXNvbnMgO1xuICBASW5wdXQoJ2hlYWQtbmFtZScpIGhlYWROYW1lO1xuICBASW5wdXQoJ3N1Yi1IZWFkLU5hbWUnKSBzdWJIZWFkTmFtZTtcbiAgQElucHV0KCkgbmFtZTtcbiAgQElucHV0KCkgY29udHJvbDtcbiAgQE91dHB1dCgpIHNlYXJjaEZ1biA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlbGVjdHByb2R1Y3RzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VhcmNoQnlQcm9kdWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdHJhY2Vwcm9kdWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZUJ0bigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZUJ0bjtcbiAgfVxuICBzZXQgZGlzYWJsZUJ0bih2YWwpIHtcbiAgICB0aGlzLl9kaXNhYmxlQnRuID0gdmFsO1xuICAgIGNvbnNvbGUubG9nKFwiZGlzYWJsZUJ0blwiLCB0aGlzLl9kaXNhYmxlQnRuKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgcHJvZHVjdGRldGFpbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbiAgc2V0IHByb2R1Y3RkZXRhaWxzKHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIC8vIHRoaXMuZGlzYWJsZUJ0biA9IHRydWU7XG4gICAgICBjb25zb2xlLmxvZyhcImRpc2FibGVcIiwgdGhpcy5kaXNhYmxlQnRuKVxuICAgICAgdGhpcy5fZGF0YSA9IEpTT04ucGFyc2UodmFsKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgcmVzdWx0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bHQ7XG4gIH1cbiAgc2V0IHJlc3VsdChyZXMpIHtcbiAgICB0aGlzLl9yZXN1bHQgPSByZXM7XG4gICAgY29uc29sZS5sb2coXCJyZXN1bHRcIiwgdGhpcy5fcmVzdWx0KTtcbiAgfVxuXG4gIHNlYXJjaEVuYWJsZWQoKSB7XG4gICAgdGhpcy5pc1NlYXJjaCA9ICF0aGlzLmlzU2VhcmNoO1xuICAgIGNvbnNvbGUubG9nKFwidGhpcy5pc1NlYXJjaFwiLCB0aGlzLmlzU2VhcmNoKVxuICB9XG5cbiAgc2VhcmNoUmVzZXQoKSB7XG4gICAgLy8gaWYgKHRoaXMuaXNTZWFyY2gpIHtcbiAgICAvLyBcdHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgLy8gXHRjb25zb2xlLmxvZyhcImJ0blwiLCB0aGlzLmRpc2FibGVCdG4gLCBcInZhbFwiLCB0aGlzLl92aXNpYmxlKTtcbiAgICAvLyB9XG4gIH1cblxuICB0ZXN0RnVuKHZhbDEsIHZhbDIpIHtcbiAgICBjb25zb2xlLmxvZygndmFsJywgdmFsMSwgdmFsMik7XG4gICAgLy8gdGhpcy5zZWxlY3RQcm9kdWN0LmVtaXQodmFsMSwgdmFsMik7XG4gIH1cblxuICBASW5wdXQoJ3Zpc2libGUnKVxuICBnZXQgdmlzaWJsZSgpIHtcbiAgICBjb25zb2xlLmxvZygnZGF0YScsIHRoaXMuX3Zpc2libGUpO1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICB9XG5cbiAgc2V0IHZpc2libGUodmFsKSB7XG4gICAgdGhpcy5fdmlzaWJsZSA9IHZhbDtcbiAgICBjb25zb2xlLmxvZygnU2V0dGluZyBkYXRlOiAnICsgdmFsKTtcbiAgfVxuXG4gIHNob3dTZWxlY3RlZFBybyhuZXdWYWx1ZSkge1xuICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgLy8gdGhpcy5kaXNhYmxlQnRuID0gZmFsc2U7XG4gICAgICBjb25zb2xlLmxvZyhcImRpc2FibGVcIiwgdGhpcy5kaXNhYmxlQnRuKVxuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG5ld1ZhbHVlO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLnNlbGVjdGVkSXRlbScsIHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19