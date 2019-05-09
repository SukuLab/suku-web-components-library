/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuCardLineTypeTwoComponent {
    constructor() {
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
    ngOnInit() {
    }
}
SukuCardLineTypeTwoComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-card-line-type-two',
                template: "<div class=\"col p-0\">\r\n  <div class=\"row card-line-bg p-3 m-2 {{customclass}}\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img [class]=\"customImgclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n      <span class=\"tipTool\">\r\n        <span class=\"tipTooltext\">\r\n          <span class=\"uncheckedTextContent\">{{iconOneInfo}}</span>\r\n        </span>\r\n        <img [class]=\"customIconclass\" [src]=\"iconOne\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n      </span>\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n        <span class=\"tipTool\">\r\n          <span class=\"tipTooltext\">\r\n            <span class=\"uncheckedTextContent\">{{iconTwoInfo}}</span>\r\n          </span>\r\n          <img [class]=\"customIconclass\" src=\"{{iconTwo}}\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n        </span>\r\n    </div>\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\r\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div [class]=\"txttwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"\r\n        [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" (click)=\"userAction.emit()\" [class]=\"contentTwocustomclass\" [style.font-weight]=\"contentTwoWeight\"\r\n        [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtthreecolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"\r\n        [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"\r\n        [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-word!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}.tipTool{position:relative;display:inline-block;width:35px;height:0;text-align:center;border-radius:15px;background-color:#d8d8d8a8 transparent;font-size:18px;color:#757575;font-weight:700;font-style:italic;font-stretch:normal;letter-spacing:.5px}.tipTool .tipTooltext{visibility:hidden;width:200px;background-color:#000000eb;text-align:left;border-radius:6px;padding:15px 18px;position:absolute;z-index:1;bottom:150%;left:70%;margin-left:-60px;font-style:normal;font-stretch:normal;font-size:13px;font-family:\"Encode Sans\",sans-serif;font-weight:500;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.tipTool .tipTooltext::after{content:\"\";position:absolute;top:100%;left:25.5%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#191922 transparent transparent;font-style:normal;font-stretch:normal}.tipTool:hover .tipTooltext{visibility:visible}.user{cursor:pointer!important}.user:hover{color:#000!important;font-weight:700!important}"]
            }] }
];
/** @nocollapse */
SukuCardLineTypeTwoComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jYXJkLWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY2FyZC1saW5lLXR5cGUtdHdvL3N1a3UtY2FyZC1saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sNEJBQTRCO0lBb0R2QztRQW5EUyxVQUFLLEdBQUcsZ0pBQWdKLENBQUM7UUFDaEosWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFVixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNkLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLG9CQUFlLEdBQUcsYUFBYSxDQUFDO1FBQ2xELFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHYixpQkFBWSxHQUFHLG9CQUFvQixDQUFDO1FBQ3BDLGVBQVUsR0FBRyw0QkFBNEIsQ0FBQztRQUMxQyxrQkFBYSxHQUFHLG9DQUFvQyxDQUFDO1FBQ3JELG9CQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZCLGFBQVEsR0FBRyxXQUFXLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxlQUFlLENBQUM7UUFDOUIsZ0JBQVcsR0FBRyxlQUFlLENBQUM7UUFDNUIsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFDdkIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDeEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDYix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDcEMsZUFBVSxHQUFHLE1BQU0sQ0FBQztRQUNkLG9CQUFlLEdBQUcsU0FBUyxDQUFDO1FBQzNCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUMzQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUNkLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUV4QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2Isb0JBQWUsR0FBRyxTQUFTLENBQUM7UUFDM0IscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ2QsMEJBQXFCLEdBQUcsTUFBTSxDQUFDO1FBQzFDLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLHFCQUFnQixHQUFHLFNBQVMsQ0FBQztRQUM1QixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDNUIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDaEIsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBRXRDLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ3hCLHVCQUFrQixHQUFHLFNBQVMsQ0FBQztRQUM5Qix3QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDOUIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUNoQyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNmLHNCQUFpQixHQUFHLFNBQVMsQ0FBQztRQUM3Qix1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDN0IscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLDRCQUF1QixHQUFHLEVBQUUsQ0FBQztRQUV4RCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV6QixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUE1REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLGswRUFBOEM7O2FBRS9DOzs7OztvQkFFRSxLQUFLO3NCQUNOLEtBQUssU0FBQyxVQUFVO3NCQUNoQixLQUFLLFNBQUMsVUFBVTt3QkFDaEIsS0FBSyxTQUFDLFlBQVk7MEJBQ2xCLEtBQUssU0FBQyxhQUFhOzZCQUNuQixLQUFLLFNBQUMsZ0JBQWdCOzhCQUN0QixLQUFLLFNBQUMsa0JBQWtCO3NCQUN4QixLQUFLO3VCQUVMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzt1QkFDTCxLQUFLLFNBQUMsV0FBVzswQkFDakIsS0FBSyxTQUFDLGVBQWU7MEJBQ3JCLEtBQUssU0FBQyxlQUFlOzRCQUNyQixLQUFLLFNBQUMsaUJBQWlCOzZCQUN2QixLQUFLLFNBQUMsa0JBQWtCOzJCQUN2QixLQUFLLFNBQUMsZ0JBQWdCO2tDQUN0QixLQUFLLFNBQUMsdUJBQXVCO3lCQUM5QixLQUFLLFNBQUMsYUFBYTs4QkFDbkIsS0FBSyxTQUFDLG1CQUFtQjsrQkFDekIsS0FBSyxTQUFDLG9CQUFvQjs2QkFDMUIsS0FBSyxTQUFDLGtCQUFrQjtvQ0FDdkIsS0FBSyxTQUFDLHlCQUF5Qjt5QkFFaEMsS0FBSyxTQUFDLGFBQWE7OEJBQ25CLEtBQUssU0FBQyxtQkFBbUI7K0JBQ3pCLEtBQUssU0FBQyxvQkFBb0I7NkJBQzFCLEtBQUssU0FBQyxrQkFBa0I7b0NBQ3ZCLEtBQUssU0FBQyx5QkFBeUI7MEJBQ2hDLEtBQUssU0FBQyxlQUFlOytCQUNyQixLQUFLLFNBQUMscUJBQXFCO2dDQUMzQixLQUFLLFNBQUMsc0JBQXNCOzhCQUM1QixLQUFLLFNBQUMsb0JBQW9CO3FDQUMxQixLQUFLLFNBQUMsMkJBQTJCOzRCQUVqQyxLQUFLLFNBQUMsaUJBQWlCO2lDQUN2QixLQUFLLFNBQUMsdUJBQXVCO2tDQUM3QixLQUFLLFNBQUMsd0JBQXdCO2dDQUM5QixLQUFLLFNBQUMsc0JBQXNCO2lDQUMzQixLQUFLLFNBQUMsc0JBQXNCOzJCQUM3QixLQUFLLFNBQUMsZUFBZTtnQ0FDckIsS0FBSyxTQUFDLHFCQUFxQjtpQ0FDM0IsS0FBSyxTQUFDLHNCQUFzQjsrQkFDNUIsS0FBSyxTQUFDLG9CQUFvQjtzQ0FDekIsS0FBSyxTQUFDLDJCQUEyQjt5QkFFbEMsTUFBTTs7OztJQWpETiw2Q0FBa0s7O0lBQ25LLCtDQUFnQzs7SUFDaEMsK0NBQWdDOztJQUNoQyxpREFBK0I7O0lBQy9CLG1EQUF1Qzs7SUFDdkMsc0RBQTZDOztJQUM3Qyx1REFBMkQ7O0lBQzNELCtDQUFzQjs7SUFFdEIsZ0RBQWtCOztJQUNsQixvREFBNkM7O0lBQzdDLGtEQUFtRDs7SUFDbkQscURBQThEOztJQUM5RCx1REFBMkM7O0lBQzNDLGdEQUEyQzs7SUFDM0MsbURBQXNEOztJQUN0RCxtREFBc0Q7O0lBQ3RELHFEQUFrRDs7SUFDbEQsc0RBQWtEOztJQUNqRCxvREFBNkM7O0lBQzdDLDJEQUF5RDs7SUFDMUQsa0RBQTBDOztJQUMxQyx1REFBd0Q7O0lBQ3hELHdEQUFzRDs7SUFDdEQsc0RBQWlEOztJQUNoRCw2REFBNkQ7O0lBRTlELGtEQUF5Qzs7SUFDekMsdURBQXdEOztJQUN4RCx3REFBc0Q7O0lBQ3RELHNEQUFpRDs7SUFDaEQsNkRBQWlFOztJQUNsRSxtREFBZ0Q7O0lBQ2hELHdEQUEyRDs7SUFDM0QseURBQXlEOztJQUN6RCx1REFBb0Q7O0lBQ3BELDhEQUFnRTs7SUFFaEUscURBQXdEOztJQUN4RCwwREFBK0Q7O0lBQy9ELDJEQUE2RDs7SUFDN0QseURBQXdEOztJQUN2RCwwREFBdUQ7O0lBQ3hELG9EQUE2Qzs7SUFDN0MseURBQTREOztJQUM1RCwwREFBMEQ7O0lBQzFELHdEQUFxRDs7SUFDcEQsK0RBQWlFOztJQUVsRSxrREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtY2FyZC1saW5lLXR5cGUtdHdvJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1jYXJkLWxpbmUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtY2FyZC1saW5lLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VDYXJkTGluZVR5cGVUd29Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGltYWdlID0gJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjEuZ3N0YXRpYy5jb20vc2hvcHBpbmc/cT10Ym46QU5kOUdjU1RxejY0QTJYajU0ZjV2NDRyRDl2TlVxeVRYejVjMHI3elRsZmgxOGlkb3lVWUdIOGhGNTFwUDZfZWZvZG5hakN1WVZCNG9rY01uVDAmdXNxcD1DQWMnO1xyXG5cdEBJbnB1dCgnaWNvbi1vbmUnKSBpY29uT25lID0gJyc7XHJcblx0QElucHV0KCdpY29uLXR3bycpIGljb25Ud28gPSAnJztcclxuXHRASW5wdXQoJ21zZy1zdGF0dXMnKSBtc2dTdGF0dXM7XHJcblx0QElucHV0KCdjdXN0b21jbGFzcycpIGN1c3RvbWNsYXNzID0gJyc7XHJcblx0QElucHV0KCdjdXN0b21JbWdjbGFzcycpIGN1c3RvbUltZ2NsYXNzID0gJyc7XHJcblx0QElucHV0KCdjdXN0b20taWNvbmNsYXNzJykgY3VzdG9tSWNvbmNsYXNzID0gJ3RleHQtY2VudGVyJztcclxuXHRASW5wdXQoKSBiZ0NvbG9yID0gJyc7XHJcblxyXG5cdEBJbnB1dCgpIGludGVyZXN0O1xyXG5cdEBJbnB1dCgpIGltYWdlQ29sU2l6ZSA9IFwiY29sLXNtLTEgcHQtMSBwbC0yXCI7XHJcblx0QElucHV0KCkgdHh0Y29sc2l6ZSA9IFwiY29sLXNtLTUgcGwtc20tNSBwdC0yIG10LTFcIjtcclxuXHRASW5wdXQoKSB0eHR0d29jb2xzaXplID0gXCJjb2wtc20tMiBwbC1sZy0wIHByLWxnLTIgcHQtMiBtdC0xXCI7XHJcblx0QElucHV0KCkgdHh0dGhyZWVjb2xzaXplID0gXCJjb2wgcHQtMiBtdC0xXCI7XHJcblx0QElucHV0KCd0aXRsZS1vbmUnKSB0aXRsZU9uZSA9ICdUaXRsZSBPbmUnO1xyXG5cdEBJbnB1dCgnaWNvbi1pbmZvLW9uZScpIGljb25PbmVJbmZvID0gJ2ljb24gaW5mbyBPbmUnO1xyXG5cdEBJbnB1dCgnaWNvbi1pbmZvLXR3bycpIGljb25Ud29JbmZvID0gJ2ljb24gaW5mbyBUd28nO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lLWNvbG9yJykgdGl0bGVPbmVDb2xvciA9ICdibGFjayc7XHJcblx0QElucHV0KCd0aXRsZS1vbmUtd2VpZ2h0JykgdGl0bGVPbmVXZWlnaHQgPSAnNjAwJztcclxuICBASW5wdXQoJ3RpdGxlLW9uZS1zaXplJykgdGl0bGVPbmVTaXplID0gJzE0JztcclxuICBASW5wdXQoJ3RpdGxlLW9uZS1jdXN0b21jbGFzcycpIHRpdGxlT25lY3VzdG9tY2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lJykgY29udGVudE9uZSA9ICckMTAwJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLWNvbG9yJykgY29udGVudE9uZUNvbG9yID0gJyMzZTNlM2UnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUtd2VpZ2h0JykgY29udGVudE9uZVdlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUtc2l6ZScpIGNvbnRlbnRPbmVTaXplID0gJzE0JztcclxuICBASW5wdXQoJ2NvbnRlbnQtb25lLWN1c3RvbWNsYXNzJykgY29udGVudE9uZWN1c3RvbWNsYXNzID0gJyc7XHJcblxyXG5cdEBJbnB1dCgnY29udGVudC10d28nKSBjb250ZW50VHdvID0gJ04vQSc7XHJcblx0QElucHV0KCdjb250ZW50LXR3by1jb2xvcicpIGNvbnRlbnRUd29Db2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLXdlaWdodCcpIGNvbnRlbnRUd29XZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLXNpemUnKSBjb250ZW50VHdvU2l6ZSA9ICcxNCc7XHJcbiAgQElucHV0KCdjb250ZW50LXR3by1jdXN0b21jbGFzcycpIGNvbnRlbnRUd29jdXN0b21jbGFzcyA9ICd1c2VyJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28nKSBzdWJUaXRsZVR3byA9ICdTT0xEIEJZJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28tY29sb3InKSBzdWJUaXRsZVR3b0NvbG9yID0gJyNiNmI2YjYnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by13ZWlnaHQnKSBzdWJUaXRsZVR3b1dlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by1zaXplJykgc3ViVGl0bGVUd29TaXplID0gJzEyJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28tY3VzdG9tY2xhc3MnKSBzdWJUaXRsZVR3b2N1c3RvbWNsYXNzID0gJyc7XHJcblx0XHJcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUnKSBzdWJUaXRsZVRocmVlID0gJ1RPVEFMIFBSSUNFJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZS1jb2xvcicpIHN1YlRpdGxlVGhyZWVjb2xvciA9ICcjYjZiNmI2JztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZS13ZWlnaHQnKSBzdWJUaXRsZVRocmVlV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUtc2l6ZScpIHN1YlRpdGxlVGhyZWVTaXplID0gJzEyJztcclxuICBASW5wdXQoJ3N1Yi10aXRsZS10aHJlZWNsYXNzJykgc3ViVGl0bGVUaHJlZUNsYXNzID0gJyc7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlJykgY29udGVudFRocmVlID0gJ04vQSc7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlLWNvbG9yJykgY29udGVudFRocmVlQ29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlLXdpZGdldCcpIGNvbnRlbnRUaHJlZVdlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZS1zaXplJykgY29udGVudFRocmVlU2l6ZSA9ICcxNCc7XHJcbiAgQElucHV0KCdjb250ZW50LXRocmVlLWN1c3RvbWNsYXNzJykgY29udGVudFRocmVlY3VzdG9tY2xhc3MgPSAnJztcclxuXHRcclxuXHRAT3V0cHV0KCkgdXNlckFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==