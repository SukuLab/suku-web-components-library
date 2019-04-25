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
                    template: "<form [formGroup]=\"termsandcondition\">\r\n  <div class=\" d-flex flex-column py-3\">\r\n    <div class=\"pb-1\"><b>Contract Terms & Conditions</b></div>\r\n    <div class=\"d-flex flex-row\">\r\n      <mat-checkbox color=\"primary\" type=\"checkbox\" #t (change)=\"action1()\" id=\"contractTerms\" \r\n      formControlName=\"contractTerms\" name=\"contractTerms\">\r\n      </mat-checkbox>\r\n      <span class=\"col Spring-Cases txtFlow termsAndConditions pl-2 pr-0\"> I Accept the terms and conditions and authorize\r\n        this transaction.\r\n        <a class=\"link ws\" href=\"https://citizensreserve.com/terms\" target=\"_blank\">Terms</a>\r\n        <a class=\"link ws\" href=\"https://citizensreserve.com/privacy\" target=\"_blank\">Privacy</a>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</form>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS10ZXJtcy1hbmQtY29uZGl0aW9ucy9zdWt1LXRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFFeEcsT0FBTyxFQUFFLFdBQVcsRUFBaUQsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RjtJQVFFLHlDQUNVLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBRmhCLFdBQU0sR0FBSSxJQUFJLFlBQVksRUFBRSxDQUFDO0lBR2xDLENBQUM7Ozs7SUFFTCxrREFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDeEMsZUFBZSxFQUFFLEtBQUs7U0FDdEIsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUNELHFCQUFxQjs7Ozs7SUFDckIsaURBQU87Ozs7O0lBQVA7O1lBQ1EsSUFBSSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsYUFBYTtRQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLHl6QkFBeUQ7O2lCQUUxRDs7OztnQkFMUSxXQUFXOzs7eUJBUWxCLE1BQU07O0lBZ0JSLHNDQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FsQlksK0JBQStCOzs7SUFDMUMsNERBQTZCOztJQUM5QixpREFBdUM7Ozs7O0lBRXBDLDZDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBGb3JtQXJyYXksIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtdGVybXMtYW5kLWNvbmRpdGlvbnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VUZXJtc0FuZENvbmRpdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHRlcm1zYW5kY29uZGl0aW9uOiBGb3JtR3JvdXA7XHJcbiBAT3V0cHV0KCkgYWN0aW9uICA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50ZXJtc2FuZGNvbmRpdGlvbiA9IHRoaXMuZmIuZ3JvdXAoe1xyXG5cdFx0XHQnY29udHJhY3RUZXJtcyc6IGZhbHNlXHJcblx0XHR9KTtcclxuICB9XHJcbiAgLy8gYWN0aW9uKGV2ZW50dmFsdWUpXHJcbiAgYWN0aW9uMSgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnRlcm1zYW5kY29uZGl0aW9uLnZhbHVlLmNvbnRyYWN0VGVybXNcclxuICAgIHRoaXMuYWN0aW9uLmVtaXQoZGF0YSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=