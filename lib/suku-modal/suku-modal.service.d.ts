import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
export declare class SukuModalService {
    dialogService: MatDialog;
    confirmationDialogWidth: any;
    confirmationDialogHeight: any;
    confirmationDialogClose: any;
    onDialogCloseInterest: EventEmitter<any>;
    onDialogCloseList: EventEmitter<any>;
    onDialogClosePlaceBid: EventEmitter<any>;
    onDialogCloseAcceptBid: EventEmitter<any>;
    onDialogCloseSendPayment: EventEmitter<any>;
    onDialogCloseDeleteList: EventEmitter<any>;
    onDialogCloseCancelBid: EventEmitter<any>;
    onDialogCloseUpdateInterest: EventEmitter<any>;
    constructor(dialogService: MatDialog);
    openConfirmationDialogInterest(data?: any): void;
    openConfirmationDialogList(data?: any): void;
    openConfirmationDialogPlaceBid(data?: any): void;
    openConfirmationDialogAcceptBid(data?: any): void;
    openConfirmationDialogSendPayment(data?: any): void;
    openConfirmationDialogDeleteList(data?: any): void;
    openConfirmationDialogCancelBid(data?: any): void;
    openConfirmationDialogUpdateInterest(data?: any): void;
}
