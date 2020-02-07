/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-add-widget/suku-add-widget.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SukuAddWidgetComponent } from './suku-add-widget.component';
export class SukuAddIconWidgetModule {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
    /**
     * @return {?}
     */
    ngDoBoostrap() {
        /** @type {?} */
        const elements = [
            [SukuAddWidgetComponent, 'suku-add-widget']
        ];
        for (const [component, name] of elements) {
            /** @type {?} */
            const el = createCustomElement(component, { injector: this.injector });
            customElements.define(name, el);
        }
    }
}
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
SukuAddIconWidgetModule.ctorParameters = () => [
    { type: Injector }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SukuAddIconWidgetModule.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtd2lkZ2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWFkZC13aWRnZXQvc3VrdS1hZGQtd2lkZ2V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQVVyRSxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBQ2xDLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDdEMsQ0FBQzs7OztJQUVELFlBQVk7O2NBQ0osUUFBUSxHQUFVO1lBQ3RCLENBQUMsc0JBQXNCLEVBQUUsaUJBQWlCLENBQUM7U0FDNUM7UUFDRCxLQUFLLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksUUFBUSxFQUFFOztrQkFDbEMsRUFBRSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDakM7SUFDRixDQUFDOzs7WUFwQkgsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUN0QyxlQUFlLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDekMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEM7Ozs7WUFaa0IsUUFBUTs7Ozs7OztJQWNiLDJDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XG5pbXBvcnQgeyBTdWt1QWRkV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi9zdWt1LWFkZC13aWRnZXQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTdWt1QWRkV2lkZ2V0Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbU3VrdUFkZFdpZGdldENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTdWt1QWRkV2lkZ2V0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1QWRkSWNvbldpZGdldE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIH1cblxuICBuZ0RvQm9vc3RyYXAoKSB7XG4gICAgY29uc3QgZWxlbWVudHM6IGFueVtdID0gW1xuICAgICAgW1N1a3VBZGRXaWRnZXRDb21wb25lbnQsICdzdWt1LWFkZC13aWRnZXQnXVxuICAgIF07XG4gICAgZm9yIChjb25zdCBbY29tcG9uZW50LCBuYW1lXSBvZiBlbGVtZW50cykge1xuICAgICAgY29uc3QgZWwgPSBjcmVhdGVDdXN0b21FbGVtZW50KGNvbXBvbmVudCwgeyBpbmplY3RvcjogdGhpcy5pbmplY3RvciB9KTtcbiAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZShuYW1lLCBlbCk7XG4gICAgfVxuICAgfVxufVxuIl19