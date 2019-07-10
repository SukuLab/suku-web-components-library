/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuSocialIconsComponent {
    constructor() {
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.socialIcons = [
            {
                icon: 'fa fa-twitter',
                path: 'https://twitter.com/login',
                id: 'twitter'
            },
            {
                icon: 'fa fa-facebook',
                path: 'https://www.facebook.com/',
                id: 'facebook'
            },
            {
                icon: 'fa fa-linkedin',
                path: 'https://in.linkedin.com/',
                id: 'linkedin'
            },
            {
                icon: 'fa fa-instagram',
                path: 'https://www.instagram.com/',
                id: 'instagram'
            }
        ];
    }
    /**
     * @param {?} e
     * @return {?}
     */
    sendRoutePath(e) {
        this.action.emit(e);
    }
}
SukuSocialIconsComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-social-icons',
                template: "<ul id=\"socialIcon\" class=\"icon-effect icon-effect-1a\">\n  <li class=\"mrc-2\" *ngFor=\"let icon of socialIcons;let i=index\" >\n    <a class=\"icon\" id=\"icon?.id\" href=\"{{icon?.path}}\" target=\"_blank\"><i [ngClass]=\"icon?.icon\" ></i></a>\n  </li>\n</ul>",
                styles: ["ul{list-style:none;padding:0!important}ul>li{display:inline;padding:0!important;margin-right:10px}.icon{display:inline-block;position:relative;z-index:0;width:39px;height:39px;border-radius:50%;font-size:20px!important;line-height:42px;text-align:center;box-shadow:0 2px 2px 0 rgba(0,0,0,.1);background-color:#fff}.icon:after{position:absolute;width:100%;height:100%;border-radius:50%;content:'';box-sizing:content-box}.icon-effect .icon{transition:.5s}.icon-effect .icon:after{top:-7px;left:-7px;box-shadow:0 0 0 3px #caec1c;color:#fff;transition:.5s;-webkit-transform:scale(.9);transform:scale(.9);opacity:0;padding:6.9px 7.1px 8px}.icon-effect-1a .icon:hover{background-color:#caec1c;color:#fff;cursor:pointer!important}.icon-effect-1a .icon:hover:after{-webkit-transform:scale(.9);transform:scale(.9);opacity:1}.mrc-2{margin-right:2rem!important}@media only screen and (min-width:1440px){.mrc-2{margin-right:3.2rem!important}}@media only screen and (min-width:1640px){.mrc-2{margin-right:3.8rem!important}}@media only screen and (min-width:1800px){.mrc-2{margin-right:4.5rem!important}}"]
            }] }
];
/** @nocollapse */
SukuSocialIconsComponent.ctorParameters = () => [];
SukuSocialIconsComponent.propDecorators = {
    socialIcons: [{ type: Input }],
    action: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuSocialIconsComponent.prototype.socialIcons;
    /** @type {?} */
    SukuSocialIconsComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zb2NpYWwtaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc29jaWFsLWljb25zL3N1a3Utc29jaWFsLWljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sd0JBQXdCO0lBR3BDO1FBRFUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVoQixRQUFRO1FBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNsQjtnQkFDQyxJQUFJLEVBQUUsZUFBZTtnQkFDckIsSUFBSSxFQUFFLDJCQUEyQjtnQkFDakMsRUFBRSxFQUFFLFNBQVM7YUFDYjtZQUNEO2dCQUNDLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLElBQUksRUFBRSwyQkFBMkI7Z0JBQ2pDLEVBQUUsRUFBRSxVQUFVO2FBQ2Q7WUFDRDtnQkFDQyxJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixJQUFJLEVBQUUsMEJBQTBCO2dCQUNoQyxFQUFFLEVBQUUsVUFBVTthQUNkO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsSUFBSSxFQUFFLDRCQUE0QjtnQkFDbEMsRUFBRSxFQUFFLFdBQVc7YUFDZjtTQUNELENBQUM7SUFDSCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7O1lBckNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixzUkFBaUQ7O2FBRWpEOzs7OzswQkFFQyxLQUFLO3FCQUNMLE1BQU07Ozs7SUFEUCwrQ0FBcUI7O0lBQ3JCLDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1zb2NpYWwtaWNvbnMnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1zb2NpYWwtaWNvbnMuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1zb2NpYWwtaWNvbnMuY29tcG9uZW50LnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVNvY2lhbEljb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgc29jaWFsSWNvbnM7XG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnNvY2lhbEljb25zID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiAnZmEgZmEtdHdpdHRlcicsXG5cdFx0XHRcdHBhdGg6ICdodHRwczovL3R3aXR0ZXIuY29tL2xvZ2luJyxcblx0XHRcdFx0aWQ6ICd0d2l0dGVyJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWNvbjogJ2ZhIGZhLWZhY2Vib29rJyxcblx0XHRcdFx0cGF0aDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS8nLFxuXHRcdFx0XHRpZDogJ2ZhY2Vib29rJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWNvbjogJ2ZhIGZhLWxpbmtlZGluJyxcblx0XHRcdFx0cGF0aDogJ2h0dHBzOi8vaW4ubGlua2VkaW4uY29tLycsXG5cdFx0XHRcdGlkOiAnbGlua2VkaW4nXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiAnZmEgZmEtaW5zdGFncmFtJyxcblx0XHRcdFx0cGF0aDogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vJyxcblx0XHRcdFx0aWQ6ICdpbnN0YWdyYW0nXG5cdFx0XHR9XG5cdFx0XTtcblx0fVxuXG5cdHNlbmRSb3V0ZVBhdGgoZSkge1xuXHRcdHRoaXMuYWN0aW9uLmVtaXQoZSk7XG5cdH0gXG5cblxufVxuIl19