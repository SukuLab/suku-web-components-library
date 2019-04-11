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
                    template: "<ul id=\"socialIcon\" class=\"icon-effect icon-effect-1a\">\n  <li class=\"mrc-2\" *ngFor=\"let icon of socialIcons;let i=index\" >\n    <a class=\"icon\" id=\"icon?.id\" (click)=\"sendRoutePath(icon?.path)\"><i [ngClass]=\"icon?.icon\"></i></a>\n  </li>\n</ul>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zb2NpYWwtaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc29jaWFsLWljb25zL3N1a3Utc29jaWFsLWljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQVFDO1FBRFUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVoQiwyQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2xCO2dCQUNDLElBQUksRUFBRSxlQUFlO2dCQUNyQixJQUFJLEVBQUUsY0FBYztnQkFDcEIsRUFBRSxFQUFFLFNBQVM7YUFDYjtZQUNEO2dCQUNDLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLElBQUksRUFBRSxjQUFjO2dCQUNwQixFQUFFLEVBQUUsVUFBVTthQUNkO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLEVBQUUsRUFBRSxVQUFVO2FBQ2Q7WUFDRDtnQkFDQyxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixJQUFJLEVBQUUsY0FBYztnQkFDcEIsRUFBRSxFQUFFLFdBQVc7YUFDZjtTQUNDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGdEQUFhOzs7O0lBQWIsVUFBYyxDQUFDO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7Z0JBckNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixpUkFBaUQ7O2lCQUVqRDs7Ozs7OEJBRUMsS0FBSzt5QkFDTCxNQUFNOztJQWlDUiwrQkFBQztDQUFBLEFBeENELElBd0NDO1NBbkNZLHdCQUF3Qjs7O0lBQ3BDLCtDQUFxQjs7SUFDckIsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LXNvY2lhbC1pY29ucycsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXNvY2lhbC1pY29ucy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LXNvY2lhbC1pY29ucy5jb21wb25lbnQuc2NzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1U29jaWFsSWNvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKSBzb2NpYWxJY29ucztcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc29jaWFsSWNvbnMgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdGljb246ICdmYSBmYS10d2l0dGVyJyxcblx0XHRcdFx0cGF0aDogJy9jb21wYW55SW5mbycsXG5cdFx0XHRcdGlkOiAndHdpdHRlcidcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGljb246ICdmYSBmYS1mYWNlYm9vaycsXG5cdFx0XHRcdHBhdGg6ICcvY29tcGFueUluZm8nLFxuXHRcdFx0XHRpZDogJ2ZhY2Vib29rJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWNvbjogJ2ZhIGZhLWxpbmtlZGluJyxcblx0XHRcdFx0cGF0aDogJy9jb21wYW55SW5mbycsXG5cdFx0XHRcdGlkOiAnbGlua2VkaW4nXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiAnZmEgZmEtaW5zdGFncmFtJyxcblx0XHRcdFx0cGF0aDogJy9jb21wYW55SW5mbycsXG5cdFx0XHRcdGlkOiAnaW5zdGFncmFtJ1xuXHRcdFx0fVxuICAgIF07XG5cdH1cblxuXHRzZW5kUm91dGVQYXRoKGUpIHtcblx0XHR0aGlzLmFjdGlvbi5lbWl0KGUpO1xuXHR9IFxuXG5cbn1cbiJdfQ==