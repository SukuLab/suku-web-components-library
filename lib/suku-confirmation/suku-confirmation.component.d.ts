import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
export declare class SukuConfirmationComponent implements OnInit {
    dialogCustomRef: MatDialogRef<SukuConfirmationComponent>;
    data: any;
    dialogData: {
        'icon': string;
        'iconCustomClass': string;
        'iconId': string;
        'titleOne': string;
        'titleOneId': string;
        'titleOneCustomClass': string;
        'titleTwo': string;
        'titleTwoId': string;
        'titleTwoCustomClass': string;
        'titleThree': string;
        'titleThreeId': string;
        'titleThreeCustomClass': string;
        'titleBoxCustomClass': string;
        'buttonLableOne': string;
        'buttonLableOneId': string;
        'buttonLableTwo': string;
        'buttonLableTwoId': string;
        'buttonCustomClass': string;
    };
    constructor(dialogCustomRef: MatDialogRef<SukuConfirmationComponent>, data: any);
    ngOnInit(): void;
    cancel(): void;
    submit(): void;
}
