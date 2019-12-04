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
        this.companyIconSize = 1.1;
        this.companyIconColor = "#a7bf2e";
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
                    template: "<div class=\"headingStyle\" [style.font-size.px]=\"widgetTitleSize\" [class]=\"widgetTitlecustomclass\" id=\"{{widgetTitleid}}\"\r\n  [style.font-weight]=\"widgetTitleWeight\" [style.color]=\"widgetTitleColor\">{{widgetTitle}} </div>\r\n<div class=\"article mb-3 p-0 pt-3\">\r\n  <div class=\"col-sm-12 col-xs-12 border\">\r\n    <div class=\"col-sm-12 col-xs-12 pt-3 p-2\">\r\n      <div class=\"font_weight contentStyle shipping-address\" [class]=\"shippingaddressCustomClass\">\r\n        <p class=\"mb-1 wordBreak d-flex\"><span width=\"2\" [style.font-size.em]=\"companyIconSize\" [style.color]=\"companyIconColor\" class=\"fa fa-building-o ml-1 mr-3 pt-2\" ></span>{{fullName}}</p>\r\n        <p class=\"mb-1 wordBreak d-flex\"><span class=\"suku-mail-icon mr-2 mt-1 fsize\"></span>{{email}}</p>\r\n        <p class=\"mb-1 wordBreak d-flex\"><span class=\"suku-phone-icon mr-2 mt-1  fsize\"></span>{{phoneNumber}}</p>\r\n        <p class=\"mb-1 wordBreak d-flex\"><span class=\"locationIcon suku-map-pin-icon pr-4\"></span>{{fullAddress}}</p>\r\n    </div> \r\n  </div>\r\n</div> ",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.headingStyle{font-family:var(--suku-primary-font);padding-bottom:9px}.contentStyle{padding-top:15px}.marginBottom22{margin-bottom:22px}.shipping-address{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-2);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#020202d9;margin-bottom:1px;text-transform:capitalize}.article{font-family:var(--suku-primary-font);width:100%;float:left}.wordBreak{word-break:break-all}.locationIcon{width:1.5em!important;font-size:1.2em;height:1.2em}.fsize{font-size:1.3em}"]
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
    /** @type {?} */
    SukuUserDetailsComponent.prototype.companyIconSize;
    /** @type {?} */
    SukuUserDetailsComponent.prototype.companyIconColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS11c2VyLWRldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtdXNlci1kZXRhaWxzL3N1a3UtdXNlci1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUEyQkU7UUFyQlMsZ0JBQVcsR0FBRyxrQkFBa0IsQ0FBQztRQUNqQyxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUM1QixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQiwrQkFBMEIsR0FBRyxFQUFFLENBQUM7UUFhekMsb0JBQWUsR0FBRyxHQUFHLENBQUM7UUFDdEIscUJBQWdCLEdBQUcsU0FBUyxDQUFBO0lBQ1osQ0FBQzs7OztJQUVqQiwyQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLDBrQ0FBaUQ7O2lCQUVsRDs7Ozs7OEJBRUUsS0FBSzttQ0FDTCxLQUFLO29DQUNMLEtBQUs7a0NBQ0wsS0FBSzt5Q0FDTCxLQUFLO2dDQUNMLEtBQUs7NkNBQ0wsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7SUFRUiwrQkFBQztDQUFBLEFBaENELElBZ0NDO1NBM0JZLHdCQUF3Qjs7O0lBQ25DLCtDQUEwQzs7SUFDMUMsb0RBQStCOztJQUMvQixxREFBZ0M7O0lBQ2hDLG1EQUE4Qjs7SUFDOUIsMERBQXFDOztJQUNyQyxpREFBNEI7O0lBQzVCLDhEQUF5Qzs7SUFDekMseUNBQWU7O0lBQ2YsK0NBQXFCOztJQUNyQiw0Q0FBa0I7O0lBQ2xCLCtDQUFxQjs7SUFDckIsNkNBQW1COztJQUNuQiw4Q0FBb0I7O0lBQ3BCLDhDQUFvQjs7SUFDcEIsOENBQW9COztJQUNwQix3Q0FBYzs7SUFDZCx5Q0FBZTs7SUFDZix1Q0FBYTs7SUFDYiwyQ0FBaUI7O0lBQ2pCLG1EQUFzQjs7SUFDdEIsb0RBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtdXNlci1kZXRhaWxzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS11c2VyLWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtdXNlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VVc2VyRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgd2lkZ2V0VGl0bGUgPSAnVXNlciBJbmZvcm1hdGlvbic7XHJcbiAgQElucHV0KCkgd2lkZ2V0VGl0bGVDb2xvciA9ICcnO1xyXG4gIEBJbnB1dCgpIHdpZGdldFRpdGxlV2VpZ2h0ID0gJyc7XHJcbiAgQElucHV0KCkgd2lkZ2V0VGl0bGVTaXplID0gJyc7XHJcbiAgQElucHV0KCkgd2lkZ2V0VGl0bGVjdXN0b21jbGFzcyA9ICcnO1xyXG4gIEBJbnB1dCgpIHdpZGdldFRpdGxlaWQgPSAnJztcclxuICBASW5wdXQoKSBzaGlwcGluZ2FkZHJlc3NDdXN0b21DbGFzcyA9ICcnO1xyXG4gIEBJbnB1dCgpIGVtYWlsO1xyXG4gIEBJbnB1dCgpIHBob25lTnVtYmVyO1xyXG4gIEBJbnB1dCgpIGZ1bGxOYW1lO1xyXG4gIEBJbnB1dCgpIGZ1bGxBZGRyZXNzO1xyXG4gIEBJbnB1dCgpIGZpcnN0TmFtZTtcclxuICBASW5wdXQoKSBzZWNvbmROYW1lO1xyXG4gIEBJbnB1dCgpIGFkZHJlc3NPbmU7XHJcbiAgQElucHV0KCkgYWRkcmVzc1R3bztcclxuICBASW5wdXQoKSBjaXR5O1xyXG4gIEBJbnB1dCgpIHN0YXRlO1xyXG4gIEBJbnB1dCgpIHppcDtcclxuICBASW5wdXQoKSBjb3VudHJ5O1xyXG4gIGNvbXBhbnlJY29uU2l6ZSA9IDEuMTtcclxuICBjb21wYW55SWNvbkNvbG9yID0gXCIjYTdiZjJlXCJcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59IFxyXG4iXX0=