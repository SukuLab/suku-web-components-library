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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtd2lkZ2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWFkZC13aWRnZXQvc3VrdS1hZGQtd2lkZ2V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVyRTtJQVNFLGlDQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7Ozs7SUFFRCw4Q0FBWTs7O0lBQVo7OztZQUNRLFFBQVEsR0FBVTtZQUN0QixDQUFDLHNCQUFzQixFQUFFLGlCQUFpQixDQUFDO1NBQzVDOztZQUNELEtBQWdDLElBQUEsYUFBQSxpQkFBQSxRQUFRLENBQUEsa0NBQUEsd0RBQUU7Z0JBQS9CLElBQUEsMENBQWlCLEVBQWhCLGlCQUFTLEVBQUUsY0FBSTs7b0JBQ25CLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0RSxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQUksRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNqQzs7Ozs7Ozs7O0lBQ0YsQ0FBQzs7Z0JBcEJILFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDdEMsZUFBZSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3pDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUNsQzs7OztnQkFaa0IsUUFBUTs7SUEwQjNCLDhCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FiWSx1QkFBdUI7Ozs7OztJQUN0QiwyQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBjcmVhdGVDdXN0b21FbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvZWxlbWVudHMnO1xuaW1wb3J0IHsgU3VrdUFkZFdpZGdldENvbXBvbmVudCB9IGZyb20gJy4vc3VrdS1hZGQtd2lkZ2V0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU3VrdUFkZFdpZGdldENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1N1a3VBZGRXaWRnZXRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU3VrdUFkZFdpZGdldENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUFkZEljb25XaWRnZXRNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICB9XG5cbiAgbmdEb0Jvb3N0cmFwKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzOiBhbnlbXSA9IFtcbiAgICAgIFtTdWt1QWRkV2lkZ2V0Q29tcG9uZW50LCAnc3VrdS1hZGQtd2lkZ2V0J11cbiAgICBdO1xuICAgIGZvciAoY29uc3QgW2NvbXBvbmVudCwgbmFtZV0gb2YgZWxlbWVudHMpIHtcbiAgICAgIGNvbnN0IGVsID0gY3JlYXRlQ3VzdG9tRWxlbWVudChjb21wb25lbnQsIHsgaW5qZWN0b3I6IHRoaXMuaW5qZWN0b3IgfSk7XG4gICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUobmFtZSwgZWwpO1xuICAgIH1cbiAgIH1cbn1cbiJdfQ==