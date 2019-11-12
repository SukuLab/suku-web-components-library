/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuMailWidgetComponent {
    constructor() {
        // @Input() name = 'dconway@vairog.com';
        this.id = 'suku-mail-widget';
        this.size = '0.9';
        this.color = '#0f0f0f';
        this.weight = '';
        this.customClass = 'pl-3 pt-0 mb-1';
        this.icon = 'suku-mail-icon';
        this.iconId = 'mailIcon';
        this.iconCustomClass = '';
        this.imageWidth = 'img-width';
        this.widgetCustomClass = 'col mt-2';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SukuMailWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-mail-widget',
                template: "<div class=\"{{widgetCustomClass}}\">\r\n  <span class=\"row pb-1\">\r\n    <i class=\"{{icon}} {{iconCustomClass}}\" [id]=\"iconId\"></i>\r\n    <h2 [style.font-size.rem]=\"size\" class=\"{{customClass}}\" id=\"{{id}}\" [style.font-weight]=\"weight\"\r\n      [style.color]=\"color\">\r\n      <ng-content></ng-content>\r\n    </h2>\r\n  </span>\r\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:var(--suku-text-label-one);word-break:break-all!important;display:inline;position:absolute;margin-left:14px;padding-top:3px}.icon{width:25px}"]
            }] }
];
/** @nocollapse */
SukuMailWidgetComponent.ctorParameters = () => [];
SukuMailWidgetComponent.propDecorators = {
    id: [{ type: Input }],
    size: [{ type: Input }],
    color: [{ type: Input }],
    weight: [{ type: Input }],
    customClass: [{ type: Input }],
    icon: [{ type: Input }],
    iconId: [{ type: Input, args: ['icon-id',] }],
    iconCustomClass: [{ type: Input, args: ['icon-custom-class',] }],
    imageWidth: [{ type: Input }],
    widgetCustomClass: [{ type: Input, args: ['widget-custom-class',] }]
};
if (false) {
    /** @type {?} */
    SukuMailWidgetComponent.prototype.id;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.size;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.color;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.weight;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.customClass;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.icon;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.iconId;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.iconCustomClass;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.imageWidth;
    /** @type {?} */
    SukuMailWidgetComponent.prototype.widgetCustomClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tYWlsLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1tYWlsLXdpZGdldC9zdWt1LW1haWwtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHVCQUF1QjtJQVlsQzs7UUFWUyxPQUFFLEdBQUcsa0JBQWtCLENBQUM7UUFDeEIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGdCQUFXLEdBQUcsZ0JBQWdCLENBQUM7UUFDL0IsU0FBSSxHQUFHLGdCQUFnQixDQUFDO1FBQ2YsV0FBTSxHQUFHLFVBQVUsQ0FBQztRQUNWLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLGVBQVUsR0FBRyxXQUFXLENBQUM7UUFDSixzQkFBaUIsR0FBRyxVQUFVLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVqQixRQUFRLEtBQUssQ0FBQzs7O1lBbkJmLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixnWEFBZ0Q7O2FBRWpEOzs7OztpQkFHRSxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLOzBCQUNMLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxLQUFLLFNBQUMsU0FBUzs4QkFDZixLQUFLLFNBQUMsbUJBQW1CO3lCQUN6QixLQUFLO2dDQUNMLEtBQUssU0FBQyxxQkFBcUI7Ozs7SUFUNUIscUNBQWlDOztJQUNqQyx1Q0FBc0I7O0lBQ3RCLHdDQUEyQjs7SUFDM0IseUNBQXFCOztJQUNyQiw4Q0FBd0M7O0lBQ3hDLHVDQUFpQzs7SUFDakMseUNBQXNDOztJQUN0QyxrREFBaUQ7O0lBQ2pELDZDQUFrQzs7SUFDbEMsb0RBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtbWFpbC13aWRnZXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LW1haWwtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LW1haWwtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VNYWlsV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvLyBASW5wdXQoKSBuYW1lID0gJ2Rjb253YXlAdmFpcm9nLmNvbSc7XHJcbiAgQElucHV0KCkgaWQgPSAnc3VrdS1tYWlsLXdpZGdldCc7XHJcbiAgQElucHV0KCkgc2l6ZSA9ICcwLjknO1xyXG4gIEBJbnB1dCgpIGNvbG9yID0gJyMwZjBmMGYnO1xyXG4gIEBJbnB1dCgpIHdlaWdodCA9ICcnO1xyXG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzID0gJ3BsLTMgcHQtMCBtYi0xJztcclxuICBASW5wdXQoKSBpY29uID0gJ3N1a3UtbWFpbC1pY29uJztcclxuICBASW5wdXQoJ2ljb24taWQnKSBpY29uSWQgPSAnbWFpbEljb24nO1xyXG4gIEBJbnB1dCgnaWNvbi1jdXN0b20tY2xhc3MnKSBpY29uQ3VzdG9tQ2xhc3MgPSAnJztcclxuICBASW5wdXQoKSBpbWFnZVdpZHRoID0gJ2ltZy13aWR0aCc7XHJcbiAgQElucHV0KCd3aWRnZXQtY3VzdG9tLWNsYXNzJykgd2lkZ2V0Q3VzdG9tQ2xhc3MgPSAnY29sIG10LTInO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcbn1cclxuIl19