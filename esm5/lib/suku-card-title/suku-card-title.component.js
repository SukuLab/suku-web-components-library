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
        this.customTitleClass = 'primary';
        this.customContentClass = 'secondary';
        this.contentTypeArray = false;
        this.displayKey = '';
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
                    template: "<div class=\"product-title\">\n  <h1 [style.font-size.px]=\"cardTitlesize\" class=\"{{customTitleClass}}\" [style.color]=\"cardTitlecolor\"\n    id=\"{{cardTitleId}}\">\n    {{cardTitleName}}\n  </h1>\n  <section *ngIf=\"!contentTypeArray\">\n    <h2 [style.font-size.px]=\"cardContentsize\" class=\"{{customContentClass}}\" id=\"{{cardContentId}}\"\n      [style.font-weight]=\"cardContentweight\" [style.color]=\"cardContentcolor\">\n      {{cardContentName}}\n    </h2>\n  </section>\n  <section *ngIf=\"contentTypeArray\">\n    <h2 *ngFor=\"let item of cardContentName;let i=index\" [style.font-size.px]=\"cardContentsize\"\n      class=\"{{customContentClass}} mb-0\" id=\"{{cardContentId}}\" [style.font-weight]=\"cardContentweight\"\n      [style.color]=\"cardContentcolor\">\n      {{ displayKey  ? item[displayKey] : item}}\n    </h2>\n  </section>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.primary{font-family:var(--suku-secondary-font);font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:0;color:var(--suku-text-label-one);margin-bottom:1px}.secondary{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);font-weight:900;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px;color:#1d1d1d}.type-1{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-5);font-weight:900;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px}"]
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
        customContentClass: [{ type: Input, args: ['custom-content-class',] }],
        contentTypeArray: [{ type: Input, args: ['content-type-array',] }],
        displayKey: [{ type: Input, args: ['display-key',] }]
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
    /** @type {?} */
    SukuCardTitleComponent.prototype.contentTypeArray;
    /** @type {?} */
    SukuCardTitleComponent.prototype.displayKey;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNhcmQtdGl0bGUvc3VrdS1jYXJkLXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBb0JFO1FBZDBCLGtCQUFhLEdBQUcsZUFBZSxDQUFDO1FBQ2xDLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLG1CQUFjLEdBQUcsU0FBUyxDQUFDO1FBRTFCLG9CQUFlLEdBQUcsY0FBYyxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLHFCQUFnQixHQUFHLFNBQVMsQ0FBQztRQUM1QixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDM0IscUJBQWdCLEdBQUcsU0FBUyxDQUFDO1FBQzNCLHVCQUFrQixHQUFHLFdBQVcsQ0FBQztRQUNuQyxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsZUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRWpCLHlDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQXZCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsNjJCQUErQzs7aUJBRWhEOzs7OztnQ0FFRSxLQUFLLFNBQUMsaUJBQWlCOzhCQUN2QixLQUFLLFNBQUMsZUFBZTtnQ0FDckIsS0FBSyxTQUFDLGlCQUFpQjtpQ0FDdkIsS0FBSyxTQUFDLGtCQUFrQjtrQ0FDeEIsS0FBSyxTQUFDLG1CQUFtQjtrQ0FDekIsS0FBSyxTQUFDLG1CQUFtQjtnQ0FDekIsS0FBSyxTQUFDLGlCQUFpQjtrQ0FDdkIsS0FBSyxTQUFDLG1CQUFtQjttQ0FDekIsS0FBSyxTQUFDLG9CQUFvQjtvQ0FDMUIsS0FBSyxTQUFDLHFCQUFxQjttQ0FDM0IsS0FBSyxTQUFDLG9CQUFvQjtxQ0FDMUIsS0FBSyxTQUFDLHNCQUFzQjttQ0FDNUIsS0FBSyxTQUFDLG9CQUFvQjs2QkFDMUIsS0FBSyxTQUFDLGFBQWE7O0lBTXRCLDZCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FwQlksc0JBQXNCOzs7SUFDakMsK0NBQTBEOztJQUMxRCw2Q0FBZ0Q7O0lBQ2hELCtDQUErQzs7SUFDL0MsZ0RBQXNEOztJQUN0RCxpREFBNEM7O0lBQzVDLGlEQUE2RDs7SUFDN0QsK0NBQW9EOztJQUNwRCxpREFBbUQ7O0lBQ25ELGtEQUEwRDs7SUFDMUQsbURBQXdEOztJQUN4RCxrREFBMEQ7O0lBQzFELG9EQUFnRTs7SUFDaEUsa0RBQXNEOztJQUN0RCw0Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1jYXJkLXRpdGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtY2FyZC10aXRsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtY2FyZC10aXRsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VDYXJkVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ2NhcmQtdGl0bGUtbmFtZScpIGNhcmRUaXRsZU5hbWUgPSAnSU5URVJFU1QgTkFNRSc7XG4gIEBJbnB1dCgnY2FyZC10aXRsZS1pZCcpIGNhcmRUaXRsZUlkID0gJ2hlYWRpbmcnO1xuICBASW5wdXQoJ2NhcmQtdGl0bGUtc2l6ZScpIGNhcmRUaXRsZXNpemUgPSAnMTInO1xuICBASW5wdXQoJ2NhcmQtdGl0bGUtY29sb3InKSBjYXJkVGl0bGVjb2xvciA9ICcjYjZiNmI2JztcbiAgQElucHV0KCdjYXJkLXRpdGxlLXdlaWdodCcpIGNhcmRUaXRsZXdlaWdodDtcbiAgQElucHV0KCdjYXJkLWNvbnRlbnQtbmFtZScpIGNhcmRDb250ZW50TmFtZSA9ICdTcHJpbmcgQ2FzZXMnO1xuICBASW5wdXQoJ2NhcmQtY29udGVudC1pZCcpIGNhcmRDb250ZW50SWQgPSAnQ29udGVudCc7XG4gIEBJbnB1dCgnY2FyZC1jb250ZW50LXNpemUnKSBjYXJkQ29udGVudHNpemUgPSAnMTcnO1xuICBASW5wdXQoJ2NhcmQtY29udGVudC1jb2xvcicpIGNhcmRDb250ZW50Y29sb3IgPSAnIzFkMWQxZCc7XG4gIEBJbnB1dCgnY2FyZC1jb250ZW50LXdlaWdodCcpIGNhcmRDb250ZW50d2VpZ2h0ID0gJzcwMCc7XG4gIEBJbnB1dCgnY3VzdG9tLXRpdGxlLWNsYXNzJykgY3VzdG9tVGl0bGVDbGFzcyA9ICdwcmltYXJ5JztcbiAgQElucHV0KCdjdXN0b20tY29udGVudC1jbGFzcycpIGN1c3RvbUNvbnRlbnRDbGFzcyA9ICdzZWNvbmRhcnknO1xuICBASW5wdXQoJ2NvbnRlbnQtdHlwZS1hcnJheScpIGNvbnRlbnRUeXBlQXJyYXkgPSBmYWxzZTtcbiAgQElucHV0KCdkaXNwbGF5LWtleScpIGRpc3BsYXlLZXkgPSAnJztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=