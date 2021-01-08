/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-bid-tag/suku-bid-tag.module.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtdGFnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJpZC10YWcvc3VrdS1iaWQtdGFnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFL0Q7SUFTRSwwQkFBb0IsUUFBa0I7O1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7O1lBQzlCLFFBQVEsR0FBVTtZQUN0QixDQUFDLG1CQUFtQixFQUFFLGNBQWMsQ0FBQztTQUN0Qzs7WUFDRCxLQUFnQyxJQUFBLGFBQUEsaUJBQUEsUUFBUSxDQUFBLGtDQUFBLHdEQUFFO2dCQUEvQixJQUFBLDBDQUFpQixFQUFoQixpQkFBUyxFQUFFLGNBQUk7O29CQUNuQixFQUFFLEdBQUcsbUJBQW1CLENBQUMsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxNQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDakM7Ozs7Ozs7OztJQUNILENBQUM7Ozs7SUFDRCx1Q0FBWTs7O0lBQVosY0FBaUIsQ0FBQzs7Z0JBbEJuQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLGVBQWUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUN0QyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDL0I7Ozs7Z0JBWmtCLFFBQVE7O0lBd0IzQix1QkFBQztDQUFBLEFBbkJELElBbUJDO1NBWFksZ0JBQWdCOzs7Ozs7SUFDZixvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBjcmVhdGVDdXN0b21FbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvZWxlbWVudHMnO1xuaW1wb3J0IHsgU3VrdUJpZFRhZ0NvbXBvbmVudCB9IGZyb20gJy4vc3VrdS1iaWQtdGFnLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU3VrdUJpZFRhZ0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1N1a3VCaWRUYWdDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU3VrdUJpZFRhZ0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUJpZFRhZ01vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgY29uc3QgZWxlbWVudHM6IGFueVtdID0gW1xuICAgICAgW1N1a3VCaWRUYWdDb21wb25lbnQsICdzdWt1LWJpZC10YWcnXVxuICAgIF07XG4gICAgZm9yIChjb25zdCBbY29tcG9uZW50LCBuYW1lXSBvZiBlbGVtZW50cykge1xuICAgICAgY29uc3QgZWwgPSBjcmVhdGVDdXN0b21FbGVtZW50KGNvbXBvbmVudCwgeyBpbmplY3RvcjogdGhpcy5pbmplY3RvciB9KTtcbiAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZShuYW1lLCBlbCk7XG4gICAgfVxuICB9XG4gIG5nRG9Cb29zdHJhcCgpIHsgfVxufVxuIl19