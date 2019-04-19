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
    function () {
    };
    SukuPaymentPortalHelpComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-payment-portal-help',
                    template: "<div class=\"col-12 text-left border d-flex Rectangle-2 mT-8 p-3 bgWhite\">\r\n  <div class=\"col-12 m-3\">\r\n    <span class=\"Pl0 progressTxt mb40\">HELP PAGE</span>\r\n    <div class=\"col-12 text-left p-0 progressTxt mT-5 mb-5\">\r\n      {{helpPage}} <a href=\"{{helpPageHref}}\" target=\"_blank\"> HERE</a>\r\n    </div>\r\n    <div class=\"col mt-3 mb-2 p-0 pt-4\">\r\n      <span class=\"add c-pointer\" id=\"addOwner\" (click)=\"add.emit()\"><i class=\"fa fa-plus-circle pr-3 icon\"></i>Add New\r\n        Beneficial\r\n        Owner</span>\r\n    </div>\r\n  </div>\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wYXltZW50LXBvcnRhbC1oZWxwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXBheW1lbnQtcG9ydGFsLWhlbHAvc3VrdS1wYXltZW50LXBvcnRhbC1oZWxwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQU9FO1FBQ1MsYUFBUSxHQUFHLGlEQUFpRCxDQUFDO1FBQzdELGlCQUFZLEdBQUcsNkdBQTZHLENBQUM7UUFDNUgsUUFBRyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFIbkIsQ0FBQzs7OztJQUlqQixpREFBUTs7O0lBQVI7SUFFQSxDQUFDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsc2xCQUF3RDs7aUJBRXpEOzs7OzsyQkFJRSxLQUFLOytCQUNMLEtBQUs7c0JBQ0wsTUFBTTs7SUFLVCxxQ0FBQztDQUFBLEFBZkQsSUFlQztTQVZZLDhCQUE4Qjs7O0lBR3pDLGtEQUFzRTs7SUFDdEUsc0RBQXNJOztJQUN0SSw2Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtcGF5bWVudC1wb3J0YWwtaGVscCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtcGF5bWVudC1wb3J0YWwtaGVscC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1wYXltZW50LXBvcnRhbC1oZWxwLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VQYXltZW50UG9ydGFsSGVscENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgQElucHV0KCkgaGVscFBhZ2UgPSAnRklORCBBTEwgSU5GT1JNQVRJT04gUkVRVUlSRUQgRk9SIFRIRSBIRUxQIFBBR0UnO1xyXG4gIEBJbnB1dCgpIGhlbHBQYWdlSHJlZiA9ICdodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzExQll2MktWUVNFZlByb3FISHh2b3hFc095eFp3dXFOdTJVWFRRblNRUzE0L2VkaXQjaGVhZGluZz1oLmw3Y2dtNjFudmg3bSc7XHJcbiAgQE91dHB1dCgpIGFkZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxufSJdfQ==