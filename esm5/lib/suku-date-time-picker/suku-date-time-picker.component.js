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
                    template: "<div class=\"col flex\" [formGroup]=\"form\">\n  <mat-form-field class=\"col p-0\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <owl-date-time  #picker (afterPickerClosed)=\"selectedDate(picker)\" ></owl-date-time>\n    <input matInput id=\"{{dateId}}\" formControlName=\"{{control}}\" placeholder=\"{{placeholder}}\" [min]=\"min\"\n      [max]=\"max\" [owlDateTimeTrigger]=\"picker\" [owlDateTime]=\"picker\">\n    <mat-error>\n      <span class=\"err_style\">\n        <span *ngIf=\"form.hasError('required',[control])\" id=\"errorMsg{{dateId}}\">{{errorMsg}}</span>\n      </span>\n    </mat-error>\n  </mat-form-field>\n</div>",
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
    SukuDateTimePickerComponent.prototype.formSumitAttempt;
    /** @type {?} */
    SukuDateTimePickerComponent.prototype.errorMsg;
    /** @type {?} */
    SukuDateTimePickerComponent.prototype.dateSelect;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWRhdGUtdGltZS1waWNrZXIvc3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFlLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7O0lBRTVCLE1BQU0sR0FBRyxDQUFDLG1CQUFBLE9BQU8sRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLE9BQU8sRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPO0FBRTVFO0lBaUJFO1FBVFMsWUFBTyxHQUFHLGFBQWEsQ0FBQztRQUNWLGdCQUFXLEdBQUcsYUFBYSxDQUFDO1FBQ3RDLFdBQU0sR0FBRyxZQUFZLENBQUM7UUFJMUIsYUFBUSxHQUFHLGlCQUFpQixDQUFDO1FBQzdCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXpCLENBQUM7Ozs7SUFFakIsOENBQVE7OztJQUFSLGNBQWEsQ0FBQzs7Ozs7SUFFZixrREFBWTs7OztJQUFaLFVBQWEsS0FBYTtRQUN6QixPQUFPLENBQ04sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDN0QsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQ3pELENBQUM7SUFDRixDQUFDOzs7OztJQUVELGtEQUFZOzs7O0lBQVosVUFBYSxHQUFHO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7O1lBQ3RDLFlBQVksR0FBRyxHQUFHLENBQUMsU0FBUztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyQyxDQUFDOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLDZxQkFBcUQ7O2lCQUV0RDs7Ozs7dUJBR0UsS0FBSzswQkFDTCxLQUFLOzhCQUNMLEtBQUssU0FBQyxjQUFjO3lCQUNwQixLQUFLLFNBQUMsSUFBSTtzQkFDVixLQUFLLFNBQUMsVUFBVTtzQkFDaEIsS0FBSyxTQUFDLFVBQVU7bUNBQ2hCLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTixNQUFNOztJQWtCUixrQ0FBQztDQUFBLEFBakNELElBaUNDO1NBNUJZLDJCQUEyQjs7O0lBRXRDLDJDQUF5Qjs7SUFDekIsOENBQWlDOztJQUNqQyxrREFBbUQ7O0lBQ25ELDZDQUFtQzs7SUFDbkMsMENBQXVCOztJQUN2QiwwQ0FBdUI7O0lBQ3ZCLHVEQUEwQjs7SUFDMUIsK0NBQXNDOztJQUN2QyxpREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgX2tleVZhbHVlRGlmZmVyc0ZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9hcHBsaWNhdGlvbl9tb2R1bGUnO1xuaW1wb3J0ICogYXMgX21vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnbW9tZW50JztcbmNvbnN0IG1vbWVudCA9IChfbW9tZW50IGFzIGFueSkuZGVmYXVsdCA/IChfbW9tZW50IGFzIGFueSkuZGVmYXVsdCA6IF9tb21lbnQ7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZGF0ZS10aW1lLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWRhdGUtdGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWRhdGUtdGltZS1waWNrZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1RGF0ZVRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgY29udHJvbCA9ICdjb250cm9sTmFtZSc7XG4gIEBJbnB1dCgncGxhY2UtaG9sZGVyJykgcGxhY2Vob2xkZXIgPSAnRGF0ZSBwaWNrZXInO1xuICBASW5wdXQoJ2lkJykgZGF0ZUlkID0gJ2RhdGVwaWNrZXInO1xuICBASW5wdXQoJ21heC1kYXRlJykgbWF4O1xuICBASW5wdXQoJ21pbi1kYXRlJykgbWluO1xuICBASW5wdXQoKSBmb3JtU3VtaXRBdHRlbXB0O1xuICBASW5wdXQoKSBlcnJvck1zZyA9ICdDYW5ub3QgYmUgYmxhbmsnO1xuXHRAT3V0cHV0KCkgZGF0ZVNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG4gIFxuXHRpc0ZpZWxkVmFsaWQoZmllbGQ6IHN0cmluZykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQoIXRoaXMuZm9ybS5nZXQoZmllbGQpLnZhbGlkICYmIHRoaXMuZm9ybS5nZXQoZmllbGQpLnRvdWNoZWQpIHx8XG5cdFx0XHQodGhpcy5mb3JtLmdldChmaWVsZCkudW50b3VjaGVkICYmIHRoaXMuZm9ybVN1bWl0QXR0ZW1wdClcblx0XHQpO1xuICB9XG5cbiAgc2VsZWN0ZWREYXRlKHZhbCkge1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHZhbHVlICcsdmFsLl9zZWxlY3RlZCk7XG4gICAgY29uc3Qgc2VsZWN0ZWREYXRlID0gdmFsLl9zZWxlY3RlZFxuICAgIHRoaXMuZGF0ZVNlbGVjdC5lbWl0KHNlbGVjdGVkRGF0ZSk7XG4gIH1cbn1cbiJdfQ==