/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
var SukuSearchWidgetComponent = /** @class */ (function () {
    function SukuSearchWidgetComponent() {
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
    Object.defineProperty(SukuSearchWidgetComponent.prototype, "value", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                this.searchControl.patchValue(val);
            }
            else {
                this.searchControl.patchValue(val);
                // this.searchControl.enable();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuSearchWidgetComponent.prototype, "disable", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                this.searchControl.disable();
            }
            else {
                this.searchControl.enable();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuSearchWidgetComponent.prototype, "enableRequiredValidator", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            console.log('enableRequiredValidator', val);
            if (val) {
                this.searchControl.setValidators(Validators.required);
                this.searchControl.updateValueAndValidity();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuSearchWidgetComponent.prototype, "enablePatternValidators", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                this.searchControl.setValidators([Validators.required, Validators.pattern(this.pattern)]);
                this.searchControl.updateValueAndValidity();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuSearchWidgetComponent.prototype, "enableMaxLenValidators", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            console.log('enableMaxValidator', val);
            if (val) {
                this.searchControl.setValidators(Validators.maxLength(val));
                this.searchControl.updateValueAndValidity();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SukuSearchWidgetComponent.prototype, "enableMinLenValidators", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            console.log('enableMinValidator', val);
            if (val) {
                this.searchControl.setValidators(Validators.minLength(val));
                this.searchControl.updateValueAndValidity();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SukuSearchWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscription = this.searchControl.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                /** @type {?} */
                var controlValue = {
                    dirty: _this.searchControl.dirty,
                    disabled: _this.searchControl.disabled,
                    enabled: _this.searchControl.enabled,
                    errors: _this.searchControl.errors,
                    invalid: _this.searchControl.invalid,
                    pristine: _this.searchControl.pristine,
                    status: _this.searchControl.status,
                    touched: _this.searchControl.touched,
                    untouched: _this.searchControl.untouched,
                    valid: _this.searchControl.valid,
                    validator: _this.searchControl.validator,
                    value: _this.searchControl.value
                };
                _this.action.emit(controlValue);
            }
            else {
                // this.searchControl.
            }
            console.log('searchControl', _this.searchControl);
        }));
    };
    /**
     * @return {?}
     */
    SukuSearchWidgetComponent.prototype.getErrorMessage = /**
     * @return {?}
     */
    function () {
        return this.searchControl.hasError('required') ? 'You must enter a value' :
            this.searchControl.hasError('minlength') ? 'username should be more than 2 letters' :
                '';
    };
    /**
     * @return {?}
     */
    SukuSearchWidgetComponent.prototype.getFieldValue = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.searchControl.value;
        this.getValue.emit(value);
    };
    /**
     * @return {?}
     */
    SukuSearchWidgetComponent.prototype.ngDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    SukuSearchWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-search-widget',
                    template: "<div class=\"col row mt-3 ml-0\">\r\n\t<div class=\"col-lg-10 col-md-9 col-sm-8 p-0\">\r\n\t<input type=\"text\" class=\"w-100 p-1 inputStyle pl-3\"  [style.font-weight]=\"searchFieldFontWeight\" [formControl]=\"searchControl\" [style.font-size.px]=\"searchFieldFontSize\" (keyup.enter)=\"getFieldValue()\" [style.color]=\"searchFieldFontColor\" placeholder=\"{{searchFiledPlaceHolder}}\" id=\"searchControl\" name=\"searchControl\" aria-label=\"Search through site content\">\r\n\t</div>\r\n\t<div class=\"col-lg-2 col-md-3 col-sm-4 p-0\">\r\n\t<button type=\"button\" id=\"{{buttonId}}\" class=\"w-100 suku-info buttonHeight\" [disabled]=\"!searchControl?.value\" [style.font-size.px]=\"buttonFontSize\" [style.font-weight]=\"buttonFontWeight\" (click)=\"getFieldValue();\">Search</button>\r\n\t</div>\r\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info{border-top-right-radius:1rem;border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-default-bg);color:var(--suku-text-heading);font-family:var(--suku-primary-font)}.inputStyle{border-bottom-left-radius:1rem;border:2px solid #bcbaba}.inputStyle:focus,.suku-info:focus{outline-width:0}@media (max-width:575px){.suku-info{border-bottom-left-radius:1rem;border-top-right-radius:0}.inputStyle{border-top-right-radius:1rem;border-bottom-left-radius:0}}.buttonHeight{height:100%}.suku-info.focus,.suku-info:focus{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.open>.dropdown-toggle .suku-info.focus,.open>.dropdown-toggle .suku-info:focus,.open>.dropdown-toggle.suku-info:hover,.suku-info.active.focus,.suku-info.active:focus,.suku-info.active:hover,.suku-info:active.focus,.suku-info:active:focus,.suku-info:active:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff;cursor:pointer}.show>.suku-info.dropdown-toggle,.suku-info:not(:disabled):not(.disabled).active,.suku-info:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}.show>.suku-info.dropdown-toggle:focus,.suku-info.focus,.suku-info:focus,.suku-info:not(:disabled):not(.disabled).active:focus,.suku-info:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuSearchWidgetComponent.ctorParameters = function () { return []; };
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
    return SukuSearchWidgetComponent;
}());
export { SukuSearchWidgetComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zZWFyY2gtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXNlYXJjaC13aWRnZXQvc3VrdS1zZWFyY2gtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFxQixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLFdBQVcsRUFBOEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckY7SUErRUU7UUF6RWlDLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUN2QiwyQkFBc0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUMzQyx5QkFBb0IsR0FBRyxPQUFPLENBQUM7UUFDL0MsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUNqQixlQUFVLEdBQUcsWUFBWSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDcEIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUsvQyxrQkFBYSxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTNCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxVQUFVLENBQUM7UUFFUCxtQkFBYyxHQUFHLElBQUksQ0FBQztRQUNyQixvQkFBZSxHQUFHLGtCQUFrQixDQUFDO1FBQ3JDLG9CQUFlLEdBQUcsZ0JBQWdCLENBQUM7UUFDakMsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQWlEekMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTlCLENBQUM7SUFwRGpCLHNCQUNJLDRDQUFLOzs7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Q0FBd0M7O0lBQ3hDLG1EQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nRm9ybSwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LXNlYXJjaC13aWRnZXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXNlYXJjaC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3Utc2VhcmNoLXdpZGdldC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1U2VhcmNoV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoJ3NlYXJjaC1maWVsZC1mb250LXNpemUnKSBzZWFyY2hGaWVsZEZvbnRTaXplID0gMTY7XHJcbiAgQElucHV0KCdzZWFyY2gtZmllbGQtcGxhY2Vob2xkZXInKSBzZWFyY2hGaWxlZFBsYWNlSG9sZGVyID0gJ1NlYXJjaCBoZXJlLi4uJztcclxuICBASW5wdXQoJ3NlYXJjaC1maWVsZC1mb250LWNvbG9yJykgc2VhcmNoRmllbGRGb250Q29sb3IgPSAnYmxhY2snO1xyXG4gIEBJbnB1dCgnZmllbGRJZCcpIGZpZWxkSWQgPSAnZmllbGRJZCc7XHJcbiAgQElucHV0KCdmaWVsZFZhbHVlJykgZmllbGRWYWx1ZSA9ICdmaWVsZFZhbHVlJztcclxuICBASW5wdXQoJ2J1dHRvbklkJykgYnV0dG9uSWQgPSAnYnV0dG9uSWQnO1xyXG4gIEBJbnB1dCgnYnV0dG9uTmFtZScpIGJ1dHRvbk5hbWUgPSAnYnV0dG9uTmFtZSc7XHJcbiAgQElucHV0KCdidXR0b25Gb250U2l6ZScpIGJ1dHRvbkZvbnRTaXplO1x0XHJcbiAgQElucHV0KCdidXR0b25Gb250V2VpZ2h0JykgYnV0dG9uRm9udFdlaWdodDtcclxuICBASW5wdXQoJ3NlYXJjaEZpZWxkRm9udFdlaWdodCcpIHNlYXJjaEZpZWxkRm9udFdlaWdodDtcclxuICBfc3Vic2NyaXB0aW9uO1xyXG4gIHNlYXJjaENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIEBJbnB1dCgpIHBhdHRlcm47XHJcbiAgQElucHV0KCkgY29sb3IgPSAncHJpbWFyeSc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnVXNlcm5hbWUnO1xyXG4gIEBJbnB1dCgnY3VzdG9tLWNsYXNzJykgY3VzdG9tQ2xhc3M7XHJcbiAgQElucHV0KCdlbmFibGUtdXNlci1pY29uJykgZW5hYmxlVXNlckljb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS1vbmUnKSBlcnJvck1lc3NhZ2VPbmUgPSAnQ2Fubm90IGJlIGJsYW5rLic7XHJcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLXR3bycpIGVycm9yTWVzc2FnZVR3byA9ICdJbnZhbGlkIHZhbHVlLic7XHJcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLXRocmVlJykgZXJyb3JNZXNzYWdlVGhyZWUgPSAnJztcclxuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtZm91cicpIGVycm9yTWVzc2FnZUZvdXIgPSAnJztcclxuICBASW5wdXQoJ3ZhbHVlJylcclxuICBzZXQgdmFsdWUodmFsKSB7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC5wYXRjaFZhbHVlKHZhbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlYXJjaENvbnRyb2wucGF0Y2hWYWx1ZSh2YWwpO1xyXG4gICAgICAvLyB0aGlzLnNlYXJjaENvbnRyb2wuZW5hYmxlKCk7XHJcbiAgICB9XHJcbiAgfSAgXHJcbiAgQElucHV0KCdkaXNhYmxlZCcpXHJcbiAgc2V0IGRpc2FibGUodmFsKSB7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC5kaXNhYmxlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlYXJjaENvbnRyb2wuZW5hYmxlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBJbnB1dCgnZW5hYmxlLXJlcXVpcmVkLXZhbGlkYXRvcicpXHJcbiAgc2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yKHZhbCkge1xyXG4gICAgY29uc29sZS5sb2coJ2VuYWJsZVJlcXVpcmVkVmFsaWRhdG9yJywgdmFsKTtcclxuICAgIGlmICh2YWwpIHtcclxuICAgICAgdGhpcy5zZWFyY2hDb250cm9sLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBJbnB1dCgnZW5hYmxlLXBhdHRlcm4tdmFsaWRhdG9yJylcclxuICBzZXQgZW5hYmxlUGF0dGVyblZhbGlkYXRvcnModmFsKSB7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC5zZXRWYWxpZGF0b3JzKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5wYXR0ZXJuKV0pO1xyXG4gICAgICB0aGlzLnNlYXJjaENvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBASW5wdXQoJ2VuYWJsZS1tYXgtbGVuLXZhbGlkYXRvcicpXHJcbiAgc2V0IGVuYWJsZU1heExlblZhbGlkYXRvcnModmFsKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZW5hYmxlTWF4VmFsaWRhdG9yJywgdmFsKTtcclxuICAgIGlmICh2YWwpIHtcclxuICAgICAgdGhpcy5zZWFyY2hDb250cm9sLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5tYXhMZW5ndGgodmFsKSk7XHJcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBJbnB1dCgnZW5hYmxlLW1pbi1sZW4tdmFsaWRhdG9yJylcclxuICBzZXQgZW5hYmxlTWluTGVuVmFsaWRhdG9ycyh2YWwpIHtcclxuICAgIGNvbnNvbGUubG9nKCdlbmFibGVNaW5WYWxpZGF0b3InLCB2YWwpO1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICB0aGlzLnNlYXJjaENvbnRyb2wuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLm1pbkxlbmd0aCh2YWwpKTtcclxuICAgICAgdGhpcy5zZWFyY2hDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgIH1cclxuICB9XHJcbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZ2V0VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuc2VhcmNoQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgY29udHJvbFZhbHVlID0ge1xyXG4gICAgICAgICAgZGlydHk6IHRoaXMuc2VhcmNoQ29udHJvbC5kaXJ0eSxcclxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnNlYXJjaENvbnRyb2wuZGlzYWJsZWQsXHJcbiAgICAgICAgICBlbmFibGVkOiB0aGlzLnNlYXJjaENvbnRyb2wuZW5hYmxlZCxcclxuICAgICAgICAgIGVycm9yczogdGhpcy5zZWFyY2hDb250cm9sLmVycm9ycyxcclxuICAgICAgICAgIGludmFsaWQ6IHRoaXMuc2VhcmNoQ29udHJvbC5pbnZhbGlkLFxyXG4gICAgICAgICAgcHJpc3RpbmU6IHRoaXMuc2VhcmNoQ29udHJvbC5wcmlzdGluZSxcclxuICAgICAgICAgIHN0YXR1czogdGhpcy5zZWFyY2hDb250cm9sLnN0YXR1cyxcclxuICAgICAgICAgIHRvdWNoZWQ6IHRoaXMuc2VhcmNoQ29udHJvbC50b3VjaGVkLFxyXG4gICAgICAgICAgdW50b3VjaGVkOiB0aGlzLnNlYXJjaENvbnRyb2wudW50b3VjaGVkLFxyXG4gICAgICAgICAgdmFsaWQ6IHRoaXMuc2VhcmNoQ29udHJvbC52YWxpZCxcclxuICAgICAgICAgIHZhbGlkYXRvcjogdGhpcy5zZWFyY2hDb250cm9sLnZhbGlkYXRvcixcclxuICAgICAgICAgIHZhbHVlOiB0aGlzLnNlYXJjaENvbnRyb2wudmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWN0aW9uLmVtaXQoY29udHJvbFZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB0aGlzLnNlYXJjaENvbnRyb2wuXHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ3NlYXJjaENvbnRyb2wnLCB0aGlzLnNlYXJjaENvbnRyb2wpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRFcnJvck1lc3NhZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hDb250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpID8gJ1lvdSBtdXN0IGVudGVyIGEgdmFsdWUnIDpcclxuICAgICAgdGhpcy5zZWFyY2hDb250cm9sLmhhc0Vycm9yKCdtaW5sZW5ndGgnKSA/ICd1c2VybmFtZSBzaG91bGQgYmUgbW9yZSB0aGFuIDIgbGV0dGVycycgOlxyXG4gICAgICAgICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRWYWx1ZSgpIHtcclxuICBcdGNvbnN0IHZhbHVlID0gdGhpcy5zZWFyY2hDb250cm9sLnZhbHVlO1xyXG4gIFx0dGhpcy5nZXRWYWx1ZS5lbWl0KHZhbHVlKVxyXG4gIH1cclxuXHJcbiAgbmdEZXN0cm95KCkge1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=