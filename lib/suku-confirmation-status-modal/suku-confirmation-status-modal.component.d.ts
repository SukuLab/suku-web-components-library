import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
export declare class SukuConfirmationStatusModalComponent implements OnInit {
    dialogCustomRef: MatDialogRef<SukuConfirmationStatusModalComponent>;
    private snackBar;
    data: any;
    controlOneValue: any;
    controlTwoValue: any;
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
        controlOne: string;
        controlTwo: string;
        controlTwoRequired: string;
        controlOneId: string;
        controlTwoId: string;
        controlOnePlaceholder: string;
        controlTwoPlaceholder: string;
        controlTwoRquiredErrorMsg: string;
    };
    controlOne: FormControl;
    controlTwo: FormControl;
    disableValue: Boolean;
    _subscriptionTwo: any;
    _subscriptionOne: any;
    constructor(dialogCustomRef: MatDialogRef<SukuConfirmationStatusModalComponent>, snackBar: MatSnackBar, data: any);
    ngOnInit(): void;
    close(): void;
    checkChar(event: any): void;
    submit(): void;
}