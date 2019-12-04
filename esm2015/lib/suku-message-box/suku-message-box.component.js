/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuMessageBoxComponent {
    constructor() {
        this.widgetTitle = 'User Information';
        this.widgetTitleColor = '';
        this.widgetTitleWeight = '';
        this.widgetTitleSize = '';
        this.widgetTitlecustomclass = '';
        this.widgetTitleid = '';
        this.shippingaddressCustomClass = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuMessageBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-message-box',
                template: "<div class=\"headingStyle\" [style.font-size.px]=\"widgetTitleSize\" [class]=\"widgetTitlecustomclass\" id=\"{{widgetTitleid}}\"\r\n  [style.font-weight]=\"widgetTitleWeight\" [style.color]=\"widgetTitleColor\">{{widgetTitle}} </div>\r\n<div class=\"article mb-3 p-0 pt-3\">\r\n  <div class=\"col-sm-12 col-xs-12 border\">\r\n    <div class=\"col-sm-12 col-xs-12 pt-3 p-2\">\r\n      <div class=\"font_weight contentStyle shipping-address\" [class]=\"shippingaddressCustomClass\">\r\n        <p class=\"mb-1\"><span>{{contentOne}}</span></p>\r\n        <p class=\"mb-1\">{{contentTwo}}</p>\r\n        <p class=\"mb-1\">{{contentThree}}</p>\r\n        <p class=\"mb-1\">{{contentFour}}</p>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.headingStyle{font-family:var(--suku-primary-font);padding-bottom:9px}.contentStyle{padding-top:15px}.marginBottom22{margin-bottom:22px}.shipping-address{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-2);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.4px;color:#020202d9;margin-bottom:1px;text-transform:capitalize}.article{font-family:var(--suku-primary-font);width:100%;float:left}"]
            }] }
];
/** @nocollapse */
SukuMessageBoxComponent.ctorParameters = () => [];
SukuMessageBoxComponent.propDecorators = {
    widgetTitle: [{ type: Input }],
    widgetTitleColor: [{ type: Input }],
    widgetTitleWeight: [{ type: Input }],
    widgetTitleSize: [{ type: Input }],
    widgetTitlecustomclass: [{ type: Input }],
    widgetTitleid: [{ type: Input }],
    shippingaddressCustomClass: [{ type: Input }],
    contentOne: [{ type: Input, args: ['content-one',] }],
    contentTwo: [{ type: Input, args: ['content-two',] }],
    contentThree: [{ type: Input, args: ['content-three',] }],
    contentFour: [{ type: Input, args: ['content-four',] }]
};
if (false) {
    /** @type {?} */
    SukuMessageBoxComponent.prototype.widgetTitle;
    /** @type {?} */
    SukuMessageBoxComponent.prototype.widgetTitleColor;
    /** @type {?} */
    SukuMessageBoxComponent.prototype.widgetTitleWeight;
    /** @type {?} */
    SukuMessageBoxComponent.prototype.widgetTitleSize;
    /** @type {?} */
    SukuMessageBoxComponent.prototype.widgetTitlecustomclass;
    /** @type {?} */
    SukuMessageBoxComponent.prototype.widgetTitleid;
    /** @type {?} */
    SukuMessageBoxComponent.prototype.shippingaddressCustomClass;
    /** @type {?} */
    SukuMessageBoxComponent.prototype.contentOne;
    /** @type {?} */
    SukuMessageBoxComponent.prototype.contentTwo;
    /** @type {?} */
    SukuMessageBoxComponent.prototype.contentThree;
    /** @type {?} */
    SukuMessageBoxComponent.prototype.contentFour;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1tZXNzYWdlLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1tZXNzYWdlLWJveC9zdWt1LW1lc3NhZ2UtYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHVCQUF1QjtJQVlsQztRQVhTLGdCQUFXLEdBQUcsa0JBQWtCLENBQUM7UUFDakMscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDNUIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsK0JBQTBCLEdBQUcsRUFBRSxDQUFDO0lBS3pCLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsZ3VCQUFnRDs7YUFFakQ7Ozs7OzBCQUVFLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLOzhCQUNMLEtBQUs7cUNBQ0wsS0FBSzs0QkFDTCxLQUFLO3lDQUNMLEtBQUs7eUJBQ0wsS0FBSyxTQUFDLGFBQWE7eUJBQ25CLEtBQUssU0FBQyxhQUFhOzJCQUNuQixLQUFLLFNBQUMsZUFBZTswQkFDckIsS0FBSyxTQUFDLGNBQWM7Ozs7SUFWckIsOENBQTBDOztJQUMxQyxtREFBK0I7O0lBQy9CLG9EQUFnQzs7SUFDaEMsa0RBQThCOztJQUM5Qix5REFBcUM7O0lBQ3JDLGdEQUE0Qjs7SUFDNUIsNkRBQXlDOztJQUN6Qyw2Q0FBa0M7O0lBQ2xDLDZDQUFrQzs7SUFDbEMsK0NBQXNDOztJQUN0Qyw4Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1tZXNzYWdlLWJveCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtbWVzc2FnZS1ib3guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtbWVzc2FnZS1ib3guY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdU1lc3NhZ2VCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHdpZGdldFRpdGxlID0gJ1VzZXIgSW5mb3JtYXRpb24nO1xyXG4gIEBJbnB1dCgpIHdpZGdldFRpdGxlQ29sb3IgPSAnJztcclxuICBASW5wdXQoKSB3aWRnZXRUaXRsZVdlaWdodCA9ICcnO1xyXG4gIEBJbnB1dCgpIHdpZGdldFRpdGxlU2l6ZSA9ICcnO1xyXG4gIEBJbnB1dCgpIHdpZGdldFRpdGxlY3VzdG9tY2xhc3MgPSAnJztcclxuICBASW5wdXQoKSB3aWRnZXRUaXRsZWlkID0gJyc7XHJcbiAgQElucHV0KCkgc2hpcHBpbmdhZGRyZXNzQ3VzdG9tQ2xhc3MgPSAnJztcclxuICBASW5wdXQoJ2NvbnRlbnQtb25lJykgY29udGVudE9uZSA7XHJcbiAgQElucHV0KCdjb250ZW50LXR3bycpIGNvbnRlbnRUd28gO1xyXG4gIEBJbnB1dCgnY29udGVudC10aHJlZScpIGNvbnRlbnRUaHJlZSA7XHJcbiAgQElucHV0KCdjb250ZW50LWZvdXInKSBjb250ZW50Rm91cjtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==