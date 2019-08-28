/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuIconWidgetComponent {
    constructor() {
        this.icon = 'suku-shipped-icon';
        this.iconId = 'suku-shipped-icon';
        this.iconInfo = 'suku-shipped-icon';
        this.iconInfoCustomClass = 'suku-shipped-icon';
        this.customIconClass = 'suku-xl';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuIconWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-icon-widget',
                template: "<div class=\"col\">\n  <span class=\"tipTool\" [style.left.rem]=\"positionTooltip\">\n    <span class=\"tipTooltext\" [style.left.rem]=\"positionTooltext\">\n      <span>{{iconInfo}}</span>\n    </span>\n    <i class=\"{{customIconClass}} {{icon}}\" id=\"{{iconId}}\"></i>\n    <!-- <img [class]=\"customIconClass\" [src]=\"iconOne\" [id]=\"iconOneId\" alt=\"card-img\" width=\"50px\" height=\"50px\"> -->\n  </span>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.c-pointer{cursor:pointer}.tipTool{position:relative;display:inline-block;height:0;text-align:center;border-radius:15px;background-color:#d8d8d8a8 transparent;font-size:18px;color:#757575;font-weight:700;font-style:italic;font-stretch:normal;letter-spacing:.5px}.tipTool .tipTooltext{visibility:hidden;width:-webkit-max-content;width:-moz-max-content;width:max-content;background-color:#000000eb;text-align:left;border-radius:6px;padding:15px 18px;position:absolute;z-index:1;bottom:150%;left:50%;margin-left:-60px;font-style:normal;font-stretch:normal;font-size:13px;font-family:var(--suku-secondary-font);font-weight:500;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.tipTool .tipTooltext::after{content:\"\";position:absolute;top:100%;left:36.5%;margin-left:0;border-width:5px;border-style:solid;border-color:#191922 transparent transparent;font-style:normal;font-stretch:normal}.tipTool:hover .tipTooltext{visibility:visible}.tooltip-info-content{font-family:var(--suku-secondary-font)}"]
            }] }
];
/** @nocollapse */
SukuIconWidgetComponent.ctorParameters = () => [];
SukuIconWidgetComponent.propDecorators = {
    icon: [{ type: Input }],
    iconId: [{ type: Input, args: ['icon-id',] }],
    iconInfo: [{ type: Input, args: ['icon-info',] }],
    positionTooltip: [{ type: Input, args: ['position-tooltip',] }],
    positionTooltext: [{ type: Input, args: ['position-tooltext',] }],
    iconInfoCustomClass: [{ type: Input, args: ['icon-info-custom-class',] }],
    customIconClass: [{ type: Input, args: ['custom-icon-class',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1pY29uLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1pY29uLXdpZGdldC9zdWt1LWljb24td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHVCQUF1QjtJQVFsQztRQVBTLFNBQUksR0FBRyxtQkFBbUIsQ0FBQztRQUNsQixXQUFNLEdBQUcsbUJBQW1CLENBQUM7UUFDM0IsYUFBUSxHQUFHLG1CQUFtQixDQUFDO1FBR2xCLHdCQUFtQixHQUFHLG1CQUFtQixDQUFDO1FBQy9DLG9CQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsb2JBQWdEOzthQUVqRDs7Ozs7bUJBRUUsS0FBSztxQkFDTCxLQUFLLFNBQUMsU0FBUzt1QkFDZixLQUFLLFNBQUMsV0FBVzs4QkFDakIsS0FBSyxTQUFDLGtCQUFrQjsrQkFDeEIsS0FBSyxTQUFDLG1CQUFtQjtrQ0FDekIsS0FBSyxTQUFDLHdCQUF3Qjs4QkFDOUIsS0FBSyxTQUFDLG1CQUFtQjs7OztJQU4xQix1Q0FBb0M7O0lBQ3BDLHlDQUErQzs7SUFDL0MsMkNBQW1EOztJQUNuRCxrREFBMkM7O0lBQzNDLG1EQUE2Qzs7SUFDN0Msc0RBQTJFOztJQUMzRSxrREFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1pY29uLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWljb24td2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1pY29uLXdpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VJY29uV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaWNvbiA9ICdzdWt1LXNoaXBwZWQtaWNvbic7XG4gIEBJbnB1dCgnaWNvbi1pZCcpIGljb25JZCA9ICdzdWt1LXNoaXBwZWQtaWNvbic7XG4gIEBJbnB1dCgnaWNvbi1pbmZvJykgaWNvbkluZm8gPSAnc3VrdS1zaGlwcGVkLWljb24nO1xuICBASW5wdXQoJ3Bvc2l0aW9uLXRvb2x0aXAnKSBwb3NpdGlvblRvb2x0aXA7XG4gIEBJbnB1dCgncG9zaXRpb24tdG9vbHRleHQnKSBwb3NpdGlvblRvb2x0ZXh0O1xuICBASW5wdXQoJ2ljb24taW5mby1jdXN0b20tY2xhc3MnKSBpY29uSW5mb0N1c3RvbUNsYXNzID0gJ3N1a3Utc2hpcHBlZC1pY29uJztcbiAgQElucHV0KCdjdXN0b20taWNvbi1jbGFzcycpIGN1c3RvbUljb25DbGFzcyA9ICdzdWt1LXhsJztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=