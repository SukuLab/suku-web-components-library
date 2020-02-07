/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-terms-and-conditions/suku-terms-and-conditions.component.ts
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
                template: "<form [formGroup]=\"termsandcondition\">\n  <div class=\" d-flex flex-column\">\n    <div class=\"pb-2\" [style.color]=\"titleColor\" [style.font-weight]=\"titleWeight\"\n      [style.font-size.rem]=\"titleSize\">\n      <b>{{title}}</b></div>\n    <div class=\"d-flex flex-row\">\n      <mat-checkbox color=\"{{checkBoxColor}}\" type=\"checkbox\" #t (change)=\"action1()\" id=\"contractTerms\"\n        formControlName=\"{{control}}\" name=\"{{control}}\" class=\"mT\">\n      </mat-checkbox>\n      <span class=\"col {{descriptionCustomClass}} pl-2 pr-0\"> {{description}}\n        <a class=\"{{linkCustomClass}} ws\" href=\"{{linkOne}}\" target=\"_blank\">{{linkOneTitle}}</a>\n        <a class=\"{{linkCustomClass}} ws\" href=\"{{linkTwo}}\" target=\"_blank\">{{linkTwoTitle}}</a>\n      </span>\n    </div>\n  </div>\n</form> ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS10ZXJtcy1hbmQtY29uZGl0aW9ucy9zdWt1LXRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTJCLE1BQU0sZUFBZSxDQUFDO0FBRXhHLE9BQU8sRUFBRSxXQUFXLEVBQWlELE1BQU0sZ0JBQWdCLENBQUM7QUFNNUYsTUFBTSxPQUFPLCtCQUErQjs7OztJQWlCMUMsWUFDVSxFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQWhCQyxrQkFBYSxHQUFHLFNBQVMsQ0FBQztRQUNwQyxVQUFLLEdBQUcsNkJBQTZCLENBQUM7UUFJaEMsZ0JBQVcsR0FBRyxtRUFBbUUsQ0FBQztRQUNyRSwyQkFBc0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNyRCxvQkFBZSxHQUFHLE1BQU0sQ0FBQztRQUNsQyxZQUFPLEdBQUcsOEJBQThCLENBQUM7UUFDekMsWUFBTyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3RDLGlCQUFZLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBQ3hDLFlBQU8sR0FBRyxlQUFlLENBQUM7UUFFMUIsV0FBTSxHQUFJLElBQUksWUFBWSxFQUFFLENBQUM7SUFHbEMsQ0FBQzs7OztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDeEMsZUFBZSxFQUFFLEtBQUs7U0FDdEIsQ0FBQyxDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELE9BQU87O2NBQ0MsSUFBSSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsYUFBYTtRQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLDIwQkFBeUQ7O2FBRTFEOzs7O1lBTFEsV0FBVzs7OzRCQVFqQixLQUFLLFNBQUMsaUJBQWlCO29CQUN2QixLQUFLLFNBQUMsT0FBTzt5QkFDYixLQUFLLFNBQUMsYUFBYTt3QkFDbkIsS0FBSyxTQUFDLFlBQVk7MEJBQ2xCLEtBQUssU0FBQyxjQUFjOzBCQUNwQixLQUFLLFNBQUMsYUFBYTtxQ0FDbkIsS0FBSyxTQUFDLDBCQUEwQjs4QkFDaEMsS0FBSyxTQUFDLG1CQUFtQjtzQkFDekIsS0FBSyxTQUFDLFVBQVU7c0JBQ2hCLEtBQUssU0FBQyxVQUFVOzJCQUNoQixLQUFLLFNBQUMsZUFBZTsyQkFDckIsS0FBSyxTQUFDLGVBQWU7c0JBQ3JCLEtBQUs7cUJBRU4sTUFBTTs7OztJQWZOLDREQUE2Qjs7SUFDN0Isd0RBQW9EOztJQUNwRCxnREFBc0Q7O0lBQ3RELHFEQUFpQzs7SUFDakMsb0RBQStCOztJQUMvQixzREFBbUM7O0lBQ25DLHNEQUF3Rzs7SUFDeEcsaUVBQWlGOztJQUNqRiwwREFBcUQ7O0lBQ3JELGtEQUE0RDs7SUFDNUQsa0RBQThEOztJQUM5RCx1REFBK0M7O0lBQy9DLHVEQUFpRDs7SUFDakQsa0RBQW1DOztJQUVwQyxpREFBdUM7Ozs7O0lBRXBDLDZDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIEZvcm1BcnJheSwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXRlcm1zLWFuZC1jb25kaXRpb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVRlcm1zQW5kQ29uZGl0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRlcm1zYW5kY29uZGl0aW9uOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgnY2hlY2stYm94LWNvbG9yJykgY2hlY2tCb3hDb2xvciA9ICdwcmltYXJ5JztcbiAgQElucHV0KCd0aXRsZScpIHRpdGxlID0gJ0NvbnRyYWN0IFRlcm1zICYgQ29uZGl0aW9ucyc7XG4gIEBJbnB1dCgndGl0bGUtY29sb3InKSB0aXRsZUNvbG9yO1xuICBASW5wdXQoJ3RpdGxlLXNpemUnKSB0aXRsZVNpemU7XG4gIEBJbnB1dCgndGl0bGUtd2VpZ2h0JykgdGl0bGVXZWlnaHQ7XG4gIEBJbnB1dCgnZGVzY3JpcHRpb24nKSBkZXNjcmlwdGlvbiA9ICdJIEFjY2VwdCB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgYW5kIGF1dGhvcml6ZSB0aGlzIHRyYW5zYWN0aW9uLic7XG4gIEBJbnB1dCgnZGVzY3JpcHRpb24tY3VzdG9tLWNsYXNzJykgZGVzY3JpcHRpb25DdXN0b21DbGFzcyA9ICd0ZXJtc0FuZENvbmRpdGlvbnMnO1xuICBASW5wdXQoJ2xpbmstY3VzdG9tLWNsYXNzJykgbGlua0N1c3RvbUNsYXNzID0gJ2xpbmsnO1xuICBASW5wdXQoJ2xpbmstb25lJykgbGlua09uZSA9ICdodHRwczovL3d3dy5zdWt1LndvcmxkL3Rlcm1zJztcbiAgQElucHV0KCdsaW5rLXR3bycpIGxpbmtUd28gPSAnaHR0cHM6Ly93d3cuc3VrdS53b3JsZC9wcml2YWN5JztcbiAgQElucHV0KCdsaW5rLW5hbWUtb25lJykgbGlua09uZVRpdGxlID0gJ1Rlcm1zJztcbiAgQElucHV0KCdsaW5rLW5hbWUtdHdvJykgbGlua1R3b1RpdGxlID0gJ1ByaXZhY3knO1xuICBASW5wdXQoKSBjb250cm9sID0gJ2NvbnRyYWN0VGVybXMnO1xuXG4gQE91dHB1dCgpIGFjdGlvbiAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudGVybXNhbmRjb25kaXRpb24gPSB0aGlzLmZiLmdyb3VwKHtcblx0XHRcdCdjb250cmFjdFRlcm1zJzogZmFsc2Vcblx0XHR9KTtcbiAgfVxuXG4gIGFjdGlvbjEoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMudGVybXNhbmRjb25kaXRpb24udmFsdWUuY29udHJhY3RUZXJtcztcbiAgICB0aGlzLmFjdGlvbi5lbWl0KGRhdGEpO1xuICB9XG5cbn1cbiJdfQ==