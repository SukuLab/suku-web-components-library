/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-beneficial-owner/suku-beneficial-owner.component.ts
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
                template: "<form [formGroup]=\"form\">\n  <div class=\"col\">\n    <label class=\"titleClass\">\n      <strong [style.font-size.px]=\"titleSize\" [class]=\"titleCustomClass\" id=\"{{titleid}}\"\n        [style.font-weight]=\"titleWeight\" [style.color]=\"titleColor\">{{title}}</strong>\n    </label>\n    <div class=\"col bg pl-5 pr-5 pt-5 pb-3 mb-5\">\n      <div class=\"col p-0\" formArrayName=\"{{arrayControlName}}\" id=\"beneficialOwnerBlock\">\n        <div class=\"col p-0\" *ngFor=\"let detail of form.get(arrayControlName)['controls']; let i=index\"\n          [formGroupName]=\"i\">\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\n            (click)=\"active(i)\">\n            <div class=\"row\">\n              <label class=\"m-2 pl-3 owner c-pointer\">\n                Beneficial Owner {{i+1}}\n              </label>\n              <label class=\"d-flex justify-content-end col pl-0 c-pointer\">\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\n                </span>\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\n                </span>\n              </label>\n            </div>\n          </div>\n          <div class=\"col mt-4 collapse\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\"\n            id=\"ownerBlock{{i}}\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"First Name\" id=\"firstname\" formControlName=\"firstName\" name=\"firstName\">\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Last Name\" id=\"lastname\" formControlName=\"lastName\" name=\"lastName\">\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field>\n                  <input matInput [matDatepicker]=\"myDatepicker\" id=\"dob\" placeholder=\"Date of birth\"\n                    formControlName=\"dateOfBirth\" name=\"dateOfBirth\">\n                  <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n                  <mat-datepicker #myDatepicker></mat-datepicker>\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"SSN\" id=\"ssn\" formControlName=\"ssn\" name=\"ssn\">\n                  <mat-hint>hint: 1234-12-123</mat-hint>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"col p-0\" formGroupName=\"address\">\n              <div class=\"col p-0\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Address 1\" id=\"address1\" formControlName=\"address1\" name=\"address1\">\n                </mat-form-field>\n              </div>\n              <div class=\"col p-0\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Address 2\" id=\"address2\" formControlName=\"address2\" name=\"address2\">\n                </mat-form-field>\n              </div>\n              <div class=\"col p-0\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <mat-select #t (selectionChange)=\"countrySelectAction(t.value,i)\" id=\"country\"\n                        formControlName=\"country\" name=\"country\" placeholder=\"country\">\n                        <mat-option value=\"\">Select Country</mat-option>\n                        <mat-option *ngFor=\"let item of countriesList; let i = index\" value=\"{{ item | json }}\">\n                          {{ item.countryName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <mat-select #s (selectionChange)=\"stateSelect.emit(s.value)\" formControlName=\"stateProvinceRegion\"\n                        id=\"stateProvinceRegion\" name=\"stateProvinceRegion\" placeholder=\"state\">\n                        <mat-option value=\"\">Select State</mat-option>\n                        <mat-option *ngFor=\"let item of statesList; let i = index\" value=\"{{ item.stateShortName  }}\">{{\n                          item.stateName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <input matInput placeholder=\"City\" id=\"city\" formControlName=\"city\" name=\"city\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <input matInput #postalcode maxlength=\"5\" placeholder=\"Postal Code\" id=\"postalCode\"\n                        formControlName=\"postalCode\" name=\"postalCode\">\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col mt-5 mb-3\">\n        <div class=\"row\">\n          <div class=\"col mt-3 mb-2\">\n            <span class=\"add d-flex c-pointer\" id=\"labelOneId\" (click)=\"add.emit()\">\n              <i class=\"fa fa-plus-circle pr-3 add-icon\"></i>\n              <span class=\"mt-1\">{{labelOne}}</span></span>\n          </div>\n          <div class=\"col d-flex justify-content-end  mt-3 mb-3 pr-sm-3 mr-sm-2\">\n            <button class=\"suku-i suku-{{type}} {{btnOneCustomClass}}\" [id]=\"btnOneId\"\n              [ngClass]=\"{'disabled': btnOneDisable}\" (click)=\"agree()\" [disabled]=\"btnOneDisable\">{{btnOne}}</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"col mt-5\">\n          <div class=\"row\">\n            <span class=\"pt-1\">\n              <mat-checkbox color=\"primary\" type=\"checkbox\" (change)=\"action()\" id=\"agree\" formControlName=\"{{control}}\"\n                name=\"{{control}}\">\n              </mat-checkbox>\n            </span>\n            <span class=\"col terms\" id=\"content\">{{content}}\n            </span>\n          </div>\n        </div>\n        <div class=\"col d-flex justify-content-center mt-4 mb-3\">\n          <button class=\"suku-i suku-{{type}} {{btnTwoCustomClass}}\" [id]=\"btnTwoId\"\n            [ngClass]=\"{'disabled': btnTwoDisable}\" (click)=\"submitData.emit()\"\n            [disabled]=\"btnTwoDisable\">{{btnTwo}}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJlbmVmaWNpYWwtb3duZXIvc3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBaUIsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxTQUFTLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPaEQsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQXdDeEMsWUFBb0IsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQXRDaEMsVUFBSyxHQUFHLG1CQUFtQixDQUFDO1FBQzVCLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFDMUIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFJZixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBR3RCLFlBQU8sR0FBRztzREFDMkMsQ0FBQztRQUM3QyxTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ0wsV0FBTSxHQUFHLHlCQUF5QixDQUFDO1FBQ2hDLGFBQVEsR0FBRyx1QkFBdUIsQ0FBQztRQUN6QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUIsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDdkMsV0FBTSxHQUFHLGtCQUFrQixDQUFDO1FBQ2Ysc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDakIsa0JBQWEsR0FB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QUMsaUJBQWlCO3VCQUN2QixLQUFLLFNBQUMsV0FBVzt5QkFDakIsS0FBSyxTQUFDLGNBQWM7NEJBQ3BCLE1BQU07MEJBQ04sTUFBTTtxQkFDTixNQUFNOzBCQUNOLE1BQU07a0JBQ04sTUFBTTt5QkFDTixNQUFNO3FCQUNOLE1BQU07Ozs7SUFqQ1AsNENBQXlCOztJQUN6Qiw2Q0FBcUM7O0lBQ3JDLGtEQUFtQzs7SUFDbkMsd0RBQStCOztJQUMvQiwrQ0FBc0I7O0lBQ3RCLG1EQUEwQjs7SUFDMUIsa0RBQXlCOztJQUN6QixpREFBd0I7O0lBQ3hCLHFEQUF1Qjs7SUFDdkIsa0RBQW9COztJQUNwQixpREFBNEI7O0lBQzVCLCtDQUFzQjs7SUFDdEIsd0RBQTBCOztJQUMxQiwrQ0FFc0Q7O0lBQ3RELDRDQUF1Qjs7SUFDdkIsOENBQXFEOztJQUNyRCxnREFBd0Q7O0lBQ3hELHlEQUFzRDs7SUFDdEQscURBQXlEOztJQUN6RCw4Q0FBOEM7O0lBQzlDLHlEQUFzRDs7SUFDdEQsZ0RBQTJDOztJQUMzQyxxREFBeUQ7O0lBQ3pELGdEQUEwRDs7SUFDMUQsa0RBQStDOztJQUMvQyxxREFBNkM7O0lBQzdDLG1EQUEyQzs7SUFDM0MsOENBQXNDOztJQUN0QyxtREFBMkM7O0lBQzNDLDJDQUFtQzs7SUFDbkMsa0RBQTBDOztJQUMxQyw4Q0FBc0M7O0lBQ3RDLGdEQUFjOztJQUNkLDhDQUFZOztJQUNaLG1EQUFZOztJQUNaLG9EQUFhOztJQUNiLGtEQUFXOzs7OztJQUNDLGdEQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBBZnRlclZpZXdJbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtYmVuZWZpY2lhbC1vd25lcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWJlbmVmaWNpYWwtb3duZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LWJlbmVmaWNpYWwtb3duZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1QmVuZWZpY2lhbE93bmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuXHRASW5wdXQoKSB0aXRsZSA9ICdCZW5lZmljaWFsIE93bmVycyc7XG5cdEBJbnB1dCgpIHRpdGxlQ2xhc3MgPSAnbWItMyBtdC01ICc7XG5cdEBJbnB1dCgpIHRpdGxlQ3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCkgdGl0bGVpZCA9ICcnO1xuXHRASW5wdXQoKSB0aXRsZVdlaWdodCA9ICcnO1xuXHRASW5wdXQoKSB0aXRsZUNvbG9yID0gJyc7XG5cdEBJbnB1dCgpIHRpdGxlU2l6ZSA9ICcnO1xuXHRASW5wdXQoKSBjb3VudHJpZXNMaXN0O1xuXHRASW5wdXQoKSBzdGF0ZXNMaXN0O1xuXHRASW5wdXQoKSBmb3JtVmFsaWQ6IEJvb2xlYW47XG5cdEBJbnB1dCgpIGNvbnRyb2wgPSAnJztcblx0QElucHV0KCkgYXJyYXlDb250cm9sTmFtZTtcblx0QElucHV0KClcblx0Y29udGVudCA9IGBJLCBEYWlzeSwgaGVyZWJ5IGNlcnRpZnksIHRvIHRoZSBiZXN0IG9mIG15IGtub3dsZWRnZSwgdGhhdCB0aGVcbiAgaW5mb3JtYXRpb24gcHJvdmlkZWQgYWJvdmUgaXMgY29tcGxldGUgYW5kIGNvcnJlY3QuYDtcblx0QElucHV0KCkgdHlwZSA9ICdpbmZvJztcblx0QElucHV0KCdidG4tb25lJykgYnRuT25lID0gJ1N1Ym1pdCBCZW5lZmljaWFsIE93bmVyJztcblx0QElucHV0KCdidG4tb25lLWlkJykgYnRuT25lSWQgPSAnc3VibWl0QmVuZWZpY2lhbE93bmVyJztcblx0QElucHV0KCdidG4tb25lLWN1c3RvbS1jbGFzcycpIGJ0bk9uZUN1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgnYnRuLW9uZS1kaXNhYmxlJykgYnRuT25lRGlzYWJsZTogQm9vbGVhbiA9IGZhbHNlO1xuXHRASW5wdXQoJ2J0bi10d28nKSBidG5Ud28gPSAnQWdyZWUgJiBDb250aW51ZSc7XG5cdEBJbnB1dCgnYnRuLXR3by1jdXN0b20tY2xhc3MnKSBidG5Ud29DdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoJ2J0bi10d28taWQnKSBidG5Ud29JZCA9ICdhZ3JlZUJ0bic7XG5cdEBJbnB1dCgnYnRuLXR3by1kaXNhYmxlJykgYnRuVHdvRGlzYWJsZTogQm9vbGVhbiA9IGZhbHNlO1xuXHRASW5wdXQoJ2xhYmVsLW9uZScpIGxhYmVsT25lID0gJ0FkZCBOZXcgQmVuZWZpY2lhbCBPd25lcic7XG5cdEBJbnB1dCgnbGFiZWwtb25lLWlkJykgbGFiZWxPbmVJZCA9ICdhZGRPd25lcic7XG5cdEBPdXRwdXQoKSBjb3VudHJ5U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgc3RhdGVTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSB1cGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBzdWJtaXRPd25lciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIGFkZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHN1Ym1pdERhdGEgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSB2ZXJpZnkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHNlbGVjdGVkID0gW107XG5cdHRvZ2dsZSA9IFtdO1xuXHRjdXN0b21DbGFzcztcblx0ZG9jdW1lbnRUeXBlO1xuXHR1cGxvYWRUeXBlO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhcikgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5mb3JtVmFsaWQgPSB0cnVlO1xuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5mb3JtLmdldCh0aGlzLmFycmF5Q29udHJvbE5hbWUpWydjb250cm9scyddLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZVtqXSA9IGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnNlbGVjdGVkWzBdID0gMDtcblx0XHR0aGlzLnRvZ2dsZVswXSA9IHRydWU7XG5cdFx0dGhpcy5idG5Ud29EaXNhYmxlID0gdHJ1ZTtcblx0fVxuXG5cdGFjdGl2ZShpKSB7XG5cdFx0dGhpcy5zZWxlY3RlZFtpXSA9IGk7XG5cdFx0dGhpcy50b2dnbGVbaV0gPSAhdGhpcy50b2dnbGVbaV07XG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmZvcm0uZ2V0KHRoaXMuYXJyYXlDb250cm9sTmFtZSlbJ2NvbnRyb2xzJ10ubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmIChpICE9IGopIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFtqXSA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghdGhpcy50b2dnbGVbaV0pIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRbaV0gPSBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZm9ybS5nZXQodGhpcy5hcnJheUNvbnRyb2xOYW1lKVsnY29udHJvbHMnXS5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRpZiAoaSAhPSBqKSB7XG5cdFx0XHRcdFx0dGhpcy50b2dnbGVbal0gPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGFjdGlvbigpIHtcblx0XHRjb25zdCBjb250cm9sTmFtZSA9IHRoaXMuY29udHJvbDtcblx0XHRpZiAodGhpcy5mb3JtLmdldChjb250cm9sTmFtZSkudmFsdWUpIHtcblx0XHRcdHRoaXMuYnRuVHdvRGlzYWJsZSA9IGZhbHNlO1xuXHRcdFx0dGhpcy52ZXJpZnkuZW1pdCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmJ0blR3b0Rpc2FibGUgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdGNvdW50cnlTZWxlY3RBY3Rpb24odmFsLCBpKSB7XG5cdFx0aWYgKHZhbCkge1xuXHRcdFx0Y29uc3QgZGF0YSA9IHtcblx0XHRcdFx0Y291bnRyeURldGFpbHM6IEpTT04ucGFyc2UodmFsKSxcblx0XHRcdFx0aW5kZXg6IGlcblx0XHRcdH07XG5cdFx0XHR0aGlzLmNvdW50cnlTZWxlY3QuZW1pdChkYXRhKTtcblx0XHR9XG5cdH1cblxuXHRhZ3JlZSgpIHtcblx0XHRjb25zdCBmb3JtRGF0YSA9IHRoaXMuZm9ybS52YWx1ZTtcblx0XHR0aGlzLnN1Ym1pdE93bmVyLmVtaXQoZm9ybURhdGEpO1xuXHR9XG5cblx0c25hY2tiYXIobXNnKSB7XG5cdFx0dGhpcy5zbmFja0Jhci5vcGVuKG1zZywgJ2Nsb3NlJywge1xuXHRcdFx0dmVydGljYWxQb3NpdGlvbjogJ2JvdHRvbScsXG5cdFx0XHRob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXG5cdFx0XHRkdXJhdGlvbjogMzUwMFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=