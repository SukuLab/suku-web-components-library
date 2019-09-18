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
        if (val) {
            if (val.username && val.password) {
                this.usernameControl.patchValue(val.username);
                this.passwordControl.patchValue(val.password);
            }
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
                    rememberMe: this.remeberMeValue || this.remeberMeChecked
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
                template: "<form autocomplete=\"off\">\n  <div class=\"col\">\n    <div class=\"col-sm-12\">\n      <div class=\"form-group col pl-lg-5 pr-lg-5 p-xs-0\">\n        <div class=\" col-xs-12 col-sm-12 pl-lg-5 pr-lg-5 p-xs-0\">\n          <div class=\"col pl-lg-5 pr-lg-5 p-xs-0\">\n            <div class=\"col pl-lg-4 pr-lg-4 p-xs-0\">\n              <div class=\"col-xs-12 f14 pb-lg-3 p-0 col-sm-12 p-xs-0\">\n                <div class=\"col text-center\">\n                  <p class=\"login\">Login</p>\n                </div>\n                <div class=\"col pl-lg-1 pr-lg-1\">\n                  <div class=\"col-sm-6 p-5 col-xs-12 offset-sm-3 Rectangle-2 mb-9\">\n                    <div class=\"col pt-2\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-10 col-md-12 col-sm-12 col-12 pl-lg-4 pr-lg-4 p-md-0\">\n                          <mat-form-field class=\"col-lg-12 col-12\" id=\"UsernameIcon\">\n                            <span matPrefix class=\"mr-2\">\n                              <mat-icon>account_circle</mat-icon>\n                            </span>\n                            <input matInput matInput autofocus type=\"text\" [id]=\"userNameId\"\n                              [placeholder]=\"placeholderOne\" [formControl]=\"usernameControl\" name=\"usernameControl\">\n                            <mat-error *ngIf=\"usernameControl.hasError('required')\">\n                              {{errorMessageOne}}\n                            </mat-error>\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-2 col-md-4 d-flex align-items-center\"></div>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-10 col-md-12 col-sm-12 col-xs-12 pl-lg-4 pr-lg-4 p-md-0\">\n                          <mat-form-field class=\"col-lg-12 col-12\" id=\"lockIcon\">\n                            <span matPrefix class=\"mr-2\">\n                              <mat-icon>lock</mat-icon>\n                            </span>\n                            <input matInput autocomplete=\"off\" [placeholder]=\"placeholderTwo\" type=\"password\"\n                              [type]=\"hide ? 'text' : 'password'\" [id]=\"passwordId\" [formControl]=\"passwordControl\"\n                              name=\"passwordControl\">\n                            <mat-error *ngIf=\"passwordControl.hasError('required')\">\n                              {{errorMessageTwo}}\n                            </mat-error>\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-2 col-md-12 d-flex align-items-center text-xs-item-center pl-0 pr-3\">\n                          <div class=\"row c-pointer\" (click)=\"hide =! hide\">\n                            <mat-icon class=\"toggle-password\">\n                              {{hide ? 'visibility_off' : 'visibility'}}</mat-icon><span\n                              class=\"pl-2 view\">{{hide ? 'Hide' : 'View'}}</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                      <div class=\"row\">\n                        <div class=\"col-12 col-sm-10 offset-sm-1 mb-1\">\n                          <div class=\"row\">\n                            <div class=\"text-center col-sm-12 col-xs-6 pt-3 pb-3\">\n                              <suku-checkbox checkbox-id=\"remeberMe\" [checked]=\"remeberMeChecked\"\n                                (action)=\"remeberMeAction($event)\">Remember Me?</suku-checkbox>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"col\">\n                        <div class=\"col-lg-7 col-12 pb-3 justify-content-center m-auto\">\n                          <suku-info-button custom-class=\"w-100\" (click)=\"onSubmit();\" id=\"accountLogin\">LOGIN\n                          </suku-info-button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>",
                styles: [".Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.border-top{border-top:.51px solid #676767ba!important}.help{font-size:18px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;text-align:right;color:#fff}.login{font-family:Poppins-light,sans-serif!important;font-size:30px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#fff}.view{font-family:'Encode Sans',sans-serif}.remeberMe{font-family:Poppins,sans-serif;color:rgba(117,117,117,.37)!important;font-weight:500;font-size:14px;letter-spacing:0}.suku-logo{width:100px;height:60px;-o-object-fit:contain;object-fit:contain}.hr{width:85%;opacity:.1;border:.91px solid #979797;margin-top:.75rem!important}@media (max-width:768px){.p-xs-0{padding:0}.text-xs-item-center{justify-content:center}}.c-pointer{cursor:pointer}:host ::ng-deep .mat-form-field-prefix,:host ::ng-deep .mat-form-field-suffix{align-self:flex-end}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1sb2dpbi9zdWt1LWxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBT3ZDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUE4QzdCLFlBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUEzQ3pDLDZCQUF3QixHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDM0Isb0JBQWUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNaLG1CQUFjLEdBQUcsVUFBVSxDQUFDO1FBQy9CLGVBQVUsR0FBRyxVQUFVLENBQUM7UUFDL0Msb0JBQWUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNaLG1CQUFjLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLGVBQVUsR0FBRyxVQUFVLENBQUM7UUFFbkIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDckIsb0JBQWUsR0FBRyxrQkFBa0IsQ0FBQztRQUNyQyxvQkFBZSxHQUFHLGtCQUFrQixDQUFDO1FBQ25DLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN4QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFFeEIsb0JBQWUsR0FBRyxnQkFBZ0IsQ0FBQztRQTJCcEQsZUFBVSxH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QUFFLFFBQVE7WUFDMUIsa0JBQWtCLEVBQUUsT0FBTztZQUMzQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQTNGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLHk4SUFBMEM7O2FBRTNDOzs7O1lBUFEsV0FBVzs7O29CQVlqQixLQUFLOzZCQUVMLEtBQUssU0FBQyxpQkFBaUI7eUJBQ3ZCLEtBQUssU0FBQyxjQUFjOzZCQUVwQixLQUFLLFNBQUMsaUJBQWlCO3lCQUN2QixLQUFLLFNBQUMsYUFBYTswQkFDbkIsS0FBSyxTQUFDLGNBQWM7NkJBQ3BCLEtBQUssU0FBQyxrQkFBa0I7OEJBQ3hCLEtBQUssU0FBQyxtQkFBbUI7OEJBQ3pCLEtBQUssU0FBQyxtQkFBbUI7Z0NBQ3pCLEtBQUssU0FBQyxxQkFBcUI7K0JBQzNCLEtBQUssU0FBQyxvQkFBb0I7K0JBQzFCLEtBQUssU0FBQyxrQkFBa0I7OEJBQ3hCLEtBQUssU0FBQyxrQkFBa0I7c0NBQ3hCLEtBQUssU0FBQywyQkFBMkI7b0JBZ0JqQyxLQUFLO3lCQVVMLE1BQU07Ozs7SUE1Q1Asa0NBQUs7O0lBQ0wsNENBQWU7O0lBQ2Ysc0RBQW1EOztJQUNuRCxtQ0FBMkI7O0lBQzNCLDZDQUFzQzs7SUFDdEMsNENBQXNEOztJQUN0RCx3Q0FBK0M7O0lBQy9DLDZDQUFzQzs7SUFDdEMsNENBQXNEOztJQUN0RCx3Q0FBOEM7O0lBQzlDLHlDQUFtQzs7SUFDbkMsNENBQWlEOztJQUNqRCw2Q0FBaUU7O0lBQ2pFLDZDQUFpRTs7SUFDakUsK0NBQXFEOztJQUNyRCw4Q0FBbUQ7O0lBQ25ELDhDQUE0Qzs7SUFDNUMsNkNBQThEOztJQTJCOUQsd0NBQTBDOzs7OztJQUM5QixzQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtbG9naW4uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1TG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBoaWRlO1xuICByZW1lYmVyTWVWYWx1ZTtcbiAgX2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gIEBJbnB1dCgpIGNvbG9yID0gJ3ByaW1hcnknO1xuICB1c2VybmFtZUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICBASW5wdXQoJ3BsYWNlaG9sZGVyLW9uZScpIHBsYWNlaG9sZGVyT25lID0gJ1VzZXJuYW1lJztcbiAgQElucHV0KCd1c2VyLW5hbWUtaWQnKSB1c2VyTmFtZUlkID0gJ1VzZXJuYW1lJztcbiAgcGFzc3dvcmRDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgQElucHV0KCdwbGFjZWhvbGRlci10d28nKSBwbGFjZWhvbGRlclR3byA9ICdQYXNzd29yZCc7XG4gIEBJbnB1dCgncGFzc3dvcmQtaWQnKSBwYXNzd29yZElkID0gJ3Bhc3N3b3JkJztcbiAgQElucHV0KCdjdXN0b20tY2xhc3MnKSBjdXN0b21DbGFzcztcbiAgQElucHV0KCdlbmFibGUtdXNlci1pY29uJykgZW5hYmxlVXNlckljb24gPSB0cnVlO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2Utb25lJykgZXJyb3JNZXNzYWdlT25lID0gJ2Nhbm5vdCBiZSBibGFuay4nO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtdHdvJykgZXJyb3JNZXNzYWdlVHdvID0gJ2Nhbm5vdCBiZSBibGFuay4nO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtdGhyZWUnKSBlcnJvck1lc3NhZ2VUaHJlZSA9ICcnO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtZm91cicpIGVycm9yTWVzc2FnZUZvdXIgPSAnJztcbiAgQElucHV0KCdyZW1lYmVyTWVDaGVja2VkJykgcmVtZWJlck1lQ2hlY2tlZDtcbiAgQElucHV0KCdzbmFja2Jhci1tZXNzYWdlJykgc25hY2tiYXJNZXNzYWdlID0gJ0ludmFsaWQgSW5wdXQuJztcbiAgQElucHV0KCdlbmFibGUtcmVxdWlyZWQtdmFsaWRhdG9yJylcbiAgZ2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdfZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3InLCB0aGlzLl9lbmFibGVSZXF1aXJlZFZhbGlkYXRvcik7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yLnZhbHVlO1xuICB9XG4gIHNldCBlbmFibGVSZXF1aXJlZFZhbGlkYXRvcih2YWwpIHtcbiAgICBjb25zb2xlLmxvZygnZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3InLCB2YWwpO1xuICAgIGlmICh2YWwgPT09ICd0cnVlJykge1xuICAgICAgY29uc3QgZGF0YSA9IHZhbC50b1N0cmluZygpO1xuICAgICAgdGhpcy5fZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IubmV4dChkYXRhKTtcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICB0aGlzLnBhc3N3b3JkQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5wYXNzd29yZENvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgY29uc29sZS5sb2coJ3ZhbCcsIHZhbCk7XG4gICAgaWYgKHZhbCl7XG4gICAgaWYgKHZhbC51c2VybmFtZSAmJiB2YWwucGFzc3dvcmQpIHtcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnBhdGNoVmFsdWUodmFsLnVzZXJuYW1lKTtcbiAgICAgIHRoaXMucGFzc3dvcmRDb250cm9sLnBhdGNoVmFsdWUodmFsLnBhc3N3b3JkKTtcbiAgICB9XG4gICAgfVxuICB9XG4gIEBPdXRwdXQoKSBmb3JtU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICByZW1lYmVyTWVBY3Rpb24oZSkge1xuICAgIHRoaXMucmVtZWJlck1lVmFsdWUgPSBlO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuX2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yLnZhbHVlID09ICd0cnVlJykge1xuICAgICAgaWYgKHRoaXMudXNlcm5hbWVDb250cm9sLnZhbHVlICYmIHRoaXMucGFzc3dvcmRDb250cm9sLnZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWVDb250cm9sLnZhbHVlLFxuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkQ29udHJvbC52YWx1ZSxcbiAgICAgICAgICByZW1lbWJlck1lOiB0aGlzLnJlbWViZXJNZVZhbHVlIHx8IHRoaXMucmVtZWJlck1lQ2hlY2tlZFxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgdGhpcy5mb3JtU3VibWl0LmVtaXQoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNuYWNrYmFyKHRoaXMuc25hY2tiYXJNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWVDb250cm9sLnZhbHVlLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZENvbnRyb2wudmFsdWUsXG4gICAgICAgIHJlbWVtYmVyTWU6IHRoaXMucmVtZWJlck1lVmFsdWVcbiAgICAgIH07XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHRoaXMuZm9ybVN1Ym1pdC5lbWl0KGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHNuYWNrYmFyKG1zZykge1xuICAgIHRoaXMuc25hY2tCYXIub3Blbihtc2csICdjbG9zZScsIHtcbiAgICAgIHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nLFxuICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgZHVyYXRpb246IDM1MDBcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=