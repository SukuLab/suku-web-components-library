/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.customTitleClass = '';
        this.customContentClass = '';
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
                template: "<div class=\"product-title\">\n  <h1 [style.font-size.px]=\"cardTitlesize\" [class]=\"customTitleClass\" [style.color]=\"cardTitlecolor\"\n    id=\"{{cardTitleId}}\">\n    {{cardTitleName}}\n  </h1>\n  <h2 [style.font-size.px]=\"cardContentsize\" [class]=\"customContentClass\" id=\"{{cardContentId}}\"\n    [style.font-weight]=\"cardContentweight\" [style.color]=\"cardContentcolor\">\n    {{cardContentName}}\n  </h2>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}h1{font-family:var(--suku-secondary-font)!important;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:0;color:var(--suku-text-label-one);margin-bottom:1px}h2{font-family:var(--suku-primary-font)!important;font-size:var(--suku-font-size-5);font-weight:900;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d}"]
            }] }
];
/** @nocollapse */
SukuCardTitleComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNhcmQtdGl0bGUvc3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyxzQkFBc0I7SUFhakM7UUFaMEIsa0JBQWEsR0FBRyxlQUFlLENBQUM7UUFDbEMsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDdEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDcEIsbUJBQWMsR0FBRyxTQUFTLENBQUM7UUFFMUIsb0JBQWUsR0FBRyxjQUFjLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxTQUFTLENBQUM7UUFDeEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdEIscUJBQWdCLEdBQUcsU0FBUyxDQUFDO1FBQzVCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMzQixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDcEIsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsdWJBQStDOzthQUVoRDs7Ozs7NEJBRUUsS0FBSyxTQUFDLGlCQUFpQjswQkFDdkIsS0FBSyxTQUFDLGVBQWU7NEJBQ3JCLEtBQUssU0FBQyxpQkFBaUI7NkJBQ3ZCLEtBQUssU0FBQyxrQkFBa0I7OEJBQ3hCLEtBQUssU0FBQyxtQkFBbUI7OEJBQ3pCLEtBQUssU0FBQyxtQkFBbUI7NEJBQ3pCLEtBQUssU0FBQyxpQkFBaUI7OEJBQ3ZCLEtBQUssU0FBQyxtQkFBbUI7K0JBQ3pCLEtBQUssU0FBQyxvQkFBb0I7Z0NBQzFCLEtBQUssU0FBQyxxQkFBcUI7K0JBQzNCLEtBQUssU0FBQyxvQkFBb0I7aUNBQzFCLEtBQUssU0FBQyxzQkFBc0I7Ozs7SUFYN0IsK0NBQTBEOztJQUMxRCw2Q0FBZ0Q7O0lBQ2hELCtDQUErQzs7SUFDL0MsZ0RBQXNEOztJQUN0RCxpREFBNEM7O0lBQzVDLGlEQUE2RDs7SUFDN0QsK0NBQW9EOztJQUNwRCxpREFBbUQ7O0lBQ25ELGtEQUEwRDs7SUFDMUQsbURBQXdEOztJQUN4RCxrREFBbUQ7O0lBQ25ELG9EQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWNhcmQtdGl0bGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUNhcmRUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnY2FyZC10aXRsZS1uYW1lJykgY2FyZFRpdGxlTmFtZSA9ICdJTlRFUkVTVCBOQU1FJztcbiAgQElucHV0KCdjYXJkLXRpdGxlLWlkJykgY2FyZFRpdGxlSWQgPSAnaGVhZGluZyc7XG4gIEBJbnB1dCgnY2FyZC10aXRsZS1zaXplJykgY2FyZFRpdGxlc2l6ZSA9ICcxMic7XG4gIEBJbnB1dCgnY2FyZC10aXRsZS1jb2xvcicpIGNhcmRUaXRsZWNvbG9yID0gJyNiNmI2YjYnO1xuICBASW5wdXQoJ2NhcmQtdGl0bGUtd2VpZ2h0JykgY2FyZFRpdGxld2VpZ2h0O1xuICBASW5wdXQoJ2NhcmQtY29udGVudC1uYW1lJykgY2FyZENvbnRlbnROYW1lID0gJ1NwcmluZyBDYXNlcyc7XG4gIEBJbnB1dCgnY2FyZC1jb250ZW50LWlkJykgY2FyZENvbnRlbnRJZCA9ICdDb250ZW50JztcbiAgQElucHV0KCdjYXJkLWNvbnRlbnQtc2l6ZScpIGNhcmRDb250ZW50c2l6ZSA9ICcxNyc7XG4gIEBJbnB1dCgnY2FyZC1jb250ZW50LWNvbG9yJykgY2FyZENvbnRlbnRjb2xvciA9ICcjMWQxZDFkJztcbiAgQElucHV0KCdjYXJkLWNvbnRlbnQtd2VpZ2h0JykgY2FyZENvbnRlbnR3ZWlnaHQgPSAnNzAwJztcbiAgQElucHV0KCdjdXN0b20tdGl0bGUtY2xhc3MnKSBjdXN0b21UaXRsZUNsYXNzID0gJyc7XG4gIEBJbnB1dCgnY3VzdG9tLWNvbnRlbnQtY2xhc3MnKSBjdXN0b21Db250ZW50Q2xhc3MgPSAnJztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=