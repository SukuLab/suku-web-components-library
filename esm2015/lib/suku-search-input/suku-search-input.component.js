/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class SukuSearchInputComponent {
    constructor() {
        this.icon = '../../assets/images/search-icon.svg';
        this.customClass = 'c-pointer default';
        this.iconCustomClass = 'float-right c-pointer searchIcon';
        this.iconId = 'searchIcon';
        this.placeholder = 'search partners';
        this.searchOnType = new EventEmitter();
        this.searchOnEnter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuSearchInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-search-input',
                template: "<div [formGroup]=\"form\">\n  <div id=\"search_container\" class=\"col p-0 d-flex mt-1 {{customClass}}\">\n    <input type=\"text\" autocomplete=\"off\" id=\"search\" class=\"stretch\" formControlName=\"{{control}}\" name=\"{{control}}\"\n      (keyup)=\"searchOnType.emit()\" (keyup.enter)=\"searchOnEnter.emit()\" placeholder=\"{{placeholder}}\">\n    <img src=\"{{icon}}\" [class]=\"iconCustomClass\" [id]=\"iconId\" (click)=\"searchOnEnter.emit();searchOnType.emit()\">\n  </div>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}#search_container{border-radius:var(--suku-search-border-radius)}.stretch{flex-grow:1;border:2px solid var(--suku-text-label-three);border-radius:var(--suku-search-border-radius)}.default{width:245px}.c-pointer{cursor:pointer!important}input#search{height:40px;font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:500;font-style:normal;font-stretch:normal;line-height:1;letter-spacing:-.4px;padding-right:33px;padding-left:15px;position:relative;width:80%}input:focus{outline:0!important}::-webkit-input-placeholder{color:#3e3e3e;font-size:var(--suku-font-size-3)}::-moz-placeholder{color:#3e3e3e;font-size:var(--suku-font-size-3)}:-ms-input-placeholder{color:#3e3e3e;font-size:var(--suku-font-size-3)}::-ms-input-placeholder{color:#3e3e3e;font-size:var(--suku-font-size-3)}::placeholder{color:#3e3e3e;font-size:var(--suku-font-size-3)}.searchIcon{position:absolute;width:17px;top:10px;right:10px;margin:1px;background:var(--suku-homepage-bg)}"]
            }] }
];
/** @nocollapse */
SukuSearchInputComponent.ctorParameters = () => [];
SukuSearchInputComponent.propDecorators = {
    form: [{ type: Input }],
    control: [{ type: Input }],
    icon: [{ type: Input }],
    customClass: [{ type: Input, args: ['custom-class',] }],
    iconCustomClass: [{ type: Input, args: ['icon-custom-class',] }],
    iconId: [{ type: Input, args: ['icon-id',] }],
    placeholder: [{ type: Input, args: ['placeholder',] }],
    searchOnType: [{ type: Output }],
    searchOnEnter: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuSearchInputComponent.prototype.form;
    /** @type {?} */
    SukuSearchInputComponent.prototype.control;
    /** @type {?} */
    SukuSearchInputComponent.prototype.icon;
    /** @type {?} */
    SukuSearchInputComponent.prototype.customClass;
    /** @type {?} */
    SukuSearchInputComponent.prototype.iconCustomClass;
    /** @type {?} */
    SukuSearchInputComponent.prototype.iconId;
    /** @type {?} */
    SukuSearchInputComponent.prototype.placeholder;
    /** @type {?} */
    SukuSearchInputComponent.prototype.searchOnType;
    /** @type {?} */
    SukuSearchInputComponent.prototype.searchOnEnter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1zZWFyY2gtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3Utc2VhcmNoLWlucHV0L3N1a3Utc2VhcmNoLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPM0MsTUFBTSxPQUFPLHdCQUF3QjtJQVVuQztRQVBTLFNBQUksR0FBRyxxQ0FBcUMsQ0FBQztRQUMvQixnQkFBVyxHQUFHLG1CQUFtQixDQUFDO1FBQzdCLG9CQUFlLEdBQUcsa0NBQWtDLENBQUM7UUFDL0QsV0FBTSxHQUFHLFlBQVksQ0FBQztRQUNsQixnQkFBVyxHQUFHLGlCQUFpQixDQUFDO1FBQzVDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qix1ZkFBaUQ7O2FBRWxEOzs7OzttQkFFRSxLQUFLO3NCQUNMLEtBQUs7bUJBQ0wsS0FBSzswQkFDTCxLQUFLLFNBQUMsY0FBYzs4QkFDcEIsS0FBSyxTQUFDLG1CQUFtQjtxQkFDekIsS0FBSyxTQUFDLFNBQVM7MEJBQ2YsS0FBSyxTQUFDLGFBQWE7MkJBQ25CLE1BQU07NEJBQ04sTUFBTTs7OztJQVJQLHdDQUF5Qjs7SUFDekIsMkNBQWlCOztJQUNqQix3Q0FBc0Q7O0lBQ3RELCtDQUF5RDs7SUFDekQsbURBQWlGOztJQUNqRiwwQ0FBd0M7O0lBQ3hDLCtDQUFzRDs7SUFDdEQsZ0RBQTRDOztJQUM1QyxpREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3Utc2VhcmNoLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3Utc2VhcmNoLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1zZWFyY2gtaW5wdXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1U2VhcmNoSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGNvbnRyb2w7XG4gIEBJbnB1dCgpIGljb24gPSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9zZWFyY2gtaWNvbi5zdmcnO1xuICBASW5wdXQoJ2N1c3RvbS1jbGFzcycpIGN1c3RvbUNsYXNzID0gJ2MtcG9pbnRlciBkZWZhdWx0JztcbiAgQElucHV0KCdpY29uLWN1c3RvbS1jbGFzcycpIGljb25DdXN0b21DbGFzcyA9ICdmbG9hdC1yaWdodCBjLXBvaW50ZXIgc2VhcmNoSWNvbic7XG4gIEBJbnB1dCgnaWNvbi1pZCcpIGljb25JZCA9ICdzZWFyY2hJY29uJztcbiAgQElucHV0KCdwbGFjZWhvbGRlcicpIHBsYWNlaG9sZGVyID0gJ3NlYXJjaCBwYXJ0bmVycyc7XG4gIEBPdXRwdXQoKSBzZWFyY2hPblR5cGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWFyY2hPbkVudGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==