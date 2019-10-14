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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNvbmZpcm1hdGlvbi1zdGF0dXMtbW9kYWwvc3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWtCLEtBQUssRUFBZ0IsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0U7SUE2Q0UsOENBQW1CLGVBQW1FLEVBQzVFLFFBQXFCLEVBQ0csSUFBUztRQUZ4QixvQkFBZSxHQUFmLGVBQWUsQ0FBb0Q7UUFDNUUsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUNHLFNBQUksR0FBSixJQUFJLENBQUs7UUF0Q2xDLGVBQVUsR0FBRztZQUNwQixRQUFRLEVBQUUsRUFBRTtZQUNaLE9BQU8sRUFBRSxFQUFFO1lBQ1gsTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRLEVBQUUsV0FBVztZQUNyQixpQkFBaUIsRUFBRSxTQUFTO1lBQzVCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsYUFBYSxFQUFFLEVBQUU7WUFDakIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsb0JBQW9CLEVBQUUsRUFBRTtZQUN4Qix3QkFBd0IsRUFBRSxFQUFFO1lBQzVCLDJCQUEyQixFQUFFLEVBQUU7WUFDL0IsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixtQkFBbUIsRUFBRSxFQUFFO1lBQ3ZCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsVUFBVSxFQUFFLEVBQUU7WUFDZCxhQUFh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cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSwgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtY29uZmlybWF0aW9uLXN0YXR1cy1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWNvbmZpcm1hdGlvbi1zdGF0dXMtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNvbmZpcm1hdGlvbi1zdGF0dXMtbW9kYWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Q29uZmlybWF0aW9uU3RhdHVzTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnRyb2xPbmVWYWx1ZTtcbiAgY29udHJvbFR3b1ZhbHVlO1xuICBASW5wdXQoKSBkaWFsb2dEYXRhID0ge1xuICAgICdpbWdTcmMnOiAnJyxcbiAgICAnaW1nSWQnOiAnJyxcbiAgICAnaWNvbic6ICcnLFxuICAgICdpY29uSWQnOiAnc3VrdS1pY29uJyxcbiAgICAnaWNvbkN1c3RvbUNsYXNzJzogJ3N1a3UteGwnLFxuICAgICdtZXNzYWdlJzogJycsXG4gICAgJ2Rlc2NyaXB0aW9uJzogJycsXG4gICAgJ2xvYWRlcic6ICdkaXNhYmxlJyxcbiAgICAnYnV0dG9uVGV4dCc6ICcnLFxuICAgICdtZXNzYWdlQ3VzdG9tQ2xhc3MnOiAnJyxcbiAgICAnZGVzY3JpcHRpb25DdXN0b21DbGFzcyc6ICcnLFxuICAgICdkZXNjcmlwdGlvbk9uZUN1c3RvbUNsYXNzJzogJycsXG4gICAgJ2Rlc2NyaXB0aW9uT25lJzogJycsXG4gICAgJ2J1dHRvbkN1c3RvbUNsYXNzJzogJycsXG4gICAgJ21lc3NhZ2VJZCc6ICcnLFxuICAgICdidXR0b25JZCc6ICcnLFxuICAgIGNhbmNlbEJ0blRleHQ6ICdDYW5jZWwnLFxuICAgIHN1Ym1pdEJ0blR4dDogJ0NvbmZpcm0nLFxuICAgIGNhbmNlbEJ0bkN1c3RvbUNsYXNzOiAnJyxcbiAgICBzdWJtaXRCdG5DdXN0b21DbGFzczogJycsXG4gICAgY29udHJvbE9uZTogJ2NvbnRyb2xPbmUnLFxuICAgIGNvbnRyb2xUd286ICdjb250cm9sVHdvJyxcbiAgICBjb250cm9sVHdvUmVxdWlyZWQ6ICcnLFxuICAgIGNvbnRyb2xPbmVJZDogJ2NvbnRlbnRPbmUnLFxuICAgIGNvbnRyb2xUd29JZDogJ0NvbnRlbnRUd28nLFxuICAgIGNvbnRyb2xPbmVQbGFjZWhvbGRlcjogJ1RyYWNraW5nIE51bWJlciAoT3B0aW9uYWwpJyxcbiAgICBjb250cm9sVHdvUGxhY2Vob2xkZXI6ICdDb21tZW50cyonLFxuICAgIGNvbnRyb2xUd29ScXVpcmVkRXJyb3JNc2cgOiAnQ2Fubm90IGJlIGJsYW5rLidcblxuICB9O1xuICBjb250cm9sT25lID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgY29udHJvbFR3byA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG5cdEBJbnB1dCgnZGlzYWJsZS12YWx1ZScpIGRpc2FibGVWYWx1ZTogQm9vbGVhbiA9IHRydWU7XG4gIF9zdWJzY3JpcHRpb25Ud287XG4gIF9zdWJzY3JpcHRpb25PbmU7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dDdXN0b21SZWY6IE1hdERpYWxvZ1JlZjxTdWt1Q29uZmlybWF0aW9uU3RhdHVzTW9kYWxDb21wb25lbnQ+LFxuICAgIHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5kYXRhLm1vZGFsRGF0YSkge1xuICAgICAgdGhpcy5kYXRhLm1vZGFsRGF0YS5zdWJzY3JpYmUoKHZhbCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZGF0YS0tJywgdmFsKTtcbiAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHZhbCkpIHtcbiAgICAgICAgICAgIGlmICh2YWxba2V5XSkge1xuICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0RhdGFba2V5XSA9IHZhbFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlhbG9nRGF0YS5jb250cm9sVHdvUmVxdWlyZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbFR3by5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgdGhpcy5jb250cm9sVHdvLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uT25lID0gdGhpcy5jb250cm9sT25lLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29udHJvbE9uZVZhbHVlID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGlzLnVzZXJuYW1lQ29udHJvbC5cbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuX3N1YnNjcmlwdGlvblR3byA9IHRoaXMuY29udHJvbFR3by52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbnRyb2xUd29WYWx1ZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhpcy51c2VybmFtZUNvbnRyb2wuXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuZGlhbG9nQ3VzdG9tUmVmLmNsb3NlKHRydWUpO1xuICB9XG4gIGNoZWNrQ2hhcihldmVudCl7XG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSB2YWx1ZVwiLCB0aGlzLmNvbnRyb2xUd29WYWx1ZSk7XG4gICAgICBpZihldmVudC5sZW5ndGggPT0gMCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibm8gY29udGVudCBwcmVzZW50IFwiLGV2ZW50Lmxlbmd0aCk7XG4gICAgICAgIHRoaXMuZGlzYWJsZVZhbHVlID0gdHJ1ZTtcbiAgICAgIH1lbHNle1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnRlbnQgcHJlc2VudCBcIixldmVudC5sZW5ndGgpO1xuICAgICAgICB0aGlzLmRpc2FibGVWYWx1ZSA9IGZhbHNlO1xuICAgICAgfVxuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBjYWxsZWQgOlwiLHRoaXMuY29udHJvbFR3by5pbnZhbGlkKTtcbiAgICBpZiAodGhpcy5jb250cm9sVHdvLmludmFsaWQpIHtcbiAgICAgIHRoaXMuc25hY2tCYXIub3BlbignUGxlYXNlIGZpbGwgYWxsIHRoZSBtYW5kYXRvcnkgZmllbGRzLicsICdjbG9zZScsIHtcbiAgICAgICAgdmVydGljYWxQb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgIGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgZHVyYXRpb246IDUwMDBcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcmVxT2JqID0ge1xuICAgICAgICBDb21tZW50czoge1xuICAgICAgICAgIHRyYWNraW5nSWQ6IHRoaXMuY29udHJvbE9uZVZhbHVlLFxuICAgICAgICAgIGNvbW1lbnRzOiB0aGlzLmNvbnRyb2xUd29WYWx1ZSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coXCJ0aGkgc2lzIHNscyA6XCIscmVxT2JqKTtcbiAgICAgIHRoaXMuZGlhbG9nQ3VzdG9tUmVmLmNsb3NlKHJlcU9iaik7XG4gICAgfVxuICB9XG59XG4iXX0=