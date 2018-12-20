import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SukuModule = /** @class */ (function () {
    function SukuModule() {
    }
    SukuModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SukuHeadingComponent, FooterSampleComponent],
                    imports: [],
                    exports: [SukuHeadingComponent, FooterSampleComponent]
                },] }
    ];
    return SukuModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SukuHeadingComponent, FooterSampleComponent, SukuModule };

//# sourceMappingURL=suku-heading.js.map