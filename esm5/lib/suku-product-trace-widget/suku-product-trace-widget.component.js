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
                    template: "<span [formGroup]=\"form\">\n  <div class=\" product-boxContent\">\n    <div class=\"col-sm-12 prizeHead pl-0\">\n      {{headName}}\n    </div>\n    <div class=\"col-sm-12 prizesubHead pl-0\">\n      {{subHeadName}}\n    </div>\n  </div>\n  <div class=\"col-sm-12 mt-2 pt-4 pb-4 RectangleBorder\">\n    <div class=\"col-sm-12 productName pb-1\">\n      {{name}}\n    </div>\n    <div class=\"col-sm-12 pb-2 pl-3 pt-2 p-0 searchBorderBox\">\n      <input type=\"text\" #search class=\"searchBorderStyles\" formControlName=\"{{control}}\" name=\"{{control}}\"\n      (keyup)=\"searchFun.emit(isSearch)\">\n      <span class=\"m-1\"><i class=\"fa fa-search\" style=\"font-size:22px;color:#b6b6b6;\"></i></span>\n    </div>\n    <p class=\"resultCount\" *ngIf=\"_result == 'true'\">{{productdetails?.length}} products found with the above number.\n    </p>\n    <div *ngIf=\"_visible == 'false'\">\n      <p class=\"responseInfo\" *ngIf=\"productdetails?.length > 0 ? true : false \">please select one</p>\n      <div class=\"heightTab\" id=\"scrollDiv\">\n        <div class=\"col\" *ngFor=\"let products of productdetails\">\n          <mat-radio-button class=\"searchData f13\" value=\"2\" (click)=\"selectproducts.emit(products)\"\n            (click)=\"showSelectedPro(products)\"> {{products?.asset?.description}}<br>\n            {{products?.asset?.name}}<br></mat-radio-button>\n          <hr>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12 mb-2 text-center pt-3 mt-3 pb-1\">\n      <span class=\"pt-2\">\n        <a *ngIf=\"_visible == 'true'\" id=\"searchForProduct\" class=\"trackBtn btn f14\" (click)=\"searchByProduct.emit()\">\n          Search for product </a>\n        <a *ngIf=\"_visible == 'false'\" [ngClass]=\"{'disabled': _disableBtn =='false' }\" id=\"tracetheProduct\" class=\"trackBtn btn f14\"\n          (click)=\"traceproduct.emit(1)\"> trace the\n          product </a>\n      </span>\n    </div>\n  </div>\n</span>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@import url(https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);.product-boxContent{width:100%;float:left;background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:15px 5px 4px 15px;margin:0}.prizeHead{width:100%;float:left;font-size:15px;color:#e5e5e5;line-height:1em;margin:0 0 8px}.prizesubHead{width:100%;float:left;font-family:Poppins-Regular,sans-serif!important;font-size:15px;color:#e5e5e5;line-height:1em;margin:0 0 12px}.RectangleBorder{background-color:#fff;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);border-radius:0;margin-top:75px!important;padding-right:20px;padding-left:20px}.productName{color:#7f7e7e;font-size:13px}.searchBorderBox{border:1px solid #b6b6b6;border-radius:12px 25.5px 25.5px;font-size:15px}.searchBorderStyles{width:87%;padding:5px 0;border-width:0}.productCount{color:#b6b6b6;font-size:12px}.trackBtn{font-family:\"Encode Sans\",sans-serif;font-size:11px;padding:.55rem .99rem}.trackBtn:hover{color:#fff!important;background:#a7bf2e!important}.trackBtn.disabled:hover{color:#000!important;background:#fff}.pTB11{padding-bottom:8px;padding-top:10px}.searchData{word-break:normal;font-size:13px;color:#b6b6b6;font-family:Poppins,sans-serif!important}.resultCount{color:#898787;font-size:12px;padding-left:13px}.responseInfo{color:#b6b6b6;font-size:12px;padding-left:13px}.heightTab{max-height:230px;overflow-x:hidden}::-webkit-scrollbar-thumb{background:#a7bf2e;border-radius:60px}#scrollDiv::-webkit-scrollbar-track{box-shadow:0 0 0 #a7bf2e;border-radius:60px}/deep/ .searchData>label{white-space:pre-wrap!important;line-height:normal!important}#scrollDiv::-webkit-scrollbar{width:6px}#scrollDiv::-webkit-scrollbar-thumb{border-radius:60px;box-shadow:0 0 0 #726868}.searchData>label{white-space:pre-wrap}.scrollbar{float:left;height:390px;overflow-y:scroll}::ng-deep .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#a7bf2e!important}::ng-deep .mat-radio-button.mat-accent .mat-radio-inner-circle::before{font-family:\"Font Awesome 5 Free\"!important;content:\"\\f058\"!important;display:inline-block!important;vertical-align:middle;font-weight:900;font-size:35px!important;color:#a7bf2e;margin:-7.6px 0 0 -8px!important}::ng-deep .mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#fafafa!important}::ng-deep .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:#a7bf2e3a!important}"]
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
    SukuProductTraceWidgetComponent.prototype.searchFun;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.selectproducts;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.searchByProduct;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.traceproduct;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC9zdWt1LXByb2R1Y3QtdHJhY2Utd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFzRUU7UUE5REEsUUFBRyxHQUFHLElBQUksQ0FBQztRQUNYLFNBQUksR0FBRyxLQUFLLENBQUM7UUFLYixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBT1IsYUFBUSxHQUFHLGVBQWUsQ0FBQztRQUMzQixjQUFTLEdBQUcsaUJBQWlCLENBQUM7UUFDOUIscUJBQWdCLEdBQUcsUUFBUSxDQUFDO1FBQzNCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBMkM1QixDQUFDO0lBMUNqQixzQkFDSSx1REFBVTs7OztRQURkO1lBRUUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7Ozs7O1FBQ0QsVUFBZSxHQUFHO1lBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLENBQUM7OztPQUhBO0lBSUQsc0JBQ0ksMkRBQWM7Ozs7UUFEbEI7WUFFRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7Ozs7UUFDRCxVQUFtQixHQUFHO1lBQ3BCLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM5QjtRQUNILENBQUM7OztPQUxBO0lBT0Qsc0JBQ0ksbURBQU07Ozs7UUFEVjtZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7OztRQUNELFVBQVcsR0FBRztZQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLENBQUM7OztPQUhBOzs7O0lBS0QsdURBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUVELHNCQUNJLG9EQUFPOzs7O1FBRFg7WUFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFFRCxVQUFZLEdBQUc7WUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUN0QixDQUFDOzs7T0FKQTs7Ozs7SUFNRCx5REFBZTs7OztJQUFmLFVBQWdCLFFBQVE7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7SUFDL0IsQ0FBQzs7OztJQUlELGtEQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQXpFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsdTdEQUF5RDtvQkFFekQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7Ozs7dUJBRUUsS0FBSzsyQkFVTCxLQUFLLFNBQUMsV0FBVzs4QkFDakIsS0FBSyxTQUFDLGVBQWU7dUJBQ3JCLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7bUNBQ0wsS0FBSzs0QkFDTCxNQUFNO2lDQUNOLE1BQU07a0NBQ04sTUFBTTsrQkFDTixNQUFNOzZCQUNOLEtBQUs7aUNBT0wsS0FBSzt5QkFVTCxLQUFLOzBCQVlMLEtBQUssU0FBQyxTQUFTOztJQWtCbEIsc0NBQUM7Q0FBQSxBQTNFRCxJQTJFQztTQXJFWSwrQkFBK0I7OztJQUMxQywrQ0FBeUI7O0lBQ3pCLDhDQUFXOztJQUNYLCtDQUFhOztJQUNiLG1EQUFTOztJQUNULGdEQUFNOztJQUNOLHNEQUFZOztJQUNaLHVEQUFhOztJQUNiLG1EQUFpQjs7SUFDakIsa0RBQVE7O0lBQ1IsNENBQUU7O0lBQ0YsbURBQTZCOztJQUM3QixzREFBb0M7O0lBQ3BDLCtDQUFjOztJQUNkLGtEQUFpQjs7SUFDakIsbURBQW9DOztJQUNwQyxvREFBdUM7O0lBQ3ZDLDJEQUFxQzs7SUFDckMsb0RBQXlDOztJQUN6Qyx5REFBOEM7O0lBQzlDLDBEQUErQzs7SUFDL0MsdURBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXByb2R1Y3QtdHJhY2Utd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdWt1UHJvZHVjdFRyYWNlV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuICB2YWwgPSB0cnVlO1xuICB2YWwyID0gZmFsc2U7XG4gIF92aXNpYmxlO1xuICBfZGF0YTtcbiAgX2Rpc2FibGVCdG47XG4gIHNlbGVjdGVkSXRlbTtcbiAgaXNTZWFyY2ggPSBmYWxzZTtcbiAgX3Jlc3VsdDtcbiAgaTtcbiAgQElucHV0KCdoZWFkLW5hbWUnKSBoZWFkTmFtZTtcbiAgQElucHV0KCdzdWItSGVhZC1OYW1lJykgc3ViSGVhZE5hbWU7XG4gIEBJbnB1dCgpIG5hbWU7XG4gIEBJbnB1dCgpIGNvbnRyb2w7XG4gIEBJbnB1dCgpIHNlYXJjaElkID0gJ3NlYXJjaFByb2R1Y3QnO1xuICBASW5wdXQoKSBwcm9kdWN0SWQgPSAndHJhY2V0aGVQcm9kdWN0JztcbiAgQElucHV0KCkgdHJhY2VNZXRob2RSYWRpbyA9ICdtZXRob2QnO1xuICBAT3V0cHV0KCkgc2VhcmNoRnVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VsZWN0cHJvZHVjdHMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWFyY2hCeVByb2R1Y3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSB0cmFjZXByb2R1Y3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlQnRuKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlQnRuO1xuICB9XG4gIHNldCBkaXNhYmxlQnRuKHZhbCkge1xuICAgIHRoaXMuX2Rpc2FibGVCdG4gPSB2YWw7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHByb2R1Y3RkZXRhaWxzKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG4gIHNldCBwcm9kdWN0ZGV0YWlscyh2YWwpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLl9kYXRhID0gSlNPTi5wYXJzZSh2YWwpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCByZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdDtcbiAgfVxuICBzZXQgcmVzdWx0KHJlcykge1xuICAgIHRoaXMuX3Jlc3VsdCA9IHJlcztcbiAgfVxuXG4gIHNlYXJjaEVuYWJsZWQoKSB7XG4gICAgdGhpcy5pc1NlYXJjaCA9ICF0aGlzLmlzU2VhcmNoO1xuICB9XG5cbiAgQElucHV0KCd2aXNpYmxlJylcbiAgZ2V0IHZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cblxuICBzZXQgdmlzaWJsZSh2YWwpIHtcbiAgICB0aGlzLl92aXNpYmxlID0gdmFsO1xuICB9XG5cbiAgc2hvd1NlbGVjdGVkUHJvKG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBuZXdWYWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19