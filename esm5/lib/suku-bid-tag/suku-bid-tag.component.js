/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuBidTagComponent = /** @class */ (function () {
    function SukuBidTagComponent() {
        this.prize = '$100';
        this.prizeSize = '50';
        this.prizeWeight = '500';
        this.prizeColor = 'white';
        this.prizeCustomClass = 'mb-0';
        this.unit = '/ BOX';
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
        this.bidtagclass = 'col p-3 suku-big-tag pl-5';
        this.id = 'suku-big-tag';
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
                    template: "<div class=\"col p-1 {{bidtagclass}} pl-4\">\n  <span class=\"row pr-1 pl-3 mt-2\">\n\t\t<h1 [style.font-size.px]=\"prizeSize\" [class]=\"prizeCustomClass\" [style.font-weight]=\"prizeWeight\" [style.color]=\"prizeColor\" id=\"{{id}}\">\n  {{prize}}\n  </h1>\n\t<h2 [style.font-size.px]=\"unitSize\" [class]=\"unitCustomClass\" id=\"{{id}}\" [style.font-weight]=\"unitWeight\" [style.color]=\"unitColor\">\n  {{unit}}\n  </h2>\n  </span>\n  <span>\n\t\t<h1 [style.font-size.px]=\"qSize\" [class]=\"qCustomClass\" [style.font-weight]=\"qWeight\" [style.color]=\"qColor\" id=\"{{id}}\">\n\t\t{{qContent}}\n\t\t</h1>\n\t\t<h1 [style.font-size.px]=\"pSize\" [class]=\"pCustomClass\" [style.font-weight]=\"pWeight\" [style.color]=\"pColor\" id=\"{{id}}\">\n\t\t{{pContent}}\n\t\t</h1>\n  </span>\n</div>\n",
                    styles: [".suku-big-tag{background-color:#35393e;border-radius:0 40px 0 0;border-left:6px solid #a7bf2e}.suku-big-tag-org{background-color:#35393e;border-radius:0 40px 0 0;border-left:6px solid #000}h1{font-family:Poppins,sans-serif!important;font-size:16px;font-weight:400!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-all!important}h2{font-family:Poppins,sans-serif!important;font-size:16px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6!important;word-break:break-all!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJpZC10YWcvc3VrdS1iaWQtdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUE2QkU7UUF2QlMsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUNoQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxPQUFPLENBQUM7UUFDckIscUJBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQzFCLFNBQUksR0FBRyxPQUFPLENBQUM7UUFDZixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLE9BQU8sQ0FBQztRQUNwQixvQkFBZSxHQUFHLHFCQUFxQixDQUFDO1FBQ3hDLGFBQVEsR0FBRyw0QkFBNEIsQ0FBQztRQUN4QyxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGFBQVEsR0FBRyw2QkFBNkIsQ0FBQztRQUN6QyxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsV0FBVyxDQUFDO1FBQzNCLGdCQUFXLEdBQUcsMkJBQTJCLENBQUM7UUFDMUMsT0FBRSxHQUFHLGNBQWMsQ0FBQztJQUVaLENBQUM7Ozs7SUFFakIsc0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsNHlCQUE0Qzs7aUJBRTdDOzs7Ozt3QkFFRSxLQUFLOzRCQUNOLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLO21DQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSztrQ0FDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7K0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7OEJBQ0wsS0FBSztxQkFDTCxLQUFLOztJQU9QLDBCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0E3QlksbUJBQW1COzs7SUFDOUIsb0NBQXdCOztJQUN6Qix3Q0FBMEI7O0lBQzFCLDBDQUE2Qjs7SUFDN0IseUNBQThCOztJQUM5QiwrQ0FBbUM7O0lBQ25DLG1DQUF3Qjs7SUFDeEIsdUNBQXlCOztJQUN6Qix5Q0FBNEI7O0lBQzVCLHdDQUE2Qjs7SUFDN0IsOENBQWlEOztJQUNqRCx1Q0FBaUQ7O0lBQ2pELG9DQUFzQjs7SUFDdEIsc0NBQXlCOztJQUN6QixxQ0FBMEI7O0lBQzFCLDJDQUEyQjs7SUFDM0IsdUNBQWtEOztJQUNsRCxvQ0FBc0I7O0lBQ3RCLHNDQUF5Qjs7SUFDekIscUNBQTBCOztJQUMxQiwyQ0FBb0M7O0lBQ3BDLDBDQUFtRDs7SUFDbkQsaUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtYmlkLXRhZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWJpZC10YWcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWJpZC10YWcuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1QmlkVGFnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcHJpemUgPSAnJDEwMCc7XG5cdEBJbnB1dCgpIHByaXplU2l6ZSA9ICc1MCc7XG5cdEBJbnB1dCgpIHByaXplV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgpIHByaXplQ29sb3IgPSAnd2hpdGUnO1xuXHRASW5wdXQoKSBwcml6ZUN1c3RvbUNsYXNzID0gJ21iLTAnO1xuXHRASW5wdXQoKSB1bml0ID0gJy8gQk9YJztcblx0QElucHV0KCkgdW5pdFNpemUgPSAnMTQnO1xuXHRASW5wdXQoKSB1bml0V2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgpIHVuaXRDb2xvciA9ICd3aGl0ZSc7XG5cdEBJbnB1dCgpIHVuaXRDdXN0b21DbGFzcyA9ICdtdC0zIHB0LTUgbWItMCBtbC0zJztcblx0QElucHV0KCkgcUNvbnRlbnQgPSAnMTAwIGNhc2VzIC8gYm94OiAyMDAgYm94ZXMnO1xuXHRASW5wdXQoKSBxU2l6ZSA9ICcxNSc7XG5cdEBJbnB1dCgpIHFXZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCkgcUNvbG9yID0gJ3doaXRlJztcblx0QElucHV0KCkgcUN1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgpIHBDb250ZW50ID0gJyQ0MCwwMDAgdG90YWwgKDgwLDAwMCBTVUtVKSc7XG5cdEBJbnB1dCgpIHBTaXplID0gJzE1Jztcblx0QElucHV0KCkgcFdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoKSBwQ29sb3IgPSAnd2hpdGUnO1xuXHRASW5wdXQoKSBwQ3VzdG9tQ2xhc3MgPSAnbXQtMSBwYi0yJztcblx0QElucHV0KCkgYmlkdGFnY2xhc3MgPSAnY29sIHAtMyBzdWt1LWJpZy10YWcgcGwtNSc7XG5cdEBJbnB1dCgpIGlkID0gJ3N1a3UtYmlnLXRhZyc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=