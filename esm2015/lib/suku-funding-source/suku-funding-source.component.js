/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuFundingSourceComponent {
    constructor() {
        this.arrayOne = [];
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
                template: "<div class=\"form-group col-12 Rectangle-2 p-3 poppinsFont\">\r\n  <div class=\"col-sm-12 text-center mb-2 row\">\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"col-sm-12 row  mb-6\">\r\n        <div class=\"col-sm-2\">\r\n          {{headerOneTxt}} <br>\r\n          {{headerTwoText}}\r\n        </div>\r\n        <div class=\"col-sm-10\">\r\n          <div class=\"add-btn p-2 text-left\">\r\n            <a>\r\n              <i class=\"fa fa-plus-circle plusIcon\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12\" >\r\n    <div class=\"col-sm-12 row\">\r\n      <div class=\"jumbotron col-xs-12 col-sm-3  container defaultDiv samBoxStyle boxShadowStyle jumbotron_cus2\">\r\n        <div class=\"col-sm-12 p-3 mt-2\">\r\n          <div class=\"col-sm-12 text-center\">\r\n            <b>{{defaultText}}</b>\r\n          </div>\r\n          <div class=\"col-sm-12 text-center mt-4\">\r\n            {{defaultbankName}}\r\n          </div>\r\n          <div class=\"col-sm-12 text-center\">\r\n            {{DefaultaccountNumber}}\r\n          </div>\r\n          <div class=\"col-sm-12 text-center mT-18\">\r\n            <button class=\"btnDanger col-sm-12 btnFnt\" (click)='removeDefault.emit()' id=\"{{defaultRemoveBtnId}}\">{{defaultRemoveBtnTxt}}</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"jumbotron col-xs-12 col-sm-3 container defaultDiv samBoxStyle boxShadowStyle jumbotron_cus2\" \r\n      *ngFor=\"let item of arrayOne; let i = index;\">\r\n        <div class=\"col-sm-12  p-3  mt-2\">\r\n          <div class=\"col-sm-12 text-center mt-35\">\r\n            {{item.name}}\r\n          </div>\r\n          <div class=\"col-sm-12 text-center pt8\">\r\n            {{item.chaseAccountNumber}}\r\n          </div>\r\n          <div class=\"matBoxStyle\">\r\n          <div class=\"col-sm-12 text-center pt13\">\r\n            <div class=\"col-sm-10  offset-sm-1\">\r\n              <button class=\"btn btn-info mb9 col-sm-12 btnFnt\" (click)=\"makeDefaultAction.emit();\" id=\"{{defaultBtnId}}\">{{defaultBtnTxt}}</button>\r\n              <button class=\"btnDanger  col-sm-12 mt-1 btnFnt\" (click)=\"removeSourceAction.emit();\" id=\"{{removeBtnId}}\">{{removeBtnTxt}}</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"jumbotron col-xs-12 col-sm-3  container defaultDiv samBoxStyle boxShadowStyle jumbotron_cus2\">\r\n        <div class=\"col-sm-12  p-3  mt-2\">\r\n          <div class=\"col-sm-12 text-center pb10\">\r\n            {{achWalletTxt}}\r\n          </div>\r\n          <div class=\"col-sm-12 text-center\">\r\n            {{balanceLblTxt}}:\r\n          </div>\r\n          <div class=\"col-sm-12 text-center pb9\">\r\n          ${{WalletBalance}}\r\n          </div>\r\n          <div class=\" matBoxStyle\">\r\n          <div class=\"col-sm-12 text-center pt8\">\r\n            <div class=\"col-sm-10 offset-sm-1 mt-12\">\r\n              <button class=\"btn btn-info  col-sm-12 mt-1\" (click)=\"achMakeDefaultAction.emit()\" id=\"{{achMakeDefaultBtnId}}\">{{achMakeDefaultBtnText}}</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [".btnDanger{border-radius:28px 76px 63px;display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:.375rem .75rem;font-size:1rem;line-height:1.5;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;background-color:#fff;border:2px solid red}.btnDanger :hover{background-color:red}.jumbotron_cus1{padding:10px 5px;margin-bottom:15px;margin-left:10px}.jumbotron_cus2{margin-bottom:15px;margin-right:15px;padding:15px}.samBoxStyle{margin-bottom:17px;background-color:#f5f5f58c;border-top:3px solid #a7bf2e;border-radius:41px 45px 11px 14px;box-shadow:0 1px 1px rgba(0,0,0,.5)}.boxShadowStyle{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.matBoxStyle{border-radius:25px;box-shadow:0 4px 8px 0 rgba(0,0,0,.1),0 6px 20px 0 rgba(0,0,0,.1);background-color:#fff}.mb9{margin-bottom:9px}.pl34{padding-left:34px}.pt25{padding-top:25px}.borderBtm{border-bottom:5px solid #a7bf2e}.mb40{margin-bottom:40px}.progressTxt{font-family:'Encode Sans',sans-serif!important;font-size:14px;font-weight:1;text-align:center;color:#b6b6b6}.pl60{padding-left:60px}.Rectangle-2{background-color:#fff;border-radius:0 0 42px 42px;padding-top:15px;padding-bottom:10px}.pl49{padding-left:49px}.Pl0{padding-left:0!important;font-size:20px}.cancelTxt{font-size:20px;font-weight:700}.border{border-radius:0 0 42px 42px;border-top:3px solid #b6b6b6}.pb70{padding-bottom:70px}.pt37{padding-top:37px;padding-left:55px}.pb9{padding-bottom:9px}.pb10{padding-bottom:10px}.pt8{padding-top:8px;padding-bottom:9px}.pt13{padding-top:13px;padding-bottom:13px}.btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.375rem .75rem;font-size:10px;font-family:Poppins}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{outline:0!important;box-shadow:none!important}.poppinsFont{font-family:Poppins}.btnFnt{font-size:10px}.mT-18{margin-top:18%}.plusIcon{color:#a7bf2e;font-size:30px}"]
            }] }
];
/** @nocollapse */
SukuFundingSourceComponent.ctorParameters = () => [];
SukuFundingSourceComponent.propDecorators = {
    arrayOne: [{ type: Input }],
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
    achMakeDefaultAction: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SukuFundingSourceComponent.prototype.arrayOne;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS1mdW5kaW5nLXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zdWt1LXdlYmNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3VrdS1mdW5kaW5nLXNvdXJjZS9zdWt1LWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sMEJBQTBCO0lBRXJDO1FBQ1MsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLG9CQUFlLEdBQUcsV0FBVyxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLGtCQUFhLEdBQUcsU0FBUyxDQUFDO1FBQzFCLGtCQUFhLEdBQUcsY0FBYyxDQUFDO1FBQy9CLGlCQUFZLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLGlCQUFZLEdBQUcsY0FBYyxDQUFDO1FBQzlCLGdCQUFXLEdBQUcsYUFBYSxDQUFDO1FBQzVCLHdCQUFtQixHQUFHLFFBQVEsQ0FBQztRQUMvQixpQkFBWSxHQUFHLFlBQVksQ0FBQztRQUM1QixrQkFBYSxHQUFHLFNBQVMsQ0FBQztRQUMxQiwwQkFBcUIsR0FBRyxjQUFjLENBQUM7UUFDdkMsd0JBQW1CLEdBQUcscUJBQXFCLENBQUM7UUFDNUMseUJBQW9CLEdBQUcsWUFBWSxDQUFDO1FBQ3BDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLHVCQUFrQixHQUFHLG9CQUFvQixDQUFDO1FBQ3pDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEMseUJBQW9CLEdBQUksSUFBSSxZQUFZLEVBQUUsQ0FBQztJQXJCckMsQ0FBQzs7OztJQXNCakIsUUFBUTtJQUNSLENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0Isd3lHQUFtRDs7YUFFcEQ7Ozs7O3VCQUlFLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLO2tDQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLO29DQUNMLEtBQUs7a0NBQ0wsS0FBSzttQ0FDTCxLQUFLOzRCQUNMLEtBQUs7aUNBQ0wsS0FBSzs0QkFDTCxNQUFNO2dDQUNOLE1BQU07aUNBQ04sTUFBTTttQ0FDTixNQUFNOzs7O0lBcEJQLDhDQUF1Qjs7SUFDdkIsaURBQWlDOztJQUNqQyxxREFBdUM7O0lBQ3ZDLGtEQUFrQzs7SUFDbEMsbURBQW1DOztJQUNuQyxtREFBd0M7O0lBQ3hDLGtEQUFpQzs7SUFDakMsa0RBQXVDOztJQUN2QyxpREFBcUM7O0lBQ3JDLHlEQUF3Qzs7SUFDeEMsa0RBQXFDOztJQUNyQyxtREFBbUM7O0lBQ25DLDJEQUFnRDs7SUFDaEQseURBQXFEOztJQUNyRCwwREFBNkM7O0lBQzdDLG1EQUErQjs7SUFDL0Isd0RBQW1EOztJQUNuRCxtREFBNkM7O0lBQzdDLHVEQUFpRDs7SUFDakQsd0RBQWtEOztJQUNsRCwwREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtZnVuZGluZy1zb3VyY2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LWZ1bmRpbmctc291cmNlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VGdW5kaW5nU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuICBASW5wdXQoKSBhcnJheU9uZSA9IFtdO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRUZXh0ID0gJ0RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRiYW5rTmFtZSA9ICdCYW5rIE5hbWUnO1xyXG4gIEBJbnB1dCgpIGhlYWRlck9uZVR4dCA9ICdGVU5ESU5HJztcclxuICBASW5wdXQoKSBoZWFkZXJUd29UZXh0ID0gJ1NPVVJDRVMnO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRCdG5UeHQgPSAnTWFrZSBEZWZhdWx0JztcclxuICBASW5wdXQoKSByZW1vdmVCdG5UeHQgPSAnUmVtb3ZlJztcclxuICBASW5wdXQoKSBkZWZhdWx0QnRuSWQgPSAnZGVmYXVsdEJ0bklkJztcclxuICBASW5wdXQoKSByZW1vdmVCdG5JZCA9ICdyZW1vdmVCdG5JZCc7XHJcbiAgQElucHV0KCkgZGVmYXVsdFJlbW92ZUJ0blR4dCA9ICdSZW1vdmUnO1xyXG4gIEBJbnB1dCgpIGFjaFdhbGxldFR4dCA9ICdBQ0ggV2FsbGV0JztcclxuICBASW5wdXQoKSBiYWxhbmNlTGJsVHh0ID0gJ0JhbGFuY2UnO1xyXG4gIEBJbnB1dCgpIGFjaE1ha2VEZWZhdWx0QnRuVGV4dCA9ICdNYWtlIERlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGFjaE1ha2VEZWZhdWx0QnRuSWQgPSAnYWNoTWFrZURlZmF1bHRCdG5JZCc7XHJcbiAgQElucHV0KCkgRGVmYXVsdGFjY291bnROdW1iZXIgPSAnWFhYWFhYMDIyMCc7XHJcbiAgQElucHV0KCkgV2FsbGV0QmFsYW5jZSA9IDAuMDAwO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRSZW1vdmVCdG5JZCA9ICdkZWZhdWx0UmVtb3ZlQnRuSWQnO1xyXG4gIEBPdXRwdXQoKSByZW1vdmVEZWZhdWx0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtYWtlRGVmYXVsdEFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVtb3ZlU291cmNlQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBhY2hNYWtlRGVmYXVsdEFjdGlvbiA9ICBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=