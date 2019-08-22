/**
 * @fileoverview added by tsickle
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
                template: "<div class=\"{{bidtagclass}}\">\r\n  <div class=\"col\">\r\n    <span class=\"row pr-1 pl-3\">\r\n      <h1 [style.font-size.px]=\"prizeSize\" [class]=\"prizeCustomClass\" [style.font-weight]=\"prizeWeight\"\r\n        [style.color]=\"prizeColor\" [id]=\"prizeId\">\r\n        {{prize}}\r\n      </h1>\r\n      <h2 [style.font-size.px]=\"unitSize\" [class]=\"unitCustomClass\" [id]=\"unitId\" [style.font-weight]=\"unitWeight\"\r\n        [style.color]=\"unitColor\">\r\n        {{unit}}\r\n      </h2>\r\n    </span>\r\n    <span>\r\n      <h1 [style.font-size.px]=\"qSize\" [class]=\"qCustomClass\" [style.font-weight]=\"qWeight\" [style.color]=\"qColor\"\r\n        [id]=\"quantityId\">\r\n        {{qContent}}\r\n      </h1>\r\n      <h1 [style.font-size.px]=\"pSize\" [class]=\"pCustomClass\" [style.font-weight]=\"pWeight\" [style.color]=\"pColor\"\r\n        [id]=\"totalPrizeId\">\r\n        {{pContent}}\r\n      </h1>\r\n    </span>\r\n  </div>\r\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-big-tag{background-color:var(--suku-bg-ternary);border-radius:var(--suku-primary-border-radius);border-left:6px solid;border-color:var(--suku-primary-color)}.suku-big-tag-org{background-color:var(--suku-bg-ternary);border-radius:var(--suku-primary-border-radius);border-left:6px solid #000}h1{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:400!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important}h2{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:var(--suku-text-label-one);word-break:break-word!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJpZC10YWcvc3VrdS1iaWQtdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLG1CQUFtQjtJQTJCL0I7UUExQlMsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUNmLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLE9BQU8sQ0FBQztRQUNyQixxQkFBZ0IsR0FBRyxNQUFNLENBQUM7UUFDMUIsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQUNsQixTQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLG9CQUFlLEdBQUcscUJBQXFCLENBQUM7UUFDeEMsV0FBTSxHQUFHLE1BQU0sQ0FBQztRQUNoQixhQUFRLEdBQUcsNEJBQTRCLENBQUM7UUFDeEMsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUNqQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixlQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLGFBQVEsR0FBRyw2QkFBNkIsQ0FBQztRQUN6QyxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsV0FBVyxDQUFDO1FBQzNCLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsMkJBQTJCLENBQUM7SUFFbkMsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBbkNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsY0FBYztnQkFDeEIsZzlCQUE0Qzs7YUFFNUM7Ozs7O29CQUVDLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7K0JBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7Ozs7SUF4Qk4sb0NBQXdCOztJQUN4Qix3Q0FBMEI7O0lBQzFCLDBDQUE2Qjs7SUFDN0IseUNBQThCOztJQUM5QiwrQ0FBbUM7O0lBQ25DLHNDQUEyQjs7SUFDM0IsbUNBQXlCOztJQUN6Qix1Q0FBeUI7O0lBQ3pCLHlDQUE0Qjs7SUFDNUIsd0NBQTZCOztJQUM3Qiw4Q0FBaUQ7O0lBQ2pELHFDQUF5Qjs7SUFDekIsdUNBQWlEOztJQUNqRCxvQ0FBc0I7O0lBQ3RCLHNDQUF5Qjs7SUFDekIscUNBQTBCOztJQUMxQiwyQ0FBMkI7O0lBQzNCLHlDQUFpQzs7SUFDakMsdUNBQWtEOztJQUNsRCxvQ0FBc0I7O0lBQ3RCLHNDQUF5Qjs7SUFDekIscUNBQTBCOztJQUMxQiwyQ0FBb0M7O0lBQ3BDLDJDQUFxQzs7SUFDckMsMENBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3N1a3UtYmlkLXRhZycsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtYmlkLXRhZy5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1iaWQtdGFnLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VCaWRUYWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIHByaXplID0gJyQxMDAnO1xyXG5cdEBJbnB1dCgpIHByaXplU2l6ZSA9ICc1MCc7XHJcblx0QElucHV0KCkgcHJpemVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoKSBwcml6ZUNvbG9yID0gJ3doaXRlJztcclxuXHRASW5wdXQoKSBwcml6ZUN1c3RvbUNsYXNzID0gJ21iLTAnO1xyXG5cdEBJbnB1dCgpIHByaXplSWQgPSAncHJpemUnO1xyXG5cdEBJbnB1dCgpIHVuaXQgPSAnLyBVTklUJztcclxuXHRASW5wdXQoKSB1bml0U2l6ZSA9ICcxNCc7XHJcblx0QElucHV0KCkgdW5pdFdlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgpIHVuaXRDb2xvciA9ICd3aGl0ZSc7XHJcblx0QElucHV0KCkgdW5pdEN1c3RvbUNsYXNzID0gJ210LTMgcHQtNSBtYi0wIG1sLTMnO1xyXG5cdEBJbnB1dCgpIHVuaXRJZCA9ICd1bml0JztcclxuXHRASW5wdXQoKSBxQ29udGVudCA9ICcxMDAgY2FzZXMgLyBib3g6IDIwMCBib3hlcyc7XHJcblx0QElucHV0KCkgcVNpemUgPSAnMTUnO1xyXG5cdEBJbnB1dCgpIHFXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoKSBxQ29sb3IgPSAnd2hpdGUnO1xyXG5cdEBJbnB1dCgpIHFDdXN0b21DbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgpIHF1YW50aXR5SWQgPSAncXVhbnRpdHknO1xyXG5cdEBJbnB1dCgpIHBDb250ZW50ID0gJyQ0MCwwMDAgdG90YWwgKDgwLDAwMCBTVUtVKSc7XHJcblx0QElucHV0KCkgcFNpemUgPSAnMTUnO1xyXG5cdEBJbnB1dCgpIHBXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoKSBwQ29sb3IgPSAnd2hpdGUnO1xyXG5cdEBJbnB1dCgpIHBDdXN0b21DbGFzcyA9ICdtdC0xIHBiLTInO1xyXG5cdEBJbnB1dCgpIHRvdGFsUHJpemVJZCA9ICd0b3RhbFByaWNlJztcclxuXHRASW5wdXQoKSBiaWR0YWdjbGFzcyA9ICdjb2wgcC0yIHN1a3UtYmlnLXRhZyBwbC00JztcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=