/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SukuACHSettingsComponent } from './suku-achsettings.component';
import { createCustomElement } from '@angular/elements';
var SukuAchSettingModule = /** @class */ (function () {
    function SukuAchSettingModule(injector) {
        var e_1, _a;
        this.injector = injector;
        /** @type {?} */
        var elements = [
            [SukuACHSettingsComponent, 'suku-ach-setting']
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
    }
    /**
     * @return {?}
     */
    SukuAchSettingModule.prototype.ngDoBoostrap = /**
     * @return {?}
     */
    function () { };
    SukuAchSettingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [SukuACHSettingsComponent],
                    entryComponents: [SukuACHSettingsComponent]
                },] }
    ];
    /** @nocollapse */
    SukuAchSettingModule.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return SukuAchSettingModule;
}());
export { SukuAchSettingModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SukuAchSettingModule.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hY2hzZXR0aW5ncy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hY2hzZXR0aW5ncy9zdWt1LWFjaHNldHRpbmdzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV4RDtJQVFFLDhCQUFvQixRQUFrQjs7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTs7WUFDOUIsUUFBUSxHQUFVO1lBQ3RCLENBQUMsd0JBQXdCLEVBQUUsa0JBQWtCLENBQUM7U0FDL0M7O1lBQ0QsS0FBZ0MsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFBRTtnQkFBL0IsSUFBQSwwQ0FBaUIsRUFBaEIsaUJBQVMsRUFBRSxjQUFJOztvQkFDbkIsRUFBRSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RFLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ2pDOzs7Ozs7Ozs7SUFDSCxDQUFDOzs7O0lBQ0QsMkNBQVk7OztJQUFaLGNBQWlCLENBQUM7O2dCQWpCbkIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUN4QyxlQUFlLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDNUM7Ozs7Z0JBWGtCLFFBQVE7O0lBdUIzQiwyQkFBQztDQUFBLEFBbEJELElBa0JDO1NBWFksb0JBQW9COzs7Ozs7SUFDbkIsd0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3VrdUFDSFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9zdWt1LWFjaHNldHRpbmdzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBjcmVhdGVDdXN0b21FbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvZWxlbWVudHMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1N1a3VBQ0hTZXR0aW5nc0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1N1a3VBQ0hTZXR0aW5nc0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUFjaFNldHRpbmdNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGNvbnN0IGVsZW1lbnRzOiBhbnlbXSA9IFtcbiAgICAgIFtTdWt1QUNIU2V0dGluZ3NDb21wb25lbnQsICdzdWt1LWFjaC1zZXR0aW5nJ11cbiAgICBdO1xuICAgIGZvciAoY29uc3QgW2NvbXBvbmVudCwgbmFtZV0gb2YgZWxlbWVudHMpIHtcbiAgICAgIGNvbnN0IGVsID0gY3JlYXRlQ3VzdG9tRWxlbWVudChjb21wb25lbnQsIHsgaW5qZWN0b3I6IHRoaXMuaW5qZWN0b3IgfSk7XG4gICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUobmFtZSwgZWwpO1xuICAgIH1cbiAgfVxuICBuZ0RvQm9vc3RyYXAoKSB7IH1cbn1cbiJdfQ==