import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
export declare class SukuModalService {
    dialogService: MatDialog;
    confirmationDialogWidth: any;
    confirmationDialogHeight: any;
    confirmationDialogClose: any;
    onDialogClose: EventEmitter<any>;
    constructor(dialogService: MatDialog);
    openConfirmationDialog(data?: any): void;
}
