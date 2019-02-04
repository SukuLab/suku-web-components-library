/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuAddWidgetComponent {
    constructor() {
        this.image = '../../assets/images/map-pin.svg';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWFkZC13aWRnZXQvc3VrdS1hZGQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sc0JBQXNCO0lBUWxDO1FBUFMsVUFBSyxHQUFHLGlDQUFpQyxDQUFDO1FBSTFDLGdCQUFXLEdBQUcsc0JBQXNCLENBQUM7UUFDcEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFdkIsQ0FBQzs7OztJQUVoQixRQUFRLEtBQUksQ0FBQzs7O1lBZmIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLCtTQUErQzs7YUFFL0M7Ozs7O29CQUVDLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSztxQkFDTCxNQUFNOzs7O0lBTFAsdUNBQW1EOztJQUNuRCxzQ0FBYzs7SUFDZCx1Q0FBZTs7SUFDZix3Q0FBZ0I7O0lBQ2hCLDZDQUE4Qzs7SUFDOUMsd0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LWFkZC13aWRnZXQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWFkZC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LWFkZC13aWRnZXQuY29tcG9uZW50LnNjc3MnIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VBZGRXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGltYWdlID0gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFwLXBpbi5zdmcnO1xyXG5cdEBJbnB1dCgpIHNpemU7XHJcblx0QElucHV0KCkgY29sb3I7XHJcblx0QElucHV0KCkgd2VpZ2h0O1xyXG5cdEBJbnB1dCgpIGN1c3RvbWNsYXNzID0gJ21sLTIgYWRkLXdpZGdldCBtdC0xJztcclxuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iXX0=