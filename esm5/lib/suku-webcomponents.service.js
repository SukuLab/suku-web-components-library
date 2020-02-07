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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS13ZWJjb21wb25lbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS13ZWJjb21wb25lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQUUzQywyQkFHQzs7O0lBRkMscUJBQWE7O0lBQ2IsMkJBQWdCOzs7QUFHbEIsTUFBTSxLQUFPLElBQUksR0FBVTtJQUN6QixJQUFJLEVBQUUsTUFBTTtJQUNaLFVBQVUsRUFBRTtRQUNWLHFCQUFxQixFQUFFLHVCQUF1QjtRQUM5Qyx1QkFBdUIsRUFBRSwyQkFBMkI7UUFDcEQscUJBQXFCLEVBQUUsMkJBQTJCO1FBQ2xELHNCQUFzQixFQUFFLFNBQVM7UUFDakMsd0JBQXdCLEVBQUUsU0FBUztRQUNuQyxzQkFBc0IsRUFBRSxTQUFTO1FBQ2pDLG1CQUFtQixFQUFFLFNBQVM7UUFDOUIscUJBQXFCLEVBQUUsU0FBUztRQUNoQyxtQkFBbUIsRUFBRSxTQUFTO1FBQzlCLG9CQUFvQixFQUFFLFNBQVM7UUFDL0IsMEJBQTBCLEVBQUUsU0FBUztRQUNyQywyQkFBMkIsRUFBRSxTQUFTO1FBQ3RDLDRCQUE0QixFQUFFLFNBQVM7UUFDdkMsMkJBQTJCLEVBQUUsU0FBUztRQUN0QyxxQkFBcUIsRUFBRSxTQUFTO1FBQ2hDLHlCQUF5QixFQUFFLFNBQVM7UUFDcEMsdUJBQXVCLEVBQUUsU0FBUztRQUNsQyx1QkFBdUIsRUFBRSxTQUFTO1FBQ2xDLHlCQUF5QixFQUFFLFNBQVM7UUFDcEMsa0JBQWtCLEVBQUUsU0FBUztRQUM3QixrQkFBa0IsRUFBRSxTQUFTO1FBQzdCLDZCQUE2QixFQUFFLFNBQVM7UUFDeEMsNkJBQTZCLEVBQUUsU0FBUztRQUN4QywrQkFBK0IsRUFBRSxTQUFTO1FBQzFDLDhCQUE4QixFQUFFLFlBQVk7UUFDNUMs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SUFDTCxDQUFDOztnQkEzQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7bUNBNUtEO0NBc01DLEFBNUJELElBNEJDO1NBekJZLHdCQUF3Qjs7Ozs7O0lBQ25DLDBDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJvcGVydGllczogYW55O1xufVxuXG5leHBvcnQgY29uc3Qgc3VrdTogVGhlbWUgPSB7XG4gIG5hbWU6ICdzdWt1JyxcbiAgcHJvcGVydGllczoge1xuICAgICctLXN1a3UtcHJpbWFyeS1mb250JzogYCdQb3BwaW5zJywgc2Fucy1zZXJpZmAsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktZm9udCc6IGAnRW5jb2RlIFNhbnMnLCBzYW5zLXNlcmlmYCxcbiAgICAnLS1zdWt1LXRlcm5hcnktZm9udCc6IGAnYWJlbHJlZ3VsYXInLCBzYW5zLXNlcmlmYCxcbiAgICAnLS1zdWt1LXByaW1hcnktY29sb3InOiAnI2E3YmYyZScsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktY29sb3InOiAnI2Q4ZmM0MCcsXG4gICAgJy0tc3VrdS13YXJuaW5nLWNvbG9yJzogJyNGRjAwMDAnLFxuICAgICctLXN1a3UtYmctcHJpbWFyeSc6ICcjMmYyZTJlJyxcbiAgICAnLS1zdWt1LWJnLXNlY29uZGFyeSc6ICcjMjcyNzI3JyxcbiAgICAnLS1zdWt1LWJnLXRlcm5hcnknOiAnIzM1MzkzZScsXG4gICAgJy0tc3VrdS1ob21lcGFnZS1iZyc6ICcjZmZmZmZmJyxcbiAgICAnLS1zdWt1LWJ1dHRvbi1kZWZhdWx0LWJnJzogJyMzMDMwMzAnLFxuICAgICctLXN1a3UtYnV0dG9uLWRpc2FibGVkLWJnJzogJyNkOWQ5ZDknLFxuICAgICctLXN1a3UtaWNvbi1kaXNhYmxlZC1jb2xvcic6ICcjN2Y3ZjdmJyxcbiAgICAnLS1zdWt1LWRlZmF1bHQtaWNvbi1jb2xvcic6ICcjYjZiNmI2JyxcbiAgICAnLS1zdWt1LXRleHQtaGVhZGluZyc6ICcjMWQxZDFkJyxcbiAgICAnLS1zdWt1LXRleHQtc3ViLWhlYWRpbmcnOiAnI2NjY2NjYycsXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLW9uZSc6ICcjYjZiNmI2JyxcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtdHdvJzogJyNmZmZmZmYnLFxuICAgICctLXN1a3UtdGV4dC1sYWJlbC10aHJlZSc6ICcjZjJmMmYyJyxcbiAgICAnLS1zdWt1LXRleHQtbGluayc6ICcjM2UzZTNlJyxcbiAgICAnLS1zdWt1LXRleHQtaW5mbyc6ICcjNzU3NTc1JyxcbiAgICAnLS1zdWt1LXByaW1hcnktYm9yZGVyLWNvbG9yJzogJyNhN2JmMmUnLFxuICAgICctLXN1a3UtZGVmYXVsdC1ib3JkZXItY29sb3InOiAnI2UyZTJlMicsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktYm9yZGVyLWNvbG9yJzogJyM3NTc1NzUnLFxuICAgICctLXN1a3UtcHJpbWFyeS1ib3JkZXItcmFkaXVzJzogJzAgNDBweCAwIDAnLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMnOiAnMHB4IDBweCA0MXB4IDQxcHgnLFxuICAgICctLXN1a3Utc2VhcmNoLWJvcmRlci1yYWRpdXMnOiAnMTBweCAxOHB4IDE4cHggMTZweCcsXG4gICAgJy0tc3VrdS1kZWZhdWx0LWJvcmRlci1yYWRpdXMnOiAnMHB4JyxcbiAgICAnLS1zdWt1LWRlZmF1bHQtYnV0dG9uLWJvcmRlci1yYWRpdXMnOiAnMjhweCA3NnB4IDYzcHgnLFxuICAgICctLXN1a3Utc3Rhci1lbXB0eS1iZyc6ICcjZTFlMWUxJyxcbiAgICAnLS1zdWt1LXN0YXItZnVsbC1iZyc6ICdyZ2IoMTM3LCAxMzcsIDEzNyknLFxuICAgICctLXN1a3Utc3Rhci1zaXplJzogJzIwcHgnLFxuICAgICctLXN1a3UtZmlsdGVyLWJnJzogJyNmZmZmZmYnLFxuICAgICctLXN1a3UtZGVmYXVsdC1iZyc6ICcjZmZmZmZmJyxcbiAgICAnLS1zdWt1LWZpbHRlci1sYWJlbCc6ICcjYjZiNmI2JyxcbiAgICAnLS1zdWt1LWZpbHRlci1sYWJlbC1zZWxlY3RlZCc6ICdibGFjaycsXG4gICAgJy0tc3VrdS1wcm9ncmVzc2Jhci1hY3RpdmUtYmcnOiAnI2E3YmYyZScsXG4gICAgJy0tc3VrdS1wcm9ncmVzc2Jhci11cGNvbWluZy1iZyc6ICcjNzU3NTc1JyxcbiAgICAnLS1zdWt1LXByb2dyZXNzYmFyLWNvbXBsZXRlZC1iZyc6ICcjMWMxYzFjJyxcbiAgICAnLS1zdWt1LXByb2ZpbGUtYmctY29sb3InOiAnI2I2YjZiNicsXG4gICAgJy0tc3VrdS1wcm9maWxlLXRleHQtb25lJzogJyNkY2Q4ZDhmMCcsXG4gICAgJy0tc3VrdS1wcm9maWxlLXRleHQtdHdvJzogJyM1MDRlNGUnLFxuICAgICctLXN1a3UtZm9udC1zaXplLTEnOiAnMTFweCcsIC8vIDAuNzVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS0yJzogJzEycHgnLCAvLyAwLjg3NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTMnOiAnMTRweCcsIC8vIDEuMDYyNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTQnOiAnMTVweCcsIC8vIDEuMDYyNXJlbW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS01JzogJzE3cHgnLCAvLyAxLjI1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtNic6ICcyMHB4JywgLy8gMS41cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtNyc6ICcyMnB4JywgLy8gMS42MjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS04JzogJzI0cHgnLCAvLyAxLjYyNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTknOiAnMjZweCcsIC8vIDEuODc1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtMTAnOiAnMzBweCcsIC8vIDEuODc1cmVtXG4gICAgJy0tc3VrdS1mb250LXNpemUtMTEnOiAnNTBweCcsICAvLyAxLjg3NXJlbVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGFyazogVGhlbWUgPSB7XG4gIG5hbWU6ICdkYXJrJyxcbiAgcHJvcGVydGllczoge1xuICAgICctLXN1a3UtcHJpbWFyeS1mb250JzogYCdQb3BwaW5zJywgc2Fucy1zZXJpZmAsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktZm9udCc6IGAnRW5jb2RlIFNhbnMnLCBzYW5zLXNlcmlmYCxcbiAgICAnLS1zdWt1LXRlcm5hcnktZm9udCc6IGAnXCJhYmVscmVndWxhclwiLCBzYW5zLXNlcmlmYCxcbiAgICAnLS1zdWt1LXByaW1hcnktY29sb3InOiAnIzM2M2I0ZScsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktY29sb3InOiAnI2Q4ZmM0MCcsXG4gICAgJy0tc3VrdS13YXJuaW5nLWNvbG9yJzogJyNGRjAwMDAnLFxuICAgICctLXN1a3UtYmctcHJpbWFyeSc6ICcjMzYzYjRlJyxcbiAgICAnLS1zdWt1LWJnLXNlY29uZGFyeSc6ICcjMjcyNzI3JyxcbiAgICAnLS1zdWt1LWJnLXRlcm5hcnknOiAnIzM1MzkzZScsXG4gICAgJy0tc3VrdS1ob21lcGFnZS1iZyc6ICcjZmZmZmZmJyxcbiAgICAnLS1zdWt1LWJ1dHRvbi1kZWZhdWx0LWJnJzogJyMzMDMwMzAnLFxuICAgICctLXN1a3UtYnV0dG9uLWRpc2FibGVkLWJnJzogJyNkOWQ5ZDknLFxuICAgICctLXN1a3UtaWNvbi1kaXNhYmxlZC1jb2xvcic6ICcjN2Y3ZjdmJyxcbiAgICAnLS1zdWt1LWRlZmF1bHQtaWNvbi1jb2xvcic6ICcjYjZiNmI2JyxcbiAgICAnLS1zdWt1LXRleHQtaGVhZGluZyc6ICcjMWQxZDFkJyxcbiAgICAnLS1zdWt1LXRleHQtc3ViLWhlYWRpbmcnOiAnI2YyZjJmMicsXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLW9uZSc6ICcjYjZiNmI2JyxcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtdHdvJzogJyNmZmZmZmYnLFxuICAgICctLXN1a3UtdGV4dC1sYWJlbC10aHJlZSc6ICcjZjJmMmYyJyxcbiAgICAnLS1zdWt1LXRleHQtbGluayc6ICcjM2UzZTNlJyxcbiAgICAnLS1zdWt1LXRleHQtaW5mbyc6ICcjNzU3NTc1JyxcbiAgICAnLS1zdWt1LXByaW1hcnktYm9yZGVyLWNvbG9yJzogJyNmMmYyZjInLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWJvcmRlci1jb2xvcic6ICcjNzU3NTc1JyxcbiAgICAnLS1zdWt1LXByaW1hcnktYm9yZGVyLXJhZGl1cyc6ICcwJyxcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1ib3JkZXItcmFkaXVzJzogJzBweCAwcHggNDFweCA0MXB4JyxcbiAgICAnLS1zdWt1LWRlZmF1bHQtYm9yZGVyLXJhZGl1cyc6ICcwcHggMjBweCAxNXB4JyxcbiAgICAnLS1zdWt1LWRlZmF1bHQtYnV0dG9uLWJvcmRlci1yYWRpdXMnOiAnMjhweCA3NnB4IDYzcHgnLFxuICAgICctLXN1a3Utc2VhcmNoLWJvcmRlci1yYWRpdXMnOiAnMTBweCAxOHB4IDE4cHggMTZweCcsXG4gICAgJy0tc3VrdS1zdGFyLWVtcHR5LWJnJzogJyNlMWUxZTEnLFxuICAgICctLXN1a3Utc3Rhci1mdWxsLWJnJzogJ3JnYigxMzcsIDEzNywgMTM3KScsXG4gICAgJy0tc3VrdS1zdGFyLXNpemUnOiAnMjBweCcsXG4gICAgJy0tc3VrdS1maWx0ZXItYmcnOiAnYmxhY2snLFxuICAgICctLXN1a3UtZmlsdGVyLWxhYmVsJzogJyNiNmI2YjYnLFxuICAgICctLXN1a3UtZmlsdGVyLWxhYmVsLXNlbGVjdGVkJzogJyNmZmZmZmYnLFxuICAgICctLXN1a3UtcHJvZ3Jlc3NiYXItaW5wcm9ncmVzcy1iZyc6ICcjYTdiZjJlJyxcbiAgICAnLS1zdWt1LXByb2dyZXNzYmFyLXVwY29taW5nLWJnJzogJyM3NTc1NzUnLFxuICAgICctLXN1a3UtcHJvZ3Jlc3NiYXItY29tcGxldGVkLWJnJzogJyMxYzFjMWMnLFxuICAgICctLXN1a3Utc3VibWVudS1iZy1jb2xvcic6ICcnLFxuICAgICctLXN1a3UtZm9udC1zaXplLTEnOiAnMC43NXJlbScsIC8vIDEycHhcdC0gMC43NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTInOiAnMC44NzVyZW0nLCAvLyAxNHB4XHQwLjg3NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTMnOiAnMS4wNnJlbScsIC8vIDE3cHhcdDEuMDYyNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTQnOiAnMS4yNXJlbScsIC8vIDIwcHhcdDEuMjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS01JzogJzEuNXJlbScsIC8vICAyNHB4XHQxLjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS02JzogJzEuNjI1cmVtJywgLy8gMjZweFx0MS42MjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS03JzogJzEuOHJlbScsIC8vICAzMHB4XHQxLjg3NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTgnOiAnMnJlbScsIC8vICAzMnB4XHQxLjg3NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTEwJzogJzNyZW0nLCAvLyAzMHB4XHQxLjg3NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTExJzogJzMuNXJlbScgIC8vIDUwcHhcdDEuODc1cmVtXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBsaWdodDogVGhlbWUgPSB7XG4gIG5hbWU6ICdsaWdodCcsXG4gIHByb3BlcnRpZXM6IHtcbiAgICAnLS1zdWt1LXByaW1hcnktZm9udCc6IGAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZmAsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktZm9udCc6IGBTRk1vbm8tUmVndWxhcixNZW5sbyxNb25hY28sQ29uc29sYXMsXCJMaWJlcmF0aW9uIE1vbm9cIixcIkNvdXJpZXIgTmV3XCIsbW9ub3NwYWNlYCxcbiAgICAnLS1zdWt1LXRlcm5hcnktZm9udCc6IGAnXCJhYmVscmVndWxhclwiLCBzYW5zLXNlcmlmYCxcbiAgICAnLS1zdWt1LXByaW1hcnktY29sb3InOiAnI2E3YmYyZScsXG4gICAgJy0tc3VrdS1zZWNvbmRhcnktY29sb3InOiAnI2IzYjNiMycsXG4gICAgJy0tc3VrdS13YXJuaW5nLWNvbG9yJzogJyNGRjAwMDAnLFxuICAgICctLXN1a3UtYmctcHJpbWFyeSc6ICcjYTZjMzZmJyxcbiAgICAnLS1zdWt1LWJnLXNlY29uZGFyeSc6ICcjMjgyODI4JyxcbiAgICAnLS1zdWt1LWJnLXRlcm5hcnknOiAnIzM1MzkzZScsXG4gICAgJy0tc3VrdS1ob21lcGFnZS1iZyc6ICcjZmZmZmZmJyxcbiAgICAnLS1zdWt1LWJ1dHRvbi1kZWZhdWx0LWJnJzogJyMzMDMwMzAnLFxuICAgICctLXN1a3UtYnV0dG9uLWRpc2FibGVkLWJnJzogJyNkOWQ5ZDknLFxuICAgICctLXN1a3UtaWNvbi1kaXNhYmxlZC1jb2xvcic6ICcjN2Y3ZjdmJyxcbiAgICAnLS1zdWt1LWRlZmF1bHQtaWNvbi1jb2xvcic6ICcjYjZiNmI2JyxcbiAgICAnLS1zdWt1LXRleHQtaGVhZGluZyc6ICcjMWQxZDFkJyxcbiAgICAnLS1zdWt1LXRleHQtc3ViLWhlYWRpbmcnOiAnIzFkMWQxZCcsXG4gICAgJy0tc3VrdS10ZXh0LWxhYmVsLW9uZSc6ICcjYjZiNmI2JyxcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtdHdvJzogJ2JsYWNrJyxcbiAgICAnLS1zdWt1LXRleHQtbGFiZWwtdGhyZWUnOiAnI2YyZjJmMicsXG4gICAgJy0tc3VrdS10ZXh0LWxpbmsnOiAnIzNlM2UzZScsXG4gICAgJy0tc3VrdS10ZXh0LWluZm8nOiAnIzc1NzU3NScsXG4gICAgJy0tc3VrdS1wcmltYXJ5LWJvcmRlci1jb2xvcic6ICcjMTUxNTE1JyxcbiAgICAnLS1zdWt1LXNlY29uZGFyeS1ib3JkZXItY29sb3InOiAnIzc1NzU3NScsXG4gICAgJy0tc3VrdS1wcmltYXJ5LWJvcmRlci1yYWRpdXMnOiAnMHB4IDE1cHggMTBweCAwcHgnLFxuICAgICctLXN1a3Utc2Vjb25kYXJ5LWJvcmRlci1yYWRpdXMnOiAnMHB4IDBweCA0MXB4IDQxcHgnLFxuICAgICctLXN1a3UtZGVmYXVsdC1ib3JkZXItcmFkaXVzJzogJzEwcHggMTBweCAyMHB4IDVweCcsXG4gICAgJy0tc3VrdS1kZWZhdWx0LWJ1dHRvbi1ib3JkZXItcmFkaXVzJzogJzI4cHggNzZweCA2M3B4JyxcbiAgICAnLS1zdWt1LXNlYXJjaC1ib3JkZXItcmFkaXVzJzogJzEwcHggMThweCAxOHB4IDE2cHgnLFxuICAgICctLXN1a3UtZmlsdGVyLWJnJzogJ2JsYWNrJyxcbiAgICAnLS1zdWt1LWZpbHRlci1sYWJlbCc6ICcjYjZiNmI2JyxcbiAgICAnLS1zdWt1LWZpbHRlci1sYWJlbC1zZWxlY3RlZCc6ICcjZmZmZmZmJyxcbiAgICAnLS1zdWt1LXByb2dyZXNzYmFyLWFjdGl2ZS1iZyc6ICcjYTdiZjJlJyxcbiAgICAnLS1zdWt1LXByb2dyZXNzYmFyLXVwY29taW5nLWJnJzogJyM3NTc1NzUnLFxuICAgICctLXN1a3UtcHJvZ3Jlc3NiYXItY29tcGxldGVkLWJnJzogJyMxYzFjMWMnLFxuICAgICctLXN1a3UtZm9udC1zaXplLTEnOiAnMC43NXJlbScsIC8vIDEycHhcdC0gMC43NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTInOiAnMC44NzVyZW0nLCAvLyAxNHB4XHQwLjg3NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTMnOiAnMS4wNnJlbScsIC8vIDE3cHhcdDEuMDYyNXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTQnOiAnMS4yNXJlbScsIC8vIDIwcHhcdDEuMjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS01JzogJzEuNXJlbScsIC8vICAyNHB4XHQxLjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS02JzogJzEuNjI1cmVtJywgLy8gMjZweFx0MS42MjVyZW1cbiAgICAnLS1zdWt1LWZvbnQtc2l6ZS03JzogJzEuOHJlbScsIC8vICAzMHB4XHQxLjg3NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTgnOiAnMnJlbScsIC8vICAzMnB4XHQxLjg3NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTEwJzogJzNyZW0nLCAvLyAzMHB4XHQxLjg3NXJlbVxuICAgICctLXN1a3UtZm9udC1zaXplLTExJzogJzMuNXJlbScgIC8vIDUwcHhcdDEuODc1cmVtXG4gIH1cbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VXZWJjb21wb25lbnRzU2VydmljZSB7XG4gIHByaXZhdGUgYWN0aXZlOiBUaGVtZSA9IHN1a3U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBwdWJsaWMgc2V0TGlnaHRUaGVtZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNldEFjdGl2ZVRoZW1lKGxpZ2h0KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXREYXJrVGhlbWUoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRBY3RpdmVUaGVtZShkYXJrKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTdWt1VGhlbWUoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ3N1a3UnKTtcbiAgICB0aGlzLnNldEFjdGl2ZVRoZW1lKHN1a3UpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBY3RpdmVUaGVtZSh0aGVtZTogVGhlbWUpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZSA9IHRoZW1lO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuYWN0aXZlLnByb3BlcnRpZXMpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHRoaXMuYWN0aXZlLnByb3BlcnRpZXNbcHJvcGVydHldKTtcbiAgICB9KTtcbiAgfVxufVxuIl19