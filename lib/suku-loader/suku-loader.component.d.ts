import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
export declare class SukuLoaderComponent implements OnInit {
    dialogCustomRef: MatDialogRef<SukuLoaderComponent>;
    data: any;
    waitingMessage: string;
    lodingDescription: string;
    loadingMessage: string;
    dialogData: {
        'logo': string;
        'logoCustomClass': string;
        'logoId': string;
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
    };
    constructor(dialogCustomRef: MatDialogRef<SukuLoaderComponent>, data: any);
    ngOnInit(): void;
    cancel(): void;
    submit(): void;
}
