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
                template: "<div class=\"col flex\" [formGroup]=\"form\">\r\n  <mat-form-field class=\"col p-0\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <owl-date-time  #picker (afterPickerClosed)=\"selectedDate(picker)\" ></owl-date-time>\r\n    <input matInput id=\"{{dateId}}\" formControlName=\"{{control}}\" placeholder=\"{{placeholder}}\" [min]=\"min\"\r\n      [max]=\"max\" [owlDateTimeTrigger]=\"picker\" [owlDateTime]=\"picker\">\r\n    <mat-error>\r\n      <span class=\"err_style\">\r\n        <span *ngIf=\"form.hasError('required',[control])\" id=\"errorMsg{{dateId}}\">{{errorMsg}}</span>\r\n      </span>\r\n    </mat-error>\r\n  </mat-form-field>\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWRhdGUtdGltZS1waWNrZXIvc3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFlLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7O01BRTVCLE1BQU0sR0FBRyxDQUFDLG1CQUFBLE9BQU8sRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLE9BQU8sRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPO0FBTzVFLE1BQU0sT0FBTywyQkFBMkI7SUFZdEM7UUFUUyxZQUFPLEdBQUcsYUFBYSxDQUFDO1FBQ1YsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDdEMsV0FBTSxHQUFHLFlBQVksQ0FBQztRQUkxQixhQUFRLEdBQUcsaUJBQWlCLENBQUM7UUFDN0IsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFekIsQ0FBQzs7OztJQUVqQixRQUFRLEtBQUssQ0FBQzs7Ozs7SUFFZixZQUFZLENBQUMsS0FBYTtRQUN6QixPQUFPLENBQ04sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDN0QsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQ3pELENBQUM7SUFDRixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxHQUFHO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7O2NBQ3RDLFlBQVksR0FBRyxHQUFHLENBQUMsU0FBUztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLHFzQkFBcUQ7O2FBRXREOzs7OzttQkFHRSxLQUFLO3NCQUNMLEtBQUs7MEJBQ0wsS0FBSyxTQUFDLGNBQWM7cUJBQ3BCLEtBQUssU0FBQyxJQUFJO2tCQUNWLEtBQUssU0FBQyxVQUFVO2tCQUNoQixLQUFLLFNBQUMsVUFBVTsrQkFDaEIsS0FBSzt1QkFDTCxLQUFLO3lCQUNOLE1BQU07Ozs7SUFSTiwyQ0FBeUI7O0lBQ3pCLDhDQUFpQzs7SUFDakMsa0RBQW1EOztJQUNuRCw2Q0FBbUM7O0lBQ25DLDBDQUF1Qjs7SUFDdkIsMENBQXVCOztJQUN2Qix1REFBMEI7O0lBQzFCLCtDQUFzQzs7SUFDdkMsaURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBfa2V5VmFsdWVEaWZmZXJzRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL2FwcGxpY2F0aW9uX21vZHVsZSc7XHJcbmltcG9ydCAqIGFzIF9tb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnbW9tZW50JztcclxuY29uc3QgbW9tZW50ID0gKF9tb21lbnQgYXMgYW55KS5kZWZhdWx0ID8gKF9tb21lbnQgYXMgYW55KS5kZWZhdWx0IDogX21vbWVudDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1kYXRlLXRpbWUtcGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWRhdGUtdGltZS1waWNrZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdURhdGVUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG4gIEBJbnB1dCgpIGNvbnRyb2wgPSAnY29udHJvbE5hbWUnO1xyXG4gIEBJbnB1dCgncGxhY2UtaG9sZGVyJykgcGxhY2Vob2xkZXIgPSAnRGF0ZSBwaWNrZXInO1xyXG4gIEBJbnB1dCgnaWQnKSBkYXRlSWQgPSAnZGF0ZXBpY2tlcic7XHJcbiAgQElucHV0KCdtYXgtZGF0ZScpIG1heDtcclxuICBASW5wdXQoJ21pbi1kYXRlJykgbWluO1xyXG4gIEBJbnB1dCgpIGZvcm1TdW1pdEF0dGVtcHQ7XHJcbiAgQElucHV0KCkgZXJyb3JNc2cgPSAnQ2Fubm90IGJlIGJsYW5rJztcclxuXHRAT3V0cHV0KCkgZGF0ZVNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxuICBcclxuXHRpc0ZpZWxkVmFsaWQoZmllbGQ6IHN0cmluZykge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0KCF0aGlzLmZvcm0uZ2V0KGZpZWxkKS52YWxpZCAmJiB0aGlzLmZvcm0uZ2V0KGZpZWxkKS50b3VjaGVkKSB8fFxyXG5cdFx0XHQodGhpcy5mb3JtLmdldChmaWVsZCkudW50b3VjaGVkICYmIHRoaXMuZm9ybVN1bWl0QXR0ZW1wdClcclxuXHRcdCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RlZERhdGUodmFsKSB7XHJcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyB2YWx1ZSAnLHZhbC5fc2VsZWN0ZWQpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWREYXRlID0gdmFsLl9zZWxlY3RlZFxyXG4gICAgdGhpcy5kYXRlU2VsZWN0LmVtaXQoc2VsZWN0ZWREYXRlKTtcclxuICB9XHJcbn1cclxuIl19