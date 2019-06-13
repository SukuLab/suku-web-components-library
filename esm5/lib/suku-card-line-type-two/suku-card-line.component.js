/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
        this.txtcolsize = "col-sm-5 pl-sm-5 pt-2 mt-1";
        this.txttwocolsize = "col-sm-2 pl-lg-0 pr-lg-2 pt-2 mt-1";
        this.txtthreecolsize = "col pt-2 mt-1";
        this.titleOne = 'Title One';
        this.iconOneInfo = 'icon info One';
        this.iconTwoInfo = 'icon info Two';
        this.titleOneColor = 'black';
        this.titleOneWeight = '600';
        this.titleOneSize = '14';
        this.titleOnecustomclass = '';
        this.contentOne = '$100';
        this.contentOneColor = '#3e3e3e';
        this.contentOneWeight = '500';
        this.contentOneSize = '14';
        this.contentOnecustomclass = '';
        this.contentTwo = 'N/A';
        this.contentTwoColor = '#3e3e3e';
        this.contentTwoWeight = '500';
        this.contentTwoSize = '14';
        this.contentTwocustomclass = 'user';
        this.subTitleTwo = 'SOLD BY';
        this.subTitleTwoColor = '#b6b6b6';
        this.subTitleTwoWeight = '500';
        this.subTitleTwoSize = '12';
        this.subTitleTwocustomclass = '';
        this.subTitleThree = 'TOTAL PRICE';
        this.subTitleThreecolor = '#b6b6b6';
        this.subTitleThreeWeight = '500';
        this.subTitleThreeSize = '12';
        this.subTitleThreeClass = '';
        this.contentThree = 'N/A';
        this.contentThreeColor = '#3e3e3e';
        this.contentThreeWeight = '500';
        this.contentThreeSize = '14';
        this.contentThreecustomclass = '';
        this.userAction = new EventEmitter();
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
                    template: "<div class=\"col p-0\">\r\n  <div class=\"row card-line-bg p-3 m-2 {{customclass}}\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img [class]=\"customImgclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n      <span class=\"tipTool\">\r\n        <span class=\"tipTooltext\">\r\n          <span class=\"uncheckedTextContent\">{{iconOneInfo}}</span>\r\n        </span>\r\n        <img [class]=\"customIconclass\" [src]=\"iconOne\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n      </span>\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n        <span class=\"tipTool\">\r\n          <span class=\"tipTooltext\">\r\n            <span class=\"uncheckedTextContent\">{{iconTwoInfo}}</span>\r\n          </span>\r\n          <img [class]=\"customIconclass\" src=\"{{iconTwo}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n        </span>\r\n    </div>\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\r\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div [class]=\"txttwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"\r\n        [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" (click)=\"userAction.emit()\" [class]=\"contentTwocustomclass\" [style.font-weight]=\"contentTwoWeight\"\r\n        [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtthreecolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"\r\n        [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"\r\n        [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: ["h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-word!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}.tipTool{position:relative;display:inline-block;width:35px;height:0;text-align:center;border-radius:15px;background-color:#d8d8d8a8 transparent;font-size:18px;color:#757575;font-weight:700;font-style:italic;font-stretch:normal;letter-spacing:.5px}.tipTool .tipTooltext{visibility:hidden;width:-webkit-max-content;width:-moz-max-content;width:max-content;background-color:#000000eb;text-align:left;border-radius:6px;padding:15px 18px;position:absolute;z-index:1;bottom:150%;left:70%;margin-left:-60px;font-style:normal;font-stretch:normal;font-size:13px;font-family:\"Encode Sans\",sans-serif;font-weight:500;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.tipTool .tipTooltext::after{content:\"\";position:absolute;top:100%;left:31.5%;margin-left:0;border-width:5px;border-style:solid;border-color:#191922 transparent transparent;font-style:normal;font-stretch:normal}.tipTool:hover .tipTooltext{visibility:visible}.user{cursor:pointer!important}.user:hover{color:#000!important;font-weight:700!important}"]
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
        iconOneInfo: [{ type: Input, args: ['icon-info-one',] }],
        iconTwoInfo: [{ type: Input, args: ['icon-info-two',] }],
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
        contentThreecustomclass: [{ type: Input, args: ['content-three-customclass',] }],
        userAction: [{ type: Output }]
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
    SukuCardLineTypeTwoComponent.prototype.iconOneInfo;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.iconTwoInfo;
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
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.userAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jYXJkLWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY2FyZC1saW5lLXR5cGUtdHdvL3N1a3UtY2FyZC1saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQXlERTtRQW5EUyxVQUFLLEdBQUcsZ0pBQWdKLENBQUM7UUFDaEosWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFVixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNkLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLG9CQUFlLEdBQUcsYUFBYSxDQUFDO1FBQ2xELFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHYixpQkFBWSxHQUFHLG9CQUFvQixDQUFDO1FBQ3BDLGVBQVUsR0FBRyw0QkFBNEIsQ0FBQztRQUMxQyxrQkFBYSxHQUFHLG9DQUFvQyxDQUFDO1FBQ3JELG9CQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZCLGFBQVEsR0FBRyxXQUFXLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxlQUFlLENBQUM7UUFDOUIsZ0JBQVcsR0FBRyxlQUFlLENBQUM7UUFDNUIsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFDdkIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDeEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDYix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDcEMsZUFBVSxHQUFHLE1BQU0sQ0FBQztRQUNkLG9CQUFlLEdBQUcsU0FBUyxDQUFDO1FBQzNCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUMzQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUNkLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUV4QyxlQUFVLEdB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RDs7SUFDM0QsK0NBQXNCOztJQUV0QixnREFBa0I7O0lBQ2xCLG9EQUE2Qzs7SUFDN0Msa0RBQW1EOztJQUNuRCxxREFBOEQ7O0lBQzlELHVEQUEyQzs7SUFDM0MsZ0RBQTJDOztJQUMzQyxtREFBc0Q7O0lBQ3RELG1EQUFzRDs7SUFDdEQscURBQWtEOztJQUNsRCxzREFBa0Q7O0lBQ2pELG9EQUE2Qzs7SUFDN0MsMkRBQXlEOztJQUMxRCxrREFBMEM7O0lBQzFDLHVEQUF3RDs7SUFDeEQsd0RBQXNEOztJQUN0RCxzREFBaUQ7O0lBQ2hELDZEQUE2RDs7SUFFOUQsa0RBQXlDOztJQUN6Qyx1REFBd0Q7O0lBQ3hELHdEQUFzRDs7SUFDdEQsc0RBQWlEOztJQUNoRCw2REFBaUU7O0lBQ2xFLG1EQUFnRDs7SUFDaEQsd0RBQTJEOztJQUMzRCx5REFBeUQ7O0lBQ3pELHVEQUFvRDs7SUFDcEQsOERBQWdFOztJQUVoRSxxREFBd0Q7O0lBQ3hELDBEQUErRDs7SUFDL0QsMkRBQTZEOztJQUM3RCx5REFBd0Q7O0lBQ3ZELDBEQUF1RDs7SUFDeEQsb0RBQTZDOztJQUM3Qyx5REFBNEQ7O0lBQzVELDBEQUEwRDs7SUFDMUQsd0RBQXFEOztJQUNwRCwrREFBaUU7O0lBRWxFLGtEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1jYXJkLWxpbmUtdHlwZS10d28nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWNhcmQtbGluZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1jYXJkLWxpbmUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUNhcmRMaW5lVHlwZVR3b0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaW1hZ2UgPSAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMS5nc3RhdGljLmNvbS9zaG9wcGluZz9xPXRibjpBTmQ5R2NTVHF6NjRBMlhqNTRmNXY0NHJEOXZOVXF5VFh6NWMwcjd6VGxmaDE4aWRveVVZR0g4aEY1MXBQNl9lZm9kbmFqQ3VZVkI0b2tjTW5UMCZ1c3FwPUNBYyc7XHJcblx0QElucHV0KCdpY29uLW9uZScpIGljb25PbmUgPSAnJztcclxuXHRASW5wdXQoJ2ljb24tdHdvJykgaWNvblR3byA9ICcnO1xyXG5cdEBJbnB1dCgnbXNnLXN0YXR1cycpIG1zZ1N0YXR1cztcclxuXHRASW5wdXQoJ2N1c3RvbWNsYXNzJykgY3VzdG9tY2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2N1c3RvbUltZ2NsYXNzJykgY3VzdG9tSW1nY2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2N1c3RvbS1pY29uY2xhc3MnKSBjdXN0b21JY29uY2xhc3MgPSAndGV4dC1jZW50ZXInO1xyXG5cdEBJbnB1dCgpIGJnQ29sb3IgPSAnJztcclxuXHJcblx0QElucHV0KCkgaW50ZXJlc3Q7XHJcblx0QElucHV0KCkgaW1hZ2VDb2xTaXplID0gXCJjb2wtc20tMSBwdC0xIHBsLTJcIjtcclxuXHRASW5wdXQoKSB0eHRjb2xzaXplID0gXCJjb2wtc20tNSBwbC1zbS01IHB0LTIgbXQtMVwiO1xyXG5cdEBJbnB1dCgpIHR4dHR3b2NvbHNpemUgPSBcImNvbC1zbS0yIHBsLWxnLTAgcHItbGctMiBwdC0yIG10LTFcIjtcclxuXHRASW5wdXQoKSB0eHR0aHJlZWNvbHNpemUgPSBcImNvbCBwdC0yIG10LTFcIjtcclxuXHRASW5wdXQoJ3RpdGxlLW9uZScpIHRpdGxlT25lID0gJ1RpdGxlIE9uZSc7XHJcblx0QElucHV0KCdpY29uLWluZm8tb25lJykgaWNvbk9uZUluZm8gPSAnaWNvbiBpbmZvIE9uZSc7XHJcblx0QElucHV0KCdpY29uLWluZm8tdHdvJykgaWNvblR3b0luZm8gPSAnaWNvbiBpbmZvIFR3byc7XHJcblx0QElucHV0KCd0aXRsZS1vbmUtY29sb3InKSB0aXRsZU9uZUNvbG9yID0gJ2JsYWNrJztcclxuXHRASW5wdXQoJ3RpdGxlLW9uZS13ZWlnaHQnKSB0aXRsZU9uZVdlaWdodCA9ICc2MDAnO1xyXG4gIEBJbnB1dCgndGl0bGUtb25lLXNpemUnKSB0aXRsZU9uZVNpemUgPSAnMTQnO1xyXG4gIEBJbnB1dCgndGl0bGUtb25lLWN1c3RvbWNsYXNzJykgdGl0bGVPbmVjdXN0b21jbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUnKSBjb250ZW50T25lID0gJyQxMDAnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUtY29sb3InKSBjb250ZW50T25lQ29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS13ZWlnaHQnKSBjb250ZW50T25lV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS1zaXplJykgY29udGVudE9uZVNpemUgPSAnMTQnO1xyXG4gIEBJbnB1dCgnY29udGVudC1vbmUtY3VzdG9tY2xhc3MnKSBjb250ZW50T25lY3VzdG9tY2xhc3MgPSAnJztcclxuXHJcblx0QElucHV0KCdjb250ZW50LXR3bycpIGNvbnRlbnRUd28gPSAnTi9BJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLWNvbG9yJykgY29udGVudFR3b0NvbG9yID0gJyMzZTNlM2UnO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28td2VpZ2h0JykgY29udGVudFR3b1dlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28tc2l6ZScpIGNvbnRlbnRUd29TaXplID0gJzE0JztcclxuICBASW5wdXQoJ2NvbnRlbnQtdHdvLWN1c3RvbWNsYXNzJykgY29udGVudFR3b2N1c3RvbWNsYXNzID0gJ3VzZXInO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3bycpIHN1YlRpdGxlVHdvID0gJ1NPTEQgQlknO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by1jb2xvcicpIHN1YlRpdGxlVHdvQ29sb3IgPSAnI2I2YjZiNic7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLXdlaWdodCcpIHN1YlRpdGxlVHdvV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLXNpemUnKSBzdWJUaXRsZVR3b1NpemUgPSAnMTInO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by1jdXN0b21jbGFzcycpIHN1YlRpdGxlVHdvY3VzdG9tY2xhc3MgPSAnJztcclxuXHRcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZScpIHN1YlRpdGxlVGhyZWUgPSAnVE9UQUwgUFJJQ0UnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLWNvbG9yJykgc3ViVGl0bGVUaHJlZWNvbG9yID0gJyNiNmI2YjYnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLXdlaWdodCcpIHN1YlRpdGxlVGhyZWVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZS1zaXplJykgc3ViVGl0bGVUaHJlZVNpemUgPSAnMTInO1xyXG4gIEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlY2xhc3MnKSBzdWJUaXRsZVRocmVlQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUnKSBjb250ZW50VGhyZWUgPSAnTi9BJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY29sb3InKSBjb250ZW50VGhyZWVDb2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtd2lkZ2V0JykgY29udGVudFRocmVlV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlLXNpemUnKSBjb250ZW50VGhyZWVTaXplID0gJzE0JztcclxuICBASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY3VzdG9tY2xhc3MnKSBjb250ZW50VGhyZWVjdXN0b21jbGFzcyA9ICcnO1xyXG5cdFxyXG5cdEBPdXRwdXQoKSB1c2VyQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdFxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19