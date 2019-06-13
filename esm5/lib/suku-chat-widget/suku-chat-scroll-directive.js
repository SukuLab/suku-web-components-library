/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
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
    ScrollToBottomDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[scrollToBottom]'
                },] }
    ];
    /** @nocollapse */
    ScrollToBottomDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGF0LXNjcm9sbC1kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGF0LXdpZGdldC9zdWt1LWNoYXQtc2Nyb2xsLWRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBRXBFO0lBS0ksaUNBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQUksQ0FBQzs7OztJQUNqQyxnREFBYzs7O0lBQXJCOztZQUNVLEVBQUUsR0FBbUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhO1FBQ2pELEVBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Z0JBVEosU0FBUyxTQUFDOztvQkFFUCxRQUFRLEVBQUUsa0JBQWtCO2lCQUMvQjs7OztnQkFMbUIsVUFBVTs7SUFZOUIsOEJBQUM7Q0FBQSxBQVZELElBVUM7U0FOWSx1QkFBdUI7Ozs7OztJQUNwQixzQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gICAgc2VsZWN0b3I6ICdbc2Nyb2xsVG9Cb3R0b21dJ1xufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxUb0JvdHRvbURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYpIHsgfVxuICAgIHB1YmxpYyBzY3JvbGxUb0JvdHRvbSgpIHtcbiAgICAgICAgY29uc3QgZWw6IEhUTUxEaXZFbGVtZW50ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgZWwuc2Nyb2xsSGVpZ2h0IC0gZWwub2Zmc2V0SGVpZ2h0KTtcbiAgICB9XG59XG4iXX0=