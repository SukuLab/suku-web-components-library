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
                path: '/userDashboard',
                id: 'twitter'
            },
            {
                icon: 'fa fa-facebook',
                path: '/userDashboard',
                id: 'facebook'
            },
            {
                icon: 'fa fa-linkedin',
                path: '/userDashboard',
                id: 'linkedin'
            },
            {
                icon: 'fa fa-instagram',
                path: '/userDashboard',
                id: 'instagram'
            }
        ];
    }
    /**
     * @param {?} e
     * @return {?}
     */
    sendRoutePath(e) {
        console.log("path", e);
    }
}
SukuSocialIconsComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-social-icons',
                template: "<ul id=\"socialIcon\" class=\"icon-effect icon-effect-1a\">\n  <li class=\"mrc-2\" *ngFor=\"let icon of socialIcons;let i=index\" >\n    <a class=\"icon\" id=\"icon?.id\"><i [ngClass]=\"icon?.icon\" (click)=\"sendRoutePath(icon.icon)\"></i></a>\n  </li>\n</ul>",
                styles: ["ul{list-style:none;padding:0!important}ul>li{display:inline;padding:0!important;margin-right:10px}.icon{display:inline-block;position:relative;z-index:0;width:44px;height:44px;border-radius:50%;font-size:20px!important;color:#d3d2d2;line-height:44px;text-align:center;background-color:#f1f1f1}.icon:after{position:absolute;width:100%;height:100%;border-radius:50%;content:'';box-sizing:content-box}.icon-effect .icon{transition:.5s}.icon-effect .icon:after{top:-7px;left:-7px;box-shadow:0 0 0 3px #caec1c;color:#fff;transition:.5s;-webkit-transform:scale(.9);transform:scale(.9);opacity:0;padding:6.9px 7.1px 8px}.icon-effect-1a .icon:hover{background-color:#caec1c;color:#fff;cursor:pointer!important}.icon-effect-1a .icon:hover:after{-webkit-transform:scale(.9);transform:scale(.9);opacity:1}.mrc-2{margin-right:2rem!important}@media only screen and (min-width:1440px){.mrc-2{margin-right:2.5rem!important}}@media only screen and (min-width:1640px){.mrc-2{margin-right:3.8rem!important}}@media only screen and (min-width:1800px){.mrc-2{margin-right:4.5rem!important}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zb2NpYWwtaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc29jaWFsLWljb25zL3N1a3Utc29jaWFsLWljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sd0JBQXdCO0lBR3BDO1FBRFUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVoQixRQUFRO1FBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNsQjtnQkFDQyxJQUFJLEVBQUUsZUFBZTtnQkFDckIsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsRUFBRSxFQUFFLFNBQVM7YUFDYjtZQUNEO2dCQUNDLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLEVBQUUsRUFBRSxVQUFVO2FBQ2Q7WUFDRDtnQkFDQyxJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixFQUFFLEVBQUUsVUFBVTthQUNkO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsRUFBRSxFQUFFLFdBQVc7YUFDZjtTQUNDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxDQUFDO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7O1lBckNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixnUkFBaUQ7O2FBRWpEOzs7OzswQkFFQyxLQUFLO3FCQUNMLE1BQU07Ozs7SUFEUCwrQ0FBcUI7O0lBQ3JCLDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1zb2NpYWwtaWNvbnMnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1zb2NpYWwtaWNvbnMuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1zb2NpYWwtaWNvbnMuY29tcG9uZW50LnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVNvY2lhbEljb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgc29jaWFsSWNvbnM7XG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnNvY2lhbEljb25zID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiAnZmEgZmEtdHdpdHRlcicsXG5cdFx0XHRcdHBhdGg6ICcvdXNlckRhc2hib2FyZCcsXG5cdFx0XHRcdGlkOiAndHdpdHRlcidcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGljb246ICdmYSBmYS1mYWNlYm9vaycsXG5cdFx0XHRcdHBhdGg6ICcvdXNlckRhc2hib2FyZCcsXG5cdFx0XHRcdGlkOiAnZmFjZWJvb2snXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiAnZmEgZmEtbGlua2VkaW4nLFxuXHRcdFx0XHRwYXRoOiAnL3VzZXJEYXNoYm9hcmQnLFxuXHRcdFx0XHRpZDogJ2xpbmtlZGluJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWNvbjogJ2ZhIGZhLWluc3RhZ3JhbScsXG5cdFx0XHRcdHBhdGg6ICcvdXNlckRhc2hib2FyZCcsXG5cdFx0XHRcdGlkOiAnaW5zdGFncmFtJ1xuXHRcdFx0fVxuICAgIF07XG5cdH1cblxuXHRzZW5kUm91dGVQYXRoKGUpIHtcblx0XHRjb25zb2xlLmxvZyhcInBhdGhcIiwgZSk7XG5cdH0gXG5cblxufVxuIl19