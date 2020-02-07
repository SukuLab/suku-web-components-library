/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-add-license-modal/suku-add-license-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
export class SukuAddLicenseModalComponent {
    // @Input('enable-required-validator-for-control-one')
    // set enableRequiredValidatorForControlOne(val) {
    //   if (val) {
    //     this.controlOne.setValidators(Validators.required);
    //     this.controlOne.updateValueAndValidity();
    //   }
    // }
    // @Input('enable-pattern-for-control-one')
    // set enablePatternValidatorsForControlOne(val) {
    //   if (val) {
    //     this.controlOne.setValidators(Validators.pattern(this.dialogData.controlOnePattern));
    //     this.controlOne.updateValueAndValidity();
    //   }
    // }
    // @Input('enable-required-validator-for-control-two')
    // set enableRequiredValidatorForControlTwo(val) {
    //   if (val) {
    //     this.controlTwo.setValidators(Validators.required);
    //     this.controlTwo.updateValueAndValidity();
    //   }
    // }
    // @Input('enable-pattern-for-control-two')
    // set enableRequiredValidatorsForDateControlOne(val) {
    //   if (val) {
    //     this.dateControlOne.setValidators(Validators.required);
    //     this.dateControlOne.updateValueAndValidity();
    //   }
    // }
    // @Input('enable-required-validator-for-dateControl-one')
    // set enableRequiredValidatorForDateControlTwo(val) {
    //   if (val) {
    //     this.dateControlTwo.setValidators(Validators.required);
    //     this.dateControlTwo.updateValueAndValidity();
    //   }
    // }
    /**
     * @param {?} snackBar
     * @param {?} dialogCustomRef
     * @param {?} data
     */
    constructor(snackBar, dialogCustomRef, data) {
        this.snackBar = snackBar;
        this.dialogCustomRef = dialogCustomRef;
        this.data = data;
        this.formSumitAttempt = false;
        this.mulFiles = [];
        this.imagePreviewUrls = [];
        // uploadFiles = []; 
        this.dialogData = {
            controlOne: 'controlOne',
            controlTwo: 'controlTwo',
            dateControlOne: 'dateControlOne',
            dateControlTwo: 'dateControlTwo',
            'controlOnePatternEnabled': '',
            'controlTwoPatternEnabled': '',
            controlOneRequired: '',
            controlTwoRequired: '',
            controlTwoRequiredd: '',
            dateControlOneRequired: '',
            dateControlTwoRequired: '',
            'controlOnePattern': '',
            'controlTwoPattern': '',
            'title': 'Licence and Registration',
            'subTitle': 'Enter your license details here',
            'controlHint': 'Example: 123456789a12345',
            'hintClass': '',
            'headerCutomStyle': '',
            'startDateMaxDate': '',
            'endDateMaxDate': '',
            'startDateMinDate': '',
            'endDateMinDate': '',
            'controlOneId': 'licenseName',
            controlTwoId: 'licenseNumber',
            dateControlOneId: 'startDate',
            dateControlTwoId: 'endDate',
            controlTwoToolTip: 'The format should be 123456789a12345',
            controlOnePlaceholder: 'License Name',
            controlTwoPlaceholder: 'License Number',
            dateControlOnePlaceholder: 'Licence Issue Date',
            dateControlTwoPlaceholder: 'Licence Expiry Date(Optional)',
            controlOneRquiredErrorMsg: 'Cannot be blank.',
            controlTwoRquiredErrorMsg: 'Cannot be blank.',
            controlTwoPatternErrorMsg: 'Invalid Licence number',
            dateControlOneRquiredErrorMsg: 'Cannot be blank.',
            dateControlTwoRquiredErrorMsg: 'Cannot be blank.',
            acceptDocment: 'application/msword, text/plain, application/pdf, image/*',
            uploadImg: 'http://34.217.89.204/assets/images/fileUpload.png',
            uploadTitle: ' Upload Licence',
            fileListTitle: 'Uploaded Documents',
            fileInputId: 'file-input',
            filesArray: [],
            fileRemoveBtnTxt: 'Delete',
            fileRemoveBtnId: 'fileDelete',
            uploadImgAltTxt: '',
            cancelBtnText: 'Cancel',
            submitBtnTxt: 'Add License',
            submitBtnCustomClass: '',
            cancelBtnCustomClass: '',
        };
        this.controlOne = new FormControl('');
        this.controlTwo = new FormControl('');
        this.dateControlOne = new FormControl('');
        this.dateControlTwo = new FormControl('');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        for (const key of Object.keys(this.data)) {
            if (this.data[key]) {
                this.dialogData[key] = this.data[key];
            }
        }
        if (this.dialogData.controlOneRequired) {
            this.controlOne.setValidators(Validators.required);
            this.controlOne.updateValueAndValidity();
        }
        if (this.dialogData.controlTwoRequired) {
            this.controlTwo.setValidators(Validators.required);
            this.controlTwo.updateValueAndValidity();
        }
        if (this.dialogData.dateControlOneRequired) {
            this.dateControlOne.setValidators(Validators.required);
            this.dateControlOne.updateValueAndValidity();
        }
        if (this.dialogData.dateControlTwoRequired) {
            this.dateControlTwo.setValidators(Validators.required);
            this.dateControlTwo.updateValueAndValidity();
        }
        if (this.dialogData.controlTwoPatternEnabled && this.dialogData.controlTwoRequired) {
            this.controlTwo.setValidators([Validators.required, Validators.pattern(this.dialogData.controlTwoPattern)]);
            this.controlTwo.updateValueAndValidity();
        }
        // if (this.dialogData.controlOnePatternEnabled) {
        //   this.controlOne.setValidators(Validators.pattern(this.dialogData.controlOnePattern));
        //   this.controlOne.updateValueAndValidity();
        // }
        console.log('this.dialogData', this.dialogData);
        this._subscriptionOne = this.controlOne.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (value) {
                this.controlOneValue = value;
            }
            else {
                // this.usernameControl.
            }
        }));
        this._subscriptionTwo = this.controlTwo.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (value) {
                this.controlTwoValue = value;
            }
            else {
                // this.usernameControl.
            }
        }));
        this._subscriptionThree = this.dateControlOne.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (value) {
                this.dateControlOneValue = value;
            }
            else {
                // this.usernameControl.
            }
        }));
        this._subscriptionFour = this.dateControlTwo.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (value) {
                this.dateControlTwoValue = value;
            }
            else {
                // this.usernameControl.
            }
        }));
        // this._subscribeFiles = this.getUploadedFiles().subscribe(value => {
        //     if (value) {
        //       this.uploadFiles = value;
        //     } else {
        //       // this.usernameControl.
        //     }
        // })
    }
    /**
     * @return {?}
     */
    addLicense() {
        if (this.controlOne.invalid || this.controlTwo.invalid ||
            this.dateControlOne.invalid || this.dateControlTwo.invalid) {
            this.snackBar.open('Please fill all the mandatory fields.', 'close', {
                verticalPosition: 'top',
                horizontalPosition: 'right',
                duration: 5000
            });
        }
        else {
            /** @type {?} */
            let reqObj = {
                license: {
                    licenseName: this.controlOneValue,
                    licenseNumber: this.controlTwoValue,
                    startDate: this.dateControlOneValue,
                    endDate: this.dateControlTwoValue,
                    files: this.mulFiles
                }
            };
            this.dialogCustomRef.close(reqObj);
        }
    }
    /**
     * @return {?}
     */
    closeDialog() {
        this.dialogCustomRef.close(false);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    startUpload(e) {
        /** @type {?} */
        let maxFileSize = 10097152;
        /** @type {?} */
        let currentFileSize;
        if (e.target.files && e.target.files.length > 0) {
            for (var i = 0; i < e.target.files.length; i++) {
                /** @type {?} */
                let file = e.target.files[i];
                currentFileSize = file.size;
                console.log('file.type', file.type);
                if (currentFileSize <= maxFileSize &&
                    (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg' || file.type == '.pdf' ||
                        file.type == 'application/rtf' || file.type == 'application/msword' ||
                        file.type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.type == 'application/pdf')) {
                    this.mulFiles.push(e.target.files[i]);
                    /** @type {?} */
                    let reader = new FileReader();
                    reader.onload = (/**
                     * @param {?} e
                     * @return {?}
                     */
                    (e) => {
                        this.imagePreviewUrls.push({ file: e.target.result, name: file.name });
                    });
                    reader.readAsDataURL(file);
                }
                else {
                    this.snackBar.open('Upload Word, Image or PDF format of your License, Size should be below 10MB.', 'close', {
                        verticalPosition: 'top',
                        horizontalPosition: 'right',
                        duration: 5000
                    });
                }
            }
        }
    }
    /**
     * @param {?} param
     * @return {?}
     */
    removeFile(param) {
        this.mulFiles.splice(param, 1);
        console.log('param', param);
        this.imagePreviewUrls.splice(param, 1);
        console.log('param url', param);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    downloadDoc(file) {
        console.log("this si what i am doing ", file);
        /** @type {?} */
        const name = file.name;
        /** @type {?} */
        const uri = file.file;
        /** @type {?} */
        const downloadLink = document.createElement("a");
        downloadLink.href = uri;
        downloadLink.download = name;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
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
SukuAddLicenseModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-add-license-modal',
                template: " <div>\n    <div class=\"col-sm-12  card-header {{ dialogData?.headerCutomStyle }}\">\n        <div class=\"col-sm-12\">\n          <h1 class=\"headerFont\">{{dialogData?.title}}</h1>\n          <p>{{dialogData?.subTitle}}</p>\n        </div>\n      </div>\n      <div class=\"modal-body col-sm-12\">\n          <div>\n          \t  <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\"\n              dialogData-parent=\"#accordionExample\">\n              <div>\n                <div class=\"pL\">\n                <div class=\"col-sm-12 mT-7\">\n                  <div class=\"row\">\n                    <mat-form-field class=\"col-sm-6\">\n                        <input matInput placeholder=\"{{ dialogData?.controlOnePlaceholder }}\"  [formControl]=\"controlOne\" name=\"{{dialogData?.controlOne}}\" id=\"{{ dialogData?.controlOneId }}\">\n                        <mat-error *ngIf=\"controlOne.hasError('required')\">\n                            {{ dialogData?.controlOneRquiredErrorMsg }}\n                          </mat-error>\n                    </mat-form-field>\n                    <div class=\"col-sm-6 p-0\">\n                    <mat-form-field class=\"col-12 \">\n                      <input matInput placeholder=\"{{dialogData?.controlTwoPlaceholder}}\" \n                        [formControl]=\"controlTwo\" id=\"{{ dialogData?.controlTwoId }}\"\n                        name=\"{{dialogData?.controlTwo}}\" #tooltip=\"matTooltip\"\n                        matTooltip=\"{{ dialogData?.controlTwoToolTip }}\">\n                      <mat-error *ngIf=\"controlTwo.hasError('required')\">\n                          \t{{ dialogData?.controlTwoRquiredErrorMsg }}\n                      </mat-error>\n                      <mat-error *ngIf=\"controlTwo.hasError('pattern')\">\n                            {{ dialogData?.controlTwoPatternErrorMsg }}\n                      </mat-error>\n                    </mat-form-field>\n                    <div >\n                    <p class=\"pl-4 {{ dialogData?.hintClass }}\">{{ dialogData?.controlHint }}</p>\n                  </div>\n                  </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 mT-7\">\n                  <div class=\"row\">\n                    <mat-form-field  class=\"col-sm-6\">\n                      <mat-label>{{ dialogData?.dateControlOnePlaceholder }}</mat-label>\n                      <input matInput [matDatepicker]=\"picker1\" [formControl]=\"dateControlOne\" \n                       id=\"{{ dialogData?.dateControlOneId }}\"   #checkin1 name=\"{{ dialogData?.dateControlOne }}\" [min]=\"dialogData?.startDateMinDate\"  [max]=\"dialogData?.startDateMaxDate\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker1></mat-datepicker>\n                      <mat-error *ngIf=\"dateControlOne.hasError('required')\">\n                            {{ dialogData?.dateControlOneRquiredErrorMsg }}\n                      </mat-error>\n                    </mat-form-field>\n                    <mat-form-field  class=\"col-sm-6\">\n                      <mat-label>{{ dialogData?.dateControlTwoPlaceholder }}</mat-label>\n                      <input matInput [matDatepicker]=\"picker2\" id=\"{{ dialogData?.dateControlTwoId }}\" name=\"{{dialogData?.dateControlTwo}}\"\n                        #checkout1 [formControl]=\"dateControlTwo\"   [min]=\"dialogData?.endDateMinDate\" [max]=\"dialogData?.endDateMaxDate\" >\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker2 color=\"primary\"></mat-datepicker>\n                      <mat-error *ngIf=\"dateControlTwo.hasError('required')\">\n                            {{ dialogData?.dateControlTwoRquiredErrorMsg }}\n                      </mat-error>\n                    </mat-form-field>                           \n                    <div class=\"col-sm-12 pL\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                       <aside >{{ dialogData?.uploadTitle }}</aside>\n                         <div class=\" form-group\">\n                          <input   #fileInput (change)=\"startUpload($event);\"\n                           accept=\"{{ dialogData?.acceptDocment }}\"  id=\"{{ dialogData?.fileInputId }}\"\n                            type=\"file\" style=\"display: none\" />\n                        </div>\n                        <div class=\"bT text-center\">\n                        <a (click)=\"fileInput.click()\"><img [src]=\"dialogData?.uploadImg\" alt=\"{{ dialogData?.uploadImgAltTxt }}\" \n                          width=\"90px\" height=\"100px\"></a>\n                      </div>\n                      </div>\n                      <div class=\"col-sm-9\">\n                      <aside>{{ dialogData?.fileListTitle }}</aside>\n                        <mat-chip-list>\n                          <mat-chip class=\"whiteSpace\" *ngFor=\"let file of imagePreviewUrls;let docIndex = index;\"> <br>\n                            <mat-icon matChipRemove (click)=\"downloadDoc(file)\" matTooltip=\"Download\">\n                                save_alt\n                              </mat-icon>\n                            <mat-icon  id=\"{{ dialogData?.fileRemoveBtnId }}\" matChipRemove matTooltip=\"Delete\" (click)=\"removeFile(docIndex)\">clear\n                            </mat-icon>\n                            <span> {{file.name}}</span>\n                          </mat-chip>\n                        </mat-chip-list>\n                      </div>\n                     </div>\n                  </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div>\n          </div>\n          <div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 mt-5 mb-5\">\n          <div class=\"row  d-flex justify-content-around\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-end\n            mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2\">\n                <button  type=\"button\" (click)=\"closeDialog()\"\n                  class=\"btn btn-secondary btn-default btn-lg col-lg-6 col-md-6 {{ dialogData?.cancelBtnCustomClass }}\">{{ dialogData?.cancelBtnText }}</button>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n                <button type=\"button\" class=\"btn btn-info btn btn-info btn-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 {{ dialogData?.submitBtnCustomClass }}\" (click)=\"addLicense();\">{{ dialogData?.submitBtnTxt }}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n </div>\n",
                styles: [".btn-info{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000}.headerFont{font-family:Poppins,sans-serif;letter-spacing:0;margin-top:8px;color:#aba4a4e0;font-size:2.5rem}.pointer{cursor:pointer}.bT{border:2px solid #e6e1e18c!important;background-color:#f7f3f354!important;margin-right:24px}.card-header{background-color:#272727;box-shadow:0 1px 1px rgba(0,0,0,.5);color:#fff}.licNum{position:absolute;top:44px;right:267px;font-size:12px;margin-left:50px;color:#000000ad;font-family:'Encode Sans',sans-serif!important}::ng-deep mat-dialog-container{padding:0!important;overflow:hidden!important}:host ::ng-deep mat-dialog-content{max-height:91%!important;overflow-y:none!important;margin:0!important;height:100%!important}:host ::ng-deep mat-dialog-actions{margin:5px 10px!important}.btn-default{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#fff;color:#000}.btn-default:hover{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#757575;color:#fff}.btn-default:click{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#757575!important;color:#fff}.btn-default:active{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#757575;color:#fff}.bgWhite{background-color:#fff!important}.btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info:click{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e!important;color:#fff}.btn-info:active{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:grey}.whiteSpace{white-space:nowrap}"]
            }] }
];
/** @nocollapse */
SukuAddLicenseModalComponent.ctorParameters = () => [
    { type: MatSnackBar },
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
SukuAddLicenseModalComponent.propDecorators = {
    dialogData: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuAddLicenseModalComponent.prototype.formSumitAttempt;
    /** @type {?} */
    SukuAddLicenseModalComponent.prototype._subscriptionOne;
    /** @type {?} */
    SukuAddLicenseModalComponent.prototype._subscriptionTwo;
    /** @type {?} */
    SukuAddLicenseModalComponent.prototype._subscriptionThree;
    /** @type {?} */
    SukuAddLicenseModalComponent.prototype._subscriptionFour;
    /** @type {?} */
    SukuAddLicenseModalComponent.prototype._subscribeFiles;
    /** @type {?} */
    SukuAddLicenseModalComponent.prototype.controlOneValue;
    /** @type {?} */
    SukuAddLicenseModalComponent.prototype.controlTwoValue;
    /** @type {?} */
    SukuAddLicenseModalComponent.prototype.dateControlOneValue;
    /** @type {?} */
    SukuAddLicenseModalComponent.prototype.dateControlTwoValue;
    /** @type {?} */
    SukuAddLicenseModalComponent.prototype.mulFiles;
    /** @type {?} */
    SukuAddLicenseModalComponent.prototype.imagePreviewUrls;
    /** @type {?} */
    SukuAddLicenseModalComponent.prototype.uploadFiles;
    /** @type {?} */
    SukuAddLicenseModalComponent.prototype.dialogData;
    /** @type {?} */
    SukuAddLicenseModalComponent.prototype.controlOne;
    /** @type {?} */
    SukuAddLicenseModalComponent.prototype.controlTwo;
    /** @type {?} */
    SukuAddLicenseModalComponent.prototype.dateControlOne;
    /** @type {?} */
    SukuAddLicenseModalComponent.prototype.dateControlTwo;
    /**
     * @type {?}
     * @private
     */
    SukuAddLicenseModalComponent.prototype.snackBar;
    /** @type {?} */
    SukuAddLicenseModalComponent.prototype.dialogCustomRef;
    /** @type {?} */
    SukuAddLicenseModalComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtbGljZW5zZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hZGQtbGljZW5zZS1tb2RhbC9zdWt1LWFkZC1saWNlbnNlLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWtCLEtBQUssRUFBZ0IsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFVL0UsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE0R3ZDLFlBQW9CLFFBQXFCLEVBQVMsZUFBMkQsRUFDM0UsSUFBUztRQUR2QixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQVMsb0JBQWUsR0FBZixlQUFlLENBQTRDO1FBQzNFLFNBQUksR0FBSixJQUFJLENBQUs7UUE1RzNDLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQVV6QixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QscUJBQWdCLEdBQUcsRUFBRSxDQUFDOztRQUliLGVBQVUsR0FBRztZQUNwQixVQUFVLEVBQUUsWUFBWTtZQUN4QixVQUFVLEVBQUUsWUFBWTtZQUN4QixjQUFjLEVBQUUsZ0JBQWdCO1lBQ2hDLGNBQWMsRUFBRSxnQkFBZ0I7WUFDaEMsMEJBQTBCLEVBQUUsRUFBRTtZQUM5QiwwQkFBMEIsRUFBRSxFQUFFO1lBQzlCLGtCQUFrQixFQUFFLEVBQUU7WUFDdEIsa0JBQWtCLEVBQUUsRUFBRTtZQUN0QixtQkFBbUIsRUFBRSxFQUFFO1lBQ3ZCLHNCQUFzQixFQUFFLEVBQUU7WUFDMUIsc0JBQXNC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bnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEsIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuLy8gaW1wb3J0IHsgU3VrdU1vZGFsU2VydmljZSB9IGZyb20gJy4uL3N1a3UtbW9kYWwvc3VrdS1tb2RhbC5zZXJ2aWNlJ1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWFkZC1saWNlbnNlLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtYWRkLWxpY2Vuc2UtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWFkZC1saWNlbnNlLW1vZGFsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTdWt1QWRkTGljZW5zZU1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybVN1bWl0QXR0ZW1wdCA9IGZhbHNlO1xuICBfc3Vic2NyaXB0aW9uT25lO1xuICBfc3Vic2NyaXB0aW9uVHdvO1xuICBfc3Vic2NyaXB0aW9uVGhyZWU7XG4gIF9zdWJzY3JpcHRpb25Gb3VyO1xuICBfc3Vic2NyaWJlRmlsZXM7XG4gIGNvbnRyb2xPbmVWYWx1ZTtcbiAgY29udHJvbFR3b1ZhbHVlO1xuICBkYXRlQ29udHJvbE9uZVZhbHVlO1xuICBkYXRlQ29udHJvbFR3b1ZhbHVlO1xuICBtdWxGaWxlcyA9IFtdO1xuICBpbWFnZVByZXZpZXdVcmxzID0gW107XG4gIHVwbG9hZEZpbGVzOiBhbnlbXTtcbiAgLy8gdXBsb2FkRmlsZXMgPSBbXTsgXG5cbiAgQElucHV0KCkgZGlhbG9nRGF0YSA9IHtcbiAgICBjb250cm9sT25lOiAnY29udHJvbE9uZScsXG4gICAgY29udHJvbFR3bzogJ2NvbnRyb2xUd28nLFxuICAgIGRhdGVDb250cm9sT25lOiAnZGF0ZUNvbnRyb2xPbmUnLFxuICAgIGRhdGVDb250cm9sVHdvOiAnZGF0ZUNvbnRyb2xUd28nLFxuICAgICdjb250cm9sT25lUGF0dGVybkVuYWJsZWQnOiAnJyxcbiAgICAnY29udHJvbFR3b1BhdHRlcm5FbmFibGVkJzogJycsXG4gICAgY29udHJvbE9uZVJlcXVpcmVkOiAnJyxcbiAgICBjb250cm9sVHdvUmVxdWlyZWQ6ICcnLFxuICAgIGNvbnRyb2xUd29SZXF1aXJlZGQ6ICcnLFxuICAgIGRhdGVDb250cm9sT25lUmVxdWlyZWQ6ICcnLFxuICAgIGRhdGVDb250cm9sVHdvUmVxdWlyZWQ6ICcnLFxuICAgICdjb250cm9sT25lUGF0dGVybic6ICcnLFxuICAgICdjb250cm9sVHdvUGF0dGVybic6ICcnLFxuICAgICd0aXRsZSc6ICdMaWNlbmNlIGFuZCBSZWdpc3RyYXRpb24nLFxuICAgICdzdWJUaXRsZSc6ICdFbnRlciB5b3VyIGxpY2Vuc2UgZGV0YWlscyBoZXJlJyxcbiAgICAnY29udHJvbEhpbnQnOiAnRXhhbXBsZTogMTIzNDU2Nzg5YTEyMzQ1JyxcbiAgICAnaGludENsYXNzJzogJycsXG4gICAgJ2hlYWRlckN1dG9tU3R5bGUnOiAnJyxcbiAgICAnc3RhcnREYXRlTWF4RGF0ZSc6ICcnLFxuICAgICdlbmREYXRlTWF4RGF0ZSc6ICcnLFxuICAgICdzdGFydERhdGVNaW5EYXRlJzogJycsXG4gICAgJ2VuZERhdGVNaW5EYXRlJzogJycsXG4gICAgJ2NvbnRyb2xPbmVJZCc6ICdsaWNlbnNlTmFtZScsXG4gICAgY29udHJvbFR3b0lkOiAnbGljZW5zZU51bWJlcicsXG4gICAgZGF0ZUNvbnRyb2xPbmVJZDogJ3N0YXJ0RGF0ZScsXG4gICAgZGF0ZUNvbnRyb2xUd29JZDogJ2VuZERhdGUnLFxuICAgIGNvbnRyb2xUd29Ub29sVGlwOiAnVGhlIGZvcm1hdCBzaG91bGQgYmUgMTIzNDU2Nzg5YTEyMzQ1JyxcbiAgICBjb250cm9sT25lUGxhY2Vob2xkZXI6ICdMaWNlbnNlIE5hbWUnLFxuICAgIGNvbnRyb2xUd29QbGFjZWhvbGRlcjogJ0xpY2Vuc2UgTnVtYmVyJyxcbiAgICBkYXRlQ29udHJvbE9uZVBsYWNlaG9sZGVyOiAnTGljZW5jZSBJc3N1ZSBEYXRlJyxcbiAgICBkYXRlQ29udHJvbFR3b1BsYWNlaG9sZGVyOiAnTGljZW5jZSBFeHBpcnkgRGF0ZShPcHRpb25hbCknLFxuICAgIGNvbnRyb2xPbmVScXVpcmVkRXJyb3JNc2c6ICdDYW5ub3QgYmUgYmxhbmsuJyxcbiAgICBjb250cm9sVHdvUnF1aXJlZEVycm9yTXNnOiAnQ2Fubm90IGJlIGJsYW5rLicsXG4gICAgY29udHJvbFR3b1BhdHRlcm5FcnJvck1zZzogJ0ludmFsaWQgTGljZW5jZSBudW1iZXInLFxuICAgIGRhdGVDb250cm9sT25lUnF1aXJlZEVycm9yTXNnOiAnQ2Fubm90IGJlIGJsYW5rLicsXG4gICAgZGF0ZUNvbnRyb2xUd29ScXVpcmVkRXJyb3JNc2c6ICdDYW5ub3QgYmUgYmxhbmsuJyxcbiAgICBhY2NlcHREb2NtZW50OiAnYXBwbGljYXRpb24vbXN3b3JkLCB0ZXh0L3BsYWluLCBhcHBsaWNhdGlvbi9wZGYsIGltYWdlLyonLFxuICAgIHVwbG9hZEltZzogJ2h0dHA6Ly8zNC4yMTcuODkuMjA0L2Fzc2V0cy9pbWFnZXMvZmlsZVVwbG9hZC5wbmcnLFxuICAgIHVwbG9hZFRpdGxlOiAnIFVwbG9hZCBMaWNlbmNlJyxcbiAgICBmaWxlTGlzdFRpdGxlOiAnVXBsb2FkZWQgRG9jdW1lbnRzJyxcbiAgICBmaWxlSW5wdXRJZDogJ2ZpbGUtaW5wdXQnLFxuICAgIGZpbGVzQXJyYXk6IFtdLFxuICAgIGZpbGVSZW1vdmVCdG5UeHQ6ICdEZWxldGUnLFxuICAgIGZpbGVSZW1vdmVCdG5JZDogJ2ZpbGVEZWxldGUnLFxuICAgIHVwbG9hZEltZ0FsdFR4dDogJycsXG4gICAgY2FuY2VsQnRuVGV4dDogJ0NhbmNlbCcsXG4gICAgc3VibWl0QnRuVHh0OiAnQWRkIExpY2Vuc2UnLFxuICAgIHN1Ym1pdEJ0bkN1c3RvbUNsYXNzOiAnJyxcbiAgICBjYW5jZWxCdG5DdXN0b21DbGFzczogJycsXG5cbiAgfVxuXG4gIGNvbnRyb2xPbmUgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICBjb250cm9sVHdvID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgZGF0ZUNvbnRyb2xPbmUgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICBkYXRlQ29udHJvbFR3byA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIC8vIEBJbnB1dCgnZW5hYmxlLXJlcXVpcmVkLXZhbGlkYXRvci1mb3ItY29udHJvbC1vbmUnKVxuICAvLyBzZXQgZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3JGb3JDb250cm9sT25lKHZhbCkge1xuICAvLyAgIGlmICh2YWwpIHtcbiAgLy8gICAgIHRoaXMuY29udHJvbE9uZS5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAvLyAgICAgdGhpcy5jb250cm9sT25lLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy8gQElucHV0KCdlbmFibGUtcGF0dGVybi1mb3ItY29udHJvbC1vbmUnKVxuICAvLyBzZXQgZW5hYmxlUGF0dGVyblZhbGlkYXRvcnNGb3JDb250cm9sT25lKHZhbCkge1xuICAvLyAgIGlmICh2YWwpIHtcbiAgLy8gICAgIHRoaXMuY29udHJvbE9uZS5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucGF0dGVybih0aGlzLmRpYWxvZ0RhdGEuY29udHJvbE9uZVBhdHRlcm4pKTtcbiAgLy8gICAgIHRoaXMuY29udHJvbE9uZS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vIEBJbnB1dCgnZW5hYmxlLXJlcXVpcmVkLXZhbGlkYXRvci1mb3ItY29udHJvbC10d28nKVxuICAvLyBzZXQgZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3JGb3JDb250cm9sVHdvKHZhbCkge1xuICAvLyAgIGlmICh2YWwpIHtcbiAgLy8gICAgIHRoaXMuY29udHJvbFR3by5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAvLyAgICAgdGhpcy5jb250cm9sVHdvLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy8gQElucHV0KCdlbmFibGUtcGF0dGVybi1mb3ItY29udHJvbC10d28nKVxuICAvLyBzZXQgZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3JzRm9yRGF0ZUNvbnRyb2xPbmUodmFsKSB7XG4gIC8vICAgaWYgKHZhbCkge1xuICAvLyAgICAgdGhpcy5kYXRlQ29udHJvbE9uZS5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAvLyAgICAgdGhpcy5kYXRlQ29udHJvbE9uZS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vIEBJbnB1dCgnZW5hYmxlLXJlcXVpcmVkLXZhbGlkYXRvci1mb3ItZGF0ZUNvbnRyb2wtb25lJylcbiAgLy8gc2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yRm9yRGF0ZUNvbnRyb2xUd28odmFsKSB7XG4gIC8vICAgaWYgKHZhbCkge1xuICAvLyAgICAgdGhpcy5kYXRlQ29udHJvbFR3by5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAvLyAgICAgdGhpcy5kYXRlQ29udHJvbFR3by51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gIC8vICAgfVxuICAvLyB9XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyLCBwdWJsaWMgZGlhbG9nQ3VzdG9tUmVmOiBNYXREaWFsb2dSZWY8U3VrdUFkZExpY2Vuc2VNb2RhbENvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnksXG4gICAgLy8gcHVibGljIHN1a3VNb2RhbFNlcnZpY2U6IER5bmFtaWNEYXRhXG4gICkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLmRhdGEpKSB7XG4gICAgICBpZiAodGhpcy5kYXRhW2tleV0pIHtcbiAgICAgICAgdGhpcy5kaWFsb2dEYXRhW2tleV0gPSB0aGlzLmRhdGFba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5kaWFsb2dEYXRhLmNvbnRyb2xPbmVSZXF1aXJlZCkge1xuICAgICAgdGhpcy5jb250cm9sT25lLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICB0aGlzLmNvbnRyb2xPbmUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRpYWxvZ0RhdGEuY29udHJvbFR3b1JlcXVpcmVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2xUd28uc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgIHRoaXMuY29udHJvbFR3by51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlhbG9nRGF0YS5kYXRlQ29udHJvbE9uZVJlcXVpcmVkKSB7XG4gICAgICB0aGlzLmRhdGVDb250cm9sT25lLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICB0aGlzLmRhdGVDb250cm9sT25lLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kaWFsb2dEYXRhLmRhdGVDb250cm9sVHdvUmVxdWlyZWQpIHtcbiAgICAgIHRoaXMuZGF0ZUNvbnRyb2xUd28uc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgIHRoaXMuZGF0ZUNvbnRyb2xUd28udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRpYWxvZ0RhdGEuY29udHJvbFR3b1BhdHRlcm5FbmFibGVkICYmIHRoaXMuZGlhbG9nRGF0YS5jb250cm9sVHdvUmVxdWlyZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbFR3by5zZXRWYWxpZGF0b3JzKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5kaWFsb2dEYXRhLmNvbnRyb2xUd29QYXR0ZXJuKV0pO1xuICAgICAgdGhpcy5jb250cm9sVHdvLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG5cbiAgICAvLyBpZiAodGhpcy5kaWFsb2dEYXRhLmNvbnRyb2xPbmVQYXR0ZXJuRW5hYmxlZCkge1xuICAgIC8vICAgdGhpcy5jb250cm9sT25lLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5wYXR0ZXJuKHRoaXMuZGlhbG9nRGF0YS5jb250cm9sT25lUGF0dGVybikpO1xuICAgIC8vICAgdGhpcy5jb250cm9sT25lLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAvLyB9XG5cbiAgICBjb25zb2xlLmxvZygndGhpcy5kaWFsb2dEYXRhJywgdGhpcy5kaWFsb2dEYXRhKTtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25PbmUgPSB0aGlzLmNvbnRyb2xPbmUudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb250cm9sT25lVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoaXMudXNlcm5hbWVDb250cm9sLlxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLl9zdWJzY3JpcHRpb25Ud28gPSB0aGlzLmNvbnRyb2xUd28udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb250cm9sVHdvVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoaXMudXNlcm5hbWVDb250cm9sLlxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLl9zdWJzY3JpcHRpb25UaHJlZSA9IHRoaXMuZGF0ZUNvbnRyb2xPbmUudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5kYXRlQ29udHJvbE9uZVZhbHVlID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGlzLnVzZXJuYW1lQ29udHJvbC5cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uRm91ciA9IHRoaXMuZGF0ZUNvbnRyb2xUd28udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5kYXRlQ29udHJvbFR3b1ZhbHVlID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGlzLnVzZXJuYW1lQ29udHJvbC5cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gdGhpcy5fc3Vic2NyaWJlRmlsZXMgPSB0aGlzLmdldFVwbG9hZGVkRmlsZXMoKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgIC8vICAgICBpZiAodmFsdWUpIHtcbiAgICAvLyAgICAgICB0aGlzLnVwbG9hZEZpbGVzID0gdmFsdWU7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgLy8gdGhpcy51c2VybmFtZUNvbnRyb2wuXG4gICAgLy8gICAgIH1cbiAgICAvLyB9KVxuICB9XG5cbiAgYWRkTGljZW5zZSgpIHtcbiAgICBpZiAodGhpcy5jb250cm9sT25lLmludmFsaWQgfHwgdGhpcy5jb250cm9sVHdvLmludmFsaWQgfHxcbiAgICAgIHRoaXMuZGF0ZUNvbnRyb2xPbmUuaW52YWxpZCB8fCB0aGlzLmRhdGVDb250cm9sVHdvLmludmFsaWQpIHtcbiAgICAgIHRoaXMuc25hY2tCYXIub3BlbignUGxlYXNlIGZpbGwgYWxsIHRoZSBtYW5kYXRvcnkgZmllbGRzLicsICdjbG9zZScsIHtcbiAgICAgICAgdmVydGljYWxQb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgIGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgZHVyYXRpb246IDUwMDBcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcmVxT2JqID0ge1xuICAgICAgICBsaWNlbnNlOiB7XG4gICAgICAgICAgbGljZW5zZU5hbWU6IHRoaXMuY29udHJvbE9uZVZhbHVlLFxuICAgICAgICAgIGxpY2Vuc2VOdW1iZXI6IHRoaXMuY29udHJvbFR3b1ZhbHVlLFxuICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5kYXRlQ29udHJvbE9uZVZhbHVlLFxuICAgICAgICAgIGVuZERhdGU6IHRoaXMuZGF0ZUNvbnRyb2xUd29WYWx1ZSxcbiAgICAgICAgICBmaWxlczogdGhpcy5tdWxGaWxlc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmRpYWxvZ0N1c3RvbVJlZi5jbG9zZShyZXFPYmopO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlRGlhbG9nKCkge1xuICAgIHRoaXMuZGlhbG9nQ3VzdG9tUmVmLmNsb3NlKGZhbHNlKTtcbiAgfVxuXG4gIHN0YXJ0VXBsb2FkKGUpIHtcbiAgICBsZXQgbWF4RmlsZVNpemUgPSAxMDA5NzE1MjtcbiAgICBsZXQgY3VycmVudEZpbGVTaXplO1xuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGUudGFyZ2V0LmZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbaV07XG4gICAgICAgIGN1cnJlbnRGaWxlU2l6ZSA9IGZpbGUuc2l6ZTtcbiAgICAgICAgY29uc29sZS5sb2coJ2ZpbGUudHlwZScsIGZpbGUudHlwZSlcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGN1cnJlbnRGaWxlU2l6ZSA8PSBtYXhGaWxlU2l6ZSAmJlxuICAgICAgICAgIChmaWxlLnR5cGUgPT0gJ2ltYWdlL2pwZWcnIHx8IGZpbGUudHlwZSA9PSAnaW1hZ2UvcG5nJyB8fCBmaWxlLnR5cGUgPT0gJ2ltYWdlL2pwZycgfHwgZmlsZS50eXBlID09ICcucGRmJyB8fFxuICAgICAgICAgICAgZmlsZS50eXBlID09ICdhcHBsaWNhdGlvbi9ydGYnIHx8IGZpbGUudHlwZSA9PSAnYXBwbGljYXRpb24vbXN3b3JkJyB8fFxuICAgICAgICAgICAgZmlsZS50eXBlID09ICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCcgfHwgZmlsZS50eXBlID09ICdhcHBsaWNhdGlvbi9wZGYnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLm11bEZpbGVzLnB1c2goZS50YXJnZXQuZmlsZXNbaV0pO1xuICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmltYWdlUHJldmlld1VybHMucHVzaCh7IGZpbGU6IGUudGFyZ2V0LnJlc3VsdCwgbmFtZTogZmlsZS5uYW1lIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNuYWNrQmFyLm9wZW4oJ1VwbG9hZCBXb3JkLCBJbWFnZSBvciBQREYgZm9ybWF0IG9mIHlvdXIgTGljZW5zZSwgU2l6ZSBzaG91bGQgYmUgYmVsb3cgMTBNQi4nLCAnY2xvc2UnLCB7XG4gICAgICAgICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgICAgIGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUZpbGUocGFyYW0pIHtcbiAgICB0aGlzLm11bEZpbGVzLnNwbGljZShwYXJhbSwgMSlcbiAgICBjb25zb2xlLmxvZygncGFyYW0nLCBwYXJhbSlcbiAgICB0aGlzLmltYWdlUHJldmlld1VybHMuc3BsaWNlKHBhcmFtLCAxKVxuICAgIGNvbnNvbGUubG9nKCdwYXJhbSB1cmwnLCBwYXJhbSlcbiAgfVxuXG4gIGRvd25sb2FkRG9jKGZpbGUpIHtcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgc2kgd2hhdCBpIGFtIGRvaW5nIFwiLCBmaWxlKTtcbiAgICBjb25zdCBuYW1lID0gZmlsZS5uYW1lO1xuICAgIGNvbnN0IHVyaSA9IGZpbGUuZmlsZTtcbiAgICBjb25zdCBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBkb3dubG9hZExpbmsuaHJlZiA9IHVyaTtcbiAgICBkb3dubG9hZExpbmsuZG93bmxvYWQgPSBuYW1lO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG93bmxvYWRMaW5rKTtcbiAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvd25sb2FkTGluayk7XG4gIH1cblxuICBzbmFja2Jhcihtc2cpIHtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW4obXNnLCAnY2xvc2UnLCB7XG4gICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgIGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgIGR1cmF0aW9uOiAzNTAwXG4gICAgfSk7XG4gIH1cblxufVxuIl19