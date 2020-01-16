/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuCardTitleComponent {
    constructor() {
        this.cardTitleName = 'INTEREST NAME';
        this.cardTitleId = 'heading';
        this.cardTitlesize = '12';
        this.cardTitlecolor = '#b6b6b6';
        this.cardContentName = 'Spring Cases';
        this.cardContentId = 'Content';
        this.cardContentsize = '17';
        this.cardContentcolor = '#1d1d1d';
        this.cardContentweight = '700';
        this.customTitleClass = 'primary';
        this.customContentClass = 'secondary';
        this.contentTypeArray = false;
        this.displayKey = '';
        this.iconColor = 'black';
        this.iconFontSize = '';
        this.enableInfoTooltip = '';
        this.tooltipInfo = '';
        this.tooltiptextCustomclass = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuCardTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-card-title',
                template: "<div class=\"product-title\">\r\n  <h1 [style.font-size.px]=\"cardTitlesize\" class=\"{{customTitleClass}}\" [style.color]=\"cardTitlecolor\"\r\n    id=\"{{cardTitleId}}\">\r\n    <span class=\"mt-auto mb-auto\">\r\n      {{cardTitleName}}\r\n    </span>\r\n    <span class=\"tipTool\" [style.left.rem]=\"positionTooltip\" *ngIf=\"(enableInfoTooltip == 'true')\">\r\n      <span class=\"tipTooltext {{tooltiptextCustomclass}}\" [style.left.rem]=\"positionTopTooltext\"\r\n        [style.bottom.rem]=\"positionBtmTooltext\">\r\n        <span>{{tooltipInfo}}</span>\r\n      </span>\r\n      <i class=\"fa fa-info-circle infoIcon\" [style.color]=\"iconColor\" [style.font-size.rem]=\"iconFontSize\"></i>\r\n    </span>\r\n  </h1>\r\n  <section *ngIf=\"!contentTypeArray\">\r\n    <h2 [style.font-size.px]=\"cardContentsize\" class=\"{{customContentClass}}\" id=\"{{cardContentId}}\"\r\n      [style.font-weight]=\"cardContentweight\" [style.color]=\"cardContentcolor\">\r\n      {{cardContentName}}\r\n    </h2>\r\n  </section>\r\n  <section *ngIf=\"contentTypeArray\">\r\n    <h2 *ngFor=\"let item of cardContentName;let i=index\" [style.font-size.px]=\"cardContentsize\"\r\n      class=\"{{customContentClass}} mb-0\" id=\"{{cardContentId}}\" [style.font-weight]=\"cardContentweight\"\r\n      [style.color]=\"cardContentcolor\">\r\n      {{ displayKey  ? item[displayKey] : (item | titlecase)}}\r\n    </h2>\r\n    <h2 *ngIf=\"!cardContentName.length\" [style.font-size.px]=\"cardContentsize\"\r\n      class=\"{{customContentClass}} mb-0\" id=\"{{cardContentId}}\" [style.font-weight]=\"cardContentweight\"\r\n      [style.color]=\"cardContentcolor\">\r\n      N/A\r\n    </h2>\r\n  </section>\r\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.primary{font-family:var(--suku-secondary-font);font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:0;color:var(--suku-text-label-one);margin-bottom:1px}.secondary{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:900;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d}.type-1{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-5);font-weight:900;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px}.homepage-section{font-family:Poppins,sans-serif}.title{font-size:23px;font-weight:700}.italic{font-weight:400}.info{text-align:center;height:23px;width:23px;border-radius:100px;position:absolute}.info:hover .info-box{display:block}.info-box{z-index:100;width:300px;border-radius:6px;word-wrap:break-word;background:#000;display:none;position:relative;bottom:-10px;right:100%;text-align:left;padding:20px;font-size:13px;font-family:\"Encode Sans\",sans-serif;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.info-box::after{content:\"\";position:absolute;top:-10px;left:35px;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #191922;font-style:normal;font-stretch:normal}.infoIcon{font-size:20px}.tipTool{position:relative;display:inline-block;height:0;text-align:center;border-radius:15px;background-color:#d8d8d8a8 transparent;font-size:18px;color:#757575;font-weight:700;font-style:italic;font-stretch:normal;letter-spacing:.5px}.tipTool .tipTooltext{visibility:hidden;background-color:#000000eb;text-align:left;border-radius:6px;padding:15px 18px;position:absolute;z-index:1;bottom:-75px;left:-2.6rem;margin-left:-60px;font-style:normal;font-stretch:normal;font-size:13px;font-family:var(--suku-secondary-font);font-weight:500;line-height:1.45;letter-spacing:.4px;color:#b6b6b6;width:250px}.tipTool .tipTooltext::after{content:\"\";position:absolute;top:-9px;left:42.5%;margin-left:0;border-width:5px;border-style:solid;border-color:#191922 transparent transparent;font-style:normal;font-stretch:normal;transform:rotate(-180deg)}.tipTool:hover .tipTooltext{visibility:visible}.tooltip-info-content{font-family:var(--suku-secondary-font)}"]
            }] }
];
/** @nocollapse */
SukuCardTitleComponent.ctorParameters = () => [];
SukuCardTitleComponent.propDecorators = {
    cardTitleName: [{ type: Input, args: ['card-title-name',] }],
    cardTitleId: [{ type: Input, args: ['card-title-id',] }],
    cardTitlesize: [{ type: Input, args: ['card-title-size',] }],
    cardTitlecolor: [{ type: Input, args: ['card-title-color',] }],
    cardTitleweight: [{ type: Input, args: ['card-title-weight',] }],
    cardContentName: [{ type: Input, args: ['card-content-name',] }],
    cardContentId: [{ type: Input, args: ['card-content-id',] }],
    cardContentsize: [{ type: Input, args: ['card-content-size',] }],
    cardContentcolor: [{ type: Input, args: ['card-content-color',] }],
    cardContentweight: [{ type: Input, args: ['card-content-weight',] }],
    customTitleClass: [{ type: Input, args: ['custom-title-class',] }],
    customContentClass: [{ type: Input, args: ['custom-content-class',] }],
    contentTypeArray: [{ type: Input, args: ['content-type-array',] }],
    displayKey: [{ type: Input, args: ['display-key',] }],
    iconColor: [{ type: Input, args: ['icon-color',] }],
    iconFontSize: [{ type: Input, args: ['icon-font-size',] }],
    enableInfoTooltip: [{ type: Input, args: ['enable-info-tooltip',] }],
    tooltipInfo: [{ type: Input, args: ['tooltip-info',] }],
    tooltiptextCustomclass: [{ type: Input, args: ['tooltiptext-customclass',] }],
    positionTooltip: [{ type: Input, args: ['position-tooltip',] }],
    positionTopTooltext: [{ type: Input, args: ['position-top-tooltext',] }],
    positionBtmTooltext: [{ type: Input, args: ['position-btn-tooltext',] }]
};
if (false) {
    /** @type {?} */
    SukuCardTitleComponent.prototype.cardTitleName;
    /** @type {?} */
    SukuCardTitleComponent.prototype.cardTitleId;
    /** @type {?} */
    SukuCardTitleComponent.prototype.cardTitlesize;
    /** @type {?} */
    SukuCardTitleComponent.prototype.cardTitlecolor;
    /** @type {?} */
    SukuCardTitleComponent.prototype.cardTitleweight;
    /** @type {?} */
    SukuCardTitleComponent.prototype.cardContentName;
    /** @type {?} */
    SukuCardTitleComponent.prototype.cardContentId;
    /** @type {?} */
    SukuCardTitleComponent.prototype.cardContentsize;
    /** @type {?} */
    SukuCardTitleComponent.prototype.cardContentcolor;
    /** @type {?} */
    SukuCardTitleComponent.prototype.cardContentweight;
    /** @type {?} */
    SukuCardTitleComponent.prototype.customTitleClass;
    /** @type {?} */
    SukuCardTitleComponent.prototype.customContentClass;
    /** @type {?} */
    SukuCardTitleComponent.prototype.contentTypeArray;
    /** @type {?} */
    SukuCardTitleComponent.prototype.displayKey;
    /** @type {?} */
    SukuCardTitleComponent.prototype.iconColor;
    /** @type {?} */
    SukuCardTitleComponent.prototype.iconFontSize;
    /** @type {?} */
    SukuCardTitleComponent.prototype.enableInfoTooltip;
    /** @type {?} */
    SukuCardTitleComponent.prototype.tooltipInfo;
    /** @type {?} */
    SukuCardTitleComponent.prototype.tooltiptextCustomclass;
    /** @type {?} */
    SukuCardTitleComponent.prototype.positionTooltip;
    /** @type {?} */
    SukuCardTitleComponent.prototype.positionTopTooltext;
    /** @type {?} */
    SukuCardTitleComponent.prototype.positionBtmTooltext;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNhcmQtdGl0bGUvc3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyxzQkFBc0I7SUF1QmpDO1FBdEIwQixrQkFBYSxHQUFHLGVBQWUsQ0FBQztRQUNsQyxnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUN0QixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNwQixtQkFBYyxHQUFHLFNBQVMsQ0FBQztRQUUxQixvQkFBZSxHQUFHLGNBQWMsQ0FBQztRQUNuQyxrQkFBYSxHQUFHLFNBQVMsQ0FBQztRQUN4QixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN0QixxQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDNUIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLHFCQUFnQixHQUFHLFNBQVMsQ0FBQztRQUMzQix1QkFBa0IsR0FBRyxXQUFXLENBQUM7UUFDbkMscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDakIsY0FBUyxHQUFHLE9BQU8sQ0FBQztRQUNoQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNiLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUM5QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNOLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztJQUk5QyxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHFyREFBK0M7O2FBRWhEOzs7Ozs0QkFFRSxLQUFLLFNBQUMsaUJBQWlCOzBCQUN2QixLQUFLLFNBQUMsZUFBZTs0QkFDckIsS0FBSyxTQUFDLGlCQUFpQjs2QkFDdkIsS0FBSyxTQUFDLGtCQUFrQjs4QkFDeEIsS0FBSyxTQUFDLG1CQUFtQjs4QkFDekIsS0FBSyxTQUFDLG1CQUFtQjs0QkFDekIsS0FBSyxTQUFDLGlCQUFpQjs4QkFDdkIsS0FBSyxTQUFDLG1CQUFtQjsrQkFDekIsS0FBSyxTQUFDLG9CQUFvQjtnQ0FDMUIsS0FBSyxTQUFDLHFCQUFxQjsrQkFDM0IsS0FBSyxTQUFDLG9CQUFvQjtpQ0FDMUIsS0FBSyxTQUFDLHNCQUFzQjsrQkFDNUIsS0FBSyxTQUFDLG9CQUFvQjt5QkFDMUIsS0FBSyxTQUFDLGFBQWE7d0JBQ25CLEtBQUssU0FBQyxZQUFZOzJCQUNsQixLQUFLLFNBQUMsZ0JBQWdCO2dDQUN0QixLQUFLLFNBQUMscUJBQXFCOzBCQUMzQixLQUFLLFNBQUMsY0FBYztxQ0FDcEIsS0FBSyxTQUFDLHlCQUF5Qjs4QkFDL0IsS0FBSyxTQUFDLGtCQUFrQjtrQ0FDeEIsS0FBSyxTQUFDLHVCQUF1QjtrQ0FDN0IsS0FBSyxTQUFDLHVCQUF1Qjs7OztJQXJCOUIsK0NBQTBEOztJQUMxRCw2Q0FBZ0Q7O0lBQ2hELCtDQUErQzs7SUFDL0MsZ0RBQXNEOztJQUN0RCxpREFBNEM7O0lBQzVDLGlEQUE2RDs7SUFDN0QsK0NBQW9EOztJQUNwRCxpREFBbUQ7O0lBQ25ELGtEQUEwRDs7SUFDMUQsbURBQXdEOztJQUN4RCxrREFBMEQ7O0lBQzFELG9EQUFnRTs7SUFDaEUsa0RBQXNEOztJQUN0RCw0Q0FBc0M7O0lBQ3RDLDJDQUF5Qzs7SUFDekMsOENBQTJDOztJQUMzQyxtREFBcUQ7O0lBQ3JELDZDQUF3Qzs7SUFDeEMsd0RBQThEOztJQUM5RCxpREFBMkM7O0lBQzNDLHFEQUFvRDs7SUFDcEQscURBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtY2FyZC10aXRsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtY2FyZC10aXRsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VDYXJkVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgnY2FyZC10aXRsZS1uYW1lJykgY2FyZFRpdGxlTmFtZSA9ICdJTlRFUkVTVCBOQU1FJztcclxuICBASW5wdXQoJ2NhcmQtdGl0bGUtaWQnKSBjYXJkVGl0bGVJZCA9ICdoZWFkaW5nJztcclxuICBASW5wdXQoJ2NhcmQtdGl0bGUtc2l6ZScpIGNhcmRUaXRsZXNpemUgPSAnMTInO1xyXG4gIEBJbnB1dCgnY2FyZC10aXRsZS1jb2xvcicpIGNhcmRUaXRsZWNvbG9yID0gJyNiNmI2YjYnO1xyXG4gIEBJbnB1dCgnY2FyZC10aXRsZS13ZWlnaHQnKSBjYXJkVGl0bGV3ZWlnaHQ7XHJcbiAgQElucHV0KCdjYXJkLWNvbnRlbnQtbmFtZScpIGNhcmRDb250ZW50TmFtZSA9ICdTcHJpbmcgQ2FzZXMnO1xyXG4gIEBJbnB1dCgnY2FyZC1jb250ZW50LWlkJykgY2FyZENvbnRlbnRJZCA9ICdDb250ZW50JztcclxuICBASW5wdXQoJ2NhcmQtY29udGVudC1zaXplJykgY2FyZENvbnRlbnRzaXplID0gJzE3JztcclxuICBASW5wdXQoJ2NhcmQtY29udGVudC1jb2xvcicpIGNhcmRDb250ZW50Y29sb3IgPSAnIzFkMWQxZCc7XHJcbiAgQElucHV0KCdjYXJkLWNvbnRlbnQtd2VpZ2h0JykgY2FyZENvbnRlbnR3ZWlnaHQgPSAnNzAwJztcclxuICBASW5wdXQoJ2N1c3RvbS10aXRsZS1jbGFzcycpIGN1c3RvbVRpdGxlQ2xhc3MgPSAncHJpbWFyeSc7XHJcbiAgQElucHV0KCdjdXN0b20tY29udGVudC1jbGFzcycpIGN1c3RvbUNvbnRlbnRDbGFzcyA9ICdzZWNvbmRhcnknO1xyXG4gIEBJbnB1dCgnY29udGVudC10eXBlLWFycmF5JykgY29udGVudFR5cGVBcnJheSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgnZGlzcGxheS1rZXknKSBkaXNwbGF5S2V5ID0gJyc7XHJcbiAgQElucHV0KCdpY29uLWNvbG9yJykgaWNvbkNvbG9yID0gJ2JsYWNrJztcclxuICBASW5wdXQoJ2ljb24tZm9udC1zaXplJykgaWNvbkZvbnRTaXplID0gJyc7XHJcbiAgQElucHV0KCdlbmFibGUtaW5mby10b29sdGlwJykgZW5hYmxlSW5mb1Rvb2x0aXAgPSAnJztcclxuICBASW5wdXQoJ3Rvb2x0aXAtaW5mbycpIHRvb2x0aXBJbmZvID0gJyc7XHJcbiAgQElucHV0KCd0b29sdGlwdGV4dC1jdXN0b21jbGFzcycpIHRvb2x0aXB0ZXh0Q3VzdG9tY2xhc3MgPSAnJztcclxuICBASW5wdXQoJ3Bvc2l0aW9uLXRvb2x0aXAnKSBwb3NpdGlvblRvb2x0aXA7XHJcbiAgQElucHV0KCdwb3NpdGlvbi10b3AtdG9vbHRleHQnKSBwb3NpdGlvblRvcFRvb2x0ZXh0O1xyXG4gIEBJbnB1dCgncG9zaXRpb24tYnRuLXRvb2x0ZXh0JykgcG9zaXRpb25CdG1Ub29sdGV4dDtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==