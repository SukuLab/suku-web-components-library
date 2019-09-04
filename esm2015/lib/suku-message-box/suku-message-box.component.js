/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuMessageBoxComponent {
    constructor() {
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
    ngOnInit() {
    }
}
SukuMessageBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-message-box',
                template: "<div class=\"headingStyle\" [style.font-size.px]=\"widgetTitleSize\" [class]=\"widgetTitlecustomclass\" id=\"{{widgetTitleid}}\"\n  [style.font-weight]=\"widgetTitleWeight\" [style.color]=\"widgetTitleColor\">{{widgetTitle}} </div>\n<div class=\"article mb-3 p-0 pt-3\">\n  <div class=\"col-sm-12 col-xs-12 border\">\n    <div class=\"col-sm-12 col-xs-12 pt-3 p-2\">\n      <div class=\"font_weight contentStyle shipping-address\" [class]=\"shippingaddressCustomClass\">\n        <p class=\"mb-1\"><span>{{contentOne}}</span></p>\n        <p class=\"mb-1\">{{contentTwo}}</p>\n        <p class=\"mb-1\">{{contentThree}}</p>\n        <p class=\"mb-1\">{{contentFour}}</p>\n    </div>\n  </div>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
SukuMessageBoxComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tZXNzYWdlLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1tZXNzYWdlLWJveC9zdWt1LW1lc3NhZ2UtYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHVCQUF1QjtJQVlsQztRQVhTLGdCQUFXLEdBQUcsa0JBQWtCLENBQUM7UUFDakMscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDNUIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsK0JBQTBCLEdBQUcsRUFBRSxDQUFDO0lBS3pCLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsd3NCQUFnRDs7YUFFakQ7Ozs7OzBCQUVFLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLOzhCQUNMLEtBQUs7cUNBQ0wsS0FBSzs0QkFDTCxLQUFLO3lDQUNMLEtBQUs7eUJBQ0wsS0FBSyxTQUFDLGFBQWE7eUJBQ25CLEtBQUssU0FBQyxhQUFhOzJCQUNuQixLQUFLLFNBQUMsZUFBZTswQkFDckIsS0FBSyxTQUFDLGNBQWM7Ozs7SUFWckIsOENBQTBDOztJQUMxQyxtREFBK0I7O0lBQy9CLG9EQUFnQzs7SUFDaEMsa0RBQThCOztJQUM5Qix5REFBcUM7O0lBQ3JDLGdEQUE0Qjs7SUFDNUIsNkRBQXlDOztJQUN6Qyw2Q0FBa0M7O0lBQ2xDLDZDQUFrQzs7SUFDbEMsK0NBQXNDOztJQUN0Qyw4Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1tZXNzYWdlLWJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LW1lc3NhZ2UtYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1tZXNzYWdlLWJveC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VNZXNzYWdlQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgd2lkZ2V0VGl0bGUgPSAnVXNlciBJbmZvcm1hdGlvbic7XG4gIEBJbnB1dCgpIHdpZGdldFRpdGxlQ29sb3IgPSAnJztcbiAgQElucHV0KCkgd2lkZ2V0VGl0bGVXZWlnaHQgPSAnJztcbiAgQElucHV0KCkgd2lkZ2V0VGl0bGVTaXplID0gJyc7XG4gIEBJbnB1dCgpIHdpZGdldFRpdGxlY3VzdG9tY2xhc3MgPSAnJztcbiAgQElucHV0KCkgd2lkZ2V0VGl0bGVpZCA9ICcnO1xuICBASW5wdXQoKSBzaGlwcGluZ2FkZHJlc3NDdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoJ2NvbnRlbnQtb25lJykgY29udGVudE9uZSA7XG4gIEBJbnB1dCgnY29udGVudC10d28nKSBjb250ZW50VHdvIDtcbiAgQElucHV0KCdjb250ZW50LXRocmVlJykgY29udGVudFRocmVlIDtcbiAgQElucHV0KCdjb250ZW50LWZvdXInKSBjb250ZW50Rm91cjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=