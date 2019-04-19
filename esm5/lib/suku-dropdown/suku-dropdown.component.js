/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
var SukuDropdownComponent = /** @class */ (function () {
    function SukuDropdownComponent() {
        this.control = 'productTraceability';
        this.data = [];
        this.icon = '../assets/images/arrow-icon.png';
        this.select = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuDropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-dropdown',
                    template: "<span [formGroup]=\"form\">\r\n<mat-form-field class=\"col p-0\">\r\n  <mat-select id=\"sttProductTraceability\" formControlName=\"{{control}}\" (selectionChange)=\"select.emit()\"\r\n    placeholder=\"select product from this listing\">\r\n    <mat-option *ngFor=\"let item of data\" value=\"{{item?.productName}}\" id=\"sttProductTraceabilityPn\">\r\n      {{item?.productName}}\r\n    </mat-option>\r\n  </mat-select>\r\n  <span matSuffix>\r\n    <mat-icon><span><img height=\"23\" [src]=\"icon\" width=\"20\"></span></mat-icon>\r\n  </span>\r\n</mat-form-field>\r\n</span>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SukuDropdownComponent.ctorParameters = function () { return []; };
    SukuDropdownComponent.propDecorators = {
        form: [{ type: Input }],
        control: [{ type: Input }],
        data: [{ type: Input }],
        icon: [{ type: Input }],
        select: [{ type: Output }]
    };
    return SukuDropdownComponent;
}());
export { SukuDropdownComponent };
if (false) {
    /** @type {?} */
    SukuDropdownComponent.prototype.form;
    /** @type {?} */
    SukuDropdownComponent.prototype.control;
    /** @type {?} */
    SukuDropdownComponent.prototype.data;
    /** @type {?} */
    SukuDropdownComponent.prototype.icon;
    /** @type {?} */
    SukuDropdownComponent.prototype.select;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kcm9wZG93bi9zdWt1LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0M7SUFZQztRQUxTLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNoQyxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsU0FBSSxHQUFHLGlDQUFpQyxDQUFDO1FBQ3hDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXRCLENBQUM7Ozs7SUFFakIsd0NBQVE7OztJQUFSLGNBQWEsQ0FBQzs7Z0JBZGQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxlQUFlO29CQUN6Qiw0a0JBQTZDOztpQkFFN0M7Ozs7O3VCQUVDLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsTUFBTTs7SUFLUiw0QkFBQztDQUFBLEFBZkQsSUFlQztTQVZZLHFCQUFxQjs7O0lBQ2pDLHFDQUF5Qjs7SUFDekIsd0NBQXlDOztJQUN6QyxxQ0FBbUI7O0lBQ25CLHFDQUFrRDs7SUFDbEQsdUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IF9rZXlWYWx1ZURpZmZlcnNGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvYXBwbGljYXRpb25fbW9kdWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3VrdS1kcm9wZG93bicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL3N1a3UtZHJvcGRvd24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdURyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KCkgY29udHJvbCA9ICdwcm9kdWN0VHJhY2VhYmlsaXR5JztcclxuXHRASW5wdXQoKSBkYXRhID0gW107XHJcblx0QElucHV0KCkgaWNvbiA9ICcuLi9hc3NldHMvaW1hZ2VzL2Fycm93LWljb24ucG5nJztcclxuXHRAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHsgfVxyXG59XHJcbiJdfQ==