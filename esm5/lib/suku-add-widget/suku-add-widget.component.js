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
                    template: "<a (click)=\"action.emit()\">\n  <span><img [src]=\"image\" width=\"33px\" height=\"33px\">\n    <span [style.font-size.px]=\"size\" [style.color]=\"color\" [class]=\"customclass\" [style.font-weight]=\"weight\">\n      <ng-content></ng-content>\n    </span>\n  </span>\n</a>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWFkZC13aWRnZXQvc3VrdS1hZGQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWFDO1FBUFMsVUFBSyxHQUFHLHdDQUF3QyxDQUFDO1FBSWpELGdCQUFXLEdBQUcsc0JBQXNCLENBQUM7UUFDcEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFdkIsQ0FBQzs7OztJQUVoQix5Q0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkFmYixTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsaVNBQStDOztpQkFFL0M7Ozs7O3dCQUVDLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxNQUFNOztJQUtSLDZCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FYWSxzQkFBc0I7OztJQUNsQyx1Q0FBMEQ7O0lBQzFELHNDQUFjOztJQUNkLHVDQUFlOztJQUNmLHdDQUFnQjs7SUFDaEIsNkNBQThDOztJQUM5Qyx3Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtYWRkLXdpZGdldCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWFkZC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1hZGQtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VBZGRXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKSBpbWFnZSA9ICcuLi8uLi9hc3NldHMvaW1hZ2VzL3BsdXMtaWNvbi1nb2xkLnBuZyc7XG5cdEBJbnB1dCgpIHNpemU7XG5cdEBJbnB1dCgpIGNvbG9yO1xuXHRASW5wdXQoKSB3ZWlnaHQ7XG5cdEBJbnB1dCgpIGN1c3RvbWNsYXNzID0gJ21sLTIgYWRkLXdpZGdldCBtdC0xJztcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bmdPbkluaXQoKSB7fVxufVxuIl19