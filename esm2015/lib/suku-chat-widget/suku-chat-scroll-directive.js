/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
export class ScrollToBottomDirective {
    /**
     * @param {?} _el
     */
    constructor(_el) {
        this._el = _el;
    }
    /**
     * @return {?}
     */
    scrollToBottom() {
        /** @type {?} */
        const el = this._el.nativeElement;
        el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight);
    }
}
ScrollToBottomDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[scrollToBottom]'
            },] }
];
/** @nocollapse */
ScrollToBottomDirective.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollToBottomDirective.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGF0LXNjcm9sbC1kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGF0LXdpZGdldC9zdWt1LWNoYXQtc2Nyb2xsLWRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBTXBFLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFDaEMsWUFBb0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7SUFBSSxDQUFDOzs7O0lBQ2pDLGNBQWM7O2NBQ1gsRUFBRSxHQUFtQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWE7UUFDakQsRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7WUFUSixTQUFTLFNBQUM7O2dCQUVQLFFBQVEsRUFBRSxrQkFBa0I7YUFDL0I7Ozs7WUFMbUIsVUFBVTs7Ozs7OztJQU9kLHNDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcclxuICAgIHNlbGVjdG9yOiAnW3Njcm9sbFRvQm90dG9tXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNjcm9sbFRvQm90dG9tRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7IH1cclxuICAgIHB1YmxpYyBzY3JvbGxUb0JvdHRvbSgpIHtcclxuICAgICAgICBjb25zdCBlbDogSFRNTERpdkVsZW1lbnQgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IE1hdGgubWF4KDAsIGVsLnNjcm9sbEhlaWdodCAtIGVsLm9mZnNldEhlaWdodCk7XHJcbiAgICB9XHJcbn1cclxuIl19