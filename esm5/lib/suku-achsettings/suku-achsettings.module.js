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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hY2hzZXR0aW5ncy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hY2hzZXR0aW5ncy9zdWt1LWFjaHNldHRpbmdzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV4RDtJQVFFLDhCQUFvQixRQUFrQjs7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTs7WUFDOUIsUUFBUSxHQUFVO1lBQ3RCLENBQUMsd0JBQXdCLEVBQUUsa0JBQWtCLENBQUM7U0FDL0M7O1lBQ0QsS0FBZ0MsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFBRTtnQkFBL0IsSUFBQSwwQ0FBaUIsRUFBaEIsaUJBQVMsRUFBRSxjQUFJOztvQkFDbkIsRUFBRSxHQUFHLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3RFLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ2pDOzs7Ozs7Ozs7SUFDSCxDQUFDOzs7O0lBQ0QsMkNBQVk7OztJQUFaLGNBQWlCLENBQUM7O2dCQWpCbkIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUN4QyxlQUFlLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDNUM7Ozs7Z0JBWGtCLFFBQVE7O0lBdUIzQiwyQkFBQztDQUFBLEFBbEJELElBa0JDO1NBWFksb0JBQW9COzs7Ozs7SUFDbkIsd0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFN1a3VBQ0hTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vc3VrdS1hY2hzZXR0aW5ncy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBjcmVhdGVDdXN0b21FbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvZWxlbWVudHMnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1N1a3VBQ0hTZXR0aW5nc0NvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbU3VrdUFDSFNldHRpbmdzQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUFjaFNldHRpbmdNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICBjb25zdCBlbGVtZW50czogYW55W10gPSBbXHJcbiAgICAgIFtTdWt1QUNIU2V0dGluZ3NDb21wb25lbnQsICdzdWt1LWFjaC1zZXR0aW5nJ11cclxuICAgIF07XHJcbiAgICBmb3IgKGNvbnN0IFtjb21wb25lbnQsIG5hbWVdIG9mIGVsZW1lbnRzKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gY3JlYXRlQ3VzdG9tRWxlbWVudChjb21wb25lbnQsIHsgaW5qZWN0b3I6IHRoaXMuaW5qZWN0b3IgfSk7XHJcbiAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZShuYW1lLCBlbCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG5nRG9Cb29zdHJhcCgpIHsgfVxyXG59XHJcbiJdfQ==