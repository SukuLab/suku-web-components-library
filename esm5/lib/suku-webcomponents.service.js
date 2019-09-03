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
        '--suku-ternary-font': "'abelregular', sans-serif",
        '--suku-primary-color': '#a7bf2e',
        '--suku-secondary-color': '#d8fc40',
        '--suku-warning-color': '#FF0000',
        '--suku-bg-primary': '#2f2e2e',
        '--suku-bg-secondary': '#272727',
        '--suku-bg-ternary': '#35393e',
        '--suku-homepage-bg': '#ffffff',
        '--suku-button-default-bg': '#303030',
        '--suku-button-disabled-bg': '#d9d9d9',
        '--suku-icon-disabled-color': '#7f7f7f',
        '--suku-default-icon-color': '#b6b6b6',
        '--suku-text-heading': '#1d1d1d',
        '--suku-text-sub-heading': '#cccccc',
        '--suku-text-label-one': '#b6b6b6',
        '--suku-text-label-two': '#ffffff',
        '--suku-text-label-three': '#f2f2f2',
        '--suku-text-link': '#3e3e3e',
        '--suku-text-info': '#757575',
        '--suku-primary-border-color': '#a7bf2e',
        '--suku-default-border-color': '#e2e2e2',
        '--suku-secondary-border-color': '#757575',
        '--suku-primary-border-radius': '0 40px 0 0',
        '--suku-secondary-border-radius': '0px 0px 41px 41px',
        '--suku-search-border-radius': '10px 18px 18px 16px',
        '--suku-default-border-radius': '0px',
        '--suku-default-button-border-radius': '28px 76px 63px',
        '--suku-star-empty-bg': '#e1e1e1',
        '--suku-star-full-bg': 'rgb(137, 137, 137)',
        '--suku-star-size': '20px',
        '--suku-filter-bg': '#ffffff',
        '--suku-default-bg': '#ffffff',
        '--suku-filter-label': '#b6b6b6',
        '--suku-filter-label-selected': 'black',
        '--suku-progressbar-active-bg': '#a7bf2e',
        '--suku-progressbar-upcoming-bg': '#757575',
        '--suku-progressbar-completed-bg': '#1c1c1c',
        '--suku-profile-bg-color': '#b6b6b6',
        '--suku-profile-text-one': '#dcd8d8f0',
        '--suku-profile-text-two': '#504e4e',
        '--suku-font-size-1': '11px',
        // 0.75rem
        '--suku-font-size-2': '12px',
        // 0.875rem
        '--suku-font-size-3': '14px',
        // 1.0625rem
        '--suku-font-size-4': '15px',
        // 1.0625remm
        '--suku-font-size-5': '17px',
        // 1.25rem
        '--suku-font-size-6': '20px',
        // 1.5rem
        '--suku-font-size-7': '22px',
        // 1.625rem
        '--suku-font-size-8': '24px',
        // 1.625rem
        '--suku-font-size-9': '26px',
        // 1.875rem
        '--suku-font-size-10': '30px',
        // 1.875rem
        '--suku-font-size-11': '50px',
    }
};
/** @type {?} */
export var dark = {
    name: 'dark',
    properties: {
        '--suku-primary-font': "'Poppins', sans-serif",
        '--suku-secondary-font': "'Encode Sans', sans-serif",
        '--suku-ternary-font': "'\"abelregular\", sans-serif",
        '--suku-primary-color': '#363b4e',
        '--suku-secondary-color': '#d8fc40',
        '--suku-warning-color': '#FF0000',
        '--suku-bg-primary': '#363b4e',
        '--suku-bg-secondary': '#272727',
        '--suku-bg-ternary': '#35393e',
        '--suku-homepage-bg': '#ffffff',
        '--suku-button-default-bg': '#303030',
        '--suku-button-disabled-bg': '#d9d9d9',
        '--suku-icon-disabled-color': '#7f7f7f',
        '--suku-default-icon-color': '#b6b6b6',
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
        '--suku-secondary-border-radius': '0px 0px 41px 41px',
        '--suku-default-border-radius': '0px 20px 15px',
        '--suku-default-button-border-radius': '28px 76px 63px',
        '--suku-search-border-radius': '10px 18px 18px 16px',
        '--suku-star-empty-bg': '#e1e1e1',
        '--suku-star-full-bg': 'rgb(137, 137, 137)',
        '--suku-star-size': '20px',
        '--suku-filter-bg': 'black',
        '--suku-filter-label': '#b6b6b6',
        '--suku-filter-label-selected': '#ffffff',
        '--suku-progressbar-inprogress-bg': '#a7bf2e',
        '--suku-progressbar-upcoming-bg': '#757575',
        '--suku-progressbar-completed-bg': '#1c1c1c',
        '--suku-submenu-bg-color': '',
        '--suku-font-size-1': '0.75rem',
        // 12px	- 0.75rem
        '--suku-font-size-2': '0.875rem',
        // 14px	0.875rem
        '--suku-font-size-3': '1.06rem',
        // 17px	1.0625rem
        '--suku-font-size-4': '1.25rem',
        // 20px	1.25rem
        '--suku-font-size-5': '1.5rem',
        //  24px	1.5rem
        '--suku-font-size-6': '1.625rem',
        // 26px	1.625rem
        '--suku-font-size-7': '1.8rem',
        //  30px	1.875rem
        '--suku-font-size-8': '2rem',
        //  32px	1.875rem
        '--suku-font-size-10': '3rem',
        // 30px	1.875rem
        '--suku-font-size-11': '3.5rem' // 50px	1.875rem
    }
};
/** @type {?} */
export var light = {
    name: 'light',
    properties: {
        '--suku-primary-font': "'Source Sans Pro', sans-serif",
        '--suku-secondary-font': "SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace",
        '--suku-ternary-font': "'\"abelregular\", sans-serif",
        '--suku-primary-color': '#a7bf2e',
        '--suku-secondary-color': '#b3b3b3',
        '--suku-warning-color': '#FF0000',
        '--suku-bg-primary': '#a6c36f',
        '--suku-bg-secondary': '#282828',
        '--suku-bg-ternary': '#35393e',
        '--suku-homepage-bg': '#ffffff',
        '--suku-button-default-bg': '#303030',
        '--suku-button-disabled-bg': '#d9d9d9',
        '--suku-icon-disabled-color': '#7f7f7f',
        '--suku-default-icon-color': '#b6b6b6',
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
        '--suku-secondary-border-radius': '0px 0px 41px 41px',
        '--suku-default-border-radius': '10px 10px 20px 5px',
        '--suku-default-button-border-radius': '28px 76px 63px',
        '--suku-search-border-radius': '10px 18px 18px 16px',
        '--suku-filter-bg': 'black',
        '--suku-filter-label': '#b6b6b6',
        '--suku-filter-label-selected': '#ffffff',
        '--suku-progressbar-active-bg': '#a7bf2e',
        '--suku-progressbar-upcoming-bg': '#757575',
        '--suku-progressbar-completed-bg': '#1c1c1c',
        '--suku-font-size-1': '0.75rem',
        // 12px	- 0.75rem
        '--suku-font-size-2': '0.875rem',
        // 14px	0.875rem
        '--suku-font-size-3': '1.06rem',
        // 17px	1.0625rem
        '--suku-font-size-4': '1.25rem',
        // 20px	1.25rem
        '--suku-font-size-5': '1.5rem',
        //  24px	1.5rem
        '--suku-font-size-6': '1.625rem',
        // 26px	1.625rem
        '--suku-font-size-7': '1.8rem',
        //  30px	1.875rem
        '--suku-font-size-8': '2rem',
        //  32px	1.875rem
        '--suku-font-size-10': '3rem',
        // 30px	1.875rem
        '--suku-font-size-11': '3.5rem' // 50px	1.875rem
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS13ZWJjb21wb25lbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS13ZWJjb21wb25lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRTNDLDJCQUdDOzs7SUFGQyxxQkFBYTs7SUFDYiwyQkFBZ0I7OztBQUdsQixNQUFNLEtBQU8sSUFBSSxHQUFVO0lBQ3pCLElBQUksRUFBRSxNQUFNO0lBQ1osVUFBVSxFQUFFO1FBQ1YscUJBQXFCLEVBQUUsdUJBQXVCO1FBQzlDLHVCQUF1QixFQUFFLDJCQUEyQjtRQUNwRCxxQkFBcUIsRUFBRSwyQkFBMkI7UUFDbEQsc0JBQXNCLEVBQUUsU0FBUztRQUNqQyx3QkFBd0IsRUFBRSxTQUFTO1FBQ25DLHNCQUFzQixFQUFFLFNBQVM7UUFDakMsbUJBQW1CLEVBQUUsU0FBUztRQUM5QixxQkFBcUIsRUFBRSxTQUFTO1FBQ2hDLG1CQUFtQixFQUFFLFNBQVM7UUFDOUIsb0JBQW9CLEVBQUUsU0FBUztRQUMvQiwwQkFBMEIsRUFBRSxTQUFTO1FBQ3JDLDJCQUEyQixFQUFFLFNBQVM7UUFDdEMsNEJBQTRCLEVBQUUsU0FBUztRQUN2QywyQkFBMkIsRUFBRSxTQUFTO1FBQ3RDLHFCQUFxQixFQUFFLFNBQVM7UUFDaEMseUJBQXlCLEVBQUUsU0FBUztRQUNwQyx1QkFBdUIsRUFBRSxTQUFTO1FBQ2xDLHVCQUF1QixFQUFFLFNBQVM7UUFDbEMseUJBQXlCLEVBQUUsU0FBUztRQUNwQyxrQkFBa0IsRUFBRSxTQUFTO1FBQzdCLGtCQUFrQixFQUFFLFNBQVM7UUFDN0IsNkJBQTZCLEVBQUUsU0FBUztRQUN4Qyw2QkFBNkIsRUFBRSxTQUFTO1FBQ3hDLCtCQUErQixFQUFFLFNBQVM7UUFDMUMsOEJBQThCLEVBQUUsWUFBWTtRQUM1Qyxn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QUNMLENBQUM7O2dCQTNCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzttQ0E1S0Q7Q0FzTUMsQUE1QkQsSUE0QkM7U0F6Qlksd0JBQXdCOzs7Ozs7SUFDbkMsMENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwcm9wZXJ0aWVzOiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBzdWt1OiBUaGVtZSA9IHtcbiAgbmFtZTogJ3N1a3UnLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgJy0tc3VrdS1wcmltYXJ5LWZvbnQnOiBgJ1BvcHBpbnMnLCBzYW5zLXNlcmlmYCxcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1mb250JzogYCdFbmNvZGUgU2FucycsIHNhbnMtc2VyaWZgLFxuICAgICctLXN1a3UtdGVybmFyeS1mb250JzogYCdhYmVscmVndWxhcicsIHNhbnMtc2VyaWZgLFxuICAgICctLXN1a3UtcHJpbWFyeS1jb2xvcic6ICcjYTdiZjJlJyxcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1jb2xvcic6ICcjZDhmYzQwJyxcbiAgICAnLS1zdWt1LXdhcm5pbmctY29sb3InOiAnI0ZGMDAwMCcsXG4gICAgJy0tc3VrdS1iZy1wcmltYXJ5JzogJyMyZjJlMmUnLFxuICAgICctLXN1a3UtYmctc2Vjb25kYXJ5JzogJyMyNzI3MjcnLFxuICAgICctLXN1a3UtYmctdGVybmFyeSc6ICcjMzUzOTNlJyxcbiAgICAnLS1zdWt1LWhvbWVwYWdlLWJnJzogJyNmZmZmZmYnLFxuICAgICctLXN1a3UtYnV0dG9uLWRlZmF1bHQtYmcnOiAnIzMwMzAzMCcsXG4gICAgJy0tc3VrdS1idXR0b24tZGlzYWJsZWQtYmcnOiAnI2Q5ZDlkOScsXG4gICAgJy0tc3VrdS1pY29uLWRpc2FibGVkLWNvbG9yJzogJyM3ZjdmN2YnLFxuICAgICctLXN1a3UtZGVmYXVsdC1pY29uLWNvbG9yJzogJyNiNmI2YjYnLFxuICAgICctLXN1a3UtdGV4dC1oZWFkaW5nJzogJyMxZDFkMWQnLFxuICAgICctLXN1a3UtdGV4dC1zdWItaGVhZGluZyc6ICcjY2NjY2NjJyxcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtb25lJzogJyNiNmI2YjYnLFxuICAgICctLXN1a3UtdGV4dC1sYWJlbC10d28nOiAnI2ZmZmZmZicsXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLXRocmVlJzogJyNmMmYyZjInLFxuICAgICctLXN1a3UtdGV4dC1saW5rJzogJyMzZTNlM2UnLFxuICAgICctLXN1a3UtdGV4dC1pbmZvJzogJyM3NTc1NzUnLFxuICAgICctLXN1a3UtcHJpbWFyeS1ib3JkZXItY29sb3InOiAnI2E3YmYyZScsXG4gICAgJy0tc3VrdS1kZWZhdWx0LWJvcmRlci1jb2xvcic6ICcjZTJlMmUyJyxcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1ib3JkZXItY29sb3InOiAnIzc1NzU3NScsXG4gICAgJy0tc3VrdS1wcmltYXJ5LWJvcmRlci1yYWRpdXMnOiAnMCA0MHB4IDAgMCcsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1cyc6ICcwcHggMHB4IDQxcHggNDFweCcsXG4gICAgJy0tc3VrdS1zZWFyY2gtYm9yZGVyLXJhZGl1cyc6ICcxMHB4IDE4cHggMThweCAxNnB4JyxcbiAgICAnLS1zdWt1LWRlZmF1bHQtYm9yZGVyLXJhZGl1cyc6ICcwcHgnLFxuICAgICctLXN1a3UtZGVmYXVsdC1idXR0b24tYm9yZGVyLXJhZGl1cyc6ICcyOHB4IDc2cHggNjNweCcsXG4gICAgJy0tc3VrdS1zdGFyLWVtcHR5LWJnJzogJyNlMWUxZTEnLFxuICAgICctLXN1a3Utc3Rhci1mdWxsLWJnJzogJ3JnYigxMzcsIDEzNywgMTM3KScsXG4gICAgJy0tc3VrdS1zdGFyLXNpemUnOiAnMjBweCcsXG4gICAgJy0tc3VrdS1maWx0ZXItYmcnOiAnI2ZmZmZmZicsXG4gICAgJy0tc3VrdS1kZWZhdWx0LWJnJzogJyNmZmZmZmYnLFxuICAgICctLXN1a3UtZmlsdGVyLWxhYmVsJzogJyNiNmI2YjYnLFxuICAgICctLXN1a3UtZmlsdGVyLWxhYmVsLXNlbGVjdGVkJzogJ2JsYWNrJyxcbiAgICAnLS1zdWt1LXByb2dyZXNzYmFyLWFjdGl2ZS1iZyc6ICcjYTdiZjJlJyxcbiAgICAnLS1zdWt1LXByb2dyZXNzYmFyLXVwY29taW5nLWJnJzogJyM3NTc1NzUnLFxuICAgICctLXN1a3UtcHJvZ3Jlc3NiYXItY29tcGxldGVkLWJnJzogJyMxYzFjMWMnLFxuICAgICctLXN1a3UtcHJvZmlsZS1iZy1jb2xvcic6ICcjYjZiNmI2JyxcbiAgICAnLS1zdWt1LXByb2ZpbGUtdGV4dC1vbmUnOiAnI2RjZDhkOGYwJyxcbiAgICAnLS1zdWt1LXByb2ZpbGUtdGV4dC10d28nOiAnIzUwNGU0ZScsXG4gICAgJy0tc3VrdS1mb250LXNpemUtMSc6ICcxMXB4JywgLy8gMC43NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTInOiAnMTJweCcsIC8vIDAuODc1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtMyc6ICcxNHB4JywgLy8gMS4wNjI1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtNCc6ICcxNXB4JywgLy8gMS4wNjI1cmVtbVxuICAgICctLXN1a3UtZm9udC1zaXplLTUnOiAnMTdweCcsIC8vIDEuMjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS02JzogJzIwcHgnLCAvLyAxLjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS03JzogJzIycHgnLCAvLyAxLjYyNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTgnOiAnMjRweCcsIC8vIDEuNjI1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtOSc6ICcyNnB4JywgLy8gMS44NzVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0xMCc6ICczMHB4JywgLy8gMS44NzVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0xMSc6ICc1MHB4JywgIC8vIDEuODc1cmVtXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkYXJrOiBUaGVtZSA9IHtcbiAgbmFtZTogJ2RhcmsnLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgJy0tc3VrdS1wcmltYXJ5LWZvbnQnOiBgJ1BvcHBpbnMnLCBzYW5zLXNlcmlmYCxcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1mb250JzogYCdFbmNvZGUgU2FucycsIHNhbnMtc2VyaWZgLFxuICAgICctLXN1a3UtdGVybmFyeS1mb250JzogYCdcImFiZWxyZWd1bGFyXCIsIHNhbnMtc2VyaWZgLFxuICAgICctLXN1a3UtcHJpbWFyeS1jb2xvcic6ICcjMzYzYjRlJyxcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1jb2xvcic6ICcjZDhmYzQwJyxcbiAgICAnLS1zdWt1LXdhcm5pbmctY29sb3InOiAnI0ZGMDAwMCcsXG4gICAgJy0tc3VrdS1iZy1wcmltYXJ5JzogJyMzNjNiNGUnLFxuICAgICctLXN1a3UtYmctc2Vjb25kYXJ5JzogJyMyNzI3MjcnLFxuICAgICctLXN1a3UtYmctdGVybmFyeSc6ICcjMzUzOTNlJyxcbiAgICAnLS1zdWt1LWhvbWVwYWdlLWJnJzogJyNmZmZmZmYnLFxuICAgICctLXN1a3UtYnV0dG9uLWRlZmF1bHQtYmcnOiAnIzMwMzAzMCcsXG4gICAgJy0tc3VrdS1idXR0b24tZGlzYWJsZWQtYmcnOiAnI2Q5ZDlkOScsXG4gICAgJy0tc3VrdS1pY29uLWRpc2FibGVkLWNvbG9yJzogJyM3ZjdmN2YnLFxuICAgICctLXN1a3UtZGVmYXVsdC1pY29uLWNvbG9yJzogJyNiNmI2YjYnLFxuICAgICctLXN1a3UtdGV4dC1oZWFkaW5nJzogJyMxZDFkMWQnLFxuICAgICctLXN1a3UtdGV4dC1zdWItaGVhZGluZyc6ICcjZjJmMmYyJyxcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtb25lJzogJyNiNmI2YjYnLFxuICAgICctLXN1a3UtdGV4dC1sYWJlbC10d28nOiAnI2ZmZmZmZicsXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLXRocmVlJzogJyNmMmYyZjInLFxuICAgICctLXN1a3UtdGV4dC1saW5rJzogJyMzZTNlM2UnLFxuICAgICctLXN1a3UtdGV4dC1pbmZvJzogJyM3NTc1NzUnLFxuICAgICctLXN1a3UtcHJpbWFyeS1ib3JkZXItY29sb3InOiAnI2YyZjJmMicsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktYm9yZGVyLWNvbG9yJzogJyM3NTc1NzUnLFxuICAgICctLXN1a3UtcHJpbWFyeS1ib3JkZXItcmFkaXVzJzogJzAnLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMnOiAnMHB4IDBweCA0MXB4IDQxcHgnLFxuICAgICctLXN1a3UtZGVmYXVsdC1ib3JkZXItcmFkaXVzJzogJzBweCAyMHB4IDE1cHgnLFxuICAgICctLXN1a3UtZGVmYXVsdC1idXR0b24tYm9yZGVyLXJhZGl1cyc6ICcyOHB4IDc2cHggNjNweCcsXG4gICAgJy0tc3VrdS1zZWFyY2gtYm9yZGVyLXJhZGl1cyc6ICcxMHB4IDE4cHggMThweCAxNnB4JyxcbiAgICAnLS1zdWt1LXN0YXItZW1wdHktYmcnOiAnI2UxZTFlMScsXG4gICAgJy0tc3VrdS1zdGFyLWZ1bGwtYmcnOiAncmdiKDEzNywgMTM3LCAxMzcpJyxcbiAgICAnLS1zdWt1LXN0YXItc2l6ZSc6ICcyMHB4JyxcbiAgICAnLS1zdWt1LWZpbHRlci1iZyc6ICdibGFjaycsXG4gICAgJy0tc3VrdS1maWx0ZXItbGFiZWwnOiAnI2I2YjZiNicsXG4gICAgJy0tc3VrdS1maWx0ZXItbGFiZWwtc2VsZWN0ZWQnOiAnI2ZmZmZmZicsXG4gICAgJy0tc3VrdS1wcm9ncmVzc2Jhci1pbnByb2dyZXNzLWJnJzogJyNhN2JmMmUnLFxuICAgICctLXN1a3UtcHJvZ3Jlc3NiYXItdXBjb21pbmctYmcnOiAnIzc1NzU3NScsXG4gICAgJy0tc3VrdS1wcm9ncmVzc2Jhci1jb21wbGV0ZWQtYmcnOiAnIzFjMWMxYycsXG4gICAgJy0tc3VrdS1zdWJtZW51LWJnLWNvbG9yJzogJycsXG4gICAgJy0tc3VrdS1mb250LXNpemUtMSc6ICcwLjc1cmVtJywgLy8gMTJweFx0LSAwLjc1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtMic6ICcwLjg3NXJlbScsIC8vIDE0cHhcdDAuODc1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtMyc6ICcxLjA2cmVtJywgLy8gMTdweFx0MS4wNjI1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtNCc6ICcxLjI1cmVtJywgLy8gMjBweFx0MS4yNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTUnOiAnMS41cmVtJywgLy8gIDI0cHhcdDEuNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTYnOiAnMS42MjVyZW0nLCAvLyAyNnB4XHQxLjYyNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTcnOiAnMS44cmVtJywgLy8gIDMwcHhcdDEuODc1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtOCc6ICcycmVtJywgLy8gIDMycHhcdDEuODc1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtMTAnOiAnM3JlbScsIC8vIDMwcHhcdDEuODc1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtMTEnOiAnMy41cmVtJyAgLy8gNTBweFx0MS44NzVyZW1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGxpZ2h0OiBUaGVtZSA9IHtcbiAgbmFtZTogJ2xpZ2h0JyxcbiAgcHJvcGVydGllczoge1xuICAgICctLXN1a3UtcHJpbWFyeS1mb250JzogYCdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmYCxcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1mb250JzogYFNGTW9uby1SZWd1bGFyLE1lbmxvLE1vbmFjbyxDb25zb2xhcyxcIkxpYmVyYXRpb24gTW9ub1wiLFwiQ291cmllciBOZXdcIixtb25vc3BhY2VgLFxuICAgICctLXN1a3UtdGVybmFyeS1mb250JzogYCdcImFiZWxyZWd1bGFyXCIsIHNhbnMtc2VyaWZgLFxuICAgICctLXN1a3UtcHJpbWFyeS1jb2xvcic6ICcjYTdiZjJlJyxcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1jb2xvcic6ICcjYjNiM2IzJyxcbiAgICAnLS1zdWt1LXdhcm5pbmctY29sb3InOiAnI0ZGMDAwMCcsXG4gICAgJy0tc3VrdS1iZy1wcmltYXJ5JzogJyNhNmMzNmYnLFxuICAgICctLXN1a3UtYmctc2Vjb25kYXJ5JzogJyMyODI4MjgnLFxuICAgICctLXN1a3UtYmctdGVybmFyeSc6ICcjMzUzOTNlJyxcbiAgICAnLS1zdWt1LWhvbWVwYWdlLWJnJzogJyNmZmZmZmYnLFxuICAgICctLXN1a3UtYnV0dG9uLWRlZmF1bHQtYmcnOiAnIzMwMzAzMCcsXG4gICAgJy0tc3VrdS1idXR0b24tZGlzYWJsZWQtYmcnOiAnI2Q5ZDlkOScsXG4gICAgJy0tc3VrdS1pY29uLWRpc2FibGVkLWNvbG9yJzogJyM3ZjdmN2YnLFxuICAgICctLXN1a3UtZGVmYXVsdC1pY29uLWNvbG9yJzogJyNiNmI2YjYnLFxuICAgICctLXN1a3UtdGV4dC1oZWFkaW5nJzogJyMxZDFkMWQnLFxuICAgICctLXN1a3UtdGV4dC1zdWItaGVhZGluZyc6ICcjMWQxZDFkJyxcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtb25lJzogJyNiNmI2YjYnLFxuICAgICctLXN1a3UtdGV4dC1sYWJlbC10d28nOiAnYmxhY2snLFxuICAgICctLXN1a3UtdGV4dC1sYWJlbC10aHJlZSc6ICcjZjJmMmYyJyxcbiAgICAnLS1zdWt1LXRleHQtbGluayc6ICcjM2UzZTNlJyxcbiAgICAnLS1zdWt1LXRleHQtaW5mbyc6ICcjNzU3NTc1JyxcbiAgICAnLS1zdWt1LXByaW1hcnktYm9yZGVyLWNvbG9yJzogJyMxNTE1MTUnLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWJvcmRlci1jb2xvcic6ICcjNzU3NTc1JyxcbiAgICAnLS1zdWt1LXByaW1hcnktYm9yZGVyLXJhZGl1cyc6ICcwcHggMTVweCAxMHB4IDBweCcsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1cyc6ICcwcHggMHB4IDQxcHggNDFweCcsXG4gICAgJy0tc3VrdS1kZWZhdWx0LWJvcmRlci1yYWRpdXMnOiAnMTBweCAxMHB4IDIwcHggNXB4JyxcbiAgICAnLS1zdWt1LWRlZmF1bHQtYnV0dG9uLWJvcmRlci1yYWRpdXMnOiAnMjhweCA3NnB4IDYzcHgnLFxuICAgICctLXN1a3Utc2VhcmNoLWJvcmRlci1yYWRpdXMnOiAnMTBweCAxOHB4IDE4cHggMTZweCcsXG4gICAgJy0tc3VrdS1maWx0ZXItYmcnOiAnYmxhY2snLFxuICAgICctLXN1a3UtZmlsdGVyLWxhYmVsJzogJyNiNmI2YjYnLFxuICAgICctLXN1a3UtZmlsdGVyLWxhYmVsLXNlbGVjdGVkJzogJyNmZmZmZmYnLFxuICAgICctLXN1a3UtcHJvZ3Jlc3NiYXItYWN0aXZlLWJnJzogJyNhN2JmMmUnLFxuICAgICctLXN1a3UtcHJvZ3Jlc3NiYXItdXBjb21pbmctYmcnOiAnIzc1NzU3NScsXG4gICAgJy0tc3VrdS1wcm9ncmVzc2Jhci1jb21wbGV0ZWQtYmcnOiAnIzFjMWMxYycsXG4gICAgJy0tc3VrdS1mb250LXNpemUtMSc6ICcwLjc1cmVtJywgLy8gMTJweFx0LSAwLjc1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtMic6ICcwLjg3NXJlbScsIC8vIDE0cHhcdDAuODc1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtMyc6ICcxLjA2cmVtJywgLy8gMTdweFx0MS4wNjI1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtNCc6ICcxLjI1cmVtJywgLy8gMjBweFx0MS4yNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTUnOiAnMS41cmVtJywgLy8gIDI0cHhcdDEuNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTYnOiAnMS42MjVyZW0nLCAvLyAyNnB4XHQxLjYyNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTcnOiAnMS44cmVtJywgLy8gIDMwcHhcdDEuODc1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtOCc6ICcycmVtJywgLy8gIDMycHhcdDEuODc1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtMTAnOiAnM3JlbScsIC8vIDMwcHhcdDEuODc1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtMTEnOiAnMy41cmVtJyAgLy8gNTBweFx0MS44NzVyZW1cbiAgfVxufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3VrdVdlYmNvbXBvbmVudHNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhY3RpdmU6IFRoZW1lID0gc3VrdTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIHB1YmxpYyBzZXRMaWdodFRoZW1lKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0QWN0aXZlVGhlbWUobGlnaHQpO1xuICB9XG5cbiAgcHVibGljIHNldERhcmtUaGVtZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNldEFjdGl2ZVRoZW1lKGRhcmspO1xuICB9XG5cbiAgcHVibGljIHNldFN1a3VUaGVtZSgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnc3VrdScpO1xuICAgIHRoaXMuc2V0QWN0aXZlVGhlbWUoc3VrdSk7XG4gIH1cblxuICBwcml2YXRlIHNldEFjdGl2ZVRoZW1lKHRoZW1lOiBUaGVtZSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlID0gdGhlbWU7XG4gICAgT2JqZWN0LmtleXModGhpcy5hY3RpdmUucHJvcGVydGllcykuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdGhpcy5hY3RpdmUucHJvcGVydGllc1twcm9wZXJ0eV0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=