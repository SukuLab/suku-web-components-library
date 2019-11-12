/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuLargeBidTagComponent {
    constructor() {
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
    ngOnInit() {
    }
}
SukuLargeBidTagComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-bid-tag-type-two',
                template: "<aside>\r\n  <div class=\"prize\"> <span [style.color]=\"priceFontColor\" [style.font-size.px]=\"priceFontSize\"\r\n      [style.font-weight]=\"priceFontWeight\"> {{(paymentMethod == 'USD') ? '$': ''}}{{productPrice}}</span>\r\n    <sub>{{(paymentMethod != 'USD') ? paymentMethod : ''}} / UNIT</sub>\r\n  </div>\r\n  <ul class=\"bulletPoint\" [style.color]=\"listFontColor\" [style.font-size.px]=\"listFontSize\"\r\n    [style.font-weight]=\"listFontWeight\">\r\n    <li>{{totalPriceLabel}}: {{(paymentMethod == 'USD') ? '$': ''}}{{productTotalPrice}}\r\n      {{(paymentMethod != 'USD') ? paymentMethod : ''}}</li>\r\n    <li>{{quantityLabel}}: {{productQuantity}}</li>\r\n    <li *ngIf=\"minQtyLabel\">{{minQtyLabel}}: {{minimumQuantity}}</li>\r\n  </ul>\r\n</aside>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);aside{width:100%;float:left;background:#353a3e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;padding:17px 30px;margin:0 0 18px}aside:last-child{margin-bottom:0}aside .prize{width:100%;float:left;font-family:Poppins,sans-serif!important;font-size:50px;color:#fff;line-height:1em;margin:0 0 12px}aside .prize sub{font-size:38%;color:rgba(255,255,255,.5);top:-2px}aside ul{width:100%;float:left;font-family:Poppins,sans-serif!important;padding:0;margin:0}aside ul li{width:100%;float:left;color:rgba(255,255,255,.5);letter-spacing:.02em;padding:0 0 4px;margin:0}.bulletPoint li{list-style-type:none}"]
            }] }
];
/** @nocollapse */
SukuLargeBidTagComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtdGFnLXR5cGUtdHdvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJpZC10YWctdHlwZS10d28vc3VrdS1iaWQtdGFnLXR5cGUtdHdvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHdCQUF3QjtJQWdCbkM7UUFmUyxrQkFBYSxHQUFHLE1BQU0sQ0FBQztRQUN2QixtQkFBYyxHQUFHLFNBQVMsQ0FBQztRQUMzQixrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixvQkFBZSxHQUFHLGFBQWEsQ0FBQztRQUNoQyxrQkFBYSxHQUFHLFVBQVUsQ0FBQztRQUMzQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFFcEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsb0JBQWUsR0FBRyxHQUFHLENBQUM7SUFHZixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLDR3QkFBcUQ7O2FBRXREOzs7Ozs0QkFFRSxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7Ozs7SUFiTixpREFBZ0M7O0lBQ2hDLGtEQUFvQzs7SUFDcEMsaURBQTRCOztJQUM1QixnREFBNkI7O0lBQzdCLG1EQUF5Qzs7SUFDekMsaURBQW9DOztJQUNwQywrQ0FBMEI7O0lBQzFCLGdEQUEyQjs7SUFDM0IscURBQWtDOztJQUNsQyxtREFBNkI7O0lBQzdCLG1EQUF5Qjs7SUFDekIsaURBQStCOztJQUMvQixtREFBK0I7O0lBQy9CLGtEQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LWJpZC10YWctdHlwZS10d28nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWJpZC10YWctdHlwZS10d28uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtYmlkLXRhZy10eXBlLXR3by5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1TGFyZ2VCaWRUYWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHByaWNlRm9udFNpemUgPSAnNTBweCc7XHJcbiAgQElucHV0KCkgcHJpY2VGb250Q29sb3IgPSAnI2ZmZmZmZic7XHJcbiAgQElucHV0KCkgbGlzdEZvbnRDb2xvciA9ICcnO1xyXG4gIEBJbnB1dCgpIGxpc3RGb250U2l6ZSA9ICcxNic7XHJcbiAgQElucHV0KCkgdG90YWxQcmljZUxhYmVsID0gJ1RvdGFsIFByaWNlJztcclxuICBASW5wdXQoKSBxdWFudGl0eUxhYmVsID0gJ1F1YW50aXR5JztcclxuICBASW5wdXQoKSBtaW5RdHlMYWJlbCA9ICcnO1xyXG4gIEBJbnB1dCgpIHByb2R1Y3RQcmljZSA9IDUwO1xyXG4gIEBJbnB1dCgpIHByb2R1Y3RUb3RhbFByaWNlID0gJzUwJztcclxuICBASW5wdXQoKSBwcm9kdWN0UXVhbnRpdHkgPSAxO1xyXG4gIEBJbnB1dCgpIG1pbmltdW1RdWFudGl0eTtcclxuICBASW5wdXQoKSBwYXltZW50TWV0aG9kID0gJ1VTRCc7XHJcbiAgQElucHV0KCkgcHJpY2VGb250V2VpZ2h0ID0gMTAwO1xyXG4gIEBJbnB1dCgpIGxpc3RGb250V2VpZ2h0O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==