/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.unitCustomClass = 'mt-4 pt-3 mb-0 ml-3';
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
        this.bidtagclass = 'col p-1 col p-1 suku-big-tag pl-4 pl-4';
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
                    template: "<div class=\"col p-1 {{bidtagclass}} pl-4\">\r\n  <span class=\"row pr-1 pl-2 mt-2\">\r\n\t\t<h1 [style.font-size.px]=\"prizeSize\" [class]=\"prizeCustomClass\" [style.font-weight]=\"prizeWeight\" [style.color]=\"prizeColor\" id=\"{{id}}\">\r\n  {{prize}}\r\n  </h1>\r\n\t<h2 [style.font-size.px]=\"unitSize\" [class]=\"unitCustomClass\" id=\"{{id}}\" [style.font-weight]=\"unitWeight\" [style.color]=\"unitColor\">\r\n  {{unit}}\r\n  </h2>\r\n  </span>\r\n  <span>\r\n\t\t<h1 [style.font-size.px]=\"qSize\" [class]=\"qCustomClass\" [style.font-weight]=\"qWeight\" [style.color]=\"qColor\" id=\"{{id}}\">\r\n\t\t{{qContent}}\r\n\t\t</h1>\r\n\t\t<h1 [style.font-size.px]=\"pSize\" [class]=\"pCustomClass\" [style.font-weight]=\"pWeight\" [style.color]=\"pColor\" id=\"{{id}}\">\r\n\t\t{{pContent}}\r\n\t\t</h1>\r\n  </span>\r\n</div>\r\n",
                    styles: [".suku-big-tag{background-color:#35393e;border-radius:0 40px 0 0;border-left:6px solid #a7bf2e}.suku-big-tag-org{background-color:#35393e;border-radius:0 40px 0 0;border-left:6px solid #000}h1{font-family:Poppins,Arial,Helvetica,sans-serif;font-size:20px;font-weight:600!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-all!important}h2{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6!important;word-break:break-all!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJpZC10YWcvc3VrdS1iaWQtdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUE2QkU7UUF2QlMsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUNoQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxPQUFPLENBQUM7UUFDckIscUJBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQzFCLFNBQUksR0FBRyxPQUFPLENBQUM7UUFDZixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLE9BQU8sQ0FBQztRQUNwQixvQkFBZSxHQUFHLHFCQUFxQixDQUFDO1FBQ3hDLGFBQVEsR0FBRyw0QkFBNEIsQ0FBQztRQUN4QyxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGFBQVEsR0FBRyw2QkFBNkIsQ0FBQztRQUN6QyxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsV0FBVyxDQUFDO1FBQzNCLGdCQUFXLEdBQUcsd0NBQXdDLENBQUM7UUFDdkQsT0FBRSxHQUFHLGNBQWMsQ0FBQztJQUVaLENBQUM7Ozs7SUFFakIsc0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBaENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsZzFCQUE0Qzs7aUJBRTdDOzs7Ozt3QkFFRSxLQUFLOzRCQUNOLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLO21DQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSztrQ0FDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7K0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7OEJBQ0wsS0FBSztxQkFDTCxLQUFLOztJQU9QLDBCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0E3QlksbUJBQW1COzs7SUFDOUIsb0NBQXdCOztJQUN6Qix3Q0FBMEI7O0lBQzFCLDBDQUE2Qjs7SUFDN0IseUNBQThCOztJQUM5QiwrQ0FBbUM7O0lBQ25DLG1DQUF3Qjs7SUFDeEIsdUNBQXlCOztJQUN6Qix5Q0FBNEI7O0lBQzVCLHdDQUE2Qjs7SUFDN0IsOENBQWlEOztJQUNqRCx1Q0FBaUQ7O0lBQ2pELG9DQUFzQjs7SUFDdEIsc0NBQXlCOztJQUN6QixxQ0FBMEI7O0lBQzFCLDJDQUEyQjs7SUFDM0IsdUNBQWtEOztJQUNsRCxvQ0FBc0I7O0lBQ3RCLHNDQUF5Qjs7SUFDekIscUNBQTBCOztJQUMxQiwyQ0FBb0M7O0lBQ3BDLDBDQUFnRTs7SUFDaEUsaUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtYmlkLXRhZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtYmlkLXRhZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1iaWQtdGFnLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VCaWRUYWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHByaXplID0gJyQxMDAnO1xyXG5cdEBJbnB1dCgpIHByaXplU2l6ZSA9ICc1MCc7XHJcblx0QElucHV0KCkgcHJpemVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoKSBwcml6ZUNvbG9yID0gJ3doaXRlJztcclxuXHRASW5wdXQoKSBwcml6ZUN1c3RvbUNsYXNzID0gJ21iLTAnO1xyXG5cdEBJbnB1dCgpIHVuaXQgPSAnLyBCT1gnO1xyXG5cdEBJbnB1dCgpIHVuaXRTaXplID0gJzE0JztcclxuXHRASW5wdXQoKSB1bml0V2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCkgdW5pdENvbG9yID0gJ3doaXRlJztcclxuXHRASW5wdXQoKSB1bml0Q3VzdG9tQ2xhc3MgPSAnbXQtNCBwdC0zIG1iLTAgbWwtMyc7XHJcblx0QElucHV0KCkgcUNvbnRlbnQgPSAnMTAwIGNhc2VzIC8gYm94OiAyMDAgYm94ZXMnO1xyXG5cdEBJbnB1dCgpIHFTaXplID0gJzE1JztcclxuXHRASW5wdXQoKSBxV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCkgcUNvbG9yID0gJ3doaXRlJztcclxuXHRASW5wdXQoKSBxQ3VzdG9tQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoKSBwQ29udGVudCA9ICckNDAsMDAwIHRvdGFsICg4MCwwMDAgU1VLVSknO1xyXG5cdEBJbnB1dCgpIHBTaXplID0gJzE1JztcclxuXHRASW5wdXQoKSBwV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCkgcENvbG9yID0gJ3doaXRlJztcclxuXHRASW5wdXQoKSBwQ3VzdG9tQ2xhc3MgPSAnbXQtMSBwYi0yJztcclxuXHRASW5wdXQoKSBiaWR0YWdjbGFzcyA9ICdjb2wgcC0xIGNvbCBwLTEgc3VrdS1iaWctdGFnIHBsLTQgcGwtNCc7XHJcblx0QElucHV0KCkgaWQgPSAnc3VrdS1iaWctdGFnJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=