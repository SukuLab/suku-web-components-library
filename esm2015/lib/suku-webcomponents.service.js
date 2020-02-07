/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-webcomponents.service.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS13ZWJjb21wb25lbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS13ZWJjb21wb25lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQUUzQywyQkFHQzs7O0lBRkMscUJBQWE7O0lBQ2IsMkJBQWdCOzs7QUFHbEIsTUFBTSxPQUFPLElBQUksR0FBVTtJQUN6QixJQUFJLEVBQUUsTUFBTTtJQUNaLFVBQVUsRUFBRTtRQUNWLHFCQUFxQixFQUFFLHVCQUF1QjtRQUM5Qyx1QkFBdUIsRUFBRSwyQkFBMkI7UUFDcEQscUJBQXFCLEVBQUUsMkJBQTJCO1FBQ2xELHNCQUFzQixFQUFFLFNBQVM7UUFDakMsd0JBQXdCLEVBQUUsU0FBUztRQUNuQyxzQkFBc0IsRUFBRSxTQUFTO1FBQ2pDLG1CQUFtQixFQUFFLFNBQVM7UUFDOUIscUJBQXFCLEVBQUUsU0FBUztRQUNoQyxtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLG9CQUFvQixFQUFFLFNBQVM7UUFDL0IsMEJBQTBCLEVBQUUsU0FBUztRQUNyQywyQkFBMkIsRUFBRSxTQUFTO1FBQ3RDLDRCQUE0QixFQUFFLFNBQVM7UUFDdkMsMkJBQTJCLEVBQUUsU0FBUztRQUN0QyxxQkFBcUIsRUFBRSxTQUFTO1FBQ2hDLHlCQUF5QixFQUFFLFNBQVM7UUFDcEMsdUJBQXVCLEVBQUUsU0FBUztRQUNsQyx1QkFBdUIsRUFBRSxTQUFTO1FBQ2xDLHlCQUF5QixFQUFFLFNBQVM7UUFDcEMsa0JBQWtCLEVBQUUsU0FBUztRQUM3QixrQkFBa0IsRUFBRSxTQUFTO1FBQzdCLDZCQUE2QixFQUFFLFNBQVM7UUFDeEMsNkJBQTZCLEVBQUUsU0FBUztRQUN4QywrQkFBK0IsRUFBRSxTQUFTO1FBQzFDLDhCQUE4QixFQUFFLFlBQVk7UUFDNUMs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QUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7SUFFQywwQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWUge1xuICBuYW1lOiBzdHJpbmc7XG4gIHByb3BlcnRpZXM6IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IHN1a3U6IFRoZW1lID0ge1xuICBuYW1lOiAnc3VrdScsXG4gIHByb3BlcnRpZXM6IHtcbiAgICAnLS1zdWt1LXByaW1hcnktZm9udCc6IGAnUG9wcGlucycsIHNhbnMtc2VyaWZgLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWZvbnQnOiBgJ0VuY29kZSBTYW5zJywgc2Fucy1zZXJpZmAsXG4gICAgJy0tc3VrdS10ZXJuYXJ5LWZvbnQnOiBgJ2FiZWxyZWd1bGFyJywgc2Fucy1zZXJpZmAsXG4gICAgJy0tc3VrdS1wcmltYXJ5LWNvbG9yJzogJyNhN2JmMmUnLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWNvbG9yJzogJyNkOGZjNDAnLFxuICAgICctLXN1a3Utd2FybmluZy1jb2xvcic6ICcjRkYwMDAwJyxcbiAgICAnLS1zdWt1LWJnLXByaW1hcnknOiAnIzJmMmUyZScsXG4gICAgJy0tc3VrdS1iZy1zZWNvbmRhcnknOiAnIzI3MjcyNycsXG4gICAgJy0tc3VrdS1iZy10ZXJuYXJ5JzogJyMzNTM5M2UnLFxuICAgICctLXN1a3UtaG9tZXBhZ2UtYmcnOiAnI2ZmZmZmZicsXG4gICAgJy0tc3VrdS1idXR0b24tZGVmYXVsdC1iZyc6ICcjMzAzMDMwJyxcbiAgICAnLS1zdWt1LWJ1dHRvbi1kaXNhYmxlZC1iZyc6ICcjZDlkOWQ5JyxcbiAgICAnLS1zdWt1LWljb24tZGlzYWJsZWQtY29sb3InOiAnIzdmN2Y3ZicsXG4gICAgJy0tc3VrdS1kZWZhdWx0LWljb24tY29sb3InOiAnI2I2YjZiNicsXG4gICAgJy0tc3VrdS10ZXh0LWhlYWRpbmcnOiAnIzFkMWQxZCcsXG4gICAgJy0tc3VrdS10ZXh0LXN1Yi1oZWFkaW5nJzogJyNjY2NjY2MnLFxuICAgICctLXN1a3UtdGV4dC1sYWJlbC1vbmUnOiAnI2I2YjZiNicsXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLXR3byc6ICcjZmZmZmZmJyxcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtdGhyZWUnOiAnI2YyZjJmMicsXG4gICAgJy0tc3VrdS10ZXh0LWxpbmsnOiAnIzNlM2UzZScsXG4gICAgJy0tc3VrdS10ZXh0LWluZm8nOiAnIzc1NzU3NScsXG4gICAgJy0tc3VrdS1wcmltYXJ5LWJvcmRlci1jb2xvcic6ICcjYTdiZjJlJyxcbiAgICAnLS1zdWt1LWRlZmF1bHQtYm9yZGVyLWNvbG9yJzogJyNlMmUyZTInLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWJvcmRlci1jb2xvcic6ICcjNzU3NTc1JyxcbiAgICAnLS1zdWt1LXByaW1hcnktYm9yZGVyLXJhZGl1cyc6ICcwIDQwcHggMCAwJyxcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1ib3JkZXItcmFkaXVzJzogJzBweCAwcHggNDFweCA0MXB4JyxcbiAgICAnLS1zdWt1LXNlYXJjaC1ib3JkZXItcmFkaXVzJzogJzEwcHggMThweCAxOHB4IDE2cHgnLFxuICAgICctLXN1a3UtZGVmYXVsdC1ib3JkZXItcmFkaXVzJzogJzBweCcsXG4gICAgJy0tc3VrdS1kZWZhdWx0LWJ1dHRvbi1ib3JkZXItcmFkaXVzJzogJzI4cHggNzZweCA2M3B4JyxcbiAgICAnLS1zdWt1LXN0YXItZW1wdHktYmcnOiAnI2UxZTFlMScsXG4gICAgJy0tc3VrdS1zdGFyLWZ1bGwtYmcnOiAncmdiKDEzNywgMTM3LCAxMzcpJyxcbiAgICAnLS1zdWt1LXN0YXItc2l6ZSc6ICcyMHB4JyxcbiAgICAnLS1zdWt1LWZpbHRlci1iZyc6ICcjZmZmZmZmJyxcbiAgICAnLS1zdWt1LWRlZmF1bHQtYmcnOiAnI2ZmZmZmZicsXG4gICAgJy0tc3VrdS1maWx0ZXItbGFiZWwnOiAnI2I2YjZiNicsXG4gICAgJy0tc3VrdS1maWx0ZXItbGFiZWwtc2VsZWN0ZWQnOiAnYmxhY2snLFxuICAgICctLXN1a3UtcHJvZ3Jlc3NiYXItYWN0aXZlLWJnJzogJyNhN2JmMmUnLFxuICAgICctLXN1a3UtcHJvZ3Jlc3NiYXItdXBjb21pbmctYmcnOiAnIzc1NzU3NScsXG4gICAgJy0tc3VrdS1wcm9ncmVzc2Jhci1jb21wbGV0ZWQtYmcnOiAnIzFjMWMxYycsXG4gICAgJy0tc3VrdS1wcm9maWxlLWJnLWNvbG9yJzogJyNiNmI2YjYnLFxuICAgICctLXN1a3UtcHJvZmlsZS10ZXh0LW9uZSc6ICcjZGNkOGQ4ZjAnLFxuICAgICctLXN1a3UtcHJvZmlsZS10ZXh0LXR3byc6ICcjNTA0ZTRlJyxcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0xJzogJzExcHgnLCAvLyAwLjc1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtMic6ICcxMnB4JywgLy8gMC44NzVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0zJzogJzE0cHgnLCAvLyAxLjA2MjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS00JzogJzE1cHgnLCAvLyAxLjA2MjVyZW1tXG4gICAgJy0tc3VrdS1mb250LXNpemUtNSc6ICcxN3B4JywgLy8gMS4yNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTYnOiAnMjBweCcsIC8vIDEuNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTcnOiAnMjJweCcsIC8vIDEuNjI1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtOCc6ICcyNHB4JywgLy8gMS42MjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS05JzogJzI2cHgnLCAvLyAxLjg3NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTEwJzogJzMwcHgnLCAvLyAxLjg3NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTExJzogJzUwcHgnLCAgLy8gMS44NzVyZW1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRhcms6IFRoZW1lID0ge1xuICBuYW1lOiAnZGFyaycsXG4gIHByb3BlcnRpZXM6IHtcbiAgICAnLS1zdWt1LXByaW1hcnktZm9udCc6IGAnUG9wcGlucycsIHNhbnMtc2VyaWZgLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWZvbnQnOiBgJ0VuY29kZSBTYW5zJywgc2Fucy1zZXJpZmAsXG4gICAgJy0tc3VrdS10ZXJuYXJ5LWZvbnQnOiBgJ1wiYWJlbHJlZ3VsYXJcIiwgc2Fucy1zZXJpZmAsXG4gICAgJy0tc3VrdS1wcmltYXJ5LWNvbG9yJzogJyMzNjNiNGUnLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWNvbG9yJzogJyNkOGZjNDAnLFxuICAgICctLXN1a3Utd2FybmluZy1jb2xvcic6ICcjRkYwMDAwJyxcbiAgICAnLS1zdWt1LWJnLXByaW1hcnknOiAnIzM2M2I0ZScsXG4gICAgJy0tc3VrdS1iZy1zZWNvbmRhcnknOiAnIzI3MjcyNycsXG4gICAgJy0tc3VrdS1iZy10ZXJuYXJ5JzogJyMzNTM5M2UnLFxuICAgICctLXN1a3UtaG9tZXBhZ2UtYmcnOiAnI2ZmZmZmZicsXG4gICAgJy0tc3VrdS1idXR0b24tZGVmYXVsdC1iZyc6ICcjMzAzMDMwJyxcbiAgICAnLS1zdWt1LWJ1dHRvbi1kaXNhYmxlZC1iZyc6ICcjZDlkOWQ5JyxcbiAgICAnLS1zdWt1LWljb24tZGlzYWJsZWQtY29sb3InOiAnIzdmN2Y3ZicsXG4gICAgJy0tc3VrdS1kZWZhdWx0LWljb24tY29sb3InOiAnI2I2YjZiNicsXG4gICAgJy0tc3VrdS10ZXh0LWhlYWRpbmcnOiAnIzFkMWQxZCcsXG4gICAgJy0tc3VrdS10ZXh0LXN1Yi1oZWFkaW5nJzogJyNmMmYyZjInLFxuICAgICctLXN1a3UtdGV4dC1sYWJlbC1vbmUnOiAnI2I2YjZiNicsXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLXR3byc6ICcjZmZmZmZmJyxcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtdGhyZWUnOiAnI2YyZjJmMicsXG4gICAgJy0tc3VrdS10ZXh0LWxpbmsnOiAnIzNlM2UzZScsXG4gICAgJy0tc3VrdS10ZXh0LWluZm8nOiAnIzc1NzU3NScsXG4gICAgJy0tc3VrdS1wcmltYXJ5LWJvcmRlci1jb2xvcic6ICcjZjJmMmYyJyxcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1ib3JkZXItY29sb3InOiAnIzc1NzU3NScsXG4gICAgJy0tc3VrdS1wcmltYXJ5LWJvcmRlci1yYWRpdXMnOiAnMCcsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1cyc6ICcwcHggMHB4IDQxcHggNDFweCcsXG4gICAgJy0tc3VrdS1kZWZhdWx0LWJvcmRlci1yYWRpdXMnOiAnMHB4IDIwcHggMTVweCcsXG4gICAgJy0tc3VrdS1kZWZhdWx0LWJ1dHRvbi1ib3JkZXItcmFkaXVzJzogJzI4cHggNzZweCA2M3B4JyxcbiAgICAnLS1zdWt1LXNlYXJjaC1ib3JkZXItcmFkaXVzJzogJzEwcHggMThweCAxOHB4IDE2cHgnLFxuICAgICctLXN1a3Utc3Rhci1lbXB0eS1iZyc6ICcjZTFlMWUxJyxcbiAgICAnLS1zdWt1LXN0YXItZnVsbC1iZyc6ICdyZ2IoMTM3LCAxMzcsIDEzNyknLFxuICAgICctLXN1a3Utc3Rhci1zaXplJzogJzIwcHgnLFxuICAgICctLXN1a3UtZmlsdGVyLWJnJzogJ2JsYWNrJyxcbiAgICAnLS1zdWt1LWZpbHRlci1sYWJlbCc6ICcjYjZiNmI2JyxcbiAgICAnLS1zdWt1LWZpbHRlci1sYWJlbC1zZWxlY3RlZCc6ICcjZmZmZmZmJyxcbiAgICAnLS1zdWt1LXByb2dyZXNzYmFyLWlucHJvZ3Jlc3MtYmcnOiAnI2E3YmYyZScsXG4gICAgJy0tc3VrdS1wcm9ncmVzc2Jhci11cGNvbWluZy1iZyc6ICcjNzU3NTc1JyxcbiAgICAnLS1zdWt1LXByb2dyZXNzYmFyLWNvbXBsZXRlZC1iZyc6ICcjMWMxYzFjJyxcbiAgICAnLS1zdWt1LXN1Ym1lbnUtYmctY29sb3InOiAnJyxcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0xJzogJzAuNzVyZW0nLCAvLyAxMnB4XHQtIDAuNzVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0yJzogJzAuODc1cmVtJywgLy8gMTRweFx0MC44NzVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0zJzogJzEuMDZyZW0nLCAvLyAxN3B4XHQxLjA2MjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS00JzogJzEuMjVyZW0nLCAvLyAyMHB4XHQxLjI1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtNSc6ICcxLjVyZW0nLCAvLyAgMjRweFx0MS41cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtNic6ICcxLjYyNXJlbScsIC8vIDI2cHhcdDEuNjI1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtNyc6ICcxLjhyZW0nLCAvLyAgMzBweFx0MS44NzVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS04JzogJzJyZW0nLCAvLyAgMzJweFx0MS44NzVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0xMCc6ICczcmVtJywgLy8gMzBweFx0MS44NzVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0xMSc6ICczLjVyZW0nICAvLyA1MHB4XHQxLjg3NXJlbVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbGlnaHQ6IFRoZW1lID0ge1xuICBuYW1lOiAnbGlnaHQnLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgJy0tc3VrdS1wcmltYXJ5LWZvbnQnOiBgJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWZgLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWZvbnQnOiBgU0ZNb25vLVJlZ3VsYXIsTWVubG8sTW9uYWNvLENvbnNvbGFzLFwiTGliZXJhdGlvbiBNb25vXCIsXCJDb3VyaWVyIE5ld1wiLG1vbm9zcGFjZWAsXG4gICAgJy0tc3VrdS10ZXJuYXJ5LWZvbnQnOiBgJ1wiYWJlbHJlZ3VsYXJcIiwgc2Fucy1zZXJpZmAsXG4gICAgJy0tc3VrdS1wcmltYXJ5LWNvbG9yJzogJyNhN2JmMmUnLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWNvbG9yJzogJyNiM2IzYjMnLFxuICAgICctLXN1a3Utd2FybmluZy1jb2xvcic6ICcjRkYwMDAwJyxcbiAgICAnLS1zdWt1LWJnLXByaW1hcnknOiAnI2E2YzM2ZicsXG4gICAgJy0tc3VrdS1iZy1zZWNvbmRhcnknOiAnIzI4MjgyOCcsXG4gICAgJy0tc3VrdS1iZy10ZXJuYXJ5JzogJyMzNTM5M2UnLFxuICAgICctLXN1a3UtaG9tZXBhZ2UtYmcnOiAnI2ZmZmZmZicsXG4gICAgJy0tc3VrdS1idXR0b24tZGVmYXVsdC1iZyc6ICcjMzAzMDMwJyxcbiAgICAnLS1zdWt1LWJ1dHRvbi1kaXNhYmxlZC1iZyc6ICcjZDlkOWQ5JyxcbiAgICAnLS1zdWt1LWljb24tZGlzYWJsZWQtY29sb3InOiAnIzdmN2Y3ZicsXG4gICAgJy0tc3VrdS1kZWZhdWx0LWljb24tY29sb3InOiAnI2I2YjZiNicsXG4gICAgJy0tc3VrdS10ZXh0LWhlYWRpbmcnOiAnIzFkMWQxZCcsXG4gICAgJy0tc3VrdS10ZXh0LXN1Yi1oZWFkaW5nJzogJyMxZDFkMWQnLFxuICAgICctLXN1a3UtdGV4dC1sYWJlbC1vbmUnOiAnI2I2YjZiNicsXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLXR3byc6ICdibGFjaycsXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLXRocmVlJzogJyNmMmYyZjInLFxuICAgICctLXN1a3UtdGV4dC1saW5rJzogJyMzZTNlM2UnLFxuICAgICctLXN1a3UtdGV4dC1pbmZvJzogJyM3NTc1NzUnLFxuICAgICctLXN1a3UtcHJpbWFyeS1ib3JkZXItY29sb3InOiAnIzE1MTUxNScsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktYm9yZGVyLWNvbG9yJzogJyM3NTc1NzUnLFxuICAgICctLXN1a3UtcHJpbWFyeS1ib3JkZXItcmFkaXVzJzogJzBweCAxNXB4IDEwcHggMHB4JyxcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1ib3JkZXItcmFkaXVzJzogJzBweCAwcHggNDFweCA0MXB4JyxcbiAgICAnLS1zdWt1LWRlZmF1bHQtYm9yZGVyLXJhZGl1cyc6ICcxMHB4IDEwcHggMjBweCA1cHgnLFxuICAgICctLXN1a3UtZGVmYXVsdC1idXR0b24tYm9yZGVyLXJhZGl1cyc6ICcyOHB4IDc2cHggNjNweCcsXG4gICAgJy0tc3VrdS1zZWFyY2gtYm9yZGVyLXJhZGl1cyc6ICcxMHB4IDE4cHggMThweCAxNnB4JyxcbiAgICAnLS1zdWt1LWZpbHRlci1iZyc6ICdibGFjaycsXG4gICAgJy0tc3VrdS1maWx0ZXItbGFiZWwnOiAnI2I2YjZiNicsXG4gICAgJy0tc3VrdS1maWx0ZXItbGFiZWwtc2VsZWN0ZWQnOiAnI2ZmZmZmZicsXG4gICAgJy0tc3VrdS1wcm9ncmVzc2Jhci1hY3RpdmUtYmcnOiAnI2E3YmYyZScsXG4gICAgJy0tc3VrdS1wcm9ncmVzc2Jhci11cGNvbWluZy1iZyc6ICcjNzU3NTc1JyxcbiAgICAnLS1zdWt1LXByb2dyZXNzYmFyLWNvbXBsZXRlZC1iZyc6ICcjMWMxYzFjJyxcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0xJzogJzAuNzVyZW0nLCAvLyAxMnB4XHQtIDAuNzVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0yJzogJzAuODc1cmVtJywgLy8gMTRweFx0MC44NzVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0zJzogJzEuMDZyZW0nLCAvLyAxN3B4XHQxLjA2MjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS00JzogJzEuMjVyZW0nLCAvLyAyMHB4XHQxLjI1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtNSc6ICcxLjVyZW0nLCAvLyAgMjRweFx0MS41cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtNic6ICcxLjYyNXJlbScsIC8vIDI2cHhcdDEuNjI1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtNyc6ICcxLjhyZW0nLCAvLyAgMzBweFx0MS44NzVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS04JzogJzJyZW0nLCAvLyAgMzJweFx0MS44NzVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0xMCc6ICczcmVtJywgLy8gMzBweFx0MS44NzVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0xMSc6ICczLjVyZW0nICAvLyA1MHB4XHQxLjg3NXJlbVxuICB9XG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdWt1V2ViY29tcG9uZW50c1NlcnZpY2Uge1xuICBwcml2YXRlIGFjdGl2ZTogVGhlbWUgPSBzdWt1O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgcHVibGljIHNldExpZ2h0VGhlbWUoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRBY3RpdmVUaGVtZShsaWdodCk7XG4gIH1cblxuICBwdWJsaWMgc2V0RGFya1RoZW1lKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0QWN0aXZlVGhlbWUoZGFyayk7XG4gIH1cblxuICBwdWJsaWMgc2V0U3VrdVRoZW1lKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdzdWt1Jyk7XG4gICAgdGhpcy5zZXRBY3RpdmVUaGVtZShzdWt1KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0QWN0aXZlVGhlbWUodGhlbWU6IFRoZW1lKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmUgPSB0aGVtZTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmFjdGl2ZS5wcm9wZXJ0aWVzKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB0aGlzLmFjdGl2ZS5wcm9wZXJ0aWVzW3Byb3BlcnR5XSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==