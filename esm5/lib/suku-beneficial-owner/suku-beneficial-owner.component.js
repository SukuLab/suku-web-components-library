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
        this.titleCustomClass = '';
        this.titleid = '';
        this.titleWeight = '';
        this.titleColor = '';
        this.titleSize = '';
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
                    template: "<form [formGroup]=\"form\">\n  <div class=\"col\">\n    <label class=\"titleClass\">\n      <strong [style.font-size.px]=\"titleSize\" [class]=\"titleCustomClass\" id=\"{{titleid}}\" [style.font-weight]=\"titleWeight\"\n        [style.color]=\"titleColor\">{{title}}</strong>\n    </label>\n    <div class=\"col bg pl-5 pr-5 pt-5 pb-3 mb-5\">\n      <div class=\"col p-0\" formArrayName=\"{{arrayControlName}}\" id=\"beneficialOwnerBlock\">\n        <div class=\"col p-0\" *ngFor=\"let detail of form.get(arrayControlName)['controls']; let i=index\"\n          [formGroupName]=\"i\">\n          <div class=\"col card-line mt-3 mb-4 c-pointer\" data-toggle=\"collapse\" [attr.data-target]=\"'#ownerBlock' + i\"\n            (click)=\"active(i)\">\n            <div class=\"row\">\n              <label class=\"m-2 pl-3 owner c-pointer\">\n                Beneficial Owner {{i+1}}\n              </label>\n              <label class=\"d-flex justify-content-end col pl-0 c-pointer\">\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] != i}\">\n                  <i class=\"fa fa-arrow-circle-down icon\"></i>\n                </span>\n                <span class=\"pt-1 pr-2 icon\" [ngClass]=\"{'d-none': selected[i] == i}\">\n                  <i class=\"fa fa-arrow-circle-up icon\"></i>\n                </span>\n              </label>\n            </div>\n          </div>\n          <div class=\"col mt-4 collapse\" [ngClass]=\"{'show': i == 0 }\" data-parent=\"#beneficialOwnerBlock\"\n            id=\"ownerBlock{{i}}\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"First Name\" id=\"firstname\" formControlName=\"firstName\" name=\"firstName\">\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Last Name\" id=\"lastname\" formControlName=\"lastName\" name=\"lastName\">\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field>\n                  <input matInput [matDatepicker]=\"myDatepicker\" id=\"dob\" placeholder=\"Date of birth\"\n                    formControlName=\"dateOfBirth\" name=\"dateOfBirth\">\n                  <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n                  <mat-datepicker #myDatepicker></mat-datepicker>\n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"SSN\" id=\"ssn\" formControlName=\"ssn\" name=\"ssn\">\n                  <mat-hint>hint: 1234-12-123</mat-hint>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"col p-0\" formGroupName=\"address\">\n              <div class=\"col p-0\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Address 1\" id=\"address1\" formControlName=\"address1\" name=\"address1\">\n                </mat-form-field>\n              </div>\n              <div class=\"col p-0\">\n                <mat-form-field class=\"fullwidth\">\n                  <input matInput placeholder=\"Address 2\" id=\"address2\" formControlName=\"address2\" name=\"address2\">\n                </mat-form-field>\n              </div>\n              <div class=\"col p-0\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <mat-select #t (selectionChange)=\"countrySelectAction(t.value,i)\" id=\"country\"\n                        formControlName=\"country\" name=\"country\" placeholder=\"country\">\n                        <mat-option value=\"\">Select Country</mat-option>\n                        <mat-option *ngFor=\"let item of countriesList; let i = index\" value=\"{{ item | json }}\">\n                          {{ item.countryName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <mat-select #s (selectionChange)=\"stateSelect.emit(s.value)\" formControlName=\"stateProvinceRegion\"\n                        id=\"stateProvinceRegion\" name=\"stateProvinceRegion\" placeholder=\"state\">\n                        <mat-option value=\"\">Select State</mat-option>\n                        <mat-option *ngFor=\"let item of statesList; let i = index\" value=\"{{ item.stateShortName  }}\">{{\n                          item.stateName }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <input matInput placeholder=\"City\" id=\"city\" formControlName=\"city\" name=\"city\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col\">\n                    <mat-form-field class=\"fullwidth\">\n                      <input matInput #postalcode maxlength=\"5\" placeholder=\"Postal Code\" id=\"postalCode\"\n                        formControlName=\"postalCode\" name=\"postalCode\">\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col mt-5 mb-3\">\n        <div class=\"row\">\n          <div class=\"col mt-3 mb-2\">\n            <span class=\"add c-pointer\" id=\"addOwner\" (click)=\"add.emit()\"><i\n                class=\"fa fa-plus-circle pr-3 icon\"></i>Add New\n              Beneficial\n              Owner</span>\n          </div>\n          <div class=\"col d-flex justify-content-end  mt-3 mb-3 pr-sm-5 mr-sm-2\">\n            <button class=\"btn btn-info\" id=\"submitOwner\" (click)=\"agree()\">Submit Beneficial Owner</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"col mt-5\">\n          <div class=\"row\">\n            <span>\n              <mat-checkbox color=\"primary\" type=\"checkbox\" (change)=\"action()\" id=\"agree\" formControlName=\"{{control}}\"\n                name=\"{{control}}\">\n              </mat-checkbox>\n            </span>\n            <span class=\"col terms\" id=\"content\">{{content}}\n            </span>\n          </div>\n        </div>\n        <div class=\"col d-flex justify-content-center mt-4 mb-3\">\n          <button class=\"btn btn-info\" id=\"agreeBtn\" [ngClass]=\"{'disabled': formValid}\" (click)=\"submitData.emit()\"\n            [disabled]=\"formValid\">Agree\n            & Continue</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWJlbmVmaWNpYWwtb3duZXIvc3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFpQixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRDtJQWtDQyxzQ0FBb0IsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQTNCaEMsVUFBSyxHQUFHLG1CQUFtQixDQUFDO1FBQzVCLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFDMUIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFPeEIsWUFBTyxHQUFHLHdIQUMyQyxDQUFDO1FBQzVDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLFFBQUcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3RDLGFBQVEsR0FBRyxFQUFFLENB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Q0FBc0M7O0lBQ3RDLGdEQUFjOztJQUNkLDhDQUFZOztJQUNaLG1EQUFZOztJQUNaLG9EQUFhOztJQUNiLGtEQUFXOzs7OztJQUNDLGdEQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBBZnRlclZpZXdJbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtYmVuZWZpY2lhbC1vd25lcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWJlbmVmaWNpYWwtb3duZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1iZW5lZmljaWFsLW93bmVyLmNvbXBvbmVudC5zY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VCZW5lZmljaWFsT3duZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG5cdEBJbnB1dCgpIHRpdGxlID0gJ0JlbmVmaWNpYWwgT3duZXJzJztcblx0QElucHV0KCkgdGl0bGVDbGFzcyA9ICdtYi0zIG10LTUgJztcblx0QElucHV0KCkgdGl0bGVDdXN0b21DbGFzcyA9ICcnO1xuXHRASW5wdXQoKSB0aXRsZWlkID0gJyc7XG5cdEBJbnB1dCgpIHRpdGxlV2VpZ2h0ID0gJyc7XG5cdEBJbnB1dCgpIHRpdGxlQ29sb3IgPSAnJztcblx0QElucHV0KCkgdGl0bGVTaXplID0gJyc7XG5cdEBJbnB1dCgpIGNvdW50cmllc0xpc3Q7XG5cdEBJbnB1dCgpIHN0YXRlc0xpc3Q7XG5cdEBJbnB1dCgpIGZvcm1WYWxpZDogQm9vbGVhbjtcblx0QElucHV0KCkgY29udHJvbDtcblx0QElucHV0KCkgYXJyYXlDb250cm9sTmFtZTtcblx0QElucHV0KClcblx0Y29udGVudCA9IGBJLCBEYWlzeSwgaGVyZWJ5IGNlcnRpZnksIHRvIHRoZSBiZXN0IG9mIG15IGtub3dsZWRnZSwgdGhhdCB0aGVcbiAgaW5mb3JtYXRpb24gcHJvdmlkZWQgYWJvdmUgaXMgY29tcGxldGUgYW5kIGNvcnJlY3QuYDtcblx0QE91dHB1dCgpIGNvdW50cnlTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBzdGF0ZVNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHVwbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHN1Ym1pdE93bmVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgYWRkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgc3VibWl0RGF0YSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHZlcmlmeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0c2VsZWN0ZWQgPSBbXTtcblx0dG9nZ2xlID0gW107XG5cdGN1c3RvbUNsYXNzO1xuXHRkb2N1bWVudFR5cGU7XG5cdHVwbG9hZFR5cGU7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZm9ybVZhbGlkID0gdHJ1ZTtcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZm9ybS5nZXQodGhpcy5hcnJheUNvbnRyb2xOYW1lKVsnY29udHJvbHMnXS5sZW5ndGg7IGorKykge1xuXHRcdFx0dGhpcy50b2dnbGVbal0gPSBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5zZWxlY3RlZFswXSA9IDA7XG5cdFx0dGhpcy50b2dnbGVbMF0gPSB0cnVlO1xuXHR9XG5cblx0YWN0aXZlKGkpIHtcblx0XHR0aGlzLnNlbGVjdGVkW2ldID0gaTtcblx0XHR0aGlzLnRvZ2dsZVtpXSA9ICF0aGlzLnRvZ2dsZVtpXTtcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZm9ybS5nZXQodGhpcy5hcnJheUNvbnRyb2xOYW1lKVsnY29udHJvbHMnXS5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKGkgIT0gaikge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkW2pdID0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCF0aGlzLnRvZ2dsZVtpXSkge1xuXHRcdFx0dGhpcy5zZWxlY3RlZFtpXSA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5mb3JtLmdldCh0aGlzLmFycmF5Q29udHJvbE5hbWUpWydjb250cm9scyddLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGlmIChpICE9IGopIHtcblx0XHRcdFx0XHR0aGlzLnRvZ2dsZVtqXSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0YWN0aW9uKCkge1xuXHRcdGNvbnN0IGNvbnRyb2xOYW1lID0gdGhpcy5jb250cm9sO1xuXHRcdGlmICh0aGlzLmZvcm0uZ2V0KGNvbnRyb2xOYW1lKS52YWx1ZSkge1xuXHRcdFx0dGhpcy5mb3JtVmFsaWQgPSBmYWxzZTtcblx0XHRcdHRoaXMudmVyaWZ5LmVtaXQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5mb3JtVmFsaWQgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdGNvdW50cnlTZWxlY3RBY3Rpb24odmFsLCBpKSB7XG5cdFx0aWYgKHZhbCkge1xuXHRcdFx0Y29uc3QgZGF0YSA9IHtcblx0XHRcdFx0Y291bnRyeURldGFpbHM6IEpTT04ucGFyc2UodmFsKSxcblx0XHRcdFx0aW5kZXg6IGlcblx0XHRcdH07XG5cdFx0XHR0aGlzLmNvdW50cnlTZWxlY3QuZW1pdChkYXRhKTtcblx0XHR9XG5cdH1cblxuXHRhZ3JlZSgpIHtcblx0XHRjb25zdCBmb3JtRGF0YSA9IHRoaXMuZm9ybS52YWx1ZTtcblx0XHR0aGlzLnN1Ym1pdE93bmVyLmVtaXQoZm9ybURhdGEpO1xuXHR9XG5cblx0ZmlsZXVwbG9hZChlKSB7XG5cdFx0XHRjb25zdCBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzO1xuXHRcdFx0Y29uc3QgbWF4RmlsZVNpemUgPSA5OTk5OTk5O1xuXHRcdFx0bGV0IGN1cnJlbnRGaWxlU2l6ZTtcblx0XHRcdGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcblx0XHRcdGN1cnJlbnRGaWxlU2l6ZSA9IGZpbGUuc2l6ZTtcblx0XHRcdGlmIChjdXJyZW50RmlsZVNpemUgPD0gbWF4RmlsZVNpemUpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGZpbGUudHlwZSA9PSAnaW1hZ2UvanBlZycgfHxcblx0XHRcdFx0XHRmaWxlLnR5cGUgPT0gJ2FwcGxpY2F0aW9uL3BkZicgfHxcblx0XHRcdFx0XHRmaWxlLnR5cGUgPT0gJ2ltYWdlL3BuZycgfHxcblx0XHRcdFx0XHRmaWxlLnR5cGUgPT0gJ2ltYWdlL2pwZydcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0aWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZS50YXJnZXQuZmlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzW2ldO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBkb2NUeXBlID0gdGhpcy51cGxvYWRUeXBlO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBkYXRhID0ge1xuXHRcdFx0XHRcdFx0XHRcdGZpbGU6IGZpbGUsXG5cdFx0XHRcdFx0XHRcdFx0ZG9jdW1lbnRUeXBlOiBkb2NUeXBlXG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdHRoaXMudXBsb2FkLmVtaXQoZGF0YSk7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRGaWxlU2l6ZSA9IGZpbGUuc2l6ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGUudGFyZ2V0LnZhbHVlID0gJyc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc25hY2tiYXIoJ1RoZSBmaWxlIHR5cGUganBnL2pwZWcvcG5nIGZpbGVzIGFyZSBhbGxvd2VkIScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNuYWNrYmFyKCdUaGUgZmlsZSBzaXplIGNhbm5vdCBleGNlZWQgMTAgTUInKTtcblx0XHRcdH1cblx0fVxuXG5cdHNuYWNrYmFyKG1zZykge1xuXHRcdHRoaXMuc25hY2tCYXIub3Blbihtc2csICdjbG9zZScsIHtcblx0XHRcdHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nLFxuXHRcdFx0aG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxuXHRcdFx0ZHVyYXRpb246IDM1MDBcblx0XHR9KTtcblx0fVxufSJdfQ==