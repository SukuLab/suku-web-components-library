/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class SukuTransactionHistoryComponent {
    constructor() {
        this.transactionHistory = 'Transaction History';
        this.transactionDetailsId = 'transactionDetailsId';
        this.customClass = 'historyWidget p-4 pt-2 pb-3 text-white text-center ';
        this.tableBgColor = 'tableBg mb-0 pl-4 pr-5';
        this.transactionHistoryTittle = 'pop text-center mb-0';
        this.bgCustomClass = 'box-shadows mb-3 p-0';
        this.spinnerCustomClass = 'justify-content-center';
        this.spinnerRadius = '65';
        this.spinnerColor = 'primary';
        this.loadingCustomClass = 'mt-4 pb-3 col-sm-12 text-center';
        this.loaderMessage = 'Please wait... ';
        this.tableHeaderCustomClass = 'text-center';
        this.tableBodyCustomClass = 'text-left';
        this.buttonCustomClass = 'btn  btnCancel';
        this.typeId = 'typeId';
        this.myAccountId = 'myAccountId';
        this.counterPartyId = 'counterPartyId';
        this.amountId = 'AmountId';
        this.statusId = 'statusId';
        this.dateCreatedId = 'dateCreatedId';
        this.paymentManagementId = 'paymentManagementId';
        this.action = new EventEmitter();
        this.cancelBtnLabel = 'Cancel';
        this.cancelId = 'cancelId';
        this.transactionDetails = [];
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
                template: "<div class=\"col d-flex p-0\">\n  <div class=\"col-12 p-0\">\n    <div class=\"col-sm-12 {{customClass}}\">\n      <p [class]=\"transactionHistoryTittle\">{{transactionHistory | uppercase}}</p>\n    </div>\n    <div class=\"col-sm-12 table-responsive {{bgCustomClass}}\" id=\"transactionTable\">\n      <div class=\"col-sm-12 p-5\" *ngIf=\"!transactionDetails\">\n        <div class=\"col-sm-12 d-flex {{spinnerCustomClass}}\">\n          <mat-spinner color=\"{{spinnerColor}}\" diameter=\"{{spinnerRadius}}\"></mat-spinner>\n        </div>\n        <div [class]=\"loadingCustomClass\">\n          <span [style.font-size.rem]=\"loadingSize\" id=\"loading\" [style.color]=\"loadingColor\"\n            [style.font-weight]=\"loadingWeight\">{{loaderMessage}}</span>\n        </div>\n      </div>\n      <table class=\"col-sm-12 table table-striped {{tableBgColor}} responsive\" *ngIf=\"transactionDetails\"\n        id=\"transactionHisTable\">\n        <thead>\n          <tr>\n            <th scope=\"col\" [class]=\"tableHeaderCustomClass\" id=\"{{typeId}}\">{{heading.type}}</th>\n            <th scope=\"col\" [class]=\"tableHeaderCustomClass\" id=\"{{myAccountId}}\">{{heading.myAccount}}</th>\n            <th scope=\"col\" [class]=\"tableHeaderCustomClass\" id=\"{{counterPartyId}}\">{{heading.counterparty}}</th>\n            <th scope=\"col\" [class]=\"tableHeaderCustomClass\" id=\"{{amountId}}\">{{heading.amount}}</th>\n            <th scope=\"col\" [class]=\"tableHeaderCustomClass\" id=\"{{statusId}}\">{{heading.status}}</th>\n            <th scope=\"col\" [class]=\"tableHeaderCustomClass\" id=\"{{dateCreatedId}}\">{{heading.dateInitiated}}</th>\n            <th scope=\"col\" [class]=\"tableHeaderCustomClass\" id=\"{{dateCreatedId}}\">{{heading.dateCreated}}</th>\n            <th scope=\"col\" [class]=\"tableHeaderCustomClass\" id=\"{{paymentManagementId}}\">{{heading.paymentManagement}}\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr id=\"{{transactionDetailsId}}\" *ngFor=\"let transaction of transactionDetails\">\n            <td scope=\"row\"\n              class=\" {{tableBodyCustomClass}} {{( (transaction?.type) == 'outgoing') ? 'outgoing' : 'incoming'}}\">\n              <span class=\"pl-4\">{{transaction?.type || 'Not available'}}</span></td>\n            <td scope=\"row\" [class]=\"tableBodyCustomClass\"><span\n                class=\"pl-4\">{{transaction?.accountName || 'Not available'}}</span>\n            </td>\n            <td scope=\"row\" [class]=\"tableBodyCustomClass\"><span\n                class=\"pl-4\">{{transaction?.counterParty || 'Not available'}}</span>\n            </td>\n            <td scope=\"row\" [class]=\"tableBodyCustomClass\"><span\n                class=\"pl-4\">${{transaction?.amount || 'Not available'}}</span></td>\n            <td scope=\"row\"\n              class=\" {{tableBodyCustomClass}} {{( (transaction.status) == 'Failed') ? 'falied' : 'incoming'}}\">\n              <span class=\"pl-4\">{{transaction?.status || 'Not available'}}</span></td>\n            <td scope=\"row\" [class]=\"tableBodyCustomClass\"><span\n                class=\"pl-4\">{{transaction?.created | date:'d MMM yyyy h:mm:s a'  || 'Not available'}}</span>\n            </td>\n            <td scope=\"row\" [class]=\"tableBodyCustomClass\"><span class=\"pl-4\">\n                {{(transaction?.completedOn | date:'d MMM yyyy h:mm:s a') || 'Not available'}}</span>\n            </td>\n            <td [class]=\"tableBodyCustomClass\"><button id=\"{{cancelId}}\" *ngIf=\"transaction?.status=='pending'\"\n                (click)=\"action.emit(transaction);\" [class]=\"buttonCustomClass\">{{cancelBtnLabel}}</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>",
                styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);@import url(https://fonts.googleapis.com/icon?family=Material+Icons);@import url(https://fonts.googleapis.com/css?family=Poppins:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Encode+Sans:200i,400,700);@import url(https://fonts.googleapis.com/css?family=Abel&display=swap);@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap);@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800,900&display=swap);:root{--suku-primary-font:'Poppins',sans-serif;--suku-secondary-font:'Encode Sans',sans-serif;--suku-ternary-font:'abelregular',sans-serif;--suku-primary-color:#a7bf2e;--suku-secondary-color:#d8fc40;--suku-warning-color:#FF0000;--suku-bg-primary:#2f2e2e;--suku-bg-secondary:#272727;--suku-bg-ternary:#35393e;--suku-homepage-bg:#ffffff;--suku-button-default-bg:#303030;--suku-button-disabled-bg:#d9d9d9;--suku-icon-disabled-color:#7f7f7f;--suku-default-icon-color:#b6b6b6;--suku-text-heading:#1d1d1d;--suku-text-sub-heading:#cccccc;--suku-text-label-one:#b6b6b6;--suku-text-label-two:#ffffff;--suku-text-label-three:#f2f2f2;--suku-text-link:#3e3e3e;--suku-text-info:#757575;--suku-primary-border-color:#a7bf2e;--suku-default-border-color:#e2e2e2;--suku-secondary-border-color:#757575;--suku-primary-border-radius:0 40px 0 0;--suku-secondary-border-radius:0px 0px 41px 41px;--suku-search-border-radius:10px 18px 18px 16px;--suku-default-border-radius:0px;--suku-default-button-border-radius:28px 76px 63px;--suku-star-empty-bg:#e1e1e1;--suku-star-full-bg:rgb(137; 137; 137);--suku-star-size:20px;--suku-filter-bg:#ffffff;--suku-default-bg:#ffffff;--suku-filter-label:#b6b6b6;--suku-filter-label-selected:black;--suku-progressbar-active-bg:#a7bf2e;--suku-progressbar-upcoming-bg:#757575;--suku-progressbar-completed-bg:#1c1c1c;--suku-profile-bg-color:#b6b6b6;--suku-profile-text-one:#dcd8d8f0;--suku-profile-text-two:#504e4e;--suku-font-size-1:11px;--suku-font-size-2:12px;--suku-font-size-3:14px;--suku-font-size-4:15px;--suku-font-size-5:17px;--suku-font-size-6:20px;--suku-font-size-7:22px;--suku-font-size-8:24px;--suku-font-size-9:26px;--suku-font-size-10:30px;--suku-font-size-11:50px}.btn{background-color:#fff;color:#000;font-size:12px!important;font-family:var(--suku-primary-font)}.btn:hover{border:2px solid #a7bf2e;background-color:#a7bf2e;color:#fff}.btn:focus{border:2px solid #a7bf2e;border-radius:28px 76px 63px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.btn-info{border:2px solid;border-color:var(--suku-primary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-info:hover{background-color:var(--suku-primary-border-color)!important;color:#fff}.btn-info:focus{background-color:var(--suku-primary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.btn-default{border:2px solid;border-color:var(--suku-secondary-border-color)!important;border-radius:28px 76px 63px;background-color:#fff;color:#000;font-size:12px!important;font-weight:700;font-family:var(--suku-primary-font)}.btn-default:hover{background-color:var(--suku-secondary-border-color)!important;color:#fff}.btn-default:focus{background-color:var(--suku-secondary-border-color)!important;color:#fff;outline:0!important;box-shadow:none!important}.suku-info .btn-info{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:#00000099}.suku-info .btn-info:active,.suku-info .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff}.suku-info .btn-info.disabled{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff;color:grey}.suku-info .btn-info.disabled.focus,.suku-info .btn-info.disabled:focus,.suku-info .btn-info.disabled:hover,.suku-info .btn-info[disabled].focus,.suku-info .btn-info[disabled]:focus,.suku-info .btn-info[disabled]:hover,.suku-info fieldset[disabled] .btn-info.focus,.suku-info fieldset[disabled] .btn-info:focus,.suku-info fieldset[disabled] .btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#fff!important;color:grey;box-shadow:none!important}.suku-info .btn-info.focus,.suku-info .btn-info:focus{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.suku-info .btn-info.active.focus,.suku-info .btn-info.active:focus,.suku-info .btn-info.active:hover,.suku-info .btn-info:active.focus,.suku-info .btn-info:active:focus,.suku-info .btn-info:active:hover,.suku-info .open>.dropdown-toggle .btn-info.focus,.suku-info .open>.dropdown-toggle .btn-info:focus,.suku-info .open>.dropdown-toggle.btn-info:hover{border:2px solid #a7bf2e;padding:10px 32px;background-color:#a7bf2e;color:#fff;box-shadow:none!important}.cancelText{font-size:12px;color:var(--suku-warning-color)}.outgoing{color:var(--suku-warning-color)}.incoming{color:var(--suku-filter-label-selected)}.falied{color:var(--suku-warning-color)}.defaultDiv{background-color:var(--suku-secondary-color);border-radius:30px}.responsive{overflow-x:auto}.mT-35{margin-top:18%}#transactionTable{max-height:287px;overflow-x:auto;overflow-y:auto}#transactionHisTable{white-space:nowrap}.fontPoppins{font-family:var(--suku-primary-font)!important}.btn{border:solid 2px var(--suku-primary-border-color);border-radius:28px 76px 63px;background-color:var(--suku-homepage-bg);color:var(--suku-filter-label-selected);padding:.375rem .75rem;font-weight:700;font-family:var(--suku-primary-font)!important}.btnCancel{border:solid 2px var(--suku-primary-border-color);border-radius:28px 76px 63px;background-color:var(--suku-homepage-bg);color:var(--suku-warning-color);padding:.475rem 2.95rem;font-size:10px;font-weight:700;font-family:var(--suku-primary-font)!important}.btn:hover{border:solid 2px var(--suku-primary-border-color);border-radius:28px 76px 63px;background-color:var(--suku-primary-color);color:var(--suku-text-label-two)}.btn:focus{outline:0!important;box-shadow:none!important;color:var(--suku-filter-label-selected)}.tableBg{background-color:var(--suku-homepage-bg)}.pT-5{padding-top:2%}.historyWidget{background:var(--suku-bg-primary);border-left:5px solid var(--suku-primary-border-color);border-radius:0 40px 0 0;box-shadow:-4px 4px 5px 0 rgba(0,0,0,.08)}.box-shadows{box-shadow:0 12px 14px 0 rgba(0,0,0,.05);background-color:var(--suku-homepage-bg)}.pop{font-family:var(--suku-primary-font);font-weight:600;font-size:20px}.table{font-family:var(--suku-primary-font)}td{border:none}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.03)}::-webkit-scrollbar{width:3px;height:3px}::-webkit-scrollbar:vertical{width:3px!important}::-webkit-scrollbar-track{-webkit-box-shadow:inset 10px 5px 6px #27272f36;border-radius:10px;box-shadow:inset 10px 5px 6px #27272f36}::-webkit-scrollbar-thumb{border-radius:32px;box-shadow:0 0 0 #000;-webkit-box-shadow:inset 28px 28px 28px 28px #2b30348f}"]
            }] }
];
/** @nocollapse */
SukuTransactionHistoryComponent.ctorParameters = () => [];
SukuTransactionHistoryComponent.propDecorators = {
    transactionHistory: [{ type: Input, args: ['transaction-history',] }],
    transactionDetailsId: [{ type: Input, args: ['transaction-details-id',] }],
    heading: [{ type: Input }],
    customClass: [{ type: Input, args: ['custom-class',] }],
    tableBgColor: [{ type: Input, args: ['table-bg-color',] }],
    transactionHistoryTittle: [{ type: Input, args: ['transaction-history-tittle',] }],
    bgCustomClass: [{ type: Input, args: ['bg-custom-class',] }],
    spinnerCustomClass: [{ type: Input, args: ['spinner-custom-class',] }],
    spinnerRadius: [{ type: Input, args: ['spinner-radius',] }],
    spinnerColor: [{ type: Input, args: ['spinner-color',] }],
    loadingCustomClass: [{ type: Input, args: ['loading-custom-class',] }],
    loaderMessage: [{ type: Input, args: ['loader-message',] }],
    loadingColor: [{ type: Input, args: ['loading-color',] }],
    loadingSize: [{ type: Input, args: ['loading-size',] }],
    loadingWeight: [{ type: Input, args: ['loading-weight',] }],
    tableHeaderCustomClass: [{ type: Input, args: ['table-header-custom-class',] }],
    tableBodyCustomClass: [{ type: Input, args: ['table-body-custom-class',] }],
    buttonCustomClass: [{ type: Input, args: ['button-custom-class',] }],
    typeId: [{ type: Input, args: ['type-id',] }],
    myAccountId: [{ type: Input, args: ['my-account-id',] }],
    counterPartyId: [{ type: Input, args: ['counter-party-id',] }],
    amountId: [{ type: Input, args: ['amount-id',] }],
    statusId: [{ type: Input, args: ['status-id',] }],
    dateCreatedId: [{ type: Input, args: ['date-created-id',] }],
    paymentManagementId: [{ type: Input, args: ['payment-management-Id',] }],
    action: [{ type: Output }],
    cancelBtnLabel: [{ type: Input, args: ['cancel-btn-label',] }],
    cancelId: [{ type: Input, args: ['cancel-id',] }],
    transactionDetails: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.transactionHistory;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.transactionDetailsId;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.heading;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.customClass;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.tableBgColor;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.transactionHistoryTittle;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.bgCustomClass;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.spinnerCustomClass;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.spinnerRadius;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.spinnerColor;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.loadingCustomClass;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.loaderMessage;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.loadingColor;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.loadingSize;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.loadingWeight;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.tableHeaderCustomClass;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.tableBodyCustomClass;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.buttonCustomClass;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.typeId;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.myAccountId;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.counterPartyId;
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
    SukuTransactionHistoryComponent.prototype.cancelBtnLabel;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.cancelId;
    /** @type {?} */
    SukuTransactionHistoryComponent.prototype.transactionDetails;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyYW5zYWN0aW9uLWhpc3Rvcnkvc3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0vRSxNQUFNLE9BQU8sK0JBQStCO0lBOEIzQztRQTdCOEIsdUJBQWtCLEdBQUcscUJBQXFCLENBQUM7UUFDeEMseUJBQW9CLEdBQUcsc0JBQXNCLENBQUM7UUFFeEQsZ0JBQVcsR0FBRyxxREFBcUQsQ0FBQztRQUNsRSxpQkFBWSxHQUFHLHdCQUF3QixDQUFDO1FBQzVCLDZCQUF3QixHQUFHLHNCQUFzQixDQUFDO1FBQzdELGtCQUFhLEdBQUcsc0JBQXNCLENBQUM7UUFDbEMsdUJBQWtCLEdBQUcsd0JBQXdCLENBQUM7UUFDcEQsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDdEIsaUJBQVksR0FBRyxTQUFTLENBQUM7UUFDbEIsdUJBQWtCLEdBQUcsaUNBQWlDLENBQUM7UUFDN0Qsa0JBQWEsR0FBRyxpQkFBaUIsQ0FBQztRQUl2QiwyQkFBc0IsR0FBRyxhQUFhLENBQUM7UUFDekMseUJBQW9CLEdBQUcsV0FBVyxDQUFDO1FBQ3ZDLHNCQUFpQixHQUFHLGdCQUFnQixDQUFDO1FBQ2pELFdBQU0sR0FBRyxRQUFRLENBQUM7UUFDWixnQkFBVyxHQUFHLGFBQWEsQ0FBQztRQUN6QixtQkFBYyxHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDdEIsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUNoQixrQkFBYSxHQUFHLGVBQWUsQ0FBQztRQUMxQix3QkFBbUIsR0FBRyxxQkFBcUIsQ0FBQztRQUNsRSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNYLG1CQUFjLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDakMsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNQLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDZCxJQUFJLEVBQUUsTUFBTTtZQUNaLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLFlBQVksRUFBRSxjQUFjO1lBQzVCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLGFBQWEsRUFBRSxjQUFjO1lBQzdCLFdBQVcsRUFBRSxjQUFjO1lBQzNCLGlCQUFpQixFQUFFLG9CQUFvQjtTQUN2QyxDQUFDO0lBQ0gsQ0FBQzs7O1lBaERELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQywydEhBQXdEOzthQUV4RDs7Ozs7aUNBRUMsS0FBSyxTQUFDLHFCQUFxQjttQ0FDM0IsS0FBSyxTQUFDLHdCQUF3QjtzQkFDOUIsS0FBSzswQkFDTCxLQUFLLFNBQUMsY0FBYzsyQkFDcEIsS0FBSyxTQUFDLGdCQUFnQjt1Q0FDdEIsS0FBSyxTQUFDLDRCQUE0Qjs0QkFDbEMsS0FBSyxTQUFDLGlCQUFpQjtpQ0FDdkIsS0FBSyxTQUFDLHNCQUFzQjs0QkFDNUIsS0FBSyxTQUFDLGdCQUFnQjsyQkFDdEIsS0FBSyxTQUFDLGVBQWU7aUNBQ3JCLEtBQUssU0FBQyxzQkFBc0I7NEJBQzVCLEtBQUssU0FBQyxnQkFBZ0I7MkJBQ3RCLEtBQUssU0FBQyxlQUFlOzBCQUNyQixLQUFLLFNBQUMsY0FBYzs0QkFDcEIsS0FBSyxTQUFDLGdCQUFnQjtxQ0FDdEIsS0FBSyxTQUFDLDJCQUEyQjttQ0FDakMsS0FBSyxTQUFDLHlCQUF5QjtnQ0FDL0IsS0FBSyxTQUFDLHFCQUFxQjtxQkFDM0IsS0FBSyxTQUFDLFNBQVM7MEJBQ2YsS0FBSyxTQUFDLGVBQWU7NkJBQ3JCLEtBQUssU0FBQyxrQkFBa0I7dUJBQ3hCLEtBQUssU0FBQyxXQUFXO3VCQUNqQixLQUFLLFNBQUMsV0FBVzs0QkFDakIsS0FBSyxTQUFDLGlCQUFpQjtrQ0FDdkIsS0FBSyxTQUFDLHVCQUF1QjtxQkFDN0IsTUFBTTs2QkFDTixLQUFLLFNBQUMsa0JBQWtCO3VCQUN4QixLQUFLLFNBQUMsV0FBVztpQ0FDakIsS0FBSzs7OztJQTVCTiw2REFBeUU7O0lBQ3pFLCtEQUErRTs7SUFDL0Usa0RBQWlCOztJQUNqQixzREFBMkY7O0lBQzNGLHVEQUFpRTs7SUFDakUsbUVBQXVGOztJQUN2Rix3REFBaUU7O0lBQ2pFLDZEQUE2RTs7SUFDN0Usd0RBQThDOztJQUM5Qyx1REFBaUQ7O0lBQ2pELDZEQUFzRjs7SUFDdEYsd0RBQTJEOztJQUMzRCx1REFBcUM7O0lBQ3JDLHNEQUFtQzs7SUFDbkMsd0RBQXVDOztJQUN2QyxpRUFBMkU7O0lBQzNFLCtEQUFxRTs7SUFDckUsNERBQW1FOztJQUNuRSxpREFBb0M7O0lBQ3BDLHNEQUFvRDs7SUFDcEQseURBQTZEOztJQUM3RCxtREFBMEM7O0lBQzFDLG1EQUEwQzs7SUFDMUMsd0RBQTBEOztJQUMxRCw4REFBNEU7O0lBQzVFLGlEQUFzQzs7SUFDdEMseURBQXFEOztJQUNyRCxtREFBMEM7O0lBQzFDLDZEQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3N1a3UtdHJhbnNhY3Rpb24taGlzdG9yeScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdWt1LXRyYW5zYWN0aW9uLWhpc3RvcnkuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9zdWt1LXRyYW5zYWN0aW9uLWhpc3RvcnkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdWt1VHJhbnNhY3Rpb25IaXN0b3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCd0cmFuc2FjdGlvbi1oaXN0b3J5JykgdHJhbnNhY3Rpb25IaXN0b3J5ID0gJ1RyYW5zYWN0aW9uIEhpc3RvcnknO1xuXHRASW5wdXQoJ3RyYW5zYWN0aW9uLWRldGFpbHMtaWQnKSB0cmFuc2FjdGlvbkRldGFpbHNJZCA9ICd0cmFuc2FjdGlvbkRldGFpbHNJZCc7XG5cdEBJbnB1dCgpIGhlYWRpbmc7XG5cdEBJbnB1dCgnY3VzdG9tLWNsYXNzJykgY3VzdG9tQ2xhc3MgPSAnaGlzdG9yeVdpZGdldCBwLTQgcHQtMiBwYi0zIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgJztcblx0QElucHV0KCd0YWJsZS1iZy1jb2xvcicpIHRhYmxlQmdDb2xvciA9ICd0YWJsZUJnIG1iLTAgcGwtNCBwci01Jztcblx0QElucHV0KCd0cmFuc2FjdGlvbi1oaXN0b3J5LXRpdHRsZScpIHRyYW5zYWN0aW9uSGlzdG9yeVRpdHRsZSA9ICdwb3AgdGV4dC1jZW50ZXIgbWItMCc7XG5cdEBJbnB1dCgnYmctY3VzdG9tLWNsYXNzJykgYmdDdXN0b21DbGFzcyA9ICdib3gtc2hhZG93cyBtYi0zIHAtMCc7XG5cdEBJbnB1dCgnc3Bpbm5lci1jdXN0b20tY2xhc3MnKSBzcGlubmVyQ3VzdG9tQ2xhc3MgPSAnanVzdGlmeS1jb250ZW50LWNlbnRlcic7XG5cdEBJbnB1dCgnc3Bpbm5lci1yYWRpdXMnKSBzcGlubmVyUmFkaXVzID0gJzY1Jztcblx0QElucHV0KCdzcGlubmVyLWNvbG9yJykgc3Bpbm5lckNvbG9yID0gJ3ByaW1hcnknO1xuXHRASW5wdXQoJ2xvYWRpbmctY3VzdG9tLWNsYXNzJykgbG9hZGluZ0N1c3RvbUNsYXNzID0gJ210LTQgcGItMyBjb2wtc20tMTIgdGV4dC1jZW50ZXInO1xuXHRASW5wdXQoJ2xvYWRlci1tZXNzYWdlJykgbG9hZGVyTWVzc2FnZSA9ICdQbGVhc2Ugd2FpdC4uLiAnO1xuXHRASW5wdXQoJ2xvYWRpbmctY29sb3InKSBsb2FkaW5nQ29sb3I7XG5cdEBJbnB1dCgnbG9hZGluZy1zaXplJykgbG9hZGluZ1NpemU7XG5cdEBJbnB1dCgnbG9hZGluZy13ZWlnaHQnKSBsb2FkaW5nV2VpZ2h0O1xuXHRASW5wdXQoJ3RhYmxlLWhlYWRlci1jdXN0b20tY2xhc3MnKSB0YWJsZUhlYWRlckN1c3RvbUNsYXNzID0gJ3RleHQtY2VudGVyJztcblx0QElucHV0KCd0YWJsZS1ib2R5LWN1c3RvbS1jbGFzcycpIHRhYmxlQm9keUN1c3RvbUNsYXNzID0gJ3RleHQtbGVmdCc7XG5cdEBJbnB1dCgnYnV0dG9uLWN1c3RvbS1jbGFzcycpIGJ1dHRvbkN1c3RvbUNsYXNzID0gJ2J0biAgYnRuQ2FuY2VsJztcblx0QElucHV0KCd0eXBlLWlkJykgdHlwZUlkID0gJ3R5cGVJZCc7XG5cdEBJbnB1dCgnbXktYWNjb3VudC1pZCcpIG15QWNjb3VudElkID0gJ215QWNjb3VudElkJztcblx0QElucHV0KCdjb3VudGVyLXBhcnR5LWlkJykgY291bnRlclBhcnR5SWQgPSAnY291bnRlclBhcnR5SWQnO1xuXHRASW5wdXQoJ2Ftb3VudC1pZCcpIGFtb3VudElkID0gJ0Ftb3VudElkJztcblx0QElucHV0KCdzdGF0dXMtaWQnKSBzdGF0dXNJZCA9ICdzdGF0dXNJZCc7XG5cdEBJbnB1dCgnZGF0ZS1jcmVhdGVkLWlkJykgZGF0ZUNyZWF0ZWRJZCA9ICdkYXRlQ3JlYXRlZElkJztcblx0QElucHV0KCdwYXltZW50LW1hbmFnZW1lbnQtSWQnKSBwYXltZW50TWFuYWdlbWVudElkID0gJ3BheW1lbnRNYW5hZ2VtZW50SWQnO1xuXHRAT3V0cHV0KCkgYWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRASW5wdXQoJ2NhbmNlbC1idG4tbGFiZWwnKSBjYW5jZWxCdG5MYWJlbCA9ICdDYW5jZWwnO1xuXHRASW5wdXQoJ2NhbmNlbC1pZCcpIGNhbmNlbElkID0gJ2NhbmNlbElkJztcblx0QElucHV0KCkgdHJhbnNhY3Rpb25EZXRhaWxzID0gW107XG5cdGNvbnN0cnVjdG9yKCkgeyB9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5oZWFkaW5nID0ge1xuXHRcdFx0dHlwZTogJ1R5cGUnLFxuXHRcdFx0bXlBY2NvdW50OiAnTXkgQWNjb3VudCcsXG5cdFx0XHRjb3VudGVycGFydHk6ICdDb3VudGVycGFydHknLFxuXHRcdFx0YW1vdW50OiAnQW1vdW50Jyxcblx0XHRcdHN0YXR1czogJ1N0YXR1cycsXG5cdFx0XHRkYXRlSW5pdGlhdGVkOiAnSW5pdGlhdGVkIE9uJyxcblx0XHRcdGRhdGVDcmVhdGVkOiAnQ29tcGxldGVkIE9uJyxcblx0XHRcdHBheW1lbnRNYW5hZ2VtZW50OiAnUGF5bWVudCBNYW5hZ2VtZW50J1xuXHRcdH07XG5cdH1cbn1cbiJdfQ==