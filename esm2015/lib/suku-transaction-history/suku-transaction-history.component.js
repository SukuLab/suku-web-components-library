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
        this.heading = {
            type: 'Type',
            myAccount: 'My Account',
            counterparty: 'Counterparty',
            amount: 'Amount',
            status: 'Status',
            dateInitiated: 'Initiated On',
            dateCreated: 'Completed On',
            paymentManagement: 'Payment Management'
        };
    }
}
SukuTransactionHistoryComponent.decorators = [
    { type: Component, args: [{
                selector: 'suku-transaction-history',
                template: "<div class=\"col fontPoppins p-5 d-flex\">\n  <div class=\"form-group col-12 p-3\">\n    <div class=\"col-sm-12 text-center text-white historyWidget p-4 pt-2 pb-3\">\n      <p class=\"pop text-center mb-0\">{{transactionHistory | uppercase}}</p>\n    </div>\n    <div class=\"col-sm-12 table-responsive box-shadows mb-3 p-0\" id=\"transactionTable\">\n      <div class=\"col-sm-12 p-5\" *ngIf=\"!transactionDetails\">\n        <div class=\"col-sm-12 d-flex justify-content-center\">\n          <mat-spinner diameter=\"65\"></mat-spinner>\n        </div>\n        <div class=\"mt-4 pb-3 col-sm-12 text-center\">\n          <span id=\"loading\">Please wait...</span>\n        </div>\n      </div>\n      <table class=\"col-sm-12 table table-striped tableBg mb-0 pl-4 pr-5\" *ngIf=\"transactionDetails\"\n        id=\"transactionHisTable\" style=\"overflow-x:auto;\">\n        <thead>\n          <tr>\n            <th scope=\"col\" class=\"text-center col-sm-1\" id=\"{{typeId}}\">{{heading.type}}</th>\n            <th scope=\"col\" class=\"text-center col-sm-4\" id=\"{{myAccountId}}\">{{heading.myAccount}}</th>\n            <th scope=\"col\" class=\"text-center col-sm-1\" id=\"{{counterPartyId}}\">{{heading.counterparty}}</th>\n            <th scope=\"col\" class=\"text-center col-sm-2\" id=\"{{amountId}}\">{{heading.amount}}</th>\n            <th scope=\"col\" class=\"text-center col-sm-1\" id=\"{{statusId}}\">{{heading.status}}</th>\n            <th scope=\"col\" class=\"text-center col-sm-2\" id=\"{{dateCreatedId}}\">{{heading.dateInitiated}}</th>\n            <th scope=\"col\" class=\"text-center col-sm-2\" id=\"{{dateCreatedId}}\">{{heading.dateCreated}}</th>\n            <th scope=\"col\" class=\"text-center col-sm-1\" id=\"{{paymentManagementId}}\">{{heading.paymentManagement}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr id=\"{{transactionDetailsId}}\" *ngFor=\"let transaction of transactionDetails\">\n            <td scope=\"row\" class=\"text-left {{( (transaction?.type) == 'outgoing') ? 'outgoing' : 'incoming'}}\">\n              {{transaction?.type || 'N/A'}}</td>\n            <td scope=\"row\" class=\"text-left\">{{transaction?.accountName || 'N/A'}}</td>\n            <td scope=\"row\" class=\"text-left\">{{transaction?.counterParty || 'N/A'}}</td>\n            <td scope=\"row\" class=\"text-left\">${{transaction?.amount || 'N/A'}}</td>\n            <td scope=\"row\" class=\"text-left {{( (transaction.status) == 'Failed') ? 'falied' : 'incoming'}}\">\n              {{transaction?.status || 'N/A'}}</td>\n            <td scope=\"row\" class=\"text-left\">{{transaction?.created | date:'d MMM yyyy h:mm:s a'  || 'N/A'}}</td>\n            <td scope=\"row\" class=\"text-left\">\n              {{(transaction?.completedOn | date:'d MMM yyyy h:mm:s a') || 'N/A'}}</td>\n            <td class=\"text-left\"><button *ngIf=\"transaction?.status=='pending'\" id=\"{{cancelId}}\"\n                (click)=\"action.emit(transaction);\" class=\"btn  btnCancel\">{{cancel}}</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>",
                styles: [".cancelText{font-size:12px;color:red}.outgoing{color:#af0a0a}.incoming{color:#000}.falied{color:red}.defaultDiv{background-color:#d8fc40;border-radius:30px}.dangerBtn{background-color:#f13030;color:#fff}.bankDiv{background-color:#f0f4f5;border-radius:30px;border:1px solid gray}.mT-35{margin-top:18%}#transactionTable{max-height:300px;overflow-x:auto;overflow-y:auto}#transactionHisTable{white-space:nowrap}.fontPoppins{font-family:Poppins}.btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.375rem .75rem;font-size:10px;font-weight:700;font-family:Poppins}.btnCancel{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:red;padding:.475rem 2.95rem;font-size:10px;font-weight:700;font-family:Poppins}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{outline:0!important;box-shadow:none!important;color:#000}.tableBg{background-color:#fff}.pT-5{padding-top:2%}.historyWidget{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05);border-top:5px solid #a7bf2e}"]
            }] }
];
/** @nocollapse */
SukuTransactionHistoryComponent.ctorParameters = () => [];
SukuTransactionHistoryComponent.propDecorators = {
    transactionHistory: [{ type: Input }],
    transactionDetailsId: [{ type: Input }],
    transactionDetails: [{ type: Input }],
    heading: [{ type: Input }],
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
    SukuTransactionHistoryComponent.prototype.heading;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyYW5zYWN0aW9uLWhpc3Rvcnkvc3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0vRSxNQUFNLE9BQU8sK0JBQStCO0lBZ0IzQztRQWZTLHVCQUFrQixHQUFHLHFCQUFxQixDQUFDO1FBQzNDLHlCQUFvQixHQUFHLHNCQUFzQixDQUFDO1FBRzlDLFdBQU0sR0FBRyxRQUFRLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDNUIsbUJBQWMsR0FBRyxnQkFBZ0IsQ0FBQztRQUNsQyxpQkFBWSxHQUFHLGVBQWUsQ0FBQztRQUMvQixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDdEIsa0JBQWEsR0FBRyxlQUFlLENBQUM7UUFDaEMsd0JBQW1CLEdBQUcscUJBQXFCLENBQUM7UUFDM0MsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0IsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixXQUFNLEdBQUcsUUFBUSxDQUFDO0lBQ1osQ0FBQzs7OztJQUVoQixRQUFRO1FBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNkLElBQUksRUFBRSxNQUFNO1lBQ1osU0FBUyxFQUFFLFlBQVk7WUFDdkIsWUFBWSxFQUFFLGNBQWM7WUFDNUIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsYUFBYSxFQUFFLGNBQWM7WUFDN0IsV0FBVyxFQUFFLGNBQWM7WUFDM0IsaUJBQWlCLEVBQUUsb0JBQW9CO1NBQ3ZDLENBQUM7SUFDSCxDQUFDOzs7WUFsQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLCtqR0FBd0Q7O2FBRXhEOzs7OztpQ0FFQyxLQUFLO21DQUNMLEtBQUs7aUNBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7a0NBQ0wsS0FBSztxQkFDTCxNQUFNO3VCQUNOLEtBQUs7cUJBQ0wsS0FBSzs7OztJQWROLDZEQUFvRDs7SUFDcEQsK0RBQXVEOztJQUN2RCw2REFBNEI7O0lBQzVCLGtEQUFpQjs7SUFDakIsaURBQTJCOztJQUMzQixzREFBcUM7O0lBQ3JDLHlEQUEyQzs7SUFDM0MsdURBQXdDOztJQUN4QyxtREFBK0I7O0lBQy9CLG1EQUErQjs7SUFDL0Isd0RBQXlDOztJQUN6Qyw4REFBcUQ7O0lBQ3JELGlEQUFzQzs7SUFDdEMsbURBQStCOztJQUMvQixpREFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LXRyYW5zYWN0aW9uLWhpc3RvcnknLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbICcuL3N1a3UtdHJhbnNhY3Rpb24taGlzdG9yeS5jb21wb25lbnQuc2NzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1VHJhbnNhY3Rpb25IaXN0b3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgdHJhbnNhY3Rpb25IaXN0b3J5ID0gJ1RyYW5zYWN0aW9uIEhpc3RvcnknO1xuXHRASW5wdXQoKSB0cmFuc2FjdGlvbkRldGFpbHNJZCA9ICd0cmFuc2FjdGlvbkRldGFpbHNJZCc7XG5cdEBJbnB1dCgpIHRyYW5zYWN0aW9uRGV0YWlscztcblx0QElucHV0KCkgaGVhZGluZztcblx0QElucHV0KCkgdHlwZUlkID0gJ3R5cGVJZCc7XG5cdEBJbnB1dCgpIG15QWNjb3VudElkID0gJ215QWNjb3VudElkJztcblx0QElucHV0KCkgY291bnRlclBhcnR5SWQgPSAnY291bnRlclBhcnR5SWQnO1xuXHRASW5wdXQoKSBjb3VudGVycGFydHkgPSAnQ291bnRlciBQYXJ0eSc7XG5cdEBJbnB1dCgpIGFtb3VudElkID0gJ0Ftb3VudElkJztcblx0QElucHV0KCkgc3RhdHVzSWQgPSAnc3RhdHVzSWQnO1xuXHRASW5wdXQoKSBkYXRlQ3JlYXRlZElkID0gJ2RhdGVDcmVhdGVkSWQnO1xuXHRASW5wdXQoKSBwYXltZW50TWFuYWdlbWVudElkID0gJ3BheW1lbnRNYW5hZ2VtZW50SWQnO1xuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRASW5wdXQoKSBjYW5jZWxJZCA9ICdjYW5jZWxJZCc7XG5cdEBJbnB1dCgpIGNhbmNlbCA9ICdDYW5jZWwnO1xuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5oZWFkaW5nID0ge1xuXHRcdFx0dHlwZTogJ1R5cGUnLFxuXHRcdFx0bXlBY2NvdW50OiAnTXkgQWNjb3VudCcsXG5cdFx0XHRjb3VudGVycGFydHk6ICdDb3VudGVycGFydHknLFxuXHRcdFx0YW1vdW50OiAnQW1vdW50Jyxcblx0XHRcdHN0YXR1czogJ1N0YXR1cycsXG5cdFx0XHRkYXRlSW5pdGlhdGVkOiAnSW5pdGlhdGVkIE9uJyxcblx0XHRcdGRhdGVDcmVhdGVkOiAnQ29tcGxldGVkIE9uJyxcblx0XHRcdHBheW1lbnRNYW5hZ2VtZW50OiAnUGF5bWVudCBNYW5hZ2VtZW50J1xuXHRcdH07XG5cdH1cbn0iXX0=