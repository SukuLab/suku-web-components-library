/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuAddressWidgetComponent {
    constructor() {
        this.id = '';
        this.size = '0.9';
        this.color = '#3e3e3e';
        this.weight = '500';
        this.customClass = 'pl-3 mt-auto mb-auto';
        this.icon = 'suku-map-pin';
        this.iconId = 'phoneIcon';
        this.iconCustomClass = 'custom-icon';
        this.widgetCustomClass = 'col';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SukuAddressWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-address-widget',
                template: "<div [class]=\"widgetCustomClass\">\r\n  <span class=\"row mb-1 mt-1\">\r\n    <i class=\"{{icon}} icon {{iconCustomClass}}\" [id]=\"iconId\"></i>\r\n    <h2 [style.font-size.rem]=\"size\" [class]=\"customClass\" id=\"{{id}}\" [style.font-weight]=\"weight\"\r\n      [style.color]=\"color\">\r\n      <ng-content></ng-content>\r\n    </h2>\r\n  </span>\r\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:var(--suku-text-label-one);position:absolute;display:inline;word-break:break-all!important;margin-left:14px;padding-top:3px}.custom-icon{height:2em!important;width:2em!important;background-size:1.2em!important;margin:.1em}"]
            }] }
];
/** @nocollapse */
SukuAddressWidgetComponent.ctorParameters = () => [];
SukuAddressWidgetComponent.propDecorators = {
    id: [{ type: Input }],
    size: [{ type: Input }],
    color: [{ type: Input }],
    weight: [{ type: Input }],
    customClass: [{ type: Input }],
    icon: [{ type: Input, args: ['icon',] }],
    iconId: [{ type: Input, args: ['icon-id',] }],
    iconCustomClass: [{ type: Input, args: ['icon-custom-class',] }],
    widgetCustomClass: [{ type: Input, args: ['widget-custom-class',] }]
};
if (false) {
    /** @type {?} */
    SukuAddressWidgetComponent.prototype.id;
    /** @type {?} */
    SukuAddressWidgetComponent.prototype.size;
    /** @type {?} */
    SukuAddressWidgetComponent.prototype.color;
    /** @type {?} */
    SukuAddressWidgetComponent.prototype.weight;
    /** @type {?} */
    SukuAddressWidgetComponent.prototype.customClass;
    /** @type {?} */
    SukuAddressWidgetComponent.prototype.icon;
    /** @type {?} */
    SukuAddressWidgetComponent.prototype.iconId;
    /** @type {?} */
    SukuAddressWidgetComponent.prototype.iconCustomClass;
    /** @type {?} */
    SukuAddressWidgetComponent.prototype.widgetCustomClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGRyZXNzLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hZGRyZXNzLXdpZGdldC9zdWt1LWFkZHJlc3Mtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLDBCQUEwQjtJQVVyQztRQVRTLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFDUixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxzQkFBc0IsQ0FBQztRQUMvQixTQUFJLEdBQUcsY0FBYyxDQUFDO1FBQ25CLFdBQU0sR0FBRyxXQUFXLENBQUM7UUFDWCxvQkFBZSxHQUFHLGFBQWEsQ0FBQztRQUM5QixzQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVqQixRQUFRLEtBQUssQ0FBQzs7O1lBakJmLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixzWEFBbUQ7O2FBRXBEOzs7OztpQkFFRSxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLOzBCQUNMLEtBQUs7bUJBQ0wsS0FBSyxTQUFDLE1BQU07cUJBQ1osS0FBSyxTQUFDLFNBQVM7OEJBQ2YsS0FBSyxTQUFDLG1CQUFtQjtnQ0FDekIsS0FBSyxTQUFDLHFCQUFxQjs7OztJQVI1Qix3Q0FBaUI7O0lBQ2pCLDBDQUFzQjs7SUFDdEIsMkNBQTJCOztJQUMzQiw0Q0FBd0I7O0lBQ3hCLGlEQUE4Qzs7SUFDOUMsMENBQXFDOztJQUNyQyw0Q0FBdUM7O0lBQ3ZDLHFEQUE0RDs7SUFDNUQsdURBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtYWRkcmVzcy13aWRnZXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWFkZHJlc3Mtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWFkZHJlc3Mtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VBZGRyZXNzV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpZCA9ICcnO1xyXG4gIEBJbnB1dCgpIHNpemUgPSAnMC45JztcclxuICBASW5wdXQoKSBjb2xvciA9ICcjM2UzZTNlJztcclxuICBASW5wdXQoKSB3ZWlnaHQgPSAnNTAwJztcclxuICBASW5wdXQoKSBjdXN0b21DbGFzcyA9ICdwbC0zIG10LWF1dG8gbWItYXV0byc7XHJcbiAgQElucHV0KCdpY29uJykgaWNvbiA9ICdzdWt1LW1hcC1waW4nO1xyXG4gIEBJbnB1dCgnaWNvbi1pZCcpIGljb25JZCA9ICdwaG9uZUljb24nO1xyXG4gIEBJbnB1dCgnaWNvbi1jdXN0b20tY2xhc3MnKSBpY29uQ3VzdG9tQ2xhc3MgPSAnY3VzdG9tLWljb24nO1xyXG4gIEBJbnB1dCgnd2lkZ2V0LWN1c3RvbS1jbGFzcycpIHdpZGdldEN1c3RvbUNsYXNzID0gJ2NvbCc7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxufVxyXG4iXX0=