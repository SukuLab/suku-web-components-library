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
                template: "<div class=\"col p-0\">\n  <div class=\"row card-line-bg p-3 m-3 {{customclass}}\" [style.background-color]=\"bgColor\">\n    <div [class]=\"imageColSize\">\n      <img [class]=\"customImgclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\n    </div>\n    <span class=\"col d-lg-flex d-md-flex p-0 mt-2 pt-1\">\n    <div [class]=\"txtcolsize\">\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\n    </div>\n    <div class=\"col-sm-3 p-lg-0 pr-0 d-flex mt-2 pt-2 flex-column\" *ngIf=\"true\">\n      <h2 [style.font-size.px]=\"ratingtitleSize\" [class]=\"ratingtitlecustomclass\"\n        [style.font-weight]=\"ratingtitleWeight\" [style.color]=\"ratingtitleColor\">{{ratingTitle}}</h2>\n      <p class=\"mb-0\">\n        <span (change)=\"action.emit(ratingValue)\" class=\"starSize\">\n          <div [innerHTML]=\"myHTML\" [class]=\"customRatingclass\" ratingValue=\"\"></div>\n        </span>\n      </p>\n    </div>\n    <div [class]=\"txttwocolsize\">\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"\n        [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\" [style.font-weight]=\"contentTwoWeight\"\n        [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\n    </div>\n    <div [class]=\"txtthreecolsize\">\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"\n        [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"\n        [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\n    </div>\n  </span>\n  </div>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1yYXRpbmctY2FyZC1saW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXJhdGluZy1jYXJkLWxpbmUvc3VrdS1yYXRpbmctY2FyZC1saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sMkJBQTJCO0lBNEt2QztRQTFLQSxVQUFLLEdBQUcsZ0pBQWdKLENBQUM7UUFDdEksWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFVixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNkLG1CQUFjLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLG9CQUFlLEdBQUcsYUFBYSxDQUFDO1FBQ2xELFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHYixpQkFBWSxHQUFHLGNBQWMsQ0FBQztRQUM5QixlQUFVLEdBQUcsMkNBQTJDLENBQUM7UUFDekQsa0JBQWEsR0FBRyxvQ0FBb0MsQ0FBQztRQUNyRCxvQkFBZSxHQUFHLG9CQUFvQixDQUFDO1FBQzVCLGFBQVEsR0FBRyxXQUFXLENBQUM7UUFDakIsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFDdkIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDekIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDYix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFFbEMsZ0JBQVcsR0FBRyxvQkFBb0IsQ0FBQztRQUM1QixxQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDN0Isc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzVCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUV6QyxlQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ2Qs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QUM3RCxrREFBZ0Q7O0lBQ2hELHVEQUEyRDs7SUFDM0Qsd0RBQXlEOztJQUN6RCxzREFBb0Q7O0lBQ3BELDZEQUFnRTs7SUFFaEUsb0RBQXdEOztJQUN4RCx5REFBK0Q7O0lBQy9ELDBEQUE2RDs7SUFDN0Qsd0RBQXdEOztJQUN4RCx5REFBdUQ7O0lBQ3ZELG1EQUFxRDs7SUFDckQsd0RBQTREOztJQUM1RCx5REFBMEQ7O0lBQzFELHVEQUFxRDs7SUFDckQsOERBQWlFOztJQUNqRSw2Q0FBTzs7SUFDUCw0Q0FBVTs7SUFDViw2Q0FBc0M7O0lBQ3RDLHdEQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1yYXRpbmctY2FyZC1saW5lJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtcmF0aW5nLWNhcmQtbGluZS5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWyAnLi9zdWt1LXJhdGluZy1jYXJkLWxpbmUuY29tcG9uZW50LnNjc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVJhdGluZ0NhcmRMaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KClcblx0aW1hZ2UgPSAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMS5nc3RhdGljLmNvbS9zaG9wcGluZz9xPXRibjpBTmQ5R2NTVHF6NjRBMlhqNTRmNXY0NHJEOXZOVXF5VFh6NWMwcjd6VGxmaDE4aWRveVVZR0g4aEY1MXBQNl9lZm9kbmFqQ3VZVkI0b2tjTW5UMCZ1c3FwPUNBYyc7XG5cdEBJbnB1dCgnaWNvbi1vbmUnKSBpY29uT25lID0gJyc7XG5cdEBJbnB1dCgnaWNvbi10d28nKSBpY29uVHdvID0gJyc7XG5cdEBJbnB1dCgnbXNnLXN0YXR1cycpIG1zZ1N0YXR1cztcblx0QElucHV0KCdjdXN0b21jbGFzcycpIGN1c3RvbWNsYXNzID0gJyc7XG5cdEBJbnB1dCgnY3VzdG9tSW1nY2xhc3MnKSBjdXN0b21JbWdjbGFzcyA9ICdpbWctcmVzJztcblx0QElucHV0KCdjdXN0b20taWNvbmNsYXNzJykgY3VzdG9tSWNvbmNsYXNzID0gJ3RleHQtY2VudGVyJztcblx0QElucHV0KCkgYmdDb2xvciA9ICcnO1xuXG5cdEBJbnB1dCgpIGludGVyZXN0O1xuXHRASW5wdXQoKSBpbWFnZUNvbFNpemUgPSAnY29sLXNtLTEgcC0wJztcblx0QElucHV0KCkgdHh0Y29sc2l6ZSA9ICdjb2wtc20tMyBjb2wteHMtMTIgcGwtbGctMiBwci0yIHB0LTEgbXQtMSc7XG5cdEBJbnB1dCgpIHR4dHR3b2NvbHNpemUgPSAnY29sLXNtLTMgcHQtMiBwbC1sZy0yIHByLWxnLTIgbXQtMSc7XG5cdEBJbnB1dCgpIHR4dHRocmVlY29sc2l6ZSA9ICdjb2wtc20tMyBwdC0yIG10LTEnO1xuXHRASW5wdXQoJ3RpdGxlLW9uZScpIHRpdGxlT25lID0gJ1RpdGxlIE9uZSc7XG5cdEBJbnB1dCgndGl0bGUtb25lLWNvbG9yJykgdGl0bGVPbmVDb2xvciA9ICdibGFjayc7XG5cdEBJbnB1dCgndGl0bGUtb25lLXdlaWdodCcpIHRpdGxlT25lV2VpZ2h0ID0gJzYwMCc7XG5cdEBJbnB1dCgndGl0bGUtb25lLXNpemUnKSB0aXRsZU9uZVNpemUgPSAnMTQnO1xuXHRASW5wdXQoJ3RpdGxlLW9uZS1jdXN0b21jbGFzcycpIHRpdGxlT25lY3VzdG9tY2xhc3MgPSAnJztcblxuXHRASW5wdXQoJ3JhdGluZy10aXRsZScpIHJhdGluZ1RpdGxlID0gJ1RSQU5TQUNUSU9OIFJBVElORyc7XG5cdEBJbnB1dCgncmF0aW5nLXRpdGxlLWNvbG9yJykgIHJhdGluZ3RpdGxlQ29sb3IgPSAnI2I2YjZiNic7XG5cdEBJbnB1dCgncmF0aW5nLXRpdGxlLXdlaWdodCcpIHJhdGluZ3RpdGxlV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgncmF0aW5nLXRpdGxlLXNpemUnKSByYXRpbmd0aXRsZVNpemUgPSAnMTInO1xuXHRASW5wdXQoJ3JhdGluZy10aXRsZS1jdXN0b21jbGFzcycpIHJhdGluZ3RpdGxlY3VzdG9tY2xhc3MgPSAnJztcblxuXHRASW5wdXQoJ2NvbnRlbnQtb25lJykgY29udGVudE9uZSA9ICckMTAwJztcblx0QElucHV0KCdjb250ZW50LW9uZS1jb2xvcicpIGNvbnRlbnRPbmVDb2xvciA9ICcjM2UzZTNlJztcblx0QElucHV0KCdjb250ZW50LW9uZS13ZWlnaHQnKSBjb250ZW50T25lV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgnY29udGVudC1vbmUtc2l6ZScpIGNvbnRlbnRPbmVTaXplID0gJzE0Jztcblx0QElucHV0KCdjb250ZW50LW9uZS1jdXN0b21jbGFzcycpIGNvbnRlbnRPbmVjdXN0b21jbGFzcyA9ICcnO1xuXG5cdEBJbnB1dCgnY29udGVudC10d28nKSBjb250ZW50VHdvID0gJ0pvaG4gU21pdGgnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLWNvbG9yJykgY29udGVudFR3b0NvbG9yID0gJyMzZTNlM2UnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLXdlaWdodCcpIGNvbnRlbnRUd29XZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCdjb250ZW50LXR3by1zaXplJykgY29udGVudFR3b1NpemUgPSAnMTQnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdHdvLWN1c3RvbWNsYXNzJykgY29udGVudFR3b2N1c3RvbWNsYXNzID0gJyc7XG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3bycpIHN1YlRpdGxlVHdvID0gJ1NPTEQgQlknO1xuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28tY29sb3InKSBzdWJUaXRsZVR3b0NvbG9yID0gJyNiNmI2YjYnO1xuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28td2VpZ2h0Jykgc3ViVGl0bGVUd29XZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLXNpemUnKSBzdWJUaXRsZVR3b1NpemUgPSAnMTInO1xuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28tY3VzdG9tY2xhc3MnKSBzdWJUaXRsZVR3b2N1c3RvbWNsYXNzID0gJyc7XG5cblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUnKSBzdWJUaXRsZVRocmVlID0gJ0VYUElSWSBEQVRFJztcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUtY29sb3InKSBzdWJUaXRsZVRocmVlY29sb3IgPSAnI2I2YjZiNic7XG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLXdlaWdodCcpIHN1YlRpdGxlVGhyZWVXZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUtc2l6ZScpIHN1YlRpdGxlVGhyZWVTaXplID0gJzEyJztcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWVjbGFzcycpIHN1YlRpdGxlVGhyZWVDbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUnKSBjb250ZW50VGhyZWUgPSAnMjggTm92IDIwMTgnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY29sb3InKSBjb250ZW50VGhyZWVDb2xvciA9ICcjM2UzZTNlJztcblx0QElucHV0KCdjb250ZW50LXRocmVlLXdpZGdldCcpIGNvbnRlbnRUaHJlZVdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtc2l6ZScpIGNvbnRlbnRUaHJlZVNpemUgPSAnMTQnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY3VzdG9tY2xhc3MnKSBjb250ZW50VGhyZWVjdXN0b21jbGFzcyA9ICcnO1xuXHRteUhUTUw7XG5cdF9yYXRlID0gMDtcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QElucHV0KCkgY3VzdG9tUmF0aW5nY2xhc3M7XG5cdEBJbnB1dCgncmF0aW5nLXZhbHVlJylcblx0c2V0IHJhdGluZ1ZhbHVlKHJhdGluZ1ZhbHVlOiBudW1iZXIpIHtcblx0XHR0aGlzLl9yYXRlID0gcmF0aW5nVmFsdWU7XG5cdFx0Y29uc29sZS5sb2coJycsIHRoaXMuX3JhdGUpO1xuXHRcdHRoaXMuY2FsbE9mU3RhcnRzKHRoaXMuX3JhdGUpO1xuXHR9XG5cdGNhbGxPZlN0YXJ0cyhlKSB7XG5cdFx0c3dpdGNoICh0cnVlKSB7XG5cdFx0XHRjYXNlIGUgPT0gMDpcblx0XHRcdFx0dGhpcy5teUhUTUwgPSBgXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBlIDw9IDAuNTpcblx0XHRcdFx0dGhpcy5teUhUTUwgPSBgXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItaGFsZi1lbXB0eSBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5gO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBlID4gMC41ICYmIGUgPD0gMTpcblx0XHRcdFx0dGhpcy5teUhUTUwgPSBgXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPiA8L2Rpdj5gO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBlIDw9IDEuNTpcblx0XHRcdFx0dGhpcy5teUhUTUwgPSBgXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLWhhbGYtZW1wdHkgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPiA8L2Rpdj5gO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBlID4gMS41ICYmIGUgPD0gMjpcblx0XHRcdFx0dGhpcy5teUhUTUwgPSBgXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj4gPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA8PSAyLjU6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItaGFsZi1lbXB0eSBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+IDwvZGl2PmA7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIGUgPiAyLjUgJiYgZSA8PSAzOlxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj4gPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA8PSAzLjU6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLWhhbGYtZW1wdHkgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPiA8L2Rpdj5gO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBlID4gMy41ICYmIGUgPD0gNDpcblx0XHRcdFx0dGhpcy5teUhUTUwgPSBgXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPiA8L2Rpdj5gO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBlIDw9IDQuNTpcblx0XHRcdFx0dGhpcy5teUhUTUwgPSBgXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLWhhbGYtZW1wdHkgXCI+PC9zcGFuPlxuICAgIDwvZGl2PmA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBlID4gNC41ICYmIGUgPD0gNTpcblx0XHRcdFx0dGhpcy5teUhUTUwgPSBgXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cbiAgICAgICA8L2Rpdj5gO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bmdPbkluaXQoKSB7fVxufVxuIl19