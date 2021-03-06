/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-username-icon-widget/suku-username-icon-widget.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuUsernameIconWidgetComponent = /** @class */ (function () {
    function SukuUsernameIconWidgetComponent() {
        this.image = '../../assets/icons/group.svg';
        this.customClass = 'img-circle';
        this.fontSize = '1.6';
        this.userNameId = 'username';
    }
    /**
     * @return {?}
     */
    SukuUsernameIconWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuUsernameIconWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-username-icon-widget',
                    template: "<div class=\"col\">\n  <div class=\"row\">\n    <img alt=\"{{alternativeText}}\" class=\"{{customClass}}\" height=\"{{height}}\" width=\"{{width}}\" src=\"{{image}}\">\n    <span class=\"title mt-auto mb-auto ml-3\" id=\"{{userNameId}}\" [style.font-size.rem]=\"fontSize\">{{welcomeTitle}}</span>\n  </div>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.img-circle{display:inline-block;position:relative;z-index:0;line-height:42px;text-align:center;box-shadow:0 2px 2px 0 rgba(0,0,0,.1);background-color:#fff;border-radius:50%;width:50px;height:50px}.title{font-size:27px;border-bottom:2px solid #c3cfd9;display:inline-block;margin-left:5px;vertical-align:bottom;font-family:var(--suku-primary-font)}@media only screen and (max-device-width:480px){.title{font-size:2.1rem!important}}"]
                }] }
    ];
    /** @nocollapse */
    SukuUsernameIconWidgetComponent.ctorParameters = function () { return []; };
    SukuUsernameIconWidgetComponent.propDecorators = {
        alternativeText: [{ type: Input, args: ['image-text',] }],
        height: [{ type: Input, args: ['image-height',] }],
        width: [{ type: Input, args: ['image-width',] }],
        image: [{ type: Input, args: ['image-src',] }],
        customClass: [{ type: Input, args: ['image-style',] }],
        welcomeTitle: [{ type: Input, args: ['image-title',] }],
        fontSize: [{ type: Input, args: ['image-title-font-size',] }],
        userNameId: [{ type: Input, args: ['image-title-id',] }]
    };
    return SukuUsernameIconWidgetComponent;
}());
export { SukuUsernameIconWidgetComponent };
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
    /** @type {?} */
    SukuUsernameIconWidgetComponent.prototype.userNameId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS11c2VybmFtZS1pY29uLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS11c2VybmFtZS1pY29uLXdpZGdldC9zdWt1LXVzZXJuYW1lLWljb24td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBY0U7UUFMb0IsVUFBSyxHQUFHLDhCQUE4QixDQUFDO1FBQ3JDLGdCQUFXLEdBQUcsWUFBWSxDQUFDO1FBRWpCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDeEIsZUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRWpCLGtEQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsc1VBQXlEOztpQkFFMUQ7Ozs7O2tDQUVFLEtBQUssU0FBQyxZQUFZO3lCQUNsQixLQUFLLFNBQUMsY0FBYzt3QkFDcEIsS0FBSyxTQUFDLGFBQWE7d0JBQ25CLEtBQUssU0FBQyxXQUFXOzhCQUNqQixLQUFLLFNBQUMsYUFBYTsrQkFDbkIsS0FBSyxTQUFDLGFBQWE7MkJBQ25CLEtBQUssU0FBQyx1QkFBdUI7NkJBQzdCLEtBQUssU0FBQyxnQkFBZ0I7O0lBTXpCLHNDQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FkWSwrQkFBK0I7OztJQUMxQywwREFBcUM7O0lBQ3JDLGlEQUE4Qjs7SUFDOUIsZ0RBQTRCOztJQUM1QixnREFBMkQ7O0lBQzNELHNEQUFpRDs7SUFDakQsdURBQW1DOztJQUNuQyxtREFBaUQ7O0lBQ2pELHFEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXVzZXJuYW1lLWljb24td2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtdXNlcm5hbWUtaWNvbi13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXVzZXJuYW1lLWljb24td2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVVzZXJuYW1lSWNvbldpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnaW1hZ2UtdGV4dCcpIGFsdGVybmF0aXZlVGV4dDtcbiAgQElucHV0KCdpbWFnZS1oZWlnaHQnKSBoZWlnaHQ7XG4gIEBJbnB1dCgnaW1hZ2Utd2lkdGgnKSB3aWR0aDtcbiAgQElucHV0KCdpbWFnZS1zcmMnKSBpbWFnZSA9ICcuLi8uLi9hc3NldHMvaWNvbnMvZ3JvdXAuc3ZnJzsgXG4gIEBJbnB1dCgnaW1hZ2Utc3R5bGUnKSBjdXN0b21DbGFzcyA9ICdpbWctY2lyY2xlJztcbiAgQElucHV0KCdpbWFnZS10aXRsZScpIHdlbGNvbWVUaXRsZTtcbiAgQElucHV0KCdpbWFnZS10aXRsZS1mb250LXNpemUnKSBmb250U2l6ZSA9ICcxLjYnO1xuICBASW5wdXQoJ2ltYWdlLXRpdGxlLWlkJykgdXNlck5hbWVJZCA9ICd1c2VybmFtZSc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19