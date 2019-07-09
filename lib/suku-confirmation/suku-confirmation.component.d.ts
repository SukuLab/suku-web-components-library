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
        'titleTwo': string;
        'titleTwoId': string;
        'titleThree': string;
        'titleThreeId': string;
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
