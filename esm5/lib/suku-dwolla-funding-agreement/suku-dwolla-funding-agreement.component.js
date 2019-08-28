/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
var SukuDwollaFundingAgreementComponent = /** @class */ (function () {
    function SukuDwollaFundingAgreementComponent() {
        this.title = 'Funding Source Agreement';
        this.titleClass = 'mb-3 mt-5 ';
        this.titleid = '';
        this.titleWeight = '';
        this.titleColor = '';
        this.titleSize = '';
        this.checkBoxId = 'checkAgreement';
        this.content = ' I agree that future payments to daisy will be processed by the Dwolla payment system from the selected account above. In order to cancel this authorization, I will change my payment settings within my emery account.';
        this.contentId = 'termsID';
        this.contentSize = '15';
        this.btnTextSize = '1.5';
        this.submit = new EventEmitter();
        this.verify = new EventEmitter();
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
            this.verify.emit();
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
                    template: "<div class=\"col p-4\" [formGroup]=\"form\">\n  <label [style.font-size.px]=\"titleSize\" [class]=\"titleClass\" id=\"{{titleid}}\" [style.font-weight]=\"titleWeight\"\n    [style.color]=\"titleColor\">{{title}}</label>\n  <div class=\"col bg p-4\">\n    <div class=\"col mt-4 mb-3\">\n      <mat-checkbox color=\"primary\" formControlName=\"{{control}}\" type=\"checkbox\" (change)=\"action()\"\n        id=\"{{checkBoxId}}\">\n      </mat-checkbox>\n      <span class=\"col-sm-12 terms\" [style.font-size.px]=\"contentSize\" id=\"{{contentId}}\">\n        {{content}}\n      </span>\n    </div>\n    <div class=\"col d-flex justify-content-center mt-5 mb-3\">\n      <button class=\"suku suku-info\" [ngClass]=\"{'disabled': formValid}\" (click)=\"agree()\"\n        [style.font-size.rem]=\"btnTextSize\" [disabled]=\"formValid\">Agree & Continue</button>\n    </div>\n  </div>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.terms{font-family:var(--suku-secondary-font);font-size:15px}.bg{border-radius:0 0 41px 41px;background-color:var(--suku-default-bg);box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}label{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-6);font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px;color:#1d1d1d}.suku{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:var(--suku-primary-font);font-size:1.5rem}.suku-info{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff;color:#00000099}.suku-info:active,.suku-info:hover{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:var(--suku-primary-color);color:#fff}.suku-info.disabled{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff;color:grey}.suku-info.disabled.focus,.suku-info.disabled:focus,.suku-info.disabled:hover,.suku-info[disabled].focus,.suku-info[disabled]:focus,.suku-info[disabled]:hover,fieldset[disabled] .suku-info.focus,fieldset[disabled] .suku-info:focus,fieldset[disabled] .suku-info:hover{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info.focus,.suku-info:focus{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:var(--suku-primary-color);color:#fff;box-shadow:none!important}.open>.dropdown-toggle .suku-info.focus,.open>.dropdown-toggle .suku-info:focus,.open>.dropdown-toggle.suku-info:hover,.suku-info.active.focus,.suku-info.active:focus,.suku-info.active:hover,.suku-info:active.focus,.suku-info:active:focus,.suku-info:active:hover{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:var(--suku-primary-color);color:#fff;box-shadow:none!important}.disabled{cursor:not-allowed!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuDwollaFundingAgreementComponent.ctorParameters = function () { return []; };
    SukuDwollaFundingAgreementComponent.propDecorators = {
        form: [{ type: Input }],
        title: [{ type: Input }],
        titleClass: [{ type: Input }],
        titleid: [{ type: Input }],
        titleWeight: [{ type: Input }],
        titleColor: [{ type: Input }],
        titleSize: [{ type: Input }],
        control: [{ type: Input }],
        checkBoxId: [{ type: Input }],
        content: [{ type: Input }],
        contentId: [{ type: Input }],
        contentSize: [{ type: Input }],
        btnTextSize: [{ type: Input, args: [' btn-text-size',] }],
        submit: [{ type: Output }],
        verify: [{ type: Output }]
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
    SukuDwollaFundingAgreementComponent.prototype.titleid;
    /** @type {?} */
    SukuDwollaFundingAgreementComponent.prototype.titleWeight;
    /** @type {?} */
    SukuDwollaFundingAgreementComponent.prototype.titleColor;
    /** @type {?} */
    SukuDwollaFundingAgreementComponent.prototype.titleSize;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kd29sbGEtZnVuZGluZy1hZ3JlZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHdvbGxhLWZ1bmRpbmctYWdyZWVtZW50L3N1a3UtZHdvbGxhLWZ1bmRpbmctYWdyZWVtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0M7SUF1QkU7UUFoQlMsVUFBSyxHQUFHLDBCQUEwQixDQUFDO1FBQ25DLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFDMUIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNkLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVkLGVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztRQUM5QixZQUFPLEdBQUcsME5BQTBOLENBQUM7UUFDck8sY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNILGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ25DLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RDLGNBQVMsR0FBWSxJQUFJLENBQUM7SUFFVixDQUFDOzs7O0lBRWpCLHNEQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7SUFFRCxvREFBTTs7O0lBQU47O1lBQ1EsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPO1FBQ2hDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0YsQ0FBQzs7OztJQUVELG1EQUFLOzs7SUFBTDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkExQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLG00QkFBNkQ7O2lCQUU5RDs7Ozs7dUJBRUUsS0FBSzt3QkFDTCxLQUFLOzZCQUNMLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTixLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDSixLQUFLOzZCQUNMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSyxTQUFDLGdCQUFnQjt5QkFDdEIsTUFBTTt5QkFDTixNQUFNOztJQXdCVCwwQ0FBQztDQUFBLEFBNUNELElBNENDO1NBdkNZLG1DQUFtQzs7O0lBQzlDLG1EQUF5Qjs7SUFDekIsb0RBQTRDOztJQUM1Qyx5REFBbUM7O0lBQ25DLHNEQUFzQjs7SUFDdkIsMERBQTBCOztJQUMxQix5REFBeUI7O0lBQ3pCLHdEQUF3Qjs7SUFDdkIsc0RBQWlCOztJQUNqQix5REFBdUM7O0lBQ3ZDLHNEQUE4Tzs7SUFDOU8sd0RBQStCOztJQUMvQiwwREFBNEI7O0lBQzVCLDBEQUE2Qzs7SUFDN0MscURBQXNDOztJQUN0QyxxREFBc0M7O0lBQ3RDLHdEQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZHdvbGxhLWZ1bmRpbmctYWdyZWVtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZHdvbGxhLWZ1bmRpbmctYWdyZWVtZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1kd29sbGEtZnVuZGluZy1hZ3JlZW1lbnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1RHdvbGxhRnVuZGluZ0FncmVlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgdGl0bGUgPSAnRnVuZGluZyBTb3VyY2UgQWdyZWVtZW50JztcbiAgQElucHV0KCkgdGl0bGVDbGFzcyA9ICdtYi0zIG10LTUgJztcbiAgQElucHV0KCkgdGl0bGVpZCA9ICcnO1xuXHRASW5wdXQoKSB0aXRsZVdlaWdodCA9ICcnO1xuXHRASW5wdXQoKSB0aXRsZUNvbG9yID0gJyc7XG5cdEBJbnB1dCgpIHRpdGxlU2l6ZSA9ICcnO1xuICBASW5wdXQoKSBjb250cm9sO1xuICBASW5wdXQoKSBjaGVja0JveElkID0gJ2NoZWNrQWdyZWVtZW50JztcbiAgQElucHV0KCkgY29udGVudCA9ICcgSSBhZ3JlZSB0aGF0IGZ1dHVyZSBwYXltZW50cyB0byBkYWlzeSB3aWxsIGJlIHByb2Nlc3NlZCBieSB0aGUgRHdvbGxhIHBheW1lbnQgc3lzdGVtIGZyb20gdGhlIHNlbGVjdGVkIGFjY291bnQgYWJvdmUuIEluIG9yZGVyIHRvIGNhbmNlbCB0aGlzIGF1dGhvcml6YXRpb24sIEkgd2lsbCBjaGFuZ2UgbXkgcGF5bWVudCBzZXR0aW5ncyB3aXRoaW4gbXkgZW1lcnkgYWNjb3VudC4nO1xuICBASW5wdXQoKSBjb250ZW50SWQgPSAndGVybXNJRCc7XG4gIEBJbnB1dCgpIGNvbnRlbnRTaXplID0gJzE1JztcbiAgQElucHV0KCcgYnRuLXRleHQtc2l6ZScpIGJ0blRleHRTaXplID0gJzEuNSc7XG4gIEBPdXRwdXQoKSBzdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSB2ZXJpZnkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGZvcm1WYWxpZDogQm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbiAgYWN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRyb2xOYW1lID0gdGhpcy5jb250cm9sO1xuICAgIGlmICh0aGlzLmZvcm0uZ2V0KGNvbnRyb2xOYW1lKS52YWx1ZSkge1xuICAgICAgdGhpcy5mb3JtVmFsaWQgPSBmYWxzZTtcbiAgICAgIHRoaXMudmVyaWZ5LmVtaXQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZm9ybVZhbGlkID0gdHJ1ZTtcblx0XHRcdH1cbiAgfVxuXG4gIGFncmVlKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybSk7XG4gICAgdGhpcy5zdWJtaXQuZW1pdCh0aGlzLmZvcm0pO1xuICB9XG5cbn1cbiJdfQ==