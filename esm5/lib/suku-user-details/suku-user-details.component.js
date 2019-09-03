/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuUserDetailsComponent = /** @class */ (function () {
    function SukuUserDetailsComponent() {
        this.widgetTitle = 'User Information';
        this.widgetTitleColor = '';
        this.widgetTitleWeight = '';
        this.widgetTitleSize = '';
        this.widgetTitlecustomclass = '';
        this.widgetTitleid = '';
        this.shippingaddressCustomClass = '';
        this.email = '';
        this.phoneNumber = '';
        this.fullName = '';
        this.fullAddress = '';
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
    SukuUserDetailsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuUserDetailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-user-details',
                    template: "<div class=\"headingStyle\" [style.font-size.px]=\"widgetTitleSize\" [class]=\"widgetTitlecustomclass\" id=\"{{widgetTitleid}}\"\n  [style.font-weight]=\"widgetTitleWeight\" [style.color]=\"widgetTitleColor\">{{widgetTitle}} </div>\n<div class=\"article mb-3 p-0 pt-3\">\n  <div class=\"col-sm-12 col-xs-12 border\">\n    <div class=\"col-sm-12 col-xs-12 pt-3 p-2\">\n      <div class=\"font_weight contentStyle shipping-address\" [class]=\"shippingaddressCustomClass\">\n        <p class=\"mb-1\"><span>{{fullName}}</span></p>\n        <p class=\"mb-1\">{{email}}</p>\n        <p class=\"mb-1\">{{phoneNumber}}</p>\n        <p class=\"mb-1\"><span>{{firstName}}</span>\n          <span class=\"ml-2\">{{secondName}}</span></p>\n        <p class=\"mb-1\">{{addressOne}}</p>\n        <p class=\"mb-1\">{{addressTwo}}</p>\n        <p class=\"mb-1\"><span>{{city}}</span><span class=\"ml-2\">{{state}}</span><span class=\"ml-2\">\n            {{zip}}</span></p>\n        <p class=\"mb-1\">{{country}}</p>\n        <p class=\"mb-1\">{{fullAddress}}</p>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.headingStyle{font-family:var(--suku-primary-font);padding-bottom:9px}.contentStyle{padding-top:15px}.marginBottom22{margin-bottom:22px}.shipping-address{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#020202d9;margin-bottom:1px;text-transform:capitalize}.article{width:100%;float:left}"]
                }] }
    ];
    /** @nocollapse */
    SukuUserDetailsComponent.ctorParameters = function () { return []; };
    SukuUserDetailsComponent.propDecorators = {
        widgetTitle: [{ type: Input }],
        widgetTitleColor: [{ type: Input }],
        widgetTitleWeight: [{ type: Input }],
        widgetTitleSize: [{ type: Input }],
        widgetTitlecustomclass: [{ type: Input }],
        widgetTitleid: [{ type: Input }],
        shippingaddressCustomClass: [{ type: Input }],
        email: [{ type: Input }],
        phoneNumber: [{ type: Input }],
        fullName: [{ type: Input }],
        fullAddress: [{ type: Input }],
        firstName: [{ type: Input }],
        secondName: [{ type: Input }],
        addressOne: [{ type: Input }],
        addressTwo: [{ type: Input }],
        city: [{ type: Input }],
        state: [{ type: Input }],
        zip: [{ type: Input }],
        country: [{ type: Input }]
    };
    return SukuUserDetailsComponent;
}());
export { SukuUserDetailsComponent };
if (false) {
    /** @type {?} */
    SukuUserDetailsComponent.prototype.widgetTitle;
    /** @type {?} */
    SukuUserDetailsComponent.prototype.widgetTitleColor;
    /** @type {?} */
    SukuUserDetailsComponent.prototype.widgetTitleWeight;
    /** @type {?} */
    SukuUserDetailsComponent.prototype.widgetTitleSize;
    /** @type {?} */
    SukuUserDetailsComponent.prototype.widgetTitlecustomclass;
    /** @type {?} */
    SukuUserDetailsComponent.prototype.widgetTitleid;
    /** @type {?} */
    SukuUserDetailsComponent.prototype.shippingaddressCustomClass;
    /** @type {?} */
    SukuUserDetailsComponent.prototype.email;
    /** @type {?} */
    SukuUserDetailsComponent.prototype.phoneNumber;
    /** @type {?} */
    SukuUserDetailsComponent.prototype.fullName;
    /** @type {?} */
    SukuUserDetailsComponent.prototype.fullAddress;
    /** @type {?} */
    SukuUserDetailsComponent.prototype.firstName;
    /** @type {?} */
    SukuUserDetailsComponent.prototype.secondName;
    /** @type {?} */
    SukuUserDetailsComponent.prototype.addressOne;
    /** @type {?} */
    SukuUserDetailsComponent.prototype.addressTwo;
    /** @type {?} */
    SukuUserDetailsComponent.prototype.city;
    /** @type {?} */
    SukuUserDetailsComponent.prototype.state;
    /** @type {?} */
    SukuUserDetailsComponent.prototype.zip;
    /** @type {?} */
    SukuUserDetailsComponent.prototype.country;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS11c2VyLWRldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtdXNlci1kZXRhaWxzL3N1a3UtdXNlci1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUF5QkU7UUFuQk8sZ0JBQVcsR0FBRyxrQkFBa0IsQ0FBQztRQUNqQyxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUM1QixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQiwrQkFBMEIsR0FBRyxFQUFFLENBQUM7UUFDaEMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUNKLENBQUM7Ozs7SUFFakIsMkNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixnbENBQWlEOztpQkFFbEQ7Ozs7OzhCQUVBLEtBQUs7bUNBQ0wsS0FBSztvQ0FDTCxLQUFLO2tDQUNMLEtBQUs7eUNBQ0wsS0FBSztnQ0FDTCxLQUFLOzZDQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7O0lBTU4sK0JBQUM7Q0FBQSxBQTlCRCxJQThCQztTQXpCWSx3QkFBd0I7OztJQUNyQywrQ0FBMEM7O0lBQzFDLG9EQUErQjs7SUFDL0IscURBQWdDOztJQUNoQyxtREFBOEI7O0lBQzlCLDBEQUFxQzs7SUFDckMsaURBQTRCOztJQUM1Qiw4REFBeUM7O0lBQ3pDLHlDQUFvQjs7SUFDcEIsK0NBQTBCOztJQUMxQiw0Q0FBdUI7O0lBQ3ZCLCtDQUEwQjs7SUFDMUIsNkNBQXdCOztJQUN4Qiw4Q0FBeUI7O0lBQ3pCLDhDQUF5Qjs7SUFDekIsOENBQXlCOztJQUN6Qix3Q0FBbUI7O0lBQ25CLHlDQUFvQjs7SUFDcEIsdUNBQWtCOztJQUNsQiwyQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS11c2VyLWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS11c2VyLWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXVzZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VVc2VyRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5ASW5wdXQoKSB3aWRnZXRUaXRsZSA9ICdVc2VyIEluZm9ybWF0aW9uJztcbkBJbnB1dCgpIHdpZGdldFRpdGxlQ29sb3IgPSAnJztcbkBJbnB1dCgpIHdpZGdldFRpdGxlV2VpZ2h0ID0gJyc7XG5ASW5wdXQoKSB3aWRnZXRUaXRsZVNpemUgPSAnJztcbkBJbnB1dCgpIHdpZGdldFRpdGxlY3VzdG9tY2xhc3MgPSAnJztcbkBJbnB1dCgpIHdpZGdldFRpdGxlaWQgPSAnJztcbkBJbnB1dCgpIHNoaXBwaW5nYWRkcmVzc0N1c3RvbUNsYXNzID0gJyc7XG5ASW5wdXQoKSBlbWFpbCA9ICcnO1xuQElucHV0KCkgcGhvbmVOdW1iZXIgPSAnJztcbkBJbnB1dCgpIGZ1bGxOYW1lID0gJyc7XG5ASW5wdXQoKSBmdWxsQWRkcmVzcyA9ICcnO1xuQElucHV0KCkgZmlyc3ROYW1lID0gJyc7XG5ASW5wdXQoKSBzZWNvbmROYW1lID0gJyc7XG5ASW5wdXQoKSBhZGRyZXNzT25lID0gJyc7XG5ASW5wdXQoKSBhZGRyZXNzVHdvID0gJyc7XG5ASW5wdXQoKSBjaXR5ID0gJyc7XG5ASW5wdXQoKSBzdGF0ZSA9ICcnO1xuQElucHV0KCkgemlwID0gJyc7XG5ASW5wdXQoKSBjb3VudHJ5ID0gJyc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19