/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWRhdGUvc3VrdS1kYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEdBQVcsTUFBTSxlQUFlLENBQUM7QUFFbEU7SUFhRTtRQVBPLGVBQVUsR0FBRyxxQkFBcUIsQ0FBQztRQUduQyxXQUFNLEdBQUcsUUFBUSxDQUFDO0lBSVQsQ0FBQzs7OztJQUVqQixvQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksV0FBVyxFQUFFO1lBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsbUJBQW1CLENBQUM7U0FDM0M7YUFBTTtZQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsaUJBQWlCLENBQUM7U0FDekM7SUFDRixDQUFDOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQiwwTkFBeUM7O2lCQUUxQzs7Ozs7NkJBRUEsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLO2tDQUNMLEtBQUs7NEJBQ0wsS0FBSzs7SUFXTix3QkFBQztDQUFBLEFBdkJELElBdUJDO1NBbEJZLGlCQUFpQjs7O0lBQzlCLHVDQUE0Qzs7SUFDNUMscUNBQWtCOztJQUNsQix1Q0FBb0I7O0lBQ3BCLG1DQUEyQjs7SUFDM0IsdUNBQW9COztJQUNwQiw0Q0FBeUI7O0lBQ3pCLHNDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWRhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1kYXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1kYXRlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdURhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuQElucHV0KCkgZGF0ZVN0cmluZyA9ICcyMDA4LTA5LTE1VDE1OjUzOjAwJztcbkBJbnB1dCgpIGZvbnRTaXplO1xuQElucHV0KCkgZm9udFdlaWdodDtcbkBJbnB1dCgpIGRhdGVJZCA9ICdkYXRlSWQnO1xuQElucHV0KCkgZm9udEZhbWlseTtcbkBJbnB1dCgpIGZvbnRGYW1pbHlDbGFzcztcbkBJbnB1dCgpIGZvbnRDb2xvcjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgXHRpZiAodGhpcy5mb250RmFtaWx5ID09ICdzZWNvbmRhcnknKSB7XG4gIFx0XHR0aGlzLmZvbnRGYW1pbHlDbGFzcyA9ICdzdWt1U2Vjb25kYXJ5Rm9udCc7XG4gIFx0fSBlbHNlIHtcbiAgXHRcdHRoaXMuZm9udEZhbWlseUNsYXNzID0gJ3N1a3VQcmltYXJ5Rm9udCc7XG4gIFx0fVxuICB9XG5cbn1cbiJdfQ==