/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
var SukuTermsAndConditionsComponent = /** @class */ (function () {
    function SukuTermsAndConditionsComponent(fb) {
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
    SukuTermsAndConditionsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.termsandcondition = this.fb.group({
            'contractTerms': false
        });
    };
    /**
     * @return {?}
     */
    SukuTermsAndConditionsComponent.prototype.action1 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var data = this.termsandcondition.value.contractTerms;
        this.action.emit(data);
    };
    SukuTermsAndConditionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-terms-and-conditions',
                    template: "<form [formGroup]=\"termsandcondition\">\n  <div class=\" d-flex flex-column\">\n    <div class=\"pb-2\" [style.color]=\"titleColor\" [style.font-weight]=\"titleWeight\"\n      [style.font-size.rem]=\"titleSize\">\n      <b>{{title}}</b></div>\n    <div class=\"d-flex flex-row\">\n      <mat-checkbox color=\"{{checkBoxColor}}\" type=\"checkbox\" #t (change)=\"action1()\" id=\"contractTerms\"\n        formControlName=\"{{control}}\" name=\"{{control}}\" class=\"mT\">\n      </mat-checkbox>\n      <span class=\"col {{descriptionCustomClass}} pl-2 pr-0\"> {{description}}\n        <a class=\"{{linkCustomClass}} ws\" href=\"{{linkOne}}\" target=\"_blank\">{{linkOneTitle}}</a>\n        <a class=\"{{linkCustomClass}} ws\" href=\"{{linkTwo}}\" target=\"_blank\">{{linkTwoTitle}}</a>\n      </span>\n    </div>\n  </div>\n</form> ",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.link{color:var(--suku-text-info);text-decoration:underline;margin-left:5px;margin-right:5px}.ws{white-space:pre}.termsAndConditions{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-4);font-weight:500;font-style:normal;font-stretch:normal;letter-spacing:.4px;color:var(--suku-text-info);word-break:break-word!important}.mT{margin-top:2px!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuTermsAndConditionsComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
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
    return SukuTermsAndConditionsComponent;
}());
export { SukuTermsAndConditionsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS10ZXJtcy1hbmQtY29uZGl0aW9ucy9zdWt1LXRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFFeEcsT0FBTyxFQUFFLFdBQVcsRUFBaUQsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RjtJQXNCRSx5Q0FDVSxFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQWhCQyxrQkFBYSxHQUFHLFNBQVMsQ0FBQztRQUNwQyxVQUFLLEdBQUcsNkJBQTZCLENBQUM7UUFJaEMsZ0JBQVcsR0FBRyxtRUFBbUUsQ0FBQztRQUNyRSwyQkFBc0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNyRCxvQkFBZSxHQUFHLE1BQU0sQ0FBQztRQUNsQyxZQUFPLEdBQUcsOEJBQThCLENBQUM7UUFDekMsWUFBTyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3RDLGlCQUFZLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBQ3hDLFlBQU8sR0FBRyxlQUFlLENBQUM7UUFFMUIsV0FBTSxHQUFJLElBQUksWUFBWSxFQUFFLENBQUM7SUFHbEMsQ0FBQzs7OztJQUVMLGtEQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN4QyxlQUFlLEVBQUUsS0FBSztTQUN0QixDQUFDLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsaURBQU87OztJQUFQOztZQUNRLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGFBQWE7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Z0JBbkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQywyMEJBQXlEOztpQkFFMUQ7Ozs7Z0JBTFEsV0FBVzs7O2dDQVFqQixLQUFLLFNBQUMsaUJBQWlCO3dCQUN2QixLQUFLLFNBQUMsT0FBTzs2QkFDYixLQUFLLFNBQUMsYUFBYTs0QkFDbkIsS0FBSyxTQUFDLFlBQVk7OEJBQ2xCLEtBQUssU0FBQyxjQUFjOzhCQUNwQixLQUFLLFNBQUMsYUFBYTt5Q0FDbkIsS0FBSyxTQUFDLDBCQUEwQjtrQ0FDaEMsS0FBSyxTQUFDLG1CQUFtQjswQkFDekIsS0FBSyxTQUFDLFVBQVU7MEJBQ2hCLEtBQUssU0FBQyxVQUFVOytCQUNoQixLQUFLLFNBQUMsZUFBZTsrQkFDckIsS0FBSyxTQUFDLGVBQWU7MEJBQ3JCLEtBQUs7eUJBRU4sTUFBTTs7SUFnQlIsc0NBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQWhDWSwrQkFBK0I7OztJQUMxQyw0REFBNkI7O0lBQzdCLHdEQUFvRDs7SUFDcEQsZ0RBQXNEOztJQUN0RCxxREFBaUM7O0lBQ2pDLG9EQUErQjs7SUFDL0Isc0RBQW1DOztJQUNuQyxzREFBd0c7O0lBQ3hHLGlFQUFpRjs7SUFDakYsMERBQXFEOztJQUNyRCxrREFBNEQ7O0lBQzVELGtEQUE4RDs7SUFDOUQsdURBQStDOztJQUMvQyx1REFBaUQ7O0lBQ2pELGtEQUFtQzs7SUFFcEMsaURBQXVDOzs7OztJQUVwQyw2Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBGb3JtQXJyYXksIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS10ZXJtcy1hbmQtY29uZGl0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS10ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VUZXJtc0FuZENvbmRpdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0ZXJtc2FuZGNvbmRpdGlvbjogRm9ybUdyb3VwO1xuICBASW5wdXQoJ2NoZWNrLWJveC1jb2xvcicpIGNoZWNrQm94Q29sb3IgPSAncHJpbWFyeSc7XG4gIEBJbnB1dCgndGl0bGUnKSB0aXRsZSA9ICdDb250cmFjdCBUZXJtcyAmIENvbmRpdGlvbnMnO1xuICBASW5wdXQoJ3RpdGxlLWNvbG9yJykgdGl0bGVDb2xvcjtcbiAgQElucHV0KCd0aXRsZS1zaXplJykgdGl0bGVTaXplO1xuICBASW5wdXQoJ3RpdGxlLXdlaWdodCcpIHRpdGxlV2VpZ2h0O1xuICBASW5wdXQoJ2Rlc2NyaXB0aW9uJykgZGVzY3JpcHRpb24gPSAnSSBBY2NlcHQgdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIGFuZCBhdXRob3JpemUgdGhpcyB0cmFuc2FjdGlvbi4nO1xuICBASW5wdXQoJ2Rlc2NyaXB0aW9uLWN1c3RvbS1jbGFzcycpIGRlc2NyaXB0aW9uQ3VzdG9tQ2xhc3MgPSAndGVybXNBbmRDb25kaXRpb25zJztcbiAgQElucHV0KCdsaW5rLWN1c3RvbS1jbGFzcycpIGxpbmtDdXN0b21DbGFzcyA9ICdsaW5rJztcbiAgQElucHV0KCdsaW5rLW9uZScpIGxpbmtPbmUgPSAnaHR0cHM6Ly93d3cuc3VrdS53b3JsZC90ZXJtcyc7XG4gIEBJbnB1dCgnbGluay10d28nKSBsaW5rVHdvID0gJ2h0dHBzOi8vd3d3LnN1a3Uud29ybGQvcHJpdmFjeSc7XG4gIEBJbnB1dCgnbGluay1uYW1lLW9uZScpIGxpbmtPbmVUaXRsZSA9ICdUZXJtcyc7XG4gIEBJbnB1dCgnbGluay1uYW1lLXR3bycpIGxpbmtUd29UaXRsZSA9ICdQcml2YWN5JztcbiAgQElucHV0KCkgY29udHJvbCA9ICdjb250cmFjdFRlcm1zJztcblxuIEBPdXRwdXQoKSBhY3Rpb24gID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRlcm1zYW5kY29uZGl0aW9uID0gdGhpcy5mYi5ncm91cCh7XG5cdFx0XHQnY29udHJhY3RUZXJtcyc6IGZhbHNlXG5cdFx0fSk7XG4gIH1cblxuICBhY3Rpb24xKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnRlcm1zYW5kY29uZGl0aW9uLnZhbHVlLmNvbnRyYWN0VGVybXM7XG4gICAgdGhpcy5hY3Rpb24uZW1pdChkYXRhKTtcbiAgfVxuXG59XG4iXX0=