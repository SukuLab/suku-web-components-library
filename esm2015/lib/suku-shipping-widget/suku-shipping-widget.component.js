/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuShippingWidgetComponent {
    constructor() {
        this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
        this.amountPaid = '../assets/img/paid amount.png';
        this.amountUnPaid = '../assets/img/unpaid.png';
        this.unShippedIcon = '../assets/img/un shipped.png';
        this.shippedIcon = '../assets/img/shipped.png';
        this.msgPaymentStatus = 'Paid';
        this.msgShipmentStatus = 'shipped';
        this.customclass = 'customclass';
        this.customIconclass = 'text-right';
        this.bgColor = '';
        this.imageColSize = ' col-sm-1 flex pt-1 pl-2';
        this.txtcolsize = 'txtcolsize col-sm-4 pl-4 pt-2 mt-1';
        this.txttwocolsize = 'col-sm-2 pt-2 mt-1';
        this.txtthreecolsize = 'col-sm-3 pt-2 mt-1';
        this.titleOne = 'Title One';
        this.titleOneColor = 'black';
        this.titleOneWeight = '600';
        this.titleOneSize = '14';
        this.titleOnecustomclass = '';
        this.contentOne = '$100';
        this.contentOneColor = '#3e3e3e';
        this.contentOneWeight = '500';
        this.contentOneSize = '14';
        this.contentOnecustomclass = '';
        this.contentTwo = 'John Smith';
        this.contentTwoColor = '#3e3e3e';
        this.contentTwoWeight = '500';
        this.contentTwoSize = '14';
        this.contentTwocustomclass = '';
        this.subTitleTwo = 'SOLD BY';
        this.subTitleTwoColor = '#b6b6b6';
        this.subTitleTwoWeight = '500';
        this.subTitleTwoSize = '12';
        this.subTitleTwocustomclass = '';
        this.subTitleThree = 'EXPIRY DATE';
        this.subTitleThreecolor = '#b6b6b6';
        this.subTitleThreeWeight = '500';
        this.subTitleThreeSize = '12';
        this.subTitleThreeClass = '';
        this.contentThree = '28 Nov 2018';
        this.contentThreeColor = '#3e3e3e';
        this.contentThreeWeight = '500';
        this.contentThreeSize = '14';
        this.contentThreecustomclass = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuShippingWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-shipping-widget',
                template: "<div class=\"col p-0\">\r\n  <div class=\"row card-line-bg p-3 m-3 c-pointer\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img [class]=\"customclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\r\n    </div>\r\n    <div class=\"\" *ngIf=\"msgPaymentStatus=='Paid'\">\r\n      <img [class]=\"customIconclass\" src=\"{{amountPaid}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n    </div>\r\n    <div class=\"\" *ngIf=\"msgPaymentStatus=='unPaid'\">\r\n      <img [class]=\"customIconclass\" src=\"{{amountUnPaid}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n    </div>\r\n    <div class=\"\" *ngIf=\"msgShipmentStatus=='shipped'\">\r\n      <img [class]=\"customIconclass\" src=\"{{shippedIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n    </div>\r\n    <div class=\"\" *ngIf=\"msgShipmentStatus=='unShipped'\">\r\n      <img [class]=\"customIconclass\" src=\"{{unShippedIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n    </div>\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\r\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div [class]=\"txttwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\" [style.font-weight]=\"subTitleTwoWeight\"\r\n        [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\" [style.font-weight]=\"contentTwoWeight\"\r\n        [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtthreecolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\" [style.font-weight]=\"subTitleThreeWeight\"\r\n        [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\" [style.font-weight]=\"contentThreeWeight\"\r\n        [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}@media only screen and (max-width:600px){.customclass{width:100px;height:100px}.txtcolsize{width:100%}}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}"]
            }] }
];
/** @nocollapse */
SukuShippingWidgetComponent.ctorParameters = () => [];
SukuShippingWidgetComponent.propDecorators = {
    image: [{ type: Input }],
    amountPaid: [{ type: Input, args: ['paid-icon',] }],
    amountUnPaid: [{ type: Input, args: ['unpaid-icon',] }],
    unShippedIcon: [{ type: Input, args: ['unshipped-icon',] }],
    shippedIcon: [{ type: Input, args: ['shipped-icon',] }],
    msgPaymentStatus: [{ type: Input, args: ['msg-Payment-Status',] }],
    msgShipmentStatus: [{ type: Input, args: ['msg-Shipment-Status',] }],
    customclass: [{ type: Input, args: ['customclass',] }],
    customIconclass: [{ type: Input, args: ['custom-iconclass',] }],
    bgColor: [{ type: Input }],
    interest: [{ type: Input }],
    imageColSize: [{ type: Input }],
    txtcolsize: [{ type: Input }],
    txttwocolsize: [{ type: Input }],
    txtthreecolsize: [{ type: Input }],
    titleOne: [{ type: Input, args: ['title-one',] }],
    titleOneColor: [{ type: Input, args: ['title-one-color',] }],
    titleOneWeight: [{ type: Input, args: ['title-one-weight',] }],
    titleOneSize: [{ type: Input, args: ['title-one-size',] }],
    titleOnecustomclass: [{ type: Input, args: ['title-one-customclass',] }],
    contentOne: [{ type: Input, args: ['content-one',] }],
    contentOneColor: [{ type: Input, args: ['content-one-color',] }],
    contentOneWeight: [{ type: Input, args: ['content-one-weight',] }],
    contentOneSize: [{ type: Input, args: ['content-one-size',] }],
    contentOnecustomclass: [{ type: Input, args: ['content-one-customclass',] }],
    contentTwo: [{ type: Input, args: ['content-two',] }],
    contentTwoColor: [{ type: Input, args: ['content-two-color',] }],
    contentTwoWeight: [{ type: Input, args: ['content-two-weight',] }],
    contentTwoSize: [{ type: Input, args: ['content-two-size',] }],
    contentTwocustomclass: [{ type: Input, args: ['content-two-customclass',] }],
    subTitleTwo: [{ type: Input, args: ['sub-title-two',] }],
    subTitleTwoColor: [{ type: Input, args: ['sub-title-two-color',] }],
    subTitleTwoWeight: [{ type: Input, args: ['sub-title-two-weight',] }],
    subTitleTwoSize: [{ type: Input, args: ['sub-title-two-size',] }],
    subTitleTwocustomclass: [{ type: Input, args: ['sub-title-two-customclass',] }],
    subTitleThree: [{ type: Input, args: ['sub-title-three',] }],
    subTitleThreecolor: [{ type: Input, args: ['sub-title-three-color',] }],
    subTitleThreeWeight: [{ type: Input, args: ['sub-title-three-weight',] }],
    subTitleThreeSize: [{ type: Input, args: ['sub-title-three-size',] }],
    subTitleThreeClass: [{ type: Input, args: ['sub-title-threeclass',] }],
    contentThree: [{ type: Input, args: ['content-three',] }],
    contentThreeColor: [{ type: Input, args: ['content-three-color',] }],
    contentThreeWeight: [{ type: Input, args: ['content-three-widget',] }],
    contentThreeSize: [{ type: Input, args: ['content-three-size',] }],
    contentThreecustomclass: [{ type: Input, args: ['content-three-customclass',] }]
};
if (false) {
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.image;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.amountPaid;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.amountUnPaid;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.unShippedIcon;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.shippedIcon;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.msgPaymentStatus;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.msgShipmentStatus;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.customclass;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.customIconclass;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.bgColor;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.interest;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.imageColSize;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.txtcolsize;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.txttwocolsize;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.txtthreecolsize;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.titleOne;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.titleOneColor;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.titleOneWeight;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.titleOneSize;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.titleOnecustomclass;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.contentOne;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.contentOneColor;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.contentOneWeight;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.contentOneSize;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.contentOnecustomclass;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.contentTwo;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.contentTwoColor;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.contentTwoWeight;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.contentTwoSize;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.contentTwocustomclass;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.subTitleTwo;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.subTitleTwoColor;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.subTitleTwoWeight;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.subTitleTwoSize;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.subTitleTwocustomclass;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.subTitleThree;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.subTitleThreecolor;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.subTitleThreeWeight;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.subTitleThreeSize;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.subTitleThreeClass;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.contentThree;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.contentThreeColor;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.contentThreeWeight;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.contentThreeSize;
    /** @type {?} */
    SukuShippingWidgetComponent.prototype.contentThreecustomclass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zaGlwcGluZy13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc2hpcHBpbmctd2lkZ2V0L3N1a3Utc2hpcHBpbmctd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLDJCQUEyQjtJQWtEdEM7UUFqRFMsVUFBSyxHQUFHLGdKQUFnSixDQUFDO1FBQy9JLGVBQVUsR0FBRywrQkFBK0IsQ0FBQztRQUMxQyxpQkFBWSxHQUFHLDBCQUEwQixDQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsOEJBQThCLENBQUM7UUFDakQsZ0JBQVcsR0FBRywyQkFBMkIsQ0FBQztRQUNyQyxxQkFBZ0IsR0FBRyxNQUFNLENBQUM7UUFDekIsc0JBQWlCLEdBQUcsU0FBUyxDQUFDO1FBQ3RDLGdCQUFXLEdBQUcsYUFBYSxDQUFDO1FBQ3ZCLG9CQUFlLEdBQUcsWUFBWSxDQUFDO1FBQ2pELFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHYixpQkFBWSxHQUFHLDBCQUEwQixDQUFDO1FBQzFDLGVBQVUsR0FBRyxvQ0FBb0MsQ0FBQztRQUNsRCxrQkFBYSxHQUFHLG9CQUFvQixDQUFDO1FBQ3JDLG9CQUFlLEdBQUcsb0JBQW9CLENBQUM7UUFDNUIsYUFBUSxHQUFHLFdBQVcsQ0FBQztRQUNqQixrQkFBYSxHQUFHLE9BQU8sQ0FBQztRQUN2QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN4QixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNiLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUNwQyxlQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ2Qsb0JBQWUsR0FBRyxTQUFTLENBQUM7UUFDM0IscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLG1CQUFjLEdBQUcs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Qjs7SUFFdEIsK0NBQWtCOztJQUNsQixtREFBbUQ7O0lBQ25ELGlEQUEyRDs7SUFDM0Qsb0RBQThDOztJQUM5QyxzREFBZ0Q7O0lBQ2hELCtDQUEyQzs7SUFDM0Msb0RBQWtEOztJQUNsRCxxREFBa0Q7O0lBQ2pELG1EQUE2Qzs7SUFDN0MsMERBQXlEOztJQUMxRCxpREFBMEM7O0lBQzFDLHNEQUF3RDs7SUFDeEQsdURBQXNEOztJQUN0RCxxREFBaUQ7O0lBQ2hELDREQUE2RDs7SUFFOUQsaURBQWdEOztJQUNoRCxzREFBd0Q7O0lBQ3hELHVEQUFzRDs7SUFDdEQscURBQWlEOztJQUNoRCw0REFBNkQ7O0lBQzlELGtEQUFnRDs7SUFDaEQsdURBQTJEOztJQUMzRCx3REFBeUQ7O0lBQ3pELHNEQUFvRDs7SUFDbkQsNkRBQWdFOztJQUVqRSxvREFBd0Q7O0lBQ3hELHlEQUErRDs7SUFDL0QsMERBQTZEOztJQUM3RCx3REFBd0Q7O0lBQ3ZELHlEQUF1RDs7SUFDeEQsbURBQXFEOztJQUNyRCx3REFBNEQ7O0lBQzVELHlEQUEwRDs7SUFDMUQsdURBQXFEOztJQUNwRCw4REFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1zaGlwcGluZy13aWRnZXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXNoaXBwaW5nLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1zaGlwcGluZy13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdVNoaXBwaW5nV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpbWFnZSA9ICdodHRwczovL2VuY3J5cHRlZC10Ym4xLmdzdGF0aWMuY29tL3Nob3BwaW5nP3E9dGJuOkFOZDlHY1NUcXo2NEEyWGo1NGY1djQ0ckQ5dk5VcXlUWHo1YzByN3pUbGZoMThpZG95VVlHSDhoRjUxcFA2X2Vmb2RuYWpDdVlWQjRva2NNblQwJnVzcXA9Q0FjJztcclxuXHRASW5wdXQoJ3BhaWQtaWNvbicpIGFtb3VudFBhaWQgPSAnLi4vYXNzZXRzL2ltZy9wYWlkIGFtb3VudC5wbmcnO1xyXG4gIEBJbnB1dCgndW5wYWlkLWljb24nKSBhbW91bnRVblBhaWQgPSAnLi4vYXNzZXRzL2ltZy91bnBhaWQucG5nJztcclxuICBASW5wdXQoJ3Vuc2hpcHBlZC1pY29uJykgdW5TaGlwcGVkSWNvbiA9ICcuLi9hc3NldHMvaW1nL3VuIHNoaXBwZWQucG5nJztcclxuICBASW5wdXQoJ3NoaXBwZWQtaWNvbicpIHNoaXBwZWRJY29uID0gJy4uL2Fzc2V0cy9pbWcvc2hpcHBlZC5wbmcnO1xyXG5cdEBJbnB1dCgnbXNnLVBheW1lbnQtU3RhdHVzJykgbXNnUGF5bWVudFN0YXR1cyA9ICdQYWlkJztcclxuXHRASW5wdXQoJ21zZy1TaGlwbWVudC1TdGF0dXMnKSBtc2dTaGlwbWVudFN0YXR1cyA9ICdzaGlwcGVkJztcclxuXHRASW5wdXQoJ2N1c3RvbWNsYXNzJykgY3VzdG9tY2xhc3MgPSAnY3VzdG9tY2xhc3MnO1xyXG5cdEBJbnB1dCgnY3VzdG9tLWljb25jbGFzcycpIGN1c3RvbUljb25jbGFzcyA9ICd0ZXh0LXJpZ2h0JztcclxuXHRASW5wdXQoKSBiZ0NvbG9yID0gJyc7XHJcblxyXG5cdEBJbnB1dCgpIGludGVyZXN0O1xyXG5cdEBJbnB1dCgpIGltYWdlQ29sU2l6ZSA9ICcgY29sLXNtLTEgZmxleCBwdC0xIHBsLTInO1xyXG5cdEBJbnB1dCgpIHR4dGNvbHNpemUgPSAndHh0Y29sc2l6ZSBjb2wtc20tNCBwbC00IHB0LTIgbXQtMSc7XHJcblx0QElucHV0KCkgdHh0dHdvY29sc2l6ZSA9ICdjb2wtc20tMiBwdC0yIG10LTEnO1xyXG5cdEBJbnB1dCgpIHR4dHRocmVlY29sc2l6ZSA9ICdjb2wtc20tMyBwdC0yIG10LTEnO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lJykgdGl0bGVPbmUgPSAnVGl0bGUgT25lJztcclxuXHRASW5wdXQoJ3RpdGxlLW9uZS1jb2xvcicpIHRpdGxlT25lQ29sb3IgPSAnYmxhY2snO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lLXdlaWdodCcpIHRpdGxlT25lV2VpZ2h0ID0gJzYwMCc7XHJcbiAgQElucHV0KCd0aXRsZS1vbmUtc2l6ZScpIHRpdGxlT25lU2l6ZSA9ICcxNCc7XHJcbiAgQElucHV0KCd0aXRsZS1vbmUtY3VzdG9tY2xhc3MnKSB0aXRsZU9uZWN1c3RvbWNsYXNzID0gJyc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZScpIGNvbnRlbnRPbmUgPSAnJDEwMCc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS1jb2xvcicpIGNvbnRlbnRPbmVDb2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLXdlaWdodCcpIGNvbnRlbnRPbmVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLXNpemUnKSBjb250ZW50T25lU2l6ZSA9ICcxNCc7XHJcbiAgQElucHV0KCdjb250ZW50LW9uZS1jdXN0b21jbGFzcycpIGNvbnRlbnRPbmVjdXN0b21jbGFzcyA9ICcnO1xyXG5cclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvJykgY29udGVudFR3byA9ICdKb2huIFNtaXRoJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLWNvbG9yJykgY29udGVudFR3b0NvbG9yID0gJyMzZTNlM2UnO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28td2VpZ2h0JykgY29udGVudFR3b1dlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28tc2l6ZScpIGNvbnRlbnRUd29TaXplID0gJzE0JztcclxuICBASW5wdXQoJ2NvbnRlbnQtdHdvLWN1c3RvbWNsYXNzJykgY29udGVudFR3b2N1c3RvbWNsYXNzID0gJyc7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvJykgc3ViVGl0bGVUd28gPSAnU09MRCBCWSc7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLWNvbG9yJykgc3ViVGl0bGVUd29Db2xvciA9ICcjYjZiNmI2JztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28td2VpZ2h0Jykgc3ViVGl0bGVUd29XZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28tc2l6ZScpIHN1YlRpdGxlVHdvU2l6ZSA9ICcxMic7XHJcbiAgQElucHV0KCdzdWItdGl0bGUtdHdvLWN1c3RvbWNsYXNzJykgc3ViVGl0bGVUd29jdXN0b21jbGFzcyA9ICcnO1xyXG5cclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZScpIHN1YlRpdGxlVGhyZWUgPSAnRVhQSVJZIERBVEUnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLWNvbG9yJykgc3ViVGl0bGVUaHJlZWNvbG9yID0gJyNiNmI2YjYnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLXdlaWdodCcpIHN1YlRpdGxlVGhyZWVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZS1zaXplJykgc3ViVGl0bGVUaHJlZVNpemUgPSAnMTInO1xyXG4gIEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlY2xhc3MnKSBzdWJUaXRsZVRocmVlQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUnKSBjb250ZW50VGhyZWUgPSAnMjggTm92IDIwMTgnO1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZS1jb2xvcicpIGNvbnRlbnRUaHJlZUNvbG9yID0gJyMzZTNlM2UnO1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZS13aWRnZXQnKSBjb250ZW50VGhyZWVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtc2l6ZScpIGNvbnRlbnRUaHJlZVNpemUgPSAnMTQnO1xyXG4gIEBJbnB1dCgnY29udGVudC10aHJlZS1jdXN0b21jbGFzcycpIGNvbnRlbnRUaHJlZWN1c3RvbWNsYXNzID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19