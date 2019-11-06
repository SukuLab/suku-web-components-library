/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtdGFnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJpZC10YWcvc3VrdS1iaWQtdGFnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBVS9ELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFDM0IsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTs7Y0FDOUIsUUFBUSxHQUFVO1lBQ3RCLENBQUMsbUJBQW1CLEVBQUUsY0FBYyxDQUFDO1NBQ3RDO1FBQ0QsS0FBSyxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLFFBQVEsRUFBRTs7a0JBQ2xDLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RFLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7OztJQUNELFlBQVksS0FBSyxDQUFDOzs7WUFsQm5CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDbkMsZUFBZSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQy9COzs7O1lBWmtCLFFBQVE7Ozs7Ozs7SUFjYixvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgU3VrdUJpZFRhZ0NvbXBvbmVudCB9IGZyb20gJy4vc3VrdS1iaWQtdGFnLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbU3VrdUJpZFRhZ0NvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbU3VrdUJpZFRhZ0NvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1N1a3VCaWRUYWdDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1QmlkVGFnTW9kdWxlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgY29uc3QgZWxlbWVudHM6IGFueVtdID0gW1xyXG4gICAgICBbU3VrdUJpZFRhZ0NvbXBvbmVudCwgJ3N1a3UtYmlkLXRhZyddXHJcbiAgICBdO1xyXG4gICAgZm9yIChjb25zdCBbY29tcG9uZW50LCBuYW1lXSBvZiBlbGVtZW50cykge1xyXG4gICAgICBjb25zdCBlbCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoY29tcG9uZW50LCB7IGluamVjdG9yOiB0aGlzLmluamVjdG9yIH0pO1xyXG4gICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUobmFtZSwgZWwpO1xyXG4gICAgfVxyXG4gIH1cclxuICBuZ0RvQm9vc3RyYXAoKSB7IH1cclxufVxyXG4iXX0=