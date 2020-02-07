/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-payment-portal-help/suku-payment-portal-help.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuPaymentPortalHelpComponent {
    constructor() {
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
    ngOnInit() { }
}
SukuPaymentPortalHelpComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-payment-portal-help',
                template: "<div class=\"col-12 text-left border d-flex Rectangle-2 p-3 bgWhite\">\n  <div class=\"col-12 m-3 pl-2 pr-2\">\n    <p class=\"title {{titleCustomClass}}\" [id]=\"titleId\">{{title}}</p>\n    <b class=\"text-black {{subTitleCustomClass}}\" [id]=\"subTitleId\">{{subTitle}}</b>\n    <div class=\"col-12 text-left p-0 help-Content mb-5 {{descriptionCustomClass}}\" [id]=\"descriptionId\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"col mt-2 mb-2 p-0 pt-3\">\n      <span class=\"add-owner c-pointer {{labelOneCustomClass}}\" [id]=\"labelOneId\" (click)=\"add.emit()\">\n        <i class=\"{{icon}} pr-3 icon\" [id]=\"iconId\"></i>{{labelOne}}</span>\n    </div>\n  </div>\n</div>\n\n\n<!-- old code data -->\n<!-- <p>The SUKU Platform utilizes a payment provider, Dwolla, to enable ACH Payments. Please reach out to the SUKU\n    help mailbox at support@suku.world if you have any questions regarding payments.</p>\n  <b>What is Dwolla?</b>\n  <p>Dwolla is a powerful payments platform that securely connects to bank or credit union accounts to enable the\n    transfer of money for any individual or organization in the U.S.</p>\n\n  <b>Why is my transaction still pending?</b>\n  <p>A bank or credit union transaction usually takes 3\u20134 business days to complete via the Automated Clearing House\n    network (ACH) used by banks to transfer funds. Please note that transfers take longer to complete if over a\n    weekend or a holiday.</p>\n\n  <b>Why did the transaction fail?</b>\n  <p>Sometimes transactions to or from a bank or credit union can fail. Here are a few reasons why a transaction can\n    fail:</p>\n  <ul>\n    <li>Insufficient funds: There are insufficient funds in the sending bank or credit union account to complete the\n      transaction.</li>\n    <li>Frozen account: A bank or credit union account has been frozen.</li>\n    <li>Other reasons: A bank or credit union rejects the transaction for some other reason.</li>\n  </ul>\n  <p>If a transaction fails, please contact your bank or credit union to check on the status of your account. Then\n    either re-initiate the transaction or ask your financial institution why the transaction may not be processed.\n  </p>\n\n  <b>Why am I being asked for more documentation?</b>\n  <p>If we ask for a photo ID:</p>\n  <p>Additional information is needed to verify your identity. Please upload one of the following forms of\n    identification: An unexpired, current, state-issued driver\u2019s license or identification card OR An unexpired,\n    current U.S. passport</p>\n\n  <p>If we ask for a bank statement:</p>\n  <p>Additional information is needed to verify that you are an authorized signer on your connected bank or credit\n    union account. Please upload a copy of a recent statement.</p>\n\n  <b>How does Dwolla protect customers\u2019 data?</b>\n  <p>At Dwolla, we take protecting data seriously. Dwolla maintains compliance with the SOC 2 framework. This\n    framework provides an independent, third-party assurance that we are taking the appropriate steps to protect our\n    systems and your data. Learn more about Dwolla\u2019s security practices <a\n      href=\"https://www.dwolla.com/security/\" target=\"_blank\">here</a>.</p>\n       -->",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.help-Content{font-family:var(--suku-secondary-font);font-size:15px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--suku-text-label-one)}.bgWhite{background-color:#fff}.linkA{cursor:pointer}.title{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important;overflow:hidden;text-overflow:ellipsis!important;white-space:nowrap}.add-owner{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important;overflow:hidden;text-overflow:ellipsis!important;white-space:nowrap}.icon{color:var(--suku-primary-color);font-size:var(--suku-font-size-6)}"]
            }] }
];
/** @nocollapse */
SukuPaymentPortalHelpComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wYXltZW50LXBvcnRhbC1oZWxwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXBheW1lbnQtcG9ydGFsLWhlbHAvc3VrdS1wYXltZW50LXBvcnRhbC1oZWxwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0UsTUFBTSxPQUFPLDhCQUE4QjtJQWV6QztRQWRTLFVBQUssR0FBRyxvQkFBb0IsQ0FBQztRQUM3QixZQUFPLEdBQUcsa0JBQWtCLENBQUM7UUFDN0IscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ1gsYUFBUSxHQUFHLGNBQWMsQ0FBQztRQUN2QixlQUFVLEdBQUcsWUFBWSxDQUFDO1FBQ2hCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUN2QiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDdEMsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkMsU0FBSSxHQUFHLG1CQUFtQixDQUFDO1FBQ2xCLFdBQU0sR0FBRyxnQkFBZ0IsQ0FBQztRQUN4QixhQUFRLEdBQUcsMEJBQTBCLENBQUM7UUFDbkMsZUFBVSxHQUFHLHVCQUF1QixDQUFDO1FBQzNCLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUNoRCxRQUFHLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7O0lBQ2hCLFFBQVEsS0FBSSxDQUFDOzs7WUFyQmQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLG1zR0FBd0Q7O2FBRXpEOzs7OztvQkFFRSxLQUFLO3NCQUNMLEtBQUs7K0JBQ0wsS0FBSzt1QkFDTCxLQUFLLFNBQUMsV0FBVzt5QkFDakIsS0FBSyxTQUFDLGNBQWM7a0NBQ3BCLEtBQUssU0FBQyx3QkFBd0I7cUNBQzlCLEtBQUssU0FBQywwQkFBMEI7NEJBQ2hDLEtBQUssU0FBQyxnQkFBZ0I7bUJBQ3RCLEtBQUs7cUJBQ0wsS0FBSyxTQUFDLFNBQVM7dUJBQ2YsS0FBSyxTQUFDLFdBQVc7eUJBQ2pCLEtBQUssU0FBQyxjQUFjO2tDQUNwQixLQUFLLFNBQUMsd0JBQXdCO2tCQUM5QixNQUFNOzs7O0lBYlAsK0NBQXNDOztJQUN0QyxpREFBc0M7O0lBQ3RDLDBEQUErQjs7SUFDL0Isa0RBQThDOztJQUM5QyxvREFBaUQ7O0lBQ2pELDZEQUEwRDs7SUFDMUQsZ0VBQStEOztJQUMvRCx1REFBNEM7O0lBQzVDLDhDQUFvQzs7SUFDcEMsZ0RBQTRDOztJQUM1QyxrREFBMEQ7O0lBQzFELG9EQUE0RDs7SUFDNUQsNkRBQTBEOztJQUMxRCw2Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtcGF5bWVudC1wb3J0YWwtaGVscCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXBheW1lbnQtcG9ydGFsLWhlbHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXBheW1lbnQtcG9ydGFsLWhlbHAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1UGF5bWVudFBvcnRhbEhlbHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aXRsZSA9ICdQYXltZW50cyBIZWxwIFBhZ2UnO1xuICBASW5wdXQoKSB0aXRsZUlkID0gJ3BheW1lbnRzSGVscFBhZ2UnO1xuICBASW5wdXQoKSB0aXRsZUN1c3RvbUNsYXNzID0gJyc7XG4gIEBJbnB1dCgnc3ViLXRpdGxlJykgc3ViVGl0bGUgPSAnQUNIIFBBWU1FTlRTJztcbiAgQElucHV0KCdzdWItdGl0bGUtaWQnKSBzdWJUaXRsZUlkID0gJ2FjaFBheW1lbnQnO1xuICBASW5wdXQoJ3N1Yi10aXRsZS1jdXN0b20tY2xhc3MnKSBzdWJUaXRsZUN1c3RvbUNsYXNzID0gJyc7XG4gIEBJbnB1dCgnZGVzY3JpcHRpb24tY3VzdG9tLWNsYXNzJykgZGVzY3JpcHRpb25DdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoJ2Rlc2NyaXB0aW9uLUlkJykgZGVzY3JpcHRpb25JZCA9ICcnO1xuICBASW5wdXQoKSBpY29uID0gJ2ZhIGZhLXBsdXMtY2lyY2xlJztcbiAgQElucHV0KCdpY29uLWlkJykgaWNvbklkID0gJ2ZhLXBsdXMtY2lyY2xlJztcbiAgQElucHV0KCdsYWJlbC1vbmUnKSBsYWJlbE9uZSA9ICdBZGQgTmV3IEJlbmVmaWNpYWwgT3duZXInO1xuICBASW5wdXQoJ2xhYmVsLW9uZS1pZCcpIGxhYmVsT25lSWQgPSAnYWRkTmV3QmVuZWZpY2lhbE93bmVyJztcbiAgQElucHV0KCdsYWJlbC1vbmUtY3VzdG9tLWNsYXNzJykgbGFiZWxPbmVDdXN0b21DbGFzcyA9ICcnO1xuICBAT3V0cHV0KCkgYWRkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==