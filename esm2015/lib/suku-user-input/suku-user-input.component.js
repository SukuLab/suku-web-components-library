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
        this.errorMessageOne = 'cannot be blank.';
        this.errorMessageTwo = '';
        this.errorMessageThree = '';
        this.errorMessageFour = '';
        this.action = new EventEmitter();
        this.email = new FormControl('', [Validators.required, Validators.email]);
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
            this.usernameControl.setValidators(Validators.pattern(this.pattern));
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
                this.action.emit(value);
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
                template: "<mat-form-field [class]=\"customClass\" [color]=\"color\">\n  <span matPrefix class=\"mr-2\" *ngIf=\"enableUserIcon\">\n    <mat-icon class=\"material-icons\">account_circle</mat-icon>\n  </span>\n  <input matInput [placeholder]=\"placeholder\" [formControl]=\"usernameControl\" name=\"usernameControl\">\n  <mat-error *ngIf=\"usernameControl.invalid\">{{getErrorMessage()}}</mat-error>\n  <mat-error *ngIf=\"usernameControl.hasError('required')\">\n    {{errorMessageOne}}\n  </mat-error>\n  <mat-error *ngIf=\"usernameControl.hasError('pattern') && !usernameControl.hasError('required')\">\n    {{errorMessageTwo}}\n  </mat-error>\n  <mat-error *ngIf=\"usernameControl.hasError('maxLength')\">\n    {{errorMessageThree}}\n  </mat-error>\n  <mat-error *ngIf=\"usernameControl.hasError('minlength')\">\n    {{errorMessageFour}}\n  </mat-error>\n</mat-form-field>",
                encapsulation: ViewEncapsulation.None,
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.input-full-width{width:100%}::ng-deep .mat-input-element{padding:1%!important}.material-icons{font-size:var(--suku-font-size-6)}.mat-form-field.ng-dirty.ng-invalid .mat-form-field-underline{background-color:red}.mat-form-field.ng-dirty.ng-invalid .mat-form-field-label{color:red}"]
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
    action: [{ type: Output }]
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
    SukuUserInputComponent.prototype.email;
    /** @type {?} */
    SukuUserInputComponent.prototype.matcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS11c2VyLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXVzZXItaW5wdXQvc3VrdS11c2VyLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsV0FBVyxFQUE4QixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUdyRixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFDOUIsWUFBWSxDQUFDLE9BQTJCLEVBQUUsSUFBd0M7UUFDaEYsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztDQUNGO0FBUUQsTUFBTSxPQUFPLHNCQUFzQjtJQStDakM7UUE3Q0Esb0JBQWUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU3QixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsVUFBVSxDQUFDO1FBRVAsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDckIsb0JBQWUsR0FBRyxrQkFBa0IsQ0FBQztRQUNyQyxvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNuQixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDeEIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBZ0N6QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0QyxVQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENB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U0FBQywyQkFBMkI7c0NBUWpDLEtBQUssU0FBQywwQkFBMEI7cUNBT2hDLEtBQUssU0FBQywwQkFBMEI7cUNBUWhDLEtBQUssU0FBQywwQkFBMEI7cUJBUWhDLE1BQU07Ozs7SUExQ1AsK0NBQWM7O0lBQ2QsaURBQXNDOztJQUN0Qyx5Q0FBaUI7O0lBQ2pCLHVDQUEyQjs7SUFDM0IsNkNBQWtDOztJQUNsQyw2Q0FBbUM7O0lBQ25DLGdEQUFpRDs7SUFDakQsaURBQWlFOztJQUNqRSxpREFBaUQ7O0lBQ2pELG1EQUFxRDs7SUFDckQsa0RBQW1EOztJQWdDbkQsd0NBQXNDOztJQUN0Qyx1Q0FBcUU7O0lBRXJFLHlDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwRGlyZWN0aXZlLCBOZ0Zvcm0sIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFcnJvclN0YXRlTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuLyoqIEVycm9yIHdoZW4gaW52YWxpZCBjb250cm9sIGlzIGRpcnR5LCB0b3VjaGVkLCBvciBzdWJtaXR0ZWQuICovXG5leHBvcnQgY2xhc3MgTXlFcnJvclN0YXRlTWF0Y2hlciBpbXBsZW1lbnRzIEVycm9yU3RhdGVNYXRjaGVyIHtcbiAgaXNFcnJvclN0YXRlKGNvbnRyb2w6IEZvcm1Db250cm9sIHwgbnVsbCwgZm9ybTogRm9ybUdyb3VwRGlyZWN0aXZlIHwgTmdGb3JtIHwgbnVsbCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIShjb250cm9sICYmIGNvbnRyb2wuaW52YWxpZCAmJiAoY29udHJvbC5kaXJ0eSB8fCBjb250cm9sLnRvdWNoZWQpKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXVzZXItaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS11c2VyLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS11c2VyLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3VrdVVzZXJJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIF9zdWJzY3JpcHRpb247XG4gIHVzZXJuYW1lQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIEBJbnB1dCgpIHBhdHRlcm47XG4gIEBJbnB1dCgpIGNvbG9yID0gJ3ByaW1hcnknO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICdVc2VybmFtZSc7XG4gIEBJbnB1dCgnY3VzdG9tLWNsYXNzJykgY3VzdG9tQ2xhc3M7XG4gIEBJbnB1dCgnZW5hYmxlLXVzZXItaWNvbicpIGVuYWJsZVVzZXJJY29uID0gdHJ1ZTtcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLW9uZScpIGVycm9yTWVzc2FnZU9uZSA9ICdjYW5ub3QgYmUgYmxhbmsuJztcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLXR3bycpIGVycm9yTWVzc2FnZVR3byA9ICcnO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtdGhyZWUnKSBlcnJvck1lc3NhZ2VUaHJlZSA9ICcnO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtZm91cicpIGVycm9yTWVzc2FnZUZvdXIgPSAnJztcbiAgQElucHV0KCdlbmFibGUtcmVxdWlyZWQtdmFsaWRhdG9yJylcbiAgc2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCdlbmFibGVSZXF1aXJlZFZhbGlkYXRvcicsIHZhbCk7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCdlbmFibGUtcGF0dGVybi12YWxpZGF0b3InKVxuICBzZXQgZW5hYmxlUGF0dGVyblZhbGlkYXRvcnModmFsKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5wYXR0ZXJuKSk7XG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgnZW5hYmxlLW1heC1sZW4tdmFsaWRhdG9yJylcbiAgc2V0IGVuYWJsZU1heExlblZhbGlkYXRvcnModmFsKSB7XG4gICAgY29uc29sZS5sb2coJ2VuYWJsZU1heFZhbGlkYXRvcicsIHZhbCk7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLm1heExlbmd0aCh2YWwpKTtcbiAgICAgIHRoaXMudXNlcm5hbWVDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCdlbmFibGUtbWluLWxlbi12YWxpZGF0b3InKVxuICBzZXQgZW5hYmxlTWluTGVuVmFsaWRhdG9ycyh2YWwpIHtcbiAgICBjb25zb2xlLmxvZygnZW5hYmxlTWluVmFsaWRhdG9yJywgdmFsKTtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLnVzZXJuYW1lQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMubWluTGVuZ3RoKHZhbCkpO1xuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfVxuICBAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBlbWFpbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdKTtcblxuICBtYXRjaGVyID0gbmV3IE15RXJyb3JTdGF0ZU1hdGNoZXIoKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLnVzZXJuYW1lQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmFjdGlvbi5lbWl0KHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoaXMudXNlcm5hbWVDb250cm9sLlxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ3VzZXJuYW1lQ29udHJvbCcsIHRoaXMudXNlcm5hbWVDb250cm9sKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEVycm9yTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy51c2VybmFtZUNvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJykgPyAnWW91IG11c3QgZW50ZXIgYSB2YWx1ZScgOlxuICAgICAgdGhpcy51c2VybmFtZUNvbnRyb2wuaGFzRXJyb3IoJ21pbmxlbmd0aCcpID8gJ3VzZXJuYW1lIHNob3VsZCBiZSBtb3JlIHRoYW4gMiBsZXR0ZXJzJyA6XG4gICAgICAgICcnO1xuICB9XG5cbiAgbmdEZXN0cm95KCkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cbiJdfQ==