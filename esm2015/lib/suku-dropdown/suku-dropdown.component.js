/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class SukuDropdownComponent {
    constructor() {
        this.control = 'productTraceability';
        this.data = [];
        this.icon = '../assets/images/arrow-icon.png';
        this.select = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SukuDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-dropdown',
                template: "<span [formGroup]=\"form\">\n<mat-form-field class=\"col p-0\">\n  <mat-select id=\"sttProductTraceability\" formControlName=\"{{control}}\" (selectionChange)=\"select.emit()\"\n    placeholder=\"select product from this listing\">\n    <mat-option *ngFor=\"let item of data\" value=\"{{item?.productName}}\" id=\"sttProductTraceabilityPn\">\n      {{item?.productName}}\n    </mat-option>\n  </mat-select>\n  <span matSuffix>\n    <mat-icon><span><img height=\"23\" [src]=\"icon\" width=\"20\"></span></mat-icon>\n  </span>\n</mat-form-field>\n</span>",
                styles: [""]
            }] }
];
/** @nocollapse */
SukuDropdownComponent.ctorParameters = () => [];
SukuDropdownComponent.propDecorators = {
    form: [{ type: Input }],
    control: [{ type: Input }],
    data: [{ type: Input }],
    icon: [{ type: Input }],
    select: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1kcm9wZG93bi9zdWt1LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRM0MsTUFBTSxPQUFPLHFCQUFxQjtJQU9qQztRQUxTLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNoQyxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsU0FBSSxHQUFHLGlDQUFpQyxDQUFDO1FBQ3hDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXRCLENBQUM7Ozs7SUFFakIsUUFBUSxLQUFLLENBQUM7OztZQWRkLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsZUFBZTtnQkFDekIsb2pCQUE2Qzs7YUFFN0M7Ozs7O21CQUVDLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsTUFBTTs7OztJQUpQLHFDQUF5Qjs7SUFDekIsd0NBQXlDOztJQUN6QyxxQ0FBbUI7O0lBQ25CLHFDQUFrRDs7SUFDbEQsdUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgX2tleVZhbHVlRGlmZmVyc0ZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9hcHBsaWNhdGlvbl9tb2R1bGUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LWRyb3Bkb3duJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdURyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuXHRASW5wdXQoKSBjb250cm9sID0gJ3Byb2R1Y3RUcmFjZWFiaWxpdHknO1xuXHRASW5wdXQoKSBkYXRhID0gW107XG5cdEBJbnB1dCgpIGljb24gPSAnLi4vYXNzZXRzL2ltYWdlcy9hcnJvdy1pY29uLnBuZyc7XG5cdEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgfVxufVxuIl19