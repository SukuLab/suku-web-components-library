/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var SukuConfirmationComponent = /** @class */ (function () {
    function SukuConfirmationComponent(dialogCustomRef, data) {
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
    SukuConfirmationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    SukuConfirmationComponent.prototype.closeDialog = /**
     * @return {?}
     */
    function () {
        this.dialogCustomRef.close('cancel');
    };
    /**
     * @return {?}
     */
    SukuConfirmationComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.dialogCustomRef.close(false);
    };
    /**
     * @return {?}
     */
    SukuConfirmationComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        this.dialogCustomRef.close(true);
    };
    SukuConfirmationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-confirmation',
                    template: "<div class=\"col p-0\">\r\n  <div class=\"col text-center\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"dialog-title-box {{dialogData?.titleBoxCustomClass}}\">\r\n        <div class=\"col\">\r\n          <!-- <div class=\"col-1 offset-11\"> -->\r\n          <!--  <span class=\"sticky fa fa-close\" *ngIf=\"dialogData?.showCloseButton\" (click)=\"closeDialog();\">\r\n            </span> -->\r\n          <!-- </div> -->\r\n          <div class=\"row\">\r\n            <div class=\"col pt-3\">\r\n              <i class=\"{{dialogData?.icon}} icon {{dialogData?.iconCustomClass}}\" [id]=\"dialogData?.iconId\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col pb-3 pt-3\">\r\n              <span id=\"{{ dialogData?.titleOneId }}\" class=\"title pb-1 mt-3 mb-3 {{dialogData?.titleOneCustomClass}}\">\r\n                {{ dialogData?.titleOne | translate}}\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <div class=\"col p-0\">\r\n    <h2 class=\"col maincontent pt-4 mb-1 text-center {{dialogData?.titleTwoCustomClass}}\"\r\n      id=\"{{ dialogData?.titleTwoId }}\">\r\n      {{ dialogData?.titleTwo | translate }}\r\n    </h2>\r\n    <h2 class=\" col subcontent mb-2 text-center {{dialogData?.titleThreeCustomClass}}\"\r\n      id=\"{{ dialogData?.titleThreeId }}\">\r\n      {{ dialogData?.titleThree | translate }}\r\n    </h2>\r\n  </div>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <div class=\"col text-center pb-3\">\r\n    <div class=\"row\">\r\n      <div *ngIf=\"dialogData?.showCloseButton\"\r\n        class=\"{{ (dialogData?.showCloseButton) ? 'col-lg-4' : 'col-lg-5 offset-lg-1 '}} col-sm-6 pt-3 justify-content-center\">\r\n        <button type=\"button\" id=\"{{ dialogData?.buttonLableThreeId }}\"\r\n          class=\"btn btn-default center-block w-70 {{dialogData?.buttonCustomClass}}\" mat-dialog-close\r\n          (click)=\"closeDialog();\" tabindex=\"-1\">\r\n          {{ dialogData?.buttonLableThree | translate }}\r\n        </button>\r\n      </div>\r\n      <div\r\n        class=\"{{ (dialogData?.showCloseButton) ? 'col-lg-4' : 'col-lg-5 offset-lg-1 col-sm-6 '}} pt-3 justify-content-center\">\r\n        <button type=\"button\" id=\"{{ dialogData?.buttonLableOneId }}\"\r\n          class=\"btn btn-default center-block w-70 {{dialogData?.buttonCustomClass}}\" mat-dialog-close\r\n          (click)=\"cancel()\" tabindex=\"-1\">\r\n          {{ dialogData?.buttonLableOne | translate }}\r\n        </button>\r\n      </div>\r\n      <div\r\n        class=\"{{ (dialogData?.showCloseButton) ? 'col-lg-4' : 'col-lg-5 offset-lg-1 col-sm-6 '}} pt-3 justify-content-center\">\r\n        <button type=\"button\" tabindex=\"1\" (click)=\"submit()\" id=\"{{ dialogData?.buttonLableTwoId }}\" mat-dialog-close\r\n          class=\"btn btn-info center-block w-70 {{dialogData?.buttonCustomClass}}\">\r\n          {{ dialogData?.buttonLableTwo | translate }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-dialog-actions>",
                    styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.dialog-title-box{width:100%;float:left;background-image:linear-gradient(to bottom,rgba(101,102,243,.06),rgba(101,102,243,.06)),radial-gradient(circle at 50% 0,#3a3a3a,#000);border-radius:0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);margin:0}.title{font-family:var(--suku-primary-font);color:#fff!important;font-size:20px;font-weight:300}.icon{font-size:50px;color:#a7bf2e}.width100{width:100%}.maincontent{font-family:var(--suku-primary-font);font-size:17px;letter-spacing:.4px;font-weight:700}.subcontent{font-family:var(--suku-primary-font);font-size:17px;letter-spacing:.4px;font-weight:300}::ng-deep mat-dialog-container{padding:0!important;overflow:hidden!important}:host ::ng-deep mat-dialog-content{max-height:91%!important;overflow-y:none!important;margin:0!important;height:100%!important}:host ::ng-deep mat-dialog-actions{margin:5px 10px!important}/deep/div ::-webkit-scrollbar{width:4px!important}/deep/div ::-webkit-scrollbar-track{background:rgba(0,0,0,.1)}/deep/div ::-webkit-scrollbar-thumb{background:rgba(0,0,0,.8)}.w-70{min-width:70%}.sticky{z-index:1;cursor:pointer!important;position:absolute;right:10px!important;top:5px!important;color:#fff;font-size:20px}"]
                }] }
    ];
    /** @nocollapse */
    SukuConfirmationComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    SukuConfirmationComponent.propDecorators = {
        dialogData: [{ type: Input }]
    };
    return SukuConfirmationComponent;
}());
export { SukuConfirmationComponent };
if (false) {
    /** @type {?} */
    SukuConfirmationComponent.prototype.dialogData;
    /** @type {?} */
    SukuConfirmationComponent.prototype.dialogCustomRef;
    /** @type {?} */
    SukuConfirmationComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jb25maXJtYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY29uZmlybWF0aW9uL3N1a3UtY29uZmlybWF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxFO0lBNkJFLG1DQUFtQixlQUF3RCxFQUN6QyxJQUFTO1FBRHhCLG9CQUFlLEdBQWYsZUFBZSxDQUF5QztRQUN6QyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBeEJsQyxlQUFVLEdBQUc7WUFDcEIsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixNQUFNLEVBQUUsZ0JBQWdCO1lBQ3hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsVUFBVSxFQUFFLE1BQU07WUFDbEIsWUFBWSxFQUFFLGNBQWM7WUFDNUIscUJBQXFCLEVBQUUsRUFBRTtZQUN6QixVQUFVLEVBQUUsRUFBRTtZQUNkLFlBQVksRUFBRSxFQUFFO1lBQ2hCLHFCQUFxQixFQUFFLEVBQUU7WUFDekIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsY0FBYyxFQUFFLEVBQUU7WUFDbEIsdUJBQXVCLEVBQUUsRUFBRTtZQUMzQixxQkFBcUIsRUFBRSxFQUFFO1lBQ3pCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsa0JBQWtCLEVBQUUsRUFBRTtZQUN0QixvQkFBb0IsRUFBRSxvQkFBb0I7WUFDMUMsZ0JBQWdCLEVBQUUsS0FBSztZQUN2QixrQkFBa0IsRUFBRSxFQUFFO1lBQ3RCLG1CQUFtQixFQUFFLEVBQUU7WUFDdkIsa0JBQWtCLEVBQUUsUUFBUTtTQUM3QixDQUFDO0lBRTZDLENBQUM7Ozs7SUFFaEQsNENBQVE7OztJQUFSOzs7WUFDRSxLQUFrQixJQUFBLEtBQUEsaUJBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXJDLElBQU0sR0FBRyxXQUFBO2dCQUNaLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN2QzthQUNGOzs7Ozs7Ozs7SUFDSCxDQUFDOzs7O0lBRUQsK0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELDBDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCwwQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHlwR0FBaUQ7O2lCQUVsRDs7OztnQkFOUSxZQUFZO2dEQWdDaEIsTUFBTSxTQUFDLGVBQWU7Ozs2QkF4QnhCLEtBQUs7O0lBOENSLGdDQUFDO0NBQUEsQUFwREQsSUFvREM7U0EvQ1kseUJBQXlCOzs7SUFDcEMsK0NBc0JFOztJQUNVLG9EQUErRDs7SUFDekUseUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtY29uZmlybWF0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VDb25maXJtYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGRpYWxvZ0RhdGEgPSB7XHJcbiAgICAnc2hvd0Nsb3NlQnV0dG9uJzogZmFsc2UsXHJcbiAgICAnaWNvbic6ICdmYSBmYS1xdWVzdGlvbicsXHJcbiAgICAnaWNvbkN1c3RvbUNsYXNzJzogJycsXHJcbiAgICAnaWNvbklkJzogJ3F1ZXN0aW9uSWNvbicsXHJcbiAgICAndGl0bGVPbmUnOiAnVGVzdCcsXHJcbiAgICAndGl0bGVPbmVJZCc6ICdjb25maXJtYXRpb24nLFxyXG4gICAgJ3RpdGxlT25lQ3VzdG9tQ2xhc3MnOiAnJyxcclxuICAgICd0aXRsZVR3byc6ICcnLFxyXG4gICAgJ3RpdGxlVHdvSWQnOiAnJyxcclxuICAgICd0aXRsZVR3b0N1c3RvbUNsYXNzJzogJycsXHJcbiAgICAndGl0bGVUaHJlZSc6ICcnLFxyXG4gICAgJ3RpdGxlVGhyZWVJZCc6ICcnLFxyXG4gICAgJ3RpdGxlVGhyZWVDdXN0b21DbGFzcyc6ICcnLFxyXG4gICAgJ3RpdGxlQm94Q3VzdG9tQ2xhc3MnOiAnJyxcclxuICAgICdidXR0b25MYWJsZU9uZSc6ICdObycsXHJcbiAgICAnYnV0dG9uTGFibGVPbmVJZCc6ICcnLFxyXG4gICAgJ2J1dHRvbkxhYmxlVGhyZWVJZCc6ICdidXR0b25MYWJsZVRocmVlSWQnLFxyXG4gICAgJ2J1dHRvbkxhYmxlVHdvJzogJ1llcycsXHJcbiAgICAnYnV0dG9uTGFibGVUd29JZCc6ICcnLFxyXG4gICAgJ2J1dHRvbkN1c3RvbUNsYXNzJzogJycsXHJcbiAgICAnYnV0dG9uTGFibGVUaHJlZSc6ICdDYW5jZWwnXHJcbiAgfTtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nQ3VzdG9tUmVmOiBNYXREaWFsb2dSZWY8U3VrdUNvbmZpcm1hdGlvbkNvbXBvbmVudD4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5kYXRhKSkge1xyXG4gICAgICBpZiAodGhpcy5kYXRhW2tleV0pIHtcclxuICAgICAgICB0aGlzLmRpYWxvZ0RhdGFba2V5XSA9IHRoaXMuZGF0YVtrZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZURpYWxvZygpIHtcclxuICAgIHRoaXMuZGlhbG9nQ3VzdG9tUmVmLmNsb3NlKCdjYW5jZWwnKTtcclxuICB9XHJcblxyXG4gIGNhbmNlbCgpIHtcclxuICAgIHRoaXMuZGlhbG9nQ3VzdG9tUmVmLmNsb3NlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIHRoaXMuZGlhbG9nQ3VzdG9tUmVmLmNsb3NlKHRydWUpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19