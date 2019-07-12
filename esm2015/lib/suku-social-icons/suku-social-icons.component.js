/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuSocialIconsComponent {
    constructor() {
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
    ngOnInit() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zb2NpYWwtaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc29jaWFsLWljb25zL3N1a3Utc29jaWFsLWljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sd0JBQXdCO0lBd0JwQztRQXZCUyxnQkFBVyxHQUFFO1lBQ3BCO2dCQUNDLElBQUksRUFBRSxlQUFlO2dCQUNyQixJQUFJLEVBQUUsMkJBQTJCO2dCQUNqQyxFQUFFLEVBQUUsU0FBUzthQUNiO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsSUFBSSxFQUFFLDJCQUEyQjtnQkFDakMsRUFBRSxFQUFFLFVBQVU7YUFDZDtZQUNEO2dCQUNDLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLElBQUksRUFBRSwwQkFBMEI7Z0JBQ2hDLEVBQUUsRUFBRSxVQUFVO2FBQ2Q7WUFDRDtnQkFDQyxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixJQUFJLEVBQUUsNEJBQTRCO2dCQUNsQyxFQUFFLEVBQUUsV0FBVzthQUNmO1NBQ0QsQ0FBQztRQUNPLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFakIsUUFBUTtJQUVSLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7WUFyQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHNSQUFpRDs7YUFFakQ7Ozs7OzBCQUVDLEtBQUs7cUJBc0JMLE1BQU07Ozs7SUF0QlAsK0NBcUJHOztJQUNILDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1zb2NpYWwtaWNvbnMnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1zb2NpYWwtaWNvbnMuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LXNvY2lhbC1pY29ucy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VTb2NpYWxJY29uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIHNvY2lhbEljb25zID1bXG5cdFx0XHR7XG5cdFx0XHRcdGljb246ICdmYSBmYS10d2l0dGVyJyxcblx0XHRcdFx0cGF0aDogJ2h0dHBzOi8vdHdpdHRlci5jb20vbG9naW4nLFxuXHRcdFx0XHRpZDogJ3R3aXR0ZXInXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiAnZmEgZmEtZmFjZWJvb2snLFxuXHRcdFx0XHRwYXRoOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLycsXG5cdFx0XHRcdGlkOiAnZmFjZWJvb2snXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiAnZmEgZmEtbGlua2VkaW4nLFxuXHRcdFx0XHRwYXRoOiAnaHR0cHM6Ly9pbi5saW5rZWRpbi5jb20vJyxcblx0XHRcdFx0aWQ6ICdsaW5rZWRpbidcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGljb246ICdmYSBmYS1pbnN0YWdyYW0nLFxuXHRcdFx0XHRwYXRoOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS8nLFxuXHRcdFx0XHRpZDogJ2luc3RhZ3JhbSdcblx0XHRcdH1cblx0XHRdO1xuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdH1cblxuXHRzZW5kUm91dGVQYXRoKGUpIHtcblx0XHR0aGlzLmFjdGlvbi5lbWl0KGUpO1xuXHR9XG5cblxufVxuIl19