/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-bid-tag-type-two/suku-bid-tag-type-two.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuLargeBidTagComponent = /** @class */ (function () {
    function SukuLargeBidTagComponent() {
        this.priceFontSize = '50px';
        this.priceFontColor = '#ffffff';
        this.listFontColor = '';
        this.listFontSize = '16';
        this.totalPriceLabel = 'Total Price';
        this.quantityLabel = 'Quantity';
        this.minQtyLabel = '';
        this.productPrice = 50;
        this.productTotalPrice = '50';
        this.productQuantity = 1;
        this.paymentMethod = 'USD';
        this.priceFontWeight = 100;
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
                    template: "<aside>\n  <div class=\"prize\"> <span [style.color]=\"priceFontColor\" [style.font-size.px]=\"priceFontSize\"\n      [style.font-weight]=\"priceFontWeight\"> {{(paymentMethod == 'USD') ? '$': ''}}{{productPrice}}</span>\n    <sub>{{(paymentMethod != 'USD') ? paymentMethod : ''}} / UNIT</sub>\n  </div>\n  <ul class=\"bulletPoint\" [style.color]=\"listFontColor\" [style.font-size.px]=\"listFontSize\"\n    [style.font-weight]=\"listFontWeight\">\n    <li>{{totalPriceLabel}}: {{(paymentMethod == 'USD') ? '$': ''}}{{productTotalPrice}}\n      {{(paymentMethod != 'USD') ? paymentMethod : ''}}</li>\n    <li>{{quantityLabel}}: {{productQuantity}}</li>\n    <li *ngIf=\"minQtyLabel\">{{minQtyLabel}}: {{minimumQuantity}}</li>\n  </ul>\n</aside>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);aside{width:100%;float:left;background:#353a3e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:17px 30px;margin:0 0 18px}aside:last-child{margin-bottom:0}aside .prize{width:100%;float:left;font-family:Poppins,sans-serif!important;font-size:50px;color:#fff;line-height:1em;margin:0 0 12px}aside .prize sub{font-size:38%;color:rgba(255,255,255,.5);top:-2px}aside ul{width:100%;float:left;font-family:Poppins,sans-serif!important;padding:0;margin:0}aside ul li{width:100%;float:left;color:rgba(255,255,255,.5);letter-spacing:.02em;padding:0 0 4px;margin:0}.bulletPoint li{list-style-type:none}"]
                }] }
    ];
    /** @nocollapse */
    SukuLargeBidTagComponent.ctorParameters = function () { return []; };
    SukuLargeBidTagComponent.propDecorators = {
        priceFontSize: [{ type: Input }],
        priceFontColor: [{ type: Input }],
        listFontColor: [{ type: Input }],
        listFontSize: [{ type: Input }],
        totalPriceLabel: [{ type: Input }],
        quantityLabel: [{ type: Input }],
        minQtyLabel: [{ type: Input }],
        productPrice: [{ type: Input }],
        productTotalPrice: [{ type: Input }],
        productQuantity: [{ type: Input }],
        minimumQuantity: [{ type: Input }],
        paymentMethod: [{ type: Input }],
        priceFontWeight: [{ type: Input }],
        listFontWeight: [{ type: Input }]
    };
    return SukuLargeBidTagComponent;
}());
export { SukuLargeBidTagComponent };
if (false) {
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.priceFontSize;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.priceFontColor;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.listFontColor;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.listFontSize;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.totalPriceLabel;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.quantityLabel;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.minQtyLabel;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.productPrice;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.productTotalPrice;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.productQuantity;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.minimumQuantity;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.paymentMethod;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.priceFontWeight;
    /** @type {?} */
    SukuLargeBidTagComponent.prototype.listFontWeight;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtdGFnLXR5cGUtdHdvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJpZC10YWctdHlwZS10d28vc3VrdS1iaWQtdGFnLXR5cGUtdHdvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBcUJFO1FBZlMsa0JBQWEsR0FBRyxNQUFNLENBQUM7UUFDdkIsbUJBQWMsR0FBRyxTQUFTLENBQUM7UUFDM0Isa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsb0JBQWUsR0FBRyxhQUFhLENBQUM7UUFDaEMsa0JBQWEsR0FBRyxVQUFVLENBQUM7UUFDM0IsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsR0FBRyxDQUFDO0lBR2YsQ0FBQzs7OztJQUVqQiwyQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLG92QkFBcUQ7O2lCQUV0RDs7Ozs7Z0NBRUUsS0FBSztpQ0FDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSztrQ0FDTCxLQUFLO2dDQUNMLEtBQUs7OEJBQ0wsS0FBSzsrQkFDTCxLQUFLO29DQUNMLEtBQUs7a0NBQ0wsS0FBSztrQ0FDTCxLQUFLO2dDQUNMLEtBQUs7a0NBQ0wsS0FBSztpQ0FDTCxLQUFLOztJQU9SLCtCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FyQlksd0JBQXdCOzs7SUFDbkMsaURBQWdDOztJQUNoQyxrREFBb0M7O0lBQ3BDLGlEQUE0Qjs7SUFDNUIsZ0RBQTZCOztJQUM3QixtREFBeUM7O0lBQ3pDLGlEQUFvQzs7SUFDcEMsK0NBQTBCOztJQUMxQixnREFBMkI7O0lBQzNCLHFEQUFrQzs7SUFDbEMsbURBQTZCOztJQUM3QixtREFBeUI7O0lBQ3pCLGlEQUErQjs7SUFDL0IsbURBQStCOztJQUMvQixrREFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1iaWQtdGFnLXR5cGUtdHdvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtYmlkLXRhZy10eXBlLXR3by5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtYmlkLXRhZy10eXBlLXR3by5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VMYXJnZUJpZFRhZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHByaWNlRm9udFNpemUgPSAnNTBweCc7XG4gIEBJbnB1dCgpIHByaWNlRm9udENvbG9yID0gJyNmZmZmZmYnO1xuICBASW5wdXQoKSBsaXN0Rm9udENvbG9yID0gJyc7XG4gIEBJbnB1dCgpIGxpc3RGb250U2l6ZSA9ICcxNic7XG4gIEBJbnB1dCgpIHRvdGFsUHJpY2VMYWJlbCA9ICdUb3RhbCBQcmljZSc7XG4gIEBJbnB1dCgpIHF1YW50aXR5TGFiZWwgPSAnUXVhbnRpdHknO1xuICBASW5wdXQoKSBtaW5RdHlMYWJlbCA9ICcnO1xuICBASW5wdXQoKSBwcm9kdWN0UHJpY2UgPSA1MDtcbiAgQElucHV0KCkgcHJvZHVjdFRvdGFsUHJpY2UgPSAnNTAnO1xuICBASW5wdXQoKSBwcm9kdWN0UXVhbnRpdHkgPSAxO1xuICBASW5wdXQoKSBtaW5pbXVtUXVhbnRpdHk7XG4gIEBJbnB1dCgpIHBheW1lbnRNZXRob2QgPSAnVVNEJztcbiAgQElucHV0KCkgcHJpY2VGb250V2VpZ2h0ID0gMTAwO1xuICBASW5wdXQoKSBsaXN0Rm9udFdlaWdodDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==