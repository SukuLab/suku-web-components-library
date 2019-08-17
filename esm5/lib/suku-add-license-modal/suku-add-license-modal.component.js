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
        /** @type {?} */
        var maxFileSize = 10097152;
        /** @type {?} */
        var currentFileSize;
        if (e.target.files && e.target.files.length > 0) {
            for (var i = 0; i < e.target.files.length; i++) {
                /** @type {?} */
                var file = e.target.files[i];
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
                    template: " <div>\n    <div class=\"col-sm-12  card-header {{ dialogData?.headerCutomStyle }}\">\n        <div class=\"col-sm-12\">\n          <h1 class=\"headerFont\">{{dialogData?.title}}</h1>\n          <p>{{dialogData?.subTitle}}</p>\n        </div>\n      </div>\n      <div class=\"modal-body col-sm-12\">\n          <div>\n          \t  <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\"\n              dialogData-parent=\"#accordionExample\">\n              <div>\n                <div class=\"pL\">\n                <div class=\"col-sm-12 mT-7\">\n                  <div class=\"row\">\n                    <mat-form-field class=\"col-sm-6\">\n                        <input matInput placeholder=\"{{ dialogData?.controlOnePlaceholder }}\"  [formControl]=\"controlOne\" name=\"{{dialogData?.controlOne}}\" id=\"{{ dialogData?.controlOneId }}\">\n                        <mat-error *ngIf=\"controlOne.hasError('required')\">\n                            {{ dialogData?.controlOneRquiredErrorMsg }}\n                          </mat-error>\n                    </mat-form-field>\n                    <div class=\"col-sm-6 p-0\">\n                    <mat-form-field class=\"col-12 \">\n                      <input matInput placeholder=\"{{dialogData?.controlTwoPlaceholder}}\" \n                        [formControl]=\"controlTwo\" id=\"{{ dialogData?.controlTwoId }}\"\n                        name=\"{{dialogData?.controlTwo}}\" #tooltip=\"matTooltip\"\n                        matTooltip=\"{{ dialogData?.controlTwoToolTip }}\">\n                      <mat-error *ngIf=\"controlTwo.hasError('required')\">\n                          \t{{ dialogData?.controlTwoRquiredErrorMsg }}\n                      </mat-error>\n                      <mat-error *ngIf=\"controlTwo.hasError('pattern')\">\n                            {{ dialogData?.controlTwoPatternErrorMsg }}\n                      </mat-error>\n                    </mat-form-field>\n                    <div >\n                    <p class=\"pl-4 {{ dialogData?.hintClass }}\">{{ dialogData?.controlHint }}</p>\n                  </div>\n                  </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 mT-7\">\n                  <div class=\"row\">\n                    <mat-form-field  class=\"col-sm-6\">\n                      <mat-label>{{ dialogData?.dateControlOnePlaceholder }}</mat-label>\n                      <input matInput [matDatepicker]=\"picker1\" [formControl]=\"dateControlOne\" \n                       id=\"{{ dialogData?.dateControlOneId }}\"   #checkin1 name=\"{{ dialogData?.dateControlOne }}\" [min]=\"dialogData?.startDateMinDate\"  [max]=\"dialogData?.startDateMaxDate\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker1></mat-datepicker>\n                      <mat-error *ngIf=\"dateControlOne.hasError('required')\">\n                            {{ dialogData?.dateControlOneRquiredErrorMsg }}\n                      </mat-error>\n                    </mat-form-field>\n                    <mat-form-field  class=\"col-sm-6\">\n                      <mat-label>{{ dialogData?.dateControlTwoPlaceholder }}</mat-label>\n                      <input matInput [matDatepicker]=\"picker2\" id=\"{{ dialogData?.dateControlTwoId }}\" name=\"{{dialogData?.dateControlTwo}}\"\n                        #checkout1 [formControl]=\"dateControlTwo\"   [min]=\"dialogData?.endDateMinDate\" [max]=\"dialogData?.endDateMaxDate\" >\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker2 color=\"primary\"></mat-datepicker>\n                      <mat-error *ngIf=\"dateControlTwo.hasError('required')\">\n                            {{ dialogData?.dateControlTwoRquiredErrorMsg }}\n                      </mat-error>\n                    </mat-form-field>                           \n                    <div class=\"col-sm-12 pL\">\n                      <div class=\"row\">\n                        <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                       <aside >{{ dialogData?.uploadTitle }}</aside>\n                         <div class=\" form-group\">\n                          <input   #fileInput (change)=\"startUpload($event);\"\n                           accept=\"{{ dialogData?.acceptDocment }}\"  id=\"{{ dialogData?.fileInputId }}\"\n                            type=\"file\" style=\"display: none\" />\n                        </div>\n                        <div class=\"bT text-center\">\n                        <a (click)=\"fileInput.click()\"><img [src]=\"dialogData?.uploadImg\" alt=\"{{ dialogData?.uploadImgAltTxt }}\" \n                          width=\"90px\" height=\"100px\"></a>\n                      </div>\n                      </div>\n                      <div class=\"col-sm-9\">\n                      <aside>{{ dialogData?.fileListTitle }}</aside>\n                        <mat-chip-list>\n                          <mat-chip class=\"whiteSpace\" *ngFor=\"let file of mulFiles;let docIndex = index;\"> <br>\n                            <mat-icon  id=\"{{ dialogData?.fileRemoveBtnId }}\" matChipRemove matTooltip=\"Delete\" (click)=\"removeFile(docIndex)\">clear\n                            </mat-icon>\n                            <span> {{file.name}}</span>\n                          </mat-chip>\n                        </mat-chip-list>\n                      </div>\n                     </div>\n                  </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div>\n          </div>\n          <div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 mt-5 mb-5\">\n          <div class=\"row  d-flex justify-content-around\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-end\n            mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2\">\n                <button  type=\"button\" (click)=\"closeDialog()\"\n                  class=\"btn btn-secondary btn-default btn-lg col-lg-6 col-md-6 {{ dialogData?.cancelBtnCustomClass }}\">{{ dialogData?.cancelBtnText }}</button>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n                <button type=\"button\" class=\"btn btn-info btn btn-info btn-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 {{ dialogData?.submitBtnCustomClass }}\" (click)=\"addLicense();\">{{ dialogData?.submitBtnTxt }}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n </div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1hZGQtbGljZW5zZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1hZGQtbGljZW5zZS1tb2RhbC9zdWt1LWFkZC1saWNlbnNlLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWtCLEtBQUssRUFBZ0IsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJL0U7SUE4RUUsc0RBQXNEO0lBQ3RELGtEQUFrRDtJQUNsRCxlQUFlO0lBQ2YsMERBQTBEO0lBQzFELGdEQUFnRDtJQUNoRCxNQUFNO0lBQ04sSUFBSTtJQUNKLDJDQUEyQztJQUMzQyxrREFBa0Q7SUFDbEQsZUFBZTtJQUNmLDRGQUE0RjtJQUM1RixnREFBZ0Q7SUFDaEQsTUFBTTtJQUNOLElBQUk7SUFDSixzREFBc0Q7SUFDdEQsa0RBQWtEO0lBQ2xELGVBQWU7SUFDZiwwREFBMEQ7SUFDMUQsZ0RBQWdEO0lBQ2hELE1BQU07SUFDTixJQUFJO0lBQ0osMkNBQTJDO0lBQzNDLHVEQUF1RDtJQUN2RCxlQUFlO0lBQ2YsOERBQThEO0lBQzlELG9EQUFvRDtJQUNwRCxNQUFNO0lBQ04sSUFBSTtJQUNKLDBEQUEwRDtJQUMxRCxzREFBc0Q7SUFDdEQsZUFBZTtJQUNmLDhEQUE4RDtJQUM5RCxvREFBb0Q7SUFDcEQsTUFBTTtJQUNOLElBQUk7SUFDSixzQ0FBb0IsUUFBcUIsRUFBUyxlQUEyRCxFQUMzRSxJQUFTO1FBRHZCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBNEM7UUFDM0UsU0FB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QUFFLENBQUMsQ0FBQyxDQUFBO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQzdCLENBQUM7Ozs7O0lBRUQsK0NBQVE7Ozs7SUFBUixVQUFTLEdBQUc7UUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFO1lBQy9CLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsa0JBQWtCLEVBQUUsT0FBTztZQUMzQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWxSRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsaWlOQUFzRDs7aUJBRXZEOzs7O2dCQVJ1QyxXQUFXO2dCQUExQyxZQUFZO2dEQXNIaEIsTUFBTSxTQUFDLGVBQWU7Ozs2QkE3RnhCLEtBQUs7O0lBK1BSLG1DQUFDO0NBQUEsQUFwUkQsSUFvUkM7U0E5UVksNEJBQTRCOzs7SUFDdkMsd0RBQTBCOztJQUMxQix3REFBaUI7O0lBQ2pCLHdEQUFpQjs7SUFDakIsMERBQW1COztJQUNuQix5REFBa0I7O0lBQ2xCLHVEQUFnQjs7SUFDaEIsdURBQWdCOztJQUNoQix1REFBZ0I7O0lBQ2hCLDJEQUFvQjs7SUFDcEIsMkRBQW9COztJQUNwQixnREFBYzs7SUFDZCxtREFBbUI7O0lBR25CLGtEQW1EQzs7SUFFRCxrREFBaUM7O0lBQ2pDLGtEQUFpQzs7SUFDakMsc0RBQXFDOztJQUNyQyxzREFBcUM7Ozs7O0lBb0N6QixnREFBNkI7O0lBQUUsdURBQWtFOztJQUMzRyw0Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSwgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG4vLyBpbXBvcnQgeyBTdWt1TW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vc3VrdS1tb2RhbC9zdWt1LW1vZGFsLnNlcnZpY2UnXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7ICBcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1hZGQtbGljZW5zZS1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWFkZC1saWNlbnNlLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1hZGQtbGljZW5zZS1tb2RhbC5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgU3VrdUFkZExpY2Vuc2VNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm1TdW1pdEF0dGVtcHQgPSAgZmFsc2U7XG4gIF9zdWJzY3JpcHRpb25PbmU7XG4gIF9zdWJzY3JpcHRpb25Ud287XG4gIF9zdWJzY3JpcHRpb25UaHJlZTtcbiAgX3N1YnNjcmlwdGlvbkZvdXI7XG4gIF9zdWJzY3JpYmVGaWxlcztcbiAgY29udHJvbE9uZVZhbHVlO1xuICBjb250cm9sVHdvVmFsdWU7XG4gIGRhdGVDb250cm9sT25lVmFsdWU7XG4gIGRhdGVDb250cm9sVHdvVmFsdWU7XG4gIG11bEZpbGVzID0gW107XG4gIHVwbG9hZEZpbGVzOiBhbnlbXTsgXG4gIC8vIHVwbG9hZEZpbGVzID0gW107IFxuXG4gIEBJbnB1dCgpIGRpYWxvZ0RhdGEgPSB7XG4gICAgY29udHJvbE9uZTogJ2NvbnRyb2xPbmUnLFxuICAgIGNvbnRyb2xUd286ICdjb250cm9sVHdvJyxcbiAgICBkYXRlQ29udHJvbE9uZTogJ2RhdGVDb250cm9sT25lJywgXG4gICAgZGF0ZUNvbnRyb2xUd286ICdkYXRlQ29udHJvbFR3bycsXG4gICAgJ2NvbnRyb2xPbmVQYXR0ZXJuRW5hYmxlZCc6ICcnLFxuICAgICdjb250cm9sVHdvUGF0dGVybkVuYWJsZWQnOiAnJyxcbiAgICBjb250cm9sT25lUmVxdWlyZWQ6ICcnLFxuICAgIGNvbnRyb2xUd29SZXF1aXJlZDogJycsXG4gICAgY29udHJvbFR3b1JlcXVpcmVkZDogJycsXG4gICAgZGF0ZUNvbnRyb2xPbmVSZXF1aXJlZDogJycsXG4gICAgZGF0ZUNvbnRyb2xUd29SZXF1aXJlZDogJycsXG4gICAgJ2NvbnRyb2xPbmVQYXR0ZXJuJzogJycsXG4gICAgJ2NvbnRyb2xUd29QYXR0ZXJuJzogJycsXG4gICAgJ3RpdGxlJzogJ0xpY2VuY2UgYW5kIFJlZ2lzdHJhdGlvbicsXG4gICAgJ3N1YlRpdGxlJzogJ0VudGVyIHlvdXIgbGljZW5zZSBkZXRhaWxzIGhlcmUnLFxuICAgICdjb250cm9sSGludCc6ICdFeGFtcGxlOiAxMjM0NTY3ODlhMTIzNDUnLFxuICAgICdoaW50Q2xhc3MnOiAnJyxcbiAgICAnaGVhZGVyQ3V0b21TdHlsZSc6ICcnLFxuICAgICdzdGFydERhdGVNYXhEYXRlJzogJycsXG4gICAgJ2VuZERhdGVNYXhEYXRlJzogJycsXG4gICAgJ3N0YXJ0RGF0ZU1pbkRhdGUnOiAnJyxcbiAgICAnZW5kRGF0ZU1pbkRhdGUnOiAnJyxcbiAgICAnY29udHJvbE9uZUlkJzogJ2xpY2Vuc2VOYW1lJyxcbiAgICBjb250cm9sVHdvSWQ6ICdsaWNlbnNlTnVtYmVyJyxcbiAgICBkYXRlQ29udHJvbE9uZUlkOiAnc3RhcnREYXRlJyxcbiAgICBkYXRlQ29udHJvbFR3b0lkOiAnZW5kRGF0ZScsXG4gICAgY29udHJvbFR3b1Rvb2xUaXA6ICdUaGUgZm9ybWF0IHNob3VsZCBiZSAxMjM0NTY3ODlhMTIzNDUnLCBcbiAgICBjb250cm9sT25lUGxhY2Vob2xkZXI6ICdMaWNlbnNlIE5hbWUnLFxuICAgIGNvbnRyb2xUd29QbGFjZWhvbGRlcjogJ0xpY2Vuc2UgTnVtYmVyJywgXG4gICAgZGF0ZUNvbnRyb2xPbmVQbGFjZWhvbGRlcjogJ0xpY2VuY2UgSXNzdWUgRGF0ZScsIFxuICAgIGRhdGVDb250cm9sVHdvUGxhY2Vob2xkZXI6ICdMaWNlbmNlIEV4cGlyeSBEYXRlKE9wdGlvbmFsKScsXG4gICAgY29udHJvbE9uZVJxdWlyZWRFcnJvck1zZzogJ0Nhbm5vdCBiZSBibGFuay4nLFxuICAgIGNvbnRyb2xUd29ScXVpcmVkRXJyb3JNc2c6ICdDYW5ub3QgYmUgYmxhbmsuJyxcbiAgICBjb250cm9sVHdvUGF0dGVybkVycm9yTXNnOiAnSW52YWxpZCBMaWNlbmNlIG51bWJlcicsXG4gICAgZGF0ZUNvbnRyb2xPbmVScXVpcmVkRXJyb3JNc2c6ICdDYW5ub3QgYmUgYmxhbmsuJyxcbiAgICBkYXRlQ29udHJvbFR3b1JxdWlyZWRFcnJvck1zZzogJ0Nhbm5vdCBiZSBibGFuay4nLFxuICAgIGFjY2VwdERvY21lbnQ6ICdhcHBsaWNhdGlvbi9tc3dvcmQsIHRleHQvcGxhaW4sIGFwcGxpY2F0aW9uL3BkZiwgaW1hZ2UvKicsXG4gICAgdXBsb2FkSW1nOiAnaHR0cDovLzM0LjIxNy44OS4yMDQvYXNzZXRzL2ltYWdlcy9maWxlVXBsb2FkLnBuZycsXG4gICAgdXBsb2FkVGl0bGU6ICcgVXBsb2FkIExpY2VuY2UnLFxuICAgIGZpbGVMaXN0VGl0bGU6ICdVcGxvYWRlZCBEb2N1bWVudHMnLFxuICAgIGZpbGVJbnB1dElkOiAnZmlsZS1pbnB1dCcsXG4gICAgZmlsZXNBcnJheTogW10sXG4gICAgZmlsZVJlbW92ZUJ0blR4dDogJ0RlbGV0ZScsXG4gICAgZmlsZVJlbW92ZUJ0bklkOiAnZmlsZURlbGV0ZScsXG4gICAgdXBsb2FkSW1nQWx0VHh0OiAnJyxcbiAgICBjYW5jZWxCdG5UZXh0OiAnQ2FuY2VsJyxcbiAgICBzdWJtaXRCdG5UeHQ6ICdBZGQgTGljZW5zZScsXG4gICAgc3VibWl0QnRuQ3VzdG9tQ2xhc3M6ICcnLFxuICAgIGNhbmNlbEJ0bkN1c3RvbUNsYXNzOiAnJyxcblxuICB9XG4gIFxuICBjb250cm9sT25lID0gbmV3IEZvcm1Db250cm9sKCcnKTsgXG4gIGNvbnRyb2xUd28gPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICBkYXRlQ29udHJvbE9uZSA9IG5ldyBGb3JtQ29udHJvbCgnJyk7IFxuICBkYXRlQ29udHJvbFR3byA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIC8vIEBJbnB1dCgnZW5hYmxlLXJlcXVpcmVkLXZhbGlkYXRvci1mb3ItY29udHJvbC1vbmUnKVxuICAvLyBzZXQgZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3JGb3JDb250cm9sT25lKHZhbCkge1xuICAvLyAgIGlmICh2YWwpIHtcbiAgLy8gICAgIHRoaXMuY29udHJvbE9uZS5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAvLyAgICAgdGhpcy5jb250cm9sT25lLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy8gQElucHV0KCdlbmFibGUtcGF0dGVybi1mb3ItY29udHJvbC1vbmUnKVxuICAvLyBzZXQgZW5hYmxlUGF0dGVyblZhbGlkYXRvcnNGb3JDb250cm9sT25lKHZhbCkge1xuICAvLyAgIGlmICh2YWwpIHtcbiAgLy8gICAgIHRoaXMuY29udHJvbE9uZS5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucGF0dGVybih0aGlzLmRpYWxvZ0RhdGEuY29udHJvbE9uZVBhdHRlcm4pKTtcbiAgLy8gICAgIHRoaXMuY29udHJvbE9uZS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vIEBJbnB1dCgnZW5hYmxlLXJlcXVpcmVkLXZhbGlkYXRvci1mb3ItY29udHJvbC10d28nKVxuICAvLyBzZXQgZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3JGb3JDb250cm9sVHdvKHZhbCkge1xuICAvLyAgIGlmICh2YWwpIHtcbiAgLy8gICAgIHRoaXMuY29udHJvbFR3by5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAvLyAgICAgdGhpcy5jb250cm9sVHdvLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy8gQElucHV0KCdlbmFibGUtcGF0dGVybi1mb3ItY29udHJvbC10d28nKVxuICAvLyBzZXQgZW5hYmxlUmVxdWlyZWRWYWxpZGF0b3JzRm9yRGF0ZUNvbnRyb2xPbmUodmFsKSB7XG4gIC8vICAgaWYgKHZhbCkge1xuICAvLyAgICAgdGhpcy5kYXRlQ29udHJvbE9uZS5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAvLyAgICAgdGhpcy5kYXRlQ29udHJvbE9uZS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vIEBJbnB1dCgnZW5hYmxlLXJlcXVpcmVkLXZhbGlkYXRvci1mb3ItZGF0ZUNvbnRyb2wtb25lJylcbiAgLy8gc2V0IGVuYWJsZVJlcXVpcmVkVmFsaWRhdG9yRm9yRGF0ZUNvbnRyb2xUd28odmFsKSB7XG4gIC8vICAgaWYgKHZhbCkge1xuICAvLyAgICAgdGhpcy5kYXRlQ29udHJvbFR3by5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAvLyAgICAgdGhpcy5kYXRlQ29udHJvbFR3by51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gIC8vICAgfVxuICAvLyB9XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyLCBwdWJsaWMgZGlhbG9nQ3VzdG9tUmVmOiBNYXREaWFsb2dSZWY8U3VrdUFkZExpY2Vuc2VNb2RhbENvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnksIFxuICAgIC8vIHB1YmxpYyBzdWt1TW9kYWxTZXJ2aWNlOiBEeW5hbWljRGF0YVxuICAgICkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLmRhdGEpKSB7XG4gICAgICBpZiAodGhpcy5kYXRhW2tleV0pIHtcbiAgICAgICAgdGhpcy5kaWFsb2dEYXRhW2tleV0gPSB0aGlzLmRhdGFba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZih0aGlzLmRpYWxvZ0RhdGEuY29udHJvbE9uZVJlcXVpcmVkKSB7XG4gICAgICAgdGhpcy5jb250cm9sT25lLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICB0aGlzLmNvbnRyb2xPbmUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cblxuICAgIGlmKHRoaXMuZGlhbG9nRGF0YS5jb250cm9sVHdvUmVxdWlyZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbFR3by5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5jb250cm9sVHdvLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG5cbiAgIGlmKHRoaXMuZGlhbG9nRGF0YS5kYXRlQ29udHJvbE9uZVJlcXVpcmVkKSB7XG4gICAgICB0aGlzLmRhdGVDb250cm9sT25lLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICB0aGlzLmRhdGVDb250cm9sT25lLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG5cbiAgIGlmKHRoaXMuZGlhbG9nRGF0YS5kYXRlQ29udHJvbFR3b1JlcXVpcmVkKSB7XG4gICAgICB0aGlzLmRhdGVDb250cm9sVHdvLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICB0aGlzLmRhdGVDb250cm9sVHdvLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG5cbiAgIGlmICh0aGlzLmRpYWxvZ0RhdGEuY29udHJvbFR3b1BhdHRlcm5FbmFibGVkICYmIHRoaXMuZGlhbG9nRGF0YS5jb250cm9sVHdvUmVxdWlyZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbFR3by5zZXRWYWxpZGF0b3JzKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5kaWFsb2dEYXRhLmNvbnRyb2xUd29QYXR0ZXJuKV0pO1xuICAgICAgdGhpcy5jb250cm9sVHdvLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG5cblxuICAgIC8vIGlmICh0aGlzLmRpYWxvZ0RhdGEuY29udHJvbE9uZVBhdHRlcm5FbmFibGVkKSB7XG4gICAgLy8gICB0aGlzLmNvbnRyb2xPbmUuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5kaWFsb2dEYXRhLmNvbnRyb2xPbmVQYXR0ZXJuKSk7XG4gICAgLy8gICB0aGlzLmNvbnRyb2xPbmUudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIC8vIH1cblxuICAgIGNvbnNvbGUubG9nKCd0aGlzLmRpYWxvZ0RhdGEnLCB0aGlzLmRpYWxvZ0RhdGEpO1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbk9uZSA9IHRoaXMuY29udHJvbE9uZS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5jb250cm9sT25lVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB0aGlzLnVzZXJuYW1lQ29udHJvbC5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLl9zdWJzY3JpcHRpb25Ud28gPSB0aGlzLmNvbnRyb2xUd28udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuY29udHJvbFR3b1ZhbHVlID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdGhpcy51c2VybmFtZUNvbnRyb2wuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uVGhyZWUgPSB0aGlzLmRhdGVDb250cm9sT25lLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmRhdGVDb250cm9sT25lVmFsdWUgPSAgdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdGhpcy51c2VybmFtZUNvbnRyb2wuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uRm91ciA9IHRoaXMuZGF0ZUNvbnRyb2xUd28udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuZGF0ZUNvbnRyb2xUd29WYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMudXNlcm5hbWVDb250cm9sLlxuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vIHRoaXMuX3N1YnNjcmliZUZpbGVzID0gdGhpcy5nZXRVcGxvYWRlZEZpbGVzKCkuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAvLyAgICAgaWYgKHZhbHVlKSB7XG4gICAgLy8gICAgICAgdGhpcy51cGxvYWRGaWxlcyA9IHZhbHVlO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIC8vIHRoaXMudXNlcm5hbWVDb250cm9sLlxuICAgIC8vICAgICB9XG4gICAgLy8gfSlcbiAgfVxuXG4gIGFkZExpY2Vuc2UoKSB7XG4gICAgaWYodGhpcy5jb250cm9sT25lLmludmFsaWQgfHwgdGhpcy5jb250cm9sVHdvLmludmFsaWQgfHxcbiAgICAgdGhpcy5kYXRlQ29udHJvbE9uZS5pbnZhbGlkIHx8IHRoaXMuZGF0ZUNvbnRyb2xUd28uaW52YWxpZCkge1xuICAgICAgIHRoaXMuc25hY2tCYXIub3BlbignUGxlYXNlIGZpbGwgYWxsIHRoZSBtYW5kYXRvcnkgZmllbGRzLicsICdjbG9zZScsIHtcbiAgICAgICAgICAgIHZlcnRpY2FsUG9zaXRpb246ICd0b3AnLFxuICAgICAgICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMDBcbiAgICAgICAgfSk7XG4gICB9IGVsc2Uge1xuICAgIGxldCByZXFPYmogPSB7XG4gICAgICBsaWNlbnNlOiB7XG4gICAgICAgIGxpY2Vuc2VOYW1lOiB0aGlzLmNvbnRyb2xPbmVWYWx1ZSxcbiAgICAgICAgbGljZW5zZU51bWJlcjogdGhpcy5jb250cm9sVHdvVmFsdWUsXG4gICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5kYXRlQ29udHJvbE9uZVZhbHVlLFxuICAgICAgICBlbmREYXRlOiB0aGlzLmRhdGVDb250cm9sVHdvVmFsdWUsXG4gICAgICAgIGZpbGVzOiB0aGlzLm11bEZpbGVzXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZGlhbG9nQ3VzdG9tUmVmLmNsb3NlKHJlcU9iaik7XG4gICB9XG4gIH1cblxuICBjbG9zZURpYWxvZygpIHtcbiAgICB0aGlzLmRpYWxvZ0N1c3RvbVJlZi5jbG9zZShmYWxzZSk7XG4gIH1cblxuICBzdGFydFVwbG9hZChlKSB7XG4gICAgICBsZXQgbWF4RmlsZVNpemUgPSAxMDA5NzE1MjtcbiAgICBsZXQgY3VycmVudEZpbGVTaXplO1xuICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGUudGFyZ2V0LmZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbaV07XG4gICAgICAgIGN1cnJlbnRGaWxlU2l6ZSA9IGZpbGUuc2l6ZTtcbiAgICAgICAgY29uc29sZS5sb2coJ2ZpbGUudHlwZScsIGZpbGUudHlwZSlcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGN1cnJlbnRGaWxlU2l6ZSA8PSBtYXhGaWxlU2l6ZSAmJlxuICAgICAgICAgIChmaWxlLnR5cGUgPT0gJ2ltYWdlL2pwZWcnIHx8IGZpbGUudHlwZSA9PSAnaW1hZ2UvcG5nJyB8fCBmaWxlLnR5cGUgPT0gJ2ltYWdlL2pwZycgfHwgZmlsZS50eXBlID09ICcucGRmJyB8fFxuICAgICAgICAgICBmaWxlLnR5cGUgPT0gJ2FwcGxpY2F0aW9uL3J0ZicgfHwgZmlsZS50eXBlID09ICdhcHBsaWNhdGlvbi9tc3dvcmQnIHx8XG4gICAgICAgICAgIGZpbGUudHlwZSA9PSAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQnIHx8IGZpbGUudHlwZSA9PSAnYXBwbGljYXRpb24vcGRmJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gdGhpcy5tdWxGaWxlcy5wdXNoKGUudGFyZ2V0LmZpbGVzW2ldKTtcbiAgICAgICAgICAvLyB0aGlzLmltYWdlcGF0aCA9IHRoaXMuTGljZW5jZXNBbmRSZWdpc3RyYXRpb24udmFsdWUubG9nbztcbiAgICAgICAgICAvLyB0aGlzLmltYWdlQWRkZWQgPSAnSW1hZ2UgYWRkZWRuc2JtZGJtYm5tYic7XG4gICAgICAgICAgdGhpcy5tdWxGaWxlcy5wdXNoKGUudGFyZ2V0LmZpbGVzW2ldKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm11bEZpbGVzKTtcbiAgICAgICAgICAvLyBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAvLyByZWFkZXIub25sb2FkID0gKGU6IGFueSkgPT4ge1xuICAgICAgICAgIC8vICAgdGhpcy5pbWFnZVByZXZpZXdVcmxzLnB1c2goeyBmaWxlOiBlLnRhcmdldC5yZXN1bHQsIG5hbWU6IGZpbGUubmFtZSB9KTtcbiAgICAgICAgICAvLyB9O1xuICAgICAgICAgIC8vIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIHRoaXMuc25hY2tCYXIub3BlbignVXBsb2FkIFdvcmQsIEltYWdlIG9yIFBERiBmb3JtYXQgb2YgeW91ciBMaWNlbnNlLCBTaXplIHNob3VsZCBiZSBiZWxvdyAxME1CLicsICdjbG9zZScsIHtcbiAgICAgICAgICAgIHZlcnRpY2FsUG9zaXRpb246ICd0b3AnLFxuICAgICAgICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMDBcbiAgICAgICAgfSk7IFxuICAgICAgICB9XG4gIFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUZpbGUocGFyYW0pIHtcbiAgICB0aGlzLm11bEZpbGVzLnNwbGljZShwYXJhbSwgMSlcbiAgICBjb25zb2xlLmxvZygncGFyYW0nLCBwYXJhbSlcbiAgfVxuXG4gIHNuYWNrYmFyKG1zZykge1xuICAgIHRoaXMuc25hY2tCYXIub3Blbihtc2csICdjbG9zZScsIHtcbiAgICAgIHZlcnRpY2FsUG9zaXRpb246ICdib3R0b20nLFxuICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgZHVyYXRpb246IDM1MDBcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=