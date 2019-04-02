/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuRatingCardLineComponent {
    constructor() {
        this.image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTqz64A2Xj54f5v44rD9vNUqyTXz5c0r7zTlfh18idoyUYGH8hF51pP6_efodnajCuYVB4okcMnT0&usqp=CAc';
        this.iconOne = '';
        this.iconTwo = '';
        this.customclass = '';
        this.customImgclass = 'img-res';
        this.customIconclass = 'text-center';
        this.bgColor = '';
        this.imageColSize = 'col-sm-1 p-0';
        this.txtcolsize = 'col-sm-3 col-xs-12 pl-lg-2 pr-2 pt-1 mt-1';
        this.txttwocolsize = 'col-sm-3 pt-2 pl-lg-2 pr-lg-2 mt-1';
        this.txtthreecolsize = 'col-sm-3 pt-2 mt-1';
        this.titleOne = 'Title One';
        this.titleOneColor = 'black';
        this.titleOneWeight = '600';
        this.titleOneSize = '14';
        this.titleOnecustomclass = '';
        this.ratingTitle = 'TRANSACTION RATING';
        this.ratingtitleColor = '#b6b6b6';
        this.ratingtitleWeight = '500';
        this.ratingtitleSize = '12';
        this.ratingtitlecustomclass = '';
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
        this._rate = 0;
        this.action = new EventEmitter();
    }
    /**
     * @param {?} ratingValue
     * @return {?}
     */
    set ratingValue(ratingValue) {
        this._rate = ratingValue;
        console.log('', this._rate);
        this.callOfStarts(this._rate);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    callOfStarts(e) {
        switch (true) {
            case e == 0:
                this.myHTML = `
      <span class="fa fa-star-o "></span>
      <span class="fa fa-star-o "></span>
      <span class="fa fa-star-o "></span>
      <span class="fa fa-star-o "></span>
      <span class="fa fa-star-o "></span>
      </div>`;
                break;
            case e <= 0.5:
                this.myHTML = `
      <span class="fa fa-star-half-empty "></span>
      <span class="fa fa-star-o "></span>
      <span class="fa fa-star-o "></span>
      <span class="fa fa-star-o "></span>
      <span class="fa fa-star-o "></span>
      </div>`;
                break;
            case e > 0.5 && e <= 1:
                this.myHTML = `
      <span class="fa fa-star "></span>
      <span class="fa fa-star-o "></span>
      <span class="fa fa-star-o "></span>
      <span class="fa fa-star-o "></span>
      <span class="fa fa-star-o "></span> </div>`;
                break;
            case e <= 1.5:
                this.myHTML = `
      <span class="fa fa-star "></span>
      <span class="fa fa-star-half-empty "></span>
      <span class="fa fa-star-o "></span>
      <span class="fa fa-star-o "></span>
      <span class="fa fa-star-o "></span> </div>`;
                break;
            case e > 1.5 && e <= 2:
                this.myHTML = `
      <span class="fa fa-star "></span>
      <span class="fa fa-star "></span>
      <span class="fa fa-star-o "></span>
      <span class="fa fa-star-o "></span>
      <span class="fa fa-star-o "></span> </div>`;
                break;
            case e <= 2.5:
                this.myHTML = `
      <span class="fa fa-star "></span>
      <span class="fa fa-star "></span>
      <span class="fa fa-star-half-empty "></span>
      <span class="fa fa-star-o "></span>
      <span class="fa fa-star-o "></span> </div>`;
                break;
            case e > 2.5 && e <= 3:
                this.myHTML = `
      <span class="fa fa-star "></span>
      <span class="fa fa-star "></span>
      <span class="fa fa-star "></span>
      <span class="fa fa-star-o "></span>
      <span class="fa fa-star-o "></span> </div>`;
                break;
            case e <= 3.5:
                this.myHTML = `
      <span class="fa fa-star "></span>
      <span class="fa fa-star "></span>
      <span class="fa fa-star "></span>
      <span class="fa fa-star-half-empty "></span>
      <span class="fa fa-star-o "></span> </div>`;
                break;
            case e > 3.5 && e <= 4:
                this.myHTML = `
      <span class="fa fa-star "></span>
      <span class="fa fa-star "></span>
      <span class="fa fa-star "></span>
      <span class="fa fa-star "></span>
      <span class="fa fa-star-o "></span> </div>`;
                break;
            case e <= 4.5:
                this.myHTML = `
      <span class="fa fa-star "></span>
      <span class="fa fa-star "></span>
      <span class="fa fa-star "></span>
      <span class="fa fa-star "></span>
      <span class="fa fa-star-half-empty "></span>
    </div>`;
                break;
            case e > 4.5 && e <= 5:
                this.myHTML = `
      <span class="fa fa-star "></span>
      <span class="fa fa-star "></span>
      <span class="fa fa-star "></span>
      <span class="fa fa-star "></span>
      <span class="fa fa-star "></span>
       </div>`;
                break;
            default:
                break;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SukuRatingCardLineComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-rating-card-line',
                template: "<div class=\"col p-0\">\r\n  <div class=\"row card-line-bg p-3 m-3 {{customclass}}\" [style.background-color]=\"bgColor\">\r\n    <div [class]=\"imageColSize\">\r\n      <img [class]=\"customImgclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\r\n    </div>\r\n    <span class=\"col d-lg-flex d-md-flex p-0 mt-2 pt-1\">\r\n    <div [class]=\"txtcolsize\">\r\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\r\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\r\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\r\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\r\n    </div>\r\n    <div class=\"col-sm-3 p-lg-0 pr-0 d-flex mt-2 pt-2 flex-column\" *ngIf=\"true\">\r\n      <h2 [style.font-size.px]=\"ratingtitleSize\" [class]=\"ratingtitlecustomclass\"\r\n        [style.font-weight]=\"ratingtitleWeight\" [style.color]=\"ratingtitleColor\">{{ratingTitle}}</h2>\r\n      <p class=\"mb-0\">\r\n        <span (change)=\"action.emit(ratingValue)\" class=\"starSize\">\r\n          <div [innerHTML]=\"myHTML\" [class]=\"customRatingclass\" ratingValue=\"\"></div>\r\n        </span>\r\n      </p>\r\n    </div>\r\n    <div [class]=\"txttwocolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"\r\n        [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\r\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\" [style.font-weight]=\"contentTwoWeight\"\r\n        [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\r\n    </div>\r\n    <div [class]=\"txtthreecolsize\">\r\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"\r\n        [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\r\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"\r\n        [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\r\n    </div>\r\n  </span>\r\n  </div>\r\n</div>",
                styles: ["h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}.starSize{font-size:20px!important}.img-res{width:100px;height:auto;max-width:100%;max-height:100%;padding:6px 5px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1yYXRpbmctY2FyZC1saW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXJhdGluZy1jYXJkLWxpbmUvc3VrdS1yYXRpbmctY2FyZC1saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sMkJBQTJCO0lBNEt2QztRQTFLQSxVQUFLLEdBQUcsZ0pBQWdKLENBQUM7UUFDdEksWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFVixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNkLG1CQUFjLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLG9CQUFlLEdBQUcsYUFBYSxDQUFDO1FBQ2xELFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHYixpQkFBWSxHQUFHLGNBQWMsQ0FBQztRQUM5QixlQUFVLEdBQUcsMkNBQTJDLENBQUM7UUFDekQsa0JBQWEsR0FBRyxvQ0FBb0MsQ0FBQztRQUNyRCxvQkFBZSxHQUFHLG9CQUFvQixDQUFDO1FBQzVCLGFBQVEsR0FBRyxXQUFXLENBQUM7UUFDakIsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFDdkIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDekIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDYix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFFbEMsZ0JBQVcsR0FBRyxvQkFBb0IsQ0FBQztRQUM1QixxQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDN0Isc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzVCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUV6QyxlQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ2Qs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QUM3RCxrREFBZ0Q7O0lBQ2hELHVEQUEyRDs7SUFDM0Qsd0RBQXlEOztJQUN6RCxzREFBb0Q7O0lBQ3BELDZEQUFnRTs7SUFFaEUsb0RBQXdEOztJQUN4RCx5REFBK0Q7O0lBQy9ELDBEQUE2RDs7SUFDN0Qsd0RBQXdEOztJQUN4RCx5REFBdUQ7O0lBQ3ZELG1EQUFxRDs7SUFDckQsd0RBQTREOztJQUM1RCx5REFBMEQ7O0lBQzFELHVEQUFxRDs7SUFDckQsOERBQWlFOztJQUNqRSw2Q0FBTzs7SUFDUCw0Q0FBVTs7SUFDViw2Q0FBc0M7O0lBQ3RDLHdEQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3VrdS1yYXRpbmctY2FyZC1saW5lJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1yYXRpbmctY2FyZC1saW5lLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1yYXRpbmctY2FyZC1saW5lLmNvbXBvbmVudC5zY3NzJyBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1UmF0aW5nQ2FyZExpbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpXHJcblx0aW1hZ2UgPSAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMS5nc3RhdGljLmNvbS9zaG9wcGluZz9xPXRibjpBTmQ5R2NTVHF6NjRBMlhqNTRmNXY0NHJEOXZOVXF5VFh6NWMwcjd6VGxmaDE4aWRveVVZR0g4aEY1MXBQNl9lZm9kbmFqQ3VZVkI0b2tjTW5UMCZ1c3FwPUNBYyc7XHJcblx0QElucHV0KCdpY29uLW9uZScpIGljb25PbmUgPSAnJztcclxuXHRASW5wdXQoJ2ljb24tdHdvJykgaWNvblR3byA9ICcnO1xyXG5cdEBJbnB1dCgnbXNnLXN0YXR1cycpIG1zZ1N0YXR1cztcclxuXHRASW5wdXQoJ2N1c3RvbWNsYXNzJykgY3VzdG9tY2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2N1c3RvbUltZ2NsYXNzJykgY3VzdG9tSW1nY2xhc3MgPSAnaW1nLXJlcyc7XHJcblx0QElucHV0KCdjdXN0b20taWNvbmNsYXNzJykgY3VzdG9tSWNvbmNsYXNzID0gJ3RleHQtY2VudGVyJztcclxuXHRASW5wdXQoKSBiZ0NvbG9yID0gJyc7XHJcblxyXG5cdEBJbnB1dCgpIGludGVyZXN0O1xyXG5cdEBJbnB1dCgpIGltYWdlQ29sU2l6ZSA9ICdjb2wtc20tMSBwLTAnO1xyXG5cdEBJbnB1dCgpIHR4dGNvbHNpemUgPSAnY29sLXNtLTMgY29sLXhzLTEyIHBsLWxnLTIgcHItMiBwdC0xIG10LTEnO1xyXG5cdEBJbnB1dCgpIHR4dHR3b2NvbHNpemUgPSAnY29sLXNtLTMgcHQtMiBwbC1sZy0yIHByLWxnLTIgbXQtMSc7XHJcblx0QElucHV0KCkgdHh0dGhyZWVjb2xzaXplID0gJ2NvbC1zbS0zIHB0LTIgbXQtMSc7XHJcblx0QElucHV0KCd0aXRsZS1vbmUnKSB0aXRsZU9uZSA9ICdUaXRsZSBPbmUnO1xyXG5cdEBJbnB1dCgndGl0bGUtb25lLWNvbG9yJykgdGl0bGVPbmVDb2xvciA9ICdibGFjayc7XHJcblx0QElucHV0KCd0aXRsZS1vbmUtd2VpZ2h0JykgdGl0bGVPbmVXZWlnaHQgPSAnNjAwJztcclxuXHRASW5wdXQoJ3RpdGxlLW9uZS1zaXplJykgdGl0bGVPbmVTaXplID0gJzE0JztcclxuXHRASW5wdXQoJ3RpdGxlLW9uZS1jdXN0b21jbGFzcycpIHRpdGxlT25lY3VzdG9tY2xhc3MgPSAnJztcclxuXHJcblx0QElucHV0KCdyYXRpbmctdGl0bGUnKSByYXRpbmdUaXRsZSA9ICdUUkFOU0FDVElPTiBSQVRJTkcnO1xyXG5cdEBJbnB1dCgncmF0aW5nLXRpdGxlLWNvbG9yJykgIHJhdGluZ3RpdGxlQ29sb3IgPSAnI2I2YjZiNic7XHJcblx0QElucHV0KCdyYXRpbmctdGl0bGUtd2VpZ2h0JykgcmF0aW5ndGl0bGVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ3JhdGluZy10aXRsZS1zaXplJykgcmF0aW5ndGl0bGVTaXplID0gJzEyJztcclxuXHRASW5wdXQoJ3JhdGluZy10aXRsZS1jdXN0b21jbGFzcycpIHJhdGluZ3RpdGxlY3VzdG9tY2xhc3MgPSAnJztcclxuXHJcblx0QElucHV0KCdjb250ZW50LW9uZScpIGNvbnRlbnRPbmUgPSAnJDEwMCc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS1jb2xvcicpIGNvbnRlbnRPbmVDb2xvciA9ICcjM2UzZTNlJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLXdlaWdodCcpIGNvbnRlbnRPbmVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtb25lLXNpemUnKSBjb250ZW50T25lU2l6ZSA9ICcxNCc7XHJcblx0QElucHV0KCdjb250ZW50LW9uZS1jdXN0b21jbGFzcycpIGNvbnRlbnRPbmVjdXN0b21jbGFzcyA9ICcnO1xyXG5cclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvJykgY29udGVudFR3byA9ICdKb2huIFNtaXRoJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLWNvbG9yJykgY29udGVudFR3b0NvbG9yID0gJyMzZTNlM2UnO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28td2VpZ2h0JykgY29udGVudFR3b1dlaWdodCA9ICc1MDAnO1xyXG5cdEBJbnB1dCgnY29udGVudC10d28tc2l6ZScpIGNvbnRlbnRUd29TaXplID0gJzE0JztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLWN1c3RvbWNsYXNzJykgY29udGVudFR3b2N1c3RvbWNsYXNzID0gJyc7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvJykgc3ViVGl0bGVUd28gPSAnU09MRCBCWSc7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLWNvbG9yJykgc3ViVGl0bGVUd29Db2xvciA9ICcjYjZiNmI2JztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28td2VpZ2h0Jykgc3ViVGl0bGVUd29XZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28tc2l6ZScpIHN1YlRpdGxlVHdvU2l6ZSA9ICcxMic7XHJcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLWN1c3RvbWNsYXNzJykgc3ViVGl0bGVUd29jdXN0b21jbGFzcyA9ICcnO1xyXG5cclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZScpIHN1YlRpdGxlVGhyZWUgPSAnRVhQSVJZIERBVEUnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLWNvbG9yJykgc3ViVGl0bGVUaHJlZWNvbG9yID0gJyNiNmI2YjYnO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLXdlaWdodCcpIHN1YlRpdGxlVGhyZWVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZS1zaXplJykgc3ViVGl0bGVUaHJlZVNpemUgPSAnMTInO1xyXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlY2xhc3MnKSBzdWJUaXRsZVRocmVlQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUnKSBjb250ZW50VGhyZWUgPSAnMjggTm92IDIwMTgnO1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZS1jb2xvcicpIGNvbnRlbnRUaHJlZUNvbG9yID0gJyMzZTNlM2UnO1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZS13aWRnZXQnKSBjb250ZW50VGhyZWVXZWlnaHQgPSAnNTAwJztcclxuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtc2l6ZScpIGNvbnRlbnRUaHJlZVNpemUgPSAnMTQnO1xyXG5cdEBJbnB1dCgnY29udGVudC10aHJlZS1jdXN0b21jbGFzcycpIGNvbnRlbnRUaHJlZWN1c3RvbWNsYXNzID0gJyc7XHJcblx0bXlIVE1MO1xyXG5cdF9yYXRlID0gMDtcclxuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBJbnB1dCgpIGN1c3RvbVJhdGluZ2NsYXNzO1xyXG5cdEBJbnB1dCgncmF0aW5nLXZhbHVlJylcclxuXHRzZXQgcmF0aW5nVmFsdWUocmF0aW5nVmFsdWU6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fcmF0ZSA9IHJhdGluZ1ZhbHVlO1xyXG5cdFx0Y29uc29sZS5sb2coJycsIHRoaXMuX3JhdGUpO1xyXG5cdFx0dGhpcy5jYWxsT2ZTdGFydHModGhpcy5fcmF0ZSk7XHJcblx0fVxyXG5cdGNhbGxPZlN0YXJ0cyhlKSB7XHJcblx0XHRzd2l0Y2ggKHRydWUpIHtcclxuXHRcdFx0Y2FzZSBlID09IDA6XHJcblx0XHRcdFx0dGhpcy5teUhUTUwgPSBgXHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5gO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBlIDw9IDAuNTpcclxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLWhhbGYtZW1wdHkgXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+XHJcbiAgICAgIDwvZGl2PmA7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIGUgPiAwLjUgJiYgZSA8PSAxOlxyXG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+IDwvZGl2PmA7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIGUgPD0gMS41OlxyXG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItaGFsZi1lbXB0eSBcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+IDwvZGl2PmA7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIGUgPiAxLjUgJiYgZSA8PSAyOlxyXG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPiA8L2Rpdj5gO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBlIDw9IDIuNTpcclxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLWhhbGYtZW1wdHkgXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj4gPC9kaXY+YDtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgZSA+IDIuNSAmJiBlIDw9IDM6XHJcblx0XHRcdFx0dGhpcy5teUhUTUwgPSBgXHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPiA8L2Rpdj5gO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBlIDw9IDMuNTpcclxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLWhhbGYtZW1wdHkgXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+IDwvZGl2PmA7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIGUgPiAzLjUgJiYgZSA8PSA0OlxyXG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+IDwvZGl2PmA7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIGUgPD0gNC41OlxyXG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItaGFsZi1lbXB0eSBcIj48L3NwYW4+XHJcbiAgICA8L2Rpdj5gO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIGUgPiA0LjUgJiYgZSA8PSA1OlxyXG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxyXG4gICAgICAgPC9kaXY+YDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19