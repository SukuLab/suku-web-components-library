/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-star-badge/suku-star-badge.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SukuStarBadgeComponent = /** @class */ (function () {
    function SukuStarBadgeComponent() {
        this.icon = '../assets/images/star.svg';
        this.alt = 'star-image';
        this.badgeCustomClass = '';
        this.badgeId = 'badgeValue';
    }
    /**
     * @return {?}
     */
    SukuStarBadgeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuStarBadgeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-star-badge',
                    template: "<div class=\"star-badge\">\n  <img [src]=\"icon\" [alt]=\"alt\" height=\"37px\" id=\"star-image\">\n  <h2 class=\"star-badge-content text-center {{badgeCustomClass}}\" [id]=\"badgeId\">\n    <ng-content></ng-content>\n  </h2>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.star-badge{position:relative!important;width:26px}.star-badge-content{position:absolute!important;top:13px;left:6px;width:100%;font-size:var(--suku-font-size-2);color:var(--suku-secondary-color)}h2{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-2);font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.2px}"]
                }] }
    ];
    /** @nocollapse */
    SukuStarBadgeComponent.ctorParameters = function () { return []; };
    SukuStarBadgeComponent.propDecorators = {
        icon: [{ type: Input }],
        alt: [{ type: Input }],
        badgeCustomClass: [{ type: Input, args: ['badge-custom-class',] }],
        badgeId: [{ type: Input, args: ['badge-id',] }]
    };
    return SukuStarBadgeComponent;
}());
export { SukuStarBadgeComponent };
if (false) {
    /** @type {?} */
    SukuStarBadgeComponent.prototype.icon;
    /** @type {?} */
    SukuStarBadgeComponent.prototype.alt;
    /** @type {?} */
    SukuStarBadgeComponent.prototype.badgeCustomClass;
    /** @type {?} */
    SukuStarBadgeComponent.prototype.badgeId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zdGFyLWJhZGdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXN0YXItYmFkZ2Uvc3VrdS1zdGFyLWJhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBV0U7UUFMUyxTQUFJLEdBQUcsMkJBQTJCLENBQUM7UUFDbkMsUUFBRyxHQUFHLFlBQVksQ0FBQztRQUNDLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUNoQyxZQUFPLEdBQUcsWUFBWSxDQUFDO0lBRTFCLENBQUM7Ozs7SUFFakIseUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHFQQUErQzs7aUJBRWhEOzs7Ozt1QkFFRSxLQUFLO3NCQUNMLEtBQUs7bUNBQ0wsS0FBSyxTQUFDLG9CQUFvQjswQkFDMUIsS0FBSyxTQUFDLFVBQVU7O0lBT25CLDZCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FYWSxzQkFBc0I7OztJQUNqQyxzQ0FBNEM7O0lBQzVDLHFDQUE0Qjs7SUFDNUIsa0RBQW1EOztJQUNuRCx5Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1zdGFyLWJhZGdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3Utc3Rhci1iYWRnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3Utc3Rhci1iYWRnZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VTdGFyQmFkZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpY29uID0gJy4uL2Fzc2V0cy9pbWFnZXMvc3Rhci5zdmcnO1xuICBASW5wdXQoKSBhbHQgPSAnc3Rhci1pbWFnZSc7XG4gIEBJbnB1dCgnYmFkZ2UtY3VzdG9tLWNsYXNzJykgYmFkZ2VDdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoJ2JhZGdlLWlkJykgYmFkZ2VJZCA9ICdiYWRnZVZhbHVlJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==