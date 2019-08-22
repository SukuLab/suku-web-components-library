/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuBidInfoComponent {
    constructor() {
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
    ngOnInit() {
    }
}
SukuBidInfoComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-bid-info',
                template: "<span class=\"row\">\r\n  <span class=\"m-2 mr-3\">\r\n    <h1 [style.font-size.px]=\"bidSize\" [class]=\"bidCustomClass\" [style.font-weight]=\"bidWeight\" [style.color]=\"bidColor\"\r\n      id=\"{{id}}\">\r\n      {{bids}}\r\n    </h1>\r\n    <h2 [style.font-size.px]=\"bidHeadingSize\" [class]=\"bidHeadingCustomClass\" id=\"{{id}}\" [style.font-weight]=\"bidHeadingWeight\"\r\n      [style.color]=\"bidHeadingColor\">\r\n      {{bidHeading}}\r\n    </h2>\r\n  </span>\r\n  <span class=\"m-2 mr-3\">\r\n    <h1 [style.font-size.px]=\"percentSize\" [class]=\"percentcustomClass\" [style.font-weight]=\"percentWeight\"\r\n      [style.color]=\"percentColor\" id=\"{{id}}\">\r\n      {{percent}}\r\n    </h1>\r\n    <h2 [style.font-size.px]=\"percentHeadingSize\" [class]=\"percentageHeadingcustomClass\" id=\"{{id}}\"\r\n      [style.font-weight]=\"percentHeadingWeight\" [style.color]=\"percentHeadingColor\">\r\n      {{percentHeading}}\r\n    </h2>\r\n  </span>\r\n</span>",
                styles: ["h1{font-family:Poppins,sans-serif;font-size:20px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-all!important}h2{font-family:'Encode Sans',sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#b6b6b6;word-break:break-all!important}"]
            }] }
];
/** @nocollapse */
SukuBidInfoComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1iaWQtaW5mby9zdWt1LWJpZC1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPeEQsTUFBTSxPQUFPLG9CQUFvQjtJQXVCL0I7UUF0QlMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNKLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZCxhQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDYixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNiLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUM5Qix1QkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDakIsaUNBQTRCLEdBQUcsRUFBRSxDQUFDO1FBQ2pELGVBQVUsR0FBRyxNQUFNLENBQUM7UUFDaEIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDcEIsb0JBQWUsR0FBRyxPQUFPLENBQUM7UUFDeEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzdDLE9BQUUsR0FBRyxTQUFTLENBQUM7UUFDaEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUN6Qix3QkFBbUIsR0FBRyxPQUFPLENBQUM7UUFDN0IseUJBQW9CLEdBQUcsS0FBSyxDQUFDO0lBRWhELENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDY5QkFBNkM7O2FBRTlDOzs7OzttQkFFRSxLQUFLO3NCQUNOLEtBQUssU0FBQyxVQUFVO3VCQUNoQixLQUFLLFNBQUMsV0FBVzt3QkFDakIsS0FBSyxTQUFDLFlBQVk7NkJBQ2xCLEtBQUssU0FBQyxpQkFBaUI7b0NBQ3ZCLEtBQUssU0FBQyx3QkFBd0I7aUNBQzlCLEtBQUssU0FBQyxxQkFBcUI7MkNBQzNCLEtBQUssU0FBQyw0QkFBNEI7eUJBQ2xDLEtBQUssU0FBQyxhQUFhOzZCQUNuQixLQUFLLFNBQUMsaUJBQWlCOzhCQUN2QixLQUFLLFNBQUMsbUJBQW1COytCQUN4QixLQUFLLFNBQUMsb0JBQW9CO2lCQUMxQixLQUFLO3NCQUNOLEtBQUs7MEJBQ0wsS0FBSyxTQUFDLGlCQUFpQjsyQkFDdkIsS0FBSyxTQUFDLGtCQUFrQjs0QkFDeEIsS0FBSyxTQUFDLG1CQUFtQjs2QkFDekIsS0FBSyxTQUFDLG9CQUFvQjtpQ0FDMUIsS0FBSyxTQUFDLHlCQUF5QjtrQ0FDL0IsS0FBSyxTQUFDLDBCQUEwQjttQ0FDaEMsS0FBSyxTQUFDLDJCQUEyQjs7OztJQXBCakMsb0NBQXNCOztJQUN2Qix1Q0FBa0M7O0lBQ2xDLHdDQUF1Qzs7SUFDdkMseUNBQXVDOztJQUN2Qyw4Q0FBOEM7O0lBQzlDLHFEQUE0RDs7SUFDNUQsa0RBQXNEOztJQUN0RCw0REFBdUU7O0lBQ3ZFLDBDQUEwQzs7SUFDMUMsOENBQWdEOztJQUNoRCwrQ0FBc0Q7O0lBQ3JELGdEQUFzRDs7SUFDdEQsa0NBQXdCOztJQUN6Qix1Q0FBeUI7O0lBQ3pCLDJDQUE2Qzs7SUFDN0MsNENBQWtEOztJQUNsRCw2Q0FBa0Q7O0lBQ2xELDhDQUF3RDs7SUFDeEQsa0RBQTREOztJQUM1RCxtREFBaUU7O0lBQ2pFLG9EQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtYmlkLWluZm8nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWJpZC1pbmZvLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWJpZC1pbmZvLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VCaWRJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBiaWRzID0gJzM3NCc7XHJcblx0QElucHV0KCdiaWQtc2l6ZScpIGJpZFNpemUgPSAnMTcnO1xyXG5cdEBJbnB1dCgnYmlkLWNvbG9yJykgYmlkQ29sb3IgPSAnYmxhY2snO1xyXG5cdEBJbnB1dCgnYmlkLXdlaWdodCcpIGJpZFdlaWdodCA9ICc2MDAnO1xyXG5cdEBJbnB1dCgnYmlkLWN1c3RvbWNsYXNzJykgYmlkQ3VzdG9tQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2JpZC1oZWFkaW5nY3VzdG9tY2xhc3MnKSBiaWRIZWFkaW5nQ3VzdG9tQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ3BlcmNlbnQtY3VzdG9tY2xhc3MnKSBwZXJjZW50Y3VzdG9tQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ3BlcmNlbnQtaGVhZGluZ2N1c3RvbWNsYXNzJykgcGVyY2VudGFnZUhlYWRpbmdjdXN0b21DbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnYmlkLWhlYWRpbmcnKSBiaWRIZWFkaW5nID0gJ2JpZHMnO1xyXG5cdEBJbnB1dCgnYmlkLWhlZGluZy1zaXplJykgYmlkSGVhZGluZ1NpemUgPSAnMTQnO1xyXG5cdEBJbnB1dCgnYmlkLWhlYWRpbmctY29sb3InKSBiaWRIZWFkaW5nQ29sb3IgPSAnYmxhY2snO1xyXG4gIEBJbnB1dCgnYmlkLWhlYWRpbmctd2VpZ2h0JykgYmlkSGVhZGluZ1dlaWdodCA9ICc1MDAnO1xyXG4gIEBJbnB1dCgpIGlkID0gJ2JpZEluZm8nO1xyXG5cdEBJbnB1dCgpIHBlcmNlbnQgPSAnMTAlJztcclxuXHRASW5wdXQoJ3BlcmNlbnRhZ2Utc2l6ZScpIHBlcmNlbnRTaXplID0gJzE3JztcclxuXHRASW5wdXQoJ3BlcmNlbnRhZ2UtY29sb3InKSBwZXJjZW50Q29sb3IgPSAnYmxhY2snO1xyXG5cdEBJbnB1dCgncGVyY2VudGFnZS13ZWlnaHQnKSBwZXJjZW50V2VpZ2h0ID0gJzYwMCc7XHJcblx0QElucHV0KCdwZXJjZW50YWdlLWhlYWRpbmcnKSBwZXJjZW50SGVhZGluZyA9ICdmdWxmaWxsJztcclxuXHRASW5wdXQoJ3BlcmNlbnRhZ2UtaGVhZGluZy1zaXplJykgcGVyY2VudEhlYWRpbmdTaXplID0gJzE0JztcclxuXHRASW5wdXQoJ3BlcmNlbnRhZ2UtaGVhZGluZy1jb2xvcicpIHBlcmNlbnRIZWFkaW5nQ29sb3IgPSAnYmxhY2snO1xyXG5cdEBJbnB1dCgncGVyY2VudGFnZS1oZWFkaW5nLXdlaWdodCcpIHBlcmNlbnRIZWFkaW5nV2VpZ2h0ID0gJzUwMCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19