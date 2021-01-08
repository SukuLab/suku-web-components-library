/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-form-footer/suku-form-footer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mb3JtLWZvb3Rlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1mb3JtLWZvb3Rlci9zdWt1LWZvcm0tZm9vdGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFdkU7SUFnQkUsOEJBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDdEMsQ0FBQzs7OztJQUVELDRDQUFhOzs7SUFBYjs7O1lBQ1EsUUFBUSxHQUFVO1lBQ3RCLENBQUMsdUJBQXVCLEVBQUUsa0JBQWtCLENBQUM7U0FDOUM7O1lBQ0QsS0FBZ0MsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFBRTtnQkFBL0IsSUFBQSwwQ0FBaUIsRUFBaEIsaUJBQVMsRUFBRSxjQUFJOztvQkFDbkIsRUFBRSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RFLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ2pDOzs7Ozs7Ozs7SUFDSCxDQUFDOztnQkEzQkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRTt3QkFDWix1QkFBdUI7cUJBQ3hCO29CQUNELGVBQWUsRUFBRTt3QkFDZix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx1QkFBdUI7cUJBQ3hCO2lCQUNGOzs7O2dCQWxCa0IsUUFBUTs7SUFrQzNCLDJCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0FmWSxvQkFBb0I7Ozs7OztJQUVuQix3Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBjcmVhdGVDdXN0b21FbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvZWxlbWVudHMnO1xuaW1wb3J0IHsgU3VrdUZvcm1Gb290ZXJDb21wb25lbnQgfSBmcm9tICcuL3N1a3UtZm9ybS1mb290ZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTdWt1Rm9ybUZvb3RlckNvbXBvbmVudFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBTdWt1Rm9ybUZvb3RlckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU3VrdUZvcm1Gb290ZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Rm9ybUZvb3Rlck1vZHVsZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgfVxuXG4gIG5nRG9Cb290c3RyYXAoKSB7XG4gICAgY29uc3QgZWxlbWVudHM6IGFueVtdID0gW1xuICAgICAgW1N1a3VGb3JtRm9vdGVyQ29tcG9uZW50LCAnc3VrdS1mb3JtLWZvb3RlciddXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IFtjb21wb25lbnQsIG5hbWVdIG9mIGVsZW1lbnRzKSB7XG4gICAgICBjb25zdCBlbCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoY29tcG9uZW50LCB7IGluamVjdG9yOiB0aGlzLmluamVjdG9yIH0pO1xuICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKG5hbWUsIGVsKTtcbiAgICB9XG4gIH1cblxufVxuIl19