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
        this.action = new EventEmitter();
        this.onChangeAction = new EventEmitter();
        this.matcher = new MyErrorStateMatcher();
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
                template: "<mat-form-field [class]=\"customClass\" [color]=\"color\">\n  <span matPrefix class=\"mr-2\" *ngIf=\"enableUserIcon\">\n    <mat-icon class=\"material-icons\">account_circle</mat-icon>\n  </span>\n  <input matInput [placeholder]=\"placeholder\" #t [formControl]=\"usernameControl\" name=\"usernameControl\"\n    (change)=\"onChangeAction.emit(t.value)\">\n  <mat-error *ngIf=\"usernameControl.hasError('required')\">\n    {{errorMessageOne}}\n  </mat-error>\n  <mat-error *ngIf=\"usernameControl.hasError('pattern') && !usernameControl.hasError('required')\">\n    {{errorMessageTwo}}\n  </mat-error>\n  <mat-error *ngIf=\"usernameControl.hasError('maxLength')\">\n    {{errorMessageThree}}\n  </mat-error>\n  <mat-error *ngIf=\"usernameControl.hasError('minlength')\">\n    {{errorMessageFour}}\n  </mat-error>\n</mat-form-field>",
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
    SukuUserInputComponent.prototype.action;
    /** @type {?} */
    SukuUserInputComponent.prototype.onChangeAction;
    /** @type {?} */
    SukuUserInputComponent.prototype.matcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS11c2VyLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXVzZXItaW5wdXQvc3VrdS11c2VyLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsV0FBVyxFQUE4QixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUdyRixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFDOUIsWUFBWSxDQUFDLE9BQTJCLEVBQUUsSUFBd0M7UUFDaEYsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztDQUNGO0FBUUQsTUFBTSxPQUFPLHNCQUFzQjtJQStDakM7UUE3Q0Esb0JBQWUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU3QixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsVUFBVSxDQUFDO1FBRVAsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDckIsb0JBQWUsR0FBRyxrQkFBa0IsQ0FBQztRQUNyQyxvQkFBZSxHQUFHLGdCQUFnQixDQUFDO1FBQ2pDLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN4QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFnQ3pDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5QyxZQUFPLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO0lBQ3BCLENBQUM7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QUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7Z0JBQ3JGLEVBQUUsQ0FBQztJQUNULENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7WUF4RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDAwQkFBK0M7Z0JBRS9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7Ozs7c0JBSUUsS0FBSztvQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSyxTQUFDLGNBQWM7NkJBQ3BCLEtBQUssU0FBQyxrQkFBa0I7OEJBQ3hCLEtBQUssU0FBQyxtQkFBbUI7OEJBQ3pCLEtBQUssU0FBQyxtQkFBbUI7Z0NBQ3pCLEtBQUssU0FBQyxxQkFBcUI7K0JBQzNCLEtBQUssU0FBQyxvQkFBb0I7c0NBQzFCLEtBQUssU0FBQywyQkFBMkI7c0NBUWpDLEtBQUssU0FBQywwQkFBMEI7cUNBT2hDLEtBQUssU0FBQywwQkFBMEI7cUNBUWhDLEtBQUssU0FBQywwQkFBMEI7cUJBUWhDLE1BQU07NkJBQ04sTUFBTTs7OztJQTNDUCwrQ0FBYzs7SUFDZCxpREFBc0M7O0lBQ3RDLHlDQUFpQjs7SUFDakIsdUNBQTJCOztJQUMzQiw2Q0FBa0M7O0lBQ2xDLDZDQUFtQzs7SUFDbkMsZ0RBQWlEOztJQUNqRCxpREFBaUU7O0lBQ2pFLGlEQUErRDs7SUFDL0QsbURBQXFEOztJQUNyRCxrREFBbUQ7O0lBZ0NuRCx3Q0FBc0M7O0lBQ3RDLGdEQUE4Qzs7SUFFOUMseUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nRm9ybSwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVycm9yU3RhdGVNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG4vKiogRXJyb3Igd2hlbiBpbnZhbGlkIGNvbnRyb2wgaXMgZGlydHksIHRvdWNoZWQsIG9yIHN1Ym1pdHRlZC4gKi9cbmV4cG9ydCBjbGFzcyBNeUVycm9yU3RhdGVNYXRjaGVyIGltcGxlbWVudHMgRXJyb3JTdGF0ZU1hdGNoZXIge1xuICBpc0Vycm9yU3RhdGUoY29udHJvbDogRm9ybUNvbnRyb2wgfCBudWxsLCBmb3JtOiBGb3JtR3JvdXBEaXJlY3RpdmUgfCBOZ0Zvcm0gfCBudWxsKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKGNvbnRyb2wgJiYgY29udHJvbC5pbnZhbGlkICYmIChjb250cm9sLmRpcnR5IHx8IGNvbnRyb2wudG91Y2hlZCkpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtdXNlci1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXVzZXItaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXVzZXItaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1VXNlcklucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgX3N1YnNjcmlwdGlvbjtcbiAgdXNlcm5hbWVDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgQElucHV0KCkgcGF0dGVybjtcbiAgQElucHV0KCkgY29sb3IgPSAncHJpbWFyeSc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ1VzZXJuYW1lJztcbiAgQElucHV0KCdjdXN0b20tY2xhc3MnKSBjdXN0b21DbGFzcztcbiAgQElucHV0KCdlbmFibGUtdXNlci1pY29uJykgZW5hYmxlVXNlckljb24gPSB0cnVlO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2Utb25lJykgZXJyb3JNZXNzYWdlT25lID0gJ0Nhbm5vdCBiZSBibGFuay4nO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtdHdvJykgZXJyb3JNZXNzYWdlVHdvID0gJ0ludmFsaWQgdmFsdWUuJztcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLXRocmVlJykgZXJyb3JNZXNzYWdlVGhyZWUgPSAnJztcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLWZvdXInKSBlcnJvck1lc3NhZ2VGb3VyID0gJyc7XG4gIEBJbnB1dCgnZW5hYmxlLXJlcXVpcmVkLXZhbGlkYXRvcicpXG4gIHNldCBlbmFibGVSZXF1aXJlZFZhbGlkYXRvcih2YWwpIHtcbiAgICBjb25zb2xlLmxvZygnZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3InLCB2YWwpO1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgnZW5hYmxlLXBhdHRlcm4tdmFsaWRhdG9yJylcbiAgc2V0IGVuYWJsZVBhdHRlcm5WYWxpZGF0b3JzKHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnNldFZhbGlkYXRvcnMoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybih0aGlzLnBhdHRlcm4pXSk7XG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgnZW5hYmxlLW1heC1sZW4tdmFsaWRhdG9yJylcbiAgc2V0IGVuYWJsZU1heExlblZhbGlkYXRvcnModmFsKSB7XG4gICAgY29uc29sZS5sb2coJ2VuYWJsZU1heFZhbGlkYXRvcicsIHZhbCk7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLm1heExlbmd0aCh2YWwpKTtcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCdlbmFibGUtbWluLWxlbi12YWxpZGF0b3InKVxuICBzZXQgZW5hYmxlTWluTGVuVmFsaWRhdG9ycyh2YWwpIHtcbiAgICBjb25zb2xlLmxvZygnZW5hYmxlTWluVmFsaWRhdG9yJywgdmFsKTtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMubWluTGVuZ3RoKHZhbCkpO1xuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfVxuICBAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25DaGFuZ2VBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbWF0Y2hlciA9IG5ldyBNeUVycm9yU3RhdGVNYXRjaGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy51c2VybmFtZUNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29uc3QgY29udHJvbFZhbHVlID0ge1xuICAgICAgICAgIGRpcnR5OiB0aGlzLnVzZXJuYW1lQ29udHJvbC5kaXJ0eSxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy51c2VybmFtZUNvbnRyb2wuZGlzYWJsZWQsXG4gICAgICAgICAgZW5hYmxlZDogdGhpcy51c2VybmFtZUNvbnRyb2wuZW5hYmxlZCxcbiAgICAgICAgICBlcnJvcnM6IHRoaXMudXNlcm5hbWVDb250cm9sLmVycm9ycyxcbiAgICAgICAgICBpbnZhbGlkOiB0aGlzLnVzZXJuYW1lQ29udHJvbC5pbnZhbGlkLFxuICAgICAgICAgIHByaXN0aW5lOiB0aGlzLnVzZXJuYW1lQ29udHJvbC5wcmlzdGluZSxcbiAgICAgICAgICBzdGF0dXM6IHRoaXMudXNlcm5hbWVDb250cm9sLnN0YXR1cyxcbiAgICAgICAgICB0b3VjaGVkOiB0aGlzLnVzZXJuYW1lQ29udHJvbC50b3VjaGVkLFxuICAgICAgICAgIHVudG91Y2hlZDogdGhpcy51c2VybmFtZUNvbnRyb2wudW50b3VjaGVkLFxuICAgICAgICAgIHZhbGlkOiB0aGlzLnVzZXJuYW1lQ29udHJvbC52YWxpZCxcbiAgICAgICAgICB2YWxpZGF0b3I6IHRoaXMudXNlcm5hbWVDb250cm9sLnZhbGlkYXRvcixcbiAgICAgICAgICB2YWx1ZTogdGhpcy51c2VybmFtZUNvbnRyb2wudmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hY3Rpb24uZW1pdChjb250cm9sVmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhpcy51c2VybmFtZUNvbnRyb2wuXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygndXNlcm5hbWVDb250cm9sJywgdGhpcy51c2VybmFtZUNvbnRyb2wpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RXJyb3JNZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLnVzZXJuYW1lQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKSA/ICdZb3UgbXVzdCBlbnRlciBhIHZhbHVlJyA6XG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC5oYXNFcnJvcignbWlubGVuZ3RoJykgPyAndXNlcm5hbWUgc2hvdWxkIGJlIG1vcmUgdGhhbiAyIGxldHRlcnMnIDpcbiAgICAgICAgJyc7XG4gIH1cblxuICBuZ0Rlc3Ryb3koKSB7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==