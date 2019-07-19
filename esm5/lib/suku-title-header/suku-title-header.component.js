/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuTitleHeaderComponent = /** @class */ (function () {
    function SukuTitleHeaderComponent() {
        this.titleOne = 'LISTING NAME';
        this.titleOneCustomClass = 'pop';
    }
    /**
     * @return {?}
     */
    SukuTitleHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuTitleHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-title-header',
                    template: "<div class=\"product-boxContent\">\n  <div class=\"col pl-0 pt-3 pb-3\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h1 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOneCustomClass\" [style.font-weight]=\"titleOneWeight\"\n          [style.color]=\"titleOneColor\" id=\"{{titleOneId}}\"><ng-content></ng-content> </h1>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.product-boxContent{width:100%;float:left;background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:10px 5px 0 15px;margin:0}h1{color:#fafaf8;font-size:17px}.c-pointer{cursor:pointer;text-transform:capitalize}.c-pointer:hover{color:#fff;text-decoration:underline}.RectangleBorder{background-color:#fff;border-radius:0;margin-top:63px!important;padding-right:20px;padding-left:20px}.productName{color:#7f7e7e;font-size:13px}.pop{font-family:Poppins,sans-serif!important;font-weight:600;font-size:20px;text-transform:uppercase}"]
                }] }
    ];
    /** @nocollapse */
    SukuTitleHeaderComponent.ctorParameters = function () { return []; };
    SukuTitleHeaderComponent.propDecorators = {
        titleOne: [{ type: Input }],
        titleOneId: [{ type: Input }],
        titleOneSize: [{ type: Input }],
        titleOneColor: [{ type: Input }],
        titleOneWeight: [{ type: Input }],
        titleOneCustomClass: [{ type: Input }]
    };
    return SukuTitleHeaderComponent;
}());
export { SukuTitleHeaderComponent };
if (false) {
    /** @type {?} */
    SukuTitleHeaderComponent.prototype.titleOne;
    /** @type {?} */
    SukuTitleHeaderComponent.prototype.titleOneId;
    /** @type {?} */
    SukuTitleHeaderComponent.prototype.titleOneSize;
    /** @type {?} */
    SukuTitleHeaderComponent.prototype.titleOneColor;
    /** @type {?} */
    SukuTitleHeaderComponent.prototype.titleOneWeight;
    /** @type {?} */
    SukuTitleHeaderComponent.prototype.titleOneCustomClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10aXRsZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtdGl0bGUtaGVhZGVyL3N1a3UtdGl0bGUtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFZRTtRQU5RLGFBQVEsR0FBRyxjQUFjLENBQUM7UUFLMUIsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFakIsMkNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLCtZQUFpRDs7aUJBRWxEOzs7OzsyQkFFQyxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLO2lDQUNMLEtBQUs7c0NBQ0wsS0FBSzs7SUFNUCwrQkFBQztDQUFBLEFBakJELElBaUJDO1NBWlksd0JBQXdCOzs7SUFDcEMsNENBQW1DOztJQUNuQyw4Q0FBb0I7O0lBQ3BCLGdEQUFzQjs7SUFDdEIsaURBQXVCOztJQUN2QixrREFBd0I7O0lBQ3hCLHVEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXRpdGxlLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXRpdGxlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtdGl0bGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVRpdGxlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgdGl0bGVPbmUgPSAnTElTVElORyBOQU1FJztcblx0QElucHV0KCkgdGl0bGVPbmVJZDtcblx0QElucHV0KCkgdGl0bGVPbmVTaXplO1xuXHRASW5wdXQoKSB0aXRsZU9uZUNvbG9yO1xuXHRASW5wdXQoKSB0aXRsZU9uZVdlaWdodDtcblx0QElucHV0KCkgdGl0bGVPbmVDdXN0b21DbGFzcyA9ICdwb3AnO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==