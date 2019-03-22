/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
export class SukuInlineDropdownComponent {
    constructor() {
        this.size = '14';
        this.color = '#757575';
        this.weight = '600';
        this.id = '';
        this.customclass = 'row';
        this.customcontentclass = 'pr-2 c-pointer';
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuInlineDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-inline-dropdown',
                template: "<span (click)=\"action.emit()\" [class]=\"customclass\">\r\n  <h2 [style.font-size.px]=\"size\" [class]=\"customcontentclass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\r\n    <ng-content></ng-content>\r\n  </h2>\r\n  <i class=\"fa fa-chevron-circle-down f17 c-pointer\" style=\"color:#a7bf2e\"></i>\r\n</span>",
                styles: ["h2{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#bcbcbce3!important;word-break:break-all!important}h2:hover{color:#a8a8a8!important}.f17{font-size:17px}.c-pointer{cursor:pointer!important}"]
            }] }
];
/** @nocollapse */
SukuInlineDropdownComponent.ctorParameters = () => [];
SukuInlineDropdownComponent.propDecorators = {
    size: [{ type: Input }],
    color: [{ type: Input }],
    weight: [{ type: Input }],
    id: [{ type: Input }],
    customclass: [{ type: Input }],
    customcontentclass: [{ type: Input }],
    action: [{ type: Output }]
};
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
    SukuInlineDropdownComponent.prototype.customclass;
    /** @type {?} */
    SukuInlineDropdownComponent.prototype.customcontentclass;
    /** @type {?} */
    SukuInlineDropdownComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1pbmxpbmUtZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtaW5saW5lLWRyb3Bkb3duL3N1a3UtaW5saW5lLWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksR0FBSSxNQUFNLGVBQWUsQ0FBQztBQU9qRixNQUFNLE9BQU8sMkJBQTJCO0lBU3RDO1FBUlEsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFDUixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQix1QkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUNyQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVyQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDhWQUFvRDs7YUFFckQ7Ozs7O21CQUVDLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO2lCQUNMLEtBQUs7MEJBQ0wsS0FBSztpQ0FDTCxLQUFLO3FCQUNMLE1BQU07Ozs7SUFOUCwyQ0FBcUI7O0lBQ3JCLDRDQUEyQjs7SUFDM0IsNkNBQXdCOztJQUN4Qix5Q0FBaUI7O0lBQ2pCLGtEQUE2Qjs7SUFDN0IseURBQStDOztJQUMvQyw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1pbmxpbmUtZHJvcGRvd24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWlubGluZS1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1pbmxpbmUtZHJvcGRvd24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUlubGluZURyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBzaXplID0gJzE0JztcclxuXHRASW5wdXQoKSBjb2xvciA9ICcjNzU3NTc1JztcclxuXHRASW5wdXQoKSB3ZWlnaHQgPSAnNjAwJztcclxuXHRASW5wdXQoKSBpZCA9ICcnO1xyXG5cdEBJbnB1dCgpIGN1c3RvbWNsYXNzID0gJ3Jvdyc7XHJcblx0QElucHV0KCkgY3VzdG9tY29udGVudGNsYXNzID0gJ3ByLTIgYy1wb2ludGVyJztcclxuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==