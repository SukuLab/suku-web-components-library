/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuTitleHeaderComponent = /** @class */ (function () {
    function SukuTitleHeaderComponent() {
        this.id = 'title';
        this.size = '20';
        this.weight = '600';
        this.customClass = 'pop';
    }
    /**
     * @return {?}
     */
    SukuTitleHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuTitleHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-title-header',
                    template: "<div class=\"product-boxContent col\">\n  <div class=\"col p-2\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h1 [style.font-size.px]=\"size\" [class]=\"customClass\" [style.font-weight]=\"weight\" [style.color]=\"color\"\n          id=\"{{id}}\">\n          <ng-content></ng-content>\n        </h1>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.product-boxContent{width:100%;float:left;background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 5px 20px}h1{color:#fafaf8;font-size:17px}.c-pointer{cursor:pointer;text-transform:capitalize}.c-pointer:hover{color:#fff;text-decoration:underline}.pop{font-family:Poppins,sans-serif!important;font-weight:600;font-size:20px}"]
                }] }
    ];
    /** @nocollapse */
    SukuTitleHeaderComponent.ctorParameters = function () { return []; };
    SukuTitleHeaderComponent.propDecorators = {
        id: [{ type: Input }],
        size: [{ type: Input }],
        color: [{ type: Input }],
        weight: [{ type: Input }],
        customClass: [{ type: Input }]
    };
    return SukuTitleHeaderComponent;
}());
export { SukuTitleHeaderComponent };
if (false) {
    /** @type {?} */
    SukuTitleHeaderComponent.prototype.id;
    /** @type {?} */
    SukuTitleHeaderComponent.prototype.size;
    /** @type {?} */
    SukuTitleHeaderComponent.prototype.color;
    /** @type {?} */
    SukuTitleHeaderComponent.prototype.weight;
    /** @type {?} */
    SukuTitleHeaderComponent.prototype.customClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10aXRsZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtdGl0bGUtaGVhZGVyL3N1a3UtdGl0bGUtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFXQztRQUxTLE9BQUUsR0FBRyxPQUFPLENBQUM7UUFDYixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBRVosV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVoQiwyQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkFiYixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IscVhBQWlEOztpQkFFbEQ7Ozs7O3FCQUVDLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUFJUCwrQkFBQztDQUFBLEFBZEQsSUFjQztTQVRZLHdCQUF3Qjs7O0lBQ3BDLHNDQUFzQjs7SUFDdEIsd0NBQXFCOztJQUNyQix5Q0FBZTs7SUFDZiwwQ0FBd0I7O0lBQ3hCLCtDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXRpdGxlLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXRpdGxlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtdGl0bGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVRpdGxlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgaWQgPSAndGl0bGUnO1xuXHRASW5wdXQoKSBzaXplID0gJzIwJztcblx0QElucHV0KCkgY29sb3I7XG5cdEBJbnB1dCgpIHdlaWdodCA9ICc2MDAnO1xuXHRASW5wdXQoKSBjdXN0b21DbGFzcyA9ICdwb3AnO1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bmdPbkluaXQoKSB7fVxufVxuIl19