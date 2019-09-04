/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuMessageBoxComponent = /** @class */ (function () {
    function SukuMessageBoxComponent() {
        this.widgetTitle = 'User Information';
        this.widgetTitleColor = '';
        this.widgetTitleWeight = '';
        this.widgetTitleSize = '';
        this.widgetTitlecustomclass = '';
        this.widgetTitleid = '';
        this.shippingaddressCustomClass = '';
    }
    /**
     * @return {?}
     */
    SukuMessageBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuMessageBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-message-box',
                    template: "<div class=\"headingStyle\" [style.font-size.px]=\"widgetTitleSize\" [class]=\"widgetTitlecustomclass\" id=\"{{widgetTitleid}}\"\n  [style.font-weight]=\"widgetTitleWeight\" [style.color]=\"widgetTitleColor\">{{widgetTitle}} </div>\n<div class=\"article mb-3 p-0 pt-3\">\n  <div class=\"col-sm-12 col-xs-12 border\">\n    <div class=\"col-sm-12 col-xs-12 pt-3 p-2\">\n      <div class=\"font_weight contentStyle shipping-address\" [class]=\"shippingaddressCustomClass\">\n        <p class=\"mb-1\"><span>{{contentOne}}</span></p>\n        <p class=\"mb-1\">{{contentTwo}}</p>\n        <p class=\"mb-1\">{{contentThree}}</p>\n        <p class=\"mb-1\">{{contentFour}}</p>\n    </div>\n  </div>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SukuMessageBoxComponent.ctorParameters = function () { return []; };
    SukuMessageBoxComponent.propDecorators = {
        widgetTitle: [{ type: Input }],
        widgetTitleColor: [{ type: Input }],
        widgetTitleWeight: [{ type: Input }],
        widgetTitleSize: [{ type: Input }],
        widgetTitlecustomclass: [{ type: Input }],
        widgetTitleid: [{ type: Input }],
        shippingaddressCustomClass: [{ type: Input }],
        contentOne: [{ type: Input, args: ['content-one',] }],
        contentTwo: [{ type: Input, args: ['content-two',] }],
        contentThree: [{ type: Input, args: ['content-three',] }],
        contentFour: [{ type: Input, args: ['content-four',] }]
    };
    return SukuMessageBoxComponent;
}());
export { SukuMessageBoxComponent };
if (false) {
    /** @type {?} */
    SukuMessageBoxComponent.prototype.widgetTitle;
    /** @type {?} */
    SukuMessageBoxComponent.prototype.widgetTitleColor;
    /** @type {?} */
    SukuMessageBoxComponent.prototype.widgetTitleWeight;
    /** @type {?} */
    SukuMessageBoxComponent.prototype.widgetTitleSize;
    /** @type {?} */
    SukuMessageBoxComponent.prototype.widgetTitlecustomclass;
    /** @type {?} */
    SukuMessageBoxComponent.prototype.widgetTitleid;
    /** @type {?} */
    SukuMessageBoxComponent.prototype.shippingaddressCustomClass;
    /** @type {?} */
    SukuMessageBoxComponent.prototype.contentOne;
    /** @type {?} */
    SukuMessageBoxComponent.prototype.contentTwo;
    /** @type {?} */
    SukuMessageBoxComponent.prototype.contentThree;
    /** @type {?} */
    SukuMessageBoxComponent.prototype.contentFour;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tZXNzYWdlLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1tZXNzYWdlLWJveC9zdWt1LW1lc3NhZ2UtYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFpQkU7UUFYUyxnQkFBVyxHQUFHLGtCQUFrQixDQUFDO1FBQ2pDLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUN0QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLCtCQUEwQixHQUFHLEVBQUUsQ0FBQztJQUt6QixDQUFDOzs7O0lBRWpCLDBDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQXBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsd3NCQUFnRDs7aUJBRWpEOzs7Ozs4QkFFRSxLQUFLO21DQUNMLEtBQUs7b0NBQ0wsS0FBSztrQ0FDTCxLQUFLO3lDQUNMLEtBQUs7Z0NBQ0wsS0FBSzs2Q0FDTCxLQUFLOzZCQUNMLEtBQUssU0FBQyxhQUFhOzZCQUNuQixLQUFLLFNBQUMsYUFBYTsrQkFDbkIsS0FBSyxTQUFDLGVBQWU7OEJBQ3JCLEtBQUssU0FBQyxjQUFjOztJQU12Qiw4QkFBQztDQUFBLEFBdEJELElBc0JDO1NBakJZLHVCQUF1Qjs7O0lBQ2xDLDhDQUEwQzs7SUFDMUMsbURBQStCOztJQUMvQixvREFBZ0M7O0lBQ2hDLGtEQUE4Qjs7SUFDOUIseURBQXFDOztJQUNyQyxnREFBNEI7O0lBQzVCLDZEQUF5Qzs7SUFDekMsNkNBQWtDOztJQUNsQyw2Q0FBa0M7O0lBQ2xDLCtDQUFzQzs7SUFDdEMsOENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtbWVzc2FnZS1ib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1tZXNzYWdlLWJveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtbWVzc2FnZS1ib3guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1TWVzc2FnZUJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHdpZGdldFRpdGxlID0gJ1VzZXIgSW5mb3JtYXRpb24nO1xuICBASW5wdXQoKSB3aWRnZXRUaXRsZUNvbG9yID0gJyc7XG4gIEBJbnB1dCgpIHdpZGdldFRpdGxlV2VpZ2h0ID0gJyc7XG4gIEBJbnB1dCgpIHdpZGdldFRpdGxlU2l6ZSA9ICcnO1xuICBASW5wdXQoKSB3aWRnZXRUaXRsZWN1c3RvbWNsYXNzID0gJyc7XG4gIEBJbnB1dCgpIHdpZGdldFRpdGxlaWQgPSAnJztcbiAgQElucHV0KCkgc2hpcHBpbmdhZGRyZXNzQ3VzdG9tQ2xhc3MgPSAnJztcbiAgQElucHV0KCdjb250ZW50LW9uZScpIGNvbnRlbnRPbmUgO1xuICBASW5wdXQoJ2NvbnRlbnQtdHdvJykgY29udGVudFR3byA7XG4gIEBJbnB1dCgnY29udGVudC10aHJlZScpIGNvbnRlbnRUaHJlZSA7XG4gIEBJbnB1dCgnY29udGVudC1mb3VyJykgY29udGVudEZvdXI7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19