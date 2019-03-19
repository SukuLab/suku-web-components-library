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
                template: "<div class=\"col-sm-12 fontPoppins pT-5 d-flex\">\n  <div class=\"form-group col-12 Rectangle-2 p-3\">\n    <div class=\"col-sm-12 text-center mb-2\">\n      {{transactionHistory}}\n    </div>\n    <div class=\"col-sm-12 table-responsive mB-4\" id=\"sailorTableArea\">\n      <table class=\"col-sm-12  table table-bordered tableBg\" id=\"sailorTable\" style=\"overflow-x:auto;\">\n        <thead>\n          <tr *ngFor=\"let heading of headings\">\n            <th scope=\"col\" class=\"text-center\" id=\"{{typeId}}\">{{heading.type}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{myAccountId}}\">{{heading.myAccount}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{counterPartyId}}\">{{heading.counterparty}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{amountId}}\">{{heading.amount}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{statusId}}\">{{heading.status}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{dateCreatedId}}\">{{heading.dateInitiated}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{dateCreatedId}}\">{{heading.dateCreated}}</th>\n            <th scope=\"col\" class=\"text-center\" id=\"{{paymentManagementId}}\">{{heading.paymentManagement}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr id=\"{{transactionDetailsId}}\" *ngFor=\"let transaction of transactionDetails\">\n            <td scope=\"row\" class=\"text-center {{( (transaction?.type) == 'outgoing') ? 'outgoing' : 'incoming'}}\">\n              {{transaction?.type}}</td>\n            <td scope=\"row\" class=\"text-center\">{{transaction?.accountName}}</td>\n            <td scope=\"row\" class=\"text-center\">{{transaction?.counterParty}}</td>\n            <td scope=\"row\" class=\"text-center\">{{transaction?.amount}}</td>\n            <td scope=\"row\" class=\"text-center {{( (transaction.status) == 'Failed') ? 'falied' : 'incoming'}}\">{{transaction?.status}}</td>\n            <td scope=\"row\" class=\"text-center\">{{transaction?.created | date:'d MMM yyyy HH:MM a'}}</td>\n            <td scope=\"row\" class=\"text-center\">{{(transaction?.completedOn | date:'d MMM yyyy HH:MM a') || 'Not available'}}</td>\n            <td class=\"text-center\"><button *ngIf=\"transaction?.status=='Pending'\" id=\"{{cancelId}}\" (click)=\"action.emit(transaction);\" class=\"btn  btnCancel\">{{cancel}}</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>",
                styles: [".cancelText{font-size:12px;color:red}.outgoing{color:#af0a0a}.incoming{color:#000}.falied{color:red}.add-btn a i{width:33px;height:33px;float:none;display:inline-block;vertical-align:middle;font-size:12px;color:#d4c5a0;text-align:center;line-height:31px;border:1px solid #76767bb3;border-radius:33px;position:absolute;top:0;left:0;z-index:10}.add-btn a:hover{text-decoration:underline}.defaultDiv{background-color:#d8fc40;border-radius:30px}.dangerBtn{background-color:#f13030;color:#fff}.bankDiv{background-color:#f0f4f5;border-radius:30px;border:1px solid gray}.mT-35{margin-top:18%}#sailorTableArea{max-height:300px;overflow-x:auto;overflow-y:auto}#sailorTable{white-space:nowrap}.fontPoppins{font-family:Poppins}.btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.375rem .75rem;font-size:10px;font-weight:700;font-family:Poppins}.btnCancel{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:red;padding:.375rem .75rem;font-size:10px;font-weight:700;font-family:Poppins}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.tableBg{background-color:#fff}.pT-5{padding-top:2%}.btn:focus{outline:0!important;box-shadow:none!important;color:#000}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyYW5zYWN0aW9uLWhpc3Rvcnkvc3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0vRSxNQUFNLE9BQU8sK0JBQStCO0lBZTFDO1FBZFMsdUJBQWtCLEdBQUcscUJBQXFCLENBQUE7UUFDMUMseUJBQW9CLEdBQUcsc0JBQXNCLENBQUM7UUFHOUMsV0FBTSxHQUFHLFFBQVEsQ0FBQztRQUNsQixnQkFBVyxHQUFHLGFBQWEsQ0FBQztRQUM1QixtQkFBYyxHQUFHLGdCQUFnQixDQUFDO1FBQVcsaUJBQVksR0FBRyxlQUFlLENBQUM7UUFDNUUsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLGtCQUFhLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLHdCQUFtQixHQUFHLHFCQUFxQixDQUFDO1FBQzNDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdCLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDdEIsV0FBTSxHQUFHLFFBQVEsQ0FBQztJQUUzQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztnQkFDZixNQUFNLEVBQUUsTUFBTTtnQkFDZCxXQUFXLEVBQUUsWUFBWTtnQkFDekIsY0FBYyxFQUFFLGVBQWU7Z0JBQy9CLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsZUFBZSxFQUFFLGNBQWM7Z0JBQy9CLGFBQWEsRUFBRSxjQUFjO2dCQUM3QixtQkFBbUIsRUFBRSxvQkFBb0I7YUFDMUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7O1lBbENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxvK0VBQXdEOzthQUV6RDs7Ozs7aUNBRUUsS0FBSzttQ0FDTCxLQUFLO2lDQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLOzBCQUNMLEtBQUs7NkJBQ0wsS0FBSzsyQkFBd0MsS0FBSzt1QkFDbEQsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7a0NBQ0wsS0FBSztxQkFDTCxNQUFNO3VCQUNOLEtBQUs7cUJBQ0wsS0FBSzs7OztJQWJOLDZEQUFtRDs7SUFDbkQsK0RBQXVEOztJQUN2RCw2REFBNEI7O0lBQzVCLG1EQUFrQjs7SUFDbEIsaURBQTJCOztJQUMzQixzREFBcUM7O0lBQ3JDLHlEQUEyQzs7SUFBRSx1REFBd0M7O0lBQ3JGLG1EQUErQjs7SUFDL0IsbURBQStCOztJQUMvQix3REFBeUM7O0lBQ3pDLDhEQUFxRDs7SUFDckQsaURBQXNDOztJQUN0QyxtREFBK0I7O0lBQy9CLGlEQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N1a3UtdHJhbnNhY3Rpb24taGlzdG9yeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWt1LXRyYW5zYWN0aW9uLWhpc3RvcnkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXRyYW5zYWN0aW9uLWhpc3RvcnkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1VHJhbnNhY3Rpb25IaXN0b3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdHJhbnNhY3Rpb25IaXN0b3J5ID0gJ1RyYW5zYWN0aW9uIEhpc3RvcnknXG4gIEBJbnB1dCgpIHRyYW5zYWN0aW9uRGV0YWlsc0lkID0gJ3RyYW5zYWN0aW9uRGV0YWlsc0lkJztcbiAgQElucHV0KCkgdHJhbnNhY3Rpb25EZXRhaWxzO1xuICBASW5wdXQoKSBoZWFkaW5ncztcbiAgQElucHV0KCkgdHlwZUlkID0gJ3R5cGVJZCc7XG4gIEBJbnB1dCgpIG15QWNjb3VudElkID0gJ215QWNjb3VudElkJztcbiAgQElucHV0KCkgY291bnRlclBhcnR5SWQgPSAnY291bnRlclBhcnR5SWQnOyAgQElucHV0KCkgY291bnRlcnBhcnR5ID0gJ0NvdW50ZXIgUGFydHknO1xuICBASW5wdXQoKSBhbW91bnRJZCA9ICdBbW91bnRJZCc7XG4gIEBJbnB1dCgpIHN0YXR1c0lkID0gJ3N0YXR1c0lkJztcbiAgQElucHV0KCkgZGF0ZUNyZWF0ZWRJZCA9ICdkYXRlQ3JlYXRlZElkJztcbiAgQElucHV0KCkgcGF5bWVudE1hbmFnZW1lbnRJZCA9ICdwYXltZW50TWFuYWdlbWVudElkJztcbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgY2FuY2VsSWQgPSAnY2FuY2VsSWQnO1xuICBASW5wdXQoKSBjYW5jZWwgPSAnQ2FuY2VsJztcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmhlYWRpbmdzID0gW3tcbiAgICAgICd0eXBlJzogJ1R5cGUnLFxuICAgICAgJ215QWNjb3VudCc6ICdNeSBBY2NvdW50JyxcbiAgICAgICdjb3VudGVycGFydHknOiAnQ291bnRlciBQYXJ0eScsXG4gICAgICAnYW1vdW50JzogJ0Ftb3VudCcsXG4gICAgICAnc3RhdHVzJzogJ1N0YXR1cycsXG4gICAgICAnZGF0ZUluaXRpYXRlZCc6ICdJbml0aWF0ZWQgT24nLFxuICAgICAgJ2RhdGVDcmVhdGVkJzogJ0NvbXBsZXRlZCBPbicsXG4gICAgICAncGF5bWVudE1hbmFnZW1lbnQnOiAnUGF5bWVudCBNYW5hZ2VtZW50J1xuICAgIH1dXG4gIH1cblxufSJdfQ==