/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-date-time-picker/suku-date-time-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as _moment from 'moment';
/** @type {?} */
const moment = ((/** @type {?} */ (_moment))).default ? ((/** @type {?} */ (_moment))).default : _moment;
export class SukuDateTimePickerComponent {
    constructor() {
        this.control = 'controlName';
        this.placeholder = 'Date picker';
        this.dateId = 'datepicker';
        this.errorMsg = 'Cannot be blank';
        this.dateSelect = new EventEmitter();
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
    /**
     * @param {?} val
     * @return {?}
     */
    selectedDate(val) {
        console.log('this is value ', val._selected);
        /** @type {?} */
        const selectedDate = val._selected;
        this.dateSelect.emit(selectedDate);
    }
}
SukuDateTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-date-time-picker',
                template: "<div class=\"col flex\" [formGroup]=\"form\">\n  <mat-form-field class=\"col p-0\">\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <owl-date-time #picker (afterPickerClosed)=\"selectedDate(picker)\" [startAt]=\"startAt\"></owl-date-time>\n    <input matInput id=\"{{dateId}}\" formControlName=\"{{control}}\" placeholder=\"{{placeholder}}\" [min]=\"min\" [max]=\"max\"\n      [owlDateTimeTrigger]=\"picker\" [owlDateTime]=\"picker\">\n    <mat-error>\n      <span class=\"err_style\">\n        <span *ngIf=\"form.hasError('required',[control])\" id=\"errorMsg{{dateId}}\">{{errorMsg}}</span>\n      </span>\n    </mat-error>\n  </mat-form-field>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
SukuDateTimePickerComponent.ctorParameters = () => [];
SukuDateTimePickerComponent.propDecorators = {
    form: [{ type: Input }],
    control: [{ type: Input }],
    placeholder: [{ type: Input, args: ['place-holder',] }],
    dateId: [{ type: Input, args: ['id',] }],
    max: [{ type: Input, args: ['max-date',] }],
    min: [{ type: Input, args: ['min-date',] }],
    startAt: [{ type: Input, args: ['start-date',] }],
    formSumitAttempt: [{ type: Input }],
    errorMsg: [{ type: Input }],
    dateSelect: [{ type: Output }]
};
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
    SukuDateTimePickerComponent.prototype.startAt;
    /** @type {?} */
    SukuDateTimePickerComponent.prototype.formSumitAttempt;
    /** @type {?} */
    SukuDateTimePickerComponent.prototype.errorMsg;
    /** @type {?} */
    SukuDateTimePickerComponent.prototype.dateSelect;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWRhdGUtdGltZS1waWNrZXIvc3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBZSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztNQUU1QixNQUFNLEdBQUcsQ0FBQyxtQkFBQSxPQUFPLEVBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxPQUFPLEVBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTztBQU81RSxNQUFNLE9BQU8sMkJBQTJCO0lBYXRDO1FBVlMsWUFBTyxHQUFHLGFBQWEsQ0FBQztRQUNWLGdCQUFXLEdBQUcsYUFBYSxDQUFDO1FBQ3RDLFdBQU0sR0FBRyxZQUFZLENBQUM7UUFLMUIsYUFBUSxHQUFHLGlCQUFpQixDQUFDO1FBQzdCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXpCLENBQUM7Ozs7SUFFakIsUUFBUSxLQUFLLENBQUM7Ozs7O0lBRWYsWUFBWSxDQUFDLEtBQWE7UUFDekIsT0FBTyxDQUNOLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzdELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUN6RCxDQUFDO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsR0FBRztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztjQUN0QyxZQUFZLEdBQUcsR0FBRyxDQUFDLFNBQVM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7O1lBakNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQywrckJBQXFEOzthQUV0RDs7Ozs7bUJBR0UsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUssU0FBQyxjQUFjO3FCQUNwQixLQUFLLFNBQUMsSUFBSTtrQkFDVixLQUFLLFNBQUMsVUFBVTtrQkFDaEIsS0FBSyxTQUFDLFVBQVU7c0JBQ2hCLEtBQUssU0FBQyxZQUFZOytCQUNsQixLQUFLO3VCQUNMLEtBQUs7eUJBQ04sTUFBTTs7OztJQVROLDJDQUF5Qjs7SUFDekIsOENBQWlDOztJQUNqQyxrREFBbUQ7O0lBQ25ELDZDQUFtQzs7SUFDbkMsMENBQXVCOztJQUN2QiwwQ0FBdUI7O0lBQ3ZCLDhDQUE2Qjs7SUFDN0IsdURBQTBCOztJQUMxQiwrQ0FBc0M7O0lBQ3ZDLGlEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBfa2V5VmFsdWVEaWZmZXJzRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL2FwcGxpY2F0aW9uX21vZHVsZSc7XG5pbXBvcnQgKiBhcyBfbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xuY29uc3QgbW9tZW50ID0gKF9tb21lbnQgYXMgYW55KS5kZWZhdWx0ID8gKF9tb21lbnQgYXMgYW55KS5kZWZhdWx0IDogX21vbWVudDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1kYXRlLXRpbWUtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VEYXRlVGltZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBjb250cm9sID0gJ2NvbnRyb2xOYW1lJztcbiAgQElucHV0KCdwbGFjZS1ob2xkZXInKSBwbGFjZWhvbGRlciA9ICdEYXRlIHBpY2tlcic7XG4gIEBJbnB1dCgnaWQnKSBkYXRlSWQgPSAnZGF0ZXBpY2tlcic7XG4gIEBJbnB1dCgnbWF4LWRhdGUnKSBtYXg7XG4gIEBJbnB1dCgnbWluLWRhdGUnKSBtaW47XG4gIEBJbnB1dCgnc3RhcnQtZGF0ZScpIHN0YXJ0QXQ7XG4gIEBJbnB1dCgpIGZvcm1TdW1pdEF0dGVtcHQ7XG4gIEBJbnB1dCgpIGVycm9yTXNnID0gJ0Nhbm5vdCBiZSBibGFuayc7XG5cdEBPdXRwdXQoKSBkYXRlU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuXHRpc0ZpZWxkVmFsaWQoZmllbGQ6IHN0cmluZykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQoIXRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmIHRoaXMuZm9ybS5nZXQoZmllbGQpLnRvdWNoZWQpIHx8XG5cdFx0XHQodGhpcy5mb3JtLmdldChmaWVsZCkudW50b3VjaGVkICYmIHRoaXMuZm9ybVN1bWl0QXR0ZW1wdClcblx0XHQpO1xuICB9XG5cbiAgc2VsZWN0ZWREYXRlKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHZhbHVlICcsdmFsLl9zZWxlY3RlZCk7XG4gICAgY29uc3Qgc2VsZWN0ZWREYXRlID0gdmFsLl9zZWxlY3RlZDtcbiAgICB0aGlzLmRhdGVTZWxlY3QuZW1pdChzZWxlY3RlZERhdGUpO1xuICB9XG59XG4iXX0=