/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener } from '@angular/core';
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
    /**
     * @return {?}
     */
    scrolling() {
        console.log('scrolling');
    }
}
ScrollToBottomDirective.decorators = [
    { type: Directive, args: [{
                selector: '[scrollToBottom]'
            },] }
];
/** @nocollapse */
ScrollToBottomDirective.ctorParameters = () => [
    { type: ElementRef }
];
ScrollToBottomDirective.propDecorators = {
    scrolling: [{ type: HostListener, args: ['scroll',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollToBottomDirective.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGF0LXNjcm9sbC1kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGF0LXdpZGdldC9zdWt1LWNoYXQtc2Nyb2xsLWRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS3BFLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFDaEMsWUFBb0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7SUFBSSxDQUFDOzs7O0lBQ2pDLGNBQWM7O2NBQ1gsRUFBRSxHQUFtQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWE7UUFDakQsRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7O0lBRXVCLFNBQVM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUFaSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjthQUMvQjs7OztZQUptQixVQUFVOzs7d0JBWXpCLFlBQVksU0FBQyxRQUFROzs7Ozs7O0lBTlYsc0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbc2Nyb2xsVG9Cb3R0b21dJ1xufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxUb0JvdHRvbURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYpIHsgfVxuICAgIHB1YmxpYyBzY3JvbGxUb0JvdHRvbSgpIHtcbiAgICAgICAgY29uc3QgZWw6IEhUTUxEaXZFbGVtZW50ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgZWwuc2Nyb2xsSGVpZ2h0IC0gZWwub2Zmc2V0SGVpZ2h0KTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdzY3JvbGwnKSBzY3JvbGxpbmcoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzY3JvbGxpbmcnKTtcbiAgICB9XG5cbn1cbiJdfQ==