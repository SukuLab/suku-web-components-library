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
                template: "<form [formGroup]=\"form\">\n  <div class=\"col\">\n    <label class=\"titleClass\">\n      <strong [style.font-size.px]=\"titleSize\" [class]=\"titleCustomClass\" id=\"{{titleid}}\"\n        [style.font-weight]=\"titleWeight\" [style.color]=\"titleColor\">{{title}}</strong>\n    </label>\n    <div class=\"col bg pl-5 pr-5 pt-5 pb-3 mb-5\">\n      <div class=\"col p-0\" formArrayName=\"{{arrayControlName}}\" id=\"beneficialOwnerBlock\">\n        <div class=\"col p-0\" *ngFor=\"let detail of form.get(arrayControlName)['controls']; let i=index\"\n          [formGroupName]=\"i\">\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\n            (click)=\"active(i)\">\n            <div class=\"row\">\n              <label class=\"m-2 pl-3 owner c-pointer\">\n                Beneficial Owner {{i+1}}\n              </label>\n              <label class=\"d-flex justify-content-end col pl-0 c-pointer\">\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\n                </span>\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\n                </span>\n              </label>\n            </div>\n          </div>\n          <div class=\"col mt-4 collapse\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\"\n            id=\"ownerBlock{{i}}\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"First Name\" id=\"firstname\" formControlName=\"firstName\" name=\"firstName\">\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Last Name\" id=\"lastname\" formControlName=\"lastName\" name=\"lastName\">\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field>\n                  <input matInput [matDatepicker]=\"myDatepicker\" id=\"dob\" placeholder=\"Date of birth\"\n                    formControlName=\"dateOfBirth\" name=\"dateOfBirth\">\n                  <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n                  <mat-datepicker #myDatepicker></mat-datepicker>\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"SSN\" id=\"ssn\" formControlName=\"ssn\" name=\"ssn\">\n                  <mat-hint>hint: 1234-12-123</mat-hint>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"col p-0\" formGroupName=\"address\">\n              <div class=\"col p-0\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Address 1\" id=\"address1\" formControlName=\"address1\" name=\"address1\">\n                </mat-form-field>\n              </div>\n              <div class=\"col p-0\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Address 2\" id=\"address2\" formControlName=\"address2\" name=\"address2\">\n                </mat-form-field>\n              </div>\n              <div class=\"col p-0\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <mat-select #t (selectionChange)=\"countrySelectAction(t.value,i)\" id=\"country\"\n                        formControlName=\"country\" name=\"country\" placeholder=\"country\">\n                        <mat-option value=\"\">Select Country</mat-option>\n                        <mat-option *ngFor=\"let item of countriesList; let i = index\" value=\"{{ item | json }}\">\n                          {{ item.countryName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <mat-select #s (selectionChange)=\"stateSelect.emit(s.value)\" formControlName=\"stateProvinceRegion\"\n                        id=\"stateProvinceRegion\" name=\"stateProvinceRegion\" placeholder=\"state\">\n                        <mat-option value=\"\">Select State</mat-option>\n                        <mat-option *ngFor=\"let item of statesList; let i = index\" value=\"{{ item.stateShortName  }}\">{{\n                          item.stateName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <input matInput placeholder=\"City\" id=\"city\" formControlName=\"city\" name=\"city\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <input matInput #postalcode maxlength=\"5\" placeholder=\"Postal Code\" id=\"postalCode\"\n                        formControlName=\"postalCode\" name=\"postalCode\">\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col mt-5 mb-3\">\n        <div class=\"row\">\n          <div class=\"col mt-3 mb-2\">\n            <span class=\"add d-flex c-pointer\" id=\"labelOneId\" (click)=\"add.emit()\">\n              <i class=\"fa fa-plus-circle pr-3 add-icon\"></i>\n              <span class=\"mt-1\">{{labelOne}}</span></span>\n          </div>\n          <div class=\"col d-flex justify-content-end  mt-3 mb-3 pr-sm-3 mr-sm-2\">\n            <button class=\"suku-i suku-{{type}} {{btnOneCustomClass}}\" [id]=\"btnOneId\"\n              [ngClass]=\"{'disabled': btnOneDisable}\" (click)=\"agree()\" [disabled]=\"btnOneDisable\">{{btnOne}}</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"col mt-5\">\n          <div class=\"row\">\n            <span class=\"pt-1\">\n              <mat-checkbox color=\"primary\" type=\"checkbox\" (change)=\"action()\" id=\"agree\" formControlName=\"{{control}}\"\n                name=\"{{control}}\">\n              </mat-checkbox>\n            </span>\n            <span class=\"col terms\" id=\"content\">{{content}}\n            </span>\n          </div>\n        </div>\n        <div class=\"col d-flex justify-content-center mt-4 mb-3\">\n          <button class=\"suku-i suku-{{type}} {{btnTwoCustomClass}}\" [id]=\"btnTwoId\"\n            [ngClass]=\"{'disabled': btnTwoDisable}\" (click)=\"submitData.emit()\"\n            [disabled]=\"btnTwoDisable\">{{btnTwo}}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}:root{font-size:17px!important}.bg{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.terms{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-5)}label{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-6);font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px}.owner{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-4);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px}.card-line{background-color:var(--suku-default-bg);color:#2c2727;height:46px;border-radius:2px;letter-spacing:.5px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2);border-top:3px solid #bfd131c9}.fullwidth{width:100%}.c-pointer{cursor:pointer}.icon{font-size:var(--suku-font-size-8);color:#ccda5c!important}.add-icon{font-size:var(--suku-font-size-10);color:var(--suku-primary-color)}.add{font-family:var(--suku-primary-font);font-weight:800}.suku-i{border:2px solid;border-radius:28px 76px 63px;color:#3e3e3e;font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;padding:.55rem 2rem!important}.suku-i:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff!important;cursor:pointer}.suku-i:focus{outline:0!important}.suku.disabled:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:var(--suku-text-link);cursor:not-allowed}.suku-info{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-text-label-two);color:var(--suku-text-heading)}.suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color)!important;color:#fff!important}.suku-info:active{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.suku-info.disabled{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff!important;color:grey!important}.suku-info.disabled.focus,.suku-info.disabled:focus,.suku-info.disabled:hover,.suku-info[disabled].focus,.suku-info[disabled]:focus,.suku-info[disabled]:hover,fieldset[disabled] .suku-info.focus,fieldset[disabled] .suku-info:focus,fieldset[disabled] .suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:grey}.suku-info.focus,.suku-info:focus{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.open>.dropdown-toggle .suku-info.focus,.open>.dropdown-toggle .suku-info:focus,.open>.dropdown-toggle.suku-info:hover,.suku-info.active.focus,.suku-info.active:focus,.suku-info.active:hover,.suku-info:active.focus,.suku-info:active:focus,.suku-info:active:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.show>.suku-info.dropdown-toggle,.suku-info:not(:disabled):not(.disabled).active,.suku-info:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}.show>.suku-info.dropdown-toggle:focus,.suku-info.focus,.suku-info:focus,.suku-info:not(:disabled):not(.disabled).active:focus,.suku-info:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}.suku-default{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-bg-secondary);color:var(--suku-text-label-one)}.suku-default:active,.suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.suku-default.disabled{border:2px solid;border-color:var(--suku-text-info);background-color:#fff;color:grey}.suku-default.disabled.focus,.suku-default.disabled:focus,.suku-default.disabled:hover,.suku-default[disabled].focus,.suku-default[disabled]:focus,.suku-default[disabled]:hover,fieldset[disabled] .suku-default.focus,fieldset[disabled] .suku-default:focus,fieldset[disabled] .suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:#fff!important;color:grey}.suku-default.focus,.suku-default:focus{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.open>.dropdown-toggle .suku-default.focus,.open>.dropdown-toggle .suku-default:focus,.open>.dropdown-toggle.suku-default:hover,.suku-default.active.focus,.suku-default.active:focus,.suku-default.active:hover,.suku-default:active.focus,.suku-default:active:focus,.suku-default:active:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.show>.suku-default.dropdown-toggle,.suku-default:not(:disabled):not(.disabled).active,.suku-default:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-text-info);border-color:var(--suku-text-info)}.show>.suku-default.dropdown-toggle:focus,.suku-default.focus,.suku-default:focus,.suku-default:not(:disabled):not(.disabled).active:focus,.suku-default:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}.disabled:hover{cursor:not-allowed!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJlbmVmaWNpYWwtb3duZXIvc3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFpQixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU9oRCxNQUFNLE9BQU8sNEJBQTRCOzs7O0lBd0N4QyxZQUFvQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBdENoQyxVQUFLLEdBQUcsbUJBQW1CLENBQUM7UUFDNUIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUMxQixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUlmLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHdEIsWUFBTyxHQUFHO3NEQUMyQyxDQUFDO1FBQzdDLFNBQUksR0FBRyxNQUFNLENBQUM7UUFDTCxXQUFNLEdBQUcseUJBQXlCLENBQUM7UUFDaEMsYUFBUSxHQUFHLHVCQUF1QixDQUFDO1FBQ3pCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUM1QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUN2QyxXQUFNLEdBQUcsa0JBQWtCLENBQUM7UUFDZixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDakMsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUNqQixrQkFBYSxHQUFZ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QyxpQkFBaUI7dUJBQ3ZCLEtBQUssU0FBQyxXQUFXO3lCQUNqQixLQUFLLFNBQUMsY0FBYzs0QkFDcEIsTUFBTTswQkFDTixNQUFNO3FCQUNOLE1BQU07MEJBQ04sTUFBTTtrQkFDTixNQUFNO3lCQUNOLE1BQU07cUJBQ04sTUFBTTs7OztJQWpDUCw0Q0FBeUI7O0lBQ3pCLDZDQUFxQzs7SUFDckMsa0RBQW1DOztJQUNuQyx3REFBK0I7O0lBQy9CLCtDQUFzQjs7SUFDdEIsbURBQTBCOztJQUMxQixrREFBeUI7O0lBQ3pCLGlEQUF3Qjs7SUFDeEIscURBQXVCOztJQUN2QixrREFBb0I7O0lBQ3BCLGlEQUE0Qjs7SUFDNUIsK0NBQXNCOztJQUN0Qix3REFBMEI7O0lBQzFCLCtDQUVzRDs7SUFDdEQsNENBQXVCOztJQUN2Qiw4Q0FBcUQ7O0lBQ3JELGdEQUF3RDs7SUFDeEQseURBQXNEOztJQUN0RCxxREFBeUQ7O0lBQ3pELDhDQUE4Qzs7SUFDOUMseURBQXNEOztJQUN0RCxnREFBMkM7O0lBQzNDLHFEQUF5RDs7SUFDekQsZ0RBQTBEOztJQUMxRCxrREFBK0M7O0lBQy9DLHFEQUE2Qzs7SUFDN0MsbURBQTJDOztJQUMzQyw4Q0FBc0M7O0lBQ3RDLG1EQUEyQzs7SUFDM0MsMkNBQW1DOztJQUNuQyxrREFBMEM7O0lBQzFDLDhDQUFzQzs7SUFDdEMsZ0RBQWM7O0lBQ2QsOENBQVk7O0lBQ1osbURBQVk7O0lBQ1osb0RBQWE7O0lBQ2Isa0RBQVc7Ozs7O0lBQ0MsZ0RBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEFmdGVyVmlld0luaXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnc3VrdS1iZW5lZmljaWFsLW93bmVyJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtYmVuZWZpY2lhbC1vd25lci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N1a3UtYmVuZWZpY2lhbC1vd25lci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VCZW5lZmljaWFsT3duZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG5cdEBJbnB1dCgpIHRpdGxlID0gJ0JlbmVmaWNpYWwgT3duZXJzJztcblx0QElucHV0KCkgdGl0bGVDbGFzcyA9ICdtYi0zIG10LTUgJztcblx0QElucHV0KCkgdGl0bGVDdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoKSB0aXRsZWlkID0gJyc7XG5cdEBJbnB1dCgpIHRpdGxlV2VpZ2h0ID0gJyc7XG5cdEBJbnB1dCgpIHRpdGxlQ29sb3IgPSAnJztcblx0QElucHV0KCkgdGl0bGVTaXplID0gJyc7XG5cdEBJbnB1dCgpIGNvdW50cmllc0xpc3Q7XG5cdEBJbnB1dCgpIHN0YXRlc0xpc3Q7XG5cdEBJbnB1dCgpIGZvcm1WYWxpZDogQm9vbGVhbjtcblx0QElucHV0KCkgY29udHJvbCA9ICcnO1xuXHRASW5wdXQoKSBhcnJheUNvbnRyb2xOYW1lO1xuXHRASW5wdXQoKVxuXHRjb250ZW50ID0gYEksIERhaXN5LCBoZXJlYnkgY2VydGlmeSwgdG8gdGhlIGJlc3Qgb2YgbXkga25vd2xlZGdlLCB0aGF0IHRoZVxuICBpbmZvcm1hdGlvbiBwcm92aWRlZCBhYm92ZSBpcyBjb21wbGV0ZSBhbmQgY29ycmVjdC5gO1xuXHRASW5wdXQoKSB0eXBlID0gJ2luZm8nO1xuXHRASW5wdXQoJ2J0bi1vbmUnKSBidG5PbmUgPSAnU3VibWl0IEJlbmVmaWNpYWwgT3duZXInO1xuXHRASW5wdXQoJ2J0bi1vbmUtaWQnKSBidG5PbmVJZCA9ICdzdWJtaXRCZW5lZmljaWFsT3duZXInO1xuXHRASW5wdXQoJ2J0bi1vbmUtY3VzdG9tLWNsYXNzJykgYnRuT25lQ3VzdG9tQ2xhc3MgPSAnJztcblx0QElucHV0KCdidG4tb25lLWRpc2FibGUnKSBidG5PbmVEaXNhYmxlOiBCb29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgnYnRuLXR3bycpIGJ0blR3byA9ICdBZ3JlZSAmIENvbnRpbnVlJztcblx0QElucHV0KCdidG4tdHdvLWN1c3RvbS1jbGFzcycpIGJ0blR3b0N1c3RvbUNsYXNzID0gJyc7XG5cdEBJbnB1dCgnYnRuLXR3by1pZCcpIGJ0blR3b0lkID0gJ2FncmVlQnRuJztcblx0QElucHV0KCdidG4tdHdvLWRpc2FibGUnKSBidG5Ud29EaXNhYmxlOiBCb29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgnbGFiZWwtb25lJykgbGFiZWxPbmUgPSAnQWRkIE5ldyBCZW5lZmljaWFsIE93bmVyJztcblx0QElucHV0KCdsYWJlbC1vbmUtaWQnKSBsYWJlbE9uZUlkID0gJ2FkZE93bmVyJztcblx0QE91dHB1dCgpIGNvdW50cnlTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBzdGF0ZVNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHVwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHN1Ym1pdE93bmVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgYWRkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgc3VibWl0RGF0YSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHZlcmlmeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0c2VsZWN0ZWQgPSBbXTtcblx0dG9nZ2xlID0gW107XG5cdGN1c3RvbUNsYXNzO1xuXHRkb2N1bWVudFR5cGU7XG5cdHVwbG9hZFR5cGU7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmZvcm1WYWxpZCA9IHRydWU7XG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmZvcm0uZ2V0KHRoaXMuYXJyYXlDb250cm9sTmFtZSlbJ2NvbnRyb2xzJ10ubGVuZ3RoOyBqKyspIHtcblx0XHRcdHRoaXMudG9nZ2xlW2pdID0gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMuc2VsZWN0ZWRbMF0gPSAwO1xuXHRcdHRoaXMudG9nZ2xlWzBdID0gdHJ1ZTtcblx0XHR0aGlzLmJ0blR3b0Rpc2FibGUgPSB0cnVlO1xuXHR9XG5cblx0YWN0aXZlKGkpIHtcblx0XHR0aGlzLnNlbGVjdGVkW2ldID0gaTtcblx0XHR0aGlzLnRvZ2dsZVtpXSA9ICF0aGlzLnRvZ2dsZVtpXTtcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZm9ybS5nZXQodGhpcy5hcnJheUNvbnRyb2xOYW1lKVsnY29udHJvbHMnXS5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKGkgIT0gaikge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkW2pdID0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCF0aGlzLnRvZ2dsZVtpXSkge1xuXHRcdFx0dGhpcy5zZWxlY3RlZFtpXSA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5mb3JtLmdldCh0aGlzLmFycmF5Q29udHJvbE5hbWUpWydjb250cm9scyddLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGlmIChpICE9IGopIHtcblx0XHRcdFx0XHR0aGlzLnRvZ2dsZVtqXSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0YWN0aW9uKCkge1xuXHRcdGNvbnN0IGNvbnRyb2xOYW1lID0gdGhpcy5jb250cm9sO1xuXHRcdGlmICh0aGlzLmZvcm0uZ2V0KGNvbnRyb2xOYW1lKS52YWx1ZSkge1xuXHRcdFx0dGhpcy5idG5Ud29EaXNhYmxlID0gZmFsc2U7XG5cdFx0XHR0aGlzLnZlcmlmeS5lbWl0KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYnRuVHdvRGlzYWJsZSA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0Y291bnRyeVNlbGVjdEFjdGlvbih2YWwsIGkpIHtcblx0XHRpZiAodmFsKSB7XG5cdFx0XHRjb25zdCBkYXRhID0ge1xuXHRcdFx0XHRjb3VudHJ5RGV0YWlsczogSlNPTi5wYXJzZSh2YWwpLFxuXHRcdFx0XHRpbmRleDogaVxuXHRcdFx0fTtcblx0XHRcdHRoaXMuY291bnRyeVNlbGVjdC5lbWl0KGRhdGEpO1xuXHRcdH1cblx0fVxuXG5cdGFncmVlKCkge1xuXHRcdGNvbnN0IGZvcm1EYXRhID0gdGhpcy5mb3JtLnZhbHVlO1xuXHRcdHRoaXMuc3VibWl0T3duZXIuZW1pdChmb3JtRGF0YSk7XG5cdH1cblxuXHRzbmFja2Jhcihtc2cpIHtcblx0XHR0aGlzLnNuYWNrQmFyLm9wZW4obXNnLCAnY2xvc2UnLCB7XG5cdFx0XHR2ZXJ0aWNhbFBvc2l0aW9uOiAnYm90dG9tJyxcblx0XHRcdGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0Jyxcblx0XHRcdGR1cmF0aW9uOiAzNTAwXG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==