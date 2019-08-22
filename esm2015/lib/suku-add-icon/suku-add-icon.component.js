/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuAddIconComponent {
    constructor() {
        this.id = 'addNewSellListing';
        this.icon = 'suku-plus-icon suku-md';
        this.customClass = 'add-widget c-pointer';
        this.iconId = 'icon';
        this.iconCustomClass = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuAddIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-add-icon',
                template: "<div class=\"d-flex\">\r\n  <div class=\"add-btn mt-1\">\r\n    <span>\r\n      <i class=\"{{icon}} {{iconCustomClass}}\" [id]=\"iconId\" [style.color]=\"iconColor\"></i>\r\n      <span [style.font-size.px]=\"size\" [style.color]=\"color\" [class]=\"customClass\" [style.font-weight]=\"weight\">\r\n        <ng-content></ng-content>\r\n      </span>\r\n    </span>\r\n  </div>\r\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.c-pointer{cursor:pointer!important}.add-widget{font-family:var(--suku-ternary-font);font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:var(--suku-text-label-one)!important;text-decoration:underline;text-transform:uppercase}.add-btn{width:100%;float:left}.add-btn span{width:100px;height:33px;float:left;font-family:var(--suku-ternary-font);text-transform:uppercase;line-height:32px;text-align:left;text-decoration:none;position:relative;padding:0 0 0 20px}.add-btn span i{float:none;display:inline-block;vertical-align:middle;text-align:center;line-height:31px;border-radius:33px;position:absolute;top:0;left:0;z-index:10}.add-btn a:hover{text-decoration:underline}"]
            }] }
];
/** @nocollapse */
SukuAddIconComponent.ctorParameters = () => [];
SukuAddIconComponent.propDecorators = {
    size: [{ type: Input }],
    color: [{ type: Input }],
    weight: [{ type: Input }],
    id: [{ type: Input }],
    icon: [{ type: Input }],
    customClass: [{ type: Input }],
    iconId: [{ type: Input }],
    iconColor: [{ type: Input }],
    iconCustomClass: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuAddIconComponent.prototype.size;
    /** @type {?} */
    SukuAddIconComponent.prototype.color;
    /** @type {?} */
    SukuAddIconComponent.prototype.weight;
    /** @type {?} */
    SukuAddIconComponent.prototype.id;
    /** @type {?} */
    SukuAddIconComponent.prototype.icon;
    /** @type {?} */
    SukuAddIconComponent.prototype.customClass;
    /** @type {?} */
    SukuAddIconComponent.prototype.iconId;
    /** @type {?} */
    SukuAddIconComponent.prototype.iconColor;
    /** @type {?} */
    SukuAddIconComponent.prototype.iconCustomClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hZGQtaWNvbi9zdWt1LWFkZC1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyxvQkFBb0I7SUFXL0I7UUFQUyxPQUFFLEdBQUcsbUJBQW1CLENBQUM7UUFDekIsU0FBSSxHQUFHLHdCQUF3QixDQUFDO1FBQ2hDLGdCQUFXLEdBQUcsc0JBQXNCLENBQUM7UUFDckMsV0FBTSxHQUFHLE1BQU0sQ0FBQztRQUVoQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztJQUVkLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDhZQUE2Qzs7YUFFOUM7Ozs7O21CQUVFLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO2lCQUNMLEtBQUs7bUJBQ0wsS0FBSzswQkFDTCxLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzs7O0lBUk4sb0NBQWM7O0lBQ2QscUNBQWU7O0lBQ2Ysc0NBQWdCOztJQUNoQixrQ0FBa0M7O0lBQ2xDLG9DQUF5Qzs7SUFDekMsMkNBQThDOztJQUM5QyxzQ0FBeUI7O0lBQ3pCLHlDQUFtQjs7SUFDbkIsK0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LWFkZC1pY29uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1hZGQtaWNvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1hZGQtaWNvbi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1QWRkSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgc2l6ZTtcclxuICBASW5wdXQoKSBjb2xvcjtcclxuICBASW5wdXQoKSB3ZWlnaHQ7XHJcbiAgQElucHV0KCkgaWQgPSAnYWRkTmV3U2VsbExpc3RpbmcnO1xyXG4gIEBJbnB1dCgpIGljb24gPSAnc3VrdS1wbHVzLWljb24gc3VrdS1tZCc7XHJcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3MgPSAnYWRkLXdpZGdldCBjLXBvaW50ZXInO1xyXG4gIEBJbnB1dCgpIGljb25JZCA9ICdpY29uJztcclxuICBASW5wdXQoKSBpY29uQ29sb3I7XHJcbiAgQElucHV0KCkgaWNvbkN1c3RvbUNsYXNzID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19