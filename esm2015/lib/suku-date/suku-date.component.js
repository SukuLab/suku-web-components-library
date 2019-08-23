/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, } from '@angular/core';
export class SukuDateComponent {
    constructor() {
        this.dateId = 'dateId';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.fontFamily == 'secondary') {
            this.fontFamilyClass = 'sukuSecondaryFont';
        }
        else {
            this.fontFamilyClass = 'sukuPrimaryFont';
        }
    }
}
SukuDateComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-date',
                template: "<span [style.font-size.px]=\"fontSize\" [style.font-weight]=\"fontWeight\" [style.color]=\"fontColor\" id=\"{{dateId}}\" class=\"{{fontFamilyClass}}\">\n  {{dateString | date: 'MMM-d-y h:mm a'}}\n</span>\n",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.sukuPrimaryFont{font-family:var(--suku-primary-font)!important}.sukuSecondaryFont{font-family:var(--suku-secondary-font)!important}"]
            }] }
];
/** @nocollapse */
SukuDateComponent.ctorParameters = () => [];
SukuDateComponent.propDecorators = {
    dateString: [{ type: Input }],
    fontSize: [{ type: Input }],
    fontWeight: [{ type: Input }],
    dateId: [{ type: Input }],
    fontFamily: [{ type: Input }],
    fontFamilyClass: [{ type: Input }],
    fontColor: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuDateComponent.prototype.dateString;
    /** @type {?} */
    SukuDateComponent.prototype.fontSize;
    /** @type {?} */
    SukuDateComponent.prototype.fontWeight;
    /** @type {?} */
    SukuDateComponent.prototype.dateId;
    /** @type {?} */
    SukuDateComponent.prototype.fontFamily;
    /** @type {?} */
    SukuDateComponent.prototype.fontFamilyClass;
    /** @type {?} */
    SukuDateComponent.prototype.fontColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWRhdGUvc3VrdS1kYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEdBQVcsTUFBTSxlQUFlLENBQUM7QUFPbEUsTUFBTSxPQUFPLGlCQUFpQjtJQVE1QjtRQUpPLFdBQU0sR0FBRyxRQUFRLENBQUM7SUFJVCxDQUFDOzs7O0lBRWpCLFFBQVE7UUFDUCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksV0FBVyxFQUFFO1lBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsbUJBQW1CLENBQUM7U0FDM0M7YUFBTTtZQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsaUJBQWlCLENBQUM7U0FDekM7SUFDRixDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQix5TkFBeUM7O2FBRTFDOzs7Ozt5QkFFQSxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSztxQkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzs7O0lBTk4sdUNBQW9COztJQUNwQixxQ0FBa0I7O0lBQ2xCLHVDQUFvQjs7SUFDcEIsbUNBQTJCOztJQUMzQix1Q0FBb0I7O0lBQ3BCLDRDQUF5Qjs7SUFDekIsc0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZGF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWRhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWRhdGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1RGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5ASW5wdXQoKSBkYXRlU3RyaW5nO1xuQElucHV0KCkgZm9udFNpemU7XG5ASW5wdXQoKSBmb250V2VpZ2h0O1xuQElucHV0KCkgZGF0ZUlkID0gJ2RhdGVJZCc7XG5ASW5wdXQoKSBmb250RmFtaWx5O1xuQElucHV0KCkgZm9udEZhbWlseUNsYXNzO1xuQElucHV0KCkgZm9udENvbG9yO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICBcdGlmICh0aGlzLmZvbnRGYW1pbHkgPT0gJ3NlY29uZGFyeScpIHtcbiAgXHRcdHRoaXMuZm9udEZhbWlseUNsYXNzID0gJ3N1a3VTZWNvbmRhcnlGb250JztcbiAgXHR9IGVsc2Uge1xuICBcdFx0dGhpcy5mb250RmFtaWx5Q2xhc3MgPSAnc3VrdVByaW1hcnlGb250JztcbiAgXHR9XG4gIH1cblxufVxuIl19