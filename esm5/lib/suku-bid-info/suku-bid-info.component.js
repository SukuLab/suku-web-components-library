/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-bid-info/suku-bid-info.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuBidInfoComponent = /** @class */ (function () {
    function SukuBidInfoComponent() {
        this.bids = '374';
        this.bidSize = '17';
        this.bidColor = 'black';
        this.bidWeight = '600';
        this.bidCustomClass = '';
        this.bidHeadingCustomClass = '';
        this.percentcustomClass = '';
        this.percentageHeadingcustomClass = '';
        this.bidHeading = 'bids';
        this.bidHeadingSize = '14';
        this.bidHeadingColor = 'black';
        this.bidHeadingWeight = '500';
        this.id = 'bidInfo';
        this.percent = '10%';
        this.percentSize = '17';
        this.percentColor = 'black';
        this.percentWeight = '600';
        this.percentHeading = 'fulfill';
        this.percentHeadingSize = '14';
        this.percentHeadingColor = 'black';
        this.percentHeadingWeight = '500';
    }
    /**
     * @return {?}
     */
    SukuBidInfoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuBidInfoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-bid-info',
                    template: "<span class=\"row\">\n  <span class=\"m-2 mr-3\">\n    <h1 [style.font-size.px]=\"bidSize\" [class]=\"bidCustomClass\" [style.font-weight]=\"bidWeight\" [style.color]=\"bidColor\"\n      id=\"{{id}}\">\n      {{bids}}\n    </h1>\n    <h2 [style.font-size.px]=\"bidHeadingSize\" [class]=\"bidHeadingCustomClass\" id=\"{{id}}\" [style.font-weight]=\"bidHeadingWeight\"\n      [style.color]=\"bidHeadingColor\">\n      {{bidHeading}}\n    </h2>\n  </span>\n  <span class=\"m-2 mr-3\">\n    <h1 [style.font-size.px]=\"percentSize\" [class]=\"percentcustomClass\" [style.font-weight]=\"percentWeight\"\n      [style.color]=\"percentColor\" id=\"{{id}}\">\n      {{percent}}\n    </h1>\n    <h2 [style.font-size.px]=\"percentHeadingSize\" [class]=\"percentageHeadingcustomClass\" id=\"{{id}}\"\n      [style.font-weight]=\"percentHeadingWeight\" [style.color]=\"percentHeadingColor\">\n      {{percentHeading}}\n    </h2>\n  </span>\n</span>",
                    styles: ["h1{font-family:Poppins,sans-serif;font-size:20px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-all!important}h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuBidInfoComponent.ctorParameters = function () { return []; };
    SukuBidInfoComponent.propDecorators = {
        bids: [{ type: Input }],
        bidSize: [{ type: Input, args: ['bid-size',] }],
        bidColor: [{ type: Input, args: ['bid-color',] }],
        bidWeight: [{ type: Input, args: ['bid-weight',] }],
        bidCustomClass: [{ type: Input, args: ['bid-customclass',] }],
        bidHeadingCustomClass: [{ type: Input, args: ['bid-headingcustomclass',] }],
        percentcustomClass: [{ type: Input, args: ['percent-customclass',] }],
        percentageHeadingcustomClass: [{ type: Input, args: ['percent-headingcustomclass',] }],
        bidHeading: [{ type: Input, args: ['bid-heading',] }],
        bidHeadingSize: [{ type: Input, args: ['bid-heding-size',] }],
        bidHeadingColor: [{ type: Input, args: ['bid-heading-color',] }],
        bidHeadingWeight: [{ type: Input, args: ['bid-heading-weight',] }],
        id: [{ type: Input }],
        percent: [{ type: Input }],
        percentSize: [{ type: Input, args: ['percentage-size',] }],
        percentColor: [{ type: Input, args: ['percentage-color',] }],
        percentWeight: [{ type: Input, args: ['percentage-weight',] }],
        percentHeading: [{ type: Input, args: ['percentage-heading',] }],
        percentHeadingSize: [{ type: Input, args: ['percentage-heading-size',] }],
        percentHeadingColor: [{ type: Input, args: ['percentage-heading-color',] }],
        percentHeadingWeight: [{ type: Input, args: ['percentage-heading-weight',] }]
    };
    return SukuBidInfoComponent;
}());
export { SukuBidInfoComponent };
if (false) {
    /** @type {?} */
    SukuBidInfoComponent.prototype.bids;
    /** @type {?} */
    SukuBidInfoComponent.prototype.bidSize;
    /** @type {?} */
    SukuBidInfoComponent.prototype.bidColor;
    /** @type {?} */
    SukuBidInfoComponent.prototype.bidWeight;
    /** @type {?} */
    SukuBidInfoComponent.prototype.bidCustomClass;
    /** @type {?} */
    SukuBidInfoComponent.prototype.bidHeadingCustomClass;
    /** @type {?} */
    SukuBidInfoComponent.prototype.percentcustomClass;
    /** @type {?} */
    SukuBidInfoComponent.prototype.percentageHeadingcustomClass;
    /** @type {?} */
    SukuBidInfoComponent.prototype.bidHeading;
    /** @type {?} */
    SukuBidInfoComponent.prototype.bidHeadingSize;
    /** @type {?} */
    SukuBidInfoComponent.prototype.bidHeadingColor;
    /** @type {?} */
    SukuBidInfoComponent.prototype.bidHeadingWeight;
    /** @type {?} */
    SukuBidInfoComponent.prototype.id;
    /** @type {?} */
    SukuBidInfoComponent.prototype.percent;
    /** @type {?} */
    SukuBidInfoComponent.prototype.percentSize;
    /** @type {?} */
    SukuBidInfoComponent.prototype.percentColor;
    /** @type {?} */
    SukuBidInfoComponent.prototype.percentWeight;
    /** @type {?} */
    SukuBidInfoComponent.prototype.percentHeading;
    /** @type {?} */
    SukuBidInfoComponent.prototype.percentHeadingSize;
    /** @type {?} */
    SukuBidInfoComponent.prototype.percentHeadingColor;
    /** @type {?} */
    SukuBidInfoComponent.prototype.percentHeadingWeight;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1iaWQtaW5mby9zdWt1LWJpZC1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhEO0lBNEJFO1FBdEJTLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDSixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2QsYUFBUSxHQUFHLE9BQU8sQ0FBQztRQUNsQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2IsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDYiwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDOUIsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGlDQUE0QixHQUFHLEVBQUUsQ0FBQztRQUNqRCxlQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ2hCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLG9CQUFlLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM3QyxPQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDQyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNsQixpQkFBWSxHQUFHLE9BQU8sQ0FBQztRQUN0QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUNyQixtQkFBYyxHQUFHLFNBQVMsQ0FBQztRQUN0Qix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDekIsd0JBQW1CLEdBQUcsT0FBTyxDQUFDO1FBQzdCLHlCQUFvQixHQUFHLEtBQUssQ0FBQztJQUVoRCxDQUFDOzs7O0lBRWpCLHVDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLG03QkFBNkM7O2lCQUU5Qzs7Ozs7dUJBRUUsS0FBSzswQkFDTixLQUFLLFNBQUMsVUFBVTsyQkFDaEIsS0FBSyxTQUFDLFdBQVc7NEJBQ2pCLEtBQUssU0FBQyxZQUFZO2lDQUNsQixLQUFLLFNBQUMsaUJBQWlCO3dDQUN2QixLQUFLLFNBQUMsd0JBQXdCO3FDQUM5QixLQUFLLFNBQUMscUJBQXFCOytDQUMzQixLQUFLLFNBQUMsNEJBQTRCOzZCQUNsQyxLQUFLLFNBQUMsYUFBYTtpQ0FDbkIsS0FBSyxTQUFDLGlCQUFpQjtrQ0FDdkIsS0FBSyxTQUFDLG1CQUFtQjttQ0FDeEIsS0FBSyxTQUFDLG9CQUFvQjtxQkFDMUIsS0FBSzswQkFDTixLQUFLOzhCQUNMLEtBQUssU0FBQyxpQkFBaUI7K0JBQ3ZCLEtBQUssU0FBQyxrQkFBa0I7Z0NBQ3hCLEtBQUssU0FBQyxtQkFBbUI7aUNBQ3pCLEtBQUssU0FBQyxvQkFBb0I7cUNBQzFCLEtBQUssU0FBQyx5QkFBeUI7c0NBQy9CLEtBQUssU0FBQywwQkFBMEI7dUNBQ2hDLEtBQUssU0FBQywyQkFBMkI7O0lBT25DLDJCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0E1Qlksb0JBQW9COzs7SUFDL0Isb0NBQXNCOztJQUN2Qix1Q0FBa0M7O0lBQ2xDLHdDQUF1Qzs7SUFDdkMseUNBQXVDOztJQUN2Qyw4Q0FBOEM7O0lBQzlDLHFEQUE0RDs7SUFDNUQsa0RBQXNEOztJQUN0RCw0REFBdUU7O0lBQ3ZFLDBDQUEwQzs7SUFDMUMsOENBQWdEOztJQUNoRCwrQ0FBc0Q7O0lBQ3JELGdEQUFzRDs7SUFDdEQsa0NBQXdCOztJQUN6Qix1Q0FBeUI7O0lBQ3pCLDJDQUE2Qzs7SUFDN0MsNENBQWtEOztJQUNsRCw2Q0FBa0Q7O0lBQ2xELDhDQUF3RDs7SUFDeEQsa0RBQTREOztJQUM1RCxtREFBaUU7O0lBQ2pFLG9EQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtYmlkLWluZm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1iaWQtaW5mby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtYmlkLWluZm8uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1QmlkSW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGJpZHMgPSAnMzc0Jztcblx0QElucHV0KCdiaWQtc2l6ZScpIGJpZFNpemUgPSAnMTcnO1xuXHRASW5wdXQoJ2JpZC1jb2xvcicpIGJpZENvbG9yID0gJ2JsYWNrJztcblx0QElucHV0KCdiaWQtd2VpZ2h0JykgYmlkV2VpZ2h0ID0gJzYwMCc7XG5cdEBJbnB1dCgnYmlkLWN1c3RvbWNsYXNzJykgYmlkQ3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCdiaWQtaGVhZGluZ2N1c3RvbWNsYXNzJykgYmlkSGVhZGluZ0N1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgncGVyY2VudC1jdXN0b21jbGFzcycpIHBlcmNlbnRjdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoJ3BlcmNlbnQtaGVhZGluZ2N1c3RvbWNsYXNzJykgcGVyY2VudGFnZUhlYWRpbmdjdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2JpZC1oZWFkaW5nJykgYmlkSGVhZGluZyA9ICdiaWRzJztcblx0QElucHV0KCdiaWQtaGVkaW5nLXNpemUnKSBiaWRIZWFkaW5nU2l6ZSA9ICcxNCc7XG5cdEBJbnB1dCgnYmlkLWhlYWRpbmctY29sb3InKSBiaWRIZWFkaW5nQ29sb3IgPSAnYmxhY2snO1xuICBASW5wdXQoJ2JpZC1oZWFkaW5nLXdlaWdodCcpIGJpZEhlYWRpbmdXZWlnaHQgPSAnNTAwJztcbiAgQElucHV0KCkgaWQgPSAnYmlkSW5mbyc7XG5cdEBJbnB1dCgpIHBlcmNlbnQgPSAnMTAlJztcblx0QElucHV0KCdwZXJjZW50YWdlLXNpemUnKSBwZXJjZW50U2l6ZSA9ICcxNyc7XG5cdEBJbnB1dCgncGVyY2VudGFnZS1jb2xvcicpIHBlcmNlbnRDb2xvciA9ICdibGFjayc7XG5cdEBJbnB1dCgncGVyY2VudGFnZS13ZWlnaHQnKSBwZXJjZW50V2VpZ2h0ID0gJzYwMCc7XG5cdEBJbnB1dCgncGVyY2VudGFnZS1oZWFkaW5nJykgcGVyY2VudEhlYWRpbmcgPSAnZnVsZmlsbCc7XG5cdEBJbnB1dCgncGVyY2VudGFnZS1oZWFkaW5nLXNpemUnKSBwZXJjZW50SGVhZGluZ1NpemUgPSAnMTQnO1xuXHRASW5wdXQoJ3BlcmNlbnRhZ2UtaGVhZGluZy1jb2xvcicpIHBlcmNlbnRIZWFkaW5nQ29sb3IgPSAnYmxhY2snO1xuXHRASW5wdXQoJ3BlcmNlbnRhZ2UtaGVhZGluZy13ZWlnaHQnKSBwZXJjZW50SGVhZGluZ1dlaWdodCA9ICc1MDAnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19