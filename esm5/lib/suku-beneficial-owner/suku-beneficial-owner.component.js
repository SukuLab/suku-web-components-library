/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
var SukuBeneficialOwnerComponent = /** @class */ (function () {
    function SukuBeneficialOwnerComponent(snackBar) {
        this.snackBar = snackBar;
        this.title = 'Beneficial Owners';
        this.titleClass = 'mb-3 mt-5 ';
        this.titleCustomClass = '';
        this.titleid = '';
        this.titleWeight = '';
        this.titleColor = '';
        this.titleSize = '';
        this.control = '';
        this.content = "I, Daisy, hereby certify, to the best of my knowledge, that the\n  information provided above is complete and correct.";
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
    SukuBeneficialOwnerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.formValid = true;
        for (var j = 0; j < this.form.get(this.arrayControlName)['controls'].length; j++) {
            this.toggle[j] = false;
        }
        this.selected[0] = 0;
        this.toggle[0] = true;
        this.btnTwoDisable = true;
    };
    /**
     * @param {?} i
     * @return {?}
     */
    SukuBeneficialOwnerComponent.prototype.active = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.selected[i] = i;
        this.toggle[i] = !this.toggle[i];
        for (var j = 0; j < this.form.get(this.arrayControlName)['controls'].length; j++) {
            if (i != j) {
                this.selected[j] = null;
            }
        }
        if (!this.toggle[i]) {
            this.selected[i] = null;
        }
        else {
            for (var j = 0; j < this.form.get(this.arrayControlName)['controls'].length; j++) {
                if (i != j) {
                    this.toggle[j] = false;
                }
            }
        }
    };
    /**
     * @return {?}
     */
    SukuBeneficialOwnerComponent.prototype.action = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var controlName = this.control;
        if (this.form.get(controlName).value) {
            this.btnTwoDisable = false;
            this.verify.emit();
        }
        else {
            this.btnTwoDisable = true;
        }
    };
    /**
     * @param {?} val
     * @param {?} i
     * @return {?}
     */
    SukuBeneficialOwnerComponent.prototype.countrySelectAction = /**
     * @param {?} val
     * @param {?} i
     * @return {?}
     */
    function (val, i) {
        if (val) {
            /** @type {?} */
            var data = {
                countryDetails: JSON.parse(val),
                index: i
            };
            this.countrySelect.emit(data);
        }
    };
    /**
     * @return {?}
     */
    SukuBeneficialOwnerComponent.prototype.agree = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var formData = this.form.value;
        this.submitOwner.emit(formData);
    };
    /**
     * @param {?} msg
     * @return {?}
     */
    SukuBeneficialOwnerComponent.prototype.snackbar = /**
     * @param {?} msg
     * @return {?}
     */
    function (msg) {
        this.snackBar.open(msg, 'close', {
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            duration: 3500
        });
    };
    SukuBeneficialOwnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-beneficial-owner',
                    template: "<form [formGroup]=\"form\">\r\n  <div class=\"col\">\r\n    <label class=\"titleClass\">\r\n      <strong [style.font-size.px]=\"titleSize\" [class]=\"titleCustomClass\" id=\"{{titleid}}\"\r\n        [style.font-weight]=\"titleWeight\" [style.color]=\"titleColor\">{{title}}</strong>\r\n    </label>\r\n    <div class=\"col bg pl-5 pr-5 pt-5 pb-3 mb-5\">\r\n      <div class=\"col p-0\" formArrayName=\"{{arrayControlName}}\" id=\"beneficialOwnerBlock\">\r\n        <div class=\"col p-0\" *ngFor=\"let detail of form.get(arrayControlName)['controls']; let i=index\"\r\n          [formGroupName]=\"i\">\r\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\r\n            (click)=\"active(i)\">\r\n            <div class=\"row\">\r\n              <label class=\"m-2 pl-3 owner c-pointer\">\r\n                Beneficial Owner {{i+1}}\r\n              </label>\r\n              <label class=\"d-flex justify-content-end col pl-0 c-pointer\">\r\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\r\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\r\n                </span>\r\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\r\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\r\n                </span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col mt-4 collapse\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\"\r\n            id=\"ownerBlock{{i}}\">\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <mat-form-field class=\"fullwidth\">\r\n                  <input matInput placeholder=\"First Name\" id=\"firstname\" formControlName=\"firstName\" name=\"firstName\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col\">\r\n                <mat-form-field class=\"fullwidth\">\r\n                  <input matInput placeholder=\"Last Name\" id=\"lastname\" formControlName=\"lastName\" name=\"lastName\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col\">\r\n                <mat-form-field>\r\n                  <input matInput [matDatepicker]=\"myDatepicker\" id=\"dob\" placeholder=\"Date of birth\"\r\n                    formControlName=\"dateOfBirth\" name=\"dateOfBirth\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #myDatepicker></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col\">\r\n                <mat-form-field class=\"fullwidth\">\r\n                  <input matInput placeholder=\"SSN\" id=\"ssn\" formControlName=\"ssn\" name=\"ssn\">\r\n                  <mat-hint>hint: 1234-12-123</mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"col p-0\" formGroupName=\"address\">\r\n              <div class=\"col p-0\">\r\n                <mat-form-field class=\"fullwidth\">\r\n                  <input matInput placeholder=\"Address 1\" id=\"address1\" formControlName=\"address1\" name=\"address1\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col p-0\">\r\n                <mat-form-field class=\"fullwidth\">\r\n                  <input matInput placeholder=\"Address 2\" id=\"address2\" formControlName=\"address2\" name=\"address2\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col p-0\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <mat-form-field class=\"fullwidth\">\r\n                      <mat-select #t (selectionChange)=\"countrySelectAction(t.value,i)\" id=\"country\"\r\n                        formControlName=\"country\" name=\"country\" placeholder=\"country\">\r\n                        <mat-option value=\"\">Select Country</mat-option>\r\n                        <mat-option *ngFor=\"let item of countriesList; let i = index\" value=\"{{ item | json }}\">\r\n                          {{ item.countryName }}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <mat-form-field class=\"fullwidth\">\r\n                      <mat-select #s (selectionChange)=\"stateSelect.emit(s.value)\" formControlName=\"stateProvinceRegion\"\r\n                        id=\"stateProvinceRegion\" name=\"stateProvinceRegion\" placeholder=\"state\">\r\n                        <mat-option value=\"\">Select State</mat-option>\r\n                        <mat-option *ngFor=\"let item of statesList; let i = index\" value=\"{{ item.stateShortName  }}\">{{\r\n                          item.stateName }}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <mat-form-field class=\"fullwidth\">\r\n                      <input matInput placeholder=\"City\" id=\"city\" formControlName=\"city\" name=\"city\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <mat-form-field class=\"fullwidth\">\r\n                      <input matInput #postalcode maxlength=\"5\" placeholder=\"Postal Code\" id=\"postalCode\"\r\n                        formControlName=\"postalCode\" name=\"postalCode\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col mt-5 mb-3\">\r\n        <div class=\"row\">\r\n          <div class=\"col mt-3 mb-2\">\r\n            <span class=\"add d-flex c-pointer\" id=\"labelOneId\" (click)=\"add.emit()\">\r\n              <i class=\"fa fa-plus-circle pr-3 add-icon\"></i>\r\n              <span class=\"mt-1\">{{labelOne}}</span></span>\r\n          </div>\r\n          <div class=\"col d-flex justify-content-end  mt-3 mb-3 pr-sm-3 mr-sm-2\">\r\n            <button class=\"suku-i suku-{{type}} {{btnOneCustomClass}}\" [id]=\"btnOneId\"\r\n              [ngClass]=\"{'disabled': btnOneDisable}\" (click)=\"agree()\" [disabled]=\"btnOneDisable\">{{btnOne}}</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"col mt-5\">\r\n          <div class=\"row\">\r\n            <span class=\"pt-1\">\r\n              <mat-checkbox color=\"primary\" type=\"checkbox\" (change)=\"action()\" id=\"agree\" formControlName=\"{{control}}\"\r\n                name=\"{{control}}\">\r\n              </mat-checkbox>\r\n            </span>\r\n            <span class=\"col terms\" id=\"content\">{{content}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col d-flex justify-content-center mt-4 mb-3\">\r\n          <button class=\"suku-i suku-{{type}} {{btnTwoCustomClass}}\" [id]=\"btnTwoId\"\r\n            [ngClass]=\"{'disabled': btnTwoDisable}\" (click)=\"submitData.emit()\"\r\n            [disabled]=\"btnTwoDisable\">{{btnTwo}}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px;font-size:17px!important}.bg{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.terms{font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-5)}label{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-6);font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px}.owner{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-4);font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px}.card-line{background-color:var(--suku-default-bg);color:#2c2727;height:46px;border-radius:2px;letter-spacing:.5px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2);border-top:3px solid #bfd131c9}.fullwidth{width:100%}.c-pointer{cursor:pointer}.icon{font-size:var(--suku-font-size-8);color:#ccda5c!important}.add-icon{font-size:var(--suku-font-size-10);color:var(--suku-primary-color)}.add{font-family:var(--suku-primary-font);font-weight:800}.suku-i{border:2px solid;border-radius:28px 76px 63px;color:#3e3e3e;font-family:var(--suku-secondary-font);font-size:var(--suku-font-size-3);font-weight:600;padding:.55rem 2rem!important}.suku-i:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff!important;cursor:pointer}.suku-i:focus{outline:0!important}.suku.disabled:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:var(--suku-text-link);cursor:not-allowed}.suku-info{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-text-label-two);color:var(--suku-text-heading)}.suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color)!important;color:#fff!important}.suku-info:active{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.suku-info.disabled{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff!important;color:grey!important}.suku-info.disabled.focus,.suku-info.disabled:focus,.suku-info.disabled:hover,.suku-info[disabled].focus,.suku-info[disabled]:focus,.suku-info[disabled]:hover,fieldset[disabled] .suku-info.focus,fieldset[disabled] .suku-info:focus,fieldset[disabled] .suku-info:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:grey}.suku-info.focus,.suku-info:focus{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.open>.dropdown-toggle .suku-info.focus,.open>.dropdown-toggle .suku-info:focus,.open>.dropdown-toggle.suku-info:hover,.suku-info.active.focus,.suku-info.active:focus,.suku-info.active:hover,.suku-info:active.focus,.suku-info:active:focus,.suku-info:active:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:#fff}.show>.suku-info.dropdown-toggle,.suku-info:not(:disabled):not(.disabled).active,.suku-info:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-primary-color);border-color:var(--suku-primary-color)}.show>.suku-info.dropdown-toggle:focus,.suku-info.focus,.suku-info:focus,.suku-info:not(:disabled):not(.disabled).active:focus,.suku-info:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}.suku-default{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-bg-secondary);color:var(--suku-text-label-one)}.suku-default:active,.suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.suku-default.disabled{border:2px solid;border-color:var(--suku-text-info);background-color:#fff;color:grey}.suku-default.disabled.focus,.suku-default.disabled:focus,.suku-default.disabled:hover,.suku-default[disabled].focus,.suku-default[disabled]:focus,.suku-default[disabled]:hover,fieldset[disabled] .suku-default.focus,fieldset[disabled] .suku-default:focus,fieldset[disabled] .suku-default:hover{border:2px solid;border-color:var(--suku-text-info);background-color:#fff!important;color:grey}.suku-default.focus,.suku-default:focus{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.open>.dropdown-toggle .suku-default.focus,.open>.dropdown-toggle .suku-default:focus,.open>.dropdown-toggle.suku-default:hover,.suku-default.active.focus,.suku-default.active:focus,.suku-default.active:hover,.suku-default:active.focus,.suku-default:active:focus,.suku-default:active:hover{border:2px solid;border-color:var(--suku-text-info);background-color:var(--suku-text-info);color:#fff}.show>.suku-default.dropdown-toggle,.suku-default:not(:disabled):not(.disabled).active,.suku-default:not(:disabled):not(.disabled):active{color:#fff;background-color:var(--suku-text-info);border-color:var(--suku-text-info)}.show>.suku-default.dropdown-toggle:focus,.suku-default.focus,.suku-default:focus,.suku-default:not(:disabled):not(.disabled).active:focus,.suku-default:not(:disabled):not(.disabled):active:focus{box-shadow:none!important}.disabled:hover{cursor:not-allowed!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuBeneficialOwnerComponent.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
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
    return SukuBeneficialOwnerComponent;
}());
export { SukuBeneficialOwnerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJlbmVmaWNpYWwtb3duZXIvc3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFpQixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRDtJQTZDQyxzQ0FBb0IsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQXRDaEMsVUFBSyxHQUFHLG1CQUFtQixDQUFDO1FBQzVCLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFDMUIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFJZixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBR3RCLFlBQU8sR0FBRyx3SEFDMkMsQ0FBQztRQUM3QyxTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ0wsV0FBTSxHQUFHLHlCQUF5QixDQUFDO1FBQ2hDLGFBQVEsR0FBRyx1QkFBdUIsQ0FBQztRQUN6QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUIsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDdkMsV0FBTSxHQUFHLGtCQUFrQixDQUFDO1FBQ2Ysc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDakIsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDckMsYUFB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QUM1QixLQUFLLFNBQUMsWUFBWTtnQ0FDbEIsS0FBSyxTQUFDLGlCQUFpQjsyQkFDdkIsS0FBSyxTQUFDLFdBQVc7NkJBQ2pCLEtBQUssU0FBQyxjQUFjO2dDQUNwQixNQUFNOzhCQUNOLE1BQU07eUJBQ04sTUFBTTs4QkFDTixNQUFNO3NCQUNOLE1BQU07NkJBQ04sTUFBTTt5QkFDTixNQUFNOztJQXFFUixtQ0FBQztDQUFBLEFBNUdELElBNEdDO1NBdkdZLDRCQUE0Qjs7O0lBQ3hDLDRDQUF5Qjs7SUFDekIsNkNBQXFDOztJQUNyQyxrREFBbUM7O0lBQ25DLHdEQUErQjs7SUFDL0IsK0NBQXNCOztJQUN0QixtREFBMEI7O0lBQzFCLGtEQUF5Qjs7SUFDekIsaURBQXdCOztJQUN4QixxREFBdUI7O0lBQ3ZCLGtEQUFvQjs7SUFDcEIsaURBQTRCOztJQUM1QiwrQ0FBc0I7O0lBQ3RCLHdEQUEwQjs7SUFDMUIsK0NBRXNEOztJQUN0RCw0Q0FBdUI7O0lBQ3ZCLDhDQUFxRDs7SUFDckQsZ0RBQXdEOztJQUN4RCx5REFBc0Q7O0lBQ3RELHFEQUF5RDs7SUFDekQsOENBQThDOztJQUM5Qyx5REFBc0Q7O0lBQ3RELGdEQUEyQzs7SUFDM0MscURBQXlEOztJQUN6RCxnREFBMEQ7O0lBQzFELGtEQUErQzs7SUFDL0MscURBQTZDOztJQUM3QyxtREFBMkM7O0lBQzNDLDhDQUFzQzs7SUFDdEMsbURBQTJDOztJQUMzQywyQ0FBbUM7O0lBQ25DLGtEQUEwQzs7SUFDMUMsOENBQXNDOztJQUN0QyxnREFBYzs7SUFDZCw4Q0FBWTs7SUFDWixtREFBWTs7SUFDWixvREFBYTs7SUFDYixrREFBVzs7Ozs7SUFDQyxnREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgQWZ0ZXJWaWV3SW5pdCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3VrdS1iZW5lZmljaWFsLW93bmVyJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LWJlbmVmaWNpYWwtb3duZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUJlbmVmaWNpYWxPd25lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIHRpdGxlID0gJ0JlbmVmaWNpYWwgT3duZXJzJztcclxuXHRASW5wdXQoKSB0aXRsZUNsYXNzID0gJ21iLTMgbXQtNSAnO1xyXG5cdEBJbnB1dCgpIHRpdGxlQ3VzdG9tQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoKSB0aXRsZWlkID0gJyc7XHJcblx0QElucHV0KCkgdGl0bGVXZWlnaHQgPSAnJztcclxuXHRASW5wdXQoKSB0aXRsZUNvbG9yID0gJyc7XHJcblx0QElucHV0KCkgdGl0bGVTaXplID0gJyc7XHJcblx0QElucHV0KCkgY291bnRyaWVzTGlzdDtcclxuXHRASW5wdXQoKSBzdGF0ZXNMaXN0O1xyXG5cdEBJbnB1dCgpIGZvcm1WYWxpZDogQm9vbGVhbjtcclxuXHRASW5wdXQoKSBjb250cm9sID0gJyc7XHJcblx0QElucHV0KCkgYXJyYXlDb250cm9sTmFtZTtcclxuXHRASW5wdXQoKVxyXG5cdGNvbnRlbnQgPSBgSSwgRGFpc3ksIGhlcmVieSBjZXJ0aWZ5LCB0byB0aGUgYmVzdCBvZiBteSBrbm93bGVkZ2UsIHRoYXQgdGhlXHJcbiAgaW5mb3JtYXRpb24gcHJvdmlkZWQgYWJvdmUgaXMgY29tcGxldGUgYW5kIGNvcnJlY3QuYDtcclxuXHRASW5wdXQoKSB0eXBlID0gJ2luZm8nO1xyXG5cdEBJbnB1dCgnYnRuLW9uZScpIGJ0bk9uZSA9ICdTdWJtaXQgQmVuZWZpY2lhbCBPd25lcic7XHJcblx0QElucHV0KCdidG4tb25lLWlkJykgYnRuT25lSWQgPSAnc3VibWl0QmVuZWZpY2lhbE93bmVyJztcclxuXHRASW5wdXQoJ2J0bi1vbmUtY3VzdG9tLWNsYXNzJykgYnRuT25lQ3VzdG9tQ2xhc3MgPSAnJztcclxuXHRASW5wdXQoJ2J0bi1vbmUtZGlzYWJsZScpIGJ0bk9uZURpc2FibGU6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHRASW5wdXQoJ2J0bi10d28nKSBidG5Ud28gPSAnQWdyZWUgJiBDb250aW51ZSc7XHJcblx0QElucHV0KCdidG4tdHdvLWN1c3RvbS1jbGFzcycpIGJ0blR3b0N1c3RvbUNsYXNzID0gJyc7XHJcblx0QElucHV0KCdidG4tdHdvLWlkJykgYnRuVHdvSWQgPSAnYWdyZWVCdG4nO1xyXG5cdEBJbnB1dCgnYnRuLXR3by1kaXNhYmxlJykgYnRuVHdvRGlzYWJsZTogQm9vbGVhbiA9IGZhbHNlO1xyXG5cdEBJbnB1dCgnbGFiZWwtb25lJykgbGFiZWxPbmUgPSAnQWRkIE5ldyBCZW5lZmljaWFsIE93bmVyJztcclxuXHRASW5wdXQoJ2xhYmVsLW9uZS1pZCcpIGxhYmVsT25lSWQgPSAnYWRkT3duZXInO1xyXG5cdEBPdXRwdXQoKSBjb3VudHJ5U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBzdGF0ZVNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgdXBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBzdWJtaXRPd25lciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgYWRkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBzdWJtaXREYXRhID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSB2ZXJpZnkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0c2VsZWN0ZWQgPSBbXTtcclxuXHR0b2dnbGUgPSBbXTtcclxuXHRjdXN0b21DbGFzcztcclxuXHRkb2N1bWVudFR5cGU7XHJcblx0dXBsb2FkVHlwZTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhcikgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5mb3JtVmFsaWQgPSB0cnVlO1xyXG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmZvcm0uZ2V0KHRoaXMuYXJyYXlDb250cm9sTmFtZSlbJ2NvbnRyb2xzJ10ubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0dGhpcy50b2dnbGVbal0gPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHRoaXMuc2VsZWN0ZWRbMF0gPSAwO1xyXG5cdFx0dGhpcy50b2dnbGVbMF0gPSB0cnVlO1xyXG5cdFx0dGhpcy5idG5Ud29EaXNhYmxlID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGFjdGl2ZShpKSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkW2ldID0gaTtcclxuXHRcdHRoaXMudG9nZ2xlW2ldID0gIXRoaXMudG9nZ2xlW2ldO1xyXG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmZvcm0uZ2V0KHRoaXMuYXJyYXlDb250cm9sTmFtZSlbJ2NvbnRyb2xzJ10ubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0aWYgKGkgIT0gaikge1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRbal0gPSBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoIXRoaXMudG9nZ2xlW2ldKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRbaV0gPSBudWxsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmZvcm0uZ2V0KHRoaXMuYXJyYXlDb250cm9sTmFtZSlbJ2NvbnRyb2xzJ10ubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRpZiAoaSAhPSBqKSB7XHJcblx0XHRcdFx0XHR0aGlzLnRvZ2dsZVtqXSA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YWN0aW9uKCkge1xyXG5cdFx0Y29uc3QgY29udHJvbE5hbWUgPSB0aGlzLmNvbnRyb2w7XHJcblx0XHRpZiAodGhpcy5mb3JtLmdldChjb250cm9sTmFtZSkudmFsdWUpIHtcclxuXHRcdFx0dGhpcy5idG5Ud29EaXNhYmxlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMudmVyaWZ5LmVtaXQoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuYnRuVHdvRGlzYWJsZSA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb3VudHJ5U2VsZWN0QWN0aW9uKHZhbCwgaSkge1xyXG5cdFx0aWYgKHZhbCkge1xyXG5cdFx0XHRjb25zdCBkYXRhID0ge1xyXG5cdFx0XHRcdGNvdW50cnlEZXRhaWxzOiBKU09OLnBhcnNlKHZhbCksXHJcblx0XHRcdFx0aW5kZXg6IGlcclxuXHRcdFx0fTtcclxuXHRcdFx0dGhpcy5jb3VudHJ5U2VsZWN0LmVtaXQoZGF0YSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhZ3JlZSgpIHtcclxuXHRcdGNvbnN0IGZvcm1EYXRhID0gdGhpcy5mb3JtLnZhbHVlO1xyXG5cdFx0dGhpcy5zdWJtaXRPd25lci5lbWl0KGZvcm1EYXRhKTtcclxuXHR9XHJcblxyXG5cdHNuYWNrYmFyKG1zZykge1xyXG5cdFx0dGhpcy5zbmFja0Jhci5vcGVuKG1zZywgJ2Nsb3NlJywge1xyXG5cdFx0XHR2ZXJ0aWNhbFBvc2l0aW9uOiAnYm90dG9tJyxcclxuXHRcdFx0aG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxyXG5cdFx0XHRkdXJhdGlvbjogMzUwMFxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiJdfQ==