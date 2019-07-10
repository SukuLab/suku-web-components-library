/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            'icon': 'fa fa-question',
            'iconCustomClass': '',
            'iconId': 'questionIcon',
            'titleOne': 'Test',
            'titleOneId': 'confirmation',
            'titleTwo': '',
            'titleTwoId': '',
            'titleThree': '',
            'titleThreeId': '',
            'titleBoxCustomClass': '',
            'buttonLableOne': 'Cancel',
            'buttonLableOneId': '',
            'buttonLableTwo': 'Submit',
            'buttonLableTwoId': '',
            'buttonCustomClass': ''
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('Current data', this.data);
        for (const key of Object.keys(this.data)) {
            if (this.data[key]) {
                console.log(this.data[key], key);
                // if (this.dialogData[this.data[key]]) {
                this.dialogData[key] = this.data[key];
                // }
            }
        }
        console.log('dialogData', this.dialogData);
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
                template: "<div class=\"col p-0\">\n  <div class=\"col text-center\">\n    <div class=\"row justify-content-center\">\n      <div class=\"dialog-title-box {{dialogData?.titleBoxCustomClass}}\">\n        <div class=\"col\">\n          <div class=\"row\">\n            <div class=\"col pt-3\">\n              <i class=\"{{dialogData?.icon}} icon {{dialogData?.iconCustomClass}}\" id=\"iconId\"></i>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col pb-3 pt-3\">\n              <span id=\"{{ dialogData?.titleOneId }}\" class=\"title pb-1 mt-3 mb-3\">\n                {{ dialogData?.titleOne }}\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<mat-dialog-content class=\"mat-typography\">\n  <div class=\"col p-0\">\n    <h2 class=\"col maincontent pt-4 mb-1 text-center\" id=\"{{ dialogData?.titleTwoId }}\">\n      {{ dialogData?.titleTwo }}\n    </h2>\n    <h2 class=\" col subcontent mb-2 text-center\" id=\"{{ dialogData?.titleThreeId }}\">\n      {{ dialogData?.titleThree }}\n    </h2>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <div class=\"col text-center pb-3\">\n    <div class=\"row\">\n      <div class=\"col-lg-5 offset-lg-1 col-sm-6 pt-3 justify-content-center\">\n        <button type=\"button\" id=\"{{ dialogData?.buttonLableOneId }}\"\n          class=\"btn btn-default center-block w-70 {{dialogData?.buttonCustomClass}}\" mat-dialog-close\n          (click)=\"cancel()\" tabindex=\"-1\">\n          {{ dialogData?.buttonLableOne }}\n        </button>\n      </div>\n      <div class=\"col-lg-5 col-sm-6 pt-3 justify-content-center\">\n        <button type=\"button\" tabindex=\"1\" (click)=\"submit()\" id=\"{{ dialogData?.buttonLableTwoId }}\" mat-dialog-close\n          class=\"btn btn-info center-block w-70 {{dialogData?.buttonCustomClass}}\">\n          {{ dialogData?.buttonLableTwo }}\n        </button>\n      </div>\n    </div>\n  </div>\n</mat-dialog-actions>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)!important}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.dialog-title-box{width:100%;float:left;background-image:linear-gradient(to bottom,rgba(101,102,243,.06),rgba(101,102,243,.06)),radial-gradient(circle at 50% 0,#3a3a3a,#000);border-radius:0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);margin:0}.title{font-family:var(--suku-primary-font)!important;color:#fff!important;font-size:20px;font-weight:300}.icon{font-size:50px;color:#a7bf2e}.width100{width:100%}.maincontent{font-family:var(--suku-primary-font)!important;font-size:17px;letter-spacing:.4px;font-weight:700}.subcontent{font-family:var(--suku-primary-font)!important;font-size:17px;letter-spacing:.4px;font-weight:300}::ng-deep mat-dialog-container{padding:0!important;overflow:hidden!important}:host ::ng-deep mat-dialog-content{max-height:91%!important;overflow-y:none!important;margin:0!important;height:100%!important}:host ::ng-deep mat-dialog-actions{margin:5px 10px!important}/deep/div ::-webkit-scrollbar{width:4px!important}/deep/div ::-webkit-scrollbar-track{background:rgba(0,0,0,.1)}/deep/div ::-webkit-scrollbar-thumb{background:rgba(0,0,0,.8)}.w-70{min-width:70%}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jb25maXJtYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY29uZmlybWF0aW9uL3N1a3UtY29uZmlybWF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPbEUsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7SUFrQnBDLFlBQW1CLGVBQXdELEVBQ3pDLElBQVM7UUFEeEIsb0JBQWUsR0FBZixlQUFlLENBQXlDO1FBQ3pDLFNBQUksR0FBSixJQUFJLENBQUs7UUFsQmxDLGVBQVUsR0FBRztZQUNwQixNQUFNLEVBQUUsZ0JBQWdCO1lBQ3hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsVUFBVSxFQUFFLE1BQU07WUFDbEIsWUFBWSxFQUFFLGNBQWM7WUFDNUIsVUFBVSxFQUFFLEVBQUU7WUFDZCxZQUFZLEVBQUUsRUFBRTtZQUNoQixZQUFZLEVBQUUsRUFBRTtZQUNoQixjQUFjLEVBQUUsRUFBRTtZQUNsQixxQkFBcUIsRUFBRSxFQUFFO1lBQ3pCLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsa0JBQWtCLEVBQUUsRUFBRTtZQUN0QixnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLGtCQUFrQixFQUFFLEVBQUU7WUFDdEIsbUJBQW1CLEVBQUUsRUFBRTtTQUN4QixDQUFDO0lBRTZDLENBQUM7Ozs7SUFFaEQsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyx5Q0FBeUM7Z0JBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEMsSUFBSTthQUNMO1NBQ0Y7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsNCtEQUFpRDs7YUFFbEQ7Ozs7WUFOUSxZQUFZOzRDQTBCaEIsTUFBTSxTQUFDLGVBQWU7Ozt5QkFsQnhCLEtBQUs7Ozs7SUFBTiwrQ0FnQkU7O0lBQ1Usb0RBQStEOztJQUN6RSx5Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtY29uZmlybWF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1Q29uZmlybWF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGlhbG9nRGF0YSA9IHtcbiAgICAnaWNvbic6ICdmYSBmYS1xdWVzdGlvbicsXG4gICAgJ2ljb25DdXN0b21DbGFzcyc6ICcnLFxuICAgICdpY29uSWQnOiAncXVlc3Rpb25JY29uJyxcbiAgICAndGl0bGVPbmUnOiAnVGVzdCcsXG4gICAgJ3RpdGxlT25lSWQnOiAnY29uZmlybWF0aW9uJyxcbiAgICAndGl0bGVUd28nOiAnJyxcbiAgICAndGl0bGVUd29JZCc6ICcnLFxuICAgICd0aXRsZVRocmVlJzogJycsXG4gICAgJ3RpdGxlVGhyZWVJZCc6ICcnLFxuICAgICd0aXRsZUJveEN1c3RvbUNsYXNzJzogJycsXG4gICAgJ2J1dHRvbkxhYmxlT25lJzogJ0NhbmNlbCcsXG4gICAgJ2J1dHRvbkxhYmxlT25lSWQnOiAnJyxcbiAgICAnYnV0dG9uTGFibGVUd28nOiAnU3VibWl0JyxcbiAgICAnYnV0dG9uTGFibGVUd29JZCc6ICcnLFxuICAgICdidXR0b25DdXN0b21DbGFzcyc6ICcnXG4gIH07XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dDdXN0b21SZWY6IE1hdERpYWxvZ1JlZjxTdWt1Q29uZmlybWF0aW9uQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coJ0N1cnJlbnQgZGF0YScsIHRoaXMuZGF0YSk7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5kYXRhKSkge1xuICAgICAgaWYgKHRoaXMuZGF0YVtrZXldKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YVtrZXldLCBrZXkpO1xuICAgICAgICAvLyBpZiAodGhpcy5kaWFsb2dEYXRhW3RoaXMuZGF0YVtrZXldXSkge1xuICAgICAgICB0aGlzLmRpYWxvZ0RhdGFba2V5XSA9IHRoaXMuZGF0YVtrZXldO1xuICAgICAgICAvLyB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdkaWFsb2dEYXRhJywgdGhpcy5kaWFsb2dEYXRhKTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLmRpYWxvZ0N1c3RvbVJlZi5jbG9zZShmYWxzZSk7XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgdGhpcy5kaWFsb2dDdXN0b21SZWYuY2xvc2UodHJ1ZSk7XG4gIH1cblxufVxuIl19