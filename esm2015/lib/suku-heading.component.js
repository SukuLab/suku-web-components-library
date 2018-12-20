/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuHeadingComponent {
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
export class FooterSampleComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1oZWFkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3UtaGVhZGluZy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWhlYWRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXVCekQsTUFBTSxPQUFPLG9CQUFvQjtJQXJCakM7UUFzQlUsT0FBRSxHQUFHLFNBQVMsQ0FBQztRQUlmLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQTNCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7OztHQUlUO3lCQUVDOzs7Ozs7Ozs7O01BVUU7YUFFTDs7O2lCQUVDLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7OztJQUpOLGtDQUF3Qjs7SUFDeEIsb0NBQWM7O0lBQ2QscUNBQWU7O0lBQ2Ysc0NBQWdCOztJQUNoQiwyQ0FBMEI7O0FBa0IzQixNQUFNLE9BQU8scUJBQXFCO0lBRWhDLGdCQUFnQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7R0FJVDt5QkFFQzs7OztNQUlFO2FBRUwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1oZWFkaW5nJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGgxIFtzdHlsZS5mb250LXNpemUucHhdPVwic2l6ZVwiIFtjbGFzc109XCJjdXN0b21DbGFzc1wiIFtzdHlsZS5mb250LXdlaWdodF09XCJ3ZWlnaHRcIiBbc3R5bGUuY29sb3JdPVwiY29sb3JcIiBpZD1cInt7aWR9fVwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvaDE+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBoMSB7XG4gICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGwgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOmdyZWVuO1xuICAgIH1gXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUhlYWRpbmdDb21wb25lbnQge1xuXHRASW5wdXQoKSBpZCA9ICdoZWFkaW5nJztcblx0QElucHV0KCkgc2l6ZTtcblx0QElucHV0KCkgY29sb3I7XG5cdEBJbnB1dCgpIHdlaWdodDtcblx0QElucHV0KCkgY3VzdG9tQ2xhc3MgPSAnJztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1mb290ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYHAge1xuICAgICAgYmFja2dyb3VuZDogZ3JleTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgIH1gXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyU2FtcGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==