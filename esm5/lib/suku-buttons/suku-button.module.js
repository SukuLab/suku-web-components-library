/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1idXR0b24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtYnV0dG9ucy9zdWt1LWJ1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFFcEc7SUE0QkUsMkJBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDdEMsQ0FBQzs7OztJQUVELHlDQUFhOzs7SUFBYjs7O1lBQ1EsUUFBUSxHQUFVO1lBQ3RCLENBQUMsdUJBQXVCLEVBQUUsa0JBQWtCLENBQUM7WUFDN0MsQ0FBQywwQkFBMEIsRUFBRSxxQkFBcUIsQ0FBQztZQUNuRCxDQUFDLDRCQUE0QixFQUFFLHVCQUF1QixDQUFDO1lBQ3ZELENBQUMsMEJBQTBCLEVBQUUscUJBQXFCLENBQUM7WUFDbkQsQ0FBQywyQkFBMkIsRUFBRSxzQkFBc0IsQ0FBQztTQUN0RDs7WUFDRCxLQUFnQyxJQUFBLGFBQUEsaUJBQUEsUUFBUSxDQUFBLGtDQUFBLHdEQUFFO2dCQUEvQixJQUFBLDBDQUFpQixFQUFoQixpQkFBUyxFQUFFLGNBQUk7O29CQUNuQixFQUFFLEdBQUcsbUJBQW1CLENBQUMsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxNQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDakM7Ozs7Ozs7OztJQUNILENBQUM7O2dCQTNDRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHVCQUF1Qjt3QkFDdkIsMEJBQTBCO3dCQUMxQiw0QkFBNEI7d0JBQzVCLDBCQUEwQjt3QkFDMUIsMkJBQTJCO3FCQUM1QjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2YsdUJBQXVCO3dCQUN2QiwwQkFBMEI7d0JBQzFCLDRCQUE0Qjt3QkFDNUIsMEJBQTBCO3dCQUMxQiwyQkFBMkI7cUJBQzVCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx1QkFBdUI7d0JBQ3ZCLDBCQUEwQjt3QkFDMUIsNEJBQTRCO3dCQUM1QiwwQkFBMEI7d0JBQzFCLDJCQUEyQjtxQkFDNUI7aUJBQ0Y7Ozs7Z0JBbENrQixRQUFROztJQXNEM0Isd0JBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQW5CWSxpQkFBaUI7Ozs7OztJQUVoQixxQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJztcclxuaW1wb3J0IHsgU3VrdUluZm9CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3N1a3UtaW5mby1idXR0b24vc3VrdS1pbmZvLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWt1UHJpbWFyeUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc3VrdS1wcmltYXJ5LWJ1dHRvbi9zdWt1LXByaW1hcnktYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN1a3VTZWNvbmRhcnlCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3N1a3Utc2Vjb25kYXJ5LWJ1dHRvbi9zdWt1LXNlY29uZGFyeS1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3VrdURlZmF1bHRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3N1a3UtZGVmYXVsdC1idXR0b24vc3VrdS1kZWZhdWx0LWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWt1SG9tZXBhZ2VCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3N1a3UtaG9tZXBhZ2UtYnV0dG9uL3N1a3UtaG9tZXBhZ2UtYnV0dG9uLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTdWt1SW5mb0J1dHRvbkNvbXBvbmVudCxcclxuICAgIFN1a3VQcmltYXJ5QnV0dG9uQ29tcG9uZW50LFxyXG4gICAgU3VrdVNlY29uZGFyeUJ1dHRvbkNvbXBvbmVudCxcclxuICAgIFN1a3VEZWZhdWx0QnV0dG9uQ29tcG9uZW50LFxyXG4gICAgU3VrdUhvbWVwYWdlQnV0dG9uQ29tcG9uZW50XHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIFN1a3VJbmZvQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgU3VrdVByaW1hcnlCdXR0b25Db21wb25lbnQsXHJcbiAgICBTdWt1U2Vjb25kYXJ5QnV0dG9uQ29tcG9uZW50LFxyXG4gICAgU3VrdURlZmF1bHRCdXR0b25Db21wb25lbnQsXHJcbiAgICBTdWt1SG9tZXBhZ2VCdXR0b25Db21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFN1a3VJbmZvQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgU3VrdVByaW1hcnlCdXR0b25Db21wb25lbnQsXHJcbiAgICBTdWt1U2Vjb25kYXJ5QnV0dG9uQ29tcG9uZW50LFxyXG4gICAgU3VrdURlZmF1bHRCdXR0b25Db21wb25lbnQsXHJcbiAgICBTdWt1SG9tZXBhZ2VCdXR0b25Db21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1QnV0dG9uc01vZHVsZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgfVxyXG5cclxuICBuZ0RvQm9vdHN0cmFwKCkge1xyXG4gICAgY29uc3QgZWxlbWVudHM6IGFueVtdID0gW1xyXG4gICAgICBbU3VrdUluZm9CdXR0b25Db21wb25lbnQsICdzdWt1LWluZm8tYnV0dG9uJ10sXHJcbiAgICAgIFtTdWt1UHJpbWFyeUJ1dHRvbkNvbXBvbmVudCwgJ3N1a3UtcHJpbWFyeS1idXR0b24nXSxcclxuICAgICAgW1N1a3VTZWNvbmRhcnlCdXR0b25Db21wb25lbnQsICdzdWt1LXNlY29uZGFyeS1idXR0b24nXSxcclxuICAgICAgW1N1a3VEZWZhdWx0QnV0dG9uQ29tcG9uZW50LCAnc3VrdS1kZWZhdWx0LWJ1dHRvbiddLFxyXG4gICAgICBbU3VrdUhvbWVwYWdlQnV0dG9uQ29tcG9uZW50LCAnc3VrdS1ob21lcGFnZS1idXR0b24nXVxyXG4gICAgXTtcclxuICAgIGZvciAoY29uc3QgW2NvbXBvbmVudCwgbmFtZV0gb2YgZWxlbWVudHMpIHtcclxuICAgICAgY29uc3QgZWwgPSBjcmVhdGVDdXN0b21FbGVtZW50KGNvbXBvbmVudCwgeyBpbmplY3RvcjogdGhpcy5pbmplY3RvciB9KTtcclxuICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKG5hbWUsIGVsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==