/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SukuTransactionHistoryComponent = /** @class */ (function () {
    function SukuTransactionHistoryComponent() {
        this.transactionHistory = 'Transaction History';
        this.transactionDetailsId = 'transactionDetailsId';
        this.typeId = 'typeId';
        this.myAccountId = 'myAccountId';
        this.counterPartyId = 'counterPartyId';
        this.counterparty = 'Counter Party';
        this.amountId = 'AmountId';
        this.statusId = 'statusId';
        this.dateCreatedId = 'dateCreatedId';
        this.paymentManagementId = 'paymentManagementId';
        this.action = new EventEmitter();
        this.cancelId = 'cancelId';
        this.cancel = 'Cancel';
    }
    /**
     * @return {?}
     */
    SukuTransactionHistoryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.headings = [{
                'type': 'Type',
                'myAccount': 'My Account',
                'counterparty': 'Counter Party',
                'amount': 'Amount',
                'status': 'Status',
                'dateCreated': 'Date Created',
                'paymentManagement': 'Payment Management'
            }];
    };
    SukuTransactionHistoryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-transaction-history',
                    template: "<div class=\"col-sm-12 fontPoppins pT-5 d-flex\">\n  <div class=\"form-group col-12 Rectangle-2 p-3\">\n    <div class=\"col-sm-12 text-center mb-2\">\n      {{transactionHistory}}\n    </div>\n    <div class=\"col-sm-12 table-responsive mB-4\" id=\"sailorTableArea\">\n      <table class=\"col-sm-12  table table-bordered tableBg\" id=\"sailorTable\" style=\"overflow-x:auto;\">\n        <thead>\n          <tr *ngFor=\"let heading of headings\">\n            <th scope=\"col\" class=\"text-center\" id=\"{{typeId}}\">{{heading.type}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{myAccountId}}\">{{heading.myAccount}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{counterPartyId}}\">{{heading.counterparty}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{amountId}}\">{{heading.amount}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{statusId}}\">{{heading.status}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{dateCreatedId}}\">{{heading.dateCreated}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{paymentManagementId}}\">{{heading.paymentManagement}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr id=\"{{transactionDetailsId}}\" *ngFor=\"let transaction of transactionDetails\">\n            <td scope=\"row\" class=\"text-center {{( (transaction?.type) == 'outgoing') ? 'outgoing' : 'incoming'}}\">\n              {{transaction?.type}}</td>\n            <td scope=\"row\" class=\"text-center\">{{transaction?.accountName}}</td>\n            <td scope=\"row\" class=\"text-center\">{{transaction?.counterParty}}</td>\n            <td scope=\"row\" class=\"text-center\">{{transaction?.amount}}</td>\n            <td scope=\"row\" class=\"text-center {{( (transaction.status) == 'failed') ? 'falied' : 'incoming'}}\">{{transaction?.status}}</td>\n            <td scope=\"row\" class=\"text-center\">{{transaction?.created}}</td>\n            <td class=\"text-center\"><button *ngIf=\"transaction?.status=='pending'\" id=\"{{cancelId}}\" (click)=\"action.emit(transaction);\"\n                class=\"btn  btnCancel\">{{cancel}}</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n",
                    styles: [".cancelText{font-size:12px;color:red}.outgoing{color:#af0a0a}.incoming{color:#000}.falied{color:red}.add-btn a i{width:33px;height:33px;float:none;display:inline-block;vertical-align:middle;font-size:12px;color:#d4c5a0;text-align:center;line-height:31px;border:1px solid #76767bb3;border-radius:33px;position:absolute;top:0;left:0;z-index:10}.add-btn a:hover{text-decoration:underline}.defaultDiv{background-color:#d8fc40;border-radius:30px}.dangerBtn{background-color:#f13030;color:#fff}.bankDiv{background-color:#f0f4f5;border-radius:30px;border:1px solid gray}.mT-35{margin-top:18%}#sailorTableArea{max-height:300px;overflow-x:auto;overflow-y:auto}#sailorTable{white-space:nowrap}.fontPoppins{font-family:Poppins}.btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.375rem .75rem;font-size:10px;font-weight:700;font-family:Poppins}.btnCancel{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:red;padding:.375rem .75rem;font-size:10px;font-weight:700;font-family:Poppins}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.tableBg{background-color:#fff}.pT-5{padding-top:2%}.btn:focus{outline:0!important;box-shadow:none!important;color:#000}"]
                }] }
    ];
    /** @nocollapse */
    SukuTransactionHistoryComponent.ctorParameters = function () { return []; };
    SukuTransactionHistoryComponent.propDecorators = {
        transactionHistory: [{ type: Input }],
        transactionDetailsId: [{ type: Input }],
        transactionDetails: [{ type: Input }],
        headings: [{ type: Input }],
        typeId: [{ type: Input }],
        myAccountId: [{ type: Input }],
        counterPartyId: [{ type: Input }],
        counterparty: [{ type: Input }],
        amountId: [{ type: Input }],
        statusId: [{ type: Input }],
        dateCreatedId: [{ type: Input }],
        paymentManagementId: [{ type: Input }],
        action: [{ type: Output }],
        cancelId: [{ type: Input }],
        cancel: [{ type: Input }]
    };
    return SukuTransactionHistoryComponent;
}());
export { SukuTransactionHistoryComponent };
if (false) {
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.transactionHistory;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.transactionDetailsId;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.transactionDetails;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.headings;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.typeId;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.myAccountId;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.counterPartyId;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.counterparty;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.amountId;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.statusId;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.dateCreatedId;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.paymentManagementId;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.action;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.cancelId;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.cancel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyYW5zYWN0aW9uLWhpc3Rvcnkvc3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQW9CRTtRQWRTLHVCQUFrQixHQUFHLHFCQUFxQixDQUFBO1FBQzFDLHlCQUFvQixHQUFHLHNCQUFzQixDQUFDO1FBRzlDLFdBQU0sR0FBRyxRQUFRLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDNUIsbUJBQWMsR0FBRyxnQkFBZ0IsQ0FBQztRQUFXLGlCQUFZLEdBQUcsZUFBZSxDQUFDO1FBQzVFLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDdEIsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixrQkFBYSxHQUFHLGVBQWUsQ0FBQztRQUNoQyx3QkFBbUIsR0FBRyxxQkFBcUIsQ0FBQztRQUMzQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLFdBQU0sR0FBRyxRQUFRLENBQUM7SUFDWCxDQUFDOzs7O0lBRWpCLGtEQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztnQkFDZixNQUFNLEVBQUUsTUFBTTtnQkFDZCxXQUFXLEVBQUUsWUFBWTtnQkFDekIsY0FBYyxFQUFFLGVBQWU7Z0JBQy9CLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsYUFBYSxFQUFFLGNBQWM7Z0JBQzdCLG1CQUFtQixFQUFFLG9CQUFvQjthQUMxQyxDQUFDLENBQUE7SUFDSixDQUFDOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLHN1RUFBd0Q7O2lCQUV6RDs7Ozs7cUNBRUUsS0FBSzt1Q0FDTCxLQUFLO3FDQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7aUNBQ0wsS0FBSzsrQkFBd0MsS0FBSzsyQkFDbEQsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7c0NBQ0wsS0FBSzt5QkFDTCxNQUFNOzJCQUNOLEtBQUs7eUJBQ0wsS0FBSzs7SUFlUixzQ0FBQztDQUFBLEFBbENELElBa0NDO1NBN0JZLCtCQUErQjs7O0lBQzFDLDZEQUFtRDs7SUFDbkQsK0RBQXVEOztJQUN2RCw2REFBNEI7O0lBQzVCLG1EQUFrQjs7SUFDbEIsaURBQTJCOztJQUMzQixzREFBcUM7O0lBQ3JDLHlEQUEyQzs7SUFBRSx1REFBd0M7O0lBQ3JGLG1EQUErQjs7SUFDL0IsbURBQStCOztJQUMvQix3REFBeUM7O0lBQ3pDLDhEQUFxRDs7SUFDckQsaURBQXNDOztJQUN0QyxtREFBK0I7O0lBQy9CLGlEQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtdHJhbnNhY3Rpb24taGlzdG9yeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1a3UtdHJhbnNhY3Rpb24taGlzdG9yeS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN1a3VUcmFuc2FjdGlvbkhpc3RvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0cmFuc2FjdGlvbkhpc3RvcnkgPSAnVHJhbnNhY3Rpb24gSGlzdG9yeSdcbiAgQElucHV0KCkgdHJhbnNhY3Rpb25EZXRhaWxzSWQgPSAndHJhbnNhY3Rpb25EZXRhaWxzSWQnO1xuICBASW5wdXQoKSB0cmFuc2FjdGlvbkRldGFpbHM7XG4gIEBJbnB1dCgpIGhlYWRpbmdzO1xuICBASW5wdXQoKSB0eXBlSWQgPSAndHlwZUlkJztcbiAgQElucHV0KCkgbXlBY2NvdW50SWQgPSAnbXlBY2NvdW50SWQnO1xuICBASW5wdXQoKSBjb3VudGVyUGFydHlJZCA9ICdjb3VudGVyUGFydHlJZCc7ICBASW5wdXQoKSBjb3VudGVycGFydHkgPSAnQ291bnRlciBQYXJ0eSc7XG4gIEBJbnB1dCgpIGFtb3VudElkID0gJ0Ftb3VudElkJztcbiAgQElucHV0KCkgc3RhdHVzSWQgPSAnc3RhdHVzSWQnO1xuICBASW5wdXQoKSBkYXRlQ3JlYXRlZElkID0gJ2RhdGVDcmVhdGVkSWQnO1xuICBASW5wdXQoKSBwYXltZW50TWFuYWdlbWVudElkID0gJ3BheW1lbnRNYW5hZ2VtZW50SWQnO1xuICBAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBjYW5jZWxJZCA9ICdjYW5jZWxJZCc7XG4gIEBJbnB1dCgpIGNhbmNlbCA9ICdDYW5jZWwnO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaGVhZGluZ3MgPSBbe1xuICAgICAgJ3R5cGUnOiAnVHlwZScsXG4gICAgICAnbXlBY2NvdW50JzogJ015IEFjY291bnQnLFxuICAgICAgJ2NvdW50ZXJwYXJ0eSc6ICdDb3VudGVyIFBhcnR5JyxcbiAgICAgICdhbW91bnQnOiAnQW1vdW50JyxcbiAgICAgICdzdGF0dXMnOiAnU3RhdHVzJyxcbiAgICAgICdkYXRlQ3JlYXRlZCc6ICdEYXRlIENyZWF0ZWQnLFxuICAgICAgJ3BheW1lbnRNYW5hZ2VtZW50JzogJ1BheW1lbnQgTWFuYWdlbWVudCdcbiAgICB9XVxuICB9XG5cbn0iXX0=