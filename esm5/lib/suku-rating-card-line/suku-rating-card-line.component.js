/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuRatingCardLineComponent = /** @class */ (function () {
    function SukuRatingCardLineComponent() {
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
    Object.defineProperty(SukuRatingCardLineComponent.prototype, "ratingValue", {
        set: /**
         * @param {?} ratingValue
         * @return {?}
         */
        function (ratingValue) {
            this._rate = ratingValue;
            console.log('', this._rate);
            this.callOfStarts(this._rate);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    SukuRatingCardLineComponent.prototype.callOfStarts = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        switch (true) {
            case e == 0:
                this.myHTML = "\n      <span class=\"fa fa-star-o \"></span>\n      <span class=\"fa fa-star-o \"></span>\n      <span class=\"fa fa-star-o \"></span>\n      <span class=\"fa fa-star-o \"></span>\n      <span class=\"fa fa-star-o \"></span>\n      </div>";
                break;
            case e <= 0.5:
                this.myHTML = "\n      <span class=\"fa fa-star-half-empty \"></span>\n      <span class=\"fa fa-star-o \"></span>\n      <span class=\"fa fa-star-o \"></span>\n      <span class=\"fa fa-star-o \"></span>\n      <span class=\"fa fa-star-o \"></span>\n      </div>";
                break;
            case e > 0.5 && e <= 1:
                this.myHTML = "\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star-o \"></span>\n      <span class=\"fa fa-star-o \"></span>\n      <span class=\"fa fa-star-o \"></span>\n      <span class=\"fa fa-star-o \"></span> </div>";
                break;
            case e <= 1.5:
                this.myHTML = "\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star-half-empty \"></span>\n      <span class=\"fa fa-star-o \"></span>\n      <span class=\"fa fa-star-o \"></span>\n      <span class=\"fa fa-star-o \"></span> </div>";
                break;
            case e > 1.5 && e <= 2:
                this.myHTML = "\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star-o \"></span>\n      <span class=\"fa fa-star-o \"></span>\n      <span class=\"fa fa-star-o \"></span> </div>";
                break;
            case e <= 2.5:
                this.myHTML = "\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star-half-empty \"></span>\n      <span class=\"fa fa-star-o \"></span>\n      <span class=\"fa fa-star-o \"></span> </div>";
                break;
            case e > 2.5 && e <= 3:
                this.myHTML = "\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star-o \"></span>\n      <span class=\"fa fa-star-o \"></span> </div>";
                break;
            case e <= 3.5:
                this.myHTML = "\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star-half-empty \"></span>\n      <span class=\"fa fa-star-o \"></span> </div>";
                break;
            case e > 3.5 && e <= 4:
                this.myHTML = "\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star-o \"></span> </div>";
                break;
            case e <= 4.5:
                this.myHTML = "\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star-half-empty \"></span>\n    </div>";
                break;
            case e > 4.5 && e <= 5:
                this.myHTML = "\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star \"></span>\n      <span class=\"fa fa-star \"></span>\n       </div>";
                break;
            default:
                break;
        }
    };
    /**
     * @return {?}
     */
    SukuRatingCardLineComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuRatingCardLineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-rating-card-line',
                    template: "<div class=\"col p-0\">\n  <div class=\"row card-line-bg p-3 m-3 {{customclass}}\" [style.background-color]=\"bgColor\">\n    <div [class]=\"imageColSize\">\n      <img [class]=\"customImgclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\n    </div>\n    <span class=\"col d-lg-flex d-md-flex p-0 mt-2 pt-1\">\n    <div [class]=\"txtcolsize\">\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\n    </div>\n    <div class=\"col-sm-3 p-lg-0 pr-0 d-flex mt-2 pt-2 flex-column\" *ngIf=\"true\">\n      <h2 [style.font-size.px]=\"ratingtitleSize\" [class]=\"ratingtitlecustomclass\"\n        [style.font-weight]=\"ratingtitleWeight\" [style.color]=\"ratingtitleColor\">{{ratingTitle}}</h2>\n      <p class=\"mb-0\">\n        <span (change)=\"action.emit(ratingValue)\" class=\"starSize\">\n          <div [innerHTML]=\"myHTML\" [class]=\"customRatingclass\" ratingValue=\"\"></div>\n        </span>\n      </p>\n    </div>\n    <div [class]=\"txttwocolsize\">\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"\n        [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\" [style.font-weight]=\"contentTwoWeight\"\n        [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\n    </div>\n    <div [class]=\"txtthreecolsize\">\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"\n        [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"\n        [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\n    </div>\n  </span>\n  </div>\n</div>",
                    styles: ["h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}.starSize{font-size:20px!important}.img-res{width:100px;height:auto;max-width:100%;max-height:100%;padding:6px 5px}"]
                }] }
    ];
    /** @nocollapse */
    SukuRatingCardLineComponent.ctorParameters = function () { return []; };
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
    return SukuRatingCardLineComponent;
}());
export { SukuRatingCardLineComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1yYXRpbmctY2FyZC1saW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXJhdGluZy1jYXJkLWxpbmUvc3VrdS1yYXRpbmctY2FyZC1saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWlMQztRQTFLQSxVQUFLLEdBQUcsZ0pBQWdKLENBQUM7UUFDdEksWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFVixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNkLG1CQUFjLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLG9CQUFlLEdBQUcsYUFBYSxDQUFDO1FBQ2xELFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHYixpQkFBWSxHQUFHLGNBQWMsQ0FBQztRQUM5QixlQUFVLEdBQUcsMkNBQTJDLENBQUM7UUFDekQsa0JBQWEsR0FBRyxvQ0FBb0MsQ0FBQztRQUNyRCxvQkFBZSxHQUFHLG9CQUFvQixDQUFDO1FBQzVCLGFBQVEsR0FBRyxXQUFXLENBQUM7UUFDakIsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFDdkIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDekIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDYix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFFbEMsZ0JBQVcsR0FBRyxvQkFBb0IsQ0FBQztRQUM1QixxQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDN0Isc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzVCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUV6QyxlQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ2Qsb0JBQWUsR0FBRyxTQUFTLENB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Q2pELDREQUE2RDs7SUFDN0Qsa0RBQWdEOztJQUNoRCx1REFBMkQ7O0lBQzNELHdEQUF5RDs7SUFDekQsc0RBQW9EOztJQUNwRCw2REFBZ0U7O0lBRWhFLG9EQUF3RDs7SUFDeEQseURBQStEOztJQUMvRCwwREFBNkQ7O0lBQzdELHdEQUF3RDs7SUFDeEQseURBQXVEOztJQUN2RCxtREFBcUQ7O0lBQ3JELHdEQUE0RDs7SUFDNUQseURBQTBEOztJQUMxRCx1REFBcUQ7O0lBQ3JELDhEQUFpRTs7SUFDakUsNkNBQU87O0lBQ1AsNENBQVU7O0lBQ1YsNkNBQXNDOztJQUN0Qyx3REFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtcmF0aW5nLWNhcmQtbGluZScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXJhdGluZy1jYXJkLWxpbmUuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1yYXRpbmctY2FyZC1saW5lLmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VSYXRpbmdDYXJkTGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpXG5cdGltYWdlID0gJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjEuZ3N0YXRpYy5jb20vc2hvcHBpbmc/cT10Ym46QU5kOUdjU1RxejY0QTJYajU0ZjV2NDRyRDl2TlVxeVRYejVjMHI3elRsZmgxOGlkb3lVWUdIOGhGNTFwUDZfZWZvZG5hakN1WVZCNG9rY01uVDAmdXNxcD1DQWMnO1xuXHRASW5wdXQoJ2ljb24tb25lJykgaWNvbk9uZSA9ICcnO1xuXHRASW5wdXQoJ2ljb24tdHdvJykgaWNvblR3byA9ICcnO1xuXHRASW5wdXQoJ21zZy1zdGF0dXMnKSBtc2dTdGF0dXM7XG5cdEBJbnB1dCgnY3VzdG9tY2xhc3MnKSBjdXN0b21jbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2N1c3RvbUltZ2NsYXNzJykgY3VzdG9tSW1nY2xhc3MgPSAnaW1nLXJlcyc7XG5cdEBJbnB1dCgnY3VzdG9tLWljb25jbGFzcycpIGN1c3RvbUljb25jbGFzcyA9ICd0ZXh0LWNlbnRlcic7XG5cdEBJbnB1dCgpIGJnQ29sb3IgPSAnJztcblxuXHRASW5wdXQoKSBpbnRlcmVzdDtcblx0QElucHV0KCkgaW1hZ2VDb2xTaXplID0gJ2NvbC1zbS0xIHAtMCc7XG5cdEBJbnB1dCgpIHR4dGNvbHNpemUgPSAnY29sLXNtLTMgY29sLXhzLTEyIHBsLWxnLTIgcHItMiBwdC0xIG10LTEnO1xuXHRASW5wdXQoKSB0eHR0d29jb2xzaXplID0gJ2NvbC1zbS0zIHB0LTIgcGwtbGctMiBwci1sZy0yIG10LTEnO1xuXHRASW5wdXQoKSB0eHR0aHJlZWNvbHNpemUgPSAnY29sLXNtLTMgcHQtMiBtdC0xJztcblx0QElucHV0KCd0aXRsZS1vbmUnKSB0aXRsZU9uZSA9ICdUaXRsZSBPbmUnO1xuXHRASW5wdXQoJ3RpdGxlLW9uZS1jb2xvcicpIHRpdGxlT25lQ29sb3IgPSAnYmxhY2snO1xuXHRASW5wdXQoJ3RpdGxlLW9uZS13ZWlnaHQnKSB0aXRsZU9uZVdlaWdodCA9ICc2MDAnO1xuXHRASW5wdXQoJ3RpdGxlLW9uZS1zaXplJykgdGl0bGVPbmVTaXplID0gJzE0Jztcblx0QElucHV0KCd0aXRsZS1vbmUtY3VzdG9tY2xhc3MnKSB0aXRsZU9uZWN1c3RvbWNsYXNzID0gJyc7XG5cblx0QElucHV0KCdyYXRpbmctdGl0bGUnKSByYXRpbmdUaXRsZSA9ICdUUkFOU0FDVElPTiBSQVRJTkcnO1xuXHRASW5wdXQoJ3JhdGluZy10aXRsZS1jb2xvcicpICByYXRpbmd0aXRsZUNvbG9yID0gJyNiNmI2YjYnO1xuXHRASW5wdXQoJ3JhdGluZy10aXRsZS13ZWlnaHQnKSByYXRpbmd0aXRsZVdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoJ3JhdGluZy10aXRsZS1zaXplJykgcmF0aW5ndGl0bGVTaXplID0gJzEyJztcblx0QElucHV0KCdyYXRpbmctdGl0bGUtY3VzdG9tY2xhc3MnKSByYXRpbmd0aXRsZWN1c3RvbWNsYXNzID0gJyc7XG5cblx0QElucHV0KCdjb250ZW50LW9uZScpIGNvbnRlbnRPbmUgPSAnJDEwMCc7XG5cdEBJbnB1dCgnY29udGVudC1vbmUtY29sb3InKSBjb250ZW50T25lQ29sb3IgPSAnIzNlM2UzZSc7XG5cdEBJbnB1dCgnY29udGVudC1vbmUtd2VpZ2h0JykgY29udGVudE9uZVdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoJ2NvbnRlbnQtb25lLXNpemUnKSBjb250ZW50T25lU2l6ZSA9ICcxNCc7XG5cdEBJbnB1dCgnY29udGVudC1vbmUtY3VzdG9tY2xhc3MnKSBjb250ZW50T25lY3VzdG9tY2xhc3MgPSAnJztcblxuXHRASW5wdXQoJ2NvbnRlbnQtdHdvJykgY29udGVudFR3byA9ICdKb2huIFNtaXRoJztcblx0QElucHV0KCdjb250ZW50LXR3by1jb2xvcicpIGNvbnRlbnRUd29Db2xvciA9ICcjM2UzZTNlJztcblx0QElucHV0KCdjb250ZW50LXR3by13ZWlnaHQnKSBjb250ZW50VHdvV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgnY29udGVudC10d28tc2l6ZScpIGNvbnRlbnRUd29TaXplID0gJzE0Jztcblx0QElucHV0KCdjb250ZW50LXR3by1jdXN0b21jbGFzcycpIGNvbnRlbnRUd29jdXN0b21jbGFzcyA9ICcnO1xuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28nKSBzdWJUaXRsZVR3byA9ICdTT0xEIEJZJztcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLWNvbG9yJykgc3ViVGl0bGVUd29Db2xvciA9ICcjYjZiNmI2Jztcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLXdlaWdodCcpIHN1YlRpdGxlVHdvV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by1zaXplJykgc3ViVGl0bGVUd29TaXplID0gJzEyJztcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLWN1c3RvbWNsYXNzJykgc3ViVGl0bGVUd29jdXN0b21jbGFzcyA9ICcnO1xuXG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlJykgc3ViVGl0bGVUaHJlZSA9ICdFWFBJUlkgREFURSc7XG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLWNvbG9yJykgc3ViVGl0bGVUaHJlZWNvbG9yID0gJyNiNmI2YjYnO1xuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZS13ZWlnaHQnKSBzdWJUaXRsZVRocmVlV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlLXNpemUnKSBzdWJUaXRsZVRocmVlU2l6ZSA9ICcxMic7XG5cdEBJbnB1dCgnc3ViLXRpdGxlLXRocmVlY2xhc3MnKSBzdWJUaXRsZVRocmVlQ2xhc3MgPSAnJztcblx0QElucHV0KCdjb250ZW50LXRocmVlJykgY29udGVudFRocmVlID0gJzI4IE5vdiAyMDE4Jztcblx0QElucHV0KCdjb250ZW50LXRocmVlLWNvbG9yJykgY29udGVudFRocmVlQ29sb3IgPSAnIzNlM2UzZSc7XG5cdEBJbnB1dCgnY29udGVudC10aHJlZS13aWRnZXQnKSBjb250ZW50VGhyZWVXZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCdjb250ZW50LXRocmVlLXNpemUnKSBjb250ZW50VGhyZWVTaXplID0gJzE0Jztcblx0QElucHV0KCdjb250ZW50LXRocmVlLWN1c3RvbWNsYXNzJykgY29udGVudFRocmVlY3VzdG9tY2xhc3MgPSAnJztcblx0bXlIVE1MO1xuXHRfcmF0ZSA9IDA7XG5cdEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBJbnB1dCgpIGN1c3RvbVJhdGluZ2NsYXNzO1xuXHRASW5wdXQoJ3JhdGluZy12YWx1ZScpXG5cdHNldCByYXRpbmdWYWx1ZShyYXRpbmdWYWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5fcmF0ZSA9IHJhdGluZ1ZhbHVlO1xuXHRcdGNvbnNvbGUubG9nKCcnLCB0aGlzLl9yYXRlKTtcblx0XHR0aGlzLmNhbGxPZlN0YXJ0cyh0aGlzLl9yYXRlKTtcblx0fVxuXHRjYWxsT2ZTdGFydHMoZSkge1xuXHRcdHN3aXRjaCAodHJ1ZSkge1xuXHRcdFx0Y2FzZSBlID09IDA6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA8PSAwLjU6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLWhhbGYtZW1wdHkgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA+IDAuNSAmJiBlIDw9IDE6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj4gPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA8PSAxLjU6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1oYWxmLWVtcHR5IFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj4gPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA+IDEuNSAmJiBlIDw9IDI6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+IDwvZGl2PmA7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIGUgPD0gMi41OlxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLWhhbGYtZW1wdHkgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyLW8gXCI+PC9zcGFuPiA8L2Rpdj5gO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBlID4gMi41ICYmIGUgPD0gMzpcblx0XHRcdFx0dGhpcy5teUhUTUwgPSBgXG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXItbyBcIj48L3NwYW4+IDwvZGl2PmA7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIGUgPD0gMy41OlxuXHRcdFx0XHR0aGlzLm15SFRNTCA9IGBcbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1oYWxmLWVtcHR5IFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj4gPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA+IDMuNSAmJiBlIDw9IDQ6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1vIFwiPjwvc3Bhbj4gPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgZSA8PSA0LjU6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3Rhci1oYWxmLWVtcHR5IFwiPjwvc3Bhbj5cbiAgICA8L2Rpdj5gO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgZSA+IDQuNSAmJiBlIDw9IDU6XG5cdFx0XHRcdHRoaXMubXlIVE1MID0gYFxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBcIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIFwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmEgZmEtc3RhciBcIj48L3NwYW4+XG4gICAgICAgPC9kaXY+YDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdG5nT25Jbml0KCkge31cbn1cbiJdfQ==