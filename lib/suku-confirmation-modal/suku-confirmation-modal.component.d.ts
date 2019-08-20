import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
export declare class SukuConfirmationModalComponent implements OnInit {
    dialogCustomRef: MatDialogRef<SukuConfirmationModalComponent>;
    data: any;
    dialogData: {
        'imgSrc': string;
        'message': string;
        'description': string;
        'loader': string;
        'buttonText': string;
        'messageCustomClass': string;
        'descriptionCustomClass': string;
        'buttonCustomClass': string;
        'messageId': string;
        'buttonId': string;
    };
    constructor(dialogCustomRef: MatDialogRef<SukuConfirmationModalComponent>, data: any);
    ngOnInit(): void;
    close(): void;
}
