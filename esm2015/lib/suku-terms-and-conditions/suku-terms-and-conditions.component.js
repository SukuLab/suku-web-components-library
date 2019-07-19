/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
export class SukuTermsAndConditionsComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.termsandcondition = this.fb.group({
            'contractTerms': false
        });
    }
    // action(eventvalue)
    /**
     * @return {?}
     */
    action1() {
        /** @type {?} */
        const data = this.termsandcondition.value.contractTerms;
        this.action.emit(data);
    }
}
SukuTermsAndConditionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-terms-and-conditions',
                template: "<form [formGroup]=\"termsandcondition\">\n  <div class=\" d-flex flex-column py-3\">\n    <div class=\"pb-1\"><b>Contract Terms & Conditions</b></div>\n    <div class=\"d-flex flex-row\">\n      <mat-checkbox color=\"primary\" type=\"checkbox\" #t (change)=\"action1()\" id=\"contractTerms\" \n      formControlName=\"contractTerms\" name=\"contractTerms\">\n      </mat-checkbox>\n      <span class=\"col Spring-Cases txtFlow termsAndConditions pl-2 pr-0\"> I Accept the terms and conditions and authorize\n        this transaction.\n        <a class=\"link ws\" href=\"https://citizensreserve.com/terms\" target=\"_blank\">Terms</a>\n        <a class=\"link ws\" href=\"https://citizensreserve.com/privacy\" target=\"_blank\">Privacy</a>\n      </span>\n    </div>\n  </div>\n</form>",
                styles: [".link{color:#757575;text-decoration:underline;margin-left:5px;margin-right:5px}.ws{white-space:pre}.termsAndConditions{font-family:EncodeSans;font-size:15px;font-weight:500;font-style:normal;font-stretch:normal;letter-spacing:.4px;color:#757575}"]
            }] }
];
/** @nocollapse */
SukuTermsAndConditionsComponent.ctorParameters = () => [
    { type: FormBuilder }
];
SukuTermsAndConditionsComponent.propDecorators = {
    action: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.termsandcondition;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.action;
    /**
     * @type {?}
     * @private
     */
    SukuTermsAndConditionsComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS10ZXJtcy1hbmQtY29uZGl0aW9ucy9zdWt1LXRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFFeEcsT0FBTyxFQUFFLFdBQVcsRUFBaUQsTUFBTSxnQkFBZ0IsQ0FBQztBQU01RixNQUFNLE9BQU8sK0JBQStCOzs7O0lBRzFDLFlBQ1UsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFGaEIsV0FBTSxHQUFJLElBQUksWUFBWSxFQUFFLENBQUM7SUFHbEMsQ0FBQzs7OztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDeEMsZUFBZSxFQUFFLEtBQUs7U0FDdEIsQ0FBQyxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxPQUFPOztjQUNDLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGFBQWE7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyw2eEJBQXlEOzthQUUxRDs7OztZQUxRLFdBQVc7OztxQkFRbEIsTUFBTTs7OztJQUROLDREQUE2Qjs7SUFDOUIsaURBQXVDOzs7OztJQUVwQyw2Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBGb3JtQXJyYXksIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS10ZXJtcy1hbmQtY29uZGl0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS10ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VUZXJtc0FuZENvbmRpdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0ZXJtc2FuZGNvbmRpdGlvbjogRm9ybUdyb3VwO1xuIEBPdXRwdXQoKSBhY3Rpb24gID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRlcm1zYW5kY29uZGl0aW9uID0gdGhpcy5mYi5ncm91cCh7XG5cdFx0XHQnY29udHJhY3RUZXJtcyc6IGZhbHNlXG5cdFx0fSk7XG4gIH1cbiAgLy8gYWN0aW9uKGV2ZW50dmFsdWUpXG4gIGFjdGlvbjEoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMudGVybXNhbmRjb25kaXRpb24udmFsdWUuY29udHJhY3RUZXJtc1xuICAgIHRoaXMuYWN0aW9uLmVtaXQoZGF0YSk7XG4gIH1cblxufVxuIl19