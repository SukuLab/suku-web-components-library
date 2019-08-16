import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
export declare class SukuModalService {
    dialogService: MatDialog;
    confirmationDialogWidth: any;
    confirmationDialogHeight: any;
    confirmationDialogClose: boolean;
    onDialogClose: EventEmitter<any>;
    constructor(dialogService: MatDialog);
    openConfirmationDialog(data?: any): void;
    openConfirmationModalDialog(data?: any): void;
    openLicenseModalDialogDialog(data?: any): void;
}
