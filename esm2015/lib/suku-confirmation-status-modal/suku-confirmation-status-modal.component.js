/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
export class SukuConfirmationStatusModalComponent {
    /**
     * @param {?} dialogCustomRef
     * @param {?} data
     */
    constructor(dialogCustomRef, data) {
        this.dialogCustomRef = dialogCustomRef;
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
            submitBtnCustomClass: ''
        };
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
    }
    /**
     * @return {?}
     */
    close() {
        this.dialogCustomRef.close(true);
    }
    /**
     * @return {?}
     */
    submit() {
    }
}
SukuConfirmationStatusModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-confirmation-status-modal',
                template: "<div class=\"text-center p-0\">\n  <div class=\"col text-center\">\n    <div class=\"row justify-content-center\">\n      <div class=\"modalproduct-boxContent\">\n        <div class=\"col pl-lg-4 pt-1 pb-2\">\n          <div class=\"row\">\n            <div class=\"col mt-2 mb-2\">\n              <div class=\"col mb-3\">\n                <img [src]=\"dialogData?.imgSrc\" id=\"{{dialogData?.imgId}}\" *ngIf=\"dialogData?.imgSrc\" />\n                <i class=\"{{dialogData?.icon}} {{dialogData?.iconCustomClass}}\" id=\"{{dialogData?.iconId}}\"\n                  *ngIf=\"dialogData?.icon\"></i>\n              </div>\n              <span id=\"{{ dialogData?.messageId }}\"\n                class=\"modalcolor {{ dialogData?.messageCustomClass }} pb-1 mt-3 mb-3\">\n                {{ dialogData?.message }}\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h2 class=\"col-sm-10 modalFontStyle mt-4 mb-2 text-left {{ dialogData?.descriptionCustomClass }}\">\n        {{ dialogData?.description }}\n      </h2>\n\n      <h2 class=\"col-sm-10 modalNoteStyle mt-4 mb-2 text-left {{ dialogData?.descriptionOneCustomClass }}\">\n        {{ dialogData?.descriptionOne }}\n      </h2>\n\n      <mat-form-field class=\"col-sm-10\">\n        <!-- <text matInput placeholder=\"{{ dialogData?.controlOnePlaceholder }}\"  [formControl]=\"controlOne\" name=\"{{dialogData?.controlOne}}\" id=\"{{ dialogData?.controlOneId }}\">\n              <mat-error *ngIf=\"controlOne.hasError('required')\">\n                  {{ dialogData?.controlOneRquiredErrorMsg }}\n                </mat-error> -->\n        <input matInput placeholder=\"Tracking Number (Optional)\">\n      </mat-form-field>\n      <mat-form-field class=\"col-sm-10\">\n        <!-- <text matInput placeholder=\"{{ dialogData?.controlOnePlaceholder }}\"  [formControl]=\"controlOne\" name=\"{{dialogData?.controlOne}}\" id=\"{{ dialogData?.controlOneId }}\">\n              <mat-error *ngIf=\"controlOne.hasError('required')\">\n                  {{ dialogData?.controlOneRquiredErrorMsg }}\n                </mat-error> -->\n        <textarea matInput placeholder=\"comments*\"></textarea>\n      </mat-form-field>\n      <!-- <mat-form-field class=\"col-12\">\n              <textarea matInput placeholder=\"{{ dialogData?.controlOnePlaceholder }}\"  [formControl]=\"controlOne\" name=\"{{dialogData?.controlOne}}\" id=\"{{ dialogData?.controlOneId }}\">\n              <mat-error *ngIf=\"controlOne.hasError('required')\">\n                  {{ dialogData?.controlOneRquiredErrorMsg }}\n                </mat-error>\n          </mat-form-field> -->\n    </div>\n  </div>\n  <div class=\"col text-center p-3\">\n    <!-- <div class=\"row mb-3 mt-3\">\n        <div class=\"col-lg-4 col-md-6 offset-md-3 offset-sm-4\t col-sm-4 col-xs-10 offset-lg-4 pl-lg-0 pr-lg-0\">\n          <button tabindex=\"1\" (click)=\"close()\" [disabled]=\"(dialogData?.loader == 'enable')\"\n            id=\"{{ dialogData?.buttonId }}\"\n            class=\"btn btn-info center-block width100 {{ dialogData?.buttonCustomClass }}\">\n            {{ dialogData?.buttonText }}\n          </button>\n        </div>\n      </div> -->\n    <div class=\"row d-flex justify-content-around\">\n      <div class=\"col-lg-10 col-md-10\">\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\n            mb-lg-0 mb-md-0 mb-sm-2 mb-xs-2\">\n            <button type=\"button\" (click)=\"close()\"\n              class=\"btn btn-secondary btn-default btn-lg col-lg-8 col-md-8 {{ dialogData?.cancelBtnCustomClass }}\">{{ dialogData?.cancelBtnText }}</button>\n          </div>\n          <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n            <button type=\"button\"\n              class=\"btn btn-info btn btn-info btn-lg col-lg-8 col-md-8 col-sm-12 col-xs-12 {{ dialogData?.submitBtnCustomClass }}\"\n              (click)=\"submit();\">{{ dialogData?.submitBtnTxt }}</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border-color:var(--suku-primary-border-color)!important;background-color:#fff;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.modalcolor{font-family:Poppins,sans-serif!important;color:#fff!important;font-size:20px;font-weight:300}.modalFontStyle{font-family:Poppins,sans-serif!important;font-size:17px;letter-spacing:.4px;font-weight:700;color:#1c1c1c!important}.width100{width:100%}.errorMsg{font-family:\"Encode Sans\",sans-serif!important;color:#e53935;font-size:75%}.btn-info{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:a7bf2e;color:#000}.modalproduct-boxContent{width:100%;float:left;background-image:linear-gradient(to bottom,rgba(101,102,243,.06),rgba(101,102,243,.06)),radial-gradient(circle at 50% 0,#3a3a3a,#000);box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 15px;margin:0}.bgWhite{background-color:#fff!important}::ng-deep mat-dialog-container{padding:0!important;overflow:hidden!important}:host ::ng-deep mat-dialog-content{max-height:91%!important;overflow-y:none!important;margin:0!important;height:100%!important}:host ::ng-deep mat-dialog-actions{margin:5px 10px!important}.modalNoteStyle{font-family:Poppins,sans-serif!important;font-size:15px;letter-spacing:.4px;font-weight:500;color:#1c1c1c!important}"]
            }] }
];
/** @nocollapse */
SukuConfirmationStatusModalComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
SukuConfirmationStatusModalComponent.propDecorators = {
    dialogData: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuConfirmationStatusModalComponent.prototype.dialogData;
    /** @type {?} */
    SukuConfirmationStatusModalComponent.prototype.dialogCustomRef;
    /** @type {?} */
    SukuConfirmationStatusModalComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LWNvbmZpcm1hdGlvbi1zdGF0dXMtbW9kYWwvc3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPbEUsTUFBTSxPQUFPLG9DQUFvQzs7Ozs7SUF3Qi9DLFlBQW1CLGVBQW1FLEVBQ3BELElBQVM7UUFEeEIsb0JBQWUsR0FBZixlQUFlLENBQW9EO1FBQ3BELFNBQUksR0FBSixJQUFJLENBQUs7UUF2QmxDLGVBQVUsR0FBRztZQUNwQixRQUFRLEVBQUUsRUFBRTtZQUNaLE9BQU8sRUFBRSxFQUFFO1lBQ1gsTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRLEVBQUUsV0FBVztZQUNyQixpQkFBaUIsRUFBRSxTQUFTO1lBQzVCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsYUFBYSxFQUFFLEVBQUU7WUFDakIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsb0JBQW9CLEVBQUUsRUFBRTtZQUN4Qix3QkFBd0IsRUFBRSxFQUFFO1lBQzVCLDJCQUEyQixFQUFFLEVBQUU7WUFDL0IsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixtQkFBbUIsRUFBRSxFQUFFO1lBQ3ZCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsVUFBVSxFQUFFLEVBQUU7WUFDZCxhQUFhLEVBQUUsUUFBUTtZQUN2QixZQUFZLEVBQUUsU0FBUztZQUN2QixvQkFBb0IsRUFBRSxFQUFFO1lBQ3hCLG9CQUFvQixFQUFFLEVBQUU7U0FDekIsQ0FBQztJQUU2QyxDQUFDOzs7O0lBRWhELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNsQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTs0QkFDWixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDakM7cUJBQ0Y7aUJBQ0Y7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBQ0QsTUFBTTtJQUVOLENBQUM7OztZQXBERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMscy9IQUE4RDs7YUFFL0Q7Ozs7WUFOUSxZQUFZOzRDQWdDaEIsTUFBTSxTQUFDLGVBQWU7Ozt5QkF2QnhCLEtBQUs7Ozs7SUFBTiwwREFxQkU7O0lBQ1UsK0RBQTBFOztJQUNwRixvREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1jb25maXJtYXRpb24tc3RhdHVzLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtY29uZmlybWF0aW9uLXN0YXR1cy1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtY29uZmlybWF0aW9uLXN0YXR1cy1tb2RhbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VDb25maXJtYXRpb25TdGF0dXNNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZGlhbG9nRGF0YSA9IHtcbiAgICAnaW1nU3JjJzogJycsXG4gICAgJ2ltZ0lkJzogJycsXG4gICAgJ2ljb24nOiAnJyxcbiAgICAnaWNvbklkJzogJ3N1a3UtaWNvbicsXG4gICAgJ2ljb25DdXN0b21DbGFzcyc6ICdzdWt1LXhsJyxcbiAgICAnbWVzc2FnZSc6ICcnLFxuICAgICdkZXNjcmlwdGlvbic6ICcnLFxuICAgICdsb2FkZXInOiAnZGlzYWJsZScsXG4gICAgJ2J1dHRvblRleHQnOiAnJyxcbiAgICAnbWVzc2FnZUN1c3RvbUNsYXNzJzogJycsXG4gICAgJ2Rlc2NyaXB0aW9uQ3VzdG9tQ2xhc3MnOiAnJyxcbiAgICAnZGVzY3JpcHRpb25PbmVDdXN0b21DbGFzcyc6ICcnLFxuICAgICdkZXNjcmlwdGlvbk9uZSc6ICcnLFxuICAgICdidXR0b25DdXN0b21DbGFzcyc6ICcnLFxuICAgICdtZXNzYWdlSWQnOiAnJyxcbiAgICAnYnV0dG9uSWQnOiAnJyxcbiAgICBjYW5jZWxCdG5UZXh0OiAnQ2FuY2VsJyxcbiAgICBzdWJtaXRCdG5UeHQ6ICdDb25maXJtJyxcbiAgICBjYW5jZWxCdG5DdXN0b21DbGFzczogJycsXG4gICAgc3VibWl0QnRuQ3VzdG9tQ2xhc3M6ICcnXG4gIH07XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dDdXN0b21SZWY6IE1hdERpYWxvZ1JlZjxTdWt1Q29uZmlybWF0aW9uU3RhdHVzTW9kYWxDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5kYXRhLm1vZGFsRGF0YSkge1xuICAgICAgdGhpcy5kYXRhLm1vZGFsRGF0YS5zdWJzY3JpYmUoKHZhbCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZGF0YS0tJywgdmFsKTtcbiAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHZhbCkpIHtcbiAgICAgICAgICAgIGlmICh2YWxba2V5XSkge1xuICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0RhdGFba2V5XSA9IHZhbFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5kaWFsb2dDdXN0b21SZWYuY2xvc2UodHJ1ZSk7XG4gIH1cbiAgc3VibWl0KCl7XG5cbiAgfVxufVxuIl19