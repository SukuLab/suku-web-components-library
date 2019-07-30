/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuFundingSourceComponent {
    constructor() {
        this.fundingDetails = [];
        this.iconClass = 'icon';
        this.fundingSourceLabel = {
            labelOne: 'Funding Sources',
            labelOneId: 'fundingSources',
            labelTwo: 'Default Funding Sources:',
            labelTwoId: 'defaultFundingSources:',
            labelThree: 'Current Funding Sources',
            labelThreeId: 'currentFundingSources',
            labelFour: 'No Funding Source Added!',
            labelFourId: 'noFundingSourceAdded!',
            labelFive: 'Default',
            labelFiveId: 'Default'
        };
        this.fundingSourceWidgetLabel = {
            labelOne: 'ACH Wallet',
            labelOneId: 'ACHWallet',
            labelTwo: 'Balance:',
            labelTwoId: 'Balance:'
        };
        this.fundingSourceWidgetButtonLabel = {
            labelOne: 'Remove',
            labelOneId: 'Remove',
            labelTwo: 'Make Default:',
            labelTwoId: 'Make Default:',
            labelThree: 'Transfer Balance',
            labelThreeId: 'Make Default:'
        };
        this.contentOne = '';
        /* output--actions */
        this.removeDefault = new EventEmitter();
        this.makeDefaultAction = new EventEmitter();
        this.removeSourceAction = new EventEmitter();
        this.transferFundAction = new EventEmitter();
        this.addSource = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SukuFundingSourceComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-funding-source',
                template: "<div class=\"d-flex col pt-5 p-0\">\r\n  <div class=\"col-sm-12 p-0\">\r\n    <!-- loader -start -->\r\n    <div class=\"col d-flex Rectangle-2 pt-5 mt-lg-4 mb-3\" *ngIf=\"!(fundingDetails?.length > 0)\">\r\n      <div class=\"col-sm-12 p-3\">\r\n        <div class=\"col-sm-12 d-flex justify-content-center\">\r\n          <mat-spinner diameter=\"55\"></mat-spinner>\r\n        </div>\r\n        <div class=\"mt-4 pb-3 col-sm-12 text-center\">\r\n          <span id=\"loading\">Please wait...</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- loader -end -->\r\n    <!-- fs-header-start -->\r\n    <div class=\"col-sm-12 pt-2 pb-2 funding-box-widget p-0\" *ngIf=\"(fundingDetails?.length > 0)\">\r\n      <div class=\"col-sm-12 pt-3 pb-3\">\r\n        <div class=\"col\">\r\n          <div class=\"col-sm-12\">\r\n            <h1 class=\"title\">{{fundingSourceLabel?.labelOne}}<span class=\"pl-3 c-pointer\"\r\n                id=\"{{fundingSourceLabel?.labelOneId}}\" (click)=\"addSource.emit()\">\r\n                <img src=\"../assets/images/plus_circle.png\" [class]=\"iconClass\" class=\"icon\" width=\"25px\" height=\"25px\"\r\n                  alt=\"plus-icon\">\r\n              </span>\r\n            </h1>\r\n          </div>\r\n          <div class=\"col-sm-12\">\r\n            <h2>{{fundingSourceLabel?.labelTwo}}<span class=\"pl-lg-2 pop-light\"\r\n                id=\"{{fundingSourceLabel?.labelTwoId}}\">{{contentOne || 'N/A'}}</span></h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- fs-header-end -->\r\n    <div class=\"col-sm-12 box-shadows d-flex p-0\" *ngIf=\"(fundingDetails?.length > 0)\">\r\n      <div class=\"row flex\">\r\n        <div class=\"col\">\r\n          <div class=\"col-sm-12 pt-4 pl-lg-5 pr-lg-0 pb-2\">\r\n            <p class=\"sub-title pt-3 pl-5\" [style.font-weight]=\"700\" *ngIf=\"contentOne\"\r\n              id=\"{{fundingSourceLabel?.labelThreeId}}\">\r\n              {{fundingSourceLabel?.labelThree}}\r\n            </p>\r\n            <p class=\"sub-title pt-3 pl-5\" [style.font-weight]=\"700\" *ngIf=\"!contentOne\"\r\n              id=\"{{fundingSourceLabel?.labelFourId}}\">\r\n              {{fundingSourceLabel?.labelFour}}\r\n            </p>\r\n          </div>\r\n          <div class=\"col-sm-12 pl-lg-5 pr-lg-5 pb-5\">\r\n            <div class=\"col\">\r\n              <div class=\"col-sm-12 pl-lg-5 pr-lg-5\">\r\n                <div class=\"col-lg-4 col-sm-12 pt-4 pl-lg-0 pr-lg-0\" *ngIf=\"contentOne\">\r\n                  <p class=\"pop f16 text-center mb-0\" id=\"{{fundingSourceLabel?.labelFiveId}}\">\r\n                    {{fundingSourceLabel?.labelFive}}\r\n                  </p>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <!-- funding-source-widget -->\r\n                  <div class=\"col-sm-12 col-lg-4 pl-lg-5 pr-lg-3 pb-3 pt-3 p-xs-0 mb-4 custom-width\"\r\n                    *ngFor=\"let item of fundingDetails; let in = index;\">\r\n                    <div class=\"col pr-lg-0 pl-lg-1 p-xs-0\">\r\n                      <div class=\"card pl-3\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"col-sm-12\">\r\n                            <p class=\"text-white mb-1 source-title\" *ngIf=\"!item?.balance\">{{item?.name || 'N/A'}}</p>\r\n                            <p class=\"text-white mb-1 source-title\" *ngIf=\"item?.balance\">\r\n                              {{fundingSourceWidgetLabel?.labelOne}}</p>\r\n                            <p class=\"text-white content-font\" *ngIf=\"!item?.balance\">\r\n                              XXXXXX{{ (item?.id) ? (item.id | slice:-4) : 'N/A'}}\r\n                            </p>\r\n                            <p class=\"text-white\" *ngIf=\"item?.balance\"><span\r\n                                class=\"pop f16\">{{fundingSourceWidgetLabel?.labelTwo}}</span>\r\n                              <span class=\"content-font\"> ${{item?.balance}}</span></p>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                          <!-- remove-fs-action -->\r\n                          <div class=\"col pl-5 pr-5 pb-3\" *ngIf=\"item?.defaultAccount\">\r\n                            <button type=\"button\" class=\"btn-lg btn-block btn-default\"\r\n                              (click)=\"removeSourceAction.emit(item);\"\r\n                              id=\"{{fundingSourceWidgetButtonLabel?.labelOneId}}\">{{fundingSourceWidgetButtonLabel?.labelOne}}</button>\r\n                          </div>\r\n                          <!-- default-fs-action -->\r\n                          <div class=\"col pl-5 pr-5 pb-3\" *ngIf=\"!item?.defaultAccount && !item?.balance\">\r\n                            <button type=\"button\" class=\"btn-lg btn-block btn-default\"\r\n                              (click)=\"makeDefaultAction.emit(item);\"\r\n                              id=\"{{fundingSourceWidgetButtonLabel?.labelTwoId}}\">{{fundingSourceWidgetButtonLabel?.labelTwo}}</button>\r\n                          </div>\r\n                          <!-- transfer-balance-action -->\r\n                          <div class=\"col pl-5 pr-5 pb-3\" *ngIf=\"item?.balance\">\r\n                            <button type=\"button\" class=\"btn-lg btn-block\"\r\n                              [ngClass]=\"{'btn-default': item?.defaultAccount, 'btn': !item?.defaultAccount}\"\r\n                              (click)=\"transferFundAction.emit();\"\r\n                              id=\"{{fundingSourceWidgetButtonLabel?.labelThreeId}}\">{{fundingSourceWidgetButtonLabel?.labelThree}}</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- fs-widget-end -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);.btn{background-color:#fff;font-size:12px!important;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;background-color:#a7bf2e}.btn:focus{border:2px solid #a7bf2e;background-color:#a7bf2e;outline:0!important;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border-color:var(--suku-secondary-border-color)!important;font-size:12px!important;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.title{color:#fafaf8;font-size:28px;font-family:var(--suku-primary-font);font-weight:200!important}.funding-box-widget{width:100%;float:left;background:#2f2e2e;border-left:5px solid var(--suku-primary-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}.card-body{padding:0}.card{background:#2f2e2e;border-left:5px solid var(--suku-primary-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:20px 5px 0 15px;margin:0;color:#fff;height:160px}.card::after{background:linear-gradient(to right,rgba(255,255,255,0) 0,rgba(255,255,255,0) 77%,rgba(255,255,255,0) 92%,rgba(255,255,255,0) 100%);left:50px}.card-footer{padding:.2rem 1.25rem;background-color:#2f2e2e!important;border-top:none!important}.icon:hover{vertical-align:middle;border-style:none;width:26px;box-shadow:2px 2px 5px 0 rgba(0,0,0,.25);box-shadow:2px 2px 5px 0 #000;border-radius:27px;height:26px}h1{color:#fafaf8;font-size:24px;font-family:var(--suku-primary-font);font-weight:200!important}h2{color:#ccc;font-size:15px;font-family:var(--suku-primary-font);font-weight:600;letter-spacing:.15px}.source-title{font-family:var(--suku-primary-font);font-weight:700;font-size:15px!important}.pop-light{font-family:var(--suku-primary-font);font-weight:200!important;font-size:16px}.c-pointer{cursor:pointer;text-transform:capitalize}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:#fff}.pop{font-family:var(--suku-primary-font);font-weight:800}.sub-title{font-family:var(--suku-primary-font);font-weight:700;font-size:22px!important}.flex{margin-left:0;flex:0 0 100%;max-width:100%}.f16{font-size:16px}.content-font{font-family:var(--suku-primary-font);font-weight:200!important}.btn-default{border:1px solid #e9e9e900;border-radius:28px 76px 63px;background-color:#e9e9e9bd;color:#000;padding:.675rem .75rem;font-family:var(--suku-primary-font);font-weight:700}.btn-default:hover{border-radius:28px 76px 63px;padding:.675rem .75rem;font-size:12px;font-family:var(--suku-primary-font);font-weight:700;color:#fff}.btn{border:solid 1px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:var(--suku-primary-color);color:#fff;padding:.675rem .75rem;font-family:var(--suku-primary-font);font-weight:600}.btn:hover{border:solid 1px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:var(--suku-primary-color);color:#2f2e2e}.btn:focus{border:solid 1px var(--suku-primary-color);border-radius:28px 76px 63px;background-color:var(--suku-primary-color);color:#000}.icon-size{font-size:74px!important;color:#a6bf2e}@media only screen and (max-width:768px){.content-font,.source-title{font-size:14px!important}.sub-title{font-size:18px!important}}@media only screen and (max-width:568px){.pl-xs-0{padding-left:0!important}.pr-xs-0{padding-right:0!important}.p-xs-0{padding:0!important}}@media only screen and (max-width:1100px){.custom-width{max-width:100%!important;flex:0 0 50%}}@media only screen and (max-width:992px){.custom-width{flex:0 0 100%;max-width:100%}}"]
            }] }
];
/** @nocollapse */
SukuFundingSourceComponent.ctorParameters = () => [];
SukuFundingSourceComponent.propDecorators = {
    fundingDetails: [{ type: Input }],
    iconClass: [{ type: Input }],
    fundingSourceLabel: [{ type: Input }],
    fundingSourceWidgetLabel: [{ type: Input }],
    fundingSourceWidgetButtonLabel: [{ type: Input }],
    contentOne: [{ type: Input }],
    labelOneId: [{ type: Input }],
    labelOneSize: [{ type: Input }],
    labelOneColor: [{ type: Input }],
    labelOneWeight: [{ type: Input }],
    labelOneCustomClass: [{ type: Input }],
    removeDefault: [{ type: Output }],
    makeDefaultAction: [{ type: Output }],
    removeSourceAction: [{ type: Output }],
    transferFundAction: [{ type: Output }],
    addSource: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuFundingSourceComponent.prototype.fundingDetails;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.iconClass;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.fundingSourceLabel;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.fundingSourceWidgetLabel;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.fundingSourceWidgetButtonLabel;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.contentOne;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.labelOneId;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.labelOneSize;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.labelOneColor;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.labelOneWeight;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.labelOneCustomClass;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.removeDefault;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.makeDefaultAction;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.removeSourceAction;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.transferFundAction;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.addSource;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mdW5kaW5nLXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1mdW5kaW5nLXNvdXJjZS9zdWt1LWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sMEJBQTBCO0lBK0N0QztRQTlDUyxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixjQUFTLEdBQUcsTUFBTSxDQUFDO1FBRTVCLHVCQUFrQixHQUFHO1lBQ3BCLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFVBQVUsRUFBRSx3QkFBd0I7WUFDcEMsVUFBVSxFQUFFLHlCQUF5QjtZQUNyQyxZQUFZLEVBQUUsdUJBQXVCO1lBQ3JDLFNBQVMsRUFBRSwwQkFBMEI7WUFDckMsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsU0FBUztZQUNwQixXQUFXLEVBQUUsU0FBUztTQUN0QixDQUFDO1FBRUYsNkJBQXdCLEdBQUc7WUFDMUIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsVUFBVSxFQUFFLFdBQVc7WUFDdkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsVUFBVSxFQUFFLFVBQVU7U0FDdEIsQ0FBQztRQUVGLG1DQUE4QixHQUFHO1lBQ2hDLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFVBQVUsRUFBRSxlQUFlO1lBQzNCLFVBQVUsRUFBRSxrQkFBa0I7WUFDOUIsWUFBWSxFQUFFLGVBQWU7U0FDN0IsQ0FBQztRQUNPLGVBQVUsR0FBRyxFQUFFLENBQUM7O1FBU2Ysa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4Qyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTFCLENBQUM7Ozs7SUFDaEIsUUFBUSxLQUFJLENBQUM7OztZQXJEYixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IscStMQUFtRDs7YUFFbkQ7Ozs7OzZCQUVDLEtBQUs7d0JBQ0wsS0FBSztpQ0FDTCxLQUFLO3VDQWFMLEtBQUs7NkNBT0wsS0FBSzt5QkFTTCxLQUFLO3lCQUVMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7a0NBQ0wsS0FBSzs0QkFHTCxNQUFNO2dDQUNOLE1BQU07aUNBQ04sTUFBTTtpQ0FDTixNQUFNO3dCQUNOLE1BQU07Ozs7SUE1Q1Asb0RBQTZCOztJQUM3QiwrQ0FBNEI7O0lBQzVCLHdEQVlFOztJQUNGLDhEQU1FOztJQUNGLG9FQVFFOztJQUNGLGdEQUF5Qjs7SUFFekIsZ0RBQW9COztJQUNwQixrREFBc0I7O0lBQ3RCLG1EQUF1Qjs7SUFDdkIsb0RBQXdCOztJQUN4Qix5REFBNkI7O0lBRzdCLG1EQUE2Qzs7SUFDN0MsdURBQWlEOztJQUNqRCx3REFBa0Q7O0lBQ2xELHdEQUFrRDs7SUFDbEQsK0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzdWt1LWZ1bmRpbmctc291cmNlJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS1mdW5kaW5nLXNvdXJjZS5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LnNjc3MnIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VGdW5kaW5nU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBmdW5kaW5nRGV0YWlscyA9IFtdO1xyXG5cdEBJbnB1dCgpIGljb25DbGFzcyA9ICdpY29uJztcclxuXHRASW5wdXQoKVxyXG5cdGZ1bmRpbmdTb3VyY2VMYWJlbCA9IHtcclxuXHRcdGxhYmVsT25lOiAnRnVuZGluZyBTb3VyY2VzJyxcclxuXHRcdGxhYmVsT25lSWQ6ICdmdW5kaW5nU291cmNlcycsXHJcblx0XHRsYWJlbFR3bzogJ0RlZmF1bHQgRnVuZGluZyBTb3VyY2VzOicsXHJcblx0XHRsYWJlbFR3b0lkOiAnZGVmYXVsdEZ1bmRpbmdTb3VyY2VzOicsXHJcblx0XHRsYWJlbFRocmVlOiAnQ3VycmVudCBGdW5kaW5nIFNvdXJjZXMnLFxyXG5cdFx0bGFiZWxUaHJlZUlkOiAnY3VycmVudEZ1bmRpbmdTb3VyY2VzJyxcclxuXHRcdGxhYmVsRm91cjogJ05vIEZ1bmRpbmcgU291cmNlIEFkZGVkIScsXHJcblx0XHRsYWJlbEZvdXJJZDogJ25vRnVuZGluZ1NvdXJjZUFkZGVkIScsXHJcblx0XHRsYWJlbEZpdmU6ICdEZWZhdWx0JyxcclxuXHRcdGxhYmVsRml2ZUlkOiAnRGVmYXVsdCdcclxuXHR9O1xyXG5cdEBJbnB1dCgpXHJcblx0ZnVuZGluZ1NvdXJjZVdpZGdldExhYmVsID0ge1xyXG5cdFx0bGFiZWxPbmU6ICdBQ0ggV2FsbGV0JyxcclxuXHRcdGxhYmVsT25lSWQ6ICdBQ0hXYWxsZXQnLFxyXG5cdFx0bGFiZWxUd286ICdCYWxhbmNlOicsXHJcblx0XHRsYWJlbFR3b0lkOiAnQmFsYW5jZTonXHJcblx0fTtcclxuXHRASW5wdXQoKVxyXG5cdGZ1bmRpbmdTb3VyY2VXaWRnZXRCdXR0b25MYWJlbCA9IHtcclxuXHRcdGxhYmVsT25lOiAnUmVtb3ZlJyxcclxuXHRcdGxhYmVsT25lSWQ6ICdSZW1vdmUnLFxyXG5cdFx0bGFiZWxUd286ICdNYWtlIERlZmF1bHQ6JyxcclxuXHRcdGxhYmVsVHdvSWQ6ICdNYWtlIERlZmF1bHQ6JyxcclxuXHRcdGxhYmVsVGhyZWU6ICdUcmFuc2ZlciBCYWxhbmNlJyxcclxuXHRcdGxhYmVsVGhyZWVJZDogJ01ha2UgRGVmYXVsdDonXHJcblx0fTtcclxuXHRASW5wdXQoKSBjb250ZW50T25lID0gJyc7XHJcblxyXG5cdEBJbnB1dCgpIGxhYmVsT25lSWQ7XHJcblx0QElucHV0KCkgbGFiZWxPbmVTaXplO1xyXG5cdEBJbnB1dCgpIGxhYmVsT25lQ29sb3I7XHJcblx0QElucHV0KCkgbGFiZWxPbmVXZWlnaHQ7XHJcblx0QElucHV0KCkgbGFiZWxPbmVDdXN0b21DbGFzcztcclxuXHJcblx0Lyogb3V0cHV0LS1hY3Rpb25zICovXHJcblx0QE91dHB1dCgpIHJlbW92ZURlZmF1bHQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIG1ha2VEZWZhdWx0QWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSByZW1vdmVTb3VyY2VBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIHRyYW5zZmVyRnVuZEFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgYWRkU291cmNlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiJdfQ==