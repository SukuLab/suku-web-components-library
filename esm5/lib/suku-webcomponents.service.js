/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @record
 */
export function Theme() { }
if (false) {
    /** @type {?} */
    Theme.prototype.name;
    /** @type {?} */
    Theme.prototype.properties;
}
/** @type {?} */
export var suku = {
    name: 'suku',
    properties: {
        '--suku-primary-font': "'Poppins', sans-serif",
        '--suku-secondary-font': "'Encode Sans', sans-serif",
        '--suku-primary-color': '#a7bf2e',
        '--suku-secondary-color': '#d8fc40',
        '--suku-bg-primary': '#2f2e2e',
        '--suku-bg-secondary': '#272727',
        '--suku-text-heading': '#1d1d1d',
        '--suku-text-sub-heading': '#cccccc',
        '--suku-text-label-one': '#b6b6b6',
        '--suku-text-label-two': '#ffffff',
        '--suku-text-label-three': '#f2f2f2',
        '--suku-text-link': '#3e3e3e',
        '--suku-text-info': '#757575',
        '--suku-primary-border-color': '#a7bf2e',
        '--suku-secondary-border-color': '#757575',
        '--suku-primary-border-radius': '0 40px 0 0',
        '--suku-default-border-radius': '0px',
        '--suku-filter-bg': '#ffffff',
        '--suku-filter-label': '#b6b6b6',
        '--suku-filter-label-selected': 'black'
    }
};
/** @type {?} */
export var dark = {
    name: 'dark',
    properties: {
        '--suku-primary-font': "'Poppins', sans-serif",
        '--suku-secondary-font': "'Encode Sans', sans-serif",
        '--suku-primary-color': '#363b4e',
        '--suku-secondary-color': '#d8fc40',
        '--suku-bg-primary': '#363b4e',
        '--suku-bg-secondary': '#272727',
        '--suku-text-heading': '#1d1d1d',
        '--suku-text-sub-heading': '#f2f2f2',
        '--suku-text-label-one': '#b6b6b6',
        '--suku-text-label-two': '#ffffff',
        '--suku-text-label-three': '#f2f2f2',
        '--suku-text-link': '#3e3e3e',
        '--suku-text-info': '#757575',
        '--suku-primary-border-color': '#f2f2f2',
        '--suku-secondary-border-color': '#757575',
        '--suku-primary-border-radius': '0',
        '--suku-default-border-radius': '0px 20px 15px',
        '--suku-filter-bg': 'black',
        '--suku-filter-label': '#b6b6b6',
        '--suku-filter-label-selected': '#ffffff'
    }
};
/** @type {?} */
export var light = {
    name: 'light',
    properties: {
        '--suku-primary-font': "'Source Sans Pro', sans-serif",
        '--suku-secondary-font': "SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace",
        '--suku-primary-color': '#a7bf2e',
        '--suku-secondary-color': '#b3b3b3',
        '--suku-bg-primary': '#a6c36f',
        '--suku-bg-secondary': '#282828',
        '--suku-text-heading': '#1d1d1d',
        '--suku-text-sub-heading': '#1d1d1d',
        '--suku-text-label-one': '#b6b6b6',
        '--suku-text-label-two': 'black',
        '--suku-text-label-three': '#f2f2f2',
        '--suku-text-link': '#3e3e3e',
        '--suku-text-info': '#757575',
        '--suku-primary-border-color': '#151515',
        '--suku-secondary-border-color': '#757575',
        '--suku-primary-border-radius': '0px 15px 10px 0px',
        '--suku-default-border-radius': '10px 10px 20px 5px'
    }
};
var SukuWebcomponentsService = /** @class */ (function () {
    function SukuWebcomponentsService() {
        this.active = suku;
    }
    /**
     * @return {?}
     */
    SukuWebcomponentsService.prototype.setLightTheme = /**
     * @return {?}
     */
    function () {
        this.setActiveTheme(light);
    };
    /**
     * @return {?}
     */
    SukuWebcomponentsService.prototype.setDarkTheme = /**
     * @return {?}
     */
    function () {
        this.setActiveTheme(dark);
    };
    /**
     * @return {?}
     */
    SukuWebcomponentsService.prototype.setSukuTheme = /**
     * @return {?}
     */
    function () {
        console.log('suku');
        this.setActiveTheme(suku);
    };
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    SukuWebcomponentsService.prototype.setActiveTheme = /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        var _this = this;
        this.active = theme;
        Object.keys(this.active.properties).forEach((/**
         * @param {?} property
         * @return {?}
         */
        function (property) {
            document.documentElement.style.setProperty(property, _this.active.properties[property]);
        }));
    };
    SukuWebcomponentsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SukuWebcomponentsService.ctorParameters = function () { return []; };
    /** @nocollapse */ SukuWebcomponentsService.ngInjectableDef = i0.defineInjectable({ factory: function SukuWebcomponentsService_Factory() { return new SukuWebcomponentsService(); }, token: SukuWebcomponentsService, providedIn: "root" });
    return SukuWebcomponentsService;
}());
export { SukuWebcomponentsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SukuWebcomponentsService.prototype.active;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS13ZWJjb21wb25lbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS13ZWJjb21wb25lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRTNDLDJCQUdDOzs7SUFGQyxxQkFBYTs7SUFDYiwyQkFBZ0I7OztBQUdsQixNQUFNLEtBQU8sSUFBSSxHQUFVO0lBQ3pCLElBQUksRUFBRSxNQUFNO0lBQ1osVUFBVSxFQUFFO1FBQ1YscUJBQXFCLEVBQUUsdUJBQXVCO1FBQzlDLHVCQUF1QixFQUFFLDJCQUEyQjtRQUNwRCxzQkFBc0IsRUFBRSxTQUFTO1FBQ2pDLHdCQUF3QixFQUFFLFNBQVM7UUFDbkMsbUJBQW1CLEVBQUUsU0FBUztRQUM5QixxQkFBcUIsRUFBRSxTQUFTO1FBQ2hDLHFCQUFxQixFQUFFLFNBQVM7UUFDaEMseUJBQXlCLEVBQUUsU0FBUztRQUNwQyx1QkFBdUIsRUFBRSxTQUFTO1FBQ2xDLHVCQUF1QixFQUFFLFNBQVM7UUFDbEMseUJBQXlCLEVBQUUsU0FBUztRQUNwQyxrQkFBa0IsRUFBRSxTQUFTO1FBQzdCLGtCQUFrQixFQUFFLFNBQVM7UUFDN0IsNkJBQTZCLEVBQUUsU0FBUztRQUN4QywrQkFBK0IsRUFBRSxTQUFTO1FBQzFDLDhCQUE4QixFQUFFLFlBQVk7UUFDNUMsOEJBQThCLEVBQUUsS0FBSztRQUNyQyxrQkFBa0IsRUFBRSxTQUFTO1FBQzdCLHFCQUFxQixFQUFFLFNBQVM7UUFDaEMsOEJBQThCLEVBQUUsT0FBTztLQUN4QztDQUNGOztBQUVELE1BQU0sS0FBTyxJQUFJLEdBQVU7SUFDekIsSUFBSSxFQUFFLE1BQU07SUFDWixVQUFVLEVBQUU7UUFDVixxQkFBcUIsRUFBRSx1QkFBdUI7UUFDOUMsdUJBQXVCLEVBQUUsMkJBQTJCO1FBQ3BELHNCQUFzQixFQUFFLFNBQVM7UUFDakMsd0JBQXdCLEVBQUUsU0FBUztRQUNuQyxtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLHFCQUFxQixFQUFFLFNBQVM7UUFDaEMscUJBQXFCLEVBQUUsU0FBUztRQUNoQyx5QkFBeUIsRUFBRSxTQUFTO1FBQ3BDLHVCQUF1QixFQUFFLFNBQVM7UUFDbEMsdUJBQXVCLEVBQUUsU0FBUztRQUNsQyx5QkFBeUIsRUFBRSxTQUFTO1FBQ3BDLGtCQUFrQixFQUFFLFNBQVM7UUFDN0Isa0JBQWtCLEVBQUUsU0FBUztRQUM3Qiw2QkFBNkIsRUFBRSxTQUFTO1FBQ3hDLCtCQUErQixFQUFFLFNBQVM7UUFDMUMsOEJBQThCLEVBQUUsR0FBRztRQUNuQyw4QkFBOEIsRUFBRSxlQUFlO1FBQy9DLGtCQUFrQixFQUFFLE9BQU87UUFDM0IscUJBQXFCLEVBQUUsU0FBUztRQUNoQyw4QkFBOEIsRUFBRSxTQUFTO0tBQzFDO0NBQ0Y7O0FBRUQsTUFBTSxLQUFPLEtBQUssR0FBVTtJQUMxQixJQUFJLEVBQUUsT0FBTztJQUNiLFVBQVUsRUFBRTtRQUNWLHFCQUFxQixFQUFFLCtCQUErQjtRQUN0RCx1QkFBdUIsRUFBRSxvRkFBZ0Y7UUFDekcsc0JBQXNCLEVBQUUsU0FBUztRQUNqQyx3QkFBd0IsRUFBRSxTQUFTO1FBQ25DLG1CQUFtQixFQUFFLFNBQVM7UUFDOUIscUJBQXFCLEVBQUUsU0FBUztRQUNoQyxxQkFBcUIsRUFBRSxTQUFTO1FBQ2hDLHlCQUF5QixFQUFFLFNBQVM7UUFDcEMsdUJBQXVCLEVBQUUsU0FBUztRQUNsQyx1QkFBdUIsRUFBRSxPQUFPO1FBQ2hDLHlCQUF5QixFQUFFLFNBQVM7UUFDcEMsa0JBQWtCLEVBQUUsU0FBUztRQUM3QixrQkFBa0IsRUFBRSxTQUFTO1FBQzdCLDZCQUE2QixFQUFFLFNBQVM7UUFDeEMsK0JBQStCLEVBQUUsU0FBUztRQUMxQyw4QkFBOEIsRUFBRSxtQkFBbUI7UUFDbkQsOEJBQThCLEVBQUUsb0JBQW9CO0tBQ3JEO0NBQ0Y7QUFFRDtJQU1FO1FBRlEsV0FBTSxHQUFVLElBQUksQ0FBQztJQUc3QixDQUFDOzs7O0lBRU0sZ0RBQWE7OztJQUFwQjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVNLCtDQUFZOzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFTSwrQ0FBWTs7O0lBQW5CO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUVPLGlEQUFjOzs7OztJQUF0QixVQUF1QixLQUFZO1FBQW5DLGlCQUtDO1FBSkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLFFBQVE7WUFDbkQsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBM0JGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O21DQXBGRDtDQThHQyxBQTVCRCxJQTRCQztTQXpCWSx3QkFBd0I7Ozs7OztJQUNuQywwQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWUge1xuICBuYW1lOiBzdHJpbmc7XG4gIHByb3BlcnRpZXM6IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IHN1a3U6IFRoZW1lID0ge1xuICBuYW1lOiAnc3VrdScsXG4gIHByb3BlcnRpZXM6IHtcbiAgICAnLS1zdWt1LXByaW1hcnktZm9udCc6IGAnUG9wcGlucycsIHNhbnMtc2VyaWZgLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWZvbnQnOiBgJ0VuY29kZSBTYW5zJywgc2Fucy1zZXJpZmAsXG4gICAgJy0tc3VrdS1wcmltYXJ5LWNvbG9yJzogJyNhN2JmMmUnLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWNvbG9yJzogJyNkOGZjNDAnLFxuICAgICctLXN1a3UtYmctcHJpbWFyeSc6ICcjMmYyZTJlJyxcbiAgICAnLS1zdWt1LWJnLXNlY29uZGFyeSc6ICcjMjcyNzI3JyxcbiAgICAnLS1zdWt1LXRleHQtaGVhZGluZyc6ICcjMWQxZDFkJyxcbiAgICAnLS1zdWt1LXRleHQtc3ViLWhlYWRpbmcnOiAnI2NjY2NjYycsXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLW9uZSc6ICcjYjZiNmI2JyxcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtdHdvJzogJyNmZmZmZmYnLFxuICAgICctLXN1a3UtdGV4dC1sYWJlbC10aHJlZSc6ICcjZjJmMmYyJyxcbiAgICAnLS1zdWt1LXRleHQtbGluayc6ICcjM2UzZTNlJyxcbiAgICAnLS1zdWt1LXRleHQtaW5mbyc6ICcjNzU3NTc1JyxcbiAgICAnLS1zdWt1LXByaW1hcnktYm9yZGVyLWNvbG9yJzogJyNhN2JmMmUnLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWJvcmRlci1jb2xvcic6ICcjNzU3NTc1JyxcbiAgICAnLS1zdWt1LXByaW1hcnktYm9yZGVyLXJhZGl1cyc6ICcwIDQwcHggMCAwJyxcbiAgICAnLS1zdWt1LWRlZmF1bHQtYm9yZGVyLXJhZGl1cyc6ICcwcHgnLFxuICAgICctLXN1a3UtZmlsdGVyLWJnJzogJyNmZmZmZmYnLFxuICAgICctLXN1a3UtZmlsdGVyLWxhYmVsJzogJyNiNmI2YjYnLFxuICAgICctLXN1a3UtZmlsdGVyLWxhYmVsLXNlbGVjdGVkJzogJ2JsYWNrJ1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGFyazogVGhlbWUgPSB7XG4gIG5hbWU6ICdkYXJrJyxcbiAgcHJvcGVydGllczoge1xuICAgICctLXN1a3UtcHJpbWFyeS1mb250JzogYCdQb3BwaW5zJywgc2Fucy1zZXJpZmAsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktZm9udCc6IGAnRW5jb2RlIFNhbnMnLCBzYW5zLXNlcmlmYCxcbiAgICAnLS1zdWt1LXByaW1hcnktY29sb3InOiAnIzM2M2I0ZScsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktY29sb3InOiAnI2Q4ZmM0MCcsXG4gICAgJy0tc3VrdS1iZy1wcmltYXJ5JzogJyMzNjNiNGUnLFxuICAgICctLXN1a3UtYmctc2Vjb25kYXJ5JzogJyMyNzI3MjcnLFxuICAgICctLXN1a3UtdGV4dC1oZWFkaW5nJzogJyMxZDFkMWQnLFxuICAgICctLXN1a3UtdGV4dC1zdWItaGVhZGluZyc6ICcjZjJmMmYyJyxcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtb25lJzogJyNiNmI2YjYnLFxuICAgICctLXN1a3UtdGV4dC1sYWJlbC10d28nOiAnI2ZmZmZmZicsXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLXRocmVlJzogJyNmMmYyZjInLFxuICAgICctLXN1a3UtdGV4dC1saW5rJzogJyMzZTNlM2UnLFxuICAgICctLXN1a3UtdGV4dC1pbmZvJzogJyM3NTc1NzUnLFxuICAgICctLXN1a3UtcHJpbWFyeS1ib3JkZXItY29sb3InOiAnI2YyZjJmMicsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktYm9yZGVyLWNvbG9yJzogJyM3NTc1NzUnLFxuICAgICctLXN1a3UtcHJpbWFyeS1ib3JkZXItcmFkaXVzJzogJzAnLFxuICAgICctLXN1a3UtZGVmYXVsdC1ib3JkZXItcmFkaXVzJzogJzBweCAyMHB4IDE1cHgnLFxuICAgICctLXN1a3UtZmlsdGVyLWJnJzogJ2JsYWNrJyxcbiAgICAnLS1zdWt1LWZpbHRlci1sYWJlbCc6ICcjYjZiNmI2JyxcbiAgICAnLS1zdWt1LWZpbHRlci1sYWJlbC1zZWxlY3RlZCc6ICcjZmZmZmZmJ1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbGlnaHQ6IFRoZW1lID0ge1xuICBuYW1lOiAnbGlnaHQnLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgJy0tc3VrdS1wcmltYXJ5LWZvbnQnOiBgJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWZgLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWZvbnQnOiBgU0ZNb25vLVJlZ3VsYXIsTWVubG8sTW9uYWNvLENvbnNvbGFzLFwiTGliZXJhdGlvbiBNb25vXCIsXCJDb3VyaWVyIE5ld1wiLG1vbm9zcGFjZWAsXG4gICAgJy0tc3VrdS1wcmltYXJ5LWNvbG9yJzogJyNhN2JmMmUnLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWNvbG9yJzogJyNiM2IzYjMnLFxuICAgICctLXN1a3UtYmctcHJpbWFyeSc6ICcjYTZjMzZmJyxcbiAgICAnLS1zdWt1LWJnLXNlY29uZGFyeSc6ICcjMjgyODI4JyxcbiAgICAnLS1zdWt1LXRleHQtaGVhZGluZyc6ICcjMWQxZDFkJyxcbiAgICAnLS1zdWt1LXRleHQtc3ViLWhlYWRpbmcnOiAnIzFkMWQxZCcsXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLW9uZSc6ICcjYjZiNmI2JyxcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtdHdvJzogJ2JsYWNrJyxcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtdGhyZWUnOiAnI2YyZjJmMicsXG4gICAgJy0tc3VrdS10ZXh0LWxpbmsnOiAnIzNlM2UzZScsXG4gICAgJy0tc3VrdS10ZXh0LWluZm8nOiAnIzc1NzU3NScsXG4gICAgJy0tc3VrdS1wcmltYXJ5LWJvcmRlci1jb2xvcic6ICcjMTUxNTE1JyxcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1ib3JkZXItY29sb3InOiAnIzc1NzU3NScsXG4gICAgJy0tc3VrdS1wcmltYXJ5LWJvcmRlci1yYWRpdXMnOiAnMHB4IDE1cHggMTBweCAwcHgnLFxuICAgICctLXN1a3UtZGVmYXVsdC1ib3JkZXItcmFkaXVzJzogJzEwcHggMTBweCAyMHB4IDVweCdcbiAgfVxufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3VrdVdlYmNvbXBvbmVudHNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhY3RpdmU6IFRoZW1lID0gc3VrdTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIHB1YmxpYyBzZXRMaWdodFRoZW1lKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0QWN0aXZlVGhlbWUobGlnaHQpO1xuICB9XG5cbiAgcHVibGljIHNldERhcmtUaGVtZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNldEFjdGl2ZVRoZW1lKGRhcmspO1xuICB9XG5cbiAgcHVibGljIHNldFN1a3VUaGVtZSgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnc3VrdScpO1xuICAgIHRoaXMuc2V0QWN0aXZlVGhlbWUoc3VrdSk7XG4gIH1cblxuICBwcml2YXRlIHNldEFjdGl2ZVRoZW1lKHRoZW1lOiBUaGVtZSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlID0gdGhlbWU7XG4gICAgT2JqZWN0LmtleXModGhpcy5hY3RpdmUucHJvcGVydGllcykuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdGhpcy5hY3RpdmUucHJvcGVydGllc1twcm9wZXJ0eV0pO1xuICAgIH0pO1xuICB9XG59Il19