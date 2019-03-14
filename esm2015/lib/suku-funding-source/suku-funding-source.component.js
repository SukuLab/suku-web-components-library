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
        this.headerOneTxt = 'FUNDING';
        this.headerTwoText = 'SOURCES';
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
        this.removeDefault = new EventEmitter();
        this.makeDefaultAction = new EventEmitter();
        this.removeSourceAction = new EventEmitter();
        this.achMakeDefaultAction = new EventEmitter();
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
                template: "<div class=\"col-sm-12 d-flex pt-4\">\n  <div class=\"Rectangle-2 col mB-2 pb-5\">\n    <div class=\"col-sm-12\">\n      <div class=\"row\" (click)=\"addSource.emit()\">\n        <div class=\"col-sm-1\">\n          {{headerOneTxt}} <br>\n          {{headerTwoText}}\n        </div>\n        <div class=\"col-sm-10\">\n          <div class=\"add-btn p-2 pl-sm-5 ml-sm-4 text-left\" *ngIf=\"fundingDetails.length !== 8\">\n            <a>\n              <i class=\"fa fa-plus-circle plusIcon\"></i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12\">\n      <div class=\"row\">\n        <div class=\"col-sm-4 mt-3 pr-5 pl-5\">\n          <div class=\"jumbotron col m-6  container defaultDiv samBoxStyle boxShadowStyle jumbotron_cus2\">\n            <div class=\"col-sm-12 p-3 mt-2\">\n              <div class=\"col-sm-12 text-center\">\n                <b>{{defaultText}}</b>\n              </div>\n              <div class=\"col-sm-12 text-center mt-4\">\n                {{defaultbankName}}\n              </div>\n              <div class=\"col-sm-12 text-center\">\n                {{DefaultaccountNumber}}\n              </div>\n              <div class=\"col-sm-12 text-center mT-22\">\n                <button class=\"btnDanger col-sm-8 btnFnt\" (click)='removeDefault.emit()' id=\"{{defaultRemoveBtnId}}\">{{defaultRemoveBtnTxt}}</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-4 mt-3 pr-5 pl-5\" *ngFor=\"let item of fundingDetails; let i = index;\">\n          <div class=\"jumbotron m-6 justify-content-center container defaultDiv\n          samBoxStyle boxShadowStyle jumbotron_cus2\">\n            <div class=\"col-sm-12  p-3  mt-2 \">\n              <div class=\"col-sm-12 text-center mt-35\">\n                {{item.name}}\n              </div>\n              <div class=\"col-sm-12 text-center pt8\">\n                XXXXXX{{item.id | slice:-4}}\n              </div>\n              <div class=\"matBoxStyle\">\n                <div class=\"col-sm-12 text-center pt13\">\n                  <div class=\"col-sm-10  offset-sm-1\">\n                    <button class=\"btn btn-info mb9 col-sm-12 btnFnt\" (click)=\"makeDefaultAction.emit();\" id=\"{{defaultBtnId}}\">{{defaultBtnTxt}}</button>\n                    <button class=\"btnDanger  col-sm-12 mt-1 btnFnt\" (click)=\"removeSourceAction.emit(item);\" id=\"{{removeBtnId}}\">{{removeBtnTxt}}</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-4 mt-3 pr-5 pl-5\">\n          <div class=\"jumbotron  m-6 container defaultDiv samBoxStyle boxShadowStyle jumbotron_cus2\">\n            <div class=\"col-sm-12  p-3  mt-2\">\n              <div class=\"col-sm-12 text-center pb10\">\n                {{achWalletTxt}}\n              </div>\n              <div class=\"col-sm-12 text-center\">\n                {{balanceLblTxt}}:\n              </div>\n              <div class=\"col-sm-12 text-center\">\n                ${{WalletBalance}}\n              </div>\n              <div class=\" matBoxStyle\">\n                <div class=\"col-sm-12 text-center pt8 mT-15\">\n                  <div class=\"col-sm-10 offset-sm-1 mt-12\">\n                    <button class=\"btn btn-info  col-sm-12 mt-1\" (click)=\"achMakeDefaultAction.emit()\" id=\"{{achMakeDefaultBtnId}}\">{{achMakeDefaultBtnText}}</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: [".btnDanger{border-radius:28px 76px 63px;display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:.375rem .75rem;font-size:1rem;line-height:1.5;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;background-color:#fff;border:2px solid red}.btnDanger:hover{background-color:red;color:#fff}.jumbotron_cus1{padding:10px 5px;margin-bottom:15px;margin-left:10px}.jumbotron_cus2{margin-bottom:15px;margin-right:15px;padding:15px}.samBoxStyle{margin-bottom:17px;background-color:#f5f5f58c;border-top:3px solid #a7bf2e;border-radius:41px 45px 11px 14px;box-shadow:0 1px 1px rgba(0,0,0,.5)}.boxShadowStyle{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.matBoxStyle{border-radius:25px;box-shadow:0 4px 8px 0 rgba(0,0,0,.1),0 6px 20px 0 rgba(0,0,0,.1);background-color:#fff}.mb9{margin-bottom:9px}.pl34{padding-left:34px}.pt25{padding-top:25px}.borderBtm{border-bottom:5px solid #a7bf2e}.mb40{margin-bottom:40px}.progressTxt{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:1;text-align:center;color:#b6b6b6}.pl60{padding-left:60px}.Rectangle-2{background-color:#fff;border-radius:0 0 42px 42px;padding-top:15px;padding-bottom:10px}.pl49{padding-left:49px}.Pl0{padding-left:0!important;font-size:20px}.cancelTxt{font-size:20px;font-weight:700}.border{border-radius:0 0 42px 42px;border-top:3px solid #b6b6b6}.pb70{padding-bottom:70px}.pt37{padding-top:37px;padding-left:55px}.pb9{padding-bottom:9px}.pb10{padding-bottom:10px}.pt8{padding-top:8px;padding-bottom:9px}.pt13{padding-top:13px;padding-bottom:13px}.btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.375rem .75rem;font-size:10px;font-family:Poppins}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{outline:0!important;box-shadow:none!important;color:#000}.poppinsFont{font-family:Poppins}.btnFnt{font-size:10px}.mT-18{margin-top:18%}.mT-22{margin-top:22%}.mT-15{margin-top:15%}.plusIcon{color:#a7bf2e;font-size:30px}.m-6{margin:3%}.btnRmv{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.375rem .75rem;font-size:10px;font-family:Poppins}.btnRmv:hover{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#757575;color:#fff}.btnRmv:focus{outline:0!important;box-shadow:none!important;color:#000}"]
            }] }
];
/** @nocollapse */
SukuFundingSourceComponent.ctorParameters = () => [];
SukuFundingSourceComponent.propDecorators = {
    fundingDetails: [{ type: Input }],
    defaultText: [{ type: Input }],
    defaultbankName: [{ type: Input }],
    headerOneTxt: [{ type: Input }],
    headerTwoText: [{ type: Input }],
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
    removeDefault: [{ type: Output }],
    makeDefaultAction: [{ type: Output }],
    removeSourceAction: [{ type: Output }],
    achMakeDefaultAction: [{ type: Output }],
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
    SukuFundingSourceComponent.prototype.headerOneTxt;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.headerTwoText;
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
    SukuFundingSourceComponent.prototype.removeDefault;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.makeDefaultAction;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.removeSourceAction;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.achMakeDefaultAction;
    /** @type {?} */
    SukuFundingSourceComponent.prototype.addSource;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mdW5kaW5nLXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1mdW5kaW5nLXNvdXJjZS9zdWt1LWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sMEJBQTBCO0lBRXJDO1FBQ1MsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDeEIsb0JBQWUsR0FBRyxXQUFXLENBQUM7UUFDOUIsaUJBQVksR0FBRyxTQUFTLENBQUM7UUFDekIsa0JBQWEsR0FBRyxTQUFTLENBQUM7UUFDMUIsa0JBQWEsR0FBRyxjQUFjLENBQUM7UUFDL0IsaUJBQVksR0FBRyxRQUFRLENBQUM7UUFDeEIsaUJBQVksR0FBRyxjQUFjLENBQUM7UUFDOUIsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDNUIsd0JBQW1CLEdBQUcsUUFBUSxDQUFDO1FBQy9CLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBQzVCLGtCQUFhLEdBQUcsU0FBUyxDQUFDO1FBQzFCLDBCQUFxQixHQUFHLGNBQWMsQ0FBQztRQUN2Qyx3QkFBbUIsR0FBRyxxQkFBcUIsQ0FBQztRQUM1Qyx5QkFBb0IsR0FBRyxZQUFZLENBQUM7UUFDcEMsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsdUJBQWtCLEdBQUcsb0JBQW9CLENBQUM7UUFDekMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4Qyx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBdEJ6QixDQUFDOzs7O0lBdUJqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQix1bUhBQW1EOzthQUVwRDs7Ozs7NkJBSUUsS0FBSzswQkFDTCxLQUFLOzhCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7a0NBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7b0NBQ0wsS0FBSztrQ0FDTCxLQUFLO21DQUNMLEtBQUs7NEJBQ0wsS0FBSztpQ0FDTCxLQUFLOzRCQUNMLE1BQU07Z0NBQ04sTUFBTTtpQ0FDTixNQUFNO21DQUNOLE1BQU07d0JBQ04sTUFBTTs7OztJQXJCUCxvREFBNkI7O0lBQzdCLGlEQUFpQzs7SUFDakMscURBQXVDOztJQUN2QyxrREFBa0M7O0lBQ2xDLG1EQUFtQzs7SUFDbkMsbURBQXdDOztJQUN4QyxrREFBaUM7O0lBQ2pDLGtEQUF1Qzs7SUFDdkMsaURBQXFDOztJQUNyQyx5REFBd0M7O0lBQ3hDLGtEQUFxQzs7SUFDckMsbURBQW1DOztJQUNuQywyREFBZ0Q7O0lBQ2hELHlEQUFxRDs7SUFDckQsMERBQTZDOztJQUM3QyxtREFBK0I7O0lBQy9CLHdEQUFtRDs7SUFDbkQsbURBQTZDOztJQUM3Qyx1REFBaUQ7O0lBQ2pELHdEQUFrRDs7SUFDbEQsMERBQW9EOztJQUNwRCwrQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtZnVuZGluZy1zb3VyY2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS1mdW5kaW5nLXNvdXJjZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1RnVuZGluZ1NvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgQElucHV0KCkgZnVuZGluZ0RldGFpbHMgPSBbXTtcbiAgQElucHV0KCkgZGVmYXVsdFRleHQgPSAnRGVmYXVsdCc7XG4gIEBJbnB1dCgpIGRlZmF1bHRiYW5rTmFtZSA9ICdCYW5rIE5hbWUnO1xuICBASW5wdXQoKSBoZWFkZXJPbmVUeHQgPSAnRlVORElORyc7XG4gIEBJbnB1dCgpIGhlYWRlclR3b1RleHQgPSAnU09VUkNFUyc7XG4gIEBJbnB1dCgpIGRlZmF1bHRCdG5UeHQgPSAnTWFrZSBEZWZhdWx0JztcbiAgQElucHV0KCkgcmVtb3ZlQnRuVHh0ID0gJ1JlbW92ZSc7XG4gIEBJbnB1dCgpIGRlZmF1bHRCdG5JZCA9ICdkZWZhdWx0QnRuSWQnO1xuICBASW5wdXQoKSByZW1vdmVCdG5JZCA9ICdyZW1vdmVCdG5JZCc7XG4gIEBJbnB1dCgpIGRlZmF1bHRSZW1vdmVCdG5UeHQgPSAnUmVtb3ZlJztcbiAgQElucHV0KCkgYWNoV2FsbGV0VHh0ID0gJ0FDSCBXYWxsZXQnO1xuICBASW5wdXQoKSBiYWxhbmNlTGJsVHh0ID0gJ0JhbGFuY2UnO1xuICBASW5wdXQoKSBhY2hNYWtlRGVmYXVsdEJ0blRleHQgPSAnTWFrZSBEZWZhdWx0JztcbiAgQElucHV0KCkgYWNoTWFrZURlZmF1bHRCdG5JZCA9ICdhY2hNYWtlRGVmYXVsdEJ0bklkJztcbiAgQElucHV0KCkgRGVmYXVsdGFjY291bnROdW1iZXIgPSAnWFhYWFhYMDIyMCc7XG4gIEBJbnB1dCgpIFdhbGxldEJhbGFuY2UgPSAwLjAwMDtcbiAgQElucHV0KCkgZGVmYXVsdFJlbW92ZUJ0bklkID0gJ2RlZmF1bHRSZW1vdmVCdG5JZCc7XG4gIEBPdXRwdXQoKSByZW1vdmVEZWZhdWx0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbWFrZURlZmF1bHRBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZW1vdmVTb3VyY2VBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBhY2hNYWtlRGVmYXVsdEFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGFkZFNvdXJjZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufSJdfQ==