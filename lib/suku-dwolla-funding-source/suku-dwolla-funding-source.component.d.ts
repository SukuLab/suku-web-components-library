import { OnInit, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
export declare class SukuDwollaFundingSourceComponent implements OnInit {
    private snackBar;
    iavtoken: string;
    action: EventEmitter<{}>;
    constructor(snackBar: MatSnackBar);
    ngOnInit(): void;
    getDwollaHtml(): void;
}
