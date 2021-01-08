/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-confirmation-status-modal/suku-confirmation-status-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
var SukuConfirmationStatusModalComponent = /** @class */ (function () {
    function SukuConfirmationStatusModalComponent(dialogCustomRef, snackBar, data) {
        this.dialogCustomRef = dialogCustomRef;
        this.snackBar = snackBar;
        this.data = data;
        this.dialogData = {
            'imgSrc': '',
            'imgId': '',
            'icon': '',
            'iconId': 'suku-icon',
            'iconCustomClass': 'suku-xl',
            'message': '',
            'description': '',
            'loader': 'disable',
            'buttonText': '',
            'messageCustomClass': '',
            'descriptionCustomClass': '',
            'descriptionOneCustomClass': '',
            'descriptionOne': '',
            'buttonCustomClass': '',
            'messageId': '',
            'buttonId': '',
            cancelBtnText: 'Cancel',
            submitBtnTxt: 'Confirm',
            cancelBtnCustomClass: '',
            submitBtnCustomClass: '',
            controlOne: 'controlOne',
            controlTwo: 'controlTwo',
            controlTwoRequired: '',
            controlOneId: 'contentOne',
            controlTwoId: 'ContentTwo',
            controlOnePlaceholder: 'Tracking Number (Optional)',
            controlTwoPlaceholder: 'Comments*',
            controlTwoRquiredErrorMsg: 'Cannot be blank.'
        };
        this.controlOne = new FormControl('');
        this.controlTwo = new FormControl('');
        this.disableValue = true;
    }
    /**
     * @return {?}
     */
    SukuConfirmationStatusModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.data.modalData) {
            this.data.modalData.subscribe((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                var e_1, _a;
                console.log('data--', val);
                if (val) {
                    try {
                        for (var _b = tslib_1.__values(Object.keys(val)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var key = _c.value;
                            if (val[key]) {
                                _this.dialogData[key] = val[key];
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
                }
            }));
        }
        if (this.dialogData.controlTwoRequired) {
            this.controlTwo.setValidators(Validators.required);
            this.controlTwo.updateValueAndValidity();
        }
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
    };
    /**
     * @return {?}
     */
    SukuConfirmationStatusModalComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.dialogCustomRef.close(true);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SukuConfirmationStatusModalComponent.prototype.checkChar = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // console.log("this is the value", this.controlTwoValue);
        if (event.length == 0) {
            console.log("no content present ", event.length);
            this.disableValue = true;
        }
        else {
            console.log("content present ", event.length);
            this.disableValue = false;
        }
    };
    /**
     * @return {?}
     */
    SukuConfirmationStatusModalComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        console.log("this is called :", this.controlTwo.invalid);
        if (this.controlTwo.invalid) {
            this.snackBar.open('Please fill all the mandatory fields.', 'close', {
                verticalPosition: 'top',
                horizontalPosition: 'right',
                duration: 5000
            });
        }
        else {
            /** @type {?} */
            var reqObj = {
                Comments: {
                    trackingId: this.controlOneValue,
                    comments: this.controlTwoValue,
                }
            };
            console.log("thi sis sls :", reqObj);
            this.dialogCustomRef.close(reqObj);
        }
    };
    SukuConfirmationStatusModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-confirmation-status-modal',
                    template: "<div class=\"text-center p-0\">\n  <div class=\"col text-center\">\n    <div class=\"row justify-content-center\">\n      <div class=\"modalproduct-boxContent\">\n        <div class=\"col pl-lg-4 pt-1 pb-2\">\n          <div class=\"row\">\n            <div class=\"col mt-2 mb-2\">\n              <div class=\"col mb-3\">\n                <img [src]=\"dialogData?.imgSrc\" id=\"{{dialogData?.imgId}}\" *ngIf=\"dialogData?.imgSrc\" />\n                <i class=\"{{dialogData?.icon}} {{dialogData?.iconCustomClass}}\" id=\"{{dialogData?.iconId}}\"\n                  *ngIf=\"dialogData?.icon\"></i>\n              </div>\n              <span id=\"{{ dialogData?.messageId }}\"\n                class=\"modalcolor {{ dialogData?.messageCustomClass }} pb-1 mt-3 mb-3\">\n                {{ dialogData?.message }}\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class=\"col-sm-10 modalFontStyle mt-4 mb-2 text-left {{ dialogData?.descriptionCustomClass }}\">\n        {{ dialogData?.description }}\n      </h2>\n\n      <h2 class=\"col-sm-10 modalNoteStyle mt-4 mb-2 text-left {{ dialogData?.descriptionOneCustomClass }}\">\n        {{ dialogData?.descriptionOne }}\n      </h2>\n\n      <mat-form-field class=\"col-sm-10\">\n        <input matInput placeholder=\"{{ dialogData?.controlOnePlaceholder }}\" [formControl]=\"controlOne\"\n          name=\"{{dialogData?.controlOne}}\" id=\"{{ dialogData?.controlOneId }}\">\n          <!-- <input matInput placeholder=\"Tracking Number (Optional)\"> -->\n      </mat-form-field>\n      <mat-form-field class=\"col-sm-10\">\n        <textarea matInput placeholder=\"{{ dialogData?.controlTwoPlaceholder }}\" [formControl]=\"controlTwo\"\n          name=\"{{dialogData?.controlTwo}}\" id=\"{{ dialogData?.controlTwoId }}\" #g (change)=\"checkChar(g.value)\" (keydown)=\"checkChar(g.value)\">\n          <mat-error *ngIf=\"controlTwo.hasError('required')\">\n            {{ dialogData?.controlTwoRquiredErrorMsg }}\n          </mat-error>\n        </textarea>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"col text-center p-3\">\n    <div class=\"row d-flex justify-content-around\">\n      <div class=\"col-lg-10 col-md-10\">\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\n            mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2\">\n            <button type=\"button\" (click)=\"close()\"\n              class=\"btn btn-secondary btn-default btn-lg col-lg-8 col-md-8 {{ dialogData?.cancelBtnCustomClass }}\">{{ dialogData?.cancelBtnText }}</button>\n          </div>\n          <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n            <button type=\"button\"\n              class=\"btn btn-info btn btn-info btn-lg col-lg-8 col-md-8 col-sm-12 col-xs-12 {{ dialogData?.submitBtnCustomClass }}\"\n              (click)=\"submit(); \" [ngClass]=\"{'disabled' : disableValue}\" [disabled]=\"disableValue\">{{ dialogData?.submitBtnTxt }}</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border-color:var(--suku-primary-border-color)!important;background-color:#fff;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.modalcolor{font-family:Poppins,sans-serif!important;color:#fff!important;font-size:20px;font-weight:300}.modalFontStyle{font-family:Poppins,sans-serif!important;font-size:17px;letter-spacing:.4px;font-weight:700;color:#1c1c1c!important}.width100{width:100%}.errorMsg{font-family:\"Encode Sans\",sans-serif!important;color:#e53935;font-size:75%}.btn-info{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:a7bf2e;color:#000}.modalproduct-boxContent{width:100%;float:left;background-image:linear-gradient(to bottom,rgba(101,102,243,.06),rgba(101,102,243,.06)),radial-gradient(circle at 50% 0,#3a3a3a,#000);box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 15px;margin:0}.bgWhite{background-color:#fff!important}::ng-deep mat-dialog-container{padding:0!important;overflow:hidden!important}:host ::ng-deep mat-dialog-content{max-height:91%!important;overflow-y:none!important;margin:0!important;height:100%!important}:host ::ng-deep mat-dialog-actions{margin:5px 10px!important}.modalNoteStyle{font-family:Poppins,sans-serif!important;font-size:15px;letter-spacing:.4px;font-weight:500;color:#1c1c1c!important}.btn-info.disabled{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:grey}.btn-info.disabled:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:var(--suku-text-link);cursor:not-allowed}"]
                }] }
    ];
    /** @nocollapse */
    SukuConfirmationStatusModalComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: MatSnackBar },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    SukuConfirmationStatusModalComponent.propDecorators = {
        dialogData: [{ type: Input }],
        disableValue: [{ type: Input, args: ['disable-value',] }]
    };
    return SukuConfirmationStatusModalComponent;
}());
export { SukuConfirmationStatusModalComponent };
if (false) {
    /** @type {?} */
    SukuConfirmationStatusModalComponent.prototype.controlOneValue;
    /** @type {?} */
    SukuConfirmationStatusModalComponent.prototype.controlTwoValue;
    /** @type {?} */
    SukuConfirmationStatusModalComponent.prototype.dialogData;
    /** @type {?} */
    SukuConfirmationStatusModalComponent.prototype.controlOne;
    /** @type {?} */
    SukuConfirmationStatusModalComponent.prototype.controlTwo;
    /** @type {?} */
    SukuConfirmationStatusModalComponent.prototype.disableValue;
    /** @type {?} */
    SukuConfirmationStatusModalComponent.prototype._subscriptionTwo;
    /** @type {?} */
    SukuConfirmationStatusModalComponent.prototype._subscriptionOne;
    /** @type {?} */
    SukuConfirmationStatusModalComponent.prototype.dialogCustomRef;
    /**
     * @type {?}
     * @private
     */
    SukuConfirmationStatusModalComponent.prototype.snackBar;
    /** @type {?} */
    SukuConfirmationStatusModalComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNvbmZpcm1hdGlvbi1zdGF0dXMtbW9kYWwvc3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFrQixLQUFLLEVBQWdCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQWEsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9FO0lBNkNFLDhDQUFtQixlQUFtRSxFQUM1RSxRQUFxQixFQUNHLElBQVM7UUFGeEIsb0JBQWUsR0FBZixlQUFlLENBQW9EO1FBQzVFLGFBQVEsR0FBUixRQUFRLENBQWE7UUFDRyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBdENsQyxlQUFVLEdBQUc7WUFDcEIsUUFBUSxFQUFFLEVBQUU7WUFDWixPQUFPLEVBQUUsRUFBRTtZQUNYLE1BQU0sRUFBRSxFQUFFO1lBQ1YsUUFBUSxFQUFFLFdBQVc7WUFDckIsaUJBQWlCLEVBQUUsU0FBUztZQUM1QixTQUFTLEVBQUUsRUFBRTtZQUNiLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFlBQVksRUFBRSxFQUFFO1lBQ2hCLG9CQUFvQixFQUFFLEVBQUU7WUFDeEIsd0JBQXdCLEVBQUUsRUFBRTtZQUM1QiwyQkFBMkIsRUFBRSxFQUFFO1lBQy9CLGdCQUFnQixFQUFFLEVBQUU7WUFDcEIsbUJBQW1CLEVBQUUsRUFBRTtZQUN2QixXQUFXLEVBQUUsRUFBRTtZQUNmLFVBQVUsRUFBRSxFQUFFO1lBQ2QsYUFB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dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEsIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWNvbmZpcm1hdGlvbi1zdGF0dXMtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUNvbmZpcm1hdGlvblN0YXR1c01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb250cm9sT25lVmFsdWU7XG4gIGNvbnRyb2xUd29WYWx1ZTtcbiAgQElucHV0KCkgZGlhbG9nRGF0YSA9IHtcbiAgICAnaW1nU3JjJzogJycsXG4gICAgJ2ltZ0lkJzogJycsXG4gICAgJ2ljb24nOiAnJyxcbiAgICAnaWNvbklkJzogJ3N1a3UtaWNvbicsXG4gICAgJ2ljb25DdXN0b21DbGFzcyc6ICdzdWt1LXhsJyxcbiAgICAnbWVzc2FnZSc6ICcnLFxuICAgICdkZXNjcmlwdGlvbic6ICcnLFxuICAgICdsb2FkZXInOiAnZGlzYWJsZScsXG4gICAgJ2J1dHRvblRleHQnOiAnJyxcbiAgICAnbWVzc2FnZUN1c3RvbUNsYXNzJzogJycsXG4gICAgJ2Rlc2NyaXB0aW9uQ3VzdG9tQ2xhc3MnOiAnJyxcbiAgICAnZGVzY3JpcHRpb25PbmVDdXN0b21DbGFzcyc6ICcnLFxuICAgICdkZXNjcmlwdGlvbk9uZSc6ICcnLFxuICAgICdidXR0b25DdXN0b21DbGFzcyc6ICcnLFxuICAgICdtZXNzYWdlSWQnOiAnJyxcbiAgICAnYnV0dG9uSWQnOiAnJyxcbiAgICBjYW5jZWxCdG5UZXh0OiAnQ2FuY2VsJyxcbiAgICBzdWJtaXRCdG5UeHQ6ICdDb25maXJtJyxcbiAgICBjYW5jZWxCdG5DdXN0b21DbGFzczogJycsXG4gICAgc3VibWl0QnRuQ3VzdG9tQ2xhc3M6ICcnLFxuICAgIGNvbnRyb2xPbmU6ICdjb250cm9sT25lJyxcbiAgICBjb250cm9sVHdvOiAnY29udHJvbFR3bycsXG4gICAgY29udHJvbFR3b1JlcXVpcmVkOiAnJyxcbiAgICBjb250cm9sT25lSWQ6ICdjb250ZW50T25lJyxcbiAgICBjb250cm9sVHdvSWQ6ICdDb250ZW50VHdvJyxcbiAgICBjb250cm9sT25lUGxhY2Vob2xkZXI6ICdUcmFja2luZyBOdW1iZXIgKE9wdGlvbmFsKScsXG4gICAgY29udHJvbFR3b1BsYWNlaG9sZGVyOiAnQ29tbWVudHMqJyxcbiAgICBjb250cm9sVHdvUnF1aXJlZEVycm9yTXNnIDogJ0Nhbm5vdCBiZSBibGFuay4nXG5cbiAgfTtcbiAgY29udHJvbE9uZSA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIGNvbnRyb2xUd28gPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuXHRASW5wdXQoJ2Rpc2FibGUtdmFsdWUnKSBkaXNhYmxlVmFsdWU6IEJvb2xlYW4gPSB0cnVlO1xuICBfc3Vic2NyaXB0aW9uVHdvO1xuICBfc3Vic2NyaXB0aW9uT25lO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nQ3VzdG9tUmVmOiBNYXREaWFsb2dSZWY8U3VrdUNvbmZpcm1hdGlvblN0YXR1c01vZGFsQ29tcG9uZW50PixcbiAgICBwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5tb2RhbERhdGEpIHtcbiAgICAgIHRoaXMuZGF0YS5tb2RhbERhdGEuc3Vic2NyaWJlKCh2YWwpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEtLScsIHZhbCk7XG4gICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh2YWwpKSB7XG4gICAgICAgICAgICBpZiAodmFsW2tleV0pIHtcbiAgICAgICAgICAgICAgdGhpcy5kaWFsb2dEYXRhW2tleV0gPSB2YWxba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpYWxvZ0RhdGEuY29udHJvbFR3b1JlcXVpcmVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2xUd28uc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgIHRoaXMuY29udHJvbFR3by51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbk9uZSA9IHRoaXMuY29udHJvbE9uZS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbnRyb2xPbmVWYWx1ZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhpcy51c2VybmFtZUNvbnRyb2wuXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25Ud28gPSB0aGlzLmNvbnRyb2xUd28udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb250cm9sVHdvVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoaXMudXNlcm5hbWVDb250cm9sLlxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmRpYWxvZ0N1c3RvbVJlZi5jbG9zZSh0cnVlKTtcbiAgfVxuICBjaGVja0NoYXIoZXZlbnQpe1xuICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgdmFsdWVcIiwgdGhpcy5jb250cm9sVHdvVmFsdWUpO1xuICAgICAgaWYoZXZlbnQubGVuZ3RoID09IDApe1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGNvbnRlbnQgcHJlc2VudCBcIixldmVudC5sZW5ndGgpO1xuICAgICAgICB0aGlzLmRpc2FibGVWYWx1ZSA9IHRydWU7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb250ZW50IHByZXNlbnQgXCIsZXZlbnQubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlVmFsdWUgPSBmYWxzZTtcbiAgICAgIH1cbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgY2FsbGVkIDpcIix0aGlzLmNvbnRyb2xUd28uaW52YWxpZCk7XG4gICAgaWYgKHRoaXMuY29udHJvbFR3by5pbnZhbGlkKSB7XG4gICAgICB0aGlzLnNuYWNrQmFyLm9wZW4oJ1BsZWFzZSBmaWxsIGFsbCB0aGUgbWFuZGF0b3J5IGZpZWxkcy4nLCAnY2xvc2UnLCB7XG4gICAgICAgIHZlcnRpY2FsUG9zaXRpb246ICd0b3AnLFxuICAgICAgICBob3Jpem9udGFsUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgIGR1cmF0aW9uOiA1MDAwXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHJlcU9iaiA9IHtcbiAgICAgICAgQ29tbWVudHM6IHtcbiAgICAgICAgICB0cmFja2luZ0lkOiB0aGlzLmNvbnRyb2xPbmVWYWx1ZSxcbiAgICAgICAgICBjb21tZW50czogdGhpcy5jb250cm9sVHdvVmFsdWUsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwidGhpIHNpcyBzbHMgOlwiLHJlcU9iaik7XG4gICAgICB0aGlzLmRpYWxvZ0N1c3RvbVJlZi5jbG9zZShyZXFPYmopO1xuICAgIH1cbiAgfVxufVxuIl19