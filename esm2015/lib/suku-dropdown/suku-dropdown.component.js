/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class SukuDropdownComponent {
    constructor() {
        this.control = 'productTraceability';
        this.data = [];
        this.keyValue = 'productName';
        this.displayKey = 'productName';
        this.placeholder = 'select product from this listing';
        this.selectId = 'sttProductTraceability';
        this.errorMsg = 'Cannot be blank';
        this.customSelectClass = '';
        this.icon = 'suku-arrow-icon suku-md';
        this.iconCustomClass = '';
        this.iconId = '';
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
                template: "<span [formGroup]=\"form\">\n  <mat-form-field class=\"col p-0\">\n    <mat-select id=\"{{selectId}}\" [class]=\"customSelectClass\" #selector formControlName=\"{{control}}\"\n      (selectionChange)=\"select.emit(selector.value)\" [placeholder]=\"placeholder\">\n      <mat-option *ngFor=\"let item of data;let i=index\" value=\"{{item[keyValue]}}\" id=\"option{{i}}\">\n        {{item[displayKey]}}\n      </mat-option>\n    </mat-select>\n    <span matSuffix>\n      <mat-icon>\n          <i class=\"{{icon}} {{iconCustomClass}}\" [id]=\"iconId\"></i>\n      </mat-icon>\n    </span>\n    <mat-error>\n      <span class=\"err_style\">\n        <span *ngIf=\"form.hasError('required',[control])\" id=\"countryReq\">{{errorMsg}}</span>\n      </span>\n    </mat-error>\n  </mat-form-field>\n</span>",
                styles: ["::ng-deep .mat-select-arrow{border:0!important;-webkit-appearance:none;-moz-appearance:none}.mat-select-panel{margin-left:10px!important}.mat-select-panel:focus,.mat-select-trigger:focus{outline:0!important}::ng-deep mat-select:focus{outline:0!important}"]
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
    SukuDropdownComponent.prototype.select;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kcm9wZG93bi9zdWt1LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRM0MsTUFBTSxPQUFPLHFCQUFxQjtJQWdCakM7UUFkUyxZQUFPLEdBQUcscUJBQXFCLENBQUM7UUFDaEMsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBRyxhQUFhLENBQUM7UUFDekIsZUFBVSxHQUFHLGFBQWEsQ0FBQztRQUMzQixnQkFBVyxHQUFHLGtDQUFrQyxDQUFDO1FBRWpELGFBQVEsR0FBRyx3QkFBd0IsQ0FBQztRQUNwQyxhQUFRLEdBQUcsaUJBQWlCLENBQUM7UUFDN0Isc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLFNBQUksR0FBRyx5QkFBeUIsQ0FBQztRQUNkLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQy9CLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDcEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFdkIsQ0FBQzs7OztJQUVoQixRQUFRLEtBQUksQ0FBQzs7Ozs7SUFFYixZQUFZLENBQUMsS0FBYTtRQUN6QixPQUFPLENBQ04sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDN0QsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQ3pELENBQUM7SUFDSCxDQUFDOzs7WUE5QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxlQUFlO2dCQUN6QiwyeUJBQTZDOzthQUU3Qzs7Ozs7bUJBRUMsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7Z0NBQ0wsS0FBSzttQkFDTCxLQUFLOzhCQUNMLEtBQUssU0FBQyxtQkFBbUI7cUJBQ3pCLEtBQUssU0FBQyxTQUFTO3FCQUNmLE1BQU07Ozs7SUFiUCxxQ0FBeUI7O0lBQ3pCLHdDQUF5Qzs7SUFDekMscUNBQW1COztJQUNuQix5Q0FBa0M7O0lBQ2xDLDJDQUFvQzs7SUFDcEMsNENBQTBEOztJQUMxRCxpREFBMEI7O0lBQzFCLHlDQUE2Qzs7SUFDN0MseUNBQXNDOztJQUN0QyxrREFBZ0M7O0lBQ2hDLHFDQUEwQzs7SUFDMUMsZ0RBQWlEOztJQUNqRCx1Q0FBOEI7O0lBQzlCLHVDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IF9rZXlWYWx1ZURpZmZlcnNGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvYXBwbGljYXRpb25fbW9kdWxlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1kcm9wZG93bicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtZHJvcGRvd24uY29tcG9uZW50LnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdURyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuXHRASW5wdXQoKSBjb250cm9sID0gJ3Byb2R1Y3RUcmFjZWFiaWxpdHknO1xuXHRASW5wdXQoKSBkYXRhID0gW107XG5cdEBJbnB1dCgpIGtleVZhbHVlID0gJ3Byb2R1Y3ROYW1lJztcblx0QElucHV0KCkgZGlzcGxheUtleSA9ICdwcm9kdWN0TmFtZSc7XG5cdEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ3NlbGVjdCBwcm9kdWN0IGZyb20gdGhpcyBsaXN0aW5nJztcblx0QElucHV0KCkgZm9ybVN1bWl0QXR0ZW1wdDtcblx0QElucHV0KCkgc2VsZWN0SWQgPSAnc3R0UHJvZHVjdFRyYWNlYWJpbGl0eSc7XG5cdEBJbnB1dCgpIGVycm9yTXNnID0gJ0Nhbm5vdCBiZSBibGFuayc7XG5cdEBJbnB1dCgpIGN1c3RvbVNlbGVjdENsYXNzID0gJyc7XG5cdEBJbnB1dCgpIGljb24gPSAnc3VrdS1hcnJvdy1pY29uIHN1a3UtbWQnO1xuXHRASW5wdXQoJ2ljb24tY3VzdG9tLWNsYXNzJykgaWNvbkN1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgnaWNvbi1pZCcpIGljb25JZCA9ICcnO1xuXHRAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRuZ09uSW5pdCgpIHt9XG5cblx0aXNGaWVsZFZhbGlkKGZpZWxkOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0KCF0aGlzLmZvcm0uZ2V0KGZpZWxkKS52YWxpZCAmJiB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKSB8fFxuXHRcdFx0KHRoaXMuZm9ybS5nZXQoZmllbGQpLnVudG91Y2hlZCAmJiB0aGlzLmZvcm1TdW1pdEF0dGVtcHQpXG5cdFx0KTtcblx0fVxufVxuIl19