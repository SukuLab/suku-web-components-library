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
        '--suku-search-border-radius': '10px 18px 18px 16px',
        '--suku-default-border-radius': '0px',
        '--suku-filter-bg': '#ffffff',
        '--suku-filter-label': '#b6b6b6',
        '--suku-filter-label-selected': 'black',
        '--suku-font-size-1': '11px',
        // 11px	0.75rem
        '--suku-font-size-2': '12px',
        // 12px	0.875rem
        '--suku-font-size-3': '14px',
        // 14px	1.0625rem
        '--suku-font-size-4': '17px',
        // 20px	1.25rem
        '--suku-font-size-5': '20px',
        // 24px	1.5rem
        '--suku-font-size-6': '24px',
        // 26px	1.625rem
        '--suku-font-size-7': '26px',
        // 30px	1.875rem
        '--suku-font-size-8': '30px' // 32px	1.875rem
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
        '--suku-search-border-radius': '10px 18px 18px 16px',
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
        '--suku-search-border-radius': '10px 18px 18px 16px',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS13ZWJjb21wb25lbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS13ZWJjb21wb25lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRTNDLDJCQUdDOzs7SUFGQyxxQkFBYTs7SUFDYiwyQkFBZ0I7OztBQUdsQixNQUFNLE9BQU8sSUFBSSxHQUFVO0lBQ3pCLElBQUksRUFBRSxNQUFNO0lBQ1osVUFBVSxFQUFFO1FBQ1YscUJBQXFCLEVBQUUsdUJBQXVCO1FBQzlDLHVCQUF1QixFQUFFLDJCQUEyQjtRQUNwRCxxQkFBcUIsRUFBRSw0QkFBNEI7UUFDbkQsc0JBQXNCLEVBQUUsU0FBUztRQUNqQyx3QkFBd0IsRUFBRSxTQUFTO1FBQ25DLG1CQUFtQixFQUFFLFNBQVM7UUFDOUIscUJBQXFCLEVBQUUsU0FBUztRQUNoQyxtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLG9CQUFvQixFQUFFLFNBQVM7UUFDL0IsMEJBQTBCLEVBQUUsU0FBUztRQUNyQywyQkFBMkIsRUFBRSxTQUFTO1FBQ3RDLDRCQUE0QixFQUFFLFNBQVM7UUFDdkMscUJBQXFCLEVBQUUsU0FBUztRQUNoQyx5QkFBeUIsRUFBRSxTQUFTO1FBQ3BDLHVCQUF1QixFQUFFLFNBQVM7UUFDbEMsdUJBQXVCLEVBQUUsU0FBUztRQUNsQyx5QkFBeUIsRUFBRSxTQUFTO1FBQ3BDLGtCQUFrQixFQUFFLFNBQVM7UUFDN0Isa0JBQWtCLEVBQUUsU0FBUztRQUM3Qiw2QkFBNkIsRUFBRSxTQUFTO1FBQ3hDLCtCQUErQixFQUFFLFNBQVM7UUFDMUMsOEJBQThCLEVBQUUsWUFBWTtRQUM1QyxnQ0FBZ0MsRUFBRSxtQkFBbUI7UUFDckQsNkJBQTZCLEVBQUUscUJBQXFCO1FBQ3BELDhCQUE4QixFQUFFLEtBQUs7UUFD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QUM7UUFDekYsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUEzQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0lBRUMsMENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwcm9wZXJ0aWVzOiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBzdWt1OiBUaGVtZSA9IHtcbiAgbmFtZTogJ3N1a3UnLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgJy0tc3VrdS1wcmltYXJ5LWZvbnQnOiBgJ1BvcHBpbnMnLCBzYW5zLXNlcmlmYCxcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1mb250JzogYCdFbmNvZGUgU2FucycsIHNhbnMtc2VyaWZgLFxuICAgICctLXN1a3UtdGVybmFyeS1mb250JzogYCcnYWJlbHJlZ3VsYXInLCBzYW5zLXNlcmlmYCxcbiAgICAnLS1zdWt1LXByaW1hcnktY29sb3InOiAnI2E3YmYyZScsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktY29sb3InOiAnI2Q4ZmM0MCcsXG4gICAgJy0tc3VrdS1iZy1wcmltYXJ5JzogJyMyZjJlMmUnLFxuICAgICctLXN1a3UtYmctc2Vjb25kYXJ5JzogJyMyNzI3MjcnLFxuICAgICctLXN1a3UtYmctdGVybmFyeSc6ICcjMzUzOTNlJyxcbiAgICAnLS1zdWt1LWhvbWVwYWdlLWJnJzogJyNmZmZmZmYnLFxuICAgICctLXN1a3UtYnV0dG9uLWRlZmF1bHQtYmcnOiAnIzMwMzAzMCcsXG4gICAgJy0tc3VrdS1idXR0b24tZGlzYWJsZWQtYmcnOiAnI2Q5ZDlkOScsXG4gICAgJy0tc3VrdS1pY29uLWRpc2FibGVkLWNvbG9yJzogJyM3ZjdmN2YnLFxuICAgICctLXN1a3UtdGV4dC1oZWFkaW5nJzogJyMxZDFkMWQnLFxuICAgICctLXN1a3UtdGV4dC1zdWItaGVhZGluZyc6ICcjY2NjY2NjJyxcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtb25lJzogJyNiNmI2YjYnLFxuICAgICctLXN1a3UtdGV4dC1sYWJlbC10d28nOiAnI2ZmZmZmZicsXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLXRocmVlJzogJyNmMmYyZjInLFxuICAgICctLXN1a3UtdGV4dC1saW5rJzogJyMzZTNlM2UnLFxuICAgICctLXN1a3UtdGV4dC1pbmZvJzogJyM3NTc1NzUnLFxuICAgICctLXN1a3UtcHJpbWFyeS1ib3JkZXItY29sb3InOiAnI2E3YmYyZScsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktYm9yZGVyLWNvbG9yJzogJyM3NTc1NzUnLFxuICAgICctLXN1a3UtcHJpbWFyeS1ib3JkZXItcmFkaXVzJzogJzAgNDBweCAwIDAnLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMnOiAnMHB4IDBweCA0MXB4IDQxcHgnLFxuICAgICctLXN1a3Utc2VhcmNoLWJvcmRlci1yYWRpdXMnOiAnMTBweCAxOHB4IDE4cHggMTZweCcsXG4gICAgJy0tc3VrdS1kZWZhdWx0LWJvcmRlci1yYWRpdXMnOiAnMHB4JyxcbiAgICAnLS1zdWt1LWZpbHRlci1iZyc6ICcjZmZmZmZmJyxcbiAgICAnLS1zdWt1LWZpbHRlci1sYWJlbCc6ICcjYjZiNmI2JyxcbiAgICAnLS1zdWt1LWZpbHRlci1sYWJlbC1zZWxlY3RlZCc6ICdibGFjaycsXG4gICAgJy0tc3VrdS1mb250LXNpemUtMSc6ICcxMXB4JywgLy8gMTFweFx0MC43NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTInOiAnMTJweCcsIC8vIDEycHhcdDAuODc1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtMyc6ICcxNHB4JywgLy8gMTRweFx0MS4wNjI1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtNCc6ICcxN3B4JywgLy8gMjBweFx0MS4yNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTUnOiAnMjBweCcsIC8vIDI0cHhcdDEuNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTYnOiAnMjRweCcsIC8vIDI2cHhcdDEuNjI1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtNyc6ICcyNnB4JywgLy8gMzBweFx0MS44NzVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS04JzogJzMwcHgnICAvLyAzMnB4XHQxLjg3NXJlbVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGFyazogVGhlbWUgPSB7XG4gIG5hbWU6ICdkYXJrJyxcbiAgcHJvcGVydGllczoge1xuICAgICctLXN1a3UtcHJpbWFyeS1mb250JzogYCdQb3BwaW5zJywgc2Fucy1zZXJpZmAsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktZm9udCc6IGAnRW5jb2RlIFNhbnMnLCBzYW5zLXNlcmlmYCxcbiAgICAnLS1zdWt1LXRlcm5hcnktZm9udCc6IGAnXCJhYmVscmVndWxhclwiLCBzYW5zLXNlcmlmYCxcbiAgICAnLS1zdWt1LXByaW1hcnktY29sb3InOiAnIzM2M2I0ZScsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktY29sb3InOiAnI2Q4ZmM0MCcsXG4gICAgJy0tc3VrdS1iZy1wcmltYXJ5JzogJyMzNjNiNGUnLFxuICAgICctLXN1a3UtYmctc2Vjb25kYXJ5JzogJyMyNzI3MjcnLFxuICAgICctLXN1a3UtYmctdGVybmFyeSc6ICcjMzUzOTNlJyxcbiAgICAnLS1zdWt1LWhvbWVwYWdlLWJnJzogJyNmZmZmZmYnLFxuICAgICctLXN1a3UtYnV0dG9uLWRlZmF1bHQtYmcnOiAnIzMwMzAzMCcsXG4gICAgJy0tc3VrdS1idXR0b24tZGlzYWJsZWQtYmcnOiAnI2Q5ZDlkOScsXG4gICAgJy0tc3VrdS1pY29uLWRpc2FibGVkLWNvbG9yJzogJyM3ZjdmN2YnLFxuICAgICctLXN1a3UtdGV4dC1oZWFkaW5nJzogJyMxZDFkMWQnLFxuICAgICctLXN1a3UtdGV4dC1zdWItaGVhZGluZyc6ICcjZjJmMmYyJyxcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtb25lJzogJyNiNmI2YjYnLFxuICAgICctLXN1a3UtdGV4dC1sYWJlbC10d28nOiAnI2ZmZmZmZicsXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLXRocmVlJzogJyNmMmYyZjInLFxuICAgICctLXN1a3UtdGV4dC1saW5rJzogJyMzZTNlM2UnLFxuICAgICctLXN1a3UtdGV4dC1pbmZvJzogJyM3NTc1NzUnLFxuICAgICctLXN1a3UtcHJpbWFyeS1ib3JkZXItY29sb3InOiAnI2YyZjJmMicsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktYm9yZGVyLWNvbG9yJzogJyM3NTc1NzUnLFxuICAgICctLXN1a3UtcHJpbWFyeS1ib3JkZXItcmFkaXVzJzogJzAnLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMnOiAnMHB4IDBweCA0MXB4IDQxcHgnLFxuICAgICctLXN1a3UtZGVmYXVsdC1ib3JkZXItcmFkaXVzJzogJzBweCAyMHB4IDE1cHgnLFxuICAgICctLXN1a3Utc2VhcmNoLWJvcmRlci1yYWRpdXMnOiAnMTBweCAxOHB4IDE4cHggMTZweCcsXG4gICAgJy0tc3VrdS1maWx0ZXItYmcnOiAnYmxhY2snLFxuICAgICctLXN1a3UtZmlsdGVyLWxhYmVsJzogJyNiNmI2YjYnLFxuICAgICctLXN1a3UtZmlsdGVyLWxhYmVsLXNlbGVjdGVkJzogJyNmZmZmZmYnLFxuICAgICctLXN1a3UtZm9udC1zaXplLTEnOiAnMC43NXJlbScsIC8vIDEycHhcdC0gMC43NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTInOiAnMC44NzVyZW0nLCAvLyAxNHB4XHQwLjg3NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTMnOiAnMS4wNnJlbScsIC8vIDE3cHhcdDEuMDYyNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTQnOiAnMS4yNXJlbScsIC8vIDIwcHhcdDEuMjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS01JzogJzEuNXJlbScsIC8vICAyNHB4XHQxLjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS02JzogJzEuNjI1cmVtJywgLy8gMjZweFx0MS42MjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS03JzogJzEuOHJlbScsIC8vICAzMHB4XHQxLjg3NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTgnOiAnMnJlbScgLy8gIDMycHhcdDEuODc1cmVtXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBsaWdodDogVGhlbWUgPSB7XG4gIG5hbWU6ICdsaWdodCcsXG4gIHByb3BlcnRpZXM6IHtcbiAgICAnLS1zdWt1LXByaW1hcnktZm9udCc6IGAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZmAsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktZm9udCc6IGBTRk1vbm8tUmVndWxhcixNZW5sbyxNb25hY28sQ29uc29sYXMsXCJMaWJlcmF0aW9uIE1vbm9cIixcIkNvdXJpZXIgTmV3XCIsbW9ub3NwYWNlYCxcbiAgICAnLS1zdWt1LXRlcm5hcnktZm9udCc6IGAnXCJhYmVscmVndWxhclwiLCBzYW5zLXNlcmlmYCxcbiAgICAnLS1zdWt1LXByaW1hcnktY29sb3InOiAnI2E3YmYyZScsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktY29sb3InOiAnI2IzYjNiMycsXG4gICAgJy0tc3VrdS1iZy1wcmltYXJ5JzogJyNhNmMzNmYnLFxuICAgICctLXN1a3UtYmctc2Vjb25kYXJ5JzogJyMyODI4MjgnLFxuICAgICctLXN1a3UtYmctdGVybmFyeSc6ICcjMzUzOTNlJyxcbiAgICAnLS1zdWt1LWhvbWVwYWdlLWJnJzogJyNmZmZmZmYnLFxuICAgICctLXN1a3UtYnV0dG9uLWRlZmF1bHQtYmcnOiAnIzMwMzAzMCcsXG4gICAgJy0tc3VrdS1idXR0b24tZGlzYWJsZWQtYmcnOiAnI2Q5ZDlkOScsXG4gICAgJy0tc3VrdS1pY29uLWRpc2FibGVkLWNvbG9yJzogJyM3ZjdmN2YnLFxuICAgICctLXN1a3UtdGV4dC1oZWFkaW5nJzogJyMxZDFkMWQnLFxuICAgICctLXN1a3UtdGV4dC1zdWItaGVhZGluZyc6ICcjMWQxZDFkJyxcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtb25lJzogJyNiNmI2YjYnLFxuICAgICctLXN1a3UtdGV4dC1sYWJlbC10d28nOiAnYmxhY2snLFxuICAgICctLXN1a3UtdGV4dC1sYWJlbC10aHJlZSc6ICcjZjJmMmYyJyxcbiAgICAnLS1zdWt1LXRleHQtbGluayc6ICcjM2UzZTNlJyxcbiAgICAnLS1zdWt1LXRleHQtaW5mbyc6ICcjNzU3NTc1JyxcbiAgICAnLS1zdWt1LXByaW1hcnktYm9yZGVyLWNvbG9yJzogJyMxNTE1MTUnLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWJvcmRlci1jb2xvcic6ICcjNzU3NTc1JyxcbiAgICAnLS1zdWt1LXByaW1hcnktYm9yZGVyLXJhZGl1cyc6ICcwcHggMTVweCAxMHB4IDBweCcsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1cyc6ICcwcHggMHB4IDQxcHggNDFweCcsXG4gICAgJy0tc3VrdS1kZWZhdWx0LWJvcmRlci1yYWRpdXMnOiAnMTBweCAxMHB4IDIwcHggNXB4JyxcbiAgICAnLS1zdWt1LXNlYXJjaC1ib3JkZXItcmFkaXVzJzogJzEwcHggMThweCAxOHB4IDE2cHgnLFxuICAgICctLXN1a3UtZmlsdGVyLWJnJzogJ2JsYWNrJyxcbiAgICAnLS1zdWt1LWZpbHRlci1sYWJlbCc6ICcjYjZiNmI2JyxcbiAgICAnLS1zdWt1LWZpbHRlci1sYWJlbC1zZWxlY3RlZCc6ICcjZmZmZmZmJyxcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0xJzogJzAuNzVyZW0nLCAvLyAxMnB4XHQtIDAuNzVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0yJzogJzAuODc1cmVtJywgLy8gMTRweFx0MC44NzVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0zJzogJzEuMDZyZW0nLCAvLyAxN3B4XHQxLjA2MjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS00JzogJzEuMjVyZW0nLCAvLyAyMHB4XHQxLjI1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtNSc6ICcxLjVyZW0nLCAvLyAgMjRweFx0MS41cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtNic6ICcxLjYyNXJlbScsIC8vIDI2cHhcdDEuNjI1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtNyc6ICcxLjhyZW0nLCAvLyAgMzBweFx0MS44NzVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS04JzogJzJyZW0nIC8vICAzMnB4XHQxLjg3NXJlbVxuICB9XG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdWt1V2ViY29tcG9uZW50c1NlcnZpY2Uge1xuICBwcml2YXRlIGFjdGl2ZTogVGhlbWUgPSBzdWt1O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgcHVibGljIHNldExpZ2h0VGhlbWUoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRBY3RpdmVUaGVtZShsaWdodCk7XG4gIH1cblxuICBwdWJsaWMgc2V0RGFya1RoZW1lKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0QWN0aXZlVGhlbWUoZGFyayk7XG4gIH1cblxuICBwdWJsaWMgc2V0U3VrdVRoZW1lKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdzdWt1Jyk7XG4gICAgdGhpcy5zZXRBY3RpdmVUaGVtZShzdWt1KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0QWN0aXZlVGhlbWUodGhlbWU6IFRoZW1lKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmUgPSB0aGVtZTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmFjdGl2ZS5wcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB0aGlzLmFjdGl2ZS5wcm9wZXJ0aWVzW3Byb3BlcnR5XSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==