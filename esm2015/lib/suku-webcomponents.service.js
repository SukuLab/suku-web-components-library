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
export const suku = {
    name: 'suku',
    properties: {
        '--suku-primary-font': `'Poppins', sans-serif`,
        '--suku-secondary-font': `'Encode Sans', sans-serif`,
        '--suku-ternary-font': `'abelregular', sans-serif`,
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
export const dark = {
    name: 'dark',
    properties: {
        '--suku-primary-font': `'Poppins', sans-serif`,
        '--suku-secondary-font': `'Encode Sans', sans-serif`,
        '--suku-ternary-font': `'"abelregular", sans-serif`,
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
export const light = {
    name: 'light',
    properties: {
        '--suku-primary-font': `'Source Sans Pro', sans-serif`,
        '--suku-secondary-font': `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
        '--suku-ternary-font': `'"abelregular", sans-serif`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS13ZWJjb21wb25lbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS13ZWJjb21wb25lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRTNDLDJCQUdDOzs7SUFGQyxxQkFBYTs7SUFDYiwyQkFBZ0I7OztBQUdsQixNQUFNLE9BQU8sSUFBSSxHQUFVO0lBQ3pCLElBQUksRUFBRSxNQUFNO0lBQ1osVUFBVSxFQUFFO1FBQ1YscUJBQXFCLEVBQUUsdUJBQXVCO1FBQzlDLHVCQUF1QixFQUFFLDJCQUEyQjtRQUNwRCxxQkFBcUIsRUFBRSwyQkFBMkI7UUFDbEQsc0JBQXNCLEVBQUUsU0FBUztRQUNqQyx3QkFBd0IsRUFBRSxTQUFTO1FBQ25DLHNCQUFzQixFQUFFLFNBQVM7UUFDakMsbUJBQW1CLEVBQUUsU0FBUztRQUM5QixxQkFBcUIsRUFBRSxTQUFTO1FBQ2hDLG1CQUFtQixFQUFFLFNBQVM7UUFDOUIsb0JBQW9CLEVBQUUsU0FBUztRQUMvQiwwQkFBMEIsRUFBRSxTQUFTO1FBQ3JDLDJCQUEyQixFQUFFLFNBQVM7UUFDdEMsNEJBQTRCLEVBQUUsU0FBUztRQUN2QywyQkFBMkIsRUFBRSxTQUFTO1FBQ3RDLHFCQUFxQixFQUFFLFNBQVM7UUFDaEMseUJBQXlCLEVBQUUsU0FBUztRQUNwQyx1QkFBdUIsRUFBRSxTQUFTO1FBQ2xDLHVCQUF1QixFQUFFLFNBQVM7UUFDbEMseUJBQXlCLEVBQUUsU0FBUztRQUNwQyxrQkFBa0IsRUFBRSxTQUFTO1FBQzdCLGtCQUFrQixFQUFFLFNBQVM7UUFDN0IsNkJBQTZCLEVBQUUsU0FBUztRQUN4Qyw2QkFBNkIsRUFBRSxTQUFTO1FBQ3hDLCtCQUErQixFQUFFLFNBQVM7UUFDMUMsOEJBQThCLEVBQUUsWUFBWTtRQUM1Qyxn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QVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztJQUVDLDBDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWUge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwcm9wZXJ0aWVzOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdWt1OiBUaGVtZSA9IHtcclxuICBuYW1lOiAnc3VrdScsXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgJy0tc3VrdS1wcmltYXJ5LWZvbnQnOiBgJ1BvcHBpbnMnLCBzYW5zLXNlcmlmYCxcclxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWZvbnQnOiBgJ0VuY29kZSBTYW5zJywgc2Fucy1zZXJpZmAsXHJcbiAgICAnLS1zdWt1LXRlcm5hcnktZm9udCc6IGAnYWJlbHJlZ3VsYXInLCBzYW5zLXNlcmlmYCxcclxuICAgICctLXN1a3UtcHJpbWFyeS1jb2xvcic6ICcjYTdiZjJlJyxcclxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWNvbG9yJzogJyNkOGZjNDAnLFxyXG4gICAgJy0tc3VrdS13YXJuaW5nLWNvbG9yJzogJyNGRjAwMDAnLFxyXG4gICAgJy0tc3VrdS1iZy1wcmltYXJ5JzogJyMyZjJlMmUnLFxyXG4gICAgJy0tc3VrdS1iZy1zZWNvbmRhcnknOiAnIzI3MjcyNycsXHJcbiAgICAnLS1zdWt1LWJnLXRlcm5hcnknOiAnIzM1MzkzZScsXHJcbiAgICAnLS1zdWt1LWhvbWVwYWdlLWJnJzogJyNmZmZmZmYnLFxyXG4gICAgJy0tc3VrdS1idXR0b24tZGVmYXVsdC1iZyc6ICcjMzAzMDMwJyxcclxuICAgICctLXN1a3UtYnV0dG9uLWRpc2FibGVkLWJnJzogJyNkOWQ5ZDknLFxyXG4gICAgJy0tc3VrdS1pY29uLWRpc2FibGVkLWNvbG9yJzogJyM3ZjdmN2YnLFxyXG4gICAgJy0tc3VrdS1kZWZhdWx0LWljb24tY29sb3InOiAnI2I2YjZiNicsXHJcbiAgICAnLS1zdWt1LXRleHQtaGVhZGluZyc6ICcjMWQxZDFkJyxcclxuICAgICctLXN1a3UtdGV4dC1zdWItaGVhZGluZyc6ICcjY2NjY2NjJyxcclxuICAgICctLXN1a3UtdGV4dC1sYWJlbC1vbmUnOiAnI2I2YjZiNicsXHJcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtdHdvJzogJyNmZmZmZmYnLFxyXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLXRocmVlJzogJyNmMmYyZjInLFxyXG4gICAgJy0tc3VrdS10ZXh0LWxpbmsnOiAnIzNlM2UzZScsXHJcbiAgICAnLS1zdWt1LXRleHQtaW5mbyc6ICcjNzU3NTc1JyxcclxuICAgICctLXN1a3UtcHJpbWFyeS1ib3JkZXItY29sb3InOiAnI2E3YmYyZScsXHJcbiAgICAnLS1zdWt1LWRlZmF1bHQtYm9yZGVyLWNvbG9yJzogJyNlMmUyZTInLFxyXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktYm9yZGVyLWNvbG9yJzogJyM3NTc1NzUnLFxyXG4gICAgJy0tc3VrdS1wcmltYXJ5LWJvcmRlci1yYWRpdXMnOiAnMCA0MHB4IDAgMCcsXHJcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1ib3JkZXItcmFkaXVzJzogJzBweCAwcHggNDFweCA0MXB4JyxcclxuICAgICctLXN1a3Utc2VhcmNoLWJvcmRlci1yYWRpdXMnOiAnMTBweCAxOHB4IDE4cHggMTZweCcsXHJcbiAgICAnLS1zdWt1LWRlZmF1bHQtYm9yZGVyLXJhZGl1cyc6ICcwcHgnLFxyXG4gICAgJy0tc3VrdS1kZWZhdWx0LWJ1dHRvbi1ib3JkZXItcmFkaXVzJzogJzI4cHggNzZweCA2M3B4JyxcclxuICAgICctLXN1a3Utc3Rhci1lbXB0eS1iZyc6ICcjZTFlMWUxJyxcclxuICAgICctLXN1a3Utc3Rhci1mdWxsLWJnJzogJ3JnYigxMzcsIDEzNywgMTM3KScsXHJcbiAgICAnLS1zdWt1LXN0YXItc2l6ZSc6ICcyMHB4JyxcclxuICAgICctLXN1a3UtZmlsdGVyLWJnJzogJyNmZmZmZmYnLFxyXG4gICAgJy0tc3VrdS1kZWZhdWx0LWJnJzogJyNmZmZmZmYnLFxyXG4gICAgJy0tc3VrdS1maWx0ZXItbGFiZWwnOiAnI2I2YjZiNicsXHJcbiAgICAnLS1zdWt1LWZpbHRlci1sYWJlbC1zZWxlY3RlZCc6ICdibGFjaycsXHJcbiAgICAnLS1zdWt1LXByb2dyZXNzYmFyLWFjdGl2ZS1iZyc6ICcjYTdiZjJlJyxcclxuICAgICctLXN1a3UtcHJvZ3Jlc3NiYXItdXBjb21pbmctYmcnOiAnIzc1NzU3NScsXHJcbiAgICAnLS1zdWt1LXByb2dyZXNzYmFyLWNvbXBsZXRlZC1iZyc6ICcjMWMxYzFjJyxcclxuICAgICctLXN1a3UtcHJvZmlsZS1iZy1jb2xvcic6ICcjYjZiNmI2JyxcclxuICAgICctLXN1a3UtcHJvZmlsZS10ZXh0LW9uZSc6ICcjZGNkOGQ4ZjAnLFxyXG4gICAgJy0tc3VrdS1wcm9maWxlLXRleHQtdHdvJzogJyM1MDRlNGUnLFxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtMSc6ICcxMXB4JywgLy8gMC43NXJlbVxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtMic6ICcxMnB4JywgLy8gMC44NzVyZW1cclxuICAgICctLXN1a3UtZm9udC1zaXplLTMnOiAnMTRweCcsIC8vIDEuMDYyNXJlbVxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtNCc6ICcxNXB4JywgLy8gMS4wNjI1cmVtbVxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtNSc6ICcxN3B4JywgLy8gMS4yNXJlbVxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtNic6ICcyMHB4JywgLy8gMS41cmVtXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS03JzogJzIycHgnLCAvLyAxLjYyNXJlbVxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtOCc6ICcyNHB4JywgLy8gMS42MjVyZW1cclxuICAgICctLXN1a3UtZm9udC1zaXplLTknOiAnMjZweCcsIC8vIDEuODc1cmVtXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0xMCc6ICczMHB4JywgLy8gMS44NzVyZW1cclxuICAgICctLXN1a3UtZm9udC1zaXplLTExJzogJzUwcHgnLCAgLy8gMS44NzVyZW1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGFyazogVGhlbWUgPSB7XHJcbiAgbmFtZTogJ2RhcmsnLFxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgICctLXN1a3UtcHJpbWFyeS1mb250JzogYCdQb3BwaW5zJywgc2Fucy1zZXJpZmAsXHJcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1mb250JzogYCdFbmNvZGUgU2FucycsIHNhbnMtc2VyaWZgLFxyXG4gICAgJy0tc3VrdS10ZXJuYXJ5LWZvbnQnOiBgJ1wiYWJlbHJlZ3VsYXJcIiwgc2Fucy1zZXJpZmAsXHJcbiAgICAnLS1zdWt1LXByaW1hcnktY29sb3InOiAnIzM2M2I0ZScsXHJcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1jb2xvcic6ICcjZDhmYzQwJyxcclxuICAgICctLXN1a3Utd2FybmluZy1jb2xvcic6ICcjRkYwMDAwJyxcclxuICAgICctLXN1a3UtYmctcHJpbWFyeSc6ICcjMzYzYjRlJyxcclxuICAgICctLXN1a3UtYmctc2Vjb25kYXJ5JzogJyMyNzI3MjcnLFxyXG4gICAgJy0tc3VrdS1iZy10ZXJuYXJ5JzogJyMzNTM5M2UnLFxyXG4gICAgJy0tc3VrdS1ob21lcGFnZS1iZyc6ICcjZmZmZmZmJyxcclxuICAgICctLXN1a3UtYnV0dG9uLWRlZmF1bHQtYmcnOiAnIzMwMzAzMCcsXHJcbiAgICAnLS1zdWt1LWJ1dHRvbi1kaXNhYmxlZC1iZyc6ICcjZDlkOWQ5JyxcclxuICAgICctLXN1a3UtaWNvbi1kaXNhYmxlZC1jb2xvcic6ICcjN2Y3ZjdmJyxcclxuICAgICctLXN1a3UtZGVmYXVsdC1pY29uLWNvbG9yJzogJyNiNmI2YjYnLFxyXG4gICAgJy0tc3VrdS10ZXh0LWhlYWRpbmcnOiAnIzFkMWQxZCcsXHJcbiAgICAnLS1zdWt1LXRleHQtc3ViLWhlYWRpbmcnOiAnI2YyZjJmMicsXHJcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtb25lJzogJyNiNmI2YjYnLFxyXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLXR3byc6ICcjZmZmZmZmJyxcclxuICAgICctLXN1a3UtdGV4dC1sYWJlbC10aHJlZSc6ICcjZjJmMmYyJyxcclxuICAgICctLXN1a3UtdGV4dC1saW5rJzogJyMzZTNlM2UnLFxyXG4gICAgJy0tc3VrdS10ZXh0LWluZm8nOiAnIzc1NzU3NScsXHJcbiAgICAnLS1zdWt1LXByaW1hcnktYm9yZGVyLWNvbG9yJzogJyNmMmYyZjInLFxyXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktYm9yZGVyLWNvbG9yJzogJyM3NTc1NzUnLFxyXG4gICAgJy0tc3VrdS1wcmltYXJ5LWJvcmRlci1yYWRpdXMnOiAnMCcsXHJcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1ib3JkZXItcmFkaXVzJzogJzBweCAwcHggNDFweCA0MXB4JyxcclxuICAgICctLXN1a3UtZGVmYXVsdC1ib3JkZXItcmFkaXVzJzogJzBweCAyMHB4IDE1cHgnLFxyXG4gICAgJy0tc3VrdS1kZWZhdWx0LWJ1dHRvbi1ib3JkZXItcmFkaXVzJzogJzI4cHggNzZweCA2M3B4JyxcclxuICAgICctLXN1a3Utc2VhcmNoLWJvcmRlci1yYWRpdXMnOiAnMTBweCAxOHB4IDE4cHggMTZweCcsXHJcbiAgICAnLS1zdWt1LXN0YXItZW1wdHktYmcnOiAnI2UxZTFlMScsXHJcbiAgICAnLS1zdWt1LXN0YXItZnVsbC1iZyc6ICdyZ2IoMTM3LCAxMzcsIDEzNyknLFxyXG4gICAgJy0tc3VrdS1zdGFyLXNpemUnOiAnMjBweCcsXHJcbiAgICAnLS1zdWt1LWZpbHRlci1iZyc6ICdibGFjaycsXHJcbiAgICAnLS1zdWt1LWZpbHRlci1sYWJlbCc6ICcjYjZiNmI2JyxcclxuICAgICctLXN1a3UtZmlsdGVyLWxhYmVsLXNlbGVjdGVkJzogJyNmZmZmZmYnLFxyXG4gICAgJy0tc3VrdS1wcm9ncmVzc2Jhci1pbnByb2dyZXNzLWJnJzogJyNhN2JmMmUnLFxyXG4gICAgJy0tc3VrdS1wcm9ncmVzc2Jhci11cGNvbWluZy1iZyc6ICcjNzU3NTc1JyxcclxuICAgICctLXN1a3UtcHJvZ3Jlc3NiYXItY29tcGxldGVkLWJnJzogJyMxYzFjMWMnLFxyXG4gICAgJy0tc3VrdS1zdWJtZW51LWJnLWNvbG9yJzogJycsXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0xJzogJzAuNzVyZW0nLCAvLyAxMnB4XHQtIDAuNzVyZW1cclxuICAgICctLXN1a3UtZm9udC1zaXplLTInOiAnMC44NzVyZW0nLCAvLyAxNHB4XHQwLjg3NXJlbVxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtMyc6ICcxLjA2cmVtJywgLy8gMTdweFx0MS4wNjI1cmVtXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS00JzogJzEuMjVyZW0nLCAvLyAyMHB4XHQxLjI1cmVtXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS01JzogJzEuNXJlbScsIC8vICAyNHB4XHQxLjVyZW1cclxuICAgICctLXN1a3UtZm9udC1zaXplLTYnOiAnMS42MjVyZW0nLCAvLyAyNnB4XHQxLjYyNXJlbVxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtNyc6ICcxLjhyZW0nLCAvLyAgMzBweFx0MS44NzVyZW1cclxuICAgICctLXN1a3UtZm9udC1zaXplLTgnOiAnMnJlbScsIC8vICAzMnB4XHQxLjg3NXJlbVxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtMTAnOiAnM3JlbScsIC8vIDMwcHhcdDEuODc1cmVtXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0xMSc6ICczLjVyZW0nICAvLyA1MHB4XHQxLjg3NXJlbVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaWdodDogVGhlbWUgPSB7XHJcbiAgbmFtZTogJ2xpZ2h0JyxcclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAnLS1zdWt1LXByaW1hcnktZm9udCc6IGAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZmAsXHJcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1mb250JzogYFNGTW9uby1SZWd1bGFyLE1lbmxvLE1vbmFjbyxDb25zb2xhcyxcIkxpYmVyYXRpb24gTW9ub1wiLFwiQ291cmllciBOZXdcIixtb25vc3BhY2VgLFxyXG4gICAgJy0tc3VrdS10ZXJuYXJ5LWZvbnQnOiBgJ1wiYWJlbHJlZ3VsYXJcIiwgc2Fucy1zZXJpZmAsXHJcbiAgICAnLS1zdWt1LXByaW1hcnktY29sb3InOiAnI2E3YmYyZScsXHJcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1jb2xvcic6ICcjYjNiM2IzJyxcclxuICAgICctLXN1a3Utd2FybmluZy1jb2xvcic6ICcjRkYwMDAwJyxcclxuICAgICctLXN1a3UtYmctcHJpbWFyeSc6ICcjYTZjMzZmJyxcclxuICAgICctLXN1a3UtYmctc2Vjb25kYXJ5JzogJyMyODI4MjgnLFxyXG4gICAgJy0tc3VrdS1iZy10ZXJuYXJ5JzogJyMzNTM5M2UnLFxyXG4gICAgJy0tc3VrdS1ob21lcGFnZS1iZyc6ICcjZmZmZmZmJyxcclxuICAgICctLXN1a3UtYnV0dG9uLWRlZmF1bHQtYmcnOiAnIzMwMzAzMCcsXHJcbiAgICAnLS1zdWt1LWJ1dHRvbi1kaXNhYmxlZC1iZyc6ICcjZDlkOWQ5JyxcclxuICAgICctLXN1a3UtaWNvbi1kaXNhYmxlZC1jb2xvcic6ICcjN2Y3ZjdmJyxcclxuICAgICctLXN1a3UtZGVmYXVsdC1pY29uLWNvbG9yJzogJyNiNmI2YjYnLFxyXG4gICAgJy0tc3VrdS10ZXh0LWhlYWRpbmcnOiAnIzFkMWQxZCcsXHJcbiAgICAnLS1zdWt1LXRleHQtc3ViLWhlYWRpbmcnOiAnIzFkMWQxZCcsXHJcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtb25lJzogJyNiNmI2YjYnLFxyXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLXR3byc6ICdibGFjaycsXHJcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtdGhyZWUnOiAnI2YyZjJmMicsXHJcbiAgICAnLS1zdWt1LXRleHQtbGluayc6ICcjM2UzZTNlJyxcclxuICAgICctLXN1a3UtdGV4dC1pbmZvJzogJyM3NTc1NzUnLFxyXG4gICAgJy0tc3VrdS1wcmltYXJ5LWJvcmRlci1jb2xvcic6ICcjMTUxNTE1JyxcclxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWJvcmRlci1jb2xvcic6ICcjNzU3NTc1JyxcclxuICAgICctLXN1a3UtcHJpbWFyeS1ib3JkZXItcmFkaXVzJzogJzBweCAxNXB4IDEwcHggMHB4JyxcclxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMnOiAnMHB4IDBweCA0MXB4IDQxcHgnLFxyXG4gICAgJy0tc3VrdS1kZWZhdWx0LWJvcmRlci1yYWRpdXMnOiAnMTBweCAxMHB4IDIwcHggNXB4JyxcclxuICAgICctLXN1a3UtZGVmYXVsdC1idXR0b24tYm9yZGVyLXJhZGl1cyc6ICcyOHB4IDc2cHggNjNweCcsXHJcbiAgICAnLS1zdWt1LXNlYXJjaC1ib3JkZXItcmFkaXVzJzogJzEwcHggMThweCAxOHB4IDE2cHgnLFxyXG4gICAgJy0tc3VrdS1maWx0ZXItYmcnOiAnYmxhY2snLFxyXG4gICAgJy0tc3VrdS1maWx0ZXItbGFiZWwnOiAnI2I2YjZiNicsXHJcbiAgICAnLS1zdWt1LWZpbHRlci1sYWJlbC1zZWxlY3RlZCc6ICcjZmZmZmZmJyxcclxuICAgICctLXN1a3UtcHJvZ3Jlc3NiYXItYWN0aXZlLWJnJzogJyNhN2JmMmUnLFxyXG4gICAgJy0tc3VrdS1wcm9ncmVzc2Jhci11cGNvbWluZy1iZyc6ICcjNzU3NTc1JyxcclxuICAgICctLXN1a3UtcHJvZ3Jlc3NiYXItY29tcGxldGVkLWJnJzogJyMxYzFjMWMnLFxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtMSc6ICcwLjc1cmVtJywgLy8gMTJweFx0LSAwLjc1cmVtXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0yJzogJzAuODc1cmVtJywgLy8gMTRweFx0MC44NzVyZW1cclxuICAgICctLXN1a3UtZm9udC1zaXplLTMnOiAnMS4wNnJlbScsIC8vIDE3cHhcdDEuMDYyNXJlbVxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtNCc6ICcxLjI1cmVtJywgLy8gMjBweFx0MS4yNXJlbVxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtNSc6ICcxLjVyZW0nLCAvLyAgMjRweFx0MS41cmVtXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS02JzogJzEuNjI1cmVtJywgLy8gMjZweFx0MS42MjVyZW1cclxuICAgICctLXN1a3UtZm9udC1zaXplLTcnOiAnMS44cmVtJywgLy8gIDMwcHhcdDEuODc1cmVtXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS04JzogJzJyZW0nLCAvLyAgMzJweFx0MS44NzVyZW1cclxuICAgICctLXN1a3UtZm9udC1zaXplLTEwJzogJzNyZW0nLCAvLyAzMHB4XHQxLjg3NXJlbVxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtMTEnOiAnMy41cmVtJyAgLy8gNTBweFx0MS44NzVyZW1cclxuICB9XHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1V2ViY29tcG9uZW50c1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgYWN0aXZlOiBUaGVtZSA9IHN1a3U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldExpZ2h0VGhlbWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldEFjdGl2ZVRoZW1lKGxpZ2h0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXREYXJrVGhlbWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldEFjdGl2ZVRoZW1lKGRhcmspO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFN1a3VUaGVtZSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdzdWt1Jyk7XHJcbiAgICB0aGlzLnNldEFjdGl2ZVRoZW1lKHN1a3UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRBY3RpdmVUaGVtZSh0aGVtZTogVGhlbWUpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlID0gdGhlbWU7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmFjdGl2ZS5wcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHRoaXMuYWN0aXZlLnByb3BlcnRpZXNbcHJvcGVydHldKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=