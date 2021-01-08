/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-login/suku-login.component.ts
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
        this.title = 'Login';
        this.color = 'primary';
        this.usernameControl = new FormControl('');
        this.placeholderOne = 'Username';
        this.userNameId = 'Username';
        this.passwordLabelOne = 'Hide';
        this.passwordLabelTwo = 'Show';
        this.remembermeLabel = 'Remember Me?';
        this.buttonLabel = 'Login';
        this.buttonId = 'accountLogin';
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
                    template: "<form autocomplete=\"off\">\n  <div class=\"col\">\n    <div class=\"col-sm-12\">\n      <div class=\"form-group col pl-lg-5 pr-lg-5 p-xs-0\">\n        <div class=\" col-xs-12 col-sm-12 pl-lg-5 pr-lg-5 p-xs-0\">\n          <div class=\"col pl-lg-5 pr-lg-5 p-xs-0\">\n            <div class=\"col pl-lg-4 pr-lg-4 p-xs-0\">\n              <div class=\"col-xs-12 f14 pb-lg-3 p-0 col-sm-12 p-xs-0\">\n                <div class=\"col text-center\">\n                  <p class=\"login\">{{title}}</p>\n                </div>\n                <div class=\"col pl-lg-1 pr-lg-1\">\n                  <div class=\"col-sm-6 p-5 pl-xs-0 pr-xs-0 col-xs-12 offset-sm-3 Rectangle-2 mb-9\">\n                    <div class=\"col pt-2\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-10 col-md-12 col-sm-12 col-12 pl-lg-4 pr-lg-4 p-md-0\">\n                          <mat-form-field class=\"col-lg-12 col-12 pl-xs-0 pr-xs-0\" id=\"UsernameIcon\">\n                            <span matPrefix class=\"mr-2\">\n                              <mat-icon>account_circle</mat-icon>\n                            </span>\n                            <input matInput matInput type=\"text\" [id]=\"userNameId\" [placeholder]=\"placeholderOne\"\n                              [formControl]=\"usernameControl\" name=\"usernameControl\">\n                            <mat-error *ngIf=\"usernameControl.hasError('required')\">\n                              {{errorMessageOne}}\n                            </mat-error>\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-2 col-md-4 d-flex align-items-center\"></div>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-10 col-md-12 col-sm-12 col-xs-12 pl-lg-4 pr-lg-4 p-md-0\">\n                          <mat-form-field class=\"col-lg-12 col-12 pl-xs-0 pr-xs-0\" id=\"lockIcon\">\n                            <span matPrefix class=\"mr-2\">\n                              <mat-icon>lock</mat-icon>\n                            </span>\n                            <input matInput autocomplete=\"off\" [placeholder]=\"placeholderTwo\" type=\"password\"\n                              [type]=\"hide ? 'text' : 'password'\" [id]=\"passwordId\" [formControl]=\"passwordControl\"\n                              name=\"passwordControl\">\n                            <mat-error *ngIf=\"passwordControl.hasError('required')\">\n                              {{errorMessageOne}}\n                            </mat-error>\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-2 col-md-12 d-flex align-items-center text-xs-item-center pl-0 pr-0\">\n                          <div class=\"row c-pointer\" (click)=\"hide =! hide\">\n                            <mat-icon class=\"toggle-password\">\n                              {{hide ? 'visibility_off' : 'visibility'}}</mat-icon><span\n                              class=\"pl-2 view\">{{hide ? passwordLabelOne : passwordLabelTwo }}</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                      <div class=\"row\">\n                        <div class=\"col-12 col-sm-10 offset-sm-1 mb-1\">\n                          <div class=\"row\">\n                            <div class=\"text-center col-sm-12 col-xs-6 pt-3 pb-3\">\n                              <suku-checkbox checkbox-id=\"remeberMe\" [checked]=\"remeberMeChecked\"\n                                (action)=\"remeberMeAction($event)\">{{remembermeLabel}}</suku-checkbox>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"col p-0\">\n                        <div class=\"col-lg-7 col-12 pb-3 justify-content-center m-auto\">\n                          <suku-info-button custom-class=\"w-100\" (click)=\"onSubmit();\" id=\"accountLogin\">{{buttonLabel}}\n                          </suku-info-button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.border-top{border-top:.51px solid #676767ba!important}.help{font-size:18px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;text-align:right;color:#fff}.login{font-family:var(--suku-primary-font);font-size:30px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#fff}.view{font-family:var(--suku-secondary-font);font-size:14px}.remeberMe{font-family:var(--suku-primary-font);color:rgba(117,117,117,.37)!important;font-weight:500;font-size:14px;letter-spacing:0}.suku-logo{width:100px;height:60px;-o-object-fit:contain;object-fit:contain}.hr{width:85%;opacity:.1;border:.91px solid #979797;margin-top:.75rem!important}@media (max-width:768px){.p-xs-0{padding:0}.text-xs-item-center{justify-content:center}}.c-pointer{cursor:pointer}:host ::ng-deep .mat-form-field-prefix,:host ::ng-deep .mat-form-field-suffix{align-self:flex-end}@media only screen and (max-device-width:480px){.pl-xs-0{padding-left:0!important}.pr-xs-0{padding-right:0!important}}"]
                }] }
    ];
    /** @nocollapse */
    SukuLoginComponent.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
    SukuLoginComponent.propDecorators = {
        title: [{ type: Input }],
        color: [{ type: Input }],
        placeholderOne: [{ type: Input, args: ['placeholder-one',] }],
        userNameId: [{ type: Input, args: ['user-name-id',] }],
        passwordLabelOne: [{ type: Input, args: ['password-label-one',] }],
        passwordLabelTwo: [{ type: Input, args: ['password-label-two',] }],
        remembermeLabel: [{ type: Input, args: ['rememberme-label',] }],
        buttonLabel: [{ type: Input, args: ['button-label',] }],
        buttonId: [{ type: Input, args: ['button-id',] }],
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
    SukuLoginComponent.prototype.title;
    /** @type {?} */
    SukuLoginComponent.prototype.color;
    /** @type {?} */
    SukuLoginComponent.prototype.usernameControl;
    /** @type {?} */
    SukuLoginComponent.prototype.placeholderOne;
    /** @type {?} */
    SukuLoginComponent.prototype.userNameId;
    /** @type {?} */
    SukuLoginComponent.prototype.passwordLabelOne;
    /** @type {?} */
    SukuLoginComponent.prototype.passwordLabelTwo;
    /** @type {?} */
    SukuLoginComponent.prototype.remembermeLabel;
    /** @type {?} */
    SukuLoginComponent.prototype.buttonLabel;
    /** @type {?} */
    SukuLoginComponent.prototype.buttonId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1sb2dpbi9zdWt1LWxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QztJQXlERSw0QkFBb0IsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQWpEekMsNkJBQXdCLEdBQUcsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUMsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzNCLG9CQUFlLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDWixtQkFBYyxHQUFHLFVBQVUsQ0FBQztRQUMvQixlQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ2xCLHFCQUFnQixHQUFHLE1BQU0sQ0FBQztRQUMxQixxQkFBZ0IsR0FBRyxNQUFNLENBQUM7UUFDNUIsb0JBQWUsR0FBRyxjQUFjLENBQUM7UUFDckMsZ0JBQVcsR0FBRyxPQUFPLENBQUM7UUFDekIsYUFBUSxHQUFHLGNBQWMsQ0FBQztRQUM5QyxvQkFBZSxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osbUJBQWMsR0FBRyxVQUFVLENBQUM7UUFDaEMsZUFBVSxHQUFHLFVBQVUsQ0FBQztRQUVuQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUNyQixvQkFBZSxH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c0RBQW1EOztJQUNuRCxtQ0FBeUI7O0lBQ3pCLG1DQUEyQjs7SUFDM0IsNkNBQXNDOztJQUN0Qyw0Q0FBc0Q7O0lBQ3RELHdDQUErQzs7SUFDL0MsOENBQXVEOztJQUN2RCw4Q0FBdUQ7O0lBQ3ZELDZDQUE0RDs7SUFDNUQseUNBQTZDOztJQUM3QyxzQ0FBOEM7O0lBQzlDLDZDQUFzQzs7SUFDdEMsNENBQXNEOztJQUN0RCx3Q0FBOEM7O0lBQzlDLHlDQUFtQzs7SUFDbkMsNENBQWlEOztJQUNqRCw2Q0FBaUU7O0lBQ2pFLDZDQUFpRTs7SUFDakUsK0NBQXFEOztJQUNyRCw4Q0FBbUQ7O0lBQ25ELDhDQUE0Qzs7SUFDNUMsNkNBQThEOztJQTJCOUQsd0NBQTBDOzs7OztJQUM5QixzQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtbG9naW4uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1TG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBoaWRlO1xuICByZW1lYmVyTWVWYWx1ZTtcbiAgX2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XG4gIEBJbnB1dCgpIHRpdGxlID0gJ0xvZ2luJztcbiAgQElucHV0KCkgY29sb3IgPSAncHJpbWFyeSc7XG4gIHVzZXJuYW1lQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIEBJbnB1dCgncGxhY2Vob2xkZXItb25lJykgcGxhY2Vob2xkZXJPbmUgPSAnVXNlcm5hbWUnO1xuICBASW5wdXQoJ3VzZXItbmFtZS1pZCcpIHVzZXJOYW1lSWQgPSAnVXNlcm5hbWUnO1xuICBASW5wdXQoJ3Bhc3N3b3JkLWxhYmVsLW9uZScpIHBhc3N3b3JkTGFiZWxPbmUgPSAnSGlkZSc7XG4gIEBJbnB1dCgncGFzc3dvcmQtbGFiZWwtdHdvJykgcGFzc3dvcmRMYWJlbFR3byA9ICdTaG93JztcbiAgQElucHV0KCdyZW1lbWJlcm1lLWxhYmVsJykgcmVtZW1iZXJtZUxhYmVsID0gJ1JlbWVtYmVyIE1lPyc7XG4gIEBJbnB1dCgnYnV0dG9uLWxhYmVsJykgYnV0dG9uTGFiZWwgPSAnTG9naW4nO1xuICBASW5wdXQoJ2J1dHRvbi1pZCcpIGJ1dHRvbklkID0gJ2FjY291bnRMb2dpbic7XG4gIHBhc3N3b3JkQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIEBJbnB1dCgncGxhY2Vob2xkZXItdHdvJykgcGxhY2Vob2xkZXJUd28gPSAnUGFzc3dvcmQnO1xuICBASW5wdXQoJ3Bhc3N3b3JkLWlkJykgcGFzc3dvcmRJZCA9ICdwYXNzd29yZCc7XG4gIEBJbnB1dCgnY3VzdG9tLWNsYXNzJykgY3VzdG9tQ2xhc3M7XG4gIEBJbnB1dCgnZW5hYmxlLXVzZXItaWNvbicpIGVuYWJsZVVzZXJJY29uID0gdHJ1ZTtcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLW9uZScpIGVycm9yTWVzc2FnZU9uZSA9ICdjYW5ub3QgYmUgYmxhbmsuJztcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLXR3bycpIGVycm9yTWVzc2FnZVR3byA9ICdjYW5ub3QgYmUgYmxhbmsuJztcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLXRocmVlJykgZXJyb3JNZXNzYWdlVGhyZWUgPSAnJztcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLWZvdXInKSBlcnJvck1lc3NhZ2VGb3VyID0gJyc7XG4gIEBJbnB1dCgncmVtZWJlck1lQ2hlY2tlZCcpIHJlbWViZXJNZUNoZWNrZWQ7XG4gIEBJbnB1dCgnc25hY2tiYXItbWVzc2FnZScpIHNuYWNrYmFyTWVzc2FnZSA9ICdJbnZhbGlkIElucHV0Lic7XG4gIEBJbnB1dCgnZW5hYmxlLXJlcXVpcmVkLXZhbGlkYXRvcicpXG4gIGdldCBlbmFibGVSZXF1aXJlZFZhbGlkYXRvcigpIHtcbiAgICBjb25zb2xlLmxvZygnX2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yJywgdGhpcy5fZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IpO1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVSZXF1aXJlZFZhbGlkYXRvci52YWx1ZTtcbiAgfVxuICBzZXQgZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IodmFsKSB7XG4gICAgY29uc29sZS5sb2coJ2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yJywgdmFsKTtcbiAgICBpZiAodmFsID09PSAndHJ1ZScpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB2YWwudG9TdHJpbmcoKTtcbiAgICAgIHRoaXMuX2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yLm5leHQoZGF0YSk7XG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgdGhpcy5wYXNzd29yZENvbnRyb2wuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgIHRoaXMucGFzc3dvcmRDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCd2YWwnLCB2YWwpO1xuICAgIGlmICh2YWwpIHtcbiAgICAgIGlmICh2YWwudXNlcm5hbWUgJiYgdmFsLnBhc3N3b3JkKSB7XG4gICAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnBhdGNoVmFsdWUodmFsLnVzZXJuYW1lKTtcbiAgICAgICAgdGhpcy5wYXNzd29yZENvbnRyb2wucGF0Y2hWYWx1ZSh2YWwucGFzc3dvcmQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAT3V0cHV0KCkgZm9ybVN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcmVtZWJlck1lQWN0aW9uKGUpIHtcbiAgICB0aGlzLnJlbWViZXJNZVZhbHVlID0gZTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGlmICh0aGlzLl9lbmFibGVSZXF1aXJlZFZhbGlkYXRvci52YWx1ZSA9PSAndHJ1ZScpIHtcbiAgICAgIGlmICh0aGlzLnVzZXJuYW1lQ29udHJvbC52YWx1ZSAmJiB0aGlzLnBhc3N3b3JkQ29udHJvbC52YWx1ZSkge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lQ29udHJvbC52YWx1ZSxcbiAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZENvbnRyb2wudmFsdWUsXG4gICAgICAgICAgcmVtZW1iZXJNZTogdGhpcy5yZW1lYmVyTWVWYWx1ZSB8fCB0aGlzLnJlbWViZXJNZUNoZWNrZWRcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHRoaXMuZm9ybVN1Ym1pdC5lbWl0KGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zbmFja2Jhcih0aGlzLnNuYWNrYmFyTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lQ29udHJvbC52YWx1ZSxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRDb250cm9sLnZhbHVlLFxuICAgICAgICByZW1lbWJlck1lOiB0aGlzLnJlbWViZXJNZVZhbHVlXG4gICAgICB9O1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB0aGlzLmZvcm1TdWJtaXQuZW1pdChkYXRhKTtcbiAgICB9XG4gIH1cblxuICBzbmFja2Jhcihtc2cpIHtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW4obXNnLCAnY2xvc2UnLCB7XG4gICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgIGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgIGR1cmF0aW9uOiAzNTAwXG4gICAgfSk7XG4gIH1cblxufVxuIl19