/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuSecondaryButtonComponent {
    constructor() {
        this.trigger = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SukuSecondaryButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-secondary-button',
                template: "<a class=\"secondary-btn c-pointer\" id=\"{{id}}\" [style.color]=\"color\" [style.font-size.px]=\"size\" (click)=\"trigger.emit()\">\n  <ng-content></ng-content>\n</a>\n",
                styles: [".secondary-btn{font-family:'Encode Sans',sans-serif;font-size:14px;font-weight:800;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#1c1c1c!important;border-bottom:3.5px solid #a7bf2e}"]
            }] }
];
/** @nocollapse */
SukuSecondaryButtonComponent.ctorParameters = () => [];
SukuSecondaryButtonComponent.propDecorators = {
    id: [{ type: Input }],
    size: [{ type: Input }],
    color: [{ type: Input }],
    trigger: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuSecondaryButtonComponent.prototype.id;
    /** @type {?} */
    SukuSecondaryButtonComponent.prototype.size;
    /** @type {?} */
    SukuSecondaryButtonComponent.prototype.color;
    /** @type {?} */
    SukuSecondaryButtonComponent.prototype.trigger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zZWNvbmRhcnktYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXNlY29uZGFyeS1idXR0b24vc3VrdS1zZWNvbmRhcnktYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sNEJBQTRCO0lBTXhDO1FBRlUsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFeEIsQ0FBQzs7OztJQUVoQixRQUFRLEtBQUksQ0FBQzs7O1lBYmIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLHFMQUFxRDs7YUFFckQ7Ozs7O2lCQUVDLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3NCQUNMLE1BQU07Ozs7SUFIUCwwQ0FBWTs7SUFDWiw0Q0FBYzs7SUFDZCw2Q0FBZTs7SUFDZiwrQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3Utc2Vjb25kYXJ5LWJ1dHRvbicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXNlY29uZGFyeS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1zZWNvbmRhcnktYnV0dG9uLmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VTZWNvbmRhcnlCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKSBpZDtcblx0QElucHV0KCkgc2l6ZTtcblx0QElucHV0KCkgY29sb3I7XG5cdEBPdXRwdXQoKSB0cmlnZ2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRuZ09uSW5pdCgpIHt9XG59XG4iXX0=