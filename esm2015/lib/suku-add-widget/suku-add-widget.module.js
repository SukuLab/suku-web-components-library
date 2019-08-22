/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtd2lkZ2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWFkZC13aWRnZXQvc3VrdS1hZGQtd2lkZ2V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBVXJFLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFDbEMsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN0QyxDQUFDOzs7O0lBRUQsWUFBWTs7Y0FDSixRQUFRLEdBQVU7WUFDdEIsQ0FBQyxzQkFBc0IsRUFBRSxpQkFBaUIsQ0FBQztTQUM1QztRQUNELEtBQUssTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxRQUFRLEVBQUU7O2tCQUNsQyxFQUFFLEdBQUcsbUJBQW1CLENBQUMsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0RSxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNqQztJQUNGLENBQUM7OztZQXBCSCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ3RDLGVBQWUsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUN6QyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQzs7OztZQVprQixRQUFROzs7Ozs7O0lBY2IsMkNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XHJcbmltcG9ydCB7IFN1a3VBZGRXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL3N1a3UtYWRkLXdpZGdldC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1N1a3VBZGRXaWRnZXRDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1N1a3VBZGRXaWRnZXRDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTdWt1QWRkV2lkZ2V0Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUFkZEljb25XaWRnZXRNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgfVxyXG5cclxuICBuZ0RvQm9vc3RyYXAoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50czogYW55W10gPSBbXHJcbiAgICAgIFtTdWt1QWRkV2lkZ2V0Q29tcG9uZW50LCAnc3VrdS1hZGQtd2lkZ2V0J11cclxuICAgIF07XHJcbiAgICBmb3IgKGNvbnN0IFtjb21wb25lbnQsIG5hbWVdIG9mIGVsZW1lbnRzKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gY3JlYXRlQ3VzdG9tRWxlbWVudChjb21wb25lbnQsIHsgaW5qZWN0b3I6IHRoaXMuaW5qZWN0b3IgfSk7XHJcbiAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZShuYW1lLCBlbCk7XHJcbiAgICB9XHJcbiAgIH1cclxufVxyXG4iXX0=