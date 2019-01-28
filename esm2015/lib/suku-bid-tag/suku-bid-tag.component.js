/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuBidTagComponent {
    constructor() {
        this.prize = '$100';
        this.prizeSize = '50';
        this.prizeWeight = '500';
        this.prizeColor = 'white';
        this.prizeCustomClass = 'mb-0';
        this.unit = '/ BOX';
        this.unitSize = '14';
        this.unitWeight = '500';
        this.unitColor = 'white';
        this.unitCustomClass = 'mt-4 pt-3 mb-0 ml-3';
        this.qContent = '100 cases / box: 200 boxes';
        this.qSize = '15';
        this.qWeight = '500';
        this.qColor = 'white';
        this.qCustomClass = '';
        this.pContent = '$40,000 total (80,000 SUKU)';
        this.pSize = '15';
        this.pWeight = '500';
        this.pColor = 'white';
        this.pCustomClass = 'mt-1 pb-2';
        this.bidtagclass = 'col p-1 col p-1 suku-big-tag pl-4 pl-4';
        this.id = 'suku-big-tag';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuBidTagComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-bid-tag',
                template: "<div class=\"col p-1 {{bidtagclass}} pl-4\">\n  <span class=\"row pr-1 pl-2 mt-2\">\n\t\t<h1 [style.font-size.px]=\"prizeSize\" [class]=\"prizeCustomClass\" [style.font-weight]=\"prizeWeight\" [style.color]=\"prizeColor\" id=\"{{id}}\">\n  {{prize}}\n  </h1>\n\t<h2 [style.font-size.px]=\"unitSize\" [class]=\"unitCustomClass\" id=\"{{id}}\" [style.font-weight]=\"unitWeight\" [style.color]=\"unitColor\">\n  {{unit}}\n  </h2>\n  </span>\n  <span>\n\t\t<h1 [style.font-size.px]=\"qSize\" [class]=\"qCustomClass\" [style.font-weight]=\"qWeight\" [style.color]=\"qColor\" id=\"{{id}}\">\n\t\t{{qContent}}\n\t\t</h1>\n\t\t<h1 [style.font-size.px]=\"pSize\" [class]=\"pCustomClass\" [style.font-weight]=\"pWeight\" [style.color]=\"pColor\" id=\"{{id}}\">\n\t\t{{pContent}}\n\t\t</h1>\n  </span>\n</div>\n",
                styles: [".suku-big-tag{background-color:#35393e;border-radius:0 40px 0 0;border-left:6px solid #a7bf2e}.suku-big-tag-org{background-color:#35393e;border-radius:0 40px 0 0;border-left:6px solid #000}h1{font-family:Poppins,Arial,Helvetica,sans-serif;font-size:20px;font-weight:600!important;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.3px;word-break:break-all!important}h2{font-family:'Encode Sans',sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#b6b6b6!important;word-break:break-all!important}"]
            }] }
];
/** @nocollapse */
SukuBidTagComponent.ctorParameters = () => [];
SukuBidTagComponent.propDecorators = {
    prize: [{ type: Input }],
    prizeSize: [{ type: Input }],
    prizeWeight: [{ type: Input }],
    prizeColor: [{ type: Input }],
    prizeCustomClass: [{ type: Input }],
    unit: [{ type: Input }],
    unitSize: [{ type: Input }],
    unitWeight: [{ type: Input }],
    unitColor: [{ type: Input }],
    unitCustomClass: [{ type: Input }],
    qContent: [{ type: Input }],
    qSize: [{ type: Input }],
    qWeight: [{ type: Input }],
    qColor: [{ type: Input }],
    qCustomClass: [{ type: Input }],
    pContent: [{ type: Input }],
    pSize: [{ type: Input }],
    pWeight: [{ type: Input }],
    pColor: [{ type: Input }],
    pCustomClass: [{ type: Input }],
    bidtagclass: [{ type: Input }],
    id: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuBidTagComponent.prototype.prize;
    /** @type {?} */
    SukuBidTagComponent.prototype.prizeSize;
    /** @type {?} */
    SukuBidTagComponent.prototype.prizeWeight;
    /** @type {?} */
    SukuBidTagComponent.prototype.prizeColor;
    /** @type {?} */
    SukuBidTagComponent.prototype.prizeCustomClass;
    /** @type {?} */
    SukuBidTagComponent.prototype.unit;
    /** @type {?} */
    SukuBidTagComponent.prototype.unitSize;
    /** @type {?} */
    SukuBidTagComponent.prototype.unitWeight;
    /** @type {?} */
    SukuBidTagComponent.prototype.unitColor;
    /** @type {?} */
    SukuBidTagComponent.prototype.unitCustomClass;
    /** @type {?} */
    SukuBidTagComponent.prototype.qContent;
    /** @type {?} */
    SukuBidTagComponent.prototype.qSize;
    /** @type {?} */
    SukuBidTagComponent.prototype.qWeight;
    /** @type {?} */
    SukuBidTagComponent.prototype.qColor;
    /** @type {?} */
    SukuBidTagComponent.prototype.qCustomClass;
    /** @type {?} */
    SukuBidTagComponent.prototype.pContent;
    /** @type {?} */
    SukuBidTagComponent.prototype.pSize;
    /** @type {?} */
    SukuBidTagComponent.prototype.pWeight;
    /** @type {?} */
    SukuBidTagComponent.prototype.pColor;
    /** @type {?} */
    SukuBidTagComponent.prototype.pCustomClass;
    /** @type {?} */
    SukuBidTagComponent.prototype.bidtagclass;
    /** @type {?} */
    SukuBidTagComponent.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iaWQtdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJpZC10YWcvc3VrdS1iaWQtdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLG1CQUFtQjtJQXdCOUI7UUF2QlMsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUNoQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxPQUFPLENBQUM7UUFDckIscUJBQWdCLEdBQUcsTUFBTSxDQUFDO1FBQzFCLFNBQUksR0FBRyxPQUFPLENBQUM7UUFDZixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLE9BQU8sQ0FBQztRQUNwQixvQkFBZSxHQUFHLHFCQUFxQixDQUFDO1FBQ3hDLGFBQVEsR0FBRyw0QkFBNEIsQ0FBQztRQUN4QyxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGFBQVEsR0FBRyw2QkFBNkIsQ0FBQztRQUN6QyxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsV0FBVyxDQUFDO1FBQzNCLGdCQUFXLEdBQUcsd0NBQXdDLENBQUM7UUFDdkQsT0FBRSxHQUFHLGNBQWMsQ0FBQztJQUVaLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLDR5QkFBNEM7O2FBRTdDOzs7OztvQkFFRSxLQUFLO3dCQUNOLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSztpQkFDTCxLQUFLOzs7O0lBckJMLG9DQUF3Qjs7SUFDekIsd0NBQTBCOztJQUMxQiwwQ0FBNkI7O0lBQzdCLHlDQUE4Qjs7SUFDOUIsK0NBQW1DOztJQUNuQyxtQ0FBd0I7O0lBQ3hCLHVDQUF5Qjs7SUFDekIseUNBQTRCOztJQUM1Qix3Q0FBNkI7O0lBQzdCLDhDQUFpRDs7SUFDakQsdUNBQWlEOztJQUNqRCxvQ0FBc0I7O0lBQ3RCLHNDQUF5Qjs7SUFDekIscUNBQTBCOztJQUMxQiwyQ0FBMkI7O0lBQzNCLHVDQUFrRDs7SUFDbEQsb0NBQXNCOztJQUN0QixzQ0FBeUI7O0lBQ3pCLHFDQUEwQjs7SUFDMUIsMkNBQW9DOztJQUNwQywwQ0FBZ0U7O0lBQ2hFLGlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWJpZC10YWcnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1iaWQtdGFnLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1iaWQtdGFnLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUJpZFRhZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHByaXplID0gJyQxMDAnO1xuXHRASW5wdXQoKSBwcml6ZVNpemUgPSAnNTAnO1xuXHRASW5wdXQoKSBwcml6ZVdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoKSBwcml6ZUNvbG9yID0gJ3doaXRlJztcblx0QElucHV0KCkgcHJpemVDdXN0b21DbGFzcyA9ICdtYi0wJztcblx0QElucHV0KCkgdW5pdCA9ICcvIEJPWCc7XG5cdEBJbnB1dCgpIHVuaXRTaXplID0gJzE0Jztcblx0QElucHV0KCkgdW5pdFdlaWdodCA9ICc1MDAnO1xuXHRASW5wdXQoKSB1bml0Q29sb3IgPSAnd2hpdGUnO1xuXHRASW5wdXQoKSB1bml0Q3VzdG9tQ2xhc3MgPSAnbXQtNCBwdC0zIG1iLTAgbWwtMyc7XG5cdEBJbnB1dCgpIHFDb250ZW50ID0gJzEwMCBjYXNlcyAvIGJveDogMjAwIGJveGVzJztcblx0QElucHV0KCkgcVNpemUgPSAnMTUnO1xuXHRASW5wdXQoKSBxV2VpZ2h0ID0gJzUwMCc7XG5cdEBJbnB1dCgpIHFDb2xvciA9ICd3aGl0ZSc7XG5cdEBJbnB1dCgpIHFDdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoKSBwQ29udGVudCA9ICckNDAsMDAwIHRvdGFsICg4MCwwMDAgU1VLVSknO1xuXHRASW5wdXQoKSBwU2l6ZSA9ICcxNSc7XG5cdEBJbnB1dCgpIHBXZWlnaHQgPSAnNTAwJztcblx0QElucHV0KCkgcENvbG9yID0gJ3doaXRlJztcblx0QElucHV0KCkgcEN1c3RvbUNsYXNzID0gJ210LTEgcGItMic7XG5cdEBJbnB1dCgpIGJpZHRhZ2NsYXNzID0gJ2NvbCBwLTEgY29sIHAtMSBzdWt1LWJpZy10YWcgcGwtNCBwbC00Jztcblx0QElucHV0KCkgaWQgPSAnc3VrdS1iaWctdGFnJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==