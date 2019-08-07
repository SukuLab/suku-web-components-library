/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuSocialIconsComponent = /** @class */ (function () {
    function SukuSocialIconsComponent() {
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
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuSocialIconsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SukuSocialIconsComponent.prototype.sendRoutePath = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.action.emit(e);
    };
    SukuSocialIconsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-social-icons',
                    template: "<ul id=\"socialIcon\" class=\"icon-effect icon-effect-1a\">\n  <li class=\"mrc-2\" *ngFor=\"let icon of socialIcons;let i=index\">\n    <a class=\"icon\" id=\"icon?.id\" href=\"{{icon?.path}}\" target=\"_blank\"><i [ngClass]=\"icon?.icon\"></i></a>\n  </li>\n</ul>",
                    styles: ["ul{list-style:none;padding:0!important}ul>li{display:inline;padding:0!important;margin-right:10px}.icon{display:inline-block;position:relative;z-index:0;width:39px;height:39px;border-radius:50%;font-size:20px!important;line-height:42px;text-align:center;box-shadow:0 2px 2px 0 rgba(0,0,0,.1);background-color:#fff}.icon:after{position:absolute;width:100%;height:100%;border-radius:50%;content:'';box-sizing:content-box}.icon-effect .icon{transition:.5s}.icon-effect .icon:after{top:-7px;left:-7px;box-shadow:0 0 0 3px #caec1c;color:#fff;transition:.5s;transform:scale(.9);opacity:0;padding:6.9px 7.1px 8px}.icon-effect-1a .icon:hover{background-color:#caec1c;color:#fff;cursor:pointer!important}.icon-effect-1a .icon:hover:after{transform:scale(.9);opacity:1}.mrc-2{margin-right:2rem!important}@media only screen and (min-width:1440px){.mrc-2{margin-right:3.2rem!important}}@media only screen and (min-width:1640px){.mrc-2{margin-right:3.8rem!important}}@media only screen and (min-width:1800px){.mrc-2{margin-right:4.5rem!important}}"]
                }] }
    ];
    /** @nocollapse */
    SukuSocialIconsComponent.ctorParameters = function () { return []; };
    SukuSocialIconsComponent.propDecorators = {
        socialIcons: [{ type: Input }],
        action: [{ type: Output }]
    };
    return SukuSocialIconsComponent;
}());
export { SukuSocialIconsComponent };
if (false) {
    /** @type {?} */
    SukuSocialIconsComponent.prototype.socialIcons;
    /** @type {?} */
    SukuSocialIconsComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zb2NpYWwtaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc29jaWFsLWljb25zL3N1a3Utc29jaWFsLWljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQTZCQztRQXZCUyxnQkFBVyxHQUFFO1lBQ3BCO2dCQUNDLElBQUksRUFBRSxlQUFlO2dCQUNyQixJQUFJLEVBQUUsMkJBQTJCO2dCQUNqQyxFQUFFLEVBQUUsU0FBUzthQUNiO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsSUFBSSxFQUFFLDJCQUEyQjtnQkFDakMsRUFBRSxFQUFFLFVBQVU7YUFDZDtZQUNEO2dCQUNDLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLElBQUksRUFBRSwwQkFBMEI7Z0JBQ2hDLEVBQUUsRUFBRSxVQUFVO2FBQ2Q7WUFDRDtnQkFDQyxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixJQUFJLEVBQUUsNEJBQTRCO2dCQUNsQyxFQUFFLEVBQUUsV0FBVzthQUNmO1NBQ0QsQ0FBQztRQUNPLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFakIsMkNBQVE7OztJQUFSO0lBRUEsQ0FBQzs7Ozs7SUFFRCxnREFBYTs7OztJQUFiLFVBQWMsQ0FBQztRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7O2dCQXJDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0Isb1JBQWlEOztpQkFFakQ7Ozs7OzhCQUVDLEtBQUs7eUJBc0JMLE1BQU07O0lBWVIsK0JBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQW5DWSx3QkFBd0I7OztJQUNwQywrQ0FxQkc7O0lBQ0gsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LXNvY2lhbC1pY29ucycsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXNvY2lhbC1pY29ucy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N1a3Utc29jaWFsLWljb25zLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVNvY2lhbEljb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgc29jaWFsSWNvbnMgPVtcblx0XHRcdHtcblx0XHRcdFx0aWNvbjogJ2ZhIGZhLXR3aXR0ZXInLFxuXHRcdFx0XHRwYXRoOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9sb2dpbicsXG5cdFx0XHRcdGlkOiAndHdpdHRlcidcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGljb246ICdmYSBmYS1mYWNlYm9vaycsXG5cdFx0XHRcdHBhdGg6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vJyxcblx0XHRcdFx0aWQ6ICdmYWNlYm9vaydcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGljb246ICdmYSBmYS1saW5rZWRpbicsXG5cdFx0XHRcdHBhdGg6ICdodHRwczovL2luLmxpbmtlZGluLmNvbS8nLFxuXHRcdFx0XHRpZDogJ2xpbmtlZGluJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWNvbjogJ2ZhIGZhLWluc3RhZ3JhbScsXG5cdFx0XHRcdHBhdGg6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tLycsXG5cdFx0XHRcdGlkOiAnaW5zdGFncmFtJ1xuXHRcdFx0fVxuXHRcdF07XG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0fVxuXG5cdHNlbmRSb3V0ZVBhdGgoZSkge1xuXHRcdHRoaXMuYWN0aW9uLmVtaXQoZSk7XG5cdH1cblxuXG59Il19