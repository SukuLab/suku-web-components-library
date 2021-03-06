/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-payment-portal-help/suku-payment-portal-help.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuPaymentPortalHelpComponent = /** @class */ (function () {
    function SukuPaymentPortalHelpComponent() {
        this.title = 'Payments Help Page';
        this.titleId = 'paymentsHelpPage';
        this.titleCustomClass = '';
        this.subTitle = 'ACH PAYMENTS';
        this.subTitleId = 'achPayment';
        this.subTitleCustomClass = '';
        this.descriptionCustomClass = '';
        this.descriptionId = '';
        this.icon = 'fa fa-plus-circle';
        this.iconId = 'fa-plus-circle';
        this.labelOne = 'Add New Beneficial Owner';
        this.labelOneId = 'addNewBeneficialOwner';
        this.labelOneCustomClass = '';
        this.add = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuPaymentPortalHelpComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuPaymentPortalHelpComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-payment-portal-help',
                    template: "<div class=\"col-12 text-left border d-flex Rectangle-2 p-3 bgWhite\">\n  <div class=\"col-12 m-3 pl-2 pr-2\">\n    <p class=\"title {{titleCustomClass}}\" [id]=\"titleId\">{{title}}</p>\n    <b class=\"text-black {{subTitleCustomClass}}\" [id]=\"subTitleId\">{{subTitle}}</b>\n    <div class=\"col-12 text-left p-0 help-Content mb-5 {{descriptionCustomClass}}\" [id]=\"descriptionId\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"col mt-2 mb-2 p-0 pt-3\">\n      <span class=\"add-owner c-pointer {{labelOneCustomClass}}\" [id]=\"labelOneId\" (click)=\"add.emit()\">\n        <i class=\"{{icon}} pr-3 icon\" [id]=\"iconId\"></i>{{labelOne}}</span>\n    </div>\n  </div>\n</div>\n\n\n<!-- old code data -->\n<!-- <p>The SUKU Platform utilizes a payment provider, Dwolla, to enable ACH Payments. Please reach out to the SUKU\n    help mailbox at support@suku.world if you have any questions regarding payments.</p>\n  <b>What is Dwolla?</b>\n  <p>Dwolla is a powerful payments platform that securely connects to bank or credit union accounts to enable the\n    transfer of money for any individual or organization in the U.S.</p>\n\n  <b>Why is my transaction still pending?</b>\n  <p>A bank or credit union transaction usually takes 3\u20134 business days to complete via the Automated Clearing House\n    network (ACH) used by banks to transfer funds. Please note that transfers take longer to complete if over a\n    weekend or a holiday.</p>\n\n  <b>Why did the transaction fail?</b>\n  <p>Sometimes transactions to or from a bank or credit union can fail. Here are a few reasons why a transaction can\n    fail:</p>\n  <ul>\n    <li>Insufficient funds: There are insufficient funds in the sending bank or credit union account to complete the\n      transaction.</li>\n    <li>Frozen account: A bank or credit union account has been frozen.</li>\n    <li>Other reasons: A bank or credit union rejects the transaction for some other reason.</li>\n  </ul>\n  <p>If a transaction fails, please contact your bank or credit union to check on the status of your account. Then\n    either re-initiate the transaction or ask your financial institution why the transaction may not be processed.\n  </p>\n\n  <b>Why am I being asked for more documentation?</b>\n  <p>If we ask for a photo ID:</p>\n  <p>Additional information is needed to verify your identity. Please upload one of the following forms of\n    identification: An unexpired, current, state-issued driver\u2019s license or identification card OR An unexpired,\n    current U.S. passport</p>\n\n  <p>If we ask for a bank statement:</p>\n  <p>Additional information is needed to verify that you are an authorized signer on your connected bank or credit\n    union account. Please upload a copy of a recent statement.</p>\n\n  <b>How does Dwolla protect customers\u2019 data?</b>\n  <p>At Dwolla, we take protecting data seriously. Dwolla maintains compliance with the SOC 2 framework. This\n    framework provides an independent, third-party assurance that we are taking the appropriate steps to protect our\n    systems and your data. Learn more about Dwolla\u2019s security practices <a\n      href=\"https://www.dwolla.com/security/\" target=\"_blank\">here</a>.</p>\n       -->",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.help-Content{font-family:var(--suku-secondary-font);font-size:15px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--suku-text-label-one)}.bgWhite{background-color:#fff}.linkA{cursor:pointer}.title{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important;overflow:hidden;text-overflow:ellipsis!important;white-space:nowrap}.add-owner{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important;overflow:hidden;text-overflow:ellipsis!important;white-space:nowrap}.icon{color:var(--suku-primary-color);font-size:var(--suku-font-size-6)}"]
                }] }
    ];
    /** @nocollapse */
    SukuPaymentPortalHelpComponent.ctorParameters = function () { return []; };
    SukuPaymentPortalHelpComponent.propDecorators = {
        title: [{ type: Input }],
        titleId: [{ type: Input }],
        titleCustomClass: [{ type: Input }],
        subTitle: [{ type: Input, args: ['sub-title',] }],
        subTitleId: [{ type: Input, args: ['sub-title-id',] }],
        subTitleCustomClass: [{ type: Input, args: ['sub-title-custom-class',] }],
        descriptionCustomClass: [{ type: Input, args: ['description-custom-class',] }],
        descriptionId: [{ type: Input, args: ['description-Id',] }],
        icon: [{ type: Input }],
        iconId: [{ type: Input, args: ['icon-id',] }],
        labelOne: [{ type: Input, args: ['label-one',] }],
        labelOneId: [{ type: Input, args: ['label-one-id',] }],
        labelOneCustomClass: [{ type: Input, args: ['label-one-custom-class',] }],
        add: [{ type: Output }]
    };
    return SukuPaymentPortalHelpComponent;
}());
export { SukuPaymentPortalHelpComponent };
if (false) {
    /** @type {?} */
    SukuPaymentPortalHelpComponent.prototype.title;
    /** @type {?} */
    SukuPaymentPortalHelpComponent.prototype.titleId;
    /** @type {?} */
    SukuPaymentPortalHelpComponent.prototype.titleCustomClass;
    /** @type {?} */
    SukuPaymentPortalHelpComponent.prototype.subTitle;
    /** @type {?} */
    SukuPaymentPortalHelpComponent.prototype.subTitleId;
    /** @type {?} */
    SukuPaymentPortalHelpComponent.prototype.subTitleCustomClass;
    /** @type {?} */
    SukuPaymentPortalHelpComponent.prototype.descriptionCustomClass;
    /** @type {?} */
    SukuPaymentPortalHelpComponent.prototype.descriptionId;
    /** @type {?} */
    SukuPaymentPortalHelpComponent.prototype.icon;
    /** @type {?} */
    SukuPaymentPortalHelpComponent.prototype.iconId;
    /** @type {?} */
    SukuPaymentPortalHelpComponent.prototype.labelOne;
    /** @type {?} */
    SukuPaymentPortalHelpComponent.prototype.labelOneId;
    /** @type {?} */
    SukuPaymentPortalHelpComponent.prototype.labelOneCustomClass;
    /** @type {?} */
    SukuPaymentPortalHelpComponent.prototype.add;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wYXltZW50LXBvcnRhbC1oZWxwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXBheW1lbnQtcG9ydGFsLWhlbHAvc3VrdS1wYXltZW50LXBvcnRhbC1oZWxwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0U7SUFvQkU7UUFkUyxVQUFLLEdBQUcsb0JBQW9CLENBQUM7UUFDN0IsWUFBTyxHQUFHLGtCQUFrQixDQUFDO1FBQzdCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUNYLGFBQVEsR0FBRyxjQUFjLENBQUM7UUFDdkIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUNoQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQ3RDLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25DLFNBQUksR0FBRyxtQkFBbUIsQ0FBQztRQUNsQixXQUFNLEdBQUcsZ0JBQWdCLENBQUM7UUFDeEIsYUFBUSxHQUFHLDBCQUEwQixDQUFDO1FBQ25DLGVBQVUsR0FBRyx1QkFBdUIsQ0FBQztRQUMzQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDaEQsUUFBRyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUNoQixpREFBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkFyQmQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLG1zR0FBd0Q7O2lCQUV6RDs7Ozs7d0JBRUUsS0FBSzswQkFDTCxLQUFLO21DQUNMLEtBQUs7MkJBQ0wsS0FBSyxTQUFDLFdBQVc7NkJBQ2pCLEtBQUssU0FBQyxjQUFjO3NDQUNwQixLQUFLLFNBQUMsd0JBQXdCO3lDQUM5QixLQUFLLFNBQUMsMEJBQTBCO2dDQUNoQyxLQUFLLFNBQUMsZ0JBQWdCO3VCQUN0QixLQUFLO3lCQUNMLEtBQUssU0FBQyxTQUFTOzJCQUNmLEtBQUssU0FBQyxXQUFXOzZCQUNqQixLQUFLLFNBQUMsY0FBYztzQ0FDcEIsS0FBSyxTQUFDLHdCQUF3QjtzQkFDOUIsTUFBTTs7SUFHVCxxQ0FBQztDQUFBLEFBdEJELElBc0JDO1NBakJZLDhCQUE4Qjs7O0lBQ3pDLCtDQUFzQzs7SUFDdEMsaURBQXNDOztJQUN0QywwREFBK0I7O0lBQy9CLGtEQUE4Qzs7SUFDOUMsb0RBQWlEOztJQUNqRCw2REFBMEQ7O0lBQzFELGdFQUErRDs7SUFDL0QsdURBQTRDOztJQUM1Qyw4Q0FBb0M7O0lBQ3BDLGdEQUE0Qzs7SUFDNUMsa0RBQTBEOztJQUMxRCxvREFBNEQ7O0lBQzVELDZEQUEwRDs7SUFDMUQsNkNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXBheW1lbnQtcG9ydGFsLWhlbHAnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1wYXltZW50LXBvcnRhbC1oZWxwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1wYXltZW50LXBvcnRhbC1oZWxwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVBheW1lbnRQb3J0YWxIZWxwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGl0bGUgPSAnUGF5bWVudHMgSGVscCBQYWdlJztcbiAgQElucHV0KCkgdGl0bGVJZCA9ICdwYXltZW50c0hlbHBQYWdlJztcbiAgQElucHV0KCkgdGl0bGVDdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoJ3N1Yi10aXRsZScpIHN1YlRpdGxlID0gJ0FDSCBQQVlNRU5UUyc7XG4gIEBJbnB1dCgnc3ViLXRpdGxlLWlkJykgc3ViVGl0bGVJZCA9ICdhY2hQYXltZW50JztcbiAgQElucHV0KCdzdWItdGl0bGUtY3VzdG9tLWNsYXNzJykgc3ViVGl0bGVDdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoJ2Rlc2NyaXB0aW9uLWN1c3RvbS1jbGFzcycpIGRlc2NyaXB0aW9uQ3VzdG9tQ2xhc3MgPSAnJztcbiAgQElucHV0KCdkZXNjcmlwdGlvbi1JZCcpIGRlc2NyaXB0aW9uSWQgPSAnJztcbiAgQElucHV0KCkgaWNvbiA9ICdmYSBmYS1wbHVzLWNpcmNsZSc7XG4gIEBJbnB1dCgnaWNvbi1pZCcpIGljb25JZCA9ICdmYS1wbHVzLWNpcmNsZSc7XG4gIEBJbnB1dCgnbGFiZWwtb25lJykgbGFiZWxPbmUgPSAnQWRkIE5ldyBCZW5lZmljaWFsIE93bmVyJztcbiAgQElucHV0KCdsYWJlbC1vbmUtaWQnKSBsYWJlbE9uZUlkID0gJ2FkZE5ld0JlbmVmaWNpYWxPd25lcic7XG4gIEBJbnB1dCgnbGFiZWwtb25lLWN1c3RvbS1jbGFzcycpIGxhYmVsT25lQ3VzdG9tQ2xhc3MgPSAnJztcbiAgQE91dHB1dCgpIGFkZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoKSB7fVxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=