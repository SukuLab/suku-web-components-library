/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
export class SukuConfirmationStatusModalComponent {
    /**
     * @param {?} dialogCustomRef
     * @param {?} snackBar
     * @param {?} data
     */
    constructor(dialogCustomRef, snackBar, data) {
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
    ngOnInit() {
        if (this.data.modalData) {
            this.data.modalData.subscribe((/**
             * @param {?} val
             * @return {?}
             */
            (val) => {
                console.log('data--', val);
                if (val) {
                    for (const key of Object.keys(val)) {
                        if (val[key]) {
                            this.dialogData[key] = val[key];
                        }
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
    }
    /**
     * @return {?}
     */
    close() {
        this.dialogCustomRef.close(true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    checkChar(event) {
        // console.log("this is the value", this.controlTwoValue);
        if (event.length == 0) {
            console.log("no content present ", event.length);
            this.disableValue = true;
        }
        else {
            console.log("content present ", event.length);
            this.disableValue = false;
        }
    }
    /**
     * @return {?}
     */
    submit() {
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
            let reqObj = {
                Comments: {
                    trackingId: this.controlOneValue,
                    comments: this.controlTwoValue,
                }
            };
            console.log("thi sis sls :", reqObj);
            this.dialogCustomRef.close(reqObj);
        }
    }
}
SukuConfirmationStatusModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-confirmation-status-modal',
                template: "<div class=\"text-center p-0\">\r\n  <div class=\"col text-center\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"modalproduct-boxContent\">\r\n        <div class=\"col pl-lg-4 pt-1 pb-2\">\r\n          <div class=\"row\">\r\n            <div class=\"col mt-2 mb-2\">\r\n              <div class=\"col mb-3\">\r\n                <img [src]=\"dialogData?.imgSrc\" id=\"{{dialogData?.imgId}}\" *ngIf=\"dialogData?.imgSrc\" />\r\n                <i class=\"{{dialogData?.icon}} {{dialogData?.iconCustomClass}}\" id=\"{{dialogData?.iconId}}\"\r\n                  *ngIf=\"dialogData?.icon\"></i>\r\n              </div>\r\n              <span id=\"{{ dialogData?.messageId }}\"\r\n                class=\"modalcolor {{ dialogData?.messageCustomClass }} pb-1 mt-3 mb-3\">\r\n                {{ dialogData?.message }}\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <h2 class=\"col-sm-10 modalFontStyle mt-4 mb-2 text-left {{ dialogData?.descriptionCustomClass }}\">\r\n        {{ dialogData?.description }}\r\n      </h2>\r\n\r\n      <h2 class=\"col-sm-10 modalNoteStyle mt-4 mb-2 text-left {{ dialogData?.descriptionOneCustomClass }}\">\r\n        {{ dialogData?.descriptionOne }}\r\n      </h2>\r\n\r\n      <mat-form-field class=\"col-sm-10\">\r\n        <input matInput placeholder=\"{{ dialogData?.controlOnePlaceholder }}\" [formControl]=\"controlOne\"\r\n          name=\"{{dialogData?.controlOne}}\" id=\"{{ dialogData?.controlOneId }}\">\r\n          <!-- <input matInput placeholder=\"Tracking Number (Optional)\"> -->\r\n      </mat-form-field>\r\n      <mat-form-field class=\"col-sm-10\">\r\n        <textarea matInput placeholder=\"{{ dialogData?.controlTwoPlaceholder }}\" [formControl]=\"controlTwo\"\r\n          name=\"{{dialogData?.controlTwo}}\" id=\"{{ dialogData?.controlTwoId }}\" #g (change)=\"checkChar(g.value)\" (keydown)=\"checkChar(g.value)\">\r\n          <mat-error *ngIf=\"controlTwo.hasError('required')\">\r\n            {{ dialogData?.controlTwoRquiredErrorMsg }}\r\n          </mat-error>\r\n        </textarea>\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n  <div class=\"col text-center p-3\">\r\n    <div class=\"row d-flex justify-content-around\">\r\n      <div class=\"col-lg-10 col-md-10\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\r\n            mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2\">\r\n            <button type=\"button\" (click)=\"close()\"\r\n              class=\"btn btn-secondary btn-default btn-lg col-lg-8 col-md-8 {{ dialogData?.cancelBtnCustomClass }}\">{{ dialogData?.cancelBtnText }}</button>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n            <button type=\"button\"\r\n              class=\"btn btn-info btn btn-info btn-lg col-lg-8 col-md-8 col-sm-12 col-xs-12 {{ dialogData?.submitBtnCustomClass }}\"\r\n              (click)=\"submit(); \" [ngClass]=\"{'disabled' : disableValue}\" [disabled]=\"disableValue\">{{ dialogData?.submitBtnTxt }}</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border-color:var(--suku-primary-border-color)!important;background-color:#fff;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.modalcolor{font-family:Poppins,sans-serif!important;color:#fff!important;font-size:20px;font-weight:300}.modalFontStyle{font-family:Poppins,sans-serif!important;font-size:17px;letter-spacing:.4px;font-weight:700;color:#1c1c1c!important}.width100{width:100%}.errorMsg{font-family:\"Encode Sans\",sans-serif!important;color:#e53935;font-size:75%}.btn-info{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:a7bf2e;color:#000}.modalproduct-boxContent{width:100%;float:left;background-image:linear-gradient(to bottom,rgba(101,102,243,.06),rgba(101,102,243,.06)),radial-gradient(circle at 50% 0,#3a3a3a,#000);box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 15px;margin:0}.bgWhite{background-color:#fff!important}::ng-deep mat-dialog-container{padding:0!important;overflow:hidden!important}:host ::ng-deep mat-dialog-content{max-height:91%!important;overflow-y:none!important;margin:0!important;height:100%!important}:host ::ng-deep mat-dialog-actions{margin:5px 10px!important}.modalNoteStyle{font-family:Poppins,sans-serif!important;font-size:15px;letter-spacing:.4px;font-weight:500;color:#1c1c1c!important}.btn-info.disabled{border:2px solid;border-color:var(--suku-primary-color);background-color:var(--suku-primary-color);color:grey}.btn-info.disabled:hover{border:2px solid;border-color:var(--suku-primary-color);background-color:#fff;color:var(--suku-text-link);cursor:not-allowed}"]
            }] }
];
/** @nocollapse */
SukuConfirmationStatusModalComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: MatSnackBar },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
SukuConfirmationStatusModalComponent.propDecorators = {
    dialogData: [{ type: Input }],
    disableValue: [{ type: Input, args: ['disable-value',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNvbmZpcm1hdGlvbi1zdGF0dXMtbW9kYWwvc3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBa0IsS0FBSyxFQUFnQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU8vRSxNQUFNLE9BQU8sb0NBQW9DOzs7Ozs7SUF3Qy9DLFlBQW1CLGVBQW1FLEVBQzVFLFFBQXFCLEVBQ0csSUFBUztRQUZ4QixvQkFBZSxHQUFmLGVBQWUsQ0FBb0Q7UUFDNUUsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUNHLFNBQUksR0FBSixJQUFJLENBQUs7UUF0Q2xDLGVBQVUsR0FBRztZQUNwQixRQUFRLEVBQUUsRUFBRTtZQUNaLE9BQU8sRUFBRSxFQUFFO1lBQ1gsTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRLEVBQUUsV0FBVztZQUNyQixpQkFBaUIsRUFBRSxTQUFTO1lBQzVCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsYUFBYSxFQUFFLEVBQUU7WUFDakIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsb0JBQW9CLEVBQUUsRUFBRTtZQUN4Qix3QkFBd0IsRUFBRSxFQUFFO1lBQzVCLDJCQUEyQixFQUFFLEVBQUU7WUFDL0IsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixtQkFBbUIsRUFBRSxFQUFFO1lBQ3ZCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsVUFB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Q0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsRUFBRSxPQUFPLEVBQUU7Z0JBQ25FLGdCQUFnQixFQUFFLEtBQUs7Z0JBQ3ZCLGtCQUFrQixFQUFFLE9BQU87Z0JBQzNCLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1NBQ0o7YUFBTTs7Z0JBQ0QsTUFBTSxHQUFHO2dCQUNYLFFBQVEsRUFBRTtvQkFDUixVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWU7b0JBQ2hDLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZTtpQkFDL0I7YUFDRjtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7O1lBbkhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyx5b0dBQThEOzthQUUvRDs7OztZQU5RLFlBQVk7WUFBbUIsV0FBVzs0Q0FpRDlDLE1BQU0sU0FBQyxlQUFlOzs7eUJBdEN4QixLQUFLOzJCQWlDTixLQUFLLFNBQUMsZUFBZTs7OztJQW5DckIsK0RBQWdCOztJQUNoQiwrREFBZ0I7O0lBQ2hCLDBEQThCRTs7SUFDRiwwREFBaUM7O0lBQ2pDLDBEQUFpQzs7SUFDbEMsNERBQXFEOztJQUNwRCxnRUFBaUI7O0lBQ2pCLGdFQUFpQjs7SUFDTCwrREFBMEU7Ozs7O0lBQ3BGLHdEQUE2Qjs7SUFDN0Isb0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBLCBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNvbmZpcm1hdGlvbi1zdGF0dXMtbW9kYWwuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUNvbmZpcm1hdGlvblN0YXR1c01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29udHJvbE9uZVZhbHVlO1xyXG4gIGNvbnRyb2xUd29WYWx1ZTtcclxuICBASW5wdXQoKSBkaWFsb2dEYXRhID0ge1xyXG4gICAgJ2ltZ1NyYyc6ICcnLFxyXG4gICAgJ2ltZ0lkJzogJycsXHJcbiAgICAnaWNvbic6ICcnLFxyXG4gICAgJ2ljb25JZCc6ICdzdWt1LWljb24nLFxyXG4gICAgJ2ljb25DdXN0b21DbGFzcyc6ICdzdWt1LXhsJyxcclxuICAgICdtZXNzYWdlJzogJycsXHJcbiAgICAnZGVzY3JpcHRpb24nOiAnJyxcclxuICAgICdsb2FkZXInOiAnZGlzYWJsZScsXHJcbiAgICAnYnV0dG9uVGV4dCc6ICcnLFxyXG4gICAgJ21lc3NhZ2VDdXN0b21DbGFzcyc6ICcnLFxyXG4gICAgJ2Rlc2NyaXB0aW9uQ3VzdG9tQ2xhc3MnOiAnJyxcclxuICAgICdkZXNjcmlwdGlvbk9uZUN1c3RvbUNsYXNzJzogJycsXHJcbiAgICAnZGVzY3JpcHRpb25PbmUnOiAnJyxcclxuICAgICdidXR0b25DdXN0b21DbGFzcyc6ICcnLFxyXG4gICAgJ21lc3NhZ2VJZCc6ICcnLFxyXG4gICAgJ2J1dHRvbklkJzogJycsXHJcbiAgICBjYW5jZWxCdG5UZXh0OiAnQ2FuY2VsJyxcclxuICAgIHN1Ym1pdEJ0blR4dDogJ0NvbmZpcm0nLFxyXG4gICAgY2FuY2VsQnRuQ3VzdG9tQ2xhc3M6ICcnLFxyXG4gICAgc3VibWl0QnRuQ3VzdG9tQ2xhc3M6ICcnLFxyXG4gICAgY29udHJvbE9uZTogJ2NvbnRyb2xPbmUnLFxyXG4gICAgY29udHJvbFR3bzogJ2NvbnRyb2xUd28nLFxyXG4gICAgY29udHJvbFR3b1JlcXVpcmVkOiAnJyxcclxuICAgIGNvbnRyb2xPbmVJZDogJ2NvbnRlbnRPbmUnLFxyXG4gICAgY29udHJvbFR3b0lkOiAnQ29udGVudFR3bycsXHJcbiAgICBjb250cm9sT25lUGxhY2Vob2xkZXI6ICdUcmFja2luZyBOdW1iZXIgKE9wdGlvbmFsKScsXHJcbiAgICBjb250cm9sVHdvUGxhY2Vob2xkZXI6ICdDb21tZW50cyonLFxyXG4gICAgY29udHJvbFR3b1JxdWlyZWRFcnJvck1zZyA6ICdDYW5ub3QgYmUgYmxhbmsuJ1xyXG5cclxuICB9O1xyXG4gIGNvbnRyb2xPbmUgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIGNvbnRyb2xUd28gPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG5cdEBJbnB1dCgnZGlzYWJsZS12YWx1ZScpIGRpc2FibGVWYWx1ZTogQm9vbGVhbiA9IHRydWU7XHJcbiAgX3N1YnNjcmlwdGlvblR3bztcclxuICBfc3Vic2NyaXB0aW9uT25lO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dDdXN0b21SZWY6IE1hdERpYWxvZ1JlZjxTdWt1Q29uZmlybWF0aW9uU3RhdHVzTW9kYWxDb21wb25lbnQ+LFxyXG4gICAgcHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIsXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuZGF0YS5tb2RhbERhdGEpIHtcclxuICAgICAgdGhpcy5kYXRhLm1vZGFsRGF0YS5zdWJzY3JpYmUoKHZhbCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhLS0nLCB2YWwpO1xyXG4gICAgICAgIGlmICh2YWwpIHtcclxuICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHZhbCkpIHtcclxuICAgICAgICAgICAgaWYgKHZhbFtrZXldKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5kaWFsb2dEYXRhW2tleV0gPSB2YWxba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGlhbG9nRGF0YS5jb250cm9sVHdvUmVxdWlyZWQpIHtcclxuICAgICAgdGhpcy5jb250cm9sVHdvLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICAgIHRoaXMuY29udHJvbFR3by51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25PbmUgPSB0aGlzLmNvbnRyb2xPbmUudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbE9uZVZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gdGhpcy51c2VybmFtZUNvbnRyb2wuXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25Ud28gPSB0aGlzLmNvbnRyb2xUd28udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbFR3b1ZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gdGhpcy51c2VybmFtZUNvbnRyb2wuXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuZGlhbG9nQ3VzdG9tUmVmLmNsb3NlKHRydWUpO1xyXG4gIH1cclxuICBjaGVja0NoYXIoZXZlbnQpe1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSB2YWx1ZVwiLCB0aGlzLmNvbnRyb2xUd29WYWx1ZSk7XHJcbiAgICAgIGlmKGV2ZW50Lmxlbmd0aCA9PSAwKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGNvbnRlbnQgcHJlc2VudCBcIixldmVudC5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZVZhbHVlID0gdHJ1ZTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb250ZW50IHByZXNlbnQgXCIsZXZlbnQubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLmRpc2FibGVWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgY2FsbGVkIDpcIix0aGlzLmNvbnRyb2xUd28uaW52YWxpZCk7XHJcbiAgICBpZiAodGhpcy5jb250cm9sVHdvLmludmFsaWQpIHtcclxuICAgICAgdGhpcy5zbmFja0Jhci5vcGVuKCdQbGVhc2UgZmlsbCBhbGwgdGhlIG1hbmRhdG9yeSBmaWVsZHMuJywgJ2Nsb3NlJywge1xyXG4gICAgICAgIHZlcnRpY2FsUG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgIGhvcml6b250YWxQb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICBkdXJhdGlvbjogNTAwMFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCByZXFPYmogPSB7XHJcbiAgICAgICAgQ29tbWVudHM6IHtcclxuICAgICAgICAgIHRyYWNraW5nSWQ6IHRoaXMuY29udHJvbE9uZVZhbHVlLFxyXG4gICAgICAgICAgY29tbWVudHM6IHRoaXMuY29udHJvbFR3b1ZhbHVlLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhcInRoaSBzaXMgc2xzIDpcIixyZXFPYmopO1xyXG4gICAgICB0aGlzLmRpYWxvZ0N1c3RvbVJlZi5jbG9zZShyZXFPYmopO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=