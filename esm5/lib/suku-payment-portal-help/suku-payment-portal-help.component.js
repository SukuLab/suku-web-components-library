/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuPaymentPortalHelpComponent = /** @class */ (function () {
    function SukuPaymentPortalHelpComponent() {
        this.helpPage = 'FIND ALL INFORMATION REQUIRED FOR THE HELP PAGE';
        this.helpPageHref = 'https://docs.google.com/document/d/11BYv2KVQSEfProqHHxvoxEsOyxZwuqNu2UXTQnSQS14/edit#heading=h.l7cgm61nvh7m';
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
                    template: "<div class=\"col-12 text-left border d-flex Rectangle-2 mT-8 p-3 bgWhite\">\n  <div class=\"col-12 m-3\" style=\"padding-left: 3%; padding-right: 3%\">\n    <suku-heading>Payments Help Page</suku-heading>\n\n    <b style=\"color: black\">ACH PAYMENTS</b>\n    <div class=\"col-12 text-left p-0 progressTxt mb-5\">\n      <p>The SUKU Platform utilizes a payment provider, Dwolla, to enable ACH Payments. Please reach out to the SUKU\n        help mailbox at support@suku.world if you have any questions regarding payments.</p>\n      <b>What is Dwolla?</b>\n      <p>Dwolla is a powerful payments platform that securely connects to bank or credit union accounts to enable the\n        transfer of money for any individual or organization in the U.S.</p>\n\n      <b>Why is my transaction still pending?</b>\n      <p>A bank or credit union transaction usually takes 3\u20134 business days to complete via the Automated Clearing House\n        network (ACH) used by banks to transfer funds. Please note that transfers take longer to complete if over a\n        weekend or a holiday.</p>\n\n      <b>Why did the transaction fail?</b>\n      <p>Sometimes transactions to or from a bank or credit union can fail. Here are a few reasons why a transaction can\n        fail:</p>\n      <ul>\n        <li>Insufficient funds: There are insufficient funds in the sending bank or credit union account to complete the\n          transaction.</li>\n        <li>Frozen account: A bank or credit union account has been frozen.</li>\n        <li>Other reasons: A bank or credit union rejects the transaction for some other reason.</li>\n      </ul>\n      <p>If a transaction fails, please contact your bank or credit union to check on the status of your account. Then\n        either re-initiate the transaction or ask your financial institution why the transaction may not be processed.\n      </p>\n\n      <b>Why am I being asked for more documentation?</b>\n      <p>If we ask for a photo ID:</p>\n      <p>Additional information is needed to verify your identity. Please upload one of the following forms of\n        identification: An unexpired, current, state-issued driver\u2019s license or identification card OR An unexpired,\n        current U.S. passport</p>\n\n      <p>If we ask for a bank statement:</p>\n      <p>Additional information is needed to verify that you are an authorized signer on your connected bank or credit\n        union account. Please upload a copy of a recent statement.</p>\n\n      <b>How does Dwolla protect customers\u2019 data?</b>\n      <p>At Dwolla, we take protecting data seriously. Dwolla maintains compliance with the SOC 2 framework. This\n        framework provides an independent, third-party assurance that we are taking the appropriate steps to protect our\n        systems and your data. Learn more about Dwolla\u2019s security practices <a\n          href=\"https://www.dwolla.com/security/\">here</a>.</p>\n    </div>\n    <div class=\"col mt-3 mb-2 p-0 pt-4\">\n      <span class=\"add c-pointer\" id=\"addOwner\" (click)=\"add.emit()\"><i class=\"fa fa-plus-circle pr-3 icon\"></i>Add New\n        Beneficial Owner</span>\n    </div>\n  </div>\n</div>",
                    styles: [".progressTxt{font-family:'Encode Sans',sans-serif;font-size:15px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.bgWhite{background-color:#fff}.mT-5{margin-top:5%}.mT-8{margin-top:8%}.mB-8{margin-bottom:8%}.linkA{cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    SukuPaymentPortalHelpComponent.ctorParameters = function () { return []; };
    SukuPaymentPortalHelpComponent.propDecorators = {
        helpPage: [{ type: Input }],
        helpPageHref: [{ type: Input }],
        add: [{ type: Output }]
    };
    return SukuPaymentPortalHelpComponent;
}());
export { SukuPaymentPortalHelpComponent };
if (false) {
    /** @type {?} */
    SukuPaymentPortalHelpComponent.prototype.helpPage;
    /** @type {?} */
    SukuPaymentPortalHelpComponent.prototype.helpPageHref;
    /** @type {?} */
    SukuPaymentPortalHelpComponent.prototype.add;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wYXltZW50LXBvcnRhbC1oZWxwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXBheW1lbnQtcG9ydGFsLWhlbHAvc3VrdS1wYXltZW50LXBvcnRhbC1oZWxwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQU1DO1FBQ1MsYUFBUSxHQUFHLGlEQUFpRCxDQUFDO1FBRXRFLGlCQUFZLEdBQUcsNkdBQTZHLENBQUM7UUFDbkgsUUFBRyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFKcEIsQ0FBQzs7OztJQUtoQixpREFBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkFYYixTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsc29HQUF3RDs7aUJBRXhEOzs7OzsyQkFHQyxLQUFLOytCQUNMLEtBQUs7c0JBRUwsTUFBTTs7SUFFUixxQ0FBQztDQUFBLEFBWkQsSUFZQztTQVBZLDhCQUE4Qjs7O0lBRTFDLGtEQUFzRTs7SUFDdEUsc0RBQzZIOztJQUM3SCw2Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtcGF5bWVudC1wb3J0YWwtaGVscCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXBheW1lbnQtcG9ydGFsLWhlbHAuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1wYXltZW50LXBvcnRhbC1oZWxwLmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VQYXltZW50UG9ydGFsSGVscENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdGNvbnN0cnVjdG9yKCkge31cblx0QElucHV0KCkgaGVscFBhZ2UgPSAnRklORCBBTEwgSU5GT1JNQVRJT04gUkVRVUlSRUQgRk9SIFRIRSBIRUxQIFBBR0UnO1xuXHRASW5wdXQoKVxuXHRoZWxwUGFnZUhyZWYgPSAnaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xMUJZdjJLVlFTRWZQcm9xSEh4dm94RXNPeXhad3VxTnUyVVhUUW5TUVMxNC9lZGl0I2hlYWRpbmc9aC5sN2NnbTYxbnZoN20nO1xuXHRAT3V0cHV0KCkgYWRkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRuZ09uSW5pdCgpIHt9XG59XG4iXX0=