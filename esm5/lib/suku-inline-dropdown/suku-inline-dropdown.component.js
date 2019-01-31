/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
var SukuInlineDropdownComponent = /** @class */ (function () {
    function SukuInlineDropdownComponent() {
        this.size = '14';
        this.color = '#757575';
        this.weight = '600';
        this.id = '';
        this.customClass = 'pr-2 c-pointer';
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuInlineDropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuInlineDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-inline-dropdown',
                    template: "<span class=\"row\" (click)=\"action.emit()\">\r\n  <h2 [style.font-size.px]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\r\n   <ng-content></ng-content>\r\n  </h2>\r\n  <i class=\"fa fa-chevron-circle-down f17\" style=\"color:#a7bf2e\"></i>\r\n </span>\r\n",
                    styles: ["h2{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6;word-break:break-all!important}.f17{font-size:17px}.c-pointer{cursor:pointer!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuInlineDropdownComponent.ctorParameters = function () { return []; };
    SukuInlineDropdownComponent.propDecorators = {
        size: [{ type: Input }],
        color: [{ type: Input }],
        weight: [{ type: Input }],
        id: [{ type: Input }],
        customClass: [{ type: Input }],
        action: [{ type: Output }]
    };
    return SukuInlineDropdownComponent;
}());
export { SukuInlineDropdownComponent };
if (false) {
    /** @type {?} */
    SukuInlineDropdownComponent.prototype.size;
    /** @type {?} */
    SukuInlineDropdownComponent.prototype.color;
    /** @type {?} */
    SukuInlineDropdownComponent.prototype.weight;
    /** @type {?} */
    SukuInlineDropdownComponent.prototype.id;
    /** @type {?} */
    SukuInlineDropdownComponent.prototype.customClass;
    /** @type {?} */
    SukuInlineDropdownComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1pbmxpbmUtZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtaW5saW5lLWRyb3Bkb3duL3N1a3UtaW5saW5lLWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksR0FBSSxNQUFNLGVBQWUsQ0FBQztBQUVqRjtJQWFFO1FBUFEsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFDUixnQkFBVyxHQUFHLGdCQUFnQixDQUFDO1FBQzlCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXJCLENBQUM7Ozs7SUFFakIsOENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyx1VUFBb0Q7O2lCQUVyRDs7Ozs7dUJBRUMsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7cUJBQ0wsS0FBSzs4QkFDTCxLQUFLO3lCQUNMLE1BQU07O0lBT1Isa0NBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWJZLDJCQUEyQjs7O0lBQ3ZDLDJDQUFxQjs7SUFDckIsNENBQTJCOztJQUMzQiw2Q0FBd0I7O0lBQ3hCLHlDQUFpQjs7SUFDakIsa0RBQXdDOztJQUN4Qyw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1pbmxpbmUtZHJvcGRvd24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWlubGluZS1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1pbmxpbmUtZHJvcGRvd24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUlubGluZURyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBzaXplID0gJzE0JztcclxuXHRASW5wdXQoKSBjb2xvciA9ICcjNzU3NTc1JztcclxuXHRASW5wdXQoKSB3ZWlnaHQgPSAnNjAwJztcclxuXHRASW5wdXQoKSBpZCA9ICcnO1xyXG5cdEBJbnB1dCgpIGN1c3RvbUNsYXNzID0gJ3ByLTIgYy1wb2ludGVyJztcclxuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==