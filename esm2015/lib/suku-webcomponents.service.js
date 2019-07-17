/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export const suku = {
    name: 'suku',
    properties: {
        '--suku-primary-font': `'Poppins', sans-serif`,
        '--suku-secondary-font': `'Encode Sans', sans-serif`,
        '--suku-ternary-font': `''abelregular', sans-serif`,
        '--suku-primary-color': '#a7bf2e',
        '--suku-secondary-color': '#d8fc40',
        '--suku-bg-primary': '#2f2e2e',
        '--suku-bg-secondary': '#272727',
        '--suku-bg-ternary': '#35393e',
        '--suku-homepage-bg': '#ffffff',
        '--suku-button-default-bg': '#303030',
        '--suku-button-disabled-bg': '#d9d9d9',
        '--suku-icon-disabled-color': '#7f7f7f',
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
        '--suku-secondary-border-radius': '0px 0px 41px 41px',
        '--suku-default-border-radius': '0px',
        '--suku-filter-bg': '#ffffff',
        '--suku-filter-label': '#b6b6b6',
        '--suku-filter-label-selected': 'black',
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
        '--suku-font-size-8': '2rem' //  32px	1.875rem
    }
};
/** @type {?} */
export const dark = {
    name: 'dark',
    properties: {
        '--suku-primary-font': `'Poppins', sans-serif`,
        '--suku-secondary-font': `'Encode Sans', sans-serif`,
        '--suku-ternary-font': `'"abelregular", sans-serif`,
        '--suku-primary-color': '#363b4e',
        '--suku-secondary-color': '#d8fc40',
        '--suku-bg-primary': '#363b4e',
        '--suku-bg-secondary': '#272727',
        '--suku-bg-ternary': '#35393e',
        '--suku-homepage-bg': '#ffffff',
        '--suku-button-default-bg': '#303030',
        '--suku-button-disabled-bg': '#d9d9d9',
        '--suku-icon-disabled-color': '#7f7f7f',
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
        '--suku-filter-bg': 'black',
        '--suku-filter-label': '#b6b6b6',
        '--suku-filter-label-selected': '#ffffff',
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
        '--suku-font-size-8': '2rem' //  32px	1.875rem
    }
};
/** @type {?} */
export const light = {
    name: 'light',
    properties: {
        '--suku-primary-font': `'Source Sans Pro', sans-serif`,
        '--suku-secondary-font': `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
        '--suku-ternary-font': `'"abelregular", sans-serif`,
        '--suku-primary-color': '#a7bf2e',
        '--suku-secondary-color': '#b3b3b3',
        '--suku-bg-primary': '#a6c36f',
        '--suku-bg-secondary': '#282828',
        '--suku-bg-ternary': '#35393e',
        '--suku-homepage-bg': '#ffffff',
        '--suku-button-default-bg': '#303030',
        '--suku-button-disabled-bg': '#d9d9d9',
        '--suku-icon-disabled-color': '#7f7f7f',
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
        '--suku-filter-bg': 'black',
        '--suku-filter-label': '#b6b6b6',
        '--suku-filter-label-selected': '#ffffff',
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
        '--suku-font-size-8': '2rem' //  32px	1.875rem
    }
};
export class SukuWebcomponentsService {
    constructor() {
        this.active = suku;
    }
    /**
     * @return {?}
     */
    setLightTheme() {
        this.setActiveTheme(light);
    }
    /**
     * @return {?}
     */
    setDarkTheme() {
        this.setActiveTheme(dark);
    }
    /**
     * @return {?}
     */
    setSukuTheme() {
        console.log('suku');
        this.setActiveTheme(suku);
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    setActiveTheme(theme) {
        this.active = theme;
        Object.keys(this.active.properties).forEach((/**
         * @param {?} property
         * @return {?}
         */
        (property) => {
            document.documentElement.style.setProperty(property, this.active.properties[property]);
        }));
    }
}
SukuWebcomponentsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SukuWebcomponentsService.ctorParameters = () => [];
/** @nocollapse */ SukuWebcomponentsService.ngInjectableDef = i0.defineInjectable({ factory: function SukuWebcomponentsService_Factory() { return new SukuWebcomponentsService(); }, token: SukuWebcomponentsService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SukuWebcomponentsService.prototype.active;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS13ZWJjb21wb25lbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS13ZWJjb21wb25lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRTNDLDJCQUdDOzs7SUFGQyxxQkFBYTs7SUFDYiwyQkFBZ0I7OztBQUdsQixNQUFNLE9BQU8sSUFBSSxHQUFVO0lBQ3pCLElBQUksRUFBRSxNQUFNO0lBQ1osVUFBVSxFQUFFO1FBQ1YscUJBQXFCLEVBQUUsdUJBQXVCO1FBQzlDLHVCQUF1QixFQUFFLDJCQUEyQjtRQUNwRCxxQkFBcUIsRUFBRSw0QkFBNEI7UUFDbkQsc0JBQXNCLEVBQUUsU0FBUztRQUNqQyx3QkFBd0IsRUFBRSxTQUFTO1FBQ25DLG1CQUFtQixFQUFFLFNBQVM7UUFDOUIscUJBQXFCLEVBQUUsU0FBUztRQUNoQyxtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLG9CQUFvQixFQUFFLFNBQVM7UUFDL0IsMEJBQTBCLEVBQUUsU0FBUztRQUNyQywyQkFBMkIsRUFBRSxTQUFTO1FBQ3RDLDRCQUE0QixFQUFFLFNBQVM7UUFDdkMscUJBQXFCLEVBQUUsU0FBUztRQUNoQyx5QkFBeUIsRUFBRSxTQUFTO1FBQ3BDLHVCQUF1QixFQUFFLFNBQVM7UUFDbEMsdUJBQXVCLEVBQUUsU0FBUztRQUNsQyx5QkFBeUIsRUFBRSxTQUFTO1FBQ3BDLGtCQUFrQixFQUFFLFNBQVM7UUFDN0Isa0JBQWtCLEVBQUUsU0FBUztRQUM3Qiw2QkFBNkIsRUFBRSxTQUFTO1FBQ3hDLCtCQUErQixFQUFFLFNBQVM7UUFDMUMsOEJBQThCLEVBQUUsWUFBWTtRQUM1QyxnQ0FBZ0MsRUFBRSxtQkFBbUI7UUFDckQsOEJBQThCLEVBQUUsS0FBSztRQUNyQyxrQkFBa0IsRUFBRSxTQUFTO1FBQzdC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Q25COzs7Ozs7Ozs7O0lBRUMsMENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwcm9wZXJ0aWVzOiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBzdWt1OiBUaGVtZSA9IHtcbiAgbmFtZTogJ3N1a3UnLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgJy0tc3VrdS1wcmltYXJ5LWZvbnQnOiBgJ1BvcHBpbnMnLCBzYW5zLXNlcmlmYCxcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1mb250JzogYCdFbmNvZGUgU2FucycsIHNhbnMtc2VyaWZgLFxuICAgICctLXN1a3UtdGVybmFyeS1mb250JzogYCcnYWJlbHJlZ3VsYXInLCBzYW5zLXNlcmlmYCxcbiAgICAnLS1zdWt1LXByaW1hcnktY29sb3InOiAnI2E3YmYyZScsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktY29sb3InOiAnI2Q4ZmM0MCcsXG4gICAgJy0tc3VrdS1iZy1wcmltYXJ5JzogJyMyZjJlMmUnLFxuICAgICctLXN1a3UtYmctc2Vjb25kYXJ5JzogJyMyNzI3MjcnLFxuICAgICctLXN1a3UtYmctdGVybmFyeSc6ICcjMzUzOTNlJyxcbiAgICAnLS1zdWt1LWhvbWVwYWdlLWJnJzogJyNmZmZmZmYnLFxuICAgICctLXN1a3UtYnV0dG9uLWRlZmF1bHQtYmcnOiAnIzMwMzAzMCcsXG4gICAgJy0tc3VrdS1idXR0b24tZGlzYWJsZWQtYmcnOiAnI2Q5ZDlkOScsXG4gICAgJy0tc3VrdS1pY29uLWRpc2FibGVkLWNvbG9yJzogJyM3ZjdmN2YnLFxuICAgICctLXN1a3UtdGV4dC1oZWFkaW5nJzogJyMxZDFkMWQnLFxuICAgICctLXN1a3UtdGV4dC1zdWItaGVhZGluZyc6ICcjY2NjY2NjJyxcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtb25lJzogJyNiNmI2YjYnLFxuICAgICctLXN1a3UtdGV4dC1sYWJlbC10d28nOiAnI2ZmZmZmZicsXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLXRocmVlJzogJyNmMmYyZjInLFxuICAgICctLXN1a3UtdGV4dC1saW5rJzogJyMzZTNlM2UnLFxuICAgICctLXN1a3UtdGV4dC1pbmZvJzogJyM3NTc1NzUnLFxuICAgICctLXN1a3UtcHJpbWFyeS1ib3JkZXItY29sb3InOiAnI2E3YmYyZScsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktYm9yZGVyLWNvbG9yJzogJyM3NTc1NzUnLFxuICAgICctLXN1a3UtcHJpbWFyeS1ib3JkZXItcmFkaXVzJzogJzAgNDBweCAwIDAnLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMnOiAnMHB4IDBweCA0MXB4IDQxcHgnLFxuICAgICctLXN1a3UtZGVmYXVsdC1ib3JkZXItcmFkaXVzJzogJzBweCcsXG4gICAgJy0tc3VrdS1maWx0ZXItYmcnOiAnI2ZmZmZmZicsXG4gICAgJy0tc3VrdS1maWx0ZXItbGFiZWwnOiAnI2I2YjZiNicsXG4gICAgJy0tc3VrdS1maWx0ZXItbGFiZWwtc2VsZWN0ZWQnOiAnYmxhY2snLFxuICAgICctLXN1a3UtZm9udC1zaXplLTEnOiAnMC43NXJlbScsIC8vIDEycHhcdC0gMC43NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTInOiAnMC44NzVyZW0nLCAvLyAxNHB4XHQwLjg3NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTMnOiAnMS4wNnJlbScsIC8vIDE3cHhcdDEuMDYyNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTQnOiAnMS4yNXJlbScsIC8vIDIwcHhcdDEuMjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS01JzogJzEuNXJlbScsIC8vICAyNHB4XHQxLjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS02JzogJzEuNjI1cmVtJywgLy8gMjZweFx0MS42MjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS03JzogJzEuOHJlbScsIC8vICAzMHB4XHQxLjg3NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTgnOiAnMnJlbScgLy8gIDMycHhcdDEuODc1cmVtXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkYXJrOiBUaGVtZSA9IHtcbiAgbmFtZTogJ2RhcmsnLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgJy0tc3VrdS1wcmltYXJ5LWZvbnQnOiBgJ1BvcHBpbnMnLCBzYW5zLXNlcmlmYCxcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1mb250JzogYCdFbmNvZGUgU2FucycsIHNhbnMtc2VyaWZgLFxuICAgICctLXN1a3UtdGVybmFyeS1mb250JzogYCdcImFiZWxyZWd1bGFyXCIsIHNhbnMtc2VyaWZgLFxuICAgICctLXN1a3UtcHJpbWFyeS1jb2xvcic6ICcjMzYzYjRlJyxcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1jb2xvcic6ICcjZDhmYzQwJyxcbiAgICAnLS1zdWt1LWJnLXByaW1hcnknOiAnIzM2M2I0ZScsXG4gICAgJy0tc3VrdS1iZy1zZWNvbmRhcnknOiAnIzI3MjcyNycsXG4gICAgJy0tc3VrdS1iZy10ZXJuYXJ5JzogJyMzNTM5M2UnLFxuICAgICctLXN1a3UtaG9tZXBhZ2UtYmcnOiAnI2ZmZmZmZicsXG4gICAgJy0tc3VrdS1idXR0b24tZGVmYXVsdC1iZyc6ICcjMzAzMDMwJyxcbiAgICAnLS1zdWt1LWJ1dHRvbi1kaXNhYmxlZC1iZyc6ICcjZDlkOWQ5JyxcbiAgICAnLS1zdWt1LWljb24tZGlzYWJsZWQtY29sb3InOiAnIzdmN2Y3ZicsXG4gICAgJy0tc3VrdS10ZXh0LWhlYWRpbmcnOiAnIzFkMWQxZCcsXG4gICAgJy0tc3VrdS10ZXh0LXN1Yi1oZWFkaW5nJzogJyNmMmYyZjInLFxuICAgICctLXN1a3UtdGV4dC1sYWJlbC1vbmUnOiAnI2I2YjZiNicsXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLXR3byc6ICcjZmZmZmZmJyxcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtdGhyZWUnOiAnI2YyZjJmMicsXG4gICAgJy0tc3VrdS10ZXh0LWxpbmsnOiAnIzNlM2UzZScsXG4gICAgJy0tc3VrdS10ZXh0LWluZm8nOiAnIzc1NzU3NScsXG4gICAgJy0tc3VrdS1wcmltYXJ5LWJvcmRlci1jb2xvcic6ICcjZjJmMmYyJyxcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1ib3JkZXItY29sb3InOiAnIzc1NzU3NScsXG4gICAgJy0tc3VrdS1wcmltYXJ5LWJvcmRlci1yYWRpdXMnOiAnMCcsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1cyc6ICcwcHggMHB4IDQxcHggNDFweCcsXG4gICAgJy0tc3VrdS1kZWZhdWx0LWJvcmRlci1yYWRpdXMnOiAnMHB4IDIwcHggMTVweCcsXG4gICAgJy0tc3VrdS1maWx0ZXItYmcnOiAnYmxhY2snLFxuICAgICctLXN1a3UtZmlsdGVyLWxhYmVsJzogJyNiNmI2YjYnLFxuICAgICctLXN1a3UtZmlsdGVyLWxhYmVsLXNlbGVjdGVkJzogJyNmZmZmZmYnLFxuICAgICctLXN1a3UtZm9udC1zaXplLTEnOiAnMC43NXJlbScsIC8vIDEycHhcdC0gMC43NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTInOiAnMC44NzVyZW0nLCAvLyAxNHB4XHQwLjg3NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTMnOiAnMS4wNnJlbScsIC8vIDE3cHhcdDEuMDYyNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTQnOiAnMS4yNXJlbScsIC8vIDIwcHhcdDEuMjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS01JzogJzEuNXJlbScsIC8vICAyNHB4XHQxLjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS02JzogJzEuNjI1cmVtJywgLy8gMjZweFx0MS42MjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS03JzogJzEuOHJlbScsIC8vICAzMHB4XHQxLjg3NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTgnOiAnMnJlbScgLy8gIDMycHhcdDEuODc1cmVtXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBsaWdodDogVGhlbWUgPSB7XG4gIG5hbWU6ICdsaWdodCcsXG4gIHByb3BlcnRpZXM6IHtcbiAgICAnLS1zdWt1LXByaW1hcnktZm9udCc6IGAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZmAsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktZm9udCc6IGBTRk1vbm8tUmVndWxhcixNZW5sbyxNb25hY28sQ29uc29sYXMsXCJMaWJlcmF0aW9uIE1vbm9cIixcIkNvdXJpZXIgTmV3XCIsbW9ub3NwYWNlYCxcbiAgICAnLS1zdWt1LXRlcm5hcnktZm9udCc6IGAnXCJhYmVscmVndWxhclwiLCBzYW5zLXNlcmlmYCxcbiAgICAnLS1zdWt1LXByaW1hcnktY29sb3InOiAnI2E3YmYyZScsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktY29sb3InOiAnI2IzYjNiMycsXG4gICAgJy0tc3VrdS1iZy1wcmltYXJ5JzogJyNhNmMzNmYnLFxuICAgICctLXN1a3UtYmctc2Vjb25kYXJ5JzogJyMyODI4MjgnLFxuICAgICctLXN1a3UtYmctdGVybmFyeSc6ICcjMzUzOTNlJyxcbiAgICAnLS1zdWt1LWhvbWVwYWdlLWJnJzogJyNmZmZmZmYnLFxuICAgICctLXN1a3UtYnV0dG9uLWRlZmF1bHQtYmcnOiAnIzMwMzAzMCcsXG4gICAgJy0tc3VrdS1idXR0b24tZGlzYWJsZWQtYmcnOiAnI2Q5ZDlkOScsXG4gICAgJy0tc3VrdS1pY29uLWRpc2FibGVkLWNvbG9yJzogJyM3ZjdmN2YnLFxuICAgICctLXN1a3UtdGV4dC1oZWFkaW5nJzogJyMxZDFkMWQnLFxuICAgICctLXN1a3UtdGV4dC1zdWItaGVhZGluZyc6ICcjMWQxZDFkJyxcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtb25lJzogJyNiNmI2YjYnLFxuICAgICctLXN1a3UtdGV4dC1sYWJlbC10d28nOiAnYmxhY2snLFxuICAgICctLXN1a3UtdGV4dC1sYWJlbC10aHJlZSc6ICcjZjJmMmYyJyxcbiAgICAnLS1zdWt1LXRleHQtbGluayc6ICcjM2UzZTNlJyxcbiAgICAnLS1zdWt1LXRleHQtaW5mbyc6ICcjNzU3NTc1JyxcbiAgICAnLS1zdWt1LXByaW1hcnktYm9yZGVyLWNvbG9yJzogJyMxNTE1MTUnLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWJvcmRlci1jb2xvcic6ICcjNzU3NTc1JyxcbiAgICAnLS1zdWt1LXByaW1hcnktYm9yZGVyLXJhZGl1cyc6ICcwcHggMTVweCAxMHB4IDBweCcsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1cyc6ICcwcHggMHB4IDQxcHggNDFweCcsXG4gICAgJy0tc3VrdS1kZWZhdWx0LWJvcmRlci1yYWRpdXMnOiAnMTBweCAxMHB4IDIwcHggNXB4JyxcbiAgICAnLS1zdWt1LWZpbHRlci1iZyc6ICdibGFjaycsXG4gICAgJy0tc3VrdS1maWx0ZXItbGFiZWwnOiAnI2I2YjZiNicsXG4gICAgJy0tc3VrdS1maWx0ZXItbGFiZWwtc2VsZWN0ZWQnOiAnI2ZmZmZmZicsXG4gICAgJy0tc3VrdS1mb250LXNpemUtMSc6ICcwLjc1cmVtJywgLy8gMTJweFx0LSAwLjc1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtMic6ICcwLjg3NXJlbScsIC8vIDE0cHhcdDAuODc1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtMyc6ICcxLjA2cmVtJywgLy8gMTdweFx0MS4wNjI1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtNCc6ICcxLjI1cmVtJywgLy8gMjBweFx0MS4yNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTUnOiAnMS41cmVtJywgLy8gIDI0cHhcdDEuNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTYnOiAnMS42MjVyZW0nLCAvLyAyNnB4XHQxLjYyNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTcnOiAnMS44cmVtJywgLy8gIDMwcHhcdDEuODc1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtOCc6ICcycmVtJyAvLyAgMzJweFx0MS44NzVyZW1cbiAgfVxufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3VrdVdlYmNvbXBvbmVudHNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhY3RpdmU6IFRoZW1lID0gc3VrdTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIHB1YmxpYyBzZXRMaWdodFRoZW1lKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0QWN0aXZlVGhlbWUobGlnaHQpO1xuICB9XG5cbiAgcHVibGljIHNldERhcmtUaGVtZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNldEFjdGl2ZVRoZW1lKGRhcmspO1xuICB9XG5cbiAgcHVibGljIHNldFN1a3VUaGVtZSgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnc3VrdScpO1xuICAgIHRoaXMuc2V0QWN0aXZlVGhlbWUoc3VrdSk7XG4gIH1cblxuICBwcml2YXRlIHNldEFjdGl2ZVRoZW1lKHRoZW1lOiBUaGVtZSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlID0gdGhlbWU7XG4gICAgT2JqZWN0LmtleXModGhpcy5hY3RpdmUucHJvcGVydGllcykuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdGhpcy5hY3RpdmUucHJvcGVydGllc1twcm9wZXJ0eV0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=