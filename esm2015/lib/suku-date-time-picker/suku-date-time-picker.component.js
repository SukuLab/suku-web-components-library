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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuDateTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-date-time-picker',
                template: "<div class=\"col flex\"  [formGroup]=\"form\">\n  <mat-form-field>\n    <input matInput id=\"{{dateId}}\" formControlName=\"{{control}}\" placeholder=\"{{placeholder}}\"\n      min=\"{{min}}\" max=\"{{max}}\" [owlDateTimeTrigger]=\"picker\" [owlDateTime]=\"picker\">\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <owl-date-time #picker></owl-date-time>\n  </mat-form-field>\n</div>",
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
    min: [{ type: Input, args: ['min-date',] }]
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWRhdGUtdGltZS1waWNrZXIvc3VrdS1kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzNDLE1BQU0sT0FBTywyQkFBMkI7SUFRdEM7UUFMUyxZQUFPLEdBQUcsYUFBYSxDQUFDO1FBQ1YsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDdEMsV0FBTSxHQUFHLFlBQVksQ0FBQztJQUduQixDQUFDOzs7O0lBR2pCLFFBQVE7SUFDUixDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLGdiQUFxRDs7YUFFdEQ7Ozs7O21CQUdFLEtBQUs7c0JBQ0wsS0FBSzswQkFDTCxLQUFLLFNBQUMsY0FBYztxQkFDcEIsS0FBSyxTQUFDLElBQUk7a0JBQ1YsS0FBSyxTQUFDLFVBQVU7a0JBQ2hCLEtBQUssU0FBQyxVQUFVOzs7O0lBTGpCLDJDQUF5Qjs7SUFDekIsOENBQWlDOztJQUNqQyxrREFBbUQ7O0lBQ25ELDZDQUFtQzs7SUFDbkMsMENBQXVCOztJQUN2QiwwQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1kYXRlLXRpbWUtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VEYXRlVGltZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBjb250cm9sID0gJ2NvbnRyb2xOYW1lJztcbiAgQElucHV0KCdwbGFjZS1ob2xkZXInKSBwbGFjZWhvbGRlciA9ICdEYXRlIHBpY2tlcic7XG4gIEBJbnB1dCgnaWQnKSBkYXRlSWQgPSAnZGF0ZXBpY2tlcic7XG4gIEBJbnB1dCgnbWF4LWRhdGUnKSBtYXg7XG4gIEBJbnB1dCgnbWluLWRhdGUnKSBtaW47XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiBcbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19