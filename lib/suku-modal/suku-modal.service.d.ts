import { MatDialog } from '@angular/material';
export declare class SukuModalService {
    dialogService: MatDialog;
    dialogWidth: any;
    dialogHeight: any;
    constructor(dialogService: MatDialog);
    openInfoModal(data?: any): void;
    loader(): void;
}
