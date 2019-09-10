/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, } from '@angular/core';
var SukuDefaultButtonComponent = /** @class */ (function () {
    function SukuDefaultButtonComponent() {
        this.id = 'deafultButton';
        this.size = '1';
        this.color = 'white';
        this.weight = '500';
        this.customClass = '';
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuDefaultButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuDefaultButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-default-button',
                    template: "<p class=\"default-btn c-pointer {{customClass}}\" [id]=\"id\" [style.font-size.rem]=\"size\" [style.color]=\"color\"\n  [style.font-weight]=\"weight\" (click)=\"action.emit()\">\n  <ng-content></ng-content>\n</p>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.default-btn{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:400;font-style:normal;font-stretch:normal;line-height:1.43;letter-spacing:-.4px;word-break:break-word}.c-pointer:hover{cursor:pointer;text-decoration:underline!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuDefaultButtonComponent.ctorParameters = function () { return []; };
    SukuDefaultButtonComponent.propDecorators = {
        id: [{ type: Input }],
        size: [{ type: Input }],
        color: [{ type: Input }],
        weight: [{ type: Input }],
        customClass: [{ type: Input, args: ['custom-class',] }],
        action: [{ type: Output }]
    };
    return SukuDefaultButtonComponent;
}());
export { SukuDefaultButtonComponent };
if (false) {
    /** @type {?} */
    SukuDefaultButtonComponent.prototype.id;
    /** @type {?} */
    SukuDefaultButtonComponent.prototype.size;
    /** @type {?} */
    SukuDefaultButtonComponent.prototype.color;
    /** @type {?} */
    SukuDefaultButtonComponent.prototype.weight;
    /** @type {?} */
    SukuDefaultButtonComponent.prototype.customClass;
    /** @type {?} */
    SukuDefaultButtonComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kZWZhdWx0LWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1idXR0b25zL3N1a3UtZGVmYXVsdC1idXR0b24vc3VrdS1kZWZhdWx0LWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEdBQUcsTUFBTSxlQUFlLENBQUM7QUFFaEY7SUFhRTtRQVBTLE9BQUUsR0FBRyxlQUFlLENBQUM7UUFDckIsU0FBSSxHQUFHLEdBQUcsQ0FBQztRQUNYLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNELGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQzlCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXRCLENBQUM7Ozs7SUFFakIsNkNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixpT0FBbUQ7O2lCQUVwRDs7Ozs7cUJBRUUsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxLQUFLLFNBQUMsY0FBYzt5QkFDcEIsTUFBTTs7SUFPVCxpQ0FBQztDQUFBLEFBbEJELElBa0JDO1NBYlksMEJBQTBCOzs7SUFDckMsd0NBQThCOztJQUM5QiwwQ0FBb0I7O0lBQ3BCLDJDQUF5Qjs7SUFDekIsNENBQXdCOztJQUN4QixpREFBd0M7O0lBQ3hDLDRDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZGVmYXVsdC1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1kZWZhdWx0LWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZGVmYXVsdC1idXR0b24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1RGVmYXVsdEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlkID0gJ2RlYWZ1bHRCdXR0b24nO1xuICBASW5wdXQoKSBzaXplID0gJzEnO1xuICBASW5wdXQoKSBjb2xvciA9ICd3aGl0ZSc7XG4gIEBJbnB1dCgpIHdlaWdodCA9ICc1MDAnO1xuICBASW5wdXQoJ2N1c3RvbS1jbGFzcycpIGN1c3RvbUNsYXNzID0gJyc7XG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=