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
                    template: " <div>\r\n    <div class=\"col-sm-12  card-header {{ dialogData?.headerCutomStyle }}\">\r\n        <div class=\"col-sm-12\">\r\n          <h1 class=\"headerFont\">{{dialogData?.title}}</h1>\r\n          <p>{{dialogData?.subTitle}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-body col-sm-12\">\r\n          <div>\r\n          \t  <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\"\r\n              dialogData-parent=\"#accordionExample\">\r\n              <div>\r\n                <div class=\"pL\">\r\n                <div class=\"col-sm-12 mT-7\">\r\n                  <div class=\"row\">\r\n                    <mat-form-field class=\"col-sm-6\">\r\n                        <input matInput placeholder=\"{{ dialogData?.controlOnePlaceholder }}\"  [formControl]=\"controlOne\" name=\"{{dialogData?.controlOne}}\" id=\"{{ dialogData?.controlOneId }}\">\r\n                        <mat-error *ngIf=\"controlOne.hasError('required')\">\r\n                            {{ dialogData?.controlOneRquiredErrorMsg }}\r\n                          </mat-error>\r\n                    </mat-form-field>\r\n                    <div class=\"col-sm-6 p-0\">\r\n                    <mat-form-field class=\"col-12 \">\r\n                      <input matInput placeholder=\"{{dialogData?.controlTwoPlaceholder}}\" \r\n                        [formControl]=\"controlTwo\" id=\"{{ dialogData?.controlTwoId }}\"\r\n                        name=\"{{dialogData?.controlTwo}}\" #tooltip=\"matTooltip\"\r\n                        matTooltip=\"{{ dialogData?.controlTwoToolTip }}\">\r\n                      <mat-error *ngIf=\"controlTwo.hasError('required')\">\r\n                          \t{{ dialogData?.controlTwoRquiredErrorMsg }}\r\n                      </mat-error>\r\n                      <mat-error *ngIf=\"controlTwo.hasError('pattern')\">\r\n                            {{ dialogData?.controlTwoPatternErrorMsg }}\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                    <div >\r\n                    <p class=\"pl-4 {{ dialogData?.hintClass }}\">{{ dialogData?.controlHint }}</p>\r\n                  </div>\r\n                  </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-12 mT-7\">\r\n                  <div class=\"row\">\r\n                    <mat-form-field  class=\"col-sm-6\">\r\n                      <mat-label>{{ dialogData?.dateControlOnePlaceholder }}</mat-label>\r\n                      <input matInput [matDatepicker]=\"picker1\" [formControl]=\"dateControlOne\" \r\n                       id=\"{{ dialogData?.dateControlOneId }}\"   #checkin1 name=\"{{ dialogData?.dateControlOne }}\" [min]=\"dialogData?.startDateMinDate\"  [max]=\"dialogData?.startDateMaxDate\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker1></mat-datepicker>\r\n                      <mat-error *ngIf=\"dateControlOne.hasError('required')\">\r\n                            {{ dialogData?.dateControlOneRquiredErrorMsg }}\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                    <mat-form-field  class=\"col-sm-6\">\r\n                      <mat-label>{{ dialogData?.dateControlTwoPlaceholder }}</mat-label>\r\n                      <input matInput [matDatepicker]=\"picker2\" id=\"{{ dialogData?.dateControlTwoId }}\" name=\"{{dialogData?.dateControlTwo}}\"\r\n                        #checkout1 [formControl]=\"dateControlTwo\"   [min]=\"dialogData?.endDateMinDate\" [max]=\"dialogData?.endDateMaxDate\" >\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker2 color=\"primary\"></mat-datepicker>\r\n                      <mat-error *ngIf=\"dateControlTwo.hasError('required')\">\r\n                            {{ dialogData?.dateControlTwoRquiredErrorMsg }}\r\n                      </mat-error>\r\n                    </mat-form-field>                           \r\n                    <div class=\"col-sm-12 pL\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n                       <aside >{{ dialogData?.uploadTitle }}</aside>\r\n                         <div class=\" form-group\">\r\n                          <input   #fileInput (change)=\"startUpload($event);\"\r\n                           accept=\"{{ dialogData?.acceptDocment }}\"  id=\"{{ dialogData?.fileInputId }}\"\r\n                            type=\"file\" style=\"display: none\" />\r\n                        </div>\r\n                        <div class=\"bT text-center\">\r\n                        <a (click)=\"fileInput.click()\"><img [src]=\"dialogData?.uploadImg\" alt=\"{{ dialogData?.uploadImgAltTxt }}\" \r\n                          width=\"90px\" height=\"100px\"></a>\r\n                      </div>\r\n                      </div>\r\n                      <div class=\"col-sm-9\">\r\n                      <aside>{{ dialogData?.fileListTitle }}</aside>\r\n                        <mat-chip-list>\r\n                          <mat-chip class=\"whiteSpace\" *ngFor=\"let file of imagePreviewUrls;let docIndex = index;\"> <br>\r\n                            <mat-icon matChipRemove (click)=\"downloadDoc(file)\" matTooltip=\"Download\">\r\n                                save_alt\r\n                              </mat-icon>\r\n                            <mat-icon  id=\"{{ dialogData?.fileRemoveBtnId }}\" matChipRemove matTooltip=\"Delete\" (click)=\"removeFile(docIndex)\">clear\r\n                            </mat-icon>\r\n                            <span> {{file.name}}</span>\r\n                          </mat-chip>\r\n                        </mat-chip-list>\r\n                      </div>\r\n                     </div>\r\n                  </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n          </div>\r\n          <div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 mt-5 mb-5\">\r\n          <div class=\"row  d-flex justify-content-around\">\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-end\r\n            mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2\">\r\n                <button  type=\"button\" (click)=\"closeDialog()\"\r\n                  class=\"btn btn-secondary btn-default btn-lg col-lg-6 col-md-6 {{ dialogData?.cancelBtnCustomClass }}\">{{ dialogData?.cancelBtnText }}</button>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <button type=\"button\" class=\"btn btn-info btn btn-info btn-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 {{ dialogData?.submitBtnCustomClass }}\" (click)=\"addLicense();\">{{ dialogData?.submitBtnTxt }}</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n </div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtbGljZW5zZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hZGQtbGljZW5zZS1tb2RhbC9zdWt1LWFkZC1saWNlbnNlLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWtCLEtBQUssRUFBZ0IsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJL0U7SUErRUUsc0RBQXNEO0lBQ3RELGtEQUFrRDtJQUNsRCxlQUFlO0lBQ2YsMERBQTBEO0lBQzFELGdEQUFnRDtJQUNoRCxNQUFNO0lBQ04sSUFBSTtJQUNKLDJDQUEyQztJQUMzQyxrREFBa0Q7SUFDbEQsZUFBZTtJQUNmLDRGQUE0RjtJQUM1RixnREFBZ0Q7SUFDaEQsTUFBTTtJQUNOLElBQUk7SUFDSixzREFBc0Q7SUFDdEQsa0RBQWtEO0lBQ2xELGVBQWU7SUFDZiwwREFBMEQ7SUFDMUQsZ0RBQWdEO0lBQ2hELE1BQU07SUFDTixJQUFJO0lBQ0osMkNBQTJDO0lBQzNDLHVEQUF1RDtJQUN2RCxlQUFlO0lBQ2YsOERBQThEO0lBQzlELG9EQUFvRDtJQUNwRCxNQUFNO0lBQ04sSUFBSTtJQUNKLDBEQUEwRDtJQUMxRCxzREFBc0Q7SUFDdEQsZUFBZTtJQUNmLDhEQUE4RDtJQUM5RCxvREFBb0Q7SUFDcEQsTUFBTTtJQUNOLElBQUk7SUFDSixzQ0FBb0IsUUFBcUIsRUFBUyxlQUEyRCxFQUMzRSxJQUFTO1FBRHZCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBNEM7UUFDM0UsU0FB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QUNmLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTVSRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsZzlOQUFzRDs7aUJBRXZEOzs7O2dCQVJ1QyxXQUFXO2dCQUExQyxZQUFZO2dEQXVIaEIsTUFBTSxTQUFDLGVBQWU7Ozs2QkE3RnhCLEtBQUs7O0lBd1FSLG1DQUFDO0NBQUEsQUE5UkQsSUE4UkM7U0F4UlksNEJBQTRCOzs7SUFDdkMsd0RBQXlCOztJQUN6Qix3REFBaUI7O0lBQ2pCLHdEQUFpQjs7SUFDakIsMERBQW1COztJQUNuQix5REFBa0I7O0lBQ2xCLHVEQUFnQjs7SUFDaEIsdURBQWdCOztJQUNoQix1REFBZ0I7O0lBQ2hCLDJEQUFvQjs7SUFDcEIsMkRBQW9COztJQUNwQixnREFBYzs7SUFDZCx3REFBc0I7O0lBQ3RCLG1EQUFtQjs7SUFHbkIsa0RBbURDOztJQUVELGtEQUFpQzs7SUFDakMsa0RBQWlDOztJQUNqQyxzREFBcUM7O0lBQ3JDLHNEQUFxQzs7Ozs7SUFvQ3pCLGdEQUE2Qjs7SUFBRSx1REFBa0U7O0lBQzNHLDRDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSwgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbi8vIGltcG9ydCB7IFN1a3VNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi9zdWt1LW1vZGFsL3N1a3UtbW9kYWwuc2VydmljZSdcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LWFkZC1saWNlbnNlLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1hZGQtbGljZW5zZS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1hZGQtbGljZW5zZS1tb2RhbC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3VrdUFkZExpY2Vuc2VNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZm9ybVN1bWl0QXR0ZW1wdCA9IGZhbHNlO1xyXG4gIF9zdWJzY3JpcHRpb25PbmU7XHJcbiAgX3N1YnNjcmlwdGlvblR3bztcclxuICBfc3Vic2NyaXB0aW9uVGhyZWU7XHJcbiAgX3N1YnNjcmlwdGlvbkZvdXI7XHJcbiAgX3N1YnNjcmliZUZpbGVzO1xyXG4gIGNvbnRyb2xPbmVWYWx1ZTtcclxuICBjb250cm9sVHdvVmFsdWU7XHJcbiAgZGF0ZUNvbnRyb2xPbmVWYWx1ZTtcclxuICBkYXRlQ29udHJvbFR3b1ZhbHVlO1xyXG4gIG11bEZpbGVzID0gW107XHJcbiAgaW1hZ2VQcmV2aWV3VXJscyA9IFtdO1xyXG4gIHVwbG9hZEZpbGVzOiBhbnlbXTtcclxuICAvLyB1cGxvYWRGaWxlcyA9IFtdOyBcclxuXHJcbiAgQElucHV0KCkgZGlhbG9nRGF0YSA9IHtcclxuICAgIGNvbnRyb2xPbmU6ICdjb250cm9sT25lJyxcclxuICAgIGNvbnRyb2xUd286ICdjb250cm9sVHdvJyxcclxuICAgIGRhdGVDb250cm9sT25lOiAnZGF0ZUNvbnRyb2xPbmUnLFxyXG4gICAgZGF0ZUNvbnRyb2xUd286ICdkYXRlQ29udHJvbFR3bycsXHJcbiAgICAnY29udHJvbE9uZVBhdHRlcm5FbmFibGVkJzogJycsXHJcbiAgICAnY29udHJvbFR3b1BhdHRlcm5FbmFibGVkJzogJycsXHJcbiAgICBjb250cm9sT25lUmVxdWlyZWQ6ICcnLFxyXG4gICAgY29udHJvbFR3b1JlcXVpcmVkOiAnJyxcclxuICAgIGNvbnRyb2xUd29SZXF1aXJlZGQ6ICcnLFxyXG4gICAgZGF0ZUNvbnRyb2xPbmVSZXF1aXJlZDogJycsXHJcbiAgICBkYXRlQ29udHJvbFR3b1JlcXVpcmVkOiAnJyxcclxuICAgICdjb250cm9sT25lUGF0dGVybic6ICcnLFxyXG4gICAgJ2NvbnRyb2xUd29QYXR0ZXJuJzogJycsXHJcbiAgICAndGl0bGUnOiAnTGljZW5jZSBhbmQgUmVnaXN0cmF0aW9uJyxcclxuICAgICdzdWJUaXRsZSc6ICdFbnRlciB5b3VyIGxpY2Vuc2UgZGV0YWlscyBoZXJlJyxcclxuICAgICdjb250cm9sSGludCc6ICdFeGFtcGxlOiAxMjM0NTY3ODlhMTIzNDUnLFxyXG4gICAgJ2hpbnRDbGFzcyc6ICcnLFxyXG4gICAgJ2hlYWRlckN1dG9tU3R5bGUnOiAnJyxcclxuICAgICdzdGFydERhdGVNYXhEYXRlJzogJycsXHJcbiAgICAnZW5kRGF0ZU1heERhdGUnOiAnJyxcclxuICAgICdzdGFydERhdGVNaW5EYXRlJzogJycsXHJcbiAgICAnZW5kRGF0ZU1pbkRhdGUnOiAnJyxcclxuICAgICdjb250cm9sT25lSWQnOiAnbGljZW5zZU5hbWUnLFxyXG4gICAgY29udHJvbFR3b0lkOiAnbGljZW5zZU51bWJlcicsXHJcbiAgICBkYXRlQ29udHJvbE9uZUlkOiAnc3RhcnREYXRlJyxcclxuICAgIGRhdGVDb250cm9sVHdvSWQ6ICdlbmREYXRlJyxcclxuICAgIGNvbnRyb2xUd29Ub29sVGlwOiAnVGhlIGZvcm1hdCBzaG91bGQgYmUgMTIzNDU2Nzg5YTEyMzQ1JyxcclxuICAgIGNvbnRyb2xPbmVQbGFjZWhvbGRlcjogJ0xpY2Vuc2UgTmFtZScsXHJcbiAgICBjb250cm9sVHdvUGxhY2Vob2xkZXI6ICdMaWNlbnNlIE51bWJlcicsXHJcbiAgICBkYXRlQ29udHJvbE9uZVBsYWNlaG9sZGVyOiAnTGljZW5jZSBJc3N1ZSBEYXRlJyxcclxuICAgIGRhdGVDb250cm9sVHdvUGxhY2Vob2xkZXI6ICdMaWNlbmNlIEV4cGlyeSBEYXRlKE9wdGlvbmFsKScsXHJcbiAgICBjb250cm9sT25lUnF1aXJlZEVycm9yTXNnOiAnQ2Fubm90IGJlIGJsYW5rLicsXHJcbiAgICBjb250cm9sVHdvUnF1aXJlZEVycm9yTXNnOiAnQ2Fubm90IGJlIGJsYW5rLicsXHJcbiAgICBjb250cm9sVHdvUGF0dGVybkVycm9yTXNnOiAnSW52YWxpZCBMaWNlbmNlIG51bWJlcicsXHJcbiAgICBkYXRlQ29udHJvbE9uZVJxdWlyZWRFcnJvck1zZzogJ0Nhbm5vdCBiZSBibGFuay4nLFxyXG4gICAgZGF0ZUNvbnRyb2xUd29ScXVpcmVkRXJyb3JNc2c6ICdDYW5ub3QgYmUgYmxhbmsuJyxcclxuICAgIGFjY2VwdERvY21lbnQ6ICdhcHBsaWNhdGlvbi9tc3dvcmQsIHRleHQvcGxhaW4sIGFwcGxpY2F0aW9uL3BkZiwgaW1hZ2UvKicsXHJcbiAgICB1cGxvYWRJbWc6ICdodHRwOi8vMzQuMjE3Ljg5LjIwNC9hc3NldHMvaW1hZ2VzL2ZpbGVVcGxvYWQucG5nJyxcclxuICAgIHVwbG9hZFRpdGxlOiAnIFVwbG9hZCBMaWNlbmNlJyxcclxuICAgIGZpbGVMaXN0VGl0bGU6ICdVcGxvYWRlZCBEb2N1bWVudHMnLFxyXG4gICAgZmlsZUlucHV0SWQ6ICdmaWxlLWlucHV0JyxcclxuICAgIGZpbGVzQXJyYXk6IFtdLFxyXG4gICAgZmlsZVJlbW92ZUJ0blR4dDogJ0RlbGV0ZScsXHJcbiAgICBmaWxlUmVtb3ZlQnRuSWQ6ICdmaWxlRGVsZXRlJyxcclxuICAgIHVwbG9hZEltZ0FsdFR4dDogJycsXHJcbiAgICBjYW5jZWxCdG5UZXh0OiAnQ2FuY2VsJyxcclxuICAgIHN1Ym1pdEJ0blR4dDogJ0FkZCBMaWNlbnNlJyxcclxuICAgIHN1Ym1pdEJ0bkN1c3RvbUNsYXNzOiAnJyxcclxuICAgIGNhbmNlbEJ0bkN1c3RvbUNsYXNzOiAnJyxcclxuXHJcbiAgfVxyXG5cclxuICBjb250cm9sT25lID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuICBjb250cm9sVHdvID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuICBkYXRlQ29udHJvbE9uZSA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcbiAgZGF0ZUNvbnRyb2xUd28gPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIC8vIEBJbnB1dCgnZW5hYmxlLXJlcXVpcmVkLXZhbGlkYXRvci1mb3ItY29udHJvbC1vbmUnKVxyXG4gIC8vIHNldCBlbmFibGVSZXF1aXJlZFZhbGlkYXRvckZvckNvbnRyb2xPbmUodmFsKSB7XHJcbiAgLy8gICBpZiAodmFsKSB7XHJcbiAgLy8gICAgIHRoaXMuY29udHJvbE9uZS5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gIC8vICAgICB0aGlzLmNvbnRyb2xPbmUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuICAvLyBASW5wdXQoJ2VuYWJsZS1wYXR0ZXJuLWZvci1jb250cm9sLW9uZScpXHJcbiAgLy8gc2V0IGVuYWJsZVBhdHRlcm5WYWxpZGF0b3JzRm9yQ29udHJvbE9uZSh2YWwpIHtcclxuICAvLyAgIGlmICh2YWwpIHtcclxuICAvLyAgICAgdGhpcy5jb250cm9sT25lLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5wYXR0ZXJuKHRoaXMuZGlhbG9nRGF0YS5jb250cm9sT25lUGF0dGVybikpO1xyXG4gIC8vICAgICB0aGlzLmNvbnRyb2xPbmUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuICAvLyBASW5wdXQoJ2VuYWJsZS1yZXF1aXJlZC12YWxpZGF0b3ItZm9yLWNvbnRyb2wtdHdvJylcclxuICAvLyBzZXQgZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3JGb3JDb250cm9sVHdvKHZhbCkge1xyXG4gIC8vICAgaWYgKHZhbCkge1xyXG4gIC8vICAgICB0aGlzLmNvbnRyb2xUd28uc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAvLyAgICAgdGhpcy5jb250cm9sVHdvLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbiAgLy8gQElucHV0KCdlbmFibGUtcGF0dGVybi1mb3ItY29udHJvbC10d28nKVxyXG4gIC8vIHNldCBlbmFibGVSZXF1aXJlZFZhbGlkYXRvcnNGb3JEYXRlQ29udHJvbE9uZSh2YWwpIHtcclxuICAvLyAgIGlmICh2YWwpIHtcclxuICAvLyAgICAgdGhpcy5kYXRlQ29udHJvbE9uZS5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gIC8vICAgICB0aGlzLmRhdGVDb250cm9sT25lLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbiAgLy8gQElucHV0KCdlbmFibGUtcmVxdWlyZWQtdmFsaWRhdG9yLWZvci1kYXRlQ29udHJvbC1vbmUnKVxyXG4gIC8vIHNldCBlbmFibGVSZXF1aXJlZFZhbGlkYXRvckZvckRhdGVDb250cm9sVHdvKHZhbCkge1xyXG4gIC8vICAgaWYgKHZhbCkge1xyXG4gIC8vICAgICB0aGlzLmRhdGVDb250cm9sVHdvLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgLy8gICAgIHRoaXMuZGF0ZUNvbnRyb2xUd28udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhciwgcHVibGljIGRpYWxvZ0N1c3RvbVJlZjogTWF0RGlhbG9nUmVmPFN1a3VBZGRMaWNlbnNlTW9kYWxDb21wb25lbnQ+LFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnksXHJcbiAgICAvLyBwdWJsaWMgc3VrdU1vZGFsU2VydmljZTogRHluYW1pY0RhdGFcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkpIHtcclxuICAgICAgaWYgKHRoaXMuZGF0YVtrZXldKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dEYXRhW2tleV0gPSB0aGlzLmRhdGFba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRpYWxvZ0RhdGEuY29udHJvbE9uZVJlcXVpcmVkKSB7XHJcbiAgICAgIHRoaXMuY29udHJvbE9uZS5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAgICB0aGlzLmNvbnRyb2xPbmUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRpYWxvZ0RhdGEuY29udHJvbFR3b1JlcXVpcmVkKSB7XHJcbiAgICAgIHRoaXMuY29udHJvbFR3by5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAgICB0aGlzLmNvbnRyb2xUd28udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRpYWxvZ0RhdGEuZGF0ZUNvbnRyb2xPbmVSZXF1aXJlZCkge1xyXG4gICAgICB0aGlzLmRhdGVDb250cm9sT25lLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICAgIHRoaXMuZGF0ZUNvbnRyb2xPbmUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRpYWxvZ0RhdGEuZGF0ZUNvbnRyb2xUd29SZXF1aXJlZCkge1xyXG4gICAgICB0aGlzLmRhdGVDb250cm9sVHdvLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICAgIHRoaXMuZGF0ZUNvbnRyb2xUd28udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRpYWxvZ0RhdGEuY29udHJvbFR3b1BhdHRlcm5FbmFibGVkICYmIHRoaXMuZGlhbG9nRGF0YS5jb250cm9sVHdvUmVxdWlyZWQpIHtcclxuICAgICAgdGhpcy5jb250cm9sVHdvLnNldFZhbGlkYXRvcnMoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybih0aGlzLmRpYWxvZ0RhdGEuY29udHJvbFR3b1BhdHRlcm4pXSk7XHJcbiAgICAgIHRoaXMuY29udHJvbFR3by51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgKHRoaXMuZGlhbG9nRGF0YS5jb250cm9sT25lUGF0dGVybkVuYWJsZWQpIHtcclxuICAgIC8vICAgdGhpcy5jb250cm9sT25lLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5wYXR0ZXJuKHRoaXMuZGlhbG9nRGF0YS5jb250cm9sT25lUGF0dGVybikpO1xyXG4gICAgLy8gICB0aGlzLmNvbnRyb2xPbmUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCd0aGlzLmRpYWxvZ0RhdGEnLCB0aGlzLmRpYWxvZ0RhdGEpO1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uT25lID0gdGhpcy5jb250cm9sT25lLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xPbmVWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHRoaXMudXNlcm5hbWVDb250cm9sLlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvblR3byA9IHRoaXMuY29udHJvbFR3by52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sVHdvVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB0aGlzLnVzZXJuYW1lQ29udHJvbC5cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25UaHJlZSA9IHRoaXMuZGF0ZUNvbnRyb2xPbmUudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0ZUNvbnRyb2xPbmVWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHRoaXMudXNlcm5hbWVDb250cm9sLlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbkZvdXIgPSB0aGlzLmRhdGVDb250cm9sVHdvLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmRhdGVDb250cm9sVHdvVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB0aGlzLnVzZXJuYW1lQ29udHJvbC5cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyB0aGlzLl9zdWJzY3JpYmVGaWxlcyA9IHRoaXMuZ2V0VXBsb2FkZWRGaWxlcygpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAvLyAgICAgICB0aGlzLnVwbG9hZEZpbGVzID0gdmFsdWU7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgIC8vIHRoaXMudXNlcm5hbWVDb250cm9sLlxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pXHJcbiAgfVxyXG5cclxuICBhZGRMaWNlbnNlKCkge1xyXG4gICAgaWYgKHRoaXMuY29udHJvbE9uZS5pbnZhbGlkIHx8IHRoaXMuY29udHJvbFR3by5pbnZhbGlkIHx8XHJcbiAgICAgIHRoaXMuZGF0ZUNvbnRyb2xPbmUuaW52YWxpZCB8fCB0aGlzLmRhdGVDb250cm9sVHdvLmludmFsaWQpIHtcclxuICAgICAgdGhpcy5zbmFja0Jhci5vcGVuKCdQbGVhc2UgZmlsbCBhbGwgdGhlIG1hbmRhdG9yeSBmaWVsZHMuJywgJ2Nsb3NlJywge1xyXG4gICAgICAgIHZlcnRpY2FsUG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgIGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICBkdXJhdGlvbjogNTAwMFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCByZXFPYmogPSB7XHJcbiAgICAgICAgbGljZW5zZToge1xyXG4gICAgICAgICAgbGljZW5zZU5hbWU6IHRoaXMuY29udHJvbE9uZVZhbHVlLFxyXG4gICAgICAgICAgbGljZW5zZU51bWJlcjogdGhpcy5jb250cm9sVHdvVmFsdWUsXHJcbiAgICAgICAgICBzdGFydERhdGU6IHRoaXMuZGF0ZUNvbnRyb2xPbmVWYWx1ZSxcclxuICAgICAgICAgIGVuZERhdGU6IHRoaXMuZGF0ZUNvbnRyb2xUd29WYWx1ZSxcclxuICAgICAgICAgIGZpbGVzOiB0aGlzLm11bEZpbGVzXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGlhbG9nQ3VzdG9tUmVmLmNsb3NlKHJlcU9iaik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZURpYWxvZygpIHtcclxuICAgIHRoaXMuZGlhbG9nQ3VzdG9tUmVmLmNsb3NlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0VXBsb2FkKGUpIHtcclxuICAgIGxldCBtYXhGaWxlU2l6ZSA9IDEwMDk3MTUyO1xyXG4gICAgbGV0IGN1cnJlbnRGaWxlU2l6ZTtcclxuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZS50YXJnZXQuZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzW2ldO1xyXG4gICAgICAgIGN1cnJlbnRGaWxlU2l6ZSA9IGZpbGUuc2l6ZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZmlsZS50eXBlJywgZmlsZS50eXBlKVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGN1cnJlbnRGaWxlU2l6ZSA8PSBtYXhGaWxlU2l6ZSAmJlxyXG4gICAgICAgICAgKGZpbGUudHlwZSA9PSAnaW1hZ2UvanBlZycgfHwgZmlsZS50eXBlID09ICdpbWFnZS9wbmcnIHx8IGZpbGUudHlwZSA9PSAnaW1hZ2UvanBnJyB8fCBmaWxlLnR5cGUgPT0gJy5wZGYnIHx8XHJcbiAgICAgICAgICAgIGZpbGUudHlwZSA9PSAnYXBwbGljYXRpb24vcnRmJyB8fCBmaWxlLnR5cGUgPT0gJ2FwcGxpY2F0aW9uL21zd29yZCcgfHxcclxuICAgICAgICAgICAgZmlsZS50eXBlID09ICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCcgfHwgZmlsZS50eXBlID09ICdhcHBsaWNhdGlvbi9wZGYnKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5tdWxGaWxlcy5wdXNoKGUudGFyZ2V0LmZpbGVzW2ldKTtcclxuICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZVByZXZpZXdVcmxzLnB1c2goeyBmaWxlOiBlLnRhcmdldC5yZXN1bHQsIG5hbWU6IGZpbGUubmFtZSB9KTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc25hY2tCYXIub3BlbignVXBsb2FkIFdvcmQsIEltYWdlIG9yIFBERiBmb3JtYXQgb2YgeW91ciBMaWNlbnNlLCBTaXplIHNob3VsZCBiZSBiZWxvdyAxME1CLicsICdjbG9zZScsIHtcclxuICAgICAgICAgICAgdmVydGljYWxQb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgICAgIGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgZHVyYXRpb246IDUwMDBcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUZpbGUocGFyYW0pIHtcclxuICAgIHRoaXMubXVsRmlsZXMuc3BsaWNlKHBhcmFtLCAxKVxyXG4gICAgY29uc29sZS5sb2coJ3BhcmFtJywgcGFyYW0pXHJcbiAgICB0aGlzLmltYWdlUHJldmlld1VybHMuc3BsaWNlKHBhcmFtLCAxKVxyXG4gICAgY29uc29sZS5sb2coJ3BhcmFtIHVybCcsIHBhcmFtKVxyXG4gIH1cclxuXHJcbiAgZG93bmxvYWREb2MoZmlsZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIHNpIHdoYXQgaSBhbSBkb2luZyBcIiwgZmlsZSk7XHJcbiAgICBjb25zdCBuYW1lID0gZmlsZS5uYW1lO1xyXG4gICAgY29uc3QgdXJpID0gZmlsZS5maWxlO1xyXG4gICAgY29uc3QgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBkb3dubG9hZExpbmsuaHJlZiA9IHVyaTtcclxuICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9IG5hbWU7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvd25sb2FkTGluayk7XHJcbiAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG93bmxvYWRMaW5rKTtcclxuICB9XHJcblxyXG4gIHNuYWNrYmFyKG1zZykge1xyXG4gICAgdGhpcy5zbmFja0Jhci5vcGVuKG1zZywgJ2Nsb3NlJywge1xyXG4gICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICBkdXJhdGlvbjogMzUwMFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=