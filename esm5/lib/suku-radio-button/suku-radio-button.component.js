/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<span [formGroup]=\"form\">\r\n  <mat-radio-group formControlName=\"{{control}}\" name=\"{{control}}\">\r\n    <mat-radio-button type=\"radio\" (click)=\"buttonAction()\" class=\"radio-inline thisProductInfoLabel\"\r\n      [id]=\"radioButtonId\" [color]=\"color\" [value]=\"value\">\r\n      <span [class]=\"contentCustomClass\">{{content}}</span>\r\n    </mat-radio-button>\r\n  </mat-radio-group>\r\n</span>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1yYWRpby1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtcmFkaW8tYnV0dG9uL3N1a3UtcmFkaW8tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFjQztRQVBVLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNoQyxZQUFPLEdBQUcsYUFBYSxDQUFDO1FBQ3pCLHVCQUFrQixHQUFHLG1CQUFtQixDQUFDO1FBQ3pDLGtCQUFhLEdBQUcsaUJBQWlCLENBQUM7UUFDbEMsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVoQiwyQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOzs7O0lBRWIsK0NBQVk7OztJQUFaO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDOztnQkFwQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHNhQUFpRDs7aUJBRWpEOzs7Ozt1QkFFRSxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSztxQ0FDTixLQUFLO2dDQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLE1BQU07O0lBUVIsK0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWhCWSx3QkFBd0I7OztJQUNuQyx3Q0FBeUI7O0lBQ3pCLDJDQUF5Qzs7SUFDekMsMkNBQWlDOztJQUNsQyxzREFBa0Q7O0lBQ2xELGlEQUEyQzs7SUFDM0MseUNBQTJCOztJQUMzQix5Q0FBbUI7O0lBQ25CLDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LXJhZGlvLWJ1dHRvbicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1yYWRpby1idXR0b24uY29tcG9uZW50LnNjc3MnIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VSYWRpb0J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG4gIEBJbnB1dCgpIGNvbnRyb2wgPSAndHJhY2VhYmlsaXR5UHJvZHVjdCc7XHJcbiAgQElucHV0KCkgY29udGVudCA9ICd1c2luZyBhbiBpZCc7XHJcblx0QElucHV0KCkgY29udGVudEN1c3RvbUNsYXNzID0gJ3RyYWNlU2VsZWN0ZWRQcm9kJztcclxuXHRASW5wdXQoKSByYWRpb0J1dHRvbklkID0gJ3N1a3VSYWRpb0J1dHRvbic7XHJcblx0QElucHV0KCkgY29sb3IgPSAncHJpbWFyeSc7XHJcblx0QElucHV0KCkgdmFsdWUgPSAxO1xyXG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcblxyXG5cdGJ1dHRvbkFjdGlvbigpIHtcclxuXHRcdHRoaXMuYWN0aW9uLmVtaXQoKTtcclxuXHR9XHJcbn1cclxuIl19