/**
 * @fileoverview added by tsickle
 * Generated from: lib/suku-transaction-history/suku-transaction-history.component.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N1a3Utd2ViY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9zdWt1LXRyYW5zYWN0aW9uLWhpc3Rvcnkvc3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNL0UsTUFBTSxPQUFPLCtCQUErQjtJQThCM0M7UUE3QjhCLHVCQUFrQixHQUFHLHFCQUFxQixDQUFDO1FBQ3hDLHlCQUFvQixHQUFHLHNCQUFzQixDQUFDO1FBRXhELGdCQUFXLEdBQUcscURBQXFELENBQUM7UUFDbEUsaUJBQVksR0FBRyx3QkFBd0IsQ0FBQztRQUM1Qiw2QkFBd0IsR0FBRyxzQkFBc0IsQ0FBQztRQUM3RCxrQkFBYSxHQUFHLHNCQUFzQixDQUFDO1FBQ2xDLHVCQUFrQixHQUFHLHdCQUF3QixDQUFDO1FBQ3BELGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLHVCQUFrQixHQUFHLGlDQUFpQyxDQUFDO1FBQzdELGtCQUFhLEdBQUcsaUJBQWlCLENBQUM7UUFJdkIsMkJBQXNCLEdBQUcsYUFBYSxDQUFDO1FBQ3pDLHlCQUFvQixHQUFHLFdBQVcsQ0FBQztRQUN2QyxzQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztRQUNqRCxXQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ1osZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDekIsbUJBQWMsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDaEIsa0JBQWEsR0FBRyxlQUFlLENBQUM7UUFDMUIsd0JBQW1CLEdBQUcscUJBQXFCLENBQUM7UUFDbEUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDWCxtQkFBYyxHQUFHLFFBQVEsQ0FBQztRQUNqQyxhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ2pDLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBRWpCLFFBQVE7UUFDUCxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2QsSUFBSSxFQUFFLE1BQU07WUFDWixTQUFTLEVBQUUsWUFBWTtZQUN2QixZQUFZLEVBQUUsY0FBYztZQUM1QixNQUFNLEVBQUUsUUFBUTtZQUNoQixNQUFNLEVBQUUsUUFBUTtZQUNoQixhQUFhLEVBQUUsY0FBYztZQUM3QixXQUFXLEVBQUUsY0FBYztZQUMzQixpQkFBaUIsRUFBRSxvQkFBb0I7U0FDdkMsQ0FBQztJQUNILENBQUM7OztZQWhERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsMnRIQUF3RDs7YUFFeEQ7Ozs7O2lDQUVDLEtBQUssU0FBQyxxQkFBcUI7bUNBQzNCLEtBQUssU0FBQyx3QkFBd0I7c0JBQzlCLEtBQUs7MEJBQ0wsS0FBSyxTQUFDLGNBQWM7MkJBQ3BCLEtBQUssU0FBQyxnQkFBZ0I7dUNBQ3RCLEtBQUssU0FBQyw0QkFBNEI7NEJBQ2xDLEtBQUssU0FBQyxpQkFBaUI7aUNBQ3ZCLEtBQUssU0FBQyxzQkFBc0I7NEJBQzVCLEtBQUssU0FBQyxnQkFBZ0I7MkJBQ3RCLEtBQUssU0FBQyxlQUFlO2lDQUNyQixLQUFLLFNBQUMsc0JBQXNCOzRCQUM1QixLQUFLLFNBQUMsZ0JBQWdCOzJCQUN0QixLQUFLLFNBQUMsZUFBZTswQkFDckIsS0FBSyxTQUFDLGNBQWM7NEJBQ3BCLEtBQUssU0FBQyxnQkFBZ0I7cUNBQ3RCLEtBQUssU0FBQywyQkFBMkI7bUNBQ2pDLEtBQUssU0FBQyx5QkFBeUI7Z0NBQy9CLEtBQUssU0FBQyxxQkFBcUI7cUJBQzNCLEtBQUssU0FBQyxTQUFTOzBCQUNmLEtBQUssU0FBQyxlQUFlOzZCQUNyQixLQUFLLFNBQUMsa0JBQWtCO3VCQUN4QixLQUFLLFNBQUMsV0FBVzt1QkFDakIsS0FBSyxTQUFDLFdBQVc7NEJBQ2pCLEtBQUssU0FBQyxpQkFBaUI7a0NBQ3ZCLEtBQUssU0FBQyx1QkFBdUI7cUJBQzdCLE1BQU07NkJBQ04sS0FBSyxTQUFDLGtCQUFrQjt1QkFDeEIsS0FBSyxTQUFDLFdBQVc7aUNBQ2pCLEtBQUs7Ozs7SUE1Qk4sNkRBQXlFOztJQUN6RSwrREFBK0U7O0lBQy9FLGtEQUFpQjs7SUFDakIsc0RBQTJGOztJQUMzRix1REFBaUU7O0lBQ2pFLG1FQUF1Rjs7SUFDdkYsd0RBQWlFOztJQUNqRSw2REFBNkU7O0lBQzdFLHdEQUE4Qzs7SUFDOUMsdURBQWlEOztJQUNqRCw2REFBc0Y7O0lBQ3RGLHdEQUEyRDs7SUFDM0QsdURBQXFDOztJQUNyQyxzREFBbUM7O0lBQ25DLHdEQUF1Qzs7SUFDdkMsaUVBQTJFOztJQUMzRSwrREFBcUU7O0lBQ3JFLDREQUFtRTs7SUFDbkUsaURBQW9DOztJQUNwQyxzREFBb0Q7O0lBQ3BELHlEQUE2RDs7SUFDN0QsbURBQTBDOztJQUMxQyxtREFBMEM7O0lBQzFDLHdEQUEwRDs7SUFDMUQsOERBQTRFOztJQUM1RSxpREFBc0M7O0lBQ3RDLHlEQUFxRDs7SUFDckQsbURBQTBDOztJQUMxQyw2REFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdzdWt1LXRyYW5zYWN0aW9uLWhpc3RvcnknLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc3VrdS10cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3VrdVRyYW5zYWN0aW9uSGlzdG9yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgndHJhbnNhY3Rpb24taGlzdG9yeScpIHRyYW5zYWN0aW9uSGlzdG9yeSA9ICdUcmFuc2FjdGlvbiBIaXN0b3J5Jztcblx0QElucHV0KCd0cmFuc2FjdGlvbi1kZXRhaWxzLWlkJykgdHJhbnNhY3Rpb25EZXRhaWxzSWQgPSAndHJhbnNhY3Rpb25EZXRhaWxzSWQnO1xuXHRASW5wdXQoKSBoZWFkaW5nO1xuXHRASW5wdXQoJ2N1c3RvbS1jbGFzcycpIGN1c3RvbUNsYXNzID0gJ2hpc3RvcnlXaWRnZXQgcC00IHB0LTIgcGItMyB0ZXh0LXdoaXRlIHRleHQtY2VudGVyICc7XG5cdEBJbnB1dCgndGFibGUtYmctY29sb3InKSB0YWJsZUJnQ29sb3IgPSAndGFibGVCZyBtYi0wIHBsLTQgcHItNSc7XG5cdEBJbnB1dCgndHJhbnNhY3Rpb24taGlzdG9yeS10aXR0bGUnKSB0cmFuc2FjdGlvbkhpc3RvcnlUaXR0bGUgPSAncG9wIHRleHQtY2VudGVyIG1iLTAnO1xuXHRASW5wdXQoJ2JnLWN1c3RvbS1jbGFzcycpIGJnQ3VzdG9tQ2xhc3MgPSAnYm94LXNoYWRvd3MgbWItMyBwLTAnO1xuXHRASW5wdXQoJ3NwaW5uZXItY3VzdG9tLWNsYXNzJykgc3Bpbm5lckN1c3RvbUNsYXNzID0gJ2p1c3RpZnktY29udGVudC1jZW50ZXInO1xuXHRASW5wdXQoJ3NwaW5uZXItcmFkaXVzJykgc3Bpbm5lclJhZGl1cyA9ICc2NSc7XG5cdEBJbnB1dCgnc3Bpbm5lci1jb2xvcicpIHNwaW5uZXJDb2xvciA9ICdwcmltYXJ5Jztcblx0QElucHV0KCdsb2FkaW5nLWN1c3RvbS1jbGFzcycpIGxvYWRpbmdDdXN0b21DbGFzcyA9ICdtdC00IHBiLTMgY29sLXNtLTEyIHRleHQtY2VudGVyJztcblx0QElucHV0KCdsb2FkZXItbWVzc2FnZScpIGxvYWRlck1lc3NhZ2UgPSAnUGxlYXNlIHdhaXQuLi4gJztcblx0QElucHV0KCdsb2FkaW5nLWNvbG9yJykgbG9hZGluZ0NvbG9yO1xuXHRASW5wdXQoJ2xvYWRpbmctc2l6ZScpIGxvYWRpbmdTaXplO1xuXHRASW5wdXQoJ2xvYWRpbmctd2VpZ2h0JykgbG9hZGluZ1dlaWdodDtcblx0QElucHV0KCd0YWJsZS1oZWFkZXItY3VzdG9tLWNsYXNzJykgdGFibGVIZWFkZXJDdXN0b21DbGFzcyA9ICd0ZXh0LWNlbnRlcic7XG5cdEBJbnB1dCgndGFibGUtYm9keS1jdXN0b20tY2xhc3MnKSB0YWJsZUJvZHlDdXN0b21DbGFzcyA9ICd0ZXh0LWxlZnQnO1xuXHRASW5wdXQoJ2J1dHRvbi1jdXN0b20tY2xhc3MnKSBidXR0b25DdXN0b21DbGFzcyA9ICdidG4gIGJ0bkNhbmNlbCc7XG5cdEBJbnB1dCgndHlwZS1pZCcpIHR5cGVJZCA9ICd0eXBlSWQnO1xuXHRASW5wdXQoJ215LWFjY291bnQtaWQnKSBteUFjY291bnRJZCA9ICdteUFjY291bnRJZCc7XG5cdEBJbnB1dCgnY291bnRlci1wYXJ0eS1pZCcpIGNvdW50ZXJQYXJ0eUlkID0gJ2NvdW50ZXJQYXJ0eUlkJztcblx0QElucHV0KCdhbW91bnQtaWQnKSBhbW91bnRJZCA9ICdBbW91bnRJZCc7XG5cdEBJbnB1dCgnc3RhdHVzLWlkJykgc3RhdHVzSWQgPSAnc3RhdHVzSWQnO1xuXHRASW5wdXQoJ2RhdGUtY3JlYXRlZC1pZCcpIGRhdGVDcmVhdGVkSWQgPSAnZGF0ZUNyZWF0ZWRJZCc7XG5cdEBJbnB1dCgncGF5bWVudC1tYW5hZ2VtZW50LUlkJykgcGF5bWVudE1hbmFnZW1lbnRJZCA9ICdwYXltZW50TWFuYWdlbWVudElkJztcblx0QE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QElucHV0KCdjYW5jZWwtYnRuLWxhYmVsJykgY2FuY2VsQnRuTGFiZWwgPSAnQ2FuY2VsJztcblx0QElucHV0KCdjYW5jZWwtaWQnKSBjYW5jZWxJZCA9ICdjYW5jZWxJZCc7XG5cdEBJbnB1dCgpIHRyYW5zYWN0aW9uRGV0YWlscyA9IFtdO1xuXHRjb25zdHJ1Y3RvcigpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuaGVhZGluZyA9IHtcblx0XHRcdHR5cGU6ICdUeXBlJyxcblx0XHRcdG15QWNjb3VudDogJ015IEFjY291bnQnLFxuXHRcdFx0Y291bnRlcnBhcnR5OiAnQ291bnRlcnBhcnR5Jyxcblx0XHRcdGFtb3VudDogJ0Ftb3VudCcsXG5cdFx0XHRzdGF0dXM6ICdTdGF0dXMnLFxuXHRcdFx0ZGF0ZUluaXRpYXRlZDogJ0luaXRpYXRlZCBPbicsXG5cdFx0XHRkYXRlQ3JlYXRlZDogJ0NvbXBsZXRlZCBPbicsXG5cdFx0XHRwYXltZW50TWFuYWdlbWVudDogJ1BheW1lbnQgTWFuYWdlbWVudCdcblx0XHR9O1xuXHR9XG59XG4iXX0=