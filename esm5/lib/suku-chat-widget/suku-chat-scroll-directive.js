/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener } from '@angular/core';
var ScrollToBottomDirective = /** @class */ (function () {
    function ScrollToBottomDirective(_el) {
        this._el = _el;
    }
    /**
     * @return {?}
     */
    ScrollToBottomDirective.prototype.scrollToBottom = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this._el.nativeElement;
        el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight);
    };
    /**
     * @return {?}
     */
    ScrollToBottomDirective.prototype.scrolling = /**
     * @return {?}
     */
    function () {
        console.log('scrolling');
    };
    ScrollToBottomDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[scrollToBottom]'
                },] }
    ];
    /** @nocollapse */
    ScrollToBottomDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ScrollToBottomDirective.propDecorators = {
        scrolling: [{ type: HostListener, args: ['scroll',] }]
    };
    return ScrollToBottomDirective;
}());
export { ScrollToBottomDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollToBottomDirective.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGF0LXNjcm9sbC1kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGF0LXdpZGdldC9zdWt1LWNoYXQtc2Nyb2xsLWRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFO0lBSUksaUNBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQUksQ0FBQzs7OztJQUNqQyxnREFBYzs7O0lBQXJCOztZQUNVLEVBQUUsR0FBbUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhO1FBQ2pELEVBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7OztJQUV1QiwyQ0FBUzs7O0lBQWpDO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkFaSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtpQkFDL0I7Ozs7Z0JBSm1CLFVBQVU7Ozs0QkFZekIsWUFBWSxTQUFDLFFBQVE7O0lBSTFCLDhCQUFDO0NBQUEsQUFkRCxJQWNDO1NBWFksdUJBQXVCOzs7Ozs7SUFDcEIsc0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbc2Nyb2xsVG9Cb3R0b21dJ1xufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxUb0JvdHRvbURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYpIHsgfVxuICAgIHB1YmxpYyBzY3JvbGxUb0JvdHRvbSgpIHtcbiAgICAgICAgY29uc3QgZWw6IEhUTUxEaXZFbGVtZW50ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgZWwuc2Nyb2xsSGVpZ2h0IC0gZWwub2Zmc2V0SGVpZ2h0KTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdzY3JvbGwnKSBzY3JvbGxpbmcoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzY3JvbGxpbmcnKTtcbiAgICB9XG5cbn1cbiJdfQ==