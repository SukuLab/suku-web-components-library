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
    SukuFundingSourceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SukuFundingSourceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-funding-source',
                    template: "<div class=\"col-sm-12 d-flex pt-4\">\r\n  <div class=\"Rectangle-2 col mB-2 pb-5\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"row\" (click)=\"addSource.emit()\">\r\n        <div class=\"col-sm-1\">\r\n          {{headerOneTxt}} <br>\r\n          {{headerTwoText}}\r\n        </div>\r\n        <div class=\"col-sm-10\">\r\n          <div class=\"add-btn p-2 pl-sm-5 ml-sm-4 text-left\" *ngIf=\"fundingDetails.length !== 8\">\r\n            <a>\r\n              <i class=\"fa fa-plus-circle plusIcon\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4 mt-3 pr-5 pl-5\">\r\n          <div class=\"jumbotron col m-6  container defaultDiv samBoxStyle boxShadowStyle jumbotron_cus2\">\r\n            <div class=\"col-sm-12 p-3 mt-2\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <b>{{defaultText}}</b>\r\n              </div>\r\n              <div class=\"col-sm-12 text-center mt-4\">\r\n                {{defaultbankName}}\r\n              </div>\r\n              <div class=\"col-sm-12 text-center\">\r\n                {{DefaultaccountNumber}}\r\n              </div>\r\n              <div class=\"col-sm-12 text-center mT-22\">\r\n                <button class=\"btnDanger col-sm-8 btnFnt\" (click)='removeDefault.emit()' id=\"{{defaultRemoveBtnId}}\">{{defaultRemoveBtnTxt}}</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4 mt-3 pr-5 pl-5\" *ngFor=\"let item of fundingDetails; let i = index;\">\r\n          <div class=\"jumbotron m-6 justify-content-center container defaultDiv\r\n          samBoxStyle boxShadowStyle jumbotron_cus2\">\r\n            <div class=\"col-sm-12  p-3  mt-2 \">\r\n              <div class=\"col-sm-12 text-center mt-35\">\r\n                {{item.name}}\r\n              </div>\r\n              <div class=\"col-sm-12 text-center pt8\">\r\n                XXXXXX{{item.id | slice:-4}}\r\n              </div>\r\n              <div class=\"matBoxStyle\">\r\n                <div class=\"col-sm-12 text-center pt13\">\r\n                  <div class=\"col-sm-10  offset-sm-1\">\r\n                    <button class=\"btn btn-info mb9 col-sm-12 btnFnt\" (click)=\"makeDefaultAction.emit();\" id=\"{{defaultBtnId}}\">{{defaultBtnTxt}}</button>\r\n                    <button class=\"btnDanger  col-sm-12 mt-1 btnFnt\" (click)=\"removeSourceAction.emit(item);\" id=\"{{removeBtnId}}\">{{removeBtnTxt}}</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4 mt-3 pr-5 pl-5\">\r\n          <div class=\"jumbotron  m-6 container defaultDiv samBoxStyle boxShadowStyle jumbotron_cus2\">\r\n            <div class=\"col-sm-12  p-3  mt-2\">\r\n              <div class=\"col-sm-12 text-center pb10\">\r\n                {{achWalletTxt}}\r\n              </div>\r\n              <div class=\"col-sm-12 text-center\">\r\n                {{balanceLblTxt}}:\r\n              </div>\r\n              <div class=\"col-sm-12 text-center\">\r\n                ${{WalletBalance}}\r\n              </div>\r\n              <div class=\" matBoxStyle\">\r\n                <div class=\"col-sm-12 text-center pt8 mT-15\">\r\n                  <div class=\"col-sm-10 offset-sm-1 mt-12\">\r\n                    <button class=\"btn btn-info  col-sm-12 mt-1\" (click)=\"achMakeDefaultAction.emit()\" id=\"{{achMakeDefaultBtnId}}\">{{achMakeDefaultBtnText}}</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".btnDanger{border-radius:28px 76px 63px;display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:.375rem .75rem;font-size:1rem;line-height:1.5;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;background-color:#fff;border:2px solid red}.btnDanger:hover{background-color:red;color:#fff}.jumbotron_cus1{padding:10px 5px;margin-bottom:15px;margin-left:10px}.jumbotron_cus2{margin-bottom:15px;margin-right:15px;padding:15px}.samBoxStyle{margin-bottom:17px;background-color:#f5f5f58c;border-top:3px solid #a7bf2e;border-radius:41px 45px 11px 14px;box-shadow:0 1px 1px rgba(0,0,0,.5)}.boxShadowStyle{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.matBoxStyle{border-radius:25px;box-shadow:0 4px 8px 0 rgba(0,0,0,.1),0 6px 20px 0 rgba(0,0,0,.1);background-color:#fff}.mb9{margin-bottom:9px}.pl34{padding-left:34px}.pt25{padding-top:25px}.borderBtm{border-bottom:5px solid #a7bf2e}.mb40{margin-bottom:40px}.progressTxt{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:1;text-align:center;color:#b6b6b6}.pl60{padding-left:60px}.Rectangle-2{background-color:#fff;border-radius:0 0 42px 42px;padding-top:15px;padding-bottom:10px}.pl49{padding-left:49px}.Pl0{padding-left:0!important;font-size:20px}.cancelTxt{font-size:20px;font-weight:700}.border{border-radius:0 0 42px 42px;border-top:3px solid #b6b6b6}.pb70{padding-bottom:70px}.pt37{padding-top:37px;padding-left:55px}.pb9{padding-bottom:9px}.pb10{padding-bottom:10px}.pt8{padding-top:8px;padding-bottom:9px}.pt13{padding-top:13px;padding-bottom:13px}.btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.375rem .75rem;font-size:10px;font-family:Poppins}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{outline:0!important;box-shadow:none!important}.poppinsFont{font-family:Poppins}.btnFnt{font-size:10px}.mT-18{margin-top:18%}.mT-22{margin-top:22%}.mT-15{margin-top:15%}.plusIcon{color:#a7bf2e;font-size:30px}.m-6{margin:3%}.btnRmv{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.375rem .75rem;font-size:10px;font-family:Poppins}.btnRmv:hover{border:2px solid #757575;border-radius:28px 76px 63px;background-color:#757575;color:#fff}.btnRmv:focus{outline:0!important;box-shadow:none!important}"]
                }] }
    ];
    /** @nocollapse */
    SukuFundingSourceComponent.ctorParameters = function () { return []; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mdW5kaW5nLXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1mdW5kaW5nLXNvdXJjZS9zdWt1LWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQU9FO1FBQ1MsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDeEIsb0JBQWUsR0FBRyxXQUFXLENBQUM7UUFDOUIsaUJBQVksR0FBRyxTQUFTLENBQUM7UUFDekIsa0JBQWEsR0FBRyxTQUFTLENBQUM7UUFDMUIsa0JBQWEsR0FBRyxjQUFjLENBQUM7UUFDL0IsaUJBQVksR0FBRyxRQUFRLENBQUM7UUFDeEIsaUJBQVksR0FBRyxjQUFjLENBQUM7UUFDOUIsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDNUIsd0JBQW1CLEdBQUcsUUFBUSxDQUFDO1FBQy9CLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBQzVCLGtCQUFhLEdBQUcsU0FBUyxDQUFDO1FBQzFCLDBCQUFxQixHQUFHLGNBQWMsQ0FBQztRQUN2Qyx3QkFBbUIsR0FBRyxxQkFBcUIsQ0FBQztRQUM1Qyx5QkFBb0IsR0FBRyxZQUFZLENBQUM7UUFDcEMsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsdUJBQWtCLEdBQUcsb0JBQW9CLENBQUM7UUFDekMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4Qyx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBdEJ6QixDQUFDOzs7O0lBdUJqQiw2Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLDZ3SEFBbUQ7O2lCQUVwRDs7Ozs7aUNBSUUsS0FBSzs4QkFDTCxLQUFLO2tDQUNMLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSzsrQkFDTCxLQUFLOzhCQUNMLEtBQUs7c0NBQ0wsS0FBSzsrQkFDTCxLQUFLO2dDQUNMLEtBQUs7d0NBQ0wsS0FBSztzQ0FDTCxLQUFLO3VDQUNMLEtBQUs7Z0NBQ0wsS0FBSztxQ0FDTCxLQUFLO2dDQUNMLE1BQU07b0NBQ04sTUFBTTtxQ0FDTixNQUFNO3VDQUNOLE1BQU07NEJBQ04sTUFBTTs7SUFJVCxpQ0FBQztDQUFBLEFBakNELElBaUNDO1NBNUJZLDBCQUEwQjs7O0lBR3JDLG9EQUE2Qjs7SUFDN0IsaURBQWlDOztJQUNqQyxxREFBdUM7O0lBQ3ZDLGtEQUFrQzs7SUFDbEMsbURBQW1DOztJQUNuQyxtREFBd0M7O0lBQ3hDLGtEQUFpQzs7SUFDakMsa0RBQXVDOztJQUN2QyxpREFBcUM7O0lBQ3JDLHlEQUF3Qzs7SUFDeEMsa0RBQXFDOztJQUNyQyxtREFBbUM7O0lBQ25DLDJEQUFnRDs7SUFDaEQseURBQXFEOztJQUNyRCwwREFBNkM7O0lBQzdDLG1EQUErQjs7SUFDL0Isd0RBQW1EOztJQUNuRCxtREFBNkM7O0lBQzdDLHVEQUFpRDs7SUFDakQsd0RBQWtEOztJQUNsRCwwREFBb0Q7O0lBQ3BELCtDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS1mdW5kaW5nLXNvdXJjZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtZnVuZGluZy1zb3VyY2UuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdUZ1bmRpbmdTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gIEBJbnB1dCgpIGZ1bmRpbmdEZXRhaWxzID0gW107XHJcbiAgQElucHV0KCkgZGVmYXVsdFRleHQgPSAnRGVmYXVsdCc7XHJcbiAgQElucHV0KCkgZGVmYXVsdGJhbmtOYW1lID0gJ0JhbmsgTmFtZSc7XHJcbiAgQElucHV0KCkgaGVhZGVyT25lVHh0ID0gJ0ZVTkRJTkcnO1xyXG4gIEBJbnB1dCgpIGhlYWRlclR3b1RleHQgPSAnU09VUkNFUyc7XHJcbiAgQElucHV0KCkgZGVmYXVsdEJ0blR4dCA9ICdNYWtlIERlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIHJlbW92ZUJ0blR4dCA9ICdSZW1vdmUnO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRCdG5JZCA9ICdkZWZhdWx0QnRuSWQnO1xyXG4gIEBJbnB1dCgpIHJlbW92ZUJ0bklkID0gJ3JlbW92ZUJ0bklkJztcclxuICBASW5wdXQoKSBkZWZhdWx0UmVtb3ZlQnRuVHh0ID0gJ1JlbW92ZSc7XHJcbiAgQElucHV0KCkgYWNoV2FsbGV0VHh0ID0gJ0FDSCBXYWxsZXQnO1xyXG4gIEBJbnB1dCgpIGJhbGFuY2VMYmxUeHQgPSAnQmFsYW5jZSc7XHJcbiAgQElucHV0KCkgYWNoTWFrZURlZmF1bHRCdG5UZXh0ID0gJ01ha2UgRGVmYXVsdCc7XHJcbiAgQElucHV0KCkgYWNoTWFrZURlZmF1bHRCdG5JZCA9ICdhY2hNYWtlRGVmYXVsdEJ0bklkJztcclxuICBASW5wdXQoKSBEZWZhdWx0YWNjb3VudE51bWJlciA9ICdYWFhYWFgwMjIwJztcclxuICBASW5wdXQoKSBXYWxsZXRCYWxhbmNlID0gMC4wMDA7XHJcbiAgQElucHV0KCkgZGVmYXVsdFJlbW92ZUJ0bklkID0gJ2RlZmF1bHRSZW1vdmVCdG5JZCc7XHJcbiAgQE91dHB1dCgpIHJlbW92ZURlZmF1bHQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1ha2VEZWZhdWx0QWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZW1vdmVTb3VyY2VBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGFjaE1ha2VEZWZhdWx0QWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBhZGRTb3VyY2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufSJdfQ==