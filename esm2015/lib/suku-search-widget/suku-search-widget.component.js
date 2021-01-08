/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-search-widget/suku-search-widget.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
export class SukuSearchWidgetComponent {
    constructor() {
        this.searchFieldFontSize = 16;
        this.searchFiledPlaceHolder = 'Search here...';
        this.searchFieldFontColor = 'black';
        this.fieldId = 'fieldId';
        this.fieldValue = 'fieldValue';
        this.buttonId = 'buttonId';
        this.buttonName = 'buttonName';
        this.searchControl = new FormControl('');
        this.color = 'primary';
        this.placeholder = 'Username';
        this.enableUserIcon = true;
        this.errorMessageOne = 'Cannot be blank.';
        this.errorMessageTwo = 'Invalid value.';
        this.errorMessageThree = '';
        this.errorMessageFour = '';
        this.action = new EventEmitter();
        this.getValue = new EventEmitter();
        this.onChangeAction = new EventEmitter();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set value(val) {
        if (val) {
            this.searchControl.patchValue(val);
        }
        else {
            this.searchControl.patchValue(val);
            // this.searchControl.enable();
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set disable(val) {
        if (val) {
            this.searchControl.disable();
        }
        else {
            this.searchControl.enable();
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set enableRequiredValidator(val) {
        console.log('enableRequiredValidator', val);
        if (val) {
            this.searchControl.setValidators(Validators.required);
            this.searchControl.updateValueAndValidity();
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set enablePatternValidators(val) {
        if (val) {
            this.searchControl.setValidators([Validators.required, Validators.pattern(this.pattern)]);
            this.searchControl.updateValueAndValidity();
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set enableMaxLenValidators(val) {
        console.log('enableMaxValidator', val);
        if (val) {
            this.searchControl.setValidators(Validators.maxLength(val));
            this.searchControl.updateValueAndValidity();
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set enableMinLenValidators(val) {
        console.log('enableMinValidator', val);
        if (val) {
            this.searchControl.setValidators(Validators.minLength(val));
            this.searchControl.updateValueAndValidity();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._subscription = this.searchControl.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (value) {
                /** @type {?} */
                const controlValue = {
                    dirty: this.searchControl.dirty,
                    disabled: this.searchControl.disabled,
                    enabled: this.searchControl.enabled,
                    errors: this.searchControl.errors,
                    invalid: this.searchControl.invalid,
                    pristine: this.searchControl.pristine,
                    status: this.searchControl.status,
                    touched: this.searchControl.touched,
                    untouched: this.searchControl.untouched,
                    valid: this.searchControl.valid,
                    validator: this.searchControl.validator,
                    value: this.searchControl.value
                };
                this.action.emit(controlValue);
            }
            else {
                // this.searchControl.
            }
            console.log('searchControl', this.searchControl);
        }));
    }
    /**
     * @return {?}
     */
    getErrorMessage() {
        return this.searchControl.hasError('required') ? 'You must enter a value' :
            this.searchControl.hasError('minlength') ? 'username should be more than 2 letters' :
                '';
    }
    /**
     * @return {?}
     */
    getFieldValue() {
        /** @type {?} */
        const value = this.searchControl.value;
        this.getValue.emit(value);
    }
    /**
     * @return {?}
     */
    ngDestroy() {
        this._subscription.unsubscribe();
    }
}
SukuSearchWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-search-widget',
                template: "<div class=\"col row mt-3 ml-0\">\n\t<div class=\"col-lg-10 col-md-9 col-sm-8 p-0\">\n\t<input type=\"text\" class=\"w-100 p-1 inputStyle pl-3\"  [style.font-weight]=\"searchFieldFontWeight\" [formControl]=\"searchControl\" [style.font-size.px]=\"searchFieldFontSize\" (keyup.enter)=\"getFieldValue()\" [style.color]=\"searchFieldFontColor\" placeholder=\"{{searchFiledPlaceHolder}}\" id=\"searchControl\" name=\"searchControl\" aria-label=\"Search through site content\">\n\t</div>\n\t<div class=\"col-lg-2 col-md-3 col-sm-4 p-0\">\n\t<button type=\"button\" id=\"{{buttonId}}\" class=\"w-100 suku-info buttonHeight\" [disabled]=\"!searchControl?.value\" [style.font-size.px]=\"buttonFontSize\" [style.font-weight]=\"buttonFontWeight\" (click)=\"getFieldValue();\">Search</button>\n\t</div>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info{border-top-right-radius:1rem;border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-default-bg);color:var(--suku-text-heading);font-family:var(--suku-primary-font)}.inputStyle{border-bottom-left-radius:1rem;border:2px solid #bcbaba}.inputStyle:focus,.suku-info:focus{outline-width:0}@media (max-width:575px){.suku-info{border-bottom-left-radius:1rem;border-top-right-radius:0}.inputStyle{border-top-right-radius:1rem;border-bottom-left-radius:0}}.buttonHeight{height:100%}.suku-info.focus,.suku-info:focus{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.open>.dropdown-toggle .suku-info.focus,.open>.dropdown-toggle .suku-info:focus,.open>.dropdown-toggle.suku-info:hover,.suku-info.active.focus,.suku-info.active:focus,.suku-info.active:hover,.suku-info:active.focus,.suku-info:active:focus,.suku-info:active:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff;cursor:pointer}.show>.suku-info.dropdown-toggle,.suku-info:not(:disabled):not(.disabled).active,.suku-info:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}.show>.suku-info.dropdown-toggle:focus,.suku-info.focus,.suku-info:focus,.suku-info:not(:disabled):not(.disabled).active:focus,.suku-info:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}"]
            }] }
];
/** @nocollapse */
SukuSearchWidgetComponent.ctorParameters = () => [];
SukuSearchWidgetComponent.propDecorators = {
    searchFieldFontSize: [{ type: Input, args: ['search-field-font-size',] }],
    searchFiledPlaceHolder: [{ type: Input, args: ['search-field-placeholder',] }],
    searchFieldFontColor: [{ type: Input, args: ['search-field-font-color',] }],
    fieldId: [{ type: Input, args: ['fieldId',] }],
    fieldValue: [{ type: Input, args: ['fieldValue',] }],
    buttonId: [{ type: Input, args: ['buttonId',] }],
    buttonName: [{ type: Input, args: ['buttonName',] }],
    buttonFontSize: [{ type: Input, args: ['buttonFontSize',] }],
    buttonFontWeight: [{ type: Input, args: ['buttonFontWeight',] }],
    searchFieldFontWeight: [{ type: Input, args: ['searchFieldFontWeight',] }],
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
    getValue: [{ type: Output }],
    onChangeAction: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.searchFieldFontSize;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.searchFiledPlaceHolder;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.searchFieldFontColor;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.fieldId;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.fieldValue;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.buttonId;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.buttonName;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.buttonFontSize;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.buttonFontWeight;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.searchFieldFontWeight;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype._subscription;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.searchControl;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.pattern;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.color;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.placeholder;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.customClass;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.enableUserIcon;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.errorMessageOne;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.errorMessageTwo;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.errorMessageThree;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.errorMessageFour;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.action;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.getValue;
    /** @type {?} */
    SukuSearchWidgetComponent.prototype.onChangeAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zZWFyY2gtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXNlYXJjaC13aWRnZXQvc3VrdS1zZWFyY2gtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBcUIsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxXQUFXLEVBQThCLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTXJGLE1BQU0sT0FBTyx5QkFBeUI7SUEwRXBDO1FBekVpQyx3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsMkJBQXNCLEdBQUcsZ0JBQWdCLENBQUM7UUFDM0MseUJBQW9CLEdBQUcsT0FBTyxDQUFDO1FBQy9DLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFDakIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUM1QixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFLL0Msa0JBQWEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUzQixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsVUFBVSxDQUFDO1FBRVAsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDckIsb0JBQWUsR0FBRyxrQkFBa0IsQ0FBQztRQUNyQyxvQkFBZSxHQUFHLGdCQUFnQixDQUFDO1FBQ2pDLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN4QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFpRHpDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUU5QixDQUFDOzs7OztJQXBEakIsSUFDSSxLQUFLLENBQUMsR0FBRztRQUNYLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLCtCQUErQjtTQUNoQztJQUNILENBQUM7Ozs7O0lBQ0QsSUFDSSxPQUFPLENBQUMsR0FBRztRQUNiLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7O0lBQ0QsSUFDSSx1QkFBdUIsQ0FBQyxHQUFHO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7Ozs7SUFDRCxJQUNJLHVCQUF1QixDQUFDLEdBQUc7UUFDN0IsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7O0lBQ0QsSUFDSSxzQkFBc0IsQ0FBQyxHQUFHO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkMsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7Ozs7SUFDRCxJQUNJLHNCQUFzQixDQUFDLEdBQUc7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDN0M7SUFDSCxDQUFDOzs7O0lBT0QsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JFLElBQUksS0FBSyxFQUFFOztzQkFDSCxZQUFZLEdBQUc7b0JBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUs7b0JBQy9CLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVE7b0JBQ3JDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU87b0JBQ25DLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU07b0JBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU87b0JBQ25DLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVE7b0JBQ3JDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU07b0JBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU87b0JBQ25DLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVM7b0JBQ3ZDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUs7b0JBQy9CLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVM7b0JBQ3ZDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUs7aUJBQ2hDO2dCQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNMLHNCQUFzQjthQUN2QjtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuRCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsd0NBQXdDLENBQUMsQ0FBQztnQkFDbkYsRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7OztJQUVELGFBQWE7O2NBQ04sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMxQixDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7O1lBdkhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QiwyeUJBQWtEOzthQUVuRDs7Ozs7a0NBRUUsS0FBSyxTQUFDLHdCQUF3QjtxQ0FDOUIsS0FBSyxTQUFDLDBCQUEwQjttQ0FDaEMsS0FBSyxTQUFDLHlCQUF5QjtzQkFDL0IsS0FBSyxTQUFDLFNBQVM7eUJBQ2YsS0FBSyxTQUFDLFlBQVk7dUJBQ2xCLEtBQUssU0FBQyxVQUFVO3lCQUNoQixLQUFLLFNBQUMsWUFBWTs2QkFDbEIsS0FBSyxTQUFDLGdCQUFnQjsrQkFDdEIsS0FBSyxTQUFDLGtCQUFrQjtvQ0FDeEIsS0FBSyxTQUFDLHVCQUF1QjtzQkFHN0IsS0FBSztvQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSyxTQUFDLGNBQWM7NkJBQ3BCLEtBQUssU0FBQyxrQkFBa0I7OEJBQ3hCLEtBQUssU0FBQyxtQkFBbUI7OEJBQ3pCLEtBQUssU0FBQyxtQkFBbUI7Z0NBQ3pCLEtBQUssU0FBQyxxQkFBcUI7K0JBQzNCLEtBQUssU0FBQyxvQkFBb0I7b0JBQzFCLEtBQUssU0FBQyxPQUFPO3NCQVNiLEtBQUssU0FBQyxVQUFVO3NDQVFoQixLQUFLLFNBQUMsMkJBQTJCO3NDQVFqQyxLQUFLLFNBQUMsMEJBQTBCO3FDQU9oQyxLQUFLLFNBQUMsMEJBQTBCO3FDQVFoQyxLQUFLLFNBQUMsMEJBQTBCO3FCQVFoQyxNQUFNO3VCQUNOLE1BQU07NkJBQ04sTUFBTTs7OztJQXZFUCx3REFBMEQ7O0lBQzFELDJEQUE2RTs7SUFDN0UseURBQWlFOztJQUNqRSw0Q0FBc0M7O0lBQ3RDLCtDQUErQzs7SUFDL0MsNkNBQXlDOztJQUN6QywrQ0FBK0M7O0lBQy9DLG1EQUF3Qzs7SUFDeEMscURBQTRDOztJQUM1QywwREFBc0Q7O0lBQ3RELGtEQUFjOztJQUNkLGtEQUFvQzs7SUFDcEMsNENBQWlCOztJQUNqQiwwQ0FBMkI7O0lBQzNCLGdEQUFrQzs7SUFDbEMsZ0RBQW1DOztJQUNuQyxtREFBaUQ7O0lBQ2pELG9EQUFpRTs7SUFDakUsb0RBQStEOztJQUMvRCxzREFBcUQ7O0lBQ3JELHFEQUFtRDs7SUFpRG5ELDJDQUFzQzs7SUFDdEMsNkNBQXdDOztJQUN4QyxtREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cERpcmVjdGl2ZSwgTmdGb3JtLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1zZWFyY2gtd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3Utc2VhcmNoLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3Utc2VhcmNoLXdpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VTZWFyY2hXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ3NlYXJjaC1maWVsZC1mb250LXNpemUnKSBzZWFyY2hGaWVsZEZvbnRTaXplID0gMTY7XG4gIEBJbnB1dCgnc2VhcmNoLWZpZWxkLXBsYWNlaG9sZGVyJykgc2VhcmNoRmlsZWRQbGFjZUhvbGRlciA9ICdTZWFyY2ggaGVyZS4uLic7XG4gIEBJbnB1dCgnc2VhcmNoLWZpZWxkLWZvbnQtY29sb3InKSBzZWFyY2hGaWVsZEZvbnRDb2xvciA9ICdibGFjayc7XG4gIEBJbnB1dCgnZmllbGRJZCcpIGZpZWxkSWQgPSAnZmllbGRJZCc7XG4gIEBJbnB1dCgnZmllbGRWYWx1ZScpIGZpZWxkVmFsdWUgPSAnZmllbGRWYWx1ZSc7XG4gIEBJbnB1dCgnYnV0dG9uSWQnKSBidXR0b25JZCA9ICdidXR0b25JZCc7XG4gIEBJbnB1dCgnYnV0dG9uTmFtZScpIGJ1dHRvbk5hbWUgPSAnYnV0dG9uTmFtZSc7XG4gIEBJbnB1dCgnYnV0dG9uRm9udFNpemUnKSBidXR0b25Gb250U2l6ZTtcdFxuICBASW5wdXQoJ2J1dHRvbkZvbnRXZWlnaHQnKSBidXR0b25Gb250V2VpZ2h0O1xuICBASW5wdXQoJ3NlYXJjaEZpZWxkRm9udFdlaWdodCcpIHNlYXJjaEZpZWxkRm9udFdlaWdodDtcbiAgX3N1YnNjcmlwdGlvbjtcbiAgc2VhcmNoQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIEBJbnB1dCgpIHBhdHRlcm47XG4gIEBJbnB1dCgpIGNvbG9yID0gJ3ByaW1hcnknO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICdVc2VybmFtZSc7XG4gIEBJbnB1dCgnY3VzdG9tLWNsYXNzJykgY3VzdG9tQ2xhc3M7XG4gIEBJbnB1dCgnZW5hYmxlLXVzZXItaWNvbicpIGVuYWJsZVVzZXJJY29uID0gdHJ1ZTtcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLW9uZScpIGVycm9yTWVzc2FnZU9uZSA9ICdDYW5ub3QgYmUgYmxhbmsuJztcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLXR3bycpIGVycm9yTWVzc2FnZVR3byA9ICdJbnZhbGlkIHZhbHVlLic7XG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS10aHJlZScpIGVycm9yTWVzc2FnZVRocmVlID0gJyc7XG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS1mb3VyJykgZXJyb3JNZXNzYWdlRm91ciA9ICcnO1xuICBASW5wdXQoJ3ZhbHVlJylcbiAgc2V0IHZhbHVlKHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC5wYXRjaFZhbHVlKHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC5wYXRjaFZhbHVlKHZhbCk7XG4gICAgICAvLyB0aGlzLnNlYXJjaENvbnRyb2wuZW5hYmxlKCk7XG4gICAgfVxuICB9ICBcbiAgQElucHV0KCdkaXNhYmxlZCcpXG4gIHNldCBkaXNhYmxlKHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC5lbmFibGUoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCdlbmFibGUtcmVxdWlyZWQtdmFsaWRhdG9yJylcbiAgc2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCdlbmFibGVSZXF1aXJlZFZhbGlkYXRvcicsIHZhbCk7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5zZWFyY2hDb250cm9sLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICB0aGlzLnNlYXJjaENvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoJ2VuYWJsZS1wYXR0ZXJuLXZhbGlkYXRvcicpXG4gIHNldCBlbmFibGVQYXR0ZXJuVmFsaWRhdG9ycyh2YWwpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLnNlYXJjaENvbnRyb2wuc2V0VmFsaWRhdG9ycyhbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKHRoaXMucGF0dGVybildKTtcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgnZW5hYmxlLW1heC1sZW4tdmFsaWRhdG9yJylcbiAgc2V0IGVuYWJsZU1heExlblZhbGlkYXRvcnModmFsKSB7XG4gICAgY29uc29sZS5sb2coJ2VuYWJsZU1heFZhbGlkYXRvcicsIHZhbCk7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5zZWFyY2hDb250cm9sLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5tYXhMZW5ndGgodmFsKSk7XG4gICAgICB0aGlzLnNlYXJjaENvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoJ2VuYWJsZS1taW4tbGVuLXZhbGlkYXRvcicpXG4gIHNldCBlbmFibGVNaW5MZW5WYWxpZGF0b3JzKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCdlbmFibGVNaW5WYWxpZGF0b3InLCB2YWwpO1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMubWluTGVuZ3RoKHZhbCkpO1xuICAgICAgdGhpcy5zZWFyY2hDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG4gIH1cbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGdldFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25DaGFuZ2VBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLnNlYXJjaENvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29uc3QgY29udHJvbFZhbHVlID0ge1xuICAgICAgICAgIGRpcnR5OiB0aGlzLnNlYXJjaENvbnRyb2wuZGlydHksXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuc2VhcmNoQ29udHJvbC5kaXNhYmxlZCxcbiAgICAgICAgICBlbmFibGVkOiB0aGlzLnNlYXJjaENvbnRyb2wuZW5hYmxlZCxcbiAgICAgICAgICBlcnJvcnM6IHRoaXMuc2VhcmNoQ29udHJvbC5lcnJvcnMsXG4gICAgICAgICAgaW52YWxpZDogdGhpcy5zZWFyY2hDb250cm9sLmludmFsaWQsXG4gICAgICAgICAgcHJpc3RpbmU6IHRoaXMuc2VhcmNoQ29udHJvbC5wcmlzdGluZSxcbiAgICAgICAgICBzdGF0dXM6IHRoaXMuc2VhcmNoQ29udHJvbC5zdGF0dXMsXG4gICAgICAgICAgdG91Y2hlZDogdGhpcy5zZWFyY2hDb250cm9sLnRvdWNoZWQsXG4gICAgICAgICAgdW50b3VjaGVkOiB0aGlzLnNlYXJjaENvbnRyb2wudW50b3VjaGVkLFxuICAgICAgICAgIHZhbGlkOiB0aGlzLnNlYXJjaENvbnRyb2wudmFsaWQsXG4gICAgICAgICAgdmFsaWRhdG9yOiB0aGlzLnNlYXJjaENvbnRyb2wudmFsaWRhdG9yLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnNlYXJjaENvbnRyb2wudmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hY3Rpb24uZW1pdChjb250cm9sVmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhpcy5zZWFyY2hDb250cm9sLlxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ3NlYXJjaENvbnRyb2wnLCB0aGlzLnNlYXJjaENvbnRyb2wpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RXJyb3JNZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaENvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJykgPyAnWW91IG11c3QgZW50ZXIgYSB2YWx1ZScgOlxuICAgICAgdGhpcy5zZWFyY2hDb250cm9sLmhhc0Vycm9yKCdtaW5sZW5ndGgnKSA/ICd1c2VybmFtZSBzaG91bGQgYmUgbW9yZSB0aGFuIDIgbGV0dGVycycgOlxuICAgICAgICAnJztcbiAgfVxuXG4gIGdldEZpZWxkVmFsdWUoKSB7XG4gIFx0Y29uc3QgdmFsdWUgPSB0aGlzLnNlYXJjaENvbnRyb2wudmFsdWU7XG4gIFx0dGhpcy5nZXRWYWx1ZS5lbWl0KHZhbHVlKVxuICB9XG5cbiAgbmdEZXN0cm95KCkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbn1cbiJdfQ==