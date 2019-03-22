/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuTransactionHistoryComponent {
    constructor() {
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
    ngOnInit() {
        this.headings = [{
                'type': 'Type',
                'myAccount': 'My Account',
                'counterparty': 'Counter Party',
                'amount': 'Amount',
                'status': 'Status',
                'dateInitiated': 'Initiated On',
                'dateCreated': 'Completed On',
                'paymentManagement': 'Payment Management'
            }];
    }
}
SukuTransactionHistoryComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-transaction-history',
                template: "<div class=\"col fontPoppins p-5 d-flex\">\r\n  <div class=\"form-group col-12 historyWidget p-3\">\r\n    <div class=\"col-sm-12 text-center mb-2 pt-2 pb-3\">\r\n      <b>{{transactionHistory | uppercase}}</b>\r\n    </div>\r\n    <div class=\"col-sm-12 table-responsive mb-3\" id=\"transactionTable\">\r\n      <table class=\"col-sm-12  table table-bordered tableBg\" id=\"transactionHisTable\" style=\"overflow-x:auto;\">\r\n        <thead>\r\n          <tr *ngFor=\"let heading of headings\">\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{typeId}}\">{{heading.type}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{myAccountId}}\">{{heading.myAccount}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{counterPartyId}}\">{{heading.counterparty}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{amountId}}\">{{heading.amount}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{statusId}}\">{{heading.status}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{dateCreatedId}}\">{{heading.dateInitiated}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{dateCreatedId}}\">{{heading.dateCreated}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{paymentManagementId}}\">{{heading.paymentManagement}}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr id=\"{{transactionDetailsId}}\" *ngFor=\"let transaction of transactionDetails\">\r\n            <td scope=\"row\" class=\"text-center {{( (transaction?.type) == 'outgoing') ? 'outgoing' : 'incoming'}}\">\r\n              {{transaction?.type}}</td>\r\n            <td scope=\"row\" class=\"text-center\">{{transaction?.accountName}}</td>\r\n            <td scope=\"row\" class=\"text-center\">{{transaction?.counterParty}}</td>\r\n            <td scope=\"row\" class=\"text-center\">{{transaction?.amount}}</td>\r\n            <td scope=\"row\" class=\"text-center {{( (transaction.status) == 'Failed') ? 'falied' : 'incoming'}}\">{{transaction?.status}}</td>\r\n            <td scope=\"row\" class=\"text-center\">{{transaction?.created | date:'d MMM yyyy HH:MM a'}}</td>\r\n            <td scope=\"row\" class=\"text-center\">{{(transaction?.completedOn | date:'d MMM yyyy HH:MM a') || 'Not available'}}</td>\r\n            <td class=\"text-center\"><button *ngIf=\"transaction?.status=='pending'\" id=\"{{cancelId}}\" (click)=\"action.emit(transaction);\" class=\"btn  btnCancel\">{{cancel}}</button></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: [".cancelText{font-size:12px;color:red}.outgoing{color:#af0a0a}.incoming{color:#000}.falied{color:red}.defaultDiv{background-color:#d8fc40;border-radius:30px}.dangerBtn{background-color:#f13030;color:#fff}.bankDiv{background-color:#f0f4f5;border-radius:30px;border:1px solid gray}.mT-35{margin-top:18%}#transactionTable{max-height:300px;overflow-x:auto;overflow-y:auto}#transactionHisTable{white-space:nowrap}.fontPoppins{font-family:Poppins}.btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.375rem .75rem;font-size:10px;font-weight:700;font-family:Poppins}.btnCancel{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:red;padding:.475rem 2.95rem;font-size:10px;font-weight:700;font-family:Poppins}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{outline:0!important;box-shadow:none!important;color:#000}.tableBg{background-color:#fff}.pT-5{padding-top:2%}.historyWidget{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05);border-top:5px solid #a7bf2e}"]
            }] }
];
/** @nocollapse */
SukuTransactionHistoryComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyYW5zYWN0aW9uLWhpc3Rvcnkvc3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0vRSxNQUFNLE9BQU8sK0JBQStCO0lBZTFDO1FBZFMsdUJBQWtCLEdBQUcscUJBQXFCLENBQUE7UUFDMUMseUJBQW9CLEdBQUcsc0JBQXNCLENBQUM7UUFHOUMsV0FBTSxHQUFHLFFBQVEsQ0FBQztRQUNsQixnQkFBVyxHQUFHLGFBQWEsQ0FBQztRQUM1QixtQkFBYyxHQUFHLGdCQUFnQixDQUFDO1FBQVcsaUJBQVksR0FBRyxlQUFlLENBQUM7UUFDNUUsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLGtCQUFhLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLHdCQUFtQixHQUFHLHFCQUFxQixDQUFDO1FBQzNDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdCLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDdEIsV0FBTSxHQUFHLFFBQVEsQ0FBQztJQUUzQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztnQkFDZixNQUFNLEVBQUUsTUFBTTtnQkFDZCxXQUFXLEVBQUUsWUFBWTtnQkFDekIsY0FBYyxFQUFFLGVBQWU7Z0JBQy9CLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsZUFBZSxFQUFFLGNBQWM7Z0JBQy9CLGFBQWEsRUFBRSxjQUFjO2dCQUM3QixtQkFBbUIsRUFBRSxvQkFBb0I7YUFDMUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7O1lBbENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQywya0ZBQXdEOzthQUV6RDs7Ozs7aUNBRUUsS0FBSzttQ0FDTCxLQUFLO2lDQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLOzBCQUNMLEtBQUs7NkJBQ0wsS0FBSzsyQkFBd0MsS0FBSzt1QkFDbEQsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7a0NBQ0wsS0FBSztxQkFDTCxNQUFNO3VCQUNOLEtBQUs7cUJBQ0wsS0FBSzs7OztJQWJOLDZEQUFtRDs7SUFDbkQsK0RBQXVEOztJQUN2RCw2REFBNEI7O0lBQzVCLG1EQUFrQjs7SUFDbEIsaURBQTJCOztJQUMzQixzREFBcUM7O0lBQ3JDLHlEQUEyQzs7SUFBRSx1REFBd0M7O0lBQ3JGLG1EQUErQjs7SUFDL0IsbURBQStCOztJQUMvQix3REFBeUM7O0lBQ3pDLDhEQUFxRDs7SUFDckQsaURBQXNDOztJQUN0QyxtREFBK0I7O0lBQy9CLGlEQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LXRyYW5zYWN0aW9uLWhpc3RvcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXRyYW5zYWN0aW9uLWhpc3RvcnkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtdHJhbnNhY3Rpb24taGlzdG9yeS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1VHJhbnNhY3Rpb25IaXN0b3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB0cmFuc2FjdGlvbkhpc3RvcnkgPSAnVHJhbnNhY3Rpb24gSGlzdG9yeSdcclxuICBASW5wdXQoKSB0cmFuc2FjdGlvbkRldGFpbHNJZCA9ICd0cmFuc2FjdGlvbkRldGFpbHNJZCc7XHJcbiAgQElucHV0KCkgdHJhbnNhY3Rpb25EZXRhaWxzO1xyXG4gIEBJbnB1dCgpIGhlYWRpbmdzO1xyXG4gIEBJbnB1dCgpIHR5cGVJZCA9ICd0eXBlSWQnO1xyXG4gIEBJbnB1dCgpIG15QWNjb3VudElkID0gJ215QWNjb3VudElkJztcclxuICBASW5wdXQoKSBjb3VudGVyUGFydHlJZCA9ICdjb3VudGVyUGFydHlJZCc7ICBASW5wdXQoKSBjb3VudGVycGFydHkgPSAnQ291bnRlciBQYXJ0eSc7XHJcbiAgQElucHV0KCkgYW1vdW50SWQgPSAnQW1vdW50SWQnO1xyXG4gIEBJbnB1dCgpIHN0YXR1c0lkID0gJ3N0YXR1c0lkJztcclxuICBASW5wdXQoKSBkYXRlQ3JlYXRlZElkID0gJ2RhdGVDcmVhdGVkSWQnO1xyXG4gIEBJbnB1dCgpIHBheW1lbnRNYW5hZ2VtZW50SWQgPSAncGF5bWVudE1hbmFnZW1lbnRJZCc7XHJcbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoKSBjYW5jZWxJZCA9ICdjYW5jZWxJZCc7XHJcbiAgQElucHV0KCkgY2FuY2VsID0gJ0NhbmNlbCc7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaGVhZGluZ3MgPSBbe1xyXG4gICAgICAndHlwZSc6ICdUeXBlJyxcclxuICAgICAgJ215QWNjb3VudCc6ICdNeSBBY2NvdW50JyxcclxuICAgICAgJ2NvdW50ZXJwYXJ0eSc6ICdDb3VudGVyIFBhcnR5JyxcclxuICAgICAgJ2Ftb3VudCc6ICdBbW91bnQnLFxyXG4gICAgICAnc3RhdHVzJzogJ1N0YXR1cycsXHJcbiAgICAgICdkYXRlSW5pdGlhdGVkJzogJ0luaXRpYXRlZCBPbicsXHJcbiAgICAgICdkYXRlQ3JlYXRlZCc6ICdDb21wbGV0ZWQgT24nLFxyXG4gICAgICAncGF5bWVudE1hbmFnZW1lbnQnOiAnUGF5bWVudCBNYW5hZ2VtZW50J1xyXG4gICAgfV1cclxuICB9XHJcblxyXG59Il19