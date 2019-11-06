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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS13ZWJjb21wb25lbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS13ZWJjb21wb25lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRTNDLDJCQUdDOzs7SUFGQyxxQkFBYTs7SUFDYiwyQkFBZ0I7OztBQUdsQixNQUFNLEtBQU8sSUFBSSxHQUFVO0lBQ3pCLElBQUksRUFBRSxNQUFNO0lBQ1osVUFBVSxFQUFFO1FBQ1YscUJBQXFCLEVBQUUsdUJBQXVCO1FBQzlDLHVCQUF1QixFQUFFLDJCQUEyQjtRQUNwRCxxQkFBcUIsRUFBRSwyQkFBMkI7UUFDbEQsc0JBQXNCLEVBQUUsU0FBUztRQUNqQyx3QkFBd0IsRUFBRSxTQUFTO1FBQ25DLHNCQUFzQixFQUFFLFNBQVM7UUFDakMsbUJBQW1CLEVBQUUsU0FBUztRQUM5QixxQkFBcUIsRUFBRSxTQUFTO1FBQ2hDLG1CQUFtQixFQUFFLFNBQVM7UUFDOUIsb0JBQW9CLEVBQUUsU0FBUztRQUMvQiwwQkFBMEIsRUFBRSxTQUFTO1FBQ3JDLDJCQUEyQixFQUFFLFNBQVM7UUFDdEMsNEJBQTRCLEVBQUUsU0FBUztRQUN2QywyQkFBMkIsRUFBRSxTQUFTO1FBQ3RDLHFCQUFxQixFQUFFLFNBQVM7UUFDaEMseUJBQXlCLEVBQUUsU0FBUztRQUNwQyx1QkFBdUIsRUFBRSxTQUFTO1FBQ2xDLHVCQUF1QixFQUFFLFNBQVM7UUFDbEMseUJBQXlCLEVBQUUsU0FBUztRQUNwQyxrQkFBa0IsRUFBRSxTQUFTO1FBQzdCLGtCQUFrQixFQUFFLFNBQVM7UUFDN0IsNkJBQTZCLEVBQUUsU0FBUztRQUN4Qyw2QkFBNkIsRUFBRSxTQUFTO1FBQ3hDLCtCQUErQixFQUFFLFNBQVM7UUFDMUMsOEJBQThCLEVBQUUsWUFBWTtRQUM1Qyxn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QUNMLENBQUM7O2dCQTNCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzttQ0E1S0Q7Q0FzTUMsQUE1QkQsSUE0QkM7U0F6Qlksd0JBQXdCOzs7Ozs7SUFDbkMsMENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaGVtZSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHByb3BlcnRpZXM6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN1a3U6IFRoZW1lID0ge1xyXG4gIG5hbWU6ICdzdWt1JyxcclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAnLS1zdWt1LXByaW1hcnktZm9udCc6IGAnUG9wcGlucycsIHNhbnMtc2VyaWZgLFxyXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktZm9udCc6IGAnRW5jb2RlIFNhbnMnLCBzYW5zLXNlcmlmYCxcclxuICAgICctLXN1a3UtdGVybmFyeS1mb250JzogYCdhYmVscmVndWxhcicsIHNhbnMtc2VyaWZgLFxyXG4gICAgJy0tc3VrdS1wcmltYXJ5LWNvbG9yJzogJyNhN2JmMmUnLFxyXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktY29sb3InOiAnI2Q4ZmM0MCcsXHJcbiAgICAnLS1zdWt1LXdhcm5pbmctY29sb3InOiAnI0ZGMDAwMCcsXHJcbiAgICAnLS1zdWt1LWJnLXByaW1hcnknOiAnIzJmMmUyZScsXHJcbiAgICAnLS1zdWt1LWJnLXNlY29uZGFyeSc6ICcjMjcyNzI3JyxcclxuICAgICctLXN1a3UtYmctdGVybmFyeSc6ICcjMzUzOTNlJyxcclxuICAgICctLXN1a3UtaG9tZXBhZ2UtYmcnOiAnI2ZmZmZmZicsXHJcbiAgICAnLS1zdWt1LWJ1dHRvbi1kZWZhdWx0LWJnJzogJyMzMDMwMzAnLFxyXG4gICAgJy0tc3VrdS1idXR0b24tZGlzYWJsZWQtYmcnOiAnI2Q5ZDlkOScsXHJcbiAgICAnLS1zdWt1LWljb24tZGlzYWJsZWQtY29sb3InOiAnIzdmN2Y3ZicsXHJcbiAgICAnLS1zdWt1LWRlZmF1bHQtaWNvbi1jb2xvcic6ICcjYjZiNmI2JyxcclxuICAgICctLXN1a3UtdGV4dC1oZWFkaW5nJzogJyMxZDFkMWQnLFxyXG4gICAgJy0tc3VrdS10ZXh0LXN1Yi1oZWFkaW5nJzogJyNjY2NjY2MnLFxyXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLW9uZSc6ICcjYjZiNmI2JyxcclxuICAgICctLXN1a3UtdGV4dC1sYWJlbC10d28nOiAnI2ZmZmZmZicsXHJcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtdGhyZWUnOiAnI2YyZjJmMicsXHJcbiAgICAnLS1zdWt1LXRleHQtbGluayc6ICcjM2UzZTNlJyxcclxuICAgICctLXN1a3UtdGV4dC1pbmZvJzogJyM3NTc1NzUnLFxyXG4gICAgJy0tc3VrdS1wcmltYXJ5LWJvcmRlci1jb2xvcic6ICcjYTdiZjJlJyxcclxuICAgICctLXN1a3UtZGVmYXVsdC1ib3JkZXItY29sb3InOiAnI2UyZTJlMicsXHJcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1ib3JkZXItY29sb3InOiAnIzc1NzU3NScsXHJcbiAgICAnLS1zdWt1LXByaW1hcnktYm9yZGVyLXJhZGl1cyc6ICcwIDQwcHggMCAwJyxcclxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMnOiAnMHB4IDBweCA0MXB4IDQxcHgnLFxyXG4gICAgJy0tc3VrdS1zZWFyY2gtYm9yZGVyLXJhZGl1cyc6ICcxMHB4IDE4cHggMThweCAxNnB4JyxcclxuICAgICctLXN1a3UtZGVmYXVsdC1ib3JkZXItcmFkaXVzJzogJzBweCcsXHJcbiAgICAnLS1zdWt1LWRlZmF1bHQtYnV0dG9uLWJvcmRlci1yYWRpdXMnOiAnMjhweCA3NnB4IDYzcHgnLFxyXG4gICAgJy0tc3VrdS1zdGFyLWVtcHR5LWJnJzogJyNlMWUxZTEnLFxyXG4gICAgJy0tc3VrdS1zdGFyLWZ1bGwtYmcnOiAncmdiKDEzNywgMTM3LCAxMzcpJyxcclxuICAgICctLXN1a3Utc3Rhci1zaXplJzogJzIwcHgnLFxyXG4gICAgJy0tc3VrdS1maWx0ZXItYmcnOiAnI2ZmZmZmZicsXHJcbiAgICAnLS1zdWt1LWRlZmF1bHQtYmcnOiAnI2ZmZmZmZicsXHJcbiAgICAnLS1zdWt1LWZpbHRlci1sYWJlbCc6ICcjYjZiNmI2JyxcclxuICAgICctLXN1a3UtZmlsdGVyLWxhYmVsLXNlbGVjdGVkJzogJ2JsYWNrJyxcclxuICAgICctLXN1a3UtcHJvZ3Jlc3NiYXItYWN0aXZlLWJnJzogJyNhN2JmMmUnLFxyXG4gICAgJy0tc3VrdS1wcm9ncmVzc2Jhci11cGNvbWluZy1iZyc6ICcjNzU3NTc1JyxcclxuICAgICctLXN1a3UtcHJvZ3Jlc3NiYXItY29tcGxldGVkLWJnJzogJyMxYzFjMWMnLFxyXG4gICAgJy0tc3VrdS1wcm9maWxlLWJnLWNvbG9yJzogJyNiNmI2YjYnLFxyXG4gICAgJy0tc3VrdS1wcm9maWxlLXRleHQtb25lJzogJyNkY2Q4ZDhmMCcsXHJcbiAgICAnLS1zdWt1LXByb2ZpbGUtdGV4dC10d28nOiAnIzUwNGU0ZScsXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0xJzogJzExcHgnLCAvLyAwLjc1cmVtXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0yJzogJzEycHgnLCAvLyAwLjg3NXJlbVxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtMyc6ICcxNHB4JywgLy8gMS4wNjI1cmVtXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS00JzogJzE1cHgnLCAvLyAxLjA2MjVyZW1tXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS01JzogJzE3cHgnLCAvLyAxLjI1cmVtXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS02JzogJzIwcHgnLCAvLyAxLjVyZW1cclxuICAgICctLXN1a3UtZm9udC1zaXplLTcnOiAnMjJweCcsIC8vIDEuNjI1cmVtXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS04JzogJzI0cHgnLCAvLyAxLjYyNXJlbVxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtOSc6ICcyNnB4JywgLy8gMS44NzVyZW1cclxuICAgICctLXN1a3UtZm9udC1zaXplLTEwJzogJzMwcHgnLCAvLyAxLjg3NXJlbVxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtMTEnOiAnNTBweCcsICAvLyAxLjg3NXJlbVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXJrOiBUaGVtZSA9IHtcclxuICBuYW1lOiAnZGFyaycsXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgJy0tc3VrdS1wcmltYXJ5LWZvbnQnOiBgJ1BvcHBpbnMnLCBzYW5zLXNlcmlmYCxcclxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWZvbnQnOiBgJ0VuY29kZSBTYW5zJywgc2Fucy1zZXJpZmAsXHJcbiAgICAnLS1zdWt1LXRlcm5hcnktZm9udCc6IGAnXCJhYmVscmVndWxhclwiLCBzYW5zLXNlcmlmYCxcclxuICAgICctLXN1a3UtcHJpbWFyeS1jb2xvcic6ICcjMzYzYjRlJyxcclxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWNvbG9yJzogJyNkOGZjNDAnLFxyXG4gICAgJy0tc3VrdS13YXJuaW5nLWNvbG9yJzogJyNGRjAwMDAnLFxyXG4gICAgJy0tc3VrdS1iZy1wcmltYXJ5JzogJyMzNjNiNGUnLFxyXG4gICAgJy0tc3VrdS1iZy1zZWNvbmRhcnknOiAnIzI3MjcyNycsXHJcbiAgICAnLS1zdWt1LWJnLXRlcm5hcnknOiAnIzM1MzkzZScsXHJcbiAgICAnLS1zdWt1LWhvbWVwYWdlLWJnJzogJyNmZmZmZmYnLFxyXG4gICAgJy0tc3VrdS1idXR0b24tZGVmYXVsdC1iZyc6ICcjMzAzMDMwJyxcclxuICAgICctLXN1a3UtYnV0dG9uLWRpc2FibGVkLWJnJzogJyNkOWQ5ZDknLFxyXG4gICAgJy0tc3VrdS1pY29uLWRpc2FibGVkLWNvbG9yJzogJyM3ZjdmN2YnLFxyXG4gICAgJy0tc3VrdS1kZWZhdWx0LWljb24tY29sb3InOiAnI2I2YjZiNicsXHJcbiAgICAnLS1zdWt1LXRleHQtaGVhZGluZyc6ICcjMWQxZDFkJyxcclxuICAgICctLXN1a3UtdGV4dC1zdWItaGVhZGluZyc6ICcjZjJmMmYyJyxcclxuICAgICctLXN1a3UtdGV4dC1sYWJlbC1vbmUnOiAnI2I2YjZiNicsXHJcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtdHdvJzogJyNmZmZmZmYnLFxyXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLXRocmVlJzogJyNmMmYyZjInLFxyXG4gICAgJy0tc3VrdS10ZXh0LWxpbmsnOiAnIzNlM2UzZScsXHJcbiAgICAnLS1zdWt1LXRleHQtaW5mbyc6ICcjNzU3NTc1JyxcclxuICAgICctLXN1a3UtcHJpbWFyeS1ib3JkZXItY29sb3InOiAnI2YyZjJmMicsXHJcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1ib3JkZXItY29sb3InOiAnIzc1NzU3NScsXHJcbiAgICAnLS1zdWt1LXByaW1hcnktYm9yZGVyLXJhZGl1cyc6ICcwJyxcclxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMnOiAnMHB4IDBweCA0MXB4IDQxcHgnLFxyXG4gICAgJy0tc3VrdS1kZWZhdWx0LWJvcmRlci1yYWRpdXMnOiAnMHB4IDIwcHggMTVweCcsXHJcbiAgICAnLS1zdWt1LWRlZmF1bHQtYnV0dG9uLWJvcmRlci1yYWRpdXMnOiAnMjhweCA3NnB4IDYzcHgnLFxyXG4gICAgJy0tc3VrdS1zZWFyY2gtYm9yZGVyLXJhZGl1cyc6ICcxMHB4IDE4cHggMThweCAxNnB4JyxcclxuICAgICctLXN1a3Utc3Rhci1lbXB0eS1iZyc6ICcjZTFlMWUxJyxcclxuICAgICctLXN1a3Utc3Rhci1mdWxsLWJnJzogJ3JnYigxMzcsIDEzNywgMTM3KScsXHJcbiAgICAnLS1zdWt1LXN0YXItc2l6ZSc6ICcyMHB4JyxcclxuICAgICctLXN1a3UtZmlsdGVyLWJnJzogJ2JsYWNrJyxcclxuICAgICctLXN1a3UtZmlsdGVyLWxhYmVsJzogJyNiNmI2YjYnLFxyXG4gICAgJy0tc3VrdS1maWx0ZXItbGFiZWwtc2VsZWN0ZWQnOiAnI2ZmZmZmZicsXHJcbiAgICAnLS1zdWt1LXByb2dyZXNzYmFyLWlucHJvZ3Jlc3MtYmcnOiAnI2E3YmYyZScsXHJcbiAgICAnLS1zdWt1LXByb2dyZXNzYmFyLXVwY29taW5nLWJnJzogJyM3NTc1NzUnLFxyXG4gICAgJy0tc3VrdS1wcm9ncmVzc2Jhci1jb21wbGV0ZWQtYmcnOiAnIzFjMWMxYycsXHJcbiAgICAnLS1zdWt1LXN1Ym1lbnUtYmctY29sb3InOiAnJyxcclxuICAgICctLXN1a3UtZm9udC1zaXplLTEnOiAnMC43NXJlbScsIC8vIDEycHhcdC0gMC43NXJlbVxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtMic6ICcwLjg3NXJlbScsIC8vIDE0cHhcdDAuODc1cmVtXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0zJzogJzEuMDZyZW0nLCAvLyAxN3B4XHQxLjA2MjVyZW1cclxuICAgICctLXN1a3UtZm9udC1zaXplLTQnOiAnMS4yNXJlbScsIC8vIDIwcHhcdDEuMjVyZW1cclxuICAgICctLXN1a3UtZm9udC1zaXplLTUnOiAnMS41cmVtJywgLy8gIDI0cHhcdDEuNXJlbVxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtNic6ICcxLjYyNXJlbScsIC8vIDI2cHhcdDEuNjI1cmVtXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS03JzogJzEuOHJlbScsIC8vICAzMHB4XHQxLjg3NXJlbVxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtOCc6ICcycmVtJywgLy8gIDMycHhcdDEuODc1cmVtXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0xMCc6ICczcmVtJywgLy8gMzBweFx0MS44NzVyZW1cclxuICAgICctLXN1a3UtZm9udC1zaXplLTExJzogJzMuNXJlbScgIC8vIDUwcHhcdDEuODc1cmVtXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpZ2h0OiBUaGVtZSA9IHtcclxuICBuYW1lOiAnbGlnaHQnLFxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgICctLXN1a3UtcHJpbWFyeS1mb250JzogYCdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmYCxcclxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWZvbnQnOiBgU0ZNb25vLVJlZ3VsYXIsTWVubG8sTW9uYWNvLENvbnNvbGFzLFwiTGliZXJhdGlvbiBNb25vXCIsXCJDb3VyaWVyIE5ld1wiLG1vbm9zcGFjZWAsXHJcbiAgICAnLS1zdWt1LXRlcm5hcnktZm9udCc6IGAnXCJhYmVscmVndWxhclwiLCBzYW5zLXNlcmlmYCxcclxuICAgICctLXN1a3UtcHJpbWFyeS1jb2xvcic6ICcjYTdiZjJlJyxcclxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWNvbG9yJzogJyNiM2IzYjMnLFxyXG4gICAgJy0tc3VrdS13YXJuaW5nLWNvbG9yJzogJyNGRjAwMDAnLFxyXG4gICAgJy0tc3VrdS1iZy1wcmltYXJ5JzogJyNhNmMzNmYnLFxyXG4gICAgJy0tc3VrdS1iZy1zZWNvbmRhcnknOiAnIzI4MjgyOCcsXHJcbiAgICAnLS1zdWt1LWJnLXRlcm5hcnknOiAnIzM1MzkzZScsXHJcbiAgICAnLS1zdWt1LWhvbWVwYWdlLWJnJzogJyNmZmZmZmYnLFxyXG4gICAgJy0tc3VrdS1idXR0b24tZGVmYXVsdC1iZyc6ICcjMzAzMDMwJyxcclxuICAgICctLXN1a3UtYnV0dG9uLWRpc2FibGVkLWJnJzogJyNkOWQ5ZDknLFxyXG4gICAgJy0tc3VrdS1pY29uLWRpc2FibGVkLWNvbG9yJzogJyM3ZjdmN2YnLFxyXG4gICAgJy0tc3VrdS1kZWZhdWx0LWljb24tY29sb3InOiAnI2I2YjZiNicsXHJcbiAgICAnLS1zdWt1LXRleHQtaGVhZGluZyc6ICcjMWQxZDFkJyxcclxuICAgICctLXN1a3UtdGV4dC1zdWItaGVhZGluZyc6ICcjMWQxZDFkJyxcclxuICAgICctLXN1a3UtdGV4dC1sYWJlbC1vbmUnOiAnI2I2YjZiNicsXHJcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtdHdvJzogJ2JsYWNrJyxcclxuICAgICctLXN1a3UtdGV4dC1sYWJlbC10aHJlZSc6ICcjZjJmMmYyJyxcclxuICAgICctLXN1a3UtdGV4dC1saW5rJzogJyMzZTNlM2UnLFxyXG4gICAgJy0tc3VrdS10ZXh0LWluZm8nOiAnIzc1NzU3NScsXHJcbiAgICAnLS1zdWt1LXByaW1hcnktYm9yZGVyLWNvbG9yJzogJyMxNTE1MTUnLFxyXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktYm9yZGVyLWNvbG9yJzogJyM3NTc1NzUnLFxyXG4gICAgJy0tc3VrdS1wcmltYXJ5LWJvcmRlci1yYWRpdXMnOiAnMHB4IDE1cHggMTBweCAwcHgnLFxyXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktYm9yZGVyLXJhZGl1cyc6ICcwcHggMHB4IDQxcHggNDFweCcsXHJcbiAgICAnLS1zdWt1LWRlZmF1bHQtYm9yZGVyLXJhZGl1cyc6ICcxMHB4IDEwcHggMjBweCA1cHgnLFxyXG4gICAgJy0tc3VrdS1kZWZhdWx0LWJ1dHRvbi1ib3JkZXItcmFkaXVzJzogJzI4cHggNzZweCA2M3B4JyxcclxuICAgICctLXN1a3Utc2VhcmNoLWJvcmRlci1yYWRpdXMnOiAnMTBweCAxOHB4IDE4cHggMTZweCcsXHJcbiAgICAnLS1zdWt1LWZpbHRlci1iZyc6ICdibGFjaycsXHJcbiAgICAnLS1zdWt1LWZpbHRlci1sYWJlbCc6ICcjYjZiNmI2JyxcclxuICAgICctLXN1a3UtZmlsdGVyLWxhYmVsLXNlbGVjdGVkJzogJyNmZmZmZmYnLFxyXG4gICAgJy0tc3VrdS1wcm9ncmVzc2Jhci1hY3RpdmUtYmcnOiAnI2E3YmYyZScsXHJcbiAgICAnLS1zdWt1LXByb2dyZXNzYmFyLXVwY29taW5nLWJnJzogJyM3NTc1NzUnLFxyXG4gICAgJy0tc3VrdS1wcm9ncmVzc2Jhci1jb21wbGV0ZWQtYmcnOiAnIzFjMWMxYycsXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0xJzogJzAuNzVyZW0nLCAvLyAxMnB4XHQtIDAuNzVyZW1cclxuICAgICctLXN1a3UtZm9udC1zaXplLTInOiAnMC44NzVyZW0nLCAvLyAxNHB4XHQwLjg3NXJlbVxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtMyc6ICcxLjA2cmVtJywgLy8gMTdweFx0MS4wNjI1cmVtXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS00JzogJzEuMjVyZW0nLCAvLyAyMHB4XHQxLjI1cmVtXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS01JzogJzEuNXJlbScsIC8vICAyNHB4XHQxLjVyZW1cclxuICAgICctLXN1a3UtZm9udC1zaXplLTYnOiAnMS42MjVyZW0nLCAvLyAyNnB4XHQxLjYyNXJlbVxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtNyc6ICcxLjhyZW0nLCAvLyAgMzBweFx0MS44NzVyZW1cclxuICAgICctLXN1a3UtZm9udC1zaXplLTgnOiAnMnJlbScsIC8vICAzMnB4XHQxLjg3NXJlbVxyXG4gICAgJy0tc3VrdS1mb250LXNpemUtMTAnOiAnM3JlbScsIC8vIDMwcHhcdDEuODc1cmVtXHJcbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0xMSc6ICczLjVyZW0nICAvLyA1MHB4XHQxLjg3NXJlbVxyXG4gIH1cclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VXZWJjb21wb25lbnRzU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBhY3RpdmU6IFRoZW1lID0gc3VrdTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0TGlnaHRUaGVtZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0QWN0aXZlVGhlbWUobGlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldERhcmtUaGVtZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0QWN0aXZlVGhlbWUoZGFyayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0U3VrdVRoZW1lKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ3N1a3UnKTtcclxuICAgIHRoaXMuc2V0QWN0aXZlVGhlbWUoc3VrdSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEFjdGl2ZVRoZW1lKHRoZW1lOiBUaGVtZSk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmUgPSB0aGVtZTtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMuYWN0aXZlLnByb3BlcnRpZXMpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdGhpcy5hY3RpdmUucHJvcGVydGllc1twcm9wZXJ0eV0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==