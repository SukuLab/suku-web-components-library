/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
/**
 * Error when invalid control is dirty, touched, or submitted.
 */
export class MyErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        return !!(control && control.invalid && (control.dirty || control.touched));
    }
}
export class SukuUserInputComponent {
    constructor() {
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
    /**
     * @param {?} val
     * @return {?}
     */
    set disable(val) {
        if (val) {
            this.usernameControl.disable();
        }
        else {
            this.usernameControl.enable();
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set enableRequiredValidator(val) {
        console.log('enableRequiredValidator', val);
        if (val) {
            this.usernameControl.setValidators(Validators.required);
            this.usernameControl.updateValueAndValidity();
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set enablePatternValidators(val) {
        if (val) {
            this.usernameControl.setValidators([Validators.required, Validators.pattern(this.pattern)]);
            this.usernameControl.updateValueAndValidity();
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set enableMaxLenValidators(val) {
        console.log('enableMaxValidator', val);
        if (val) {
            this.usernameControl.setValidators(Validators.maxLength(val));
            this.usernameControl.updateValueAndValidity();
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set enableMinLenValidators(val) {
        console.log('enableMinValidator', val);
        if (val) {
            this.usernameControl.setValidators(Validators.minLength(val));
            this.usernameControl.updateValueAndValidity();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._subscription = this.usernameControl.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (value) {
                /** @type {?} */
                const controlValue = {
                    dirty: this.usernameControl.dirty,
                    disabled: this.usernameControl.disabled,
                    enabled: this.usernameControl.enabled,
                    errors: this.usernameControl.errors,
                    invalid: this.usernameControl.invalid,
                    pristine: this.usernameControl.pristine,
                    status: this.usernameControl.status,
                    touched: this.usernameControl.touched,
                    untouched: this.usernameControl.untouched,
                    valid: this.usernameControl.valid,
                    validator: this.usernameControl.validator,
                    value: this.usernameControl.value
                };
                this.action.emit(controlValue);
            }
            else {
                // this.usernameControl.
            }
            console.log('usernameControl', this.usernameControl);
        }));
    }
    /**
     * @return {?}
     */
    getErrorMessage() {
        return this.usernameControl.hasError('required') ? 'You must enter a value' :
            this.usernameControl.hasError('minlength') ? 'username should be more than 2 letters' :
                '';
    }
    /**
     * @return {?}
     */
    ngDestroy() {
        this._subscription.unsubscribe();
    }
}
SukuUserInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-user-input',
                template: "<mat-form-field [class]=\"customClass\" [color]=\"color\">\r\n  <span matPrefix class=\"mr-2\" *ngIf=\"enableUserIcon\">\r\n    <mat-icon class=\"material-icons\">account_circle</mat-icon>\r\n  </span>\r\n  <input matInput [placeholder]=\"placeholder\" #t [formControl]=\"usernameControl\" name=\"usernameControl\"\r\n    (change)=\"onChangeAction.emit(t.value)\" [value]=\"value\">\r\n  <mat-error *ngIf=\"usernameControl.hasError('required')\">\r\n    {{errorMessageOne}}\r\n  </mat-error>\r\n  <mat-error *ngIf=\"usernameControl.hasError('pattern') && !usernameControl.hasError('required')\">\r\n    {{errorMessageTwo}}\r\n  </mat-error>\r\n  <mat-error *ngIf=\"usernameControl.hasError('maxLength')\">\r\n    {{errorMessageThree}}\r\n  </mat-error>\r\n  <mat-error *ngIf=\"usernameControl.hasError('minlength')\">\r\n    {{errorMessageFour}}\r\n  </mat-error>\r\n</mat-form-field>",
                encapsulation: ViewEncapsulation.None,
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.input-full-width{width:100%}::ng-deep .mat-input-element{padding:1%!important}.material-icons{font-size:var(--suku-font-size-6)}.mat-form-field.ng-dirty.ng-invalid .mat-form-field-underline{background-color:red}.mat-form-field.ng-dirty.ng-invalid .mat-form-field-label{color:red}.mat-form-field-subscript-wrapper{font-size:90%!important}"]
            }] }
];
/** @nocollapse */
SukuUserInputComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS11c2VyLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXVzZXItaW5wdXQvc3VrdS11c2VyLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsV0FBVyxFQUE4QixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUdyRixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFDOUIsWUFBWSxDQUFDLE9BQTJCLEVBQUUsSUFBd0M7UUFDaEYsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztDQUNGO0FBUUQsTUFBTSxPQUFPLHNCQUFzQjtJQXdEakM7UUF0REEsb0JBQWUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU3QixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsVUFBVSxDQUFDO1FBRVAsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDckIsb0JBQWUsR0FBRyxrQkFBa0IsQ0FBQztRQUNyQyxvQkFBZSxHQUFHLGdCQUFnQixDQUFDO1FBQ2pDLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN4QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDbkMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQXdDakIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlDLFlBQU8sR0FBRyxJQUFJLG1C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a0M7O0lBQ2xDLDZDQUFtQzs7SUFDbkMsZ0RBQWlEOztJQUNqRCxpREFBaUU7O0lBQ2pFLGlEQUErRDs7SUFDL0QsbURBQXFEOztJQUNyRCxrREFBbUQ7O0lBQ25ELHVDQUEyQjs7SUF3QzNCLHdDQUFzQzs7SUFDdEMsZ0RBQThDOztJQUU5Qyx5Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwRGlyZWN0aXZlLCBOZ0Zvcm0sIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEVycm9yU3RhdGVNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbi8qKiBFcnJvciB3aGVuIGludmFsaWQgY29udHJvbCBpcyBkaXJ0eSwgdG91Y2hlZCwgb3Igc3VibWl0dGVkLiAqL1xyXG5leHBvcnQgY2xhc3MgTXlFcnJvclN0YXRlTWF0Y2hlciBpbXBsZW1lbnRzIEVycm9yU3RhdGVNYXRjaGVyIHtcclxuICBpc0Vycm9yU3RhdGUoY29udHJvbDogRm9ybUNvbnRyb2wgfCBudWxsLCBmb3JtOiBGb3JtR3JvdXBEaXJlY3RpdmUgfCBOZ0Zvcm0gfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISEoY29udHJvbCAmJiBjb250cm9sLmludmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkKSk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtdXNlci1pbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtdXNlci1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS11c2VyLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdVVzZXJJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgX3N1YnNjcmlwdGlvbjtcclxuICB1c2VybmFtZUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIEBJbnB1dCgpIHBhdHRlcm47XHJcbiAgQElucHV0KCkgY29sb3IgPSAncHJpbWFyeSc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnVXNlcm5hbWUnO1xyXG4gIEBJbnB1dCgnY3VzdG9tLWNsYXNzJykgY3VzdG9tQ2xhc3M7XHJcbiAgQElucHV0KCdlbmFibGUtdXNlci1pY29uJykgZW5hYmxlVXNlckljb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS1vbmUnKSBlcnJvck1lc3NhZ2VPbmUgPSAnQ2Fubm90IGJlIGJsYW5rLic7XHJcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLXR3bycpIGVycm9yTWVzc2FnZVR3byA9ICdJbnZhbGlkIHZhbHVlLic7XHJcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLXRocmVlJykgZXJyb3JNZXNzYWdlVGhyZWUgPSAnJztcclxuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtZm91cicpIGVycm9yTWVzc2FnZUZvdXIgPSAnJztcclxuICBASW5wdXQoJ3ZhbHVlJykgdmFsdWUgPSAnJztcclxuICBASW5wdXQoJ2Rpc2FibGVkJylcclxuICBzZXQgZGlzYWJsZSh2YWwpIHtcclxuICAgIGlmICh2YWwpIHtcclxuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wuZW5hYmxlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBJbnB1dCgnZW5hYmxlLXJlcXVpcmVkLXZhbGlkYXRvcicpXHJcbiAgc2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yKHZhbCkge1xyXG4gICAgY29uc29sZS5sb2coJ2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yJywgdmFsKTtcclxuICAgIGlmICh2YWwpIHtcclxuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBASW5wdXQoJ2VuYWJsZS1wYXR0ZXJuLXZhbGlkYXRvcicpXHJcbiAgc2V0IGVuYWJsZVBhdHRlcm5WYWxpZGF0b3JzKHZhbCkge1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC5zZXRWYWxpZGF0b3JzKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5wYXR0ZXJuKV0pO1xyXG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBJbnB1dCgnZW5hYmxlLW1heC1sZW4tdmFsaWRhdG9yJylcclxuICBzZXQgZW5hYmxlTWF4TGVuVmFsaWRhdG9ycyh2YWwpIHtcclxuICAgIGNvbnNvbGUubG9nKCdlbmFibGVNYXhWYWxpZGF0b3InLCB2YWwpO1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMubWF4TGVuZ3RoKHZhbCkpO1xyXG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBJbnB1dCgnZW5hYmxlLW1pbi1sZW4tdmFsaWRhdG9yJylcclxuICBzZXQgZW5hYmxlTWluTGVuVmFsaWRhdG9ycyh2YWwpIHtcclxuICAgIGNvbnNvbGUubG9nKCdlbmFibGVNaW5WYWxpZGF0b3InLCB2YWwpO1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMubWluTGVuZ3RoKHZhbCkpO1xyXG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBtYXRjaGVyID0gbmV3IE15RXJyb3JTdGF0ZU1hdGNoZXIoKTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMudXNlcm5hbWVDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICBjb25zdCBjb250cm9sVmFsdWUgPSB7XHJcbiAgICAgICAgICBkaXJ0eTogdGhpcy51c2VybmFtZUNvbnRyb2wuZGlydHksXHJcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy51c2VybmFtZUNvbnRyb2wuZGlzYWJsZWQsXHJcbiAgICAgICAgICBlbmFibGVkOiB0aGlzLnVzZXJuYW1lQ29udHJvbC5lbmFibGVkLFxyXG4gICAgICAgICAgZXJyb3JzOiB0aGlzLnVzZXJuYW1lQ29udHJvbC5lcnJvcnMsXHJcbiAgICAgICAgICBpbnZhbGlkOiB0aGlzLnVzZXJuYW1lQ29udHJvbC5pbnZhbGlkLFxyXG4gICAgICAgICAgcHJpc3RpbmU6IHRoaXMudXNlcm5hbWVDb250cm9sLnByaXN0aW5lLFxyXG4gICAgICAgICAgc3RhdHVzOiB0aGlzLnVzZXJuYW1lQ29udHJvbC5zdGF0dXMsXHJcbiAgICAgICAgICB0b3VjaGVkOiB0aGlzLnVzZXJuYW1lQ29udHJvbC50b3VjaGVkLFxyXG4gICAgICAgICAgdW50b3VjaGVkOiB0aGlzLnVzZXJuYW1lQ29udHJvbC51bnRvdWNoZWQsXHJcbiAgICAgICAgICB2YWxpZDogdGhpcy51c2VybmFtZUNvbnRyb2wudmFsaWQsXHJcbiAgICAgICAgICB2YWxpZGF0b3I6IHRoaXMudXNlcm5hbWVDb250cm9sLnZhbGlkYXRvcixcclxuICAgICAgICAgIHZhbHVlOiB0aGlzLnVzZXJuYW1lQ29udHJvbC52YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hY3Rpb24uZW1pdChjb250cm9sVmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHRoaXMudXNlcm5hbWVDb250cm9sLlxyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCd1c2VybmFtZUNvbnRyb2wnLCB0aGlzLnVzZXJuYW1lQ29udHJvbCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEVycm9yTWVzc2FnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnVzZXJuYW1lQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKSA/ICdZb3UgbXVzdCBlbnRlciBhIHZhbHVlJyA6XHJcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLmhhc0Vycm9yKCdtaW5sZW5ndGgnKSA/ICd1c2VybmFtZSBzaG91bGQgYmUgbW9yZSB0aGFuIDIgbGV0dGVycycgOlxyXG4gICAgICAgICcnO1xyXG4gIH1cclxuXHJcbiAgbmdEZXN0cm95KCkge1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==