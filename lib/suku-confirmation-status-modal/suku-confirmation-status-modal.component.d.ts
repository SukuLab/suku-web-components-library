import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
export declare class SukuConfirmationStatusModalComponent implements OnInit {
    dialogCustomRef: MatDialogRef<SukuConfirmationStatusModalComponent>;
    data: any;
    dialogData: {
        'imgSrc': string;
        'imgId': string;
        'icon': string;
        'iconId': string;
        'iconCustomClass': string;
        'message': string;
        'description': string;
        'loader': string;
        'buttonText': string;
        'messageCustomClass': string;
        'descriptionCustomClass': string;
        'descriptionOneCustomClass': string;
        'descriptionOne': string;
        'buttonCustomClass': string;
        'messageId': string;
        'buttonId': string;
        cancelBtnText: string;
        submitBtnTxt: string;
        cancelBtnCustomClass: string;
        submitBtnCustomClass: string;
    };
    constructor(dialogCustomRef: MatDialogRef<SukuConfirmationStatusModalComponent>, data: any);
    ngOnInit(): void;
    close(): void;
    submit(): void;
}
