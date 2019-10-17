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
    SukuSearchWidgetComponent.prototype.getValue = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.searchControl.value;
        this.action.emit(value);
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
                    template: "<div class=\"col row mt-3 ml-0\">\n\t<div class=\"col-lg-9 col-md-9 col-sm-8 p-0\">\n\t<input type=\"search\" class=\"col p-1 inputStyle pl-3\"  [style.font-weight]=\"searchFieldFontWeight\" [formControl]=\"searchControl\" [style.font-size.px]=\"searchFieldFontSize\" [style.color]=\"searchFieldFontColor\" placeholder=\"{{searchFiledPlaceHolder}}\" id=\"searchControl\" name=\"searchControl\"\n\taria-label=\"Search through site content\">\n\t</div>\n\t<div class=\"col-lg-3 col-md-3 col-sm-4 p-0\">\n\t<button type=\"button\" id=\"{{buttonId}}\" class=\"col suku-info buttonHeight\" [disabled]=\"!searchControl?.value\" [style.font-size.px]=\"buttonFontSize\" [style.font-weight]=\"buttonFontWeight\" (click)=\"getValue();\">Search</button>\n\t</div>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info{border-top-right-radius:1rem;border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-default-bg);color:var(--suku-text-heading);font-family:var(--suku-primary-font)}.inputStyle{border-bottom-left-radius:1rem;border:2px solid #bcbaba}.inputStyle:focus,.suku-info:focus{outline-width:0}@media (max-width:575px){.suku-info{border-bottom-left-radius:1rem;border-top-right-radius:0}.inputStyle{border-top-right-radius:1rem;border-bottom-left-radius:0}}.buttonHeight{height:100%}"]
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
    SukuSearchWidgetComponent.prototype.onChangeAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zZWFyY2gtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXNlYXJjaC13aWRnZXQvc3VrdS1zZWFyY2gtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFxQixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLFdBQVcsRUFBOEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckY7SUE4RUU7UUF4RWlDLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUN2QiwyQkFBc0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUMzQyx5QkFBb0IsR0FBRyxPQUFPLENBQUM7UUFDL0MsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUNqQixlQUFVLEdBQUcsWUFBWSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDcEIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUsvQyxrQkFBYSxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTNCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxVQUFVLENBQUM7UUFFUCxtQkFBYyxHQUFHLElBQUksQ0FBQztRQUNyQixvQkFBZSxHQUFHLGtCQUFrQixDQUFDO1FBQ3JDLG9CQUFlLEdBQUcsZ0JBQWdCLENBQUM7UUFDakMsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQWlEekMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTlCLENBQUM7SUFuRGpCLHNCQUNJLDRDQUFLOzs7OztRQURULFVBQ1UsR0FBRztZQUNYLElBQUksR0FBRyxFQUFF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bkluaXQsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nRm9ybSwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3Utc2VhcmNoLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXNlYXJjaC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXNlYXJjaC13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1U2VhcmNoV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdzZWFyY2gtZmllbGQtZm9udC1zaXplJykgc2VhcmNoRmllbGRGb250U2l6ZSA9IDE2O1xuICBASW5wdXQoJ3NlYXJjaC1maWVsZC1wbGFjZWhvbGRlcicpIHNlYXJjaEZpbGVkUGxhY2VIb2xkZXIgPSAnU2VhcmNoIGhlcmUuLi4nO1xuICBASW5wdXQoJ3NlYXJjaC1maWVsZC1mb250LWNvbG9yJykgc2VhcmNoRmllbGRGb250Q29sb3IgPSAnYmxhY2snO1xuICBASW5wdXQoJ2ZpZWxkSWQnKSBmaWVsZElkID0gJ2ZpZWxkSWQnO1xuICBASW5wdXQoJ2ZpZWxkVmFsdWUnKSBmaWVsZFZhbHVlID0gJ2ZpZWxkVmFsdWUnO1xuICBASW5wdXQoJ2J1dHRvbklkJykgYnV0dG9uSWQgPSAnYnV0dG9uSWQnO1xuICBASW5wdXQoJ2J1dHRvbk5hbWUnKSBidXR0b25OYW1lID0gJ2J1dHRvbk5hbWUnO1xuICBASW5wdXQoJ2J1dHRvbkZvbnRTaXplJykgYnV0dG9uRm9udFNpemU7XHRcbiAgQElucHV0KCdidXR0b25Gb250V2VpZ2h0JykgYnV0dG9uRm9udFdlaWdodDtcbiAgQElucHV0KCdzZWFyY2hGaWVsZEZvbnRXZWlnaHQnKSBzZWFyY2hGaWVsZEZvbnRXZWlnaHQ7XG4gIF9zdWJzY3JpcHRpb247XG4gIHNlYXJjaENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICBASW5wdXQoKSBwYXR0ZXJuO1xuICBASW5wdXQoKSBjb2xvciA9ICdwcmltYXJ5JztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnVXNlcm5hbWUnO1xuICBASW5wdXQoJ2N1c3RvbS1jbGFzcycpIGN1c3RvbUNsYXNzO1xuICBASW5wdXQoJ2VuYWJsZS11c2VyLWljb24nKSBlbmFibGVVc2VySWNvbiA9IHRydWU7XG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS1vbmUnKSBlcnJvck1lc3NhZ2VPbmUgPSAnQ2Fubm90IGJlIGJsYW5rLic7XG4gIEBJbnB1dCgnZXJyb3ItbWVzc2FnZS10d28nKSBlcnJvck1lc3NhZ2VUd28gPSAnSW52YWxpZCB2YWx1ZS4nO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtdGhyZWUnKSBlcnJvck1lc3NhZ2VUaHJlZSA9ICcnO1xuICBASW5wdXQoJ2Vycm9yLW1lc3NhZ2UtZm91cicpIGVycm9yTWVzc2FnZUZvdXIgPSAnJztcbiAgQElucHV0KCd2YWx1ZScpXG4gIHNldCB2YWx1ZSh2YWwpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLnNlYXJjaENvbnRyb2wucGF0Y2hWYWx1ZSh2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlYXJjaENvbnRyb2wucGF0Y2hWYWx1ZSh2YWwpO1xuICAgICAgLy8gdGhpcy5zZWFyY2hDb250cm9sLmVuYWJsZSgpO1xuICAgIH1cbiAgfSAgXG4gIEBJbnB1dCgnZGlzYWJsZWQnKVxuICBzZXQgZGlzYWJsZSh2YWwpIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLnNlYXJjaENvbnRyb2wuZGlzYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlYXJjaENvbnRyb2wuZW5hYmxlKCk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgnZW5hYmxlLXJlcXVpcmVkLXZhbGlkYXRvcicpXG4gIHNldCBlbmFibGVSZXF1aXJlZFZhbGlkYXRvcih2YWwpIHtcbiAgICBjb25zb2xlLmxvZygnZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3InLCB2YWwpO1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5zZWFyY2hDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCdlbmFibGUtcGF0dGVybi12YWxpZGF0b3InKVxuICBzZXQgZW5hYmxlUGF0dGVyblZhbGlkYXRvcnModmFsKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5zZWFyY2hDb250cm9sLnNldFZhbGlkYXRvcnMoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybih0aGlzLnBhdHRlcm4pXSk7XG4gICAgICB0aGlzLnNlYXJjaENvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoJ2VuYWJsZS1tYXgtbGVuLXZhbGlkYXRvcicpXG4gIHNldCBlbmFibGVNYXhMZW5WYWxpZGF0b3JzKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCdlbmFibGVNYXhWYWxpZGF0b3InLCB2YWwpO1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMubWF4TGVuZ3RoKHZhbCkpO1xuICAgICAgdGhpcy5zZWFyY2hDb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCdlbmFibGUtbWluLWxlbi12YWxpZGF0b3InKVxuICBzZXQgZW5hYmxlTWluTGVuVmFsaWRhdG9ycyh2YWwpIHtcbiAgICBjb25zb2xlLmxvZygnZW5hYmxlTWluVmFsaWRhdG9yJywgdmFsKTtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLnNlYXJjaENvbnRyb2wuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLm1pbkxlbmd0aCh2YWwpKTtcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuICB9XG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkNoYW5nZUFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuc2VhcmNoQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBjb25zdCBjb250cm9sVmFsdWUgPSB7XG4gICAgICAgICAgZGlydHk6IHRoaXMuc2VhcmNoQ29udHJvbC5kaXJ0eSxcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5zZWFyY2hDb250cm9sLmRpc2FibGVkLFxuICAgICAgICAgIGVuYWJsZWQ6IHRoaXMuc2VhcmNoQ29udHJvbC5lbmFibGVkLFxuICAgICAgICAgIGVycm9yczogdGhpcy5zZWFyY2hDb250cm9sLmVycm9ycyxcbiAgICAgICAgICBpbnZhbGlkOiB0aGlzLnNlYXJjaENvbnRyb2wuaW52YWxpZCxcbiAgICAgICAgICBwcmlzdGluZTogdGhpcy5zZWFyY2hDb250cm9sLnByaXN0aW5lLFxuICAgICAgICAgIHN0YXR1czogdGhpcy5zZWFyY2hDb250cm9sLnN0YXR1cyxcbiAgICAgICAgICB0b3VjaGVkOiB0aGlzLnNlYXJjaENvbnRyb2wudG91Y2hlZCxcbiAgICAgICAgICB1bnRvdWNoZWQ6IHRoaXMuc2VhcmNoQ29udHJvbC51bnRvdWNoZWQsXG4gICAgICAgICAgdmFsaWQ6IHRoaXMuc2VhcmNoQ29udHJvbC52YWxpZCxcbiAgICAgICAgICB2YWxpZGF0b3I6IHRoaXMuc2VhcmNoQ29udHJvbC52YWxpZGF0b3IsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuc2VhcmNoQ29udHJvbC52YWx1ZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFjdGlvbi5lbWl0KGNvbnRyb2xWYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGlzLnNlYXJjaENvbnRyb2wuXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnc2VhcmNoQ29udHJvbCcsIHRoaXMuc2VhcmNoQ29udHJvbCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRFcnJvck1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKSA/ICdZb3UgbXVzdCBlbnRlciBhIHZhbHVlJyA6XG4gICAgICB0aGlzLnNlYXJjaENvbnRyb2wuaGFzRXJyb3IoJ21pbmxlbmd0aCcpID8gJ3VzZXJuYW1lIHNob3VsZCBiZSBtb3JlIHRoYW4gMiBsZXR0ZXJzJyA6XG4gICAgICAgICcnO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gIFx0Y29uc3QgdmFsdWUgPSB0aGlzLnNlYXJjaENvbnRyb2wudmFsdWU7XG4gIFx0dGhpcy5hY3Rpb24uZW1pdCh2YWx1ZSlcbiAgfVxuXG4gIG5nRGVzdHJveSgpIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG59XG4iXX0=