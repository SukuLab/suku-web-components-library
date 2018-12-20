import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SukuHeadingComponent {
    constructor() {
        this.id = 'heading';
        this.customClass = '';
    }
}
SukuHeadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-heading',
                template: `
  <h1 [style.font-size.px]="size" [class]="customClass" [style.font-weight]="weight" [style.color]="color" id="{{id}}">
  <ng-content></ng-content>
  </h1>
  `,
                styles: [`h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 20px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.3px;
      word-break: break-all !important;
      color:green;
    }`]
            }] }
];
SukuHeadingComponent.propDecorators = {
    id: [{ type: Input }],
    size: [{ type: Input }],
    color: [{ type: Input }],
    weight: [{ type: Input }],
    customClass: [{ type: Input }]
};
class FooterSampleComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FooterSampleComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-footer',
                template: `
    <p>
      <ng-content></ng-content>
    </p>
  `,
                styles: [`p {
      background: grey;
      color: white;
      text-align: center
    }`]
            }] }
];
/** @nocollapse */
FooterSampleComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SukuModule {
}
SukuModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SukuHeadingComponent, FooterSampleComponent],
                imports: [],
                exports: [SukuHeadingComponent, FooterSampleComponent]
            },] }
];

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