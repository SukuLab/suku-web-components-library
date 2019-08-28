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
        this.sukuResponseLogo = '';
        this.icon = 'suku-no-data-search-icon';
        this.iconId = 'suku-no-data-search-icon';
        this.iconCustomClass = '';
        this.subCustomClass = 'col-lg-5 p-0 col-sm-12 justify-content-center mx-auto';
    }
    SukuResponseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-response',
                    template: "<div class=\"{{customClass}} filterResult text-center col p-0\" [style.background-color]=\"bgColor\">\n  <div [class]=\"subCustomClass\">\n    <p class=\"response-title {{titleCustomClass}} mb-1\" id=\"{{titleId}}\" [style.font-size.rem]=\"titleSize\"\n      [style.color]=\"titleColor\" [style.font-weight]=\"titleWeight\">{{title}}</p>\n    <img [src]=\"sukuResponseLogo\" [class]=\"imgCustomClass\" alt=\"no-data-search-icon\" *ngIf=\"sukuResponseLogo\">\n    <i class=\"{{icon}} {{iconCustomClass}} icon-1x m-2\" *ngIf=\"icon\" id=\"{{iconId}}\"></i>\n    <p class=\"text-justify text-center mx-auto description {{descriptionCustomClass}}\" id=\"{{descriptionId}}\"\n      [style.font-size.res]=\"descriptionSize\" [style.color]=\"descriptionColor\" [style.font-weight]=\"descriptionWeight\">\n      {{description}}</p>\n  </div>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.filterResult{margin-top:170px}.response-title{font-family:var(--suku-primary-font);font-weight:300}.description{font-family:var(--suku-primary-font);color:#979797;width:350px}.imgCustomClass{height:70px;width:70px}.icon-1x{font-size:4em}"]
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
        icon: [{ type: Input, args: ['icon',] }],
        iconId: [{ type: Input, args: ['icon-id',] }],
        iconCustomClass: [{ type: Input, args: ['icon-custom-class',] }],
        subCustomClass: [{ type: Input, args: ['sub-custom-class',] }]
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
    SukuResponseComponent.prototype.icon;
    /** @type {?} */
    SukuResponseComponent.prototype.iconId;
    /** @type {?} */
    SukuResponseComponent.prototype.iconCustomClass;
    /** @type {?} */
    SukuResponseComponent.prototype.subCustomClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1yZXNwb25zZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1yZXNwb25zZS9zdWt1LXJlc3BvbnNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQ7SUFBQTtRQU13QixnQkFBVyxHQUFHLGtDQUFrQyxDQUFDO1FBQy9ELFVBQUssR0FBRyxrQkFBa0IsQ0FBQztRQUNqQixZQUFPLEdBQUcsZ0JBQWdCLENBQUM7UUFDekIsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNmLGVBQVUsR0FBRyxPQUFPLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFFbEMsZ0JBQVcsR0FBRyxrRkFBa0YsQ0FBQztRQUNqRixrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUM1QixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN0QixxQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDNUIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBRXBDLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDTCxtQkFBYyxHQUFHLDBCQUEwQixDQUFDO1FBQzFDLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUNwQyxTQUFJLEdBQUcsMEJBQTBCLENBQUM7UUFDL0IsV0FBTSxHQUFHLDBCQUEwQixDQUFDO1FBQzFCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcsdURBQXVELENBQUM7SUFDckcsQ0FBQzs7Z0JBMUJBLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZUFBZTtvQkFDekIscTFCQUE2Qzs7aUJBRTdDOzs7OEJBRUMsS0FBSyxTQUFDLGNBQWM7d0JBQ3BCLEtBQUs7MEJBQ0wsS0FBSyxTQUFDLFVBQVU7NEJBQ2hCLEtBQUssU0FBQyxZQUFZOzZCQUNsQixLQUFLLFNBQUMsYUFBYTs4QkFDbkIsS0FBSyxTQUFDLGNBQWM7bUNBQ3BCLEtBQUssU0FBQyxvQkFBb0I7OEJBQzFCLEtBQUs7Z0NBQ0wsS0FBSyxTQUFDLGdCQUFnQjtrQ0FDdEIsS0FBSyxTQUFDLGtCQUFrQjttQ0FDeEIsS0FBSyxTQUFDLG1CQUFtQjtvQ0FDekIsS0FBSyxTQUFDLG9CQUFvQjt5Q0FDMUIsS0FBSyxTQUFDLDBCQUEwQjswQkFDaEMsS0FBSyxTQUFDLFVBQVU7aUNBQ2hCLEtBQUssU0FBQyxrQkFBa0I7bUNBQ3hCLEtBQUssU0FBQyxvQkFBb0I7dUJBQzFCLEtBQUssU0FBQyxNQUFNO3lCQUNaLEtBQUssU0FBQyxTQUFTO2tDQUNmLEtBQUssU0FBQyxtQkFBbUI7aUNBQ3pCLEtBQUssU0FBQyxrQkFBa0I7O0lBQzFCLDRCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FyQlkscUJBQXFCOzs7SUFDakMsNENBQXdFOztJQUN4RSxzQ0FBb0M7O0lBQ3BDLHdDQUE4Qzs7SUFDOUMsMENBQXFDOztJQUNyQywyQ0FBMkM7O0lBQzNDLDRDQUEyQzs7SUFDM0MsaURBQThDOztJQUM5Qyw0Q0FBMEc7O0lBQzFHLDhDQUF1RDs7SUFDdkQsZ0RBQWtEOztJQUNsRCxpREFBeUQ7O0lBQ3pELGtEQUF1RDs7SUFDdkQsdURBQTBEOztJQUMxRCx3Q0FBZ0M7O0lBQ2hDLCtDQUF1RTs7SUFDdkUsaURBQW1EOztJQUNuRCxxQ0FBaUQ7O0lBQ2pELHVDQUFzRDs7SUFDdEQsZ0RBQWlEOztJQUNqRCwrQ0FBb0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtcmVzcG9uc2UnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1yZXNwb25zZS5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N1a3UtcmVzcG9uc2UuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1UmVzcG9uc2VDb21wb25lbnQge1xuXHRASW5wdXQoJ2N1c3RvbS1jbGFzcycpIGN1c3RvbUNsYXNzID0gJ2ZpbHRlclJlc3VsdCB0ZXh0LWNlbnRlciBjb2wgcC0wJztcblx0QElucHV0KCkgdGl0bGUgPSAnTm8gcmVzdWx0cyBmb3VuZCc7XG5cdEBJbnB1dCgndGl0bGUtaWQnKSB0aXRsZUlkID0gJ25vUmVzdWx0c0ZvdW5kJztcblx0QElucHV0KCd0aXRsZS1zaXplJykgdGl0bGVTaXplID0gJzInO1xuXHRASW5wdXQoJ3RpdGxlLWNvbG9yJykgdGl0bGVDb2xvciA9ICdibGFjayc7XG5cdEBJbnB1dCgndGl0bGUtd2VpZ2h0JykgdGl0bGVXZWlnaHQgPSAnMzAwJztcblx0QElucHV0KCd0aXRsZS1jdXN0b20tY2xhc3MnKSB0aXRsZUN1c3RvbUNsYXNzO1xuXHRASW5wdXQoKSBkZXNjcmlwdGlvbiA9ICdUcnkgY2hhbmdpbmcgeW91ciBmaWx0ZXIgc2V0dGluZ3Mgb24gdGhlIGxlZnQgdG8gc2VlIGEgZGlmZmVyZW50IHNldCBvZiByZXN1bHRzLic7XG5cdEBJbnB1dCgnZGVzY3JpcHRpb24taWQnKSBkZXNjcmlwdGlvbklkID0gJ2Rlc2NyaXB0aW9uJztcblx0QElucHV0KCdkZXNjcmlwdGlvbi1zaXplJykgZGVzY3JpcHRpb25TaXplID0gJzE4Jztcblx0QElucHV0KCdkZXNjcmlwdGlvbi1jb2xvcicpIGRlc2NyaXB0aW9uQ29sb3IgPSAnIzk3OTc5Nyc7XG5cdEBJbnB1dCgnZGVzY3JpcHRpb24td2VpZ2h0JykgZGVzY3JpcHRpb25XZWlnaHQgPSAnNDAwJztcblx0QElucHV0KCdkZXNjcmlwdGlvbi1jdXN0b20tY2xhc3MnKSBkZXNjcmlwdGlvbkN1c3RvbUNsYXNzO1xuXHRASW5wdXQoJ2JnLWNvbG9yJykgYmdDb2xvciA9ICcnO1xuXHRASW5wdXQoJ2ltZy1jdXN0b20tY2xhc3MnKSBpbWdDdXN0b21DbGFzcyA9ICdpbWdDdXN0b21DbGFzcyBtYi00IG10LTQnO1xuXHRASW5wdXQoJ3N1a3UtcmVzcG9uc2UtbG9nbycpIHN1a3VSZXNwb25zZUxvZ28gPSAnJztcblx0QElucHV0KCdpY29uJykgaWNvbiA9ICdzdWt1LW5vLWRhdGEtc2VhcmNoLWljb24nO1xuXHRASW5wdXQoJ2ljb24taWQnKSBpY29uSWQgPSAnc3VrdS1uby1kYXRhLXNlYXJjaC1pY29uJztcblx0QElucHV0KCdpY29uLWN1c3RvbS1jbGFzcycpIGljb25DdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoJ3N1Yi1jdXN0b20tY2xhc3MnKSBzdWJDdXN0b21DbGFzcyA9ICdjb2wtbGctNSBwLTAgY29sLXNtLTEyIGp1c3RpZnktY29udGVudC1jZW50ZXIgbXgtYXV0byc7XG59XG5cbiJdfQ==