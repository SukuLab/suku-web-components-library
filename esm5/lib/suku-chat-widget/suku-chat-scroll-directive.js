/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-chat-widget/suku-chat-scroll-directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jaGF0LXNjcm9sbC1kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1jaGF0LXdpZGdldC9zdWt1LWNoYXQtc2Nyb2xsLWRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUVwRTtJQUtJLGlDQUFvQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUFJLENBQUM7Ozs7SUFDakMsZ0RBQWM7OztJQUFyQjs7WUFDVSxFQUFFLEdBQW1CLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYTtRQUNqRCxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7O2dCQVRKLFNBQVMsU0FBQzs7b0JBRVAsUUFBUSxFQUFFLGtCQUFrQjtpQkFDL0I7Ozs7Z0JBTG1CLFVBQVU7O0lBWTlCLDhCQUFDO0NBQUEsQUFWRCxJQVVDO1NBTlksdUJBQXVCOzs7Ozs7SUFDcEIsc0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICAgIHNlbGVjdG9yOiAnW3Njcm9sbFRvQm90dG9tXSdcbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsVG9Cb3R0b21EaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7IH1cbiAgICBwdWJsaWMgc2Nyb2xsVG9Cb3R0b20oKSB7XG4gICAgICAgIGNvbnN0IGVsOiBIVE1MRGl2RWxlbWVudCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IE1hdGgubWF4KDAsIGVsLnNjcm9sbEhlaWdodCAtIGVsLm9mZnNldEhlaWdodCk7XG4gICAgfVxufVxuIl19