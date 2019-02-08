/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuShippingWidgetComponent = /** @class */ (function () {
    function SukuShippingWidgetComponent() {
        this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
        this.amountPaid = '../assets/img/paid amount.png';
        this.amountUnPaid = '../assets/img/unpaid.png';
        this.unShippedIcon = '../assets/img/un shipped.png';
        this.shippedIcon = '../assets/img/shipped.png';
        this.msgPaymentStatus = 'Paid';
        this.msgShipmentStatus = 'shipped';
        this.customclass = 'customclass imgsize';
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
    SukuShippingWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuShippingWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-shipping-widget',
                    template: "<div class=\"col p-0\">\r\n  <div class=\"row card-line-bg p-3 m-3 c-pointer center\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img [class]=\"customclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\r\n    </div>\r\n      <div *ngIf=\"msgPaymentStatus=='Paid'\" class=\"padlf\">\r\n        <img [class]=\"customIconclass\" src=\"{{amountPaid}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n      </div>\r\n      <div *ngIf=\"msgPaymentStatus=='unPaid'\" class=\"padlf\">\r\n        <img [class]=\"customIconclass\" src=\"{{amountUnPaid}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n      </div>\r\n      <div *ngIf=\"msgShipmentStatus=='shipped'\">\r\n        <img [class]=\"customIconclass\" src=\"{{shippedIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n      </div>\r\n      <div *ngIf=\"msgShipmentStatus=='unShipped'\">\r\n        <img [class]=\"customIconclass\" src=\"{{unShippedIcon}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n      </div>\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\r\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div [class]=\"txttwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\" [style.font-weight]=\"subTitleTwoWeight\"\r\n        [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\" [style.font-weight]=\"contentTwoWeight\"\r\n        [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtthreecolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\" [style.font-weight]=\"subTitleThreeWeight\"\r\n        [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\" [style.font-weight]=\"contentThreeWeight\"\r\n        [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: ["h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}@media only screen and (max-width:500px){.center{text-align:center}.imgsize{height:100px;width:100px}.padlf{padding-left:30%}}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    SukuShippingWidgetComponent.ctorParameters = function () { return []; };
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
    return SukuShippingWidgetComponent;
}());
export { SukuShippingWidgetComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zaGlwcGluZy13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc2hpcHBpbmctd2lkZ2V0L3N1a3Utc2hpcHBpbmctd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUF1REU7UUFqRFMsVUFBSyxHQUFHLGdKQUFnSixDQUFDO1FBQy9JLGVBQVUsR0FBRywrQkFBK0IsQ0FBQztRQUMxQyxpQkFBWSxHQUFHLDBCQUEwQixDQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsOEJBQThCLENBQUM7UUFDakQsZ0JBQVcsR0FBRywyQkFBMkIsQ0FBQztRQUNyQyxxQkFBZ0IsR0FBRyxNQUFNLENBQUM7UUFDekIsc0JBQWlCLEdBQUcsU0FBUyxDQUFDO1FBQ3RDLGdCQUFXLEdBQUcscUJBQXFCLENBQUM7UUFDL0Isb0JBQWUsR0FBRyxZQUFZLENBQUM7UUFDakQsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUdiLGlCQUFZLEdBQUcsMEJBQTBCLENBQUM7UUFDMUMsZUFBVSxHQUFHLG9DQUFvQyxDQUFDO1FBQ2xELGtCQUFhLEdBQUcsb0JBQW9CLENBQUM7UUFDckMsb0JBQWUsR0FBRyxvQkFBb0IsQ0FBQztRQUM1QixhQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ2Isd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFDZCxvQkFBZSxHQUFHLFNBQVMsQ0FBQztRQUMzQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDM0IsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDZCww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LGtEQUEwRDs7SUFDMUQsc0RBQTBEOztJQUMxRCw4Q0FBc0I7O0lBRXRCLCtDQUFrQjs7SUFDbEIsbURBQW1EOztJQUNuRCxpREFBMkQ7O0lBQzNELG9EQUE4Qzs7SUFDOUMsc0RBQWdEOztJQUNoRCwrQ0FBMkM7O0lBQzNDLG9EQUFrRDs7SUFDbEQscURBQWtEOztJQUNqRCxtREFBNkM7O0lBQzdDLDBEQUF5RDs7SUFDMUQsaURBQTBDOztJQUMxQyxzREFBd0Q7O0lBQ3hELHVEQUFzRDs7SUFDdEQscURBQWlEOztJQUNoRCw0REFBNkQ7O0lBRTlELGlEQUFnRDs7SUFDaEQsc0RBQXdEOztJQUN4RCx1REFBc0Q7O0lBQ3RELHFEQUFpRDs7SUFDaEQsNERBQTZEOztJQUM5RCxrREFBZ0Q7O0lBQ2hELHVEQUEyRDs7SUFDM0Qsd0RBQXlEOztJQUN6RCxzREFBb0Q7O0lBQ25ELDZEQUFnRTs7SUFFakUsb0RBQXdEOztJQUN4RCx5REFBK0Q7O0lBQy9ELDBEQUE2RDs7SUFDN0Qsd0RBQXdEOztJQUN2RCx5REFBdUQ7O0lBQ3hELG1EQUFxRDs7SUFDckQsd0RBQTREOztJQUM1RCx5REFBMEQ7O0lBQzFELHVEQUFxRDs7SUFDcEQsOERBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3Utc2hpcHBpbmctd2lkZ2V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1zaGlwcGluZy13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3Utc2hpcHBpbmctd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VTaGlwcGluZ1dpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaW1hZ2UgPSAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMS5nc3RhdGljLmNvbS9zaG9wcGluZz9xPXRibjpBTmQ5R2NTVHF6NjRBMlhqNTRmNXY0NHJEOXZOVXF5VFh6NWMwcjd6VGxmaDE4aWRveVVZR0g4aEY1MXBQNl9lZm9kbmFqQ3VZVkI0b2tjTW5UMCZ1c3FwPUNBYyc7XHJcblx0QElucHV0KCdwYWlkLWljb24nKSBhbW91bnRQYWlkID0gJy4uL2Fzc2V0cy9pbWcvcGFpZCBhbW91bnQucG5nJztcclxuICBASW5wdXQoJ3VucGFpZC1pY29uJykgYW1vdW50VW5QYWlkID0gJy4uL2Fzc2V0cy9pbWcvdW5wYWlkLnBuZyc7XHJcbiAgQElucHV0KCd1bnNoaXBwZWQtaWNvbicpIHVuU2hpcHBlZEljb24gPSAnLi4vYXNzZXRzL2ltZy91biBzaGlwcGVkLnBuZyc7XHJcbiAgQElucHV0KCdzaGlwcGVkLWljb24nKSBzaGlwcGVkSWNvbiA9ICcuLi9hc3NldHMvaW1nL3NoaXBwZWQucG5nJztcclxuXHRASW5wdXQoJ21zZy1QYXltZW50LVN0YXR1cycpIG1zZ1BheW1lbnRTdGF0dXMgPSAnUGFpZCc7XHJcblx0QElucHV0KCdtc2ctU2hpcG1lbnQtU3RhdHVzJykgbXNnU2hpcG1lbnRTdGF0dXMgPSAnc2hpcHBlZCc7XHJcblx0QElucHV0KCdjdXN0b21jbGFzcycpIGN1c3RvbWNsYXNzID0gJ2N1c3RvbWNsYXNzIGltZ3NpemUnO1xyXG5cdEBJbnB1dCgnY3VzdG9tLWljb25jbGFzcycpIGN1c3RvbUljb25jbGFzcyA9ICd0ZXh0LXJpZ2h0JztcclxuXHRASW5wdXQoKSBiZ0NvbG9yID0gJyc7XHJcblxyXG5cdEBJbnB1dCgpIGludGVyZXN0O1xyXG5cdEBJbnB1dCgpIGltYWdlQ29sU2l6ZSA9ICcgY29sLXNtLTEgZmxleCBwdC0xIHBsLTInO1xyXG5cdEBJbnB1dCgpIHR4dGNvbHNpemUgPSAndHh0Y29sc2l6ZSBjb2wtc20tNCBwbC00IHB0LTIgbXQtMSc7XHJcblx0QElucHV0KCkgdHh0dHdvY29sc2l6ZSA9ICdjb2wtc20tMiBwdC0yIG10LTEnO1xyXG5cdEBJbnB1dCgpIHR4dHRocmVlY29sc2l6ZSA9ICdjb2wtc20tMyBwdC0yIG10LTEnO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lJykgdGl0bGVPbmUgPSAnVGl0bGUgT25lJztcclxuXHRASW5wdXQoJ3RpdGxlLW9uZS1jb2xvcicpIHRpdGxlT25lQ29sb3IgPSAnYmxhY2snO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lLXdlaWdodCcpIHRpdGxlT25lV2VpZ2h0ID0gJzYwMCc7XHJcbiAgQElucHV0KCd0aXRsZS1vbmUtc2l6ZScpIHRpdGxlT25lU2l6ZSA9ICcxNCc7XHJcbiAgQElucHV0KCd0aXRsZS1vbmUtY3VzdG9tY2xhc3MnKSB0aXRsZU9uZWN1c3RvbWNsYXNzID0gJyc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZScpIGNvbnRlbnRPbmUgPSAnJDEwMCc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS1jb2xvcicpIGNvbnRlbnRPbmVDb2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLXdlaWdodCcpIGNvbnRlbnRPbmVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLXNpemUnKSBjb250ZW50T25lU2l6ZSA9ICcxNCc7XHJcbiAgQElucHV0KCdjb250ZW50LW9uZS1jdXN0b21jbGFzcycpIGNvbnRlbnRPbmVjdXN0b21jbGFzcyA9ICcnO1xyXG5cclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvJykgY29udGVudFR3byA9ICdKb2huIFNtaXRoJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLWNvbG9yJykgY29udGVudFR3b0NvbG9yID0gJyMzZTNlM2UnO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28td2VpZ2h0JykgY29udGVudFR3b1dlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28tc2l6ZScpIGNvbnRlbnRUd29TaXplID0gJzE0JztcclxuICBASW5wdXQoJ2NvbnRlbnQtdHdvLWN1c3RvbWNsYXNzJykgY29udGVudFR3b2N1c3RvbWNsYXNzID0gJyc7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvJykgc3ViVGl0bGVUd28gPSAnU09MRCBCWSc7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLWNvbG9yJykgc3ViVGl0bGVUd29Db2xvciA9ICcjYjZiNmI2JztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28td2VpZ2h0Jykgc3ViVGl0bGVUd29XZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28tc2l6ZScpIHN1YlRpdGxlVHdvU2l6ZSA9ICcxMic7XHJcbiAgQElucHV0KCdzdWItdGl0bGUtdHdvLWN1c3RvbWNsYXNzJykgc3ViVGl0bGVUd29jdXN0b21jbGFzcyA9ICcnO1xyXG5cclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZScpIHN1YlRpdGxlVGhyZWUgPSAnRVhQSVJZIERBVEUnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLWNvbG9yJykgc3ViVGl0bGVUaHJlZWNvbG9yID0gJyNiNmI2YjYnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLXdlaWdodCcpIHN1YlRpdGxlVGhyZWVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZS1zaXplJykgc3ViVGl0bGVUaHJlZVNpemUgPSAnMTInO1xyXG4gIEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlY2xhc3MnKSBzdWJUaXRsZVRocmVlQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUnKSBjb250ZW50VGhyZWUgPSAnMjggTm92IDIwMTgnO1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZS1jb2xvcicpIGNvbnRlbnRUaHJlZUNvbG9yID0gJyMzZTNlM2UnO1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZS13aWRnZXQnKSBjb250ZW50VGhyZWVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtc2l6ZScpIGNvbnRlbnRUaHJlZVNpemUgPSAnMTQnO1xyXG4gIEBJbnB1dCgnY29udGVudC10aHJlZS1jdXN0b21jbGFzcycpIGNvbnRlbnRUaHJlZWN1c3RvbWNsYXNzID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19