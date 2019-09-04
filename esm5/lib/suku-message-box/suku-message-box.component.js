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
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.headingStyle{font-family:var(--suku-primary-font);padding-bottom:9px}.contentStyle{padding-top:15px}.marginBottom22{margin-bottom:22px}.shipping-address{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-2);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#020202d9;margin-bottom:1px;text-transform:capitalize}.article{font-family:var(--suku-primary-font);width:100%;float:left}"]
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