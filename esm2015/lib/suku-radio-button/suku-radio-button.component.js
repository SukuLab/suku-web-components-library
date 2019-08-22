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
                template: "<span [formGroup]=\"form\">\r\n  <mat-radio-group formControlName=\"{{control}}\" name=\"{{control}}\">\r\n    <mat-radio-button type=\"radio\" (click)=\"buttonAction()\" class=\"radio-inline thisProductInfoLabel\"\r\n      [id]=\"radioButtonId\" [color]=\"color\" [value]=\"value\">\r\n      <span [class]=\"contentCustomClass\">{{content}}</span>\r\n    </mat-radio-button>\r\n  </mat-radio-group>\r\n</span>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1yYWRpby1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcmFkaW8tYnV0dG9uL3N1a3UtcmFkaW8tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPM0MsTUFBTSxPQUFPLHdCQUF3QjtJQVNwQztRQVBVLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNoQyxZQUFPLEdBQUcsYUFBYSxDQUFDO1FBQ3pCLHVCQUFrQixHQUFHLG1CQUFtQixDQUFDO1FBQ3pDLGtCQUFhLEdBQUcsaUJBQWlCLENBQUM7UUFDbEMsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVoQixRQUFRLEtBQUksQ0FBQzs7OztJQUViLFlBQVk7UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7OztZQXBCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0Isc2FBQWlEOzthQUVqRDs7Ozs7bUJBRUUsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUs7aUNBQ04sS0FBSzs0QkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxNQUFNOzs7O0lBUE4sd0NBQXlCOztJQUN6QiwyQ0FBeUM7O0lBQ3pDLDJDQUFpQzs7SUFDbEMsc0RBQWtEOztJQUNsRCxpREFBMkM7O0lBQzNDLHlDQUEyQjs7SUFDM0IseUNBQW1COztJQUNuQiwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3VrdS1yYWRpby1idXR0b24nLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXJhZGlvLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5zY3NzJyBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1UmFkaW9CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcclxuICBASW5wdXQoKSBjb250cm9sID0gJ3RyYWNlYWJpbGl0eVByb2R1Y3QnO1xyXG4gIEBJbnB1dCgpIGNvbnRlbnQgPSAndXNpbmcgYW4gaWQnO1xyXG5cdEBJbnB1dCgpIGNvbnRlbnRDdXN0b21DbGFzcyA9ICd0cmFjZVNlbGVjdGVkUHJvZCc7XHJcblx0QElucHV0KCkgcmFkaW9CdXR0b25JZCA9ICdzdWt1UmFkaW9CdXR0b24nO1xyXG5cdEBJbnB1dCgpIGNvbG9yID0gJ3ByaW1hcnknO1xyXG5cdEBJbnB1dCgpIHZhbHVlID0gMTtcclxuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cclxuXHRidXR0b25BY3Rpb24oKSB7XHJcblx0XHR0aGlzLmFjdGlvbi5lbWl0KCk7XHJcblx0fVxyXG59XHJcbiJdfQ==