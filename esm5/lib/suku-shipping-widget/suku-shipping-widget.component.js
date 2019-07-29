/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<div class=\"col p-0\">\n  <div class=\"row card-line-bg p-3 m-3 c-pointer center\" [style.background-color]=\"bgColor\">\n    <div [class]=\"imageColSize\">\n      <img [class]=\"customclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\n    </div>\n      <div *ngIf=\"msgPaymentStatus=='Paid'\" class=\"padlf\">\n        <img [class]=\"customIconclass\" src=\"{{amountPaid}}\" alt=\"amount-paid\" width=\"50px\" height=\"50px\">\n      </div>\n      <div *ngIf=\"msgPaymentStatus=='unPaid'\" class=\"padlf\">\n        <img [class]=\"customIconclass\" src=\"{{amountUnPaid}}\" alt=\"amount-unpaid\" width=\"50px\" height=\"50px\">\n      </div>\n      <div *ngIf=\"msgShipmentStatus=='shipped'\">\n        <img [class]=\"customIconclass\" src=\"{{shippedIcon}}\" alt=\"Shipped\" width=\"50px\" height=\"50px\">\n      </div>\n      <div *ngIf=\"msgShipmentStatus=='unShipped'\">\n        <img [class]=\"customIconclass\" src=\"{{unShippedIcon}}\" alt=\"unshipped\" width=\"50px\" height=\"50px\">\n      </div>\n    <div [class]=\"txtcolsize\">\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\n    </div>\n    <div [class]=\"txttwocolsize\">\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\" [style.font-weight]=\"subTitleTwoWeight\"\n        [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\" [style.font-weight]=\"contentTwoWeight\"\n        [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\n    </div>\n    <div [class]=\"txtthreecolsize\">\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\" [style.font-weight]=\"subTitleThreeWeight\"\n        [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\" [style.font-weight]=\"contentThreeWeight\"\n        [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\n    </div>\n  </div>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font)!important;font-size:var(--suku-font-size-2);font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}@media only screen and (max-width:500px){.center{text-align:center}.imgsize{height:100px;width:100px}.padlf{padding-left:30%}}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zaGlwcGluZy13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc2hpcHBpbmctd2lkZ2V0L3N1a3Utc2hpcHBpbmctd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUF1REU7UUFqRFMsVUFBSyxHQUFHLGdKQUFnSixDQUFDO1FBQy9JLGVBQVUsR0FBRywrQkFBK0IsQ0FBQztRQUMxQyxpQkFBWSxHQUFHLDBCQUEwQixDQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsOEJBQThCLENBQUM7UUFDakQsZ0JBQVcsR0FBRywyQkFBMkIsQ0FBQztRQUNyQyxxQkFBZ0IsR0FBRyxNQUFNLENBQUM7UUFDekIsc0JBQWlCLEdBQUcsU0FBUyxDQUFDO1FBQ3RDLGdCQUFXLEdBQUcscUJBQXFCLENBQUM7UUFDL0Isb0JBQWUsR0FBRyxZQUFZLENBQUM7UUFDakQsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUdiLGlCQUFZLEdBQUcsMEJBQTBCLENBQUM7UUFDMUMsZUFBVSxHQUFHLG9DQUFvQyxDQUFDO1FBQ2xELGtCQUFhLEdBQUcsb0JBQW9CLENBQUM7UUFDckMsb0JBQWUsR0FBRyxvQkFBb0IsQ0FBQztRQUM1QixhQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ2Isd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFDZCxvQkFBZSxHQUFHLFNBQVMsQ0FBQztRQUMzQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDM0IsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDZCww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LGtEQUEwRDs7SUFDMUQsc0RBQTBEOztJQUMxRCw4Q0FBc0I7O0lBRXRCLCtDQUFrQjs7SUFDbEIsbURBQW1EOztJQUNuRCxpREFBMkQ7O0lBQzNELG9EQUE4Qzs7SUFDOUMsc0RBQWdEOztJQUNoRCwrQ0FBMkM7O0lBQzNDLG9EQUFrRDs7SUFDbEQscURBQWtEOztJQUNqRCxtREFBNkM7O0lBQzdDLDBEQUF5RDs7SUFDMUQsaURBQTBDOztJQUMxQyxzREFBd0Q7O0lBQ3hELHVEQUFzRDs7SUFDdEQscURBQWlEOztJQUNoRCw0REFBNkQ7O0lBRTlELGlEQUFnRDs7SUFDaEQsc0RBQXdEOztJQUN4RCx1REFBc0Q7O0lBQ3RELHFEQUFpRDs7SUFDaEQsNERBQTZEOztJQUM5RCxrREFBZ0Q7O0lBQ2hELHVEQUEyRDs7SUFDM0Qsd0RBQXlEOztJQUN6RCxzREFBb0Q7O0lBQ25ELDZEQUFnRTs7SUFFakUsb0RBQXdEOztJQUN4RCx5REFBK0Q7O0lBQy9ELDBEQUE2RDs7SUFDN0Qsd0RBQXdEOztJQUN2RCx5REFBdUQ7O0lBQ3hELG1EQUFxRDs7SUFDckQsd0RBQTREOztJQUM1RCx5REFBMEQ7O0lBQzFELHVEQUFxRDs7SUFDcEQsOERBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3Utc2hpcHBpbmctd2lkZ2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3Utc2hpcHBpbmctd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1zaGlwcGluZy13aWRnZXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1U2hpcHBpbmdXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpbWFnZSA9ICdodHRwczovL2VuY3J5cHRlZC10Ym4xLmdzdGF0aWMuY29tL3Nob3BwaW5nP3E9dGJuOkFOZDlHY1NUcXo2NEEyWGo1NGY1djQ0ckQ5dk5VcXlUWHo1YzByN3pUbGZoMThpZG95VVlHSDhoRjUxcFA2X2Vmb2RuYWpDdVlWQjRva2NNblQwJnVzcXA9Q0FjJztcblx0QElucHV0KCdwYWlkLWljb24nKSBhbW91bnRQYWlkID0gJy4uL2Fzc2V0cy9pbWcvcGFpZCBhbW91bnQucG5nJztcbiAgQElucHV0KCd1bnBhaWQtaWNvbicpIGFtb3VudFVuUGFpZCA9ICcuLi9hc3NldHMvaW1nL3VucGFpZC5wbmcnO1xuICBASW5wdXQoJ3Vuc2hpcHBlZC1pY29uJykgdW5TaGlwcGVkSWNvbiA9ICcuLi9hc3NldHMvaW1nL3VuIHNoaXBwZWQucG5nJztcbiAgQElucHV0KCdzaGlwcGVkLWljb24nKSBzaGlwcGVkSWNvbiA9ICcuLi9hc3NldHMvaW1nL3NoaXBwZWQucG5nJztcblx0QElucHV0KCdtc2ctUGF5bWVudC1TdGF0dXMnKSBtc2dQYXltZW50U3RhdHVzID0gJ1BhaWQnO1xuXHRASW5wdXQoJ21zZy1TaGlwbWVudC1TdGF0dXMnKSBtc2dTaGlwbWVudFN0YXR1cyA9ICdzaGlwcGVkJztcblx0QElucHV0KCdjdXN0b21jbGFzcycpIGN1c3RvbWNsYXNzID0gJ2N1c3RvbWNsYXNzIGltZ3NpemUnO1xuXHRASW5wdXQoJ2N1c3RvbS1pY29uY2xhc3MnKSBjdXN0b21JY29uY2xhc3MgPSAndGV4dC1yaWdodCc7XG5cdEBJbnB1dCgpIGJnQ29sb3IgPSAnJztcblxuXHRASW5wdXQoKSBpbnRlcmVzdDtcblx0QElucHV0KCkgaW1hZ2VDb2xTaXplID0gJyBjb2wtc20tMSBmbGV4IHB0LTEgcGwtMic7XG5cdEBJbnB1dCgpIHR4dGNvbHNpemUgPSAndHh0Y29sc2l6ZSBjb2wtc20tNCBwbC00IHB0LTIgbXQtMSc7XG5cdEBJbnB1dCgpIHR4dHR3b2NvbHNpemUgPSAnY29sLXNtLTIgcHQtMiBtdC0xJztcblx0QElucHV0KCkgdHh0dGhyZWVjb2xzaXplID0gJ2NvbC1zbS0zIHB0LTIgbXQtMSc7XG5cdEBJbnB1dCgndGl0bGUtb25lJykgdGl0bGVPbmUgPSAnVGl0bGUgT25lJztcblx0QElucHV0KCd0aXRsZS1vbmUtY29sb3InKSB0aXRsZU9uZUNvbG9yID0gJ2JsYWNrJztcblx0QElucHV0KCd0aXRsZS1vbmUtd2VpZ2h0JykgdGl0bGVPbmVXZWlnaHQgPSAnNjAwJztcbiAgQElucHV0KCd0aXRsZS1vbmUtc2l6ZScpIHRpdGxlT25lU2l6ZSA9ICcxNCc7XG4gIEBJbnB1dCgndGl0bGUtb25lLWN1c3RvbWNsYXNzJykgdGl0bGVPbmVjdXN0b21jbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2NvbnRlbnQtb25lJykgY29udGVudE9uZSA9ICckMTAwJztcblx0QElucHV0KCdjb250ZW50LW9uZS1jb2xvcicpIGNvbnRlbnRPbmVDb2xvciA9ICcjM2UzZTNlJztcblx0QElucHV0KCdjb250ZW50LW9uZS13ZWlnaHQnKSBjb250ZW50T25lV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgnY29udGVudC1vbmUtc2l6ZScpIGNvbnRlbnRPbmVTaXplID0gJzE0JztcbiAgQElucHV0KCdjb250ZW50LW9uZS1jdXN0b21jbGFzcycpIGNvbnRlbnRPbmVjdXN0b21jbGFzcyA9ICcnO1xuXG5cdEBJbnB1dCgnY29udGVudC10d28nKSBjb250ZW50VHdvID0gJ0pvaG4gU21pdGgnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLWNvbG9yJykgY29udGVudFR3b0NvbG9yID0gJyMzZTNlM2UnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLXdlaWdodCcpIGNvbnRlbnRUd29XZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCdjb250ZW50LXR3by1zaXplJykgY29udGVudFR3b1NpemUgPSAnMTQnO1xuICBASW5wdXQoJ2NvbnRlbnQtdHdvLWN1c3RvbWNsYXNzJykgY29udGVudFR3b2N1c3RvbWNsYXNzID0gJyc7XG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3bycpIHN1YlRpdGxlVHdvID0gJ1NPTEQgQlknO1xuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28tY29sb3InKSBzdWJUaXRsZVR3b0NvbG9yID0gJyNiNmI2YjYnO1xuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28td2VpZ2h0Jykgc3ViVGl0bGVUd29XZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLXNpemUnKSBzdWJUaXRsZVR3b1NpemUgPSAnMTInO1xuICBASW5wdXQoJ3N1Yi10aXRsZS10d28tY3VzdG9tY2xhc3MnKSBzdWJUaXRsZVR3b2N1c3RvbWNsYXNzID0gJyc7XG5cblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUnKSBzdWJUaXRsZVRocmVlID0gJ0VYUElSWSBEQVRFJztcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUtY29sb3InKSBzdWJUaXRsZVRocmVlY29sb3IgPSAnI2I2YjZiNic7XG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLXdlaWdodCcpIHN1YlRpdGxlVGhyZWVXZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUtc2l6ZScpIHN1YlRpdGxlVGhyZWVTaXplID0gJzEyJztcbiAgQElucHV0KCdzdWItdGl0bGUtdGhyZWVjbGFzcycpIHN1YlRpdGxlVGhyZWVDbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUnKSBjb250ZW50VGhyZWUgPSAnMjggTm92IDIwMTgnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY29sb3InKSBjb250ZW50VGhyZWVDb2xvciA9ICcjM2UzZTNlJztcblx0QElucHV0KCdjb250ZW50LXRocmVlLXdpZGdldCcpIGNvbnRlbnRUaHJlZVdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtc2l6ZScpIGNvbnRlbnRUaHJlZVNpemUgPSAnMTQnO1xuICBASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY3VzdG9tY2xhc3MnKSBjb250ZW50VGhyZWVjdXN0b21jbGFzcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19