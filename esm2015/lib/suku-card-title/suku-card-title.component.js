/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SukuCardTitleComponent {
    constructor() {
        this.cardTitleName = 'INTEREST NAME';
        this.cardTitleId = 'heading';
        this.cardTitlesize = '12';
        this.cardTitlecolor = '#b6b6b6';
        this.cardContentName = 'Spring Cases';
        this.cardContentId = 'Content';
        this.cardContentsize = '17';
        this.cardContentcolor = '#1d1d1d';
        this.cardContentweight = '700';
        this.customclassContent = '';
        this.customclasstitle = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuCardTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-card-title',
                template: "<div class=\"product-title\">\r\n  <h1 [style.font-size.px]=\"cardTitlesize\" [class]=\"customclasstitle\" [style.color]=\"cardTitlecolor\" id=\"{{cardTitleId}}\">\r\n    {{cardTitleName}}\r\n  </h1>\r\n  <h2 [style.font-size.px]=\"cardContentsize\" [class]=\"customclassContent\" id=\"{{cardContentId}}\" [style.font-weight]=\"cardContentweight\"\r\n    [style.color]=\"cardContentcolor\">\r\n    {{cardContentName}}\r\n  </h2>\r\n</div>\r\n",
                styles: ["h1{font-family:\"Encode Sans\",sans-serif!important;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:0;color:#b6b6b6!important;margin-bottom:1px}h2{font-family:Poppins,sans-serif!important;font-size:17px;font-weight:900;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d}"]
            }] }
];
/** @nocollapse */
SukuCardTitleComponent.ctorParameters = () => [];
SukuCardTitleComponent.propDecorators = {
    cardTitleName: [{ type: Input }],
    cardTitleId: [{ type: Input }],
    cardTitlesize: [{ type: Input }],
    cardTitlecolor: [{ type: Input }],
    cardTitleweight: [{ type: Input }],
    cardContentName: [{ type: Input }],
    cardContentId: [{ type: Input }],
    cardContentsize: [{ type: Input }],
    cardContentcolor: [{ type: Input }],
    cardContentweight: [{ type: Input }],
    customclassContent: [{ type: Input }],
    customclasstitle: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuCardTitleComponent.prototype.cardTitleName;
    /** @type {?} */
    SukuCardTitleComponent.prototype.cardTitleId;
    /** @type {?} */
    SukuCardTitleComponent.prototype.cardTitlesize;
    /** @type {?} */
    SukuCardTitleComponent.prototype.cardTitlecolor;
    /** @type {?} */
    SukuCardTitleComponent.prototype.cardTitleweight;
    /** @type {?} */
    SukuCardTitleComponent.prototype.cardContentName;
    /** @type {?} */
    SukuCardTitleComponent.prototype.cardContentId;
    /** @type {?} */
    SukuCardTitleComponent.prototype.cardContentsize;
    /** @type {?} */
    SukuCardTitleComponent.prototype.cardContentcolor;
    /** @type {?} */
    SukuCardTitleComponent.prototype.cardContentweight;
    /** @type {?} */
    SukuCardTitleComponent.prototype.customclassContent;
    /** @type {?} */
    SukuCardTitleComponent.prototype.customclasstitle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNhcmQtdGl0bGUvc3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyxzQkFBc0I7SUFjakM7UUFaUyxrQkFBYSxHQUFHLGVBQWUsQ0FBQztRQUNoQyxnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUN4QixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixtQkFBYyxHQUFHLFNBQVMsQ0FBQztRQUUzQixvQkFBZSxHQUFJLGNBQWMsQ0FBQztRQUNsQyxrQkFBYSxHQUFHLFNBQVMsQ0FBQztRQUMxQixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDN0Isc0JBQWlCLEdBQUksS0FBSyxDQUFDO1FBQzNCLHVCQUFrQixHQUFJLEVBQUUsQ0FBQztRQUN6QixxQkFBZ0IsR0FBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixzY0FBK0M7O2FBRWhEOzs7Ozs0QkFHRSxLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLO2lDQUNMLEtBQUs7K0JBQ0wsS0FBSzs7OztJQVhOLCtDQUF5Qzs7SUFDekMsNkNBQWlDOztJQUNqQywrQ0FBOEI7O0lBQzlCLGdEQUFvQzs7SUFDcEMsaURBQXlCOztJQUN6QixpREFBMkM7O0lBQzNDLCtDQUFtQzs7SUFDbkMsaURBQWdDOztJQUNoQyxrREFBc0M7O0lBQ3RDLG1EQUFvQzs7SUFDcEMsb0RBQWtDOztJQUNsQyxrREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1jYXJkLXRpdGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNhcmQtdGl0bGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUNhcmRUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGNhcmRUaXRsZU5hbWUgPSAnSU5URVJFU1QgTkFNRSc7XHJcbiAgQElucHV0KCkgY2FyZFRpdGxlSWQgPSAnaGVhZGluZyc7XHJcbiAgQElucHV0KCkgY2FyZFRpdGxlc2l6ZSA9ICcxMic7XHJcbiAgQElucHV0KCkgY2FyZFRpdGxlY29sb3IgPSAnI2I2YjZiNic7XHJcbiAgQElucHV0KCkgY2FyZFRpdGxld2VpZ2h0O1xyXG4gIEBJbnB1dCgpIGNhcmRDb250ZW50TmFtZSAgPSAnU3ByaW5nIENhc2VzJztcclxuICBASW5wdXQoKSBjYXJkQ29udGVudElkID0gJ0NvbnRlbnQnO1xyXG4gIEBJbnB1dCgpIGNhcmRDb250ZW50c2l6ZSA9ICcxNyc7XHJcbiAgQElucHV0KCkgY2FyZENvbnRlbnRjb2xvciA9ICcjMWQxZDFkJztcclxuICBASW5wdXQoKSBjYXJkQ29udGVudHdlaWdodCAgPSAnNzAwJztcclxuICBASW5wdXQoKSBjdXN0b21jbGFzc0NvbnRlbnQgID0gJyc7XHJcbiAgQElucHV0KCkgY3VzdG9tY2xhc3N0aXRsZSAgPSAnJztcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==