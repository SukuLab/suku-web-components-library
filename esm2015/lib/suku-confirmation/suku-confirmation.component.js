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
            'titleOneCustomClass': '',
            'titleTwo': '',
            'titleTwoId': '',
            'titleTwoCustomClass': '',
            'titleThree': '',
            'titleThreeId': '',
            'titleThreeCustomClass': '',
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
                this.dialogData[key] = this.data[key];
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
                template: "<div class=\"col p-0\">\n  <div class=\"col text-center\">\n    <div class=\"row justify-content-center\">\n      <div class=\"dialog-title-box {{dialogData?.titleBoxCustomClass}}\">\n        <div class=\"col\">\n          <div class=\"row\">\n            <div class=\"col pt-3\">\n              <i class=\"{{dialogData?.icon}} icon {{dialogData?.iconCustomClass}}\" [id]=\"dialogData?.iconId\"></i>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col pb-3 pt-3\">\n              <span id=\"{{ dialogData?.titleOneId }}\" class=\"title pb-1 mt-3 mb-3 {{dialogData?.titleOneCustomClass}}\">\n                {{ dialogData?.titleOne }}\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<mat-dialog-content class=\"mat-typography\">\n  <div class=\"col p-0\">\n    <h2 class=\"col maincontent pt-4 mb-1 text-center {{dialogData?.titleTwoCustomClass}}\"\n      id=\"{{ dialogData?.titleTwoId }}\">\n      {{ dialogData?.titleTwo }}\n    </h2>\n    <h2 class=\" col subcontent mb-2 text-center {{dialogData?.titleThreeCustomClass}}\"\n      id=\"{{ dialogData?.titleThreeId }}\">\n      {{ dialogData?.titleThree }}\n    </h2>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <div class=\"col text-center pb-3\">\n    <div class=\"row\">\n      <div class=\"col-lg-5 offset-lg-1 col-sm-6 pt-3 justify-content-center\">\n        <button type=\"button\" id=\"{{ dialogData?.buttonLableOneId }}\"\n          class=\"btn btn-default center-block w-70 {{dialogData?.buttonCustomClass}}\" mat-dialog-close\n          (click)=\"cancel()\" tabindex=\"-1\">\n          {{ dialogData?.buttonLableOne }}\n        </button>\n      </div>\n      <div class=\"col-lg-5 col-sm-6 pt-3 justify-content-center\">\n        <button type=\"button\" tabindex=\"1\" (click)=\"submit()\" id=\"{{ dialogData?.buttonLableTwoId }}\" mat-dialog-close\n          class=\"btn btn-info center-block w-70 {{dialogData?.buttonCustomClass}}\">\n          {{ dialogData?.buttonLableTwo }}\n        </button>\n      </div>\n    </div>\n  </div>\n</mat-dialog-actions>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1jb25maXJtYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtY29uZmlybWF0aW9uL3N1a3UtY29uZmlybWF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPbEUsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7SUFxQnBDLFlBQW1CLGVBQXdELEVBQ3pDLElBQVM7UUFEeEIsb0JBQWUsR0FBZixlQUFlLENBQXlDO1FBQ3pDLFNBQUksR0FBSixJQUFJLENBQUs7UUFyQmxDLGVBQVUsR0FBRztZQUNwQixNQUFNLEVBQUUsZ0JBQWdCO1lBQ3hCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsVUFBVSxFQUFFLE1BQU07WUFDbEIsWUFBWSxFQUFFLGNBQWM7WUFDNUIscUJBQXFCLEVBQUUsRUFBRTtZQUN6QixVQUFVLEVBQUUsRUFBRTtZQUNkLFlBQVksRUFBRSxFQUFFO1lBQ2hCLHFCQUFxQixFQUFFLEVBQUU7WUFDekIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsY0FBYyxFQUFFLEVBQUU7WUFDbEIsdUJBQXVCLEVBQUUsRUFBRTtZQUMzQixxQkFBcUIsRUFBRSxFQUFFO1lBQ3pCLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsa0JBQWtCLEVBQUUsRUFBRTtZQUN0QixnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLGtCQUFrQixFQUFFLEVBQUU7WUFDdEIsbUJBQW1CLEVBQUUsRUFBRTtTQUN4QixDQUFDO0lBRTZDLENBQUM7Ozs7SUFFaEQsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkM7U0FDRjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBOUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixzbkVBQWlEOzthQUVsRDs7OztZQU5RLFlBQVk7NENBNkJoQixNQUFNLFNBQUMsZUFBZTs7O3lCQXJCeEIsS0FBSzs7OztJQUFOLCtDQW1CRTs7SUFDVSxvREFBK0Q7O0lBQ3pFLHlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS1jb25maXJtYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VDb25maXJtYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkaWFsb2dEYXRhID0ge1xuICAgICdpY29uJzogJ2ZhIGZhLXF1ZXN0aW9uJyxcbiAgICAnaWNvbkN1c3RvbUNsYXNzJzogJycsXG4gICAgJ2ljb25JZCc6ICdxdWVzdGlvbkljb24nLFxuICAgICd0aXRsZU9uZSc6ICdUZXN0JyxcbiAgICAndGl0bGVPbmVJZCc6ICdjb25maXJtYXRpb24nLFxuICAgICd0aXRsZU9uZUN1c3RvbUNsYXNzJzogJycsXG4gICAgJ3RpdGxlVHdvJzogJycsXG4gICAgJ3RpdGxlVHdvSWQnOiAnJyxcbiAgICAndGl0bGVUd29DdXN0b21DbGFzcyc6ICcnLFxuICAgICd0aXRsZVRocmVlJzogJycsXG4gICAgJ3RpdGxlVGhyZWVJZCc6ICcnLFxuICAgICd0aXRsZVRocmVlQ3VzdG9tQ2xhc3MnOiAnJyxcbiAgICAndGl0bGVCb3hDdXN0b21DbGFzcyc6ICcnLFxuICAgICdidXR0b25MYWJsZU9uZSc6ICdDYW5jZWwnLFxuICAgICdidXR0b25MYWJsZU9uZUlkJzogJycsXG4gICAgJ2J1dHRvbkxhYmxlVHdvJzogJ1N1Ym1pdCcsXG4gICAgJ2J1dHRvbkxhYmxlVHdvSWQnOiAnJyxcbiAgICAnYnV0dG9uQ3VzdG9tQ2xhc3MnOiAnJ1xuICB9O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nQ3VzdG9tUmVmOiBNYXREaWFsb2dSZWY8U3VrdUNvbmZpcm1hdGlvbkNvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IGRhdGEnLCB0aGlzLmRhdGEpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkpIHtcbiAgICAgIGlmICh0aGlzLmRhdGFba2V5XSkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFba2V5XSwga2V5KTtcbiAgICAgICAgdGhpcy5kaWFsb2dEYXRhW2tleV0gPSB0aGlzLmRhdGFba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2RpYWxvZ0RhdGEnLCB0aGlzLmRpYWxvZ0RhdGEpO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuZGlhbG9nQ3VzdG9tUmVmLmNsb3NlKGZhbHNlKTtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICB0aGlzLmRpYWxvZ0N1c3RvbVJlZi5jbG9zZSh0cnVlKTtcbiAgfVxuXG59XG4iXX0=