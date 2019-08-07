import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
export declare class SukuConfirmationModelComponent implements OnInit {
    dialogCustomRef: MatDialogRef<SukuConfirmationModelComponent>;
    data: any;
    dialogData: {
        'imgSrc': string;
        'message': string;
        'description': string;
        'buttonText': string;
        'messageCustomClass': string;
        'descriptionCustomClass': string;
        'buttonCustomClass': string;
        'messageId': string;
        'buttonId': string;
    };
    constructor(dialogCustomRef: MatDialogRef<SukuConfirmationModelComponent>, data: any);
    ngOnInit(): void;
    close(): void;
}
