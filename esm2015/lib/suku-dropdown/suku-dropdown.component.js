/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class SukuDropdownComponent {
    constructor() {
        this.control = 'productTraceability';
        this.data = [];
        this.icon = '../assets/images/arrow-icon.png';
        this.keyValue = 'productName';
        this.displayKey = 'productName';
        this.placeholder = 'select product from this listing';
        this.selectId = 'sttProductTraceability';
        this.errorMsg = 'Cannot be blank';
        this.customSelectClass = '';
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
                template: "<span [formGroup]=\"form\">\n  <mat-form-field class=\"col p-0\">\n    <mat-select id=\"{{selectId}}\" [class]=\"customSelectClass\" #selector formControlName=\"{{control}}\"\n      (selectionChange)=\"select.emit(selector.value)\" [placeholder]=\"placeholder\">\n      <mat-option *ngFor=\"let item of data;let i=index\" value=\"{{item[keyValue]}}\" id=\"option{{i}}\">\n        {{item[displayKey]}}\n      </mat-option>\n    </mat-select>\n    <span matSuffix>\n      <mat-icon><span><img height=\"23\" [src]=\"icon\" width=\"20\"></span></mat-icon>\n    </span>\n    <!-- *ngIf=\"isFieldValid(control)\" -->\n    <mat-error>\n      <span class=\"err_style\">\n        <span *ngIf=\"form.hasError('required',[control])\" id=\"countryReq\">{{errorMsg}}\n        </span>\n      </span>\n    </mat-error>\n  </mat-form-field>\n</span>",
                styles: [""]
            }] }
];
/** @nocollapse */
SukuDropdownComponent.ctorParameters = () => [];
SukuDropdownComponent.propDecorators = {
    form: [{ type: Input }],
    control: [{ type: Input }],
    data: [{ type: Input }],
    icon: [{ type: Input }],
    keyValue: [{ type: Input }],
    displayKey: [{ type: Input }],
    placeholder: [{ type: Input }],
    formSumitAttempt: [{ type: Input }],
    selectId: [{ type: Input }],
    errorMsg: [{ type: Input }],
    customSelectClass: [{ type: Input }],
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
    SukuDropdownComponent.prototype.icon;
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
    SukuDropdownComponent.prototype.select;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kcm9wZG93bi9zdWt1LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRM0MsTUFBTSxPQUFPLHFCQUFxQjtJQWFqQztRQVhTLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNoQyxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsU0FBSSxHQUFHLGlDQUFpQyxDQUFDO1FBQ3pDLGFBQVEsR0FBRyxhQUFhLENBQUM7UUFDekIsZUFBVSxHQUFHLGFBQWEsQ0FBQztRQUMzQixnQkFBVyxHQUFHLGtDQUFrQyxDQUFDO1FBRWpELGFBQVEsR0FBRyx3QkFBd0IsQ0FBQztRQUNwQyxhQUFRLEdBQUcsaUJBQWlCLENBQUM7UUFDN0Isc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFaEIsUUFBUSxLQUFJLENBQUM7Ozs7O0lBRWIsWUFBWSxDQUFDLEtBQWE7UUFDekIsT0FBTyxDQUNOLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzdELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUN6RCxDQUFDO0lBQ0gsQ0FBQzs7O1lBM0JELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsZUFBZTtnQkFDekIsNjBCQUE2Qzs7YUFFN0M7Ozs7O21CQUVDLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7Z0NBQ0wsS0FBSztxQkFDTCxNQUFNOzs7O0lBWFAscUNBQXlCOztJQUN6Qix3Q0FBeUM7O0lBQ3pDLHFDQUFtQjs7SUFDbkIscUNBQWtEOztJQUNsRCx5Q0FBa0M7O0lBQ2xDLDJDQUFvQzs7SUFDcEMsNENBQTBEOztJQUMxRCxpREFBMEI7O0lBQzFCLHlDQUE2Qzs7SUFDN0MseUNBQXNDOztJQUN0QyxrREFBZ0M7O0lBQ2hDLHVDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IF9rZXlWYWx1ZURpZmZlcnNGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvYXBwbGljYXRpb25fbW9kdWxlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1kcm9wZG93bicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtZHJvcGRvd24uY29tcG9uZW50LnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdURyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuXHRASW5wdXQoKSBjb250cm9sID0gJ3Byb2R1Y3RUcmFjZWFiaWxpdHknO1xuXHRASW5wdXQoKSBkYXRhID0gW107XG5cdEBJbnB1dCgpIGljb24gPSAnLi4vYXNzZXRzL2ltYWdlcy9hcnJvdy1pY29uLnBuZyc7XG5cdEBJbnB1dCgpIGtleVZhbHVlID0gJ3Byb2R1Y3ROYW1lJztcblx0QElucHV0KCkgZGlzcGxheUtleSA9ICdwcm9kdWN0TmFtZSc7XG5cdEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ3NlbGVjdCBwcm9kdWN0IGZyb20gdGhpcyBsaXN0aW5nJztcblx0QElucHV0KCkgZm9ybVN1bWl0QXR0ZW1wdDtcblx0QElucHV0KCkgc2VsZWN0SWQgPSAnc3R0UHJvZHVjdFRyYWNlYWJpbGl0eSc7XG5cdEBJbnB1dCgpIGVycm9yTXNnID0gJ0Nhbm5vdCBiZSBibGFuayc7XG5cdEBJbnB1dCgpIGN1c3RvbVNlbGVjdENsYXNzID0gJyc7XG5cdEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRuZ09uSW5pdCgpIHt9XG5cblx0aXNGaWVsZFZhbGlkKGZpZWxkOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0KCF0aGlzLmZvcm0uZ2V0KGZpZWxkKS52YWxpZCAmJiB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKSB8fFxuXHRcdFx0KHRoaXMuZm9ybS5nZXQoZmllbGQpLnVudG91Y2hlZCAmJiB0aGlzLmZvcm1TdW1pdEF0dGVtcHQpXG5cdFx0KTtcblx0fVxufVxuIl19