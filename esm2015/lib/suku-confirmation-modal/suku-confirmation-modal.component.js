/**
 * @fileoverview added by tsickle
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
            'message': '',
            'description': '',
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
        for (const key of Object.keys(this.data)) {
            if (this.data[key]) {
                this.dialogData[key] = this.data[key];
            }
        }
    }
    /**
     * @return {?}
     */
    close() {
        this.dialogCustomRef.close();
    }
}
SukuConfirmationModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-confirmation-modal',
                template: "  <div class=\"text-center p-0\">\n    <div class=\"col text-center\">\n      <div class=\"row justify-content-center\">\n        <div class=\"modalproduct-boxContent\">\n          <div class=\"col pl-lg-4 pt-1 pb-3\">\n            <div class=\"row\">\n              <div class=\"col pl-lg-0 pl-0 mt-3 mb-3\">\n                <div class=\"col pl-lg-0 pl-0 mb-3\">\n                  <img [src]=\"dialogData?.imgSrc\" />\n                </div>\n                <span id=\"{{ dialogData?.messageId }}\" class=\"modalcolor {{ dialogData?.messageCustomClass }} pb-1 mt-3 mb-3\">\n                  {{ dialogData?.message }}\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <h2 class=\"col-sm-10 modalFontStyle mt-5 mb-2 text-center {{ dialogData?.descriptionCustomClass }}\">\n          {{ dialogData?.description }}\n        </h2>\n      </div>\n    </div>\n    <div class=\"col text-center p-3\">\n      <div class=\"row mb-3 mt-3\">\n        <div class=\"col-lg-4 col-md-6 offset-md-3 offset-sm-4\t col-sm-4 col-xs-10 offset-lg-4 pl-lg-0 pr-lg-0\">\n          <button tabindex=\"1\" (click)=\"close()\" id=\"{{ dialogData?.buttonId }}\"\n            class=\"btn btn-info center-block width100 {{ dialogData?.buttonCustomClass }}\">\n            {{ dialogData?.buttonText }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border-color:var(--suku-primary-border-color)!important;background-color:#fff;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.modalcolor{font-family:Poppins,sans-serif!important;color:#fff!important;font-size:20px;font-weight:300}.modalFontStyle{font-family:Poppins,sans-serif!important;font-size:17px;letter-spacing:.4px;font-weight:700;color:#1c1c1c!important}.width100{width:100%}.errorMsg{font-family:\"Encode Sans\",sans-serif!important;color:#e53935;font-size:75%}.btn-info{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:a7bf2e;color:#000}.modalproduct-boxContent{width:100%;float:left;background-image:linear-gradient(to bottom,rgba(101,102,243,.06),rgba(101,102,243,.06)),radial-gradient(circle at 50% 0,#3a3a3a,#000);border-radius:6px;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}.bgWhite{background-color:#fff!important}::ng-deep mat-dialog-container{padding:0!important;overflow:hidden!important}:host ::ng-deep mat-dialog-content{max-height:91%!important;overflow-y:none!important;margin:0!important;height:100%!important}:host ::ng-deep mat-dialog-actions{margin:5px 10px!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jb25maXJtYXRpb24tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY29uZmlybWF0aW9uLW1vZGFsL3N1a3UtY29uZmlybWF0aW9uLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPbEUsTUFBTSxPQUFPLDhCQUE4Qjs7Ozs7SUFjekMsWUFBbUIsZUFBNkQsRUFDOUMsSUFBUztRQUR4QixvQkFBZSxHQUFmLGVBQWUsQ0FBOEM7UUFDOUMsU0FBSSxHQUFKLElBQUksQ0FBSztRQWJsQyxlQUFVLEdBQUc7WUFDckIsUUFBUSxFQUFFLEVBQUU7WUFDWixTQUFTLEVBQUUsRUFBRTtZQUNiLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLG9CQUFvQixFQUFFLEVBQUU7WUFDeEIsd0JBQXdCLEVBQUUsRUFBRTtZQUM1QixtQkFBbUIsRUFBRSxFQUFFO1lBQ3ZCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsVUFBVSxFQUFFLEVBQUU7U0FDZCxDQUFDO0lBRzZDLENBQUM7Ozs7SUFFaEQsUUFBUTtRQUNQLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkM7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCxLQUFLO1FBQ04sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLDg0Q0FBdUQ7O2FBRXhEOzs7O1lBTlEsWUFBWTs0Q0FzQmhCLE1BQU0sU0FBQyxlQUFlOzs7eUJBYnhCLEtBQUs7Ozs7SUFBTixvREFVRTs7SUFFVSx5REFBb0U7O0lBQzlFLDhDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWNvbmZpcm1hdGlvbi1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWNvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtY29uZmlybWF0aW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUNvbmZpcm1hdGlvbk1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBkaWFsb2dEYXRhID0ge1xuICBcdCdpbWdTcmMnOiAnJyxcbiAgXHQnbWVzc2FnZSc6ICcnLFxuICBcdCdkZXNjcmlwdGlvbic6ICcnLFxuICBcdCdidXR0b25UZXh0JzogJycsXG4gIFx0J21lc3NhZ2VDdXN0b21DbGFzcyc6ICcnLFxuICBcdCdkZXNjcmlwdGlvbkN1c3RvbUNsYXNzJzogJycsXG4gIFx0J2J1dHRvbkN1c3RvbUNsYXNzJzogJycsXG4gIFx0J21lc3NhZ2VJZCc6ICcnLFxuICBcdCdidXR0b25JZCc6ICcnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dDdXN0b21SZWY6IE1hdERpYWxvZ1JlZjxTdWt1Q29uZmlybWF0aW9uTW9kYWxDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgXHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLmRhdGEpKSB7XG4gICAgICBpZiAodGhpcy5kYXRhW2tleV0pIHtcbiAgICAgICAgdGhpcy5kaWFsb2dEYXRhW2tleV0gPSB0aGlzLmRhdGFba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbG9zZSgpIHtcblx0dGhpcy5kaWFsb2dDdXN0b21SZWYuY2xvc2UoKTtcbiAgfVxuXG59XG4iXX0=