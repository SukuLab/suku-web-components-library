/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuLargeBidTagComponent = /** @class */ (function () {
    function SukuLargeBidTagComponent() {
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
    SukuLargeBidTagComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuLargeBidTagComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-bid-tag-type-two',
                    template: "<div [class]=\"customClass\">\n  <div class=\"article selected\">\n    <div class=\"title-txt\" [style.color]=\"titleFontColor\" [style.font-size.px]=\"titleFontSize\" [style.font-weight]=\"titleFontWeight\">{{titleText}}</div>\n    <aside>\n      <div class=\"prize\"> <span [style.color]=\"priceFontColor\" [style.font-size.px]=\"priceFontSize\" [style.font-weight]=\"priceFontWeight\"> {{(paymentMethod == 'USD') ? '$': ''}}{{productPrice}}</span> <sub>{{(paymentMethod != 'USD') ? paymentMethod : ''}} / UNIT</sub>\n      </div>\n      <ul class=\"bulletPoint\" [style.color]=\"listFontColor\" [style.font-size.px]=\"listFontSize\" [style.font-weight]=\"listFontWeight\">\n        <li>{{totalPriceLabel}}: {{(paymentMethod == 'USD') ? '$': ''}}{{productTotalPrice}} {{(paymentMethod != 'USD') ? paymentMethod : ''}}</li>\n        <li>{{quantityLabel}}: {{productQuantity}}</li>\n        <li *ngIf=\"minQtyLabel\">{{minQtyLabel}}: {{minimumQuantity}}</li>\n      </ul>\n    </aside>\n    <div class=\"list\">\n      <ul class=\"pl-4 productPayment\">\n        <li>\n          <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\" [style.font-size.px]=\"bidTitleFontSize\">{{paymentMethodLabel}}:</span>\n          <span class=\"bid-details ml-2\" [style.font-weight]=\"bidDetilsFontWeight\" [style.color]=\"bidDetilsFontColor\" [style.font-size.px]=\"bidDetilsFontSize\"> {{paymentMethod}}</span>\n        </li>\n        <li>\n          <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\" [style.font-size.px]=\"bidTitleFontSize\">{{paymentTermsLabel}}:</span>\n          <span class=\"bid-details ml-2\" [style.font-weight]=\"bidDetilsFontWeight\" [style.color]=\"bidDetilsFontColor\" [style.font-size.px]=\"bidDetilsFontSize\"> {{paymentTerms}}</span>\n        </li>\n        <li>\n          <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\" [style.font-size.px]=\"bidTitleFontSize\"> {{deliveryTermsLabel}}:</span>\n          <span class=\"bid-details ml-2\" [style.font-weight]=\"bidDetilsFontWeight\" [style.color]=\"bidDetilsFontColor\" [style.font-size.px]=\"bidDetilsFontSize\">  {{deliveryTerms}} {{ deliveryTerms > 1 ? '\n              days' : ' day'}}</span>\n          </li>\n      </ul>\n    </div>\n  </div>  \n</div>",
                    styles: [".article{float:left}.article .title-txt{font-size:14px!important;width:100%;float:left;color:#1d1d1d;padding:0 0 12px}.article aside{width:100%;float:left;background:#353a3e;border-left:5px solid #010101;border-radius:0 40px 0 0;padding:17px 30px;margin:0 0 18px}.article aside:last-child{margin-bottom:0}.article aside .prize{width:100%;float:left;font-family:Poppins,sans-serif;font-size:50px;color:#fff;line-height:1em;margin:0 0 12px}.article aside .prize sub{font-size:38%;color:rgba(255,255,255,.5);top:-2px}.article aside ul{width:100%;float:left;padding:0;margin:0}.article aside ul li{width:100%;float:left;color:rgba(255,255,255,.5);letter-spacing:.02em;padding:0 0 4px;margin:0}.article aside ul li:last-child{padding-bottom:0}.article aside ul li:before{display:none}.article .list{width:100%;float:left;border-bottom:1px solid rgba(0,0,0,.1);padding:0 0 20px}.article .list ul li{color:#000}.article.selected aside{border-left-color:#a7bf2e}.article-out{width:100%;float:left;margin:0 0 0 35px}@media (max-width:991px){.article{width:44%;margin:0 3% 50px}.article aside{padding:25px;margin:0 0 18px}.article-out{width:106%;margin:0 -3% -50px;height:100%}}@media (max-width:767px){.article{width:100%;margin:0 0 35px}.article aside{border-radius:0 25px 0 0;padding:20px}.article aside .prize{font-size:40px}.article aside ul{width:100%;float:left;padding:0;margin:0}.article .list{padding:0 0 20px}.article-out{width:100%;margin:0 0 -35px;height:100%}}.bulletPoint li{list-style-type:none}.productPayment{font-family:\"Encode sans\",sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#3e3e3e}.bid-title{font-family:\"Encode Sans\",sans-serif;font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6;text-transform:uppercase}.bid-details{font-family:\"Encode Sans\",sans-serif;font-size:14px;font-weight:50px;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#3e3e3e}ul{list-style:none}ul li::before{content:\"\\2022\";color:#dedede;font-weight:700;font-size:16px;display:inline-block;width:1em}.default{width:350px}"]
                }] }
    ];
    /** @nocollapse */
    SukuLargeBidTagComponent.ctorParameters = function () { return []; };
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
    return SukuLargeBidTagComponent;
}());
export { SukuLargeBidTagComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtdGFnLXR5cGUtdHdvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJpZC10YWctdHlwZS10d28vc3VrdS1iaWQtdGFnLXR5cGUtdHdvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFxQ0U7UUEvQk8sa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLHVCQUFrQixHQUFHLGdCQUFnQixDQUFDO1FBQ3RDLHNCQUFpQixHQUFHLG9CQUFvQixDQUFDO1FBQ3pDLHVCQUFrQixHQUFHLGdCQUFnQixDQUFDO1FBQ3RDLG9CQUFlLEdBQUcsYUFBYSxDQUFDO1FBQ2hDLGtCQUFhLEdBQUcsVUFBVSxDQUFDO1FBQzNCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxjQUFjLENBQUE7UUFDMUIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsU0FBUyxDQUFDO1FBQzNCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQix1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDeEIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLG9CQUFlLEdBQUcsRUFBRSxDQUFDO0lBQ1osQ0FBQzs7OztJQUVqQiwyQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkF4Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLHEyRUFBcUQ7O2lCQUV0RDs7Ozs7Z0NBRUEsS0FBSzsrQkFDTCxLQUFLO29DQUNMLEtBQUs7a0NBQ0wsS0FBSztrQ0FDTCxLQUFLOytCQUNMLEtBQUs7Z0NBQ0wsS0FBSztxQ0FDTCxLQUFLO29DQUNMLEtBQUs7cUNBQ0wsS0FBSztrQ0FDTCxLQUFLO2dDQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSztnQ0FDTCxLQUFLO2lDQUNMLEtBQUs7Z0NBQ0wsS0FBSzsrQkFDTCxLQUFLO29DQUNMLEtBQUs7bUNBQ0wsS0FBSztxQ0FDTCxLQUFLO29DQUNMLEtBQUs7a0NBQ0wsS0FBSztpQ0FDTCxLQUFLO3FDQUNMLEtBQUs7c0NBQ0wsS0FBSztpQ0FDTCxLQUFLO2dDQUNMLEtBQUs7a0NBQ0wsS0FBSzs7SUFNTiwrQkFBQztDQUFBLEFBMUNELElBMENDO1NBckNZLHdCQUF3Qjs7O0lBQ3JDLGlEQUErQjs7SUFDL0IsZ0RBQTJCOztJQUMzQixxREFBa0M7O0lBQ2xDLG1EQUE2Qjs7SUFDN0IsbURBQXlCOztJQUN6QixnREFBMEI7O0lBQzFCLGlEQUEyQjs7SUFDM0Isc0RBQStDOztJQUMvQyxxREFBa0Q7O0lBQ2xELHNEQUErQzs7SUFDL0MsbURBQXlDOztJQUN6QyxpREFBb0M7O0lBQ3BDLCtDQUEwQjs7SUFDMUIsNkNBQW1DOztJQUNuQyw2Q0FBd0I7O0lBQ3hCLCtDQUE2Qjs7SUFDN0IsaURBQWdDOztJQUNoQyxrREFBb0M7O0lBQ3BDLGlEQUE0Qjs7SUFDNUIsZ0RBQTZCOztJQUM3QixxREFBZ0M7O0lBQ2hDLG9EQUErQjs7SUFDL0Isc0RBQWlDOztJQUNqQyxxREFBZ0M7O0lBQ2hDLG1EQUE4Qjs7SUFDOUIsa0RBQTZCOztJQUM3QixzREFBaUM7O0lBQ2pDLHVEQUFrQzs7SUFDbEMsa0RBQTZCOztJQUM3QixpREFBNEI7O0lBQzVCLG1EQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWJpZC10YWctdHlwZS10d28nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1iaWQtdGFnLXR5cGUtdHdvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1iaWQtdGFnLXR5cGUtdHdvLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUxhcmdlQmlkVGFnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbkBJbnB1dCgpIHBheW1lbnRNZXRob2QgPSAnVVNEJztcbkBJbnB1dCgpIHByb2R1Y3RQcmljZSA9IDUwO1xuQElucHV0KCkgcHJvZHVjdFRvdGFsUHJpY2UgPSAnNTAnO1xuQElucHV0KCkgcHJvZHVjdFF1YW50aXR5ID0gMTtcbkBJbnB1dCgpIG1pbmltdW1RdWFudGl0eTtcbkBJbnB1dCgpIHBheW1lbnRUZXJtcyA9IDE7XG5ASW5wdXQoKSBkZWxpdmVyeVRlcm1zID0gMTtcbkBJbnB1dCgpIHBheW1lbnRNZXRob2RMYWJlbCA9ICdQYXltZW50IG1ldGhvZCc7XG5ASW5wdXQoKSBwYXltZW50VGVybXNMYWJlbCA9ICdQYXltZW50IHRpbWUgZnJhbWUnO1xuQElucHV0KCkgZGVsaXZlcnlUZXJtc0xhYmVsID0gJ0RlbGl2ZXJ5IHRlcm1zJztcbkBJbnB1dCgpIHRvdGFsUHJpY2VMYWJlbCA9ICdUb3RhbCBQcmljZSc7XG5ASW5wdXQoKSBxdWFudGl0eUxhYmVsID0gJ1F1YW50aXR5JztcbkBJbnB1dCgpIG1pblF0eUxhYmVsID0gJyc7XG5ASW5wdXQoKSB0aXRsZVRleHQgPSAnT3JpZ2luYWwgQXNrJ1xuQElucHV0KCkgZG9jdW1lbnRzID0gW107XG5ASW5wdXQoKSBjdXN0b21DbGFzcyA9ICdjb2wnO1xuQElucHV0KCkgcHJpY2VGb250U2l6ZSA9ICc1MHB4JztcbkBJbnB1dCgpIHByaWNlRm9udENvbG9yID0gJyNmZmZmZmYnO1xuQElucHV0KCkgbGlzdEZvbnRDb2xvciA9ICcnO1xuQElucHV0KCkgbGlzdEZvbnRTaXplID0gJzE2JztcbkBJbnB1dCgpIGJpZFRpdGxlRm9udENvbG9yID0gJyc7XG5ASW5wdXQoKSBiaWRUaXRsZUZvbnRTaXplID0gJyc7XG5ASW5wdXQoKSBiaWREZXRpbHNGb250Q29sb3IgPSAnJztcbkBJbnB1dCgpIGJpZERldGlsc0ZvbnRTaXplID0gJyc7XG5ASW5wdXQoKSBwcmljZUZvbnRXZWlnaHQgPSAnJztcbkBJbnB1dCgpIGxpc3RGb250V2VpZ2h0ID0gJyc7XG5ASW5wdXQoKSBiaWRUaXRsZUZvbnRXZWlnaHQgPSAnJztcbkBJbnB1dCgpIGJpZERldGlsc0ZvbnRXZWlnaHQgPSAnJztcbkBJbnB1dCgpIHRpdGxlRm9udENvbG9yID0gJyc7XG5ASW5wdXQoKSB0aXRsZUZvbnRTaXplID0gJyc7XG5ASW5wdXQoKSB0aXRsZUZvbnRXZWlnaHQgPSAnJztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=