/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class SukuDropdownComponent {
    // @Input() icon = 'suku-arrow-icon';
    // @Input('icon-custom-class') iconCustomClass = 'arrow-icon';
    constructor() {
        this.control = 'productTraceability';
        this.data = [];
        this.keyValue = 'productName';
        this.displayKey = 'productName';
        this.placeholder = 'select product from this listing';
        this.selectId = 'sttProductTraceability';
        this.errorMsg = 'Cannot be blank';
        this.customSelectClass = '';
        this.icon = 'suku-dropdown-icon';
        this.iconCustomClass = 'arrow-icon';
        this.iconId = 'arrow';
        this.disabled = false;
        this.select = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} field
     * @return {?}
     */
    isFieldValid(field) {
        return ((!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSumitAttempt));
    }
}
SukuDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-dropdown',
                template: "<span [formGroup]=\"form\">\r\n  <mat-form-field class=\"col p-0\">\r\n    <mat-select id=\"{{selectId}}\" [class]=\"customSelectClass\" [disabled]=\"disabled\" #selector\r\n      formControlName=\"{{control}}\" (selectionChange)=\"select.emit(selector.value)\" [placeholder]=\"placeholder\">\r\n      <mat-option *ngFor=\"let item of data;let i=index\" value=\"{{item[keyValue]}}\" id=\"option{{i}}\">\r\n        {{item[displayKey]}}\r\n      </mat-option>\r\n    </mat-select>\r\n    <span id=\"dropdown-arrow-icon\" matSuffix>\r\n      <mat-icon>\r\n        <span>\r\n          <i [id]=\"iconId\" class=\"{{iconCustomClass}} {{icon}}\"></i>\r\n          <!-- <img [id]=\"iconId\" class=\"{{iconCustomClass}}\" height=\"23\" src=\"{{icon}}\" width=\"20\"> -->\r\n        </span>\r\n      </mat-icon>\r\n    </span>\r\n    <mat-error>\r\n      <span class=\"err_style\">\r\n        <span *ngIf=\"form.hasError('required',[control])\" id=\"countryReq\">{{errorMsg}}</span>\r\n      </span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n</span>",
                styles: ["::ng-deep .mat-select-arrow{border:0!important;-webkit-appearance:none;-moz-appearance:none}:host ::ng-deep.mat-select-trigger{height:1.7em!important;padding-bottom:.5em!important}:host ::ng-deep .mat-form-field-suffix{top:9px!important}.mat-select-panel{margin-left:10px!important}.mat-select-panel:focus,.mat-select-trigger:focus{outline:0!important}::ng-deep mat-select:focus{outline:0!important}.arrow-icon{font-size:2.5em}"]
            }] }
];
/** @nocollapse */
SukuDropdownComponent.ctorParameters = () => [];
SukuDropdownComponent.propDecorators = {
    form: [{ type: Input }],
    control: [{ type: Input }],
    data: [{ type: Input }],
    keyValue: [{ type: Input }],
    displayKey: [{ type: Input }],
    placeholder: [{ type: Input }],
    formSumitAttempt: [{ type: Input }],
    selectId: [{ type: Input }],
    errorMsg: [{ type: Input }],
    customSelectClass: [{ type: Input }],
    icon: [{ type: Input }],
    iconCustomClass: [{ type: Input, args: ['icon-custom-class',] }],
    iconId: [{ type: Input, args: ['icon-id',] }],
    disabled: [{ type: Input, args: ['disabled',] }],
    select: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuDropdownComponent.prototype.form;
    /** @type {?} */
    SukuDropdownComponent.prototype.control;
    /** @type {?} */
    SukuDropdownComponent.prototype.data;
    /** @type {?} */
    SukuDropdownComponent.prototype.keyValue;
    /** @type {?} */
    SukuDropdownComponent.prototype.displayKey;
    /** @type {?} */
    SukuDropdownComponent.prototype.placeholder;
    /** @type {?} */
    SukuDropdownComponent.prototype.formSumitAttempt;
    /** @type {?} */
    SukuDropdownComponent.prototype.selectId;
    /** @type {?} */
    SukuDropdownComponent.prototype.errorMsg;
    /** @type {?} */
    SukuDropdownComponent.prototype.customSelectClass;
    /** @type {?} */
    SukuDropdownComponent.prototype.icon;
    /** @type {?} */
    SukuDropdownComponent.prototype.iconCustomClass;
    /** @type {?} */
    SukuDropdownComponent.prototype.iconId;
    /** @type {?} */
    SukuDropdownComponent.prototype.disabled;
    /** @type {?} */
    SukuDropdownComponent.prototype.select;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kcm9wZG93bi9zdWt1LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRM0MsTUFBTSxPQUFPLHFCQUFxQjs7O0lBbUJqQztRQWpCUyxZQUFPLEdBQUcscUJBQXFCLENBQUM7UUFDaEMsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBRyxhQUFhLENBQUM7UUFDekIsZUFBVSxHQUFHLGFBQWEsQ0FBQztRQUMzQixnQkFBVyxHQUFHLGtDQUFrQyxDQUFDO1FBRWpELGFBQVEsR0FBRyx3QkFBd0IsQ0FBQztRQUNwQyxhQUFRLEdBQUcsaUJBQWlCLENBQUM7UUFDN0Isc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQztRQUNULG9CQUFlLEdBQUcsWUFBWSxDQUFDO1FBQ3pDLFdBQU0sR0FBRyxPQUFPLENBQUM7UUFDaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUMxQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUl0QixDQUFDOzs7O0lBRWpCLFFBQVEsS0FBSyxDQUFDOzs7OztJQUVkLFlBQVksQ0FBQyxLQUFhO1FBQ3pCLE9BQU8sQ0FDTixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUM3RCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FDekQsQ0FBQztJQUNILENBQUM7OztZQWpDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLCtoQ0FBNkM7O2FBRTdDOzs7OzttQkFFQyxLQUFLO3NCQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzsrQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSztnQ0FDTCxLQUFLO21CQUNMLEtBQUs7OEJBQ0wsS0FBSyxTQUFDLG1CQUFtQjtxQkFDekIsS0FBSyxTQUFDLFNBQVM7dUJBQ2YsS0FBSyxTQUFDLFVBQVU7cUJBQ2hCLE1BQU07Ozs7SUFkUCxxQ0FBeUI7O0lBQ3pCLHdDQUF5Qzs7SUFDekMscUNBQW1COztJQUNuQix5Q0FBa0M7O0lBQ2xDLDJDQUFvQzs7SUFDcEMsNENBQTBEOztJQUMxRCxpREFBMEI7O0lBQzFCLHlDQUE2Qzs7SUFDN0MseUNBQXNDOztJQUN0QyxrREFBZ0M7O0lBQ2hDLHFDQUFxQzs7SUFDckMsZ0RBQTJEOztJQUMzRCx1Q0FBbUM7O0lBQ25DLHlDQUFvQzs7SUFDcEMsdUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IF9rZXlWYWx1ZURpZmZlcnNGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvYXBwbGljYXRpb25fbW9kdWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3VrdS1kcm9wZG93bicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL3N1a3UtZHJvcGRvd24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdURyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KCkgY29udHJvbCA9ICdwcm9kdWN0VHJhY2VhYmlsaXR5JztcclxuXHRASW5wdXQoKSBkYXRhID0gW107XHJcblx0QElucHV0KCkga2V5VmFsdWUgPSAncHJvZHVjdE5hbWUnO1xyXG5cdEBJbnB1dCgpIGRpc3BsYXlLZXkgPSAncHJvZHVjdE5hbWUnO1xyXG5cdEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ3NlbGVjdCBwcm9kdWN0IGZyb20gdGhpcyBsaXN0aW5nJztcclxuXHRASW5wdXQoKSBmb3JtU3VtaXRBdHRlbXB0O1xyXG5cdEBJbnB1dCgpIHNlbGVjdElkID0gJ3N0dFByb2R1Y3RUcmFjZWFiaWxpdHknO1xyXG5cdEBJbnB1dCgpIGVycm9yTXNnID0gJ0Nhbm5vdCBiZSBibGFuayc7XHJcblx0QElucHV0KCkgY3VzdG9tU2VsZWN0Q2xhc3MgPSAnJztcclxuXHRASW5wdXQoKSBpY29uID0gJ3N1a3UtZHJvcGRvd24taWNvbic7XHJcblx0QElucHV0KCdpY29uLWN1c3RvbS1jbGFzcycpIGljb25DdXN0b21DbGFzcyA9ICdhcnJvdy1pY29uJztcclxuXHRASW5wdXQoJ2ljb24taWQnKSBpY29uSWQgPSAnYXJyb3cnO1xyXG5cdEBJbnB1dCgnZGlzYWJsZWQnKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cdEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0Ly8gQElucHV0KCkgaWNvbiA9ICdzdWt1LWFycm93LWljb24nO1xyXG5cdC8vIEBJbnB1dCgnaWNvbi1jdXN0b20tY2xhc3MnKSBpY29uQ3VzdG9tQ2xhc3MgPSAnYXJyb3ctaWNvbic7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkgeyB9XHJcblxyXG5cdGlzRmllbGRWYWxpZChmaWVsZDogc3RyaW5nKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQoIXRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmIHRoaXMuZm9ybS5nZXQoZmllbGQpLnRvdWNoZWQpIHx8XHJcblx0XHRcdCh0aGlzLmZvcm0uZ2V0KGZpZWxkKS51bnRvdWNoZWQgJiYgdGhpcy5mb3JtU3VtaXRBdHRlbXB0KVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl19