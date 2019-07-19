/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
var SukuInfoButtonComponent = /** @class */ (function () {
    function SukuInfoButtonComponent() {
        this.fontWeight = 400;
        this.trigger = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuInfoButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuInfoButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-info-button',
                    template: "<div class=\"col p-0\">\n  <button class=\"btn btn-info btn-lg btn-block\" [disabled]=\"disableValue\" [style.font-size.px]=\"size\" [style.font-weight]=\"fontWeight\" id=\"{{id}}\" (click)=\"trigger.emit()\">\n    <ng-content></ng-content>\n  </button>\n</div>",
                    styles: [".btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#3e3e3e;font-family:'Encode Sans',sans-serif;font-weight:600;font-size:14px;padding:.55rem .85rem}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn.disabled:hover{border:2px solid #a7bf2e!important;border-radius:28px 76px 63px;background-color:#fff;color:#3e3e3e}.btn-info{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#3e3e3e}.btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info:click{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e!important;color:#fff}.btn-info:active{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff!important;color:grey}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#a7bf2e;border-color:#a7bf2e}.btn-info.focus,.btn-info:focus,.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem #a7bf2e}"]
                }] }
    ];
    /** @nocollapse */
    SukuInfoButtonComponent.ctorParameters = function () { return []; };
    SukuInfoButtonComponent.propDecorators = {
        name: [{ type: Input }],
        id: [{ type: Input }],
        size: [{ type: Input }],
        fontWeight: [{ type: Input }],
        disableValue: [{ type: Input }],
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
    SukuInfoButtonComponent.prototype.fontWeight;
    /** @type {?} */
    SukuInfoButtonComponent.prototype.disableValue;
    /** @type {?} */
    SukuInfoButtonComponent.prototype.trigger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1pbmZvLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1pbmZvLWJ1dHRvbi9zdWt1LWluZm8tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWFDO1FBSlMsZUFBVSxHQUFHLEdBQUcsQ0FBQztRQUVoQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV4QixDQUFDOzs7O0lBRWhCLDBDQUFROzs7SUFBUixjQUFZLENBQUM7O2dCQWZiLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixpUkFBZ0Q7O2lCQUVoRDs7Ozs7dUJBRUMsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzsrQkFDTCxLQUFLOzBCQUNMLE1BQU07O0lBS1IsOEJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVhZLHVCQUF1Qjs7O0lBQ25DLHVDQUFjOztJQUNkLHFDQUFZOztJQUNaLHVDQUFjOztJQUNkLDZDQUEwQjs7SUFDMUIsK0NBQStCOztJQUMvQiwwQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtaW5mby1idXR0b24nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1pbmZvLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LWluZm8tYnV0dG9uLmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VJbmZvQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgbmFtZTtcblx0QElucHV0KCkgaWQ7XG5cdEBJbnB1dCgpIHNpemU7XG5cdEBJbnB1dCgpIGZvbnRXZWlnaHQgPSA0MDA7XG5cdEBJbnB1dCgpIGRpc2FibGVWYWx1ZTogQm9vbGVhbjtcblx0QE91dHB1dCgpIHRyaWdnZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdG5nT25Jbml0KCkge31cbn1cbiJdfQ==