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
        this.usernameControl = new FormControl();
        this.color = 'primary';
        this.placeholder = 'Username';
        this.enableUserIcon = true;
        this.errorMessageOne = 'cannot be blank.';
        this.errorMessageTwo = '';
        this.errorMessageThree = '';
        this.errorMessageFour = '';
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.action = new EventEmitter();
        this.matcher = new MyErrorStateMatcher();
    }
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
                this.usernameControl.setValidators(Validators.pattern(this.pattern));
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
                _this.action.emit(value);
            }
            else {
                // this.usernameControl.
            }
            console.log('usernameControl', _this.usernameControl);
        }));
    };
    // getErrorMessage() {
    //   return this.usernameControl.hasError('required') ? 'You must enter a value' :
    //       this.usernameControl.hasError('email') ? 'Not a valid email' :
    //           '';
    // }
    // getErrorMessage() {
    //   return this.usernameControl.hasError('required') ? 'You must enter a value' :
    //       this.usernameControl.hasError('email') ? 'Not a valid email' :
    //           '';
    // }
    /**
     * @return {?}
     */
    SukuUserInputComponent.prototype.getErrorMessage = 
    // getErrorMessage() {
    //   return this.usernameControl.hasError('required') ? 'You must enter a value' :
    //       this.usernameControl.hasError('email') ? 'Not a valid email' :
    //           '';
    // }
    /**
     * @return {?}
     */
    function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
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
                    template: "<mat-form-field [class]=\"customClass\" [color]=\"color\">\n  <span matPrefix class=\"mr-2\" *ngIf=\"enableUserIcon\">\n    <mat-icon class=\"material-icons\">account_circle</mat-icon>\n  </span>\n  <input matInput [placeholder]=\"placeholder\" [formControl]=\"usernameControl\"  [errorStateMatcher]=\"matcher\">\n  <!-- <mat-error *ngIf=\"usernameControl.invalid\">{{getErrorMessage()}}</mat-error> -->\n  <mat-error *ngIf=\"usernameControl.hasError('required')\">\n    {{errorMessageOne}}\n  </mat-error>\n  <mat-error *ngIf=\"usernameControl.hasError('pattern') && !usernameControl.hasError('required')\">\n    {{errorMessageTwo}}\n  </mat-error>\n  <mat-error *ngIf=\"usernameControl.hasError('maxLength')\">\n    {{errorMessageThree}}\n  </mat-error>\n  <mat-error *ngIf=\"usernameControl.hasError('minlength')\">\n    {{errorMessageFour}}\n  </mat-error>\n</mat-form-field>\n{{ usernameControl.hasError('required')}}\n\n<!-- \n<div class=\"example-container\">\n    <mat-form-field>\n      <input matInput placeholder=\"Enter your email\" [formControl]=\"usernameControl\"  [errorStateMatcher]=\"matcher\">\n      <mat-error *ngIf=\"usernameControl.invalid\">{{getErrorMessage()}}</mat-error>\n    </mat-form-field>\n  </div> -->\n  ",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.input-full-width{width:100%}::ng-deep .mat-input-element{padding:1%!important}.material-icons{font-size:var(--suku-font-size-6)}.mat-form-field.ng-dirty.ng-invalid .mat-form-field-underline{background-color:red}.mat-form-field.ng-dirty.ng-invalid .mat-form-field-label{color:red}"]
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
        enableRequiredValidator: [{ type: Input, args: ['enable-required-validator',] }],
        enablePatternValidators: [{ type: Input, args: ['enable-pattern-validator',] }],
        enableMaxLenValidators: [{ type: Input, args: ['enable-max-len-validator',] }],
        enableMinLenValidators: [{ type: Input, args: ['enable-min-len-validator',] }],
        action: [{ type: Output }]
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
    SukuUserInputComponent.prototype.email;
    /** @type {?} */
    SukuUserInputComponent.prototype.action;
    /** @type {?} */
    SukuUserInputComponent.prototype.matcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS11c2VyLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXVzZXItaW5wdXQvc3VrdS11c2VyLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsV0FBVyxFQUE4QixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUdyRjs7OztJQUFBO0lBSUEsQ0FBQzs7Ozs7O0lBSEMsMENBQVk7Ozs7O0lBQVosVUFBYSxPQUEyQixFQUFFLElBQXdDO1FBQ2hGLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7OztBQUVEO0lBcURFO1FBN0NBLG9CQUFlLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUUzQixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsVUFBVSxDQUFDO1FBRVAsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDckIsb0JBQWUsR0FBRyxrQkFBa0IsQ0FBQztRQUNyQyxvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNuQixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDeEIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBZ0NuRCxVQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMzRCxXQUFNLEdBQUcs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QUlFLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUssU0FBQyxjQUFjO2lDQUNwQixLQUFLLFNBQUMsa0JBQWtCO2tDQUN4QixLQUFLLFNBQUMsbUJBQW1CO2tDQUN6QixLQUFLLFNBQUMsbUJBQW1CO29DQUN6QixLQUFLLFNBQUMscUJBQXFCO21DQUMzQixLQUFLLFNBQUMsb0JBQW9COzBDQUMxQixLQUFLLFNBQUMsMkJBQTJCOzBDQVFqQyxLQUFLLFNBQUMsMEJBQTBCO3lDQU9oQyxLQUFLLFNBQUMsMEJBQTBCO3lDQVFoQyxLQUFLLFNBQUMsMEJBQTBCO3lCQVNoQyxNQUFNOztJQWlDVCw2QkFBQztDQUFBLEFBbkZELElBbUZDO1NBN0VZLHNCQUFzQjs7O0lBQ2pDLCtDQUFjOztJQUNkLGlEQUFvQzs7SUFDcEMseUNBQWlCOztJQUNqQix1Q0FBMkI7O0lBQzNCLDZDQUFrQzs7SUFDbEMsNkNBQW1DOztJQUNuQyxnREFBaUQ7O0lBQ2pELGlEQUFpRTs7SUFDakUsaURBQWlEOztJQUNqRCxtREFBcUQ7O0lBQ3JELGtEQUFtRDs7SUFnQ25ELHVDQUFxRTs7SUFDckUsd0NBQXNDOztJQUV0Qyx5Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cERpcmVjdGl2ZSwgTmdGb3JtLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXJyb3JTdGF0ZU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbi8qKiBFcnJvciB3aGVuIGludmFsaWQgY29udHJvbCBpcyBkaXJ0eSwgdG91Y2hlZCwgb3Igc3VibWl0dGVkLiAqL1xuZXhwb3J0IGNsYXNzIE15RXJyb3JTdGF0ZU1hdGNoZXIgaW1wbGVtZW50cyBFcnJvclN0YXRlTWF0Y2hlciB7XG4gIGlzRXJyb3JTdGF0ZShjb250cm9sOiBGb3JtQ29udHJvbCB8IG51bGwsIGZvcm06IEZvcm1Hcm91cERpcmVjdGl2ZSB8IE5nRm9ybSB8IG51bGwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEoY29udHJvbCAmJiBjb250cm9sLmludmFsaWQgJiYgKGNvbnRyb2wuZGlydHkgfHwgY29udHJvbC50b3VjaGVkKSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS11c2VyLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtdXNlci1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtdXNlci1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VVc2VySW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBfc3Vic2NyaXB0aW9uO1xuICB1c2VybmFtZUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgQElucHV0KCkgcGF0dGVybjtcbiAgQElucHV0KCkgY29sb3IgPSAncHJpbWFyeSc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ1VzZXJuYW1lJztcbiAgQElucHV0KCdjdXN0b20tY2xhc3MnKSBjdXN0b21DbGFzcztcbiAgQElucHV0KCdlbmFibGUtdXNlci1pY29uJykgZW5hYmxlVXNlckljb24gPSB0cnVlO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2Utb25lJykgZXJyb3JNZXNzYWdlT25lID0gJ2Nhbm5vdCBiZSBibGFuay4nO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtdHdvJykgZXJyb3JNZXNzYWdlVHdvID0gJyc7XG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS10aHJlZScpIGVycm9yTWVzc2FnZVRocmVlID0gJyc7XG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS1mb3VyJykgZXJyb3JNZXNzYWdlRm91ciA9ICcnO1xuICBASW5wdXQoJ2VuYWJsZS1yZXF1aXJlZC12YWxpZGF0b3InKVxuICBzZXQgZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3IodmFsKSB7XG4gICAgY29uc29sZS5sb2coJ2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yJywgdmFsKTtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoJ2VuYWJsZS1wYXR0ZXJuLXZhbGlkYXRvcicpXG4gIHNldCBlbmFibGVQYXR0ZXJuVmFsaWRhdG9ycyh2YWwpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucGF0dGVybih0aGlzLnBhdHRlcm4pKTtcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCdlbmFibGUtbWF4LWxlbi12YWxpZGF0b3InKVxuICBzZXQgZW5hYmxlTWF4TGVuVmFsaWRhdG9ycyh2YWwpIHtcbiAgICBjb25zb2xlLmxvZygnZW5hYmxlTWF4VmFsaWRhdG9yJywgdmFsKTtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMubWF4TGVuZ3RoKHZhbCkpO1xuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoJ2VuYWJsZS1taW4tbGVuLXZhbGlkYXRvcicpXG4gIHNldCBlbmFibGVNaW5MZW5WYWxpZGF0b3JzKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCdlbmFibGVNaW5WYWxpZGF0b3InLCB2YWwpO1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5taW5MZW5ndGgodmFsKSk7XG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuICB9XG4gIGVtYWlsID0gbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF0pO1xuICBAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG1hdGNoZXIgPSBuZXcgTXlFcnJvclN0YXRlTWF0Y2hlcigpO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMudXNlcm5hbWVDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uLmVtaXQodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhpcy51c2VybmFtZUNvbnRyb2wuXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygndXNlcm5hbWVDb250cm9sJywgdGhpcy51c2VybmFtZUNvbnRyb2wpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gZ2V0RXJyb3JNZXNzYWdlKCkge1xuICAvLyAgIHJldHVybiB0aGlzLnVzZXJuYW1lQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKSA/ICdZb3UgbXVzdCBlbnRlciBhIHZhbHVlJyA6XG4gIC8vICAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLmhhc0Vycm9yKCdlbWFpbCcpID8gJ05vdCBhIHZhbGlkIGVtYWlsJyA6XG4gIC8vICAgICAgICAgICAnJztcbiAgLy8gfVxuICBnZXRFcnJvck1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1haWwuaGFzRXJyb3IoJ3JlcXVpcmVkJykgPyAnWW91IG11c3QgZW50ZXIgYSB2YWx1ZScgOlxuICAgICAgdGhpcy5lbWFpbC5oYXNFcnJvcignZW1haWwnKSA/ICdOb3QgYSB2YWxpZCBlbWFpbCcgOlxuICAgICAgICAnJztcbiAgfVxuXG5cblxuXG4gIG5nRGVzdHJveSgpIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG4iXX0=