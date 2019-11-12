/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
export class SukuBeneficialOwnerComponent {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.title = 'Beneficial Owners';
        this.titleClass = 'mb-3 mt-5 ';
        this.titleCustomClass = '';
        this.titleid = '';
        this.titleWeight = '';
        this.titleColor = '';
        this.titleSize = '';
        this.control = '';
        this.content = `I, Daisy, hereby certify, to the best of my knowledge, that the
  information provided above is complete and correct.`;
        this.type = 'info';
        this.btnOne = 'Submit Beneficial Owner';
        this.btnOneId = 'submitBeneficialOwner';
        this.btnOneCustomClass = '';
        this.btnOneDisable = false;
        this.btnTwo = 'Agree & Continue';
        this.btnTwoCustomClass = '';
        this.btnTwoId = 'agreeBtn';
        this.btnTwoDisable = false;
        this.labelOne = 'Add New Beneficial Owner';
        this.labelOneId = 'addOwner';
        this.countrySelect = new EventEmitter();
        this.stateSelect = new EventEmitter();
        this.upload = new EventEmitter();
        this.submitOwner = new EventEmitter();
        this.add = new EventEmitter();
        this.submitData = new EventEmitter();
        this.verify = new EventEmitter();
        this.selected = [];
        this.toggle = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.formValid = true;
        for (let j = 0; j < this.form.get(this.arrayControlName)['controls'].length; j++) {
            this.toggle[j] = false;
        }
        this.selected[0] = 0;
        this.toggle[0] = true;
        this.btnTwoDisable = true;
    }
    /**
     * @param {?} i
     * @return {?}
     */
    active(i) {
        this.selected[i] = i;
        this.toggle[i] = !this.toggle[i];
        for (let j = 0; j < this.form.get(this.arrayControlName)['controls'].length; j++) {
            if (i != j) {
                this.selected[j] = null;
            }
        }
        if (!this.toggle[i]) {
            this.selected[i] = null;
        }
        else {
            for (let j = 0; j < this.form.get(this.arrayControlName)['controls'].length; j++) {
                if (i != j) {
                    this.toggle[j] = false;
                }
            }
        }
    }
    /**
     * @return {?}
     */
    action() {
        /** @type {?} */
        const controlName = this.control;
        if (this.form.get(controlName).value) {
            this.btnTwoDisable = false;
            this.verify.emit();
        }
        else {
            this.btnTwoDisable = true;
        }
    }
    /**
     * @param {?} val
     * @param {?} i
     * @return {?}
     */
    countrySelectAction(val, i) {
        if (val) {
            /** @type {?} */
            const data = {
                countryDetails: JSON.parse(val),
                index: i
            };
            this.countrySelect.emit(data);
        }
    }
    /**
     * @return {?}
     */
    agree() {
        /** @type {?} */
        const formData = this.form.value;
        this.submitOwner.emit(formData);
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    snackbar(msg) {
        this.snackBar.open(msg, 'close', {
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            duration: 3500
        });
    }
}
SukuBeneficialOwnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-beneficial-owner',
                template: "<form [formGroup]=\"form\">\r\n  <div class=\"col\">\r\n    <label class=\"titleClass\">\r\n      <strong [style.font-size.px]=\"titleSize\" [class]=\"titleCustomClass\" id=\"{{titleid}}\"\r\n        [style.font-weight]=\"titleWeight\" [style.color]=\"titleColor\">{{title}}</strong>\r\n    </label>\r\n    <div class=\"col bg pl-5 pr-5 pt-5 pb-3 mb-5\">\r\n      <div class=\"col p-0\" formArrayName=\"{{arrayControlName}}\" id=\"beneficialOwnerBlock\">\r\n        <div class=\"col p-0\" *ngFor=\"let detail of form.get(arrayControlName)['controls']; let i=index\"\r\n          [formGroupName]=\"i\">\r\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\r\n            (click)=\"active(i)\">\r\n            <div class=\"row\">\r\n              <label class=\"m-2 pl-3 owner c-pointer\">\r\n                Beneficial Owner {{i+1}}\r\n              </label>\r\n              <label class=\"d-flex justify-content-end col pl-0 c-pointer\">\r\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\r\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\r\n                </span>\r\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\r\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\r\n                </span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col mt-4 collapse\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\"\r\n            id=\"ownerBlock{{i}}\">\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <mat-form-field class=\"fullwidth\">\r\n                  <input matInput placeholder=\"First Name\" id=\"firstname\" formControlName=\"firstName\" name=\"firstName\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col\">\r\n                <mat-form-field class=\"fullwidth\">\r\n                  <input matInput placeholder=\"Last Name\" id=\"lastname\" formControlName=\"lastName\" name=\"lastName\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col\">\r\n                <mat-form-field>\r\n                  <input matInput [matDatepicker]=\"myDatepicker\" id=\"dob\" placeholder=\"Date of birth\"\r\n                    formControlName=\"dateOfBirth\" name=\"dateOfBirth\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #myDatepicker></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col\">\r\n                <mat-form-field class=\"fullwidth\">\r\n                  <input matInput placeholder=\"SSN\" id=\"ssn\" formControlName=\"ssn\" name=\"ssn\">\r\n                  <mat-hint>hint: 1234-12-123</mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"col p-0\" formGroupName=\"address\">\r\n              <div class=\"col p-0\">\r\n                <mat-form-field class=\"fullwidth\">\r\n                  <input matInput placeholder=\"Address 1\" id=\"address1\" formControlName=\"address1\" name=\"address1\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col p-0\">\r\n                <mat-form-field class=\"fullwidth\">\r\n                  <input matInput placeholder=\"Address 2\" id=\"address2\" formControlName=\"address2\" name=\"address2\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col p-0\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <mat-form-field class=\"fullwidth\">\r\n                      <mat-select #t (selectionChange)=\"countrySelectAction(t.value,i)\" id=\"country\"\r\n                        formControlName=\"country\" name=\"country\" placeholder=\"country\">\r\n                        <mat-option value=\"\">Select Country</mat-option>\r\n                        <mat-option *ngFor=\"let item of countriesList; let i = index\" value=\"{{ item | json }}\">\r\n                          {{ item.countryName }}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <mat-form-field class=\"fullwidth\">\r\n                      <mat-select #s (selectionChange)=\"stateSelect.emit(s.value)\" formControlName=\"stateProvinceRegion\"\r\n                        id=\"stateProvinceRegion\" name=\"stateProvinceRegion\" placeholder=\"state\">\r\n                        <mat-option value=\"\">Select State</mat-option>\r\n                        <mat-option *ngFor=\"let item of statesList; let i = index\" value=\"{{ item.stateShortName  }}\">{{\r\n                          item.stateName }}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <mat-form-field class=\"fullwidth\">\r\n                      <input matInput placeholder=\"City\" id=\"city\" formControlName=\"city\" name=\"city\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <mat-form-field class=\"fullwidth\">\r\n                      <input matInput #postalcode maxlength=\"5\" placeholder=\"Postal Code\" id=\"postalCode\"\r\n                        formControlName=\"postalCode\" name=\"postalCode\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col mt-5 mb-3\">\r\n        <div class=\"row\">\r\n          <div class=\"col mt-3 mb-2\">\r\n            <span class=\"add d-flex c-pointer\" id=\"labelOneId\" (click)=\"add.emit()\">\r\n              <i class=\"fa fa-plus-circle pr-3 add-icon\"></i>\r\n              <span class=\"mt-1\">{{labelOne}}</span></span>\r\n          </div>\r\n          <div class=\"col d-flex justify-content-end  mt-3 mb-3 pr-sm-3 mr-sm-2\">\r\n            <button class=\"suku-i suku-{{type}} {{btnOneCustomClass}}\" [id]=\"btnOneId\"\r\n              [ngClass]=\"{'disabled': btnOneDisable}\" (click)=\"agree()\" [disabled]=\"btnOneDisable\">{{btnOne}}</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"col mt-5\">\r\n          <div class=\"row\">\r\n            <span class=\"pt-1\">\r\n              <mat-checkbox color=\"primary\" type=\"checkbox\" (change)=\"action()\" id=\"agree\" formControlName=\"{{control}}\"\r\n                name=\"{{control}}\">\r\n              </mat-checkbox>\r\n            </span>\r\n            <span class=\"col terms\" id=\"content\">{{content}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col d-flex justify-content-center mt-4 mb-3\">\r\n          <button class=\"suku-i suku-{{type}} {{btnTwoCustomClass}}\" [id]=\"btnTwoId\"\r\n            [ngClass]=\"{'disabled': btnTwoDisable}\" (click)=\"submitData.emit()\"\r\n            [disabled]=\"btnTwoDisable\">{{btnTwo}}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px;font-size:17px!important}.bg{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.terms{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-5)}label{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-6);font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px}.owner{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-4);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px}.card-line{background-color:var(--suku-default-bg);color:#2c2727;height:46px;border-radius:2px;letter-spacing:.5px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2);border-top:3px solid #bfd131c9}.fullwidth{width:100%}.c-pointer{cursor:pointer}.icon{font-size:var(--suku-font-size-8);color:#ccda5c!important}.add-icon{font-size:var(--suku-font-size-10);color:var(--suku-primary-color)}.add{font-family:var(--suku-primary-font);font-weight:800}.suku-i{border:2px solid;border-radius:28px 76px 63px;color:#3e3e3e;font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;padding:.55rem 2rem!important}.suku-i:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff!important;cursor:pointer}.suku-i:focus{outline:0!important}.suku.disabled:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:var(--suku-text-link);cursor:not-allowed}.suku-info{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-text-label-two);color:var(--suku-text-heading)}.suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color)!important;color:#fff!important}.suku-info:active{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.suku-info.disabled{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff!important;color:grey!important}.suku-info.disabled.focus,.suku-info.disabled:focus,.suku-info.disabled:hover,.suku-info[disabled].focus,.suku-info[disabled]:focus,.suku-info[disabled]:hover,fieldset[disabled] .suku-info.focus,fieldset[disabled] .suku-info:focus,fieldset[disabled] .suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:grey}.suku-info.focus,.suku-info:focus{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.open>.dropdown-toggle .suku-info.focus,.open>.dropdown-toggle .suku-info:focus,.open>.dropdown-toggle.suku-info:hover,.suku-info.active.focus,.suku-info.active:focus,.suku-info.active:hover,.suku-info:active.focus,.suku-info:active:focus,.suku-info:active:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.show>.suku-info.dropdown-toggle,.suku-info:not(:disabled):not(.disabled).active,.suku-info:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}.show>.suku-info.dropdown-toggle:focus,.suku-info.focus,.suku-info:focus,.suku-info:not(:disabled):not(.disabled).active:focus,.suku-info:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}.suku-default{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-bg-secondary);color:var(--suku-text-label-one)}.suku-default:active,.suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.suku-default.disabled{border:2px solid;border-color:var(--suku-text-info);background-color:#fff;color:grey}.suku-default.disabled.focus,.suku-default.disabled:focus,.suku-default.disabled:hover,.suku-default[disabled].focus,.suku-default[disabled]:focus,.suku-default[disabled]:hover,fieldset[disabled] .suku-default.focus,fieldset[disabled] .suku-default:focus,fieldset[disabled] .suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:#fff!important;color:grey}.suku-default.focus,.suku-default:focus{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.open>.dropdown-toggle .suku-default.focus,.open>.dropdown-toggle .suku-default:focus,.open>.dropdown-toggle.suku-default:hover,.suku-default.active.focus,.suku-default.active:focus,.suku-default.active:hover,.suku-default:active.focus,.suku-default:active:focus,.suku-default:active:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.show>.suku-default.dropdown-toggle,.suku-default:not(:disabled):not(.disabled).active,.suku-default:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-text-info);border-color:var(--suku-text-info)}.show>.suku-default.dropdown-toggle:focus,.suku-default.focus,.suku-default:focus,.suku-default:not(:disabled):not(.disabled).active:focus,.suku-default:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}.disabled:hover{cursor:not-allowed!important}"]
            }] }
];
/** @nocollapse */
SukuBeneficialOwnerComponent.ctorParameters = () => [
    { type: MatSnackBar }
];
SukuBeneficialOwnerComponent.propDecorators = {
    form: [{ type: Input }],
    title: [{ type: Input }],
    titleClass: [{ type: Input }],
    titleCustomClass: [{ type: Input }],
    titleid: [{ type: Input }],
    titleWeight: [{ type: Input }],
    titleColor: [{ type: Input }],
    titleSize: [{ type: Input }],
    countriesList: [{ type: Input }],
    statesList: [{ type: Input }],
    formValid: [{ type: Input }],
    control: [{ type: Input }],
    arrayControlName: [{ type: Input }],
    content: [{ type: Input }],
    type: [{ type: Input }],
    btnOne: [{ type: Input, args: ['btn-one',] }],
    btnOneId: [{ type: Input, args: ['btn-one-id',] }],
    btnOneCustomClass: [{ type: Input, args: ['btn-one-custom-class',] }],
    btnOneDisable: [{ type: Input, args: ['btn-one-disable',] }],
    btnTwo: [{ type: Input, args: ['btn-two',] }],
    btnTwoCustomClass: [{ type: Input, args: ['btn-two-custom-class',] }],
    btnTwoId: [{ type: Input, args: ['btn-two-id',] }],
    btnTwoDisable: [{ type: Input, args: ['btn-two-disable',] }],
    labelOne: [{ type: Input, args: ['label-one',] }],
    labelOneId: [{ type: Input, args: ['label-one-id',] }],
    countrySelect: [{ type: Output }],
    stateSelect: [{ type: Output }],
    upload: [{ type: Output }],
    submitOwner: [{ type: Output }],
    add: [{ type: Output }],
    submitData: [{ type: Output }],
    verify: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.form;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.title;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.titleClass;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.titleCustomClass;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.titleid;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.titleWeight;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.titleColor;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.titleSize;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.countriesList;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.statesList;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.formValid;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.control;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.arrayControlName;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.content;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.type;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.btnOne;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.btnOneId;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.btnOneCustomClass;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.btnOneDisable;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.btnTwo;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.btnTwoCustomClass;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.btnTwoId;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.btnTwoDisable;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.labelOne;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.labelOneId;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.countrySelect;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.stateSelect;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.upload;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.submitOwner;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.add;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.submitData;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.verify;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.selected;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.toggle;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.customClass;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.documentType;
    /** @type {?} */
    SukuBeneficialOwnerComponent.prototype.uploadType;
    /**
     * @type {?}
     * @private
     */
    SukuBeneficialOwnerComponent.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJlbmVmaWNpYWwtb3duZXIvc3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFpQixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU9oRCxNQUFNLE9BQU8sNEJBQTRCOzs7O0lBd0N4QyxZQUFvQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBdENoQyxVQUFLLEdBQUcsbUJBQW1CLENBQUM7UUFDNUIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUMxQixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUlmLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHdEIsWUFBTyxHQUFHO3NEQUMyQyxDQUFDO1FBQzdDLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDTCxXQUFNLEdBQUcseUJBQXlCLENBQUM7UUFDaEMsYUFBUSxHQUFHLHVCQUF1QixDQUFDO1FBQ3pCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUM1QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUN2QyxXQUFNLEdBQUcsa0JBQWtCLENBQUM7UUFDZixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDakMsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUNqQixrQkFBYSxHQUFZ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QyxpQkFBaUI7dUJBQ3ZCLEtBQUssU0FBQyxXQUFXO3lCQUNqQixLQUFLLFNBQUMsY0FBYzs0QkFDcEIsTUFBTTswQkFDTixNQUFNO3FCQUNOLE1BQU07MEJBQ04sTUFBTTtrQkFDTixNQUFNO3lCQUNOLE1BQU07cUJBQ04sTUFBTTs7OztJQWpDUCw0Q0FBeUI7O0lBQ3pCLDZDQUFxQzs7SUFDckMsa0RBQW1DOztJQUNuQyx3REFBK0I7O0lBQy9CLCtDQUFzQjs7SUFDdEIsbURBQTBCOztJQUMxQixrREFBeUI7O0lBQ3pCLGlEQUF3Qjs7SUFDeEIscURBQXVCOztJQUN2QixrREFBb0I7O0lBQ3BCLGlEQUE0Qjs7SUFDNUIsK0NBQXNCOztJQUN0Qix3REFBMEI7O0lBQzFCLCtDQUVzRDs7SUFDdEQsNENBQXVCOztJQUN2Qiw4Q0FBcUQ7O0lBQ3JELGdEQUF3RDs7SUFDeEQseURBQXNEOztJQUN0RCxxREFBeUQ7O0lBQ3pELDhDQUE4Qzs7SUFDOUMseURBQXNEOztJQUN0RCxnREFBMkM7O0lBQzNDLHFEQUF5RDs7SUFDekQsZ0RBQTBEOztJQUMxRCxrREFBK0M7O0lBQy9DLHFEQUE2Qzs7SUFDN0MsbURBQTJDOztJQUMzQyw4Q0FBc0M7O0lBQ3RDLG1EQUEyQzs7SUFDM0MsMkNBQW1DOztJQUNuQyxrREFBMEM7O0lBQzFDLDhDQUFzQzs7SUFDdEMsZ0RBQWM7O0lBQ2QsOENBQVk7O0lBQ1osbURBQVk7O0lBQ1osb0RBQWE7O0lBQ2Isa0RBQVc7Ozs7O0lBQ0MsZ0RBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEFmdGVyVmlld0luaXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3N1a3UtYmVuZWZpY2lhbC1vd25lcicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtYmVuZWZpY2lhbC1vd25lci5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VCZW5lZmljaWFsT3duZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcclxuXHRASW5wdXQoKSB0aXRsZSA9ICdCZW5lZmljaWFsIE93bmVycyc7XHJcblx0QElucHV0KCkgdGl0bGVDbGFzcyA9ICdtYi0zIG10LTUgJztcclxuXHRASW5wdXQoKSB0aXRsZUN1c3RvbUNsYXNzID0gJyc7XHJcblx0QElucHV0KCkgdGl0bGVpZCA9ICcnO1xyXG5cdEBJbnB1dCgpIHRpdGxlV2VpZ2h0ID0gJyc7XHJcblx0QElucHV0KCkgdGl0bGVDb2xvciA9ICcnO1xyXG5cdEBJbnB1dCgpIHRpdGxlU2l6ZSA9ICcnO1xyXG5cdEBJbnB1dCgpIGNvdW50cmllc0xpc3Q7XHJcblx0QElucHV0KCkgc3RhdGVzTGlzdDtcclxuXHRASW5wdXQoKSBmb3JtVmFsaWQ6IEJvb2xlYW47XHJcblx0QElucHV0KCkgY29udHJvbCA9ICcnO1xyXG5cdEBJbnB1dCgpIGFycmF5Q29udHJvbE5hbWU7XHJcblx0QElucHV0KClcclxuXHRjb250ZW50ID0gYEksIERhaXN5LCBoZXJlYnkgY2VydGlmeSwgdG8gdGhlIGJlc3Qgb2YgbXkga25vd2xlZGdlLCB0aGF0IHRoZVxyXG4gIGluZm9ybWF0aW9uIHByb3ZpZGVkIGFib3ZlIGlzIGNvbXBsZXRlIGFuZCBjb3JyZWN0LmA7XHJcblx0QElucHV0KCkgdHlwZSA9ICdpbmZvJztcclxuXHRASW5wdXQoJ2J0bi1vbmUnKSBidG5PbmUgPSAnU3VibWl0IEJlbmVmaWNpYWwgT3duZXInO1xyXG5cdEBJbnB1dCgnYnRuLW9uZS1pZCcpIGJ0bk9uZUlkID0gJ3N1Ym1pdEJlbmVmaWNpYWxPd25lcic7XHJcblx0QElucHV0KCdidG4tb25lLWN1c3RvbS1jbGFzcycpIGJ0bk9uZUN1c3RvbUNsYXNzID0gJyc7XHJcblx0QElucHV0KCdidG4tb25lLWRpc2FibGUnKSBidG5PbmVEaXNhYmxlOiBCb29sZWFuID0gZmFsc2U7XHJcblx0QElucHV0KCdidG4tdHdvJykgYnRuVHdvID0gJ0FncmVlICYgQ29udGludWUnO1xyXG5cdEBJbnB1dCgnYnRuLXR3by1jdXN0b20tY2xhc3MnKSBidG5Ud29DdXN0b21DbGFzcyA9ICcnO1xyXG5cdEBJbnB1dCgnYnRuLXR3by1pZCcpIGJ0blR3b0lkID0gJ2FncmVlQnRuJztcclxuXHRASW5wdXQoJ2J0bi10d28tZGlzYWJsZScpIGJ0blR3b0Rpc2FibGU6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHRASW5wdXQoJ2xhYmVsLW9uZScpIGxhYmVsT25lID0gJ0FkZCBOZXcgQmVuZWZpY2lhbCBPd25lcic7XHJcblx0QElucHV0KCdsYWJlbC1vbmUtaWQnKSBsYWJlbE9uZUlkID0gJ2FkZE93bmVyJztcclxuXHRAT3V0cHV0KCkgY291bnRyeVNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgc3RhdGVTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIHVwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgc3VibWl0T3duZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGFkZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgc3VibWl0RGF0YSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgdmVyaWZ5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdHNlbGVjdGVkID0gW107XHJcblx0dG9nZ2xlID0gW107XHJcblx0Y3VzdG9tQ2xhc3M7XHJcblx0ZG9jdW1lbnRUeXBlO1xyXG5cdHVwbG9hZFR5cGU7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuZm9ybVZhbGlkID0gdHJ1ZTtcclxuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5mb3JtLmdldCh0aGlzLmFycmF5Q29udHJvbE5hbWUpWydjb250cm9scyddLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdHRoaXMudG9nZ2xlW2pdID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHR0aGlzLnNlbGVjdGVkWzBdID0gMDtcclxuXHRcdHRoaXMudG9nZ2xlWzBdID0gdHJ1ZTtcclxuXHRcdHRoaXMuYnRuVHdvRGlzYWJsZSA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRhY3RpdmUoaSkge1xyXG5cdFx0dGhpcy5zZWxlY3RlZFtpXSA9IGk7XHJcblx0XHR0aGlzLnRvZ2dsZVtpXSA9ICF0aGlzLnRvZ2dsZVtpXTtcclxuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5mb3JtLmdldCh0aGlzLmFycmF5Q29udHJvbE5hbWUpWydjb250cm9scyddLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdGlmIChpICE9IGopIHtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkW2pdID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKCF0aGlzLnRvZ2dsZVtpXSkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkW2ldID0gbnVsbDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5mb3JtLmdldCh0aGlzLmFycmF5Q29udHJvbE5hbWUpWydjb250cm9scyddLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0aWYgKGkgIT0gaikge1xyXG5cdFx0XHRcdFx0dGhpcy50b2dnbGVbal0gPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFjdGlvbigpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2xOYW1lID0gdGhpcy5jb250cm9sO1xyXG5cdFx0aWYgKHRoaXMuZm9ybS5nZXQoY29udHJvbE5hbWUpLnZhbHVlKSB7XHJcblx0XHRcdHRoaXMuYnRuVHdvRGlzYWJsZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnZlcmlmeS5lbWl0KCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmJ0blR3b0Rpc2FibGUgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y291bnRyeVNlbGVjdEFjdGlvbih2YWwsIGkpIHtcclxuXHRcdGlmICh2YWwpIHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0XHRjb3VudHJ5RGV0YWlsczogSlNPTi5wYXJzZSh2YWwpLFxyXG5cdFx0XHRcdGluZGV4OiBpXHJcblx0XHRcdH07XHJcblx0XHRcdHRoaXMuY291bnRyeVNlbGVjdC5lbWl0KGRhdGEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YWdyZWUoKSB7XHJcblx0XHRjb25zdCBmb3JtRGF0YSA9IHRoaXMuZm9ybS52YWx1ZTtcclxuXHRcdHRoaXMuc3VibWl0T3duZXIuZW1pdChmb3JtRGF0YSk7XHJcblx0fVxyXG5cclxuXHRzbmFja2Jhcihtc2cpIHtcclxuXHRcdHRoaXMuc25hY2tCYXIub3Blbihtc2csICdjbG9zZScsIHtcclxuXHRcdFx0dmVydGljYWxQb3NpdGlvbjogJ2JvdHRvbScsXHJcblx0XHRcdGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0JyxcclxuXHRcdFx0ZHVyYXRpb246IDM1MDBcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=