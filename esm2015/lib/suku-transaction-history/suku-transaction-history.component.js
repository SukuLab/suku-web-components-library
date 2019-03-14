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
                'dateCreated': 'Date Created',
                'paymentManagement': 'Payment Management'
            }];
    }
}
SukuTransactionHistoryComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-transaction-history',
                template: "<div class=\"col-sm-12 fontPoppins pT-5 d-flex\">\n  <div class=\"form-group col-12 Rectangle-2 p-3\">\n    <div class=\"col-sm-12 text-center mb-2\">\n      {{transactionHistory}}\n    </div>\n    <div class=\"col-sm-12 table-responsive mB-4\" id=\"sailorTableArea\">\n      <table class=\"col-sm-12  table table-bordered tableBg\" id=\"sailorTable\" style=\"overflow-x:auto;\">\n        <thead>\n          <tr *ngFor=\"let heading of headings\">\n            <th scope=\"col\" class=\"text-center\" id=\"{{typeId}}\">{{heading.type}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{myAccountId}}\">{{heading.myAccount}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{counterPartyId}}\">{{heading.counterparty}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{amountId}}\">{{heading.amount}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{statusId}}\">{{heading.status}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{dateCreatedId}}\">{{heading.dateCreated}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{paymentManagementId}}\">{{heading.paymentManagement}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr id=\"{{transactionDetailsId}}\" *ngFor=\"let transaction of transactionDetails\">\n            <td scope=\"row\" class=\"text-center {{( (transaction?.type) == 'outgoing') ? 'outgoing' : 'incoming'}}\">\n              {{transaction?.type}}</td>\n            <td scope=\"row\" class=\"text-center\">{{transaction?.accountName}}</td>\n            <td scope=\"row\" class=\"text-center\">{{transaction?.counterParty}}</td>\n            <td scope=\"row\" class=\"text-center\">{{transaction?.amount}}</td>\n            <td scope=\"row\" class=\"text-center {{( (transaction.status) == 'failed') ? 'falied' : 'incoming'}}\">{{transaction?.status}}</td>\n            <td scope=\"row\" class=\"text-center\">{{transaction?.created}}</td>\n            <td class=\"text-center\"><button *ngIf=\"transaction?.status=='pending'\" id=\"{{cancelId}}\" (click)=\"action.emit(transaction);\"\n                class=\"btn  btnCancel\">{{cancel}}</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n",
                styles: [".cancelText{font-size:12px;color:red}.outgoing{color:#af0a0a}.incoming{color:#000}.falied{color:red}.add-btn a i{width:33px;height:33px;float:none;display:inline-block;vertical-align:middle;font-size:12px;color:#d4c5a0;text-align:center;line-height:31px;border:1px solid #76767bb3;border-radius:33px;position:absolute;top:0;left:0;z-index:10}.add-btn a:hover{text-decoration:underline}.defaultDiv{background-color:#d8fc40;border-radius:30px}.dangerBtn{background-color:#f13030;color:#fff}.bankDiv{background-color:#f0f4f5;border-radius:30px;border:1px solid gray}.mT-35{margin-top:18%}#sailorTableArea{max-height:300px;overflow-x:auto;overflow-y:auto}#sailorTable{white-space:nowrap}.fontPoppins{font-family:Poppins}.btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.375rem .75rem;font-size:10px;font-weight:700;font-family:Poppins}.btnCancel{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:red;padding:.375rem .75rem;font-size:10px;font-weight:700;font-family:Poppins}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{outline:0!important;box-shadow:none!important}.tableBg{background-color:#fff}.pT-5{padding-top:2%}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyYW5zYWN0aW9uLWhpc3Rvcnkvc3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sK0JBQStCO0lBZTFDO1FBZFMsdUJBQWtCLEdBQUcscUJBQXFCLENBQUE7UUFDMUMseUJBQW9CLEdBQUcsc0JBQXNCLENBQUM7UUFHOUMsV0FBTSxHQUFHLFFBQVEsQ0FBQztRQUNsQixnQkFBVyxHQUFHLGFBQWEsQ0FBQztRQUM1QixtQkFBYyxHQUFHLGdCQUFnQixDQUFDO1FBQVcsaUJBQVksR0FBRyxlQUFlLENBQUM7UUFDNUUsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLGtCQUFhLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLHdCQUFtQixHQUFHLHFCQUFxQixDQUFDO1FBQzNDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdCLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDdEIsV0FBTSxHQUFHLFFBQVEsQ0FBQztJQUNYLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztnQkFDZixNQUFNLEVBQUUsTUFBTTtnQkFDZCxXQUFXLEVBQUUsWUFBWTtnQkFDekIsY0FBYyxFQUFFLGVBQWU7Z0JBQy9CLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsYUFBYSxFQUFFLGNBQWM7Z0JBQzdCLG1CQUFtQixFQUFFLG9CQUFvQjthQUMxQyxDQUFDLENBQUE7SUFDSixDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLHN1RUFBd0Q7O2FBRXpEOzs7OztpQ0FFRSxLQUFLO21DQUNMLEtBQUs7aUNBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzJCQUF3QyxLQUFLO3VCQUNsRCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSztrQ0FDTCxLQUFLO3FCQUNMLE1BQU07dUJBQ04sS0FBSztxQkFDTCxLQUFLOzs7O0lBYk4sNkRBQW1EOztJQUNuRCwrREFBdUQ7O0lBQ3ZELDZEQUE0Qjs7SUFDNUIsbURBQWtCOztJQUNsQixpREFBMkI7O0lBQzNCLHNEQUFxQzs7SUFDckMseURBQTJDOztJQUFFLHVEQUF3Qzs7SUFDckYsbURBQStCOztJQUMvQixtREFBK0I7O0lBQy9CLHdEQUF5Qzs7SUFDekMsOERBQXFEOztJQUNyRCxpREFBc0M7O0lBQ3RDLG1EQUErQjs7SUFDL0IsaURBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdWt1LXRyYW5zYWN0aW9uLWhpc3RvcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVRyYW5zYWN0aW9uSGlzdG9yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRyYW5zYWN0aW9uSGlzdG9yeSA9ICdUcmFuc2FjdGlvbiBIaXN0b3J5J1xuICBASW5wdXQoKSB0cmFuc2FjdGlvbkRldGFpbHNJZCA9ICd0cmFuc2FjdGlvbkRldGFpbHNJZCc7XG4gIEBJbnB1dCgpIHRyYW5zYWN0aW9uRGV0YWlscztcbiAgQElucHV0KCkgaGVhZGluZ3M7XG4gIEBJbnB1dCgpIHR5cGVJZCA9ICd0eXBlSWQnO1xuICBASW5wdXQoKSBteUFjY291bnRJZCA9ICdteUFjY291bnRJZCc7XG4gIEBJbnB1dCgpIGNvdW50ZXJQYXJ0eUlkID0gJ2NvdW50ZXJQYXJ0eUlkJzsgIEBJbnB1dCgpIGNvdW50ZXJwYXJ0eSA9ICdDb3VudGVyIFBhcnR5JztcbiAgQElucHV0KCkgYW1vdW50SWQgPSAnQW1vdW50SWQnO1xuICBASW5wdXQoKSBzdGF0dXNJZCA9ICdzdGF0dXNJZCc7XG4gIEBJbnB1dCgpIGRhdGVDcmVhdGVkSWQgPSAnZGF0ZUNyZWF0ZWRJZCc7XG4gIEBJbnB1dCgpIHBheW1lbnRNYW5hZ2VtZW50SWQgPSAncGF5bWVudE1hbmFnZW1lbnRJZCc7XG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGNhbmNlbElkID0gJ2NhbmNlbElkJztcbiAgQElucHV0KCkgY2FuY2VsID0gJ0NhbmNlbCc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5oZWFkaW5ncyA9IFt7XG4gICAgICAndHlwZSc6ICdUeXBlJyxcbiAgICAgICdteUFjY291bnQnOiAnTXkgQWNjb3VudCcsXG4gICAgICAnY291bnRlcnBhcnR5JzogJ0NvdW50ZXIgUGFydHknLFxuICAgICAgJ2Ftb3VudCc6ICdBbW91bnQnLFxuICAgICAgJ3N0YXR1cyc6ICdTdGF0dXMnLFxuICAgICAgJ2RhdGVDcmVhdGVkJzogJ0RhdGUgQ3JlYXRlZCcsXG4gICAgICAncGF5bWVudE1hbmFnZW1lbnQnOiAnUGF5bWVudCBNYW5hZ2VtZW50J1xuICAgIH1dXG4gIH1cblxufSJdfQ==