/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
export class SukuLoaderComponent {
    /**
     * @param {?} dialogCustomRef
     * @param {?} data
     */
    constructor(dialogCustomRef, data) {
        this.dialogCustomRef = dialogCustomRef;
        this.data = data;
        this.waitingMessage = 'please wait...';
        this.lodingDescription = 'The document you are downloading is being authenticated against the SUKU Blockchain.';
        this.loadingMessage = 'Please wait momentarily while this process completes...';
        this.dialogData = {
            'logo': '../../../assets/icons/icon-96x96.png',
            'logoCustomClass': '',
            'logoId': 'loaderIcon',
            'icon': 'fa fa-spinner fa-spin',
            'iconCustomClass': 'icon',
            'iconId': 'questionIcon',
            'titleOne': 'please wait...',
            'titleOneId': 'confirmation',
            'titleOneCustomClass': '',
            'titleTwo': 'The document you are downloading is being authenticated against the SUKU Blockchain.',
            'titleTwoId': '',
            'titleTwoCustomClass': '',
            'titleThree': 'Please wait momentarily while this process completes...',
            'titleThreeId': '',
            'titleThreeCustomClass': '',
            'titleBoxCustomClass': ''
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
SukuLoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-loader',
                template: "<div class=\"col p-0\">\n  <div class=\"col text-center\">\n    <div class=\"row justify-content-center\">\n      <div class=\"dialog-title-box {{dialogData?.titleBoxCustomClass}}\">\n        <div class=\"col\">\n          <div class=\"row\">\n            <div class=\"col pt-3\">\n              <img class=\"logo {{dialogData?.logoCustomClass}}\" [id]=\"dialogData?.iconId\" [src]=\"dialogData?.logo\"\n                class=\"mb-3\" aria-hidden=\"true\" />\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col pb-3 pt-3\">\n              <span id=\"{{ dialogData?.titleOneId }}\" class=\"title pb-1 mt-3 mb-3 {{dialogData?.titleOneCustomClass}}\">\n                {{ dialogData?.titleOne }}\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<mat-dialog-content class=\"mat-typography\">\n  <div class=\"col p-0\">\n    <h2 class=\"col maincontent pt-3 text-center {{dialogData?.titleTwoCustomClass}}\" id=\"{{ dialogData?.titleTwoId }}\">\n      {{ dialogData?.titleTwo }}\n    </h2>\n    <h2 class=\" col subcontent mb-2 text-center {{dialogData?.titleThreeCustomClass}}\"\n      id=\"{{ dialogData?.titleThreeId }}\">\n      <div class=\"col spinnerStyle text-center\">\n        <i class=\"{{dialogData?.icon}} icon {{dialogData?.iconCustomClass}}\" [id]=\"dialogData?.iconId\"></i>\n      </div>\n    </h2>\n  </div>\n  <div class=\"col\">\n    <h2 class=\"col subcontent pt-2 pb-3 text-center {{dialogData?.titleThreeCustomClass}}\"\n      id=\"{{ dialogData?.titleThreeId }}\">\n      {{ dialogData?.titleThree }}\n    </h2>\n  </div>\n</mat-dialog-content>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.dialog-title-box{width:100%;float:left;background-image:linear-gradient(to bottom,rgba(101,102,243,.06),rgba(101,102,243,.06)),radial-gradient(circle at 50% 0,#3a3a3a,#000);border-radius:0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);color:var(--suku-text-label-two);font-size:20px;font-weight:300}.icon{font-size:50px;color:var(--suku-primary-color)}.width100{width:100%}.maincontent{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);letter-spacing:.4px;font-weight:700}.subcontent{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);letter-spacing:.4px;font-weight:300}::ng-deep mat-dialog-container{padding:0!important;overflow:hidden!important}:host ::ng-deep mat-dialog-content{max-height:91%!important;overflow-y:none!important;margin:0!important;height:100%!important}:host ::ng-deep mat-dialog-actions{margin:5px 10px!important}/deep/div ::-webkit-scrollbar{width:4px!important}/deep/div ::-webkit-scrollbar-track{background:rgba(0,0,0,.1)}/deep/div ::-webkit-scrollbar-thumb{background:rgba(0,0,0,.8)}.spinnerStyle{font-size:50px;padding-top:20px;padding-bottom:20px}.w-70{min-width:70%}"]
            }] }
];
/** @nocollapse */
SukuLoaderComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
SukuLoaderComponent.propDecorators = {
    waitingMessage: [{ type: Input, args: ['waiting-message',] }],
    lodingDescription: [{ type: Input, args: ['loding-description',] }],
    loadingMessage: [{ type: Input, args: ['loading-message',] }],
    dialogData: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuLoaderComponent.prototype.waitingMessage;
    /** @type {?} */
    SukuLoaderComponent.prototype.lodingDescription;
    /** @type {?} */
    SukuLoaderComponent.prototype.loadingMessage;
    /** @type {?} */
    SukuLoaderComponent.prototype.dialogData;
    /** @type {?} */
    SukuLoaderComponent.prototype.dialogCustomRef;
    /** @type {?} */
    SukuLoaderComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1sb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtbG9hZGVyL3N1a3UtbG9hZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPbEUsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFzQjlCLFlBQW1CLGVBQWtELEVBQ25DLElBQVM7UUFEeEIsb0JBQWUsR0FBZixlQUFlLENBQW1DO1FBQ25DLFNBQUksR0FBSixJQUFJLENBQUs7UUFyQmpCLG1CQUFjLEdBQUcsZ0JBQWdCLENBQUM7UUFDL0Isc0JBQWlCLEdBQUcsc0ZBQXNGLENBQUM7UUFDOUcsbUJBQWMsR0FBRyx5REFBeUQsQ0FBQztRQUFVLGVBQVUsR0FBRztZQUMxSCxNQUFNLEVBQUUsc0NBQXNDO1lBQzlDLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsTUFBTSxFQUFFLHVCQUF1QjtZQUMvQixpQkFBaUIsRUFBRSxNQUFNO1lBQ3pCLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFVBQVUsRUFBRSxnQkFBZ0I7WUFDNUIsWUFBWSxFQUFFLGNBQWM7WUFDNUIscUJBQXFCLEVBQUUsRUFBRTtZQUN6QixVQUFVLEVBQUUsc0ZBQXNGO1lBQ2xHLFlBQVksRUFBRSxFQUFFO1lBQ2hCLHFCQUFxQixFQUFFLEVBQUU7WUFDekIsWUFBWSxFQUFFLHlEQUF5RDtZQUN2RSxjQUFjLEVBQUUsRUFBRTtZQUNsQix1QkFBdUIsRUFBRSxFQUFFO1lBQzNCLHFCQUFxQixFQUFFLEVBQUU7U0FDMUIsQ0FBQztJQUU2QyxDQUFDOzs7O0lBRWhELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Y7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLCtwREFBMkM7O2FBRTVDOzs7O1lBTnlCLFlBQVk7NENBOEJqQyxNQUFNLFNBQUMsZUFBZTs7OzZCQXJCeEIsS0FBSyxTQUFDLGlCQUFpQjtnQ0FDdkIsS0FBSyxTQUFDLG9CQUFvQjs2QkFDMUIsS0FBSyxTQUFDLGlCQUFpQjt5QkFBK0UsS0FBSzs7OztJQUY1Ryw2Q0FBNEQ7O0lBQzVELGdEQUF3STs7SUFDeEksNkNBQXFHOztJQUFDLHlDQWlCcEc7O0lBQ1UsOENBQXlEOztJQUNuRSxtQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtbG9hZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1sb2FkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1TG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoJ3dhaXRpbmctbWVzc2FnZScpIHdhaXRpbmdNZXNzYWdlID0gJ3BsZWFzZSB3YWl0Li4uJztcbiAgQElucHV0KCdsb2RpbmctZGVzY3JpcHRpb24nKSBsb2RpbmdEZXNjcmlwdGlvbiA9ICdUaGUgZG9jdW1lbnQgeW91IGFyZSBkb3dubG9hZGluZyBpcyBiZWluZyBhdXRoZW50aWNhdGVkIGFnYWluc3QgdGhlIFNVS1UgQmxvY2tjaGFpbi4nO1xuICBASW5wdXQoJ2xvYWRpbmctbWVzc2FnZScpIGxvYWRpbmdNZXNzYWdlID0gJ1BsZWFzZSB3YWl0IG1vbWVudGFyaWx5IHdoaWxlIHRoaXMgcHJvY2VzcyBjb21wbGV0ZXMuLi4nOyBASW5wdXQoKSBkaWFsb2dEYXRhID0ge1xuICAgICdsb2dvJzogJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uLTk2eDk2LnBuZycsXG4gICAgJ2xvZ29DdXN0b21DbGFzcyc6ICcnLFxuICAgICdsb2dvSWQnOiAnbG9hZGVySWNvbicsXG4gICAgJ2ljb24nOiAnZmEgZmEtc3Bpbm5lciBmYS1zcGluJyxcbiAgICAnaWNvbkN1c3RvbUNsYXNzJzogJ2ljb24nLFxuICAgICdpY29uSWQnOiAncXVlc3Rpb25JY29uJyxcbiAgICAndGl0bGVPbmUnOiAncGxlYXNlIHdhaXQuLi4nLFxuICAgICd0aXRsZU9uZUlkJzogJ2NvbmZpcm1hdGlvbicsXG4gICAgJ3RpdGxlT25lQ3VzdG9tQ2xhc3MnOiAnJyxcbiAgICAndGl0bGVUd28nOiAnVGhlIGRvY3VtZW50IHlvdSBhcmUgZG93bmxvYWRpbmcgaXMgYmVpbmcgYXV0aGVudGljYXRlZCBhZ2FpbnN0IHRoZSBTVUtVIEJsb2NrY2hhaW4uJyxcbiAgICAndGl0bGVUd29JZCc6ICcnLFxuICAgICd0aXRsZVR3b0N1c3RvbUNsYXNzJzogJycsXG4gICAgJ3RpdGxlVGhyZWUnOiAnUGxlYXNlIHdhaXQgbW9tZW50YXJpbHkgd2hpbGUgdGhpcyBwcm9jZXNzIGNvbXBsZXRlcy4uLicsXG4gICAgJ3RpdGxlVGhyZWVJZCc6ICcnLFxuICAgICd0aXRsZVRocmVlQ3VzdG9tQ2xhc3MnOiAnJyxcbiAgICAndGl0bGVCb3hDdXN0b21DbGFzcyc6ICcnXG4gIH07XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dDdXN0b21SZWY6IE1hdERpYWxvZ1JlZjxTdWt1TG9hZGVyQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coJ0N1cnJlbnQgZGF0YScsIHRoaXMuZGF0YSk7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5kYXRhKSkge1xuICAgICAgaWYgKHRoaXMuZGF0YVtrZXldKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YVtrZXldLCBrZXkpO1xuICAgICAgICB0aGlzLmRpYWxvZ0RhdGFba2V5XSA9IHRoaXMuZGF0YVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnZGlhbG9nRGF0YScsIHRoaXMuZGlhbG9nRGF0YSk7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5kaWFsb2dDdXN0b21SZWYuY2xvc2UoZmFsc2UpO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIHRoaXMuZGlhbG9nQ3VzdG9tUmVmLmNsb3NlKHRydWUpO1xuICB9XG59XG4iXX0=