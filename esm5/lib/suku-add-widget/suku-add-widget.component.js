/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuAddWidgetComponent = /** @class */ (function () {
    function SukuAddWidgetComponent() {
        this.image = '../../assets/images/plus-icon-gold.png';
        this.customclass = 'ml-2 add-widget mt-1';
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuAddWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuAddWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-add-widget',
                    template: "<a (click)=\"action.emit()\">\r\n  <span><img [src]=\"image\" width=\"33px\" height=\"33px\">\r\n    <span [style.font-size.px]=\"size\" [style.color]=\"color\" [class]=\"customclass\" [style.font-weight]=\"weight\">\r\n      <ng-content></ng-content>\r\n    </span>\r\n  </span>\r\n</a>\r\n",
                    styles: [".add-widget{font-family:abelregular,Arial,Helvetica,sans-serif!important;font-size:12px;text-transform:uppercase;text-align:left}"]
                }] }
    ];
    /** @nocollapse */
    SukuAddWidgetComponent.ctorParameters = function () { return []; };
    SukuAddWidgetComponent.propDecorators = {
        image: [{ type: Input }],
        size: [{ type: Input }],
        color: [{ type: Input }],
        weight: [{ type: Input }],
        customclass: [{ type: Input }],
        action: [{ type: Output }]
    };
    return SukuAddWidgetComponent;
}());
export { SukuAddWidgetComponent };
if (false) {
    /** @type {?} */
    SukuAddWidgetComponent.prototype.image;
    /** @type {?} */
    SukuAddWidgetComponent.prototype.size;
    /** @type {?} */
    SukuAddWidgetComponent.prototype.color;
    /** @type {?} */
    SukuAddWidgetComponent.prototype.weight;
    /** @type {?} */
    SukuAddWidgetComponent.prototype.customclass;
    /** @type {?} */
    SukuAddWidgetComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWFkZC13aWRnZXQvc3VrdS1hZGQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWFDO1FBUFMsVUFBSyxHQUFHLHdDQUF3QyxDQUFDO1FBSWpELGdCQUFXLEdBQUcsc0JBQXNCLENBQUM7UUFDcEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFdkIsQ0FBQzs7OztJQUVoQix5Q0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkFmYixTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsK1NBQStDOztpQkFFL0M7Ozs7O3dCQUVDLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxNQUFNOztJQUtSLDZCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FYWSxzQkFBc0I7OztJQUNsQyx1Q0FBMEQ7O0lBQzFELHNDQUFjOztJQUNkLHVDQUFlOztJQUNmLHdDQUFnQjs7SUFDaEIsNkNBQThDOztJQUM5Qyx3Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3N1a3UtYWRkLXdpZGdldCcsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtYWRkLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtYWRkLXdpZGdldC5jb21wb25lbnQuc2NzcycgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUFkZFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgaW1hZ2UgPSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9wbHVzLWljb24tZ29sZC5wbmcnO1xyXG5cdEBJbnB1dCgpIHNpemU7XHJcblx0QElucHV0KCkgY29sb3I7XHJcblx0QElucHV0KCkgd2VpZ2h0O1xyXG5cdEBJbnB1dCgpIGN1c3RvbWNsYXNzID0gJ21sLTIgYWRkLXdpZGdldCBtdC0xJztcclxuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iXX0=