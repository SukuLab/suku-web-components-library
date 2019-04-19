/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuFundingSourceComponent {
    constructor() {
        this.fundingDetails = [];
        this.defaultText = 'Default';
        this.defaultbankName = 'Bank Name';
        this.defaultBtnTxt = 'Make Default';
        this.removeBtnTxt = 'Remove';
        this.defaultBtnId = 'defaultBtnId';
        this.removeBtnId = 'removeBtnId';
        this.defaultRemoveBtnTxt = 'Remove';
        this.achWalletTxt = 'ACH Wallet';
        this.balanceLblTxt = 'Balance';
        this.achMakeDefaultBtnText = 'Make Default';
        this.achMakeDefaultBtnId = 'achMakeDefaultBtnId';
        this.DefaultaccountNumber = 'XXXXXX0220';
        this.WalletBalance = 0.000;
        this.defaultRemoveBtnId = 'defaultRemoveBtnId';
        this.transferFundId = 'transferFundId';
        this.transferFundTxt = 'Transfer Balance';
        this.removeDefault = new EventEmitter();
        this.makeDefaultAction = new EventEmitter();
        this.removeSourceAction = new EventEmitter();
        this.transferFundAction = new EventEmitter();
        this.addSource = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SukuFundingSourceComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-funding-source',
                template: "<div class=\"col-sm-12 d-flex pt-4\">\r\n  <div class=\"Rectangle-2 col mB-2 pb-5\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"row\" (click)=\"addSource.emit()\">\r\n        <div class=\"col-sm-5\">\r\n          FUNDING SOURCES\r\n          <span class=\"add-btn p-2 text-left\" *ngIf=\"fundingDetails.length !== 8\">\r\n            <a>\r\n              <i class=\"fa fa-plus-circle plusIcon\"></i>\r\n            </a>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-3 col-lg-4 col-md-6 clearfix mt-3 pr-5 pl-5\">\r\n          <div class=\"jumbotron col m-6  container defaultDiv samBoxStyle boxShadowStyle jumbotron_cus2\">\r\n            <div class=\"col-12 p-3 mt-2\">\r\n              <div class=\"col-sm-12 w74 text-center\">\r\n                <b>{{defaultText}}</b>\r\n              </div>\r\n              <div class=\"col-12 w74 text-center mt-4\">\r\n                <span>{{defaultbankName}}</span>\r\n              </div>\r\n              <div class=\"col-12 w74 text-center\">\r\n                <span>\r\n                  {{DefaultaccountNumber}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-6  clearfix mt-3 pr-5 pl-5\"\r\n          *ngFor=\"let item of fundingDetails; let i = index;\">\r\n          <div class=\"card box-shadow pb-3 samBoxStyle boxShadowStyle mt-3\">\r\n            <div class=\"card-body\">\r\n              <div class=\"col-sm-12 w74 text-center mt-35\">\r\n                <span>{{item.name}}</span>\r\n              </div>\r\n              <div class=\"col-sm-12 w74 text-center pt8\">\r\n                <span>XXXXXX{{item.id | slice:-4}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <button *ngIf=\"!item.defaultAccount==true\" class=\"btn btn-info w74 mb9 btn-block btnFnt p-2\"\r\n                (click)=\"makeDefaultAction.emit(item);\" id=\"{{defaultBtnId}}\">{{defaultBtnTxt}}</button>\r\n              <button class=\"btnDanger mt-1 w74 clearfix btnFnt p-2 btn-block\" (click)=\"removeSourceAction.emit(item);\"\r\n                id=\"{{removeBtnId}}\">{{removeBtnTxt}}</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-6 clearfix mt-3 pr-5 pl-5\">\r\n          <div class=\"card box-shadow pb-3 samBoxStyle boxShadowStyle mt-3\">\r\n            <div class=\"card-body\">\r\n              <div class=\"col-sm-12 text-center w74 pb10 p-2\">\r\n                {{achWalletTxt}}\r\n              </div>\r\n              <div class=\"col-sm-12 w74 text-center\">\r\n                {{balanceLblTxt}}:\r\n              </div>\r\n              <div class=\"col-sm-12 w74 text-center\">\r\n                ${{WalletBalance}}\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" (click)=\"transferFundAction.emit();\"\r\n                id=\"{{transferFundId}}\"> Transfer Balance</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>",
                styles: [".btnDanger{border-radius:28px 76px 63px;display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:.375rem .75rem;font-size:1rem;line-height:1.5;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;background-color:#fff;cursor:pointer;border:2px solid red}.btnDanger:hover{background-color:red;color:#fff}.jumbotron_cus1{padding:10px 5px;margin-bottom:15px;margin-left:10px}.jumbotron_cus2{margin-bottom:15px;margin-right:15px;padding:15px 5px}.samBoxStyle{margin-bottom:17px;background-color:#f5f5f58c;border-top:3px solid #a7bf2e;border-radius:41px 45px 11px 14px;box-shadow:0 1px 1px rgba(0,0,0,.5);height:250px;padding:1rem}.boxShadowStyle{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.matBoxStyle{border-radius:25px;box-shadow:0 4px 8px 0 rgba(0,0,0,.1),0 6px 20px 0 rgba(0,0,0,.1);background-color:#fff}.mb9{margin-bottom:9px}.pl34{padding-left:34px}.pt25{padding-top:25px}.borderBtm{border-bottom:5px solid #a7bf2e}.mb40{margin-bottom:40px}.progressTxt{font-family:\"Encode Sans\",sans-serif!important;font-size:14px;font-weight:1;text-align:center;color:#b6b6b6}.pl60{padding-left:60px}.Rectangle-2{background-color:#fff;border-radius:0 0 42px 42px;padding-top:15px;padding-bottom:10px}.pl49{padding-left:49px}.Pl0{padding-left:0!important;font-size:20px}.cancelTxt{font-size:20px;font-weight:700}.border{border-radius:0 0 42px 42px;border-top:3px solid #b6b6b6}.pb70{padding-bottom:70px}.pt37{padding-top:37px;padding-left:55px}.pb9{padding-bottom:9px}.pb10{padding-bottom:8px}.pt8{padding-top:8px;padding-bottom:9px}.pt13{padding-top:13px;padding-bottom:13px}.p15{padding-top:12%;padding-bottom:13px}.btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.375rem .75rem;font-size:10px;font-family:Poppins,sans-serif!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e}.poppinsFont{font-family:Poppins,sans-serif!important}.btnFnt{font-size:10px}.mT-18{margin-top:18%}.mT-22{margin-top:22%}.mT-15{margin-top:15%}.plusIcon{color:#a7bf2e;font-size:20px}.m-6{margin:3%}.btnRmv{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.375rem .75rem;font-size:10px;font-family:Poppins,sans-serif!important;cursor:pointer}.btnRmv:hover{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#757575;color:#fff}.btn:focus,.btnRmv:focus{outline:0!important;box-shadow:none!important;color:#000}.icon-size{font-size:74px!important;color:#a6bf2e}@media only screen and (max-width:800px){.jumbotron_cus1,.jumbotron_cus2{width:100%}}.w74{word-wrap:break-word}.main-container{justify-content:space-between;flex-direction:column;height:250px;display:flex}.main-container .btn-holder{justify-content:center;display:flex}.card-footer{padding:.75rem 1.25rem;background-color:#f9f9f9!important;border-top:none!important}"]
            }] }
];
/** @nocollapse */
SukuFundingSourceComponent.ctorParameters = () => [];
SukuFundingSourceComponent.propDecorators = {
    fundingDetails: [{ type: Input }],
    defaultText: [{ type: Input }],
    defaultbankName: [{ type: Input }],
    defaultBtnTxt: [{ type: Input }],
    removeBtnTxt: [{ type: Input }],
    defaultBtnId: [{ type: Input }],
    removeBtnId: [{ type: Input }],
    defaultRemoveBtnTxt: [{ type: Input }],
    achWalletTxt: [{ type: Input }],
    balanceLblTxt: [{ type: Input }],
    achMakeDefaultBtnText: [{ type: Input }],
    achMakeDefaultBtnId: [{ type: Input }],
    DefaultaccountNumber: [{ type: Input }],
    WalletBalance: [{ type: Input }],
    defaultRemoveBtnId: [{ type: Input }],
    transferFundId: [{ type: Input }],
    transferFundTxt: [{ type: Input }],
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
    SukuFundingSourceComponent.prototype.defaultText;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.defaultbankName;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.defaultBtnTxt;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.removeBtnTxt;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.defaultBtnId;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.removeBtnId;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.defaultRemoveBtnTxt;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.achWalletTxt;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.balanceLblTxt;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.achMakeDefaultBtnText;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.achMakeDefaultBtnId;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.DefaultaccountNumber;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.WalletBalance;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.defaultRemoveBtnId;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.transferFundId;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.transferFundTxt;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mdW5kaW5nLXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1mdW5kaW5nLXNvdXJjZS9zdWt1LWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sMEJBQTBCO0lBRXJDO1FBQ1MsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDeEIsb0JBQWUsR0FBRyxXQUFXLENBQUM7UUFDOUIsa0JBQWEsR0FBRyxjQUFjLENBQUM7UUFDL0IsaUJBQVksR0FBRyxRQUFRLENBQUM7UUFDeEIsaUJBQVksR0FBRyxjQUFjLENBQUM7UUFDOUIsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDNUIsd0JBQW1CLEdBQUcsUUFBUSxDQUFDO1FBQy9CLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBQzVCLGtCQUFhLEdBQUcsU0FBUyxDQUFDO1FBQzFCLDBCQUFxQixHQUFHLGNBQWMsQ0FBQztRQUN2Qyx3QkFBbUIsR0FBRyxxQkFBcUIsQ0FBQztRQUM1Qyx5QkFBb0IsR0FBRyxZQUFZLENBQUM7UUFDcEMsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsdUJBQWtCLEdBQUcsb0JBQW9CLENBQUM7UUFDMUMsbUJBQWMsR0FBRyxnQkFBZ0IsQ0FBQztRQUNsQyxvQkFBZSxHQUFHLGtCQUFrQixDQUFDO1FBQ3BDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQXRCekIsQ0FBQzs7OztJQXVCakIsUUFBUTtJQUNSLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsOHdHQUFtRDs7YUFFcEQ7Ozs7OzZCQUlFLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7a0NBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7b0NBQ0wsS0FBSztrQ0FDTCxLQUFLO21DQUNMLEtBQUs7NEJBQ0wsS0FBSztpQ0FDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxNQUFNO2dDQUNOLE1BQU07aUNBQ04sTUFBTTtpQ0FDTixNQUFNO3dCQUNOLE1BQU07Ozs7SUFyQlAsb0RBQTZCOztJQUM3QixpREFBaUM7O0lBQ2pDLHFEQUF1Qzs7SUFDdkMsbURBQXdDOztJQUN4QyxrREFBaUM7O0lBQ2pDLGtEQUF1Qzs7SUFDdkMsaURBQXFDOztJQUNyQyx5REFBd0M7O0lBQ3hDLGtEQUFxQzs7SUFDckMsbURBQW1DOztJQUNuQywyREFBZ0Q7O0lBQ2hELHlEQUFxRDs7SUFDckQsMERBQTZDOztJQUM3QyxtREFBK0I7O0lBQy9CLHdEQUFtRDs7SUFDbkQsb0RBQTJDOztJQUMzQyxxREFBOEM7O0lBQzlDLG1EQUE2Qzs7SUFDN0MsdURBQWlEOztJQUNqRCx3REFBa0Q7O0lBQ2xELHdEQUFrRDs7SUFDbEQsK0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LWZ1bmRpbmctc291cmNlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1mdW5kaW5nLXNvdXJjZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS1mdW5kaW5nLXNvdXJjZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1RnVuZGluZ1NvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgQElucHV0KCkgZnVuZGluZ0RldGFpbHMgPSBbXTtcclxuICBASW5wdXQoKSBkZWZhdWx0VGV4dCA9ICdEZWZhdWx0JztcclxuICBASW5wdXQoKSBkZWZhdWx0YmFua05hbWUgPSAnQmFuayBOYW1lJztcclxuICBASW5wdXQoKSBkZWZhdWx0QnRuVHh0ID0gJ01ha2UgRGVmYXVsdCc7XHJcbiAgQElucHV0KCkgcmVtb3ZlQnRuVHh0ID0gJ1JlbW92ZSc7XHJcbiAgQElucHV0KCkgZGVmYXVsdEJ0bklkID0gJ2RlZmF1bHRCdG5JZCc7XHJcbiAgQElucHV0KCkgcmVtb3ZlQnRuSWQgPSAncmVtb3ZlQnRuSWQnO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRSZW1vdmVCdG5UeHQgPSAnUmVtb3ZlJztcclxuICBASW5wdXQoKSBhY2hXYWxsZXRUeHQgPSAnQUNIIFdhbGxldCc7XHJcbiAgQElucHV0KCkgYmFsYW5jZUxibFR4dCA9ICdCYWxhbmNlJztcclxuICBASW5wdXQoKSBhY2hNYWtlRGVmYXVsdEJ0blRleHQgPSAnTWFrZSBEZWZhdWx0JztcclxuICBASW5wdXQoKSBhY2hNYWtlRGVmYXVsdEJ0bklkID0gJ2FjaE1ha2VEZWZhdWx0QnRuSWQnO1xyXG4gIEBJbnB1dCgpIERlZmF1bHRhY2NvdW50TnVtYmVyID0gJ1hYWFhYWDAyMjAnO1xyXG4gIEBJbnB1dCgpIFdhbGxldEJhbGFuY2UgPSAwLjAwMDtcclxuICBASW5wdXQoKSBkZWZhdWx0UmVtb3ZlQnRuSWQgPSAnZGVmYXVsdFJlbW92ZUJ0bklkJztcclxuICBASW5wdXQoKSB0cmFuc2ZlckZ1bmRJZCA9ICd0cmFuc2ZlckZ1bmRJZCc7XHJcbiAgQElucHV0KCkgdHJhbnNmZXJGdW5kVHh0ID0gJ1RyYW5zZmVyIEJhbGFuY2UnO1xyXG4gIEBPdXRwdXQoKSByZW1vdmVEZWZhdWx0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtYWtlRGVmYXVsdEFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVtb3ZlU291cmNlQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB0cmFuc2ZlckZ1bmRBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGFkZFNvdXJjZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==