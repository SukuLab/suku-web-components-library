/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-confirmation/suku-confirmation.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
export class SukuConfirmationComponent {
    /**
     * @param {?} dialogCustomRef
     * @param {?} data
     */
    constructor(dialogCustomRef, data) {
        this.dialogCustomRef = dialogCustomRef;
        this.data = data;
        this.dialogData = {
            'showCloseButton': false,
            'icon': 'fa fa-question',
            'iconCustomClass': '',
            'iconId': 'questionIcon',
            'titleOne': 'Test',
            'titleOneId': 'confirmation',
            'titleOneCustomClass': '',
            'titleTwo': '',
            'titleTwoId': '',
            'titleTwoCustomClass': '',
            'titleThree': '',
            'titleThreeId': '',
            'titleThreeCustomClass': '',
            'titleBoxCustomClass': '',
            'buttonLableOne': 'No',
            'buttonLableOneId': '',
            'buttonLableThreeId': 'buttonLableThreeId',
            'buttonLableTwo': 'Yes',
            'buttonLableTwoId': '',
            'buttonCustomClass': '',
            'buttonLableThree': 'Cancel'
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        for (const key of Object.keys(this.data)) {
            if (this.data[key]) {
                this.dialogData[key] = this.data[key];
            }
        }
    }
    /**
     * @return {?}
     */
    closeDialog() {
        this.dialogCustomRef.close('cancel');
    }
    /**
     * @return {?}
     */
    cancel() {
        this.dialogCustomRef.close(false);
    }
    /**
     * @return {?}
     */
    submit() {
        this.dialogCustomRef.close(true);
    }
}
SukuConfirmationComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-confirmation',
                template: "<div class=\"col p-0\">\n  <div class=\"col text-center\">\n    <div class=\"row justify-content-center\">\n      <div class=\"dialog-title-box {{dialogData?.titleBoxCustomClass}}\">\n        <div class=\"col\">\n          <!-- <div class=\"col-1 offset-11\"> -->\n          <!--  <span class=\"sticky fa fa-close\" *ngIf=\"dialogData?.showCloseButton\" (click)=\"closeDialog();\">\n            </span> -->\n          <!-- </div> -->\n          <div class=\"row\">\n            <div class=\"col pt-3\">\n              <i class=\"{{dialogData?.icon}} icon {{dialogData?.iconCustomClass}}\" [id]=\"dialogData?.iconId\"></i>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col pb-3 pt-3\">\n              <span id=\"{{ dialogData?.titleOneId }}\" class=\"title pb-1 mt-3 mb-3 {{dialogData?.titleOneCustomClass}}\">\n                {{ dialogData?.titleOne | translate}}\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<mat-dialog-content class=\"mat-typography\">\n  <div class=\"col p-0\">\n    <h2 class=\"col maincontent pt-4 mb-1 text-center {{dialogData?.titleTwoCustomClass}}\"\n      id=\"{{ dialogData?.titleTwoId }}\">\n      {{ dialogData?.titleTwo | translate }}\n    </h2>\n    <h2 class=\" col subcontent mb-2 text-center {{dialogData?.titleThreeCustomClass}}\"\n      id=\"{{ dialogData?.titleThreeId }}\">\n      {{ dialogData?.titleThree | translate }}\n    </h2>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <div class=\"col text-center pb-3\">\n    <div class=\"row\">\n      <div *ngIf=\"dialogData?.showCloseButton\"\n        class=\"{{ (dialogData?.showCloseButton) ? 'col-lg-4' : 'col-lg-5 offset-lg-1 '}} col-sm-6 pt-3 justify-content-center\">\n        <button type=\"button\" id=\"{{ dialogData?.buttonLableThreeId }}\"\n          class=\"btn btn-default center-block w-70 {{dialogData?.buttonCustomClass}}\" mat-dialog-close\n          (click)=\"closeDialog();\" tabindex=\"-1\">\n          {{ dialogData?.buttonLableThree | translate }}\n        </button>\n      </div>\n      <div\n        class=\"{{ (dialogData?.showCloseButton) ? 'col-lg-4' : 'col-lg-5 offset-lg-1 col-sm-6 '}} pt-3 justify-content-center\">\n        <button type=\"button\" id=\"{{ dialogData?.buttonLableOneId }}\"\n          class=\"btn btn-default center-block w-70 {{dialogData?.buttonCustomClass}}\" mat-dialog-close\n          (click)=\"cancel()\" tabindex=\"-1\">\n          {{ dialogData?.buttonLableOne | translate }}\n        </button>\n      </div>\n      <div\n        class=\"{{ (dialogData?.showCloseButton) ? 'col-lg-4' : 'col-lg-5 offset-lg-1 col-sm-6 '}} pt-3 justify-content-center\">\n        <button type=\"button\" tabindex=\"1\" (click)=\"submit()\" id=\"{{ dialogData?.buttonLableTwoId }}\" mat-dialog-close\n          class=\"btn btn-info center-block w-70 {{dialogData?.buttonCustomClass}}\">\n          {{ dialogData?.buttonLableTwo | translate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</mat-dialog-actions>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.dialog-title-box{width:100%;float:left;background-image:linear-gradient(to bottom,rgba(101,102,243,.06),rgba(101,102,243,.06)),radial-gradient(circle at 50% 0,#3a3a3a,#000);border-radius:0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);margin:0}.title{font-family:var(--suku-primary-font);color:#fff!important;font-size:20px;font-weight:300}.icon{font-size:50px;color:#a7bf2e}.width100{width:100%}.maincontent{font-family:var(--suku-primary-font);font-size:17px;letter-spacing:.4px;font-weight:700}.subcontent{font-family:var(--suku-primary-font);font-size:17px;letter-spacing:.4px;font-weight:300}::ng-deep mat-dialog-container{padding:0!important;overflow:hidden!important}:host ::ng-deep mat-dialog-content{max-height:91%!important;overflow-y:none!important;margin:0!important;height:100%!important}:host ::ng-deep mat-dialog-actions{margin:5px 10px!important}/deep/div ::-webkit-scrollbar{width:4px!important}/deep/div ::-webkit-scrollbar-track{background:rgba(0,0,0,.1)}/deep/div ::-webkit-scrollbar-thumb{background:rgba(0,0,0,.8)}.w-70{min-width:70%}.sticky{z-index:1;cursor:pointer!important;position:absolute;right:10px!important;top:5px!important;color:#fff;font-size:20px}"]
            }] }
];
/** @nocollapse */
SukuConfirmationComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
SukuConfirmationComponent.propDecorators = {
    dialogData: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuConfirmationComponent.prototype.dialogData;
    /** @type {?} */
    SukuConfirmationComponent.prototype.dialogCustomRef;
    /** @type {?} */
    SukuConfirmationComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jb25maXJtYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY29uZmlybWF0aW9uL3N1a3UtY29uZmlybWF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBT2xFLE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0lBd0JwQyxZQUFtQixlQUF3RCxFQUN6QyxJQUFTO1FBRHhCLG9CQUFlLEdBQWYsZUFBZSxDQUF5QztRQUN6QyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBeEJsQyxlQUFVLEdBQUc7WUFDcEIsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixNQUFNLEVBQUUsZ0JBQWdCO1lBQ3hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsVUFBVSxFQUFFLE1BQU07WUFDbEIsWUFBWSxFQUFFLGNBQWM7WUFDNUIscUJBQXFCLEVBQUUsRUFBRTtZQUN6QixVQUFVLEVBQUUsRUFBRTtZQUNkLFlBQVksRUFBRSxFQUFFO1lBQ2hCLHFCQUFxQixFQUFFLEVBQUU7WUFDekIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsY0FBYyxFQUFFLEVBQUU7WUFDbEIsdUJBQXVCLEVBQUUsRUFBRTtZQUMzQixxQkFBcUIsRUFBRSxFQUFFO1lBQ3pCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsa0JBQWtCLEVBQUUsRUFBRTtZQUN0QixvQkFBb0IsRUFBRSxvQkFBb0I7WUFDMUMsZ0JBQWdCLEVBQUUsS0FBSztZQUN2QixrQkFBa0IsRUFBRSxFQUFFO1lBQ3RCLG1CQUFtQixFQUFFLEVBQUU7WUFDdkIsa0JBQWtCLEVBQUUsUUFBUTtTQUM3QixDQUFDO0lBRTZDLENBQUM7Ozs7SUFFaEQsUUFBUTtRQUNOLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkM7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IscWhHQUFpRDs7YUFFbEQ7Ozs7WUFOUSxZQUFZOzRDQWdDaEIsTUFBTSxTQUFDLGVBQWU7Ozt5QkF4QnhCLEtBQUs7Ozs7SUFBTiwrQ0FzQkU7O0lBQ1Usb0RBQStEOztJQUN6RSx5Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtY29uZmlybWF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Q29uZmlybWF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGlhbG9nRGF0YSA9IHtcbiAgICAnc2hvd0Nsb3NlQnV0dG9uJzogZmFsc2UsXG4gICAgJ2ljb24nOiAnZmEgZmEtcXVlc3Rpb24nLFxuICAgICdpY29uQ3VzdG9tQ2xhc3MnOiAnJyxcbiAgICAnaWNvbklkJzogJ3F1ZXN0aW9uSWNvbicsXG4gICAgJ3RpdGxlT25lJzogJ1Rlc3QnLFxuICAgICd0aXRsZU9uZUlkJzogJ2NvbmZpcm1hdGlvbicsXG4gICAgJ3RpdGxlT25lQ3VzdG9tQ2xhc3MnOiAnJyxcbiAgICAndGl0bGVUd28nOiAnJyxcbiAgICAndGl0bGVUd29JZCc6ICcnLFxuICAgICd0aXRsZVR3b0N1c3RvbUNsYXNzJzogJycsXG4gICAgJ3RpdGxlVGhyZWUnOiAnJyxcbiAgICAndGl0bGVUaHJlZUlkJzogJycsXG4gICAgJ3RpdGxlVGhyZWVDdXN0b21DbGFzcyc6ICcnLFxuICAgICd0aXRsZUJveEN1c3RvbUNsYXNzJzogJycsXG4gICAgJ2J1dHRvbkxhYmxlT25lJzogJ05vJyxcbiAgICAnYnV0dG9uTGFibGVPbmVJZCc6ICcnLFxuICAgICdidXR0b25MYWJsZVRocmVlSWQnOiAnYnV0dG9uTGFibGVUaHJlZUlkJyxcbiAgICAnYnV0dG9uTGFibGVUd28nOiAnWWVzJyxcbiAgICAnYnV0dG9uTGFibGVUd29JZCc6ICcnLFxuICAgICdidXR0b25DdXN0b21DbGFzcyc6ICcnLFxuICAgICdidXR0b25MYWJsZVRocmVlJzogJ0NhbmNlbCdcbiAgfTtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ0N1c3RvbVJlZjogTWF0RGlhbG9nUmVmPFN1a3VDb25maXJtYXRpb25Db21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLmRhdGEpKSB7XG4gICAgICBpZiAodGhpcy5kYXRhW2tleV0pIHtcbiAgICAgICAgdGhpcy5kaWFsb2dEYXRhW2tleV0gPSB0aGlzLmRhdGFba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbG9zZURpYWxvZygpIHtcbiAgICB0aGlzLmRpYWxvZ0N1c3RvbVJlZi5jbG9zZSgnY2FuY2VsJyk7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5kaWFsb2dDdXN0b21SZWYuY2xvc2UoZmFsc2UpO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIHRoaXMuZGlhbG9nQ3VzdG9tUmVmLmNsb3NlKHRydWUpO1xuICB9XG5cbn1cbiJdfQ==