/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SukuBidTagComponent } from './suku-bid-tag.component';
var SukuBidTagModule = /** @class */ (function () {
    function SukuBidTagModule(injector) {
        var e_1, _a;
        this.injector = injector;
        /** @type {?} */
        var elements = [
            [SukuBidTagComponent, 'suku-bid-tag']
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
    }
    /**
     * @return {?}
     */
    SukuBidTagModule.prototype.ngDoBoostrap = /**
     * @return {?}
     */
    function () { };
    SukuBidTagModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [SukuBidTagComponent],
                    entryComponents: [SukuBidTagComponent],
                    exports: [SukuBidTagComponent]
                },] }
    ];
    /** @nocollapse */
    SukuBidTagModule.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return SukuBidTagModule;
}());
export { SukuBidTagModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SukuBidTagModule.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtdGFnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJpZC10YWcvc3VrdS1iaWQtdGFnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUvRDtJQVNFLDBCQUFvQixRQUFrQjs7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTs7WUFDOUIsUUFBUSxHQUFVO1lBQ3RCLENBQUMsbUJBQW1CLEVBQUUsY0FBYyxDQUFDO1NBQ3RDOztZQUNELEtBQWdDLElBQUEsYUFBQSxpQkFBQSxRQUFRLENBQUEsa0NBQUEsd0RBQUU7Z0JBQS9CLElBQUEsMENBQWlCLEVBQWhCLGlCQUFTLEVBQUUsY0FBSTs7b0JBQ25CLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0RSxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQUksRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNqQzs7Ozs7Ozs7O0lBQ0gsQ0FBQzs7OztJQUNELHVDQUFZOzs7SUFBWixjQUFpQixDQUFDOztnQkFsQm5CLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDbkMsZUFBZSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ3RDLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUMvQjs7OztnQkFaa0IsUUFBUTs7SUF3QjNCLHVCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FYWSxnQkFBZ0I7Ozs7OztJQUNmLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XG5pbXBvcnQgeyBTdWt1QmlkVGFnQ29tcG9uZW50IH0gZnJvbSAnLi9zdWt1LWJpZC10YWcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTdWt1QmlkVGFnQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbU3VrdUJpZFRhZ0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTdWt1QmlkVGFnQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1QmlkVGFnTW9kdWxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBjb25zdCBlbGVtZW50czogYW55W10gPSBbXG4gICAgICBbU3VrdUJpZFRhZ0NvbXBvbmVudCwgJ3N1a3UtYmlkLXRhZyddXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IFtjb21wb25lbnQsIG5hbWVdIG9mIGVsZW1lbnRzKSB7XG4gICAgICBjb25zdCBlbCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoY29tcG9uZW50LCB7IGluamVjdG9yOiB0aGlzLmluamVjdG9yIH0pO1xuICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKG5hbWUsIGVsKTtcbiAgICB9XG4gIH1cbiAgbmdEb0Jvb3N0cmFwKCkgeyB9XG59XG4iXX0=