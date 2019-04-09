/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
var SukuBeneficialOwnerComponent = /** @class */ (function () {
    function SukuBeneficialOwnerComponent(snackBar) {
        this.snackBar = snackBar;
        this.title = 'Beneficial Owners';
        this.titleClass = 'mb-3 mt-5 ';
        this.content = "I, Daisy, hereby certify, to the best of my knowledge, that the\n  information provided above is complete and correct.";
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
            this.formValid = false;
            this.verify.emit();
        }
        else {
            this.formValid = true;
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
     * @param {?} e
     * @return {?}
     */
    SukuBeneficialOwnerComponent.prototype.fileupload = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var files = e.target.files;
        /** @type {?} */
        var maxFileSize = 9999999;
        /** @type {?} */
        var currentFileSize;
        /** @type {?} */
        var file = e.target.files[0];
        currentFileSize = file.size;
        if (currentFileSize <= maxFileSize) {
            if (file.type == 'image/jpeg' ||
                file.type == 'application/pdf' ||
                file.type == 'image/png' ||
                file.type == 'image/jpg') {
                if (e.target.files && e.target.files.length > 0) {
                    for (var i = 0; i < e.target.files.length; i++) {
                        /** @type {?} */
                        var file_1 = e.target.files[i];
                        /** @type {?} */
                        var docType = this.uploadType;
                        /** @type {?} */
                        var data = {
                            file: file_1,
                            documentType: docType
                        };
                        this.upload.emit(data);
                        currentFileSize = file_1.size;
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
                    template: "<form [formGroup]=\"form\">\n  <div class=\"col\">\n    <label class=\"titleClass\"><strong>{{title}}</strong></label>\n    <div class=\"col bg pl-5 pr-5 pt-5 pb-3 mb-5\">\n      <div class=\"col p-0\" formArrayName=\"{{arrayControlName}}\" id=\"beneficialOwnerBlock\">\n        <div class=\"col p-0\" *ngFor=\"let detail of form.get(arrayControlName)['controls']; let i=index\" [formGroupName]=\"i\">\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\n            (click)=\"active(i)\">\n            <div class=\"row\">\n              <label class=\"m-2 pl-3 owner c-pointer\">\n                Beneficial Owner {{i+1}}\n              </label>\n              <label class=\"d-flex justify-content-end col pl-0 c-pointer\">\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\n                </span>\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\n                </span>\n              </label>\n            </div>\n          </div>\n          <div class=\"col mt-4 collapse\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\" id=\"ownerBlock{{i}}\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"First Name\" id=\"firstname\" formControlName=\"firstName\" name=\"firstName\">\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Last Name\" id=\"lastname\" formControlName=\"lastName\" name=\"lastName\">\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field>\n                  <input matInput [matDatepicker]=\"myDatepicker\" id=\"dob\" placeholder=\"Date of birth\" formControlName=\"dateOfBirth\"\n                    name=\"dateOfBirth\">\n                  <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n                  <mat-datepicker #myDatepicker></mat-datepicker>\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"SSN\" id=\"ssn\" formControlName=\"ssn\" name=\"ssn\">\n                  <mat-hint>hint: 1234-12-123</mat-hint>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"col p-0\" formGroupName=\"address\">\n              <div class=\"col p-0\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Address 1\" id=\"address1\" formControlName=\"address1\" name=\"address1\">\n                </mat-form-field>\n              </div>\n              <div class=\"col p-0\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Address 2\" id=\"address2\" formControlName=\"address2\" name=\"address2\">\n                </mat-form-field>\n              </div>\n              <div class=\"col p-0\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <mat-select #t (selectionChange)=\"countrySelectAction(t.value,i)\" id=\"country\" formControlName=\"country\"\n                        name=\"country\" placeholder=\"country\">\n                        <mat-option value=\"\">Select Country</mat-option>\n                        <mat-option *ngFor=\"let item of countriesList; let i = index\" value=\"{{ item | json }}\">\n                          {{ item.countryName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <mat-select #s (selectionChange)=\"stateSelect.emit(s.value)\" formControlName=\"stateProvinceRegion\"\n                        id=\"stateProvinceRegion\" name=\"stateProvinceRegion\" placeholder=\"state\">\n                        <mat-option value=\"\">Select State</mat-option>\n                        <mat-option *ngFor=\"let item of statesList; let i = index\" value=\"{{ item.stateShortName  }}\">{{\n                          item.stateName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <input matInput placeholder=\"City\" id=\"city\" formControlName=\"city\" name=\"city\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <input matInput #postalcode maxlength=\"5\" placeholder=\"Postal Code\" id=\"postalCode\"\n                        formControlName=\"postalCode\" name=\"postalCode\">\n                    </mat-form-field>\n                  </div>\n                </div>\n\n                <!-- <div class=\"col p-3\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-8 p-0\">\n                      <label class=\"upload-doc-title\">\n                        <b>\n                          Upload a driver license or passport.\n                        </b>\n                      </label>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"col border-dot rounded-0 bg-light d-flex justify-content-center mt-3\">\n                        <span class=\"fa fa-cloud-upload mt-3 upload-icon display-2 text-muted\" *ngIf=\"true\">\n                        </span>\n                        <input type=\"file\" class=\"upload\" name=\"document\" formControlName=\"document\" (change)=\"fileupload($event)\" />\n                      </div>\n                    </div>\n                  </div>\n                </div> -->\n\n                \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col mt-5 mb-3\">\n        <div class=\"row\">\n          <div class=\"col mt-3 mb-2\">\n            <span class=\"add c-pointer\" id=\"addOwner\" (click)=\"add.emit()\"><i class=\"fa fa-plus-circle pr-3 icon\"></i>Add New\n              Beneficial\n              Owner</span>\n          </div>\n          <div class=\"col d-flex justify-content-end  mt-3 mb-3 pr-sm-5 mr-sm-2\">\n            <button class=\"btn btn-info\" id=\"submitOwner\" (click)=\"agree()\">Submit Beneficial Owner</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"col mt-5\">\n          <div class=\"row\">\n            <span>\n              <mat-checkbox color=\"primary\" type=\"checkbox\" (change)=\"action()\" id=\"agree\" formControlName=\"{{control}}\"\n                name=\"{{control}}\">\n              </mat-checkbox>\n            </span>\n            <span class=\"col terms\" id=\"content\">{{content}}\n            </span>\n          </div>\n        </div>\n        <div class=\"col d-flex justify-content-center mt-4 mb-3\">\n          <button class=\"btn btn-info\" id=\"agreeBtn\" [ngClass]=\"{'disabled': formValid}\" (click)=\"submitData.emit()\" [disabled]=\"formValid\">Agree\n            & Continue</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>",
                    styles: [":root{font-size:17px!important}.bg{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05)}.terms{font-family:\"Encode Sans\",sans-serif!important;font-size:1.5rem}label{font-family:Poppins,sans-serif!important;font-size:20px;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px}.upload-doc-title{font-family:Poppins,sans-serif!important;font-size:1.5rem;font-weight:700;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.1px}.owner{font-family:Poppins,sans-serif!important;font-size:1.6rem;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px}.card-line{background-color:#fff;color:#2c2727;height:46px;border-radius:2px;letter-spacing:.5px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2);border-top:3px solid #bfd131c9}.fullwidth{width:100%}.c-pointer{cursor:pointer}.display-2{font-size:6.2rem!important;line-height:1.5!important}.border-dot{border-style:dashed!important;border-color:#6a68689e;border-radius:1px;border-width:2px}.upload{opacity:0;width:277px!important;position:relative;height:120px}.upload:hover{cursor:pointer!important}.upload-icon{position:absolute}.icon{font-size:2.2rem!important;color:#ccda5c!important}.btn{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#000;border-radius:29px 77px 61px;font-weight:900;font-family:Poppins,sans-serif!important;font-size:1.3rem}.btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.btn-info:active,.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.btn-info.focus,.btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle .btn-info.focus,.open>.dropdown-toggle .btn-info:focus,.open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.disabled{cursor:not-allowed!important}.add{font-family:Poppins,sans-serif!important;font-size:1.5rem;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.3px;color:#ccda5c}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJlbmVmaWNpYWwtb3duZXIvc3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFpQixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRDtJQTZCQyxzQ0FBb0IsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQXRCaEMsVUFBSyxHQUFHLG1CQUFtQixDQUFDO1FBQzVCLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFPbkMsWUFBTyxHQUFHLHdIQUMyQyxDQUFDO1FBQzVDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLFFBQUcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RDLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxXQUFNLEdBQUcsRUFBRSxDQUFDO0lBSWdDLENBQUM7Ozs7SUFFN0MsK0NBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUs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QyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRTtZQUNoQyxnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLGtCQUFrQixFQUFFLE9BQU87WUFDM0IsUUFBUSxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDSixDQUFDOztnQkE1SEQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLG1wUEFBcUQ7O2lCQUVyRDs7OztnQkFOUSxXQUFXOzs7dUJBUWxCLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxLQUFLO2dDQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7bUNBQ0wsS0FBSzswQkFDTCxLQUFLO2dDQUdMLE1BQU07OEJBQ04sTUFBTTt5QkFDTixNQUFNOzhCQUNOLE1BQU07c0JBQ04sTUFBTTs2QkFDTixNQUFNO3lCQUNOLE1BQU07O0lBc0dSLG1DQUFDO0NBQUEsQUE3SEQsSUE2SEM7U0F4SFksNEJBQTRCOzs7SUFDeEMsNENBQXlCOztJQUN6Qiw2Q0FBcUM7O0lBQ3JDLGtEQUFtQzs7SUFDbkMscURBQXVCOztJQUN2QixrREFBb0I7O0lBQ3BCLGlEQUE0Qjs7SUFDNUIsK0NBQWlCOztJQUNqQix3REFBMEI7O0lBQzFCLCtDQUVzRDs7SUFDdEQscURBQTZDOztJQUM3QyxtREFBMkM7O0lBQzNDLDhDQUFzQzs7SUFDdEMsbURBQTJDOztJQUMzQywyQ0FBbUM7O0lBQ25DLGtEQUEwQzs7SUFDMUMsOENBQXNDOztJQUN0QyxnREFBYzs7SUFDZCw4Q0FBWTs7SUFDWixtREFBWTs7SUFDWixvREFBYTs7SUFDYixrREFBVzs7Ozs7SUFDQyxnREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgQWZ0ZXJWaWV3SW5pdCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc3VrdS1iZW5lZmljaWFsLW93bmVyJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC5zY3NzJyBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1QmVuZWZpY2lhbE93bmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KCkgdGl0bGUgPSAnQmVuZWZpY2lhbCBPd25lcnMnO1xyXG5cdEBJbnB1dCgpIHRpdGxlQ2xhc3MgPSAnbWItMyBtdC01ICc7XHJcblx0QElucHV0KCkgY291bnRyaWVzTGlzdDtcclxuXHRASW5wdXQoKSBzdGF0ZXNMaXN0O1xyXG5cdEBJbnB1dCgpIGZvcm1WYWxpZDogQm9vbGVhbjtcclxuXHRASW5wdXQoKSBjb250cm9sO1xyXG5cdEBJbnB1dCgpIGFycmF5Q29udHJvbE5hbWU7XHJcblx0QElucHV0KClcclxuXHRjb250ZW50ID0gYEksIERhaXN5LCBoZXJlYnkgY2VydGlmeSwgdG8gdGhlIGJlc3Qgb2YgbXkga25vd2xlZGdlLCB0aGF0IHRoZVxyXG4gIGluZm9ybWF0aW9uIHByb3ZpZGVkIGFib3ZlIGlzIGNvbXBsZXRlIGFuZCBjb3JyZWN0LmA7XHJcblx0QE91dHB1dCgpIGNvdW50cnlTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIHN0YXRlU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSB1cGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIHN1Ym1pdE93bmVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBhZGQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIHN1Ym1pdERhdGEgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIHZlcmlmeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRzZWxlY3RlZCA9IFtdO1xyXG5cdHRvZ2dsZSA9IFtdO1xyXG5cdGN1c3RvbUNsYXNzO1xyXG5cdGRvY3VtZW50VHlwZTtcclxuXHR1cGxvYWRUeXBlO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuZm9ybVZhbGlkID0gdHJ1ZTtcclxuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5mb3JtLmdldCh0aGlzLmFycmF5Q29udHJvbE5hbWUpWydjb250cm9scyddLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdHRoaXMudG9nZ2xlW2pdID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHR0aGlzLnNlbGVjdGVkWzBdID0gMDtcclxuXHRcdHRoaXMudG9nZ2xlWzBdID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGFjdGl2ZShpKSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkW2ldID0gaTtcclxuXHRcdHRoaXMudG9nZ2xlW2ldID0gIXRoaXMudG9nZ2xlW2ldO1xyXG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmZvcm0uZ2V0KHRoaXMuYXJyYXlDb250cm9sTmFtZSlbJ2NvbnRyb2xzJ10ubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0aWYgKGkgIT0gaikge1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRbal0gPSBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoIXRoaXMudG9nZ2xlW2ldKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRbaV0gPSBudWxsO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmZvcm0uZ2V0KHRoaXMuYXJyYXlDb250cm9sTmFtZSlbJ2NvbnRyb2xzJ10ubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRpZiAoaSAhPSBqKSB7XHJcblx0XHRcdFx0XHR0aGlzLnRvZ2dsZVtqXSA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YWN0aW9uKCkge1xyXG5cdFx0Y29uc3QgY29udHJvbE5hbWUgPSB0aGlzLmNvbnRyb2w7XHJcblx0XHRpZiAodGhpcy5mb3JtLmdldChjb250cm9sTmFtZSkudmFsdWUpIHtcclxuXHRcdFx0dGhpcy5mb3JtVmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy52ZXJpZnkuZW1pdCgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5mb3JtVmFsaWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y291bnRyeVNlbGVjdEFjdGlvbih2YWwsIGkpIHtcclxuXHRcdGlmICh2YWwpIHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0XHRjb3VudHJ5RGV0YWlsczogSlNPTi5wYXJzZSh2YWwpLFxyXG5cdFx0XHRcdGluZGV4OiBpXHJcblx0XHRcdH07XHJcblx0XHRcdHRoaXMuY291bnRyeVNlbGVjdC5lbWl0KGRhdGEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YWdyZWUoKSB7XHJcblx0XHRjb25zdCBmb3JtRGF0YSA9IHRoaXMuZm9ybS52YWx1ZTtcclxuXHRcdHRoaXMuc3VibWl0T3duZXIuZW1pdChmb3JtRGF0YSk7XHJcblx0fVxyXG5cclxuXHRmaWxldXBsb2FkKGUpIHtcclxuXHRcdFx0Y29uc3QgZmlsZXMgPSBlLnRhcmdldC5maWxlcztcclxuXHRcdFx0Y29uc3QgbWF4RmlsZVNpemUgPSA5OTk5OTk5O1xyXG5cdFx0XHRsZXQgY3VycmVudEZpbGVTaXplO1xyXG5cdFx0XHRjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcblx0XHRcdGN1cnJlbnRGaWxlU2l6ZSA9IGZpbGUuc2l6ZTtcclxuXHRcdFx0aWYgKGN1cnJlbnRGaWxlU2l6ZSA8PSBtYXhGaWxlU2l6ZSkge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdGZpbGUudHlwZSA9PSAnaW1hZ2UvanBlZycgfHxcclxuXHRcdFx0XHRcdGZpbGUudHlwZSA9PSAnYXBwbGljYXRpb24vcGRmJyB8fFxyXG5cdFx0XHRcdFx0ZmlsZS50eXBlID09ICdpbWFnZS9wbmcnIHx8XHJcblx0XHRcdFx0XHRmaWxlLnR5cGUgPT0gJ2ltYWdlL2pwZydcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZS50YXJnZXQuZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbaV07XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgZG9jVHlwZSA9IHRoaXMudXBsb2FkVHlwZTtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBkYXRhID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZmlsZTogZmlsZSxcclxuXHRcdFx0XHRcdFx0XHRcdGRvY3VtZW50VHlwZTogZG9jVHlwZVxyXG5cdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdFx0dGhpcy51cGxvYWQuZW1pdChkYXRhKTtcclxuXHRcdFx0XHRcdFx0XHRjdXJyZW50RmlsZVNpemUgPSBmaWxlLnNpemU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZS50YXJnZXQudmFsdWUgPSAnJztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5zbmFja2JhcignVGhlIGZpbGUgdHlwZSBqcGcvanBlZy9wbmcgZmlsZXMgYXJlIGFsbG93ZWQhJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuc25hY2tiYXIoJ1RoZSBmaWxlIHNpemUgY2Fubm90IGV4Y2VlZCAxMCBNQicpO1xyXG5cdFx0XHR9XHJcblx0fVxyXG5cclxuXHRzbmFja2Jhcihtc2cpIHtcclxuXHRcdHRoaXMuc25hY2tCYXIub3Blbihtc2csICdjbG9zZScsIHtcclxuXHRcdFx0dmVydGljYWxQb3NpdGlvbjogJ2JvdHRvbScsXHJcblx0XHRcdGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0JyxcclxuXHRcdFx0ZHVyYXRpb246IDM1MDBcclxuXHRcdH0pO1xyXG5cdH1cclxufSJdfQ==