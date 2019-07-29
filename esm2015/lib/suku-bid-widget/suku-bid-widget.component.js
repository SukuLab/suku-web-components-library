/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.customClass = 'col p-0';
        this.priceFontSize = '50px';
        this.priceFontColor = '#ffffff';
        this.listFontColor = '';
        this.listFontSize = '1.5';
        this.bidTitleFontColor = '';
        this.bidTitleFontSize = '';
        this.bidDetailFontColor = '';
        this.bidDetailFontSize = '';
        this.priceFontWeight = '';
        this.listFontWeight = '';
        this.bidTitleFontWeight = '';
        this.bidDetailFontWeight = '';
        this.titleFontColor = '';
        this.titleFontSize = '';
        this.titleFontWeight = '';
        this.productPaymentCustomClass = 'productPayment';
        this.bidDetailCustomClass = 'bid-details';
        this.articleAlignmentCustomClass = 'article';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SukuBidWidgetTagComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-bid-widget',
                template: "<div [class]=\"customClass\">\n    <div class=\"{{articleAlignmentCustomClass}} selected\">\n      <div class=\"title-txt\" [style.color]=\"titleFontColor\" [style.font-size.rem]=\"titleFontSize\"\n        [style.font-weight]=\"titleFontWeight\">{{titleText}}</div>\n      <aside [style.backgroundColor]=\"asideBgColor\">\n        <div class=\"prize\"> <span [style.color]=\"priceFontColor\" [style.font-size.rem]=\"priceFontSize\"\n            [style.font-weight]=\"priceFontWeight\"> {{(paymentMethod == 'USD') ? '$': ''}}{{productPrice}}</span>\n          <sub>{{(paymentMethod != 'USD') ? paymentMethod : ''}} / UNIT</sub>\n        </div>\n        <ul class=\"bulletPoint\" [style.color]=\"listFontColor\" [style.font-size.rem]=\"listFontSize\"\n          [style.font-weight]=\"listFontWeight\">\n          <li>{{totalPriceLabel}}: {{(paymentMethod == 'USD') ? '$': ''}}{{productTotalPrice}}\n            {{(paymentMethod != 'USD') ? paymentMethod : ''}}</li>\n          <li>{{quantityLabel}}: {{productQuantity}}</li>\n          <li *ngIf=\"minQtyLabel\">{{minQtyLabel}}: {{minimumQuantity}}</li>\n        </ul>\n      </aside>\n      <div class=\"list\">\n        <ul class=\"pl-4 {{productPaymentCustomClass}}\">\n          <li>\n            <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\"\n              [style.font-size.rem]=\"bidTitleFontSize\">{{paymentMethodLabel}}:</span>\n            <span class=\"{{bidDetailCustomClass}} ml-2\" [style.font-weight]=\"bidDetailFontWeight\" [style.color]=\"bidDetailFontColor\"\n              [style.font-size.rem]=\"bidDetailFontSize\"> {{paymentMethod}}</span>\n          </li>\n          <li>\n            <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\"\n              [style.font-size.rem]=\"bidTitleFontSize\">{{paymentTermsLabel}}:</span>\n            <span class=\"{{bidDetailCustomClass}} ml-2\" [style.font-weight]=\"bidDetailFontWeight\" [style.color]=\"bidDetailFontColor\"\n              [style.font-size.rem]=\"bidDetailFontSize\"> {{paymentTerms}}</span>\n          </li>\n          <li>\n            <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\"\n              [style.font-size.rem]=\"bidTitleFontSize\">{{deliveryTermsLabel}}:</span>\n            <span class=\"{{bidDetailCustomClass}} ml-2\" [style.font-weight]=\"bidDetailFontWeight\" [style.color]=\"bidDetailFontColor\"\n              [style.font-size.rem]=\"bidDetailFontSize\"> {{deliveryTerms}} {{ deliveryTerms > 1 ? '\n                days' : ' day'}}</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.article{float:left}.article .title-txt{font-size:14px!important;width:100%;float:left;color:var(--suku-text-heading);padding:0 0 12px}.article aside{width:100%;float:left;background:var(--suku-bg-ternary);border-left:5px solid #0c0a0a;border-radius:var(--suku-primary-border-radius);padding:17px 30px;margin:0 0 18px}.article aside:last-child{margin-bottom:0}.article aside .prize{width:100%;float:left;font-family:var(--suku-primary-font)!important;font-size:50px;color:var(--suku-text-label-two);line-height:1em;margin:0 0 12px}.article aside .prize sub{font-size:38%;color:rgba(255,255,255,.5);top:-2px}.article aside ul{width:100%;float:left;font-family:var(--suku-primary-font)!important;padding:0;margin:0}.article aside ul li{width:100%;float:left;color:rgba(255,255,255,.5);letter-spacing:.02em;padding:0 0 4px;margin:0}.article aside ul li:last-child{padding-bottom:0}.article aside ul li:before{display:none}.article .list{width:100%;float:left;border-bottom:1px solid rgba(0,0,0,.1);padding:0 0 20px}.article .list ul li{color:var(--suku-filter-label-selected)}.article.selected aside{border-left-color:var(--suku-primary-border-color)}.article-out{width:100%;float:left;margin:0 0 0 35px}@media (max-width:991px){.article{width:44%;margin:0 3% 50px}.article aside{padding:25px;margin:0 0 18px}.article-out{width:106%;margin:0 -3% -50px;height:100%}}@media (max-width:767px){.article{width:100%;margin:0 0 35px}.article aside{border-radius:0 25px 0 0;padding:20px}.article aside .prize{font-size:40px}.article aside ul{width:100%;float:left;padding:0;margin:0}.article .list{padding:0 0 20px}.article-out{width:100%;margin:0 0 -35px;height:100%}}.bulletPoint li{list-style-type:none}.productPayment{font-family:var(--suku-secondary-font)!important;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:var(--suku-text-link)}.bid-title{font-family:var(--suku-secondary-font)!important;font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:var(--suku-text-label-one);text-transform:uppercase}.bid-details{font-family:var(--suku-secondary-font)!important;font-size:14px;font-weight:50px;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:var(--suku-text-link)}ul{list-style:none}ul li::before{content:\"\\2022\";color:#dedede;font-weight:700;font-size:16px;display:inline-block;width:1em}.default{width:350px}"]
            }] }
];
/** @nocollapse */
SukuBidWidgetTagComponent.ctorParameters = () => [];
SukuBidWidgetTagComponent.propDecorators = {
    paymentMethod: [{ type: Input, args: ['payment-method',] }],
    productPrice: [{ type: Input, args: ['product-price',] }],
    productTotalPrice: [{ type: Input, args: ['product-total-price',] }],
    productQuantity: [{ type: Input, args: ['product-quantity',] }],
    minimumQuantity: [{ type: Input, args: ['minimum-quantity',] }],
    paymentTerms: [{ type: Input, args: ['payment-terms',] }],
    deliveryTerms: [{ type: Input, args: ['delivery-terms',] }],
    paymentMethodLabel: [{ type: Input, args: ['payment-method-label',] }],
    paymentTermsLabel: [{ type: Input, args: ['payment-terms-label',] }],
    deliveryTermsLabel: [{ type: Input, args: ['delivery-terms-label',] }],
    totalPriceLabel: [{ type: Input, args: ['total-price-label',] }],
    quantityLabel: [{ type: Input, args: ['quantity-label',] }],
    minQtyLabel: [{ type: Input, args: ['min-qtylabel',] }],
    titleText: [{ type: Input, args: ['title-text',] }],
    documents: [{ type: Input }],
    customClass: [{ type: Input, args: ['custom-class',] }],
    priceFontSize: [{ type: Input, args: ['price-font-size',] }],
    priceFontColor: [{ type: Input, args: ['price-font-color',] }],
    listFontColor: [{ type: Input, args: ['list-font-color',] }],
    listFontSize: [{ type: Input, args: ['list-font-size',] }],
    bidTitleFontColor: [{ type: Input, args: ['bid-title-font-color',] }],
    bidTitleFontSize: [{ type: Input, args: ['bid-title-font-size',] }],
    bidDetailFontColor: [{ type: Input, args: ['bid-detail-font-color',] }],
    bidDetailFontSize: [{ type: Input, args: ['bid-detail-font-size',] }],
    priceFontWeight: [{ type: Input, args: ['price-font-weight',] }],
    listFontWeight: [{ type: Input, args: ['list-font-weight',] }],
    bidTitleFontWeight: [{ type: Input, args: ['bid-title-font-weight',] }],
    bidDetailFontWeight: [{ type: Input, args: ['bid-detail-font-weight',] }],
    titleFontColor: [{ type: Input, args: ['title-font-color',] }],
    titleFontSize: [{ type: Input, args: ['title-font-size',] }],
    titleFontWeight: [{ type: Input, args: ['title-font-weight',] }],
    asideBgColor: [{ type: Input, args: ['aside-bg-Color',] }],
    productPaymentCustomClass: [{ type: Input, args: ['product-payment-custom-class',] }],
    bidDetailCustomClass: [{ type: Input, args: ['bid-details-custom-class',] }],
    articleAlignmentCustomClass: [{ type: Input, args: ['article-alignment-custom-class',] }]
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
    SukuBidWidgetTagComponent.prototype.bidDetailFontColor;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.bidDetailFontSize;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.priceFontWeight;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.listFontWeight;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.bidTitleFontWeight;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.bidDetailFontWeight;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.titleFontColor;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.titleFontSize;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.titleFontWeight;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.asideBgColor;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.productPaymentCustomClass;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.bidDetailCustomClass;
    /** @type {?} */
    SukuBidWidgetTagComponent.prototype.articleAlignmentCustomClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJpZC13aWRnZXQvc3VrdS1iaWQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHlCQUF5QjtJQXNDcEM7UUFyQ3lCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ1osc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzVCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBRXZCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ1osdUJBQWtCLEdBQUcsZ0JBQWdCLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcsb0JBQW9CLENBQUM7UUFDeEMsdUJBQWtCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsb0JBQWUsR0FBRyxhQUFhLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxVQUFVLENBQUM7UUFDN0IsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDbkIsY0FBUyxHQUFHLGNBQWMsQ0FBQztRQUN2QyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ0QsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDckIsa0JBQWEsR0FBRyxNQUFNLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxTQUFTLENBQUM7UUFDNUIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDcEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDZixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDeEIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN6QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDMUIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDZix1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDdkIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQy9CLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBRVYsOEJBQXlCLEdBQzlELGdCQUFnQixDQUFDO1FBQ2dCLHlCQUFvQixHQUFHLGFBQWEsQ0FBQztRQUMvQixnQ0FBMkIsR0FDbEUsU0FBUyxDQUFDO0lBQ0ksQ0FBQzs7OztJQUVqQixRQUFRLEtBQUssQ0FBQzs7O1lBN0NmLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiw4cUZBQStDOzthQUVoRDs7Ozs7NEJBRUUsS0FBSyxTQUFDLGdCQUFnQjsyQkFDdEIsS0FBSyxTQUFDLGVBQWU7Z0NBQ3JCLEtBQUssU0FBQyxxQkFBcUI7OEJBQzNCLEtBQUssU0FBQyxrQkFBa0I7OEJBQ3hCLEtBQUssU0FBQyxrQkFBa0I7MkJBQ3hCLEtBQUssU0FBQyxlQUFlOzRCQUNyQixLQUFLLFNBQUMsZ0JBQWdCO2lDQUN0QixLQUFLLFNBQUMsc0JBQXNCO2dDQUM1QixLQUFLLFNBQUMscUJBQXFCO2lDQUMzQixLQUFLLFNBQUMsc0JBQXNCOzhCQUM1QixLQUFLLFNBQUMsbUJBQW1COzRCQUN6QixLQUFLLFNBQUMsZ0JBQWdCOzBCQUN0QixLQUFLLFNBQUMsY0FBYzt3QkFDcEIsS0FBSyxTQUFDLFlBQVk7d0JBQ2xCLEtBQUs7MEJBQ0wsS0FBSyxTQUFDLGNBQWM7NEJBQ3BCLEtBQUssU0FBQyxpQkFBaUI7NkJBQ3ZCLEtBQUssU0FBQyxrQkFBa0I7NEJBQ3hCLEtBQUssU0FBQyxpQkFBaUI7MkJBQ3ZCLEtBQUssU0FBQyxnQkFBZ0I7Z0NBQ3RCLEtBQUssU0FBQyxzQkFBc0I7K0JBQzVCLEtBQUssU0FBQyxxQkFBcUI7aUNBQzNCLEtBQUssU0FBQyx1QkFBdUI7Z0NBQzdCLEtBQUssU0FBQyxzQkFBc0I7OEJBQzVCLEtBQUssU0FBQyxtQkFBbUI7NkJBQ3pCLEtBQUssU0FBQyxrQkFBa0I7aUNBQ3hCLEtBQUssU0FBQyx1QkFBdUI7a0NBQzdCLEtBQUssU0FBQyx3QkFBd0I7NkJBQzlCLEtBQUssU0FBQyxrQkFBa0I7NEJBQ3hCLEtBQUssU0FBQyxpQkFBaUI7OEJBQ3ZCLEtBQUssU0FBQyxtQkFBbUI7MkJBQ3pCLEtBQUssU0FBQyxnQkFBZ0I7d0NBQ3RCLEtBQUssU0FBQyw4QkFBOEI7bUNBRXBDLEtBQUssU0FBQywwQkFBMEI7MENBQ2hDLEtBQUssU0FBQyxnQ0FBZ0M7Ozs7SUFuQ3ZDLGtEQUErQzs7SUFDL0MsaURBQTBDOztJQUMxQyxzREFBdUQ7O0lBQ3ZELG9EQUErQzs7SUFDL0Msb0RBQTJDOztJQUMzQyxpREFBeUM7O0lBQ3pDLGtEQUEyQzs7SUFDM0MsdURBQXFFOztJQUNyRSxzREFBdUU7O0lBQ3ZFLHVEQUFxRTs7SUFDckUsb0RBQTREOztJQUM1RCxrREFBb0Q7O0lBQ3BELGdEQUF3Qzs7SUFDeEMsOENBQWdEOztJQUNoRCw4Q0FBd0I7O0lBQ3hCLGdEQUErQzs7SUFDL0Msa0RBQWlEOztJQUNqRCxtREFBc0Q7O0lBQ3RELGtEQUE2Qzs7SUFDN0MsaURBQThDOztJQUM5QyxzREFBc0Q7O0lBQ3RELHFEQUFvRDs7SUFDcEQsdURBQXdEOztJQUN4RCxzREFBc0Q7O0lBQ3RELG9EQUFpRDs7SUFDakQsbURBQStDOztJQUMvQyx1REFBd0Q7O0lBQ3hELHdEQUEwRDs7SUFDMUQsbURBQStDOztJQUMvQyxrREFBNkM7O0lBQzdDLG9EQUFpRDs7SUFDakQsaURBQXNDOztJQUN0Qyw4REFDbUI7O0lBQ25CLHlEQUF3RTs7SUFDeEUsZ0VBQ1kiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1iaWQtd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtYmlkLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtYmlkLXdpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VCaWRXaWRnZXRUYWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ3BheW1lbnQtbWV0aG9kJykgcGF5bWVudE1ldGhvZCA9ICdVU0QnO1xuICBASW5wdXQoJ3Byb2R1Y3QtcHJpY2UnKSBwcm9kdWN0UHJpY2UgPSA1MDtcbiAgQElucHV0KCdwcm9kdWN0LXRvdGFsLXByaWNlJykgcHJvZHVjdFRvdGFsUHJpY2UgPSAnNTAnO1xuICBASW5wdXQoJ3Byb2R1Y3QtcXVhbnRpdHknKSBwcm9kdWN0UXVhbnRpdHkgPSAxO1xuICBASW5wdXQoJ21pbmltdW0tcXVhbnRpdHknKSBtaW5pbXVtUXVhbnRpdHk7XG4gIEBJbnB1dCgncGF5bWVudC10ZXJtcycpIHBheW1lbnRUZXJtcyA9IDE7XG4gIEBJbnB1dCgnZGVsaXZlcnktdGVybXMnKSBkZWxpdmVyeVRlcm1zID0gMTtcbiAgQElucHV0KCdwYXltZW50LW1ldGhvZC1sYWJlbCcpIHBheW1lbnRNZXRob2RMYWJlbCA9ICdQYXltZW50IG1ldGhvZCc7XG4gIEBJbnB1dCgncGF5bWVudC10ZXJtcy1sYWJlbCcpIHBheW1lbnRUZXJtc0xhYmVsID0gJ1BheW1lbnQgdGltZSBmcmFtZSc7XG4gIEBJbnB1dCgnZGVsaXZlcnktdGVybXMtbGFiZWwnKSBkZWxpdmVyeVRlcm1zTGFiZWwgPSAnRGVsaXZlcnkgdGVybXMnO1xuICBASW5wdXQoJ3RvdGFsLXByaWNlLWxhYmVsJykgdG90YWxQcmljZUxhYmVsID0gJ1RvdGFsIFByaWNlJztcbiAgQElucHV0KCdxdWFudGl0eS1sYWJlbCcpIHF1YW50aXR5TGFiZWwgPSAnUXVhbnRpdHknO1xuICBASW5wdXQoJ21pbi1xdHlsYWJlbCcpIG1pblF0eUxhYmVsID0gJyc7XG4gIEBJbnB1dCgndGl0bGUtdGV4dCcpIHRpdGxlVGV4dCA9ICdPcmlnaW5hbCBBc2snO1xuICBASW5wdXQoKSBkb2N1bWVudHMgPSBbXTtcbiAgQElucHV0KCdjdXN0b20tY2xhc3MnKSBjdXN0b21DbGFzcyA9ICdjb2wgcC0wJztcbiAgQElucHV0KCdwcmljZS1mb250LXNpemUnKSBwcmljZUZvbnRTaXplID0gJzUwcHgnO1xuICBASW5wdXQoJ3ByaWNlLWZvbnQtY29sb3InKSBwcmljZUZvbnRDb2xvciA9ICcjZmZmZmZmJztcbiAgQElucHV0KCdsaXN0LWZvbnQtY29sb3InKSBsaXN0Rm9udENvbG9yID0gJyc7XG4gIEBJbnB1dCgnbGlzdC1mb250LXNpemUnKSBsaXN0Rm9udFNpemUgPSAnMS41JztcbiAgQElucHV0KCdiaWQtdGl0bGUtZm9udC1jb2xvcicpIGJpZFRpdGxlRm9udENvbG9yID0gJyc7XG4gIEBJbnB1dCgnYmlkLXRpdGxlLWZvbnQtc2l6ZScpIGJpZFRpdGxlRm9udFNpemUgPSAnJztcbiAgQElucHV0KCdiaWQtZGV0YWlsLWZvbnQtY29sb3InKSBiaWREZXRhaWxGb250Q29sb3IgPSAnJztcbiAgQElucHV0KCdiaWQtZGV0YWlsLWZvbnQtc2l6ZScpIGJpZERldGFpbEZvbnRTaXplID0gJyc7XG4gIEBJbnB1dCgncHJpY2UtZm9udC13ZWlnaHQnKSBwcmljZUZvbnRXZWlnaHQgPSAnJztcbiAgQElucHV0KCdsaXN0LWZvbnQtd2VpZ2h0JykgbGlzdEZvbnRXZWlnaHQgPSAnJztcbiAgQElucHV0KCdiaWQtdGl0bGUtZm9udC13ZWlnaHQnKSBiaWRUaXRsZUZvbnRXZWlnaHQgPSAnJztcbiAgQElucHV0KCdiaWQtZGV0YWlsLWZvbnQtd2VpZ2h0JykgYmlkRGV0YWlsRm9udFdlaWdodCA9ICcnO1xuICBASW5wdXQoJ3RpdGxlLWZvbnQtY29sb3InKSB0aXRsZUZvbnRDb2xvciA9ICcnO1xuICBASW5wdXQoJ3RpdGxlLWZvbnQtc2l6ZScpIHRpdGxlRm9udFNpemUgPSAnJztcbiAgQElucHV0KCd0aXRsZS1mb250LXdlaWdodCcpIHRpdGxlRm9udFdlaWdodCA9ICcnO1xuICBASW5wdXQoJ2FzaWRlLWJnLUNvbG9yJykgYXNpZGVCZ0NvbG9yO1xuICBASW5wdXQoJ3Byb2R1Y3QtcGF5bWVudC1jdXN0b20tY2xhc3MnKSBwcm9kdWN0UGF5bWVudEN1c3RvbUNsYXNzID1cbiAgICAncHJvZHVjdFBheW1lbnQnO1xuICBASW5wdXQoJ2JpZC1kZXRhaWxzLWN1c3RvbS1jbGFzcycpIGJpZERldGFpbEN1c3RvbUNsYXNzID0gJ2JpZC1kZXRhaWxzJztcbiAgQElucHV0KCdhcnRpY2xlLWFsaWdubWVudC1jdXN0b20tY2xhc3MnKSBhcnRpY2xlQWxpZ25tZW50Q3VzdG9tQ2xhc3MgPVxuICAgICdhcnRpY2xlJztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHsgfVxufVxuIl19