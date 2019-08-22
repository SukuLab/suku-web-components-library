/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SukuFormFooterComponent } from './suku-form-footer.component';
export class SukuFormFooterModule {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
    /**
     * @return {?}
     */
    ngDoBootstrap() {
        /** @type {?} */
        const elements = [
            [SukuFormFooterComponent, 'suku-form-footer']
        ];
        for (const [component, name] of elements) {
            /** @type {?} */
            const el = createCustomElement(component, { injector: this.injector });
            customElements.define(name, el);
        }
    }
}
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
SukuFormFooterModule.ctorParameters = () => [
    { type: Injector }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SukuFormFooterModule.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mb3JtLWZvb3Rlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1mb3JtLWZvb3Rlci9zdWt1LWZvcm0tZm9vdGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBZ0J2RSxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRS9CLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDdEMsQ0FBQzs7OztJQUVELGFBQWE7O2NBQ0wsUUFBUSxHQUFVO1lBQ3RCLENBQUMsdUJBQXVCLEVBQUUsa0JBQWtCLENBQUM7U0FDOUM7UUFDRCxLQUFLLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksUUFBUSxFQUFFOztrQkFDbEMsRUFBRSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7WUEzQkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWix1QkFBdUI7aUJBQ3hCO2dCQUNELGVBQWUsRUFBRTtvQkFDZix1QkFBdUI7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx1QkFBdUI7aUJBQ3hCO2FBQ0Y7Ozs7WUFsQmtCLFFBQVE7Ozs7Ozs7SUFxQmIsd0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XHJcbmltcG9ydCB7IFN1a3VGb3JtRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdWt1LWZvcm0tZm9vdGVyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTdWt1Rm9ybUZvb3RlckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBTdWt1Rm9ybUZvb3RlckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgU3VrdUZvcm1Gb290ZXJDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1Rm9ybUZvb3Rlck1vZHVsZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgfVxyXG5cclxuICBuZ0RvQm9vdHN0cmFwKCkge1xyXG4gICAgY29uc3QgZWxlbWVudHM6IGFueVtdID0gW1xyXG4gICAgICBbU3VrdUZvcm1Gb290ZXJDb21wb25lbnQsICdzdWt1LWZvcm0tZm9vdGVyJ11cclxuICAgIF07XHJcbiAgICBmb3IgKGNvbnN0IFtjb21wb25lbnQsIG5hbWVdIG9mIGVsZW1lbnRzKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gY3JlYXRlQ3VzdG9tRWxlbWVudChjb21wb25lbnQsIHsgaW5qZWN0b3I6IHRoaXMuaW5qZWN0b3IgfSk7XHJcbiAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZShuYW1lLCBlbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=