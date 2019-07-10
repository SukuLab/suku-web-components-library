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
                    template: "<ul id=\"socialIcon\" class=\"icon-effect icon-effect-1a\">\n  <li class=\"mrc-2\" *ngFor=\"let icon of socialIcons;let i=index\" >\n    <a class=\"icon\" id=\"icon?.id\" href=\"{{icon?.path}}\" target=\"_blank\"><i [ngClass]=\"icon?.icon\" ></i></a>\n  </li>\n</ul>",
                    styles: ["ul{list-style:none;padding:0!important}ul>li{display:inline;padding:0!important;margin-right:10px}.icon{display:inline-block;position:relative;z-index:0;width:39px;height:39px;border-radius:50%;font-size:20px!important;line-height:42px;text-align:center;box-shadow:0 2px 2px 0 rgba(0,0,0,.1);background-color:#fff}.icon:after{position:absolute;width:100%;height:100%;border-radius:50%;content:'';box-sizing:content-box}.icon-effect .icon{transition:.5s}.icon-effect .icon:after{top:-7px;left:-7px;box-shadow:0 0 0 3px #caec1c;color:#fff;transition:.5s;-webkit-transform:scale(.9);transform:scale(.9);opacity:0;padding:6.9px 7.1px 8px}.icon-effect-1a .icon:hover{background-color:#caec1c;color:#fff;cursor:pointer!important}.icon-effect-1a .icon:hover:after{-webkit-transform:scale(.9);transform:scale(.9);opacity:1}.mrc-2{margin-right:2rem!important}@media only screen and (min-width:1440px){.mrc-2{margin-right:3.2rem!important}}@media only screen and (min-width:1640px){.mrc-2{margin-right:3.8rem!important}}@media only screen and (min-width:1800px){.mrc-2{margin-right:4.5rem!important}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zb2NpYWwtaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc29jaWFsLWljb25zL3N1a3Utc29jaWFsLWljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQVFDO1FBRFUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVoQiwyQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2xCO2dCQUNDLElBQUksRUFBRSxlQUFlO2dCQUNyQixJQUFJLEVBQUUsMkJBQTJCO2dCQUNqQyxFQUFFLEVBQUUsU0FBUzthQUNiO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsSUFBSSxFQUFFLDJCQUEyQjtnQkFDakMsRUFBRSxFQUFFLFVBQVU7YUFDZDtZQUNEO2dCQUNDLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLElBQUksRUFBRSwwQkFBMEI7Z0JBQ2hDLEVBQUUsRUFBRSxVQUFVO2FBQ2Q7WUFDRDtnQkFDQyxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixJQUFJLEVBQUUsNEJBQTRCO2dCQUNsQyxFQUFFLEVBQUUsV0FBVzthQUNmO1NBQ0QsQ0FBQztJQUNILENBQUM7Ozs7O0lBRUQsZ0RBQWE7Ozs7SUFBYixVQUFjLENBQUM7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDOztnQkFyQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHNSQUFpRDs7aUJBRWpEOzs7Ozs4QkFFQyxLQUFLO3lCQUNMLE1BQU07O0lBaUNSLCtCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FuQ1ksd0JBQXdCOzs7SUFDcEMsK0NBQXFCOztJQUNyQiwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3Utc29jaWFsLWljb25zJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3Utc29jaWFsLWljb25zLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3Utc29jaWFsLWljb25zLmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VTb2NpYWxJY29uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIHNvY2lhbEljb25zO1xuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zb2NpYWxJY29ucyA9IFtcblx0XHRcdHtcblx0XHRcdFx0aWNvbjogJ2ZhIGZhLXR3aXR0ZXInLFxuXHRcdFx0XHRwYXRoOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9sb2dpbicsXG5cdFx0XHRcdGlkOiAndHdpdHRlcidcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGljb246ICdmYSBmYS1mYWNlYm9vaycsXG5cdFx0XHRcdHBhdGg6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vJyxcblx0XHRcdFx0aWQ6ICdmYWNlYm9vaydcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGljb246ICdmYSBmYS1saW5rZWRpbicsXG5cdFx0XHRcdHBhdGg6ICdodHRwczovL2luLmxpbmtlZGluLmNvbS8nLFxuXHRcdFx0XHRpZDogJ2xpbmtlZGluJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWNvbjogJ2ZhIGZhLWluc3RhZ3JhbScsXG5cdFx0XHRcdHBhdGg6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tLycsXG5cdFx0XHRcdGlkOiAnaW5zdGFncmFtJ1xuXHRcdFx0fVxuXHRcdF07XG5cdH1cblxuXHRzZW5kUm91dGVQYXRoKGUpIHtcblx0XHR0aGlzLmFjdGlvbi5lbWl0KGUpO1xuXHR9IFxuXG5cbn1cbiJdfQ==