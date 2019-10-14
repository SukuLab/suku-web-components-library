/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomSanitizer } from '@angular/platform-browser';
import { Pipe } from "@angular/core";
var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SafeHtmlPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'safeHtml'
                },] }
    ];
    /** @nocollapse */
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return SafeHtmlPipe;
}());
export { SafeHtmlPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SafeHtmlPipe.prototype.sanitized;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1odG1sLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1wcm9kdWN0LXRyYWNlLXdpZGdldC9zYWZlLWh0bWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFBO0FBQ3hELE9BQU8sRUFBaUIsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBS0Usc0JBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFBRyxDQUFDOzs7OztJQUMvQyxnQ0FBUzs7OztJQUFULFVBQVUsS0FBSztRQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Z0JBUkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxVQUFVO2lCQUNqQjs7OztnQkFMUSxZQUFZOztJQVlyQixtQkFBQztDQUFBLEFBVEQsSUFTQztTQU5ZLFlBQVk7Ozs7OztJQUVYLGlDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInXG5pbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbuKAi1xuQFBpcGUoe1xuICBuYW1lOiAnc2FmZUh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNhZmVIdG1sUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xu4oCLXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVkOiBEb21TYW5pdGl6ZXIpIHt9XG4gIHRyYW5zZm9ybSh2YWx1ZSkge1xuXHRyZXR1cm4gdGhpcy5zYW5pdGl6ZWQuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodmFsdWUpO1xuICB9XG59Il19