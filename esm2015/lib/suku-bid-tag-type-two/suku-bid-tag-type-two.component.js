/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuLargeBidTagComponent {
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
SukuLargeBidTagComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-bid-tag-type-two',
                template: "<div [class]=\"customClass\">\n  <div class=\"article selected\">\n    <div class=\"title-txt\" [style.color]=\"titleFontColor\" [style.font-size.px]=\"titleFontSize\" [style.font-weight]=\"titleFontWeight\">{{titleText}}</div>\n    <aside>\n      <div class=\"prize\"> <span [style.color]=\"priceFontColor\" [style.font-size.px]=\"priceFontSize\" [style.font-weight]=\"priceFontWeight\"> {{(paymentMethod == 'USD') ? '$': ''}}{{productPrice}}</span> <sub>{{(paymentMethod != 'USD') ? paymentMethod : ''}} / UNIT</sub>\n      </div>\n      <ul class=\"bulletPoint\" [style.color]=\"listFontColor\" [style.font-size.px]=\"listFontSize\" [style.font-weight]=\"listFontWeight\">\n        <li>{{totalPriceLabel}}: {{(paymentMethod == 'USD') ? '$': ''}}{{productTotalPrice}} {{(paymentMethod != 'USD') ? paymentMethod : ''}}</li>\n        <li>{{quantityLabel}}: {{productQuantity}}</li>\n        <li *ngIf=\"minQtyLabel\">{{minQtyLabel}}: {{minimumQuantity}}</li>\n      </ul>\n    </aside>\n    <div class=\"list\">\n      <ul class=\"pl-4 productPayment\">\n        <li>\n          <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\" [style.font-size.px]=\"bidTitleFontSize\">{{paymentMethodLabel}}:</span>\n          <span class=\"bid-details ml-2\" [style.font-weight]=\"bidDetilsFontWeight\" [style.color]=\"bidDetilsFontColor\" [style.font-size.px]=\"bidDetilsFontSize\"> {{paymentMethod}}</span>\n        </li>\n        <li>\n          <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\" [style.font-size.px]=\"bidTitleFontSize\">{{paymentTermsLabel}}:</span>\n          <span class=\"bid-details ml-2\" [style.font-weight]=\"bidDetilsFontWeight\" [style.color]=\"bidDetilsFontColor\" [style.font-size.px]=\"bidDetilsFontSize\"> {{paymentTerms}}</span>\n        </li>\n        <li>\n          <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\" [style.font-size.px]=\"bidTitleFontSize\"> {{deliveryTermsLabel}}:</span>\n          <span class=\"bid-details ml-2\" [style.font-weight]=\"bidDetilsFontWeight\" [style.color]=\"bidDetilsFontColor\" [style.font-size.px]=\"bidDetilsFontSize\">  {{deliveryTerms}} {{ deliveryTerms > 1 ? '\n              days' : ' day'}}</span>\n          </li>\n      </ul>\n    </div>\n  </div>  \n</div>",
                styles: [".article{float:left}.article .title-txt{font-size:14px!important;width:100%;float:left;color:#1d1d1d;padding:0 0 12px}.article aside{width:100%;float:left;background:#353a3e;border-left:5px solid #010101;border-radius:0 40px 0 0;padding:17px 30px;margin:0 0 18px}.article aside:last-child{margin-bottom:0}.article aside .prize{width:100%;float:left;font-family:Poppins,sans-serif;font-size:50px;color:#fff;line-height:1em;margin:0 0 12px}.article aside .prize sub{font-size:38%;color:rgba(255,255,255,.5);top:-2px}.article aside ul{width:100%;float:left;padding:0;margin:0}.article aside ul li{width:100%;float:left;color:rgba(255,255,255,.5);letter-spacing:.02em;padding:0 0 4px;margin:0}.article aside ul li:last-child{padding-bottom:0}.article aside ul li:before{display:none}.article .list{width:100%;float:left;border-bottom:1px solid rgba(0,0,0,.1);padding:0 0 20px}.article .list ul li{color:#000}.article.selected aside{border-left-color:#a7bf2e}.article-out{width:100%;float:left;margin:0 0 0 35px}@media (max-width:991px){.article{width:44%;margin:0 3% 50px}.article aside{padding:25px;margin:0 0 18px}.article-out{width:106%;margin:0 -3% -50px;height:100%}}@media (max-width:767px){.article{width:100%;margin:0 0 35px}.article aside{border-radius:0 25px 0 0;padding:20px}.article aside .prize{font-size:40px}.article aside ul{width:100%;float:left;padding:0;margin:0}.article .list{padding:0 0 20px}.article-out{width:100%;margin:0 0 -35px;height:100%}}.bulletPoint li{list-style-type:none}.productPayment{font-family:\"Encode sans\",sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#3e3e3e}.bid-title{font-family:\"Encode Sans\",sans-serif;font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6;text-transform:uppercase}.bid-details{font-family:\"Encode Sans\",sans-serif;font-size:14px;font-weight:50px;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#3e3e3e}ul{list-style:none}ul li::before{content:\"\\2022\";color:#dedede;font-weight:700;font-size:16px;display:inline-block;width:1em}.default{width:350px}"]
            }] }
];
/** @nocollapse */
SukuLargeBidTagComponent.ctorParameters = () => [];
SukuLargeBidTagComponent.propDecorators = {
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
    SukuLargeBidTagComponent.prototype.paymentMethod;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.productPrice;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.productTotalPrice;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.productQuantity;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.minimumQuantity;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.paymentTerms;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.deliveryTerms;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.paymentMethodLabel;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.paymentTermsLabel;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.deliveryTermsLabel;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.totalPriceLabel;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.quantityLabel;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.minQtyLabel;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.titleText;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.documents;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.customClass;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.priceFontSize;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.priceFontColor;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.listFontColor;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.listFontSize;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.bidTitleFontColor;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.bidTitleFontSize;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.bidDetilsFontColor;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.bidDetilsFontSize;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.priceFontWeight;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.listFontWeight;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.bidTitleFontWeight;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.bidDetilsFontWeight;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.titleFontColor;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.titleFontSize;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.titleFontWeight;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtdGFnLXR5cGUtdHdvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJpZC10YWctdHlwZS10d28vc3VrdS1iaWQtdGFnLXR5cGUtdHdvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHdCQUF3QjtJQWdDbkM7UUEvQk8sa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLHVCQUFrQixHQUFHLGdCQUFnQixDQUFDO1FBQ3RDLHNCQUFpQixHQUFHLG9CQUFvQixDQUFDO1FBQ3pDLHVCQUFrQixHQUFHLGdCQUFnQixDQUFDO1FBQ3RDLG9CQUFlLEdBQUcsYUFBYSxDQUFDO1FBQ2hDLGtCQUFhLEdBQUcsVUFBVSxDQUFDO1FBQzNCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxjQUFjLENBQUE7UUFDMUIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsU0FBUyxDQUFDO1FBQzNCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQix1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDeEIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLG9CQUFlLEdBQUcsRUFBRSxDQUFDO0lBQ1osQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBeENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxxMkVBQXFEOzthQUV0RDs7Ozs7NEJBRUEsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSztpQ0FDTCxLQUFLO2dDQUNMLEtBQUs7aUNBQ0wsS0FBSzs4QkFDTCxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSztpQ0FDTCxLQUFLO2dDQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLO2lDQUNMLEtBQUs7a0NBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7OztJQTlCTixpREFBK0I7O0lBQy9CLGdEQUEyQjs7SUFDM0IscURBQWtDOztJQUNsQyxtREFBNkI7O0lBQzdCLG1EQUF5Qjs7SUFDekIsZ0RBQTBCOztJQUMxQixpREFBMkI7O0lBQzNCLHNEQUErQzs7SUFDL0MscURBQWtEOztJQUNsRCxzREFBK0M7O0lBQy9DLG1EQUF5Qzs7SUFDekMsaURBQW9DOztJQUNwQywrQ0FBMEI7O0lBQzFCLDZDQUFtQzs7SUFDbkMsNkNBQXdCOztJQUN4QiwrQ0FBNkI7O0lBQzdCLGlEQUFnQzs7SUFDaEMsa0RBQW9DOztJQUNwQyxpREFBNEI7O0lBQzVCLGdEQUE2Qjs7SUFDN0IscURBQWdDOztJQUNoQyxvREFBK0I7O0lBQy9CLHNEQUFpQzs7SUFDakMscURBQWdDOztJQUNoQyxtREFBOEI7O0lBQzlCLGtEQUE2Qjs7SUFDN0Isc0RBQWlDOztJQUNqQyx1REFBa0M7O0lBQ2xDLGtEQUE2Qjs7SUFDN0IsaURBQTRCOztJQUM1QixtREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1iaWQtdGFnLXR5cGUtdHdvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtYmlkLXRhZy10eXBlLXR3by5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtYmlkLXRhZy10eXBlLXR3by5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VMYXJnZUJpZFRhZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5ASW5wdXQoKSBwYXltZW50TWV0aG9kID0gJ1VTRCc7XG5ASW5wdXQoKSBwcm9kdWN0UHJpY2UgPSA1MDtcbkBJbnB1dCgpIHByb2R1Y3RUb3RhbFByaWNlID0gJzUwJztcbkBJbnB1dCgpIHByb2R1Y3RRdWFudGl0eSA9IDE7XG5ASW5wdXQoKSBtaW5pbXVtUXVhbnRpdHk7XG5ASW5wdXQoKSBwYXltZW50VGVybXMgPSAxO1xuQElucHV0KCkgZGVsaXZlcnlUZXJtcyA9IDE7XG5ASW5wdXQoKSBwYXltZW50TWV0aG9kTGFiZWwgPSAnUGF5bWVudCBtZXRob2QnO1xuQElucHV0KCkgcGF5bWVudFRlcm1zTGFiZWwgPSAnUGF5bWVudCB0aW1lIGZyYW1lJztcbkBJbnB1dCgpIGRlbGl2ZXJ5VGVybXNMYWJlbCA9ICdEZWxpdmVyeSB0ZXJtcyc7XG5ASW5wdXQoKSB0b3RhbFByaWNlTGFiZWwgPSAnVG90YWwgUHJpY2UnO1xuQElucHV0KCkgcXVhbnRpdHlMYWJlbCA9ICdRdWFudGl0eSc7XG5ASW5wdXQoKSBtaW5RdHlMYWJlbCA9ICcnO1xuQElucHV0KCkgdGl0bGVUZXh0ID0gJ09yaWdpbmFsIEFzaydcbkBJbnB1dCgpIGRvY3VtZW50cyA9IFtdO1xuQElucHV0KCkgY3VzdG9tQ2xhc3MgPSAnY29sJztcbkBJbnB1dCgpIHByaWNlRm9udFNpemUgPSAnNTBweCc7XG5ASW5wdXQoKSBwcmljZUZvbnRDb2xvciA9ICcjZmZmZmZmJztcbkBJbnB1dCgpIGxpc3RGb250Q29sb3IgPSAnJztcbkBJbnB1dCgpIGxpc3RGb250U2l6ZSA9ICcxNic7XG5ASW5wdXQoKSBiaWRUaXRsZUZvbnRDb2xvciA9ICcnO1xuQElucHV0KCkgYmlkVGl0bGVGb250U2l6ZSA9ICcnO1xuQElucHV0KCkgYmlkRGV0aWxzRm9udENvbG9yID0gJyc7XG5ASW5wdXQoKSBiaWREZXRpbHNGb250U2l6ZSA9ICcnO1xuQElucHV0KCkgcHJpY2VGb250V2VpZ2h0ID0gJyc7XG5ASW5wdXQoKSBsaXN0Rm9udFdlaWdodCA9ICcnO1xuQElucHV0KCkgYmlkVGl0bGVGb250V2VpZ2h0ID0gJyc7XG5ASW5wdXQoKSBiaWREZXRpbHNGb250V2VpZ2h0ID0gJyc7XG5ASW5wdXQoKSB0aXRsZUZvbnRDb2xvciA9ICcnO1xuQElucHV0KCkgdGl0bGVGb250U2l6ZSA9ICcnO1xuQElucHV0KCkgdGl0bGVGb250V2VpZ2h0ID0gJyc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19