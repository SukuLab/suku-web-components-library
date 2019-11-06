/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as _moment from 'moment';
/** @type {?} */
var moment = ((/** @type {?} */ (_moment))).default ? ((/** @type {?} */ (_moment))).default : _moment;
var SukuDateTimePickerComponent = /** @class */ (function () {
    function SukuDateTimePickerComponent() {
        this.control = 'controlName';
        this.placeholder = 'Date picker';
        this.dateId = 'datepicker';
        this.errorMsg = 'Cannot be blank';
        this.dateSelect = new EventEmitter();
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
    /**
     * @param {?} val
     * @return {?}
     */
    SukuDateTimePickerComponent.prototype.selectedDate = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        console.log('this is value ', val._selected);
        /** @type {?} */
        var selectedDate = val._selected;
        this.dateSelect.emit(selectedDate);
    };
    SukuDateTimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-date-time-picker',
                    template: "<div class=\"col flex\" [formGroup]=\"form\">\r\n  <mat-form-field class=\"col p-0\">\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <owl-date-time #picker (afterPickerClosed)=\"selectedDate(picker)\" [startAt]=\"startAt\"></owl-date-time>\r\n    <input matInput id=\"{{dateId}}\" formControlName=\"{{control}}\" placeholder=\"{{placeholder}}\" [min]=\"min\" [max]=\"max\"\r\n      [owlDateTimeTrigger]=\"picker\" [owlDateTime]=\"picker\">\r\n    <mat-error>\r\n      <span class=\"err_style\">\r\n        <span *ngIf=\"form.hasError('required',[control])\" id=\"errorMsg{{dateId}}\">{{errorMsg}}</span>\r\n      </span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n</div>",
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
        startAt: [{ type: Input, args: ['start-date',] }],
        formSumitAttempt: [{ type: Input }],
        errorMsg: [{ type: Input }],
        dateSelect: [{ type: Output }]
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
    SukuDateTimePickerComponent.prototype.startAt;
    /** @type {?} */
    SukuDateTimePickerComponent.prototype.formSumitAttempt;
    /** @type {?} */
    SukuDateTimePickerComponent.prototype.errorMsg;
    /** @type {?} */
    SukuDateTimePickerComponent.prototype.dateSelect;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWRhdGUtdGltZS1waWNrZXIvc3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFlLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7O0lBRTVCLE1BQU0sR0FBRyxDQUFDLG1CQUFBLE9BQU8sRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLE9BQU8sRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPO0FBRTVFO0lBa0JFO1FBVlMsWUFBTyxHQUFHLGFBQWEsQ0FBQztRQUNWLGdCQUFXLEdBQUcsYUFBYSxDQUFDO1FBQ3RDLFdBQU0sR0FBRyxZQUFZLENBQUM7UUFLMUIsYUFBUSxHQUFHLGlCQUFpQixDQUFDO1FBQzdCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXpCLENBQUM7Ozs7SUFFakIsOENBQVE7OztJQUFSLGNBQWEsQ0FBQzs7Ozs7SUFFZixrREFBWTs7OztJQUFaLFVBQWEsS0FBYTtRQUN6QixPQUFPLENBQ04sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDN0QsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQ3pELENBQUM7SUFDRixDQUFDOzs7OztJQUVELGtEQUFZOzs7O0lBQVosVUFBYSxHQUFHO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7O1lBQ3RDLFlBQVksR0FBRyxHQUFHLENBQUMsU0FBUztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyQyxDQUFDOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLHV0QkFBcUQ7O2lCQUV0RDs7Ozs7dUJBR0UsS0FBSzswQkFDTCxLQUFLOzhCQUNMLEtBQUssU0FBQyxjQUFjO3lCQUNwQixLQUFLLFNBQUMsSUFBSTtzQkFDVixLQUFLLFNBQUMsVUFBVTtzQkFDaEIsS0FBSyxTQUFDLFVBQVU7MEJBQ2hCLEtBQUssU0FBQyxZQUFZO21DQUNsQixLQUFLOzJCQUNMLEtBQUs7NkJBQ04sTUFBTTs7SUFrQlIsa0NBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQTdCWSwyQkFBMkI7OztJQUV0QywyQ0FBeUI7O0lBQ3pCLDhDQUFpQzs7SUFDakMsa0RBQW1EOztJQUNuRCw2Q0FBbUM7O0lBQ25DLDBDQUF1Qjs7SUFDdkIsMENBQXVCOztJQUN2Qiw4Q0FBNkI7O0lBQzdCLHVEQUEwQjs7SUFDMUIsK0NBQXNDOztJQUN2QyxpREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IF9rZXlWYWx1ZURpZmZlcnNGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvYXBwbGljYXRpb25fbW9kdWxlJztcclxuaW1wb3J0ICogYXMgX21vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xyXG5jb25zdCBtb21lbnQgPSAoX21vbWVudCBhcyBhbnkpLmRlZmF1bHQgPyAoX21vbWVudCBhcyBhbnkpLmRlZmF1bHQgOiBfbW9tZW50O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LWRhdGUtdGltZS1waWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWRhdGUtdGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1RGF0ZVRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgQElucHV0KCkgY29udHJvbCA9ICdjb250cm9sTmFtZSc7XHJcbiAgQElucHV0KCdwbGFjZS1ob2xkZXInKSBwbGFjZWhvbGRlciA9ICdEYXRlIHBpY2tlcic7XHJcbiAgQElucHV0KCdpZCcpIGRhdGVJZCA9ICdkYXRlcGlja2VyJztcclxuICBASW5wdXQoJ21heC1kYXRlJykgbWF4O1xyXG4gIEBJbnB1dCgnbWluLWRhdGUnKSBtaW47XHJcbiAgQElucHV0KCdzdGFydC1kYXRlJykgc3RhcnRBdDtcclxuICBASW5wdXQoKSBmb3JtU3VtaXRBdHRlbXB0O1xyXG4gIEBJbnB1dCgpIGVycm9yTXNnID0gJ0Nhbm5vdCBiZSBibGFuayc7XHJcblx0QE91dHB1dCgpIGRhdGVTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG5cdGlzRmllbGRWYWxpZChmaWVsZDogc3RyaW5nKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQoIXRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmIHRoaXMuZm9ybS5nZXQoZmllbGQpLnRvdWNoZWQpIHx8XHJcblx0XHRcdCh0aGlzLmZvcm0uZ2V0KGZpZWxkKS51bnRvdWNoZWQgJiYgdGhpcy5mb3JtU3VtaXRBdHRlbXB0KVxyXG5cdFx0KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdGVkRGF0ZSh2YWwpIHtcclxuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHZhbHVlICcsdmFsLl9zZWxlY3RlZCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZERhdGUgPSB2YWwuX3NlbGVjdGVkO1xyXG4gICAgdGhpcy5kYXRlU2VsZWN0LmVtaXQoc2VsZWN0ZWREYXRlKTtcclxuICB9XHJcbn1cclxuIl19