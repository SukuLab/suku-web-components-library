/**
 * @fileoverview added by tsickle
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
                template: " <div>\r\n    <div class=\"col-sm-12  card-header {{ dialogData?.headerCutomStyle }}\">\r\n        <div class=\"col-sm-12\">\r\n          <h1 class=\"headerFont\">{{dialogData?.title}}</h1>\r\n          <p>{{dialogData?.subTitle}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-body col-sm-12\">\r\n          <div>\r\n          \t  <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\"\r\n              dialogData-parent=\"#accordionExample\">\r\n              <div>\r\n                <div class=\"pL\">\r\n                <div class=\"col-sm-12 mT-7\">\r\n                  <div class=\"row\">\r\n                    <mat-form-field class=\"col-sm-6\">\r\n                        <input matInput placeholder=\"{{ dialogData?.controlOnePlaceholder }}\"  [formControl]=\"controlOne\" name=\"{{dialogData?.controlOne}}\" id=\"{{ dialogData?.controlOneId }}\">\r\n                        <mat-error *ngIf=\"controlOne.hasError('required')\">\r\n                            {{ dialogData?.controlOneRquiredErrorMsg }}\r\n                          </mat-error>\r\n                    </mat-form-field>\r\n                    <div class=\"col-sm-6 p-0\">\r\n                    <mat-form-field class=\"col-12 \">\r\n                      <input matInput placeholder=\"{{dialogData?.controlTwoPlaceholder}}\" \r\n                        [formControl]=\"controlTwo\" id=\"{{ dialogData?.controlTwoId }}\"\r\n                        name=\"{{dialogData?.controlTwo}}\" #tooltip=\"matTooltip\"\r\n                        matTooltip=\"{{ dialogData?.controlTwoToolTip }}\">\r\n                      <mat-error *ngIf=\"controlTwo.hasError('required')\">\r\n                          \t{{ dialogData?.controlTwoRquiredErrorMsg }}\r\n                      </mat-error>\r\n                      <mat-error *ngIf=\"controlTwo.hasError('pattern')\">\r\n                            {{ dialogData?.controlTwoPatternErrorMsg }}\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                    <div >\r\n                    <p class=\"pl-4 {{ dialogData?.hintClass }}\">{{ dialogData?.controlHint }}</p>\r\n                  </div>\r\n                  </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12 mT-7\">\r\n                  <div class=\"row\">\r\n                    <mat-form-field  class=\"col-sm-6\">\r\n                      <mat-label>{{ dialogData?.dateControlOnePlaceholder }}</mat-label>\r\n                      <input matInput [matDatepicker]=\"picker1\" [formControl]=\"dateControlOne\" \r\n                       id=\"{{ dialogData?.dateControlOneId }}\"   #checkin1 name=\"{{ dialogData?.dateControlOne }}\" [min]=\"dialogData?.startDateMinDate\"  [max]=\"dialogData?.startDateMaxDate\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker1></mat-datepicker>\r\n                      <mat-error *ngIf=\"dateControlOne.hasError('required')\">\r\n                            {{ dialogData?.dateControlOneRquiredErrorMsg }}\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                    <mat-form-field  class=\"col-sm-6\">\r\n                      <mat-label>{{ dialogData?.dateControlTwoPlaceholder }}</mat-label>\r\n                      <input matInput [matDatepicker]=\"picker2\" id=\"{{ dialogData?.dateControlTwoId }}\" name=\"{{dialogData?.dateControlTwo}}\"\r\n                        #checkout1 [formControl]=\"dateControlTwo\"   [min]=\"dialogData?.endDateMinDate\" [max]=\"dialogData?.endDateMaxDate\" >\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker2 color=\"primary\"></mat-datepicker>\r\n                      <mat-error *ngIf=\"dateControlTwo.hasError('required')\">\r\n                            {{ dialogData?.dateControlTwoRquiredErrorMsg }}\r\n                      </mat-error>\r\n                    </mat-form-field>                           \r\n                    <div class=\"col-sm-12 pL\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n                       <aside >{{ dialogData?.uploadTitle }}</aside>\r\n                         <div class=\" form-group\">\r\n                          <input   #fileInput (change)=\"startUpload($event);\"\r\n                           accept=\"{{ dialogData?.acceptDocment }}\"  id=\"{{ dialogData?.fileInputId }}\"\r\n                            type=\"file\" style=\"display: none\" />\r\n                        </div>\r\n                        <div class=\"bT text-center\">\r\n                        <a (click)=\"fileInput.click()\"><img [src]=\"dialogData?.uploadImg\" alt=\"{{ dialogData?.uploadImgAltTxt }}\" \r\n                          width=\"90px\" height=\"100px\"></a>\r\n                      </div>\r\n                      </div>\r\n                      <div class=\"col-sm-9\">\r\n                      <aside>{{ dialogData?.fileListTitle }}</aside>\r\n                        <mat-chip-list>\r\n                          <mat-chip class=\"whiteSpace\" *ngFor=\"let file of imagePreviewUrls;let docIndex = index;\"> <br>\r\n                            <mat-icon matChipRemove (click)=\"downloadDoc(file)\" matTooltip=\"Download\">\r\n                                save_alt\r\n                              </mat-icon>\r\n                            <mat-icon  id=\"{{ dialogData?.fileRemoveBtnId }}\" matChipRemove matTooltip=\"Delete\" (click)=\"removeFile(docIndex)\">clear\r\n                            </mat-icon>\r\n                            <span> {{file.name}}</span>\r\n                          </mat-chip>\r\n                        </mat-chip-list>\r\n                      </div>\r\n                     </div>\r\n                  </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n          </div>\r\n          <div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 mt-5 mb-5\">\r\n          <div class=\"row  d-flex justify-content-around\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-end\r\n            mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2\">\r\n                <button  type=\"button\" (click)=\"closeDialog()\"\r\n                  class=\"btn btn-secondary btn-default btn-lg col-lg-6 col-md-6 {{ dialogData?.cancelBtnCustomClass }}\">{{ dialogData?.cancelBtnText }}</button>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <button type=\"button\" class=\"btn btn-info btn btn-info btn-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 {{ dialogData?.submitBtnCustomClass }}\" (click)=\"addLicense();\">{{ dialogData?.submitBtnTxt }}</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n </div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtbGljZW5zZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hZGQtbGljZW5zZS1tb2RhbC9zdWt1LWFkZC1saWNlbnNlLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBa0IsS0FBSyxFQUFnQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVUvRSxNQUFNLE9BQU8sNEJBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTRHdkMsWUFBb0IsUUFBcUIsRUFBUyxlQUEyRCxFQUMzRSxJQUFTO1FBRHZCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBNEM7UUFDM0UsU0FBSSxHQUFKLElBQUksQ0FBSztRQTVHM0MscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBVXpCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7O1FBSWIsZUFBVSxHQUFHO1lBQ3BCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLGNBQWMsRUFBRSxnQkFBZ0I7WUFDaEMsY0FBYyxFQUFFLGdCQUFnQjtZQUNoQywwQkFBMEIsRUFBRSxFQUFFO1lBQzlCLDBCQUEwQixFQUFFLEVBQUU7WUFDOUIsa0JBQWtCLEVBQUUsRUFBRTtZQUN0QixrQkFBa0IsRUFBRSxFQUFFO1lBQ3RCLG1CQUFtQixFQUFFLEVBQUU7WUFDdkIsc0JBQXNCLEVBQUUsRUFBRTtZQUMxQixzQkFBc0Is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dGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEsIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG4vLyBpbXBvcnQgeyBTdWt1TW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vc3VrdS1tb2RhbC9zdWt1LW1vZGFsLnNlcnZpY2UnXHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1hZGQtbGljZW5zZS1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtYWRkLWxpY2Vuc2UtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtYWRkLWxpY2Vuc2UtbW9kYWwuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1a3VBZGRMaWNlbnNlTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGZvcm1TdW1pdEF0dGVtcHQgPSBmYWxzZTtcclxuICBfc3Vic2NyaXB0aW9uT25lO1xyXG4gIF9zdWJzY3JpcHRpb25Ud287XHJcbiAgX3N1YnNjcmlwdGlvblRocmVlO1xyXG4gIF9zdWJzY3JpcHRpb25Gb3VyO1xyXG4gIF9zdWJzY3JpYmVGaWxlcztcclxuICBjb250cm9sT25lVmFsdWU7XHJcbiAgY29udHJvbFR3b1ZhbHVlO1xyXG4gIGRhdGVDb250cm9sT25lVmFsdWU7XHJcbiAgZGF0ZUNvbnRyb2xUd29WYWx1ZTtcclxuICBtdWxGaWxlcyA9IFtdO1xyXG4gIGltYWdlUHJldmlld1VybHMgPSBbXTtcclxuICB1cGxvYWRGaWxlczogYW55W107XHJcbiAgLy8gdXBsb2FkRmlsZXMgPSBbXTsgXHJcblxyXG4gIEBJbnB1dCgpIGRpYWxvZ0RhdGEgPSB7XHJcbiAgICBjb250cm9sT25lOiAnY29udHJvbE9uZScsXHJcbiAgICBjb250cm9sVHdvOiAnY29udHJvbFR3bycsXHJcbiAgICBkYXRlQ29udHJvbE9uZTogJ2RhdGVDb250cm9sT25lJyxcclxuICAgIGRhdGVDb250cm9sVHdvOiAnZGF0ZUNvbnRyb2xUd28nLFxyXG4gICAgJ2NvbnRyb2xPbmVQYXR0ZXJuRW5hYmxlZCc6ICcnLFxyXG4gICAgJ2NvbnRyb2xUd29QYXR0ZXJuRW5hYmxlZCc6ICcnLFxyXG4gICAgY29udHJvbE9uZVJlcXVpcmVkOiAnJyxcclxuICAgIGNvbnRyb2xUd29SZXF1aXJlZDogJycsXHJcbiAgICBjb250cm9sVHdvUmVxdWlyZWRkOiAnJyxcclxuICAgIGRhdGVDb250cm9sT25lUmVxdWlyZWQ6ICcnLFxyXG4gICAgZGF0ZUNvbnRyb2xUd29SZXF1aXJlZDogJycsXHJcbiAgICAnY29udHJvbE9uZVBhdHRlcm4nOiAnJyxcclxuICAgICdjb250cm9sVHdvUGF0dGVybic6ICcnLFxyXG4gICAgJ3RpdGxlJzogJ0xpY2VuY2UgYW5kIFJlZ2lzdHJhdGlvbicsXHJcbiAgICAnc3ViVGl0bGUnOiAnRW50ZXIgeW91ciBsaWNlbnNlIGRldGFpbHMgaGVyZScsXHJcbiAgICAnY29udHJvbEhpbnQnOiAnRXhhbXBsZTogMTIzNDU2Nzg5YTEyMzQ1JyxcclxuICAgICdoaW50Q2xhc3MnOiAnJyxcclxuICAgICdoZWFkZXJDdXRvbVN0eWxlJzogJycsXHJcbiAgICAnc3RhcnREYXRlTWF4RGF0ZSc6ICcnLFxyXG4gICAgJ2VuZERhdGVNYXhEYXRlJzogJycsXHJcbiAgICAnc3RhcnREYXRlTWluRGF0ZSc6ICcnLFxyXG4gICAgJ2VuZERhdGVNaW5EYXRlJzogJycsXHJcbiAgICAnY29udHJvbE9uZUlkJzogJ2xpY2Vuc2VOYW1lJyxcclxuICAgIGNvbnRyb2xUd29JZDogJ2xpY2Vuc2VOdW1iZXInLFxyXG4gICAgZGF0ZUNvbnRyb2xPbmVJZDogJ3N0YXJ0RGF0ZScsXHJcbiAgICBkYXRlQ29udHJvbFR3b0lkOiAnZW5kRGF0ZScsXHJcbiAgICBjb250cm9sVHdvVG9vbFRpcDogJ1RoZSBmb3JtYXQgc2hvdWxkIGJlIDEyMzQ1Njc4OWExMjM0NScsXHJcbiAgICBjb250cm9sT25lUGxhY2Vob2xkZXI6ICdMaWNlbnNlIE5hbWUnLFxyXG4gICAgY29udHJvbFR3b1BsYWNlaG9sZGVyOiAnTGljZW5zZSBOdW1iZXInLFxyXG4gICAgZGF0ZUNvbnRyb2xPbmVQbGFjZWhvbGRlcjogJ0xpY2VuY2UgSXNzdWUgRGF0ZScsXHJcbiAgICBkYXRlQ29udHJvbFR3b1BsYWNlaG9sZGVyOiAnTGljZW5jZSBFeHBpcnkgRGF0ZShPcHRpb25hbCknLFxyXG4gICAgY29udHJvbE9uZVJxdWlyZWRFcnJvck1zZzogJ0Nhbm5vdCBiZSBibGFuay4nLFxyXG4gICAgY29udHJvbFR3b1JxdWlyZWRFcnJvck1zZzogJ0Nhbm5vdCBiZSBibGFuay4nLFxyXG4gICAgY29udHJvbFR3b1BhdHRlcm5FcnJvck1zZzogJ0ludmFsaWQgTGljZW5jZSBudW1iZXInLFxyXG4gICAgZGF0ZUNvbnRyb2xPbmVScXVpcmVkRXJyb3JNc2c6ICdDYW5ub3QgYmUgYmxhbmsuJyxcclxuICAgIGRhdGVDb250cm9sVHdvUnF1aXJlZEVycm9yTXNnOiAnQ2Fubm90IGJlIGJsYW5rLicsXHJcbiAgICBhY2NlcHREb2NtZW50OiAnYXBwbGljYXRpb24vbXN3b3JkLCB0ZXh0L3BsYWluLCBhcHBsaWNhdGlvbi9wZGYsIGltYWdlLyonLFxyXG4gICAgdXBsb2FkSW1nOiAnaHR0cDovLzM0LjIxNy44OS4yMDQvYXNzZXRzL2ltYWdlcy9maWxlVXBsb2FkLnBuZycsXHJcbiAgICB1cGxvYWRUaXRsZTogJyBVcGxvYWQgTGljZW5jZScsXHJcbiAgICBmaWxlTGlzdFRpdGxlOiAnVXBsb2FkZWQgRG9jdW1lbnRzJyxcclxuICAgIGZpbGVJbnB1dElkOiAnZmlsZS1pbnB1dCcsXHJcbiAgICBmaWxlc0FycmF5OiBbXSxcclxuICAgIGZpbGVSZW1vdmVCdG5UeHQ6ICdEZWxldGUnLFxyXG4gICAgZmlsZVJlbW92ZUJ0bklkOiAnZmlsZURlbGV0ZScsXHJcbiAgICB1cGxvYWRJbWdBbHRUeHQ6ICcnLFxyXG4gICAgY2FuY2VsQnRuVGV4dDogJ0NhbmNlbCcsXHJcbiAgICBzdWJtaXRCdG5UeHQ6ICdBZGQgTGljZW5zZScsXHJcbiAgICBzdWJtaXRCdG5DdXN0b21DbGFzczogJycsXHJcbiAgICBjYW5jZWxCdG5DdXN0b21DbGFzczogJycsXHJcblxyXG4gIH1cclxuXHJcbiAgY29udHJvbE9uZSA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcbiAgY29udHJvbFR3byA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcbiAgZGF0ZUNvbnRyb2xPbmUgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIGRhdGVDb250cm9sVHdvID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuICAvLyBASW5wdXQoJ2VuYWJsZS1yZXF1aXJlZC12YWxpZGF0b3ItZm9yLWNvbnRyb2wtb25lJylcclxuICAvLyBzZXQgZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3JGb3JDb250cm9sT25lKHZhbCkge1xyXG4gIC8vICAgaWYgKHZhbCkge1xyXG4gIC8vICAgICB0aGlzLmNvbnRyb2xPbmUuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAvLyAgICAgdGhpcy5jb250cm9sT25lLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbiAgLy8gQElucHV0KCdlbmFibGUtcGF0dGVybi1mb3ItY29udHJvbC1vbmUnKVxyXG4gIC8vIHNldCBlbmFibGVQYXR0ZXJuVmFsaWRhdG9yc0ZvckNvbnRyb2xPbmUodmFsKSB7XHJcbiAgLy8gICBpZiAodmFsKSB7XHJcbiAgLy8gICAgIHRoaXMuY29udHJvbE9uZS5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucGF0dGVybih0aGlzLmRpYWxvZ0RhdGEuY29udHJvbE9uZVBhdHRlcm4pKTtcclxuICAvLyAgICAgdGhpcy5jb250cm9sT25lLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbiAgLy8gQElucHV0KCdlbmFibGUtcmVxdWlyZWQtdmFsaWRhdG9yLWZvci1jb250cm9sLXR3bycpXHJcbiAgLy8gc2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yRm9yQ29udHJvbFR3byh2YWwpIHtcclxuICAvLyAgIGlmICh2YWwpIHtcclxuICAvLyAgICAgdGhpcy5jb250cm9sVHdvLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgLy8gICAgIHRoaXMuY29udHJvbFR3by51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG4gIC8vIEBJbnB1dCgnZW5hYmxlLXBhdHRlcm4tZm9yLWNvbnRyb2wtdHdvJylcclxuICAvLyBzZXQgZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3JzRm9yRGF0ZUNvbnRyb2xPbmUodmFsKSB7XHJcbiAgLy8gICBpZiAodmFsKSB7XHJcbiAgLy8gICAgIHRoaXMuZGF0ZUNvbnRyb2xPbmUuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAvLyAgICAgdGhpcy5kYXRlQ29udHJvbE9uZS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG4gIC8vIEBJbnB1dCgnZW5hYmxlLXJlcXVpcmVkLXZhbGlkYXRvci1mb3ItZGF0ZUNvbnRyb2wtb25lJylcclxuICAvLyBzZXQgZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3JGb3JEYXRlQ29udHJvbFR3byh2YWwpIHtcclxuICAvLyAgIGlmICh2YWwpIHtcclxuICAvLyAgICAgdGhpcy5kYXRlQ29udHJvbFR3by5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gIC8vICAgICB0aGlzLmRhdGVDb250cm9sVHdvLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIsIHB1YmxpYyBkaWFsb2dDdXN0b21SZWY6IE1hdERpYWxvZ1JlZjxTdWt1QWRkTGljZW5zZU1vZGFsQ29tcG9uZW50PixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55LFxyXG4gICAgLy8gcHVibGljIHN1a3VNb2RhbFNlcnZpY2U6IER5bmFtaWNEYXRhXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLmRhdGEpKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGFba2V5XSkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nRGF0YVtrZXldID0gdGhpcy5kYXRhW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kaWFsb2dEYXRhLmNvbnRyb2xPbmVSZXF1aXJlZCkge1xyXG4gICAgICB0aGlzLmNvbnRyb2xPbmUuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgICAgdGhpcy5jb250cm9sT25lLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kaWFsb2dEYXRhLmNvbnRyb2xUd29SZXF1aXJlZCkge1xyXG4gICAgICB0aGlzLmNvbnRyb2xUd28uc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgICAgdGhpcy5jb250cm9sVHdvLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kaWFsb2dEYXRhLmRhdGVDb250cm9sT25lUmVxdWlyZWQpIHtcclxuICAgICAgdGhpcy5kYXRlQ29udHJvbE9uZS5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAgICB0aGlzLmRhdGVDb250cm9sT25lLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kaWFsb2dEYXRhLmRhdGVDb250cm9sVHdvUmVxdWlyZWQpIHtcclxuICAgICAgdGhpcy5kYXRlQ29udHJvbFR3by5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAgICB0aGlzLmRhdGVDb250cm9sVHdvLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kaWFsb2dEYXRhLmNvbnRyb2xUd29QYXR0ZXJuRW5hYmxlZCAmJiB0aGlzLmRpYWxvZ0RhdGEuY29udHJvbFR3b1JlcXVpcmVkKSB7XHJcbiAgICAgIHRoaXMuY29udHJvbFR3by5zZXRWYWxpZGF0b3JzKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5kaWFsb2dEYXRhLmNvbnRyb2xUd29QYXR0ZXJuKV0pO1xyXG4gICAgICB0aGlzLmNvbnRyb2xUd28udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmICh0aGlzLmRpYWxvZ0RhdGEuY29udHJvbE9uZVBhdHRlcm5FbmFibGVkKSB7XHJcbiAgICAvLyAgIHRoaXMuY29udHJvbE9uZS5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucGF0dGVybih0aGlzLmRpYWxvZ0RhdGEuY29udHJvbE9uZVBhdHRlcm4pKTtcclxuICAgIC8vICAgdGhpcy5jb250cm9sT25lLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygndGhpcy5kaWFsb2dEYXRhJywgdGhpcy5kaWFsb2dEYXRhKTtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbk9uZSA9IHRoaXMuY29udHJvbE9uZS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sT25lVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB0aGlzLnVzZXJuYW1lQ29udHJvbC5cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25Ud28gPSB0aGlzLmNvbnRyb2xUd28udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbFR3b1ZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gdGhpcy51c2VybmFtZUNvbnRyb2wuXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uVGhyZWUgPSB0aGlzLmRhdGVDb250cm9sT25lLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmRhdGVDb250cm9sT25lVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB0aGlzLnVzZXJuYW1lQ29udHJvbC5cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25Gb3VyID0gdGhpcy5kYXRlQ29udHJvbFR3by52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRlQ29udHJvbFR3b1ZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gdGhpcy51c2VybmFtZUNvbnRyb2wuXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLy8gdGhpcy5fc3Vic2NyaWJlRmlsZXMgPSB0aGlzLmdldFVwbG9hZGVkRmlsZXMoKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgLy8gICAgIGlmICh2YWx1ZSkge1xyXG4gICAgLy8gICAgICAgdGhpcy51cGxvYWRGaWxlcyA9IHZhbHVlO1xyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAvLyB0aGlzLnVzZXJuYW1lQ29udHJvbC5cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KVxyXG4gIH1cclxuXHJcbiAgYWRkTGljZW5zZSgpIHtcclxuICAgIGlmICh0aGlzLmNvbnRyb2xPbmUuaW52YWxpZCB8fCB0aGlzLmNvbnRyb2xUd28uaW52YWxpZCB8fFxyXG4gICAgICB0aGlzLmRhdGVDb250cm9sT25lLmludmFsaWQgfHwgdGhpcy5kYXRlQ29udHJvbFR3by5pbnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuc25hY2tCYXIub3BlbignUGxlYXNlIGZpbGwgYWxsIHRoZSBtYW5kYXRvcnkgZmllbGRzLicsICdjbG9zZScsIHtcclxuICAgICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICBob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgZHVyYXRpb246IDUwMDBcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgcmVxT2JqID0ge1xyXG4gICAgICAgIGxpY2Vuc2U6IHtcclxuICAgICAgICAgIGxpY2Vuc2VOYW1lOiB0aGlzLmNvbnRyb2xPbmVWYWx1ZSxcclxuICAgICAgICAgIGxpY2Vuc2VOdW1iZXI6IHRoaXMuY29udHJvbFR3b1ZhbHVlLFxyXG4gICAgICAgICAgc3RhcnREYXRlOiB0aGlzLmRhdGVDb250cm9sT25lVmFsdWUsXHJcbiAgICAgICAgICBlbmREYXRlOiB0aGlzLmRhdGVDb250cm9sVHdvVmFsdWUsXHJcbiAgICAgICAgICBmaWxlczogdGhpcy5tdWxGaWxlc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRpYWxvZ0N1c3RvbVJlZi5jbG9zZShyZXFPYmopO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VEaWFsb2coKSB7XHJcbiAgICB0aGlzLmRpYWxvZ0N1c3RvbVJlZi5jbG9zZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBzdGFydFVwbG9hZChlKSB7XHJcbiAgICBsZXQgbWF4RmlsZVNpemUgPSAxMDA5NzE1MjtcclxuICAgIGxldCBjdXJyZW50RmlsZVNpemU7XHJcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGUudGFyZ2V0LmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1tpXTtcclxuICAgICAgICBjdXJyZW50RmlsZVNpemUgPSBmaWxlLnNpemU7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ZpbGUudHlwZScsIGZpbGUudHlwZSlcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBjdXJyZW50RmlsZVNpemUgPD0gbWF4RmlsZVNpemUgJiZcclxuICAgICAgICAgIChmaWxlLnR5cGUgPT0gJ2ltYWdlL2pwZWcnIHx8IGZpbGUudHlwZSA9PSAnaW1hZ2UvcG5nJyB8fCBmaWxlLnR5cGUgPT0gJ2ltYWdlL2pwZycgfHwgZmlsZS50eXBlID09ICcucGRmJyB8fFxyXG4gICAgICAgICAgICBmaWxlLnR5cGUgPT0gJ2FwcGxpY2F0aW9uL3J0ZicgfHwgZmlsZS50eXBlID09ICdhcHBsaWNhdGlvbi9tc3dvcmQnIHx8XHJcbiAgICAgICAgICAgIGZpbGUudHlwZSA9PSAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQnIHx8IGZpbGUudHlwZSA9PSAnYXBwbGljYXRpb24vcGRmJylcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMubXVsRmlsZXMucHVzaChlLnRhcmdldC5maWxlc1tpXSk7XHJcbiAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VQcmV2aWV3VXJscy5wdXNoKHsgZmlsZTogZS50YXJnZXQucmVzdWx0LCBuYW1lOiBmaWxlLm5hbWUgfSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNuYWNrQmFyLm9wZW4oJ1VwbG9hZCBXb3JkLCBJbWFnZSBvciBQREYgZm9ybWF0IG9mIHlvdXIgTGljZW5zZSwgU2l6ZSBzaG91bGQgYmUgYmVsb3cgMTBNQi4nLCAnY2xvc2UnLCB7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsUG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICBob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAwXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVGaWxlKHBhcmFtKSB7XHJcbiAgICB0aGlzLm11bEZpbGVzLnNwbGljZShwYXJhbSwgMSlcclxuICAgIGNvbnNvbGUubG9nKCdwYXJhbScsIHBhcmFtKVxyXG4gICAgdGhpcy5pbWFnZVByZXZpZXdVcmxzLnNwbGljZShwYXJhbSwgMSlcclxuICAgIGNvbnNvbGUubG9nKCdwYXJhbSB1cmwnLCBwYXJhbSlcclxuICB9XHJcblxyXG4gIGRvd25sb2FkRG9jKGZpbGUpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBzaSB3aGF0IGkgYW0gZG9pbmcgXCIsIGZpbGUpO1xyXG4gICAgY29uc3QgbmFtZSA9IGZpbGUubmFtZTtcclxuICAgIGNvbnN0IHVyaSA9IGZpbGUuZmlsZTtcclxuICAgIGNvbnN0IGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgZG93bmxvYWRMaW5rLmhyZWYgPSB1cmk7XHJcbiAgICBkb3dubG9hZExpbmsuZG93bmxvYWQgPSBuYW1lO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb3dubG9hZExpbmspO1xyXG4gICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvd25sb2FkTGluayk7XHJcbiAgfVxyXG5cclxuICBzbmFja2Jhcihtc2cpIHtcclxuICAgIHRoaXMuc25hY2tCYXIub3Blbihtc2csICdjbG9zZScsIHtcclxuICAgICAgdmVydGljYWxQb3NpdGlvbjogJ2JvdHRvbScsXHJcbiAgICAgIGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgZHVyYXRpb246IDM1MDBcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19