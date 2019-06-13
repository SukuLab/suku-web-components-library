import { OnInit, EventEmitter } from '@angular/core';
export declare class SukuTransactionHistoryComponent implements OnInit {
    transactionHistory: string;
    transactionDetailsId: string;
    transactionDetails: any;
    heading: any;
    typeId: string;
    myAccountId: string;
    counterPartyId: string;
    counterparty: string;
    amountId: string;
    statusId: string;
    dateCreatedId: string;
    paymentManagementId: string;
    action: EventEmitter<{}>;
    cancelId: string;
    cancel: string;
    constructor();
    ngOnInit(): void;
}
