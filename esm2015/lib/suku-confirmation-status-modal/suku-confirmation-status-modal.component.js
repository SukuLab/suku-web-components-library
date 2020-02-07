/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-confirmation-status-modal/suku-confirmation-status-modal.component.ts
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
                template: "<div class=\"text-center p-0\">\n  <div class=\"col text-center\">\n    <div class=\"row justify-content-center\">\n      <div class=\"modalproduct-boxContent\">\n        <div class=\"col pl-lg-4 pt-1 pb-2\">\n          <div class=\"row\">\n            <div class=\"col mt-2 mb-2\">\n              <div class=\"col mb-3\">\n                <img [src]=\"dialogData?.imgSrc\" id=\"{{dialogData?.imgId}}\" *ngIf=\"dialogData?.imgSrc\" />\n                <i class=\"{{dialogData?.icon}} {{dialogData?.iconCustomClass}}\" id=\"{{dialogData?.iconId}}\"\n                  *ngIf=\"dialogData?.icon\"></i>\n              </div>\n              <span id=\"{{ dialogData?.messageId }}\"\n                class=\"modalcolor {{ dialogData?.messageCustomClass }} pb-1 mt-3 mb-3\">\n                {{ dialogData?.message }}\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class=\"col-sm-10 modalFontStyle mt-4 mb-2 text-left {{ dialogData?.descriptionCustomClass }}\">\n        {{ dialogData?.description }}\n      </h2>\n\n      <h2 class=\"col-sm-10 modalNoteStyle mt-4 mb-2 text-left {{ dialogData?.descriptionOneCustomClass }}\">\n        {{ dialogData?.descriptionOne }}\n      </h2>\n\n      <mat-form-field class=\"col-sm-10\">\n        <input matInput placeholder=\"{{ dialogData?.controlOnePlaceholder }}\" [formControl]=\"controlOne\"\n          name=\"{{dialogData?.controlOne}}\" id=\"{{ dialogData?.controlOneId }}\">\n          <!-- <input matInput placeholder=\"Tracking Number (Optional)\"> -->\n      </mat-form-field>\n      <mat-form-field class=\"col-sm-10\">\n        <textarea matInput placeholder=\"{{ dialogData?.controlTwoPlaceholder }}\" [formControl]=\"controlTwo\"\n          name=\"{{dialogData?.controlTwo}}\" id=\"{{ dialogData?.controlTwoId }}\" #g (change)=\"checkChar(g.value)\" (keydown)=\"checkChar(g.value)\">\n          <mat-error *ngIf=\"controlTwo.hasError('required')\">\n            {{ dialogData?.controlTwoRquiredErrorMsg }}\n          </mat-error>\n        </textarea>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"col text-center p-3\">\n    <div class=\"row d-flex justify-content-around\">\n      <div class=\"col-lg-10 col-md-10\">\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\n            mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2\">\n            <button type=\"button\" (click)=\"close()\"\n              class=\"btn btn-secondary btn-default btn-lg col-lg-8 col-md-8 {{ dialogData?.cancelBtnCustomClass }}\">{{ dialogData?.cancelBtnText }}</button>\n          </div>\n          <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n            <button type=\"button\"\n              class=\"btn btn-info btn btn-info btn-lg col-lg-8 col-md-8 col-sm-12 col-xs-12 {{ dialogData?.submitBtnCustomClass }}\"\n              (click)=\"submit(); \" [ngClass]=\"{'disabled' : disableValue}\" [disabled]=\"disableValue\">{{ dialogData?.submitBtnTxt }}</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNvbmZpcm1hdGlvbi1zdGF0dXMtbW9kYWwvc3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWtCLEtBQUssRUFBZ0IsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPL0UsTUFBTSxPQUFPLG9DQUFvQzs7Ozs7O0lBd0MvQyxZQUFtQixlQUFtRSxFQUM1RSxRQUFxQixFQUNHLElBQVM7UUFGeEIsb0JBQWUsR0FBZixlQUFlLENBQW9EO1FBQzVFLGFBQVEsR0FBUixRQUFRLENBQWE7UUFDRyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBdENsQyxlQUFVLEdBQUc7WUFDcEIsUUFBUSxFQUFFLEVBQUU7WUFDWixPQUFPLEVBQUUsRUFBRTtZQUNYLE1BQU0sRUFBRSxFQUFFO1lBQ1YsUUFBUSxFQUFFLFdBQVc7WUFDckIsaUJBQWlCLEVBQUUsU0FBUztZQUM1QixTQUFTLEVBQUUsRUFBRTtZQUNiLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFlBQVksRUFBRSxFQUFFO1lBQ2hCLG9CQUFvQixFQUFFLEVBQUU7WUFDeEIsd0JBQXdCLEVBQUUsRUFBRTtZQUM1QiwyQkFBMkIsRUFBRSxFQUFFO1lBQy9CLGdCQUFnQixFQUFFLEVBQUU7WUFDcEIsbUJBQW1CLEVBQUUsRUFBRTtZQUN2QixXQUFXLEVBQUUsRUFBRTtZQUNmLFVB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LENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsdUNBQXVDLEVBQUUsT0FBTyxFQUFFO2dCQUNuRSxnQkFBZ0IsRUFBRSxLQUFLO2dCQUN2QixrQkFBa0IsRUFBRSxPQUFPO2dCQUMzQixRQUFRLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQztTQUNKO2FBQU07O2dCQUNELE1BQU0sR0FBRztnQkFDWCxRQUFRLEVBQUU7b0JBQ1IsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlO29CQUNoQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWU7aUJBQy9CO2FBQ0Y7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7OztZQW5IRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsK2dHQUE4RDs7YUFFL0Q7Ozs7WUFOUSxZQUFZO1lBQW1CLFdBQVc7NENBaUQ5QyxNQUFNLFNBQUMsZUFBZTs7O3lCQXRDeEIsS0FBSzsyQkFpQ04sS0FBSyxTQUFDLGVBQWU7Ozs7SUFuQ3JCLCtEQUFnQjs7SUFDaEIsK0RBQWdCOztJQUNoQiwwREE4QkU7O0lBQ0YsMERBQWlDOztJQUNqQywwREFBaUM7O0lBQ2xDLDREQUFxRDs7SUFDcEQsZ0VBQWlCOztJQUNqQixnRUFBaUI7O0lBQ0wsK0RBQTBFOzs7OztJQUNwRix3REFBNkI7O0lBQzdCLG9EQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBLCBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtY29uZmlybWF0aW9uLXN0YXR1cy1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtY29uZmlybWF0aW9uLXN0YXR1cy1tb2RhbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VDb25maXJtYXRpb25TdGF0dXNNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29udHJvbE9uZVZhbHVlO1xuICBjb250cm9sVHdvVmFsdWU7XG4gIEBJbnB1dCgpIGRpYWxvZ0RhdGEgPSB7XG4gICAgJ2ltZ1NyYyc6ICcnLFxuICAgICdpbWdJZCc6ICcnLFxuICAgICdpY29uJzogJycsXG4gICAgJ2ljb25JZCc6ICdzdWt1LWljb24nLFxuICAgICdpY29uQ3VzdG9tQ2xhc3MnOiAnc3VrdS14bCcsXG4gICAgJ21lc3NhZ2UnOiAnJyxcbiAgICAnZGVzY3JpcHRpb24nOiAnJyxcbiAgICAnbG9hZGVyJzogJ2Rpc2FibGUnLFxuICAgICdidXR0b25UZXh0JzogJycsXG4gICAgJ21lc3NhZ2VDdXN0b21DbGFzcyc6ICcnLFxuICAgICdkZXNjcmlwdGlvbkN1c3RvbUNsYXNzJzogJycsXG4gICAgJ2Rlc2NyaXB0aW9uT25lQ3VzdG9tQ2xhc3MnOiAnJyxcbiAgICAnZGVzY3JpcHRpb25PbmUnOiAnJyxcbiAgICAnYnV0dG9uQ3VzdG9tQ2xhc3MnOiAnJyxcbiAgICAnbWVzc2FnZUlkJzogJycsXG4gICAgJ2J1dHRvbklkJzogJycsXG4gICAgY2FuY2VsQnRuVGV4dDogJ0NhbmNlbCcsXG4gICAgc3VibWl0QnRuVHh0OiAnQ29uZmlybScsXG4gICAgY2FuY2VsQnRuQ3VzdG9tQ2xhc3M6ICcnLFxuICAgIHN1Ym1pdEJ0bkN1c3RvbUNsYXNzOiAnJyxcbiAgICBjb250cm9sT25lOiAnY29udHJvbE9uZScsXG4gICAgY29udHJvbFR3bzogJ2NvbnRyb2xUd28nLFxuICAgIGNvbnRyb2xUd29SZXF1aXJlZDogJycsXG4gICAgY29udHJvbE9uZUlkOiAnY29udGVudE9uZScsXG4gICAgY29udHJvbFR3b0lkOiAnQ29udGVudFR3bycsXG4gICAgY29udHJvbE9uZVBsYWNlaG9sZGVyOiAnVHJhY2tpbmcgTnVtYmVyIChPcHRpb25hbCknLFxuICAgIGNvbnRyb2xUd29QbGFjZWhvbGRlcjogJ0NvbW1lbnRzKicsXG4gICAgY29udHJvbFR3b1JxdWlyZWRFcnJvck1zZyA6ICdDYW5ub3QgYmUgYmxhbmsuJ1xuXG4gIH07XG4gIGNvbnRyb2xPbmUgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICBjb250cm9sVHdvID0gbmV3IEZvcm1Db250cm9sKCcnKTtcblx0QElucHV0KCdkaXNhYmxlLXZhbHVlJykgZGlzYWJsZVZhbHVlOiBCb29sZWFuID0gdHJ1ZTtcbiAgX3N1YnNjcmlwdGlvblR3bztcbiAgX3N1YnNjcmlwdGlvbk9uZTtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ0N1c3RvbVJlZjogTWF0RGlhbG9nUmVmPFN1a3VDb25maXJtYXRpb25TdGF0dXNNb2RhbENvbXBvbmVudD4sXG4gICAgcHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXIsXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmRhdGEubW9kYWxEYXRhKSB7XG4gICAgICB0aGlzLmRhdGEubW9kYWxEYXRhLnN1YnNjcmliZSgodmFsKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhLS0nLCB2YWwpO1xuICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModmFsKSkge1xuICAgICAgICAgICAgaWYgKHZhbFtrZXldKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGlhbG9nRGF0YVtrZXldID0gdmFsW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaWFsb2dEYXRhLmNvbnRyb2xUd29SZXF1aXJlZCkge1xuICAgICAgdGhpcy5jb250cm9sVHdvLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICB0aGlzLmNvbnRyb2xUd28udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cbiAgICB0aGlzLl9zdWJzY3JpcHRpb25PbmUgPSB0aGlzLmNvbnRyb2xPbmUudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb250cm9sT25lVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoaXMudXNlcm5hbWVDb250cm9sLlxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uVHdvID0gdGhpcy5jb250cm9sVHdvLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29udHJvbFR3b1ZhbHVlID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGlzLnVzZXJuYW1lQ29udHJvbC5cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5kaWFsb2dDdXN0b21SZWYuY2xvc2UodHJ1ZSk7XG4gIH1cbiAgY2hlY2tDaGFyKGV2ZW50KXtcbiAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIHZhbHVlXCIsIHRoaXMuY29udHJvbFR3b1ZhbHVlKTtcbiAgICAgIGlmKGV2ZW50Lmxlbmd0aCA9PSAwKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJubyBjb250ZW50IHByZXNlbnQgXCIsZXZlbnQubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlVmFsdWUgPSB0cnVlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29udGVudCBwcmVzZW50IFwiLGV2ZW50Lmxlbmd0aCk7XG4gICAgICAgIHRoaXMuZGlzYWJsZVZhbHVlID0gZmFsc2U7XG4gICAgICB9XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGNhbGxlZCA6XCIsdGhpcy5jb250cm9sVHdvLmludmFsaWQpO1xuICAgIGlmICh0aGlzLmNvbnRyb2xUd28uaW52YWxpZCkge1xuICAgICAgdGhpcy5zbmFja0Jhci5vcGVuKCdQbGVhc2UgZmlsbCBhbGwgdGhlIG1hbmRhdG9yeSBmaWVsZHMuJywgJ2Nsb3NlJywge1xuICAgICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICBkdXJhdGlvbjogNTAwMFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByZXFPYmogPSB7XG4gICAgICAgIENvbW1lbnRzOiB7XG4gICAgICAgICAgdHJhY2tpbmdJZDogdGhpcy5jb250cm9sT25lVmFsdWUsXG4gICAgICAgICAgY29tbWVudHM6IHRoaXMuY29udHJvbFR3b1ZhbHVlLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhcInRoaSBzaXMgc2xzIDpcIixyZXFPYmopO1xuICAgICAgdGhpcy5kaWFsb2dDdXN0b21SZWYuY2xvc2UocmVxT2JqKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==