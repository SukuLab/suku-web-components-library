/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.content = `I, Daisy, hereby certify, to the best of my knowledge, that the
  information provided above is complete and correct.`;
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
            this.formValid = false;
            this.verify.emit();
        }
        else {
            this.formValid = true;
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
     * @param {?} e
     * @return {?}
     */
    fileupload(e) {
        console.log(e);
        /** @type {?} */
        const files = e.target.files;
        /** @type {?} */
        const maxFileSize = 9999999;
        /** @type {?} */
        let currentFileSize;
        /** @type {?} */
        const file = e.target.files[0];
        currentFileSize = file.size;
        if (currentFileSize <= maxFileSize) {
            if (file.type == 'image/jpeg' ||
                file.type == 'application/pdf' ||
                file.type == 'image/png' ||
                file.type == 'image/jpg') {
                if (e.target.files && e.target.files.length > 0) {
                    for (let i = 0; i < e.target.files.length; i++) {
                        /** @type {?} */
                        const file = e.target.files[i];
                        /** @type {?} */
                        const docType = this.uploadType;
                        /** @type {?} */
                        const data = {
                            file: file,
                            documentType: docType
                        };
                        this.upload.emit(data);
                        currentFileSize = file.size;
                    }
                    e.target.value = '';
                }
            }
            else {
                this.snackbar('The file type jpg/jpeg/png files are allowed!');
            }
        }
        else {
            this.snackbar('The file size cannot exceed 10 MB');
        }
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
                template: "<form [formGroup]=\"form\">\n  <div class=\"col\">\n    <label class=\"titleClass\"><strong>{{title}}</strong></label>\n    <div class=\"col bg pl-5 pr-5 pt-5 pb-3 mb-5\">\n      <div class=\"col p-0\" formArrayName=\"{{arrayControlName}}\" id=\"beneficialOwnerBlock\">\n        <div class=\"col p-0\" *ngFor=\"let detail of form.get(arrayControlName)['controls']; let i=index\" [formGroupName]=\"i\">\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\n            (click)=\"active(i)\">\n            <div class=\"row\">\n              <label class=\"m-2 pl-3 owner c-pointer\">\n                Beneficial Owner {{i+1}}\n              </label>\n              <label class=\"d-flex justify-content-end col pl-0 c-pointer\">\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\n                </span>\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\n                </span>\n              </label>\n            </div>\n          </div>\n          <div class=\"col mt-4 collapse\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\" id=\"ownerBlock{{i}}\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"First Name\" id=\"firstname\" formControlName=\"firstName\" name=\"firstName\">\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Last Name\" id=\"lastname\" formControlName=\"lastName\" name=\"lastName\">\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field>\n                  <input matInput [matDatepicker]=\"myDatepicker\" id=\"dob\" placeholder=\"Date of birth\" formControlName=\"dateOfBirth\"\n                    name=\"dateOfBirth\">\n                  <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n                  <mat-datepicker #myDatepicker></mat-datepicker>\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"SSN\" id=\"ssn\" formControlName=\"ssn\" name=\"ssn\">\n                  <mat-hint>hint: 1234-12-123</mat-hint>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"col p-0\" formGroupName=\"address\">\n              <div class=\"col p-0\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Address 1\" id=\"address1\" formControlName=\"address1\" name=\"address1\">\n                </mat-form-field>\n              </div>\n              <div class=\"col p-0\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Address 2\" id=\"address2\" formControlName=\"address2\" name=\"address2\">\n                </mat-form-field>\n              </div>\n              <div class=\"col p-0\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <mat-select #t (selectionChange)=\"countrySelectAction(t.value,i)\" id=\"country\" formControlName=\"country\"\n                        name=\"country\" placeholder=\"country\">\n                        <mat-option value=\"\">Select Country</mat-option>\n                        <mat-option *ngFor=\"let item of countriesList; let i = index\" value=\"{{ item | json }}\">\n                          {{ item.countryName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <mat-select #s (selectionChange)=\"stateSelect.emit(s.value)\" formControlName=\"stateProvinceRegion\"\n                        id=\"stateProvinceRegion\" name=\"stateProvinceRegion\" placeholder=\"state\">\n                        <mat-option value=\"\">Select State</mat-option>\n                        <mat-option *ngFor=\"let item of statesList; let i = index\" value=\"{{ item.stateShortName  }}\">{{\n                          item.stateName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <input matInput placeholder=\"City\" id=\"city\" formControlName=\"city\" name=\"city\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <input matInput #postalcode maxlength=\"5\" placeholder=\"Postal Code\" id=\"postalCode\"\n                        formControlName=\"postalCode\" name=\"postalCode\">\n                    </mat-form-field>\n                  </div>\n                </div>\n\n                <!-- <div class=\"col p-3\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-8 p-0\">\n                      <label class=\"upload-doc-title\">\n                        <b>\n                          Upload a driver license or passport.\n                        </b>\n                      </label>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"col border-dot rounded-0 bg-light d-flex justify-content-center mt-3\">\n                        <span class=\"fa fa-cloud-upload mt-3 upload-icon display-2 text-muted\" *ngIf=\"true\">\n                        </span>\n                        <input type=\"file\" class=\"upload\" name=\"document\" formControlName=\"document\" (change)=\"fileupload($event)\" />\n                      </div>\n                    </div>\n                  </div>\n                </div> -->\n\n                \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col mt-5 mb-3\">\n        <div class=\"row\">\n          <div class=\"col mt-3 mb-2\">\n            <span class=\"add c-pointer\" id=\"addOwner\" (click)=\"add.emit()\"><i class=\"fa fa-plus-circle pr-3 icon\"></i>Add New\n              Beneficial\n              Owner</span>\n          </div>\n          <div class=\"col d-flex justify-content-end  mt-3 mb-3 pr-sm-5 mr-sm-2\">\n            <button class=\"btn btn-info\" id=\"submitOwner\" (click)=\"agree()\">Submit Beneficial Owner</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"col mt-5\">\n          <div class=\"row\">\n            <span>\n              <mat-checkbox color=\"primary\" type=\"checkbox\" (change)=\"action()\" id=\"agree\" formControlName=\"{{control}}\"\n                name=\"{{control}}\">\n              </mat-checkbox>\n            </span>\n            <span class=\"col terms\" id=\"content\">{{content}}\n            </span>\n          </div>\n        </div>\n        <div class=\"col d-flex justify-content-center mt-4 mb-3\">\n          <button class=\"btn btn-info\" id=\"agreeBtn\" [ngClass]=\"{'disabled': formValid}\" (click)=\"submitData.emit()\" [disabled]=\"formValid\">Agree\n            & Continue</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>",
                styles: [":root{font-size:17px!important}.bg{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.terms{font-family:\"Encode Sans\",sans-serif!important;font-size:1.5rem}label{font-family:Poppins,sans-serif!important;font-size:20px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px}.upload-doc-title{font-family:Poppins,sans-serif!important;font-size:1.5rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px}.owner{font-family:Poppins,sans-serif!important;font-size:1.6rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px}.card-line{background-color:#fff;color:#2c2727;height:46px;border-radius:2px;letter-spacing:.5px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2);border-top:3px solid #bfd131c9}.fullwidth{width:100%}.c-pointer{cursor:pointer}.display-2{font-size:6.2rem!important;line-height:1.5!important}.border-dot{border-style:dashed!important;border-color:#6a68689e;border-radius:1px;border-width:2px}.upload{opacity:0;width:277px!important;position:relative;height:120px}.upload:hover{cursor:pointer!important}.upload-icon{position:absolute}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.3rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.disabled{cursor:not-allowed!important}.add{font-family:Poppins,sans-serif!important;font-size:1.5rem;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px;color:#ccda5c}"]
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
    countriesList: [{ type: Input }],
    statesList: [{ type: Input }],
    formValid: [{ type: Input }],
    control: [{ type: Input }],
    arrayControlName: [{ type: Input }],
    content: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJlbmVmaWNpYWwtb3duZXIvc3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFpQixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU9oRCxNQUFNLE9BQU8sNEJBQTRCOzs7O0lBd0J4QyxZQUFvQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBdEJoQyxVQUFLLEdBQUcsbUJBQW1CLENBQUM7UUFDNUIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQU9uQyxZQUFPLEdBQUc7c0RBQzJDLENBQUM7UUFDNUMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsUUFBRyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFdBQU0sR0FBRyxFQUFFLENBQUM7SUFJZ0MsQ0FBQzs7OztJQUU3QyxRQUFRO1FBQ1AsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqRixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLENBQUM7UUFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzthQUN4QjtTQUNEO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDeEI7YUFBTTtZQUNOLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztpQkFDdkI7YUFDRDtTQUNEO0lBQ0YsQ0FBQzs7OztJQUVELE1BQU07O2NBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPO1FBQ2hDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkI7YUFBTTtZQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxHQUFHLEVBQUU7O2tCQUNGLElBQUksR0FBRztnQkFDWixjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQy9CLEtBQUssRUFBRSxDQUFDO2FBQ1I7WUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QjtJQUNGLENBQUM7Ozs7SUFFRCxLQUFLOztjQUNFLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7UUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsQ0FBQztRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O2NBQ1IsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSzs7Y0FDdEIsV0FBVyxHQUFHLE9BQU87O1lBQ3ZCLGVBQWU7O2NBQ2IsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM5QixlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLGVBQWUsSUFBSSxXQUFXLEVBQUU7WUFDbkMsSUFDQyxJQUFJLENBQUMsSUFBSSxJQUFJLFlBQVk7Z0JBQ3pCLElBQUksQ0FBQyxJQUFJLElBQUksaUJBQWlCO2dCQUM5QixJQUFJLENBQUMsSUFBSSxJQUFJLFdBQVc7Z0JBQ3hCLElBQUksQ0FBQyxJQUFJLElBQUksV0FBVyxFQUN2QjtnQkFDRCxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ2hELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7OzhCQUN6QyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs4QkFDeEIsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVOzs4QkFDekIsSUFBSSxHQUFHOzRCQUNaLElBQUksRUFBRSxJQUFJOzRCQUNWLFlBQVksRUFBRSxPQUFPO3lCQUNyQjt3QkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDdkIsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7cUJBQzVCO29CQUNELENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztpQkFDcEI7YUFDRDtpQkFBTTtnQkFDTixJQUFJLENBQUMsUUFBUSxDQUFDLCtDQUErQyxDQUFDLENBQUM7YUFDL0Q7U0FDRDthQUFNO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsR0FBRztRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUU7WUFDaEMsZ0JBQWdCLEVBQUUsUUFBUTtZQUMxQixrQkFBa0IsRUFBRSxPQUFPO1lBQzNCLFFBQVEsRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7O1lBN0hELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxtcFBBQXFEOzthQUVyRDs7OztZQU5RLFdBQVc7OzttQkFRbEIsS0FBSztvQkFDTCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzsrQkFDTCxLQUFLO3NCQUNMLEtBQUs7NEJBR0wsTUFBTTswQkFDTixNQUFNO3FCQUNOLE1BQU07MEJBQ04sTUFBTTtrQkFDTixNQUFNO3lCQUNOLE1BQU07cUJBQ04sTUFBTTs7OztJQWpCUCw0Q0FBeUI7O0lBQ3pCLDZDQUFxQzs7SUFDckMsa0RBQW1DOztJQUNuQyxxREFBdUI7O0lBQ3ZCLGtEQUFvQjs7SUFDcEIsaURBQTRCOztJQUM1QiwrQ0FBaUI7O0lBQ2pCLHdEQUEwQjs7SUFDMUIsK0NBRXNEOztJQUN0RCxxREFBNkM7O0lBQzdDLG1EQUEyQzs7SUFDM0MsOENBQXNDOztJQUN0QyxtREFBMkM7O0lBQzNDLDJDQUFtQzs7SUFDbkMsa0RBQTBDOztJQUMxQyw4Q0FBc0M7O0lBQ3RDLGdEQUFjOztJQUNkLDhDQUFZOztJQUNaLG1EQUFZOztJQUNaLG9EQUFhOztJQUNiLGtEQUFXOzs7OztJQUNDLGdEQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBBZnRlclZpZXdJbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtYmVuZWZpY2lhbC1vd25lcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWJlbmVmaWNpYWwtb3duZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VCZW5lZmljaWFsT3duZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG5cdEBJbnB1dCgpIHRpdGxlID0gJ0JlbmVmaWNpYWwgT3duZXJzJztcblx0QElucHV0KCkgdGl0bGVDbGFzcyA9ICdtYi0zIG10LTUgJztcblx0QElucHV0KCkgY291bnRyaWVzTGlzdDtcblx0QElucHV0KCkgc3RhdGVzTGlzdDtcblx0QElucHV0KCkgZm9ybVZhbGlkOiBCb29sZWFuO1xuXHRASW5wdXQoKSBjb250cm9sO1xuXHRASW5wdXQoKSBhcnJheUNvbnRyb2xOYW1lO1xuXHRASW5wdXQoKVxuXHRjb250ZW50ID0gYEksIERhaXN5LCBoZXJlYnkgY2VydGlmeSwgdG8gdGhlIGJlc3Qgb2YgbXkga25vd2xlZGdlLCB0aGF0IHRoZVxuICBpbmZvcm1hdGlvbiBwcm92aWRlZCBhYm92ZSBpcyBjb21wbGV0ZSBhbmQgY29ycmVjdC5gO1xuXHRAT3V0cHV0KCkgY291bnRyeVNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHN0YXRlU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgdXBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgc3VibWl0T3duZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBhZGQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBzdWJtaXREYXRhID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgdmVyaWZ5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRzZWxlY3RlZCA9IFtdO1xuXHR0b2dnbGUgPSBbXTtcblx0Y3VzdG9tQ2xhc3M7XG5cdGRvY3VtZW50VHlwZTtcblx0dXBsb2FkVHlwZTtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5mb3JtVmFsaWQgPSB0cnVlO1xuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5mb3JtLmdldCh0aGlzLmFycmF5Q29udHJvbE5hbWUpWydjb250cm9scyddLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZVtqXSA9IGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnNlbGVjdGVkWzBdID0gMDtcblx0XHR0aGlzLnRvZ2dsZVswXSA9IHRydWU7XG5cdH1cblxuXHRhY3RpdmUoaSkge1xuXHRcdHRoaXMuc2VsZWN0ZWRbaV0gPSBpO1xuXHRcdHRoaXMudG9nZ2xlW2ldID0gIXRoaXMudG9nZ2xlW2ldO1xuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5mb3JtLmdldCh0aGlzLmFycmF5Q29udHJvbE5hbWUpWydjb250cm9scyddLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoaSAhPSBqKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRbal0gPSBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIXRoaXMudG9nZ2xlW2ldKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkW2ldID0gbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmZvcm0uZ2V0KHRoaXMuYXJyYXlDb250cm9sTmFtZSlbJ2NvbnRyb2xzJ10ubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0aWYgKGkgIT0gaikge1xuXHRcdFx0XHRcdHRoaXMudG9nZ2xlW2pdID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRhY3Rpb24oKSB7XG5cdFx0Y29uc3QgY29udHJvbE5hbWUgPSB0aGlzLmNvbnRyb2w7XG5cdFx0aWYgKHRoaXMuZm9ybS5nZXQoY29udHJvbE5hbWUpLnZhbHVlKSB7XG5cdFx0XHR0aGlzLmZvcm1WYWxpZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy52ZXJpZnkuZW1pdCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZvcm1WYWxpZCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0Y291bnRyeVNlbGVjdEFjdGlvbih2YWwsIGkpIHtcblx0XHRpZiAodmFsKSB7XG5cdFx0XHRjb25zdCBkYXRhID0ge1xuXHRcdFx0XHRjb3VudHJ5RGV0YWlsczogSlNPTi5wYXJzZSh2YWwpLFxuXHRcdFx0XHRpbmRleDogaVxuXHRcdFx0fTtcblx0XHRcdHRoaXMuY291bnRyeVNlbGVjdC5lbWl0KGRhdGEpO1xuXHRcdH1cblx0fVxuXG5cdGFncmVlKCkge1xuXHRcdGNvbnN0IGZvcm1EYXRhID0gdGhpcy5mb3JtLnZhbHVlO1xuXHRcdHRoaXMuc3VibWl0T3duZXIuZW1pdChmb3JtRGF0YSk7XG5cdH1cblxuXHRmaWxldXBsb2FkKGUpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRcdGNvbnN0IGZpbGVzID0gZS50YXJnZXQuZmlsZXM7XG5cdFx0XHRjb25zdCBtYXhGaWxlU2l6ZSA9IDk5OTk5OTk7XG5cdFx0XHRsZXQgY3VycmVudEZpbGVTaXplO1xuXHRcdFx0Y29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuXHRcdFx0Y3VycmVudEZpbGVTaXplID0gZmlsZS5zaXplO1xuXHRcdFx0aWYgKGN1cnJlbnRGaWxlU2l6ZSA8PSBtYXhGaWxlU2l6ZSkge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0ZmlsZS50eXBlID09ICdpbWFnZS9qcGVnJyB8fFxuXHRcdFx0XHRcdGZpbGUudHlwZSA9PSAnYXBwbGljYXRpb24vcGRmJyB8fFxuXHRcdFx0XHRcdGZpbGUudHlwZSA9PSAnaW1hZ2UvcG5nJyB8fFxuXHRcdFx0XHRcdGZpbGUudHlwZSA9PSAnaW1hZ2UvanBnJ1xuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlLnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbaV07XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGRvY1R5cGUgPSB0aGlzLnVwbG9hZFR5cGU7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGRhdGEgPSB7XG5cdFx0XHRcdFx0XHRcdFx0ZmlsZTogZmlsZSxcblx0XHRcdFx0XHRcdFx0XHRkb2N1bWVudFR5cGU6IGRvY1R5cGVcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0dGhpcy51cGxvYWQuZW1pdChkYXRhKTtcblx0XHRcdFx0XHRcdFx0Y3VycmVudEZpbGVTaXplID0gZmlsZS5zaXplO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZS50YXJnZXQudmFsdWUgPSAnJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zbmFja2JhcignVGhlIGZpbGUgdHlwZSBqcGcvanBlZy9wbmcgZmlsZXMgYXJlIGFsbG93ZWQhJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc25hY2tiYXIoJ1RoZSBmaWxlIHNpemUgY2Fubm90IGV4Y2VlZCAxMCBNQicpO1xuXHRcdFx0fVxuXHR9XG5cblx0c25hY2tiYXIobXNnKSB7XG5cdFx0dGhpcy5zbmFja0Jhci5vcGVuKG1zZywgJ2Nsb3NlJywge1xuXHRcdFx0dmVydGljYWxQb3NpdGlvbjogJ2JvdHRvbScsXG5cdFx0XHRob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXG5cdFx0XHRkdXJhdGlvbjogMzUwMFxuXHRcdH0pO1xuXHR9XG59Il19