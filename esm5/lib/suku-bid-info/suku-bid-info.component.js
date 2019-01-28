/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<span class=\"row\">\n  <span class=\"m-2 mr-3\">\n    <h1 [style.font-size.px]=\"bidSize\" [class]=\"bidCustomClass\" [style.font-weight]=\"bidWeight\" [style.color]=\"bidColor\" id=\"{{id}}\">\n    {{bids}}\n    </h1>\n      <h2 [style.font-size.px]=\"bidHeadingSize\" [class]=\"bidHeadingCustomClass\" id=\"{{id}}\" [style.font-weight]=\"bidHeadingWeight\" [style.color]=\"bidHeadingColor\">\n     {{bidHeading}}\n     </h2>\n  </span>\n  <span class=\"m-2 mr-3\">\n    <h1 [style.font-size.px]=\"percentSize\" [class]=\"percentcustomClass\" [style.font-weight]=\"percentWeight\" [style.color]=\"percentColor\" id=\"{{id}}\">\n    {{percent}}\n    </h1>\n      <h2 [style.font-size.px]=\"percentHeadingSize\" [class]=\"percentageHeadingcustomClass\" id=\"{{id}}\" [style.font-weight]=\"percentHeadingWeight\" [style.color]=\"percentHeadingColor\">\n     {{percentHeading}}\n     </h2>\n  </span>\n</span>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1iaWQtaW5mby9zdWt1LWJpZC1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEQ7SUE0QkU7UUF0QlMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNKLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZCxhQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDYixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNiLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUM5Qix1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDakIsaUNBQTRCLEdBQUcsRUFBRSxDQUFDO1FBQ2pELGVBQVUsR0FBRyxNQUFNLENBQUM7UUFDaEIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDcEIsb0JBQWUsR0FBRyxPQUFPLENBQUM7UUFDeEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzdDLE9BQUUsR0FBRyxTQUFTLENBQUM7UUFDaEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUN6Qix3QkFBbUIsR0FBRyxPQUFPLENBQUM7UUFDN0IseUJBQW9CLEdBQUcsS0FBSyxDQUFDO0lBRWhELENBQUM7Ozs7SUFFakIsdUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIseTVCQUE2Qzs7aUJBRTlDOzs7Ozt1QkFFRSxLQUFLOzBCQUNOLEtBQUssU0FBQyxVQUFVOzJCQUNoQixLQUFLLFNBQUMsV0FBVzs0QkFDakIsS0FBSyxTQUFDLFlBQVk7aUNBQ2xCLEtBQUssU0FBQyxpQkFBaUI7d0NBQ3ZCLEtBQUssU0FBQyx3QkFBd0I7cUNBQzlCLEtBQUssU0FBQyxxQkFBcUI7K0NBQzNCLEtBQUssU0FBQyw0QkFBNEI7NkJBQ2xDLEtBQUssU0FBQyxhQUFhO2lDQUNuQixLQUFLLFNBQUMsaUJBQWlCO2tDQUN2QixLQUFLLFNBQUMsbUJBQW1CO21DQUN4QixLQUFLLFNBQUMsb0JBQW9CO3FCQUMxQixLQUFLOzBCQUNOLEtBQUs7OEJBQ0wsS0FBSyxTQUFDLGlCQUFpQjsrQkFDdkIsS0FBSyxTQUFDLGtCQUFrQjtnQ0FDeEIsS0FBSyxTQUFDLG1CQUFtQjtpQ0FDekIsS0FBSyxTQUFDLG9CQUFvQjtxQ0FDMUIsS0FBSyxTQUFDLHlCQUF5QjtzQ0FDL0IsS0FBSyxTQUFDLDBCQUEwQjt1Q0FDaEMsS0FBSyxTQUFDLDJCQUEyQjs7SUFPbkMsMkJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTVCWSxvQkFBb0I7OztJQUMvQixvQ0FBc0I7O0lBQ3ZCLHVDQUFrQzs7SUFDbEMsd0NBQXVDOztJQUN2Qyx5Q0FBdUM7O0lBQ3ZDLDhDQUE4Qzs7SUFDOUMscURBQTREOztJQUM1RCxrREFBc0Q7O0lBQ3RELDREQUF1RTs7SUFDdkUsMENBQTBDOztJQUMxQyw4Q0FBZ0Q7O0lBQ2hELCtDQUFzRDs7SUFDckQsZ0RBQXNEOztJQUN0RCxrQ0FBd0I7O0lBQ3pCLHVDQUF5Qjs7SUFDekIsMkNBQTZDOztJQUM3Qyw0Q0FBa0Q7O0lBQ2xELDZDQUFrRDs7SUFDbEQsOENBQXdEOztJQUN4RCxrREFBNEQ7O0lBQzVELG1EQUFpRTs7SUFDakUsb0RBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1iaWQtaW5mbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWJpZC1pbmZvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1iaWQtaW5mby5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VCaWRJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgYmlkcyA9ICczNzQnO1xuXHRASW5wdXQoJ2JpZC1zaXplJykgYmlkU2l6ZSA9ICcxNyc7XG5cdEBJbnB1dCgnYmlkLWNvbG9yJykgYmlkQ29sb3IgPSAnYmxhY2snO1xuXHRASW5wdXQoJ2JpZC13ZWlnaHQnKSBiaWRXZWlnaHQgPSAnNjAwJztcblx0QElucHV0KCdiaWQtY3VzdG9tY2xhc3MnKSBiaWRDdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2JpZC1oZWFkaW5nY3VzdG9tY2xhc3MnKSBiaWRIZWFkaW5nQ3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCdwZXJjZW50LWN1c3RvbWNsYXNzJykgcGVyY2VudGN1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgncGVyY2VudC1oZWFkaW5nY3VzdG9tY2xhc3MnKSBwZXJjZW50YWdlSGVhZGluZ2N1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgnYmlkLWhlYWRpbmcnKSBiaWRIZWFkaW5nID0gJ2JpZHMnO1xuXHRASW5wdXQoJ2JpZC1oZWRpbmctc2l6ZScpIGJpZEhlYWRpbmdTaXplID0gJzE0Jztcblx0QElucHV0KCdiaWQtaGVhZGluZy1jb2xvcicpIGJpZEhlYWRpbmdDb2xvciA9ICdibGFjayc7XG4gIEBJbnB1dCgnYmlkLWhlYWRpbmctd2VpZ2h0JykgYmlkSGVhZGluZ1dlaWdodCA9ICc1MDAnO1xuICBASW5wdXQoKSBpZCA9ICdiaWRJbmZvJztcblx0QElucHV0KCkgcGVyY2VudCA9ICcxMCUnO1xuXHRASW5wdXQoJ3BlcmNlbnRhZ2Utc2l6ZScpIHBlcmNlbnRTaXplID0gJzE3Jztcblx0QElucHV0KCdwZXJjZW50YWdlLWNvbG9yJykgcGVyY2VudENvbG9yID0gJ2JsYWNrJztcblx0QElucHV0KCdwZXJjZW50YWdlLXdlaWdodCcpIHBlcmNlbnRXZWlnaHQgPSAnNjAwJztcblx0QElucHV0KCdwZXJjZW50YWdlLWhlYWRpbmcnKSBwZXJjZW50SGVhZGluZyA9ICdmdWxmaWxsJztcblx0QElucHV0KCdwZXJjZW50YWdlLWhlYWRpbmctc2l6ZScpIHBlcmNlbnRIZWFkaW5nU2l6ZSA9ICcxNCc7XG5cdEBJbnB1dCgncGVyY2VudGFnZS1oZWFkaW5nLWNvbG9yJykgcGVyY2VudEhlYWRpbmdDb2xvciA9ICdibGFjayc7XG5cdEBJbnB1dCgncGVyY2VudGFnZS1oZWFkaW5nLXdlaWdodCcpIHBlcmNlbnRIZWFkaW5nV2VpZ2h0ID0gJzUwMCc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=