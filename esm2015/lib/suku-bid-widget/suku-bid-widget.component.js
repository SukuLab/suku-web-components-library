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
                template: "<div [class]=\"customClass\">\r\n    <div class=\"{{articleAlignmentCustomClass}} selected\">\r\n      <div class=\"title-txt\" [style.color]=\"titleFontColor\" [style.font-size.rem]=\"titleFontSize\"\r\n        [style.font-weight]=\"titleFontWeight\">{{titleText}}</div>\r\n      <aside [style.backgroundColor]=\"asideBgColor\">\r\n        <div class=\"prize\"> <span [style.color]=\"priceFontColor\" [style.font-size.rem]=\"priceFontSize\"\r\n            [style.font-weight]=\"priceFontWeight\"> {{(paymentMethod == 'USD') ? '$': ''}}{{productPrice}}</span>\r\n          <sub>{{(paymentMethod != 'USD') ? paymentMethod : ''}} / UNIT</sub>\r\n        </div>\r\n        <ul class=\"bulletPoint\" [style.color]=\"listFontColor\" [style.font-size.rem]=\"listFontSize\"\r\n          [style.font-weight]=\"listFontWeight\">\r\n          <li>{{totalPriceLabel}}: {{(paymentMethod == 'USD') ? '$': ''}}{{productTotalPrice}}\r\n            {{(paymentMethod != 'USD') ? paymentMethod : ''}}</li>\r\n          <li>{{quantityLabel}}: {{productQuantity}}</li>\r\n          <li *ngIf=\"minQtyLabel\">{{minQtyLabel}}: {{minimumQuantity}}</li>\r\n        </ul>\r\n      </aside>\r\n      <div class=\"list\">\r\n        <ul class=\"pl-4 {{productPaymentCustomClass}}\">\r\n          <li>\r\n            <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\"\r\n              [style.font-size.rem]=\"bidTitleFontSize\">{{paymentMethodLabel}}:</span>\r\n            <span class=\"{{bidDetailCustomClass}} ml-2\" [style.font-weight]=\"bidDetailFontWeight\" [style.color]=\"bidDetailFontColor\"\r\n              [style.font-size.rem]=\"bidDetailFontSize\"> {{paymentMethod}}</span>\r\n          </li>\r\n          <li>\r\n            <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\"\r\n              [style.font-size.rem]=\"bidTitleFontSize\">{{paymentTermsLabel}}:</span>\r\n            <span class=\"{{bidDetailCustomClass}} ml-2\" [style.font-weight]=\"bidDetailFontWeight\" [style.color]=\"bidDetailFontColor\"\r\n              [style.font-size.rem]=\"bidDetailFontSize\"> {{paymentTerms}}</span>\r\n          </li>\r\n          <li>\r\n            <span class=\"bid-title\" [style.color]=\"bidTitleFontColor\" [style.font-weight]=\"bidTitleFontWeight\"\r\n              [style.font-size.rem]=\"bidTitleFontSize\">{{deliveryTermsLabel}}:</span>\r\n            <span class=\"{{bidDetailCustomClass}} ml-2\" [style.font-weight]=\"bidDetailFontWeight\" [style.color]=\"bidDetailFontColor\"\r\n              [style.font-size.rem]=\"bidDetailFontSize\"> {{deliveryTerms}} {{ deliveryTerms > 1 ? '\r\n                days' : ' day'}}</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.article{float:left}.article .title-txt{font-size:14px!important;width:100%;float:left;color:var(--suku-text-heading);padding:0 0 12px}.article aside{width:100%;float:left;background:var(--suku-bg-ternary);border-left:5px solid #0c0a0a;border-radius:var(--suku-primary-border-radius);padding:17px 30px;margin:0 0 18px}.article aside:last-child{margin-bottom:0}.article aside .prize{width:100%;float:left;font-family:var(--suku-primary-font);font-size:50px;color:var(--suku-text-label-two);line-height:1em;margin:0 0 12px}.article aside .prize sub{font-size:38%;color:rgba(255,255,255,.5);top:-2px}.article aside ul{width:100%;float:left;font-family:var(--suku-primary-font);padding:0;margin:0}.article aside ul li{width:100%;float:left;color:rgba(255,255,255,.5);letter-spacing:.02em;padding:0 0 4px;margin:0}.article aside ul li:last-child{padding-bottom:0}.article aside ul li:before{display:none}.article .list{width:100%;float:left;border-bottom:1px solid rgba(0,0,0,.1);padding:0 0 20px}.article .list ul li{color:var(--suku-filter-label-selected)}.article.selected aside{border-left-color:var(--suku-primary-border-color)}.article-out{width:100%;float:left;margin:0 0 0 35px}@media (max-width:991px){.article{width:44%;margin:0 3% 50px}.article aside{padding:25px;margin:0 0 18px}.article-out{width:106%;margin:0 -3% -50px;height:100%}}@media (max-width:767px){.article{width:100%;margin:0 0 35px}.article aside{border-radius:0 25px 0 0;padding:20px}.article aside .prize{font-size:40px}.article aside ul{width:100%;float:left;padding:0;margin:0}.article .list{padding:0 0 20px}.article-out{width:100%;margin:0 0 -35px;height:100%}}.bulletPoint li{list-style-type:none}.productPayment{font-family:var(--suku-secondary-font);font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:var(--suku-text-link)}.bid-title{font-family:var(--suku-secondary-font);font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:var(--suku-text-label-one);text-transform:uppercase}.bid-details{font-family:var(--suku-secondary-font);font-size:14px;font-weight:50px;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;color:var(--suku-text-link)}ul{list-style:none}ul li::before{content:\"\\2022\";color:#dedede;font-weight:700;font-size:16px;display:inline-block;width:1em}.default{width:350px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJpZC13aWRnZXQvc3VrdS1iaWQtd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHlCQUF5QjtJQXNDcEM7UUFyQ3lCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ1osc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzVCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBRXZCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ1osdUJBQWtCLEdBQUcsZ0JBQWdCLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcsb0JBQW9CLENBQUM7UUFDeEMsdUJBQWtCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsb0JBQWUsR0FBRyxhQUFhLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxVQUFVLENBQUM7UUFDN0IsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDbkIsY0FBUyxHQUFHLGNBQWMsQ0FBQztRQUN2QyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ0QsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDckIsa0JBQWEsR0FBRyxNQUFNLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxTQUFTLENBQUM7UUFDNUIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDcEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDZixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDeEIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN6QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDMUIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDZix1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDdkIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQy9CLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBRVYsOEJBQXlCLEdBQzlELGdCQUFnQixDQUFDO1FBQ2dCLHlCQUFvQixHQUFHLGFBQWEsQ0FBQztRQUMvQixnQ0FBMkIsR0FDbEUsU0FBUyxDQUFDO0lBQ0ksQ0FBQzs7OztJQUVqQixRQUFRLEtBQUssQ0FBQzs7O1lBN0NmLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixnd0ZBQStDOzthQUVoRDs7Ozs7NEJBRUUsS0FBSyxTQUFDLGdCQUFnQjsyQkFDdEIsS0FBSyxTQUFDLGVBQWU7Z0NBQ3JCLEtBQUssU0FBQyxxQkFBcUI7OEJBQzNCLEtBQUssU0FBQyxrQkFBa0I7OEJBQ3hCLEtBQUssU0FBQyxrQkFBa0I7MkJBQ3hCLEtBQUssU0FBQyxlQUFlOzRCQUNyQixLQUFLLFNBQUMsZ0JBQWdCO2lDQUN0QixLQUFLLFNBQUMsc0JBQXNCO2dDQUM1QixLQUFLLFNBQUMscUJBQXFCO2lDQUMzQixLQUFLLFNBQUMsc0JBQXNCOzhCQUM1QixLQUFLLFNBQUMsbUJBQW1COzRCQUN6QixLQUFLLFNBQUMsZ0JBQWdCOzBCQUN0QixLQUFLLFNBQUMsY0FBYzt3QkFDcEIsS0FBSyxTQUFDLFlBQVk7d0JBQ2xCLEtBQUs7MEJBQ0wsS0FBSyxTQUFDLGNBQWM7NEJBQ3BCLEtBQUssU0FBQyxpQkFBaUI7NkJBQ3ZCLEtBQUssU0FBQyxrQkFBa0I7NEJBQ3hCLEtBQUssU0FBQyxpQkFBaUI7MkJBQ3ZCLEtBQUssU0FBQyxnQkFBZ0I7Z0NBQ3RCLEtBQUssU0FBQyxzQkFBc0I7K0JBQzVCLEtBQUssU0FBQyxxQkFBcUI7aUNBQzNCLEtBQUssU0FBQyx1QkFBdUI7Z0NBQzdCLEtBQUssU0FBQyxzQkFBc0I7OEJBQzVCLEtBQUssU0FBQyxtQkFBbUI7NkJBQ3pCLEtBQUssU0FBQyxrQkFBa0I7aUNBQ3hCLEtBQUssU0FBQyx1QkFBdUI7a0NBQzdCLEtBQUssU0FBQyx3QkFBd0I7NkJBQzlCLEtBQUssU0FBQyxrQkFBa0I7NEJBQ3hCLEtBQUssU0FBQyxpQkFBaUI7OEJBQ3ZCLEtBQUssU0FBQyxtQkFBbUI7MkJBQ3pCLEtBQUssU0FBQyxnQkFBZ0I7d0NBQ3RCLEtBQUssU0FBQyw4QkFBOEI7bUNBRXBDLEtBQUssU0FBQywwQkFBMEI7MENBQ2hDLEtBQUssU0FBQyxnQ0FBZ0M7Ozs7SUFuQ3ZDLGtEQUErQzs7SUFDL0MsaURBQTBDOztJQUMxQyxzREFBdUQ7O0lBQ3ZELG9EQUErQzs7SUFDL0Msb0RBQTJDOztJQUMzQyxpREFBeUM7O0lBQ3pDLGtEQUEyQzs7SUFDM0MsdURBQXFFOztJQUNyRSxzREFBdUU7O0lBQ3ZFLHVEQUFxRTs7SUFDckUsb0RBQTREOztJQUM1RCxrREFBb0Q7O0lBQ3BELGdEQUF3Qzs7SUFDeEMsOENBQWdEOztJQUNoRCw4Q0FBd0I7O0lBQ3hCLGdEQUErQzs7SUFDL0Msa0RBQWlEOztJQUNqRCxtREFBc0Q7O0lBQ3RELGtEQUE2Qzs7SUFDN0MsaURBQThDOztJQUM5QyxzREFBc0Q7O0lBQ3RELHFEQUFvRDs7SUFDcEQsdURBQXdEOztJQUN4RCxzREFBc0Q7O0lBQ3RELG9EQUFpRDs7SUFDakQsbURBQStDOztJQUMvQyx1REFBd0Q7O0lBQ3hELHdEQUEwRDs7SUFDMUQsbURBQStDOztJQUMvQyxrREFBNkM7O0lBQzdDLG9EQUFpRDs7SUFDakQsaURBQXNDOztJQUN0Qyw4REFDbUI7O0lBQ25CLHlEQUF3RTs7SUFDeEUsZ0VBQ1kiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1iaWQtd2lkZ2V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1iaWQtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWJpZC13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUJpZFdpZGdldFRhZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCdwYXltZW50LW1ldGhvZCcpIHBheW1lbnRNZXRob2QgPSAnVVNEJztcclxuICBASW5wdXQoJ3Byb2R1Y3QtcHJpY2UnKSBwcm9kdWN0UHJpY2UgPSA1MDtcclxuICBASW5wdXQoJ3Byb2R1Y3QtdG90YWwtcHJpY2UnKSBwcm9kdWN0VG90YWxQcmljZSA9ICc1MCc7XHJcbiAgQElucHV0KCdwcm9kdWN0LXF1YW50aXR5JykgcHJvZHVjdFF1YW50aXR5ID0gMTtcclxuICBASW5wdXQoJ21pbmltdW0tcXVhbnRpdHknKSBtaW5pbXVtUXVhbnRpdHk7XHJcbiAgQElucHV0KCdwYXltZW50LXRlcm1zJykgcGF5bWVudFRlcm1zID0gMTtcclxuICBASW5wdXQoJ2RlbGl2ZXJ5LXRlcm1zJykgZGVsaXZlcnlUZXJtcyA9IDE7XHJcbiAgQElucHV0KCdwYXltZW50LW1ldGhvZC1sYWJlbCcpIHBheW1lbnRNZXRob2RMYWJlbCA9ICdQYXltZW50IG1ldGhvZCc7XHJcbiAgQElucHV0KCdwYXltZW50LXRlcm1zLWxhYmVsJykgcGF5bWVudFRlcm1zTGFiZWwgPSAnUGF5bWVudCB0aW1lIGZyYW1lJztcclxuICBASW5wdXQoJ2RlbGl2ZXJ5LXRlcm1zLWxhYmVsJykgZGVsaXZlcnlUZXJtc0xhYmVsID0gJ0RlbGl2ZXJ5IHRlcm1zJztcclxuICBASW5wdXQoJ3RvdGFsLXByaWNlLWxhYmVsJykgdG90YWxQcmljZUxhYmVsID0gJ1RvdGFsIFByaWNlJztcclxuICBASW5wdXQoJ3F1YW50aXR5LWxhYmVsJykgcXVhbnRpdHlMYWJlbCA9ICdRdWFudGl0eSc7XHJcbiAgQElucHV0KCdtaW4tcXR5bGFiZWwnKSBtaW5RdHlMYWJlbCA9ICcnO1xyXG4gIEBJbnB1dCgndGl0bGUtdGV4dCcpIHRpdGxlVGV4dCA9ICdPcmlnaW5hbCBBc2snO1xyXG4gIEBJbnB1dCgpIGRvY3VtZW50cyA9IFtdO1xyXG4gIEBJbnB1dCgnY3VzdG9tLWNsYXNzJykgY3VzdG9tQ2xhc3MgPSAnY29sIHAtMCc7XHJcbiAgQElucHV0KCdwcmljZS1mb250LXNpemUnKSBwcmljZUZvbnRTaXplID0gJzUwcHgnO1xyXG4gIEBJbnB1dCgncHJpY2UtZm9udC1jb2xvcicpIHByaWNlRm9udENvbG9yID0gJyNmZmZmZmYnO1xyXG4gIEBJbnB1dCgnbGlzdC1mb250LWNvbG9yJykgbGlzdEZvbnRDb2xvciA9ICcnO1xyXG4gIEBJbnB1dCgnbGlzdC1mb250LXNpemUnKSBsaXN0Rm9udFNpemUgPSAnMS41JztcclxuICBASW5wdXQoJ2JpZC10aXRsZS1mb250LWNvbG9yJykgYmlkVGl0bGVGb250Q29sb3IgPSAnJztcclxuICBASW5wdXQoJ2JpZC10aXRsZS1mb250LXNpemUnKSBiaWRUaXRsZUZvbnRTaXplID0gJyc7XHJcbiAgQElucHV0KCdiaWQtZGV0YWlsLWZvbnQtY29sb3InKSBiaWREZXRhaWxGb250Q29sb3IgPSAnJztcclxuICBASW5wdXQoJ2JpZC1kZXRhaWwtZm9udC1zaXplJykgYmlkRGV0YWlsRm9udFNpemUgPSAnJztcclxuICBASW5wdXQoJ3ByaWNlLWZvbnQtd2VpZ2h0JykgcHJpY2VGb250V2VpZ2h0ID0gJyc7XHJcbiAgQElucHV0KCdsaXN0LWZvbnQtd2VpZ2h0JykgbGlzdEZvbnRXZWlnaHQgPSAnJztcclxuICBASW5wdXQoJ2JpZC10aXRsZS1mb250LXdlaWdodCcpIGJpZFRpdGxlRm9udFdlaWdodCA9ICcnO1xyXG4gIEBJbnB1dCgnYmlkLWRldGFpbC1mb250LXdlaWdodCcpIGJpZERldGFpbEZvbnRXZWlnaHQgPSAnJztcclxuICBASW5wdXQoJ3RpdGxlLWZvbnQtY29sb3InKSB0aXRsZUZvbnRDb2xvciA9ICcnO1xyXG4gIEBJbnB1dCgndGl0bGUtZm9udC1zaXplJykgdGl0bGVGb250U2l6ZSA9ICcnO1xyXG4gIEBJbnB1dCgndGl0bGUtZm9udC13ZWlnaHQnKSB0aXRsZUZvbnRXZWlnaHQgPSAnJztcclxuICBASW5wdXQoJ2FzaWRlLWJnLUNvbG9yJykgYXNpZGVCZ0NvbG9yO1xyXG4gIEBJbnB1dCgncHJvZHVjdC1wYXltZW50LWN1c3RvbS1jbGFzcycpIHByb2R1Y3RQYXltZW50Q3VzdG9tQ2xhc3MgPVxyXG4gICAgJ3Byb2R1Y3RQYXltZW50JztcclxuICBASW5wdXQoJ2JpZC1kZXRhaWxzLWN1c3RvbS1jbGFzcycpIGJpZERldGFpbEN1c3RvbUNsYXNzID0gJ2JpZC1kZXRhaWxzJztcclxuICBASW5wdXQoJ2FydGljbGUtYWxpZ25tZW50LWN1c3RvbS1jbGFzcycpIGFydGljbGVBbGlnbm1lbnRDdXN0b21DbGFzcyA9XHJcbiAgICAnYXJ0aWNsZSc7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxufVxyXG4iXX0=