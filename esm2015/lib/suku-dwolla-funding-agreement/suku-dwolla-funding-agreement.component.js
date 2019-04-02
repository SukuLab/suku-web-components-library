/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class SukuDwollaFundingAgreementComponent {
    constructor() {
        this.title = 'Funding Source Agreement';
        this.titleClass = 'mb-3 mt-5 ';
        this.checkBoxId = 'checkAgreement';
        this.content = ' I agree that future payments to daisy will be processed by the Dwolla payment system from the selected account above. In order to cancel this authorization, I will change my payment settings within my emery account.';
        this.contentId = 'termsID';
        this.contentSize = '1.5';
        this.btnTextSize = '1.5';
        this.submit = new EventEmitter();
        this.verify = new EventEmitter();
        this.formValid = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    action() {
        /** @type {?} */
        const controlName = this.control;
        if (this.form.get(controlName).value) {
            this.formValid = false;
            this.verify.emit();
        }
        else {
            this.formValid = true;
        }
    }
    /**
     * @return {?}
     */
    agree() {
        console.log(this.form);
        this.submit.emit(this.form);
    }
}
SukuDwollaFundingAgreementComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-dwolla-funding-agreement',
                template: "<div class=\"col p-4\" [formGroup]=\"form\">\n  <label id=\"titleId\" class=\"titleClass\">{{title}}</label>\n  <div class=\"col bg p-4\">\n    <div class=\"col mt-4 mb-3\">\n      <mat-checkbox color=\"primary\" type=\"checkbox\" (change)=\"action()\" id=\"{{checkBoxId}}\" formControlName=\"{{control}}\"\n        name=\"{{control}}\">\n      </mat-checkbox>\n      <span class=\"col-sm-12 terms\" [style.font-size.rem]=\"contentSize\" id=\"{{contentId}}\">\n        {{content}}\n      </span>\n    </div>\n    <div class=\"col d-flex justify-content-center mt-5 mb-3\">\n      <button class=\"btn btn-info\" [ngClass]=\"{'disabled': formValid}\" (click)=\"agree()\"\n        [style.font-size.rem]=\"btnTextSize\"\n        [disabled]=\"formValid\">Agree & Continue</button>\n    </div>\n  </div>\n</div>",
                styles: [".terms{font-family:\"Encode Sans\",sans-serif!important;font-size:1rem}.bg{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}label{font-family:Poppins,sans-serif!important;font-size:20px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px;color:#1d1d1d}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.5rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.disabled{cursor:not-allowed!important}"]
            }] }
];
/** @nocollapse */
SukuDwollaFundingAgreementComponent.ctorParameters = () => [];
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
    submit: [{ type: Output }],
    verify: [{ type: Output }]
};
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
    SukuDwollaFundingAgreementComponent.prototype.verify;
    /** @type {?} */
    SukuDwollaFundingAgreementComponent.prototype.formValid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kd29sbGEtZnVuZGluZy1hZ3JlZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHdvbGxhLWZ1bmRpbmctYWdyZWVtZW50L3N1a3UtZHdvbGxhLWZ1bmRpbmctYWdyZWVtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNM0MsTUFBTSxPQUFPLG1DQUFtQztJQWM5QztRQVpTLFVBQUssR0FBRywwQkFBMEIsQ0FBQztRQUNuQyxlQUFVLEdBQUcsWUFBWSxDQUFDO1FBRTFCLGVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztRQUM5QixZQUFPLEdBQUcsME5BQTBOLENBQUM7UUFDck8sY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNKLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ25DLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RDLGNBQVMsR0FBWSxJQUFJLENBQUM7SUFFVixDQUFDOzs7O0lBRWpCLFFBQVE7SUFFUixDQUFDOzs7O0lBRUQsTUFBTTs7Y0FDRSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDaEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdEI7SUFDRixDQUFDOzs7O0lBRUQsS0FBSztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLGl6QkFBNkQ7O2FBRTlEOzs7OzttQkFFRSxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsS0FBSztzQkFDTCxLQUFLO3lCQUNMLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSyxTQUFDLGdCQUFnQjtxQkFDdEIsTUFBTTtxQkFDTixNQUFNOzs7O0lBVlAsbURBQXlCOztJQUN6QixvREFBNEM7O0lBQzVDLHlEQUFtQzs7SUFDbkMsc0RBQWlCOztJQUNqQix5REFBdUM7O0lBQ3ZDLHNEQUE4Tzs7SUFDOU8sd0RBQStCOztJQUMvQiwwREFBNkI7O0lBQzdCLDBEQUE2Qzs7SUFDN0MscURBQXNDOztJQUN0QyxxREFBc0M7O0lBQ3RDLHdEQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZHdvbGxhLWZ1bmRpbmctYWdyZWVtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZHdvbGxhLWZ1bmRpbmctYWdyZWVtZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1kd29sbGEtZnVuZGluZy1hZ3JlZW1lbnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1RHdvbGxhRnVuZGluZ0FncmVlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgdGl0bGUgPSAnRnVuZGluZyBTb3VyY2UgQWdyZWVtZW50JztcbiAgQElucHV0KCkgdGl0bGVDbGFzcyA9ICdtYi0zIG10LTUgJztcbiAgQElucHV0KCkgY29udHJvbDtcbiAgQElucHV0KCkgY2hlY2tCb3hJZCA9ICdjaGVja0FncmVlbWVudCc7XG4gIEBJbnB1dCgpIGNvbnRlbnQgPSAnIEkgYWdyZWUgdGhhdCBmdXR1cmUgcGF5bWVudHMgdG8gZGFpc3kgd2lsbCBiZSBwcm9jZXNzZWQgYnkgdGhlIER3b2xsYSBwYXltZW50IHN5c3RlbSBmcm9tIHRoZSBzZWxlY3RlZCBhY2NvdW50IGFib3ZlLiBJbiBvcmRlciB0byBjYW5jZWwgdGhpcyBhdXRob3JpemF0aW9uLCBJIHdpbGwgY2hhbmdlIG15IHBheW1lbnQgc2V0dGluZ3Mgd2l0aGluIG15IGVtZXJ5IGFjY291bnQuJztcbiAgQElucHV0KCkgY29udGVudElkID0gJ3Rlcm1zSUQnO1xuICBASW5wdXQoKSBjb250ZW50U2l6ZSA9ICcxLjUnO1xuICBASW5wdXQoJyBidG4tdGV4dC1zaXplJykgYnRuVGV4dFNpemUgPSAnMS41JztcbiAgQE91dHB1dCgpIHN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHZlcmlmeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZm9ybVZhbGlkOiBCb29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBhY3Rpb24oKSB7XG4gICAgY29uc3QgY29udHJvbE5hbWUgPSB0aGlzLmNvbnRyb2w7XG4gICAgaWYgKHRoaXMuZm9ybS5nZXQoY29udHJvbE5hbWUpLnZhbHVlKSB7XG4gICAgICB0aGlzLmZvcm1WYWxpZCA9IGZhbHNlO1xuICAgICAgdGhpcy52ZXJpZnkuZW1pdCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5mb3JtVmFsaWQgPSB0cnVlO1xuXHRcdFx0fVxuICB9XG5cbiAgYWdyZWUoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtKTtcbiAgICB0aGlzLnN1Ym1pdC5lbWl0KHRoaXMuZm9ybSk7XG4gIH1cblxufVxuIl19