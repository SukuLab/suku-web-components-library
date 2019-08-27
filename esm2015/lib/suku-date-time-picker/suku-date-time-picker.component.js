/**
 * @fileoverview added by tsickle
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
                template: "<div class=\"col flex\" [formGroup]=\"form\">\n  <mat-form-field class=\"col p-0\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <owl-date-time  #picker (afterPickerClosed)=\"selectedDate(picker)\" ></owl-date-time>\n    <input matInput id=\"{{dateId}}\" formControlName=\"{{control}}\" placeholder=\"{{placeholder}}\" [min]=\"min\"\n      [max]=\"max\" [owlDateTimeTrigger]=\"picker\" [owlDateTime]=\"picker\">\n    <mat-error>\n      <span class=\"err_style\">\n        <span *ngIf=\"form.hasError('required',[control])\" id=\"errorMsg{{dateId}}\">{{errorMsg}}</span>\n      </span>\n    </mat-error>\n  </mat-form-field>\n</div>",
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
    SukuDateTimePickerComponent.prototype.formSumitAttempt;
    /** @type {?} */
    SukuDateTimePickerComponent.prototype.errorMsg;
    /** @type {?} */
    SukuDateTimePickerComponent.prototype.dateSelect;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWRhdGUtdGltZS1waWNrZXIvc3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFlLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7O01BRTVCLE1BQU0sR0FBRyxDQUFDLG1CQUFBLE9BQU8sRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLE9BQU8sRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPO0FBTzVFLE1BQU0sT0FBTywyQkFBMkI7SUFZdEM7UUFUUyxZQUFPLEdBQUcsYUFBYSxDQUFDO1FBQ1YsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDdEMsV0FBTSxHQUFHLFlBQVksQ0FBQztRQUkxQixhQUFRLEdBQUcsaUJBQWlCLENBQUM7UUFDN0IsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFekIsQ0FBQzs7OztJQUVqQixRQUFRLEtBQUssQ0FBQzs7Ozs7SUFFZixZQUFZLENBQUMsS0FBYTtRQUN6QixPQUFPLENBQ04sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDN0QsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQ3pELENBQUM7SUFDRixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxHQUFHO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7O2NBQ3RDLFlBQVksR0FBRyxHQUFHLENBQUMsU0FBUztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLDZxQkFBcUQ7O2FBRXREOzs7OzttQkFHRSxLQUFLO3NCQUNMLEtBQUs7MEJBQ0wsS0FBSyxTQUFDLGNBQWM7cUJBQ3BCLEtBQUssU0FBQyxJQUFJO2tCQUNWLEtBQUssU0FBQyxVQUFVO2tCQUNoQixLQUFLLFNBQUMsVUFBVTsrQkFDaEIsS0FBSzt1QkFDTCxLQUFLO3lCQUNOLE1BQU07Ozs7SUFSTiwyQ0FBeUI7O0lBQ3pCLDhDQUFpQzs7SUFDakMsa0RBQW1EOztJQUNuRCw2Q0FBbUM7O0lBQ25DLDBDQUF1Qjs7SUFDdkIsMENBQXVCOztJQUN2Qix1REFBMEI7O0lBQzFCLCtDQUFzQzs7SUFDdkMsaURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IF9rZXlWYWx1ZURpZmZlcnNGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvYXBwbGljYXRpb25fbW9kdWxlJztcbmltcG9ydCAqIGFzIF9tb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gJ21vbWVudCc7XG5jb25zdCBtb21lbnQgPSAoX21vbWVudCBhcyBhbnkpLmRlZmF1bHQgPyAoX21vbWVudCBhcyBhbnkpLmRlZmF1bHQgOiBfbW9tZW50O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWRhdGUtdGltZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdURhdGVUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGNvbnRyb2wgPSAnY29udHJvbE5hbWUnO1xuICBASW5wdXQoJ3BsYWNlLWhvbGRlcicpIHBsYWNlaG9sZGVyID0gJ0RhdGUgcGlja2VyJztcbiAgQElucHV0KCdpZCcpIGRhdGVJZCA9ICdkYXRlcGlja2VyJztcbiAgQElucHV0KCdtYXgtZGF0ZScpIG1heDtcbiAgQElucHV0KCdtaW4tZGF0ZScpIG1pbjtcbiAgQElucHV0KCkgZm9ybVN1bWl0QXR0ZW1wdDtcbiAgQElucHV0KCkgZXJyb3JNc2cgPSAnQ2Fubm90IGJlIGJsYW5rJztcblx0QE91dHB1dCgpIGRhdGVTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHsgfVxuICBcblx0aXNGaWVsZFZhbGlkKGZpZWxkOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0KCF0aGlzLmZvcm0uZ2V0KGZpZWxkKS52YWxpZCAmJiB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKSB8fFxuXHRcdFx0KHRoaXMuZm9ybS5nZXQoZmllbGQpLnVudG91Y2hlZCAmJiB0aGlzLmZvcm1TdW1pdEF0dGVtcHQpXG5cdFx0KTtcbiAgfVxuXG4gIHNlbGVjdGVkRGF0ZSh2YWwpIHtcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyB2YWx1ZSAnLHZhbC5fc2VsZWN0ZWQpO1xuICAgIGNvbnN0IHNlbGVjdGVkRGF0ZSA9IHZhbC5fc2VsZWN0ZWRcbiAgICB0aGlzLmRhdGVTZWxlY3QuZW1pdChzZWxlY3RlZERhdGUpO1xuICB9XG59XG4iXX0=