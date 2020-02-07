/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-date-time-picker/suku-date-time-picker.component.ts
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
                    template: "<div class=\"col flex\" [formGroup]=\"form\">\n  <mat-form-field class=\"col p-0\">\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <owl-date-time #picker (afterPickerClosed)=\"selectedDate(picker)\" [startAt]=\"startAt\"></owl-date-time>\n    <input matInput id=\"{{dateId}}\" formControlName=\"{{control}}\" placeholder=\"{{placeholder}}\" [min]=\"min\" [max]=\"max\"\n      [owlDateTimeTrigger]=\"picker\" [owlDateTime]=\"picker\">\n    <mat-error>\n      <span class=\"err_style\">\n        <span *ngIf=\"form.hasError('required',[control])\" id=\"errorMsg{{dateId}}\">{{errorMsg}}</span>\n      </span>\n    </mat-error>\n  </mat-form-field>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWRhdGUtdGltZS1waWNrZXIvc3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBZSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOztJQUU1QixNQUFNLEdBQUcsQ0FBQyxtQkFBQSxPQUFPLEVBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxPQUFPLEVBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTztBQUU1RTtJQWtCRTtRQVZTLFlBQU8sR0FBRyxhQUFhLENBQUM7UUFDVixnQkFBVyxHQUFHLGFBQWEsQ0FBQztRQUN0QyxXQUFNLEdBQUcsWUFBWSxDQUFDO1FBSzFCLGFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUM3QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV6QixDQUFDOzs7O0lBRWpCLDhDQUFROzs7SUFBUixjQUFhLENBQUM7Ozs7O0lBRWYsa0RBQVk7Ozs7SUFBWixVQUFhLEtBQWE7UUFDekIsT0FBTyxDQUNOLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzdELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUN6RCxDQUFDO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxrREFBWTs7OztJQUFaLFVBQWEsR0FBRztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztZQUN0QyxZQUFZLEdBQUcsR0FBRyxDQUFDLFNBQVM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Z0JBakNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQywrckJBQXFEOztpQkFFdEQ7Ozs7O3VCQUdFLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLLFNBQUMsY0FBYzt5QkFDcEIsS0FBSyxTQUFDLElBQUk7c0JBQ1YsS0FBSyxTQUFDLFVBQVU7c0JBQ2hCLEtBQUssU0FBQyxVQUFVOzBCQUNoQixLQUFLLFNBQUMsWUFBWTttQ0FDbEIsS0FBSzsyQkFDTCxLQUFLOzZCQUNOLE1BQU07O0lBa0JSLGtDQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0E3QlksMkJBQTJCOzs7SUFFdEMsMkNBQXlCOztJQUN6Qiw4Q0FBaUM7O0lBQ2pDLGtEQUFtRDs7SUFDbkQsNkNBQW1DOztJQUNuQywwQ0FBdUI7O0lBQ3ZCLDBDQUF1Qjs7SUFDdkIsOENBQTZCOztJQUM3Qix1REFBMEI7O0lBQzFCLCtDQUFzQzs7SUFDdkMsaURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IF9rZXlWYWx1ZURpZmZlcnNGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvYXBwbGljYXRpb25fbW9kdWxlJztcbmltcG9ydCAqIGFzIF9tb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gJ21vbWVudCc7XG5jb25zdCBtb21lbnQgPSAoX21vbWVudCBhcyBhbnkpLmRlZmF1bHQgPyAoX21vbWVudCBhcyBhbnkpLmRlZmF1bHQgOiBfbW9tZW50O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWRhdGUtdGltZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdURhdGVUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGNvbnRyb2wgPSAnY29udHJvbE5hbWUnO1xuICBASW5wdXQoJ3BsYWNlLWhvbGRlcicpIHBsYWNlaG9sZGVyID0gJ0RhdGUgcGlja2VyJztcbiAgQElucHV0KCdpZCcpIGRhdGVJZCA9ICdkYXRlcGlja2VyJztcbiAgQElucHV0KCdtYXgtZGF0ZScpIG1heDtcbiAgQElucHV0KCdtaW4tZGF0ZScpIG1pbjtcbiAgQElucHV0KCdzdGFydC1kYXRlJykgc3RhcnRBdDtcbiAgQElucHV0KCkgZm9ybVN1bWl0QXR0ZW1wdDtcbiAgQElucHV0KCkgZXJyb3JNc2cgPSAnQ2Fubm90IGJlIGJsYW5rJztcblx0QE91dHB1dCgpIGRhdGVTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG5cdGlzRmllbGRWYWxpZChmaWVsZDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdCghdGhpcy5mb3JtLmdldChmaWVsZCkudmFsaWQgJiYgdGhpcy5mb3JtLmdldChmaWVsZCkudG91Y2hlZCkgfHxcblx0XHRcdCh0aGlzLmZvcm0uZ2V0KGZpZWxkKS51bnRvdWNoZWQgJiYgdGhpcy5mb3JtU3VtaXRBdHRlbXB0KVxuXHRcdCk7XG4gIH1cblxuICBzZWxlY3RlZERhdGUodmFsKSB7XG4gICAgY29uc29sZS5sb2coJ3RoaXMgaXMgdmFsdWUgJyx2YWwuX3NlbGVjdGVkKTtcbiAgICBjb25zdCBzZWxlY3RlZERhdGUgPSB2YWwuX3NlbGVjdGVkO1xuICAgIHRoaXMuZGF0ZVNlbGVjdC5lbWl0KHNlbGVjdGVkRGF0ZSk7XG4gIH1cbn1cbiJdfQ==