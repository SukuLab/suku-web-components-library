/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuMailWidgetComponent {
    constructor() {
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
    ngOnInit() {
    }
}
SukuMailWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-mail-widget',
                template: "<span class=\"row pb-4\">\n  <img [src]=\"image\" [alt]=\"alt\">\n  <h2 [style.font-size.px]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\n    {{name}}\n  </h2>\n</span>",
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
    alt: [{ type: Input }],
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
    SukuMailWidgetComponent.prototype.alt;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.customClass;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.id;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.image;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tYWlsLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1tYWlsLXdpZGdldC9zdWt1LW1haWwtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHVCQUF1QjtJQVNsQztRQVJTLFNBQUksR0FBRyxvQkFBb0IsQ0FBQztRQUM3QixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsUUFBRyxHQUFHLFdBQVcsQ0FBQztRQUNsQixnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQixPQUFFLEdBQUcsa0JBQWtCLENBQUM7UUFDeEIsVUFBSyxHQUFHLCtCQUErQixDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsK09BQWdEOzthQUVqRDs7Ozs7bUJBRUUsS0FBSzttQkFDTixLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztrQkFDTCxLQUFLOzBCQUNMLEtBQUs7aUJBQ0wsS0FBSztvQkFDTCxLQUFLOzs7O0lBUEwsdUNBQXFDOztJQUN0Qyx1Q0FBcUI7O0lBQ3JCLHdDQUEyQjs7SUFDM0IseUNBQXdCOztJQUN4QixzQ0FBMkI7O0lBQzNCLDhDQUFtQzs7SUFDbkMscUNBQWlDOztJQUNqQyx3Q0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1tYWlsLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LW1haWwtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1tYWlsLXdpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VNYWlsV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbmFtZSA9ICdkY29ud2F5QHZhaXJvZy5jb20nO1xuXHRASW5wdXQoKSBzaXplID0gJzE0Jztcblx0QElucHV0KCkgY29sb3IgPSAnIzBmMGYwZic7XG5cdEBJbnB1dCgpIHdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoKSBhbHQgPSAnbWFpbC1pY29uJztcblx0QElucHV0KCkgY3VzdG9tQ2xhc3MgPSAncHQtMiBwbC0zJztcblx0QElucHV0KCkgaWQgPSAnc3VrdS1tYWlsLXdpZGdldCc7XG5cdEBJbnB1dCgpIGltYWdlID0gJy9hc3NldHMvaW1hZ2VzL21haWwtbGlnaHQuc3ZnJztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=