/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuResponseComponent = /** @class */ (function () {
    function SukuResponseComponent() {
        this.customClass = 'filterResult text-center col p-0';
        this.title = 'No results found';
        this.titleId = 'noResultsFound';
        this.titleSize = '26';
        this.titleColor = 'black';
        this.titleWeight = '300';
        this.description = 'Try changing your filter settings on the left to see a different set of results.';
        this.descriptionId = 'description';
        this.descriptionSize = '18';
        this.descriptionColor = '#979797';
        this.descriptionWeight = '400';
        this.bgColor = '';
    }
    SukuResponseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-response',
                    template: "<div [class]=\"customClass\" [style.background-color]=\"bgColor\">\n  <div class=\"col-lg-5 p-0 col-sm-12 justify-content-center mx-auto\">\n    <p class=\"response-title\" id=\"{{titleId}}\" [style.font-size.px]=\"titleSize\" [style.color]=\"titleColor\"\n    [style.font-weight]=\"titleWeight\">{{title}}</p>\n    <img src=\"../../assets/images/no-data-search-icon.svg\" class=\"img-res mb-4 mt-4\" height=\"70px\" width=\"70px\"\n      alt=\"no-data-search-icon\">\n    <p class=\"text-justify text-center mx-auto description\" id=\"{{descriptionId}}\" [style.font-size.px]=\"descriptionSize\"\n      [style.color]=\"descriptionColor\" [style.font-weight]=\"descriptionWeight\">{{description}}</p>\n  </div>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);.filterResult{margin-top:170px}.response-title{font-family:Poppins,sans-serif!important;font-weight:300}.description{font-family:Poppins,sans-serif!important;color:#979797;width:350px}"]
                }] }
    ];
    SukuResponseComponent.propDecorators = {
        customClass: [{ type: Input }],
        title: [{ type: Input }],
        titleId: [{ type: Input }],
        titleSize: [{ type: Input }],
        titleColor: [{ type: Input }],
        titleWeight: [{ type: Input }],
        description: [{ type: Input }],
        descriptionId: [{ type: Input }],
        descriptionSize: [{ type: Input }],
        descriptionColor: [{ type: Input }],
        descriptionWeight: [{ type: Input }],
        bgColor: [{ type: Input }]
    };
    return SukuResponseComponent;
}());
export { SukuResponseComponent };
if (false) {
    /** @type {?} */
    SukuResponseComponent.prototype.customClass;
    /** @type {?} */
    SukuResponseComponent.prototype.title;
    /** @type {?} */
    SukuResponseComponent.prototype.titleId;
    /** @type {?} */
    SukuResponseComponent.prototype.titleSize;
    /** @type {?} */
    SukuResponseComponent.prototype.titleColor;
    /** @type {?} */
    SukuResponseComponent.prototype.titleWeight;
    /** @type {?} */
    SukuResponseComponent.prototype.description;
    /** @type {?} */
    SukuResponseComponent.prototype.descriptionId;
    /** @type {?} */
    SukuResponseComponent.prototype.descriptionSize;
    /** @type {?} */
    SukuResponseComponent.prototype.descriptionColor;
    /** @type {?} */
    SukuResponseComponent.prototype.descriptionWeight;
    /** @type {?} */
    SukuResponseComponent.prototype.bgColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1yZXNwb25zZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1yZXNwb25zZS9zdWt1LXJlc3BvbnNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQ7SUFBQTtRQU1VLGdCQUFXLEdBQUcsa0NBQWtDLENBQUM7UUFDakQsVUFBSyxHQUFHLGtCQUFrQixDQUFDO1FBQzNCLFlBQU8sR0FBRyxnQkFBZ0IsQ0FBQztRQUMzQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxPQUFPLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxrRkFBa0YsQ0FBQztRQUNqRyxrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUM5QixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDN0Isc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLFlBQU8sR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Z0JBbEJBLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZUFBZTtvQkFDekIsMHRCQUE2Qzs7aUJBRTdDOzs7OEJBRUMsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSztnQ0FDTCxLQUFLO2tDQUNMLEtBQUs7bUNBQ0wsS0FBSztvQ0FDTCxLQUFLOzBCQUNMLEtBQUs7O0lBQ1AsNEJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWJZLHFCQUFxQjs7O0lBQ2pDLDRDQUEwRDs7SUFDMUQsc0NBQW9DOztJQUNwQyx3Q0FBb0M7O0lBQ3BDLDBDQUEwQjs7SUFDMUIsMkNBQThCOztJQUM5Qiw0Q0FBNkI7O0lBQzdCLDRDQUEwRzs7SUFDMUcsOENBQXVDOztJQUN2QyxnREFBZ0M7O0lBQ2hDLGlEQUFzQzs7SUFDdEMsa0RBQW1DOztJQUNuQyx3Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtcmVzcG9uc2UnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1yZXNwb25zZS5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N1a3UtcmVzcG9uc2UuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1UmVzcG9uc2VDb21wb25lbnQge1xuXHRASW5wdXQoKSBjdXN0b21DbGFzcyA9ICdmaWx0ZXJSZXN1bHQgdGV4dC1jZW50ZXIgY29sIHAtMCc7XG5cdEBJbnB1dCgpIHRpdGxlID0gJ05vIHJlc3VsdHMgZm91bmQnO1xuXHRASW5wdXQoKSB0aXRsZUlkID0gJ25vUmVzdWx0c0ZvdW5kJztcblx0QElucHV0KCkgdGl0bGVTaXplID0gJzI2Jztcblx0QElucHV0KCkgdGl0bGVDb2xvciA9ICdibGFjayc7XG5cdEBJbnB1dCgpIHRpdGxlV2VpZ2h0ID0gJzMwMCc7XG5cdEBJbnB1dCgpIGRlc2NyaXB0aW9uID0gJ1RyeSBjaGFuZ2luZyB5b3VyIGZpbHRlciBzZXR0aW5ncyBvbiB0aGUgbGVmdCB0byBzZWUgYSBkaWZmZXJlbnQgc2V0IG9mIHJlc3VsdHMuJztcblx0QElucHV0KCkgZGVzY3JpcHRpb25JZCA9ICdkZXNjcmlwdGlvbic7XG5cdEBJbnB1dCgpIGRlc2NyaXB0aW9uU2l6ZSA9ICcxOCc7XG5cdEBJbnB1dCgpIGRlc2NyaXB0aW9uQ29sb3IgPSAnIzk3OTc5Nyc7XG5cdEBJbnB1dCgpIGRlc2NyaXB0aW9uV2VpZ2h0ID0gJzQwMCc7XG5cdEBJbnB1dCgpIGJnQ29sb3IgPSAnJztcbn1cbiJdfQ==