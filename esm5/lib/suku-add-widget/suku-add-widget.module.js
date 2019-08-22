/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SukuAddWidgetComponent } from './suku-add-widget.component';
var SukuAddIconWidgetModule = /** @class */ (function () {
    function SukuAddIconWidgetModule(injector) {
        this.injector = injector;
    }
    /**
     * @return {?}
     */
    SukuAddIconWidgetModule.prototype.ngDoBoostrap = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var elements = [
            [SukuAddWidgetComponent, 'suku-add-widget']
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
    SukuAddIconWidgetModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [SukuAddWidgetComponent],
                    entryComponents: [SukuAddWidgetComponent],
                    exports: [SukuAddWidgetComponent]
                },] }
    ];
    /** @nocollapse */
    SukuAddIconWidgetModule.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return SukuAddIconWidgetModule;
}());
export { SukuAddIconWidgetModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SukuAddIconWidgetModule.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtd2lkZ2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWFkZC13aWRnZXQvc3VrdS1hZGQtd2lkZ2V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVyRTtJQVNFLGlDQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7Ozs7SUFFRCw4Q0FBWTs7O0lBQVo7OztZQUNRLFFBQVEsR0FBVTtZQUN0QixDQUFDLHNCQUFzQixFQUFFLGlCQUFpQixDQUFDO1NBQzVDOztZQUNELEtBQWdDLElBQUEsYUFBQSxpQkFBQSxRQUFRLENBQUEsa0NBQUEsd0RBQUU7Z0JBQS9CLElBQUEsMENBQWlCLEVBQWhCLGlCQUFTLEVBQUUsY0FBSTs7b0JBQ25CLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0RSxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQUksRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNqQzs7Ozs7Ozs7O0lBQ0YsQ0FBQzs7Z0JBcEJILFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDdEMsZUFBZSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3pDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUNsQzs7OztnQkFaa0IsUUFBUTs7SUEwQjNCLDhCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FiWSx1QkFBdUI7Ozs7OztJQUN0QiwyQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgU3VrdUFkZFdpZGdldENvbXBvbmVudCB9IGZyb20gJy4vc3VrdS1hZGQtd2lkZ2V0LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbU3VrdUFkZFdpZGdldENvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbU3VrdUFkZFdpZGdldENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1N1a3VBZGRXaWRnZXRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1QWRkSWNvbldpZGdldE1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICB9XHJcblxyXG4gIG5nRG9Cb29zdHJhcCgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnRzOiBhbnlbXSA9IFtcclxuICAgICAgW1N1a3VBZGRXaWRnZXRDb21wb25lbnQsICdzdWt1LWFkZC13aWRnZXQnXVxyXG4gICAgXTtcclxuICAgIGZvciAoY29uc3QgW2NvbXBvbmVudCwgbmFtZV0gb2YgZWxlbWVudHMpIHtcclxuICAgICAgY29uc3QgZWwgPSBjcmVhdGVDdXN0b21FbGVtZW50KGNvbXBvbmVudCwgeyBpbmplY3RvcjogdGhpcy5pbmplY3RvciB9KTtcclxuICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKG5hbWUsIGVsKTtcclxuICAgIH1cclxuICAgfVxyXG59XHJcbiJdfQ==