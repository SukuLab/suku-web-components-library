/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<a (click)=\"action.emit()\">\r\n  <span><img [src]=\"image\" width=\"33px\" height=\"33px\">\r\n    <span [style.font-size.px]=\"size\" [style.color]=\"color\" [class]=\"customclass\" [style.font-weight]=\"weight\">\r\n      <ng-content></ng-content>\r\n    </span>\r\n  </span>\r\n</a>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWFkZC13aWRnZXQvc3VrdS1hZGQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sc0JBQXNCO0lBUWxDO1FBUFMsVUFBSyxHQUFHLHdDQUF3QyxDQUFDO1FBSWpELGdCQUFXLEdBQUcsc0JBQXNCLENBQUM7UUFDcEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFdkIsQ0FBQzs7OztJQUVoQixRQUFRLEtBQUksQ0FBQzs7O1lBZmIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLCtTQUErQzs7YUFFL0M7Ozs7O29CQUVDLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSztxQkFDTCxNQUFNOzs7O0lBTFAsdUNBQTBEOztJQUMxRCxzQ0FBYzs7SUFDZCx1Q0FBZTs7SUFDZix3Q0FBZ0I7O0lBQ2hCLDZDQUE4Qzs7SUFDOUMsd0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LWFkZC13aWRnZXQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWFkZC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LWFkZC13aWRnZXQuY29tcG9uZW50LnNjc3MnIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VBZGRXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGltYWdlID0gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGx1cy1pY29uLWdvbGQucG5nJztcclxuXHRASW5wdXQoKSBzaXplO1xyXG5cdEBJbnB1dCgpIGNvbG9yO1xyXG5cdEBJbnB1dCgpIHdlaWdodDtcclxuXHRASW5wdXQoKSBjdXN0b21jbGFzcyA9ICdtbC0yIGFkZC13aWRnZXQgbXQtMSc7XHJcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19