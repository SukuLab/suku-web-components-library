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
            if (val) {
                if (val.username && val.password) {
                    this.usernameControl.patchValue(val.username);
                    this.passwordControl.patchValue(val.password);
                }
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
                    template: "<form autocomplete=\"off\">\n  <div class=\"col\">\n    <div class=\"col-sm-12\">\n      <div class=\"form-group col pl-lg-5 pr-lg-5 p-xs-0\">\n        <div class=\" col-xs-12 col-sm-12 pl-lg-5 pr-lg-5 p-xs-0\">\n          <div class=\"col pl-lg-5 pr-lg-5 p-xs-0\">\n            <div class=\"col pl-lg-4 pr-lg-4 p-xs-0\">\n              <div class=\"col-xs-12 f14 pb-lg-3 p-0 col-sm-12 p-xs-0\">\n                <div class=\"col text-center\">\n                  <p class=\"login\">Login</p>\n                </div>\n                <div class=\"col pl-lg-1 pr-lg-1\">\n                  <div class=\"col-sm-6 p-5 col-xs-12 offset-sm-3 Rectangle-2 mb-9\">\n                    <div class=\"col pt-2\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-10 col-md-12 col-sm-12 col-12 pl-lg-4 pr-lg-4 p-md-0\">\n                          <mat-form-field class=\"col-lg-12 col-12\" id=\"UsernameIcon\">\n                            <span matPrefix class=\"mr-2\">\n                              <mat-icon>account_circle</mat-icon>\n                            </span>\n                            <input matInput matInput autofocus type=\"text\" [id]=\"userNameId\"\n                              [placeholder]=\"placeholderOne\" [formControl]=\"usernameControl\" name=\"usernameControl\">\n                            <mat-error *ngIf=\"usernameControl.hasError('required')\">\n                              {{errorMessageOne}}\n                            </mat-error>\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-2 col-md-4 d-flex align-items-center\"></div>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-10 col-md-12 col-sm-12 col-xs-12 pl-lg-4 pr-lg-4 p-md-0\">\n                          <mat-form-field class=\"col-lg-12 col-12\" id=\"lockIcon\">\n                            <span matPrefix class=\"mr-2\">\n                              <mat-icon>lock</mat-icon>\n                            </span>\n                            <input matInput autocomplete=\"off\" [placeholder]=\"placeholderTwo\" type=\"password\"\n                              [type]=\"hide ? 'text' : 'password'\" [id]=\"passwordId\" [formControl]=\"passwordControl\"\n                              name=\"passwordControl\">\n                            <mat-error *ngIf=\"passwordControl.hasError('required')\">\n                              {{errorMessageTwo}}\n                            </mat-error>\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-2 col-md-12 d-flex align-items-center text-xs-item-center pl-0 pr-3\">\n                          <div class=\"row c-pointer\" (click)=\"hide =! hide\">\n                            <mat-icon class=\"toggle-password\">\n                              {{hide ? 'visibility_off' : 'visibility'}}</mat-icon><span\n                              class=\"pl-2 view\">{{hide ? 'Hide' : 'View'}}</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                      <div class=\"row\">\n                        <div class=\"col-12 col-sm-10 offset-sm-1 mb-1\">\n                          <div class=\"row\">\n                            <div class=\"text-center col-sm-12 col-xs-6 pt-3 pb-3\">\n                              <suku-checkbox checkbox-id=\"remeberMe\" [checked]=\"remeberMeChecked\"\n                                (action)=\"remeberMeAction($event)\">Remember Me?</suku-checkbox>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"col\">\n                        <div class=\"col-lg-7 col-12 pb-3 justify-content-center m-auto\">\n                          <suku-info-button custom-class=\"w-100\" (click)=\"onSubmit();\" id=\"accountLogin\">LOGIN\n                          </suku-info-button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>",
                    styles: [".Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.border-top{border-top:.51px solid #676767ba!important}.help{font-size:18px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;text-align:right;color:#fff}.login{font-family:Poppins-light,sans-serif!important;font-size:30px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#fff}.view{font-family:'Encode Sans',sans-serif}.remeberMe{font-family:Poppins,sans-serif;color:rgba(117,117,117,.37)!important;font-weight:500;font-size:14px;letter-spacing:0}.suku-logo{width:100px;height:60px;-o-object-fit:contain;object-fit:contain}.hr{width:85%;opacity:.1;border:.91px solid #979797;margin-top:.75rem!important}@media (max-width:768px){.p-xs-0{padding:0}.text-xs-item-center{justify-content:center}}.c-pointer{cursor:pointer}:host ::ng-deep .mat-form-field-prefix,:host ::ng-deep .mat-form-field-suffix{align-self:flex-end}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1sb2dpbi9zdWt1LWxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDO0lBbURFLDRCQUFvQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBM0N6Qyw2QkFBd0IsR0FBRyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQyxVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzNCLG9CQUFlLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDWixtQkFBYyxHQUFHLFVBQVUsQ0FBQztRQUMvQixlQUFVLEdBQUcsVUFBVSxDQUFDO1FBQy9DLG9CQUFlLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDWixtQkFBYyxHQUFHLFVBQVUsQ0FBQztRQUNoQyxlQUFVLEdBQUcsVUFBVSxDQUFDO1FBRW5CLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLG9CQUFlLEdBQUcsa0JBQWtCLENBQUM7UUFDckMsb0JBQWUsR0FBRyxrQkFBa0IsQ0FBQztRQUNuQyxzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDeEIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBRXhCLG9CQUFlLEdBQUcsZ0JBQWdCLENBQUM7UUEyQnBELGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxD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bkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWxvZ2luLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUxvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaGlkZTtcbiAgcmVtZWJlck1lVmFsdWU7XG4gIF9lbmFibGVSZXF1aXJlZFZhbGlkYXRvciA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuICBASW5wdXQoKSBjb2xvciA9ICdwcmltYXJ5JztcbiAgdXNlcm5hbWVDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgQElucHV0KCdwbGFjZWhvbGRlci1vbmUnKSBwbGFjZWhvbGRlck9uZSA9ICdVc2VybmFtZSc7XG4gIEBJbnB1dCgndXNlci1uYW1lLWlkJykgdXNlck5hbWVJZCA9ICdVc2VybmFtZSc7XG4gIHBhc3N3b3JkQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIEBJbnB1dCgncGxhY2Vob2xkZXItdHdvJykgcGxhY2Vob2xkZXJUd28gPSAnUGFzc3dvcmQnO1xuICBASW5wdXQoJ3Bhc3N3b3JkLWlkJykgcGFzc3dvcmRJZCA9ICdwYXNzd29yZCc7XG4gIEBJbnB1dCgnY3VzdG9tLWNsYXNzJykgY3VzdG9tQ2xhc3M7XG4gIEBJbnB1dCgnZW5hYmxlLXVzZXItaWNvbicpIGVuYWJsZVVzZXJJY29uID0gdHJ1ZTtcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLW9uZScpIGVycm9yTWVzc2FnZU9uZSA9ICdjYW5ub3QgYmUgYmxhbmsuJztcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLXR3bycpIGVycm9yTWVzc2FnZVR3byA9ICdjYW5ub3QgYmUgYmxhbmsuJztcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLXRocmVlJykgZXJyb3JNZXNzYWdlVGhyZWUgPSAnJztcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLWZvdXInKSBlcnJvck1lc3NhZ2VGb3VyID0gJyc7XG4gIEBJbnB1dCgncmVtZWJlck1lQ2hlY2tlZCcpIHJlbWViZXJNZUNoZWNrZWQ7XG4gIEBJbnB1dCgnc25hY2tiYXItbWVzc2FnZScpIHNuYWNrYmFyTWVzc2FnZSA9ICdJbnZhbGlkIElucHV0Lic7XG4gIEBJbnB1dCgnZW5hYmxlLXJlcXVpcmVkLXZhbGlkYXRvcicpXG4gIGdldCBlbmFibGVSZXF1aXJlZFZhbGlkYXRvcigpIHtcbiAgICBjb25zb2xlLmxvZygnX2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yJywgdGhpcy5fZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IpO1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVSZXF1aXJlZFZhbGlkYXRvci52YWx1ZTtcbiAgfVxuICBzZXQgZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IodmFsKSB7XG4gICAgY29uc29sZS5sb2coJ2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yJywgdmFsKTtcbiAgICBpZiAodmFsID09PSAndHJ1ZScpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB2YWwudG9TdHJpbmcoKTtcbiAgICAgIHRoaXMuX2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yLm5leHQoZGF0YSk7XG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgdGhpcy5wYXNzd29yZENvbnRyb2wuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgIHRoaXMucGFzc3dvcmRDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCd2YWwnLCB2YWwpO1xuICAgIGlmICh2YWwpe1xuICAgIGlmICh2YWwudXNlcm5hbWUgJiYgdmFsLnBhc3N3b3JkKSB7XG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC5wYXRjaFZhbHVlKHZhbC51c2VybmFtZSk7XG4gICAgICB0aGlzLnBhc3N3b3JkQ29udHJvbC5wYXRjaFZhbHVlKHZhbC5wYXNzd29yZCk7XG4gICAgfVxuICAgIH1cbiAgfVxuICBAT3V0cHV0KCkgZm9ybVN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcmVtZWJlck1lQWN0aW9uKGUpIHtcbiAgICB0aGlzLnJlbWViZXJNZVZhbHVlID0gZTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGlmICh0aGlzLl9lbmFibGVSZXF1aXJlZFZhbGlkYXRvci52YWx1ZSA9PSAndHJ1ZScpIHtcbiAgICAgIGlmICh0aGlzLnVzZXJuYW1lQ29udHJvbC52YWx1ZSAmJiB0aGlzLnBhc3N3b3JkQ29udHJvbC52YWx1ZSkge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lQ29udHJvbC52YWx1ZSxcbiAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZENvbnRyb2wudmFsdWUsXG4gICAgICAgICAgcmVtZW1iZXJNZTogdGhpcy5yZW1lYmVyTWVWYWx1ZSB8fCB0aGlzLnJlbWViZXJNZUNoZWNrZWRcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHRoaXMuZm9ybVN1Ym1pdC5lbWl0KGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zbmFja2Jhcih0aGlzLnNuYWNrYmFyTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lQ29udHJvbC52YWx1ZSxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRDb250cm9sLnZhbHVlLFxuICAgICAgICByZW1lbWJlck1lOiB0aGlzLnJlbWViZXJNZVZhbHVlXG4gICAgICB9O1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB0aGlzLmZvcm1TdWJtaXQuZW1pdChkYXRhKTtcbiAgICB9XG4gIH1cblxuICBzbmFja2Jhcihtc2cpIHtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW4obXNnLCAnY2xvc2UnLCB7XG4gICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgIGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgIGR1cmF0aW9uOiAzNTAwXG4gICAgfSk7XG4gIH1cblxufVxuIl19