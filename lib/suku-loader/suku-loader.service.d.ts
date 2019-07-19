import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
export declare class SukuLoaderService {
    dialogService: MatDialog;
    loaderDialogWidth: any;
    loaderDialogHeight: any;
    loaderDialogClose: any;
    onDialogClose: EventEmitter<any>;
    constructor(dialogService: MatDialog);
    openLoader(data?: any): void;
}
