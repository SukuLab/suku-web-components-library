/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuBidWidgetTagComponent {
    constructor() {
        this.paymentMethod = 'USD';
        this.productPrice = 50;
        this.productTotalPrice = '50';
        this.productQuantity = 1;
        this.paymentTerms = 1;
        this.deliveryTerms = 1;
        this.paymentMethodLabel = 'Payment method';
        this.paymentTermsLabel = 'Payment time frame';
        this.deliveryTermsLabel = 'Delivery terms';
        this.totalPriceLabel = 'Total Price';
        this.quantityLabel = 'Quantity';
        this.minQtyLabel = '';
        this.titleText = 'Original Ask';
        this.documents = [];
        this.customClass = 'col';
        this.priceFontSize = '50px';
        this.priceFontColor = '#ffffff';
        this.listFontColor = '';
        this.listFontSize = '16';
        this.bidTitleFontColor = '';
        this.bidTitleFontSize = '';
        this.bidDetilsFontColor = '';
        this.bidDetilsFontSize = '';
        this.priceFontWeight = '';
        this.listFontWeight = '';
        this.bidTitleFontWeight = '';
        this.bidDetilsFontWeight = '';
        this.titleFontColor = '';
        this.titleFontSize = '';
        this.titleFontWeight = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuBidWidgetTagComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-bid-widget',
                template: "<div [class]=\"customClass\">\n  <div class=\"article selected\">\n    <div class=\"title-txt\" [style.color]=\"titleFontColor\" [style.font-size.px]=\"titleFontSize\"\n      [style.font-weight]=\"titleFontWeight\">{{titleText}}</div>\n    <aside>\n      <div class=\"prize\"> <span [style.color]=\"priceFontColor\" [style.font-size.px]=\"priceFontSize\"\n          [style.font-weight]=\"priceFontWeight\"> {{(paymentMethod == 'USD') ? '$': ''}}{{productPrice}}</span>\n        <sub>{{(paymentMethod != 'USD') ? paymentMethod : ''}} / UNIT</sub>\n      </div>\n      <ul class=\"bulletPoint\" [style.color]=\"listFontColor\" [style.font-size.px]=\"listFontSize\"\n        [style.font-weight]=\"listFontWeight\">\n        <li>{{totalPriceLabel}}: {{(paymentMethod == 'USD') ? '$': ''}}{{productTotalPrice}}\n          {{(paymentMethod != 'USD') ? paymentMethod : ''}}</li>\n        <li>{{quantityLabel}}: {{productQuantity}}</li>\n        <li *ngIf=\"minQtyLabel\">{{minQtyLabel}}: {{minimumQuantity}}</li>\n      </ul>\n    </aside>\n    <div class=\"list\">\n      <ul class=\"pl-4 productPayment\">\n        <li>\n          <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\"\n            [style.font-size.px]=\"bidTitleFontSize\">{{paymentMethodLabel}}:</span>\n          <span class=\"bid-details ml-2\" [style.font-weight]=\"bidDetilsFontWeight\" [style.color]=\"bidDetilsFontColor\"\n            [style.font-size.px]=\"bidDetilsFontSize\"> {{paymentMethod}}</span>\n        </li>\n        <li>\n          <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\"\n            [style.font-size.px]=\"bidTitleFontSize\">{{paymentTermsLabel}}:</span>\n          <span class=\"bid-details ml-2\" [style.font-weight]=\"bidDetilsFontWeight\" [style.color]=\"bidDetilsFontColor\"\n            [style.font-size.px]=\"bidDetilsFontSize\"> {{paymentTerms}}</span>\n        </li>\n        <li>\n          <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\"\n            [style.font-size.px]=\"bidTitleFontSize\"> {{deliveryTermsLabel}}:</span>\n          <span class=\"bid-details ml-2\" [style.font-weight]=\"bidDetilsFontWeight\" [style.color]=\"bidDetilsFontColor\"\n            [style.font-size.px]=\"bidDetilsFontSize\"> {{deliveryTerms}} {{ deliveryTerms > 1 ? '\n              days' : ' day'}}</span>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);.article{float:left}.article .title-txt{font-size:14px!important;width:100%;float:left;color:#1d1d1d;padding:0 0 12px}.article aside{width:100%;float:left;background:#353a3e;border-left:5px solid #010101;border-radius:0 40px 0 0;padding:17px 30px;margin:0 0 18px}.article aside:last-child{margin-bottom:0}.article aside .prize{width:100%;float:left;font-family:Poppins,sans-serif!important;font-size:50px;color:#fff;line-height:1em;margin:0 0 12px}.article aside .prize sub{font-size:38%;color:rgba(255,255,255,.5);top:-2px}.article aside ul{width:100%;float:left;font-family:Poppins,sans-serif!important;padding:0;margin:0}.article aside ul li{width:100%;float:left;color:rgba(255,255,255,.5);letter-spacing:.02em;padding:0 0 4px;margin:0}.article aside ul li:last-child{padding-bottom:0}.article aside ul li:before{display:none}.article .list{width:100%;float:left;border-bottom:1px solid rgba(0,0,0,.1);padding:0 0 20px}.article .list ul li{color:#000}.article.selected aside{border-left-color:#a7bf2e}.article-out{width:100%;float:left;margin:0 0 0 35px}@media (max-width:991px){.article{width:44%;margin:0 3% 50px}.article aside{padding:25px;margin:0 0 18px}.article-out{width:106%;margin:0 -3% -50px;height:100%}}@media (max-width:767px){.article{width:100%;margin:0 0 35px}.article aside{border-radius:0 25px 0 0;padding:20px}.article aside .prize{font-size:40px}.article aside ul{width:100%;float:left;padding:0;margin:0}.article .list{padding:0 0 20px}.article-out{width:100%;margin:0 0 -35px;height:100%}}.bulletPoint li{list-style-type:none}.productPayment{font-family:\"Encode Sans\",sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#3e3e3e}.bid-title{font-family:\"Encode Sans\",sans-serif!important;font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6;text-transform:uppercase}.bid-details{font-family:\"Encode Sans\",sans-serif!important;font-size:14px;font-weight:50px;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#3e3e3e}ul{list-style:none}ul li::before{content:\"\\2022\";color:#dedede;font-weight:700;font-size:16px;display:inline-block;width:1em}.default{width:350px}"]
            }] }
];
/** @nocollapse */
SukuBidWidgetTagComponent.ctorParameters = () => [];
SukuBidWidgetTagComponent.propDecorators = {
    paymentMethod: [{ type: Input }],
    productPrice: [{ type: Input }],
    productTotalPrice: [{ type: Input }],
    productQuantity: [{ type: Input }],
    minimumQuantity: [{ type: Input }],
    paymentTerms: [{ type: Input }],
    deliveryTerms: [{ type: Input }],
    paymentMethodLabel: [{ type: Input }],
    paymentTermsLabel: [{ type: Input }],
    deliveryTermsLabel: [{ type: Input }],
    totalPriceLabel: [{ type: Input }],
    quantityLabel: [{ type: Input }],
    minQtyLabel: [{ type: Input }],
    titleText: [{ type: Input }],
    documents: [{ type: Input }],
    customClass: [{ type: Input }],
    priceFontSize: [{ type: Input }],
    priceFontColor: [{ type: Input }],
    listFontColor: [{ type: Input }],
    listFontSize: [{ type: Input }],
    bidTitleFontColor: [{ type: Input }],
    bidTitleFontSize: [{ type: Input }],
    bidDetilsFontColor: [{ type: Input }],
    bidDetilsFontSize: [{ type: Input }],
    priceFontWeight: [{ type: Input }],
    listFontWeight: [{ type: Input }],
    bidTitleFontWeight: [{ type: Input }],
    bidDetilsFontWeight: [{ type: Input }],
    titleFontColor: [{ type: Input }],
    titleFontSize: [{ type: Input }],
    titleFontWeight: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.paymentMethod;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.productPrice;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.productTotalPrice;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.productQuantity;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.minimumQuantity;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.paymentTerms;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.deliveryTerms;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.paymentMethodLabel;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.paymentTermsLabel;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.deliveryTermsLabel;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.totalPriceLabel;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.quantityLabel;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.minQtyLabel;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.titleText;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.documents;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.customClass;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.priceFontSize;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.priceFontColor;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.listFontColor;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.listFontSize;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.bidTitleFontColor;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.bidTitleFontSize;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.bidDetilsFontColor;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.bidDetilsFontSize;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.priceFontWeight;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.listFontWeight;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.bidTitleFontWeight;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.bidDetilsFontWeight;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.titleFontColor;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.titleFontSize;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.titleFontWeight;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJpZC13aWRnZXQvc3VrdS1iaWQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHlCQUF5QjtJQWdDcEM7UUEvQk8sa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLHVCQUFrQixHQUFHLGdCQUFnQixDQUFDO1FBQ3RDLHNCQUFpQixHQUFHLG9CQUFvQixDQUFDO1FBQ3pDLHVCQUFrQixHQUFHLGdCQUFnQixDQUFDO1FBQ3RDLG9CQUFlLEdBQUcsYUFBYSxDQUFDO1FBQ2hDLGtCQUFhLEdBQUcsVUFBVSxDQUFDO1FBQzNCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxjQUFjLENBQUM7UUFDM0IsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsU0FBUyxDQUFDO1FBQzNCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQix1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDeEIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLG9CQUFlLEdBQUcsRUFBRSxDQUFDO0lBQ1osQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBeENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiw2OUVBQStDOzthQUVoRDs7Ozs7NEJBRUEsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSztpQ0FDTCxLQUFLO2dDQUNMLEtBQUs7aUNBQ0wsS0FBSzs4QkFDTCxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSztpQ0FDTCxLQUFLO2dDQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLO2lDQUNMLEtBQUs7a0NBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7OztJQTlCTixrREFBK0I7O0lBQy9CLGlEQUEyQjs7SUFDM0Isc0RBQWtDOztJQUNsQyxvREFBNkI7O0lBQzdCLG9EQUF5Qjs7SUFDekIsaURBQTBCOztJQUMxQixrREFBMkI7O0lBQzNCLHVEQUErQzs7SUFDL0Msc0RBQWtEOztJQUNsRCx1REFBK0M7O0lBQy9DLG9EQUF5Qzs7SUFDekMsa0RBQW9DOztJQUNwQyxnREFBMEI7O0lBQzFCLDhDQUFvQzs7SUFDcEMsOENBQXdCOztJQUN4QixnREFBNkI7O0lBQzdCLGtEQUFnQzs7SUFDaEMsbURBQW9DOztJQUNwQyxrREFBNEI7O0lBQzVCLGlEQUE2Qjs7SUFDN0Isc0RBQWdDOztJQUNoQyxxREFBK0I7O0lBQy9CLHVEQUFpQzs7SUFDakMsc0RBQWdDOztJQUNoQyxvREFBOEI7O0lBQzlCLG1EQUE2Qjs7SUFDN0IsdURBQWlDOztJQUNqQyx3REFBa0M7O0lBQ2xDLG1EQUE2Qjs7SUFDN0Isa0RBQTRCOztJQUM1QixvREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1iaWQtd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtYmlkLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtYmlkLXdpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VCaWRXaWRnZXRUYWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuQElucHV0KCkgcGF5bWVudE1ldGhvZCA9ICdVU0QnO1xuQElucHV0KCkgcHJvZHVjdFByaWNlID0gNTA7XG5ASW5wdXQoKSBwcm9kdWN0VG90YWxQcmljZSA9ICc1MCc7XG5ASW5wdXQoKSBwcm9kdWN0UXVhbnRpdHkgPSAxO1xuQElucHV0KCkgbWluaW11bVF1YW50aXR5O1xuQElucHV0KCkgcGF5bWVudFRlcm1zID0gMTtcbkBJbnB1dCgpIGRlbGl2ZXJ5VGVybXMgPSAxO1xuQElucHV0KCkgcGF5bWVudE1ldGhvZExhYmVsID0gJ1BheW1lbnQgbWV0aG9kJztcbkBJbnB1dCgpIHBheW1lbnRUZXJtc0xhYmVsID0gJ1BheW1lbnQgdGltZSBmcmFtZSc7XG5ASW5wdXQoKSBkZWxpdmVyeVRlcm1zTGFiZWwgPSAnRGVsaXZlcnkgdGVybXMnO1xuQElucHV0KCkgdG90YWxQcmljZUxhYmVsID0gJ1RvdGFsIFByaWNlJztcbkBJbnB1dCgpIHF1YW50aXR5TGFiZWwgPSAnUXVhbnRpdHknO1xuQElucHV0KCkgbWluUXR5TGFiZWwgPSAnJztcbkBJbnB1dCgpIHRpdGxlVGV4dCA9ICdPcmlnaW5hbCBBc2snO1xuQElucHV0KCkgZG9jdW1lbnRzID0gW107XG5ASW5wdXQoKSBjdXN0b21DbGFzcyA9ICdjb2wnO1xuQElucHV0KCkgcHJpY2VGb250U2l6ZSA9ICc1MHB4JztcbkBJbnB1dCgpIHByaWNlRm9udENvbG9yID0gJyNmZmZmZmYnO1xuQElucHV0KCkgbGlzdEZvbnRDb2xvciA9ICcnO1xuQElucHV0KCkgbGlzdEZvbnRTaXplID0gJzE2JztcbkBJbnB1dCgpIGJpZFRpdGxlRm9udENvbG9yID0gJyc7XG5ASW5wdXQoKSBiaWRUaXRsZUZvbnRTaXplID0gJyc7XG5ASW5wdXQoKSBiaWREZXRpbHNGb250Q29sb3IgPSAnJztcbkBJbnB1dCgpIGJpZERldGlsc0ZvbnRTaXplID0gJyc7XG5ASW5wdXQoKSBwcmljZUZvbnRXZWlnaHQgPSAnJztcbkBJbnB1dCgpIGxpc3RGb250V2VpZ2h0ID0gJyc7XG5ASW5wdXQoKSBiaWRUaXRsZUZvbnRXZWlnaHQgPSAnJztcbkBJbnB1dCgpIGJpZERldGlsc0ZvbnRXZWlnaHQgPSAnJztcbkBJbnB1dCgpIHRpdGxlRm9udENvbG9yID0gJyc7XG5ASW5wdXQoKSB0aXRsZUZvbnRTaXplID0gJyc7XG5ASW5wdXQoKSB0aXRsZUZvbnRXZWlnaHQgPSAnJztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=