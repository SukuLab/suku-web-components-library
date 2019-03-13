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
                'status': 'Stataus',
                'dateCreated': 'Date Created',
                'paymentManagement': 'Payment Management'
            }];
    }
}
SukuTransactionHistoryComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-transaction-history',
                template: "<div class=\"col-sm-12 fontPoppins pT-5 d-flex\">\r\n    <div class=\"form-group col-12 Rectangle-2 p-3\">\r\n      <div class=\"col-sm-12 text-center mb-2\">\r\n        {{transactionHistory}}\r\n      </div>\r\n      <div class=\"col-sm-12 table-responsive mB-4\" id=\"sailorTableArea\">\r\n        <table class=\"col-sm-12  table table-bordered tableBg\" id=\"sailorTable\" style=\"overflow-x:auto;\">\r\n          <thead>\r\n            <tr *ngFor=\"let heading of headings\">\r\n              <th scope=\"col\" class=\"text-center\" id=\"{{typeId}}\">{{heading.type}}</th>\r\n              <th scope=\"col\" class=\"text-center\" id=\"{{myAccountId}}\">{{heading.myAccount}}</th>\r\n              <th scope=\"col\" class=\"text-center\" id=\"{{counterPartyId}}\">{{heading.counterparty}}</th>\r\n              <th scope=\"col\" class=\"text-center\" id=\"{{amountId}}\">{{heading.amount}}</th>\r\n              <th scope=\"col\" class=\"text-center\" id=\"{{statusId}}\">{{heading.status}}</th>\r\n              <th scope=\"col\" class=\"text-center\" id=\"{{dateCreatedId}}\">{{heading.dateCreated}}</th>\r\n              <th scope=\"col\" class=\"text-center\" id=\"{{paymentManagementId}}\">{{heading.paymentManagement}}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr id=\"{{transactionDetailsId}}\" *ngFor=\"let transaction of transactionDetails\">\r\n              <td scope=\"row\" class=\"text-center {{( (transaction?.type) == 'outgoing') ? 'outgoing' : 'incoming'}}\">\r\n                {{transaction?.type}}</td>\r\n              <td scope=\"row\" class=\"text-center\">{{transaction?.accountName}}</td>\r\n              <td scope=\"row\" class=\"text-center\">{{transaction?.counterParty}}</td>\r\n              <td scope=\"row\" class=\"text-center\">{{transaction?.amount}}</td>\r\n              <td scope=\"row\" class=\"text-center {{( (transaction.status) == 'Failed') ? 'falied' : 'incoming'}}\">{{transaction?.status}}</td>\r\n              <td scope=\"row\" class=\"text-center\">{{transaction?.created}}</td>\r\n              <td class=\"text-center\"><button *ngIf=\"transaction?.status=='Pending'\" id=\"{{cancelId}}\" (click)=\"action.emit(transaction);\" class=\"btn  btnCancel\">{{cancel}}</button></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyYW5zYWN0aW9uLWhpc3Rvcnkvc3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sK0JBQStCO0lBZTFDO1FBZFMsdUJBQWtCLEdBQUcscUJBQXFCLENBQUE7UUFDMUMseUJBQW9CLEdBQUcsc0JBQXNCLENBQUM7UUFHOUMsV0FBTSxHQUFHLFFBQVEsQ0FBQztRQUNsQixnQkFBVyxHQUFHLGFBQWEsQ0FBQztRQUM1QixtQkFBYyxHQUFHLGdCQUFnQixDQUFDO1FBQVcsaUJBQVksR0FBRyxlQUFlLENBQUM7UUFDNUUsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLGtCQUFhLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLHdCQUFtQixHQUFHLHFCQUFxQixDQUFDO1FBQzNDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdCLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDdEIsV0FBTSxHQUFHLFFBQVEsQ0FBQztJQUNYLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztnQkFDZixNQUFNLEVBQUUsTUFBTTtnQkFDZCxXQUFXLEVBQUUsWUFBWTtnQkFDekIsY0FBYyxFQUFFLGVBQWU7Z0JBQy9CLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUUsU0FBUztnQkFDbkIsYUFBYSxFQUFFLGNBQWM7Z0JBQzdCLG1CQUFtQixFQUFFLG9CQUFvQjthQUMxQyxDQUFDLENBQUE7SUFDSixDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLHUxRUFBd0Q7O2FBRXpEOzs7OztpQ0FFRSxLQUFLO21DQUNMLEtBQUs7aUNBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzJCQUF3QyxLQUFLO3VCQUNsRCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSztrQ0FDTCxLQUFLO3FCQUNMLE1BQU07dUJBQ04sS0FBSztxQkFDTCxLQUFLOzs7O0lBYk4sNkRBQW1EOztJQUNuRCwrREFBdUQ7O0lBQ3ZELDZEQUE0Qjs7SUFDNUIsbURBQWtCOztJQUNsQixpREFBMkI7O0lBQzNCLHNEQUFxQzs7SUFDckMseURBQTJDOztJQUFFLHVEQUF3Qzs7SUFDckYsbURBQStCOztJQUMvQixtREFBK0I7O0lBQy9CLHdEQUF5Qzs7SUFDekMsOERBQXFEOztJQUNyRCxpREFBc0M7O0lBQ3RDLG1EQUErQjs7SUFDL0IsaURBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdWt1LXRyYW5zYWN0aW9uLWhpc3RvcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXRyYW5zYWN0aW9uLWhpc3RvcnkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3N1a3UtdHJhbnNhY3Rpb24taGlzdG9yeS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWt1VHJhbnNhY3Rpb25IaXN0b3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB0cmFuc2FjdGlvbkhpc3RvcnkgPSAnVHJhbnNhY3Rpb24gSGlzdG9yeSdcclxuICBASW5wdXQoKSB0cmFuc2FjdGlvbkRldGFpbHNJZCA9ICd0cmFuc2FjdGlvbkRldGFpbHNJZCc7XHJcbiAgQElucHV0KCkgdHJhbnNhY3Rpb25EZXRhaWxzO1xyXG4gIEBJbnB1dCgpIGhlYWRpbmdzO1xyXG4gIEBJbnB1dCgpIHR5cGVJZCA9ICd0eXBlSWQnO1xyXG4gIEBJbnB1dCgpIG15QWNjb3VudElkID0gJ215QWNjb3VudElkJztcclxuICBASW5wdXQoKSBjb3VudGVyUGFydHlJZCA9ICdjb3VudGVyUGFydHlJZCc7ICBASW5wdXQoKSBjb3VudGVycGFydHkgPSAnQ291bnRlciBQYXJ0eSc7XHJcbiAgQElucHV0KCkgYW1vdW50SWQgPSAnQW1vdW50SWQnO1xyXG4gIEBJbnB1dCgpIHN0YXR1c0lkID0gJ3N0YXR1c0lkJztcclxuICBASW5wdXQoKSBkYXRlQ3JlYXRlZElkID0gJ2RhdGVDcmVhdGVkSWQnO1xyXG4gIEBJbnB1dCgpIHBheW1lbnRNYW5hZ2VtZW50SWQgPSAncGF5bWVudE1hbmFnZW1lbnRJZCc7XHJcbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoKSBjYW5jZWxJZCA9ICdjYW5jZWxJZCc7XHJcbiAgQElucHV0KCkgY2FuY2VsID0gJ0NhbmNlbCc7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmhlYWRpbmdzID0gW3tcclxuICAgICAgJ3R5cGUnOiAnVHlwZScsXHJcbiAgICAgICdteUFjY291bnQnOiAnTXkgQWNjb3VudCcsXHJcbiAgICAgICdjb3VudGVycGFydHknOiAnQ291bnRlciBQYXJ0eScsXHJcbiAgICAgICdhbW91bnQnOiAnQW1vdW50JyxcclxuICAgICAgJ3N0YXR1cyc6ICdTdGF0YXVzJyxcclxuICAgICAgJ2RhdGVDcmVhdGVkJzogJ0RhdGUgQ3JlYXRlZCcsXHJcbiAgICAgICdwYXltZW50TWFuYWdlbWVudCc6ICdQYXltZW50IE1hbmFnZW1lbnQnXHJcbiAgICB9XVxyXG4gIH1cclxuXHJcbn1cclxuIl19