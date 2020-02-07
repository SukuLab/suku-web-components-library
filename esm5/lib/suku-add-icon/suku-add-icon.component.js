/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-add-icon/suku-add-icon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuAddIconComponent = /** @class */ (function () {
    function SukuAddIconComponent() {
        this.id = 'addNewSellListing';
        this.icon = 'suku-plus-icon';
        this.customClass = 'add-widget c-pointer';
        this.iconId = 'icon';
        this.iconCustomClass = 'suku-md';
    }
    /**
     * @return {?}
     */
    SukuAddIconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuAddIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-add-icon',
                    template: "<div class=\"d-flex\">\n  <div class=\"add-btn mt-1\">\n    <span>\n      <i class=\"{{icon}} {{iconCustomClass}}\" [id]=\"iconId\" [style.color]=\"iconColor\"></i>\n      <span [style.font-size.px]=\"size\" [style.color]=\"color\" [class]=\"customClass\" [style.font-weight]=\"weight\">\n        <ng-content></ng-content>\n      </span>\n    </span>\n  </div>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.c-pointer{cursor:pointer!important}.add-widget{font-family:var(--suku-ternary-font);font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;color:var(--suku-text-label-one)!important;text-decoration:underline;text-transform:uppercase}.add-btn{width:100%;float:left}.add-btn span{width:100px;height:33px;float:left;font-family:var(--suku-ternary-font);text-transform:uppercase;line-height:32px;text-align:left;text-decoration:none;position:relative;padding:0 0 0 20px}.add-btn span i{float:none;display:inline-block;vertical-align:middle;text-align:center;line-height:31px;border-radius:33px;position:absolute;top:0;left:0;z-index:10}.add-btn a:hover{text-decoration:underline}"]
                }] }
    ];
    /** @nocollapse */
    SukuAddIconComponent.ctorParameters = function () { return []; };
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
    return SukuAddIconComponent;
}());
export { SukuAddIconComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hZGQtaWNvbi9zdWt1LWFkZC1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWdCRTtRQVBTLE9BQUUsR0FBRyxtQkFBbUIsQ0FBQztRQUN6QixTQUFJLEdBQUcsZ0JBQWdCLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxzQkFBc0IsQ0FBQztRQUNyQyxXQUFNLEdBQUcsTUFBTSxDQUFDO1FBRWhCLG9CQUFlLEdBQUcsU0FBUyxDQUFDO0lBRXJCLENBQUM7Ozs7SUFFakIsdUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsNFhBQTZDOztpQkFFOUM7Ozs7O3VCQUVFLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsS0FBSzs4QkFDTCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSztrQ0FDTCxLQUFLOztJQU9SLDJCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FoQlksb0JBQW9COzs7SUFDL0Isb0NBQWM7O0lBQ2QscUNBQWU7O0lBQ2Ysc0NBQWdCOztJQUNoQixrQ0FBa0M7O0lBQ2xDLG9DQUFpQzs7SUFDakMsMkNBQThDOztJQUM5QyxzQ0FBeUI7O0lBQ3pCLHlDQUFtQjs7SUFDbkIsK0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWFkZC1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtYWRkLWljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWFkZC1pY29uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUFkZEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzaXplO1xuICBASW5wdXQoKSBjb2xvcjtcbiAgQElucHV0KCkgd2VpZ2h0O1xuICBASW5wdXQoKSBpZCA9ICdhZGROZXdTZWxsTGlzdGluZyc7XG4gIEBJbnB1dCgpIGljb24gPSAnc3VrdS1wbHVzLWljb24nO1xuICBASW5wdXQoKSBjdXN0b21DbGFzcyA9ICdhZGQtd2lkZ2V0IGMtcG9pbnRlcic7XG4gIEBJbnB1dCgpIGljb25JZCA9ICdpY29uJztcbiAgQElucHV0KCkgaWNvbkNvbG9yO1xuICBASW5wdXQoKSBpY29uQ3VzdG9tQ2xhc3MgPSAnc3VrdS1tZCc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=