/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuSocialIconsComponent = /** @class */ (function () {
    function SukuSocialIconsComponent() {
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuSocialIconsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
        console.log("path", e);
    };
    SukuSocialIconsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-social-icons',
                    template: "<ul id=\"socialIcon\" class=\"icon-effect icon-effect-1a\">\n  <li class=\"mrc-2\" *ngFor=\"let icon of socialIcons;let i=index\" >\n    <a class=\"icon\" id=\"icon?.id\"><i [ngClass]=\"icon?.icon\" (click)=\"sendRoutePath(icon.icon)\"></i></a>\n  </li>\n</ul>",
                    styles: ["ul{list-style:none;padding:0!important}ul>li{display:inline;padding:0!important;margin-right:10px}.icon{display:inline-block;position:relative;z-index:0;width:44px;height:44px;border-radius:50%;font-size:20px!important;color:#d3d2d2;line-height:44px;text-align:center;background-color:#f1f1f1}.icon:after{position:absolute;width:100%;height:100%;border-radius:50%;content:'';box-sizing:content-box}.icon-effect .icon{transition:.5s}.icon-effect .icon:after{top:-7px;left:-7px;box-shadow:0 0 0 3px #caec1c;color:#fff;transition:.5s;-webkit-transform:scale(.9);transform:scale(.9);opacity:0;padding:6.9px 7.1px 8px}.icon-effect-1a .icon:hover{background-color:#caec1c;color:#fff;cursor:pointer!important}.icon-effect-1a .icon:hover:after{-webkit-transform:scale(.9);transform:scale(.9);opacity:1}.mrc-2{margin-right:2rem!important}@media only screen and (min-width:1440px){.mrc-2{margin-right:2.5rem!important}}@media only screen and (min-width:1640px){.mrc-2{margin-right:3.8rem!important}}@media only screen and (min-width:1800px){.mrc-2{margin-right:4.5rem!important}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zb2NpYWwtaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc29jaWFsLWljb25zL3N1a3Utc29jaWFsLWljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQVFDO1FBRFUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVoQiwyQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2xCO2dCQUNDLElBQUksRUFBRSxlQUFlO2dCQUNyQixJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixFQUFFLEVBQUUsU0FBUzthQUNiO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsRUFBRSxFQUFFLFVBQVU7YUFDZDtZQUNEO2dCQUNDLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLEVBQUUsRUFBRSxVQUFVO2FBQ2Q7WUFDRDtnQkFDQyxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixFQUFFLEVBQUUsV0FBVzthQUNmO1NBQ0MsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsZ0RBQWE7Ozs7SUFBYixVQUFjLENBQUM7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDOztnQkFyQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLGdSQUFpRDs7aUJBRWpEOzs7Ozs4QkFFQyxLQUFLO3lCQUNMLE1BQU07O0lBaUNSLCtCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FuQ1ksd0JBQXdCOzs7SUFDcEMsK0NBQXFCOztJQUNyQiwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3Utc29jaWFsLWljb25zJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3Utc29jaWFsLWljb25zLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3Utc29jaWFsLWljb25zLmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VTb2NpYWxJY29uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIHNvY2lhbEljb25zO1xuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zb2NpYWxJY29ucyA9IFtcblx0XHRcdHtcblx0XHRcdFx0aWNvbjogJ2ZhIGZhLXR3aXR0ZXInLFxuXHRcdFx0XHRwYXRoOiAnL3VzZXJEYXNoYm9hcmQnLFxuXHRcdFx0XHRpZDogJ3R3aXR0ZXInXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiAnZmEgZmEtZmFjZWJvb2snLFxuXHRcdFx0XHRwYXRoOiAnL3VzZXJEYXNoYm9hcmQnLFxuXHRcdFx0XHRpZDogJ2ZhY2Vib29rJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWNvbjogJ2ZhIGZhLWxpbmtlZGluJyxcblx0XHRcdFx0cGF0aDogJy91c2VyRGFzaGJvYXJkJyxcblx0XHRcdFx0aWQ6ICdsaW5rZWRpbidcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGljb246ICdmYSBmYS1pbnN0YWdyYW0nLFxuXHRcdFx0XHRwYXRoOiAnL3VzZXJEYXNoYm9hcmQnLFxuXHRcdFx0XHRpZDogJ2luc3RhZ3JhbSdcblx0XHRcdH1cbiAgICBdO1xuXHR9XG5cblx0c2VuZFJvdXRlUGF0aChlKSB7XG5cdFx0Y29uc29sZS5sb2coXCJwYXRoXCIsIGUpO1xuXHR9IFxuXG5cbn1cbiJdfQ==