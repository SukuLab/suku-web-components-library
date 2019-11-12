/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
/**
 * Error when invalid control is dirty, touched, or submitted.
 */
var /**
 * Error when invalid control is dirty, touched, or submitted.
 */
MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    MyErrorStateMatcher.prototype.isErrorState = /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    function (control, form) {
        return !!(control && control.invalid && (control.dirty || control.touched));
    };
    return MyErrorStateMatcher;
}());
/**
 * Error when invalid control is dirty, touched, or submitted.
 */
export { MyErrorStateMatcher };
var SukuUserInputComponent = /** @class */ (function () {
    function SukuUserInputComponent() {
        this.usernameControl = new FormControl('');
        this.color = 'primary';
        this.placeholder = 'Username';
        this.enableUserIcon = true;
        this.errorMessageOne = 'Cannot be blank.';
        this.errorMessageTwo = 'Invalid value.';
        this.errorMessageThree = '';
        this.errorMessageFour = '';
        this.value = '';
        this.action = new EventEmitter();
        this.onChangeAction = new EventEmitter();
        this.matcher = new MyErrorStateMatcher();
    }
    Object.defineProperty(SukuUserInputComponent.prototype, "disable", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                this.usernameControl.disable();
            }
            else {
                this.usernameControl.enable();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuUserInputComponent.prototype, "enableRequiredValidator", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            console.log('enableRequiredValidator', val);
            if (val) {
                this.usernameControl.setValidators(Validators.required);
                this.usernameControl.updateValueAndValidity();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuUserInputComponent.prototype, "enablePatternValidators", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                this.usernameControl.setValidators([Validators.required, Validators.pattern(this.pattern)]);
                this.usernameControl.updateValueAndValidity();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuUserInputComponent.prototype, "enableMaxLenValidators", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            console.log('enableMaxValidator', val);
            if (val) {
                this.usernameControl.setValidators(Validators.maxLength(val));
                this.usernameControl.updateValueAndValidity();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuUserInputComponent.prototype, "enableMinLenValidators", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            console.log('enableMinValidator', val);
            if (val) {
                this.usernameControl.setValidators(Validators.minLength(val));
                this.usernameControl.updateValueAndValidity();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SukuUserInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscription = this.usernameControl.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                /** @type {?} */
                var controlValue = {
                    dirty: _this.usernameControl.dirty,
                    disabled: _this.usernameControl.disabled,
                    enabled: _this.usernameControl.enabled,
                    errors: _this.usernameControl.errors,
                    invalid: _this.usernameControl.invalid,
                    pristine: _this.usernameControl.pristine,
                    status: _this.usernameControl.status,
                    touched: _this.usernameControl.touched,
                    untouched: _this.usernameControl.untouched,
                    valid: _this.usernameControl.valid,
                    validator: _this.usernameControl.validator,
                    value: _this.usernameControl.value
                };
                _this.action.emit(controlValue);
            }
            else {
                // this.usernameControl.
            }
            console.log('usernameControl', _this.usernameControl);
        }));
    };
    /**
     * @return {?}
     */
    SukuUserInputComponent.prototype.getErrorMessage = /**
     * @return {?}
     */
    function () {
        return this.usernameControl.hasError('required') ? 'You must enter a value' :
            this.usernameControl.hasError('minlength') ? 'username should be more than 2 letters' :
                '';
    };
    /**
     * @return {?}
     */
    SukuUserInputComponent.prototype.ngDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    SukuUserInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-user-input',
                    template: "<mat-form-field [class]=\"customClass\" [color]=\"color\">\r\n  <span matPrefix class=\"mr-2\" *ngIf=\"enableUserIcon\">\r\n    <mat-icon class=\"material-icons\">account_circle</mat-icon>\r\n  </span>\r\n  <input matInput [placeholder]=\"placeholder\" #t [formControl]=\"usernameControl\" name=\"usernameControl\"\r\n    (change)=\"onChangeAction.emit(t.value)\" [value]=\"value\">\r\n  <mat-error *ngIf=\"usernameControl.hasError('required')\">\r\n    {{errorMessageOne}}\r\n  </mat-error>\r\n  <mat-error *ngIf=\"usernameControl.hasError('pattern') && !usernameControl.hasError('required')\">\r\n    {{errorMessageTwo}}\r\n  </mat-error>\r\n  <mat-error *ngIf=\"usernameControl.hasError('maxLength')\">\r\n    {{errorMessageThree}}\r\n  </mat-error>\r\n  <mat-error *ngIf=\"usernameControl.hasError('minlength')\">\r\n    {{errorMessageFour}}\r\n  </mat-error>\r\n</mat-form-field>",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.input-full-width{width:100%}::ng-deep .mat-input-element{padding:1%!important}.material-icons{font-size:var(--suku-font-size-6)}.mat-form-field.ng-dirty.ng-invalid .mat-form-field-underline{background-color:red}.mat-form-field.ng-dirty.ng-invalid .mat-form-field-label{color:red}.mat-form-field-subscript-wrapper{font-size:90%!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuUserInputComponent.ctorParameters = function () { return []; };
    SukuUserInputComponent.propDecorators = {
        pattern: [{ type: Input }],
        color: [{ type: Input }],
        placeholder: [{ type: Input }],
        customClass: [{ type: Input, args: ['custom-class',] }],
        enableUserIcon: [{ type: Input, args: ['enable-user-icon',] }],
        errorMessageOne: [{ type: Input, args: ['error-message-one',] }],
        errorMessageTwo: [{ type: Input, args: ['error-message-two',] }],
        errorMessageThree: [{ type: Input, args: ['error-message-three',] }],
        errorMessageFour: [{ type: Input, args: ['error-message-four',] }],
        value: [{ type: Input, args: ['value',] }],
        disable: [{ type: Input, args: ['disabled',] }],
        enableRequiredValidator: [{ type: Input, args: ['enable-required-validator',] }],
        enablePatternValidators: [{ type: Input, args: ['enable-pattern-validator',] }],
        enableMaxLenValidators: [{ type: Input, args: ['enable-max-len-validator',] }],
        enableMinLenValidators: [{ type: Input, args: ['enable-min-len-validator',] }],
        action: [{ type: Output }],
        onChangeAction: [{ type: Output }]
    };
    return SukuUserInputComponent;
}());
export { SukuUserInputComponent };
if (false) {
    /** @type {?} */
    SukuUserInputComponent.prototype._subscription;
    /** @type {?} */
    SukuUserInputComponent.prototype.usernameControl;
    /** @type {?} */
    SukuUserInputComponent.prototype.pattern;
    /** @type {?} */
    SukuUserInputComponent.prototype.color;
    /** @type {?} */
    SukuUserInputComponent.prototype.placeholder;
    /** @type {?} */
    SukuUserInputComponent.prototype.customClass;
    /** @type {?} */
    SukuUserInputComponent.prototype.enableUserIcon;
    /** @type {?} */
    SukuUserInputComponent.prototype.errorMessageOne;
    /** @type {?} */
    SukuUserInputComponent.prototype.errorMessageTwo;
    /** @type {?} */
    SukuUserInputComponent.prototype.errorMessageThree;
    /** @type {?} */
    SukuUserInputComponent.prototype.errorMessageFour;
    /** @type {?} */
    SukuUserInputComponent.prototype.value;
    /** @type {?} */
    SukuUserInputComponent.prototype.action;
    /** @type {?} */
    SukuUserInputComponent.prototype.onChangeAction;
    /** @type {?} */
    SukuUserInputComponent.prototype.matcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS11c2VyLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXVzZXItaW5wdXQvc3VrdS11c2VyLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsV0FBVyxFQUE4QixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUdyRjs7OztJQUFBO0lBSUEsQ0FBQzs7Ozs7O0lBSEMsMENBQVk7Ozs7O0lBQVosVUFBYSxPQUEyQixFQUFFLElBQXdDO1FBQ2hGLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7OztBQUVEO0lBOERFO1FBdERBLG9CQUFlLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFN0IsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixnQkFBVyxHQUFHLFVBQVUsQ0FBQztRQUVQLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLG9CQUFlLEdBQUcsa0JBQWtCLENBQUM7UUFDckMsb0JBQWUsR0FBRyxnQkFBZ0IsQ0FBQztRQUNqQyxzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDeEIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ25DLFVBQUssR0FBRyxFQUFFLENBQUM7UUF3Q2pCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztR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Qjt5Q0FPaEMsS0FBSyxTQUFDLDBCQUEwQjt5Q0FRaEMsS0FBSyxTQUFDLDBCQUEwQjt5QkFRaEMsTUFBTTtpQ0FDTixNQUFNOztJQXVDVCw2QkFBQztDQUFBLEFBbEdELElBa0dDO1NBNUZZLHNCQUFzQjs7O0lBQ2pDLCtDQUFjOztJQUNkLGlEQUFzQzs7SUFDdEMseUNBQWlCOztJQUNqQix1Q0FBMkI7O0lBQzNCLDZDQUFrQzs7SUFDbEMsNkNBQW1DOztJQUNuQyxnREFBaUQ7O0lBQ2pELGlEQUFpRTs7SUFDakUsaURBQStEOztJQUMvRCxtREFBcUQ7O0lBQ3JELGtEQUFtRDs7SUFDbkQsdUNBQTJCOztJQXdDM0Isd0NBQXNDOztJQUN0QyxnREFBOEM7O0lBRTlDLHlDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nRm9ybSwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRXJyb3JTdGF0ZU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuLyoqIEVycm9yIHdoZW4gaW52YWxpZCBjb250cm9sIGlzIGRpcnR5LCB0b3VjaGVkLCBvciBzdWJtaXR0ZWQuICovXHJcbmV4cG9ydCBjbGFzcyBNeUVycm9yU3RhdGVNYXRjaGVyIGltcGxlbWVudHMgRXJyb3JTdGF0ZU1hdGNoZXIge1xyXG4gIGlzRXJyb3JTdGF0ZShjb250cm9sOiBGb3JtQ29udHJvbCB8IG51bGwsIGZvcm06IEZvcm1Hcm91cERpcmVjdGl2ZSB8IE5nRm9ybSB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIShjb250cm9sICYmIGNvbnRyb2wuaW52YWxpZCAmJiAoY29udHJvbC5kaXJ0eSB8fCBjb250cm9sLnRvdWNoZWQpKTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS11c2VyLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS11c2VyLWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXVzZXItaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1VXNlcklucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBfc3Vic2NyaXB0aW9uO1xyXG4gIHVzZXJuYW1lQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcbiAgQElucHV0KCkgcGF0dGVybjtcclxuICBASW5wdXQoKSBjb2xvciA9ICdwcmltYXJ5JztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICdVc2VybmFtZSc7XHJcbiAgQElucHV0KCdjdXN0b20tY2xhc3MnKSBjdXN0b21DbGFzcztcclxuICBASW5wdXQoJ2VuYWJsZS11c2VyLWljb24nKSBlbmFibGVVc2VySWNvbiA9IHRydWU7XHJcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLW9uZScpIGVycm9yTWVzc2FnZU9uZSA9ICdDYW5ub3QgYmUgYmxhbmsuJztcclxuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtdHdvJykgZXJyb3JNZXNzYWdlVHdvID0gJ0ludmFsaWQgdmFsdWUuJztcclxuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtdGhyZWUnKSBlcnJvck1lc3NhZ2VUaHJlZSA9ICcnO1xyXG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS1mb3VyJykgZXJyb3JNZXNzYWdlRm91ciA9ICcnO1xyXG4gIEBJbnB1dCgndmFsdWUnKSB2YWx1ZSA9ICcnO1xyXG4gIEBJbnB1dCgnZGlzYWJsZWQnKVxyXG4gIHNldCBkaXNhYmxlKHZhbCkge1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC5kaXNhYmxlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC5lbmFibGUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgQElucHV0KCdlbmFibGUtcmVxdWlyZWQtdmFsaWRhdG9yJylcclxuICBzZXQgZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IodmFsKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3InLCB2YWwpO1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBJbnB1dCgnZW5hYmxlLXBhdHRlcm4tdmFsaWRhdG9yJylcclxuICBzZXQgZW5hYmxlUGF0dGVyblZhbGlkYXRvcnModmFsKSB7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnNldFZhbGlkYXRvcnMoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybih0aGlzLnBhdHRlcm4pXSk7XHJcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgIH1cclxuICB9XHJcbiAgQElucHV0KCdlbmFibGUtbWF4LWxlbi12YWxpZGF0b3InKVxyXG4gIHNldCBlbmFibGVNYXhMZW5WYWxpZGF0b3JzKHZhbCkge1xyXG4gICAgY29uc29sZS5sb2coJ2VuYWJsZU1heFZhbGlkYXRvcicsIHZhbCk7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5tYXhMZW5ndGgodmFsKSk7XHJcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgIH1cclxuICB9XHJcbiAgQElucHV0KCdlbmFibGUtbWluLWxlbi12YWxpZGF0b3InKVxyXG4gIHNldCBlbmFibGVNaW5MZW5WYWxpZGF0b3JzKHZhbCkge1xyXG4gICAgY29uc29sZS5sb2coJ2VuYWJsZU1pblZhbGlkYXRvcicsIHZhbCk7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5taW5MZW5ndGgodmFsKSk7XHJcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgIH1cclxuICB9XHJcbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25DaGFuZ2VBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIG1hdGNoZXIgPSBuZXcgTXlFcnJvclN0YXRlTWF0Y2hlcigpO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy51c2VybmFtZUNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xWYWx1ZSA9IHtcclxuICAgICAgICAgIGRpcnR5OiB0aGlzLnVzZXJuYW1lQ29udHJvbC5kaXJ0eSxcclxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnVzZXJuYW1lQ29udHJvbC5kaXNhYmxlZCxcclxuICAgICAgICAgIGVuYWJsZWQ6IHRoaXMudXNlcm5hbWVDb250cm9sLmVuYWJsZWQsXHJcbiAgICAgICAgICBlcnJvcnM6IHRoaXMudXNlcm5hbWVDb250cm9sLmVycm9ycyxcclxuICAgICAgICAgIGludmFsaWQ6IHRoaXMudXNlcm5hbWVDb250cm9sLmludmFsaWQsXHJcbiAgICAgICAgICBwcmlzdGluZTogdGhpcy51c2VybmFtZUNvbnRyb2wucHJpc3RpbmUsXHJcbiAgICAgICAgICBzdGF0dXM6IHRoaXMudXNlcm5hbWVDb250cm9sLnN0YXR1cyxcclxuICAgICAgICAgIHRvdWNoZWQ6IHRoaXMudXNlcm5hbWVDb250cm9sLnRvdWNoZWQsXHJcbiAgICAgICAgICB1bnRvdWNoZWQ6IHRoaXMudXNlcm5hbWVDb250cm9sLnVudG91Y2hlZCxcclxuICAgICAgICAgIHZhbGlkOiB0aGlzLnVzZXJuYW1lQ29udHJvbC52YWxpZCxcclxuICAgICAgICAgIHZhbGlkYXRvcjogdGhpcy51c2VybmFtZUNvbnRyb2wudmFsaWRhdG9yLFxyXG4gICAgICAgICAgdmFsdWU6IHRoaXMudXNlcm5hbWVDb250cm9sLnZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFjdGlvbi5lbWl0KGNvbnRyb2xWYWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gdGhpcy51c2VybmFtZUNvbnRyb2wuXHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ3VzZXJuYW1lQ29udHJvbCcsIHRoaXMudXNlcm5hbWVDb250cm9sKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RXJyb3JNZXNzYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudXNlcm5hbWVDb250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpID8gJ1lvdSBtdXN0IGVudGVyIGEgdmFsdWUnIDpcclxuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wuaGFzRXJyb3IoJ21pbmxlbmd0aCcpID8gJ3VzZXJuYW1lIHNob3VsZCBiZSBtb3JlIHRoYW4gMiBsZXR0ZXJzJyA6XHJcbiAgICAgICAgJyc7XHJcbiAgfVxyXG5cclxuICBuZ0Rlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19