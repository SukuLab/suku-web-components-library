/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuRatingCardLineComponent {
    constructor() {
        this.fullStars = 0;
        this.fullStarsArray = [];
        this.halfStar = 0;
        this.emptyStars = 0;
        this.emptyStarsArray = [];
        this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
        this.iconOne = '';
        this.iconTwo = '';
        this.customclass = '';
        this.customImgclass = 'img-res';
        this.customIconclass = 'text-center';
        this.bgColor = '';
        this.imageColSize = 'col-sm-1 p-0';
        this.txtcolsize = 'col-sm-3 col-xs-12 pl-lg-2 pr-2 pt-1 mt-1';
        this.txttwocolsize = 'col-sm-3 pt-2 mt-1';
        this.txtthreecolsize = 'col-sm-2 pt-2 mt-1';
        this.titleOne = 'Title One';
        this.titleOneColor = 'black';
        this.titleOneWeight = '600';
        this.titleOneSize = '14';
        this.titleOnecustomclass = '';
        this.ratingTitle = 'RATING RECEIVED';
        this.ratingtitleColor = '#b6b6b6';
        this.ratingtitleWeight = '500';
        this.ratingtitleSize = '12';
        this.ratingtitlecustomclass = '';
        this.contentOne = 'N/A';
        this.contentOneColor = '#3e3e3e';
        this.contentOneWeight = '500';
        this.contentOneSize = '14';
        this.contentOnecustomclass = '';
        this.contentTwo = 'N/A';
        this.contentTwoColor = '#3e3e3e';
        this.contentTwoWeight = '500';
        this.contentTwoSize = '14';
        this.contentTwocustomclass = '';
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
        this._rate = 0;
        this.action = new EventEmitter();
    }
    /**
     * @param {?} ratingValue
     * @return {?}
     */
    set ratingValue(ratingValue) {
        console.log('ra', this.ratingValue);
        this.fullStars = Math.round(ratingValue);
        this.fullStarsArray = Array(this.fullStars).fill(1);
        this.halfStar = this.fullStars < ratingValue ? 1 : 0;
        this.emptyStars = 5 - this.fullStars - this.halfStar;
        this.emptyStarsArray = Array(this.emptyStars).fill(1);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SukuRatingCardLineComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-rating-card-line',
                template: "<div class=\"col p-0\">\r\n  <div class=\"row card-line-bg p-3 m-3 {{customclass}}\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img [class]=\"customImgclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\r\n    </div>\r\n    <span class=\"col d-lg-flex d-md-flex p-0 mt-2 pt-1\">\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\r\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div class=\"col-sm-4 d-flex mt-2 pt-2 flex-column\" (click)=\"action.emit()\"  *ngIf=\"true\">\r\n      <h2 [style.font-size.px]=\"ratingtitleSize\" [class]=\"ratingtitlecustomclass\"\r\n        [style.font-weight]=\"ratingtitleWeight\" [style.color]=\"ratingtitleColor\">{{ratingTitle}}</h2>\r\n      <p class=\"mb-0\">\r\n        <span class=\"starSize\">\r\n          <div class=\"pl-1\">\r\n              <span class=\"fa fa-star fullStar f20\" *ngFor=\"let star of fullStarsArray\"> </span>\r\n              <span class=\"fa fa-star-half halfStarLeft f20\" *ngIf=\"halfStar == 1\"> </span>\r\n              <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight f20\" *ngIf=\"halfStar == 1\"> </span>\r\n              <span class=\"fa fa-star emptyStar f20\" *ngFor=\"let star of emptyStarsArray\"> </span>\r\n          </div>\r\n        </span>\r\n      </p>\r\n    </div>\r\n    <div [class]=\"txttwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"\r\n        [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\" [style.font-weight]=\"contentTwoWeight\"\r\n        [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtthreecolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"\r\n        [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"\r\n        [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n    </div>\r\n  </span>\r\n  </div>\r\n</div>",
                styles: ["h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}.starSize{font-size:20px!important}.img-res{width:100px;height:auto;max-width:100%;max-height:100%;padding:6px 5px}.emptyStar{color:#e1e1e1;margin-right:5px}.fullStar{color:#898989;margin-right:5px}.halfStarLeft{color:#898989;position:relative;left:1px}.halfStarRight{color:#e1e1e1;position:relative;right:1px}.f20{font-size:20px}"]
            }] }
];
/** @nocollapse */
SukuRatingCardLineComponent.ctorParameters = () => [];
SukuRatingCardLineComponent.propDecorators = {
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
    ratingTitle: [{ type: Input, args: ['rating-title',] }],
    ratingtitleColor: [{ type: Input, args: ['rating-title-color',] }],
    ratingtitleWeight: [{ type: Input, args: ['rating-title-weight',] }],
    ratingtitleSize: [{ type: Input, args: ['rating-title-size',] }],
    ratingtitlecustomclass: [{ type: Input, args: ['rating-title-customclass',] }],
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
    action: [{ type: Output }],
    customRatingclass: [{ type: Input }],
    ratingValue: [{ type: Input, args: ['rating-value',] }]
};
if (false) {
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.fullStars;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.fullStarsArray;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.halfStar;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.emptyStars;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.emptyStarsArray;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype._ratingValue;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.image;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.iconOne;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.iconTwo;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.msgStatus;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.customclass;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.customImgclass;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.customIconclass;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.bgColor;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.interest;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.imageColSize;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.txtcolsize;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.txttwocolsize;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.txtthreecolsize;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.titleOne;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.titleOneColor;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.titleOneWeight;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.titleOneSize;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.titleOnecustomclass;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.ratingTitle;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.ratingtitleColor;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.ratingtitleWeight;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.ratingtitleSize;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.ratingtitlecustomclass;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.contentOne;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.contentOneColor;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.contentOneWeight;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.contentOneSize;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.contentOnecustomclass;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.contentTwo;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.contentTwoColor;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.contentTwoWeight;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.contentTwoSize;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.contentTwocustomclass;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.subTitleTwo;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.subTitleTwoColor;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.subTitleTwoWeight;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.subTitleTwoSize;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.subTitleTwocustomclass;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.subTitleThree;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.subTitleThreecolor;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.subTitleThreeWeight;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.subTitleThreeSize;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.subTitleThreeClass;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.contentThree;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.contentThreeColor;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.contentThreeWeight;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.contentThreeSize;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.contentThreecustomclass;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.myHTML;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype._rate;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.action;
    /** @type {?} */
    SukuRatingCardLineComponent.prototype.customRatingclass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1yYXRpbmctY2FyZC1saW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXJhdGluZy1jYXJkLWxpbmUvc3VrdS1yYXRpbmctY2FyZC1saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0vRSxNQUFNLE9BQU8sMkJBQTJCO0lBcUV2QztRQXBFQSxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUdyQixVQUFLLEdBQUcsZ0pBQWdKLENBQUM7UUFDdEksWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFVixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNkLG1CQUFjLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLG9CQUFlLEdBQUcsYUFBYSxDQUFDO1FBQ2xELFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFYixpQkFBWSxHQUFHLGNBQWMsQ0FBQztRQUM5QixlQUFVLEdBQUcsMkNBQTJDLENBQUM7UUFDekQsa0JBQWEsR0FBRyxvQkFBb0IsQ0FBQztRQUNyQyxvQkFBZSxHQUFHLG9CQUFvQixDQUFDO1FBQzVCLGFBQVEsR0FBRyxXQUFXLENBQUM7UUFDakIsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFDdkIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDekIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDYix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDbEMsZ0JBQVcsR0FBRyxpQkFBaUIsQ0FBQztRQUMxQixxQkFBZ0Is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QUNwRCxzREFBMkQ7O0lBQzNELDhDQUFzQjs7SUFDdEIsK0NBQWtCOztJQUNsQixtREFBdUM7O0lBQ3ZDLGlEQUFrRTs7SUFDbEUsb0RBQThDOztJQUM5QyxzREFBZ0Q7O0lBQ2hELCtDQUEyQzs7SUFDM0Msb0RBQWtEOztJQUNsRCxxREFBa0Q7O0lBQ2xELG1EQUE2Qzs7SUFDN0MsMERBQXlEOztJQUN6RCxrREFBdUQ7O0lBQ3ZELHVEQUEwRDs7SUFDMUQsd0RBQXdEOztJQUN4RCxzREFBbUQ7O0lBQ25ELDZEQUErRDs7SUFDL0QsaURBQXlDOztJQUN6QyxzREFBd0Q7O0lBQ3hELHVEQUFzRDs7SUFDdEQscURBQWlEOztJQUNqRCw0REFBNkQ7O0lBQzdELGlEQUF5Qzs7SUFDekMsc0RBQXdEOztJQUN4RCx1REFBc0Q7O0lBQ3RELHFEQUFpRDs7SUFDakQsNERBQTZEOztJQUM3RCxrREFBZ0Q7O0lBQ2hELHVEQUEyRDs7SUFDM0Qsd0RBQXlEOztJQUN6RCxzREFBb0Q7O0lBQ3BELDZEQUFnRTs7SUFDaEUsb0RBQXdEOztJQUN4RCx5REFBK0Q7O0lBQy9ELDBEQUE2RDs7SUFDN0Qsd0RBQXdEOztJQUN4RCx5REFBdUQ7O0lBQ3ZELG1EQUE2Qzs7SUFDN0Msd0RBQTREOztJQUM1RCx5REFBMEQ7O0lBQzFELHVEQUFxRDs7SUFDckQsOERBQWlFOztJQUNqRSw2Q0FBTzs7SUFDUCw0Q0FBVTs7SUFDViw2Q0FBc0M7O0lBQ3RDLHdEQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LXJhdGluZy1jYXJkLWxpbmUnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXJhdGluZy1jYXJkLWxpbmUuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL3N1a3UtcmF0aW5nLWNhcmQtbGluZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1UmF0aW5nQ2FyZExpbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGZ1bGxTdGFycyA9IDA7XHJcblx0ZnVsbFN0YXJzQXJyYXkgPSBbXTtcclxuXHRoYWxmU3RhciA9IDA7XHJcblx0ZW1wdHlTdGFycyA9IDA7XHJcblx0ZW1wdHlTdGFyc0FycmF5ID0gW107XHJcblx0X3JhdGluZ1ZhbHVlO1xyXG5cdEBJbnB1dCgpXHJcblx0aW1hZ2UgPSAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMS5nc3RhdGljLmNvbS9zaG9wcGluZz9xPXRibjpBTmQ5R2NTVHF6NjRBMlhqNTRmNXY0NHJEOXZOVXF5VFh6NWMwcjd6VGxmaDE4aWRveVVZR0g4aEY1MXBQNl9lZm9kbmFqQ3VZVkI0b2tjTW5UMCZ1c3FwPUNBYyc7XHJcblx0QElucHV0KCdpY29uLW9uZScpIGljb25PbmUgPSAnJztcclxuXHRASW5wdXQoJ2ljb24tdHdvJykgaWNvblR3byA9ICcnO1xyXG5cdEBJbnB1dCgnbXNnLXN0YXR1cycpIG1zZ1N0YXR1cztcclxuXHRASW5wdXQoJ2N1c3RvbWNsYXNzJykgY3VzdG9tY2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2N1c3RvbUltZ2NsYXNzJykgY3VzdG9tSW1nY2xhc3MgPSAnaW1nLXJlcyc7XHJcblx0QElucHV0KCdjdXN0b20taWNvbmNsYXNzJykgY3VzdG9tSWNvbmNsYXNzID0gJ3RleHQtY2VudGVyJztcclxuXHRASW5wdXQoKSBiZ0NvbG9yID0gJyc7XHJcblx0QElucHV0KCkgaW50ZXJlc3Q7XHJcblx0QElucHV0KCkgaW1hZ2VDb2xTaXplID0gJ2NvbC1zbS0xIHAtMCc7XHJcblx0QElucHV0KCkgdHh0Y29sc2l6ZSA9ICdjb2wtc20tMyBjb2wteHMtMTIgcGwtbGctMiBwci0yIHB0LTEgbXQtMSc7XHJcblx0QElucHV0KCkgdHh0dHdvY29sc2l6ZSA9ICdjb2wtc20tMyBwdC0yIG10LTEnO1xyXG5cdEBJbnB1dCgpIHR4dHRocmVlY29sc2l6ZSA9ICdjb2wtc20tMiBwdC0yIG10LTEnO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lJykgdGl0bGVPbmUgPSAnVGl0bGUgT25lJztcclxuXHRASW5wdXQoJ3RpdGxlLW9uZS1jb2xvcicpIHRpdGxlT25lQ29sb3IgPSAnYmxhY2snO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lLXdlaWdodCcpIHRpdGxlT25lV2VpZ2h0ID0gJzYwMCc7XHJcblx0QElucHV0KCd0aXRsZS1vbmUtc2l6ZScpIHRpdGxlT25lU2l6ZSA9ICcxNCc7XHJcblx0QElucHV0KCd0aXRsZS1vbmUtY3VzdG9tY2xhc3MnKSB0aXRsZU9uZWN1c3RvbWNsYXNzID0gJyc7XHJcblx0QElucHV0KCdyYXRpbmctdGl0bGUnKSByYXRpbmdUaXRsZSA9ICdSQVRJTkcgUkVDRUlWRUQnO1xyXG5cdEBJbnB1dCgncmF0aW5nLXRpdGxlLWNvbG9yJykgcmF0aW5ndGl0bGVDb2xvciA9ICcjYjZiNmI2JztcclxuXHRASW5wdXQoJ3JhdGluZy10aXRsZS13ZWlnaHQnKSByYXRpbmd0aXRsZVdlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgncmF0aW5nLXRpdGxlLXNpemUnKSByYXRpbmd0aXRsZVNpemUgPSAnMTInO1xyXG5cdEBJbnB1dCgncmF0aW5nLXRpdGxlLWN1c3RvbWNsYXNzJykgcmF0aW5ndGl0bGVjdXN0b21jbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnY29udGVudC1vbmUnKSBjb250ZW50T25lID0gJ04vQSc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS1jb2xvcicpIGNvbnRlbnRPbmVDb2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLXdlaWdodCcpIGNvbnRlbnRPbmVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLXNpemUnKSBjb250ZW50T25lU2l6ZSA9ICcxNCc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS1jdXN0b21jbGFzcycpIGNvbnRlbnRPbmVjdXN0b21jbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28nKSBjb250ZW50VHdvID0gJ04vQSc7XHJcblx0QElucHV0KCdjb250ZW50LXR3by1jb2xvcicpIGNvbnRlbnRUd29Db2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLXdlaWdodCcpIGNvbnRlbnRUd29XZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLXNpemUnKSBjb250ZW50VHdvU2l6ZSA9ICcxNCc7XHJcblx0QElucHV0KCdjb250ZW50LXR3by1jdXN0b21jbGFzcycpIGNvbnRlbnRUd29jdXN0b21jbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3bycpIHN1YlRpdGxlVHdvID0gJ1NPTEQgQlknO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by1jb2xvcicpIHN1YlRpdGxlVHdvQ29sb3IgPSAnI2I2YjZiNic7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLXdlaWdodCcpIHN1YlRpdGxlVHdvV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLXNpemUnKSBzdWJUaXRsZVR3b1NpemUgPSAnMTInO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by1jdXN0b21jbGFzcycpIHN1YlRpdGxlVHdvY3VzdG9tY2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZScpIHN1YlRpdGxlVGhyZWUgPSAnVE9UQUwgUFJJQ0UnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLWNvbG9yJykgc3ViVGl0bGVUaHJlZWNvbG9yID0gJyNiNmI2YjYnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLXdlaWdodCcpIHN1YlRpdGxlVGhyZWVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZS1zaXplJykgc3ViVGl0bGVUaHJlZVNpemUgPSAnMTInO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlY2xhc3MnKSBzdWJUaXRsZVRocmVlQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUnKSBjb250ZW50VGhyZWUgPSAnTi9BJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY29sb3InKSBjb250ZW50VGhyZWVDb2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtd2lkZ2V0JykgY29udGVudFRocmVlV2VpZ2h0ID0gJzUwMCc7XHJcblx0QElucHV0KCdjb250ZW50LXRocmVlLXNpemUnKSBjb250ZW50VGhyZWVTaXplID0gJzE0JztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY3VzdG9tY2xhc3MnKSBjb250ZW50VGhyZWVjdXN0b21jbGFzcyA9ICcnO1xyXG5cdG15SFRNTDtcclxuXHRfcmF0ZSA9IDA7XHJcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRASW5wdXQoKSBjdXN0b21SYXRpbmdjbGFzcztcclxuXHRASW5wdXQoJ3JhdGluZy12YWx1ZScpXHJcblx0c2V0IHJhdGluZ1ZhbHVlKHJhdGluZ1ZhbHVlOiBudW1iZXIpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdyYScsIHRoaXMucmF0aW5nVmFsdWUpO1xyXG5cdFx0dGhpcy5mdWxsU3RhcnMgPSBNYXRoLnJvdW5kKHJhdGluZ1ZhbHVlKTtcclxuXHRcdHRoaXMuZnVsbFN0YXJzQXJyYXkgPSBBcnJheSh0aGlzLmZ1bGxTdGFycykuZmlsbCgxKTtcclxuXHRcdHRoaXMuaGFsZlN0YXIgPSB0aGlzLmZ1bGxTdGFycyA8IHJhdGluZ1ZhbHVlID8gMSA6IDA7XHJcblx0XHR0aGlzLmVtcHR5U3RhcnMgPSA1IC0gdGhpcy5mdWxsU3RhcnMgLSB0aGlzLmhhbGZTdGFyO1xyXG5cdFx0dGhpcy5lbXB0eVN0YXJzQXJyYXkgPSBBcnJheSh0aGlzLmVtcHR5U3RhcnMpLmZpbGwoMSk7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKCkgeyB9XHJcblx0bmdPbkluaXQoKSB7IH1cclxufVxyXG4iXX0=