/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
var SukuDwollaFundingAgreementComponent = /** @class */ (function () {
    function SukuDwollaFundingAgreementComponent() {
        this.title = 'Funding Source Agreement';
        this.titleClass = 'mb-3 mt-5 ';
        this.checkBoxId = 'checkAgreement';
        this.content = ' I agree that future payments to daisy will be processed by the Dwolla payment system from the selected account above. In order to cancel this authorization, I will change my payment settings within my emery account.';
        this.contentId = 'termsID';
        this.contentSize = '1.5';
        this.btnTextSize = '1.5';
        this.submit = new EventEmitter();
        this.formValid = true;
    }
    /**
     * @return {?}
     */
    SukuDwollaFundingAgreementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SukuDwollaFundingAgreementComponent.prototype.action = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var controlName = this.control;
        if (this.form.get(controlName).value) {
            this.formValid = false;
        }
        else {
            this.formValid = true;
        }
    };
    /**
     * @return {?}
     */
    SukuDwollaFundingAgreementComponent.prototype.agree = /**
     * @return {?}
     */
    function () {
        console.log(this.form);
        this.submit.emit(this.form);
    };
    SukuDwollaFundingAgreementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-dwolla-funding-agreement',
                    template: "<div class=\"col p-4\" [formGroup]=\"form\">\n  <label id=\"titleId\" class=\"titleClass\">{{title}}</label>\n  <div class=\"col bg p-4\">\n    <div class=\"col mt-4 mb-3\">\n      <mat-checkbox color=\"primary\" type=\"checkbox\" (change)=\"action()\" id=\"{{checkBoxId}}\" formControlName=\"{{control}}\"\n        name=\"{{control}}\">\n      </mat-checkbox>\n      <span class=\"col-sm-12 terms\" [style.font-size.rem]=\"contentSize\" id=\"{{contentId}}\">\n        {{content}}\n      </span>\n    </div>\n    <div class=\"col d-flex justify-content-center mt-5 mb-3\">\n      <button class=\"btn btn-info\" [ngClass]=\"{'disabled': formValid}\" (click)=\"agree()\"\n        [style.font-size.rem]=\"btnTextSize\"\n        [disabled]=\"formValid\">Agree & Continue</button>\n    </div>\n  </div>\n</div>",
                    styles: [".terms{font-family:\"Encode Sans\",sans-serif!important;font-size:1rem}.bg{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}label{font-family:Poppins,sans-serif!important;font-size:20px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px;color:#1d1d1d}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.5rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.disabled{cursor:not-allowed!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuDwollaFundingAgreementComponent.ctorParameters = function () { return []; };
    SukuDwollaFundingAgreementComponent.propDecorators = {
        form: [{ type: Input }],
        title: [{ type: Input }],
        titleClass: [{ type: Input }],
        control: [{ type: Input }],
        checkBoxId: [{ type: Input }],
        content: [{ type: Input }],
        contentId: [{ type: Input }],
        contentSize: [{ type: Input }],
        btnTextSize: [{ type: Input, args: [' btn-text-size',] }],
        submit: [{ type: Output }]
    };
    return SukuDwollaFundingAgreementComponent;
}());
export { SukuDwollaFundingAgreementComponent };
if (false) {
    /** @type {?} */
    SukuDwollaFundingAgreementComponent.prototype.form;
    /** @type {?} */
    SukuDwollaFundingAgreementComponent.prototype.title;
    /** @type {?} */
    SukuDwollaFundingAgreementComponent.prototype.titleClass;
    /** @type {?} */
    SukuDwollaFundingAgreementComponent.prototype.control;
    /** @type {?} */
    SukuDwollaFundingAgreementComponent.prototype.checkBoxId;
    /** @type {?} */
    SukuDwollaFundingAgreementComponent.prototype.content;
    /** @type {?} */
    SukuDwollaFundingAgreementComponent.prototype.contentId;
    /** @type {?} */
    SukuDwollaFundingAgreementComponent.prototype.contentSize;
    /** @type {?} */
    SukuDwollaFundingAgreementComponent.prototype.btnTextSize;
    /** @type {?} */
    SukuDwollaFundingAgreementComponent.prototype.submit;
    /** @type {?} */
    SukuDwollaFundingAgreementComponent.prototype.formValid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kd29sbGEtZnVuZGluZy1hZ3JlZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHdvbGxhLWZ1bmRpbmctYWdyZWVtZW50L3N1a3UtZHdvbGxhLWZ1bmRpbmctYWdyZWVtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0M7SUFrQkU7UUFYUyxVQUFLLEdBQUcsMEJBQTBCLENBQUM7UUFDbkMsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUUxQixlQUFVLEdBQUcsZ0JBQWdCLENBQUM7UUFDOUIsWUFBTyxHQUFHLDBOQUEwTixDQUFDO1FBQ3JPLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFDdEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDSixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNuQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0QyxjQUFTLEdBQVksSUFBSSxDQUFDO0lBRVYsQ0FBQzs7OztJQUVqQixzREFBUTs7O0lBQVI7SUFFQSxDQUFDOzs7O0lBRUQsb0RBQU07OztJQUFOOztZQUNRLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTztRQUNoQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4QjthQUFNO1lBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdEI7SUFDRixDQUFDOzs7O0lBRUQsbURBQUs7OztJQUFMO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQXBDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsaXpCQUE2RDs7aUJBRTlEOzs7Ozt1QkFFRSxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLOzZCQUNMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSyxTQUFDLGdCQUFnQjt5QkFDdEIsTUFBTTs7SUF1QlQsMENBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQWpDWSxtQ0FBbUM7OztJQUM5QyxtREFBeUI7O0lBQ3pCLG9EQUE0Qzs7SUFDNUMseURBQW1DOztJQUNuQyxzREFBaUI7O0lBQ2pCLHlEQUF1Qzs7SUFDdkMsc0RBQThPOztJQUM5Tyx3REFBK0I7O0lBQy9CLDBEQUE2Qjs7SUFDN0IsMERBQTZDOztJQUM3QyxxREFBc0M7O0lBQ3RDLHdEQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZHdvbGxhLWZ1bmRpbmctYWdyZWVtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZHdvbGxhLWZ1bmRpbmctYWdyZWVtZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1kd29sbGEtZnVuZGluZy1hZ3JlZW1lbnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1RHdvbGxhRnVuZGluZ0FncmVlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgdGl0bGUgPSAnRnVuZGluZyBTb3VyY2UgQWdyZWVtZW50JztcbiAgQElucHV0KCkgdGl0bGVDbGFzcyA9ICdtYi0zIG10LTUgJztcbiAgQElucHV0KCkgY29udHJvbDtcbiAgQElucHV0KCkgY2hlY2tCb3hJZCA9ICdjaGVja0FncmVlbWVudCc7XG4gIEBJbnB1dCgpIGNvbnRlbnQgPSAnIEkgYWdyZWUgdGhhdCBmdXR1cmUgcGF5bWVudHMgdG8gZGFpc3kgd2lsbCBiZSBwcm9jZXNzZWQgYnkgdGhlIER3b2xsYSBwYXltZW50IHN5c3RlbSBmcm9tIHRoZSBzZWxlY3RlZCBhY2NvdW50IGFib3ZlLiBJbiBvcmRlciB0byBjYW5jZWwgdGhpcyBhdXRob3JpemF0aW9uLCBJIHdpbGwgY2hhbmdlIG15IHBheW1lbnQgc2V0dGluZ3Mgd2l0aGluIG15IGVtZXJ5IGFjY291bnQuJztcbiAgQElucHV0KCkgY29udGVudElkID0gJ3Rlcm1zSUQnO1xuICBASW5wdXQoKSBjb250ZW50U2l6ZSA9ICcxLjUnO1xuICBASW5wdXQoJyBidG4tdGV4dC1zaXplJykgYnRuVGV4dFNpemUgPSAnMS41JztcbiAgQE91dHB1dCgpIHN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZm9ybVZhbGlkOiBCb29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBhY3Rpb24oKSB7XG4gICAgY29uc3QgY29udHJvbE5hbWUgPSB0aGlzLmNvbnRyb2w7XG4gICAgaWYgKHRoaXMuZm9ybS5nZXQoY29udHJvbE5hbWUpLnZhbHVlKSB7XG4gICAgXHR0aGlzLmZvcm1WYWxpZCA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5mb3JtVmFsaWQgPSB0cnVlO1xuXHRcdFx0fVxuICB9XG5cbiAgYWdyZWUoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtKTtcbiAgICB0aGlzLnN1Ym1pdC5lbWl0KHRoaXMuZm9ybSk7XG4gIH1cblxufVxuIl19