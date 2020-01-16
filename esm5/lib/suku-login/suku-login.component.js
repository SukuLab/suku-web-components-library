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
                    template: "<form autocomplete=\"off\">\r\n  <div class=\"col\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"form-group col pl-lg-5 pr-lg-5 p-xs-0\">\r\n        <div class=\" col-xs-12 col-sm-12 pl-lg-5 pr-lg-5 p-xs-0\">\r\n          <div class=\"col pl-lg-5 pr-lg-5 p-xs-0\">\r\n            <div class=\"col pl-lg-4 pr-lg-4 p-xs-0\">\r\n              <div class=\"col-xs-12 f14 pb-lg-3 p-0 col-sm-12 p-xs-0\">\r\n                <div class=\"col text-center\">\r\n                  <p class=\"login\">{{title}}</p>\r\n                </div>\r\n                <div class=\"col pl-lg-1 pr-lg-1\">\r\n                  <div class=\"col-sm-6 p-5 pl-xs-0 pr-xs-0 col-xs-12 offset-sm-3 Rectangle-2 mb-9\">\r\n                    <div class=\"col pt-2\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-10 col-md-12 col-sm-12 col-12 pl-lg-4 pr-lg-4 p-md-0\">\r\n                          <mat-form-field class=\"col-lg-12 col-12 pl-xs-0 pr-xs-0\" id=\"UsernameIcon\">\r\n                            <span matPrefix class=\"mr-2\">\r\n                              <mat-icon>account_circle</mat-icon>\r\n                            </span>\r\n                            <input matInput matInput type=\"text\" [id]=\"userNameId\" [placeholder]=\"placeholderOne\"\r\n                              [formControl]=\"usernameControl\" name=\"usernameControl\">\r\n                            <mat-error *ngIf=\"usernameControl.hasError('required')\">\r\n                              {{errorMessageOne}}\r\n                            </mat-error>\r\n                          </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-4 d-flex align-items-center\"></div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-10 col-md-12 col-sm-12 col-xs-12 pl-lg-4 pr-lg-4 p-md-0\">\r\n                          <mat-form-field class=\"col-lg-12 col-12 pl-xs-0 pr-xs-0\" id=\"lockIcon\">\r\n                            <span matPrefix class=\"mr-2\">\r\n                              <mat-icon>lock</mat-icon>\r\n                            </span>\r\n                            <input matInput autocomplete=\"off\" [placeholder]=\"placeholderTwo\" type=\"password\"\r\n                              [type]=\"hide ? 'text' : 'password'\" [id]=\"passwordId\" [formControl]=\"passwordControl\"\r\n                              name=\"passwordControl\">\r\n                            <mat-error *ngIf=\"passwordControl.hasError('required')\">\r\n                              {{errorMessageOne}}\r\n                            </mat-error>\r\n                          </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-12 d-flex align-items-center text-xs-item-center pl-0 pr-0\">\r\n                          <div class=\"row c-pointer\" (click)=\"hide =! hide\">\r\n                            <mat-icon class=\"toggle-password\">\r\n                              {{hide ? 'visibility_off' : 'visibility'}}</mat-icon><span\r\n                              class=\"pl-2 view\">{{hide ? passwordLabelOne : passwordLabelTwo }}</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-12\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12 col-sm-10 offset-sm-1 mb-1\">\r\n                          <div class=\"row\">\r\n                            <div class=\"text-center col-sm-12 col-xs-6 pt-3 pb-3\">\r\n                              <suku-checkbox checkbox-id=\"remeberMe\" [checked]=\"remeberMeChecked\"\r\n                                (action)=\"remeberMeAction($event)\">{{remembermeLabel}}</suku-checkbox>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                      <div class=\"col p-0\">\r\n                        <div class=\"col-lg-7 col-12 pb-3 justify-content-center m-auto\">\r\n                          <suku-info-button custom-class=\"w-100\" (click)=\"onSubmit();\" id=\"accountLogin\">{{buttonLabel}}\r\n                          </suku-info-button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1sb2dpbi9zdWt1LWxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDO0lBeURFLDRCQUFvQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBakR6Qyw2QkFBd0IsR0FBRyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQyxVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDM0Isb0JBQWUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNaLG1CQUFjLEdBQUcsVUFBVSxDQUFDO1FBQy9CLGVBQVUsR0FBRyxVQUFVLENBQUM7UUFDbEIscUJBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQzFCLHFCQUFnQixHQUFHLE1BQU0sQ0FBQztRQUM1QixvQkFBZSxHQUFHLGNBQWMsQ0FBQztRQUNyQyxnQkFBVyxHQUFHLE9BQU8sQ0FBQztRQUN6QixhQUFRLEdBQUcsY0FBYyxDQUFDO1FBQzlDLG9CQUFlLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDWixtQkFBYyxHQUFHLFVBQVUsQ0FBQztRQUNoQyxlQUFVLEdBQUcsVUFBVSxDQUFDO1FBRW5CLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLG9CQUFlLEdB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REFBbUQ7O0lBQ25ELG1DQUF5Qjs7SUFDekIsbUNBQTJCOztJQUMzQiw2Q0FBc0M7O0lBQ3RDLDRDQUFzRDs7SUFDdEQsd0NBQStDOztJQUMvQyw4Q0FBdUQ7O0lBQ3ZELDhDQUF1RDs7SUFDdkQsNkNBQTREOztJQUM1RCx5Q0FBNkM7O0lBQzdDLHNDQUE4Qzs7SUFDOUMsNkNBQXNDOztJQUN0Qyw0Q0FBc0Q7O0lBQ3RELHdDQUE4Qzs7SUFDOUMseUNBQW1DOztJQUNuQyw0Q0FBaUQ7O0lBQ2pELDZDQUFpRTs7SUFDakUsNkNBQWlFOztJQUNqRSwrQ0FBcUQ7O0lBQ3JELDhDQUFtRDs7SUFDbkQsOENBQTRDOztJQUM1Qyw2Q0FBOEQ7O0lBMkI5RCx3Q0FBMEM7Ozs7O0lBQzlCLHNDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1sb2dpbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtbG9naW4uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUxvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBoaWRlO1xyXG4gIHJlbWViZXJNZVZhbHVlO1xyXG4gIF9lbmFibGVSZXF1aXJlZFZhbGlkYXRvciA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xyXG4gIEBJbnB1dCgpIHRpdGxlID0gJ0xvZ2luJztcclxuICBASW5wdXQoKSBjb2xvciA9ICdwcmltYXJ5JztcclxuICB1c2VybmFtZUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIEBJbnB1dCgncGxhY2Vob2xkZXItb25lJykgcGxhY2Vob2xkZXJPbmUgPSAnVXNlcm5hbWUnO1xyXG4gIEBJbnB1dCgndXNlci1uYW1lLWlkJykgdXNlck5hbWVJZCA9ICdVc2VybmFtZSc7XHJcbiAgQElucHV0KCdwYXNzd29yZC1sYWJlbC1vbmUnKSBwYXNzd29yZExhYmVsT25lID0gJ0hpZGUnO1xyXG4gIEBJbnB1dCgncGFzc3dvcmQtbGFiZWwtdHdvJykgcGFzc3dvcmRMYWJlbFR3byA9ICdTaG93JztcclxuICBASW5wdXQoJ3JlbWVtYmVybWUtbGFiZWwnKSByZW1lbWJlcm1lTGFiZWwgPSAnUmVtZW1iZXIgTWU/JztcclxuICBASW5wdXQoJ2J1dHRvbi1sYWJlbCcpIGJ1dHRvbkxhYmVsID0gJ0xvZ2luJztcclxuICBASW5wdXQoJ2J1dHRvbi1pZCcpIGJ1dHRvbklkID0gJ2FjY291bnRMb2dpbic7XHJcbiAgcGFzc3dvcmRDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuICBASW5wdXQoJ3BsYWNlaG9sZGVyLXR3bycpIHBsYWNlaG9sZGVyVHdvID0gJ1Bhc3N3b3JkJztcclxuICBASW5wdXQoJ3Bhc3N3b3JkLWlkJykgcGFzc3dvcmRJZCA9ICdwYXNzd29yZCc7XHJcbiAgQElucHV0KCdjdXN0b20tY2xhc3MnKSBjdXN0b21DbGFzcztcclxuICBASW5wdXQoJ2VuYWJsZS11c2VyLWljb24nKSBlbmFibGVVc2VySWNvbiA9IHRydWU7XHJcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLW9uZScpIGVycm9yTWVzc2FnZU9uZSA9ICdjYW5ub3QgYmUgYmxhbmsuJztcclxuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtdHdvJykgZXJyb3JNZXNzYWdlVHdvID0gJ2Nhbm5vdCBiZSBibGFuay4nO1xyXG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS10aHJlZScpIGVycm9yTWVzc2FnZVRocmVlID0gJyc7XHJcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLWZvdXInKSBlcnJvck1lc3NhZ2VGb3VyID0gJyc7XHJcbiAgQElucHV0KCdyZW1lYmVyTWVDaGVja2VkJykgcmVtZWJlck1lQ2hlY2tlZDtcclxuICBASW5wdXQoJ3NuYWNrYmFyLW1lc3NhZ2UnKSBzbmFja2Jhck1lc3NhZ2UgPSAnSW52YWxpZCBJbnB1dC4nO1xyXG4gIEBJbnB1dCgnZW5hYmxlLXJlcXVpcmVkLXZhbGlkYXRvcicpXHJcbiAgZ2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yKCkge1xyXG4gICAgY29uc29sZS5sb2coJ19lbmFibGVSZXF1aXJlZFZhbGlkYXRvcicsIHRoaXMuX2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yKTtcclxuICAgIHJldHVybiB0aGlzLl9lbmFibGVSZXF1aXJlZFZhbGlkYXRvci52YWx1ZTtcclxuICB9XHJcbiAgc2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yKHZhbCkge1xyXG4gICAgY29uc29sZS5sb2coJ2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yJywgdmFsKTtcclxuICAgIGlmICh2YWwgPT09ICd0cnVlJykge1xyXG4gICAgICBjb25zdCBkYXRhID0gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICAgIHRoaXMuX2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yLm5leHQoZGF0YSk7XHJcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgICAgdGhpcy5wYXNzd29yZENvbnRyb2wuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgICAgdGhpcy5wYXNzd29yZENvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBASW5wdXQoKVxyXG4gIHNldCB2YWx1ZSh2YWwpIHtcclxuICAgIGNvbnNvbGUubG9nKCd2YWwnLCB2YWwpO1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICBpZiAodmFsLnVzZXJuYW1lICYmIHZhbC5wYXNzd29yZCkge1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnBhdGNoVmFsdWUodmFsLnVzZXJuYW1lKTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkQ29udHJvbC5wYXRjaFZhbHVlKHZhbC5wYXNzd29yZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgQE91dHB1dCgpIGZvcm1TdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgcmVtZWJlck1lQWN0aW9uKGUpIHtcclxuICAgIHRoaXMucmVtZWJlck1lVmFsdWUgPSBlO1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoKSB7XHJcbiAgICBpZiAodGhpcy5fZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IudmFsdWUgPT0gJ3RydWUnKSB7XHJcbiAgICAgIGlmICh0aGlzLnVzZXJuYW1lQ29udHJvbC52YWx1ZSAmJiB0aGlzLnBhc3N3b3JkQ29udHJvbC52YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZUNvbnRyb2wudmFsdWUsXHJcbiAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZENvbnRyb2wudmFsdWUsXHJcbiAgICAgICAgICByZW1lbWJlck1lOiB0aGlzLnJlbWViZXJNZVZhbHVlIHx8IHRoaXMucmVtZWJlck1lQ2hlY2tlZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5mb3JtU3VibWl0LmVtaXQoZGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zbmFja2Jhcih0aGlzLnNuYWNrYmFyTWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWVDb250cm9sLnZhbHVlLFxyXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkQ29udHJvbC52YWx1ZSxcclxuICAgICAgICByZW1lbWJlck1lOiB0aGlzLnJlbWViZXJNZVZhbHVlXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB0aGlzLmZvcm1TdWJtaXQuZW1pdChkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNuYWNrYmFyKG1zZykge1xyXG4gICAgdGhpcy5zbmFja0Jhci5vcGVuKG1zZywgJ2Nsb3NlJywge1xyXG4gICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICBkdXJhdGlvbjogMzUwMFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=