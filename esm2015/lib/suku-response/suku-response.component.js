/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuResponseComponent {
    constructor() {
        this.customClass = 'filterResult text-center col p-0';
        this.title = 'No results found';
        this.titleId = 'noResultsFound';
        this.titleSize = '2';
        this.titleColor = 'black';
        this.titleWeight = '300';
        this.description = 'Try changing your filter settings on the left to see a different set of results.';
        this.descriptionId = 'description';
        this.descriptionSize = '18';
        this.descriptionColor = '#979797';
        this.descriptionWeight = '400';
        this.bgColor = '';
        this.imgCustomClass = 'imgCustomClass mb-4 mt-4';
        this.sukuResponseLogo = '../../assets/images/no-data-search-icon.svg';
        this.subCustomClass = 'col-lg-5 p-0 col-sm-12 justify-content-center mx-auto';
    }
}
SukuResponseComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-response',
                template: "<div class=\"{{customClass}} filterResult text-center col p-0\" [style.background-color]=\"bgColor\">\n  <div [class]=\"subCustomClass\">\n    <p class=\"response-title {{titleCustomClass}}\" id=\"{{titleId}}\" [style.font-size.rem]=\"titleSize\"\n      [style.color]=\"titleColor\" [style.font-weight]=\"titleWeight\">{{title}}</p>\n    <img [src]=\"sukuResponseLogo\" [class]=\"imgCustomClass\" alt=\"no-data-search-icon\">\n    <p class=\"text-justify text-center mx-auto description {{descriptionCustomClass}}\" id=\"{{descriptionId}}\"\n      [style.font-size.res]=\"descriptionSize\" [style.color]=\"descriptionColor\" [style.font-weight]=\"descriptionWeight\">\n      {{description}}</p>\n  </div>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.filterResult{margin-top:170px}.response-title{font-family:var(--suku-primary-font);font-weight:300}.description{font-family:var(--suku-primary-font);color:#979797;width:350px}.imgCustomClass{height:70px;width:70px}"]
            }] }
];
SukuResponseComponent.propDecorators = {
    customClass: [{ type: Input, args: ['custom-class',] }],
    title: [{ type: Input }],
    titleId: [{ type: Input, args: ['title-id',] }],
    titleSize: [{ type: Input, args: ['title-size',] }],
    titleColor: [{ type: Input, args: ['title-color',] }],
    titleWeight: [{ type: Input, args: ['title-weight',] }],
    titleCustomClass: [{ type: Input, args: ['title-custom-class',] }],
    description: [{ type: Input }],
    descriptionId: [{ type: Input, args: ['description-id',] }],
    descriptionSize: [{ type: Input, args: ['description-size',] }],
    descriptionColor: [{ type: Input, args: ['description-color',] }],
    descriptionWeight: [{ type: Input, args: ['description-weight',] }],
    descriptionCustomClass: [{ type: Input, args: ['description-custom-class',] }],
    bgColor: [{ type: Input, args: ['bg-color',] }],
    imgCustomClass: [{ type: Input, args: ['img-custom-class',] }],
    sukuResponseLogo: [{ type: Input, args: ['suku-response-logo',] }],
    subCustomClass: [{ type: Input, args: ['sub-custom-class',] }]
};
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
    SukuResponseComponent.prototype.titleCustomClass;
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
    SukuResponseComponent.prototype.descriptionCustomClass;
    /** @type {?} */
    SukuResponseComponent.prototype.bgColor;
    /** @type {?} */
    SukuResponseComponent.prototype.imgCustomClass;
    /** @type {?} */
    SukuResponseComponent.prototype.sukuResponseLogo;
    /** @type {?} */
    SukuResponseComponent.prototype.subCustomClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1yZXNwb25zZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1yZXNwb25zZS9zdWt1LXJlc3BvbnNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLHFCQUFxQjtJQUxsQztRQU13QixnQkFBVyxHQUFHLGtDQUFrQyxDQUFDO1FBQy9ELFVBQUssR0FBRyxrQkFBa0IsQ0FBQztRQUNqQixZQUFPLEdBQUcsZ0JBQWdCLENBQUM7UUFDekIsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNmLGVBQVUsR0FBRyxPQUFPLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFFbEMsZ0JBQVcsR0FBRyxrRkFBa0YsQ0FBQztRQUNqRixrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUM1QixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN0QixxQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDNUIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBRXBDLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDTCxtQkFBYyxHQUFHLDBCQUEwQixDQUFDO1FBQzFDLHFCQUFnQixHQUFHLDZDQUE2QyxDQUFDO1FBQ25FLG1CQUFjLEdBQUcsdURBQXVELENBQUM7SUFDckcsQ0FBQzs7O1lBdkJBLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsZUFBZTtnQkFDekIsb3RCQUE2Qzs7YUFFN0M7OzswQkFFQyxLQUFLLFNBQUMsY0FBYztvQkFDcEIsS0FBSztzQkFDTCxLQUFLLFNBQUMsVUFBVTt3QkFDaEIsS0FBSyxTQUFDLFlBQVk7eUJBQ2xCLEtBQUssU0FBQyxhQUFhOzBCQUNuQixLQUFLLFNBQUMsY0FBYzsrQkFDcEIsS0FBSyxTQUFDLG9CQUFvQjswQkFDMUIsS0FBSzs0QkFDTCxLQUFLLFNBQUMsZ0JBQWdCOzhCQUN0QixLQUFLLFNBQUMsa0JBQWtCOytCQUN4QixLQUFLLFNBQUMsbUJBQW1CO2dDQUN6QixLQUFLLFNBQUMsb0JBQW9CO3FDQUMxQixLQUFLLFNBQUMsMEJBQTBCO3NCQUNoQyxLQUFLLFNBQUMsVUFBVTs2QkFDaEIsS0FBSyxTQUFDLGtCQUFrQjsrQkFDeEIsS0FBSyxTQUFDLG9CQUFvQjs2QkFDMUIsS0FBSyxTQUFDLGtCQUFrQjs7OztJQWhCekIsNENBQXdFOztJQUN4RSxzQ0FBb0M7O0lBQ3BDLHdDQUE4Qzs7SUFDOUMsMENBQXFDOztJQUNyQywyQ0FBMkM7O0lBQzNDLDRDQUEyQzs7SUFDM0MsaURBQThDOztJQUM5Qyw0Q0FBMEc7O0lBQzFHLDhDQUF1RDs7SUFDdkQsZ0RBQWtEOztJQUNsRCxpREFBeUQ7O0lBQ3pELGtEQUF1RDs7SUFDdkQsdURBQTBEOztJQUMxRCx3Q0FBZ0M7O0lBQ2hDLCtDQUF1RTs7SUFDdkUsaURBQThGOztJQUM5RiwrQ0FBb0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtcmVzcG9uc2UnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1yZXNwb25zZS5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N1a3UtcmVzcG9uc2UuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1UmVzcG9uc2VDb21wb25lbnQge1xuXHRASW5wdXQoJ2N1c3RvbS1jbGFzcycpIGN1c3RvbUNsYXNzID0gJ2ZpbHRlclJlc3VsdCB0ZXh0LWNlbnRlciBjb2wgcC0wJztcblx0QElucHV0KCkgdGl0bGUgPSAnTm8gcmVzdWx0cyBmb3VuZCc7XG5cdEBJbnB1dCgndGl0bGUtaWQnKSB0aXRsZUlkID0gJ25vUmVzdWx0c0ZvdW5kJztcblx0QElucHV0KCd0aXRsZS1zaXplJykgdGl0bGVTaXplID0gJzInO1xuXHRASW5wdXQoJ3RpdGxlLWNvbG9yJykgdGl0bGVDb2xvciA9ICdibGFjayc7XG5cdEBJbnB1dCgndGl0bGUtd2VpZ2h0JykgdGl0bGVXZWlnaHQgPSAnMzAwJztcblx0QElucHV0KCd0aXRsZS1jdXN0b20tY2xhc3MnKSB0aXRsZUN1c3RvbUNsYXNzO1xuXHRASW5wdXQoKSBkZXNjcmlwdGlvbiA9ICdUcnkgY2hhbmdpbmcgeW91ciBmaWx0ZXIgc2V0dGluZ3Mgb24gdGhlIGxlZnQgdG8gc2VlIGEgZGlmZmVyZW50IHNldCBvZiByZXN1bHRzLic7XG5cdEBJbnB1dCgnZGVzY3JpcHRpb24taWQnKSBkZXNjcmlwdGlvbklkID0gJ2Rlc2NyaXB0aW9uJztcblx0QElucHV0KCdkZXNjcmlwdGlvbi1zaXplJykgZGVzY3JpcHRpb25TaXplID0gJzE4Jztcblx0QElucHV0KCdkZXNjcmlwdGlvbi1jb2xvcicpIGRlc2NyaXB0aW9uQ29sb3IgPSAnIzk3OTc5Nyc7XG5cdEBJbnB1dCgnZGVzY3JpcHRpb24td2VpZ2h0JykgZGVzY3JpcHRpb25XZWlnaHQgPSAnNDAwJztcblx0QElucHV0KCdkZXNjcmlwdGlvbi1jdXN0b20tY2xhc3MnKSBkZXNjcmlwdGlvbkN1c3RvbUNsYXNzO1xuXHRASW5wdXQoJ2JnLWNvbG9yJykgYmdDb2xvciA9ICcnO1xuXHRASW5wdXQoJ2ltZy1jdXN0b20tY2xhc3MnKSBpbWdDdXN0b21DbGFzcyA9ICdpbWdDdXN0b21DbGFzcyBtYi00IG10LTQnO1xuXHRASW5wdXQoJ3N1a3UtcmVzcG9uc2UtbG9nbycpIHN1a3VSZXNwb25zZUxvZ28gPSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9uby1kYXRhLXNlYXJjaC1pY29uLnN2Zyc7XG5cdEBJbnB1dCgnc3ViLWN1c3RvbS1jbGFzcycpIHN1YkN1c3RvbUNsYXNzID0gJ2NvbC1sZy01IHAtMCBjb2wtc20tMTIganVzdGlmeS1jb250ZW50LWNlbnRlciBteC1hdXRvJztcbn1cbiJdfQ==