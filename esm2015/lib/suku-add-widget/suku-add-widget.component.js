/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuAddWidgetComponent {
    constructor() {
        this.image = '../../assets/images/plus-icon-gold.png';
        this.customclass = 'ml-2 add-widget mt-1';
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SukuAddWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-add-widget',
                template: "<a (click)=\"action.emit()\">\n  <span><img [src]=\"image\" width=\"33px\" height=\"33px\">\n    <span [style.font-size.px]=\"size\" [style.color]=\"color\" [class]=\"customclass\" [style.font-weight]=\"weight\">\n      <ng-content></ng-content>\n    </span>\n  </span>\n</a>\n",
                styles: [".add-widget{font-family:abelregular,Arial,Helvetica,sans-serif!important;font-size:12px;text-transform:uppercase;text-align:left}"]
            }] }
];
/** @nocollapse */
SukuAddWidgetComponent.ctorParameters = () => [];
SukuAddWidgetComponent.propDecorators = {
    image: [{ type: Input }],
    size: [{ type: Input }],
    color: [{ type: Input }],
    weight: [{ type: Input }],
    customclass: [{ type: Input }],
    action: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWFkZC13aWRnZXQvc3VrdS1hZGQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sc0JBQXNCO0lBUWxDO1FBUFMsVUFBSyxHQUFHLHdDQUF3QyxDQUFDO1FBSWpELGdCQUFXLEdBQUcsc0JBQXNCLENBQUM7UUFDcEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFdkIsQ0FBQzs7OztJQUVoQixRQUFRLEtBQUksQ0FBQzs7O1lBZmIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGlTQUErQzs7YUFFL0M7Ozs7O29CQUVDLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSztxQkFDTCxNQUFNOzs7O0lBTFAsdUNBQTBEOztJQUMxRCxzQ0FBYzs7SUFDZCx1Q0FBZTs7SUFDZix3Q0FBZ0I7O0lBQ2hCLDZDQUE4Qzs7SUFDOUMsd0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LWFkZC13aWRnZXQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1hZGQtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtYWRkLXdpZGdldC5jb21wb25lbnQuc2NzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1QWRkV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgaW1hZ2UgPSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9wbHVzLWljb24tZ29sZC5wbmcnO1xuXHRASW5wdXQoKSBzaXplO1xuXHRASW5wdXQoKSBjb2xvcjtcblx0QElucHV0KCkgd2VpZ2h0O1xuXHRASW5wdXQoKSBjdXN0b21jbGFzcyA9ICdtbC0yIGFkZC13aWRnZXQgbXQtMSc7XG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdG5nT25Jbml0KCkge31cbn1cbiJdfQ==