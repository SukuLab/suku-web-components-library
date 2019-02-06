/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuMailWidgetComponent {
    constructor() {
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
    ngOnInit() {
    }
}
SukuMailWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-mail-widget',
                template: "<span class=\"row pb-4\">\n  <img [src]=\"image\">\n\t<h2 [style.font-size.px]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\n  {{name}}\n  </h2>\n  </span>\n",
                styles: ["h2{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6!important;word-break:break-all!important}"]
            }] }
];
/** @nocollapse */
SukuMailWidgetComponent.ctorParameters = () => [];
SukuMailWidgetComponent.propDecorators = {
    name: [{ type: Input }],
    size: [{ type: Input }],
    color: [{ type: Input }],
    weight: [{ type: Input }],
    customClass: [{ type: Input }],
    id: [{ type: Input }],
    image: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tYWlsLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1tYWlsLXdpZGdldC9zdWt1LW1haWwtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHVCQUF1QjtJQVFsQztRQVBTLFNBQUksR0FBRyxvQkFBb0IsQ0FBQztRQUM3QixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxXQUFXLENBQUM7UUFDMUIsT0FBRSxHQUFHLGtCQUFrQixDQUFDO1FBQ3hCLFVBQUssR0FBRywrQkFBK0IsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLG1PQUFnRDs7YUFFakQ7Ozs7O21CQUVFLEtBQUs7bUJBQ04sS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSztpQkFDTCxLQUFLO29CQUNMLEtBQUs7Ozs7SUFOTCx1Q0FBcUM7O0lBQ3RDLHVDQUFxQjs7SUFDckIsd0NBQTJCOztJQUMzQix5Q0FBd0I7O0lBQ3hCLDhDQUFtQzs7SUFDbkMscUNBQWlDOztJQUNqQyx3Q0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1tYWlsLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LW1haWwtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1tYWlsLXdpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VNYWlsV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbmFtZSA9ICdkY29ud2F5QHZhaXJvZy5jb20nO1xuXHRASW5wdXQoKSBzaXplID0gJzE0Jztcblx0QElucHV0KCkgY29sb3IgPSAnIzNlM2UzZSc7XG5cdEBJbnB1dCgpIHdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoKSBjdXN0b21DbGFzcyA9ICdwdC0yIHBsLTInO1xuXHRASW5wdXQoKSBpZCA9ICdzdWt1LW1haWwtd2lkZ2V0Jztcblx0QElucHV0KCkgaW1hZ2UgPSAnL2Fzc2V0cy9pbWFnZXMvbWFpbC1saWdodC5zdmcnO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==