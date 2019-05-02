/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuShippingInfoWidgetComponent {
    constructor() {
        this.widgetTitle = 'Shipping Information';
        this.firstName = '';
        this.secondName = '';
        this.addressOne = '';
        this.addressTwo = '';
        this.city = '';
        this.state = '';
        this.zip = '';
        this.country = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuShippingInfoWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-shipping-info-widget',
                template: "<div class=\"headingStyle\">{{widgetTitle}} </div>\n<div class=\"article mb-4\">\n  <div class=\"col-sm-12 col-xs-12  borderTop border borderLeft\">\n    <div class=\"col-sm-11 col-xs-12 marginBottom22\">\n      <div class=\"font_weight contentStyle\">\n        <!-- {{shippingAddress}} -->\n        <p class=\"bidderAdd mb-1\"><span>{{firstName || 'no data'}}</span>\n          <span class=\"ml-2\">{{secondName}}</span></p>\n        <p class=\"bidderAdd mb-1\">{{addressOne}}</p>\n        <p class=\"bidderAdd mb-1\">{{addressTwo}}</p>\n        <p class=\"bidderAdd mb-1\"><span>{{city}}</span><span\n            class=\"ml-2\">{{state}}</span><span class=\"ml-2\">\n            {{zip}}</span></p>\n        <p class=\"bidderAdd mb-1\">{{country}}</p>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.headingStyle{font-family:\"Encode Sans\",sans-serif;padding-bottom:9px}.contentStyle{padding-top:15px}.marginBottom22{margin-bottom:22px}.bidderAdd{font-family:Poppins,sans-serif;font-size:15px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#020202d9;margin-bottom:1px;text-transform:capitalize}.article{width:100%;float:left;margin:0 8.4% 50px 0}"]
            }] }
];
/** @nocollapse */
SukuShippingInfoWidgetComponent.ctorParameters = () => [];
SukuShippingInfoWidgetComponent.propDecorators = {
    widgetTitle: [{ type: Input }],
    firstName: [{ type: Input }],
    secondName: [{ type: Input }],
    addressOne: [{ type: Input }],
    addressTwo: [{ type: Input }],
    city: [{ type: Input }],
    state: [{ type: Input }],
    zip: [{ type: Input }],
    country: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuShippingInfoWidgetComponent.prototype.widgetTitle;
    /** @type {?} */
    SukuShippingInfoWidgetComponent.prototype.firstName;
    /** @type {?} */
    SukuShippingInfoWidgetComponent.prototype.secondName;
    /** @type {?} */
    SukuShippingInfoWidgetComponent.prototype.addressOne;
    /** @type {?} */
    SukuShippingInfoWidgetComponent.prototype.addressTwo;
    /** @type {?} */
    SukuShippingInfoWidgetComponent.prototype.city;
    /** @type {?} */
    SukuShippingInfoWidgetComponent.prototype.state;
    /** @type {?} */
    SukuShippingInfoWidgetComponent.prototype.zip;
    /** @type {?} */
    SukuShippingInfoWidgetComponent.prototype.country;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zaGlwcGluZy1pbmZvLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1zaGlwcGluZy1pbmZvLXdpZGdldC9zdWt1LXNoaXBwaW5nLWluZm8td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLCtCQUErQjtJQVUxQztRQVRPLGdCQUFXLEdBQUcsc0JBQXNCLENBQUM7UUFDckMsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULFlBQU8sR0FBRyxFQUFFLENBQUM7SUFDSixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLHd5QkFBeUQ7O2FBRTFEOzs7OzswQkFFQSxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO2tCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQVJOLHNEQUE4Qzs7SUFDOUMsb0RBQXdCOztJQUN4QixxREFBeUI7O0lBQ3pCLHFEQUF5Qjs7SUFDekIscURBQXlCOztJQUN6QiwrQ0FBbUI7O0lBQ25CLGdEQUFvQjs7SUFDcEIsOENBQWtCOztJQUNsQixrREFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1zaGlwcGluZy1pbmZvLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXNoaXBwaW5nLWluZm8td2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1zaGlwcGluZy1pbmZvLXdpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VTaGlwcGluZ0luZm9XaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuQElucHV0KCkgd2lkZ2V0VGl0bGUgPSAnU2hpcHBpbmcgSW5mb3JtYXRpb24nO1xuQElucHV0KCkgZmlyc3ROYW1lID0gJyc7XG5ASW5wdXQoKSBzZWNvbmROYW1lID0gJyc7XG5ASW5wdXQoKSBhZGRyZXNzT25lID0gJyc7XG5ASW5wdXQoKSBhZGRyZXNzVHdvID0gJyc7XG5ASW5wdXQoKSBjaXR5ID0gJyc7XG5ASW5wdXQoKSBzdGF0ZSA9ICcnO1xuQElucHV0KCkgemlwID0gJyc7XG5ASW5wdXQoKSBjb3VudHJ5ID0gJyc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19