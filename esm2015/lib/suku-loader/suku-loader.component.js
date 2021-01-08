/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-loader/suku-loader.component.ts
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
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.5rem 1.5rem;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.dialog-title-box{width:100%;float:left;background-image:linear-gradient(to bottom,rgba(101,102,243,.06),rgba(101,102,243,.06)),radial-gradient(circle at 50% 0,#3a3a3a,#000);border-radius:0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.title{font-family:var(--suku-primary-font);color:var(--suku-text-label-two);font-size:20px;font-weight:300}.icon{font-size:50px;color:var(--suku-primary-color)}.width100{width:100%}.maincontent{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);letter-spacing:.4px;font-weight:700}.subcontent{font-family:var(--suku-primary-font);font-size:var(--suku-font-size-5);letter-spacing:.4px;font-weight:300}::ng-deep mat-dialog-container{padding:0!important;overflow:hidden!important}:host ::ng-deep mat-dialog-content{max-height:91%!important;overflow-y:none!important;margin:0!important;height:100%!important}:host ::ng-deep mat-dialog-actions{margin:5px 10px!important}/deep/div ::-webkit-scrollbar{width:4px!important}/deep/div ::-webkit-scrollbar-track{background:rgba(0,0,0,.1)}/deep/div ::-webkit-scrollbar-thumb{background:rgba(0,0,0,.8)}.spinnerStyle{font-size:50px;padding-top:20px;padding-bottom:20px}.w-70{min-width:70%}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1sb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3VrdS13ZWJjb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N1a3UtbG9hZGVyL3N1a3UtbG9hZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBT2xFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBc0I5QixZQUFtQixlQUFrRCxFQUNuQyxJQUFTO1FBRHhCLG9CQUFlLEdBQWYsZUFBZSxDQUFtQztRQUNuQyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBckJqQixtQkFBYyxHQUFHLGdCQUFnQixDQUFDO1FBQy9CLHNCQUFpQixHQUFHLHNGQUFzRixDQUFDO1FBQzlHLG1CQUFjLEdBQUcseURBQXlELENBQUM7UUFBVSxlQUFVLEdBQUc7WUFDMUgsTUFBTSxFQUFFLHNDQUFzQztZQUM5QyxpQkFBaUIsRUFBRSxFQUFFO1lBQ3JCLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLE1BQU0sRUFBRSx1QkFBdUI7WUFDL0IsaUJBQWlCLEVBQUUsTUFBTTtZQUN6QixRQUFRLEVBQUUsY0FBYztZQUN4QixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFlBQVksRUFBRSxjQUFjO1lBQzVCLHFCQUFxQixFQUFFLEVBQUU7WUFDekIsVUFBVSxFQUFFLHNGQUFzRjtZQUNsRyxZQUFZLEVBQUUsRUFBRTtZQUNoQixxQkFBcUIsRUFBRSxFQUFFO1lBQ3pCLFlBQVksRUFBRSx5REFBeUQ7WUFDdkUsY0FBYyxFQUFFLEVBQUU7WUFDbEIsdUJBQXVCLEVBQUUsRUFBRTtZQUMzQixxQkFBcUIsRUFBRSxFQUFFO1NBQzFCLENBQUM7SUFFNkMsQ0FBQzs7OztJQUVoRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QztTQUNGO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QiwrcERBQTJDOzthQUU1Qzs7OztZQU55QixZQUFZOzRDQThCakMsTUFBTSxTQUFDLGVBQWU7Ozs2QkFyQnhCLEtBQUssU0FBQyxpQkFBaUI7Z0NBQ3ZCLEtBQUssU0FBQyxvQkFBb0I7NkJBQzFCLEtBQUssU0FBQyxpQkFBaUI7eUJBQStFLEtBQUs7Ozs7SUFGNUcsNkNBQTREOztJQUM1RCxnREFBd0k7O0lBQ3hJLDZDQUFxRzs7SUFBQyx5Q0FpQnBHOztJQUNVLDhDQUF5RDs7SUFDbkUsbUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LWxvYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWxvYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtbG9hZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdUxvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCd3YWl0aW5nLW1lc3NhZ2UnKSB3YWl0aW5nTWVzc2FnZSA9ICdwbGVhc2Ugd2FpdC4uLic7XG4gIEBJbnB1dCgnbG9kaW5nLWRlc2NyaXB0aW9uJykgbG9kaW5nRGVzY3JpcHRpb24gPSAnVGhlIGRvY3VtZW50IHlvdSBhcmUgZG93bmxvYWRpbmcgaXMgYmVpbmcgYXV0aGVudGljYXRlZCBhZ2FpbnN0IHRoZSBTVUtVIEJsb2NrY2hhaW4uJztcbiAgQElucHV0KCdsb2FkaW5nLW1lc3NhZ2UnKSBsb2FkaW5nTWVzc2FnZSA9ICdQbGVhc2Ugd2FpdCBtb21lbnRhcmlseSB3aGlsZSB0aGlzIHByb2Nlc3MgY29tcGxldGVzLi4uJzsgQElucHV0KCkgZGlhbG9nRGF0YSA9IHtcbiAgICAnbG9nbyc6ICcuLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbi05Nng5Ni5wbmcnLFxuICAgICdsb2dvQ3VzdG9tQ2xhc3MnOiAnJyxcbiAgICAnbG9nb0lkJzogJ2xvYWRlckljb24nLFxuICAgICdpY29uJzogJ2ZhIGZhLXNwaW5uZXIgZmEtc3BpbicsXG4gICAgJ2ljb25DdXN0b21DbGFzcyc6ICdpY29uJyxcbiAgICAnaWNvbklkJzogJ3F1ZXN0aW9uSWNvbicsXG4gICAgJ3RpdGxlT25lJzogJ3BsZWFzZSB3YWl0Li4uJyxcbiAgICAndGl0bGVPbmVJZCc6ICdjb25maXJtYXRpb24nLFxuICAgICd0aXRsZU9uZUN1c3RvbUNsYXNzJzogJycsXG4gICAgJ3RpdGxlVHdvJzogJ1RoZSBkb2N1bWVudCB5b3UgYXJlIGRvd25sb2FkaW5nIGlzIGJlaW5nIGF1dGhlbnRpY2F0ZWQgYWdhaW5zdCB0aGUgU1VLVSBCbG9ja2NoYWluLicsXG4gICAgJ3RpdGxlVHdvSWQnOiAnJyxcbiAgICAndGl0bGVUd29DdXN0b21DbGFzcyc6ICcnLFxuICAgICd0aXRsZVRocmVlJzogJ1BsZWFzZSB3YWl0IG1vbWVudGFyaWx5IHdoaWxlIHRoaXMgcHJvY2VzcyBjb21wbGV0ZXMuLi4nLFxuICAgICd0aXRsZVRocmVlSWQnOiAnJyxcbiAgICAndGl0bGVUaHJlZUN1c3RvbUNsYXNzJzogJycsXG4gICAgJ3RpdGxlQm94Q3VzdG9tQ2xhc3MnOiAnJ1xuICB9O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nQ3VzdG9tUmVmOiBNYXREaWFsb2dSZWY8U3VrdUxvYWRlckNvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IGRhdGEnLCB0aGlzLmRhdGEpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkpIHtcbiAgICAgIGlmICh0aGlzLmRhdGFba2V5XSkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFba2V5XSwga2V5KTtcbiAgICAgICAgdGhpcy5kaWFsb2dEYXRhW2tleV0gPSB0aGlzLmRhdGFba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2RpYWxvZ0RhdGEnLCB0aGlzLmRpYWxvZ0RhdGEpO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuZGlhbG9nQ3VzdG9tUmVmLmNsb3NlKGZhbHNlKTtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICB0aGlzLmRpYWxvZ0N1c3RvbVJlZi5jbG9zZSh0cnVlKTtcbiAgfVxufVxuIl19