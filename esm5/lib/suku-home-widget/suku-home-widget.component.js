/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuHomeWidgetComponent = /** @class */ (function () {
    function SukuHomeWidgetComponent() {
        this.color = '#f1f4f5';
        this.bgColor = '#76767b';
        this.routerLink = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuHomeWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuHomeWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-home-widget',
                    template: "<div class=\"col widget\" [style.background-color]=\"bgColor\" [style.color]=\"color\" (click)=\"routerLink.emit()\">\r\n  <label class=\"pt-2 pb-2 c-pointer\" id=\"{{id}}\"><ng-content></ng-content></label>\r\n </div>\r\n",
                    styles: [".widget{font-family:'Encode Sans',sans-serif;border-radius:6px 20px 20px;font-size:16px;float:left;width:150px;height:63px;word-break:break-all!important}.c-pointer{cursor:pointer!important}h5{font-family:Poppins,sans-serif;font-size:14px;font-weight:400;font-style:italic;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#646469;word-break:break-all!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuHomeWidgetComponent.ctorParameters = function () { return []; };
    SukuHomeWidgetComponent.propDecorators = {
        id: [{ type: Input }],
        color: [{ type: Input }],
        bgColor: [{ type: Input }],
        routerLink: [{ type: Output }]
    };
    return SukuHomeWidgetComponent;
}());
export { SukuHomeWidgetComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1ob21lLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1ob21lLXdpZGdldC9zdWt1LWhvbWUtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQVdFO1FBSlMsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixZQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTFCLENBQUM7Ozs7SUFFakIsMENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDBPQUFnRDs7aUJBRWpEOzs7OztxQkFFRSxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxNQUFNOztJQU9SLDhCQUFDO0NBQUEsQUFoQkYsSUFnQkU7U0FYVyx1QkFBdUI7OztJQUNsQyxxQ0FBWTs7SUFDWix3Q0FBMkI7O0lBQzNCLDBDQUE2Qjs7SUFDN0IsNkNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LWhvbWUtd2lkZ2V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1ob21lLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1ob21lLXdpZGdldC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1SG9tZVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaWQ7XHJcbiAgQElucHV0KCkgY29sb3IgPSAnI2YxZjRmNSc7XHJcbiAgQElucHV0KCkgYmdDb2xvciA9ICcjNzY3NjdiJztcclxuICBAT3V0cHV0KCkgcm91dGVyTGluayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuIH1cclxuIl19