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
                path: '/companyInfo',
                id: 'twitter'
            },
            {
                icon: 'fa fa-facebook',
                path: '/companyInfo',
                id: 'facebook'
            },
            {
                icon: 'fa fa-linkedin',
                path: '/companyInfo',
                id: 'linkedin'
            },
            {
                icon: 'fa fa-instagram',
                path: '/companyInfo',
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
                template: "<ul id=\"socialIcon\" class=\"icon-effect icon-effect-1a\">\n  <li class=\"mrc-2\" *ngFor=\"let icon of socialIcons;let i=index\" >\n    <a class=\"icon\" id=\"icon?.id\" (click)=\"sendRoutePath(icon?.path)\"><i [ngClass]=\"icon?.icon\"></i></a>\n  </li>\n</ul>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zb2NpYWwtaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc29jaWFsLWljb25zL3N1a3Utc29jaWFsLWljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sd0JBQXdCO0lBR3BDO1FBRFUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVoQixRQUFRO1FBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNsQjtnQkFDQyxJQUFJLEVBQUUsZUFBZTtnQkFDckIsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLEVBQUUsRUFBRSxTQUFTO2FBQ2I7WUFDRDtnQkFDQyxJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixJQUFJLEVBQUUsY0FBYztnQkFDcEIsRUFBRSxFQUFFLFVBQVU7YUFDZDtZQUNEO2dCQUNDLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLElBQUksRUFBRSxjQUFjO2dCQUNwQixFQUFFLEVBQUUsVUFBVTthQUNkO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLEVBQUUsRUFBRSxXQUFXO2FBQ2Y7U0FDQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7OztZQXJDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsaVJBQWlEOzthQUVqRDs7Ozs7MEJBRUMsS0FBSztxQkFDTCxNQUFNOzs7O0lBRFAsK0NBQXFCOztJQUNyQiwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3Utc29jaWFsLWljb25zJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3Utc29jaWFsLWljb25zLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3Utc29jaWFsLWljb25zLmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VTb2NpYWxJY29uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIHNvY2lhbEljb25zO1xuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zb2NpYWxJY29ucyA9IFtcblx0XHRcdHtcblx0XHRcdFx0aWNvbjogJ2ZhIGZhLXR3aXR0ZXInLFxuXHRcdFx0XHRwYXRoOiAnL2NvbXBhbnlJbmZvJyxcblx0XHRcdFx0aWQ6ICd0d2l0dGVyJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWNvbjogJ2ZhIGZhLWZhY2Vib29rJyxcblx0XHRcdFx0cGF0aDogJy9jb21wYW55SW5mbycsXG5cdFx0XHRcdGlkOiAnZmFjZWJvb2snXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiAnZmEgZmEtbGlua2VkaW4nLFxuXHRcdFx0XHRwYXRoOiAnL2NvbXBhbnlJbmZvJyxcblx0XHRcdFx0aWQ6ICdsaW5rZWRpbidcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGljb246ICdmYSBmYS1pbnN0YWdyYW0nLFxuXHRcdFx0XHRwYXRoOiAnL2NvbXBhbnlJbmZvJyxcblx0XHRcdFx0aWQ6ICdpbnN0YWdyYW0nXG5cdFx0XHR9XG4gICAgXTtcblx0fVxuXG5cdHNlbmRSb3V0ZVBhdGgoZSkge1xuXHRcdHRoaXMuYWN0aW9uLmVtaXQoZSk7XG5cdH0gXG5cblxufVxuIl19