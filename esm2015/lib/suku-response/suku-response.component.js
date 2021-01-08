/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-response/suku-response.component.ts
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
        this.sukuResponseLogo = '';
        this.icon = 'suku-no-data-search-icon';
        this.iconId = 'suku-no-data-search-icon';
        this.iconCustomClass = '';
        this.subCustomClass = 'col-lg-5 p-0 col-sm-12 justify-content-center mx-auto';
    }
}
SukuResponseComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-response',
                template: "<div class=\"{{customClass}} filterResult text-center col p-0\" [style.background-color]=\"bgColor\">\n  <div [class]=\"subCustomClass\">\n    <p class=\"response-title {{titleCustomClass}} mb-1\" id=\"{{titleId}}\" [style.font-size.rem]=\"titleSize\"\n      [style.color]=\"titleColor\" [style.font-weight]=\"titleWeight\">{{title}}</p>\n    <img [src]=\"sukuResponseLogo\" [class]=\"imgCustomClass\" alt=\"no-data-search-icon\" *ngIf=\"sukuResponseLogo\">\n    <i class=\"{{icon}} {{iconCustomClass}} icon-1x m-2\" *ngIf=\"icon\" id=\"{{iconId}}\"></i>\n    <p class=\"text-justify text-center mx-auto description {{descriptionCustomClass}}\" id=\"{{descriptionId}}\"\n      [style.font-size.res]=\"descriptionSize\" [style.color]=\"descriptionColor\" [style.font-weight]=\"descriptionWeight\">\n      {{description}}</p>\n  </div>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.filterResult{margin-top:170px}.response-title{font-family:var(--suku-primary-font);font-weight:300}.description{font-family:var(--suku-primary-font);color:#979797;width:350px}.imgCustomClass{height:70px;width:70px}.icon-1x{font-size:4em}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1yZXNwb25zZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1yZXNwb25zZS9zdWt1LXJlc3BvbnNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT2pELE1BQU0sT0FBTyxxQkFBcUI7SUFMbEM7UUFNd0IsZ0JBQVcsR0FBRyxrQ0FBa0MsQ0FBQztRQUMvRCxVQUFLLEdBQUcsa0JBQWtCLENBQUM7UUFDakIsWUFBTyxHQUFHLGdCQUFnQixDQUFDO1FBQ3pCLGNBQVMsR0FBRyxHQUFHLENBQUM7UUFDZixlQUFVLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBRWxDLGdCQUFXLEdBQUcsa0ZBQWtGLENBQUM7UUFDakYsa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFDNUIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdEIscUJBQWdCLEdBQUcsU0FBUyxDQUFDO1FBQzVCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUVwQyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ0wsbUJBQWMsR0FBRywwQkFBMEIsQ0FBQztRQUMxQyxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDcEMsU0FBSSxHQUFHLDBCQUEwQixDQUFDO1FBQy9CLFdBQU0sR0FBRywwQkFBMEIsQ0FBQztRQUMxQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUN0QixtQkFBYyxHQUFHLHVEQUF1RCxDQUFDO0lBQ3JHLENBQUM7OztZQTFCQSxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHExQkFBNkM7O2FBRTdDOzs7MEJBRUMsS0FBSyxTQUFDLGNBQWM7b0JBQ3BCLEtBQUs7c0JBQ0wsS0FBSyxTQUFDLFVBQVU7d0JBQ2hCLEtBQUssU0FBQyxZQUFZO3lCQUNsQixLQUFLLFNBQUMsYUFBYTswQkFDbkIsS0FBSyxTQUFDLGNBQWM7K0JBQ3BCLEtBQUssU0FBQyxvQkFBb0I7MEJBQzFCLEtBQUs7NEJBQ0wsS0FBSyxTQUFDLGdCQUFnQjs4QkFDdEIsS0FBSyxTQUFDLGtCQUFrQjsrQkFDeEIsS0FBSyxTQUFDLG1CQUFtQjtnQ0FDekIsS0FBSyxTQUFDLG9CQUFvQjtxQ0FDMUIsS0FBSyxTQUFDLDBCQUEwQjtzQkFDaEMsS0FBSyxTQUFDLFVBQVU7NkJBQ2hCLEtBQUssU0FBQyxrQkFBa0I7K0JBQ3hCLEtBQUssU0FBQyxvQkFBb0I7bUJBQzFCLEtBQUssU0FBQyxNQUFNO3FCQUNaLEtBQUssU0FBQyxTQUFTOzhCQUNmLEtBQUssU0FBQyxtQkFBbUI7NkJBQ3pCLEtBQUssU0FBQyxrQkFBa0I7Ozs7SUFuQnpCLDRDQUF3RTs7SUFDeEUsc0NBQW9DOztJQUNwQyx3Q0FBOEM7O0lBQzlDLDBDQUFxQzs7SUFDckMsMkNBQTJDOztJQUMzQyw0Q0FBMkM7O0lBQzNDLGlEQUE4Qzs7SUFDOUMsNENBQTBHOztJQUMxRyw4Q0FBdUQ7O0lBQ3ZELGdEQUFrRDs7SUFDbEQsaURBQXlEOztJQUN6RCxrREFBdUQ7O0lBQ3ZELHVEQUEwRDs7SUFDMUQsd0NBQWdDOztJQUNoQywrQ0FBdUU7O0lBQ3ZFLGlEQUFtRDs7SUFDbkQscUNBQWlEOztJQUNqRCx1Q0FBc0Q7O0lBQ3RELGdEQUFpRDs7SUFDakQsK0NBQW9HIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LXJlc3BvbnNlJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtcmVzcG9uc2UuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LXJlc3BvbnNlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVJlc3BvbnNlQ29tcG9uZW50IHtcblx0QElucHV0KCdjdXN0b20tY2xhc3MnKSBjdXN0b21DbGFzcyA9ICdmaWx0ZXJSZXN1bHQgdGV4dC1jZW50ZXIgY29sIHAtMCc7XG5cdEBJbnB1dCgpIHRpdGxlID0gJ05vIHJlc3VsdHMgZm91bmQnO1xuXHRASW5wdXQoJ3RpdGxlLWlkJykgdGl0bGVJZCA9ICdub1Jlc3VsdHNGb3VuZCc7XG5cdEBJbnB1dCgndGl0bGUtc2l6ZScpIHRpdGxlU2l6ZSA9ICcyJztcblx0QElucHV0KCd0aXRsZS1jb2xvcicpIHRpdGxlQ29sb3IgPSAnYmxhY2snO1xuXHRASW5wdXQoJ3RpdGxlLXdlaWdodCcpIHRpdGxlV2VpZ2h0ID0gJzMwMCc7XG5cdEBJbnB1dCgndGl0bGUtY3VzdG9tLWNsYXNzJykgdGl0bGVDdXN0b21DbGFzcztcblx0QElucHV0KCkgZGVzY3JpcHRpb24gPSAnVHJ5IGNoYW5naW5nIHlvdXIgZmlsdGVyIHNldHRpbmdzIG9uIHRoZSBsZWZ0IHRvIHNlZSBhIGRpZmZlcmVudCBzZXQgb2YgcmVzdWx0cy4nO1xuXHRASW5wdXQoJ2Rlc2NyaXB0aW9uLWlkJykgZGVzY3JpcHRpb25JZCA9ICdkZXNjcmlwdGlvbic7XG5cdEBJbnB1dCgnZGVzY3JpcHRpb24tc2l6ZScpIGRlc2NyaXB0aW9uU2l6ZSA9ICcxOCc7XG5cdEBJbnB1dCgnZGVzY3JpcHRpb24tY29sb3InKSBkZXNjcmlwdGlvbkNvbG9yID0gJyM5Nzk3OTcnO1xuXHRASW5wdXQoJ2Rlc2NyaXB0aW9uLXdlaWdodCcpIGRlc2NyaXB0aW9uV2VpZ2h0ID0gJzQwMCc7XG5cdEBJbnB1dCgnZGVzY3JpcHRpb24tY3VzdG9tLWNsYXNzJykgZGVzY3JpcHRpb25DdXN0b21DbGFzcztcblx0QElucHV0KCdiZy1jb2xvcicpIGJnQ29sb3IgPSAnJztcblx0QElucHV0KCdpbWctY3VzdG9tLWNsYXNzJykgaW1nQ3VzdG9tQ2xhc3MgPSAnaW1nQ3VzdG9tQ2xhc3MgbWItNCBtdC00Jztcblx0QElucHV0KCdzdWt1LXJlc3BvbnNlLWxvZ28nKSBzdWt1UmVzcG9uc2VMb2dvID0gJyc7XG5cdEBJbnB1dCgnaWNvbicpIGljb24gPSAnc3VrdS1uby1kYXRhLXNlYXJjaC1pY29uJztcblx0QElucHV0KCdpY29uLWlkJykgaWNvbklkID0gJ3N1a3Utbm8tZGF0YS1zZWFyY2gtaWNvbic7XG5cdEBJbnB1dCgnaWNvbi1jdXN0b20tY2xhc3MnKSBpY29uQ3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCdzdWItY3VzdG9tLWNsYXNzJykgc3ViQ3VzdG9tQ2xhc3MgPSAnY29sLWxnLTUgcC0wIGNvbC1zbS0xMiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG14LWF1dG8nO1xufVxuXG4iXX0=