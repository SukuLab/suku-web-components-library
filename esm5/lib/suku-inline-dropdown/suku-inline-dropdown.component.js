/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
var SukuInlineDropdownComponent = /** @class */ (function () {
    function SukuInlineDropdownComponent() {
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
    SukuInlineDropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuInlineDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-inline-dropdown',
                    template: "<span (click)=\"action.emit()\" [class]=\"customclass\">\r\n  <h2 [style.font-size.px]=\"size\" [class]=\"customcontentclass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\r\n    <ng-content></ng-content>\r\n  </h2>\r\n  <i class=\"fa fa-chevron-circle-down f17 c-pointer\" style=\"color:#a7bf2e\"></i>\r\n</span>",
                    styles: ["h2{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#bcbcbce3!important;word-break:break-all!important}h2:hover{color:#a8a8a8!important}.f17{font-size:17px}.c-pointer{cursor:pointer!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuInlineDropdownComponent.ctorParameters = function () { return []; };
    SukuInlineDropdownComponent.propDecorators = {
        size: [{ type: Input }],
        color: [{ type: Input }],
        weight: [{ type: Input }],
        id: [{ type: Input }],
        customclass: [{ type: Input }],
        customcontentclass: [{ type: Input }],
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
    SukuInlineDropdownComponent.prototype.customclass;
    /** @type {?} */
    SukuInlineDropdownComponent.prototype.customcontentclass;
    /** @type {?} */
    SukuInlineDropdownComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1pbmxpbmUtZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtaW5saW5lLWRyb3Bkb3duL3N1a3UtaW5saW5lLWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksR0FBSSxNQUFNLGVBQWUsQ0FBQztBQUVqRjtJQWNFO1FBUlEsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFDUixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQix1QkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUNyQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVyQixDQUFDOzs7O0lBRWpCLDhDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsOFZBQW9EOztpQkFFckQ7Ozs7O3VCQUVDLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3FCQUNMLEtBQUs7OEJBQ0wsS0FBSztxQ0FDTCxLQUFLO3lCQUNMLE1BQU07O0lBT1Isa0NBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWRZLDJCQUEyQjs7O0lBQ3ZDLDJDQUFxQjs7SUFDckIsNENBQTJCOztJQUMzQiw2Q0FBd0I7O0lBQ3hCLHlDQUFpQjs7SUFDakIsa0RBQTZCOztJQUM3Qix5REFBK0M7O0lBQy9DLDZDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LWlubGluZS1kcm9wZG93bicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtaW5saW5lLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWlubGluZS1kcm9wZG93bi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1SW5saW5lRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIHNpemUgPSAnMTQnO1xyXG5cdEBJbnB1dCgpIGNvbG9yID0gJyM3NTc1NzUnO1xyXG5cdEBJbnB1dCgpIHdlaWdodCA9ICc2MDAnO1xyXG5cdEBJbnB1dCgpIGlkID0gJyc7XHJcblx0QElucHV0KCkgY3VzdG9tY2xhc3MgPSAncm93JztcclxuXHRASW5wdXQoKSBjdXN0b21jb250ZW50Y2xhc3MgPSAncHItMiBjLXBvaW50ZXInO1xyXG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19