/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
export class SukuLoginComponent {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
        // _enableRequiredValidator = new Subject();
        this._enableRequiredValidator = new BehaviorSubject('');
        this.color = 'primary';
        this.usernameControl = new FormControl('');
        this.placeholderOne = 'Username';
        this.userNameId = 'Username';
        this.passwordControl = new FormControl('');
        this.placeholderTwo = 'Password';
        this.passwordId = 'password';
        this.enableUserIcon = true;
        this.errorMessageOne = 'cannot be blank.';
        this.errorMessageTwo = 'cannot be blank.';
        this.errorMessageThree = '';
        this.errorMessageFour = '';
        this.snackbarMessage = 'Invalid Input.';
        this.formSubmit = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get enableRequiredValidator() {
        console.log('_enableRequiredValidator', this._enableRequiredValidator);
        return this._enableRequiredValidator.value;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set enableRequiredValidator(val) {
        console.log('enableRequiredValidator', val);
        if (val === 'true') {
            /** @type {?} */
            const data = val.toString();
            this._enableRequiredValidator.next(data);
            this.usernameControl.setValidators(Validators.required);
            this.usernameControl.updateValueAndValidity();
            this.passwordControl.setValidators(Validators.required);
            this.passwordControl.updateValueAndValidity();
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set value(val) {
        console.log('val', val);
        if (val.username && val.password) {
            this.usernameControl.patchValue(val.username);
            this.passwordControl.patchValue(val.password);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} e
     * @return {?}
     */
    remeberMeAction(e) {
        this.remeberMeValue = e;
    }
    /**
     * @return {?}
     */
    onSubmit() {
        if (this._enableRequiredValidator.value == 'true') {
            if (this.usernameControl.value && this.passwordControl.value) {
                /** @type {?} */
                const data = {
                    username: this.usernameControl.value,
                    password: this.passwordControl.value,
                    rememberMe: this.remeberMeValue
                };
                console.log(data);
                this.formSubmit.emit(data);
            }
            else {
                this.snackbar(this.snackbarMessage);
            }
        }
        else {
            /** @type {?} */
            const data = {
                username: this.usernameControl.value,
                password: this.passwordControl.value,
                rememberMe: this.remeberMeValue
            };
            console.log(data);
            this.formSubmit.emit(data);
        }
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    snackbar(msg) {
        this.snackBar.open(msg, 'close', {
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            duration: 3500
        });
    }
}
SukuLoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-login',
                template: "<form autocomplete=\"off\">\n  <div class=\"col\">\n    <div class=\"col-sm-12\">\n      <div class=\"form-group col pl-lg-5 pr-lg-5 p-xs-0\">\n        <div class=\" col-xs-12 col-sm-12 pt-3 pl-lg-5 pr-lg-5 p-xs-0\">\n          <div class=\"col pl-lg-5 pr-lg-5 p-xs-0\">\n            <div class=\"col pl-lg-4 pr-lg-4 p-xs-0\">\n              <div class=\"col-xs-12 f14 pt-lg-5 pb-lg-3 p-0 col-sm-12 p-xs-0\">\n                <div class=\"col text-center\">\n                  <p class=\"login\">Login</p>\n                </div>\n                <div class=\"col pl-lg-1 pr-lg-1\">\n                  <div\n                    class=\"col-sm-6 pl-lg-4 pr-lg-4 pl-md-5 pr-md-5 pt-4 pb-4 col-xs-12 offset-sm-3 Rectangle-2 mb-9\">\n                    <div class=\"col pt-2\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-10 col-md-12 col-sm-12 col-12 pl-lg-4 pr-lg-4 p-md-0\">\n                          <mat-form-field class=\"col-lg-12 col-12\" id=\"UsernameIcon\">\n                            <span matPrefix class=\"mr-2\">\n                              <mat-icon>account_circle</mat-icon>\n                            </span>\n                            <input matInput matInput autofocus type=\"text\" [id]=\"userNameId\"\n                              [placeholder]=\"placeholderOne\" [formControl]=\"usernameControl\" name=\"usernameControl\">\n                            <mat-error *ngIf=\"usernameControl.hasError('required')\">\n                              {{errorMessageOne}}\n                            </mat-error>\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-2 col-md-4 d-flex align-items-center\"></div>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-10 col-md-12 col-sm-12 col-xs-12 pl-lg-4 pr-lg-4 p-md-0\">\n                          <mat-form-field class=\"col-lg-12 col-12\" id=\"lockIcon\">\n                            <span matPrefix class=\"mr-2\">\n                              <mat-icon>lock</mat-icon>\n                            </span>\n                            <input matInput autocomplete=\"off\" [placeholder]=\"placeholderTwo\" type=\"password\"\n                              [type]=\"hide ? 'text' : 'password'\" [id]=\"passwordId\" [formControl]=\"passwordControl\"\n                              name=\"passwordControl\">\n                            <mat-error *ngIf=\"passwordControl.hasError('required')\">\n                              {{errorMessageTwo}}\n                            </mat-error>\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-2 col-md-12 d-flex align-items-center text-xs-item-center pl-0 pr-3\">\n                          <div class=\"row c-pointer\" (click)=\"hide =! hide\">\n                            <mat-icon class=\"toggle-password\">\n                              {{hide ? 'visibility_off' : 'visibility'}}</mat-icon><span\n                              class=\"pl-2 view\">{{hide ? 'Hide' : 'View'}}</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-12 pt-3\">\n                      <div class=\"row\">\n                        <div class=\"col-12 col-sm-10 offset-sm-1 mb-1\">\n                          <div class=\"row\">\n                            <div class=\"text-center col-sm-12 col-xs-6 pt-3 pb-3\">\n                              <suku-checkbox checkbox-id=\"remeberMe\" [checked]=\"remeberMeChecked\"\n                                (action)=\"remeberMeAction($event)\">Remember Me?</suku-checkbox>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"col\">\n                        <div class=\"col-lg-8 col-12 pb-3 justify-content-center m-auto\">\n                          <suku-info-button custom-class=\"w-100\" (click)=\"onSubmit();\" id=\"accountLogin\">LOGIN\n                          </suku-info-button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>",
                styles: [".Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.border-top{border-top:.51px solid #676767ba!important}.help{font-size:18px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;text-align:right;color:#fff}.login{font-family:Poppins-light,sans-serif!important;font-size:30px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#fff}.view{font-family:'Encode Sans',sans-serif}.remeberMe{font-family:Poppins,sans-serif;color:rgba(117,117,117,.37)!important;font-weight:500;font-size:14px;letter-spacing:0}.suku-logo{width:100px;height:60px;-o-object-fit:contain;object-fit:contain}.hr{width:85%;opacity:.1;border:.91px solid #979797;margin-top:.75rem!important}@media (max-width:768px){.p-xs-0{padding:0}.text-xs-item-center{justify-content:center}}.c-pointer{cursor:pointer}"]
            }] }
];
/** @nocollapse */
SukuLoginComponent.ctorParameters = () => [
    { type: MatSnackBar }
];
SukuLoginComponent.propDecorators = {
    color: [{ type: Input }],
    placeholderOne: [{ type: Input, args: ['placeholder-one',] }],
    userNameId: [{ type: Input, args: ['user-name-id',] }],
    placeholderTwo: [{ type: Input, args: ['placeholder-two',] }],
    passwordId: [{ type: Input, args: ['password-id',] }],
    customClass: [{ type: Input, args: ['custom-class',] }],
    enableUserIcon: [{ type: Input, args: ['enable-user-icon',] }],
    errorMessageOne: [{ type: Input, args: ['error-message-one',] }],
    errorMessageTwo: [{ type: Input, args: ['error-message-two',] }],
    errorMessageThree: [{ type: Input, args: ['error-message-three',] }],
    errorMessageFour: [{ type: Input, args: ['error-message-four',] }],
    remeberMeChecked: [{ type: Input, args: ['remeberMeChecked',] }],
    snackbarMessage: [{ type: Input, args: ['snackbar-message',] }],
    enableRequiredValidator: [{ type: Input, args: ['enable-required-validator',] }],
    value: [{ type: Input }],
    formSubmit: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuLoginComponent.prototype.hide;
    /** @type {?} */
    SukuLoginComponent.prototype.remeberMeValue;
    /** @type {?} */
    SukuLoginComponent.prototype._enableRequiredValidator;
    /** @type {?} */
    SukuLoginComponent.prototype.color;
    /** @type {?} */
    SukuLoginComponent.prototype.usernameControl;
    /** @type {?} */
    SukuLoginComponent.prototype.placeholderOne;
    /** @type {?} */
    SukuLoginComponent.prototype.userNameId;
    /** @type {?} */
    SukuLoginComponent.prototype.passwordControl;
    /** @type {?} */
    SukuLoginComponent.prototype.placeholderTwo;
    /** @type {?} */
    SukuLoginComponent.prototype.passwordId;
    /** @type {?} */
    SukuLoginComponent.prototype.customClass;
    /** @type {?} */
    SukuLoginComponent.prototype.enableUserIcon;
    /** @type {?} */
    SukuLoginComponent.prototype.errorMessageOne;
    /** @type {?} */
    SukuLoginComponent.prototype.errorMessageTwo;
    /** @type {?} */
    SukuLoginComponent.prototype.errorMessageThree;
    /** @type {?} */
    SukuLoginComponent.prototype.errorMessageFour;
    /** @type {?} */
    SukuLoginComponent.prototype.remeberMeChecked;
    /** @type {?} */
    SukuLoginComponent.prototype.snackbarMessage;
    /** @type {?} */
    SukuLoginComponent.prototype.formSubmit;
    /**
     * @type {?}
     * @private
     */
    SukuLoginComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1sb2dpbi9zdWt1LWxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQWEsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQVcsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBT2hELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUE2QzdCLFlBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7O1FBekN6Qyw2QkFBd0IsR0FBRyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQyxVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzNCLG9CQUFlLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDWixtQkFBYyxHQUFHLFVBQVUsQ0FBQztRQUMvQixlQUFVLEdBQUcsVUFBVSxDQUFDO1FBQy9DLG9CQUFlLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDWixtQkFBYyxHQUFHLFVBQVUsQ0FBQztRQUNoQyxlQUFVLEdBQUcsVUFBVSxDQUFDO1FBRW5CLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLG9CQUFlLEdBQUcsa0JBQWtCLENBQUM7UUFDckMsb0JBQWUsR0FBRyxrQkFBa0IsQ0FBQztRQUNuQyxzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDeEIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBRXhCLG9CQUFlLEdBQUcsZ0JBQWdCLENBQUM7UUF5QnBELGVBQVUs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SUFBSTtTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQTFGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLHNoSkFBMEM7O2FBRTNDOzs7O1lBUFEsV0FBVzs7O29CQWFqQixLQUFLOzZCQUVMLEtBQUssU0FBQyxpQkFBaUI7eUJBQ3ZCLEtBQUssU0FBQyxjQUFjOzZCQUVwQixLQUFLLFNBQUMsaUJBQWlCO3lCQUN2QixLQUFLLFNBQUMsYUFBYTswQkFDbkIsS0FBSyxTQUFDLGNBQWM7NkJBQ3BCLEtBQUssU0FBQyxrQkFBa0I7OEJBQ3hCLEtBQUssU0FBQyxtQkFBbUI7OEJBQ3pCLEtBQUssU0FBQyxtQkFBbUI7Z0NBQ3pCLEtBQUssU0FBQyxxQkFBcUI7K0JBQzNCLEtBQUssU0FBQyxvQkFBb0I7K0JBQzFCLEtBQUssU0FBQyxrQkFBa0I7OEJBQ3hCLEtBQUssU0FBQyxrQkFBa0I7c0NBQ3hCLEtBQUssU0FBQywyQkFBMkI7b0JBZ0JqQyxLQUFLO3lCQVFMLE1BQU07Ozs7SUEzQ1Asa0NBQUs7O0lBQ0wsNENBQWU7O0lBRWYsc0RBQW1EOztJQUNuRCxtQ0FBMkI7O0lBQzNCLDZDQUFzQzs7SUFDdEMsNENBQXNEOztJQUN0RCx3Q0FBK0M7O0lBQy9DLDZDQUFzQzs7SUFDdEMsNENBQXNEOztJQUN0RCx3Q0FBOEM7O0lBQzlDLHlDQUFtQzs7SUFDbkMsNENBQWlEOztJQUNqRCw2Q0FBaUU7O0lBQ2pFLDZDQUFpRTs7SUFDakUsK0NBQXFEOztJQUNyRCw4Q0FBbUQ7O0lBQ25ELDhDQUE0Qzs7SUFDNUMsNkNBQThEOztJQXlCOUQsd0NBQTBDOzs7OztJQUM5QixzQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWxvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1sb2dpbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGhpZGU7XG4gIHJlbWViZXJNZVZhbHVlO1xuICAvLyBfZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IgPSBuZXcgU3ViamVjdCgpO1xuICBfZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcbiAgQElucHV0KCkgY29sb3IgPSAncHJpbWFyeSc7XG4gIHVzZXJuYW1lQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIEBJbnB1dCgncGxhY2Vob2xkZXItb25lJykgcGxhY2Vob2xkZXJPbmUgPSAnVXNlcm5hbWUnO1xuICBASW5wdXQoJ3VzZXItbmFtZS1pZCcpIHVzZXJOYW1lSWQgPSAnVXNlcm5hbWUnO1xuICBwYXNzd29yZENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICBASW5wdXQoJ3BsYWNlaG9sZGVyLXR3bycpIHBsYWNlaG9sZGVyVHdvID0gJ1Bhc3N3b3JkJztcbiAgQElucHV0KCdwYXNzd29yZC1pZCcpIHBhc3N3b3JkSWQgPSAncGFzc3dvcmQnO1xuICBASW5wdXQoJ2N1c3RvbS1jbGFzcycpIGN1c3RvbUNsYXNzO1xuICBASW5wdXQoJ2VuYWJsZS11c2VyLWljb24nKSBlbmFibGVVc2VySWNvbiA9IHRydWU7XG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS1vbmUnKSBlcnJvck1lc3NhZ2VPbmUgPSAnY2Fubm90IGJlIGJsYW5rLic7XG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS10d28nKSBlcnJvck1lc3NhZ2VUd28gPSAnY2Fubm90IGJlIGJsYW5rLic7XG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS10aHJlZScpIGVycm9yTWVzc2FnZVRocmVlID0gJyc7XG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS1mb3VyJykgZXJyb3JNZXNzYWdlRm91ciA9ICcnO1xuICBASW5wdXQoJ3JlbWViZXJNZUNoZWNrZWQnKSByZW1lYmVyTWVDaGVja2VkO1xuICBASW5wdXQoJ3NuYWNrYmFyLW1lc3NhZ2UnKSBzbmFja2Jhck1lc3NhZ2UgPSAnSW52YWxpZCBJbnB1dC4nO1xuICBASW5wdXQoJ2VuYWJsZS1yZXF1aXJlZC12YWxpZGF0b3InKVxuICBnZXQgZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJ19lbmFibGVSZXF1aXJlZFZhbGlkYXRvcicsIHRoaXMuX2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yKTtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IudmFsdWU7XG4gIH1cbiAgc2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCdlbmFibGVSZXF1aXJlZFZhbGlkYXRvcicsIHZhbCk7XG4gICAgaWYgKHZhbCA9PT0gJ3RydWUnKSB7XG4gICAgICBjb25zdCBkYXRhID0gdmFsLnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLl9lbmFibGVSZXF1aXJlZFZhbGlkYXRvci5uZXh0KGRhdGEpO1xuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgIHRoaXMucGFzc3dvcmRDb250cm9sLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICB0aGlzLnBhc3N3b3JkQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWwpIHtcbiAgICBjb25zb2xlLmxvZygndmFsJywgdmFsKTtcbiAgICBpZiAodmFsLnVzZXJuYW1lICYmIHZhbC5wYXNzd29yZCkge1xuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wucGF0Y2hWYWx1ZSh2YWwudXNlcm5hbWUpO1xuICAgICAgdGhpcy5wYXNzd29yZENvbnRyb2wucGF0Y2hWYWx1ZSh2YWwucGFzc3dvcmQpO1xuICAgIH1cbiAgfVxuICBAT3V0cHV0KCkgZm9ybVN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcmVtZWJlck1lQWN0aW9uKGUpIHtcbiAgICB0aGlzLnJlbWViZXJNZVZhbHVlID0gZTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGlmICh0aGlzLl9lbmFibGVSZXF1aXJlZFZhbGlkYXRvci52YWx1ZSA9PSAndHJ1ZScpIHtcbiAgICAgIGlmICh0aGlzLnVzZXJuYW1lQ29udHJvbC52YWx1ZSAmJiB0aGlzLnBhc3N3b3JkQ29udHJvbC52YWx1ZSkge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lQ29udHJvbC52YWx1ZSxcbiAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZENvbnRyb2wudmFsdWUsXG4gICAgICAgICAgcmVtZW1iZXJNZTogdGhpcy5yZW1lYmVyTWVWYWx1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgdGhpcy5mb3JtU3VibWl0LmVtaXQoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNuYWNrYmFyKHRoaXMuc25hY2tiYXJNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWVDb250cm9sLnZhbHVlLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZENvbnRyb2wudmFsdWUsXG4gICAgICAgIHJlbWVtYmVyTWU6IHRoaXMucmVtZWJlck1lVmFsdWVcbiAgICAgIH07XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHRoaXMuZm9ybVN1Ym1pdC5lbWl0KGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHNuYWNrYmFyKG1zZykge1xuICAgIHRoaXMuc25hY2tCYXIub3Blbihtc2csICdjbG9zZScsIHtcbiAgICAgIHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nLFxuICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgZHVyYXRpb246IDM1MDBcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=