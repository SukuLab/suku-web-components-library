/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuAddressWidgetComponent {
    constructor() {
        this.image = '../../../assets/images/map-pin.svg';
        this.name = '9315 NW 112TH AVE';
        this.size = '14';
        this.color = '#3e3e3e';
        this.weight = '500';
        this.id = '';
        this.iconAlt = 'map-pin';
        this.customClass = 'pt-2 pl-3';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuAddressWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-address-widget',
                template: "<span class=\"row\">\n  <img src=\"{{image}}\" alt=\"{{iconAlt}}\">\n  <h2 [style.font-size.px]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\n    <ng-content></ng-content>\n  </h2>\n</span>",
                styles: ["h2{font-family:'Encode Sans',sans-serif!important;font-size:12px!important;font-weight:500!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px!important;color:#b6b6b6!important;word-break:break-all!important}"]
            }] }
];
/** @nocollapse */
SukuAddressWidgetComponent.ctorParameters = () => [];
SukuAddressWidgetComponent.propDecorators = {
    image: [{ type: Input }],
    name: [{ type: Input }],
    size: [{ type: Input }],
    color: [{ type: Input }],
    weight: [{ type: Input }],
    id: [{ type: Input }],
    iconAlt: [{ type: Input }],
    customClass: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuAddressWidgetComponent.prototype.image;
    /** @type {?} */
    SukuAddressWidgetComponent.prototype.name;
    /** @type {?} */
    SukuAddressWidgetComponent.prototype.size;
    /** @type {?} */
    SukuAddressWidgetComponent.prototype.color;
    /** @type {?} */
    SukuAddressWidgetComponent.prototype.weight;
    /** @type {?} */
    SukuAddressWidgetComponent.prototype.id;
    /** @type {?} */
    SukuAddressWidgetComponent.prototype.iconAlt;
    /** @type {?} */
    SukuAddressWidgetComponent.prototype.customClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGRyZXNzLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hZGRyZXNzLXdpZGdldC9zdWt1LWFkZHJlc3Mtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLDBCQUEwQjtJQVVyQztRQVRTLFVBQUssR0FBRyxvQ0FBb0MsQ0FBQztRQUM3QyxTQUFJLEdBQUcsbUJBQW1CLENBQUM7UUFDNUIsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFDUixZQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsV0FBVyxDQUFDO0lBRWxCLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsbVFBQW1EOzthQUVwRDs7Ozs7b0JBRUUsS0FBSzttQkFDTCxLQUFLO21CQUNOLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO2lCQUNMLEtBQUs7c0JBQ0wsS0FBSzswQkFDTCxLQUFLOzs7O0lBUEwsMkNBQXNEOztJQUN0RCwwQ0FBb0M7O0lBQ3JDLDBDQUFxQjs7SUFDckIsMkNBQTJCOztJQUMzQiw0Q0FBd0I7O0lBQ3hCLHdDQUFpQjs7SUFDakIsNkNBQTZCOztJQUM3QixpREFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1hZGRyZXNzLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWFkZHJlc3Mtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1hZGRyZXNzLXdpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VBZGRyZXNzV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaW1hZ2UgPSAnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tYXAtcGluLnN2Zyc7XG4gIEBJbnB1dCgpIG5hbWUgPSAnOTMxNSBOVyAxMTJUSCBBVkUnO1xuXHRASW5wdXQoKSBzaXplID0gJzE0Jztcblx0QElucHV0KCkgY29sb3IgPSAnIzNlM2UzZSc7XG5cdEBJbnB1dCgpIHdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoKSBpZCA9ICcnO1xuXHRASW5wdXQoKSBpY29uQWx0ID0gJ21hcC1waW4nO1xuXHRASW5wdXQoKSBjdXN0b21DbGFzcyA9ICdwdC0yIHBsLTMnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19