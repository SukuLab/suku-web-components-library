/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
var SukuDateTimePickerComponent = /** @class */ (function () {
    function SukuDateTimePickerComponent() {
        this.control = 'controlName';
        this.placeholder = 'Date picker';
        this.dateId = 'datepicker';
        this.errorMsg = 'Cannot be blank';
    }
    /**
     * @return {?}
     */
    SukuDateTimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} field
     * @return {?}
     */
    SukuDateTimePickerComponent.prototype.isFieldValid = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return ((!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSumitAttempt));
    };
    SukuDateTimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-date-time-picker',
                    template: "<div class=\"col flex\" [formGroup]=\"form\">\n  <mat-form-field class=\"col p-0\">\n    <input matInput id=\"{{dateId}}\" formControlName=\"{{control}}\" placeholder=\"{{placeholder}}\" min=\"{{min}}\"\n      max=\"{{max}}\" [owlDateTimeTrigger]=\"picker\" [owlDateTime]=\"picker\">\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <owl-date-time #picker></owl-date-time>\n    <mat-error>\n      <span class=\"err_style\">\n        <span *ngIf=\"form.hasError('required',[control])\" id=\"errorMsg{{dateId}}\">{{errorMsg}}</span>\n      </span>\n    </mat-error>\n  </mat-form-field>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SukuDateTimePickerComponent.ctorParameters = function () { return []; };
    SukuDateTimePickerComponent.propDecorators = {
        form: [{ type: Input }],
        control: [{ type: Input }],
        placeholder: [{ type: Input, args: ['place-holder',] }],
        dateId: [{ type: Input, args: ['id',] }],
        max: [{ type: Input, args: ['max-date',] }],
        min: [{ type: Input, args: ['min-date',] }],
        formSumitAttempt: [{ type: Input }],
        errorMsg: [{ type: Input }]
    };
    return SukuDateTimePickerComponent;
}());
export { SukuDateTimePickerComponent };
if (false) {
    /** @type {?} */
    SukuDateTimePickerComponent.prototype.form;
    /** @type {?} */
    SukuDateTimePickerComponent.prototype.control;
    /** @type {?} */
    SukuDateTimePickerComponent.prototype.placeholder;
    /** @type {?} */
    SukuDateTimePickerComponent.prototype.dateId;
    /** @type {?} */
    SukuDateTimePickerComponent.prototype.max;
    /** @type {?} */
    SukuDateTimePickerComponent.prototype.min;
    /** @type {?} */
    SukuDateTimePickerComponent.prototype.formSumitAttempt;
    /** @type {?} */
    SukuDateTimePickerComponent.prototype.errorMsg;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWRhdGUtdGltZS1waWNrZXIvc3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczQztJQWdCRTtRQVJTLFlBQU8sR0FBRyxhQUFhLENBQUM7UUFDVixnQkFBVyxHQUFHLGFBQWEsQ0FBQztRQUN0QyxXQUFNLEdBQUcsWUFBWSxDQUFDO1FBSTFCLGFBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQUV0QixDQUFDOzs7O0lBRWpCLDhDQUFROzs7SUFBUixjQUFhLENBQUM7Ozs7O0lBRWYsa0RBQVk7Ozs7SUFBWixVQUFhLEtBQWE7UUFDekIsT0FBTyxDQUNOLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzdELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUN6RCxDQUFDO0lBQ0gsQ0FBQzs7Z0JBekJELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxnb0JBQXFEOztpQkFFdEQ7Ozs7O3VCQUdFLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLLFNBQUMsY0FBYzt5QkFDcEIsS0FBSyxTQUFDLElBQUk7c0JBQ1YsS0FBSyxTQUFDLFVBQVU7c0JBQ2hCLEtBQUssU0FBQyxVQUFVO21DQUNoQixLQUFLOzJCQUNMLEtBQUs7O0lBWVIsa0NBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXJCWSwyQkFBMkI7OztJQUV0QywyQ0FBeUI7O0lBQ3pCLDhDQUFpQzs7SUFDakMsa0RBQW1EOztJQUNuRCw2Q0FBbUM7O0lBQ25DLDBDQUF1Qjs7SUFDdkIsMENBQXVCOztJQUN2Qix1REFBMEI7O0lBQzFCLCtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IF9rZXlWYWx1ZURpZmZlcnNGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvYXBwbGljYXRpb25fbW9kdWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1kYXRlLXRpbWUtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VEYXRlVGltZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBjb250cm9sID0gJ2NvbnRyb2xOYW1lJztcbiAgQElucHV0KCdwbGFjZS1ob2xkZXInKSBwbGFjZWhvbGRlciA9ICdEYXRlIHBpY2tlcic7XG4gIEBJbnB1dCgnaWQnKSBkYXRlSWQgPSAnZGF0ZXBpY2tlcic7XG4gIEBJbnB1dCgnbWF4LWRhdGUnKSBtYXg7XG4gIEBJbnB1dCgnbWluLWRhdGUnKSBtaW47XG4gIEBJbnB1dCgpIGZvcm1TdW1pdEF0dGVtcHQ7XG4gIEBJbnB1dCgpIGVycm9yTXNnID0gJ0Nhbm5vdCBiZSBibGFuayc7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG4gIFxuXHRpc0ZpZWxkVmFsaWQoZmllbGQ6IHN0cmluZykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQoIXRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmIHRoaXMuZm9ybS5nZXQoZmllbGQpLnRvdWNoZWQpIHx8XG5cdFx0XHQodGhpcy5mb3JtLmdldChmaWVsZCkudW50b3VjaGVkICYmIHRoaXMuZm9ybVN1bWl0QXR0ZW1wdClcblx0XHQpO1xuXHR9XG59XG4iXX0=