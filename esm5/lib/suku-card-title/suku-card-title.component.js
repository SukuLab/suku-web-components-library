/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-card-title/suku-card-title.component.ts
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
                    template: "<div class=\"product-title\">\n  <h1 [style.font-size.px]=\"cardTitlesize\" class=\"{{customTitleClass}}\" [style.color]=\"cardTitlecolor\"\n    id=\"{{cardTitleId}}\">\n    <span class=\"mt-auto mb-auto\">\n      {{cardTitleName}}\n    </span>\n    <span class=\"tipTool\" [style.left.rem]=\"positionTooltip\" *ngIf=\"(enableInfoTooltip == 'true')\">\n      <span class=\"tipTooltext {{tooltiptextCustomclass}}\" [style.left.rem]=\"positionTopTooltext\"\n        [style.bottom.rem]=\"positionBtmTooltext\">\n        <span>{{tooltipInfo}}</span>\n      </span>\n      <i class=\"fa fa-info-circle infoIcon\" [style.color]=\"iconColor\" [style.font-size.rem]=\"iconFontSize\"></i>\n    </span>\n  </h1>\n  <section *ngIf=\"!contentTypeArray\">\n    <h2 [style.font-size.px]=\"cardContentsize\" class=\"{{customContentClass}}\" id=\"{{cardContentId}}\"\n      [style.font-weight]=\"cardContentweight\" [style.color]=\"cardContentcolor\">\n      {{cardContentName}}\n    </h2>\n  </section>\n  <section *ngIf=\"contentTypeArray\">\n    <h2 *ngFor=\"let item of cardContentName;let i=index\" [style.font-size.px]=\"cardContentsize\"\n      class=\"{{customContentClass}} mb-0\" id=\"{{cardContentId}}\" [style.font-weight]=\"cardContentweight\"\n      [style.color]=\"cardContentcolor\">\n      {{ displayKey  ? item[displayKey] : (item | titlecase)}}\n    </h2>\n    <h2 *ngIf=\"!cardContentName.length\" [style.font-size.px]=\"cardContentsize\"\n      class=\"{{customContentClass}} mb-0\" id=\"{{cardContentId}}\" [style.font-weight]=\"cardContentweight\"\n      [style.color]=\"cardContentcolor\">\n      N/A\n    </h2>\n  </section>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNhcmQtdGl0bGUvc3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQTRCRTtRQXRCMEIsa0JBQWEsR0FBRyxlQUFlLENBQUM7UUFDbEMsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDdEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDcEIsbUJBQWMsR0FBRyxTQUFTLENBQUM7UUFFMUIsb0JBQWUsR0FBRyxjQUFjLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxTQUFTLENBQUM7UUFDeEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdEIscUJBQWdCLEdBQUcsU0FBUyxDQUFDO1FBQzVCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMzQixxQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDM0IsdUJBQWtCLEdBQUcsV0FBVyxDQUFDO1FBQ25DLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNoQyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxPQUFPLENBQUM7UUFDaEIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDYixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDOUIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDTiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7SUFJOUMsQ0FBQzs7OztJQUVqQix5Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHFuREFBK0M7O2lCQUVoRDs7Ozs7Z0NBRUUsS0FBSyxTQUFDLGlCQUFpQjs4QkFDdkIsS0FBSyxTQUFDLGVBQWU7Z0NBQ3JCLEtBQUssU0FBQyxpQkFBaUI7aUNBQ3ZCLEtBQUssU0FBQyxrQkFBa0I7a0NBQ3hCLEtBQUssU0FBQyxtQkFBbUI7a0NBQ3pCLEtBQUssU0FBQyxtQkFBbUI7Z0NBQ3pCLEtBQUssU0FBQyxpQkFBaUI7a0NBQ3ZCLEtBQUssU0FBQyxtQkFBbUI7bUNBQ3pCLEtBQUssU0FBQyxvQkFBb0I7b0NBQzFCLEtBQUssU0FBQyxxQkFBcUI7bUNBQzNCLEtBQUssU0FBQyxvQkFBb0I7cUNBQzFCLEtBQUssU0FBQyxzQkFBc0I7bUNBQzVCLEtBQUssU0FBQyxvQkFBb0I7NkJBQzFCLEtBQUssU0FBQyxhQUFhOzRCQUNuQixLQUFLLFNBQUMsWUFBWTsrQkFDbEIsS0FBSyxTQUFDLGdCQUFnQjtvQ0FDdEIsS0FBSyxTQUFDLHFCQUFxQjs4QkFDM0IsS0FBSyxTQUFDLGNBQWM7eUNBQ3BCLEtBQUssU0FBQyx5QkFBeUI7a0NBQy9CLEtBQUssU0FBQyxrQkFBa0I7c0NBQ3hCLEtBQUssU0FBQyx1QkFBdUI7c0NBQzdCLEtBQUssU0FBQyx1QkFBdUI7O0lBTWhDLDZCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0E1Qlksc0JBQXNCOzs7SUFDakMsK0NBQTBEOztJQUMxRCw2Q0FBZ0Q7O0lBQ2hELCtDQUErQzs7SUFDL0MsZ0RBQXNEOztJQUN0RCxpREFBNEM7O0lBQzVDLGlEQUE2RDs7SUFDN0QsK0NBQW9EOztJQUNwRCxpREFBbUQ7O0lBQ25ELGtEQUEwRDs7SUFDMUQsbURBQXdEOztJQUN4RCxrREFBMEQ7O0lBQzFELG9EQUFnRTs7SUFDaEUsa0RBQXNEOztJQUN0RCw0Q0FBc0M7O0lBQ3RDLDJDQUF5Qzs7SUFDekMsOENBQTJDOztJQUMzQyxtREFBcUQ7O0lBQ3JELDZDQUF3Qzs7SUFDeEMsd0RBQThEOztJQUM5RCxpREFBMkM7O0lBQzNDLHFEQUFvRDs7SUFDcEQscURBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtY2FyZC10aXRsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWNhcmQtdGl0bGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNhcmQtdGl0bGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Q2FyZFRpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdjYXJkLXRpdGxlLW5hbWUnKSBjYXJkVGl0bGVOYW1lID0gJ0lOVEVSRVNUIE5BTUUnO1xuICBASW5wdXQoJ2NhcmQtdGl0bGUtaWQnKSBjYXJkVGl0bGVJZCA9ICdoZWFkaW5nJztcbiAgQElucHV0KCdjYXJkLXRpdGxlLXNpemUnKSBjYXJkVGl0bGVzaXplID0gJzEyJztcbiAgQElucHV0KCdjYXJkLXRpdGxlLWNvbG9yJykgY2FyZFRpdGxlY29sb3IgPSAnI2I2YjZiNic7XG4gIEBJbnB1dCgnY2FyZC10aXRsZS13ZWlnaHQnKSBjYXJkVGl0bGV3ZWlnaHQ7XG4gIEBJbnB1dCgnY2FyZC1jb250ZW50LW5hbWUnKSBjYXJkQ29udGVudE5hbWUgPSAnU3ByaW5nIENhc2VzJztcbiAgQElucHV0KCdjYXJkLWNvbnRlbnQtaWQnKSBjYXJkQ29udGVudElkID0gJ0NvbnRlbnQnO1xuICBASW5wdXQoJ2NhcmQtY29udGVudC1zaXplJykgY2FyZENvbnRlbnRzaXplID0gJzE3JztcbiAgQElucHV0KCdjYXJkLWNvbnRlbnQtY29sb3InKSBjYXJkQ29udGVudGNvbG9yID0gJyMxZDFkMWQnO1xuICBASW5wdXQoJ2NhcmQtY29udGVudC13ZWlnaHQnKSBjYXJkQ29udGVudHdlaWdodCA9ICc3MDAnO1xuICBASW5wdXQoJ2N1c3RvbS10aXRsZS1jbGFzcycpIGN1c3RvbVRpdGxlQ2xhc3MgPSAncHJpbWFyeSc7XG4gIEBJbnB1dCgnY3VzdG9tLWNvbnRlbnQtY2xhc3MnKSBjdXN0b21Db250ZW50Q2xhc3MgPSAnc2Vjb25kYXJ5JztcbiAgQElucHV0KCdjb250ZW50LXR5cGUtYXJyYXknKSBjb250ZW50VHlwZUFycmF5ID0gZmFsc2U7XG4gIEBJbnB1dCgnZGlzcGxheS1rZXknKSBkaXNwbGF5S2V5ID0gJyc7XG4gIEBJbnB1dCgnaWNvbi1jb2xvcicpIGljb25Db2xvciA9ICdibGFjayc7XG4gIEBJbnB1dCgnaWNvbi1mb250LXNpemUnKSBpY29uRm9udFNpemUgPSAnJztcbiAgQElucHV0KCdlbmFibGUtaW5mby10b29sdGlwJykgZW5hYmxlSW5mb1Rvb2x0aXAgPSAnJztcbiAgQElucHV0KCd0b29sdGlwLWluZm8nKSB0b29sdGlwSW5mbyA9ICcnO1xuICBASW5wdXQoJ3Rvb2x0aXB0ZXh0LWN1c3RvbWNsYXNzJykgdG9vbHRpcHRleHRDdXN0b21jbGFzcyA9ICcnO1xuICBASW5wdXQoJ3Bvc2l0aW9uLXRvb2x0aXAnKSBwb3NpdGlvblRvb2x0aXA7XG4gIEBJbnB1dCgncG9zaXRpb24tdG9wLXRvb2x0ZXh0JykgcG9zaXRpb25Ub3BUb29sdGV4dDtcbiAgQElucHV0KCdwb3NpdGlvbi1idG4tdG9vbHRleHQnKSBwb3NpdGlvbkJ0bVRvb2x0ZXh0O1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==