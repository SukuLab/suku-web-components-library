/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuHomeWidgetComponent {
    constructor() {
        this.color = '#f1f4f5';
        this.bgColor = '#76767b';
        this.routerLink = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuHomeWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-home-widget',
                template: "<div class=\"col widget\" [style.background-color]=\"bgColor\" [style.color]=\"color\" (click)=\"routerLink.emit()\">\r\n  <label class=\"pt-2 pb-2 c-pointer\" id=\"{{id}}\"><ng-content></ng-content></label>\r\n </div>\r\n",
                styles: [".widget{font-family:'Encode Sans',sans-serif;border-radius:6px 20px 20px;font-size:16px;float:left;width:150px;height:63px;word-break:break-all!important}.c-pointer{cursor:pointer!important}h5{font-family:Poppins,sans-serif;font-size:14px;font-weight:400;font-style:italic;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#646469;word-break:break-all!important}"]
            }] }
];
/** @nocollapse */
SukuHomeWidgetComponent.ctorParameters = () => [];
SukuHomeWidgetComponent.propDecorators = {
    id: [{ type: Input }],
    color: [{ type: Input }],
    bgColor: [{ type: Input }],
    routerLink: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuHomeWidgetComponent.prototype.id;
    /** @type {?} */
    SukuHomeWidgetComponent.prototype.color;
    /** @type {?} */
    SukuHomeWidgetComponent.prototype.bgColor;
    /** @type {?} */
    SukuHomeWidgetComponent.prototype.routerLink;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ob21lLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1ob21lLXdpZGdldC9zdWt1LWhvbWUtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sdUJBQXVCO0lBTWxDO1FBSlMsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixZQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTFCLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QiwwT0FBZ0Q7O2FBRWpEOzs7OztpQkFFRSxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSzt5QkFDTCxNQUFNOzs7O0lBSFAscUNBQVk7O0lBQ1osd0NBQTJCOztJQUMzQiwwQ0FBNkI7O0lBQzdCLDZDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1ob21lLXdpZGdldCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtaG9tZS13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtaG9tZS13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUhvbWVXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGlkO1xyXG4gIEBJbnB1dCgpIGNvbG9yID0gJyNmMWY0ZjUnO1xyXG4gIEBJbnB1dCgpIGJnQ29sb3IgPSAnIzc2NzY3Yic7XHJcbiAgQE91dHB1dCgpIHJvdXRlckxpbmsgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiB9XHJcbiJdfQ==