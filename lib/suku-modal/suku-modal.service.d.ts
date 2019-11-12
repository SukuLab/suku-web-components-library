import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
export declare class SukuModalService {
    dialogService: MatDialog;
    confirmationDialogWidth: any;
    confirmationDialogHeight: any;
    confirmationDialogClose: boolean;
    onDialogClose: EventEmitter<any>;
    bSubject: BehaviorSubject<string>;
    confirmationStatusDialogWidth: any;
    confirmationStatusDialogHeight: any;
    constructor(dialogService: MatDialog);
    openConfirmationDialog(data?: any): void;
    openConfirmationModalDialog(data?: any): void;
    openConfirmationStatusModalDialog(data?: any): void;
    openLicenseModalDialogDialog(data?: any): void;
}
