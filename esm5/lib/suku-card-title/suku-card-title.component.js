/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuCardTitleComponent = /** @class */ (function () {
    function SukuCardTitleComponent() {
        this.cardTitleName = 'INTEREST NAME';
        this.cardTitleId = 'heading';
        this.cardTitlesize = '12';
        this.cardTitlecolor = '#b6b6b6';
        this.cardContentName = 'Spring Cases';
        this.cardContentId = 'Content';
        this.cardContentsize = '17';
        this.cardContentcolor = '#1d1d1d';
        this.cardContentweight = '700';
        this.customTitleClass = '';
        this.customContentClass = '';
    }
    /**
     * @return {?}
     */
    SukuCardTitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuCardTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-card-title',
                    template: "<div class=\"product-title\">\r\n  <h1 [style.font-size.px]=\"cardTitlesize\" [class]=\"customTitleClass\" [style.color]=\"cardTitlecolor\"\r\n    id=\"{{cardTitleId}}\">\r\n    {{cardTitleName}}\r\n  </h1>\r\n  <h2 [style.font-size.px]=\"cardContentsize\" [class]=\"customContentClass\" id=\"{{cardContentId}}\"\r\n    [style.font-weight]=\"cardContentweight\" [style.color]=\"cardContentcolor\">\r\n    {{cardContentName}}\r\n  </h2>\r\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h1{font-family:var(--suku-secondary-font);font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:0;color:var(--suku-text-label-one);margin-bottom:1px}h2{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:900;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d}"]
                }] }
    ];
    /** @nocollapse */
    SukuCardTitleComponent.ctorParameters = function () { return []; };
    SukuCardTitleComponent.propDecorators = {
        cardTitleName: [{ type: Input, args: ['card-title-name',] }],
        cardTitleId: [{ type: Input, args: ['card-title-id',] }],
        cardTitlesize: [{ type: Input, args: ['card-title-size',] }],
        cardTitlecolor: [{ type: Input, args: ['card-title-color',] }],
        cardTitleweight: [{ type: Input, args: ['card-title-weight',] }],
        cardContentName: [{ type: Input, args: ['card-content-name',] }],
        cardContentId: [{ type: Input, args: ['card-content-id',] }],
        cardContentsize: [{ type: Input, args: ['card-content-size',] }],
        cardContentcolor: [{ type: Input, args: ['card-content-color',] }],
        cardContentweight: [{ type: Input, args: ['card-content-weight',] }],
        customTitleClass: [{ type: Input, args: ['custom-title-class',] }],
        customContentClass: [{ type: Input, args: ['custom-content-class',] }]
    };
    return SukuCardTitleComponent;
}());
export { SukuCardTitleComponent };
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
    SukuCardTitleComponent.prototype.customTitleClass;
    /** @type {?} */
    SukuCardTitleComponent.prototype.customContentClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNhcmQtdGl0bGUvc3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBa0JFO1FBWjBCLGtCQUFhLEdBQUcsZUFBZSxDQUFDO1FBQ2xDLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLG1CQUFjLEdBQUcsU0FBUyxDQUFDO1FBRTFCLG9CQUFlLEdBQUcsY0FBYyxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLHFCQUFnQixHQUFHLFNBQVMsQ0FBQztRQUM1QixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDM0IscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRWpCLHlDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IseWNBQStDOztpQkFFaEQ7Ozs7O2dDQUVFLEtBQUssU0FBQyxpQkFBaUI7OEJBQ3ZCLEtBQUssU0FBQyxlQUFlO2dDQUNyQixLQUFLLFNBQUMsaUJBQWlCO2lDQUN2QixLQUFLLFNBQUMsa0JBQWtCO2tDQUN4QixLQUFLLFNBQUMsbUJBQW1CO2tDQUN6QixLQUFLLFNBQUMsbUJBQW1CO2dDQUN6QixLQUFLLFNBQUMsaUJBQWlCO2tDQUN2QixLQUFLLFNBQUMsbUJBQW1CO21DQUN6QixLQUFLLFNBQUMsb0JBQW9CO29DQUMxQixLQUFLLFNBQUMscUJBQXFCO21DQUMzQixLQUFLLFNBQUMsb0JBQW9CO3FDQUMxQixLQUFLLFNBQUMsc0JBQXNCOztJQU0vQiw2QkFBQztDQUFBLEFBdkJELElBdUJDO1NBbEJZLHNCQUFzQjs7O0lBQ2pDLCtDQUEwRDs7SUFDMUQsNkNBQWdEOztJQUNoRCwrQ0FBK0M7O0lBQy9DLGdEQUFzRDs7SUFDdEQsaURBQTRDOztJQUM1QyxpREFBNkQ7O0lBQzdELCtDQUFvRDs7SUFDcEQsaURBQW1EOztJQUNuRCxrREFBMEQ7O0lBQzFELG1EQUF3RDs7SUFDeEQsa0RBQW1EOztJQUNuRCxvREFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1jYXJkLXRpdGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNhcmQtdGl0bGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUNhcmRUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCdjYXJkLXRpdGxlLW5hbWUnKSBjYXJkVGl0bGVOYW1lID0gJ0lOVEVSRVNUIE5BTUUnO1xyXG4gIEBJbnB1dCgnY2FyZC10aXRsZS1pZCcpIGNhcmRUaXRsZUlkID0gJ2hlYWRpbmcnO1xyXG4gIEBJbnB1dCgnY2FyZC10aXRsZS1zaXplJykgY2FyZFRpdGxlc2l6ZSA9ICcxMic7XHJcbiAgQElucHV0KCdjYXJkLXRpdGxlLWNvbG9yJykgY2FyZFRpdGxlY29sb3IgPSAnI2I2YjZiNic7XHJcbiAgQElucHV0KCdjYXJkLXRpdGxlLXdlaWdodCcpIGNhcmRUaXRsZXdlaWdodDtcclxuICBASW5wdXQoJ2NhcmQtY29udGVudC1uYW1lJykgY2FyZENvbnRlbnROYW1lID0gJ1NwcmluZyBDYXNlcyc7XHJcbiAgQElucHV0KCdjYXJkLWNvbnRlbnQtaWQnKSBjYXJkQ29udGVudElkID0gJ0NvbnRlbnQnO1xyXG4gIEBJbnB1dCgnY2FyZC1jb250ZW50LXNpemUnKSBjYXJkQ29udGVudHNpemUgPSAnMTcnO1xyXG4gIEBJbnB1dCgnY2FyZC1jb250ZW50LWNvbG9yJykgY2FyZENvbnRlbnRjb2xvciA9ICcjMWQxZDFkJztcclxuICBASW5wdXQoJ2NhcmQtY29udGVudC13ZWlnaHQnKSBjYXJkQ29udGVudHdlaWdodCA9ICc3MDAnO1xyXG4gIEBJbnB1dCgnY3VzdG9tLXRpdGxlLWNsYXNzJykgY3VzdG9tVGl0bGVDbGFzcyA9ICcnO1xyXG4gIEBJbnB1dCgnY3VzdG9tLWNvbnRlbnQtY2xhc3MnKSBjdXN0b21Db250ZW50Q2xhc3MgPSAnJztcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==