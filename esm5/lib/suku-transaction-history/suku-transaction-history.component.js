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
                    template: "<div class=\"col-sm-12 fontPoppins pT-5 d-flex\">\r\n  <div class=\"form-group col-12 Rectangle-2 p-3\">\r\n    <div class=\"col-sm-12 text-center mb-2\">\r\n      {{transactionHistory}}\r\n    </div>\r\n    <div class=\"col-sm-12 table-responsive mB-4\" id=\"sailorTableArea\">\r\n      <table class=\"col-sm-12  table table-bordered tableBg\" id=\"sailorTable\" style=\"overflow-x:auto;\">\r\n        <thead>\r\n          <tr *ngFor=\"let heading of headings\">\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{typeId}}\">{{heading.type}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{myAccountId}}\">{{heading.myAccount}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{counterPartyId}}\">{{heading.counterparty}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{amountId}}\">{{heading.amount}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{statusId}}\">{{heading.status}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{dateCreatedId}}\">{{heading.dateCreated}}</th>\r\n            <th scope=\"col\" class=\"text-center\" id=\"{{paymentManagementId}}\">{{heading.paymentManagement}}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr id=\"{{transactionDetailsId}}\" *ngFor=\"let transaction of transactionDetails\">\r\n            <td scope=\"row\" class=\"text-center {{( (transaction?.type) == 'outgoing') ? 'outgoing' : 'incoming'}}\">\r\n              {{transaction?.type}}</td>\r\n            <td scope=\"row\" class=\"text-center\">{{transaction?.accountName}}</td>\r\n            <td scope=\"row\" class=\"text-center\">{{transaction?.counterParty}}</td>\r\n            <td scope=\"row\" class=\"text-center\">{{transaction?.amount}}</td>\r\n            <td scope=\"row\" class=\"text-center {{( (transaction.status) == 'failed') ? 'falied' : 'incoming'}}\">{{transaction?.status}}</td>\r\n            <td scope=\"row\" class=\"text-center\">{{transaction?.created}}</td>\r\n            <td class=\"text-center\"><button *ngIf=\"transaction?.status=='pending'\" id=\"{{cancelId}}\" (click)=\"action.emit(transaction);\"\r\n                class=\"btn  btnCancel\">{{cancel}}</button></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".cancelText{font-size:12px;color:red}.outgoing{color:#af0a0a}.incoming{color:#000}.falied{color:red}.add-btn a i{width:33px;height:33px;float:none;display:inline-block;vertical-align:middle;font-size:12px;color:#d4c5a0;text-align:center;line-height:31px;border:1px solid #76767bb3;border-radius:33px;position:absolute;top:0;left:0;z-index:10}.add-btn a:hover{text-decoration:underline}.defaultDiv{background-color:#d8fc40;border-radius:30px}.dangerBtn{background-color:#f13030;color:#fff}.bankDiv{background-color:#f0f4f5;border-radius:30px;border:1px solid gray}.mT-35{margin-top:18%}#sailorTableArea{max-height:300px;overflow-x:auto;overflow-y:auto}#sailorTable{white-space:nowrap}.fontPoppins{font-family:Poppins}.btn{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:#000;padding:.375rem .75rem;font-size:10px;font-weight:700;font-family:Poppins}.btnCancel{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#fff;color:red;padding:.375rem .75rem;font-size:10px;font-weight:700;font-family:Poppins}.btn:hover{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff}.btn:focus{outline:0!important;box-shadow:none!important}.tableBg{background-color:#fff}.pT-5{padding-top:2%}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyYW5zYWN0aW9uLWhpc3Rvcnkvc3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQW9CRTtRQWRTLHVCQUFrQixHQUFHLHFCQUFxQixDQUFBO1FBQzFDLHlCQUFvQixHQUFHLHNCQUFzQixDQUFDO1FBRzlDLFdBQU0sR0FBRyxRQUFRLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDNUIsbUJBQWMsR0FBRyxnQkFBZ0IsQ0FBQztRQUFXLGlCQUFZLEdBQUcsZUFBZSxDQUFDO1FBQzVFLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDdEIsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN0QixrQkFBYSxHQUFHLGVBQWUsQ0FBQztRQUNoQyx3QkFBbUIsR0FBRyxxQkFBcUIsQ0FBQztRQUMzQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLFdBQU0sR0FBRyxRQUFRLENBQUM7SUFDWCxDQUFDOzs7O0lBRWpCLGtEQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztnQkFDZixNQUFNLEVBQUUsTUFBTTtnQkFDZCxXQUFXLEVBQUUsWUFBWTtnQkFDekIsY0FBYyxFQUFFLGVBQWU7Z0JBQy9CLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsYUFBYSxFQUFFLGNBQWM7Z0JBQzdCLG1CQUFtQixFQUFFLG9CQUFvQjthQUMxQyxDQUFDLENBQUE7SUFDSixDQUFDOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLDR5RUFBd0Q7O2lCQUV6RDs7Ozs7cUNBRUUsS0FBSzt1Q0FDTCxLQUFLO3FDQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7aUNBQ0wsS0FBSzsrQkFBd0MsS0FBSzsyQkFDbEQsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7c0NBQ0wsS0FBSzt5QkFDTCxNQUFNOzJCQUNOLEtBQUs7eUJBQ0wsS0FBSzs7SUFlUixzQ0FBQztDQUFBLEFBbENELElBa0NDO1NBN0JZLCtCQUErQjs7O0lBQzFDLDZEQUFtRDs7SUFDbkQsK0RBQXVEOztJQUN2RCw2REFBNEI7O0lBQzVCLG1EQUFrQjs7SUFDbEIsaURBQTJCOztJQUMzQixzREFBcUM7O0lBQ3JDLHlEQUEyQzs7SUFBRSx1REFBd0M7O0lBQ3JGLG1EQUErQjs7SUFDL0IsbURBQStCOztJQUMvQix3REFBeUM7O0lBQ3pDLDhEQUFxRDs7SUFDckQsaURBQXNDOztJQUN0QyxtREFBK0I7O0lBQy9CLGlEQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zdWt1LXRyYW5zYWN0aW9uLWhpc3RvcnkuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VrdVRyYW5zYWN0aW9uSGlzdG9yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdHJhbnNhY3Rpb25IaXN0b3J5ID0gJ1RyYW5zYWN0aW9uIEhpc3RvcnknXHJcbiAgQElucHV0KCkgdHJhbnNhY3Rpb25EZXRhaWxzSWQgPSAndHJhbnNhY3Rpb25EZXRhaWxzSWQnO1xyXG4gIEBJbnB1dCgpIHRyYW5zYWN0aW9uRGV0YWlscztcclxuICBASW5wdXQoKSBoZWFkaW5ncztcclxuICBASW5wdXQoKSB0eXBlSWQgPSAndHlwZUlkJztcclxuICBASW5wdXQoKSBteUFjY291bnRJZCA9ICdteUFjY291bnRJZCc7XHJcbiAgQElucHV0KCkgY291bnRlclBhcnR5SWQgPSAnY291bnRlclBhcnR5SWQnOyAgQElucHV0KCkgY291bnRlcnBhcnR5ID0gJ0NvdW50ZXIgUGFydHknO1xyXG4gIEBJbnB1dCgpIGFtb3VudElkID0gJ0Ftb3VudElkJztcclxuICBASW5wdXQoKSBzdGF0dXNJZCA9ICdzdGF0dXNJZCc7XHJcbiAgQElucHV0KCkgZGF0ZUNyZWF0ZWRJZCA9ICdkYXRlQ3JlYXRlZElkJztcclxuICBASW5wdXQoKSBwYXltZW50TWFuYWdlbWVudElkID0gJ3BheW1lbnRNYW5hZ2VtZW50SWQnO1xyXG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCkgY2FuY2VsSWQgPSAnY2FuY2VsSWQnO1xyXG4gIEBJbnB1dCgpIGNhbmNlbCA9ICdDYW5jZWwnO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5oZWFkaW5ncyA9IFt7XHJcbiAgICAgICd0eXBlJzogJ1R5cGUnLFxyXG4gICAgICAnbXlBY2NvdW50JzogJ015IEFjY291bnQnLFxyXG4gICAgICAnY291bnRlcnBhcnR5JzogJ0NvdW50ZXIgUGFydHknLFxyXG4gICAgICAnYW1vdW50JzogJ0Ftb3VudCcsXHJcbiAgICAgICdzdGF0dXMnOiAnU3RhdHVzJyxcclxuICAgICAgJ2RhdGVDcmVhdGVkJzogJ0RhdGUgQ3JlYXRlZCcsXHJcbiAgICAgICdwYXltZW50TWFuYWdlbWVudCc6ICdQYXltZW50IE1hbmFnZW1lbnQnXHJcbiAgICB9XVxyXG4gIH1cclxuXHJcbn0iXX0=