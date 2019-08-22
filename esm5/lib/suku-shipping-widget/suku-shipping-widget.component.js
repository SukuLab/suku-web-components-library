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
                    template: "<div class=\"col p-0\">\r\n  <div class=\"row card-line-bg p-3 m-3 c-pointer center\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img [class]=\"customclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\r\n    </div>\r\n      <div *ngIf=\"msgPaymentStatus=='Paid'\" class=\"padlf\">\r\n        <img [class]=\"customIconclass\" src=\"{{amountPaid}}\" alt=\"amount-paid\" width=\"50px\" height=\"50px\">\r\n      </div>\r\n      <div *ngIf=\"msgPaymentStatus=='unPaid'\" class=\"padlf\">\r\n        <img [class]=\"customIconclass\" src=\"{{amountUnPaid}}\" alt=\"amount-unpaid\" width=\"50px\" height=\"50px\">\r\n      </div>\r\n      <div *ngIf=\"msgShipmentStatus=='shipped'\">\r\n        <img [class]=\"customIconclass\" src=\"{{shippedIcon}}\" alt=\"Shipped\" width=\"50px\" height=\"50px\">\r\n      </div>\r\n      <div *ngIf=\"msgShipmentStatus=='unShipped'\">\r\n        <img [class]=\"customIconclass\" src=\"{{unShippedIcon}}\" alt=\"unshipped\" width=\"50px\" height=\"50px\">\r\n      </div>\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\r\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div [class]=\"txttwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\" [style.font-weight]=\"subTitleTwoWeight\"\r\n        [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\" [style.font-weight]=\"contentTwoWeight\"\r\n        [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtthreecolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\" [style.font-weight]=\"subTitleThreeWeight\"\r\n        [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\" [style.font-weight]=\"contentThreeWeight\"\r\n        [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}@media only screen and (max-width:500px){.center{text-align:center}.imgsize{height:100px;width:100px}.padlf{padding-left:30%}}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zaGlwcGluZy13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc2hpcHBpbmctd2lkZ2V0L3N1a3Utc2hpcHBpbmctd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUF1REM7UUFqRFMsVUFBSyxHQUFHLGdKQUFnSixDQUFDO1FBQzlJLGVBQVUsR0FBRywrQkFBK0IsQ0FBQztRQUMzQyxpQkFBWSxHQUFHLDBCQUEwQixDQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsOEJBQThCLENBQUM7UUFDakQsZ0JBQVcsR0FBRywyQkFBMkIsQ0FBQztRQUNwQyxxQkFBZ0IsR0FBRyxNQUFNLENBQUM7UUFDekIsc0JBQWlCLEdBQUcsU0FBUyxDQUFDO1FBQ3RDLGdCQUFXLEdBQUcscUJBQXFCLENBQUM7UUFDL0Isb0JBQWUsR0FBRyxZQUFZLENBQUM7UUFDakQsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUdiLGlCQUFZLEdBQUcsMEJBQTBCLENBQUM7UUFDMUMsZUFBVSxHQUFHLG9DQUFvQyxDQUFDO1FBQ2xELGtCQUFhLEdBQUcsb0JBQW9CLENBQUM7UUFDckMsb0JBQWUsR0FBRyxvQkFBb0IsQ0FBQztRQUM1QixhQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ2Isd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ25DLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFDZCxvQkFBZSxHQUFHLFNBQVMsQ0FBQztRQUMzQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDM0IsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDZiww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RCxrREFBMEQ7O0lBQzFELHNEQUEwRDs7SUFDMUQsOENBQXNCOztJQUV0QiwrQ0FBa0I7O0lBQ2xCLG1EQUFtRDs7SUFDbkQsaURBQTJEOztJQUMzRCxvREFBOEM7O0lBQzlDLHNEQUFnRDs7SUFDaEQsK0NBQTJDOztJQUMzQyxvREFBa0Q7O0lBQ2xELHFEQUFrRDs7SUFDbEQsbURBQTZDOztJQUM3QywwREFBeUQ7O0lBQ3pELGlEQUEwQzs7SUFDMUMsc0RBQXdEOztJQUN4RCx1REFBc0Q7O0lBQ3RELHFEQUFpRDs7SUFDakQsNERBQTZEOztJQUU3RCxpREFBZ0Q7O0lBQ2hELHNEQUF3RDs7SUFDeEQsdURBQXNEOztJQUN0RCxxREFBaUQ7O0lBQ2pELDREQUE2RDs7SUFDN0Qsa0RBQWdEOztJQUNoRCx1REFBMkQ7O0lBQzNELHdEQUF5RDs7SUFDekQsc0RBQW9EOztJQUNwRCw2REFBZ0U7O0lBRWhFLG9EQUF3RDs7SUFDeEQseURBQStEOztJQUMvRCwwREFBNkQ7O0lBQzdELHdEQUF3RDs7SUFDeEQseURBQXVEOztJQUN2RCxtREFBcUQ7O0lBQ3JELHdEQUE0RDs7SUFDNUQseURBQTBEOztJQUMxRCx1REFBcUQ7O0lBQ3JELDhEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LXNoaXBwaW5nLXdpZGdldCcsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3Utc2hpcHBpbmctd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LXNoaXBwaW5nLXdpZGdldC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1U2hpcHBpbmdXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGltYWdlID0gJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjEuZ3N0YXRpYy5jb20vc2hvcHBpbmc/cT10Ym46QU5kOUdjU1RxejY0QTJYajU0ZjV2NDRyRDl2TlVxeVRYejVjMHI3elRsZmgxOGlkb3lVWUdIOGhGNTFwUDZfZWZvZG5hakN1WVZCNG9rY01uVDAmdXNxcD1DQWMnO1xyXG5cdEBJbnB1dCgncGFpZC1pY29uJykgYW1vdW50UGFpZCA9ICcuLi9hc3NldHMvaW1nL3BhaWQgYW1vdW50LnBuZyc7XHJcblx0QElucHV0KCd1bnBhaWQtaWNvbicpIGFtb3VudFVuUGFpZCA9ICcuLi9hc3NldHMvaW1nL3VucGFpZC5wbmcnO1xyXG5cdEBJbnB1dCgndW5zaGlwcGVkLWljb24nKSB1blNoaXBwZWRJY29uID0gJy4uL2Fzc2V0cy9pbWcvdW4gc2hpcHBlZC5wbmcnO1xyXG5cdEBJbnB1dCgnc2hpcHBlZC1pY29uJykgc2hpcHBlZEljb24gPSAnLi4vYXNzZXRzL2ltZy9zaGlwcGVkLnBuZyc7XHJcblx0QElucHV0KCdtc2ctUGF5bWVudC1TdGF0dXMnKSBtc2dQYXltZW50U3RhdHVzID0gJ1BhaWQnO1xyXG5cdEBJbnB1dCgnbXNnLVNoaXBtZW50LVN0YXR1cycpIG1zZ1NoaXBtZW50U3RhdHVzID0gJ3NoaXBwZWQnO1xyXG5cdEBJbnB1dCgnY3VzdG9tY2xhc3MnKSBjdXN0b21jbGFzcyA9ICdjdXN0b21jbGFzcyBpbWdzaXplJztcclxuXHRASW5wdXQoJ2N1c3RvbS1pY29uY2xhc3MnKSBjdXN0b21JY29uY2xhc3MgPSAndGV4dC1yaWdodCc7XHJcblx0QElucHV0KCkgYmdDb2xvciA9ICcnO1xyXG5cclxuXHRASW5wdXQoKSBpbnRlcmVzdDtcclxuXHRASW5wdXQoKSBpbWFnZUNvbFNpemUgPSAnIGNvbC1zbS0xIGZsZXggcHQtMSBwbC0yJztcclxuXHRASW5wdXQoKSB0eHRjb2xzaXplID0gJ3R4dGNvbHNpemUgY29sLXNtLTQgcGwtNCBwdC0yIG10LTEnO1xyXG5cdEBJbnB1dCgpIHR4dHR3b2NvbHNpemUgPSAnY29sLXNtLTIgcHQtMiBtdC0xJztcclxuXHRASW5wdXQoKSB0eHR0aHJlZWNvbHNpemUgPSAnY29sLXNtLTMgcHQtMiBtdC0xJztcclxuXHRASW5wdXQoJ3RpdGxlLW9uZScpIHRpdGxlT25lID0gJ1RpdGxlIE9uZSc7XHJcblx0QElucHV0KCd0aXRsZS1vbmUtY29sb3InKSB0aXRsZU9uZUNvbG9yID0gJ2JsYWNrJztcclxuXHRASW5wdXQoJ3RpdGxlLW9uZS13ZWlnaHQnKSB0aXRsZU9uZVdlaWdodCA9ICc2MDAnO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lLXNpemUnKSB0aXRsZU9uZVNpemUgPSAnMTQnO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lLWN1c3RvbWNsYXNzJykgdGl0bGVPbmVjdXN0b21jbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUnKSBjb250ZW50T25lID0gJyQxMDAnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUtY29sb3InKSBjb250ZW50T25lQ29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS13ZWlnaHQnKSBjb250ZW50T25lV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS1zaXplJykgY29udGVudE9uZVNpemUgPSAnMTQnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUtY3VzdG9tY2xhc3MnKSBjb250ZW50T25lY3VzdG9tY2xhc3MgPSAnJztcclxuXHJcblx0QElucHV0KCdjb250ZW50LXR3bycpIGNvbnRlbnRUd28gPSAnSm9obiBTbWl0aCc7XHJcblx0QElucHV0KCdjb250ZW50LXR3by1jb2xvcicpIGNvbnRlbnRUd29Db2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLXdlaWdodCcpIGNvbnRlbnRUd29XZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLXNpemUnKSBjb250ZW50VHdvU2l6ZSA9ICcxNCc7XHJcblx0QElucHV0KCdjb250ZW50LXR3by1jdXN0b21jbGFzcycpIGNvbnRlbnRUd29jdXN0b21jbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3bycpIHN1YlRpdGxlVHdvID0gJ1NPTEQgQlknO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by1jb2xvcicpIHN1YlRpdGxlVHdvQ29sb3IgPSAnI2I2YjZiNic7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLXdlaWdodCcpIHN1YlRpdGxlVHdvV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLXNpemUnKSBzdWJUaXRsZVR3b1NpemUgPSAnMTInO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by1jdXN0b21jbGFzcycpIHN1YlRpdGxlVHdvY3VzdG9tY2xhc3MgPSAnJztcclxuXHJcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUnKSBzdWJUaXRsZVRocmVlID0gJ0VYUElSWSBEQVRFJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZS1jb2xvcicpIHN1YlRpdGxlVGhyZWVjb2xvciA9ICcjYjZiNmI2JztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZS13ZWlnaHQnKSBzdWJUaXRsZVRocmVlV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUtc2l6ZScpIHN1YlRpdGxlVGhyZWVTaXplID0gJzEyJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZWNsYXNzJykgc3ViVGl0bGVUaHJlZUNsYXNzID0gJyc7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlJykgY29udGVudFRocmVlID0gJzI4IE5vdiAyMDE4JztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY29sb3InKSBjb250ZW50VGhyZWVDb2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtd2lkZ2V0JykgY29udGVudFRocmVlV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlLXNpemUnKSBjb250ZW50VGhyZWVTaXplID0gJzE0JztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY3VzdG9tY2xhc3MnKSBjb250ZW50VGhyZWVjdXN0b21jbGFzcyA9ICcnO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==