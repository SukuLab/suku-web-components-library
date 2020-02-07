/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-bid-tag/suku-bid-tag.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuBidTagComponent {
    constructor() {
        this.prize = '$100';
        this.prizeSize = '50';
        this.prizeWeight = '500';
        this.prizeColor = 'white';
        this.prizeCustomClass = 'mb-0';
        this.prizeId = 'prize';
        this.unit = '/ UNIT';
        this.unitSize = '14';
        this.unitWeight = '500';
        this.unitColor = 'white';
        this.unitCustomClass = 'mt-3 pt-5 mb-0 ml-3';
        this.unitId = 'unit';
        this.qContent = '100 cases / box: 200 boxes';
        this.qSize = '15';
        this.qWeight = '500';
        this.qColor = 'white';
        this.qCustomClass = '';
        this.quantityId = 'quantity';
        this.pContent = '$40,000 total (80,000 SUKU)';
        this.pSize = '15';
        this.pWeight = '500';
        this.pColor = 'white';
        this.pCustomClass = 'mt-1 pb-2';
        this.totalPrizeId = 'totalPrice';
        this.bidtagclass = 'col p-2 suku-big-tag pl-4';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuBidTagComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-bid-tag',
                template: "<div class=\"{{bidtagclass}}\">\n  <div class=\"col\">\n    <span class=\"row pr-1 pl-3\">\n      <h1 [style.font-size.px]=\"prizeSize\" [class]=\"prizeCustomClass\" [style.font-weight]=\"prizeWeight\"\n        [style.color]=\"prizeColor\" [id]=\"prizeId\">\n        {{prize}}\n      </h1>\n      <h2 [style.font-size.px]=\"unitSize\" [class]=\"unitCustomClass\" [id]=\"unitId\" [style.font-weight]=\"unitWeight\"\n        [style.color]=\"unitColor\">\n        {{unit}}\n      </h2>\n    </span>\n    <span>\n      <h1 [style.font-size.px]=\"qSize\" [class]=\"qCustomClass\" [style.font-weight]=\"qWeight\" [style.color]=\"qColor\"\n        [id]=\"quantityId\">\n        {{qContent}}\n      </h1>\n      <h1 [style.font-size.px]=\"pSize\" [class]=\"pCustomClass\" [style.font-weight]=\"pWeight\" [style.color]=\"pColor\"\n        [id]=\"totalPrizeId\">\n        {{pContent}}\n      </h1>\n    </span>\n  </div>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-big-tag{background-color:var(--suku-bg-ternary);border-radius:var(--suku-primary-border-radius);border-left:6px solid;border-color:var(--suku-primary-color)}.suku-big-tag-org{background-color:var(--suku-bg-ternary);border-radius:var(--suku-primary-border-radius);border-left:6px solid #000}h1{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:400!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important}h2{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:var(--suku-text-label-one);word-break:break-word!important}"]
            }] }
];
/** @nocollapse */
SukuBidTagComponent.ctorParameters = () => [];
SukuBidTagComponent.propDecorators = {
    prize: [{ type: Input }],
    prizeSize: [{ type: Input }],
    prizeWeight: [{ type: Input }],
    prizeColor: [{ type: Input }],
    prizeCustomClass: [{ type: Input }],
    prizeId: [{ type: Input }],
    unit: [{ type: Input }],
    unitSize: [{ type: Input }],
    unitWeight: [{ type: Input }],
    unitColor: [{ type: Input }],
    unitCustomClass: [{ type: Input }],
    unitId: [{ type: Input }],
    qContent: [{ type: Input }],
    qSize: [{ type: Input }],
    qWeight: [{ type: Input }],
    qColor: [{ type: Input }],
    qCustomClass: [{ type: Input }],
    quantityId: [{ type: Input }],
    pContent: [{ type: Input }],
    pSize: [{ type: Input }],
    pWeight: [{ type: Input }],
    pColor: [{ type: Input }],
    pCustomClass: [{ type: Input }],
    totalPrizeId: [{ type: Input }],
    bidtagclass: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuBidTagComponent.prototype.prize;
    /** @type {?} */
    SukuBidTagComponent.prototype.prizeSize;
    /** @type {?} */
    SukuBidTagComponent.prototype.prizeWeight;
    /** @type {?} */
    SukuBidTagComponent.prototype.prizeColor;
    /** @type {?} */
    SukuBidTagComponent.prototype.prizeCustomClass;
    /** @type {?} */
    SukuBidTagComponent.prototype.prizeId;
    /** @type {?} */
    SukuBidTagComponent.prototype.unit;
    /** @type {?} */
    SukuBidTagComponent.prototype.unitSize;
    /** @type {?} */
    SukuBidTagComponent.prototype.unitWeight;
    /** @type {?} */
    SukuBidTagComponent.prototype.unitColor;
    /** @type {?} */
    SukuBidTagComponent.prototype.unitCustomClass;
    /** @type {?} */
    SukuBidTagComponent.prototype.unitId;
    /** @type {?} */
    SukuBidTagComponent.prototype.qContent;
    /** @type {?} */
    SukuBidTagComponent.prototype.qSize;
    /** @type {?} */
    SukuBidTagComponent.prototype.qWeight;
    /** @type {?} */
    SukuBidTagComponent.prototype.qColor;
    /** @type {?} */
    SukuBidTagComponent.prototype.qCustomClass;
    /** @type {?} */
    SukuBidTagComponent.prototype.quantityId;
    /** @type {?} */
    SukuBidTagComponent.prototype.pContent;
    /** @type {?} */
    SukuBidTagComponent.prototype.pSize;
    /** @type {?} */
    SukuBidTagComponent.prototype.pWeight;
    /** @type {?} */
    SukuBidTagComponent.prototype.pColor;
    /** @type {?} */
    SukuBidTagComponent.prototype.pCustomClass;
    /** @type {?} */
    SukuBidTagComponent.prototype.totalPrizeId;
    /** @type {?} */
    SukuBidTagComponent.prototype.bidtagclass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJpZC10YWcvc3VrdS1iaWQtdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTyxtQkFBbUI7SUEyQi9CO1FBMUJTLFVBQUssR0FBRyxNQUFNLENBQUM7UUFDZixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxPQUFPLENBQUM7UUFDckIscUJBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQzFCLFlBQU8sR0FBRyxPQUFPLENBQUM7UUFDbEIsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQUNoQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLE9BQU8sQ0FBQztRQUNwQixvQkFBZSxHQUFHLHFCQUFxQixDQUFDO1FBQ3hDLFdBQU0sR0FBRyxNQUFNLENBQUM7UUFDaEIsYUFBUSxHQUFHLDRCQUE0QixDQUFDO1FBQ3hDLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDYixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxPQUFPLENBQUM7UUFDakIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsZUFBVSxHQUFHLFVBQVUsQ0FBQztRQUN4QixhQUFRLEdBQUcsNkJBQTZCLENBQUM7UUFDekMsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUNqQixpQkFBWSxHQUFHLFdBQVcsQ0FBQztRQUMzQixpQkFBWSxHQUFHLFlBQVksQ0FBQztRQUM1QixnQkFBVyxHQUFHLDJCQUEyQixDQUFDO0lBRW5DLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQW5DRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLGs2QkFBNEM7O2FBRTVDOzs7OztvQkFFQyxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOzs7O0lBeEJOLG9DQUF3Qjs7SUFDeEIsd0NBQTBCOztJQUMxQiwwQ0FBNkI7O0lBQzdCLHlDQUE4Qjs7SUFDOUIsK0NBQW1DOztJQUNuQyxzQ0FBMkI7O0lBQzNCLG1DQUF5Qjs7SUFDekIsdUNBQXlCOztJQUN6Qix5Q0FBNEI7O0lBQzVCLHdDQUE2Qjs7SUFDN0IsOENBQWlEOztJQUNqRCxxQ0FBeUI7O0lBQ3pCLHVDQUFpRDs7SUFDakQsb0NBQXNCOztJQUN0QixzQ0FBeUI7O0lBQ3pCLHFDQUEwQjs7SUFDMUIsMkNBQTJCOztJQUMzQix5Q0FBaUM7O0lBQ2pDLHVDQUFrRDs7SUFDbEQsb0NBQXNCOztJQUN0QixzQ0FBeUI7O0lBQ3pCLHFDQUEwQjs7SUFDMUIsMkNBQW9DOztJQUNwQywyQ0FBcUM7O0lBQ3JDLDBDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LWJpZC10YWcnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1iaWQtdGFnLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1iaWQtdGFnLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUJpZFRhZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIHByaXplID0gJyQxMDAnO1xuXHRASW5wdXQoKSBwcml6ZVNpemUgPSAnNTAnO1xuXHRASW5wdXQoKSBwcml6ZVdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoKSBwcml6ZUNvbG9yID0gJ3doaXRlJztcblx0QElucHV0KCkgcHJpemVDdXN0b21DbGFzcyA9ICdtYi0wJztcblx0QElucHV0KCkgcHJpemVJZCA9ICdwcml6ZSc7XG5cdEBJbnB1dCgpIHVuaXQgPSAnLyBVTklUJztcblx0QElucHV0KCkgdW5pdFNpemUgPSAnMTQnO1xuXHRASW5wdXQoKSB1bml0V2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgpIHVuaXRDb2xvciA9ICd3aGl0ZSc7XG5cdEBJbnB1dCgpIHVuaXRDdXN0b21DbGFzcyA9ICdtdC0zIHB0LTUgbWItMCBtbC0zJztcblx0QElucHV0KCkgdW5pdElkID0gJ3VuaXQnO1xuXHRASW5wdXQoKSBxQ29udGVudCA9ICcxMDAgY2FzZXMgLyBib3g6IDIwMCBib3hlcyc7XG5cdEBJbnB1dCgpIHFTaXplID0gJzE1Jztcblx0QElucHV0KCkgcVdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoKSBxQ29sb3IgPSAnd2hpdGUnO1xuXHRASW5wdXQoKSBxQ3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCkgcXVhbnRpdHlJZCA9ICdxdWFudGl0eSc7XG5cdEBJbnB1dCgpIHBDb250ZW50ID0gJyQ0MCwwMDAgdG90YWwgKDgwLDAwMCBTVUtVKSc7XG5cdEBJbnB1dCgpIHBTaXplID0gJzE1Jztcblx0QElucHV0KCkgcFdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoKSBwQ29sb3IgPSAnd2hpdGUnO1xuXHRASW5wdXQoKSBwQ3VzdG9tQ2xhc3MgPSAnbXQtMSBwYi0yJztcblx0QElucHV0KCkgdG90YWxQcml6ZUlkID0gJ3RvdGFsUHJpY2UnO1xuXHRASW5wdXQoKSBiaWR0YWdjbGFzcyA9ICdjb2wgcC0yIHN1a3UtYmlnLXRhZyBwbC00JztcblxuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cbn1cbiJdfQ==