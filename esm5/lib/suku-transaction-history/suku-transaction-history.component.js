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
                'dateInitiated': 'Initiated On',
                'dateCreated': 'Completed On',
                'paymentManagement': 'Payment Management'
            }];
    };
    SukuTransactionHistoryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'suku-transaction-history',
                    template: "<div class=\"col fontPoppins p-5 d-flex\">\r\n  <div class=\"form-group col-12 historyWidget p-3\">\r\n    <div class=\"col-sm-12 text-center mb-2 pt-2 pb-3\">\r\n      <b>{{transactionHistory | uppercase}}</b>\r\n    </div>\r\n    <div class=\"col-sm-12 table-responsive mb-3\" id=\"transactionTable\">\r\n      <table class=\"col-sm-12  table table-bordered tableBg\" id=\"transactionHisTable\" style=\"overflow-x:auto;\">\r\n        <thead>\r\n          <tr *ngFor=\"let heading of headings\">\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{typeId}}\">{{heading.type}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{myAccountId}}\">{{heading.myAccount}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{counterPartyId}}\">{{heading.counterparty}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{amountId}}\">{{heading.amount}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{statusId}}\">{{heading.status}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{dateCreatedId}}\">{{heading.dateInitiated}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{dateCreatedId}}\">{{heading.dateCreated}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{paymentManagementId}}\">{{heading.paymentManagement}}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr id=\"{{transactionDetailsId}}\" *ngFor=\"let transaction of transactionDetails\">\r\n            <td scope=\"row\" class=\"text-center {{( (transaction?.type) == 'outgoing') ? 'outgoing' : 'incoming'}}\">\r\n              {{transaction?.type}}</td>\r\n            <td scope=\"row\" class=\"text-center\">{{transaction?.accountName}}</td>\r\n            <td scope=\"row\" class=\"text-center\">{{transaction?.counterParty}}</td>\r\n            <td scope=\"row\" class=\"text-center\">{{transaction?.amount}}</td>\r\n            <td scope=\"row\" class=\"text-center {{( (transaction.status) == 'Failed') ? 'falied' : 'incoming'}}\">{{transaction?.status}}</td>\r\n            <td scope=\"row\" class=\"text-center\">{{transaction?.created | date:'d MMM yyyy HH:MM a'}}</td>\r\n            <td scope=\"row\" class=\"text-center\">{{(transaction?.completedOn | date:'d MMM yyyy HH:MM a') || 'Not available'}}</td>\r\n            <td class=\"text-center\"><button *ngIf=\"transaction?.status=='pending' && transaction?.type=='outgoing'\" id=\"{{cancelId}}\" (click)=\"action.emit(transaction);\" class=\"btn  btnCancel\">{{cancel}}</button></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [".cancelText{font-size:12px;color:red}.outgoing{color:#af0a0a}.incoming{color:#000}.falied{color:red}.defaultDiv{background-color:#d8fc40;border-radius:30px}.dangerBtn{background-color:#f13030;color:#fff}.bankDiv{background-color:#f0f4f5;border-radius:30px;border:1px solid gray}.mT-35{margin-top:18%}#transactionTable{max-height:300px;overflow-x:auto;overflow-y:auto}#transactionHisTable{white-space:nowrap}.fontPoppins{font-family:Poppins}.btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.375rem .75rem;font-size:10px;font-weight:700;font-family:Poppins}.btnCancel{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:red;padding:.475rem 2.95rem;font-size:10px;font-weight:700;font-family:Poppins}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{outline:0!important;box-shadow:none!important;color:#000}.tableBg{background-color:#fff}.pT-5{padding-top:2%}.historyWidget{border-radius:0 0 41px 41px;background-color:#fff;box-shadow:0 12px 14px 0 rgba(0,0,0,.05);border-top:5px solid #a7bf2e}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyYW5zYWN0aW9uLWhpc3Rvcnkvc3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRTtJQW9CRTtRQWRTLHVCQUFrQixHQUFHLHFCQUFxQixDQUFBO1FBQzFDLHlCQUFvQixHQUFHLHNCQUFzQixDQUFDO1FBRzlDLFdBQU0sR0FBRyxRQUFRLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDNUIsbUJBQWMsR0FBRyxnQkFBZ0IsQ0FBQztRQUFXLGlCQUFZLEdBQUcsZUFBZSxDQUFDO1FBQzVFLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDdEIsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixrQkFBYSxHQUFHLGVBQWUsQ0FBQztRQUNoQyx3QkFBbUIsR0FBRyxxQkFBcUIsQ0FBQztRQUMzQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLFdBQU0sR0FBRyxRQUFRLENBQUM7SUFFM0IsQ0FBQzs7OztJQUVELGtEQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztnQkFDZixNQUFNLEVBQUUsTUFBTTtnQkFDZCxXQUFXLEVBQUUsWUFBWTtnQkFDekIsY0FBYyxFQUFFLGVBQWU7Z0JBQy9CLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsZUFBZSxFQUFFLGNBQWM7Z0JBQy9CLGFBQWEsRUFBRSxjQUFjO2dCQUM3QixtQkFBbUIsRUFBRSxvQkFBb0I7YUFDMUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7Z0JBbENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyw0bUZBQXdEOztpQkFFekQ7Ozs7O3FDQUVFLEtBQUs7dUNBQ0wsS0FBSztxQ0FDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxLQUFLO2lDQUNMLEtBQUs7K0JBQXdDLEtBQUs7MkJBQ2xELEtBQUs7MkJBQ0wsS0FBSztnQ0FDTCxLQUFLO3NDQUNMLEtBQUs7eUJBQ0wsTUFBTTsyQkFDTixLQUFLO3lCQUNMLEtBQUs7O0lBaUJSLHNDQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0EvQlksK0JBQStCOzs7SUFDMUMsNkRBQW1EOztJQUNuRCwrREFBdUQ7O0lBQ3ZELDZEQUE0Qjs7SUFDNUIsbURBQWtCOztJQUNsQixpREFBMkI7O0lBQzNCLHNEQUFxQzs7SUFDckMseURBQTJDOztJQUFFLHVEQUF3Qzs7SUFDckYsbURBQStCOztJQUMvQixtREFBK0I7O0lBQy9CLHdEQUF5Qzs7SUFDekMsOERBQXFEOztJQUNyRCxpREFBc0M7O0lBQ3RDLG1EQUErQjs7SUFDL0IsaURBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1a3UtdHJhbnNhY3Rpb24taGlzdG9yeScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1a3UtdHJhbnNhY3Rpb24taGlzdG9yeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1a3VUcmFuc2FjdGlvbkhpc3RvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHRyYW5zYWN0aW9uSGlzdG9yeSA9ICdUcmFuc2FjdGlvbiBIaXN0b3J5J1xyXG4gIEBJbnB1dCgpIHRyYW5zYWN0aW9uRGV0YWlsc0lkID0gJ3RyYW5zYWN0aW9uRGV0YWlsc0lkJztcclxuICBASW5wdXQoKSB0cmFuc2FjdGlvbkRldGFpbHM7XHJcbiAgQElucHV0KCkgaGVhZGluZ3M7XHJcbiAgQElucHV0KCkgdHlwZUlkID0gJ3R5cGVJZCc7XHJcbiAgQElucHV0KCkgbXlBY2NvdW50SWQgPSAnbXlBY2NvdW50SWQnO1xyXG4gIEBJbnB1dCgpIGNvdW50ZXJQYXJ0eUlkID0gJ2NvdW50ZXJQYXJ0eUlkJzsgIEBJbnB1dCgpIGNvdW50ZXJwYXJ0eSA9ICdDb3VudGVyIFBhcnR5JztcclxuICBASW5wdXQoKSBhbW91bnRJZCA9ICdBbW91bnRJZCc7XHJcbiAgQElucHV0KCkgc3RhdHVzSWQgPSAnc3RhdHVzSWQnO1xyXG4gIEBJbnB1dCgpIGRhdGVDcmVhdGVkSWQgPSAnZGF0ZUNyZWF0ZWRJZCc7XHJcbiAgQElucHV0KCkgcGF5bWVudE1hbmFnZW1lbnRJZCA9ICdwYXltZW50TWFuYWdlbWVudElkJztcclxuICBAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBJbnB1dCgpIGNhbmNlbElkID0gJ2NhbmNlbElkJztcclxuICBASW5wdXQoKSBjYW5jZWwgPSAnQ2FuY2VsJztcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5oZWFkaW5ncyA9IFt7XHJcbiAgICAgICd0eXBlJzogJ1R5cGUnLFxyXG4gICAgICAnbXlBY2NvdW50JzogJ015IEFjY291bnQnLFxyXG4gICAgICAnY291bnRlcnBhcnR5JzogJ0NvdW50ZXIgUGFydHknLFxyXG4gICAgICAnYW1vdW50JzogJ0Ftb3VudCcsXHJcbiAgICAgICdzdGF0dXMnOiAnU3RhdHVzJyxcclxuICAgICAgJ2RhdGVJbml0aWF0ZWQnOiAnSW5pdGlhdGVkIE9uJyxcclxuICAgICAgJ2RhdGVDcmVhdGVkJzogJ0NvbXBsZXRlZCBPbicsXHJcbiAgICAgICdwYXltZW50TWFuYWdlbWVudCc6ICdQYXltZW50IE1hbmFnZW1lbnQnXHJcbiAgICB9XVxyXG4gIH1cclxuXHJcbn0iXX0=