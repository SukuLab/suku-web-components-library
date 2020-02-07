/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-date/suku-date.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, } from '@angular/core';
var SukuDateComponent = /** @class */ (function () {
    function SukuDateComponent() {
        this.dateString = '2008-09-15T15:53:00';
        this.dateId = 'dateId';
    }
    /**
     * @return {?}
     */
    SukuDateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.fontFamily == 'secondary') {
            this.fontFamilyClass = 'sukuSecondaryFont';
        }
        else {
            this.fontFamilyClass = 'sukuPrimaryFont';
        }
    };
    SukuDateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-date',
                    template: "<span [style.font-size.px]=\"fontSize\" [style.font-weight]=\"fontWeight\" [style.color]=\"fontColor\" id=\"{{dateId}}\" class=\"{{fontFamilyClass}}\">\n  {{dateString | date: 'MMM-d-y hh:mm a'}}\n</span>\n",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.sukuPrimaryFont{font-family:var(--suku-primary-font)!important}.sukuSecondaryFont{font-family:var(--suku-secondary-font)!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuDateComponent.ctorParameters = function () { return []; };
    SukuDateComponent.propDecorators = {
        dateString: [{ type: Input }],
        fontSize: [{ type: Input }],
        fontWeight: [{ type: Input }],
        dateId: [{ type: Input }],
        fontFamily: [{ type: Input }],
        fontFamilyClass: [{ type: Input }],
        fontColor: [{ type: Input }]
    };
    return SukuDateComponent;
}());
export { SukuDateComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWRhdGUvc3VrdS1kYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxHQUFXLE1BQU0sZUFBZSxDQUFDO0FBRWxFO0lBYUU7UUFQTyxlQUFVLEdBQUcscUJBQXFCLENBQUM7UUFHbkMsV0FBTSxHQUFHLFFBQVEsQ0FBQztJQUlULENBQUM7Ozs7SUFFakIsb0NBQVE7OztJQUFSO1FBQ0MsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLFdBQVcsRUFBRTtZQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLG1CQUFtQixDQUFDO1NBQzNDO2FBQU07WUFDTixJQUFJLENBQUMsZUFBZSxHQUFHLGlCQUFpQixDQUFDO1NBQ3pDO0lBQ0YsQ0FBQzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsME5BQXlDOztpQkFFMUM7Ozs7OzZCQUVBLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLEtBQUs7NkJBQ0wsS0FBSztrQ0FDTCxLQUFLOzRCQUNMLEtBQUs7O0lBV04sd0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQWxCWSxpQkFBaUI7OztJQUM5Qix1Q0FBNEM7O0lBQzVDLHFDQUFrQjs7SUFDbEIsdUNBQW9COztJQUNwQixtQ0FBMkI7O0lBQzNCLHVDQUFvQjs7SUFDcEIsNENBQXlCOztJQUN6QixzQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1kYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZGF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZGF0ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VEYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbkBJbnB1dCgpIGRhdGVTdHJpbmcgPSAnMjAwOC0wOS0xNVQxNTo1MzowMCc7XG5ASW5wdXQoKSBmb250U2l6ZTtcbkBJbnB1dCgpIGZvbnRXZWlnaHQ7XG5ASW5wdXQoKSBkYXRlSWQgPSAnZGF0ZUlkJztcbkBJbnB1dCgpIGZvbnRGYW1pbHk7XG5ASW5wdXQoKSBmb250RmFtaWx5Q2xhc3M7XG5ASW5wdXQoKSBmb250Q29sb3I7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIFx0aWYgKHRoaXMuZm9udEZhbWlseSA9PSAnc2Vjb25kYXJ5Jykge1xuICBcdFx0dGhpcy5mb250RmFtaWx5Q2xhc3MgPSAnc3VrdVNlY29uZGFyeUZvbnQnO1xuICBcdH0gZWxzZSB7XG4gIFx0XHR0aGlzLmZvbnRGYW1pbHlDbGFzcyA9ICdzdWt1UHJpbWFyeUZvbnQnO1xuICBcdH1cbiAgfVxuXG59XG4iXX0=