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
                    // this.mulFiles.push(e.target.files[i]);
                    // this.imagepath = this.LicencesAndRegistration.value.logo;
                    // this.imageAdded = 'Image addednsbmdbmbnmb';
                    this.mulFiles.push(e.target.files[i]);
                    console.log(this.mulFiles);
                    // let reader = new FileReader();
                    // reader.onload = (e: any) => {
                    //   this.imagePreviewUrls.push({ file: e.target.result, name: file.name });
                    // };
                    // reader.readAsDataURL(file);
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
                template: " <div>\n    <div class=\"col-sm-12  card-header {{ dialogData?.headerCutomStyle }}\">\n        <div class=\"col-sm-12\">\n          <h1 class=\"headerFont\">{{dialogData?.title}}</h1>\n          <p>{{dialogData?.subTitle}}</p>\n        </div>\n      </div>\n      <div class=\"modal-body col-sm-12\">\n          <div>\n          \t  <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\"\n              dialogData-parent=\"#accordionExample\">\n              <div>\n                <div class=\"pL\">\n                <div class=\"col-sm-12 mT-7\">\n                  <div class=\"row\">\n                    <mat-form-field class=\"col-sm-6\">\n                        <input matInput placeholder=\"{{ dialogData?.controlOnePlaceholder }}\"  [formControl]=\"controlOne\" name=\"{{dialogData?.controlOne}}\" id=\"{{ dialogData?.controlOneId }}\">\n                        <mat-error *ngIf=\"controlOne.hasError('required')\">\n                            {{ dialogData?.controlOneRquiredErrorMsg }}\n                          </mat-error>\n                    </mat-form-field>\n                    <div class=\"col-sm-6 p-0\">\n                    <mat-form-field class=\"col-12 \">\n                      <input matInput placeholder=\"{{dialogData?.controlTwoPlaceholder}}\" \n                        [formControl]=\"controlTwo\" id=\"{{ dialogData?.controlTwoId }}\"\n                        name=\"{{dialogData?.controlTwo}}\" #tooltip=\"matTooltip\"\n                        matTooltip=\"{{ dialogData?.controlTwoToolTip }}\">\n                      <mat-error *ngIf=\"controlTwo.hasError('required')\">\n                          \t{{ dialogData?.controlTwoRquiredErrorMsg }}\n                      </mat-error>\n                      <mat-error *ngIf=\"controlTwo.hasError('pattern')\">\n                            {{ dialogData?.controlTwoPatternErrorMsg }}\n                      </mat-error>\n                    </mat-form-field>\n                    <div >\n                    <p class=\"pl-4 {{ dialogData?.hintClass }}\">{{ dialogData?.controlHint }}</p>\n                  </div>\n                  </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 mT-7\">\n                  <div class=\"row\">\n                    <mat-form-field  class=\"col-sm-6\">\n                      <mat-label>{{ dialogData?.dateControlOnePlaceholder }}</mat-label>\n                      <input matInput [matDatepicker]=\"picker1\" [formControl]=\"dateControlOne\" \n                       id=\"{{ dialogData?.dateControlOneId }}\"   #checkin1 name=\"{{ dialogData?.dateControlOne }}\" [min]=\"dialogData?.startDateMinDate\"  [max]=\"dialogData?.startDateMaxDate\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker1></mat-datepicker>\n                      <mat-error *ngIf=\"dateControlOne.hasError('required')\">\n                            {{ dialogData?.dateControlOneRquiredErrorMsg }}\n                      </mat-error>\n                    </mat-form-field>\n                    <mat-form-field  class=\"col-sm-6\">\n                      <mat-label>{{ dialogData?.dateControlTwoPlaceholder }}</mat-label>\n                      <input matInput [matDatepicker]=\"picker2\" id=\"{{ dialogData?.dateControlTwoId }}\" name=\"{{dialogData?.dateControlTwo}}\"\n                        #checkout1 [formControl]=\"dateControlTwo\"   [min]=\"dialogData?.endDateMinDate\" [max]=\"dialogData?.endDateMaxDate\" >\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker2 color=\"primary\"></mat-datepicker>\n                      <mat-error *ngIf=\"dateControlTwo.hasError('required')\">\n                            {{ dialogData?.dateControlTwoRquiredErrorMsg }}\n                      </mat-error>\n                    </mat-form-field>                           \n                    <div class=\"col-sm-12 pL\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                       <aside >{{ dialogData?.uploadTitle }}</aside>\n                         <div class=\" form-group\">\n                          <input   #fileInput (change)=\"startUpload($event);\"\n                           accept=\"{{ dialogData?.acceptDocment }}\"  id=\"{{ dialogData?.fileInputId }}\"\n                            type=\"file\" style=\"display: none\" />\n                        </div>\n                        <div class=\"bT text-center\">\n                        <a (click)=\"fileInput.click()\"><img [src]=\"dialogData?.uploadImg\" alt=\"{{ dialogData?.uploadImgAltTxt }}\" \n                          width=\"90px\" height=\"100px\"></a>\n                      </div>\n                      </div>\n                      <div class=\"col-sm-9\">\n                      <aside>{{ dialogData?.fileListTitle }}</aside>\n                      <div *ngFor=\"let file of mulFiles; let i = index;\" class=\"pdfText\">\n                          <div>{{file.name}} \n                           <a (click)=\"removeFile(i)\" id=\"{{ dialogData?.fileRemoveBtnId }}\" class=\"fT8\"><u>{{ dialogData?.fileRemoveBtnTxt }}</u></a>\n                          </div>\n                        </div>\n                      </div>\n                     </div>\n                  </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div>\n          </div>\n          <div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 mt-5 mb-5\">\n          <div class=\"row  d-flex justify-content-around\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-end\n            mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2\">\n                <button  type=\"button\" (click)=\"closeDialog()\"\n                  class=\"btn btn-secondary btn-default btn-lg col-lg-6 col-md-6 {{ dialogData?.cancelBtnCustomClass }}\">{{ dialogData?.cancelBtnText }}</button>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n                <button type=\"button\" class=\"btn btn-info btn btn-info btn-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 {{ dialogData?.submitBtnCustomClass }}\" (click)=\"addLicense();\">{{ dialogData?.submitBtnTxt }}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n </div>\n",
                styles: [".btn-info{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000}.headerFont{font-family:Poppins,sans-serif;letter-spacing:0;margin-top:8px;color:#aba4a4e0;font-size:2.5rem}.pointer{cursor:pointer}.bT{border:2px solid #e6e1e18c!important;background-color:#f7f3f354!important;margin-right:24px}.card-header{background-color:#272727;box-shadow:0 1px 1px rgba(0,0,0,.5);color:#fff}.licNum{position:absolute;top:44px;right:267px;font-size:12px;margin-left:50px;color:#000000ad;font-family:'Encode Sans',sans-serif!important}::ng-deep mat-dialog-container{padding:0!important;overflow:hidden!important}:host ::ng-deep mat-dialog-content{max-height:91%!important;overflow-y:none!important;margin:0!important;height:100%!important}:host ::ng-deep mat-dialog-actions{margin:5px 10px!important}.btn-default{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#fff;color:#000}.btn-default:hover{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#757575;color:#fff}.btn-default:click{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#757575!important;color:#fff}.btn-default:active{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#757575;color:#fff}.bgWhite{background-color:#fff!important}.btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info:click{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e!important;color:#fff}.btn-info:active{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:grey}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtbGljZW5zZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hZGQtbGljZW5zZS1tb2RhbC9zdWt1LWFkZC1saWNlbnNlLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBa0IsS0FBSyxFQUFnQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVUvRSxNQUFNLE9BQU8sNEJBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTJHdkMsWUFBb0IsUUFBcUIsRUFBUyxlQUEyRCxFQUMzRSxJQUFTO1FBRHZCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBNEM7UUFDM0UsU0FBSSxHQUFKLElBQUksQ0FBSztRQTNHM0MscUJBQWdCLEdBQUksS0FBSyxDQUFDO1FBVTFCLGFBQVEsR0FBRyxFQUFFLENBQUM7O1FBSUwsZUFBVSxHQUFHO1lBQ3BCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLGNBQWMsRUFBRSxnQkFBZ0I7WUFDaEMsY0FBYyxFQUFFLGdCQUFnQjtZQUNoQywwQkFBMEIsRUFBRSxFQUFFO1lBQzlCLDBCQUEwQixFQUFFLEVBQUU7WUFDOUIsa0JBQWtCLEVBQUUsRUFBRTtZQUN0QixrQkFBa0IsRUFBRSxFQUFFO1lBQ3RCLG1CQUFtQixFQUFFLEVBQUU7WUFDdkIsc0JBQXNCLEVBQUUsRUFBRTtZQUMxQixzQkFBc0IsRUFBRSxFQUFFO1lBQzFCLG1CQUFtQixFQUFF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SUFDbkIseURBQWtCOztJQUNsQix1REFBZ0I7O0lBQ2hCLHVEQUFnQjs7SUFDaEIsdURBQWdCOztJQUNoQiwyREFBb0I7O0lBQ3BCLDJEQUFvQjs7SUFDcEIsZ0RBQWM7O0lBQ2QsbURBQW1COztJQUduQixrREFtREM7O0lBRUQsa0RBQWlDOztJQUNqQyxrREFBaUM7O0lBQ2pDLHNEQUFxQzs7SUFDckMsc0RBQXFDOzs7OztJQW9DekIsZ0RBQTZCOztJQUFFLHVEQUFrRTs7SUFDM0csNENBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEsIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuLy8gaW1wb3J0IHsgU3VrdU1vZGFsU2VydmljZSB9IGZyb20gJy4uL3N1a3UtbW9kYWwvc3VrdS1tb2RhbC5zZXJ2aWNlJ1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnOyAgXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtYWRkLWxpY2Vuc2UtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1hZGQtbGljZW5zZS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtYWRkLWxpY2Vuc2UtbW9kYWwuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFN1a3VBZGRMaWNlbnNlTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtU3VtaXRBdHRlbXB0ID0gIGZhbHNlO1xuICBfc3Vic2NyaXB0aW9uT25lO1xuICBfc3Vic2NyaXB0aW9uVHdvO1xuICBfc3Vic2NyaXB0aW9uVGhyZWU7XG4gIF9zdWJzY3JpcHRpb25Gb3VyO1xuICBfc3Vic2NyaWJlRmlsZXM7XG4gIGNvbnRyb2xPbmVWYWx1ZTtcbiAgY29udHJvbFR3b1ZhbHVlO1xuICBkYXRlQ29udHJvbE9uZVZhbHVlO1xuICBkYXRlQ29udHJvbFR3b1ZhbHVlO1xuICBtdWxGaWxlcyA9IFtdO1xuICB1cGxvYWRGaWxlczogYW55W107IFxuICAvLyB1cGxvYWRGaWxlcyA9IFtdOyBcblxuICBASW5wdXQoKSBkaWFsb2dEYXRhID0ge1xuICAgIGNvbnRyb2xPbmU6ICdjb250cm9sT25lJyxcbiAgICBjb250cm9sVHdvOiAnY29udHJvbFR3bycsXG4gICAgZGF0ZUNvbnRyb2xPbmU6ICdkYXRlQ29udHJvbE9uZScsIFxuICAgIGRhdGVDb250cm9sVHdvOiAnZGF0ZUNvbnRyb2xUd28nLFxuICAgICdjb250cm9sT25lUGF0dGVybkVuYWJsZWQnOiAnJyxcbiAgICAnY29udHJvbFR3b1BhdHRlcm5FbmFibGVkJzogJycsXG4gICAgY29udHJvbE9uZVJlcXVpcmVkOiAnJyxcbiAgICBjb250cm9sVHdvUmVxdWlyZWQ6ICcnLFxuICAgIGNvbnRyb2xUd29SZXF1aXJlZGQ6ICcnLFxuICAgIGRhdGVDb250cm9sT25lUmVxdWlyZWQ6ICcnLFxuICAgIGRhdGVDb250cm9sVHdvUmVxdWlyZWQ6ICcnLFxuICAgICdjb250cm9sT25lUGF0dGVybic6ICcnLFxuICAgICdjb250cm9sVHdvUGF0dGVybic6ICcnLFxuICAgICd0aXRsZSc6ICdMaWNlbmNlIGFuZCBSZWdpc3RyYXRpb24nLFxuICAgICdzdWJUaXRsZSc6ICdFbnRlciB5b3VyIGxpY2Vuc2UgZGV0YWlscyBoZXJlJyxcbiAgICAnY29udHJvbEhpbnQnOiAnRXhhbXBsZTogMTIzNDU2Nzg5YTEyMzQ1JyxcbiAgICAnaGludENsYXNzJzogJycsXG4gICAgJ2hlYWRlckN1dG9tU3R5bGUnOiAnJyxcbiAgICAnc3RhcnREYXRlTWF4RGF0ZSc6ICcnLFxuICAgICdlbmREYXRlTWF4RGF0ZSc6ICcnLFxuICAgICdzdGFydERhdGVNaW5EYXRlJzogJycsXG4gICAgJ2VuZERhdGVNaW5EYXRlJzogJycsXG4gICAgJ2NvbnRyb2xPbmVJZCc6ICdsaWNlbnNlTmFtZScsXG4gICAgY29udHJvbFR3b0lkOiAnbGljZW5zZU51bWJlcicsXG4gICAgZGF0ZUNvbnRyb2xPbmVJZDogJ3N0YXJ0RGF0ZScsXG4gICAgZGF0ZUNvbnRyb2xUd29JZDogJ2VuZERhdGUnLFxuICAgIGNvbnRyb2xUd29Ub29sVGlwOiAnVGhlIGZvcm1hdCBzaG91bGQgYmUgMTIzNDU2Nzg5YTEyMzQ1JywgXG4gICAgY29udHJvbE9uZVBsYWNlaG9sZGVyOiAnTGljZW5zZSBOYW1lJyxcbiAgICBjb250cm9sVHdvUGxhY2Vob2xkZXI6ICdMaWNlbnNlIE51bWJlcicsIFxuICAgIGRhdGVDb250cm9sT25lUGxhY2Vob2xkZXI6ICdMaWNlbmNlIElzc3VlIERhdGUnLCBcbiAgICBkYXRlQ29udHJvbFR3b1BsYWNlaG9sZGVyOiAnTGljZW5jZSBFeHBpcnkgRGF0ZShPcHRpb25hbCknLFxuICAgIGNvbnRyb2xPbmVScXVpcmVkRXJyb3JNc2c6ICdDYW5ub3QgYmUgYmxhbmsuJyxcbiAgICBjb250cm9sVHdvUnF1aXJlZEVycm9yTXNnOiAnQ2Fubm90IGJlIGJsYW5rLicsXG4gICAgY29udHJvbFR3b1BhdHRlcm5FcnJvck1zZzogJ0ludmFsaWQgTGljZW5jZSBudW1iZXInLFxuICAgIGRhdGVDb250cm9sT25lUnF1aXJlZEVycm9yTXNnOiAnQ2Fubm90IGJlIGJsYW5rLicsXG4gICAgZGF0ZUNvbnRyb2xUd29ScXVpcmVkRXJyb3JNc2c6ICdDYW5ub3QgYmUgYmxhbmsuJyxcbiAgICBhY2NlcHREb2NtZW50OiAnYXBwbGljYXRpb24vbXN3b3JkLCB0ZXh0L3BsYWluLCBhcHBsaWNhdGlvbi9wZGYsIGltYWdlLyonLFxuICAgIHVwbG9hZEltZzogJ2h0dHA6Ly8zNC4yMTcuODkuMjA0L2Fzc2V0cy9pbWFnZXMvZmlsZVVwbG9hZC5wbmcnLFxuICAgIHVwbG9hZFRpdGxlOiAnIFVwbG9hZCBMaWNlbmNlJyxcbiAgICBmaWxlTGlzdFRpdGxlOiAnVXBsb2FkZWQgRG9jdW1lbnRzJyxcbiAgICBmaWxlSW5wdXRJZDogJ2ZpbGUtaW5wdXQnLFxuICAgIGZpbGVzQXJyYXk6IFtdLFxuICAgIGZpbGVSZW1vdmVCdG5UeHQ6ICdEZWxldGUnLFxuICAgIGZpbGVSZW1vdmVCdG5JZDogJ2ZpbGVEZWxldGUnLFxuICAgIHVwbG9hZEltZ0FsdFR4dDogJycsXG4gICAgY2FuY2VsQnRuVGV4dDogJ0NhbmNlbCcsXG4gICAgc3VibWl0QnRuVHh0OiAnQWRkIExpY2Vuc2UnLFxuICAgIHN1Ym1pdEJ0bkN1c3RvbUNsYXNzOiAnJyxcbiAgICBjYW5jZWxCdG5DdXN0b21DbGFzczogJycsXG5cbiAgfVxuICBcbiAgY29udHJvbE9uZSA9IG5ldyBGb3JtQ29udHJvbCgnJyk7IFxuICBjb250cm9sVHdvID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgZGF0ZUNvbnRyb2xPbmUgPSBuZXcgRm9ybUNvbnRyb2woJycpOyBcbiAgZGF0ZUNvbnRyb2xUd28gPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICAvLyBASW5wdXQoJ2VuYWJsZS1yZXF1aXJlZC12YWxpZGF0b3ItZm9yLWNvbnRyb2wtb25lJylcbiAgLy8gc2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yRm9yQ29udHJvbE9uZSh2YWwpIHtcbiAgLy8gICBpZiAodmFsKSB7XG4gIC8vICAgICB0aGlzLmNvbnRyb2xPbmUuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgLy8gICAgIHRoaXMuY29udHJvbE9uZS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vIEBJbnB1dCgnZW5hYmxlLXBhdHRlcm4tZm9yLWNvbnRyb2wtb25lJylcbiAgLy8gc2V0IGVuYWJsZVBhdHRlcm5WYWxpZGF0b3JzRm9yQ29udHJvbE9uZSh2YWwpIHtcbiAgLy8gICBpZiAodmFsKSB7XG4gIC8vICAgICB0aGlzLmNvbnRyb2xPbmUuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5kaWFsb2dEYXRhLmNvbnRyb2xPbmVQYXR0ZXJuKSk7XG4gIC8vICAgICB0aGlzLmNvbnRyb2xPbmUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvLyBASW5wdXQoJ2VuYWJsZS1yZXF1aXJlZC12YWxpZGF0b3ItZm9yLWNvbnRyb2wtdHdvJylcbiAgLy8gc2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yRm9yQ29udHJvbFR3byh2YWwpIHtcbiAgLy8gICBpZiAodmFsKSB7XG4gIC8vICAgICB0aGlzLmNvbnRyb2xUd28uc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgLy8gICAgIHRoaXMuY29udHJvbFR3by51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vIEBJbnB1dCgnZW5hYmxlLXBhdHRlcm4tZm9yLWNvbnRyb2wtdHdvJylcbiAgLy8gc2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yc0ZvckRhdGVDb250cm9sT25lKHZhbCkge1xuICAvLyAgIGlmICh2YWwpIHtcbiAgLy8gICAgIHRoaXMuZGF0ZUNvbnRyb2xPbmUuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgLy8gICAgIHRoaXMuZGF0ZUNvbnRyb2xPbmUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvLyBASW5wdXQoJ2VuYWJsZS1yZXF1aXJlZC12YWxpZGF0b3ItZm9yLWRhdGVDb250cm9sLW9uZScpXG4gIC8vIHNldCBlbmFibGVSZXF1aXJlZFZhbGlkYXRvckZvckRhdGVDb250cm9sVHdvKHZhbCkge1xuICAvLyAgIGlmICh2YWwpIHtcbiAgLy8gICAgIHRoaXMuZGF0ZUNvbnRyb2xUd28uc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgLy8gICAgIHRoaXMuZGF0ZUNvbnRyb2xUd28udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAvLyAgIH1cbiAgLy8gfVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhciwgcHVibGljIGRpYWxvZ0N1c3RvbVJlZjogTWF0RGlhbG9nUmVmPFN1a3VBZGRMaWNlbnNlTW9kYWxDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55LCBcbiAgICAvLyBwdWJsaWMgc3VrdU1vZGFsU2VydmljZTogRHluYW1pY0RhdGFcbiAgICApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5kYXRhKSkge1xuICAgICAgaWYgKHRoaXMuZGF0YVtrZXldKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nRGF0YVtrZXldID0gdGhpcy5kYXRhW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYodGhpcy5kaWFsb2dEYXRhLmNvbnRyb2xPbmVSZXF1aXJlZCkge1xuICAgICAgIHRoaXMuY29udHJvbE9uZS5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5jb250cm9sT25lLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmRpYWxvZ0RhdGEuY29udHJvbFR3b1JlcXVpcmVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2xUd28uc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgIHRoaXMuY29udHJvbFR3by51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuXG4gICBpZih0aGlzLmRpYWxvZ0RhdGEuZGF0ZUNvbnRyb2xPbmVSZXF1aXJlZCkge1xuICAgICAgdGhpcy5kYXRlQ29udHJvbE9uZS5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5kYXRlQ29udHJvbE9uZS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuXG4gICBpZih0aGlzLmRpYWxvZ0RhdGEuZGF0ZUNvbnRyb2xUd29SZXF1aXJlZCkge1xuICAgICAgdGhpcy5kYXRlQ29udHJvbFR3by5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5kYXRlQ29udHJvbFR3by51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuXG4gICBpZiAodGhpcy5kaWFsb2dEYXRhLmNvbnRyb2xUd29QYXR0ZXJuRW5hYmxlZCAmJiB0aGlzLmRpYWxvZ0RhdGEuY29udHJvbFR3b1JlcXVpcmVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2xUd28uc2V0VmFsaWRhdG9ycyhbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKHRoaXMuZGlhbG9nRGF0YS5jb250cm9sVHdvUGF0dGVybildKTtcbiAgICAgIHRoaXMuY29udHJvbFR3by51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuXG5cbiAgICAvLyBpZiAodGhpcy5kaWFsb2dEYXRhLmNvbnRyb2xPbmVQYXR0ZXJuRW5hYmxlZCkge1xuICAgIC8vICAgdGhpcy5jb250cm9sT25lLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5wYXR0ZXJuKHRoaXMuZGlhbG9nRGF0YS5jb250cm9sT25lUGF0dGVybikpO1xuICAgIC8vICAgdGhpcy5jb250cm9sT25lLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAvLyB9XG5cbiAgICBjb25zb2xlLmxvZygndGhpcy5kaWFsb2dEYXRhJywgdGhpcy5kaWFsb2dEYXRhKTtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25PbmUgPSB0aGlzLmNvbnRyb2xPbmUudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuY29udHJvbE9uZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdGhpcy51c2VybmFtZUNvbnRyb2wuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uVHdvID0gdGhpcy5jb250cm9sVHdvLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmNvbnRyb2xUd29WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMudXNlcm5hbWVDb250cm9sLlxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuX3N1YnNjcmlwdGlvblRocmVlID0gdGhpcy5kYXRlQ29udHJvbE9uZS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5kYXRlQ29udHJvbE9uZVZhbHVlID0gIHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMudXNlcm5hbWVDb250cm9sLlxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbkZvdXIgPSB0aGlzLmRhdGVDb250cm9sVHdvLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmRhdGVDb250cm9sVHdvVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB0aGlzLnVzZXJuYW1lQ29udHJvbC5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyB0aGlzLl9zdWJzY3JpYmVGaWxlcyA9IHRoaXMuZ2V0VXBsb2FkZWRGaWxlcygpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgLy8gICAgIGlmICh2YWx1ZSkge1xuICAgIC8vICAgICAgIHRoaXMudXBsb2FkRmlsZXMgPSB2YWx1ZTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAvLyB0aGlzLnVzZXJuYW1lQ29udHJvbC5cbiAgICAvLyAgICAgfVxuICAgIC8vIH0pXG4gIH1cblxuICBhZGRMaWNlbnNlKCkge1xuICAgIGlmKHRoaXMuY29udHJvbE9uZS5pbnZhbGlkIHx8IHRoaXMuY29udHJvbFR3by5pbnZhbGlkIHx8XG4gICAgIHRoaXMuZGF0ZUNvbnRyb2xPbmUuaW52YWxpZCB8fCB0aGlzLmRhdGVDb250cm9sVHdvLmludmFsaWQpIHtcbiAgICAgICB0aGlzLnNuYWNrQmFyLm9wZW4oJ1BsZWFzZSBmaWxsIGFsbCB0aGUgbWFuZGF0b3J5IGZpZWxkcy4nLCAnY2xvc2UnLCB7XG4gICAgICAgICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgICAgIGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAwXG4gICAgICAgIH0pO1xuICAgfSBlbHNlIHtcbiAgICBsZXQgcmVxT2JqID0ge1xuICAgICAgbGljZW5zZToge1xuICAgICAgICBsaWNlbnNlTmFtZTogdGhpcy5jb250cm9sT25lVmFsdWUsXG4gICAgICAgIGxpY2Vuc2VOdW1iZXI6IHRoaXMuY29udHJvbFR3b1ZhbHVlLFxuICAgICAgICBzdGFydERhdGU6IHRoaXMuZGF0ZUNvbnRyb2xPbmVWYWx1ZSxcbiAgICAgICAgZW5kRGF0ZTogdGhpcy5kYXRlQ29udHJvbFR3b1ZhbHVlLFxuICAgICAgICBmaWxlczogdGhpcy5tdWxGaWxlc1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmRpYWxvZ0N1c3RvbVJlZi5jbG9zZShyZXFPYmopO1xuICAgfVxuICB9XG5cbiAgY2xvc2VEaWFsb2coKSB7XG4gICAgdGhpcy5kaWFsb2dDdXN0b21SZWYuY2xvc2UoZmFsc2UpO1xuICB9XG5cbiAgc3RhcnRVcGxvYWQoZSkge1xuICAgICAgbGV0IG1heEZpbGVTaXplID0gMTAwOTcxNTI7XG4gICAgbGV0IGN1cnJlbnRGaWxlU2l6ZTtcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlLnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzW2ldO1xuICAgICAgICBjdXJyZW50RmlsZVNpemUgPSBmaWxlLnNpemU7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmaWxlLnR5cGUnLCBmaWxlLnR5cGUpXG4gICAgICAgIGlmIChcbiAgICAgICAgICBjdXJyZW50RmlsZVNpemUgPD0gbWF4RmlsZVNpemUgJiZcbiAgICAgICAgICAoZmlsZS50eXBlID09ICdpbWFnZS9qcGVnJyB8fCBmaWxlLnR5cGUgPT0gJ2ltYWdlL3BuZycgfHwgZmlsZS50eXBlID09ICdpbWFnZS9qcGcnIHx8IGZpbGUudHlwZSA9PSAnLnBkZicgfHxcbiAgICAgICAgICAgZmlsZS50eXBlID09ICdhcHBsaWNhdGlvbi9ydGYnIHx8IGZpbGUudHlwZSA9PSAnYXBwbGljYXRpb24vbXN3b3JkJyB8fFxuICAgICAgICAgICBmaWxlLnR5cGUgPT0gJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50JyB8fCBmaWxlLnR5cGUgPT0gJ2FwcGxpY2F0aW9uL3BkZicpXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIHRoaXMubXVsRmlsZXMucHVzaChlLnRhcmdldC5maWxlc1tpXSk7XG4gICAgICAgICAgLy8gdGhpcy5pbWFnZXBhdGggPSB0aGlzLkxpY2VuY2VzQW5kUmVnaXN0cmF0aW9uLnZhbHVlLmxvZ287XG4gICAgICAgICAgLy8gdGhpcy5pbWFnZUFkZGVkID0gJ0ltYWdlIGFkZGVkbnNibWRibWJubWInO1xuICAgICAgICAgIHRoaXMubXVsRmlsZXMucHVzaChlLnRhcmdldC5maWxlc1tpXSk7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5tdWxGaWxlcyk7XG4gICAgICAgICAgLy8gbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgLy8gcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgICAvLyAgIHRoaXMuaW1hZ2VQcmV2aWV3VXJscy5wdXNoKHsgZmlsZTogZS50YXJnZXQucmVzdWx0LCBuYW1lOiBmaWxlLm5hbWUgfSk7XG4gICAgICAgICAgLy8gfTtcbiAgICAgICAgICAvLyByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICB0aGlzLnNuYWNrQmFyLm9wZW4oJ1VwbG9hZCBXb3JkLCBJbWFnZSBvciBQREYgZm9ybWF0IG9mIHlvdXIgTGljZW5zZSwgU2l6ZSBzaG91bGQgYmUgYmVsb3cgMTBNQi4nLCAnY2xvc2UnLCB7XG4gICAgICAgICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgICAgIGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAwXG4gICAgICAgIH0pOyBcbiAgICAgICAgfVxuICBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVGaWxlKHBhcmFtKSB7XG4gICAgdGhpcy5tdWxGaWxlcy5zcGxpY2UocGFyYW0sIDEpXG4gICAgY29uc29sZS5sb2coJ3BhcmFtJywgcGFyYW0pXG4gIH1cblxuICBzbmFja2Jhcihtc2cpIHtcbiAgICB0aGlzLnNuYWNrQmFyLm9wZW4obXNnLCAnY2xvc2UnLCB7XG4gICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgIGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgIGR1cmF0aW9uOiAzNTAwXG4gICAgfSk7XG4gIH1cblxufVxuIl19