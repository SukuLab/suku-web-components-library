/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuMailWidgetComponent = /** @class */ (function () {
    function SukuMailWidgetComponent() {
        this.name = 'dconway@vairog.com';
        this.size = '14';
        this.color = '#0f0f0f';
        this.weight = '500';
        this.alt = 'mail-icon';
        this.customClass = 'pt-2 pl-3';
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
                    template: "<span class=\"row pb-4\">\n  <img [src]=\"image\" [alt]=\"alt\">\n  <h2 [style.font-size.px]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\n    {{name}}\n  </h2>\n</span>",
                    styles: ["h2{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6!important;word-break:break-all!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuMailWidgetComponent.ctorParameters = function () { return []; };
    SukuMailWidgetComponent.propDecorators = {
        name: [{ type: Input }],
        size: [{ type: Input }],
        color: [{ type: Input }],
        weight: [{ type: Input }],
        alt: [{ type: Input }],
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
    SukuMailWidgetComponent.prototype.alt;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.customClass;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.id;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.image;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tYWlsLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1tYWlsLXdpZGdldC9zdWt1LW1haWwtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFjRTtRQVJTLFNBQUksR0FBRyxvQkFBb0IsQ0FBQztRQUM3QixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsUUFBRyxHQUFHLFdBQVcsQ0FBQztRQUNsQixnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQixPQUFFLEdBQUcsa0JBQWtCLENBQUM7UUFDeEIsVUFBSyxHQUFHLCtCQUErQixDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFakIsMENBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QiwrT0FBZ0Q7O2lCQUVqRDs7Ozs7dUJBRUUsS0FBSzt1QkFDTixLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSztzQkFDTCxLQUFLOzhCQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLOztJQU1QLDhCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FkWSx1QkFBdUI7OztJQUNsQyx1Q0FBcUM7O0lBQ3RDLHVDQUFxQjs7SUFDckIsd0NBQTJCOztJQUMzQix5Q0FBd0I7O0lBQ3hCLHNDQUEyQjs7SUFDM0IsOENBQW1DOztJQUNuQyxxQ0FBaUM7O0lBQ2pDLHdDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LW1haWwtd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtbWFpbC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LW1haWwtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdU1haWxXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBuYW1lID0gJ2Rjb253YXlAdmFpcm9nLmNvbSc7XG5cdEBJbnB1dCgpIHNpemUgPSAnMTQnO1xuXHRASW5wdXQoKSBjb2xvciA9ICcjMGYwZjBmJztcblx0QElucHV0KCkgd2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgpIGFsdCA9ICdtYWlsLWljb24nO1xuXHRASW5wdXQoKSBjdXN0b21DbGFzcyA9ICdwdC0yIHBsLTMnO1xuXHRASW5wdXQoKSBpZCA9ICdzdWt1LW1haWwtd2lkZ2V0Jztcblx0QElucHV0KCkgaW1hZ2UgPSAnL2Fzc2V0cy9pbWFnZXMvbWFpbC1saWdodC5zdmcnO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==