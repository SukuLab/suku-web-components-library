/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
var SukuRadioButtonComponent = /** @class */ (function () {
    function SukuRadioButtonComponent() {
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
    SukuRadioButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    SukuRadioButtonComponent.prototype.buttonAction = /**
     * @return {?}
     */
    function () {
        this.action.emit();
    };
    SukuRadioButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-radio-button',
                    template: "<span [formGroup]=\"form\">\n  <mat-radio-group formControlName=\"{{control}}\" name=\"{{control}}\">\n    <mat-radio-button type=\"radio\" (click)=\"buttonAction()\" class=\"radio-inline thisProductInfoLabel\"\n      [id]=\"radioButtonId\" [color]=\"color\" [value]=\"value\">\n      <span [class]=\"contentCustomClass\">{{content}}</span>\n    </mat-radio-button>\n  </mat-radio-group>\n</span>",
                    styles: [".thisProductInfoLabel{font-family:'Encode Sans',sans-serif;font-size:14px;font-style:normal;font-stretch:normal;line-height:2;letter-spacing:-.4px;color:#1c1c1c}.radio-inline{margin-top:0!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuRadioButtonComponent.ctorParameters = function () { return []; };
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
    return SukuRadioButtonComponent;
}());
export { SukuRadioButtonComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1yYWRpby1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcmFkaW8tYnV0dG9uL3N1a3UtcmFkaW8tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFjQztRQVBVLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNoQyxZQUFPLEdBQUcsYUFBYSxDQUFDO1FBQ3pCLHVCQUFrQixHQUFHLG1CQUFtQixDQUFDO1FBQ3pDLGtCQUFhLEdBQUcsaUJBQWlCLENBQUM7UUFDbEMsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVoQiwyQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOzs7O0lBRWIsK0NBQVk7OztJQUFaO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDOztnQkFwQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHdaQUFpRDs7aUJBRWpEOzs7Ozt1QkFFRSxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSztxQ0FDTixLQUFLO2dDQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLE1BQU07O0lBUVIsK0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWhCWSx3QkFBd0I7OztJQUNuQyx3Q0FBeUI7O0lBQ3pCLDJDQUF5Qzs7SUFDekMsMkNBQWlDOztJQUNsQyxzREFBa0Q7O0lBQ2xELGlEQUEyQzs7SUFDM0MseUNBQTJCOztJQUMzQix5Q0FBbUI7O0lBQ25CLDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1yYWRpby1idXR0b24nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1yYWRpby1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1yYWRpby1idXR0b24uY29tcG9uZW50LnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVJhZGlvQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBjb250cm9sID0gJ3RyYWNlYWJpbGl0eVByb2R1Y3QnO1xuICBASW5wdXQoKSBjb250ZW50ID0gJ3VzaW5nIGFuIGlkJztcblx0QElucHV0KCkgY29udGVudEN1c3RvbUNsYXNzID0gJ3RyYWNlU2VsZWN0ZWRQcm9kJztcblx0QElucHV0KCkgcmFkaW9CdXR0b25JZCA9ICdzdWt1UmFkaW9CdXR0b24nO1xuXHRASW5wdXQoKSBjb2xvciA9ICdwcmltYXJ5Jztcblx0QElucHV0KCkgdmFsdWUgPSAxO1xuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bmdPbkluaXQoKSB7fVxuXG5cdGJ1dHRvbkFjdGlvbigpIHtcblx0XHR0aGlzLmFjdGlvbi5lbWl0KCk7XG5cdH1cbn1cbiJdfQ==