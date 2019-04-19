/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuFundingSourceComponent = /** @class */ (function () {
    function SukuFundingSourceComponent() {
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
    SukuFundingSourceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuFundingSourceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-funding-source',
                    template: "<div class=\"col-sm-12 d-flex pt-4\">\r\n  <div class=\"Rectangle-2 col mB-2 pb-5\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"row\" (click)=\"addSource.emit()\">\r\n        <div class=\"col-sm-5\">\r\n          FUNDING SOURCES\r\n          <span class=\"add-btn p-2 text-left\" *ngIf=\"fundingDetails.length !== 8\">\r\n            <a>\r\n              <i class=\"fa fa-plus-circle plusIcon\"></i>\r\n            </a>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-3 col-lg-4 col-md-6 clearfix mt-3 pr-5 pl-5\">\r\n          <div class=\"jumbotron col m-6  container defaultDiv samBoxStyle boxShadowStyle jumbotron_cus2\">\r\n            <div class=\"col-12 p-3 mt-2\">\r\n              <div class=\"col-sm-12 w74 text-center\">\r\n                <b>{{defaultText}}</b>\r\n              </div>\r\n              <div class=\"col-12 w74 text-center mt-4\">\r\n                <span>{{defaultbankName}}</span>\r\n              </div>\r\n              <div class=\"col-12 w74 text-center\">\r\n                <span>\r\n                  {{DefaultaccountNumber}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-6  clearfix mt-3 pr-5 pl-5\"\r\n          *ngFor=\"let item of fundingDetails; let i = index;\">\r\n          <div class=\"card box-shadow pb-3 samBoxStyle boxShadowStyle mt-3\">\r\n            <div class=\"card-body\">\r\n              <div class=\"col-sm-12 w74 text-center mt-35\">\r\n                <span>{{item.name}}</span>\r\n              </div>\r\n              <div class=\"col-sm-12 w74 text-center pt8\">\r\n                <span>XXXXXX{{item.id | slice:-4}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <button *ngIf=\"!item.defaultAccount==true\" class=\"btn btn-info w74 mb9 btn-block btnFnt p-2\"\r\n                (click)=\"makeDefaultAction.emit(item);\" id=\"{{defaultBtnId}}\">{{defaultBtnTxt}}</button>\r\n              <button class=\"btnDanger mt-1 w74 clearfix btnFnt p-2 btn-block\" (click)=\"removeSourceAction.emit(item);\"\r\n                id=\"{{removeBtnId}}\">{{removeBtnTxt}}</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-4 col-md-6 clearfix mt-3 pr-5 pl-5\">\r\n          <div class=\"card box-shadow pb-3 samBoxStyle boxShadowStyle mt-3\">\r\n            <div class=\"card-body\">\r\n              <div class=\"col-sm-12 text-center w74 pb10 p-2\">\r\n                {{achWalletTxt}}\r\n              </div>\r\n              <div class=\"col-sm-12 w74 text-center\">\r\n                {{balanceLblTxt}}:\r\n              </div>\r\n              <div class=\"col-sm-12 w74 text-center\">\r\n                ${{WalletBalance}}\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <button type=\"button\" class=\"btn btn-lg btn-block btn-primary\" (click)=\"transferFundAction.emit();\"\r\n                id=\"{{transferFundId}}\"> Transfer Balance</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>",
                    styles: [".btnDanger{border-radius:28px 76px 63px;display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:.375rem .75rem;font-size:1rem;line-height:1.5;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;background-color:#fff;cursor:pointer;border:2px solid red}.btnDanger:hover{background-color:red;color:#fff}.jumbotron_cus1{padding:10px 5px;margin-bottom:15px;margin-left:10px}.jumbotron_cus2{margin-bottom:15px;margin-right:15px;padding:15px 5px}.samBoxStyle{margin-bottom:17px;background-color:#f5f5f58c;border-top:3px solid #a7bf2e;border-radius:41px 45px 11px 14px;box-shadow:0 1px 1px rgba(0,0,0,.5);height:250px;padding:1rem}.boxShadowStyle{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.matBoxStyle{border-radius:25px;box-shadow:0 4px 8px 0 rgba(0,0,0,.1),0 6px 20px 0 rgba(0,0,0,.1);background-color:#fff}.mb9{margin-bottom:9px}.pl34{padding-left:34px}.pt25{padding-top:25px}.borderBtm{border-bottom:5px solid #a7bf2e}.mb40{margin-bottom:40px}.progressTxt{font-family:\"Encode Sans\",sans-serif!important;font-size:14px;font-weight:1;text-align:center;color:#b6b6b6}.pl60{padding-left:60px}.Rectangle-2{background-color:#fff;border-radius:0 0 42px 42px;padding-top:15px;padding-bottom:10px}.pl49{padding-left:49px}.Pl0{padding-left:0!important;font-size:20px}.cancelTxt{font-size:20px;font-weight:700}.border{border-radius:0 0 42px 42px;border-top:3px solid #b6b6b6}.pb70{padding-bottom:70px}.pt37{padding-top:37px;padding-left:55px}.pb9{padding-bottom:9px}.pb10{padding-bottom:8px}.pt8{padding-top:8px;padding-bottom:9px}.pt13{padding-top:13px;padding-bottom:13px}.p15{padding-top:12%;padding-bottom:13px}.btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.375rem .75rem;font-size:10px;font-family:Poppins,sans-serif!important}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e}.poppinsFont{font-family:Poppins,sans-serif!important}.btnFnt{font-size:10px}.mT-18{margin-top:18%}.mT-22{margin-top:22%}.mT-15{margin-top:15%}.plusIcon{color:#a7bf2e;font-size:20px}.m-6{margin:3%}.btnRmv{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.375rem .75rem;font-size:10px;font-family:Poppins,sans-serif!important;cursor:pointer}.btnRmv:hover{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#757575;color:#fff}.btn:focus,.btnRmv:focus{outline:0!important;box-shadow:none!important;color:#000}.icon-size{font-size:74px!important;color:#a6bf2e}@media only screen and (max-width:800px){.jumbotron_cus1,.jumbotron_cus2{width:100%}}.w74{word-wrap:break-word}.main-container{justify-content:space-between;flex-direction:column;height:250px;display:flex}.main-container .btn-holder{justify-content:center;display:flex}.card-footer{padding:.75rem 1.25rem;background-color:#f9f9f9!important;border-top:none!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuFundingSourceComponent.ctorParameters = function () { return []; };
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
    return SukuFundingSourceComponent;
}());
export { SukuFundingSourceComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mdW5kaW5nLXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1mdW5kaW5nLXNvdXJjZS9zdWt1LWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQU9FO1FBQ1MsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDeEIsb0JBQWUsR0FBRyxXQUFXLENBQUM7UUFDOUIsa0JBQWEsR0FBRyxjQUFjLENBQUM7UUFDL0IsaUJBQVksR0FBRyxRQUFRLENBQUM7UUFDeEIsaUJBQVksR0FBRyxjQUFjLENBQUM7UUFDOUIsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDNUIsd0JBQW1CLEdBQUcsUUFBUSxDQUFDO1FBQy9CLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBQzVCLGtCQUFhLEdBQUcsU0FBUyxDQUFDO1FBQzFCLDBCQUFxQixHQUFHLGNBQWMsQ0FBQztRQUN2Qyx3QkFBbUIsR0FBRyxxQkFBcUIsQ0FBQztRQUM1Qyx5QkFBb0IsR0FBRyxZQUFZLENBQUM7UUFDcEMsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsdUJBQWtCLEdBQUcsb0JBQW9CLENBQUM7UUFDMUMsbUJBQWMsR0FBRyxnQkFBZ0IsQ0FBQztRQUNsQyxvQkFBZSxHQUFHLGtCQUFrQixDQUFDO1FBQ3BDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQXRCekIsQ0FBQzs7OztJQXVCakIsNkNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiw4d0dBQW1EOztpQkFFcEQ7Ozs7O2lDQUlFLEtBQUs7OEJBQ0wsS0FBSztrQ0FDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSzsrQkFDTCxLQUFLOzhCQUNMLEtBQUs7c0NBQ0wsS0FBSzsrQkFDTCxLQUFLO2dDQUNMLEtBQUs7d0NBQ0wsS0FBSztzQ0FDTCxLQUFLO3VDQUNMLEtBQUs7Z0NBQ0wsS0FBSztxQ0FDTCxLQUFLO2lDQUNMLEtBQUs7a0NBQ0wsS0FBSztnQ0FDTCxNQUFNO29DQUNOLE1BQU07cUNBQ04sTUFBTTtxQ0FDTixNQUFNOzRCQUNOLE1BQU07O0lBSVQsaUNBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTVCWSwwQkFBMEI7OztJQUdyQyxvREFBNkI7O0lBQzdCLGlEQUFpQzs7SUFDakMscURBQXVDOztJQUN2QyxtREFBd0M7O0lBQ3hDLGtEQUFpQzs7SUFDakMsa0RBQXVDOztJQUN2QyxpREFBcUM7O0lBQ3JDLHlEQUF3Qzs7SUFDeEMsa0RBQXFDOztJQUNyQyxtREFBbUM7O0lBQ25DLDJEQUFnRDs7SUFDaEQseURBQXFEOztJQUNyRCwwREFBNkM7O0lBQzdDLG1EQUErQjs7SUFDL0Isd0RBQW1EOztJQUNuRCxvREFBMkM7O0lBQzNDLHFEQUE4Qzs7SUFDOUMsbURBQTZDOztJQUM3Qyx1REFBaUQ7O0lBQ2pELHdEQUFrRDs7SUFDbEQsd0RBQWtEOztJQUNsRCwrQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtZnVuZGluZy1zb3VyY2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VGdW5kaW5nU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuICBASW5wdXQoKSBmdW5kaW5nRGV0YWlscyA9IFtdO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRUZXh0ID0gJ0RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRiYW5rTmFtZSA9ICdCYW5rIE5hbWUnO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRCdG5UeHQgPSAnTWFrZSBEZWZhdWx0JztcclxuICBASW5wdXQoKSByZW1vdmVCdG5UeHQgPSAnUmVtb3ZlJztcclxuICBASW5wdXQoKSBkZWZhdWx0QnRuSWQgPSAnZGVmYXVsdEJ0bklkJztcclxuICBASW5wdXQoKSByZW1vdmVCdG5JZCA9ICdyZW1vdmVCdG5JZCc7XHJcbiAgQElucHV0KCkgZGVmYXVsdFJlbW92ZUJ0blR4dCA9ICdSZW1vdmUnO1xyXG4gIEBJbnB1dCgpIGFjaFdhbGxldFR4dCA9ICdBQ0ggV2FsbGV0JztcclxuICBASW5wdXQoKSBiYWxhbmNlTGJsVHh0ID0gJ0JhbGFuY2UnO1xyXG4gIEBJbnB1dCgpIGFjaE1ha2VEZWZhdWx0QnRuVGV4dCA9ICdNYWtlIERlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGFjaE1ha2VEZWZhdWx0QnRuSWQgPSAnYWNoTWFrZURlZmF1bHRCdG5JZCc7XHJcbiAgQElucHV0KCkgRGVmYXVsdGFjY291bnROdW1iZXIgPSAnWFhYWFhYMDIyMCc7XHJcbiAgQElucHV0KCkgV2FsbGV0QmFsYW5jZSA9IDAuMDAwO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRSZW1vdmVCdG5JZCA9ICdkZWZhdWx0UmVtb3ZlQnRuSWQnO1xyXG4gIEBJbnB1dCgpIHRyYW5zZmVyRnVuZElkID0gJ3RyYW5zZmVyRnVuZElkJztcclxuICBASW5wdXQoKSB0cmFuc2ZlckZ1bmRUeHQgPSAnVHJhbnNmZXIgQmFsYW5jZSc7XHJcbiAgQE91dHB1dCgpIHJlbW92ZURlZmF1bHQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1ha2VEZWZhdWx0QWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZW1vdmVTb3VyY2VBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHRyYW5zZmVyRnVuZEFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgYWRkU291cmNlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19