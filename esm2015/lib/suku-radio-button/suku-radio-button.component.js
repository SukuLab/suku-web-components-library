/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class SukuRadioButtonComponent {
    constructor() {
        this.control = 'traceabilityProduct';
        this.content = 'using an id';
        this.contentCustomClass = 'traceSelectedProd';
        this.radioButtonId = 'sukuRadioButton';
        this.color = 'primary';
        this.value = 1;
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    buttonAction() {
        this.action.emit();
    }
}
SukuRadioButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-radio-button',
                template: "<span [formGroup]=\"form\">\n  <mat-radio-group formControlName=\"{{control}}\" name=\"{{control}}\">\n    <mat-radio-button type=\"radio\" (click)=\"buttonAction()\" class=\"radio-inline thisProductInfoLabel\"\n      [id]=\"radioButtonId\" [color]=\"color\" [value]=\"value\">\n      <span [class]=\"contentCustomClass\">{{content}}</span>\n    </mat-radio-button>\n  </mat-radio-group>\n</span>",
                styles: [".thisProductInfoLabel{font-family:'Encode Sans',sans-serif;font-size:14px;font-style:normal;font-stretch:normal;line-height:2;letter-spacing:-.4px;color:#1c1c1c}.radio-inline{margin-top:0!important}"]
            }] }
];
/** @nocollapse */
SukuRadioButtonComponent.ctorParameters = () => [];
SukuRadioButtonComponent.propDecorators = {
    form: [{ type: Input }],
    control: [{ type: Input }],
    content: [{ type: Input }],
    contentCustomClass: [{ type: Input }],
    radioButtonId: [{ type: Input }],
    color: [{ type: Input }],
    value: [{ type: Input }],
    action: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuRadioButtonComponent.prototype.form;
    /** @type {?} */
    SukuRadioButtonComponent.prototype.control;
    /** @type {?} */
    SukuRadioButtonComponent.prototype.content;
    /** @type {?} */
    SukuRadioButtonComponent.prototype.contentCustomClass;
    /** @type {?} */
    SukuRadioButtonComponent.prototype.radioButtonId;
    /** @type {?} */
    SukuRadioButtonComponent.prototype.color;
    /** @type {?} */
    SukuRadioButtonComponent.prototype.value;
    /** @type {?} */
    SukuRadioButtonComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1yYWRpby1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcmFkaW8tYnV0dG9uL3N1a3UtcmFkaW8tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPM0MsTUFBTSxPQUFPLHdCQUF3QjtJQVNwQztRQVBVLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNoQyxZQUFPLEdBQUcsYUFBYSxDQUFDO1FBQ3pCLHVCQUFrQixHQUFHLG1CQUFtQixDQUFDO1FBQ3pDLGtCQUFhLEdBQUcsaUJBQWlCLENBQUM7UUFDbEMsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVoQixRQUFRLEtBQUksQ0FBQzs7OztJQUViLFlBQVk7UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7OztZQXBCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0Isd1pBQWlEOzthQUVqRDs7Ozs7bUJBRUUsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUs7aUNBQ04sS0FBSzs0QkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxNQUFNOzs7O0lBUE4sd0NBQXlCOztJQUN6QiwyQ0FBeUM7O0lBQ3pDLDJDQUFpQzs7SUFDbEMsc0RBQWtEOztJQUNsRCxpREFBMkM7O0lBQzNDLHlDQUEyQjs7SUFDM0IseUNBQW1COztJQUNuQiwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtcmFkaW8tYnV0dG9uJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VSYWRpb0J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgY29udHJvbCA9ICd0cmFjZWFiaWxpdHlQcm9kdWN0JztcbiAgQElucHV0KCkgY29udGVudCA9ICd1c2luZyBhbiBpZCc7XG5cdEBJbnB1dCgpIGNvbnRlbnRDdXN0b21DbGFzcyA9ICd0cmFjZVNlbGVjdGVkUHJvZCc7XG5cdEBJbnB1dCgpIHJhZGlvQnV0dG9uSWQgPSAnc3VrdVJhZGlvQnV0dG9uJztcblx0QElucHV0KCkgY29sb3IgPSAncHJpbWFyeSc7XG5cdEBJbnB1dCgpIHZhbHVlID0gMTtcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdG5nT25Jbml0KCkge31cblxuXHRidXR0b25BY3Rpb24oKSB7XG5cdFx0dGhpcy5hY3Rpb24uZW1pdCgpO1xuXHR9XG59XG4iXX0=