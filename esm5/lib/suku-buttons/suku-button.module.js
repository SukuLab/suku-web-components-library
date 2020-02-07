/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-buttons/suku-button.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { SukuInfoButtonComponent } from './suku-info-button/suku-info-button.component';
import { SukuPrimaryButtonComponent } from './suku-primary-button/suku-primary-button.component';
import { SukuSecondaryButtonComponent } from './suku-secondary-button/suku-secondary-button.component';
import { SukuDefaultButtonComponent } from './suku-default-button/suku-default-button.component';
import { SukuHomepageButtonComponent } from './suku-homepage-button/suku-homepage-button.component';
var SukuButtonsModule = /** @class */ (function () {
    function SukuButtonsModule(injector) {
        this.injector = injector;
    }
    /**
     * @return {?}
     */
    SukuButtonsModule.prototype.ngDoBootstrap = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var elements = [
            [SukuInfoButtonComponent, 'suku-info-button'],
            [SukuPrimaryButtonComponent, 'suku-primary-button'],
            [SukuSecondaryButtonComponent, 'suku-secondary-button'],
            [SukuDefaultButtonComponent, 'suku-default-button'],
            [SukuHomepageButtonComponent, 'suku-homepage-button']
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
    SukuButtonsModule.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return SukuButtonsModule;
}());
export { SukuButtonsModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SukuButtonsModule.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1idXR0b24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtYnV0dG9ucy9zdWt1LWJ1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBRXBHO0lBNEJFLDJCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7Ozs7SUFFRCx5Q0FBYTs7O0lBQWI7OztZQUNRLFFBQVEsR0FBVTtZQUN0QixDQUFDLHVCQUF1QixFQUFFLGtCQUFrQixDQUFDO1lBQzdDLENBQUMsMEJBQTBCLEVBQUUscUJBQXFCLENBQUM7WUFDbkQsQ0FBQyw0QkFBNEIsRUFBRSx1QkFBdUIsQ0FBQztZQUN2RCxDQUFDLDBCQUEwQixFQUFFLHFCQUFxQixDQUFDO1lBQ25ELENBQUMsMkJBQTJCLEVBQUUsc0JBQXNCLENBQUM7U0FDdEQ7O1lBQ0QsS0FBZ0MsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFBRTtnQkFBL0IsSUFBQSwwQ0FBaUIsRUFBaEIsaUJBQVMsRUFBRSxjQUFJOztvQkFDbkIsRUFBRSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RFLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ2pDOzs7Ozs7Ozs7SUFDSCxDQUFDOztnQkEzQ0YsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRTt3QkFDWix1QkFBdUI7d0JBQ3ZCLDBCQUEwQjt3QkFDMUIsNEJBQTRCO3dCQUM1QiwwQkFBMEI7d0JBQzFCLDJCQUEyQjtxQkFDNUI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNmLHVCQUF1Qjt3QkFDdkIsMEJBQTBCO3dCQUMxQiw0QkFBNEI7d0JBQzVCLDBCQUEwQjt3QkFDMUIsMkJBQTJCO3FCQUM1QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsdUJBQXVCO3dCQUN2QiwwQkFBMEI7d0JBQzFCLDRCQUE0Qjt3QkFDNUIsMEJBQTBCO3dCQUMxQiwyQkFBMkI7cUJBQzVCO2lCQUNGOzs7O2dCQWxDa0IsUUFBUTs7SUFzRDNCLHdCQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7U0FuQlksaUJBQWlCOzs7Ozs7SUFFaEIscUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJztcbmltcG9ydCB7IFN1a3VJbmZvQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9zdWt1LWluZm8tYnV0dG9uL3N1a3UtaW5mby1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IFN1a3VQcmltYXJ5QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9zdWt1LXByaW1hcnktYnV0dG9uL3N1a3UtcHJpbWFyeS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IFN1a3VTZWNvbmRhcnlCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3N1a3Utc2Vjb25kYXJ5LWJ1dHRvbi9zdWt1LXNlY29uZGFyeS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IFN1a3VEZWZhdWx0QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9zdWt1LWRlZmF1bHQtYnV0dG9uL3N1a3UtZGVmYXVsdC1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IFN1a3VIb21lcGFnZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc3VrdS1ob21lcGFnZS1idXR0b24vc3VrdS1ob21lcGFnZS1idXR0b24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTdWt1SW5mb0J1dHRvbkNvbXBvbmVudCxcbiAgICBTdWt1UHJpbWFyeUJ1dHRvbkNvbXBvbmVudCxcbiAgICBTdWt1U2Vjb25kYXJ5QnV0dG9uQ29tcG9uZW50LFxuICAgIFN1a3VEZWZhdWx0QnV0dG9uQ29tcG9uZW50LFxuICAgIFN1a3VIb21lcGFnZUJ1dHRvbkNvbXBvbmVudFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBTdWt1SW5mb0J1dHRvbkNvbXBvbmVudCxcbiAgICBTdWt1UHJpbWFyeUJ1dHRvbkNvbXBvbmVudCxcbiAgICBTdWt1U2Vjb25kYXJ5QnV0dG9uQ29tcG9uZW50LFxuICAgIFN1a3VEZWZhdWx0QnV0dG9uQ29tcG9uZW50LFxuICAgIFN1a3VIb21lcGFnZUJ1dHRvbkNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU3VrdUluZm9CdXR0b25Db21wb25lbnQsXG4gICAgU3VrdVByaW1hcnlCdXR0b25Db21wb25lbnQsXG4gICAgU3VrdVNlY29uZGFyeUJ1dHRvbkNvbXBvbmVudCxcbiAgICBTdWt1RGVmYXVsdEJ1dHRvbkNvbXBvbmVudCxcbiAgICBTdWt1SG9tZXBhZ2VCdXR0b25Db21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1QnV0dG9uc01vZHVsZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgfVxuXG4gIG5nRG9Cb290c3RyYXAoKSB7XG4gICAgY29uc3QgZWxlbWVudHM6IGFueVtdID0gW1xuICAgICAgW1N1a3VJbmZvQnV0dG9uQ29tcG9uZW50LCAnc3VrdS1pbmZvLWJ1dHRvbiddLFxuICAgICAgW1N1a3VQcmltYXJ5QnV0dG9uQ29tcG9uZW50LCAnc3VrdS1wcmltYXJ5LWJ1dHRvbiddLFxuICAgICAgW1N1a3VTZWNvbmRhcnlCdXR0b25Db21wb25lbnQsICdzdWt1LXNlY29uZGFyeS1idXR0b24nXSxcbiAgICAgIFtTdWt1RGVmYXVsdEJ1dHRvbkNvbXBvbmVudCwgJ3N1a3UtZGVmYXVsdC1idXR0b24nXSxcbiAgICAgIFtTdWt1SG9tZXBhZ2VCdXR0b25Db21wb25lbnQsICdzdWt1LWhvbWVwYWdlLWJ1dHRvbiddXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IFtjb21wb25lbnQsIG5hbWVdIG9mIGVsZW1lbnRzKSB7XG4gICAgICBjb25zdCBlbCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoY29tcG9uZW50LCB7IGluamVjdG9yOiB0aGlzLmluamVjdG9yIH0pO1xuICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKG5hbWUsIGVsKTtcbiAgICB9XG4gIH1cblxufVxuIl19