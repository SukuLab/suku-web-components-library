/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuBidTagComponent = /** @class */ (function () {
    function SukuBidTagComponent() {
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
    SukuBidTagComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuBidTagComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-bid-tag',
                    template: "<div class=\"{{bidtagclass}}\">\n  <div class=\"col\">\n    <span class=\"row pr-1 pl-3\">\n      <h1 [style.font-size.px]=\"prizeSize\" [class]=\"prizeCustomClass\" [style.font-weight]=\"prizeWeight\"\n        [style.color]=\"prizeColor\" [id]=\"prizeId\">\n        {{prize}}\n      </h1>\n      <h2 [style.font-size.px]=\"unitSize\" [class]=\"unitCustomClass\" [id]=\"unitId\" [style.font-weight]=\"unitWeight\"\n        [style.color]=\"unitColor\">\n        {{unit}}\n      </h2>\n    </span>\n    <span>\n      <h1 [style.font-size.px]=\"qSize\" [class]=\"qCustomClass\" [style.font-weight]=\"qWeight\" [style.color]=\"qColor\"\n        [id]=\"quantityId\">\n        {{qContent}}\n      </h1>\n      <h1 [style.font-size.px]=\"pSize\" [class]=\"pCustomClass\" [style.font-weight]=\"pWeight\" [style.color]=\"pColor\"\n        [id]=\"totalPrizeId\">\n        {{pContent}}\n      </h1>\n    </span>\n  </div>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-big-tag{background-color:var(--suku-bg-ternary);border-radius:var(--suku-primary-border-radius);border-left:6px solid;border-color:var(--suku-primary-color)}.suku-big-tag-org{background-color:var(--suku-bg-ternary);border-radius:var(--suku-primary-border-radius);border-left:6px solid #000}h1{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:400!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-word!important}h2{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:var(--suku-text-label-one);word-break:break-word!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuBidTagComponent.ctorParameters = function () { return []; };
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
    return SukuBidTagComponent;
}());
export { SukuBidTagComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJpZC10YWcvc3VrdS1iaWQtdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFnQ0M7UUExQlMsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUNmLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZUFBVSxHQUFHLE9BQU8sQ0FBQztRQUNyQixxQkFBZ0IsR0FBRyxNQUFNLENBQUM7UUFDMUIsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQUNsQixTQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLG9CQUFlLEdBQUcscUJBQXFCLENBQUM7UUFDeEMsV0FBTSxHQUFHLE1BQU0sQ0FBQztRQUNoQixhQUFRLEdBQUcsNEJBQTRCLENBQUM7UUFDeEMsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUNqQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixlQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLGFBQVEsR0FBRyw2QkFBNkIsQ0FBQztRQUN6QyxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsV0FBVyxDQUFDO1FBQzNCLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsMkJBQTJCLENBQUM7SUFFbkMsQ0FBQzs7OztJQUVqQixzQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFuQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxjQUFjO29CQUN4QixrNkJBQTRDOztpQkFFNUM7Ozs7O3dCQUVDLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7bUNBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7a0NBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7K0JBQ0wsS0FBSzs2QkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7K0JBQ0wsS0FBSzsrQkFDTCxLQUFLOzhCQUNMLEtBQUs7O0lBT1AsMEJBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQWhDWSxtQkFBbUI7OztJQUMvQixvQ0FBd0I7O0lBQ3hCLHdDQUEwQjs7SUFDMUIsMENBQTZCOztJQUM3Qix5Q0FBOEI7O0lBQzlCLCtDQUFtQzs7SUFDbkMsc0NBQTJCOztJQUMzQixtQ0FBeUI7O0lBQ3pCLHVDQUF5Qjs7SUFDekIseUNBQTRCOztJQUM1Qix3Q0FBNkI7O0lBQzdCLDhDQUFpRDs7SUFDakQscUNBQXlCOztJQUN6Qix1Q0FBaUQ7O0lBQ2pELG9DQUFzQjs7SUFDdEIsc0NBQXlCOztJQUN6QixxQ0FBMEI7O0lBQzFCLDJDQUEyQjs7SUFDM0IseUNBQWlDOztJQUNqQyx1Q0FBa0Q7O0lBQ2xELG9DQUFzQjs7SUFDdEIsc0NBQXlCOztJQUN6QixxQ0FBMEI7O0lBQzFCLDJDQUFvQzs7SUFDcEMsMkNBQXFDOztJQUNyQywwQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1iaWQtdGFnJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtYmlkLXRhZy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N1a3UtYmlkLXRhZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VCaWRUYWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKSBwcml6ZSA9ICckMTAwJztcblx0QElucHV0KCkgcHJpemVTaXplID0gJzUwJztcblx0QElucHV0KCkgcHJpemVXZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCkgcHJpemVDb2xvciA9ICd3aGl0ZSc7XG5cdEBJbnB1dCgpIHByaXplQ3VzdG9tQ2xhc3MgPSAnbWItMCc7XG5cdEBJbnB1dCgpIHByaXplSWQgPSAncHJpemUnO1xuXHRASW5wdXQoKSB1bml0ID0gJy8gVU5JVCc7XG5cdEBJbnB1dCgpIHVuaXRTaXplID0gJzE0Jztcblx0QElucHV0KCkgdW5pdFdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoKSB1bml0Q29sb3IgPSAnd2hpdGUnO1xuXHRASW5wdXQoKSB1bml0Q3VzdG9tQ2xhc3MgPSAnbXQtMyBwdC01IG1iLTAgbWwtMyc7XG5cdEBJbnB1dCgpIHVuaXRJZCA9ICd1bml0Jztcblx0QElucHV0KCkgcUNvbnRlbnQgPSAnMTAwIGNhc2VzIC8gYm94OiAyMDAgYm94ZXMnO1xuXHRASW5wdXQoKSBxU2l6ZSA9ICcxNSc7XG5cdEBJbnB1dCgpIHFXZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCkgcUNvbG9yID0gJ3doaXRlJztcblx0QElucHV0KCkgcUN1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIHF1YW50aXR5SWQgPSAncXVhbnRpdHknO1xuXHRASW5wdXQoKSBwQ29udGVudCA9ICckNDAsMDAwIHRvdGFsICg4MCwwMDAgU1VLVSknO1xuXHRASW5wdXQoKSBwU2l6ZSA9ICcxNSc7XG5cdEBJbnB1dCgpIHBXZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCkgcENvbG9yID0gJ3doaXRlJztcblx0QElucHV0KCkgcEN1c3RvbUNsYXNzID0gJ210LTEgcGItMic7XG5cdEBJbnB1dCgpIHRvdGFsUHJpemVJZCA9ICd0b3RhbFByaWNlJztcblx0QElucHV0KCkgYmlkdGFnY2xhc3MgPSAnY29sIHAtMiBzdWt1LWJpZy10YWcgcGwtNCc7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0fVxuXG59XG4iXX0=