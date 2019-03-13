/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuSecondaryButtonComponent = /** @class */ (function () {
    function SukuSecondaryButtonComponent() {
        this.trigger = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuSecondaryButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuSecondaryButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-secondary-button',
                    template: "<a class=\"secondary-btn c-pointer\" id=\"{{id}}\" [style.color]=\"color\" [style.font-size.px]=\"size\" (click)=\"trigger.emit()\">\r\n  <ng-content></ng-content>\r\n</a>\r\n",
                    styles: [".secondary-btn{font-family:'Encode Sans',sans-serif;font-size:14px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important;border-bottom:3.5px solid #a7bf2e}"]
                }] }
    ];
    /** @nocollapse */
    SukuSecondaryButtonComponent.ctorParameters = function () { return []; };
    SukuSecondaryButtonComponent.propDecorators = {
        id: [{ type: Input }],
        size: [{ type: Input }],
        color: [{ type: Input }],
        trigger: [{ type: Output }]
    };
    return SukuSecondaryButtonComponent;
}());
export { SukuSecondaryButtonComponent };
if (false) {
    /** @type {?} */
    SukuSecondaryButtonComponent.prototype.id;
    /** @type {?} */
    SukuSecondaryButtonComponent.prototype.size;
    /** @type {?} */
    SukuSecondaryButtonComponent.prototype.color;
    /** @type {?} */
    SukuSecondaryButtonComponent.prototype.trigger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zZWNvbmRhcnktYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXNlY29uZGFyeS1idXR0b24vc3VrdS1zZWNvbmRhcnktYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQVdDO1FBRlUsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFeEIsQ0FBQzs7OztJQUVoQiwrQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkFiYixTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsMkxBQXFEOztpQkFFckQ7Ozs7O3FCQUVDLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLE1BQU07O0lBS1IsbUNBQUM7Q0FBQSxBQWRELElBY0M7U0FUWSw0QkFBNEI7OztJQUN4QywwQ0FBWTs7SUFDWiw0Q0FBYzs7SUFDZCw2Q0FBZTs7SUFDZiwrQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3N1a3Utc2Vjb25kYXJ5LWJ1dHRvbicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3Utc2Vjb25kYXJ5LWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbICcuL3N1a3Utc2Vjb25kYXJ5LWJ1dHRvbi5jb21wb25lbnQuc2NzcycgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdVNlY29uZGFyeUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgaWQ7XHJcblx0QElucHV0KCkgc2l6ZTtcclxuXHRASW5wdXQoKSBjb2xvcjtcclxuXHRAT3V0cHV0KCkgdHJpZ2dlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19