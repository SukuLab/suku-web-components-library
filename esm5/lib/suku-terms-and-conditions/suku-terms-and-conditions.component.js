/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
var SukuTermsAndConditionsComponent = /** @class */ (function () {
    function SukuTermsAndConditionsComponent(fb) {
        this.fb = fb;
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuTermsAndConditionsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.termsandcondition = this.fb.group({
            'contractTerms': false
        });
    };
    // action(eventvalue)
    // action(eventvalue)
    /**
     * @return {?}
     */
    SukuTermsAndConditionsComponent.prototype.action1 = 
    // action(eventvalue)
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var data = this.termsandcondition.value.contractTerms;
        this.action.emit(data);
    };
    SukuTermsAndConditionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-terms-and-conditions',
                    template: "<form [formGroup]=\"termsandcondition\">\n    <div class=\" container-fluid  d-flex flex-column justify-content-center py-3\">\n      <div class=\"text-center \"><b>Contract Terms & Conditions</b></div>\n      <div class=\"d-flex flex-row\">\n        <mat-checkbox color=\"primary\" type=\"checkbox\" #t (change)=\"action1()\" id=\"contractTerms\" \n        formControlName=\"contractTerms\" name=\"contractTerms\">\n        </mat-checkbox>\n        <span class=\"col Spring-Cases txtFlow termsAndConditions\"> I Accept the terms and conditions and authorize\n          this transaction.\n          <a class=\"link ws\" href=\"https://citizensreserve.com/legal\" target=\"_blank\">LEGAL</a>\n          <a class=\"link ws\" href=\"https://citizensreserve.com/privacy\" target=\"_blank\">PRIVACY</a>\n        </span>\n      </div>\n    </div>\n  </form>",
                    styles: [".link{color:#757575;text-decoration:underline;margin-left:5px;margin-right:5px}.ws{white-space:pre}.termsAndConditions{font-family:EncodeSans;font-size:15px;font-weight:500;font-style:normal;font-stretch:normal;letter-spacing:.4px;color:#757575}"]
                }] }
    ];
    /** @nocollapse */
    SukuTermsAndConditionsComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    SukuTermsAndConditionsComponent.propDecorators = {
        action: [{ type: Output }]
    };
    return SukuTermsAndConditionsComponent;
}());
export { SukuTermsAndConditionsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS10ZXJtcy1hbmQtY29uZGl0aW9ucy9zdWt1LXRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFFeEcsT0FBTyxFQUFFLFdBQVcsRUFBaUQsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RjtJQVFFLHlDQUNVLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBRmhCLFdBQU0sR0FBSSxJQUFJLFlBQVksRUFBRSxDQUFDO0lBR2xDLENBQUM7Ozs7SUFFTCxrREFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDeEMsZUFBZSxFQUFFLEtBQUs7U0FDdEIsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUNELHFCQUFxQjs7Ozs7SUFDckIsaURBQU87Ozs7O0lBQVA7O1lBQ1EsSUFBSSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsYUFBYTtRQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLCsxQkFBeUQ7O2lCQUUxRDs7OztnQkFMUSxXQUFXOzs7eUJBUWxCLE1BQU07O0lBZ0JSLHNDQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FsQlksK0JBQStCOzs7SUFDMUMsNERBQTZCOztJQUM5QixpREFBdUM7Ozs7O0lBRXBDLDZDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIEZvcm1BcnJheSwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXRlcm1zLWFuZC1jb25kaXRpb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVRlcm1zQW5kQ29uZGl0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRlcm1zYW5kY29uZGl0aW9uOiBGb3JtR3JvdXA7XG4gQE91dHB1dCgpIGFjdGlvbiAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudGVybXNhbmRjb25kaXRpb24gPSB0aGlzLmZiLmdyb3VwKHtcblx0XHRcdCdjb250cmFjdFRlcm1zJzogZmFsc2Vcblx0XHR9KTtcbiAgfVxuICAvLyBhY3Rpb24oZXZlbnR2YWx1ZSlcbiAgYWN0aW9uMSgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy50ZXJtc2FuZGNvbmRpdGlvbi52YWx1ZS5jb250cmFjdFRlcm1zXG4gICAgdGhpcy5hY3Rpb24uZW1pdChkYXRhKTtcbiAgfVxuXG59XG4iXX0=