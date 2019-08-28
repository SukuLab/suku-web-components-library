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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtbGljZW5zZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hZGQtbGljZW5zZS1tb2RhbC9zdWt1LWFkZC1saWNlbnNlLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBa0IsS0FBSyxFQUFnQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVUvRSxNQUFNLE9BQU8sNEJBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTRHdkMsWUFBb0IsUUFBcUIsRUFBUyxlQUEyRCxFQUMzRSxJQUFTO1FBRHZCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBNEM7UUFDM0UsU0FBSSxHQUFKLElBQUksQ0FBSztRQTVHM0MscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBVXpCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7O1FBSWIsZUFBVSxHQUFHO1lBQ3BCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLGNBQWMsRUFBRSxnQkFBZ0I7WUFDaEMsY0FBYyxFQUFFLGdCQUFnQjtZQUNoQywwQkFBMEIsRUFBRSxFQUFFO1lBQzlCLDBCQUEwQixFQUFFLEVBQUU7WUFDOUIsa0JBQWtCLEVBQUUsRUFBRTtZQUN0QixrQkFBa0IsRUFBRSxFQUFFO1lBQ3RCLG1CQUFtQixFQUFFLEVBQUU7WUFDdkIsc0JBQXNCLEVBQUUsRUFBRTtZQUMxQixzQkFBc0Is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dGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSwgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG4vLyBpbXBvcnQgeyBTdWt1TW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vc3VrdS1tb2RhbC9zdWt1LW1vZGFsLnNlcnZpY2UnXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtYWRkLWxpY2Vuc2UtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1hZGQtbGljZW5zZS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtYWRkLWxpY2Vuc2UtbW9kYWwuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFN1a3VBZGRMaWNlbnNlTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtU3VtaXRBdHRlbXB0ID0gZmFsc2U7XG4gIF9zdWJzY3JpcHRpb25PbmU7XG4gIF9zdWJzY3JpcHRpb25Ud287XG4gIF9zdWJzY3JpcHRpb25UaHJlZTtcbiAgX3N1YnNjcmlwdGlvbkZvdXI7XG4gIF9zdWJzY3JpYmVGaWxlcztcbiAgY29udHJvbE9uZVZhbHVlO1xuICBjb250cm9sVHdvVmFsdWU7XG4gIGRhdGVDb250cm9sT25lVmFsdWU7XG4gIGRhdGVDb250cm9sVHdvVmFsdWU7XG4gIG11bEZpbGVzID0gW107XG4gIGltYWdlUHJldmlld1VybHMgPSBbXTtcbiAgdXBsb2FkRmlsZXM6IGFueVtdO1xuICAvLyB1cGxvYWRGaWxlcyA9IFtdOyBcblxuICBASW5wdXQoKSBkaWFsb2dEYXRhID0ge1xuICAgIGNvbnRyb2xPbmU6ICdjb250cm9sT25lJyxcbiAgICBjb250cm9sVHdvOiAnY29udHJvbFR3bycsXG4gICAgZGF0ZUNvbnRyb2xPbmU6ICdkYXRlQ29udHJvbE9uZScsXG4gICAgZGF0ZUNvbnRyb2xUd286ICdkYXRlQ29udHJvbFR3bycsXG4gICAgJ2NvbnRyb2xPbmVQYXR0ZXJuRW5hYmxlZCc6ICcnLFxuICAgICdjb250cm9sVHdvUGF0dGVybkVuYWJsZWQnOiAnJyxcbiAgICBjb250cm9sT25lUmVxdWlyZWQ6ICcnLFxuICAgIGNvbnRyb2xUd29SZXF1aXJlZDogJycsXG4gICAgY29udHJvbFR3b1JlcXVpcmVkZDogJycsXG4gICAgZGF0ZUNvbnRyb2xPbmVSZXF1aXJlZDogJycsXG4gICAgZGF0ZUNvbnRyb2xUd29SZXF1aXJlZDogJycsXG4gICAgJ2NvbnRyb2xPbmVQYXR0ZXJuJzogJycsXG4gICAgJ2NvbnRyb2xUd29QYXR0ZXJuJzogJycsXG4gICAgJ3RpdGxlJzogJ0xpY2VuY2UgYW5kIFJlZ2lzdHJhdGlvbicsXG4gICAgJ3N1YlRpdGxlJzogJ0VudGVyIHlvdXIgbGljZW5zZSBkZXRhaWxzIGhlcmUnLFxuICAgICdjb250cm9sSGludCc6ICdFeGFtcGxlOiAxMjM0NTY3ODlhMTIzNDUnLFxuICAgICdoaW50Q2xhc3MnOiAnJyxcbiAgICAnaGVhZGVyQ3V0b21TdHlsZSc6ICcnLFxuICAgICdzdGFydERhdGVNYXhEYXRlJzogJycsXG4gICAgJ2VuZERhdGVNYXhEYXRlJzogJycsXG4gICAgJ3N0YXJ0RGF0ZU1pbkRhdGUnOiAnJyxcbiAgICAnZW5kRGF0ZU1pbkRhdGUnOiAnJyxcbiAgICAnY29udHJvbE9uZUlkJzogJ2xpY2Vuc2VOYW1lJyxcbiAgICBjb250cm9sVHdvSWQ6ICdsaWNlbnNlTnVtYmVyJyxcbiAgICBkYXRlQ29udHJvbE9uZUlkOiAnc3RhcnREYXRlJyxcbiAgICBkYXRlQ29udHJvbFR3b0lkOiAnZW5kRGF0ZScsXG4gICAgY29udHJvbFR3b1Rvb2xUaXA6ICdUaGUgZm9ybWF0IHNob3VsZCBiZSAxMjM0NTY3ODlhMTIzNDUnLFxuICAgIGNvbnRyb2xPbmVQbGFjZWhvbGRlcjogJ0xpY2Vuc2UgTmFtZScsXG4gICAgY29udHJvbFR3b1BsYWNlaG9sZGVyOiAnTGljZW5zZSBOdW1iZXInLFxuICAgIGRhdGVDb250cm9sT25lUGxhY2Vob2xkZXI6ICdMaWNlbmNlIElzc3VlIERhdGUnLFxuICAgIGRhdGVDb250cm9sVHdvUGxhY2Vob2xkZXI6ICdMaWNlbmNlIEV4cGlyeSBEYXRlKE9wdGlvbmFsKScsXG4gICAgY29udHJvbE9uZVJxdWlyZWRFcnJvck1zZzogJ0Nhbm5vdCBiZSBibGFuay4nLFxuICAgIGNvbnRyb2xUd29ScXVpcmVkRXJyb3JNc2c6ICdDYW5ub3QgYmUgYmxhbmsuJyxcbiAgICBjb250cm9sVHdvUGF0dGVybkVycm9yTXNnOiAnSW52YWxpZCBMaWNlbmNlIG51bWJlcicsXG4gICAgZGF0ZUNvbnRyb2xPbmVScXVpcmVkRXJyb3JNc2c6ICdDYW5ub3QgYmUgYmxhbmsuJyxcbiAgICBkYXRlQ29udHJvbFR3b1JxdWlyZWRFcnJvck1zZzogJ0Nhbm5vdCBiZSBibGFuay4nLFxuICAgIGFjY2VwdERvY21lbnQ6ICdhcHBsaWNhdGlvbi9tc3dvcmQsIHRleHQvcGxhaW4sIGFwcGxpY2F0aW9uL3BkZiwgaW1hZ2UvKicsXG4gICAgdXBsb2FkSW1nOiAnaHR0cDovLzM0LjIxNy44OS4yMDQvYXNzZXRzL2ltYWdlcy9maWxlVXBsb2FkLnBuZycsXG4gICAgdXBsb2FkVGl0bGU6ICcgVXBsb2FkIExpY2VuY2UnLFxuICAgIGZpbGVMaXN0VGl0bGU6ICdVcGxvYWRlZCBEb2N1bWVudHMnLFxuICAgIGZpbGVJbnB1dElkOiAnZmlsZS1pbnB1dCcsXG4gICAgZmlsZXNBcnJheTogW10sXG4gICAgZmlsZVJlbW92ZUJ0blR4dDogJ0RlbGV0ZScsXG4gICAgZmlsZVJlbW92ZUJ0bklkOiAnZmlsZURlbGV0ZScsXG4gICAgdXBsb2FkSW1nQWx0VHh0OiAnJyxcbiAgICBjYW5jZWxCdG5UZXh0OiAnQ2FuY2VsJyxcbiAgICBzdWJtaXRCdG5UeHQ6ICdBZGQgTGljZW5zZScsXG4gICAgc3VibWl0QnRuQ3VzdG9tQ2xhc3M6ICcnLFxuICAgIGNhbmNlbEJ0bkN1c3RvbUNsYXNzOiAnJyxcblxuICB9XG5cbiAgY29udHJvbE9uZSA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIGNvbnRyb2xUd28gPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICBkYXRlQ29udHJvbE9uZSA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIGRhdGVDb250cm9sVHdvID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgLy8gQElucHV0KCdlbmFibGUtcmVxdWlyZWQtdmFsaWRhdG9yLWZvci1jb250cm9sLW9uZScpXG4gIC8vIHNldCBlbmFibGVSZXF1aXJlZFZhbGlkYXRvckZvckNvbnRyb2xPbmUodmFsKSB7XG4gIC8vICAgaWYgKHZhbCkge1xuICAvLyAgICAgdGhpcy5jb250cm9sT25lLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gIC8vICAgICB0aGlzLmNvbnRyb2xPbmUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvLyBASW5wdXQoJ2VuYWJsZS1wYXR0ZXJuLWZvci1jb250cm9sLW9uZScpXG4gIC8vIHNldCBlbmFibGVQYXR0ZXJuVmFsaWRhdG9yc0ZvckNvbnRyb2xPbmUodmFsKSB7XG4gIC8vICAgaWYgKHZhbCkge1xuICAvLyAgICAgdGhpcy5jb250cm9sT25lLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5wYXR0ZXJuKHRoaXMuZGlhbG9nRGF0YS5jb250cm9sT25lUGF0dGVybikpO1xuICAvLyAgICAgdGhpcy5jb250cm9sT25lLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy8gQElucHV0KCdlbmFibGUtcmVxdWlyZWQtdmFsaWRhdG9yLWZvci1jb250cm9sLXR3bycpXG4gIC8vIHNldCBlbmFibGVSZXF1aXJlZFZhbGlkYXRvckZvckNvbnRyb2xUd28odmFsKSB7XG4gIC8vICAgaWYgKHZhbCkge1xuICAvLyAgICAgdGhpcy5jb250cm9sVHdvLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gIC8vICAgICB0aGlzLmNvbnRyb2xUd28udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvLyBASW5wdXQoJ2VuYWJsZS1wYXR0ZXJuLWZvci1jb250cm9sLXR3bycpXG4gIC8vIHNldCBlbmFibGVSZXF1aXJlZFZhbGlkYXRvcnNGb3JEYXRlQ29udHJvbE9uZSh2YWwpIHtcbiAgLy8gICBpZiAodmFsKSB7XG4gIC8vICAgICB0aGlzLmRhdGVDb250cm9sT25lLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gIC8vICAgICB0aGlzLmRhdGVDb250cm9sT25lLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy8gQElucHV0KCdlbmFibGUtcmVxdWlyZWQtdmFsaWRhdG9yLWZvci1kYXRlQ29udHJvbC1vbmUnKVxuICAvLyBzZXQgZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3JGb3JEYXRlQ29udHJvbFR3byh2YWwpIHtcbiAgLy8gICBpZiAodmFsKSB7XG4gIC8vICAgICB0aGlzLmRhdGVDb250cm9sVHdvLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gIC8vICAgICB0aGlzLmRhdGVDb250cm9sVHdvLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIsIHB1YmxpYyBkaWFsb2dDdXN0b21SZWY6IE1hdERpYWxvZ1JlZjxTdWt1QWRkTGljZW5zZU1vZGFsQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSxcbiAgICAvLyBwdWJsaWMgc3VrdU1vZGFsU2VydmljZTogRHluYW1pY0RhdGFcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkpIHtcbiAgICAgIGlmICh0aGlzLmRhdGFba2V5XSkge1xuICAgICAgICB0aGlzLmRpYWxvZ0RhdGFba2V5XSA9IHRoaXMuZGF0YVtrZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmRpYWxvZ0RhdGEuY29udHJvbE9uZVJlcXVpcmVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2xPbmUuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgIHRoaXMuY29udHJvbE9uZS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlhbG9nRGF0YS5jb250cm9sVHdvUmVxdWlyZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbFR3by5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5jb250cm9sVHdvLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kaWFsb2dEYXRhLmRhdGVDb250cm9sT25lUmVxdWlyZWQpIHtcbiAgICAgIHRoaXMuZGF0ZUNvbnRyb2xPbmUuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgIHRoaXMuZGF0ZUNvbnRyb2xPbmUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRpYWxvZ0RhdGEuZGF0ZUNvbnRyb2xUd29SZXF1aXJlZCkge1xuICAgICAgdGhpcy5kYXRlQ29udHJvbFR3by5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5kYXRlQ29udHJvbFR3by51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlhbG9nRGF0YS5jb250cm9sVHdvUGF0dGVybkVuYWJsZWQgJiYgdGhpcy5kaWFsb2dEYXRhLmNvbnRyb2xUd29SZXF1aXJlZCkge1xuICAgICAgdGhpcy5jb250cm9sVHdvLnNldFZhbGlkYXRvcnMoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybih0aGlzLmRpYWxvZ0RhdGEuY29udHJvbFR3b1BhdHRlcm4pXSk7XG4gICAgICB0aGlzLmNvbnRyb2xUd28udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLmRpYWxvZ0RhdGEuY29udHJvbE9uZVBhdHRlcm5FbmFibGVkKSB7XG4gICAgLy8gICB0aGlzLmNvbnRyb2xPbmUuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5kaWFsb2dEYXRhLmNvbnRyb2xPbmVQYXR0ZXJuKSk7XG4gICAgLy8gICB0aGlzLmNvbnRyb2xPbmUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIC8vIH1cblxuICAgIGNvbnNvbGUubG9nKCd0aGlzLmRpYWxvZ0RhdGEnLCB0aGlzLmRpYWxvZ0RhdGEpO1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbk9uZSA9IHRoaXMuY29udHJvbE9uZS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbnRyb2xPbmVWYWx1ZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhpcy51c2VybmFtZUNvbnRyb2wuXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuX3N1YnNjcmlwdGlvblR3byA9IHRoaXMuY29udHJvbFR3by52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbnRyb2xUd29WYWx1ZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhpcy51c2VybmFtZUNvbnRyb2wuXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuX3N1YnNjcmlwdGlvblRocmVlID0gdGhpcy5kYXRlQ29udHJvbE9uZS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmRhdGVDb250cm9sT25lVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoaXMudXNlcm5hbWVDb250cm9sLlxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLl9zdWJzY3JpcHRpb25Gb3VyID0gdGhpcy5kYXRlQ29udHJvbFR3by52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmRhdGVDb250cm9sVHdvVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoaXMudXNlcm5hbWVDb250cm9sLlxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyB0aGlzLl9zdWJzY3JpYmVGaWxlcyA9IHRoaXMuZ2V0VXBsb2FkZWRGaWxlcygpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgLy8gICAgIGlmICh2YWx1ZSkge1xuICAgIC8vICAgICAgIHRoaXMudXBsb2FkRmlsZXMgPSB2YWx1ZTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAvLyB0aGlzLnVzZXJuYW1lQ29udHJvbC5cbiAgICAvLyAgICAgfVxuICAgIC8vIH0pXG4gIH1cblxuICBhZGRMaWNlbnNlKCkge1xuICAgIGlmICh0aGlzLmNvbnRyb2xPbmUuaW52YWxpZCB8fCB0aGlzLmNvbnRyb2xUd28uaW52YWxpZCB8fFxuICAgICAgdGhpcy5kYXRlQ29udHJvbE9uZS5pbnZhbGlkIHx8IHRoaXMuZGF0ZUNvbnRyb2xUd28uaW52YWxpZCkge1xuICAgICAgdGhpcy5zbmFja0Jhci5vcGVuKCdQbGVhc2UgZmlsbCBhbGwgdGhlIG1hbmRhdG9yeSBmaWVsZHMuJywgJ2Nsb3NlJywge1xuICAgICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICBkdXJhdGlvbjogNTAwMFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByZXFPYmogPSB7XG4gICAgICAgIGxpY2Vuc2U6IHtcbiAgICAgICAgICBsaWNlbnNlTmFtZTogdGhpcy5jb250cm9sT25lVmFsdWUsXG4gICAgICAgICAgbGljZW5zZU51bWJlcjogdGhpcy5jb250cm9sVHdvVmFsdWUsXG4gICAgICAgICAgc3RhcnREYXRlOiB0aGlzLmRhdGVDb250cm9sT25lVmFsdWUsXG4gICAgICAgICAgZW5kRGF0ZTogdGhpcy5kYXRlQ29udHJvbFR3b1ZhbHVlLFxuICAgICAgICAgIGZpbGVzOiB0aGlzLm11bEZpbGVzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZGlhbG9nQ3VzdG9tUmVmLmNsb3NlKHJlcU9iaik7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VEaWFsb2coKSB7XG4gICAgdGhpcy5kaWFsb2dDdXN0b21SZWYuY2xvc2UoZmFsc2UpO1xuICB9XG5cbiAgc3RhcnRVcGxvYWQoZSkge1xuICAgIGxldCBtYXhGaWxlU2l6ZSA9IDEwMDk3MTUyO1xuICAgIGxldCBjdXJyZW50RmlsZVNpemU7XG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZS50YXJnZXQuZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1tpXTtcbiAgICAgICAgY3VycmVudEZpbGVTaXplID0gZmlsZS5zaXplO1xuICAgICAgICBjb25zb2xlLmxvZygnZmlsZS50eXBlJywgZmlsZS50eXBlKVxuICAgICAgICBpZiAoXG4gICAgICAgICAgY3VycmVudEZpbGVTaXplIDw9IG1heEZpbGVTaXplICYmXG4gICAgICAgICAgKGZpbGUudHlwZSA9PSAnaW1hZ2UvanBlZycgfHwgZmlsZS50eXBlID09ICdpbWFnZS9wbmcnIHx8IGZpbGUudHlwZSA9PSAnaW1hZ2UvanBnJyB8fCBmaWxlLnR5cGUgPT0gJy5wZGYnIHx8XG4gICAgICAgICAgICBmaWxlLnR5cGUgPT0gJ2FwcGxpY2F0aW9uL3J0ZicgfHwgZmlsZS50eXBlID09ICdhcHBsaWNhdGlvbi9tc3dvcmQnIHx8XG4gICAgICAgICAgICBmaWxlLnR5cGUgPT0gJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50JyB8fCBmaWxlLnR5cGUgPT0gJ2FwcGxpY2F0aW9uL3BkZicpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMubXVsRmlsZXMucHVzaChlLnRhcmdldC5maWxlc1tpXSk7XG4gICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VQcmV2aWV3VXJscy5wdXNoKHsgZmlsZTogZS50YXJnZXQucmVzdWx0LCBuYW1lOiBmaWxlLm5hbWUgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc25hY2tCYXIub3BlbignVXBsb2FkIFdvcmQsIEltYWdlIG9yIFBERiBmb3JtYXQgb2YgeW91ciBMaWNlbnNlLCBTaXplIHNob3VsZCBiZSBiZWxvdyAxME1CLicsICdjbG9zZScsIHtcbiAgICAgICAgICAgIHZlcnRpY2FsUG9zaXRpb246ICd0b3AnLFxuICAgICAgICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRmlsZShwYXJhbSkge1xuICAgIHRoaXMubXVsRmlsZXMuc3BsaWNlKHBhcmFtLCAxKVxuICAgIGNvbnNvbGUubG9nKCdwYXJhbScsIHBhcmFtKVxuICAgIHRoaXMuaW1hZ2VQcmV2aWV3VXJscy5zcGxpY2UocGFyYW0sIDEpXG4gICAgY29uc29sZS5sb2coJ3BhcmFtIHVybCcsIHBhcmFtKVxuICB9XG5cbiAgZG93bmxvYWREb2MoZmlsZSkge1xuICAgIGNvbnNvbGUubG9nKFwidGhpcyBzaSB3aGF0IGkgYW0gZG9pbmcgXCIsIGZpbGUpO1xuICAgIGNvbnN0IG5hbWUgPSBmaWxlLm5hbWU7XG4gICAgY29uc3QgdXJpID0gZmlsZS5maWxlO1xuICAgIGNvbnN0IGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGRvd25sb2FkTGluay5ocmVmID0gdXJpO1xuICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9IG5hbWU7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb3dubG9hZExpbmspO1xuICAgIGRvd25sb2FkTGluay5jbGljaygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG93bmxvYWRMaW5rKTtcbiAgfVxuXG4gIHNuYWNrYmFyKG1zZykge1xuICAgIHRoaXMuc25hY2tCYXIub3Blbihtc2csICdjbG9zZScsIHtcbiAgICAgIHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nLFxuICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgZHVyYXRpb246IDM1MDBcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=