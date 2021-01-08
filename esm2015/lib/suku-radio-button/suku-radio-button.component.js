/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-radio-button/suku-radio-button.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1yYWRpby1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcmFkaW8tYnV0dG9uL3N1a3UtcmFkaW8tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzNDLE1BQU0sT0FBTyx3QkFBd0I7SUFTcEM7UUFQVSxZQUFPLEdBQUcscUJBQXFCLENBQUM7UUFDaEMsWUFBTyxHQUFHLGFBQWEsQ0FBQztRQUN6Qix1QkFBa0IsR0FBRyxtQkFBbUIsQ0FBQztRQUN6QyxrQkFBYSxHQUFHLGlCQUFpQixDQUFDO1FBQ2xDLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNULFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFaEIsUUFBUSxLQUFJLENBQUM7Ozs7SUFFYixZQUFZO1FBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7WUFwQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHdaQUFpRDs7YUFFakQ7Ozs7O21CQUVFLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLO2lDQUNOLEtBQUs7NEJBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsTUFBTTs7OztJQVBOLHdDQUF5Qjs7SUFDekIsMkNBQXlDOztJQUN6QywyQ0FBaUM7O0lBQ2xDLHNEQUFrRDs7SUFDbEQsaURBQTJDOztJQUMzQyx5Q0FBMkI7O0lBQzNCLHlDQUFtQjs7SUFDbkIsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LXJhZGlvLWJ1dHRvbicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXJhZGlvLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LXJhZGlvLWJ1dHRvbi5jb21wb25lbnQuc2NzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1UmFkaW9CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGNvbnRyb2wgPSAndHJhY2VhYmlsaXR5UHJvZHVjdCc7XG4gIEBJbnB1dCgpIGNvbnRlbnQgPSAndXNpbmcgYW4gaWQnO1xuXHRASW5wdXQoKSBjb250ZW50Q3VzdG9tQ2xhc3MgPSAndHJhY2VTZWxlY3RlZFByb2QnO1xuXHRASW5wdXQoKSByYWRpb0J1dHRvbklkID0gJ3N1a3VSYWRpb0J1dHRvbic7XG5cdEBJbnB1dCgpIGNvbG9yID0gJ3ByaW1hcnknO1xuXHRASW5wdXQoKSB2YWx1ZSA9IDE7XG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRuZ09uSW5pdCgpIHt9XG5cblx0YnV0dG9uQWN0aW9uKCkge1xuXHRcdHRoaXMuYWN0aW9uLmVtaXQoKTtcblx0fVxufVxuIl19