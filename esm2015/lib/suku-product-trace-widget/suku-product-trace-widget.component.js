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
        this.searchId = 'searchProduct';
        this.productId = 'tracetheProduct';
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
    }
    /**
     * @return {?}
     */
    searchEnabled() {
        this.isSearch = !this.isSearch;
    }
    /**
     * @return {?}
     */
    get visible() {
        return this._visible;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set visible(val) {
        this._visible = val;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    showSelectedPro(newValue) {
        this.selectedItem = newValue;
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
                template: "<span [formGroup]=\"form\">\r\n  <div class=\" product-boxContent\">\r\n    <div class=\"col-sm-12 prizeHead pl-0\">\r\n      {{headName}}\r\n    </div>\r\n    <div class=\"col-sm-12 prizesubHead pl-0\">\r\n      {{subHeadName}}\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12 mt-2 pt-4 pb-4 RectangleBorder\">\r\n    <div class=\"col-sm-12 productName pb-3\">\r\n      {{name}}\r\n    </div>\r\n    <div class=\"col-sm-12 pb-2 pl-3 p-0 searchBorderBox\">\r\n      <input type=\"text\" #search class=\"searchBorderStyles\" formControlName=\"{{control}}\" name=\"{{control}}\"\r\n        placeholder=\"search\" (keyup)=\"searchFun.emit(isSearch)\">\r\n      <span class=\"m-1\"><i class=\"fa fa-search\" style=\"font-size:22px;color:#b6b6b6;\"></i></span>\r\n    </div>\r\n    <p class=\"resultCount\" *ngIf=\"_result == 'true'\">{{productdetails?.length}} products found with the above number.\r\n    </p>\r\n    <div *ngIf=\"_visible == 'false'\">\r\n      <p class=\"responseInfo\" *ngIf=\"productdetails?.length > 0 ? true : false \">please select one</p>\r\n      <div class=\"heightTab\" id=\"scrollDiv\">\r\n        <div class=\"col\" *ngFor=\"let products of productdetails;let i= index\">\r\n          <mat-radio-button color=\"primary\" id=\"productRadio{{i}}\" class=\"searchData f13\" value=\"2\" (click)=\"selectproducts.emit(products)\"\r\n            (click)=\"showSelectedPro(products)\">{{products.product.description}}<br>\r\n            {{products.product.name}}<br></mat-radio-button>\r\n          <hr>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12 mb-2 text-center pt-3 mt-3 pb-1\">\r\n      <span class=\"pt-2\">\r\n        <a *ngIf=\"_visible == 'true'\" id=\"{{searchId}}\" class=\"trackBtn btn-info f14\" (click)=\"searchByProduct.emit()\">\r\n          Search for product </a>\r\n        <a *ngIf=\"_visible == 'false'\" [ngClass]=\"{'disabled': _disableBtn =='false' }\" id=\"{{productId}}\" class=\"trackBtn btn-info f14\"\r\n          (click)=\"traceproduct.emit(1)\"> trace the\r\n          product </a>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</span>",
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
    SukuProductTraceWidgetComponent.prototype.searchFun;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.selectproducts;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.searchByProduct;
    /** @type {?} */
    SukuProductTraceWidgetComponent.prototype.traceproduct;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC9zdWt1LXByb2R1Y3QtdHJhY2Utd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRM0MsTUFBTSxPQUFPLCtCQUErQjtJQWdFMUM7UUE5REEsUUFBRyxHQUFHLElBQUksQ0FBQztRQUNYLFNBQUksR0FBRyxLQUFLLENBQUM7UUFLYixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBUVIsYUFBUSxHQUFHLGVBQWUsQ0FBQztRQUMzQixjQUFTLEdBQUcsaUJBQWlCLENBQUM7UUFDN0IsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0IsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUEyQzVCLENBQUM7Ozs7SUExQ2pCLElBQ0ksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7OztJQUNELElBQUksVUFBVSxDQUFDLEdBQUc7UUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDekIsQ0FBQzs7OztJQUNELElBQ0ksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFDRCxJQUFJLGNBQWMsQ0FBQyxHQUFHO1FBQ3BCLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7OztJQUVELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELElBQUksTUFBTSxDQUFDLEdBQUc7UUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxJQUFJLE9BQU8sQ0FBQyxHQUFHO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsUUFBUTtRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztJQUMvQixDQUFDOzs7O0lBSUQsUUFBUTtJQUNSLENBQUM7OztZQXpFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsd2xFQUF5RDtnQkFFekQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7OzttQkFFRSxLQUFLO3VCQVdMLEtBQUssU0FBQyxXQUFXOzBCQUNqQixLQUFLLFNBQUMsZUFBZTttQkFDckIsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxNQUFNOzZCQUNOLE1BQU07OEJBQ04sTUFBTTsyQkFDTixNQUFNO3lCQUNOLEtBQUs7NkJBT0wsS0FBSztxQkFVTCxLQUFLO3NCQVlMLEtBQUssU0FBQyxTQUFTOzs7O0lBbERoQiwrQ0FBeUI7O0lBQ3pCLDhDQUFXOztJQUNYLCtDQUFhOztJQUNiLG1EQUFTOztJQUNULGdEQUFNOztJQUNOLHNEQUFZOztJQUNaLHVEQUFhOztJQUNiLG1EQUFpQjs7SUFDakIsa0RBQVE7O0lBQ1IsNENBQUU7O0lBRUYsbURBQTZCOztJQUM3QixzREFBb0M7O0lBQ3BDLCtDQUFjOztJQUNkLGtEQUFpQjs7SUFDakIsbURBQW9DOztJQUNwQyxvREFBdUM7O0lBQ3ZDLG9EQUF5Qzs7SUFDekMseURBQThDOztJQUM5QywwREFBK0M7O0lBQy9DLHVEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtcHJvZHVjdC10cmFjZS13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtcHJvZHVjdC10cmFjZS13aWRnZXQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdVByb2R1Y3RUcmFjZVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG4gIHZhbCA9IHRydWU7XHJcbiAgdmFsMiA9IGZhbHNlO1xyXG4gIF92aXNpYmxlO1xyXG4gIF9kYXRhO1xyXG4gIF9kaXNhYmxlQnRuO1xyXG4gIHNlbGVjdGVkSXRlbTtcclxuICBpc1NlYXJjaCA9IGZhbHNlO1xyXG4gIF9yZXN1bHQ7XHJcbiAgaTtcclxuICAvLyBASW5wdXQoKSBzZWFzb25zIDtcclxuICBASW5wdXQoJ2hlYWQtbmFtZScpIGhlYWROYW1lO1xyXG4gIEBJbnB1dCgnc3ViLUhlYWQtTmFtZScpIHN1YkhlYWROYW1lO1xyXG4gIEBJbnB1dCgpIG5hbWU7XHJcbiAgQElucHV0KCkgY29udHJvbDtcclxuICBASW5wdXQoKSBzZWFyY2hJZCA9ICdzZWFyY2hQcm9kdWN0JztcclxuICBASW5wdXQoKSBwcm9kdWN0SWQgPSAndHJhY2V0aGVQcm9kdWN0JztcclxuICBAT3V0cHV0KCkgc2VhcmNoRnVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3Rwcm9kdWN0cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgc2VhcmNoQnlQcm9kdWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB0cmFjZXByb2R1Y3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KClcclxuICBnZXQgZGlzYWJsZUJ0bigpIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlQnRuO1xyXG4gIH1cclxuICBzZXQgZGlzYWJsZUJ0bih2YWwpIHtcclxuICAgIHRoaXMuX2Rpc2FibGVCdG4gPSB2YWw7XHJcbiAgfVxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHByb2R1Y3RkZXRhaWxzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XHJcbiAgfVxyXG4gIHNldCBwcm9kdWN0ZGV0YWlscyh2YWwpIHtcclxuICAgIGlmICh2YWwpIHtcclxuICAgICAgdGhpcy5fZGF0YSA9IEpTT04ucGFyc2UodmFsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHJlc3VsdCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9yZXN1bHQ7XHJcbiAgfVxyXG4gIHNldCByZXN1bHQocmVzKSB7XHJcbiAgICB0aGlzLl9yZXN1bHQgPSByZXM7XHJcbiAgfVxyXG5cclxuICBzZWFyY2hFbmFibGVkKCkge1xyXG4gICAgdGhpcy5pc1NlYXJjaCA9ICF0aGlzLmlzU2VhcmNoO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCd2aXNpYmxlJylcclxuICBnZXQgdmlzaWJsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZpc2libGUodmFsKSB7XHJcbiAgICB0aGlzLl92aXNpYmxlID0gdmFsO1xyXG4gIH1cclxuXHJcbiAgc2hvd1NlbGVjdGVkUHJvKG5ld1ZhbHVlKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG5ld1ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=