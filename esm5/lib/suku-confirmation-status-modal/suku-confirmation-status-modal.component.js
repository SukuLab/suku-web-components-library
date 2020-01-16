/**
 * @fileoverview added by tsickle
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
                    template: "<div class=\"text-center p-0\">\r\n  <div class=\"col text-center\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"modalproduct-boxContent\">\r\n        <div class=\"col pl-lg-4 pt-1 pb-2\">\r\n          <div class=\"row\">\r\n            <div class=\"col mt-2 mb-2\">\r\n              <div class=\"col mb-3\">\r\n                <img [src]=\"dialogData?.imgSrc\" id=\"{{dialogData?.imgId}}\" *ngIf=\"dialogData?.imgSrc\" />\r\n                <i class=\"{{dialogData?.icon}} {{dialogData?.iconCustomClass}}\" id=\"{{dialogData?.iconId}}\"\r\n                  *ngIf=\"dialogData?.icon\"></i>\r\n              </div>\r\n              <span id=\"{{ dialogData?.messageId }}\"\r\n                class=\"modalcolor {{ dialogData?.messageCustomClass }} pb-1 mt-3 mb-3\">\r\n                {{ dialogData?.message }}\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <h2 class=\"col-sm-10 modalFontStyle mt-4 mb-2 text-left {{ dialogData?.descriptionCustomClass }}\">\r\n        {{ dialogData?.description }}\r\n      </h2>\r\n\r\n      <h2 class=\"col-sm-10 modalNoteStyle mt-4 mb-2 text-left {{ dialogData?.descriptionOneCustomClass }}\">\r\n        {{ dialogData?.descriptionOne }}\r\n      </h2>\r\n\r\n      <mat-form-field class=\"col-sm-10\">\r\n        <input matInput placeholder=\"{{ dialogData?.controlOnePlaceholder }}\" [formControl]=\"controlOne\"\r\n          name=\"{{dialogData?.controlOne}}\" id=\"{{ dialogData?.controlOneId }}\">\r\n          <!-- <input matInput placeholder=\"Tracking Number (Optional)\"> -->\r\n      </mat-form-field>\r\n      <mat-form-field class=\"col-sm-10\">\r\n        <textarea matInput placeholder=\"{{ dialogData?.controlTwoPlaceholder }}\" [formControl]=\"controlTwo\"\r\n          name=\"{{dialogData?.controlTwo}}\" id=\"{{ dialogData?.controlTwoId }}\" #g (change)=\"checkChar(g.value)\" (keydown)=\"checkChar(g.value)\">\r\n          <mat-error *ngIf=\"controlTwo.hasError('required')\">\r\n            {{ dialogData?.controlTwoRquiredErrorMsg }}\r\n          </mat-error>\r\n        </textarea>\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n  <div class=\"col text-center p-3\">\r\n    <div class=\"row d-flex justify-content-around\">\r\n      <div class=\"col-lg-10 col-md-10\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\r\n            mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2\">\r\n            <button type=\"button\" (click)=\"close()\"\r\n              class=\"btn btn-secondary btn-default btn-lg col-lg-8 col-md-8 {{ dialogData?.cancelBtnCustomClass }}\">{{ dialogData?.cancelBtnText }}</button>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n            <button type=\"button\"\r\n              class=\"btn btn-info btn btn-info btn-lg col-lg-8 col-md-8 col-sm-12 col-xs-12 {{ dialogData?.submitBtnCustomClass }}\"\r\n              (click)=\"submit(); \" [ngClass]=\"{'disabled' : disableValue}\" [disabled]=\"disableValue\">{{ dialogData?.submitBtnTxt }}</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNvbmZpcm1hdGlvbi1zdGF0dXMtbW9kYWwvc3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWtCLEtBQUssRUFBZ0IsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0U7SUE2Q0UsOENBQW1CLGVBQW1FLEVBQzVFLFFBQXFCLEVBQ0csSUFBUztRQUZ4QixvQkFBZSxHQUFmLGVBQWUsQ0FBb0Q7UUFDNUUsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUNHLFNBQUksR0FBSixJQUFJLENBQUs7UUF0Q2xDLGVBQVUsR0FBRztZQUNwQixRQUFRLEVBQUUsRUFBRTtZQUNaLE9BQU8sRUFBRSxFQUFFO1lBQ1gsTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRLEVBQUUsV0FBVztZQUNyQixpQkFBaUIsRUFBRSxTQUFTO1lBQzVCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsYUFBYSxFQUFFLEVBQUU7WUFDakIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsb0JBQW9CLEVBQUUsRUFBRTtZQUN4Qix3QkFBd0IsRUFBRSxFQUFFO1lBQzVCLDJCQUEyQixFQUFFLEVBQUU7WUFDL0IsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixtQkFBbUIsRUFBRSxFQUFFO1lBQ3ZCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsVUFBVSxFQUFFLEVBQUU7WUFDZCxhQUFh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cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEsIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LWNvbmZpcm1hdGlvbi1zdGF0dXMtbW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWNvbmZpcm1hdGlvbi1zdGF0dXMtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtY29uZmlybWF0aW9uLXN0YXR1cy1tb2RhbC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1Q29uZmlybWF0aW9uU3RhdHVzTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb250cm9sT25lVmFsdWU7XHJcbiAgY29udHJvbFR3b1ZhbHVlO1xyXG4gIEBJbnB1dCgpIGRpYWxvZ0RhdGEgPSB7XHJcbiAgICAnaW1nU3JjJzogJycsXHJcbiAgICAnaW1nSWQnOiAnJyxcclxuICAgICdpY29uJzogJycsXHJcbiAgICAnaWNvbklkJzogJ3N1a3UtaWNvbicsXHJcbiAgICAnaWNvbkN1c3RvbUNsYXNzJzogJ3N1a3UteGwnLFxyXG4gICAgJ21lc3NhZ2UnOiAnJyxcclxuICAgICdkZXNjcmlwdGlvbic6ICcnLFxyXG4gICAgJ2xvYWRlcic6ICdkaXNhYmxlJyxcclxuICAgICdidXR0b25UZXh0JzogJycsXHJcbiAgICAnbWVzc2FnZUN1c3RvbUNsYXNzJzogJycsXHJcbiAgICAnZGVzY3JpcHRpb25DdXN0b21DbGFzcyc6ICcnLFxyXG4gICAgJ2Rlc2NyaXB0aW9uT25lQ3VzdG9tQ2xhc3MnOiAnJyxcclxuICAgICdkZXNjcmlwdGlvbk9uZSc6ICcnLFxyXG4gICAgJ2J1dHRvbkN1c3RvbUNsYXNzJzogJycsXHJcbiAgICAnbWVzc2FnZUlkJzogJycsXHJcbiAgICAnYnV0dG9uSWQnOiAnJyxcclxuICAgIGNhbmNlbEJ0blRleHQ6ICdDYW5jZWwnLFxyXG4gICAgc3VibWl0QnRuVHh0OiAnQ29uZmlybScsXHJcbiAgICBjYW5jZWxCdG5DdXN0b21DbGFzczogJycsXHJcbiAgICBzdWJtaXRCdG5DdXN0b21DbGFzczogJycsXHJcbiAgICBjb250cm9sT25lOiAnY29udHJvbE9uZScsXHJcbiAgICBjb250cm9sVHdvOiAnY29udHJvbFR3bycsXHJcbiAgICBjb250cm9sVHdvUmVxdWlyZWQ6ICcnLFxyXG4gICAgY29udHJvbE9uZUlkOiAnY29udGVudE9uZScsXHJcbiAgICBjb250cm9sVHdvSWQ6ICdDb250ZW50VHdvJyxcclxuICAgIGNvbnRyb2xPbmVQbGFjZWhvbGRlcjogJ1RyYWNraW5nIE51bWJlciAoT3B0aW9uYWwpJyxcclxuICAgIGNvbnRyb2xUd29QbGFjZWhvbGRlcjogJ0NvbW1lbnRzKicsXHJcbiAgICBjb250cm9sVHdvUnF1aXJlZEVycm9yTXNnIDogJ0Nhbm5vdCBiZSBibGFuay4nXHJcblxyXG4gIH07XHJcbiAgY29udHJvbE9uZSA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcbiAgY29udHJvbFR3byA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcblx0QElucHV0KCdkaXNhYmxlLXZhbHVlJykgZGlzYWJsZVZhbHVlOiBCb29sZWFuID0gdHJ1ZTtcclxuICBfc3Vic2NyaXB0aW9uVHdvO1xyXG4gIF9zdWJzY3JpcHRpb25PbmU7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ0N1c3RvbVJlZjogTWF0RGlhbG9nUmVmPFN1a3VDb25maXJtYXRpb25TdGF0dXNNb2RhbENvbXBvbmVudD4sXHJcbiAgICBwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5kYXRhLm1vZGFsRGF0YSkge1xyXG4gICAgICB0aGlzLmRhdGEubW9kYWxEYXRhLnN1YnNjcmliZSgodmFsKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEtLScsIHZhbCk7XHJcbiAgICAgICAgaWYgKHZhbCkge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModmFsKSkge1xyXG4gICAgICAgICAgICBpZiAodmFsW2tleV0pIHtcclxuICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0RhdGFba2V5XSA9IHZhbFtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kaWFsb2dEYXRhLmNvbnRyb2xUd29SZXF1aXJlZCkge1xyXG4gICAgICB0aGlzLmNvbnRyb2xUd28uc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgICAgdGhpcy5jb250cm9sVHdvLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbk9uZSA9IHRoaXMuY29udHJvbE9uZS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sT25lVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB0aGlzLnVzZXJuYW1lQ29udHJvbC5cclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvblR3byA9IHRoaXMuY29udHJvbFR3by52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sVHdvVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB0aGlzLnVzZXJuYW1lQ29udHJvbC5cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5kaWFsb2dDdXN0b21SZWYuY2xvc2UodHJ1ZSk7XHJcbiAgfVxyXG4gIGNoZWNrQ2hhcihldmVudCl7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIHZhbHVlXCIsIHRoaXMuY29udHJvbFR3b1ZhbHVlKTtcclxuICAgICAgaWYoZXZlbnQubGVuZ3RoID09IDApe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm8gY29udGVudCBwcmVzZW50IFwiLGV2ZW50Lmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlVmFsdWUgPSB0cnVlO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnRlbnQgcHJlc2VudCBcIixldmVudC5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZVZhbHVlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBjYWxsZWQgOlwiLHRoaXMuY29udHJvbFR3by5pbnZhbGlkKTtcclxuICAgIGlmICh0aGlzLmNvbnRyb2xUd28uaW52YWxpZCkge1xyXG4gICAgICB0aGlzLnNuYWNrQmFyLm9wZW4oJ1BsZWFzZSBmaWxsIGFsbCB0aGUgbWFuZGF0b3J5IGZpZWxkcy4nLCAnY2xvc2UnLCB7XHJcbiAgICAgICAgdmVydGljYWxQb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgIGR1cmF0aW9uOiA1MDAwXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHJlcU9iaiA9IHtcclxuICAgICAgICBDb21tZW50czoge1xyXG4gICAgICAgICAgdHJhY2tpbmdJZDogdGhpcy5jb250cm9sT25lVmFsdWUsXHJcbiAgICAgICAgICBjb21tZW50czogdGhpcy5jb250cm9sVHdvVmFsdWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidGhpIHNpcyBzbHMgOlwiLHJlcU9iaik7XHJcbiAgICAgIHRoaXMuZGlhbG9nQ3VzdG9tUmVmLmNsb3NlKHJlcU9iaik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==