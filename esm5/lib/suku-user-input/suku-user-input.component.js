/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-user-input/suku-user-input.component.ts
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
                    template: "<mat-form-field [class]=\"customClass\" [color]=\"color\">\n  <span matPrefix class=\"mr-2\" *ngIf=\"enableUserIcon\">\n    <mat-icon class=\"material-icons\">account_circle</mat-icon>\n  </span>\n  <input matInput [placeholder]=\"placeholder\" #t [formControl]=\"usernameControl\" name=\"usernameControl\"\n    (change)=\"onChangeAction.emit(t.value)\" [value]=\"value\">\n  <mat-error *ngIf=\"usernameControl.hasError('required')\">\n    {{errorMessageOne}}\n  </mat-error>\n  <mat-error *ngIf=\"usernameControl.hasError('pattern') && !usernameControl.hasError('required')\">\n    {{errorMessageTwo}}\n  </mat-error>\n  <mat-error *ngIf=\"usernameControl.hasError('maxLength')\">\n    {{errorMessageThree}}\n  </mat-error>\n  <mat-error *ngIf=\"usernameControl.hasError('minlength')\">\n    {{errorMessageFour}}\n  </mat-error>\n</mat-form-field>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS11c2VyLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXVzZXItaW5wdXQvc3VrdS11c2VyLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLFdBQVcsRUFBOEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHckY7Ozs7SUFBQTtJQUlBLENBQUM7Ozs7OztJQUhDLDBDQUFZOzs7OztJQUFaLFVBQWEsT0FBMkIsRUFBRSxJQUF3QztRQUNoRixPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7QUFFRDtJQThERTtRQXREQSxvQkFBZSxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTdCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxVQUFVLENBQUM7UUFFUCxtQkFBYyxHQUFHLElBQUksQ0FBQztRQUNyQixvQkFBZSxHQUFHLGtCQUFrQixDQUFDO1FBQ3JDLG9CQUFlLEdBQUcsZ0JBQWdCLENBQUM7UUFDakMsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUNuQyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBd0NqQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7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MEI7eUNBT2hDLEtBQUssU0FBQywwQkFBMEI7eUNBUWhDLEtBQUssU0FBQywwQkFBMEI7eUJBUWhDLE1BQU07aUNBQ04sTUFBTTs7SUF1Q1QsNkJBQUM7Q0FBQSxBQWxHRCxJQWtHQztTQTVGWSxzQkFBc0I7OztJQUNqQywrQ0FBYzs7SUFDZCxpREFBc0M7O0lBQ3RDLHlDQUFpQjs7SUFDakIsdUNBQTJCOztJQUMzQiw2Q0FBa0M7O0lBQ2xDLDZDQUFtQzs7SUFDbkMsZ0RBQWlEOztJQUNqRCxpREFBaUU7O0lBQ2pFLGlEQUErRDs7SUFDL0QsbURBQXFEOztJQUNyRCxrREFBbUQ7O0lBQ25ELHVDQUEyQjs7SUF3QzNCLHdDQUFzQzs7SUFDdEMsZ0RBQThDOztJQUU5Qyx5Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cERpcmVjdGl2ZSwgTmdGb3JtLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXJyb3JTdGF0ZU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbi8qKiBFcnJvciB3aGVuIGludmFsaWQgY29udHJvbCBpcyBkaXJ0eSwgdG91Y2hlZCwgb3Igc3VibWl0dGVkLiAqL1xuZXhwb3J0IGNsYXNzIE15RXJyb3JTdGF0ZU1hdGNoZXIgaW1wbGVtZW50cyBFcnJvclN0YXRlTWF0Y2hlciB7XG4gIGlzRXJyb3JTdGF0ZShjb250cm9sOiBGb3JtQ29udHJvbCB8IG51bGwsIGZvcm06IEZvcm1Hcm91cERpcmVjdGl2ZSB8IE5nRm9ybSB8IG51bGwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEoY29udHJvbCAmJiBjb250cm9sLmludmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkKSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS11c2VyLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtdXNlci1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtdXNlci1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VVc2VySW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBfc3Vic2NyaXB0aW9uO1xuICB1c2VybmFtZUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICBASW5wdXQoKSBwYXR0ZXJuO1xuICBASW5wdXQoKSBjb2xvciA9ICdwcmltYXJ5JztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnVXNlcm5hbWUnO1xuICBASW5wdXQoJ2N1c3RvbS1jbGFzcycpIGN1c3RvbUNsYXNzO1xuICBASW5wdXQoJ2VuYWJsZS11c2VyLWljb24nKSBlbmFibGVVc2VySWNvbiA9IHRydWU7XG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS1vbmUnKSBlcnJvck1lc3NhZ2VPbmUgPSAnQ2Fubm90IGJlIGJsYW5rLic7XG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS10d28nKSBlcnJvck1lc3NhZ2VUd28gPSAnSW52YWxpZCB2YWx1ZS4nO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtdGhyZWUnKSBlcnJvck1lc3NhZ2VUaHJlZSA9ICcnO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtZm91cicpIGVycm9yTWVzc2FnZUZvdXIgPSAnJztcbiAgQElucHV0KCd2YWx1ZScpIHZhbHVlID0gJyc7XG4gIEBJbnB1dCgnZGlzYWJsZWQnKVxuICBzZXQgZGlzYWJsZSh2YWwpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLmVuYWJsZSgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoJ2VuYWJsZS1yZXF1aXJlZC12YWxpZGF0b3InKVxuICBzZXQgZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IodmFsKSB7XG4gICAgY29uc29sZS5sb2coJ2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yJywgdmFsKTtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoJ2VuYWJsZS1wYXR0ZXJuLXZhbGlkYXRvcicpXG4gIHNldCBlbmFibGVQYXR0ZXJuVmFsaWRhdG9ycyh2YWwpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC5zZXRWYWxpZGF0b3JzKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5wYXR0ZXJuKV0pO1xuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoJ2VuYWJsZS1tYXgtbGVuLXZhbGlkYXRvcicpXG4gIHNldCBlbmFibGVNYXhMZW5WYWxpZGF0b3JzKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCdlbmFibGVNYXhWYWxpZGF0b3InLCB2YWwpO1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5tYXhMZW5ndGgodmFsKSk7XG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgnZW5hYmxlLW1pbi1sZW4tdmFsaWRhdG9yJylcbiAgc2V0IGVuYWJsZU1pbkxlblZhbGlkYXRvcnModmFsKSB7XG4gICAgY29uc29sZS5sb2coJ2VuYWJsZU1pblZhbGlkYXRvcicsIHZhbCk7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLm1pbkxlbmd0aCh2YWwpKTtcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG4gIH1cbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uQ2hhbmdlQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG1hdGNoZXIgPSBuZXcgTXlFcnJvclN0YXRlTWF0Y2hlcigpO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMudXNlcm5hbWVDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xWYWx1ZSA9IHtcbiAgICAgICAgICBkaXJ0eTogdGhpcy51c2VybmFtZUNvbnRyb2wuZGlydHksXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMudXNlcm5hbWVDb250cm9sLmRpc2FibGVkLFxuICAgICAgICAgIGVuYWJsZWQ6IHRoaXMudXNlcm5hbWVDb250cm9sLmVuYWJsZWQsXG4gICAgICAgICAgZXJyb3JzOiB0aGlzLnVzZXJuYW1lQ29udHJvbC5lcnJvcnMsXG4gICAgICAgICAgaW52YWxpZDogdGhpcy51c2VybmFtZUNvbnRyb2wuaW52YWxpZCxcbiAgICAgICAgICBwcmlzdGluZTogdGhpcy51c2VybmFtZUNvbnRyb2wucHJpc3RpbmUsXG4gICAgICAgICAgc3RhdHVzOiB0aGlzLnVzZXJuYW1lQ29udHJvbC5zdGF0dXMsXG4gICAgICAgICAgdG91Y2hlZDogdGhpcy51c2VybmFtZUNvbnRyb2wudG91Y2hlZCxcbiAgICAgICAgICB1bnRvdWNoZWQ6IHRoaXMudXNlcm5hbWVDb250cm9sLnVudG91Y2hlZCxcbiAgICAgICAgICB2YWxpZDogdGhpcy51c2VybmFtZUNvbnRyb2wudmFsaWQsXG4gICAgICAgICAgdmFsaWRhdG9yOiB0aGlzLnVzZXJuYW1lQ29udHJvbC52YWxpZGF0b3IsXG4gICAgICAgICAgdmFsdWU6IHRoaXMudXNlcm5hbWVDb250cm9sLnZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYWN0aW9uLmVtaXQoY29udHJvbFZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoaXMudXNlcm5hbWVDb250cm9sLlxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ3VzZXJuYW1lQ29udHJvbCcsIHRoaXMudXNlcm5hbWVDb250cm9sKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEVycm9yTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy51c2VybmFtZUNvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJykgPyAnWW91IG11c3QgZW50ZXIgYSB2YWx1ZScgOlxuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wuaGFzRXJyb3IoJ21pbmxlbmd0aCcpID8gJ3VzZXJuYW1lIHNob3VsZCBiZSBtb3JlIHRoYW4gMiBsZXR0ZXJzJyA6XG4gICAgICAgICcnO1xuICB9XG5cbiAgbmdEZXN0cm95KCkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=