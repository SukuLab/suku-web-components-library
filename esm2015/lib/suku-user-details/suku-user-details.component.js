/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuUserDetailsComponent {
    constructor() {
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
    ngOnInit() {
    }
}
SukuUserDetailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-user-details',
                template: "<div class=\"headingStyle\" [style.font-size.px]=\"widgetTitleSize\" [class]=\"widgetTitlecustomclass\" id=\"{{widgetTitleid}}\"\r\n  [style.font-weight]=\"widgetTitleWeight\" [style.color]=\"widgetTitleColor\">{{widgetTitle}} </div>\r\n<div class=\"article mb-3 p-0 pt-3\">\r\n  <div class=\"col-sm-12 col-xs-12 border\">\r\n    <div class=\"col-sm-12 col-xs-12 pt-3 p-2\">\r\n      <div class=\"font_weight contentStyle shipping-address\" [class]=\"shippingaddressCustomClass\">\r\n        <p class=\"mb-1 wordBreak d-flex\"><span width=\"2\" [style.font-size.em]=\"companyIconSize\" [style.color]=\"companyIconColor\" class=\"fa fa-building-o ml-1 mr-3 pt-2\" ></span>{{fullName}}</p>\r\n        <p class=\"mb-1 wordBreak d-flex\"><span class=\"suku-mail-icon mr-2 mt-1 fsize\"></span>{{email}}</p>\r\n        <p class=\"mb-1 wordBreak d-flex\"><span class=\"suku-phone-icon mr-2 mt-1  fsize\"></span>{{phoneNumber}}</p>\r\n        <p class=\"mb-1 wordBreak d-flex\"><span class=\"locationIcon suku-map-pin-icon pr-4\"></span>{{fullAddress}}</p>\r\n    </div> \r\n  </div>\r\n</div> ",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.headingStyle{font-family:var(--suku-primary-font);padding-bottom:9px}.contentStyle{padding-top:15px}.marginBottom22{margin-bottom:22px}.shipping-address{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-2);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#020202d9;margin-bottom:1px;text-transform:capitalize}.article{font-family:var(--suku-primary-font);width:100%;float:left}.wordBreak{word-break:break-all}.locationIcon{width:1.5em!important;font-size:1.2em;height:1.2em}.fsize{font-size:1.3em}"]
            }] }
];
/** @nocollapse */
SukuUserDetailsComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS11c2VyLWRldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtdXNlci1kZXRhaWxzL3N1a3UtdXNlci1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHdCQUF3QjtJQXNCbkM7UUFyQlMsZ0JBQVcsR0FBRyxrQkFBa0IsQ0FBQztRQUNqQyxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUM1QixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQiwrQkFBMEIsR0FBRyxFQUFFLENBQUM7UUFhekMsb0JBQWUsR0FBRyxHQUFHLENBQUM7UUFDdEIscUJBQWdCLEdBQUcsU0FBUyxDQUFBO0lBQ1osQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBOUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qiwwa0NBQWlEOzthQUVsRDs7Ozs7MEJBRUUsS0FBSzsrQkFDTCxLQUFLO2dDQUNMLEtBQUs7OEJBQ0wsS0FBSztxQ0FDTCxLQUFLOzRCQUNMLEtBQUs7eUNBQ0wsS0FBSztvQkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO2tCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQWxCTiwrQ0FBMEM7O0lBQzFDLG9EQUErQjs7SUFDL0IscURBQWdDOztJQUNoQyxtREFBOEI7O0lBQzlCLDBEQUFxQzs7SUFDckMsaURBQTRCOztJQUM1Qiw4REFBeUM7O0lBQ3pDLHlDQUFlOztJQUNmLCtDQUFxQjs7SUFDckIsNENBQWtCOztJQUNsQiwrQ0FBcUI7O0lBQ3JCLDZDQUFtQjs7SUFDbkIsOENBQW9COztJQUNwQiw4Q0FBb0I7O0lBQ3BCLDhDQUFvQjs7SUFDcEIsd0NBQWM7O0lBQ2QseUNBQWU7O0lBQ2YsdUNBQWE7O0lBQ2IsMkNBQWlCOztJQUNqQixtREFBc0I7O0lBQ3RCLG9EQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LXVzZXItZGV0YWlscycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtdXNlci1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXVzZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1VXNlckRldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHdpZGdldFRpdGxlID0gJ1VzZXIgSW5mb3JtYXRpb24nO1xyXG4gIEBJbnB1dCgpIHdpZGdldFRpdGxlQ29sb3IgPSAnJztcclxuICBASW5wdXQoKSB3aWRnZXRUaXRsZVdlaWdodCA9ICcnO1xyXG4gIEBJbnB1dCgpIHdpZGdldFRpdGxlU2l6ZSA9ICcnO1xyXG4gIEBJbnB1dCgpIHdpZGdldFRpdGxlY3VzdG9tY2xhc3MgPSAnJztcclxuICBASW5wdXQoKSB3aWRnZXRUaXRsZWlkID0gJyc7XHJcbiAgQElucHV0KCkgc2hpcHBpbmdhZGRyZXNzQ3VzdG9tQ2xhc3MgPSAnJztcclxuICBASW5wdXQoKSBlbWFpbDtcclxuICBASW5wdXQoKSBwaG9uZU51bWJlcjtcclxuICBASW5wdXQoKSBmdWxsTmFtZTtcclxuICBASW5wdXQoKSBmdWxsQWRkcmVzcztcclxuICBASW5wdXQoKSBmaXJzdE5hbWU7XHJcbiAgQElucHV0KCkgc2Vjb25kTmFtZTtcclxuICBASW5wdXQoKSBhZGRyZXNzT25lO1xyXG4gIEBJbnB1dCgpIGFkZHJlc3NUd287XHJcbiAgQElucHV0KCkgY2l0eTtcclxuICBASW5wdXQoKSBzdGF0ZTtcclxuICBASW5wdXQoKSB6aXA7XHJcbiAgQElucHV0KCkgY291bnRyeTtcclxuICBjb21wYW55SWNvblNpemUgPSAxLjE7XHJcbiAgY29tcGFueUljb25Db2xvciA9IFwiI2E3YmYyZVwiXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufSBcclxuIl19