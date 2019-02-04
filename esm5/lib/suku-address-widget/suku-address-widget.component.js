/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuAddressWidgetComponent = /** @class */ (function () {
    function SukuAddressWidgetComponent() {
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
    SukuAddressWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuAddressWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-address-widget',
                    template: "<span class=\"row\">\r\n  <img src=\"{{image}}\">\r\n  <h2 [style.font-size.px]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\" [style.color]=\"color\">\r\n    <ng-content></ng-content>\r\n  </h2>\r\n</span>\r\n",
                    styles: ["h2{font-family:'Encode Sans',sans-serif!important;font-size:12px!important;font-weight:500!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px!important;color:#b6b6b6!important;word-break:break-all!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuAddressWidgetComponent.ctorParameters = function () { return []; };
    SukuAddressWidgetComponent.propDecorators = {
        image: [{ type: Input }],
        name: [{ type: Input }],
        size: [{ type: Input }],
        color: [{ type: Input }],
        weight: [{ type: Input }],
        id: [{ type: Input }],
        customClass: [{ type: Input }]
    };
    return SukuAddressWidgetComponent;
}());
export { SukuAddressWidgetComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGRyZXNzLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hZGRyZXNzLXdpZGdldC9zdWt1LWFkZHJlc3Mtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFjRTtRQVJTLFVBQUssR0FBRyxvQ0FBb0MsQ0FBQztRQUM3QyxTQUFJLEdBQUcsbUJBQW1CLENBQUM7UUFDNUIsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFDUixnQkFBVyxHQUFHLFdBQVcsQ0FBQztJQUVsQixDQUFDOzs7O0lBRWpCLDZDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsNlBBQW1EOztpQkFFcEQ7Ozs7O3dCQUVFLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTixLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSztxQkFDTCxLQUFLOzhCQUNMLEtBQUs7O0lBT1AsaUNBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWRZLDBCQUEwQjs7O0lBQ3JDLDJDQUFzRDs7SUFDdEQsMENBQW9DOztJQUNyQywwQ0FBcUI7O0lBQ3JCLDJDQUEyQjs7SUFDM0IsNENBQXdCOztJQUN4Qix3Q0FBaUI7O0lBQ2pCLGlEQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LWFkZHJlc3Mtd2lkZ2V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1hZGRyZXNzLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1hZGRyZXNzLXdpZGdldC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1QWRkcmVzc1dpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaW1hZ2UgPSAnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tYXAtcGluLnN2Zyc7XHJcbiAgQElucHV0KCkgbmFtZSA9ICc5MzE1IE5XIDExMlRIIEFWRSc7XHJcblx0QElucHV0KCkgc2l6ZSA9ICcxNCc7XHJcblx0QElucHV0KCkgY29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCkgd2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCkgaWQgPSAnJztcclxuXHRASW5wdXQoKSBjdXN0b21DbGFzcyA9ICdwdC0yIHBsLTMnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==