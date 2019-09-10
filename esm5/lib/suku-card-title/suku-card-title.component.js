/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuCardTitleComponent = /** @class */ (function () {
    function SukuCardTitleComponent() {
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
    SukuCardTitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuCardTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-card-title',
                    template: "<div class=\"product-title\">\n  <h1 [style.font-size.px]=\"cardTitlesize\" class=\"{{customTitleClass}}\" [style.color]=\"cardTitlecolor\"\n    id=\"{{cardTitleId}}\">\n    <span class=\"mt-auto mb-auto\">\n      {{cardTitleName}}\n    </span>\n    <span class=\"tipTool\" [style.left.rem]=\"positionTooltip\" *ngIf=\"(enableInfoTooltip == 'true')\">\n      <span class=\"tipTooltext {{tooltiptextCustomclass}}\" [style.left.rem]=\"positionTopTooltext\"\n        [style.bottom.rem]=\"positionBtmTooltext\">\n        <span>{{tooltipInfo}}</span>\n      </span>\n      <i class=\"fa fa-info-circle infoIcon\" [style.color]=\"iconColor\" [style.font-size.rem]=\"iconFontSize\"></i>\n    </span>\n  </h1>\n  <section *ngIf=\"!contentTypeArray\">\n    <h2 [style.font-size.px]=\"cardContentsize\" class=\"{{customContentClass}}\" id=\"{{cardContentId}}\"\n      [style.font-weight]=\"cardContentweight\" [style.color]=\"cardContentcolor\">\n      {{cardContentName}}\n    </h2>\n  </section>\n  <section *ngIf=\"contentTypeArray\">\n    <h2 *ngFor=\"let item of cardContentName;let i=index\" [style.font-size.px]=\"cardContentsize\"\n      class=\"{{customContentClass}} mb-0\" id=\"{{cardContentId}}\" [style.font-weight]=\"cardContentweight\"\n      [style.color]=\"cardContentcolor\">\n      {{ displayKey  ? item[displayKey] : (item | titlecase)}}\n    </h2>\n  </section>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.primary{font-family:var(--suku-secondary-font);font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:0;color:var(--suku-text-label-one);margin-bottom:1px}.secondary{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:900;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d}.type-1{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-5);font-weight:900;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px}.homepage-section{font-family:Poppins,sans-serif}.title{font-size:23px;font-weight:700}.italic{font-weight:400}.info{text-align:center;height:23px;width:23px;border-radius:100px;position:absolute}.info:hover .info-box{display:block}.info-box{z-index:100;width:300px;border-radius:6px;word-wrap:break-word;background:#000;display:none;position:relative;bottom:-10px;right:100%;text-align:left;padding:20px;font-size:13px;font-family:\"Encode Sans\",sans-serif;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.info-box::after{content:\"\";position:absolute;top:-10px;left:35px;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #191922;font-style:normal;font-stretch:normal}.infoIcon{font-size:20px}.tipTool{position:relative;display:inline-block;height:0;text-align:center;border-radius:15px;background-color:#d8d8d8a8 transparent;font-size:18px;color:#757575;font-weight:700;font-style:italic;font-stretch:normal;letter-spacing:.5px}.tipTool .tipTooltext{visibility:hidden;background-color:#000000eb;text-align:left;border-radius:6px;padding:15px 18px;position:absolute;z-index:1;bottom:-75px;left:-2.6rem;margin-left:-60px;font-style:normal;font-stretch:normal;font-size:13px;font-family:var(--suku-secondary-font);font-weight:500;line-height:1.45;letter-spacing:.4px;color:#b6b6b6;width:250px}.tipTool .tipTooltext::after{content:\"\";position:absolute;top:-9px;left:42.5%;margin-left:0;border-width:5px;border-style:solid;border-color:#191922 transparent transparent;font-style:normal;font-stretch:normal;transform:rotate(-180deg)}.tipTool:hover .tipTooltext{visibility:visible}.tooltip-info-content{font-family:var(--suku-secondary-font)}"]
                }] }
    ];
    /** @nocollapse */
    SukuCardTitleComponent.ctorParameters = function () { return []; };
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
    return SukuCardTitleComponent;
}());
export { SukuCardTitleComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNhcmQtdGl0bGUvc3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBNEJFO1FBdEIwQixrQkFBYSxHQUFHLGVBQWUsQ0FBQztRQUNsQyxnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUN0QixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNwQixtQkFBYyxHQUFHLFNBQVMsQ0FBQztRQUUxQixvQkFBZSxHQUFHLGNBQWMsQ0FBQztRQUNuQyxrQkFBYSxHQUFHLFNBQVMsQ0FBQztRQUN4QixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN0QixxQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDNUIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLHFCQUFnQixHQUFHLFNBQVMsQ0FBQztRQUMzQix1QkFBa0IsR0FBRyxXQUFXLENBQUM7UUFDbkMscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDakIsY0FBUyxHQUFHLE9BQU8sQ0FBQztRQUNoQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNiLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUM5QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNOLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztJQUk5QyxDQUFDOzs7O0lBRWpCLHlDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsZzNDQUErQzs7aUJBRWhEOzs7OztnQ0FFRSxLQUFLLFNBQUMsaUJBQWlCOzhCQUN2QixLQUFLLFNBQUMsZUFBZTtnQ0FDckIsS0FBSyxTQUFDLGlCQUFpQjtpQ0FDdkIsS0FBSyxTQUFDLGtCQUFrQjtrQ0FDeEIsS0FBSyxTQUFDLG1CQUFtQjtrQ0FDekIsS0FBSyxTQUFDLG1CQUFtQjtnQ0FDekIsS0FBSyxTQUFDLGlCQUFpQjtrQ0FDdkIsS0FBSyxTQUFDLG1CQUFtQjttQ0FDekIsS0FBSyxTQUFDLG9CQUFvQjtvQ0FDMUIsS0FBSyxTQUFDLHFCQUFxQjttQ0FDM0IsS0FBSyxTQUFDLG9CQUFvQjtxQ0FDMUIsS0FBSyxTQUFDLHNCQUFzQjttQ0FDNUIsS0FBSyxTQUFDLG9CQUFvQjs2QkFDMUIsS0FBSyxTQUFDLGFBQWE7NEJBQ25CLEtBQUssU0FBQyxZQUFZOytCQUNsQixLQUFLLFNBQUMsZ0JBQWdCO29DQUN0QixLQUFLLFNBQUMscUJBQXFCOzhCQUMzQixLQUFLLFNBQUMsY0FBYzt5Q0FDcEIsS0FBSyxTQUFDLHlCQUF5QjtrQ0FDL0IsS0FBSyxTQUFDLGtCQUFrQjtzQ0FDeEIsS0FBSyxTQUFDLHVCQUF1QjtzQ0FDN0IsS0FBSyxTQUFDLHVCQUF1Qjs7SUFNaEMsNkJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTVCWSxzQkFBc0I7OztJQUNqQywrQ0FBMEQ7O0lBQzFELDZDQUFnRDs7SUFDaEQsK0NBQStDOztJQUMvQyxnREFBc0Q7O0lBQ3RELGlEQUE0Qzs7SUFDNUMsaURBQTZEOztJQUM3RCwrQ0FBb0Q7O0lBQ3BELGlEQUFtRDs7SUFDbkQsa0RBQTBEOztJQUMxRCxtREFBd0Q7O0lBQ3hELGtEQUEwRDs7SUFDMUQsb0RBQWdFOztJQUNoRSxrREFBc0Q7O0lBQ3RELDRDQUFzQzs7SUFDdEMsMkNBQXlDOztJQUN6Qyw4Q0FBMkM7O0lBQzNDLG1EQUFxRDs7SUFDckQsNkNBQXdDOztJQUN4Qyx3REFBOEQ7O0lBQzlELGlEQUEyQzs7SUFDM0MscURBQW9EOztJQUNwRCxxREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1jYXJkLXRpdGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtY2FyZC10aXRsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtY2FyZC10aXRsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VDYXJkVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ2NhcmQtdGl0bGUtbmFtZScpIGNhcmRUaXRsZU5hbWUgPSAnSU5URVJFU1QgTkFNRSc7XG4gIEBJbnB1dCgnY2FyZC10aXRsZS1pZCcpIGNhcmRUaXRsZUlkID0gJ2hlYWRpbmcnO1xuICBASW5wdXQoJ2NhcmQtdGl0bGUtc2l6ZScpIGNhcmRUaXRsZXNpemUgPSAnMTInO1xuICBASW5wdXQoJ2NhcmQtdGl0bGUtY29sb3InKSBjYXJkVGl0bGVjb2xvciA9ICcjYjZiNmI2JztcbiAgQElucHV0KCdjYXJkLXRpdGxlLXdlaWdodCcpIGNhcmRUaXRsZXdlaWdodDtcbiAgQElucHV0KCdjYXJkLWNvbnRlbnQtbmFtZScpIGNhcmRDb250ZW50TmFtZSA9ICdTcHJpbmcgQ2FzZXMnO1xuICBASW5wdXQoJ2NhcmQtY29udGVudC1pZCcpIGNhcmRDb250ZW50SWQgPSAnQ29udGVudCc7XG4gIEBJbnB1dCgnY2FyZC1jb250ZW50LXNpemUnKSBjYXJkQ29udGVudHNpemUgPSAnMTcnO1xuICBASW5wdXQoJ2NhcmQtY29udGVudC1jb2xvcicpIGNhcmRDb250ZW50Y29sb3IgPSAnIzFkMWQxZCc7XG4gIEBJbnB1dCgnY2FyZC1jb250ZW50LXdlaWdodCcpIGNhcmRDb250ZW50d2VpZ2h0ID0gJzcwMCc7XG4gIEBJbnB1dCgnY3VzdG9tLXRpdGxlLWNsYXNzJykgY3VzdG9tVGl0bGVDbGFzcyA9ICdwcmltYXJ5JztcbiAgQElucHV0KCdjdXN0b20tY29udGVudC1jbGFzcycpIGN1c3RvbUNvbnRlbnRDbGFzcyA9ICdzZWNvbmRhcnknO1xuICBASW5wdXQoJ2NvbnRlbnQtdHlwZS1hcnJheScpIGNvbnRlbnRUeXBlQXJyYXkgPSBmYWxzZTtcbiAgQElucHV0KCdkaXNwbGF5LWtleScpIGRpc3BsYXlLZXkgPSAnJztcbiAgQElucHV0KCdpY29uLWNvbG9yJykgaWNvbkNvbG9yID0gJ2JsYWNrJztcbiAgQElucHV0KCdpY29uLWZvbnQtc2l6ZScpIGljb25Gb250U2l6ZSA9ICcnO1xuICBASW5wdXQoJ2VuYWJsZS1pbmZvLXRvb2x0aXAnKSBlbmFibGVJbmZvVG9vbHRpcCA9ICcnO1xuICBASW5wdXQoJ3Rvb2x0aXAtaW5mbycpIHRvb2x0aXBJbmZvID0gJyc7XG4gIEBJbnB1dCgndG9vbHRpcHRleHQtY3VzdG9tY2xhc3MnKSB0b29sdGlwdGV4dEN1c3RvbWNsYXNzID0gJyc7XG4gIEBJbnB1dCgncG9zaXRpb24tdG9vbHRpcCcpIHBvc2l0aW9uVG9vbHRpcDtcbiAgQElucHV0KCdwb3NpdGlvbi10b3AtdG9vbHRleHQnKSBwb3NpdGlvblRvcFRvb2x0ZXh0O1xuICBASW5wdXQoJ3Bvc2l0aW9uLWJ0bi10b29sdGV4dCcpIHBvc2l0aW9uQnRtVG9vbHRleHQ7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19