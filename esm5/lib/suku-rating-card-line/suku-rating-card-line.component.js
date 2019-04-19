/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuRatingCardLineComponent = /** @class */ (function () {
    function SukuRatingCardLineComponent() {
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
        this.txtthreecolsize = 'col-sm-3 pt-2 mt-1';
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
    Object.defineProperty(SukuRatingCardLineComponent.prototype, "ratingValue", {
        set: /**
         * @param {?} ratingValue
         * @return {?}
         */
        function (ratingValue) {
            console.log('ra', this.ratingValue);
            this.fullStars = Math.round(ratingValue);
            this.fullStarsArray = Array(this.fullStars).fill(1);
            this.halfStar = this.fullStars < ratingValue ? 1 : 0;
            this.emptyStars = 5 - this.fullStars - this.halfStar;
            this.emptyStarsArray = Array(this.emptyStars).fill(1);
        },
        enumerable: true,
        configurable: true
    });
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
                    template: "<div class=\"col p-0\">\n  <div class=\"row card-line-bg p-3 m-3 {{customclass}}\" [style.background-color]=\"bgColor\">\n    <div [class]=\"imageColSize\">\n      <img [class]=\"customImgclass\" src=\"{{image}}\" alt=\"card-img\" width=\"55px\" height=\"46px\">\n    </div>\n    <span class=\"col d-lg-flex d-md-flex p-0 mt-2 pt-1\">\n    <div [class]=\"txtcolsize\">\n      <h2 [style.font-size.px]=\"titleOneSize\" [class]=\"titleOnecustomclass\" [style.font-weight]=\"titleOneWeight\"\n        [style.color]=\"titleOneColor\">{{titleOne}}</h2>\n      <h2 [style.font-size.px]=\"contentOneSize\" [class]=\"contentOnecustomclass\" [style.font-weight]=\"contentOneWeight\"\n        [style.color]=\"contentOneColor\">{{contentOne}}</h2>\n    </div>\n    <div class=\"col-sm-3 p-lg-0 pr-0 d-flex mt-2 pt-2 flex-column\" (click)=\"action.emit()\"  *ngIf=\"true\">\n      <h2 [style.font-size.px]=\"ratingtitleSize\" [class]=\"ratingtitlecustomclass\"\n        [style.font-weight]=\"ratingtitleWeight\" [style.color]=\"ratingtitleColor\">{{ratingTitle}}</h2>\n      <p class=\"mb-0\">\n        <span class=\"starSize\">\n          <div class=\"pl-1\">\n              <span class=\"fa fa-star fullStar f20\" *ngFor=\"let star of fullStarsArray\"> </span>\n              <span class=\"fa fa-star-half halfStarLeft f20\" *ngIf=\"halfStar == 1\"> </span>\n              <span class=\"fa fa-star-half fa-flip-horizontal halfStarRight f20\" *ngIf=\"halfStar == 1\"> </span>\n              <span class=\"fa fa-star emptyStar f20\" *ngFor=\"let star of emptyStarsArray\"> </span>\n          </div>\n        </span>\n      </p>\n    </div>\n    <div [class]=\"txttwocolsize\">\n      <h2 [style.font-size.px]=\"subTitleTwoSize\" [class]=\"subTitleTwocustomclass\"\n        [style.font-weight]=\"subTitleTwoWeight\" [style.color]=\"subTitleTwoColor\">{{subTitleTwo}}</h2>\n      <h2 [style.font-size.px]=\"contentTwoSize\" [class]=\"contentTwocustomclass\" [style.font-weight]=\"contentTwoWeight\"\n        [style.color]=\"contentTwoColor\">{{contentTwo}}</h2>\n    </div>\n    <div [class]=\"txtthreecolsize\">\n      <h2 [style.font-size.px]=\"subTitleThreeSize\" [class]=\"subTitleThreeClass\"\n        [style.font-weight]=\"subTitleThreeWeight\" [style.color]=\"subTitleThreecolor\">{{subTitleThree}}</h2>\n      <h2 [style.font-size.px]=\"contentThreeSize\" [class]=\"contentThreecustomclass\"\n        [style.font-weight]=\"contentThreeWeight\" [style.color]=\"contentThreeColor\">{{contentThree}}</h2>\n    </div>\n  </span>\n  </div>\n</div>",
                    styles: ["h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}.card-line-bg{background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.05)}.card-line-img{border:1px solid #e3dbdb36!important;box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}.border-top-box{border-top:1px solid #dee2e670!important}.c-pointer{cursor:pointer}.starSize{font-size:20px!important}.img-res{width:100px;height:auto;max-width:100%;max-height:100%;padding:6px 5px}.emptyStar{color:#e1e1e1;margin-right:5px}.fullStar{color:#898989;margin-right:5px}.halfStarLeft{color:#898989;position:relative;left:1px}.halfStarRight{color:#e1e1e1;position:relative;right:1px}.f20{font-size:20px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1yYXRpbmctY2FyZC1saW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXJhdGluZy1jYXJkLWxpbmUvc3VrdS1yYXRpbmctY2FyZC1saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRTtJQTBFQztRQXBFQSxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUdyQixVQUFLLEdBQUcsZ0pBQWdKLENBQUM7UUFDdEksWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFVixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNkLG1CQUFjLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLG9CQUFlLEdBQUcsYUFBYSxDQUFDO1FBQ2xELFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFYixpQkFBWSxHQUFHLGNBQWMsQ0FBQztRQUM5QixlQUFVLEdBQUcsMkNBQTJDLENBQUM7UUFDekQsa0JBQWEsR0FBRyxvQkFBb0IsQ0FBQztRQUNyQyxvQkFBZSxHQUFHLG9CQUFvQixDQUFDO1FBQzVCLGFBQVEsR0FBRyxXQUFXLENBQUM7UUFDakIsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFDdkIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDekIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDYix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDbEMsZ0JBQVcsR0FBRyxpQkFBaUIsQ0FBQztRQUMxQixxQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFD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Z0M7O0lBQ2hDLGdEQUErQjs7SUFDL0Isa0RBQXVDOztJQUN2QyxxREFBb0Q7O0lBQ3BELHNEQUEyRDs7SUFDM0QsOENBQXNCOztJQUN0QiwrQ0FBa0I7O0lBQ2xCLG1EQUF1Qzs7SUFDdkMsaURBQWtFOztJQUNsRSxvREFBOEM7O0lBQzlDLHNEQUFnRDs7SUFDaEQsK0NBQTJDOztJQUMzQyxvREFBa0Q7O0lBQ2xELHFEQUFrRDs7SUFDbEQsbURBQTZDOztJQUM3QywwREFBeUQ7O0lBQ3pELGtEQUF1RDs7SUFDdkQsdURBQTBEOztJQUMxRCx3REFBd0Q7O0lBQ3hELHNEQUFtRDs7SUFDbkQsNkRBQStEOztJQUMvRCxpREFBeUM7O0lBQ3pDLHNEQUF3RDs7SUFDeEQsdURBQXNEOztJQUN0RCxxREFBaUQ7O0lBQ2pELDREQUE2RDs7SUFDN0QsaURBQXlDOztJQUN6QyxzREFBd0Q7O0lBQ3hELHVEQUFzRDs7SUFDdEQscURBQWlEOztJQUNqRCw0REFBNkQ7O0lBQzdELGtEQUFnRDs7SUFDaEQsdURBQTJEOztJQUMzRCx3REFBeUQ7O0lBQ3pELHNEQUFvRDs7SUFDcEQsNkRBQWdFOztJQUNoRSxvREFBd0Q7O0lBQ3hELHlEQUErRDs7SUFDL0QsMERBQTZEOztJQUM3RCx3REFBd0Q7O0lBQ3hELHlEQUF1RDs7SUFDdkQsbURBQTZDOztJQUM3Qyx3REFBNEQ7O0lBQzVELHlEQUEwRDs7SUFDMUQsdURBQXFEOztJQUNyRCw4REFBaUU7O0lBQ2pFLDZDQUFPOztJQUNQLDRDQUFVOztJQUNWLDZDQUFzQzs7SUFDdEMsd0RBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1yYXRpbmctY2FyZC1saW5lJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtcmF0aW5nLWNhcmQtbGluZS5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N1a3UtcmF0aW5nLWNhcmQtbGluZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VSYXRpbmdDYXJkTGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdGZ1bGxTdGFycyA9IDA7XG5cdGZ1bGxTdGFyc0FycmF5ID0gW107XG5cdGhhbGZTdGFyID0gMDtcblx0ZW1wdHlTdGFycyA9IDA7XG5cdGVtcHR5U3RhcnNBcnJheSA9IFtdO1xuXHRfcmF0aW5nVmFsdWU7XG5cdEBJbnB1dCgpXG5cdGltYWdlID0gJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjEuZ3N0YXRpYy5jb20vc2hvcHBpbmc/cT10Ym46QU5kOUdjU1RxejY0QTJYajU0ZjV2NDRyRDl2TlVxeVRYejVjMHI3elRsZmgxOGlkb3lVWUdIOGhGNTFwUDZfZWZvZG5hakN1WVZCNG9rY01uVDAmdXNxcD1DQWMnO1xuXHRASW5wdXQoJ2ljb24tb25lJykgaWNvbk9uZSA9ICcnO1xuXHRASW5wdXQoJ2ljb24tdHdvJykgaWNvblR3byA9ICcnO1xuXHRASW5wdXQoJ21zZy1zdGF0dXMnKSBtc2dTdGF0dXM7XG5cdEBJbnB1dCgnY3VzdG9tY2xhc3MnKSBjdXN0b21jbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2N1c3RvbUltZ2NsYXNzJykgY3VzdG9tSW1nY2xhc3MgPSAnaW1nLXJlcyc7XG5cdEBJbnB1dCgnY3VzdG9tLWljb25jbGFzcycpIGN1c3RvbUljb25jbGFzcyA9ICd0ZXh0LWNlbnRlcic7XG5cdEBJbnB1dCgpIGJnQ29sb3IgPSAnJztcblx0QElucHV0KCkgaW50ZXJlc3Q7XG5cdEBJbnB1dCgpIGltYWdlQ29sU2l6ZSA9ICdjb2wtc20tMSBwLTAnO1xuXHRASW5wdXQoKSB0eHRjb2xzaXplID0gJ2NvbC1zbS0zIGNvbC14cy0xMiBwbC1sZy0yIHByLTIgcHQtMSBtdC0xJztcblx0QElucHV0KCkgdHh0dHdvY29sc2l6ZSA9ICdjb2wtc20tMyBwdC0yIG10LTEnO1xuXHRASW5wdXQoKSB0eHR0aHJlZWNvbHNpemUgPSAnY29sLXNtLTMgcHQtMiBtdC0xJztcblx0QElucHV0KCd0aXRsZS1vbmUnKSB0aXRsZU9uZSA9ICdUaXRsZSBPbmUnO1xuXHRASW5wdXQoJ3RpdGxlLW9uZS1jb2xvcicpIHRpdGxlT25lQ29sb3IgPSAnYmxhY2snO1xuXHRASW5wdXQoJ3RpdGxlLW9uZS13ZWlnaHQnKSB0aXRsZU9uZVdlaWdodCA9ICc2MDAnO1xuXHRASW5wdXQoJ3RpdGxlLW9uZS1zaXplJykgdGl0bGVPbmVTaXplID0gJzE0Jztcblx0QElucHV0KCd0aXRsZS1vbmUtY3VzdG9tY2xhc3MnKSB0aXRsZU9uZWN1c3RvbWNsYXNzID0gJyc7XG5cdEBJbnB1dCgncmF0aW5nLXRpdGxlJykgcmF0aW5nVGl0bGUgPSAnUkFUSU5HIFJFQ0VJVkVEJztcblx0QElucHV0KCdyYXRpbmctdGl0bGUtY29sb3InKSByYXRpbmd0aXRsZUNvbG9yID0gJyNiNmI2YjYnO1xuXHRASW5wdXQoJ3JhdGluZy10aXRsZS13ZWlnaHQnKSByYXRpbmd0aXRsZVdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoJ3JhdGluZy10aXRsZS1zaXplJykgcmF0aW5ndGl0bGVTaXplID0gJzEyJztcblx0QElucHV0KCdyYXRpbmctdGl0bGUtY3VzdG9tY2xhc3MnKSByYXRpbmd0aXRsZWN1c3RvbWNsYXNzID0gJyc7XG5cdEBJbnB1dCgnY29udGVudC1vbmUnKSBjb250ZW50T25lID0gJ04vQSc7XG5cdEBJbnB1dCgnY29udGVudC1vbmUtY29sb3InKSBjb250ZW50T25lQ29sb3IgPSAnIzNlM2UzZSc7XG5cdEBJbnB1dCgnY29udGVudC1vbmUtd2VpZ2h0JykgY29udGVudE9uZVdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoJ2NvbnRlbnQtb25lLXNpemUnKSBjb250ZW50T25lU2l6ZSA9ICcxNCc7XG5cdEBJbnB1dCgnY29udGVudC1vbmUtY3VzdG9tY2xhc3MnKSBjb250ZW50T25lY3VzdG9tY2xhc3MgPSAnJztcblx0QElucHV0KCdjb250ZW50LXR3bycpIGNvbnRlbnRUd28gPSAnTi9BJztcblx0QElucHV0KCdjb250ZW50LXR3by1jb2xvcicpIGNvbnRlbnRUd29Db2xvciA9ICcjM2UzZTNlJztcblx0QElucHV0KCdjb250ZW50LXR3by13ZWlnaHQnKSBjb250ZW50VHdvV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgnY29udGVudC10d28tc2l6ZScpIGNvbnRlbnRUd29TaXplID0gJzE0Jztcblx0QElucHV0KCdjb250ZW50LXR3by1jdXN0b21jbGFzcycpIGNvbnRlbnRUd29jdXN0b21jbGFzcyA9ICcnO1xuXHRASW5wdXQoJ3N1Yi10aXRsZS10d28nKSBzdWJUaXRsZVR3byA9ICdTT0xEIEJZJztcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLWNvbG9yJykgc3ViVGl0bGVUd29Db2xvciA9ICcjYjZiNmI2Jztcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLXdlaWdodCcpIHN1YlRpdGxlVHdvV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgnc3ViLXRpdGxlLXR3by1zaXplJykgc3ViVGl0bGVUd29TaXplID0gJzEyJztcblx0QElucHV0KCdzdWItdGl0bGUtdHdvLWN1c3RvbWNsYXNzJykgc3ViVGl0bGVUd29jdXN0b21jbGFzcyA9ICcnO1xuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZScpIHN1YlRpdGxlVGhyZWUgPSAnVE9UQUwgUFJJQ0UnO1xuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZS1jb2xvcicpIHN1YlRpdGxlVGhyZWVjb2xvciA9ICcjYjZiNmI2Jztcblx0QElucHV0KCdzdWItdGl0bGUtdGhyZWUtd2VpZ2h0Jykgc3ViVGl0bGVUaHJlZVdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZS1zaXplJykgc3ViVGl0bGVUaHJlZVNpemUgPSAnMTInO1xuXHRASW5wdXQoJ3N1Yi10aXRsZS10aHJlZWNsYXNzJykgc3ViVGl0bGVUaHJlZUNsYXNzID0gJyc7XG5cdEBJbnB1dCgnY29udGVudC10aHJlZScpIGNvbnRlbnRUaHJlZSA9ICdOL0EnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY29sb3InKSBjb250ZW50VGhyZWVDb2xvciA9ICcjM2UzZTNlJztcblx0QElucHV0KCdjb250ZW50LXRocmVlLXdpZGdldCcpIGNvbnRlbnRUaHJlZVdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtc2l6ZScpIGNvbnRlbnRUaHJlZVNpemUgPSAnMTQnO1xuXHRASW5wdXQoJ2NvbnRlbnQtdGhyZWUtY3VzdG9tY2xhc3MnKSBjb250ZW50VGhyZWVjdXN0b21jbGFzcyA9ICcnO1xuXHRteUhUTUw7XG5cdF9yYXRlID0gMDtcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QElucHV0KCkgY3VzdG9tUmF0aW5nY2xhc3M7XG5cdEBJbnB1dCgncmF0aW5nLXZhbHVlJylcblx0c2V0IHJhdGluZ1ZhbHVlKHJhdGluZ1ZhbHVlOiBudW1iZXIpIHtcblx0XHRjb25zb2xlLmxvZygncmEnLCB0aGlzLnJhdGluZ1ZhbHVlKTtcblx0XHR0aGlzLmZ1bGxTdGFycyA9IE1hdGgucm91bmQocmF0aW5nVmFsdWUpO1xuXHRcdHRoaXMuZnVsbFN0YXJzQXJyYXkgPSBBcnJheSh0aGlzLmZ1bGxTdGFycykuZmlsbCgxKTtcblx0XHR0aGlzLmhhbGZTdGFyID0gdGhpcy5mdWxsU3RhcnMgPCByYXRpbmdWYWx1ZSA/IDEgOiAwO1xuXHRcdHRoaXMuZW1wdHlTdGFycyA9IDUgLSB0aGlzLmZ1bGxTdGFycyAtIHRoaXMuaGFsZlN0YXI7XG5cdFx0dGhpcy5lbXB0eVN0YXJzQXJyYXkgPSBBcnJheSh0aGlzLmVtcHR5U3RhcnMpLmZpbGwoMSk7XG5cdH1cblx0Y29uc3RydWN0b3IoKSB7IH1cblx0bmdPbkluaXQoKSB7IH1cbn1cbiJdfQ==