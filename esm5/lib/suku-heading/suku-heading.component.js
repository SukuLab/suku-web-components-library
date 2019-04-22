/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
var SukuHeadingComponent = /** @class */ (function () {
    function SukuHeadingComponent() {
        this.id = 'heading';
    }
    /**
     * @return {?}
     */
    SukuHeadingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuHeadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-heading',
                    template: "<h1 [style.font-size.px]=\"size\" [class]=\"customClass\" [style.font-weight]=\"weight\" [style.color]=\"color\" id=\"{{id}}\">\n  <ng-content></ng-content>\n</h1>",
                    encapsulation: ViewEncapsulation.ShadowDom,
                    styles: ["h1{font-family:Poppins,sans-serif;font-size:20px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-all!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuHeadingComponent.ctorParameters = function () { return []; };
    SukuHeadingComponent.propDecorators = {
        name: [{ type: Input }],
        id: [{ type: Input }],
        size: [{ type: Input }],
        color: [{ type: Input }],
        weight: [{ type: Input }],
        customClass: [{ type: Input }]
    };
    return SukuHeadingComponent;
}());
export { SukuHeadingComponent };
if (false) {
    /** @type {?} */
    SukuHeadingComponent.prototype.name;
    /** @type {?} */
    SukuHeadingComponent.prototype.id;
    /** @type {?} */
    SukuHeadingComponent.prototype.size;
    /** @type {?} */
    SukuHeadingComponent.prototype.color;
    /** @type {?} */
    SukuHeadingComponent.prototype.weight;
    /** @type {?} */
    SukuHeadingComponent.prototype.customClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1oZWFkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWhlYWRpbmcvc3VrdS1oZWFkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFM0U7SUFhRTtRQUxTLE9BQUUsR0FBRyxTQUFTLENBQUM7SUFLUixDQUFDOzs7O0lBRWpCLHVDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLCtLQUE0QztvQkFFNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFNBQVM7O2lCQUMzQzs7Ozs7dUJBRUUsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7O0lBTVIsMkJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQVpZLG9CQUFvQjs7O0lBQy9CLG9DQUFjOztJQUNkLGtDQUF3Qjs7SUFDeEIsb0NBQWM7O0lBQ2QscUNBQWU7O0lBQ2Ysc0NBQWdCOztJQUNoQiwyQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1oZWFkaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtaGVhZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtaGVhZGluZy5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb21cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUhlYWRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBuYW1lO1xuICBASW5wdXQoKSBpZCA9ICdoZWFkaW5nJztcbiAgQElucHV0KCkgc2l6ZTtcbiAgQElucHV0KCkgY29sb3I7XG4gIEBJbnB1dCgpIHdlaWdodDtcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19