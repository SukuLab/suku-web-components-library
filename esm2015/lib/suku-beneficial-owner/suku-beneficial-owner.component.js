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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJlbmVmaWNpYWwtb3duZXIvc3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFpQixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU9oRCxNQUFNLE9BQU8sNEJBQTRCOzs7O0lBd0J4QyxZQUFvQixRQUFxQjtRQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBdEJoQyxVQUFLLEdBQUcsbUJBQW1CLENBQUM7UUFDNUIsZUFBVSxHQUFHLFlBQVksQ0FBQztRQU9uQyxZQUFPLEdBQUc7c0RBQzJDLENBQUM7UUFDNUMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsUUFBRyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFdBQU0sR0FBRyxFQUFFLENBQUM7SUFJZ0MsQ0FBQzs7OztJQUU3QyxRQUFRO1FBQ1AsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsS0FBSyxJQUFJLENBQUMsR0FB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Z0IsRUFBRSxRQUFRO1lBQzFCLGtCQUFrQixFQUFFLE9BQU87WUFDM0IsUUFBUSxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDSixDQUFDOzs7WUE1SEQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLG1wUEFBcUQ7O2FBRXJEOzs7O1lBTlEsV0FBVzs7O21CQVFsQixLQUFLO29CQUNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLOytCQUNMLEtBQUs7c0JBQ0wsS0FBSzs0QkFHTCxNQUFNOzBCQUNOLE1BQU07cUJBQ04sTUFBTTswQkFDTixNQUFNO2tCQUNOLE1BQU07eUJBQ04sTUFBTTtxQkFDTixNQUFNOzs7O0lBakJQLDRDQUF5Qjs7SUFDekIsNkNBQXFDOztJQUNyQyxrREFBbUM7O0lBQ25DLHFEQUF1Qjs7SUFDdkIsa0RBQW9COztJQUNwQixpREFBNEI7O0lBQzVCLCtDQUFpQjs7SUFDakIsd0RBQTBCOztJQUMxQiwrQ0FFc0Q7O0lBQ3RELHFEQUE2Qzs7SUFDN0MsbURBQTJDOztJQUMzQyw4Q0FBc0M7O0lBQ3RDLG1EQUEyQzs7SUFDM0MsMkNBQW1DOztJQUNuQyxrREFBMEM7O0lBQzFDLDhDQUFzQzs7SUFDdEMsZ0RBQWM7O0lBQ2QsOENBQVk7O0lBQ1osbURBQVk7O0lBQ1osb0RBQWE7O0lBQ2Isa0RBQVc7Ozs7O0lBQ0MsZ0RBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEFmdGVyVmlld0luaXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3N1a3UtYmVuZWZpY2lhbC1vd25lcicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3N1a3UtYmVuZWZpY2lhbC1vd25lci5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtYmVuZWZpY2lhbC1vd25lci5jb21wb25lbnQuc2NzcycgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUJlbmVmaWNpYWxPd25lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIHRpdGxlID0gJ0JlbmVmaWNpYWwgT3duZXJzJztcclxuXHRASW5wdXQoKSB0aXRsZUNsYXNzID0gJ21iLTMgbXQtNSAnO1xyXG5cdEBJbnB1dCgpIGNvdW50cmllc0xpc3Q7XHJcblx0QElucHV0KCkgc3RhdGVzTGlzdDtcclxuXHRASW5wdXQoKSBmb3JtVmFsaWQ6IEJvb2xlYW47XHJcblx0QElucHV0KCkgY29udHJvbDtcclxuXHRASW5wdXQoKSBhcnJheUNvbnRyb2xOYW1lO1xyXG5cdEBJbnB1dCgpXHJcblx0Y29udGVudCA9IGBJLCBEYWlzeSwgaGVyZWJ5IGNlcnRpZnksIHRvIHRoZSBiZXN0IG9mIG15IGtub3dsZWRnZSwgdGhhdCB0aGVcclxuICBpbmZvcm1hdGlvbiBwcm92aWRlZCBhYm92ZSBpcyBjb21wbGV0ZSBhbmQgY29ycmVjdC5gO1xyXG5cdEBPdXRwdXQoKSBjb3VudHJ5U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBzdGF0ZVNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgdXBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBzdWJtaXRPd25lciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgYWRkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBzdWJtaXREYXRhID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSB2ZXJpZnkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0c2VsZWN0ZWQgPSBbXTtcclxuXHR0b2dnbGUgPSBbXTtcclxuXHRjdXN0b21DbGFzcztcclxuXHRkb2N1bWVudFR5cGU7XHJcblx0dXBsb2FkVHlwZTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmZvcm1WYWxpZCA9IHRydWU7XHJcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZm9ybS5nZXQodGhpcy5hcnJheUNvbnRyb2xOYW1lKVsnY29udHJvbHMnXS5sZW5ndGg7IGorKykge1xyXG5cdFx0XHR0aGlzLnRvZ2dsZVtqXSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zZWxlY3RlZFswXSA9IDA7XHJcblx0XHR0aGlzLnRvZ2dsZVswXSA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRhY3RpdmUoaSkge1xyXG5cdFx0dGhpcy5zZWxlY3RlZFtpXSA9IGk7XHJcblx0XHR0aGlzLnRvZ2dsZVtpXSA9ICF0aGlzLnRvZ2dsZVtpXTtcclxuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5mb3JtLmdldCh0aGlzLmFycmF5Q29udHJvbE5hbWUpWydjb250cm9scyddLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdGlmIChpICE9IGopIHtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkW2pdID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKCF0aGlzLnRvZ2dsZVtpXSkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkW2ldID0gbnVsbDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5mb3JtLmdldCh0aGlzLmFycmF5Q29udHJvbE5hbWUpWydjb250cm9scyddLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0aWYgKGkgIT0gaikge1xyXG5cdFx0XHRcdFx0dGhpcy50b2dnbGVbal0gPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFjdGlvbigpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2xOYW1lID0gdGhpcy5jb250cm9sO1xyXG5cdFx0aWYgKHRoaXMuZm9ybS5nZXQoY29udHJvbE5hbWUpLnZhbHVlKSB7XHJcblx0XHRcdHRoaXMuZm9ybVZhbGlkID0gZmFsc2U7XHJcblx0XHRcdHRoaXMudmVyaWZ5LmVtaXQoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuZm9ybVZhbGlkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvdW50cnlTZWxlY3RBY3Rpb24odmFsLCBpKSB7XHJcblx0XHRpZiAodmFsKSB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRcdFx0Y291bnRyeURldGFpbHM6IEpTT04ucGFyc2UodmFsKSxcclxuXHRcdFx0XHRpbmRleDogaVxyXG5cdFx0XHR9O1xyXG5cdFx0XHR0aGlzLmNvdW50cnlTZWxlY3QuZW1pdChkYXRhKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFncmVlKCkge1xyXG5cdFx0Y29uc3QgZm9ybURhdGEgPSB0aGlzLmZvcm0udmFsdWU7XHJcblx0XHR0aGlzLnN1Ym1pdE93bmVyLmVtaXQoZm9ybURhdGEpO1xyXG5cdH1cclxuXHJcblx0ZmlsZXVwbG9hZChlKSB7XHJcblx0XHRcdGNvbnN0IGZpbGVzID0gZS50YXJnZXQuZmlsZXM7XHJcblx0XHRcdGNvbnN0IG1heEZpbGVTaXplID0gOTk5OTk5OTtcclxuXHRcdFx0bGV0IGN1cnJlbnRGaWxlU2l6ZTtcclxuXHRcdFx0Y29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG5cdFx0XHRjdXJyZW50RmlsZVNpemUgPSBmaWxlLnNpemU7XHJcblx0XHRcdGlmIChjdXJyZW50RmlsZVNpemUgPD0gbWF4RmlsZVNpemUpIHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRmaWxlLnR5cGUgPT0gJ2ltYWdlL2pwZWcnIHx8XHJcblx0XHRcdFx0XHRmaWxlLnR5cGUgPT0gJ2FwcGxpY2F0aW9uL3BkZicgfHxcclxuXHRcdFx0XHRcdGZpbGUudHlwZSA9PSAnaW1hZ2UvcG5nJyB8fFxyXG5cdFx0XHRcdFx0ZmlsZS50eXBlID09ICdpbWFnZS9qcGcnXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGUudGFyZ2V0LmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzW2ldO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGRvY1R5cGUgPSB0aGlzLnVwbG9hZFR5cGU7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdGZpbGU6IGZpbGUsXHJcblx0XHRcdFx0XHRcdFx0XHRkb2N1bWVudFR5cGU6IGRvY1R5cGVcclxuXHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMudXBsb2FkLmVtaXQoZGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0Y3VycmVudEZpbGVTaXplID0gZmlsZS5zaXplO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGUudGFyZ2V0LnZhbHVlID0gJyc7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuc25hY2tiYXIoJ1RoZSBmaWxlIHR5cGUganBnL2pwZWcvcG5nIGZpbGVzIGFyZSBhbGxvd2VkIScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnNuYWNrYmFyKCdUaGUgZmlsZSBzaXplIGNhbm5vdCBleGNlZWQgMTAgTUInKTtcclxuXHRcdFx0fVxyXG5cdH1cclxuXHJcblx0c25hY2tiYXIobXNnKSB7XHJcblx0XHR0aGlzLnNuYWNrQmFyLm9wZW4obXNnLCAnY2xvc2UnLCB7XHJcblx0XHRcdHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nLFxyXG5cdFx0XHRob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXHJcblx0XHRcdGR1cmF0aW9uOiAzNTAwXHJcblx0XHR9KTtcclxuXHR9XHJcbn0iXX0=