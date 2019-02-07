/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<span class=\"row\">\r\n  <img src=\"{{image}}\">\r\n  <h2 [style.font-size.px]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\r\n    <ng-content></ng-content>\r\n  </h2>\r\n</span>",
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
    SukuAddressWidgetComponent.prototype.customClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGRyZXNzLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hZGRyZXNzLXdpZGdldC9zdWt1LWFkZHJlc3Mtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLDBCQUEwQjtJQVNyQztRQVJTLFVBQUssR0FBRyxvQ0FBb0MsQ0FBQztRQUM3QyxTQUFJLEdBQUcsbUJBQW1CLENBQUM7UUFDNUIsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFDUixnQkFBVyxHQUFHLFdBQVcsQ0FBQztJQUVsQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLHlQQUFtRDs7YUFFcEQ7Ozs7O29CQUVFLEtBQUs7bUJBQ0wsS0FBSzttQkFDTixLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztpQkFDTCxLQUFLOzBCQUNMLEtBQUs7Ozs7SUFOTCwyQ0FBc0Q7O0lBQ3RELDBDQUFvQzs7SUFDckMsMENBQXFCOztJQUNyQiwyQ0FBMkI7O0lBQzNCLDRDQUF3Qjs7SUFDeEIsd0NBQWlCOztJQUNqQixpREFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1hZGRyZXNzLXdpZGdldCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtYWRkcmVzcy13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtYWRkcmVzcy13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUFkZHJlc3NXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGltYWdlID0gJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFwLXBpbi5zdmcnO1xyXG4gIEBJbnB1dCgpIG5hbWUgPSAnOTMxNSBOVyAxMTJUSCBBVkUnO1xyXG5cdEBJbnB1dCgpIHNpemUgPSAnMTQnO1xyXG5cdEBJbnB1dCgpIGNvbG9yID0gJyMzZTNlM2UnO1xyXG5cdEBJbnB1dCgpIHdlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgpIGlkID0gJyc7XHJcblx0QElucHV0KCkgY3VzdG9tQ2xhc3MgPSAncHQtMiBwbC0zJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=