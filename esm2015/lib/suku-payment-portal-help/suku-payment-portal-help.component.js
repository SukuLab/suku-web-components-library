/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuPaymentPortalHelpComponent {
    constructor() {
        this.helpPage = 'FIND ALL INFORMATION REQUIRED FOR THE HELP PAGE';
        this.helpPageHref = 'https://docs.google.com/document/d/11BYv2KVQSEfProqHHxvoxEsOyxZwuqNu2UXTQnSQS14/edit#heading=h.l7cgm61nvh7m';
        this.add = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuPaymentPortalHelpComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-payment-portal-help',
                template: "<div class=\"col-12 text-left border d-flex Rectangle-2 mT-8 p-3 bgWhite\">\n  <div class=\"col-12 m-3\">\n    <span class=\"Pl0 progressTxt mb40\">HELP PAGE</span>\n    <div class=\"col-12 text-left p-0 progressTxt mT-5 mb-5\">\n      {{helpPage}} <a href=\"{{helpPageHref}}\" target=\"_blank\"> HERE</a>\n    </div>\n    <div class=\"col mt-3 mb-2 p-0 pt-4\">\n      <span class=\"add c-pointer\" id=\"addOwner\" (click)=\"add.emit()\"><i class=\"fa fa-plus-circle pr-3 icon\"></i>Add New\n        Beneficial\n        Owner</span>\n    </div>\n  </div>\n</div>",
                styles: [".progressTxt{font-family:'Encode Sans',sans-serif;font-size:15px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#b6b6b6}.bgWhite{background-color:#fff}.mT-5{margin-top:5%}.mT-8{margin-top:8%}.mB-8{margin-bottom:8%}.linkA{cursor:pointer}"]
            }] }
];
/** @nocollapse */
SukuPaymentPortalHelpComponent.ctorParameters = () => [];
SukuPaymentPortalHelpComponent.propDecorators = {
    helpPage: [{ type: Input }],
    helpPageHref: [{ type: Input }],
    add: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuPaymentPortalHelpComponent.prototype.helpPage;
    /** @type {?} */
    SukuPaymentPortalHelpComponent.prototype.helpPageHref;
    /** @type {?} */
    SukuPaymentPortalHelpComponent.prototype.add;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wYXltZW50LXBvcnRhbC1oZWxwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXBheW1lbnQtcG9ydGFsLWhlbHAvc3VrdS1wYXltZW50LXBvcnRhbC1oZWxwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sOEJBQThCO0lBRXpDO1FBQ1MsYUFBUSxHQUFHLGlEQUFpRCxDQUFDO1FBQzdELGlCQUFZLEdBQUcsNkdBQTZHLENBQUM7UUFDNUgsUUFBRyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFIbkIsQ0FBQzs7OztJQUlqQixRQUFRO0lBRVIsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLDhqQkFBd0Q7O2FBRXpEOzs7Ozt1QkFJRSxLQUFLOzJCQUNMLEtBQUs7a0JBQ0wsTUFBTTs7OztJQUZQLGtEQUFzRTs7SUFDdEUsc0RBQXNJOztJQUN0SSw2Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtcGF5bWVudC1wb3J0YWwtaGVscCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXBheW1lbnQtcG9ydGFsLWhlbHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXBheW1lbnQtcG9ydGFsLWhlbHAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1UGF5bWVudFBvcnRhbEhlbHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIEBJbnB1dCgpIGhlbHBQYWdlID0gJ0ZJTkQgQUxMIElORk9STUFUSU9OIFJFUVVJUkVEIEZPUiBUSEUgSEVMUCBQQUdFJztcbiAgQElucHV0KCkgaGVscFBhZ2VIcmVmID0gJ2h0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMTFCWXYyS1ZRU0VmUHJvcUhIeHZveEVzT3l4Wnd1cU51MlVYVFFuU1FTMTQvZWRpdCNoZWFkaW5nPWgubDdjZ202MW52aDdtJztcbiAgQE91dHB1dCgpIGFkZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG59Il19