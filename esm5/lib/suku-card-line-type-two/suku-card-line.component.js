/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuCardLineTypeTwoComponent = /** @class */ (function () {
    function SukuCardLineTypeTwoComponent() {
        this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
        this.iconOne = '';
        this.iconTwo = '';
        this.customclass = '';
        this.customImgclass = '';
        this.customIconclass = 'text-center';
        this.bgColor = '';
        this.imageColSize = "col-sm-1 pt-1 pl-2";
        this.txtcolsize = "col-sm-4 pl-sm-5 pt-2 mt-1";
        this.txttwocolsize = "col-sm-2 pt-2 pl-lg-2 pr-lg-2 mt-1";
        this.txtthreecolsize = "col-sm-3 pt-2 mt-1";
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
    SukuCardLineTypeTwoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuCardLineTypeTwoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-card-line-type-two',
                    template: "<div class=\"col p-0\">\n  <div class=\"row card-line-bg p-3 m-3 {{customclass}}\" [style.background-color]=\"bgColor\">\n    <div [class]=\"imageColSize\">\n      <img [class]=\"customImgclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\n    </div>\n    <div class=\"col-sm-1\">\n      <img [class]=\"customIconclass\" [src]=\"iconOne\" alt=\"card-img\" width=\"50px\" height=\"50px\">\n    </div>\n    <div class=\"col-sm-1\">\n      <img [class]=\"customIconclass\" src=\"{{iconTwo}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\n    </div>\n    <div [class]=\"txtcolsize\">\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\"  [style.font-weight]=\"titleOneWeight\"\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\"  [style.font-weight]=\"contentOneWeight\" [style.color]=\"contentOneColor\">{{contentOne}}</h2>\n    </div>\n    <div [class]=\"txttwocolsize\">\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"  [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\"  [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\n    </div>\n    <div [class]=\"txtthreecolsize\">\n        <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"  [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\n        <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"  [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\n      </div>\n  </div>\n</div>\n",
                    styles: ["h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    SukuCardLineTypeTwoComponent.ctorParameters = function () { return []; };
    SukuCardLineTypeTwoComponent.propDecorators = {
        image: [{ type: Input }],
        iconOne: [{ type: Input, args: ['icon-one',] }],
        iconTwo: [{ type: Input, args: ['icon-two',] }],
        msgStatus: [{ type: Input, args: ['msg-status',] }],
        customclass: [{ type: Input, args: ['customclass',] }],
        customImgclass: [{ type: Input, args: ['customImgclass',] }],
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
    return SukuCardLineTypeTwoComponent;
}());
export { SukuCardLineTypeTwoComponent };
if (false) {
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.image;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.iconOne;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.iconTwo;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.msgStatus;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.customclass;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.customImgclass;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.customIconclass;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.bgColor;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.interest;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.imageColSize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.txtcolsize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.txttwocolsize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.txtthreecolsize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.titleOne;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.titleOneColor;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.titleOneWeight;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.titleOneSize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.titleOnecustomclass;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentOne;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentOneColor;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentOneWeight;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentOneSize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentOnecustomclass;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentTwo;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentTwoColor;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentTwoWeight;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentTwoSize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentTwocustomclass;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.subTitleTwo;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.subTitleTwoColor;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.subTitleTwoWeight;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.subTitleTwoSize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.subTitleTwocustomclass;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.subTitleThree;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.subTitleThreecolor;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.subTitleThreeWeight;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.subTitleThreeSize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.subTitleThreeClass;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentThree;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentThreeColor;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentThreeWeight;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentThreeSize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.contentThreecustomclass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jYXJkLWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY2FyZC1saW5lLXR5cGUtdHdvL3N1a3UtY2FyZC1saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFxREU7UUEvQ1MsVUFBSyxHQUFHLGdKQUFnSixDQUFDO1FBQ2hKLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBRVYsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDZCxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNsQixvQkFBZSxHQUFHLGFBQWEsQ0FBQztRQUNsRCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBR2IsaUJBQVksR0FBRyxvQkFBb0IsQ0FBQztRQUNwQyxlQUFVLEdBQUcsNEJBQTRCLENBQUM7UUFDMUMsa0JBQWEsR0FBRyxvQ0FBb0MsQ0FBQztRQUNyRCxvQkFBZSxHQUFHLG9CQUFvQixDQUFDO1FBQzVCLGFBQVEsR0FBRyxXQUFXLENBQUM7UUFDakIsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFDdkIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDeEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDYix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDcEMsZUFBVSxHQUFHLE1BQU0sQ0FBQztRQUNkLG9CQUFlLEdBQUcsU0FBUyxDQUFDO1FBQzNCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUMzQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUNkLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUV4QyxlQUFVLEdBQUcsWUFBWSxDQUFDO1FBQ3BCLG9CQUFlLEdBQUcsU0FBUyxDQUFDO1FBQzNCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUMzQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUNkLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUN0QyxnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUNsQixxQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDNUIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzVCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2YsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBRXZDLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ3hCLHVCQUFrQixHQUFHLFNBQVMsQ0FBQztRQUM5Qix3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDOUIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUNoQyxpQkFBWSxHQUFHLGFBQWEsQ0FBQztRQUN2QixzQkFBaUIsR0FBRyxTQUFTLENBQUM7UUFDN0IsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzdCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUNoQiw0QkFBdUIsR0FBRyxFQUFFLENBQUM7SUFFakQsQ0FBQzs7OztJQUVqQiwrQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkF4REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLDIwREFBOEM7O2lCQUUvQzs7Ozs7d0JBRUUsS0FBSzswQkFDTixLQUFLLFNBQUMsVUFBVTswQkFDaEIsS0FBSyxTQUFDLFVBQVU7NEJBQ2hCLEtBQUssU0FBQyxZQUFZOzhCQUNsQixLQUFLLFNBQUMsYUFBYTtpQ0FDbkIsS0FBSyxTQUFDLGdCQUFnQjtrQ0FDdEIsS0FBSyxTQUFDLGtCQUFrQjswQkFDeEIsS0FBSzsyQkFFTCxLQUFLOytCQUNMLEtBQUs7NkJBQ0wsS0FBSztnQ0FDTCxLQUFLO2tDQUNMLEtBQUs7MkJBQ0wsS0FBSyxTQUFDLFdBQVc7Z0NBQ2pCLEtBQUssU0FBQyxpQkFBaUI7aUNBQ3ZCLEtBQUssU0FBQyxrQkFBa0I7K0JBQ3ZCLEtBQUssU0FBQyxnQkFBZ0I7c0NBQ3RCLEtBQUssU0FBQyx1QkFBdUI7NkJBQzlCLEtBQUssU0FBQyxhQUFhO2tDQUNuQixLQUFLLFNBQUMsbUJBQW1CO21DQUN6QixLQUFLLFNBQUMsb0JBQW9CO2lDQUMxQixLQUFLLFNBQUMsa0JBQWtCO3dDQUN2QixLQUFLLFNBQUMseUJBQXlCOzZCQUVoQyxLQUFLLFNBQUMsYUFBYTtrQ0FDbkIsS0FBSyxTQUFDLG1CQUFtQjttQ0FDekIsS0FBSyxTQUFDLG9CQUFvQjtpQ0FDMUIsS0FBSyxTQUFDLGtCQUFrQjt3Q0FDdkIsS0FBSyxTQUFDLHlCQUF5Qjs4QkFDaEMsS0FBSyxTQUFDLGVBQWU7bUNBQ3JCLEtBQUssU0FBQyxxQkFBcUI7b0NBQzNCLEtBQUssU0FBQyxzQkFBc0I7a0NBQzVCLEtBQUssU0FBQyxvQkFBb0I7eUNBQ3pCLEtBQUssU0FBQywyQkFBMkI7Z0NBRWxDLEtBQUssU0FBQyxpQkFBaUI7cUNBQ3ZCLEtBQUssU0FBQyx1QkFBdUI7c0NBQzdCLEtBQUssU0FBQyx3QkFBd0I7b0NBQzlCLEtBQUssU0FBQyxzQkFBc0I7cUNBQzNCLEtBQUssU0FBQyxzQkFBc0I7K0JBQzdCLEtBQUssU0FBQyxlQUFlO29DQUNyQixLQUFLLFNBQUMscUJBQXFCO3FDQUMzQixLQUFLLFNBQUMsc0JBQXNCO21DQUM1QixLQUFLLFNBQUMsb0JBQW9COzBDQUN6QixLQUFLLFNBQUMsMkJBQTJCOztJQU9wQyxtQ0FBQztDQUFBLEFBMURELElBMERDO1NBckRZLDRCQUE0Qjs7O0lBQ3ZDLDZDQUFrSzs7SUFDbkssK0NBQWdDOztJQUNoQywrQ0FBZ0M7O0lBQ2hDLGlEQUErQjs7SUFDL0IsbURBQXVDOztJQUN2QyxzREFBNkM7O0lBQzdDLHVEQUEyRDs7SUFDM0QsK0NBQXNCOztJQUV0QixnREFBa0I7O0lBQ2xCLG9EQUE2Qzs7SUFDN0Msa0RBQW1EOztJQUNuRCxxREFBOEQ7O0lBQzlELHVEQUFnRDs7SUFDaEQsZ0RBQTJDOztJQUMzQyxxREFBa0Q7O0lBQ2xELHNEQUFrRDs7SUFDakQsb0RBQTZDOztJQUM3QywyREFBeUQ7O0lBQzFELGtEQUEwQzs7SUFDMUMsdURBQXdEOztJQUN4RCx3REFBc0Q7O0lBQ3RELHNEQUFpRDs7SUFDaEQsNkRBQTZEOztJQUU5RCxrREFBZ0Q7O0lBQ2hELHVEQUF3RDs7SUFDeEQsd0RBQXNEOztJQUN0RCxzREFBaUQ7O0lBQ2hELDZEQUE2RDs7SUFDOUQsbURBQWdEOztJQUNoRCx3REFBMkQ7O0lBQzNELHlEQUF5RDs7SUFDekQsdURBQW9EOztJQUNuRCw4REFBZ0U7O0lBRWpFLHFEQUF3RDs7SUFDeEQsMERBQStEOztJQUMvRCwyREFBNkQ7O0lBQzdELHlEQUF3RDs7SUFDdkQsMERBQXVEOztJQUN4RCxvREFBcUQ7O0lBQ3JELHlEQUE0RDs7SUFDNUQsMERBQTBEOztJQUMxRCx3REFBcUQ7O0lBQ3BELCtEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWNhcmQtbGluZS10eXBlLXR3bycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWNhcmQtbGluZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtY2FyZC1saW5lLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUNhcmRMaW5lVHlwZVR3b0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGltYWdlID0gJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjEuZ3N0YXRpYy5jb20vc2hvcHBpbmc/cT10Ym46QU5kOUdjU1RxejY0QTJYajU0ZjV2NDRyRDl2TlVxeVRYejVjMHI3elRsZmgxOGlkb3lVWUdIOGhGNTFwUDZfZWZvZG5hakN1WVZCNG9rY01uVDAmdXNxcD1DQWMnO1xuXHRASW5wdXQoJ2ljb24tb25lJykgaWNvbk9uZSA9ICcnO1xuXHRASW5wdXQoJ2ljb24tdHdvJykgaWNvblR3byA9ICcnO1xuXHRASW5wdXQoJ21zZy1zdGF0dXMnKSBtc2dTdGF0dXM7XG5cdEBJbnB1dCgnY3VzdG9tY2xhc3MnKSBjdXN0b21jbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2N1c3RvbUltZ2NsYXNzJykgY3VzdG9tSW1nY2xhc3MgPSAnJztcblx0QElucHV0KCdjdXN0b20taWNvbmNsYXNzJykgY3VzdG9tSWNvbmNsYXNzID0gJ3RleHQtY2VudGVyJztcblx0QElucHV0KCkgYmdDb2xvciA9ICcnO1xuXG5cdEBJbnB1dCgpIGludGVyZXN0O1xuXHRASW5wdXQoKSBpbWFnZUNvbFNpemUgPSBcImNvbC1zbS0xIHB0LTEgcGwtMlwiO1xuXHRASW5wdXQoKSB0eHRjb2xzaXplID0gXCJjb2wtc20tNCBwbC1zbS01IHB0LTIgbXQtMVwiO1xuXHRASW5wdXQoKSB0eHR0d29jb2xzaXplID0gXCJjb2wtc20tMiBwdC0yIHBsLWxnLTIgcHItbGctMiBtdC0xXCI7XG5cdEBJbnB1dCgpIHR4dHRocmVlY29sc2l6ZSA9IFwiY29sLXNtLTMgcHQtMiBtdC0xXCI7XG5cdEBJbnB1dCgndGl0bGUtb25lJykgdGl0bGVPbmUgPSAnVGl0bGUgT25lJztcblx0QElucHV0KCd0aXRsZS1vbmUtY29sb3InKSB0aXRsZU9uZUNvbG9yID0gJ2JsYWNrJztcblx0QElucHV0KCd0aXRsZS1vbmUtd2VpZ2h0JykgdGl0bGVPbmVXZWlnaHQgPSAnNjAwJztcbiAgQElucHV0KCd0aXRsZS1vbmUtc2l6ZScpIHRpdGxlT25lU2l6ZSA9ICcxNCc7XG4gIEBJbnB1dCgndGl0bGUtb25lLWN1c3RvbWNsYXNzJykgdGl0bGVPbmVjdXN0b21jbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2NvbnRlbnQtb25lJykgY29udGVudE9uZSA9ICckMTAwJztcblx0QElucHV0KCdjb250ZW50LW9uZS1jb2xvcicpIGNvbnRlbnRPbmVDb2xvciA9ICcjM2UzZTNlJztcblx0QElucHV0KCdjb250ZW50LW9uZS13ZWlnaHQnKSBjb250ZW50T25lV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgnY29udGVudC1vbmUtc2l6ZScpIGNvbnRlbnRPbmVTaXplID0gJzE0JztcbiAgQElucHV0KCdjb250ZW50LW9uZS1jdXN0b21jbGFzcycpIGNvbnRlbnRPbmVjdXN0b21jbGFzcyA9ICcnO1xuXG5cdEBJbnB1dCgnY29udGVudC10d28nKSBjb250ZW50VHdvID0gJ0pvaG4gU21pdGgnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLWNvbG9yJykgY29udGVudFR3b0NvbG9yID0gJyMzZTNlM2UnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLXdlaWdodCcpIGNvbnRlbnRUd29XZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCdjb250ZW50LXR3by1zaXplJykgY29udGVudFR3b1NpemUgPSAnMTQnO1xuICBASW5wdXQoJ2NvbnRlbnQtdHdvLWN1c3RvbWNsYXNzJykgY29udGVudFR3b2N1c3RvbWNsYXNzID0gJyc7XG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3bycpIHN1YlRpdGxlVHdvID0gJ1NPTEQgQlknO1xuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28tY29sb3InKSBzdWJUaXRsZVR3b0NvbG9yID0gJyNiNmI2YjYnO1xuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28td2VpZ2h0Jykgc3ViVGl0bGVUd29XZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLXNpemUnKSBzdWJUaXRsZVR3b1NpemUgPSAnMTInO1xuICBASW5wdXQoJ3N1Yi10aXRsZS10d28tY3VzdG9tY2xhc3MnKSBzdWJUaXRsZVR3b2N1c3RvbWNsYXNzID0gJyc7XG5cblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUnKSBzdWJUaXRsZVRocmVlID0gJ0VYUElSWSBEQVRFJztcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUtY29sb3InKSBzdWJUaXRsZVRocmVlY29sb3IgPSAnI2I2YjZiNic7XG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLXdlaWdodCcpIHN1YlRpdGxlVGhyZWVXZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUtc2l6ZScpIHN1YlRpdGxlVGhyZWVTaXplID0gJzEyJztcbiAgQElucHV0KCdzdWItdGl0bGUtdGhyZWVjbGFzcycpIHN1YlRpdGxlVGhyZWVDbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUnKSBjb250ZW50VGhyZWUgPSAnMjggTm92IDIwMTgnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY29sb3InKSBjb250ZW50VGhyZWVDb2xvciA9ICcjM2UzZTNlJztcblx0QElucHV0KCdjb250ZW50LXRocmVlLXdpZGdldCcpIGNvbnRlbnRUaHJlZVdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtc2l6ZScpIGNvbnRlbnRUaHJlZVNpemUgPSAnMTQnO1xuICBASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY3VzdG9tY2xhc3MnKSBjb250ZW50VGhyZWVjdXN0b21jbGFzcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19