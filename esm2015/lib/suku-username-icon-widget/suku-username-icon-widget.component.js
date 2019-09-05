/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuUsernameIconWidgetComponent {
    constructor() {
        this.image = '../../assets/icons/group.svg';
        this.customClass = 'img-circle';
        this.fontSize = '1.6';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuUsernameIconWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-username-icon-widget',
                template: "<div class=\"col\">\n  <div class=\"row\">\n    <img alt=\"{{alternativeText}}\" class=\"{{customClass}}\" height=\"{{height}}\" width=\"{{width}}\" src=\"{{image}}\">\n    <span class=\"title mt-auto mb-auto ml-3\" [style.font-size.rem]=\"fontSize\">{{welcomeTitle}}</span>\n  </div>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.img-circle{display:inline-block;position:relative;z-index:0;line-height:42px;text-align:center;box-shadow:0 2px 2px 0 rgba(0,0,0,.1);background-color:#fff;border-radius:50%;width:50px;height:50px}.title{font-size:27px;border-bottom:2px solid #c3cfd9;display:inline-block;margin-left:5px;vertical-align:bottom;font-family:var(--suku-primary-font)}"]
            }] }
];
/** @nocollapse */
SukuUsernameIconWidgetComponent.ctorParameters = () => [];
SukuUsernameIconWidgetComponent.propDecorators = {
    alternativeText: [{ type: Input, args: ['image-text',] }],
    height: [{ type: Input, args: ['image-height',] }],
    width: [{ type: Input, args: ['image-width',] }],
    image: [{ type: Input, args: ['image-src',] }],
    customClass: [{ type: Input, args: ['image-style',] }],
    welcomeTitle: [{ type: Input, args: ['image-title',] }],
    fontSize: [{ type: Input, args: ['image-title-font-size',] }]
};
if (false) {
    /** @type {?} */
    SukuUsernameIconWidgetComponent.prototype.alternativeText;
    /** @type {?} */
    SukuUsernameIconWidgetComponent.prototype.height;
    /** @type {?} */
    SukuUsernameIconWidgetComponent.prototype.width;
    /** @type {?} */
    SukuUsernameIconWidgetComponent.prototype.image;
    /** @type {?} */
    SukuUsernameIconWidgetComponent.prototype.customClass;
    /** @type {?} */
    SukuUsernameIconWidgetComponent.prototype.welcomeTitle;
    /** @type {?} */
    SukuUsernameIconWidgetComponent.prototype.fontSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS11c2VybmFtZS1pY29uLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS11c2VybmFtZS1pY29uLXdpZGdldC9zdWt1LXVzZXJuYW1lLWljb24td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLCtCQUErQjtJQVMxQztRQUxvQixVQUFLLEdBQUcsOEJBQThCLENBQUM7UUFDckMsZ0JBQVcsR0FBRyxZQUFZLENBQUM7UUFFakIsYUFBUSxHQUFHLEtBQUssQ0FBQztJQUVqQyxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLGdUQUF5RDs7YUFFMUQ7Ozs7OzhCQUVFLEtBQUssU0FBQyxZQUFZO3FCQUNsQixLQUFLLFNBQUMsY0FBYztvQkFDcEIsS0FBSyxTQUFDLGFBQWE7b0JBQ25CLEtBQUssU0FBQyxXQUFXOzBCQUNqQixLQUFLLFNBQUMsYUFBYTsyQkFDbkIsS0FBSyxTQUFDLGFBQWE7dUJBQ25CLEtBQUssU0FBQyx1QkFBdUI7Ozs7SUFOOUIsMERBQXFDOztJQUNyQyxpREFBOEI7O0lBQzlCLGdEQUE0Qjs7SUFDNUIsZ0RBQTJEOztJQUMzRCxzREFBaUQ7O0lBQ2pELHVEQUFtQzs7SUFDbkMsbURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtdXNlcm5hbWUtaWNvbi13aWRnZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS11c2VybmFtZS1pY29uLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtdXNlcm5hbWUtaWNvbi13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1VXNlcm5hbWVJY29uV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdpbWFnZS10ZXh0JykgYWx0ZXJuYXRpdmVUZXh0O1xuICBASW5wdXQoJ2ltYWdlLWhlaWdodCcpIGhlaWdodDtcbiAgQElucHV0KCdpbWFnZS13aWR0aCcpIHdpZHRoO1xuICBASW5wdXQoJ2ltYWdlLXNyYycpIGltYWdlID0gJy4uLy4uL2Fzc2V0cy9pY29ucy9ncm91cC5zdmcnO1xuICBASW5wdXQoJ2ltYWdlLXN0eWxlJykgY3VzdG9tQ2xhc3MgPSAnaW1nLWNpcmNsZSc7XG4gIEBJbnB1dCgnaW1hZ2UtdGl0bGUnKSB3ZWxjb21lVGl0bGU7XG4gIEBJbnB1dCgnaW1hZ2UtdGl0bGUtZm9udC1zaXplJykgZm9udFNpemUgPSAnMS42JztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==