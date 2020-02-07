/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-icon-widget/suku-icon-widget.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuIconWidgetComponent = /** @class */ (function () {
    function SukuIconWidgetComponent() {
        this.icon = 'suku-shipped-icon';
        this.iconId = 'suku-shipped-icon';
        this.iconInfo = 'suku-shipped-icon';
        this.iconInfoCustomClass = 'suku-shipped-icon';
        this.customIconClass = 'suku-xl';
    }
    /**
     * @return {?}
     */
    SukuIconWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuIconWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-icon-widget',
                    template: "<div class=\"col\">\n  <span class=\"tipTool\" [style.left.rem]=\"positionTooltip\">\n    <span class=\"tipTooltext\" [style.left.rem]=\"positionTooltext\">\n      <span>{{iconInfo}}</span>\n    </span>\n    <i class=\"{{customIconClass}} {{icon}}\" id=\"{{iconId}}\"></i>\n  </span>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.c-pointer{cursor:pointer}.tipTool{position:relative;display:inline-block;height:0;text-align:center;border-radius:15px;background-color:#d8d8d8a8 transparent;font-size:18px;color:#757575;font-weight:700;font-style:italic;font-stretch:normal;letter-spacing:.5px}.tipTool .tipTooltext{visibility:hidden;width:-webkit-max-content;width:-moz-max-content;width:max-content;background-color:#000000eb;text-align:left;border-radius:6px;padding:15px 18px;position:absolute;z-index:1;bottom:150%;left:50%;margin-left:-60px;font-style:normal;font-stretch:normal;font-size:13px;font-family:var(--suku-secondary-font);font-weight:500;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.tipTool .tipTooltext::after{content:\"\";position:absolute;top:100%;left:36.5%;margin-left:0;border-width:5px;border-style:solid;border-color:#191922 transparent transparent;font-style:normal;font-stretch:normal}.tipTool:hover .tipTooltext{visibility:visible}.tooltip-info-content{font-family:var(--suku-secondary-font)}"]
                }] }
    ];
    /** @nocollapse */
    SukuIconWidgetComponent.ctorParameters = function () { return []; };
    SukuIconWidgetComponent.propDecorators = {
        icon: [{ type: Input }],
        iconId: [{ type: Input, args: ['icon-id',] }],
        iconInfo: [{ type: Input, args: ['icon-info',] }],
        positionTooltip: [{ type: Input, args: ['position-tooltip',] }],
        positionTooltext: [{ type: Input, args: ['position-tooltext',] }],
        iconInfoCustomClass: [{ type: Input, args: ['icon-info-custom-class',] }],
        customIconClass: [{ type: Input, args: ['custom-icon-class',] }]
    };
    return SukuIconWidgetComponent;
}());
export { SukuIconWidgetComponent };
if (false) {
    /** @type {?} */
    SukuIconWidgetComponent.prototype.icon;
    /** @type {?} */
    SukuIconWidgetComponent.prototype.iconId;
    /** @type {?} */
    SukuIconWidgetComponent.prototype.iconInfo;
    /** @type {?} */
    SukuIconWidgetComponent.prototype.positionTooltip;
    /** @type {?} */
    SukuIconWidgetComponent.prototype.positionTooltext;
    /** @type {?} */
    SukuIconWidgetComponent.prototype.iconInfoCustomClass;
    /** @type {?} */
    SukuIconWidgetComponent.prototype.customIconClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1pY29uLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1pY29uLXdpZGdldC9zdWt1LWljb24td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBYUU7UUFQUyxTQUFJLEdBQUcsbUJBQW1CLENBQUM7UUFDbEIsV0FBTSxHQUFHLG1CQUFtQixDQUFDO1FBQzNCLGFBQVEsR0FBRyxtQkFBbUIsQ0FBQztRQUdsQix3QkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztRQUMvQyxvQkFBZSxHQUFHLFNBQVMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRWpCLDBDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsK1NBQWdEOztpQkFFakQ7Ozs7O3VCQUVFLEtBQUs7eUJBQ0wsS0FBSyxTQUFDLFNBQVM7MkJBQ2YsS0FBSyxTQUFDLFdBQVc7a0NBQ2pCLEtBQUssU0FBQyxrQkFBa0I7bUNBQ3hCLEtBQUssU0FBQyxtQkFBbUI7c0NBQ3pCLEtBQUssU0FBQyx3QkFBd0I7a0NBQzlCLEtBQUssU0FBQyxtQkFBbUI7O0lBTTVCLDhCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FiWSx1QkFBdUI7OztJQUNsQyx1Q0FBb0M7O0lBQ3BDLHlDQUErQzs7SUFDL0MsMkNBQW1EOztJQUNuRCxrREFBMkM7O0lBQzNDLG1EQUE2Qzs7SUFDN0Msc0RBQTJFOztJQUMzRSxrREFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1pY29uLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWljb24td2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1pY29uLXdpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VJY29uV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaWNvbiA9ICdzdWt1LXNoaXBwZWQtaWNvbic7XG4gIEBJbnB1dCgnaWNvbi1pZCcpIGljb25JZCA9ICdzdWt1LXNoaXBwZWQtaWNvbic7XG4gIEBJbnB1dCgnaWNvbi1pbmZvJykgaWNvbkluZm8gPSAnc3VrdS1zaGlwcGVkLWljb24nO1xuICBASW5wdXQoJ3Bvc2l0aW9uLXRvb2x0aXAnKSBwb3NpdGlvblRvb2x0aXA7XG4gIEBJbnB1dCgncG9zaXRpb24tdG9vbHRleHQnKSBwb3NpdGlvblRvb2x0ZXh0O1xuICBASW5wdXQoJ2ljb24taW5mby1jdXN0b20tY2xhc3MnKSBpY29uSW5mb0N1c3RvbUNsYXNzID0gJ3N1a3Utc2hpcHBlZC1pY29uJztcbiAgQElucHV0KCdjdXN0b20taWNvbi1jbGFzcycpIGN1c3RvbUljb25DbGFzcyA9ICdzdWt1LXhsJztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=