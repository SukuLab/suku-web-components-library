/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuBidTagComponent {
    constructor() {
        this.prize = '$100';
        this.prizeSize = '50';
        this.prizeWeight = '500';
        this.prizeColor = 'white';
        this.prizeCustomClass = 'mb-0';
        this.unit = '/ UNIT';
        this.unitSize = '14';
        this.unitWeight = '500';
        this.unitColor = 'white';
        this.unitCustomClass = 'mt-3 pt-5 mb-0 ml-3';
        this.qContent = '100 cases / box: 200 boxes';
        this.qSize = '15';
        this.qWeight = '500';
        this.qColor = 'white';
        this.qCustomClass = '';
        this.pContent = '$40,000 total (80,000 SUKU)';
        this.pSize = '15';
        this.pWeight = '500';
        this.pColor = 'white';
        this.pCustomClass = 'mt-1 pb-2';
        this.bidtagclass = 'col p-2 suku-big-tag pl-5';
        this.id = 'suku-big-tag';
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
                template: "<div class=\"{{bidtagclass}}\">\n  <span class=\"row pr-1 pl-3\">\n    <h1 [style.font-size.px]=\"prizeSize\" [class]=\"prizeCustomClass\" [style.font-weight]=\"prizeWeight\"\n      [style.color]=\"prizeColor\" id=\"{{id}}\">\n      {{prize}}\n    </h1>\n    <h2 [style.font-size.px]=\"unitSize\" [class]=\"unitCustomClass\" id=\"{{id}}\" [style.font-weight]=\"unitWeight\"\n      [style.color]=\"unitColor\">\n      {{unit}}\n    </h2>\n  </span>\n  <span>\n    <h1 [style.font-size.px]=\"qSize\" [class]=\"qCustomClass\" [style.font-weight]=\"qWeight\" [style.color]=\"qColor\"\n      id=\"{{id}}\">\n      {{qContent}}\n    </h1>\n    <h1 [style.font-size.px]=\"pSize\" [class]=\"pCustomClass\" [style.font-weight]=\"pWeight\" [style.color]=\"pColor\"\n      id=\"{{id}}\">\n      {{pContent}}\n    </h1>\n  </span>\n</div>",
                styles: [".suku-big-tag{background-color:#35393e;border-radius:0 40px 0 0;border-left:6px solid #a7bf2e}.suku-big-tag-org{background-color:#35393e;border-radius:0 40px 0 0;border-left:6px solid #000}h1{font-family:Poppins,sans-serif!important;font-size:16px;font-weight:400!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-all!important}h2{font-family:Poppins,sans-serif!important;font-size:16px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6!important;word-break:break-all!important}"]
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
    unit: [{ type: Input }],
    unitSize: [{ type: Input }],
    unitWeight: [{ type: Input }],
    unitColor: [{ type: Input }],
    unitCustomClass: [{ type: Input }],
    qContent: [{ type: Input }],
    qSize: [{ type: Input }],
    qWeight: [{ type: Input }],
    qColor: [{ type: Input }],
    qCustomClass: [{ type: Input }],
    pContent: [{ type: Input }],
    pSize: [{ type: Input }],
    pWeight: [{ type: Input }],
    pColor: [{ type: Input }],
    pCustomClass: [{ type: Input }],
    bidtagclass: [{ type: Input }],
    id: [{ type: Input }]
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
    SukuBidTagComponent.prototype.bidtagclass;
    /** @type {?} */
    SukuBidTagComponent.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJpZC10YWcvc3VrdS1iaWQtdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLG1CQUFtQjtJQXdCOUI7UUF2QlMsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUNoQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxPQUFPLENBQUM7UUFDckIscUJBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQzFCLFNBQUksR0FBRyxRQUFRLENBQUM7UUFDaEIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxPQUFPLENBQUM7UUFDcEIsb0JBQWUsR0FBRyxxQkFBcUIsQ0FBQztRQUN4QyxhQUFRLEdBQUcsNEJBQTRCLENBQUM7UUFDeEMsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUNqQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQUcsNkJBQTZCLENBQUM7UUFDekMsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUNqQixpQkFBWSxHQUFHLFdBQVcsQ0FBQztRQUMzQixnQkFBVyxHQUFHLDJCQUEyQixDQUFDO1FBQzFDLE9BQUUsR0FBRyxjQUFjLENBQUM7SUFFWixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixzMEJBQTRDOzthQUU3Qzs7Ozs7b0JBRUUsS0FBSzt3QkFDTixLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzsrQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxLQUFLO3NCQUNMLEtBQUs7cUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7aUJBQ0wsS0FBSzs7OztJQXJCTCxvQ0FBd0I7O0lBQ3pCLHdDQUEwQjs7SUFDMUIsMENBQTZCOztJQUM3Qix5Q0FBOEI7O0lBQzlCLCtDQUFtQzs7SUFDbkMsbUNBQXlCOztJQUN6Qix1Q0FBeUI7O0lBQ3pCLHlDQUE0Qjs7SUFDNUIsd0NBQTZCOztJQUM3Qiw4Q0FBaUQ7O0lBQ2pELHVDQUFpRDs7SUFDakQsb0NBQXNCOztJQUN0QixzQ0FBeUI7O0lBQ3pCLHFDQUEwQjs7SUFDMUIsMkNBQTJCOztJQUMzQix1Q0FBa0Q7O0lBQ2xELG9DQUFzQjs7SUFDdEIsc0NBQXlCOztJQUN6QixxQ0FBMEI7O0lBQzFCLDJDQUFvQzs7SUFDcEMsMENBQW1EOztJQUNuRCxpQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1iaWQtdGFnJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtYmlkLXRhZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtYmlkLXRhZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VCaWRUYWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwcml6ZSA9ICckMTAwJztcblx0QElucHV0KCkgcHJpemVTaXplID0gJzUwJztcblx0QElucHV0KCkgcHJpemVXZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCkgcHJpemVDb2xvciA9ICd3aGl0ZSc7XG5cdEBJbnB1dCgpIHByaXplQ3VzdG9tQ2xhc3MgPSAnbWItMCc7XG5cdEBJbnB1dCgpIHVuaXQgPSAnLyBVTklUJztcblx0QElucHV0KCkgdW5pdFNpemUgPSAnMTQnO1xuXHRASW5wdXQoKSB1bml0V2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgpIHVuaXRDb2xvciA9ICd3aGl0ZSc7XG5cdEBJbnB1dCgpIHVuaXRDdXN0b21DbGFzcyA9ICdtdC0zIHB0LTUgbWItMCBtbC0zJztcblx0QElucHV0KCkgcUNvbnRlbnQgPSAnMTAwIGNhc2VzIC8gYm94OiAyMDAgYm94ZXMnO1xuXHRASW5wdXQoKSBxU2l6ZSA9ICcxNSc7XG5cdEBJbnB1dCgpIHFXZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCkgcUNvbG9yID0gJ3doaXRlJztcblx0QElucHV0KCkgcUN1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIHBDb250ZW50ID0gJyQ0MCwwMDAgdG90YWwgKDgwLDAwMCBTVUtVKSc7XG5cdEBJbnB1dCgpIHBTaXplID0gJzE1Jztcblx0QElucHV0KCkgcFdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoKSBwQ29sb3IgPSAnd2hpdGUnO1xuXHRASW5wdXQoKSBwQ3VzdG9tQ2xhc3MgPSAnbXQtMSBwYi0yJztcblx0QElucHV0KCkgYmlkdGFnY2xhc3MgPSAnY29sIHAtMiBzdWt1LWJpZy10YWcgcGwtNSc7XG5cdEBJbnB1dCgpIGlkID0gJ3N1a3UtYmlnLXRhZyc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=