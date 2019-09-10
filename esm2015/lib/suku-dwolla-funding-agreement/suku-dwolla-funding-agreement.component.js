/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class SukuDwollaFundingAgreementComponent {
    constructor() {
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
                template: "<div class=\"col p-4\" [formGroup]=\"form\">\n  <label [style.font-size.px]=\"titleSize\" [class]=\"titleClass\" id=\"{{titleid}}\" [style.font-weight]=\"titleWeight\"\n    [style.color]=\"titleColor\">{{title}}</label>\n  <div class=\"col bg p-4\">\n    <div class=\"col mt-4 mb-3\">\n      <mat-checkbox color=\"primary\" formControlName=\"{{control}}\" type=\"checkbox\" (change)=\"action()\"\n        id=\"{{checkBoxId}}\">\n      </mat-checkbox>\n      <span class=\"col-sm-12 terms\" [style.font-size.px]=\"contentSize\" id=\"{{contentId}}\">\n        {{content}}\n      </span>\n    </div>\n    <div class=\"col d-flex justify-content-center mt-5 mb-3\">\n      <button class=\"suku suku-info\" [ngClass]=\"{'disabled': formValid}\" (click)=\"agree()\"\n        [style.font-size.rem]=\"btnTextSize\" [disabled]=\"formValid\">Agree & Continue</button>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.terms{font-family:var(--suku-secondary-font);font-size:15px}.bg{border-radius:0 0 41px 41px;background-color:var(--suku-default-bg);box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}label{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-6);font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px;color:#1d1d1d}.suku{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:var(--suku-primary-font);font-size:1.5rem}.suku-info{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff;color:#00000099}.suku-info:active,.suku-info:hover{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:var(--suku-primary-color);color:#fff}.suku-info.disabled{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff;color:grey}.suku-info.disabled.focus,.suku-info.disabled:focus,.suku-info.disabled:hover,.suku-info[disabled].focus,.suku-info[disabled]:focus,.suku-info[disabled]:hover,fieldset[disabled] .suku-info.focus,fieldset[disabled] .suku-info:focus,fieldset[disabled] .suku-info:hover{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info.focus,.suku-info:focus{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:var(--suku-primary-color);color:#fff;box-shadow:none!important}.open>.dropdown-toggle .suku-info.focus,.open>.dropdown-toggle .suku-info:focus,.open>.dropdown-toggle.suku-info:hover,.suku-info.active.focus,.suku-info.active:focus,.suku-info.active:hover,.suku-info:active.focus,.suku-info:active:focus,.suku-info:active:hover{border:solid 2px var(--suku-primary-color);padding:10px 32px;background-color:var(--suku-primary-color);color:#fff;box-shadow:none!important}.disabled{cursor:not-allowed!important}"]
            }] }
];
/** @nocollapse */
SukuDwollaFundingAgreementComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1kd29sbGEtZnVuZGluZy1hZ3JlZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtZHdvbGxhLWZ1bmRpbmctYWdyZWVtZW50L3N1a3UtZHdvbGxhLWZ1bmRpbmctYWdyZWVtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNM0MsTUFBTSxPQUFPLG1DQUFtQztJQWtCOUM7UUFoQlMsVUFBSyxHQUFHLDBCQUEwQixDQUFDO1FBQ25DLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFDMUIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNkLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVkLGVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztRQUM5QixZQUFPLEdBQUcsME5BQTBOLENBQUM7UUFDck8sY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNILGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ25DLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RDLGNBQVMsR0FBWSxJQUFJLENBQUM7SUFFVixDQUFDOzs7O0lBRWpCLFFBQVE7SUFFUixDQUFDOzs7O0lBRUQsTUFBTTs7Y0FDRSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDaEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdEI7SUFDRixDQUFDOzs7O0lBRUQsS0FBSztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUExQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLG00QkFBNkQ7O2FBRTlEOzs7OzttQkFFRSxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsS0FBSztzQkFDTCxLQUFLOzBCQUNOLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQUNKLEtBQUs7eUJBQ0wsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLLFNBQUMsZ0JBQWdCO3FCQUN0QixNQUFNO3FCQUNOLE1BQU07Ozs7SUFkUCxtREFBeUI7O0lBQ3pCLG9EQUE0Qzs7SUFDNUMseURBQW1DOztJQUNuQyxzREFBc0I7O0lBQ3ZCLDBEQUEwQjs7SUFDMUIseURBQXlCOztJQUN6Qix3REFBd0I7O0lBQ3ZCLHNEQUFpQjs7SUFDakIseURBQXVDOztJQUN2QyxzREFBOE87O0lBQzlPLHdEQUErQjs7SUFDL0IsMERBQTRCOztJQUM1QiwwREFBNkM7O0lBQzdDLHFEQUFzQzs7SUFDdEMscURBQXNDOztJQUN0Qyx3REFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWR3b2xsYS1mdW5kaW5nLWFncmVlbWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWR3b2xsYS1mdW5kaW5nLWFncmVlbWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZHdvbGxhLWZ1bmRpbmctYWdyZWVtZW50LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUR3b2xsYUZ1bmRpbmdBZ3JlZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIHRpdGxlID0gJ0Z1bmRpbmcgU291cmNlIEFncmVlbWVudCc7XG4gIEBJbnB1dCgpIHRpdGxlQ2xhc3MgPSAnbWItMyBtdC01ICc7XG4gIEBJbnB1dCgpIHRpdGxlaWQgPSAnJztcblx0QElucHV0KCkgdGl0bGVXZWlnaHQgPSAnJztcblx0QElucHV0KCkgdGl0bGVDb2xvciA9ICcnO1xuXHRASW5wdXQoKSB0aXRsZVNpemUgPSAnJztcbiAgQElucHV0KCkgY29udHJvbDtcbiAgQElucHV0KCkgY2hlY2tCb3hJZCA9ICdjaGVja0FncmVlbWVudCc7XG4gIEBJbnB1dCgpIGNvbnRlbnQgPSAnIEkgYWdyZWUgdGhhdCBmdXR1cmUgcGF5bWVudHMgdG8gZGFpc3kgd2lsbCBiZSBwcm9jZXNzZWQgYnkgdGhlIER3b2xsYSBwYXltZW50IHN5c3RlbSBmcm9tIHRoZSBzZWxlY3RlZCBhY2NvdW50IGFib3ZlLiBJbiBvcmRlciB0byBjYW5jZWwgdGhpcyBhdXRob3JpemF0aW9uLCBJIHdpbGwgY2hhbmdlIG15IHBheW1lbnQgc2V0dGluZ3Mgd2l0aGluIG15IGVtZXJ5IGFjY291bnQuJztcbiAgQElucHV0KCkgY29udGVudElkID0gJ3Rlcm1zSUQnO1xuICBASW5wdXQoKSBjb250ZW50U2l6ZSA9ICcxNSc7XG4gIEBJbnB1dCgnIGJ0bi10ZXh0LXNpemUnKSBidG5UZXh0U2l6ZSA9ICcxLjUnO1xuICBAT3V0cHV0KCkgc3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdmVyaWZ5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBmb3JtVmFsaWQ6IEJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gIGFjdGlvbigpIHtcbiAgICBjb25zdCBjb250cm9sTmFtZSA9IHRoaXMuY29udHJvbDtcbiAgICBpZiAodGhpcy5mb3JtLmdldChjb250cm9sTmFtZSkudmFsdWUpIHtcbiAgICAgIHRoaXMuZm9ybVZhbGlkID0gZmFsc2U7XG4gICAgICB0aGlzLnZlcmlmeS5lbWl0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmZvcm1WYWxpZCA9IHRydWU7XG5cdFx0XHR9XG4gIH1cblxuICBhZ3JlZSgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm0pO1xuICAgIHRoaXMuc3VibWl0LmVtaXQodGhpcy5mb3JtKTtcbiAgfVxuXG59XG4iXX0=