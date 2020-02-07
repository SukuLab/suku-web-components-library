/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-bid-info/suku-bid-info.component.ts
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
                template: "<span class=\"row\">\n  <span class=\"m-2 mr-3\">\n    <h1 [style.font-size.px]=\"bidSize\" [class]=\"bidCustomClass\" [style.font-weight]=\"bidWeight\" [style.color]=\"bidColor\"\n      id=\"{{id}}\">\n      {{bids}}\n    </h1>\n    <h2 [style.font-size.px]=\"bidHeadingSize\" [class]=\"bidHeadingCustomClass\" id=\"{{id}}\" [style.font-weight]=\"bidHeadingWeight\"\n      [style.color]=\"bidHeadingColor\">\n      {{bidHeading}}\n    </h2>\n  </span>\n  <span class=\"m-2 mr-3\">\n    <h1 [style.font-size.px]=\"percentSize\" [class]=\"percentcustomClass\" [style.font-weight]=\"percentWeight\"\n      [style.color]=\"percentColor\" id=\"{{id}}\">\n      {{percent}}\n    </h1>\n    <h2 [style.font-size.px]=\"percentHeadingSize\" [class]=\"percentageHeadingcustomClass\" id=\"{{id}}\"\n      [style.font-weight]=\"percentHeadingWeight\" [style.color]=\"percentHeadingColor\">\n      {{percentHeading}}\n    </h2>\n  </span>\n</span>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1iaWQtaW5mby9zdWt1LWJpZC1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBT3hELE1BQU0sT0FBTyxvQkFBb0I7SUF1Qi9CO1FBdEJTLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDSixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2QsYUFBUSxHQUFHLE9BQU8sQ0FBQztRQUNsQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2IsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDYiwwQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDOUIsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGlDQUE0QixHQUFHLEVBQUUsQ0FBQztRQUNqRCxlQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ2hCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLG9CQUFlLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM3QyxPQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDQyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNsQixpQkFBWSxHQUFHLE9BQU8sQ0FBQztRQUN0QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUNyQixtQkFBYyxHQUFHLFNBQVMsQ0FBQztRQUN0Qix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDekIsd0JBQW1CLEdBQUcsT0FBTyxDQUFDO1FBQzdCLHlCQUFvQixHQUFHLEtBQUssQ0FBQztJQUVoRCxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixtN0JBQTZDOzthQUU5Qzs7Ozs7bUJBRUUsS0FBSztzQkFDTixLQUFLLFNBQUMsVUFBVTt1QkFDaEIsS0FBSyxTQUFDLFdBQVc7d0JBQ2pCLEtBQUssU0FBQyxZQUFZOzZCQUNsQixLQUFLLFNBQUMsaUJBQWlCO29DQUN2QixLQUFLLFNBQUMsd0JBQXdCO2lDQUM5QixLQUFLLFNBQUMscUJBQXFCOzJDQUMzQixLQUFLLFNBQUMsNEJBQTRCO3lCQUNsQyxLQUFLLFNBQUMsYUFBYTs2QkFDbkIsS0FBSyxTQUFDLGlCQUFpQjs4QkFDdkIsS0FBSyxTQUFDLG1CQUFtQjsrQkFDeEIsS0FBSyxTQUFDLG9CQUFvQjtpQkFDMUIsS0FBSztzQkFDTixLQUFLOzBCQUNMLEtBQUssU0FBQyxpQkFBaUI7MkJBQ3ZCLEtBQUssU0FBQyxrQkFBa0I7NEJBQ3hCLEtBQUssU0FBQyxtQkFBbUI7NkJBQ3pCLEtBQUssU0FBQyxvQkFBb0I7aUNBQzFCLEtBQUssU0FBQyx5QkFBeUI7a0NBQy9CLEtBQUssU0FBQywwQkFBMEI7bUNBQ2hDLEtBQUssU0FBQywyQkFBMkI7Ozs7SUFwQmpDLG9DQUFzQjs7SUFDdkIsdUNBQWtDOztJQUNsQyx3Q0FBdUM7O0lBQ3ZDLHlDQUF1Qzs7SUFDdkMsOENBQThDOztJQUM5QyxxREFBNEQ7O0lBQzVELGtEQUFzRDs7SUFDdEQsNERBQXVFOztJQUN2RSwwQ0FBMEM7O0lBQzFDLDhDQUFnRDs7SUFDaEQsK0NBQXNEOztJQUNyRCxnREFBc0Q7O0lBQ3RELGtDQUF3Qjs7SUFDekIsdUNBQXlCOztJQUN6QiwyQ0FBNkM7O0lBQzdDLDRDQUFrRDs7SUFDbEQsNkNBQWtEOztJQUNsRCw4Q0FBd0Q7O0lBQ3hELGtEQUE0RDs7SUFDNUQsbURBQWlFOztJQUNqRSxvREFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWJpZC1pbmZvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtYmlkLWluZm8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWJpZC1pbmZvLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUJpZEluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBiaWRzID0gJzM3NCc7XG5cdEBJbnB1dCgnYmlkLXNpemUnKSBiaWRTaXplID0gJzE3Jztcblx0QElucHV0KCdiaWQtY29sb3InKSBiaWRDb2xvciA9ICdibGFjayc7XG5cdEBJbnB1dCgnYmlkLXdlaWdodCcpIGJpZFdlaWdodCA9ICc2MDAnO1xuXHRASW5wdXQoJ2JpZC1jdXN0b21jbGFzcycpIGJpZEN1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgnYmlkLWhlYWRpbmdjdXN0b21jbGFzcycpIGJpZEhlYWRpbmdDdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoJ3BlcmNlbnQtY3VzdG9tY2xhc3MnKSBwZXJjZW50Y3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCdwZXJjZW50LWhlYWRpbmdjdXN0b21jbGFzcycpIHBlcmNlbnRhZ2VIZWFkaW5nY3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCdiaWQtaGVhZGluZycpIGJpZEhlYWRpbmcgPSAnYmlkcyc7XG5cdEBJbnB1dCgnYmlkLWhlZGluZy1zaXplJykgYmlkSGVhZGluZ1NpemUgPSAnMTQnO1xuXHRASW5wdXQoJ2JpZC1oZWFkaW5nLWNvbG9yJykgYmlkSGVhZGluZ0NvbG9yID0gJ2JsYWNrJztcbiAgQElucHV0KCdiaWQtaGVhZGluZy13ZWlnaHQnKSBiaWRIZWFkaW5nV2VpZ2h0ID0gJzUwMCc7XG4gIEBJbnB1dCgpIGlkID0gJ2JpZEluZm8nO1xuXHRASW5wdXQoKSBwZXJjZW50ID0gJzEwJSc7XG5cdEBJbnB1dCgncGVyY2VudGFnZS1zaXplJykgcGVyY2VudFNpemUgPSAnMTcnO1xuXHRASW5wdXQoJ3BlcmNlbnRhZ2UtY29sb3InKSBwZXJjZW50Q29sb3IgPSAnYmxhY2snO1xuXHRASW5wdXQoJ3BlcmNlbnRhZ2Utd2VpZ2h0JykgcGVyY2VudFdlaWdodCA9ICc2MDAnO1xuXHRASW5wdXQoJ3BlcmNlbnRhZ2UtaGVhZGluZycpIHBlcmNlbnRIZWFkaW5nID0gJ2Z1bGZpbGwnO1xuXHRASW5wdXQoJ3BlcmNlbnRhZ2UtaGVhZGluZy1zaXplJykgcGVyY2VudEhlYWRpbmdTaXplID0gJzE0Jztcblx0QElucHV0KCdwZXJjZW50YWdlLWhlYWRpbmctY29sb3InKSBwZXJjZW50SGVhZGluZ0NvbG9yID0gJ2JsYWNrJztcblx0QElucHV0KCdwZXJjZW50YWdlLWhlYWRpbmctd2VpZ2h0JykgcGVyY2VudEhlYWRpbmdXZWlnaHQgPSAnNTAwJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==