/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuPrimaryButtonComponent = /** @class */ (function () {
    function SukuPrimaryButtonComponent() {
        this.id = 'primary';
        this.size = '1';
        this.color = '';
        this.weight = '600';
        this.btnType = 'button';
        this.customClass = '';
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    SukuPrimaryButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuPrimaryButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-primary-button',
                    template: "<button type=\"btnType\" class=\"suku-p suku-primary c-pointer {{customClass}}\" [ngClass]=\"{'disabled' : disableValue}\"\n  [style.font-size.rem]=\"size\" [style.color]=\"color\" [style.font-weight]=\"weight\" [disabled]=\"disableValue\" [id]=\"id\"\n  (click)=\"action.emit()\">\n  <ng-content></ng-content>\n</button>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-p{border:2px solid var(--suku-primary-color);background-color:var(--suku-bg-secondary);color:var(--suku-text-label-two);font-family:var(--suku-secondary-font);font-weight:600;font-size:14px;padding:1rem 2rem;border-radius:12px 28px 23px 30px;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:-.25px;text-align:center}.suku-p:hover{cursor:pointer;background-color:var(--suku-primary-color)!important;color:var(--suku-text-label-two)}.suku-p:focus{color:var(--suku-text-label-two);background-color:var(--suku-primary-color)!important;outline:0!important;box-shadow:none!important}.suku-p.disabled:hover{background-color:var(--suku-bg-secondary);color:#1d1d1d;cursor:not-allowed}.suku-primary.disabled{background-color:var(--suku-bg-secondary);color:grey;opacity:.65}.suku-primary.disabled.focus,.suku-primary.disabled:focus,.suku-primary.disabled:hover,.suku-primary[disabled].focus,.suku-primary[disabled]:focus,.suku-primary[disabled]:hover,fieldset[disabled] .suku-primary.focus,fieldset[disabled] .suku-primary:focus,fieldset[disabled] .suku-primary:hover{background-color:var(--suku-bg-secondary)!important;color:grey}.suku-primary.focus,.suku-primary:focus{background-color:var(--suku-primary-color);color:var(--suku-text-label-two)}.open>.dropdown-toggle .suku-primary.focus,.open>.dropdown-toggle .suku-primary:focus,.open>.dropdown-toggle.suku-primary:hover,.suku-primary.active.focus,.suku-primary.active:focus,.suku-primary.active:hover,.suku-primary:active.focus,.suku-primary:active:focus,.suku-primary:active:hover{background-color:var(--suku-primary-color);color:var(--suku-text-label-two)}.show>.suku-primary.dropdown-toggle,.suku-primary:not(:disabled):not(.disabled).active,.suku-primary:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}"]
                }] }
    ];
    /** @nocollapse */
    SukuPrimaryButtonComponent.ctorParameters = function () { return []; };
    SukuPrimaryButtonComponent.propDecorators = {
        id: [{ type: Input }],
        size: [{ type: Input }],
        color: [{ type: Input }],
        weight: [{ type: Input }],
        btnType: [{ type: Input, args: ['btnType',] }],
        disableValue: [{ type: Input, args: ['disable-value',] }],
        customClass: [{ type: Input, args: ['custom-class',] }],
        action: [{ type: Output }]
    };
    return SukuPrimaryButtonComponent;
}());
export { SukuPrimaryButtonComponent };
if (false) {
    /** @type {?} */
    SukuPrimaryButtonComponent.prototype.id;
    /** @type {?} */
    SukuPrimaryButtonComponent.prototype.size;
    /** @type {?} */
    SukuPrimaryButtonComponent.prototype.color;
    /** @type {?} */
    SukuPrimaryButtonComponent.prototype.weight;
    /** @type {?} */
    SukuPrimaryButtonComponent.prototype.btnType;
    /** @type {?} */
    SukuPrimaryButtonComponent.prototype.disableValue;
    /** @type {?} */
    SukuPrimaryButtonComponent.prototype.customClass;
    /** @type {?} */
    SukuPrimaryButtonComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1wcmltYXJ5LWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1idXR0b25zL3N1a3UtcHJpbWFyeS1idXR0b24vc3VrdS1wcmltYXJ5LWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0U7SUFlQztRQVRTLE9BQUUsR0FBRyxTQUFTLENBQUM7UUFDZixTQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ1gsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDTixZQUFPLEdBQUcsUUFBUSxDQUFDO1FBRWQsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDOUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFdEIsQ0FBQzs7OztJQUVqQiw2Q0FBUTs7O0lBQVIsY0FBYSxDQUFDOztnQkFqQmQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLDZVQUFtRDs7aUJBRW5EOzs7OztxQkFFQyxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUssU0FBQyxTQUFTOytCQUNmLEtBQUssU0FBQyxlQUFlOzhCQUNyQixLQUFLLFNBQUMsY0FBYzt5QkFDcEIsTUFBTTs7SUFLUixpQ0FBQztDQUFBLEFBbEJELElBa0JDO1NBYlksMEJBQTBCOzs7SUFDdEMsd0NBQXdCOztJQUN4QiwwQ0FBb0I7O0lBQ3BCLDJDQUFvQjs7SUFDcEIsNENBQXdCOztJQUN4Qiw2Q0FBcUM7O0lBQ3JDLGtEQUE4Qzs7SUFDOUMsaURBQXdDOztJQUN4Qyw0Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtcHJpbWFyeS1idXR0b24nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1wcmltYXJ5LWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N1a3UtcHJpbWFyeS1idXR0b24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1UHJpbWFyeUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIGlkID0gJ3ByaW1hcnknO1xuXHRASW5wdXQoKSBzaXplID0gJzEnO1xuXHRASW5wdXQoKSBjb2xvciA9ICcnO1xuXHRASW5wdXQoKSB3ZWlnaHQgPSAnNjAwJztcblx0QElucHV0KCdidG5UeXBlJykgYnRuVHlwZSA9ICdidXR0b24nO1xuXHRASW5wdXQoJ2Rpc2FibGUtdmFsdWUnKSBkaXNhYmxlVmFsdWU6IEJvb2xlYW47XG5cdEBJbnB1dCgnY3VzdG9tLWNsYXNzJykgY3VzdG9tQ2xhc3MgPSAnJztcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdG5nT25Jbml0KCkgeyB9XG59XG4iXX0=