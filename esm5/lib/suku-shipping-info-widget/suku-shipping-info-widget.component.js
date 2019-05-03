/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuShippingInfoWidgetComponent = /** @class */ (function () {
    function SukuShippingInfoWidgetComponent() {
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
    SukuShippingInfoWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuShippingInfoWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-shipping-info-widget',
                    template: "<div class=\"headingStyle\">{{widgetTitle}} </div>\n<div class=\"article mb-4\">\n  <div class=\"col-sm-12 col-xs-12  borderTop border borderLeft\">\n    <div class=\"col-sm-11 col-xs-12 marginBottom22\">\n      <div class=\"font_weight contentStyle\">\n        <!-- {{shippingAddress}} -->\n        <p class=\"bidderAdd mb-1\"><span>{{firstName || 'no data'}}</span>\n          <span class=\"ml-2\">{{secondName}}</span></p>\n        <p class=\"bidderAdd mb-1\">{{addressOne}}</p>\n        <p class=\"bidderAdd mb-1\">{{addressTwo}}</p>\n        <p class=\"bidderAdd mb-1\"><span>{{city}}</span><span\n            class=\"ml-2\">{{state}}</span><span class=\"ml-2\">\n            {{zip}}</span></p>\n        <p class=\"bidderAdd mb-1\">{{country}}</p>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: [".headingStyle{font-family:Poppins,sans-serif;padding-bottom:9px}.contentStyle{padding-top:15px}.marginBottom22{margin-bottom:22px}.bidderAdd{font-family:\"Encode Sans\",sans-serif;font-size:15px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#020202d9;margin-bottom:1px;text-transform:capitalize}.article{width:100%;float:left;margin:0 8.4% 50px 0}"]
                }] }
    ];
    /** @nocollapse */
    SukuShippingInfoWidgetComponent.ctorParameters = function () { return []; };
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
    return SukuShippingInfoWidgetComponent;
}());
export { SukuShippingInfoWidgetComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zaGlwcGluZy1pbmZvLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1zaGlwcGluZy1pbmZvLXdpZGdldC9zdWt1LXNoaXBwaW5nLWluZm8td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFlRTtRQVRPLGdCQUFXLEdBQUcsc0JBQXNCLENBQUM7UUFDckMsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULFlBQU8sR0FBRyxFQUFFLENBQUM7SUFDSixDQUFDOzs7O0lBRWpCLGtEQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsd3lCQUF5RDs7aUJBRTFEOzs7Ozs4QkFFQSxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7SUFNTixzQ0FBQztDQUFBLEFBcEJELElBb0JDO1NBZlksK0JBQStCOzs7SUFDNUMsc0RBQThDOztJQUM5QyxvREFBd0I7O0lBQ3hCLHFEQUF5Qjs7SUFDekIscURBQXlCOztJQUN6QixxREFBeUI7O0lBQ3pCLCtDQUFtQjs7SUFDbkIsZ0RBQW9COztJQUNwQiw4Q0FBa0I7O0lBQ2xCLGtEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXNoaXBwaW5nLWluZm8td2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3Utc2hpcHBpbmctaW5mby13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXNoaXBwaW5nLWluZm8td2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVNoaXBwaW5nSW5mb1dpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5ASW5wdXQoKSB3aWRnZXRUaXRsZSA9ICdTaGlwcGluZyBJbmZvcm1hdGlvbic7XG5ASW5wdXQoKSBmaXJzdE5hbWUgPSAnJztcbkBJbnB1dCgpIHNlY29uZE5hbWUgPSAnJztcbkBJbnB1dCgpIGFkZHJlc3NPbmUgPSAnJztcbkBJbnB1dCgpIGFkZHJlc3NUd28gPSAnJztcbkBJbnB1dCgpIGNpdHkgPSAnJztcbkBJbnB1dCgpIHN0YXRlID0gJyc7XG5ASW5wdXQoKSB6aXAgPSAnJztcbkBJbnB1dCgpIGNvdW50cnkgPSAnJztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=