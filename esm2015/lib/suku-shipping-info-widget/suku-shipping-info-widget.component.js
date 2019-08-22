/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuShippingInfoWidgetComponent {
    constructor() {
        this.widgetTitle = 'Shipping Information';
        this.widgetTitleColor = '';
        this.widgetTitleWeight = '';
        this.widgetTitleSize = '';
        this.widgetTitlecustomclass = '';
        this.widgetTitleid = '';
        this.shippingaddressCustomClass = '';
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
                template: "<div class=\"headingStyle\" [style.font-size.px]=\"widgetTitleSize\" [class]=\"widgetTitlecustomclass\" id=\"{{widgetTitleid}}\"\n  [style.font-weight]=\"widgetTitleWeight\" [style.color]=\"widgetTitleColor\">{{widgetTitle}} </div>\n<div class=\"article mb-3 p-0 pt-3\">\n  <div class=\"col-sm-12 col-xs-12 border\">\n    <div class=\"col-sm-12 col-xs-12 pt-3 p-2\">\n      <div class=\"font_weight contentStyle shipping-address\" [class]=\"shippingaddressCustomClass\">\n        <p class=\"mb-1\"><span>{{firstName || 'no data'}}</span>\n          <span class=\"ml-2\">{{secondName}}</span></p>\n        <p class=\"mb-1\">{{addressOne}}</p>\n        <p class=\"mb-1\">{{addressTwo}}</p>\n        <p class=\"mb-1\"><span>{{city}}</span><span class=\"ml-2\">{{state}}</span><span class=\"ml-2\">\n            {{zip}}</span></p>\n        <p class=\"mb-1\">{{country}}</p>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.headingStyle{font-family:var(--suku-primary-font);padding-bottom:9px}.contentStyle{padding-top:15px}.marginBottom22{margin-bottom:22px}.shipping-address{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#020202d9;margin-bottom:1px;text-transform:capitalize}.article{width:100%;float:left}"]
            }] }
];
/** @nocollapse */
SukuShippingInfoWidgetComponent.ctorParameters = () => [];
SukuShippingInfoWidgetComponent.propDecorators = {
    widgetTitle: [{ type: Input }],
    widgetTitleColor: [{ type: Input }],
    widgetTitleWeight: [{ type: Input }],
    widgetTitleSize: [{ type: Input }],
    widgetTitlecustomclass: [{ type: Input }],
    widgetTitleid: [{ type: Input }],
    shippingaddressCustomClass: [{ type: Input }],
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
    SukuShippingInfoWidgetComponent.prototype.widgetTitleColor;
    /** @type {?} */
    SukuShippingInfoWidgetComponent.prototype.widgetTitleWeight;
    /** @type {?} */
    SukuShippingInfoWidgetComponent.prototype.widgetTitleSize;
    /** @type {?} */
    SukuShippingInfoWidgetComponent.prototype.widgetTitlecustomclass;
    /** @type {?} */
    SukuShippingInfoWidgetComponent.prototype.widgetTitleid;
    /** @type {?} */
    SukuShippingInfoWidgetComponent.prototype.shippingaddressCustomClass;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zaGlwcGluZy1pbmZvLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1zaGlwcGluZy1pbmZvLXdpZGdldC9zdWt1LXNoaXBwaW5nLWluZm8td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLCtCQUErQjtJQWdCMUM7UUFmTyxnQkFBVyxHQUFHLHNCQUFzQixDQUFDO1FBQ3JDLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUN0QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLCtCQUEwQixHQUFHLEVBQUUsQ0FBQztRQUNoQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUNKLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsNjVCQUF5RDs7YUFFMUQ7Ozs7OzBCQUVBLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLOzhCQUNMLEtBQUs7cUNBQ0wsS0FBSzs0QkFDTCxLQUFLO3lDQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7a0JBQ0wsS0FBSztzQkFDTCxLQUFLOzs7O0lBZE4sc0RBQThDOztJQUM5QywyREFBK0I7O0lBQy9CLDREQUFnQzs7SUFDaEMsMERBQThCOztJQUM5QixpRUFBcUM7O0lBQ3JDLHdEQUE0Qjs7SUFDNUIscUVBQXlDOztJQUN6QyxvREFBd0I7O0lBQ3hCLHFEQUF5Qjs7SUFDekIscURBQXlCOztJQUN6QixxREFBeUI7O0lBQ3pCLCtDQUFtQjs7SUFDbkIsZ0RBQW9COztJQUNwQiw4Q0FBa0I7O0lBQ2xCLGtEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXNoaXBwaW5nLWluZm8td2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3Utc2hpcHBpbmctaW5mby13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXNoaXBwaW5nLWluZm8td2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVNoaXBwaW5nSW5mb1dpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5ASW5wdXQoKSB3aWRnZXRUaXRsZSA9ICdTaGlwcGluZyBJbmZvcm1hdGlvbic7XG5ASW5wdXQoKSB3aWRnZXRUaXRsZUNvbG9yID0gJyc7XG5ASW5wdXQoKSB3aWRnZXRUaXRsZVdlaWdodCA9ICcnO1xuQElucHV0KCkgd2lkZ2V0VGl0bGVTaXplID0gJyc7XG5ASW5wdXQoKSB3aWRnZXRUaXRsZWN1c3RvbWNsYXNzID0gJyc7XG5ASW5wdXQoKSB3aWRnZXRUaXRsZWlkID0gJyc7XG5ASW5wdXQoKSBzaGlwcGluZ2FkZHJlc3NDdXN0b21DbGFzcyA9ICcnO1xuQElucHV0KCkgZmlyc3ROYW1lID0gJyc7XG5ASW5wdXQoKSBzZWNvbmROYW1lID0gJyc7XG5ASW5wdXQoKSBhZGRyZXNzT25lID0gJyc7XG5ASW5wdXQoKSBhZGRyZXNzVHdvID0gJyc7XG5ASW5wdXQoKSBjaXR5ID0gJyc7XG5ASW5wdXQoKSBzdGF0ZSA9ICcnO1xuQElucHV0KCkgemlwID0gJyc7XG5ASW5wdXQoKSBjb3VudHJ5ID0gJyc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19