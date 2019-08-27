/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
var SukuLoginComponent = /** @class */ (function () {
    function SukuLoginComponent(snackBar) {
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
    Object.defineProperty(SukuLoginComponent.prototype, "enableRequiredValidator", {
        get: /**
         * @return {?}
         */
        function () {
            console.log('_enableRequiredValidator', this._enableRequiredValidator);
            return this._enableRequiredValidator.value;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            console.log('enableRequiredValidator', val);
            if (val === 'true') {
                /** @type {?} */
                var data = val.toString();
                this._enableRequiredValidator.next(data);
                this.usernameControl.setValidators(Validators.required);
                this.usernameControl.updateValueAndValidity();
                this.passwordControl.setValidators(Validators.required);
                this.passwordControl.updateValueAndValidity();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuLoginComponent.prototype, "value", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            console.log('val', val);
            if (val.username && val.password) {
                this.usernameControl.patchValue(val.username);
                this.passwordControl.patchValue(val.password);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SukuLoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SukuLoginComponent.prototype.remeberMeAction = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.remeberMeValue = e;
    };
    /**
     * @return {?}
     */
    SukuLoginComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        if (this._enableRequiredValidator.value == 'true') {
            if (this.usernameControl.value && this.passwordControl.value) {
                /** @type {?} */
                var data = {
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
            var data = {
                username: this.usernameControl.value,
                password: this.passwordControl.value,
                rememberMe: this.remeberMeValue
            };
            console.log(data);
            this.formSubmit.emit(data);
        }
    };
    /**
     * @param {?} msg
     * @return {?}
     */
    SukuLoginComponent.prototype.snackbar = /**
     * @param {?} msg
     * @return {?}
     */
    function (msg) {
        this.snackBar.open(msg, 'close', {
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            duration: 3500
        });
    };
    SukuLoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-login',
                    template: "<form autocomplete=\"off\">\n  <div class=\"col\">\n    <div class=\"col-sm-12\">\n      <div class=\"form-group col pl-lg-5 pr-lg-5 p-xs-0\">\n        <div class=\" col-xs-12 col-sm-12 pt-3 pl-lg-5 pr-lg-5 p-xs-0\">\n          <div class=\"col pl-lg-5 pr-lg-5 p-xs-0\">\n            <div class=\"col pl-lg-4 pr-lg-4 p-xs-0\">\n              <div class=\"col-xs-12 f14 pt-lg-5 pb-lg-3 p-0 col-sm-12 p-xs-0\">\n                <div class=\"col text-center\">\n                  <p class=\"login\">Login</p>\n                </div>\n                <div class=\"col pl-lg-1 pr-lg-1\">\n                  <div\n                    class=\"col-sm-6 pl-lg-4 pr-lg-4 pl-md-5 pr-md-5 pt-4 pb-4 col-xs-12 offset-sm-3 Rectangle-2 mb-9\">\n                    <div class=\"col pt-2\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-10 col-md-12 col-sm-12 col-12 pl-lg-4 pr-lg-4 p-md-0\">\n                          <mat-form-field class=\"col-lg-12 col-12\" id=\"UsernameIcon\">\n                            <span matPrefix class=\"mr-2\">\n                              <mat-icon>account_circle</mat-icon>\n                            </span>\n                            <input matInput matInput autofocus type=\"text\" [id]=\"userNameId\"\n                              [placeholder]=\"placeholderOne\" [formControl]=\"usernameControl\" name=\"usernameControl\">\n                            <mat-error *ngIf=\"usernameControl.hasError('required')\">\n                              {{errorMessageOne}}\n                            </mat-error>\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-2 col-md-4 d-flex align-items-center\"></div>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-10 col-md-12 col-sm-12 col-xs-12 pl-lg-4 pr-lg-4 p-md-0\">\n                          <mat-form-field class=\"col-lg-12 col-12\" id=\"lockIcon\">\n                            <span matPrefix class=\"mr-2\">\n                              <mat-icon>lock</mat-icon>\n                            </span>\n                            <input matInput autocomplete=\"off\" [placeholder]=\"placeholderTwo\" type=\"password\"\n                              [type]=\"hide ? 'text' : 'password'\" [id]=\"passwordId\" [formControl]=\"passwordControl\"\n                              name=\"passwordControl\">\n                            <mat-error *ngIf=\"passwordControl.hasError('required')\">\n                              {{errorMessageTwo}}\n                            </mat-error>\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-2 col-md-12 d-flex align-items-center text-xs-item-center pl-0 pr-3\">\n                          <div class=\"row c-pointer\" (click)=\"hide =! hide\">\n                            <mat-icon class=\"toggle-password\">\n                              {{hide ? 'visibility_off' : 'visibility'}}</mat-icon><span\n                              class=\"pl-2 view\">{{hide ? 'Hide' : 'View'}}</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-12 pt-3\">\n                      <div class=\"row\">\n                        <div class=\"col-12 col-sm-10 offset-sm-1 mb-1\">\n                          <div class=\"row\">\n                            <div class=\"text-center col-sm-12 col-xs-6 pt-3 pb-3\">\n                              <suku-checkbox checkbox-id=\"remeberMe\" [checked]=\"remeberMeChecked\"\n                                (action)=\"remeberMeAction($event)\">Remember Me?</suku-checkbox>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"col\">\n                        <div class=\"col-lg-8 col-12 pb-3 justify-content-center m-auto\">\n                          <suku-info-button custom-class=\"w-100\" (click)=\"onSubmit();\" id=\"accountLogin\">LOGIN\n                          </suku-info-button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>",
                    styles: [".Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.border-top{border-top:.51px solid #676767ba!important}.help{font-size:18px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;text-align:right;color:#fff}.login{font-family:Poppins-light,sans-serif!important;font-size:30px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#fff}.view{font-family:'Encode Sans',sans-serif}.remeberMe{font-family:Poppins,sans-serif;color:rgba(117,117,117,.37)!important;font-weight:500;font-size:14px;letter-spacing:0}.suku-logo{width:100px;height:60px;-o-object-fit:contain;object-fit:contain}.hr{width:85%;opacity:.1;border:.91px solid #979797;margin-top:.75rem!important}@media (max-width:768px){.p-xs-0{padding:0}.text-xs-item-center{justify-content:center}}.c-pointer{cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    SukuLoginComponent.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
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
    return SukuLoginComponent;
}());
export { SukuLoginComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1sb2dpbi9zdWt1LWxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQWEsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQVcsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhEO0lBa0RFLDRCQUFvQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhOztRQXpDekMsNkJBQXdCLEdBQUcsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUMsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUMzQixvQkFBZSxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osbUJBQWMsR0FBRyxVQUFVLENBQUM7UUFDL0IsZUFBVSxHQUFHLFVBQVUsQ0FBQztRQUMvQyxvQkFBZSxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osbUJBQWMsR0FBRyxVQUFVLENBQUM7UUFDaEMsZUFBVSxHQUFHLFVBQVUsQ0FBQztRQUVuQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUNyQixvQkFBZSxHQUFHLGtCQUFrQixDQUFDO1FBQ3JDLG9CQUFlLEdBQUcsa0JBQWtCLENBQUM7UUFDbkMsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUV4QixvQkFBZSxHQUFHLGdCQUFnQixDQUFDO1FBeUJwRCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUs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QUMxQixrQkFBa0IsRUFBRSxPQUFPO1lBQzNCLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBMUZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsc2hKQUEwQzs7aUJBRTNDOzs7O2dCQVBRLFdBQVc7Ozt3QkFhakIsS0FBSztpQ0FFTCxLQUFLLFNBQUMsaUJBQWlCOzZCQUN2QixLQUFLLFNBQUMsY0FBYztpQ0FFcEIsS0FBSyxTQUFDLGlCQUFpQjs2QkFDdkIsS0FBSyxTQUFDLGFBQWE7OEJBQ25CLEtBQUssU0FBQyxjQUFjO2lDQUNwQixLQUFLLFNBQUMsa0JBQWtCO2tDQUN4QixLQUFLLFNBQUMsbUJBQW1CO2tDQUN6QixLQUFLLFNBQUMsbUJBQW1CO29DQUN6QixLQUFLLFNBQUMscUJBQXFCO21DQUMzQixLQUFLLFNBQUMsb0JBQW9CO21DQUMxQixLQUFLLFNBQUMsa0JBQWtCO2tDQUN4QixLQUFLLFNBQUMsa0JBQWtCOzBDQUN4QixLQUFLLFNBQUMsMkJBQTJCO3dCQWdCakMsS0FBSzs2QkFRTCxNQUFNOztJQTJDVCx5QkFBQztDQUFBLEFBNUZELElBNEZDO1NBdkZZLGtCQUFrQjs7O0lBQzdCLGtDQUFLOztJQUNMLDRDQUFlOztJQUVmLHNEQUFtRDs7SUFDbkQsbUNBQTJCOztJQUMzQiw2Q0FBc0M7O0lBQ3RDLDRDQUFzRDs7SUFDdEQsd0NBQStDOztJQUMvQyw2Q0FBc0M7O0lBQ3RDLDRDQUFzRDs7SUFDdEQsd0NBQThDOztJQUM5Qyx5Q0FBbUM7O0lBQ25DLDRDQUFpRDs7SUFDakQsNkNBQWlFOztJQUNqRSw2Q0FBaUU7O0lBQ2pFLCtDQUFxRDs7SUFDckQsOENBQW1EOztJQUNuRCw4Q0FBNEM7O0lBQzVDLDZDQUE4RDs7SUF5QjlELHdDQUEwQzs7Ozs7SUFDOUIsc0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtbG9naW4uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1TG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBoaWRlO1xuICByZW1lYmVyTWVWYWx1ZTtcbiAgLy8gX2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yID0gbmV3IFN1YmplY3QoKTtcbiAgX2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gIEBJbnB1dCgpIGNvbG9yID0gJ3ByaW1hcnknO1xuICB1c2VybmFtZUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICBASW5wdXQoJ3BsYWNlaG9sZGVyLW9uZScpIHBsYWNlaG9sZGVyT25lID0gJ1VzZXJuYW1lJztcbiAgQElucHV0KCd1c2VyLW5hbWUtaWQnKSB1c2VyTmFtZUlkID0gJ1VzZXJuYW1lJztcbiAgcGFzc3dvcmRDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgQElucHV0KCdwbGFjZWhvbGRlci10d28nKSBwbGFjZWhvbGRlclR3byA9ICdQYXNzd29yZCc7XG4gIEBJbnB1dCgncGFzc3dvcmQtaWQnKSBwYXNzd29yZElkID0gJ3Bhc3N3b3JkJztcbiAgQElucHV0KCdjdXN0b20tY2xhc3MnKSBjdXN0b21DbGFzcztcbiAgQElucHV0KCdlbmFibGUtdXNlci1pY29uJykgZW5hYmxlVXNlckljb24gPSB0cnVlO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2Utb25lJykgZXJyb3JNZXNzYWdlT25lID0gJ2Nhbm5vdCBiZSBibGFuay4nO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtdHdvJykgZXJyb3JNZXNzYWdlVHdvID0gJ2Nhbm5vdCBiZSBibGFuay4nO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtdGhyZWUnKSBlcnJvck1lc3NhZ2VUaHJlZSA9ICcnO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtZm91cicpIGVycm9yTWVzc2FnZUZvdXIgPSAnJztcbiAgQElucHV0KCdyZW1lYmVyTWVDaGVja2VkJykgcmVtZWJlck1lQ2hlY2tlZDtcbiAgQElucHV0KCdzbmFja2Jhci1tZXNzYWdlJykgc25hY2tiYXJNZXNzYWdlID0gJ0ludmFsaWQgSW5wdXQuJztcbiAgQElucHV0KCdlbmFibGUtcmVxdWlyZWQtdmFsaWRhdG9yJylcbiAgZ2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdfZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3InLCB0aGlzLl9lbmFibGVSZXF1aXJlZFZhbGlkYXRvcik7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yLnZhbHVlO1xuICB9XG4gIHNldCBlbmFibGVSZXF1aXJlZFZhbGlkYXRvcih2YWwpIHtcbiAgICBjb25zb2xlLmxvZygnZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3InLCB2YWwpO1xuICAgIGlmICh2YWwgPT09ICd0cnVlJykge1xuICAgICAgY29uc3QgZGF0YSA9IHZhbC50b1N0cmluZygpO1xuICAgICAgdGhpcy5fZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IubmV4dChkYXRhKTtcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICB0aGlzLnBhc3N3b3JkQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5wYXNzd29yZENvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgY29uc29sZS5sb2coJ3ZhbCcsIHZhbCk7XG4gICAgaWYgKHZhbC51c2VybmFtZSAmJiB2YWwucGFzc3dvcmQpIHtcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnBhdGNoVmFsdWUodmFsLnVzZXJuYW1lKTtcbiAgICAgIHRoaXMucGFzc3dvcmRDb250cm9sLnBhdGNoVmFsdWUodmFsLnBhc3N3b3JkKTtcbiAgICB9XG4gIH1cbiAgQE91dHB1dCgpIGZvcm1TdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHJlbWViZXJNZUFjdGlvbihlKSB7XG4gICAgdGhpcy5yZW1lYmVyTWVWYWx1ZSA9IGU7XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBpZiAodGhpcy5fZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IudmFsdWUgPT0gJ3RydWUnKSB7XG4gICAgICBpZiAodGhpcy51c2VybmFtZUNvbnRyb2wudmFsdWUgJiYgdGhpcy5wYXNzd29yZENvbnRyb2wudmFsdWUpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZUNvbnRyb2wudmFsdWUsXG4gICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRDb250cm9sLnZhbHVlLFxuICAgICAgICAgIHJlbWVtYmVyTWU6IHRoaXMucmVtZWJlck1lVmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHRoaXMuZm9ybVN1Ym1pdC5lbWl0KGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zbmFja2Jhcih0aGlzLnNuYWNrYmFyTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lQ29udHJvbC52YWx1ZSxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRDb250cm9sLnZhbHVlLFxuICAgICAgICByZW1lbWJlck1lOiB0aGlzLnJlbWViZXJNZVZhbHVlXG4gICAgICB9O1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB0aGlzLmZvcm1TdWJtaXQuZW1pdChkYXRhKTtcbiAgICB9XG4gIH1cblxuICBzbmFja2Jhcihtc2cpIHtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW4obXNnLCAnY2xvc2UnLCB7XG4gICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgIGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgIGR1cmF0aW9uOiAzNTAwXG4gICAgfSk7XG4gIH1cblxufVxuIl19