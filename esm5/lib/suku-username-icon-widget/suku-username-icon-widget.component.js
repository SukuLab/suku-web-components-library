/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuUsernameIconWidgetComponent = /** @class */ (function () {
    function SukuUsernameIconWidgetComponent() {
        this.customClass = 'img-circle';
        this.fontSize = '1.6';
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
                    template: "<img alt=\"{{alternativeText}}\" class=\"{{customClass}}\" height=\"{{height}}\" width=\"{{width}}\" src=\"{{image}}\">\n<span class=\"title\" [style.font-size.rem]=\"fontSize\" >{{welcomeTitle}}</span>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.img-circle{display:inline-block;position:relative;z-index:0;line-height:42px;text-align:center;box-shadow:0 2px 2px 0 rgba(0,0,0,.1);background-color:#fff;border-radius:50%}.title{font-size:27px;border-bottom:2px solid #c3cfd9;display:inline-block;margin-left:5px;vertical-align:bottom;font-family:var(--suku-primary-font)}"]
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
        fontSize: [{ type: Input, args: ['image-title-font-size',] }]
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS11c2VybmFtZS1pY29uLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS11c2VybmFtZS1pY29uLXdpZGdldC9zdWt1LXVzZXJuYW1lLWljb24td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFjRTtRQUpzQixnQkFBVyxHQUFHLFlBQVksQ0FBQztRQUVqQixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBRWpDLENBQUM7Ozs7SUFFakIsa0RBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxzTkFBeUQ7O2lCQUUxRDs7Ozs7a0NBRUUsS0FBSyxTQUFDLFlBQVk7eUJBQ2xCLEtBQUssU0FBQyxjQUFjO3dCQUNwQixLQUFLLFNBQUMsYUFBYTt3QkFDbkIsS0FBSyxTQUFDLFdBQVc7OEJBQ2pCLEtBQUssU0FBQyxhQUFhOytCQUNuQixLQUFLLFNBQUMsYUFBYTsyQkFDbkIsS0FBSyxTQUFDLHVCQUF1Qjs7SUFPaEMsc0NBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWRZLCtCQUErQjs7O0lBQzFDLDBEQUFxQzs7SUFDckMsaURBQThCOztJQUM5QixnREFBNEI7O0lBQzVCLGdEQUEwQjs7SUFDMUIsc0RBQWlEOztJQUNqRCx1REFBbUM7O0lBQ25DLG1EQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXVzZXJuYW1lLWljb24td2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtdXNlcm5hbWUtaWNvbi13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXVzZXJuYW1lLWljb24td2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVVzZXJuYW1lSWNvbldpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnaW1hZ2UtdGV4dCcpIGFsdGVybmF0aXZlVGV4dDtcbiAgQElucHV0KCdpbWFnZS1oZWlnaHQnKSBoZWlnaHQ7XG4gIEBJbnB1dCgnaW1hZ2Utd2lkdGgnKSB3aWR0aDtcbiAgQElucHV0KCdpbWFnZS1zcmMnKSBpbWFnZTtcbiAgQElucHV0KCdpbWFnZS1zdHlsZScpIGN1c3RvbUNsYXNzID0gJ2ltZy1jaXJjbGUnO1xuICBASW5wdXQoJ2ltYWdlLXRpdGxlJykgd2VsY29tZVRpdGxlO1xuICBASW5wdXQoJ2ltYWdlLXRpdGxlLWZvbnQtc2l6ZScpIGZvbnRTaXplID0gJzEuNic7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=