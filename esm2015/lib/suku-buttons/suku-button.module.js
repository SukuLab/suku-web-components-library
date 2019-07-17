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
import { SukuHomepageButtonComponent } from './suku-homepage-button/suku-homepage-button.component';
export class SukuButtonsModule {
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
            [SukuInfoButtonComponent, 'suku-info-button'],
            [SukuPrimaryButtonComponent, 'suku-primary-button'],
            [SukuSecondaryButtonComponent, 'suku-secondary-button'],
            [SukuDefaultButtonComponent, 'suku-default-button'],
            [SukuHomepageButtonComponent, 'suku-homepage-button']
        ];
        for (const [component, name] of elements) {
            /** @type {?} */
            const el = createCustomElement(component, { injector: this.injector });
            customElements.define(name, el);
        }
    }
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
                    SukuDefaultButtonComponent,
                    SukuHomepageButtonComponent
                ],
                entryComponents: [
                    SukuInfoButtonComponent,
                    SukuPrimaryButtonComponent,
                    SukuSecondaryButtonComponent,
                    SukuDefaultButtonComponent,
                    SukuHomepageButtonComponent
                ],
                exports: [
                    SukuInfoButtonComponent,
                    SukuPrimaryButtonComponent,
                    SukuSecondaryButtonComponent,
                    SukuDefaultButtonComponent,
                    SukuHomepageButtonComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1idXR0b24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtYnV0dG9ucy9zdWt1LWJ1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQTRCcEcsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUU1QixZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7Ozs7SUFFRCxhQUFhOztjQUNMLFFBQVEsR0FBVTtZQUN0QixDQUFDLHVCQUF1QixFQUFFLGtCQUFrQixDQUFDO1lBQzdDLENBQUMsMEJBQTBCLEVBQUUscUJBQXFCLENBQUM7WUFDbkQsQ0FBQyw0QkFBNEIsRUFBRSx1QkFBdUIsQ0FBQztZQUN2RCxDQUFDLDBCQUEwQixFQUFFLHFCQUFxQixDQUFDO1lBQ25ELENBQUMsMkJBQTJCLEVBQUUsc0JBQXNCLENBQUM7U0FDdEQ7UUFDRCxLQUFLLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksUUFBUSxFQUFFOztrQkFDbEMsRUFBRSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7WUEzQ0YsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWix1QkFBdUI7b0JBQ3ZCLDBCQUEwQjtvQkFDMUIsNEJBQTRCO29CQUM1QiwwQkFBMEI7b0JBQzFCLDJCQUEyQjtpQkFDNUI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLHVCQUF1QjtvQkFDdkIsMEJBQTBCO29CQUMxQiw0QkFBNEI7b0JBQzVCLDBCQUEwQjtvQkFDMUIsMkJBQTJCO2lCQUM1QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsdUJBQXVCO29CQUN2QiwwQkFBMEI7b0JBQzFCLDRCQUE0QjtvQkFDNUIsMEJBQTBCO29CQUMxQiwyQkFBMkI7aUJBQzVCO2FBQ0Y7Ozs7WUFsQ2tCLFFBQVE7Ozs7Ozs7SUFxQ2IscUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJztcbmltcG9ydCB7IFN1a3VJbmZvQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9zdWt1LWluZm8tYnV0dG9uL3N1a3UtaW5mby1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IFN1a3VQcmltYXJ5QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9zdWt1LXByaW1hcnktYnV0dG9uL3N1a3UtcHJpbWFyeS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IFN1a3VTZWNvbmRhcnlCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3N1a3Utc2Vjb25kYXJ5LWJ1dHRvbi9zdWt1LXNlY29uZGFyeS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IFN1a3VEZWZhdWx0QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9zdWt1LWRlZmF1bHQtYnV0dG9uL3N1a3UtZGVmYXVsdC1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IFN1a3VIb21lcGFnZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc3VrdS1ob21lcGFnZS1idXR0b24vc3VrdS1ob21lcGFnZS1idXR0b24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTdWt1SW5mb0J1dHRvbkNvbXBvbmVudCxcbiAgICBTdWt1UHJpbWFyeUJ1dHRvbkNvbXBvbmVudCxcbiAgICBTdWt1U2Vjb25kYXJ5QnV0dG9uQ29tcG9uZW50LFxuICAgIFN1a3VEZWZhdWx0QnV0dG9uQ29tcG9uZW50LFxuICAgIFN1a3VIb21lcGFnZUJ1dHRvbkNvbXBvbmVudFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBTdWt1SW5mb0J1dHRvbkNvbXBvbmVudCxcbiAgICBTdWt1UHJpbWFyeUJ1dHRvbkNvbXBvbmVudCxcbiAgICBTdWt1U2Vjb25kYXJ5QnV0dG9uQ29tcG9uZW50LFxuICAgIFN1a3VEZWZhdWx0QnV0dG9uQ29tcG9uZW50LFxuICAgIFN1a3VIb21lcGFnZUJ1dHRvbkNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU3VrdUluZm9CdXR0b25Db21wb25lbnQsXG4gICAgU3VrdVByaW1hcnlCdXR0b25Db21wb25lbnQsXG4gICAgU3VrdVNlY29uZGFyeUJ1dHRvbkNvbXBvbmVudCxcbiAgICBTdWt1RGVmYXVsdEJ1dHRvbkNvbXBvbmVudCxcbiAgICBTdWt1SG9tZXBhZ2VCdXR0b25Db21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1QnV0dG9uc01vZHVsZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgfVxuXG4gIG5nRG9Cb290c3RyYXAoKSB7XG4gICAgY29uc3QgZWxlbWVudHM6IGFueVtdID0gW1xuICAgICAgW1N1a3VJbmZvQnV0dG9uQ29tcG9uZW50LCAnc3VrdS1pbmZvLWJ1dHRvbiddLFxuICAgICAgW1N1a3VQcmltYXJ5QnV0dG9uQ29tcG9uZW50LCAnc3VrdS1wcmltYXJ5LWJ1dHRvbiddLFxuICAgICAgW1N1a3VTZWNvbmRhcnlCdXR0b25Db21wb25lbnQsICdzdWt1LXNlY29uZGFyeS1idXR0b24nXSxcbiAgICAgIFtTdWt1RGVmYXVsdEJ1dHRvbkNvbXBvbmVudCwgJ3N1a3UtZGVmYXVsdC1idXR0b24nXSxcbiAgICAgIFtTdWt1SG9tZXBhZ2VCdXR0b25Db21wb25lbnQsICdzdWt1LWhvbWVwYWdlLWJ1dHRvbiddXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IFtjb21wb25lbnQsIG5hbWVdIG9mIGVsZW1lbnRzKSB7XG4gICAgICBjb25zdCBlbCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoY29tcG9uZW50LCB7IGluamVjdG9yOiB0aGlzLmluamVjdG9yIH0pO1xuICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKG5hbWUsIGVsKTtcbiAgICB9XG4gIH1cblxufVxuIl19