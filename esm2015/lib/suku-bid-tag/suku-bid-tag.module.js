/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-bid-tag/suku-bid-tag.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SukuBidTagComponent } from './suku-bid-tag.component';
export class SukuBidTagModule {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        /** @type {?} */
        const elements = [
            [SukuBidTagComponent, 'suku-bid-tag']
        ];
        for (const [component, name] of elements) {
            /** @type {?} */
            const el = createCustomElement(component, { injector: this.injector });
            customElements.define(name, el);
        }
    }
    /**
     * @return {?}
     */
    ngDoBoostrap() { }
}
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
SukuBidTagModule.ctorParameters = () => [
    { type: Injector }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SukuBidTagModule.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtdGFnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJpZC10YWcvc3VrdS1iaWQtdGFnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVUvRCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBQzNCLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7O2NBQzlCLFFBQVEsR0FBVTtZQUN0QixDQUFDLG1CQUFtQixFQUFFLGNBQWMsQ0FBQztTQUN0QztRQUNELEtBQUssTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxRQUFRLEVBQUU7O2tCQUNsQyxFQUFFLEdBQUcsbUJBQW1CLENBQUMsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0RSxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7SUFDRCxZQUFZLEtBQUssQ0FBQzs7O1lBbEJuQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLGVBQWUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUMvQjs7OztZQVprQixRQUFROzs7Ozs7O0lBY2Isb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJztcbmltcG9ydCB7IFN1a3VCaWRUYWdDb21wb25lbnQgfSBmcm9tICcuL3N1a3UtYmlkLXRhZy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1N1a3VCaWRUYWdDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtTdWt1QmlkVGFnQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1N1a3VCaWRUYWdDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VCaWRUYWdNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGNvbnN0IGVsZW1lbnRzOiBhbnlbXSA9IFtcbiAgICAgIFtTdWt1QmlkVGFnQ29tcG9uZW50LCAnc3VrdS1iaWQtdGFnJ11cbiAgICBdO1xuICAgIGZvciAoY29uc3QgW2NvbXBvbmVudCwgbmFtZV0gb2YgZWxlbWVudHMpIHtcbiAgICAgIGNvbnN0IGVsID0gY3JlYXRlQ3VzdG9tRWxlbWVudChjb21wb25lbnQsIHsgaW5qZWN0b3I6IHRoaXMuaW5qZWN0b3IgfSk7XG4gICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUobmFtZSwgZWwpO1xuICAgIH1cbiAgfVxuICBuZ0RvQm9vc3RyYXAoKSB7IH1cbn1cbiJdfQ==