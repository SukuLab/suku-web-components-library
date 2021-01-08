/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-buttons/suku-button.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1idXR0b24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtYnV0dG9ucy9zdWt1LWJ1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUE0QnBHLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFFNUIsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN0QyxDQUFDOzs7O0lBRUQsYUFBYTs7Y0FDTCxRQUFRLEdBQVU7WUFDdEIsQ0FBQyx1QkFBdUIsRUFBRSxrQkFBa0IsQ0FBQztZQUM3QyxDQUFDLDBCQUEwQixFQUFFLHFCQUFxQixDQUFDO1lBQ25ELENBQUMsNEJBQTRCLEVBQUUsdUJBQXVCLENBQUM7WUFDdkQsQ0FBQywwQkFBMEIsRUFBRSxxQkFBcUIsQ0FBQztZQUNuRCxDQUFDLDJCQUEyQixFQUFFLHNCQUFzQixDQUFDO1NBQ3REO1FBQ0QsS0FBSyxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLFFBQVEsRUFBRTs7a0JBQ2xDLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RFLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7O1lBM0NGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osdUJBQXVCO29CQUN2QiwwQkFBMEI7b0JBQzFCLDRCQUE0QjtvQkFDNUIsMEJBQTBCO29CQUMxQiwyQkFBMkI7aUJBQzVCO2dCQUNELGVBQWUsRUFBRTtvQkFDZix1QkFBdUI7b0JBQ3ZCLDBCQUEwQjtvQkFDMUIsNEJBQTRCO29CQUM1QiwwQkFBMEI7b0JBQzFCLDJCQUEyQjtpQkFDNUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHVCQUF1QjtvQkFDdkIsMEJBQTBCO29CQUMxQiw0QkFBNEI7b0JBQzVCLDBCQUEwQjtvQkFDMUIsMkJBQTJCO2lCQUM1QjthQUNGOzs7O1lBbENrQixRQUFROzs7Ozs7O0lBcUNiLHFDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XG5pbXBvcnQgeyBTdWt1SW5mb0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc3VrdS1pbmZvLWJ1dHRvbi9zdWt1LWluZm8tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWt1UHJpbWFyeUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc3VrdS1wcmltYXJ5LWJ1dHRvbi9zdWt1LXByaW1hcnktYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWt1U2Vjb25kYXJ5QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9zdWt1LXNlY29uZGFyeS1idXR0b24vc3VrdS1zZWNvbmRhcnktYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWt1RGVmYXVsdEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc3VrdS1kZWZhdWx0LWJ1dHRvbi9zdWt1LWRlZmF1bHQtYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWt1SG9tZXBhZ2VCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3N1a3UtaG9tZXBhZ2UtYnV0dG9uL3N1a3UtaG9tZXBhZ2UtYnV0dG9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU3VrdUluZm9CdXR0b25Db21wb25lbnQsXG4gICAgU3VrdVByaW1hcnlCdXR0b25Db21wb25lbnQsXG4gICAgU3VrdVNlY29uZGFyeUJ1dHRvbkNvbXBvbmVudCxcbiAgICBTdWt1RGVmYXVsdEJ1dHRvbkNvbXBvbmVudCxcbiAgICBTdWt1SG9tZXBhZ2VCdXR0b25Db21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgU3VrdUluZm9CdXR0b25Db21wb25lbnQsXG4gICAgU3VrdVByaW1hcnlCdXR0b25Db21wb25lbnQsXG4gICAgU3VrdVNlY29uZGFyeUJ1dHRvbkNvbXBvbmVudCxcbiAgICBTdWt1RGVmYXVsdEJ1dHRvbkNvbXBvbmVudCxcbiAgICBTdWt1SG9tZXBhZ2VCdXR0b25Db21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFN1a3VJbmZvQnV0dG9uQ29tcG9uZW50LFxuICAgIFN1a3VQcmltYXJ5QnV0dG9uQ29tcG9uZW50LFxuICAgIFN1a3VTZWNvbmRhcnlCdXR0b25Db21wb25lbnQsXG4gICAgU3VrdURlZmF1bHRCdXR0b25Db21wb25lbnQsXG4gICAgU3VrdUhvbWVwYWdlQnV0dG9uQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUJ1dHRvbnNNb2R1bGUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIH1cblxuICBuZ0RvQm9vdHN0cmFwKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzOiBhbnlbXSA9IFtcbiAgICAgIFtTdWt1SW5mb0J1dHRvbkNvbXBvbmVudCwgJ3N1a3UtaW5mby1idXR0b24nXSxcbiAgICAgIFtTdWt1UHJpbWFyeUJ1dHRvbkNvbXBvbmVudCwgJ3N1a3UtcHJpbWFyeS1idXR0b24nXSxcbiAgICAgIFtTdWt1U2Vjb25kYXJ5QnV0dG9uQ29tcG9uZW50LCAnc3VrdS1zZWNvbmRhcnktYnV0dG9uJ10sXG4gICAgICBbU3VrdURlZmF1bHRCdXR0b25Db21wb25lbnQsICdzdWt1LWRlZmF1bHQtYnV0dG9uJ10sXG4gICAgICBbU3VrdUhvbWVwYWdlQnV0dG9uQ29tcG9uZW50LCAnc3VrdS1ob21lcGFnZS1idXR0b24nXVxuICAgIF07XG4gICAgZm9yIChjb25zdCBbY29tcG9uZW50LCBuYW1lXSBvZiBlbGVtZW50cykge1xuICAgICAgY29uc3QgZWwgPSBjcmVhdGVDdXN0b21FbGVtZW50KGNvbXBvbmVudCwgeyBpbmplY3RvcjogdGhpcy5pbmplY3RvciB9KTtcbiAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZShuYW1lLCBlbCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==