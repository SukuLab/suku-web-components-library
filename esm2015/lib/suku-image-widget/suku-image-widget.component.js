/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-image-widget/suku-image-widget.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuImageWidgetComponent {
    constructor() {
        this.imageSrc = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuImageWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-image-widget',
                template: "<div class=\"product-img imgBorder\" [ngClass]=\"{'shine': !imageSrc}\">\n  <img *ngIf=\"imageSrc\" src=\"{{imageSrc}}\"\n      class=\"ImgRes rounded-0 center\" alt=\"product-01\" />\n  </div>",
                styles: [".product-img{min-height:158px;width:256px;float:left;text-align:center;line-height:158px;position:relative;z-index:10}.ImgRes{max-width:100%;max-height:140px}.imgBorder{border:1px solid #f2f2f2!important}.center{text-align:center}@-webkit-keyframes placeholderShimmer{0%{background-position:-468px 0}100%{background-position:468px 0}}@keyframes placeholderShimmer{0%{background-position:-468px 0}100%{background-position:468px 0}}.shine{background:0 0/800px 200px no-repeat #f6f7f8;background-image:linear-gradient(to right,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);display:inline-block;position:relative;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeholderShimmer;animation-name:placeholderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear}"]
            }] }
];
/** @nocollapse */
SukuImageWidgetComponent.ctorParameters = () => [];
SukuImageWidgetComponent.propDecorators = {
    imageSrc: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuImageWidgetComponent.prototype.imageSrc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1pbWFnZS13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtaW1hZ2Utd2lkZ2V0L3N1a3UtaW1hZ2Utd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTyx3QkFBd0I7SUFFbkM7UUFEUyxhQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLDZNQUFpRDs7YUFFbEQ7Ozs7O3VCQUVFLEtBQUs7Ozs7SUFBTiw0Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1pbWFnZS13aWRnZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1pbWFnZS13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWltYWdlLXdpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VJbWFnZVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGltYWdlU3JjID0gJyc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19