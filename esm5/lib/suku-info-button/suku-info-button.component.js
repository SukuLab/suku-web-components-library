/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
var SukuInfoButtonComponent = /** @class */ (function () {
    function SukuInfoButtonComponent() {
        this.trigger = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuInfoButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuInfoButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-info-button',
                    template: "<button class=\"btn btn-info btn-lg btn-block\" [style.font-size.px]=\"size\" id=\"{{id}}\" (click)=\"trigger.emit()\">\n  <ng-content></ng-content>\n </button>",
                    styles: [".btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-family:'Encode Sans',sans-serif;font-weight:600;font-size:14px;padding:.55rem .85rem}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:click{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e!important;color:#fff}.btn.disabled:hover{border:2px solid #a7bf2e!important;border-radius:28px 76px 63px;background-color:#fff;color:#000}.btn-info{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000}.btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info:click{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e!important;color:#fff}.btn-info:active{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff!important;color:grey}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#a7bf2e;border-color:#a7bf2e}.btn-info.focus,.btn-info:focus,.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem #a7bf2e}"]
                }] }
    ];
    /** @nocollapse */
    SukuInfoButtonComponent.ctorParameters = function () { return []; };
    SukuInfoButtonComponent.propDecorators = {
        name: [{ type: Input }],
        id: [{ type: Input }],
        size: [{ type: Input }],
        trigger: [{ type: Output }]
    };
    return SukuInfoButtonComponent;
}());
export { SukuInfoButtonComponent };
if (false) {
    /** @type {?} */
    SukuInfoButtonComponent.prototype.name;
    /** @type {?} */
    SukuInfoButtonComponent.prototype.id;
    /** @type {?} */
    SukuInfoButtonComponent.prototype.size;
    /** @type {?} */
    SukuInfoButtonComponent.prototype.trigger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1pbmZvLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1pbmZvLWJ1dHRvbi9zdWt1LWluZm8tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQVdFO1FBRlMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFdEIsQ0FBQzs7OztJQUVqQiwwQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsNEtBQWdEOztpQkFFakQ7Ozs7O3VCQUVFLEtBQUs7cUJBQ04sS0FBSzt1QkFDTCxLQUFLOzBCQUNMLE1BQU07O0lBT1IsOEJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVhZLHVCQUF1Qjs7O0lBQ2xDLHVDQUFjOztJQUNmLHFDQUFZOztJQUNaLHVDQUFjOztJQUNkLDBDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1pbmZvLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWluZm8tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1pbmZvLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VJbmZvQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbmFtZTtcbiBASW5wdXQoKSBpZDtcbiBASW5wdXQoKSBzaXplO1xuIEBPdXRwdXQoKSB0cmlnZ2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19