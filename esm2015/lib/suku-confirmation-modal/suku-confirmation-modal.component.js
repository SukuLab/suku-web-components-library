/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-confirmation-modal/suku-confirmation-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
export class SukuConfirmationModalComponent {
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
            'buttonCustomClass': '',
            'messageId': '',
            'buttonId': '',
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
}
SukuConfirmationModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-confirmation-modal',
                template: "  <div class=\"text-center p-0\">\n    <div class=\"col text-center\">\n      <div class=\"row justify-content-center\">\n        <div class=\"modalproduct-boxContent\">\n          <div class=\"col pl-lg-4 pt-1 pb-2\">\n            <div class=\"row\">\n              <div class=\"col mt-2 mb-2\">\n                <div class=\"col mb-3\">\n                  <img [src]=\"dialogData?.imgSrc\" id=\"{{dialogData?.imgId}}\" *ngIf=\"dialogData?.imgSrc\" />\n                  <i class=\"{{dialogData?.icon}} {{dialogData?.iconCustomClass}}\" id=\"{{dialogData?.iconId}}\"\n                    *ngIf=\"dialogData?.icon\"></i>\n                </div>\n                <span id=\"{{ dialogData?.messageId }}\"\n                  class=\"modalcolor {{ dialogData?.messageCustomClass }} pb-1 mt-3 mb-3\">\n                  {{ dialogData?.message | translate }}\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <h2 class=\"col-sm-10 modalFontStyle mt-4 mb-2 text-center {{ dialogData?.descriptionCustomClass }}\">\n          {{ dialogData?.description | translate }}\n        </h2>\n        <div class=\"col-sm-12 pt-2 d-flex justify-content-center\" *ngIf=\"(dialogData?.loader == 'enable')\">\n          <mat-spinner diameter=\"45\"></mat-spinner>\n        </div>\n      </div>\n    </div>\n    <div class=\"col text-center p-3\">\n      <div class=\"row mb-3 mt-3\">\n        <div class=\"col-lg-4 col-md-6 offset-md-3 offset-sm-4\t col-sm-4 col-xs-10 offset-lg-4 pl-lg-0 pr-lg-0\">\n          <button tabindex=\"1\" (click)=\"close()\" [disabled]=\"(dialogData?.loader == 'enable')\"\n            id=\"{{ dialogData?.buttonId }}\"\n            class=\"btn btn-info center-block width100 {{ dialogData?.buttonCustomClass }}\">\n            {{ dialogData?.buttonText | translate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border-color:var(--suku-primary-border-color)!important;background-color:#fff;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.modalcolor{font-family:Poppins,sans-serif!important;color:#fff!important;font-size:20px;font-weight:300}.modalFontStyle{font-family:Poppins,sans-serif!important;font-size:17px;letter-spacing:.4px;font-weight:700;color:#1c1c1c!important}.width100{width:100%}.errorMsg{font-family:\"Encode Sans\",sans-serif!important;color:#e53935;font-size:75%}.btn-info{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:a7bf2e;color:#000}.modalproduct-boxContent{width:100%;float:left;background-image:linear-gradient(to bottom,rgba(101,102,243,.06),rgba(101,102,243,.06)),radial-gradient(circle at 50% 0,#3a3a3a,#000);box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 15px;margin:0}.bgWhite{background-color:#fff!important}::ng-deep mat-dialog-container{padding:0!important;overflow:hidden!important}:host ::ng-deep mat-dialog-content{max-height:91%!important;overflow-y:none!important;margin:0!important;height:100%!important}:host ::ng-deep mat-dialog-actions{margin:5px 10px!important}"]
            }] }
];
/** @nocollapse */
SukuConfirmationModalComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
SukuConfirmationModalComponent.propDecorators = {
    dialogData: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuConfirmationModalComponent.prototype.dialogData;
    /** @type {?} */
    SukuConfirmationModalComponent.prototype.dialogCustomRef;
    /** @type {?} */
    SukuConfirmationModalComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jb25maXJtYXRpb24tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY29uZmlybWF0aW9uLW1vZGFsL3N1a3UtY29uZmlybWF0aW9uLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBUWxFLE1BQU0sT0FBTyw4QkFBOEI7Ozs7O0lBa0J6QyxZQUFtQixlQUE2RCxFQUM5QyxJQUFTO1FBRHhCLG9CQUFlLEdBQWYsZUFBZSxDQUE4QztRQUM5QyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBakJsQyxlQUFVLEdBQUc7WUFDcEIsUUFBUSxFQUFFLEVBQUU7WUFDWixPQUFPLEVBQUUsRUFBRTtZQUNYLE1BQU0sRUFBRSxFQUFFO1lBQ1YsUUFBUSxFQUFFLFdBQVc7WUFDckIsaUJBQWlCLEVBQUUsU0FBUztZQUM1QixTQUFTLEVBQUUsRUFBRTtZQUNiLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFlBQVksRUFBRSxFQUFFO1lBQ2hCLG9CQUFvQixFQUFFLEVBQUU7WUFDeEIsd0JBQXdCLEVBQUUsRUFBRTtZQUM1QixtQkFBbUIsRUFBRSxFQUFFO1lBQ3ZCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsVUFBVSxFQUFFLEVBQUU7U0FDZixDQUFDO0lBRTZDLENBQUM7Ozs7SUFFaEQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUzs7OztZQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLEdBQUcsRUFBRTtvQkFDUCxLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ2xDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFOzRCQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUNqQztxQkFDRjtpQkFDRjtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7OztZQTVDRixTQUFTLFNBQUM7Z0JBRVQsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsZzREQUF1RDs7YUFFeEQ7Ozs7WUFQUSxZQUFZOzRDQTJCaEIsTUFBTSxTQUFDLGVBQWU7Ozt5QkFqQnhCLEtBQUs7Ozs7SUFBTixvREFlRTs7SUFDVSx5REFBb0U7O0lBQzlFLDhDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcblxuICBzZWxlY3RvcjogJ3N1a3UtY29uZmlybWF0aW9uLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtY29uZmlybWF0aW9uLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1jb25maXJtYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Q29uZmlybWF0aW9uTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGRpYWxvZ0RhdGEgPSB7XG4gICAgJ2ltZ1NyYyc6ICcnLFxuICAgICdpbWdJZCc6ICcnLFxuICAgICdpY29uJzogJycsXG4gICAgJ2ljb25JZCc6ICdzdWt1LWljb24nLFxuICAgICdpY29uQ3VzdG9tQ2xhc3MnOiAnc3VrdS14bCcsXG4gICAgJ21lc3NhZ2UnOiAnJyxcbiAgICAnZGVzY3JpcHRpb24nOiAnJyxcbiAgICAnbG9hZGVyJzogJ2Rpc2FibGUnLFxuICAgICdidXR0b25UZXh0JzogJycsXG4gICAgJ21lc3NhZ2VDdXN0b21DbGFzcyc6ICcnLFxuICAgICdkZXNjcmlwdGlvbkN1c3RvbUNsYXNzJzogJycsXG4gICAgJ2J1dHRvbkN1c3RvbUNsYXNzJzogJycsXG4gICAgJ21lc3NhZ2VJZCc6ICcnLFxuICAgICdidXR0b25JZCc6ICcnLFxuICB9O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nQ3VzdG9tUmVmOiBNYXREaWFsb2dSZWY8U3VrdUNvbmZpcm1hdGlvbk1vZGFsQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5tb2RhbERhdGEpIHtcbiAgICAgIHRoaXMuZGF0YS5tb2RhbERhdGEuc3Vic2NyaWJlKCh2YWwpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEtLScsIHZhbCk7XG4gICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh2YWwpKSB7XG4gICAgICAgICAgICBpZiAodmFsW2tleV0pIHtcbiAgICAgICAgICAgICAgdGhpcy5kaWFsb2dEYXRhW2tleV0gPSB2YWxba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuZGlhbG9nQ3VzdG9tUmVmLmNsb3NlKHRydWUpO1xuICB9XG5cbn1cbiJdfQ==