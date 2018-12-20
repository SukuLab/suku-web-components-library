/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuHeadingComponent = /** @class */ (function () {
    function SukuHeadingComponent() {
        this.id = 'heading';
        this.customClass = '';
    }
    SukuHeadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-heading',
                    template: "\n  <h1 [style.font-size.px]=\"size\" [class]=\"customClass\" [style.font-weight]=\"weight\" [style.color]=\"color\" id=\"{{id}}\">\n  <ng-content></ng-content>\n  </h1>\n  ",
                    styles: ["h1 {\n      font-family: 'Poppins', sans-serif;\n      font-size: 20px;\n      font-weight: 600;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: normal;\n      letter-spacing: -0.3px;\n      word-break: break-all !important;\n      color:green;\n    }"]
                }] }
    ];
    SukuHeadingComponent.propDecorators = {
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
var FooterSampleComponent = /** @class */ (function () {
    function FooterSampleComponent() {
    }
    /**
     * @return {?}
     */
    FooterSampleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FooterSampleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-footer',
                    template: "\n    <p>\n      <ng-content></ng-content>\n    </p>\n  ",
                    styles: ["p {\n      background: grey;\n      color: white;\n      text-align: center\n    }"]
                }] }
    ];
    /** @nocollapse */
    FooterSampleComponent.ctorParameters = function () { return []; };
    return FooterSampleComponent;
}());
export { FooterSampleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1oZWFkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3UtaGVhZGluZy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWhlYWRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RDtJQUFBO1FBc0JVLE9BQUUsR0FBRyxTQUFTLENBQUM7UUFJZixnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkEzQkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsK0tBSVQ7NkJBRUMseVJBVUU7aUJBRUw7OztxQkFFQyxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7O0lBQ1AsMkJBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQU5ZLG9CQUFvQjs7O0lBQ2hDLGtDQUF3Qjs7SUFDeEIsb0NBQWM7O0lBQ2QscUNBQWU7O0lBQ2Ysc0NBQWdCOztJQUNoQiwyQ0FBMEI7O0FBRzNCO0lBaUJFO0lBQWdCLENBQUM7Ozs7SUFFakIsd0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBcEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLDBEQUlUOzZCQUVDLG9GQUlFO2lCQUVMOzs7O0lBUUQsNEJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQVBZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWhlYWRpbmcnLFxuICB0ZW1wbGF0ZTogYFxuICA8aDEgW3N0eWxlLmZvbnQtc2l6ZS5weF09XCJzaXplXCIgW2NsYXNzXT1cImN1c3RvbUNsYXNzXCIgW3N0eWxlLmZvbnQtd2VpZ2h0XT1cIndlaWdodFwiIFtzdHlsZS5jb2xvcl09XCJjb2xvclwiIGlkPVwie3tpZH19XCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9oMT5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYGgxIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbCAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6Z3JlZW47XG4gICAgfWBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1SGVhZGluZ0NvbXBvbmVudCB7XG5cdEBJbnB1dCgpIGlkID0gJ2hlYWRpbmcnO1xuXHRASW5wdXQoKSBzaXplO1xuXHRASW5wdXQoKSBjb2xvcjtcblx0QElucHV0KCkgd2VpZ2h0O1xuXHRASW5wdXQoKSBjdXN0b21DbGFzcyA9ICcnO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWZvb3RlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgcCB7XG4gICAgICBiYWNrZ3JvdW5kOiBncmV5O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgfWBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJTYW1wbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19