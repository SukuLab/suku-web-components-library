/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
var SukuAddLicenseModalComponent = /** @class */ (function () {
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
    function SukuAddLicenseModalComponent(snackBar, dialogCustomRef, data) {
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
    SukuAddLicenseModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(Object.keys(this.data)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (this.data[key]) {
                    this.dialogData[key] = this.data[key];
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
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
        function (value) {
            if (value) {
                _this.controlOneValue = value;
            }
            else {
                // this.usernameControl.
            }
        }));
        this._subscriptionTwo = this.controlTwo.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                _this.controlTwoValue = value;
            }
            else {
                // this.usernameControl.
            }
        }));
        this._subscriptionThree = this.dateControlOne.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                _this.dateControlOneValue = value;
            }
            else {
                // this.usernameControl.
            }
        }));
        this._subscriptionFour = this.dateControlTwo.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                _this.dateControlTwoValue = value;
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
    };
    /**
     * @return {?}
     */
    SukuAddLicenseModalComponent.prototype.addLicense = /**
     * @return {?}
     */
    function () {
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
            var reqObj = {
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
    };
    /**
     * @return {?}
     */
    SukuAddLicenseModalComponent.prototype.closeDialog = /**
     * @return {?}
     */
    function () {
        this.dialogCustomRef.close(false);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SukuAddLicenseModalComponent.prototype.startUpload = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        /** @type {?} */
        var maxFileSize = 10097152;
        /** @type {?} */
        var currentFileSize;
        if (e.target.files && e.target.files.length > 0) {
            var _loop_1 = function () {
                /** @type {?} */
                var file = e.target.files[i];
                currentFileSize = file.size;
                console.log('file.type', file.type);
                if (currentFileSize <= maxFileSize &&
                    (file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/jpg' || file.type == '.pdf' ||
                        file.type == 'application/rtf' || file.type == 'application/msword' ||
                        file.type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.type == 'application/pdf')) {
                    this_1.mulFiles.push(e.target.files[i]);
                    /** @type {?} */
                    var reader = new FileReader();
                    reader.onload = (/**
                     * @param {?} e
                     * @return {?}
                     */
                    function (e) {
                        _this.imagePreviewUrls.push({ file: e.target.result, name: file.name });
                    });
                    reader.readAsDataURL(file);
                }
                else {
                    this_1.snackBar.open('Upload Word, Image or PDF format of your License, Size should be below 10MB.', 'close', {
                        verticalPosition: 'top',
                        horizontalPosition: 'right',
                        duration: 5000
                    });
                }
            };
            var this_1 = this;
            for (var i = 0; i < e.target.files.length; i++) {
                _loop_1();
            }
        }
    };
    /**
     * @param {?} param
     * @return {?}
     */
    SukuAddLicenseModalComponent.prototype.removeFile = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        this.mulFiles.splice(param, 1);
        console.log('param', param);
        this.imagePreviewUrls.splice(param, 1);
        console.log('param url', param);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    SukuAddLicenseModalComponent.prototype.downloadDoc = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        console.log("this si what i am doing ", file);
        /** @type {?} */
        var name = file.name;
        /** @type {?} */
        var uri = file.file;
        /** @type {?} */
        var downloadLink = document.createElement("a");
        downloadLink.href = uri;
        downloadLink.download = name;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    /**
     * @param {?} msg
     * @return {?}
     */
    SukuAddLicenseModalComponent.prototype.snackbar = /**
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
    SukuAddLicenseModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-add-license-modal',
                    template: " <div>\n    <div class=\"col-sm-12  card-header {{ dialogData?.headerCutomStyle }}\">\n        <div class=\"col-sm-12\">\n          <h1 class=\"headerFont\">{{dialogData?.title}}</h1>\n          <p>{{dialogData?.subTitle}}</p>\n        </div>\n      </div>\n      <div class=\"modal-body col-sm-12\">\n          <div>\n          \t  <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\"\n              dialogData-parent=\"#accordionExample\">\n              <div>\n                <div class=\"pL\">\n                <div class=\"col-sm-12 mT-7\">\n                  <div class=\"row\">\n                    <mat-form-field class=\"col-sm-6\">\n                        <input matInput placeholder=\"{{ dialogData?.controlOnePlaceholder }}\"  [formControl]=\"controlOne\" name=\"{{dialogData?.controlOne}}\" id=\"{{ dialogData?.controlOneId }}\">\n                        <mat-error *ngIf=\"controlOne.hasError('required')\">\n                            {{ dialogData?.controlOneRquiredErrorMsg }}\n                          </mat-error>\n                    </mat-form-field>\n                    <div class=\"col-sm-6 p-0\">\n                    <mat-form-field class=\"col-12 \">\n                      <input matInput placeholder=\"{{dialogData?.controlTwoPlaceholder}}\" \n                        [formControl]=\"controlTwo\" id=\"{{ dialogData?.controlTwoId }}\"\n                        name=\"{{dialogData?.controlTwo}}\" #tooltip=\"matTooltip\"\n                        matTooltip=\"{{ dialogData?.controlTwoToolTip }}\">\n                      <mat-error *ngIf=\"controlTwo.hasError('required')\">\n                          \t{{ dialogData?.controlTwoRquiredErrorMsg }}\n                      </mat-error>\n                      <mat-error *ngIf=\"controlTwo.hasError('pattern')\">\n                            {{ dialogData?.controlTwoPatternErrorMsg }}\n                      </mat-error>\n                    </mat-form-field>\n                    <div >\n                    <p class=\"pl-4 {{ dialogData?.hintClass }}\">{{ dialogData?.controlHint }}</p>\n                  </div>\n                  </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 mT-7\">\n                  <div class=\"row\">\n                    <mat-form-field  class=\"col-sm-6\">\n                      <mat-label>{{ dialogData?.dateControlOnePlaceholder }}</mat-label>\n                      <input matInput [matDatepicker]=\"picker1\" [formControl]=\"dateControlOne\" \n                       id=\"{{ dialogData?.dateControlOneId }}\"   #checkin1 name=\"{{ dialogData?.dateControlOne }}\" [min]=\"dialogData?.startDateMinDate\"  [max]=\"dialogData?.startDateMaxDate\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker1></mat-datepicker>\n                      <mat-error *ngIf=\"dateControlOne.hasError('required')\">\n                            {{ dialogData?.dateControlOneRquiredErrorMsg }}\n                      </mat-error>\n                    </mat-form-field>\n                    <mat-form-field  class=\"col-sm-6\">\n                      <mat-label>{{ dialogData?.dateControlTwoPlaceholder }}</mat-label>\n                      <input matInput [matDatepicker]=\"picker2\" id=\"{{ dialogData?.dateControlTwoId }}\" name=\"{{dialogData?.dateControlTwo}}\"\n                        #checkout1 [formControl]=\"dateControlTwo\"   [min]=\"dialogData?.endDateMinDate\" [max]=\"dialogData?.endDateMaxDate\" >\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker2 color=\"primary\"></mat-datepicker>\n                      <mat-error *ngIf=\"dateControlTwo.hasError('required')\">\n                            {{ dialogData?.dateControlTwoRquiredErrorMsg }}\n                      </mat-error>\n                    </mat-form-field>                           \n                    <div class=\"col-sm-12 pL\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                       <aside >{{ dialogData?.uploadTitle }}</aside>\n                         <div class=\" form-group\">\n                          <input   #fileInput (change)=\"startUpload($event);\"\n                           accept=\"{{ dialogData?.acceptDocment }}\"  id=\"{{ dialogData?.fileInputId }}\"\n                            type=\"file\" style=\"display: none\" />\n                        </div>\n                        <div class=\"bT text-center\">\n                        <a (click)=\"fileInput.click()\"><img [src]=\"dialogData?.uploadImg\" alt=\"{{ dialogData?.uploadImgAltTxt }}\" \n                          width=\"90px\" height=\"100px\"></a>\n                      </div>\n                      </div>\n                      <div class=\"col-sm-9\">\n                      <aside>{{ dialogData?.fileListTitle }}</aside>\n                        <mat-chip-list>\n                          <mat-chip class=\"whiteSpace\" *ngFor=\"let file of imagePreviewUrls;let docIndex = index;\"> <br>\n                            <mat-icon matChipRemove (click)=\"downloadDoc(file)\" matTooltip=\"Download\">\n                                save_alt\n                              </mat-icon>\n                            <mat-icon  id=\"{{ dialogData?.fileRemoveBtnId }}\" matChipRemove matTooltip=\"Delete\" (click)=\"removeFile(docIndex)\">clear\n                            </mat-icon>\n                            <span> {{file.name}}</span>\n                          </mat-chip>\n                        </mat-chip-list>\n                      </div>\n                     </div>\n                  </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div>\n          </div>\n          <div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 mt-5 mb-5\">\n          <div class=\"row  d-flex justify-content-around\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-end\n            mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2\">\n                <button  type=\"button\" (click)=\"closeDialog()\"\n                  class=\"btn btn-secondary btn-default btn-lg col-lg-6 col-md-6 {{ dialogData?.cancelBtnCustomClass }}\">{{ dialogData?.cancelBtnText }}</button>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n                <button type=\"button\" class=\"btn btn-info btn btn-info btn-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 {{ dialogData?.submitBtnCustomClass }}\" (click)=\"addLicense();\">{{ dialogData?.submitBtnTxt }}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n </div>\n",
                    styles: [".btn-info{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000}.headerFont{font-family:Poppins,sans-serif;letter-spacing:0;margin-top:8px;color:#aba4a4e0;font-size:2.5rem}.pointer{cursor:pointer}.bT{border:2px solid #e6e1e18c!important;background-color:#f7f3f354!important;margin-right:24px}.card-header{background-color:#272727;box-shadow:0 1px 1px rgba(0,0,0,.5);color:#fff}.licNum{position:absolute;top:44px;right:267px;font-size:12px;margin-left:50px;color:#000000ad;font-family:'Encode Sans',sans-serif!important}::ng-deep mat-dialog-container{padding:0!important;overflow:hidden!important}:host ::ng-deep mat-dialog-content{max-height:91%!important;overflow-y:none!important;margin:0!important;height:100%!important}:host ::ng-deep mat-dialog-actions{margin:5px 10px!important}.btn-default{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#fff;color:#000}.btn-default:hover{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#757575;color:#fff}.btn-default:click{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#757575!important;color:#fff}.btn-default:active{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#757575;color:#fff}.bgWhite{background-color:#fff!important}.btn-info:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info:click{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e!important;color:#fff}.btn-info:active{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn-info.disabled{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:grey}.whiteSpace{white-space:nowrap}"]
                }] }
    ];
    /** @nocollapse */
    SukuAddLicenseModalComponent.ctorParameters = function () { return [
        { type: MatSnackBar },
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    SukuAddLicenseModalComponent.propDecorators = {
        dialogData: [{ type: Input }]
    };
    return SukuAddLicenseModalComponent;
}());
export { SukuAddLicenseModalComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtbGljZW5zZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hZGQtbGljZW5zZS1tb2RhbC9zdWt1LWFkZC1saWNlbnNlLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWtCLEtBQUssRUFBZ0IsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJL0U7SUErRUUsc0RBQXNEO0lBQ3RELGtEQUFrRDtJQUNsRCxlQUFlO0lBQ2YsMERBQTBEO0lBQzFELGdEQUFnRDtJQUNoRCxNQUFNO0lBQ04sSUFBSTtJQUNKLDJDQUEyQztJQUMzQyxrREFBa0Q7SUFDbEQsZUFBZTtJQUNmLDRGQUE0RjtJQUM1RixnREFBZ0Q7SUFDaEQsTUFBTTtJQUNOLElBQUk7SUFDSixzREFBc0Q7SUFDdEQsa0RBQWtEO0lBQ2xELGVBQWU7SUFDZiwwREFBMEQ7SUFDMUQsZ0RBQWdEO0lBQ2hELE1BQU07SUFDTixJQUFJO0lBQ0osMkNBQTJDO0lBQzNDLHVEQUF1RDtJQUN2RCxlQUFlO0lBQ2YsOERBQThEO0lBQzlELG9EQUFvRDtJQUNwRCxNQUFNO0lBQ04sSUFBSTtJQUNKLDBEQUEwRDtJQUMxRCxzREFBc0Q7SUFDdEQsZUFBZTtJQUNmLDhEQUE4RDtJQUM5RCxvREFBb0Q7SUFDcEQsTUFBTTtJQUNOLElBQUk7SUFDSixzQ0FBb0IsUUFBcUIsRUFBUyxlQUEyRCxFQUMzRSxJQUFTO1FBRHZCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBNEM7UUFDM0UsU0FB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QUNmLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTVSRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsMHVOQUFzRDs7aUJBRXZEOzs7O2dCQVJ1QyxXQUFXO2dCQUExQyxZQUFZO2dEQXVIaEIsTUFBTSxTQUFDLGVBQWU7Ozs2QkE3RnhCLEtBQUs7O0lBd1FSLG1DQUFDO0NBQUEsQUE5UkQsSUE4UkM7U0F4UlksNEJBQTRCOzs7SUFDdkMsd0RBQXlCOztJQUN6Qix3REFBaUI7O0lBQ2pCLHdEQUFpQjs7SUFDakIsMERBQW1COztJQUNuQix5REFBa0I7O0lBQ2xCLHVEQUFnQjs7SUFDaEIsdURBQWdCOztJQUNoQix1REFBZ0I7O0lBQ2hCLDJEQUFvQjs7SUFDcEIsMkRBQW9COztJQUNwQixnREFBYzs7SUFDZCx3REFBc0I7O0lBQ3RCLG1EQUFtQjs7SUFHbkIsa0RBbURDOztJQUVELGtEQUFpQzs7SUFDakMsa0RBQWlDOztJQUNqQyxzREFBcUM7O0lBQ3JDLHNEQUFxQzs7Ozs7SUFvQ3pCLGdEQUE2Qjs7SUFBRSx1REFBa0U7O0lBQzNHLDRDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBLCBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbi8vIGltcG9ydCB7IFN1a3VNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi9zdWt1LW1vZGFsL3N1a3UtbW9kYWwuc2VydmljZSdcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1hZGQtbGljZW5zZS1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWFkZC1saWNlbnNlLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1hZGQtbGljZW5zZS1tb2RhbC5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgU3VrdUFkZExpY2Vuc2VNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm1TdW1pdEF0dGVtcHQgPSBmYWxzZTtcbiAgX3N1YnNjcmlwdGlvbk9uZTtcbiAgX3N1YnNjcmlwdGlvblR3bztcbiAgX3N1YnNjcmlwdGlvblRocmVlO1xuICBfc3Vic2NyaXB0aW9uRm91cjtcbiAgX3N1YnNjcmliZUZpbGVzO1xuICBjb250cm9sT25lVmFsdWU7XG4gIGNvbnRyb2xUd29WYWx1ZTtcbiAgZGF0ZUNvbnRyb2xPbmVWYWx1ZTtcbiAgZGF0ZUNvbnRyb2xUd29WYWx1ZTtcbiAgbXVsRmlsZXMgPSBbXTtcbiAgaW1hZ2VQcmV2aWV3VXJscyA9IFtdO1xuICB1cGxvYWRGaWxlczogYW55W107XG4gIC8vIHVwbG9hZEZpbGVzID0gW107IFxuXG4gIEBJbnB1dCgpIGRpYWxvZ0RhdGEgPSB7XG4gICAgY29udHJvbE9uZTogJ2NvbnRyb2xPbmUnLFxuICAgIGNvbnRyb2xUd286ICdjb250cm9sVHdvJyxcbiAgICBkYXRlQ29udHJvbE9uZTogJ2RhdGVDb250cm9sT25lJyxcbiAgICBkYXRlQ29udHJvbFR3bzogJ2RhdGVDb250cm9sVHdvJyxcbiAgICAnY29udHJvbE9uZVBhdHRlcm5FbmFibGVkJzogJycsXG4gICAgJ2NvbnRyb2xUd29QYXR0ZXJuRW5hYmxlZCc6ICcnLFxuICAgIGNvbnRyb2xPbmVSZXF1aXJlZDogJycsXG4gICAgY29udHJvbFR3b1JlcXVpcmVkOiAnJyxcbiAgICBjb250cm9sVHdvUmVxdWlyZWRkOiAnJyxcbiAgICBkYXRlQ29udHJvbE9uZVJlcXVpcmVkOiAnJyxcbiAgICBkYXRlQ29udHJvbFR3b1JlcXVpcmVkOiAnJyxcbiAgICAnY29udHJvbE9uZVBhdHRlcm4nOiAnJyxcbiAgICAnY29udHJvbFR3b1BhdHRlcm4nOiAnJyxcbiAgICAndGl0bGUnOiAnTGljZW5jZSBhbmQgUmVnaXN0cmF0aW9uJyxcbiAgICAnc3ViVGl0bGUnOiAnRW50ZXIgeW91ciBsaWNlbnNlIGRldGFpbHMgaGVyZScsXG4gICAgJ2NvbnRyb2xIaW50JzogJ0V4YW1wbGU6IDEyMzQ1Njc4OWExMjM0NScsXG4gICAgJ2hpbnRDbGFzcyc6ICcnLFxuICAgICdoZWFkZXJDdXRvbVN0eWxlJzogJycsXG4gICAgJ3N0YXJ0RGF0ZU1heERhdGUnOiAnJyxcbiAgICAnZW5kRGF0ZU1heERhdGUnOiAnJyxcbiAgICAnc3RhcnREYXRlTWluRGF0ZSc6ICcnLFxuICAgICdlbmREYXRlTWluRGF0ZSc6ICcnLFxuICAgICdjb250cm9sT25lSWQnOiAnbGljZW5zZU5hbWUnLFxuICAgIGNvbnRyb2xUd29JZDogJ2xpY2Vuc2VOdW1iZXInLFxuICAgIGRhdGVDb250cm9sT25lSWQ6ICdzdGFydERhdGUnLFxuICAgIGRhdGVDb250cm9sVHdvSWQ6ICdlbmREYXRlJyxcbiAgICBjb250cm9sVHdvVG9vbFRpcDogJ1RoZSBmb3JtYXQgc2hvdWxkIGJlIDEyMzQ1Njc4OWExMjM0NScsXG4gICAgY29udHJvbE9uZVBsYWNlaG9sZGVyOiAnTGljZW5zZSBOYW1lJyxcbiAgICBjb250cm9sVHdvUGxhY2Vob2xkZXI6ICdMaWNlbnNlIE51bWJlcicsXG4gICAgZGF0ZUNvbnRyb2xPbmVQbGFjZWhvbGRlcjogJ0xpY2VuY2UgSXNzdWUgRGF0ZScsXG4gICAgZGF0ZUNvbnRyb2xUd29QbGFjZWhvbGRlcjogJ0xpY2VuY2UgRXhwaXJ5IERhdGUoT3B0aW9uYWwpJyxcbiAgICBjb250cm9sT25lUnF1aXJlZEVycm9yTXNnOiAnQ2Fubm90IGJlIGJsYW5rLicsXG4gICAgY29udHJvbFR3b1JxdWlyZWRFcnJvck1zZzogJ0Nhbm5vdCBiZSBibGFuay4nLFxuICAgIGNvbnRyb2xUd29QYXR0ZXJuRXJyb3JNc2c6ICdJbnZhbGlkIExpY2VuY2UgbnVtYmVyJyxcbiAgICBkYXRlQ29udHJvbE9uZVJxdWlyZWRFcnJvck1zZzogJ0Nhbm5vdCBiZSBibGFuay4nLFxuICAgIGRhdGVDb250cm9sVHdvUnF1aXJlZEVycm9yTXNnOiAnQ2Fubm90IGJlIGJsYW5rLicsXG4gICAgYWNjZXB0RG9jbWVudDogJ2FwcGxpY2F0aW9uL21zd29yZCwgdGV4dC9wbGFpbiwgYXBwbGljYXRpb24vcGRmLCBpbWFnZS8qJyxcbiAgICB1cGxvYWRJbWc6ICdodHRwOi8vMzQuMjE3Ljg5LjIwNC9hc3NldHMvaW1hZ2VzL2ZpbGVVcGxvYWQucG5nJyxcbiAgICB1cGxvYWRUaXRsZTogJyBVcGxvYWQgTGljZW5jZScsXG4gICAgZmlsZUxpc3RUaXRsZTogJ1VwbG9hZGVkIERvY3VtZW50cycsXG4gICAgZmlsZUlucHV0SWQ6ICdmaWxlLWlucHV0JyxcbiAgICBmaWxlc0FycmF5OiBbXSxcbiAgICBmaWxlUmVtb3ZlQnRuVHh0OiAnRGVsZXRlJyxcbiAgICBmaWxlUmVtb3ZlQnRuSWQ6ICdmaWxlRGVsZXRlJyxcbiAgICB1cGxvYWRJbWdBbHRUeHQ6ICcnLFxuICAgIGNhbmNlbEJ0blRleHQ6ICdDYW5jZWwnLFxuICAgIHN1Ym1pdEJ0blR4dDogJ0FkZCBMaWNlbnNlJyxcbiAgICBzdWJtaXRCdG5DdXN0b21DbGFzczogJycsXG4gICAgY2FuY2VsQnRuQ3VzdG9tQ2xhc3M6ICcnLFxuXG4gIH1cblxuICBjb250cm9sT25lID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgY29udHJvbFR3byA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIGRhdGVDb250cm9sT25lID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgZGF0ZUNvbnRyb2xUd28gPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICAvLyBASW5wdXQoJ2VuYWJsZS1yZXF1aXJlZC12YWxpZGF0b3ItZm9yLWNvbnRyb2wtb25lJylcbiAgLy8gc2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yRm9yQ29udHJvbE9uZSh2YWwpIHtcbiAgLy8gICBpZiAodmFsKSB7XG4gIC8vICAgICB0aGlzLmNvbnRyb2xPbmUuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgLy8gICAgIHRoaXMuY29udHJvbE9uZS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vIEBJbnB1dCgnZW5hYmxlLXBhdHRlcm4tZm9yLWNvbnRyb2wtb25lJylcbiAgLy8gc2V0IGVuYWJsZVBhdHRlcm5WYWxpZGF0b3JzRm9yQ29udHJvbE9uZSh2YWwpIHtcbiAgLy8gICBpZiAodmFsKSB7XG4gIC8vICAgICB0aGlzLmNvbnRyb2xPbmUuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5kaWFsb2dEYXRhLmNvbnRyb2xPbmVQYXR0ZXJuKSk7XG4gIC8vICAgICB0aGlzLmNvbnRyb2xPbmUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvLyBASW5wdXQoJ2VuYWJsZS1yZXF1aXJlZC12YWxpZGF0b3ItZm9yLWNvbnRyb2wtdHdvJylcbiAgLy8gc2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yRm9yQ29udHJvbFR3byh2YWwpIHtcbiAgLy8gICBpZiAodmFsKSB7XG4gIC8vICAgICB0aGlzLmNvbnRyb2xUd28uc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgLy8gICAgIHRoaXMuY29udHJvbFR3by51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vIEBJbnB1dCgnZW5hYmxlLXBhdHRlcm4tZm9yLWNvbnRyb2wtdHdvJylcbiAgLy8gc2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yc0ZvckRhdGVDb250cm9sT25lKHZhbCkge1xuICAvLyAgIGlmICh2YWwpIHtcbiAgLy8gICAgIHRoaXMuZGF0ZUNvbnRyb2xPbmUuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgLy8gICAgIHRoaXMuZGF0ZUNvbnRyb2xPbmUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvLyBASW5wdXQoJ2VuYWJsZS1yZXF1aXJlZC12YWxpZGF0b3ItZm9yLWRhdGVDb250cm9sLW9uZScpXG4gIC8vIHNldCBlbmFibGVSZXF1aXJlZFZhbGlkYXRvckZvckRhdGVDb250cm9sVHdvKHZhbCkge1xuICAvLyAgIGlmICh2YWwpIHtcbiAgLy8gICAgIHRoaXMuZGF0ZUNvbnRyb2xUd28uc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgLy8gICAgIHRoaXMuZGF0ZUNvbnRyb2xUd28udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAvLyAgIH1cbiAgLy8gfVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhciwgcHVibGljIGRpYWxvZ0N1c3RvbVJlZjogTWF0RGlhbG9nUmVmPFN1a3VBZGRMaWNlbnNlTW9kYWxDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55LFxuICAgIC8vIHB1YmxpYyBzdWt1TW9kYWxTZXJ2aWNlOiBEeW5hbWljRGF0YVxuICApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5kYXRhKSkge1xuICAgICAgaWYgKHRoaXMuZGF0YVtrZXldKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nRGF0YVtrZXldID0gdGhpcy5kYXRhW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlhbG9nRGF0YS5jb250cm9sT25lUmVxdWlyZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbE9uZS5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5jb250cm9sT25lLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kaWFsb2dEYXRhLmNvbnRyb2xUd29SZXF1aXJlZCkge1xuICAgICAgdGhpcy5jb250cm9sVHdvLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICB0aGlzLmNvbnRyb2xUd28udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRpYWxvZ0RhdGEuZGF0ZUNvbnRyb2xPbmVSZXF1aXJlZCkge1xuICAgICAgdGhpcy5kYXRlQ29udHJvbE9uZS5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5kYXRlQ29udHJvbE9uZS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlhbG9nRGF0YS5kYXRlQ29udHJvbFR3b1JlcXVpcmVkKSB7XG4gICAgICB0aGlzLmRhdGVDb250cm9sVHdvLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICB0aGlzLmRhdGVDb250cm9sVHdvLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kaWFsb2dEYXRhLmNvbnRyb2xUd29QYXR0ZXJuRW5hYmxlZCAmJiB0aGlzLmRpYWxvZ0RhdGEuY29udHJvbFR3b1JlcXVpcmVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2xUd28uc2V0VmFsaWRhdG9ycyhbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKHRoaXMuZGlhbG9nRGF0YS5jb250cm9sVHdvUGF0dGVybildKTtcbiAgICAgIHRoaXMuY29udHJvbFR3by51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuXG4gICAgLy8gaWYgKHRoaXMuZGlhbG9nRGF0YS5jb250cm9sT25lUGF0dGVybkVuYWJsZWQpIHtcbiAgICAvLyAgIHRoaXMuY29udHJvbE9uZS5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucGF0dGVybih0aGlzLmRpYWxvZ0RhdGEuY29udHJvbE9uZVBhdHRlcm4pKTtcbiAgICAvLyAgIHRoaXMuY29udHJvbE9uZS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgLy8gfVxuXG4gICAgY29uc29sZS5sb2coJ3RoaXMuZGlhbG9nRGF0YScsIHRoaXMuZGlhbG9nRGF0YSk7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uT25lID0gdGhpcy5jb250cm9sT25lLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29udHJvbE9uZVZhbHVlID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGlzLnVzZXJuYW1lQ29udHJvbC5cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uVHdvID0gdGhpcy5jb250cm9sVHdvLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29udHJvbFR3b1ZhbHVlID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGlzLnVzZXJuYW1lQ29udHJvbC5cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uVGhyZWUgPSB0aGlzLmRhdGVDb250cm9sT25lLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGF0ZUNvbnRyb2xPbmVWYWx1ZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhpcy51c2VybmFtZUNvbnRyb2wuXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbkZvdXIgPSB0aGlzLmRhdGVDb250cm9sVHdvLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGF0ZUNvbnRyb2xUd29WYWx1ZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhpcy51c2VybmFtZUNvbnRyb2wuXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIHRoaXMuX3N1YnNjcmliZUZpbGVzID0gdGhpcy5nZXRVcGxvYWRlZEZpbGVzKCkuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAvLyAgICAgaWYgKHZhbHVlKSB7XG4gICAgLy8gICAgICAgdGhpcy51cGxvYWRGaWxlcyA9IHZhbHVlO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIC8vIHRoaXMudXNlcm5hbWVDb250cm9sLlxuICAgIC8vICAgICB9XG4gICAgLy8gfSlcbiAgfVxuXG4gIGFkZExpY2Vuc2UoKSB7XG4gICAgaWYgKHRoaXMuY29udHJvbE9uZS5pbnZhbGlkIHx8IHRoaXMuY29udHJvbFR3by5pbnZhbGlkIHx8XG4gICAgICB0aGlzLmRhdGVDb250cm9sT25lLmludmFsaWQgfHwgdGhpcy5kYXRlQ29udHJvbFR3by5pbnZhbGlkKSB7XG4gICAgICB0aGlzLnNuYWNrQmFyLm9wZW4oJ1BsZWFzZSBmaWxsIGFsbCB0aGUgbWFuZGF0b3J5IGZpZWxkcy4nLCAnY2xvc2UnLCB7XG4gICAgICAgIHZlcnRpY2FsUG9zaXRpb246ICd0b3AnLFxuICAgICAgICBob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgIGR1cmF0aW9uOiA1MDAwXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHJlcU9iaiA9IHtcbiAgICAgICAgbGljZW5zZToge1xuICAgICAgICAgIGxpY2Vuc2VOYW1lOiB0aGlzLmNvbnRyb2xPbmVWYWx1ZSxcbiAgICAgICAgICBsaWNlbnNlTnVtYmVyOiB0aGlzLmNvbnRyb2xUd29WYWx1ZSxcbiAgICAgICAgICBzdGFydERhdGU6IHRoaXMuZGF0ZUNvbnRyb2xPbmVWYWx1ZSxcbiAgICAgICAgICBlbmREYXRlOiB0aGlzLmRhdGVDb250cm9sVHdvVmFsdWUsXG4gICAgICAgICAgZmlsZXM6IHRoaXMubXVsRmlsZXNcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5kaWFsb2dDdXN0b21SZWYuY2xvc2UocmVxT2JqKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZURpYWxvZygpIHtcbiAgICB0aGlzLmRpYWxvZ0N1c3RvbVJlZi5jbG9zZShmYWxzZSk7XG4gIH1cblxuICBzdGFydFVwbG9hZChlKSB7XG4gICAgbGV0IG1heEZpbGVTaXplID0gMTAwOTcxNTI7XG4gICAgbGV0IGN1cnJlbnRGaWxlU2l6ZTtcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlLnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzW2ldO1xuICAgICAgICBjdXJyZW50RmlsZVNpemUgPSBmaWxlLnNpemU7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmaWxlLnR5cGUnLCBmaWxlLnR5cGUpXG4gICAgICAgIGlmIChcbiAgICAgICAgICBjdXJyZW50RmlsZVNpemUgPD0gbWF4RmlsZVNpemUgJiZcbiAgICAgICAgICAoZmlsZS50eXBlID09ICdpbWFnZS9qcGVnJyB8fCBmaWxlLnR5cGUgPT0gJ2ltYWdlL3BuZycgfHwgZmlsZS50eXBlID09ICdpbWFnZS9qcGcnIHx8IGZpbGUudHlwZSA9PSAnLnBkZicgfHxcbiAgICAgICAgICAgIGZpbGUudHlwZSA9PSAnYXBwbGljYXRpb24vcnRmJyB8fCBmaWxlLnR5cGUgPT0gJ2FwcGxpY2F0aW9uL21zd29yZCcgfHxcbiAgICAgICAgICAgIGZpbGUudHlwZSA9PSAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQnIHx8IGZpbGUudHlwZSA9PSAnYXBwbGljYXRpb24vcGRmJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5tdWxGaWxlcy5wdXNoKGUudGFyZ2V0LmZpbGVzW2ldKTtcbiAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICByZWFkZXIub25sb2FkID0gKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbWFnZVByZXZpZXdVcmxzLnB1c2goeyBmaWxlOiBlLnRhcmdldC5yZXN1bHQsIG5hbWU6IGZpbGUubmFtZSB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zbmFja0Jhci5vcGVuKCdVcGxvYWQgV29yZCwgSW1hZ2Ugb3IgUERGIGZvcm1hdCBvZiB5b3VyIExpY2Vuc2UsIFNpemUgc2hvdWxkIGJlIGJlbG93IDEwTUIuJywgJ2Nsb3NlJywge1xuICAgICAgICAgICAgdmVydGljYWxQb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICBob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVGaWxlKHBhcmFtKSB7XG4gICAgdGhpcy5tdWxGaWxlcy5zcGxpY2UocGFyYW0sIDEpXG4gICAgY29uc29sZS5sb2coJ3BhcmFtJywgcGFyYW0pXG4gICAgdGhpcy5pbWFnZVByZXZpZXdVcmxzLnNwbGljZShwYXJhbSwgMSlcbiAgICBjb25zb2xlLmxvZygncGFyYW0gdXJsJywgcGFyYW0pXG4gIH1cblxuICBkb3dubG9hZERvYyhmaWxlKSB7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzIHNpIHdoYXQgaSBhbSBkb2luZyBcIiwgZmlsZSk7XG4gICAgY29uc3QgbmFtZSA9IGZpbGUubmFtZTtcbiAgICBjb25zdCB1cmkgPSBmaWxlLmZpbGU7XG4gICAgY29uc3QgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZG93bmxvYWRMaW5rLmhyZWYgPSB1cmk7XG4gICAgZG93bmxvYWRMaW5rLmRvd25sb2FkID0gbmFtZTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvd25sb2FkTGluayk7XG4gICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb3dubG9hZExpbmspO1xuICB9XG5cbiAgc25hY2tiYXIobXNnKSB7XG4gICAgdGhpcy5zbmFja0Jhci5vcGVuKG1zZywgJ2Nsb3NlJywge1xuICAgICAgdmVydGljYWxQb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICBob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXG4gICAgICBkdXJhdGlvbjogMzUwMFxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==