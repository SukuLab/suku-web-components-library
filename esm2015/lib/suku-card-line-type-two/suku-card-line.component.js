/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuCardLineTypeTwoComponent {
    constructor() {
        this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
        this.bgColor = '';
        this.iconOne = 'suku-chat-read-icon';
        this.iconTwo = 'suku-chat-unread-icon';
        this.customClass = '';
        this.customImgclass = '';
        this.customIconClass = 'text-center';
        this.imageColSize = 'col-sm-1 pt-1 pl-2';
        this.iconOneId = 'iconOneId';
        this.iconTwoId = 'iconTwoId';
        this.txtcolsize = 'col-sm-5 pl-sm-5 pt-2 mt-1';
        this.txttwocolsize = 'col-sm-2 pl-lg-0 pr-lg-2 pt-2 mt-1';
        this.txtthreecolsize = 'col pt-2 mt-1';
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
                template: "<div class=\"col p-0\">\r\n  <div class=\"row card-line-bg p-3 m-2 {{customClass}}\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img [class]=\"customImgclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n      <span class=\"tipTool\">\r\n        <span class=\"tipTooltext\">\r\n          <span class=\"uncheckedTextContent\">{{iconOneInfo}}</span>\r\n        </span>\r\n        <img [class]=\"customIconClass\" [src]=\"iconOne\" [id]=\"iconOneId\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n      </span>\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n      <span class=\"tipTool\">\r\n        <span class=\"tipTooltext\">\r\n          <span class=\"uncheckedTextContent\">{{iconTwoInfo}}</span>\r\n        </span>\r\n        <img [class]=\"customIconClass\" [src]=\"iconTwo\" [id]=\"iconTwoId\" alt=\"card-img\" width=\"50px\" height=\"50px\">\r\n      </span>\r\n    </div>\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\r\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div [class]=\"txttwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"\r\n        [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" (click)=\"userAction.emit()\" [class]=\"contentTwocustomclass\"\r\n        [style.font-weight]=\"contentTwoWeight\" [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtthreecolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"\r\n        [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"\r\n        [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h2{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:var(--suku-text-label-one);word-break:break-word!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}.tipTool{position:relative;display:inline-block;width:35px;height:0;text-align:center;border-radius:15px;background-color:#d8d8d8a8 transparent;font-size:18px;color:#757575;font-weight:700;font-style:italic;font-stretch:normal;letter-spacing:.5px}.tipTool .tipTooltext{visibility:hidden;width:-webkit-max-content;width:-moz-max-content;width:max-content;background-color:#000000eb;text-align:left;border-radius:6px;padding:15px 18px;position:absolute;z-index:1;bottom:150%;left:70%;margin-left:-60px;font-style:normal;font-stretch:normal;font-size:13px;font-family:var(--suku-secondary-font);font-weight:500;line-height:1.45;letter-spacing:.4px;color:#b6b6b6}.tipTool .tipTooltext::after{content:\"\";position:absolute;top:100%;left:31.5%;margin-left:0;border-width:5px;border-style:solid;border-color:#191922 transparent transparent;font-style:normal;font-stretch:normal}.tipTool:hover .tipTooltext{visibility:visible}.user{cursor:pointer!important}.user:hover{color:#000!important;font-weight:700!important}"]
            }] }
];
/** @nocollapse */
SukuCardLineTypeTwoComponent.ctorParameters = () => [];
SukuCardLineTypeTwoComponent.propDecorators = {
    image: [{ type: Input }],
    bgColor: [{ type: Input }],
    iconOne: [{ type: Input, args: ['icon-one',] }],
    iconTwo: [{ type: Input, args: ['icon-two',] }],
    msgStatus: [{ type: Input, args: ['msg-status',] }],
    customClass: [{ type: Input, args: ['custom-class',] }],
    customImgclass: [{ type: Input, args: ['customImgclass',] }],
    customIconClass: [{ type: Input, args: ['custom-icon-class',] }],
    imageColSize: [{ type: Input, args: ['image-col-size',] }],
    iconOneId: [{ type: Input, args: ['icon-one-id',] }],
    iconTwoId: [{ type: Input, args: ['icon-two-id',] }],
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
    SukuCardLineTypeTwoComponent.prototype.bgColor;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.iconOne;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.iconTwo;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.msgStatus;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.customClass;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.customImgclass;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.customIconClass;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.imageColSize;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.iconOneId;
    /** @type {?} */
    SukuCardLineTypeTwoComponent.prototype.iconTwoId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jYXJkLWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY2FyZC1saW5lLXR5cGUtdHdvL3N1a3UtY2FyZC1saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sNEJBQTRCO0lBb0R4QztRQW5EUyxVQUFLLEdBQUcsZ0pBQWdKLENBQUM7UUFDekosWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNILFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNoQyxZQUFPLEdBQUcsdUJBQXVCLENBQUM7UUFFOUIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDZixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNqQixvQkFBZSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxpQkFBWSxHQUFHLG9CQUFvQixDQUFDO1FBQ3ZDLGNBQVMsR0FBRyxXQUFXLENBQUM7UUFDeEIsY0FBUyxHQUFHLFdBQVcsQ0FBQztRQUNyQyxlQUFVLEdBQUcsNEJBQTRCLENBQUM7UUFDMUMsa0JBQWEsR0FBRyxvQ0FBb0MsQ0FBQztRQUNyRCxvQkFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QixhQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsZUFBZSxDQUFDO1FBQzlCLGdCQUFXLEdBQUcsZUFBZSxDQUFDO1FBQzVCLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ2Isd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ25DLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFDZCxvQkFBZSxHQUFHLFNBQVMsQ0FBQztRQUMzQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDM0IsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDZiwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFFdkMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNiLG9CQUFlLEdBQUcsU0FBUyxDQUFDO1FBQzNCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUMzQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUNmLDBCQUFxQixHQUFHLE1BQU0sQ0FBQztRQUN6QyxnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUNsQixxQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDNUIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzVCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUV0QyxrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUN4Qix1QkFBa0IsR0FBRyxTQUFTLENBQUM7UUFDOUIsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQzlCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6Qix1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDL0IsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDZixzQkFBaUIsR0FBRyxTQUFTLENBQUM7UUFDN0IsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzdCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUNqQiw0QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFFdkQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFMUIsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBNURELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUseUJBQXlCO2dCQUNuQywwMUVBQThDOzthQUU5Qzs7Ozs7b0JBRUMsS0FBSztzQkFDTCxLQUFLO3NCQUNMLEtBQUssU0FBQyxVQUFVO3NCQUNoQixLQUFLLFNBQUMsVUFBVTt3QkFDaEIsS0FBSyxTQUFDLFlBQVk7MEJBQ2xCLEtBQUssU0FBQyxjQUFjOzZCQUNwQixLQUFLLFNBQUMsZ0JBQWdCOzhCQUN0QixLQUFLLFNBQUMsbUJBQW1COzJCQUN6QixLQUFLLFNBQUMsZ0JBQWdCO3dCQUN0QixLQUFLLFNBQUMsYUFBYTt3QkFDbkIsS0FBSyxTQUFDLGFBQWE7eUJBQ25CLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLO3VCQUNMLEtBQUssU0FBQyxXQUFXOzBCQUNqQixLQUFLLFNBQUMsZUFBZTswQkFDckIsS0FBSyxTQUFDLGVBQWU7NEJBQ3JCLEtBQUssU0FBQyxpQkFBaUI7NkJBQ3ZCLEtBQUssU0FBQyxrQkFBa0I7MkJBQ3hCLEtBQUssU0FBQyxnQkFBZ0I7a0NBQ3RCLEtBQUssU0FBQyx1QkFBdUI7eUJBQzdCLEtBQUssU0FBQyxhQUFhOzhCQUNuQixLQUFLLFNBQUMsbUJBQW1COytCQUN6QixLQUFLLFNBQUMsb0JBQW9COzZCQUMxQixLQUFLLFNBQUMsa0JBQWtCO29DQUN4QixLQUFLLFNBQUMseUJBQXlCO3lCQUUvQixLQUFLLFNBQUMsYUFBYTs4QkFDbkIsS0FBSyxTQUFDLG1CQUFtQjsrQkFDekIsS0FBSyxTQUFDLG9CQUFvQjs2QkFDMUIsS0FBSyxTQUFDLGtCQUFrQjtvQ0FDeEIsS0FBSyxTQUFDLHlCQUF5QjswQkFDL0IsS0FBSyxTQUFDLGVBQWU7K0JBQ3JCLEtBQUssU0FBQyxxQkFBcUI7Z0NBQzNCLEtBQUssU0FBQyxzQkFBc0I7OEJBQzVCLEtBQUssU0FBQyxvQkFBb0I7cUNBQzFCLEtBQUssU0FBQywyQkFBMkI7NEJBRWpDLEtBQUssU0FBQyxpQkFBaUI7aUNBQ3ZCLEtBQUssU0FBQyx1QkFBdUI7a0NBQzdCLEtBQUssU0FBQyx3QkFBd0I7Z0NBQzlCLEtBQUssU0FBQyxzQkFBc0I7aUNBQzVCLEtBQUssU0FBQyxzQkFBc0I7MkJBQzVCLEtBQUssU0FBQyxlQUFlO2dDQUNyQixLQUFLLFNBQUMscUJBQXFCO2lDQUMzQixLQUFLLFNBQUMsc0JBQXNCOytCQUM1QixLQUFLLFNBQUMsb0JBQW9CO3NDQUMxQixLQUFLLFNBQUMsMkJBQTJCO3lCQUVqQyxNQUFNOzs7O0lBakRQLDZDQUFrSzs7SUFDbEssK0NBQXNCOztJQUN0QiwrQ0FBbUQ7O0lBQ25ELCtDQUFxRDs7SUFDckQsaURBQStCOztJQUMvQixtREFBd0M7O0lBQ3hDLHNEQUE2Qzs7SUFDN0MsdURBQTREOztJQUM1RCxvREFBNkQ7O0lBQzdELGlEQUE4Qzs7SUFDOUMsaURBQThDOztJQUM5QyxrREFBbUQ7O0lBQ25ELHFEQUE4RDs7SUFDOUQsdURBQTJDOztJQUMzQyxnREFBMkM7O0lBQzNDLG1EQUFzRDs7SUFDdEQsbURBQXNEOztJQUN0RCxxREFBa0Q7O0lBQ2xELHNEQUFrRDs7SUFDbEQsb0RBQTZDOztJQUM3QywyREFBeUQ7O0lBQ3pELGtEQUEwQzs7SUFDMUMsdURBQXdEOztJQUN4RCx3REFBc0Q7O0lBQ3RELHNEQUFpRDs7SUFDakQsNkRBQTZEOztJQUU3RCxrREFBeUM7O0lBQ3pDLHVEQUF3RDs7SUFDeEQsd0RBQXNEOztJQUN0RCxzREFBaUQ7O0lBQ2pELDZEQUFpRTs7SUFDakUsbURBQWdEOztJQUNoRCx3REFBMkQ7O0lBQzNELHlEQUF5RDs7SUFDekQsdURBQW9EOztJQUNwRCw4REFBZ0U7O0lBRWhFLHFEQUF3RDs7SUFDeEQsMERBQStEOztJQUMvRCwyREFBNkQ7O0lBQzdELHlEQUF3RDs7SUFDeEQsMERBQXVEOztJQUN2RCxvREFBNkM7O0lBQzdDLHlEQUE0RDs7SUFDNUQsMERBQTBEOztJQUMxRCx3REFBcUQ7O0lBQ3JELCtEQUFpRTs7SUFFakUsa0RBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LWNhcmQtbGluZS10eXBlLXR3bycsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtY2FyZC1saW5lLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LWNhcmQtbGluZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1Q2FyZExpbmVUeXBlVHdvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBpbWFnZSA9ICdodHRwczovL2VuY3J5cHRlZC10Ym4xLmdzdGF0aWMuY29tL3Nob3BwaW5nP3E9dGJuOkFOZDlHY1NUcXo2NEEyWGo1NGY1djQ0ckQ5dk5VcXlUWHo1YzByN3pUbGZoMThpZG95VVlHSDhoRjUxcFA2X2Vmb2RuYWpDdVlWQjRva2NNblQwJnVzcXA9Q0FjJztcclxuXHRASW5wdXQoKSBiZ0NvbG9yID0gJyc7XHJcblx0QElucHV0KCdpY29uLW9uZScpIGljb25PbmUgPSAnc3VrdS1jaGF0LXJlYWQtaWNvbic7XHJcblx0QElucHV0KCdpY29uLXR3bycpIGljb25Ud28gPSAnc3VrdS1jaGF0LXVucmVhZC1pY29uJztcclxuXHRASW5wdXQoJ21zZy1zdGF0dXMnKSBtc2dTdGF0dXM7XHJcblx0QElucHV0KCdjdXN0b20tY2xhc3MnKSBjdXN0b21DbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnY3VzdG9tSW1nY2xhc3MnKSBjdXN0b21JbWdjbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnY3VzdG9tLWljb24tY2xhc3MnKSBjdXN0b21JY29uQ2xhc3MgPSAndGV4dC1jZW50ZXInO1xyXG5cdEBJbnB1dCgnaW1hZ2UtY29sLXNpemUnKSBpbWFnZUNvbFNpemUgPSAnY29sLXNtLTEgcHQtMSBwbC0yJztcclxuXHRASW5wdXQoJ2ljb24tb25lLWlkJykgaWNvbk9uZUlkID0gJ2ljb25PbmVJZCc7XHJcblx0QElucHV0KCdpY29uLXR3by1pZCcpIGljb25Ud29JZCA9ICdpY29uVHdvSWQnO1xyXG5cdEBJbnB1dCgpIHR4dGNvbHNpemUgPSAnY29sLXNtLTUgcGwtc20tNSBwdC0yIG10LTEnO1xyXG5cdEBJbnB1dCgpIHR4dHR3b2NvbHNpemUgPSAnY29sLXNtLTIgcGwtbGctMCBwci1sZy0yIHB0LTIgbXQtMSc7XHJcblx0QElucHV0KCkgdHh0dGhyZWVjb2xzaXplID0gJ2NvbCBwdC0yIG10LTEnO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lJykgdGl0bGVPbmUgPSAnVGl0bGUgT25lJztcclxuXHRASW5wdXQoJ2ljb24taW5mby1vbmUnKSBpY29uT25lSW5mbyA9ICdpY29uIGluZm8gT25lJztcclxuXHRASW5wdXQoJ2ljb24taW5mby10d28nKSBpY29uVHdvSW5mbyA9ICdpY29uIGluZm8gVHdvJztcclxuXHRASW5wdXQoJ3RpdGxlLW9uZS1jb2xvcicpIHRpdGxlT25lQ29sb3IgPSAnYmxhY2snO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lLXdlaWdodCcpIHRpdGxlT25lV2VpZ2h0ID0gJzYwMCc7XHJcblx0QElucHV0KCd0aXRsZS1vbmUtc2l6ZScpIHRpdGxlT25lU2l6ZSA9ICcxNCc7XHJcblx0QElucHV0KCd0aXRsZS1vbmUtY3VzdG9tY2xhc3MnKSB0aXRsZU9uZWN1c3RvbWNsYXNzID0gJyc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZScpIGNvbnRlbnRPbmUgPSAnJDEwMCc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS1jb2xvcicpIGNvbnRlbnRPbmVDb2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLXdlaWdodCcpIGNvbnRlbnRPbmVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLXNpemUnKSBjb250ZW50T25lU2l6ZSA9ICcxNCc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS1jdXN0b21jbGFzcycpIGNvbnRlbnRPbmVjdXN0b21jbGFzcyA9ICcnO1xyXG5cclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvJykgY29udGVudFR3byA9ICdOL0EnO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28tY29sb3InKSBjb250ZW50VHdvQ29sb3IgPSAnIzNlM2UzZSc7XHJcblx0QElucHV0KCdjb250ZW50LXR3by13ZWlnaHQnKSBjb250ZW50VHdvV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCdjb250ZW50LXR3by1zaXplJykgY29udGVudFR3b1NpemUgPSAnMTQnO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28tY3VzdG9tY2xhc3MnKSBjb250ZW50VHdvY3VzdG9tY2xhc3MgPSAndXNlcic7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvJykgc3ViVGl0bGVUd28gPSAnU09MRCBCWSc7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLWNvbG9yJykgc3ViVGl0bGVUd29Db2xvciA9ICcjYjZiNmI2JztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28td2VpZ2h0Jykgc3ViVGl0bGVUd29XZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28tc2l6ZScpIHN1YlRpdGxlVHdvU2l6ZSA9ICcxMic7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLWN1c3RvbWNsYXNzJykgc3ViVGl0bGVUd29jdXN0b21jbGFzcyA9ICcnO1xyXG5cclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZScpIHN1YlRpdGxlVGhyZWUgPSAnVE9UQUwgUFJJQ0UnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLWNvbG9yJykgc3ViVGl0bGVUaHJlZWNvbG9yID0gJyNiNmI2YjYnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLXdlaWdodCcpIHN1YlRpdGxlVGhyZWVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZS1zaXplJykgc3ViVGl0bGVUaHJlZVNpemUgPSAnMTInO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlY2xhc3MnKSBzdWJUaXRsZVRocmVlQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUnKSBjb250ZW50VGhyZWUgPSAnTi9BJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY29sb3InKSBjb250ZW50VGhyZWVDb2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtd2lkZ2V0JykgY29udGVudFRocmVlV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlLXNpemUnKSBjb250ZW50VGhyZWVTaXplID0gJzE0JztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY3VzdG9tY2xhc3MnKSBjb250ZW50VGhyZWVjdXN0b21jbGFzcyA9ICcnO1xyXG5cclxuXHRAT3V0cHV0KCkgdXNlckFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=