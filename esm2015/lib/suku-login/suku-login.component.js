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
                template: "<form autocomplete=\"off\">\r\n  <div class=\"col\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"form-group col pl-lg-5 pr-lg-5 p-xs-0\">\r\n        <div class=\" col-xs-12 col-sm-12 pl-lg-5 pr-lg-5 p-xs-0\">\r\n          <div class=\"col pl-lg-5 pr-lg-5 p-xs-0\">\r\n            <div class=\"col pl-lg-4 pr-lg-4 p-xs-0\">\r\n              <div class=\"col-xs-12 f14 pb-lg-3 p-0 col-sm-12 p-xs-0\">\r\n                <div class=\"col text-center\">\r\n                  <p class=\"login\">{{title}}</p>\r\n                </div>\r\n                <div class=\"col pl-lg-1 pr-lg-1\">\r\n                  <div class=\"col-sm-6 p-5 pl-xs-0 pr-xs-0 col-xs-12 offset-sm-3 Rectangle-2 mb-9\">\r\n                    <div class=\"col pt-2\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-10 col-md-12 col-sm-12 col-12 pl-lg-4 pr-lg-4 p-md-0\">\r\n                          <mat-form-field class=\"col-lg-12 col-12 pl-xs-0 pr-xs-0\" id=\"UsernameIcon\">\r\n                            <span matPrefix class=\"mr-2\">\r\n                              <mat-icon>account_circle</mat-icon>\r\n                            </span>\r\n                            <input matInput matInput type=\"text\" [id]=\"userNameId\" [placeholder]=\"placeholderOne\"\r\n                              [formControl]=\"usernameControl\" name=\"usernameControl\">\r\n                            <mat-error *ngIf=\"usernameControl.hasError('required')\">\r\n                              {{errorMessageOne}}\r\n                            </mat-error>\r\n                          </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-4 d-flex align-items-center\"></div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-10 col-md-12 col-sm-12 col-xs-12 pl-lg-4 pr-lg-4 p-md-0\">\r\n                          <mat-form-field class=\"col-lg-12 col-12 pl-xs-0 pr-xs-0\" id=\"lockIcon\">\r\n                            <span matPrefix class=\"mr-2\">\r\n                              <mat-icon>lock</mat-icon>\r\n                            </span>\r\n                            <input matInput autocomplete=\"off\" [placeholder]=\"placeholderTwo\" type=\"password\"\r\n                              [type]=\"hide ? 'text' : 'password'\" [id]=\"passwordId\" [formControl]=\"passwordControl\"\r\n                              name=\"passwordControl\">\r\n                            <mat-error *ngIf=\"passwordControl.hasError('required')\">\r\n                              {{errorMessageOne}}\r\n                            </mat-error>\r\n                          </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-lg-2 col-md-12 d-flex align-items-center text-xs-item-center pl-0 pr-0\">\r\n                          <div class=\"row c-pointer\" (click)=\"hide =! hide\">\r\n                            <mat-icon class=\"toggle-password\">\r\n                              {{hide ? 'visibility_off' : 'visibility'}}</mat-icon><span\r\n                              class=\"pl-2 view\">{{hide ? passwordLabelOne : passwordLabelTwo }}</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-12\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12 col-sm-10 offset-sm-1 mb-1\">\r\n                          <div class=\"row\">\r\n                            <div class=\"text-center col-sm-12 col-xs-6 pt-3 pb-3\">\r\n                              <suku-checkbox checkbox-id=\"remeberMe\" [checked]=\"remeberMeChecked\"\r\n                                (action)=\"remeberMeAction($event)\">{{remembermeLabel}}</suku-checkbox>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                      <div class=\"col p-0\">\r\n                        <div class=\"col-lg-7 col-12 pb-3 justify-content-center m-auto\">\r\n                          <suku-info-button custom-class=\"w-100\" (click)=\"onSubmit();\" id=\"accountLogin\">{{buttonLabel}}\r\n                          </suku-info-button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.Rectangle-2{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.border-top{border-top:.51px solid #676767ba!important}.help{font-size:18px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;text-align:right;color:#fff}.login{font-family:var(--suku-primary-font);font-size:30px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;text-align:center;color:#fff}.view{font-family:var(--suku-secondary-font);font-size:14px}.remeberMe{font-family:var(--suku-primary-font);color:rgba(117,117,117,.37)!important;font-weight:500;font-size:14px;letter-spacing:0}.suku-logo{width:100px;height:60px;-o-object-fit:contain;object-fit:contain}.hr{width:85%;opacity:.1;border:.91px solid #979797;margin-top:.75rem!important}@media (max-width:768px){.p-xs-0{padding:0}.text-xs-item-center{justify-content:center}}.c-pointer{cursor:pointer}:host ::ng-deep .mat-form-field-prefix,:host ::ng-deep .mat-form-field-suffix{align-self:flex-end}@media only screen and (max-device-width:480px){.pl-xs-0{padding-left:0!important}.pr-xs-0{padding-right:0!important}}"]
            }] }
];
/** @nocollapse */
SukuLoginComponent.ctorParameters = () => [
    { type: MatSnackBar }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1sb2dpbi9zdWt1LWxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBT3ZDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFvRDdCLFlBQW9CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFqRHpDLDZCQUF3QixHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUMzQixvQkFBZSxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osbUJBQWMsR0FBRyxVQUFVLENBQUM7UUFDL0IsZUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNsQixxQkFBZ0IsR0FBRyxNQUFNLENBQUM7UUFDMUIscUJBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQzVCLG9CQUFlLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLGdCQUFXLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLGFBQVEsR0FBRyxjQUFjLENBQUM7UUFDOUMsb0JBQWUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNaLG1CQUFjLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLGVBQVUsR0FBRyxVQUFVLENBQUM7UUFFbkIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDckIsb0JBQWUsR0FBRyxrQkFBa0IsQ0FBQztRQUNyQyxvQkFBZSxHQUFHLGtCQUFrQixDQUFDO1FBQ25DLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN4QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFFeEIsb0JBQWUsR0FBRyxnQkFBZ0IsQ0FBQztRQTJCcEQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFMUMsQ0FBQzs7OztJQTVCRCxJQUNJLHVCQUF1QjtRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQztJQUM3QyxDQUFDOzs7OztJQUNELElBQUksdUJBQXVCLENBQUMsR0FBRztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTs7a0JBQ1osSUFBSSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQzlDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsZUFBZSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDL0M7SUFDSCxDQUFDOzs7OztJQUNELElBQ0ksS0FBSyxDQUFDLEdBQUc7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksR0FBRyxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMvQztTQUNGO0lBQ0gsQ0FBQzs7OztJQUtELFFBQVE7SUFDUixDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ2pELElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUU7O3NCQUN0RCxJQUFJLEdBQUc7b0JBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSztvQkFDcEMsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSztvQkFDcEMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGdCQUFnQjtpQkFDekQ7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDckM7U0FDRjthQUFNOztrQkFDQyxJQUFJLEdBQUc7Z0JBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSztnQkFDcEMsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSztnQkFDcEMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjO2FBQ2hDO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEdBQUc7UUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFO1lBQy9CLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsa0JBQWtCLEVBQUUsT0FBTztZQUMzQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWpHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLG1zSkFBMEM7O2FBRTNDOzs7O1lBUFEsV0FBVzs7O29CQVlqQixLQUFLO29CQUNMLEtBQUs7NkJBRUwsS0FBSyxTQUFDLGlCQUFpQjt5QkFDdkIsS0FBSyxTQUFDLGNBQWM7K0JBQ3BCLEtBQUssU0FBQyxvQkFBb0I7K0JBQzFCLEtBQUssU0FBQyxvQkFBb0I7OEJBQzFCLEtBQUssU0FBQyxrQkFBa0I7MEJBQ3hCLEtBQUssU0FBQyxjQUFjO3VCQUNwQixLQUFLLFNBQUMsV0FBVzs2QkFFakIsS0FBSyxTQUFDLGlCQUFpQjt5QkFDdkIsS0FBSyxTQUFDLGFBQWE7MEJBQ25CLEtBQUssU0FBQyxjQUFjOzZCQUNwQixLQUFLLFNBQUMsa0JBQWtCOzhCQUN4QixLQUFLLFNBQUMsbUJBQW1COzhCQUN6QixLQUFLLFNBQUMsbUJBQW1CO2dDQUN6QixLQUFLLFNBQUMscUJBQXFCOytCQUMzQixLQUFLLFNBQUMsb0JBQW9COytCQUMxQixLQUFLLFNBQUMsa0JBQWtCOzhCQUN4QixLQUFLLFNBQUMsa0JBQWtCO3NDQUN4QixLQUFLLFNBQUMsMkJBQTJCO29CQWdCakMsS0FBSzt5QkFVTCxNQUFNOzs7O0lBbERQLGtDQUFLOztJQUNMLDRDQUFlOztJQUNmLHNEQUFtRDs7SUFDbkQsbUNBQXlCOztJQUN6QixtQ0FBMkI7O0lBQzNCLDZDQUFzQzs7SUFDdEMsNENBQXNEOztJQUN0RCx3Q0FBK0M7O0lBQy9DLDhDQUF1RDs7SUFDdkQsOENBQXVEOztJQUN2RCw2Q0FBNEQ7O0lBQzVELHlDQUE2Qzs7SUFDN0Msc0NBQThDOztJQUM5Qyw2Q0FBc0M7O0lBQ3RDLDRDQUFzRDs7SUFDdEQsd0NBQThDOztJQUM5Qyx5Q0FBbUM7O0lBQ25DLDRDQUFpRDs7SUFDakQsNkNBQWlFOztJQUNqRSw2Q0FBaUU7O0lBQ2pFLCtDQUFxRDs7SUFDckQsOENBQW1EOztJQUNuRCw4Q0FBNEM7O0lBQzVDLDZDQUE4RDs7SUEyQjlELHdDQUEwQzs7Ozs7SUFDOUIsc0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LWxvZ2luJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1sb2dpbi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1TG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGhpZGU7XHJcbiAgcmVtZWJlck1lVmFsdWU7XHJcbiAgX2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XHJcbiAgQElucHV0KCkgdGl0bGUgPSAnTG9naW4nO1xyXG4gIEBJbnB1dCgpIGNvbG9yID0gJ3ByaW1hcnknO1xyXG4gIHVzZXJuYW1lQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcbiAgQElucHV0KCdwbGFjZWhvbGRlci1vbmUnKSBwbGFjZWhvbGRlck9uZSA9ICdVc2VybmFtZSc7XHJcbiAgQElucHV0KCd1c2VyLW5hbWUtaWQnKSB1c2VyTmFtZUlkID0gJ1VzZXJuYW1lJztcclxuICBASW5wdXQoJ3Bhc3N3b3JkLWxhYmVsLW9uZScpIHBhc3N3b3JkTGFiZWxPbmUgPSAnSGlkZSc7XHJcbiAgQElucHV0KCdwYXNzd29yZC1sYWJlbC10d28nKSBwYXNzd29yZExhYmVsVHdvID0gJ1Nob3cnO1xyXG4gIEBJbnB1dCgncmVtZW1iZXJtZS1sYWJlbCcpIHJlbWVtYmVybWVMYWJlbCA9ICdSZW1lbWJlciBNZT8nO1xyXG4gIEBJbnB1dCgnYnV0dG9uLWxhYmVsJykgYnV0dG9uTGFiZWwgPSAnTG9naW4nO1xyXG4gIEBJbnB1dCgnYnV0dG9uLWlkJykgYnV0dG9uSWQgPSAnYWNjb3VudExvZ2luJztcclxuICBwYXNzd29yZENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIEBJbnB1dCgncGxhY2Vob2xkZXItdHdvJykgcGxhY2Vob2xkZXJUd28gPSAnUGFzc3dvcmQnO1xyXG4gIEBJbnB1dCgncGFzc3dvcmQtaWQnKSBwYXNzd29yZElkID0gJ3Bhc3N3b3JkJztcclxuICBASW5wdXQoJ2N1c3RvbS1jbGFzcycpIGN1c3RvbUNsYXNzO1xyXG4gIEBJbnB1dCgnZW5hYmxlLXVzZXItaWNvbicpIGVuYWJsZVVzZXJJY29uID0gdHJ1ZTtcclxuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2Utb25lJykgZXJyb3JNZXNzYWdlT25lID0gJ2Nhbm5vdCBiZSBibGFuay4nO1xyXG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS10d28nKSBlcnJvck1lc3NhZ2VUd28gPSAnY2Fubm90IGJlIGJsYW5rLic7XHJcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLXRocmVlJykgZXJyb3JNZXNzYWdlVGhyZWUgPSAnJztcclxuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtZm91cicpIGVycm9yTWVzc2FnZUZvdXIgPSAnJztcclxuICBASW5wdXQoJ3JlbWViZXJNZUNoZWNrZWQnKSByZW1lYmVyTWVDaGVja2VkO1xyXG4gIEBJbnB1dCgnc25hY2tiYXItbWVzc2FnZScpIHNuYWNrYmFyTWVzc2FnZSA9ICdJbnZhbGlkIElucHV0Lic7XHJcbiAgQElucHV0KCdlbmFibGUtcmVxdWlyZWQtdmFsaWRhdG9yJylcclxuICBnZXQgZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnX2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yJywgdGhpcy5fZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yLnZhbHVlO1xyXG4gIH1cclxuICBzZXQgZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IodmFsKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3InLCB2YWwpO1xyXG4gICAgaWYgKHZhbCA9PT0gJ3RydWUnKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB2YWwudG9TdHJpbmcoKTtcclxuICAgICAgdGhpcy5fZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IubmV4dChkYXRhKTtcclxuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgICB0aGlzLnBhc3N3b3JkQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAgICB0aGlzLnBhc3N3b3JkQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHZhbHVlKHZhbCkge1xyXG4gICAgY29uc29sZS5sb2coJ3ZhbCcsIHZhbCk7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIGlmICh2YWwudXNlcm5hbWUgJiYgdmFsLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wucGF0Y2hWYWx1ZSh2YWwudXNlcm5hbWUpO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmRDb250cm9sLnBhdGNoVmFsdWUodmFsLnBhc3N3b3JkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBAT3V0cHV0KCkgZm9ybVN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICByZW1lYmVyTWVBY3Rpb24oZSkge1xyXG4gICAgdGhpcy5yZW1lYmVyTWVWYWx1ZSA9IGU7XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCgpIHtcclxuICAgIGlmICh0aGlzLl9lbmFibGVSZXF1aXJlZFZhbGlkYXRvci52YWx1ZSA9PSAndHJ1ZScpIHtcclxuICAgICAgaWYgKHRoaXMudXNlcm5hbWVDb250cm9sLnZhbHVlICYmIHRoaXMucGFzc3dvcmRDb250cm9sLnZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lQ29udHJvbC52YWx1ZSxcclxuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkQ29udHJvbC52YWx1ZSxcclxuICAgICAgICAgIHJlbWVtYmVyTWU6IHRoaXMucmVtZWJlck1lVmFsdWUgfHwgdGhpcy5yZW1lYmVyTWVDaGVja2VkXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB0aGlzLmZvcm1TdWJtaXQuZW1pdChkYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNuYWNrYmFyKHRoaXMuc25hY2tiYXJNZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZUNvbnRyb2wudmFsdWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRDb250cm9sLnZhbHVlLFxyXG4gICAgICAgIHJlbWVtYmVyTWU6IHRoaXMucmVtZWJlck1lVmFsdWVcclxuICAgICAgfTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHRoaXMuZm9ybVN1Ym1pdC5lbWl0KGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc25hY2tiYXIobXNnKSB7XHJcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW4obXNnLCAnY2xvc2UnLCB7XHJcbiAgICAgIHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICBob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgIGR1cmF0aW9uOiAzNTAwXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==