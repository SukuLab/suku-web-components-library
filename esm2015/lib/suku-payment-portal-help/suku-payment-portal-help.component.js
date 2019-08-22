/**
 * @fileoverview added by tsickle
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
                template: "<div class=\"col-12 text-left border d-flex Rectangle-2 p-3 bgWhite\">\r\n  <div class=\"col-12 m-3 pl-2 pr-2\">\r\n    <p class=\"title {{titleCustomClass}}\" [id]=\"titleId\">{{title}}</p>\r\n    <b class=\"text-black {{subTitleCustomClass}}\" [id]=\"subTitleId\">{{subTitle}}</b>\r\n    <div class=\"col-12 text-left p-0 help-Content mb-5 {{descriptionCustomClass}}\" [id]=\"descriptionId\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n    <div class=\"col mt-2 mb-2 p-0 pt-3\">\r\n      <span class=\"add-owner c-pointer {{labelOneCustomClass}}\" [id]=\"labelOneId\" (click)=\"add.emit()\">\r\n        <i class=\"{{icon}} pr-3 icon\" [id]=\"iconId\"></i>{{labelOne}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- old code data -->\r\n<!-- <p>The SUKU Platform utilizes a payment provider, Dwolla, to enable ACH Payments. Please reach out to the SUKU\r\n    help mailbox at support@suku.world if you have any questions regarding payments.</p>\r\n  <b>What is Dwolla?</b>\r\n  <p>Dwolla is a powerful payments platform that securely connects to bank or credit union accounts to enable the\r\n    transfer of money for any individual or organization in the U.S.</p>\r\n\r\n  <b>Why is my transaction still pending?</b>\r\n  <p>A bank or credit union transaction usually takes 3\u20134 business days to complete via the Automated Clearing House\r\n    network (ACH) used by banks to transfer funds. Please note that transfers take longer to complete if over a\r\n    weekend or a holiday.</p>\r\n\r\n  <b>Why did the transaction fail?</b>\r\n  <p>Sometimes transactions to or from a bank or credit union can fail. Here are a few reasons why a transaction can\r\n    fail:</p>\r\n  <ul>\r\n    <li>Insufficient funds: There are insufficient funds in the sending bank or credit union account to complete the\r\n      transaction.</li>\r\n    <li>Frozen account: A bank or credit union account has been frozen.</li>\r\n    <li>Other reasons: A bank or credit union rejects the transaction for some other reason.</li>\r\n  </ul>\r\n  <p>If a transaction fails, please contact your bank or credit union to check on the status of your account. Then\r\n    either re-initiate the transaction or ask your financial institution why the transaction may not be processed.\r\n  </p>\r\n\r\n  <b>Why am I being asked for more documentation?</b>\r\n  <p>If we ask for a photo ID:</p>\r\n  <p>Additional information is needed to verify your identity. Please upload one of the following forms of\r\n    identification: An unexpired, current, state-issued driver\u2019s license or identification card OR An unexpired,\r\n    current U.S. passport</p>\r\n\r\n  <p>If we ask for a bank statement:</p>\r\n  <p>Additional information is needed to verify that you are an authorized signer on your connected bank or credit\r\n    union account. Please upload a copy of a recent statement.</p>\r\n\r\n  <b>How does Dwolla protect customers\u2019 data?</b>\r\n  <p>At Dwolla, we take protecting data seriously. Dwolla maintains compliance with the SOC 2 framework. This\r\n    framework provides an independent, third-party assurance that we are taking the appropriate steps to protect our\r\n    systems and your data. Learn more about Dwolla\u2019s security practices <a\r\n      href=\"https://www.dwolla.com/security/\" target=\"_blank\">here</a>.</p>\r\n       -->",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.help-Content{font-family:var(--suku-secondary-font);font-size:15px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:var(--suku-text-label-one)}.bgWhite{background-color:#fff}.linkA{cursor:pointer}.title{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important;overflow:hidden;text-overflow:ellipsis!important;white-space:nowrap}.add-owner{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important;overflow:hidden;text-overflow:ellipsis!important;white-space:nowrap}.icon{color:var(--suku-primary-color);font-size:var(--suku-font-size-6)}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wYXltZW50LXBvcnRhbC1oZWxwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXBheW1lbnQtcG9ydGFsLWhlbHAvc3VrdS1wYXltZW50LXBvcnRhbC1oZWxwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sOEJBQThCO0lBZXpDO1FBZFMsVUFBSyxHQUFHLG9CQUFvQixDQUFDO1FBQzdCLFlBQU8sR0FBRyxrQkFBa0IsQ0FBQztRQUM3QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDWCxhQUFRLEdBQUcsY0FBYyxDQUFDO1FBQ3ZCLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFDaEIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUN0QyxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQyxTQUFJLEdBQUcsbUJBQW1CLENBQUM7UUFDbEIsV0FBTSxHQUFHLGdCQUFnQixDQUFDO1FBQ3hCLGFBQVEsR0FBRywwQkFBMEIsQ0FBQztRQUNuQyxlQUFVLEdBQUcsdUJBQXVCLENBQUM7UUFDM0Isd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ2hELFFBQUcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFDaEIsUUFBUSxLQUFJLENBQUM7OztZQXJCZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsaXpHQUF3RDs7YUFFekQ7Ozs7O29CQUVFLEtBQUs7c0JBQ0wsS0FBSzsrQkFDTCxLQUFLO3VCQUNMLEtBQUssU0FBQyxXQUFXO3lCQUNqQixLQUFLLFNBQUMsY0FBYztrQ0FDcEIsS0FBSyxTQUFDLHdCQUF3QjtxQ0FDOUIsS0FBSyxTQUFDLDBCQUEwQjs0QkFDaEMsS0FBSyxTQUFDLGdCQUFnQjttQkFDdEIsS0FBSztxQkFDTCxLQUFLLFNBQUMsU0FBUzt1QkFDZixLQUFLLFNBQUMsV0FBVzt5QkFDakIsS0FBSyxTQUFDLGNBQWM7a0NBQ3BCLEtBQUssU0FBQyx3QkFBd0I7a0JBQzlCLE1BQU07Ozs7SUFiUCwrQ0FBc0M7O0lBQ3RDLGlEQUFzQzs7SUFDdEMsMERBQStCOztJQUMvQixrREFBOEM7O0lBQzlDLG9EQUFpRDs7SUFDakQsNkRBQTBEOztJQUMxRCxnRUFBK0Q7O0lBQy9ELHVEQUE0Qzs7SUFDNUMsOENBQW9DOztJQUNwQyxnREFBNEM7O0lBQzVDLGtEQUEwRDs7SUFDMUQsb0RBQTREOztJQUM1RCw2REFBMEQ7O0lBQzFELDZDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1wYXltZW50LXBvcnRhbC1oZWxwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1wYXltZW50LXBvcnRhbC1oZWxwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXBheW1lbnQtcG9ydGFsLWhlbHAuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdVBheW1lbnRQb3J0YWxIZWxwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB0aXRsZSA9ICdQYXltZW50cyBIZWxwIFBhZ2UnO1xyXG4gIEBJbnB1dCgpIHRpdGxlSWQgPSAncGF5bWVudHNIZWxwUGFnZSc7XHJcbiAgQElucHV0KCkgdGl0bGVDdXN0b21DbGFzcyA9ICcnO1xyXG4gIEBJbnB1dCgnc3ViLXRpdGxlJykgc3ViVGl0bGUgPSAnQUNIIFBBWU1FTlRTJztcclxuICBASW5wdXQoJ3N1Yi10aXRsZS1pZCcpIHN1YlRpdGxlSWQgPSAnYWNoUGF5bWVudCc7XHJcbiAgQElucHV0KCdzdWItdGl0bGUtY3VzdG9tLWNsYXNzJykgc3ViVGl0bGVDdXN0b21DbGFzcyA9ICcnO1xyXG4gIEBJbnB1dCgnZGVzY3JpcHRpb24tY3VzdG9tLWNsYXNzJykgZGVzY3JpcHRpb25DdXN0b21DbGFzcyA9ICcnO1xyXG4gIEBJbnB1dCgnZGVzY3JpcHRpb24tSWQnKSBkZXNjcmlwdGlvbklkID0gJyc7XHJcbiAgQElucHV0KCkgaWNvbiA9ICdmYSBmYS1wbHVzLWNpcmNsZSc7XHJcbiAgQElucHV0KCdpY29uLWlkJykgaWNvbklkID0gJ2ZhLXBsdXMtY2lyY2xlJztcclxuICBASW5wdXQoJ2xhYmVsLW9uZScpIGxhYmVsT25lID0gJ0FkZCBOZXcgQmVuZWZpY2lhbCBPd25lcic7XHJcbiAgQElucHV0KCdsYWJlbC1vbmUtaWQnKSBsYWJlbE9uZUlkID0gJ2FkZE5ld0JlbmVmaWNpYWxPd25lcic7XHJcbiAgQElucHV0KCdsYWJlbC1vbmUtY3VzdG9tLWNsYXNzJykgbGFiZWxPbmVDdXN0b21DbGFzcyA9ICcnO1xyXG4gIEBPdXRwdXQoKSBhZGQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG4gIG5nT25Jbml0KCkge31cclxufVxyXG4iXX0=