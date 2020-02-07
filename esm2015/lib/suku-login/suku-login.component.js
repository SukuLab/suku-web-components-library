/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-login/suku-login.component.ts
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
                template: "<form autocomplete=\"off\">\n  <div class=\"col\">\n    <div class=\"col-sm-12\">\n      <div class=\"form-group col pl-lg-5 pr-lg-5 p-xs-0\">\n        <div class=\" col-xs-12 col-sm-12 pl-lg-5 pr-lg-5 p-xs-0\">\n          <div class=\"col pl-lg-5 pr-lg-5 p-xs-0\">\n            <div class=\"col pl-lg-4 pr-lg-4 p-xs-0\">\n              <div class=\"col-xs-12 f14 pb-lg-3 p-0 col-sm-12 p-xs-0\">\n                <div class=\"col text-center\">\n                  <p class=\"login\">{{title}}</p>\n                </div>\n                <div class=\"col pl-lg-1 pr-lg-1\">\n                  <div class=\"col-sm-6 p-5 pl-xs-0 pr-xs-0 col-xs-12 offset-sm-3 Rectangle-2 mb-9\">\n                    <div class=\"col pt-2\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-10 col-md-12 col-sm-12 col-12 pl-lg-4 pr-lg-4 p-md-0\">\n                          <mat-form-field class=\"col-lg-12 col-12 pl-xs-0 pr-xs-0\" id=\"UsernameIcon\">\n                            <span matPrefix class=\"mr-2\">\n                              <mat-icon>account_circle</mat-icon>\n                            </span>\n                            <input matInput matInput type=\"text\" [id]=\"userNameId\" [placeholder]=\"placeholderOne\"\n                              [formControl]=\"usernameControl\" name=\"usernameControl\">\n                            <mat-error *ngIf=\"usernameControl.hasError('required')\">\n                              {{errorMessageOne}}\n                            </mat-error>\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-2 col-md-4 d-flex align-items-center\"></div>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-10 col-md-12 col-sm-12 col-xs-12 pl-lg-4 pr-lg-4 p-md-0\">\n                          <mat-form-field class=\"col-lg-12 col-12 pl-xs-0 pr-xs-0\" id=\"lockIcon\">\n                            <span matPrefix class=\"mr-2\">\n                              <mat-icon>lock</mat-icon>\n                            </span>\n                            <input matInput autocomplete=\"off\" [placeholder]=\"placeholderTwo\" type=\"password\"\n                              [type]=\"hide ? 'text' : 'password'\" [id]=\"passwordId\" [formControl]=\"passwordControl\"\n                              name=\"passwordControl\">\n                            <mat-error *ngIf=\"passwordControl.hasError('required')\">\n                              {{errorMessageOne}}\n                            </mat-error>\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-lg-2 col-md-12 d-flex align-items-center text-xs-item-center pl-0 pr-0\">\n                          <div class=\"row c-pointer\" (click)=\"hide =! hide\">\n                            <mat-icon class=\"toggle-password\">\n                              {{hide ? 'visibility_off' : 'visibility'}}</mat-icon><span\n                              class=\"pl-2 view\">{{hide ? passwordLabelOne : passwordLabelTwo }}</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                      <div class=\"row\">\n                        <div class=\"col-12 col-sm-10 offset-sm-1 mb-1\">\n                          <div class=\"row\">\n                            <div class=\"text-center col-sm-12 col-xs-6 pt-3 pb-3\">\n                              <suku-checkbox checkbox-id=\"remeberMe\" [checked]=\"remeberMeChecked\"\n                                (action)=\"remeberMeAction($event)\">{{remembermeLabel}}</suku-checkbox>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"col p-0\">\n                        <div class=\"col-lg-7 col-12 pb-3 justify-content-center m-auto\">\n                          <suku-info-button custom-class=\"w-100\" (click)=\"onSubmit();\" id=\"accountLogin\">{{buttonLabel}}\n                          </suku-info-button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1sb2dpbi9zdWt1LWxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU92QyxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBb0Q3QixZQUFvQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBakR6Qyw2QkFBd0IsR0FBRyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQyxVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDM0Isb0JBQWUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNaLG1CQUFjLEdBQUcsVUFBVSxDQUFDO1FBQy9CLGVBQVUsR0FBRyxVQUFVLENBQUM7UUFDbEIscUJBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQzFCLHFCQUFnQixHQUFHLE1BQU0sQ0FBQztRQUM1QixvQkFBZSxHQUFHLGNBQWMsQ0FBQztRQUNyQyxnQkFBVyxHQUFHLE9BQU8sQ0FBQztRQUN6QixhQUFRLEdBQUcsY0FBYyxDQUFDO1FBQzlDLG9CQUFlLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDWixtQkFBYyxHQUFHLFVBQVUsQ0FBQztRQUNoQyxlQUFVLEdBQUcsVUFBVSxDQUFDO1FBRW5CLG1CQUFjLEdBQUcsSUFB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Qyw4Q0FBdUQ7O0lBQ3ZELDhDQUF1RDs7SUFDdkQsNkNBQTREOztJQUM1RCx5Q0FBNkM7O0lBQzdDLHNDQUE4Qzs7SUFDOUMsNkNBQXNDOztJQUN0Qyw0Q0FBc0Q7O0lBQ3RELHdDQUE4Qzs7SUFDOUMseUNBQW1DOztJQUNuQyw0Q0FBaUQ7O0lBQ2pELDZDQUFpRTs7SUFDakUsNkNBQWlFOztJQUNqRSwrQ0FBcUQ7O0lBQ3JELDhDQUFtRDs7SUFDbkQsOENBQTRDOztJQUM1Qyw2Q0FBOEQ7O0lBMkI5RCx3Q0FBMEM7Ozs7O0lBQzlCLHNDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWxvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1sb2dpbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGhpZGU7XG4gIHJlbWViZXJNZVZhbHVlO1xuICBfZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcbiAgQElucHV0KCkgdGl0bGUgPSAnTG9naW4nO1xuICBASW5wdXQoKSBjb2xvciA9ICdwcmltYXJ5JztcbiAgdXNlcm5hbWVDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgQElucHV0KCdwbGFjZWhvbGRlci1vbmUnKSBwbGFjZWhvbGRlck9uZSA9ICdVc2VybmFtZSc7XG4gIEBJbnB1dCgndXNlci1uYW1lLWlkJykgdXNlck5hbWVJZCA9ICdVc2VybmFtZSc7XG4gIEBJbnB1dCgncGFzc3dvcmQtbGFiZWwtb25lJykgcGFzc3dvcmRMYWJlbE9uZSA9ICdIaWRlJztcbiAgQElucHV0KCdwYXNzd29yZC1sYWJlbC10d28nKSBwYXNzd29yZExhYmVsVHdvID0gJ1Nob3cnO1xuICBASW5wdXQoJ3JlbWVtYmVybWUtbGFiZWwnKSByZW1lbWJlcm1lTGFiZWwgPSAnUmVtZW1iZXIgTWU/JztcbiAgQElucHV0KCdidXR0b24tbGFiZWwnKSBidXR0b25MYWJlbCA9ICdMb2dpbic7XG4gIEBJbnB1dCgnYnV0dG9uLWlkJykgYnV0dG9uSWQgPSAnYWNjb3VudExvZ2luJztcbiAgcGFzc3dvcmRDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgQElucHV0KCdwbGFjZWhvbGRlci10d28nKSBwbGFjZWhvbGRlclR3byA9ICdQYXNzd29yZCc7XG4gIEBJbnB1dCgncGFzc3dvcmQtaWQnKSBwYXNzd29yZElkID0gJ3Bhc3N3b3JkJztcbiAgQElucHV0KCdjdXN0b20tY2xhc3MnKSBjdXN0b21DbGFzcztcbiAgQElucHV0KCdlbmFibGUtdXNlci1pY29uJykgZW5hYmxlVXNlckljb24gPSB0cnVlO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2Utb25lJykgZXJyb3JNZXNzYWdlT25lID0gJ2Nhbm5vdCBiZSBibGFuay4nO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtdHdvJykgZXJyb3JNZXNzYWdlVHdvID0gJ2Nhbm5vdCBiZSBibGFuay4nO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtdGhyZWUnKSBlcnJvck1lc3NhZ2VUaHJlZSA9ICcnO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtZm91cicpIGVycm9yTWVzc2FnZUZvdXIgPSAnJztcbiAgQElucHV0KCdyZW1lYmVyTWVDaGVja2VkJykgcmVtZWJlck1lQ2hlY2tlZDtcbiAgQElucHV0KCdzbmFja2Jhci1tZXNzYWdlJykgc25hY2tiYXJNZXNzYWdlID0gJ0ludmFsaWQgSW5wdXQuJztcbiAgQElucHV0KCdlbmFibGUtcmVxdWlyZWQtdmFsaWRhdG9yJylcbiAgZ2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdfZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3InLCB0aGlzLl9lbmFibGVSZXF1aXJlZFZhbGlkYXRvcik7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yLnZhbHVlO1xuICB9XG4gIHNldCBlbmFibGVSZXF1aXJlZFZhbGlkYXRvcih2YWwpIHtcbiAgICBjb25zb2xlLmxvZygnZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3InLCB2YWwpO1xuICAgIGlmICh2YWwgPT09ICd0cnVlJykge1xuICAgICAgY29uc3QgZGF0YSA9IHZhbC50b1N0cmluZygpO1xuICAgICAgdGhpcy5fZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IubmV4dChkYXRhKTtcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICB0aGlzLnBhc3N3b3JkQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5wYXNzd29yZENvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgY29uc29sZS5sb2coJ3ZhbCcsIHZhbCk7XG4gICAgaWYgKHZhbCkge1xuICAgICAgaWYgKHZhbC51c2VybmFtZSAmJiB2YWwucGFzc3dvcmQpIHtcbiAgICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wucGF0Y2hWYWx1ZSh2YWwudXNlcm5hbWUpO1xuICAgICAgICB0aGlzLnBhc3N3b3JkQ29udHJvbC5wYXRjaFZhbHVlKHZhbC5wYXNzd29yZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBPdXRwdXQoKSBmb3JtU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICByZW1lYmVyTWVBY3Rpb24oZSkge1xuICAgIHRoaXMucmVtZWJlck1lVmFsdWUgPSBlO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuX2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yLnZhbHVlID09ICd0cnVlJykge1xuICAgICAgaWYgKHRoaXMudXNlcm5hbWVDb250cm9sLnZhbHVlICYmIHRoaXMucGFzc3dvcmRDb250cm9sLnZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWVDb250cm9sLnZhbHVlLFxuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkQ29udHJvbC52YWx1ZSxcbiAgICAgICAgICByZW1lbWJlck1lOiB0aGlzLnJlbWViZXJNZVZhbHVlIHx8IHRoaXMucmVtZWJlck1lQ2hlY2tlZFxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgdGhpcy5mb3JtU3VibWl0LmVtaXQoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNuYWNrYmFyKHRoaXMuc25hY2tiYXJNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWVDb250cm9sLnZhbHVlLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZENvbnRyb2wudmFsdWUsXG4gICAgICAgIHJlbWVtYmVyTWU6IHRoaXMucmVtZWJlck1lVmFsdWVcbiAgICAgIH07XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHRoaXMuZm9ybVN1Ym1pdC5lbWl0KGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHNuYWNrYmFyKG1zZykge1xuICAgIHRoaXMuc25hY2tCYXIub3Blbihtc2csICdjbG9zZScsIHtcbiAgICAgIHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nLFxuICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgZHVyYXRpb246IDM1MDBcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=