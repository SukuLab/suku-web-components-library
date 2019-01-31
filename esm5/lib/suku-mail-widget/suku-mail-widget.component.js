/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuMailWidgetComponent = /** @class */ (function () {
    function SukuMailWidgetComponent() {
        this.name = 'dconway@vairog.com';
        this.size = '14';
        this.color = '#3e3e3e';
        this.weight = '500';
        this.customClass = 'pt-2 pl-2';
        this.id = 'suku-mail-widget';
        this.image = '/assets/images/mail-light.svg';
    }
    /**
     * @return {?}
     */
    SukuMailWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuMailWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-mail-widget',
                    template: "<span class=\"row pb-4\">\r\n  <img [src]=\"image\">\r\n\t<h2 [style.font-size.px]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\r\n  {{name}}\r\n  </h2>\r\n  </span>\r\n",
                    styles: ["h2{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6;word-break:break-all!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuMailWidgetComponent.ctorParameters = function () { return []; };
    SukuMailWidgetComponent.propDecorators = {
        name: [{ type: Input }],
        size: [{ type: Input }],
        color: [{ type: Input }],
        weight: [{ type: Input }],
        customClass: [{ type: Input }],
        id: [{ type: Input }],
        image: [{ type: Input }]
    };
    return SukuMailWidgetComponent;
}());
export { SukuMailWidgetComponent };
if (false) {
    /** @type {?} */
    SukuMailWidgetComponent.prototype.name;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.size;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.color;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.weight;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.customClass;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.id;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.image;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tYWlsLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1tYWlsLXdpZGdldC9zdWt1LW1haWwtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFhRTtRQVBTLFNBQUksR0FBRyxvQkFBb0IsQ0FBQztRQUM3QixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxXQUFXLENBQUM7UUFDMUIsT0FBRSxHQUFHLGtCQUFrQixDQUFDO1FBQ3hCLFVBQUssR0FBRywrQkFBK0IsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRWpCLDBDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsK09BQWdEOztpQkFFakQ7Ozs7O3VCQUVFLEtBQUs7dUJBQ04sS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSztxQkFDTCxLQUFLO3dCQUNMLEtBQUs7O0lBTVAsOEJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWJZLHVCQUF1Qjs7O0lBQ2xDLHVDQUFxQzs7SUFDdEMsdUNBQXFCOztJQUNyQix3Q0FBMkI7O0lBQzNCLHlDQUF3Qjs7SUFDeEIsOENBQW1DOztJQUNuQyxxQ0FBaUM7O0lBQ2pDLHdDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LW1haWwtd2lkZ2V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1tYWlsLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1tYWlsLXdpZGdldC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1TWFpbFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgbmFtZSA9ICdkY29ud2F5QHZhaXJvZy5jb20nO1xyXG5cdEBJbnB1dCgpIHNpemUgPSAnMTQnO1xyXG5cdEBJbnB1dCgpIGNvbG9yID0gJyMzZTNlM2UnO1xyXG5cdEBJbnB1dCgpIHdlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgpIGN1c3RvbUNsYXNzID0gJ3B0LTIgcGwtMic7XHJcblx0QElucHV0KCkgaWQgPSAnc3VrdS1tYWlsLXdpZGdldCc7XHJcblx0QElucHV0KCkgaW1hZ2UgPSAnL2Fzc2V0cy9pbWFnZXMvbWFpbC1saWdodC5zdmcnO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19