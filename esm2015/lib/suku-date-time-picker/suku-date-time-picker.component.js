/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class SukuDateTimePickerComponent {
    constructor() {
        this.control = 'controlName';
        this.placeholder = 'Date picker';
        this.dateId = 'datepicker';
        this.errorMsg = 'Cannot be blank';
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
SukuDateTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-date-time-picker',
                template: "<div class=\"col flex\" [formGroup]=\"form\">\n  <mat-form-field class=\"col p-0\">\n    <input matInput id=\"{{dateId}}\" formControlName=\"{{control}}\" placeholder=\"{{placeholder}}\" min=\"{{min}}\"\n      max=\"{{max}}\" [owlDateTimeTrigger]=\"picker\" [owlDateTime]=\"picker\">\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <owl-date-time #picker></owl-date-time>\n    <mat-error>\n      <span class=\"err_style\">\n        <span *ngIf=\"form.hasError('required',[control])\" id=\"errorMsg{{dateId}}\">{{errorMsg}}</span>\n      </span>\n    </mat-error>\n  </mat-form-field>\n</div>",
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
    errorMsg: [{ type: Input }]
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWRhdGUtdGltZS1waWNrZXIvc3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVEzQyxNQUFNLE9BQU8sMkJBQTJCO0lBV3RDO1FBUlMsWUFBTyxHQUFHLGFBQWEsQ0FBQztRQUNWLGdCQUFXLEdBQUcsYUFBYSxDQUFDO1FBQ3RDLFdBQU0sR0FBRyxZQUFZLENBQUM7UUFJMUIsYUFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRXRCLENBQUM7Ozs7SUFFakIsUUFBUSxLQUFLLENBQUM7Ozs7O0lBRWYsWUFBWSxDQUFDLEtBQWE7UUFDekIsT0FBTyxDQUNOLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzdELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUN6RCxDQUFDO0lBQ0gsQ0FBQzs7O1lBekJELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxnb0JBQXFEOzthQUV0RDs7Ozs7bUJBR0UsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUssU0FBQyxjQUFjO3FCQUNwQixLQUFLLFNBQUMsSUFBSTtrQkFDVixLQUFLLFNBQUMsVUFBVTtrQkFDaEIsS0FBSyxTQUFDLFVBQVU7K0JBQ2hCLEtBQUs7dUJBQ0wsS0FBSzs7OztJQVBOLDJDQUF5Qjs7SUFDekIsOENBQWlDOztJQUNqQyxrREFBbUQ7O0lBQ25ELDZDQUFtQzs7SUFDbkMsMENBQXVCOztJQUN2QiwwQ0FBdUI7O0lBQ3ZCLHVEQUEwQjs7SUFDMUIsK0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgX2tleVZhbHVlRGlmZmVyc0ZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9hcHBsaWNhdGlvbl9tb2R1bGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWRhdGUtdGltZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdURhdGVUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGNvbnRyb2wgPSAnY29udHJvbE5hbWUnO1xuICBASW5wdXQoJ3BsYWNlLWhvbGRlcicpIHBsYWNlaG9sZGVyID0gJ0RhdGUgcGlja2VyJztcbiAgQElucHV0KCdpZCcpIGRhdGVJZCA9ICdkYXRlcGlja2VyJztcbiAgQElucHV0KCdtYXgtZGF0ZScpIG1heDtcbiAgQElucHV0KCdtaW4tZGF0ZScpIG1pbjtcbiAgQElucHV0KCkgZm9ybVN1bWl0QXR0ZW1wdDtcbiAgQElucHV0KCkgZXJyb3JNc2cgPSAnQ2Fubm90IGJlIGJsYW5rJztcbiAgXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cbiAgXG5cdGlzRmllbGRWYWxpZChmaWVsZDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdCghdGhpcy5mb3JtLmdldChmaWVsZCkudmFsaWQgJiYgdGhpcy5mb3JtLmdldChmaWVsZCkudG91Y2hlZCkgfHxcblx0XHRcdCh0aGlzLmZvcm0uZ2V0KGZpZWxkKS51bnRvdWNoZWQgJiYgdGhpcy5mb3JtU3VtaXRBdHRlbXB0KVxuXHRcdCk7XG5cdH1cbn1cbiJdfQ==