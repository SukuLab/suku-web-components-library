/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SukuInfoButtonComponent } from './suku-info-button/suku-info-button.component';
import { SukuPrimaryButtonComponent } from './suku-primary-button/suku-primary-button.component';
import { SukuSecondaryButtonComponent } from './suku-secondary-button/suku-secondary-button.component';
import { SukuDefaultButtonComponent } from './suku-default-button/suku-default-button.component';
export class SukuButtonsModule {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        /** @type {?} */
        const customElement = createCustomElement(SukuPrimaryButtonComponent, { injector });
        customElements.define('suku-primary-button', customElement);
    }
    /**
     * @return {?}
     */
    ngDoBootstrap() { }
}
SukuButtonsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SukuInfoButtonComponent,
                    SukuPrimaryButtonComponent,
                    SukuSecondaryButtonComponent,
                    SukuDefaultButtonComponent
                ],
                entryComponents: [
                    SukuInfoButtonComponent,
                    SukuPrimaryButtonComponent,
                    SukuSecondaryButtonComponent,
                    SukuDefaultButtonComponent
                ]
            },] }
];
/** @nocollapse */
SukuButtonsModule.ctorParameters = () => [
    { type: Injector }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SukuButtonsModule.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1idXR0b24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtYnV0dG9ucy9zdWt1LWJ1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQW1CakcsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUU1QixZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVOztjQUM5QixhQUFhLEdBQUcsbUJBQW1CLENBQUMsMEJBQTBCLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUNuRixjQUFjLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7SUFFRCxhQUFhLEtBQUssQ0FBQzs7O1lBeEJwQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLHVCQUF1QjtvQkFDdkIsMEJBQTBCO29CQUMxQiw0QkFBNEI7b0JBQzVCLDBCQUEwQjtpQkFDM0I7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLHVCQUF1QjtvQkFDdkIsMEJBQTBCO29CQUMxQiw0QkFBNEI7b0JBQzVCLDBCQUEwQjtpQkFDM0I7YUFDRjs7OztZQXhCa0IsUUFBUTs7Ozs7OztJQTJCYixxQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBjcmVhdGVDdXN0b21FbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvZWxlbWVudHMnO1xuaW1wb3J0IHsgU3VrdUluZm9CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3N1a3UtaW5mby1idXR0b24vc3VrdS1pbmZvLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VrdVByaW1hcnlCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3N1a3UtcHJpbWFyeS1idXR0b24vc3VrdS1wcmltYXJ5LWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VrdVNlY29uZGFyeUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc3VrdS1zZWNvbmRhcnktYnV0dG9uL3N1a3Utc2Vjb25kYXJ5LWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VrdURlZmF1bHRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3N1a3UtZGVmYXVsdC1idXR0b24vc3VrdS1kZWZhdWx0LWJ1dHRvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFN1a3VJbmZvQnV0dG9uQ29tcG9uZW50LFxuICAgIFN1a3VQcmltYXJ5QnV0dG9uQ29tcG9uZW50LFxuICAgIFN1a3VTZWNvbmRhcnlCdXR0b25Db21wb25lbnQsXG4gICAgU3VrdURlZmF1bHRCdXR0b25Db21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgU3VrdUluZm9CdXR0b25Db21wb25lbnQsXG4gICAgU3VrdVByaW1hcnlCdXR0b25Db21wb25lbnQsXG4gICAgU3VrdVNlY29uZGFyeUJ1dHRvbkNvbXBvbmVudCxcbiAgICBTdWt1RGVmYXVsdEJ1dHRvbkNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VCdXR0b25zTW9kdWxlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGNvbnN0IGN1c3RvbUVsZW1lbnQgPSBjcmVhdGVDdXN0b21FbGVtZW50KFN1a3VQcmltYXJ5QnV0dG9uQ29tcG9uZW50LCB7IGluamVjdG9yIH0pO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc3VrdS1wcmltYXJ5LWJ1dHRvbicsIGN1c3RvbUVsZW1lbnQpO1xuICB9XG5cbiAgbmdEb0Jvb3RzdHJhcCgpIHsgfVxuICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAvLyAgIGNvbnN0IGVsZW1lbnRzOiBhbnlbXSA9IFtcbiAgLy8gICAgIFtTdWt1SW5mb0J1dHRvbkNvbXBvbmVudCwgJ3N1a3UtaW5mby1idXR0b24nXSxcbiAgLy8gICAgIFtTdWt1UHJpbWFyeUJ1dHRvbkNvbXBvbmVudCwgJ3N1a3UtcHJpbWFyeS1idXR0b24nXSxcbiAgLy8gICAgIFtTdWt1U2Vjb25kYXJ5QnV0dG9uQ29tcG9uZW50LCAnc3VrdS1zZWNvbmRhcnktYnV0dG9uJ10sXG4gIC8vICAgICBbU3VrdURlZmF1bHRCdXR0b25Db21wb25lbnQsICdzdWt1LWRlZmF1bHQtYnV0dG9uJ11cbiAgLy8gICBdO1xuICAvLyAgIGZvciAoY29uc3QgW2NvbXBvbmVudCwgbmFtZV0gb2YgZWxlbWVudHMpIHtcbiAgLy8gICAgIGNvbnN0IGVsID0gY3JlYXRlQ3VzdG9tRWxlbWVudChjb21wb25lbnQsIHsgaW5qZWN0b3I6IHRoaXMuaW5qZWN0b3IgfSk7XG4gIC8vICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUobmFtZSwgZWwpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG59XG4iXX0=