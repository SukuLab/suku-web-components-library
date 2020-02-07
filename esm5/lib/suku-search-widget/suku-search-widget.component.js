/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-search-widget/suku-search-widget.component.ts
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
                    template: "<div class=\"col row mt-3 ml-0\">\n\t<div class=\"col-lg-10 col-md-9 col-sm-8 p-0\">\n\t<input type=\"text\" class=\"w-100 p-1 inputStyle pl-3\"  [style.font-weight]=\"searchFieldFontWeight\" [formControl]=\"searchControl\" [style.font-size.px]=\"searchFieldFontSize\" (keyup.enter)=\"getFieldValue()\" [style.color]=\"searchFieldFontColor\" placeholder=\"{{searchFiledPlaceHolder}}\" id=\"searchControl\" name=\"searchControl\" aria-label=\"Search through site content\">\n\t</div>\n\t<div class=\"col-lg-2 col-md-3 col-sm-4 p-0\">\n\t<button type=\"button\" id=\"{{buttonId}}\" class=\"w-100 suku-info buttonHeight\" [disabled]=\"!searchControl?.value\" [style.font-size.px]=\"buttonFontSize\" [style.font-weight]=\"buttonFontWeight\" (click)=\"getFieldValue();\">Search</button>\n\t</div>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zZWFyY2gtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXNlYXJjaC13aWRnZXQvc3VrdS1zZWFyY2gtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBcUIsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxXQUFXLEVBQThCLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JGO0lBK0VFO1FBekVpQyx3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsMkJBQXNCLEdBQUcsZ0JBQWdCLENBQUM7UUFDM0MseUJBQW9CLEdBQUcsT0FBTyxDQUFDO1FBQy9DLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFDakIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUM1QixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFLL0Msa0JBQWEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUzQixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsVUFBVSxDQUFDO1FBRVAsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDckIsb0JBQWUsR0FBRyxrQkFBa0IsQ0FBQztRQUNyQyxvQkFBZSxHQUFHLGdCQUFnQixDQUFDO1FBQ2pDLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN4QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFpRHpDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUU5QixDQUFDO0lBcERqQixzQkFDSSw0Q0FBSzs7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NkNBQXdDOztJQUN4QyxtREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cERpcmVjdGl2ZSwgTmdGb3JtLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1zZWFyY2gtd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3Utc2VhcmNoLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3Utc2VhcmNoLXdpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VTZWFyY2hXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ3NlYXJjaC1maWVsZC1mb250LXNpemUnKSBzZWFyY2hGaWVsZEZvbnRTaXplID0gMTY7XG4gIEBJbnB1dCgnc2VhcmNoLWZpZWxkLXBsYWNlaG9sZGVyJykgc2VhcmNoRmlsZWRQbGFjZUhvbGRlciA9ICdTZWFyY2ggaGVyZS4uLic7XG4gIEBJbnB1dCgnc2VhcmNoLWZpZWxkLWZvbnQtY29sb3InKSBzZWFyY2hGaWVsZEZvbnRDb2xvciA9ICdibGFjayc7XG4gIEBJbnB1dCgnZmllbGRJZCcpIGZpZWxkSWQgPSAnZmllbGRJZCc7XG4gIEBJbnB1dCgnZmllbGRWYWx1ZScpIGZpZWxkVmFsdWUgPSAnZmllbGRWYWx1ZSc7XG4gIEBJbnB1dCgnYnV0dG9uSWQnKSBidXR0b25JZCA9ICdidXR0b25JZCc7XG4gIEBJbnB1dCgnYnV0dG9uTmFtZScpIGJ1dHRvbk5hbWUgPSAnYnV0dG9uTmFtZSc7XG4gIEBJbnB1dCgnYnV0dG9uRm9udFNpemUnKSBidXR0b25Gb250U2l6ZTtcdFxuICBASW5wdXQoJ2J1dHRvbkZvbnRXZWlnaHQnKSBidXR0b25Gb250V2VpZ2h0O1xuICBASW5wdXQoJ3NlYXJjaEZpZWxkRm9udFdlaWdodCcpIHNlYXJjaEZpZWxkRm9udFdlaWdodDtcbiAgX3N1YnNjcmlwdGlvbjtcbiAgc2VhcmNoQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIEBJbnB1dCgpIHBhdHRlcm47XG4gIEBJbnB1dCgpIGNvbG9yID0gJ3ByaW1hcnknO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICdVc2VybmFtZSc7XG4gIEBJbnB1dCgnY3VzdG9tLWNsYXNzJykgY3VzdG9tQ2xhc3M7XG4gIEBJbnB1dCgnZW5hYmxlLXVzZXItaWNvbicpIGVuYWJsZVVzZXJJY29uID0gdHJ1ZTtcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLW9uZScpIGVycm9yTWVzc2FnZU9uZSA9ICdDYW5ub3QgYmUgYmxhbmsuJztcbiAgQElucHV0KCdlcnJvci1tZXNzYWdlLXR3bycpIGVycm9yTWVzc2FnZVR3byA9ICdJbnZhbGlkIHZhbHVlLic7XG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS10aHJlZScpIGVycm9yTWVzc2FnZVRocmVlID0gJyc7XG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS1mb3VyJykgZXJyb3JNZXNzYWdlRm91ciA9ICcnO1xuICBASW5wdXQoJ3ZhbHVlJylcbiAgc2V0IHZhbHVlKHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC5wYXRjaFZhbHVlKHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC5wYXRjaFZhbHVlKHZhbCk7XG4gICAgICAvLyB0aGlzLnNlYXJjaENvbnRyb2wuZW5hYmxlKCk7XG4gICAgfVxuICB9ICBcbiAgQElucHV0KCdkaXNhYmxlZCcpXG4gIHNldCBkaXNhYmxlKHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC5lbmFibGUoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCdlbmFibGUtcmVxdWlyZWQtdmFsaWRhdG9yJylcbiAgc2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCdlbmFibGVSZXF1aXJlZFZhbGlkYXRvcicsIHZhbCk7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5zZWFyY2hDb250cm9sLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICB0aGlzLnNlYXJjaENvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoJ2VuYWJsZS1wYXR0ZXJuLXZhbGlkYXRvcicpXG4gIHNldCBlbmFibGVQYXR0ZXJuVmFsaWRhdG9ycyh2YWwpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLnNlYXJjaENvbnRyb2wuc2V0VmFsaWRhdG9ycyhbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKHRoaXMucGF0dGVybildKTtcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgnZW5hYmxlLW1heC1sZW4tdmFsaWRhdG9yJylcbiAgc2V0IGVuYWJsZU1heExlblZhbGlkYXRvcnModmFsKSB7XG4gICAgY29uc29sZS5sb2coJ2VuYWJsZU1heFZhbGlkYXRvcicsIHZhbCk7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5zZWFyY2hDb250cm9sLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5tYXhMZW5ndGgodmFsKSk7XG4gICAgICB0aGlzLnNlYXJjaENvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoJ2VuYWJsZS1taW4tbGVuLXZhbGlkYXRvcicpXG4gIHNldCBlbmFibGVNaW5MZW5WYWxpZGF0b3JzKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCdlbmFibGVNaW5WYWxpZGF0b3InLCB2YWwpO1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMubWluTGVuZ3RoKHZhbCkpO1xuICAgICAgdGhpcy5zZWFyY2hDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG4gIH1cbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGdldFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25DaGFuZ2VBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLnNlYXJjaENvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29uc3QgY29udHJvbFZhbHVlID0ge1xuICAgICAgICAgIGRpcnR5OiB0aGlzLnNlYXJjaENvbnRyb2wuZGlydHksXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuc2VhcmNoQ29udHJvbC5kaXNhYmxlZCxcbiAgICAgICAgICBlbmFibGVkOiB0aGlzLnNlYXJjaENvbnRyb2wuZW5hYmxlZCxcbiAgICAgICAgICBlcnJvcnM6IHRoaXMuc2VhcmNoQ29udHJvbC5lcnJvcnMsXG4gICAgICAgICAgaW52YWxpZDogdGhpcy5zZWFyY2hDb250cm9sLmludmFsaWQsXG4gICAgICAgICAgcHJpc3RpbmU6IHRoaXMuc2VhcmNoQ29udHJvbC5wcmlzdGluZSxcbiAgICAgICAgICBzdGF0dXM6IHRoaXMuc2VhcmNoQ29udHJvbC5zdGF0dXMsXG4gICAgICAgICAgdG91Y2hlZDogdGhpcy5zZWFyY2hDb250cm9sLnRvdWNoZWQsXG4gICAgICAgICAgdW50b3VjaGVkOiB0aGlzLnNlYXJjaENvbnRyb2wudW50b3VjaGVkLFxuICAgICAgICAgIHZhbGlkOiB0aGlzLnNlYXJjaENvbnRyb2wudmFsaWQsXG4gICAgICAgICAgdmFsaWRhdG9yOiB0aGlzLnNlYXJjaENvbnRyb2wudmFsaWRhdG9yLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnNlYXJjaENvbnRyb2wudmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hY3Rpb24uZW1pdChjb250cm9sVmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhpcy5zZWFyY2hDb250cm9sLlxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ3NlYXJjaENvbnRyb2wnLCB0aGlzLnNlYXJjaENvbnRyb2wpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RXJyb3JNZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaENvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJykgPyAnWW91IG11c3QgZW50ZXIgYSB2YWx1ZScgOlxuICAgICAgdGhpcy5zZWFyY2hDb250cm9sLmhhc0Vycm9yKCdtaW5sZW5ndGgnKSA/ICd1c2VybmFtZSBzaG91bGQgYmUgbW9yZSB0aGFuIDIgbGV0dGVycycgOlxuICAgICAgICAnJztcbiAgfVxuXG4gIGdldEZpZWxkVmFsdWUoKSB7XG4gIFx0Y29uc3QgdmFsdWUgPSB0aGlzLnNlYXJjaENvbnRyb2wudmFsdWU7XG4gIFx0dGhpcy5nZXRWYWx1ZS5lbWl0KHZhbHVlKVxuICB9XG5cbiAgbmdEZXN0cm95KCkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbn1cbiJdfQ==