/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SukuFormFooterComponent } from './suku-form-footer.component';
var SukuFormFooterModule = /** @class */ (function () {
    function SukuFormFooterModule(injector) {
        this.injector = injector;
    }
    /**
     * @return {?}
     */
    SukuFormFooterModule.prototype.ngDoBootstrap = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var elements = [
            [SukuFormFooterComponent, 'suku-form-footer']
        ];
        try {
            for (var elements_1 = tslib_1.__values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                var _b = tslib_1.__read(elements_1_1.value, 2), component = _b[0], name_1 = _b[1];
                /** @type {?} */
                var el = createCustomElement(component, { injector: this.injector });
                customElements.define(name_1, el);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    SukuFormFooterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        SukuFormFooterComponent
                    ],
                    entryComponents: [
                        SukuFormFooterComponent
                    ],
                    exports: [
                        SukuFormFooterComponent
                    ]
                },] }
    ];
    /** @nocollapse */
    SukuFormFooterModule.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return SukuFormFooterModule;
}());
export { SukuFormFooterModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SukuFormFooterModule.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mb3JtLWZvb3Rlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1mb3JtLWZvb3Rlci9zdWt1LWZvcm0tZm9vdGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RTtJQWdCRSw4QkFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN0QyxDQUFDOzs7O0lBRUQsNENBQWE7OztJQUFiOzs7WUFDUSxRQUFRLEdBQVU7WUFDdEIsQ0FBQyx1QkFBdUIsRUFBRSxrQkFBa0IsQ0FBQztTQUM5Qzs7WUFDRCxLQUFnQyxJQUFBLGFBQUEsaUJBQUEsUUFBUSxDQUFBLGtDQUFBLHdEQUFFO2dCQUEvQixJQUFBLDBDQUFpQixFQUFoQixpQkFBUyxFQUFFLGNBQUk7O29CQUNuQixFQUFFLEdBQUcsbUJBQW1CLENBQUMsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxNQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDakM7Ozs7Ozs7OztJQUNILENBQUM7O2dCQTNCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHVCQUF1QjtxQkFDeEI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNmLHVCQUF1QjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHVCQUF1QjtxQkFDeEI7aUJBQ0Y7Ozs7Z0JBbEJrQixRQUFROztJQWtDM0IsMkJBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQWZZLG9CQUFvQjs7Ozs7O0lBRW5CLHdDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XG5pbXBvcnQgeyBTdWt1Rm9ybUZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vc3VrdS1mb3JtLWZvb3Rlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFN1a3VGb3JtRm9vdGVyQ29tcG9uZW50XG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIFN1a3VGb3JtRm9vdGVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTdWt1Rm9ybUZvb3RlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VGb3JtRm9vdGVyTW9kdWxlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICB9XG5cbiAgbmdEb0Jvb3RzdHJhcCgpIHtcbiAgICBjb25zdCBlbGVtZW50czogYW55W10gPSBbXG4gICAgICBbU3VrdUZvcm1Gb290ZXJDb21wb25lbnQsICdzdWt1LWZvcm0tZm9vdGVyJ11cbiAgICBdO1xuICAgIGZvciAoY29uc3QgW2NvbXBvbmVudCwgbmFtZV0gb2YgZWxlbWVudHMpIHtcbiAgICAgIGNvbnN0IGVsID0gY3JlYXRlQ3VzdG9tRWxlbWVudChjb21wb25lbnQsIHsgaW5qZWN0b3I6IHRoaXMuaW5qZWN0b3IgfSk7XG4gICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUobmFtZSwgZWwpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=