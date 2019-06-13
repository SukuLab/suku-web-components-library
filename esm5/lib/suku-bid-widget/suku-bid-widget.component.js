/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuBidWidgetTagComponent = /** @class */ (function () {
    function SukuBidWidgetTagComponent() {
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
    SukuBidWidgetTagComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuBidWidgetTagComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-bid-widget',
                    template: "<div [class]=\"customClass\">\n  <div class=\"article selected\">\n    <div class=\"title-txt\" [style.color]=\"titleFontColor\" [style.font-size.px]=\"titleFontSize\"\n      [style.font-weight]=\"titleFontWeight\">{{titleText}}</div>\n    <aside>\n      <div class=\"prize\"> <span [style.color]=\"priceFontColor\" [style.font-size.px]=\"priceFontSize\"\n          [style.font-weight]=\"priceFontWeight\"> {{(paymentMethod == 'USD') ? '$': ''}}{{productPrice}}</span>\n        <sub>{{(paymentMethod != 'USD') ? paymentMethod : ''}} / UNIT</sub>\n      </div>\n      <ul class=\"bulletPoint\" [style.color]=\"listFontColor\" [style.font-size.px]=\"listFontSize\"\n        [style.font-weight]=\"listFontWeight\">\n        <li>{{totalPriceLabel}}: {{(paymentMethod == 'USD') ? '$': ''}}{{productTotalPrice}}\n          {{(paymentMethod != 'USD') ? paymentMethod : ''}}</li>\n        <li>{{quantityLabel}}: {{productQuantity}}</li>\n        <li *ngIf=\"minQtyLabel\">{{minQtyLabel}}: {{minimumQuantity}}</li>\n      </ul>\n    </aside>\n    <div class=\"list\">\n      <ul class=\"pl-4 productPayment\">\n        <li>\n          <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\"\n            [style.font-size.px]=\"bidTitleFontSize\">{{paymentMethodLabel}}:</span>\n          <span class=\"bid-details ml-2\" [style.font-weight]=\"bidDetilsFontWeight\" [style.color]=\"bidDetilsFontColor\"\n            [style.font-size.px]=\"bidDetilsFontSize\"> {{paymentMethod}}</span>\n        </li>\n        <li>\n          <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\"\n            [style.font-size.px]=\"bidTitleFontSize\">{{paymentTermsLabel}}:</span>\n          <span class=\"bid-details ml-2\" [style.font-weight]=\"bidDetilsFontWeight\" [style.color]=\"bidDetilsFontColor\"\n            [style.font-size.px]=\"bidDetilsFontSize\"> {{paymentTerms}}</span>\n        </li>\n        <li>\n          <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\"\n            [style.font-size.px]=\"bidTitleFontSize\"> {{deliveryTermsLabel}}:</span>\n          <span class=\"bid-details ml-2\" [style.font-weight]=\"bidDetilsFontWeight\" [style.color]=\"bidDetilsFontColor\"\n            [style.font-size.px]=\"bidDetilsFontSize\"> {{deliveryTerms}} {{ deliveryTerms > 1 ? '\n              days' : ' day'}}</span>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);.article{float:left}.article .title-txt{font-size:14px!important;width:100%;float:left;color:#1d1d1d;padding:0 0 12px}.article aside{width:100%;float:left;background:#353a3e;border-left:5px solid #010101;border-radius:0 40px 0 0;padding:17px 30px;margin:0 0 18px}.article aside:last-child{margin-bottom:0}.article aside .prize{width:100%;float:left;font-family:Poppins,sans-serif!important;font-size:50px;color:#fff;line-height:1em;margin:0 0 12px}.article aside .prize sub{font-size:38%;color:rgba(255,255,255,.5);top:-2px}.article aside ul{width:100%;float:left;font-family:Poppins,sans-serif!important;padding:0;margin:0}.article aside ul li{width:100%;float:left;color:rgba(255,255,255,.5);letter-spacing:.02em;padding:0 0 4px;margin:0}.article aside ul li:last-child{padding-bottom:0}.article aside ul li:before{display:none}.article .list{width:100%;float:left;border-bottom:1px solid rgba(0,0,0,.1);padding:0 0 20px}.article .list ul li{color:#000}.article.selected aside{border-left-color:#a7bf2e}.article-out{width:100%;float:left;margin:0 0 0 35px}@media (max-width:991px){.article{width:44%;margin:0 3% 50px}.article aside{padding:25px;margin:0 0 18px}.article-out{width:106%;margin:0 -3% -50px;height:100%}}@media (max-width:767px){.article{width:100%;margin:0 0 35px}.article aside{border-radius:0 25px 0 0;padding:20px}.article aside .prize{font-size:40px}.article aside ul{width:100%;float:left;padding:0;margin:0}.article .list{padding:0 0 20px}.article-out{width:100%;margin:0 0 -35px;height:100%}}.bulletPoint li{list-style-type:none}.productPayment{font-family:\"Encode Sans\",sans-serif!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#3e3e3e}.bid-title{font-family:\"Encode Sans\",sans-serif!important;font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6;text-transform:uppercase}.bid-details{font-family:\"Encode Sans\",sans-serif!important;font-size:14px;font-weight:50px;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:#3e3e3e}ul{list-style:none}ul li::before{content:\"\\2022\";color:#dedede;font-weight:700;font-size:16px;display:inline-block;width:1em}.default{width:350px}"]
                }] }
    ];
    /** @nocollapse */
    SukuBidWidgetTagComponent.ctorParameters = function () { return []; };
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
    return SukuBidWidgetTagComponent;
}());
export { SukuBidWidgetTagComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJpZC13aWRnZXQvc3VrdS1iaWQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFxQ0U7UUEvQk8sa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLHVCQUFrQixHQUFHLGdCQUFnQixDQUFDO1FBQ3RDLHNCQUFpQixHQUFHLG9CQUFvQixDQUFDO1FBQ3pDLHVCQUFrQixHQUFHLGdCQUFnQixDQUFDO1FBQ3RDLG9CQUFlLEdBQUcsYUFBYSxDQUFDO1FBQ2hDLGtCQUFhLEdBQUcsVUFBVSxDQUFDO1FBQzNCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxjQUFjLENBQUM7UUFDM0IsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsU0FBUyxDQUFDO1FBQzNCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQix1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDeEIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLG9CQUFlLEdBQUcsRUFBRSxDQUFDO0lBQ1osQ0FBQzs7OztJQUVqQiw0Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkF4Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDY5RUFBK0M7O2lCQUVoRDs7Ozs7Z0NBRUEsS0FBSzsrQkFDTCxLQUFLO29DQUNMLEtBQUs7a0NBQ0wsS0FBSztrQ0FDTCxLQUFLOytCQUNMLEtBQUs7Z0NBQ0wsS0FBSztxQ0FDTCxLQUFLO29DQUNMLEtBQUs7cUNBQ0wsS0FBSztrQ0FDTCxLQUFLO2dDQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSztnQ0FDTCxLQUFLO2lDQUNMLEtBQUs7Z0NBQ0wsS0FBSzsrQkFDTCxLQUFLO29DQUNMLEtBQUs7bUNBQ0wsS0FBSztxQ0FDTCxLQUFLO29DQUNMLEtBQUs7a0NBQ0wsS0FBSztpQ0FDTCxLQUFLO3FDQUNMLEtBQUs7c0NBQ0wsS0FBSztpQ0FDTCxLQUFLO2dDQUNMLEtBQUs7a0NBQ0wsS0FBSzs7SUFNTixnQ0FBQztDQUFBLEFBMUNELElBMENDO1NBckNZLHlCQUF5Qjs7O0lBQ3RDLGtEQUErQjs7SUFDL0IsaURBQTJCOztJQUMzQixzREFBa0M7O0lBQ2xDLG9EQUE2Qjs7SUFDN0Isb0RBQXlCOztJQUN6QixpREFBMEI7O0lBQzFCLGtEQUEyQjs7SUFDM0IsdURBQStDOztJQUMvQyxzREFBa0Q7O0lBQ2xELHVEQUErQzs7SUFDL0Msb0RBQXlDOztJQUN6QyxrREFBb0M7O0lBQ3BDLGdEQUEwQjs7SUFDMUIsOENBQW9DOztJQUNwQyw4Q0FBd0I7O0lBQ3hCLGdEQUE2Qjs7SUFDN0Isa0RBQWdDOztJQUNoQyxtREFBb0M7O0lBQ3BDLGtEQUE0Qjs7SUFDNUIsaURBQTZCOztJQUM3QixzREFBZ0M7O0lBQ2hDLHFEQUErQjs7SUFDL0IsdURBQWlDOztJQUNqQyxzREFBZ0M7O0lBQ2hDLG9EQUE4Qjs7SUFDOUIsbURBQTZCOztJQUM3Qix1REFBaUM7O0lBQ2pDLHdEQUFrQzs7SUFDbEMsbURBQTZCOztJQUM3QixrREFBNEI7O0lBQzVCLG9EQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWJpZC13aWRnZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1iaWQtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1iaWQtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUJpZFdpZGdldFRhZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5ASW5wdXQoKSBwYXltZW50TWV0aG9kID0gJ1VTRCc7XG5ASW5wdXQoKSBwcm9kdWN0UHJpY2UgPSA1MDtcbkBJbnB1dCgpIHByb2R1Y3RUb3RhbFByaWNlID0gJzUwJztcbkBJbnB1dCgpIHByb2R1Y3RRdWFudGl0eSA9IDE7XG5ASW5wdXQoKSBtaW5pbXVtUXVhbnRpdHk7XG5ASW5wdXQoKSBwYXltZW50VGVybXMgPSAxO1xuQElucHV0KCkgZGVsaXZlcnlUZXJtcyA9IDE7XG5ASW5wdXQoKSBwYXltZW50TWV0aG9kTGFiZWwgPSAnUGF5bWVudCBtZXRob2QnO1xuQElucHV0KCkgcGF5bWVudFRlcm1zTGFiZWwgPSAnUGF5bWVudCB0aW1lIGZyYW1lJztcbkBJbnB1dCgpIGRlbGl2ZXJ5VGVybXNMYWJlbCA9ICdEZWxpdmVyeSB0ZXJtcyc7XG5ASW5wdXQoKSB0b3RhbFByaWNlTGFiZWwgPSAnVG90YWwgUHJpY2UnO1xuQElucHV0KCkgcXVhbnRpdHlMYWJlbCA9ICdRdWFudGl0eSc7XG5ASW5wdXQoKSBtaW5RdHlMYWJlbCA9ICcnO1xuQElucHV0KCkgdGl0bGVUZXh0ID0gJ09yaWdpbmFsIEFzayc7XG5ASW5wdXQoKSBkb2N1bWVudHMgPSBbXTtcbkBJbnB1dCgpIGN1c3RvbUNsYXNzID0gJ2NvbCc7XG5ASW5wdXQoKSBwcmljZUZvbnRTaXplID0gJzUwcHgnO1xuQElucHV0KCkgcHJpY2VGb250Q29sb3IgPSAnI2ZmZmZmZic7XG5ASW5wdXQoKSBsaXN0Rm9udENvbG9yID0gJyc7XG5ASW5wdXQoKSBsaXN0Rm9udFNpemUgPSAnMTYnO1xuQElucHV0KCkgYmlkVGl0bGVGb250Q29sb3IgPSAnJztcbkBJbnB1dCgpIGJpZFRpdGxlRm9udFNpemUgPSAnJztcbkBJbnB1dCgpIGJpZERldGlsc0ZvbnRDb2xvciA9ICcnO1xuQElucHV0KCkgYmlkRGV0aWxzRm9udFNpemUgPSAnJztcbkBJbnB1dCgpIHByaWNlRm9udFdlaWdodCA9ICcnO1xuQElucHV0KCkgbGlzdEZvbnRXZWlnaHQgPSAnJztcbkBJbnB1dCgpIGJpZFRpdGxlRm9udFdlaWdodCA9ICcnO1xuQElucHV0KCkgYmlkRGV0aWxzRm9udFdlaWdodCA9ICcnO1xuQElucHV0KCkgdGl0bGVGb250Q29sb3IgPSAnJztcbkBJbnB1dCgpIHRpdGxlRm9udFNpemUgPSAnJztcbkBJbnB1dCgpIHRpdGxlRm9udFdlaWdodCA9ICcnO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==