import { OnInit, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
export declare class SukuDwollaFundingSourceComponent implements OnInit {
    private snackBar;
    _iavToken: any;
    _validResponse: any;
    enable: {
        button: boolean;
    };
    iavToken: any;
    validResponse: any;
    action: EventEmitter<{}>;
    constructor(snackBar: MatSnackBar);
    ngOnInit(): void;
    getDwollaHtml(): void;
    snackbar(msg: any): void;
}
