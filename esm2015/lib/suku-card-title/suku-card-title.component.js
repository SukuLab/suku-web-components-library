/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-card-title/suku-card-title.component.ts
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
                template: "<div class=\"product-title\">\n  <h1 [style.font-size.px]=\"cardTitlesize\" class=\"{{customTitleClass}}\" [style.color]=\"cardTitlecolor\"\n    id=\"{{cardTitleId}}\">\n    <span class=\"mt-auto mb-auto\">\n      {{cardTitleName}}\n    </span>\n    <span class=\"tipTool\" [style.left.rem]=\"positionTooltip\" *ngIf=\"(enableInfoTooltip == 'true')\">\n      <span class=\"tipTooltext {{tooltiptextCustomclass}}\" [style.left.rem]=\"positionTopTooltext\"\n        [style.bottom.rem]=\"positionBtmTooltext\">\n        <span>{{tooltipInfo}}</span>\n      </span>\n      <i class=\"fa fa-info-circle infoIcon\" [style.color]=\"iconColor\" [style.font-size.rem]=\"iconFontSize\"></i>\n    </span>\n  </h1>\n  <section *ngIf=\"!contentTypeArray\">\n    <h2 [style.font-size.px]=\"cardContentsize\" class=\"{{customContentClass}}\" id=\"{{cardContentId}}\"\n      [style.font-weight]=\"cardContentweight\" [style.color]=\"cardContentcolor\">\n      {{cardContentName}}\n    </h2>\n  </section>\n  <section *ngIf=\"contentTypeArray\">\n    <h2 *ngFor=\"let item of cardContentName;let i=index\" [style.font-size.px]=\"cardContentsize\"\n      class=\"{{customContentClass}} mb-0\" id=\"{{cardContentId}}\" [style.font-weight]=\"cardContentweight\"\n      [style.color]=\"cardContentcolor\">\n      {{ displayKey  ? item[displayKey] : (item | titlecase)}}\n    </h2>\n    <h2 *ngIf=\"!cardContentName.length\" [style.font-size.px]=\"cardContentsize\"\n      class=\"{{customContentClass}} mb-0\" id=\"{{cardContentId}}\" [style.font-weight]=\"cardContentweight\"\n      [style.color]=\"cardContentcolor\">\n      N/A\n    </h2>\n  </section>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNhcmQtdGl0bGUvc3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sc0JBQXNCO0lBdUJqQztRQXRCMEIsa0JBQWEsR0FBRyxlQUFlLENBQUM7UUFDbEMsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDdEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDcEIsbUJBQWMsR0FBRyxTQUFTLENBQUM7UUFFMUIsb0JBQWUsR0FBRyxjQUFjLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxTQUFTLENBQUM7UUFDeEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdEIscUJBQWdCLEdBQUcsU0FBUyxDQUFDO1FBQzVCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMzQixxQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDM0IsdUJBQWtCLEdBQUcsV0FBVyxDQUFDO1FBQ25DLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNoQyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxPQUFPLENBQUM7UUFDaEIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDYixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDOUIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDTiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7SUFJOUMsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixxbkRBQStDOzthQUVoRDs7Ozs7NEJBRUUsS0FBSyxTQUFDLGlCQUFpQjswQkFDdkIsS0FBSyxTQUFDLGVBQWU7NEJBQ3JCLEtBQUssU0FBQyxpQkFBaUI7NkJBQ3ZCLEtBQUssU0FBQyxrQkFBa0I7OEJBQ3hCLEtBQUssU0FBQyxtQkFBbUI7OEJBQ3pCLEtBQUssU0FBQyxtQkFBbUI7NEJBQ3pCLEtBQUssU0FBQyxpQkFBaUI7OEJBQ3ZCLEtBQUssU0FBQyxtQkFBbUI7K0JBQ3pCLEtBQUssU0FBQyxvQkFBb0I7Z0NBQzFCLEtBQUssU0FBQyxxQkFBcUI7K0JBQzNCLEtBQUssU0FBQyxvQkFBb0I7aUNBQzFCLEtBQUssU0FBQyxzQkFBc0I7K0JBQzVCLEtBQUssU0FBQyxvQkFBb0I7eUJBQzFCLEtBQUssU0FBQyxhQUFhO3dCQUNuQixLQUFLLFNBQUMsWUFBWTsyQkFDbEIsS0FBSyxTQUFDLGdCQUFnQjtnQ0FDdEIsS0FBSyxTQUFDLHFCQUFxQjswQkFDM0IsS0FBSyxTQUFDLGNBQWM7cUNBQ3BCLEtBQUssU0FBQyx5QkFBeUI7OEJBQy9CLEtBQUssU0FBQyxrQkFBa0I7a0NBQ3hCLEtBQUssU0FBQyx1QkFBdUI7a0NBQzdCLEtBQUssU0FBQyx1QkFBdUI7Ozs7SUFyQjlCLCtDQUEwRDs7SUFDMUQsNkNBQWdEOztJQUNoRCwrQ0FBK0M7O0lBQy9DLGdEQUFzRDs7SUFDdEQsaURBQTRDOztJQUM1QyxpREFBNkQ7O0lBQzdELCtDQUFvRDs7SUFDcEQsaURBQW1EOztJQUNuRCxrREFBMEQ7O0lBQzFELG1EQUF3RDs7SUFDeEQsa0RBQTBEOztJQUMxRCxvREFBZ0U7O0lBQ2hFLGtEQUFzRDs7SUFDdEQsNENBQXNDOztJQUN0QywyQ0FBeUM7O0lBQ3pDLDhDQUEyQzs7SUFDM0MsbURBQXFEOztJQUNyRCw2Q0FBd0M7O0lBQ3hDLHdEQUE4RDs7SUFDOUQsaURBQTJDOztJQUMzQyxxREFBb0Q7O0lBQ3BELHFEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWNhcmQtdGl0bGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUNhcmRUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnY2FyZC10aXRsZS1uYW1lJykgY2FyZFRpdGxlTmFtZSA9ICdJTlRFUkVTVCBOQU1FJztcbiAgQElucHV0KCdjYXJkLXRpdGxlLWlkJykgY2FyZFRpdGxlSWQgPSAnaGVhZGluZyc7XG4gIEBJbnB1dCgnY2FyZC10aXRsZS1zaXplJykgY2FyZFRpdGxlc2l6ZSA9ICcxMic7XG4gIEBJbnB1dCgnY2FyZC10aXRsZS1jb2xvcicpIGNhcmRUaXRsZWNvbG9yID0gJyNiNmI2YjYnO1xuICBASW5wdXQoJ2NhcmQtdGl0bGUtd2VpZ2h0JykgY2FyZFRpdGxld2VpZ2h0O1xuICBASW5wdXQoJ2NhcmQtY29udGVudC1uYW1lJykgY2FyZENvbnRlbnROYW1lID0gJ1NwcmluZyBDYXNlcyc7XG4gIEBJbnB1dCgnY2FyZC1jb250ZW50LWlkJykgY2FyZENvbnRlbnRJZCA9ICdDb250ZW50JztcbiAgQElucHV0KCdjYXJkLWNvbnRlbnQtc2l6ZScpIGNhcmRDb250ZW50c2l6ZSA9ICcxNyc7XG4gIEBJbnB1dCgnY2FyZC1jb250ZW50LWNvbG9yJykgY2FyZENvbnRlbnRjb2xvciA9ICcjMWQxZDFkJztcbiAgQElucHV0KCdjYXJkLWNvbnRlbnQtd2VpZ2h0JykgY2FyZENvbnRlbnR3ZWlnaHQgPSAnNzAwJztcbiAgQElucHV0KCdjdXN0b20tdGl0bGUtY2xhc3MnKSBjdXN0b21UaXRsZUNsYXNzID0gJ3ByaW1hcnknO1xuICBASW5wdXQoJ2N1c3RvbS1jb250ZW50LWNsYXNzJykgY3VzdG9tQ29udGVudENsYXNzID0gJ3NlY29uZGFyeSc7XG4gIEBJbnB1dCgnY29udGVudC10eXBlLWFycmF5JykgY29udGVudFR5cGVBcnJheSA9IGZhbHNlO1xuICBASW5wdXQoJ2Rpc3BsYXkta2V5JykgZGlzcGxheUtleSA9ICcnO1xuICBASW5wdXQoJ2ljb24tY29sb3InKSBpY29uQ29sb3IgPSAnYmxhY2snO1xuICBASW5wdXQoJ2ljb24tZm9udC1zaXplJykgaWNvbkZvbnRTaXplID0gJyc7XG4gIEBJbnB1dCgnZW5hYmxlLWluZm8tdG9vbHRpcCcpIGVuYWJsZUluZm9Ub29sdGlwID0gJyc7XG4gIEBJbnB1dCgndG9vbHRpcC1pbmZvJykgdG9vbHRpcEluZm8gPSAnJztcbiAgQElucHV0KCd0b29sdGlwdGV4dC1jdXN0b21jbGFzcycpIHRvb2x0aXB0ZXh0Q3VzdG9tY2xhc3MgPSAnJztcbiAgQElucHV0KCdwb3NpdGlvbi10b29sdGlwJykgcG9zaXRpb25Ub29sdGlwO1xuICBASW5wdXQoJ3Bvc2l0aW9uLXRvcC10b29sdGV4dCcpIHBvc2l0aW9uVG9wVG9vbHRleHQ7XG4gIEBJbnB1dCgncG9zaXRpb24tYnRuLXRvb2x0ZXh0JykgcG9zaXRpb25CdG1Ub29sdGV4dDtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=