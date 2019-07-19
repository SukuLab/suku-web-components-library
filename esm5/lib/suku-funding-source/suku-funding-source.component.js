/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuFundingSourceComponent = /** @class */ (function () {
    function SukuFundingSourceComponent() {
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
    SukuFundingSourceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SukuFundingSourceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-funding-source',
                    template: "<div class=\"d-flex col pt-5 p-0\">\r\n  <div class=\"col-sm-12 p-0\">\r\n    <!-- loader -start -->\r\n    <div class=\"col d-flex Rectangle-2 pt-5 mt-lg-4 mb-3\" *ngIf=\"!(fundingDetails?.length > 0)\">\r\n      <div class=\"col-sm-12 p-3\">\r\n        <div class=\"col-sm-12 d-flex justify-content-center\">\r\n          <mat-spinner diameter=\"55\"></mat-spinner>\r\n        </div>\r\n        <div class=\"mt-4 pb-3 col-sm-12 text-center\">\r\n          <span id=\"loading\">Please wait...</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- loader -end -->\r\n    <!-- fs-header-start -->\r\n    <div class=\"col-sm-12 pt-2 pb-2 funding-box-widget p-0\" *ngIf=\"(fundingDetails?.length > 0)\">\r\n      <div class=\"col-sm-12 pt-3 pb-3\">\r\n        <div class=\"col\">\r\n          <div class=\"col-sm-12\">\r\n            <h1 class=\"title\">{{fundingSourceLabel?.labelOne}}<span class=\"pl-3 c-pointer\"\r\n                id=\"{{fundingSourceLabel?.labelOneId}}\" (click)=\"addSource.emit()\">\r\n                <img src=\"../assets/images/plus_circle.png\" [class]=\"iconClass\" class=\"icon\" width=\"25px\" height=\"25px\"\r\n                  alt=\"plus-icon\">\r\n              </span>\r\n            </h1>\r\n          </div>\r\n          <div class=\"col-sm-12\">\r\n            <h2>{{fundingSourceLabel?.labelTwo}}<span class=\"pl-lg-2 pop-light\"\r\n                id=\"{{fundingSourceLabel?.labelTwoId}}\">{{contentOne || 'N/A'}}</span></h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- fs-header-end -->\r\n    <div class=\"col-sm-12 box-shadows d-flex p-0\" *ngIf=\"(fundingDetails?.length > 0)\">\r\n      <div class=\"row flex\">\r\n        <div class=\"col\">\r\n          <div class=\"col-sm-12 pt-4 pl-lg-5 pr-lg-0 pb-2\">\r\n            <p class=\"sub-title pt-3 pl-5\" [style.font-weight]=\"700\" *ngIf=\"contentOne\"\r\n              id=\"{{fundingSourceLabel?.labelThreeId}}\">\r\n              {{fundingSourceLabel?.labelThree}}\r\n            </p>\r\n            <p class=\"sub-title pt-3 pl-5\" [style.font-weight]=\"700\" *ngIf=\"!contentOne\"\r\n              id=\"{{fundingSourceLabel?.labelFourId}}\">\r\n              {{fundingSourceLabel?.labelFour}}\r\n            </p>\r\n          </div>\r\n          <div class=\"col-sm-12 pl-lg-5 pr-lg-5 pb-5\">\r\n            <div class=\"col\">\r\n              <div class=\"col-sm-12 pl-lg-5 pr-lg-5\">\r\n                <div class=\"col-lg-4 col-sm-12 pt-4 pl-lg-0 pr-lg-0\" *ngIf=\"contentOne\">\r\n                  <p class=\"pop f16 text-center mb-0\" id=\"{{fundingSourceLabel?.labelFiveId}}\">\r\n                    {{fundingSourceLabel?.labelFive}}\r\n                  </p>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <!-- funding-source-widget -->\r\n                  <div class=\"col-sm-12 col-lg-4 pl-lg-5 pr-lg-3 pb-3 pt-3 p-xs-0 mb-4 custom-width\"\r\n                    *ngFor=\"let item of fundingDetails; let in = index;\">\r\n                    <div class=\"col pr-lg-0 pl-lg-1 p-xs-0\">\r\n                      <div class=\"card pl-3\">\r\n                        <div class=\"card-body\">\r\n                          <div class=\"col-sm-12\">\r\n                            <p class=\"text-white mb-1 source-title\" *ngIf=\"!item?.balance\">{{item?.name || 'N/A'}}</p>\r\n                            <p class=\"text-white mb-1 source-title\" *ngIf=\"item?.balance\">\r\n                              {{fundingSourceWidgetLabel?.labelOne}}</p>\r\n                            <p class=\"text-white content-font\" *ngIf=\"!item?.balance\">\r\n                              XXXXXX{{ (item?.id) ? (item.id | slice:-4) : 'N/A'}}\r\n                            </p>\r\n                            <p class=\"text-white\" *ngIf=\"item?.balance\"><span\r\n                                class=\"pop f16\">{{fundingSourceWidgetLabel?.labelTwo}}</span>\r\n                              <span class=\"content-font\"> ${{item?.balance}}</span></p>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                          <!-- remove-fs-action -->\r\n                          <div class=\"col pl-5 pr-5 pb-3\" *ngIf=\"item?.defaultAccount\">\r\n                            <button type=\"button\" class=\"btn-lg btn-block btn-default\"\r\n                              (click)=\"removeSourceAction.emit(item);\"\r\n                              id=\"{{fundingSourceWidgetButtonLabel?.labelOneId}}\">{{fundingSourceWidgetButtonLabel?.labelOne}}</button>\r\n                          </div>\r\n                          <!-- default-fs-action -->\r\n                          <div class=\"col pl-5 pr-5 pb-3\" *ngIf=\"!item?.defaultAccount && !item?.balance\">\r\n                            <button type=\"button\" class=\"btn-lg btn-block btn-default\"\r\n                              (click)=\"makeDefaultAction.emit(item);\"\r\n                              id=\"{{fundingSourceWidgetButtonLabel?.labelTwoId}}\">{{fundingSourceWidgetButtonLabel?.labelTwo}}</button>\r\n                          </div>\r\n                          <!-- transfer-balance-action -->\r\n                          <div class=\"col pl-5 pr-5 pb-3\" *ngIf=\"item?.balance\">\r\n                            <button type=\"button\" class=\"btn-lg btn-block\"\r\n                              [ngClass]=\"{'btn-default': item?.defaultAccount, 'btn': !item?.defaultAccount}\"\r\n                              (click)=\"transferFundAction.emit();\"\r\n                              id=\"{{fundingSourceWidgetButtonLabel?.labelThreeId}}\">{{fundingSourceWidgetButtonLabel?.labelThree}}</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- fs-widget-end -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);.title{color:#fafaf8;font-size:28px;font-family:Poppins,sans-serif!important;font-weight:200!important}.funding-box-widget{width:100%;float:left;background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:10px 5px 0 15px;margin:0}.card-body{padding:0}.card{background:#2f2e2e;border-left:5px solid #a7bf2e;border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08);padding:20px 5px 0 15px;margin:0;color:#fff;height:160px}.card::after{background:linear-gradient(to right,rgba(255,255,255,0) 0,rgba(255,255,255,0) 77%,rgba(255,255,255,0) 92%,rgba(255,255,255,0) 100%);left:50px}.card-footer{padding:.2rem 1.25rem;background-color:#2f2e2e!important;border-top:none!important}.icon:hover{vertical-align:middle;border-style:none;width:26px;box-shadow:2px 2px 5px 0 rgba(0,0,0,.25);box-shadow:2px 2px 5px 0 #000;border-radius:27px;height:26px}h1{color:#fafaf8;font-size:24px;font-family:Poppins,sans-serif!important;font-weight:200!important}h2{color:#ccc;font-size:15px;font-family:Poppins,sans-serif!important;font-weight:600;letter-spacing:.15px}.source-title{font-family:Poppins,sans-serif!important;font-weight:700;font-size:15px!important}.pop-light{font-family:Poppins,sans-serif!important;font-weight:200!important;font-size:16px}.c-pointer{cursor:pointer;text-transform:capitalize}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:#fff}.pop{font-family:Poppins,sans-serif!important;font-weight:800}.sub-title{font-family:Poppins,sans-serif!important;font-weight:700;font-size:22px!important}.flex{margin-left:0;flex:0 0 100%;max-width:100%}.f16{font-size:16px}.content-font{font-family:Poppins,sans-serif!important;font-weight:200!important}.btn-default{border:1px solid #e9e9e900;border-radius:28px 76px 63px;background-color:#e9e9e9bd;color:#000;padding:.675rem .75rem;font-size:12px;font-family:Poppins,sans-serif!important;font-weight:700}.btn-default:hover{border-radius:28px 76px 63px;padding:.675rem .75rem;font-size:12px;font-family:Poppins,sans-serif!important;font-weight:700;color:#fff}.btn{border:1px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;padding:.675rem .75rem;font-size:12px;font-family:Poppins,sans-serif!important;font-weight:600}.btn:hover{border:1px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#2f2e2e}.btn:focus{border:1px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#000}.icon-size{font-size:74px!important;color:#a6bf2e}@media only screen and (max-width:768px){.content-font,.source-title{font-size:14px!important}.sub-title{font-size:18px!important}}@media only screen and (max-width:568px){.pl-xs-0{padding-left:0!important}.pr-xs-0{padding-right:0!important}.p-xs-0{padding:0!important}}@media only screen and (max-width:1100px){.custom-width{max-width:100%!important;flex:0 0 50%}}@media only screen and (max-width:992px){.custom-width{flex:0 0 100%;max-width:100%}}"]
                }] }
    ];
    /** @nocollapse */
    SukuFundingSourceComponent.ctorParameters = function () { return []; };
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
    return SukuFundingSourceComponent;
}());
export { SukuFundingSourceComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mdW5kaW5nLXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1mdW5kaW5nLXNvdXJjZS9zdWt1LWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQW9EQztRQTlDUyxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixjQUFTLEdBQUcsTUFBTSxDQUFDO1FBRTVCLHVCQUFrQixHQUFHO1lBQ3BCLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFVBQVUsRUFBRSx3QkFBd0I7WUFDcEMsVUFBVSxFQUFFLHlCQUF5QjtZQUNyQyxZQUFZLEVBQUUsdUJBQXVCO1lBQ3JDLFNBQVMsRUFBRSwwQkFBMEI7WUFDckMsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsU0FBUztZQUNwQixXQUFXLEVBQUUsU0FBUztTQUN0QixDQUFDO1FBRUYsNkJBQXdCLEdBQUc7WUFDMUIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsVUFBVSxFQUFFLFdBQVc7WUFDdkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsVUFBVSxFQUFFLFVBQVU7U0FDdEIsQ0FBQztRQUVGLG1DQUE4QixHQUFHO1lBQ2hDLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFVBQVUsRUFBRSxlQUFlO1lBQzNCLFVBQVUsRUFBRSxrQkFBa0I7WUFDOUIsWUFBWSxFQUFFLGVBQWU7U0FDN0IsQ0FBQztRQUNPLGVBQVUsR0FBRyxFQUFFLENBQUM7O1FBU2Ysa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4Qyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTFCLENBQUM7Ozs7SUFDaEIsNkNBQVE7OztJQUFSLGNBQVksQ0FBQzs7Z0JBckRiLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUscUJBQXFCO29CQUMvQixxK0xBQW1EOztpQkFFbkQ7Ozs7O2lDQUVDLEtBQUs7NEJBQ0wsS0FBSztxQ0FDTCxLQUFLOzJDQWFMLEtBQUs7aURBT0wsS0FBSzs2QkFTTCxLQUFLOzZCQUVMLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLO2lDQUNMLEtBQUs7c0NBQ0wsS0FBSztnQ0FHTCxNQUFNO29DQUNOLE1BQU07cUNBQ04sTUFBTTtxQ0FDTixNQUFNOzRCQUNOLE1BQU07O0lBSVIsaUNBQUM7Q0FBQSxBQXRERCxJQXNEQztTQWpEWSwwQkFBMEI7OztJQUN0QyxvREFBNkI7O0lBQzdCLCtDQUE0Qjs7SUFDNUIsd0RBWUU7O0lBQ0YsOERBTUU7O0lBQ0Ysb0VBUUU7O0lBQ0YsZ0RBQXlCOztJQUV6QixnREFBb0I7O0lBQ3BCLGtEQUFzQjs7SUFDdEIsbURBQXVCOztJQUN2QixvREFBd0I7O0lBQ3hCLHlEQUE2Qjs7SUFHN0IsbURBQTZDOztJQUM3Qyx1REFBaUQ7O0lBQ2pELHdEQUFrRDs7SUFDbEQsd0RBQWtEOztJQUNsRCwrQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3N1a3UtZnVuZGluZy1zb3VyY2UnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsgJy4vc3VrdS1mdW5kaW5nLXNvdXJjZS5jb21wb25lbnQuc2NzcycgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUZ1bmRpbmdTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGZ1bmRpbmdEZXRhaWxzID0gW107XHJcblx0QElucHV0KCkgaWNvbkNsYXNzID0gJ2ljb24nO1xyXG5cdEBJbnB1dCgpXHJcblx0ZnVuZGluZ1NvdXJjZUxhYmVsID0ge1xyXG5cdFx0bGFiZWxPbmU6ICdGdW5kaW5nIFNvdXJjZXMnLFxyXG5cdFx0bGFiZWxPbmVJZDogJ2Z1bmRpbmdTb3VyY2VzJyxcclxuXHRcdGxhYmVsVHdvOiAnRGVmYXVsdCBGdW5kaW5nIFNvdXJjZXM6JyxcclxuXHRcdGxhYmVsVHdvSWQ6ICdkZWZhdWx0RnVuZGluZ1NvdXJjZXM6JyxcclxuXHRcdGxhYmVsVGhyZWU6ICdDdXJyZW50IEZ1bmRpbmcgU291cmNlcycsXHJcblx0XHRsYWJlbFRocmVlSWQ6ICdjdXJyZW50RnVuZGluZ1NvdXJjZXMnLFxyXG5cdFx0bGFiZWxGb3VyOiAnTm8gRnVuZGluZyBTb3VyY2UgQWRkZWQhJyxcclxuXHRcdGxhYmVsRm91cklkOiAnbm9GdW5kaW5nU291cmNlQWRkZWQhJyxcclxuXHRcdGxhYmVsRml2ZTogJ0RlZmF1bHQnLFxyXG5cdFx0bGFiZWxGaXZlSWQ6ICdEZWZhdWx0J1xyXG5cdH07XHJcblx0QElucHV0KClcclxuXHRmdW5kaW5nU291cmNlV2lkZ2V0TGFiZWwgPSB7XHJcblx0XHRsYWJlbE9uZTogJ0FDSCBXYWxsZXQnLFxyXG5cdFx0bGFiZWxPbmVJZDogJ0FDSFdhbGxldCcsXHJcblx0XHRsYWJlbFR3bzogJ0JhbGFuY2U6JyxcclxuXHRcdGxhYmVsVHdvSWQ6ICdCYWxhbmNlOidcclxuXHR9O1xyXG5cdEBJbnB1dCgpXHJcblx0ZnVuZGluZ1NvdXJjZVdpZGdldEJ1dHRvbkxhYmVsID0ge1xyXG5cdFx0bGFiZWxPbmU6ICdSZW1vdmUnLFxyXG5cdFx0bGFiZWxPbmVJZDogJ1JlbW92ZScsXHJcblx0XHRsYWJlbFR3bzogJ01ha2UgRGVmYXVsdDonLFxyXG5cdFx0bGFiZWxUd29JZDogJ01ha2UgRGVmYXVsdDonLFxyXG5cdFx0bGFiZWxUaHJlZTogJ1RyYW5zZmVyIEJhbGFuY2UnLFxyXG5cdFx0bGFiZWxUaHJlZUlkOiAnTWFrZSBEZWZhdWx0OidcclxuXHR9O1xyXG5cdEBJbnB1dCgpIGNvbnRlbnRPbmUgPSAnJztcclxuXHJcblx0QElucHV0KCkgbGFiZWxPbmVJZDtcclxuXHRASW5wdXQoKSBsYWJlbE9uZVNpemU7XHJcblx0QElucHV0KCkgbGFiZWxPbmVDb2xvcjtcclxuXHRASW5wdXQoKSBsYWJlbE9uZVdlaWdodDtcclxuXHRASW5wdXQoKSBsYWJlbE9uZUN1c3RvbUNsYXNzO1xyXG5cclxuXHQvKiBvdXRwdXQtLWFjdGlvbnMgKi9cclxuXHRAT3V0cHV0KCkgcmVtb3ZlRGVmYXVsdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgbWFrZURlZmF1bHRBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIHJlbW92ZVNvdXJjZUFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgdHJhbnNmZXJGdW5kQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBhZGRTb3VyY2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19