/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-achsettings/suku-achsettings.module.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hY2hzZXR0aW5ncy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hY2hzZXR0aW5ncy9zdWt1LWFjaHNldHRpbmdzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFeEQ7SUFRRSw4QkFBb0IsUUFBa0I7O1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7O1lBQzlCLFFBQVEsR0FBVTtZQUN0QixDQUFDLHdCQUF3QixFQUFFLGtCQUFrQixDQUFDO1NBQy9DOztZQUNELEtBQWdDLElBQUEsYUFBQSxpQkFBQSxRQUFRLENBQUEsa0NBQUEsd0RBQUU7Z0JBQS9CLElBQUEsMENBQWlCLEVBQWhCLGlCQUFTLEVBQUUsY0FBSTs7b0JBQ25CLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0RSxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQUksRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNqQzs7Ozs7Ozs7O0lBQ0gsQ0FBQzs7OztJQUNELDJDQUFZOzs7SUFBWixjQUFpQixDQUFDOztnQkFqQm5CLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztvQkFDeEMsZUFBZSxFQUFFLENBQUMsd0JBQXdCLENBQUM7aUJBQzVDOzs7O2dCQVhrQixRQUFROztJQXVCM0IsMkJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQVhZLG9CQUFvQjs7Ozs7O0lBQ25CLHdDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN1a3VBQ0hTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vc3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQnO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTdWt1QUNIU2V0dGluZ3NDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtTdWt1QUNIU2V0dGluZ3NDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VBY2hTZXR0aW5nTW9kdWxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBjb25zdCBlbGVtZW50czogYW55W10gPSBbXG4gICAgICBbU3VrdUFDSFNldHRpbmdzQ29tcG9uZW50LCAnc3VrdS1hY2gtc2V0dGluZyddXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IFtjb21wb25lbnQsIG5hbWVdIG9mIGVsZW1lbnRzKSB7XG4gICAgICBjb25zdCBlbCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoY29tcG9uZW50LCB7IGluamVjdG9yOiB0aGlzLmluamVjdG9yIH0pO1xuICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKG5hbWUsIGVsKTtcbiAgICB9XG4gIH1cbiAgbmdEb0Jvb3N0cmFwKCkgeyB9XG59XG4iXX0=