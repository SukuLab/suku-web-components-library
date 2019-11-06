/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
export class SukuTermsAndConditionsComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
        this.checkBoxColor = 'primary';
        this.title = 'Contract Terms & Conditions';
        this.description = 'I Accept the terms and conditions and authorize this transaction.';
        this.descriptionCustomClass = 'termsAndConditions';
        this.linkCustomClass = 'link';
        this.linkOne = 'https://www.suku.world/terms';
        this.linkTwo = 'https://www.suku.world/privacy';
        this.linkOneTitle = 'Terms';
        this.linkTwoTitle = 'Privacy';
        this.control = 'contractTerms';
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.termsandcondition = this.fb.group({
            'contractTerms': false
        });
    }
    /**
     * @return {?}
     */
    action1() {
        /** @type {?} */
        const data = this.termsandcondition.value.contractTerms;
        this.action.emit(data);
    }
}
SukuTermsAndConditionsComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-terms-and-conditions',
                template: "<form [formGroup]=\"termsandcondition\">\r\n  <div class=\" d-flex flex-column\">\r\n    <div class=\"pb-2\" [style.color]=\"titleColor\" [style.font-weight]=\"titleWeight\"\r\n      [style.font-size.rem]=\"titleSize\">\r\n      <b>{{title}}</b></div>\r\n    <div class=\"d-flex flex-row\">\r\n      <mat-checkbox color=\"{{checkBoxColor}}\" type=\"checkbox\" #t (change)=\"action1()\" id=\"contractTerms\"\r\n        formControlName=\"{{control}}\" name=\"{{control}}\" class=\"mT\">\r\n      </mat-checkbox>\r\n      <span class=\"col {{descriptionCustomClass}} pl-2 pr-0\"> {{description}}\r\n        <a class=\"{{linkCustomClass}} ws\" href=\"{{linkOne}}\" target=\"_blank\">{{linkOneTitle}}</a>\r\n        <a class=\"{{linkCustomClass}} ws\" href=\"{{linkTwo}}\" target=\"_blank\">{{linkTwoTitle}}</a>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</form> ",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.link{color:var(--suku-text-info);text-decoration:underline;margin-left:5px;margin-right:5px}.ws{white-space:pre}.termsAndConditions{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-4);font-weight:500;font-style:normal;font-stretch:normal;letter-spacing:.4px;color:var(--suku-text-info);word-break:break-word!important}.mT{margin-top:2px!important}"]
            }] }
];
/** @nocollapse */
SukuTermsAndConditionsComponent.ctorParameters = () => [
    { type: FormBuilder }
];
SukuTermsAndConditionsComponent.propDecorators = {
    checkBoxColor: [{ type: Input, args: ['check-box-color',] }],
    title: [{ type: Input, args: ['title',] }],
    titleColor: [{ type: Input, args: ['title-color',] }],
    titleSize: [{ type: Input, args: ['title-size',] }],
    titleWeight: [{ type: Input, args: ['title-weight',] }],
    description: [{ type: Input, args: ['description',] }],
    descriptionCustomClass: [{ type: Input, args: ['description-custom-class',] }],
    linkCustomClass: [{ type: Input, args: ['link-custom-class',] }],
    linkOne: [{ type: Input, args: ['link-one',] }],
    linkTwo: [{ type: Input, args: ['link-two',] }],
    linkOneTitle: [{ type: Input, args: ['link-name-one',] }],
    linkTwoTitle: [{ type: Input, args: ['link-name-two',] }],
    control: [{ type: Input }],
    action: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.termsandcondition;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.checkBoxColor;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.title;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.titleColor;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.titleSize;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.titleWeight;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.description;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.descriptionCustomClass;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.linkCustomClass;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.linkOne;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.linkTwo;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.linkOneTitle;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.linkTwoTitle;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.control;
    /** @type {?} */
    SukuTermsAndConditionsComponent.prototype.action;
    /**
     * @type {?}
     * @private
     */
    SukuTermsAndConditionsComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS10ZXJtcy1hbmQtY29uZGl0aW9ucy9zdWt1LXRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFFeEcsT0FBTyxFQUFFLFdBQVcsRUFBaUQsTUFBTSxnQkFBZ0IsQ0FBQztBQU01RixNQUFNLE9BQU8sK0JBQStCOzs7O0lBaUIxQyxZQUNVLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBaEJDLGtCQUFhLEdBQUcsU0FBUyxDQUFDO1FBQ3BDLFVBQUssR0FBRyw2QkFBNkIsQ0FBQztRQUloQyxnQkFBVyxHQUFHLG1FQUFtRSxDQUFDO1FBQ3JFLDJCQUFzQixHQUFHLG9CQUFvQixDQUFDO1FBQ3JELG9CQUFlLEdBQUcsTUFBTSxDQUFDO1FBQ2xDLFlBQU8sR0FBRyw4QkFBOEIsQ0FBQztRQUN6QyxZQUFPLEdBQUcsZ0NBQWdDLENBQUM7UUFDdEMsaUJBQVksR0FBRyxPQUFPLENBQUM7UUFDdkIsaUJBQVksR0FBRyxTQUFTLENBQUM7UUFDeEMsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQUUxQixXQUFNLEdBQUksSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUdsQyxDQUFDOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN4QyxlQUFlLEVBQUUsS0FBSztTQUN0QixDQUFDLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsT0FBTzs7Y0FDQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxhQUFhO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OztZQW5DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMseTJCQUF5RDs7YUFFMUQ7Ozs7WUFMUSxXQUFXOzs7NEJBUWpCLEtBQUssU0FBQyxpQkFBaUI7b0JBQ3ZCLEtBQUssU0FBQyxPQUFPO3lCQUNiLEtBQUssU0FBQyxhQUFhO3dCQUNuQixLQUFLLFNBQUMsWUFBWTswQkFDbEIsS0FBSyxTQUFDLGNBQWM7MEJBQ3BCLEtBQUssU0FBQyxhQUFhO3FDQUNuQixLQUFLLFNBQUMsMEJBQTBCOzhCQUNoQyxLQUFLLFNBQUMsbUJBQW1CO3NCQUN6QixLQUFLLFNBQUMsVUFBVTtzQkFDaEIsS0FBSyxTQUFDLFVBQVU7MkJBQ2hCLEtBQUssU0FBQyxlQUFlOzJCQUNyQixLQUFLLFNBQUMsZUFBZTtzQkFDckIsS0FBSztxQkFFTixNQUFNOzs7O0lBZk4sNERBQTZCOztJQUM3Qix3REFBb0Q7O0lBQ3BELGdEQUFzRDs7SUFDdEQscURBQWlDOztJQUNqQyxvREFBK0I7O0lBQy9CLHNEQUFtQzs7SUFDbkMsc0RBQXdHOztJQUN4RyxpRUFBaUY7O0lBQ2pGLDBEQUFxRDs7SUFDckQsa0RBQTREOztJQUM1RCxrREFBOEQ7O0lBQzlELHVEQUErQzs7SUFDL0MsdURBQWlEOztJQUNqRCxrREFBbUM7O0lBRXBDLGlEQUF1Qzs7Ozs7SUFFcEMsNkNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIEZvcm1BcnJheSwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS10ZXJtcy1hbmQtY29uZGl0aW9ucycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdVRlcm1zQW5kQ29uZGl0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgdGVybXNhbmRjb25kaXRpb246IEZvcm1Hcm91cDtcclxuICBASW5wdXQoJ2NoZWNrLWJveC1jb2xvcicpIGNoZWNrQm94Q29sb3IgPSAncHJpbWFyeSc7XHJcbiAgQElucHV0KCd0aXRsZScpIHRpdGxlID0gJ0NvbnRyYWN0IFRlcm1zICYgQ29uZGl0aW9ucyc7XHJcbiAgQElucHV0KCd0aXRsZS1jb2xvcicpIHRpdGxlQ29sb3I7XHJcbiAgQElucHV0KCd0aXRsZS1zaXplJykgdGl0bGVTaXplO1xyXG4gIEBJbnB1dCgndGl0bGUtd2VpZ2h0JykgdGl0bGVXZWlnaHQ7XHJcbiAgQElucHV0KCdkZXNjcmlwdGlvbicpIGRlc2NyaXB0aW9uID0gJ0kgQWNjZXB0IHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBhbmQgYXV0aG9yaXplIHRoaXMgdHJhbnNhY3Rpb24uJztcclxuICBASW5wdXQoJ2Rlc2NyaXB0aW9uLWN1c3RvbS1jbGFzcycpIGRlc2NyaXB0aW9uQ3VzdG9tQ2xhc3MgPSAndGVybXNBbmRDb25kaXRpb25zJztcclxuICBASW5wdXQoJ2xpbmstY3VzdG9tLWNsYXNzJykgbGlua0N1c3RvbUNsYXNzID0gJ2xpbmsnO1xyXG4gIEBJbnB1dCgnbGluay1vbmUnKSBsaW5rT25lID0gJ2h0dHBzOi8vd3d3LnN1a3Uud29ybGQvdGVybXMnO1xyXG4gIEBJbnB1dCgnbGluay10d28nKSBsaW5rVHdvID0gJ2h0dHBzOi8vd3d3LnN1a3Uud29ybGQvcHJpdmFjeSc7XHJcbiAgQElucHV0KCdsaW5rLW5hbWUtb25lJykgbGlua09uZVRpdGxlID0gJ1Rlcm1zJztcclxuICBASW5wdXQoJ2xpbmstbmFtZS10d28nKSBsaW5rVHdvVGl0bGUgPSAnUHJpdmFjeSc7XHJcbiAgQElucHV0KCkgY29udHJvbCA9ICdjb250cmFjdFRlcm1zJztcclxuXHJcbiBAT3V0cHV0KCkgYWN0aW9uICA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50ZXJtc2FuZGNvbmRpdGlvbiA9IHRoaXMuZmIuZ3JvdXAoe1xyXG5cdFx0XHQnY29udHJhY3RUZXJtcyc6IGZhbHNlXHJcblx0XHR9KTtcclxuICB9XHJcblxyXG4gIGFjdGlvbjEoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy50ZXJtc2FuZGNvbmRpdGlvbi52YWx1ZS5jb250cmFjdFRlcm1zO1xyXG4gICAgdGhpcy5hY3Rpb24uZW1pdChkYXRhKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==